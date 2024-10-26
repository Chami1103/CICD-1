const http = require('http');

// Use the PORT environment variable or default to 8080
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Updated HTML page with detailed Bitcoin information
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bitcoin Information</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #fff; text-align: center; padding: 50px; color: #000; }
        h1 { color: #f7931a; font-size: 2.5em; }
        h2 { font-size: 1.8em; color: #333; }
        p, ul { font-size: 1.2em; line-height: 1.6; color: #555; text-align: left; max-width: 800px; margin: 0 auto; }
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

        <h2>Founder</h2>
        <p>Bitcoin was created by an anonymous person or group of people known as Satoshi Nakamoto in 2008. Nakamoto's true identity remains unknown.</p>
        
        <h2>Exchanges to Buy Bitcoin</h2>
        <ul>
          <li>Coinbase</li>
          <li>Binance</li>
          <li>Kraken</li>
          <li>Gemini</li>
          <li>Bitfinex</li>
        </ul>

        <h2>Bitcoin ETFs</h2>
        <p>Bitcoin ETFs allow investors to invest in Bitcoin without holding the actual coins. Available ETFs include the Grayscale Bitcoin Trust (GBTC), ProShares Bitcoin Strategy ETF (BITO), and Valkyrie Bitcoin Strategy ETF.</p>
        
        <h2>Bitcoin's First Transaction</h2>
        <p>The first Bitcoin transaction occurred in 2010 when a programmer named Laszlo Hanyecz purchased two pizzas for 10,000 BTC, an event now celebrated as <strong>Bitcoin Pizza Day</strong> on May 22nd. This day highlights the value of Bitcoin in early stages and how much it has grown in value since.</p>

        <h2>Bitcoin's Limited Supply</h2>
        <p>Bitcoin has a limited supply of 21 million coins, making it a potentially valuable store of value and a hedge against inflation.</p>

        <h2>Bitcoin Pizza Day</h2>
        <p>Bitcoin Pizza Day, celebrated on May 22, marks the first real-world purchase made with Bitcoin when 10,000 BTC were used to buy two pizzas. It symbolizes the growth of Bitcoin as a medium of exchange.</p>

        <h2>How Bitcoin Works</h2>
        <p>Bitcoin operates on a decentralized network where transactions are verified by miners who solve complex cryptographic puzzles. These verified transactions are added to the blockchain, a public ledger that records all Bitcoin transactions.</p>

        <h2>Bitcoin Blockchain Coins</h2>
        <ul>
          <li>Wrapped Bitcoin (WBTC)</li>
          <li>Liquid Bitcoin (L-BTC)</li>
          <li>RSK Smart Bitcoin (RBTC)</li>
          <li>Tether (Omni)</li>
          <li>Stably USD (USDS)</li>
        </ul>

        <h2>Top 10 Bitcoin Holders</h2>
        <ul>
          <li>Grayscale Bitcoin Trust</li>
          <li>MicroStrategy</li>
          <li>Tesla</li>
          <li>Block.one</li>
          <li>Coinbase</li>
          <li>Binance</li>
          <li>Bitfinex</li>
          <li>Mt. Gox Trustee</li>
          <li>Winklevoss Twins</li>
          <li>Tim Draper</li>
        </ul>

        <h2>More Resources</h2>
        <p>To learn more about Bitcoin, visit <a href="https://bitcoinmagazine.com" style="color: #f7931a;">Bitcoin Magazine</a>.</p>
      </div>

      <div class="footer">
        <p>© Chamika Vimukthi</p>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
k
