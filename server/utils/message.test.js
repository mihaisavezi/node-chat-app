var expect = require('expect');

var {generateMessage} = require('./message');


describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'George';
        var text = 'Lumea e a mea';
        var result = generateMessage(from, text);

        expect(result.createdAt).toBeA('number');
        expect(result).toInclude({from, text});
    })
})