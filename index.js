// Code your solutions in this file
// Function to write thank you cards
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let name of names) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
}

// Function to count down from a given number
function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    }
}

// Test cases for writeCards() function
describe('writeCards()', () => {
    it('returns an array of thank you messages for each name provided to the function', () => {
        const names = ['Alice', 'Bob', 'Charlie'];
        const eventName = 'birthday';
        const expectedMessages = [
            'Thank you, Alice, for the wonderful birthday gift!',
            'Thank you, Bob, for the wonderful birthday gift!',
            'Thank you, Charlie, for the wonderful birthday gift!'
        ];
        assert.deepStrictEqual(writeCards(names, eventName), expectedMessages);
    });
});

// Test cases for countDown() function
describe('countDown()', () => {
    it('invokes console.log once for each number, counting down from the number provided to zero', () => {
        const spy = chai.spy.on(console, 'log');
        countDown(3);
        expect(spy).to.have.been.called.exactly(4); // Including zero
    });

    it('logs each number when counting down, starting from the number provided', () => {
        const spy = chai.spy.on(console, 'log');
        countDown(3);
        expect(spy).to.have.been.called.with(3);
        expect(spy).to.have.been.called.with(2);
        expect(spy).to.have.been.called.with(1);
        expect(spy).to.have.been.called.with(0);
    });
});

