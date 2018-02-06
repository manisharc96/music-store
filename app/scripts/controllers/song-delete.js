'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongDeleteCtrl
 * @description
 * # SongDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SongDeleteCtrl', function ($scope,
$routeParams,
song,
$location) {


 $scope.song = song.one($routeParams.id).get().$object;
 $scope.deletesong = function() {
   $scope.song.remove().then(function() {
     $location.path('/#!/songs');
   });
 };
 $scope.back = function() {
   $location.path('/#!/songs/' + $routeParams.id);
 };
});
