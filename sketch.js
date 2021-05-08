const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hammer;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ground.display(); 
    box1.display();
    box2.display();
 
}