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

    it('should recognize negative', () => {
        function test() {
            const NEGATIVE = -10006;
            isPrime(NEGATIVE);
        }

        expect(test).toThrowError(/positive/);
    });

    it('should recognize non-int', () => {
        function test() {
            const NON_INT = 10006.5;
            isPrime(NON_INT);
        }

        expect(test).toThrowError(/integer/);
    });
});