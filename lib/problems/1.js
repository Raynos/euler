module.exports = function () {
    var sum = 0,
        counter = 1000

    for (var i = 0; i < counter; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }

    return sum
}