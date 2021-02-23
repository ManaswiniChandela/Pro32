const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon;
var speed = 0;
var score = 0;
//var b1,b2,b3,b4,b5,b6,b7,b8,b9;

function preload(){

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,290,250,10);
  stand2 = new Ground(700,200,200,10);
     
  //line 1
  b1 = new Box(640,175,30,40);
  b2 = new Box(670,175,30,40);
  b3 = new Box(700,175,30,40);
  b4 = new Box(730,175,30,40);
  b5 = new Box(760,175,30,40);
  //line 2
  b6 = new Box(670,135,30,40);
  b7 = new Box(700,135,30,40);
  b8 = new Box(730,135,30,40);
  //line 3
  b9 = new Box(700,95,30,40);

  b10 = new Box(330,235,30,40);
  b11= new Box(360,235,30,40);
  b12= new Box(390,235,30,40);
  b13= new Box(420,235,30,40);
  b14= new Box(450,235,30,40);

  b15= new Box(360,195,30,40);
  b16= new Box(390,195,30,40);
  b17= new Box(420,195,30,40);

  b18= new Box(390,155,30,40);
  
  polygon = new Polygon(50,200,40,40);
  slingshot = new SlingShot(polygon.body,{x :100 ,y :200});
    
  }
  
function draw() {
  background(56,44,44); 

  Engine.update(engine); 
  drawSprites();
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  text("Score : "+score,750,40);

  ground.display();
  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("pink");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();

  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();


  fill("gold");
  
  polygon.display();
  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
      speed = 0
  }
}