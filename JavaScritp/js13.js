const twoFer = (name) => {
    !name ? name = 'you': name;
    return `One for ${name}, one for me.`
};

console.log(twoFer('dads'));