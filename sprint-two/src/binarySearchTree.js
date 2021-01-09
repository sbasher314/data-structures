var BinarySearchTree = function(value) {
  var tree = Object.create(methods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var methods = {};

methods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

methods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  }
  if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;
};

methods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .insert(): O(log n), at worst O(n)
 .contains(): O(log n), at worst O(n)
 .depthFirstLog: O(log n), at worst O(n)
 */
