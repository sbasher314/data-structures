var Queue = function() {
  var newQueue = {};
  newQueue.storage = {'head': 0, 'size': 0};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var storage = this.storage;
  storage[storage.head + storage.size] = value;
  storage.size++;
};

queueMethods.dequeue = function() {
  var storage = this.storage;
  if (storage.size > 0) {
    var value = storage[storage.head];
    delete storage[storage.head];
    storage.head++;
    storage.size--;
    return value;
  }
};

queueMethods.size = function() {
  return this.storage.size;
};
