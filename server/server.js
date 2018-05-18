const express = require('express');
const hbs = require('hbs');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env. API_KEY);

app.use(express.static('views/'));
app.set('view engine', 'hbs');



app.get('/',(req,res) => {



newsapi.v2.everything({
  q: 'bitcoin',
  sources: 'bbc-news,the-verge',
   sources: 'bbc-news,the-verge',
   domains: 'bbc.co.uk, techcrunch.com',
  language: 'en'
}).then(response => {

 res.render('index.hbs',{

articles:response.articles

 });

});





});


app.listen(process.env.PORT || 3000);