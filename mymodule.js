const fs = require('fs');
const path = require('path');

module.exports = function (filePath, filter, callback) {
    var filtered = [];
    filter = `.${filter}`;
    fs.readdir(filePath, (err, data) => {
        if (err) {
          return callback(err)
        } else {
            data.forEach(file => {
                if (path.extname(file) === filter) {
                    filtered.push(file);
                }
            }); 
            }
           return callback(null, filtered)
        }
    );
}