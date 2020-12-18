var Queue = function() {
  this.storage = {'head': 0, 'size': 0};
};

Queue.prototype.size = function() {
  return this.storage.size;
};

Queue.prototype.enqueue = function(value) {
  var storage = this.storage;
  storage[storage.head + storage.size++] = value;
};

Queue.prototype.dequeue = function() {
  var storage = this.storage;
  if (storage.size > 0) {
    var value = storage[storage.head];
    delete storage[storage.head++];
    storage.size--;
    return value;
  }
};