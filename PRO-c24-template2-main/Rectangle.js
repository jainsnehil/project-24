class Rectangle{
    constructor(){
        var options={
            restitution:0.3,
            friction:0.9,
            density:2
        }
        this.body=Bodies.rectangle(270,200,100,50)
        this.w=100
        this.h=50
        World.add(world,this.body)
    }
    display(){
        push ()
        rectMode(CENTER)
        fill (130,250,255)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop ()
    }
}