diceCrawl.factory('GamesFactory', function GamesFactory(){
    var factory = {};

        factory.players = [];

       factory.newGame = function() {
       factory.games.push({ players: [], board: [] });

   };

   return factory;
});


// board is sub array of 24 tiles with the dragon
