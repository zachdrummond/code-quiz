var frontPage = document.getElementById("frontPage");
var section = document.getElementById("section");
var highScores = document.getElementById("highScores");
var timer = document.getElementById("timer");
var startQuizButton = document.getElementById("startQuizButton");

startQuizButton.addEventListener("click", function(){
    if(event.target.matches("button")){
        //Start the Timer
        frontPage.setAttribute("style", "display: none");
    }
});
