'use strict';

describe('Controller: SongUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SongUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SongUpdateCtrl = $controller('SongUpdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SongUpdateCtrl.awesomeThings.length).toBe(3);
  });
});
