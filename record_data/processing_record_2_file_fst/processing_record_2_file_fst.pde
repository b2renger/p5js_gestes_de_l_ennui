/*
data.json must be a valid json array for the program to work
if no file is provided create a new one called "data.json"
containing only the brackets to store an array
"[]"  
*/



import processing.serial.*;
Serial myPort;  



void setup() {
  size(800, 500);


  // initialisation de la communication via usb depuis arduino
  // ATTENTION à bien utiliser le port adapté
  printArray(Serial.list());
  String portName = Serial.list()[3];
  myPort = new Serial(this, portName, 9600);
  myPort.bufferUntil('\n');

  //stocker police dispo
  //String[] fontList = PFont.list();
  //afficher liste de polices
  //println(fontList);
}

void draw() {    
  background(0);
  fill(255);

  // ellipse(width*0.5, height*0.5, photor, photor);
}  

void serialEvent (Serial myPort) {
  try {
    while (myPort.available() > 0) {
      String inBuffer = myPort.readStringUntil('\n');
      if (inBuffer != null) {
        if (inBuffer.substring(0, 1).equals("{")) {
          JSONObject json = parseJSONObject(inBuffer);
          if (json == null) {
            //println("JSONObject could not be parsed");
          } else {

            float force    = json.getFloat("force");
           
           
            JSONArray js  = loadJSONArray("data.json");
            // println(js.size());

            JSONObject njs = new JSONObject();
            njs.setString("timestamp", year()+"-"+month()+"-"+day()+"-"
                          +hour()+"-"+minute()+"-"+second()+"-"+millis());
            njs.setFloat("force", force);
            

            println(njs);
            js.append(njs);
            //println(js.size());
            saveJSONArray(js, "data/data.json");
          }
        } else {
        }
      }
    }
  } 
  catch (Exception e) {
  }
}
