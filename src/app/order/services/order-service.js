(function (module) {
	'use strict';

	module.service('orderService', function ($http) {

		this.getOrders = function () {
			return $http.get('/orders');
		};

	});

})(angular.module('newOrder.order'));