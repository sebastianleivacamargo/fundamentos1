function setup() {
  createCanvas(250, 350);
}

function draw() {
  background(250, 250, 220);
	
	noStroke();
	
	fill(250,250,200);
	rect(0,0,250,170);
	fill(203,238,241);
	rect(0,325,250,25);
	fill(100,200,200);
	rect(0,347,250,3);
	
	fill(200,0,10);
	ellipse(62,68,130,130);
	fill(200,100,100);
	ellipse(62,68,124,124);
	fill(250,240,120);
	ellipse(101,119,58,58);
	fill(200,0,10);
	ellipse(101,119,39,39);
	fill(0,0,0);
	ellipse(62,68,110,110);
	fill(90,50,100);
	ellipse(62,68,50,50);
	
	fill(209,177,222);
	ellipse(50,248,58,58);
	fill(100,200,200);
	ellipse(50,248,50,50);
	stroke(0);
  fill(250,240,120);
	ellipse(50,248,35,35);
	
	noStroke();
	fill(250,230,120);
	ellipse(200,306,46,46);
	fill(255,243,211);
	ellipse(200,305,36,36);
	fill(51,128,184);
	ellipse(198,303,30,30);
	fill(243,210,140);
	ellipse(250,106,40,40);
	stroke(0);
	fill(255,255,255);
	ellipse(250,106,36,36);
	fill(0,0,0);
	ellipse(250,106,24,24);
	stroke('red');
	fill(255,255,255);
	ellipse(250,106,18,18);
	stroke(0);
	fill('red');
	ellipse(250,70,8,8);
	
	line(132,320,222,260);
	line(146,338,209,279);
	line(224,302,301,5);
	line(168,30,168,120);
	line(94,167,168,89);
	line(168,89,329,225);
	line(154,64,186,64);
  line(160,72,190,72);	
	line(206,277,250,277);
	line(213,287,250,287);
	line(150,34,212,64);
	line(170,236,2502,236);
	
	
	fill(203,238,241);
	beginShape();
	vertex(94,167);
	vertex(168,89);
	vertex(250,158);
	endShape();
	
	line(55,171,233,122);
	
	noStroke();
	fill(203,238,241);
	beginShape();
	vertex(94,167);
	vertex(250,158);
	vertex(250,205);
	vertex(130,196);
	endShape();
	
	
	stroke(0);
	fill(0,0,0);
  quad(67,217,72,213,150,256,145,262);
	fill(255,255,255);
	quad(150,256,262,125,258,122,144,252);
	quad(144,252,232,153,229,148,134,246);
	quad(134,246,200,177,185,162,130,244);
	quad(130,244,170,183,144,158,114,236);
	fill(0,0,0);
	quad(170,183,144,158,138,175,164,192);
	fill(246,238,220);
	quad(164,192,138,175,132,190,158,202);
	fill(110,161,98);
	quad(158,202,132,190,128,201,148,217);
	fill(246,238,220);
	quad(148,217,128,201,123,213,139,230);
	fill(184,133,25);
	quad(139,230,123,213,114,236,130,244);
	fill(0);
	quad(185,162,180,170,194,182,201,177);
	fill(246,238,220);
	quad(180,170,195,182,188,190,176,176);
	fill(0);
	quad(176,176,188,190,183,195,172,183);
	fill(246,238,220);
	quad(172,183,183,195,176,202,165,193);
	fill(136,213,217);
	quad(176,202,164,193,158,202,169,210);
	fill(246,238,220);
	quad(158,202,169,210,156,223,148,217);
	fill(0);
	quad(156,223,148,217,140,230,145,234);
	fill(203,249,250);
	quad(140,230,145,234,133,246,130,244);
	fill(246,238,220);
	quad(133,246,145,234,154,241,144,252);
	fill(151,207,117);
	quad(154,241,144,252,151,255,158,246);
	
	
  noFill();
  
  beginShape();
  vertex(214, 110);
  quadraticVertex(229,65,258,50);
  endShape();
	beginShape();
  vertex(211, 102);
  quadraticVertex(220,58,267,20);
  endShape();
	beginShape();
  vertex(217, 236);
  quadraticVertex(220,217,237,214);
  endShape();
	beginShape();
  vertex(237, 214);
  quadraticVertex(260,215, 260,236);
  endShape();
	
	
	beginShape();
  vertex(84, 187);
  quadraticVertex(70,180, 71,159);
  endShape();
	beginShape();
  vertex(71, 159);
  quadraticVertex(76,146, 89,153);
  endShape();
	line(89,153,102,163);
	beginShape();
  vertex(102,163);
  quadraticVertex(113,170, 123,156);
  endShape();
	line(122,156,129,144);
	beginShape();
  vertex(129,145);
  quadraticVertex(135,134, 149,138);
  endShape();
	line(149,138,160,146);
	beginShape();
  vertex(160,146);
  quadraticVertex(170,150, 175,142);
  endShape();
	line(174,142,188,129);
	beginShape();
  vertex(188,130);
  quadraticVertex(202,120, 215,119);
  endShape();
	beginShape();
  vertex(215,119);
  quadraticVertex(225,117, 240,120);
  endShape();
	
	beginShape();
  vertex(142,112);
  quadraticVertex(185,111, 189,76);
  endShape();
	
	line(100,230,100,217);
	beginShape();
  vertex(100,217);
  quadraticVertex(105,195, 128,197);
  endShape();
	
	stroke('green');
	beginShape();
  vertex(163,176);
  quadraticVertex(164,166, 169,167);
  endShape();
	beginShape();
  vertex(169,167);
  quadraticVertex(173,165, 178,174);
  endShape();
	
		stroke('brown');
	beginShape();
  vertex(161,174);
  quadraticVertex(164,162, 169,165);
  endShape();
	beginShape();
  vertex(168,165);
  quadraticVertex(173,162, 180,172);
  endShape();
	
	stroke('yellow')
	beginShape();
  vertex(191,167);
  quadraticVertex(200,158, 210,167);
  endShape();
	
	stroke(0);
	line(156,222,169,233);
	line(169,210,182,217);
	line(175,201,190,209);
	line(184,195,194,204);
	line(188,190,199,198);
	line(195,183,204,192);
	line(199,176,208,187);
  line(212,165,219,174);
	line(221,155,228,164);
	line(232,153,234,156);
	line(235,145,241,150);
	
	fill(0);
	quad(160,214,160,217,309,190,308,189);
	stroke(0)
	fill(171,33,22);
	quad(156,234,156,236,293,198,292,197);
	
	
	
}