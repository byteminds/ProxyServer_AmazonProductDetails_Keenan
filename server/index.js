const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const axios = require('axios');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/:id', express.static(path.join(__dirname, '../public')));

//get product reviews component
app.use('/api/:productId', (req, res) => {
  const url = `http://ec2-34-201-59-177.compute-1.amazonaws.com/api/${req.params.productId}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

app.use('/reviews/api/:productId', (req, res) => {
  const url = `http://ec2-34-201-59-177.compute-1.amazonaws.com/api/${req.params.productId}/summary`;
  axios.get(url).then((response) => {res.send(response.data)});
});


// get product description component and fonts
app.use('/descriptions/:id', (req, res) => {
  const url = `http://ec2-54-67-53-174.us-west-1.compute.amazonaws.com/descriptions/${req.params.id}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

app.use('/:id/font/:url', (req, res) => {
  const url = `http://ec2-54-67-53-174.us-west-1.compute.amazonaws.com/${req.params.id}/font/${req.params.url}`;
  axios.get(url).then((response) => {res.send(response.data)});
});


// get pricing component
app.get('/api/:id', (req, res) => {
  const url = `http://ec2-3-17-206-111.us-east-2.compute.amazonaws.com/pricingAPI/${req.params.id}`;
  axios.get(url).then((response) => {res.send(response.data)});
});

const server = app.listen(port, () => console.log(`Proxy server listening on port ${port}`));

module.exports = server;