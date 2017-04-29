'use strict';

angular.module('demoApp').controller('NewCardController', ['$scope', '$uibModalInstance', 'column', function ($scope, $uibModalInstance, column) {

  function initScope(scope) {
    scope.columnName = column.name;
    scope.column = column;
    scope.uid = '';
    scope.type = '';
    scope.abslvl = '';
    scope.origins = '';
    scope.creators = '';
    scope.categories = '';
    scope.name = '';
    scope.description = '';
    scope.longdes = '';
    scope.rational = '';
    scope.fitcri = '';
    scope.satis = '';
    scope.dissat = '';
    scope.doclinks = '';
    scope.relatedreq = '';
    scope.subreq = '';
    scope.reviewed = '';
    scope.impstate = '';
    scope.imppriority = '';
    scope. = '';
  }

  $scope.addNewCard = function () {
    if (!this.newCardForm.$valid) {
      return false;
    }
    $uibModalInstance.close({title: this.title, column: column, details: this.details});
  };

  $scope.close = function () {
    $uibModalInstance.close();
  };

  initScope($scope);

}]);

