/**
 * Inicia a aplicação quando o document estiver carregado
 * OBS: o atributo ng-app não deve estar presente no arquivo index.html quando o ng.bootstrap é utilizado
 */
define([
    'require',
    'angular',
    'app',
    'routes'
], function (require, ng) {
    'use strict';

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
