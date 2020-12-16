var Stack = function() {
  var newStack = {};
  newStack.storage = {'size': 0};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.storage.size;
};

stackMethods.push = function(value) {
  var i = this.storage.size++;
  this.storage[i] = value;
};

stackMethods.pop = function() {
  if (this.size() > 0) {
    var index = this.storage.size -= 1;
    var value = this.storage[index];
    delete this.storage[index];
    return value;
  }
};