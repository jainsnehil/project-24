const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world

var hammer,ground,squ1,b,r;


function setup(){
    var canvas = createCanvas(400,400)
    engine=Engine.create();
    world=engine.world

    hammer=new Hammer();

    ground=new Ground();
    
    squ1=new Square();
    //console.log(squ1)

    b=new Ball();

    r=new Rectangle();


}

function draw(){
    background("black")
    Engine.update(engine);

    hammer.display();
    ground.display();
    squ1.display();
    b.display();
    r.display();



    
}