'use strict';

describe('Primex Check', () => {
    const isPrime = require('../index');
    it('should recognize primes', () => {
        const PRIME = 10007;
        expect(isPrime(PRIME)).toEqual(true);
    });

    it('should recognize non-primes', () => {
        const NON_PRIME = 10006;
        expect(isPrime(NON_PRIME)).toEqual(false);
    });
});