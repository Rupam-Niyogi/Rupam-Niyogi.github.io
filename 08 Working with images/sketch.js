// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let lionL, lionR, facing = "left";
let pinImages = [];
function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}

function draw() {
  background(220);
  //stepOne();
  displayPin();
}
function stepOne() {
  if (movedX > 0) facing = "right"

  else if (movedX < 0) facing = "left"

  if (facing === "left") {
    image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
  }
  else {
    image(lionR, mouseX, mouseY);
  }
}
function displayPin() {
  image(pinImages[currentPin], width / 2, height / 2);

  currentPin++;

}