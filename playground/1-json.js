const fs = require('fs');
// const book = {
//   title: 'Ego is the emnemy',
//   author: 'Brian Holyday',
// };
// const bookString = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookString);
let data = fs.readFileSync('1-json.json').toString();
data = JSON.parse(data);
console.log(data);
