/**
 * Define as rotas principais da aplicação.
 */

 define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'app/professionals/professionals.html',
            controller: 'ProfessionalsController'
        });

        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
});
