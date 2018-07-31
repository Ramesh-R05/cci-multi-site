const testFolder = './rerun/';
const fs = require('fs');
const fileList = [];
let contents;
let counter;

fs.readdir(testFolder, (err, files) => {

    files.forEach(file => {
        const stats = fs.statSync(testFolder + file);

        if (stats.size > 0) {
            fileList.push(testFolder + file);
        }
    });

    console.log(fileList);
    counter = fileList.length;

    fs.createWriteStream('@rerun.txt');

    fileList.forEach(file => {

        counter--;
        contents = fs.readFileSync(file, 'utf8');

        if (counter > 0) {
            contents += '\n';
        }

        fs.appendFile('./@rerun.txt', contents, (err) => {
            if (err) {
                return console.log(err);
            }
        });

    });
});
