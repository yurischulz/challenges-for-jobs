define(['./module'], function (directives) {
	'use strict';

	directives
	.directive('mapInfoWindow', [function () {

		var ddo = {};

		ddo.restrict = "AE";
		ddo.transclude = true;

		ddo.scope = {
			name : '@',
			index : '@',
			name : '@',
			crn : '@',
			bio : '@',
			location : '@',
			location_name : '@',
			address : '@',
			phone : '@'
		};

		ddo.templateUrl = 'app/directives/map-info-window.html';

		return ddo;
	}]);
});
