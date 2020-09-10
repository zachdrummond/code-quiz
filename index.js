// Home Page Variables
var nav = document.querySelector("nav");
var homePage = document.getElementById("homePage");
var startQuizButton = document.getElementById("startQuizButton");
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
var quizTimer = document.getElementById("quizTimer");
var quizTimerCounter = 0;
var interval;

// Quiz Page Variables
var quizPage = document.getElementById("quizPage");
var questionNumber = document.getElementById("questionNumber");
var quizQuestion = document.getElementById("quizQuestion");
var quizButtonChoicesArray = [
  document.getElementById("quizButtonChoice1"),
  document.getElementById("quizButtonChoice2"),
  document.getElementById("quizButtonChoice3"),
  document.getElementById("quizButtonChoice4"),
];
var rightOrWrong = document.getElementById("rightOrWrong");

// Quiz Complete Page Variables
var quizCompletePage = document.getElementById("quizCompletePage");
var finalScoreDisplay = document.getElementById("finalScoreDisplay");
var userInitials = document.getElementById("userInitials");
var userInitialsArray = [];
var submitInitialsButton = document.getElementById("submitInitialsButton");

// High Scores Page Variables
var highScorePage = document.getElementById("highScorePage");
var highScoreDisplay = document.getElementById("highScoreDisplay");
var highScoreArray = [];
var score = 0;
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
    choice4: ["4. numbers", false],
  },
  {
    // Quiz Question #2
    question:
      "The condition in an if / else statement is enclosed within _____.",
    choice1: ["1. quotes", false],
    choice2: ["2. curly brackets", false],
    choice3: ["3. parentheses", true], // Correct Answer
    choice4: ["4. square brackets", false],
  },
  {
    // Quiz Question #3
    question: "Arrays in JavaScript can be used to store",
    choice1: ["1. numbers and strings", false],
    choice2: ["2. other arrays", false],
    choice3: ["3. booleans", false],
    choice4: ["4. all of the above", true], // Correct Answer
  },
  {
    // Quiz Question #4
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choice1: ["1. commas", false],
    choice2: ["2. curly brackets", false],
    choice3: ["3. quotes", true], // Correct Answer
    choice4: ["4. parentheses", false],
  },
  {
    // Quiz Question #5
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: ["1. JavaScript", false],
    choice2: ["2. terminal / bash", false],
    choice3: ["3. for loops", false],
    choice4: ["4. console.log", true], // Correct Answer
  },
];

// Starts the Quiz Timer
function startTimer() {
  quizTimerCounter = 75;
  quizTimer.textContent = quizTimerCounter;
  interval = setInterval(function () {
    if (quizTimerCounter === 0) {
      endQuiz();
    } else {
      quizTimerCounter--;
      quizTimer.textContent = quizTimerCounter;
    }
  }, 1000);
}

// Displays the correct page and hides the other pages
function setupScreen(page) {
  for (var i = 0; i < pageArray.length; i++) {
    if (page === pageArray[i]) {
      page.setAttribute("style", "display: block");
    } else {
      pageArray[i].setAttribute("style", "display: none");
    }
  }
}

// Displays the quiz page and fills it with the questions and choices
function setupQuiz(number) {
  questionNumber.textContent = number;
  quizQuestion.textContent = quizArray[number - 1].question;
  quizButtonChoicesArray[0].textContent = quizArray[number - 1].choice1[0];
  quizButtonChoicesArray[1].textContent = quizArray[number - 1].choice2[0];
  quizButtonChoicesArray[2].textContent = quizArray[number - 1].choice3[0];
  quizButtonChoicesArray[3].textContent = quizArray[number - 1].choice4[0];
}

// Finds the right answer
function correctAnswer(id) {
  var correctAnswer = "";
  var number = parseInt(questionNumber.textContent) - 1;
  if (quizArray[number].choice1[1] === true) {
    correctAnswer = "quizButtonChoice1";
  } else if (quizArray[number].choice2[1] === true) {
    correctAnswer = "quizButtonChoice2";
  } else if (quizArray[number].choice3[1] === true) {
    correctAnswer = "quizButtonChoice3";
  } else if (quizArray[number].choice4[1] === true) {
    correctAnswer = "quizButtonChoice4";
  }

  // If the user guesses the correct answer, add to score
  if (id === correctAnswer) {
    score += 10;
    commentary(true);
  } else { // If the user guesses the incorrect answer, decrease time unless it is less than 15
    if (quizTimerCounter < 15) {
      endQuiz();
    } else {
      quizTimerCounter -= 15;
      commentary(false);
    }
  }

  // If the user hasn't reached question 5, setup the next quiz page. Otherwise, end the quiz.
  if (questionNumber.textContent !== "5") {
    questionNumber.textContent++;
    setupQuiz(questionNumber.textContent);
  } else {
    endQuiz();
  }
}

// Adds comments to the user's responses
function commentary(boolean) {
  if (boolean === true) {
    rightOrWrong.textContent = "Correct Answer!";
  } else {
    rightOrWrong.textContent = "Wrong Answer!";
  }
}

// Ends the quiz, stops the timer, and displays the Quiz Complete Page
function endQuiz() {
  clearInterval(interval);
  quizTimer.textContent = "0";
  finalScoreDisplay.textContent = score;
  setupScreen(quizCompletePage);
}

// Gets the scores from the local storage and displays them on the High Score Page
function getHighScores() {
  var storedUserInitials = JSON.parse(localStorage.getItem("User Initials"));
  var storedHighScores = JSON.parse(localStorage.getItem("Score"));

  if ((storedUserInitials !== null) & (storedHighScores !== null)) {
    userInitialsArray = storedUserInitials;
    highScoreArray = storedHighScores;

    for (var i = 0; i < userInitialsArray.length; i++) {
      var p = document.createElement("p");
      p.textContent = userInitialsArray[i] + " : " + highScoreArray[i];
      p.setAttribute("class", "alert alert-primary");
      highScoreDisplay.append(p);
    }
  }
}

// Stores the user's initials into local storage and displays the High Score Page
function submitInitials() {
  if (userInitials.value === "") {
    alert("You must enter your initials.");
  } else if (score === 0) {
    setupScreen(highScorePage);
  } else {
    userInitialsArray.push(userInitials.value);
    highScoreArray.push(score);
    localStorage.setItem("User Initials", JSON.stringify(userInitialsArray));
    localStorage.setItem("Score", JSON.stringify(highScoreArray));
    getHighScores();
    setupScreen(highScorePage);
  }
}

//The Button that starts the Quiz
startQuizButton.addEventListener("click", function () {
  score = 0;
  setupQuiz(1);
  setupScreen(quizPage);
  startTimer();
});

// Adds a button to each Quiz Choice
for (var i = 0; i < quizButtonChoicesArray.length; i++) {
  quizButtonChoicesArray[i].addEventListener("click", function () {
    event.stopPropagation();
    correctAnswer(this.id);
  });
}

// View High Scores Button - Displays High Score Page
viewHighScoresButton.addEventListener("click", function () {
  setupScreen(highScorePage);
});

// Go Home Button - Displays the Home Page
goHomeButton.addEventListener("click", function () {
  setupScreen(homePage);
});

// Clear High Scores Button - Clears the scores from local storage
clearHighScoresButton.addEventListener("click", function () {
  localStorage.clear();
  highScoreDisplay.textContent = "";
});

// Submit Initials Button - Allows the user to submit his/her initials
submitInitialsButton.addEventListener("click", function () {
  event.preventDefault();
  submitInitials();
});
