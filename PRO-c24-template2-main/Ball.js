class Ball{
    constructor(){
        var options={
            restitution:0.3,
            friction:0.9,
            density:2
        }
        this.body=Bodies.circle(200,200,30,30)
        this.rX=30
        this.rY=30
        World.add(world,this.body)
    }
    display(){
        push ()
        ellipseMode(RADIUS)
        fill(0,0,255)
        ellipse(this.body.position.x,this.body.position.y,this.rX,this.rY)
        pop ()
    }


}