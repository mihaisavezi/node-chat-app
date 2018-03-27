const expect = require('expect');

const {isRealString} = require('./validation');


describe('isRealString ', () => {
    it('should reject non-string values', () => {
        result = isRealString(432);

        expect(result).toBe(false);
    })

    it('should reject text with only spaces', () => {
        result = isRealString('   ');

        expect(result).toBe(false);
    })

    it('should allow string with non-space characters', () => {
        result = isRealString('  fdsfdsf ');

        expect(result).toBe(true);
    })
})