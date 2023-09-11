function twoSum(array1, array2) {
    let soma = ' ';
    let soma2 = ' ';

    for (let i = 0; i < array1.length; i++) {
        soma += array1[i]
    }
    
    for (let y = 0; y < array2.length; y++) {
        soma2 += array2[y];
    } 

    return Number(soma) + Number(soma2);
}


function luckyNumber(value) {
    const numToSting = String(value);
    const reversedString = numToSting.split('').reverse().join('');
    const stringToNum = Number(reversedString);

    return value === stringToNum;
}

function errorMessage(input) {
    if (!input) {
        return 'Required field';
    } else if (Number(input)) {
        return '';
    } else {
        return 'Must be a number besides 0';
    }
}

console.log(errorMessage(0))