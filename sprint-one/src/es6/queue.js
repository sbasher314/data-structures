class Queue {
  constructor() {
    this.storage = { 'head': 0, 'size': 0 };
  }

  size() {
    return this.storage.size;
  }

  enqueue(value) {
    var storage = this.storage;
    storage[storage.head + storage.size++] = value;
  }

  dequeue() {
    var storage = this.storage;
    if (storage.size > 0) {
      var value = storage[storage.head];
      delete storage[storage.head++];
      storage.size--;
      return value;
    }
  }
}




