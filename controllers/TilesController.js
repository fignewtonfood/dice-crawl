diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, $http, TilesFactory){
    $scope.TilesFactory = TilesFactory;

    // $http.get('tiles.json').success(function(data) {
    //     $scope.tiles = data;
    // })

    $scope.getTiles=function(n){
        return new Array(n);
    };
    function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      o.splice(12,0, TilesFactory.dragon);
      return o;
    }
    $scope.tiles = shuffle(TilesFactory.tiles);

    $scope.dragon = TilesFactory.dragon;


});
