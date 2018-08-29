var x = -178;
var y = 488

var x1 = -144
var y1 = 503

var x2 = -5;
var x3 = -5;

var panoramico1 = -72;
var panoramico1x = -50;

var ventanaizquierda = -155
var ventanaizquierda1 = -55
var ventanaizquierda2 = -81
var ventanaizquierda3 = -146

var ventanaderecha = -146
var ventanaderecha1 = -81
var ventanaderecha2 = -55
var ventanaderecha3 = -155

var ventanaposterior = -156
var ventanaposterior1 = -148

var luz = 0
var luz1 = 150

var luz2 = 0
var luz2a = 150

var dir = 7
var vel = 7

//carro de vuelta

var z = 4922
var w = 1094
var z1 = 5008
var z2 = 5015
var z3 = 4969
var z4 = 4924
var z5 = 4924
var luzz1 = 4924
var luzz2 = 4800
var luzz3 = 4924
var luzz4 = 4800


var dir1 = -8
var vel1 = -8

function setup() {
  createCanvas(2550, 1650);
  background(220);

  frameRate(4);
}

function draw() {
  background(0);
  fill(255);
  stroke(0);
  rect(x, y, 178, 72, 10, 10);
  fill(200, 200, 200);
  rect(x1, y1, 65, 40);
  fill(248, 243, 53);
  rect(x2, 491, 5, 11);
  rect(x3, 547, 5, 11);

  fill(200, 200, 200);
  quad(panoramico1, 503, panoramico1x, 497, panoramico1x, 552, panoramico1, 544);
  quad(ventanaizquierda, 493, ventanaizquierda1, 492, ventanaizquierda2, 498, ventanaizquierda3, 498);
  quad(ventanaderecha, 549, ventanaderecha1, 549, ventanaderecha2, 556, ventanaderecha3, 556);
  quad(ventanaposterior, 497, ventanaposterior1, 503, ventanaposterior1, 543, ventanaposterior, 553);
  fill(248, 243, 53);
  quad(luz, 491, luz1, 470, luz1, 523, luz, 502);
  quad(luz2, 547, luz2a, 525, luz2a, 577, luz2, 558);

  fill(255);
  rect(z, w, 178, 72, 5, 5);
  fill(200, 200, 200);
  rect(z1, 1100, 80, 60)
  rect(z3, 1100, 30, 60)
  fill(130);
  rect(z2, 1106, 24, 46);
  fill(248, 243, 53);
  rect(z4, 1097, 5, 11);
  rect(z5, 1152, 5, 11);
  quad(luzz1, 1097, luzz1, 1110, luzz2, 1120, luzz2, 1070);
  quad(luzz3, 1152, luzz3, 1163, luzz4, 1183, luzz4, 1130);
  z = z - vel1 * dir1
  z1 = z1 - vel1 * dir1
  z2 = z2 - vel1 * dir1
  z3 = z3 - vel1 * dir1
  z4 = z4 - vel1 * dir1
  z5 = z5 - vel1 * dir1
  luzz1 = luzz1 - vel1 * dir1
  luzz2 = luzz2 - vel1 * dir1
  luzz3 = luzz3 - vel1 * dir1
  luzz4 = luzz4 - vel1 * dir1





  x = x + vel * dir;
  x1 = x1 + vel * dir;
  x2 = x2 + vel * dir;
  x3 = x3 + vel * dir;
  panoramico1 = panoramico1 + vel * dir;
  panoramico1x = panoramico1x + vel * dir;
  ventanaizquierda = ventanaizquierda + vel * dir;
  ventanaizquierda1 = ventanaizquierda1 + vel * dir;
  ventanaizquierda2 = ventanaizquierda2 + vel * dir;
  ventanaizquierda3 = ventanaizquierda3 + vel * dir;
  ventanaderecha = ventanaderecha + vel * dir;
  ventanaderecha1 = ventanaderecha1 + vel * dir
  ventanaderecha2 = ventanaderecha2 + vel * dir
  ventanaderecha3 = ventanaderecha3 + vel * dir
  ventanaposterior = ventanaposterior + vel * dir;
  ventanaposterior1 = ventanaposterior1 + vel * dir;
  luz = luz + vel * dir;
  luz1 = luz1 + vel * dir;
  luz2 = luz2 + vel * dir;
  luz2a = luz2a + vel * dir;


  if (x >= 640 && x < 2000) {
    vel = 15
  }


  fill(210, 229, 50);

  stroke(255);
  strokeWeight(2)


  line(0, 400, 2550, 400);
  line(0, 415, 2550, 415);
  line(0, 630, 2550, 630);
  line(0, 645, 2550, 645);

  line(0, 1005, 2550, 1005);
  line(0, 1020, 2550, 1020)
  line(0, 1255, 2550, 1255);
  line(0, 1240, 2550, 1240);

  if (x >= 2600 || x < 0) {
    //x = 0;
    dir = dir
  } //linea 1 arboles
  noStroke()

  if (frameCount > 1 && frameCount < 5) {
    ellipse(100, 330, 55, 55)
  }
  if (frameCount > 1 && frameCount < 5) {
    ellipse(100, 710,  55, 55)
  } //linea 2 arboles
  if (frameCount > 2 && frameCount < 7) {
    ellipse(200, 330, 55, 55)
  }
  if (frameCount > 2 && frameCount < 7) {
    ellipse(200, 710,  55, 55)
  } //linea 3 arboles
  if (frameCount > 3 && frameCount < 8) {
    ellipse(300, 330,  70,70)
  }
  if (frameCount > 3 && frameCount < 8) {
    ellipse(300, 710,  70,70)
  } //linea 4 arboles
  if (frameCount > 5 && frameCount < 9) {
    ellipse(400, 330,  70,70)
  }
  if (frameCount > 5 && frameCount < 9) {
    ellipse(400, 710,  70,70)
  } //linea 5 arboles
  if (frameCount > 6 && frameCount < 11) {
    ellipse(500, 330, 30, 30)
  }
  if (frameCount > 6 && frameCount < 11) {
    ellipse(500, 710, 30, 30)
  } //linea 6 arboles
  if (frameCount > 8 && frameCount < 13) {
    ellipse(600, 330, 30, 30)
  }
  if (frameCount > 8 && frameCount < 13) {
    ellipse(600, 710, 30, 30)
  } //linea 7 arboles
  if (frameCount > 10 && frameCount < 14) {
    ellipse(700, 330, 30, 30)
  }
  if (frameCount > 10 && frameCount < 14) {
    ellipse(700, 710, 30, 30)
  } //linea 8 arboles
  if (frameCount > 12 && frameCount < 15) {
    ellipse(800, 330, 30, 30)
  }
  if (frameCount > 12 && frameCount < 15) {
    ellipse(800, 710, 30, 30)
  } //linea 9 arboles
  if (frameCount > 14 && frameCount < 16) {
    ellipse(900, 330, 50, 50)
  }
  if (frameCount > 14 && frameCount < 16) {
    ellipse(900, 710, 50, 50)
  } //linea 10 arboles
  if (frameCount > 15 && frameCount < 18) {
    ellipse(1000, 330, 50, 50)
  }
  if (frameCount > 15 && frameCount < 18) {
    ellipse(1000, 710, 50, 50)
  } //linea 11 arboles
  if (frameCount > 17 && frameCount < 19) {
    ellipse(1100, 330, 50, 50)
  }
  if (frameCount > 17 && frameCount < 19) {
    ellipse(1100, 710, 50, 50)
  } //linea 12 arboles
  if (frameCount > 18 && frameCount < 20) {
    ellipse(1200, 330, 50, 50)
  }
  if (frameCount > 18 && frameCount < 20) {
    ellipse(1200, 710, 50, 50)
  } //linea 13 arboles
  if (frameCount > 19 && frameCount < 21) {
    ellipse(1300, 330, 50, 50)
  }
  if (frameCount > 19 && frameCount < 21) {
    ellipse(1300, 710, 50, 50)
  } //linea 14 arboles
  if (frameCount > 20 && frameCount < 22) {
    ellipse(1400, 330, 30, 30)
  }
  if (frameCount > 20 && frameCount < 22) {
    ellipse(1400, 710, 30, 30)
  } //linea 15 arboles
  if (frameCount > 21 && frameCount < 23) {
    ellipse(1500, 330, 30, 30)
  }
  if (frameCount > 21 && frameCount < 23) {
    ellipse(1500, 710, 30, 30)
  } //linea 16 arboles
  if (frameCount > 22 && frameCount < 24) {
    ellipse(1600, 330, 30, 30)
  }
  if (frameCount > 22 && frameCount < 24) {
    ellipse(1600, 710, 30, 30)
  } //linea 17 arboles
  if (frameCount > 23 && frameCount < 25) {
    ellipse(1700, 330, 30, 30)
  }
  if (frameCount > 23 && frameCount < 25) {
    ellipse(1700, 710, 30, 30)
  } //linea 18 arboles
  if (frameCount > 24 && frameCount < 26) {
    ellipse(1800, 330, 50, 50)
  }
  if (frameCount > 24 && frameCount < 26) {
    ellipse(1800, 710, 50, 50)
  } //linea 19 arboles
  if (frameCount > 25 && frameCount < 27) {
    ellipse(1900, 330, 50, 50)
  }
  if (frameCount > 25 && frameCount < 27) {
    ellipse(1900, 710, 50, 50)
  } //linea 20 arboles
  if (frameCount > 26 && frameCount < 28) {
    ellipse(2000, 330, 50, 50)
  }
  if (frameCount > 26 && frameCount < 28) {
    ellipse(2000, 710, 50, 50)
  } //linea 21 arboles
  if (frameCount > 27 && frameCount < 29) {
    ellipse(2100, 330, 50, 50)
  }
  if (frameCount > 27 && frameCount < 29) {
    ellipse(2100, 710, 50, 50)
  } //linea 22 arboles
  if (frameCount > 28 && frameCount < 30) {
    ellipse(2200, 330, 65, 65)
  }
  if (frameCount > 28 && frameCount < 30) {
    ellipse(2200, 710, 65, 65)
  } //linea 23 arboles
  if (frameCount > 29 && frameCount < 31) {
    ellipse(2300, 330, 65, 65)
  }
  if (frameCount > 29 && frameCount < 31) {
    ellipse(2300, 710, 65, 65)
  } //linea 24 arboles
  if (frameCount > 30 && frameCount < 32) {
    ellipse(2400, 330, 65, 65)
  }
  if (frameCount > 30 && frameCount < 32) {
    ellipse(2400, 710, 65, 65)
  } //linea 25 arboles
  if (frameCount > 31 && frameCount < 33) {
    ellipse(2500, 330, 50, 50)
  }
  if (frameCount > 31 && frameCount < 33) {
    ellipse(2500, 710, 50, 50)
  }

  function draw() {



    fill(210, 229, 50);

  } //linea 1 arboles

  if (frameCount > 72 && frameCount < 76) {
    ellipse(100, 935, 30, 30)
  }
  if (frameCount > 72 && frameCount < 76) {
    ellipse(100, 1325, 30, 30)
  } //linea 2 arboles
  if (frameCount > 70 && frameCount < 74) {
    ellipse(200, 935, 30, 30)
  }
  if (frameCount > 70 && frameCount < 74) {
    ellipse(200, 1325, 30, 30)
  } //linea 3 arboles
  if (frameCount > 69 && frameCount < 73) {
    ellipse(300, 935, 30, 30)
  }
  if (frameCount > 69 && frameCount < 73) {
    ellipse(300, 1325, 30, 30)
  } //linea 4 arboles
  if (frameCount > 68 && frameCount < 72) {
    ellipse(400, 935, 30, 30)
  }
  if (frameCount > 68 && frameCount < 72) {
    ellipse(400, 1325, 30, 30)
  } //linea 5 arboles
  if (frameCount > 67 && frameCount < 70) {
    ellipse(500, 935, 50, 50)
  }
  if (frameCount > 67 && frameCount < 70) {
    ellipse(500, 1325, 50, 50)
  } //linea 6 arboles
  if (frameCount > 65 && frameCount < 68) {
    ellipse(600, 935, 50, 50)
  }
  if (frameCount > 65 && frameCount < 68) {
    ellipse(600, 1325, 50, 50)
  } //linea 7 arboles
  if (frameCount > 63 && frameCount < 66) {
    ellipse(700, 935, 50, 50)
  }
  if (frameCount > 63 && frameCount < 66) {
    ellipse(700, 1325, 50, 50)
  } //linea 8 arboles
  if (frameCount > 62 && frameCount < 65) {
    ellipse(800, 935, 50, 50)
  }
  if (frameCount > 62 && frameCount < 65) {
    ellipse(800, 1325, 50, 50)
  } //linea 9 arboles
  if (frameCount > 60 && frameCount < 63) {
    ellipse(900, 935, 30, 30)
  }
  if (frameCount > 60 && frameCount < 63) {
    ellipse(900, 1325, 30, 30)
  } //linea 10 arboles
  if (frameCount > 58 && frameCount < 61) {
    ellipse(1000, 935, 30, 30)
  }
  if (frameCount > 58 && frameCount < 61) {
    ellipse(1000, 1325, 30, 30)
  } //linea 11 arboles
  if (frameCount > 57 && frameCount < 59) {
    ellipse(1100, 935, 30, 30)
  }
  if (frameCount > 57 && frameCount < 59) {
    ellipse(1100, 1325, 30, 30)
  } //linea 12 arboles
  if (frameCount > 55 && frameCount < 58) {
    ellipse(1200, 935, 30, 30)
  }
  if (frameCount > 55 && frameCount < 58) {
    ellipse(1200, 1325, 30, 30)
  } //linea 13 arboles
  if (frameCount > 54 && frameCount < 56) {
    ellipse(1300, 935, 30, 30)
  }
  if (frameCount > 54 && frameCount < 56) {
    ellipse(1300, 1325, 30, 30)
  } //linea 14 arboles
  if (frameCount > 53 && frameCount < 55) {
    ellipse(1400, 935, 50, 50)
  }
  if (frameCount > 53 && frameCount < 55) {
    ellipse(1400, 1325, 50, 50)
  } //linea 15 arboles
  if (frameCount > 51 && frameCount < 53) {
    ellipse(1500, 935, 50, 50)
  }
  if (frameCount > 51 && frameCount < 53) {
    ellipse(1500, 1325, 50, 50)
  } //linea 16 arboles
  if (frameCount > 49 && frameCount < 51) {
    ellipse(1600, 935, 50, 50)
  }
  if (frameCount > 49 && frameCount < 51) {
    ellipse(1600, 1325, 50, 50)
  } //linea 17 arboles
  if (frameCount > 47 && frameCount < 49) {
    ellipse(1700, 935, 50, 50)
  }
  if (frameCount > 47 && frameCount < 49) {
    ellipse(1700, 1325, 50, 50)
  } //linea 18 arboles
  if (frameCount > 45 && frameCount < 48) {
    ellipse(1800, 935, 30, 30)
  }
  if (frameCount > 45 && frameCount < 48) {
    ellipse(1800, 1325, 30, 30)
  } //linea 19 arboles
  if (frameCount > 43 && frameCount < 46) {
    ellipse(1900, 935, 30, 30)
  }
  if (frameCount > 43 && frameCount < 46) {
    ellipse(1900, 1325, 30, 30)
  } //linea 20 arboles
  if (frameCount > 41 && frameCount < 45) {
    ellipse(2000, 935, 50, 50)
  }
  if (frameCount > 41 && frameCount < 45) {
    ellipse(2000, 1325, 50, 50)
  } //linea 21 arboles
  if (frameCount > 39 && frameCount < 43) {
    ellipse(2100, 935, 70, 70)
  }
  if (frameCount > 39 && frameCount < 43) {
    ellipse(2100, 1325, 70, 70)
  } //linea 22 arboles
  if (frameCount > 37 && frameCount < 42) {
    ellipse(2200, 935, 65, 65)
  }
  if (frameCount > 37 && frameCount < 42) {
    ellipse(2200, 1325, 65, 65)
  } //linea 23 arboles
  if (frameCount > 35 && frameCount < 40) {
    ellipse(2300, 935, 50, 50)
  }
  if (frameCount > 35 && frameCount < 40) {
    ellipse(2300, 1325, 50, 50)
  } //linea 24 arboles
  if (frameCount > 34 && frameCount < 39) {
    ellipse(2400, 935, 50, 50)
  }
  if (frameCount > 34 && frameCount < 39) {
    ellipse(2400, 1325, 50, 50)
  } //linea 25 arboles
  if (frameCount > 33 && frameCount < 37) {
    ellipse(2500, 935, 30, 30)
  }
  if (frameCount > 33 && frameCount < 37) {
    ellipse(2500, 1325, 30, 30)
  }
}