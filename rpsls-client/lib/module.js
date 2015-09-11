import angular from 'angular';
import Firebase from 'firebase';
import 'angularfire';

let lib = angular.module('rpsls.client.lib', ['firebase']);

lib.factory('Firebase', [
  function() {
    return Firebase;
  }
]);
