var app = angular.module('agenda', ['ngRoute', 'ngResource', 'ngAnimate', 'moment-picker'])
.run(function($rootScope, $location, loginRecurso) {
	
	if (!loginRecurso.isAuthenticated()) {
		$location.path('/login');
	};

})
.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.when('/agenda', {
		templateUrl: 'partials/compromissos-lista.html',
		controller: 'CompromissosController'
	})
	.when('/agenda/new', {
		templateUrl: 'partials/compromisso-form.html',
		controller: 'CompromissoController',
		acao: 'Cadastro de compromisso'
	})
	.when('/agenda/edit/:compromissoId', {
		templateUrl: 'partials/compromisso-form.html',
		controller: 'CompromissoController',
		acao: 'Edição do compromisso'
	})
	.when('/agenda/detail/:compromissoId', {
		templateUrl: 'partials/compromisso-detalhes.html',
		controller: 'CompromissoController',
		acao: 'Detalhes do compromisso'
	})
	.otherwise({redirectTo: '/agenda'});

});