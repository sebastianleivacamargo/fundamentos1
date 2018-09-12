var miHora;
var miMinuto;
var miSegundo;

var anguloGrados = 0



function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  miHora = hour();
  miMinuto = minute();
  miSegundo = second();
  var miColor = hour();


  fill(255);
  arc(300, 300, 580, 200, radians(0), radians(180));
  arc(300, 300, 580, 200, radians(180), radians(0));

  if (miColor == 1) {
    fill('red');
  }
  if (miColor == 2) {
    fill('pink');
  }
  if (miColor == 3) {
    fill('green');
  }
  if (miColor == 4) {
    fill('blue');
  }
  if (miColor == 5) {
    fill('orange');
  }
  if (miColor == 6) {
    fill('aqua');
  }
  if (miColor == 7) {
    fill('chartreuse');
  }
  if (miColor == 8) {
    fill('darkseagreen');
  }
  if (miColor == 9) {
    fill('fuchsia');
  }
  if (miColor == 10) {
    fill('mediumspringreen');
  }
  if (miColor == 11) {
    fill('slateblue');
  }
  if (miColor == 12) {
    fill('thistle');
  }
  if (miColor == 13) {
    fill('tan');
  }
  if (miColor == 14) {
    fill('salmon');
  }
  if (miColor == 15) {
    fill('purple');
  }
  if (miColor == 16) {
    fill('moccasin');
  }
  if (miColor == 17) {
    fill('MediumVioletRed');
  }
  if (miColor == 18) {
    fill('olive');
  }
  if (miColor == 19) {
    fill('MediumTurquoise');
  }
  if (miColor == 20) {
    fill('Maroon');
  }
  if (miColor == 21) {
    fill('lime');
  }
  if (miColor == 22) {
    fill('LightSteelBlue');
  }
  if (miColor == 23) {
    fill('khaki');
  }
  if (miColor == 24) {
    fill('indianRed');
  }



  ellipse(width / 2, height / 2, 185, 185);
  push();
  if (miHora >= 0 && miHora <= 1) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 1;
  }
  if (miHora > 1 && miHora <= 2) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 2;
  }
  if (miHora > 2 && miHora <= 3) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 3;
  }
  if (miHora > 3 && miHora <= 4) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 4;
  }
  if (miHora > 4 && miHora <= 5) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 5;
  }
  if (miHora > 5 && miHora <= 6) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 6;
  }
  if (miHora > 6 && miHora <= 7) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 7;
  }
  if (miHora > 7 && miHora <= 8) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 8;
  }
  if (miHora > 8 && miHora <= 9) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 9;
  }
  if (miHora > 9 && miHora <= 10) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 10;
  }
  if (miHora > 10 && miHora <= 11) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 11;
  }
  if (miHora > 11 && miHora <= 12) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 12;
  }
  if (miHora > 12 && miHora <= 13) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 13;
  }
  if (miHora > 13 && miHora <= 14) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 14;
  }
  if (miHora > 14 && miHora <= 15) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 15;
  }
  if (miHora > 15 && miHora <= 16) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 16;
  }
  if (miHora > 16 && miHora <= 17) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 17;
  }
  if (miHora > 17 && miHora <= 18) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 18;
  }
  if (miHora > 18 && miHora <= 19) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 19;
  }
  if (miHora > 19 && miHora <= 20) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 20;
  }
  if (miHora > 20 && miHora <= 21) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 21;
  }
  if (miHora > 21 && miHora <= 22) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 22;
  }
  if (miHora > 22 && miHora <= 23) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 23;
  }
  if (miHora > 23 && miHora <= 24) {
    ellipse(width / 2, height / 2, 185, 185);
    miColor = 24;
  }
  pop();

  fill(0);
  ellipse(width / 2, height / 2, 90, 90);

  push();
  strokeWeight(3);
  if (miSegundo >= 1 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(394, 305, 435, 320);
  }
  if (miSegundo >= 2 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(394, 285, 435, 260);
  }
  if (miSegundo >= 3 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(205, 285, 160, 260);
  }
  if (miSegundo >= 4 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(205, 305, 160, 320);
  }
  if (miSegundo >= 5 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(220, 245, 175, 220);
  }
  if (miSegundo >= 6 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(375, 245, 415, 220);
  }
  if (miSegundo >= 7 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(383, 345, 420, 370);
  }
  if (miSegundo >= 8 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(218, 345, 182, 370);
  }
  if (miSegundo >= 9 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(202, 356, 165, 350);
  }
  if (miSegundo >= 10 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(185, 275, 144, 289);
  }
  if (miSegundo >= 11 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(240, 370, 220, 390);
  }
  if (miSegundo >= 12 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(359, 370, 375, 390);
  }
  if (miSegundo >= 13 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(395, 352, 425, 340);
  }
  if (miSegundo >= 14 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(410, 275, 440, 290);
  }
  if (miSegundo >= 15 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(390, 236, 425, 240);
  }
  if (miSegundo >= 16 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(355, 225, 375, 212);
  }
  if (miSegundo >= 17 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(243, 225, 225, 212);
  }
  if (miSegundo >= 18 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(233, 220, 210, 222);
  }
  if (miSegundo >= 19 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(200, 234, 160, 242);
  }
  if (miSegundo >= 20 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(230, 380, 210, 370);
  }
  if (miSegundo >= 21 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(420, 314, 460, 305);
  }
  if (miSegundo >= 22 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(367, 217, 377, 230);
  }
  if (miSegundo >= 23 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(180, 314, 140, 300);
  }

  if (miSegundo >= 24 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(410, 363, 460, 360);
  }
  //ultimo
  if (miSegundo >= 25 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(433, 360, 470, 340);
  }
  if (miSegundo >= 26 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(433, 310, 470, 288);
  }
  if (miSegundo >= 27 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(422, 267, 470, 270);
  }
  if (miSegundo >= 28 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(405, 228, 450, 230);
  }
  if (miSegundo >= 29 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(370, 380, 390, 370);
  }
  if (miSegundo >= 30 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(182, 236, 140, 222);
  }
  if (miSegundo >= 31 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(165, 282, 125, 265);
  }
  if (miSegundo >= 32 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(165, 310, 125, 320);
  }
  if (miSegundo >= 33 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(190, 354, 145, 330);
  }
  if (miSegundo >= 34 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(165, 342, 125, 360);
  }
  if (miSegundo >= 35 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(180, 354, 155, 370);
  }
  if (miSegundo >= 36 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(450, 351, 500, 350);
  }
  if (miSegundo >= 37 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(456, 296, 500, 286);
  }
  if (miSegundo >= 38 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(445, 267, 500, 246);
  }
  if (miSegundo >= 39 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(460, 260, 480, 238);
  }
  if (miSegundo >= 40 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(430, 230, 460, 245);
  }
  if (miSegundo >= 41 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(159, 230, 110, 235);
  }
  if (miSegundo >= 42 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(139, 232, 115, 255);
  }
  if (miSegundo >= 43 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(127, 242, 80, 248);
  }
  if (miSegundo >= 44 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(138, 272, 80, 280);
  }
  if (miSegundo >= 45 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(145, 314, 110, 310);
  }
  if (miSegundo >= 46 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(130, 312, 110, 290);
  }
  if (miSegundo >= 47 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(148, 350, 90, 350);
  }
  if (miSegundo >= 48 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(128, 350, 80, 330);
  }
  if (miSegundo >= 49 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(470, 350, 520, 330);
   }
  if (miSegundo >= 50 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(494, 340, 539, 346);
   }
  if (miSegundo >= 51 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(484, 290, 535, 310);
  }
  if (miSegundo >= 52 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(484, 253, 535, 260);
  }
  if (miSegundo >= 53 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(510, 300, 559, 280);
  }
  if (miSegundo >= 54 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(533, 290, 575, 300);
   }
  if (miSegundo >= 55 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(553, 295, 572, 317);
     }
  if (miSegundo >= 56 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(99, 278, 60, 317);
  }
  if (miSegundo >= 57 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(80, 295, 40, 290);
     }
  if (miSegundo >= 58 && miSegundo <= 59) {
    stroke(255, 0, 0);
    line(68, 293, 40, 270);
    }
  if (miSegundo >= 59 && miSegundo <= 59) {
    stroke(0);
   fill(255);
    ellipse (width / 2, height / 2, 35, 35)
  
  
    stroke(0);
  }
  pop();


  //   push();
  //   if (miSegundo == 59) {
  //     fill('pink');
  //     arc(300, 300, 580, 200, radians(0), radians(180));
  //     arc(300, 300, 580, 200, radians(180), radians(0));
  //     pop();


}