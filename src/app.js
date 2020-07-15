const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get('', (req, res) => {
  res.render('index', { title: 'Index Page', name: 'Ochieng' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});
app.get('/help', (req, res) => {
  res.render('help', { title: 'help' });
});
app.get('/weather', (req, res) => {
  res.send({
    data: {
      temp: 20,
    },
  });
});
app.listen(3000, () => {
  console.log('Running on port 3000');
});
