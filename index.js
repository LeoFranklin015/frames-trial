const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// Define a route that returns the meta tag
app.get("/", (req, res) => {
  // This is a simple example, you might want to dynamically generate this tag
  const ogImage = "https://example.com/image.jpg";
  const metaTag = `<meta property="og:image" content="${ogImage}" />`;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple OG Image Example</title>
      ${metaTag}
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
