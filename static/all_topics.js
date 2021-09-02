"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
//mainApp.controller("topicController", function($scope, $http) {
  //$scope.topics = [
    //new Topic("T001", "Test Program 1"),
    //new Topic("T002", "Test Program 2")
  //];
//});
mainApp.controller("topicController", function($scope, $http) {
  $http.get("/topics").then(function(response) {
    $scope.topics = response.data;
  });
});