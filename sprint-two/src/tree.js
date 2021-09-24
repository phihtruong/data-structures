var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me
  //console.log(newTree);
  return newTree;
};

var treeMethods = {};

// Complexity:
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// Complexity:
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
