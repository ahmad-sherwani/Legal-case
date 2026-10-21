// ==========================================================================
// Judge / Judicial Bench View Component
// ==========================================================================

import confetti from 'canvas-confetti';
import { store } from '../store.js';
import { getIcon, getStatusBadge, getUrgencyBadge, formatDate, CATEGORIES } from '../utils/helpers.js';
import { showToast } from '../utils/notifications.js';

export function renderJudgeView(container) {
  const currentUser = store.getCurrentUser();
  const allCases = store.getCases();

  // Compute Judge Docket Stats
  const totalDocket = allCases.length;
  const readyForHearing = allCases.filter(c => c.status === 'Lawyer Assigned');
  const activeHearings = allCases.filter(c => c.status === 'Hearing Scheduled');
  const verdictRendered = allCases.filter(c => c.status === 'Verdict Rendered');

  container.innerHTML = `
    <!-- Top Judge Bench Stats Header -->
    <div class="stats-grid">
      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-gold">${getIcon('gavel', 22)}</div>
        <div class="stat-info">
          <span class="stat-value">${totalDocket}</span>
          <span class="stat-label">Judicial Docket Total</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-blue">${getIcon('clock', 22)}</div>
        <div class="stat-info">
          <span class="stat-value">${readyForHearing.length}</span>
          <span class="stat-label">Awaiting Hearing Schedule</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-indigo">${getIcon('calendar', 22)}</div>
        <div class="stat-info">
          <span class="stat-value">${activeHearings.length}</span>
          <span class="stat-label">Active Court Hearings</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-emerald">${getIcon('check', 22)}</div>
        <div class="stat-info">
          <span class="stat-value">${verdictRendered.length}</span>
          <span class="stat-label">Verdicts & Decrees Issued</span>
        </div>
      </div>
    </div>

    <!-- Top Judge Bench Profile Banner -->
    <div class="glass-card" style="margin-bottom: 24px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div class="avatar-circle avatar-judge" style="width: 58px; height: 58px; font-size: 1.5rem; overflow: hidden;">
          ${currentUser.profilePic ? `<img src="${currentUser.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">` : currentUser.name.charAt(0)}
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <h2 class="brand-font" style="font-size: 1.3rem; margin: 0;">${currentUser.name}</h2>
            <span class="location-pill">${getIcon('mapPin', 12)} ${currentUser.location || 'New Delhi, Delhi'}</span>
            <span class="aadhaar-badge verified"><span class="badge-dot"></span>✓ Aadhaar Verified</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; display: flex; gap: 14px; flex-wrap: wrap;">
            <span><strong>Designation:</strong> ${currentUser.designation || 'High Court Justice'}</span>
            <span><strong>Court Bench:</strong> ${currentUser.courtName || 'High Court Bench 4'}</span>
            <span><strong>Service Experience:</strong> ${currentUser.experience || '18 Years'}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Header -->
    <div class="section-header">
      <div class="section-title-group">
        <h2 class="section-title brand-font">Judicial Bench Management</h2>
        <p class="section-subtitle">Manage trial dockets, assign courtroom dates, issue judicial directives, and render final verdicts.</p>
      </div>
    </div>

    <!-- Controls Bar -->
    <div class="controls-bar">
      <div class="search-box">
        <span class="search-icon">${getIcon('search', 16)}</span>
        <input type="text" class="search-input" id="judge-search" placeholder="Search court dockets by case title, client, lawyer, or ID...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="judge-filter-category">
          <option value="ALL">All Categories</option>
          ${CATEGORIES.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>

        <select class="filter-select" id="judge-filter-status">
          <option value="ALL">All Judicial Stages</option>
          <option value="Lawyer Assigned">Advocate Assigned (Needs Hearing)</option>
          <option value="Hearing Scheduled">Hearing Scheduled</option>
          <option value="Verdict Rendered">Verdict Rendered</option>
          <option value="Pending Lawyer">Pending Advocate</option>
        </select>
      </div>
    </div>

    <!-- Cases List -->
    <div class="cases-grid" id="judge-cases-list">
      ${renderJudgeCasesList(allCases)}
    </div>
  `;

  // Attach Event Handlers
  const searchInput = document.getElementById('judge-search');
  const catFilter = document.getElementById('judge-filter-category');
  const statusFilter = document.getElementById('judge-filter-status');

  const filterCases = () => {
    const query = searchInput.value.toLowerCase();
    const cat = catFilter.value;
    const stat = statusFilter.value;

    const filtered = allCases.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(query) || c.id.toLowerCase().includes(query) || c.clientName.toLowerCase().includes(query) || (c.assignedLawyerName && c.assignedLawyerName.toLowerCase().includes(query));
      const matchesCat = cat === 'ALL' || c.category === cat;
      const matchesStat = stat === 'ALL' || c.status === stat;
      return matchesSearch && matchesCat && matchesStat;
    });

    document.getElementById('judge-cases-list').innerHTML = renderJudgeCasesList(filtered);
    attachJudgeCardListeners(container);
  };

  searchInput.addEventListener('input', filterCases);
  catFilter.addEventListener('change', filterCases);
  statusFilter.addEventListener('change', filterCases);

  attachJudgeCardListeners(container);
}

function renderJudgeCasesList(cases) {
  if (cases.length === 0) {
    return `
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${getIcon('gavel', 48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Docket Cases Found</h3>
        <p>No court cases match the current filter selection.</p>
      </div>
    `;
  }

  return cases.map(c => {
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
          <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 14px; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
            <div><strong>Client:</strong> ${c.clientName}</div>
            <div><strong>Assigned Lawyer:</strong> ${c.assignedLawyerName ? `<span style="color: #818CF8; font-weight: 700;">${c.assignedLawyerName}</span>` : '<span style="color: var(--text-dim);">Not Assigned Yet</span>'}</div>
            ${c.hearing ? `
              <div style="color: #C084FC; font-weight: 600; margin-top: 4px; display: flex; align-items: center; gap: 6px;">
                ${getIcon('calendar', 14)} Hearing: ${formatDate(c.hearing.date)} @ ${c.hearing.time} (${c.hearing.courtroom})
              </div>
            ` : ''}
          </div>

          <div class="case-card-footer" style="flex-wrap: wrap; gap: 8px;">
            ${c.status === 'Lawyer Assigned' || c.status === 'Hearing Scheduled' ? `
              <button class="btn-outline-amber schedule-hearing-btn" data-case-id="${c.id}" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                ${getIcon('calendar', 14)} Schedule Hearing
              </button>
            ` : ''}

            ${c.status === 'Hearing Scheduled' || c.status === 'Lawyer Assigned' ? `
              <button class="btn-primary issue-verdict-btn" data-case-id="${c.id}" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                ${getIcon('gavel', 14)} Issue Verdict
              </button>
            ` : ''}

            <button class="btn-secondary view-judge-case-btn" data-case-id="${c.id}" style="padding: 8px 12px; font-size: 0.8rem;">
              ${getIcon('eye', 14)} Record
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function attachJudgeCardListeners(container) {
  container.querySelectorAll('.schedule-hearing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      openScheduleHearingModal(caseId);
    });
  });

  container.querySelectorAll('.issue-verdict-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      openIssueVerdictModal(caseId);
    });
  });

  container.querySelectorAll('.view-judge-case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      openJudgeCaseRecordModal(caseId);
    });
  });
}

function openScheduleHearingModal(caseId) {
  const c = store.getCaseById(caseId);

  const modalHtml = `
    <div class="modal-overlay active" id="schedule-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span class="case-number">${c.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">Schedule Court Hearing</h3>
          </div>
          <button class="modal-close" id="close-schedule-modal">${getIcon('x', 20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
          <div style="font-weight: 700; color: var(--text-main);">${c.title}</div>
          <div style="color: var(--text-muted); margin-top: 4px;">Client: ${c.clientName} &bull; Advocate: ${c.assignedLawyerName || 'N/A'}</div>
        </div>

        <form id="schedule-hearing-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Hearing Date</label>
              <input type="date" class="form-input" id="hearing-date" required value="${new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0]}">
            </div>

            <div class="form-group">
              <label class="form-label">Hearing Time</label>
              <input type="text" class="form-input" id="hearing-time" value="10:30 AM" placeholder="e.g. 10:30 AM" required>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Assigned Courtroom</label>
            <input type="text" class="form-input" id="hearing-courtroom" value="Courtroom 4B - Civil Division Bench" placeholder="e.g. Courtroom 3A" required>
          </div>

          <div class="form-group">
            <label class="form-label">Judicial Orders & Directives for Parties</label>
            <textarea class="form-textarea" id="hearing-notes" placeholder="e.g. Counsel for both parties instructed to file evidentiary briefs and witness affidavits 48 hours prior to hearing."></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
            ${getIcon('calendar', 18)} Set Court Hearing Schedule
          </button>
        </form>
      </div>
    </div>
  `;

  let existing = document.getElementById('schedule-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('schedule-modal');
  document.getElementById('close-schedule-modal').addEventListener('click', () => modal.remove());

  document.getElementById('schedule-hearing-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const hearingData = {
      date: document.getElementById('hearing-date').value,
      time: document.getElementById('hearing-time').value,
      courtroom: document.getElementById('hearing-courtroom').value,
      notes: document.getElementById('hearing-notes').value
    };

    store.scheduleHearing(c.id, hearingData);
    showToast(`Hearing for Case ${c.id} scheduled on ${formatDate(hearingData.date)} in ${hearingData.courtroom}`, 'success', 'Hearing Scheduled');
    modal.remove();
  });
}

function openIssueVerdictModal(caseId) {
  const c = store.getCaseById(caseId);

  const modalHtml = `
    <div class="modal-overlay active" id="verdict-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span class="case-number">${c.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Issue Judicial Order & Verdict</h3>
          </div>
          <button class="modal-close" id="close-verdict-modal">${getIcon('x', 20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
          <div style="font-weight: 700; color: var(--text-main);">${c.title}</div>
          <div style="color: var(--text-muted); margin-top: 4px;">Client: ${c.clientName} &bull; Advocate: ${c.assignedLawyerName || 'N/A'}</div>
        </div>

        <form id="issue-verdict-form">
          <div class="form-group">
            <label class="form-label">Final Court Ruling Verdict</label>
            <select class="form-select" id="verdict-ruling" required>
              <option value="Judgment in Favor of Client (Plaintiff)">Judgment in Favor of Client (Plaintiff)</option>
              <option value="Decree Finalized & Granted">Decree Finalized & Granted</option>
              <option value="Out-of-Court Settlement Approved">Out-of-Court Settlement Approved</option>
              <option value="Case Dismissed / Without Merit">Case Dismissed / Without Merit</option>
              <option value="Injunction Ordered">Permanent Injunction Ordered</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Judicial Summary & Final Orders</label>
            <textarea class="form-textarea" id="verdict-summary" placeholder="State the legal reasoning, remedies awarded, financial penalties, injunction directives, or estate allocation details..." required></textarea>
          </div>

          <button type="submit" class="btn-success" style="width: 100%; justify-content: center; padding: 12px;">
            ${getIcon('gavel', 18)} Render Final Verdict & Close Case
          </button>
        </form>
      </div>
    </div>
  `;

  let existing = document.getElementById('verdict-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('verdict-modal');
  document.getElementById('close-verdict-modal').addEventListener('click', () => modal.remove());

  document.getElementById('issue-verdict-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const verdictData = {
      ruling: document.getElementById('verdict-ruling').value,
      summary: document.getElementById('verdict-summary').value
    };

    store.issueVerdict(c.id, verdictData);
    
    // Celebrate verdict issuance!
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    showToast(`Official verdict issued for Case ${c.id}: ${verdictData.ruling}`, 'success', 'Verdict Rendered');
    modal.remove();
  });
}

function openJudgeCaseRecordModal(caseId) {
  const c = store.getCaseById(caseId);

  const modalHtml = `
    <div class="modal-overlay active" id="judge-record-modal">
      <div class="modal-content" style="max-width: 800px;">
        <div class="modal-header">
          <div>
            <span class="case-number">${c.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">Judicial Case Master Record</h3>
          </div>
          <button class="modal-close" id="close-judge-record">${getIcon('x', 20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 20px;">
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            ${getUrgencyBadge(c.urgency)}
            ${getStatusBadge(c.status)}
          </div>
          <h4 style="color: var(--primary-gold); margin-bottom: 8px;">${c.title}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${c.description}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85rem; margin-top: 14px; color: var(--text-main);">
            <div><strong>Client Name:</strong> ${c.clientName}</div>
            <div><strong>Assigned Lawyer:</strong> ${c.assignedLawyerName || 'None'}</div>
            <div><strong>Incident Location:</strong> ${c.location}</div>
            <div><strong>Incident Date:</strong> ${formatDate(c.incidentDate)}</div>
          </div>
        </div>

        ${c.requests && c.requests.length > 0 ? `
          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 10px;">Submitted Advocate Bids (${c.requests.length})</h4>
            ${c.requests.map(r => `
              <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid ${r.status === 'approved' ? '#10B981' : '#64748B'}; margin-bottom: 8px; font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between;">
                  <strong>${r.lawyerName} (${r.barId})</strong>
                  <span style="color: var(--primary-gold); font-weight: 700;">${r.proposedFee}</span>
                </div>
                <div style="color: var(--text-muted); margin-top: 4px;">Strategy: ${r.strategyNote}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${c.hearing ? `
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
            <h4 style="color: #C084FC; margin-bottom: 4px;">Scheduled Hearing</h4>
            <div>${formatDate(c.hearing.date)} at ${c.hearing.time} in ${c.hearing.courtroom}</div>
            <div style="color: var(--text-muted); margin-top: 4px;">Directive Notes: ${c.hearing.notes || 'None'}</div>
          </div>
        ` : ''}

        ${c.verdict ? `
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 14px; border-radius: var(--radius-md); font-size: 0.875rem;">
            <h4 style="color: #34D399; margin-bottom: 4px;">Final Verdict Delivered</h4>
            <div><strong>Ruling:</strong> ${c.verdict.ruling}</div>
            <div style="color: var(--text-muted); margin-top: 4px;">Summary: ${c.verdict.summary}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  let existing = document.getElementById('judge-record-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('judge-record-modal');
  document.getElementById('close-judge-record').addEventListener('click', () => modal.remove());
}
