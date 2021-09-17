"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

mainApp.controller("Class7Ait1Controller", function($scope, $http) {
  $http.get("/class1").then(function(response) {
    $scope.class1 = response.data;
  });
});

mainApp.controller("Class7Bit2Controller", function($scope, $http) {
    $http.get("/class2").then(function(response) {
      $scope.class2 = response.data;
    });
  });
  
mainApp.controller("Class7Cit3Controller", function($scope, $http) {
    $http.get("/class3").then(function(response) {
      $scope.class3 = response.data;
    });
  });
  
mainApp.controller("Class8Ait1Controller", function($scope, $http) {
    $http.get("/class4").then(function(response) {
      $scope.class4 = response.data;
    });
  });
  
mainApp.controller("Class8Bit2Controller", function($scope, $http) {
    $http.get("/class5").then(function(response) {
      $scope.class5 = response.data;
    });
  });
  
mainApp.controller("Class8Cit3Controller", function($scope, $http) {
    $http.get("/class6").then(function(response) {
      $scope.class6 = response.data;
    });
  });
  
mainApp.controller("Class9Ait1Controller", function($scope, $http) {
    $http.get("/class7").then(function(response) {
      $scope.class7 = response.data;
    });
  });
  
mainApp.controller("Class9Bit2Controller", function($scope, $http) {
    $http.get("/class8").then(function(response) {
      $scope.class8 = response.data;
    });
  });
  
mainApp.controller("Class9Cit3Controller", function($scope, $http) {
    $http.get("/class9").then(function(response) {
      $scope.class9 = response.data;
    });
  });
  
mainApp.controller("Class10Ait1Controller", function($scope, $http) {
    $http.get("/class10").then(function(response) {
      $scope.class10 = response.data;
    });
  });
  
mainApp.controller("Class10Bit2Controller", function($scope, $http) {
    $http.get("/class11").then(function(response) {
      $scope.class11 = response.data;
    });
  });
  
mainApp.controller("Class10Cit3Controller", function($scope, $http) {
    $http.get("/class12").then(function(response) {
      $scope.class12 = response.data;
    });
  });
  
mainApp.controller("Class11Ait1Controller", function($scope, $http) {
    $http.get("/class13").then(function(response) {
      $scope.class13 = response.data;
    });
  });
  
mainApp.controller("Class11Bit2Controller", function($scope, $http) {
    $http.get("/class14").then(function(response) {
      $scope.class14 = response.data;
    });
  });
  
mainApp.controller("Class11Cit3Controller", function($scope, $http) {
    $http.get("/class15").then(function(response) {
      $scope.class15 = response.data;
    });
  });