
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(270,450,60);
	
	ground = new Ground(800,700,1600,20);
	dustbin1 = new Dustbin(1265,590,20,100)
	dustbin2 = new Dustbin(1105,590,20,100)
	dustbin3 = new Dustbin(1185,650,185,20)

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);
  paper.display(); 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  image(dustbinImage,1085,470,200,220);
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



