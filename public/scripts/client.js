console.log('test');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: '<div> This is the default </div>',
    controller: 'DefaultController as defCtrl'
  }).when('/blue', {
    templateUrl: 'views/pages/blue.html',
    controller: 'BlueController as blueCtrl'
  }).when('/yellow', {
    templateUrl: 'views/pages/yellow.html',
    controller: 'YellowController as yellowCtrl'
  }).otherwise('/');

  $locationProvider.html5Mode(true);
});

myApp.controller('DefaultController', function() {
  console.log('DefaultController loaded');
});

myApp.controller('BlueController', function() {
  console.log('BlueController loaded');
});

myApp.controller('YellowController', function() {
  console.log('YellowController loaded');
});
