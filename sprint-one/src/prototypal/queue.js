var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance._storage = {};
  someInstance._backOfQueue = 1;
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this._storage[this._backOfQueue] = value;
    this._backOfQueue++;
  },
  dequeue: function() {
    var frontOfQueue = Object.keys(this._storage)[0];
    var dequeueValue = Object.values(this._storage)[0];
    delete this._storage[frontOfQueue];
    return dequeueValue;
  },
  size: function() {
    return Object.keys(this._storage).length;
  }
};


