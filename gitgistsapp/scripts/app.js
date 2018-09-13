var gitGistsApp = angular.module('gitGistsApp',['ui.router'])
gitGistsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/")
     
    $stateProvider
    .state('home', {//State demonstrating Nested views
        url: "/",
        templateUrl: "templates/gists.html",
        controller: "gistCtrl"
    })
        }]);