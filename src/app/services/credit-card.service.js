(function() {
    'use strict';

    angular
        .module('myCCApp')
        .service('CreditCardService', creditCardService)

    function creditCardService() {
        var ccService = this;
        ccService.checkCard = function(cardinfo) {

            var number = cardinfo.number;
            cardinfo.error = false;
            cardinfo.message = "" 
            /*number.error = false;
            number.message = "";*/

            if (isNaN(number)) {
                cardinfo.number = cardinfo.number.replace(/\D/g, '');

                cardinfo.error = true;
                cardinfo.message = "Please Enter Number without any characters/special chracters. Characters other then number are trimmed"
                return cardinfo;
            }

            if (number.length > 19) {
                cardinfo.error = true;
                cardinfo.number = cardinfo.number.slice(0, 19)
                cardinfo.message = "Card Number length exceeds maximum specified length"
                return cardinfo;
            }

            //Visa
            var re = new RegExp("^4");
            if (number.match(re) != null) {
                cardinfo.type = "visa";
                return cardinfo;
            }

            // Maestro
            re = new RegExp("^(50|5[6-9])");
            if (number.match(re) != null) {
                cardinfo.type = "maestro";
                return cardinfo;
            }

            // Mastercard

            re = new RegExp("^5");
            if (number.match(re) != null && number.length <= 16) {
                cardinfo.type = "master";
                return cardinfo;
            }

            // AMEX
            re = new RegExp("^3[47]");
            if (number.match(re) != null && number.length <= 15) {
                cardinfo.type = "amex";
                return cardinfo;
            }

            // Discover
            re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
            if (number.match(re) != null) {
                cardinfo.type = "discover";
                return cardinfo;
            }

            cardinfo.type = "default"
            cardinfo.error = false;
            cardinfo.message = ""
            return cardinfo;

        }

    }

})();
