const lnk = ``;
setImmediate(() => {
  console.log('Two seconds has passed');
}, 2000);

const names = ['davis', 'ochieng', 'ogogri', 'jen', 'mike', 'aud'];
const shorName = names.filter((name) => name.length <= 4);
const geocode = (address, callback) => {
  setTimeout(() => {
    const data = { lat: 0, long: 0 };
    callback(data);
  }, 2000);
};
geocode('nairobi', (data) => {
  console.log(data);
});

const add = (x, y, callback) => {
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 2000);
};
add(2, 4, (sum) => {
  console.log(sum);
});
