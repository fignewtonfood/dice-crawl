diceCrawl.factory('GamesFactory', function GamesFactory(){
    var factory = {};

        factory.players = [];

        factory.newGame = function() {
        factory.games.push({ players: [], board: [] });

   };

   return factory;
});

//
// notes:
//
// board is an array of 24 tiles (with the dragon) = 25 tiles
// the dragon will be inserted in the board array at index 12
