var Fibonacci = {
    generator: function () {
        return Object.create(Generator).constructor()
    }
}

var Generator = {
    constructor: function () {
        this.counter = 0
        this.current = 0
        this.previous = 0
        return this
    },
    next: function () {
        if (this.counter === 0) {
            this.current = 1
        } else if (this.counter === 1) {
            this.previous = this.current
            this.current = 2
        } else {
            var current = this.current,
                previous = this.previous

            this.current = current + previous
            this.previous = current
        }

        this.counter++
        return this.current
    }
}

module.exports = Fibonacci