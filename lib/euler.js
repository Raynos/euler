var fs = require("fs"),
    path = require("path")

var euler = {
    problems: {}
}

fs.readdirSync(path.join(__dirname, "problems")).forEach(function (fileName) {
    var src = path.join(__dirname, "problems", fileName)
    var problem = +fileName.replace(".js", "")
    euler.problems[problem] = require(src)
})

module.exports = euler