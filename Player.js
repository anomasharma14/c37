class Player {
    constructor(){

    }

    getCount(){
        var playercountRef = database.ref('playerCount');
        playercountRef.on("value",function(data){
playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }}
