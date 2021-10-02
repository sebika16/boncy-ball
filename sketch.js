const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ball,ground;
var engine,world;


function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  var ball_options={
    restitution:1.8
  }
   ball=Bodies.circle(200,200,50,ball_options)
  World.add(world,ball);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,385,400,10,ground_options);
  World.add(world,ground);
}  

function draw() {
  background(0); 
  Engine.update(engine) 
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,10);
}