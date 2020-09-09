var nav = document.querySelector("nav");
var homePage = document.getElementById("homePage");
var startQuizButton = document.getElementById("startQuizButton");
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
var quizTimer = document.getElementById("timer");
var quizPage = document.getElementById("quizPage");
var quizCompletePage = document.getElementById("quizCompletePage");
var highScorePage = document.getElementById("highScorePage");
var goHomeButton = document.getElementById("goHomeButton");
var clearHighScoresButton = document.getElementById("clearHighScoresButton");

var pageArray = [homePage, quizPage, quizCompletePage, highScorePage];

var quizArray = [
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

function setupScreen(page){
  for(var i=0; i<pageArray.length; i++){
    if(page === pageArray[i]){
      page.setAttribute("style", "display: block");
    } else{
      pageArray[i].setAttribute("style", "display: none");
    }
  }
}


startQuizButton.addEventListener("click", function () {
  setupScreen(quizPage);  
  startTimer();
});

viewHighScoresButton.addEventListener("click", function () {
  setupScreen(highScorePage);
});

goHomeButton.addEventListener("click", function(){
  setupScreen(homePage);
});

clearHighScoresButton.addEventListener("click", function(){
  
});
