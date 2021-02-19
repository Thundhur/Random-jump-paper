class paper{
    constructor(x, y, r) {
      var hello = random(0,1);
        var options = {
            'isStatic': false,
            'restitution':hello,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.radius = r;
      
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.radius, this.radius);
        pop();
      }
      jump(){
        Matter.Body.applyForce(this.body,{x:400,y:200},{x:2,y:2.5});

      }
}
