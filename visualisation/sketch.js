let layerX;
let layerY;
let layerZ;
let info;

let back;
let img;

let data
let dataSize

function preload() {
  data = loadJSON("data.json", function () {
    console.log("done")
  })
  img = loadImage("axis.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1)

  layerX = new Riso('yellow');
  layerY = new Riso('pumpkin');
  layerZ = new Riso('turquoise');

  info = new Riso('white')
  back = new Riso('black')

}

function draw() {
  background(245);

  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {
  console.log("drawing")
  // get the numer of entries ie the number of points recorded
  dataSize = Object.keys(data).length
  //console.log(dataSize)
  //console.log(data[0].x)
  
  back.fill(255)
  back.rect(0,0,width,height)

  
  info.fill(255)
  info.noStroke()
  info.imageMode(CORNER)
  let imgRatio = height * 0.2
  info.image(img, width - imgRatio, height - imgRatio, imgRatio, imgRatio);
  
  layerX.beginShape()
  layerX.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = map(data[i].y, -1, 1, 25, height * 0.45)
    let angle = map(i, 0, dataSize, 0, TWO_PI)
    let x = width * 0.5 + r * cos(angle)
    let y = height * 0.4 + r * sin(angle)
    layerX.curveVertex(x, y)
  }
  
  layerX.endShape(CLOSE)
  
  layerX.textStyle(BOLD);
  layerX.textFont('Arial');
  layerX.textAlign(RIGHT, BOTTOM);
  layerX.textSize(20);
  layerX.text("ROLL", width - imgRatio , height  )


  layerY.beginShape()
  layerY.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = map(data[i].z, -1, 1, 25, height * 0.5)
    let angle = map(i, 0, dataSize, 0, TWO_PI)
    let x = width * 0.5 + r * cos(angle)
    let y = height * 0.4 + r * sin(angle)
    layerY.curveVertex(x, y)
  }
  layerY.endShape(CLOSE)
  layerY.textStyle(BOLD);
  layerY.textFont('Arial');
  layerY.textAlign(RIGHT, CENTER);
  layerY.textSize(20);
  layerY.text("PITCH", width , height - imgRatio *0.6 )


  layerZ.beginShape()
  layerZ.fill(255);
  for (let i = 0; i < dataSize; i++) {
    let r = map(data[i].x, -1, 1, 25, height * 2)
    let angle = map(i, 0, dataSize, 0, TWO_PI)
    let x = width * 0.5 + r * cos(angle)
    let y = height * 0.4 + r * sin(angle)
    layerZ.curveVertex(x, y)
  }
  layerZ.endShape(CLOSE)
  layerZ.textStyle(BOLD);
  layerZ.textFont('Arial');
  layerZ.textAlign(LEFT, CENTER);
  layerZ.textSize(20);
  layerZ.text("YAW", width - imgRatio, height - imgRatio *0.9)

  info.stroke(255);
  info.strokeWeight(3);
  info.line(0, height * 0.8, width, height * 0.8);

  info.noStroke();
  info.fill(255);
  info.textStyle(BOLD);
  info.textFont('Arial');
  info.textAlign(LEFT, CENTER);
  info.textSize(36);
  info.text('"Sleepy Head" Patterns -', 0, height * 0.83);
  info.text('  b2renger', 0, height * 0.87);
  info.textSize(20);
  info.textStyle(ITALIC);
  info.text('   8th of October 2019 from 9:55:18 to 9:55:27 am', 0, height * 0.93);
  info.text('   acceleromter mounted on the back of the head.', 0, height * 0.96);

  //layerX.cutout(layerZ); // cut text out of red
  //layerY.cutout(layerZ);

  back.cutout(layerX)
  back.cutout(layerY)
  back.cutout(layerZ)
  back.cutout(info)




}

function mouseClicked() {
  exportRiso();
}