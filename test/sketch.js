let threshold = 5;
let spin = 1.05;
let friction = .005;

let particles = [];
let maxParticles = 1000;

let target;

let backgroundAlpha = 0;
let primary
let secondary

function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight);
  //let p5canvas = document.getElementById('my-canvas')
  //canvas.parent(p5canvas)
  background(20);
  primary = color(211, 30, 74, 5);
  secondary = color(245, 222, 177, 5);

  strokeWeight(.5);
  stroke(primary);
  smooth();

  target = createVector(width / 2, height / 2);


  for (let i = 0; i < maxParticles; i++) {
    let angle = random(TWO_PI);
    let x = (width / 2) + (random(width / 8) * cos(angle));
    let y = (height / 2) + (random(width / 8) * sin(angle));
    particles[i] = new Particle(x, y, threshold);
  }
}

windowResized = _ => {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

draw = _ => {
  background(20, .5);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].display();
    }
  
}

mouseMoved = _ => {
  if (mouseY > height - (height / 12)) {
    let yoff = -random(.005, .5)
    target.add(.3 * (mouseX - target.x), noise(yoff));

  } else {
    target.add(.3 * (mouseX - target.x), .3 * (mouseY - target.y));
  }
}


mouseDragged = _ => {
  backgroundAlpha++;
  background(20, backgroundAlpha);
}

mouseReleased = _ => {
  backgroundAlpha = 0;
}


class Particle {

  constructor(x, y, threshold) {
    this.easeShold = random(1 / threshold, threshold);
    this.pos = createVector(x, y);
    this.oldPos = this.pos.copy();
    this.ease = createVector(width / 2, height / 2);
  }

  update() {
    this.ease.div(spin);
    this.ease.add(friction * (target.x - this.pos.x) * this.easeShold,
      friction * (target.y - this.pos.y) * this.easeShold);
    if (mouseY > height - (height / 12)) {
      let ypos = random(.005, .5);
      ypos = this.pos > height * 3 / 4 ? ypos : ypos * -1;

      this.pos.add(this.ease.x, ypos);
    } else {
      this.pos.add(this.ease.x, this.ease.y);
    }

  }

  display() {
    line(this.pos.x, this.pos.y, this.oldPos.x, this.oldPos.y);
    this.oldPos.set(this.pos);
  }
}