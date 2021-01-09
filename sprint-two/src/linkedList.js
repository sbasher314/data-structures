var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.head.next = newNode;
    }
  };

  list.removeHead = function() {
    var refHead = list.head;
    delete list.head;
    list.head = refHead.next;
    return refHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
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
 * .addToTail: O(1) (constant)
 * .removeHead: O(1) (constant)
 * .contains: O(n) (linear)
 */
