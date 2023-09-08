function frontDoorResponse(string) {
    return string[0];
}

function frontDoorPassword(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function backDoorResponse(string) {
    var stringSemEspaco = string.trim()
    return stringSemEspaco[stringSemEspaco.length - 1];
}

function backDoorPassword(string) {
    return frontDoorPassword(string.trim()) + ", please"
}