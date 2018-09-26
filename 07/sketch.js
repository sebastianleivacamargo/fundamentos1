var starwars

var Espacio = []

var Amplitud;

var Nodriza1
var Nodriza2
var Nave1
var Nave2
var Blackhole

var fondo
var lasersound

function preload() {


  Nodriza1 = loadImage('Assets/NODRIZA1.jpg');
  Nodriza2 = loadImage('Assets/NODRIZA2.png');
  Nave1 = loadImage('Assets/NAVE1.png');
  Nave2 = loadImage('Assets/NAVE2.png');
  Blackhole = loadImage('Assets/BLACKHOLE.png');
  fondo = loadImage('Assets/UNIVERSOFONDO.jpg');

  starwars = loadSound('Assets/STARWARS.mp3');

  lasersound = loadSound('Assets/LASERSOUND.mp3');

}

function setup() {
  createCanvas(1900, 1000);

  starwars.loop();
  lasersound.loop();

  Amplitud = new p5.Amplitude();
  Amplitud.setInput(lasersound);


}

function mousePressed() {
  Espacio.push(new nodriza(mouseX, mouseY));
}

function mouseReleased() {
  Espacio.push(new estrella(mouseX, mouseY));
}

function draw() {
  image(fondo, 0, 0, width, height);

  var Vol = map(mouseY, height, 0, 0, 1);
  lasersound.setVolume(Vol);

  if (frameCount % 15 == 0) {
    Espacio[Espacio.length] = new enemigo1(random(0, width), random(650, height));
  }
  if (frameCount % 15 == 0) {
    Espacio[Espacio.length] = new aliado1(random(0, width), random(0, 300));
  }
  if (frameCount % 3 == 0) {
    Espacio[Espacio.length] = new verde1(random(0, width), random(0, 250));
  }
  if (frameCount % 3 == 0) {
    Espacio[Espacio.length] = new rojo1(random(0, width), random(1600, 0));
  }
  for (var i = 0; i < Espacio.length; i = i + 1) {
    Espacio[i].move();
    Espacio[i].display();
  }
}

function enemigo1(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    image(Nave1, this.x, this.y, 80, 55);
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(0.5, 0.5);
    this.edad = this.edad + 1;
  }
  this.morirse = function() {
    this.estaViva = false;
  }
}

function aliado1(x1, y1) {
  this.x = x1;
  this.y = y1;
  this.display = function() {
    image(Nave2, this.x, this.y, 80, 55);
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-0.5, -0.5);
  }
  this.morirse = function() {
    this.estaViva = false;
  }
}

function verde1(x2, y2) {
  this.x = x2;
  this.y = y2;
  this.col = color(0, 255, 255);
  this.display = function() {
    fill(this.col);
    rect(this.x, this.y, 5, 25);
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(20, 20);
  }
  this.morirse = function() {
    this.estaViva = false;
  }
}

function rojo1(x3, y3) {
  this.x = x3;
  this.y = y3;
  this.col = color(255, 0, 0);
  this.display = function() {
    fill(this.col);
    rect(this.x, this.y, 5, 25);
  }
  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-20, -20);
  }
  this.morirse = function() {
    this.estaViva = false;
  }
}

function nodriza(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    imageMode(CENTER)
    image(Nodriza2, this.x, this.y, 750, 700);
    imageMode(CORNER);
  }
  this.move = function() {
    this.x = this.x + random(1, 1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaViva = false;
  }
}

function estrella(x, y) {
  this.x = x;
  this.y = y;
  this.display = function() {
    imageMode(CENTER)
    image(Nodriza1, this.x, this.y, 850, 650);
    imageMode(CORNER);
  }
  this.move = function() {
    this.x = this.x + random(-1, -1);
    this.y = this.y + random(-1, 1);
  }

  this.morirse = function() {
    this.estaViva = false;
  }
}