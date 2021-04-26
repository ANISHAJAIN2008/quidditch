class Form {
    constructor(){
        this.text = createInput("")
        this.text.position(20,70);

        this.title1 = createElement("h1");
        this.title1.position(20,20);

        this.addButton = createButton("Log in");
        this.addButton.position(40,40);

        this.resetButton = createButton("RELOAD");
        this.resetButton.position(120,40);

    }
    
    display() {
        this.title1.html("LUDO "+name2);
        name2 = this.text.value();

        this.addButton.mousePressed(() => {
            
            player.addPlayer(name2)
            playercount = playercount + 1;
            player.updateplayercount(playercount);
        });
        this.resetButton.mousePressed(() => {
            
            player.removePlayer()
            player.updateplayercount(0);
            game.updategameState(0);
        });
    }
    
}