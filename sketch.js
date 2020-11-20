
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy_img;
var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5;
var stone ;
var score;

function preload()
{
   tree_img=loadImage("Plucking mangoes/tree.png");
	 boy_img=loadImage("Plucking mangoes/boy.png"); 
}

function setup() {
  createCanvas(1650, 800);
  
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(850,790,1700,10);
	stone= new Stone(190,590,70,70);
	launcher = new Launcher (stone.body,{x:190,y:590});
	mango1= new Mango(1400,300,60,70);
	mango2= new Mango(1450,230,60,70);
	mango3= new Mango(1300,250,70,75);
	mango4= new Mango(1250,300,60,70);
	mango5= new Mango(1200,260,70,70);
	mango6= new Mango(1200,350,70,70);
	mango7= new Mango(1500,250,70,70);
	mango8= new Mango(1450,340,70,70);
	mango9= new Mango(1300,350,70,70);
	mango10= new Mango(1350,230,60,70);
	mango11= new Mango(1350,120,60,70);
	mango12= new Mango(1420,150,60,70);
	mango13= new Mango(1300,170,70,75);
  mango14= new Mango(1520,360,70,70);

  score=0;
  
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(243,233,236);

  textSize(30);
  text("Score:"+score,50,50)
  image(boy_img,150,480,200,400);
  image(tree_img,1120,50,500,750);
  ground.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  stone.display();


  detect(mango1,stone);
  detect(mango2,stone);
  detect(mango3,stone);
  detect(mango4,stone);
  detect(mango5,stone);
  detect(mango6,stone);
  detect(mango7,stone);
  detect(mango8,stone);
  detect(mango9,stone);
  detect(mango10,stone);
  detect(mango11,stone);
  detect(mango12,stone);
  detect(mango13,stone);
  detect(mango14,stone);
  

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detect(man,sto){
  pos1=man.body.position
  pos2=sto.body.position

  var distance =dist(pos2.x,pos2.y,pos1.x,pos1.y);
  if(distance<=man.r+sto.r){
    Matter.Body.setStatic(man.body,false);
    score=score+1;
  }
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stone.body,{x:200, y:600})
    launcher.attach(stone.body);
  }
}
















