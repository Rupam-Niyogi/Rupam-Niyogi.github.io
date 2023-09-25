// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let words = ["rainbow", "heart", "purple", "friendship"]
let index = 0;
let nums = [100, 25, 12, 72];
let num = 23;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for( let i = 0; i < 4; i++){
    ellipse(i * 100 + 100 ,200, nums[i], nums[i]);
  }
    
  //ellipse(100,200, nums[0], nums[0]);
  //ellipse(200,200, nums[1], nums[1]);
  //ellipse(300,200, nums[2], nums[2]);
  //ellipse(400,200, nums[3], nums[3]);
  textSize(32);
  text(words[index], 12, 200);
}
function mousePressed(){
  index = index + 1;
  if (index === words.length){
    index = 0;
}
}
