var ball;
var database;
var name2;
var post;
var form;
var name= "";
var playercount;
var player;
var allPlayers;
var gameState;
var balloon;
var backgroundImage;
var player0, player0Image;
var player1, player1Image;
var player2, player2Image;
var player3, player3Image;
var index;
var end;
var snitch,snitchImg;
var edges;
var grass;
var HOOPS;
var QUAFFLE,QUAFFLEImage;
var HOOP1;
var HOOP2;
var gryffindorPoint=0;
var slytherinPoint=0;
var velocityCheck= true;
function preload(){
// backgroundImage=loadImage
snitchImg = loadAnimation("JS/frame_00_delay-0.01s.gif","JS/frame_01_delay-0.01s.gif","JS/frame_02_delay-0.01s.gif","JS/frame_03_delay-0.01s.gif","JS/frame_04_delay-0.01s.gif","JS/frame_05_delay-0.01s.gif","JS/frame_06_delay-0.01s.gif","JS/frame_07_delay-0.01s.gif","JS/frame_08_delay-0.01s.gif","JS/frame_09_delay-0.01s.gif","JS/frame_10_delay-0.01s.gif","JS/frame_11_delay-0.01s.gif","JS/frame_12_delay-0.01s.gif","JS/frame_13_delay-0.01s.gif","JS/frame_14_delay-0.01s.gif","JS/frame_15_delay-0.01s.gif")
grass = loadImage("JS/grass.jpg")
HOOPS = loadImage("JS/HOOPS.png")
QUAFFLEImage = loadImage("JS/QUAFFLE.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight); 
    
    form = new Form(); //constructor
    player = new Player();
    game=new Game();

    database = firebase.database();
    edges = createEdgeSprites();
}

function draw(){
    background("white");
    text("snitch position "+snitch.x+","+snitch.y, 200,500);
    text("quaffle position "+QUAFFLE.x+","+QUAFFLE.y, 200,600);
    if(playercount===4 && gameState===0){
        
        gameState=1;
        game.updategameState(1);
        
        
    }else{
        player.getplayercount();
        game.getgameState();
        form.display();
    }
    if(gameState === 1){
        if(velocityCheck){
            QUAFFLE.velocityX=10;
            QUAFFLE.velocityY=10;
            snitch.velocityX=10;
            snitch.velocityY=10;
            velocityCheck=false;
        }
        game.play();
    }
    if(gameState==="END"){
        
        if(slytherinPoint>gryffindorPoint){
            text(" SLYTHERIN WINS ", 200,200);
            
        }
        else{
            text(" GRYFFINDOR WINS ", 200,200);
        }

    }
}

