var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._currentStack = 0;
};

Stack.prototype.push = function(value) {
  this._storage[this._currentStack] = value;
  this._currentStack++;
};

Stack.prototype.pop = function() {
  var topOfStack = Object.keys(this._storage).length - 1;
  var popped = Object.values(this._storage)[topOfStack];
  delete this._storage[topOfStack];
  return popped;
};

Stack.prototype.size = function() {
  return Object.keys(this._storage).length;
};
