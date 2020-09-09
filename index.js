// Home Page Variables
var nav = document.querySelector("nav");
var homePage = document.getElementById("homePage");
var startQuizButton = document.getElementById("startQuizButton");
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
var quizTimer = document.getElementById("timer");

// Quiz Page Variables
var quizPage = document.getElementById("quizPage");
var questionNumber = document.getElementById("questionNumber");
var quizQuestion = document.getElementById("quizQuestion");
var quizButtonChoice1 = document.getElementById("quizButtonChoice1");
var quizButtonChoice2 = document.getElementById("quizButtonChoice2");
var quizButtonChoice3 = document.getElementById("quizButtonChoice3");
var quizButtonChoice4 = document.getElementById("quizButtonChoice4");
var rightOrWrong = document.getElementById("rightOrWrong");

// Quiz Complete Page Variables
var quizCompletePage = document.getElementById("quizCompletePage");

// High Scores Page Variables
var highScorePage = document.getElementById("highScorePage");
var totalScore = document.getElementById("totalScore");
var goHomeButton = document.getElementById("goHomeButton");
var clearHighScoresButton = document.getElementById("clearHighScoresButton");

// Array Variables
var pageArray = [homePage, quizPage, quizCompletePage, highScorePage];
var quizArray = [
  {
    // Quiz Question #1
    question: "Commonly used data types DO NOT include:",
    choice1: ["1. strings", false],
    choice2: ["2. booleans", false],
    choice3: ["3. alerts", true], // Correct Answer
    choice4: ["4. numbers", false]
  },
  {
    // Quiz Question #2
    question:
      "The condition in an if / else statement is enclosed within _____.",
    choice1: ["1. quotes", false],
    choice2: ["2. curly brackets", false],
    choice3: ["3. parentheses", true],// Correct Answer
    choice4: ["4. square brackets", false]
  },
  {
    // Quiz Question #3
    question: "Arrays in JavaScript can be used to store",
    choice1: ["1. numbers and strings", false],
    choice2: ["2. other arrays", false],
    choice3: ["3. booleans", false],
    choice4: ["4. all of the above", true]// Correct Answer
  },
  {
    // Quiz Question #4
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choice1: ["1. commas", false],
    choice2: ["2. curly brackets", false],
    choice3: ["3. quotes", true],// Correct Answer
    choice4: ["4. parentheses", false],
  },
  {
    // Quiz Question #5
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: ["1. JavaScript", false],
    choice2: ["2. terminal / bash", false],
    choice3: ["3. for loops", false],
    choice4: ["4. console.log", true]// Correct Answer
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

function setupQuiz(number){
  rightOrWrong.textContent = "";
  questionNumber.textContent = number;
  quizQuestion.textContent = quizArray[number-1].question;
  quizButtonChoice1.textContent = quizArray[number-1].choice1[0];
  quizButtonChoice2.textContent = quizArray[number-1].choice2[0];
  quizButtonChoice3.textContent = quizArray[number-1].choice3[0];
  quizButtonChoice4.textContent = quizArray[number-1].choice4[0];
}

startQuizButton.addEventListener("click", function () {
  setupQuiz(1);
  setupScreen(quizPage);
  startTimer();
});

quizButtonChoice1.addEventListener("click", function(){
  
});

quizButtonChoice2.addEventListener("click", function(){
  
});

quizButtonChoice3.addEventListener("click", function(){
  
});

quizButtonChoice4.addEventListener("click", function(){
  
});

viewHighScoresButton.addEventListener("click", function () {
  setupScreen(highScorePage);
});

goHomeButton.addEventListener("click", function(){
  setupScreen(homePage);
});

clearHighScoresButton.addEventListener("click", function(){
  
});
