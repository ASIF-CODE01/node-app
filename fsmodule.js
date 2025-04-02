const fs = require('fs'); 


const content = 'Hello, Start your day with inner freshness!';


fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err); 
    } else {
        console.log('File written successfully!');
        console.log(content);
        console.log(" ");
    }
});

const fs2 = require('fs'); 


const filePath = 'output.txt';


fs2.stat(filePath, (err, stats) => {
    if (err) {
        console.error(err); 
        return;
    }

    
    console.log('File size:', stats.size + ' bytes');
    console.log('Is a File:', stats.isFile());
    console.log('Is a Directory:', stats.isDirectory());
    console.log('File Birthtime (creation time):', stats.birthtime);
    console.log('File Modification time:', stats.mtime);
});

const fs3 = require('fs'); 


const filePathAppend = "output.txt";


const dataToAppend = '\nThis data will be appended to the file.';


fs3.appendFile(filePathAppend, dataToAppend, (err) => {
    if (err) {
        console.error(err); 
        return;
    }
    console.log('Data has been appended to the file.');
});

