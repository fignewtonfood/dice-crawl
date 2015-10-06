diceCrawl.factory('GamesFactory', function GamesFactory() {
    var factory = {};
    factory.maxPlayers = 4;
    factory.players = [];
    console.log('GamesFactory is loaded');

    factory.newGame = function() {
        factory.games.push({
            players: [],
            board: []
        });
    };

    // factory.currentPlayerImage = 0;
    // factory.availableImages = [{
    //     src: "/img/players/BluePlayer.png"
    // }, {
    //     src: "/img/players/GreenPlayer.png"
    // }, {
    //     src: "/img/players/RedPlayer.png"
    // }, {
    //     src: "/img/players/YellowPlayer.png"
    // }];
    // factory.nextButton = function() {
    //     factory.currentImage++;
    //     if (factory.currentPlayerImage > (factory.availableImages.length - 1)) {
    //         factory.currentImage = 0;
    //     }
    // };
    // factory.prevButton = function() {
    //     $scope.currentImage--;
    //     if (factory.currentPlayerImage < 0) {
    //         factory.currentImage = (factory.availableImages.length - 1);
    //     }
    // };

    return factory;

});

//
// notes:
//
// board is an array of 24 tiles (with the dragon) = 25 tiles
// the dragon will be inserted in the board array at index 12
