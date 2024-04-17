const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.getElementById("scoreText");
const resetBtn = document.getElementById("resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "yellow";
const snakeBorder = "black";
const foodColor = "green0";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
  {x:unitSize*4 , Y:0},
  {x:unitSize*3 , y:0},
  {X:unitSize*2 , y:0},
  {x:unitSize,y:0},
  {X:0, y:0}
]

window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBOard(){};
function createFood(){
  function randomFood(min,max){
    const randNum = Math.round((Math.random()*(max - min) + min)/ unitSize) * unitSize;
    return randNum;
  }
};
function drawFood(){};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

