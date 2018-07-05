app.controller('ConsultorController', function($scope, consultorRecurso, compromissoRecurso) {
	
	$scope.consultor = consultorRecurso;
	$scope.total = 0;
	
	compromissoRecurso.query(function(compromissos) {

		angular.forEach(compromissos, function(value, key) {

			if ($scope.consultor.id === value.consultor) {

				$scope.total = $scope.total + 1;

			};

		});

		$scope.total = $scope.total > 1 ? $scope.total + ' compromissos' : $scope.total + ' compromisso'

	}, function(erro) {

		console.log(erro);

	});

});