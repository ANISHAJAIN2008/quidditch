class Game {
    constructor(){
    player0Image=loadImage("JS/RONALD.png");
    player1Image=loadImage("JS/HARRY.png");
    player2Image=loadImage("JS/DRACO.png");
    player3Image=loadImage("JS/LUCIUS.png");
    
    snitch=createSprite(300,70,5,5);
    snitch.addAnimation("snitch",snitchImg);
    snitch.scale = 0.5;
    // snitch.debug=true;
    
    
    HOOP1=createSprite(150,250,200,200);
    HOOP1.addImage(HOOPS);
    HOOP1.scale = 0.4;
    // HOOP1.debug = true;
    
    HOOP2=createSprite(1200,250,200,200);
    HOOP2.addImage(HOOPS);
    HOOP2.scale = 0.4;
    // HOOP2.debug = true;
    
    QUAFFLE=createSprite(400,200,30,30);
    QUAFFLE.addImage(QUAFFLEImage);
    QUAFFLE.scale = 0.1;
    // QUAFFLE.debug=true;
    

    player0=createSprite(100,windowHeight/2,10,10);
    player0.addImage(player0Image);
    player0.scale = 0.3;
    
    player1=createSprite(120,windowHeight,10,10);
    player1.addImage(player1Image);
    player1.scale = 0.3;

    player2=createSprite(70,70,10,10);
    player2.addImage(player2Image);
    player2.scale = 0.3;
    
    player3=createSprite(80,80,10,10);
    player3.addImage(player3Image);
    player3.scale = 0.3;

    
    
    }
    updategameState(gameState) {
        database.ref("/").update({
            gameState: gameState

        })
    }
    getgameState() {
        database.ref("gameState").once("value").then((data) => {
            gameState = data.val();
            console.log("gameState: " + gameState);

        })

    }
 
    
    play(){
        
        
        if(index ===   1 || index === 4){
            if(keyDown(UP_ARROW)){
                this.changePosition(0,-20);
            }
            else if(keyDown(DOWN_ARROW)){
                this.changePosition(0,+20);
            }  
        }
        
        if(index ===   2 || index === 3){
            if(keyDown(UP_ARROW)){
                this.changePosition(0,-20);
            }
            else if(keyDown(DOWN_ARROW)){
                this.changePosition(0,+20);
//  NOT MY LAPTOP YOU BITCH!!!!!!!!!!!!!!!!!!!!!!!!! says ANISHA
//  NOT MAM'S LAPTOP YOU BITCH!!!!!!!!!!!!!!!!!!!!!!!!! IT'S ANISHA'S ORDER
//  NOT MY LAPTOP YOU BITCH!!!!!!!!!!!!!!!!!!!!!!!!! ~YOUR WORST NIGHTMARE:>>
//  NOT MY LAPTOP YOU BITCH!!!!!!!!!!!!!!!!!!!!!!!!! ~BE ALERT AND MAKE YOUR TEAM ALONG WITH VOLDEMORT...

            }  
            else if(keyDown(LEFT_ARROW)){
                this.changePosition(-20,0);
            }
            else if(keyDown(RIGHT_ARROW)){
                this.changePosition(20,0);
            }
        }
        
        
        player.getPlayers();
        //
        for(var plr in allPlayers){
            // plr = player1, player2,player3,player4
            if(plr === "player1"){
                player0.x = allPlayers[plr].x;
                player0.y = allPlayers[plr].y;
                // database.ref("SNITCH").once("value").then((data) =>{
                //     var snitchData = data.val();
                //     snitch.x = snitchData.X;
                //     snitch.y = snitchData.Y;

                // })
                // database.ref("QUAFFLE").once("value").then((data) =>{
                //     var quaffleData = data.val();
                //     QUAFFLE.x = quaffleData.X;
                //     QUAFFLE.y = quaffleData.Y;
                // })

            }   
            if(plr === "player2"){
                player1.x = allPlayers[plr].x;
                player1.y = allPlayers[plr].y;
            }
            if(plr === "player3"){
                player2.x = allPlayers[plr].x;
                player2.y = allPlayers[plr].y;
            }
            if(plr === "player4"){
                player3.x = allPlayers[plr].x;
                player3.y = allPlayers[plr].y;
            }
        }

        // database.ref("/").update({
        //     SNITCH: {
        //         X:snitch.x,
        //         Y:snitch.y
        //     },
        //     QUAFFLE: {
        //         X:QUAFFLE.x,
        //         Y:QUAFFLE.y
        //     }
        // }) 

    snitch.bounceOff(edges);
    QUAFFLE.bounceOff(edges);
    QUAFFLE.bounceOff(player0);
    QUAFFLE.bounceOff(player3);
    
    if(QUAFFLE.isTouching(HOOP1)){
        slytherinPoint=slytherinPoint+1;
        QUAFFLE.x = windowWidth/2;
        QUAFFLE.y = windowHeight/2;
    }
    if(QUAFFLE.isTouching(HOOP2)){
        gryffindorPoint=gryffindorPoint+1;
        QUAFFLE.x = windowWidth/2;
        QUAFFLE.y = windowHeight/2;
    }
    
    
    if(snitch.isTouching(player1)){
        gryffindorPoint=gryffindorPoint+50;
        snitch.destroy();
        gameState="END";

    }
    if(snitch.isTouching(player2)){
        slytherinPoint=slytherinPoint+50;
        snitch.destroy();
        gameState="END";
    }
    imageMode(CENTER);
    image(grass,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    
    
    drawSprites();
    stroke("black");
    strokeWeight(5);
    textSize(25);
    text("GRYFFINDOR POINT: " + gryffindorPoint, 100,100 );
    text("SLYTHERIN POINT: " + slytherinPoint, 990,100 );
    
    text("snitch position "+snitch.x+","+snitch.y, 50,600);
    text("quaffle position "+QUAFFLE.x+","+QUAFFLE.y, 50,550);
}

    changePosition(x,y){
        if(index === 1){
            player0.x = player0.x + x;
            player0.y = player0.y + y;
            player.updatePlayer(index,player0.x,player0.y)
        }
        if(index === 2){
            player1.x = player1.x + x;
            player1.y = player1.y + y;
            player.updatePlayer(index,player1.x,player1.y)
        }
        if(index === 3){
            player2.x = player2.x + x;
            player2.y = player2.y + y;
            player.updatePlayer(index,player2.x,player2.y)
            
        }
        if(index === 4){
            player3.x = player3.x + x;
            player3.y = player3.y + y;
            player.updatePlayer(index,player3.x,player3.y)
        }
    }
}

