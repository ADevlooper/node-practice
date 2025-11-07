// File System Module

//it is a  predefined module in node js which is used to work with the file system on your computer.
// It allows you to read, write, update, delete, and manage files and directories.  
// The fs module provides both synchronous and asynchronous methods for file operations.
// Example of using the fs module to read a file asynchronously:

const fs = require('fs');

if(! fs.existsSync('./docs')) {

fs.mkdir('./docs', (err) => {
    if (err) {
        console.log(err.message);
    }
    else{
    console.log('Directory created successfully');
    }
})
}


fs.writeFile('./docs/example.txt', 'here is the text', (err) => {
    if (err) {
        console.log(err.message);
    }
    else{ 
    console.log('File created and text written successfully');
    }
});

if( fs.existsSync('./docs/example.txt')) {
    fs.readFile('./docs/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err.message);
    }
    else{
    console.log('File read successfully: ', data.toString());
    }
});
}


if( fs.existsSync('./docs/example.txt')) {
    fs.unlink('./docs/example.txt', (err) => {
    if (err) {
        console.log(err.message);   
    }
    else{
    console.log('File deleted successfully');
    }
});
}

if( fs.existsSync('./docs/example.txt')){
fs.rmdir('./docs', (err) => {
    if (err) {
        console.log(err.message);
    }
    else{
    console.log('Directory deleted successfully');
    }
});
}
