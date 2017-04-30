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
  }

  $scope.addNewCard = function () {
    if (!this.newCardForm.$valid) {
      return false;
    }
    $uibModalInstance.close({uid: this.uid, column: column, type: this.type, abslvl: this.abslvl, origins: this.origins, creators: this.creators, categories: this.categories name: this.name, description: this.description, longdes: this.longdes, rational: this.rational, fitcri: this.fitcri, satis: this.satis, dissat: this.dissat, doclinks: this.doclinks, relatedreq: this.relatedreq, subreq: this.subreq, reviewed: this.reviewed, impstate: this.impstate, imppriority: this.imppriority});
  };

  $scope.close = function () {
    $uibModalInstance.close();
  };

  initScope($scope);

}]);

