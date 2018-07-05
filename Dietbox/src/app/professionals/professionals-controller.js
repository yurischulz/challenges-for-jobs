define(['./module'], function (professionals) {
	'use strict';

	professionals.controller('ProfessionalsController', ['$scope', '$timeout', 'Professional', 'NgMap', function ($scope, $timeout, Professional, NgMap) {

		$scope.index = [];
		$scope.filter = [];
		$scope.professionals = [{
			location : [{
				name: '',
				address: '',
				phone: ''
			}]
		}];
		$scope.locations = [];

		var _get = document.querySelector.bind(document);

		Professional.query(function(professionals) {

			$scope.professionals = professionals;

			angular.forEach(professionals, function(p_value, p_key) {

				angular.forEach(p_value.location, function(value, key) {

					$scope.locations.push(value);

				});

			});

			$scope.index = $scope.locations.map(function(value, index) {
				return {
					location: value,
					professional: $scope.professionals[index]
				}
			});

		}, function(error) {

			console.log(error);

		});

		$scope.showInfoWindow = function (event, index) {
			_get('#marker-info-' + index + ' .modal').style.opacity = '1';
			_get('#marker-info-' + index + ' .modal').style.zIndex = '1';
			angular.element(_get('#marker-info-' + index + ' .modal-dialog')).removeClass("hide");
			angular.element(_get('#marker-info-' + index + ' .modal-dialog')).addClass("show");
		}

		$scope.hideInfoWindow = function (event, index) {
			angular.element(_get('#marker-info-' + index + ' .modal-dialog')).removeClass("show");
			angular.element(_get('#marker-info-' + index + ' .modal-dialog')).addClass("hide");
			$timeout(()=> {
				_get('#marker-info-' + index + ' .modal').style.opacity = '0';
				_get('#marker-info-' + index + ' .modal').style.zIndex = '-1';
			}, 250);
		}

		$scope.remover = function (professional) {

			Professional.delete({ id : professional.id }, function() { //success
				
				let indiceprofessional = $scope.professionals.indexOf(professional);
				$scope.professionals.splice(indiceprofessional, 1);
				$scope.mensagem = 'professional ' + professional.titulo + ' foi removida com sucesso';
				
				console.log('professional ' + professional.titulo + ' foi removida com sucesso');

			}, function(erro) { //error

				$scope.mensagem = 'professional ' + professional.titulo + ' não pôde ser removida';
				
				console.log(erro);

			});
		};
	}]);
});
