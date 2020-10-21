
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;


  var holder_options={
    isStatic: true
  }

holder = Bodies.rectangle(500,50,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0,
  frictionAir:0

}

ball  = Bodies.circle(200,350,40,ball_options);
World.add(world,ball);
console.log(ball);

var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.5,
  length : 200
}
var string = Constraint.create(options);
World.add(world,string);


}


function draw() {
  background(0);  
  Engine.update(engine);
  
fill("white");
textSize(20)
  text("Press space bar to oscillate the pendulum .",10,300);
  text("Press Enter to stop the Pendulum from oscillating",10,350);

fill ("red");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);


fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(4);
stroke("blue");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

if (keyDown("space")){
  ball.position.x= mouseX;
  ball.position.y = mouseY;
  ball.isStatic = false;
}
if (keyDown("enter")){
  
  ball.isStatic = true;
}

drawSprites();
}



