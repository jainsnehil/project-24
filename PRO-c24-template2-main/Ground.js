class Ground{
    constructor(){
        var options={
            isStatic:true

     }

     this.body=Bodies.rectangle(200,390,400,20,options)
     this.w=400
     this.h=20
     World.add(world,this.body)
    
    }
    display(){
        push ()
        rectMode(CENTER)
        fill (150,75,0)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop ()



    }



}