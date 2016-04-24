(function (module) {
	'use strict';

	module.config(function ($routeProvider) {
		
	
		$routeProvider
			.when('/orders', {
				templateUrl: '/order/views/order.html',
				controller: 'OrderController'
			})
			.when('/orders/new', {
				templateUrl: '/order/views/order.html',
				controller: 'OrderController'
			});

	});
	

})(angular.module('newOrder.order', []));

