diceCrawl.factory('GamesFactory', function GamesFactory(){
    var factory = {};
    factory.maxPlayers = 4;
    factory.players = [];
// console.log('GamesFactory is loaded');


        factory.newGame = function() {
        factory.games.push({ players: [], board: [] });



   };
   return factory;
});

diceCrawl.factory("rotateTileButton", function() {
    var mySharedObject =  { shared: 0 };
    return mySharedObject;
});

diceCrawl.factory("revealTileButton", function() {
    var mySharedObject =  { shared: 0 };
    return mySharedObject;
});


//
// notes:
//
// board is an array of 24 tiles (with the dragon) = 25 tiles
// the dragon will be inserted in the board array at index 12
