// P5 Drawig Basics
// Rupam
// Sept 12
//
// Extra for Experts:
// - driving the bus 

let busX = 0, busY = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  drawbus();
  movebus();
}
function drawbus() {
  fill(255);
  rect(50 + busX, 50, 100, 50);
  fill(0);
  circle(80 + busX, 100, 20);
  circle(120 + busX, 100, 20);
}
function movebus() {
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      busX = busX - 10;
    }
    if (keyCode === RIGHT_ARROW) {
      busX = busX + 10;
    }
    if (keyCode === UP_ARROW) {
      busY = busY - 10;
    }
    if (keyCode === DOWN_ARROW) {
      busY = busY + 10;
    }
  }
}