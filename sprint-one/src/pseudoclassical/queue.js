var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._backOfQueue = 1;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._backOfQueue] = value;
  this._backOfQueue++;
};
Queue.prototype.dequeue = function() {
  var frontOfQueue = Object.keys(this._storage)[0];
  var dequeueValue = Object.values(this._storage)[0];
  delete this._storage[frontOfQueue];
  return dequeueValue;
};
Queue.prototype.size = function() {
  return Object.keys(this._storage).length;
};