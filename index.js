module.exports = function isPrime(n) {
    var re = /^.?$|^(..+?)\1+$/;
    return !re.test(Array(n+1).join('1'));
};