const http = require('http');
const port = process.env.PORT || 3000;

const requestListener = (req, res) => {
    
    const { method, url, headers } = req;

    if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Working Fine');
    return;
    }

    if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ app: 'ByB', version: '1.0.0' }));
    return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    };

    const server = http.createServer(requestListener);
    server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    });