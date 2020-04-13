const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;  
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  var option1={
  isStatic:true
  };
  var option2={
    friction:0.01,
    inertia : 1000000
    };
  
  bob = Bodies.circle(200,50,30,option2);
  fixedRect = Bodies.rectangle(600,50,200,30,option1);
  chain = new Chain(bob,fixedRect);
  World.add(world,bob);
  World.add(world,fixedRect);
}

function draw() {
  background(0);   
  fill("yellow");
  textSize(25);
  text("Press space key and mouse to oscillate the pendulum.",200,500);
  text("Press Enter to set the pendulum.",250,450);
  display1();
  display2();
  chain.display();
  drawSprites();
  if (keyCode === 32){
    bob.position.y = mouseY;
    bob.position.x = mouseX;
}
   if (keyCode === ENTER){
    bob.position.y = 50;
}
Engine.update(engine);
}





