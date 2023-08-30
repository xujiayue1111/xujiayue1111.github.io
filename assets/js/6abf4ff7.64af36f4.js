"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>x});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},v="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),v=l(n),d=r,x=v["".concat(o,".").concat(d)]||v[d]||s[d]||a;return n?i.createElement(x,u(u({ref:t},c),{},{components:n})):i.createElement(x,u({ref:t},c))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[v]="string"==typeof e?e:r,u[1]=p;for(var l=2;l<a;l++)u[l]=n[l];return i.createElement.apply(null,u)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={},u=void 0,p={unversionedId:"\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b",id:"\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b",title:"vuex\u548cpinia\u7684\u533a\u522b",description:"pinia\u548cvuex\u7684\u533a\u522b",source:"@site/docs/\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b.md",sourceDirName:"\u524d\u7aef\u6df1\u5165",slug:"/\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b",permalink:"/docs/\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b",draft:!1,editUrl:"https://github.com/xujiayue1111/xujiayue1111.github.io/docs/\u524d\u7aef\u6df1\u5165/vuex\u548cpinia\u7684\u533a\u522b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vite\u4e0ewebpack\u7684\u533a\u522b",permalink:"/docs/\u524d\u7aef\u6df1\u5165/vite\u4e0ewebpack\u7684\u533a\u522b"},next:{title:"\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20",permalink:"/docs/\u524d\u7aef\u6df1\u5165/\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20"}},o={},l=[{value:"pinia\u548cvuex\u7684\u533a\u522b",id:"pinia\u548cvuex\u7684\u533a\u522b",level:2},{value:"Vuex \u548c Pinia \u7684\u4f18\u7f3a\u70b9",id:"vuex-\u548c-pinia-\u7684\u4f18\u7f3a\u70b9",level:2},{value:"Pinia\u7684\u4f18\u70b9",id:"pinia\u7684\u4f18\u70b9",level:3},{value:"Pinia\u7684\u7f3a\u70b9",id:"pinia\u7684\u7f3a\u70b9",level:3},{value:"vuex\u7684\u4f18\u70b9",id:"vuex\u7684\u4f18\u70b9",level:3},{value:"vuex\u7684\u7f3a\u70b9",id:"vuex\u7684\u7f3a\u70b9",level:3},{value:"\u4f55\u65f6\u4f7f\u7528Pinia\uff0c\u4f55\u65f6\u4f7f\u7528Vuex",id:"\u4f55\u65f6\u4f7f\u7528pinia\u4f55\u65f6\u4f7f\u7528vuex",level:3}],c={toc:l},v="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pinia\u548cvuex\u7684\u533a\u522b"},"pinia\u548cvuex\u7684\u533a\u522b"),(0,r.kt)("p",null,"pinia\u5b83\u6ca1\u6709mutation\uff0c\u4ed6\u53ea\u6709state\uff0cgetters\uff0caction\u3010\u540c\u6b65\u3001\u5f02\u6b65\u3011\u4f7f\u7528\u5b83\u6765\u4fee\u6539state\u6570\u636e\u3002\npinia\u4ed6\u9ed8\u8ba4\u4e5f\u662f\u5b58\u5165\u5185\u5b58\u4e2d\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u672c\u5730\u5b58\u50a8\uff0c\u5728\u914d\u7f6e\u4e0a\u6bd4vuex\u9ebb\u70e6\u4e00\u70b9\u3002\npinia\u8bed\u6cd5\u4e0a\u6bd4vuex\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u4f7f\u7528\uff0c\u7075\u6d3b\u3002\npinia\u6ca1\u6709modules\u914d\u7f6e\uff0c\u6bcf\u4e00\u4e2a\u72ec\u7acb\u7684\u4ed3\u5e93\u90fd\u662fdefineStore\u751f\u6210\u51fa\u6765\u7684\u3002\npinia state\u662f\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u548c\u7ec4\u4ef6\u7684data\u662f\u4e00\u6837\u7684\u8bed\u6cd5\u3002"),(0,r.kt)("h2",{id:"vuex-\u548c-pinia-\u7684\u4f18\u7f3a\u70b9"},"Vuex \u548c Pinia \u7684\u4f18\u7f3a\u70b9"),(0,r.kt)("h3",{id:"pinia\u7684\u4f18\u70b9"},"Pinia\u7684\u4f18\u70b9"),(0,r.kt)("p",null,"\u5b8c\u6574\u7684 TypeScript \u652f\u6301\uff1a\u4e0e\u5728 Vuex \u4e2d\u6dfb\u52a0 TypeScript \u76f8\u6bd4\uff0c\u6dfb\u52a0 TypeScript \u66f4\u5bb9\u6613\n\u6781\u5176\u8f7b\u5de7(\u4f53\u79ef\u7ea6 1KB)\nstore \u7684 action \u88ab\u8c03\u5ea6\u4e3a\u5e38\u89c4\u7684\u51fd\u6570\u8c03\u7528\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 dispatch \u65b9\u6cd5\u6216 MapAction \u8f85\u52a9\u51fd\u6570\uff0c\u8fd9\u5728Vuex\u4e2d\u5f88\u5e38\u89c1\n\u652f\u6301\u591a\u4e2aStore\n\u652f\u6301 Vue devtools\u3001SSR \u548c webpack \u4ee3\u7801\u62c6\u5206"),(0,r.kt)("h3",{id:"pinia\u7684\u7f3a\u70b9"},"Pinia\u7684\u7f3a\u70b9"),(0,r.kt)("p",null,"\u4e0d\u652f\u6301\u65f6\u95f4\u65c5\u884c\u548c\u7f16\u8f91\u7b49\u8c03\u8bd5\u529f\u80fd"),(0,r.kt)("h3",{id:"vuex\u7684\u4f18\u70b9"},"vuex\u7684\u4f18\u70b9"),(0,r.kt)("p",null,"\u652f\u6301\u8c03\u8bd5\u529f\u80fd\uff0c\u5982\u65f6\u95f4\u65c5\u884c\u548c\u7f16\u8f91"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e\u5927\u578b\u3001\u9ad8\u590d\u6742\u5ea6\u7684Vue.js\u9879\u76ee"),(0,r.kt)("h3",{id:"vuex\u7684\u7f3a\u70b9"},"vuex\u7684\u7f3a\u70b9"),(0,r.kt)("p",null,"\u4ece Vue 3 \u5f00\u59cb\uff0cgetter \u7684\u7ed3\u679c\u4e0d\u4f1a\u50cf\u8ba1\u7b97\u5c5e\u6027\u90a3\u6837\u7f13\u5b58"),(0,r.kt)("p",null,"Vuex 4\u6709\u4e00\u4e9b\u4e0e\u7c7b\u578b\u5b89\u5168\u76f8\u5173\u7684\u95ee\u9898"),(0,r.kt)("h3",{id:"\u4f55\u65f6\u4f7f\u7528pinia\u4f55\u65f6\u4f7f\u7528vuex"},"\u4f55\u65f6\u4f7f\u7528Pinia\uff0c\u4f55\u65f6\u4f7f\u7528Vuex"),(0,r.kt)("p",null,"\u4e2a\u4eba\u611f\u89c9\uff1a"),(0,r.kt)("p",null,"\u7531\u4e8ePinea\u662f\u8f7b\u91cf\u7ea7\u7684\uff0c\u4f53\u79ef\u5f88\u5c0f\uff0c\u5b83\u9002\u5408\u4e8e\u4e2d\u5c0f\u578b\u5e94\u7528\u3002\u5b83\u4e5f\u9002\u7528\u4e8e\u4f4e\u590d\u6742\u5ea6\u7684Vue.js\u9879\u76ee\uff0c\u56e0\u4e3a\u4e00\u4e9b\u8c03\u8bd5\u529f\u80fd\uff0c\u5982\u65f6\u95f4\u65c5\u884c\u548c\u7f16\u8f91\u4ecd\u7136\u4e0d\u88ab\u652f\u6301\u3002\n\u5c06 Vuex \u7528\u4e8e\u4e2d\u5c0f\u578b Vue.js \u9879\u76ee\u662f\u8fc7\u5ea6\u7684\uff0c\u56e0\u4e3a\u5b83\u91cd\u91cf\u7ea7\u7684\uff0c\u5bf9\u6027\u80fd\u964d\u4f4e\u6709\u5f88\u5927\u5f71\u54cd\u3002\u56e0\u6b64\uff0cVuex \u9002\u7528\u4e8e\u5927\u89c4\u6a21\u3001\u9ad8\u590d\u6742\u5ea6\u7684 Vue.js \u9879\u76ee\u3002"),(0,r.kt)("p",null,"pinia\u548cvuex\u5728vue2\u548cvue3\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u4e00\u822c\u6765\u8bf4vue2\u4f7f\u7528vuex\uff0cvue3\u4f7f\u7528pinia\u3002"))}s.isMDXComponent=!0}}]);