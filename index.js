const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Define a route that returns the meta tag
app.get("/", (req, res) => {
  // This is a simple example, you might want to dynamically generate this tag
  const ogImage =
    "https://wallpapers.com/images/featured-full/iron-man-ouqxo5w2b59h0042.jpg";
  const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  console.log(randomNumber);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple OG Image Example</title>
      <meta property="of:version" content="vNext" />

      <meta property="of:accepts:farcaster" content="vNext" />
      <meta property="of:accepts:xmtp" content="2024-02-01"/>
<meta property="of:image" content=${ogImage}/>
      <meta property="og:image" content=${ogImage} />
      <meta property = "of:input:text" content ="Enter number" />

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
