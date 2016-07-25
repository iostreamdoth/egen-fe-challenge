describe("Unit: Testing Services", function() {
  var mod,service;
  beforeEach( module('myCCApp'));

  it('should contain an CreditCardService service',
    inject(function(_CreditCardService_) {
    service =  _CreditCardService_
    expect(service).toBeDefined();
  }));


  it('should have a working service that checks Visa',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "4018912345654323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("visa");
  }]));

  it('should have a working service that checks master card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "5118912345654323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("master");
  }]));


  it('should have a working service that checks american express card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "341891234565433", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("amex");
  }]));

  it('should have a working service that checks discover card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "6011912345654323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("discover");
  }]));


  it('should have a working service that checks Maestro card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "5018912345654323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("maestro");
  }]));


  it('should have a working service that checks default',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "2118912345654323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("default");
  }]));


  it('should have a working service that checks Illegal characters in card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "4343JKA88009", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("Please Enter Number without any characters/special chracters. Characters other then number are trimmed");
    expect(cardInfo.error).toEqual(true);
    expect(cardInfo.number).toEqual("434388009");
    expect(cardInfo.type).toEqual("default");

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.number).toEqual("434388009");
    expect(cardInfo.type).toEqual("visa");

  }]));


  it('should have a working service that checks length of card',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "401891234565431233312323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("Card Number length exceeds maximum specified length");
    expect(cardInfo.number).toEqual("4018912345654312333");
    expect(cardInfo.error).toEqual(true);
    expect(cardInfo.type).toEqual("default");
  }]));


  it('should have a working service that checks length Mastercard',
    inject(['CreditCardService',function($yt) {

    var cardInfo = { type: "default", number: "511891234565432323", "message": "", "error": false };

    cardInfo = $yt.checkCard(cardInfo);
    expect(cardInfo.message).toEqual("");
    expect(cardInfo.error).toEqual(false);
    expect(cardInfo.type).toEqual("default");
  }]));





});
