var nav = document.querySelector("nav");
var homePage = document.getElementById("homePage");
var highScorePage = document.getElementById("highScorePage");
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startQuizButton");

var array = [
  {
    question1: "Commonly used data types DO NOT include:",
    choice1: "1. strings",
    choice2: "2. booleans",
    correctAnswer: "3. alerts",
    choice4: "4. numbers",
  },
  {
    question2:
      "The condition in an if / else statement is enclosed within _____.",
    choice1: "1. quotes",
    choice2: "2. curly brackets",
    correctAnswer: "3. parentheses",
    choice4: "4. square brackets",
  },
  {
    question3: "Arrays in JavaScript can be used to store",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. booleans",
    correctAnswer: "4. all of the above",
  },
  {
    question4:
      "String values must be enclosed within _____ when being assigned to variables.",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    correctAnswer: "3. quotes",
    choice4: "4. parentheses",
  },
  {
    question5:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2. terminal / bash",
    choice3: "3. for loops",
    correctAnswer: "4. console.log",
  },
];

startQuizButton.addEventListener("click", function () {
  if (event.target.matches("button")) {
    startTimer();
    homePage.setAttribute("style", "display: none");
  }
});

viewHighScoresButton.addEventListener("click", function () {
  homePage.setAttribute("style", "display: none");
  nav.setAttribute("style", "display: none");
});

function startTimer() {
  var counter = 75;
  quizTimer.textContent = counter;
  var timer = setInterval(function () {
    if (counter === 0) {
      clearInterval(timer);
    } else {
      counter--;
      quizTimer.textContent = counter;
    }
  }, 1000);
}
