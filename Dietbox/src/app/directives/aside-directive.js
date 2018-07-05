define(['./module'], function (directives) {
	'use strict';

	directives
	.directive('asideDirective', [function () {

		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;
		ddo.controller = "ProfessionalsController";

		ddo.scope = {
			name: '@'
		};

		ddo.templateUrl = 'app/directives/aside-directive.html';

		return ddo;
	}]);
});
