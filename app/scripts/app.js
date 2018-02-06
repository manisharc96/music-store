'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute','restangular'
  ])

  .config(function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'

      })
      .when('/about', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'

      })
      .when('/songs', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'

      })
      .when('/create/song', {
        templateUrl: 'views/song-add.html',
        controller: 'SongAddCtrl'
      })
      .when('/song/:id', {
        templateUrl: 'views/song-view.html',
        controller: 'SongViewCtrl'

      })
      .when('/song/:id/delete', {
        templateUrl: 'views/song-delete.html',
        controller: 'SongDeleteCtrl'

      })
      .when('/song/:id/edit', {
        templateUrl: 'views/about.html',
        controller: 'SongEditCtrl'

      })
      .otherwise({
        redirectTo: '/songs'
      });
  })
  .factory('songRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('song', function(songRestangular) {
    return songRestangular.service('song');
  })
  .directive('youtube', function() {
   return {
     restrict: 'E',
     scope: {
       src: '=',
     },
     templateUrl: 'views/youtube.html'
   };
 })
 .filter('trusted', function ($sce) {
   return function(url) {
     console.log(url);
     return $sce.trustAsResourceUrl(url);
   };
 });
