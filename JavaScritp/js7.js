function totalBirdCount(birdsPerDay) {
    var soma = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        soma = soma + birdsPerDay[i];
    }
    return soma;
} 

function birdsInWeek(birdsPerDay, week) {
    let totalBirds = 0;
    for (let i = week * 7 - 7; i < week * 7; i++) {
        totalBirds = totalBirds + birdsPerDay[i];
    }
    return totalBirds;
}

function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i = i + 2) {
        birdsPerDay[i] = birdsPerDay[i] + 1;
    }
    return birdsPerDay;
}

console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));
