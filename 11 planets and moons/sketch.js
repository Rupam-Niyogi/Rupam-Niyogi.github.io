// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myplanet;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myplanet = new Planet(width / 2, height / 2);
}

function draw() {
  background(220);
  myplanet.display();
}
function mouseClicked() {
  if (keyIsPressed && keyCode === SHIFT) {
    myplanet = new Planet(mouseX, mouseY);
  }
  else {
    myplanet.createmoon();
  }
}
class Planet {
  constructor(x, y) {
    this.x = x; this.y = y;
    this.s = 100;
    this.radius = this.s / 2;
    this.moons = [];
  }
  display() {
    circle(this.x, this.y, this.s);
    for (let m of this.moons) {
      m.update();
    }
  }
  createmoon() {
    this.moons.push(new moon(this.x, this.y));
  }
}




class moon {
  constructor(x, y) {
    this.x = x, this.y = y;
    this.steps = 10, this.speed = 5;
  }
  update() {
    this.x += this.speed;
    this.steps--;
    if (this.steps === 0) {
      this.steps = 20;
      this.speed *= -1;
    }
    circle(this.x, this.y, 30);
  }

}