diceCrawl.factory('TilesFactory', function TilesFactory(){
    var factory = {};
    factory.tiles = [{ image: "img/img1.jpg" }];

    // factory.addTile = function() {
        // factory.tiles.push({ type: factory.tileType, diceNumber: factory.tileDiceNumber, diceOne: factory.tileDiceOne, image: "img/img1.jpg", id: factory.tiles.length + 1 });
        // factory.tiles.push({ image: "img/img1.jpg" });
        // factory.tileType = null;
        // factory.tileDiceNumber = null;
        // factory.tileDiceOne = null;
        // factory.tileImage = null;
    // };
    return factory;
});
