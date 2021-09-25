var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var backOfQueue = 1;
  someInstance.enqueue = function(value) {
    storage[backOfQueue] = value;
    backOfQueue++;
  };

  someInstance.dequeue = function() {
    var frontOfQueue = Object.keys(storage)[0];
    var dequeueValue = Object.values(storage)[0];
    delete storage[frontOfQueue];
    return dequeueValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
