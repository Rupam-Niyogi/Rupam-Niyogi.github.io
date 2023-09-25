// Colors and Canvases Program
// Rupam Niyogi
// September 13th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let ballx, bally, ballsize;
let xspeed, yspeed;
let overlay;
let colorA;
let colorB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
  ballx = width / 2;
  bally = height / 2;
  xspeed = 10;
  yspeed = 10;
  ballsize = 30;
  colorA = color(128, 20, 190);
  colorB = color("blue");
}
function draw() {
  background(220);
  moveAndDrawBall();
  drawtriangle();
}

function drawtriangle() {
  overlay.triangle(mouseX, mouseY - 20, mouseX - 10,
    mouseY + 10, mouseX + 10, mouseY + 10);
  image(overlay, 0, 0);
}
function moveAndDrawBall() {
  ballx += xspeed;
  bally += yspeed;

  if (ballx <= 0 || ballx >= width) {
    xspeed = xspeed * -1;
  }
  if (bally <= 0 || bally >= height) {
    yspeed = yspeed * -1;
  }


  fill(0);
  circle(ballx, bally, ballsize);
}
function keyPressed() {
  if (key === "a") fill(colorA);
  if (key === "b") fill(colorA);
}