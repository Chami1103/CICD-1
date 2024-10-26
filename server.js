const http = require('http');

// Use the PORT environment variable or default to 8080
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Updated HTML with modern styling
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bitcoin Information</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #121212;
          color: #FFFFFF;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
          max-width: 800px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
          background-color: #1E1E1E;
        }
        h1 {
          font-size: 3em;
          color: #F7931A;
          margin-bottom: 10px;
        }
        .price {
          font-size: 2em;
          color: #4CAF50;
          margin: 20px 0;
        }
        .logo {
          width: 80px;
          margin-bottom: 20px;
        }
        h2 {
          font-size: 1.8em;
          color: #e0e0e0;
        }
        p {
          font-size: 1.2em;
          color: #b0b0b0;
          line-height: 1.6;
        }
        .footer {
          font-size: 0.9em;
          color: #888888;
          margin-top: 40px;
        }
        .content {
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="Bitcoin Logo" class="logo">
        <h1>Bitcoin Information</h1>
        
        <h2>Current Price</h2>
        <p class="price">$63,000</p>
        
        <h2>About Bitcoin</h2>
        <p>Bitcoin is a decentralized digital currency that allows people to send or receive money over the internet. Unlike traditional currencies issued by governments, Bitcoin is not controlled by any central authority, and transactions occur directly between users through a peer-to-peer network.</p>
        
        <h2>How Bitcoin Technology Works</h2>
        <p>Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. New bitcoins are created as a reward for a process known as mining, where miners solve complex mathematical problems to validate transactions and secure the network.</p>
        
        <p>Bitcoin’s limited supply of 21 million coins makes it a potentially valuable store of value, and it is increasingly accepted by businesses and institutions around the world.</p>
        
        <p>Many view Bitcoin as a revolutionary technology, potentially enabling financial inclusion and innovation beyond traditional banking systems.</p>
        
        <div class="footer">
          <p>Note: The Bitcoin price is static. Connect with a real-time API for live updates.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

