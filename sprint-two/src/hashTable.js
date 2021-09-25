
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //create a bucket array > push the [k, v]
  var bucket = [];
  bucket.push([k, v]);
  //set this bucket as the v in the set method.
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);

  //return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //steven is the key and tyler is the value
  //console.log(this._storage);
  var bucket = this._storage.get(index);

  //console.log(Object.keys(this._storage.get(index)))
  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === k) {
  //     console.log(this._storage[i])
  //   }
  // }
  //goal: traverse through HashTable using the each method. Find k ('steven')...

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


