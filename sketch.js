var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    line1 = createSprite(400,650,200,20);
	line1.shapeColor = color(255,0,0);

	line2 = createSprite(300,610,20,100);
	line2.shapeColor = color(255,0,0);

	line3 = createSprite(500,610,20,100);
	line3.shapeColor = color(255,0,0);
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true} );
	line1 = Bodies.rectangle(width/2,650,width,20,{isStatic:true});
	line2 = Bodies.rectangle(width/2,610,width,100,{isStatic:true});
    line3 = Bodies.rectangle(width/2,610,width,100,{isStatic:true});
	 World.add(world, ground);
	 World.add(world,line1);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) 
 {
	Matter.Body.setStatic(packageBody,false);

    
  }
}



