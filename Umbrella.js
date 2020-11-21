class Umbrella {
    constructor(x,y,r){
   var options = {
       isStatic:true
   }
   this.r = r;
   this.body=Bodies.circle(x,y,r,options)
   World.add(world,this.body)
    }
   
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        fill("black")
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop();
    }
   }