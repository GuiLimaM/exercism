function needsLicense(kind) {
    return (kind === 'car' || kind === 'truck'); 
}

function chooseVehicle(option1, option2) {
    if (option1 < option2) {
        return option1 + ' is clearly the better choice.';
    } else {
        return option2 + ' is clearly the better choice.';
    }
}

function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        var newPrice = (originalPrice / 100) * 80;
        return newPrice;
    } else if (age > 10) {
        var newPrice = (originalPrice / 100) * 50;
        return newPrice;
    } else {
        var newPrice = (originalPrice / 100) * 70;
        return newPrice;
    }
}  

console.log(needsLicense('truce'));
