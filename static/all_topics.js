"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("topicController", function($scope, $http) {
  $http.get("/topics").then(function(response) {
    $scope.topics = response.data;
  });
});