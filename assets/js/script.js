var timer = 108;
var gameNewBtnEl = document.getElementById('eventWindow');
gameNewBtnEl.innerHTML="<button id='start'>Start Button</button>";
var optionSpot=document.getElementById("options")
var buttonLocation = document.querySelector("#eventWindow");
var count = -1


var question = function () {
gameNewBtnEl.innerHTML="";
count++

questionArray=[
    {q:"what is an apple?", a:"fruit", b:"b", c:"c", d:"d"},
    {q:"What is a carrot?", a:"a",b:"b", c:"vegetable", d:"d"},
    {q:"What is a steak?", a:"meat",b:"b", c:"c", d:"d"},
    {q:"What is IceCream?", a:"a",b:"b", c:"c", d:"treat"},
    {q:"What is bread?", a:"a",b:"grain", c:"c", d:"d"},{}]


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

if (count === 5){
    optionListAEl.remove();
    optionListBEl.remove();
    optionListCEl.remove();
    optionListDEl.remove();
    clearInterval(countdown); endGame()}

optionListAEl.onclick = function (){
    if (count === 1|| count === 3 || count === 4){
    wrongAnswer()}    
    console.log(count); question()
   
}
optionListBEl.onclick = function (){
    if (count === 0|| count === 1 || count === 2|| count === 3){
    wrongAnswer()}    
    console.log(count); question()

}
optionListCEl.onclick = function (){
    if (count === 0|| count === 2 || count === 3|| count === 4){
    wrongAnswer()}    
    console.log(count); question()

}
optionListDEl.onclick = function (){
    if (count === 0|| count === 1 || count === 2|| count === 4){
    wrongAnswer()}    
    console.log(count); question()
   
}}

var endGame = function() {
var hidescore = document.getElementById("toBeHidden")
    hidescore.setAttribute("style", "color:var(--secondary-colour")
    endScreenEl = document.getElementById("question");
    endScreenEl.textContent = "Your final score was " + timer;
var playerNameForm = document.createElement("form");
var playerNameLabel = document.createElement("label");
var playerNameInput = document.createElement("input");
var playerNameSubmit = document.createElement("input");
  playerNameForm.appendChild(playerNameLabel);
  playerNameForm.appendChild(playerNameInput);
  playerNameForm.appendChild(playerNameSubmit);
  document.getElementById("question").appendChild(playerNameForm);
}


wrongAnswer = function() {    
timer = timer -10
var answerDisplayEl = document.getElementById('eventWindow');
var onscreenEl = document.createElement("h2");
onscreenEl.textContent="Wrong answer";
onscreenEl.setAttribute("style", "color:var(--secondary-colour");
answerDisplayEl.appendChild(onscreenEl)
//wrongAnswerDisplay, Not displaying but it is running;
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

if (timer >= 1) {
    clearInterval(countdown)}
if (count >= 5)
    clearInterval(countdown)};

start.onclick = startGame;


function countdown(){
   if (timer >= 0) {
      scoreClock.textContent ='You have ' + timer + ' second(s) left';
      timer--;
    }
  };

