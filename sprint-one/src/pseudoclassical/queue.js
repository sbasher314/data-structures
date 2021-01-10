var Queue = function() {
  this.storage = {'tail': 0, 'size': 0};
};

Queue.prototype.size = function() {
  return this.storage.size;
};

Queue.prototype.enqueue = function(value) {
  var storage = this.storage;
  storage[storage.tail + storage.size++] = value;
};

Queue.prototype.dequeue = function() {
  var storage = this.storage;
  if (storage.size > 0) {
    var value = storage[storage.tail];
    delete storage[storage.tail++];
    storage.size--;
    return value;
  }
};