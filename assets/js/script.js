// GIVEN I am taking a code quiz
var timer = 108;
var gameNewBtnEl = document.getElementById('eventWindow');
gameNewBtnEl.innerHTML="<button id='start'>Start Button</button>";
var answerDisplay = document.getElementById('response');
var optionSpot=document.getElementById("options")

// need to practice making a button
// First you need to tag the id
var buttonLocation = document.querySelector("#eventWindow");
var wrongButton = document.createElement("button");
wrongButton.textContent="Wrong-answer-button";
wrongButton.setAttribute("type", "submit");
buttonLocation.appendChild(wrongButton);
var count = 0


var question = function () {
gameNewBtnEl.innerHTML="";

questionArray=[
    {q:"what is an apple?", a:"fruit", b:"b", c:"c", d:"d"},
    {q:"What is a carrot?", a:"vegetable",b:"b", c:"c", d:"d"},
    {q:"What is a steak?", a:"meat",b:"b", c:"c", d:"d"},
    {q:"What is IceCream?", a:"treat",b:"b", c:"c", d:"d"},
    {q:"What is bread?", a:"grain",b:"b", c:"c", d:"d"}];

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


var gameButtonAEl = document.getElementById('a')
// var gameButtonAEl=document.getElementById('a')
// // var gameButtonBEl=document.getElementById('b')
// // var gameButtonCEl=document.getElementById('c')
// // var gameButtonDEl=document.getElementById('d')


// gameButtonAEl.addEventListener("click", function() {count++; question()})
// // gameButtonBEl.addEventListener("click", function() {count++; question()})
// // gameButtonCEl.addEventListener("click", function() {count++; question()})
// // gameButtonDEl.addEventListener("click", function() {count++; question()})
// // console.log(count)

}



 // questionDisplay.textContent="";
// console.log(questionArray)
// for (var i=0; i < 1; i++){    
// questionDisplay.setAttribute("h2", questionArray[i].q)
// var buttonA = document.createElement("button");
// buttonA.setAttribute()
// var buttonB =document.createElement("button");
// buttonB.setAttribute()
// var buttonC =document.createElement("button");
// buttonC.setAttribute()
// var buttonD =document.createElement("button");
// buttonD.setAttribute()
// }


var countdown = function() {
startButton = document.querySelector("#start")

    var scoreClockEl = document.getElementById("scoreClock")
    timer--;
    scoreClockEl.textContent=timer
   // console.log(timer)
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
