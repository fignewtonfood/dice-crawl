diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory, GamesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.players = GamesFactory.players;


    $scope.dragon = TilesFactory.dragon;

  $scope.tiles = TilesFactory.boardTiles;

    $scope.treasure = "<div class='treasure'></div>";



});
