const questions = [
  {
    question: "Which conference does BYU compete in?",
    answers: ["WCC", "Big 12", "Pac-12", "Mountain West"],
    correct: 1
  },
  {
    question: "What year was BYU basketball founded?",
    answers: ["1901", "1911", "1921", "1931"],
    correct: 1
  },
  {
    question: "How many NCAA championships has BYU won?",
    answers: ["0", "1", "2", "3"],
    correct: 1
  },
  {
    question: "What is BYU's primary rival in basketball?",
    answers: ["Utah State", "University of Utah", "Weber State", "Southern Utah"],
    correct: 1
  },
  {
    question: "In what year did BYU reach the Final Four?",
    answers: ["1981", "1991", "2001", "2011"],
    correct: 0
  },
  {
    question: "What is the name of BYU's basketball arena?",
    answers: ["Marriott Center", "Huntsman Center", "Vivint Arena", "EnergySolutions Arena"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].correct) {
    feedbackEl.textContent = "Correct!";
    score++;
  } else {
    feedbackEl.textContent = "Incorrect.";
  }
  scoreEl.textContent = `Score: ${score}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Game Over!";
    answersEl.innerHTML = "";
    feedbackEl.textContent = `Final Score: ${score}`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
