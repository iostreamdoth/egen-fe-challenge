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
                number = cardinfo.number;
                cardinfo.error = true;
                cardinfo.message = "Please Enter Number without any characters/special chracters. Characters other then number are trimmed"
            }

            if (number.length > 19) {
                cardinfo.error = true;
                cardinfo.number = cardinfo.number.slice(0, 19);
                number = cardinfo.number;
                console.log(cardinfo.number.length)
                cardinfo.message = "Card Number length exceeds maximum specified length"
            }

            //Visa
            var re = new RegExp("^4");
            if (number.match(re) != null) {
                cardinfo.type = "visa";
                if(number.length== 13 || number.length ==16 || number.length==19)
                    cardinfo.type = "visa";
                else
                    cardinfo.type = "visad";
                return cardinfo;
            }

            // Maestro
            re = new RegExp("^(50|5[6-9])");
            if (number.match(re) != null) {
                if(number.length>=12)
                    cardinfo.type = "maestro";
                else
                    cardinfo.type = "maestrod";
                return cardinfo;
            }

            // Mastercard

            re = new RegExp("^5");
            if (number.match(re) != null && number.length <= 16) {
                
                if(number.length==16)
                    cardinfo.type = "master";
                else
                    cardinfo.type = "masterd";
                return cardinfo;
            }

            // AMEX
            re = new RegExp("^3[47]");
            if (number.match(re) != null && number.length <= 15) {
                if(number.length == 15)
                    cardinfo.type = "amex";
                else
                    cardinfo.type = "amexd";
                return cardinfo;
            }

            // Discover
            //re = new RegExp("^(6011|622[12[6-9]| 25]|64[4-9]|65)");
            re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])|64[4-9]|65)");
            if (number.match(re) != null) {
                if(number.length==16 || number.length==19)
                    cardinfo.type = "discover";
                else
                    cardinfo.type = "discoverd";
                return cardinfo;
            }
            if(number.length >= 16)
                cardinfo.type = "default"
            else
                cardinfo.type = "defaultd"
                
            return cardinfo;

        }

    }

})();
