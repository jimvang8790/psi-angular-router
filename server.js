var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// This should be the last route
// /* is wildcard will respond to all requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// No server side routes that are the same as the client side routes

app.listen(5098, function() {
  console.log('listenign 5098');
});
