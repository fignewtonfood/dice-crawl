var diceCrawl = angular.module('diceCrawl', ['ui.router']);

diceCrawl.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: "TilesCtrl"
    });
    $stateProvider.state('board', {
        url: "/board",
        templateUrl: "partials/board.html",
        controller: "TilesCtrl"
    });
});
