
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground, gameState,engine, world,dustbin,paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	gameState = "start";
	

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new Dustbin(1200, 690);
	paper = new Paper(100, 300, 50);
	ground = new Ground(800,690,1600,20);
}

	function draw() {
		ground.display();
		if (gameState === "start") {
		  background("black");
		  textSize(20);
		  fill("red");
		  text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
		  if (keyCode === DOWN_ARROW) {
			gameState = "play"
		  }
		}
		if (gameState === "play") {
		  rectMode(CENTER);
		  background("grey");
		  dustbin.display();
		  paper.display();
	  
		}
	  }
	  
	  
	  function keyPressed(){
		if (keyCode === UP_ARROW && gameState === "play") {
		  Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 130,
			y: -145
		  });
		}
	  }
