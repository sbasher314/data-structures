var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {'tail': 0, 'size': 0};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.storage.size;
};

queueMethods.enqueue = function(value) {
  var storage = this.storage;
  storage[storage.tail + storage.size++] = value;
};

queueMethods.dequeue = function() {
  var storage = this.storage;
  if (storage.size > 0) {
    var value = storage[storage.tail];
    delete storage[storage.tail++];
    storage.size--;
    return value;
  }
};