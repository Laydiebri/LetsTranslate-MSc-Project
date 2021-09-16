"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("classgroupController", function($scope, $http) {
  $http.get("/Class_Groups").then(function(response) {
    $scope.class_groups = response.data;
  });
});