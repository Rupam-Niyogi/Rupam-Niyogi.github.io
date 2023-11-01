// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x2;
let x3;
let x4;
let x5;
let points = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(width / 2, height / 2);
  lines();
}


function lines() {
  let x3 = round(random(-200, 200));
  let x5 = round(random(-200, 200));
  for (let x = 0; x < 99; x++) {
    let x2 = round(random(-200, 200));
    let x4 = round(random(-200, 200));
   
    line(x2, x3, x4, x5);
    
 
  }
}
