(function (module) {
  'use strict';

 module.config(function () {


  module.config(function ($routeProvider) {
    $routeProvider
      .when('/todo', {
        controller: 'TodoCtrl',
        templateUrl: '/todo/todo.html'
      })
      .otherwise({
        redirectTo: '/todo'
      });
  });

});

})(angular.module('newOrder', ['ngRoute', 'route-segment', 'view-segment', 'newOrder.todo', 'newOrder.order']));