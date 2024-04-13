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