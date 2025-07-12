



// this is our html selections
const question = document.getElementById("questions");
const buttons = document.querySelectorAll(".btn");
const finishBtn = document.getElementById("finish");
const progressFill = document.getElementById("progress-fill");
const hsklevel=document.getElementsByClassName("hsk-level");

const resultScreen = document.getElementById("result-screen");
const resultLevel = document.getElementById("result-level");
const resultScore = document.getElementById("result-score");
const resultStars = document.getElementById("result-stars");
const resultDescription = document.getElementById("result-description");
const nextLevelBtn = document.getElementById("next-level-btn");
const allLevels = [
  [
    { q: "Which sentence is grammatically correct?", options: ["他是学生", "学生是他", "是他学生", "他学生是"], answer: 0 },
    { q: "What does 我有一本书 mean?", options: ["I have two books", "I don't have a book", "I have a book", "This is a book"], answer: 2 },
    { q: "Choose the best option. 你好吗？", options: ["谢谢", "我很好", "再见!", "不客气"], answer: 1 },
    { q: "What is the Chinese word for 'apple'?", options: ["香蕉 (xiāngjiāo)", "橘子(júzi)", "苹果 (píngguǒ)", "葡萄(pútao)"], answer: 2 },
    { q: "我____一个朋友. Complete the sentence", options: ["在", "和", "不", "有"], answer: 3 },
  ],
  // HSK 2
  [
    { q: "Which sentence is grammatically correct?", options: ["她在教室学习。", "学习她在教室。", "在教室她学习。", "她学习在教室。"], answer: 0 },
    { q: "今天天气很好。What does this mean?", options: ["It’s raining today.", "The weather is bad today.", "The weather is very good today.", "It’s snowing today."], answer: 2 },
    { q: "你吃饭了吗？", options: ["我吃苹果。", "我下午去学校。", "吃了，谢谢。", "我喜欢面条。"], answer: 2 },
    { q: "What is the pinyin for “library”?", options: ["shū diàn (书店)", "tú shū guǎn (图书馆)", "xué xiào (学校)", "yī yuàn (医院)"], answer: 1 },
    { q: "他______开车去上班。", options: ["不", "没", "又", "再"], answer: 0 }
  ],
  // HSK 3
  [
    { q: "Which sentence is grammatically correct?", options: ["我昨天看了一部电影。", "我昨天一部电影看了。", "昨天我看一部电影了。", "我看了昨天一部电影。"], answer: 0 },
    { q: "我想买一本书送给朋友。What does this mean?", options: ["I want to buy a book for a friend.", "I want to borrow a book from a friend.", "My friend wants to buy me a book.", "I don’t like books."], answer: 0 },
    { q: "你的电话号码是多少？", options: ["我今年 20 岁。", "我住在北京。", "我的号码是 138-1234-5678。", "我喜欢运动。"], answer: 2 },
    { q: "What is the synonym for “经常” (jīngcháng)?", options: ["有时", "很少", "常常", "偶尔"], answer: 2 },
    { q: "他_____喜欢唱歌，______喜欢跳舞。", options: ["不但… 而且…", "因为… 所以…", "虽然… 但是…", "如果… 就…"], answer: 0 }
  ],
  // HSK 4
  [
    { q: "Which sentence is grammatically correct?", options: ["他每天早上跑步半小时。", "他每天跑步早上半小时。", "他跑步每天早上半小时。", "他早上每天半小时跑步。"], answer: 0 },
    { q: "虽然下雨，但是他还是去了公园。What does this mean?", options: ["It didn’t rain, so he went to the park.", "Although it rained, he still went to the park.", "He didn’t go to the park because of the rain.", "He likes rain and parks."], answer: 1 },
    { q: "你觉得这个电影怎么样？", options: ["我昨天晚上看的。", "剧情很有趣，值得一看。", "电影院离我家很近。", "我买了两张票。"], answer: 1 },
    { q: "What is the English translation of “避免”?", options: ["avoid", "enjoy", "accept", "forget"], answer: 0 },
    { q: "如果明天______，我们就______去游泳。", options: ["不下雨… 可以", "下雨… 也", "晴天… 不", "下雪… 一定"], answer: 0 }
  ],
  // HSK 5
  [
    { q: "Which sentence is grammatically correct?", options: ["他把房间打扫得干干净净。", "他打扫把房间干干净净。", "把房间他打扫干干净净。", "房间把他打扫干干净净。"], answer: 0 },
    { q: "随着经济的发展，人们的生活水平提高了。What does this mean?", options: ["Life standards improved due to economic development.", "Economic development caused problems for life standards.", "People’s lives became worse as the economy grew.", "The economy developed slowly, so life standards didn’t change."], answer: 0 },
    { q: "你对环境保护有什么看法？", options: ["我每天骑自行车上班。", "环境保护很重要，需要大家一起努力。", "我昨天去了公园。", "我喜欢绿色的衣服。"], answer: 1 },
    { q: "What does “渊博” (yuānbó) describe?", options: ["knowledge", "weather", "clothing", "food"], answer: 0 },
    { q: "他______工作很忙，______每天坚持学习。", options: ["即使… 也…", "既然… 就…", "宁可… 也不…", "与其… 不如…"], answer: 0 }
  ],
  // HSK 6
  [
    { q: "Which sentence is grammatically correct?", options: ["这部小说不仅情节精彩，而且富有哲理。", "这部小说情节不仅精彩，富有哲理而且。", "不仅这部小说情节精彩，而且富有哲理。", "这部小说不仅情节精彩，富有哲理而且。"], answer: 0 },
    { q: "传统文化的传承需要政府和社会的共同努力。What does this mean?", options: ["Only the government should protect traditional culture.", "Both the government and society need to work together to preserve traditional culture.", "Traditional culture is not important anymore.", "Society alone can handle cultural preservation."], answer: 1 },
    { q: "如何应对全球气候变化？", options: ["应该减少碳排放，推广可再生能源。", "我昨天看了一个关于气候的纪录片。", "气候变化和我没关系。", "今天天气很热。"], answer: 0 },
    { q: "What does “因地制宜” mean?", options: ["Adapt measures to local conditions", "Blame problems on the environment", "Suitable for the local climate", "Do things according to personal preference"], answer: 0 },
    { q: "______，科技发展带来了新的挑战。", options: ["不可否认的是", "据说", "相比之下", "换句话说"], answer: 0 }
  ]
];

let currentLevel = 0;
let QuizQn = allLevels[currentLevel];
let score = 0;
let current = 0;
let selected = false;

function displayQn() {  //this is for the question we are using displayqn function
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

  let progress = ((current + 1) / QuizQn.length) * 100;
  progressFill.style.width = progress + "%";

  finishBtn.innerText = current === QuizQn.length - 1 ? "Submit" : "Finish";
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (selected) return;
    selected = true;

    const correctAnswer = QuizQn[current].answer;

    if (index === correctAnswer) {
      score++;
      btn.style.backgroundColor = "#d1fae5";
      btn.style.border = "1px solid #048048";
    } else {
      btn.style.backgroundColor = "#fed7d7";
      btn.style.border = "1px solid #e53e3e";
      buttons[correctAnswer].style.backgroundColor = "#d1fae5";
      buttons[correctAnswer].style.border = "1px solid #048048";
    }

    disableButtons();

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

function disableButtons() {
  buttons.forEach(btn => btn.disabled = true);
}

finishBtn.addEventListener("click", () => {
  showResults();
});

function showResults() {  // this is out result bar 
  document.getElementById("quiz-inner").style.display = "none"; 
  document.querySelector(".quiz-container").style.display = "none";
  resultScreen.style.display = "block";

  resultLevel.innerText = `HSK ${currentLevel + 1}`;
  resultScore.innerText = `You scored ${score} out of ${QuizQn.length}`;

  const starElems = resultStars.querySelectorAll(".star");
  let starCount = Math.round((score / QuizQn.length) * 5);
  starElems.forEach((star, i) => {
    if (i < starCount) star.classList.remove("empty");
    else star.classList.add("empty");
  });

  if (score === QuizQn.length && currentLevel < allLevels.length - 1) {
    resultDescription.innerHTML = `Perfect score! Moving to HSK ${currentLevel + 2}...`;
    nextLevelBtn.style.display = "inline-block";
  } else if (score >= 4) {
    resultDescription.innerHTML = "Great job! You passed!";
    nextLevelBtn.style.display = "inline-block";
  } else if (score === 3) {
    resultDescription.innerHTML = "You're close! Review and try again.";
    nextLevelBtn.style.display = "none";
  } else {
    resultDescription.innerHTML = "Keep practicing!";
    nextLevelBtn.style.display = "none";
  }
}

nextLevelBtn.addEventListener("click", () => {
  if (currentLevel < allLevels.length - 1) {
    currentLevel++;
    hsklevel.innerText= `HSK ${currentLevel + 1}`;
    QuizQn = allLevels[currentLevel];
    restartTest(); //we are calling the restart function whenever we are clicking on next buttons
  }
});

function restartTest() {  //this will reset all the things score,current levels etc
  score = 0;
  current = 0;
  selected = false;
  resultScreen.style.display = "none";
  document.getElementById("quiz-inner").style.display = "block";
  document.querySelector(".quiz-container").style.display = "block";
  nextLevelBtn.style.display = "none";
      document.getElementById("question-level").innerText= `HSK ${currentLevel + 1}`;
  finishBtn.style.display = "inline-block";
  displayQn();
}

// Start quiz on load
displayQn();
