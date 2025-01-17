const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('./dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log(`Server started on ${port} port`);
