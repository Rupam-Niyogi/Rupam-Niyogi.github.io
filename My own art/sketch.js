// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let circlesize;
let colors = ["#CD0003", "#FC000F", "#F78900", "#B3C404", "#94D15A"];
function setup() {
  createCanvas(2000, 2000);
  background(255);
  circles();
  translate(width/2,height/2);
  lines();
  Square();
 
}
function lines() {
  let counter = 0;
  colorMode(RGB);
  let x3 = round(random(-3000, 3000));
  let x5 = round(random(-3000, 3000));
  for (let x = 0; x < 20; x++) {
    
    let x2 = round(random(-3000, 3000));
    let x4 = round(random(-3000, 3000));
    stroke(colors[Math.floor(random(colors.length))]);
    line(x3, x2, x5, x4);
    line(x2, x3, x4, x5);
    line(x3, x2, x4, x5);
  }
}
function keyPressed() {
  if (key === "k") {
    save("Art Image");
  }
} 
function circles() {
  for (let x = 0; x < 5000; x++) {
    fill(0);
    stroke(colors[Math.floor(random(colors.length))]);
    circle(random(windowWidth), random(windowHeight), 350);
    fill(0);
  }
}
function Square(){
  background(colors[2]);
  for(let i = 0; i<8009;i++){
    stroke(colors[Math.floor(random(colors.length))]);
    let a = random(-2500,5000); 
    let b = random(-2500,5000);
    let c = random(-2500,5000);  
    let d = random(-2500,5000);
    line(a,b,c,d);
  }
}