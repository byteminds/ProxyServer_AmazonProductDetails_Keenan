const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const cors = require('cors')

let app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/:id', express.static(path.join(__dirname, '../public'))) // figure out why id route not working
// also debug CORB issue client side



app.use(bodyParser.urlencoded({ extended: true }));

// app.get('http://localhost:3004/:id', (req, res) => {
  // console.log(req.url);
//   res.send(data);
// })

const server = app.listen(port, () => console.log(`Proxy server listening on port ${port}`));

module.exports = server;