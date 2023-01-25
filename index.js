log = console.log;
var score = 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please Enter your Name: ");
var welcomeMessage = "Welcome ";
var choice = readlineSync.question(
  "Enter start to start and End to Quit Now: "
);
var highestScore = {
  name: "Narendra",
  score: "5",
};
function startQuiz(question, Options, answer) {
  log();
  log(question);
  var userAns = readlineSync.question(Options);
  if (userAns === answer) {
    score += 1;
    log();
    log("You are right ");
    log();
  } else {
    log("Oops! You are wrong!");
    log();
  }
}
var questionList = [
  {
    question: "1. What is my First Name?",
    Options: "a.)Naveen b.)Narendra c.)Jethi d.)Nagendra    ",
    answer: "b",
  },
  {
    question: "2. In which State do I live?",
    Options: "a.)Himanchal_Pradesh b.)Uttarakhand c.)Delhi d.)UP    ",
    answer: "b",
  },
  {
    question: "3. From which University I have completed my Graduation",
    Options:
      "a.)GEHU_Dehradun b.)GEU_Dehradun c.)GEHU_Bhimtal d.)GEHU_Haldwani    ",
    answer: "c",
  },
  {
    question: "4. I  live in which of these city? ",
    Options: "a.)Pithoragarh b.)Haldwani c.)Dehradun d.)Khatima    ",
    answer: "d",
  },
  {
    question: "5. In which place I born?",
    Options: "a.)Khatima b.)Jhankat c.)Pithoragarh d.)None    ",
    answer: "b",
  },
];

function start() {
  for (var i = 0; i < questionList.length; i++) {
    startQuiz(
      questionList[i].question,
      questionList[i].Options,
      questionList[i].answer
    );
  }
}
function showScore() {
  log("Your score is: " + score);
}
function viewHScorer() {
  var userChoice = readlineSync.question(
    "Do you want to see the highest Scorer:    "
  );
  if (userChoice === "yes") {
    log();
    log("Name:" + highestScore.name);
    log("Score: " + highestScore.score);
    log(
      "If you have high score than this then you can send us Screen Shot of your score and we will update it"
    );
  } else {
    process.exit();
  }
}

if (choice === "start") {
  log(welcomeMessage + userName + " to Do you know me Quiz?");
  start();
  showScore();
  viewHScorer();
  process.exit();
} else {
  log("Thank You!");
  process.exit();
}
