let data;
let layerFsr;
let back;


function preload() {
  data = loadJSON("data.json", function () {
    console.log("done");
    console.log(Object.keys(data).length); // nombre d'entrées
    console.log(data[0]); // première entrée de notre fichier
    console.log(data[0].timestamp); // timestamp du premier point enregistré
    console.log(data[0].force); // valeur "x" du deuxième point enregistré
  })
  
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  pixelDensity(1);
  //background(0);

  layerFSR = new Riso('yellow'); 
  back = new Riso('black') 
}

function draw() {

  //background(0);
  clearRiso(); // remove everything
  drawViz(); // draw each viz in its layer
  drawRiso(); // display the layers drawn previously
}

function drawViz() {

  back.fill(255)
back.rect(0,0,width,height)

  let dataSize = Object.keys(data).length;

  for (let i = 248 ; i < dataSize ; i = i+1){
      let dat = data[i];
      
      let angle = map(i, 248, dataSize, 0, 360 );
      let rad = map(dat.force, 0, 1024,0, width*0.4 );

      let x1 = width/2 + width*0.3 * cos(radians(angle));
      let y1 = height/2 + height*0.3 * sin(radians(angle));

      let x = width/2 + rad * cos(radians(angle));
      let y = height/2 + rad * sin(radians(angle));

      layerFSR.stroke(255, 50);
      layerFSR.fill(255, 50);
      
      let ellipseS = map(dat.force, 0, 1024,5, 100 );
      layerFSR.ellipse(x1,y1, ellipseS, ellipseS)

      layerFSR.line(width*0.5, height*0.5, x, y);


  }

  back.cutout(layerFSR)
 

}

function mouseClicked() {
  exportRiso();
}