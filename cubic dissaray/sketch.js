// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squaresize = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  re(); noFill();
}

function draw() {

}
function re() {
  for (let x = squaresize / 2; x < width - squaresize; x += squaresize) {
    for (let y = squaresize / 2; x < height - squaresize; y += squaresize) {
      push();
      translate(x, y);
      rotate(radians(10));
      square(0, 0, squaresize);
      pop();
    }
  }
}
