// GIVEN I am taking a code quiz
var timer = 108;
var questionId=0
var gameStartBtn = document.getElementById('start');
var answerDisplay = document.getElementById('response');
var questionDisplay = document.getElementById("question");
var optionSpot=document.getElementById("options")

var optionEl = document.createElement("button")
questionArray= [
    {q: "What is an apple?", a: "fruit", b: "Bread", c: "Toy", d: "Candy"},
    {q:"What is a carrot?", a:"vegetables"}
    ]; 


// need to practice making a button
// First you need to tag the id
var buttonLocation = document.querySelector("#eventWindow");
var wrongButton = document.createElement("button");
wrongButton.textContent="Wrong-answer-button";
wrongButton.setAttribute("type", "submit");
buttonLocation.appendChild(wrongButton);


var question = function () {
questionDisplay.textContent="What is an Apple?";
optionListAEl = document.createElement("li");
optionListBEl = document.createElement("li");
optionListCEl = document.createElement("li");
optionListDEl = document.createElement("li");
optionListAEl.innerHTML="<button>Fruit</button>";
optionSpot.appendChild(optionListAEl);
optionListBEl.innerHTML="<button>Bread</button>";
optionSpot.appendChild(optionListBEl);
optionListCEl.innerHTML="<button>Toy</button>";
optionSpot.appendChild(optionListCEl);
optionListDEl.innerHTML="<button>Candy</button>";
optionSpot.appendChild(optionListDEl);

if (optionListAEl.addEventListener("click", function () {
    window.alert("You got it correct!")}));
if (optionListBEl.addEventListener("click", function () {window.alert("You are incorrect!")}
||optionListCEl.addEventListener("click", function () {window.alert("You are incorrect!")}
||optionListDEl.addEventListener("click", function () {window.alert("You are incorrect!")};
   


    // questionDisplay.textContent = questionArray[0].p

// optionItemEl = document.createElement("li");
// optionItemEl.innerHTML = "<button>" + questionArray[0].a + "</button>";
// optionSpot.appendChild(optionItemEl);

// optionEl.textContent = questionArray[0].a
// optionItemEl.appendChild(optionEl)
// optionEl.textContent = questionArray[0].b
// options.appendChild(optionEl)
// optionEl.textContent = questionArray[0].c
// options.appendChild(optionEl)
// optionEl.textContent = questionArray[0].d
// options.appendChild(optionEl)


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
}

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
