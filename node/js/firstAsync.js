var fs = require('fs')
var result = undefined

function one(callback) {
	fs.readFile(process.argv[2], function doneReading(error, fileContents) {
		fileContents = fileContents.toString()
		var str = fileContents.split('\n')
		result = str.length - 1
		callback()
	})
}

function logResult() {
	console.log(result)
}

one(logResult)
