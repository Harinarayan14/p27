function display1(){

  fill(255,0,0);
  rectMode(RADIUS);
  circle(bob.position.x,bob.position.y,60);
}
function display2(){

  fill(0,0,255);
  rectMode(CENTER);
  rect(fixedRect.position.x,fixedRect.position.y,200,30);
}