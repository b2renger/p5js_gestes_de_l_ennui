// prévenir que nous allons avoir besoin de ces bibliothèques
#include <Wire.h>
#include <ADXL345.h>


ADXL345 accel; // on crée un objet qui nous permet de manipuler les données provenant de notre acceleromètre

void setup() {
  Serial.begin(9600);
  accel.powerOn(); // on active notre capteur
}

void loop() {

  
  // on crée un tableau pour stocker les valeurs provenant du calcul effectué par notre bibliothèques quand on appelel getAcceleration()
  double xyz[3];
  accel.getAcceleration(xyz); //on lit données de l'accéleromètre et on les stockent dans notre tableau
 
  String json;
  json = "{\"x\":";
  json = json + float(xyz[0]);
  json = json +";\"y\":";
  json = json +  float(xyz[1]);
  json = json +";\"z\":";
  json = json +  float(xyz[2]);
  json = json + "}";

  Serial.println(json);

  
  delay(100); // if you want to look in the tracer

}
