// Perlin noice
// Rupam Niyogi
// 10/18/2023
//
// Extra for Experts:
// - I added a flag that moves to the highest point and the terrain pans.
let rectWidth = 1; //variable for the width of my rectangles
let noiseScale = 0.02;
let noiseValue = 1;
let highesty = 100000;//can be any  very large number
let highestx = 0;
let sectionHeight;
let average;
let numrect; //number of rectangles
let runningtotal;
let hold = noiseValue; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  generateTerrain();
}
function draw(){
  background(255);
  hold += noiseScale;//makes the terain pan
  noiseValue = hold;
  generateTerrain();
}
function generateTerrain() {
  let highesty = 100000;
  runningtotal = 0;
  numrect = width/rectWidth;
  for (let x = 0; x < width; x += rectWidth) { // for loop that repeats as long as x is less than the width 
    fill(0);
    let sectionHeight = noise(noiseValue) * height;//makes the terrain smoother
    noiseValue += noiseScale;
    rect(x, height, x + rectWidth, sectionHeight);
    runningtotal += sectionHeight;
    average = runningtotal/ numrect;
    fill("red");
    if (highesty > sectionHeight) {// finds the highest x and y 
      highesty = sectionHeight;
      highestx = x;
    }
  }
  stroke("red");
  line(0,average,width, average);
  stroke(0);
  drawFlag(highestx,highesty);//draws the flag at the highest x and highest y
}
drawFlag(highestx,highesty);
function drawFlag(x,y) {
  line(x, y-30, x, y);//functionto draw the flag
  fill("red");
  triangle(x, y-20,x,y-30,x+10, y-25);
  fill(0);
}
function keyPressed() {
  if (keyCode === 37) {//if right arrow is clicked the rectangles get wider
    rectWidth += 0.05;
  }
  if (keyCode === 39) { //if left arrow is clicked the rectangles get wider
    rectWidth -= 0.05;
  }
  background(255);
  generateTerrain();
  drawFlag();
}