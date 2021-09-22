var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.currentStack = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.currentStack] = value;
    this.currentStack++;
  },
  pop: function() {
    var topOfStack = Object.keys(this.storage).length - 1;
    var popped = Object.values(this.storage)[topOfStack];
    delete this.storage[topOfStack];
    return popped;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


