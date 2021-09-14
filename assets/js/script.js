// GIVEN I am taking a code quiz
var timer = 108;
var gameStartBtn = document.getElementById('start');




var countdown = function() {
    var scoreClockEl = document.getElementById("scoreClock")
    timer--;
    scoreClockEl.textContent=timer
    console.log(timer)
//condition where timer is lost by 10
    if (timer == 90){
        timer= timer -10
    }
    if (timer ===0){
        console.log("Game Over")
        clearInterval(startGame)
    }
}

var startGame=function(){
    setInterval(countdown, 1000)
};
console.log(gameStartBtn)
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
