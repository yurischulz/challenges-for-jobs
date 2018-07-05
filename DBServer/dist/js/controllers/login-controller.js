app.controller('LoginController', function($scope, $location, loginRecurso) {

	$scope.formSubmit = function() {

		if(loginRecurso.login($scope.username, $scope.password)) {
		
			$location.path('/agenda');
		
		} else {
		
			$scope.error = "Usuário ou senha incorretos!";
		
		}   
	};

	$scope.logout = function() {

		loginRecurso.logout()

	};

});