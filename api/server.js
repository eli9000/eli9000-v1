import http from 'http';

/******************************************************************************/

import './mailgun.js';

/******************************************************************************/

const PORT = 3030;

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Sup World\n');
}).listen(PORT, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:${PORT}/`);
