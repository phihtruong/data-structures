var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //.addToTail() method, takes a value and adds it to the end of the list
  //Complexity Time: O(1) - Constant
  list.addToTail = function(value) {
    var newTail = Node(value);
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
    if (list.head === null) {
      list.head = list.tail;
    }
  };
  //.removeHead() method, removes the first node from the list and returns its value
  //Complexity Time: O(1) - Constant
  list.removeHead = function() {
    var head = list.head.value;
    var nextHead = list.head.next;
    delete list.head;
    list.head = nextHead;
    return head;
  };

  //.contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
  //Complexity Time: O(n) - Linear
  list.contains = function(target) {
    var nodeValueList = [];
    var head = list.head;
    while (head !== null) {
      nodeValueList.push(head.value);
      head = head.next;
    }
    if (nodeValueList.includes(target)) {
      return true;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
