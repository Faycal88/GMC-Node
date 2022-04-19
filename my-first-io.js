const fs = require('fs');

const file = fs.readFileSync(`${process.argv[2]}`);
const str = file.toString();
const arr = str.split('\n');
console.log(arr.length - 1);
