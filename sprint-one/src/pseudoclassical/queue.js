var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.backOfQueue = 1;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
};
Queue.prototype.dequeue = function() {
  var frontOfQueue = Object.keys(this.storage)[0];
  var dequeueValue = Object.values(this.storage)[0];
  delete this.storage[frontOfQueue];
  return dequeueValue;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};