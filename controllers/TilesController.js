diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory, GamesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.players = GamesFactory.players;


    $scope.dragon = TilesFactory.dragon;

  $scope.tiles = TilesFactory.boardTiles;

    $scope.treasure = "<div class='treasure'></div>";



    $scope.findInColl = function(collection, item) {
        var index = collection.indexOf(item);
        return collection[i];

      }

      //something must trigger this event?
      //will move the currente element from the array it is within and add it to an array elsewhere

   $scope.moveMe = function(item,fromColl,toColl){
     fromColl.splice(index,range)
   }


});
