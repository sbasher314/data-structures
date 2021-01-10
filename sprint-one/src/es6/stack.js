class Stack {
  constructor() {
    this.storage = { 'size': 0 };
  }

  size() {
    return this.storage.size;
  }

  push(value) {
    this.storage[this.storage.size++] = value;
  }

  pop() {
    var storage = this.storage;
    if (this.size() > 0) {
      var index = storage.size--;
      var value = storage[index - 1];
      delete storage[index - 1];
      return value;
    }
  }
}



