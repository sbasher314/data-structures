

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = new this.Node();
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes[node] !== undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var current in this.nodes) {
    if (this.hasEdge(current, node)) {
      this.removeEdge(current, node);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].edges[toNode] !== undefined);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var current in this.nodes) {
    cb(current);
  }
};

Graph.prototype.Node = function() {
  this.edges = {};
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addNode(): O(1)
 .contains(): O(1)
 .removeNode(): O(n)
 .hasEdge(): O(1)
 .addEdge(): O(1)
 .removeEdge(): O(1)
 .forEachNode(): O(n)
 */


