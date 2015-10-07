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
                controller: "TilesCtrl",

            },
            'game': {
                templateUrl: 'partials/game.html',
                controller: "GamesCtrl"
            },
            'dice1':{
                templateUrl: 'partials/dice1.html',
                controller: "TilesCtrl"
            },
            'dice2':{
                templateUrl: 'partials/dice2.html',
                controller: "TilesCtrl"
            },
            'dice3':{
                templateUrl: 'partials/dice3.html',
                controller: "TilesCtrl"
            },
            'dice4':{
                templateUrl: 'partials/dice4.html',
                controller: "TilesCtrl"
            },
            'dice5':{
                templateUrl: 'partials/dice5.html',
                controller: "TilesCtrl"
            }
        }
    });
});

    //     url: "",
    //     templateUrl: "partials/home.html",
    //     controller: "PlayersCtrl"
    // });



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
