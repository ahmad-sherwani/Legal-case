// ==========================================================================
// Client Portal View Component
// ==========================================================================

import { store } from '../store.js';
import { getIcon, getStatusBadge, getUrgencyBadge, formatDate, CATEGORIES, URGENCY_LEVELS } from '../utils/helpers.js';
import { showToast } from '../utils/notifications.js';

let clientActiveTab = 'my-cases'; // 'my-cases' or 'find-lawyers'


export function renderClientView(container) {
  const currentUser = store.getCurrentUser();
  const allCases = store.getCases();
  const clientCases = allCases.filter(c => c.clientId === currentUser.id);
  const allUsers = store.getUsers();
  const allLawyers = allUsers.filter(u => u.role === 'lawyer');

  // Compute Client Stats
  const totalCount = clientCases.length;
  const pendingCount = clientCases.filter(c => c.status === 'Pending Lawyer' || c.status === 'Lawyer Requested').length;
  const assignedCount = clientCases.filter(c => c.status === 'Lawyer Assigned' || c.status === 'Hearing Scheduled').length;
  const closedCount = clientCases.filter(c => c.status === 'Verdict Rendered' || c.status === 'Closed').length;

  // Extract unique lawyer locations
  const locations = Array.from(new Set(allLawyers.map(l => l.location).filter(Boolean)));

  function renderContent() {
    container.innerHTML = `
      <!-- Top Client Stats Header -->
      <div class="stats-grid">
        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-gold">${getIcon('fileText', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${totalCount}</span>
            <span class="stat-label">Total My Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-blue">${getIcon('clock', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${pendingCount}</span>
            <span class="stat-label">Awaiting Lawyer Approval</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-indigo">${getIcon('lawyer', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${assignedCount}</span>
            <span class="stat-label">Active / In Hearing</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-emerald">${getIcon('gavel', 22)}</div>
          <div class="stat-info">
            <span class="stat-value">${closedCount}</span>
            <span class="stat-label">Verdicts Delivered</span>
          </div>
        </div>
      </div>

      <!-- Section Header & Register Button -->
      <div class="section-header">
        <div class="section-title-group">
          <h2 class="section-title brand-font">Client Case & Advocate Portal</h2>
          <p class="section-subtitle">Register new disputes, browse advocates by location & experience, and request representation.</p>
        </div>

        <button class="btn-primary" id="btn-register-case">
          ${getIcon('plus', 20)} Register New Case
        </button>
      </div>

      <!-- Client Navigation Tabs -->
      <div class="tabs-header">
        <button class="tab-btn ${clientActiveTab === 'my-cases' ? 'active' : ''}" id="tab-client-cases">
          ${getIcon('fileText', 16)} My Registered Cases (${clientCases.length})
        </button>
        <button class="tab-btn ${clientActiveTab === 'find-lawyers' ? 'active' : ''}" id="tab-find-lawyers">
          ${getIcon('lawyer', 16)} Find Advocates & Top Lawyers (${allLawyers.length})
        </button>
      </div>

      ${clientActiveTab === 'my-cases' ? renderMyCasesSection(clientCases) : renderFindLawyersSection(allLawyers, locations)}
    `;

    // Tab Listeners
    document.getElementById('tab-client-cases').addEventListener('click', () => {
      clientActiveTab = 'my-cases';
      renderContent();
    });

    document.getElementById('tab-find-lawyers').addEventListener('click', () => {
      clientActiveTab = 'find-lawyers';
      renderContent();
    });

    document.getElementById('btn-register-case').addEventListener('click', () => openNewCaseModal());

    if (clientActiveTab === 'my-cases') {
      attachMyCasesListeners(container, clientCases);
    } else {
      attachFindLawyersListeners(container, allLawyers, clientCases);
    }
  }

  renderContent();
}

function renderMyCasesSection(clientCases) {
  return `
    <!-- Controls Bar -->
    <div class="controls-bar">
      <div class="search-box">
        <span class="search-icon">${getIcon('search', 16)}</span>
        <input type="text" class="search-input" id="client-search" placeholder="Search my cases by title or ID...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="client-filter-category">
          <option value="ALL">All Categories</option>
          ${CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>

        <select class="filter-select" id="client-filter-status">
          <option value="ALL">All Statuses</option>
          <option value="Pending Lawyer">Pending Lawyer</option>
          <option value="Lawyer Requested">Lawyer Bids Received</option>
          <option value="Lawyer Assigned">Lawyer Approved</option>
          <option value="Hearing Scheduled">Hearing Scheduled</option>
          <option value="Verdict Rendered">Verdict Rendered</option>
        </select>
      </div>
    </div>

    <!-- Cases List / Grid -->
    <div class="cases-grid" id="client-cases-list">
      ${renderClientCasesList(clientCases)}
    </div>
  `;
}

function renderFindLawyersSection(lawyers, locations) {
  return `
    <!-- Advocate Controls Bar -->
    <div class="controls-bar">
      <div class="search-box">
        <span class="search-icon">${getIcon('search', 16)}</span>
        <input type="text" class="search-input" id="lawyer-dir-search" placeholder="Search advocates by name, bar ID, or specialization...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="lawyer-dir-location">
          <option value="ALL">All Locations / Cities</option>
          ${locations.map(loc => `<option value="${loc}">${loc}</option>`).join('')}
        </select>

        <select class="filter-select" id="lawyer-dir-top">
          <option value="ALL">All Advocates</option>
          <option value="TOP">★ Top Rated Advocates Only</option>
        </select>
      </div>
    </div>

    <!-- Advocates Grid -->
    <div class="cases-grid" id="lawyers-directory-list">
      ${renderLawyersDirectoryList(lawyers)}
    </div>
  `;
}

function renderLawyersDirectoryList(lawyers) {
  if (lawyers.length === 0) {
    return `
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${getIcon('lawyer', 48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Advocates Found</h3>
        <p>No legal advocates match your search and location criteria.</p>
      </div>
    `;
  }

  return lawyers.map(l => {
    return `
      <div class="glass-card glass-card-hover lawyer-card">
        ${l.isTopLawyer ? `
          <div class="top-lawyer-badge">
            ${getIcon('star', 12)} Top Advocate
          </div>
        ` : ''}

        <div>
          <div class="lawyer-profile-header">
            <div class="lawyer-avatar-lg" style="overflow: hidden;">
              ${l.profilePic ? `<img src="${l.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">` : l.name.charAt(0)}
            </div>
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">${l.name}</h3>
              <div style="font-size: 0.78rem; color: var(--primary-gold); font-family: monospace; font-weight: 700;">Bar Reg ID: ${l.barId || 'BAR-NY-89421'}</div>
              <div style="margin-top: 4px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                <span class="location-pill">${getIcon('mapPin', 12)} ${l.location || 'New Delhi, Delhi'}</span>
                <span class="aadhaar-badge verified" style="font-size: 0.68rem; padding: 1px 6px;">✓ Verified</span>
              </div>
            </div>
          </div>

          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">
            <strong>Specialization:</strong> ${l.specialization || 'Corporate & Civil Law'}
          </div>

          <!-- Advocate Stats Row -->
          <div class="lawyer-stats-row">
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${l.experience || '5+ Yrs'}</span>
              <span class="lawyer-stat-lbl">Experience</span>
            </div>
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${l.casesHandled || 50}+</span>
              <span class="lawyer-stat-lbl">Cases Handled</span>
            </div>
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${l.winRate || '90%'}</span>
              <span class="lawyer-stat-lbl">Win Rate</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 14px;">
          <button class="btn-primary direct-request-lawyer-btn" data-lawyer-id="${l.id}" data-lawyer-name="${l.name}" style="width: 100%; justify-content: center; font-size: 0.85rem;">
            ${getIcon('send', 16)} Request Advocate to Handle Case
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function attachMyCasesListeners(container, clientCases) {
  const searchInput = document.getElementById('client-search');
  const catFilter = document.getElementById('client-filter-category');
  const statusFilter = document.getElementById('client-filter-status');

  const filterCases = () => {
    const query = searchInput.value.toLowerCase();
    const cat = catFilter.value;
    const stat = statusFilter.value;

    const filtered = clientCases.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(query) || c.id.toLowerCase().includes(query) || c.description.toLowerCase().includes(query);
      const matchesCat = cat === 'ALL' || c.category === cat;
      const matchesStat = stat === 'ALL' || c.status === stat;
      return matchesSearch && matchesCat && matchesStat;
    });

    document.getElementById('client-cases-list').innerHTML = renderClientCasesList(filtered);
    attachCardClickHandlers(container);
  };

  if (searchInput) searchInput.addEventListener('input', filterCases);
  if (catFilter) catFilter.addEventListener('change', filterCases);
  if (statusFilter) statusFilter.addEventListener('change', filterCases);

  attachCardClickHandlers(container);
}

function attachFindLawyersListeners(container, lawyers, clientCases) {
  const searchInput = document.getElementById('lawyer-dir-search');
  const locFilter = document.getElementById('lawyer-dir-location');
  const topFilter = document.getElementById('lawyer-dir-top');

  const filterLawyers = () => {
    const query = searchInput.value.toLowerCase();
    const loc = locFilter.value;
    const top = topFilter.value;

    const filtered = lawyers.filter(l => {
      const matchesSearch = l.name.toLowerCase().includes(query) || (l.barId && l.barId.toLowerCase().includes(query)) || (l.specialization && l.specialization.toLowerCase().includes(query));
      const matchesLoc = loc === 'ALL' || l.location === loc;
      const matchesTop = top === 'ALL' || l.isTopLawyer === true;
      return matchesSearch && matchesLoc && matchesTop;
    });

    document.getElementById('lawyers-directory-list').innerHTML = renderLawyersDirectoryList(filtered);
    attachDirectRequestBtnListeners(container, clientCases);
  };

  if (searchInput) searchInput.addEventListener('input', filterLawyers);
  if (locFilter) locFilter.addEventListener('change', filterLawyers);
  if (topFilter) topFilter.addEventListener('change', filterLawyers);

  attachDirectRequestBtnListeners(container, clientCases);
}

function attachDirectRequestBtnListeners(container, clientCases) {
  container.querySelectorAll('.direct-request-lawyer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lawyerId = btn.getAttribute('data-lawyer-id');
      const lawyerName = btn.getAttribute('data-lawyer-name');
      openDirectRequestModal(lawyerId, lawyerName, clientCases);
    });
  });
}

function openDirectRequestModal(lawyerId, lawyerName, clientCases) {
  const availableCases = clientCases.filter(c => c.status !== 'Verdict Rendered' && c.status !== 'Closed');

  const modalHtml = `
    <div class="modal-overlay active" id="direct-request-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Request Advocate Representation</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Send a direct case assignment request to <strong>${lawyerName}</strong></p>
          </div>
          <button class="modal-close" id="close-direct-modal">${getIcon('x', 20)}</button>
        </div>

        ${availableCases.length === 0 ? `
          <div style="padding: 20px; text-align: center; color: var(--text-muted);">
            <p style="margin-bottom: 12px;">You currently have no open legal cases registered.</p>
            <button class="btn-primary" id="modal-reg-case-btn">${getIcon('plus', 16)} Register New Case First</button>
          </div>
        ` : `
          <form id="direct-request-form">
            <div class="form-group">
              <label class="form-label">Select Your Legal Case to Assign</label>
              <select class="form-select" id="select-client-case" required>
                ${availableCases.map(c => `<option value="${c.id}">${c.id} - ${c.title} (${c.category})</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Personal Message / Case Brief for Advocate</label>
              <textarea class="form-textarea" id="direct-request-note" placeholder="Provide additional instructions, desired retainer expectations, or urgent court deadlines..." required></textarea>
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
              ${getIcon('send', 18)} Send Representation Invitation
            </button>
          </form>
        `}
      </div>
    </div>
  `;

  let existing = document.getElementById('direct-request-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('direct-request-modal');
  document.getElementById('close-direct-modal').addEventListener('click', () => modal.remove());

  const modalRegBtn = document.getElementById('modal-reg-case-btn');
  if (modalRegBtn) {
    modalRegBtn.addEventListener('click', () => {
      modal.remove();
      openNewCaseModal();
    });
  }

  const form = document.getElementById('direct-request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const caseId = document.getElementById('select-client-case').value;
      const note = document.getElementById('direct-request-note').value;

      store.clientRequestLawyer(caseId, lawyerId, note);
      showToast(`Direct representation invitation sent to ${lawyerName}!`, 'success', 'Request Sent');
      modal.remove();
    });
  }
}


function renderClientCasesList(cases) {
  if (cases.length === 0) {
    return `
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${getIcon('fileText', 48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Legal Cases Found</h3>
        <p>Click "Register New Case" to submit your legal dispute details to available advocates.</p>
      </div>
    `;
  }

  return cases.map(c => {
    const pendingBidsCount = c.requests ? c.requests.filter(r => r.status === 'pending').length : 0;

    return `
      <div class="glass-card glass-card-hover case-card" data-case-id="${c.id}">
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
            <div class="meta-item">${getIcon('scale', 14)} <span class="category-pill">${c.category}</span></div>
            <div class="meta-item">${getIcon('calendar', 14)} <span>Incident: ${formatDate(c.incidentDate)}</span></div>
          </div>

          ${c.assignedLawyerName ? `
            <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem; display: flex; align-items: center; justify-content: space-between;">
              <span style="color: var(--text-muted); font-size: 0.78rem;">Assigned Lawyer:</span>
              <span style="font-weight: 700; color: #818CF8;">${c.assignedLawyerName}</span>
            </div>
          ` : ''}

          ${pendingBidsCount > 0 ? `
            <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid var(--border-amber); padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem; display: flex; align-items: center; justify-content: space-between; animation: pulse 2s infinite;">
              <span style="font-weight: 700; color: var(--primary-gold);">${pendingBidsCount} Lawyer Request(s) Pending!</span>
              <span style="font-size: 0.75rem; text-decoration: underline; color: var(--primary-gold);">Review Bids &rarr;</span>
            </div>
          ` : ''}

          <div class="case-card-footer">
            <button class="btn-outline-amber view-case-detail-btn" data-case-id="${c.id}" style="width: 100%; justify-content: center;">
              ${getIcon('eye', 16)} View Details & Lawyer Bids
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function attachCardClickHandlers(container) {
  container.querySelectorAll('.view-case-detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const caseId = btn.getAttribute('data-case-id');
      openClientCaseDetailModal(caseId);
    });
  });
}

function openNewCaseModal() {
  const modalHtml = `
    <div class="modal-overlay active" id="new-case-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.4rem; color: var(--primary-gold);">Register New Legal Case</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Provide detailed information about the incident to receive advocate proposals</p>
          </div>
          <button class="modal-close" id="close-new-case-modal">${getIcon('x', 20)}</button>
        </div>

        <form id="new-case-form">
          <div class="form-group">
            <label class="form-label">Case Title / Incident Headline</label>
            <input type="text" class="form-input" id="case-title" placeholder="e.g. Commercial Tenant Lease Agreement Breach & Eviction Notice" required>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Dispute Category</label>
              <select class="form-select" id="case-category" required>
                ${CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Urgency Level</label>
              <select class="form-select" id="case-urgency" required>
                ${URGENCY_LEVELS.map(u => `<option value="${u}">${u}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Date of Incident</label>
              <input type="date" class="form-input" id="case-date" required value="${new Date().toISOString().split('T')[0]}">
            </div>

            <div class="form-group">
              <label class="form-label">Location / Jurisdiction City</label>
              <input type="text" class="form-input" id="case-location" placeholder="e.g. Sector 12, District Court Jurisdiction" required>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Full Case Description & Incident Details</label>
            <textarea class="form-textarea" id="case-description" placeholder="Describe what occurred, relevant contract details, key parties involved, financial loss, or desired legal outcome..." required></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; margin-top: 12px;">
            ${getIcon('send', 18)} Submit Legal Case Registration
          </button>
        </form>
      </div>
    </div>
  `;

  let existing = document.getElementById('new-case-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('new-case-modal');
  const closeBtn = document.getElementById('close-new-case-modal');
  const form = document.getElementById('new-case-form');

  closeBtn.addEventListener('click', () => modal.remove());

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const caseData = {
      title: document.getElementById('case-title').value,
      category: document.getElementById('case-category').value,
      urgency: document.getElementById('case-urgency').value,
      incidentDate: document.getElementById('case-date').value,
      location: document.getElementById('case-location').value,
      description: document.getElementById('case-description').value
    };

    const created = store.addCase(caseData);
    showToast(`Case ${created.id} registered successfully! Lawyers will be notified.`, 'success', 'Case Submitted');
    modal.remove();
  });
}

export function openClientCaseDetailModal(caseId) {
  const c = store.getCaseById(caseId);
  if (!c) return;

  const requests = c.requests || [];
  const pendingRequests = requests.filter(r => r.status === 'pending');
  const approvedRequest = requests.find(r => r.status === 'approved');

  // Stages for timeline
  const stages = [
    { key: 'Registered', label: '1. Case Registered', completed: true },
    { key: 'Lawyer Requested', label: '2. Lawyer Bids', completed: c.status !== 'Pending Lawyer' },
    { key: 'Lawyer Assigned', label: '3. Lawyer Approved', completed: ['Lawyer Assigned', 'Hearing Scheduled', 'Verdict Rendered'].includes(c.status) },
    { key: 'Hearing Scheduled', label: '4. Court Hearing', completed: ['Hearing Scheduled', 'Verdict Rendered'].includes(c.status) },
    { key: 'Verdict Rendered', label: '5. Final Verdict', completed: c.status === 'Verdict Rendered' }
  ];

  const modalHtml = `
    <div class="modal-overlay active" id="case-detail-modal">
      <div class="modal-content" style="max-width: 800px;">
        <div class="modal-header">
          <div>
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
              <span class="case-number" style="font-size: 0.9rem;">${c.id}</span>
              ${getUrgencyBadge(c.urgency)}
              ${getStatusBadge(c.status)}
            </div>
            <h3 class="brand-font" style="font-size: 1.3rem;">${c.title}</h3>
          </div>
          <button class="modal-close" id="close-detail-modal">${getIcon('x', 20)}</button>
        </div>

        <!-- Case Timeline Visualizer -->
        <div class="timeline">
          ${stages.map((stg, i) => {
            const isCurrent = c.status === stg.key || (stg.key === 'Registered' && c.status === 'Pending Lawyer');
            return `
              <div class="timeline-step ${stg.completed ? 'completed' : ''} ${isCurrent ? 'active' : ''}">
                <div class="step-circle">${stg.completed ? getIcon('check', 16) : i + 1}</div>
                <span class="step-label">${stg.label}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--primary-gold);">Incident Summary & Description</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${c.description}</p>
          <div style="display: flex; gap: 20px; font-size: 0.8rem; color: var(--text-dim); margin-top: 12px; flex-wrap: wrap;">
            <div><strong>Category:</strong> ${c.category}</div>
            <div><strong>Incident Date:</strong> ${formatDate(c.incidentDate)}</div>
            <div><strong>Location:</strong> ${c.location}</div>
          </div>
        </div>

        <!-- Lawyer Requests / Representation Bids Section -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4 class="brand-font" style="font-size: 1.1rem; color: var(--text-main);">
              Lawyer Representation Requests (${requests.length})
            </h4>
            ${c.assignedLawyerName ? `<span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.85rem;">✓ Representation Confirmed</span>` : ''}
          </div>

          ${requests.length === 0 ? `
            <div style="padding: 20px; text-align: center; border: 1px dashed var(--border-light); border-radius: var(--radius-md); color: var(--text-muted); font-size: 0.875rem;">
              No lawyers have requested this case yet. You will receive notifications when advocates submit representation proposals!
            </div>
          ` : `
            <div>
              ${requests.map(req => `
                <div class="bid-card" style="${req.status === 'approved' ? 'border-color: var(--accent-emerald); background: rgba(16, 185, 129, 0.08);' : ''}">
                  <div class="bid-card-header">
                    <div class="bid-lawyer-info">
                      <div class="avatar-circle avatar-lawyer">${req.lawyerName.charAt(0)}</div>
                      <div>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${req.lawyerName}</div>
                        <div style="font-size: 0.78rem; color: var(--text-muted);">${req.barId} &bull; Exp: ${req.experience}</div>
                      </div>
                    </div>
                    <div class="bid-fee">${req.proposedFee}</div>
                  </div>

                  <div class="bid-note">
                    <strong>Proposed Legal Strategy:</strong> ${req.strategyNote}
                  </div>

                  <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px;">
                    ${req.status === 'approved' ? `
                      <span class="btn-success" style="cursor: default; padding: 6px 12px; font-size: 0.8rem;">
                        ${getIcon('check', 14)} Approved Advocate
                      </span>
                    ` : req.status === 'declined' ? `
                      <span style="color: var(--text-dim); font-size: 0.8rem; align-self: center;">Declined</span>
                    ` : `
                      <button class="btn-primary approve-lawyer-btn" data-request-id="${req.id}" data-case-id="${c.id}" style="padding: 6px 14px; font-size: 0.8rem;">
                        ${getIcon('check', 14)} Approve & Assign Lawyer
                      </button>
                    `}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Hearing Information if Scheduled -->
        ${c.hearing ? `
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
            <h4 style="color: #C084FC; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${getIcon('calendar', 18)} Court Hearing Scheduled
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.875rem;">
              <div><strong>Date & Time:</strong> ${formatDate(c.hearing.date)} at ${c.hearing.time}</div>
              <div><strong>Courtroom:</strong> ${c.hearing.courtroom}</div>
              <div><strong>Presiding Judge:</strong> ${c.hearing.judgeName}</div>
              <div><strong>Court Orders:</strong> ${c.hearing.notes || 'None'}</div>
            </div>
          </div>
        ` : ''}

        <!-- Final Verdict Information if Delivered -->
        ${c.verdict ? `
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 16px;">
            <h4 style="color: #34D399; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${getIcon('gavel', 18)} Official Court Verdict & Judgment
            </h4>
            <div style="font-size: 0.9rem; margin-bottom: 6px;"><strong>Ruling:</strong> ${c.verdict.ruling}</div>
            <div style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5;">${c.verdict.summary}</div>
            <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 8px;">Delivered by ${c.verdict.judgeName} on ${formatDate(c.verdict.date)}</div>
          </div>
        ` : ''}

      </div>
    </div>
  `;

  let existing = document.getElementById('case-detail-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('case-detail-modal');
  document.getElementById('close-detail-modal').addEventListener('click', () => modal.remove());

  modal.querySelectorAll('.approve-lawyer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const reqId = btn.getAttribute('data-request-id');
      const caseIdAttr = btn.getAttribute('data-case-id');
      const updatedCase = store.approveLawyerRequest(caseIdAttr, reqId);
      showToast(`Advocate ${updatedCase.assignedLawyerName} approved to handle Case ${updatedCase.id}`, 'success', 'Lawyer Approved');
      modal.remove();
    });
  });
}
