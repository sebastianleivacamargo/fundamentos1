//colores botones
var posXbot1 = 30;
var posYbot1 = 10;
var tambot1 = 20;

var posXbot2 = 60;
var posYbot2 = 10;
var tambot2 = 20;

var posXbot3 = 90;
var posYbot3 = 10;
var tambot3 = 20;

var posXbot4 = 120;
var posYbot4 = 10;
var tambot4 = 20;

var posXbot4 = 120;
var posYbot4 = 10;
var tambot4 = 20;

var posXbot5 = 150;
var posYbot5 = 10;
var tambot5 = 20;

var posXbot6 = 180;
var posYbot6 = 10;
var tambot6 = 20;

var posXbot7 = 210;
var posYbot7 = 10;
var tambot7 = 20;

var posXbot8 = 240;
var posYbot8 = 10;
var tambot8 = 20;

var posXbot9 = 270;
var posYbot9 = 10;
var tambot9 = 20;

var posXbot10 = 300;
var posYbot10 = 10;
var tambot10 = 20;

var posXbot11 = 330;
var posYbot11 = 10;
var tambot11 = 20;

//formas botones

var posXbot12 = 450;
var posYbot12 = 10;
var tambot12 = 20;

var posXbot13 = 480;
var posYbot13 = 10;
var tambot13 = 20;

var posXbot14 = 510;
var posYbot14 = 10;
var tambot14 = 20;

var posXbot15 = 540;
var posYbot15 = 10;
var tambot15 = 20;

var posXbot16 = 570;
var posYbot16 = 10;
var tambot16 = 20;

var posXbot17 = 600;
var posYbot17 = 10;
var tambot17 = 20;

var posXbot18 = 630;
var posYbot18 = 10;
var tambot18 = 20;

var posXbot19 = 660;
var posYbot19 = 10;
var tambot19 = 20;

var posXbot20 = 690;
var posYbot20 = 10;
var tambot20 = 20;

var posXbot21 = 720;
var posYbot21 = 10;
var tambot21 = 20;

var herramienta = 1;
var miColor = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  stroke(0, 0, 0);
  fill(255);
  rect(posXbot1, posYbot1, tambot1, tambot1);
  fill(255, 125, 125);
  rect(posXbot2, posYbot2, tambot2, tambot2);
  fill(104, 251, 1);
  rect(posXbot3, posYbot3, tambot3, tambot3);
  fill(127, 126, 255);
  rect(posXbot4, posYbot4, tambot4, tambot4);
  fill(255, 163, 32);
  rect(posXbot5, posYbot5, tambot5, tambot5);
  fill(165, 105, 189);
  rect(posXbot6, posYbot6, tambot6, tambot6);
  fill(231, 76, 60);
  rect(posXbot7, posYbot7, tambot7, tambot7);
  fill(26, 101, 115);
  rect(posXbot8, posYbot8, tambot8, tambot8);
  fill(255, 0, 251)
  rect(posXbot9, posYbot9, tambot9, tambot9);
  fill(118, 60, 40);
  rect(posXbot10, posYbot10, tambot10, tambot10);
  fill(69, 248, 255);
  rect(posXbot11, posYbot11, tambot11, tambot11);
  //botones formas
  fill(255);
  rect(posXbot12, posYbot12, tambot12, tambot12);
  //flecha
  rect(posXbot13, posYbot13, tambot13, tambot13);
  rect(posXbot14, posYbot14, tambot14, tambot14);
  rect(posXbot15, posYbot15, tambot15, tambot15);
  rect(posXbot16, posYbot16, tambot16, tambot16);
  rect(posXbot17, posYbot17, tambot17, tambot17);
  rect(posXbot18, posYbot18, tambot18, tambot18);
  rect(posXbot19, posYbot19, tambot19, tambot19);
  rect(posXbot20, posYbot20, tambot20, tambot20);
  rect(posXbot21, posYbot21, tambot21, tambot21);


  ellipse(461, 20, 10, 10);
  triangle(491, 14, 483, 28, 499, 28);

  line(512, 12, 527, 20);
  line(512, 28, 527, 20);

  point(550, 15);
  point(555, 20);
  point(545, 20);
  point(550, 25);
  point(550, 20);
  point(550, 15);
  point(550, 15);

  ellipse(581, 20, 15, 15);
  fill(0)
  ellipse(581, 20, 5, 5);

  rect(605, 19, 12, 3)
  rect(609, 14, 3, 12)


  fill(255);
  ellipse(641, 20, 15, 15);
  fill(0)
  ellipse(638, 19, 1, 1);
  ellipse(644, 19, 1, 1);
  line(639, 22, 643, 22);

  line(662, 12, 679, 28);
  line(678, 12, 662, 28);


  line(700, 10, 707, 20);
  line(707, 20, 700, 30);
  line(700, 30, 693, 20);
  line(693, 20, 700, 10);


  line(730, 10, 740, 20);
  line(740, 20, 730, 30);
  line(730, 30, 720, 20);
  line(720, 20, 730, 10);
  line(730, 10, 730, 30);
  line(720, 20, 740, 20);
  line(720, 20, 730, 25);
  line(730, 25, 740, 20);
  line(720, 20, 730, 15);
  line(730, 15, 740, 20);

  
  if (mouseIsPressed == true) {
    if (miColor == 1) {
      stroke(0, 0, 0);
    }
    if (miColor == 2) {
      stroke(255, 125, 125);
    }
    if (miColor == 3) {
      stroke(104, 251, 1);
    }
    if (miColor == 4) {
      stroke(127, 126, 255);
    }
    if (miColor == 5) {
      stroke(255, 163, 32);
    }
    if (miColor == 6) {
      stroke(165, 105, 189);
    }
    if (miColor == 7) {
      stroke(231, 76, 60);
    }
    if (miColor == 8) {
      stroke(26, 101, 115);
    }
    if (miColor == 9) {
      stroke(255, 0, 251);
    }
    if (miColor == 10) {
      stroke(118, 60, 40);
    }
    if (miColor == 11) {
      stroke(69, 248, 255);
    }
    //herramientas
    if (herramienta == 2) {
      noFill();
      ellipse(mouseX, mouseY, 40, 40);
    }
    if (herramienta == 1) {
      noFill();
      triangle(mouseX + 10, mouseY * 1, mouseX - 5, mouseY - 30, mouseX - 20, mouseY);
    }
    if (herramienta == 3) {
      noFill();
      line(mouseX + 40, mouseY + 100, mouseX + 100, mouseY + 35);
      line(mouseX + 40, mouseY - 30, mouseX + 100, mouseY + 35);
    }
    if (herramienta == 4) {
      point(mouseX, mouseY);
      point(mouseX - 20, mouseY + 20);
      point(mouseX - 20, mouseY - 20);
      point(mouseX + 30, mouseY - 30);
      point(mouseX + 40, mouseY - 40);
      point(mouseX - 40, mouseY + 40);
    }
    if (herramienta == 5) {
      fill(255);
      ellipse(mouseX, mouseY, 70, 70);
      fill(0);
      ellipse(mouseX, mouseY, 30, 30)
    }
    if (herramienta == 6) {
      fill(255);
      rect(mouseX, mouseY, 10, 50);
      rect(mouseX + 30, mouseY + 20, -50, 10)

    }
    if (herramienta == 7) {
      fill(255);
      ellipse(mouseX, mouseY, 60, 60)

      ellipse(mouseX + 10, mouseY - 10, 10, 10);

      ellipse(mouseX - 10, mouseY - 10, 10, 10);

      line(mouseX - 15, mouseY + 10, mouseX + 15, mouseY + 10);
    }
    if (herramienta == 8) {
      line(mouseX + 40, mouseY + 100, mouseX + 100, mouseY + 40);
      line(mouseX + 40, mouseY + 40, mouseX + 100, mouseY + 100);
    }
    if (herramienta == 9) {
      noFill();
      line(mouseX + 55, mouseY - 30, mouseX + 95, mouseY + 35);
      line(mouseX + 55, mouseY - 30, mouseX + 15, mouseY + 35);
      line(mouseX + 15, mouseY + 35, mouseX + 55, mouseY + 100);
      line(mouseX + 55, mouseY + 100, mouseX + 95, mouseY + 35);
    }
    if (herramienta == 10) {
      noFill();
      line(mouseX, mouseY, 100, 600);
      line(mouseX, mouseY, 1000, 600);
      line(mouseX, mouseY, 550, 600);


    }



    if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 && mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
      background(255);
    }
    if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 && mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
      miColor = 2;
    }
    if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 && mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
      miColor = 3;
    }
    if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 && mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
      miColor = 4;
    }
    if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 && mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {
      miColor = 5;
    }
    if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 && mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {
      miColor = 6;
    }
    if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 && mouseY > posYbot7 && mouseY < posYbot7 + tambot7) {
      miColor = 7;
    }
    if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 && mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
      miColor = 8;
    }
    if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 && mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
      miColor = 9;
    }
    if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 && mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
      miColor = 10;
    }
    if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 && mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
      miColor = 11;
    }
    if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 && mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {
      herramienta = 2;
    }
    if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 && mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {
      herramienta = 1;
    }
    if (mouseX > posXbot14 && mouseX < posXbot14 + tambot14 && mouseY > posYbot14 && mouseY < posYbot14 + tambot14) {
      herramienta = 3;
    }
    if (mouseX > posXbot15 && mouseX < posXbot15 + tambot15 && mouseY > posYbot15 && mouseY < posYbot15 + tambot15) {
      herramienta = 4;
    }
    if (mouseX > posXbot16 && mouseX < posXbot16 + tambot16 && mouseY > posYbot16 && mouseY < posYbot16 + tambot16) {
      herramienta = 5;
    }
    if (mouseX > posXbot17 && mouseX < posXbot17 + tambot17 && mouseY > posYbot17 && mouseY < posYbot17 + tambot17) {
      herramienta = 6;
    }
    if (mouseX > posXbot18 && mouseX < posXbot18 + tambot18 && mouseY > posYbot18 && mouseY < posYbot18 + tambot18) {
      herramienta = 7;
    }
    if (mouseX > posXbot19 && mouseX < posXbot19 + tambot19 && mouseY > posYbot19 && mouseY < posYbot19 + tambot19) {
      herramienta = 8;
    }
    if (mouseX > posXbot20 && mouseX < posXbot20 + tambot20 && mouseY > posYbot20 && mouseY < posYbot20 + tambot20) {
      herramienta = 9;
    }
    if (mouseX > posXbot21 && mouseX < posXbot21 + tambot21 && mouseY > posYbot21 && mouseY < posYbot21 + tambot21) {
      herramienta = 10;
    }
  }
}