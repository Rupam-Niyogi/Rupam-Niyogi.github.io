// Primitive Paint
// Rupam Niyogi
// September 16th 2023
//
// - makes a random size and shaped sircle apear at random circles and allows user to place 3 different shapes with 4 colour options


let Rectanglesize, circlesize, squaresize, circleColour, circlelocation;//variables
let extraCanvas;
function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);//was planning on doing the extra chalenge but ran out of time
  extraCanvas.clear();
}
function draw() {// draws random sized and coloured circles at random locations
  background(255);
  image(extraCanvas, 0, 0);
  fill(random(255), random(255), random(255));
  circle(random(windowWidth), random(windowHeight), circlesize);
  circlesize = random(20, 80);
  fill(0);
  textSize(40); //displays name in Georgia
  textFont("Georgia");
  text("Rupam Niyogi", 20, 30);
}
function keyPressed() {
  if (key === "a") {
    extraCanvas.rect(mouseX, mouseY, 50, 100);//place shapes and change colour based on key pressed
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
  if (keyCode === 32) {//clear if you click space
    extraCanvas.clear();
    background(255);
  }
}