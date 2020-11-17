const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var ball;
var score=0;
var count=0;
var gameState="start";

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(400,800,800,20);
  
    for(var k=0; k<=800; k=k+80){
      divisions.push(new Division(k,650,10,300))
    }

    for(var k=75; k<=800; k=k+50){
      plinkos.push(new Plinko(k,75))
    }

    for(var k=50; k<=790; k=k+50){
      plinkos.push(new Plinko(k,175))
    }

    for(var k=75; k<=800; k=k+50){
      plinkos.push(new Plinko(k,275))
    }

    for(var k=50; k<=790; k=k+50){
      plinkos.push(new Plinko(k,375))
    }
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     ball=new Particle(mouseX, 10, -10, 10); 
  }   
}

function draw() {
  background(0);  
  Engine.update(engine);

  fill(255);
  textSize(35);
  text("Score: "+score,20,40);

  text("500",10,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);

  text("300",330,550);
  text("300",410,550);
  text("300",490,550);

  text("100",570,550);
  text("100",650,550);
  text("100",730,550);

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }

  if(ball!==null){
    ball.display();
    if(ball.body.position.y>760){


      if(ball.body.position.x<300){
        score=score=500;
        ball=null;
        if(count>=5){
          gameState="end";
        }
      }

      if(ball.body.position.x<600 && (ball.body.position.x>300)){
        score=score=300;
        ball=null;
        if(count>=5){
          gameState="end";
        }
      }

      if(ball.body.position.x<900 && (ball.body.position.x>600)){
        score=score=100;
        ball=null;
        if(count>=5){
          gameState="end";
        }
      }
    }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground.display();
}