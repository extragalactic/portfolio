//'use strict';

angular.module('app', ['ui.router'])

.run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })

    .state('project', {
        url: '/project/:projectId',
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
    });

    $urlRouterProvider.otherwise('main');
})
.value('appVars', {
    projectData: []
});
