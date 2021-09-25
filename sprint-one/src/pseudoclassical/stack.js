var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentStack = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.currentStack] = value;
  this.currentStack++;
};

Stack.prototype.pop = function() {
  var topOfStack = Object.keys(this.storage).length - 1;
  var popped = Object.values(this.storage)[topOfStack];
  delete this.storage[topOfStack];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
