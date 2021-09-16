"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("LessonKeywordController", function($scope, $http) {
  $http.get("/LessonKeywords").then(function(response) {
    $scope.LessonKeywords = response.data;
  });
});