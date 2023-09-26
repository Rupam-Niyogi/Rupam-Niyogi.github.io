// Primitive Paint
// Rupam Niyogi
// September 16th 2023
//
// Extra for Experts:
// - makes a random circle apear

let Rectanglesize, circlesize, squaresize, circleColour, circlelocation;
let extraCanvas;
function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
}
function draw() {
  background(255);
  image(extraCanvas, 0, 0);
  fill(random(255), random(255), random(255));
  circle(random(windowWidth), random(windowHeight), circlesize);
  circlesize = random(20,80);
  fill(0);
  textSize(40);
  textFont("Georgia");
  text("Rupam Niyogi", 20, 30);
}
function keyPressed() {
  if (key === "a") {
    extraCanvas.rect(mouseX, mouseY, 50, 100);
  }
  if (key === "s") {
    extraCanvas.ellipse(mouseX, mouseY, 50, 50);
  }
  if (key === "d") {
    extraCanvas.rect(mouseX, mouseY, 50, 50);
  }
  if (key === "b") {
    extraCanvas.fill("blue");
  }
  if (key === "r") {
    extraCanvas.fill("red");
  }
  if (key === "g") {
    extraCanvas.fill("green");
  }
  if (key === "y") {
    extraCanvas.fill("yellow");
  }
  if (keyCode === 32) {
    extraCanvas.clear();
    background(255);
  }
}