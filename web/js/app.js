var app = angular.module('app', ['ngMaterial']);

app.controller('addController',['$scope', '$http', function($scope,$http){
  $scope.registry = {};
  $scope.caminantes = [];
  $scope.caminante = {};
  $scope.scouter = {};

  $scope.save = function(){
    $scope.registry.scouter = $scope.scouter;
    $scope.registry.caminantes = $scope.caminantes;
    console.log($scope.registry);
  }

  $scope.addCaminante = function(item){
    $scope.caminantes.push(item);
    $scope.caminante = {};
    console.log($scope.caminantes);
  }
}]);
