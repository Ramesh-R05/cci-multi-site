import capitalize from '../../../../app/server/bff/helper/capitalize';

describe('#capitalize', () => {
    it('single word', () => {
        expect(capitalize('abc')).to.equal('Abc');
    });

    it('more than one word', () => {
        expect(capitalize('abc abc')).to.equal('Abc Abc');
    });

    it('word with number in the beginning', () => {
        expect(capitalize('1abc')).to.equal('1abc');
    });

    it('second word with number in the beginning', () => {
        expect(capitalize('abc 1abc')).to.equal('Abc 1abc');
    });

    it('words with special character', () => {
        expect(capitalize('1abc @abc')).to.equal('1abc @abc');
    });
});
