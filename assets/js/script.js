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

questionArray=[
    { q:"what is an apple?", a: "fruit", b: "Bread", c: "Toy", d: "Candy"},
    {q:"What is a carrot?", a:"vegetables", b: "Love", c: "Nature", d: "Lampost"},
    {q:"This is a placeholder for question3", a:"Oh no", b:"This one", c:"Join in", d:"I messed up"},
    {q:"I miss civ 5", a:"Not this one", b:"Yes this one", c:"Can I code", d:"Keep trying"},
    {q:"This is the last question!", a:"No it's d", b:"I'm a d", c:"I've got no culture", d:"Click me" }
]



var question = function (count) {
var rank = count
gameNewBtnEl.innerHTML="";
questionArray= [
    {q: "What is an apple?", a: "fruit", b: "Bread", c: "Toy", d: "Candy"},
    {q:"What is a carrot?", a:"vegetables"}
    ]; 
var questionDisplay = document.getElementById("question");
questionDisplay.textContent=questionArray[rank].q;
// THis is KEY!!! OMG!
var optionListAEl = document.createElement("li");
var optionListBEl = document.createElement("li");
var optionListCEl = document.createElement("li");
var optionListDEl = document.createElement("li");
optionListAEl.innerHTML="<button id='a'>Bum</button>";
optionSpot.appendChild(optionListAEl);
optionListBEl.innerHTML="<button id='b'>Bread</button>";
optionSpot.appendChild(optionListBEl);
optionListCEl.innerHTML="<button id='c'>Toy</button>";
optionSpot.appendChild(optionListCEl);
optionListDEl.innerHTML="<button id='d'>Candy</button>";
optionSpot.appendChild(optionListDEl);

var gameButtonAEl=document.getElementById('a')
var gameButtonBEl=document.getElementById('b')
var gameButtonCEl=document.getElementById('c')
var gameButtonDEl=document.getElementById('d')


gameButtonAEl.addEventListener("click", test =function(){count++;return})
gameButtonBEl.addEventListener("click", test =function(){count++;return})
gameButtonCEl.addEventListener("click", test =function(){count++;return})
gameButtonDEl.addEventListener("click", test =function(){count++;return})


}
var isThatYourFinalAnswer = function () {

}
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
var count = 0   
for (var i=0;i >= 5; i++)    
console.log(count)
question(count)

console.log(count)
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
