class Bob{
    constructor(x,y){
var options={
    isStatic:true,
    restitution:1.0,
    friction:0,
    density:0.8,


}
this.body=Bodies.circle(x,y,25,options)
    World.add(world,this.body)
    }
    display(){
        ellipse(this.body.position.x,this.body.position.y,50,50)
    
    }
    }
