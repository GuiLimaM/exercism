const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
    return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
    return numberOfLayers * 2
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
  
totalTimeInMinutes(3, 20);