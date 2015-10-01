diceCrawl.controller('PlayersCtrl', function PlayerCtrl($scope, PlayersFactory, GamesFactory){



$scope.maxPlayers = PlayersFactory.maxPlayers;
$scope.players = PlayersFactory.players;



// $scope.updateDiceCount(){
//   //
//   //$scope.diceCount +=
// }
});
