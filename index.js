var frontPage = document.getElementById("frontPage");
var section = document.getElementById("section");
var highScores = document.getElementById("highScores");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startQuizButton");

startQuizButton.addEventListener("click", function(){
    if(event.target.matches("button")){
        startTimer();
        frontPage.setAttribute("style", "display: none");
    }
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
