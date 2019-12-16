let cellSize = 50
let seed = 1234

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background(0)
  randomSeed(seed)
  noFill()
  stroke(255)
  for (let i = 0; i < width; i = i + cellSize) {
    for (let j = 0; j < height; j = j + cellSize) {
      let n = random(100)
      if(n< 50){
        line(i, j+cellSize , i+cellSize, j)
      }
      else{
        line(i,j, i+cellSize, j+cellSize)
      }
    }
  }
}

function mouseClicked() {
  cellSize = random(25, 150)
  seed = random(9999999)
}