// Multi Coloured Grid
// Rupam Niyogi
// october 3rd 2023
// Makes a random coloured grid where if you left click you zoom in and if you right click you zoom out. each time you click the grid randomizes. If a key is pressed the grid randomizes in place
let Grid_spacing= 15; // grid size
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault()); // thing for right click
  grid();
}
function grid() {
  for (let x = 0; x < width; x += Grid_spacing) { // creates a random colour in each square 
    for (let y = 0; y < height; y += Grid_spacing) {
      fill(random(255),random(255),random(255)); 
      rect (x,y,Grid_spacing);
    }
  }
}
function mousePressed(){ 
  if(mouseButton===LEFT){ // raises grid spacing and resets grid 
    Grid_spacing +=5;
    grid();
    background();
  }
  if(mouseButton===RIGHT){ //lowers grid spacing and resets grid 
    Grid_spacing -=5; 
    grid();
    background();
  }
} 
function keyPressed(){// resets grid if key is pressed 
  grid();
}