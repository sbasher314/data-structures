

var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype._resolveCollision = function(k, index, test) {
  for (var offset = 0; offset < this._limit; offset++) {
    let i = (offset + index) % this._limit;
    if (test === 'retrieve' &&
        this._isSet(i) &&
        this._keyEquals(i, k)) {
      return i;
    } else if (test === 'insert' &&
      !this._isSet(i)) {
      return i;
    }
  }
  return index;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var isNew = true;
  if (this._isSet(index) && !this._keyEquals(index, k)) {
    index = this._resolveCollision(k, index, 'insert');
  }
  if (this._isSet(index) && this._keyEquals(index, k)) {
    isNew = false;
  }
  this._storage.set(index, [k, v]);
  this._itemCount += isNew;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._isSet(index) && !this._keyEquals(index, k)) {
    index = this._resolveCollision(k, index, 'retrieve');
  }
  if (this._isSet(index)) {
    return this._storage.get(index)[1];
  } else {
    return undefined;
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._keyEquals(index, k)) {
    index = this._resolveCollision(k, index, 'retrieve');
  }
  this._storage.set(index, undefined);
  this._itemCount--;
};

HashTable.prototype.count = function() {
  return this._itemCount;
};

HashTable.prototype._isSet = function(index) {
  return this._storage.get(index) !== undefined;
};

HashTable.prototype._keyEquals = function(index, k) {
  return this._storage.get(index)[0] === k;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * .resolveCollision(): O(n)
 * .insert(): O(1) unless .resolveCollision() gets called (O(n))
 * .retrieve(): O(1) unless .resolveCollision() gets called (O(n))
 * .remove(): O(1) unless .resolveCollision() gets called (O(n))
 */


