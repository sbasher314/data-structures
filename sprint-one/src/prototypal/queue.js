var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {'head': 0, 'size': 0};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.storage.size;
};

queueMethods.enqueue = function(value) {
  var storage = this.storage;
  storage[storage.head + storage.size++] = value;
};

queueMethods.dequeue = function() {
  var storage = this.storage;
  if (storage.size > 0) {
    var value = storage[storage.head];
    delete storage[storage.head++];
    storage.size--;
    return value;
  }
};