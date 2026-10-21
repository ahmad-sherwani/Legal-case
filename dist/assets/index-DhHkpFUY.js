(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const ie="lexportal_cases_db",X="lexportal_users_db",re="lexportal_current_user",ye=[{id:"user_client_1",name:"Alexander Wright",email:"alexander@client.com",role:"client",phone:"+91 98765 43210",aadhaar:"4589-1204-8931",aadhaarVerified:!0,location:"New Delhi, Delhi"},{id:"user_lawyer_1",name:"Adv. Rajesh Sharma",email:"rajesh@sharmalaw.in",role:"lawyer",phone:"+91 98112 34567",aadhaar:"8912-3456-7890",aadhaarVerified:!0,barId:"BAR-NY-89421",specialization:"Land & Property Dispute, Corporate",experience:"12 Years",casesHandled:142,location:"New Delhi, Delhi",winRate:"94%",rating:4.9,isTopLawyer:!0},{id:"user_lawyer_2",name:"Adv. Priya Deshmukh",email:"priya@deshmukhdefense.in",role:"lawyer",phone:"+91 98220 11223",aadhaar:"6712-4589-3012",aadhaarVerified:!0,barId:"BAR-MH-55319",specialization:"Criminal Case, Cyber Crime",experience:"15 Years",casesHandled:185,location:"Mumbai, Maharashtra",winRate:"91%",rating:4.8,isTopLawyer:!0},{id:"user_lawyer_3",name:"Adv. Anand Iyer",email:"anand@iyerlegal.in",role:"lawyer",phone:"+91 98440 33445",aadhaar:"1234-5678-9012",aadhaarVerified:!0,barId:"BAR-KA-77102",specialization:"Family Dispute, Civil Litigation",experience:"8 Years",casesHandled:96,location:"Bengaluru, Karnataka",winRate:"88%",rating:4.7,isTopLawyer:!1},{id:"user_lawyer_4",name:"Adv. Sunita Rao",email:"sunita@raochambers.in",role:"lawyer",phone:"+91 98770 55667",aadhaar:"3456-7890-1234",aadhaarVerified:!0,barId:"BAR-DL-33091",specialization:"Labor & Employment, Intellectual Property",experience:"11 Years",casesHandled:120,location:"New Delhi, Delhi",winRate:"92%",rating:4.9,isTopLawyer:!0},{id:"user_judge_1",name:"Hon. Justice R. S. Pathak",email:"justice.pathak@highcourt.gov.in",role:"judge",phone:"+91 98100 99887",aadhaar:"9988-7766-5544",aadhaarVerified:!0,designation:"High Court Justice",courtName:"High Court Bench 4, Delhi",jurisdiction:"Civil & Commercial Division",experience:"18 Years",location:"New Delhi, Delhi"}],Oe=[{id:"LC-1001",title:"Residential Property Boundary & Encroachment Dispute",category:"Land & Property Dispute",clientId:"user_client_1",clientName:"Alexander Wright",incidentDate:"2026-06-14",location:"142 Oakridge Blvd, District 5",description:"Commercial neighbor constructed a 6-foot concrete barrier extending 4.5 feet into my deeded parcel, blocking access to utility mainlines and damaging private driveway.",urgency:"High",status:"Hearing Scheduled",assignedLawyerId:"user_lawyer_1",assignedLawyerName:"Adv. Sophia Martinez",assignedLawyerFee:"$4,500 Retainer",requests:[{id:"req_1",lawyerId:"user_lawyer_1",lawyerName:"Adv. Sophia Martinez",barId:"BAR-NY-89421",experience:"12 Years",proposedFee:"$4,500 Retainer",strategyNote:"I specialize in real estate boundary disputes. We can obtain an immediate injunction to freeze construction and order survey verification.",status:"approved",createdAt:"2026-06-16T10:30:00Z"}],hearing:{date:"2026-09-05",time:"10:30 AM",courtroom:"Courtroom 4B - Civil Bench",judgeId:"user_judge_1",judgeName:"Hon. Justice Richard Vance",notes:"Both parties ordered to submit certified land survey blueprints prior to session."},verdict:null,createdAt:"2026-06-15T09:00:00Z"},{id:"LC-1002",title:"Intellectual Property & Source Code Misappropriation",category:"Corporate & Commercial",clientId:"user_client_1",clientName:"Alexander Wright",incidentDate:"2026-07-02",location:"Metropolitan Tech Center",description:"Former CTO breached non-compete clause by copying propriety AI algorithms into a competing startup registered under an off-shore shell company.",urgency:"Emergency",status:"Lawyer Requested",assignedLawyerId:null,assignedLawyerName:null,requests:[{id:"req_2",lawyerId:"user_lawyer_2",lawyerName:"Adv. Marcus Sterling",barId:"BAR-NY-55319",experience:"15 Years",proposedFee:"$7,200 Fixed Fee",strategyNote:"We will file an immediate emergency ex-parte writ for forensic device inspection and temporary restraining order.",status:"pending",createdAt:"2026-07-04T14:15:00Z"}],hearing:null,verdict:null,createdAt:"2026-07-03T11:20:00Z"},{id:"LC-1003",title:"Custody Rights & Marital Estate Asset Settlement",category:"Family Dispute",clientId:"user_client_1",clientName:"Alexander Wright",incidentDate:"2026-05-10",location:"County Family Court",description:"Mutual petition for joint legal custody of two minor children and equitable division of shared marital property and retirement assets.",urgency:"Medium",status:"Verdict Rendered",assignedLawyerId:"user_lawyer_3",assignedLawyerName:"Adv. Elena Rostova",assignedLawyerFee:"$3,800",requests:[{id:"req_3",lawyerId:"user_lawyer_3",lawyerName:"Adv. Elena Rostova",barId:"BAR-NY-77102",experience:"8 Years",proposedFee:"$3,800",strategyNote:"Mediation-first approach to protect children interests while enforcing strict financial disclosure.",status:"approved",createdAt:"2026-05-12T09:00:00Z"}],hearing:{date:"2026-07-15",time:"02:00 PM",courtroom:"Courtroom 2A - Family Court",judgeId:"user_judge_1",judgeName:"Hon. Justice Richard Vance",notes:"Final decree hearing."},verdict:{date:"2026-07-15",summary:"Joint custody decree approved. Shared marital estate liquidated with 50/50 net proceeds split.",ruling:"Decree Finalized",judgeName:"Hon. Justice Richard Vance"},createdAt:"2026-05-11T16:45:00Z"},{id:"LC-1004",title:"Unlawful Termination & Breach of Employment Contract",category:"Labor & Employment",clientId:"user_client_1",clientName:"Alexander Wright",incidentDate:"2026-08-01",location:"Financial District Office",description:"Fired without notice or severance after whistleblowing regarding improper internal audit recording. Seeking back pay and reinstatement.",urgency:"High",status:"Pending Lawyer",assignedLawyerId:null,assignedLawyerName:null,requests:[],hearing:null,verdict:null,createdAt:"2026-08-05T08:30:00Z"}];class Ue{constructor(){this.init()}init(){localStorage.getItem(X)||localStorage.setItem(X,JSON.stringify(ye)),localStorage.getItem(ie)||localStorage.setItem(ie,JSON.stringify(Oe)),localStorage.getItem(re)||localStorage.setItem(re,JSON.stringify(ye[0]))}getUsers(){return JSON.parse(localStorage.getItem(X)||"[]")}getCurrentUser(){return JSON.parse(localStorage.getItem(re))}setCurrentUser(e){localStorage.setItem(re,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("user-changed",{detail:e}))}loginOrSignup(e){const a=this.getUsers();let s=a.find(r=>r.email.toLowerCase()===e.email.toLowerCase());return s?Object.assign(s,e):(s={id:"user_"+Date.now(),...e},a.push(s)),localStorage.setItem(X,JSON.stringify(a)),this.setCurrentUser(s),s}updateUserProfile(e,a){const s=this.getUsers(),r=s.findIndex(n=>n.id===e);if(r!==-1){s[r]={...s[r],...a},localStorage.setItem(X,JSON.stringify(s));const n=this.getCurrentUser();return n&&n.id===e&&this.setCurrentUser(s[r]),s[r]}return null}getCases(){return JSON.parse(localStorage.getItem(ie)||"[]")}getCaseById(e){return this.getCases().find(a=>a.id===e)}saveCases(e){localStorage.setItem(ie,JSON.stringify(e)),window.dispatchEvent(new CustomEvent("cases-updated"))}addCase(e){const a=this.getCases(),s=this.getCurrentUser(),r={id:"LC-"+Math.floor(1e3+Math.random()*9e3),title:e.title,category:e.category,clientId:s.id,clientName:s.name,incidentDate:e.incidentDate,location:e.location||"Not Specified",description:e.description,urgency:e.urgency||"Medium",status:"Pending Lawyer",assignedLawyerId:null,assignedLawyerName:null,requests:[],hearing:null,verdict:null,createdAt:new Date().toISOString()};return a.unshift(r),this.saveCases(a),r}addLawyerRequest(e,a){const s=this.getCases(),r=s.find(u=>u.id===e);if(!r)return null;const n=this.getCurrentUser(),c={id:"req_"+Date.now(),lawyerId:n.id,lawyerName:n.name,barId:n.barId||"BAR-NY-VERIFIED",experience:n.experience||"10 Years",proposedFee:a.proposedFee,strategyNote:a.strategyNote,status:"pending",createdAt:new Date().toISOString()};r.requests||(r.requests=[]);const d=r.requests.findIndex(u=>u.lawyerId===n.id);return d>=0?r.requests[d]=c:r.requests.push(c),r.status==="Pending Lawyer"&&(r.status="Lawyer Requested"),this.saveCases(s),c}clientRequestLawyer(e,a,s){const r=this.getCases(),n=r.find(b=>b.id===e),d=this.getUsers().find(b=>b.id===a);if(!n||!d)return null;n.requests||(n.requests=[]);const u={id:"req_direct_"+Date.now(),lawyerId:d.id,lawyerName:d.name,barId:d.barId||"BAR-NY-VERIFIED",experience:d.experience||"10 Years",proposedFee:"Direct Client Invitation",strategyNote:`[Client Request]: ${s||"Client requested your representation for this case."}`,status:"pending",initiatedBy:"client",createdAt:new Date().toISOString()},v=n.requests.findIndex(b=>b.lawyerId===d.id);return v>=0?n.requests[v]=u:n.requests.push(u),n.status==="Pending Lawyer"&&(n.status="Lawyer Requested"),this.saveCases(r),u}approveLawyerRequest(e,a){const s=this.getCases(),r=s.find(n=>n.id===e);return r?(r.requests.forEach(n=>{n.id===a?(n.status="approved",r.assignedLawyerId=n.lawyerId,r.assignedLawyerName=n.lawyerName,r.assignedLawyerFee=n.proposedFee,r.status="Lawyer Assigned"):n.status="declined"}),this.saveCases(s),r):null}scheduleHearing(e,a){const s=this.getCases(),r=s.find(c=>c.id===e),n=this.getCurrentUser();return r?(r.hearing={date:a.date,time:a.time,courtroom:a.courtroom,judgeId:n.id,judgeName:n.name,notes:a.notes||""},r.status="Hearing Scheduled",this.saveCases(s),r):null}issueVerdict(e,a){const s=this.getCases(),r=s.find(c=>c.id===e),n=this.getCurrentUser();return r?(r.verdict={date:new Date().toISOString().split("T")[0],ruling:a.ruling,summary:a.summary,judgeName:n.name},r.status="Verdict Rendered",this.saveCases(s),r):null}}const $=new Ue,se=["Family Dispute","Land & Property Dispute","Criminal Case","Corporate & Commercial","Cyber Crime","Civil Litigation","Labor & Employment","Intellectual Property","Banking & Finance"],ze=["Low","Medium","High","Emergency"],Ie=["New Delhi, Delhi","Mumbai, Maharashtra","Bengaluru, Karnataka","Chennai, Tamil Nadu","Kolkata, West Bengal","Hyderabad, Telangana","Pune, Maharashtra","Ahmedabad, Gujarat","Jaipur, Rajasthan","Lucknow, Uttar Pradesh","Chandigarh","Kochi, Kerala","Patna, Bihar","Indore, Madhya Pradesh","Surat, Gujarat","Guwahati, Assam","Bhubaneswar, Odisha"];function z(o){return o?new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"N/A"}function Z(o){switch(o){case"Registered":case"Pending Lawyer":return'<span class="badge badge-pending"><span class="badge-dot"></span>Pending Lawyer</span>';case"Lawyer Requested":return'<span class="badge badge-requested"><span class="badge-dot"></span>Lawyer Requested</span>';case"Lawyer Assigned":return'<span class="badge badge-assigned"><span class="badge-dot"></span>Lawyer Approved</span>';case"Hearing Scheduled":return'<span class="badge badge-scheduled"><span class="badge-dot"></span>Hearing Scheduled</span>';case"Verdict Rendered":case"Closed":return'<span class="badge badge-verdict"><span class="badge-dot"></span>Verdict Rendered</span>';default:return`<span class="badge badge-pending"><span class="badge-dot"></span>${o}</span>`}}function G(o){return`<span class="badge badge-urgency-${(o||"medium").toLowerCase()}">${o}</span>`}function l(o,e=18,a=""){return{scale:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>`,plus:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,user:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,lawyer:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,gavel:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 12.5-8 8a2.119 2.119 0 0 1-3-3l8-8"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>`,search:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,calendar:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,check:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,clock:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,fileText:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,send:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,filter:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,award:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,alertTriangle:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,eye:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,mapPin:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,sun:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>`,moon:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,star:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,briefcase:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,edit:`<svg width="${e}" height="${e}" class="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`}[o]||""}function D(o,e="info",a=""){let s=document.getElementById("toast-container");s||(s=document.createElement("div"),s.id="toast-container",document.body.appendChild(s));const r=document.createElement("div");r.className=`toast toast-${e}`;const n={success:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',warning:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',error:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'};r.innerHTML=`
    ${n[e]||n.info}
    <div style="flex: 1;">
      ${a?`<div style="font-weight: 700; font-size: 0.875rem; margin-bottom: 2px;">${a}</div>`:""}
      <div style="font-size: 0.85rem; color: #CBD5E1;">${o}</div>
    </div>
  `,s.appendChild(r),setTimeout(()=>{r.style.animation="slideIn 0.3s ease-out reverse forwards",setTimeout(()=>{r.remove()},300)},4e3)}function fe(){const o=$.getCurrentUser(),e=$.getUsers(),a=`
    <div class="role-bar-info">
      ${l("scale",18,"color-gold")}
      <span>Current User:</span>
      <span class="role-bar-badge">${o.role.toUpperCase()}</span>
      <span style="color: var(--text-main); font-weight: 600; display: flex; align-items: center; gap: 6px;">
        ${o.profilePic?`<img src="${o.profilePic}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">`:""}
        ${o.name}
        ${o.aadhaarVerified?'<span style="color: #34D399; font-size: 0.75rem; font-weight: 700;">✓ Verified</span>':""}
      </span>
    </div>

    <div class="quick-switch-group">
      <span style="font-size: 0.78rem; color: var(--text-dim); margin-right: 4px;">Quick Switch Demo:</span>
      
      <button class="quick-switch-btn ${o.role==="client"?"active":""}" data-user-id="user_client_1">
        ${l("user",14)} Client Portal
      </button>

      <button class="quick-switch-btn ${o.role==="lawyer"?"active":""}" data-user-id="user_lawyer_1">
        ${l("lawyer",14)} Lawyer Portal
      </button>

      <button class="quick-switch-btn ${o.role==="judge"?"active":""}" data-user-id="user_judge_1">
        ${l("gavel",14)} Judge Bench
      </button>

      <button class="btn-outline-amber" id="btn-open-auth-modal" style="margin-left: 12px; padding: 4px 10px; font-size: 0.78rem;">
        Login / Register
      </button>
    </div>
  `,s=document.getElementById("role-bar-container");if(s){s.innerHTML=a,s.querySelectorAll(".quick-switch-btn").forEach(n=>{n.addEventListener("click",()=>{const c=n.getAttribute("data-user-id"),d=e.find(u=>u.id===c);d&&($.setCurrentUser(d),D(`Switched view to ${d.role.toUpperCase()} (${d.name})`,"info","Role Switch"))})});const r=s.querySelector("#btn-open-auth-modal");r&&r.addEventListener("click",()=>{Ee()})}}function Ee(o="signup"){let e=o,a=!1,s=null,r=null;const n=`
    <div class="modal-overlay active" id="auth-modal">
      <div class="modal-content" style="max-width: 620px;">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.4rem; color: var(--primary-gold);">Portal Login & Registration</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Access your Client, Advocate, or Judicial Bench account</p>
          </div>
          <button class="modal-close" id="close-auth-modal">${l("x",20)}</button>
        </div>

        <div class="tabs-header" style="margin-bottom: 20px;">
          <button class="tab-btn ${e==="login"?"active":""}" id="auth-tab-login">Account Login</button>
          <button class="tab-btn ${e==="signup"?"active":""}" id="auth-tab-signup">Register New Account</button>
        </div>

        <div id="auth-form-container"></div>
      </div>
    </div>
  `;let c=document.getElementById("auth-modal");c&&c.remove(),document.body.insertAdjacentHTML("beforeend",n);const d=document.getElementById("auth-modal"),u=document.getElementById("close-auth-modal"),v=document.getElementById("auth-tab-login"),b=document.getElementById("auth-tab-signup"),h=document.getElementById("auth-form-container");u.addEventListener("click",()=>d.remove()),v.addEventListener("click",()=>{e="login",v.classList.add("active"),b.classList.remove("active"),L()}),b.addEventListener("click",()=>{e="signup",b.classList.add("active"),v.classList.remove("active"),L()});function L(){if(e==="login")h.innerHTML=`
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
            ${l("check",18)} Access Dashboard
          </button>
        </form>
      `,document.getElementById("login-form").addEventListener("submit",B=>{B.preventDefault();const q=document.getElementById("login-role").value,k=document.getElementById("login-identifier").value.trim();let R=$.getUsers().find(H=>H.email.toLowerCase()===k.toLowerCase()||H.phone&&H.phone.includes(k));R?$.setCurrentUser(R):R=$.loginOrSignup({name:k.includes("@")?k.split("@")[0]:"User "+k,email:k.includes("@")?k:`${k}@lexportal.in`,role:q,location:"New Delhi, Delhi"}),D(`Logged in successfully as ${R.name} (${R.role.toUpperCase()})`,"success"),d.remove()});else{h.innerHTML=`
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
                ${Ie.map(j=>`<option value="${j}">${j}</option>`).join("")}
              </select>
            </div>
          </div>

          <!-- Aadhaar & OTP Verification Container -->
          <div class="aadhaar-verification-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
              <label class="form-label" style="margin: 0; display: flex; align-items: center; gap: 6px;">
                ${l("scale",16,"color-gold")} 12-Digit Aadhaar Card Number
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
            ${l("check",20)} Complete Registration & Create Account
          </button>
        </form>
      `;const B=document.getElementById("signup-role"),q=document.getElementById("signup-lawyer-fields"),k=document.getElementById("signup-judge-fields"),I=document.getElementById("btn-send-aadhaar-otp"),R=document.getElementById("btn-verify-otp"),H=document.getElementById("otp-input-row"),_=document.getElementById("signup-aadhaar"),ne=document.getElementById("signup-phone"),ee=document.getElementById("aadhaar-status-badge"),oe=document.getElementById("signup-photo-file"),le=document.getElementById("profile-pic-preview");B.addEventListener("change",()=>{q.style.display=B.value==="lawyer"?"block":"none",k.style.display=B.value==="judge"?"block":"none"}),q.style.display=B.value==="lawyer"?"block":"none",k.style.display=B.value==="judge"?"block":"none",oe.addEventListener("change",j=>{const P=j.target.files[0];if(P){const J=new FileReader;J.onload=K=>{r=K.target.result,le.innerHTML=`<img src="${r}" style="width: 100%; height: 100%; object-fit: cover;">`},J.readAsDataURL(P)}}),_.addEventListener("input",j=>{let J=j.target.value.replace(/\D/g,"").substring(0,12).replace(/(.{4})/g,"$1 ").trim();j.target.value=J}),I.addEventListener("click",()=>{const j=_.value.replace(/\s/g,""),P=ne.value.trim();if(j.length<12){D("Please enter a valid 12-digit Aadhaar Card number first.","warning","Invalid Aadhaar");return}if(!P){D("Please enter your Aadhaar-linked mobile phone number.","warning","Missing Phone");return}s=Math.floor(1e5+Math.random()*9e5).toString(),H.style.display="block",D(`Aadhaar OTP sent to ${P}! (Simulated OTP Code: ${s})`,"info","OTP Sent")}),R.addEventListener("click",()=>{const j=document.getElementById("signup-otp-input").value.trim();j===s||j.length===6&&/^\d+$/.test(j)?(a=!0,ee.className="aadhaar-badge verified",ee.innerHTML="✓ Aadhaar Verified",H.style.display="none",I.disabled=!0,I.innerText="Verified ✓",I.style.opacity="0.7",D("Aadhaar number successfully verified & linked!","success","Verified")):D(`Invalid OTP entered! Use simulated OTP: ${s||"894210"}`,"danger","Verification Failed")}),document.getElementById("signup-form").addEventListener("submit",j=>{j.preventDefault();const P=B.value,J=document.getElementById("signup-name").value.trim(),K=document.getElementById("signup-email").value.trim(),de=document.getElementById("signup-phone").value.trim(),ce=document.getElementById("signup-location").value,te=document.getElementById("signup-aadhaar").value.trim(),Q={name:J,email:K,phone:de,role:P,location:ce,aadhaar:te,aadhaarVerified:a||!0,profilePic:r,barId:P==="lawyer"?document.getElementById("signup-bar-id").value.trim()||"BAR-NY-89421":null,specialization:P==="lawyer"?document.getElementById("signup-specialization").value.trim()||"General Practice":null,experience:P==="lawyer"?document.getElementById("signup-experience").value.trim()||"10 Years":P==="judge"?document.getElementById("signup-judge-exp").value.trim()||"15 Years":null,casesHandled:P==="lawyer"?parseInt(document.getElementById("signup-cases-handled").value)||120:null,designation:P==="judge"?document.getElementById("signup-designation").value.trim()||"High Court Justice":null,courtName:P==="judge"?document.getElementById("signup-court").value.trim()||"High Court Bench 3":null,rating:4.9,winRate:"92%",isTopLawyer:!0},ae=$.loginOrSignup(Q);D(`Registration Successful! Welcome to LexPortal, ${ae.name}.`,"success","Account Registered"),d.remove()})}}L()}function Ve(){const o=$.getCurrentUser();if(!o)return;let e=o.profilePic||null;const a=`
    <div class="modal-overlay active" id="edit-profile-modal">
      <div class="modal-content" style="max-width: 600px;">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Edit User Profile Credentials</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Update location in India, Bar registration ID, phone number & profile avatar</p>
          </div>
          <button class="modal-close" id="close-profile-modal">${l("x",20)}</button>
        </div>

        <form id="edit-profile-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Full Name & Title</label>
              <input type="text" class="form-input" id="edit-name" value="${o.name}" required>
            </div>
            <div class="form-group">
              <label class="form-label">Phone Number</label>
              <input type="text" class="form-input" id="edit-phone" value="${o.phone||"+91 98765 43210"}" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Location in India</label>
              <select class="form-select" id="edit-location" required>
                ${Ie.map(d=>`<option value="${d}" ${o.location===d?"selected":""}>${d}</option>`).join("")}
              </select>
            </div>
            ${o.role==="lawyer"?`
              <div class="form-group">
                <label class="form-label">Bar Registration No. (e.g. BAR-NY-89421)</label>
                <input type="text" class="form-input" id="edit-bar-id" value="${o.barId||"BAR-NY-89421"}" required>
              </div>
            `:`
              <div class="form-group">
                <label class="form-label">Aadhaar Card Number</label>
                <input type="text" class="form-input" id="edit-aadhaar" value="${o.aadhaar||"9876-5432-1098"}" required>
              </div>
            `}
          </div>

          ${o.role==="lawyer"?`
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Work Experience (Years)</label>
                <input type="text" class="form-input" id="edit-experience" value="${o.experience||"10 Years"}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Total Cases Handled</label>
                <input type="number" class="form-input" id="edit-cases-handled" value="${o.casesHandled||120}" required min="0">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Primary Legal Specialization</label>
              <input type="text" class="form-input" id="edit-specialization" value="${o.specialization||"Land & Property Dispute"}" required>
            </div>
          `:""}

          <div class="form-group">
            <label class="form-label">Update Profile Photo</label>
            <div style="display: flex; align-items: center; gap: 14px;">
              <div id="edit-photo-preview" class="avatar-circle" style="width: 46px; height: 46px; overflow: hidden; background: var(--bg-input); border: 1px solid var(--border-light);">
                ${o.profilePic?`<img src="${o.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">`:o.name.charAt(0)}
              </div>
              <input type="file" id="edit-photo-file" accept="image/*" class="form-input" style="padding: 8px;">
            </div>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px; margin-top: 8px;">
            ${l("check",18)} Save Profile Changes
          </button>
        </form>
      </div>
    </div>
  `;let s=document.getElementById("edit-profile-modal");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",a);const r=document.getElementById("edit-profile-modal");document.getElementById("close-profile-modal").addEventListener("click",()=>r.remove());const n=document.getElementById("edit-photo-file"),c=document.getElementById("edit-photo-preview");n.addEventListener("change",d=>{const u=d.target.files[0];if(u){const v=new FileReader;v.onload=b=>{e=b.target.result,c.innerHTML=`<img src="${e}" style="width: 100%; height: 100%; object-fit: cover;">`},v.readAsDataURL(u)}}),document.getElementById("edit-profile-form").addEventListener("submit",d=>{d.preventDefault();const u={name:document.getElementById("edit-name").value,phone:document.getElementById("edit-phone").value,location:document.getElementById("edit-location").value,profilePic:e};if(o.role==="lawyer")u.barId=document.getElementById("edit-bar-id").value,u.experience=document.getElementById("edit-experience").value,u.casesHandled=parseInt(document.getElementById("edit-cases-handled").value)||0,u.specialization=document.getElementById("edit-specialization").value;else{const v=document.getElementById("edit-aadhaar");v&&(u.aadhaar=v.value)}$.updateUserProfile(o.id,u),D("Profile updated successfully!","success","Profile Updated"),r.remove()})}let W="my-cases";function _e(o){const e=$.getCurrentUser(),s=$.getCases().filter(L=>L.clientId===e.id),n=$.getUsers().filter(L=>L.role==="lawyer"),c=s.length,d=s.filter(L=>L.status==="Pending Lawyer"||L.status==="Lawyer Requested").length,u=s.filter(L=>L.status==="Lawyer Assigned"||L.status==="Hearing Scheduled").length,v=s.filter(L=>L.status==="Verdict Rendered"||L.status==="Closed").length,b=Array.from(new Set(n.map(L=>L.location).filter(Boolean)));function h(){o.innerHTML=`
      <!-- Top Client Stats Header -->
      <div class="stats-grid">
        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-gold">${l("fileText",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${c}</span>
            <span class="stat-label">Total My Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-blue">${l("clock",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${d}</span>
            <span class="stat-label">Awaiting Lawyer Approval</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-indigo">${l("lawyer",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${u}</span>
            <span class="stat-label">Active / In Hearing</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-emerald">${l("gavel",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${v}</span>
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
          ${l("plus",20)} Register New Case
        </button>
      </div>

      <!-- Client Navigation Tabs -->
      <div class="tabs-header">
        <button class="tab-btn ${W==="my-cases"?"active":""}" id="tab-client-cases">
          ${l("fileText",16)} My Registered Cases (${s.length})
        </button>
        <button class="tab-btn ${W==="find-lawyers"?"active":""}" id="tab-find-lawyers">
          ${l("lawyer",16)} Find Advocates & Top Lawyers (${n.length})
        </button>
      </div>

      ${W==="my-cases"?Je(s):Ye(n,b)}
    `,document.getElementById("tab-client-cases").addEventListener("click",()=>{W="my-cases",h()}),document.getElementById("tab-find-lawyers").addEventListener("click",()=>{W="find-lawyers",h()}),document.getElementById("btn-register-case").addEventListener("click",()=>ke()),W==="my-cases"?We(o,s):Ze(o,n,s)}h()}function Je(o){return`
    <!-- Controls Bar -->
    <div class="controls-bar">
      <div class="search-box">
        <span class="search-icon">${l("search",16)}</span>
        <input type="text" class="search-input" id="client-search" placeholder="Search my cases by title or ID...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="client-filter-category">
          <option value="ALL">All Categories</option>
          ${se.map(e=>`<option value="${e}">${e}</option>`).join("")}
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
      ${Ae(o)}
    </div>
  `}function Ye(o,e){return`
    <!-- Advocate Controls Bar -->
    <div class="controls-bar">
      <div class="search-box">
        <span class="search-icon">${l("search",16)}</span>
        <input type="text" class="search-input" id="lawyer-dir-search" placeholder="Search advocates by name, bar ID, or specialization...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="lawyer-dir-location">
          <option value="ALL">All Locations / Cities</option>
          ${e.map(a=>`<option value="${a}">${a}</option>`).join("")}
        </select>

        <select class="filter-select" id="lawyer-dir-top">
          <option value="ALL">All Advocates</option>
          <option value="TOP">★ Top Rated Advocates Only</option>
        </select>
      </div>
    </div>

    <!-- Advocates Grid -->
    <div class="cases-grid" id="lawyers-directory-list">
      ${Be(o)}
    </div>
  `}function Be(o){return o.length===0?`
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${l("lawyer",48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Advocates Found</h3>
        <p>No legal advocates match your search and location criteria.</p>
      </div>
    `:o.map(e=>`
      <div class="glass-card glass-card-hover lawyer-card">
        ${e.isTopLawyer?`
          <div class="top-lawyer-badge">
            ${l("star",12)} Top Advocate
          </div>
        `:""}

        <div>
          <div class="lawyer-profile-header">
            <div class="lawyer-avatar-lg" style="overflow: hidden;">
              ${e.profilePic?`<img src="${e.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">`:e.name.charAt(0)}
            </div>
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 2px;">${e.name}</h3>
              <div style="font-size: 0.78rem; color: var(--primary-gold); font-family: monospace; font-weight: 700;">Bar Reg ID: ${e.barId||"BAR-NY-89421"}</div>
              <div style="margin-top: 4px; display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                <span class="location-pill">${l("mapPin",12)} ${e.location||"New Delhi, Delhi"}</span>
                <span class="aadhaar-badge verified" style="font-size: 0.68rem; padding: 1px 6px;">✓ Verified</span>
              </div>
            </div>
          </div>

          <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">
            <strong>Specialization:</strong> ${e.specialization||"Corporate & Civil Law"}
          </div>

          <!-- Advocate Stats Row -->
          <div class="lawyer-stats-row">
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${e.experience||"5+ Yrs"}</span>
              <span class="lawyer-stat-lbl">Experience</span>
            </div>
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${e.casesHandled||50}+</span>
              <span class="lawyer-stat-lbl">Cases Handled</span>
            </div>
            <div class="lawyer-stat-item">
              <span class="lawyer-stat-val">${e.winRate||"90%"}</span>
              <span class="lawyer-stat-lbl">Win Rate</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 14px;">
          <button class="btn-primary direct-request-lawyer-btn" data-lawyer-id="${e.id}" data-lawyer-name="${e.name}" style="width: 100%; justify-content: center; font-size: 0.85rem;">
            ${l("send",16)} Request Advocate to Handle Case
          </button>
        </div>
      </div>
    `).join("")}function We(o,e){const a=document.getElementById("client-search"),s=document.getElementById("client-filter-category"),r=document.getElementById("client-filter-status"),n=()=>{const c=a.value.toLowerCase(),d=s.value,u=r.value,v=e.filter(b=>{const h=b.title.toLowerCase().includes(c)||b.id.toLowerCase().includes(c)||b.description.toLowerCase().includes(c),L=d==="ALL"||b.category===d,B=u==="ALL"||b.status===u;return h&&L&&B});document.getElementById("client-cases-list").innerHTML=Ae(v),we(o)};a&&a.addEventListener("input",n),s&&s.addEventListener("change",n),r&&r.addEventListener("change",n),we(o)}function Ze(o,e,a){const s=document.getElementById("lawyer-dir-search"),r=document.getElementById("lawyer-dir-location"),n=document.getElementById("lawyer-dir-top"),c=()=>{const d=s.value.toLowerCase(),u=r.value,v=n.value,b=e.filter(h=>{const L=h.name.toLowerCase().includes(d)||h.barId&&h.barId.toLowerCase().includes(d)||h.specialization&&h.specialization.toLowerCase().includes(d),B=u==="ALL"||h.location===u,q=v==="ALL"||h.isTopLawyer===!0;return L&&B&&q});document.getElementById("lawyers-directory-list").innerHTML=Be(b),be(o,a)};s&&s.addEventListener("input",c),r&&r.addEventListener("change",c),n&&n.addEventListener("change",c),be(o,a)}function be(o,e){o.querySelectorAll(".direct-request-lawyer-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-lawyer-id"),r=a.getAttribute("data-lawyer-name");Ge(s,r,e)})})}function Ge(o,e,a){const s=a.filter(v=>v.status!=="Verdict Rendered"&&v.status!=="Closed"),r=`
    <div class="modal-overlay active" id="direct-request-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Request Advocate Representation</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Send a direct case assignment request to <strong>${e}</strong></p>
          </div>
          <button class="modal-close" id="close-direct-modal">${l("x",20)}</button>
        </div>

        ${s.length===0?`
          <div style="padding: 20px; text-align: center; color: var(--text-muted);">
            <p style="margin-bottom: 12px;">You currently have no open legal cases registered.</p>
            <button class="btn-primary" id="modal-reg-case-btn">${l("plus",16)} Register New Case First</button>
          </div>
        `:`
          <form id="direct-request-form">
            <div class="form-group">
              <label class="form-label">Select Your Legal Case to Assign</label>
              <select class="form-select" id="select-client-case" required>
                ${s.map(v=>`<option value="${v.id}">${v.id} - ${v.title} (${v.category})</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Personal Message / Case Brief for Advocate</label>
              <textarea class="form-textarea" id="direct-request-note" placeholder="Provide additional instructions, desired retainer expectations, or urgent court deadlines..." required></textarea>
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 12px;">
              ${l("send",18)} Send Representation Invitation
            </button>
          </form>
        `}
      </div>
    </div>
  `;let n=document.getElementById("direct-request-modal");n&&n.remove(),document.body.insertAdjacentHTML("beforeend",r);const c=document.getElementById("direct-request-modal");document.getElementById("close-direct-modal").addEventListener("click",()=>c.remove());const d=document.getElementById("modal-reg-case-btn");d&&d.addEventListener("click",()=>{c.remove(),ke()});const u=document.getElementById("direct-request-form");u&&u.addEventListener("submit",v=>{v.preventDefault();const b=document.getElementById("select-client-case").value,h=document.getElementById("direct-request-note").value;$.clientRequestLawyer(b,o,h),D(`Direct representation invitation sent to ${e}!`,"success","Request Sent"),c.remove()})}function Ae(o){return o.length===0?`
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${l("fileText",48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Legal Cases Found</h3>
        <p>Click "Register New Case" to submit your legal dispute details to available advocates.</p>
      </div>
    `:o.map(e=>{const a=e.requests?e.requests.filter(s=>s.status==="pending").length:0;return`
      <div class="glass-card glass-card-hover case-card" data-case-id="${e.id}">
        <div>
          <div class="case-card-header">
            <span class="case-number">${e.id}</span>
            <div style="display: flex; gap: 6px; align-items: center;">
              ${G(e.urgency)}
              ${Z(e.status)}
            </div>
          </div>

          <h3 class="case-title">${e.title}</h3>
          <p class="case-description">${e.description}</p>
        </div>

        <div>
          <div class="case-meta">
            <div class="meta-item">${l("scale",14)} <span class="category-pill">${e.category}</span></div>
            <div class="meta-item">${l("calendar",14)} <span>Incident: ${z(e.incidentDate)}</span></div>
          </div>

          ${e.assignedLawyerName?`
            <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem; display: flex; align-items: center; justify-content: space-between;">
              <span style="color: var(--text-muted); font-size: 0.78rem;">Assigned Lawyer:</span>
              <span style="font-weight: 700; color: #818CF8;">${e.assignedLawyerName}</span>
            </div>
          `:""}

          ${a>0?`
            <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid var(--border-amber); padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem; display: flex; align-items: center; justify-content: space-between; animation: pulse 2s infinite;">
              <span style="font-weight: 700; color: var(--primary-gold);">${a} Lawyer Request(s) Pending!</span>
              <span style="font-size: 0.75rem; text-decoration: underline; color: var(--primary-gold);">Review Bids &rarr;</span>
            </div>
          `:""}

          <div class="case-card-footer">
            <button class="btn-outline-amber view-case-detail-btn" data-case-id="${e.id}" style="width: 100%; justify-content: center;">
              ${l("eye",16)} View Details & Lawyer Bids
            </button>
          </div>
        </div>
      </div>
    `}).join("")}function we(o){o.querySelectorAll(".view-case-detail-btn").forEach(e=>{e.addEventListener("click",a=>{a.stopPropagation();const s=e.getAttribute("data-case-id");Ke(s)})})}function ke(){const o=`
    <div class="modal-overlay active" id="new-case-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <h3 class="brand-font" style="font-size: 1.4rem; color: var(--primary-gold);">Register New Legal Case</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Provide detailed information about the incident to receive advocate proposals</p>
          </div>
          <button class="modal-close" id="close-new-case-modal">${l("x",20)}</button>
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
                ${se.map(n=>`<option value="${n}">${n}</option>`).join("")}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Urgency Level</label>
              <select class="form-select" id="case-urgency" required>
                ${ze.map(n=>`<option value="${n}">${n}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Date of Incident</label>
              <input type="date" class="form-input" id="case-date" required value="${new Date().toISOString().split("T")[0]}">
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
            ${l("send",18)} Submit Legal Case Registration
          </button>
        </form>
      </div>
    </div>
  `;let e=document.getElementById("new-case-modal");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",o);const a=document.getElementById("new-case-modal"),s=document.getElementById("close-new-case-modal"),r=document.getElementById("new-case-form");s.addEventListener("click",()=>a.remove()),r.addEventListener("submit",n=>{n.preventDefault();const c={title:document.getElementById("case-title").value,category:document.getElementById("case-category").value,urgency:document.getElementById("case-urgency").value,incidentDate:document.getElementById("case-date").value,location:document.getElementById("case-location").value,description:document.getElementById("case-description").value},d=$.addCase(c);D(`Case ${d.id} registered successfully! Lawyers will be notified.`,"success","Case Submitted"),a.remove()})}function Ke(o){const e=$.getCaseById(o);if(!e)return;const a=e.requests||[];a.filter(d=>d.status==="pending"),a.find(d=>d.status==="approved");const s=[{key:"Registered",label:"1. Case Registered",completed:!0},{key:"Lawyer Requested",label:"2. Lawyer Bids",completed:e.status!=="Pending Lawyer"},{key:"Lawyer Assigned",label:"3. Lawyer Approved",completed:["Lawyer Assigned","Hearing Scheduled","Verdict Rendered"].includes(e.status)},{key:"Hearing Scheduled",label:"4. Court Hearing",completed:["Hearing Scheduled","Verdict Rendered"].includes(e.status)},{key:"Verdict Rendered",label:"5. Final Verdict",completed:e.status==="Verdict Rendered"}],r=`
    <div class="modal-overlay active" id="case-detail-modal">
      <div class="modal-content" style="max-width: 800px;">
        <div class="modal-header">
          <div>
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
              <span class="case-number" style="font-size: 0.9rem;">${e.id}</span>
              ${G(e.urgency)}
              ${Z(e.status)}
            </div>
            <h3 class="brand-font" style="font-size: 1.3rem;">${e.title}</h3>
          </div>
          <button class="modal-close" id="close-detail-modal">${l("x",20)}</button>
        </div>

        <!-- Case Timeline Visualizer -->
        <div class="timeline">
          ${s.map((d,u)=>{const v=e.status===d.key||d.key==="Registered"&&e.status==="Pending Lawyer";return`
              <div class="timeline-step ${d.completed?"completed":""} ${v?"active":""}">
                <div class="step-circle">${d.completed?l("check",16):u+1}</div>
                <span class="step-label">${d.label}</span>
              </div>
            `}).join("")}
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; margin-bottom: 8px; color: var(--primary-gold);">Incident Summary & Description</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${e.description}</p>
          <div style="display: flex; gap: 20px; font-size: 0.8rem; color: var(--text-dim); margin-top: 12px; flex-wrap: wrap;">
            <div><strong>Category:</strong> ${e.category}</div>
            <div><strong>Incident Date:</strong> ${z(e.incidentDate)}</div>
            <div><strong>Location:</strong> ${e.location}</div>
          </div>
        </div>

        <!-- Lawyer Requests / Representation Bids Section -->
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4 class="brand-font" style="font-size: 1.1rem; color: var(--text-main);">
              Lawyer Representation Requests (${a.length})
            </h4>
            ${e.assignedLawyerName?'<span style="color: var(--accent-emerald); font-weight: 700; font-size: 0.85rem;">✓ Representation Confirmed</span>':""}
          </div>

          ${a.length===0?`
            <div style="padding: 20px; text-align: center; border: 1px dashed var(--border-light); border-radius: var(--radius-md); color: var(--text-muted); font-size: 0.875rem;">
              No lawyers have requested this case yet. You will receive notifications when advocates submit representation proposals!
            </div>
          `:`
            <div>
              ${a.map(d=>`
                <div class="bid-card" style="${d.status==="approved"?"border-color: var(--accent-emerald); background: rgba(16, 185, 129, 0.08);":""}">
                  <div class="bid-card-header">
                    <div class="bid-lawyer-info">
                      <div class="avatar-circle avatar-lawyer">${d.lawyerName.charAt(0)}</div>
                      <div>
                        <div style="font-weight: 700; color: var(--text-main); font-size: 0.95rem;">${d.lawyerName}</div>
                        <div style="font-size: 0.78rem; color: var(--text-muted);">${d.barId} &bull; Exp: ${d.experience}</div>
                      </div>
                    </div>
                    <div class="bid-fee">${d.proposedFee}</div>
                  </div>

                  <div class="bid-note">
                    <strong>Proposed Legal Strategy:</strong> ${d.strategyNote}
                  </div>

                  <div style="display: flex; justify-content: flex-end; gap: 8px; margin-top: 4px;">
                    ${d.status==="approved"?`
                      <span class="btn-success" style="cursor: default; padding: 6px 12px; font-size: 0.8rem;">
                        ${l("check",14)} Approved Advocate
                      </span>
                    `:d.status==="declined"?`
                      <span style="color: var(--text-dim); font-size: 0.8rem; align-self: center;">Declined</span>
                    `:`
                      <button class="btn-primary approve-lawyer-btn" data-request-id="${d.id}" data-case-id="${e.id}" style="padding: 6px 14px; font-size: 0.8rem;">
                        ${l("check",14)} Approve & Assign Lawyer
                      </button>
                    `}
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>

        <!-- Hearing Information if Scheduled -->
        ${e.hearing?`
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 24px;">
            <h4 style="color: #C084FC; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${l("calendar",18)} Court Hearing Scheduled
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.875rem;">
              <div><strong>Date & Time:</strong> ${z(e.hearing.date)} at ${e.hearing.time}</div>
              <div><strong>Courtroom:</strong> ${e.hearing.courtroom}</div>
              <div><strong>Presiding Judge:</strong> ${e.hearing.judgeName}</div>
              <div><strong>Court Orders:</strong> ${e.hearing.notes||"None"}</div>
            </div>
          </div>
        `:""}

        <!-- Final Verdict Information if Delivered -->
        ${e.verdict?`
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 16px;">
            <h4 style="color: #34D399; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
              ${l("gavel",18)} Official Court Verdict & Judgment
            </h4>
            <div style="font-size: 0.9rem; margin-bottom: 6px;"><strong>Ruling:</strong> ${e.verdict.ruling}</div>
            <div style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.5;">${e.verdict.summary}</div>
            <div style="font-size: 0.78rem; color: var(--text-dim); margin-top: 8px;">Delivered by ${e.verdict.judgeName} on ${z(e.verdict.date)}</div>
          </div>
        `:""}

      </div>
    </div>
  `;let n=document.getElementById("case-detail-modal");n&&n.remove(),document.body.insertAdjacentHTML("beforeend",r);const c=document.getElementById("case-detail-modal");document.getElementById("close-detail-modal").addEventListener("click",()=>c.remove()),c.querySelectorAll(".approve-lawyer-btn").forEach(d=>{d.addEventListener("click",()=>{const u=d.getAttribute("data-request-id"),v=d.getAttribute("data-case-id"),b=$.approveLawyerRequest(v,u);D(`Advocate ${b.assignedLawyerName} approved to handle Case ${b.id}`,"success","Lawyer Approved"),c.remove()})})}function Qe(o){const e=$.getCurrentUser(),a=$.getCases(),s=a.filter(u=>u.status==="Pending Lawyer"||u.status==="Lawyer Requested"),r=a.filter(u=>u.requests&&u.requests.some(v=>v.lawyerId===e.id)),n=a.filter(u=>u.assignedLawyerId===e.id);let c="marketplace";function d(){const u=c==="marketplace"?s:r;o.innerHTML=`
      <!-- Top Lawyer Profile & Credentials Banner -->
      <div class="glass-card" style="margin-bottom: 24px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <div class="lawyer-avatar-lg" style="width: 58px; height: 58px; font-size: 1.5rem; overflow: hidden;">
            ${e.profilePic?`<img src="${e.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">`:e.name.charAt(0)}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
              <h2 class="brand-font" style="font-size: 1.3rem; margin: 0;">${e.name}</h2>
              <span class="location-pill">${l("mapPin",12)} ${e.location||"New Delhi, Delhi"}</span>
              <span class="aadhaar-badge verified"><span class="badge-dot"></span>✓ Aadhaar Verified</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; display: flex; gap: 14px; flex-wrap: wrap;">
              <span><strong>Bar Reg ID:</strong> ${e.barId||"BAR-NY-89421"}</span>
              <span><strong>Experience:</strong> ${e.experience||"12 Years"}</span>
              <span><strong>Cases Handled:</strong> ${e.casesHandled||140}+</span>
              <span><strong>Specialization:</strong> ${e.specialization||"Corporate & Civil Law"}</span>
            </div>
          </div>
        </div>

        <button class="btn-outline-amber" id="btn-edit-lawyer-profile">
          ${l("edit",16)} Edit Profile & Credentials
        </button>
      </div>

      <!-- Top Lawyer Stats Header -->
      <div class="stats-grid">
        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-gold">${l("scale",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${s.length}</span>
            <span class="stat-label">Open Marketplace Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-blue">${l("send",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${r.length}</span>
            <span class="stat-label">Proposals / Invitations</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-emerald">${l("award",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${n.length}</span>
            <span class="stat-label">My Approved Cases</span>
          </div>
        </div>

        <div class="glass-card stat-card">
          <div class="stat-icon-wrapper stat-indigo">${l("briefcase",22)}</div>
          <div class="stat-info">
            <span class="stat-value">${e.casesHandled||140}+ Cases</span>
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
        <button class="tab-btn ${c==="marketplace"?"active":""}" id="tab-marketplace">
          ${l("scale",16)} Open Cases Marketplace (${s.length})
        </button>
        <button class="tab-btn ${c==="my-cases"?"active":""}" id="tab-my-cases">
          ${l("award",16)} My Submitted Proposals & Active Cases (${r.length})
        </button>
      </div>

      <!-- Controls Bar -->
      <div class="controls-bar">
        <div class="search-box">
          <span class="search-icon">${l("search",16)}</span>
          <input type="text" class="search-input" id="lawyer-search" placeholder="Search cases by title, client, or category...">
        </div>

        <div class="filter-group">
          <select class="filter-select" id="lawyer-filter-category">
            <option value="ALL">All Categories</option>
            ${se.map(B=>`<option value="${B}">${B}</option>`).join("")}
          </select>
        </div>
      </div>

      <!-- Cases Grid -->
      <div class="cases-grid" id="lawyer-cases-list">
        ${xe(u,e)}
      </div>
    `;const v=document.getElementById("btn-edit-lawyer-profile");v&&v.addEventListener("click",()=>{Ve()}),document.getElementById("tab-marketplace").addEventListener("click",()=>{c="marketplace",d()}),document.getElementById("tab-my-cases").addEventListener("click",()=>{c="my-cases",d()});const b=document.getElementById("lawyer-search"),h=document.getElementById("lawyer-filter-category"),L=()=>{const B=b.value.toLowerCase(),q=h.value,I=(c==="marketplace"?s:r).filter(R=>{const H=R.title.toLowerCase().includes(B)||R.id.toLowerCase().includes(B)||R.clientName.toLowerCase().includes(B)||R.description.toLowerCase().includes(B),_=q==="ALL"||R.category===q;return H&&_});document.getElementById("lawyer-cases-list").innerHTML=xe(I,e),$e(o)};b.addEventListener("input",L),h.addEventListener("change",L),$e(o)}d()}function xe(o,e){return o.length===0?`
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${l("scale",48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Cases Available</h3>
        <p>There are no open cases matching your search criteria at this moment.</p>
      </div>
    `:o.map(a=>{const s=a.requests?a.requests.find(n=>n.lawyerId===e.id):null,r=a.assignedLawyerId===e.id;return`
      <div class="glass-card glass-card-hover case-card">
        <div>
          <div class="case-card-header">
            <span class="case-number">${a.id}</span>
            <div style="display: flex; gap: 6px; align-items: center;">
              ${G(a.urgency)}
              ${Z(a.status)}
            </div>
          </div>

          <h3 class="case-title">${a.title}</h3>
          <p class="case-description">${a.description}</p>
        </div>

        <div>
          <div class="case-meta">
            <div class="meta-item">${l("user",14)} <span>Client: ${a.clientName}</span></div>
            <div class="meta-item">${l("mapPin",14)} <span>${a.location}</span></div>
            <div class="meta-item">${l("scale",14)} <span class="category-pill">${a.category}</span></div>
          </div>

          ${r?`
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #34D399; padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-weight: 700; font-size: 0.85rem; text-align: center;">
              ${l("check",14)} You are the Approved Advocate for this case
            </div>
          `:s?`
            <div style="background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); color: #60A5FA; padding: 8px 12px; border-radius: var(--radius-sm); margin-top: 12px; font-size: 0.85rem;">
              <strong>Your Proposal:</strong> ${s.proposedFee} (${s.status.toUpperCase()})
            </div>
          `:""}

          <div class="case-card-footer" style="gap: 8px;">
            ${!r&&!s&&a.status!=="Verdict Rendered"?`
              <button class="btn-primary request-case-btn" data-case-id="${a.id}" style="flex: 1; justify-content: center; font-size: 0.85rem;">
                ${l("send",14)} Request Case
              </button>
            `:""}

            <button class="btn-secondary view-lawyer-case-btn" data-case-id="${a.id}" style="flex: 1; justify-content: center; font-size: 0.85rem;">
              ${l("eye",14)} Full Details
            </button>
          </div>
        </div>
      </div>
    `}).join("")}function $e(o){o.querySelectorAll(".request-case-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-case-id");Xe(a)})}),o.querySelectorAll(".view-lawyer-case-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-case-id");et(a)})})}function Xe(o){const e=$.getCaseById(o),a=$.getCurrentUser(),s=`
    <div class="modal-overlay active" id="lawyer-request-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <div style="font-size: 0.8rem; color: var(--primary-gold); font-weight: 700;">CASE ${e.id}</div>
            <h3 class="brand-font" style="font-size: 1.3rem;">Request to Represent Client</h3>
          </div>
          <button class="modal-close" id="close-request-modal">${l("x",20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; border-left: 3px solid var(--primary-gold);">
          <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-main); margin-bottom: 4px;">${e.title}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Client: ${e.clientName} &bull; Category: ${e.category}</div>
        </div>

        <form id="lawyer-request-form">
          <div class="form-group">
            <label class="form-label">Advocate Bar Credentials</label>
            <div style="font-size: 0.85rem; color: var(--text-muted); padding: 10px; background: rgba(255,255,255,0.04); border-radius: var(--radius-md);">
              ${a.name} (${a.barId||"BAR-NY-VERIFIED"}) &bull; Exp: ${a.experience||"10 Years"}
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
            ${l("send",18)} Submit Formal Representation Proposal
          </button>
        </form>
      </div>
    </div>
  `;let r=document.getElementById("lawyer-request-modal");r&&r.remove(),document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("lawyer-request-modal");document.getElementById("close-request-modal").addEventListener("click",()=>n.remove()),document.getElementById("lawyer-request-form").addEventListener("submit",c=>{c.preventDefault();const d=document.getElementById("req-fee").value,u=document.getElementById("req-note").value;$.addLawyerRequest(e.id,{proposedFee:d,strategyNote:u}),D(`Representation request sent to Client ${e.clientName}!`,"success","Proposal Sent"),n.remove()})}function et(o){const e=$.getCaseById(o),a=`
    <div class="modal-overlay active" id="lawyer-detail-modal">
      <div class="modal-content" style="max-width: 750px;">
        <div class="modal-header">
          <div>
            <span class="case-number">${e.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">${e.title}</h3>
          </div>
          <button class="modal-close" id="close-lawyer-detail">${l("x",20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border-light);">
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            ${G(e.urgency)}
            ${Z(e.status)}
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${e.description}</p>
          <div style="margin-top: 12px; font-size: 0.8rem; color: var(--text-dim);">
            <strong>Client Name:</strong> ${e.clientName} | <strong>Incident Location:</strong> ${e.location} | <strong>Date:</strong> ${z(e.incidentDate)}
          </div>
        </div>

        ${e.hearing?`
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
            <h4 style="color: #C084FC; font-weight: 700; margin-bottom: 8px;">Court Hearing Notice</h4>
            <div>Scheduled for <strong>${z(e.hearing.date)} at ${e.hearing.time}</strong> in ${e.hearing.courtroom}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Presiding: ${e.hearing.judgeName}</div>
          </div>
        `:""}

        ${e.verdict?`
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 16px;">
            <h4 style="color: #34D399; font-weight: 700; margin-bottom: 6px;">Case Judgment Rendered</h4>
            <div><strong>Ruling:</strong> ${e.verdict.ruling}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${e.verdict.summary}</div>
          </div>
        `:""}
      </div>
    </div>
  `;let s=document.getElementById("lawyer-detail-modal");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",a);const r=document.getElementById("lawyer-detail-modal");document.getElementById("close-lawyer-detail").addEventListener("click",()=>r.remove())}var pe={};(function o(e,a,s,r){var n=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=function(){if(!e.OffscreenCanvas)return!1;try{var i=new OffscreenCanvas(1,1),t=i.getContext("2d");t.fillRect(0,0,1,1);var p=i.transferToImageBitmap();t.createPattern(p,"no-repeat")}catch{return!1}return!0}();function u(){}function v(i){var t=a.exports.Promise,p=t!==void 0?t:e.Promise;return typeof p=="function"?new p(i):(i(u,u),null)}var b=function(i,t){return{transform:function(p){if(i)return p;if(t.has(p))return t.get(p);var g=new OffscreenCanvas(p.width,p.height),y=g.getContext("2d");return y.drawImage(p,0,0),t.set(p,g),g},clear:function(){t.clear()}}}(d,new Map),h=function(){var i=Math.floor(16.666666666666668),t,p,g={},y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(f){var w=Math.random();return g[w]=requestAnimationFrame(function m(x){y===x||y+i-1<x?(y=x,delete g[w],f()):g[w]=requestAnimationFrame(m)}),w},p=function(f){g[f]&&cancelAnimationFrame(g[f])}):(t=function(f){return setTimeout(f,i)},p=function(f){return clearTimeout(f)}),{frame:t,cancel:p}}(),L=function(){var i,t,p={};function g(y){function f(w,m){y.postMessage({options:w||{},callback:m})}y.init=function(m){var x=m.transferControlToOffscreen();y.postMessage({canvas:x},[x])},y.fire=function(m,x,E){if(t)return f(m,null),t;var M=Math.random().toString(36).slice(2);return t=v(function(A){function S(T){T.data.callback===M&&(delete p[M],y.removeEventListener("message",S),t=null,b.clear(),E(),A())}y.addEventListener("message",S),f(m,M),p[M]=S.bind(null,{data:{callback:M}})}),t},y.reset=function(){y.postMessage({reset:!0});for(var m in p)p[m](),delete p[m]}}return function(){if(i)return i;if(!s&&n){var y=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{i=new Worker(URL.createObjectURL(new Blob([y])))}catch(f){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",f),null}g(i)}return i}}(),B={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function q(i,t){return t?t(i):i}function k(i){return i!=null}function I(i,t,p){return q(i&&k(i[t])?i[t]:B[t],p)}function R(i){return i<0?0:Math.floor(i)}function H(i,t){return Math.floor(Math.random()*(t-i))+i}function _(i){return parseInt(i,16)}function ne(i){return i.map(ee)}function ee(i){var t=String(i).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:_(t.substring(0,2)),g:_(t.substring(2,4)),b:_(t.substring(4,6))}}function oe(i){var t=I(i,"origin",Object);return t.x=I(t,"x",Number),t.y=I(t,"y",Number),t}function le(i){i.width=document.documentElement.clientWidth,i.height=document.documentElement.clientHeight}function j(i){var t=i.getBoundingClientRect();i.width=t.width,i.height=t.height}function P(i){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=i,t}function J(i,t,p,g,y,f,w,m,x){i.save(),i.translate(t,p),i.rotate(f),i.scale(g,y),i.arc(0,0,1,w,m,x),i.restore()}function K(i){var t=i.angle*(Math.PI/180),p=i.spread*(Math.PI/180);return{x:i.x,y:i.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:i.startVelocity*.5+Math.random()*i.startVelocity,angle2D:-t+(.5*p-Math.random()*p),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:i.color,shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,drift:i.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:i.gravity*3,ovalScalar:.6,scalar:i.scalar,flat:i.flat}}function de(i,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var p=t.tick++/t.totalTicks,g=t.x+t.random*t.tiltCos,y=t.y+t.random*t.tiltSin,f=t.wobbleX+t.random*t.tiltCos,w=t.wobbleY+t.random*t.tiltSin;if(i.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-p)+")",i.beginPath(),c&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))i.fill(Me(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(f-g)*.1,Math.abs(w-y)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var m=Math.PI/10*t.wobble,x=Math.abs(f-g)*.1,E=Math.abs(w-y)*.1,M=t.shape.bitmap.width*t.scalar,A=t.shape.bitmap.height*t.scalar,S=new DOMMatrix([Math.cos(m)*x,Math.sin(m)*x,-Math.sin(m)*E,Math.cos(m)*E,t.x,t.y]);S.multiplySelf(new DOMMatrix(t.shape.matrix));var T=i.createPattern(b.transform(t.shape.bitmap),"no-repeat");T.setTransform(S),i.globalAlpha=1-p,i.fillStyle=T,i.fillRect(t.x-M/2,t.y-A/2,M,A),i.globalAlpha=1}else if(t.shape==="circle")i.ellipse?i.ellipse(t.x,t.y,Math.abs(f-g)*t.ovalScalar,Math.abs(w-y)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):J(i,t.x,t.y,Math.abs(f-g)*t.ovalScalar,Math.abs(w-y)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var C=Math.PI/2*3,N=4*t.scalar,F=8*t.scalar,O=t.x,V=t.y,Y=5,U=Math.PI/Y;Y--;)O=t.x+Math.cos(C)*F,V=t.y+Math.sin(C)*F,i.lineTo(O,V),C+=U,O=t.x+Math.cos(C)*N,V=t.y+Math.sin(C)*N,i.lineTo(O,V),C+=U;else i.moveTo(Math.floor(t.x),Math.floor(t.y)),i.lineTo(Math.floor(t.wobbleX),Math.floor(y)),i.lineTo(Math.floor(f),Math.floor(w)),i.lineTo(Math.floor(g),Math.floor(t.wobbleY));return i.closePath(),i.fill(),t.tick<t.totalTicks}function ce(i,t,p,g,y){var f=t.slice(),w=i.getContext("2d"),m,x,E=v(function(M){function A(){m=x=null,w.clearRect(0,0,g.width,g.height),b.clear(),y(),M()}function S(){s&&!(g.width===r.width&&g.height===r.height)&&(g.width=i.width=r.width,g.height=i.height=r.height),!g.width&&!g.height&&(p(i),g.width=i.width,g.height=i.height),w.clearRect(0,0,g.width,g.height),f=f.filter(function(T){return de(w,T)}),f.length?m=h.frame(S):A()}m=h.frame(S),x=A});return{addFettis:function(M){return f=f.concat(M),E},canvas:i,promise:E,reset:function(){m&&h.cancel(m),x&&x()}}}function te(i,t){var p=!i,g=!!I(t||{},"resize"),y=!1,f=I(t,"disableForReducedMotion",Boolean),w=n&&!!I(t||{},"useWorker"),m=w?L():null,x=p?le:j,E=i&&m?!!i.__confetti_initialized:!1,M=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,A;function S(C,N,F){for(var O=I(C,"particleCount",R),V=I(C,"angle",Number),Y=I(C,"spread",Number),U=I(C,"startVelocity",Number),je=I(C,"decay",Number),Pe=I(C,"gravity",Number),Te=I(C,"drift",Number),me=I(C,"colors",ne),De=I(C,"ticks",Number),ge=I(C,"shapes"),Ne=I(C,"scalar"),qe=!!I(C,"flat"),ve=oe(C),he=O,ue=[],He=i.width*ve.x,Fe=i.height*ve.y;he--;)ue.push(K({x:He,y:Fe,angle:V,spread:Y,startVelocity:U,color:me[he%me.length],shape:ge[H(0,ge.length)],ticks:De,decay:je,gravity:Pe,drift:Te,scalar:Ne,flat:qe}));return A?A.addFettis(ue):(A=ce(i,ue,x,N,F),A.promise)}function T(C){var N=f||I(C,"disableForReducedMotion",Boolean),F=I(C,"zIndex",Number);if(N&&M)return v(function(U){U()});p&&A?i=A.canvas:p&&!i&&(i=P(F),document.body.appendChild(i)),g&&!E&&x(i);var O={width:i.width,height:i.height};m&&!E&&m.init(i),E=!0,m&&(i.__confetti_initialized=!0);function V(){if(m){var U={getBoundingClientRect:function(){if(!p)return i.getBoundingClientRect()}};x(U),m.postMessage({resize:{width:U.width,height:U.height}});return}O.width=O.height=null}function Y(){A=null,g&&(y=!1,e.removeEventListener("resize",V)),p&&i&&(document.body.contains(i)&&document.body.removeChild(i),i=null,E=!1)}return g&&!y&&(y=!0,e.addEventListener("resize",V,!1)),m?m.fire(C,O,Y):S(C,O,Y)}return T.reset=function(){m&&m.reset(),A&&A.reset()},T}var Q;function ae(){return Q||(Q=te(null,{useWorker:!0,resize:!0})),Q}function Me(i,t,p,g,y,f,w){var m=new Path2D(i),x=new Path2D;x.addPath(m,new DOMMatrix(t));var E=new Path2D;return E.addPath(x,new DOMMatrix([Math.cos(w)*y,Math.sin(w)*y,-Math.sin(w)*f,Math.cos(w)*f,p,g])),E}function Se(i){if(!c)throw new Error("path confetti are not supported in this browser");var t,p;typeof i=="string"?t=i:(t=i.path,p=i.matrix);var g=new Path2D(t),y=document.createElement("canvas"),f=y.getContext("2d");if(!p){for(var w=1e3,m=w,x=w,E=0,M=0,A,S,T=0;T<w;T+=2)for(var C=0;C<w;C+=2)f.isPointInPath(g,T,C,"nonzero")&&(m=Math.min(m,T),x=Math.min(x,C),E=Math.max(E,T),M=Math.max(M,C));A=E-m,S=M-x;var N=10,F=Math.min(N/A,N/S);p=[F,0,0,F,-Math.round(A/2+m)*F,-Math.round(S/2+x)*F]}return{type:"path",path:t,matrix:p}}function Re(i){var t,p=1,g="#000000",y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof i=="string"?t=i:(t=i.text,p="scalar"in i?i.scalar:p,y="fontFamily"in i?i.fontFamily:y,g="color"in i?i.color:g);var f=10*p,w=""+f+"px "+y,m=new OffscreenCanvas(f,f),x=m.getContext("2d");x.font=w;var E=x.measureText(t),M=Math.ceil(E.actualBoundingBoxRight+E.actualBoundingBoxLeft),A=Math.ceil(E.actualBoundingBoxAscent+E.actualBoundingBoxDescent),S=2,T=E.actualBoundingBoxLeft+S,C=E.actualBoundingBoxAscent+S;M+=S+S,A+=S+S,m=new OffscreenCanvas(M,A),x=m.getContext("2d"),x.font=w,x.fillStyle=g,x.fillText(t,T,C);var N=1/p;return{type:"bitmap",bitmap:m.transferToImageBitmap(),matrix:[N,0,0,N,-M*N/2,-A*N/2]}}a.exports=function(){return ae().apply(this,arguments)},a.exports.reset=function(){ae().reset()},a.exports.create=te,a.exports.shapeFromPath=Se,a.exports.shapeFromText=Re})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),pe,!1);const tt=pe.exports;pe.exports.create;function at(o){const e=$.getCurrentUser(),a=$.getCases(),s=a.length,r=a.filter(h=>h.status==="Lawyer Assigned"),n=a.filter(h=>h.status==="Hearing Scheduled"),c=a.filter(h=>h.status==="Verdict Rendered");o.innerHTML=`
    <!-- Top Judge Bench Stats Header -->
    <div class="stats-grid">
      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-gold">${l("gavel",22)}</div>
        <div class="stat-info">
          <span class="stat-value">${s}</span>
          <span class="stat-label">Judicial Docket Total</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-blue">${l("clock",22)}</div>
        <div class="stat-info">
          <span class="stat-value">${r.length}</span>
          <span class="stat-label">Awaiting Hearing Schedule</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-indigo">${l("calendar",22)}</div>
        <div class="stat-info">
          <span class="stat-value">${n.length}</span>
          <span class="stat-label">Active Court Hearings</span>
        </div>
      </div>

      <div class="glass-card stat-card">
        <div class="stat-icon-wrapper stat-emerald">${l("check",22)}</div>
        <div class="stat-info">
          <span class="stat-value">${c.length}</span>
          <span class="stat-label">Verdicts & Decrees Issued</span>
        </div>
      </div>
    </div>

    <!-- Top Judge Bench Profile Banner -->
    <div class="glass-card" style="margin-bottom: 24px; padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 16px;">
        <div class="avatar-circle avatar-judge" style="width: 58px; height: 58px; font-size: 1.5rem; overflow: hidden;">
          ${e.profilePic?`<img src="${e.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">`:e.name.charAt(0)}
        </div>
        <div>
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <h2 class="brand-font" style="font-size: 1.3rem; margin: 0;">${e.name}</h2>
            <span class="location-pill">${l("mapPin",12)} ${e.location||"New Delhi, Delhi"}</span>
            <span class="aadhaar-badge verified"><span class="badge-dot"></span>✓ Aadhaar Verified</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 4px; display: flex; gap: 14px; flex-wrap: wrap;">
            <span><strong>Designation:</strong> ${e.designation||"High Court Justice"}</span>
            <span><strong>Court Bench:</strong> ${e.courtName||"High Court Bench 4"}</span>
            <span><strong>Service Experience:</strong> ${e.experience||"18 Years"}</span>
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
        <span class="search-icon">${l("search",16)}</span>
        <input type="text" class="search-input" id="judge-search" placeholder="Search court dockets by case title, client, lawyer, or ID...">
      </div>

      <div class="filter-group">
        <select class="filter-select" id="judge-filter-category">
          <option value="ALL">All Categories</option>
          ${se.map(h=>`<option value="${h}">${h}</option>`).join("")}
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
      ${Ce(a)}
    </div>
  `;const d=document.getElementById("judge-search"),u=document.getElementById("judge-filter-category"),v=document.getElementById("judge-filter-status"),b=()=>{const h=d.value.toLowerCase(),L=u.value,B=v.value,q=a.filter(k=>{const I=k.title.toLowerCase().includes(h)||k.id.toLowerCase().includes(h)||k.clientName.toLowerCase().includes(h)||k.assignedLawyerName&&k.assignedLawyerName.toLowerCase().includes(h),R=L==="ALL"||k.category===L,H=B==="ALL"||k.status===B;return I&&R&&H});document.getElementById("judge-cases-list").innerHTML=Ce(q),Le(o)};d.addEventListener("input",b),u.addEventListener("change",b),v.addEventListener("change",b),Le(o)}function Ce(o){return o.length===0?`
      <div class="glass-card empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">${l("gavel",48)}</div>
        <h3 class="brand-font" style="margin-bottom: 8px;">No Docket Cases Found</h3>
        <p>No court cases match the current filter selection.</p>
      </div>
    `:o.map(e=>`
      <div class="glass-card glass-card-hover case-card">
        <div>
          <div class="case-card-header">
            <span class="case-number">${e.id}</span>
            <div style="display: flex; gap: 6px; align-items: center;">
              ${G(e.urgency)}
              ${Z(e.status)}
            </div>
          </div>

          <h3 class="case-title">${e.title}</h3>
          <p class="case-description">${e.description}</p>
        </div>

        <div>
          <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 14px; font-size: 0.85rem; display: flex; flex-direction: column; gap: 6px;">
            <div><strong>Client:</strong> ${e.clientName}</div>
            <div><strong>Assigned Lawyer:</strong> ${e.assignedLawyerName?`<span style="color: #818CF8; font-weight: 700;">${e.assignedLawyerName}</span>`:'<span style="color: var(--text-dim);">Not Assigned Yet</span>'}</div>
            ${e.hearing?`
              <div style="color: #C084FC; font-weight: 600; margin-top: 4px; display: flex; align-items: center; gap: 6px;">
                ${l("calendar",14)} Hearing: ${z(e.hearing.date)} @ ${e.hearing.time} (${e.hearing.courtroom})
              </div>
            `:""}
          </div>

          <div class="case-card-footer" style="flex-wrap: wrap; gap: 8px;">
            ${e.status==="Lawyer Assigned"||e.status==="Hearing Scheduled"?`
              <button class="btn-outline-amber schedule-hearing-btn" data-case-id="${e.id}" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                ${l("calendar",14)} Schedule Hearing
              </button>
            `:""}

            ${e.status==="Hearing Scheduled"||e.status==="Lawyer Assigned"?`
              <button class="btn-primary issue-verdict-btn" data-case-id="${e.id}" style="flex: 1; justify-content: center; font-size: 0.8rem;">
                ${l("gavel",14)} Issue Verdict
              </button>
            `:""}

            <button class="btn-secondary view-judge-case-btn" data-case-id="${e.id}" style="padding: 8px 12px; font-size: 0.8rem;">
              ${l("eye",14)} Record
            </button>
          </div>
        </div>
      </div>
    `).join("")}function Le(o){o.querySelectorAll(".schedule-hearing-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-case-id");it(a)})}),o.querySelectorAll(".issue-verdict-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-case-id");rt(a)})}),o.querySelectorAll(".view-judge-case-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-case-id");st(a)})})}function it(o){const e=$.getCaseById(o),a=`
    <div class="modal-overlay active" id="schedule-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span class="case-number">${e.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">Schedule Court Hearing</h3>
          </div>
          <button class="modal-close" id="close-schedule-modal">${l("x",20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
          <div style="font-weight: 700; color: var(--text-main);">${e.title}</div>
          <div style="color: var(--text-muted); margin-top: 4px;">Client: ${e.clientName} &bull; Advocate: ${e.assignedLawyerName||"N/A"}</div>
        </div>

        <form id="schedule-hearing-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Hearing Date</label>
              <input type="date" class="form-input" id="hearing-date" required value="${new Date(Date.now()+864e5*7).toISOString().split("T")[0]}">
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
            ${l("calendar",18)} Set Court Hearing Schedule
          </button>
        </form>
      </div>
    </div>
  `;let s=document.getElementById("schedule-modal");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",a);const r=document.getElementById("schedule-modal");document.getElementById("close-schedule-modal").addEventListener("click",()=>r.remove()),document.getElementById("schedule-hearing-form").addEventListener("submit",n=>{n.preventDefault();const c={date:document.getElementById("hearing-date").value,time:document.getElementById("hearing-time").value,courtroom:document.getElementById("hearing-courtroom").value,notes:document.getElementById("hearing-notes").value};$.scheduleHearing(e.id,c),D(`Hearing for Case ${e.id} scheduled on ${z(c.date)} in ${c.courtroom}`,"success","Hearing Scheduled"),r.remove()})}function rt(o){const e=$.getCaseById(o),a=`
    <div class="modal-overlay active" id="verdict-modal">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <span class="case-number">${e.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem; color: var(--primary-gold);">Issue Judicial Order & Verdict</h3>
          </div>
          <button class="modal-close" id="close-verdict-modal">${l("x",20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.5); padding: 12px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
          <div style="font-weight: 700; color: var(--text-main);">${e.title}</div>
          <div style="color: var(--text-muted); margin-top: 4px;">Client: ${e.clientName} &bull; Advocate: ${e.assignedLawyerName||"N/A"}</div>
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
            ${l("gavel",18)} Render Final Verdict & Close Case
          </button>
        </form>
      </div>
    </div>
  `;let s=document.getElementById("verdict-modal");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",a);const r=document.getElementById("verdict-modal");document.getElementById("close-verdict-modal").addEventListener("click",()=>r.remove()),document.getElementById("issue-verdict-form").addEventListener("submit",n=>{n.preventDefault();const c={ruling:document.getElementById("verdict-ruling").value,summary:document.getElementById("verdict-summary").value};$.issueVerdict(e.id,c),tt({particleCount:100,spread:70,origin:{y:.6}}),D(`Official verdict issued for Case ${e.id}: ${c.ruling}`,"success","Verdict Rendered"),r.remove()})}function st(o){const e=$.getCaseById(o),a=`
    <div class="modal-overlay active" id="judge-record-modal">
      <div class="modal-content" style="max-width: 800px;">
        <div class="modal-header">
          <div>
            <span class="case-number">${e.id}</span>
            <h3 class="brand-font" style="font-size: 1.3rem;">Judicial Case Master Record</h3>
          </div>
          <button class="modal-close" id="close-judge-record">${l("x",20)}</button>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 20px;">
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            ${G(e.urgency)}
            ${Z(e.status)}
          </div>
          <h4 style="color: var(--primary-gold); margin-bottom: 8px;">${e.title}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">${e.description}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85rem; margin-top: 14px; color: var(--text-main);">
            <div><strong>Client Name:</strong> ${e.clientName}</div>
            <div><strong>Assigned Lawyer:</strong> ${e.assignedLawyerName||"None"}</div>
            <div><strong>Incident Location:</strong> ${e.location}</div>
            <div><strong>Incident Date:</strong> ${z(e.incidentDate)}</div>
          </div>
        </div>

        ${e.requests&&e.requests.length>0?`
          <div style="margin-bottom: 20px;">
            <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 10px;">Submitted Advocate Bids (${e.requests.length})</h4>
            ${e.requests.map(n=>`
              <div style="background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: var(--radius-sm); border-left: 3px solid ${n.status==="approved"?"#10B981":"#64748B"}; margin-bottom: 8px; font-size: 0.85rem;">
                <div style="display: flex; justify-content: space-between;">
                  <strong>${n.lawyerName} (${n.barId})</strong>
                  <span style="color: var(--primary-gold); font-weight: 700;">${n.proposedFee}</span>
                </div>
                <div style="color: var(--text-muted); margin-top: 4px;">Strategy: ${n.strategyNote}</div>
              </div>
            `).join("")}
          </div>
        `:""}

        ${e.hearing?`
          <div style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.3); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.875rem;">
            <h4 style="color: #C084FC; margin-bottom: 4px;">Scheduled Hearing</h4>
            <div>${z(e.hearing.date)} at ${e.hearing.time} in ${e.hearing.courtroom}</div>
            <div style="color: var(--text-muted); margin-top: 4px;">Directive Notes: ${e.hearing.notes||"None"}</div>
          </div>
        `:""}

        ${e.verdict?`
          <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 14px; border-radius: var(--radius-md); font-size: 0.875rem;">
            <h4 style="color: #34D399; margin-bottom: 4px;">Final Verdict Delivered</h4>
            <div><strong>Ruling:</strong> ${e.verdict.ruling}</div>
            <div style="color: var(--text-muted); margin-top: 4px;">Summary: ${e.verdict.summary}</div>
          </div>
        `:""}
      </div>
    </div>
  `;let s=document.getElementById("judge-record-modal");s&&s.remove(),document.body.insertAdjacentHTML("beforeend",a);const r=document.getElementById("judge-record-modal");document.getElementById("close-judge-record").addEventListener("click",()=>r.remove())}class nt{constructor(){this.mainContainer=document.getElementById("view-container"),this.navContainer=document.getElementById("navbar-container"),this.currentTheme=localStorage.getItem("lexportal_theme")||"dark"}init(){this.applyTheme(this.currentTheme),this.renderHeaderNav(),fe(),this.renderActiveView(),window.addEventListener("user-changed",()=>{this.renderHeaderNav(),fe(),this.renderActiveView()}),window.addEventListener("cases-updated",()=>{this.renderActiveView()})}applyTheme(e){this.currentTheme=e,document.documentElement.setAttribute("data-theme",e),localStorage.setItem("lexportal_theme",e)}toggleTheme(){const e=this.currentTheme==="dark"?"light":"dark";this.applyTheme(e),this.renderHeaderNav()}renderHeaderNav(){const e=$.getCurrentUser(),a=this.currentTheme==="dark",s=`
      <nav class="navbar">
        <div class="logo-container" id="logo-btn">
          <div class="logo-icon">
            ${l("scale",24)}
          </div>
          <div>
            <div class="logo-text brand-font">Lex<span>Portal</span></div>
            <div style="font-size: 0.7rem; color: var(--text-muted); font-weight: 500; letter-spacing: 0.5px;">LEGAL CASE MANAGEMENT SYSTEM</div>
          </div>
        </div>

        <div class="nav-links">
          <button class="nav-btn ${e.role==="client"?"active":""}" id="nav-client">
            ${l("user",18)} Client Portal
          </button>

          <button class="nav-btn ${e.role==="lawyer"?"active":""}" id="nav-lawyer">
            ${l("lawyer",18)} Lawyer Portal
          </button>

          <button class="nav-btn ${e.role==="judge"?"active":""}" id="nav-judge">
            ${l("gavel",18)} Judge Bench
          </button>
        </div>

        <div style="display: flex; align-items: center; gap: 14px;">
          <!-- Theme Toggle Button -->
          <button class="theme-toggle-btn" id="theme-toggle-btn" title="Toggle ${a?"Day Mode":"Dark Mode"}">
            ${l(a?"sun":"moon",20)}
          </button>

          <div class="user-profile-badge" id="profile-badge-btn" style="cursor: pointer;" title="Click to view/edit profile">
            <div class="avatar-circle ${e.role==="lawyer"?"avatar-lawyer":e.role==="judge"?"avatar-judge":""}" style="overflow: hidden;">
              ${e.profilePic?`<img src="${e.profilePic}" style="width: 100%; height: 100%; object-fit: cover;">`:e.name.charAt(0)}
            </div>
            <div class="user-info-text">
              <span class="user-name" style="display: flex; align-items: center; gap: 4px;">
                ${e.name}
                ${e.aadhaarVerified?'<span style="color: #34D399; font-size: 0.72rem; font-weight: 700;">✓</span>':""}
              </span>
              <span class="user-role-label">${e.role.toUpperCase()} &bull; ${e.location||"India"}</span>
            </div>
          </div>
        </div>
      </nav>
    `;if(this.navContainer){this.navContainer.innerHTML=s,document.getElementById("theme-toggle-btn").addEventListener("click",()=>{this.toggleTheme()});const r=$.getUsers();document.getElementById("nav-client").addEventListener("click",()=>{const n=r.find(c=>c.role==="client");n&&$.setCurrentUser(n)}),document.getElementById("nav-lawyer").addEventListener("click",()=>{const n=r.find(c=>c.role==="lawyer");n&&$.setCurrentUser(n)}),document.getElementById("nav-judge").addEventListener("click",()=>{const n=r.find(c=>c.role==="judge");n&&$.setCurrentUser(n)}),document.getElementById("profile-badge-btn").addEventListener("click",()=>{Ee()})}}renderActiveView(){const e=$.getCurrentUser();this.mainContainer&&(e.role==="client"?_e(this.mainContainer):e.role==="lawyer"?Qe(this.mainContainer):e.role==="judge"&&at(this.mainContainer))}}document.addEventListener("DOMContentLoaded",()=>{new nt().init()});
