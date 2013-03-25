/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 1.3.13
*/
(function(f){void 0==f.fn.inputmask&&(f.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:f.noop,onincomplete:f.noop,oncleared:f.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:f.noop,onKeyDown:f.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:f.noop,numericInput:!1,radixPoint:"",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",
cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,
38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(f,B,t){var E=f.length;!B&&1<t&&(E+=f.length*(t-1));return E}},val:f.fn.val,escapeRegex:function(f){return f.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},f.fn.inputmask=function(u,B){function t(e,b){var c=a.aliases[e];return c?(c.alias&&t(c.alias),f.extend(!0,a,c),f.extend(!0,a,b),!0):!1}function E(){var e=!1,b=0,c=a.mask.toString();1==c.length&&!1==a.greedy&&(a.placeholder=
"");for(var c=f.map(c.split(""),function(c){var f=[];if(c==a.escapeChar)e=true;else if(c!=a.optionalmarker.start&&c!=a.optionalmarker.end||e){var j=a.definitions[c];if(j&&!e)for(c=0;c<j.cardinality;c++)f.push(C(b+c));else{f.push(c);e=false}b=b+f.length;return f}}),M=c.slice(),j=1;j<a.repeat&&a.greedy;j++)M=M.concat(c.slice());return M}function J(){var e=!1,b=!1,c=!1;return f.map(a.mask.toString().split(""),function(f){var j=[];if(f==a.escapeChar)b=!0;else if(f==a.optionalmarker.start&&!b)c=e=!0;else if(f==
a.optionalmarker.end&&!b)e=!1,c=!0;else{var g=a.definitions[f];if(g&&!b){for(var h=g.prevalidator,l=h?h.length:0,m=1;m<g.cardinality;m++){var k=l>=m?h[m-1]:[],d=k.validator,k=k.cardinality;j.push({fn:d?"string"==typeof d?RegExp(d):new function(){this.test=d}:/./,cardinality:k?k:1,optionality:e,newBlockMarker:!0==e?c:!1,offset:0,casing:g.casing,def:f});!0==e&&(c=!1)}j.push({fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):new function(){this.test=g.validator}:/./,cardinality:g.cardinality,
optionality:e,newBlockMarker:c,offset:0,casing:g.casing,def:f})}else j.push({fn:null,cardinality:0,optionality:e,newBlockMarker:c,offset:0,casing:null,def:f}),b=!1;c=!1;return j}})}function D(e,b,c,f){var j=!1;if(0<=e&&e<o(c)){for(var g=e%h.length,l=b?1:0,n="",m=h[g].cardinality;m>l;m--)n+=x(c,g-(m-1));b&&(n+=b);j=null!=h[g].fn?h[g].fn.test(n,c,e,f,a):!1}setTimeout(function(){a.onKeyValidation.call(this,j,a)},0);return j}function w(e){e=h[e%h.length];return void 0!=e?e.fn:!1}function C(e){return a.placeholder.charAt(e%
a.placeholder.length)}function o(e){return a.getMaskLength(g,a.greedy,a.repeat,e,a)}function y(e,a){var c=o(e);if(a>=c)return c;for(var f=a;++f<c&&!w(f););return f}function N(e,a){var c=a;if(0>=c)return 0;for(;0<--c&&!w(c););return c}function G(a,b,c){var f=h[b%h.length],j=c;if(void 0!=j)switch(f.casing){case "upper":j=c.toUpperCase();break;case "lower":j=c.toLowerCase()}a[b]=j}function x(a,b,c){c&&(b=R(a,b));return a[b]}function R(a,b,c){if(c)for(;0>b&&a.length<o(a);){c=g.length-1;for(b=g.length;void 0!==
g[c];)a.unshift(g[c--])}else for(;void 0==a[b]&&a.length<o(a);)for(c=0;void 0!==g[c];)a.push(g[c++]);return b}function z(a,b,c){a._valueSet(b.join(""));void 0!=c&&(K?setTimeout(function(){l(a,c)},100):l(a,c))}function S(a,b,c){for(var f=o(a);b<c&&b<f;b++)G(a,b,x(g.slice(),b))}function L(a,b){G(a,b,x(g,b%h.length))}function q(e,b,c,M){var j=f(e).data("inputmask").isRTL,l=O(e._valueGet(),j).split(""),q=o(b);if(j){var n=l.reverse();n.length=q;for(var m=0;m<q;m++){var k=(q-(m+1))%h.length;null==h[k].fn&&
n[m]!=x(g,k)?(n.splice(m,0,x(g,k)),n.length=q):n[m]=n[m]||x(g,k)}l=n.reverse()}S(b,0,b.length);b.length=g.length;for(var d=n=-1,v,u=l.length,k=0==u?q:-1,m=0;m<u;m++)for(var r=d+1;r<q;r++)if(w(r)){var t=l[m];!1!==(v=D(r,t,b,!c))?(!0!==v&&(r=void 0!=v.pos?v.pos:r,t=void 0!=v.c?v.c:t),G(b,r,t),n=d=r):(L(b,r),t==C(r)&&(k=d=r));break}else if(L(b,r),n==d&&(n=r),d=r,l[m]==x(b,r))break;if(!1==a.greedy)for(m=O(b.join(""),j).split("");b.length!=m.length;)j?b.shift():b.pop();c&&z(e,b);return j?a.numericInput?
""!=a.radixPoint&&-1!=f.inArray(a.radixPoint,b)&&!0!==M?f.inArray(a.radixPoint,b):y(b,q):y(b,k):y(b,n)}function U(a){return f.inputmask.escapeRegex.call(this,a)}function O(a,b){return b?a.replace(RegExp("^("+U(g.join(""))+")*"),""):a.replace(RegExp("("+U(g.join(""))+")*$"),"")}function T(a,b){q(a,b,!1);var c=b.slice(),g,j;if(f(a).data("inputmask").isRTL)for(j=0;j<=c.length-1;j++)if(g=j%h.length,h[g].optionality)if(!w(j)||!D(j,b[j],b,!0))c.splice(0,1);else break;else break;else for(j=c.length-1;0<=
j;j--)if(g=j%h.length,h[g].optionality)if(!w(j)||!D(j,b[j],b,!0))c.pop();else break;else break;z(a,c)}function V(a,b){var c=a[0];if(h&&(!0===b||!a.hasClass("hasDatepicker"))){var l=g.slice();q(c,l);return f.map(l,function(a,b){return w(b)&&D(b,a,l,!0)?a:null}).join("")}return c._valueGet()}function l(e,b,c){var g=e.jquery&&0<e.length?e[0]:e;if("number"==typeof b){if(f(e).is(":visible")){c="number"==typeof c?c:b;!1==a.insertMode&&b==c&&c++;if(g.setSelectionRange)c==b?(g.focus(),g.setSelectionRange(b,
c)):(g.select(),g.selectionStart=b,g.selectionEnd=W?b:c);else if(g.createTextRange){var j=g.createTextRange();j.collapse(!0);j.moveEnd("character",c);j.moveStart("character",b);j.select()}g.focus()}}else{if(!f(e).is(":visible"))return{begin:0,end:0};e=K?j:null;j=null;null==e&&(g.setSelectionRange?(b=g.selectionStart,c=g.selectionEnd):document.selection&&document.selection.createRange&&(j=document.selection.createRange(),b=0-j.duplicate().moveStart("character",-1E5),c=b+j.text.length),e={begin:b,end:c});
return e}}function P(a){for(var b=!0,a=a._valueGet(),c=a.length,f=0;f<c;f++)if(w(f)&&a.charAt(f)==C(f)){b=!1;break}return b}function Q(e){function b(a){a=f._data(a).events;f.each(a,function(a,d){f.each(d,function(a,d){if("inputmask"==d.namespace){var b=d.handler;d.handler=function(){return this.readOnly||this.disabled?!1:b.apply(this,arguments)}}})})}function c(a){var d;Object.getOwnPropertyDescriptor&&(d=Object.getOwnPropertyDescriptor(a,"value"));if(d&&d.get)a._valueGet||(a._valueGet=d.get,a._valueSet=
d.set,Object.defineProperty(a,"value",{get:function(){var a=f(this),d=f(this).data("inputmask");return d&&d.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);f(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=f(this),d=f(this).data("inputmask");
return d&&d.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);f(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=f.fn.val.inputmaskpatch)f.fn.val=function(){if(arguments.length==0){var a=f(this);if(a.data("inputmask")){if(a.data("inputmask").autoUnmask)return a.inputmask("unmaskedvalue");var d=
f.inputmask.val.apply(a);return d!=a.data("inputmask")._buffer.join("")?d:""}return f.inputmask.val.apply(a)}var b=arguments;return this.each(function(){var a=f(this),d=f.inputmask.val.apply(a,b);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return d})},f.extend(f.fn.val,{inputmaskpatch:!0})}function t(d,b){if(a.numericInput&&""!=a.radixPoint){var c=d._valueGet().indexOf(a.radixPoint);A=b.begin<=c||b.end<=c||-1==c}}function j(a,b,c){for(;!w(a)&&0<=a-1;)a--;for(var f=a;f<b&&f<o(d);f++)if(w(f)){L(d,
f);var e=y(d,f),i=x(d,e);if(i!=C(e))if(e<o(d)&&!1!==D(f,i,d,!0)&&h[f%h.length].def==h[e%h.length].def)G(d,f,x(d,e)),L(d,e);else{if(w(f))break}else if(void 0==c)break}else L(d,f);void 0!=c&&G(d,A?b:N(d,b),c);d=O(d.join(""),A).split("");0==d.length&&(d=g.slice());return a}function u(a,b,c,f){for(;a<=b&&a<o(d);a++)if(w(a)){var e=x(d,a);G(d,a,c);if(e!=C(a))if(c=y(d,a),c<o(d))if(!1!==D(c,e,d,!0)&&h[a%h.length].def==h[c%h.length].def)c=e;else if(w(c))break;else c=e;else break;else if(!0!==f)break}else L(d,
a);f=d.length;d=O(d.join(""),A).split("");0==d.length&&(d=g.slice());return b-(f-d.length)}function E(b){r=!1;var c=this,e=b.keyCode,h=l(c);t(c,h);if(e==a.keyCode.BACKSPACE||e==a.keyCode.DELETE||X&&127==e){var s=o(d);if(0==h.begin&&h.end==s)d=g.slice(),z(c,d),l(c,q(c,d,!1));else if(1<h.end-h.begin||1==h.end-h.begin&&a.insertMode)S(d,h.begin,h.end),z(c,d),l(A?q(c,d,!1):h.begin);else{var i=h.begin;e==a.keyCode.DELETE?(i<F&&(i=F),i<s&&(a.numericInput&&""!=a.radixPoint&&d[i]==a.radixPoint?(i=d.length-
1==i?i:y(d,i),i=j(i,s)):A?(i=u(F,i,C(i),!0),i=y(d,i)):i=j(i,s),z(c,d,i))):e==a.keyCode.BACKSPACE&&i>F&&(i-=1,a.numericInput&&""!=a.radixPoint&&d[i]==a.radixPoint?(i=u(F,d.length-1==i?i:i-1,C(i),!0),i++):A?(i=u(F,i,C(i),!0),i=d[i+1]==a.radixPoint?i+1:y(d,i)):i=j(i,s),z(c,d,i))}c._valueGet()==g.join("")&&f(c).trigger("cleared");b.preventDefault()}else e==a.keyCode.END||e==a.keyCode.PAGE_DOWN?setTimeout(function(){var e=q(c,d,!1,!0);!a.insertMode&&(e==o(d)&&!b.shiftKey)&&e--;l(c,b.shiftKey?h.begin:e,
e)},0):e==a.keyCode.HOME||e==a.keyCode.PAGE_UP?l(c,0,b.shiftKey?h.begin:0):e==a.keyCode.ESCAPE?(c._valueSet(B),l(c,0,q(c,d))):e==a.keyCode.INSERT?(a.insertMode=!a.insertMode,l(c,!a.insertMode&&h.begin==o(d)?h.begin-1:h.begin)):b.ctrlKey&&88==e?setTimeout(function(){l(c,q(c,d,!0))},0):a.insertMode||(e==a.keyCode.RIGHT?(s=h.begin==h.end?h.end+1:h.end,s=s<o(d)?s:h.end,l(c,b.shiftKey?h.begin:s,b.shiftKey?s+1:s)):e==a.keyCode.LEFT&&(s=h.begin-1,s=0<s?s:0,l(c,s,b.shiftKey?h.end:s)));a.onKeyDown.call(this,
b,d,a);I=-1!=f.inArray(e,a.ignorables)}function n(c){if(r)return!1;r=!0;var b=this,e=f(b),c=c||window.event,g=c.which||c.charCode||c.keyCode,h=String.fromCharCode(g);if(a.numericInput&&h==a.radixPoint){var i=b._valueGet().indexOf(a.radixPoint);l(b,y(d,-1!=i?i:o(d)))}if(c.ctrlKey||c.altKey||c.metaKey||I)return!0;if(g){e.trigger("input");var k=l(b),m=o(d),g=!0;S(d,k.begin,k.end);if(A){var i=N(d,k.end),p;if(!1!==(p=D(i==m||x(d,i)==a.radixPoint?N(d,i):i,h,d,!1))){!0!==p&&(i=void 0!=p.pos?p.pos:i,h=void 0!=
p.c?p.c:h);m=o(d);p=F;if(!0==a.insertMode){if(!0==a.greedy)for(var n=d.slice();x(n,p,!0)!=C(p)&&p<=i;)p=p==m?m+1:y(d,p);p<=i&&(a.greedy||d.length<m)?(d[F]!=C(F)&&d.length<m&&(n=R(d,-1,A),0!=k.end&&(i+=n),m=d.length),j(p,i,h)):g=!1}else G(d,i,h);g&&(z(b,d,a.numericInput?i+1:i),setTimeout(function(){P(b)&&e.trigger("complete")},0))}else K&&z(b,d,k.begin)}else if(i=y(d,k.begin-1),R(d,i,A),!1!==(p=D(i,h,d,!1))){!0!==p&&(i=void 0!=p.pos?p.pos:i,h=void 0!=p.c?p.c:h);if(!0==a.insertMode){k=o(d);for(n=d.slice();x(n,
k,!0)!=C(k)&&k>=i;)k=0==k?-1:N(d,k);k>=i?u(i,d.length,h):g=!1}else G(d,i,h);g&&(h=y(d,i),z(b,d,h),setTimeout(function(){P(b)&&e.trigger("complete")},0))}else K&&z(b,d,k.begin);c.preventDefault()}}function m(c){var b=f(this),e=c.keyCode;a.onKeyUp.call(this,c,d,a);e==a.keyCode.TAB&&(b.hasClass("focus.inputmask")&&0==this._valueGet().length&&a.showMaskOnFocus)&&(d=g.slice(),z(this,d),A||l(this,0),B=this._valueGet())}var k=f(e);if(k.is(":input")){var d=g.slice();a.greedy=a.greedy?a.greedy:0==a.repeat;
var v=k.prop("maxLength");o(d)>v&&-1<v&&(v<g.length&&(g.length=v),!1==a.greedy&&(a.repeat=Math.round(v/g.length)),k.prop("maxLength",2*o(d)));k.data("inputmask",{tests:h,_buffer:g,greedy:a.greedy,repeat:a.repeat,autoUnmask:a.autoUnmask,definitions:a.definitions,isRTL:!1});c(e);var B=e._valueGet(),r=!1,I=!1,H=-1,F=y(d,-1);N(d,o(d));var A=!1;if("rtl"==e.dir||a.numericInput)e.dir="ltr",k.css("text-align","right"),k.removeAttr("dir"),v=k.data("inputmask"),v.isRTL=!0,k.data("inputmask",v),A=!0;k.unbind(".inputmask");
k.removeClass("focus.inputmask");k.bind("mouseenter.inputmask",function(){if(!f(this).hasClass("focus.inputmask")&&a.showMaskOnHover){var c=this._valueGet().length;c<d.length&&(0==c&&(d=g.slice()),z(this,d))}}).bind("blur.inputmask",function(){var c=f(this),b=this._valueGet();c.removeClass("focus.inputmask");b!=B&&c.change();a.clearMaskOnLostFocus&&""!=b&&(b==g.join("")?this._valueSet(""):T(this,d));P(this)||(c.trigger("incomplete"),a.clearIncomplete&&(a.clearMaskOnLostFocus?this._valueSet(""):(d=
g.slice(),z(this,d))))}).bind("focus.inputmask",function(){var c=f(this),b=this._valueGet();if(a.showMaskOnFocus&&!c.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==b))b=b.length,b<d.length&&(0==b&&(d=g.slice()),l(this,q(this,d,!0)));c.addClass("focus.inputmask");B=this._valueGet()}).bind("mouseleave.inputmask",function(){var c=f(this);a.clearMaskOnLostFocus&&(c.hasClass("focus.inputmask")||(this._valueGet()==g.join("")||""==this._valueGet()?this._valueSet(""):T(this,d)))}).bind("click.inputmask",
function(){var a=this;setTimeout(function(){var c=l(a);if(c.begin==c.end){var b=c.begin;H=q(a,d,!1);t(a,c);A?l(a,b>H&&(!1!==D(b,d[b],d,!0)||!w(b))?b:H):l(a,b<H&&(!1!==D(b,d[b],d,!0)||!w(b))?b:H)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){l(a,0,H)},0)}).bind("keydown.inputmask",E).bind("keypress.inputmask",n).bind("keyup.inputmask",m).bind(Y+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this;setTimeout(function(){l(a,q(a,d,!0))},0)}).bind("setvalue.inputmask",
function(){B=this._valueGet();q(this,d,!0);this._valueGet()==g.join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);var H=q(e,d,!0),J;try{J=document.activeElement}catch(Q){}J===e?(k.addClass("focus.inputmask"),l(e,H)):a.clearMaskOnLostFocus&&(e._valueGet()==g.join("")?e._valueSet(""):T(e,d));b(e)}}var a=f.extend(!0,{},f.inputmask.defaults,B),Y=function(a){var b=document.createElement("input"),a="on"+
a,c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}("paste")?"paste":"input",X=null!=navigator.userAgent.match(/iphone/i),K=null!=navigator.userAgent.match(/android.*safari.*/i),W;if(K){var I=navigator.userAgent.match(/safari.*/i),I=parseInt(RegExp(/[0-9]+/).exec(I)),K=533>=I;W=534>=(533<I)}if("string"==typeof u)switch(u){case "mask":t(a.alias,B);var g=E(),h=J();return this.each(function(){Q(this)});case "unmaskedvalue":return h=this.data("inputmask").tests,g=this.data("inputmask")._buffer,
a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,V(this);case "remove":return this.each(function(){var e=f(this),b=this;setTimeout(function(){if(e.data("inputmask")){h=e.data("inputmask").tests;g=e.data("inputmask")._buffer;a.greedy=e.data("inputmask").greedy;a.repeat=e.data("inputmask").repeat;a.definitions=e.data("inputmask").definitions;b._valueSet(V(e,!0));e.removeData("inputmask");e.unbind(".inputmask");e.removeClass("focus.inputmask");
var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value"));c&&c.get?b._valueGet&&Object.defineProperty(b,"value",{get:b._valueGet,set:b._valueSet}):document.__lookupGetter__&&b.__lookupGetter__("value")&&b._valueGet&&(b.__defineGetter__("value",b._valueGet),b.__defineSetter__("value",b._valueSet));delete b._valueGet;delete b._valueSet}},0)});case "getemptymask":return this.data("inputmask")?this.data("inputmask")._buffer.join(""):"";case "hasMaskedValue":return this.data("inputmask")?
!this.data("inputmask").autoUnmask:!1;case "isComplete":return h=this.data("inputmask").tests,g=this.data("inputmask")._buffer,a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,P(this[0]);default:return t(u,B)||(a.mask=u),g=E(),h=J(),this.each(function(){Q(this)})}else{if("object"==typeof u)return a=f.extend(!0,{},f.inputmask.defaults,u),t(a.alias,u),g=E(),h=J(),this.each(function(){Q(this)});if(void 0==u)return this.each(function(){var e=
f(this).attr("data-inputmask");if(e&&""!=e)try{var e=e.replace(RegExp("'","g"),'"'),b=f.parseJSON("{"+e+"}");a=f.extend(!0,{},f.inputmask.defaults,b);t(a.alias,b);a.alias=void 0;f(this).inputmask(a)}catch(c){}})}return this})})(jQuery);
