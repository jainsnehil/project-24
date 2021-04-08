class Square{
    constructor(){
        var options={
            restitution:0.3,
            friction:0.9,
            density:2
        }
        this.squ=Bodies.rectangle(100,300,60,60,options)
        this.w=60
        this.h=60
        World.add(world,this.squ)
    }
    display(){
        push ()
        rectMode(CENTER)
        fill (255,0,0)
        rect(this.squ.position.x,this.squ.position.y,this.w,this.h)
        pop ()

    }




}