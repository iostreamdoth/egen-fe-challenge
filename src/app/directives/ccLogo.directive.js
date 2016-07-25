(function() {
    'use strict';
    angular.module('myCCApp').directive('ccLogo', ccLogo);
    ccLogo.$inject = ['CreditCardService', 'Notification']

    function ccLogo(creditCardService, Notification) {
        var directive = {
            scope: {
                cardinfo: '=',
                update: "&"
            },
            transclude: true,
            templateUrl: 'app/views/credit-card.tmpl.html',
            link: function(scope, elem, attrs) {

                elem.on('keyup', function() {
                    var ccInfo = creditCardService.checkCard(scope.cardinfo);
                    if (ccInfo.error) {
                        Notification.error(ccInfo.message);
                    }

                    scope.update();
                });
                elem.on('paste', function(event) {
                    var ccInfo = creditCardService.checkCard(scope.cardinfo);
                    if (ccInfo.error) {
                        Notification.error(ccInfo.message);
                    }
                    scope.update();
                });


            }
        };

        return directive;
    }

})();
