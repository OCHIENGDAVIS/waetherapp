const axios = require('axios');
const key = 'b4efc8734924f6036a98206864c071f7';
const link =
  'http://api.openweathermap.org/data/2.5/weather?q=kisumu&appid=b4efc8734924f6036a98206864c071f7';
const location = process.argv[2];
if (!location) {
  console.log('Please Provide a location');
  return;
}
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

const geocode = (address, callback) => {
  axios
    .get(address)
    .then((res) => {
      const { name, main: temp, sys } = res.data;
      const tempData = {
        city: name,
        temp: temp,
        country: sys.country,
      };
      console.log(callback(tempData));
    })
    .catch((err) => {
      callback(err);
    });
};
module.exports = geocode;
