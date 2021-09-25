
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.bucket = [];
  //console.log(this.bucket);
};
//Complexity: O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.bucket.push([k, v]);
  if (this.bucket[0][0] === k) {
    this.bucket[0][1] = v;
  }
  this._storage.set(index, this.bucket);
};

//Complexity: O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 1) {
    //console.log(this._storage.get(index));
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
  if (this._storage.get(index)[0]) {
    return this._storage.get(index)[0][1];
  }
};

//Complexity: O(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  delete this.bucket[0];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


