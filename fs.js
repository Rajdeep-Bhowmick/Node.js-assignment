var fs = require('fs');

var user_input = process.stdin;

user_input.setEncoding('utf-8');

console.log("Please input text in command line.");

user_input.on('data', function (data) {

        fs.exists(`${data}.txt`, function(exists) {
            if (exists) {
                console.log('already created');
                process.exit();
            }else {
                fs.writeFile( `${data}.txt`, `Hello ${data} welcome to web!`, function (err) {
                    if(err) throw err;
                });
                console.log('File Created!');
                process.exit();
            }
        });
   
});

