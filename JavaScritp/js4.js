function canExecuteFastAttack(logica) {
    return !logica;
}

function canSpy(logica1, logica2, logica3) {
    var result = (logica1 || logica2 || logica3);
    return result;
}

function canSignalPrisoner(logica1, logica2) {
    var result = (!logica1 && logica2);
    return result;
}

const knightIsAwake = false;
const archerIsAwake = false;
const prisonerIsAwake = false;
const petDogIsPresent = false;

function canFreePrisoner(logica1, logica2, logica3, logica4) {
    var condicao1 = (logica1 && !logica2 && logica3 && logica4);
    var condicao2 = (!logica1 && !logica2 && logica3 && !logica4);
    var condicao3 = (!logica1 && !logica2 && !logica3 && logica4);
    var condicao4 = (!logica1 && !logica2 && logica3 && logica4);
    var condicao5 = (logica1 && !logica2 && !logica3 && logica4);

    var result = condicao1 || condicao2 || condicao3 || condicao4 || condicao5;
    
    return result;
}

console.log(canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));