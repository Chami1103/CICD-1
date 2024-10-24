const http = require('http');

// Use the PORT environment variable or default to 8080
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("My name is Chamika. Level 2 Ops Engineer.");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

