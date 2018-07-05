app.controller('CompromissosController', function($scope, consultorRecurso, compromissoRecurso) {
	
	$scope.compromissos = [];
	$scope.verCompromisso = {};
	$scope.mensagem = '';
	$scope.filtro = '';
	$scope.consultor = consultorRecurso;
	
	compromissoRecurso.query(function(compromissos) { //success

		angular.forEach(compromissos, function(value, key) {

			if ($scope.consultor.id === value.consultor) {

				$scope.compromissos.push(value);

				return false;

			};

		});

	}, function(erro) { //error

		console.log(erro);

	});


	$scope.remover = function (compromisso) {

		compromissoRecurso.delete({ compromissoId : compromisso.id }, function() { //success
			
			let indiceCompromisso = $scope.compromissos.indexOf(compromisso);

			$scope.compromissos.splice(indiceCompromisso, 1);
			$scope.mensagem = 'Compromisso ' + compromisso.titulo + ' foi removido com sucesso';
			
			console.log('Compromisso ' + compromisso.titulo + ' foi removido com sucesso');

		}, function(erro) { //error

			$scope.mensagem = 'Compromisso ' + compromisso.titulo + ' não pôde ser removido';
			
			console.log(erro);

		});
		
	};

});