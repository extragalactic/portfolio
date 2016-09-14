'use strict';
angular.module('app').controller('RootCtrl', function($scope, $state, $document, appVars) {

   var mainDiv = $document[0].getElementById("my-info");
   mainDiv.classList.add("hide"); // hide the page until the project data has loaded

   // load the project page data
   var preload = new createjs.LoadQueue(true);

   preload.addEventListener('fileload', function(event) {
      appVars.projectData = event.result.projects;
      mainDiv.classList.remove("hide");
   });
   preload.loadFile("../../data/projectData.json");

   // set some content that will be used across several pages/controllers
   $scope.bioText = "I am a multi-faceted software developer and visual artist living in Vancouver, BC. I am currently searching for opportunities to use Javascript for creative website and interface development.";
   $scope.bioPhoto = "assets/img/profile-photo.jpg";

});
