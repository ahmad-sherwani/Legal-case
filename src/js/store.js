// ==========================================================================
// LexPortal - Central Store & LocalStorage Persistence Engine
// ==========================================================================

const STORAGE_KEY_CASES = 'lexportal_cases_db';
const STORAGE_KEY_USERS = 'lexportal_users_db';
const STORAGE_KEY_CURRENT_USER = 'lexportal_current_user';

// Initial Demo Seed Users
const SEED_USERS = [
  {
    id: 'user_client_1',
    name: 'Alexander Wright',
    email: 'alexander@client.com',
    role: 'client',
    phone: '+91 98765 43210',
    aadhaar: '4589-1204-8931',
    aadhaarVerified: true,
    location: 'New Delhi, Delhi'
  },
  {
    id: 'user_lawyer_1',
    name: 'Adv. Rajesh Sharma',
    email: 'rajesh@sharmalaw.in',
    role: 'lawyer',
    phone: '+91 98112 34567',
    aadhaar: '8912-3456-7890',
    aadhaarVerified: true,
    barId: 'BAR-NY-89421',
    specialization: 'Land & Property Dispute, Corporate',
    experience: '12 Years',
    casesHandled: 142,
    location: 'New Delhi, Delhi',
    winRate: '94%',
    rating: 4.9,
    isTopLawyer: true
  },
  {
    id: 'user_lawyer_2',
    name: 'Adv. Priya Deshmukh',
    email: 'priya@deshmukhdefense.in',
    role: 'lawyer',
    phone: '+91 98220 11223',
    aadhaar: '6712-4589-3012',
    aadhaarVerified: true,
    barId: 'BAR-MH-55319',
    specialization: 'Criminal Case, Cyber Crime',
    experience: '15 Years',
    casesHandled: 185,
    location: 'Mumbai, Maharashtra',
    winRate: '91%',
    rating: 4.8,
    isTopLawyer: true
  },
  {
    id: 'user_lawyer_3',
    name: 'Adv. Anand Iyer',
    email: 'anand@iyerlegal.in',
    role: 'lawyer',
    phone: '+91 98440 33445',
    aadhaar: '1234-5678-9012',
    aadhaarVerified: true,
    barId: 'BAR-KA-77102',
    specialization: 'Family Dispute, Civil Litigation',
    experience: '8 Years',
    casesHandled: 96,
    location: 'Bengaluru, Karnataka',
    winRate: '88%',
    rating: 4.7,
    isTopLawyer: false
  },
  {
    id: 'user_lawyer_4',
    name: 'Adv. Sunita Rao',
    email: 'sunita@raochambers.in',
    role: 'lawyer',
    phone: '+91 98770 55667',
    aadhaar: '3456-7890-1234',
    aadhaarVerified: true,
    barId: 'BAR-DL-33091',
    specialization: 'Labor & Employment, Intellectual Property',
    experience: '11 Years',
    casesHandled: 120,
    location: 'New Delhi, Delhi',
    winRate: '92%',
    rating: 4.9,
    isTopLawyer: true
  },
  {
    id: 'user_judge_1',
    name: 'Hon. Justice R. S. Pathak',
    email: 'justice.pathak@highcourt.gov.in',
    role: 'judge',
    phone: '+91 98100 99887',
    aadhaar: '9988-7766-5544',
    aadhaarVerified: true,
    designation: 'High Court Justice',
    courtName: 'High Court Bench 4, Delhi',
    jurisdiction: 'Civil & Commercial Division',
    experience: '18 Years',
    location: 'New Delhi, Delhi'
  }
];

// Initial Demo Seed Cases
const SEED_CASES = [
  {
    id: 'LC-1001',
    title: 'Residential Property Boundary & Encroachment Dispute',
    category: 'Land & Property Dispute',
    clientId: 'user_client_1',
    clientName: 'Alexander Wright',
    incidentDate: '2026-06-14',
    location: '142 Oakridge Blvd, District 5',
    description: 'Commercial neighbor constructed a 6-foot concrete barrier extending 4.5 feet into my deeded parcel, blocking access to utility mainlines and damaging private driveway.',
    urgency: 'High',
    status: 'Hearing Scheduled', // Registered -> Lawyer Requested -> Lawyer Assigned -> Hearing Scheduled -> Verdict Rendered
    assignedLawyerId: 'user_lawyer_1',
    assignedLawyerName: 'Adv. Sophia Martinez',
    assignedLawyerFee: '$4,500 Retainer',
    requests: [
      {
        id: 'req_1',
        lawyerId: 'user_lawyer_1',
        lawyerName: 'Adv. Sophia Martinez',
        barId: 'BAR-NY-89421',
        experience: '12 Years',
        proposedFee: '$4,500 Retainer',
        strategyNote: 'I specialize in real estate boundary disputes. We can obtain an immediate injunction to freeze construction and order survey verification.',
        status: 'approved',
        createdAt: '2026-06-16T10:30:00Z'
      }
    ],
    hearing: {
      date: '2026-09-05',
      time: '10:30 AM',
      courtroom: 'Courtroom 4B - Civil Bench',
      judgeId: 'user_judge_1',
      judgeName: 'Hon. Justice Richard Vance',
      notes: 'Both parties ordered to submit certified land survey blueprints prior to session.'
    },
    verdict: null,
    createdAt: '2026-06-15T09:00:00Z'
  },
  {
    id: 'LC-1002',
    title: 'Intellectual Property & Source Code Misappropriation',
    category: 'Corporate & Commercial',
    clientId: 'user_client_1',
    clientName: 'Alexander Wright',
    incidentDate: '2026-07-02',
    location: 'Metropolitan Tech Center',
    description: 'Former CTO breached non-compete clause by copying propriety AI algorithms into a competing startup registered under an off-shore shell company.',
    urgency: 'Emergency',
    status: 'Lawyer Requested',
    assignedLawyerId: null,
    assignedLawyerName: null,
    requests: [
      {
        id: 'req_2',
        lawyerId: 'user_lawyer_2',
        lawyerName: 'Adv. Marcus Sterling',
        barId: 'BAR-NY-55319',
        experience: '15 Years',
        proposedFee: '$7,200 Fixed Fee',
        strategyNote: 'We will file an immediate emergency ex-parte writ for forensic device inspection and temporary restraining order.',
        status: 'pending',
        createdAt: '2026-07-04T14:15:00Z'
      }
    ],
    hearing: null,
    verdict: null,
    createdAt: '2026-07-03T11:20:00Z'
  },
  {
    id: 'LC-1003',
    title: 'Custody Rights & Marital Estate Asset Settlement',
    category: 'Family Dispute',
    clientId: 'user_client_1',
    clientName: 'Alexander Wright',
    incidentDate: '2026-05-10',
    location: 'County Family Court',
    description: 'Mutual petition for joint legal custody of two minor children and equitable division of shared marital property and retirement assets.',
    urgency: 'Medium',
    status: 'Verdict Rendered',
    assignedLawyerId: 'user_lawyer_3',
    assignedLawyerName: 'Adv. Elena Rostova',
    assignedLawyerFee: '$3,800',
    requests: [
      {
        id: 'req_3',
        lawyerId: 'user_lawyer_3',
        lawyerName: 'Adv. Elena Rostova',
        barId: 'BAR-NY-77102',
        experience: '8 Years',
        proposedFee: '$3,800',
        strategyNote: 'Mediation-first approach to protect children interests while enforcing strict financial disclosure.',
        status: 'approved',
        createdAt: '2026-05-12T09:00:00Z'
      }
    ],
    hearing: {
      date: '2026-07-15',
      time: '02:00 PM',
      courtroom: 'Courtroom 2A - Family Court',
      judgeId: 'user_judge_1',
      judgeName: 'Hon. Justice Richard Vance',
      notes: 'Final decree hearing.'
    },
    verdict: {
      date: '2026-07-15',
      summary: 'Joint custody decree approved. Shared marital estate liquidated with 50/50 net proceeds split.',
      ruling: 'Decree Finalized',
      judgeName: 'Hon. Justice Richard Vance'
    },
    createdAt: '2026-05-11T16:45:00Z'
  },
  {
    id: 'LC-1004',
    title: 'Unlawful Termination & Breach of Employment Contract',
    category: 'Labor & Employment',
    clientId: 'user_client_1',
    clientName: 'Alexander Wright',
    incidentDate: '2026-08-01',
    location: 'Financial District Office',
    description: 'Fired without notice or severance after whistleblowing regarding improper internal audit recording. Seeking back pay and reinstatement.',
    urgency: 'High',
    status: 'Pending Lawyer',
    assignedLawyerId: null,
    assignedLawyerName: null,
    requests: [],
    hearing: null,
    verdict: null,
    createdAt: '2026-08-05T08:30:00Z'
  }
];

class Store {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEY_USERS)) {
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(SEED_USERS));
    }
    if (!localStorage.getItem(STORAGE_KEY_CASES)) {
      localStorage.setItem(STORAGE_KEY_CASES, JSON.stringify(SEED_CASES));
    }
    if (!localStorage.getItem(STORAGE_KEY_CURRENT_USER)) {
      // Default to Alexander Wright (Client)
      localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(SEED_USERS[0]));
    }
  }

  // User Operations
  getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_USERS) || '[]');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_CURRENT_USER));
  }

  setCurrentUser(user) {
    localStorage.setItem(STORAGE_KEY_CURRENT_USER, JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('user-changed', { detail: user }));
  }

  loginOrSignup(userData) {
    const users = this.getUsers();
    let existing = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
    
    if (!existing) {
      existing = {
        id: 'user_' + Date.now(),
        ...userData
      };
      users.push(existing);
    } else {
      // Update existing user with fresh details if provided
      Object.assign(existing, userData);
    }

    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    this.setCurrentUser(existing);
    return existing;
  }

  updateUserProfile(userId, updatedData) {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedData };
      localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
      
      const currentUser = this.getCurrentUser();
      if (currentUser && currentUser.id === userId) {
        this.setCurrentUser(users[index]);
      }
      return users[index];
    }
    return null;
  }

  // Case Operations
  getCases() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_CASES) || '[]');
  }

  getCaseById(id) {
    return this.getCases().find(c => c.id === id);
  }

  saveCases(cases) {
    localStorage.setItem(STORAGE_KEY_CASES, JSON.stringify(cases));
    window.dispatchEvent(new CustomEvent('cases-updated'));
  }

  addCase(caseData) {
    const cases = this.getCases();
    const currentUser = this.getCurrentUser();

    const newCase = {
      id: 'LC-' + Math.floor(1000 + Math.random() * 9000),
      title: caseData.title,
      category: caseData.category,
      clientId: currentUser.id,
      clientName: currentUser.name,
      incidentDate: caseData.incidentDate,
      location: caseData.location || 'Not Specified',
      description: caseData.description,
      urgency: caseData.urgency || 'Medium',
      status: 'Pending Lawyer',
      assignedLawyerId: null,
      assignedLawyerName: null,
      requests: [],
      hearing: null,
      verdict: null,
      createdAt: new Date().toISOString()
    };

    cases.unshift(newCase);
    this.saveCases(cases);
    return newCase;
  }

  // Lawyer submits request to handle case
  addLawyerRequest(caseId, requestData) {
    const cases = this.getCases();
    const targetCase = cases.find(c => c.id === caseId);

    if (!targetCase) return null;

    const currentUser = this.getCurrentUser();
    const newRequest = {
      id: 'req_' + Date.now(),
      lawyerId: currentUser.id,
      lawyerName: currentUser.name,
      barId: currentUser.barId || 'BAR-NY-VERIFIED',
      experience: currentUser.experience || '10 Years',
      proposedFee: requestData.proposedFee,
      strategyNote: requestData.strategyNote,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    if (!targetCase.requests) targetCase.requests = [];
    
    // Check if lawyer already requested
    const existingIdx = targetCase.requests.findIndex(r => r.lawyerId === currentUser.id);
    if (existingIdx >= 0) {
      targetCase.requests[existingIdx] = newRequest;
    } else {
      targetCase.requests.push(newRequest);
    }

    if (targetCase.status === 'Pending Lawyer') {
      targetCase.status = 'Lawyer Requested';
    }

    this.saveCases(cases);
    return newRequest;
  }

  // Client directly requests a specific lawyer to handle their case
  clientRequestLawyer(caseId, lawyerId, clientNote) {
    const cases = this.getCases();
    const targetCase = cases.find(c => c.id === caseId);
    const users = this.getUsers();
    const targetLawyer = users.find(u => u.id === lawyerId);

    if (!targetCase || !targetLawyer) return null;

    if (!targetCase.requests) targetCase.requests = [];

    const newRequest = {
      id: 'req_direct_' + Date.now(),
      lawyerId: targetLawyer.id,
      lawyerName: targetLawyer.name,
      barId: targetLawyer.barId || 'BAR-NY-VERIFIED',
      experience: targetLawyer.experience || '10 Years',
      proposedFee: 'Direct Client Invitation',
      strategyNote: `[Client Request]: ${clientNote || 'Client requested your representation for this case.'}`,
      status: 'pending',
      initiatedBy: 'client',
      createdAt: new Date().toISOString()
    };

    const existingIdx = targetCase.requests.findIndex(r => r.lawyerId === targetLawyer.id);
    if (existingIdx >= 0) {
      targetCase.requests[existingIdx] = newRequest;
    } else {
      targetCase.requests.push(newRequest);
    }

    if (targetCase.status === 'Pending Lawyer') {
      targetCase.status = 'Lawyer Requested';
    }

    this.saveCases(cases);
    return newRequest;
  }

  // Client approves a lawyer's request
  approveLawyerRequest(caseId, requestId) {
    const cases = this.getCases();
    const targetCase = cases.find(c => c.id === caseId);

    if (!targetCase) return null;

    targetCase.requests.forEach(req => {
      if (req.id === requestId) {
        req.status = 'approved';
        targetCase.assignedLawyerId = req.lawyerId;
        targetCase.assignedLawyerName = req.lawyerName;
        targetCase.assignedLawyerFee = req.proposedFee;
        targetCase.status = 'Lawyer Assigned';
      } else {
        req.status = 'declined';
      }
    });

    this.saveCases(cases);
    return targetCase;
  }

  // Judge schedules court hearing
  scheduleHearing(caseId, hearingData) {
    const cases = this.getCases();
    const targetCase = cases.find(c => c.id === caseId);
    const currentUser = this.getCurrentUser();

    if (!targetCase) return null;

    targetCase.hearing = {
      date: hearingData.date,
      time: hearingData.time,
      courtroom: hearingData.courtroom,
      judgeId: currentUser.id,
      judgeName: currentUser.name,
      notes: hearingData.notes || ''
    };

    targetCase.status = 'Hearing Scheduled';
    this.saveCases(cases);
    return targetCase;
  }

  // Judge issues final verdict
  issueVerdict(caseId, verdictData) {
    const cases = this.getCases();
    const targetCase = cases.find(c => c.id === caseId);
    const currentUser = this.getCurrentUser();

    if (!targetCase) return null;

    targetCase.verdict = {
      date: new Date().toISOString().split('T')[0],
      ruling: verdictData.ruling,
      summary: verdictData.summary,
      judgeName: currentUser.name
    };

    targetCase.status = 'Verdict Rendered';
    this.saveCases(cases);
    return targetCase;
  }
}

export const store = new Store();
