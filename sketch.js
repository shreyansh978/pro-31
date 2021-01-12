const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;
var division1,division2,division3,division4,division5,division6,division7;
var plinko1;
function setup() {
  createCanvas(485,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,790,800,20);
  division1 =  new Division(5,630,5,300);
  division2 =  new Division(85,630,5,300);
  division3 =  new Division(165,630,5,300);
  division4 =  new Division(245,630,5,300);
  division5 =  new Division(325,630,5,300);
  division6 =  new Division(405,630,5,300);
  division7 =  new Division(483,630,5,300);
  plinko1 = new Plinko(40,100,10);
  plinko2 = new Plinko(80,100,10);
  plinko3 = new Plinko(120,100,10);
  plinko4 = new Plinko(160,100,10);
  plinko5 = new Plinko(200,100,10);
  plinko6 = new Plinko(240,100,10);
  plinko7 = new Plinko(280,100,10);
  plinko8 = new Plinko(320,100,10);
  plinko9 = new Plinko(360,100,10);
  plinko10 = new Plinko(400,100,10);
  plinko11= new Plinko(440,100,10);
  plinko12 = new Plinko(80,200,10);
  plinko13 = new Plinko(120,200,10);
  plinko14 = new Plinko(160,200,10);
  plinko15 = new Plinko(200,200,10);
  plinko16 = new Plinko(240,200,10);
  plinko17 = new Plinko(280,200,10);
  plinko18 = new Plinko(320,200,10);
  plinko19 = new Plinko(360,200,10);
  plinko20 = new Plinko(400,200,10);
  plinko21 = new Plinko(40,300,10);
  plinko22 = new Plinko(80,300,10);
  plinko23 = new Plinko(120,300,10);
  plinko24 = new Plinko(160,300,10);
  plinko25 = new Plinko(200,300,10);
  plinko26 = new Plinko(240,300,10);
  plinko27 = new Plinko(280,300,10);
  plinko28 = new Plinko(320,300,10);
  plinko29 = new Plinko(360,300,10);
  plinko30 = new Plinko(400,300,10);
  plinko31 = new Plinko(440,300,10);
  plinko32 = new Plinko(80,400,10);
  plinko33 = new Plinko(120,400,10);
  plinko34 = new Plinko(160,400,10);
  plinko35 = new Plinko(200,400,10);
  plinko36 = new Plinko(240,400,10);
  plinko37 = new Plinko(280,400,10);
  plinko38 = new Plinko(320,400,10);
  plinko39 = new Plinko(360,400,10);
  plinko40 = new Plinko(400,400,10);

}

function draw() {
  background("black");  
  Engine.update(engine);
  //console.log(frameCount);
  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  dropParticle();
  drawSprites();
}

function dropParticle(){
  if (frameCount%60===0) {
    particles.push(new Particle(random(485/2-10,485/2+10),10,10));
  }
}
