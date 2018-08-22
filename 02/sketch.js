var num = 240;
var a = 90
var aa = 90
var ab = 90
var ac = 90
var ad = 90
var ae = 90
var af = 90
var b = 120
var ba = 120
var bc = 120
var bd = 120
var c = 60
var ca = 60
var cb = 60
var cc = 60
var cd = 60
var ce = 60
var d = 150
var e = 30
var ea = 30
var eb = 30
var ec = 30
var ed = 30
var x = 0

function setup() {

  createCanvas(240, 240);
  background(255);
  noStroke();

// rombo esquina parada columna 1
	
	fill(0);
  y = 30 ;
	for(var i = 0; i < num/120; i++) {
  quad(0, y, 30, c, 30, a, 0, c);
	y+=120
	c+=120
	a+=120
}
	
  fill(0);
  y = 0;
  for(var i = 0; i < num/120; i++) {
  triangle(0, y, 30, e, 0, e);
	y+=120
  e+=120
	x+=120
}	
	
	// rombo esquina acostada columna 1
	
	fill(0);
  y = 90 ;
	for(var i = 0; i < num/120; i++) {
  quad(0, y, 30, aa, 60, b, 30, b);
  y+=120
	b+=120
	aa+=120	
}
	
	// rombo esquina parada columna 2
	
 fill(0);
 y = 0;
 for(var i = 0; i < num/120; i++) {
 quad(30, y, 60, ea, 60, ca, 30, ea); 
 y+=120
 ea+=120
 ca+=120
}
	
  // rombo esquina acostada columna 2
	
	fill(0);
  y = 60 ;
	for(var i = 0; i < num/120; i++) {
  quad(30, y, 60, y, 90, ab, 60, ab);
	y+=120
  ab+=120
}
	 // rombo esquina acostada columna 3
	fill(0);
  y = 30 ;
	for(var i = 0; i < num/120; i++) {
  quad(60, y, 90, y, 120, cb, 90, cb);
	y+=120
	cb+=120
	
}
 // rombo esquina acostada columna 4
	fill(0);
  y = 0 ;
	for(var i = 0; i < num/120; i++) {
  quad(90, y, 120, y, 150, eb, 120, eb);
	y+=120
	eb+=120
}	
		// rombo esquina parada columna 4
	 fill(0);
 y = 60;
 for(var i = 0; i < num/120; i++) {
 quad(90, y, 120, ac, 120, ba, 90, ac); 
y+=120
ac+=120
ba+=120
}
	 // rombo esquina parada columna 5
	 fill(0);
 y = 30;
 for(var i = 0; i < num/120; i++) {
 quad(120, y, 150, cc, 150, ad, 120, cc); 
y+=120
cc+=120
ad+=120
	 
}
	 // rombo esquina acostada columna 5
	 
	fill(0);
  y = 90 ;
	for(var i = 0; i < num/120; i++) {
  quad(120, y, 150, y, 180, bc, 150, bc);
	y+=120
  bc+=120	
}
	
	 // rombo esquina parada columna 6
	 fill(0);
 y = 0;
 for(var i = 0; i < num/120; i++) {
 quad(150, y, 180, ec, 180, cd, 150, ec); 
	 y+=120
	 ec+=120
	 cd+=120
}	 
	 // rombo esquina acostada columna 6
	 
	fill(0);
  y = 60 ;
	for(var i = 0; i < num/120; i++) {
  quad(150, y, 180, y, 210, ae, 180, ae);
		y+=120
		ae+=120
	
}
	// rombo esquina acostada columna 7
	 
	fill(0);
  y = 30 ;
	for(var i = 0; i < num/120; i++) {
  quad(180, y, 210, y, 240, ce, 210, ce);
		y+=120
		ce+=120
}
		// rombo esquina parada columna 6
	 fill(0);
 y = 60;
 for(var i = 0; i < num/120; i++) {
 quad(210, y, 240, af, 240, bd, 210, af); 
	 y+=120
	 af+=120
	 bd+=120
}
	// rombo esquina acostada columna 8
	 
	fill(0);
  y = 0 ;
	for(var i = 0; i < num/120; i++) {
  quad(210, y, 240, y, 270, ed, 240, ed);
		y+=120
		ed+=120
}
	
	//triangulo solo columna 3
	triangle(60,0,90,30,90,0);
	//triangulo solo columna 3
	triangle(60,210,90,240,60,240);
	//triangulo solo columna 7
	triangle(180,210,210,240,180,240);
	//triangulo solo columna 7
	triangle(180,0,210,0,210,30);
	//rombo solo columna 3
	quad(60,90,90,120,90,150,60,120);
	//rombo solo columna 7
	quad(180,90,210,120,210,150,180,120);
}

	














