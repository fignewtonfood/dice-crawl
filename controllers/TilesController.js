diceCrawl.controller('TilesCtrl', function TilesCtrl($scope, TilesFactory){
    $scope.TilesFactory = TilesFactory;
    $scope.getTimes=function(n){
        return new Array(n);
    };
    $scope.shuffle = function(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }
    $scope.tiles = $scope.shuffle(TilesFactory.tiles);
    console.log($scope.tiles);


});
