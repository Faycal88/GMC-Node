const http = require('http');
const path = process.argv[2];
const bl = require('bl');

http.get(path, (response) => {
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});