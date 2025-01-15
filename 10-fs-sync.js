const { readFileSync, writeFileSync, read, readFile } = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a'});
console.log('done with task')
console.log('starting the new one')

// console.log(third);

// As this is reading the file synchronously this will lead to starvation