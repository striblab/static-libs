!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.stribStyles=t()}(this,function(){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function e(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var n=function(){function r(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};o(this,r),e&&e instanceof jQuery?this.$gallery=e:this.$gallery=$(e),n.transition=n.transition||"fade",n.start=n.start=0,this.options=n,this.$slides=this.$gallery.find("figure"),this.$gallery.addClass(n.transition),this.index=n.start,this.show(),this.$gallery.find(".gallery-next").on("click",function(){t.next()}),this.$gallery.find(".gallery-previous").on("click",function(){t.previous()}),this.$gallery.find(".gallery-fullscreen").on("click",function(){t.toggleFullscreen()})}return e(r,[{key:"show",value:function(){var n=this,r=this.$slides.length-1;this.$slides.each(function(e,t){e===n.index?$(t).addClass("active"):$(t).removeClass("active"),0===n.index&&e===r||0<n.index&&e===n.index-1?$(t).addClass("item-previous"):$(t).removeClass("item-previous"),n.index===r&&0===e||n.index<r&&e===n.index+1?$(t).addClass("item-next"):$(t).removeClass("item-next")})}},{key:"toggleFullscreen",value:function(){this.$gallery.toggleClass("fullscreen")}},{key:"next",value:function(){this.index=this.index===this.$slides.length-1?0:this.index+1,this.show()}},{key:"previous",value:function(){this.index=0===this.index?this.$slides.length-1:this.index-1,this.show()}}]),r}();function l(e,t){return e===t||e!=e&&t!=t}function a(e,t){for(var n=e.length;n--;)if(l(e[n][0],t))return n;return-1}var i=Array.prototype.splice;function s(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}s.prototype.clear=function(){this.__data__=[],this.size=0},s.prototype.delete=function(e){var t=this.__data__,n=a(t,e);return!(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))},s.prototype.get=function(e){var t=this.__data__,n=a(t,e);return n<0?void 0:t[n][1]},s.prototype.has=function(e){return-1<a(this.__data__,e)},s.prototype.set=function(e,t){var n=this.__data__,r=a(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};var t="object"==typeof global&&global&&global.Object===Object&&global,c="object"==typeof self&&self&&self.Object===Object&&self,f=t||c||Function("return this")(),h=f.Symbol,u=Object.prototype,g=u.hasOwnProperty,p=u.toString,b=h?h.toStringTag:void 0;var m=Object.prototype.toString;var d="[object Null]",y="[object Undefined]",v=h?h.toStringTag:void 0;function x(e){return null==e?void 0===e?y:d:v&&v in Object(e)?function(e){var t=g.call(e,b),n=e[b];try{e[b]=void 0}catch(e){}var r=p.call(e);return t?e[b]=n:delete e[b],r}(e):(t=e,m.call(t));var t}function k(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var w="[object AsyncFunction]",j="[object Function]",_="[object GeneratorFunction]",O="[object Proxy]";function A(e){if(!k(e))return!1;var t=x(e);return t==j||t==_||t==w||t==O}var S,C=f["__core-js_shared__"],P=(S=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var z=Function.prototype.toString;function M(e){if(null!=e){try{return z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var T=/^\[object .+?Constructor\]$/,G=Function.prototype,B=Object.prototype,F=G.toString,H=B.hasOwnProperty,E=RegExp("^"+F.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function D(e){return!(!k(e)||(t=e,P&&P in t))&&(A(e)?E:T).test(M(e));var t}function N(e,t){var n,r,o=(r=t,null==(n=e)?void 0:n[r]);return D(o)?o:void 0}var W=N(f,"Map"),I=N(Object,"create");var U=Object.prototype.hasOwnProperty;var R=Object.prototype.hasOwnProperty;function J(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Z(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function V(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}J.prototype.clear=function(){this.__data__=I?I(null):{},this.size=0},J.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},J.prototype.get=function(e){var t=this.__data__;if(I){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return U.call(t,e)?t[e]:void 0},J.prototype.has=function(e){var t=this.__data__;return I?void 0!==t[e]:R.call(t,e)},J.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=I&&void 0===t?"__lodash_hash_undefined__":t,this},V.prototype.clear=function(){this.size=0,this.__data__={hash:new J,map:new(W||s),string:new J}},V.prototype.delete=function(e){var t=Z(this,e).delete(e);return this.size-=t?1:0,t},V.prototype.get=function(e){return Z(this,e).get(e)},V.prototype.has=function(e){return Z(this,e).has(e)},V.prototype.set=function(e,t){var n=Z(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function q(e){var t=this.__data__=new s(e);this.size=t.size}q.prototype.clear=function(){this.__data__=new s,this.size=0},q.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},q.prototype.get=function(e){return this.__data__.get(e)},q.prototype.has=function(e){return this.__data__.has(e)},q.prototype.set=function(e,t){var n=this.__data__;if(n instanceof s){var r=n.__data__;if(!W||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new V(r)}return n.set(e,t),this.size=n.size,this};var Q=function(){try{var e=N(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();function X(e,t,n){"__proto__"==t&&Q?Q(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var K=Object.prototype.hasOwnProperty;function Y(e,t,n){var r=e[t];K.call(e,t)&&l(r,n)&&(void 0!==n||t in e)||X(e,t,n)}function ee(e,t,n,r){var o=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var l=t[a],s=r?r(n[l],e[l],l,n,e):void 0;void 0===s&&(s=e[l]),o?X(n,l,s):Y(n,l,s)}return n}function te(e){return null!=e&&"object"==typeof e}function ne(e){return te(e)&&"[object Arguments]"==x(e)}var re=Object.prototype,oe=re.hasOwnProperty,ae=re.propertyIsEnumerable,ie=ne(function(){return arguments}())?ne:function(e){return te(e)&&oe.call(e,"callee")&&!ae.call(e,"callee")},le=Array.isArray;var se="object"==typeof exports&&exports&&!exports.nodeType&&exports,ce=se&&"object"==typeof module&&module&&!module.nodeType&&module,fe=ce&&ce.exports===se?f.Buffer:void 0,he=(fe?fe.isBuffer:void 0)||function(){return!1},ue=9007199254740991,ge=/^(?:0|[1-9]\d*)$/;function pe(e,t){var n=typeof e;return!!(t=null==t?ue:t)&&("number"==n||"symbol"!=n&&ge.test(e))&&-1<e&&e%1==0&&e<t}var be=9007199254740991;function me(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=be}var de={};function ye(t){return function(e){return t(e)}}de["[object Float32Array]"]=de["[object Float64Array]"]=de["[object Int8Array]"]=de["[object Int16Array]"]=de["[object Int32Array]"]=de["[object Uint8Array]"]=de["[object Uint8ClampedArray]"]=de["[object Uint16Array]"]=de["[object Uint32Array]"]=!0,de["[object Arguments]"]=de["[object Array]"]=de["[object ArrayBuffer]"]=de["[object Boolean]"]=de["[object DataView]"]=de["[object Date]"]=de["[object Error]"]=de["[object Function]"]=de["[object Map]"]=de["[object Number]"]=de["[object Object]"]=de["[object RegExp]"]=de["[object Set]"]=de["[object String]"]=de["[object WeakMap]"]=!1;var ve="object"==typeof exports&&exports&&!exports.nodeType&&exports,xe=ve&&"object"==typeof module&&module&&!module.nodeType&&module,we=xe&&xe.exports===ve&&t.process,je=function(){try{var e=xe&&xe.require&&xe.require("util").types;return e||we&&we.binding&&we.binding("util")}catch(e){}}(),_e=je&&je.isTypedArray,Oe=_e?ye(_e):function(e){return te(e)&&me(e.length)&&!!de[x(e)]},Ae=Object.prototype.hasOwnProperty;function Se(e,t){var n=le(e),r=!n&&ie(e),o=!n&&!r&&he(e),a=!n&&!r&&!o&&Oe(e),i=n||r||o||a,l=i?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],s=l.length;for(var c in e)!t&&!Ae.call(e,c)||i&&("length"==c||o&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||pe(c,s))||l.push(c);return l}var ke=Object.prototype;function Ce(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ke)}function Pe(t,n){return function(e){return t(n(e))}}var Le=Pe(Object.keys,Object),ze=Object.prototype.hasOwnProperty;function Me(e){return null!=e&&me(e.length)&&!A(e)}function Te(e){return Me(e)?Se(e):function(e){if(!Ce(e))return Le(e);var t=[];for(var n in Object(e))ze.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}var Ge=Object.prototype.hasOwnProperty;function Be(e){if(!k(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=Ce(e),n=[];for(var r in e)("constructor"!=r||!t&&Ge.call(e,r))&&n.push(r);return n}function Fe(e){return Me(e)?Se(e,!0):Be(e)}var $e="object"==typeof exports&&exports&&!exports.nodeType&&exports,He=$e&&"object"==typeof module&&module&&!module.nodeType&&module,Ee=He&&He.exports===$e?f.Buffer:void 0,De=Ee?Ee.allocUnsafe:void 0;function Ne(e,t){if(t)return e.slice();var n=e.length,r=De?De(n):new e.constructor(n);return e.copy(r),r}function We(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function Ie(){return[]}var Ue=Object.prototype.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,Je=Re?function(t){return null==t?[]:(t=Object(t),function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}(Re(t),function(e){return Ue.call(t,e)}))}:Ie;function Ze(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var Ve=Pe(Object.getPrototypeOf,Object),qe=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Ze(t,Je(e)),e=Ve(e);return t}:Ie;function Qe(e,t,n){var r=t(e);return le(e)?r:Ze(r,n(e))}function Xe(e){return Qe(e,Te,Je)}function Ke(e){return Qe(e,Fe,qe)}var Ye=N(f,"DataView"),et=N(f,"Promise"),tt=N(f,"Set"),nt=N(f,"WeakMap"),rt="[object Map]",ot="[object Promise]",at="[object Set]",it="[object WeakMap]",lt="[object DataView]",st=M(Ye),ct=M(W),ft=M(et),ht=M(tt),ut=M(nt),gt=x;(Ye&&gt(new Ye(new ArrayBuffer(1)))!=lt||W&&gt(new W)!=rt||et&&gt(et.resolve())!=ot||tt&&gt(new tt)!=at||nt&&gt(new nt)!=it)&&(gt=function(e){var t=x(e),n="[object Object]"==t?e.constructor:void 0,r=n?M(n):"";if(r)switch(r){case st:return lt;case ct:return rt;case ft:return ot;case ht:return at;case ut:return it}return t});var pt=gt,bt=Object.prototype.hasOwnProperty;var mt=f.Uint8Array;function dt(e){var t=new e.constructor(e.byteLength);return new mt(t).set(new mt(e)),t}var yt=/\w*$/;var vt=h?h.prototype:void 0,xt=vt?vt.valueOf:void 0;function wt(e,t){var n=t?dt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var jt="[object Boolean]",_t="[object Date]",Ot="[object Map]",At="[object Number]",St="[object RegExp]",kt="[object Set]",Ct="[object String]",Pt="[object Symbol]",Lt="[object ArrayBuffer]",zt="[object DataView]",Mt="[object Float32Array]",Tt="[object Float64Array]",Gt="[object Int8Array]",Bt="[object Int16Array]",Ft="[object Int32Array]",$t="[object Uint8Array]",Ht="[object Uint8ClampedArray]",Et="[object Uint16Array]",Dt="[object Uint32Array]";function Nt(e,t,n){var r,o,a,i,l,s=e.constructor;switch(t){case Lt:return dt(e);case jt:case _t:return new s(+e);case zt:return i=e,l=n?dt(i.buffer):i.buffer,new i.constructor(l,i.byteOffset,i.byteLength);case Mt:case Tt:case Gt:case Bt:case Ft:case $t:case Ht:case Et:case Dt:return wt(e,n);case Ot:return new s;case At:case Ct:return new s(e);case St:return(a=new(o=e).constructor(o.source,yt.exec(o))).lastIndex=o.lastIndex,a;case kt:return new s;case Pt:return r=e,xt?Object(xt.call(r)):{}}}var Wt=Object.create,It=function(){function n(){}return function(e){if(!k(e))return{};if(Wt)return Wt(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();function Ut(e){return"function"!=typeof e.constructor||Ce(e)?{}:It(Ve(e))}var Rt=je&&je.isMap,Jt=Rt?ye(Rt):function(e){return te(e)&&"[object Map]"==pt(e)};var Zt=je&&je.isSet,Vt=Zt?ye(Zt):function(e){return te(e)&&"[object Set]"==pt(e)},qt=1,Qt=2,Xt=4,Kt="[object Arguments]",Yt="[object Function]",en="[object GeneratorFunction]",tn="[object Object]",nn={};function rn(n,r,o,e,t,a){var i,l=r&qt,s=r&Qt,c=r&Xt;if(o&&(i=t?o(n,e,t,a):o(n)),void 0!==i)return i;if(!k(n))return n;var f,h,u,g,p,b,m,d,y,v,x,w=le(n);if(w){if(v=(y=n).length,x=new y.constructor(v),v&&"string"==typeof y[0]&&bt.call(y,"index")&&(x.index=y.index,x.input=y.input),i=x,!l)return We(n,i)}else{var j=pt(n),_=j==Yt||j==en;if(he(n))return Ne(n,l);if(j==tn||j==Kt||_&&!t){if(i=s||_?{}:Ut(n),!l)return s?(d=p=n,b=(m=i)&&ee(d,Fe(d),m),ee(p,qe(p),b)):(g=f=n,h=(u=i)&&ee(g,Te(g),u),ee(f,Je(f),h))}else{if(!nn[j])return t?n:{};i=Nt(n,j,l)}}a||(a=new q);var O=a.get(n);if(O)return O;if(a.set(n,i),Vt(n))return n.forEach(function(e){i.add(rn(e,r,o,e,n,a))}),i;if(Jt(n))return n.forEach(function(e,t){i.set(t,rn(e,r,o,t,n,a))}),i;var A=c?s?Ke:Xe:s?keysIn:Te,S=w?void 0:A(n);return function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););}(S||n,function(e,t){S&&(e=n[t=e]),Y(i,t,rn(e,r,o,t,n,a))}),i}nn[Kt]=nn["[object Array]"]=nn["[object ArrayBuffer]"]=nn["[object DataView]"]=nn["[object Boolean]"]=nn["[object Date]"]=nn["[object Float32Array]"]=nn["[object Float64Array]"]=nn["[object Int8Array]"]=nn["[object Int16Array]"]=nn["[object Int32Array]"]=nn["[object Map]"]=nn["[object Number]"]=nn[tn]=nn["[object RegExp]"]=nn["[object Set]"]=nn["[object String]"]=nn["[object Symbol]"]=nn["[object Uint8Array]"]=nn["[object Uint8ClampedArray]"]=nn["[object Uint16Array]"]=nn["[object Uint32Array]"]=!0,nn["[object Error]"]=nn[Yt]=nn["[object WeakMap]"]=!1;function on(e){return rn(e,5)}function an(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function ln(e){return e}var sn=Math.max;var cn=Q?function(e,t){return Q(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:ln,fn=Date.now;var hn,un,gn,pn=(hn=cn,gn=un=0,function(){var e=fn(),t=16-(e-gn);if(gn=e,0<t){if(800<=++un)return arguments[0]}else un=0;return hn.apply(void 0,arguments)});function bn(e,t){return pn((a=e,l=ln,i=sn(void 0===(i=t)?a.length-1:i,0),function(){for(var e=arguments,t=-1,n=sn(e.length-i,0),r=Array(n);++t<n;)r[t]=e[i+t];t=-1;for(var o=Array(i+1);++t<i;)o[t]=e[t];return o[i]=l(r),an(a,this,o)}),e+"");var a,i,l}function mn(e,t,n){(void 0===n||l(e[t],n))&&(void 0!==n||t in e)||X(e,t,n)}var dn,yn=function(e,t,n){for(var r=-1,o=Object(e),a=n(e),i=a.length;i--;){var l=a[dn?i:++r];if(!1===t(o[l],l,o))break}return e};var vn="[object Object]",xn=Function.prototype,wn=Object.prototype,jn=xn.toString,_n=wn.hasOwnProperty,On=jn.call(Object);function An(e,t){return"__proto__"==t?void 0:e[t]}function Sn(e,t,n,r,o,a,i){var l=An(e,n),s=An(t,n),c=i.get(s);if(c)mn(e,n,c);else{var f,h,u=a?a(l,s,n+"",e,t,i):void 0,g=void 0===u;if(g){var p=le(s),b=!p&&he(s),m=!p&&!b&&Oe(s);u=s,p||b||m?u=le(l)?l:te(h=l)&&Me(h)?We(l):b?Ne(s,!(g=!1)):m?wt(s,!(g=!1)):[]:function(e){if(!te(e)||x(e)!=vn)return!1;var t=Ve(e);if(null===t)return!0;var n=_n.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&jn.call(n)==On}(s)||ie(s)?ie(u=l)?u=ee(f=l,Fe(f)):(!k(l)||r&&A(l))&&(u=Ut(s)):g=!1}g&&(i.set(s,u),o(u,s,r,a,i),i.delete(s)),mn(e,n,u)}}function kn(r,o,a,i,l){r!==o&&yn(o,function(e,t){if(k(e))l||(l=new q),Sn(r,o,t,a,kn,i,l);else{var n=i?i(An(r,t),e,t+"",r,o,l):void 0;void 0===n&&(n=e),mn(r,t,n)}},Fe)}function Cn(e,t,n,r,o,a){return k(e)&&k(t)&&(a.set(t,e),kn(e,t,void 0,Cn,a),a.delete(t)),e}var Pn,Ln=(Pn=function(e,t,n,r){kn(e,t,n,r)},bn(function(e,t){var n=-1,r=t.length,o=1<r?t[r-1]:void 0,a=2<r?t[2]:void 0;for(o=3<Pn.length&&"function"==typeof o?(r--,o):void 0,a&&function(e,t,n){if(!k(n))return!1;var r=typeof t;return!!("number"==r?Me(n)&&pe(t,n.length):"string"==r&&t in n)&&l(n[t],e)}(t[0],t[1],a)&&(o=r<3?void 0:o,r=1),e=Object(e);++n<r;){var i=t[n];i&&Pn(e,i,n,o)}return e})),zn=bn(function(e){return e.push(void 0,Cn),an(Ln,void 0,e)}),Mn={"selector-wrapper":!1,root:!0,debug:!1,spacer:1,"spacer-component-magnitude":1,"spacer-component":1,"image-path":"./images","font-display":"fallback","font-default-line-height":1.4,"font-default-letter-spacing":"normal","font-default-font-weight":"normal","font-benton-sans":{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-benton-sans-condensed":{"font-family":"Benton Sans Condensed Medium, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-popular":{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-popular-light":{"font-family":"Popular Light, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-popular-medium":{"font-family":"Popular Medium, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-poynter-serif":{"font-family":"Poynter Serif RE, Georgia, Times, serif","line-height":1.4,"letter-spacing":-.2,"font-weight":"normal"},"font-whitman-display":{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},"font-whitman-display-condensed-bold":{"font-family":"Whitman Display Condensed Bold, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-whitman-display-compressed-bold":{"font-family":"Whitman Display Compressed Bold, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-whitman-osf":{"font-family":"Whitman OSF, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-menlo":{"font-family":"Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"font-sets":{"benton-sans":{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"benton-sans-condensed":{"font-family":"Benton Sans Condensed Medium, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},popular:{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"popular-light":{"font-family":"Popular Light, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"popular-medium":{"font-family":"Popular Medium, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"poynter-serif":{"font-family":"Poynter Serif RE, Georgia, Times, serif","line-height":1.4,"letter-spacing":-.2,"font-weight":"normal"},"whitman-display-condensed-bold":{"font-family":"Whitman Display Condensed Bold, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"whitman-display-compressed-bold":{"font-family":"Whitman Display Compressed Bold, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"whitman-display":{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},"whitman-osf":{"font-family":"Whitman OSF, Georgia, Times, serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},menlo:{"font-family":"Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"}},contexts:{news:{default:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},text:{"font-family":"Poynter Serif RE, Georgia, Times, serif","line-height":1.4,"letter-spacing":-.2,"font-weight":"normal"},heading:{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},lead:{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},"heading-depth":{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},label:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"bold"},title:{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"bold","text-transform":"uppercase"},mono:{"font-family":"Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"}},feature:{default:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},text:{"font-family":"Benton Sans Condensed Medium, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},heading:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},lead:{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},"heading-depth":{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},label:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},title:{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal","text-transform":"uppercase"},mono:{"font-family":"Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"}},default:{default:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},text:{"font-family":"Poynter Serif RE, Georgia, Times, serif","line-height":1.4,"letter-spacing":-.2,"font-weight":"normal"},heading:{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},lead:{"font-family":"Whitman Display, Georgia, Times, serif","line-height":1.25,"letter-spacing":"normal","font-weight":400},"heading-depth":{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"},label:{"font-family":"Benton Sans, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"bold"},title:{"font-family":"Popular, Helvetica, Arial, sans-serif","line-height":1.4,"letter-spacing":"normal","font-weight":"bold","text-transform":"uppercase"},mono:{"font-family":"Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace","line-height":1.4,"letter-spacing":"normal","font-weight":"normal"}}},"context-default":"news","font-size-unit":1,"font-size-component-unit":1,"font-size-micro":.65,"font-size-small":.85,"font-size-existing":.76471,"font-size-small-adjust":.9,"font-size-large":1.25,"font-size-xlarge":2.15,"font-size-xxlarge":5.55,"color-black":{r:10,g:2,b:3,a:1,hex:"#0a0203"},"color-white":{r:255,g:255,b:255,a:1,hex:"#ffffff"},grays:{dark:{r:68,g:68,b:68,a:1,hex:"#444444"},medium:{r:103,g:103,b:103,a:1,hex:"#676767"},"medium-light":{r:149,g:149,b:149,a:1,hex:"#959595"},light:{r:189,g:189,b:189,a:1,hex:"#bdbdbd"},lighter:{r:232,g:232,b:232,a:1,hex:"#e8e8e8"},lightest:{r:245,g:245,b:245,a:1,hex:"#f5f5f5"}},theme:{"green-primary-emerald":{r:0,g:130,b:74,a:1,hex:"#00824a"},"green-primary-spring":{r:97,g:191,b:26,a:1,hex:"#61bf1a"},"green-secondary-forest":{r:0,g:99,b:65,a:1,hex:"#006341"},"green-secondary-light":{r:141,g:198,b:63,a:1,hex:"#8dc63f"},"blue-dark":{r:29,g:120,b:175,a:1,hex:"#1d78af"},"blue-light":{r:122,g:189,b:255,a:1,hex:"#7abdff"},"yellow-light":{r:255,g:252,b:25,a:1,hex:"#fffc19"},"yellow-dark":{r:204,g:201,b:0,a:1,hex:"#ccc900"},"orange-light":{r:255,g:163,b:26,a:1,hex:"#ffa31a"},"orange-dark":{r:157,g:93,b:0,a:1,hex:"#9d5d00"},"red-light":{r:255,g:48,b:26,a:1,hex:"#ff301a"},"red-dark":{r:158,g:0,b:63,a:1,hex:"#9e003f"}},"color-text":{r:10,g:2,b:3,a:1,hex:"#0a0203"},"color-text-sub":{r:103,g:103,b:103,a:1,hex:"#676767"},"color-text-bg":{r:255,g:255,b:255,a:1,hex:"#ffffff"},"color-link":{r:29,g:120,b:175,a:1,hex:"#1d78af"},"color-secondary-link":{r:97,g:191,b:26,a:1,hex:"#61bf1a"},"color-text-mute":{r:103,g:103,b:103,a:1,hex:"#676767"},"colors-data":{reds:[{r:242,g:172,b:147,a:1,hex:"#f2ac93"},{r:242,g:134,b:112,a:1,hex:"#f28670"},{r:242,g:97,b:76,a:1,hex:"#f2614c"},{r:194,g:42,b:34,a:1,hex:"#c22a22"},{r:156,g:0,b:4,a:1,hex:"#9c0004"}],oranges:[{r:242,g:210,b:164,a:1,hex:"#f2d2a4"},{r:242,g:175,b:128,a:1,hex:"#f2af80"},{r:224,g:114,b:66,a:1,hex:"#e07242"},{r:194,g:66,b:31,a:1,hex:"#c2421f"},{r:130,g:32,b:16,a:1,hex:"#822010"}],blues:[{r:209,g:230,b:225,a:1,hex:"#d1e6e1"},{r:167,g:230,b:227,a:1,hex:"#a7e6e3"},{r:103,g:180,b:194,a:1,hex:"#67b4c2"},{r:53,g:128,b:163,a:1,hex:"#3580a3"},{r:13,g:70,b:115,a:1,hex:"#0d4673"}],greens:[{r:199,g:229,b:181,a:1,hex:"#c7e5b5"},{r:158,g:227,b:132,a:1,hex:"#9ee384"},{r:91,g:191,b:72,a:1,hex:"#5bbf48"},{r:41,g:158,b:61,a:1,hex:"#299e3d"},{r:17,g:130,b:65,a:1,hex:"#118241"}],grays:[{r:247,g:247,b:247,a:1,hex:"#f7f7f7"},{r:204,g:204,b:204,a:1,hex:"#cccccc"},{r:150,g:150,b:150,a:1,hex:"#969696"},{r:99,g:99,b:99,a:1,hex:"#636363"},{r:37,g:37,b:37,a:1,hex:"#252525"}],"light-blue":[{r:218,g:225,b:231,a:1,hex:"#dae1e7"},{r:198,g:209,b:217,a:1,hex:"#c6d1d9"},{r:168,g:185,b:197,a:1,hex:"#a8b9c5"},{r:127,g:152,b:170,a:1,hex:"#7f98aa"},{r:85,g:110,b:127,a:1,hex:"#556e7f"},{r:44,g:57,b:66,a:1,hex:"#2c3942"}],categories:[{r:102,g:175,b:80,a:1,hex:"#66af50"},{r:191,g:96,b:60,a:1,hex:"#bf603c"},{r:89,g:168,b:151,a:1,hex:"#59a897"},{r:76,g:76,b:57,a:1,hex:"#4c4c39"}],"political-parties":[{r:156,g:0,b:4,a:1,hex:"#9c0004"},{r:242,g:97,b:76,a:1,hex:"#f2614c"},{r:247,g:247,b:247,a:1,hex:"#f7f7f7"},{r:103,g:180,b:194,a:1,hex:"#67b4c2"},{r:13,g:70,b:115,a:1,hex:"#0d4673"}],divergent:[{r:39,g:29,b:66,a:1,hex:"#271d42"},{r:133,g:122,b:170,a:1,hex:"#857aaa"},{r:247,g:247,b:247,a:1,hex:"#f7f7f7"},{r:91,g:191,b:72,a:1,hex:"#5bbf48"},{r:17,g:130,b:65,a:1,hex:"#118241"}]},"colors-political":{r:{r:156,g:0,b:4,a:1,hex:"#9c0004"},gop:{r:156,g:0,b:4,a:1,hex:"#9c0004"},d:{r:13,g:70,b:115,a:1,hex:"#0d4673"},dfl:{r:13,g:70,b:115,a:1,hex:"#0d4673"}},"colors-social":{facebook:{r:59,g:89,b:152,a:1,hex:"#3b5998"},twitter:{r:85,g:172,b:238,a:1,hex:"#55acee"},google:{r:221,g:75,b:57,a:1,hex:"#dd4b39"},pinterest:{r:203,g:32,b:39,a:1,hex:"#cb2027"},instagram:{r:233,g:89,b:80,a:1,hex:"#e95950"},tumblr:{r:50,g:80,b:109,a:1,hex:"#32506d"},flickr:{r:255,g:0,b:132,a:1,hex:"#ff0084"},youtube:{r:255,g:0,b:0,a:1,hex:"#ff0000"},whatsapp:{r:77,g:194,b:71,a:1,hex:"#4dc247"},vimeo:{r:170,g:212,b:80,a:1,hex:"#aad450"},reddit:{r:255,g:69,b:0,a:1,hex:"#ff4500"},linkedin:{r:0,g:123,b:181,a:1,hex:"#007bb5"}},breakpoints:{default:0,xs:420,sm:576,md:768,lg:992,xl:1200},"breakpoints-font-size":{default:16,xs:16,sm:16,md:16,lg:17,xl:18},"grid-padding":.5},Tn="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg",Gn={light:"mapbox://styles/shadowflare/cjfljh7oh6v6k2smuvb3jftac"},Bn={twinCities:[-93.191872,44.960911],minneapolis:[-93.265,44.9778],stPaul:[-93.09,44.9537],duluth:[-92.1005,46.7867],minnesota:[-94.6859,46.7296]};function Fn(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!mapboxgl||!window.mapboxgl)throw new Error('Please provide an element to attach the map to, this should be the "id" attribute of the element.');if(!e)throw new Error("Please provide an element to attach the map to.");var n=zn(t,{container:e,style:Gn.light,center:Bn.twinCities,zoom:9,attributionControl:!1,navigationControl:!0,scrollZoom:!1});mapboxgl.accessToken=Tn;var r=new mapboxgl.Map(n);if(n.navigationControl){var o=new mapboxgl.NavigationControl;r.__nav=o,r.addControl(o,"top-left")}return r}function $n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!L||!window.L||!L.mapbox)throw new Error('Could not find "L" Leaflet object or the "L.mapbox" object, make sure you have loaded the library.  See https://www.mapbox.com/mapbox.js/');if(!e)throw new Error('Please provide an element to attach the map to, this should be the "id" attribute of the element.');L.mapbox.accessToken=Tn;var n=zn(t,{style:Gn.light,center:Bn.twinCities,zoom:10,attributionControl:!1,navigationControl:!0,scrollWheelZoom:!1}),r=L.mapbox.map(e,void 0,n);return n.style&&(r.__styleLayer=L.mapbox.styleLayer(n.style).addTo(r)),r}var Hn=function(){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0;o(this,r),this.el=e,this.mapOptions=zn({style:Gn.light,center:Bn.twinCities,zoom:9,attributionControl:!1,navigationControl:!0,scrollZoom:!1},t),this.checkPlatform(n),this.createMap()}return e(r,[{key:"checkPlatform",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;if(!mapboxgl||!window.mapboxgl)throw new Error('Please provide an element to attach the map to, this should be the "id" attribute of the element.');if(!L||!window.L||!L.mapbox)throw new Error('Could not find "L" Leaflet object or the "L.mapbox" object, make sure you have loaded the library.  See https://www.mapbox.com/mapbox.js/');if(!this.el)throw new Error('Please provide an element to attach the map to, this should be the "id" attribute of the element.');this.gl=void 0===e?mapboxgl.supported():!!e}},{key:"createMap",value:function(){this.gl?this.map=Fn(this.el,this.mapOptionsGL(this.mapOptions)):this.map=$n(this.el,this.mapOptionsNoGL(this.mapOptions))}},{key:"mapOptionsGL",value:function(){return on(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{})}},{key:"mapOptionsNoGL",value:function(){var e=on(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{});return e.center=e.center&&e.center.length?e.center.reverse():Bn.twinCities.reverse(),e.zoom=e.zoom?e.zoom+1:10,e.scrollWheelZoom=e.scrollZoom,e}},{key:"goTo",value:function(e,t){this.gl?this.map.easeTo({center:e,zoom:t}):this.map.setView(e.reverse(),t+1)}},{key:"zoomTo",value:function(e){this.gl?this.map.easeTo({zoom:e}):this.map.setZoom(e+1)}},{key:"centerOn",value:function(e){this.gl?this.map.easeTo({center:e}):this.map.setView(e.reverse())}},{key:"fitBounds",value:function(e){this.gl?this.map.fitBounds(e):this.map.fitBounds(e.map(function(e){return e.reverse()}))}},{key:"addGeoJSON",value:function(e,t,n){return this.gl?this.addGeoJSONGL(e,t,n):this.addGeoJSONNoGL(e,t,n)}},{key:"addGeoJSONGL",value:function(r,o,a){var i=this;a=zn(a,{"fill-color":Mn["colors-data"].categories[0].hex,"fill-opacity":.8,"fill-outline-color":"#FFFFFF"}),this.map.on("load",function(){for(var e,t=i.map.getStyle().layers,n=0;n<t.length;n++)if("symbol"===t[n].type){e=t[n].id;break}i.dataSource={},i.dataSource[r]=i.map.addSource(r,{type:"geojson",data:o}),i.jsonLayers={},i.jsonLayers[r]=i.map.addLayer({id:"".concat(r,"-json"),type:"fill",source:r,paint:a},e)})}},{key:"addGeoJSONNoGL",value:function(e,t,n){var r={};[["fillColor","fill-color"],["fillOpacity","fill-opacity"]].forEach(function(e){n[e[1]]&&(r[e[0]]=n[e[1]])}),n=zn(r,{fillColor:Mn["colors-data"].categories[0].hex,fillOpacity:.8,stroke:!0,color:"#FFFFFF",weight:1.5}),L.geoJSON(t,{style:n}).addTo(this.map)}}]),r}();return{dropdown:function(){return"TODO"},gallery:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return new n(e,t)},maps:{mapboxAccessToken:Tn,mapboxStyles:Gn,mapboxGLMap:Fn,mapboxNoGLMap:$n,MapboxCrossPlatformMap:Hn,mapboxAttribution:'Some map and design data\n&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>\n&copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>',places:Bn,bounds:{minnesota:[[-97.37,43.42],[-89.44,49.46]]}},styles:Mn,version:"0.10.1"}});
//# sourceMappingURL=strib-styles.all.js.map
