function cookingStatus(minuts) {
    if (minuts === 0) {
        return 'Lasagna is done.';
    } else if (minuts > 0) {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
}

function preparationTime(layers, minuts) {
    minuts = minuts === undefined ? 2 : minuts;
    const quantLayers = layers.length;

    return quantLayers * minuts
}

function quantities(layers) {
    const noodlesAndSauce = {
        noodles: 0,
        sauce: 0
    };
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') {
            noodlesAndSauce.noodles += 50;
        } else if (layers[i] === 'sauce') {
            noodlesAndSauce.sauce += 0.2;
        }
    }
    return noodlesAndSauce;
}


function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

function scaleRecipe(recipe, num) {
    const newRecipe = {};
    num > 0 ? num = num / 2: num = undefined;

    for (const chave in recipe) {
        newRecipe[chave] = recipe[chave] * num;
    }

    return newRecipe;
}

const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};

console.log(scaleRecipe(recipe, 10));

console.log(recipe)
