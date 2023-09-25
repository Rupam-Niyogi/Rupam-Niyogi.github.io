// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mouseSide = "left";
let fillvalue =255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  renderSquares();
  updateMouseState();
}

function renderSquares() {
  if(mouseSide==="left"){
    fill(0);
  }
  else fill(255);
  rect(0, 0, width / 2, height);

  rect(0, 0, width / 2, height);
  rect(width / 2, 0, width / 2, height);
  if(mouseSide==="right"){
    fill(0);
  }
  else{
    let value =0;
    while(value < 255){
      fill(value);
      value+=10;
    }
  }
}
function updateMouseState() {
  if (mouseX > width / 2) {
    mouseSide = "right";
  }
  else mouseSide = "left";
  print(mouseSide);

}


























































































































































































































































