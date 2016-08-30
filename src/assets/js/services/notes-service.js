'use strict';
angular.module('app').factory('NoteService', function($http) {
  return {
    all: function() {
        return $http({
            url: 'http://yonotes.apiary-mock.com/notes',
            //headers: RootService.headers(JSON.parse(window.localStorage.user)),
            method: 'GET'
        });
    },

    get: function(id) {
        return $http({
            url: 'http://yonotes.apiary-mock.com/notes/' + id,
            method: 'GET'
          });
    }
  };
});
