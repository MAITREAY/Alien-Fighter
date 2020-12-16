const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var wall;
//var ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,20,1200,ground_options);
    World.add(world,ground);

   ground2 = Bodies.rectangle()


 /*   var ball_option ={
        restitution:1
    }
    ball = Bodies.circle(200,30,30,ball_option);
    World.add(world,ball);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

  //  ellipse(ball.position.x,ball.position.y,30,30);
}