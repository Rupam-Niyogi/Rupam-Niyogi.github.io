// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
class Racer {

  constructor(yPosition, color) {
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3, 15);
    this.colour = color;
  }
  display() {   
    fill(this.colour);
    circle(this.xPosition,this.yPosition,);
  }





}