module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1623251340022, function(require, module, exports) {

/**
 * @fileoverview G 的基础接口定义和所有的抽象类
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.PathUtil = void 0;
var tslib_1 = require("tslib");
var PathUtil = require("./util/path");
exports.PathUtil = PathUtil;
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./interfaces"), exports);
var graph_event_1 = require("./event/graph-event");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return graph_event_1.default; } });
var base_1 = require("./abstract/base");
Object.defineProperty(exports, "Base", { enumerable: true, get: function () { return base_1.default; } });
var canvas_1 = require("./abstract/canvas");
Object.defineProperty(exports, "AbstractCanvas", { enumerable: true, get: function () { return canvas_1.default; } });
var group_1 = require("./abstract/group");
Object.defineProperty(exports, "AbstractGroup", { enumerable: true, get: function () { return group_1.default; } });
var shape_1 = require("./abstract/shape");
Object.defineProperty(exports, "AbstractShape", { enumerable: true, get: function () { return shape_1.default; } });
var bbox_1 = require("./bbox");
Object.defineProperty(exports, "getBBoxMethod", { enumerable: true, get: function () { return bbox_1.getBBoxMethod; } });
var text_1 = require("./util/text");
Object.defineProperty(exports, "getTextHeight", { enumerable: true, get: function () { return text_1.getTextHeight; } });
Object.defineProperty(exports, "assembleFont", { enumerable: true, get: function () { return text_1.assembleFont; } });
var util_1 = require("./util/util");
Object.defineProperty(exports, "isAllowCapture", { enumerable: true, get: function () { return util_1.isAllowCapture; } });
var matrix_1 = require("./util/matrix");
Object.defineProperty(exports, "multiplyVec2", { enumerable: true, get: function () { return matrix_1.multiplyVec2; } });
Object.defineProperty(exports, "invert", { enumerable: true, get: function () { return matrix_1.invert; } });
var offscreen_1 = require("./util/offscreen");
Object.defineProperty(exports, "getOffScreenContext", { enumerable: true, get: function () { return offscreen_1.getOffScreenContext; } });
exports.version = '0.5.6';
//# sourceMappingURL=index.js.map
}, function(modId) {var map = {"./util/path":1623251340023,"./types":1623251340024,"./interfaces":1623251340025,"./event/graph-event":1623251340026,"./abstract/base":1623251340027,"./abstract/canvas":1623251340029,"./abstract/group":1623251340036,"./abstract/shape":1623251340037,"./bbox":1623251340038,"./util/text":1623251340046,"./util/util":1623251340028,"./util/matrix":1623251340032,"./util/offscreen":1623251340047}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340023, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.rectPath = exports.pathToCurve = exports.pathToAbsolute = exports.parsePathString = exports.parsePathArray = exports.intersection = exports.formatPath = exports.fillPathByDiff = exports.fillPath = exports.catmullRomToBezier = void 0;
var util_1 = require("@antv/util");
var SPACES = '\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029';
var PATH_COMMAND = new RegExp("([a-z])[" + SPACES + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + SPACES + "]*,?[" + SPACES + "]*)+)", 'ig');
var PATH_VALUES = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + SPACES + "]*,?[" + SPACES + "]*", 'ig');
// Parse given path string into an array of arrays of path segments
var parsePathString = function (pathString) {
    if (!pathString) {
        return null;
    }
    if (util_1.isArray(pathString)) {
        return pathString;
    }
    var paramCounts = {
        a: 7,
        c: 6,
        o: 2,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        u: 3,
        z: 0,
    };
    var data = [];
    String(pathString).replace(PATH_COMMAND, function (a, b, c) {
        var params = [];
        var name = b.toLowerCase();
        c.replace(PATH_VALUES, function (a, b) {
            b && params.push(+b);
        });
        if (name === 'm' && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = 'l';
            b = b === 'm' ? 'l' : 'L';
        }
        if (name === 'o' && params.length === 1) {
            data.push([b, params[0]]);
        }
        if (name === 'r') {
            data.push([b].concat(params));
        }
        else {
            while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                    break;
                }
            }
        }
        return pathString;
    });
    return data;
};
exports.parsePathString = parsePathString;
// http://schepers.cc/getting-to-the-point
var catmullRomToBezier = function (crp, z) {
    var d = [];
    // @ts-ignore
    for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
        var p = [
            {
                x: +crp[i - 2],
                y: +crp[i - 1],
            },
            {
                x: +crp[i],
                y: +crp[i + 1],
            },
            {
                x: +crp[i + 2],
                y: +crp[i + 3],
            },
            {
                x: +crp[i + 4],
                y: +crp[i + 5],
            },
        ];
        if (z) {
            if (!i) {
                p[0] = {
                    x: +crp[iLen - 2],
                    y: +crp[iLen - 1],
                };
            }
            else if (iLen - 4 === i) {
                p[3] = {
                    x: +crp[0],
                    y: +crp[1],
                };
            }
            else if (iLen - 2 === i) {
                p[2] = {
                    x: +crp[0],
                    y: +crp[1],
                };
                p[3] = {
                    x: +crp[2],
                    y: +crp[3],
                };
            }
        }
        else {
            if (iLen - 4 === i) {
                p[3] = p[2];
            }
            else if (!i) {
                p[0] = {
                    x: +crp[i],
                    y: +crp[i + 1],
                };
            }
        }
        d.push([
            'C',
            (-p[0].x + 6 * p[1].x + p[2].x) / 6,
            (-p[0].y + 6 * p[1].y + p[2].y) / 6,
            (p[1].x + 6 * p[2].x - p[3].x) / 6,
            (p[1].y + 6 * p[2].y - p[3].y) / 6,
            p[2].x,
            p[2].y,
        ]);
    }
    return d;
};
exports.catmullRomToBezier = catmullRomToBezier;
var ellipsePath = function (x, y, rx, ry, a) {
    var res = [];
    if (a === null && ry === null) {
        ry = rx;
    }
    x = +x;
    y = +y;
    rx = +rx;
    ry = +ry;
    if (a !== null) {
        var rad = Math.PI / 180;
        var x1 = x + rx * Math.cos(-ry * rad);
        var x2 = x + rx * Math.cos(-a * rad);
        var y1 = y + rx * Math.sin(-ry * rad);
        var y2 = y + rx * Math.sin(-a * rad);
        res = [
            ['M', x1, y1],
            ['A', rx, rx, 0, +(a - ry > 180), 0, x2, y2],
        ];
    }
    else {
        res = [['M', x, y], ['m', 0, -ry], ['a', rx, ry, 0, 1, 1, 0, 2 * ry], ['a', rx, ry, 0, 1, 1, 0, -2 * ry], ['z']];
    }
    return res;
};
var pathToAbsolute = function (pathArray) {
    pathArray = parsePathString(pathArray);
    if (!pathArray || !pathArray.length) {
        return [['M', 0, 0]];
    }
    var res = [];
    var x = 0;
    var y = 0;
    var mx = 0;
    var my = 0;
    var start = 0;
    var pa0;
    var dots;
    if (pathArray[0][0] === 'M') {
        x = +pathArray[0][1];
        y = +pathArray[0][2];
        mx = x;
        my = y;
        start++;
        res[0] = ['M', x, y];
    }
    var crz = pathArray.length === 3 &&
        pathArray[0][0] === 'M' &&
        pathArray[1][0].toUpperCase() === 'R' &&
        pathArray[2][0].toUpperCase() === 'Z';
    for (var r = void 0, pa = void 0, i = start, ii = pathArray.length; i < ii; i++) {
        res.push((r = []));
        pa = pathArray[i];
        pa0 = pa[0];
        if (pa0 !== pa0.toUpperCase()) {
            r[0] = pa0.toUpperCase();
            switch (r[0]) {
                case 'A':
                    r[1] = pa[1];
                    r[2] = pa[2];
                    r[3] = pa[3];
                    r[4] = pa[4];
                    r[5] = pa[5];
                    r[6] = +pa[6] + x;
                    r[7] = +pa[7] + y;
                    break;
                case 'V':
                    r[1] = +pa[1] + y;
                    break;
                case 'H':
                    r[1] = +pa[1] + x;
                    break;
                case 'R':
                    dots = [x, y].concat(pa.slice(1));
                    for (var j = 2, jj = dots.length; j < jj; j++) {
                        dots[j] = +dots[j] + x;
                        dots[++j] = +dots[j] + y;
                    }
                    res.pop();
                    res = res.concat(catmullRomToBezier(dots, crz));
                    break;
                case 'O':
                    res.pop();
                    dots = ellipsePath(x, y, pa[1], pa[2]);
                    dots.push(dots[0]);
                    res = res.concat(dots);
                    break;
                case 'U':
                    res.pop();
                    res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                    r = ['U'].concat(res[res.length - 1].slice(-2));
                    break;
                case 'M':
                    mx = +pa[1] + x;
                    my = +pa[2] + y;
                    break; // for lint
                default:
                    for (var j = 1, jj = pa.length; j < jj; j++) {
                        r[j] = +pa[j] + (j % 2 ? x : y);
                    }
            }
        }
        else if (pa0 === 'R') {
            dots = [x, y].concat(pa.slice(1));
            res.pop();
            res = res.concat(catmullRomToBezier(dots, crz));
            r = ['R'].concat(pa.slice(-2));
        }
        else if (pa0 === 'O') {
            res.pop();
            dots = ellipsePath(x, y, pa[1], pa[2]);
            dots.push(dots[0]);
            res = res.concat(dots);
        }
        else if (pa0 === 'U') {
            res.pop();
            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
            r = ['U'].concat(res[res.length - 1].slice(-2));
        }
        else {
            for (var k = 0, kk = pa.length; k < kk; k++) {
                r[k] = pa[k];
            }
        }
        pa0 = pa0.toUpperCase();
        if (pa0 !== 'O') {
            switch (r[0]) {
                case 'Z':
                    x = +mx;
                    y = +my;
                    break;
                case 'H':
                    x = r[1];
                    break;
                case 'V':
                    y = r[1];
                    break;
                case 'M':
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break; // for lint
                default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
            }
        }
    }
    return res;
};
exports.pathToAbsolute = pathToAbsolute;
var l2c = function (x1, y1, x2, y2) {
    return [x1, y1, x2, y2, x2, y2];
};
var q2c = function (x1, y1, ax, ay, x2, y2) {
    var _13 = 1 / 3;
    var _23 = 2 / 3;
    return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
};
var a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
    // for more information of where this math came from visit:
    // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
    if (rx === ry) {
        rx += 1;
    }
    var _120 = (Math.PI * 120) / 180;
    var rad = (Math.PI / 180) * (+angle || 0);
    var res = [];
    var xy;
    var f1;
    var f2;
    var cx;
    var cy;
    var rotate = function (x, y, rad) {
        var X = x * Math.cos(rad) - y * Math.sin(rad);
        var Y = x * Math.sin(rad) + y * Math.cos(rad);
        return {
            x: X,
            y: Y,
        };
    };
    if (!recursive) {
        xy = rotate(x1, y1, -rad);
        x1 = xy.x;
        y1 = xy.y;
        xy = rotate(x2, y2, -rad);
        x2 = xy.x;
        y2 = xy.y;
        if (x1 === x2 && y1 === y2) {
            // 若弧的起始点和终点重叠则错开一点
            x2 += 1;
            y2 += 1;
        }
        // const cos = Math.cos(Math.PI / 180 * angle);
        // const sin = Math.sin(Math.PI / 180 * angle);
        var x = (x1 - x2) / 2;
        var y = (y1 - y2) / 2;
        var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
        if (h > 1) {
            h = Math.sqrt(h);
            rx = h * rx;
            ry = h * ry;
        }
        var rx2 = rx * rx;
        var ry2 = ry * ry;
        var k = (large_arc_flag === sweep_flag ? -1 : 1) *
            Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
        cx = (k * rx * y) / ry + (x1 + x2) / 2;
        cy = (k * -ry * x) / rx + (y1 + y2) / 2;
        // @ts-ignore
        f1 = Math.asin(((y1 - cy) / ry).toFixed(9));
        // @ts-ignore
        f2 = Math.asin(((y2 - cy) / ry).toFixed(9));
        f1 = x1 < cx ? Math.PI - f1 : f1;
        f2 = x2 < cx ? Math.PI - f2 : f2;
        f1 < 0 && (f1 = Math.PI * 2 + f1);
        f2 < 0 && (f2 = Math.PI * 2 + f2);
        if (sweep_flag && f1 > f2) {
            f1 = f1 - Math.PI * 2;
        }
        if (!sweep_flag && f2 > f1) {
            f2 = f2 - Math.PI * 2;
        }
    }
    else {
        f1 = recursive[0];
        f2 = recursive[1];
        cx = recursive[2];
        cy = recursive[3];
    }
    var df = f2 - f1;
    if (Math.abs(df) > _120) {
        var f2old = f2;
        var x2old = x2;
        var y2old = y2;
        f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
        x2 = cx + rx * Math.cos(f2);
        y2 = cy + ry * Math.sin(f2);
        res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
    }
    df = f2 - f1;
    var c1 = Math.cos(f1);
    var s1 = Math.sin(f1);
    var c2 = Math.cos(f2);
    var s2 = Math.sin(f2);
    var t = Math.tan(df / 4);
    var hx = (4 / 3) * rx * t;
    var hy = (4 / 3) * ry * t;
    var m1 = [x1, y1];
    var m2 = [x1 + hx * s1, y1 - hy * c1];
    var m3 = [x2 + hx * s2, y2 - hy * c2];
    var m4 = [x2, y2];
    m2[0] = 2 * m1[0] - m2[0];
    m2[1] = 2 * m1[1] - m2[1];
    if (recursive) {
        return [m2, m3, m4].concat(res);
    }
    res = [m2, m3, m4].concat(res).join().split(',');
    var newres = [];
    for (var i = 0, ii = res.length; i < ii; i++) {
        newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }
    return newres;
};
var pathToCurve = function (path, path2) {
    var p = pathToAbsolute(path);
    var p2 = path2 && pathToAbsolute(path2);
    var attrs = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null,
    };
    var attrs2 = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null,
    };
    var pcoms1 = []; // path commands of original path p
    var pcoms2 = []; // path commands of original path p2
    var pfirst = ''; // temporary holder for original path command
    var pcom = ''; // holder for previous path command of original path
    var ii;
    var processPath = function (path, d, pcom) {
        var nx;
        var ny;
        if (!path) {
            return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
        }
        !(path[0] in
            {
                T: 1,
                Q: 1,
            }) && (d.qx = d.qy = null);
        switch (path[0]) {
            case 'M':
                d.X = path[1];
                d.Y = path[2];
                break;
            case 'A':
                path = ['C'].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                break;
            case 'S':
                if (pcom === 'C' || pcom === 'S') {
                    // In "S" case we have to take into account, if the previous command is C/S.
                    nx = d.x * 2 - d.bx; // And reflect the previous
                    ny = d.y * 2 - d.by; // command's control point relative to the current point.
                }
                else {
                    // or some else or nothing
                    nx = d.x;
                    ny = d.y;
                }
                path = ['C', nx, ny].concat(path.slice(1));
                break;
            case 'T':
                if (pcom === 'Q' || pcom === 'T') {
                    // In "T" case we have to take into account, if the previous command is Q/T.
                    d.qx = d.x * 2 - d.qx; // And make a reflection similar
                    d.qy = d.y * 2 - d.qy; // to case "S".
                }
                else {
                    // or something else or nothing
                    d.qx = d.x;
                    d.qy = d.y;
                }
                path = ['C'].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                break;
            case 'Q':
                d.qx = path[1];
                d.qy = path[2];
                path = ['C'].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                break;
            case 'L':
                path = ['C'].concat(l2c(d.x, d.y, path[1], path[2]));
                break;
            case 'H':
                path = ['C'].concat(l2c(d.x, d.y, path[1], d.y));
                break;
            case 'V':
                path = ['C'].concat(l2c(d.x, d.y, d.x, path[1]));
                break;
            case 'Z':
                path = ['C'].concat(l2c(d.x, d.y, d.X, d.Y));
                break;
            default:
                break;
        }
        return path;
    };
    var fixArc = function (pp, i) {
        if (pp[i].length > 7) {
            pp[i].shift();
            var pi = pp[i];
            while (pi.length) {
                pcoms1[i] = 'A'; // if created multiple C:s, their original seg is saved
                p2 && (pcoms2[i] = 'A'); // the same as above
                pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
            }
            pp.splice(i, 1);
            ii = Math.max(p.length, (p2 && p2.length) || 0);
        }
    };
    var fixM = function (path1, path2, a1, a2, i) {
        if (path1 && path2 && path1[i][0] === 'M' && path2[i][0] !== 'M') {
            path2.splice(i, 0, ['M', a2.x, a2.y]);
            a1.bx = 0;
            a1.by = 0;
            a1.x = path1[i][1];
            a1.y = path1[i][2];
            ii = Math.max(p.length, (p2 && p2.length) || 0);
        }
    };
    ii = Math.max(p.length, (p2 && p2.length) || 0);
    for (var i = 0; i < ii; i++) {
        p[i] && (pfirst = p[i][0]); // save current path command
        if (pfirst !== 'C') {
            // C is not saved yet, because it may be result of conversion
            pcoms1[i] = pfirst; // Save current path command
            i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
        }
        p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath
        if (pcoms1[i] !== 'A' && pfirst === 'C')
            pcoms1[i] = 'C'; // A is the only command
        // which may produce multiple C:s
        // so we have to make sure that C is also C in original path
        fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1
        if (p2) {
            // the same procedures is done to p2
            p2[i] && (pfirst = p2[i][0]);
            if (pfirst !== 'C') {
                pcoms2[i] = pfirst;
                i && (pcom = pcoms2[i - 1]);
            }
            p2[i] = processPath(p2[i], attrs2, pcom);
            if (pcoms2[i] !== 'A' && pfirst === 'C') {
                pcoms2[i] = 'C';
            }
            fixArc(p2, i);
        }
        fixM(p, p2, attrs, attrs2, i);
        fixM(p2, p, attrs2, attrs, i);
        var seg = p[i];
        var seg2 = p2 && p2[i];
        var seglen = seg.length;
        var seg2len = p2 && seg2.length;
        attrs.x = seg[seglen - 2];
        attrs.y = seg[seglen - 1];
        attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
        attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
        attrs2.bx = p2 && (parseFloat(seg2[seg2len - 4]) || attrs2.x);
        attrs2.by = p2 && (parseFloat(seg2[seg2len - 3]) || attrs2.y);
        attrs2.x = p2 && seg2[seg2len - 2];
        attrs2.y = p2 && seg2[seg2len - 1];
    }
    return p2 ? [p, p2] : p;
};
exports.pathToCurve = pathToCurve;
var p2s = /,?([a-z]),?/gi;
var parsePathArray = function (path) {
    return path.join(',').replace(p2s, '$1');
};
exports.parsePathArray = parsePathArray;
var base3 = function (t, p1, p2, p3, p4) {
    var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
    var t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
};
var bezlen = function (x1, y1, x2, y2, x3, y3, x4, y4, z) {
    if (z === null) {
        z = 1;
    }
    z = z > 1 ? 1 : z < 0 ? 0 : z;
    var z2 = z / 2;
    var n = 12;
    var Tvalues = [
        -0.1252,
        0.1252,
        -0.3678,
        0.3678,
        -0.5873,
        0.5873,
        -0.7699,
        0.7699,
        -0.9041,
        0.9041,
        -0.9816,
        0.9816,
    ];
    var Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
    var sum = 0;
    for (var i = 0; i < n; i++) {
        var ct = z2 * Tvalues[i] + z2;
        var xbase = base3(ct, x1, x2, x3, x4);
        var ybase = base3(ct, y1, y2, y3, y4);
        var comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * Math.sqrt(comb);
    }
    return z2 * sum;
};
var curveDim = function (x0, y0, x1, y1, x2, y2, x3, y3) {
    var tvalues = [];
    var bounds = [[], []];
    var a;
    var b;
    var c;
    var t;
    for (var i = 0; i < 2; ++i) {
        if (i === 0) {
            b = 6 * x0 - 12 * x1 + 6 * x2;
            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
            c = 3 * x1 - 3 * x0;
        }
        else {
            b = 6 * y0 - 12 * y1 + 6 * y2;
            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
            c = 3 * y1 - 3 * y0;
        }
        if (Math.abs(a) < 1e-12) {
            if (Math.abs(b) < 1e-12) {
                continue;
            }
            t = -c / b;
            if (t > 0 && t < 1) {
                tvalues.push(t);
            }
            continue;
        }
        var b2ac = b * b - 4 * c * a;
        var sqrtb2ac = Math.sqrt(b2ac);
        if (b2ac < 0) {
            continue;
        }
        var t1 = (-b + sqrtb2ac) / (2 * a);
        if (t1 > 0 && t1 < 1) {
            tvalues.push(t1);
        }
        var t2 = (-b - sqrtb2ac) / (2 * a);
        if (t2 > 0 && t2 < 1) {
            tvalues.push(t2);
        }
    }
    var j = tvalues.length;
    var jlen = j;
    var mt;
    while (j--) {
        t = tvalues[j];
        mt = 1 - t;
        bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
        bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    }
    bounds[0][jlen] = x0;
    bounds[1][jlen] = y0;
    bounds[0][jlen + 1] = x3;
    bounds[1][jlen + 1] = y3;
    bounds[0].length = bounds[1].length = jlen + 2;
    return {
        min: {
            x: Math.min.apply(0, bounds[0]),
            y: Math.min.apply(0, bounds[1]),
        },
        max: {
            x: Math.max.apply(0, bounds[0]),
            y: Math.max.apply(0, bounds[1]),
        },
    };
};
var intersect = function (x1, y1, x2, y2, x3, y3, x4, y4) {
    if (Math.max(x1, x2) < Math.min(x3, x4) ||
        Math.min(x1, x2) > Math.max(x3, x4) ||
        Math.max(y1, y2) < Math.min(y3, y4) ||
        Math.min(y1, y2) > Math.max(y3, y4)) {
        return;
    }
    var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
    var ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
    var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if (!denominator) {
        return;
    }
    var px = nx / denominator;
    var py = ny / denominator;
    var px2 = +px.toFixed(2);
    var py2 = +py.toFixed(2);
    if (px2 < +Math.min(x1, x2).toFixed(2) ||
        px2 > +Math.max(x1, x2).toFixed(2) ||
        px2 < +Math.min(x3, x4).toFixed(2) ||
        px2 > +Math.max(x3, x4).toFixed(2) ||
        py2 < +Math.min(y1, y2).toFixed(2) ||
        py2 > +Math.max(y1, y2).toFixed(2) ||
        py2 < +Math.min(y3, y4).toFixed(2) ||
        py2 > +Math.max(y3, y4).toFixed(2)) {
        return;
    }
    return {
        x: px,
        y: py,
    };
};
var isPointInsideBBox = function (bbox, x, y) {
    return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
};
var rectPath = function (x, y, w, h, r) {
    if (r) {
        return [
            ['M', +x + +r, y],
            ['l', w - r * 2, 0],
            ['a', r, r, 0, 0, 1, r, r],
            ['l', 0, h - r * 2],
            ['a', r, r, 0, 0, 1, -r, r],
            ['l', r * 2 - w, 0],
            ['a', r, r, 0, 0, 1, -r, -r],
            ['l', 0, r * 2 - h],
            ['a', r, r, 0, 0, 1, r, -r],
            ['z'],
        ];
    }
    var res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
    // @ts-ignore
    res.parsePathArray = parsePathArray;
    return res;
};
exports.rectPath = rectPath;
var box = function (x, y, width, height) {
    if (x === null) {
        x = y = width = height = 0;
    }
    if (y === null) {
        y = x.y;
        width = x.width;
        height = x.height;
        x = x.x;
    }
    return {
        x: x,
        y: y,
        width: width,
        w: width,
        height: height,
        h: height,
        x2: x + width,
        y2: y + height,
        cx: x + width / 2,
        cy: y + height / 2,
        r1: Math.min(width, height) / 2,
        r2: Math.max(width, height) / 2,
        r0: Math.sqrt(width * width + height * height) / 2,
        path: rectPath(x, y, width, height),
        vb: [x, y, width, height].join(' '),
    };
};
var isBBoxIntersect = function (bbox1, bbox2) {
    bbox1 = box(bbox1);
    bbox2 = box(bbox2);
    return (isPointInsideBBox(bbox2, bbox1.x, bbox1.y) ||
        isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) ||
        isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) ||
        isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) ||
        isPointInsideBBox(bbox1, bbox2.x, bbox2.y) ||
        isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) ||
        isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) ||
        isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) ||
        (((bbox1.x < bbox2.x2 && bbox1.x > bbox2.x) || (bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)) &&
            ((bbox1.y < bbox2.y2 && bbox1.y > bbox2.y) || (bbox2.y < bbox1.y2 && bbox2.y > bbox1.y))));
};
var bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
    if (!util_1.isArray(p1x)) {
        p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
    }
    var bbox = curveDim.apply(null, p1x);
    return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
};
var findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
    var t1 = 1 - t;
    var t13 = Math.pow(t1, 3);
    var t12 = Math.pow(t1, 2);
    var t2 = t * t;
    var t3 = t2 * t;
    var x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x;
    var y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
    var mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x);
    var my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y);
    var nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x);
    var ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y);
    var ax = t1 * p1x + t * c1x;
    var ay = t1 * p1y + t * c1y;
    var cx = t1 * c2x + t * p2x;
    var cy = t1 * c2y + t * p2y;
    var alpha = 90 - (Math.atan2(mx - nx, my - ny) * 180) / Math.PI;
    // (mx > nx || my < ny) && (alpha += 180);
    return {
        x: x,
        y: y,
        m: {
            x: mx,
            y: my,
        },
        n: {
            x: nx,
            y: ny,
        },
        start: {
            x: ax,
            y: ay,
        },
        end: {
            x: cx,
            y: cy,
        },
        alpha: alpha,
    };
};
var interHelper = function (bez1, bez2, justCount) {
    var bbox1 = bezierBBox(bez1);
    var bbox2 = bezierBBox(bez2);
    if (!isBBoxIntersect(bbox1, bbox2)) {
        return justCount ? 0 : [];
    }
    var l1 = bezlen.apply(0, bez1);
    var l2 = bezlen.apply(0, bez2);
    var n1 = ~~(l1 / 8);
    var n2 = ~~(l2 / 8);
    var dots1 = [];
    var dots2 = [];
    var xy = {};
    var res = justCount ? 0 : [];
    for (var i = 0; i < n1 + 1; i++) {
        var d = findDotsAtSegment.apply(0, bez1.concat(i / n1));
        dots1.push({
            x: d.x,
            y: d.y,
            t: i / n1,
        });
    }
    for (var i = 0; i < n2 + 1; i++) {
        var d = findDotsAtSegment.apply(0, bez2.concat(i / n2));
        dots2.push({
            x: d.x,
            y: d.y,
            t: i / n2,
        });
    }
    for (var i = 0; i < n1; i++) {
        for (var j = 0; j < n2; j++) {
            var di = dots1[i];
            var di1 = dots1[i + 1];
            var dj = dots2[j];
            var dj1 = dots2[j + 1];
            var ci = Math.abs(di1.x - di.x) < 0.001 ? 'y' : 'x';
            var cj = Math.abs(dj1.x - dj.x) < 0.001 ? 'y' : 'x';
            var is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
            if (is) {
                if (xy[is.x.toFixed(4)] === is.y.toFixed(4)) {
                    continue;
                }
                xy[is.x.toFixed(4)] = is.y.toFixed(4);
                var t1 = di.t + Math.abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t);
                var t2 = dj.t + Math.abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                    if (justCount) {
                        // @ts-ignore
                        res += 1;
                    }
                    else {
                        // @ts-ignore
                        res.push({
                            x: is.x,
                            y: is.y,
                            t1: t1,
                            t2: t2,
                        });
                    }
                }
            }
        }
    }
    return res;
};
var interPathHelper = function (path1, path2, justCount) {
    path1 = pathToCurve(path1);
    path2 = pathToCurve(path2);
    var x1;
    var y1;
    var x2;
    var y2;
    var x1m;
    var y1m;
    var x2m;
    var y2m;
    var bez1;
    var bez2;
    var res = justCount ? 0 : [];
    for (var i = 0, ii = path1.length; i < ii; i++) {
        var pi = path1[i];
        if (pi[0] === 'M') {
            x1 = x1m = pi[1];
            y1 = y1m = pi[2];
        }
        else {
            if (pi[0] === 'C') {
                bez1 = [x1, y1].concat(pi.slice(1));
                x1 = bez1[6];
                y1 = bez1[7];
            }
            else {
                bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                x1 = x1m;
                y1 = y1m;
            }
            for (var j = 0, jj = path2.length; j < jj; j++) {
                var pj = path2[j];
                if (pj[0] === 'M') {
                    x2 = x2m = pj[1];
                    y2 = y2m = pj[2];
                }
                else {
                    if (pj[0] === 'C') {
                        bez2 = [x2, y2].concat(pj.slice(1));
                        x2 = bez2[6];
                        y2 = bez2[7];
                    }
                    else {
                        bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                        x2 = x2m;
                        y2 = y2m;
                    }
                    var intr = interHelper(bez1, bez2, justCount);
                    if (justCount) {
                        // @ts-ignore
                        res += intr;
                    }
                    else {
                        // @ts-ignore
                        for (var k = 0, kk = intr.length; k < kk; k++) {
                            intr[k].segment1 = i;
                            intr[k].segment2 = j;
                            intr[k].bez1 = bez1;
                            intr[k].bez2 = bez2;
                        }
                        // @ts-ignore
                        res = res.concat(intr);
                    }
                }
            }
        }
    }
    return res;
};
var intersection = function (path1, path2) {
    return interPathHelper(path1, path2);
};
exports.intersection = intersection;
function decasteljau(points, t) {
    var left = [];
    var right = [];
    function recurse(points, t) {
        if (points.length === 1) {
            left.push(points[0]);
            right.push(points[0]);
        }
        else {
            var middlePoints = [];
            for (var i = 0; i < points.length - 1; i++) {
                if (i === 0) {
                    left.push(points[0]);
                }
                if (i === points.length - 2) {
                    right.push(points[i + 1]);
                }
                middlePoints[i] = [
                    (1 - t) * points[i][0] + t * points[i + 1][0],
                    (1 - t) * points[i][1] + t * points[i + 1][1],
                ];
            }
            recurse(middlePoints, t);
        }
    }
    if (points.length) {
        recurse(points, t);
    }
    return { left: left, right: right.reverse() };
}
function splitCurve(start, end, count) {
    var points = [[start[1], start[2]]];
    count = count || 2;
    var segments = [];
    if (end[0] === 'A') {
        points.push(end[6]);
        points.push(end[7]);
    }
    else if (end[0] === 'C') {
        points.push([end[1], end[2]]);
        points.push([end[3], end[4]]);
        points.push([end[5], end[6]]);
    }
    else if (end[0] === 'S' || end[0] === 'Q') {
        points.push([end[1], end[2]]);
        points.push([end[3], end[4]]);
    }
    else {
        points.push([end[1], end[2]]);
    }
    var leftSegments = points;
    var t = 1 / count;
    for (var i = 0; i < count - 1; i++) {
        var rt = t / (1 - t * i);
        var split = decasteljau(leftSegments, rt);
        segments.push(split.left);
        leftSegments = split.right;
    }
    segments.push(leftSegments);
    var result = segments.map(function (segment) {
        var cmd = [];
        if (segment.length === 4) {
            cmd.push('C');
            cmd = cmd.concat(segment[2]);
        }
        if (segment.length >= 3) {
            if (segment.length === 3) {
                cmd.push('Q');
            }
            cmd = cmd.concat(segment[1]);
        }
        if (segment.length === 2) {
            cmd.push('L');
        }
        cmd = cmd.concat(segment[segment.length - 1]);
        return cmd;
    });
    return result;
}
var splitSegment = function (start, end, count) {
    if (count === 1) {
        return [[].concat(start)];
    }
    var segments = [];
    if (end[0] === 'L' || end[0] === 'C' || end[0] === 'Q') {
        segments = segments.concat(splitCurve(start, end, count));
    }
    else {
        var temp = [].concat(start);
        if (temp[0] === 'M') {
            temp[0] = 'L';
        }
        for (var i = 0; i <= count - 1; i++) {
            segments.push(temp);
        }
    }
    return segments;
};
var fillPath = function (source, target) {
    if (source.length === 1) {
        return source;
    }
    var sourceLen = source.length - 1;
    var targetLen = target.length - 1;
    var ratio = sourceLen / targetLen;
    var segmentsToFill = [];
    if (source.length === 1 && source[0][0] === 'M') {
        for (var i = 0; i < targetLen - sourceLen; i++) {
            source.push(source[0]);
        }
        return source;
    }
    for (var i = 0; i < targetLen; i++) {
        var index = Math.floor(ratio * i);
        segmentsToFill[index] = (segmentsToFill[index] || 0) + 1;
    }
    var filled = segmentsToFill.reduce(function (filled, count, i) {
        if (i === sourceLen) {
            return filled.concat(source[sourceLen]);
        }
        return filled.concat(splitSegment(source[i], source[i + 1], count));
    }, []);
    filled.unshift(source[0]);
    if (target[targetLen] === 'Z' || target[targetLen] === 'z') {
        filled.push('Z');
    }
    return filled;
};
exports.fillPath = fillPath;
var isEqual = function (obj1, obj2) {
    if (obj1.length !== obj2.length) {
        return false;
    }
    var result = true;
    util_1.each(obj1, function (item, i) {
        if (item !== obj2[i]) {
            result = false;
            return false;
        }
    });
    return result;
};
function getMinDiff(del, add, modify) {
    var type = null;
    var min = modify;
    if (add < min) {
        min = add;
        type = 'add';
    }
    if (del < min) {
        min = del;
        type = 'del';
    }
    return {
        type: type,
        min: min,
    };
}
/*
 * https://en.wikipedia.org/wiki/Levenshtein_distance
 * 计算两条path的编辑距离
 */
var levenshteinDistance = function (source, target) {
    var sourceLen = source.length;
    var targetLen = target.length;
    var sourceSegment;
    var targetSegment;
    var temp = 0;
    if (sourceLen === 0 || targetLen === 0) {
        return null;
    }
    var dist = [];
    for (var i = 0; i <= sourceLen; i++) {
        dist[i] = [];
        dist[i][0] = { min: i };
    }
    for (var j = 0; j <= targetLen; j++) {
        dist[0][j] = { min: j };
    }
    for (var i = 1; i <= sourceLen; i++) {
        sourceSegment = source[i - 1];
        for (var j = 1; j <= targetLen; j++) {
            targetSegment = target[j - 1];
            if (isEqual(sourceSegment, targetSegment)) {
                temp = 0;
            }
            else {
                temp = 1;
            }
            var del = dist[i - 1][j].min + 1;
            var add = dist[i][j - 1].min + 1;
            var modify = dist[i - 1][j - 1].min + temp;
            dist[i][j] = getMinDiff(del, add, modify);
        }
    }
    return dist;
};
var fillPathByDiff = function (source, target) {
    var diffMatrix = levenshteinDistance(source, target);
    var sourceLen = source.length;
    var targetLen = target.length;
    var changes = [];
    var index = 1;
    var minPos = 1;
    // 如果source和target不是完全不相等
    if (diffMatrix[sourceLen][targetLen].min !== sourceLen) {
        // 获取从source到target所需改动
        for (var i = 1; i <= sourceLen; i++) {
            var min = diffMatrix[i][i].min;
            minPos = i;
            for (var j = index; j <= targetLen; j++) {
                if (diffMatrix[i][j].min < min) {
                    min = diffMatrix[i][j].min;
                    minPos = j;
                }
            }
            index = minPos;
            if (diffMatrix[i][index].type) {
                changes.push({ index: i - 1, type: diffMatrix[i][index].type });
            }
        }
        // 对source进行增删path
        for (var i = changes.length - 1; i >= 0; i--) {
            index = changes[i].index;
            if (changes[i].type === 'add') {
                source.splice(index, 0, [].concat(source[index]));
            }
            else {
                source.splice(index, 1);
            }
        }
    }
    // source尾部补齐
    sourceLen = source.length;
    var diff = targetLen - sourceLen;
    if (sourceLen < targetLen) {
        for (var i = 0; i < diff; i++) {
            if (source[sourceLen - 1][0] === 'z' || source[sourceLen - 1][0] === 'Z') {
                source.splice(sourceLen - 2, 0, source[sourceLen - 2]);
            }
            else {
                source.push(source[sourceLen - 1]);
            }
            sourceLen += 1;
        }
    }
    return source;
};
exports.fillPathByDiff = fillPathByDiff;
// 将两个点均分成count个点
function _splitPoints(points, former, count) {
    var result = [].concat(points);
    var index;
    var t = 1 / (count + 1);
    var formerEnd = _getSegmentPoints(former)[0];
    for (var i = 1; i <= count; i++) {
        t *= i;
        index = Math.floor(points.length * t);
        if (index === 0) {
            result.unshift([formerEnd[0] * t + points[index][0] * (1 - t), formerEnd[1] * t + points[index][1] * (1 - t)]);
        }
        else {
            result.splice(index, 0, [
                formerEnd[0] * t + points[index][0] * (1 - t),
                formerEnd[1] * t + points[index][1] * (1 - t),
            ]);
        }
    }
    return result;
}
/*
 * 抽取pathSegment中的关键点
 * M,L,A,Q,H,V一个端点
 * Q, S抽取一个端点，一个控制点
 * C抽取一个端点，两个控制点
 */
function _getSegmentPoints(segment) {
    var points = [];
    switch (segment[0]) {
        case 'M':
            points.push([segment[1], segment[2]]);
            break;
        case 'L':
            points.push([segment[1], segment[2]]);
            break;
        case 'A':
            points.push([segment[6], segment[7]]);
            break;
        case 'Q':
            points.push([segment[3], segment[4]]);
            points.push([segment[1], segment[2]]);
            break;
        case 'T':
            points.push([segment[1], segment[2]]);
            break;
        case 'C':
            points.push([segment[5], segment[6]]);
            points.push([segment[1], segment[2]]);
            points.push([segment[3], segment[4]]);
            break;
        case 'S':
            points.push([segment[3], segment[4]]);
            points.push([segment[1], segment[2]]);
            break;
        case 'H':
            points.push([segment[1], segment[1]]);
            break;
        case 'V':
            points.push([segment[1], segment[1]]);
            break;
        default:
    }
    return points;
}
var formatPath = function (fromPath, toPath) {
    if (fromPath.length <= 1) {
        return fromPath;
    }
    var points;
    for (var i = 0; i < toPath.length; i++) {
        if (fromPath[i][0] !== toPath[i][0]) {
            // 获取fromPath的pathSegment的端点，根据toPath的指令对其改造
            points = _getSegmentPoints(fromPath[i]);
            switch (toPath[i][0]) {
                case 'M':
                    fromPath[i] = ['M'].concat(points[0]);
                    break;
                case 'L':
                    fromPath[i] = ['L'].concat(points[0]);
                    break;
                case 'A':
                    fromPath[i] = [].concat(toPath[i]);
                    fromPath[i][6] = points[0][0];
                    fromPath[i][7] = points[0][1];
                    break;
                case 'Q':
                    if (points.length < 2) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 1);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['Q'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                case 'T':
                    fromPath[i] = ['T'].concat(points[0]);
                    break;
                case 'C':
                    if (points.length < 3) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 2);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['C'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                case 'S':
                    if (points.length < 2) {
                        if (i > 0) {
                            points = _splitPoints(points, fromPath[i - 1], 1);
                        }
                        else {
                            fromPath[i] = toPath[i];
                            break;
                        }
                    }
                    fromPath[i] = ['S'].concat(points.reduce(function (arr, i) {
                        return arr.concat(i);
                    }, []));
                    break;
                default:
                    fromPath[i] = toPath[i];
            }
        }
    }
    return fromPath;
};
exports.formatPath = formatPath;
//# sourceMappingURL=path.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340024, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=types.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340025, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=interfaces.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340026, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GraphEvent = /** @class */ (function () {
    function GraphEvent(type, event) {
        /**
         * 是否允许冒泡
         * @type {boolean}
         */
        this.bubbles = true;
        /**
         * 触发对象
         * @type {object}
         */
        this.target = null;
        /**
         * 监听对象
         * @type {object}
         */
        this.currentTarget = null;
        /**
         * 委托对象
         * @type {object}
         */
        this.delegateTarget = null;
        /**
         * 委托事件监听对象的代理对象，即 ev.delegateObject = ev.currentTarget.get('delegateObject')
         * @type {object}
         */
        this.delegateObject = null;
        /**
         * 是否阻止了原生事件
         * @type {boolean}
         */
        this.defaultPrevented = false;
        /**
         * 是否阻止传播（向上冒泡）
         * @type {boolean}
         */
        this.propagationStopped = false;
        /**
         * 触发事件的图形
         * @type {IShape}
         */
        this.shape = null;
        /**
         * 开始触发事件的图形
         * @type {IShape}
         */
        this.fromShape = null;
        /**
         * 事件结束时的触发图形
         * @type {IShape}
         */
        this.toShape = null;
        // 触发事件的路径
        this.propagationPath = [];
        this.type = type;
        this.name = type;
        this.originalEvent = event;
        this.timeStamp = event.timeStamp;
    }
    /**
     * 阻止浏览器默认的行为
     */
    GraphEvent.prototype.preventDefault = function () {
        this.defaultPrevented = true;
        if (this.originalEvent.preventDefault) {
            this.originalEvent.preventDefault();
        }
    };
    /**
     * 阻止冒泡
     */
    GraphEvent.prototype.stopPropagation = function () {
        this.propagationStopped = true;
    };
    GraphEvent.prototype.toString = function () {
        var type = this.type;
        return "[Event (type=" + type + ")]";
    };
    GraphEvent.prototype.save = function () { };
    GraphEvent.prototype.restore = function () { };
    return GraphEvent;
}());
exports.default = GraphEvent;
//# sourceMappingURL=graph-event.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340027, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var event_emitter_1 = require("@antv/event-emitter");
var util_1 = require("../util/util");
var Base = /** @class */ (function (_super) {
    tslib_1.__extends(Base, _super);
    function Base(cfg) {
        var _this = _super.call(this) || this;
        /**
         * 是否被销毁
         * @type {boolean}
         */
        _this.destroyed = false;
        var defaultCfg = _this.getDefaultCfg();
        _this.cfg = util_1.mix(defaultCfg, cfg);
        return _this;
    }
    /**
     * @protected
     * 默认的配置项
     * @returns {object} 默认的配置项
     */
    Base.prototype.getDefaultCfg = function () {
        return {};
    };
    // 实现接口的方法
    Base.prototype.get = function (name) {
        return this.cfg[name];
    };
    // 实现接口的方法
    Base.prototype.set = function (name, value) {
        this.cfg[name] = value;
    };
    // 实现接口的方法
    Base.prototype.destroy = function () {
        this.cfg = {
            destroyed: true,
        };
        this.off();
        this.destroyed = true;
    };
    return Base;
}(event_emitter_1.default));
exports.default = Base;
//# sourceMappingURL=base.js.map
}, function(modId) { var map = {"../util/util":1623251340028}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340028, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isAllowCapture = exports.isParent = exports.isBrowser = exports.removeFromArray = void 0;
function removeFromArray(arr, obj) {
    var index = arr.indexOf(obj);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
exports.removeFromArray = removeFromArray;
exports.isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var util_1 = require("@antv/util");
Object.defineProperty(exports, "isNil", { enumerable: true, get: function () { return util_1.isNil; } });
Object.defineProperty(exports, "isFunction", { enumerable: true, get: function () { return util_1.isFunction; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return util_1.isString; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return util_1.isObject; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return util_1.isArray; } });
Object.defineProperty(exports, "mix", { enumerable: true, get: function () { return util_1.mix; } });
Object.defineProperty(exports, "each", { enumerable: true, get: function () { return util_1.each; } });
Object.defineProperty(exports, "upperFirst", { enumerable: true, get: function () { return util_1.upperFirst; } });
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
function isAllowCapture(element) {
    // @ts-ignore
    return element.cfg.visible && element.cfg.capture;
}
exports.isAllowCapture = isAllowCapture;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340029, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var detect_browser_1 = require("detect-browser");
var container_1 = require("./container");
var util_1 = require("../util/util");
var timeline_1 = require("../animate/timeline");
var event_contoller_1 = require("../event/event-contoller");
var PX_SUFFIX = 'px';
var browser = detect_browser_1.detect();
var isFirefox = browser && browser.name === 'firefox';
var Canvas = /** @class */ (function (_super) {
    tslib_1.__extends(Canvas, _super);
    function Canvas(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.initContainer();
        _this.initDom();
        _this.initEvents();
        _this.initTimeline();
        return _this;
    }
    Canvas.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        // set default cursor style for canvas
        cfg['cursor'] = 'default';
        // CSS transform 目前尚未经过长时间验证，为了避免影响上层业务，默认关闭，上层按需开启
        cfg['supportCSSTransform'] = false;
        return cfg;
    };
    /**
     * @protected
     * 初始化容器
     */
    Canvas.prototype.initContainer = function () {
        var container = this.get('container');
        if (util_1.isString(container)) {
            container = document.getElementById(container);
            this.set('container', container);
        }
    };
    /**
     * @protected
     * 初始化 DOM
     */
    Canvas.prototype.initDom = function () {
        var el = this.createDom();
        this.set('el', el);
        // 附加到容器
        var container = this.get('container');
        container.appendChild(el);
        // 设置初始宽度
        this.setDOMSize(this.get('width'), this.get('height'));
    };
    /**
     * @protected
     * 初始化绑定的事件
     */
    Canvas.prototype.initEvents = function () {
        var eventController = new event_contoller_1.default({
            canvas: this,
        });
        eventController.init();
        this.set('eventController', eventController);
    };
    /**
     * @protected
     * 初始化时间轴
     */
    Canvas.prototype.initTimeline = function () {
        var timeline = new timeline_1.default(this);
        this.set('timeline', timeline);
    };
    /**
     * @protected
     * 修改画布对应的 DOM 的大小
     * @param {number} width  宽度
     * @param {number} height 高度
     */
    Canvas.prototype.setDOMSize = function (width, height) {
        var el = this.get('el');
        if (util_1.isBrowser) {
            el.style.width = width + PX_SUFFIX;
            el.style.height = height + PX_SUFFIX;
        }
    };
    // 实现接口
    Canvas.prototype.changeSize = function (width, height) {
        this.setDOMSize(width, height);
        this.set('width', width);
        this.set('height', height);
        this.onCanvasChange('changeSize');
    };
    /**
     * 获取当前的渲染引擎
     * @return {Renderer} 返回当前的渲染引擎
     */
    Canvas.prototype.getRenderer = function () {
        return this.get('renderer');
    };
    /**
     * 获取画布的 cursor 样式
     * @return {Cursor}
     */
    Canvas.prototype.getCursor = function () {
        return this.get('cursor');
    };
    /**
     * 设置画布的 cursor 样式
     * @param {Cursor} cursor  cursor 样式
     */
    Canvas.prototype.setCursor = function (cursor) {
        this.set('cursor', cursor);
        var el = this.get('el');
        if (util_1.isBrowser && el) {
            // 直接设置样式，不等待鼠标移动时再设置
            el.style.cursor = cursor;
        }
    };
    // 实现接口
    Canvas.prototype.getPointByEvent = function (ev) {
        var supportCSSTransform = this.get('supportCSSTransform');
        if (supportCSSTransform) {
            // For Firefox <= 38
            if (isFirefox && !util_1.isNil(ev.layerX) && ev.layerX !== ev.offsetX) {
                return {
                    x: ev.layerX,
                    y: ev.layerY,
                };
            }
            if (!util_1.isNil(ev.offsetX)) {
                // For IE6+, Firefox >= 39, Chrome, Safari, Opera
                return {
                    x: ev.offsetX,
                    y: ev.offsetY,
                };
            }
        }
        // should calculate by self for other cases, like Safari in ios
        // TODO: support CSS transform
        var _a = this.getClientByEvent(ev), clientX = _a.x, clientY = _a.y;
        return this.getPointByClient(clientX, clientY);
    };
    // 获取 touch 事件的 clientX 和 clientY 需要单独处理
    Canvas.prototype.getClientByEvent = function (ev) {
        var clientInfo = ev;
        if (ev.touches) {
            if (ev.type === 'touchend') {
                clientInfo = ev.changedTouches[0];
            }
            else {
                clientInfo = ev.touches[0];
            }
        }
        return {
            x: clientInfo.clientX,
            y: clientInfo.clientY,
        };
    };
    // 实现接口
    Canvas.prototype.getPointByClient = function (clientX, clientY) {
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: clientX - bbox.left,
            y: clientY - bbox.top,
        };
    };
    // 实现接口
    Canvas.prototype.getClientByPoint = function (x, y) {
        var el = this.get('el');
        var bbox = el.getBoundingClientRect();
        return {
            x: x + bbox.left,
            y: y + bbox.top,
        };
    };
    // 实现接口
    Canvas.prototype.draw = function () { };
    /**
     * @protected
     * 销毁 DOM 容器
     */
    Canvas.prototype.removeDom = function () {
        var el = this.get('el');
        el.parentNode.removeChild(el);
    };
    /**
     * @protected
     * 清理所有的事件
     */
    Canvas.prototype.clearEvents = function () {
        var eventController = this.get('eventController');
        eventController.destroy();
    };
    Canvas.prototype.isCanvas = function () {
        return true;
    };
    Canvas.prototype.getParent = function () {
        return null;
    };
    Canvas.prototype.destroy = function () {
        var timeline = this.get('timeline');
        if (this.get('destroyed')) {
            return;
        }
        this.clear();
        // 同初始化时相反顺序调用
        if (timeline) {
            // 画布销毁时自动停止动画
            timeline.stop();
        }
        this.clearEvents();
        this.removeDom();
        _super.prototype.destroy.call(this);
    };
    return Canvas;
}(container_1.default));
exports.default = Canvas;
//# sourceMappingURL=canvas.js.map
}, function(modId) { var map = {"./container":1623251340030,"../util/util":1623251340028,"../animate/timeline":1623251340033,"../event/event-contoller":1623251340035}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340030, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var element_1 = require("./element");
var util_2 = require("../util/util");
var SHAPE_MAP = {};
var INDEX = '_INDEX';
/**
 * 设置 canvas
 * @param {IElement} element 元素
 * @param {ICanvas}  canvas  画布
 */
function setCanvas(element, canvas) {
    element.set('canvas', canvas);
    if (element.isGroup()) {
        var children = element.get('children');
        if (children.length) {
            children.forEach(function (child) {
                setCanvas(child, canvas);
            });
        }
    }
}
/**
 * 设置 timeline
 * @param {IElement} element  元素
 * @param {Timeline} timeline 时间轴
 */
function setTimeline(element, timeline) {
    element.set('timeline', timeline);
    if (element.isGroup()) {
        var children = element.get('children');
        if (children.length) {
            children.forEach(function (child) {
                setTimeline(child, timeline);
            });
        }
    }
}
function contains(container, element) {
    var children = container.getChildren();
    return children.indexOf(element) >= 0;
}
function removeChild(container, element, destroy) {
    if (destroy === void 0) { destroy = true; }
    // 不再调用 element.remove() 方法，会出现循环调用
    if (destroy) {
        element.destroy();
    }
    else {
        element.set('parent', null);
        element.set('canvas', null);
    }
    util_2.removeFromArray(container.getChildren(), element);
}
function getComparer(compare) {
    return function (left, right) {
        var result = compare(left, right);
        return result === 0 ? left[INDEX] - right[INDEX] : result;
    };
}
var Container = /** @class */ (function (_super) {
    tslib_1.__extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.isCanvas = function () {
        return false;
    };
    // 根据子节点确定 BBox
    Container.prototype.getBBox = function () {
        // 所有的值可能在画布的可视区外
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        var xArr = [];
        var yArr = [];
        // 将可见元素、图形以及不为空的图形分组筛选出来，用于包围盒合并
        var children = this.getChildren().filter(function (child) {
            return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
        });
        if (children.length > 0) {
            util_2.each(children, function (child) {
                var box = child.getBBox();
                xArr.push(box.minX, box.maxX);
                yArr.push(box.minY, box.maxY);
            });
            minX = util_1.min(xArr);
            maxX = util_1.max(xArr);
            minY = util_1.min(yArr);
            maxY = util_1.max(yArr);
        }
        else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
        }
        var box = {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return box;
    };
    // 获取画布的包围盒
    Container.prototype.getCanvasBBox = function () {
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        var xArr = [];
        var yArr = [];
        // 将可见元素、图形以及不为空的图形分组筛选出来，用于包围盒合并
        var children = this.getChildren().filter(function (child) {
            return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
        });
        if (children.length > 0) {
            util_2.each(children, function (child) {
                var box = child.getCanvasBBox();
                xArr.push(box.minX, box.maxX);
                yArr.push(box.minY, box.maxY);
            });
            minX = util_1.min(xArr);
            maxX = util_1.max(xArr);
            minY = util_1.min(yArr);
            maxY = util_1.max(yArr);
        }
        else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
        }
        var box = {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
        return box;
    };
    Container.prototype.getDefaultCfg = function () {
        var cfg = _super.prototype.getDefaultCfg.call(this);
        cfg['children'] = [];
        return cfg;
    };
    Container.prototype.onAttrChange = function (name, value, originValue) {
        _super.prototype.onAttrChange.call(this, name, value, originValue);
        if (name === 'matrix') {
            var totalMatrix = this.getTotalMatrix();
            this._applyChildrenMarix(totalMatrix);
        }
    };
    // 不但应用到自己身上还要应用于子元素
    Container.prototype.applyMatrix = function (matrix) {
        var preTotalMatrix = this.getTotalMatrix();
        _super.prototype.applyMatrix.call(this, matrix);
        var totalMatrix = this.getTotalMatrix();
        // totalMatrix 没有发生变化时，这里仅考虑两者都为 null 时
        // 不继续向下传递矩阵
        if (totalMatrix === preTotalMatrix) {
            return;
        }
        this._applyChildrenMarix(totalMatrix);
    };
    // 在子元素上设置矩阵
    Container.prototype._applyChildrenMarix = function (totalMatrix) {
        var children = this.getChildren();
        util_2.each(children, function (child) {
            child.applyMatrix(totalMatrix);
        });
    };
    // 兼容老版本的接口
    Container.prototype.addShape = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var type = args[0];
        var cfg = args[1];
        if (util_2.isObject(type)) {
            cfg = type;
        }
        else {
            cfg['type'] = type;
        }
        var shapeType = SHAPE_MAP[cfg.type];
        if (!shapeType) {
            shapeType = util_2.upperFirst(cfg.type);
            SHAPE_MAP[cfg.type] = shapeType;
        }
        var ShapeBase = this.getShapeBase();
        var shape = new ShapeBase[shapeType](cfg);
        this.add(shape);
        return shape;
    };
    Container.prototype.addGroup = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var groupClass = args[0], cfg = args[1];
        var group;
        if (util_2.isFunction(groupClass)) {
            if (cfg) {
                group = new groupClass(cfg);
            }
            else {
                group = new groupClass({
                    // canvas,
                    parent: this,
                });
            }
        }
        else {
            var tmpCfg = groupClass || {};
            var TmpGroupClass = this.getGroupBase();
            group = new TmpGroupClass(tmpCfg);
        }
        this.add(group);
        return group;
    };
    Container.prototype.getCanvas = function () {
        var canvas;
        if (this.isCanvas()) {
            canvas = this;
        }
        else {
            canvas = this.get('canvas');
        }
        return canvas;
    };
    Container.prototype.getShape = function (x, y, ev) {
        // 如果不支持拾取，则直接返回
        if (!util_2.isAllowCapture(this)) {
            return null;
        }
        var children = this.getChildren();
        var shape;
        // 如果容器是 group
        if (!this.isCanvas()) {
            var v = [x, y, 1];
            // 将 x, y 转换成对应于 group 的局部坐标
            v = this.invertFromMatrix(v);
            if (!this.isClipped(v[0], v[1])) {
                shape = this._findShape(children, v[0], v[1], ev);
            }
        }
        else {
            shape = this._findShape(children, x, y, ev);
        }
        return shape;
    };
    Container.prototype._findShape = function (children, x, y, ev) {
        var shape = null;
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            if (util_2.isAllowCapture(child)) {
                if (child.isGroup()) {
                    shape = child.getShape(x, y, ev);
                }
                else if (child.isHit(x, y)) {
                    shape = child;
                }
            }
            if (shape) {
                break;
            }
        }
        return shape;
    };
    Container.prototype.add = function (element) {
        var canvas = this.getCanvas();
        var children = this.getChildren();
        var timeline = this.get('timeline');
        var preParent = element.getParent();
        if (preParent) {
            removeChild(preParent, element, false);
        }
        element.set('parent', this);
        if (canvas) {
            setCanvas(element, canvas);
        }
        if (timeline) {
            setTimeline(element, timeline);
        }
        children.push(element);
        element.onCanvasChange('add');
        this._applyElementMatrix(element);
    };
    // 将当前容器的矩阵应用到子元素
    Container.prototype._applyElementMatrix = function (element) {
        var totalMatrix = this.getTotalMatrix();
        // 添加图形或者分组时，需要把当前图元的矩阵设置进去
        if (totalMatrix) {
            element.applyMatrix(totalMatrix);
        }
    };
    Container.prototype.getChildren = function () {
        return this.get('children');
    };
    Container.prototype.sort = function () {
        var children = this.getChildren();
        // 稳定排序
        util_2.each(children, function (child, index) {
            child[INDEX] = index;
            return child;
        });
        children.sort(getComparer(function (obj1, obj2) {
            return obj1.get('zIndex') - obj2.get('zIndex');
        }));
        this.onCanvasChange('sort');
    };
    Container.prototype.clear = function () {
        this.set('clearing', true);
        if (this.destroyed) {
            return;
        }
        var children = this.getChildren();
        for (var i = children.length - 1; i >= 0; i--) {
            children[i].destroy(); // 销毁子元素
        }
        this.set('children', []);
        this.onCanvasChange('clear');
        this.set('clearing', false);
    };
    Container.prototype.destroy = function () {
        if (this.get('destroyed')) {
            return;
        }
        this.clear();
        _super.prototype.destroy.call(this);
    };
    /**
     * 获取第一个子元素
     * @return {IElement} 第一个元素
     */
    Container.prototype.getFirst = function () {
        return this.getChildByIndex(0);
    };
    /**
     * 获取最后一个子元素
     * @return {IElement} 元素
     */
    Container.prototype.getLast = function () {
        var children = this.getChildren();
        return this.getChildByIndex(children.length - 1);
    };
    /**
     * 根据索引获取子元素
     * @return {IElement} 第一个元素
     */
    Container.prototype.getChildByIndex = function (index) {
        var children = this.getChildren();
        return children[index];
    };
    /**
     * 子元素的数量
     * @return {number} 子元素数量
     */
    Container.prototype.getCount = function () {
        var children = this.getChildren();
        return children.length;
    };
    /**
     * 是否包含对应元素
     * @param {IElement} element 元素
     * @return {boolean}
     */
    Container.prototype.contain = function (element) {
        var children = this.getChildren();
        return children.indexOf(element) > -1;
    };
    /**
     * 移除对应子元素
     * @param {IElement} element 子元素
     * @param {boolean} destroy 是否销毁子元素，默认为 true
     */
    Container.prototype.removeChild = function (element, destroy) {
        if (destroy === void 0) { destroy = true; }
        if (this.contain(element)) {
            element.remove(destroy);
        }
    };
    /**
     * 查找所有匹配的元素
     * @param  {ElementFilterFn}   fn  匹配函数
     * @return {IElement[]} 元素数组
     */
    Container.prototype.findAll = function (fn) {
        var rst = [];
        var children = this.getChildren();
        util_2.each(children, function (element) {
            if (fn(element)) {
                rst.push(element);
            }
            if (element.isGroup()) {
                rst = rst.concat(element.findAll(fn));
            }
        });
        return rst;
    };
    /**
     * 查找元素，找到第一个返回
     * @param  {ElementFilterFn} fn    匹配函数
     * @return {IElement|null} 元素，可以为空
     */
    Container.prototype.find = function (fn) {
        var rst = null;
        var children = this.getChildren();
        util_2.each(children, function (element) {
            if (fn(element)) {
                rst = element;
            }
            else if (element.isGroup()) {
                rst = element.find(fn);
            }
            if (rst) {
                return false;
            }
        });
        return rst;
    };
    /**
     * 根据 ID 查找元素
     * @param {string} id 元素 id
     * @return {IElement|null} 元素
     */
    Container.prototype.findById = function (id) {
        return this.find(function (element) {
            return element.get('id') === id;
        });
    };
    /**
     * 该方法即将废弃，不建议使用
     * 根据 className 查找元素
     * TODO: 该方式定义暂时只给 G6 3.3 以后的版本使用，待 G6 中的 findByClassName 方法移除后，G 也需要同步移除
     * @param {string} className 元素 className
     * @return {IElement | null} 元素
     */
    Container.prototype.findByClassName = function (className) {
        return this.find(function (element) {
            return element.get('className') === className;
        });
    };
    /**
     * 根据 name 查找元素列表
     * @param {string}      name 元素名称
     * @return {IElement[]} 元素
     */
    Container.prototype.findAllByName = function (name) {
        return this.findAll(function (element) {
            return element.get('name') === name;
        });
    };
    return Container;
}(element_1.default));
exports.default = Container;
//# sourceMappingURL=container.js.map
}, function(modId) { var map = {"./element":1623251340031,"../util/util":1623251340028}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340031, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var matrix_util_1 = require("@antv/matrix-util");
var util_2 = require("../util/util");
var matrix_1 = require("../util/matrix");
var base_1 = require("./base");
var transform = matrix_util_1.ext.transform;
var MATRIX = 'matrix';
var CLONE_CFGS = ['zIndex', 'capture', 'visible', 'type'];
// 可以在 toAttrs 中设置，但不属于绘图属性的字段
var RESERVED_PORPS = ['repeat'];
var DELEGATION_SPLIT = ':';
var WILDCARD = '*';
// 需要考虑数组嵌套数组的场景
// 数组嵌套对象的场景不考虑
function _cloneArrayAttr(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (util_1.isArray(arr[i])) {
            result.push([].concat(arr[i]));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}
function getFormatFromAttrs(toAttrs, shape) {
    var fromAttrs = {};
    var attrs = shape.attrs;
    for (var k in toAttrs) {
        fromAttrs[k] = attrs[k];
    }
    return fromAttrs;
}
function getFormatToAttrs(props, shape) {
    var toAttrs = {};
    var attrs = shape.attr();
    util_1.each(props, function (v, k) {
        if (RESERVED_PORPS.indexOf(k) === -1 && !util_1.isEqual(attrs[k], v)) {
            toAttrs[k] = v;
        }
    });
    return toAttrs;
}
function checkExistedAttrs(animations, animation) {
    if (animation.onFrame) {
        return animations;
    }
    var startTime = animation.startTime, delay = animation.delay, duration = animation.duration;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    util_1.each(animations, function (item) {
        // 后一个动画开始执行的时间 < 前一个动画的结束时间 && 后一个动画的执行时间 > 前一个动画的延迟
        if (startTime + delay < item.startTime + item.delay + item.duration && duration > item.delay) {
            util_1.each(animation.toAttrs, function (v, k) {
                if (hasOwnProperty.call(item.toAttrs, k)) {
                    delete item.toAttrs[k];
                    delete item.fromAttrs[k];
                }
            });
        }
    });
    return animations;
}
var Element = /** @class */ (function (_super) {
    tslib_1.__extends(Element, _super);
    function Element(cfg) {
        var _this = _super.call(this, cfg) || this;
        /**
         * @protected
         * 图形属性
         * @type {ShapeAttrs}
         */
        _this.attrs = {};
        var attrs = _this.getDefaultAttrs();
        util_1.mix(attrs, cfg.attrs);
        _this.attrs = attrs;
        _this.initAttrs(attrs);
        _this.initAnimate(); // 初始化动画
        return _this;
    }
    // override
    Element.prototype.getDefaultCfg = function () {
        return {
            visible: true,
            capture: true,
            zIndex: 0,
        };
    };
    /**
     * @protected
     * 获取默认的属相
     */
    Element.prototype.getDefaultAttrs = function () {
        return {
            matrix: this.getDefaultMatrix(),
            opacity: 1,
        };
    };
    /**
     * @protected
     * 一些方法调用会引起画布变化
     * @param {ChangeType} changeType 改变的类型
     */
    Element.prototype.onCanvasChange = function (changeType) { };
    /**
     * @protected
     * 初始化属性，有些属性需要加工
     * @param {object} attrs 属性值
     */
    Element.prototype.initAttrs = function (attrs) { };
    /**
     * @protected
     * 初始化动画
     */
    Element.prototype.initAnimate = function () {
        this.set('animable', true);
        this.set('animating', false);
    };
    Element.prototype.isGroup = function () {
        return false;
    };
    Element.prototype.getParent = function () {
        return this.get('parent');
    };
    Element.prototype.getCanvas = function () {
        return this.get('canvas');
    };
    Element.prototype.attr = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var name = args[0], value = args[1];
        if (!name)
            return this.attrs;
        if (util_1.isObject(name)) {
            for (var k in name) {
                this.setAttr(k, name[k]);
            }
            this.afterAttrsChange(name);
            return this;
        }
        if (args.length === 2) {
            this.setAttr(name, value);
            this.afterAttrsChange((_a = {},
                _a[name] = value,
                _a));
            return this;
        }
        return this.attrs[name];
    };
    // 是否被裁剪，被裁剪则不显示，不参与拾取
    Element.prototype.isClipped = function (refX, refY) {
        var clip = this.getClip();
        return clip && !clip.isHit(refX, refY);
    };
    /**
     * 内部设置属性值的接口
     * @param {string} name 属性名
     * @param {any} value 属性值
     */
    Element.prototype.setAttr = function (name, value) {
        var originValue = this.attrs[name];
        if (originValue !== value) {
            this.attrs[name] = value;
            this.onAttrChange(name, value, originValue);
        }
    };
    /**
     * @protected
     * 属性值发生改变
     * @param {string} name 属性名
     * @param {any} value 属性值
     * @param {any} originValue 属性值
     */
    Element.prototype.onAttrChange = function (name, value, originValue) {
        if (name === 'matrix') {
            this.set('totalMatrix', null);
        }
    };
    /**
     * 属性更改后需要做的事情
     * @protected
     */
    Element.prototype.afterAttrsChange = function (targetAttrs) {
        if (this.cfg.isClipShape) {
            var applyTo = this.cfg.applyTo;
            if (applyTo) {
                applyTo.onCanvasChange('clip');
            }
        }
        else {
            this.onCanvasChange('attr');
        }
    };
    Element.prototype.show = function () {
        // 不是高频操作直接使用 set
        this.set('visible', true);
        this.onCanvasChange('show');
        return this;
    };
    Element.prototype.hide = function () {
        // 不是高频操作直接使用 set
        this.set('visible', false);
        this.onCanvasChange('hide');
        return this;
    };
    Element.prototype.setZIndex = function (zIndex) {
        this.set('zIndex', zIndex);
        var parent = this.getParent();
        if (parent) {
            // 改变 zIndex 不应该立即触发渲染 (调用 onCanvasChange('zIndex'))，需要经过 sort 再触发
            parent.sort();
        }
        return this;
    };
    Element.prototype.toFront = function () {
        var parent = this.getParent();
        if (!parent) {
            return;
        }
        var children = parent.getChildren();
        var el = this.get('el');
        var index = children.indexOf(this);
        children.splice(index, 1);
        children.push(this);
        this.onCanvasChange('zIndex');
    };
    Element.prototype.toBack = function () {
        var parent = this.getParent();
        if (!parent) {
            return;
        }
        var children = parent.getChildren();
        var el = this.get('el');
        var index = children.indexOf(this);
        children.splice(index, 1);
        children.unshift(this);
        this.onCanvasChange('zIndex');
    };
    Element.prototype.remove = function (destroy) {
        if (destroy === void 0) { destroy = true; }
        var parent = this.getParent();
        if (parent) {
            util_2.removeFromArray(parent.getChildren(), this);
            if (!parent.get('clearing')) {
                // 如果父元素正在清理，当前元素不触发 remove
                this.onCanvasChange('remove');
            }
        }
        else {
            this.onCanvasChange('remove');
        }
        if (destroy) {
            this.destroy();
        }
    };
    Element.prototype.resetMatrix = function () {
        this.attr(MATRIX, this.getDefaultMatrix());
        this.onCanvasChange('matrix');
    };
    Element.prototype.getMatrix = function () {
        return this.attr(MATRIX);
    };
    Element.prototype.setMatrix = function (m) {
        this.attr(MATRIX, m);
        this.onCanvasChange('matrix');
    };
    // 获取总的 matrix
    Element.prototype.getTotalMatrix = function () {
        var totalMatrix = this.cfg.totalMatrix;
        if (!totalMatrix) {
            var currentMatrix = this.attr('matrix');
            var parentMatrix = this.cfg.parentMatrix;
            if (parentMatrix && currentMatrix) {
                totalMatrix = matrix_1.multiplyMatrix(parentMatrix, currentMatrix);
            }
            else {
                totalMatrix = currentMatrix || parentMatrix;
            }
            this.set('totalMatrix', totalMatrix);
        }
        return totalMatrix;
    };
    // 上层分组设置 matrix
    Element.prototype.applyMatrix = function (matrix) {
        var currentMatrix = this.attr('matrix');
        var totalMatrix = null;
        if (matrix && currentMatrix) {
            totalMatrix = matrix_1.multiplyMatrix(matrix, currentMatrix);
        }
        else {
            totalMatrix = currentMatrix || matrix;
        }
        this.set('totalMatrix', totalMatrix);
        this.set('parentMatrix', matrix);
    };
    /**
     * @protected
     * 获取默认的矩阵
     * @returns {number[]|null} 默认的矩阵
     */
    Element.prototype.getDefaultMatrix = function () {
        return null;
    };
    // 将向量应用设置的矩阵
    Element.prototype.applyToMatrix = function (v) {
        var matrix = this.attr('matrix');
        if (matrix) {
            return matrix_1.multiplyVec2(matrix, v);
        }
        return v;
    };
    // 根据设置的矩阵，将向量转换相对于图形/分组的位置
    Element.prototype.invertFromMatrix = function (v) {
        var matrix = this.attr('matrix');
        if (matrix) {
            var invertMatrix = matrix_1.invert(matrix);
            if (invertMatrix) {
                return matrix_1.multiplyVec2(invertMatrix, v);
            }
        }
        return v;
    };
    // 设置 clip
    Element.prototype.setClip = function (clipCfg) {
        var canvas = this.getCanvas();
        // 应该只设置当前元素的 clip，不应该去修改 clip 本身，方便 clip 被复用
        // TODO: setClip 的传参既 shape 配置，也支持 shape 对象
        // const preShape = this.get('clipShape');
        // if (preShape) {
        //   // 将之前的 clipShape 销毁
        //   preShape.destroy();
        // }
        var clipShape = null;
        // 如果配置项为 null，则不移除 clipShape
        if (clipCfg) {
            var ShapeBase = this.getShapeBase();
            var shapeType = util_1.upperFirst(clipCfg.type);
            var Cons = ShapeBase[shapeType];
            if (Cons) {
                clipShape = new Cons({
                    type: clipCfg.type,
                    isClipShape: true,
                    applyTo: this,
                    attrs: clipCfg.attrs,
                    canvas: canvas,
                });
            }
        }
        this.set('clipShape', clipShape);
        this.onCanvasChange('clip');
        return clipShape;
    };
    Element.prototype.getClip = function () {
        // 高频率调用的地方直接使用 this.cfg.xxx
        var clipShape = this.cfg.clipShape;
        // 未设置时返回 Null，保证一致性
        if (!clipShape) {
            return null;
        }
        return clipShape;
    };
    Element.prototype.clone = function () {
        var _this = this;
        var originAttrs = this.attrs;
        var attrs = {};
        util_1.each(originAttrs, function (i, k) {
            if (util_1.isArray(originAttrs[k])) {
                attrs[k] = _cloneArrayAttr(originAttrs[k]);
            }
            else {
                attrs[k] = originAttrs[k];
            }
        });
        var cons = this.constructor;
        // @ts-ignore
        var clone = new cons({ attrs: attrs });
        util_1.each(CLONE_CFGS, function (cfgName) {
            clone.set(cfgName, _this.get(cfgName));
        });
        return clone;
    };
    Element.prototype.destroy = function () {
        var destroyed = this.destroyed;
        if (destroyed) {
            return;
        }
        this.attrs = {};
        _super.prototype.destroy.call(this);
        // this.onCanvasChange('destroy');
    };
    /**
     * 是否处于动画暂停状态
     * @return {boolean} 是否处于动画暂停状态
     */
    Element.prototype.isAnimatePaused = function () {
        return this.get('_pause').isPaused;
    };
    /**
     * 执行动画，支持多种函数签名
     * 1. animate(toAttrs: ElementAttrs, duration: number, easing?: string, callback?: () => void, delay?: number)
     * 2. animate(onFrame: OnFrame, duration: number, easing?: string, callback?: () => void, delay?: number)
     * 3. animate(toAttrs: ElementAttrs, cfg: AnimateCfg)
     * 4. animate(onFrame: OnFrame, cfg: AnimateCfg)
     * 各个参数的含义为:
     *   toAttrs  动画最终状态
     *   onFrame  自定义帧动画函数
     *   duration 动画执行时间
     *   easing   动画缓动效果
     *   callback 动画执行后的回调
     *   delay    动画延迟时间
     */
    Element.prototype.animate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.get('timeline') && !this.get('canvas')) {
            return;
        }
        this.set('animating', true);
        var timeline = this.get('timeline');
        if (!timeline) {
            timeline = this.get('canvas').get('timeline');
            this.set('timeline', timeline);
        }
        var animations = this.get('animations') || [];
        // 初始化 tick
        if (!timeline.timer) {
            timeline.initTimer();
        }
        var toAttrs = args[0], duration = args[1], _a = args[2], easing = _a === void 0 ? 'easeLinear' : _a, _b = args[3], callback = _b === void 0 ? util_1.noop : _b, _c = args[4], delay = _c === void 0 ? 0 : _c;
        var onFrame;
        var repeat;
        var pauseCallback;
        var resumeCallback;
        var animateCfg;
        // 第二个参数，既可以是动画最终状态 toAttrs，也可以是自定义帧动画函数 onFrame
        if (util_1.isFunction(toAttrs)) {
            onFrame = toAttrs;
            toAttrs = {};
        }
        else if (util_1.isObject(toAttrs) && toAttrs.onFrame) {
            // 兼容 3.0 中的写法，onFrame 和 repeat 可在 toAttrs 中设置
            onFrame = toAttrs.onFrame;
            repeat = toAttrs.repeat;
        }
        // 第二个参数，既可以是执行时间 duration，也可以是动画参数 animateCfg
        if (util_1.isObject(duration)) {
            animateCfg = duration;
            duration = animateCfg.duration;
            easing = animateCfg.easing || 'easeLinear';
            delay = animateCfg.delay || 0;
            // animateCfg 中的设置优先级更高
            repeat = animateCfg.repeat || repeat || false;
            callback = animateCfg.callback || util_1.noop;
            pauseCallback = animateCfg.pauseCallback || util_1.noop;
            resumeCallback = animateCfg.resumeCallback || util_1.noop;
        }
        else {
            // 第四个参数，既可以是回调函数 callback，也可以是延迟时间 delay
            if (util_1.isNumber(callback)) {
                delay = callback;
                callback = null;
            }
            // 第三个参数，既可以是缓动参数 easing，也可以是回调函数 callback
            if (util_1.isFunction(easing)) {
                callback = easing;
                easing = 'easeLinear';
            }
            else {
                easing = easing || 'easeLinear';
            }
        }
        var formatToAttrs = getFormatToAttrs(toAttrs, this);
        var animation = {
            fromAttrs: getFormatFromAttrs(formatToAttrs, this),
            toAttrs: formatToAttrs,
            duration: duration,
            easing: easing,
            repeat: repeat,
            callback: callback,
            pauseCallback: pauseCallback,
            resumeCallback: resumeCallback,
            delay: delay,
            startTime: timeline.getTime(),
            id: util_1.uniqueId(),
            onFrame: onFrame,
            pathFormatted: false,
        };
        // 如果动画元素队列中已经有这个图形了
        if (animations.length > 0) {
            // 先检查是否需要合并属性。若有相同的动画，将该属性从前一个动画中删除,直接用后一个动画中
            animations = checkExistedAttrs(animations, animation);
        }
        else {
            // 否则将图形添加到动画元素队列
            timeline.addAnimator(this);
        }
        animations.push(animation);
        this.set('animations', animations);
        this.set('_pause', { isPaused: false });
    };
    /**
     * 停止动画
     * @param {boolean} toEnd 是否到动画的最终状态
     */
    Element.prototype.stopAnimate = function (toEnd) {
        var _this = this;
        if (toEnd === void 0) { toEnd = true; }
        var animations = this.get('animations');
        util_1.each(animations, function (animation) {
            // 将动画执行到最后一帧
            if (toEnd) {
                if (animation.onFrame) {
                    _this.attr(animation.onFrame(1));
                }
                else {
                    _this.attr(animation.toAttrs);
                }
            }
            if (animation.callback) {
                // 动画停止时的回调
                animation.callback();
            }
        });
        this.set('animating', false);
        this.set('animations', []);
    };
    /**
     * 暂停动画
     */
    Element.prototype.pauseAnimate = function () {
        var timeline = this.get('timeline');
        var animations = this.get('animations');
        var pauseTime = timeline.getTime();
        util_1.each(animations, function (animation) {
            animation._paused = true;
            animation._pauseTime = pauseTime;
            if (animation.pauseCallback) {
                // 动画暂停时的回调
                animation.pauseCallback();
            }
        });
        // 记录下是在什么时候暂停的
        this.set('_pause', {
            isPaused: true,
            pauseTime: pauseTime,
        });
        return this;
    };
    /**
     * 恢复动画
     */
    Element.prototype.resumeAnimate = function () {
        var timeline = this.get('timeline');
        var current = timeline.getTime();
        var animations = this.get('animations');
        var pauseTime = this.get('_pause').pauseTime;
        // 之后更新属性需要计算动画已经执行的时长，如果暂停了，就把初始时间调后
        util_1.each(animations, function (animation) {
            animation.startTime = animation.startTime + (current - pauseTime);
            animation._paused = false;
            animation._pauseTime = null;
            if (animation.resumeCallback) {
                animation.resumeCallback();
            }
        });
        this.set('_pause', {
            isPaused: false,
        });
        this.set('animations', animations);
        return this;
    };
    /**
     * 触发委托事件
     * @param  {string}     type 事件类型
     * @param  {GraphEvent} eventObj 事件对象
     */
    Element.prototype.emitDelegation = function (type, eventObj) {
        var _this = this;
        var paths = eventObj.propagationPath;
        var events = this.getEvents();
        var relativeShape;
        if (type === 'mouseenter') {
            relativeShape = eventObj.fromShape;
        }
        else if (type === 'mouseleave') {
            relativeShape = eventObj.toShape;
        }
        var _loop_1 = function (i) {
            var element = paths[i];
            // 暂定跟 name 绑定
            var name_1 = element.get('name');
            if (name_1) {
                // 第一个 mouseenter 和 mouseleave 的停止即可，因为后面的都是前面的 Parent
                if (
                // 只有 element 是 Group 或者 Canvas 的时候，才需要判断 isParent
                (element.isGroup() || (element.isCanvas && element.isCanvas())) &&
                    relativeShape &&
                    util_2.isParent(element, relativeShape)) {
                    return "break";
                }
                if (util_1.isArray(name_1)) {
                    util_1.each(name_1, function (subName) {
                        _this.emitDelegateEvent(element, subName, eventObj);
                    });
                }
                else {
                    this_1.emitDelegateEvent(element, name_1, eventObj);
                }
            }
        };
        var this_1 = this;
        // 至少有一个对象，且第一个对象为 shape
        for (var i = 0; i < paths.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    };
    Element.prototype.emitDelegateEvent = function (element, name, eventObj) {
        var events = this.getEvents();
        // 事件委托的形式 name:type
        var eventName = name + DELEGATION_SPLIT + eventObj.type;
        if (events[eventName] || events[WILDCARD]) {
            // 对于通配符 *，事件名称 = 委托事件名称
            eventObj.name = eventName;
            eventObj.currentTarget = element;
            eventObj.delegateTarget = this;
            // 将委托事件的监听对象 delegateObject 挂载到事件对象上
            eventObj.delegateObject = element.get('delegateObject');
            this.emit(eventName, eventObj);
        }
    };
    /**
     * 移动元素
     * @param {number} translateX 水平移动距离
     * @param {number} translateY 垂直移动距离
     * @return {IElement} 元素
     */
    Element.prototype.translate = function (translateX, translateY) {
        if (translateX === void 0) { translateX = 0; }
        if (translateY === void 0) { translateY = 0; }
        var matrix = this.getMatrix();
        var newMatrix = transform(matrix, [['t', translateX, translateY]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 移动元素到目标位置
     * @param {number} targetX 目标位置的水平坐标
     * @param {number} targetX 目标位置的垂直坐标
     * @return {IElement} 元素
     */
    Element.prototype.move = function (targetX, targetY) {
        var x = this.attr('x') || 0;
        var y = this.attr('y') || 0;
        this.translate(targetX - x, targetY - y);
        return this;
    };
    /**
     * 移动元素到目标位置，等价于 move 方法。由于 moveTo 的语义性更强，因此在文档中推荐使用 moveTo 方法
     * @param {number} targetX 目标位置的 x 轴坐标
     * @param {number} targetY 目标位置的 y 轴坐标
     * @return {IElement} 元素
     */
    Element.prototype.moveTo = function (targetX, targetY) {
        return this.move(targetX, targetY);
    };
    /**
     * 缩放元素
     * @param {number} ratioX 水平缩放比例
     * @param {number} ratioY 垂直缩放比例
     * @return {IElement} 元素
     */
    Element.prototype.scale = function (ratioX, ratioY) {
        var matrix = this.getMatrix();
        var newMatrix = transform(matrix, [['s', ratioX, ratioY || ratioX]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以画布左上角 (0, 0) 为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotate = function (radian) {
        var matrix = this.getMatrix();
        var newMatrix = transform(matrix, [['r', radian]]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以起始点为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotateAtStart = function (rotate) {
        var _a = this.attr(), x = _a.x, y = _a.y;
        var matrix = this.getMatrix();
        var newMatrix = transform(matrix, [
            ['t', -x, -y],
            ['r', rotate],
            ['t', x, y],
        ]);
        this.setMatrix(newMatrix);
        return this;
    };
    /**
     * 以任意点 (x, y) 为中心旋转元素
     * @param {number} radian 旋转角度(弧度值)
     * @return {IElement} 元素
     */
    Element.prototype.rotateAtPoint = function (x, y, rotate) {
        var matrix = this.getMatrix();
        var newMatrix = transform(matrix, [
            ['t', -x, -y],
            ['r', rotate],
            ['t', x, y],
        ]);
        this.setMatrix(newMatrix);
        return this;
    };
    return Element;
}(base_1.default));
exports.default = Element;
//# sourceMappingURL=element.js.map
}, function(modId) { var map = {"../util/util":1623251340028,"../util/matrix":1623251340032,"./base":1623251340027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340032, function(require, module, exports) {

/**
 * @fileoverview 矩阵运算，本来是要引入 gl-matrix, 但是考虑到 g-mobile 对大小有限制，同时 g-webgl 使用的 matrix 不一致
 * 所以，这里仅实现 2D 几个运算，上层自己引入 gl-matrix
 * @author dxq613@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.invert = exports.multiplyVec2 = exports.multiplyMatrix = void 0;
/**
 * 3阶矩阵相乘
 * @param {number[]} a 矩阵1
 * @param {number[]} b 矩阵2
 */
function multiplyMatrix(a, b) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b00 = b[0];
    var b01 = b[1];
    var b02 = b[2];
    var b10 = b[3];
    var b11 = b[4];
    var b12 = b[5];
    var b20 = b[6];
    var b21 = b[7];
    var b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
exports.multiplyMatrix = multiplyMatrix;
/**
 * 3阶矩阵同2阶向量相乘
 * @param {number[]} m 矩阵
 * @param {number[]} v 二阶向量
 */
function multiplyVec2(m, v) {
    var out = [];
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
exports.multiplyVec2 = multiplyVec2;
/**
 * 矩阵的逆
 * @param {number[]} a 矩阵
 */
function invert(a) {
    var out = [];
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a10 = a[3];
    var a11 = a[4];
    var a12 = a[5];
    var a20 = a[6];
    var a21 = a[7];
    var a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
exports.invert = invert;
//# sourceMappingURL=matrix.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340033, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@antv/util");
var d3Timer = require("d3-timer");
var d3Ease = require("d3-ease");
var d3_interpolate_1 = require("d3-interpolate"); // 目前整体动画只需要数值和数组的差值计算
var PathUtil = require("../util/path");
var color_1 = require("../util/color");
var IDENTITY_MATRIX = [1, 0, 0, 0, 1, 0, 0, 0, 1];
/**
 * 使用 ratio 进行插值计算来更新属性
 * @param {IElement}  shape    元素
 * @param {Animation} animation 动画
 * @param {number}    ratio    比例
 * @return {boolean}  动画是否执行完成
 */
function _update(shape, animation, ratio) {
    var cProps = {}; // 此刻属性
    var fromAttrs = animation.fromAttrs, toAttrs = animation.toAttrs;
    if (shape.destroyed) {
        return;
    }
    var interf; //  差值函数
    for (var k in toAttrs) {
        if (!util_1.isEqual(fromAttrs[k], toAttrs[k])) {
            if (k === 'path') {
                var toPath = toAttrs[k];
                var fromPath = fromAttrs[k];
                if (toPath.length > fromPath.length) {
                    toPath = PathUtil.parsePathString(toAttrs[k]); // 终点状态
                    fromPath = PathUtil.parsePathString(fromAttrs[k]); // 起始状态
                    fromPath = PathUtil.fillPathByDiff(fromPath, toPath);
                    fromPath = PathUtil.formatPath(fromPath, toPath);
                    animation.fromAttrs.path = fromPath;
                    animation.toAttrs.path = toPath;
                }
                else if (!animation.pathFormatted) {
                    toPath = PathUtil.parsePathString(toAttrs[k]);
                    fromPath = PathUtil.parsePathString(fromAttrs[k]);
                    fromPath = PathUtil.formatPath(fromPath, toPath);
                    animation.fromAttrs.path = fromPath;
                    animation.toAttrs.path = toPath;
                    animation.pathFormatted = true;
                }
                cProps[k] = [];
                for (var i = 0; i < toPath.length; i++) {
                    var toPathPoint = toPath[i];
                    var fromPathPoint = fromPath[i];
                    var cPathPoint = [];
                    for (var j = 0; j < toPathPoint.length; j++) {
                        if (util_1.isNumber(toPathPoint[j]) && fromPathPoint && util_1.isNumber(fromPathPoint[j])) {
                            interf = d3_interpolate_1.interpolate(fromPathPoint[j], toPathPoint[j]);
                            cPathPoint.push(interf(ratio));
                        }
                        else {
                            cPathPoint.push(toPathPoint[j]);
                        }
                    }
                    cProps[k].push(cPathPoint);
                }
            }
            else if (k === 'matrix') {
                /*
                 对矩阵进行插值时，需要保证矩阵不为空，为空则使用单位矩阵
                 TODO: 二维和三维场景下单位矩阵不同，之后 WebGL 版需要做进一步处理
                 */
                var matrixFn = d3_interpolate_1.interpolateArray(fromAttrs[k] || IDENTITY_MATRIX, toAttrs[k] || IDENTITY_MATRIX);
                var currentMatrix = matrixFn(ratio);
                cProps[k] = currentMatrix;
            }
            else if (color_1.isColorProp(k) && color_1.isGradientColor(toAttrs[k])) {
                cProps[k] = toAttrs[k];
            }
            else if (!util_1.isFunction(toAttrs[k])) {
                // 非函数类型的值才能做插值
                interf = d3_interpolate_1.interpolate(fromAttrs[k], toAttrs[k]);
                cProps[k] = interf(ratio);
            }
        }
    }
    shape.attr(cProps);
}
/**
 * 根据自定义帧动画函数 onFrame 来更新属性
 * @param {IElement}  shape    元素
 * @param {Animation} animation 动画
 * @param {number}    elapsed  动画执行时间(毫秒)
 * @return {boolean}  动画是否执行完成
 */
function update(shape, animation, elapsed) {
    var startTime = animation.startTime, delay = animation.delay;
    // 如果还没有开始执行或暂停，先不更新
    if (elapsed < startTime + delay || animation._paused) {
        return false;
    }
    var ratio;
    var duration = animation.duration;
    var easing = animation.easing;
    // 已执行时间
    elapsed = elapsed - startTime - animation.delay;
    if (animation.repeat) {
        // 如果动画重复执行，则 elapsed > duration，计算 ratio 时需取模
        ratio = (elapsed % duration) / duration;
        ratio = d3Ease[easing](ratio);
    }
    else {
        ratio = elapsed / duration;
        if (ratio < 1) {
            // 动画未执行完
            ratio = d3Ease[easing](ratio);
        }
        else {
            // 动画已执行完
            if (animation.onFrame) {
                shape.attr(animation.onFrame(1));
            }
            else {
                shape.attr(animation.toAttrs);
            }
            return true;
        }
    }
    if (animation.onFrame) {
        var attrs = animation.onFrame(ratio);
        shape.attr(attrs);
    }
    else {
        _update(shape, animation, ratio);
    }
    return false;
}
var Timeline = /** @class */ (function () {
    /**
     * 时间轴构造函数，依赖于画布
     * @param {}
     */
    function Timeline(canvas) {
        /**
         * 执行动画的元素列表
         * @type {IElement[]}
         */
        this.animators = [];
        /**
         * 当前时间
         * @type {number}
         */
        this.current = 0;
        /**
         * 定时器
         * @type {d3Timer.Timer}
         */
        this.timer = null;
        this.canvas = canvas;
    }
    /**
     * 初始化定时器
     */
    Timeline.prototype.initTimer = function () {
        var _this = this;
        var isFinished = false;
        var shape;
        var animations;
        var animation;
        this.timer = d3Timer.timer(function (elapsed) {
            _this.current = elapsed;
            if (_this.animators.length > 0) {
                for (var i = _this.animators.length - 1; i >= 0; i--) {
                    shape = _this.animators[i];
                    if (shape.destroyed) {
                        // 如果已经被销毁，直接移出队列
                        _this.removeAnimator(i);
                        continue;
                    }
                    if (!shape.isAnimatePaused()) {
                        animations = shape.get('animations');
                        for (var j = animations.length - 1; j >= 0; j--) {
                            animation = animations[j];
                            isFinished = update(shape, animation, elapsed);
                            if (isFinished) {
                                animations.splice(j, 1);
                                isFinished = false;
                                if (animation.callback) {
                                    animation.callback();
                                }
                            }
                        }
                    }
                    if (animations.length === 0) {
                        _this.removeAnimator(i);
                    }
                }
                var autoDraw = _this.canvas.get('autoDraw');
                // 非自动渲染模式下，手动调用 canvas.draw() 重新渲染
                if (!autoDraw) {
                    _this.canvas.draw();
                }
            }
        });
    };
    /**
     * 增加动画元素
     */
    Timeline.prototype.addAnimator = function (shape) {
        this.animators.push(shape);
    };
    /**
     * 移除动画元素
     */
    Timeline.prototype.removeAnimator = function (index) {
        this.animators.splice(index, 1);
    };
    /**
     * 是否有动画在执行
     */
    Timeline.prototype.isAnimating = function () {
        return !!this.animators.length;
    };
    /**
     * 停止定时器
     */
    Timeline.prototype.stop = function () {
        if (this.timer) {
            this.timer.stop();
        }
    };
    /**
     * 停止时间轴上所有元素的动画，并置空动画元素列表
     * @param {boolean} toEnd 是否到动画的最终状态，用来透传给动画元素的 stopAnimate 方法
     */
    Timeline.prototype.stopAllAnimations = function (toEnd) {
        if (toEnd === void 0) { toEnd = true; }
        this.animators.forEach(function (animator) {
            animator.stopAnimate(toEnd);
        });
        this.animators = [];
        this.canvas.draw();
    };
    /**
     * 获取当前时间
     */
    Timeline.prototype.getTime = function () {
        return this.current;
    };
    return Timeline;
}());
exports.default = Timeline;
//# sourceMappingURL=timeline.js.map
}, function(modId) { var map = {"../util/path":1623251340023,"../util/color":1623251340034}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340034, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isGradientColor = exports.isColorProp = void 0;
exports.isColorProp = function (prop) { return ['fill', 'stroke', 'fillStyle', 'strokeStyle'].includes(prop); };
exports.isGradientColor = function (val) { return /^[r,R,L,l]{1}[\s]*\(/.test(val); };
//# sourceMappingURL=color.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340035, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @fileoverview 事件处理器
 * @author dxq613@gmail.com
 */
var graph_event_1 = require("./graph-event");
var util_1 = require("../util/util");
var CLICK_OFFSET = 40;
var LEFT_BTN_CODE = 0;
var DELEGATION_SPLIT = ':';
var EVENTS = [
    'mousedown',
    'mouseup',
    'dblclick',
    'mouseout',
    'mouseover',
    'mousemove',
    'mouseleave',
    'mouseenter',
    'touchstart',
    'touchmove',
    'touchend',
    'dragenter',
    'dragover',
    'dragleave',
    'drop',
    'contextmenu',
    'mousewheel',
];
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
        if (type === 'mouseenter') {
            relativeShape = eventObj.fromShape;
            isOverEvent = true;
        }
        else if (type === 'mouseleave') {
            isOverEvent = true;
            relativeShape = eventObj.toShape;
        }
        // canvas 上的 mouseenter， mouseleave 事件，仅当进入或者移出 canvas 时触发
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
        this.mousedownShape = null;
        this.mousedownPoint = null;
        // 统一处理所有的回调
        this._eventCallback = function (ev) {
            var type = ev.type;
            _this._triggerEvent(type, ev);
        };
        // 在 document 处理拖拽到画布外的事件，处理从图形上移除画布未被捕捉的问题
        this._onDocumentMove = function (ev) {
            var canvas = _this.canvas;
            var el = canvas.get('el');
            if (el !== ev.target) {
                // 不在 canvas 上移动
                if (_this.dragging || _this.currentShape) {
                    var pointInfo = _this._getPointInfo(ev);
                    // 还在拖拽过程中
                    if (_this.dragging) {
                        _this._emitEvent('drag', ev, pointInfo, _this.draggingShape);
                    }
                    // 说明从某个图形直接移动到了画布外面，
                    // 修复了 mouseleave 的 bug 后不再出现这种情况
                    // if (this.currentShape) {
                    //   this._emitEvent('mouseleave', ev, pointInfo, this.currentShape, this.currentShape, null);
                    //   this.currentShape = null;
                    // }
                }
            }
        };
        // 在 document 上处理拖拽到外面，释放鼠标时触发 dragend
        this._onDocumentMouseUp = function (ev) {
            var canvas = _this.canvas;
            var el = canvas.get('el');
            if (el !== ev.target) {
                // 不在 canvas 上移动
                if (_this.dragging) {
                    var pointInfo = _this._getPointInfo(ev);
                    if (_this.draggingShape) {
                        // 如果存在拖拽的图形，则也触发 drop 事件
                        _this._emitEvent('drop', ev, pointInfo, null);
                    }
                    _this._emitEvent('dragend', ev, pointInfo, _this.draggingShape);
                    _this._afterDrag(_this.draggingShape, pointInfo, ev);
                }
            }
        };
        this.canvas = cfg.canvas;
    }
    EventController.prototype.init = function () {
        this._bindEvents();
    };
    // 注册事件
    EventController.prototype._bindEvents = function () {
        var _this = this;
        var el = this.canvas.get('el');
        util_1.each(EVENTS, function (eventName) {
            el.addEventListener(eventName, _this._eventCallback);
        });
        if (document) {
            // 处理移动到外面没有触发 shape mouse leave 的事件
            // 处理拖拽到外部的问题
            document.addEventListener('mousemove', this._onDocumentMove);
            // 处理拖拽过程中在外部释放鼠标的问题
            document.addEventListener('mouseup', this._onDocumentMouseUp);
        }
    };
    // 清理事件
    EventController.prototype._clearEvents = function () {
        var _this = this;
        var el = this.canvas.get('el');
        util_1.each(EVENTS, function (eventName) {
            el.removeEventListener(eventName, _this._eventCallback);
        });
        if (document) {
            document.removeEventListener('mousemove', this._onDocumentMove);
            document.removeEventListener('mouseup', this._onDocumentMouseUp);
        }
    };
    EventController.prototype._getEventObj = function (type, event, point, target, fromShape, toShape) {
        var eventObj = new graph_event_1.default(type, event);
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
    EventController.prototype._getShape = function (point, ev) {
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
        var leaveCanvas = false;
        if (method) {
            method.call(this, pointInfo, shape, ev);
        }
        else {
            var preShape = this.currentShape;
            // 如果进入、移出画布时存在图形，则要分别触发事件
            if (type === 'mouseenter' || type === 'dragenter' || type === 'mouseover') {
                this._emitEvent(type, ev, pointInfo, null, null, shape); // 先进入画布
                if (shape) {
                    this._emitEvent(type, ev, pointInfo, shape, null, shape); // 再触发图形的事件
                }
                if (type === 'mouseenter' && this.draggingShape) {
                    // 如果正在拖拽图形, 则触发 dragleave
                    this._emitEvent('dragenter', ev, pointInfo, null);
                }
            }
            else if (type === 'mouseleave' || type === 'dragleave' || type === 'mouseout') {
                leaveCanvas = true;
                if (preShape) {
                    this._emitEvent(type, ev, pointInfo, preShape, preShape, null); // 先触发图形的事件
                }
                this._emitEvent(type, ev, pointInfo, null, preShape, null); // 再触发离开画布事件
                if (type === 'mouseleave' && this.draggingShape) {
                    this._emitEvent('dragleave', ev, pointInfo, null);
                }
            }
            else {
                this._emitEvent(type, ev, pointInfo, shape, null, null); // 一般事件中不需要考虑 from, to
            }
        }
        if (!leaveCanvas) {
            this.currentShape = shape;
        }
        // 当鼠标从画布移动到 shape 或者从 preShape 移动到 shape 时，应用 shape 上的鼠标样式
        if (shape && !shape.get('destroyed')) {
            var canvas = this.canvas;
            var el = canvas.get('el');
            el.style.cursor = shape.attr('cursor') || canvas.get('cursor');
        }
    };
    // 记录下点击的位置、图形，便于拖拽事件、click 事件的判定
    EventController.prototype._onmousedown = function (pointInfo, shape, event) {
        // 只有鼠标左键的 mousedown 事件才会设置 mousedownShape 等属性，避免鼠标右键的 mousedown 事件引起其他事件发生
        if (event.button === LEFT_BTN_CODE) {
            this.mousedownShape = shape;
            this.mousedownPoint = pointInfo;
            this.mousedownTimeStamp = event.timeStamp;
        }
        this._emitEvent('mousedown', event, pointInfo, shape, null, null); // mousedown 不考虑fromShape, toShape
    };
    // mouseleave 和 mouseenter 都是成对存在的
    // mouseenter 和 mouseover 同时触发
    EventController.prototype._emitMouseoverEvents = function (event, pointInfo, fromShape, toShape) {
        var el = this.canvas.get('el');
        if (fromShape !== toShape) {
            if (fromShape) {
                this._emitEvent('mouseout', event, pointInfo, fromShape, fromShape, toShape);
                this._emitEvent('mouseleave', event, pointInfo, fromShape, fromShape, toShape);
                // 当鼠标从 fromShape 移动到画布上时，重置鼠标样式
                if (!toShape || toShape.get('destroyed')) {
                    el.style.cursor = this.canvas.get('cursor');
                }
            }
            if (toShape) {
                this._emitEvent('mouseover', event, pointInfo, toShape, fromShape, toShape);
                this._emitEvent('mouseenter', event, pointInfo, toShape, fromShape, toShape);
            }
        }
    };
    // dragover 不等同于 mouseover，而等同于 mousemove
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
        // 拖拽完成后，进行 enter，leave 的判定
        if (shape !== draggingShape) {
            this._emitMouseoverEvents(event, pointInfo, draggingShape, shape);
        }
        this.currentShape = shape; // 更新当前 shape，如果不处理当前图形的 mouseleave 事件可能会出问题
    };
    // 按键抬起时，会终止拖拽、触发点击
    EventController.prototype._onmouseup = function (pointInfo, shape, event) {
        // eevent.button === 0 表示鼠标左键事件，此处加上判断主要是为了避免右键鼠标会触发 mouseup 和 click 事件
        // ref: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
        if (event.button === LEFT_BTN_CODE) {
            var draggingShape = this.draggingShape;
            if (this.dragging) {
                // 存在可以拖拽的图形，同时拖拽到其他图形上时触发 drag 事件
                if (draggingShape) {
                    this._emitEvent('drop', event, pointInfo, shape);
                }
                this._emitEvent('dragend', event, pointInfo, draggingShape);
                this._afterDrag(draggingShape, pointInfo, event);
            }
            else {
                this._emitEvent('mouseup', event, pointInfo, shape); // 先触发 mouseup 再触发 click
                if (shape === this.mousedownShape) {
                    this._emitEvent('click', event, pointInfo, shape);
                }
                this.mousedownShape = null;
                this.mousedownPoint = null;
            }
        }
    };
    // 当触发浏览器的 dragover 事件时，不会再触发 mousemove ，所以这时候的 dragenter, dragleave 事件需要重新处理
    EventController.prototype._ondragover = function (pointInfo, shape, event) {
        event.preventDefault(); // 如果不对 dragover 进行 preventDefault，则不会在 canvas 上触发 drop 事件
        var preShape = this.currentShape;
        this._emitDragoverEvents(event, pointInfo, preShape, shape, true);
    };
    // 大量的图形事件，都通过 mousemove 模拟
    EventController.prototype._onmousemove = function (pointInfo, shape, event) {
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
            var mousedownPoint = this.mousedownPoint;
            if (mousedownPoint) {
                // 当鼠标点击下去，同时移动时，进行 drag 判定
                var mousedownShape = this.mousedownShape;
                var now = event.timeStamp;
                var timeWindow = now - this.mousedownTimeStamp;
                var dx = mousedownPoint.clientX - pointInfo.clientX;
                var dy = mousedownPoint.clientY - pointInfo.clientY;
                var dist = dx * dx + dy * dy;
                if (timeWindow > 120 || dist > CLICK_OFFSET) {
                    if (mousedownShape && mousedownShape.get('draggable')) {
                        // 设置了 draggable 的 shape 才能触发 drag 相关的事件
                        draggingShape = this.mousedownShape; // 拖动鼠标点下时的 shape
                        draggingShape.set('capture', false); // 禁止继续拾取，否则无法进行 dragover,dragenter,dragleave,drop的判定
                        this.draggingShape = draggingShape;
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, draggingShape);
                        // 清理按下鼠标时缓存的值
                        this.mousedownShape = null;
                        this.mousedownPoint = null;
                    }
                    else if (!mousedownShape && canvas.get('draggable')) {
                        // 设置了 draggable 的 canvas 才能触发 drag 相关的事件
                        this.dragging = true;
                        this._emitEvent('dragstart', event, pointInfo, null);
                        // 清理按下鼠标时缓存的值
                        this.mousedownShape = null;
                        this.mousedownPoint = null;
                    }
                    else {
                        this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                        this._emitEvent('mousemove', event, pointInfo, shape);
                    }
                }
                else {
                    this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                    this._emitEvent('mousemove', event, pointInfo, shape);
                }
            }
            else {
                // 没有按键按下时，则直接触发 mouse over 相关的各种事件
                this._emitMouseoverEvents(event, pointInfo, preShape, shape);
                // 始终触发移动
                this._emitEvent('mousemove', event, pointInfo, shape);
            }
        }
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
        // 清理事件
        this._clearEvents();
        // 清理缓存的对象
        this.canvas = null;
        this.currentShape = null;
        this.draggingShape = null;
        this.mousedownPoint = null;
        this.mousedownShape = null;
        this.mousedownTimeStamp = null;
    };
    return EventController;
}());
exports.default = EventController;
//# sourceMappingURL=event-contoller.js.map
}, function(modId) { var map = {"./graph-event":1623251340026,"../util/util":1623251340028}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340036, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var container_1 = require("./container");
var AbstractGroup = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractGroup, _super);
    function AbstractGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractGroup.prototype.isGroup = function () {
        return true;
    };
    AbstractGroup.prototype.isEntityGroup = function () {
        return false;
    };
    AbstractGroup.prototype.clone = function () {
        var clone = _super.prototype.clone.call(this);
        // 获取构造函数
        var children = this.getChildren();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            clone.add(child.clone());
        }
        return clone;
    };
    return AbstractGroup;
}(container_1.default));
exports.default = AbstractGroup;
//# sourceMappingURL=group.js.map
}, function(modId) { var map = {"./container":1623251340030}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340037, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var element_1 = require("./element");
var matrix_1 = require("../util/matrix");
var AbstractShape = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractShape, _super);
    function AbstractShape(cfg) {
        return _super.call(this, cfg) || this;
    }
    // 是否在包围盒内
    AbstractShape.prototype._isInBBox = function (refX, refY) {
        var bbox = this.getBBox();
        return bbox.minX <= refX && bbox.maxX >= refX && bbox.minY <= refY && bbox.maxY >= refY;
    };
    /**
     * 属性更改后需要做的事情
     * @protected
     * @param {ShapeAttrs} targetAttrs 渲染的图像属性
     */
    AbstractShape.prototype.afterAttrsChange = function (targetAttrs) {
        _super.prototype.afterAttrsChange.call(this, targetAttrs);
        this.clearCacheBBox();
    };
    // 计算包围盒时，需要缓存，这是一个高频的操作
    AbstractShape.prototype.getBBox = function () {
        var bbox = this.cfg.bbox;
        if (!bbox) {
            bbox = this.calculateBBox();
            this.set('bbox', bbox);
        }
        return bbox;
    };
    // 计算相对于画布的包围盒
    AbstractShape.prototype.getCanvasBBox = function () {
        var canvasBBox = this.cfg.canvasBBox;
        if (!canvasBBox) {
            canvasBBox = this.calculateCanvasBBox();
            this.set('canvasBBox', canvasBBox);
        }
        return canvasBBox;
    };
    AbstractShape.prototype.applyMatrix = function (matrix) {
        _super.prototype.applyMatrix.call(this, matrix);
        // 清理掉缓存的包围盒
        this.set('canvasBBox', null);
    };
    /**
     * 计算相对于画布的包围盒，默认等同于 bbox
     * @return {BBox} 包围盒
     */
    AbstractShape.prototype.calculateCanvasBBox = function () {
        var bbox = this.getBBox();
        var totalMatrix = this.getTotalMatrix();
        var minX = bbox.minX, minY = bbox.minY, maxX = bbox.maxX, maxY = bbox.maxY;
        if (totalMatrix) {
            var topLeft = matrix_1.multiplyVec2(totalMatrix, [bbox.minX, bbox.minY]);
            var topRight = matrix_1.multiplyVec2(totalMatrix, [bbox.maxX, bbox.minY]);
            var bottomLeft = matrix_1.multiplyVec2(totalMatrix, [bbox.minX, bbox.maxY]);
            var bottomRight = matrix_1.multiplyVec2(totalMatrix, [bbox.maxX, bbox.maxY]);
            minX = Math.min(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
            maxX = Math.max(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
            minY = Math.min(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
            maxY = Math.max(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
        }
        var attrs = this.attrs;
        // 如果存在 shadow 则计算 shadow
        if (attrs.shadowColor) {
            var _a = attrs.shadowBlur, shadowBlur = _a === void 0 ? 0 : _a, _b = attrs.shadowOffsetX, shadowOffsetX = _b === void 0 ? 0 : _b, _c = attrs.shadowOffsetY, shadowOffsetY = _c === void 0 ? 0 : _c;
            var shadowLeft = minX - shadowBlur + shadowOffsetX;
            var shadowRight = maxX + shadowBlur + shadowOffsetX;
            var shadowTop = minY - shadowBlur + shadowOffsetY;
            var shadowBottom = maxY + shadowBlur + shadowOffsetY;
            minX = Math.min(minX, shadowLeft);
            maxX = Math.max(maxX, shadowRight);
            minY = Math.min(minY, shadowTop);
            maxY = Math.max(maxY, shadowBottom);
        }
        return {
            x: minX,
            y: minY,
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY,
            width: maxX - minX,
            height: maxY - minY,
        };
    };
    /**
     * @protected
     * 清理缓存的 bbox
     */
    AbstractShape.prototype.clearCacheBBox = function () {
        this.set('bbox', null);
        this.set('canvasBBox', null);
    };
    // 实现接口
    AbstractShape.prototype.isClipShape = function () {
        return this.get('isClipShape');
    };
    /**
     * @protected
     * 不同的图形自己实现是否在图形内部的逻辑，要判断边和填充区域
     * @param  {number}  refX 相对于图形的坐标 x
     * @param  {number}  refY 相对于图形的坐标 Y
     * @return {boolean} 点是否在图形内部
     */
    AbstractShape.prototype.isInShape = function (refX, refY) {
        return false;
    };
    /**
     * 是否仅仅使用 BBox 检测就可以判定拾取到图形
     * 默认是 false，但是有些图形例如 image、marker 等都可直接使用 BBox 的检测而不需要使用图形拾取
     * @return {Boolean} 仅仅使用 BBox 进行拾取
     */
    AbstractShape.prototype.isOnlyHitBox = function () {
        return false;
    };
    // 不同的 Shape 各自实现
    AbstractShape.prototype.isHit = function (x, y) {
        var startArrowShape = this.get('startArrowShape');
        var endArrowShape = this.get('endArrowShape');
        var vec = [x, y, 1];
        vec = this.invertFromMatrix(vec);
        var refX = vec[0], refY = vec[1];
        var inBBox = this._isInBBox(refX, refY);
        // 跳过图形的拾取，在某些图形中可以省略一倍的检测成本
        if (this.isOnlyHitBox()) {
            return inBBox;
        }
        // 被裁减掉的和不在包围盒内的不进行计算
        if (inBBox && !this.isClipped(refX, refY)) {
            // 对图形进行拾取判断
            if (this.isInShape(refX, refY)) {
                return true;
            }
            // 对起始箭头进行拾取判断
            if (startArrowShape && startArrowShape.isHit(refX, refY)) {
                return true;
            }
            // 对结束箭头进行拾取判断
            if (endArrowShape && endArrowShape.isHit(refX, refY)) {
                return true;
            }
        }
        return false;
    };
    return AbstractShape;
}(element_1.default));
exports.default = AbstractShape;
//# sourceMappingURL=shape.js.map
}, function(modId) { var map = {"./element":1623251340031,"../util/matrix":1623251340032}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340038, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBBoxMethod = void 0;
var register_1 = require("./register");
Object.defineProperty(exports, "getBBoxMethod", { enumerable: true, get: function () { return register_1.getMethod; } });
var rect_1 = require("./rect");
var circle_1 = require("./circle");
var polyline_1 = require("./polyline");
var polygon_1 = require("./polygon");
var text_1 = require("./text");
var path_1 = require("./path");
var line_1 = require("./line");
var ellipse_1 = require("./ellipse");
register_1.register('rect', rect_1.default);
register_1.register('image', rect_1.default); // image 使用 rect 的包围盒计算
register_1.register('circle', circle_1.default);
register_1.register('marker', circle_1.default); // marker 使用 circle 的计算方案
register_1.register('polyline', polyline_1.default);
register_1.register('polygon', polygon_1.default);
register_1.register('text', text_1.default);
register_1.register('path', path_1.default);
register_1.register('line', line_1.default);
register_1.register('ellipse', ellipse_1.default);
//# sourceMappingURL=index.js.map
}, function(modId) { var map = {"./register":1623251340039,"./rect":1623251340040,"./circle":1623251340041,"./polyline":1623251340042,"./polygon":1623251340044,"./text":1623251340045,"./path":1623251340048,"./line":1623251340049,"./ellipse":1623251340050}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340039, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethod = exports.register = void 0;
var cache = new Map();
/**
 * 注册计算包围盒的算法
 * @param type 方法名
 * @param method 方法
 */
function register(type, method) {
    cache.set(type, method);
}
exports.register = register;
/**
 * 获取计算包围盒的算法
 * @param type 方法名
 */
function getMethod(type) {
    return cache.get(type);
}
exports.getMethod = getMethod;
//# sourceMappingURL=register.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340040, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height;
    return {
        x: x,
        y: y,
        width: width,
        height: height,
    };
}
exports.default = default_1;
//# sourceMappingURL=rect.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340041, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var _a = shape.attr(), x = _a.x, y = _a.y, r = _a.r;
    return {
        x: x - r,
        y: y - r,
        width: r * 2,
        height: r * 2,
    };
}
exports.default = default_1;
//# sourceMappingURL=circle.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340042, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g_math_1 = require("@antv/g-math");
var util_1 = require("./util");
function default_1(shape) {
    var attrs = shape.attr();
    var points = attrs.points;
    var xArr = [];
    var yArr = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        xArr.push(point[0]);
        yArr.push(point[1]);
    }
    var _a = g_math_1.Util.getBBoxByArray(xArr, yArr), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var bbox = {
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height,
    };
    bbox = util_1.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=polyline.js.map
}, function(modId) { var map = {"./util":1623251340043}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340043, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArrowBBox = exports.mergeBBox = void 0;
// 合并包围盒
function mergeBBox(bbox1, bbox2) {
    if (!bbox1 || !bbox2) {
        return bbox1 || bbox2;
    }
    return {
        minX: Math.min(bbox1.minX, bbox2.minX),
        minY: Math.min(bbox1.minY, bbox2.minY),
        maxX: Math.max(bbox1.maxX, bbox2.maxX),
        maxY: Math.max(bbox1.maxY, bbox2.maxY),
    };
}
exports.mergeBBox = mergeBBox;
// 合并箭头的包围盒
function mergeArrowBBox(shape, bbox) {
    var startArrowShape = shape.get('startArrowShape');
    var endArrowShape = shape.get('endArrowShape');
    var startArrowBBox = null;
    var endArrowBBox = null;
    if (startArrowShape) {
        startArrowBBox = startArrowShape.getCanvasBBox();
        bbox = mergeBBox(bbox, startArrowBBox);
    }
    if (endArrowShape) {
        endArrowBBox = endArrowShape.getCanvasBBox();
        bbox = mergeBBox(bbox, endArrowBBox);
    }
    return bbox;
}
exports.mergeArrowBBox = mergeArrowBBox;
//# sourceMappingURL=util.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340044, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g_math_1 = require("@antv/g-math");
function default_1(shape) {
    var attrs = shape.attr();
    var points = attrs.points;
    var xArr = [];
    var yArr = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        xArr.push(point[0]);
        yArr.push(point[1]);
    }
    return g_math_1.Util.getBBoxByArray(xArr, yArr);
}
exports.default = default_1;
//# sourceMappingURL=polygon.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340045, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var text_1 = require("../util/text");
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, text = attrs.text, fontSize = attrs.fontSize, lineHeight = attrs.lineHeight;
    var font = attrs.font;
    if (!font) {
        // 如果未组装 font
        font = text_1.assembleFont(attrs);
    }
    var width = text_1.getTextWidth(text, font);
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
}, function(modId) { var map = {"../util/text":1623251340046}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340046, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.assembleFont = exports.getTextWidth = exports.getLineSpaceing = exports.getTextHeight = void 0;
var util_1 = require("./util");
var offscreen_1 = require("./offscreen");
/**
 * 获取文本的高度
 * @param text 文本
 * @param fontSize 字体大小
 * @param lineHeight 行高，可以为空
 */
function getTextHeight(text, fontSize, lineHeight) {
    var lineCount = 1;
    if (util_1.isString(text)) {
        lineCount = text.split('\n').length;
    }
    if (lineCount > 1) {
        var spaceingY = getLineSpaceing(fontSize, lineHeight);
        return fontSize * lineCount + spaceingY * (lineCount - 1);
    }
    return fontSize;
}
exports.getTextHeight = getTextHeight;
/**
 * 获取行间距如果文本多行，需要获取文本间距
 * @param fontSize 字体大小
 * @param lineHeight 行高
 */
function getLineSpaceing(fontSize, lineHeight) {
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
}
exports.getLineSpaceing = getLineSpaceing;
/**
 * 字体宽度
 * @param text 文本
 * @param font 字体
 */
function getTextWidth(text, font) {
    var context = offscreen_1.getOffScreenContext(); // 获取离屏的 ctx 进行计算
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
exports.getTextWidth = getTextWidth;
function assembleFont(attrs) {
    var fontSize = attrs.fontSize, fontFamily = attrs.fontFamily, fontWeight = attrs.fontWeight, fontStyle = attrs.fontStyle, fontVariant = attrs.fontVariant;
    return [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(' ').trim();
}
exports.assembleFont = assembleFont;
//# sourceMappingURL=text.js.map
}, function(modId) { var map = {"./util":1623251340028,"./offscreen":1623251340047}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340047, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffScreenContext = void 0;
// 全局设置一个唯一离屏的 ctx，用于计算 isPointInPath
var offScreenCtx = null;
function getOffScreenContext() {
    if (!offScreenCtx) {
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        offScreenCtx = canvas.getContext('2d');
    }
    return offScreenCtx;
}
exports.getOffScreenContext = getOffScreenContext;
//# sourceMappingURL=offscreen.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340048, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var g_math_1 = require("@antv/g-math");
var path_util_1 = require("@antv/path-util");
var util_1 = require("@antv/util");
var util_2 = require("./util");
function getPathBox(segments, lineWidth) {
    var xArr = [];
    var yArr = [];
    var segmentsWithAngle = [];
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        var currentPoint = segment.currentPoint, params = segment.params, prePoint = segment.prePoint;
        var box = void 0;
        switch (segment.command) {
            case 'Q':
                box = g_math_1.Quad.box(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4]);
                break;
            case 'C':
                box = g_math_1.Cubic.box(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4], params[5], params[6]);
                break;
            case 'A':
                var arcParams = segment.arcParams;
                box = g_math_1.Arc.box(arcParams.cx, arcParams.cy, arcParams.rx, arcParams.ry, arcParams.xRotation, arcParams.startAngle, arcParams.endAngle);
                break;
            default:
                xArr.push(currentPoint[0]);
                yArr.push(currentPoint[1]);
                break;
        }
        if (box) {
            segment.box = box;
            xArr.push(box.x, box.x + box.width);
            yArr.push(box.y, box.y + box.height);
        }
        if (lineWidth && (segment.command === 'L' || segment.command === 'M') && segment.prePoint && segment.nextPoint) {
            segmentsWithAngle.push(segment);
        }
    }
    // bbox calculation should ignore NaN for path attribute
    // ref: https://github.com/antvis/g/issues/210
    xArr = xArr.filter(function (item) { return !Number.isNaN(item); });
    yArr = yArr.filter(function (item) { return !Number.isNaN(item); });
    var minX = util_1.min(xArr);
    var minY = util_1.min(yArr);
    var maxX = util_1.max(xArr);
    var maxY = util_1.max(yArr);
    if (segmentsWithAngle.length === 0) {
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    for (var i = 0; i < segmentsWithAngle.length; i++) {
        var segment = segmentsWithAngle[i];
        var currentPoint = segment.currentPoint;
        var extra = void 0;
        if (currentPoint[0] === minX) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            minX = minX - extra.xExtra;
        }
        else if (currentPoint[0] === maxX) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            maxX = maxX + extra.xExtra;
        }
        if (currentPoint[1] === minY) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            minY = minY - extra.yExtra;
        }
        else if (currentPoint[1] === maxY) {
            extra = getExtraFromSegmentWithAngle(segment, lineWidth);
            maxY = maxY + extra.yExtra;
        }
    }
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY,
    };
}
function getExtraFromSegmentWithAngle(segment, lineWidth) {
    var prePoint = segment.prePoint, currentPoint = segment.currentPoint, nextPoint = segment.nextPoint;
    var currentAndPre = Math.pow(currentPoint[0] - prePoint[0], 2) + Math.pow(currentPoint[1] - prePoint[1], 2);
    var currentAndNext = Math.pow(currentPoint[0] - nextPoint[0], 2) + Math.pow(currentPoint[1] - nextPoint[1], 2);
    var preAndNext = Math.pow(prePoint[0] - nextPoint[0], 2) + Math.pow(prePoint[1] - nextPoint[1], 2);
    // 以 currentPoint 为顶点的夹角
    var currentAngle = Math.acos((currentAndPre + currentAndNext - preAndNext) / (2 * Math.sqrt(currentAndPre) * Math.sqrt(currentAndNext)));
    // 夹角为空、 0 或 PI 时，不需要计算夹角处的额外宽度
    // 注意: 由于计算精度问题，夹角为 0 的情况计算出来的角度可能是一个很小的值，还需要判断其与 0 是否近似相等
    if (!currentAngle || Math.sin(currentAngle) === 0 || util_1.isNumberEqual(currentAngle, 0)) {
        return {
            xExtra: 0,
            yExtra: 0,
        };
    }
    var xAngle = Math.abs(Math.atan2(nextPoint[1] - currentPoint[1], nextPoint[0] - currentPoint[0]));
    var yAngle = Math.abs(Math.atan2(nextPoint[0] - currentPoint[0], nextPoint[1] - currentPoint[1]));
    // 将夹角转为锐角
    xAngle = xAngle > Math.PI / 2 ? Math.PI - xAngle : xAngle;
    yAngle = yAngle > Math.PI / 2 ? Math.PI - yAngle : yAngle;
    // 这里不考虑在水平和垂直方向的投影，直接使用最大差值
    // 由于上层统一加减了二分之一线宽，这里需要进行弥补
    var extra = {
        // 水平方向投影
        xExtra: Math.cos(currentAngle / 2 - xAngle) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
        // 垂直方向投影
        yExtra: Math.cos(yAngle - currentAngle / 2) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
    };
    return extra;
}
function default_1(shape) {
    var attrs = shape.attr();
    var path = attrs.path, stroke = attrs.stroke;
    var lineWidth = stroke ? attrs.lineWidth : 0; // 只有有 stroke 时，lineWidth 才生效
    var segments = shape.get('segments') || path_util_1.path2Segments(path);
    var _a = getPathBox(segments, lineWidth), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var bbox = {
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height,
    };
    bbox = util_2.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=path.js.map
}, function(modId) { var map = {"./util":1623251340043}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340049, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
function default_1(shape) {
    var attrs = shape.attr();
    var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2;
    var minX = Math.min(x1, x2);
    var maxX = Math.max(x1, x2);
    var minY = Math.min(y1, y2);
    var maxY = Math.max(y1, y2);
    var bbox = {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
    };
    bbox = util_1.mergeArrowBBox(shape, bbox);
    return {
        x: bbox.minX,
        y: bbox.minY,
        width: bbox.maxX - bbox.minX,
        height: bbox.maxY - bbox.minY,
    };
}
exports.default = default_1;
//# sourceMappingURL=line.js.map
}, function(modId) { var map = {"./util":1623251340043}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1623251340050, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(shape) {
    var attrs = shape.attr();
    var x = attrs.x, y = attrs.y, rx = attrs.rx, ry = attrs.ry;
    return {
        x: x - rx,
        y: y - ry,
        width: rx * 2,
        height: ry * 2,
    };
}
exports.default = default_1;
//# sourceMappingURL=ellipse.js.map
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1623251340022);
})()
//# sourceMappingURL=index.js.map