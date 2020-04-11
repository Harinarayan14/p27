class Chain{
    constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness:1,
        length:400
    };
    this.chain1 = Matter.Constraint.create(options);
    World.add(world,this.chain1);
    }
    display(){
        var pointA = this.chain1.bodyA.position;
        var pointB = this.chain1.bodyB.position;
    
        push();
        stroke(0,255,0);
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
    
    }