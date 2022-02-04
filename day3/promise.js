/**Using Promise create a function named 'sleep'
 * that should invoke a callback function after x seconds.
 * NOTE: sleep function should not block the call stack. */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sleep(ms, cb) {
  await delay(ms);
  return cb();
}

// function sleep(cb, ms) {
//   setTimeout(cb, ms);
// }

// sleep(() => {
//   console.log('Done sleeping');
// }, 6000);

// sleep(3000, () => console.log('Sleep timer complete'));

/**Write a function testNum that takes a number as an argument
 * and returns a Promise that tests if the value is less than
 * or higher than the value 10. */

const testNum = (num) =>
  new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10`);
    } else {
      reject(`${num} is less than 10`);
    }
  });

testNum(2)
  .then(function (value) {
    console.log('value :>> ', value);
  })
  .catch(function (error) {
    console.log('error :>> ', error);
  });

testNum(15)
  .then(function (value) {
    console.log('value :>> ', value);
  })
  .catch(function (error) {
    console.log('error :>> ', error);
  });

/**Write two functions that use Promises that you can chain! The first function,
 * makeAllCaps(), will take in an array of words and capitalize them,
 * and then the second function, sortWords(), will sort the words in alphabetical order.
 * If the Array contains anything but Strings, it should throw an error. */

let lang = ['python', 'php', 'javascript', 'ruby', 'java'];

const makeAllCaps = (arr) =>
  new Promise((resolve, reject) => {
    if (!arr.every((ele) => typeof ele === 'string')) {
      return reject(
        new Error(`${arr} is not an array of strings. Please try again.`),
      );
    }
    resolve(arr.map((ele) => ele.toUpperCase()));
  });

const sortWords = (arr) => {
  return arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
};

makeAllCaps(lang)
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/**
 *
 * Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds).
 * We need to modify it using promises to print sequentially 0 to 10. For example,
 * if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.
 */

function randomMs() {
  //   return 10;
  return Math.floor(Math.random() * 6) * 1000;
}
async function loopRunner() {
  for (let i = 0; i < 10; i++) {
    await sleep(randomMs(), () => console.log(i));
  }
}

// loopRunner();

/**
 * The following recursive code will cause a stack overflow if
 * the array "somelist" is too large. How can you fix this and still retain the recursive pattern?
 * var somelist = readVeryLongList();
 * var nextItem = function() {
 *      var item = somelist.pop();
 *      if (item) {
 *          // process the list item...
 *          nextItem();
 *      }
 * };
 */

var somelist = (readVeryLongList = () => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
});
var nextItem = function () {
  var item = somelist.pop();
  if (item) {
    // process the list item...
    setTimeout(nextItem, 0);
  }
};

/**Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds).
 * We need to modify it using promises to print sequentially 0 to 10. For example,
 * if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.
 * for(var i = 0; i < 10; i++) {
 *    setTimeout(function() {
 *      console.log(i);
 *    }, 10);
 * }
 * */

/**Due to hoisting in var setTimeout will use the global value of i i.e 10 at the time of function execution */

for (var i = 0; i < 10; i++) {
  const execute = (x) => {
    setTimeout(() => {
      console.log(x);
    }, 10);
  };
  execute(i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
