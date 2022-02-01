const minimist = require('minimist');

const argv = minimist(process.argv.slice(2))._;

let str = argv.length ? argv[0] : 'random_word';

if (str[0] === str[0].toUpperCase()) {
  console.log('Already uppercase');
} else {
  str = capitalizeFirstLetter(str);
}

console.log('str :>> ', str);

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
