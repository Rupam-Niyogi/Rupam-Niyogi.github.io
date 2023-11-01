// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let colours1 = ["#CD0003", "#FC000F", "#F78900", "#B3C404", "#94D15A"];
let rectW = 100;
let rectH = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width * 0.1);
  ColHSB(width * 0.4);
  custom(width * 0.7);
}
function custom(xPos) {
  let counter = 0;
  for (let y = 0; y < height; y += rectH) {
    fill(colours1[Math.floor(random(colours1.length))]);
    rect(xPos, y, rectW, rectH);
    counter++;
  }
}

function ColHSB(xPos) {
  colorMode(HSB, 360);
  for (let y = 0; y < height; y += rectH) {
    fill(y / 1.4, 360, 360);
    rect(xPos, y, rectW, rectH);
  }
}
function drawColRGB(xPos) {
  colorMode(RGB);
  for (let y = 0; y < height; y += rectH) {
    fill(random(255), random(255), random(255));
    rect(xPos, y, rectW, rectH);
  }
}