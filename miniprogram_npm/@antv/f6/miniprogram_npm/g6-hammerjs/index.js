module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1623251340088, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hammer = _interopRequireDefault(require("./hammer"));

var _assign = _interopRequireDefault(require("./utils/assign"));

var _inputConsts = require("./inputjs/input-consts");

var _recognizerConsts = require("./recognizerjs/recognizer-consts");

var _manager = _interopRequireDefault(require("./manager"));

var _inputConstructor = _interopRequireDefault(require("./inputjs/input-constructor"));

var _touchactionConstructor = _interopRequireDefault(require("./touchactionjs/touchaction-constructor"));

var _touch = _interopRequireDefault(require("./input/touch"));

var _pointerevent = _interopRequireDefault(require("./input/pointerevent"));

var _recognizerConstructor = _interopRequireDefault(require("./recognizerjs/recognizer-constructor"));

var _attribute = _interopRequireDefault(require("./recognizers/attribute"));

var _tap = _interopRequireDefault(require("./recognizers/tap"));

var _pan = _interopRequireDefault(require("./recognizers/pan"));

var _swipe = _interopRequireDefault(require("./recognizers/swipe"));

var _pinch = _interopRequireDefault(require("./recognizers/pinch"));

var _rotate = _interopRequireDefault(require("./recognizers/rotate"));

var _press = _interopRequireDefault(require("./recognizers/press"));

var _addEventListeners = _interopRequireDefault(require("./utils/add-event-listeners"));

var _removeEventListeners = _interopRequireDefault(require("./utils/remove-event-listeners"));

var _each = _interopRequireDefault(require("./utils/each"));

var _merge = _interopRequireDefault(require("./utils/merge"));

var _extend = _interopRequireDefault(require("./utils/extend"));

var _inherit = _interopRequireDefault(require("./utils/inherit"));

var _bindFn = _interopRequireDefault(require("./utils/bind-fn"));

var _toArray = _interopRequireDefault(require("./utils/to-array"));

var _uniqueArray = _interopRequireDefault(require("./utils/unique-array"));

var _splitStr = _interopRequireDefault(require("./utils/split-str"));

var _inArray = _interopRequireDefault(require("./utils/in-array"));

var _boolOrFn = _interopRequireDefault(require("./utils/bool-or-fn"));

var _hasParent = _interopRequireDefault(require("./utils/has-parent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var _default = (0, _assign.default)(_hammer.default, {
  INPUT_START: _inputConsts.INPUT_START,
  INPUT_MOVE: _inputConsts.INPUT_MOVE,
  INPUT_END: _inputConsts.INPUT_END,
  INPUT_CANCEL: _inputConsts.INPUT_CANCEL,
  STATE_POSSIBLE: _recognizerConsts.STATE_POSSIBLE,
  STATE_BEGAN: _recognizerConsts.STATE_BEGAN,
  STATE_CHANGED: _recognizerConsts.STATE_CHANGED,
  STATE_ENDED: _recognizerConsts.STATE_ENDED,
  STATE_RECOGNIZED: _recognizerConsts.STATE_RECOGNIZED,
  STATE_CANCELLED: _recognizerConsts.STATE_CANCELLED,
  STATE_FAILED: _recognizerConsts.STATE_FAILED,
  DIRECTION_NONE: _inputConsts.DIRECTION_NONE,
  DIRECTION_LEFT: _inputConsts.DIRECTION_LEFT,
  DIRECTION_RIGHT: _inputConsts.DIRECTION_RIGHT,
  DIRECTION_UP: _inputConsts.DIRECTION_UP,
  DIRECTION_DOWN: _inputConsts.DIRECTION_DOWN,
  DIRECTION_HORIZONTAL: _inputConsts.DIRECTION_HORIZONTAL,
  DIRECTION_VERTICAL: _inputConsts.DIRECTION_VERTICAL,
  DIRECTION_ALL: _inputConsts.DIRECTION_ALL,
  Manager: _manager.default,
  Input: _inputConstructor.default,
  TouchAction: _touchactionConstructor.default,
  TouchInput: _touch.default,
  PointerEventInput: _pointerevent.default,
  Recognizer: _recognizerConstructor.default,
  AttrRecognizer: _attribute.default,
  Tap: _tap.default,
  Pan: _pan.default,
  Swipe: _swipe.default,
  Pinch: _pinch.default,
  Rotate: _rotate.default,
  Press: _press.default,
  on: _addEventListeners.default,
  off: _removeEventListeners.default,
  each: _each.default,
  merge: _merge.default,
  extend: _extend.default,
  assign: _assign.default,
  inherit: _inherit.default,
  bindFn: _bindFn.default,
  toArray: _toArray.default,
  inArray: _inArray.default,
  uniqueArray: _uniqueArray.default,
  splitStr: _splitStr.default,
  boolOrFn: _boolOrFn.default,
  hasParent: _hasParent.default,
  addEventListeners: _addEventListeners.default,
  removeEventListeners: _removeEventListeners.default
});

exports.default = _default;
}, function(modId) {var map = {"./hammer":1623251340089,"./utils/assign":1623251340099,"./inputjs/input-consts":1623251340094,"./recognizerjs/recognizer-consts":1623251340098,"./manager":1623251340116,"./inputjs/input-constructor":1623251340134,"./touchactionjs/touchaction-constructor":1623251340117,"./input/touch":1623251340133,"./input/pointerevent":1623251340139,"./recognizerjs/recognizer-constructor":1623251340097,"./recognizers/attribute":1623251340096,"./recognizers/tap":1623251340111,"./recognizers/pan":1623251340109,"./recognizers/swipe":1623251340108,"./recognizers/pinch":1623251340107,"./recognizers/rotate":1623251340095,"./recognizers/press":1623251340115,"./utils/add-event-listeners":1623251340135,"./utils/remove-event-listeners":1623251340140,"./utils/each":1623251340102,"./utils/merge":1623251340141,"./utils/extend":1623251340143,"./utils/inherit":1623251340144,"./utils/bind-fn":1623251340113,"./utils/to-array":1623251340137,"./utils/unique-array":1623251340138,"./utils/split-str":1623251340136,"./utils/in-array":1623251340103,"./utils/bool-or-fn":1623251340104,"./utils/has-parent":1623251340123}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340089, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ifUndefined = _interopRequireDefault(require("./utils/if-undefined"));

var _touchactionConsts = require("./touchactionjs/touchaction-Consts");

var _inputConsts = require("./inputjs/input-consts");

var _rotate = _interopRequireDefault(require("./recognizers/rotate"));

var _pinch = _interopRequireDefault(require("./recognizers/pinch"));

var _swipe = _interopRequireDefault(require("./recognizers/swipe"));

var _pan = _interopRequireDefault(require("./recognizers/pan"));

var _tap = _interopRequireDefault(require("./recognizers/tap"));

var _press = _interopRequireDefault(require("./recognizers/press"));

var _manager = _interopRequireDefault(require("./manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {Object} [options]
 * @constructor
 */
class Hammer {
  constructor(options) {
    options = options || {};
    options.recognizers = (0, _ifUndefined.default)(options.recognizers, Hammer.defaults.preset);
    return new _manager.default(options);
  }

}
/**
 * @private
 * default settings
 * @namespace
 */


exports.default = Hammer;
Hammer.defaults = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: false,

  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: _touchactionConsts.TOUCH_ACTION_COMPUTE,

  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,

  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,

  /**
   * @private
   * Default recognizer setup when calling `Hammer()`
   * When creating a new Manager these will be skipped.
   * @type {Array}
   */
  preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
  [_rotate.default, {
    enable: false
  }], [_pinch.default, {
    enable: false
  }, ['rotate']], [_swipe.default, {
    direction: _inputConsts.DIRECTION_HORIZONTAL
  }], [_pan.default, {
    direction: _inputConsts.DIRECTION_HORIZONTAL
  }, ['swipe']], [_tap.default], [_tap.default, {
    event: 'doubletap',
    taps: 2
  }, ['tap']], [_press.default]]
};
}, function(modId) { var map = {"./utils/if-undefined":1623251340090,"./touchactionjs/touchaction-Consts":1623251340091,"./inputjs/input-consts":1623251340094,"./recognizers/rotate":1623251340095,"./recognizers/pinch":1623251340107,"./recognizers/swipe":1623251340108,"./recognizers/pan":1623251340109,"./recognizers/tap":1623251340111,"./recognizers/press":1623251340115,"./manager":1623251340116}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340090, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifUndefined;

/**
 * @private
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
  return val1 === undefined ? val2 : val1;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340091, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOUCH_ACTION_MAP = exports.TOUCH_ACTION_PAN_Y = exports.TOUCH_ACTION_PAN_X = exports.TOUCH_ACTION_NONE = exports.TOUCH_ACTION_MANIPULATION = exports.TOUCH_ACTION_COMPUTE = exports.TOUCH_ACTION_AUTO = void 0;

var _utilsConsts = require("../utils/utils-consts");

var _getTouchactionProps = _interopRequireDefault(require("./get-touchaction-props"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// magical touchAction value
const TOUCH_ACTION_COMPUTE = 'compute';
exports.TOUCH_ACTION_COMPUTE = TOUCH_ACTION_COMPUTE;
const TOUCH_ACTION_AUTO = 'auto';
exports.TOUCH_ACTION_AUTO = TOUCH_ACTION_AUTO;
const TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

exports.TOUCH_ACTION_MANIPULATION = TOUCH_ACTION_MANIPULATION;
const TOUCH_ACTION_NONE = 'none';
exports.TOUCH_ACTION_NONE = TOUCH_ACTION_NONE;
const TOUCH_ACTION_PAN_X = 'pan-x';
exports.TOUCH_ACTION_PAN_X = TOUCH_ACTION_PAN_X;
const TOUCH_ACTION_PAN_Y = 'pan-y';
exports.TOUCH_ACTION_PAN_Y = TOUCH_ACTION_PAN_Y;
const TOUCH_ACTION_MAP = (0, _getTouchactionProps.default)();
exports.TOUCH_ACTION_MAP = TOUCH_ACTION_MAP;
}, function(modId) { var map = {"../utils/utils-consts":1623251340092,"./get-touchaction-props":1623251340093}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340092, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.now = exports.abs = exports.round = exports.TYPE_FUNCTION = void 0;
const TYPE_FUNCTION = 'function';
exports.TYPE_FUNCTION = TYPE_FUNCTION;
const {
  round,
  abs
} = Math;
exports.abs = abs;
exports.round = round;
const {
  now
} = Date;
exports.now = now;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340093, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTouchActionProps;

function getTouchActionProps() {
  let touchMap = {};
  ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(val => {
    // If css.supports is not supported but there is native touch-action assume it supports
    // all values. This is the case for IE 10 and 11.
    return touchMap[val] = true;
  });
  return touchMap;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340094, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROPS_CLIENT_XY = exports.PROPS_XY = exports.DIRECTION_ALL = exports.DIRECTION_VERTICAL = exports.DIRECTION_HORIZONTAL = exports.DIRECTION_DOWN = exports.DIRECTION_UP = exports.DIRECTION_RIGHT = exports.DIRECTION_LEFT = exports.DIRECTION_NONE = exports.INPUT_CANCEL = exports.INPUT_END = exports.INPUT_MOVE = exports.INPUT_START = exports.COMPUTE_INTERVAL = exports.INPUT_TYPE_TOUCH = exports.INPUT_TYPE_PEN = exports.INPUT_TYPE_MOUSE = exports.INPUT_TYPE_KINECT = void 0;
const INPUT_TYPE_TOUCH = 'touch';
exports.INPUT_TYPE_TOUCH = INPUT_TYPE_TOUCH;
const INPUT_TYPE_PEN = 'pen';
exports.INPUT_TYPE_PEN = INPUT_TYPE_PEN;
const INPUT_TYPE_MOUSE = 'mouse';
exports.INPUT_TYPE_MOUSE = INPUT_TYPE_MOUSE;
const INPUT_TYPE_KINECT = 'kinect';
exports.INPUT_TYPE_KINECT = INPUT_TYPE_KINECT;
const COMPUTE_INTERVAL = 25;
exports.COMPUTE_INTERVAL = COMPUTE_INTERVAL;
const INPUT_START = 1;
exports.INPUT_START = INPUT_START;
const INPUT_MOVE = 2;
exports.INPUT_MOVE = INPUT_MOVE;
const INPUT_END = 4;
exports.INPUT_END = INPUT_END;
const INPUT_CANCEL = 8;
exports.INPUT_CANCEL = INPUT_CANCEL;
const DIRECTION_NONE = 1;
exports.DIRECTION_NONE = DIRECTION_NONE;
const DIRECTION_LEFT = 2;
exports.DIRECTION_LEFT = DIRECTION_LEFT;
const DIRECTION_RIGHT = 4;
exports.DIRECTION_RIGHT = DIRECTION_RIGHT;
const DIRECTION_UP = 8;
exports.DIRECTION_UP = DIRECTION_UP;
const DIRECTION_DOWN = 16;
exports.DIRECTION_DOWN = DIRECTION_DOWN;
const DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
exports.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
const DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
exports.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
const DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
exports.DIRECTION_ALL = DIRECTION_ALL;
const PROPS_XY = ['x', 'y'];
exports.PROPS_XY = PROPS_XY;
const PROPS_CLIENT_XY = ['clientX', 'clientY'];
exports.PROPS_CLIENT_XY = PROPS_CLIENT_XY;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340095, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attribute = _interopRequireDefault(require("./attribute"));

var _touchactionConsts = require("../touchactionjs/touchaction-Consts");

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
class RotateRecognizer extends _attribute.default {
  constructor() {
    super(...arguments);
  }

  getTouchAction() {
    return [_touchactionConsts.TOUCH_ACTION_NONE];
  }

  attrTest(input) {
    return super.attrTest(input) && (Math.abs(input.rotation) > this.options.threshold || this.state & _recognizerConsts.STATE_BEGAN);
  }

}

exports.default = RotateRecognizer;
RotateRecognizer.prototype.defaults = {
  event: 'rotate',
  threshold: 0,
  pointers: 2
};
}, function(modId) { var map = {"./attribute":1623251340096,"../touchactionjs/touchaction-Consts":1623251340091,"../recognizerjs/recognizer-consts":1623251340098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340096, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _recognizerConstructor = _interopRequireDefault(require("../recognizerjs/recognizer-constructor"));

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

var _inputConsts = require("../inputjs/input-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
class AttrRecognizer extends _recognizerConstructor.default {
  constructor() {
    super(...arguments);
  }
  /**
   * @private
   * Used to check if it the recognizer receives valid input, like input.distance > 10.
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {Boolean} recognized
   */


  attrTest(input) {
    let optionPointers = this.options.pointers;
    return optionPointers === 0 || input.pointers.length === optionPointers;
  }
  /**
   * @private
   * Process the input and return the state for the recognizer
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {*} State
   */


  process(input) {
    let {
      state
    } = this;
    let {
      eventType
    } = input;
    let isRecognized = state & (_recognizerConsts.STATE_BEGAN | _recognizerConsts.STATE_CHANGED);
    let isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

    if (isRecognized && (eventType & _inputConsts.INPUT_CANCEL || !isValid)) {
      return state | _recognizerConsts.STATE_CANCELLED;
    } else if (isRecognized || isValid) {
      if (eventType & _inputConsts.INPUT_END) {
        return state | _recognizerConsts.STATE_ENDED;
      } else if (!(state & _recognizerConsts.STATE_BEGAN)) {
        return _recognizerConsts.STATE_BEGAN;
      }

      return state | _recognizerConsts.STATE_CHANGED;
    }

    return _recognizerConsts.STATE_FAILED;
  }

}

exports.default = AttrRecognizer;
AttrRecognizer.prototype.defaults = {
  /**
   * @private
   * @type {Number}
   * @default 1
   */
  pointers: 1
};
}, function(modId) { var map = {"../recognizerjs/recognizer-constructor":1623251340097,"../recognizerjs/recognizer-consts":1623251340098,"../inputjs/input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340097, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _recognizerConsts = require("./recognizer-consts");

var _assign = _interopRequireDefault(require("../utils/assign"));

var _uniqueId = _interopRequireDefault(require("../utils/unique-id"));

var _ifUndefined = _interopRequireDefault(require("../utils/if-undefined"));

var _invokeArrayArg = _interopRequireDefault(require("../utils/invoke-array-arg"));

var _inArray = _interopRequireDefault(require("../utils/in-array"));

var _boolOrFn = _interopRequireDefault(require("../utils/bool-or-fn"));

var _getRecognizerByNameIfManager = _interopRequireDefault(require("./get-recognizer-by-name-if-manager"));

var _stateStr = _interopRequireDefault(require("./state-str"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */

/**
 * @private
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
class Recognizer {
  constructor(options) {
    this.options = (0, _assign.default)({}, this.defaults, options || {});
    this.id = (0, _uniqueId.default)();
    this.manager = null; // default is enable true

    this.options.enable = (0, _ifUndefined.default)(this.options.enable, true);
    this.state = _recognizerConsts.STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @return {Recognizer}
   */


  set(options) {
    (0, _assign.default)(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

    this.manager && this.manager.touchAction.update();
    return this;
  }
  /**
   * @private
   * recognize simultaneous with an other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  recognizeWith(otherRecognizer) {
    if ((0, _invokeArrayArg.default)(otherRecognizer, 'recognizeWith', this)) {
      return this;
    }

    let {
      simultaneous
    } = this;
    otherRecognizer = (0, _getRecognizerByNameIfManager.default)(otherRecognizer, this);

    if (!simultaneous[otherRecognizer.id]) {
      simultaneous[otherRecognizer.id] = otherRecognizer;
      otherRecognizer.recognizeWith(this);
    }

    return this;
  }
  /**
   * @private
   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  dropRecognizeWith(otherRecognizer) {
    if ((0, _invokeArrayArg.default)(otherRecognizer, 'dropRecognizeWith', this)) {
      return this;
    }

    otherRecognizer = (0, _getRecognizerByNameIfManager.default)(otherRecognizer, this);
    delete this.simultaneous[otherRecognizer.id];
    return this;
  }
  /**
   * @private
   * recognizer can only run when an other is failing
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  requireFailure(otherRecognizer) {
    if ((0, _invokeArrayArg.default)(otherRecognizer, 'requireFailure', this)) {
      return this;
    }

    let {
      requireFail
    } = this;
    otherRecognizer = (0, _getRecognizerByNameIfManager.default)(otherRecognizer, this);

    if ((0, _inArray.default)(requireFail, otherRecognizer) === -1) {
      requireFail.push(otherRecognizer);
      otherRecognizer.requireFailure(this);
    }

    return this;
  }
  /**
   * @private
   * drop the requireFailure link. it does not remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  dropRequireFailure(otherRecognizer) {
    if ((0, _invokeArrayArg.default)(otherRecognizer, 'dropRequireFailure', this)) {
      return this;
    }

    otherRecognizer = (0, _getRecognizerByNameIfManager.default)(otherRecognizer, this);
    let index = (0, _inArray.default)(this.requireFail, otherRecognizer);

    if (index > -1) {
      this.requireFail.splice(index, 1);
    }

    return this;
  }
  /**
   * @private
   * has require failures boolean
   * @returns {boolean}
   */


  hasRequireFailures() {
    return this.requireFail.length > 0;
  }
  /**
   * @private
   * if the recognizer can recognize simultaneous with an other recognizer
   * @param {Recognizer} otherRecognizer
   * @returns {Boolean}
   */


  canRecognizeWith(otherRecognizer) {
    return !!this.simultaneous[otherRecognizer.id];
  }
  /**
   * @private
   * You should use `tryEmit` instead of `emit` directly to check
   * that all the needed recognizers has failed before emitting.
   * @param {Object} input
   */


  emit(input) {
    let self = this;
    let {
      state
    } = this;

    function emit(event) {
      self.manager.emit(event, input);
    } // 'panstart' and 'panmove'


    if (state < _recognizerConsts.STATE_ENDED) {
      emit(self.options.event + (0, _stateStr.default)(state));
    }

    emit(self.options.event); // simple 'eventName' events

    if (input.additionalEvent) {
      // additional event(panleft, panright, pinchin, pinchout...)
      emit(input.additionalEvent);
    } // panend and pancancel


    if (state >= _recognizerConsts.STATE_ENDED) {
      emit(self.options.event + (0, _stateStr.default)(state));
    }
  }
  /**
   * @private
   * Check that all the require failure recognizers has failed,
   * if true, it emits a gesture event,
   * otherwise, setup the state to FAILED.
   * @param {Object} input
   */


  tryEmit(input) {
    if (this.canEmit()) {
      return this.emit(input);
    } // it's failing anyway


    this.state = _recognizerConsts.STATE_FAILED;
  }
  /**
   * @private
   * can we emit?
   * @returns {boolean}
   */


  canEmit() {
    let i = 0;

    while (i < this.requireFail.length) {
      if (!(this.requireFail[i].state & (_recognizerConsts.STATE_FAILED | _recognizerConsts.STATE_POSSIBLE))) {
        return false;
      }

      i++;
    }

    return true;
  }
  /**
   * @private
   * update the recognizer
   * @param {Object} inputData
   */


  recognize(inputData) {
    // make a new copy of the inputData
    // so we can change the inputData without messing up the other recognizers
    let inputDataClone = (0, _assign.default)({}, inputData); // is is enabled and allow recognizing?

    if (!(0, _boolOrFn.default)(this.options.enable, [this, inputDataClone])) {
      this.reset();
      this.state = _recognizerConsts.STATE_FAILED;
      return;
    } // reset when we've reached the end


    if (this.state & (_recognizerConsts.STATE_RECOGNIZED | _recognizerConsts.STATE_CANCELLED | _recognizerConsts.STATE_FAILED)) {
      this.state = _recognizerConsts.STATE_POSSIBLE;
    }

    this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
    // so trigger an event

    if (this.state & (_recognizerConsts.STATE_BEGAN | _recognizerConsts.STATE_CHANGED | _recognizerConsts.STATE_ENDED | _recognizerConsts.STATE_CANCELLED)) {
      this.tryEmit(inputDataClone);
    }
  }
  /**
   * @private
   * return the state of the recognizer
   * the actual recognizing happens in this method
   * @virtual
   * @param {Object} inputData
   * @returns {constant} STATE
   */

  /* jshint ignore:start */


  process(inputData) {}
  /* jshint ignore:end */

  /**
   * @private
   * return the preferred touch-action
   * @virtual
   * @returns {Array}
   */


  getTouchAction() {}
  /**
   * @private
   * called when the gesture isn't allowed to recognize
   * like when another is being recognized or it is disabled
   * @virtual
   */


  reset() {}

}

exports.default = Recognizer;
Recognizer.prototype.defaults = {};
}, function(modId) { var map = {"./recognizer-consts":1623251340098,"../utils/assign":1623251340099,"../utils/unique-id":1623251340100,"../utils/if-undefined":1623251340090,"../utils/invoke-array-arg":1623251340101,"../utils/in-array":1623251340103,"../utils/bool-or-fn":1623251340104,"./get-recognizer-by-name-if-manager":1623251340105,"./state-str":1623251340106}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340098, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATE_FAILED = exports.STATE_CANCELLED = exports.STATE_RECOGNIZED = exports.STATE_ENDED = exports.STATE_CHANGED = exports.STATE_BEGAN = exports.STATE_POSSIBLE = void 0;
const STATE_POSSIBLE = 1;
exports.STATE_POSSIBLE = STATE_POSSIBLE;
const STATE_BEGAN = 2;
exports.STATE_BEGAN = STATE_BEGAN;
const STATE_CHANGED = 4;
exports.STATE_CHANGED = STATE_CHANGED;
const STATE_ENDED = 8;
exports.STATE_ENDED = STATE_ENDED;
const STATE_RECOGNIZED = STATE_ENDED;
exports.STATE_RECOGNIZED = STATE_RECOGNIZED;
const STATE_CANCELLED = 16;
exports.STATE_CANCELLED = STATE_CANCELLED;
const STATE_FAILED = 32;
exports.STATE_FAILED = STATE_FAILED;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340099, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
let assign;

if (typeof Object.assign !== 'function') {
  assign = function assign(target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    let output = Object(target);

    for (let index = 1; index < arguments.length; index++) {
      const source = arguments[index];

      if (source !== undefined && source !== null) {
        for (const nextKey in source) {
          if (source.hasOwnProperty(nextKey)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
    }

    return output;
  };
} else {
  assign = Object.assign;
}

var _default = assign;
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340100, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueId;

/**
 * @private
 * get a unique id
 * @returns {number} uniqueId
 */
let _uniqueId = 1;

function uniqueId() {
  return _uniqueId++;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340101, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invokeArrayArg;

var _each = _interopRequireDefault(require("./each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
  if (Array.isArray(arg)) {
    (0, _each.default)(arg, context[fn], context);
    return true;
  }

  return false;
}
}, function(modId) { var map = {"./each":1623251340102}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340102, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = each;

/**
 * @private
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
  let i;

  if (!obj) {
    return;
  }

  if (obj.forEach) {
    obj.forEach(iterator, context);
  } else if (obj.length !== undefined) {
    i = 0;

    while (i < obj.length) {
      iterator.call(context, obj[i], i, obj);
      i++;
    }
  } else {
    for (i in obj) {
      obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340103, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inArray;

/**
 * @private
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
  if (src.indexOf && !findByKey) {
    return src.indexOf(find);
  } else {
    let i = 0;

    while (i < src.length) {
      if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
        // do not use === here, test fails
        return i;
      }

      i++;
    }

    return -1;
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340104, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = boolOrFn;

var _utilsConsts = require("./utils-consts");

/**
 * @private
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
  if (typeof val === _utilsConsts.TYPE_FUNCTION) {
    return val.apply(args ? args[0] || undefined : undefined, args);
  }

  return val;
}
}, function(modId) { var map = {"./utils-consts":1623251340092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340105, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRecognizerByNameIfManager;

/**
 * @private
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
  let {
    manager
  } = recognizer;

  if (manager) {
    return manager.get(otherRecognizer);
  }

  return otherRecognizer;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340106, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stateStr;

var _recognizerConsts = require("./recognizer-consts");

/**
 * @private
 * get a usable string, used as event postfix
 * @param {constant} state
 * @returns {String} state
 */
function stateStr(state) {
  if (state & _recognizerConsts.STATE_CANCELLED) {
    return 'cancel';
  } else if (state & _recognizerConsts.STATE_ENDED) {
    return 'end';
  } else if (state & _recognizerConsts.STATE_CHANGED) {
    return 'move';
  } else if (state & _recognizerConsts.STATE_BEGAN) {
    return 'start';
  }

  return '';
}
}, function(modId) { var map = {"./recognizer-consts":1623251340098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340107, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attribute = _interopRequireDefault(require("./attribute"));

var _touchactionConsts = require("../touchactionjs/touchaction-Consts");

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
class PinchRecognizer extends _attribute.default {
  constructor() {
    super(...arguments);
  }

  getTouchAction() {
    return [_touchactionConsts.TOUCH_ACTION_NONE];
  }

  attrTest(input) {
    return super.attrTest(input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & _recognizerConsts.STATE_BEGAN);
  }

  emit(input) {
    if (input.scale !== 1) {
      let inOut = input.scale < 1 ? 'in' : 'out';
      input.additionalEvent = this.options.event + inOut;
    }

    super.emit(input);
  }

}

exports.default = PinchRecognizer;
PinchRecognizer.prototype.defaults = {
  event: 'pinch',
  threshold: 0,
  pointers: 2
};
}, function(modId) { var map = {"./attribute":1623251340096,"../touchactionjs/touchaction-Consts":1623251340091,"../recognizerjs/recognizer-consts":1623251340098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340108, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attribute = _interopRequireDefault(require("../recognizers/attribute"));

var _utilsConsts = require("../utils/utils-consts");

var _inputConsts = require("../inputjs/input-consts");

var _pan = _interopRequireDefault(require("./pan"));

var _directionStr = _interopRequireDefault(require("../recognizerjs/direction-str"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
class SwipeRecognizer extends _attribute.default {
  constructor() {
    super(...arguments);
  }

  getTouchAction() {
    return _pan.default.prototype.getTouchAction.call(this);
  }

  attrTest(input) {
    let {
      direction
    } = this.options;
    let velocity;

    if (direction & (_inputConsts.DIRECTION_HORIZONTAL | _inputConsts.DIRECTION_VERTICAL)) {
      velocity = input.overallVelocity;
    } else if (direction & _inputConsts.DIRECTION_HORIZONTAL) {
      velocity = input.overallVelocityX;
    } else if (direction & _inputConsts.DIRECTION_VERTICAL) {
      velocity = input.overallVelocityY;
    }

    return super.attrTest(input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && (0, _utilsConsts.abs)(velocity) > this.options.velocity && input.eventType & _inputConsts.INPUT_END;
  }

  emit(input) {
    let direction = (0, _directionStr.default)(input.offsetDirection);

    if (direction) {
      this.manager.emit(this.options.event + direction, input);
    }

    this.manager.emit(this.options.event, input);
  }

}

exports.default = SwipeRecognizer;
SwipeRecognizer.prototype.defaults = {
  event: 'swipe',
  threshold: 10,
  velocity: 0.3,
  direction: _inputConsts.DIRECTION_HORIZONTAL | _inputConsts.DIRECTION_VERTICAL,
  pointers: 1
};
}, function(modId) { var map = {"../recognizers/attribute":1623251340096,"../utils/utils-consts":1623251340092,"../inputjs/input-consts":1623251340094,"./pan":1623251340109,"../recognizerjs/direction-str":1623251340110}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340109, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _attribute = _interopRequireDefault(require("./attribute"));

var _inputConsts = require("../inputjs/input-consts");

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

var _touchactionConsts = require("../touchactionjs/touchaction-Consts");

var _directionStr = _interopRequireDefault(require("../recognizerjs/direction-str"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
class PanRecognizer extends _attribute.default {
  constructor() {
    super(...arguments);
    this.pX = null;
    this.pY = null;
  }

  getTouchAction() {
    let {
      options: {
        direction
      }
    } = this;
    let actions = [];

    if (direction & _inputConsts.DIRECTION_HORIZONTAL) {
      actions.push(_touchactionConsts.TOUCH_ACTION_PAN_Y);
    }

    if (direction & _inputConsts.DIRECTION_VERTICAL) {
      actions.push(_touchactionConsts.TOUCH_ACTION_PAN_X);
    }

    return actions;
  }

  directionTest(input) {
    let {
      options
    } = this;
    let hasMoved = true;
    let {
      distance
    } = input;
    let {
      direction
    } = input;
    let x = input.deltaX;
    let y = input.deltaY; // lock to axis?

    if (!(direction & options.direction)) {
      if (options.direction & _inputConsts.DIRECTION_HORIZONTAL) {
        direction = x === 0 ? _inputConsts.DIRECTION_NONE : x < 0 ? _inputConsts.DIRECTION_LEFT : _inputConsts.DIRECTION_RIGHT;
        hasMoved = x !== this.pX;
        distance = Math.abs(input.deltaX);
      } else {
        direction = y === 0 ? _inputConsts.DIRECTION_NONE : y < 0 ? _inputConsts.DIRECTION_UP : _inputConsts.DIRECTION_DOWN;
        hasMoved = y !== this.pY;
        distance = Math.abs(input.deltaY);
      }
    }

    input.direction = direction;
    return hasMoved && distance > options.threshold && direction & options.direction;
  }

  attrTest(input) {
    return _attribute.default.prototype.attrTest.call(this, input) && ( // replace with a super call
    this.state & _recognizerConsts.STATE_BEGAN || !(this.state & _recognizerConsts.STATE_BEGAN) && this.directionTest(input));
  }

  emit(input) {
    this.pX = input.deltaX;
    this.pY = input.deltaY;
    let direction = (0, _directionStr.default)(input.direction);

    if (direction) {
      input.additionalEvent = this.options.event + direction;
    }

    super.emit(input);
  }

}

exports.default = PanRecognizer;
PanRecognizer.prototype.defaults = {
  event: 'pan',
  threshold: 10,
  pointers: 1,
  direction: _inputConsts.DIRECTION_ALL
};
}, function(modId) { var map = {"./attribute":1623251340096,"../inputjs/input-consts":1623251340094,"../recognizerjs/recognizer-consts":1623251340098,"../touchactionjs/touchaction-Consts":1623251340091,"../recognizerjs/direction-str":1623251340110}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340110, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = directionStr;

var _inputConsts = require("../inputjs/input-consts");

/**
 * @private
 * direction cons to string
 * @param {constant} direction
 * @returns {String}
 */
function directionStr(direction) {
  if (direction === _inputConsts.DIRECTION_DOWN) {
    return 'down';
  } else if (direction === _inputConsts.DIRECTION_UP) {
    return 'up';
  } else if (direction === _inputConsts.DIRECTION_LEFT) {
    return 'left';
  } else if (direction === _inputConsts.DIRECTION_RIGHT) {
    return 'right';
  }

  return '';
}
}, function(modId) { var map = {"../inputjs/input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340111, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setTimeoutContext = _interopRequireDefault(require("../utils/set-timeout-context"));

var _recognizerConstructor = _interopRequireDefault(require("../recognizerjs/recognizer-constructor"));

var _touchactionConsts = require("../touchactionjs/touchaction-Consts");

var _inputConsts = require("../inputjs/input-consts");

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

var _getDistance = _interopRequireDefault(require("../inputjs/get-distance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
class TapRecognizer extends _recognizerConstructor.default {
  constructor() {
    super(...arguments); // previous time and center,
    // used for tap counting

    this.pTime = false;
    this.pCenter = false;
    this._timer = null;
    this._input = null;
    this.count = 0;
  }

  getTouchAction() {
    return [_touchactionConsts.TOUCH_ACTION_MANIPULATION];
  }

  process(input) {
    let {
      options
    } = this;
    let validPointers = input.pointers.length === options.pointers;
    let validMovement = input.distance < options.threshold;
    let validTouchTime = input.deltaTime < options.time;
    this.reset();

    if (input.eventType & _inputConsts.INPUT_START && this.count === 0) {
      return this.failTimeout();
    } // we only allow little movement
    // and we've reached an end event, so a tap is possible


    if (validMovement && validTouchTime && validPointers) {
      if (input.eventType !== _inputConsts.INPUT_END) {
        return this.failTimeout();
      }

      let validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
      let validMultiTap = !this.pCenter || (0, _getDistance.default)(this.pCenter, input.center) < options.posThreshold;
      this.pTime = input.timeStamp;
      this.pCenter = input.center;

      if (!validMultiTap || !validInterval) {
        this.count = 1;
      } else {
        this.count += 1;
      }

      this._input = input; // if tap count matches we have recognized it,
      // else it has began recognizing...

      let tapCount = this.count % options.taps;

      if (tapCount === 0) {
        // no failing requirements, immediately trigger the tap event
        // or wait as long as the multitap interval to trigger
        if (!this.hasRequireFailures()) {
          return _recognizerConsts.STATE_RECOGNIZED;
        } else {
          this._timer = (0, _setTimeoutContext.default)(() => {
            this.state = _recognizerConsts.STATE_RECOGNIZED;
            this.tryEmit();
          }, options.interval, this);
          return _recognizerConsts.STATE_BEGAN;
        }
      }
    }

    return _recognizerConsts.STATE_FAILED;
  }

  failTimeout() {
    this._timer = (0, _setTimeoutContext.default)(() => {
      this.state = _recognizerConsts.STATE_FAILED;
    }, this.options.interval, this);
    return _recognizerConsts.STATE_FAILED;
  }

  reset() {
    clearTimeout(this._timer);
  }

  emit() {
    if (this.state === _recognizerConsts.STATE_RECOGNIZED) {
      this._input.tapCount = this.count;
      this.manager.emit(this.options.event, this._input);
    }
  }

}

exports.default = TapRecognizer;
TapRecognizer.prototype.defaults = {
  event: 'tap',
  pointers: 1,
  taps: 1,
  interval: 300,
  // max time between the multi-tap taps
  time: 250,
  // max time of the pointer to be down (like finger on the screen)
  threshold: 9,
  // a minimal movement is ok, but keep it low
  posThreshold: 10 // a multi-tap can be a bit off the initial position

};
}, function(modId) { var map = {"../utils/set-timeout-context":1623251340112,"../recognizerjs/recognizer-constructor":1623251340097,"../touchactionjs/touchaction-Consts":1623251340091,"../inputjs/input-consts":1623251340094,"../recognizerjs/recognizer-consts":1623251340098,"../inputjs/get-distance":1623251340114}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340112, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTimeoutContext;

var _bindFn = _interopRequireDefault(require("./bind-fn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
  return setTimeout((0, _bindFn.default)(fn, context), timeout);
}
}, function(modId) { var map = {"./bind-fn":1623251340113}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340113, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindFn;

/**
 * @private
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
  return function boundFn() {
    return fn.apply(context, arguments);
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340114, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDistance;

var _inputConsts = require("./input-consts");

/**
 * @private
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
  if (!props) {
    props = _inputConsts.PROPS_XY;
  }

  let x = p2[props[0]] - p1[props[0]];
  let y = p2[props[1]] - p1[props[1]];
  return Math.sqrt(x * x + y * y);
}
}, function(modId) { var map = {"./input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340115, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _recognizerConstructor = _interopRequireDefault(require("../recognizerjs/recognizer-constructor"));

var _recognizerConsts = require("../recognizerjs/recognizer-consts");

var _utilsConsts = require("../utils/utils-consts");

var _setTimeoutContext = _interopRequireDefault(require("../utils/set-timeout-context"));

var _touchactionConsts = require("../touchactionjs/touchaction-Consts");

var _inputConsts = require("../inputjs/input-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
class PressRecognizer extends _recognizerConstructor.default {
  constructor() {
    super(...arguments);
    this._timer = null;
    this._input = null;
  }

  getTouchAction() {
    return [_touchactionConsts.TOUCH_ACTION_AUTO];
  }

  process(input) {
    let {
      options
    } = this;
    let validPointers = input.pointers.length === options.pointers;
    let validMovement = input.distance < options.threshold;
    let validTime = input.deltaTime > options.time;
    this._input = input; // we only allow little movement
    // and we've reached an end event, so a tap is possible

    if (!validMovement || !validPointers || input.eventType & (_inputConsts.INPUT_END | _inputConsts.INPUT_CANCEL) && !validTime) {
      this.reset();
    } else if (input.eventType & _inputConsts.INPUT_START) {
      this.reset();
      this._timer = (0, _setTimeoutContext.default)(() => {
        this.state = _recognizerConsts.STATE_RECOGNIZED;
        this.tryEmit();
      }, options.time, this);
    } else if (input.eventType & _inputConsts.INPUT_END) {
      return _recognizerConsts.STATE_RECOGNIZED;
    }

    return _recognizerConsts.STATE_FAILED;
  }

  reset() {
    clearTimeout(this._timer);
  }

  emit(input) {
    if (this.state !== _recognizerConsts.STATE_RECOGNIZED) {
      return;
    }

    if (input && input.eventType & _inputConsts.INPUT_END) {
      this.manager.emit(`${this.options.event}up`, input);
    } else {
      this._input.timeStamp = (0, _utilsConsts.now)();
      this.manager.emit(this.options.event, this._input);
    }
  }

}

exports.default = PressRecognizer;
PressRecognizer.prototype.defaults = {
  event: 'press',
  pointers: 1,
  time: 251,
  // minimal time of the pointer to be pressed
  threshold: 9 // a minimal movement is ok, but keep it low

};
}, function(modId) { var map = {"../recognizerjs/recognizer-constructor":1623251340097,"../recognizerjs/recognizer-consts":1623251340098,"../utils/utils-consts":1623251340092,"../utils/set-timeout-context":1623251340112,"../touchactionjs/touchaction-Consts":1623251340091,"../inputjs/input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340116, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _assign = _interopRequireDefault(require("./utils/assign"));

var _hammer = _interopRequireDefault(require("./hammer"));

var _touchactionConstructor = _interopRequireDefault(require("./touchactionjs/touchaction-constructor"));

var _createInputInstance = _interopRequireDefault(require("./inputjs/create-input-instance"));

var _each = _interopRequireDefault(require("./utils/each"));

var _inArray = _interopRequireDefault(require("./utils/in-array"));

var _invokeArrayArg = _interopRequireDefault(require("./utils/invoke-array-arg"));

var _splitStr = _interopRequireDefault(require("./utils/split-str"));

var _recognizerConstructor = _interopRequireDefault(require("./recognizerjs/recognizer-constructor"));

var _recognizerConsts = require("./recognizerjs/recognizer-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const STOP = 1;
const FORCED_STOP = 2;
/**
 * @private
 * Manager
 * @param {Object} [options]
 * @constructor
 */

class Manager {
  constructor(options) {
    this.options = (0, _assign.default)({}, _hammer.default.defaults, options || {});
    this.handlers = {};
    this.filters = [];
    this.session = {};
    this.recognizers = [];
    this.input = (0, _createInputInstance.default)(this);
    this.touchAction = new _touchactionConstructor.default(this, this.options.touchAction);
    (0, _each.default)(this.options.recognizers, item => {
      let recognizer = this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @returns {Manager}
   */


  set(options) {
    (0, _assign.default)(this.options, options); // Options that need a little more setup

    if (options.touchAction) {
      this.touchAction.update();
    }

    return this;
  }
  /**
   * @private
   * stop recognizing for this session.
   * This session will be discarded, when a new [input]start event is fired.
   * When forced, the recognizer cycle is stopped immediately.
   * @param {Boolean} [force]
   */


  stop(force) {
    this.session.stopped = force ? FORCED_STOP : STOP;
  }
  /**
   * @private
   * add event filters
   */


  addFilter(filter) {
    if (typeof filter !== 'function') {
      throw new Error('filter must be a function');
    }

    this.filters.push(filter);
  }
  /**
   * @private
   * run the recognizers!
   * called by the inputHandler function on every movement of the pointers (touches)
   * it walks through all the recognizers and tries to detect the gesture that is being made
   * @param {Object} inputData
   */


  recognize(inputData) {
    let {
      session
    } = this;

    if (session.stopped) {
      return;
    } // run the touch-action polyfill


    this.touchAction.preventDefaults(inputData);
    let recognizer;
    let {
      recognizers
    } = this; // this holds the recognizer that is being recognized.
    // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
    // if no recognizer is detecting a thing, it is set to `null`

    let {
      curRecognizer
    } = session; // reset when the last recognizer is recognized
    // or when we're in a new session

    if (!curRecognizer || curRecognizer && curRecognizer.state & _recognizerConsts.STATE_RECOGNIZED) {
      curRecognizer = session.curRecognizer = null;
    }

    let i = 0;

    while (i < recognizers.length) {
      recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
      // 1.   allow if the session is NOT forced stopped (see the .stop() method)
      // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
      //      that is being recognized.
      // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
      //      this can be setup with the `recognizeWith()` method on the recognizer.

      if (session.stopped !== FORCED_STOP && ( // 1
      !curRecognizer || recognizer === curRecognizer || // 2
      recognizer.canRecognizeWith(curRecognizer))) {
        // 3
        recognizer.recognize(inputData);
      } else {
        recognizer.reset();
      } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
      // current active recognizer. but only if we don't already have an active recognizer


      if (!curRecognizer && recognizer.state & (_recognizerConsts.STATE_BEGAN | _recognizerConsts.STATE_CHANGED | _recognizerConsts.STATE_ENDED)) {
        curRecognizer = session.curRecognizer = recognizer;
      }

      i++;
    }
  }
  /**
   * @private
   * get a recognizer by its event name.
   * @param {Recognizer|String} recognizer
   * @returns {Recognizer|Null}
   */


  get(recognizer) {
    if (recognizer instanceof _recognizerConstructor.default) {
      return recognizer;
    }

    let {
      recognizers
    } = this;

    for (let i = 0; i < recognizers.length; i++) {
      if (recognizers[i].options.event === recognizer) {
        return recognizers[i];
      }
    }

    return null;
  }
  /**
   * @private add a recognizer to the manager
   * existing recognizers with the same event name will be removed
   * @param {Recognizer} recognizer
   * @returns {Recognizer|Manager}
   */


  add(recognizer) {
    if ((0, _invokeArrayArg.default)(recognizer, 'add', this)) {
      return this;
    } // remove existing


    let existing = this.get(recognizer.options.event);

    if (existing) {
      this.remove(existing);
    }

    this.recognizers.push(recognizer);
    recognizer.manager = this;
    this.touchAction.update();
    return recognizer;
  }
  /**
   * @private
   * remove a recognizer by name or instance
   * @param {Recognizer|String} recognizer
   * @returns {Manager}
   */


  remove(recognizer) {
    if ((0, _invokeArrayArg.default)(recognizer, 'remove', this)) {
      return this;
    }

    recognizer = this.get(recognizer); // let's make sure this recognizer exists

    if (recognizer) {
      let {
        recognizers
      } = this;
      let index = (0, _inArray.default)(recognizers, recognizer);

      if (index !== -1) {
        recognizers.splice(index, 1);
        this.touchAction.update();
      }
    }

    return this;
  }
  /**
   * @private
   * bind event
   * @param {String} events
   * @param {Function} handler
   * @returns {EventEmitter} this
   */


  on(events, handler) {
    if (events === undefined) {
      return;
    }

    if (handler === undefined) {
      return;
    }

    let {
      handlers
    } = this;
    (0, _each.default)((0, _splitStr.default)(events), event => {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    });
    return this;
  }
  /**
   * @private unbind event, leave emit blank to remove all handlers
   * @param {String} events
   * @param {Function} [handler]
   * @returns {EventEmitter} this
   */


  off(events, handler) {
    if (events === undefined) {
      return;
    }

    let {
      handlers
    } = this;
    (0, _each.default)((0, _splitStr.default)(events), event => {
      if (!handler) {
        delete handlers[event];
      } else {
        handlers[event] && handlers[event].splice((0, _inArray.default)(handlers[event], handler), 1);
      }
    });
    return this;
  }
  /**
   * @private emit event to the listeners
   * @param {String} event
   * @param {Object} data
   */


  emit(event, data) {
    // no handlers, so skip it all
    let handlers = this.handlers[event] && this.handlers[event].slice();
    const {
      filters
    } = this;

    if (!handlers || !handlers.length) {
      return;
    } //let i = 0;
    //let newData = Object.assign(data);
    //data.type = event;
    //data.preventDefault = function() {
    //  data.srcEvent.preventDefault();
    //};
    //while (i < filters.length) {
    //  newData = filters[i](newData);
    //  i++;
    //}
    //


    if (!event.startsWith('origin_input')) {
      data.type = event;

      data.preventDefault = function () {
        data.srcEvent.preventDefault();
      };
    }

    let i = 0;

    while (i < handlers.length) {
      handlers[i](data);
      i++;
    }
  }
  /**
   * @private
   * destroy the manager and unbinds all events
   * it doesn't unbind dom events, that is the user own responsibility
   */


  destroy() {
    this.handlers = {};
    this.filters = [];
    this.session = {};
    this.input.destroy();
  }

}

exports.default = Manager;
}, function(modId) { var map = {"./utils/assign":1623251340099,"./hammer":1623251340089,"./touchactionjs/touchaction-constructor":1623251340117,"./inputjs/create-input-instance":1623251340120,"./utils/each":1623251340102,"./utils/in-array":1623251340103,"./utils/invoke-array-arg":1623251340101,"./utils/split-str":1623251340136,"./recognizerjs/recognizer-constructor":1623251340097,"./recognizerjs/recognizer-consts":1623251340098}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340117, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _touchactionConsts = require("./touchaction-Consts");

var _inputConsts = require("../inputjs/input-consts");

var _each = _interopRequireDefault(require("../utils/each"));

var _boolOrFn = _interopRequireDefault(require("../utils/bool-or-fn"));

var _inStr = _interopRequireDefault(require("../utils/in-str"));

var _cleanTouchActions = _interopRequireDefault(require("./clean-touch-actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
class TouchAction {
  constructor(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  /**
   * @private
   * set the touchAction value on the element or enable the polyfill
   * @param {String} value
   */


  set(value) {
    // find out the touch-action by the event handlers
    if (value === _touchactionConsts.TOUCH_ACTION_COMPUTE) {
      value = this.compute();
    }

    this.actions = value.toLowerCase().trim();
  }
  /**
   * @private
   * just re-set the touchAction value
   */


  update() {
    this.set(this.manager.options.touchAction);
  }
  /**
   * @private
   * compute the value for the touchAction property based on the recognizer's settings
   * @returns {String} value
   */


  compute() {
    let actions = [];
    (0, _each.default)(this.manager.recognizers, recognizer => {
      if ((0, _boolOrFn.default)(recognizer.options.enable, [recognizer])) {
        actions = actions.concat(recognizer.getTouchAction());
      }
    });
    return (0, _cleanTouchActions.default)(actions.join(' '));
  }
  /**
   * @private
   * this method is called on each input cycle and provides the preventing of the browser behavior
   * @param {Object} input
   */


  preventDefaults(input) {
    let {
      srcEvent
    } = input;
    let direction = input.offsetDirection; // if the touch action did prevented once this session

    if (this.manager.session.prevented) {
      srcEvent.preventDefault();
      return;
    }

    let {
      actions
    } = this;
    let hasNone = (0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_NONE) && !_touchactionConsts.TOUCH_ACTION_MAP[_touchactionConsts.TOUCH_ACTION_NONE];
    let hasPanY = (0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_PAN_Y) && !_touchactionConsts.TOUCH_ACTION_MAP[_touchactionConsts.TOUCH_ACTION_PAN_Y];
    let hasPanX = (0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_PAN_X) && !_touchactionConsts.TOUCH_ACTION_MAP[_touchactionConsts.TOUCH_ACTION_PAN_X];

    if (hasNone) {
      // do not prevent defaults if this is a tap gesture
      let isTapPointer = input.pointers.length === 1;
      let isTapMovement = input.distance < 2;
      let isTapTouchTime = input.deltaTime < 250;

      if (isTapPointer && isTapMovement && isTapTouchTime) {
        return;
      }
    }

    if (hasPanX && hasPanY) {
      // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
      return;
    }

    if (hasNone || hasPanY && direction & _inputConsts.DIRECTION_HORIZONTAL || hasPanX && direction & _inputConsts.DIRECTION_VERTICAL) {
      return this.preventSrc(srcEvent);
    }
  }
  /**
   * @private
   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param {Object} srcEvent
   */


  preventSrc(srcEvent) {
    this.manager.session.prevented = true;
    srcEvent.preventDefault();
  }

}

exports.default = TouchAction;
}, function(modId) { var map = {"./touchaction-Consts":1623251340091,"../inputjs/input-consts":1623251340094,"../utils/each":1623251340102,"../utils/bool-or-fn":1623251340104,"../utils/in-str":1623251340118,"./clean-touch-actions":1623251340119}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340118, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inStr;

/**
 * @private
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
  return str.indexOf(find) > -1;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340119, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanTouchActions;

var _inStr = _interopRequireDefault(require("../utils/in-str"));

var _touchactionConsts = require("./touchaction-Consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
  // none
  if ((0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_NONE)) {
    return _touchactionConsts.TOUCH_ACTION_NONE;
  }

  let hasPanX = (0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_PAN_X);
  let hasPanY = (0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
  // for different directions, e.g. horizontal pan but vertical swipe?)
  // we need none (as otherwise with pan-x pan-y combined none of these
  // recognizers will work, since the browser would handle all panning

  if (hasPanX && hasPanY) {
    return _touchactionConsts.TOUCH_ACTION_NONE;
  } // pan-x OR pan-y


  if (hasPanX || hasPanY) {
    return hasPanX ? _touchactionConsts.TOUCH_ACTION_PAN_X : _touchactionConsts.TOUCH_ACTION_PAN_Y;
  } // manipulation


  if ((0, _inStr.default)(actions, _touchactionConsts.TOUCH_ACTION_MANIPULATION)) {
    return _touchactionConsts.TOUCH_ACTION_MANIPULATION;
  }

  return _touchactionConsts.TOUCH_ACTION_AUTO;
}
}, function(modId) { var map = {"../utils/in-str":1623251340118,"./touchaction-Consts":1623251340091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340120, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createInputInstance;

var _inputHandler = _interopRequireDefault(require("./input-handler"));

var _touch = _interopRequireDefault(require("../input/touch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
  let Type = _touch.default;

  if (manager.options.inputClass) {
    Type = inputClass;
  }

  return new Type(manager, _inputHandler.default);
}
}, function(modId) { var map = {"./input-handler":1623251340121,"../input/touch":1623251340133}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340121, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inputHandler;

var _inputConsts = require("./input-consts");

var _computeInputData = _interopRequireDefault(require("./compute-input-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
  let pointersLen = input.pointers.length;
  let changedPointersLen = input.changedPointers.length;
  let isFirst = eventType & _inputConsts.INPUT_START && pointersLen - changedPointersLen === 0;
  let isFinal = eventType & (_inputConsts.INPUT_END | _inputConsts.INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
  input.isFirst = !!isFirst;
  input.isFinal = !!isFinal;

  if (isFirst) {
    manager.session = {};
  } // source event is the normalized value of the domEvents
  // like 'touchstart, mouseup, pointerdown'


  input.eventType = eventType; // compute scale, rotation etc

  (0, _computeInputData.default)(manager, input); // emit secret event

  manager.emit('hammer.input', input);
  manager.recognize(input);
  manager.session.prevInput = input;
}
}, function(modId) { var map = {"./input-consts":1623251340094,"./compute-input-data":1623251340122}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340122, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeInputData;

var _utilsConsts = require("../utils/utils-consts");

var _hasParent = _interopRequireDefault(require("../utils/has-parent"));

var _simpleCloneInputData = _interopRequireDefault(require("./simple-clone-input-data"));

var _getCenter = _interopRequireDefault(require("./get-center"));

var _getDistance = _interopRequireDefault(require("./get-distance"));

var _getAngle = _interopRequireDefault(require("./get-angle"));

var _getDirection = _interopRequireDefault(require("./get-direction"));

var _computeDeltaXy = _interopRequireDefault(require("./compute-delta-xy"));

var _getVelocity = _interopRequireDefault(require("./get-velocity"));

var _getScale = _interopRequireDefault(require("./get-scale"));

var _getRotation = _interopRequireDefault(require("./get-rotation"));

var _computeIntervalInputData = _interopRequireDefault(require("./compute-interval-input-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
  let {
    session
  } = manager;
  let {
    pointers
  } = input;
  let {
    length: pointersLength
  } = pointers; // store the first input to calculate the distance and direction

  if (!session.firstInput) {
    session.firstInput = (0, _simpleCloneInputData.default)(input);
  } // to compute scale and rotation we need to store the multiple touches


  if (pointersLength > 1 && !session.firstMultiple) {
    session.firstMultiple = (0, _simpleCloneInputData.default)(input);
  } else if (pointersLength === 1) {
    session.firstMultiple = false;
  }

  let {
    firstInput,
    firstMultiple
  } = session;
  let offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
  let center = input.center = (0, _getCenter.default)(pointers);
  input.timeStamp = (0, _utilsConsts.now)();
  input.deltaTime = input.timeStamp - firstInput.timeStamp;
  input.angle = (0, _getAngle.default)(offsetCenter, center);
  input.distance = (0, _getDistance.default)(offsetCenter, center);
  (0, _computeDeltaXy.default)(session, input);
  input.offsetDirection = (0, _getDirection.default)(input.deltaX, input.deltaY);
  let overallVelocity = (0, _getVelocity.default)(input.deltaTime, input.deltaX, input.deltaY);
  input.overallVelocityX = overallVelocity.x;
  input.overallVelocityY = overallVelocity.y;
  input.overallVelocity = (0, _utilsConsts.abs)(overallVelocity.x) > (0, _utilsConsts.abs)(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
  input.scale = firstMultiple ? (0, _getScale.default)(firstMultiple.pointers, pointers) : 1;
  input.rotation = firstMultiple ? (0, _getRotation.default)(firstMultiple.pointers, pointers) : 0;
  input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
  (0, _computeIntervalInputData.default)(session, input);
}
}, function(modId) { var map = {"../utils/utils-consts":1623251340092,"../utils/has-parent":1623251340123,"./simple-clone-input-data":1623251340124,"./get-center":1623251340125,"./get-distance":1623251340114,"./get-angle":1623251340126,"./get-direction":1623251340127,"./compute-delta-xy":1623251340128,"./get-velocity":1623251340129,"./get-scale":1623251340130,"./get-rotation":1623251340131,"./compute-interval-input-data":1623251340132}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340123, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasParent;

/**
 * @private
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
  while (node) {
    if (node === parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340124, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simpleCloneInputData;

var _utilsConsts = require("../utils/utils-consts");

var _getCenter = _interopRequireDefault(require("./get-center"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
  // make a simple copy of the pointers because we will get a reference if we don't
  // we only need clientXY for the calculations
  let pointers = [];
  let i = 0;

  while (i < input.pointers.length) {
    pointers[i] = {
      clientX: (0, _utilsConsts.round)(input.pointers[i].clientX),
      clientY: (0, _utilsConsts.round)(input.pointers[i].clientY)
    };
    i++;
  }

  return {
    timeStamp: (0, _utilsConsts.now)(),
    pointers,
    center: (0, _getCenter.default)(pointers),
    deltaX: input.deltaX,
    deltaY: input.deltaY
  };
}
}, function(modId) { var map = {"../utils/utils-consts":1623251340092,"./get-center":1623251340125}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340125, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCenter;

var _utilsConsts = require("../utils/utils-consts");

/**
 * @private
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
  let pointersLength = pointers.length; // no need to loop when only one touch

  if (pointersLength === 1) {
    return {
      x: (0, _utilsConsts.round)(pointers[0].clientX),
      y: (0, _utilsConsts.round)(pointers[0].clientY)
    };
  }

  let x = 0;
  let y = 0;
  let i = 0;

  while (i < pointersLength) {
    x += pointers[i].clientX;
    y += pointers[i].clientY;
    i++;
  }

  return {
    x: (0, _utilsConsts.round)(x / pointersLength),
    y: (0, _utilsConsts.round)(y / pointersLength)
  };
}
}, function(modId) { var map = {"../utils/utils-consts":1623251340092}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340126, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAngle;

var _inputConsts = require("./input-consts");

/**
 * @private
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
  if (!props) {
    props = _inputConsts.PROPS_XY;
  }

  let x = p2[props[0]] - p1[props[0]];
  let y = p2[props[1]] - p1[props[1]];
  return Math.atan2(y, x) * 180 / Math.PI;
}
}, function(modId) { var map = {"./input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340127, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDirection;

var _utilsConsts = require("../utils/utils-consts");

var _inputConsts = require("./input-consts");

/**
 * @private
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
  if (x === y) {
    return _inputConsts.DIRECTION_NONE;
  }

  if ((0, _utilsConsts.abs)(x) >= (0, _utilsConsts.abs)(y)) {
    return x < 0 ? _inputConsts.DIRECTION_LEFT : _inputConsts.DIRECTION_RIGHT;
  }

  return y < 0 ? _inputConsts.DIRECTION_UP : _inputConsts.DIRECTION_DOWN;
}
}, function(modId) { var map = {"../utils/utils-consts":1623251340092,"./input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340128, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeDeltaXY;

var _inputConsts = require("./input-consts");

function computeDeltaXY(session, input) {
  let {
    center
  } = input; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
  // jscs throwing error on defalut destructured values and without defaults tests fail

  let offset = session.offsetDelta || {};
  let prevDelta = session.prevDelta || {};
  let prevInput = session.prevInput || {};

  if (input.eventType === _inputConsts.INPUT_START || prevInput.eventType === _inputConsts.INPUT_END) {
    prevDelta = session.prevDelta = {
      x: prevInput.deltaX || 0,
      y: prevInput.deltaY || 0
    };
    offset = session.offsetDelta = {
      x: center.x,
      y: center.y
    };
  }

  input.deltaX = prevDelta.x + (center.x - offset.x);
  input.deltaY = prevDelta.y + (center.y - offset.y);
}
}, function(modId) { var map = {"./input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340129, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVelocity;

/**
 * @private
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
  return {
    x: x / deltaTime || 0,
    y: y / deltaTime || 0
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340130, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScale;

var _inputConsts = require("./input-consts");

var _getDistance = _interopRequireDefault(require("./get-distance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
  return (0, _getDistance.default)(end[0], end[1], _inputConsts.PROPS_CLIENT_XY) / (0, _getDistance.default)(start[0], start[1], _inputConsts.PROPS_CLIENT_XY);
}
}, function(modId) { var map = {"./input-consts":1623251340094,"./get-distance":1623251340114}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340131, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRotation;

var _getAngle = _interopRequireDefault(require("./get-angle"));

var _inputConsts = require("./input-consts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
  return (0, _getAngle.default)(end[1], end[0], _inputConsts.PROPS_CLIENT_XY) + (0, _getAngle.default)(start[1], start[0], _inputConsts.PROPS_CLIENT_XY);
}
}, function(modId) { var map = {"./get-angle":1623251340126,"./input-consts":1623251340094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340132, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeIntervalInputData;

var _inputConsts = require("./input-consts");

var _utilsConsts = require("../utils/utils-consts");

var _getVelocity = _interopRequireDefault(require("./get-velocity"));

var _getDirection = _interopRequireDefault(require("./get-direction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
  let last = session.lastInterval || input;
  let deltaTime = input.timeStamp - last.timeStamp;
  let velocity;
  let velocityX;
  let velocityY;
  let direction;

  if (input.eventType !== _inputConsts.INPUT_CANCEL && (deltaTime > _inputConsts.COMPUTE_INTERVAL || last.velocity === undefined)) {
    let deltaX = input.deltaX - last.deltaX;
    let deltaY = input.deltaY - last.deltaY;
    let v = (0, _getVelocity.default)(deltaTime, deltaX, deltaY);
    velocityX = v.x;
    velocityY = v.y;
    velocity = (0, _utilsConsts.abs)(v.x) > (0, _utilsConsts.abs)(v.y) ? v.x : v.y;
    direction = (0, _getDirection.default)(deltaX, deltaY);
    session.lastInterval = input;
  } else {
    // use latest velocity info if it doesn't overtake a minimum period
    velocity = last.velocity;
    velocityX = last.velocityX;
    velocityY = last.velocityY;
    direction = last.direction;
  }

  input.velocity = velocity;
  input.velocityX = velocityX;
  input.velocityY = velocityY;
  input.direction = direction;
}
}, function(modId) { var map = {"./input-consts":1623251340094,"../utils/utils-consts":1623251340092,"./get-velocity":1623251340129,"./get-direction":1623251340127}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340133, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputConsts = require("../inputjs/input-consts");

var _inputConstructor = _interopRequireDefault(require("../inputjs/input-constructor"));

var _toArray = _interopRequireDefault(require("../utils/to-array"));

var _hasParent = _interopRequireDefault(require("../utils/has-parent"));

var _uniqueArray = _interopRequireDefault(require("../utils/unique-array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOUCH_INPUT_MAP = {
  touchstart: _inputConsts.INPUT_START,
  touchmove: _inputConsts.INPUT_MOVE,
  touchend: _inputConsts.INPUT_END,
  touchcancel: _inputConsts.INPUT_CANCEL
};
const TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * @private
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */

class TouchInput extends _inputConstructor.default {
  constructor() {
    TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
    TouchInput.prototype.targetIds = {};
    TouchInput.prototype.events = TOUCH_TARGET_EVENTS;
    super(...arguments);
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};
  }

  handler(ev) {
    let type = TOUCH_INPUT_MAP[ev.type];
    let touches = getTouches.call(this, ev, type);

    if (!touches) {
      return;
    }

    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: _inputConsts.INPUT_TYPE_TOUCH,
      srcEvent: ev
    });
  }

}
/**
 * @private
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */


exports.default = TouchInput;

function getTouches(ev, type) {
  let allTouches = (0, _toArray.default)(ev.touches);
  let {
    targetIds
  } = this; // when there is only one touch, the process can be simplified

  if (type & (_inputConsts.INPUT_START | _inputConsts.INPUT_MOVE) && allTouches.length === 1) {
    targetIds[allTouches[0].identifier] = true;
    return [allTouches, allTouches];
  }

  let i;
  let targetTouches;
  let changedTouches = (0, _toArray.default)(ev.changedTouches);
  let changedTargetTouches = [];
  let {
    target
  } = this; //// get target touches from touches 小程序下targets是空，不太需要
  //targetTouches = allTouches.filter((touch) => {
  //  return hasParent(touch.target, target);
  //});

  targetTouches = allTouches; // collect touches

  if (type === _inputConsts.INPUT_START) {
    i = 0;

    while (i < targetTouches.length) {
      targetIds[targetTouches[i].identifier] = true;
      i++;
    }
  } // filter changed touches to only contain touches that exist in the collected target ids


  i = 0;

  while (i < changedTouches.length) {
    if (targetIds[changedTouches[i].identifier]) {
      changedTargetTouches.push(changedTouches[i]);
    } // cleanup removed touches


    if (type & (_inputConsts.INPUT_END | _inputConsts.INPUT_CANCEL)) {
      delete targetIds[changedTouches[i].identifier];
    }

    i++;
  }

  if (!changedTargetTouches.length) {
    return;
  }

  return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
  (0, _uniqueArray.default)(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
}
}, function(modId) { var map = {"../inputjs/input-consts":1623251340094,"../inputjs/input-constructor":1623251340134,"../utils/to-array":1623251340137,"../utils/has-parent":1623251340123,"../utils/unique-array":1623251340138}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340134, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _boolOrFn = _interopRequireDefault(require("../utils/bool-or-fn"));

var _addEventListeners = require("../utils/add-event-listeners");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
class Input {
  constructor(manager, callback) {
    let self = this;
    this.manager = manager;
    this.callback = callback; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.

    this.eventHandler = function (ev) {
      if ((0, _boolOrFn.default)(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };

    this.init();
  }
  /**
   * @private
   * should handle the inputEvent data and trigger the callback
   * @virtual
   */


  handler() {}
  /**
   * @private
   */


  init() {
    (0, _addEventListeners.addManagerListeners)(this.manager, this.events || '', this.eventHandler);
  }
  /**
   * @private
   */


  destroy() {
    removeManagerListeners(this.manager, this.events || '', this.eventHandler);
  }

}

exports.default = Input;
}, function(modId) { var map = {"../utils/bool-or-fn":1623251340104,"../utils/add-event-listeners":1623251340135}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340135, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListeners;
exports.addManagerListeners = addManagerListeners;

var _each = _interopRequireDefault(require("./each"));

var _splitStr = _interopRequireDefault(require("./split-str"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
  (0, _each.default)((0, _splitStr.default)(types), type => {
    target.addEventListener(type, handler, false);
  });
}

function addManagerListeners(manager, types, handler) {
  (0, _each.default)((0, _splitStr.default)(types), type => {
    manager.on(`origin_input:${type}`, handler);
  });
}
}, function(modId) { var map = {"./each":1623251340102,"./split-str":1623251340136}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340136, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitStr;

/**
 * @private
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
  return str.trim().split(/\s+/g);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340137, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

/**
 * @private
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
  return Array.prototype.slice.call(obj, 0);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340138, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueArray;

var _inArray = _interopRequireDefault(require("./in-array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
  let results = [];
  let values = [];
  let i = 0;

  while (i < src.length) {
    let val = key ? src[i][key] : src[i];

    if ((0, _inArray.default)(values, val) < 0) {
      results.push(src[i]);
    }

    values[i] = val;
    i++;
  }

  if (sort) {
    if (!key) {
      results = results.sort();
    } else {
      results = results.sort((a, b) => {
        return a[key] > b[key];
      });
    }
  }

  return results;
}
}, function(modId) { var map = {"./in-array":1623251340103}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340139, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inputConsts = require("../inputjs/input-consts");

var _inputConstructor = _interopRequireDefault(require("../inputjs/input-constructor"));

var _inArray = _interopRequireDefault(require("../utils/in-array"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const POINTER_INPUT_MAP = {
  pointerdown: _inputConsts.INPUT_START,
  pointermove: _inputConsts.INPUT_MOVE,
  pointerup: _inputConsts.INPUT_END,
  pointercancel: _inputConsts.INPUT_CANCEL,
  pointerout: _inputConsts.INPUT_CANCEL
}; // in IE10 the pointer types is defined as an enum

const IE10_POINTER_TYPE_ENUM = {
  2: _inputConsts.INPUT_TYPE_TOUCH,
  3: _inputConsts.INPUT_TYPE_PEN,
  4: _inputConsts.INPUT_TYPE_MOUSE,
  5: _inputConsts.INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

};
let POINTER_ELEMENT_EVENTS = 'pointerdown';
let POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
/**
 * @private
 * Pointer events input
 * @constructor
 * @extends Input
 */

class PointerEventInput extends _inputConstructor.default {
  constructor() {
    PointerEventInput.prototype.events = `${POINTER_ELEMENT_EVENTS} ${POINTER_WINDOW_EVENTS}`;
    super(...arguments);
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;
    this.store = this.manager.session.pointerEvents = [];
  }
  /**
   * @private
   * handle mouse events
   * @param {Object} ev
   */


  handler(ev) {
    let {
      store
    } = this;
    let removePointer = false;
    let eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
    let eventType = POINTER_INPUT_MAP[eventTypeNormalized];
    let pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
    let isTouch = pointerType === _inputConsts.INPUT_TYPE_TOUCH; // get index of the event in the store

    let storeIndex = (0, _inArray.default)(store, ev.pointerId, 'pointerId'); // start and mouse must be down

    if (eventType & _inputConsts.INPUT_START && (ev.button === 0 || isTouch)) {
      if (storeIndex < 0) {
        store.push(ev);
        storeIndex = store.length - 1;
      }
    } else if (eventType & (_inputConsts.INPUT_END | _inputConsts.INPUT_CANCEL)) {
      removePointer = true;
    } // it not found, so the pointer hasn't been down (so it's probably a hover)


    if (storeIndex < 0) {
      return;
    } // update the event in the store


    store[storeIndex] = ev;
    this.callback(this.manager, eventType, {
      pointers: store,
      changedPointers: [ev],
      pointerType,
      srcEvent: ev
    });

    if (removePointer) {
      // remove from the store
      store.splice(storeIndex, 1);
    }
  }

}

exports.default = PointerEventInput;
}, function(modId) { var map = {"../inputjs/input-consts":1623251340094,"../inputjs/input-constructor":1623251340134,"../utils/in-array":1623251340103}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340140, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeEventListeners;
exports.removeManagerListeners = removeManagerListeners;

var _each = _interopRequireDefault(require("./each"));

var _splitStr = _interopRequireDefault(require("./split-str"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
  (0, _each.default)((0, _splitStr.default)(types), type => {
    target.removeEventListener(type, handler, false);
  });
}

function removeManagerListeners(manager, types, handler) {
  (0, _each.default)((0, _splitStr.default)(types), type => {
    manager.off(`origin_input:${type}`, handler);
  });
}
}, function(modId) { var map = {"./each":1623251340102,"./split-str":1623251340136}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340141, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deprecate = _interopRequireDefault(require("./deprecate"));

var _extend = _interopRequireDefault(require("./extend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
const merge = (0, _deprecate.default)((dest, src) => {
  return (0, _extend.default)(dest, src, true);
}, 'merge', 'Use `assign`.');
var _default = merge;
exports.default = _default;
}, function(modId) { var map = {"./deprecate":1623251340142,"./extend":1623251340143}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340142, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecate;

/**
 * @private
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
  let deprecationMessage = `DEPRECATED METHOD: ${name}\n${message} AT \n`;
  return function () {
    let e = new Error('get-stack-trace');
    let stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
    let log = console.warn;

    if (log) {
      log(deprecationMessage, stack);
    }

    return method.apply(this, arguments);
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340143, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deprecate = _interopRequireDefault(require("./deprecate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
const extend = (0, _deprecate.default)((dest, src, merge) => {
  let keys = Object.keys(src);
  let i = 0;

  while (i < keys.length) {
    if (!merge || merge && dest[keys[i]] === undefined) {
      dest[keys[i]] = src[keys[i]];
    }

    i++;
  }

  return dest;
}, 'extend', 'Use `assign`.');
var _default = extend;
exports.default = _default;
}, function(modId) { var map = {"./deprecate":1623251340142}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340144, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherit;

var _assign = _interopRequireDefault(require("./assign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
  let baseP = base.prototype;
  let childP;
  childP = child.prototype = Object.create(baseP);
  childP.constructor = child;
  childP._super = baseP;

  if (properties) {
    (0, _assign.default)(childP, properties);
  }
}
}, function(modId) { var map = {"./assign":1623251340099}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1623251340088);
})()
//# sourceMappingURL=index.js.map