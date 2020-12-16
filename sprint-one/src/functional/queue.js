var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.beginning = 0;
  storage.size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.beginning + storage.size] = value;
    storage.size++;
  };

  someInstance.dequeue = function() {
    if (storage.size > 0) {
      var value = storage[storage.beginning];
      delete storage[storage.beginning];
      storage.beginning++;
      storage.size--;
      return value;
    }
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
