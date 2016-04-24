(function (module) {
	'use strict';
	
	module.controller('OrderController', function ($scope) {

		$scope.findOrder = function(recordNumber) {
			console.log('recordNumber ', recordNumber);
			$scope.order = {};
			$scope.order.client = {name: 'JOAO DA SILVA', cpf: "123456789-09"}

			$scope.order.items = [
				{id: 1, description: 'cerveja brahma', price: 6.8},
				{id: 2, description: 'fritas', price: 12.9}
			];
		};

	});

})(angular.module('newOrder.order'));