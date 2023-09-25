// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let nodecolors = ["red",];
let colorIndex = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  initColors();
}


function draw() {
  background(220);
  rendernodes();
  textAlign(CENTER);
}
function rendernodes() {
  stroke(nodecolors[colorIndex]);
  fill(nodecolors[colorIndex]);
  circle(width / 2, height / 2, 20);
  circle(mouseX, mouseY, 20);
  line(width / 2, height / 2, mouseX, mouseY);
  let d = segmantdistance(mouseX,mouseY, width/2, height/2);
  text(round(d,1), width/2, height * 0.6);
}

function segmantdistance(x1, y1, x2, y2){
  let a = Math.abs(x1-x2);
  let b = Math.abs(y1-y2);
  let c = Math.abs(a*a + b*b);
  return c;
}

function initColors() {
  nodecolors.push(color("red"));
  nodecolors.push(color("green"));
  nodecolors.push(color("blue"));
}

function mouseWheel(event) {
  print(event.delta);
  if (event.delta < 0) {
    colorIndex += 1;
    if (colorIndex > nodecolors.length - 1) {
      colorIndex = 0;
    }
  }
}