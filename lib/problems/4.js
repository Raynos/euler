var Palindrome = require("../palindrome")

module.exports = function () {
    var result = 0

    for (var i = 100; i < 1000; i++) {
        for (var j = 100; j < 1000; j++) {
            var product = i * j
            if (Palindrome.is(product) && product > result) {
                result = product
            }
        }
    }

    return result
}