const cards = [3, 2, 6, 4, 8];
const position = 2;
const replacementCard = 6;
const newCard = 8;
const stackSize = 4;

function getItem(cards, position) {
    return cards[position];
}

function setItem(cards, position, replacementCard) {
    cards.splice(position, 1, replacementCard)
    return cards;
}

function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards
}

function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}

function removeItemFromTop(cards) {
    cards.pop();
    return cards
}

function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards
} 

function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

function checkSizeOfStack(cards, stackSize) {
    var result = cards.length == stackSize;
    return result;
}

console.log(checkSizeOfStack(cards, stackSize));