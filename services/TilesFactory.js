diceCrawl.factory('TilesFactory', function TilesFactory(){
    var factory = {};
    factory.tiles = [];

    factory.addTile = function() {
        factory.tiles.push({ type: factory.tileType, diceNumber: factory.tileDiceNumber, diceOne: factory.tileDiceOne, image: factory.tileImage, id: factory.tiles.length + 1 });
        factory.tileType = null;
        factory.tileDiceNumber = null;
        factory.tileDiceOne = null;
        factory.tileImage = null;
    };
    return factory;
});
