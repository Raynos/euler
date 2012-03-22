var Fibonacci = require("../fib")

module.exports = function () {
    var gen = Fibonacci.generator(),
        next = gen.next(),
        sum = 0

    do {
        if (next % 2 === 0) {
            sum += next
        }
    } while ((next = gen.next()) < 4000000)

    return sum
}