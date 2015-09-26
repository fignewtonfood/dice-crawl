diceCrawl.controller('TileCtrl', function TileCtrl($scope, TileFactory){
    $scope.tiles = TileFactory.tiles;
    $scope.TileFactory = TileFactory;
});
