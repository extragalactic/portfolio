//'use strict';

angular.module('app', ['ui.router'])

.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'RootCtrl'
    })

    .state('notes', {
        url: '/notes',
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
    })

    .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });

    $urlRouterProvider.otherwise('main');

});
