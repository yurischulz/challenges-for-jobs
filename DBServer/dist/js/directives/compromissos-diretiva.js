app.directive('cards', function() {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;

    ddo.scope = {
        id: '@',
        titulo: '@',
        detalhes: '@',
        inicio: '@',
        fim: '@'
    };

    ddo.templateUrl = 'js/directives/cards.html';

    return ddo;
})
.directive('totalDeCompromissos', function() {

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        compromissos: '@'
    };

    ddo.templateUrl = 'js/directives/total-compromissos.html';

    return ddo;

})
app.directive('ngConfirmClick', [
    function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$eval(clickAction)
                    }
                });
            }
        };
    }])