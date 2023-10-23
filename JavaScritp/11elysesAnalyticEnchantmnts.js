const card = 3;

function getCardPosition(stack, card) {
    return stack.findIndex((num) => num === card);
}

function doesStackIncludeCard(stack, card) {
    return stack.some((num) => num === card);
}

function isEachCardEven(stack) {
    return stack.every((num) => num % 2 === 0);
}

console.log(isEachCardEven([2, 4, 6, 7]));