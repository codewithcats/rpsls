import angular from 'angular';
import {userListController} from './userListController';
import {userService} from './userService';

let users = angular.module('rpsls.client.user', ['rpsls.client.lib']);

users.factory('userService', userService);

users.controller('userListController', userListController);
