/**
 * Carrega as dependências do projeto e os insere dentro do modulo principal
 */
define([
    'angular',
    'angular-route',
    'angular-resource',
    'angular-google-maps',
    './professionals/index',
    './directives/index'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.professionals',
        'app.directives',
        'ngRoute',
        'ngResource',
        'ngMap'
    ]);
});
