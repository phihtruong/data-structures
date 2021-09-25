var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currentStack = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[currentStack] = value;
    currentStack++;
  };

  someInstance.pop = function() {
    var topOfStack = Object.keys(storage).length - 1;
    var popped = Object.values(storage)[topOfStack];
    delete storage[topOfStack];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
