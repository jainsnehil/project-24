class Hammer{
    constructor(){
        var options={
            restitution:0.3,
            density:2,
            friction:0.9
        }

        this.hammer=Bodies.rectangle(200,360,70,35,options)
        this.w=70
        this.h=35
        World.add(world,this.hammer)
        }
        display(){
            this.hammer.position.x=mouseX
            this.hammer.position.y=mouseY
            push()
            rectMode(CENTER)
            fill(0,255,0)
            rect(this.hammer.position.x,this.hammer.position.y,this.w,this.h)
            pop()
       



       }

    }