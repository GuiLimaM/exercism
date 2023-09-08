function timeToMixJuice(name) {
    let time = 0;
    switch (name) {
        case 'Pure Strawberry Joy':
            time = 0.5
            break;
        case 'Energizer':
        case 'Green Garden':
            time = 1.5
            break;
        case 'Tropical Island':
            time = 3
            break;
        case 'All or Nothing':
            time = 5
            break;
        default:
            time = 2.5
            break;
    }
    return time;
}

function limesToCut(wedgesNeeded, limes) {
    let wedges = 0;
    let totalWedges = 0;
    let i = 0;

    while ((i < limes.length) && (totalWedges <= wedgesNeeded)) {
        switch (limes[i]) {
            case 'small':
                wedges = 6
                break;
            case 'medium':
                wedges = 8
                break;
            case 'large':
                wedges = 10
                break;
            default:
                wedges = 0;
        }

        totalWedges = totalWedges + wedges;

        if (wedgesNeeded !== 0) {
            i++;
        }
    }
    return i;
}

function remainingOrders(timeLeft, orders) {
    let time = 0;
    let i = 0;
    let newArray = [];

    do {
        time = timeToMixJuice(orders[i]);
        timeLeft = timeLeft - time;
        i++;
        newArray = orders.slice(0, i);
    } while (timeLeft > 0) 
    orders.splice(0, newArray.length)
    return orders;
}

console.log(remainingOrders(7, ['Tropical Island',
'Energizer',
'Limetime',
'All or Nothing',
'Pure Strawberry Joy']))


