'use strict';

angular.module('demoApp').controller('KanbanController', ['$scope', 'BoardService', 'BoardDataFactory', function ($scope, BoardService, BoardDataFactory) {

  $scope.kanbanBoard = BoardService.kanbanBoard(BoardDataFactory.kanban);

  $scope.kanbanSortOptions = {

    itemMoved: function (event) {
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };

  $scope.removeCard = function (column, card) {
    BoardService.removeCard($scope.kanbanBoard, column, card);
  };

  $scope.addNewCard = function (column) {
    BoardService.addNewCard($scope.kanbanBoard, column);
  }
}]);

