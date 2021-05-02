
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin, Ground, Paper
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	Ground = new ground(width/2, 670, width, 20)
	Paper = new paper(200, 450, 40)
	Dustbin = new dustbin(1200, 650)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display()
  Paper.display()
  Dustbin.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x:85, y:-85})
	}

}



