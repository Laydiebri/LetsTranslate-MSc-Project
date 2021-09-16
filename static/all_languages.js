"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("languageController", function($scope, $http) {
    $http.get("/Languages").then(function(response) {
      $scope.languages = response.data;
    });
  });

 