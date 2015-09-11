import angular from 'angular';
import './lib/module';
import './user/module';

let client = angular.module('rpsls.client', [
  'rpsls.client.lib',
  'rpsls.client.user',
  'ngMaterial'
]);

client.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('grey');
}]);

client.controller('registerController', [
  '$http',
  function($http) {
    var ctrl = this;
    ctrl.register = (username) => {
      $http.post('/register', {name: username});
    };
  }
]);
