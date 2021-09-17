var timer = 108;
var gameNewBtnEl = document.getElementById('eventWindow');
gameNewBtnEl.innerHTML="<button id='start'>Start Button</button>";
var optionSpot=document.getElementById("options")
var buttonLocation = document.querySelector("#eventWindow");
var count = 0


var question = function () {
gameNewBtnEl.innerHTML="";

questionArray=[
    {q:"what is an apple?", a:"fruit", b:"b", c:"c", d:"d"},
    {q:"What is a carrot?", a:"a",b:"b", c:"vegetable", d:"d"},{},
    {q:"What is a steak?", a:"meat",b:"b", c:"c", d:"d"},{},{},{},
    {q:"What is IceCream?", a:"a",b:"b", c:"c", d:"treat"},{},{},{},{},{},{},
    {q:"What is bread?", a:"a",b:"grain", c:"c", d:"d"}];


var questionDisplay = document.getElementById("question");
questionDisplay.textContent=questionArray[count].q;

var optionListAEl = document.getElementById("a")
var optionListBEl = document.getElementById("b")
var optionListCEl = document.getElementById("c")
var optionListDEl = document.getElementById("d")

optionListAEl.innerHTML="<button>"+ questionArray[count].a +"</button>";
optionListBEl.innerHTML="<button>"+ questionArray[count].b +"</button>";
optionListCEl.innerHTML="<button>"+ questionArray[count].c +"</button>";
optionListDEl.innerHTML="<button>"+ questionArray[count].d +"</button>";

optionListAEl.addEventListener("click", function () {
console.log(count) 
if (count === 0||count === 3){
    count++;
    question();
} else {wrongAnswer()}
});

optionListBEl.addEventListener("click", function () {
console.log(count) 
if (count === 14){
    count++;
    alert("Gameover");
} else {wrongAnswer()}
});
optionListCEl.addEventListener("click", function () {
console.log(count) 
if (count === 1){
    count++;
    question();
} else {wrongAnswer()}
});  
    
optionListDEl.addEventListener("click", function () {
console.log(count) 
if (count === 7){
    count++;
    question();
} else {wrongAnswer()}
});
} 


var countdown = function() {
startButton = document.querySelector("#start")

    var scoreClockEl = document.getElementById("scoreClock")
    timer--;
    scoreClockEl.textContent=timer
   
}

wrongAnswer = function() { 
// wrongAnswerDisplay = 5     
timer= timer -10

var answerDisplay = document.getElementById('eventWindow');
answerDisplay.textContent="Wrong Answer";
answerDisplay.setAttribute("style", "color:var(--secondary-colour");
//wrongAnswerDisplay--;
count++;
question();
}

if (timer ==0){
    console.log("Game Over")
    clearInterval(countdown)
}

var startGame=function(){
setInterval(countdown, 1000);

var optionListAEl = document.createElement("li");
var optionListBEl = document.createElement("li");
var optionListCEl = document.createElement("li");
var optionListDEl = document.createElement("li");

optionListAEl.setAttribute("id", "a")
optionListBEl.setAttribute("id", "b")
optionListCEl.setAttribute("id", "c")
optionListDEl.setAttribute("id", "d")

optionSpot.appendChild(optionListAEl);
optionSpot.appendChild(optionListBEl);
optionSpot.appendChild(optionListCEl);
optionSpot.appendChild(optionListDEl);
question()
};

start.onclick = startGame;



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
