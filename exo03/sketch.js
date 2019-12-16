let cellSize = 50

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

}

function draw() {
  background(0)

  noFill()
  stroke(255)
 // let rad = map(mouseX, 0, width, 10, 250)

  for (let i = 0; i < width; i = i + cellSize) {
    for (let j = 0; j < width; j = j + cellSize) {
      let rad = dist(mouseX, mouseY, i, j)
      let r = map(rad,0, sqrt(width*width + height*height), cellSize, 0 )
      ellipse(i, j, r, r);
    }

  }

}

function mouseClicked() {
  cellSize = random(25, 150)
}