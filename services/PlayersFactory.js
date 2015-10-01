diceCrawl.factory('PlayersFactory', function PlayersFactory(RacesFactory){
//main vars
  var factory = {};
  factory.players = [];
  factory.maxPlayers = 2;

//create the ability create players in a specific form
function Player(name,color,diceCount,score){
    this.name = name;
    this.color = color;
    this.diceCount = diceCount;
    this.score = score;
  }

  abilities

var playerColors = ["red","yellow","green","blue"];



function addPlayer(player){

    if (factory.players.length < factory.maxPlayers){
      factory.players.push(players);
    }
    else{
      return false;
      }

  }


factory.updateDiceCount(){
//fill in here when method is required
}


return factory;

});
