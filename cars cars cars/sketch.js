// Cars Cars Cars 
// Rupam Niyogi
// 10/26/23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let eastbound = [];
let westbound = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) { //adds vehicles
    eastbound.push(new Vehicle(0, height / 2 + random(20, height / 4 - 30), random(1, 10)));
    westbound.push(new Vehicle(width, height / 2 - random(20, height / 4 - 30), random(-1, -10)));
  }
}
function draw() {
  background(220);
  drawRoad();
  for (let p of eastbound) { // does actions for eastbound
    p.action();
  }
  for (let p of westbound) { // does actions for westbound
    p.action();
  }
}
function drawRoad() { //draws the road
  fill("black");
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height / 2,);
  for (let i = 0; i < width; i += 20) {
    stroke("white");
    let b = i + 10;
    line(i, height / 2, b, height / 2);
  }
}
class Vehicle {
  constructor(x, y, speed) { //class for vehicles
    this.x = x; this.y = y; this.speed = speed;
    this.color = color(random(255), random(255), random(255));
    this.type = int(random(2));
  }
  car() {
    fill(this.color);
    rect(this.x, this.y, 20, 20); //car design
    fill ("white");
    rect(this.x,this.y,10,10);
  }
  truck() {
    fill(this.color);//truck design
    rect(this.x, this.y, 40, 20);
    rect(this.x, this.y, 20, 10);
  }
  display() {
    if (this.type === 0) { // 
      this.car();
    }
    else if (this.type === 1) {
      this.truck();
    }
  }
  move() { // move the car 
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
  }
  speedUp() {
    this.num = int(random(1, 100));// speeds up the car
    if (this.num === 55) {
      if (this.speed > 0) {
        this.speed += 1;
        if (this.speed >= 15) {
          this.speed = 10;
        }
      }
      if (this.speed < 0) {
        this.speed -= 1;
        if (this.speed <= -15) {
          this.speed = -10;
        }
      }
    }
  }
  speedDown() {
    this.num = int(random(1, 100)); // slows down the car
    if (this.num === 65) {
      if (this.speed > 0) {
        this.speed -= 1;
        if (this.speed <= 0) {
          this.speed += 1;
        }
      }
      if (this.speed < 0) {
        this.speed += 1;
        if (this.speed >= 0) {
          this.speed -= 1;
        }
      }
    }
  }
  changeColor() {// swaps the colour 
    this.num = int(random(1, 100));
    if (this.num === 75) {
      this.color = color(random(255), random(255), random(255));
    }
  }
  action() { //all actions put under one function
    this.move();
    this.display();
    this.speedUp();
    this.speedDown();
    this.changeColor();
  }
}
function mousePressed(){ //adds cars to particular lane
  if (mousePressed && keyCode==="SHIFT" ){
    westbound.push(new Vehicle(width, height / 2 - random(20, height / 4 - 30), random(-1, -10)));
  }
  
  else if (mousePressed){
    eastbound.push(new Vehicle(0, height / 2 + random(20, height / 4 - 30), random(1, 10)));
  }

  
}