(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,A="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var a,c,s,u;if(Array.isArray(e)){if((a=e.length)!=i.length)return!1;for(c=a;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(A&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((a=e.length)!=i.length)return!1;for(c=a;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((a=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=a;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=a;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,A=n(7294),o=(r=A)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),l.canUseDOM?t(c):n&&(c=n(c))}var l=function(e){var t,n;function A(){return e.apply(this,arguments)||this}n=e,(t=A).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,A.peek=function(){return c},A.rewind=function(){if(A.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=A.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},A}(A.PureComponent);return i(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(l,"canUseDOM",a),l}}},9900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Le}});var r,A,o,i,a=n(7294),c=n(7580),s=n(638),u=n(5444),l=n(481),f=(0,c.default)(u.rU).withConfig({displayName:"PostItem__PostItemWrapper",componentId:"sc-hvbllo-0"})(["z-index:1;text-decoration-line:none;text-decoration:none;border-radius:1rem;color:white;display:flex;align-items:center;justify-content:center;"]),d=c.default.span.withConfig({displayName:"PostItem__Text",componentId:"sc-hvbllo-1"})(["text-align:center;position:absolute;margin-right:-6rem;font-family:'Times New Roman',Times,serif;transform:translate(-50%,-50%);backdrop-filter:blur(-4px);filter:blur(-4px);font-size:1.5rem;text-decoration:underline;"]),p=c.default.img.withConfig({displayName:"PostItem__ThumbnailImage",componentId:"sc-hvbllo-2"})(["width:100%;height:300px;border-radius:10px;margin-bottom:1rem;object-fit:cover;"]),g=c.default.div.withConfig({displayName:"PostItem__PostItemContent",componentId:"sc-hvbllo-3"})(["display:flex;flex-direction:column;padding:1rem;:hover{backdrop-filter:blur(5px);filter:blur(4px);transition:0.2s ease;box-shadow:1px 1px 100px #131313;}@media (max-width:926px){padding:1rem;}"]),m=c.default.div.withConfig({displayName:"PostItem__Title",componentId:"sc-hvbllo-4"})(["display:-webkit-box;overflow:hidden;margin-bottom:1rem;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:3rem;font-weight:700;"]),w=c.default.div.withConfig({displayName:"PostItem__Summary",componentId:"sc-hvbllo-5"})(["display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.7;font-size:1rem;line-height:1.5;font-weight:400;margin-bottom:1rem;"]),h=c.default.div.withConfig({displayName:"PostItem__Date",componentId:"sc-hvbllo-6"})(["font-size:1rem;font-weight:200;opacity:0.7;margin-bottom:2rem;"]),b=function(e){var t=e.title,n=e.date,r=e.summary,A=e.link,o=e.thumbnail.publicURL,i=(0,a.useState)(!1),c=i[0],s=i[1],u=(0,l.F)(),b=function(){s(!c)};return a.createElement(a.Fragment,null,a.createElement(f,Object.assign({to:A,onMouseEnter:b,onMouseLeave:b},u),a.createElement(g,null,a.createElement(p,{src:o,alt:"post img"}),a.createElement(m,null,t),a.createElement(w,null,r),a.createElement(h,null,n)),c?a.createElement(d,null,"click me"):""))},y=c.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1fjbhnr-0"})(["margin:0 auto;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:60rem;@media (max-width:926px){grid-template-columns:1fr;width:100%;padding:0px;}"]),v=function(e){var t=e.posts;return a.createElement(y,null,t.map((function(e){var t=e.node,n=t.id,r=t.fields.slug,A=Object.assign({},t.frontmatter);return a.createElement(b,Object.assign({},A,{link:r,key:n}))})))},C=n.p+"static/PortfolioImg-4db76ac4d8227ac42847c702f3c8f3ad.png",B=c.default.div.withConfig({displayName:"Banner__BannerWapper",componentId:"sc-1540xy3-0"})(["display:flex;justify-content:center;background-color:black;width:100%;height:36rem;margin-bottom:2rem;align-items:center;"]),T=c.default.img.withConfig({displayName:"Banner__Img",componentId:"sc-1540xy3-1"})(["width:300px;height:310px;@media (max-width:768px){display:none;}"]),E=c.default.h1.withConfig({displayName:"Banner__Title",componentId:"sc-1540xy3-2"})(["margin-top:3rem;color:white;line-height:1.6;font-size:1.8rem;"]),x=c.default.button.withConfig({displayName:"Banner__Button",componentId:"sc-1540xy3-3"})(["margin-bottom:3rem;margin-top:2rem;color:#000000;font-weight:bold;font-family:'Noto Sans KR',sans-serif !important;font-size:1rem;border-radius:1rem;width:13rem;border:none;height:3.1rem;background-color:white;transition:all 0.3s;:hover{border:1px solid white;color:white;border-color:white;background-color:#000000;}"]),Q=function(){return a.createElement(B,null,a.createElement("div",null,a.createElement(E,null,"블로그에 오신걸 환영합니다. ",a.createElement("br",null)," 제가 궁금하시다면 아래 버튼을 눌러주세요 !"),a.createElement(x,null,"포트폴리오 보기")),a.createElement(T,{src:C}))},O=n(5697),D=n.n(O),I=n(4839),M=n.n(I),P=n(2993),j=n.n(P),F=n(6494),N=n.n(F),G="bodyAttributes",k="htmlAttributes",z="titleAttributes",L={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},Y=(Object.keys(L).map((function(e){return L[e]})),"charset"),S="cssText",X="href",H="http-equiv",U="innerHTML",W="itemprop",R="name",V="property",K="rel",Z="src",q="target",J={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",$="defer",ee="encodeSpecialCharacters",te="onChangeClientState",ne="titleTemplate",re=Object.keys(J).reduce((function(e,t){return e[J[t]]=t,e}),{}),Ae=[L.NOSCRIPT,L.SCRIPT,L.STYLE],oe="data-react-helmet",ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ae=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},le=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},fe=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},de=function(e){var t=he(e,L.TITLE),n=he(e,ne);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=he(e,_);return t||r||void 0},pe=function(e){return he(e,te)||function(){}},ge=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return se({},e,t)}),{})},me=function(e,t){return t.filter((function(e){return void 0!==e[L.BASE]})).map((function(e){return e[L.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),A=0;A<r.length;A++){var o=r[A].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},we=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Be("Helmet: "+e+' should be of type "Array". Instead found type "'+ie(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var A={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var a=o[i],c=a.toLowerCase();-1===t.indexOf(c)||n===K&&"canonical"===e[n].toLowerCase()||c===K&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(a)||a!==U&&a!==S&&a!==W||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),A[n]||(A[n]={}),!r[n][s]&&(A[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(A),i=0;i<o.length;i++){var a=o[i],c=N()({},r[a],A[a]);r[a]=c}return e}),[]).reverse()},he=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},be=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){be(e)}),0)}),ye=function(e){return clearTimeout(e)},ve="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||be:n.g.requestAnimationFrame||be,Ce="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ye:n.g.cancelAnimationFrame||ye,Be=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Te=null,Ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,A=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;Oe(L.BODY,r),Oe(L.HTML,A),Qe(l,f);var d={baseTag:De(L.BASE,n),linkTags:De(L.LINK,o),metaTags:De(L.META,i),noscriptTags:De(L.NOSCRIPT,a),scriptTags:De(L.SCRIPT,s),styleTags:De(L.STYLE,u)},p={},g={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(g[e]=d[e].oldTags)})),t&&t(),c(e,p,g)},xe=function(e){return Array.isArray(e)?e.join(""):e},Qe=function(e,t){void 0!==e&&document.title!==e&&(document.title=xe(e)),Oe(L.TITLE,t)},Oe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(oe),A=r?r.split(","):[],o=[].concat(A),i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===A.indexOf(c)&&A.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var l=o.length-1;l>=0;l--)n.removeAttribute(o[l]);A.length===o.length?n.removeAttribute(oe):n.getAttribute(oe)!==i.join(",")&&n.setAttribute(oe,i.join(","))}},De=function(e,t){var n=document.head||document.querySelector(L.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),A=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===U)n.innerHTML=t.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(oe,"true"),A.some((function(e,t){return i=t,n.isEqualNode(e)}))?A.splice(i,1):o.push(n)})),A.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:A,newTags:o}},Ie=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[J[n]||n]=e[n],t}),t)},Pe=function(e,t,n){switch(e){case L.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[oe]=!0,A=Me(n,r),[a.createElement(L.TITLE,A,e)];var e,n,r,A},toString:function(){return function(e,t,n,r){var A=Ie(n),o=xe(t);return A?"<"+e+' data-react-helmet="true" '+A+">"+fe(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+fe(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case G:case k:return{toComponent:function(){return Me(t)},toString:function(){return Ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,A=((r={key:n})[oe]=!0,r);return Object.keys(t).forEach((function(e){var n=J[e]||e;if(n===U||n===S){var r=t.innerHTML||t.cssText;A.dangerouslySetInnerHTML={__html:r}}else A[n]=t[e]})),a.createElement(e,A)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var A=Object.keys(r).filter((function(e){return!(e===U||e===S)})).reduce((function(e,t){var A=void 0===r[t]?t:t+'="'+fe(r[t],n)+'"';return e?e+" "+A:A}),""),o=r.innerHTML||r.cssText||"",i=-1===Ae.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+A+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},je=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,A=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:Pe(L.BASE,t,r),bodyAttributes:Pe(G,n,r),htmlAttributes:Pe(k,A,r),link:Pe(L.LINK,o,r),meta:Pe(L.META,i,r),noscript:Pe(L.NOSCRIPT,a,r),script:Pe(L.SCRIPT,c,r),style:Pe(L.STYLE,s,r),title:Pe(L.TITLE,{title:l,titleAttributes:f},r)}},Fe=M()((function(e){return{baseTag:me([X,q],e),bodyAttributes:ge(G,e),defer:he(e,$),encode:he(e,ee),htmlAttributes:ge(k,e),linkTags:we(L.LINK,[K,X],e),metaTags:we(L.META,[R,Y,H,V,W],e),noscriptTags:we(L.NOSCRIPT,[U],e),onChangeClientState:pe(e),scriptTags:we(L.SCRIPT,[Z,U],e),styleTags:we(L.STYLE,[S],e),title:de(e),titleAttributes:ge(z,e)}}),(function(e){Te&&Ce(Te),e.defer?Te=ve((function(){Ee(e,(function(){Te=null}))})):(Ee(e),Te=null)}),je)((function(){return null})),Ne=(A=Fe,i=o=function(e){function t(){return ae(this,t),le(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!j()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case L.SCRIPT:case L.NOSCRIPT:return{innerHTML:t};case L.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,A=e.newChildProps,o=e.nestedChildren;return se({},r,((t={})[n.type]=[].concat(r[n.type]||[],[se({},A,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,A=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case L.TITLE:return se({},A,((t={})[r.type]=i,t.titleAttributes=se({},o),t));case L.BODY:return se({},A,{bodyAttributes:se({},o)});case L.HTML:return se({},A,{htmlAttributes:se({},o)})}return se({},A,((n={})[r.type]=se({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=se({},t);return Object.keys(e).forEach((function(t){var r;n=se({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var A=e.props,o=A.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[re[n]||n]=e[n],t}),t)}(ue(A,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case L.LINK:case L.META:case L.NOSCRIPT:case L.SCRIPT:case L.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ue(e,["children"]),r=se({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(A,r)},ce(t,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),t}(a.Component),o.propTypes={base:D().object,bodyAttributes:D().object,children:D().oneOfType([D().arrayOf(D().node),D().node]),defaultTitle:D().string,defer:D().bool,encodeSpecialCharacters:D().bool,htmlAttributes:D().object,link:D().arrayOf(D().object),meta:D().arrayOf(D().object),noscript:D().arrayOf(D().object),onChangeClientState:D().func,script:D().arrayOf(D().object),style:D().arrayOf(D().object),title:D().string,titleAttributes:D().object,titleTemplate:D().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=A.peek,o.rewind=function(){var e=A.rewind();return e||(e=je({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Ne.renderStatic=Ne.rewind;function Ge(e){e.description;var t=e.lang,n=void 0===t?"en":t,r=e.meta,A=void 0===r?[]:r,o=e.title;return a.createElement(Ne,{htmlAttributes:{lang:n},title:o,meta:[{name:"description"},{property:"og:title",content:o},{property:"og:description"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:o},{name:"twitter:description"},{name:"google-site-verification",content:"u2qanESU0vG-gmAYFlZXjlx0x43q-QR1h2VCKYxjmHI"}].concat(A),link:[{rel:"shortcut icon",href:"data:image/png;base64,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Nbr6rW8FwKITwPRm5fTpqKALGhgCAQwABQQwABQQwPRm6/btqLC1tRUAi04A05sMws3NzWht/fPPA2DRCWB6VbEr1frGRgAsOgFMr1oH8K3u9+mCBoZAANOrDz/+uGkg3nj33QAYAgFMrzJ83/zpT6OF8XgsgIHBcDUketfqikiPfvvbxn+BwVAB07usgp/+/vd77Yp+9bXXhC8wKA927XpAz/7fb38bv+3apYsXY95udt3OV370owAYEhUwzeT47HPPPx/zlOF7ec7/JkALApimMoRzrHY8hw06sttZ+AJDpQua5rI7+qOPP44zKytHunZvrvV97q//2oxnYNDMgqbUaDSKKy+8EBfOn49z+4RxTuDa2NiI613VW7G7FsC8CWAWRoZxLlXavVwpZzeb4QwsGwEMAAVMwgKAAgIYAAoIYAAoIIABoIAABoACAhgACghgACgggAGggAAGgAICGAAKCGAAKCCAAaCAAAaAAgIYAAoIYAAoIIABoIAABoACAhgACghgACgggAGggAAGgAICGAAKCGAAKCCAAaCAAAaAAgIYAAoIYAAoIIABoIAABoACAhgACghgACgggAGggAAGgAICGAAKCGAAKCCAAaCAAAaAAgIYAAr8UcCAjM6eve/Xxpubwb1WVlZi5fTpPb82pOO1+3nfun07tra2AoZMADMIFx57LK698kpcOH9+z6+Px+N45JvfDCZWz52Li089FVdefHE7hPfy+BNPxNqtW7FI8nnOx36ua6urq9vBe7/HnzKE1zc2tm9vdX9L3l/77LOAobijaYvYujfeO9euXr3z1e9+d+fO73+/b/vyX/91UH9bX60LsDuffvLJgccrW3cyU/548zm+8sIL24/5MM/zYVv+e5efeeZOF+Dlf6Om7dMG9WC1E9BmCREBPNuJyqIE8FGe46O2d956a/v3Vf2tmrZPG9SD1Za0HTVETnIAHzfEWgfwcZ/jeVTFKmJtwdqgHqy2ZG1eldBJCeB5hlirAK4O3r0qYkGsLUgb1IPVlqD18Ya87AHcR5dtiwDOcdhFCd7dr5dLFy8uzPOrncxmHTDN5AzXD957L7o3v7j+yiv7zm5lsoSoO1GJLsDi01/84r4zwBdRzmTuThjinbffXsjneTQabb8W8/hCFcuQ6FW++b70wgvRVRvbb8ocLE9UXnrxxe3AHdpJyvSkIZc/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"}]})}var ke=c.default.div.withConfig({displayName:"pages__TextLayer",componentId:"sc-12s69b8-0"})(["height:25rem;"]),ze=c.default.div.withConfig({displayName:"pages__BlogText",componentId:"sc-12s69b8-1"})(["margin-top:3rem;color:white;font-family:'Times New Roman',Times,serif;font-size:8rem;font-weight:100;position:sticky;top:100px;z-index:0;@media (max-width:768px){font-size:4rem;}"]),Le=function(e){var t=e.data.allMarkdownRemark.edges;return a.createElement(s.Z,null,a.createElement(Ge,{title:"MinGI.tech"}),a.createElement(Q,null),a.createElement(ke,null,a.createElement(ze,null,"DEVELOP BLOG")),a.createElement(v,{posts:t}))}}}]);