diceCrawl.factory('TilesFactory', function TilesFactory($http){
    var factory = {};

    $http.get('Tiles.json').success(function(data) {
        factory.tiles = data;
        // console.log(data);
    });


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
