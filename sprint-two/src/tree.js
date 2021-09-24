var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};
// method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};
// method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    Tree(value);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
