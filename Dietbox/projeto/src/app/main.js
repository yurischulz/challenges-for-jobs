/**
 * Configuração do require.js para o gerenciamento de dependências
 */
require.config({

    paths: {
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'angular-google-maps': '../lib/angular-google-maps/angular-google-maps',
        'domReady': '../lib/requirejs-domready/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        }
    },
    deps: [
        './bootstrap'
    ]
});
