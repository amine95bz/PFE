'use strict';

// Declare app level module which depends on other modules
angular.module('demoApp', [
    'ngRoute',
    'as.sortable',
    'ui.bootstrap'
  ]).
  config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false); // testing issue #144
  }]).
  config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/kanban', {templateUrl: 'views/kanban.html', controller: 'KanbanController'});
    $routeProvider.otherwise({redirectTo: '/kanban'});
  }]).
  controller('DemoController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      var active = false;
      if ($location.$$path.lastIndexOf(viewLocation, 0) != -1) {
        active = true;
      }
      return active;
    };

  }]);

