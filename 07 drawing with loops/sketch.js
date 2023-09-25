// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numSeg = 20;
let segHeight;
let currentbackground = 0;
const GRIDSPACING = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  segHeight = height / numSeg;

}

function gradient() {
  noStroke();
  for (let i = 0; i < numSeg; i++) {
    let y = i * segHeight;
    let c = map(y, 0, height, 0, 255);
    fill(c, 255 - c, 100);
    rect(0, y, width, segHeight);
  }
  stroke(0);
}
function selectBG() {
  if (currentbackground === 0) gradient();
  else if (currentbackground === 1) background(255);
  else background(60, 240, 120);


}
function draw() {

  background(220);
  gradient();
  grid();
}

function grid() {
  for (let x = 0; x < width; x += GRIDSPACING) {
    for (let y = 0; y < height; y += GRIDSPACING) {
      print(x + "," + y);
      if (dist(x, y, mouseX, mouseY) < 50) {
        fill(255, 0, 0);
      }
      else {
        fill(0);
      }
      circle(x, y, 10);
      //line(x, y, mouseX, mouseY);
    }
  }
}
function mousePressed() {
  print(mouseButton);
  if (mouseButton === LEFT) {
    currentbackground -= 1;
    if (currentbackground < 0) currentbackground = 2;
  }
  if (mouseButton === CENTER) {
    currentbackground += 1;
    if (currentbackground > 2) currentbackground = 0;
  }
  return false;
}