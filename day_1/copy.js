function deepClone(source) {
  var newObj, prop, type;

  if (typeof source != 'object' || source === null) {
    // What do to with functions, throw an error?
    newObj = source;
    return newObj;
  }
  newObj = new source.constructor();
  for (prop in source) {
    if (source.hasOwnProperty(prop)) {
      type = typeof source[prop];

      if (type == 'object' && source[prop] !== null) {
        newObj[prop] = deepClone(source[prop]);
      } else {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}

const a = {
  level: 1,
  next: {
    level: 2,
    next: { level: 3, next: { level: 4 } },
  },
};

const c = a;
const b = deepClone(a);

a.level = 'diff value';
a.next.next.level = 'enough';

console.log('a :>> ', a);
console.log('c :>> ', c);
console.log('b :>> ', b);

console.log('a==c:>> ', a == c);

console.log('a==b :>> ', a == b);
