// Multi Coloured Grid
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
  
  for (let i = 0; i < numSeg; i++) {
    let y = i * segHeight;
    let c = map(y, 0, height, 0, 255);
    fill(c, 255 - c, 100);
    rect(0, y, width, segHeight);
  }
  
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
    }
  }
}
