

function preload() {
  
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)
}

function draw() {
  background(255);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {
 

}

function mouseClicked() {
  exportRiso();
}