diceCrawl.factory('PlayersFactory', function PlayersFactory(){

  var factory = {};
  factory.players = [];
  factory.maxPlayers = 4;

  function Player(name,color,dicecount,score){
    this.name = name;
    this.color = color;
    this.diceCount = dicecount;
    this.score = score;
  }

  playerColors = ["red","yellow","green","blue"];

function addPlayer(player){

    if (factory.players.length < factory.maxPlayers){
      factory.players.push(player);
    }
    else{
      return false;
      }

  }


//factory.updateDiceCount(){
//fill in here when method is required
//}

return factory;

});
