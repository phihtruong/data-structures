class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.backOfQueue = 1;
  }

  enqueue(value) {
    this.storage[this.backOfQueue] = value;
    this.backOfQueue++;
  }

  dequeue() {
    var frontOfQueue = Object.keys(this.storage)[0];
    var dequeueValue = Object.values(this.storage)[0];
    delete this.storage[frontOfQueue];
    return dequeueValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
