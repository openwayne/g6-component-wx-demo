!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.f6=t():e.f6=t()}(this,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=250)}({10:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelize=t.isString=void 0;t.isString=function(e){return"string"==typeof e};var r,n,i=/-(\w)/g;t.camelize=(r=function(e){return e.replace(i,(function(e,t){return t?t.toUpperCase():""}))},n=Object.create(null),function(e){return n[e]||(n[e]=r(e))})},11:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=void 0,t.isArray=Array.isArray},12:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toNumber=t.isNaN=t.isNumber=void 0;t.isNumber=function(e){return"number"==typeof e};t.isNaN=function(e){return Number.isNaN(Number(e))};t.toNumber=function(e){var o=parseFloat(e);return t.isNaN(o)?e:o}},13:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.traverseTreeUp=t.scaleMatrix=t.getAdjMatrix=t.floydWarshall=t.getDegree=void 0;t.getDegree=function(e,t,o){for(var r=[],n=0;n<e;n++)r[n]=0;return o?(o.forEach((function(e){e.source&&(r[t[e.source]]+=1),e.target&&(r[t[e.target]]+=1)})),r):r};t.floydWarshall=function(e){for(var t=[],o=e.length,r=0;r<o;r+=1){t[r]=[];for(var n=0;n<o;n+=1)r===n?t[r][n]=0:0!==e[r][n]&&e[r][n]?t[r][n]=e[r][n]:t[r][n]=1/0}for(var i=0;i<o;i+=1)for(r=0;r<o;r+=1)for(n=0;n<o;n+=1)t[r][n]>t[r][i]+t[i][n]&&(t[r][n]=t[r][i]+t[i][n]);return t};t.getAdjMatrix=function(e,t){var o=e.nodes,r=e.edges,n=[],i={};if(!o)throw new Error("invalid nodes data!");return o&&o.forEach((function(e,t){i[e.id]=t;n.push([])})),r&&r.forEach((function(e){var o=e.source,r=e.target,c=i[o],a=i[r];n[c][a]=1,t||(n[a][c]=1)})),n};t.scaleMatrix=function(e,t){var o=[];return e.forEach((function(e){var r=[];e.forEach((function(e){r.push(e*t)})),o.push(r)})),o};t.traverseTreeUp=function(e,t){"function"==typeof t&&function e(t,o){if(t&&t.children)for(var r=t.children.length-1;r>=0;r--)if(!e(t.children[r],o))return;return!!o(t)}(e,t)}},14:function(e,t,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clone=t.isObject=void 0;t.isObject=function(e){return null!==e&&"object"===r(e)};t.clone=function(e){if(null===e)return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof Array){var o=[];return e.forEach((function(e){o.push(e)})),o.map((function(e){return t.clone(e)}))}if("object"===r(e)&&e!=={}){var i=n({},e);return Object.keys(i).forEach((function(e){i[e]=t.clone(i[e])})),i}return e}},15:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=void 0;t.isFunction=function(e){return"function"==typeof e}},189:function(e,t,o){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});Object.defineProperty(t,"__esModule",{value:!0}),t.ComboForceLayout=void 0;var i=o(7),c=o(9),a=function(e){function t(t){var o=e.call(this)||this;return o.center=[0,0],o.maxIteration=100,o.gravity=10,o.comboGravity=10,o.linkDistance=10,o.alpha=1,o.alphaMin=.001,o.alphaDecay=1-Math.pow(o.alphaMin,1/300),o.alphaTarget=0,o.velocityDecay=.6,o.edgeStrength=.6,o.nodeStrength=30,o.preventOverlap=!1,o.preventNodeOverlap=!1,o.preventComboOverlap=!1,o.collideStrength=void 0,o.nodeCollideStrength=.5,o.comboCollideStrength=.5,o.comboSpacing=20,o.comboPadding=10,o.optimizeRangeFactor=1,o.onTick=function(){},o.onLayoutEnd=function(){},o.depthAttractiveForceScale=1,o.depthRepulsiveForceScale=2,o.nodes=[],o.edges=[],o.combos=[],o.comboTrees=[],o.width=300,o.height=300,o.bias=[],o.nodeMap={},o.oriComboMap={},o.indexMap={},o.comboMap={},o.previousLayouted=!1,o.updateCfg(t),o}return n(t,e),t.prototype.getDefaultCfg=function(){return{maxIteration:100,center:[0,0],gravity:10,speed:1,comboGravity:30,preventOverlap:!1,preventComboOverlap:!0,preventNodeOverlap:!0,nodeSpacing:void 0,collideStrength:void 0,nodeCollideStrength:.5,comboCollideStrength:.5,comboSpacing:20,comboPadding:10,edgeStrength:.6,nodeStrength:30,linkDistance:10}},t.prototype.execute=function(){var e=this.nodes,t=this.center;if(this.comboTree={id:"comboTreeRoot",depth:-1,children:this.comboTrees},e&&0!==e.length){if(1===e.length)return e[0].x=t[0],e[0].y=t[1],void(this.onLayoutEnd&&this.onLayoutEnd());this.initVals(),this.run(),this.onLayoutEnd&&this.onLayoutEnd()}else this.onLayoutEnd&&this.onLayoutEnd()},t.prototype.run=function(){var e=this,t=e.nodes,o=e.previousLayouted?e.maxIteration/5:e.maxIteration;e.width||"undefined"==typeof window||(e.width=window.innerWidth),e.height||"undefined"==typeof window||(e.height=window.innerHeight);var r=e.center,n=e.velocityDecay,i=e.comboMap;e.previousLayouted||e.initPos(i);for(var a=function(o){var r=[];t.forEach((function(e,t){r[t]={x:0,y:0}})),e.applyCalculate(r),e.applyComboCenterForce(r),t.forEach((function(e,t){c.isNumber(e.x)&&c.isNumber(e.y)&&(e.x+=r[t].x*n,e.y+=r[t].y*n)})),e.alpha+=(e.alphaTarget-e.alpha)*e.alphaDecay,e.onTick()},u=0;u<o;u++)a();var s=[0,0];t.forEach((function(e){c.isNumber(e.x)&&c.isNumber(e.y)&&(s[0]+=e.x,s[1]+=e.y)})),s[0]/=t.length,s[1]/=t.length;var f=[r[0]-s[0],r[1]-s[1]];t.forEach((function(e,t){c.isNumber(e.x)&&c.isNumber(e.y)&&(e.x+=f[0],e.y+=f[1])})),e.combos.forEach((function(e){var t=i[e.id];t&&t.empty&&(e.x=t.cx||e.x,e.y=t.cy||e.y)})),e.previousLayouted=!0},t.prototype.initVals=function(){var e=this.edges,t=this.nodes,o=this.combos,r={},n={},i={};t.forEach((function(e,t){n[e.id]=e,i[e.id]=t})),this.nodeMap=n,this.indexMap=i;var a={};o.forEach((function(e){a[e.id]=e})),this.oriComboMap=a,this.comboMap=this.getComboMap();var u=this.preventOverlap;this.preventComboOverlap=this.preventComboOverlap||u,this.preventNodeOverlap=this.preventNodeOverlap||u;var s=this.collideStrength;s&&(this.comboCollideStrength=s,this.nodeCollideStrength=s),this.comboCollideStrength=this.comboCollideStrength?this.comboCollideStrength:0,this.nodeCollideStrength=this.nodeCollideStrength?this.nodeCollideStrength:0;for(var f=0;f<e.length;++f)r[e[f].source]?r[e[f].source]++:r[e[f].source]=1,r[e[f].target]?r[e[f].target]++:r[e[f].target]=1;var d=[];for(f=0;f<e.length;++f)d[f]=r[e[f].source]/(r[e[f].source]+r[e[f].target]);this.bias=d;var p,h,l=this.nodeSize,y=this.nodeSpacing;if(h=c.isNumber(y)?function(){return y}:c.isFunction(y)?y:function(){return 0},this.nodeSpacing=h,l)if(c.isFunction(l))p=function(e){return l(e)};else if(c.isArray(l)){var v=(l[0]>l[1]?l[0]:l[1])/2;p=function(e){return v}}else{var m=l/2;p=function(e){return m}}else p=function(e){return e.size?c.isArray(e.size)?(e.size[0]>e.size[1]?e.size[0]:e.size[1])/2:e.size/2:10};this.nodeSize=p;var b,g=this.comboSpacing;b=c.isNumber(g)?function(){return g}:c.isFunction(g)?g:function(){return 0},this.comboSpacing=b;var x,S=this.comboPadding;x=c.isNumber(S)?function(){return S}:c.isArray(S)?function(){return Math.max.apply(null,S)}:c.isFunction(S)?S:function(){return 0},this.comboPadding=x;var M,O=this.linkDistance;O||(O=10),M=c.isNumber(O)?function(e){return O}:O,this.linkDistance=M;var N,C=this.edgeStrength;C||(C=1),N=c.isNumber(C)?function(e){return C}:C,this.edgeStrength=N;var E,_=this.nodeStrength;_||(_=30),E=c.isNumber(_)?function(e){return _}:_,this.nodeStrength=E},t.prototype.initPos=function(e){this.nodes.forEach((function(t,o){var r=t.comboId,n=e[r];r&&n?(t.x=n.cx+100/(o+1),t.y=n.cy+100/(o+1)):(t.x=100/(o+1),t.y=100/(o+1))}))},t.prototype.getComboMap=function(){var e=this,t=e.nodeMap,o=e.indexMap,r=e.comboTrees,n=e.oriComboMap,i={};return(r||[]).forEach((function(r){var a=[];c.traverseTreeUp(r,(function(r){if("node"===r.itemType)return!0;if(!n[r.id])return!0;if(void 0===i[r.id]){var u={id:r.id,name:r.id,cx:0,cy:0,count:0,depth:e.oriComboMap[r.id].depth,children:[]};i[r.id]=u}var s=r.children;s&&s.forEach((function(e){if(!i[e.id]&&!t[e.id])return!0;a.push(e)}));var f=i[r.id];if(f.cx=0,f.cy=0,0===a.length){f.empty=!0;var d=n[r.id],p=Object.keys(t).length,h=r.id+"-visual-child-"+p,l={id:h,x:d.x,y:d.y,depth:f.depth+1,itemType:"node"};e.nodes.push(l),t[h]=l,o[h]=p,f.cx=d.x,f.cy=d.y,a.push(l)}return a.forEach((function(e){if(f.count++,"node"!==e.itemType){var o=i[e.id];return c.isNumber(o.cx)&&(f.cx+=o.cx),void(c.isNumber(o.cy)&&(f.cy+=o.cy))}var r=t[e.id];r&&(c.isNumber(r.x)&&(f.cx+=r.x),c.isNumber(r.y)&&(f.cy+=r.y))})),f.cx/=f.count,f.cy/=f.count,f.children=a,!0}))})),i},t.prototype.applyComboCenterForce=function(e){var t=this.gravity,o=this.comboGravity||t,r=this.alpha,n=this.comboTrees,i=this.indexMap,a=this.nodeMap,u=this.comboMap;(n||[]).forEach((function(t){c.traverseTreeUp(t,(function(t){if("node"===t.itemType)return!0;if(!u[t.id])return!0;var n=u[t.id],s=(n.depth+1)/10*.5,f=n.cx,d=n.cy;return n.cx=0,n.cy=0,n.children.forEach((function(t){if("node"!==t.itemType){var p=u[t.id];return p&&c.isNumber(p.cx)&&(n.cx+=p.cx),void(p&&c.isNumber(p.cy)&&(n.cy+=p.cy))}var h=a[t.id],l=h.x-f||.005,y=h.y-d||.005,v=Math.sqrt(l*l+y*y),m=i[h.id],b=o*r/v*s;e[m].x-=l*b,e[m].y-=y*b,c.isNumber(h.x)&&(n.cx+=h.x),c.isNumber(h.y)&&(n.cy+=h.y)})),n.cx/=n.count,n.cy/=n.count,!0}))}))},t.prototype.applyCalculate=function(e){var t=this.comboMap,o=this.nodes,r={};o.forEach((function(e,t){o.forEach((function(o,n){if(!(t<n)){var i=e.x-o.x||.005,c=e.y-o.y||.005,a=i*i+c*c,u=Math.sqrt(a);a<1&&(a=u),r[e.id+"-"+o.id]={vx:i,vy:c,vl2:a,vl:u},r[o.id+"-"+e.id]={vl2:a,vl:u,vx:-i,vy:-c}}}))})),this.updateComboSizes(t),this.calRepulsive(e,r),this.calAttractive(e,r),this.preventComboOverlap&&this.comboNonOverlapping(e,t)},t.prototype.updateComboSizes=function(e){var t=this,o=t.comboTrees,r=t.nodeMap,n=t.nodeSize,i=t.comboSpacing,a=t.comboPadding;(o||[]).forEach((function(o){var u=[];c.traverseTreeUp(o,(function(o){if("node"===o.itemType)return!0;var s=e[o.id];if(!s)return!1;var f=o.children;f&&f.forEach((function(t){(e[t.id]||r[t.id])&&u.push(t)})),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0,u.forEach((function(e){if("node"!==e.itemType)return!0;var t=r[e.id];if(!t)return!0;var o=n(t),i=t.x-o,c=t.y-o,a=t.x+o,u=t.y+o;s.minX>i&&(s.minX=i),s.minY>c&&(s.minY=c),s.maxX<a&&(s.maxX=a),s.maxY<u&&(s.maxY=u)}));var d=t.oriComboMap[o.id].size||10;c.isArray(d)&&(d=d[0]);var p=Math.max(s.maxX-s.minX,s.maxY-s.minY,d);return s.r=p/2+i(s)/2+a(s),!0}))}))},t.prototype.comboNonOverlapping=function(e,t){var o=this.comboTree,r=this.comboCollideStrength,n=this.indexMap,i=this.nodeMap;c.traverseTreeUp(o,(function(o){if(!t[o.id]&&!i[o.id]&&"comboTreeRoot"!==o.id)return!1;var c=o.children;return c&&c.length>1&&c.forEach((function(o,a){if("node"===o.itemType)return!1;var u=t[o.id];u&&c.forEach((function(c,s){if(a<=s)return!1;if("node"===c.itemType)return!1;var f=t[c.id];if(!f)return!1;var d=u.cx-f.cx||.005,p=u.cy-f.cy||.005,h=d*d+p*p,l=u.r,y=f.r,v=l+y,m=y*y,b=l*l;if(h<v*v){var g=o.children;if(!g||0===g.length)return!1;var x=c.children;if(!x||0===x.length)return!1;var S=Math.sqrt(h),M=(v-S)/S*r,O=d*M,N=p*M,C=m/(b+m),E=1-C;g.forEach((function(t){if("node"!==t.itemType)return!1;if(i[t.id]){var o=n[t.id];x.forEach((function(t){if("node"!==t.itemType)return!1;if(!i[t.id])return!1;var r=n[t.id];e[o].x+=O*C,e[o].y+=N*C,e[r].x-=O*E,e[r].y-=N*E}))}}))}}))})),!0}))},t.prototype.calRepulsive=function(e,t){var o=this,r=o.nodes,n=o.width*o.optimizeRangeFactor,i=o.nodeStrength,c=o.alpha,a=o.nodeCollideStrength,u=o.preventNodeOverlap,s=o.nodeSize,f=o.nodeSpacing,d=o.depthRepulsiveForceScale,p=o.center;r.forEach((function(h,l){if(h.x&&h.y){if(p){var y=o.gravity,v=h.x-p[0]||.005,m=h.y-p[1]||.005,b=Math.sqrt(v*v+m*m);e[l].x-=v*y*c/b,e[l].y-=m*y*c/b}r.forEach((function(o,r){if(l!==r&&o.x&&o.y){var p=t[h.id+"-"+o.id],y=p.vl2,v=p.vl;if(!(v>n)){var m=t[h.id+"-"+o.id],b=m.vx,g=m.vy,x=Math.log(Math.abs(o.depth-h.depth)/10)+1||1;x=x<1?1:x,o.comboId!==h.comboId&&(x+=1);var S=x?Math.pow(d,x):1,M=i(o)*c/y*S;if(e[l].x+=b*M,e[l].y+=g*M,l<r&&u){var O=s(h)+f(h),N=s(o)+f(o),C=O+N;if(y<C*C){var E=(C-v)/v*a,_=N*N,j=_/(O*O+_),T=b*E,w=g*E;e[l].x+=T*j,e[l].y+=w*j,j=1-j,e[r].x-=T*j,e[r].y-=w*j}}}}}))}}))},t.prototype.calAttractive=function(e,t){var o=this,r=o.edges,n=o.linkDistance,i=o.alpha,a=o.edgeStrength,u=o.bias,s=o.depthAttractiveForceScale;r.forEach((function(r,f){if(r.source&&r.target&&r.source!==r.target){var d=o.indexMap[r.source],p=o.indexMap[r.target],h=o.nodeMap[r.source],l=o.nodeMap[r.target];if(h&&l){var y=Math.log(Math.abs(h.depth-l.depth)/10);h.comboId===l.comboId&&(y/=2);var v=y?Math.pow(s,y):1;if(h.comboId!==l.comboId&&1===v?v=s/2:h.comboId===l.comboId&&(v=2),c.isNumber(l.x)&&c.isNumber(h.x)&&c.isNumber(l.y)&&c.isNumber(h.y)){var m=t[r.target+"-"+r.source],b=m.vl,g=m.vx,x=m.vy,S=(b-n(r))/b*i*a(r)*v,M=g*S,O=x*S,N=u[f];e[p].x-=M*N,e[p].y-=O*N,e[d].x+=M*(1-N),e[d].y+=O*(1-N)}}}}))},t.prototype.getType=function(){return"comboForce"},t}(i.Base);t.ComboForceLayout=a},250:function(e,t,o){"use strict";o.r(t);var r=o(189);t.default=r.ComboForceLayout},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Base=void 0;var r=function(){function e(){this.nodes=[],this.edges=[],this.combos=[],this.positions=[],this.destroyed=!1,this.onLayoutEnd=function(){}}return e.prototype.layout=function(e){return this.init(e),this.execute(!0)},e.prototype.init=function(e){this.nodes=e.nodes||[],this.edges=e.edges||[],this.combos=e.combos||[]},e.prototype.execute=function(e){},e.prototype.executeWithWorker=function(){},e.prototype.getDefaultCfg=function(){return{}},e.prototype.updateCfg=function(e){e&&Object.assign(this,e)},e.prototype.getType=function(){return"base"},e.prototype.destroy=function(){this.nodes=null,this.edges=null,this.combos=null,this.positions=null,this.destroyed=!0},e}();t.Base=r},9:function(e,t,o){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||r(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(10),t),n(o(11),t),n(o(12),t),n(o(13),t),n(o(14),t),n(o(15),t)}}).default}));
//# sourceMappingURL=comboForceLayout.js.map