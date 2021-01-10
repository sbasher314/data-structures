var Stack = function() {
  this.storage = {'size': 0};
};

Stack.prototype.size = function() {
  return this.storage.size;
};

Stack.prototype.push = function(value) {
  this.storage[this.storage.size++] = value;
};

Stack.prototype.pop = function() {
  var storage = this.storage;
  if (this.size() > 0) {
    var index = storage.size--;
    var value = storage[index - 1];
    delete storage[index - 1];
    return value;
  }
};