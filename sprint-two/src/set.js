var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//An .add() method, takes any string and adds it to the set
// Complexity: O(1)
setPrototype.add = function(item) {
  this._storage.push(item);
};
// Complexity: O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};
// Complexity: O(n)
setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
