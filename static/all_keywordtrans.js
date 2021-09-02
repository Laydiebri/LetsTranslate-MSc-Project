"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("keytransController", function($scope, $http) {
  $http.get("/KeywordTranslations").then(function(response) {
    $scope.KeywordTranslation = response.data;
  });
});

