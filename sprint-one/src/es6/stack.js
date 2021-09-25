class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.currentStack = 0;
  }

  push(value) {
    this.storage[this.currentStack] = value;
    this.currentStack++;
  }

  pop() {
    var topOfStack = Object.keys(this.storage).length - 1;
    var popped = Object.values(this.storage)[topOfStack];
    delete this.storage[topOfStack];
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}