'use strict';

/**
 * @ngdoc function
 /*
 * # SongsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongsCtrl', function ($scope,song) {

    $scope.songs = song.getList().$object;
  });
