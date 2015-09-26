diceCrawl.factory('TilesFactory', function TilesFactory(){
    var factory = {};
    factory.tiles = [
        { type: 1, diceNumber: 1, diceOne: 6, image: "img/img1.jpg" },
        { type: 1, diceNumber: 2, diceOne: 5, diceTwo: 5, image: "img/img2.jpg" }];

    // factory.addTile = function() {
        // factory.tiles.push({ type: factory.tileType, diceNumber: factory.tileDiceNumber, diceOne: factory.tileDiceOne, image: "img/img1.jpg", id: factory.tiles.length + 1 });
        // factory.tiles.push();
        // factory.tileType = null;
        // factory.tileDiceNumber = null;
        // factory.tileDiceOne = null;
        // factory.tileImage = null;
    // };

    return factory;
});
