function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

module.exports = function isPrime(n) {
    if (!isInt(n)) {
        throw new Error('Only integer numbers is accepted');
    }

    if (n < 0) {
        throw new Error('Only positive numbers is accepted');
    }

    var re = /^.?$|^(..+?)\1+$/;
    return !re.test(Array(n + 1).join('1'));
};
