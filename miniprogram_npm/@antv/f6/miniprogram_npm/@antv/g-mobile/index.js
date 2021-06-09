module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1623251340054, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.getArcParams = exports.Shape = exports.Group = exports.Canvas = void 0;
var tslib_1 = require("tslib");
var Shape = require("./shape");
exports.Shape = Shape;
tslib_1.__exportStar(require("@antv/g-base"), exports);
var canvas_1 = require("./canvas");
Object.defineProperty(exports, "Canvas", { enumerable: true, get: function () { return canvas_1.default; } });
var group_1 = require("./group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return group_1.default; } });
var arc_params_1 = require("./util/arc-params");
Object.defineProperty(exports, "getArcParams", { enumerable: true, get: function () { return arc_params_1.default; } });
exports.version = '0.5.6';
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./shape":1623251340055,"./canvas":1623251340081,"./group":1623251340063,"./util/arc-params":1623251340061}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340055, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Rect = exports.Polyline = exports.Polygon = exports.Path = exports.Marker = exports.Line = exports.Image = exports.Ellipse = exports.Circle = exports.Base = void 0;
var base_1 = require("./base");
Object.defineProperty(exports, "Base", { enumerable: true, get: function () { return base_1.default; } });
var circle_1 = require("./circle");
Object.defineProperty(exports, "Circle", { enumerable: true, get: function () { return circle_1.default; } });
var ellipse_1 = require("./ellipse");
Object.defineProperty(exports, "Ellipse", { enumerable: true, get: function () { return ellipse_1.default; } });
var image_1 = require("./image");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return image_1.default; } });
var line_1 = require("./line");
Object.defineProperty(exports, "Line", { enumerable: true, get: function () { return line_1.default; } });
var marker_1 = require("./marker");
Object.defineProperty(exports, "Marker", { enumerable: true, get: function () { return marker_1.default; } });
var path_1 = require("./path");
Object.defineProperty(exports, "Path", { enumerable: true, get: function () { return path_1.default; } });
var polygon_1 = require("./polygon");
Object.defineProperty(exports, "Polygon", { enumerable: true, get: function () { return polygon_1.default; } });
var polyline_1 = require("./polyline");
Object.defineProperty(exports, "Polyline", { enumerable: true, get: function () { return polyline_1.default; } });
var rect_1 = require("./rect");
Object.defineProperty(exports, "Rect", { enumerable: true, get: function () { return rect_1.default; } });
var text_1 = require("./text");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return text_1.default; } });
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./base":1623251340056,"./circle":1623251340064,"./ellipse":1623251340065,"./image":1623251340066,"./line":1623251340067,"./marker":1623251340069,"./path":1623251340070,"./polygon":1623251340074,"./polyline":1623251340076,"./rect":1623251340077,"./text":1623251340080}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340056, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var g_base_1 = require("@antv/g-base");
var util_1 = require("../util/util");
var draw_1 = require("../util/draw");
var g_base_2 = require("@antv/g-base");
var Shape = require("./index");
var group_1 = require("../group");
var ShapeBase = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeBase, _super);
    function ShapeBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeBase.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        // 设置默认值
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { lineWidth: 1, lineAppendWidth: 0, strokeOpacity: 1, fillOpacity: 1 });
    };
    ShapeBase.prototype.getShapeBase = function () {
        return Shape;
    };
    ShapeBase.prototype.getGroupBase = function () {
        return group_1.default;
    };
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    ShapeBase.prototype.onCanvasChange = function (changeType) {
        draw_1.refreshElement(this, changeType);
    };
    ShapeBase.prototype.calculateBBox = function () {
        var type = this.get('type');
        var lineWidth = this.getHitLineWidth();
        // const attrs = this.attr();
        var bboxMethod = g_base_2.getBBoxMethod(type);
        var box = bboxMethod(this);
        var halfLineWidth = lineWidth / 2;
        var minX = box.x - halfLineWidth;
        var minY = box.y - halfLineWidth;
        var maxX = box.x + box.width + halfLineWidth;
        var maxY = box.y + box.height + halfLineWidth;
        return {
            x: minX,
            minX: minX,
            y: minY,
            minY: minY,
            width: box.width + lineWidth,
            height: box.height + lineWidth,
            maxX: maxX,
            maxY: maxY,
        };
    };
    ShapeBase.prototype.isFill = function () {
        return !!this.attrs['fill'] || this.isClipShape();
    };
    ShapeBase.prototype.isStroke = function () {
        return !!this.attrs['stroke'];
    };
    // 同 shape 中的方法重复了
    ShapeBase.prototype._applyClip = function (context, clip) {
        if (clip) {
            context.save();
            // 将 clip 的属性挂载到 context 上
            draw_1.applyAttrsToContext(context, clip);
            // 绘制 clip 路径
            clip.createPath(context);
            context.restore();
            // 裁剪
            context.clip();
            clip._afterDraw();
        }
    };
    // 绘制图形时需要考虑 region 限制
    ShapeBase.prototype.draw = function (context, region) {
        var clip = this.cfg.clipShape;
        // 如果指定了 region，同时不允许刷新时，直接返回
        if (region) {
            if (this.cfg.refresh === false) {
                // this._afterDraw();
                this.set('hasChanged', false);
                return;
            }
            // 是否相交需要考虑 clip 的包围盒
            var bbox = this.getCanvasBBox();
            if (!util_1.intersectRect(region, bbox)) {
                // 图形的包围盒与重绘区域不相交时，也需要清除标记
                this.set('hasChanged', false);
                // 存在多种情形需要更新 cacheCanvasBBox 和 isInview 的判定
                // 1. 之前图形在视窗内，但是现在不再视窗内
                // 2. 如果当前的图形以及父元素都没有发生过变化，refresh = false 不会走到这里，所以这里的图形都是父元素发生变化，但是没有在视图内的元素
                if (this.cfg.isInView) {
                    this._afterDraw();
                }
                return;
            }
        }
        context.save();
        // 先将 attrs 应用到上下文中，再设置 clip。因为 clip 应该被当前元素的 matrix 所影响
        draw_1.applyAttrsToContext(context, this);
        this._applyClip(context, clip);
        this.drawPath(context);
        context.restore();
        this._afterDraw();
    };
    ShapeBase.prototype.getCanvasViewBox = function () {
        var canvas = this.cfg.canvas;
        if (canvas) {
            // @ts-ignore
            return canvas.getViewRange();
        }
        return null;
    };
    ShapeBase.prototype.cacheCanvasBBox = function () {
        var canvasBBox = this.getCanvasViewBox();
        // 绘制的时候缓存包围盒
        if (canvasBBox) {
            var bbox = this.getCanvasBBox();
            var isInView = util_1.intersectRect(bbox, canvasBBox);
            this.set('isInView', isInView);
            // 不再视窗内 cacheCanvasBBox 设置成 null，会提升局部渲染的性能，
            // 因为在局部渲染影响的包围盒计算时不考虑这个图形的包围盒
            // 父元素 cacheCanvasBBox 计算的时候也不计算
            if (isInView) {
                this.set('cacheCanvasBBox', bbox);
            }
            else {
                this.set('cacheCanvasBBox', null);
            }
        }
    };
    ShapeBase.prototype._afterDraw = function () {
        this.cacheCanvasBBox();
        // 绘制后消除标记
        this.set('hasChanged', false);
        this.set('refresh', null);
    };
    ShapeBase.prototype.skipDraw = function () {
        this.set('cacheCanvasBBox', null);
        this.set('isInView', null);
        this.set('hasChanged', false);
    };
    /**
     * 绘制图形的路径
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.drawPath = function (context) {
        this.createPath(context);
        this.strokeAndFill(context);
        this.afterDrawPath(context);
    };
    /**
     * @protected
     * 填充图形
     * @param {CanvasRenderingContext2D} context context 上下文
     */
    ShapeBase.prototype.fill = function (context) {
        context.fill();
    };
    /**
     * @protected
     * 绘制图形边框
     * @param {CanvasRenderingContext2D} context context 上下文
     */
    ShapeBase.prototype.stroke = function (context) {
        context.stroke();
    };
    // 绘制或者填充
    ShapeBase.prototype.strokeAndFill = function (context) {
        var _a = this.attrs, lineWidth = _a.lineWidth, opacity = _a.opacity, strokeOpacity = _a.strokeOpacity, fillOpacity = _a.fillOpacity;
        if (this.isFill()) {
            if (!util_1.isNil(fillOpacity) && fillOpacity !== 1) {
                context.globalAlpha = fillOpacity;
                this.fill(context);
                context.globalAlpha = opacity;
            }
            else {
                this.fill(context);
            }
        }
        if (this.isStroke()) {
            if (lineWidth > 0) {
                if (!util_1.isNil(strokeOpacity) && strokeOpacity !== 1) {
                    context.globalAlpha = strokeOpacity;
                }
                this.stroke(context);
            }
        }
        this.afterDrawPath(context);
    };
    /**
     * @protected
     * 绘制图形的路径
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.createPath = function (context) { };
    /**
     * 绘制完成 path 后的操作
     * @param {CanvasRenderingContext2D} context 上下文
     */
    ShapeBase.prototype.afterDrawPath = function (context) { };
    ShapeBase.prototype.isInShape = function (refX, refY) {
        // return HitUtil.isHitShape(this, refX, refY);
        var isStroke = this.isStroke();
        var isFill = this.isFill();
        var lineWidth = this.getHitLineWidth();
        return this.isInStrokeOrPath(refX, refY, isStroke, isFill, lineWidth);
    };
    // 之所以不拆成 isInStroke 和 isInPath 在于两者存在一些共同的计算
    ShapeBase.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        return false;
    };
    /**
     * 获取线拾取的宽度
     * @returns {number} 线的拾取宽度
     */
    ShapeBase.prototype.getHitLineWidth = function () {
        if (!this.isStroke()) {
            return 0;
        }
        var attrs = this.attrs;
        return attrs['lineWidth'] + attrs['lineAppendWidth'];
    };
    return ShapeBase;
}(g_base_1.AbstractShape));
exports.default = ShapeBase;
//# sourceMappingURL=base.js.map
}, function(modId) { var map = {"../util/util":1623251340057,"../util/draw":1623251340059,"./index":1623251340055,"../group":1623251340063}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340057, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isParent = exports.tick = exports.clearAnimationFrame = exports.requestAnimationFrame = exports.isNumberEqual = exports.mod = exports.toRadian = exports.each = exports.isArray = exports.isFunction = exports.isString = exports.isNil = exports.isSamePoint = exports.mergeRegion = exports.intersectRect = exports.inBox = exports.distance = exports.getPixelRatio = void 0;
function getPixelRatio() {
    return typeof window === 'object' && window.devicePixelRatio ? window.devicePixelRatio : 1;
}
exports.getPixelRatio = getPixelRatio;
/**
 * 两点之间的距离
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 结束点 x
 * @param {number} y2 结束点 y
 */
function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.distance = distance;
/**
 * 是否在包围盒内
 * @param {number} minX   包围盒开始的点 x
 * @param {number} minY   包围盒开始的点 y
 * @param {number} width  宽度
 * @param {number} height 高度
 * @param {[type]} x      检测点的 x
 * @param {[type]} y      监测点的 y
 */
function inBox(minX, minY, width, height, x, y) {
    return x >= minX && x <= minX + width && y >= minY && y <= minY + height;
}
exports.inBox = inBox;
function intersectRect(box1, box2) {
    return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
exports.intersectRect = intersectRect;
// 合并两个区域
function mergeRegion(region1, region2) {
    if (!region1 || !region2) {
        return region1 || region2;
    }
    return {
        minX: Math.min(region1.minX, region2.minX),
        minY: Math.min(region1.minY, region2.minY),
        maxX: Math.max(region1.maxX, region2.maxX),
        maxY: Math.max(region1.maxY, region2.maxY),
    };
}
exports.mergeRegion = mergeRegion;
/**
 * 判断两个点是否重合，点坐标的格式为 [x, y]
 * @param {Array} point1 第一个点
 * @param {Array} point2 第二个点
 */
function isSamePoint(point1, point2) {
    return point1[0] === point2[0] && point1[1] === point2[1];
}
exports.isSamePoint = isSamePoint;
var util_1 = require("@antv/util");
Object.defineProperty(exports, "isNil", { enumerable: true, get: function () { return util_1.isNil; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return util_1.isString; } });
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return util_1.isFunction; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return util_1.isArray; } });
Object.defineProperty(exports, "each", { enumerable: true, get: function () { return util_1.each; } });
Object.defineProperty(exports, "toRadian", { enumerable: true, get: function () { return util_1.toRadian; } });
Object.defineProperty(exports, "mod", { enumerable: true, get: function () { return util_1.mod; } });
Object.defineProperty(exports, "isNumberEqual", { enumerable: true, get: function () { return util_1.isNumberEqual; } });
var time_1 = require("./time");
Object.defineProperty(exports, "requestAnimationFrame", { enumerable: true, get: function () { return time_1.requestAnimationFrame; } });
Object.defineProperty(exports, "clearAnimationFrame", { enumerable: true, get: function () { return time_1.clearAnimationFrame; } });
function tick(fn) {
    if (window) {
        requestAnimationFrame(fn);
    }
    else {
        // TODO need a timeline to control time
        setTimeout(fn, 16);
    }
}
exports.tick = tick;
// 是否元素的父容器
function isParent(container, shape) {
    // 所有 shape 都是 canvas 的子元素
    if (container.isCanvas()) {
        return true;
    }
    var parent = shape.getParent();
    var isParent = false;
    while (parent) {
        if (parent === container) {
            isParent = true;
            break;
        }
        parent = parent.getParent();
    }
    return isParent;
}
exports.isParent = isParent;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {"./time":1623251340058}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340058, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAnimationFrame = exports.requestAnimationFrame = exports.setExtraFunction = void 0;
var cache = {};
function setExtraFunction(extraData) {
    if (extraData === void 0) { extraData = {}; }
    cache['requestAnimationFrame'] = extraData['requestAnimationFrame'];
    cache['clearAnimationFrame'] = extraData['clearAnimationFrame'];
}
exports.setExtraFunction = setExtraFunction;
function requestAnimationFrame(fn) {
    if (cache['requestAnimationFrame']) {
        return cache['requestAnimationFrame'];
    }
    var method = typeof window === 'object' && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : function (f) {
            return setTimeout(f, 16);
        };
    return method(fn);
}
exports.requestAnimationFrame = requestAnimationFrame;
function clearAnimationFrame(handler) {
    if (cache['clearAnimationFrame']) {
        return cache['clearAnimationFrame'];
    }
    var method = typeof window === 'object' && window.cancelAnimationFrame ? window.cancelAnimationFrame : clearTimeout;
    return method(handler);
}
exports.clearAnimationFrame = clearAnimationFrame;
//# sourceMappingURL=time.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340059, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeView = exports.getMergedRegion = exports.getRefreshRegion = exports.refreshElement = exports.drawPath = exports.clearChanged = exports.checkChildrenRefresh = exports.checkRefresh = exports.drawChildren = exports.applyAttrsToContext = void 0;
var util_1 = require("@antv/util");
var parse_1 = require("./parse");
var arc_params_1 = require("./arc-params");
var util_2 = require("./util");
var ArrowUtil = require("../util/arrow");
var SHAPE_ATTRS_MAP = {
    fill: 'fillStyle',
    stroke: 'strokeStyle',
    opacity: 'globalAlpha',
};
function applyAttrsToContext(context, element) {
    var attrs = element.attr();
    for (var k in attrs) {
        var v = attrs[k];
        // 转换一下不与 canvas 兼容的属性名
        var name_1 = SHAPE_ATTRS_MAP[k] ? SHAPE_ATTRS_MAP[k] : k;
        if (name_1 === 'matrix' && v) {
            // 设置矩阵
            context.transform(v[0], v[1], v[3], v[4], v[6], v[7]);
        }
        else if (name_1 === 'lineDash' && context.setLineDash) {
            // 设置虚线，只支持数组形式，非数组形式不做任何操作
            util_1.isArray(v) && context.setLineDash(v);
        }
        else {
            if (name_1 === 'strokeStyle' || name_1 === 'fillStyle') {
                // 如果存在渐变、pattern 这个开销有些大
                // 可以考虑缓存机制，通过 hasUpdate 来避免一些运算
                v = parse_1.parseStyle(context, element, v);
            }
            else if (name_1 === 'globalAlpha') {
                // opacity 效果可以叠加，子元素的 opacity 需要与父元素 opacity 相乘
                v = v * context.globalAlpha;
            }
            context[name_1] = v;
        }
    }
}
exports.applyAttrsToContext = applyAttrsToContext;
function drawChildren(context, children, region) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.cfg.visible) {
            child.draw(context, region);
        }
        else {
            child.skipDraw();
        }
    }
}
exports.drawChildren = drawChildren;
// 这个地方的逻辑比较复杂，简单画了一张图：https://www.yuque.com/antv/ou292n/pcgt5g#OW1QE
function checkRefresh(canvas, children, region) {
    var refreshElements = canvas.get('refreshElements');
    // 先遍历需要刷新的元素，将这些元素的父元素也设置 refresh
    util_1.each(refreshElements, function (el) {
        if (el !== canvas) {
            var parent_1 = el.cfg.parent;
            while (parent_1 && parent_1 !== canvas && !parent_1.cfg.refresh) {
                parent_1.cfg.refresh = true;
                parent_1 = parent_1.cfg.parent;
            }
        }
    });
    if (refreshElements[0] === canvas) {
        setChildrenRefresh(children, region);
    }
    else {
        // 检查所有子元素是否可以刷新
        checkChildrenRefresh(children, region);
    }
}
exports.checkRefresh = checkRefresh;
// 检查所有的子元素是否应该更新
function checkChildrenRefresh(children, region) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.cfg.visible) {
            // 先判断 hasChanged，因为它的优先级判断应该高于 refresh
            if (child.cfg.hasChanged) {
                // 如果节点发生了 change，则需要级联设置子元素的 refresh
                child.cfg.refresh = true;
                if (child.isGroup()) {
                    setChildrenRefresh(child.cfg.children, region);
                }
            }
            else if (child.cfg.refresh) {
                // 如果当前图形/分组 refresh = true，说明其子节点存在 changed
                if (child.isGroup()) {
                    checkChildrenRefresh(child.cfg.children, region);
                }
            }
            else {
                // 这个分支说明此次局部刷新，所有的节点和父元素没有发生变化，仅需要检查包围盒（缓存）是否相交即可
                var refresh = checkElementRefresh(child, region);
                child.cfg.refresh = refresh;
                if (refresh && child.isGroup()) {
                    // 如果需要刷新，说明子元素也需要刷新，继续进行判定
                    checkChildrenRefresh(child.cfg.children, region);
                }
            }
        }
    }
}
exports.checkChildrenRefresh = checkChildrenRefresh;
// 由于对改变的图形放入 refreshElements 时做了优化，判定父元素 changed 时不加入
// 那么有可能会出现 elements 都为空，所以最终 group
function clearChanged(elements) {
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        el.cfg.hasChanged = false;
        // 级联清理
        if (el.isGroup() && !el.destroyed) {
            clearChanged(el.cfg.children);
        }
    }
}
exports.clearChanged = clearChanged;
// 当某个父元素发生改变时，调用这个方法级联设置 refresh
function setChildrenRefresh(children, region) {
    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        // let refresh = true;
        // 获取缓存的 bbox，如果这个 bbox 还存在则说明父元素不是矩阵发生了改变
        // const bbox = child.cfg.canvasBBox;
        // if (bbox) {
        //   // 如果这时候
        //   refresh = intersectRect(bbox, region);
        // }
        child.cfg.refresh = true;
        // 如果需要刷新当前节点，所有的子元素设置 refresh
        if (child.isGroup()) {
            setChildrenRefresh(child.get('children'), region);
        }
    }
}
function checkElementRefresh(shape, region) {
    var bbox = shape.cfg.cacheCanvasBBox;
    var isAllow = shape.cfg.isInView && bbox && util_2.intersectRect(bbox, region);
    return isAllow;
}
// 绘制 path
function drawPath(shape, context, attrs, arcParamsCache) {
    var path = attrs.path, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
    if (!path) {
        return;
    }
    var currentPoint = [0, 0]; // 当前图形
    var startMovePoint = [0, 0]; // 开始 M 的点，可能会有多个
    var distance = {
        dx: 0,
        dy: 0,
    };
    context.beginPath();
    for (var i = 0; i < path.length; i++) {
        var params = path[i];
        var command = params[0];
        if (i === 0 && startArrow && startArrow.d) {
            var tangent = shape.getStartTangent();
            distance = ArrowUtil.getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], startArrow.d);
        }
        else if (i === path.length - 2 && path[i + 1][0] === 'Z' && endArrow && endArrow.d) {
            // 为了防止结尾为 Z 的 segment 缩短不起效，需要取最后两个 segment 特殊处理
            var lastPath = path[i + 1];
            if (lastPath[0] === 'Z') {
                var tangent = shape.getEndTangent();
                distance = ArrowUtil.getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
            }
        }
        else if (i === path.length - 1 && endArrow && endArrow.d) {
            if (path[0] !== 'Z') {
                var tangent = shape.getEndTangent();
                distance = ArrowUtil.getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
            }
        }
        var dx = distance.dx, dy = distance.dy;
        // V,H,S,T 都在前面被转换成标准形式
        switch (command) {
            case 'M':
                context.moveTo(params[1] - dx, params[2] - dy);
                startMovePoint = [params[1], params[2]];
                break;
            case 'L':
                context.lineTo(params[1] - dx, params[2] - dy);
                break;
            case 'Q':
                context.quadraticCurveTo(params[1], params[2], params[3] - dx, params[4] - dy);
                break;
            case 'C':
                context.bezierCurveTo(params[1], params[2], params[3], params[4], params[5] - dx, params[6] - dy);
                break;
            case 'A': {
                var arcParams = void 0;
                // 为了加速绘制，可以提供参数的缓存，各个图形自己缓存
                if (arcParamsCache) {
                    arcParams = arcParamsCache[i];
                    if (!arcParams) {
                        arcParams = arc_params_1.default(currentPoint, params);
                        arcParamsCache[i] = arcParams;
                    }
                }
                else {
                    arcParams = arc_params_1.default(currentPoint, params);
                }
                var cx = arcParams.cx, cy = arcParams.cy, rx = arcParams.rx, ry = arcParams.ry, startAngle = arcParams.startAngle, endAngle = arcParams.endAngle, xRotation = arcParams.xRotation, sweepFlag = arcParams.sweepFlag;
                // 直接使用椭圆的 api
                if (context.ellipse) {
                    context.ellipse(cx, cy, rx, ry, xRotation, startAngle, endAngle, 1 - sweepFlag);
                }
                else {
                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;
                    context.translate(cx, cy);
                    context.rotate(xRotation);
                    context.scale(scaleX, scaleY);
                    context.arc(0, 0, r, startAngle, endAngle, 1 - sweepFlag);
                    context.scale(1 / scaleX, 1 / scaleY);
                    context.rotate(-xRotation);
                    context.translate(-cx, -cy);
                }
                break;
            }
            case 'Z':
                context.closePath();
                break;
            default:
                break;
        }
        // 有了 Z 后，当前节点从开始 M 的点开始
        if (command === 'Z') {
            currentPoint = startMovePoint;
        }
        else {
            var len = params.length;
            currentPoint = [params[len - 2], params[len - 1]];
        }
    }
}
exports.drawPath = drawPath;
// 刷新图形元素(Shape 或者 Group)
function refreshElement(element, changeType) {
    var canvas = element.get('canvas');
    // 只有存在于 canvas 上时生效
    if (canvas) {
        if (changeType === 'remove') {
            // 一旦 remove，则无法在 element 上拿到包围盒
            // destroy 后所有属性都拿不到，所以需要暂存一下
            // 这是一段 hack 的代码
            element._cacheCanvasBBox = element.get('cacheCanvasBBox');
        }
        // 防止反复刷新
        if (!element.get('hasChanged')) {
            // 但是始终要标记为 hasChanged，便于后面进行局部渲染
            element.set('hasChanged', true);
            // 本来只有局部渲染模式下，才需要记录更新的元素队列
            // if (canvas.get('localRefresh')) {
            //   canvas.refreshElement(element, changeType, canvas);
            // }
            // 但对于 https://github.com/antvis/g/issues/422 的场景，全局渲染的模式下也需要记录更新的元素队列
            // 如果当前元素的父元素发生了改变，可以不放入队列，这句话大概能够提升 15% 的初次渲染性能
            if (!(element.cfg.parent && element.cfg.parent.get('hasChanged'))) {
                canvas.refreshElement(element, changeType, canvas);
                if (canvas.get('autoDraw')) {
                    canvas.draw();
                }
            }
        }
    }
}
exports.refreshElement = refreshElement;
function getRefreshRegion(element) {
    var region;
    if (!element.destroyed) {
        var cacheBox = element.get('cacheCanvasBBox');
        var validCache = cacheBox && !!(cacheBox.width && cacheBox.height);
        var bbox = element.getCanvasBBox();
        var validBBox = bbox && !!(bbox.width && bbox.height);
        // 是否是有效 bbox 判定，一些 NaN 或者 宽高为 0 的情况过滤掉
        if (validCache && validBBox) {
            region = util_2.mergeRegion(cacheBox, bbox);
        }
        else if (validCache) {
            region = cacheBox;
        }
        else if (validBBox) {
            region = bbox;
        }
    }
    else {
        // 因为元素已经销毁所以无法获取到缓存的包围盒
        region = element['_cacheCanvasBBox'];
    }
    return region;
}
exports.getRefreshRegion = getRefreshRegion;
function getMergedRegion(elements) {
    if (!elements.length) {
        return null;
    }
    var minXArr = [];
    var minYArr = [];
    var maxXArr = [];
    var maxYArr = [];
    util_1.each(elements, function (el) {
        var region = getRefreshRegion(el);
        if (region) {
            minXArr.push(region.minX);
            minYArr.push(region.minY);
            maxXArr.push(region.maxX);
            maxYArr.push(region.maxY);
        }
    });
    return {
        minX: Math.min.apply(null, minXArr),
        minY: Math.min.apply(null, minYArr),
        maxX: Math.max.apply(null, maxXArr),
        maxY: Math.max.apply(null, maxYArr),
    };
}
exports.getMergedRegion = getMergedRegion;
function mergeView(region, viewRegion) {
    if (!region || !viewRegion) {
        return null;
    }
    // 不相交，则直接返回 null
    if (!util_2.intersectRect(region, viewRegion)) {
        return null;
    }
    return {
        minX: Math.max(region.minX, viewRegion.minX),
        minY: Math.max(region.minY, viewRegion.minY),
        maxX: Math.min(region.maxX, viewRegion.maxX),
        maxY: Math.min(region.maxY, viewRegion.maxY),
    };
}
exports.mergeView = mergeView;
//# sourceMappingURL=draw.js.map
}, function(modId) { var map = {"./parse":1623251340060,"./arc-params":1623251340061,"./util":1623251340057,"../util/arrow":1623251340062}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340060, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRadius = exports.parseStyle = exports.parsePattern = exports.parseRadialGradient = exports.parseLineGradient = void 0;
var util_1 = require("./util");
var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
function addStop(steps, gradient) {
    var arr = steps.match(regexColorStop);
    util_1.each(arr, function (item) {
        var itemArr = item.split(':');
        gradient.addColorStop(itemArr[0], itemArr[1]);
    });
}
/**
 * 将边和填充设置的颜色转换成线性渐变对象
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   gradientStr   颜色
 * @returns {any} 渐变对象
 */
function parseLineGradient(context, element, gradientStr) {
    var arr = regexLG.exec(gradientStr);
    var angle = (parseFloat(arr[1]) % 360) * (Math.PI / 180);
    var steps = arr[2];
    var box = element.getBBox();
    var start;
    var end;
    if (angle >= 0 && angle < (1 / 2) * Math.PI) {
        start = {
            x: box.minX,
            y: box.minY,
        };
        end = {
            x: box.maxX,
            y: box.maxY,
        };
    }
    else if ((1 / 2) * Math.PI <= angle && angle < Math.PI) {
        start = {
            x: box.maxX,
            y: box.minY,
        };
        end = {
            x: box.minX,
            y: box.maxY,
        };
    }
    else if (Math.PI <= angle && angle < (3 / 2) * Math.PI) {
        start = {
            x: box.maxX,
            y: box.maxY,
        };
        end = {
            x: box.minX,
            y: box.minY,
        };
    }
    else {
        start = {
            x: box.minX,
            y: box.maxY,
        };
        end = {
            x: box.maxX,
            y: box.minY,
        };
    }
    var tanTheta = Math.tan(angle);
    var tanTheta2 = tanTheta * tanTheta;
    var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
    var y = (tanTheta * (end.x - start.x + tanTheta * (end.y - start.y))) / (tanTheta2 + 1) + start.y;
    var gradient = context.createLinearGradient(start.x, start.y, x, y);
    addStop(steps, gradient);
    return gradient;
}
exports.parseLineGradient = parseLineGradient;
/**
 * 将边和填充设置的颜色转换成圆形渐变对象
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   gradientStr   颜色
 * @returns {any} 渐变对象
 */
function parseRadialGradient(context, element, gradientStr) {
    var arr = regexRG.exec(gradientStr);
    var fx = parseFloat(arr[1]);
    var fy = parseFloat(arr[2]);
    var fr = parseFloat(arr[3]);
    var steps = arr[4];
    // 环半径为0时，默认无渐变，取渐变序列的最后一个颜色
    if (fr === 0) {
        var colors = steps.match(regexColorStop);
        return colors[colors.length - 1].split(':')[1];
    }
    var box = element.getBBox();
    var width = box.maxX - box.minX;
    var height = box.maxY - box.minY;
    var r = Math.sqrt(width * width + height * height) / 2;
    var gradient = context.createRadialGradient(box.minX + width * fx, box.minY + height * fy, 0, box.minX + width / 2, box.minY + height / 2, fr * r);
    addStop(steps, gradient);
    return gradient;
}
exports.parseRadialGradient = parseRadialGradient;
/**
 * 边和填充设置的颜色转换成 pattern
 * @param {CanvasRenderingContext2D} context canvas 上下文
 * @param {IElement}                 element  图形元素
 * @param {string}                   patternStr   生成 pattern 的字符串
 */
function parsePattern(context, element, patternStr) {
    // 在转换过程中进行了缓存
    if (element.get('patternSource') && element.get('patternSource') === patternStr) {
        return element.get('pattern');
    }
    var pattern;
    var img;
    var arr = regexPR.exec(patternStr);
    var repeat = arr[1];
    var source = arr[2];
    // Function to be called when pattern loads
    function onload() {
        // Create pattern
        pattern = context.createPattern(img, repeat);
        element.set('pattern', pattern); // be a cache
        element.set('patternSource', patternStr);
    }
    switch (repeat) {
        case 'a':
            repeat = 'repeat';
            break;
        case 'x':
            repeat = 'repeat-x';
            break;
        case 'y':
            repeat = 'repeat-y';
            break;
        case 'n':
            repeat = 'no-repeat';
            break;
        default:
            repeat = 'no-repeat';
    }
    img = new Image();
    // If source URL is not a data URL
    if (!source.match(/^data:/i)) {
        // Set crossOrigin for this image
        img.crossOrigin = 'Anonymous';
    }
    img.src = source;
    if (img.complete) {
        onload();
    }
    else {
        img.onload = onload;
        // Fix onload() bug in IE9
        img.src = img.src;
    }
    return pattern;
}
exports.parsePattern = parsePattern;
function parseStyle(context, element, color) {
    if (util_1.isString(color)) {
        if (color[1] === '(' || color[2] === '(') {
            if (color[0] === 'l') {
                // regexLG.test(color)
                return parseLineGradient(context, element, color);
            }
            if (color[0] === 'r') {
                // regexRG.test(color)
                return parseRadialGradient(context, element, color);
            }
            if (color[0] === 'p') {
                // regexPR.test(color)
                return parsePattern(context, element, color);
            }
        }
        return color;
    }
}
exports.parseStyle = parseStyle;
function parseRadius(radius) {
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    var r4 = 0;
    if (util_1.isArray(radius)) {
        if (radius.length === 1) {
            r1 = r2 = r3 = r4 = radius[0];
        }
        else if (radius.length === 2) {
            r1 = r3 = radius[0];
            r2 = r4 = radius[1];
        }
        else if (radius.length === 3) {
            r1 = radius[0];
            r2 = r4 = radius[1];
            r3 = radius[2];
        }
        else {
            r1 = radius[0];
            r2 = radius[1];
            r3 = radius[2];
            r4 = radius[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = radius;
    }
    return [r1, r2, r3, r4];
}
exports.parseRadius = parseRadius;
//# sourceMappingURL=parse.js.map
}, function(modId) { var map = {"./util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340061, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
// 向量长度
function vMag(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
// u.v/|u||v|，计算夹角的余弦值
function vRatio(u, v) {
    // 当存在一个向量的长度为 0 时，夹角也为 0，即夹角的余弦值为 1
    return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}
// 向量角度
function vAngle(u, v) {
    return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
// A 0:rx 1:ry 2:x-axis-rotation 3:large-arc-flag 4:sweep-flag 5: x 6: y
function getArcParams(startPoint, params) {
    var rx = params[1];
    var ry = params[2];
    var xRotation = util_1.mod(util_1.toRadian(params[3]), Math.PI * 2);
    var arcFlag = params[4];
    var sweepFlag = params[5];
    // 弧形起点坐标
    var x1 = startPoint[0];
    var y1 = startPoint[1];
    // 弧形终点坐标
    var x2 = params[6];
    var y2 = params[7];
    var xp = (Math.cos(xRotation) * (x1 - x2)) / 2.0 + (Math.sin(xRotation) * (y1 - y2)) / 2.0;
    var yp = (-1 * Math.sin(xRotation) * (x1 - x2)) / 2.0 + (Math.cos(xRotation) * (y1 - y2)) / 2.0;
    var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
    if (lambda > 1) {
        rx *= Math.sqrt(lambda);
        ry *= Math.sqrt(lambda);
    }
    var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
    var f = diff ? Math.sqrt((rx * rx * (ry * ry) - diff) / diff) : 1;
    if (arcFlag === sweepFlag) {
        f *= -1;
    }
    if (isNaN(f)) {
        f = 0;
    }
    // 旋转前的起点坐标，且当长半轴和短半轴的长度为 0 时，坐标按 (0, 0) 处理
    var cxp = ry ? (f * rx * yp) / ry : 0;
    var cyp = rx ? (f * -ry * xp) / rx : 0;
    // 椭圆圆心坐标
    var cx = (x1 + x2) / 2.0 + Math.cos(xRotation) * cxp - Math.sin(xRotation) * cyp;
    var cy = (y1 + y2) / 2.0 + Math.sin(xRotation) * cxp + Math.cos(xRotation) * cyp;
    // 起始点的单位向量
    var u = [(xp - cxp) / rx, (yp - cyp) / ry];
    // 终止点的单位向量
    var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    // 计算起始点和圆心的连线，与 x 轴正方向的夹角
    var theta = vAngle([1, 0], u);
    // 计算圆弧起始点和终止点与椭圆圆心连线的夹角
    var dTheta = vAngle(u, v);
    if (vRatio(u, v) <= -1) {
        dTheta = Math.PI;
    }
    if (vRatio(u, v) >= 1) {
        dTheta = 0;
    }
    if (sweepFlag === 0 && dTheta > 0) {
        dTheta = dTheta - 2 * Math.PI;
    }
    if (sweepFlag === 1 && dTheta < 0) {
        dTheta = dTheta + 2 * Math.PI;
    }
    return {
        cx: cx,
        cy: cy,
        // 弧形的起点和终点相同时，长轴和短轴的长度按 0 处理
        rx: util_1.isSamePoint(startPoint, [x2, y2]) ? 0 : rx,
        ry: util_1.isSamePoint(startPoint, [x2, y2]) ? 0 : ry,
        startAngle: theta,
        endAngle: theta + dTheta,
        xRotation: xRotation,
        arcFlag: arcFlag,
        sweepFlag: sweepFlag,
    };
}
exports.default = getArcParams;
//# sourceMappingURL=arc-params.js.map
}, function(modId) { var map = {"./util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340062, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.addEndArrow = exports.addStartArrow = exports.getShortenOffset = void 0;
var tslib_1 = require("tslib");
var shape_1 = require("../shape");
var sin = Math.sin, cos = Math.cos, atan2 = Math.atan2, PI = Math.PI;
function _addDefaultArrow(shape, attrs, x1, y1, x2, y2, isStart) {
    var stroke = attrs.stroke, lineWidth = attrs.lineWidth;
    var x = x1 - x2;
    var y = y1 - y2;
    var rad = atan2(y, x);
    var arrowShape = new shape_1.Path({
        type: 'path',
        canvas: shape.get('canvas'),
        isArrowShape: true,
        attrs: {
            // 默认箭头的边长为 10，夹角为 60 度
            path: "M" + 10 * cos(PI / 6) + "," + 10 * sin(PI / 6) + " L0,0 L" + 10 * cos(PI / 6) + ",-" + 10 * sin(PI / 6),
            // 使用 shape stroke 值
            stroke: stroke,
            lineWidth: lineWidth,
        },
    });
    arrowShape.translate(x2, y2);
    arrowShape.rotateAtPoint(x2, y2, rad);
    shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
/**
 * 箭头 path 的设置要求
 * 1. 箭头顶点坐标需要为 (0, 0)
 * 2. 箭头夹角的中心分割线需要与 X 轴正方向对齐
 */
function _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, isStart) {
    var startArrow = attrs.startArrow, endArrow = attrs.endArrow, stroke = attrs.stroke, lineWidth = attrs.lineWidth;
    var arrowAttrs = isStart ? startArrow : endArrow;
    var d = arrowAttrs.d, arrowFill = arrowAttrs.fill, arrowStroke = arrowAttrs.stroke, arrowLineWidth = arrowAttrs.lineWidth, restAttrs = tslib_1.__rest(arrowAttrs, ["d", "fill", "stroke", "lineWidth"]);
    var x = x1 - x2;
    var y = y1 - y2;
    var rad = atan2(y, x);
    if (d) {
        x2 = x2 - cos(rad) * d;
        y2 = y2 - sin(rad) * d;
    }
    var arrowShape = new shape_1.Path({
        type: 'path',
        canvas: shape.get('canvas'),
        isArrowShape: true,
        attrs: tslib_1.__assign(tslib_1.__assign({}, restAttrs), { 
            // 支持单独设置箭头的 stroke 和 lineWidth，若为空则使用 shape 的值
            stroke: arrowStroke || stroke, lineWidth: arrowLineWidth || lineWidth, 
            // 箭头是否填充需要手动设置，不会继承自 shape 的值
            fill: arrowFill }),
    });
    arrowShape.translate(x2, y2);
    arrowShape.rotateAtPoint(x2, y2, rad);
    shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
/**
 * 如果自定义箭头并且有 d 需要做偏移，如果直接画，线条会超出箭头尖端，因此需要根据箭头偏移 d, 返回线需要缩短的距离
 * |----------------
 * |<|--------------
 * |
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 * @param {number} d  箭头沿线条方向的偏移距离
 * @return {{dx: number, dy: number}} 返回线条偏移距离
 */
function getShortenOffset(x1, y1, x2, y2, d) {
    var rad = atan2(y2 - y1, x2 - x1);
    return {
        dx: cos(rad) * d,
        dy: sin(rad) * d,
    };
}
exports.getShortenOffset = getShortenOffset;
/**
 * 绘制起始箭头
 * @param {IShape} shape 图形
 * @param {ShapeAttrs} attrs shape 的绘图属性
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 */
function addStartArrow(shape, attrs, x1, y1, x2, y2) {
    if (typeof attrs.startArrow === 'object') {
        _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, true);
    }
    else if (attrs.startArrow) {
        _addDefaultArrow(shape, attrs, x1, y1, x2, y2, true);
    }
    else {
        shape.set('startArrowShape', null);
    }
}
exports.addStartArrow = addStartArrow;
/**
 * 绘制结束箭头
 * @param {IShape} shape 图形
 * @param {ShapeAttrs} attrs shape 的绘图属性
 * @param {number} x1 起始点 x
 * @param {number} y1 起始点 y
 * @param {number} x2 箭头作用点 x
 * @param {number} y2 箭头作用点 y
 */
function addEndArrow(shape, attrs, x1, y1, x2, y2) {
    if (typeof attrs.endArrow === 'object') {
        _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, false);
    }
    else if (attrs.endArrow) {
        _addDefaultArrow(shape, attrs, x1, y1, x2, y2, false);
    }
    else {
        shape.set('startArrowShape', null);
    }
}
exports.addEndArrow = addEndArrow;
//# sourceMappingURL=arrow.js.map
}, function(modId) { var map = {"../shape":1623251340055}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340063, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var g_base_1 = require("@antv/g-base");
var Shape = require("./shape");
var draw_1 = require("./util/draw");
var util_1 = require("@antv/util");
var util_2 = require("./util/util");
var Group = /** @class */ (function (_super) {
    tslib_1.__extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Group.prototype.onCanvasChange = function (changeType) {
        draw_1.refreshElement(this, changeType);
    };
    Group.prototype.getShapeBase = function () {
        return Shape;
    };
    Group.prototype.getGroupBase = function () {
        return Group;
    };
    // 同 shape 中的方法重复了
    Group.prototype._applyClip = function (context, clip) {
        if (clip) {
            context.save();
            // 将 clip 的属性挂载到 context 上
            draw_1.applyAttrsToContext(context, clip);
            // 绘制 clip 路径
            clip.createPath(context);
            context.restore();
            // 裁剪
            context.clip();
            clip._afterDraw();
        }
    };
    // 这个方法以前直接使用的 getCanvasBBox，由于 group 上没有缓存，所以每次重新计算，导致性能开销比较大
    // 大概能够节省全局渲染 15-20% 的性能，如果不在这里加缓存优化后 10W 个节点无法达到 5-6 ms，大概能够 30-40ms
    Group.prototype.cacheCanvasBBox = function () {
        var children = this.cfg.children;
        var xArr = [];
        var yArr = [];
        util_1.each(children, function (child) {
            var bbox = child.cfg.cacheCanvasBBox;
            // isInview 的判定是一旦图形或者分组渲染就要计算是否在视图内，
            // 这个判定 10W 个图形下差不多能够节省 5-6 ms 的开销
            if (bbox && child.cfg.isInView) {
                xArr.push(bbox.minX, bbox.maxX);
                yArr.push(bbox.minY, bbox.maxY);
            }
        });
        var bbox = null;
        if (xArr.length) {
            var minX = Math.min.apply(null, xArr);
            var maxX = Math.max.apply(null, xArr);
            var minY = Math.min.apply(null, yArr);
            var maxY = Math.max.apply(null, yArr);
            bbox = {
                minX: minX,
                minY: minY,
                x: minX,
                y: minY,
                maxX: maxX,
                maxY: maxY,
                width: maxX - minX,
                height: maxY - minY,
            };
            var canvas = this.cfg.canvas;
            if (canvas) {
                var viewRange = canvas.getViewRange();
                // 如果这个地方判定 isInView == false 设置 bbox 为 false 的话，拾取的性能会更高
                // 但是目前 10W 图形的拾取在 2-5ms 内，这个优化意义不大，可以后期观察再看
                this.set('isInView', util_2.intersectRect(bbox, viewRange));
            }
        }
        else {
            this.set('isInView', false);
        }
        this.set('cacheCanvasBBox', bbox);
    };
    Group.prototype.draw = function (context, region) {
        var children = this.cfg.children;
        var allowDraw = region ? this.cfg.refresh : true; // 局部刷新需要判定
        // 这个地方需要判定，在 G6 的场景每个 group 都有 transform 的场景下性能会开销非常大
        // 通过 refresh 的判定，可以不刷新没有发生过变化的分组，不在视窗内的分组等等
        // 如果想进一步提升局部渲染性能，可以进一步优化 refresh 的判定，依然有潜力
        if (children.length && allowDraw) {
            context.save();
            // group 上的矩阵和属性也会应用到上下文上
            // 先将 attrs 应用到上下文中，再设置 clip。因为 clip 应该被当前元素的 matrix 所影响
            draw_1.applyAttrsToContext(context, this);
            this._applyClip(context, this.getClip());
            draw_1.drawChildren(context, children, region);
            context.restore();
            this.cacheCanvasBBox();
        }
        // 这里的成本比较大，如果不绘制则不再
        // this.set('cacheCanvasBBox', this.getCanvasBBox());
        this.cfg.refresh = null;
        // 绘制后，消除更新标记
        this.set('hasChanged', false);
    };
    // 绘制时被跳过，一般发生在分组隐藏时
    Group.prototype.skipDraw = function () {
        this.set('cacheCanvasBBox', null);
        this.set('hasChanged', false);
    };
    return Group;
}(g_base_1.AbstractGroup));
exports.default = Group;
//# sourceMappingURL=group.js.map
}, function(modId) { var map = {"./shape":1623251340055,"./util/draw":1623251340059,"./util/util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340064, function(require, module, exports) {

/**
 * @fileoverview 圆
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./base");
var util_1 = require("../util/util");
var Circle = /** @class */ (function (_super) {
    tslib_1.__extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x: 0, y: 0, r: 0 });
    };
    Circle.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var r = attrs.r;
        var halfLineWidth = lineWidth / 2;
        var absDistance = util_1.distance(cx, cy, x, y);
        // 直接用距离，如果同时存在边和填充时，可以减少两次计算
        if (isFill && isStroke) {
            return absDistance <= r + halfLineWidth;
        }
        if (isFill) {
            return absDistance <= r;
        }
        if (isStroke) {
            return absDistance >= r - halfLineWidth && absDistance <= r + halfLineWidth;
        }
        return false;
    };
    Circle.prototype.createPath = function (context) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var r = attrs.r;
        context.beginPath();
        context.arc(cx, cy, r, 0, Math.PI * 2, false);
        context.closePath();
    };
    return Circle;
}(base_1.default));
exports.default = Circle;
//# sourceMappingURL=circle.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340065, function(require, module, exports) {

/**
 * @fileoverview 椭圆
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./base");
// 根据椭圆公式计算 x*x/rx*rx + y*y/ry*ry;
function ellipseDistance(squareX, squareY, rx, ry) {
    return squareX / (rx * rx) + squareY / (ry * ry);
}
var Ellipse = /** @class */ (function (_super) {
    tslib_1.__extends(Ellipse, _super);
    function Ellipse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ellipse.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x: 0, y: 0, rx: 0, ry: 0 });
    };
    Ellipse.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var halfLineWith = lineWidth / 2;
        var cx = attrs.x;
        var cy = attrs.y;
        var rx = attrs.rx, ry = attrs.ry;
        var squareX = (x - cx) * (x - cx);
        var squareY = (y - cy) * (y - cy);
        // 使用椭圆的公式： x*x/rx*rx + y*y/ry*ry = 1;
        if (isFill && isStroke) {
            return ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
        }
        if (isFill) {
            return ellipseDistance(squareX, squareY, rx, ry) <= 1;
        }
        if (isStroke) {
            return (ellipseDistance(squareX, squareY, rx - halfLineWith, ry - halfLineWith) >= 1 &&
                ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1);
        }
        return false;
    };
    Ellipse.prototype.createPath = function (context) {
        var attrs = this.attr();
        var cx = attrs.x;
        var cy = attrs.y;
        var rx = attrs.rx;
        var ry = attrs.ry;
        context.beginPath();
        // 兼容逻辑
        if (context.ellipse) {
            context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2, false);
        }
        else {
            // 如果不支持，则使用圆来绘制，进行变形
            var r = rx > ry ? rx : ry;
            var scaleX = rx > ry ? 1 : rx / ry;
            var scaleY = rx > ry ? ry / rx : 1;
            context.save();
            context.translate(cx, cy);
            context.scale(scaleX, scaleY);
            context.arc(0, 0, r, 0, Math.PI * 2);
            context.restore();
            context.closePath();
        }
    };
    return Ellipse;
}(base_1.default));
exports.default = Ellipse;
//# sourceMappingURL=ellipse.js.map
}, function(modId) { var map = {"./base":1623251340056}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340066, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.setMiniCanvas = void 0;
var tslib_1 = require("tslib");
var base_1 = require("./base");
var util_1 = require("../util/util");
function isCanvas(dom) {
    return dom instanceof HTMLElement && util_1.isString(dom.nodeName) && dom.nodeName.toUpperCase() === 'CANVAS';
}
var miniCanvas = null;
function setMiniCanvas(canvas) {
    miniCanvas = canvas;
}
exports.setMiniCanvas = setMiniCanvas;
var ImageShape = /** @class */ (function (_super) {
    tslib_1.__extends(ImageShape, _super);
    function ImageShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageShape.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x: 0, y: 0, width: 0, height: 0 });
    };
    ImageShape.prototype.initAttrs = function (attrs) {
        this._setImage(attrs.img);
    };
    // image 不计算 stroke
    ImageShape.prototype.isStroke = function () {
        return false;
    };
    // 仅仅使用包围盒检测来进行拾取
    // 所以不需要复写 isInStrokeOrPath 的方法
    ImageShape.prototype.isOnlyHitBox = function () {
        return true;
    };
    ImageShape.prototype._afterLoading = function () {
        if (this.get('toDraw') === true) {
            var canvas = this.get('canvas');
            if (canvas) {
                // 这段应该改成局部渲染
                canvas.draw();
            }
            else {
                // 这种方式如果发生遮挡会出现问题
                this.createPath(this.get('context'));
            }
        }
    };
    ImageShape.prototype._setImage = function (img) {
        var _this = this;
        var attrs = this.attrs;
        console.log('xxxx', img, miniCanvas.isMiniNative(), miniCanvas, miniCanvas.isMini());
        // 1.0 小程序canvas下只能用string绘制
        if (miniCanvas.isMini() && !miniCanvas.isMiniNative()) {
            this.attr('img', img);
            return;
        }
        // 以下兼容2.0 小程序canvas
        if (util_1.isString(img)) {
            var image_1 = null;
            if (miniCanvas.isMiniNative()) {
                image_1 = miniCanvas.get('extra').createImage();
            }
            else {
                image_1 = new Image();
            }
            image_1.onload = function () {
                // 图片未加载完，则已经被销毁
                if (_this.destroyed) {
                    return false;
                }
                // 缓存原始地址，可以做对比，防止重复加载图片
                // 如果考虑到在加载过程中可能替换 img 属性，则情况更加复杂
                // this.set('imgSrc', img);
                // 这里会循环调用 _setImage 方法，但不会再走这个分支
                _this.attr('img', image_1);
                _this.set('loading', false);
                _this._afterLoading();
                var callback = _this.get('callback');
                if (callback) {
                    callback.call(_this);
                }
            };
            // 设置跨域
            image_1.crossOrigin = 'Anonymous';
            image_1.src = img;
            // loading 过程中不绘制
            this.set('loading', true);
        }
        else if (miniCanvas.isMiniNative() || img instanceof Image) {
            if (!attrs.width) {
                attrs.width = img.width;
            }
            if (!attrs.height) {
                attrs.height = img.height;
            }
        }
        else if (isCanvas(img)) {
            // 如果设置了 canvas 对象
            if (!attrs.width) {
                attrs.width = Number(img.getAttribute('width'));
            }
            if (!attrs.height) {
                attrs.height, Number(img.getAttribute('height'));
            }
        }
    };
    ImageShape.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        // 如果加载的已经是当前图片，则不再处理
        if (name === 'img') {
            // 可以加缓冲，&& this.get('imgSrc') !== value
            this._setImage(value);
        }
    };
    ImageShape.prototype.createPath = function (context) {
        var attrs = this.attr();
        var img = attrs.img, x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, sx = attrs.sx, sy = attrs.sy, swidth = attrs.swidth, sheight = attrs.sheight;
        // 正在加载则不绘制
        if (this.get('loading')) {
            this.set('toDraw', true); // 加载完成后绘制
            this.set('context', context);
            return;
        }
        if (miniCanvas.isMini()) {
            context.drawImage(img, x, y, width, height);
            return;
        }
        if (img instanceof Image || isCanvas(img)) {
            if (!util_1.isNil(sx) && !util_1.isNil(sy) && !util_1.isNil(swidth) && !util_1.isNil(sheight)) {
                context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
            }
            else {
                context.drawImage(img, x, y, width, height);
            }
        }
    };
    return ImageShape;
}(base_1.default));
exports.default = ImageShape;
//# sourceMappingURL=image.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340067, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @fileoverview 圆
 * @author dxq613@gmail.com
 */
var g_math_1 = require("@antv/g-math");
var base_1 = require("./base");
var line_1 = require("../util/in-stroke/line");
var ArrowUtil = require("../util/arrow");
var Line = /** @class */ (function (_super) {
    tslib_1.__extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x1: 0, y1: 0, x2: 0, y2: 0, startArrow: false, endArrow: false });
    };
    Line.prototype.initAttrs = function (attrs) {
        this.setArrow();
    };
    // 更新属性时，检测是否更改了箭头
    Line.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        // 由于箭头的绘制依赖于 line 的诸多 attrs，因此这里不再对每个 attr 进行判断，attr 每次变化都会影响箭头的更新
        this.setArrow();
    };
    Line.prototype.setArrow = function () {
        var attrs = this.attr();
        var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        if (startArrow) {
            ArrowUtil.addStartArrow(this, attrs, x2, y2, x1, y1);
        }
        if (endArrow) {
            ArrowUtil.addEndArrow(this, attrs, x1, y1, x2, y2);
        }
    };
    Line.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        if (!isStroke || !lineWidth) {
            return false;
        }
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return line_1.default(x1, y1, x2, y2, lineWidth, x, y);
    };
    Line.prototype.createPath = function (context) {
        var attrs = this.attr();
        var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        var startArrowDistance = {
            dx: 0,
            dy: 0,
        };
        var endArrowDistance = {
            dx: 0,
            dy: 0,
        };
        if (startArrow && startArrow.d) {
            startArrowDistance = ArrowUtil.getShortenOffset(x1, y1, x2, y2, attrs.startArrow.d);
        }
        if (endArrow && endArrow.d) {
            endArrowDistance = ArrowUtil.getShortenOffset(x1, y1, x2, y2, attrs.endArrow.d);
        }
        context.beginPath();
        // 如果自定义箭头，线条相应缩进
        context.moveTo(x1 + startArrowDistance.dx, y1 + startArrowDistance.dy);
        context.lineTo(x2 - endArrowDistance.dx, y2 - endArrowDistance.dy);
    };
    Line.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get length of line
     * @return {number} length
     */
    Line.prototype.getTotalLength = function () {
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return g_math_1.Line.length(x1, y1, x2, y2);
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    Line.prototype.getPoint = function (ratio) {
        var _a = this.attr(), x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        return g_math_1.Line.pointAt(x1, y1, x2, y2, ratio);
    };
    return Line;
}(base_1.default));
exports.default = Line;
//# sourceMappingURL=line.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/in-stroke/line":1623251340068,"../util/arrow":1623251340062}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340068, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g_math_1 = require("@antv/g-math");
function inLine(x1, y1, x2, y2, lineWidth, x, y) {
    var minX = Math.min(x1, x2);
    var maxX = Math.max(x1, x2);
    var minY = Math.min(y1, y2);
    var maxY = Math.max(y1, y2);
    var halfWidth = lineWidth / 2;
    // 因为目前的方案是计算点到直线的距离，而有可能会在延长线上，所以要先判断是否在包围盒内
    // 这种方案会在水平或者竖直的情况下载线的延长线上有半 lineWidth 的误差
    if (!(x >= minX - halfWidth && x <= maxX + halfWidth && y >= minY - halfWidth && y <= maxY + halfWidth)) {
        return false;
    }
    // 因为已经计算了包围盒，所以仅需要计算到直线的距离即可，可以显著提升性能
    return g_math_1.Line.pointToLine(x1, y1, x2, y2, x, y) <= lineWidth / 2;
}
exports.default = inLine;
//# sourceMappingURL=line.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340069, function(require, module, exports) {

/**
 * @fileoverview Marker
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var path_util_1 = require("@antv/path-util");
var base_1 = require("./base");
var util_2 = require("../util/util");
var draw_1 = require("../util/draw");
var Symbols = {
    // 圆
    circle: function (x, y, r) {
        return [
            ['M', x - r, y],
            ['A', r, r, 0, 1, 0, x + r, y],
            ['A', r, r, 0, 1, 0, x - r, y],
        ];
    },
    // 正方形
    square: function (x, y, r) {
        return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
    },
    // 菱形
    diamond: function (x, y, r) {
        return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
    },
    // 三角形
    triangle: function (x, y, r) {
        var diffY = r * Math.sin((1 / 3) * Math.PI);
        return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
    },
    // 倒三角形
    'triangle-down': function (x, y, r) {
        var diffY = r * Math.sin((1 / 3) * Math.PI);
        return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
    },
};
var Marker = /** @class */ (function (_super) {
    tslib_1.__extends(Marker, _super);
    function Marker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marker.prototype.initAttrs = function (attrs) {
        this._resetParamsCache();
    };
    // 重置绘制 path 存储的缓存
    Marker.prototype._resetParamsCache = function () {
        // 为了加速 path 的绘制、拾取和计算，这个地方可以缓存很多东西
        // 这些缓存都是第一次需要时计算和存储，虽然增加了复杂度，但是频繁调用的方法，性能有很大提升
        this.set('paramsCache', {}); // 清理缓存
    };
    // 更新属性时，检测是否更改了 path
    Marker.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (['symbol', 'x', 'y', 'r', 'radius'].indexOf(name) !== -1) {
            // path 相关属性更改时，清理缓存
            this._resetParamsCache();
        }
    };
    // 仅仅使用包围盒检测来进行拾取
    // 所以不需要复写 isInStrokeOrPath 的方法
    Marker.prototype.isOnlyHitBox = function () {
        return true;
    };
    Marker.prototype._getR = function (attrs) {
        // 兼容 r 和 radius 两种写法，推荐使用 r
        return util_1.isNil(attrs.r) ? attrs.radius : attrs.r;
    };
    Marker.prototype._getPath = function () {
        var attrs = this.attr();
        var x = attrs.x, y = attrs.y;
        var symbol = attrs.symbol || 'circle';
        var r = this._getR(attrs);
        var method;
        var path;
        if (util_2.isFunction(symbol)) {
            method = symbol;
            path = method(x, y, r);
            // 将 path 转成绝对路径
            path = path_util_1.path2Absolute(path);
        }
        else {
            // 内置 symbol 的 path 都是绝对路径，直接绘制即可，不需要对 path 进行特殊处理
            method = Marker.Symbols[symbol];
            if (!method) {
                console.warn(symbol + " marker is not supported.");
                return null;
            }
            path = method(x, y, r);
        }
        return path;
    };
    Marker.prototype.createPath = function (context) {
        var path = this._getPath();
        var paramsCache = this.get('paramsCache');
        draw_1.drawPath(this, context, { path: path }, paramsCache);
    };
    Marker.Symbols = Symbols;
    return Marker;
}(base_1.default));
exports.default = Marker;
//# sourceMappingURL=marker.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/util":1623251340057,"../util/draw":1623251340059}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340070, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var g_math_1 = require("@antv/g-math");
var util_1 = require("@antv/util");
var base_1 = require("./base");
var path_util_1 = require("@antv/path-util");
var draw_1 = require("../util/draw");
var polygon_1 = require("../util/in-path/polygon");
var path_1 = require("../util/path");
var ArrowUtil = require("../util/arrow");
// 是否在多个多边形内部
function isInPolygons(polygons, x, y) {
    var isHit = false;
    for (var i = 0; i < polygons.length; i++) {
        var points = polygons[i];
        isHit = polygon_1.default(points, x, y);
        if (isHit) {
            break;
        }
    }
    return isHit;
}
var Path = /** @class */ (function (_super) {
    tslib_1.__extends(Path, _super);
    function Path() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Path.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { startArrow: false, endArrow: false });
    };
    Path.prototype.initAttrs = function (attrs) {
        this._setPathArr(attrs.path);
        this.setArrow();
    };
    // 更新属性时，检测是否更改了 path
    Path.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name === 'path') {
            this._setPathArr(value);
        }
        // 由于箭头的绘制依赖于 line 的诸多 attrs，因此这里不再对每个 attr 进行判断，attr 每次变化都会影响箭头的更新
        this.setArrow();
    };
    // 将 path 转换成绝对路径
    Path.prototype._setPathArr = function (path) {
        // 转换 path 的格式
        this.attrs.path = path_util_1.path2Absolute(path);
        var hasArc = path_1.default.hasArc(path);
        // 为了加速 path 的绘制、拾取和计算，这个地方可以缓存很多东西
        // 这些缓存都是第一次需要时计算和存储，虽然增加了复杂度，但是频繁调用的方法，性能有很大提升
        this.set('hasArc', hasArc);
        this.set('paramsCache', {}); // 清理缓存
        this.set('segments', null); // 延迟生成 path，在动画场景下可能不会有拾取
        this.set('curve', null);
        this.set('tCache', null);
        this.set('totalLength', null);
    };
    Path.prototype.getSegments = function () {
        var segments = this.get('segements');
        if (!segments) {
            segments = path_util_1.path2Segments(this.attr('path'));
            this.set('segments', segments);
        }
        return segments;
    };
    Path.prototype.setArrow = function () {
        var attrs = this.attr();
        var startArrow = attrs.startArrow, endArrow = attrs.endArrow;
        if (startArrow) {
            var tangent = this.getStartTangent();
            ArrowUtil.addStartArrow(this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
        }
        if (endArrow) {
            var tangent = this.getEndTangent();
            ArrowUtil.addEndArrow(this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
        }
    };
    Path.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var segments = this.getSegments();
        var hasArc = this.get('hasArc');
        var isHit = false;
        if (isStroke) {
            var length_1 = this.getTotalLength();
            isHit = path_1.default.isPointInStroke(segments, lineWidth, x, y, length_1);
        }
        if (!isHit && isFill) {
            // TODO 处理hasArc的场景
            var path = this.attr('path');
            var extractResutl = path_1.default.extractPolygons(path);
            // 提取出来的多边形包含闭合的和非闭合的，在这里统一按照多边形处理
            isHit = isInPolygons(extractResutl.polygons, x, y) || isInPolygons(extractResutl.polylines, x, y);
        }
        return isHit;
    };
    Path.prototype.createPath = function (context) {
        var attrs = this.attr();
        var paramsCache = this.get('paramsCache'); // 由于计算圆弧的参数成本很大，所以要缓存
        draw_1.drawPath(this, context, attrs, paramsCache);
    };
    Path.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get total length of path
     * @return {number} length
     */
    Path.prototype.getTotalLength = function () {
        var totalLength = this.get('totalLength');
        if (!util_1.isNil(totalLength)) {
            return totalLength;
        }
        this._calculateCurve();
        this._setTcache();
        return this.get('totalLength');
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    Path.prototype.getPoint = function (ratio) {
        var tCache = this.get('tCache');
        if (!tCache) {
            this._calculateCurve();
            this._setTcache();
            tCache = this.get('tCache');
        }
        var subt;
        var index;
        var curve = this.get('curve');
        if (!tCache || tCache.length === 0) {
            if (curve) {
                return {
                    x: curve[0][1],
                    y: curve[0][2],
                };
            }
            return null;
        }
        util_1.each(tCache, function (v, i) {
            if (ratio >= v[0] && ratio <= v[1]) {
                subt = (ratio - v[0]) / (v[1] - v[0]);
                index = i;
            }
        });
        var seg = curve[index];
        if (util_1.isNil(seg) || util_1.isNil(index)) {
            return null;
        }
        var l = seg.length;
        var nextSeg = curve[index + 1];
        return g_math_1.Cubic.pointAt(seg[l - 2], seg[l - 1], nextSeg[1], nextSeg[2], nextSeg[3], nextSeg[4], nextSeg[5], nextSeg[6], subt);
    };
    Path.prototype._calculateCurve = function () {
        var path = this.attr().path;
        this.set('curve', path_1.default.pathToCurve(path));
    };
    Path.prototype._setTcache = function () {
        var totalLength = 0;
        var tempLength = 0;
        // 每段 curve 对应起止点的长度比例列表，形如: [[0, 0.25], [0.25, 0.6]. [0.6, 0.9], [0.9, 1]]
        var tCache = [];
        var segmentT;
        var segmentL;
        var segmentN;
        var l;
        var curve = this.get('curve');
        if (!curve) {
            return;
        }
        util_1.each(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
                totalLength +=
                    g_math_1.Cubic.length(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]) || 0;
            }
        });
        this.set('totalLength', totalLength);
        if (totalLength === 0) {
            this.set('tCache', []);
            return;
        }
        util_1.each(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
                segmentT = [];
                segmentT[0] = tempLength / totalLength;
                segmentL = g_math_1.Cubic.length(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]);
                // 当 path 不连续时，segmentL 可能为空，为空时需要作为 0 处理
                tempLength += segmentL || 0;
                segmentT[1] = tempLength / totalLength;
                tCache.push(segmentT);
            }
        });
        this.set('tCache', tCache);
    };
    /**
     * Get start tangent vector
     * @return {Array}
     */
    Path.prototype.getStartTangent = function () {
        var segments = this.getSegments();
        var result;
        if (segments.length > 1) {
            var startPoint = segments[0].currentPoint;
            var endPoint = segments[1].currentPoint;
            var tangent = segments[1].startTangent;
            result = [];
            if (tangent) {
                result.push([startPoint[0] - tangent[0], startPoint[1] - tangent[1]]);
                result.push([startPoint[0], startPoint[1]]);
            }
            else {
                result.push([endPoint[0], endPoint[1]]);
                result.push([startPoint[0], startPoint[1]]);
            }
        }
        return result;
    };
    /**
     * Get end tangent vector
     * @return {Array}
     */
    Path.prototype.getEndTangent = function () {
        var segments = this.getSegments();
        var length = segments.length;
        var result;
        if (length > 1) {
            var startPoint = segments[length - 2].currentPoint;
            var endPoint = segments[length - 1].currentPoint;
            var tangent = segments[length - 1].endTangent;
            result = [];
            if (tangent) {
                result.push([endPoint[0] - tangent[0], endPoint[1] - tangent[1]]);
                result.push([endPoint[0], endPoint[1]]);
            }
            else {
                result.push([startPoint[0], startPoint[1]]);
                result.push([endPoint[0], endPoint[1]]);
            }
        }
        return result;
    };
    return Path;
}(base_1.default));
exports.default = Path;
//# sourceMappingURL=path.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/draw":1623251340059,"../util/in-path/polygon":1623251340071,"../util/path":1623251340072,"../util/arrow":1623251340062}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340071, function(require, module, exports) {

/**
 * @fileoverview 判断点是否在多边形内
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 多边形的射线检测，参考：https://blog.csdn.net/WilliamSun0122/article/details/77994526
var tolerance = 1e-6;
// 三态函数，判断两个double在eps精度下的大小关系
function dcmp(x) {
    if (Math.abs(x) < tolerance) {
        return 0;
    }
    return x < 0 ? -1 : 1;
}
// 判断点Q是否在p1和p2的线段上
function onSegment(p1, p2, q) {
    if ((q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) &&
        Math.min(p1[0], p2[0]) <= q[0] &&
        q[0] <= Math.max(p1[0], p2[0]) &&
        Math.min(p1[1], p2[1]) <= q[1] &&
        q[1] <= Math.max(p1[1], p2[1])) {
        return true;
    }
    return false;
}
// 判断点P在多边形内-射线法
function isInPolygon(points, x, y) {
    var isHit = false;
    var n = points.length;
    if (n <= 2) {
        // svg 中点小于 3 个时，不显示，也无法被拾取
        return false;
    }
    for (var i = 0; i < n; i++) {
        var p1 = points[i];
        var p2 = points[(i + 1) % n];
        if (onSegment(p1, p2, [x, y])) {
            // 点在多边形一条边上
            return true;
        }
        // 前一个判断min(p1[1],p2[1])<P.y<=max(p1[1],p2[1])
        // 后一个判断被测点 在 射线与边交点 的左边
        if (dcmp(p1[1] - y) > 0 !== dcmp(p2[1] - y) > 0 &&
            dcmp(x - ((y - p1[1]) * (p1[0] - p2[0])) / (p1[1] - p2[1]) - p1[0]) < 0) {
            isHit = !isHit;
        }
    }
    return isHit;
}
exports.default = isInPolygon;
//# sourceMappingURL=polygon.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340072, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @fileoverview path 的一些工具
 * @author dxq613@gmail.com
 */
var g_base_1 = require("@antv/g-base");
var g_math_1 = require("@antv/g-math");
var g_math_2 = require("@antv/g-math");
var matrix_util_1 = require("@antv/matrix-util");
var vec3 = require("gl-matrix/vec3");
var util_1 = require("./util");
var line_1 = require("./in-stroke/line");
var arc_1 = require("./in-stroke/arc");
var transform = matrix_util_1.ext.transform;
function hasArc(path) {
    var hasArc = false;
    var count = path.length;
    for (var i = 0; i < count; i++) {
        var params = path[i];
        var cmd = params[0];
        if (cmd === 'C' || cmd === 'A' || cmd === 'Q') {
            hasArc = true;
            break;
        }
    }
    return hasArc;
}
function isPointInStroke(segments, lineWidth, x, y, length) {
    var isHit = false;
    var halfWidth = lineWidth / 2;
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        var currentPoint = segment.currentPoint, params = segment.params, prePoint = segment.prePoint, box = segment.box;
        // 如果在前面已经生成过包围盒，直接按照包围盒计算
        if (box && !util_1.inBox(box.x - halfWidth, box.y - halfWidth, box.width + lineWidth, box.height + lineWidth, x, y)) {
            continue;
        }
        switch (segment.command) {
            // L 和 Z 都是直线， M 不进行拾取
            case 'L':
            case 'Z':
                isHit = line_1.default(prePoint[0], prePoint[1], currentPoint[0], currentPoint[1], lineWidth, x, y);
                break;
            case 'Q':
                var qDistance = g_math_1.Quad.pointDistance(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], x, y);
                isHit = qDistance <= lineWidth / 2;
                break;
            case 'C':
                var cDistance = g_math_2.Cubic.pointDistance(prePoint[0], // 上一段结束位置, 即 C 的起始点
                prePoint[1], params[1], // 'C' 的参数，1、2 为第一个控制点，3、4 为第二个控制点，5、6 为结束点
                params[2], params[3], params[4], params[5], params[6], x, y, length);
                isHit = cDistance <= lineWidth / 2;
                break;
            case 'A':
                // 计算点到椭圆圆弧的距离，暂时使用近似算法，后面可以改成切割法求最近距离
                var arcParams = segment.arcParams;
                var cx = arcParams.cx, cy = arcParams.cy, rx = arcParams.rx, ry = arcParams.ry, startAngle = arcParams.startAngle, endAngle = arcParams.endAngle, xRotation = arcParams.xRotation;
                var p = [x, y, 1];
                var r = rx > ry ? rx : ry;
                var scaleX = rx > ry ? 1 : rx / ry;
                var scaleY = rx > ry ? ry / rx : 1;
                var m = transform(null, [
                    ['t', -cx, -cy],
                    ['r', -xRotation],
                    ['s', 1 / scaleX, 1 / scaleY],
                ]);
                vec3.transformMat3(p, p, m);
                isHit = arc_1.default(0, 0, r, startAngle, endAngle, lineWidth, p[0], p[1]);
                break;
            default:
                break;
        }
        if (isHit) {
            break;
        }
    }
    return isHit;
}
/**
 * 提取出内部的闭合多边形和非闭合的多边形，假设 path 不存在圆弧
 * @param {Array} path 路径
 * @returns {Array} 点的集合
 */
function extractPolygons(path) {
    var count = path.length;
    var polygons = [];
    var polylines = [];
    var points = []; // 防止第一个命令不是 'M'
    for (var i = 0; i < count; i++) {
        var params = path[i];
        var cmd = params[0];
        if (cmd === 'M') {
            // 遇到 'M' 判定是否是新数组，新数组中没有点
            if (points.length) {
                // 如果存在点，则说明没有遇到 'Z'，开始了一个新的多边形
                polylines.push(points);
                points = []; // 创建新的点
            }
            points.push([params[1], params[2]]);
        }
        else if (cmd === 'Z') {
            if (points.length) {
                // 存在点
                polygons.push(points);
                points = []; // 开始新的点集合
            }
            // 如果不存在点，同时 'Z'，则说明是错误，不处理
        }
        else {
            points.push([params[1], params[2]]);
        }
    }
    // 说明 points 未放入 polygons 或者 polyline
    // 仅当只有一个 M，没有 Z 时会发生这种情况
    if (points.length > 0) {
        polylines.push(points);
    }
    return {
        polygons: polygons,
        polylines: polylines,
    };
}
exports.default = tslib_1.__assign({ hasArc: hasArc,
    extractPolygons: extractPolygons,
    isPointInStroke: isPointInStroke }, g_base_1.PathUtil);
//# sourceMappingURL=path.js.map
}, function(modId) { var map = {"./util":1623251340057,"./in-stroke/line":1623251340068,"./in-stroke/arc":1623251340073}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340073, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
function arc(cx, cy, r, startAngle, endAngle, lineWidth, x, y) {
    var angle = (Math.atan2(y - cy, x - cx) + Math.PI * 2) % (Math.PI * 2); // 转换到 0 - 2 * Math.PI 之间
    if (angle < startAngle || angle > endAngle) {
        return false;
    }
    var point = {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
    };
    return util_1.distance(point.x, point.y, x, y) <= lineWidth / 2;
}
exports.default = arc;
//# sourceMappingURL=arc.js.map
}, function(modId) { var map = {"../util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340074, function(require, module, exports) {

/**
 * @fileoverview 多边形
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./base");
var polyline_1 = require("../util/in-stroke/polyline");
var polygon_1 = require("../util/in-path/polygon");
var Polygon = /** @class */ (function (_super) {
    tslib_1.__extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var points = this.attr().points;
        var isHit = false;
        if (isStroke) {
            isHit = polyline_1.default(points, lineWidth, x, y, true);
        }
        if (!isHit && isFill) {
            isHit = polygon_1.default(points, x, y);
        }
        return isHit;
    };
    Polygon.prototype.createPath = function (context) {
        var attrs = this.attr();
        var points = attrs.points;
        if (points.length < 2) {
            return;
        }
        context.beginPath();
        for (var i = 0; i < points.length; i++) {
            var point = points[i];
            if (i === 0) {
                context.moveTo(point[0], point[1]);
            }
            else {
                context.lineTo(point[0], point[1]);
            }
        }
        context.closePath();
    };
    return Polygon;
}(base_1.default));
exports.default = Polygon;
//# sourceMappingURL=polygon.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/in-stroke/polyline":1623251340075,"../util/in-path/polygon":1623251340071}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340075, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = require("./line");
function inPolyline(points, lineWidth, x, y, isClose) {
    var count = points.length;
    if (count < 2) {
        return false;
    }
    for (var i = 0; i < count - 1; i++) {
        var x1 = points[i][0];
        var y1 = points[i][1];
        var x2 = points[i + 1][0];
        var y2 = points[i + 1][1];
        if (line_1.default(x1, y1, x2, y2, lineWidth, x, y)) {
            return true;
        }
    }
    // 如果封闭，则计算起始点和结束点的边
    if (isClose) {
        var first = points[0];
        var last = points[count - 1];
        if (line_1.default(first[0], first[1], last[0], last[1], lineWidth, x, y)) {
            return true;
        }
    }
    return false;
}
exports.default = inPolyline;
//# sourceMappingURL=polyline.js.map
}, function(modId) { var map = {"./line":1623251340068}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340076, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var g_math_1 = require("@antv/g-math");
var g_math_2 = require("@antv/g-math");
var util_1 = require("@antv/util");
var base_1 = require("./base");
var polyline_1 = require("../util/in-stroke/polyline");
var ArrowUtil = require("../util/arrow");
var PolyLine = /** @class */ (function (_super) {
    tslib_1.__extends(PolyLine, _super);
    function PolyLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolyLine.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { startArrow: false, endArrow: false });
    };
    PolyLine.prototype.initAttrs = function (attrs) {
        this.setArrow();
    };
    // 更新属性时，检测是否更改了 points
    PolyLine.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        this.setArrow();
        if (['points'].indexOf(name) !== -1) {
            this._resetCache();
        }
    };
    PolyLine.prototype._resetCache = function () {
        this.set('totalLength', null);
        this.set('tCache', null);
    };
    PolyLine.prototype.setArrow = function () {
        var attrs = this.attr();
        var _a = this.attrs, points = _a.points, startArrow = _a.startArrow, endArrow = _a.endArrow;
        var length = points.length;
        var x1 = points[0][0];
        var y1 = points[0][1];
        var x2 = points[length - 1][0];
        var y2 = points[length - 1][1];
        if (startArrow) {
            ArrowUtil.addStartArrow(this, attrs, points[1][0], points[1][1], x1, y1);
        }
        if (endArrow) {
            ArrowUtil.addEndArrow(this, attrs, points[length - 2][0], points[length - 2][1], x2, y2);
        }
    };
    // 不允许 fill
    PolyLine.prototype.isFill = function () {
        return false;
    };
    PolyLine.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        // 没有设置 stroke 不能被拾取, 没有线宽不能被拾取
        if (!isStroke || !lineWidth) {
            return false;
        }
        var points = this.attr().points;
        return polyline_1.default(points, lineWidth, x, y, false);
    };
    // 始终填充
    PolyLine.prototype.isStroke = function () {
        return true;
    };
    PolyLine.prototype.createPath = function (context) {
        var _a = this.attr(), points = _a.points, startArrow = _a.startArrow, endArrow = _a.endArrow;
        var length = points.length;
        if (points.length < 2) {
            return;
        }
        var x1 = points[0][0];
        var y1 = points[0][1];
        var x2 = points[length - 1][0];
        var y2 = points[length - 1][1];
        // 如果定义了箭头，并且是自定义箭头，线条相应缩进
        if (startArrow && startArrow.d) {
            var distance = ArrowUtil.getShortenOffset(x1, y1, points[1][0], points[1][1], startArrow.d);
            x1 += distance.dx;
            y1 += distance.dy;
        }
        if (endArrow && endArrow.d) {
            var distance = ArrowUtil.getShortenOffset(points[length - 2][0], points[length - 2][1], x2, y2, endArrow.d);
            x2 -= distance.dx;
            y2 -= distance.dy;
        }
        context.beginPath();
        context.moveTo(x1, y1);
        for (var i = 0; i < length - 1; i++) {
            var point = points[i];
            context.lineTo(point[0], point[1]);
        }
        context.lineTo(x2, y2);
    };
    PolyLine.prototype.afterDrawPath = function (context) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        if (startArrowShape) {
            startArrowShape.draw(context);
        }
        if (endArrowShape) {
            endArrowShape.draw(context);
        }
    };
    /**
     * Get length of polyline
     * @return {number} length
     */
    PolyLine.prototype.getTotalLength = function () {
        var points = this.attr().points;
        // get totalLength from cache
        var totalLength = this.get('totalLength');
        if (!util_1.isNil(totalLength)) {
            return totalLength;
        }
        this.set('totalLength', g_math_2.Polyline.length(points));
        return this.get('totalLength');
    };
    /**
     * Get point according to ratio
     * @param {number} ratio
     * @return {Point} point
     */
    PolyLine.prototype.getPoint = function (ratio) {
        var points = this.attr().points;
        // get tCache from cache
        var tCache = this.get('tCache');
        if (!tCache) {
            this._setTcache();
            tCache = this.get('tCache');
        }
        var subt;
        var index;
        util_1.each(tCache, function (v, i) {
            if (ratio >= v[0] && ratio <= v[1]) {
                subt = (ratio - v[0]) / (v[1] - v[0]);
                index = i;
            }
        });
        return g_math_1.Line.pointAt(points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], subt);
    };
    PolyLine.prototype._setTcache = function () {
        var points = this.attr().points;
        if (!points || points.length === 0) {
            return;
        }
        var totalLength = this.getTotalLength();
        if (totalLength <= 0) {
            return;
        }
        var tempLength = 0;
        var tCache = [];
        var segmentT;
        var segmentL;
        util_1.each(points, function (p, i) {
            if (points[i + 1]) {
                segmentT = [];
                segmentT[0] = tempLength / totalLength;
                segmentL = g_math_1.Line.length(p[0], p[1], points[i + 1][0], points[i + 1][1]);
                tempLength += segmentL;
                segmentT[1] = tempLength / totalLength;
                tCache.push(segmentT);
            }
        });
        this.set('tCache', tCache);
    };
    /**
     * Get start tangent vector
     * @return {Array}
     */
    PolyLine.prototype.getStartTangent = function () {
        var points = this.attr().points;
        var result = [];
        result.push([points[1][0], points[1][1]]);
        result.push([points[0][0], points[0][1]]);
        return result;
    };
    /**
     * Get end tangent vector
     * @return {Array}
     */
    PolyLine.prototype.getEndTangent = function () {
        var points = this.attr().points;
        var l = points.length - 1;
        var result = [];
        result.push([points[l - 1][0], points[l - 1][1]]);
        result.push([points[l][0], points[l][1]]);
        return result;
    };
    return PolyLine;
}(base_1.default));
exports.default = PolyLine;
//# sourceMappingURL=polyline.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/in-stroke/polyline":1623251340075,"../util/arrow":1623251340062}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340077, function(require, module, exports) {

/**
 * @fileoverview 矩形
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./base");
var parse_1 = require("../util/parse");
var util_1 = require("../util/util");
var rect_1 = require("../util/in-stroke/rect");
var rect_radius_1 = require("../util/in-stroke/rect-radius");
var Rect = /** @class */ (function (_super) {
    tslib_1.__extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rect.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x: 0, y: 0, width: 0, height: 0, radius: 0 });
    };
    Rect.prototype.isInStrokeOrPath = function (x, y, isStroke, isFill, lineWidth) {
        var attrs = this.attr();
        var minX = attrs.x;
        var minY = attrs.y;
        var width = attrs.width;
        var height = attrs.height;
        var radius = attrs.radius;
        // 无圆角时的策略
        if (!radius) {
            var halfWidth = lineWidth / 2;
            // 同时填充和带有边框
            if (isFill && isStroke) {
                return util_1.inBox(minX - halfWidth, minY - halfWidth, width + halfWidth, height + halfWidth, x, y);
            }
            // 仅填充
            if (isFill) {
                return util_1.inBox(minX, minY, width, height, x, y);
            }
            if (isStroke) {
                return rect_1.default(minX, minY, width, height, lineWidth, x, y);
            }
        }
        else {
            var isHit = false;
            if (isStroke) {
                isHit = rect_radius_1.default(minX, minY, width, height, radius, lineWidth, x, y);
            }
            // 仅填充时带有圆角的矩形直接通过图形拾取
            // 以后可以改成纯数学的近似拾取，将圆弧切割成多边形
            if (!isHit && isFill) {
                // TODO 简单判断，后续补
                isHit = util_1.inBox(minX, minY, width, height, x, y);
            }
            return isHit;
        }
    };
    Rect.prototype.createPath = function (context) {
        var attrs = this.attr();
        var x = attrs.x;
        var y = attrs.y;
        var width = attrs.width;
        var height = attrs.height;
        var radius = attrs.radius;
        context.beginPath();
        if (radius === 0) {
            // 改成原生的rect方法
            context.rect(x, y, width, height);
        }
        else {
            var _a = parse_1.parseRadius(radius), r1 = _a[0], r2 = _a[1], r3 = _a[2], r4 = _a[3];
            context.moveTo(x + r1, y);
            context.lineTo(x + width - r2, y);
            r2 !== 0 && context.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
            context.lineTo(x + width, y + height - r3);
            r3 !== 0 && context.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
            context.lineTo(x + r4, y + height);
            r4 !== 0 && context.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
            context.lineTo(x, y + r1);
            r1 !== 0 && context.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
            context.closePath();
        }
    };
    return Rect;
}(base_1.default));
exports.default = Rect;
//# sourceMappingURL=rect.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/parse":1623251340060,"../util/util":1623251340057,"../util/in-stroke/rect":1623251340078,"../util/in-stroke/rect-radius":1623251340079}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340078, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
function inRect(minX, minY, width, height, lineWidth, x, y) {
    var halfWidth = lineWidth / 2;
    // 将四个边看做矩形来检测，比边的检测算法要快
    return (util_1.inBox(minX - halfWidth, minY - halfWidth, width, lineWidth, x, y) || // 上边
        util_1.inBox(minX + width - halfWidth, minY - halfWidth, lineWidth, height, x, y) || // 右边
        util_1.inBox(minX + halfWidth, minY + height - halfWidth, width, lineWidth, x, y) || // 下边
        util_1.inBox(minX - halfWidth, minY + halfWidth, lineWidth, height, x, y)); // 左边
}
exports.default = inRect;
//# sourceMappingURL=rect.js.map
}, function(modId) { var map = {"../util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340079, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var line_1 = require("./line");
var arc_1 = require("./arc");
function rectWithRadius(minX, minY, width, height, radius, lineWidth, x, y) {
    var halfWidth = lineWidth / 2;
    return (line_1.default(minX + radius, minY, minX + width - radius, minY, lineWidth, x, y) ||
        line_1.default(minX + width, minY + radius, minX + width, minY + height - radius, lineWidth, x, y) ||
        line_1.default(minX + width - radius, minY + height, minX + radius, minY + height, lineWidth, x, y) ||
        line_1.default(minX, minY + height - radius, minX, minY + radius, lineWidth, x, y) ||
        arc_1.default(minX + width - radius, minY + radius, radius, 1.5 * Math.PI, 2 * Math.PI, lineWidth, x, y) ||
        arc_1.default(minX + width - radius, minY + height - radius, radius, 0, 0.5 * Math.PI, lineWidth, x, y) ||
        arc_1.default(minX + radius, minY + height - radius, radius, 0.5 * Math.PI, Math.PI, lineWidth, x, y) ||
        arc_1.default(minX + radius, minY + radius, radius, Math.PI, 1.5 * Math.PI, lineWidth, x, y));
}
exports.default = rectWithRadius;
//# sourceMappingURL=rect-radius.js.map
}, function(modId) { var map = {"./line":1623251340068,"./arc":1623251340073}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340080, function(require, module, exports) {

/**
 * @fileoverview 文本
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var base_1 = require("./base");
var util_1 = require("../util/util");
var g_base_1 = require("@antv/g-base");
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 默认文本属性
    Text.prototype.getDefaultAttrs = function () {
        var attrs = _super.prototype.getDefaultAttrs.call(this);
        return tslib_1.__assign(tslib_1.__assign({}, attrs), { x: 0, y: 0, text: null, fontSize: 12, fontFamily: 'sans-serif', fontStyle: 'normal', fontWeight: 'normal', fontVariant: 'normal', textAlign: 'start', textBaseline: 'bottom' });
    };
    // 仅仅使用包围盒检测来进行拾取
    Text.prototype.isOnlyHitBox = function () {
        return true;
    };
    // 初始化时组合 font，同时判断 text 是否换行
    Text.prototype.initAttrs = function (attrs) {
        this._assembleFont();
        if (attrs.text) {
            this._setText(attrs.text);
        }
    };
    // 组装字体
    Text.prototype._assembleFont = function () {
        var attrs = this.attrs;
        attrs.font = g_base_1.assembleFont(attrs);
    };
    // 如果文本换行，则缓存数组
    Text.prototype._setText = function (text) {
        var textArr = null;
        if (util_1.isString(text) && text.indexOf('\n') !== -1) {
            textArr = text.split('\n');
        }
        this.set('textArr', textArr);
    };
    // 更新属性时，检测是否更改了 font、text
    Text.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name.startsWith('font')) {
            this._assembleFont();
        }
        if (name === 'text') {
            this._setText(value);
        }
    };
    // 这个方法在 text 时没有可以做的事情，如果要支持文字背景时可以考虑
    // createPath(context) {
    // }
    // 如果文本多行，需要获取文本间距
    Text.prototype._getSpaceingY = function () {
        var attrs = this.attrs;
        var lineHeight = attrs.lineHeight;
        var fontSize = attrs.fontSize * 1;
        return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
    };
    // 绘制文本，考虑多行的场景
    Text.prototype._drawTextArr = function (context, textArr, isFill) {
        var attrs = this.attrs;
        var textBaseline = attrs.textBaseline;
        var x = attrs.x;
        var y = attrs.y;
        var fontSize = attrs.fontSize * 1;
        var spaceingY = this._getSpaceingY();
        var height = g_base_1.getTextHeight(attrs.text, attrs.fontSize, attrs.lineHeight);
        var subY;
        util_1.each(textArr, function (subText, index) {
            subY = y + index * (spaceingY + fontSize) - height + fontSize; // bottom;
            if (textBaseline === 'middle')
                subY += height - fontSize - (height - fontSize) / 2;
            if (textBaseline === 'top')
                subY += height - fontSize;
            if (isFill) {
                context.fillText(subText, x, subY);
            }
            else {
                context.strokeText(subText, x, subY);
            }
        });
    };
    // 绘制文本，同时考虑填充和绘制边框
    Text.prototype._drawText = function (context, isFill) {
        var attrs = this.attr();
        var x = attrs.x;
        var y = attrs.y;
        var textArr = this.get('textArr');
        if (textArr) {
            this._drawTextArr(context, textArr, isFill);
        }
        else {
            var text = attrs.text;
            if (isFill) {
                context.fillText(text, x, y);
            }
            else {
                context.strokeText(text, x, y);
            }
        }
    };
    // 复写绘制和填充的逻辑：对于文本，应该先绘制边框，再进行填充
    Text.prototype.strokeAndFill = function (context) {
        var _a = this.attrs, lineWidth = _a.lineWidth, opacity = _a.opacity, strokeOpacity = _a.strokeOpacity, fillOpacity = _a.fillOpacity;
        if (this.isStroke()) {
            if (lineWidth > 0) {
                if (!util_1.isNil(strokeOpacity) && strokeOpacity !== 1) {
                    context.globalAlpha = opacity;
                }
                this.stroke(context);
            }
        }
        if (this.isFill()) {
            if (!util_1.isNil(fillOpacity) && fillOpacity !== 1) {
                context.globalAlpha = fillOpacity;
                this.fill(context);
                context.globalAlpha = opacity;
            }
            else {
                this.fill(context);
            }
        }
        this.afterDrawPath(context);
    };
    // 复写填充逻辑
    Text.prototype.fill = function (context) {
        this._drawText(context, true);
    };
    // 复写绘制边框的逻辑
    Text.prototype.stroke = function (context) {
        this._drawText(context, false);
    };
    return Text;
}(base_1.default));
exports.default = Text;
//# sourceMappingURL=text.js.map
}, function(modId) { var map = {"./base":1623251340056,"../util/util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340081, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var g_base_1 = require("@antv/g-base");
var hit_1 = require("./util/hit");
var Shape = require("./shape");
var group_1 = require("./group");
var util_1 = require("./util/util");
var time_1 = require("./util/time");
var draw_1 = require("./util/draw");
var events_1 = require("./events");
var mini_canvas_proxy_1 = require("./util/mini-canvas-proxy");
var patch_1 = require("./patch");
var Canvas = /** @class */ (function (_super) {
    tslib_1.__extends(Canvas, _super);
    function Canvas(cfg) {
        var _this = _super.call(this, cfg) || this;
        var ctx = _this.get('context');
        if (_this.isMini()) {
            if (_this.isMiniNative()) {
                // TODO 这里会传递过来extra，里面包含一些来自各个平台的优化函数
                time_1.setExtraFunction(_this.get('extra'));
            }
            else {
                // 小程序使用了自定义的canvas api，不兼容w3c标准
                _this.set('context', new Proxy(ctx, new mini_canvas_proxy_1.default()));
            }
            // 架构调整前，打一些patch
            patch_1.default(ctx, _this);
        }
        return _this;
    }
    Canvas.prototype.isMiniNative = function () {
        return this.get('renderer') === 'mini-native';
    };
    Canvas.prototype.isMini = function () {
        return this.get('renderer').startsWith('mini');
    };
    Canvas.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        // 设置渲染引擎为 canvas(h5)/mini(小程序)，只读属性
        cfg['renderer'] = 'canvas';
        // 是否自动绘制，不需要用户调用 draw 方法
        cfg['autoDraw'] = true;
        // 是否允许局部刷新图表
        cfg['localRefresh'] = true;
        cfg['refreshElements'] = [];
        // 是否在视图内自动裁剪
        cfg['clipView'] = true;
        // 是否使用快速拾取的方案，默认为 false，上层可以打开
        cfg['quickHit'] = false;
        // 给一个默认的rect，防止出现问题
        cfg['boundingClientRect'] = {
            width: 0,
            height: 0,
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
        };
        return cfg;
    };
    /**
     * @protected
     * 初始化绑定的事件
     */
    Canvas.prototype.initEvents = function () {
        var eventController = new events_1.default({
            canvas: this,
        });
        this.set('eventController', eventController);
    };
    Canvas.prototype.registerEventCallback = function (e) {
        var eventController = this.get('eventController');
        eventController.handleEvent(e);
    };
    /**
     * @protected
     * 清理所有的事件
     */
    Canvas.prototype.clearEvents = function () {
        var eventController = this.get('eventController');
        eventController.destroy();
    };
    /**
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Canvas.prototype.onCanvasChange = function (changeType) {
        /**
         * 触发画布更新的三种 changeType
         * 1. attr: 修改画布的绘图属性
         * 2. sort: 画布排序，图形的层次会发生变化
         * 3. changeSize: 改变画布大小
         */
        if (changeType === 'attr' || changeType === 'sort' || changeType === 'changeSize') {
            this.set('refreshElements', [this]);
            this.draw();
        }
    };
    Canvas.prototype.getShapeBase = function () {
        return Shape;
    };
    Canvas.prototype.getGroupBase = function () {
        return group_1.default;
    };
    /**
     * 获取屏幕像素比
     */
    Canvas.prototype.getPixelRatio = function () {
        var pixelRatio = this.get('pixelRatio') || util_1.getPixelRatio();
        // 不足 1 的取 1，超出 1 的取整
        return pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1;
    };
    Canvas.prototype.getViewRange = function () {
        return {
            minX: 0,
            minY: 0,
            maxX: this.cfg.width,
            maxY: this.cfg.height,
        };
    };
    Canvas.prototype.initDom = function () {
        if (this.isMini()) {
            var context = this.get('context');
            var fitView = this.get('fitView');
            var pixelRatio = this.getPixelRatio();
            // 设置 canvas 元素的宽度和高度，会重置缩放，因此 context.scale 需要在每次设置宽、高后调用
            // 上层框架控制 fitView，画布缩放会冲突（小程序没传 container，因此画布与container根据pixelRatio同比放大来实现高清的方案在小程序端自行维护）
            if (!fitView && pixelRatio > 1) {
                context.scale(pixelRatio, pixelRatio);
            }
            return;
        }
        _super.prototype.initDom.call(this);
    };
    // 复写基类的方法生成标签（非 mini renderer 的 super.initDom 调用）
    Canvas.prototype.createDom = function () {
        var element = document.createElement('canvas');
        var context = element.getContext('2d');
        // 缓存 context 对象
        this.set('context', context);
        return element;
    };
    Canvas.prototype.setDOMSize = function (width, height) {
        _super.prototype.setDOMSize.call(this, width, height);
        var context = this.get('context');
        var el = this.get('el');
        var pixelRatio = this.getPixelRatio();
        el.width = pixelRatio * width;
        el.height = pixelRatio * height;
        // 设置 canvas 元素的宽度和高度，会重置缩放，因此 context.scale 需要在每次设置宽、高后调用
        if (pixelRatio > 1) {
            context.scale(pixelRatio, pixelRatio);
        }
    };
    // 复写基类方法
    Canvas.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this._clearFrame(); // 需要清理掉延迟绘制的帧
        var context = this.get('context');
        context.clearRect(0, 0, this.get('width'), this.get('height'));
    };
    Canvas.prototype.getShape = function (x, y) {
        var shape;
        if (this.get('quickHit')) {
            shape = hit_1.getShape(this, x, y);
        }
        else {
            shape = _super.prototype.getShape.call(this, x, y, null);
        }
        return shape;
    };
    // 对绘制区域边缘取整，避免浮点数问题
    Canvas.prototype._getRefreshRegion = function () {
        var elements = this.get('refreshElements');
        var viewRegion = this.getViewRange();
        var region;
        // 如果是当前画布整体发生了变化，则直接重绘整个画布
        if (elements.length && elements[0] === this) {
            region = viewRegion;
        }
        else {
            region = draw_1.getMergedRegion(elements);
            if (region) {
                region.minX = Math.floor(region.minX);
                region.minY = Math.floor(region.minY);
                region.maxX = Math.ceil(region.maxX);
                region.maxY = Math.ceil(region.maxY);
                region.maxY += 1; // 在很多环境下字体的高低会不一致，附加一像素，避免残影
                var clipView = this.get('clipView');
                // 自动裁剪不在 view 内的区域
                if (clipView) {
                    region = draw_1.mergeView(region, viewRegion);
                }
            }
        }
        return region;
    };
    // 清理还在进行的绘制
    Canvas.prototype._clearFrame = function () {
        var drawFrame = this.get('drawFrame');
        if (drawFrame) {
            // 如果全部渲染时，存在局部渲染，则抛弃掉局部渲染
            time_1.clearAnimationFrame(drawFrame);
            this.set('drawFrame', null);
            this.set('refreshElements', []);
        }
    };
    // 手工调用绘制接口
    Canvas.prototype.draw = function () {
        var drawFrame = this.get('drawFrame');
        if (this.get('autoDraw') && drawFrame) {
            return;
        }
        this._startDraw();
    };
    // 触发绘制
    Canvas.prototype._startDraw = function () {
        var _this = this;
        var drawFrame = this.get('drawFrame');
        if (!drawFrame) {
            drawFrame = time_1.requestAnimationFrame(function () {
                if (_this.get('localRefresh')) {
                    _this._drawRegion();
                }
                else {
                    _this._drawAll();
                }
                // 可能存在setInterval的情况
                time_1.clearAnimationFrame(drawFrame);
                _this.set('drawFrame', null);
            });
            this.set('drawFrame', drawFrame);
        }
    };
    // 绘制局部
    Canvas.prototype._drawRegion = function () {
        var context = this.get('context');
        var refreshElements = this.get('refreshElements');
        var children = this.getChildren();
        var region = this._getRefreshRegion();
        // 需要注意可能没有 region 的场景
        // 一般发生在设置了 localRefresh ,在没有图形发生变化的情况下，用户调用了 draw
        if (region) {
            // 清理指定区域
            context.clearRect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
            // 保存上下文，设置 clip
            context.save();
            context.beginPath();
            context.rect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
            context.clip();
            draw_1.applyAttrsToContext(context, this);
            // 确认更新的元素，这个优化可以提升 10 倍左右的性能，10W 个带有 group 的节点，局部渲染会从 90ms 下降到 5-6 ms
            draw_1.checkRefresh(this, children, region);
            // 绘制子元素
            draw_1.drawChildren(context, children, region);
            context.restore();
        }
        else if (refreshElements.length) {
            // 防止发生改变的 elements 没有 region 的场景，这会发生在多个情况下
            // 1. 空的 group
            // 2. 所有 elements 没有在绘图区域
            // 3. group 下面的 elements 隐藏掉
            // 如果不进行清理 hasChanged 的状态会不正确
            draw_1.clearChanged(refreshElements);
        }
        util_1.each(refreshElements, function (element) {
            if (element.get('hasChanged')) {
                // 在视窗外的 Group 元素会加入到更新队列里，但实际却没有执行 draw() 逻辑，也就没有清除 hasChanged 标记
                // 即已经重绘完、但 hasChanged 标记没有清除的元素，需要统一清除掉。主要是 Group 存在问题，具体原因待排查
                element.set('hasChanged', false);
            }
        });
        // 针对小程序需要手动调用一次draw方法
        if (this.isMini() && !this.isMiniNative()) {
            context.draw(true);
        }
        this.set('refreshElements', []);
    };
    // 绘制所有图形
    Canvas.prototype._drawAll = function () {
        var context = this.get('context');
        var children = this.getChildren();
        context.clearRect(0, 0, this.get('width'), this.get('height'));
        draw_1.applyAttrsToContext(context, this);
        draw_1.drawChildren(context, children);
        // 针对小程序需要手动调用一次draw方法
        if (this.isMini() && !this.isMiniNative()) {
            context.draw(true);
        }
        // 对于 https://github.com/antvis/g/issues/422 的场景，全局渲染的模式下也会记录更新的元素队列，因此全局渲染完后也需要置空
        this.set('refreshElements', []);
    };
    Canvas.prototype.skipDraw = function () { };
    /**
     * 刷新图形元素，这里仅仅是放入队列，下次绘制时进行绘制
     * @param {IElement} element 图形元素
     */
    Canvas.prototype.refreshElement = function (element) {
        var refreshElements = this.get('refreshElements');
        refreshElements.push(element);
        // if (this.get('autoDraw')) {
        //   this._startDraw();
        // }
    };
    // 实现接口
    Canvas.prototype.getPointByEvent = function (ev) {
        if (this.isMini()) {
            var _a = this.getClientByEvent(ev), clientX = _a.x, clientY = _a.y;
            return this.getPointByClient(clientX, clientY);
        }
        return _super.prototype.getPointByEvent.call(this, ev);
    };
    // 获取 touch 事件的 clientX 和 clientY 需要单独处理
    Canvas.prototype.getClientByEvent = function (event) {
        // 这里需要转换成原始event
        var ev = event.srcEvent;
        var clientInfo = null;
        if (ev.touches) {
            if (ev.type === 'touchend') {
                clientInfo = ev.changedTouches[0];
            }
            else {
                clientInfo = ev.touches[0];
            }
        }
        if (!clientInfo) {
            return {};
        }
        return {
            x: clientInfo.clientX,
            y: clientInfo.clientY,
        };
    };
    // 实现接口
    Canvas.prototype.getPointByClient = function (clientX, clientY) {
        if (this.isMini()) {
            var rect = this.get('boundingClientRect');
            return {
                x: clientX + rect.left,
                y: clientY + rect.top,
            };
        }
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: clientX - bbox.left,
            y: clientY - bbox.top,
        };
    };
    // 实现接口
    Canvas.prototype.getClientByPoint = function (x, y) {
        if (this.isMini()) {
            // 小程序内需计算处理canvas的位置信息
            var rect = this.get('boundingClientRect');
            return {
                x: x + rect.left,
                y: y + rect.top,
            };
        }
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: x + bbox.left,
            y: y + bbox.top,
        };
    };
    return Canvas;
}(g_base_1.AbstractCanvas));
exports.default = Canvas;
//# sourceMappingURL=canvas.js.map
}, function(modId) { var map = {"./util/hit":1623251340082,"./shape":1623251340055,"./group":1623251340063,"./util/util":1623251340057,"./util/time":1623251340058,"./util/draw":1623251340059,"./events":1623251340083,"./util/mini-canvas-proxy":1623251340084,"./patch":1623251340085}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340082, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getShape = void 0;
var g_base_1 = require("@antv/g-base");
function invertFromMatrix(v, matrix) {
    if (matrix) {
        var invertMatrix = g_base_1.invert(matrix);
        return g_base_1.multiplyVec2(invertMatrix, v);
    }
    return v;
}
function getRefXY(element, x, y) {
    // @ts-ignore
    var totalMatrix = element.getTotalMatrix();
    if (totalMatrix) {
        var _a = invertFromMatrix([x, y, 1], totalMatrix), refX = _a[0], refY = _a[1];
        return [refX, refY];
    }
    return [x, y];
}
// 拾取前的检测，只有通过检测才能继续拾取
function preTest(element, x, y) {
    // @ts-ignore
    if (element.isCanvas && element.isCanvas()) {
        return true;
    }
    // 不允许被拾取，则返回 null
    // @ts-ignore
    if (!g_base_1.isAllowCapture(element) || element.cfg.isInView === false) {
        return false;
    }
    if (element.cfg.clipShape) {
        // 如果存在 clip
        var _a = getRefXY(element, x, y), refX = _a[0], refY = _a[1];
        if (element.isClipped(refX, refY)) {
            return false;
        }
    }
    // @ts-ignore ，这个地方调用过于频繁
    var bbox = element.cfg.cacheCanvasBBox || element.getCanvasBBox();
    // 如果没有缓存 bbox，则说明不可见
    // 注释掉的这段可能会加速拾取，上面的语句改写成 const bbox = element.cfg.cacheCanvasBBox;
    // 这时候的拾取假设图形/分组在上一次绘制都在视窗内，但是上面已经判定了 isInView 所以意义不大
    // 现在还调用 element.getCanvasBBox(); 一个很大的原因是便于单元测试
    // if (!bbox) {
    //   return false;
    // }
    if (!(x >= bbox.minX && x <= bbox.maxX && y >= bbox.minY && y <= bbox.maxY)) {
        return false;
    }
    return true;
}
// 这个方法复写了 g-base 的 getShape
function getShape(container, x, y) {
    // 没有通过检测，则返回 null
    if (!preTest(container, x, y)) {
        return null;
    }
    var shape = null;
    var children = container.getChildren();
    var count = children.length;
    for (var i = count - 1; i >= 0; i--) {
        var child = children[i];
        if (child.isGroup()) {
            shape = getShape(child, x, y);
        }
        else if (preTest(child, x, y)) {
            var curShape = child;
            var _a = getRefXY(child, x, y), refX = _a[0], refY = _a[1];
            // @ts-ignore
            if (curShape.isInShape(refX, refY)) {
                shape = child;
            }
        }
        if (shape) {
            break;
        }
    }
    return shape;
}
exports.getShape = getShape;
//# sourceMappingURL=hit.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340083, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g6_hammerjs_1 = require("g6-hammerjs");
var g_base_1 = require("@antv/g-base");
var util_1 = require("./util/util");
var CLICK_OFFSET = 40;
var LEFT_BTN_CODE = 0;
var DELEGATION_SPLIT = ':';
// 是否有委托事件监听
function hasDelegation(events, type) {
    for (var key in events) {
        if (events.hasOwnProperty(key) && key.indexOf(DELEGATION_SPLIT + type) >= 0) {
            return true;
        }
    }
    return false;
}
// 触发目标事件，目标只能是 shape 或 canvas
function emitTargetEvent(target, type, eventObj) {
    eventObj.name = type;
    eventObj.target = target;
    eventObj.currentTarget = target;
    eventObj.delegateTarget = target;
    target.emit(type, eventObj);
}
// 事件冒泡, enter 和 leave 需要对 fromShape 和 toShape 进行判同
function bubbleEvent(container, type, eventObj) {
    if (eventObj.bubbles) {
        var relativeShape = void 0;
        var isOverEvent = false;
        if (container.isCanvas() && isOverEvent) {
            return;
        }
        // 如果相关图形同当前图形在同一个容器内，不触发事件
        if (relativeShape && util_1.isParent(container, relativeShape)) {
            // 阻止继续向上冒泡
            eventObj.bubbles = false;
            return;
        }
        // 事件名称可能在委托过程中被修改，因此事件冒泡时需要重新设置事件名称
        eventObj.name = type;
        eventObj.currentTarget = container;
        eventObj.delegateTarget = container;
        container.emit(type, eventObj);
    }
}
var EventController = /** @class */ (function () {
    function EventController(cfg) {
        var _this = this;
        // 正在被拖拽的图形
        this.draggingShape = null;
        this.dragging = false;
        // 当前鼠标/touch所在位置的图形
        this.currentShape = null;
        this.panstartShape = null;
        this.panstartPoint = null;
        // 统一处理所有的回调
        this.handleEvent = function (ev) {
            _this.hammerRuntime.emit("origin_input:" + ev.type, ev);
        };
        this.canvas = cfg.canvas;
        this._initEvent();
    }
    EventController.prototype._initEvent = function () {
        var _this = this;
        this.hammerRuntime = new g6_hammerjs_1.default({}, {
            inputClass: g6_hammerjs_1.TouchInput,
        });
        this.hammerRuntime.add(new g6_hammerjs_1.default.Pan({ threshold: 0, pointers: 1 }));
        this.hammerRuntime.add(new g6_hammerjs_1.default.Swipe()).recognizeWith(this.hammerRuntime.get('pan'));
        //this.hammerRuntime.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(this.hammerRuntime.get('pan'));
        this.hammerRuntime.add(new g6_hammerjs_1.default.Pinch({ threshold: 0, pointers: 2 }));
        //.recognizeWith([this.hammerRuntime.get('pan'), this.hammerRuntime.get('rotate')]);
        this.hammerRuntime.add(new g6_hammerjs_1.default.Tap({ event: 'doubletap', taps: 2 }));
        this.hammerRuntime.add(new g6_hammerjs_1.default.Tap());
        this.hammerRuntime.on('panstart panmove panend pancancel', function (e) {
            e.srcEvent.extra = e;
            var pointInfo = _this._getPointInfo(e);
            var shape = _this._getShape(pointInfo, e);
            // 结束拖拽
            if (e.type === 'panend' || e.type === 'pancancel') {
                _this._onpanend(pointInfo, shape, e);
            }
            // 开始拖拽
            if (e.type === 'panstart') {
                // 兜底, hammer解析的事件可能缺失一次panend，所以做个兜底
                if (_this.dragging) {
                    _this.draggingShape = null;
                    _this.dragging = false;
                    _this.panstartShape = null;
                    _this.panstartPoint = null;
                }
                _this._onpanstart(pointInfo, shape, e);
            }
            // 拖拽中
            if (e.type === 'panmove') {
                _this._onpanmove(pointInfo, shape, e);
            }
            _this.currentShape = shape;
        });
        this.hammerRuntime.on('swipe', function (e) {
            _this._emitMobileEvent(e.type, e);
        });
        this.hammerRuntime.on('rotatestart rotatemove', function (e) {
            _this._emitMobileEvent(e.type, e);
        });
        this.hammerRuntime.on('pinchstart pinchmove pinchend pinchcancel', function (e) {
            if (e.type === 'pinchend' || e.type === 'pinchcancel') {
                _this._emitMobileEvent(e.type, e);
                return;
            }
            e.srcEvent.extra = {
                scale: e.scale,
            };
            _this._emitMobileEvent(e.type, e);
        });
        this.hammerRuntime.on('doubletap', function (e) {
            _this._emitMobileEvent(e.type, e);
        });
        this.hammerRuntime.on('tap', function (e) {
            _this._emitMobileEvent(e.type, e);
        });
    };
    EventController.prototype._emitMobileEvent = function (type, ev) {
        var pointInfo = this._getPointInfo(ev);
        var shape = this._getShape(pointInfo, ev);
        this._emitEvent(type, ev, pointInfo, shape);
    };
    EventController.prototype._getEventObj = function (type, event, point, target, fromShape, toShape) {
        var eventObj = new g_base_1.Event(type, event);
        eventObj.fromShape = fromShape;
        eventObj.toShape = toShape;
        eventObj.x = point.x;
        eventObj.y = point.y;
        eventObj.clientX = point.clientX;
        eventObj.clientY = point.clientY;
        eventObj.propagationPath.push(target);
        // 事件的x,y应该是基于画布左上角的，与canvas的matrix无关
        return eventObj;
    };
    // 根据点获取图形，提取成独立方法，便于后续优化
    EventController.prototype._getShape = function (point, event) {
        var ev = event.srcEvent;
        return this.canvas.getShape(point.x, point.y, ev);
    };
    // 获取事件的当前点的信息
    EventController.prototype._getPointInfo = function (ev) {
        var canvas = this.canvas;
        var clientPoint = canvas.getClientByEvent(ev);
        var point = canvas.getPointByEvent(ev);
        return {
            x: point.x,
            y: point.y,
            clientX: clientPoint.x,
            clientY: clientPoint.y,
        };
    };
    // 触发事件
    EventController.prototype._triggerEvent = function (type, ev) {
        var pointInfo = this._getPointInfo(ev);
        // 每次都获取图形有一定成本，后期可以考虑进行缓存策略
        var shape = this._getShape(pointInfo, ev);
        var method = this["_on" + type];
        if (method) {
            method.call(this, pointInfo, shape, ev);
        }
        else {
            var preShape = this.currentShape;
            // 如果进入、移出画布时存在图形，则要分别触发事件
            if (type === 'panstart' || type === 'dragenter') {
                this._emitEvent(type, ev, pointInfo, null, null, shape); // 先进入画布
                if (shape) {
                    this._emitEvent(type, ev, pointInfo, shape, null, shape); // 再触发图形的事件
                }
                if (type === 'panstart' && this.draggingShape) {
                    // 如果正在拖拽图形, 则触发 dragleave
                    this._emitEvent('dragenter', ev, pointInfo, null);
                }
            }
            else if (type === 'panend' || type === 'dragleave') {
                if (preShape) {
                    this._emitEvent(type, ev, pointInfo, preShape, preShape, null); // 先触发图形的事件
                }
                this._emitEvent(type, ev, pointInfo, null, preShape, null); // 再触发离开画布事件
                if (type === 'panend' && this.draggingShape) {
                    this._emitEvent('dragleave', ev, pointInfo, null);
                }
            }
            else {
                this._emitEvent(type, ev, pointInfo, shape, null, null); // 一般事件中不需要考虑 from, to
            }
        }
    };
    // 记录下点击的位置、图形，便于拖拽事件、click 事件的判定
    EventController.prototype._onpanstart = function (pointInfo, shape, event) {
        this.panstartShape = shape;
        this.panstartPoint = pointInfo;
        this.panstartTimeStamp = event.timeStamp;
        this._emitEvent('panstart', event, pointInfo, shape, null, null);
    };
    EventController.prototype._emitDragoverEvents = function (event, pointInfo, fromShape, toShape, isCanvasEmit) {
        if (toShape) {
            if (toShape !== fromShape) {
                if (fromShape) {
                    this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
                }
                this._emitEvent('dragenter', event, pointInfo, toShape, fromShape, toShape);
            }
            if (!isCanvasEmit) {
                this._emitEvent('dragover', event, pointInfo, toShape);
            }
        }
        else if (fromShape) {
            // TODO: 此处判断有问题，当 drag 图形时，也会触发一次 dragleave 事件，因为此时 toShape 为 null，这不是所期望的
            // 经过空白区域
            this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
        }
        if (isCanvasEmit) {
            this._emitEvent('dragover', event, pointInfo, toShape);
        }
    };
    // drag 完成后，需要做一些清理工作
    EventController.prototype._afterDrag = function (draggingShape, pointInfo, event) {
        if (draggingShape) {
            draggingShape.set('capture', true); // 恢复可以拾取
            this.draggingShape = null;
        }
        this.dragging = false;
        // drag 完成后，有可能 draggingShape 已经移动到了当前位置，所以不能直接取当前图形
        var shape = this._getShape(pointInfo, event);
        this.currentShape = shape;
    };
    // 按键抬起时，会终止拖拽、触发点击
    EventController.prototype._onpanend = function (pointInfo, shape, event) {
        var draggingShape = this.draggingShape;
        if (this.dragging) {
            // 存在可以拖拽的图形，同时拖拽到其他图形上时触发 drag 事件
            if (draggingShape) {
                this._emitEvent('drop', event, pointInfo, shape);
            }
            this._emitEvent('dragend', event, pointInfo, draggingShape);
            this._afterDrag(draggingShape, pointInfo, event);
        }
        this._emitEvent('panend', event, pointInfo, shape);
        this.panstartShape = null;
        this.panstartPoint = null;
    };
    // 当触发浏览器的 dragover 事件时，不会再触发 mousemove ，所以这时候的 dragenter, dragleave 事件需要重新处理
    EventController.prototype._ondragover = function (pointInfo, shape, event) {
        event.preventDefault(); // 如果不对 dragover 进行 preventDefault，则不会在 canvas 上触发 drop 事件
        var preShape = this.currentShape;
        this._emitDragoverEvents(event, pointInfo, preShape, shape, true);
    };
    // 大量的图形事件，都通过 mousemove 模拟
    EventController.prototype._onpanmove = function (pointInfo, shape, event) {
        var canvas = this.canvas;
        var preShape = this.currentShape;
        var draggingShape = this.draggingShape;
        // 正在拖拽时
        if (this.dragging) {
            // 正在拖拽中
            if (draggingShape) {
                // 如果拖拽了 shape 会触发 dragenter, dragleave, dragover 和 drag 事件
                this._emitDragoverEvents(event, pointInfo, preShape, shape, false);
            }
            // 如果存在 draggingShape 则会在 draggingShape 上触发 drag 事件，冒泡到 canvas 上
            // 否则在 canvas 上触发 drag 事件
            this._emitEvent('drag', event, pointInfo, draggingShape);
        }
        else {
            var panstartPoint = this.panstartPoint;
            if (panstartPoint) {
                // 当鼠标点击下去，同时移动时，进行 drag 判定
                var panstartShape = this.panstartShape;
                var now = event.timeStamp;
                var timeWindow = now - this.panstartTimeStamp;
                var dx = panstartPoint.clientX - pointInfo.clientX;
                var dy = panstartPoint.clientY - pointInfo.clientY;
                var dist = dx * dx + dy * dy;
                if (timeWindow > 120 || dist > CLICK_OFFSET) {
                    if (panstartShape && panstartShape.get('draggable')) {
                        // 设置了 draggable 的 shape 才能触发 drag 相关的事件
                        draggingShape = this.panstartShape; // 拖动鼠标点下时的 shape
                        draggingShape.set('capture', false); // 禁止继续拾取，否则无法进行 dragover,dragenter,dragleave,drop的判定
                        this.draggingShape = draggingShape;
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, draggingShape);
                        // 清理按下鼠标时缓存的值
                        this.panstartShape = null;
                        this.panstartPoint = null;
                    }
                    else if (!panstartShape && canvas.get('draggable')) {
                        // 设置了 draggable 的 canvas 才能触发 drag 相关的事件
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, null);
                        // 清理按下鼠标时缓存的值
                        this.panstartShape = null;
                        this.panstartPoint = null;
                    }
                    else {
                        this._emitEvent('panmove', event, pointInfo, shape);
                    }
                }
            }
        }
        this._emitEvent('panmove', event, pointInfo, shape);
    };
    // 触发事件
    EventController.prototype._emitEvent = function (type, event, pointInfo, shape, fromShape, toShape) {
        var eventObj = this._getEventObj(type, event, pointInfo, shape, fromShape, toShape);
        // 存在 shape 触发，则进行冒泡处理
        if (shape) {
            eventObj.shape = shape;
            // 触发 shape 上的事件
            emitTargetEvent(shape, type, eventObj);
            var parent_1 = shape.getParent();
            // 执行冒泡
            while (parent_1) {
                // 委托事件要先触发
                parent_1.emitDelegation(type, eventObj);
                // 事件冒泡停止，不能妨碍委托事件
                if (!eventObj.propagationStopped) {
                    bubbleEvent(parent_1, type, eventObj);
                }
                eventObj.propagationPath.push(parent_1);
                parent_1 = parent_1.getParent();
            }
        }
        else {
            // 如果没有 shape 直接在 canvas 上触发
            var canvas = this.canvas;
            // 直接触发 canvas 上的事件
            emitTargetEvent(canvas, type, eventObj);
        }
    };
    EventController.prototype.destroy = function () {
        // 清理缓存的对象
        this.canvas = null;
        this.currentShape = null;
        this.draggingShape = null;
        this.panstartPoint = null;
        this.panstartShape = null;
        this.panstartTimeStamp = null;
    };
    return EventController;
}());
exports.default = EventController;
//# sourceMappingURL=events.js.map
}, function(modId) { var map = {"./util/util":1623251340057}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340084, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/***
 * 小程序canvas的handler，用于做兼容兜底
 */
var MiniCanvasProxy = /** @class */ (function () {
    function MiniCanvasProxy() {
    }
    MiniCanvasProxy.prototype.set = function (obj, prop, value) {
        switch (prop) {
            case 'strokeStyle':
                obj['setStrokeStyle'](value);
                break;
            case 'fillStyle':
                obj['setFillStyle'](value);
                break;
            case 'lineWidth':
                obj['setLineWidth'](value);
                break;
            case 'lineDash':
                obj['setLineDash'](value);
                break;
            case 'globalAlpha':
                if (value || value === 0) {
                    obj['globalAlpha'] = value;
                    obj['setGlobalAlpha'](value);
                }
                break;
            case 'fontSize':
                obj['setFontSize'](value);
                break;
            case 'textAlign':
                obj['setTextAlign'](value);
                break;
            case 'fontStyle':
            case 'font':
                obj['setFont'](value);
                break;
            case 'textBaseline':
                obj['setTextBaseline'](value);
                break;
            default:
                obj[prop] = value;
        }
        return true;
    };
    MiniCanvasProxy.prototype.get = function (obj, prop) {
        if (prop === 'globalAlpha' && obj[prop] === undefined)
            return 1;
        if (typeof obj[prop] === 'function') {
            return obj[prop].bind(obj);
        }
        return obj[prop];
    };
    return MiniCanvasProxy;
}());
exports.default = MiniCanvasProxy;
//# sourceMappingURL=mini-canvas-proxy.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340085, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var bbox_1 = require("./bbox");
var image_1 = require("../shape/image");
exports.default = (function (context, canvas) {
    image_1.setMiniCanvas(canvas);
    bbox_1.default(context);
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./bbox":1623251340086,"../shape/image":1623251340066}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340086, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g_base_1 = require("@antv/g-base");
var text_1 = require("./text");
exports.default = (function (context) {
    text_1.cacheCanvasContext(context);
    g_base_1.registerBBox('text', text_1.default);
});
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./text":1623251340087}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340087, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheCanvasContext = void 0;
var util_1 = require("@antv/util");
var text_1 = require("@antv/g-base/lib/util/text");
var context = null;
function cacheCanvasContext(ctx) {
    context = ctx;
}
exports.cacheCanvasContext = cacheCanvasContext;
/**
 * 字体宽度
 * @param text 文本
 * @param font 字体
 */
function getTextWidth(text, font) {
    var width = 0;
    // null 或者 undefined 时，宽度为 0
    if (util_1.isNil(text) || text === '') {
        return width;
    }
    context.save();
    context.font = font;
    if (util_1.isString(text) && text.includes('\n')) {
        var textArr = text.split('\n');
        util_1.each(textArr, function (subText) {
            var measureWidth = context.measureText(subText).width;
            if (width < measureWidth) {
                width = measureWidth;
            }
        });
    }
    else {
        width = context.measureText(text).width;
    }
    context.restore();
    return width;
}
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, text = attrs.text, fontSize = attrs.fontSize, lineHeight = attrs.lineHeight;
    var font = attrs.font;
    if (!font) {
        // 如果未组装 font
        font = text_1.assembleFont(attrs);
    }
    var width = getTextWidth(text, font);
    var bbox;
    if (!width) {
        // 如果width不存在，四点共其实点
        bbox = {
            x: x,
            y: y,
            width: 0,
            height: 0,
        };
    }
    else {
        var textAlign = attrs.textAlign, textBaseline = attrs.textBaseline;
        var height = text_1.getTextHeight(text, fontSize, lineHeight); // attrs.height
        // 默认左右对齐：left, 默认上下对齐 bottom
        var point = {
            x: x,
            y: y - height,
        };
        if (textAlign) {
            if (textAlign === 'end' || textAlign === 'right') {
                point.x -= width;
            }
            else if (textAlign === 'center') {
                point.x -= width / 2;
            }
        }
        if (textBaseline) {
            if (textBaseline === 'top') {
                point.y += height;
            }
            else if (textBaseline === 'middle') {
                point.y += height / 2;
            }
        }
        bbox = {
            x: point.x,
            y: point.y,
            width: width,
            height: height,
        };
    }
    return bbox;
}
exports.default = default_1;
//# sourceMappingURL=text.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1623251340054);
})()
//# sourceMappingURL=index.js.map