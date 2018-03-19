'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongViewCtrl
 * @description
 * # SongViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongViewCtrl', function ($scope,$routeParams,song) {
    $scope.viewsong=true;
    console.log($routeParams);
      $scope.song=song.one($routeParams.id).get().$object;
  });
