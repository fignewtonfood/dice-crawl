var diceCrawl = angular.module('diceCrawl', ['ui.router']);

diceCrawl.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '',
        views: {
            'players':{
                templateUrl: "partials/players.html",
                controller: "PlayersCtrl"
        },
            'board': {
                templateUrl: 'partials/board.html',
                controller: "TilesCtrl"
        },
            'game': {
                templateUrl: 'partials/game.html',
                controller: "GamesCtrl"
            }
        }
    });



    // $stateProvider.state('home', {
    //     url: "",
    //     templateUrl: "partials/home.html",
    //     controller: "PlayersCtrl"
    // });
    // $stateProvider.state('board', {
    //     url: "/board",
    //     templateUrl: "partials/board.html",
    //     controller: "TilesCtrl"
    // });
    //
    //
    // $stateProvider.state('players', {
    //     url: "/players",
    //     templateUrl: "partials/players.html",
    //     controller: "PlayersCtrl"
    // });
    //

    // $stateProvider.state('board', {
    //     url: "/playersTest",
    //     templateUrl: "partials/playersTest.html",
    //     controller: "PlayersCtrl"
    // });
});
