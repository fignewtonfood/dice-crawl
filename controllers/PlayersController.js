diceCrawl.controller('PlayersCtrl', function PlayerCtrl($scope, GamesFactory){

$scope.maxPlayers = GamesFactory.maxPlayers;
$scope.players = GamesFactory.players;
var colors = ["red","green","yellow","blue"];
var classes = [

  { className: "Alchemist",
  powerOne: { powerName: "Reveal", requirement: 1, diceOne: 1, diceTwo: 6 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 5 },
  powerThree: { powerName: "Reinforcements", requirement: 3, diceFive: 3, diceSix: 4 } },
  { className: "Archer",
  powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Avenger",
  powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Attack", requirement: 1, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Reveal", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Barbarian",
  powerOne: { powerName: "Onslaught", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Onslaught", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Roll +1", requirement: null, diceFive: 5, diceSix: 5 } },
  { className: "Cleric",
  powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Withdraw", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Reinforcements", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Explorer",
  powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Rotate", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Necromage",
  powerOne: { powerName: "Roll +1", requirement: null, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Reinforcements", requirement: 4, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 5, diceSix: 5 } },
  { className: "Ranger",
  powerOne: { powerName: "Scout", requirement: 1, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Reveal", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Roll +1", requirement: 3, diceFive: 5, diceSix: 5 } },
  { className: "Rogue",
  powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Hoarder", requirement: null, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Slinger",
  powerOne: { powerName: "Reveal", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Onslaught", requirement: 4, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Scout", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Soldier",
  powerOne: { powerName: "Garrison", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Reinforcements", requirement: 1, diceFive: 5, diceSix: 5 } },
  { className: "Witch",
  powerOne: { powerName: "Attack", requirement: 3, diceOne: 3, diceTwo: 3 },
  powerTwo: { powerName: "Swap", requirement: 4, diceThree: 4, diceFour: 4 },
  powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 5, diceSix: 5 } }
];
var races = [

  { raceName: "Centaur",
  powerOne: { powerName: "Reinforcements", requirement: 2, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Reinforcements", requirement: 1, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Withdraw", requirement: null, diceFive: 6, diceSix: 6 } },
  { raceName: "Dwarf",
  powerOne: { powerName: "Reveal", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Swap", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Rotate", requirement: 1, diceFive: 6, diceSix: 6 } },
  { raceName: "Goblin",
  powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Hoarder", requirement: null, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Withdraw", requirement: null, diceFive: 6, diceSix: 6 } },
  { raceName: "Halfling",
  powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Withdraw", requirement: 1, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Hoarder", requirement: null, diceFive: 6, diceSix: 6 } },
  { raceName: "High Elf",
  powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Reveal", requirement: null, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Rotate", requirement: null, diceFive: 6, diceSix: 6 } },
  { raceName: "Hobgoblin",
  powerOne: { powerName: "Garrison", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Withdraw", requirement: 3, diceFive: 6, diceSix: 6 } },
  { raceName: "Human",
  powerOne: { powerName: "Withdraw", requirement: null, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Garrison", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Roll +1", requirement: null, diceFive: 6, diceSix: 6 } },
  { raceName: "Kobold",
  powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Reinforcements", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Scout", requirement: 3, diceFive: 6, diceSix: 6 } },
  { raceName: "Lizardman",
  powerOne: { powerName: "Scout", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Garrison", requirement: 1, diceFive: 6, diceSix: 6 } },
  { raceName: "Orc",
  powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Rotate", requirement: 3, diceFive: 6, diceSix: 6 } },
  { raceName: "Troll",
  powerOne: { powerName: "Attack", requirement: 1, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Attack", requirement: 1, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Attack", requirement: 1, diceFive: 6, diceSix: 6 } },
  { raceName: "Werewolf",
  powerOne: { powerName: "Roll +1", requirement: null, diceOne: 1, diceTwo: 1 },
  powerTwo: { powerName: "Attack", requirement: 2, diceThree: 2, diceFour: 2 },
  powerThree: { powerName: "Shapechange", requirement: 6, diceFive: 6, diceSix: 6 } }
];


//player.abilities.race.powerOne.diceOne = 1
//create the ability create players in a specific form
function Player(playerColor, diceCount, rollCount, score, abilities){
  this.playerColor = String(playerColor);
  this.diceCount = Number(25);
  this.score = Number(0);
  //rollCount represents the number of dice the player will roll during a turn.
  // abilities can modify it as well as near end game situations EDGE CASES
  this.rollCount = Number(5);
  this.roll = [];
  this.abilities = {playerRace:{},playerClass:{}};
}

function randomSelectDelete(selectedArray) {
  var randomNumber = Math.floor((Math.random() * selectedArray.length));
  var selectedItem = selectedArray[randomNumber];
  selectedArray.splice(selectedArray.indexOf(selectedItem), 1);
  return selectedItem;
}


//the player clicks roll
//diceCount is adjusted according to how many dice the player is able to roll
//this affects the grid representing how many dice are left
//for every number in the rollCount a dice object is created
//each die is rolled (die.roll())
    //which will return a random number from 1 to 6


// Player.pullDiceToRoll(){
//   if (this.diceCount < this.rollCount) {
//     this.rollCount = this.diceCount;
//   } else {
//     this.diceCount -= this.rollCount;
//   }
//   while (var i <= rollCount ){//five will
//     roll(rollCount);
//     i += 1;
//   }
// }

Player.prototype.setPlayerColor = function() {
  this.playerColor = randomSelectDelete(colors);
}

Player.prototype.setAbilities = function(){
  this.abilities.playerRace = randomSelectDelete(races);
  this.abilities.playerClass = randomSelectDelete(classes);
}

Player.prototype.diceRoll = function() {
  this.roll = GamesFactory.rollDice();
}

 //Functions to place in the gameFactory at somePoint
 $scope.initPlayers = function (){
       for (var i = 0; i < $scope.maxPlayers; ++i ) {
         var player = new Player();
         player.setPlayerColor();
         player.setAbilities();
         player.diceRoll();
         $scope.players.push(player);

     }//end for
   }//end init


})
