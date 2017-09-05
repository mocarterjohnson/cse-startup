var bgColor = 'blue';
var noseColor = 'grey';
var isAsleep = false;

function setup() {
  createCanvas(500, 500);

}

function draw() {
  backgroundSetup();
  
  mouseFollow();

  head();
  body();

}

function backgroundSetup() {
  background(bgColor);
  mountain(100, 300, 200);
  mountain(0, 200, 400);
  mountain(400, 100, 400);
  mountain(200, 250, 150);
  cloud(250, 150, 1);
  cloud(100, 100, .5);
  cloud(450, 75, -.75);
}

function mouseFollow() {
  var originX = mouseX - 280;
  var originY = mouseY - 270;
  translate(originX, originY);
}

function eyes(sleep) {
  if(sleep == true){
    //closed eyes
    fill(200, 0, 50);
    arc(210, 180, 60, 60, PI, 0, CHORD);
    arc(350, 180, 60, 60, PI, 0, CHORD);
  }else {
    //eyes if awake
    openEyes(210, 350);
  }
}

function openEyes(x1, x2) {
  fill('white');
    ellipse(x1, 165, 60, 60);
    ellipse(x2, 165, 60, 60);
    fill('black');
    ellipse(x1+10, 165, 40, 40);
    ellipse(x2+10, 165, 40, 40);
}

function nose() {
  //nose
  fill(noseColor);
  rect(280, 205, 15, 15);
}

function ears() {
  //ears
  fill('red');
  triangle(160, 40, 220, 80, 160, 160);
  triangle(400, 40, 340, 80, 400, 160);
  fill(245);
  triangle(180, 80, 180, 120, 200, 90);
  triangle(380, 80, 360, 90, 380, 120);
}

function head() {
  //head
  fill('red');
  noStroke();
  ellipse(280, 160, 240, 200);
  eyes(isAsleep);
  nose();
  ears();
}

function tail() {
  //tail
  fill(245);
  ellipse(110, 250, 45, 45);
}

function legs(x1, x2) {
  //legs
  fill(245);
  rect(x1, 340, 40, 100, 20);
  rect(x2, 340, 40, 100, 20);
}

function feet(x1, x2) {
  //feet
  fill('grey');
  ellipse(x1, 450, 80, 25);
  ellipse(x2, 450, 80, 25);
}

function body() {
  //body
  fill('red');
  triangle(280, 260, 160, 420, 400, 420);
  ellipse(160, 340, 160, 160);
  tail();
  legs(220, 310);
  feet(230, 340);
}

function keyPressed() {
  if(keyCode === ENTER) {
    noseColor = color(random(256), random(256), random(256));
  }
}

function mousePressed() {
  if(isAsleep == false){
    isAsleep = true;
  } else {
    isAsleep = false;
  }
}

function hill(x, y, w, h) {
  fill(color(0, 255, 0));
  arc(x+(w/2), y, w, h, PI, 0, PIE);
}

function mountain(x, y, w) {
  fill(150);
  triangle(x, y, x-(w/2), 500, x+(w/2), 500);
}

function cloud(x, y, ratio) {
  fill(255);
  if(ratio > 0) {
    ellipse(x, y, 200*ratio, 70*ratio);
    ellipse(x+(90*ratio), y-(15*ratio), 50*ratio, 40*ratio);
    ellipse(x-(30*ratio), y-(30*ratio), 80*ratio, 80*ratio);
    ellipse(x+(50*ratio), y-(50*ratio), 95*ratio, 92*ratio);
  } else {
    ellipse(x, y, 200*ratio, 70*ratio);
    ellipse(x+(90*ratio), y-(15*-ratio), 50*ratio, 40*ratio);
    ellipse(x-(30*ratio), y-(30*-ratio), 80*ratio, 80*ratio);
    ellipse(x+(50*ratio), y-(50*-ratio), 95*ratio, 92*ratio);
  }
}


