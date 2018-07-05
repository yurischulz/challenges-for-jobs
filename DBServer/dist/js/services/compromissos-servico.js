app.factory('compromissoRecurso', function($resource) {

	return $resource('http://localhost:3000/compromissos/:compromissoId', null, {
		update : {
			method: 'PUT'
		}
	});
})
.factory('cadastroDeCompromissos', function(compromissoRecurso, $q, $rootScope) {

	var servico = {},
	evento = 'compromissoCadastrado';

	servico.cadastrar = function(compromisso) {

		return $q(function(resolve, reject) {

			if (compromisso.id) {
				compromissoRecurso.update({ compromissoId : compromisso.id}, compromisso, function() {

					$rootScope.$broadcast(evento);
					
					resolve({
						mensagem: 'Compromisso ' + compromisso.titulo + ' atualizado com sucesso!',
						inclusao: false
					});

				}, function(erro) {

					console.log(erro);
					reject({
						mensagem: 'Não foi possível alterar o compromisso ' + compromisso.titulo + '.'
					});

				});

			} else {

				compromissoRecurso.save(compromisso, function() {

					$rootScope.$broadcast(evento);
					
					resolve({
						mensagem: 'Compromisso ' + compromisso.titulo + ' foi incluido com sucesso.',
						inclusao: true
					});

				}, function(erro) {
					
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir o compromisso ' + compromisso.titulo + '.'
					});

				});
			};
		});
	};

	return servico;

});