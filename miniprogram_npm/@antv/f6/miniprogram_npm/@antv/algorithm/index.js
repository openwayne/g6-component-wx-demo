module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1623251339996, function(require, module, exports) {


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAdjMatrix", {
  enumerable: true,
  get: function get() {
    return _adjacentMatrix.default;
  }
});
Object.defineProperty(exports, "breadthFirstSearch", {
  enumerable: true,
  get: function get() {
    return _bfs.default;
  }
});
Object.defineProperty(exports, "connectedComponent", {
  enumerable: true,
  get: function get() {
    return _connectedComponent.default;
  }
});
Object.defineProperty(exports, "getDegree", {
  enumerable: true,
  get: function get() {
    return _degree.default;
  }
});
Object.defineProperty(exports, "getInDegree", {
  enumerable: true,
  get: function get() {
    return _degree.getInDegree;
  }
});
Object.defineProperty(exports, "getOutDegree", {
  enumerable: true,
  get: function get() {
    return _degree.getOutDegree;
  }
});
Object.defineProperty(exports, "detectCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.default;
  }
});
Object.defineProperty(exports, "detectAllCycles", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllCycles;
  }
});
Object.defineProperty(exports, "detectAllDirectedCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllDirectedCycle;
  }
});
Object.defineProperty(exports, "detectAllUndirectedCycle", {
  enumerable: true,
  get: function get() {
    return _detectCycle.detectAllUndirectedCycle;
  }
});
Object.defineProperty(exports, "depthFirstSearch", {
  enumerable: true,
  get: function get() {
    return _dfs.default;
  }
});
Object.defineProperty(exports, "dijkstra", {
  enumerable: true,
  get: function get() {
    return _dijkstra.default;
  }
});
Object.defineProperty(exports, "findAllPath", {
  enumerable: true,
  get: function get() {
    return _findPath.findAllPath;
  }
});
Object.defineProperty(exports, "findShortestPath", {
  enumerable: true,
  get: function get() {
    return _findPath.findShortestPath;
  }
});
Object.defineProperty(exports, "floydWarshall", {
  enumerable: true,
  get: function get() {
    return _floydWarshall.default;
  }
});
Object.defineProperty(exports, "labelPropagation", {
  enumerable: true,
  get: function get() {
    return _labelPropagation.default;
  }
});
Object.defineProperty(exports, "louvain", {
  enumerable: true,
  get: function get() {
    return _louvain.default;
  }
});
Object.defineProperty(exports, "minimumSpanningTree", {
  enumerable: true,
  get: function get() {
    return _mts.default;
  }
});
Object.defineProperty(exports, "pageRank", {
  enumerable: true,
  get: function get() {
    return _pageRank.default;
  }
});
Object.defineProperty(exports, "GADDI", {
  enumerable: true,
  get: function get() {
    return _gaddi.default;
  }
});
Object.defineProperty(exports, "Stack", {
  enumerable: true,
  get: function get() {
    return _stack.default;
  }
});
Object.defineProperty(exports, "getNeighbors", {
  enumerable: true,
  get: function get() {
    return _util.getNeighbors;
  }
});
exports.default = exports.detectDirectedCycle = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

var _bfs = _interopRequireDefault(require("./bfs"));

var _connectedComponent = _interopRequireDefault(require("./connected-component"));

var _degree = _interopRequireWildcard(require("./degree"));

var _detectCycle = _interopRequireWildcard(require("./detect-cycle"));

var _dfs = _interopRequireDefault(require("./dfs"));

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _findPath = require("./find-path");

var _floydWarshall = _interopRequireDefault(require("./floydWarshall"));

var _labelPropagation = _interopRequireDefault(require("./label-propagation"));

var _louvain = _interopRequireDefault(require("./louvain"));

var _mts = _interopRequireDefault(require("./mts"));

var _pageRank = _interopRequireDefault(require("./pageRank"));

var _gaddi = _interopRequireDefault(require("./gaddi"));

var _stack = _interopRequireDefault(require("./structs/stack"));

var _util = require("./util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectDirectedCycle = _detectCycle.default;
exports.detectDirectedCycle = detectDirectedCycle;
var _default = {
  getAdjMatrix: _adjacentMatrix.default,
  breadthFirstSearch: _bfs.default,
  connectedComponent: _connectedComponent.default,
  getDegree: _degree.default,
  getInDegree: _degree.getInDegree,
  getOutDegree: _degree.getOutDegree,
  detectCycle: _detectCycle.default,
  detectDirectedCycle: detectDirectedCycle,
  detectAllCycles: _detectCycle.detectAllCycles,
  detectAllDirectedCycle: _detectCycle.detectAllDirectedCycle,
  detectAllUndirectedCycle: _detectCycle.detectAllUndirectedCycle,
  depthFirstSearch: _dfs.default,
  dijkstra: _dijkstra.default,
  findAllPath: _findPath.findAllPath,
  findShortestPath: _findPath.findShortestPath,
  floydWarshall: _floydWarshall.default,
  labelPropagation: _labelPropagation.default,
  louvain: _louvain.default,
  minimumSpanningTree: _mts.default,
  pageRank: _pageRank.default,
  getNeighbors: _util.getNeighbors,
  Stack: _stack.default,
  GADDI: _gaddi.default
};
exports.default = _default;
}, function(modId) {var map = {"./adjacent-matrix":1623251339997,"./bfs":1623251339998,"./connected-component":1623251340002,"./degree":1623251340003,"./detect-cycle":1623251340004,"./dfs":1623251340005,"./dijkstra":1623251340006,"./find-path":1623251340007,"./floydWarshall":1623251340008,"./label-propagation":1623251340009,"./louvain":1623251340010,"./mts":1623251340011,"./pageRank":1623251340014,"./gaddi":1623251340015,"./structs/stack":1623251340018,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251339997, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var adjMatrix = function adjMatrix(graphData, directed) {
  var nodes = graphData.nodes,
      edges = graphData.edges;
  var matrix = []; // map node with index in data.nodes

  var nodeMap = {};

  if (!nodes) {
    throw new Error("invalid nodes data!");
  }

  if (nodes) {
    nodes.forEach(function (node, i) {
      nodeMap[node.id] = i;
      var row = [];
      matrix.push(row);
    });
  }

  if (edges) {
    edges.forEach(function (edge) {
      var source = edge.source,
          target = edge.target;
      var sIndex = nodeMap[source];
      var tIndex = nodeMap[target];
      if (!sIndex && sIndex !== 0 || !tIndex && tIndex !== 0) return;
      matrix[sIndex][tIndex] = 1;

      if (!directed) {
        matrix[tIndex][sIndex] = 1;
      }
    });
  }

  return matrix;
};

var _default = adjMatrix;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251339998, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queue = _interopRequireDefault(require("./structs/queue"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param callbacks
 * allowTraversal: 确定 BFS 是否从顶点沿着边遍历到其邻居，默认情况下，同一个节点只能遍历一次
 * enterNode: 当 BFS 访问某个节点时调用
 * leaveNode: 当 BFS 访问访问结束某个节点时调用
 */
function initCallbacks(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};

  var allowTraversalCallback = function () {
    var seen = {};
    return function (_a) {
      var next = _a.next;
      var id = next;

      if (!seen[id]) {
        seen[id] = true;
        return true;
      }

      return false;
    };
  }();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enter = callbacks.enter || stubCallback;
  initiatedCallback.leave = callbacks.leave || stubCallback;
  return initiatedCallback;
}
/**
 * 广度优先遍历图
 * @param graph Graph 图实例
 * @param startNode 开始遍历的节点
 * @param originalCallbacks 回调
 */


var breadthFirstSearch = function breadthFirstSearch(graphData, startNodeId, originalCallbacks) {
  var callbacks = initCallbacks(originalCallbacks);
  var nodeQueue = new _queue.default();
  var _a = graphData.edges,
      edges = _a === void 0 ? [] : _a; // 初始化队列元素

  nodeQueue.enqueue(startNodeId);
  var previousNode = '';

  var _loop_1 = function _loop_1() {
    var currentNode = nodeQueue.dequeue();
    callbacks.enter({
      current: currentNode,
      previous: previousNode
    }); // 将所有邻居添加到队列中以便遍历

    (0, _util.getNeighbors)(currentNode, edges, 'target').forEach(function (nextNode) {
      if (callbacks.allowTraversal({
        previous: previousNode,
        current: currentNode,
        next: nextNode
      })) {
        nodeQueue.enqueue(nextNode);
      }
    });
    callbacks.leave({
      current: currentNode,
      previous: previousNode
    }); // 下一次循环之前存储当前顶点

    previousNode = currentNode;
  }; // 遍历队列中的所有顶点


  while (!nodeQueue.isEmpty()) {
    _loop_1();
  }
};

var _default = breadthFirstSearch;
exports.default = _default;
}, function(modId) { var map = {"./structs/queue":1623251339999,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251339999, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _linkedList = _interopRequireDefault(require("./linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Queue =
/** @class */
function () {
  function Queue() {
    this.linkedList = new _linkedList.default();
  }
  /**
   * 队列是否为空
   */


  Queue.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * 读取队列头部的元素， 不删除队列中的元素
   */


  Queue.prototype.peek = function () {
    if (!this.linkedList.head) {
      return null;
    }

    return this.linkedList.head.value;
  };
  /**
   * 在队列的尾部新增一个元素
   * @param value
   */


  Queue.prototype.enqueue = function (value) {
    this.linkedList.append(value);
  };
  /**
   * 删除队列中的头部元素，如果队列为空，则返回 null
   */


  Queue.prototype.dequeue = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };

  Queue.prototype.toString = function (callback) {
    return this.linkedList.toString(callback);
  };

  return Queue;
}();

var _default = Queue;
exports.default = _default;
}, function(modId) { var map = {"./linked-list":1623251340000}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340000, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkedListNode = void 0;

var defaultComparator = function defaultComparator(a, b) {
  if (a === b) {
    return true;
  }

  return false;
};
/**
 * 链表中单个元素节点
 */


var LinkedListNode =
/** @class */
function () {
  function LinkedListNode(value, next) {
    if (next === void 0) {
      next = null;
    }

    this.value = value;
    this.next = next;
  }

  LinkedListNode.prototype.toString = function (callback) {
    return callback ? callback(this.value) : "" + this.value;
  };

  return LinkedListNode;
}();

exports.LinkedListNode = LinkedListNode;

var LinkedList =
/** @class */
function () {
  function LinkedList(comparator) {
    if (comparator === void 0) {
      comparator = defaultComparator;
    }

    this.head = null;
    this.tail = null;
    this.compare = comparator;
  }
  /**
   * 将指定元素添加到链表头部
   * @param value
   */


  LinkedList.prototype.prepend = function (value) {
    // 在头部添加一个节点
    var newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  };
  /**
   * 将指定元素添加到链表中
   * @param value
   */


  LinkedList.prototype.append = function (value) {
    var newNode = new LinkedListNode(value); // 如果不存在头节点，则将创建的新节点作为头节点

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } // 将新节点附加到链表末尾


    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  };
  /**
   * 删除指定元素
   * @param value 要删除的元素
   */


  LinkedList.prototype.delete = function (value) {
    if (!this.head) {
      return null;
    }

    var deleteNode = null; // 如果删除的是头部元素，则将next作为头元素

    while (this.head && this.compare(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    var currentNode = this.head;

    if (currentNode !== null) {
      // 如果删除了节点以后，将next节点前移
      while (currentNode.next) {
        if (this.compare(currentNode.next.value, value)) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    } // 检查尾部节点是否被删除


    if (this.compare(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deleteNode;
  };
  /**
   * 查找指定的元素
   * @param param0
   */


  LinkedList.prototype.find = function (_a) {
    var _b = _a.value,
        value = _b === void 0 ? undefined : _b,
        _c = _a.callback,
        callback = _c === void 0 ? undefined : _c;

    if (!this.head) {
      return null;
    }

    var currentNode = this.head;

    while (currentNode) {
      // 如果指定了 callback，则按指定的 callback 查找
      if (callback && callback(currentNode.value)) {
        return currentNode;
      } // 如果指定了 value，则按 value 查找


      if (value !== undefined && this.compare(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  };
  /**
   * 删除尾部节点
   */


  LinkedList.prototype.deleteTail = function () {
    var deletedTail = this.tail;

    if (this.head === this.tail) {
      // 链表中只有一个元素
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    var currentNode = this.head;

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  };
  /**
   * 删除头部节点
   */


  LinkedList.prototype.deleteHead = function () {
    if (!this.head) {
      return null;
    }

    var deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  };
  /**
   * 将一组元素转成链表中的节点
   * @param values 链表中的元素
   */


  LinkedList.prototype.fromArray = function (values) {
    var _this = this;

    values.forEach(function (value) {
      return _this.append(value);
    });
    return this;
  };
  /**
   * 将链表中的节点转成数组元素
   */


  LinkedList.prototype.toArray = function () {
    var nodes = [];
    var currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  };
  /**
   * 反转链表中的元素节点
   */


  LinkedList.prototype.reverse = function () {
    var currentNode = this.head;
    var prevNode = null;
    var nextNode = null;

    while (currentNode) {
      // 存储下一个元素节点
      nextNode = currentNode.next; // 更改当前节点的下一个节点，以便将它连接到上一个节点上

      currentNode.next = prevNode; // 将 prevNode 和 currentNode 向前移动一步

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  };

  LinkedList.prototype.toString = function (callback) {
    if (callback === void 0) {
      callback = undefined;
    }

    return this.toArray().map(function (node) {
      return node.toString(callback);
    }).toString();
  };

  return LinkedList;
}();

var _default = LinkedList;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340001, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = exports.getEdgesByNodeId = exports.getOutEdgesNodeId = exports.getNeighbors = void 0;

/**
 * 获取指定节点的所有邻居
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 * @param type 邻居类型
 */
var getNeighbors = function getNeighbors(nodeId, edges, type) {
  if (edges === void 0) {
    edges = [];
  }

  var currentEdges = edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });

  if (type === 'target') {
    // 当前节点为 source，它所指向的目标节点
    var neighhborsConverter_1 = function neighhborsConverter_1(edge) {
      return edge.source === nodeId;
    };

    return currentEdges.filter(neighhborsConverter_1).map(function (edge) {
      return edge.target;
    });
  }

  if (type === 'source') {
    // 当前节点为 target，它所指向的源节点
    var neighhborsConverter_2 = function neighhborsConverter_2(edge) {
      return edge.target === nodeId;
    };

    return currentEdges.filter(neighhborsConverter_2).map(function (edge) {
      return edge.source;
    });
  } // 若未指定 type ，则返回所有邻居


  var neighhborsConverter = function neighhborsConverter(edge) {
    return edge.source === nodeId ? edge.target : edge.source;
  };

  return currentEdges.map(neighhborsConverter);
};
/**
 * 获取指定节点的出边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */


exports.getNeighbors = getNeighbors;

var getOutEdgesNodeId = function getOutEdgesNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId;
  });
};
/**
 * 获取指定节点的边，包括出边和入边
 * @param nodeId 节点 ID
 * @param edges 图中的所有边数据
 */


exports.getOutEdgesNodeId = getOutEdgesNodeId;

var getEdgesByNodeId = function getEdgesByNodeId(nodeId, edges) {
  return edges.filter(function (edge) {
    return edge.source === nodeId || edge.target === nodeId;
  });
};
/**
 * 生成唯一的 ID，规则是序号 + 时间戳
 * @param index 序号
 */


exports.getEdgesByNodeId = getEdgesByNodeId;

var uniqueId = function uniqueId(index) {
  if (index === void 0) {
    index = 0;
  }

  var random1 = ("" + Math.random()).split('.')[1].substr(0, 5);
  var random2 = ("" + Math.random()).split('.')[1].substr(0, 5);
  return index + "-" + random1 + random2;
};

exports.uniqueId = uniqueId;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340002, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getConnectedComponents;
exports.detectStrongConnectComponents = exports.detectConnectedComponents = void 0;

var _util = require("./util");

/**
 * Generate all connected components for an undirected graph
 * @param graph
 */
var detectConnectedComponents = function detectConnectedComponents(graphData) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var allComponents = [];
  var visited = {};
  var nodeStack = [];

  var getComponent = function getComponent(node) {
    nodeStack.push(node);
    visited[node.id] = true;
    var neighbors = (0, _util.getNeighbors)(node.id, edges);

    var _loop_1 = function _loop_1(i) {
      var neighbor = neighbors[i];

      if (!visited[neighbor]) {
        var targetNode = nodes.filter(function (node) {
          return node.id === neighbor;
        });

        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        }
      }
    };

    for (var i = 0; i < neighbors.length; ++i) {
      _loop_1(i);
    }
  };

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if (!visited[node.id]) {
      // 对于无向图进行dfs遍历，每一次调用后都得到一个连通分量
      getComponent(node);
      var component = [];

      while (nodeStack.length > 0) {
        component.push(nodeStack.pop());
      }

      allComponents.push(component);
    }
  }

  return allComponents;
};
/**
 * Tarjan's Algorithm 复杂度  O(|V|+|E|)
 * For directed graph only
 * a directed graph is said to be strongly connected if "every vertex is reachable from every other vertex".
 * refer: http://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 * @param graph
 * @return a list of strongly connected components
 */


exports.detectConnectedComponents = detectConnectedComponents;

var detectStrongConnectComponents = function detectStrongConnectComponents(graphData) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodeStack = [];
  var inStack = {}; // 辅助判断是否已经在stack中，减少查找开销

  var indices = {};
  var lowLink = {};
  var allComponents = [];
  var index = 0;

  var getComponent = function getComponent(node) {
    // Set the depth index for v to the smallest unused index
    indices[node.id] = index;
    lowLink[node.id] = index;
    index += 1;
    nodeStack.push(node);
    inStack[node.id] = true; // 考虑每个邻接点

    var neighbors = (0, _util.getNeighbors)(node.id, edges, 'target').filter(function (n) {
      return nodes.map(function (node) {
        return node.id;
      }).indexOf(n) > -1;
    });

    var _loop_2 = function _loop_2(i) {
      var targetNodeID = neighbors[i];

      if (!indices[targetNodeID] && indices[targetNodeID] !== 0) {
        var targetNode = nodes.filter(function (node) {
          return node.id === targetNodeID;
        });

        if (targetNode.length > 0) {
          getComponent(targetNode[0]);
        } // tree edge


        lowLink[node.id] = Math.min(lowLink[node.id], lowLink[targetNodeID]);
      } else if (inStack[targetNodeID]) {
        // back edge, target node is in the current SCC
        lowLink[node.id] = Math.min(lowLink[node.id], indices[targetNodeID]);
      }
    };

    for (var i = 0; i < neighbors.length; i++) {
      _loop_2(i);
    } // If node is a root node, generate an SCC


    if (lowLink[node.id] === indices[node.id]) {
      var component = [];

      while (nodeStack.length > 0) {
        var tmpNode = nodeStack.pop();
        inStack[tmpNode.id] = false;
        component.push(tmpNode);
        if (tmpNode === node) break;
      }

      if (component.length > 0) {
        allComponents.push(component);
      }
    }
  };

  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var node = nodes_1[_i];

    if (!indices[node.id] && indices[node.id] !== 0) {
      getComponent(node);
    }
  }

  return allComponents;
};

exports.detectStrongConnectComponents = detectStrongConnectComponents;

function getConnectedComponents(graphData, directed) {
  if (directed) return detectStrongConnectComponents(graphData);
  return detectConnectedComponents(graphData);
}
}, function(modId) { var map = {"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340003, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOutDegree = exports.getInDegree = exports.default = void 0;

var degree = function degree(graphData) {
  var degrees = {};
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  nodes.forEach(function (node) {
    degrees[node.id] = {
      degree: 0,
      inDegree: 0,
      outDegree: 0
    };
  });
  edges.forEach(function (edge) {
    degrees[edge.source].degree++;
    degrees[edge.source].outDegree++;
    degrees[edge.target].degree++;
    degrees[edge.target].inDegree++;
  });
  return degrees;
};

var _default = degree;
/**
 * 获取指定节点的入度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */

exports.default = _default;

var getInDegree = function getInDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);

  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].inDegree;
  }

  return 0;
};
/**
 * 获取指定节点的出度
 * @param graphData 图数据
 * @param nodeId 节点ID
 */


exports.getInDegree = getInDegree;

var getOutDegree = function getOutDegree(graphData, nodeId) {
  var nodeDegree = degree(graphData);

  if (nodeDegree[nodeId]) {
    return degree(graphData)[nodeId].outDegree;
  }

  return 0;
};

exports.getOutDegree = getOutDegree;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340004, function(require, module, exports) {


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.detectAllCycles = exports.detectAllDirectedCycle = exports.detectAllUndirectedCycle = void 0;

var _dfs = _interopRequireDefault(require("./dfs"));

var _connectedComponent = _interopRequireWildcard(require("./connected-component"));

var _util = require("./util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detectDirectedCycle = function detectDirectedCycle(graphData) {
  var cycle = null;
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a;
  var dfsParentMap = {}; // 所有没有被访问的节点集合

  var unvisitedSet = {}; // 正在被访问的节点集合

  var visitingSet = {}; // 所有已经被访问过的节点集合

  var visitedSet = {}; // 初始化 unvisitedSet

  nodes.forEach(function (node) {
    unvisitedSet[node.id] = node;
  });
  var callbacks = {
    enter: function enter(_a) {
      var currentNode = _a.current,
          previousNode = _a.previous;

      if (visitingSet[currentNode]) {
        // 如果当前节点正在访问中，则说明检测到环路了
        cycle = {};
        var currentCycleNode = currentNode;
        var previousCycleNode = previousNode;

        while (previousCycleNode !== currentNode) {
          cycle[currentCycleNode] = previousCycleNode;
          currentCycleNode = previousCycleNode;
          previousCycleNode = dfsParentMap[previousCycleNode];
        }

        cycle[currentCycleNode] = previousCycleNode;
      } else {
        // 如果不存在正在访问集合中，则将其放入正在访问集合，并从未访问集合中删除
        visitingSet[currentNode] = currentNode;
        delete unvisitedSet[currentNode]; // 更新 DSF parents 列表

        dfsParentMap[currentNode] = previousNode;
      }
    },
    leave: function leave(_a) {
      var currentNode = _a.current; // 如果所有的节点的子节点都已经访问过了，则从正在访问集合中删除掉，并将其移入到已访问集合中，
      // 同时也意味着当前节点的所有邻居节点都被访问过了

      visitedSet[currentNode] = currentNode;
      delete visitingSet[currentNode];
    },
    allowTraversal: function allowTraversal(_a) {
      var nextNode = _a.next; // 如果检测到环路则需要终止所有进一步的遍历，否则会导致无限循环遍历

      if (cycle) {
        return false;
      } // 仅允许遍历没有访问的节点，visitedSet 中的都已经访问过了


      return !visitedSet[nextNode];
    }
  }; // 开始遍历节点

  while (Object.keys(unvisitedSet).length) {
    // 从第一个节点开始进行 DFS 遍历
    var firsetUnVisitedKey = Object.keys(unvisitedSet)[0];
    (0, _dfs.default)(graphData, firsetUnVisitedKey, callbacks);
  }

  return cycle;
};
/**
 * 检测无向图中的所有Base cycles
 * refer: https://www.codeproject.com/Articles/1158232/Enumerating-All-Cycles-in-an-Undirected-Graph
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回一组base cycles
 */


var detectAllUndirectedCycle = function detectAllUndirectedCycle(graphData, nodeIds, include) {
  var _a, _b;

  if (include === void 0) {
    include = true;
  }

  var allCycles = [];
  var components = (0, _connectedComponent.default)(graphData, false); // loop through all connected components

  for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
    var component = components_1[_i];
    if (!component.length) continue;
    var root = component[0];
    var rootId = root.id;
    var stack = [root];
    var parent_1 = (_a = {}, _a[rootId] = root, _a);
    var used = (_b = {}, _b[rootId] = new Set(), _b); // walk a spanning tree to find cycles

    while (stack.length > 0) {
      var curNode = stack.pop();
      var curNodeId = curNode.id;
      var neighbors = (0, _util.getNeighbors)(curNodeId, graphData.edges);

      var _loop_1 = function _loop_1(i) {
        var _c;

        var neighborId = neighbors[i];
        var neighbor = graphData.nodes.find(function (node) {
          return node.id === neighborId;
        }); // const neighborId = neighbor.get('id');

        if (neighborId === curNodeId) {
          // 自环
          allCycles.push((_c = {}, _c[neighborId] = curNode, _c));
        } else if (!(neighborId in used)) {
          // visit a new node
          parent_1[neighborId] = curNode;
          stack.push(neighbor);
          used[neighborId] = new Set([curNode]);
        } else if (!used[curNodeId].has(neighbor)) {
          // a cycle found
          var cycleValid = true;
          var cyclePath = [neighbor, curNode];
          var p = parent_1[curNodeId];

          while (used[neighborId].size && !used[neighborId].has(p)) {
            cyclePath.push(p);
            if (p === parent_1[p.id]) break;else p = parent_1[p.id];
          }

          cyclePath.push(p);

          if (nodeIds && include) {
            // 如果有指定包含的节点
            cycleValid = false;

            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = true;
            }
          } else if (nodeIds && !include) {
            // 如果有指定不包含的节点
            if (cyclePath.findIndex(function (node) {
              return nodeIds.indexOf(node.id) > -1;
            }) > -1) {
              cycleValid = false;
            }
          } // 把 node list 形式转换为 cycle 的格式


          if (cycleValid) {
            var cycle = {};

            for (var index = 1; index < cyclePath.length; index += 1) {
              cycle[cyclePath[index - 1].id] = cyclePath[index];
            }

            if (cyclePath.length) {
              cycle[cyclePath[cyclePath.length - 1].id] = cyclePath[0];
            }

            allCycles.push(cycle);
          }

          used[neighborId].add(curNode);
        }
      };

      for (var i = 0; i < neighbors.length; i += 1) {
        _loop_1(i);
      }
    }
  }

  return allCycles;
};
/**
 * Johnson's algorithm, 时间复杂度 O((V + E)(C + 1))$ and space bounded by O(V + E)
 * refer: https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF
 * refer: https://networkx.github.io/documentation/stable/_modules/networkx/algorithms/cycles.html#simple_cycles
 * @param graph
 * @param nodeIds 节点 ID 的数组
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: INode}] 返回所有的 simple cycles
 */


exports.detectAllUndirectedCycle = detectAllUndirectedCycle;

var detectAllDirectedCycle = function detectAllDirectedCycle(graphData, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }

  var path = []; // stack of nodes in current path

  var blocked = new Set();
  var B = []; // remember portions of the graph that yield no elementary circuit

  var allCycles = [];
  var idx2Node = {};
  var node2Idx = {}; // 辅助函数： unblock all blocked nodes

  var unblock = function unblock(thisNode) {
    var stack = [thisNode];

    while (stack.length > 0) {
      var node = stack.pop();

      if (blocked.has(node)) {
        blocked.delete(node);
        B[node.id].forEach(function (n) {
          stack.push(n);
        });
        B[node.id].clear();
      }
    }
  };

  var circuit = function circuit(node, start, adjList) {
    var closed = false; // whether a path is closed

    if (nodeIds && include === false && nodeIds.indexOf(node.id) > -1) return closed;
    path.push(node);
    blocked.add(node);
    var neighbors = adjList[node.id];

    for (var i = 0; i < neighbors.length; i += 1) {
      var neighbor = idx2Node[neighbors[i]];

      if (neighbor === start) {
        var cycle = {};

        for (var index = 1; index < path.length; index += 1) {
          cycle[path[index - 1].id] = path[index];
        }

        if (path.length) {
          cycle[path[path.length - 1].id] = path[0];
        }

        allCycles.push(cycle);
        closed = true;
      } else if (!blocked.has(neighbor)) {
        if (circuit(neighbor, start, adjList)) {
          closed = true;
        }
      }
    }

    if (closed) {
      unblock(node);
    } else {
      for (var i = 0; i < neighbors.length; i += 1) {
        var neighbor = idx2Node[neighbors[i]];

        if (!B[neighbor.id].has(node)) {
          B[neighbor.id].add(node);
        }
      }
    }

    path.pop();
    return closed;
  };

  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a; // Johnson's algorithm 要求给节点赋顺序，先按节点在数组中的顺序

  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];
    var nodeId = node.id;
    node2Idx[nodeId] = i;
    idx2Node[i] = node;
  } // 如果有指定包含的节点，则把指定节点排序在前，以便提早结束搜索


  if (nodeIds && include) {
    var _loop_2 = function _loop_2(i) {
      var nodeId = nodeIds[i];
      node2Idx[nodes[i].id] = node2Idx[nodeId];
      node2Idx[nodeId] = 0;
      idx2Node[0] = nodes.find(function (node) {
        return node.id === nodeId;
      });
      idx2Node[node2Idx[nodes[i].id]] = nodes[i];
    };

    for (var i = 0; i < nodeIds.length; i++) {
      _loop_2(i);
    }
  } // 返回 节点顺序 >= nodeOrder 的强连通分量的adjList


  var getMinComponentAdj = function getMinComponentAdj(components) {
    var _a;

    var minCompIdx;
    var minIdx = Infinity; // Find least component and the lowest node

    for (var i = 0; i < components.length; i += 1) {
      var comp = components[i];

      for (var j = 0; j < comp.length; j++) {
        var nodeIdx_1 = node2Idx[comp[j].id];

        if (nodeIdx_1 < minIdx) {
          minIdx = nodeIdx_1;
          minCompIdx = i;
        }
      }
    }

    var component = components[minCompIdx];
    var adjList = [];

    for (var i = 0; i < component.length; i += 1) {
      var node = component[i];
      adjList[node.id] = [];

      for (var _i = 0, _b = (0, _util.getNeighbors)(node.id, graphData.edges, 'target').filter(function (n) {
        return component.map(function (c) {
          return c.id;
        }).indexOf(n) > -1;
      }); _i < _b.length; _i++) {
        var neighbor = _b[_i]; // 对自环情况 (点连向自身) 特殊处理：记录自环，但不加入adjList

        if (neighbor === node.id && !(include === false && nodeIds.indexOf(node.id) > -1)) {
          allCycles.push((_a = {}, _a[node.id] = node, _a));
        } else {
          adjList[node.id].push(node2Idx[neighbor]);
        }
      }
    }

    return {
      component: component,
      adjList: adjList,
      minIdx: minIdx
    };
  };

  var nodeIdx = 0;

  while (nodeIdx < nodes.length) {
    var subgraphNodes = nodes.filter(function (n) {
      return node2Idx[n.id] >= nodeIdx;
    });
    var sccs = (0, _connectedComponent.detectStrongConnectComponents)({
      nodes: subgraphNodes,
      edges: graphData.edges
    }).filter(function (component) {
      return component.length > 1;
    });
    if (sccs.length === 0) break;
    var scc = getMinComponentAdj(sccs);
    var minIdx = scc.minIdx,
        adjList = scc.adjList,
        component = scc.component;

    if (component.length > 1) {
      component.forEach(function (node) {
        B[node.id] = new Set();
      });
      var startNode = idx2Node[minIdx]; // startNode 不在指定要包含的节点中，提前结束搜索

      if (nodeIds && include && nodeIds.indexOf(startNode.id) === -1) return allCycles;
      circuit(startNode, startNode, adjList);
      nodeIdx = minIdx + 1;
    } else {
      break;
    }
  }

  return allCycles;
};
/**
 * 查找图中所有满足要求的圈
 * @param graph
 * @param directed 是否为有向图
 * @param nodeIds 节点 ID 的数组，若不指定，则返回图中所有的圈
 * @param include 包含或排除指定的节点
 * @return [{[key: string]: Node}] 包含所有环的数组，每个环用一个Object表示，其中key为节点id，value为该节点在环中指向的下一个节点
 */


exports.detectAllDirectedCycle = detectAllDirectedCycle;

var detectAllCycles = function detectAllCycles(graphData, directed, nodeIds, include) {
  if (include === void 0) {
    include = true;
  }

  if (directed) return detectAllDirectedCycle(graphData, nodeIds, include);
  return detectAllUndirectedCycle(graphData, nodeIds, include);
};

exports.detectAllCycles = detectAllCycles;
var _default = detectDirectedCycle;
exports.default = _default;
}, function(modId) { var map = {"./dfs":1623251340005,"./connected-component":1623251340002,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340005, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = depthFirstSearch;

var _util = require("./util");

function initCallbacks(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }

  var initiatedCallback = callbacks;

  var stubCallback = function stubCallback() {};

  var allowTraversalCallback = function () {
    var seen = {};
    return function (_a) {
      var next = _a.next;

      if (!seen[next]) {
        seen[next] = true;
        return true;
      }

      return false;
    };
  }();

  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enter = callbacks.enter || stubCallback;
  initiatedCallback.leave = callbacks.leave || stubCallback;
  return initiatedCallback;
}
/**
 * @param {Graph} graph
 * @param {GraphNode} currentNode
 * @param {GraphNode} previousNode
 * @param {Callbacks} callbacks
 */


function depthFirstSearchRecursive(graphData, currentNode, previousNode, callbacks) {
  callbacks.enter({
    current: currentNode,
    previous: previousNode
  });
  var _a = graphData.edges,
      edges = _a === void 0 ? [] : _a;
  (0, _util.getNeighbors)(currentNode, edges, 'target').forEach(function (nextNode) {
    if (callbacks.allowTraversal({
      previous: previousNode,
      current: currentNode,
      next: nextNode
    })) {
      depthFirstSearchRecursive(graphData, nextNode, currentNode, callbacks);
    }
  });
  callbacks.leave({
    current: currentNode,
    previous: previousNode
  });
}
/**
 * 深度优先遍历图
 * @param data GraphData 图数据
 * @param startNodeId 开始遍历的节点的 ID
 * @param originalCallbacks 回调
 */


function depthFirstSearch(graphData, startNodeId, callbacks) {
  depthFirstSearchRecursive(graphData, startNodeId, '', initCallbacks(callbacks));
}
}, function(modId) { var map = {"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340006, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _util = require("@antv/util");

var _util2 = require("./util");

var minVertex = function minVertex(D, nodes, marks) {
  // 找出最小的点
  var minDis = Infinity;
  var minNode;

  for (var i = 0; i < nodes.length; i++) {
    var nodeId = nodes[i].id;

    if (!marks[nodeId] && D[nodeId] <= minDis) {
      minDis = D[nodeId];
      minNode = nodes[i];
    }
  }

  return minNode;
};

var dijkstra = function dijkstra(graphData, source, directed, weightPropertyName) {
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodeIds = [];
  var marks = {};
  var D = {};
  var prevs = {}; // key: 顶点, value: 顶点的前驱点数组（可能有多条等长的最短路径）

  nodes.forEach(function (node, i) {
    var id = node.id;
    nodeIds.push(id);
    D[id] = Infinity;
    if (id === source) D[id] = 0;
  });
  var nodeNum = nodes.length;

  var _loop_1 = function _loop_1(i) {
    // Process the vertices
    var minNode = minVertex(D, nodes, marks);
    var minNodeId = minNode.id;
    marks[minNodeId] = true;
    if (D[minNodeId] === Infinity) return "continue"; // Unreachable vertices cannot be the intermediate point

    var relatedEdges = [];
    if (directed) relatedEdges = (0, _util2.getOutEdgesNodeId)(minNodeId, edges);else relatedEdges = (0, _util2.getEdgesByNodeId)(minNodeId, edges);
    relatedEdges.forEach(function (edge) {
      var edgeTarget = edge.target;
      var edgeSource = edge.source;
      var w = edgeTarget === minNodeId ? edgeSource : edgeTarget;
      var weight = weightPropertyName && edge[weightPropertyName] ? edge[weightPropertyName] : 1;

      if (D[w] > D[minNode.id] + weight) {
        D[w] = D[minNode.id] + weight;
        prevs[w] = [minNode.id];
      } else if (D[w] === D[minNode.id] + weight) {
        prevs[w].push(minNode.id);
      }
    });
  };

  for (var i = 0; i < nodeNum; i++) {
    _loop_1(i);
  }

  prevs[source] = [source]; // 每个节点存可能存在多条最短路径

  var paths = {};

  for (var target in D) {
    if (D[target] !== Infinity) {
      findAllPaths(source, target, prevs, paths);
    }
  } // 兼容之前单路径


  var path = {};

  for (var target in paths) {
    path[target] = paths[target][0];
  }

  return {
    length: D,
    path: path,
    allPath: paths
  };
};

var _default = dijkstra;
exports.default = _default;

function findAllPaths(source, target, prevs, foundPaths) {
  if (source === target) {
    return [source];
  }

  if (foundPaths[target]) {
    return foundPaths[target];
  }

  var paths = [];

  for (var _i = 0, _a = prevs[target]; _i < _a.length; _i++) {
    var prev = _a[_i];
    var prevPaths = findAllPaths(source, prev, prevs, foundPaths);
    if (!prevPaths) return;

    for (var _b = 0, prevPaths_1 = prevPaths; _b < prevPaths_1.length; _b++) {
      var prePath = prevPaths_1[_b];
      if ((0, _util.isArray)(prePath)) paths.push((0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], prePath), [target]));else paths.push([prePath, target]);
    }
  }

  foundPaths[target] = paths;
  return foundPaths[target];
}
}, function(modId) { var map = {"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340007, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAllPath = exports.findShortestPath = void 0;

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findShortestPath = function findShortestPath(graphData, start, end, directed, weightPropertyName) {
  var _a = (0, _dijkstra.default)(graphData, start, directed, weightPropertyName),
      length = _a.length,
      path = _a.path,
      allPath = _a.allPath;

  return {
    length: length[end],
    path: path[end],
    allPath: allPath[end]
  };
};

exports.findShortestPath = findShortestPath;

var findAllPath = function findAllPath(graphData, start, end, directed) {
  var _a;

  if (start === end) return [[start]];
  var _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var visited = [start];
  var isVisited = (_a = {}, _a[start] = true, _a);
  var stack = []; // 辅助栈，用于存储访问过的节点的邻居节点

  var allPath = [];
  var neighbors = directed ? (0, _util.getNeighbors)(start, edges, 'target') : (0, _util.getNeighbors)(start, edges);
  stack.push(neighbors);

  while (visited.length > 0 && stack.length > 0) {
    var children = stack[stack.length - 1];

    if (children.length) {
      var child = children.shift();

      if (child) {
        visited.push(child);
        isVisited[child] = true;
        neighbors = directed ? (0, _util.getNeighbors)(child, edges, 'target') : (0, _util.getNeighbors)(child, edges);
        stack.push(neighbors.filter(function (neighbor) {
          return !isVisited[neighbor];
        }));
      }
    } else {
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
      continue;
    }

    if (visited[visited.length - 1] === end) {
      var path = visited.map(function (node) {
        return node;
      });
      allPath.push(path);
      var node = visited.pop();
      isVisited[node] = false;
      stack.pop();
    }
  }

  return allPath;
};

exports.findAllPath = findAllPath;
}, function(modId) { var map = {"./dijkstra":1623251340006,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340008, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floydWarshall = function floydWarshall(graphData, directed) {
  var adjacentMatrix = (0, _adjacentMatrix.default)(graphData, directed);
  var dist = [];
  var size = adjacentMatrix.length;

  for (var i = 0; i < size; i += 1) {
    dist[i] = [];

    for (var j = 0; j < size; j += 1) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (adjacentMatrix[i][j] === 0 || !adjacentMatrix[i][j]) {
        dist[i][j] = Infinity;
      } else {
        dist[i][j] = adjacentMatrix[i][j];
      }
    }
  } // floyd


  for (var k = 0; k < size; k += 1) {
    for (var i = 0; i < size; i += 1) {
      for (var j = 0; j < size; j += 1) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
};

var _default = floydWarshall;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1623251339997}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340009, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 标签传播算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param maxIteration 最大迭代次数
 */
var labelPropagation = function labelPropagation(graphData, directed, weightPropertyName, maxIteration) {
  if (directed === void 0) {
    directed = false;
  }

  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }

  if (maxIteration === void 0) {
    maxIteration = 1000;
  } // the origin data


  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var clusters = {};
  var nodeMap = {}; // init the clusters and nodeMap

  nodes.forEach(function (node, i) {
    var cid = (0, _util.uniqueId)();
    node.clusterId = cid;
    clusters[cid] = {
      id: cid,
      nodes: [node]
    };
    nodeMap[node.id] = {
      node: node,
      idx: i
    };
  }); // the adjacent matrix of calNodes inside clusters

  var adjMatrix = (0, _adjacentMatrix.default)(graphData, directed); // the sum of each row in adjacent matrix

  var ks = [];
  /**
   * neighbor nodes (id for key and weight for value) for each node
   * neighbors = {
   *  id(node_id): { id(neighbor_1_id): weight(weight of the edge), id(neighbor_2_id): weight(weight of the edge), ... },
   *  ...
   * }
   */

  var neighbors = {};
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
    });
    ks.push(k);
  });
  var iter = 0;

  var _loop_1 = function _loop_1() {
    var changed = false;
    nodes.forEach(function (node) {
      var neighborClusters = {};
      Object.keys(neighbors[node.id]).forEach(function (neighborId) {
        var neighborWeight = neighbors[node.id][neighborId];
        var neighborNode = nodeMap[neighborId].node;
        var neighborClusterId = neighborNode.clusterId;
        if (!neighborClusters[neighborClusterId]) neighborClusters[neighborClusterId] = 0;
        neighborClusters[neighborClusterId] += neighborWeight;
      }); // find the cluster with max weight

      var maxWeight = -Infinity;
      var bestClusterIds = [];
      Object.keys(neighborClusters).forEach(function (clusterId) {
        if (maxWeight < neighborClusters[clusterId]) {
          maxWeight = neighborClusters[clusterId];
          bestClusterIds = [clusterId];
        } else if (maxWeight === neighborClusters[clusterId]) {
          bestClusterIds.push(clusterId);
        }
      });
      if (bestClusterIds.length === 1 && bestClusterIds[0] === node.clusterId) return;
      var selfClusterIdx = bestClusterIds.indexOf(node.clusterId);
      if (selfClusterIdx >= 0) bestClusterIds.splice(selfClusterIdx, 1);

      if (bestClusterIds && bestClusterIds.length) {
        changed = true; // remove from origin cluster

        var selfCluster = clusters[node.clusterId];
        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node);
        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1); // move the node to the best cluster

        var randomIdx = Math.floor(Math.random() * bestClusterIds.length);
        var bestCluster = clusters[bestClusterIds[randomIdx]];
        bestCluster.nodes.push(node);
        node.clusterId = bestCluster.id;
      }
    });
    if (!changed) return "break";
    iter++;
  };

  while (iter < maxIteration) {
    var state_1 = _loop_1();

    if (state_1 === "break") break;
  } // delete the empty clusters


  Object.keys(clusters).forEach(function (clusterId) {
    var cluster = clusters[clusterId];

    if (!cluster.nodes || !cluster.nodes.length) {
      delete clusters[clusterId];
    }
  }); // get the cluster edges

  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var source = edge.source,
        target = edge.target;
    var weight = edge[weightPropertyName] || 1;
    var sourceClusterId = nodeMap[source].node.clusterId;
    var targetClusterId = nodeMap[target].node.clusterId;
    var newEdgeId = sourceClusterId + "---" + targetClusterId;

    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].weight += weight;
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        weight: weight,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  var clustersArray = [];
  Object.keys(clusters).forEach(function (clusterId) {
    clustersArray.push(clusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};

var _default = labelPropagation;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1623251339997,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340010, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adjacentMatrix = _interopRequireDefault(require("./adjacent-matrix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModularity = function getModularity(nodes, adjMatrix, ks, m) {
  var length = adjMatrix.length;
  var param = 2 * m;
  var modularity = 0;

  for (var i = 0; i < length; i++) {
    var clusteri = nodes[i].clusterId;

    for (var j = 0; j < length; j++) {
      var clusterj = nodes[j].clusterId;
      if (clusteri !== clusterj) continue;
      var entry = adjMatrix[i][j] || 0;
      var ki = ks[i] || 0;
      var kj = ks[j] || 0;
      modularity += entry - ki * kj / param;
    }
  }

  modularity *= 1 / param;
  return modularity;
};
/**
 * 社区发现 louvain 算法
 * @param graphData 图数据
 * @param directed 是否有向图，默认为 false
 * @param weightPropertyName 权重的属性字段
 * @param threshold
 */


var louvain = function louvain(graphData, directed, weightPropertyName, threshold) {
  if (directed === void 0) {
    directed = false;
  }

  if (weightPropertyName === void 0) {
    weightPropertyName = 'weight';
  }

  if (threshold === void 0) {
    threshold = 0.0001;
  } // the origin data


  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var uniqueId = 1;
  var clusters = {};
  var nodeMap = {}; // init the clusters and nodeMap

  nodes.forEach(function (node, i) {
    var cid = String(uniqueId++);
    node.clusterId = cid;
    clusters[cid] = {
      id: cid,
      nodes: [node]
    };
    nodeMap[node.id] = {
      node: node,
      idx: i
    };
  }); // the adjacent matrix of calNodes inside clusters

  var adjMatrix = (0, _adjacentMatrix.default)(graphData, directed); // the sum of each row in adjacent matrix

  var ks = [];
  /**
   * neighbor nodes (id for key and weight for value) for each node
   * neighbors = {
   *  id(node_id): { id(neighbor_1_id): weight(weight of the edge), id(neighbor_2_id): weight(weight of the edge), ... },
   *  ...
   * }
   */

  var neighbors = {}; // the sum of the weights of all edges in the graph

  var m = 0;
  adjMatrix.forEach(function (row, i) {
    var k = 0;
    var iid = nodes[i].id;
    neighbors[iid] = {};
    row.forEach(function (entry, j) {
      if (!entry) return;
      k += entry;
      var jid = nodes[j].id;
      neighbors[iid][jid] = entry;
      m += entry;
    });
    ks.push(k);
  });
  m /= 2;
  var totalModularity = Infinity;
  var previousModularity = Infinity;
  var iter = 0;

  while (true) {
    // whether to terminate the iterations
    totalModularity = getModularity(nodes, adjMatrix, ks, m);
    if (Math.abs(totalModularity - previousModularity) < threshold || iter > 100) break;
    previousModularity = totalModularity;
    iter++; // pre compute some values for current clusters

    Object.keys(clusters).forEach(function (clusterId) {
      // sum of weights of edges to nodes in cluster
      var sumTot = 0;
      edges.forEach(function (edge) {
        var source = edge.source,
            target = edge.target;
        var sourceClusterId = nodeMap[source].node.clusterId;
        var targetClusterId = nodeMap[target].node.clusterId;

        if (sourceClusterId === clusterId && targetClusterId !== clusterId || targetClusterId === clusterId && sourceClusterId !== clusterId) {
          sumTot = sumTot + (edge[weightPropertyName] || 1);
        }
      });
      clusters[clusterId].sumTot = sumTot;
    }); // move the nodes to increase the delta modularity

    nodes.forEach(function (node, i) {
      var selfCluster = clusters[node.clusterId];
      var bestIncrease = 0;
      var bestCluster;
      var commonParam = ks[i] / (2 * m); // sum of weights of edges from node to nodes in cluster

      var kiin = 0;
      var selfClusterNodes = selfCluster.nodes;
      selfClusterNodes.forEach(function (scNode) {
        var scNodeIdx = nodeMap[scNode.id].idx;
        kiin += adjMatrix[i][scNodeIdx] || 0;
      }); // the modurarity for **removing** the node i from the origin cluster of node i

      var removeModurarity = kiin - selfCluster.sumTot * commonParam; // the neightbors of the node

      var nodeNeighborIds = neighbors[node.id];
      Object.keys(nodeNeighborIds).forEach(function (neighborNodeId) {
        var neighborNode = nodeMap[neighborNodeId].node;
        var neighborClusterId = neighborNode.clusterId; // if the node and the neighbor of node are in the same cluster, reutrn

        if (neighborClusterId === node.clusterId) return;
        var neighborCluster = clusters[neighborClusterId];
        var clusterNodes = neighborCluster.nodes; // if the cluster is empty, remove the cluster and return

        if (!clusterNodes || !clusterNodes.length) return; // sum of weights of edges from node to nodes in cluster

        var neighborClusterKiin = 0;
        clusterNodes.forEach(function (cNode) {
          var cNodeIdx = nodeMap[cNode.id].idx;
          neighborClusterKiin += adjMatrix[i][cNodeIdx] || 0;
        }); // modurarity for **adding** node i into this neighbor cluster

        var addModurarity = neighborClusterKiin - neighborCluster.sumTot * commonParam; // the increase modurarity is the difference between addModurarity and removeModurarity

        var increase = addModurarity - removeModurarity; // find the best cluster to move node i into

        if (increase > bestIncrease) {
          bestIncrease = increase;
          bestCluster = neighborCluster;
        }
      }); // if found a best cluster to move into

      if (bestIncrease > 0) {
        bestCluster.nodes.push(node);
        var previousClusterId_1 = node.clusterId;
        node.clusterId = bestCluster.id; // move the node to the best cluster

        var nodeInSelfClusterIdx = selfCluster.nodes.indexOf(node); // remove from origin cluster

        selfCluster.nodes.splice(nodeInSelfClusterIdx, 1); // update sumTot for clusters
        // sum of weights of edges to nodes in cluster

        var neighborClusterSumTot_1 = 0;
        var selfClusterSumTot_1 = 0;
        edges.forEach(function (edge) {
          var source = edge.source,
              target = edge.target;
          var sourceClusterId = nodeMap[source].node.clusterId;
          var targetClusterId = nodeMap[target].node.clusterId;

          if (sourceClusterId === bestCluster.id && targetClusterId !== bestCluster.id || targetClusterId === bestCluster.id && sourceClusterId !== bestCluster.id) {
            neighborClusterSumTot_1 = neighborClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }

          if (sourceClusterId === previousClusterId_1 && targetClusterId !== previousClusterId_1 || targetClusterId === previousClusterId_1 && sourceClusterId !== previousClusterId_1) {
            selfClusterSumTot_1 = selfClusterSumTot_1 + (edge[weightPropertyName] || 1);
          }
        }); // the nodes of the clusters to move into and remove are changed, update their sumTot

        bestCluster.sumTot = neighborClusterSumTot_1;
        selfCluster.sumTot = selfClusterSumTot_1;
      }
    });
  } // delete the empty clusters, assign increasing clusterId


  var newClusterIdMap = {};
  var clusterIdx = 0;
  Object.keys(clusters).forEach(function (clusterId) {
    var cluster = clusters[clusterId];

    if (!cluster.nodes || !cluster.nodes.length) {
      delete clusters[clusterId];
      return;
    }

    var newId = String(clusterIdx + 1);

    if (newId === clusterId) {
      return;
    }

    cluster.id = newId;
    cluster.nodes = cluster.nodes.map(function (item) {
      return {
        id: item.id,
        clusterId: newId
      };
    });
    clusters[newId] = cluster;
    newClusterIdMap[clusterId] = newId;
    delete clusters[clusterId];
    clusterIdx++;
  });
  nodes.forEach(function (node) {
    if (node.clusterId && newClusterIdMap[node.clusterId]) node.clusterId = newClusterIdMap[node.clusterId];
  }); // get the cluster edges

  var clusterEdges = [];
  var clusterEdgeMap = {};
  edges.forEach(function (edge) {
    var source = edge.source,
        target = edge.target;
    var weight = edge[weightPropertyName] || 1;
    var sourceClusterId = nodeMap[source].node.clusterId;
    var targetClusterId = nodeMap[target].node.clusterId;
    var newEdgeId = sourceClusterId + "---" + targetClusterId;

    if (clusterEdgeMap[newEdgeId]) {
      clusterEdgeMap[newEdgeId].weight += weight;
      clusterEdgeMap[newEdgeId].count++;
    } else {
      var newEdge = {
        source: sourceClusterId,
        target: targetClusterId,
        weight: weight,
        count: 1
      };
      clusterEdgeMap[newEdgeId] = newEdge;
      clusterEdges.push(newEdge);
    }
  });
  var clustersArray = [];
  Object.keys(clusters).forEach(function (clusterId) {
    clustersArray.push(clusters[clusterId]);
  });
  return {
    clusters: clustersArray,
    clusterEdges: clusterEdges
  };
};

var _default = louvain;
exports.default = _default;
}, function(modId) { var map = {"./adjacent-matrix":1623251339997}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340011, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _unionFind = _interopRequireDefault(require("./structs/union-find"));

var _binaryHeap = _interopRequireDefault(require("./structs/binary-heap"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prim algorithm，use priority queue，复杂度 O(E+V*logV), V: 节点数量，E: 边的数量
 * refer: https://en.wikipedia.org/wiki/Prim%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 */
var primMST = function primMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;

  if (nodes.length === 0) {
    return selectedEdges;
  } // 从nodes[0]开始


  var currNode = nodes[0];
  var visited = new Set();
  visited.add(currNode); // 用二叉堆维护距已加入节点的其他节点的边的权值

  var compareWeight = function compareWeight(a, b) {
    if (weight) {
      return a.weight - b.weight;
    }

    return 0;
  };

  var edgeQueue = new _binaryHeap.default(compareWeight);
  (0, _util.getEdgesByNodeId)(currNode.id, edges).forEach(function (edge) {
    edgeQueue.insert(edge);
  });

  while (!edgeQueue.isEmpty()) {
    // 选取与已加入的结点之间边权最小的结点
    var currEdge = edgeQueue.delMin();
    var source = currEdge.source;
    var target = currEdge.target;
    if (visited.has(source) && visited.has(target)) continue;
    selectedEdges.push(currEdge);

    if (!visited.has(source)) {
      visited.add(source);
      (0, _util.getEdgesByNodeId)(source, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }

    if (!visited.has(target)) {
      visited.add(target);
      (0, _util.getEdgesByNodeId)(target, edges).forEach(function (edge) {
        edgeQueue.insert(edge);
      });
    }
  }

  return selectedEdges;
};
/**
 * Kruskal algorithm，复杂度 O(E*logE), E: 边的数量
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @return IEdge[] 返回构成MST的边的数组
 */


var kruskalMST = function kruskalMST(graphData, weight) {
  var selectedEdges = [];
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;

  if (nodes.length === 0) {
    return selectedEdges;
  } // 若指定weight，则将所有的边按权值从小到大排序


  var weightEdges = edges.map(function (edge) {
    return edge;
  });

  if (weight) {
    weightEdges.sort(function (a, b) {
      return a.weight - b.weight;
    });
  }

  var disjointSet = new _unionFind.default(nodes.map(function (n) {
    return n.id;
  })); // 从权值最小的边开始，如果这条边连接的两个节点于图G中不在同一个连通分量中，则添加这条边
  // 直到遍历完所有点或边

  while (weightEdges.length > 0) {
    var curEdge = weightEdges.shift();
    var source = curEdge.source;
    var target = curEdge.target;

    if (!disjointSet.connected(source, target)) {
      selectedEdges.push(curEdge);
      disjointSet.union(source, target);
    }
  }

  return selectedEdges;
};
/**
 * 最小生成树
 * refer: https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 * @param graph
 * @param weight 指定用于作为边权重的属性，若不指定，则认为所有边权重一致
 * @param algo 'prim' | 'kruskal' 算法类型
 * @return EdgeConfig[] 返回构成MST的边的数组
 */


var minimumSpanningTree = function minimumSpanningTree(graphData, weight, algo) {
  var algos = {
    prim: primMST,
    kruskal: kruskalMST
  };
  if (!algo) return kruskalMST(graphData, weight);
  return algos[algo](graphData, weight);
};

var _default = minimumSpanningTree;
exports.default = _default;
}, function(modId) { var map = {"./structs/union-find":1623251340012,"./structs/binary-heap":1623251340013,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340012, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 并查集 Disjoint set to support quick union
 */
var UnionFind =
/** @class */
function () {
  function UnionFind(items) {
    this.count = items.length;
    this.parent = {};

    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
      var i = items_1[_i];
      this.parent[i] = i;
    }
  } // find the root of the item


  UnionFind.prototype.find = function (item) {
    while (this.parent[item] !== item) {
      item = this.parent[item];
    }

    return item;
  };

  UnionFind.prototype.union = function (a, b) {
    var rootA = this.find(a);
    var rootB = this.find(b);
    if (rootA === rootB) return; // make the element with smaller root the parent

    if (rootA < rootB) {
      if (this.parent[b] !== b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] !== a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }; // whether a and b are connected, i.e. a and b have the same root


  UnionFind.prototype.connected = function (a, b) {
    return this.find(a) === this.find(b);
  };

  return UnionFind;
}();

var _default = UnionFind;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340013, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var defaultCompare = function defaultCompare(a, b) {
  return a - b;
};

var MinBinaryHeap =
/** @class */
function () {
  function MinBinaryHeap(compareFn) {
    if (compareFn === void 0) {
      compareFn = defaultCompare;
    }

    this.compareFn = compareFn;
    this.list = [];
  }

  MinBinaryHeap.prototype.getLeft = function (index) {
    return 2 * index + 1;
  };

  MinBinaryHeap.prototype.getRight = function (index) {
    return 2 * index + 2;
  };

  MinBinaryHeap.prototype.getParent = function (index) {
    if (index === 0) {
      return null;
    }

    return Math.floor((index - 1) / 2);
  };

  MinBinaryHeap.prototype.isEmpty = function () {
    return this.list.length <= 0;
  };

  MinBinaryHeap.prototype.top = function () {
    return this.isEmpty() ? undefined : this.list[0];
  };

  MinBinaryHeap.prototype.delMin = function () {
    var top = this.top();
    var bottom = this.list.pop();

    if (this.list.length > 0) {
      this.list[0] = bottom;
      this.moveDown(0);
    }

    return top;
  };

  MinBinaryHeap.prototype.insert = function (value) {
    if (value !== null) {
      this.list.push(value);
      var index = this.list.length - 1;
      this.moveUp(index);
      return true;
    }

    return false;
  };

  MinBinaryHeap.prototype.moveUp = function (index) {
    var parent = this.getParent(index);

    while (index && index > 0 && this.compareFn(this.list[parent], this.list[index]) > 0) {
      // swap
      var tmp = this.list[parent];
      this.list[parent] = this.list[index];
      this.list[index] = tmp; // [this.list[index], this.list[parent]] = [this.list[parent], this.list[index]]

      index = parent;
      parent = this.getParent(index);
    }
  };

  MinBinaryHeap.prototype.moveDown = function (index) {
    var _a;

    var element = index;
    var left = this.getLeft(index);
    var right = this.getRight(index);
    var size = this.list.length;

    if (left !== null && left < size && this.compareFn(this.list[element], this.list[left]) > 0) {
      element = left;
    } else if (right !== null && right < size && this.compareFn(this.list[element], this.list[right]) > 0) {
      element = right;
    }

    if (index !== element) {
      _a = [this.list[element], this.list[index]], this.list[index] = _a[0], this.list[element] = _a[1];
      this.moveDown(element);
    }
  };

  return MinBinaryHeap;
}();

var _default = MinBinaryHeap;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340014, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _degree = _interopRequireDefault(require("./degree"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PageRank https://en.wikipedia.org/wiki/PageRank
 * refer: https://github.com/anvaka/ngraph.pagerank
 * @param graph
 * @param epsilon 判断是否收敛的精度值，默认 0.000001
 * @param linkProb 阻尼系数（dumping factor），指任意时刻，用户访问到某节点后继续访问该节点链接的下一个节点的概率，经验值 0.85
 */
var pageRank = function pageRank(graphData, epsilon, linkProb) {
  if (typeof epsilon !== 'number') epsilon = 0.000001;
  if (typeof linkProb !== 'number') linkProb = 0.85;
  var distance = 1;
  var leakedRank = 0;
  var maxIterations = 1000;
  var _a = graphData.nodes,
      nodes = _a === void 0 ? [] : _a,
      _b = graphData.edges,
      edges = _b === void 0 ? [] : _b;
  var nodesCount = nodes.length;
  var currentRank;
  var curRanks = {};
  var prevRanks = {}; // Initialize pageranks 初始化

  for (var j = 0; j < nodesCount; ++j) {
    var node = nodes[j];
    var nodeId = node.id;
    curRanks[nodeId] = 1 / nodesCount;
    prevRanks[nodeId] = 1 / nodesCount;
  }

  var nodeDegree = (0, _degree.default)(graphData);

  while (maxIterations > 0 && distance > epsilon) {
    leakedRank = 0;

    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = 0;

      if (nodeDegree[node.id].inDegree === 0) {
        curRanks[nodeId] = 0;
      } else {
        var neighbors = (0, _util.getNeighbors)(nodeId, edges, 'source');

        for (var i = 0; i < neighbors.length; ++i) {
          var neighbor = neighbors[i];
          var outDegree = nodeDegree[neighbor].outDegree;
          if (outDegree > 0) currentRank += prevRanks[neighbor] / outDegree;
        }

        curRanks[nodeId] = linkProb * currentRank;
        leakedRank += curRanks[nodeId];
      }
    }

    leakedRank = (1 - leakedRank) / nodesCount;
    distance = 0;

    for (var j = 0; j < nodesCount; ++j) {
      var node = nodes[j];
      var nodeId = node.id;
      currentRank = curRanks[nodeId] + leakedRank;
      distance += Math.abs(currentRank - prevRanks[nodeId]);
      prevRanks[nodeId] = currentRank;
    }

    maxIterations -= 1;
  }

  return prevRanks;
};

var _default = pageRank;
exports.default = _default;
}, function(modId) { var map = {"./degree":1623251340003,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340015, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tslib = require("tslib");

var _floydWarshall = _interopRequireDefault(require("./floydWarshall"));

var _gSpan = _interopRequireDefault(require("./gSpan/gSpan"));

var _dijkstra = _interopRequireDefault(require("./dijkstra"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 为 graphData 中每个节点生成邻居单元数组
 * @param graphData
 * @param spm
 * @param nodeLabelProp
 * @param k k-近邻
 */
var findKNeighborUnits = function findKNeighborUnits(graphData, spm, nodeLabelProp, k) {
  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }

  if (k === void 0) {
    k = 2;
  }

  var units = [];
  var nodes = graphData.nodes;
  spm.forEach(function (row, i) {
    units.push(findKNeighborUnit(nodes, row, i, nodeLabelProp, k));
  });
  return units;
};

var findKNeighborUnit = function findKNeighborUnit(nodes, row, i, nodeLabelProp, k) {
  var unitNodeIdxs = [i];
  var neighbors = [];
  var labelCountMap = {};
  row.forEach(function (v, j) {
    if (v <= k && i !== j) {
      unitNodeIdxs.push(j);
      neighbors.push(nodes[j]);
      var label = nodes[j][nodeLabelProp];
      if (!labelCountMap[label]) labelCountMap[label] = {
        count: 1,
        dists: [v]
      };else {
        labelCountMap[label].count++;
        labelCountMap[label].dists.push(v);
      }
    }
  }); // 将 labelCountMap 中的 dists 按照从小到大排序，方便后面使用

  Object.keys(labelCountMap).forEach(function (label) {
    labelCountMap[label].dists = labelCountMap[label].dists.sort(function (a, b) {
      return a - b;
    });
  });
  return {
    nodeIdx: i,
    nodeId: nodes[i].id,
    nodeIdxs: unitNodeIdxs,
    neighbors: neighbors,
    neighborNum: unitNodeIdxs.length - 1,
    nodeLabelCountMap: labelCountMap
  };
};
/**
 * 随机寻找点对，满足距离小于 k
 * @param k 参数 k，表示 k-近邻
 * @param nodeNum 参数 length
 * @param maxNodePairNum 寻找点对的数量不超过 maxNodePairNum
 * @param spm 最短路径矩阵
 */


var findNodePairsRandomly = function findNodePairsRandomly(k, nodeNum, maxNodePairNum, kNeighborUnits, spm) {
  // 每个节点需要随机找出的点对数
  var nodePairNumEachNode = Math.ceil(maxNodePairNum / nodeNum);
  var nodePairMap = {};
  var foundNodePairCount = 0; // 遍历节点，为每个节点随机找出 nodePairNumEachNode 个点对，满足距离小于 k。找到的点对数量超过 maxNodePairNum 或所有节点遍历结束时终止

  kNeighborUnits.forEach(function (unit, i) {
    // 若未达到 nodePairNumEachNode，或循环次数小于最大循环次数(2 * nodeNum)，继续循环
    var nodePairForICount = 0;
    var outerLoopCount = 0;
    var neighbors = unit.nodeIdxs; // the first one is the center node

    var neighborNum = unit.neighborNum - 1;

    while (nodePairForICount < nodePairNumEachNode) {
      // 另一端节点在节点数组中的的 index
      var oidx = neighbors[1 + Math.floor(Math.random() * neighborNum)];
      var innerLoopCount = 0; // 若随机得到的另一端 idx 不符合条件，则继续 random。条件是不是同一个节点、这个点对没有被记录过、距离小于 k

      while (nodePairMap[i + "-" + oidx] || nodePairMap[oidx + "-" + i]) {
        oidx = Math.floor(Math.random() * nodeNum);
        innerLoopCount++;
        if (innerLoopCount > 2 * nodeNum) break; // 循环次数大于最大循环次数(2 * nodeNum)跳出循环，避免死循环
      }

      if (innerLoopCount < 2 * nodeNum) {
        // 未达到最大循环次数，说明找到了合适的另一端
        nodePairMap[i + "-" + oidx] = {
          start: i,
          end: oidx,
          distance: spm[i][oidx]
        };
        nodePairForICount++;
        foundNodePairCount++; // 如果当前找到的点对数量达到了上限，返回结果

        if (foundNodePairCount >= maxNodePairNum) return nodePairMap;
      }

      outerLoopCount++;
      if (outerLoopCount > 2 * nodeNum) break; // 循环次数大于最大循环次数(2 * nodeNum)跳出循环，避免死循环
    } // 这个节点没有找到足够 nodePairNumEachNode 的点对。更新 nodePairNumEachNode，让后续节点找更多的点对


    if (nodePairForICount < nodePairNumEachNode) {
      var gap = nodePairNumEachNode - nodePairForICount;
      nodePairNumEachNode = (nodePairNumEachNode + gap) / (nodeNum - i - 1);
    }
  });
  return nodePairMap;
};
/**
 * 计算所有 nodePairMap 中节点对的相交邻居诱导子图
 * @param nodePairMap 节点对 map，key 为 node1.id-node2.id，value 为 { startNodeIdx, endNodeIdx, distance }
 * @param neighborUnits 每个节点的邻居元数组
 * @param graphData 原图数据
 * @param edgeMap 边的 map，方便检索
 * @param cachedInducedGraphMap 缓存的结果，下次进入该函数将继续更新该缓存，若 key 在缓存中存在则不需要重复计算
 */


var getIntersectNeighborInducedGraph = function getIntersectNeighborInducedGraph(nodePairMap, neighborUnits, graphData, cachedInducedGraphMap) {
  var nodes = graphData.nodes;
  if (!cachedInducedGraphMap) cachedInducedGraphMap = {};
  Object.keys(nodePairMap).forEach(function (key) {
    var _a, _b;

    if (cachedInducedGraphMap && cachedInducedGraphMap[key]) return;
    cachedInducedGraphMap[key] = {
      nodes: [],
      edges: []
    };
    var pair = nodePairMap[key];
    var startUnitNodeIds = (_a = neighborUnits[pair.start]) === null || _a === void 0 ? void 0 : _a.nodeIdxs;
    var endUnitNodeIds = (_b = neighborUnits[pair.end]) === null || _b === void 0 ? void 0 : _b.nodeIdxs;
    if (!startUnitNodeIds || !endUnitNodeIds) return; // 不存在邻元，返回空图

    var endSet = new Set(endUnitNodeIds);
    var intersect = startUnitNodeIds.filter(function (x) {
      return endSet.has(x);
    }); // 可能会爆栈（在 1580 + 6 nodes full-connected 时出现）

    if (!intersect || !intersect.length) return; // 没有交集，返回空图

    var intersectIdMap = {};
    var intersectLength = intersect.length;

    for (var i = 0; i < intersectLength; i++) {
      var node = nodes[intersect[i]];
      cachedInducedGraphMap[key].nodes.push(node); // 将交集中的点加入诱导子图

      intersectIdMap[node.id] = true;
    } // 遍历所有边数据，如果边的两端都在交集中，将该边加入诱导子图


    graphData.edges.forEach(function (edge) {
      if (intersectIdMap[edge.source] && intersectIdMap[edge.target]) cachedInducedGraphMap[key].edges.push(edge);
    });
  });
  return cachedInducedGraphMap;
};
/**
 * 计算 strcutre 在 graph 上的匹配数量
 * @param graph 图数据
 * @param structure 目前支持只有两个节点一条边的最简单结构
 * @param nodeLabelProp 节点类型字段名
 * @param edgeLabelProp 边类型字段名
 */


var getMatchedCount = function getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp) {
  var nodeMap = {};
  graph.nodes.forEach(function (node) {
    nodeMap[node.id] = node;
  });
  var count = 0;
  graph.edges.forEach(function (e) {
    var sourceLabel = nodeMap[e.source][nodeLabelProp];
    var targetLabel = nodeMap[e.target][nodeLabelProp];
    var strNodeLabel1 = structure.nodes[0][nodeLabelProp];
    var strNodeLabel2 = structure.nodes[1][nodeLabelProp];
    var strEdgeLabel = structure.edges[0][edgeLabelProp];
    if (e[edgeLabelProp] !== strEdgeLabel) return;

    if (sourceLabel === strNodeLabel1 && targetLabel === strNodeLabel2 || sourceLabel === strNodeLabel2 && targetLabel === strNodeLabel1) {
      count++;
    }
  });
  return count;
};
/**
 * structures 中寻找最具有代表性的一个。这个结构是使得 matchedCountMap 的分组方式类内间距最小，类间间距最大
 * @param matchedCountMap 每个 structure 分类后的各图匹配数量，格式 { [strcture.idx]: { [interInducedGraphKey]: count } }
 * @param structureNum strcuture 个数，与 matchedCountMap.length 对应
 * @param structures
 */


var findRepresentStructure = function findRepresentStructure(matchedCountMap, structureNum, structures) {
  var maxOffset = Infinity,
      representClusterType = 0;

  var _loop_1 = function _loop_1(i) {
    // 一种分组的 map，key 是 intGraph 的 key，value 是 structures[i] 的匹配个数
    var countMapI = matchedCountMap[i]; // 按照 value 为该组排序，生成 keys 的数组：

    var sortedGraphKeys = Object.keys(countMapI).sort(function (a, b) {
      return countMapI[a] - countMapI[b];
    }); // 共 100 个 graphKeys，将 graphKeys 按顺序分为 groupNum 组

    var groupNum = 10;
    var clusters = []; // 总共有 groupNum 个项

    sortedGraphKeys.forEach(function (key, j) {
      if (!clusters[j % groupNum]) clusters[j % groupNum] = {
        graphs: [],
        totalCount: 0,
        aveCount: 0
      };
      clusters[j % groupNum].graphs.push(key);
      clusters[j % groupNum].totalCount += countMapI[key];
    }); // 计算 cluster 与 cluster 之间的距离 innerDist，每个 cluster 内部的距离 intraDist

    var aveIntraDist = 0; // 该类的类内平均值

    var aveCounts = []; // 类内平均匹配数量，将用于计算类间距离

    clusters.forEach(function (graphsInCluster) {
      // 类内均值
      var aveCount = graphsInCluster.totalCount / graphsInCluster.graphs.length;
      graphsInCluster.aveCount = aveCount;
      aveCounts.push(aveCount); // 对于每类，计算类内间距平均值

      var aveIntraPerCluster = 0;
      var graphsNum = graphsInCluster.length;
      graphsInCluster.graphs.forEach(function (graphKey1, j) {
        var graph1Count = countMapI[graphKey1];
        graphsInCluster.graphs.forEach(function (graphKey2, k) {
          if (j === k) return;
          aveIntraPerCluster += Math.abs(graph1Count - countMapI[graphKey2]);
        });
      });
      aveIntraPerCluster /= graphsNum * (graphsNum - 1) / 2;
      aveIntraDist += aveIntraPerCluster;
    });
    aveIntraDist /= clusters.length; // 用类内均值计算类间距

    var aveInterDist = 0; // 类间间距平均值

    aveCounts.forEach(function (aveCount1, j) {
      aveCounts.forEach(function (aveCount2, k) {
        if (j === k) return;
        aveInterDist += Math.abs(aveCount1 - aveCount2);
      });
      aveInterDist /= aveCounts.length * (aveCounts.length - 1) / 2;
    }); // 寻找 (类间间距均值-类内间距均值) 最大的一种分组方式（对应的 structure 就是最终要找的唯一 DS(G)）

    var offset = aveInterDist - aveIntraDist;

    if (maxOffset < offset) {
      maxOffset = offset;
      representClusterType = i;
    }
  };

  for (var i = 0; i < structureNum; i++) {
    _loop_1(i);
  }

  return {
    structure: structures[representClusterType],
    structureCountMap: matchedCountMap[representClusterType]
  };
};

var getNodeMaps = function getNodeMaps(nodes, nodeLabelProp) {
  var nodeMap = {},
      nodeLabelMap = {};
  nodes.forEach(function (node, i) {
    nodeMap[node.id] = {
      idx: i,
      node: node,
      degree: 0
    };
    var label = node[nodeLabelProp];
    if (!nodeLabelMap[label]) nodeLabelMap[label] = [];
    nodeLabelMap[label].push(node);
  });
  return {
    nodeMap: nodeMap,
    nodeLabelMap: nodeLabelMap
  };
};

var getEdgeMaps = function getEdgeMaps(edges, edgeLabelProp, nodeMap) {
  var edgeMap = {},
      edgeLabelMap = {};
  edges.forEach(function (edge, i) {
    edgeMap["" + _util.uniqueId] = {
      idx: i,
      edge: edge
    };
    var label = edge[edgeLabelProp];
    if (!edgeLabelMap[label]) edgeLabelMap[label] = [];
    edgeLabelMap[label].push(edge);
    var sourceNode = nodeMap[edge.source];
    if (sourceNode) sourceNode.degree++;
    var targetNode = nodeMap[edge.target];
    if (targetNode) targetNode.degree++;
  });
  return {
    edgeMap: edgeMap,
    edgeLabelMap: edgeLabelMap
  };
};
/**
 * 输出最短路径的 map，key 为 sourceNode.id-targetNode.id，value 为这两个节点的最短路径长度
 * @param nodes
 * @param spm
 * @param directed
 */


var getSpmMap = function getSpmMap(nodes, spm, directed) {
  var length = spm.length;
  var map = {};
  spm.forEach(function (row, i) {
    var start = directed ? 0 : i + 1;
    var iId = nodes[i].id;

    for (var j = start; j < length; j++) {
      if (i === j) continue;
      var jId = nodes[j].id;
      var dist = row[j];
      map[iId + "-" + jId] = dist;
      if (!directed) map[jId + "-" + iId] = dist;
    }
  });
  return map;
};
/**
 * 计算一对节点（node1，node2）的 NDS 距离
 * @param graph 原图数据
 * @param node1
 * @param node2
 */


var getNDSDist = function getNDSDist(graph, node1, node2, nodeMap, spDist, kNeighborUnits, structure, nodeLabelProp, edgeLabelProp, cachedNDSMap, cachedInterInducedGraph) {
  var _a;

  var key = node1.id + "-" + node2.id;
  if (cachedNDSMap && cachedNDSMap[key]) return cachedNDSMap[key];
  var interInducedGraph = cachedInterInducedGraph ? cachedInterInducedGraph[key] : undefined; // 若没有缓存相交邻居诱导子图，计算

  if (!interInducedGraph) {
    var pairMap = (_a = {}, _a[key] = {
      start: nodeMap[node1.id].idx,
      end: nodeMap[node2.id].idx,
      distance: spDist
    }, _a);
    cachedInterInducedGraph = getIntersectNeighborInducedGraph(pairMap, kNeighborUnits, graph, cachedInterInducedGraph);
    interInducedGraph = cachedInterInducedGraph[key];
  }

  return getMatchedCount(interInducedGraph, structure, nodeLabelProp, edgeLabelProp);
};
/**
 * GADDI 模式匹配
 * @param graphData 原图数据
 * @param pattern 搜索图（需要在原图上搜索的模式）数据
 * @param directed 是否计算有向图，默认 false
 * @param k 参数 k，表示 k-近邻
 * @param length 参数 length
 * @param nodeLabelProp 节点数据中代表节点标签（分类信息）的属性名。默认为 cluster
 * @param edgeLabelProp 边数据中代表边标签（分类信息）的属性名。默认为 cluster
 */


var GADDI = function GADDI(graphData, pattern, directed, k, length, nodeLabelProp, edgeLabelProp) {
  if (directed === void 0) {
    directed = false;
  }

  if (nodeLabelProp === void 0) {
    nodeLabelProp = 'cluster';
  }

  if (edgeLabelProp === void 0) {
    edgeLabelProp = 'cluster';
  }

  if (!graphData || !graphData.nodes) return; // 分为三步：
  // 0. 预计算：节点/边数，邻接矩阵、最短路径矩阵
  // 1. 处理原图 graphData。再分为 1~5 小步
  // 2. 匹配
  // console.log("----- stage-pre: preprocessing -------");
  // -------- 第零步，预计算：节点/边数，邻接矩阵、最短路径矩阵-------

  var nodeNum = graphData.nodes.length;
  if (!nodeNum) return; // console.log("----- stage-pre.1: calc shortest path matrix for graph -------");

  var spm = (0, _floydWarshall.default)(graphData, directed); // console.log(
  //   "----- stage-pre.2: calc shortest path matrix for pattern -------"
  // );

  var patternSpm = (0, _floydWarshall.default)(pattern, directed); // console.log(
  //   "----- stage-pre.3: calc shortest path matrix map for graph -------"
  // );

  var spmMap = getSpmMap(graphData.nodes, spm, directed); // console.log(
  //   "----- stage-pre.4: calc shortest path matrix map for pattern -------"
  // );

  var patternSpmMap = getSpmMap(pattern.nodes, patternSpm, directed); // console.log("----- stage-pre.5: establish maps -------");
  // 节点的 map，以 id 为 id 映射，方便后续快速检索

  var _a = getNodeMaps(graphData.nodes, nodeLabelProp),
      nodeMap = _a.nodeMap,
      nodeLabelMap = _a.nodeLabelMap;

  var _b = getNodeMaps(pattern.nodes, nodeLabelProp),
      patternNodeMap = _b.nodeMap,
      patternNodeLabelMap = _b.nodeLabelMap; // 计算节点度数


  getEdgeMaps(graphData.edges, edgeLabelProp, nodeMap);
  var patternEdgeLabelMap = getEdgeMaps(pattern.edges, edgeLabelProp, patternNodeMap).edgeLabelMap; // 若未指定 length，自动计算 pattern 半径（最短路径最大值）

  if (!length) length = Math.max.apply(Math, (0, _tslib.__spreadArray)((0, _tslib.__spreadArray)([], patternSpm[0]), [2]));
  if (!k) k = length; // console.log("params", directed, length, k);
  // console.log("----- stage-pre.6: calc k neighbor units -------");
  // 计算每个节点的 k 邻元集合

  var kNeighborUnits = findKNeighborUnits(graphData, spm, nodeLabelProp, k);
  var patternKNeighborUnits = findKNeighborUnits(pattern, patternSpm, nodeLabelProp, k); // console.log(
  //   "----- stage0: going to processing graph and find intersect neighbor induced graphs -------"
  // );
  // console.log("----- stage0.1: going to select random node pairs -------");
  // -------- 第一步，处理原图 graphData-------
  // 1.1. 随机选择最多 100 个点对，满足距离小于 Length 和 k
  // 当 graphData 少于 20 个节点，则不能找出 100 个点对，只找出不多于 n(n-1)/2 个点对

  var maxNodePairNum = Math.min(100, nodeNum * (nodeNum - 1) / 2);
  var nodePairsMap = findNodePairsRandomly(k, nodeNum, maxNodePairNum, patternKNeighborUnits, spm); // console.log(
  //   "----- stage0.2: going to calculate intersect neighbor induced graphs -------"
  // );
  // 1.2. 生成上面节点对的相应相交邻居诱导子图。格式为 {'beginNodeIdx-endNodeIdx': {nodes: [], edges: []}}

  var intGMap = getIntersectNeighborInducedGraph(nodePairsMap, kNeighborUnits, graphData); // 1.3. 使用 gSpan 算法（frequent graph mining）计算 ISIntG 的前 10 个频率最高的子结构（3-4条边）

  var top = 10,
      minSupport = 1,
      minNodeNum = 1,
      maxNodeNum = 4;
  var params = {
    graphs: intGMap,
    nodeLabelProp: nodeLabelProp,
    edgeLabelProp: edgeLabelProp,
    minSupport: minSupport,
    minNodeNum: minNodeNum,
    maxNodeNum: maxNodeNum,
    directed: directed
  }; // console.log(
  //   "----- stage1: (gSpan) going to find frequent structure dsG -------"
  // );
  // console.log("----- stage1.1: going to run gSpan -------");
  // 暂时假设生成的 sub structure 都只有一条边

  var freStructures = (0, _gSpan.default)(params).slice(0, top); // structureNum 可能小于 top

  var structureNum = freStructures.length; // 1.4. 计算上述 10 个子结构在 intGMap 中每个诱导子图的匹配个数

  var matchedCountMap = [];
  freStructures.forEach(function (structure, i) {
    matchedCountMap[i] = {};
    Object.keys(intGMap).forEach(function (key) {
      var graph = intGMap[key];
      var subStructureCount = getMatchedCount(graph, structure, nodeLabelProp, edgeLabelProp);
      matchedCountMap[i][key] = subStructureCount;
    });
  }); // console.log(
  //   "----- stage1.1: going to find the most represent strucutre -------"
  // );
  // 1.5. 对于每个子结构，根据匹配个数为 intGMap 中的诱导子图分组，生成 structureNum 种分组
  // 计算每种分组的类间距和类内间距，找到类间距最大、类内间距最小的一种分组，这种分组对应的子结构被选为唯一代表性子结构 DS(G)

  var _c = findRepresentStructure(matchedCountMap, structureNum, freStructures),
      dsG = _c.structure,
      ndsDist = _c.structureCountMap; // -------- 第二步，匹配-------
  // 2.1 从 Q 中的第一个标签的第一个节点开始，寻找 G 中的匹配


  var beginPNode = pattern.nodes[0];
  var label = beginPNode[nodeLabelProp]; // 2.1.1 找到 G 中标签与之相同的节点

  var candidates = nodeLabelMap[label]; // console.log("----- stage2: going to find candidates -------");
  // 全局缓存，避免重复计算

  var minPatternNodeLabelDegreeMap = {}; // key 是 label，value 是该 label 节点的最小度数

  var patternIntGraphMap = {},
      patternNDSDist = {},
      // key 为 node.id-node.id
  patternNDSDistMap = {}; // key 为 node.id-label2，value nds距离值数组（按从大到小排序，无需关心具体对应哪个 node2）
  // 2.2.2 对于 Q 中的另一个标签的 k 个节点，计算它们到 node 的最短路径以及 NDS 距离

  var patternSpDist = {};
  Object.keys(patternNodeLabelMap).forEach(function (label2, j) {
    patternSpDist[label2] = [];
    var maxDist = -Infinity;
    var patternNodesWithLabel2 = patternNodeLabelMap[label2];
    var patternNodePairMap = {};
    patternNodesWithLabel2.forEach(function (nodeWithLabel2) {
      var dist = patternSpmMap[beginPNode.id + "-" + nodeWithLabel2.id];
      dist && patternSpDist[label2].push(dist);
      if (maxDist < dist) maxDist = dist;
      patternNodePairMap[beginPNode.id + "-" + nodeWithLabel2.id] = {
        start: 0,
        end: patternNodeMap[nodeWithLabel2.id].idx,
        distance: dist
      };
    }); // spDist[label2] 按照从小到大排序

    patternSpDist[label2] = patternSpDist[label2].sort(function (a, b) {
      return a - b;
    }); // 计算 Q 中所有 label2 节点到 beginPNode 的 NDS 距离
    // 所有 label2 节点到 beginPNode 的邻居相交诱导子图：
    // key: node1.id-node2.id

    patternIntGraphMap = getIntersectNeighborInducedGraph(patternNodePairMap, patternKNeighborUnits, pattern, patternIntGraphMap); // pattern 中 beginNode 到当前 label2 节点 的 NDS 距离（数组，无需关心具体对应到哪个节点）

    var currentPatternNDSDistArray = [];
    Object.keys(patternNodePairMap).forEach(function (key) {
      if (patternNDSDist[key]) {
        currentPatternNDSDistArray.push(patternNDSDist[key]);
        return; // 缓存过则不需要再次计算
      }

      var patternIntGraph = patternIntGraphMap[key];
      patternNDSDist[key] = getMatchedCount(patternIntGraph, dsG, nodeLabelProp, edgeLabelProp);
      currentPatternNDSDistArray.push(patternNDSDist[key]);
    }); // 根据值为 currentPatternNDSDist 从大到小排序

    currentPatternNDSDistArray = currentPatternNDSDistArray.sort(function (a, b) {
      return b - a;
    });
    patternNDSDistMap[beginPNode.id + "-" + label2] = currentPatternNDSDistArray;
    if (label2 === label) return;
    var candidatesNum = candidates.length;

    var _loop_4 = function _loop_4(m) {
      var cNode = candidates[m]; // prune1：若 candidates 中节点 cNode 的 kNeighborUnits 中标签为 label2 的节点个数少于 pattern 中 label2 个数，删去它

      var graphNeighborUnit = kNeighborUnits[nodeMap[cNode.id].idx];
      var graphNeighborUnitCountMap = graphNeighborUnit.nodeLabelCountMap[label2];
      var patternLabel2Num = patternNodeLabelMap[label2].length;

      if (!graphNeighborUnitCountMap || graphNeighborUnitCountMap.count < patternLabel2Num) {
        candidates.splice(m, 1);
        return "continue";
      } // prune2：若 candidates 中节点 cNode 到 kNeighborUnits 中标签为 label2 的节点最短路径大于 patternSpDist[label2]，删去它
      // (prune2 规则即：candidate 相关的最短路径的最大 spDist[label2].length 个，按照大小顺序依次和 patternSpDist[label2] 中的值比较，只要遇到一个是 G > Q 的，就删去这个 candidate)


      var prune2Invalid = false;

      for (var n = 0; n < patternLabel2Num; n++) {
        if (graphNeighborUnitCountMap.dists[n] > patternSpDist[label2][n]) {
          prune2Invalid = true;
          break;
        }
      }

      if (prune2Invalid) {
        candidates.splice(m, 1);
        return "continue";
      } // prune3：若 candidates 中节点 cNode 到 kNeighborUnits 中标签为 label2 的节点 NDS 距离小于 patternNDSDist[beginNode.id-label2]，删去它
      // TODO：prune3，currentPatternNDSDistArray 与 currentNDSDist 的比较
      // 计算 G 中所有 label2 节点到 cNode 的 NDS 距离
      // 所有 label2 节点到 cNode 的邻居相交诱导子图：


      var cNodePairMap = {};
      graphNeighborUnit.neighbors.forEach(function (neighborNode) {
        var dist = spmMap[cNode.id + "-" + neighborNode.id];
        cNodePairMap[cNode.id + "-" + neighborNode.id] = {
          start: nodeMap[cNode.id].idx,
          end: nodeMap[neighborNode.id].idx,
          distance: dist
        };
      }); // 更新 intGMap

      intGMap = getIntersectNeighborInducedGraph(cNodePairMap, kNeighborUnits, graphData, intGMap); // candidate 到它周围 label2 节点的 NDS 距离, key 是 node.id-node.id

      var currentNDSDistArray = [];
      Object.keys(cNodePairMap).forEach(function (key) {
        if (ndsDist[key]) {
          currentNDSDistArray.push(ndsDist[key]);
          return; // 缓存过则不需要再次计算
        }

        var intGraph = intGMap[key];
        ndsDist[key] = getMatchedCount(intGraph, dsG, nodeLabelProp, edgeLabelProp);
        currentNDSDistArray.push(ndsDist[key]);
      }); // 根据值为 currentNDSDistArray 从大到小排序

      currentNDSDistArray = currentNDSDistArray.sort(function (a, b) {
        return b - a;
      });
      var prune3Invalid = false;

      for (var n = 0; n < patternLabel2Num; n++) {
        if (currentNDSDistArray[n] < currentPatternNDSDistArray[n]) {
          prune3Invalid = true;
          break;
        }
      }

      if (prune3Invalid) {
        candidates.splice(m, 1);
        return "continue";
      }
    };

    for (var m = candidatesNum - 1; m >= 0; m--) {
      _loop_4(m);
    }
  });
  var candidateGraphs = []; // console.log(
  //   "----- stage3: going to splice neighbors for each candidate graph -------"
  // );
  // candidates 经过筛选后，以每个 candidate 为中心，生成 Length-neighbor 的邻居诱导子图
  // 并在诱导子图中去除不可能在 Q 上找到匹配的点：在 Q 上不存在的 label，其他 label 到 candidate 的最大最短距离符合 Q、NDS 距离符合 Q

  candidates.forEach(function (candidate) {
    var nodeIdx = nodeMap[candidate.id].idx;
    var lengthNeighborUnit = findKNeighborUnit(graphData.nodes, spm[nodeIdx], nodeIdx, nodeLabelProp, length);
    var neighborNodes = lengthNeighborUnit.neighbors; // 删除不可能找到匹配的邻居点

    var neighborNum = neighborNodes.length;
    var unmatched = false;

    var _loop_5 = function _loop_5(i) {
      // 如果通过裁剪，符合条件的节点数量已过少，说明不能匹配这个 candidate 相关的图
      if (neighborNodes.length + 1 < pattern.nodes.length) {
        unmatched = true;
        return {
          value: void 0
        };
      }

      var neighborNode = neighborNodes[i];
      var neighborLabel = neighborNode[nodeLabelProp]; // prune1: 若该邻居点的 label 不存在于 pattern 中，移除这个点

      if (!patternNodeLabelMap[neighborLabel] || !patternNodeLabelMap[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        return "continue";
      }

      var key = candidate.id + "-" + neighborNode.id; // prune2: 若该邻居点到 candidate 的最短路径比和它有相同 label 的节点到 beginPNode 的最大最短路径长度长，移除这个点
      // prune2.1: 如果没有这个标签到 beginPNode 的距离记录，说明 pattern 上（可能 beginPNode 是这个 label）没有其他这个 label 的节点

      if (!patternSpDist[neighborLabel] || !patternSpDist[neighborLabel].length) {
        neighborNodes.splice(i, 1);
        return "continue";
      } // prune2.2


      var distToCandidate = spmMap[key];
      var maxDistWithLabelInPattern = patternSpDist[neighborLabel][patternSpDist[neighborLabel].length - 1]; // patternSpDist[neighborLabel] 已经按照从小到大排序

      if (distToCandidate > maxDistWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        return "continue";
      } // prune3: 若该邻居点到 candidate 的 NDS 距离比和它有相同 label 的节点到 beginPNode 的最小 NDS 距离小，移除这个点


      var ndsToCandidate = ndsDist[key] ? ndsDist[key] : getNDSDist(graphData, candidate, neighborNode, nodeMap, distToCandidate, kNeighborUnits, dsG, nodeLabelProp, edgeLabelProp, ndsDist, intGMap);
      var patternKey = beginPNode.id + "-" + neighborLabel;
      var minNdsWithLabelInPattern = patternNDSDistMap[patternKey][patternNDSDistMap[patternKey].length - 1]; // patternNDSDist[key] 一定存在

      if (ndsToCandidate < minNdsWithLabelInPattern) {
        neighborNodes.splice(i, 1);
        return "continue";
      } // prune4: 若该邻居点的度数小于 pattern 同 label 节点最小度数，删去该点


      var minPatternNodeLabelDegree = minPatternNodeLabelDegreeMap[neighborLabel];

      if (minPatternNodeLabelDegree === undefined) {
        minPatternNodeLabelDegree = Infinity;
        patternNodeLabelMap[neighborLabel].forEach(function (patternNodeWithLabel) {
          var patternNodeDegree = patternNodeMap[patternNodeWithLabel.id].degree;
          if (minPatternNodeLabelDegree > patternNodeDegree) minPatternNodeLabelDegree = patternNodeDegree;
        });
        minPatternNodeLabelDegreeMap[neighborLabel] = minPatternNodeLabelDegree;
      }

      if (nodeMap[neighborNode.id].degree < minPatternNodeLabelDegree) {
        neighborNodes.splice(i, 1);
        return "continue";
      }
    };

    for (var i = neighborNum - 1; i >= 0; i--) {
      var state_2 = _loop_5(i);

      if (_typeof(state_2) === "object") return state_2.value;
    } // 节点在个数上符合匹配（不少于 pattern 的节点个数），现在筛选相关边


    if (!unmatched) {
      candidateGraphs.push({
        nodes: [candidate].concat(neighborNodes)
      });
    }
  }); // console.log(
  //   "----- stage4: going to splice edges and neighbors for each candidate graph -------"
  // );

  var undirectedLengthsToBeginPNode = (0, _dijkstra.default)(pattern, beginPNode.id, false).length;
  var undirectedLengthsToBeginPNodeLabelMap = {};

  if (directed) {
    Object.keys(undirectedLengthsToBeginPNode).forEach(function (nodeId) {
      var nodeLabel = patternNodeMap[nodeId].node[nodeLabelProp];
      if (!undirectedLengthsToBeginPNodeLabelMap[nodeLabel]) undirectedLengthsToBeginPNodeLabelMap[nodeLabel] = [undirectedLengthsToBeginPNode[nodeId]];else undirectedLengthsToBeginPNodeLabelMap[nodeLabel].push(undirectedLengthsToBeginPNode[nodeId]);
    });
    Object.keys(undirectedLengthsToBeginPNodeLabelMap).forEach(function (pLabel) {
      undirectedLengthsToBeginPNodeLabelMap[pLabel].sort(function (a, b) {
        return a - b;
      });
    });
  } else {
    undirectedLengthsToBeginPNodeLabelMap = patternSpDist;
  } // 现在 candidateGraphs 里面只有节点，进行边的筛选


  var candidateGraphNum = candidateGraphs.length;

  var _loop_2 = function _loop_2(i) {
    var candidateGraph = candidateGraphs[i];
    var candidate = candidateGraph.nodes[0];
    var candidateNodeLabelCountMap = {};
    var candidateNodeMap = {};
    candidateGraph.nodes.forEach(function (node, q) {
      candidateNodeMap[node.id] = {
        idx: q,
        node: node,
        degree: 0
      };
      var cNodeLabel = node[nodeLabelProp];
      if (!candidateNodeLabelCountMap[cNodeLabel]) candidateNodeLabelCountMap[cNodeLabel] = 1;else candidateNodeLabelCountMap[cNodeLabel]++;
    }); // 根据 candidate 和 neighborNodes 中的节点生成 G 的诱导子图
    // 即，将 graphData 上两端都在 candidateGraph.nodes 中的边放入 candidateEdges

    var candidateEdges = [];
    var edgeLabelCountMap = {};
    graphData.edges.forEach(function (edge) {
      if (candidateNodeMap[edge.source] && candidateNodeMap[edge.target]) {
        candidateEdges.push(edge);
        if (!edgeLabelCountMap[edge[edgeLabelProp]]) edgeLabelCountMap[edge[edgeLabelProp]] = 1;else edgeLabelCountMap[edge[edgeLabelProp]]++;
        candidateNodeMap[edge.source].degree++;
        candidateNodeMap[edge.target].degree++;
      }
    }); // prune：若有一个 edgeLabel 在 candidateGraph 上的个数少于 pattern，去除该图

    var pattenrEdgeLabelNum = Object.keys(patternEdgeLabelMap).length;
    var prunedByEdgeLabel = false;

    for (var e = 0; e < pattenrEdgeLabelNum; e++) {
      var label_1 = Object.keys(patternEdgeLabelMap)[e];

      if (!edgeLabelCountMap[label_1] || edgeLabelCountMap[label_1] < patternEdgeLabelMap[label_1].length) {
        prunedByEdgeLabel = true;
        break;
      }
    }

    if (prunedByEdgeLabel) {
      candidateGraphs.splice(i, 1);
      return "continue";
    } // 遍历 candidateEdges，进行边的筛选


    var candidateEdgeNum = candidateEdges.length; // prune：若边数过少，去除该图

    if (candidateEdgeNum < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "break";
    }

    var candidateGraphInvalid = false;

    var _loop_6 = function _loop_6(e) {
      var edge = candidateEdges[e];
      var edgeLabel = edge[edgeLabelProp];
      var patternEdgesWithLabel = patternEdgeLabelMap[edgeLabel]; // prune 1: 若边的 label 不存在于 pattern 边 label 中，去除该边

      if (!patternEdgesWithLabel || !patternEdgesWithLabel.length) {
        edgeLabelCountMap[edgeLabel]--; // 若这个 label 的 count 减少之后，该 label 的边数不足，去除该图

        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }

        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        return "continue";
      } // prune 2: 若边的 label +两端 label 的三元组关系不能在 pattern 中找到，去除该边


      var sourceLabel = candidateNodeMap[edge.source].node[nodeLabelProp];
      var targetLabel = candidateNodeMap[edge.target].node[nodeLabelProp];
      var edgeMatched = false;
      patternEdgesWithLabel.forEach(function (patternEdge) {
        var patternSource = patternNodeMap[patternEdge.source].node;
        var patternTarget = patternNodeMap[patternEdge.target].node;
        if (patternSource[nodeLabelProp] === sourceLabel && patternTarget[nodeLabelProp] === targetLabel) edgeMatched = true;
        if (!directed && patternSource[nodeLabelProp] === targetLabel && patternTarget[nodeLabelProp] === sourceLabel) edgeMatched = true;
      });

      if (!edgeMatched) {
        edgeLabelCountMap[edgeLabel]--; // 若这个 label 的 count 减少之后，该 label 的边数不足，去除该图

        if (patternEdgesWithLabel && edgeLabelCountMap[edgeLabel] < patternEdgesWithLabel.length) {
          candidateGraphInvalid = true;
          return "break";
        }

        candidateEdges.splice(e, 1);
        candidateNodeMap[edge.source].degree--;
        candidateNodeMap[edge.target].degree--;
        return "continue";
      }
    };

    for (var e = candidateEdgeNum - 1; e >= 0; e--) {
      var state_3 = _loop_6(e);

      if (state_3 === "break") break;
    } // prune2: 删除边的过程中，发现边数过少/边 label 数过少时，去除该图


    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }

    candidateGraph.edges = candidateEdges;
    var lengthsToCandidate = (0, _dijkstra.default)(candidateGraph, candidateGraph.nodes[0].id, false).length;
    Object.keys(lengthsToCandidate).reverse().forEach(function (targetId) {
      if (targetId === candidateGraph.nodes[0].id || candidateGraphInvalid) return; // prune4: 通过上述裁剪，可能导致该邻居子图变为不连通。裁剪掉目前在这个邻居子图中和 candidate（第一个节点）不连通的节点

      if (lengthsToCandidate[targetId] === Infinity) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;

        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }

        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
        return;
      } // prune5: 经过边裁剪后，可能又出现了最短路径过长的节点 （比 pattern 中同 label 的节点到 beginNode 最大最短距离远），删去这些节点


      var nLabel = nodeMap[targetId].node[nodeLabelProp];

      if (!undirectedLengthsToBeginPNodeLabelMap[nLabel] || !undirectedLengthsToBeginPNodeLabelMap[nLabel].length || lengthsToCandidate[targetId] > undirectedLengthsToBeginPNodeLabelMap[nLabel][undirectedLengthsToBeginPNodeLabelMap[nLabel].length - 1]) {
        var targetNodeLabel = candidateNodeMap[targetId].node[nodeLabelProp];
        candidateNodeLabelCountMap[targetNodeLabel]--;

        if (candidateNodeLabelCountMap[targetNodeLabel] < patternNodeLabelMap[targetNodeLabel].length) {
          candidateGraphInvalid = true;
          return;
        }

        var idx = candidateGraph.nodes.indexOf(candidateNodeMap[targetId].node);
        candidateGraph.nodes.splice(idx, 1);
        candidateNodeMap[targetId] = undefined;
      }
    });

    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }

    var degreeChanged = true;
    var loopCount = 0;

    while (degreeChanged && !candidateGraphInvalid) {
      degreeChanged = false; // candidate 度数不足，删去该图

      if (candidateNodeMap[candidate.id].degree < patternNodeMap[beginPNode.id].degree) {
        candidateGraphInvalid = true;
        break;
      } // candidate label 个数不足，删去该图


      if (candidateNodeLabelCountMap[candidate[nodeLabelProp]] < patternNodeLabelMap[candidate[nodeLabelProp]].length) {
        candidateGraphInvalid = true;
        break;
      } // prune6：去除度数过小的节点


      var currentCandidateNodeNum = candidateGraph.nodes.length;

      for (var o = currentCandidateNodeNum - 1; o >= 0; o--) {
        var cgNode = candidateGraph.nodes[o];
        var nodeDegree = candidateNodeMap[cgNode.id].degree;
        var cNodeLabel = cgNode[nodeLabelProp];

        if (nodeDegree < minPatternNodeLabelDegreeMap[cNodeLabel]) {
          candidateNodeLabelCountMap[cgNode[nodeLabelProp]]--; // 节点 label 个数不足

          if (candidateNodeLabelCountMap[cgNode[nodeLabelProp]] < patternNodeLabelMap[cgNode[nodeLabelProp]].length) {
            candidateGraphInvalid = true;
            break;
          }

          candidateGraph.nodes.splice(o, 1);
          candidateNodeMap[cgNode.id] = undefined;
          degreeChanged = true;
        }
      }

      if (candidateGraphInvalid || !degreeChanged && loopCount !== 0) break; // 经过 prune5 节点裁剪，删去端点已经不在 candidateGraph 中的边

      candidateEdgeNum = candidateEdges.length;

      for (var y = candidateEdgeNum - 1; y >= 0; y--) {
        var cedge = candidateEdges[y];

        if (!candidateNodeMap[cedge.source] || !candidateNodeMap[cedge.target]) {
          candidateEdges.splice(y, 1);
          var edgeLabel = cedge[edgeLabelProp];
          edgeLabelCountMap[edgeLabel]--;
          candidateNodeMap[cedge.source] && candidateNodeMap[cedge.source].degree--;
          candidateNodeMap[cedge.target] && candidateNodeMap[cedge.target].degree--; // 边 label 数量不足

          if (patternEdgeLabelMap[edgeLabel] && edgeLabelCountMap[edgeLabel] < patternEdgeLabelMap[edgeLabel].length) {
            candidateGraphInvalid = true;
            break;
          }

          degreeChanged = true;
        }
      }

      loopCount++;
    }

    if (candidateGraphInvalid) {
      candidateGraphs.splice(i, 1);
      return "continue";
    } // prune: 若节点/边数过少，节点/边 label 过少，去掉这个图


    if (candidateGraphInvalid || candidateGraph.nodes.length < pattern.nodes.length || candidateEdges.length < pattern.edges.length) {
      candidateGraphs.splice(i, 1);
      return "continue";
    }
  };

  for (var i = candidateGraphNum - 1; i >= 0; i--) {
    var state_1 = _loop_2(i);

    if (state_1 === "break") break;
  } // 此时已经生成的多个 candidateGraphs，可能有重复
  // console.log(
  //   "----- stage5: going to splice dulplicated candidate graphs -------"
  // );
  // 删去 candidateGraphs 中一模一样的子图，通过边的 node-node-edgeLabel 作为 key，这类边个数作为 value，进行匹配


  var currentLength = candidateGraphs.length;

  var _loop_3 = function _loop_3(i) {
    var cg1 = candidateGraphs[i];
    var cg1EdgeMap = {}; // [node1.id-node2.id-edge.label]: count

    cg1.edges.forEach(function (edge) {
      var key = edge.source + "-" + edge.target + "-" + edge.label;
      if (!cg1EdgeMap[key]) cg1EdgeMap[key] = 1;else cg1EdgeMap[key]++;
    });

    var _loop_7 = function _loop_7(j) {
      var cg2 = candidateGraphs[j];
      var cg2EdgeMap = {}; // [node1.id-node2.id-edge.label]: count

      cg2.edges.forEach(function (edge) {
        var key = edge.source + "-" + edge.target + "-" + edge.label;
        if (!cg2EdgeMap[key]) cg2EdgeMap[key] = 1;else cg2EdgeMap[key]++;
      });
      var same = true;

      if (Object.keys(cg2EdgeMap).length !== Object.keys(cg1EdgeMap).length) {
        same = false;
      } else {
        Object.keys(cg1EdgeMap).forEach(function (key) {
          if (cg2EdgeMap[key] !== cg1EdgeMap[key]) same = false;
        });
      }

      if (same) {
        candidateGraphs.splice(j, 1);
      }
    };

    for (var j = currentLength - 1; j > i; j--) {
      _loop_7(j);
    }

    currentLength = candidateGraphs.length;
  };

  for (var i = 0; i <= currentLength - 1; i++) {
    _loop_3(i);
  }

  return candidateGraphs;
};

var _default = GADDI;
exports.default = _default;
}, function(modId) { var map = {"./floydWarshall":1623251340008,"./gSpan/gSpan":1623251340016,"./dijkstra":1623251340006,"./util":1623251340001}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340016, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("@antv/util");

var _struct = require("./struct");

var DFSedge =
/** @class */
function () {
  function DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.nodeEdgeNodeLabel = {
      nodeLabel1: fromNodeLabel || _struct.VACANT_NODE_LABEL,
      edgeLabel: edgeLabel || _struct.VACANT_EDGE_LABEL,
      nodeLabel2: toNodeLabel || _struct.VACANT_NODE_LABEL
    };
  }

  DFSedge.prototype.equalTo = function (other) {
    return this.fromNode === other.formNode && this.toNode === other.toNode && this.nodeEdgeNodeLabel === other.nodeEdgeNodeLabel;
  };

  DFSedge.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };

  return DFSedge;
}(); // DFScode 是 DESedge 的数组


var DFScode =
/** @class */
function () {
  function DFScode() {
    this.rmpath = [];
    this.dfsEdgeList = [];
  }

  DFScode.prototype.equalTo = function (other) {
    var aLength = this.dfsEdgeList.length;
    var bLength = other.length;
    if (aLength !== bLength) return false;

    for (var i = 0; i < aLength; i++) {
      if (this.dfsEdgeList[i] !== other[i]) return false;
    }

    return true;
  };

  DFScode.prototype.notEqualTo = function (other) {
    return !this.equalTo(other);
  };
  /** 增加一条 edge 到 DFScode */


  DFScode.prototype.pushBack = function (fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel) {
    this.dfsEdgeList.push(new DFSedge(fromNode, toNode, fromNodeLabel, edgeLabel, toNodeLabel));
    return this.dfsEdgeList;
  };
  /** 根据 dfs 构建图 */


  DFScode.prototype.toGraph = function (graphId, directed) {
    if (graphId === void 0) {
      graphId = _struct.VACANT_GRAPH_ID;
    }

    if (directed === void 0) {
      directed = false;
    }

    var graph = new _struct.Graph(graphId, true, directed);
    this.dfsEdgeList.forEach(function (dfsEdge) {
      var fromNodeId = dfsEdge.fromNode;
      var toNodeId = dfsEdge.toNode;
      var _a = dfsEdge.nodeEdgeNodeLabel,
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;
      if (nodeLabel1 !== _struct.VACANT_NODE_LABEL) graph.addNode(fromNodeId, nodeLabel1);
      if (nodeLabel2 !== _struct.VACANT_NODE_LABEL) graph.addNode(toNodeId, nodeLabel2);
      graph.addEdge(undefined, fromNodeId, toNodeId, edgeLabel);
    });
    return graph;
  }; // 建立 rightmost path


  DFScode.prototype.buildRmpath = function () {
    this.rmpath = [];
    var oldFrom = undefined;
    var selfLength = this.dfsEdgeList.length;

    for (var i = selfLength - 1; i >= 0; i--) {
      var dfsEdge = this.dfsEdgeList[i];
      var fromNodeIdx = dfsEdge.fromNode;
      var toNodeIdx = dfsEdge.toNode;

      if (fromNodeIdx < toNodeIdx && (oldFrom === undefined || toNodeIdx === oldFrom)) {
        this.rmpath.push(i);
        oldFrom = fromNodeIdx;
      }
    }

    return this.rmpath;
  };

  DFScode.prototype.getNodeNum = function () {
    var nodeMap = {};
    this.dfsEdgeList.forEach(function (dfsEdge) {
      if (!nodeMap[dfsEdge.fromNode]) nodeMap[dfsEdge.fromNode] = true;
      if (!nodeMap[dfsEdge.toNode]) nodeMap[dfsEdge.toNode] = true;
    });
    return Object.keys(nodeMap).length;
  };

  return DFScode;
}();

var History =
/** @class */
function () {
  function History(pdfs) {
    this.his = {};
    this.nodesUsed = {};
    this.edgesUsed = {};
    this.edges = [];
    if (!pdfs) return;

    while (pdfs) {
      var e = pdfs.edge;
      this.edges.push(e);
      this.nodesUsed[e.from] = 1;
      this.nodesUsed[e.to] = 1;
      this.edgesUsed[e.id] = 1;
      pdfs = pdfs.preNode;
    } // 倒序


    this.edges = this.edges.reverse();
  }

  History.prototype.hasNode = function (node) {
    return this.nodesUsed[node.id] === 1;
  };

  History.prototype.hasEdge = function (edge) {
    return this.edgesUsed[edge.id] === 1;
  };

  return History;
}();

var GSpan =
/** @class */
function () {
  function GSpan(_a) {
    var graphs = _a.graphs,
        _b = _a.minSupport,
        minSupport = _b === void 0 ? 2 : _b,
        _c = _a.minNodeNum,
        minNodeNum = _c === void 0 ? 1 : _c,
        _d = _a.maxNodeNum,
        maxNodeNum = _d === void 0 ? 4 : _d,
        _e = _a.top,
        top = _e === void 0 ? 10 : _e,
        _f = _a.directed,
        directed = _f === void 0 ? false : _f,
        _g = _a.verbose,
        verbose = _g === void 0 ? false : _g; // -------- 第零步，初始化-------

    this.graphs = graphs;
    this.dfsCode = new DFScode();
    this.support = 0;
    this.frequentSize1Subgraphs = [];
    this.frequentSubgraphs = [];
    this.minSupport = minSupport;
    this.top = top;
    this.directed = directed;
    this.counter = 0; // TODO? timestamp = {}

    this.maxNodeNum = maxNodeNum;
    this.minNodeNum = minNodeNum;
    this.verbose = verbose;
    if (this.maxNodeNum < this.minNodeNum) this.maxNodeNum = this.minNodeNum;
    this.reportDF = []; // matrix
  } // Line 352


  GSpan.prototype.findForwardRootEdges = function (graph, fromNode) {
    var _this = this;

    var result = [];
    var nodeMap = graph.nodeMap;
    fromNode.edges.forEach(function (edge) {
      if (_this.directed || fromNode.label <= nodeMap[edge.to].label) result.push(edge);
    });
    return result;
  };

  GSpan.prototype.findBackwardEdge = function (graph, edge1, edge2, history) {
    if (!this.directed && edge1 === edge2) return null;
    var nodeMap = graph.nodeMap;
    var edge2To = nodeMap[edge2.to];
    var edge2ToEdges = edge2To.edges;
    var edgeLength = edge2ToEdges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edge2ToEdges[i];
      if (history.hasEdge(edge) || edge.to !== edge1.from) continue;

      if (!this.directed) {
        if (edge1.label < edge.label || edge1.label === edge.label && nodeMap[edge1.to].label <= nodeMap[edge2.to].label) {
          return edge;
        }
      } else {
        if (nodeMap[edge1.from].label < nodeMap[edge2.to].label || nodeMap[edge1.from].label === nodeMap[edge2.to].label && edge1.label <= edge.label) {
          return edge;
        }
      }
    }

    return null;
  };

  GSpan.prototype.findForwardPureEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var rightmostEdgeToId = rightmostEdge.to;
    var edges = graph.nodeMap[rightmostEdgeToId].edges;
    var edgeLength = edges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var toNode = graph.nodeMap[edge.to];

      if (minNodeLabel <= toNode.label && !history.hasNode(toNode)) {
        result.push(edge);
      }
    }

    return result;
  };

  GSpan.prototype.findForwardRmpathEdges = function (graph, rightmostEdge, minNodeLabel, history) {
    var result = [];
    var nodeMap = graph.nodeMap;
    var toNodeLabel = nodeMap[rightmostEdge.to].label;
    var fromNode = nodeMap[rightmostEdge.from];
    var edges = fromNode.edges;
    var edgeLength = edges.length;

    for (var i = 0; i < edgeLength; i++) {
      var edge = edges[i];
      var newToNodeLabel = nodeMap[edge.to].label;

      if (rightmostEdge.to === edge.to || minNodeLabel > newToNodeLabel || history.hasNode(nodeMap[edge.to])) {
        continue;
      }

      if (rightmostEdge.label < edge.label || rightmostEdge.label === edge.label && toNodeLabel <= newToNodeLabel) {
        result.push(edge);
      }
    }

    return result;
  };

  GSpan.prototype.getSupport = function (projected) {
    var graphMap = {};
    projected.forEach(function (pro) {
      if (!graphMap[pro.graphId]) graphMap[pro.graphId] = true;
    });
    return Object.keys(graphMap).length;
  };

  GSpan.prototype.findMinLabel = function (obj) {
    var minLabel = undefined;
    Object.keys(obj).forEach(function (nodeEdgeNodeLabel) {
      var _a = obj[nodeEdgeNodeLabel],
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      if (!minLabel) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
        return;
      }

      if (nodeLabel1 < minLabel.nodeLabel1 || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel < minLabel.edgeLabel || nodeLabel1 === minLabel.nodeLabel1 && edgeLabel === minLabel.edgeLabel && nodeLabel2 < minLabel.nodeLabel2) {
        minLabel = {
          nodeLabel1: nodeLabel1,
          edgeLabel: edgeLabel,
          nodeLabel2: nodeLabel2
        };
      }
    });
    return minLabel;
  };

  GSpan.prototype.isMin = function () {
    var _this = this;

    var dfsCode = this.dfsCode;
    if (this.verbose) console.log("isMin checking", dfsCode);
    if (dfsCode.dfsEdgeList.length === 1) return true;
    var directed = this.directed;
    var graph = dfsCode.toGraph(_struct.VACANT_GRAPH_ID, directed);
    var nodeMap = graph.nodeMap;
    var dfsCodeMin = new DFScode();
    var root = {};
    graph.nodes.forEach(function (node) {
      var forwardEdges = _this.findForwardRootEdges(graph, node);

      forwardEdges.forEach(function (edge) {
        var otherNode = nodeMap[edge.to];
        var nodeEdgeNodeLabel = node.label + "-" + edge.label + "-" + otherNode.label;
        if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
          projected: [],
          nodeLabel1: node.label,
          edgeLabel: edge.label,
          nodeLabel2: otherNode.label
        };
        var pdfs = {
          graphId: graph.id,
          edge: edge,
          preNode: null
        };
        root[nodeEdgeNodeLabel].projected.push(pdfs);
      });
    }); // 比较 root 中每一项的 nodeEdgeNodeLabel 大小，按照 nodeLabel1、edgeLabe、nodeLabel2 的顺序比较

    var minLabel = this.findMinLabel(root); // line 419

    dfsCodeMin.dfsEdgeList.push(new DFSedge(0, 1, minLabel.nodeLabel1, minLabel.edgeLabel, minLabel.nodeLabel2)); // line 423

    var projectIsMin = function projectIsMin(projected) {
      // right most path
      var rmpath = dfsCodeMin.buildRmpath();
      var minNodeLabel = dfsCodeMin.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
      var maxToC = dfsCodeMin.dfsEdgeList[rmpath[0]].toNode; // node id

      var backwardRoot = {};
      var flag = false,
          newTo = 0;
      var end = directed ? -1 : 0; // 遍历到 1 还是到 0

      var _loop_1 = function _loop_1(i) {
        if (flag) return "break"; // line 435

        projected.forEach(function (p) {
          var history = new History(p);

          var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);

          if (backwardEdge) {
            // Line 441
            if (!backwardRoot[backwardEdge.label]) {
              backwardRoot[backwardEdge.label] = {
                projected: [],
                edgeLabel: backwardEdge.label
              };
            }

            backwardRoot[backwardEdge.label].projected.push({
              graphId: graph.id,
              edge: backwardRoot,
              preNode: p
            });
            newTo = dfsCodeMin.dfsEdgeList[rmpath[i]].fromNode;
            flag = true;
          }
        });
      };

      for (var i = rmpath.length - 1; i > end; i--) {
        var state_1 = _loop_1(i);

        if (state_1 === "break") break;
      }

      if (flag) {
        var minBackwardEdgeLabel = _this.findMinLabel(backwardRoot);

        dfsCodeMin.dfsEdgeList.push(new DFSedge(maxToC, newTo, _struct.VACANT_NODE_LABEL, minBackwardEdgeLabel.edgeLabel, _struct.VACANT_NODE_LABEL));
        var idx_1 = dfsCodeMin.dfsEdgeList.length - 1;
        if (_this.dfsCode.dfsEdgeList[idx_1] !== dfsCodeMin.dfsEdgeList[idx_1]) return false;
        return projectIsMin(backwardRoot[minBackwardEdgeLabel.edgeLabel].projected);
      }

      var forwardRoot = {};
      flag = false;
      var newFrom = 0;
      projected.forEach(function (p) {
        var history = new History(p);

        var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);

        if (forwardPureEdges.length > 0) {
          flag = true;
          newFrom = maxToC;
          forwardPureEdges.forEach(function (edge) {
            var key = edge.label + "-" + nodeMap[edge.to].label;
            if (!forwardRoot[key]) forwardRoot[key] = {
              projected: [],
              edgeLabel: edge.label,
              nodeLabel2: nodeMap[edge.to].label
            };
            forwardRoot[key].projected.push({
              graphId: graph.id,
              edge: edge,
              preNode: p
            });
          });
        }
      });
      var pathLength = rmpath.length;

      var _loop_2 = function _loop_2(i) {
        if (flag) return "break";
        var value = rmpath[i];
        projected.forEach(function (p) {
          var history = new History(p);

          var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[value], minNodeLabel, history);

          if (forwardRmpathEdges.length > 0) {
            flag = true;
            newFrom = dfsCodeMin.dfsEdgeList[value].fromNode;
            forwardRmpathEdges.forEach(function (edge) {
              var key = edge.label + "-" + nodeMap[edge.to].label;
              if (!forwardRoot[key]) forwardRoot[key] = {
                projected: [],
                edgeLabel: edge.label,
                nodeLabel2: nodeMap[edge.to].label
              };
              forwardRoot[key].projected.push({
                graphId: graph.id,
                edge: edge,
                preNode: p
              });
            });
          }
        });
      };

      for (var i = 0; i < pathLength; i++) {
        var state_2 = _loop_2(i);

        if (state_2 === "break") break;
      }

      if (!flag) return true;

      var forwardMinEdgeNodeLabel = _this.findMinLabel(forwardRoot);

      dfsCodeMin.dfsEdgeList.push(new DFSedge(newFrom, maxToC + 1, _struct.VACANT_NODE_LABEL, forwardMinEdgeNodeLabel.edgeLabel, forwardMinEdgeNodeLabel.nodeLabel2));
      var idx = dfsCodeMin.dfsEdgeList.length - 1;
      if (dfsCode.dfsEdgeList[idx] !== dfsCodeMin.dfsEdgeList[idx]) return false;
      return projectIsMin(forwardRoot[forwardMinEdgeNodeLabel.edgeLabel + "-" + forwardMinEdgeNodeLabel.nodeLabel2].projected);
    };

    var key = minLabel.nodeLabel1 + "-" + minLabel.edgeLabel + "-" + minLabel.nodeLabel2;
    return projectIsMin(root[key].projected);
  };

  GSpan.prototype.report = function () {
    if (this.dfsCode.getNodeNum() < this.minNodeNum) return;
    this.counter++;
    var graph = this.dfsCode.toGraph(this.counter, this.directed);
    this.frequentSubgraphs.push((0, _util.clone)(graph));
  };

  GSpan.prototype.subGraphMining = function (projected) {
    var _this = this;

    var support = this.getSupport(projected);
    if (support < this.minSupport) return;
    if (!this.isMin()) return;
    this.report();
    var nodeNum = this.dfsCode.getNodeNum();
    var rmpath = this.dfsCode.buildRmpath();
    var maxToC = this.dfsCode.dfsEdgeList[rmpath[0]].toNode;
    var minNodeLabel = this.dfsCode.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1;
    var forwardRoot = {};
    var backwardRoot = {};
    projected.forEach(function (p) {
      var graph = _this.graphs[p.graphId];
      var nodeMap = graph.nodeMap;
      var history = new History(p); // backward Line 526

      for (var i = rmpath.length - 1; i >= 0; i--) {
        var backwardEdge = _this.findBackwardEdge(graph, history.edges[rmpath[i]], history.edges[rmpath[0]], history);

        if (backwardEdge) {
          var key = _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode + "-" + backwardEdge.label;
          if (!backwardRoot[key]) backwardRoot[key] = {
            projected: [],
            toNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: backwardEdge.label
          };
          backwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: backwardEdge,
            preNode: p
          });
        }
      } // pure forward


      if (nodeNum >= _this.maxNodeNum) return;

      var forwardPureEdges = _this.findForwardPureEdges(graph, history.edges[rmpath[0]], minNodeLabel, history);

      forwardPureEdges.forEach(function (edge) {
        var key = maxToC + "-" + edge.label + "-" + nodeMap[edge.to].label;
        if (!forwardRoot[key]) forwardRoot[key] = {
          projected: [],
          fromNodeId: maxToC,
          edgeLabel: edge.label,
          nodeLabel2: nodeMap[edge.to].label
        };
        forwardRoot[key].projected.push({
          graphId: p.graphId,
          edge: edge,
          preNode: p
        });
      });

      var _loop_3 = function _loop_3(i) {
        var forwardRmpathEdges = _this.findForwardRmpathEdges(graph, history.edges[rmpath[i]], minNodeLabel, history);

        forwardRmpathEdges.forEach(function (edge) {
          var key = _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode + "-" + edge.label + "-" + nodeMap[edge.to].label;
          if (!forwardRoot[key]) forwardRoot[key] = {
            projected: [],
            fromNodeId: _this.dfsCode.dfsEdgeList[rmpath[i]].fromNode,
            edgeLabel: edge.label,
            nodeLabel2: nodeMap[edge.to].label
          };
          forwardRoot[key].projected.push({
            graphId: p.graphId,
            edge: edge,
            preNode: p
          });
        });
      }; // rmpath forward


      for (var i = 0; i < rmpath.length; i++) {
        _loop_3(i);
      }
    }); // backward

    Object.keys(backwardRoot).forEach(function (key) {
      var _a = backwardRoot[key],
          toNodeId = _a.toNodeId,
          edgeLabel = _a.edgeLabel;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(maxToC, toNodeId, "-1", edgeLabel, "-1"));

      _this.subGraphMining(backwardRoot[key].projected);

      _this.dfsCode.dfsEdgeList.pop();
    }); // forward

    Object.keys(forwardRoot).forEach(function (key) {
      var _a = forwardRoot[key],
          fromNodeId = _a.fromNodeId,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(fromNodeId, maxToC + 1, _struct.VACANT_NODE_LABEL, edgeLabel, nodeLabel2));

      _this.subGraphMining(forwardRoot[key].projected);

      _this.dfsCode.dfsEdgeList.pop();
    });
  };

  GSpan.prototype.generate1EdgeFrequentSubGraphs = function () {
    var graphs = this.graphs;
    var directed = this.directed;
    var minSupport = this.minSupport;
    var frequentSize1Subgraphs = this.frequentSize1Subgraphs;
    var nodeLabelCounter = {},
        nodeEdgeNodeCounter = {}; // 保存各个图和各自节点的关系 map，key 格式为 graphKey-node类型

    var nodeLableCounted = {}; // 保存各个图和各自边的关系 map，key 格式为 graphKey-fromNode类型-edge类型-toNode类型

    var nodeEdgeNodeLabelCounted = {};
    Object.keys(graphs).forEach(function (key) {
      // Line 271
      var graph = graphs[key];
      var nodeMap = graph.nodeMap; // 遍历节点，记录对应图 与 每个节点的 label 到 nodeLableCounted

      graph.nodes.forEach(function (node, i) {
        // Line 272
        var nodeLabel = node.label;
        var graphNodeKey = key + "-" + nodeLabel;

        if (!nodeLableCounted[graphNodeKey]) {
          var counter = nodeLabelCounter[nodeLabel] || 0;
          counter++;
          nodeLabelCounter[nodeLabel] = counter;
        }

        nodeLableCounted[graphNodeKey] = {
          graphKey: key,
          label: nodeLabel
        }; // 遍历该节点的所有边，记录各个图和各自边的关系到 nodeEdgeNodeLabelCounted. Line 276

        node.edges.forEach(function (edge) {
          var nodeLabel1 = nodeLabel;
          var nodeLabel2 = nodeMap[edge.to].label;

          if (!directed && nodeLabel1 > nodeLabel2) {
            var tmp = nodeLabel2;
            nodeLabel2 = nodeLabel1;
            nodeLabel1 = tmp;
          }

          var edgeLabel = edge.label;
          var graphNodeEdgeNodeKey = key + "-" + nodeLabel1 + "-" + edgeLabel + "-" + nodeLabel2;
          var nodeEdgeNodeKey = nodeLabel1 + "-" + edgeLabel + "-" + nodeLabel2;

          if (!nodeEdgeNodeCounter[nodeEdgeNodeKey]) {
            var counter = nodeEdgeNodeCounter[nodeEdgeNodeKey] || 0;
            counter++;
            nodeEdgeNodeCounter[nodeEdgeNodeKey] = counter; // Line281
          }

          nodeEdgeNodeLabelCounted[graphNodeEdgeNodeKey] = {
            graphId: key,
            nodeLabel1: nodeLabel1,
            edgeLabel: edgeLabel,
            nodeLabel2: nodeLabel2
          };
        });
      });
    }); // 计算频繁的节点

    Object.keys(nodeLabelCounter).forEach(function (label) {
      var count = nodeLabelCounter[label];
      if (count < minSupport) return;
      var g = {
        nodes: [],
        edges: []
      };
      g.nodes.push({
        id: "0",
        label: label
      });
      frequentSize1Subgraphs.push(g); // if (minNodeNum <= 1) reportSize1 TODO
    });
    return frequentSize1Subgraphs;
  };

  GSpan.prototype.run = function () {
    var _this = this; // -------- 第一步, _generate_1edge_frequent_subgraphs：频繁的单个节点-------


    this.frequentSize1Subgraphs = this.generate1EdgeFrequentSubGraphs();
    if (this.maxNodeNum < 2) return;
    var graphs = this.graphs;
    var directed = this.directed; // PDFS 数组的 map Line 304

    var root = {};
    Object.keys(graphs).forEach(function (graphId) {
      var graph = graphs[graphId];
      var nodeMap = graph.nodeMap; // Line 306

      graph.nodes.forEach(function (node) {
        var forwardRootEdges = _this.findForwardRootEdges(graph, node); // Line 308


        forwardRootEdges.forEach(function (edge) {
          var toNode = nodeMap[edge.to];
          var nodeEdgeNodeLabel = node.label + "-" + edge.label + "-" + toNode.label;
          if (!root[nodeEdgeNodeLabel]) root[nodeEdgeNodeLabel] = {
            projected: [],
            nodeLabel1: node.label,
            edgeLabel: edge.label,
            nodeLabel2: toNode.label
          };
          var pdfs = {
            graphId: graphId,
            edge: edge,
            preNode: null
          };
          root[nodeEdgeNodeLabel].projected.push(pdfs);
        });
      });
    }); // Line 313

    Object.keys(root).forEach(function (nodeEdgeNodeLabel) {
      var _a = root[nodeEdgeNodeLabel],
          projected = _a.projected,
          nodeLabel1 = _a.nodeLabel1,
          edgeLabel = _a.edgeLabel,
          nodeLabel2 = _a.nodeLabel2;

      _this.dfsCode.dfsEdgeList.push(new DFSedge(0, 1, nodeLabel1, edgeLabel, nodeLabel2));

      _this.subGraphMining(projected);

      _this.dfsCode.dfsEdgeList.pop();
    });
  };

  return GSpan;
}();

var formatGraphs = function formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp) {
  var result = {};
  Object.keys(graphs).forEach(function (key, i) {
    var graph = graphs[key];
    var fGraph = new _struct.Graph(i, true, directed);
    var nodeIdxMap = {};
    graph.nodes.forEach(function (node, j) {
      fGraph.addNode(j, node[nodeLabelProp]);
      nodeIdxMap[node.id] = j;
    });
    graph.edges.forEach(function (edge, k) {
      var sourceIdx = nodeIdxMap[edge.source];
      var targetIdx = nodeIdxMap[edge.target];
      fGraph.addEdge(-1, sourceIdx, targetIdx, edge[edgeLabelProp]);
    });
    if (fGraph && fGraph.getNodeNum()) result[fGraph.id] = fGraph;
  });
  return result;
};

var toGraphDatas = function toGraphDatas(graphs, nodeLabelProp, edgeLabelProp) {
  var result = [];
  graphs.forEach(function (graph) {
    var graphData = {
      nodes: [],
      edges: []
    };
    graph.nodes.forEach(function (node) {
      var _a;

      graphData.nodes.push((_a = {
        id: "" + node.id
      }, _a[nodeLabelProp] = node.label, _a));
    });
    graph.edges.forEach(function (edge) {
      var _a;

      graphData.edges.push((_a = {
        source: "" + edge.from,
        target: "" + edge.to
      }, _a[edgeLabelProp] = edge.label, _a));
    });
    result.push(graphData);
  });
  return result;
};

var DEFAULT_LABEL_NAME = "cluster";
/**
 * gSpan 频繁子图计算算法（frequent graph mining）
 * @param params 参数
 */

var gSpan = function gSpan(params) {
  // ------- 将图数据 GraphData 的 map 转换为格式 -------
  var graphs = params.graphs,
      _a = params.directed,
      directed = _a === void 0 ? false : _a,
      _b = params.nodeLabelProp,
      nodeLabelProp = _b === void 0 ? DEFAULT_LABEL_NAME : _b,
      _c = params.edgeLabelProp,
      edgeLabelProp = _c === void 0 ? DEFAULT_LABEL_NAME : _c;
  var formattedGraphs = formatGraphs(graphs, directed, nodeLabelProp, edgeLabelProp);
  var minSupport = params.minSupport,
      maxNodeNum = params.maxNodeNum,
      minNodeNum = params.minNodeNum,
      verbose = params.verbose,
      top = params.top; // ------- 初始化与执行算法 -------

  var algoParams = {
    graphs: formattedGraphs,
    minSupport: minSupport,
    maxNodeNum: maxNodeNum,
    minNodeNum: minNodeNum,
    top: top,
    verbose: verbose,
    directed: directed
  };
  var calculator = new GSpan(algoParams);
  calculator.run();
  var result = toGraphDatas(calculator.frequentSubgraphs, nodeLabelProp, edgeLabelProp);
  return result;
};

var _default = gSpan;
exports.default = _default;
}, function(modId) { var map = {"./struct":1623251340017}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340017, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Graph = exports.Node = exports.Edge = exports.AUTO_EDGE_ID = exports.VACANT_GRAPH_ID = exports.VACANT_NODE_LABEL = exports.VACANT_EDGE_LABEL = exports.VACANT_NODE_ID = exports.VACANT_EDGE_ID = void 0;
var VACANT_EDGE_ID = -1;
exports.VACANT_EDGE_ID = VACANT_EDGE_ID;
var VACANT_NODE_ID = -1;
exports.VACANT_NODE_ID = VACANT_NODE_ID;
var VACANT_EDGE_LABEL = "-1";
exports.VACANT_EDGE_LABEL = VACANT_EDGE_LABEL;
var VACANT_NODE_LABEL = "-1";
exports.VACANT_NODE_LABEL = VACANT_NODE_LABEL;
var VACANT_GRAPH_ID = -1;
exports.VACANT_GRAPH_ID = VACANT_GRAPH_ID;
var AUTO_EDGE_ID = "-1";
exports.AUTO_EDGE_ID = AUTO_EDGE_ID;

var Edge =
/** @class */
function () {
  function Edge(id, from, to, label) {
    if (id === void 0) {
      id = VACANT_EDGE_ID;
    }

    if (from === void 0) {
      from = VACANT_NODE_ID;
    }

    if (to === void 0) {
      to = VACANT_NODE_ID;
    }

    if (label === void 0) {
      label = VACANT_EDGE_LABEL;
    }

    this.id = id;
    this.from = from;
    this.to = to;
    this.label = label;
  }

  return Edge;
}();

exports.Edge = Edge;

var Node =
/** @class */
function () {
  function Node(id, label) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }

    if (label === void 0) {
      label = VACANT_NODE_LABEL;
    }

    this.id = id;
    this.label = label;
    this.edges = [];
    this.edgeMap = {};
  }

  Node.prototype.addEdge = function (edge) {
    this.edges.push(edge);
    this.edgeMap[edge.id] = edge;
  };

  return Node;
}();

exports.Node = Node;

var Graph =
/** @class */
function () {
  function Graph(id, edgeIdAutoIncrease, directed) {
    if (id === void 0) {
      id = VACANT_NODE_ID;
    }

    if (edgeIdAutoIncrease === void 0) {
      edgeIdAutoIncrease = true;
    }

    if (directed === void 0) {
      directed = false;
    }

    this.id = id;
    this.edgeIdAutoIncrease = edgeIdAutoIncrease;
    this.edges = [];
    this.nodes = [];
    this.nodeMap = {};
    this.edgeMap = {};
    this.nodeLabelMap = {};
    this.edgeLabelMap = {};
    this.counter = 0;
    this.directed = directed;
  }

  Graph.prototype.getNodeNum = function () {
    return this.nodes.length;
  };

  Graph.prototype.addNode = function (id, label) {
    if (this.nodeMap[id]) return;
    var node = new Node(id, label);
    this.nodes.push(node);
    this.nodeMap[id] = node;
    if (!this.nodeLabelMap[label]) this.nodeLabelMap[label] = [];
    this.nodeLabelMap[label].push(id);
  };

  Graph.prototype.addEdge = function (id, from, to, label) {
    if (this.edgeIdAutoIncrease || id === undefined) id = this.counter++;
    if (this.nodeMap[from] && this.nodeMap[to] && this.nodeMap[to].edgeMap[id]) return;
    var edge = new Edge(id, from, to, label);
    this.edges.push(edge);
    this.edgeMap[id] = edge;
    this.nodeMap[from].addEdge(edge);
    if (!this.edgeLabelMap[label]) this.edgeLabelMap[label] = [];
    this.edgeLabelMap[label].push(edge);

    if (!this.directed) {
      var rEdge = new Edge(id, to, from, label);
      this.nodeMap[to].addEdge(rEdge);
      this.edgeLabelMap[label].push(rEdge);
    }
  };

  return Graph;
}();

exports.Graph = Graph;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340018, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _linkedList = _interopRequireDefault(require("./linked-list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stack =
/** @class */
function () {
  function Stack(maxStep) {
    if (maxStep === void 0) {
      maxStep = 10;
    }

    this.linkedList = new _linkedList.default();
    this.maxStep = maxStep;
  }

  Object.defineProperty(Stack.prototype, "length", {
    get: function get() {
      return this.linkedList.toArray().length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 判断栈是否为空，如果链表中没有头部元素，则栈为空
   */

  Stack.prototype.isEmpty = function () {
    return !this.linkedList.head;
  };
  /**
   * 是否到定义的栈的最大长度，如果达到最大长度后，不再允许入栈
   */


  Stack.prototype.isMaxStack = function () {
    return this.toArray().length >= this.maxStep;
  };
  /**
   * 访问顶端元素
   */


  Stack.prototype.peek = function () {
    if (this.isEmpty()) {
      return null;
    } // 返回头部元素，不删除元素


    return this.linkedList.head.value;
  };

  Stack.prototype.push = function (value) {
    this.linkedList.prepend(value);

    if (this.length > this.maxStep) {
      this.linkedList.deleteTail();
    }
  };

  Stack.prototype.pop = function () {
    var removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  };

  Stack.prototype.toArray = function () {
    return this.linkedList.toArray().map(function (node) {
      return node.value;
    });
  };

  Stack.prototype.clear = function () {
    while (!this.isEmpty()) {
      this.pop();
    }
  };

  return Stack;
}();

var _default = Stack;
exports.default = _default;
}, function(modId) { var map = {"./linked-list":1623251340000}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1623251339996);
})()
//# sourceMappingURL=index.js.map