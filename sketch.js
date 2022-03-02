var database;
var quest;
var Contestantsd;
//var Question;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  createSprite(400, 200, 50, 50);
  quest = new Question;
  quest.display();
 
}

function draw() {
  background("yellow");  
 

  drawSprites();
}