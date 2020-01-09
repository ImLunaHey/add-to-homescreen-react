!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["add-to-homescreen-react"]=t():e["add-to-homescreen-react"]=t()}(window,(function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e){e.exports=JSON.parse('{"appId":"add-to-homescreen-react","debug":false,"logging":false,"modal":false,"mandatory":false,"autoStart":true,"skipFirstVisit":false,"minPageViews":0,"startDelay":1,"lifespan":15,"displayPace":1440,"mustShowCustomPrompt":false,"maxDisplayCount":0,"validLocation":[],"onInit":null,"onShow":null,"onAdd":null,"onInstall":null,"onCancel":null,"customCriteria":null,"customPromptContent":{},"showClasses":["animated","d-flex"],"showClass":"d-flex","hideClass":"d-none","customPromptElements":{"container":"ath-container","containerAddOns":"banner-bottom-center","banner":"ath-banner","bannerAddOns":"","logoCell":"ath-logo-cell","logoCellAddOns":"ath-banner-cell","logo":"ath-prompt-logo","logoAddOns":"","titleCell":"ath-title-cell","titleCellAddOns":"ath-banner-cell","title":"ath-banner-title","titleAddOns":"","cancelButtonCell":"ath-cancel-cell","cancelButtonCellAddOns":"ath-banner-cell","cancelButton":"btn-cancel","cancelButtonAddOns":"btn btn-link","installButtonCell":"ath-install-cell","installButtonCellAddOns":"ath-banner-cell","installButton":"btn-install","installButtonAddOns":"btn btn-success","guidance":"ath-guidance","guidanceAddOns":"","guidanceImageCell":"ath-guidance-image-cell","guidanceImageCellAddOns":"ath-banner-cell","guidanceCancelButton":"btn-cancel","guidanceCancelButtonAddOns":"btn btn-link"},"customPromptPlatformDependencies":{"native":{"showClasses":["fadeInUp","right-banner"]},"edge":{"showClasses":["edge-wrapper","animated","fadeIn","d-block","right-banner"]},"chromium":{"showClasses":["chromium-wrapper","animated","fadeIn","d-block","right-banner"]},"iphone":{"showClasses":["iphone-wrapper","animated","fadeIn","d-block"]},"ipad":{"showClasses":["ipad-wrapper","animated","fadeIn","d-block"]},"firefox":{"showClasses":["firefox-wrapper","animated","fadeIn","d-block"]},"samsung":{"showClasses":["samsung-wrapper","animated","fadeIn","d-block"]},"opera":{"showClasses":["opera-home-screen-wrapper","animated","fadeIn","d-block"]}}}')},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),s=n.n(a),o=n(1),i=n.n(o),r=(n(4),n(2));function l(e){const t={title:"Install application?",cancelMsg:"Not Now",installMsg:"Install",guidanceCancelMsg:"Close"},n={lastDisplayTime:0,returningVisitor:!1,displayCount:0,optedOut:!1,added:!1,pageViews:0};let a=function(){let t=Object.assign({},r,e);t.customPromptContent=Object.assign({},r.customPromptContent,e.customPromptContent),t.customPromptElements=Object.assign({},r.customPromptElements,e.customPromptElements),t.customPromptPlatformDependencies=Object.assign({},r.customPromptPlatformDependencies,e.customPromptPlatformDependencies);for(let n in r.customPromptPlatformDependencies)r.customPromptPlatformDependencies.hasOwnProperty(n)&&(t.customPromptPlatformDependencies[n]=Object.assign({},r.customPromptPlatformDependencies[n],e.customPromptPlatformDependencies[n]));return t}();h(`final configuration: ${JSON.stringify(a)}`);let s,l,c,d={},u={},m=[],p=!1,g=!1;function f(e){e||(h("no service worker"),u.isCompatible=!1),d.pageViews+=1,b(),a&&a.debug&&void 0===a.activateLogging&&(a.activateLogging=!0),a.isMandatory=a.isMandatory&&("standalone"in window.navigator||a.debug),a.isModal=a.isModal||a.isMandatory,a.isMandatory&&(a.startDelay=-.5),a.debug&&(u.isCompatible=!0),a.onInit&&a.onInit.call(this),a.startAutomatically&&l?(h("Add to home screen: autoStart displaying callout"),v()):g||v()}function h(e){a.activateLogging&&console.log(e)}function b(){window.localStorage.setItem(a.appId,JSON.stringify(d))}function C(e){return a.debug&&"string"==typeof a.debug?a.debug:u.isChromium&&void 0===e?"native":u.isFireFox?"firefox":u.isiPad?"ipad":u.isiPhone?"iphone":u.isOpera?"opera":u.isSamsung?"samsung":u.isEdge?"edge":u.isChromium?"chromium":""}function y(e){e.preventDefault(),h("capturing the native A2HS prompt"),l=e,w()}function w(){setTimeout(P,1e3*a.startDelay+500)}function v(){p?h("Add to home screen: not displaying callout because already shown on screen"):(p=!0,"interactive"===document.readyState||"complete"===document.readyState?w():document.onreadystatechange=function(){"complete"===document.readyState&&w()})}function P(){if(function(){if(void 0!==s)return s;if(s=!1,null!==a.customCriteria){if(!("function"==typeof a.customCriteria?a.customCriteria():!!a.customCriteria))return h("Add to home screen: not displaying callout because a custom criteria was not met."),!1}if(!("serviceWorker"in navigator))return h("Add to home screen: not displaying callout because service workers are not supported"),!1;if(!u.isCompatible)return h("Add to home screen: not displaying callout because device not supported"),!1;let e=Date.now(),t=d.lastDisplayTime;if(e-t<6e4*a.displayPace)return h("Add to home screen: not displaying callout because displayed recently"),!1;if(a.maxDisplayCount&&d.displayCount>=a.maxDisplayCount)return h("Add to home screen: not displaying callout because displayed too many times already"),!1;let n=!a.validLocation.length;for(let e=a.validLocation.length;e--;)if(a.validLocation[e].test(document.location.href)){n=!0;break}if(!n)return h("Add to home screen: not displaying callout because not a valid location"),!1;let o=!1;for(let e=m.length;e--;)if(document.location.href.indexOf(m[e])>-1){o=!0;break}if(o)return h("Add to home screen: not displaying callout because this is a guidance URL"),!1;if(d.pageViews<a.minPageViews)return h("Add to home screen: not displaying callout because not enough visits"),!1;if(d.optedOut)return h("Add to home screen: not displaying callout because user opted out"),!1;if(d.added)return h("Add to home screen: not displaying callout because already added to the home screen"),!1;if(u.isStandalone)return d.added||(d.added=!0,b(),a.onAdd&&a.onAdd.call(this)),h("Add to home screen: not displaying callout because in standalone mode"),!1;if(!d.returningVisitor&&(d.returningVisitor=!0,b(),a.skipFirstVisit))return h("Add to home screen: not displaying callout because skipping first visit"),!1;return s=!0,!0}()){if(l&&!a.mustShowCustomPrompt)h("show native prompt"),O();else{let e=C(),n=document.querySelector(`.${a.customPromptElements.container}`);if(h(`show generic prompt for platform ${e}`),n&&!d.optedOut){n.classList.remove(a.hideClass);let s=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[e]);s.showClasses?s.showClasses=s.showClasses.concat(a.showClasses):s.showClasses=a.showClasses;for(let e=0;e<s.showClasses.length;e++)n.classList.add(s.showClasses[e]);let o=n.querySelector(`.${a.customPromptElements.title}`),i=n.querySelector(`.${a.customPromptElements.logo}`),r=n.querySelector(`.${a.customPromptElements.cancelButton}`),l=n.querySelector(`.${a.customPromptElements.installButton}`);o&&s.title&&(o.innerText=s.title),i&&(s.src?(i.src=s.src,i.alt=s.title||"Install application"):i.remove()),l&&(l.addEventListener("click",E),l.classList.remove(a.hideClass),l.innerText=null!=s.installMsg?s.installMsg:s.action&&s.action.ok?s.action.ok:""),r&&(r.addEventListener("click",x),r.classList.remove(a.hideClass),r.innerText=null!=s.cancelMsg?s.cancelMsg:s.action&&s.action.cancel?s.action.cancel:"")}a.lifespan&&a.lifespan>0&&(c=setTimeout(S,1e3*a.lifespan))}a.onShow&&a.onShow.call(this),d.lastDisplayTime=Date.now(),d.displayCount++,b()}}function O(){return l.prompt().then((function(){return l.userChoice})).then((function(e){d.added="accepted"===e.outcome,d.added?(h("User accepted the A2HS prompt"),a.onAdd&&a.onAdd()):(a.onCancel&&a.onCancel(),d.optedOut=!0,h("User dismissed the A2HS prompt")),b(),l=null})).catch((function(e){if(h(e.message),e.message.indexOf("user gesture")>-1)a.mustShowCustomPrompt=!0,w();else{if(!(e.message.indexOf("The app is already installed")>-1))return h(e),e;h(e.message),d.added=!0,b()}}))}function x(e){return e.preventDefault(),a.onCancel&&a.onCancel(),A(),!1}function A(){let e=document.querySelector(`.${a.customPromptElements.container}`);if(e){let t=C(),n=a.customPromptPlatformDependencies[t];n.showClasses=n.showClasses.concat(a.showClasses),e.classList.remove(...n.showClasses)}}function E(){return a.onInstall&&a.onInstall(),!l||a.debug&&"native"!==C()?function(e){let n=C(e),s=document.querySelector(`.${a.customPromptElements.container}`);if(s)if(c&&clearTimeout(c),!e&&"native"===n&&l)A(),O();else{let e=Object.assign({},t,a.customPromptContent,a.customPromptPlatformDependencies[n]);if(e.targetUrl)location.replace(e.targetUrl);else{if(e.images&&e.images.length>0){let t=s.querySelector(`.${a.customPromptElements.banner}`),n=s.querySelector(`.${a.customPromptElements.guidance}`),o=s.querySelector(`.${a.customPromptElements.guidanceImageCell}`),i=s.querySelector(`.${a.customPromptElements.guidanceCancelButton}`);t.classList.add(a.hideClass),n.classList.add(a.showClass);for(let t=0;t<e.images.length;t++){let n=new Image;n.src=e.images[t].src,n.alt=e.images[t].alt,e.images[t].classes&&n.classList.add(...e.images[t].classes),n.classList.add(a.showClass),o.appendChild(n)}i&&(i.addEventListener("click",x),i.classList.remove(a.hideClass),i.innerText=null!=e.guidanceCancelMsg?e.guidanceCancelMsg:e.action&&e.action.guidanceCancel?e.action.guidanceCancel:"")}(function(e){let t=e.getBoundingClientRect();return 0!==t.width&&0!==t.height})(s)||(s.classList.add(...e.showClasses),s.classList.remove(a.hideClass));let t=a.lifespan>=10?a.lifespan:10;c=setTimeout(S,1e3*t)}}}(!0):(A(),O()),!1}function S(){let e=document.querySelector(`.${a.customPromptElements.container}`);A(),e&&e.classList.add(a.hideClass)}return Object(o.useEffect)((function(){"onbeforeinstallprompt"in window&&(window.addEventListener("beforeinstallprompt",y),g=!0);"onappinstalled"in window&&window.addEventListener("appinstalled",(function(e){h("a2hs installed"),d.added=!0,b(),a.onInstall&&a.onInstall.call(this)}));!function(){let e=window.navigator.userAgent;u.isIDevice=/iphone|ipod|ipad/i.test(e),u.isSamsung=/Samsung/i.test(e),u.isFireFox=/Firefox/i.test(e),u.isOpera=/opr/i.test(e),u.isEdge=/edg/i.test(e),u.isFireFox&&(u.isFireFox=/android/i.test(e));u.isOpera&&(u.isOpera=/android/i.test(e));u.isChromium="onbeforeinstallprompt"in window,u.isInWebAppiOS=!0===window.navigator.standalone,u.isInWebAppChrome=window.matchMedia("(display-mode: standalone)").matches,u.isMobileSafari=u.isIDevice&&e.indexOf("Safari")>-1&&e.indexOf("CriOS")<0,u.isStandalone=u.isInWebAppiOS||u.isInWebAppChrome,u.isiPad=u.isMobileSafari&&e.indexOf("iPad")>-1,u.isiPhone=u.isMobileSafari&&-1===e.indexOf("iPad"),u.isCompatible=u.isChromium||u.isMobileSafari||u.isSamsung||u.isFireFox||u.isOpera}();let e=window.localStorage.getItem(a.appId);if(d=e?JSON.parse(e):n,d&&d.added)return;if("serviceWorker"in navigator){document.querySelector("[rel='manifest']")||(h("no manifest file"),u.isCompatible=!1),navigator.serviceWorker.getRegistration().then(f),function(e){for(let t in e)if(e.hasOwnProperty(t)){let n=e[t].targetUrl;n&&m.push(n)}}(a.customPromptPlatformDependencies)}else f({})}),[]),i.a.createElement("div",{className:`${a.customPromptElements.container} ${a.customPromptElements.containerAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.banner} ${a.customPromptElements.bannerAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.logoCell} ${a.customPromptElements.logoCellAddOns}`},i.a.createElement("img",{alt:"Application Logo",className:`${a.customPromptElements.logo} ${a.customPromptElements.logoAddOns}`})),i.a.createElement("div",{className:`${a.customPromptElements.titleCell} ${a.customPromptElements.titleCellAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.title} ${a.customPromptElements.titleAddOns}`})),i.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.cancelButton} ${a.customPromptElements.cancelButtonAddOns}`},"Not Now")),i.a.createElement("div",{className:`${a.customPromptElements.installButtonCell} ${a.customPromptElements.installButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.installButton} ${a.customPromptElements.installButtonAddOns}`},"Install"))),i.a.createElement("div",{className:`${a.customPromptElements.guidance} ${a.customPromptElements.guidanceAddOns}`},i.a.createElement("div",{className:`${a.customPromptElements.guidanceImageCell} ${a.customPromptElements.guidanceImageCellAddOns}`}),i.a.createElement("div",{className:`${a.customPromptElements.cancelButtonCell} ${a.customPromptElements.cancelButtonCellAddOns}`},i.a.createElement("button",{className:`${a.customPromptElements.guidanceCancelButton} ${a.customPromptElements.guidanceCancelButtonAddOns}`},"Close"))))}l.propTypes={appId:s.a.string,debug:s.a.string,activateLogging:s.a.bool,isModal:s.a.bool,isMandatory:s.a.bool,startAutomatically:s.a.bool,skipFirstVisit:s.a.bool,minPageViews:s.a.number,startDelay:s.a.number,lifespan:s.a.number,displayPace:s.a.number,mustShowCustomPrompt:s.a.bool,maxDisplayCount:s.a.number,validLocation:s.a.arrayOf(s.a.string),onInit:s.a.func,onShow:s.a.func,onAdd:s.a.func,onInstall:s.a.func,onCancel:s.a.func,showClasses:s.a.arrayOf(s.a.string),showClass:s.a.string,hideClass:s.a.string,customCriteria:s.a.func,customPromptContent:s.a.shape({title:s.a.string,src:s.a.string,cancelMsg:s.a.string,installMsg:s.a.string,guidanceCancelMsg:s.a.string}),customPromptElements:s.a.shape({container:s.a.string,containerAddOns:s.a.string,banner:s.a.string,bannerAddOns:s.a.string,logoCell:s.a.string,logoCellAddOns:s.a.string,logo:s.a.string,logoAddOns:s.a.string,titleCell:s.a.string,titleCellAddOns:s.a.string,title:s.a.string,titleAddOns:s.a.string,cancelButtonCell:s.a.string,cancelButtonCellAddOns:s.a.string,cancelButton:s.a.string,cancelButtonAddOns:s.a.string,installButtonCell:s.a.string,installButtonCellAddOns:s.a.string,installButton:s.a.string,installButtonAddOns:s.a.string,guidance:s.a.string,guidanceAddOns:s.a.string,guidanceImageCell:s.a.string,guidanceImageCellAddOns:s.a.string,guidanceCancelButton:s.a.string,guidanceCancelButtonAddOns:s.a.string}),customPromptPlatformDependencies:s.a.shape({native:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),chromium:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),edge:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),iphone:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),ipad:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),firefox:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),samsung:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})}),opera:s.a.shape({showClasses:s.a.arrayOf(s.a.string),targetUrl:s.a.string,images:s.a.arrayOf(s.a.shape({src:s.a.string,alt:s.a.string})),action:s.a.shape({ok:s.a.string,cancel:s.a.string,guidanceString:s.a.string})})})}},function(e,t,n){var a=n(5),s=n(6);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1},i=(a("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./addToHomeScreen.scss",s,o),s.locals?s.locals:{});e.exports=i},function(e,t,n){"use strict";var a,s={},o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function r(e,t,n){e=n.base?e+n.base:e,s[e]||(s[e]=[]);for(var a=0;a<t.length;a++){var o=t[a],i={css:o[1],media:o[2],sourceMap:o[3]},r=s[e];r[a]?r[a].updater(i):r.push({updater:f(i,n)})}for(var l=t.length;l<s[e].length;l++)s[e][l].updater();s[e].length=t.length,0===s[e].length&&delete s[e]}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var s=n.nc;s&&(a.nonce=s)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,d=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=d(t,s);else{var o=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var a=n.css,s=n.media,o=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,g=0;function f(e,t){var n,a,s;if(t.singleton){var o=g++;n=p||(p=l(t)),a=u.bind(null,n,o,!1),s=u.bind(null,n,o,!0)}else n=l(t),a=m.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o()),r(e,t,n),function(t){r(e,t||[],n)}}},function(e,t,n){(t=n(7)(!1)).push([e.i,".ath-container{background-color:#eeeeee;color:#000000;display:none;flex-direction:column;padding:1%;position:fixed;text-align:center;width:100%;z-index:1000}.ath-banner{display:flex;flex-direction:row;justify-content:center;position:relative}.ath-guidance{display:none;flex-direction:row;justify-content:center;position:relative}.ath-banner-title{align-items:center;display:flex;font-size:1rem;justify-content:center;text-align:center;width:calc(100% - 240px)}.ath-banner-cell{align-items:center;display:flex;justify-content:center;margin:5px;width:70px}.log-target{overflow-wrap:break-word}.banner-top-left{left:0;top:0}.banner-top-right{right:0;top:0}.banner-bottom-left{bottom:0;left:0}.banner-bottom-right{bottom:0;right:0}.banner-center{left:25%;top:25%}.banner-center-left{left:0;top:25%}.banner-center-right{right:0;top:25%}.banner-top-center{left:25%;top:12px;width:50%}.banner-bottom-center{bottom:12px}.ath-guidance img{bottom:0}@media (min-width: 576px){.banner-dialog-centered{min-height:calc(100% - 3.5rem)}.ath-banner-cell{margin:3px;width:90px}}@media (min-width: 768px){.ath-banner-title{width:calc(100% - 360px)}.ath-banner-cell{width:120px}}@media (min-width: 992px){.banner-lg{width:50%}.banner-lg-top-center{left:25%;top:12px}.banner-lg-bottom-center{bottom:12px;left:25%}.banner-bottom-center{left:20%;width:60%}.ath-container img{left:15%}}.edge-wrapper,.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{opacity:1}.firefox-wrapper,.samsung-wrapper,.opera-home-screen-wrapper{bottom:21px}.opera-home-screen-wrapper{left:auto;max-width:483px;right:6px;width:100%}.ipad-wrapper img{top:0}.animated.delay-7s{animation-delay:7s}.overlay-1{z-index:2020}.overlay-2{z-index:2040}.overlay{bottom:0;height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:.3s ease;width:100%}.ath-container p{font-size:1.1em;margin:0;padding:0;position:relative;text-shadow:0 0.1em 0 #ffffff;z-index:2147483642}.d-none{display:none !important}.d-block{display:block !important}.d-flex{display:-ms-flexbox !important;display:flex !important}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var s=(i=a,r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),o=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[n].concat(o).concat([s]).join("\n")}var i,r,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a=0;a<e.length;a++){var s=[].concat(e[a]);n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s)}},t}}])}));