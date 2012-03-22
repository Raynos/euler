var assert = require("assert"),
    euler = require("..")

suite("Problem 1", function () {
    test("problem 1 is correct", function () {
        assert.equal(euler.problems[1](), 233168)
    })
})

suite("Problem 2", function () {
    test("problem 2 is correct", function () {
        assert.equal(euler.problems[2](), 4613732)
    })
})

suite("Problem 3", function () {
    test("problem 3 is correct", function () {
        assert.equal(euler.problems[3](), 6857)
    })
})

suite("Problem 4", function () {
    test("problem 4 is correct", function () {
        assert.equal(euler.problems[4](), 906609)
    })
})