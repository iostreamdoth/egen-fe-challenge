describe("Unit: Testing Services", function() {
    var mod, service;
    beforeEach(module('myCCApp'));

    it('should contain an CreditCardService service',
        inject(function(_CreditCardService_) {
            service = _CreditCardService_
            expect(service).toBeDefined();
        }));



    // VISA Credit card Test Cases
    it('should have a working service that checks 13 digit Visa card number',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "4018912345654", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visa");
        }]));


    it('should have a working service that checks 16 digit Visa card number',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "4018912345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visa");
        }]));

    it('should have a working service that checks 19 digit Visa  card number',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "4018912345654323345", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visa");
        }]));


    it('should have a working service that checks incompleted cc number of 12 digits for Visa IIN  and return visad value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "401891234565", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visad");
        }]));


    it('should have a working service that checks incompleted cc number of 15 digits for Visa IIN  and return visad value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "401891234565456", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visad");
        }]));


    it('should have a working service that checks incompleted cc number of 17 digits for Visa IIN  and return visad value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "40189123456545622", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visad");
        }]));

    it('should have a working service that checks incompleted cc number of 1 digits for Visa IIN  and return visad value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "4", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visad");
        }]));



    //Master Card Test Cases
    it('should have a working service that checks 16 digit master card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "5118912345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("master");
        }]));

    it('should have a working service that checks incomplete master card of 15 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "511891234565432", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("masterd");
        }]));

    it('should have a working service that checks incomplete master card of 1 digit',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "5", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("masterd");
        }]));
    
    it('should have a working service that checks IIN starting with master card of but length is 17',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "51189123456543232", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("default");
        }]));







    //American Express Credit Card test cases
    it('should have a working service that checks american express card of 15 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "341891234565433", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("amex");
        }]));

    it('should have a working service that checks american express card of 3 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "341", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("amexd");
        }]));



    it('should have a working service that checks american express card of 1 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "3", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("defaultd");
        }]));

    it('should have a working service that checks american express card of 2 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "34", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("amexd");
        }]));

    it('should have a working service that checks card number with american express IIN but if of 16 digits',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "3418912345654332", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("default");
        }]));



    //Discover Credit Card test cases

    it('should have a working service that checks 16 digit discover card series 6011',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6011912345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 19 digit discover card series 6011',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6011912345654323000", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));


    it('should have a working service that checks 16 digit discover card series 622126-622925',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6221262345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 19 digit discover card series 622126-622925',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6223292345654323000", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 16 digit discover card series 644-649',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6471282345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 19 digit discover card series 644-649',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6453292345654323000", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 16 digit discover card series 65',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6571282345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));

    it('should have a working service that checks 19 digit discover card series 622126-622925',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6553292345654323000", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discover");
        }]));



    it('should have a working service that checks discover partials of discover credit card of 5 digit',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "60119", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discoverd");
        }]));


        it('should have a working service that checks discover partials of discover credit card of 6 digit',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "622130", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discoverd");
        }]));

        it('should have a working service that checks discover partials of discover credit card of 4 digit',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "6482", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discoverd");
        }]));


        it('should have a working service that checks discover partials of discover credit card of 3 digit',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "658", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("discoverd");
        }]));        

    it('should have a working service that checks Maestro card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "5018912345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("maestro");
        }]));



    //Default

    it('should have a working service that checks for default card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "2118912345654323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("default");
        }]));


    it('should have a working service that checks Illegal characters in card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "4343JKA88009", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("Please Enter Number without any characters/special chracters. Characters other then number are trimmed");
            expect(cardInfo.error).toEqual(true);
            expect(cardInfo.number).toEqual("434388009");
            expect(cardInfo.type).toEqual("visad");

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.number).toEqual("434388009");
            expect(cardInfo.type).toEqual("visad");

        }]));


    it('should have a working service that checks length of card which is 19 and trims the rest',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "401891234565431233312323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("Card Number length exceeds maximum specified length");
            expect(cardInfo.number).toEqual("4018912345654312333");
            expect(cardInfo.error).toEqual(true);
            expect(cardInfo.type).toEqual("visa");
        }]));



    it('should have a working service that checks length of visa card which is 19 and trims the rest and checks for the trimmed value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "401891234565431233312323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("Card Number length exceeds maximum specified length");
            expect(cardInfo.number).toEqual("4018912345654312333");
            expect(cardInfo.error).toEqual(true);
            expect(cardInfo.type).toEqual("visa");

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.number).toEqual("4018912345654312333");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("visa");


        }]));


    it('should have a working service that checks length of Maestro card which is 19 and trims the rest and checks for the trimmed value',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "501891234565431233312323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("Card Number length exceeds maximum specified length");
            expect(cardInfo.number).toEqual("5018912345654312333");
            expect(cardInfo.error).toEqual(true);
            expect(cardInfo.type).toEqual("maestro");


            //Checking for same values error should change to false and message should be blank

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.number).toEqual("5018912345654312333");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("maestro");


        }]));


    it('should have a working service that checks a card which starts with master card value and exceeds its length limit and changes to other card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "511891234565432323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("default");
        }]));


    it('should have a working service that checks a card which starts with amex card value and exceeds its length limit and changes to other card',
        inject(['CreditCardService', function($yt) {

            var cardInfo = { type: "default", number: "371891234565432323", "message": "", "error": false };

            cardInfo = $yt.checkCard(cardInfo);
            expect(cardInfo.message).toEqual("");
            expect(cardInfo.error).toEqual(false);
            expect(cardInfo.type).toEqual("default");
        }]));





});
