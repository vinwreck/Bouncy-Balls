const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
var engine, world, ground;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,400,800,20, option); 
  World.add(world, ground);
  console.log(ground);

  var options = {
    restitution: 1
  }
  ball = Bodies.circle(400,100,40, options);
  World.add(world, ball);  
}

function draw() {
  background("black");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,40,40);

 //drawSprites();
}