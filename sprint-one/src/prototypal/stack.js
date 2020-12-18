var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {'size': 0};
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.storage.size;
};

stackMethods.push = function(value) {
  this.storage[this.storage.size++] = value;
};

stackMethods.pop = function() {
  var storage = this.storage;
  if (this.size() > 0) {
    var index = storage.size--;
    var value = storage[index - 1];
    delete storage[index - 1];
    return value;
  }
};