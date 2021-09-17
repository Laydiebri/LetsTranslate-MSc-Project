"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("StudentclassgroupController", function($scope, $http) {
  $http.get("/StudentClassGroups").then(function(response) {
    $scope.StudentClassGroups = response.data;
  });
});