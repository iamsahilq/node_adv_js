const minimist = require('minimist');

const argv = minimist(process.argv.slice(2))._;

let num = argv.length ? argv[0] : 5;

if (require.main === module) {
  console.log(` ${num}! :>> `, factorial(num));
}

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : 1;
}
module.exports = factorial;
