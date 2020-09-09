var nav = document.querySelector("nav");
var homePage = document.getElementById("homePage");
var highScorePage = document.getElementById("highScorePage");
var viewHighScoresButton = document.getElementById("viewHighScoresButton");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startQuizButton");


startQuizButton.addEventListener("click", function(){
    if(event.target.matches("button")){
        startTimer();
        homePage.setAttribute("style", "display: none");
    }
});

viewHighScoresButton.addEventListener("click", function(){
    homePage.setAttribute("style", "display: none");
    nav.setAttribute("style", "display: none");

    
});

function startTimer(){
    var counter = 75;
    quizTimer.textContent = counter;
    var timer = setInterval(function(){
        if(counter === 0){
            clearInterval(timer);
        }
        else{
            counter--;
            quizTimer.textContent = counter;
        }
    }, 1000);
}