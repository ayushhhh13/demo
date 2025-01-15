//CommonJS- very file is a module
// Modules - - Encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require('./7-mindgranade.js')

console.log(data)
sayHi('susan')
sayHi(names.peter)
sayHi(names.john)
