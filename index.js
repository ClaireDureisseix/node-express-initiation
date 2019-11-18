const express = require('express');
const app = express();
const port = 3000;

app.get('/api/movies', (request, response) => {
  response.send('All films');
});

app.get('/api/movies/:id', (req, res) => {
  res.json({ result: '10 results found' })
});

app.get(`/api/employee`, (req, res) => {
  res.sendStatus(304);
});

app.get(`/api/employee?name=/:name`, (req, res) => {
  res.status(404).send('Unable to retrieve /api/employee?name=/:name');
});


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
