var readlineSync = require('readline-sync');
const username = readlineSync.question("Hello, Hope you are doing good! \nWhat is your name? \n")

console.log(`Hey ${username} Get ready to place the quiz!\n`)

let score = 0;

function play(question, ans){
  let answer = readlineSync.question(`${question} \n`)
  if(answer === ans){
    score = score + 1;
    console.log("Your answer is correct \n")
  } else{
    console.log(`Oops, the answer you told is incorrect. \nCorrect is answer is ${ans}`)
  }
}

const questions = [
  {
    "question": "Am I greater than 25? ",
    "answer": "no"
  },
  {
    "question": "Do I like replit?",
    "answer": "yes"
  },
  {
    "question": "Which is my favourite movie?",
    "answer": "endgame"
  },
  {
    "question": "Which is my favourite phone?",
    "answer": "asus"
  },
  {
    "question": "Am I half vegetarian, means i eat only eggs?",
    "answer": "yes"
  },
  {
    "question": "What is the name of my girlfriend?",
    "answer": "doesn't exist"
  },
]

for(let i = 0; i < questions.length; i++){
   play(questions[i].question, questions[i].answer)
}
console.log(`You are awesome because your FINAL Score is : ${score} `)

