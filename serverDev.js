const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config.dev');
const https = require('https');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const API_KEY = '7681872eb59176b720246f7fd67ddc4d';
const API_URL = 'https://api.themoviedb.org/3/movie/upcoming';

const PARAMS = '?api_key=' + API_KEY;
const REQUEST_URL = API_URL + PARAMS;

app.get('/movies', function(req, res) {  
    return https.get(REQUEST_URL, (response) => {
      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
        body += d;
      });
      response.on('end', function() {
        // Data reception is done, do whatever with it!        
        res.json(body);
      });
    }).on('error', (e) => {
      console.error(e);
    });
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
})