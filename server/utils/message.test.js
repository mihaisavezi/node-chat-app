var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'George';
        var text = 'Lumea e a mea';
        var result = generateMessage(from, text);

        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({from, text});
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = "TestUser";
        var lat = 15;
        var long = 25;
        var url = "//www.google.com/maps?q=15,25";

        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    })
})