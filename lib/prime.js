var Prime = {
    factors: function (number) {
        var primes = [],
            limit = Math.sqrt(number)

        for (var i = 2; i < limit + 1; i++) {
            if (number % i === 0 && this.is(i)) {
                primes.push(i)
            }
        }

        return primes
    },
    is: function (prime) {
        for (var i = 2; i < Math.sqrt(prime) + 1; i++) {
            if (prime % i === 0 && prime !== i && i !== 1) {
                return false
            }
        }
        return true
    }
}

module.exports = Prime