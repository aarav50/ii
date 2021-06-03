class Stone{
    constructor(x,y){
var options={
    'restitution':0.8,
    'friction':0.9,
    'density':12
}
this.Body=Bodies.rectangle(x,y,80,80,options)
this.width=80
this.height=30
World.add(world,this.Body)
    }
   display(){
       var posX=this.Body.position.x
       var posY = this.Body.position.y
       push()
       translate(posX, posY);
       strokeWeight(2);
    stroke("blue")
    fill("darkblue")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
   }
}