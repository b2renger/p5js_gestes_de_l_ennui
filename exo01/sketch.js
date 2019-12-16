

function preload() {
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  background(0);
}

function draw() {
  
  fill(255, 255,0)
  stroke(0)
  ellipse(mouseX, mouseY, 50, 50)

  fill(255,0,0)
  stroke(0)
  ellipse(width - mouseX, mouseY, 50, 50)

  fill(0,0,255)
  stroke(0)
  ellipse( mouseX,height- mouseY, 50, 50)


  fill(255,0,255)
  stroke(0)
  ellipse(width - mouseX,height- mouseY, 50, 50)
 

}



function mouseClicked() {

}