'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongAddCtrl
 * @description
 * # SongAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongAddCtrl', function ($scope,song,$location) {
    $scope.song = {};
  $scope.savesong = function() {
    song.post($scope.song).then(function() {
      $location.path('/songs');
    });
  };
});
