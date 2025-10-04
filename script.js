<script>
window.onload = () => {
  const backBtn = document.getElementById("backBtn");
  const levelContent = document.getElementById("levelContent");
  const sectionTitle = document.getElementById("sectionTitle");

  let currentSubject = "";

  // ✅ Digests (Google Drive PDFs)
  const digestLinks = {
    "Class 4": {
      "EVS Part-1": "https://drive.google.com/file/d/1abc123/view?usp=drive_link",
      "EVS Part-2": "https://drive.google.com/file/d/1def456/view?usp=drive_link",
      "Marathi": "https://drive.google.com/file/d/1ghi789/view?usp=drive_link",
      "English": "https://drive.google.com/file/d/1jkl000/view?usp=drive_link",
      "Mathematics": "https://drive.google.com/file/d/1mno111/view?usp=drive_link",
      "Hindi": "https://drive.google.com/file/d/1pqr222/view?usp=drive_link"
    },
    "Class 5": {
      "Marathi": "https://drive.google.com/file/d/1stu333/view?usp=drive_link",
      "English": "https://drive.google.com/file/d/1vwx444/view?usp=drive_link",
      "Hindi": "https://drive.google.com/file/d/1yzA555/view?usp=drive_link",
      "Mathematics": "https://drive.google.com/file/d/123B666/view?usp=drive_link",
      "EVS Part-1": "https://drive.google.com/file/d/124C777/view?usp=drive_link",
      "EVS Part-2": "https://drive.google.com/file/d/125D888/view?usp=drive_link"
    },
    // 👉 Continue with Class 6–10 digests drive links
  };

  // ✅ Textbooks (Google Drive PDFs)
  const textbookLinks = {
    "Class 4": {
      "EVS Part1": "https://drive.google.com/file/d/1fjpxgbGWBhkpqla895brwLzbgO_RV0bw/view?usp=drive_link",
      "EVS Part2": "https://drive.google.com/file/d/13VvTewXS1P7xS-b3oHnceSKMY7EOyPzi/view?usp=drive_link",
      "Marathi": "https://drive.google.com/file/d/1J1sHzlQ1lYHuVdq5qSfzPMiQoD8goSLW/view?usp=drive_link",
      "English": "https://drive.google.com/file/d/1xYfHN-9mRzhgDXtv0k1iktBKTcBiz_tA/view?usp=drive_link",
      "Mathematics": "https://drive.google.com/file/d/1fu8AuZJAvCuJofEDCndo4zKfBc8ZqZy_/view?usp=drive_link",
      "Hindi": "https://drive.google.com/file/d/18XSQZkw4HwPwT84kNbIHpQmGhUbujujA/view?usp=drive_link"
    },
    // 👉 Continue with Class 5–10 textbooks drive links
  };

  // ✅ PYQs (Google Drive PDFs)
  const pyqLinks = {
    "Class 10 PYQ": {
      "Marathi": {
        "2021": "",
        "2022": "https://drive.google.com/file/d/1GAJxEM5VHNXIVsYr8FX_3lngmOEeFxn1/view?usp=drive_link",
        "2023": "",
        "2024": "https://drive.google.com/file/d/11gQp5QO1wAt_uT7Jiad9Hpjq6VkHVqB_/view?usp=drive_link",
        "2025": "https://drive.google.com/file/d/1mQR6rUmpnLQERDqUOvIyE6VCisevBblo/view?usp=drive_link"
      },
      // 👉 Continue with English, Science, etc.
    }
  };

  // ✅ Common: open PDF in new tab
  function openPDF(link) {
    if (!link) {
      alert("Link not available yet.");
      return;
    }
    window.open(link, "_blank");
  }

  // ✅ Main Menu
  function showMainOptions() {
    sectionTitle.textContent = "Select Resource Type";
    levelContent.innerHTML = "";
    backBtn.style.display = "none";

    const row = document.createElement("div");
    row.className = "class-row";

    const digestBtn = document.createElement("button");
    digestBtn.textContent = "📖 Digests";
    digestBtn.className = "btn-shared";
    digestBtn.onclick = () => showDigestClasses();

    const txtBtn = document.createElement("button");
    txtBtn.textContent = "📚 Textbooks";
    txtBtn.className = "btn-shared";
    txtBtn.onclick = () => showTextbookClasses();

    const pyqBtn = document.createElement("button");
    pyqBtn.textContent = "📄 PYQs";
    pyqBtn.className = "btn-shared";
    pyqBtn.onclick = () => showPYQSubjects();

    row.appendChild(digestBtn);
    row.appendChild(txtBtn);
    row.appendChild(pyqBtn);
    levelContent.appendChild(row);
  }

  // ✅ Digests
  function showDigestClasses() {
    sectionTitle.textContent = "Select Class (Digests)";
    levelContent.innerHTML = "";
    backBtn.style.display = "inline-block";

    const row = document.createElement("div");
    row.className = "class-row";

    Object.keys(digestLinks).forEach(cls => {
      const btn = document.createElement("button");
      btn.textContent = cls;
      btn.className = "btn-shared";
      btn.onclick = () => showDigestSubjects(cls);
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  function showDigestSubjects(cls) {
    sectionTitle.textContent = `${cls} – Digest Subjects`;
    levelContent.innerHTML = "";

    const row = document.createElement("div");
    row.className = "class-row";

    const subjects = digestLinks[cls];
    Object.keys(subjects).forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.className = "btn-shared";
      btn.onclick = () => openPDF(subjects[sub]);
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  // ✅ Textbooks
  function showTextbookClasses() {
    sectionTitle.textContent = "Select Class (Textbooks)";
    levelContent.innerHTML = "";
    backBtn.style.display = "inline-block";

    const row = document.createElement("div");
    row.className = "class-row";

    Object.keys(textbookLinks).forEach(cls => {
      const btn = document.createElement("button");
      btn.textContent = cls;
      btn.className = "btn-shared";
      btn.onclick = () => showTextbookSubjects(cls);
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  function showTextbookSubjects(cls) {
    sectionTitle.textContent = `${cls} – Textbook Subjects`;
    levelContent.innerHTML = "";

    const row = document.createElement("div");
    row.className = "class-row";

    const subjects = textbookLinks[cls];
    Object.keys(subjects).forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.className = "btn-shared";
      btn.onclick = () => openPDF(subjects[sub]);
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  // ✅ PYQs
  function showPYQSubjects() {
    sectionTitle.textContent = "Class 10 – Select Subject (PYQs)";
    levelContent.innerHTML = "";
    backBtn.style.display = "inline-block";

    const row = document.createElement("div");
    row.className = "class-row";

    Object.keys(pyqLinks["Class 10 PYQ"]).forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.className = "btn-shared";
      btn.onclick = () => showPYQYears(sub);
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  function showPYQYears(subject) {
    sectionTitle.textContent = `${subject} – Select Year`;
    levelContent.innerHTML = "";
    currentSubject = subject;

    const row = document.createElement("div");
    row.className = "class-row";

    const years = ["2021", "2022", "2023", "2024", "2025"];
    years.forEach(year => {
      const btn = document.createElement("button");
      btn.textContent = year;
      btn.className = "btn-shared";
      btn.onclick = () => {
        const link = pyqLinks["Class 10 PYQ"][subject][year];
        openPDF(link);
      };
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  // ✅ Back button always goes to main options
  backBtn.onclick = () => showMainOptions();

  // ✅ Start with main menu
  showMainOptions();
};
</script>

// Full textbooks object (unchanged)
const textbooks = { 
  "Class 4": { "EVS Part1": "https://drive.google.com/file/d/1fjpxgbGWBhkpqla895brwLzbgO_RV0bw/view?usp=drive_link", "EVS Part2": "https://drive.google.com/file/d/13VvTewXS1P7xS-b3oHnceSKMY7EOyPzi/view?usp=drive_link", Marathi: "https://drive.google.com/file/d/1J1sHzlQ1lYHuVdq5qSfzPMiQoD8goSLW/view?usp=drive_link", English: "https://drive.google.com/file/d/1xYfHN-9mRzhgDXtv0k1iktBKTcBiz_tA/view?usp=drive_link", Mathematics: "https://drive.google.com/file/d/1fu8AuZJAvCuJofEDCndo4zKfBc8ZqZy_/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/18XSQZkw4HwPwT84kNbIHpQmGhUbujujA/view?usp=drive_link" },
  "Class 5": { Marathi: "https://drive.google.com/file/d/18kD50zv2lWAlSWQytkiaq5zZXJSSk5jO/view?usp=drive_link", English: "https://drive.google.com/file/d/1kaERRK9VWEO04YAMjNSV5s2lK5QMSBKx/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/18gdBIk5XFtWgEBKslXVQHhd-tYlzTThg/view?usp=drive_link", Mathematics: "https://drive.google.com/file/d/1YEDE-z9567RxsBi0NU9F6EvJz9_BkdMF/view?usp=drive_link", "EVS Part1": "https://drive.google.com/file/d/1QDXFnqI_XZnE_J1nS17mG9fQxI3BOGsH/view?usp=drive_link", "EVS Part2": "https://drive.google.com/file/d/11emC2m-jKiVyRJh4vi8P2G-wrF_v2GL-/view?usp=drive_link" },
  "Class 6": { Marathi: "https://drive.google.com/file/d/1CgPLdNJy_H7INuInUobz0YYbMIPuEGi2/view?usp=drive_link", Mathematics: "https://drive.google.com/file/d/1ytZMbjSP3sq-AALWqisPL8f4S0Ws2F8k/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/1TJ3AyNPtGaFzAwaCv6V4Lf8NasFntEeo/view?usp=drive_link", English: "https://drive.google.com/file/d/1dr13fLX8nLmBK0Z73pRLU7QKNqWFZFNO/view?usp=drive_link", "General Science": "https://drive.google.com/file/d/1n_xSfb5JRelhHTQAhqNgk7rBijpUPBi_/view?usp=drive_link", "History and Civics": "https://drive.google.com/file/d/1GXp5bYcrdGB-vgcy8dGoTveD6g72OHkd/view?usp=drive_link", Geography: "https://drive.google.com/file/d/1glQLePIT7dDx2HZ84AzGq_4VNPNqy_tJ/view?usp=drive_link" },
  "Class 7": { Marathi: "https://drive.google.com/file/d/1Jlb8okeE4IEQlvb51KprR2q8vPEIup2I/view?usp=drive_link", Mathematics: "https://drive.google.com/file/d/19AfLXFJvfSSXKQ-SPKjo5LuxTXK6Dl3Z/view?usp=drive_link", English: "https://drive.google.com/file/d/1RZeEV5mLnBtGu-w6bT3N1IdYx7E1_hEG/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/1HgmBCxhvGZwRREWPCmoyOWKEi-j-WMgm/view?usp=drive_link", "General Science": "https://drive.google.com/file/d/1FF5dR2NyQBCsCRJDsqgwdPBxXOI8pPOh/view?usp=drive_link", "History and Civics": "https://drive.google.com/file/d/14NxF6JXHITx9P1Qr2rRNr0FPo8ahMc49/view?usp=drive_link", Geography: "https://drive.google.com/file/d/19a2YlWwiK8TmMK_EkdJusbIHbwSFN2Tn/view?usp=drive_link" },
  "Class 8": { Marathi: "https://drive.google.com/file/d/1mnfIh_ZfsF5yLIDcbyTOmEZvqXeelrsk/view?usp=drive_link", Mathematics: "https://drive.google.com/file/d/1PZfk1IBU_3dqK1uk8KjhXnE2D1slHvV5/view?usp=drive_link", English: "https://drive.google.com/file/d/1VD3hvYjeaNo539-5frl3rsdX6tZ9dcWD/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/1WppP5PurbJKunqruliedGPBgP0xxnNmf/view?usp=drive_link", "General Science": "https://drive.google.com/file/d/1llXtAN9w_7Z6bn22VGXYKWx-yfMffDfY/view?usp=drive_link", "History and Civics": "https://drive.google.com/file/d/1cgnGUr60e81bFnn_8rBdisU78jGNAECM/view?usp=drive_link", Geography: "https://drive.google.com/file/d/1WyOPkfR4aHBKqW6nOXcF-zRZMKbqdGWh/view?usp=drive_link" },
  "Class 9": { Marathi: "https://drive.google.com/file/d/1LyvTfriD3GBSQY5i4waHh3ZYBQabwFNw/view?usp=drive_link", "Mathematics Part-1": "https://drive.google.com/file/d/1QB-l98ApbEk4EZjPcgOM1GWkNAD42ZDI/view?usp=drive_link", "Mathematics Part-2": "https://drive.google.com/file/d/1aOmuuLgWSCcHo4bQhjr2947EhVMrpLjf/view?usp=drive_link", English: "https://drive.google.com/file/d/1BoeZatqQu-cqITixexPtUDBzKrdhRTk5/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/1uI5Afnk3dSCHBkGIhh9QRZCL6cOhKApL/view?usp=drive_link", "Science and Technology": "https://drive.google.com/file/d/1qCa19sV2-9o3--TkbcC23Th5pxB1LUK6/view?usp=drive_link", "History and Civics": "https://drive.google.com/file/d/15LpyhoKH-7acRLdTei8Fnh7Me3xyqIyL/view?usp=drive_link", Geography: "https://drive.google.com/file/d/1tgitNu3TpNx2AyVGHQketxefuU9cgeLw/view?usp=drive_link" },
  "Class 10": { Marathi: "https://drive.google.com/file/d/1pOMl1sxm-1hGd7SVEPZ1wIEKmL64sJAw/view?usp=drive_link", "Mathematics Part-1": "https://drive.google.com/file/d/1hQvi7wdwlCKwqIcbvu3DIyblf-JhDDcs/view?usp=drive_link", "Mathematics Part-2": "https://drive.google.com/file/d/1E7MD3MO2KbStJykxzeRMLixbPy60kDEm/view?usp=drive_link", English: "https://drive.google.com/file/d/1-vSsCepvPsg1RDld0GW24mIANxTJffxC/view?usp=drive_link", Hindi: "https://drive.google.com/file/d/1mURZRJ9qz3BQsQnBqQDI2tBWkRyDgLQ2/view?usp=drive_link", "Science and Technology Part-1": "https://drive.google.com/file/d/1nICINY_Rh_mlVRUZ6QOQUTld1XID-GOD/view?usp=drive_link", "Science and Technology Part-2": "https://drive.google.com/file/d/12ABab_H5rS2wNV4L9DkSzZDlpN6H_QV7/view?usp=drive_link", "History and Civics": "https://drive.google.com/file/d/1xmMPvx9Onopz32jWlYjLXtu8VLTeihXt/view?usp=drive_link", Geography: "https://drive.google.com/file/d/1y50DTqSoBTvu7zkpFlTheF4jWXeNuhiD/view?usp=drive_link" }
};

const levelContent = document.getElementById("levelContent");
const backBtn = document.getElementById("backBtn");
const sectionTitle = document.getElementById("sectionTitle");

let currentPage = "home"; // State 1: 'home' (Classes list), State 2: 'subjects' (Subjects list)

function showClasses() {
  sectionTitle.textContent = "Select Class";
  levelContent.innerHTML = "";
  currentPage = "home";
  
  // **CHANGE 1: Enable the button here for the first time**
  backBtn.disabled = false;
  
  // **CHANGE 2: Set the click action to go to the external index page**
  backBtn.onclick = () => {
    // Navigate to the index page (assuming it's named index.html)
    window.location.href = 'index.html'; 
  };
  
  const row = document.createElement("div");
  row.className = "class-row";

  Object.keys(textbooks).forEach(cls => {
    const btn = document.createElement("button");
    btn.textContent = cls;
    btn.className = "btn-shared";
    btn.onclick = () => showSubjects(cls);
    row.appendChild(btn);
  });

  levelContent.appendChild(row);
}

function showSubjects(cls) {
  sectionTitle.textContent = cls + " - Subjects";
  levelContent.innerHTML = "";
  currentPage = "subjects";
  backBtn.disabled = false; // The button is always enabled here
  
  // **CHANGE 3: Set the click action to go back to the Classes view**
  backBtn.onclick = () => {
    showClasses(); // This takes you back to the list of Classes within this page
  };

  const row = document.createElement("div");
  row.className = "class-row";

  Object.keys(textbooks[cls]).forEach(sub => {
    const btn = document.createElement("button");
    btn.textContent = sub;
    btn.className = "btn-shared";
    btn.onclick = () => window.open(textbooks[cls][sub], "_blank");
    row.appendChild(btn);
  });

  levelContent.appendChild(row);
}

// The old backBtn.onclick is removed and moved inside showClasses and showSubjects
// The initial call remains the same
showClasses();

<script>
  function isValidGmail(email) {
    // Regex: must end with @gmail.com
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailPattern.test(email);
  }

  function loginUser(event){
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if(!isValidGmail(email)){
      alert("Please enter a valid Gmail address (example@gmail.com).");
      return false;
    }

    if(email && pass){
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);
      alert("Login successful!");
      window.location.href="index.html";
    } else {
      alert("Enter email and password.");
    }
  }

  function signupUser(event){
    event.preventDefault();
    const name = document.getElementById("newName").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const pass = document.getElementById("newPassword").value.trim();

    if(!isValidGmail(email)){
      alert("Only Gmail accounts are allowed (example@gmail.com).");
      return false;
    }

    if(name && email && pass){
      alert("Account created! Now login.");
      showLogin();
    } else {
      alert("Fill all fields.");
    }
  }

  function showSignup(){
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("linksLogin").style.display = "none";
    document.getElementById("linksSignup").style.display = "block";
    document.getElementById("formTitle").innerText = "Sign Up";
  }

  function showLogin(){
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("linksLogin").style.display = "block";
    document.getElementById("linksSignup").style.display = "none";
    document.getElementById("formTitle").innerText = "Login";
  }
</script>

let otpToken = null;

async function sendOtp() {
  const email = document.getElementById("newEmail").value.trim();
  if(!email) return alert("Enter email");

  const res = await fetch("http://localhost:3000/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  const data = await res.json();
  alert(data.message);
  if(data.success) document.getElementById("otpGroup").style.display = "block";
}

async function verifyOtp() {
  const email = document.getElementById("newEmail").value.trim();
  const code = document.getElementById("otpCode").value.trim();
  if(!code) return alert("Enter OTP");

  const res = await fetch("http://localhost:3000/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, code })
  });
  const data = await res.json();
  alert(data.message);
  if(data.success) {
    otpToken = data.otpToken;
    document.getElementById("otpGroup").style.display = "none";
  }
}

async function signupUser(event){
  event.preventDefault();
  const name = document.getElementById("newName").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const pass = document.getElementById("newPassword").value.trim();

  if(!otpToken) return alert("Verify OTP first!");

  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password: pass, otpToken })
  });
  const data = await res.json();
  alert(data.message);
  if(data.success) showLogin();
}

async function loginUser(event){
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();

  if(!email || !pass) return alert("Enter email & password");

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password: pass })
  });
  const data = await res.json();
  alert(data.message);

  if(data.success){
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", data.user.name);
    window.location.href="index.html";
  }
}
