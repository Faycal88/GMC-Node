const http = require('http');
const path = process.argv[2];

http.get(path, (response) => {
    response.setEncoding('utf8');
    response.on('error', function(err) {
        return console.error(err);
     });
    response.on('data', (data) => {
        return console.log(data);
    });
});
