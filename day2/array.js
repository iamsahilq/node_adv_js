class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getElementAtIndex(index) {
    return this.data[index];
  }
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  forEach(callback) {
    const length = this.length;

    for (let index = 0; index < length; index += 1) {
      const value = this.data[index];
      callback(value, index, this.data);
    }
  }

  map(callback) {
    const result = new MyArray();
    const length = this.length;

    for (let index = 0; index < length; index += 1) {
      const value = this.data[index];
      const newVal = callback(value, index, this.data);
      result.push(newVal);
    }

    return result;
  }
}

const arr = new MyArray();

arr.push('asdsad');

const n = arr.map((e) => 1);

console.log('arr :>> ', arr);
console.log('n :>> ', n);
