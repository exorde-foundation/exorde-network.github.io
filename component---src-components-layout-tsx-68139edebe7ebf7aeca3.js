(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0lfv":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("fsQa"),a=n.n(r),o=function(){var e=a.a.find((function(e){return e.default})).siteLanguage;if("undefined"==typeof navigator)return e;var t=navigator&&navigator.language&&navigator.language.split("-")[0];return a.a.some((function(e){return e.siteLanguage===t}))?t:e},i=function(e){if("undefined"==typeof navigator)return e;var t=navigator&&navigator.language&&navigator.language.split("-")[0],n=a.a.find((function(e){return e.id===t})),r=e.includes("/"+n.id+"/")||e.substring(e.length-(n.id.length+1))=="/"+n.id;return n.default||r?e:"/"+n.id+("/"!==e?e:"")}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"9Dj+":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("A2+M"),i=n("ma3e"),c=n("jxKE"),l=n("kLJV"),u=n.n(l),s={terms:{en:{label:"Terms of use",link:"https://docs.exorde.network/legal/terms"},fr:{label:"Mentions légales",link:"https://docs.exorde.network/v/fr/legal/mentions-legales"}},privacyPolicy:{en:{label:"Privacy policy",link:"https://docs.exorde.network/legal/privacy-policy"},fr:{label:"Politique de confidentialité",link:"https://docs.exorde.network/legal/privacy-policy"}}},f=function(e){var t=e.brand;return a.a.createElement(t,{className:"text-6xl"})},p=function(e){var t=e.locale;return a.a.createElement("div",{className:"bg-black-dark text-white p-8"},a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left"},a.a.createElement("div",{className:"flex flex-col items-center "},a.a.createElement("img",{src:u.a,className:"max-h-24",alt:"Exorde logo"}),a.a.createElement("h3",{className:"font-brand pt-2 text-white-off"},"EXORDE")),a.a.createElement("div",null,a.a.createElement("h3",null,"Contact"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:exordedao@gmail.com","aria-label":"Exorde email"},"contact@exorde.foundation")))),a.a.createElement("div",null,a.a.createElement("h3",null,"Legal"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,a.a.createElement("a",{href:s.terms[t].link,target:"_blank",rel:"noreferrer","aria-label":"Legal mentions"},s.terms[t].label)),a.a.createElement("li",null,a.a.createElement("a",{href:s.privacyPolicy[t].link,target:"_blank",rel:"noreferrer","aria-label":"Legal mentions"},s.privacyPolicy[t].label)))),a.a.createElement("div",null,a.a.createElement("h3",null,"Socials"),a.a.createElement("ul",{className:"pt-5 flex flex-wrap justify-center md:justify-start md:w-32"},a.a.createElement("li",null,a.a.createElement("a",{href:c.c.twitter[t],target:"_blank",rel:"noreferrer","aria-label":"Twitter"},a.a.createElement(f,{brand:i.j}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.c.facebook,target:"_blank",rel:"noreferrer","aria-label":"Facebook"},a.a.createElement(f,{brand:i.d}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.c.linkedin,target:"_blank",rel:"noreferrer","aria-label":"Linkedin"},a.a.createElement(f,{brand:i.f}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.c.reddit,target:"_blank",rel:"noreferrer","aria-label":"Reddit"},a.a.createElement(f,{brand:i.h})))))),a.a.createElement("p",{className:"pt-10 text-center text-xs"},"© Exorde Labs - ",(new Date).getFullYear()))},m=n("Wbzz"),d=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],y=function(e){var t=e.open;return a.a.createElement("div",{id:"sidebar",className:(t?"visible":"invisible")+" bg-white absolute h-screen w-full top-0 pt-20 z-40"},a.a.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},d.map((function(e){return a.a.createElement("li",{className:"p-4"},e.label)}))))},b=function(){var e=Object(r.useState)(!1),t=e[0],n=(e[1],Object(r.useState)(0)),o=n[0],i=n[1],c=function(){return i(window.pageYOffset)};return Object(r.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"fixed pr-6 pl-6 pt-2 pb-2 h-20 w-full flex items-center z-50  "+(o>0?"shadow bg-white":"bg-transparent")},a.a.createElement(m.Link,{to:"/",className:"h-full min-w-max mr-auto flex items-end"},a.a.createElement("img",{src:u.a,alt:"exorde logo",className:"h-full"}),a.a.createElement("h3",{className:"font-brand text-blue ml-2 pb-1"},"EXORDE"))),a.a.createElement(y,{open:t}))},g=n("qhky"),h=n("YwZP"),v=n("fsQa"),E=n.n(v),w=function(e){var t=e.title,n=e.description,r=e.image,o=e.locale,i=e.canonical,l=e.alternatePages,u=E.a.find((function(e){return e.id===o})),s=Object(h.useLocation)().pathname,f=Object(m.useStaticQuery)(T).site.siteMetadata,p=f.defaultTitle,d=f.titleTemplate,y=f.defaultDescription,b=f.siteUrl,v=f.defaultImage,w=f.twitterUsername,O={title:t||p,description:n||y,image:r?""+b+r.publicURL:v,url:""+b+("/"===s?"":s)};return a.a.createElement(g.a,{title:O.title,titleTemplate:d},a.a.createElement("html",{lang:o}),a.a.createElement("meta",{name:"description",content:O.description}),a.a.createElement("meta",{name:"image",content:O.image}),i&&O.url&&a.a.createElement("link",{rel:"canonical",href:O.url}),l&&l.length>0&&l.map((function(e){var t=e.slug,n=e.locale;return a.a.createElement("link",{rel:"alternate",href:""+b+("/"===t?"":t),hrefLang:n})})),a.a.createElement("meta",{name:"og:site_name",content:"Exorde"}),O.url&&a.a.createElement("meta",{property:"og:url",content:O.url}),a.a.createElement("meta",{name:"og:type",content:"website"}),O.title&&a.a.createElement("meta",{property:"og:title",content:O.title}),O.description&&a.a.createElement("meta",{property:"og:description",content:O.description}),O.image&&a.a.createElement("meta",{property:"og:image",content:O.image}),O.image&&a.a.createElement("meta",{property:"og:image:secure_url",content:O.image}),u.ogLanguage&&a.a.createElement("meta",{name:"og:locale",content:u.ogLanguage}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:o&&c.c.twitter[o]?c.c.twitter[o]:w}),a.a.createElement("meta",{property:"twitter:domain",content:"exorde.network"}),O.url&&a.a.createElement("meta",{property:"twitter:url",content:O.url}),O.title&&a.a.createElement("meta",{name:"twitter:title",content:O.title}),O.description&&a.a.createElement("meta",{name:"twitter:description",content:O.description}),O.image&&a.a.createElement("meta",{name:"twitter:image",content:O.image}))},T="3897982121",O=n("0lfv"),x=function(){return Object(r.useEffect)((function(){var e=window.location.pathname,t=Object(O.a)(window.location.pathname);t!==e&&Object(m.navigate)(t,{replace:!0})}),[]),null};t.default=function(e){var t,n,r,i,c=e.data,l=e.pageContext,u=l.locale,s=l.alternatePages;return a.a.createElement(a.a.Fragment,null,!c.mdx.frontmatter.noindex&&a.a.createElement(w,{title:null===(t=c.mdx.frontmatter)||void 0===t?void 0:t.metadata.title,description:null===(n=c.mdx.frontmatter)||void 0===n?void 0:n.metadata.description,image:null===(r=c.mdx.frontmatter)||void 0===r?void 0:r.metadata.image,locale:u,canonical:null===(i=c.mdx.frontmatter)||void 0===i?void 0:i.metadata.canonical,alternatePages:s}),a.a.createElement("div",{className:"relative overflow-hidden"},a.a.createElement(x,null),a.a.createElement(b,null),a.a.createElement(o.MDXRenderer,{frontmatter:c.mdx.frontmatter,locale:u},c.mdx.body),a.a.createElement(p,{locale:u})))}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),a=n("RIqP"),o=n("lSNA"),i=n("8OQS");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=i(e,["scope","children"]),c=f(t),p=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:s},c),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return u.createElement(p,l({},o))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},fsQa:function(e,t){e.exports=[{id:"en",default:!0,path:"en",locale:"en-US",dateFormat:"DD/MM/YYYY",siteLanguage:"en",ogLanguage:"en_US"},{id:"fr",path:"fr",locale:"fr-FR",dateFormat:"DD/MM/YYYY",siteLanguage:"fr",ogLanguage:"fr_FR"}]},kLJV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg=="},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("E9XD");var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("bmMU"),p=n.n(f),m=n("q1tI"),d=n.n(m),y=n("YVoz"),b=n.n(y),g="bodyAttributes",h="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",O="href",x="http-equiv",j="innerHTML",L="itemprop",S="name",A="property",M="rel",I="src",C="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",D="encodeSpecialCharacters",R="onChangeClientState",z="titleTemplate",Y=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),_=[E.NOSCRIPT,E.SCRIPT,E.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=K(e,E.TITLE),n=K(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=K(e,P);return t||r||void 0},W=function(e){return K(e,R)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===M&&"canonical"===e[n].toLowerCase()||l===M&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==j&&c!==T&&c!==L||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=b()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},K=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),ce(f,p);var m={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,o),metaTags:ue(E.META,i),noscriptTags:ue(E.NOSCRIPT,c),scriptTags:ue(E.SCRIPT,u),styleTags:ue(E.STYLE,s)},d={},y={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(y[e]=m[e].oldTags)})),t&&t(),l(e,d,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case h:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===j||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(h,a,r),link:pe(E.LINK,o,r),meta:pe(E.META,i,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,l,r),style:pe(E.STYLE,u,r),title:pe(E.TITLE,{title:f,titleAttributes:p},r)}},de=s()((function(e){return{baseTag:Q([O,C],e),bodyAttributes:J(g,e),defer:K(e,N),encode:K(e,D),htmlAttributes:J(h,e),linkTags:V(E.LINK,[M,O],e),metaTags:V(E.META,[S,w,x,A,L],e),noscriptTags:V(E.NOSCRIPT,[j],e),onChangeClientState:W(e),scriptTags:V(E.SCRIPT,[I,j],e),styleTags:V(E.STYLE,[T],e),title:X(e),titleAttributes:J(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),ye=(a=de,i=o=function(e){function t(){return U(this,t),q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return F({},a,((t={})[r.type]=i,t.titleAttributes=F({},o),t));case E.BODY:return F({},a,{bodyAttributes:F({},o)});case E.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((n={})[r.type]=F({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Y[n]||n]=e[n],t}),t)}(Z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},sXyB:function(e,t,n){var r=n("SksO"),a=n("b48C");function o(t,n,i){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-components-layout-tsx-68139edebe7ebf7aeca3.js.map