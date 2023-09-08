function createScoreBoard() {
    const obj = {
        'The Best Ever': 1000000
    };
    return obj;
}

function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
}

function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];

    return scoreBoard;
}

function updateScore(scoreBoard, player, points) {
    scoreBoard[player] = scoreBoard[player] + points;
    return scoreBoard
}

function applyMondayBonus(scoreBoard) {
    for (let key in scoreBoard) {
        scoreBoard[key] = scoreBoard[key] + 100;
    }
    return scoreBoard;
}
  
function normalize(score) {
    return 2 * score + 10;
}

function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}

const params = { 
    score: 400, 
    normalizeFunction: normalize
};

console.log(normalizeScore(params));


