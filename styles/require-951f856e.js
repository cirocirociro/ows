/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.2.0 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/requirejs/LICENSE
 */
var requirejs,require,define;!function(global){function commentReplace(e,t,i,r){return r||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var i;for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}}function eachReverse(e,t){if(e){var i;for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){t&&eachProp(t,function(t,n){if(i||!hasProp(e,n))if(!r||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp)e[n]=t;else{e[n]||(e[n]={});mixin(e[n],t,i,r)}});return e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;each(e.split("."),function(e){t=t[e]});return t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);n.requireType=e;n.requireModules=r;i&&(n.originalError=i);return n}function newContext(e){function t(e){var t,i;for(t=0;t<e.length;t++){i=e[t];if("."===i){e.splice(t,1);t-=1}else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;if(t>0){e.splice(t-1,2);t-=2}}}}function i(e,i,r){var n,a,o,s,u,c,f,p,d,l,h,m,g=i&&i.split("/"),x=y.map,b=x&&x["*"];if(e){e=e.split("/");f=e.length-1;y.nodeIdCompat&&jsSuffixRegExp.test(e[f])&&(e[f]=e[f].replace(jsSuffixRegExp,""));if("."===e[0].charAt(0)&&g){m=g.slice(0,g.length-1);e=m.concat(e)}t(e);e=e.join("/")}if(r&&x&&(g||b)){o=e.split("/");e:for(s=o.length;s>0;s-=1){c=o.slice(0,s).join("/");if(g)for(u=g.length;u>0;u-=1){a=getOwn(x,g.slice(0,u).join("/"));if(a){a=getOwn(a,c);if(a){p=a;d=s;break e}}}if(!l&&b&&getOwn(b,c)){l=getOwn(b,c);h=s}}if(!p&&l){p=l;d=h}if(p){o.splice(0,d,p);e=o.join("/")}}n=getOwn(y.pkgs,e);return n?n:e}function r(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName){t.parentNode.removeChild(t);return!0}})}function n(e){var t=getOwn(y.paths,e);if(t&&isArray(t)&&t.length>1){t.shift();q.require.undef(e);q.makeRequire(null,{skipMap:!0})([e]);return!0}}function a(e){var t,i=e?e.indexOf("!"):-1;if(i>-1){t=e.substring(0,i);e=e.substring(i+1,e.length)}return[t,e]}function o(e,t,r,n){var o,s,u,c,f=null,p=t?t.name:null,d=e,l=!0,h="";if(!e){l=!1;e="_@r"+(A+=1)}c=a(e);f=c[0];e=c[1];if(f){f=i(f,p,n);s=getOwn(j,f)}if(e)if(f)h=s&&s.normalize?s.normalize(e,function(e){return i(e,p,n)}):e.indexOf("!")===-1?i(e,p,n):e;else{h=i(e,p,n);c=a(h);f=c[0];h=c[1];r=!0;o=q.nameToUrl(h)}u=!f||s||r?"":"_unnormalized"+(T+=1);return{prefix:f,name:h,parentMap:t,unnormalized:!!u,url:o,originalName:d,isDefine:l,id:(f?f+"!"+h:h)+u}}function s(e){var t=e.id,i=getOwn(S,t);i||(i=S[t]=new q.Module(e));return i}function u(e,t,i){var r=e.id,n=getOwn(S,r);if(!hasProp(j,r)||n&&!n.defineEmitComplete){n=s(e);n.error&&"error"===t?i(n.error):n.on(t,i)}else"defined"===t&&i(j[r])}function c(e,t){var i=e.requireModules,r=!1;if(t)t(e);else{each(i,function(t){var i=getOwn(S,t);if(i){i.error=e;if(i.events.error){r=!0;i.emit("error",e)}}});r||req.onError(e)}}function f(){if(globalDefQueue.length){each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(q.defQueueMap[t]=!0);O.push(e)});globalDefQueue=[]}}function p(e){delete S[e];delete k[e]}function d(e,t,i){var r=e.map.id;if(e.error)e.emit("error",e.error);else{t[r]=!0;each(e.depMaps,function(r,n){var a=r.id,o=getOwn(S,a);if(o&&!e.depMatched[n]&&!i[a])if(getOwn(t,a)){e.defineDep(n,j[a]);e.check()}else d(o,t,i)});i[r]=!0}}function l(){var e,t,i=1e3*y.waitSeconds,a=i&&q.startTime+i<(new Date).getTime(),o=[],s=[],u=!1,f=!0;if(!b){b=!0;eachProp(k,function(e){var i=e.map,c=i.id;if(e.enabled){i.isDefine||s.push(e);if(!e.error)if(!e.inited&&a)if(n(c)){t=!0;u=!0}else{o.push(c);r(c)}else if(!e.inited&&e.fetched&&i.isDefine){u=!0;if(!i.prefix)return f=!1}}});if(a&&o.length){e=makeError("timeout","Load timeout for modules: "+o,null,o);e.contextName=q.contextName;return c(e)}f&&each(s,function(e){d(e,{},{})});a&&!t||!u||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0;l()},50));b=!1}}function h(e){hasProp(j,e[0])||s(o(e[0],null,!0)).init(e[1],e[2])}function m(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;m(t,q.onScriptLoad,"load","onreadystatechange");m(t,q.onScriptError,"error");return{node:t,id:t&&t.getAttribute("data-requiremodule")}}function x(){var e;f();for(;O.length;){e=O.shift();if(null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}q.defQueueMap={}}var b,v,q,E,w,y={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},S={},k={},M={},O=[],j={},P={},R={},A=1,T=1;E={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?j[e.map.id]=e.exports:e.exports=j[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(y.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}};v=function(e){this.events=getOwn(M,e.id)||{};this.map=e;this.shim=getOwn(y.shim,e.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};v.prototype={init:function(e,t,i,r){r=r||{};if(!this.inited){this.factory=t;i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)}));this.depMaps=e&&e.slice(0);this.errback=i;this.inited=!0;this.ignore=r.ignore;r.enabled||this.enabled?this.enable():this.check()}},defineDep:function(e,t){if(!this.depMatched[e]){this.depMatched[e]=!0;this.depCount-=1;this.depExports[e]=t}},fetch:function(){if(!this.fetched){this.fetched=!0;q.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;if(!P[e]){P[e]=!0;q.load(this.map.id,e)}},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,r=this.depExports,n=this.exports,a=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=q.execCb(i,a,r,n)}catch(o){e=o}else n=q.execCb(i,a,r,n);if(this.map.isDefine&&void 0===n){t=this.module;t?n=t.exports:this.usingExports&&(n=this.exports)}if(e){e.requireMap=this.map;e.requireModules=this.map.isDefine?[this.map.id]:null;e.requireType=this.map.isDefine?"define":"require";return c(this.error=e)}}else n=a;this.exports=n;if(this.map.isDefine&&!this.ignore){j[i]=n;if(req.onResourceLoad){var s=[];each(this.depMaps,function(e){s.push(e.normalizedMap||e)});req.onResourceLoad(q,this.map,s)}}p(i);this.defined=!0}this.defining=!1;if(this.defined&&!this.defineEmitted){this.defineEmitted=!0;this.emit("defined",this.exports);this.defineEmitComplete=!0}}}else hasProp(q.defQueueMap,i)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,r=o(e.prefix);this.depMaps.push(r);u(r,"defined",bind(this,function(r){var n,a,f,d=getOwn(R,this.map.id),l=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){r.normalize&&(l=r.normalize(l,function(e){return i(e,h,!0)})||"");a=o(e.prefix+"!"+l,this.map.parentMap);u(a,"defined",bind(this,function(e){this.map.normalizedMap=a;this.init([],function(){return e},null,{enabled:!0,ignore:!0})}));f=getOwn(S,a.id);if(f){this.depMaps.push(a);this.events.error&&f.on("error",bind(this,function(e){this.emit("error",e)}));f.enable()}}else if(d){this.map.url=q.nameToUrl(d);this.load()}else{n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})});n.error=bind(this,function(e){this.inited=!0;this.error=e;e.requireModules=[t];eachProp(S,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&p(e.map.id)});c(e)});n.fromText=bind(this,function(i,r){var a=e.name,u=o(a),f=useInteractive;r&&(i=r);f&&(useInteractive=!1);s(u);hasProp(y.config,t)&&(y.config[a]=y.config[t]);try{req.exec(i)}catch(p){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+p,p,[t]))}f&&(useInteractive=!0);this.depMaps.push(u);q.completeLoad(a);m([a],n)});r.load(e.name,m,n,y)}}));q.enable(r,this);this.pluginMaps[r.id]=r},enable:function(){k[this.map.id]=this;this.enabled=!0;this.enabling=!0;each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){e=o(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[t]=e;n=getOwn(E,e.id);if(n){this.depExports[t]=n(this);return}this.depCount+=1;u(e,"defined",bind(this,function(e){if(!this.undefed){this.defineDep(t,e);this.check()}}));this.errback?u(e,"error",bind(this,this.errback)):this.events.error&&u(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id;r=S[i];hasProp(E,i)||!r||r.enabled||q.enable(e,this)}));eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(S,e.id);t&&!t.enabled&&q.enable(e,this)}));this.enabling=!1;this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]);i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)});"error"===e&&delete this.events[e]}};q={config:y,contextName:e,registry:S,defined:j,urlFetched:P,defQueue:O,defQueueMap:{},Module:v,makeModuleMap:o,nextTick:req.nextTick,onError:c,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");if("string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,i){return(i.indexOf("?")===-1?"?":"&")+t}}var i=y.shim,r={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){if(r[t]){y[t]||(y[t]={});mixin(y[t],e,!0,!0)}else y[t]=e});e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(R[e]=t)})});if(e.shim){eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e});!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e));i[t]=e});y.shim=i}e.packages&&each(e.packages,function(e){var t,i;e="string"==typeof e?{name:e}:e;i=e.name;t=e.location;t&&(y.paths[i]=e.location);y.pkgs[i]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")});eachProp(S,function(e,t){e.inited||e.map.unnormalized||(e.map=o(t,null,!0))});(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;e.init&&(t=e.init.apply(global,arguments));return t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function a(i,r,u){var f,p,d;n.enableBuildCallback&&r&&isFunction(r)&&(r.__requireJsBuild=!0);if("string"==typeof i){if(isFunction(r))return c(makeError("requireargs","Invalid require call"),u);if(t&&hasProp(E,i))return E[i](S[t.id]);if(req.get)return req.get(q,i,t,a);p=o(i,t,!1,!0);f=p.id;return hasProp(j,f)?j[f]:c(makeError("notloaded",'Module name "'+f+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))}x();q.nextTick(function(){x();d=s(o(null,t));d.skipMap=n.skipMap;d.init(i,r,u,{enabled:!0});l()});return a}n=n||{};mixin(a,{isBrowser:isBrowser,toUrl:function(e){var r,n=e.lastIndexOf("."),a=e.split("/")[0],o="."===a||".."===a;if(n!==-1&&(!o||n>1)){r=e.substring(n,e.length);e=e.substring(0,n)}return q.nameToUrl(i(e,t&&t.id,!0),r,!0)},defined:function(e){return hasProp(j,o(e,t,!1,!0).id)},specified:function(e){e=o(e,t,!1,!0).id;return hasProp(j,e)||hasProp(S,e)}});t||(a.undef=function(e){f();var i=o(e,t,!0),n=getOwn(S,e);n.undefed=!0;r(e);delete j[e];delete P[i.url];delete M[e];eachReverse(O,function(t,i){t[0]===e&&O.splice(i,1)});delete q.defQueueMap[e];if(n){n.events.defined&&(M[e]=n.events);p(e)}});return a},enable:function(e){var t=getOwn(S,e.id);t&&s(e).enable()},completeLoad:function(e){var t,i,r,a=getOwn(y.shim,e)||{},o=a.exports;f();for(;O.length;){i=O.shift();if(null===i[0]){i[0]=e;if(t)break;t=!0}else i[0]===e&&(t=!0);h(i)}q.defQueueMap={};r=getOwn(S,e);if(!t&&!hasProp(j,e)&&r&&!r.inited){if(!(!y.enforceDefine||o&&getGlobal(o)))return n(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,a.deps||[],a.exportsFn])}l()},nameToUrl:function(e,t,i){var r,n,a,o,s,u,c,f=getOwn(y.pkgs,e);f&&(e=f);c=getOwn(R,e);if(c)return q.nameToUrl(c,t,i);if(req.jsExtRegExp.test(e))s=e+(t||"");else{r=y.paths;n=e.split("/");for(a=n.length;a>0;a-=1){o=n.slice(0,a).join("/");u=getOwn(r,o);if(u){isArray(u)&&(u=u[0]);n.splice(0,a,u);break}}s=n.join("/");s+=t||(/^data\:|^blob\:|\?/.test(s)||i?"":".js");s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":y.baseUrl)+s}return y.urlArgs&&!/^blob\:/.test(s)?s+y.urlArgs(e,s):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);if(!n(t.id)){var i=[];eachProp(S,function(e,r){0!==r.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===t.id){i.push(r);return!0}})});return c(makeError("scripterror",'Script error for "'+t.id+(i.length?'", needed by: '+i.join(", "):'"'),e,[t.id]))}}};q.require=q.makeRequire();return q}function getInteractiveScript(){if(interactiveScript&&"interactive"===interactiveScript.readyState)return interactiveScript;eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e});return interactiveScript}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.2.0",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs;requirejs=void 0}if("undefined"!=typeof require&&!isFunction(require)){cfg=require;require=void 0}req=requirejs=function(e,t,i,r){var n,a,o=defContextName;if(!isArray(e)&&"string"!=typeof e){a=e;if(isArray(t)){e=t;t=i;i=r}else e=[]}a&&a.context&&(o=a.context);n=getOwn(contexts,o);n||(n=contexts[o]=req.s.newContext(o));a&&n.configure(a);return n.require(e,t,i)};req.config=function(e){return req(e)};req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()};require||(require=req);req.version=version;req.jsExtRegExp=/^\/|:|\?|\.js$/;req.isBrowser=isBrowser;s=req.s={contexts:contexts,newContext:newContext};req({});each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}});if(isBrowser){head=s.head=document.getElementsByTagName("head")[0];baseElement=document.getElementsByTagName("base")[0];baseElement&&(head=s.head=baseElement.parentNode)}req.onError=defaultOnError;req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");r.type=e.scriptType||"text/javascript";r.charset="utf-8";r.async=!0;return r};req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser){r=req.createNode(n,t,i);r.setAttribute("data-requirecontext",e.contextName);r.setAttribute("data-requiremodule",t);if(!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera){r.addEventListener("load",e.onScriptLoad,!1);r.addEventListener("error",e.onScriptError,!1)}else{useInteractive=!0;r.attachEvent("onreadystatechange",e.onScriptLoad)}r.src=i;n.onNodeCreated&&n.onNodeCreated(r,n,t,i);currentlyAddingScript=r;baseElement?head.insertBefore(r,baseElement):head.appendChild(r);currentlyAddingScript=null;return r}if(isWebWorker)try{setTimeout(function(){},0);importScripts(i);e.completeLoad(t)}catch(a){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,a,[t]))}};isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){head||(head=e.parentNode);dataMain=e.getAttribute("data-main");if(dataMain){mainScript=dataMain;if(!cfg.baseUrl&&mainScript.indexOf("!")===-1){src=mainScript.split("/");mainScript=src.pop();subPath=src.length?src.join("/")+"/":"./";cfg.baseUrl=subPath}mainScript=mainScript.replace(jsSuffixRegExp,"");req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain);cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript];return!0}});define=function(e,t,i){var r,n;if("string"!=typeof e){i=t;t=e;e=null}if(!isArray(t)){i=t;t=null}if(!t&&isFunction(i)){t=[];if(i.length){i.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,i){t.push(i)});t=(1===i.length?["require"]:["require","exports","module"]).concat(t)}}if(useInteractive){r=currentlyAddingScript||getInteractiveScript();if(r){e||(e=r.getAttribute("data-requiremodule"));n=contexts[r.getAttribute("data-requirecontext")]}}if(n){n.defQueue.push([e,t,i]);n.defQueueMap[e]=!0}else globalDefQueue.push([e,t,i])};define.amd={jQuery:!0};req.exec=function(text){return eval(text)};req(cfg)}}(this);