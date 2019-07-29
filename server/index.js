const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 80;
const axios = require('axios');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static(path.join(__dirname, '../public')));

//get product reviews component
app.use('/api/:productId', (req, res) => {
  const url = `http://localhost:3001/api/${req.params.productId}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

app.use('/api/:productId/summary', (req, res) => {
  const url = `http://localhost:3001/api/${req.params.productId}/summary`;
  axios.get(url).then((response) => {res.send(response.data)});
});


// get product description component and fonts
app.use('/descriptionAPI/:id', (req, res) => {
  const url = `http://localhost:3003/descriptionAPI/${req.params.id}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

app.use('/:id/font/:url', (req, res) => {
  const url = `http://localhost:3003/${req.params.id}/font/${req.params.url}`;
  axios.get(url).then((response) => {res.send(response.data)});
});


// get pricing component
app.get('/api/:id', (req, res) => {
  const url = `http://localhost:3004/pricingAPI/${req.params.id}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

const server = app.listen(port, () => console.log(`Proxy server listening on port ${port}`));

module.exports = server;