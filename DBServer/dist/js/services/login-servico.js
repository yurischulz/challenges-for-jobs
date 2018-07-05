app.factory('loginRecurso', function($resource, $location) {

	var user = $resource('http://localhost:3000/usuarios/:usuarioId', null),
	isAuthenticated = false;

	if (localStorage.logged) {
		isAuthenticated = true;
	};

	return {
		login : function(username, password) {

			user.query(function(user) {
				
				angular.forEach(user, function(value, key) {

					if (username === value.usuario) {

						localStorage.user = JSON.stringify(value);
						localStorage.logged = true;

						user = value;

						isAuthenticated = username === value.usuario && password === value.senha;

						return false;

					};

				});

			});
			
			return isAuthenticated;

		},
		logout() {

			isAuthenticated = false;
			localStorage.clear();
			$location.path('/login');

		},
		isAuthenticated : function() {

			return isAuthenticated;

		}
	};
});