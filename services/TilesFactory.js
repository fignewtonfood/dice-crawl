diceCrawl.factory('TilesFactory', function TilesFactory($http){
    var factory = {};
    factory.dragon = { "type":1 , "value":3 , "orientation":0 , "name":51 };
    factory.tiles = [
        { "type":4 , "value":0 , "treasure":1 , "ability":"" , "diceValues":[1] , "orientation":0 , "name":1 },
        { "type":1 , "value":1 , "treasure":0 , "ability":"" , "diceValues":[6] , "orientation":0 , "name":2 },
        { "type":4 , "value":1 , "treasure":0 , "ability":"" , "diceValues":[2] , "orientation":0 , "name":3 },
        { "type":4 , "value":1 , "treasure":0 , "ability":"" , "diceValues":[6] , "orientation":0 , "name":4 },
        { "type":4 , "value":1 , "treasure":0 , "ability":"ROTATE" , "diceValues":[4] , "orientation":0 , "name":5 },
        { "type":4 , "value":1 , "treasure":0 , "ability":"ATTACK" , "diceValues":[5] , "orientation":0 , "name":6 },
        { "type":1 , "value":2 , "treasure":0 , "ability":"" , "diceValues":[5,5] , "orientation":0 , "name":7 },
        { "type":2 , "value":2 , "treasure":1 , "ability":"" , "diceValues":[2,2] , "orientation":0 , "name":8 },
        { "type":2 , "value":2 , "treasure":1 , "ability":"" , "diceValues":[2,2] , "orientation":0 , "name":9 },
        { "type":4 , "value":2 , "treasure":1 , "ability":"" , "diceValues":[2,2] , "orientation":0 , "name":10 },
        { "type":2 , "value":2 , "treasure":0 , "ability":"WITHDRAW" , "diceValues":[1,6] , "orientation":0 , "name":11 },
        { "type":2 , "value":2 , "treasure":0 , "ability":"ROTATE" , "diceValues":[1,2] , "orientation":0 , "name":12 },
        { "type":4 , "value":2 , "treasure":0 , "ability":"REVEAL" , "diceValues":[1,4] , "orientation":0 , "name":13 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[2,3] , "orientation":0 , "name":14 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[2,6] , "orientation":0 , "name":15 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[3,5] , "orientation":0 , "name":16 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[4,5] , "orientation":0 , "name":17 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[1,6,6] , "orientation":0 , "name":18 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[4,5,6] , "orientation":0 , "name":19 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[2,3,5] , "orientation":0 , "name":20 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[2,5,6] , "orientation":0 , "name":21 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[4,5,5] , "orientation":0 , "name":22 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[5,6,6] , "orientation":0 , "name":23 },
        { "type":4 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[2,3] , "orientation":0 , "name":24 },
        { "type":4 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[3,3] , "orientation":0 , "name":25 },
        { "type":4 , "value":3 , "treasure":0 , "ability":"" , "diceValues":[4,5] , "orientation":0 , "name":26 },
        { "type":2 , "value":3 , "treasure":1 , "ability":"" , "diceValues":[3,3,3] , "orientation":0 , "name":27 },
        { "type":3 , "value":3 , "treasure":1 , "ability":"" , "diceValues":[3,3,3] , "orientation":0 , "name":28 },
        { "type":3 , "value":3 , "treasure":1 , "ability":"" , "diceValues":[3,3,3] , "orientation":0 , "name":29 },
        { "type":1 , "value":3 , "treasure":0 , "ability":"REVEAL" , "diceValues":[4,4,4] , "orientation":0 , "name":30 },
        { "type":2 , "value":3 , "treasure":0 , "ability":"SWAP" , "diceValues":[1,2,3] , "orientation":0 , "name":31 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"SWAP" , "diceValues":[1,2,3] , "orientation":0 , "name":32 },
        { "type":3 , "value":3 , "treasure":0 , "ability":"ROTATE" , "diceValues":[3,4,6] , "orientation":0 , "name":33 },
        { "type":1 , "value":4 , "treasure":0 , "ability":"" , "diceValues":[1,3,4,6] , "orientation":0 , "name":34 },
        { "type":1 , "value":4 , "treasure":0 , "ability":"" , "diceValues":[2,2,5,5] , "orientation":0 , "name":35 },
        { "type":3 , "value":4 , "treasure":0 , "ability":"" , "diceValues":[5,5,5,6] , "orientation":0 , "name":36 },
        { "type":3 , "value":4 , "treasure":0 , "ability":"" , "diceValues":[2,3,3,3] , "orientation":0 , "name":37 },
        { "type":4 , "value":4 , "treasure":0 , "ability":"" , "diceValues":[2,2,2] , "orientation":0 , "name":38 },
        { "type":1 , "value":4 , "treasure":1 , "ability":"" , "diceValues":[3,3,3,3] , "orientation":0 , "name":39 },
        { "type":1 , "value":4 , "treasure":1 , "ability":"" , "diceValues":[4,4,4,4] , "orientation":0 , "name":40 },
        { "type":3 , "value":4 , "treasure":1 , "ability":"" , "diceValues":[4,4,4,4] , "orientation":0 , "name":41 },
        { "type":4 , "value":4 , "treasure":1 , "ability":"" , "diceValues":[1,1,1,1] , "orientation":0 , "name":42 },
        { "type":1 , "value":4 , "treasure":0 , "ability":"REVEAL" , "diceValues":[1,2,3,4] , "orientation":0 , "name":43 },
        { "type":3 , "value":4 , "treasure":0 , "ability":"GARRISON" , "diceValues":[1,4,4,5] , "orientation":0 , "name":44 },
        { "type":1 , "value":5 , "treasure":0 , "ability":"" , "diceValues":[4,5,5,6,6] , "orientation":0 , "name":45 },
        { "type":1 , "value":5 , "treasure":0 , "ability":"" , "diceValues":[1,2,3,4,5] , "orientation":0 , "name":46 },
        { "type":1 , "value":5 , "treasure":1 , "ability":"" , "diceValues":[5,5,5,5,5] , "orientation":0 , "name":47 },
        { "type":2 , "value":5 , "treasure":1 , "ability":"GARRISON" , "diceValues":[5,5,5,5,5] , "orientation":0 , "name":48 },
        { "type":1 , "value":5 , "treasure":0 , "ability":"ATTACK" , "diceValues":[3,3,4,5,5] , "orientation":0 , "name":49 },
        { "type":3 , "value":5 , "treasure":1 , "ability":"" , "diceValues":[6,6,6,6,6] , "orientation":0 , "name":50 }
    ]
    factory.getTiles=function(n){
        return new Array(n);
    };

    function shuffle(tilesCollection){
      for(var j, x, i = tilesCollection.length; i; j = Math.floor(Math.random() * i), x = tilesCollection[--i], tilesCollection[i] = tilesCollection[j], tilesCollection[j] = x);
      tilesCollection.splice(12,0, factory.dragon);
      return tilesCollection;
    }
    factory.boardTiles = shuffle(factory.tiles);

    function addAttribs(boardTiles){
      for (var thisTile in factory.boardTiles){
      factory.boardTiles[thisTile]['balls'] = false;
      factory.boardTiles[thisTile]['players'] = [];
//    console.log(thisTile);

      }
    }
    addAttribs(factory.boardTiles);
    //  console.log(factory.boardTiles);
    return factory;
});



// factory.tiles = [
//     { type: 1, diceNumber: 1, diceOne: 6, image: "img/img1.jpg" },
//     { type: 1, diceNumber: 2, diceOne: 5, diceTwo: 5, image: "img/img2.jpg" },
//     { type: 1, diceNumber: 4, diceOne: 1, diceTwo: 3, diceThree: 4, diceFour: 6, image: "img/img3.jpg" },
//     { type: 1, diceNumber: 4, diceOne: 2, diceTwo: 2, diceThree: 5, diceFour: 5, image: "img/img4.jpg" },
//     { type: 1, diceNumber: 5, diceOne: 1, diceTwo: 2, diceThree: 3, diceFour: 4, diceFive: 5, image: "img/img5.jpg" },
//     { type: 1, diceNumber: 5, diceOne: 4, diceTwo: 5, diceThree: 5, diceFour: 6, diceFive: 6, image: "img/img6.jpg" },
//     { type: 1, diceNumber: 4, diceOne: 3, diceTwo: 3, diceThree: 3, diceFour: 3, diceTreasure: true, image: "img/img7.jpg" },
//     { type: 1, diceNumber: 4, diceOne: 4, diceTwo: 4, diceThree: 4, diceFour: 4, diceTreasure: true, image: "img/img8.jpg" },
//     { type: 1, diceNumber: 5, diceOne: 5, diceTwo: 5, diceThree: 5, diceFour: 5, diceFive: 5, diceTreasure: true, image: "img/img9.jpg" },
//     { type: 1, diceNumber: 3, diceOne: 4, diceTwo: 4, diceThree: 4, diceAbility: "reveal", image: "img/img10.jpg" }
// ];
// factory.addTile = function() {
    // factory.tiles.push({ type: factory.tileType, diceNumber: factory.tileDiceNumber, diceOne: factory.tileDiceOne, image: "img/img1.jpg", id: factory.tiles.length + 1 });
    // factory.tiles.push();
    // factory.tileType = null;
    // factory.tileDiceNumber = null;
    // factory.tileDiceOne = null;
    // factory.tileImage = null;
// };
