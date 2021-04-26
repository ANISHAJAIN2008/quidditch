class Player {
    constructor() {
        
    }
    getplayercount() {
        database.ref("playercount").once("value").then((data) => {
            playercount = data.val();
            console.log("playercount: " + playercount);

        })

    }

    updateplayercount(playercount) {
       
        database.ref("/").update({
            playercount: playercount
        }) 
    }


    addPlayer(name2) {
        database.ref("playercount").once("value").then((data) => {
            playercount = data.val();
            index = playercount;
            console.log("Add player fn " + playercount);
            database.ref("Players/player" + playercount).update({
                Name: name2,
                x: windowWidth/6*playercount+100,
                y: windowHeight/2
            })
        })

    }
    updatePlayer(pc,x,y) {
        
        database.ref("Players/player" + pc).update({
            Name: name2,
            x: x,
            y: y
        })

    }


    removePlayer() {
        console.log("Remove player fn " + playercount);
        database.ref("/").update({
        Players: null
        })

    }
    getPlayers() {
        database.ref("/").once("value").then((data) => {
            allPlayers = data.val().Players;
            console.log("get player fn " + allPlayers);
        })

    }
}




