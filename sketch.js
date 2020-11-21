const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
var maxDrops = 100;
var batman;
var drops = [];
var bolt,umbrella;
var batWalk,canvas, thunderBolt;
var tframe = 0;
var bolt1,bolt2,bolt3,bolt4;
function preload(){
    batWalk = loadAnimation(
    "images/walking_1.png",
    "images/walking_2.png",
    "images/walking_3.png",
    "images/walking_4.png",
    "images/walking_5.png",
    "images/walking_6.png",
    "images/walking_7.png",
    "images/walking_8.png");
    //batWalk = loadImage("images/walking_1.png");
    bolt1 = loadImage("images/bolt/1.png");
    bolt2 = loadImage("images/bolt/2.png");
    bolt3 = loadImage("images/bolt/3.png");
    bolt4 = loadImage("images/bolt/4.png");
}
function setup(){
    createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   

    umbrella=new Umbrella(200,400,65);
    batman = createSprite(displayWidth/2,700);
    batman.addAnimation("BATMAN",batWalk);
    batman.scale = 0.4;
    
   

   
    for(var i=0;i<maxDrops;i++){
        drops.push(new Rain(random(0,400),random(0,400),5));
    }
   
    ground1 = new Ground(240,791,480,10);

   
}

function draw(){
    background("black");
    Engine.update(engine);
    umbrella.display();
    
    for (var j = 0; j < drops.length; j++) {
        drops[j].display();
        drops[j].update();
      }
    

    if(frameCount % 15 === 0){
        spawnBolt();
        
     }
     
    ground1.display();
    drawSprites();
  
}

function spawnBolt(){
    var rand = Math.round(random(1,4));
    
    if(frameCount % 80 === 0) {  
    tframe = frameCount;  
    thunderBolt = createSprite(random(displayWidth/2-100, displayWidth/2+100), 20, 10, 10)
    
    
switch(rand){
    case 1: thunderBolt.addImage(bolt1);
    thunderBolt.scale = 0.4;
    console.log("C1");
    break;

    case 2: thunderBolt.addImage(bolt2);
    thunderBolt.scale = 0.4;
    console.log("C2");
    break;

    case 3: thunderBolt.addImage(bolt3);
    thunderBolt.scale = 0.4;
    console.log("C3");
    break;

    case 4: thunderBolt.addImage(bolt4);
    thunderBolt.scale = 0.4;
    console.log("C4");
    break;

    default: break;
}
if(tframe + 10 === frameCount && thunderBolt){
    thunderBolt.destroy();
}
}
}

