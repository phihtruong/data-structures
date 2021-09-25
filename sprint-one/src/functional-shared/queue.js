var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.backOfQueue = 1;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.backOfQueue] = value;
    this.backOfQueue++;
  },
  dequeue: function() {
    var frontOfQueue = Object.keys(this.storage)[0];
    var dequeueValue = Object.values(this.storage)[0];
    delete this.storage[frontOfQueue];
    return dequeueValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


