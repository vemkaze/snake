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
  {x:unitSize*4 , y:0},
  {x:unitSize*3 , y:0},
  {x:unitSize*2 , y:0},
  {x:unitSize,y:0},
  {x:0, y:0}
];


window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();


function gameStart(){
  running = true;
  scoreText.textContext = score;
  createFood();
  drawFood();
  nextTick();
};
function nextTick(){
  if(running){
    setTimeout(()=>{
      clearBoard();
      drawFood();
      moveSnake();
      drawSnake();
      checkGameOver();
      nextTick();
    },75);
  }
};
function clearBoard(){
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0,0,gameWidth,gameHeight);
};
function createFood(){
  function randomFood(min,max){
    const randNum = Math.round((Math.random()*(max - min) + min)/ unitSize) * unitSize;
    return randNum;
  }
  foodX = randomFood(0,gameWidth - unitSize);
  foodY = randomFood(0,gameWidth - unitSize);
};
function drawFood(){
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX,foodY,unitSize,unitSize);
};
function moveSnake(){
  const head = {x: snake[0].x + xVelocity,
       y: snake[0].y + yVelocity};
       snake.unshift(head);
       if(snake[0].x == foodX && snake[0].y == foodY){
        score = score + 1;
        scoreText.textContent = score;
        createFood();
      }
       else{
        snake.pop();
       }

};
function drawSnake(){
  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBorder;
  snake.forEach(snakePart =>{
    ctx.fillRect(snakePart.x,snakePart.y,unitSize,unitSize);
    ctx.strokeRect(snakePart.x,snakePart.y,unitSize,unitSize);
  })
};
function changeDirection(event){
   const keyPressed = event.keyCode;
   const UP = 38;
   const DOWN = 40;
   const LEFT = 37;
   const RIGHT = 39;

   const goingUp = (yVelocity == -unitSize);
   const goingDown = (yVelocity == unitSize);
   const goingLeft = (xVelocity == -unitSize);
   const goingRight = (xVelocity == unitSize);

   if (keyPressed == LEFT && !goingRight) {
    xVelocity = -unitSize;
    yVelocity = 0;
  } else if (keyPressed == UP && !goingDown) {
    xVelocity = 0;
    yVelocity = -unitSize;
  } else if (keyPressed == RIGHT && !goingLeft) {
    xVelocity = unitSize;
    yVelocity = 0;
  } else if (keyPressed == DOWN && !goingUp) {
    xVelocity = 0;
    yVelocity = unitSize;
  }
};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};

