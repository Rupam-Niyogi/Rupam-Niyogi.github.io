// Primitive Paint
// Rupam Niyogi
// September 16th 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Rectanglesize, circlesize, squaresize;
let extraCanvas;
function setup() {
  createCanvas(windowWidth, windowHeight);
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
}
function draw() {
  textSize(40);
  textFont("Georgia");
  text("Rupam Niyogi", 20, 30);
  image(extraCanvas, 0, 0);
}
for (let x = 0; x <= width; x === 50) {
  for (let y = 0; y <= height; y += 50) {
    fill(random(255), 0, random(255));
    ellipse(x, y, 25, 25);
  }
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
for (let x = 0; X <= width; x === 50) {
  fill(random(255), 0, random(255));
  ellipse(x, y, 25, 25);
}

