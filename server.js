require('dotenv').config();
const { port } = require('./config/config');
const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});