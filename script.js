window.onload = () => {
  const baseURL = "https://vv-rouge.vercel.app/"; // Updated from localhost
  const backBtn = document.getElementById("backBtn");
  const levelContent = document.getElementById("levelContent");
  const sectionTitle = document.getElementById("sectionTitle");

  let currentView = "main";
  let currentSubject = "";

  const textbookSubjects = [
    "Marathi",
    "Mathematics Part-1",
    "Mathematics Part-2",
    "English",
    "Hindi",
    "Science and Technology Part-1",
    "Science and Technology Part-2",
    "History and Civics",
    "Geography"
  ];

  function openPDF(link) {
    const viewerLink = "https://docs.google.com/viewer?url=" + encodeURIComponent(link);
    window.open(viewerLink, "_blank");
  }

  function showMainOptions() {
    sectionTitle.textContent = "Select Resource Type";
    levelContent.innerHTML = "";
    backBtn.style.display = "none";
    currentView = "main";

    const row = document.createElement("div");
    row.className = "class-row";

    const refBtn = document.createElement("button");
    refBtn.textContent = "📚 Reference Books";
    refBtn.className = "btn-shared";
    refBtn.onclick = () => showReferenceSubjects();

    const pyqBtn = document.createElement("button");
    pyqBtn.textContent = "📄 Previous Year Questions";
    pyqBtn.className = "btn-shared";
    pyqBtn.onclick = () => showPYQSubjects();

    row.appendChild(refBtn);
    row.appendChild(pyqBtn);
    levelContent.appendChild(row);
  }

  function showReferenceSubjects() {
    sectionTitle.textContent = "Select Subject";
    levelContent.innerHTML = "";
    backBtn.style.display = "inline-block";
    currentView = "ref";

    const row = document.createElement("div");
    row.className = "class-row";

    const subjects = {
      "Mathematics Part-1": "10th/Reference-Books/Mathematics-Part-1.pdf",
      "Mathematics Part-2": "10th/Reference-Books/Mathematics-Part-2.pdf",
      "Science and Technology Part-1": "10th/Reference-Books/Science-and-Technology-Part-1.pdf",
      "Science and Technology Part-2": "10th/Reference-Books/Science-and-Technology-Part-2.pdf"
    };

    Object.keys(subjects).forEach(sub => {
      const btn = document.createElement("button");
      btn.textContent = sub;
      btn.className = "btn-shared";
      btn.onclick = () => {
        openPDF(baseURL + subjects[sub]);
      };
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

  function showPYQSubjects() {
    sectionTitle.textContent = "Select Subject";
    levelContent.innerHTML = "";
    backBtn.style.display = "inline-block";
    currentView = "pyq";

    const row = document.createElement("div");
    row.className = "class-row";

    const subjects = [
      "Marathi",
      "Mathematics Part-1",
      "Mathematics Part-2",
      "English",
      "Hindi",
      "Science and Technology Part-1",
      "Science and Technology Part-2",
      "History and Civics",
      "Geography"
    ];

    subjects.forEach(sub => {
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
    currentView = "pyq-year";
    currentSubject = subject;

    const row = document.createElement("div");
    row.className = "class-row";

    const years = ["2021", "2022", "2023", "2024", "2025"];
    const folderName = subject.replace(/ /g, "-");

    years.forEach(year => {
      const btn = document.createElement("button");
      btn.textContent = year;
      btn.className = "btn-shared";
      btn.onclick = () => {
        openPDF(`${baseURL}pdf/${folderName}/${year}.pdf`);
      };
      row.appendChild(btn);
    });

    levelContent.appendChild(row);
  }

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

    askBtn.textContent = "Thinking...";
    answerContent.innerHTML = `<p><em>Generating answer...</em></p>`;

    try {
      const response = await fetch("http://127.0.0.1:8080/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: query })
      });

      const data = await response.json();

      if (data.answer) {
        answerContent.innerHTML = `<div class="ai-answer"><strong>Answer:</strong><br>${data.answer}</div>`;
      } else {
        answerContent.innerHTML = `<p>⚠️ No answer was returned by the AI.</p>`;
      }
    } catch (error) {
      console.error(error);
      answerContent.innerHTML = `<p>❌ Could not connect to the AI service. Make sure your backend is running.</p>`;
    } finally {
      askBtn.textContent = "Search";
    }
  });
});
