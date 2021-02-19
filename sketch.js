
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var g,b,d,dd,ddd;
var gamestate = "ready";
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


	g = new ground(400,400,800,20);
	p = new paper(200,200,15);
	d = new dustbin(500,250,25,100);
	dd = new dustbin(600,300,230,25);
	ddd = new dustbin(700,250,25,100);
	Engine.run(engine);
  
}


function draw() {
  
	background(0);

  Engine.update(engine);  
  g.display();
  p.display();
  ddd.display();
  d.display();
  dd.display();
  
if (keyDown(38) && gamestate === "ready"){
	p.jump();
	gamestate = "read";
}

 
}



