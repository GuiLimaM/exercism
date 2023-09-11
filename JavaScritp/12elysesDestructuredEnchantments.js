function getFirstCard(deck) {
    const [a, ...remainderArray] = deck;
    return a;
}

function getSecondCard(deck) {
    const [a, b, ...remainderArray] = deck;
    return b;
}

function swapTopTwoCards(deck) {
    const [a, b, ...remainderArray] = deck;
    const newDeck = [b, a, ...remainderArray]
    return newDeck;
}

function discardTopCard(deck) {
    const [a, ...remainderArray] = deck;
    const newDeck = [a, remainderArray]
    return newDeck;
}

function insertFaceCards(deck) {
    const [a, ...remainderArray] = deck
    const newDeck = [a, ...FACE_CARDS, ...remainderArray]
    return newDeck;
}

const FACE_CARDS = ['jack', 'queen', 'king'];

const deck = [5, 9, 7, 1, 8];

console.log(insertFaceCards(deck));