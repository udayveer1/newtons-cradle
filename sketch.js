
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,500)
bob2= new Bob(250,500)
bob3= new Bob(300,500)
bob4= new Bob(350,500)
bob5= new Bob(400,500)
	Engine.run(engine);
 roof= createSprite(300,100,400,20)
 var rope= new Rope(bob1.body,roof.body,10,0)
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()	  
  
  drawSprites();
 
}



