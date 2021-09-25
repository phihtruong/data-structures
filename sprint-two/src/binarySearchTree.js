var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  _.extend(bst, bstMethods);
  return bst;
};

var bstMethods = {};
//Complexity: O(log n)
bstMethods.insert = function(value) {
  if (this.left === null || this.right === null) {
    if (this.left === null && value < this.value) {
      var leftVertex = BinarySearchTree(value);
      this.left = leftVertex;
      return;
    }
    if (this.right === null && value > this.value) {
      var rightVertex = BinarySearchTree(value);
      this.right = rightVertex;
      return;
    }
  }
  if (value < this.value) {
    this.left.insert(value);
  } else {
    this.right.insert(value);
  }
};

//Complexity: O(log n)
bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.right === null && this.left === null) {
    return false;
  }
  if (value < this.value) {
    return this.left.contains(value);
  } else {
    return this.right.contains(value);
  }
};
//Complexity: O(log n)
bstMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left === null && this.right === null) {
    return;
  }
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
