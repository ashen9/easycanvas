!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(89)},24:function(e,t,r){"use strict";function n(e){this.manager=void 0!==e?e:o.DefaultLoadingManager}Object.defineProperty(t,"__esModule",{value:!0}),t.FileLoader=void 0;var a=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(62),o=r(64),s={};a(n.prototype,{load:function(e,t,r,n){void 0===e&&(e=""),void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);var a=this,o=i.Cache.get(e);if(void 0!==o)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;if(void 0!==s[e])return void s[e].push({onLoad:t,onProgress:r,onError:n});var u=/^data:(.*?)(;base64)?,(.*)$/,f=e.match(u);if(f){var l=f[1],d=!!f[2],h=f[3];h=window.decodeURIComponent(h),d&&(h=window.atob(h));try{var c,A=(this.responseType||"").toLowerCase();switch(A){case"arraybuffer":case"blob":for(var p=new Uint8Array(h.length),g=0;h.length>g;g++)p[g]=h.charCodeAt(g);c="blob"===A?new Blob([p.buffer],{type:l}):p.buffer;break;case"document":var m=new DOMParser;c=m.parseFromString(h,l);break;case"json":c=JSON.parse(h);break;default:c=h}window.setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0)}catch(t){window.setTimeout(function(){n&&n(t),a.manager.itemEnd(e),a.manager.itemError(e)},0)}}else{s[e]=[],s[e].push({onLoad:t,onProgress:r,onError:n});var v=new XMLHttpRequest;v.open("GET",e,!0),v.addEventListener("load",function(t){var r=this.response;i.Cache.add(e,r);var n=s[e];if(delete s[e],200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");for(var o=0,u=n.length;u>o;o++){var f=n[o];f.onLoad&&f.onLoad(r)}a.manager.itemEnd(e)}else{for(var o=0,u=n.length;u>o;o++){var f=n[o];f.onError&&f.onError(t)}a.manager.itemEnd(e),a.manager.itemError(e)}},!1),v.addEventListener("progress",function(t){for(var r=s[e],n=0,a=r.length;a>n;n++){var i=r[n];i.onProgress&&i.onProgress(t)}},!1),v.addEventListener("error",function(t){var r=s[e];delete s[e];for(var n=0,i=r.length;i>n;n++){var o=r[n];o.onError&&o.onError(t)}a.manager.itemEnd(e),a.manager.itemError(e)},!1),void 0!==this.responseType&&(v.responseType=this.responseType),void 0!==this.withCredentials&&(v.withCredentials=this.withCredentials),v.overrideMimeType&&v.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(var y in this.requestHeader)v.setRequestHeader(y,this.requestHeader[y]);v.send(null)}return a.manager.itemStart(e),v},setPath:function(e){return this.path=e,this},setResponseType:function(e){return this.responseType=e,this},setWithCredentials:function(e){return this.withCredentials=e,this},setMimeType:function(e){return this.mimeType=e,this},setRequestHeader:function(e){return this.requestHeader=e,this}}),t.FileLoader=n},25:function(e,t){"use strict";function r(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=void 0!==n?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};n(r.prototype,{evaluate:function(e){var t=this.parameterPositions,r=this._cachedIndex,n=t[r],a=t[r-1];e:{t:{var i;r:{n:if(n<=e){for(var o=r+2;;){if(void 0===n){if(a>e)break n;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,a)}if(r===o)break;if(a=n,n=t[++r],n>e)break t}i=t.length;break r}{if(e>=a)break e;var s=t[1];s>e&&(r=2,a=s);for(var o=r-2;;){if(void 0===a)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(r===o)break;if(n=a,a=t[--r-1],e>=a)break t}i=r,r=0}}for(;i>r;){var u=r+i>>>1;t[u]>e?i=u:r=u+1}if(n=t[r],a=t[r-1],void 0===a)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(void 0===n)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,a,e)}this._cachedIndex=r,this.intervalChanged_(r,a,n)}return this.interpolate_(r,a,e,n)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(e){for(var t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,a=e*n,i=0;i!==n;++i)t[i]=r[a+i];return t},interpolate_:function(){throw Error("call to abstract method")},intervalChanged_:function(){}}),n(r.prototype,{beforeStart_:r.prototype.copySampleValue_,afterEnd_:r.prototype.copySampleValue_}),t.Interpolant=r},26:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={decodeText:function(e){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(e);for(var t="",r=0,n=e.length;n>r;r++)t+=String.fromCharCode(e[r]);return decodeURIComponent(escape(t))},extractUrlBase:function(e){var t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}};t.LoaderUtils=r},62:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};t.Cache=r},63:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(24),i=r(26),o=r(25),s={FileLoader:a.FileLoader,LoaderUtils:i.LoaderUtils,Interpolant:o.Interpolant};e.exports=function(){function e(){}function t(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=void 0===t||t}function r(){}function a(e){var t="Kaydara FBX Binary  \0";return e.byteLength>=t.length&&t===u(e,0,t.length)}function i(e){function t(t){var r=e[t-1];return e=e.slice(n+t),n++,r}for(var r=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"],n=0,a=0;r.length>a;++a){var i=t(1);if(i===r[a])return!1}return!0}function o(e){var t=/FBXVersion: (\d+)/,r=e.match(t);if(r){var n=parseInt(r[1]);return n}throw Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function u(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=e.byteLength),s.LoaderUtils.decodeText(new Uint8Array(e,t,r))}return s.FBXLoader=function(e){this.manager=void 0!==e?e:s.DefaultLoadingManager},n(s.FBXLoader.prototype,{load:function(e,t,r,n){var a=this,i=s.LoaderUtils.extractUrlBase(e),o=new s.FileLoader(this.manager);o.setResponseType("arraybuffer"),o.load(e,function(r){try{var o=a.parse(r,i);t(o)}catch(t){window.setTimeout(function(){n&&n(t),a.manager.itemError(e)},0)}},r,n)},parse:function(t,r){var n;if(a(t))n=(new e).parse(t);else{var s=u(t);if(!i(s))throw Error("THREE.FBXLoader: Unknown format.");if(o(s)<7e3)throw Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+o(s));n=(new TextParser).parse(s)}return n}}),n(e.prototype,{parse:function(e){var n=new t(e);n.skip(23);var a=n.getUint32();console.log("THREE.FBXLoader: FBX binary version: "+a);for(var i=new r;!this.endOfContent(n);){var o=this.parseNode(n,a);null!==o&&i.add(o.name,o)}return i},endOfContent:function(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()},parseNode:function(e,t){var r={},n=7500>t?e.getUint32():e.getUint64(),a=7500>t?e.getUint32():e.getUint64(),i=(7500>t?e.getUint32():e.getUint64(),e.getUint8()),o=e.getString(i);if(0===n)return null;for(var s=[],u=0;a>u;u++)s.push(this.parseProperty(e));var f=s.length>0?s[0]:"",l=s.length>1?s[1]:"",d=s.length>2?s[2]:"";for(r.singleProperty=1===a&&e.getOffset()===n;n>e.getOffset();){var h=this.parseNode(e,t);null!==h&&this.parseSubNode(o,r,h)}return r.propertyList=s,"number"==typeof f&&(r.id=f),""!==l&&(r.attrName=l),""!==d&&(r.attrType=d),""!==o&&(r.name=o),r},parseSubNode:function(e,t,r){if(r.singleProperty===!0){var n=r.propertyList[0];Array.isArray(n)?(t[r.name]=r,r.a=n):t[r.name]=n}else if("Connections"===e&&"C"===r.name){var a=[];r.propertyList.forEach(function(e,t){0!==t&&a.push(e)}),void 0===t.connections&&(t.connections=[]),t.connections.push(a)}else if("Properties70"===r.name){var i=Object.keys(r);i.forEach(function(e){t[e]=r[e]})}else if("Properties70"===e&&"P"===r.name){var o,s=r.propertyList[0],u=r.propertyList[1],f=r.propertyList[2],l=r.propertyList[3];0===s.indexOf("Lcl ")&&(s=s.replace("Lcl ","Lcl_")),0===u.indexOf("Lcl ")&&(u=u.replace("Lcl ","Lcl_")),o="Color"===u||"ColorRGB"===u||"Vector"===u||"Vector3D"===u||0===u.indexOf("Lcl_")?[r.propertyList[4],r.propertyList[5],r.propertyList[6]]:r.propertyList[4],t[s]={type:u,type2:f,flag:l,value:o}}else void 0===t[r.name]?"number"==typeof r.id?(t[r.name]={},t[r.name][r.id]=r):t[r.name]=r:"PoseNode"===r.name?(Array.isArray(t[r.name])||(t[r.name]=[t[r.name]]),t[r.name].push(r)):void 0===t[r.name][r.id]&&(t[r.name][r.id]=r)},parseProperty:function(e){var r=e.getString(1);switch(r){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":var n=e.getUint32();return e.getArrayBuffer(n);case"S":var n=e.getUint32();return e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":var a=e.getUint32(),i=e.getUint32(),o=e.getUint32();if(0===i)switch(r){case"b":case"c":return e.getBooleanArray(a);case"d":return e.getFloat64Array(a);case"f":return e.getFloat32Array(a);case"i":return e.getInt32Array(a);case"l":return e.getInt64Array(a)}void 0===window.Zlib&&console.error("THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js");var s=new Zlib.Inflate(new Uint8Array(e.getArrayBuffer(o))),u=new t(s.decompress().buffer);switch(r){case"b":case"c":return u.getBooleanArray(a);case"d":return u.getFloat64Array(a);case"f":return u.getFloat32Array(a);case"i":return u.getInt32Array(a);case"l":return u.getInt64Array(a)}default:throw Error("THREE.FBXLoader: Unknown property type "+r)}}}),n(t.prototype,{getOffset:function(){return this.offset},size:function(){return this.dv.buffer.byteLength},skip:function(e){this.offset+=e},getBoolean:function(){return 1===(1&this.getUint8())},getBooleanArray:function(e){for(var t=[],r=0;e>r;r++)t.push(this.getBoolean());return t},getUint8:function(){var e=this.dv.getUint8(this.offset);return this.offset+=1,e},getInt16:function(){var e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e},getInt32:function(){var e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e},getInt32Array:function(e){for(var t=[],r=0;e>r;r++)t.push(this.getInt32());return t},getUint32:function(){var e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e},getInt64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),2147483648&t?(t=4294967295&~t,e=4294967295&~e,4294967295===e&&(t=t+1&4294967295),e=e+1&4294967295,-(4294967296*t+e)):4294967296*t+e},getInt64Array:function(e){for(var t=[],r=0;e>r;r++)t.push(this.getInt64());return t},getUint64:function(){var e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),4294967296*t+e},getFloat32:function(){var e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e},getFloat32Array:function(e){for(var t=[],r=0;e>r;r++)t.push(this.getFloat32());return t},getFloat64:function(){var e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e},getFloat64Array:function(e){for(var t=[],r=0;e>r;r++)t.push(this.getFloat64());return t},getArrayBuffer:function(e){var t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t},getString:function(e){for(var t=new Uint8Array(e),r=0;e>r;r++)t[r]=this.getUint8();var n=t.indexOf(0);return 0>n||(t=t.slice(0,n)),s.LoaderUtils.decodeText(t)}}),n(r.prototype,{add:function(e,t){this[e]=t}}),s.FBXLoader}()},64:function(e,t){"use strict";function r(e,t,r){var n=this,a=!1,i=0,o=0,s=void 0;this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(e){o++,a===!1&&void 0!==n.onStart&&n.onStart(e,i,o),a=!0},this.itemEnd=function(e){i++,void 0!==n.onProgress&&n.onProgress(e,i,o),i===o&&(a=!1,void 0!==n.onLoad&&n.onLoad())},this.itemError=function(e){void 0!==n.onError&&n.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this}}Object.defineProperty(t,"__esModule",{value:!0});var n=new r;t.DefaultLoadingManager=n,t.LoadingManager=r},65:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;arguments.length>t;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(24),i=r(26),o=r(25),s={FileLoader:a.FileLoader,LoaderUtils:i.LoaderUtils,Interpolant:o.Interpolant};e.exports=function(){function e(e){this.manager=void 0!==e?e:s.DefaultLoadingManager,this.loader=new s.FileLoader(this.manager),this.parser=null,this.meshBuilder=new t(this.manager),this.animationBuilder=new i}function t(e){this.geometryBuilder=new r,this.materialBuilder=new a(e)}function r(){}function a(e){this.manager=e,this.tgaLoader=null}function i(){}function o(e,t,r,n,a){s.Interpolant.call(this,e,t,r,n),this.interpolationParams=a}e.prototype={constructor:e,crossOrigin:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},load:function(e,t,r,n){var a=(this._getParser(),this.meshBuilder.setCrossOrigin(this.crossOrigin)),i=s.LoaderUtils.extractUrlBase(e),o=this._extractExtension(e).toLowerCase();return"pmd"!==o&&"pmx"!==o?void(n&&n(Error("THREE.MMDLoader: Unknown model file extension ."+o+"."))):void this["pmd"===o?"loadPMD":"loadPMX"](e,function(e){t(a.build(e,i,r,n))},r,n)},loadAnimation:function(e,t,r,n,a){var i=this.animationBuilder;this.loadVMD(e,function(e){r(t.isCamera?i.buildCameraAnimation(e):i.build(e,t))},n,a)},loadWithAnimation:function(e,t,r,n,a){var i=this;this.load(e,function(e){i.loadAnimation(t,e,function(t){r({mesh:e,animation:t})},n,a)},n,a)},loadPMD:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer").load(e,function(e){t(a.parsePmd(e,!0))},r,n)},loadPMX:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer").load(e,function(e){t(a.parsePmx(e,!0))},r,n)},loadVMD:function(e,t,r,n){var a=Array.isArray(e)?e:[e],i=[],o=a.length,s=this._getParser();this.loader.setMimeType(void 0).setResponseType("arraybuffer");for(var u=0,f=a.length;f>u;u++)this.loader.load(a[u],function(e){i.push(s.parseVmd(e,!0)),i.length===o&&t(s.mergeVmds(i))},r,n)},loadVPD:function(e,t,r,n,a,i){i=i||{};var o=this._getParser();this.loader.setMimeType(t?void 0:"text/plain; charset=shift_jis").setResponseType("text").load(e,function(e){r(o.parseVpd(e,!0))},n,a)},_extractExtension:function(e){var t=e.lastIndexOf(".");return 0>t?"":e.slice(t+1)},_getParser:function(){if(null===this.parser){if("undefined"==typeof MMDParser)throw Error("THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser");this.parser=new MMDParser.Parser}return this.parser}};var u=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];return t.prototype={constructor:t,crossOrigin:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},build:function(e,t,r,n){var a=this.geometryBuilder.build(e),i=this.materialBuilder.setCrossOrigin(this.crossOrigin).setTexturePath(t).build(e,a,r,n),o=new s.SkinnedMesh(a,i);return o}},r.prototype={constructor:r,build:function(e){function t(t,r,n){for(var a=0;r.elementCount>a;a++){var i,o=r.elements[a];i="pmd"===e.metadata.format?e.morphs[0].elements[o.index].index:o.index,t.array[3*i+0]+=o.position[0]*n,t.array[3*i+1]+=o.position[1]*n,t.array[3*i+2]+=o.position[2]*n}}for(var r=[],n=[],a=[],i=[],o=[],u=[],f=[],l=[],d=[],h=[],c=[],A=[],p=[],g=[],m=0,v={},y=0;e.metadata.vertexCount>y;y++){for(var b=e.vertices[y],x=0,C=b.position.length;C>x;x++)r.push(b.position[x]);for(var x=0,C=b.normal.length;C>x;x++)a.push(b.normal[x]);for(var x=0,C=b.uv.length;C>x;x++)n.push(b.uv[x]);for(var x=0;4>x;x++)f.push(x>b.skinIndices.length-1?0:b.skinIndices[x]);for(var x=0;4>x;x++)l.push(x>b.skinWeights.length-1?0:b.skinWeights[x])}for(var y=0;e.metadata.faceCount>y;y++)for(var B=e.faces[y],x=0,C=B.indices.length;C>x;x++)i.push(B.indices[x]);for(var y=0;e.metadata.materialCount>y;y++){var E=e.materials[y];o.push({offset:3*m,count:3*E.faceCount}),m+=E.faceCount}for(var y=0;e.metadata.rigidBodyCount>y;y++){var w=e.rigidBodies[y],I=v[w.boneIndex];I=void 0===I?w.type:Math.max(w.type,I),v[w.boneIndex]=I}for(var y=0;e.metadata.boneCount>y;y++){var T=e.bones[y],L={parent:T.parentIndex,name:T.name,pos:T.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:void 0!==v[y]?v[y]:-1};L.parent!==-1&&(L.pos[0]-=e.bones[L.parent].position[0],L.pos[1]-=e.bones[L.parent].position[1],L.pos[2]-=e.bones[L.parent].position[2]),u.push(L)}if("pmd"===e.metadata.format)for(var y=0;e.metadata.ikCount>y;y++){for(var U=e.iks[y],R={target:U.target,effector:U.effector,iteration:U.iteration,maxAngle:4*U.maxAngle,links:[]},x=0,C=U.links.length;C>x;x++){var M={};M.index=U.links[x].index,M.enabled=!0,e.bones[M.index].name.indexOf("ひざ")<0||(M.limitation=new s.Vector3(1,0,0)),R.links.push(M)}c.push(R)}else for(var y=0;e.metadata.boneCount>y;y++){var U=e.bones[y].ik;if(void 0!==U){for(var R={target:y,effector:U.effector,iteration:U.iteration,maxAngle:U.maxAngle,links:[]},x=0,C=U.links.length;C>x;x++){var M={};if(M.index=U.links[x].index,M.enabled=!0,1===U.links[x].angleLimitation){var k=U.links[x].lowerLimitationAngle,O=U.links[x].upperLimitationAngle,P=-O[0],F=-O[1];O[0]=-k[0],O[1]=-k[1],k[0]=P,k[1]=F,M.rotationMin=(new s.Vector3).fromArray(k),M.rotationMax=(new s.Vector3).fromArray(O)}R.links.push(M)}c.push(R)}}if("pmx"===e.metadata.format){for(var y=0;e.metadata.boneCount>y;y++){var T=e.bones[y],S=T.grant;if(void 0!==S){var R={index:y,parentIndex:S.parentIndex,ratio:S.ratio,isLocal:S.isLocal,affectRotation:S.affectRotation,affectPosition:S.affectPosition,transformationClass:T.transformationClass};A.push(R)}}A.sort(function(e,t){return e.transformationClass-t.transformationClass})}for(var y=0;e.metadata.morphCount>y;y++){var Q=e.morphs[y],V={name:Q.name},_=new s.Float32BufferAttribute(3*e.metadata.vertexCount,3);_.name=Q.name;for(var x=0;3*e.metadata.vertexCount>x;x++)_.array[x]=r[x];if("pmd"===e.metadata.format)0!==y&&t(_,Q,1);else if(0===Q.type)for(var x=0;Q.elementCount>x;x++){var D=e.morphs[Q.elements[x].index],N=Q.elements[x].ratio;1===D.type&&t(_,D,N)}else 1===Q.type&&t(_,Q,1);d.push(V),h.push(_)}for(var y=0;e.metadata.rigidBodyCount>y;y++){var z=e.rigidBodies[y],V={};for(var j in z)V[j]=z[j];if("pmx"===e.metadata.format&&V.boneIndex!==-1){var L=e.bones[V.boneIndex];V.position[0]-=L.position[0],V.position[1]-=L.position[1],V.position[2]-=L.position[2]}p.push(V)}for(var y=0;e.metadata.constraintCount>y;y++){var Y=e.constraints[y],V={};for(var j in Y)V[j]=Y[j];var H=p[V.rigidBodyIndex1],X=p[V.rigidBodyIndex2];0!==H.type&&2===X.type&&H.boneIndex!==-1&&X.boneIndex!==-1&&e.bones[X.boneIndex].parentIndex===H.boneIndex&&(X.type=1),g.push(V)}var K=new s.BufferGeometry;K.addAttribute("position",new s.Float32BufferAttribute(r,3)),K.addAttribute("normal",new s.Float32BufferAttribute(a,3)),K.addAttribute("uv",new s.Float32BufferAttribute(n,2)),K.addAttribute("skinIndex",new s.Uint16BufferAttribute(f,4)),K.addAttribute("skinWeight",new s.Float32BufferAttribute(l,4)),K.setIndex(i);for(var y=0,J=o.length;J>y;y++)K.addGroup(o[y].offset,o[y].count,y);return K.bones=u,K.morphTargets=d,K.morphAttributes.position=h,K.userData.MMD={bones:u,iks:c,grants:A,rigidBodies:p,constraints:g,format:e.metadata.format},K.computeBoundingSphere(),K}},a.prototype={constructor:a,crossOrigin:void 0,texturePath:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},setTexturePath:function(e){return this.texturePath=e,this},build:function(e,t,r,n){var a=[],i={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(var o=0;e.metadata.materialCount>o;o++){var u=e.materials[o],f={userData:{}};if(void 0!==u.name&&(f.name=u.name),f.color=(new s.Color).fromArray(u.diffuse),f.opacity=u.diffuse[3],f.specular=(new s.Color).fromArray(u.specular),f.emissive=(new s.Color).fromArray(u.ambient),f.shininess=Math.max(u.shininess,1e-4),f.transparent=1!==f.opacity,f.skinning=t.bones.length>0,f.morphTargets=t.morphTargets.length>0,f.lights=!0,f.fog=!0,f.blending=s.CustomBlending,f.blendSrc=s.SrcAlphaFactor,f.blendDst=s.OneMinusSrcAlphaFactor,f.blendSrcAlpha=s.SrcAlphaFactor,f.blendDstAlpha=s.DstAlphaFactor,f.side="pmx"===e.metadata.format&&1===(1&u.flag)?s.DoubleSide:1===f.opacity?s.FrontSide:s.DoubleSide,"pmd"===e.metadata.format){if(u.fileName){var l=u.fileName,d=l.split("*");if(f.map=this._loadTexture(d[0],i),d.length>1){var h=d[1].slice(-4).toLowerCase();f.envMap=this._loadTexture(d[1],i,{sphericalReflectionMapping:!0}),f.combine=".sph"===h?s.MultiplyOperation:s.AddOperation}}var c=u.toonIndex===-1?"toon00.bmp":e.toonTextures[u.toonIndex].fileName;f.gradientMap=this._loadTexture(c,i,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(c)}),f.userData.outlineParameters={thickness:1===u.edgeFlag?.003:0,color:[0,0,0],alpha:1,visible:1===u.edgeFlag}}else{u.textureIndex!==-1&&(f.map=this._loadTexture(e.textures[u.textureIndex],i)),u.envTextureIndex===-1||1!==u.envFlag&&2!=u.envFlag||(f.envMap=this._loadTexture(e.textures[u.envTextureIndex],i,{sphericalReflectionMapping:!0}),f.combine=1===u.envFlag?s.MultiplyOperation:s.AddOperation);var c,A;u.toonIndex===-1||0!==u.toonFlag?(c="toon"+("0"+(u.toonIndex+1)).slice(-2)+".bmp",A=!0):(c=e.textures[u.toonIndex],A=!1),f.gradientMap=this._loadTexture(c,i,{isToonTexture:!0,isDefaultToonTexture:A}),f.userData.outlineParameters={thickness:u.edgeSize/300,color:u.edgeColor.slice(0,3),alpha:u.edgeColor[3],visible:0!==(16&u.flag)&&u.edgeSize>0}}void 0!==f.map&&(f.transparent||this._checkImageTransparency(f.map,t,o),f.emissive.multiplyScalar(.2)),a.push(new s.MeshToonMaterial(f))}if("pmx"===e.metadata.format)for(var p=function(e,t){for(var r=0,n=e.length;n>r;r++){var a=e[r];if(a.index!==-1){var i=t[a.index];i.opacity!==a.diffuse[3]&&(i.transparent=!0)}}},o=0,g=e.morphs.length;g>o;o++){var m=e.morphs[o],v=m.elements;if(0===m.type)for(var y=0,b=v.length;b>y;y++){var x=e.morphs[v[y].index];8===x.type&&p(x.elements,a)}else 8===m.type&&p(v,a)}return a},_getTGALoader:function(){if(null===this.tgaLoader){if(void 0===s.TGALoader)throw Error("THREE.MMDLoader: Import THREE.TGALoader");this.tgaLoader=new s.TGALoader(this.manager)}return this.tgaLoader},_isDefaultToonTexture:function(e){return 10===e.length&&/toon(10|0[0-9])\.bmp/.test(e)},_loadTexture:function(e,t,r,n,a){r=r||{};var i,o=this;if(r.isDefaultToonTexture===!0){var f;try{f=parseInt(e.match("toon([0-9]{2}).bmp$")[1])}catch(t){console.warn("THREE.MMDLoader: "+e+" seems like a not right default texture path. Using toon00.bmp instead."),f=0}i=u[f]}else i=this.texturePath+e;if(void 0!==t[i])return t[i];var l=s.Loader.Handlers.get(i);null===l&&(l=".tga"===e.slice(-4).toLowerCase()?this._getTGALoader():this.textureLoader);var d=l.load(i,function(e){r.isToonTexture===!0&&(e.image=o._getRotatedImage(e.image)),e.flipY=!1,e.wrapS=s.RepeatWrapping,e.wrapT=s.RepeatWrapping;for(var t=0;d.readyCallbacks.length>t;t++)d.readyCallbacks[t](d);delete d.readyCallbacks},n,a);return r.sphericalReflectionMapping===!0&&(d.mapping=s.SphericalReflectionMapping),d.readyCallbacks=[],t[i]=d,d},_getRotatedImage:function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,a=e.height;return t.width=n,t.height=a,r.clearRect(0,0,n,a),r.translate(n/2,a/2),r.rotate(.5*Math.PI),r.translate(-n/2,-a/2),r.drawImage(e,0,0),r.getImageData(0,0,n,a)},_checkImageTransparency:function(e,t,r){e.readyCallbacks.push(function(n){function a(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}function i(e,t,r){var n=e.width,a=e.height,i=e.data,s=253;if(i.length/(n*a)!==4)return!1;for(var u=0;r.length>u;u+=3){for(var f={x:0,y:0},l=0;3>l;l++){var d=r[3*u+l],h={x:t[2*d+0],y:t[2*d+1]};if(o(e,h)<s)return!0;f.x+=h.x,f.y+=h.y}if(f.x/=3,f.y/=3,o(e,f)<s)return!0}return!1}function o(e,t){var r=e.width,n=e.height,a=Math.round(t.x*r)%r,i=Math.round(t.y*n)%n;0>a&&(a+=r),0>i&&(i+=n);var o=i*r+a;return e.data[4*o+3]}var s=void 0!==n.image.data?n.image:a(n.image),u=t.groups[r];i(s,t.attributes.uv.array,t.index.array.slice(u.start,u.start+u.count))&&(e.transparent=!0)})}},i.prototype={constructor:i,build:function(e,t){for(var r=this.buildSkeletalAnimation(e,t).tracks,n=this.buildMorphAnimation(e,t).tracks,a=0,i=n.length;i>a;a++)r.push(n[a]);return new s.AnimationClip("",-1,r)},buildSkeletalAnimation:function(e,t){function r(e,t,r){e.push(t[r+0]/127),e.push(t[r+8]/127),e.push(t[r+4]/127),e.push(t[r+12]/127)}for(var n=[],a={},i=t.skeleton.bones,o={},u=0,f=i.length;f>u;u++)o[i[u].name]=!0;for(var u=0;e.metadata.motionCount>u;u++){var l=e.motions[u],d=l.boneName;void 0!==o[d]&&(a[d]=a[d]||[],a[d].push(l))}for(var h in a){var c=a[h];c.sort(function(e,t){return e.frameNum-t.frameNum});for(var A=[],p=[],g=[],m=[],v=[],y=t.skeleton.getBoneByName(h).position.toArray(),u=0,f=c.length;f>u;u++){var b=c[u].frameNum/30,x=c[u].position,C=c[u].rotation,B=c[u].interpolation;A.push(b);for(var E=0;3>E;E++)p.push(y[E]+x[E]);for(var E=0;4>E;E++)g.push(C[E]);for(var E=0;3>E;E++)r(m,B,E);r(v,B,3)}var w=".bones["+h+"]";n.push(this._createTrack(w+".position",s.VectorKeyframeTrack,A,p,m)),n.push(this._createTrack(w+".quaternion",s.QuaternionKeyframeTrack,A,g,v))}return new s.AnimationClip("",-1,n)},buildMorphAnimation:function(e,t){for(var r=[],n={},a=t.morphTargetDictionary,i=0;e.metadata.morphCount>i;i++){var o=e.morphs[i],u=o.morphName;void 0!==a[u]&&(n[u]=n[u]||[],n[u].push(o))}for(var f in n){var l=n[f];l.sort(function(e,t){return e.frameNum-t.frameNum});for(var d=[],h=[],i=0,c=l.length;c>i;i++)d.push(l[i].frameNum/30),h.push(l[i].weight);r.push(new s.NumberKeyframeTrack(".morphTargetInfluences["+a[f]+"]",d,h))}return new s.AnimationClip("",-1,r)},buildCameraAnimation:function(e){function t(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function r(e,t){e.push(t.x),e.push(t.y),e.push(t.z),e.push(t.w)}function n(e,t,r){e.push(t[4*r+0]/127),e.push(t[4*r+1]/127),e.push(t[4*r+2]/127),e.push(t[4*r+3]/127)}var a=[],i=void 0===e.cameras?[]:e.cameras.slice();i.sort(function(e,t){return e.frameNum-t.frameNum});for(var o=[],u=[],f=[],l=[],d=[],h=[],c=[],A=[],p=[],g=new s.Quaternion,m=new s.Euler,v=new s.Vector3,y=new s.Vector3,b=0,x=i.length;x>b;b++){var C=i[b],B=C.frameNum/30,E=C.position,w=C.rotation,I=C.distance,T=C.fov,L=C.interpolation;o.push(B),v.set(0,0,-I),y.set(E[0],E[1],E[2]),m.set(-w[0],-w[1],-w[2]),g.setFromEuler(m),v.add(y),v.applyQuaternion(g),t(u,y),r(f,g),t(l,v),d.push(T);for(var U=0;3>U;U++)n(h,L,U);n(c,L,3);for(var U=0;3>U;U++)n(A,L,4);n(p,L,5)}var a=[];return a.push(this._createTrack("target.position",s.VectorKeyframeTrack,o,u,h)),a.push(this._createTrack(".quaternion",s.QuaternionKeyframeTrack,o,f,c)),a.push(this._createTrack(".position",s.VectorKeyframeTrack,o,l,A)),a.push(this._createTrack(".fov",s.NumberKeyframeTrack,o,d,p)),new s.AnimationClip("",-1,a)},_createTrack:function(e,t,r,n,a){if(r.length>2){r=r.slice(),n=n.slice(),a=a.slice();for(var i=n.length/r.length,s=a.length/r.length,u=1,f=2,l=r.length;l>f;f++){for(var d=0;i>d;d++)if(n[u*i+d]!==n[(u-1)*i+d]||n[u*i+d]!==n[f*i+d]){u++;break}if(f>u){r[u]=r[f];for(var d=0;i>d;d++)n[u*i+d]=n[f*i+d];for(var d=0;s>d;d++)a[u*s+d]=a[f*s+d]}}r.length=u+1,n.length=(u+1)*i,a.length=(u+1)*s}var h=new t(e,r,n);return h.createInterpolant=function(e){return new o(this.times,this.values,this.getValueSize(),e,new Float32Array(a))},h}},o.prototype=n(Object.create(s.Interpolant.prototype),{constructor:o,interpolate_:function(e,t,r,n){var a=this.resultBuffer,i=this.sampleValues,o=this.valueSize,u=this.interpolationParams,f=e*o,l=f-o,d=.05>n-t?0:(r-t)/(n-t);if(4===o){var h=u[4*e+0],c=u[4*e+1],A=u[4*e+2],p=u[4*e+3],g=this._calculate(h,c,A,p,d);s.Quaternion.slerpFlat(a,0,i,l,i,f,g)}else if(3===o)for(var m=0;m!==o;++m){var h=u[12*e+4*m+0],c=u[12*e+4*m+1],A=u[12*e+4*m+2],p=u[12*e+4*m+3],g=this._calculate(h,c,A,p,d);a[m]=i[l+m]*(1-g)+i[f+m]*g}else{var h=u[4*e+0],c=u[4*e+1],A=u[4*e+2],p=u[4*e+3],g=this._calculate(h,c,A,p,d);a[0]=i[l]*(1-g)+i[f]*g}return a},_calculate:function(e,t,r,n,a){for(var i,o,s,u=.5,f=u,l=1-f,d=15,h=1e-5,c=Math,A=0;d>A;A++){i=3*l*l*f,o=3*l*f*f,s=f*f*f;var p=i*e+o*t+s-a;if(c.abs(p)<h)break;u/=2,f+=0>p?u:-u,l=1-f}return i*r+o*n+s}}),e}()},89:function(e,t,r){"use strict";function n(e){
return e&&e.__esModule?e:{default:e}}var a=r(65),i=n(a),o=r(63),s=n(o),u="undefined"!=typeof window,f={MMDLoader:i.default,FBXLoader:s.default};u&&window.Easycanvas?Easycanvas.threeLoaders=f:e.exports=f}})});