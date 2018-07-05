app.controller('CompromissoController', function($scope, cadastroDeCompromissos, compromissoRecurso, consultorRecurso, $route, $routeParams) {
	
	$scope.compromisso = {
		inicio: new Date(),
		fim: new Date()
	};
	$scope.mensagem = '';
	$scope.titulo = $route.current.$$route.acao;

	if ($routeParams.compromissoId) {
		compromissoRecurso.get({ compromissoId : $routeParams.compromissoId }, function(compromisso) {

			compromisso.inicio = new Date(compromisso.inicio);
			compromisso.fim = new Date(compromisso.fim);

			$scope.compromisso = compromisso;

		}, function(erro) {

			console.log(erro);
			$scope.mensagem = "Não foi possível obter o compromisso";

		});
	};

	$scope.submeter = function () {

		if ($scope.compromissoForm.$valid) {

			$scope.compromisso.consultor = consultorRecurso.id;

			cadastroDeCompromissos.cadastrar($scope.compromisso)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) {
					$scope.compromisso = {};
				};
			})
			.catch(function(dados) {
				$scope.mensagem = dados.mensagem;
			})
		};
	};
});