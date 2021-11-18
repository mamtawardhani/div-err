const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bg1,bg;
var platfrom
var extralog
function preload(){
   
    taketime()
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
platfrom=new Ground(150,315,300,150)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
   
    bird = new Bird(100,100);
rope1 =new rope (bird.body,{x:200,y:50})

}

function draw(){
    if (bg)
    {background(bg)}
    Engine.update(engine);
  
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();


    bird.display();
    rope1.display()
    platfrom.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
    rope1.fly()
}
async function taketime(){
    var store = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var sjson= await store.json()
    var dt=sjson.datetime
  
    var arre = dt.slice(11,13)
    console.log(arre)
    if(arre>06 && arre<16){
        bg1="sprites/bg.png"
    }else {
        bg1="sprites/bg2.jpg"
    } 
    bg=loadImage(bg1)
} 