var timer = 100;
var gameNewBtnEl = document.getElementById("eventWindow");
gameNewBtnEl.innerHTML = "<button id='start'>Start Button</button>";
var optionSpot = document.getElementById("options");
var buttonLocation = document.querySelector("#eventWindow");
var hideScoreEl = document.getElementById("hsPage");
var count = -1;

var question = function () {
  gameNewBtnEl.innerHTML = "";
  count++;
  questionArray = [
    {
      q: "In the Box Model, where is the area where content is displayed?",
      a: "Content box",
      b: "Padding box",
      c: "Border box",
      d: "Margin box",
    },
    {
      q: "Which justify-content property value is being described? -items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.",
      a: "Center",
      b: "Space-between",
      c: "Space-around",
      d: "Space-evenly",
    },
    {
      q: "Which Java Script Comparison Operator means not equal value or not equal type?",
      a: "!==",
      b: "==",
      c: "===",
      d: "!=",
    },
    {
      q: "var fruit = ['banana', 'apple', 'avocado', 'mango', 'orange', 'grape'] Which one is fruit[4]?",
      a: "avocado",
      b: "grape",
      c: "mango",
      d: "orange",
    },
    {
      q: "DOM stands for?",
      a: "Direction Output Mobile",
      b: "Document Object Model",
      c: "Directory Object Module",
      d: "Development Mockup",
    },
    {},
  ];

  var questionDisplay = document.getElementById("question");
  questionDisplay.textContent = questionArray[count].q;

  var optionListAEl = document.getElementById("a");
  var optionListBEl = document.getElementById("b");
  var optionListCEl = document.getElementById("c");
  var optionListDEl = document.getElementById("d");

  optionListAEl.innerHTML = "<button>" + questionArray[count].a + "</button>";
  optionListBEl.innerHTML = "<button>" + questionArray[count].b + "</button>";
  optionListCEl.innerHTML = "<button>" + questionArray[count].c + "</button>";
  optionListDEl.innerHTML = "<button>" + questionArray[count].d + "</button>";

  if (count === 5) {
    optionListAEl.remove();
    optionListBEl.remove();
    optionListCEl.remove();
    optionListDEl.remove();
    return;
  }

  optionListAEl.onclick = function () {
    if (count === 1 || count === 3 || count === 4) {
      wrongAnswer();
    } else {
      rightAnswer();
    }
    console.log(count);
    question();
  };
  optionListBEl.onclick = function () {
    if (count === 0 || count === 1 || count === 2 || count === 3) {
      wrongAnswer();
    } else {
      rightAnswer();
    }
    console.log(count);
    question();
  };
  optionListCEl.onclick = function () {
    if (count === 0 || count === 2 || count === 3 || count === 4) {
      wrongAnswer();
    } else {
      rightAnswer();
    }
    console.log(count);
    question();
  };
  optionListDEl.onclick = function () {
    if (count === 0 || count === 1 || count === 2 || count === 4) {
      wrongAnswer();
    } else {
      rightAnswer();
    }

    console.log(count);
    question();
  };
};

var endGame = function () {
  endScreenEl = document.getElementById("question");
  endScreenEl.textContent = "Your final score was " + timer;
  var playerNameForm = document.createElement("form");
  var playerNameLabel = document.createElement("h2");
  playerNameLabel.textContent = "Enter your initials: ";
  var playerNameInput = document.createElement("input");
  playerNameInput.setAttribute("id", "initial");
  playerNameInput.setAttribute("placeholder", "Ex. AL");
  var playerNameSubmit = document.createElement("button");
  playerNameSubmit.setAttribute("type", "submit");
  playerNameSubmit.textContent = "Submit Score";
  playerNameSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initial").value;

    localStorage.setItem("score", timer);
    localStorage.setItem("initials", initials);
    highScore();
  });

  playerNameForm.appendChild(playerNameLabel);
  playerNameForm.appendChild(playerNameInput);
  playerNameForm.appendChild(playerNameSubmit);
  endScreenEl.appendChild(playerNameForm);
};

var highScore = function () {
  var nextPage = document.getElementById("question");
  nextPage.innerHTML = "High Score";

  var name = localStorage.getItem("initials");
  var score = localStorage.getItem("score");
  var listItemEl = document.createElement("li");
  listItemEl.textContent = name + " score of " + score;
  listItemEl.setAttribute("id", "scoreBoard");
  options.appendChild(listItemEl);

  var insertToken = document.getElementById("eventWindow");
  var quarter = document.createElement("button");
  quarter.setAttribute("id", "playerReady");
  quarter.textContent = "Try Again";
  insertToken.appendChild(quarter);
  playerReady.addEventListener("click", function () {
    timer = 100;
    count = -1;
    startGame();
  });

  var reset = document.createElement("button");
  reset.innerHTML = "<button id='resetScore'>Reset Scores</button>";
  insertToken.appendChild(reset);
  reset.addEventListener("click", function () {
    var deleted = document.getElementById("options");
    deleted.innerHTML = " ";
  });
};

wrongAnswer = function () {
  timer = timer - 10;
  shotClock = 1;

  wrong = setInterval(function () {
    if (shotClock <= 0) {
      clearInterval(wrong);
      return;
    }
    var answerDisplayEl = document.getElementById("eventWindow");
    var onscreenEl = document.createElement("h3");
    onscreenEl.textContent = "Wrong answer";
    onscreenEl.setAttribute("style", "color:var(--secondary-colour");
    onscreenEl.setAttribute("id", "wrongSign");
    answerDisplayEl.appendChild(onscreenEl);
    shotClock--;

    setTimeout(function () {
      onscreenEl.remove();
    }, 1000);
  }, 1000);
};

rightAnswer = function () {
  shotClock = 1;

  wrong = setInterval(function () {
    if (shotClock <= 0) {
      clearInterval(wrong);
      return;
    }
    var answerDisplayEl = document.getElementById("eventWindow");
    var onscreenEl = document.createElement("h3");
    onscreenEl.textContent = "Correct answer";
    onscreenEl.setAttribute("style", "color:var(--secondary-colour");
    onscreenEl.setAttribute("id", "wrongSign");
    answerDisplayEl.appendChild(onscreenEl);
    shotClock--;

    setTimeout(function () {
      onscreenEl.remove();
    }, 1000);
  }, 1000);
};

var startGame = function () {
  var optionSpot = document.getElementById("options");
  var optionListAEl = document.createElement("li");
  var optionListBEl = document.createElement("li");
  var optionListCEl = document.createElement("li");
  var optionListDEl = document.createElement("li");

  optionListAEl.setAttribute("id", "a");
  optionListBEl.setAttribute("id", "b");
  optionListCEl.setAttribute("id", "c");
  optionListDEl.setAttribute("id", "d");

  optionSpot.appendChild(optionListAEl);
  optionSpot.appendChild(optionListBEl);
  optionSpot.appendChild(optionListCEl);
  optionSpot.appendChild(optionListDEl);
  countdown();
  question();
};

var countdown = function () {
  var clock = setInterval(function () {
    var scoreClock = document.getElementById("scoreClock");
    console.log(count);
    if (count > 4 || timer <= 0) {
      clearInterval(clock);
      endGame();
      return;
    }
    if (timer >= 1) {
      timer--;
      scoreClock.textContent = "You have " + timer + " second(s) left";
    }
  }, 1000);
};
start.onclick = startGame;
hideScoreEl.onclick = function () {
  highScore();
};
