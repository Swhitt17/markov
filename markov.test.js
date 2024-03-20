const MarkovMachine = require('./markov');

let mm;  

beforeEach(function(){
    mm = new MarkovMachine();
})

describe('chain function', function (){
    test('input text to make a chain', function() {
        const res = MarkovMachine.makeChains( "the cat in the hat")
        expect(res).toEqual({"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]})
    })
})

describe('text function',function () {
    test('outputs text of the correct length', function()  {
        const res = MarkovMachine.makeText(numWords = 10,"the cat in the hat")
        expect(res).not.tohaveLength(0);
    })
})