class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);

    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      Player.name = this.input.value();
      playerCount+=1;
      Player.index = playerCount;
 player.updateCount(playerCount);

      var name = input.value();
      
    
      //player.update(name)
     
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
