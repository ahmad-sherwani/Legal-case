import { store } from '../store.js';
import { getIcon, getStatusBadge, getUrgencyBadge, formatDate, CATEGORIES } from '../utils/helpers.js';
import { showToast } from '../utils/notifications.js';
import { openEditProfileModal } from './authView.js';

export function renderLawyerView(container) {
  const currentUser = store.getCurrentUser();
  const allCases = store.getCases();

  // Compute Lawyer Stats
  const openMarketplaceCases = allCases.filter(c => c.status === 'Pending Lawyer' || c.status === 'Lawyer Requested');
  const myBiddedCases = allCases.filter(c => c.requests && c.requests.some(r => r.lawyerId === currentUser.id));
  const myApprovedCases = allCases.filter(c => c.assignedLawyerId === currentUser.id);

  let activeTab = 'marketplace'; // 'marketplace' or 'my-cases'

  function renderContent() {
    const currentCasesToDisplay = activeTab === 'marketplace' ? openMarketplaceCases : myBiddedCases;

    container.innerHTML = `
      <!-- Top Lawyer Profile & Credentials Banner -->
      <div class="glass-card" style="margin-bottom: 24px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div class="lawyer-avatar-lg" style="width: 58px; height: 58px; font-size: 1.5rem; overflow: hidden;">
            ${currentUser.profilePic ? `<img src="${currentUser.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">` : currentUser.name.charAt(0)}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <h2 class="brand-font" style="font-size: 1.3rem; margin: 0;">${currentUser.name}</h2>
              <span class="location-pill">${getIcon('mapPin', 12)} ${currentUser.location || 'New Delhi, Delhi'}</span>
              <span class="aadhaar-badge verified"><span class="badge-dot"></span>✓ Aadhaar Verified</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; display: flex; gap: 14px; flex-wrap: wrap;">
              <span><strong>Bar Reg ID:</strong> ${currentUser.barId || 'BAR-NY-89421'}</span>
              <span><strong>Experience:</strong> ${currentUser.experience || '12 Years'}</span>
              <span><strong>Cases Handled:</strong> ${currentUser.casesHandled || 140}+</span>
              <span><strong>Specialization:</strong> ${currentUser.specialization || 'Corporate & Civil Law'}</span>
            </div>
          </div>
        </div>

        <button class="btn-outline-amber" id="btn-edit-lawyer-profile">
          ${getIcon('edit', 16)} Edit Profile & Credentials
        </button>
      </div>

      <!-- Top Lawyer Stats Header -->
      <div class="stats-grid">
        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-gold">${getIcon('scale', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${openMarketplaceCases.length}</span>
            <span class="stat-label">Open Marketplace Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-blue">${getIcon('send', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${myBiddedCases.length}</span>
            <span class="stat-label">Proposals / Invitations</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-emerald">${getIcon('award', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${myApprovedCases.length}</span>
            <span class="stat-label">My Approved Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-indigo">${getIcon('briefcase', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${currentUser.casesHandled || 140}+ Cases</span>
            <span class="stat-label">Total Work Experience</span>
          </div>
        </div>
      </div>

      <!-- Section Header -->
      <div class="section-header">
        <div class="section-title-group">
          <h2 class="section-title brand-font">Advocate Case Directory</h2>
          <p class="section-subtitle">Browse client case listings, inspect legal details, and submit representation proposals.</p>
        </div>
      </div>


      <!-- Navigation Tabs -->
      <div class="tabs-header">
        <button class="tab-btn ${activeTab === 'marketplace' ? 'active' : ''}" id="tab-marketplace">
          ${getIcon('scale', 16)} Open Cases Marketplace (${openMarketplaceCases.length})
        </button>
        <button class="tab-btn ${activeTab === 'my-cases' ? 'active' : ''}" id="tab-my-cases">
          ${getIcon('award', 16)} My Submitted Proposals & Active Cases (${myBiddedCases.length})
        </button>
      </div>

      <!-- Controls Bar -->
      <div class="controls-bar">
        <div class="search-box">
          <span class="search-icon">${getIcon('search', 16)}</span>
          <input type="text" class="search-input" id="lawyer-search" placeholder="Search cases by title, client, or category...">
        </div>

        <div class="filter-group">
          <select class="filter-select" id="lawyer-filter-category">
            <option value="ALL">All Categories</option>
            ${CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
          </select>
        </div>
      </div>

      <!-- Cases Grid -->
      <div class="cases-grid" id="lawyer-cases-list">
        ${renderLawyerCasesList(currentCasesToDisplay, currentUser)}
      </div>
    `;

    // Attach Tab listeners
    const editProfileBtn = document.getElementById('btn-edit-lawyer-profile');
    if (editProfileBtn) {
      editProfileBtn.addEventListener('click', () => {
        openEditProfileModal();
      });
    }

    document.getElementById('tab-marketplace').addEventListener('click', () => {
      activeTab = 'marketplace';
      renderContent();
    });

    document.getElementById('tab-my-cases').addEventListener('click', () => {
      activeTab = 'my-cases';
      renderContent();
    });

    // Attach Search & Filters
    const searchInput = document.getElementById('lawyer-search');
    const catFilter = document.getElementById('lawyer-filter-category');

    const filterCases = () => {
      const query = searchInput.value.toLowerCase();
      const cat = catFilter.value;

      const baseList = activeTab === 'marketplace' ? openMarketplaceCases : myBiddedCases;
      const filtered = baseList.filter(c => {
        const matchesSearch = c.title.toLowerCase().includes(query) || c.id.toLowerCase().includes(query) || c.clientName.toLowerCase().includes(query) || c.description.toLowerCase().includes(query);
        const matchesCat = cat === 'ALL' || c.category === cat;
        return matchesSearch && matchesCat;
      });

      document.getElementById('lawyer-cases-list').innerHTML = renderLawyerCasesList(filtered, currentUser);
      attachLawyerCardListeners(container);
    };

    searchInput.addEventListener('input', filterCases);
    catFilter.addEventListener('change', filterCases);

    attachLawyerCardListeners(container);
  }

  renderContent();
}

function renderLawyerCasesList(cases, currentUser) {
  if (cases.length === 0) {
    return `
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${getIcon('scale', 48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Cases Available</h3>
        <p>There are no open cases matching your search criteria at this moment.</p>
      </div>
    `;
  }

  return cases.map(c => {
    const userRequest = c.requests ? c.requests.find(r => r.lawyerId === currentUser.id) : null;
    const isAssignedToMe = c.assignedLawyerId === currentUser.id;

    return `
      <div class="glass-card glass-card-hover case-card">
        <div>
          <div class="case-card-header">
            <span class="case-number">${c.id}</span>
            <div style="display: flex; gap: 6px; align-items: center;">
              ${getUrgencyBadge(c.urgency)}
              ${getStatusBadge(c.status)}
            </div>
          </div>

          <h3 class="case-title">${c.title}</h3>
          <p class="case-description">${c.description}</p>
        </div>

        <div>
          <div class="case-meta">
            <div class="meta-item">${getIcon('user', 14)} <span>Client: ${c.clientName}</span></div>
            <div class="meta-item">${getIcon('mapPin', 14)} <span>${c.location}</span></div>
            <div class="meta-item">${getIcon('scale', 14)} <span class="category-pill">${c.category}</span></div>
          </div>

          ${isAssignedToMe ? `
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34D399; padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-weight: 700; font-size: 0.85rem; text-align: center;">
              ${getIcon('check', 14)} You are the Approved Advocate for this case
            </div>
          ` : userRequest ? `
            <div style="background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #60A5FA; padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem;">
              <strong>Your Proposal:</strong> ${userRequest.proposedFee} (${userRequest.status.toUpperCase()})
            </div>
          ` : ''}

          <div class="case-card-footer" style="gap: 8px;">
            ${!isAssignedToMe && !userRequest && c.status !== 'Verdict Rendered' ? `
              <button class="btn-primary request-case-btn" data-case-id="${c.id}" style="flex: 1; justify-content: center; font-size: 0.85rem;">
                ${getIcon('send', 14)} Request Case
              </button>
            ` : ''}

            <button class="btn-secondary view-lawyer-case-btn" data-case-id="${c.id}" style="flex: 1; justify-content: center; font-size: 0.85rem;">
              ${getIcon('eye', 14)} Full Details
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function attachLawyerCardListeners(container) {
  container.querySelectorAll('.request-case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      openLawyerRequestModal(caseId);
    });
  });

  container.querySelectorAll('.view-lawyer-case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      openLawyerCaseDetailModal(caseId);
    });
  });
}

function openLawyerRequestModal(caseId) {
  const c = store.getCaseById(caseId);
  const currentUser = store.getCurrentUser();

  const modalHtml = `
    <div class="modal-overlay active" id="lawyer-request-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <div style="font-size: 0.8rem; color: var(--primary-gold); font-weight: 700;">CASE ${c.id}</div>
            <h3 class="brand-font" style="font-size: 1.3rem;">Request to Represent Client</h3>
          </div>
          <button class="modal-close" id="close-request-modal">${getIcon('x', 20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; border-left: 3px solid var(--primary-gold);">
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 4px;">${c.title}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Client: ${c.clientName} &bull; Category: ${c.category}</div>
        </div>

        <form id="lawyer-request-form">
          <div class="form-group">
            <label class="form-label">Advocate Bar Credentials</label>
            <div style="font-size: 0.85rem; color: var(--text-muted); padding: 10px; background: rgba(255,255,255,0.04); border-radius: var(--radius-md);">
              ${currentUser.name} (${currentUser.barId || 'BAR-NY-VERIFIED'}) &bull; Exp: ${currentUser.experience || '10 Years'}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Proposed Legal Retainer / Representation Fee</label>
            <input type="text" class="form-input" id="req-fee" placeholder="e.g. $4,000 Fixed Retainer or $250/hr" required>
          </div>

          <div class="form-group">
            <label class="form-label">Proposed Case Strategy & Legal Counsel Note for Client</label>
            <textarea class="form-textarea" id="req-note" placeholder="Explain your experience with similar cases, recommended immediate injunctions or legal motions, and timeline..." required></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
            ${getIcon('send', 18)} Submit Formal Representation Proposal
          </button>
        </form>
      </div>
    </div>
  `;

  let existing = document.getElementById('lawyer-request-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('lawyer-request-modal');
  document.getElementById('close-request-modal').addEventListener('click', () => modal.remove());

  document.getElementById('lawyer-request-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fee = document.getElementById('req-fee').value;
    const note = document.getElementById('req-note').value;

    store.addLawyerRequest(c.id, { proposedFee: fee, strategyNote: note });
    showToast(`Representation request sent to Client ${c.clientName}!`, 'success', 'Proposal Sent');
    modal.remove();
  });
}

function openLawyerCaseDetailModal(caseId) {
  const c = store.getCaseById(caseId);

  const modalHtml = `
    <div class="modal-overlay active" id="lawyer-detail-modal">
      <div class="modal-content" style="max-width: 750px;">
        <div class="modal-header">
          <div>
            <span class="case-number">${c.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">${c.title}</h3>
          </div>
          <button class="modal-close" id="close-lawyer-detail">${getIcon('x', 20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border-light);">
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            ${getUrgencyBadge(c.urgency)}
            ${getStatusBadge(c.status)}
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${c.description}</p>
          <div style="margin-top: 12px; font-size: 0.8rem; color: var(--text-dim);">
            <strong>Client Name:</strong> ${c.clientName} | <strong>Incident Location:</strong> ${c.location} | <strong>Date:</strong> ${formatDate(c.incidentDate)}
          </div>
        </div>

        ${c.hearing ? `
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
            <h4 style="color: #C084FC; font-weight: 700; margin-bottom: 8px;">Court Hearing Notice</h4>
            <div>Scheduled for <strong>${formatDate(c.hearing.date)} at ${c.hearing.time}</strong> in ${c.hearing.courtroom}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Presiding: ${c.hearing.judgeName}</div>
          </div>
        ` : ''}

        ${c.verdict ? `
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 16px;">
            <h4 style="color: #34D399; font-weight: 700; margin-bottom: 6px;">Case Judgment Rendered</h4>
            <div><strong>Ruling:</strong> ${c.verdict.ruling}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${c.verdict.summary}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  let existing = document.getElementById('lawyer-detail-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('lawyer-detail-modal');
  document.getElementById('close-lawyer-detail').addEventListener('click', () => modal.remove());
}
