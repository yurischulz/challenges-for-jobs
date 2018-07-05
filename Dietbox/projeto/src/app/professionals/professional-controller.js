define(['./module'], function (professionals) {
	'use strict';

	professionals.controller('ProfessionalController', ['$scope', '$routeParams', '$q', 'Professional', 'ProfessionalSave', function ($scope, $routeParams, $q, Professional, ProfessionalSave) {

		$scope.index = [];
		$scope.professional = {};

		if ($routeParams.id) {
			Professional.get({ id : $routeParams.id }, function(professional) {
				$scope.professional = professional;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = "Não foi possível obter a professional";
			});
		};

		$scope.submeter = function () {

			ProfessionalSave.save($scope.professional);
		};
	}]);
});