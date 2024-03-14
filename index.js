const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Define a route that returns the meta tag
app.get("/", (req, res) => {
  // This is a simple example, you might want to dynamically generate this tag
  const ogImage =
    "https://www.google.com/imgres?q=farcaste%20image&imgurl=https%3A%2F%2Fcdn.finex.cz%2Fwp-content%2Fuploads%2Ffinex-og%2Fpost%2F127456_square.jpg%3Ft%3D1707338692&imgrefurl=https%3A%2F%2Ffinex.cz%2Ffarcaster-bude-prvni-kryptomenovou-socialni-siti-ktera-se-mozna-konecne-chytne%2F&docid=fH37h7DhZANSGM&tbnid=8NkWPFPyX2XrcM&vet=12ahUKEwi7vvz14_OEAxWXTWcHHb5uCMcQM3oECGgQAA..i&w=1280&h=1280&hcb=2&ved=2ahUKEwi7vvz14_OEAxWXTWcHHb5uCMcQM3oECGgQAA";
  const metaTag = `<meta property="og:image" content="${ogImage}" />`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple OG Image Example</title>

      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content=${ogImage} />
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
