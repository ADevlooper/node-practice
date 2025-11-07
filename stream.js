const fs = require('fs');

const readStream = fs.createReadStream('./docs/hugeFile.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/CopyHugeFile.txt')

// readStream.on('data',(buffer) => {
//     writestream.write('\n new buffer <<><><><><><><><><><><><><><><><><><><>< \n')
//     // console.log('New Buffer\n')
//     console.log(buffer);
// })
 
readStream.pipe(writeStream);
// pipe is used here to just read the readstrem and write it on writestream 