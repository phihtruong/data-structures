

// Instantiate a new graph
var Graph = function() {
  //console.log(Graph.addNode)
  this.edgeList = {};
  this.nodes = [];
  this.edgeCounter = 0;
};

// Add a node to the graph, passing in the node's value.
//An .addNode() method that takes a new node and adds it to the graph
// Complexity: O(1)
Graph.prototype.addNode = function(node) {
  //console.log(this)
  this.nodes.push(node);
  //return this['node'] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Complexity: O(n)
Graph.prototype.contains = function(node) {
  //return this.node === node;
  return this.nodes.includes(node);
};

// Removes a node from the graph.
// Complexity: O(n)
Graph.prototype.removeNode = function(node) {
  for (var key in this.edgeList) {
    if (this.edgeList[key].includes(node)) {
      delete this.edgeList[key];
    }
  }
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      delete this.nodes[i];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Complexity: O(n)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //check if the value pair of storage is [fromNode, toNode]
  for (var key in this.edgeList) {
    if (this.edgeList[key].includes(fromNode) && this.edgeList[key].includes(toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
//An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
// Complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeList[this.edgeCounter] = [fromNode, toNode];
  this.edgeCounter++;
};

// Remove an edge between any two specified (by value) nodes.
//A .removeEdge() method that removes the connection between two nodes
// Complexity: O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var key in this.edgeList) {
    if (!this.edgeList[key].includes(fromNode) || !this.edgeList[key].includes(toNode)) {
      delete this.edgeList[key];
    }
    if (this.edgeList[key].includes(fromNode) && this.edgeList[key].includes(toNode)) {
      delete this.edgeList[key];
    }
  }
  this.edgeCounter--;
};

// Pass in a callback which will be executed on each node of the graph.
//A .forEachNode() method that traverses through the graph, calling a passed in function once on each node
// Complexity: O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


