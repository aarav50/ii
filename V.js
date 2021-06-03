class V{
    constructor(x,y){
var options={
    'restitution':0.7,
    'friction':0.5,
    'density':30
}
this.Body=Bodies.rectangle(x,y,80,80,options)
this.width=80
this.height=380
World.add(world,this.Body)
    }
   display(){
       var posX=this.Body.position.x
       var posY = this.Body.position.y
       push()
       translate(posX, posY);
       strokeWeight(2);
    stroke("green")
    fill("yellow")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
   }
}