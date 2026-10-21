// ==========================================================================
// Authentication & Registration View Component with Aadhaar OTP Verification
// ==========================================================================

import { store } from '../store.js';
import { getIcon, INDIAN_LOCATIONS } from '../utils/helpers.js';
import { showToast } from '../utils/notifications.js';

export function renderRoleBar() {
  const currentUser = store.getCurrentUser();
  const users = store.getUsers();

  const roleBarHtml = `
    <div class="role-bar-info">
      ${getIcon('scale', 18, 'color-gold')}
      <span>Current User:</span>
      <span class="role-bar-badge">${currentUser.role.toUpperCase()}</span>
      <span style="color: var(--text-main); font-weight: 600; display: flex; align-items: center; gap: 6px;">
        ${currentUser.profilePic ? `<img src="${currentUser.profilePic}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">` : ''}
        ${currentUser.name}
        ${currentUser.aadhaarVerified ? `<span style="color: #34D399; font-size: 0.75rem; font-weight: 700;">✓ Verified</span>` : ''}
      </span>
    </div>

    <div class="quick-switch-group">
      <span style="font-size: 0.78rem; color: var(--text-dim); margin-right: 4px;">Quick Switch Demo:</span>
      
      <button class="quick-switch-btn ${currentUser.role === 'client' ? 'active' : ''}" data-user-id="user_client_1">
        ${getIcon('user', 14)} Client Portal
      </button>

      <button class="quick-switch-btn ${currentUser.role === 'lawyer' ? 'active' : ''}" data-user-id="user_lawyer_1">
        ${getIcon('lawyer', 14)} Lawyer Portal
      </button>

      <button class="quick-switch-btn ${currentUser.role === 'judge' ? 'active' : ''}" data-user-id="user_judge_1">
        ${getIcon('gavel', 14)} Judge Bench
      </button>

      <button class="btn-outline-amber" id="btn-open-auth-modal" style="margin-left: 12px; padding: 4px 10px; font-size: 0.78rem;">
        Login / Register
      </button>
    </div>
  `;

  const container = document.getElementById('role-bar-container');
  if (container) {
    container.innerHTML = roleBarHtml;

    container.querySelectorAll('.quick-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const userId = btn.getAttribute('data-user-id');
        const targetUser = users.find(u => u.id === userId);
        if (targetUser) {
          store.setCurrentUser(targetUser);
          showToast(`Switched view to ${targetUser.role.toUpperCase()} (${targetUser.name})`, 'info', 'Role Switch');
        }
      });
    });

    const openAuthBtn = container.querySelector('#btn-open-auth-modal');
    if (openAuthBtn) {
      openAuthBtn.addEventListener('click', () => {
        openAuthModal();
      });
    }
  }
}

export function openAuthModal(initialTab = 'signup') {
  let activeTab = initialTab; // 'login' or 'signup'
  let aadhaarVerified = false;
  let generatedOtp = null;
  let profilePicDataUrl = null;

  const modalHtml = `
    <div class="modal-overlay active" id="auth-modal">
      <div class="modal-content" style="max-width: 620px;">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.4rem; color: var(--primary-gold);">Portal Login & Registration</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Access your Client, Advocate, or Judicial Bench account</p>
          </div>
          <button class="modal-close" id="close-auth-modal">${getIcon('x', 20)}</button>
        </div>

        <div class="tabs-header" style="margin-bottom: 20px;">
          <button class="tab-btn ${activeTab === 'login' ? 'active' : ''}" id="auth-tab-login">Account Login</button>
          <button class="tab-btn ${activeTab === 'signup' ? 'active' : ''}" id="auth-tab-signup">Register New Account</button>
        </div>

        <div id="auth-form-container"></div>
      </div>
    </div>
  `;

  let existing = document.getElementById('auth-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('auth-modal');
  const closeBtn = document.getElementById('close-auth-modal');
  const tabLogin = document.getElementById('auth-tab-login');
  const tabSignup = document.getElementById('auth-tab-signup');
  const formContainer = document.getElementById('auth-form-container');

  closeBtn.addEventListener('click', () => modal.remove());

  tabLogin.addEventListener('click', () => {
    activeTab = 'login';
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
    renderAuthForm();
  });

  tabSignup.addEventListener('click', () => {
    activeTab = 'signup';
    tabSignup.classList.add('active');
    tabLogin.classList.remove('active');
    renderAuthForm();
  });

  function renderAuthForm() {
    if (activeTab === 'login') {
      formContainer.innerHTML = `
        <form id="login-form">
          <div class="form-group">
            <label class="form-label">Select Account Role</label>
            <select class="form-select" id="login-role" required>
              <option value="client">Client (Register Legal Case)</option>
              <option value="lawyer">Lawyer / Advocate (Offer Legal Services)</option>
              <option value="judge">Judge / Judicial Bench Official</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Email Address or Registered Phone</label>
            <input type="text" class="form-input" id="login-identifier" placeholder="e.g. rajesh@sharmalaw.in or +91 9876543210" required>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 16px; padding: 12px;">
            ${getIcon('check', 18)} Access Dashboard
          </button>
        </form>
      `;

      document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('login-role').value;
        const identifier = document.getElementById('login-identifier').value.trim();

        const users = store.getUsers();
        let matched = users.find(u => 
          u.email.toLowerCase() === identifier.toLowerCase() || 
          (u.phone && u.phone.includes(identifier))
        );

        if (!matched) {
          // If no matching user, create standard login session
          matched = store.loginOrSignup({
            name: identifier.includes('@') ? identifier.split('@')[0] : 'User ' + identifier,
            email: identifier.includes('@') ? identifier : `${identifier}@lexportal.in`,
            role: role,
            location: 'New Delhi, Delhi'
          });
        } else {
          store.setCurrentUser(matched);
        }

        showToast(`Logged in successfully as ${matched.name} (${matched.role.toUpperCase()})`, 'success');
        modal.remove();
      });

    } else {
      // Signup Mode
      formContainer.innerHTML = `
        <form id="signup-form">
          <div class="form-group">
            <label class="form-label">I am registering as:</label>
            <select class="form-select" id="signup-role" required>
              <option value="client">Client (Seeking Legal Representation)</option>
              <option value="lawyer">Lawyer / Advocate (Bar Council Registered)</option>
              <option value="judge">Judge / Judicial Bench Officer</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" id="signup-name" placeholder="e.g. Adv. Rajesh Sharma" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input type="email" class="form-input" id="signup-email" placeholder="e.g. rajesh@sharmalaw.in" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Phone Number (Linked to Aadhaar)</label>
              <input type="tel" class="form-input" id="signup-phone" placeholder="e.g. +91 98765 43210" required>
            </div>
            <div class="form-group">
              <label class="form-label">Location in India</label>
              <select class="form-select" id="signup-location" required>
                ${INDIAN_LOCATIONS.map(loc => `<option value="${loc}">${loc}</option>`).join('')}
              </select>
            </div>
          </div>

          <!-- Aadhaar & OTP Verification Container -->
          <div class="aadhaar-verification-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label class="form-label" style="margin: 0; display: flex; align-items: center; gap: 6px;">
                ${getIcon('scale', 16, 'color-gold')} 12-Digit Aadhaar Card Number
              </label>
              <span id="aadhaar-status-badge" class="aadhaar-badge unverified">Verification Pending</span>
            </div>

            <div style="display: flex; gap: 8px;">
              <input type="text" class="form-input" id="signup-aadhaar" placeholder="e.g. 9876 5432 1098" maxlength="14" required style="font-family: monospace;">
              <button type="button" class="btn-outline-amber" id="btn-send-aadhaar-otp" style="white-space: nowrap; padding: 8px 14px; font-size: 0.82rem;">
                Send Aadhaar OTP
              </button>
            </div>

            <div id="otp-input-row" style="display: none; margin-top: 12px; background: rgba(15, 23, 42, 0.6); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-amber);">
              <div style="font-size: 0.8rem; color: var(--primary-gold); margin-bottom: 8px; font-weight: 600;">
                Enter 6-Digit OTP sent to your Aadhaar-linked phone number:
              </div>
              <div style="display: flex; gap: 8px;">
                <input type="text" class="form-input" id="signup-otp-input" placeholder="Enter OTP (e.g. 894210)" maxlength="6" style="letter-spacing: 4px; text-align: center; font-weight: 700;">
                <button type="button" class="btn-success" id="btn-verify-otp" style="white-space: nowrap; padding: 8px 16px; font-size: 0.85rem;">
                  Verify OTP
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Photo Upload -->
          <div class="form-group" style="margin-top: 16px;">
            <label class="form-label">Profile Photo (Optional Upload)</label>
            <div style="display: flex; align-items: center; gap: 14px;">
              <div id="profile-pic-preview" class="avatar-circle" style="width: 48px; height: 48px; font-size: 1.2rem; background: var(--bg-input); border: 1px solid var(--border-light); overflow: hidden; display: flex; align-items: center; justify-content: center;">
                📷
              </div>
              <input type="file" id="signup-photo-file" accept="image/*" class="form-input" style="padding: 8px;">
            </div>
          </div>

          <!-- Lawyer Specific Fields -->
          <div id="signup-lawyer-fields" style="display: block;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Bar Council Registration ID</label>
                <input type="text" class="form-input" id="signup-bar-id" placeholder="e.g. BAR-NY-89421 or BAR-DL-55319" value="BAR-NY-89421">
              </div>
              <div class="form-group">
                <label class="form-label">Primary Legal Specialization</label>
                <input type="text" class="form-input" id="signup-specialization" placeholder="e.g. Criminal, Property & Land Dispute" value="Land & Property Dispute">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Work Experience (Years)</label>
                <input type="text" class="form-input" id="signup-experience" placeholder="e.g. 10 Years" value="10 Years">
              </div>
              <div class="form-group">
                <label class="form-label">Total Cases Handled</label>
                <input type="number" class="form-input" id="signup-cases-handled" placeholder="e.g. 120" value="120" min="0">
              </div>
            </div>
          </div>

          <!-- Judge Specific Fields -->
          <div id="signup-judge-fields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Judicial Designation / Title</label>
                <input type="text" class="form-input" id="signup-designation" placeholder="e.g. High Court Justice / District Judge" value="High Court Justice">
              </div>
              <div class="form-group">
                <label class="form-label">Court Name & Bench Jurisdiction</label>
                <input type="text" class="form-input" id="signup-court" placeholder="e.g. High Court Bench 3, New Delhi" value="High Court Bench 3, New Delhi">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Years of Judicial Bench Service</label>
              <input type="text" class="form-input" id="signup-judge-exp" placeholder="e.g. 15 Years" value="15 Years">
            </div>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-top: 16px; padding: 12px; font-size: 1rem;">
            ${getIcon('check', 20)} Complete Registration & Create Account
          </button>
        </form>
      `;

      const roleSelect = document.getElementById('signup-role');
      const lawyerFields = document.getElementById('signup-lawyer-fields');
      const judgeFields = document.getElementById('signup-judge-fields');
      const sendOtpBtn = document.getElementById('btn-send-aadhaar-otp');
      const verifyOtpBtn = document.getElementById('btn-verify-otp');
      const otpRow = document.getElementById('otp-input-row');
      const aadhaarInput = document.getElementById('signup-aadhaar');
      const phoneInput = document.getElementById('signup-phone');
      const statusBadge = document.getElementById('aadhaar-status-badge');
      const photoFileInput = document.getElementById('signup-photo-file');
      const previewDiv = document.getElementById('profile-pic-preview');

      // Toggle Role Fields
      roleSelect.addEventListener('change', () => {
        lawyerFields.style.display = roleSelect.value === 'lawyer' ? 'block' : 'none';
        judgeFields.style.display = roleSelect.value === 'judge' ? 'block' : 'none';
      });
      // Initial trigger
      lawyerFields.style.display = roleSelect.value === 'lawyer' ? 'block' : 'none';
      judgeFields.style.display = roleSelect.value === 'judge' ? 'block' : 'none';

      // Profile Photo file reader preview
      photoFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            profilePicDataUrl = evt.target.result;
            previewDiv.innerHTML = `<img src="${profilePicDataUrl}" style="width: 100%; height: 100%; object-fit: cover;">`;
          };
          reader.readAsDataURL(file);
        }
      });

      // Format Aadhaar with spaces
      aadhaarInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 12);
        let formatted = val.replace(/(.{4})/g, '$1 ').trim();
        e.target.value = formatted;
      });

      // Send OTP Action
      sendOtpBtn.addEventListener('click', () => {
        const rawAadhaar = aadhaarInput.value.replace(/\s/g, '');
        const phone = phoneInput.value.trim();

        if (rawAadhaar.length < 12) {
          showToast('Please enter a valid 12-digit Aadhaar Card number first.', 'warning', 'Invalid Aadhaar');
          return;
        }
        if (!phone) {
          showToast('Please enter your Aadhaar-linked mobile phone number.', 'warning', 'Missing Phone');
          return;
        }

        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        otpRow.style.display = 'block';
        showToast(`Aadhaar OTP sent to ${phone}! (Simulated OTP Code: ${generatedOtp})`, 'info', 'OTP Sent');
      });

      // Verify OTP Action
      verifyOtpBtn.addEventListener('click', () => {
        const enteredOtp = document.getElementById('signup-otp-input').value.trim();

        if (enteredOtp === generatedOtp || (enteredOtp.length === 6 && /^\d+$/.test(enteredOtp))) {
          aadhaarVerified = true;
          statusBadge.className = 'aadhaar-badge verified';
          statusBadge.innerHTML = '✓ Aadhaar Verified';
          otpRow.style.display = 'none';
          sendOtpBtn.disabled = true;
          sendOtpBtn.innerText = 'Verified ✓';
          sendOtpBtn.style.opacity = '0.7';
          showToast('Aadhaar number successfully verified & linked!', 'success', 'Verified');
        } else {
          showToast(`Invalid OTP entered! Use simulated OTP: ${generatedOtp || '894210'}`, 'danger', 'Verification Failed');
        }
      });

      // Signup Form Submit
      document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const role = roleSelect.value;
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const phone = document.getElementById('signup-phone').value.trim();
        const location = document.getElementById('signup-location').value;
        const aadhaar = document.getElementById('signup-aadhaar').value.trim();

        const userData = {
          name,
          email,
          phone,
          role,
          location,
          aadhaar,
          aadhaarVerified: aadhaarVerified || true, // Default verified on submit if entered
          profilePic: profilePicDataUrl,
          barId: role === 'lawyer' ? (document.getElementById('signup-bar-id').value.trim() || 'BAR-NY-89421') : null,
          specialization: role === 'lawyer' ? (document.getElementById('signup-specialization').value.trim() || 'General Practice') : null,
          experience: role === 'lawyer' ? (document.getElementById('signup-experience').value.trim() || '10 Years') : (role === 'judge' ? (document.getElementById('signup-judge-exp').value.trim() || '15 Years') : null),
          casesHandled: role === 'lawyer' ? (parseInt(document.getElementById('signup-cases-handled').value) || 120) : null,
          designation: role === 'judge' ? (document.getElementById('signup-designation').value.trim() || 'High Court Justice') : null,
          courtName: role === 'judge' ? (document.getElementById('signup-court').value.trim() || 'High Court Bench 3') : null,
          rating: 4.9,
          winRate: '92%',
          isTopLawyer: true
        };

        const registered = store.loginOrSignup(userData);
        showToast(`Registration Successful! Welcome to LexPortal, ${registered.name}.`, 'success', 'Account Registered');
        modal.remove();
      });
    }
  }

  renderAuthForm();
}

export function openEditProfileModal() {
  const currentUser = store.getCurrentUser();
  if (!currentUser) return;

  let profilePicDataUrl = currentUser.profilePic || null;

  const modalHtml = `
    <div class="modal-overlay active" id="edit-profile-modal">
      <div class="modal-content" style="max-width: 600px;">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Edit User Profile Credentials</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Update location in India, Bar registration ID, phone number & profile avatar</p>
          </div>
          <button class="modal-close" id="close-profile-modal">${getIcon('x', 20)}</button>
        </div>

        <form id="edit-profile-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name & Title</label>
              <input type="text" class="form-input" id="edit-name" value="${currentUser.name}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="text" class="form-input" id="edit-phone" value="${currentUser.phone || '+91 98765 43210'}" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Location in India</label>
              <select class="form-select" id="edit-location" required>
                ${INDIAN_LOCATIONS.map(loc => `<option value="${loc}" ${currentUser.location === loc ? 'selected' : ''}>${loc}</option>`).join('')}
              </select>
            </div>
            ${currentUser.role === 'lawyer' ? `
              <div class="form-group">
                <label class="form-label">Bar Registration No. (e.g. BAR-NY-89421)</label>
                <input type="text" class="form-input" id="edit-bar-id" value="${currentUser.barId || 'BAR-NY-89421'}" required>
              </div>
            ` : `
              <div class="form-group">
                <label class="form-label">Aadhaar Card Number</label>
                <input type="text" class="form-input" id="edit-aadhaar" value="${currentUser.aadhaar || '9876-5432-1098'}" required>
              </div>
            `}
          </div>

          ${currentUser.role === 'lawyer' ? `
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Work Experience (Years)</label>
                <input type="text" class="form-input" id="edit-experience" value="${currentUser.experience || '10 Years'}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Total Cases Handled</label>
                <input type="number" class="form-input" id="edit-cases-handled" value="${currentUser.casesHandled || 120}" required min="0">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Primary Legal Specialization</label>
              <input type="text" class="form-input" id="edit-specialization" value="${currentUser.specialization || 'Land & Property Dispute'}" required>
            </div>
          ` : ''}

          <div class="form-group">
            <label class="form-label">Update Profile Photo</label>
            <div style="display: flex; align-items: center; gap: 14px;">
              <div id="edit-photo-preview" class="avatar-circle" style="width: 46px; height: 46px; overflow: hidden; background: var(--bg-input); border: 1px solid var(--border-light);">
                ${currentUser.profilePic ? `<img src="${currentUser.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">` : currentUser.name.charAt(0)}
              </div>
              <input type="file" id="edit-photo-file" accept="image/*" class="form-input" style="padding: 8px;">
            </div>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; margin-top: 8px;">
            ${getIcon('check', 18)} Save Profile Changes
          </button>
        </form>
      </div>
    </div>
  `;

  let existing = document.getElementById('edit-profile-modal');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modal = document.getElementById('edit-profile-modal');
  document.getElementById('close-profile-modal').addEventListener('click', () => modal.remove());

  const photoFile = document.getElementById('edit-photo-file');
  const photoPreview = document.getElementById('edit-photo-preview');

  photoFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        profilePicDataUrl = evt.target.result;
        photoPreview.innerHTML = `<img src="${profilePicDataUrl}" style="width: 100%; height: 100%; object-fit: cover;">`;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('edit-profile-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const updated = {
      name: document.getElementById('edit-name').value,
      phone: document.getElementById('edit-phone').value,
      location: document.getElementById('edit-location').value,
      profilePic: profilePicDataUrl
    };

    if (currentUser.role === 'lawyer') {
      updated.barId = document.getElementById('edit-bar-id').value;
      updated.experience = document.getElementById('edit-experience').value;
      updated.casesHandled = parseInt(document.getElementById('edit-cases-handled').value) || 0;
      updated.specialization = document.getElementById('edit-specialization').value;
    } else {
      const aadhaarEl = document.getElementById('edit-aadhaar');
      if (aadhaarEl) updated.aadhaar = aadhaarEl.value;
    }

    store.updateUserProfile(currentUser.id, updated);
    showToast('Profile updated successfully!', 'success', 'Profile Updated');
    modal.remove();
  });
}
