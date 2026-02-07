const express = require("express");

// Create Express app
const app = express();

// Define the port
const PORT = 3000;

// Basic route - Home
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to Express 🚀");
});

// Another simple route
app.get("/about", (req, res) => {
  res.send("This is the About page");
});

// Route with URL parameter
app.get("/user/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
