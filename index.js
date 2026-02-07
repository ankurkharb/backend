<<<<<<< HEAD
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
=======
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hell World!')
})

app.get('/twitter', (req, res) => {
    res.send('ankurcom')
})
app.get('/login', (req,res)=>{
    res.send('<h1>Login at my dihh</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
>>>>>>> 8da32c923127ef9417d6be0f3a648619ea119ebd
