const GAME_SPEED = 100;
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = 'blue';
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
  ]

let score = 0;

let changingDirection = false;

let foodX;

let foodY;

let vx = 10;

let vy = 0;

const canvas = document.getElementById('Canvas');

const ctx = Canvas.getContext("2d");

blankCanvas();

function blankCanvas() {
  
  ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;

  ctx.strokestyle = CANVAS_BORDER_COLOUR;

  
  ctx.fillRect(0, 0, Canvas.width, Canvas.height);
  
  ctx.strokeRect(0, 0, Canvas.width, Canvas.height);

}

function drawFood() {
  ctx.fillStyle = FOOD_COLOUR;
  ctx.strokestyle = FOOD_BORDER_COLOUR;
  ctx.fillRect(foodX, foodY, 10, 10); 
  ctx.strokeRect(foodX, foodY, 10, 10);
}

function advanceSnake() {
  const head = {x: snake[0].x === foodX && snake[0].y === foodY};
  if (didEatFood){
    score = score + 10;
    document.getElementById('score').innerHTML = score;
    
  createFood();
  } else {
    snake.pop();
  }
}

function randomTen(min, max) {
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {

  foodX = randomTen(0, gameCanvas.width - 10);
  
  foodY = randomTen(0, gameCanvas.height - 10);

  
  snake.forEach(function isFoodOnSnake(part) {
    const foodIsoNsnake = part.x == foodX && part.y == foodY;
    if (foodIsoNsnake) createFood();
  });
}



