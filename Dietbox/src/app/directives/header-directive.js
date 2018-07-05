define(['./module'], function (directives) {
	'use strict';

	directives
	.directive('headerDirective', [function () {

		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;

		ddo.scope = {
			name: '@'
		};

		ddo.templateUrl = 'app/directives/header-directive.html';

		return ddo;
	}]);
});
