const path = require('path');
const express = require('express');
const axios = require('axios');
const hbs = require('hbs');
const geocode = require('./utils');

const app = express();
const key = 'b4efc8734924f6036a98206864c071f7';
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials'));

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'Ochieng' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});
app.get('/help', (req, res) => {
  res.render('help', { title: 'help' });
});
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.json({ message: 'You must provide an address' });
  }
  const location = req.query.address;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
  axios
    .get(url)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      const { message, name } = err;
      res.json({ message, name });
    });
});
app.get('/help/*', (req, res) => {
  res.render('404', { message: 'Help article not there' });
});
app.get('*', (req, res) => {
  res.render('404', { message: 'OOPS! 404 Page Not Found' });
});

app.listen(port, () => {
  console.log(`Running on port ${3000}`);
});
