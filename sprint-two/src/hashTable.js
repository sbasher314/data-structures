

var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.resolveCollision = function(k, index, test) {
  for (var offset = 0; offset < this._limit; offset++) {
    let i = (offset + index) % this._limit;
    if (test === 'retrieve' &&
        this._storage.get(i) !== undefined &&
        this._storage.get(i)[0] === k) {
      return i;
    } else if (test === 'insert' &&
        this._storage.get(i) === undefined) {
      return i;
    }
  }
  return index;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var isNew = true;
  if (this._storage.get(index) !== undefined && this._storage.get(index)[0] !== k) {
    index = this.resolveCollision(k, index, 'insert');
  }
  this._storage.set(index, [k, v]);
  this._itemCount++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined && this._storage.get(index)[0] !== k) {
    index = this.resolveCollision(k, index, 'retrieve');
  }
  if (this._storage.get(index) !== undefined) {
    return this._storage.get(index)[1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)[0] !== k) {
    index = this.resolveCollision(k, index, 'retrieve');
  }
  this._storage.set(index, undefined);
  this._itemCount--;
};

HashTable.prototype.count = function() {
  return this._itemCount;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * .resolveCollision(): O(n)
 * .insert(): O(1) unless .resolveCollision() gets called (O(n))
 * .retrieve(): O(1) unless .resolveCollision() gets called (O(n))
 * .remove(): O(1) unless .resolveCollision() gets called (O(n))
 */


