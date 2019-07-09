const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

let app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port, () => console.log(`Proxy server listening on port ${port}`));

module.exports = server;