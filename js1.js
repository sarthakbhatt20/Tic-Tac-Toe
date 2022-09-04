const userChoice = document.getElementById("your-choice");
const compChoice = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
var audio = new Audio("mixkit-classic-click-1117.wav");
var lost = new Audio("mixkit-losing-bleeps-2026.wav");
var win = new Audio("mixkit-winning-swoosh-2017.wav");
var draw = new Audio("mixkit-boxing-punch-2051.wav");
let random;
let result;
function rock() {
  console.log("rock");
  audio.play();
  userChoice.innerText = document.getElementById("rock").innerHTML;
  randomChocie();
  getResult();
}
function paper() {
  console.log("paper");
  audio.play();
  userChoice.innerText = document.getElementById("paper").innerHTML;
  randomChocie();
  getResult();
}
function scissors() {
  console.log("scissors");
  audio.play();
  userChoice.innerText = document.getElementById("scissors").innerHTML;
  randomChocie();
  getResult();
}
function randomChocie() {
  random = Math.floor(Math.random() * 3);
  console.log(random);

  if (random == 0) {
    console.log("Comp 0");
    compChoice.innerText = "rock";
  } else if (random == 1) {
    console.log("Comp 1");
    compChoice.innerText = "paper";
  } else if (random == 2) {
    console.log("Comp 3");
    compChoice.innerText = "scissors";
  }
}
function getResult() {
  if (compChoice.innerText == userChoice.innerText) {
    result = "its a draw!";
    draw.play();
  } else if (
    compChoice.innerText == "rock" &&
    userChoice.innerText == "paper"
  ) {
    result = "you won!";
    win.play();
  } else if (
    compChoice.innerText == "paper" &&
    userChoice.innerText == "scissors"
  ) {
    result = "you won!";
    win.play();
  } else if (
    compChoice.innerText == "scissors" &&
    userChoice.innerText == "rock"
  ) {
    result = "you won!";
    win.play();
  } else {
    result = "you lost";
    lost.play();
  }
  resultDisplay.innerText = result;
}
