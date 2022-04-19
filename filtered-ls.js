const fs = require('fs');
const filePath = process.argv[2];
const filter = `.${process.argv[3]}`;

function readFile(filePath,filter) {
   fs.readdir(filePath, (err, data) => {
       if (err) {
           console.log(err);
       } else {
              const filtered = data.filter(file => file.includes(filter));
              filtered.forEach(element => {
                  console.log(element);
              });
       }
   });
}

readFile(filePath,filter);