'use strict';
angular.module('app').controller('ProjectCtrl', function($scope, $state, $stateParams, appVars) {

   var projectID;
   loadData();

   function loadData() {
      if($stateParams.projectId===undefined) {
        projectID = appVars.projectData[0].id;
      } else {
         projectID = $stateParams.projectId;
      }
      var project = getByValue(appVars.projectData, projectID);
      $scope.projectData = project;
      $scope.projectName = project.name;
      $scope.description = project.description;
      $scope.technologies = project.technologies;
      $scope.tools = project.tools;
      $scope.imageURL = "assets/img/projects/" + project.imageURL;
   }

   // return array element based on the value of the 'id' field
   function getByValue(arr, value) {
     for (var i=0; i<arr.length; i++) {
       if (arr[i].id == value) return arr[i];
     }
     return arr[0];
   }

});
