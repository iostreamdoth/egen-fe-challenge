(function() {
    angular.module('myCCApp')
        .controller('CreditCardController', CreditCardController)
    CreditCardController.$inject = ["$timeout"]

    function CreditCardController($timeout) {
        var ccVm = this;
        ccVm.ccInfo = { type: "default", number: "", "message": "", "error": false };

        ccVm.ccUpdate = function() {
            $timeout(function() {
                
            }, 1)
        }



    }
})();
