'use strict';

angular.module('app', ['ui.router','app.services', 'app.controllers'])


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


$urlRouterProvider.otherwise('about');

});
