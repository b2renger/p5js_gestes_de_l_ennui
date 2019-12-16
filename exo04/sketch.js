
let seed = 1234

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  randomSeed(seed)
  background(0)
  stroke(255)
  noFill()
  let nF = int(map(mouseX, 0, width, 3, 100))
  beginShape()
  for(let angle = 0 ; angle < 360 ; angle = angle + 360/nF){
    let rad = random(0, width*0.25);
    let x = width/2 + rad * cos(radians(angle));
    let y = height/2 + rad * sin(radians(angle));
    vertex(x,y)
  }
  endShape(CLOSE)
}

function mouseClicked() {
  seed = random(9999999)
}