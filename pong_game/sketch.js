var paddle1_x, paddle2_x;
var paddle_y;
var ball_x, ball_y; 
var points;
var Xdirection;
var angle;

function setup() {
  createCanvas(720, 400);
  paddle1_x = 20;
  paddle2_x = width - 45;
  paddle_y = 20;
  ball_x = width/2;
  ball_y = height/2;
  points = 0;
  Xdirection = 3;
  angle = 1;
}

function draw() {
  background(200);
  displayPoints();
  
  fill(150);
  rect(paddle1_x, paddle_y, 25, 100);
  rect(paddle2_x, paddle_y, 25, 100);
  ellipse(ball_x, ball_y, 25);
  
  moveBall();
  movePaddles();
  checkForHit();
  
  if(ball_x > width || ball_x < 0) {
    endGame();
  }
}

function displayPoints() {
  fill(90, 90, 250);
  textSize(150);
  text(points,10,370);
}

function moveBall() {
  ball_x += Xdirection;
  
  if(ball_y >= 25 && ball_y <= height-25) {
    ball_y += angle;
  } else {
    angle = -angle;
    ball_y += angle;
  }
}

function movePaddles() {
  if(keyIsDown(UP_ARROW) && paddle_y > 0)
    paddle_y -= 4;
  if(keyIsDown(DOWN_ARROW) && paddle_y < height-100)
    paddle_y += 4;
}

function checkForHit() {
  var d1 = dist(ball_x, ball_y, paddle1_x+12, paddle_y+50);
  var d2 = dist(ball_x, ball_y, paddle2_x+12, paddle_y+50);
  if (d1 < 30 || d2 < 30) {
    points += 1;
    Xdirection = -Xdirection;
    angle = random(5);
  }
}

function endGame() {
  fill(0);
  rect(0 , 0, width, height);
  
  fill("red");
  textSize(100);
  text("GAME OVER", 30, height/2);
}
