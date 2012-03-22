var Prime = require("../prime")

module.exports = function () {
    var primes = Prime.factors(600851475143)
    return primes[primes.length - 1]
}