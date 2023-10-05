function translate2d(dx, dy) {
    return function translate(x, y) {
        return [x + dx, y + dy];
    }
}

function scale2d(sx, sy) {
    return function translate(x, y) {
        return [x * sx, y * sy];
    }
}

function composeTransform(f, g) {
    return function result(x, y) {
        return g(...f(x, y))
    }
}

function memoizeTransform(f) {
    let previousX, previousY, previousResult

    return function memoised(x, y) {
        if (previousX === x && previousY === y) {
            return previousResult
        }
        previousX = x
        previousY = y
        return previousResult = f(x, y)
    }
}