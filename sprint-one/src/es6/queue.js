class Queue {
  constructor() {
    this.storage = { 'tail': 0, 'size': 0 };
  }

  size() {
    return this.storage.size;
  }

  enqueue(value) {
    var storage = this.storage;
    storage[storage.tail + storage.size++] = value;
  }

  dequeue() {
    var storage = this.storage;
    if (storage.size > 0) {
      var value = storage[storage.tail];
      delete storage[storage.tail++];
      storage.size--;
      return value;
    }
  }
}




