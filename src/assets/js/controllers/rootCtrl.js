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

})
