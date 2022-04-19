const mymodule = require('./mymodule');
const filePath = process.argv[2];
const filter = process.argv[3];



mymodule(filePath, filter, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(element => {
            console.log(element);
        });
    }
});