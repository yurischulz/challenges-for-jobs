define(['./module'], function (professionals) {
	'use strict';

	professionals
	.factory('Professional', ['$resource', function($resource) {
		return $resource('http://localhost:3000/professionals/:id', null, {
			update : {
				method: 'PUT'
			}
		});
	}])
	.factory('ProfessionalSave', ['$q', '$rootScope', 'Professional', function($q, $rootScope, Professional) {

		var service = {},
		event = 'ProfessionalCadastrado';

		service.save = function(professional) {
			return Professional.save(professional);
		};

		return service;

	}]);
});
