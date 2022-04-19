const fs = require('fs');
const filePath = process.argv[2];

function readFile(filePath) {
    const file = fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const str = data.toString();
            const arr = str.split('\n');
            console.log(arr.length - 1);
        }
    });
}

readFile(filePath);