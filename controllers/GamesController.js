diceCrawl.controller('GamesCtrl', function GamesCtrl($scope, GamesFactory){

    $scope.Games = GamesFactory.Games;

});
