const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./docs/index.html', (err, data) => {
        if (err) {
            console.log(err.message);
            res.end('Error loading page');
        } else {
            res.write(data);
            res.end();
        }
    });

});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
