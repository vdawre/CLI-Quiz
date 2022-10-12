var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "John",
    score: 3,
  },

  {
    name: "Jill",
    score: 2,
  },
]

var questions = [{
  question: "What is my favourite color?",
  answer: "black"
}, {
  question: "My favorite superhero would be? ",
  answer: "batman"
},
{
  question: "Where is my hometown?",
  answer: "indore"
},
{
  question: "What is my favourite movie?",
  answer: "interstellar"
},
{
  question: "What is my nationality?",
  answer: "indian"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " do you know Jack");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congrats! Right Answer", score);

  console.log("Check out the high scores: ");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


