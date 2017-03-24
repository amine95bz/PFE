/*
 ng-sortable v1.3.6
 The MIT License (MIT)

 Copyright (c) 2017 Mohamed Amine Bouzid 
 */

/*jshint indent: 2 */
/*global angular: false */

(function () {
  'use strict';
  angular.module('as.sortable', [])
    .constant('sortableConfig', {
      itemClass: 'as-sortable-item',
      handleClass: 'as-sortable-item-handle',
      placeHolderClass: 'as-sortable-placeholder',
      dragClass: 'as-sortable-drag',
      hiddenClass: 'as-sortable-hidden',
      dragging: 'as-sortable-dragging'
    });
}());
