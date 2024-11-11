/*! lazysizes - v4.1.8 */(function(a,b){var c=function(d){b(a.lazySizes,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),typeof module=="object"&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)})(window,function(a,b,c,d){"use strict";function e(a2){var b2=getComputedStyle(a2,null)||{},c2=b2.fontFamily||"",d2=c2.match(j)||"",e2=d2&&c2.match(k)||"";return e2&&(e2=e2[1]),{fit:d2&&d2[1]||"",position:n[e2]||e2||"center"}}function f(a2,b2){var d2,e2,f2=c.cfg,g2=a2.cloneNode(!1),h2=g2.style,i2=function(){var b3=a2.currentSrc||a2.src;b3&&e2!==b3&&(e2=b3,h2.backgroundImage="url("+(m.test(b3)?JSON.stringify(b3):b3)+")",d2||(d2=!0,c.rC(g2,f2.loadingClass),c.aC(g2,f2.loadedClass)))},j2=function(){c.rAF(i2)};a2._lazysizesParentFit=b2.fit,a2.addEventListener("lazyloaded",j2,!0),a2.addEventListener("load",j2,!0),g2.addEventListener("load",function(){var a3=g2.currentSrc||g2.src;a3&&a3!=l&&(g2.src=l,g2.srcset="")}),c.rAF(function(){var d3=a2,e3=a2.parentNode;e3.nodeName.toUpperCase()=="PICTURE"&&(d3=e3,e3=e3.parentNode),c.rC(g2,f2.loadedClass),c.rC(g2,f2.lazyClass),c.aC(g2,f2.loadingClass),c.aC(g2,f2.objectFitClass||"lazysizes-display-clone"),g2.getAttribute(f2.srcsetAttr)&&g2.setAttribute(f2.srcsetAttr,""),g2.getAttribute(f2.srcAttr)&&g2.setAttribute(f2.srcAttr,""),g2.src=l,g2.srcset="",h2.backgroundRepeat="no-repeat",h2.backgroundPosition=b2.position,h2.backgroundSize=b2.fit,d3.style.display="none",a2.setAttribute("data-parent-fit",b2.fit),a2.setAttribute("data-parent-container","prev"),e3.insertBefore(g2,d3),a2._lazysizesParentFit&&delete a2._lazysizesParentFit,a2.complete&&i2()})}var g=b.createElement("a").style,h="objectFit"in g,i=h&&"objectPosition"in g,j=/object-fit["']*\s*:\s*["']*(contain|cover)/,k=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,l="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",m=/\(|\)|'/,n={center:"center","50% 50%":"center"};if(!h||!i){var o=function(a2){if(a2.detail.instance==c){var b2=a2.target,d2=e(b2);!d2.fit||h&&d2.position=="center"||f(b2,d2)}};a.addEventListener("lazyunveilread",o,!0),d&&d.detail&&o(d)}});/*! lazysizes - v4.1.8 */(function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),typeof module=="object"&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)})(window,function(a,b,c){"use strict";function d(b2,c2){var d2,e2,f2,g2,h2=a.getComputedStyle(b2);e2=b2.parentNode,g2={isPicture:!(!e2||!m.test(e2.nodeName||""))},f2=function(a2,c3){var d3=b2.getAttribute("data-"+a2);if(!d3){var e3=h2.getPropertyValue("--ls-"+a2);e3&&(d3=e3.trim())}if(d3){if(d3=="true")d3=!0;else if(d3=="false")d3=!1;else if(l.test(d3))d3=parseFloat(d3);else if(typeof j[a2]=="function")d3=j[a2](b2,d3);else if(q.test(d3))try{d3=JSON.parse(d3)}catch(a3){}g2[a2]=d3}else a2 in j&&typeof j[a2]!="function"?g2[a2]=j[a2]:c3&&typeof j[a2]=="function"&&(g2[a2]=j[a2](b2,d3))};for(d2 in j)f2(d2);return c2.replace(p,function(a2,b3){b3 in g2||f2(b3,!0)}),g2}function e(a2,b2){var c2=[],d2=function(a3,c3){return k[typeof b2[c3]]?b2[c3]:a3};return c2.srcset=[],b2.absUrl&&(s.setAttribute("href",a2),a2=s.href),a2=((b2.prefix||"")+a2+(b2.postfix||"")).replace(p,d2),b2.widths.forEach(function(d3){var e2=b2.widthmap[d3]||d3,f2=b2.aspectratio||b2.ratio,g2=!b2.aspectratio&&j.traditionalRatio,h2={u:a2.replace(n,e2).replace(o,f2?Math.round(g2?d3*f2:d3/f2):""),w:d3};c2.push(h2),c2.srcset.push(h2.c=h2.u+" "+d3+"w")}),c2}function f(a2,c2,d2){var f2=0,g2=0,h2=d2;if(a2){if(c2.ratio==="container"){for(f2=h2.scrollWidth,g2=h2.scrollHeight;!(f2&&g2||h2===b);)h2=h2.parentNode,f2=h2.scrollWidth,g2=h2.scrollHeight;f2&&g2&&(c2.ratio=g2/f2)}a2=e(a2,c2),a2.isPicture=c2.isPicture,u&&d2.nodeName.toUpperCase()=="IMG"?d2.removeAttribute(i.srcsetAttr):d2.setAttribute(i.srcsetAttr,a2.srcset.join(", ")),Object.defineProperty(d2,"_lazyrias",{value:a2,writable:!0})}}function g(a2,b2){var e2=d(a2,b2);return j.modifyOptions.call(a2,{target:a2,details:e2,detail:e2}),c.fire(a2,"lazyriasmodifyoptions",e2),e2}function h(a2){return a2.getAttribute(a2.getAttribute("data-srcattr")||j.srcAttr)||a2.getAttribute(i.srcsetAttr)||a2.getAttribute(i.srcAttr)||a2.getAttribute("data-pfsrcset")||""}var i,j,k={string:1,number:1},l=/^\-*\+*\d+\.*\d*$/,m=/^picture$/i,n=/\s*\{\s*width\s*\}\s*/i,o=/\s*\{\s*height\s*\}\s*/i,p=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,q=/^\[.*\]|\{.*\}$/,r=/^(?:auto|\d+(px)?)$/,s=b.createElement("a"),t=b.createElement("img"),u="srcset"in t&&!("sizes"in t),v=!!a.HTMLPictureElement&&!u;(function(){var b2,d2=function(){},e2={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:d2,widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};i=c&&c.cfg||a.lazySizesConfig,i||(i={},a.lazySizesConfig=i),i.supportsType||(i.supportsType=function(a2){return!a2}),i.rias||(i.rias={}),"widths"in(j=i.rias)||(j.widths=[],function(a2){for(var b3,c2=0;!b3||b3<3e3;)c2+=5,c2>30&&(c2+=1),b3=36*c2,a2.push(b3)}(j.widths));for(b2 in e2)b2 in j||(j[b2]=e2[b2])})(),addEventListener("lazybeforesizes",function(a2){if(a2.detail.instance==c){var b2,d2,e2,k2,l2,m2,o2,p2,q2,s2,t2,u2,x;if(b2=a2.target,a2.detail.dataAttr&&!a2.defaultPrevented&&!j.disabled&&(q2=b2.getAttribute(i.sizesAttr)||b2.getAttribute("sizes"))&&r.test(q2)){if(d2=h(b2),e2=g(b2,d2),t2=n.test(e2.prefix)||n.test(e2.postfix),e2.isPicture&&(k2=b2.parentNode))for(l2=k2.getElementsByTagName("source"),m2=0,o2=l2.length;m2<o2;m2++)(t2||n.test(p2=h(l2[m2])))&&(f(p2,e2,l2[m2]),u2=!0);t2||n.test(d2)?(f(d2,e2,b2),u2=!0):u2&&(x=[],x.srcset=[],x.isPicture=!0,Object.defineProperty(b2,"_lazyrias",{value:x,writable:!0})),u2&&(v?b2.removeAttribute(i.srcAttr):q2!="auto"&&(s2={width:parseInt(q2,10)},w({target:b2,detail:s2})))}}},!0);var w=function(){var d2=function(a2,b2){return a2.w-b2.w},e2=function(a2){var b2,c2,d3=a2.length,e3=a2[d3-1],f3=0;for(f3;f3<d3;f3++)if(e3=a2[f3],e3.d=e3.w/a2.w,e3.d>=a2.d){!e3.cached&&(b2=a2[f3-1])&&b2.d>a2.d-.13*Math.pow(a2.d,2.2)&&(c2=Math.pow(b2.d-.6,1.6),b2.cached&&(b2.d+=.15*c2),b2.d+(e3.d-a2.d)*c2>a2.d&&(e3=b2));break}return e3},f2=function(a2,b2){var d3;return!a2._lazyrias&&c.pWS&&(d3=c.pWS(a2.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a2,"_lazyrias",{value:d3,writable:!0}),b2&&a2.parentNode&&(d3.isPicture=a2.parentNode.nodeName.toUpperCase()=="PICTURE")),a2._lazyrias},g2=function(b2){var d3=a.devicePixelRatio||1,e3=c.getX&&c.getX(b2);return Math.min(e3||d3,2.4,d3)},h2=function(b2,c2){var h3,i2,j3,k2,l2,m2;if(l2=b2._lazyrias,l2.isPicture&&a.matchMedia){for(i2=0,h3=b2.parentNode.getElementsByTagName("source"),j3=h3.length;i2<j3;i2++)if(f2(h3[i2])&&!h3[i2].getAttribute("type")&&(!(k2=h3[i2].getAttribute("media"))||(matchMedia(k2)||{}).matches)){l2=h3[i2]._lazyrias;break}}return(!l2.w||l2.w<c2)&&(l2.w=c2,l2.d=g2(b2),m2=e2(l2.sort(d2))),m2},j2=function(d3){if(d3.detail.instance==c){var e3,g3=d3.target;if(!u&&(a.respimage||a.picturefill||lazySizesConfig.pf))return void b.removeEventListener("lazybeforesizes",j2);("_lazyrias"in g3||d3.detail.dataAttr&&f2(g3,!0))&&(e3=h2(g3,d3.detail.width))&&e3.u&&g3._lazyrias.cur!=e3.u&&(g3._lazyrias.cur=e3.u,e3.cached=!0,c.rAF(function(){g3.setAttribute(i.srcAttr,e3.u),g3.setAttribute("src",e3.u)}))}};return v?j2=function(){}:addEventListener("lazybeforesizes",j2),j2}()});/*! lazysizes - v4.1.8 */(function(a,b){var c=b(a,a.document);a.lazySizes=c,typeof module=="object"&&module.exports&&(module.exports=c)})(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a2,b2){return p[b2]||(p[b2]=new RegExp("(\\s|^)"+b2+"(\\s|$)")),p[b2].test(a2[i]("class")||"")&&p[b2]},s=function(a2,b2){r(a2,b2)||a2.setAttribute("class",(a2[i]("class")||"").trim()+" "+b2)},t=function(a2,b2){var c2;(c2=r(a2,b2))&&a2.setAttribute("class",(a2[i]("class")||"").replace(c2," "))},u=function(a2,b2,c2){var d2=c2?h:"removeEventListener";c2&&u(a2,b2),o.forEach(function(c3){a2[d2](c3,b2)})},v=function(a2,d2,e2,f2,g2){var h2=b.createEvent("Event");return e2||(e2={}),e2.instance=c,h2.initEvent(d2,!f2,!g2),h2.detail=e2,a2.dispatchEvent(h2),h2},w=function(b2,c2){var e2;!g&&(e2=a.picturefill||d.pf)?(c2&&c2.src&&!b2[i]("srcset")&&b2.setAttribute("srcset",c2.src),e2({reevaluate:!0,elements:[b2]})):c2&&c2.src&&(b2.src=c2.src)},x=function(a2,b2){return(getComputedStyle(a2,null)||{})[b2]},y=function(a2,b2,c2){for(c2=c2||a2.offsetWidth;c2<d.minSize&&b2&&!a2._lazysizesWidth;)c2=b2.offsetWidth,b2=b2.parentNode;return c2},z=function(){var a2,c2,d2=[],e2=[],f2=d2,g2=function(){var b2=f2;for(f2=d2.length?e2:d2,a2=!0,c2=!1;b2.length;)b2.shift()();a2=!1},h2=function(d3,e3){a2&&!e3?d3.apply(this,arguments):(f2.push(d3),c2||(c2=!0,(b.hidden?k:l)(g2)))};return h2._lsFlush=g2,h2}(),A=function(a2,b2){return b2?function(){z(a2)}:function(){var b3=this,c2=arguments;z(function(){a2.apply(b3,c2)})}},B=function(a2){var b2,c2=0,e2=d.throttleDelay,g2=d.ricTimeout,h2=function(){b2=!1,c2=f.now(),a2()},i2=m&&g2>49?function(){m(h2,{timeout:g2}),g2!==d.ricTimeout&&(g2=d.ricTimeout)}:A(function(){k(h2)},!0);return function(a3){var d2;(a3=a3===!0)&&(g2=33),b2||(b2=!0,d2=e2-(f.now()-c2),d2<0&&(d2=0),a3||d2<9?i2():k(i2,d2))}},C=function(a2){var b2,c2,d2=99,e2=function(){b2=null,a2()},g2=function(){var a3=f.now()-c2;a3<d2?k(g2,d2-a3):(m||e2)(e2)};return function(){c2=f.now(),b2||(b2=k(g2,d2))}};(function(){var b2,c2={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b2 in c2)b2 in d||(d[b2]=c2[b2]);a.lazySizesConfig=d,k(function(){d.init&&F()})})();var D=function(){var g2,l2,m2,o2,p2,y2,D2,F2,G,H,I,J,K=/^img$/i,L=/^iframe$/i,M="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,O=0,P=0,Q=-1,R=function(a2){P--,(!a2||P<0||!a2.target)&&(P=0)},S=function(a2){return J==null&&(J=x(b.body,"visibility")=="hidden"),J||x(a2.parentNode,"visibility")!="hidden"&&x(a2,"visibility")!="hidden"},T=function(a2,c2){var d2,f2=a2,g3=S(a2);for(F2-=c2,I+=c2,G-=c2,H+=c2;g3&&(f2=f2.offsetParent)&&f2!=b.body&&f2!=e;)(g3=(x(f2,"opacity")||1)>0)&&x(f2,"overflow")!="visible"&&(d2=f2.getBoundingClientRect(),g3=H>d2.left&&G<d2.right&&I>d2.top-1&&F2<d2.bottom+1);return g3},U=function(){var a2,f2,h2,j2,k2,m3,n2,p3,q2,r2,s2,t2,u2=c.elements;if((o2=d.loadMode)&&P<8&&(a2=u2.length)){for(f2=0,Q++;f2<a2;f2++)if(u2[f2]&&!u2[f2]._lazyRace)if(!M||c.prematureUnveil&&c.prematureUnveil(u2[f2]))aa(u2[f2]);else if((p3=u2[f2][i]("data-expand"))&&(m3=1*p3)||(m3=O),r2||(r2=!d.expand||d.expand<1?e.clientHeight>500&&e.clientWidth>500?500:370:d.expand,c._defEx=r2,s2=r2*d.expFactor,t2=d.hFac,J=null,O<s2&&P<1&&Q>2&&o2>2&&!b.hidden?(O=s2,Q=0):O=o2>1&&Q>1&&P<6?r2:N),q2!==m3&&(y2=innerWidth+m3*t2,D2=innerHeight+m3,n2=-1*m3,q2=m3),h2=u2[f2].getBoundingClientRect(),(I=h2.bottom)>=n2&&(F2=h2.top)<=D2&&(H=h2.right)>=n2*t2&&(G=h2.left)<=y2&&(I||H||G||F2)&&(d.loadHidden||S(u2[f2]))&&(l2&&P<3&&!p3&&(o2<3||Q<4)||T(u2[f2],m3))){if(aa(u2[f2]),k2=!0,P>9)break}else!k2&&l2&&!j2&&P<4&&Q<4&&o2>2&&(g2[0]||d.preloadAfterLoad)&&(g2[0]||!p3&&(I||H||G||F2||u2[f2][i](d.sizesAttr)!="auto"))&&(j2=g2[0]||u2[f2]);j2&&!k2&&aa(j2)}},V=B(U),W=function(a2){var b2=a2.target;if(b2._lazyCache)return void delete b2._lazyCache;R(a2),s(b2,d.loadedClass),t(b2,d.loadingClass),u(b2,Y),v(b2,"lazyloaded")},X=A(W),Y=function(a2){X({target:a2.target})},Z=function(a2,b2){try{a2.contentWindow.location.replace(b2)}catch(c2){a2.src=b2}},$=function(a2){var b2,c2=a2[i](d.srcsetAttr);(b2=d.customMedia[a2[i]("data-media")||a2[i]("media")])&&a2.setAttribute("media",b2),c2&&a2.setAttribute("srcset",c2)},_=A(function(a2,b2,c2,e2,f2){var g3,h2,j2,l3,o3,p3;(o3=v(a2,"lazybeforeunveil",b2)).defaultPrevented||(e2&&(c2?s(a2,d.autosizesClass):a2.setAttribute("sizes",e2)),h2=a2[i](d.srcsetAttr),g3=a2[i](d.srcAttr),f2&&(j2=a2.parentNode,l3=j2&&n.test(j2.nodeName||"")),p3=b2.firesLoad||"src"in a2&&(h2||g3||l3),o3={target:a2},s(a2,d.loadingClass),p3&&(clearTimeout(m2),m2=k(R,2500),u(a2,Y,!0)),l3&&q.call(j2.getElementsByTagName("source"),$),h2?a2.setAttribute("srcset",h2):g3&&!l3&&(L.test(a2.nodeName)?Z(a2,g3):a2.src=g3),f2&&(h2||l3)&&w(a2,{src:g3})),a2._lazyRace&&delete a2._lazyRace,t(a2,d.lazyClass),z(function(){var b3=a2.complete&&a2.naturalWidth>1;p3&&!b3||(b3&&s(a2,"ls-is-cached"),W(o3),a2._lazyCache=!0,k(function(){"_lazyCache"in a2&&delete a2._lazyCache},9)),a2.loading=="lazy"&&P--},!0)}),aa=function(a2){if(!a2._lazyRace){var b2,c2=K.test(a2.nodeName),e2=c2&&(a2[i](d.sizesAttr)||a2[i]("sizes")),f2=e2=="auto";(!f2&&l2||!c2||!a2[i]("src")&&!a2.srcset||a2.complete||r(a2,d.errorClass)||!r(a2,d.lazyClass))&&(b2=v(a2,"lazyunveilread").detail,f2&&E.updateElem(a2,!0,a2.offsetWidth),a2._lazyRace=!0,P++,_(a2,b2,f2,e2,c2))}},ba=C(function(){d.loadMode=3,V()}),ca=function(){d.loadMode==3&&(d.loadMode=2),ba()},da=function(){if(!l2){if(f.now()-p2<999)return void k(da,999);l2=!0,d.loadMode=3,V(),j("scroll",ca,!0)}};return{_:function(){p2=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g2=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),j("scroll",V,!0),j("resize",V,!0),a.MutationObserver?new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",V,!0),e[h]("DOMAttrModified",V,!0),setInterval(V,999)),j("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a2){b[h](a2,V,!0)}),/d$|^c/.test(b.readyState)?da():(j("load",da),b[h]("DOMContentLoaded",V),k(da,2e4)),c.elements.length?(U(),z._lsFlush()):V()},checkElems:V,unveil:aa,_aLSL:ca}}(),E=function(){var a2,c2=A(function(a3,b2,c3,d2){var e3,f3,g3;if(a3._lazysizesWidth=d2,d2+="px",a3.setAttribute("sizes",d2),n.test(b2.nodeName||""))for(e3=b2.getElementsByTagName("source"),f3=0,g3=e3.length;f3<g3;f3++)e3[f3].setAttribute("sizes",d2);c3.detail.dataAttr||w(a3,c3.detail)}),e2=function(a3,b2,d2){var e3,f3=a3.parentNode;f3&&(d2=y(a3,f3,d2),e3=v(a3,"lazybeforesizes",{width:d2,dataAttr:!!b2}),e3.defaultPrevented||(d2=e3.detail.width)&&d2!==a3._lazysizesWidth&&c2(a3,f3,e3,d2))},f2=function(){var b2,c3=a2.length;if(c3)for(b2=0;b2<c3;b2++)e2(a2[b2])},g2=C(f2);return{_:function(){a2=b.getElementsByClassName(d.autosizesClass),j("resize",g2)},checkElems:g2,updateElem:e2}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});/*! lazysizes - v4.1.8 */(function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),typeof module=="object"&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)})(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g=/^picture$/i,h=function(a2){return getComputedStyle(a2,null)||{}},i={getParent:function(b2,c2){var d2=b2,e2=b2.parentNode;return c2&&c2!="prev"||!e2||!g.test(e2.nodeName||"")||(e2=e2.parentNode),c2!="self"&&(d2=c2=="prev"?b2.previousElementSibling:c2&&(e2.closest||a.jQuery)&&(e2.closest?e2.closest(c2):jQuery(e2).closest(c2)[0])||e2),d2},getFit:function(a2){var b2,c2,d2=h(a2),g2=d2.content||d2.fontFamily,j={fit:a2._lazysizesParentFit||a2.getAttribute("data-parent-fit")};return!j.fit&&g2&&(b2=g2.match(e))&&(j.fit=b2[1]),j.fit?(c2=a2._lazysizesParentContainer||a2.getAttribute("data-parent-container"),!c2&&g2&&(b2=g2.match(f))&&(c2=b2[1]),j.parent=i.getParent(a2,c2)):j.fit=d2.objectFit,j},getImageRatio:function(b2){var c2,e2,f2,h2,i2,j,k,l=b2.parentNode,m=l&&g.test(l.nodeName||"")?l.querySelectorAll("source, img"):[b2];for(c2=0;c2<m.length;c2++)if(b2=m[c2],e2=b2.getAttribute(lazySizesConfig.srcsetAttr)||b2.getAttribute("srcset")||b2.getAttribute("data-pfsrcset")||b2.getAttribute("data-risrcset")||"",f2=b2._lsMedia||b2.getAttribute("media"),f2=lazySizesConfig.customMedia[b2.getAttribute("data-media")||f2]||f2,e2&&(!f2||(a.matchMedia&&matchMedia(f2)||{}).matches)){h2=parseFloat(b2.getAttribute("data-aspectratio")),h2||(i2=e2.match(d),i2?i2[2]=="w"?(j=i2[1],k=i2[3]):(j=i2[3],k=i2[1]):(j=b2.getAttribute("width"),k=b2.getAttribute("height")),h2=j/k);break}return h2},calculateSize:function(a2,b2){var c2,d2,e2,f2,g2=this.getFit(a2),h2=g2.fit,i2=g2.parent;return h2=="width"||(h2=="contain"||h2=="cover")&&(e2=this.getImageRatio(a2))?(i2?b2=i2.clientWidth:i2=a2,f2=b2,h2=="width"?f2=b2:(d2=i2.clientHeight)>40&&(c2=b2/d2)&&(h2=="cover"&&c2<e2||h2=="contain"&&c2>e2)&&(f2=b2*(e2/c2)),f2):b2}};c.parentFit=i,b.addEventListener("lazybeforesizes",function(a2){if(!a2.defaultPrevented&&a2.detail.instance==c){var b2=a2.target;a2.detail.width=i.calculateSize(b2,a2.detail.width)}})}});/*! lazysizes - v4.1.8 */(function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),typeof module=="object"&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)})(window,function(a,b,c){"use strict";var d,e=c&&c.cfg,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a2=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d2=Array.prototype.forEach;return function(){var e2=b.createElement("img"),f2=function(b2){var c2,d3,e3=b2.getAttribute(lazySizesConfig.srcsetAttr);e3&&(d3=e3.match(a2))&&(c2=d3[2]=="w"?d3[1]/d3[3]:d3[3]/d3[1],c2&&b2.setAttribute("data-aspectratio",c2),b2.setAttribute(lazySizesConfig.srcsetAttr,e3.replace(h,"")))},g2=function(a3){if(a3.detail.instance==c){var b2=a3.target.parentNode;b2&&b2.nodeName=="PICTURE"&&d2.call(b2.getElementsByTagName("source"),f2),f2(a3.target)}},i2=function(){e2.currentSrc&&b.removeEventListener("lazybeforeunveil",g2)};b.addEventListener("lazybeforeunveil",g2),e2.onload=i2,e2.onerror=i2,e2.srcset="data:,a 1w 1h",e2.complete&&i2()}}();if(e.supportsType||(e.supportsType=function(a2){return!a2}),a.HTMLPictureElement&&g)return void(!c.hasHDescriptorFix&&b.msElementsFromPoint&&(c.hasHDescriptorFix=!0,i()));a.picturefill||e.pf||(e.pf=function(b2){var c2,e2;if(!a.picturefill)for(c2=0,e2=b2.elements.length;c2<e2;c2++)d(b2.elements[c2])},d=function(){var f2=function(a2,b2){return a2.w-b2.w},i2=/^\s*\d+\.*\d*px\s*$/,j=function(a2){var b2,c2,d2=a2.length,e2=a2[d2-1],f3=0;for(f3;f3<d2;f3++)if(e2=a2[f3],e2.d=e2.w/a2.w,e2.d>=a2.d){!e2.cached&&(b2=a2[f3-1])&&b2.d>a2.d-.13*Math.pow(a2.d,2.2)&&(c2=Math.pow(b2.d-.6,1.6),b2.cached&&(b2.d+=.15*c2),b2.d+(e2.d-a2.d)*c2>a2.d&&(e2=b2));break}return e2},k=function(){var a2,b2=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c2=/\s/,d2=function(b3,c3,d3,e2){a2.push({c:c3,u:d3,w:1*e2})};return function(e2){return a2=[],e2=e2.trim(),e2.replace(h,"").replace(b2,d2),a2.length||!e2||c2.test(e2)||a2.push({c:e2,u:e2,w:99}),a2}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a2,c2=b.getElementsByClassName("lazymatchmedia"),e2=function(){var a3,b2;for(a3=0,b2=c2.length;a3<b2;a3++)d(c2[a3])};return function(){clearTimeout(a2),a2=setTimeout(e2,66)}}()))},m=function(b2,d2){var f3,g2=b2.getAttribute("srcset")||b2.getAttribute(e.srcsetAttr);!g2&&d2&&(g2=b2._lazypolyfill?b2._lazypolyfill._set:b2.getAttribute(e.srcAttr)||b2.getAttribute("src")),b2._lazypolyfill&&b2._lazypolyfill._set==g2||(f3=k(g2||""),d2&&b2.parentNode&&(f3.isPicture=b2.parentNode.nodeName.toUpperCase()=="PICTURE",f3.isPicture&&a.matchMedia&&(c.aC(b2,"lazymatchmedia"),l())),f3._set=g2,Object.defineProperty(b2,"_lazypolyfill",{value:f3,writable:!0}))},n=function(b2){var d2=a.devicePixelRatio||1,e2=c.getX&&c.getX(b2);return Math.min(e2||d2,2.5,d2)},o=function(b2){return a.matchMedia?(o=function(a2){return!a2||(matchMedia(a2)||{}).matches})(b2):!b2},p=function(a2){var b2,d2,g2,h2,k2,l2,p2;if(h2=a2,m(h2,!0),k2=h2._lazypolyfill,k2.isPicture){for(d2=0,b2=a2.parentNode.getElementsByTagName("source"),g2=b2.length;d2<g2;d2++)if(e.supportsType(b2[d2].getAttribute("type"),a2)&&o(b2[d2].getAttribute("media"))){h2=b2[d2],m(h2),k2=h2._lazypolyfill;break}}return k2.length>1?(p2=h2.getAttribute("sizes")||"",p2=i2.test(p2)&&parseInt(p2,10)||c.gW(a2,a2.parentNode),k2.d=n(a2),!k2.src||!k2.w||k2.w<p2?(k2.w=p2,l2=j(k2.sort(f2)),k2.src=l2):l2=k2.src):l2=k2[0],l2},q=function(a2){if(!g||!a2.parentNode||a2.parentNode.nodeName.toUpperCase()=="PICTURE"){var b2=p(a2);b2&&b2.u&&a2._lazypolyfill.cur!=b2.u&&(a2._lazypolyfill.cur=b2.u,b2.cached=!0,a2.setAttribute(e.srcAttr,b2.u),a2.setAttribute("src",b2.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&function(){var a2=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b2){a2.push(b2+e.loadedClass),a2.push(b2+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a2.join(", "))})}())});/*! lazysizes - v4.1.8 */(function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),typeof module=="object"&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)})(window,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+/g,e=/\s*\|\s+|\s+\|\s*/g,f=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,g=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,h=/\(|\)|'/,i={contain:1,cover:1},j=function(a2){var b2=c.gW(a2,a2.parentNode);return(!a2._lazysizesWidth||b2>a2._lazysizesWidth)&&(a2._lazysizesWidth=b2),a2._lazysizesWidth},k=function(a2){var b2;return b2=(getComputedStyle(a2)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!i[b2]&&i[a2.style.backgroundSize]&&(b2=a2.style.backgroundSize),b2},l=function(a2,b2){if(b2){var c2=b2.match(g);c2&&c2[1]?a2.setAttribute("type",c2[1]):a2.setAttribute("media",lazySizesConfig.customMedia[b2]||b2)}},m=function(a2,c2,g2){var h2=b.createElement("picture"),i2=c2.getAttribute(lazySizesConfig.sizesAttr),j2=c2.getAttribute("data-ratio"),k2=c2.getAttribute("data-optimumx");c2._lazybgset&&c2._lazybgset.parentNode==c2&&c2.removeChild(c2._lazybgset),Object.defineProperty(g2,"_lazybgset",{value:c2,writable:!0}),Object.defineProperty(c2,"_lazybgset",{value:h2,writable:!0}),a2=a2.replace(d," ").split(e),h2.style.display="none",g2.className=lazySizesConfig.lazyClass,a2.length!=1||i2||(i2="auto"),a2.forEach(function(a3){var c3,d2=b.createElement("source");i2&&i2!="auto"&&d2.setAttribute("sizes",i2),(c3=a3.match(f))?(d2.setAttribute(lazySizesConfig.srcsetAttr,c3[1]),l(d2,c3[2]),l(d2,c3[3])):d2.setAttribute(lazySizesConfig.srcsetAttr,a3),h2.appendChild(d2)}),i2&&(g2.setAttribute(lazySizesConfig.sizesAttr,i2),c2.removeAttribute(lazySizesConfig.sizesAttr),c2.removeAttribute("sizes")),k2&&g2.setAttribute("data-optimumx",k2),j2&&g2.setAttribute("data-ratio",j2),h2.appendChild(g2),c2.appendChild(h2)},n=function(a2){if(a2.target._lazybgset){var b2=a2.target,d2=b2._lazybgset,e2=b2.currentSrc||b2.src;if(e2){var f2=c.fire(d2,"bgsetproxy",{src:e2,useSrc:h.test(e2)?JSON.stringify(e2):e2});f2.defaultPrevented||(d2.style.backgroundImage="url("+f2.detail.useSrc+")")}b2._lazybgsetLoading&&(c.fire(d2,"_lazyloaded",{},!1,!0),delete b2._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a2){var d2,e2,f2;!a2.defaultPrevented&&(d2=a2.target.getAttribute("data-bgset"))&&(f2=a2.target,e2=b.createElement("img"),e2.alt="",e2._lazybgsetLoading=!0,a2.detail.firesLoad=!0,m(d2,f2,e2),setTimeout(function(){c.loader.unveil(e2),c.rAF(function(){c.fire(e2,"_lazyloaded",{},!0,!0),e2.complete&&n({target:e2})})}))}),b.addEventListener("load",n,!0),a.addEventListener("lazybeforesizes",function(a2){if(a2.detail.instance==c&&a2.target._lazybgset&&a2.detail.dataAttr){var b2=a2.target._lazybgset,d2=k(b2);i[d2]&&(a2.target._lazysizesParentFit=d2,c.rAF(function(){a2.target.setAttribute("data-parent-fit",d2),a2.target._lazysizesParentFit&&delete a2.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a2){!a2.defaultPrevented&&a2.target._lazybgset&&a2.detail.instance==c&&(a2.detail.width=j(a2.target._lazybgset))})}});
//# sourceMappingURL=/cdn/shop/t/4/assets/lazysizes.js.map?v=94224023136283657951631651570
