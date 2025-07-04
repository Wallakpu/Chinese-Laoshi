// Grab elements
const question = document.getElementById("questions");
const buttons = document.querySelectorAll(".btn");
const finishBtn = document.getElementById("finish");
const progressFill = document.getElementById("progress-fill");

const resultScreen = document.getElementById("result-screen");
const resultLevel = document.getElementById("result-level");
const resultScore = document.getElementById("result-score");
const resultStars = document.getElementById("result-stars");
const resultDescription = document.getElementById("result-description");
const nextLevelBtn = document.getElementById("next-level-btn");

// Questions data
const QuizQn = [
  { q: "Which sentence is grammatically correct?", options: ["他是学生", "学生是他", "是他学生", "他学生是"], answer: 0 },
  { q: "What does 我有一本书 mean?", options: ["I have two books", "I don't have a book", "I have a book", "This is a book"], answer: 2 },
  { q: "Choose the best option. 你好吗？", options: ["谢谢", "我很好", "再见!", "不客气"], answer: 1 },
  { q: "What is the Chinese word for 'apple'?", options: ["香蕉 (xiāngjiāo)", "橘子(júzi)", "苹果 (píngguǒ)", "葡萄(pútao)"], answer: 2 },
  { q: "我____一个朋友. Complete the sentence", options: ["在", "和", "不", "有"], answer: 3 },
];

let score = 0;
let current = 0;
let selected = false;

function displayQn() {
  const qns = QuizQn[current];
  question.innerText = `${current + 1}. ${qns.q}`;
  buttons.forEach((btn, i) => {
    btn.innerText = qns.options[i];
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.style.borderColor = "";
    btn.style.color = "";
  });
  selected = false;

  // Update progress bar
  let progress = ((current + 1) / QuizQn.length) * 100;
  progressFill.style.width = progress + "%";

  // Reset finish button text
  finishBtn.innerText = current === QuizQn.length - 1 ? "Submit" : "Finish";
}

function disableButtons() {
  buttons.forEach((btn) => (btn.disabled = true));
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (selected) return; // Prevent multiple clicks
    selected = true;

    const correctAnswer = QuizQn[current].answer;

    if (index === correctAnswer) {
      score++;
      btn.style.backgroundColor = "#d1fae5"; 
      btn.style.border = "1px solid #048048";
      btn.style.color = "black";
    } else {
      btn.style.backgroundColor = "#fed7d7"; 
      btn.style.border = "1px solid #e53e3e";
      btn.style.color = "black";

      // Highlight correct answer
      buttons[correctAnswer].style.backgroundColor = "#d1fae5";
      buttons[correctAnswer].style.border = "1px solid #048048";
      buttons[correctAnswer].style.color = "black";
    }

    disableButtons();

    // Auto move to next question or results after 1 sec delay
    setTimeout(() => {
      if (current < QuizQn.length - 1) {
        current++;
        displayQn();
      } else {
        showResults();
      }
    }, 1000);
  });
});

// Finish button allows user to submit mid-way
finishBtn.addEventListener("click", () => {
  showResults();
});

function showResults() {
  // Hide quiz container
  document.getElementById("quiz-inner").style.display = "none";
  document.querySelector(".quiz-container").style.display = "none";

  // Show results screen
  resultScreen.style.display = "block";

  resultLevel.innerText = "HSK 1";
  resultScore.innerText = `You scored ${score} out of ${QuizQn.length}`;

  // Show stars based on score
  const starElems = resultStars.querySelectorAll(".star");
  let starCount = Math.round((score / QuizQn.length) * 5);

  starElems.forEach((star, i) => {
    if (i < starCount) star.classList.remove("empty");
    else star.classList.add("empty");
  });

  // Result description
  if (score >= 4) {
    resultDescription.innerHTML = "Great job! You passed the HSK 1 Level! You can now move on to HSK 2 quiz";
    nextLevelBtn.style.display = "inline-block"; // show button
  } else if (score === 3) {
    resultDescription.innerHTML = "You're close! Review a bit more and try again.";
    nextLevelBtn.style.display = "none";
  } else {
    resultDescription.innerHTML = "Keep practicing! Review HSK 1 materials before moving on.";
    nextLevelBtn.style.display = "none";
  }
}

// Retake button (called from HTML onclick)
function restartTest() {
  score = 0;
  current = 0;
  selected = false;
  resultScreen.style.display = "none";
  document.getElementById("quiz-inner").style.display = "block";
  document.querySelector(".quiz-container").style.display = "block";
  nextLevelBtn.style.display = "none";
  finishBtn.style.display = "inline-block";
  displayQn();
}

// Optional: handle Next Level click - you can link it somewhere
nextLevelBtn.addEventListener("click", () => {
  window.location.href = "../pages/hsk2.html"; // or wherever your HSK2 test is
});

// Init quiz on page load
displayQn();
