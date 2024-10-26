const http = require('http');

// Use the PORT environment variable or default to 8080
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Simple HTML page displaying Bitcoin information
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bitcoin Information</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 50px; color: #333; }
        h1 { color: #3c6e71; font-size: 2.5em; }
        h2 { font-size: 1.8em; color: #555; }
        p { font-size: 1.2em; line-height: 1.6; color: #666; }
        .price { font-size: 2.5em; color: #2d8659; margin: 20px 0; }
        .logo { width: 100px; }
        .content { max-width: 800px; margin: auto; }
        .footer { font-size: 0.9em; color: #999; margin-top: 40px; }
      </style>
    </head>
    <body>
      <div class="content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin Logo" class="logo">
        <h1>Bitcoin Information</h1>
        
        <h2>Current Price</h2>
        <p class="price">$63,000</p>
        
        <h2>About Bitcoin</h2>
        <p>Bitcoin is a decentralized digital currency that allows people to send or receive money over the internet. Unlike traditional currencies issued by governments, Bitcoin is not controlled by any central authority, and transactions occur directly between users through a peer-to-peer network.</p>
        
        <h2>How Bitcoin Technology Works</h2>
        <p>Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. New bitcoins are created as a reward for a process known as mining, where miners solve complex mathematical problems to validate transactions and secure the network.</p>
        
        <p>Bitcoin’s limited supply of 21 million coins makes it a potentially valuable store of value, and it is increasingly accepted by businesses and institutions around the world.</p>
        
        <p>Many people view Bitcoin as a technological breakthrough, potentially enabling financial inclusion and innovation beyond the traditional banking system.</p>
      </div>
      <div class="footer">
        <p>Note: The Bitcoin price is static. Connect with a real-time API for live updates.</p>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

