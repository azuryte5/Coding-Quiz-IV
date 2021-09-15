// GIVEN I am taking a code quiz
var timer = 108;
var gameStartBtn = document.getElementById('start');
var answerDisplay = document.getElementById('response')
var questionDisplay = document.getElementById("question");
questionDisplay.textContent="";

// need to practice making a button
// First you need to tag the id
var buttonLocation = document.querySelector("#eventWindow");
var wrongButton = document.createElement("button");
wrongButton.textContent="Wrong-answer-button";
wrongButton.setAttribute("type", "submit");
buttonLocation.appendChild(wrongButton);


var question = function () {
questionArray= ["What is an apple?", "What is a carrot?"]   

for (var i=0; i >= questionArray.length; i++){

questionArray = document.createElement("h2");
questionArray.innerHTML='questionArray[i]';
questionDisplay.appendChild(questionArray);
}}
var countdown = function() {
    var scoreClockEl = document.getElementById("scoreClock")
    timer--;
    scoreClockEl.textContent=timer
    console.log(timer)
}

// condition where timer is lost by 10
//  OH silly ADD the nameOfTheButton.addeventlistener (It will listen to just that) 
wrongButton.addEventListener("click", function wrong () {   
 console.log(wrongButton)
 console.dir(wrongButton)
 timer= timer -10
 answerDisplay.textContent="Wrong Answer"
})

if (timer <=0){
    console.log("Game Over")
    clearInterval(startGame)
}

var startGame=function(){
    setInterval(countdown, 1000);
    question()
};

gameStartBtn.onclick = startGame;



//var counter = 10
// var countdown = function (){
//     counter--;
//       console.log(counter);
//   if (counter === 0) {
//         console.log("blastoff");
//         clearInterval(startCountdown);
//     };
// };
// var startCountdown = setInterval(countdown, 1000);
// WHEN I click the start button
//button will be qued to start 
// [ ]THEN a timer starts and I am presented with a question
// intervals and ticking down
// WHEN I answer a question
// hover elements, array and click function 
// [ ]THEN I am presented with another question

// WHEN I answer a question incorrectly

// [ ]THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// [ ]THEN the game is over

// WHEN the game is over

// [ ]THEN I can save my initials and score
