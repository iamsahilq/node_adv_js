// day_1/calculator

const prompt = require('prompt-sync')({ sigint: true });
function Calculator() {
  this.read = function () {
    this.a = +prompt('Value of a :> ', 0);
    this.b = +prompt('Value of b :> ', 0);
  };
  this.check = function () {
    if (isNaN(this.a) || isNaN(this.b)) {
      throw new Error(`Invalid value a: ${this.a}, b: ${this.b}`);
    }
  };
  this.sum = function () {
    this.check();
    return this.a + this.b;
  };

  this.mul = function () {
    this.check();
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum= ' + calculator.sum());
console.log('Mul= ' + calculator.mul());
