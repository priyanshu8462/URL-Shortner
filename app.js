const express = require('express');
const https = require('https');
const ejs = require('ejs');

const app = express();
const link = [];

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.render('index', { show: false, links: link });
})

app.post('/shorten', (req, res) => {
   console.log(req.body);
   const url = "https://api.shrtco.de/v2/shorten?url=" + req.body.url;
   console.log(url);
   https.get(url, response => {
      response.on('data', data => {
         const shortURL = JSON.parse(data);
         console.log(shortURL);
         const newLink = {
            full: req.body.url,
            short: shortURL.result.short_link2
         }
         link.push(newLink);
         console.log(link);
         res.render('index', { show: true, links: link });
      })
   })
})

app.listen(process.env.PORT || 3000, (req, res) => {
   console.log('====================================');
   console.log("SERVER STARTED");
   console.log('====================================');
})