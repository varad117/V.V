window.onload = () => {
  const backBtn = document.getElementById("backBtn");
  const levelContent = document.getElementById("levelContent");
  const sectionTitle = document.getElementById("sectionTitle");

  let currentView = "main";
  let currentSubject = "";
  let currentYear = "";

  const textbookLinks = {
    "Class 4": {
      "EVS Part1": "https://drive.google.com/file/d/1fjpxgbGWBhkpqla895brwLzbgO_RV0bw/view?usp=drive_link",
      "EVS Part2": "https://drive.google.com/file/d/13VvTewXS1P7xS-b3oHnceSKMY7EOyPzi/view?usp=drive_link",
      Marathi: "https://drive.google.com/file/d/1J1sHzlQ1lYHuVdq5qSfzPMiQoD8goSLW/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1xYfHN-9mRzhgDXtv0k1iktBKTcBiz_tA/view?usp=drive_link",
      Mathematics: "https://drive.google.com/file/d/1fu8AuZJAvCuJofEDCndo4zKfBc8ZqZy_/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/18XSQZkw4HwPwT84kNbIHpQmGhUbujujA/view?usp=drive_link",
    },
    "Class 5": {
      Marathi: "https://drive.google.com/file/d/18kD50zv2lWAlSWQytkiaq5zZXJSSk5jO/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1kaERRK9VWEO04YAMjNSV5s2lK5QMSBKx/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/18gdBIk5XFtWgEBKslXVQHhd-tYlzTThg/view?usp=drive_link",
      Mathematics: "https://drive.google.com/file/d/1YEDE-z9567RxsBi0NU9F6EvJz9_BkdMF/view?usp=drive_link",
      "EVS Part1": "https://drive.google.com/file/d/1QDXFnqI_XZnE_J1nS17mG9fQxI3BOGsH/view?usp=drive_link",
      "EVS Part2": "https://drive.google.com/file/d/11emC2m-jKiVyRJh4vi8P2G-wrF_v2GL-/view?usp=drive_link",
    },
    "Class 6": {
      Marathi: "https://drive.google.com/file/d/1CgPLdNJy_H7INuInUobz0YYbMIPuEGi2/view?usp=drive_link",
      Mathematics: "https://drive.google.com/file/d/1ytZMbjSP3sq-AALWqisPL8f4S0Ws2F8k/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/1TJ3AyNPtGaFzAwaCv6V4Lf8NasFntEeo/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1dr13fLX8nLmBK0Z73pRLU7QKNqWFZFNO/view?usp=drive_link",
      "General Science": "https://drive.google.com/file/d/1n_xSfb5JRelhHTQAhqNgk7rBijpUPBi_/view?usp=drive_link",
      "History and Civics": "https://drive.google.com/file/d/1GXp5bYcrdGB-vgcy8dGoTveD6g72OHkd/view?usp=drive_link",
      Geography: "https://drive.google.com/file/d/1glQLePIT7dDx2HZ84AzGq_4VNPNqy_tJ/view?usp=drive_link",
    },
    "Class 7": {
      Marathi: "https://drive.google.com/file/d/1Jlb8okeE4IEQlvb51KprR2q8vPEIup2I/view?usp=drive_link",
      Mathematics: "https://drive.google.com/file/d/19AfLXFJvfSSXKQ-SPKjo5LuxTXK6Dl3Z/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1RZeEV5mLnBtGu-w6bT3N1IdYx7E1_hEG/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/1HgmBCxhvGZwRREWPCmoyOWKEi-j-WMgm/view?usp=drive_link",
      "General Science": "https://drive.google.com/file/d/1FF5dR2NyQBCsCRJDsqgwdPBxXOI8pPOh/view?usp=drive_link",
      "History and Civics": "https://drive.google.com/file/d/14NxF6JXHITx9P1Qr2rRNr0FPo8ahMc49/view?usp=drive_link",
      Geography: "https://drive.google.com/file/d/19a2YlWwiK8TmMK_EkdJusbIHbwSFN2Tn/view?usp=drive_link",
    },
    "Class 8": {
      Marathi: "https://drive.google.com/file/d/1mnfIh_ZfsF5yLIDcbyTOmEZvqXeelrsk/view?usp=drive_link",
      Mathematics: "https://drive.google.com/file/d/1PZfk1IBU_3dqK1uk8KjhXnE2D1slHvV5/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1VD3hvYjeaNo539-5frl3rsdX6tZ9dcWD/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/1WppP5PurbJKunqruliedGPBgP0xxnNmf/view?usp=drive_link",
      "General Science": "https://drive.google.com/file/d/1llXtAN9w_7Z6bn22VGXYKWx-yfMffDfY/view?usp=drive_link",
      "History and Civics": "https://drive.google.com/file/d/1cgnGUr60e81bFnn_8rBdisU78jGNAECM/view?usp=drive_link",
      Geography: "https://drive.google.com/file/d/1WyOPkfR4aHBKqW6nOXcF-zRZMKbqdGWh/view?usp=drive_link",
    },
    "Class 9": {
      Marathi: "https://drive.google.com/file/d/1LyvTfriD3GBSQY5i4waHh3ZYBQabwFNw/view?usp=drive_link",
      "Mathematics Part-1": "https://drive.google.com/file/d/1QB-l98ApbEk4EZjPcgOM1GWkNAD42ZDI/view?usp=drive_link",
      "Mathematics Part-2": "https://drive.google.com/file/d/1aOmuuLgWSCcHo4bQhjr2947EhVMrpLjf/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1BoeZatqQu-cqITixexPtUDBzKrdhRTk5/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/1uI5Afnk3dSCHBkGIhh9QRZCL6cOhKApL/view?usp=drive_link",
      "Science and Technology": "https://drive.google.com/file/d/1qCa19sV2-9o3--TkbcC23Th5pxB1LUK6/view?usp=drive_link",
      "History and Civics": "https://drive.google.com/file/d/15LpyhoKH-7acRLdTei8Fnh7Me3xyqIyL/view?usp=drive_link",
      Geography: "https://drive.google.com/file/d/1tgitNu3TpNx2AyVGHQketxefuU9cgeLw/view?usp=drive_link",
    },
    "Class 10": {
      Marathi: "https://drive.google.com/file/d/1pOMl1sxm-1hGd7SVEPZ1wIEKmL64sJAw/view?usp=drive_link",
      "Mathematics Part-1": "https://drive.google.com/file/d/1hQvi7wdwlCKwqIcbvu3DIyblf-JhDDcs/view?usp=drive_link",
      "Mathematics Part-2": "https://drive.google.com/file/d/1E7MD3MO2KbStJykxzeRMLixbPy60kDEm/view?usp=drive_link",
      English: "https://drive.google.com/file/d/1-vSsCepvPsg1RDld0GW24mIANxTJffxC/view?usp=drive_link",
      Hindi: "https://drive.google.com/file/d/1mURZRJ9qz3BQsQnBqQDI2tBWkRyDgLQ2/view?usp=drive_link",
      "Science and Technology Part-1": "https://drive.google.com/file/d/1nICINY_Rh_mlVRUZ6QOQUTld1XID-GOD/view?usp=drive_link",
      "Science and Technology Part-2": "https://drive.google.com/file/d/12ABab_H5rS2wNV4L9DkSzZDlpN6H_QV7/view?usp=drive_link",
      "History and Civics": "https://drive.google.com/file/d/1xmMPvx9Onopz32jWlYjLXtu8VLTeihXt/view?usp=drive_link",
      Geography: "https://drive.google.com/file/d/1y50DTqSoBTvu7zkpFlTheF4jWXeNuhiD/view?usp=drive_link",
    }
  };

  const pyqLinks = {
    "Class 10 PYQ": {
      Marathi: {
        "2021": "", "2022": "https://drive.google.com/file/d/1GAJxEM5VHNXIVsYr8FX_3lngmOEeFxn1/view?usp=drive_link", "2023": "", "2024": "https://drive.google.com/file/d/11gQp5QO1wAt_uT7Jiad9Hpjq6VkHVqB_/view?usp=drive_link", "2025": "https://drive.google.com/file/d/1mQR6rUmpnLQERDqUOvIyE6VCisevBblo/view?usp=drive_link"
      },
      "Mathematics Part-1": {
        "2021": "", "2022": "https://drive.google.com/file/d/15cGFa11_l-OVfKwlAZkdxUZ1xNccUBlW/view?usp=drive_link", "2023": "https://drive.google.com/file/d/1xGmo77WDUHkLKEx_Jce7Lim2Ue7GNG1L/view?usp=drive_link", "2024": "https://drive.google.com/file/d/1hb9SSkefgxEVRxEZAULiG3OYSYjqaiGo/view?usp=drive_link", "2025": "https://drive.google.com/file/d/1l_7P34X0MDOYvDpEMb8WuIDBGLjrK0_v/view?usp=drive_link"
      },
      "Mathematics Part-2": {
        "2021": "", "2022": "https://drive.google.com/file/d/1xyvQ2oXrgrtnEti1MVNZ6IoCOWZ84WWj/view?usp=drive_link", "2023": "", "2024": "https://drive.google.com/file/d/1BHQB54L6ssO4LfimF4zeXE1jBd0cu1KH/view?usp=drive_link", "2025": "https://drive.google.com/file/d/14I8zgUU94PyLSDtdcNwSHAg82pQAMVsQ/view?usp=drive_link"
      },
      English: {
        "2021": "", "2022": "https://drive.google.com/file/d/1xBxph21Xw8VxdyyJNHyIDH_rWwX5LK76/view?usp=drive_link", "2023": "https://drive.google.com/file/d/1FyRg4QpaAPIVS52O33mOjD59crDLY_DV/view?usp=drive_link", "2024": "https://drive.google.com/file/d/1qR75GgdVsRpalxSBnHo3bqNAL5q7MPu9/view?usp=drive_link", "2025": "https://drive.google.com/file/d/1QqHVJeCh02SnDYlZ-tP9su_eEsfLwSJJ/view?usp=drive_link"
      Hindi: {
        "2021": "", "2022": "https://drive.google.com/file/d/1GICrwEvXsvaIpEydboa3UhIhY-x_SLRc/view?usp=drive_link", "2023": "https://drive.google.com/file/d/1m93W3GnkKVMtjmKPcnzVE6MSXX10KGwx/view?usp=drive_link", "2024": "https://drive.google.com/file/d/1bjCFQIddKrI2p3pouNf3nGfssVmeWiuR/view?usp=drive_link", "2025": "https://drive.google.com/file/d/13JD6LcLcd2wSTnfHQchba9tLl2S2S4sF/view?usp=drive_link"
      },
      "Science and Technology Part-1": {
        "2021": "", "2022": "https://drive.google.com/file/d/1j3nZDDjHl5_I47GHKwU0BLUqOqa6cATi/view?usp=drive_link", "2023": "https://drive.google.com/file/d/18DWlYYK2q14lTDBaTgC1OLq21CskqPLs/view?usp=drive_link", "2024": "https://drive.google.com/file/d/1wk7fZnXeHmn--iy-kDF_kFceT35_Hyib/view?usp=drive_link", "2025": "https://drive.google.com/file/d/18DA1ubBMqmUb5rEoebh0LKfH232Gy6eu/view?usp=drive_link"
      },
      "Science and Technology Part-2": {
        "2021": "", "2022": "https://drive.google.com/file/d/1DMn5Sv3io9zuYb8xq86exbpeZIsF49BV/view?usp=drive_link", "2023": "https://drive.google.com/file/d/1D9jS0fTSVGmm5JdyKjUDSKX1tFgFa1Ll/view?usp=drive_link", "2024": "https://drive.google.com/file/d/1YTcuXf8ji3YP34naDTfFNViYP6oQfDFA/view?usp=drive_link", "2025": "https://drive.google.com/file/d/15WkYuo5rM4-XbUtSVvBNfiMmY5K8cWaW/view?usp=drive_link"
      },
      "History and Civics": {
        "2021": "", "2022": "https://drive.google.com/file/d/1uW7Ie9HCIRiO_a03jzzy-UT2v2ERdqhb/view?usp=drive_link", "2023": "", "2024": "https://drive.google.com/file/d/1-hHXy3awwSzSJzcrG2HiUtVNIkd6Ax7v/view?usp=drive_link", "2025": "https://drive.google.com/file/d/1I1mVOjU9qcryM_sWm009XW9eDN1W_T_6/view?usp=drive_link"
      },
      Geography: {
        "2021": "", "2022": "https://drive.google.com/file/d/12TR1n57hIm3J3VQ0yHxB-v9NSVHHi3JA/view?usp=drive_link", "2023": "", "2024": "https://drive.google.com/file/d/1ArVBrfCYZH3sGS0J2Ee2QmnM-yOTPp72/view?usp=drive_link", "2025": "https://drive.google.com/file/d/1xOiXRdsYiVbOz9cYWkpsZSIRx9QRO5nH/view?usp=drive_link"
      }
    }
  };

  function openPDF(link) {
    if (!link) {
      alert("Link not available yet.");
      return;
    }
    window.open(link, "_blank");
  }

  function showMainOptions() {
    sectionTitle.textContent = "Select Resource Type";
    levelContent.innerHTML = "";
    backBtn.style.display = "none";

    const row = document.createElement("div");
    row.className = "class-row";

    const txtBtn = document.createElement("button");
    txtBtn.textContent = "📚 Textbooks";
    txtBtn.className = "btn-shared";
    txtBtn.onclick = () => showTextbookClasses();

    const pyqBtn = document.createElement("button");
    pyqBtn.textContent = "📄 Previous Year Questions";
    pyqBtn.className = "btn-shared";
    pyqBtn.onclick = () => showPYQSubjects();

    row.appendChild(txtBtn);
    row.appendChild(pyqBtn);
    levelContent.appendChild(row);
  }

  function showTextbookClasses() {
    sectionTitle.textContent = "Select Class";
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
    sectionTitle.textContent = `${cls} – Select Subject`;
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

  function showPYQSubjects() {
    sectionTitle.textContent = "Class 10 – Select Subject";
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

  backBtn.onclick = () => showMainOptions();
  showMainOptions();
};

document.addEventListener("DOMContentLoaded", () => {
  const askBtn = document.getElementById("askBtn");
  const questionInput = document.getElementById("questionInput");
  const answerContent = document.getElementById("answerContent");

  askBtn.addEventListener("click", async () => {
    const query = questionInput.value.trim();

    if (!query) {
      alert("Please type a question.");
      return;
    }

    if (!query.endsWith("?")) {
      answerContent.innerHTML = `<p>Please end your question with a <strong>?</strong> so the AI can respond.</p>`;
      return;
    }

    // ... rest of AI logic
  });
});
