const express = require('express');

const app = express();

const port = 3000;

app.get('/home', (req, res) => {
  console.log("hitting home page")
  res.status(200).send('Home page!');
});

app.get('/about', (req, res) => {
    console.log("hitting about page")
    res.status(200).send('About page!');
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});