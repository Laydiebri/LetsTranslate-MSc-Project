"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
//mainApp.controller("studentController", function($scope, $http) {
  //  $http.get("/EALstudents").then(function(response) {
    //  $scope.students = response.data;
    //});
  //});

  mainApp.controller("studentController", function($scope, $http) {
    // Initially hides the "selected" element
    document.getElementById("selected").style.display="none";
  
    $http.get("/EALstudents").then(function(response) {
      $scope.students = response.data;
    });
  
    $scope.selectStudent = function(code) {
      // Get specific programme by code
      $http.get("/student/" + code).then(function(response) {
        $scope.selectedStudent = response.data;
        // Show the "selected" element
        document.getElementById("selected").style.display="block";
      });
    }
  });