const card = 3;

function getCardPosition(stack, card) {
    return stack.indexOf(card);
}

function doesStackIncludeCard(stack, card) {
    return stack.includes(card);
}

function isEachCardEven(stack) {
    return stack.every((num) => num % 2 === 0);
}

function doesStackIncludeOddCard(stack) {
    return stack.some((num) => num % 2 !== 0);
}

function getFirstOddCard(stack) {
    return stack.find((num) => num % 2 !== 0); 
}

function getFirstEvenCardPosition(stack) {
    return stack.findIndex((num) => num % 2 ===0);
}

console.log(getFirstEvenCardPosition([5, 2, 3, 1]));