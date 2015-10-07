diceCrawl.controller('GamesCtrl', function GamesCtrl($scope, GamesFactory){
    $scope.Games = GamesFactory.Games;


    $scope.startGame = function() {
        return $scope.Games.started = 1;  
    }

});
