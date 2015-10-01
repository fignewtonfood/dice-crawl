diceCrawl.factory('PlayersFactory', function PlayersFactory(RacesFactory){
  //main vars
  var factory = {};
  factory.players = [];
  factory.maxPlayers = 2;

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
  function Player(playerColor,diceCount,score,abilities){
    this.playerColor = String(playerColor);
    this.diceCount = Number(25);
    this.score = Number(0);
    this.abilities = {playerRace:{},playerClass:{}};
  }

  function randomSelectDelete(selectedArray) {
    var randomNumber = Math.floor((Math.random() * selectedArray.length));
    var selectedItem = selectedArray[randomNumber];
    selectedArray.splice(selectedArray.indexOf(selectedItem), 1);
    return selectedItem;
  }


  Player.prototype.setPlayerColor = function() {
    this.playerColor = randomSelectDelete(colors);
  }

  Player.prototype.setAbilities = function(){
    this.abilities.playerRace = randomSelectDelete(races);
    this.abilities.playerClass = randomSelectDelete(classes);
  }

  // this should be used when creating new players for the game??
  // is this part of the player factory or should it be in the game logic
  var playerOne = new Player();
  playerOne.setPlayerColor();
  playerOne.setAbilities();

  // testing for character creation
  console.log("Player One:");
  console.log("Player Color: " + playerOne.playerColor);
  console.log("Dice count: " + playerOne.diceCount);
  console.log("Player score: " + playerOne.score);
  console.log("Player race: " + playerOne.abilities.playerRace.raceName);



  return factory;

});
