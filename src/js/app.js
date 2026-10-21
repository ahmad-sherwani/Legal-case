// ==========================================================================
// Main Application Controller & View Router
// ==========================================================================

import { store } from './store.js';
import { renderRoleBar, openAuthModal } from './views/authView.js';
import { renderClientView } from './views/clientView.js';
import { renderLawyerView } from './views/lawyerView.js';
import { renderJudgeView } from './views/judgeView.js';
import { getIcon } from './utils/helpers.js';

class App {
  constructor() {
    this.mainContainer = document.getElementById('view-container');
    this.navContainer = document.getElementById('navbar-container');
    this.currentTheme = localStorage.getItem('lexportal_theme') || 'dark';
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.renderHeaderNav();
    renderRoleBar();
    this.renderActiveView();

    // Listen for Store Events
    window.addEventListener('user-changed', () => {
      this.renderHeaderNav();
      renderRoleBar();
      this.renderActiveView();
    });

    window.addEventListener('cases-updated', () => {
      this.renderActiveView();
    });
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lexportal_theme', theme);
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    this.renderHeaderNav();
  }

  renderHeaderNav() {
    const user = store.getCurrentUser();
    const isDark = this.currentTheme === 'dark';

    const navHtml = `
      <nav class="navbar">
        <div class="logo-container" id="logo-btn">
          <div class="logo-icon">
            ${getIcon('scale', 24)}
          </div>
          <div>
            <div class="logo-text brand-font">Lex<span>Portal</span></div>
            <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 500; letter-spacing: 0.5px;">LEGAL CASE MANAGEMENT SYSTEM</div>
          </div>
        </div>

        <div class="nav-links">
          <button class="nav-btn ${user.role === 'client' ? 'active' : ''}" id="nav-client">
            ${getIcon('user', 18)} Client Portal
          </button>

          <button class="nav-btn ${user.role === 'lawyer' ? 'active' : ''}" id="nav-lawyer">
            ${getIcon('lawyer', 18)} Lawyer Portal
          </button>

          <button class="nav-btn ${user.role === 'judge' ? 'active' : ''}" id="nav-judge">
            ${getIcon('gavel', 18)} Judge Bench
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 14px;">
          <!-- Theme Toggle Button -->
          <button class="theme-toggle-btn" id="theme-toggle-btn" title="Toggle ${isDark ? 'Day Mode' : 'Dark Mode'}">
            ${isDark ? getIcon('sun', 20) : getIcon('moon', 20)}
          </button>

          <div class="user-profile-badge" id="profile-badge-btn" style="cursor: pointer;" title="Click to view/edit profile">
            <div class="avatar-circle ${user.role === 'lawyer' ? 'avatar-lawyer' : user.role === 'judge' ? 'avatar-judge' : ''}" style="overflow: hidden;">
              ${user.profilePic ? `<img src="${user.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">` : user.name.charAt(0)}
            </div>
            <div class="user-info-text">
              <span class="user-name" style="display: flex; align-items: center; gap: 4px;">
                ${user.name}
                ${user.aadhaarVerified ? `<span style="color: #34D399; font-size: 0.72rem; font-weight: 700;">✓</span>` : ''}
              </span>
              <span class="user-role-label">${user.role.toUpperCase()} &bull; ${user.location || 'India'}</span>
            </div>
          </div>
        </div>
      </nav>
    `;

    if (this.navContainer) {
      this.navContainer.innerHTML = navHtml;

      // Theme toggle event listener
      document.getElementById('theme-toggle-btn').addEventListener('click', () => {
        this.toggleTheme();
      });

      // Nav Button Listeners
      const users = store.getUsers();
      document.getElementById('nav-client').addEventListener('click', () => {
        const client = users.find(u => u.role === 'client');
        if (client) store.setCurrentUser(client);
      });

      document.getElementById('nav-lawyer').addEventListener('click', () => {
        const lawyer = users.find(u => u.role === 'lawyer');
        if (lawyer) store.setCurrentUser(lawyer);
      });

      document.getElementById('nav-judge').addEventListener('click', () => {
        const judge = users.find(u => u.role === 'judge');
        if (judge) store.setCurrentUser(judge);
      });

      document.getElementById('profile-badge-btn').addEventListener('click', () => {
        openAuthModal();
      });
    }
  }


  renderActiveView() {
    const currentUser = store.getCurrentUser();
    if (!this.mainContainer) return;

    if (currentUser.role === 'client') {
      renderClientView(this.mainContainer);
    } else if (currentUser.role === 'lawyer') {
      renderLawyerView(this.mainContainer);
    } else if (currentUser.role === 'judge') {
      renderJudgeView(this.mainContainer);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
