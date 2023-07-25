"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},A=Object.keys(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)r=A[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,A=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,m=p["".concat(i,".").concat(g)]||p[g]||c[g]||A;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=r.length,a=new Array(A);a[0]=g;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<A;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>A,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const A={},a="vue-router\u914d\u7f6e",u={unversionedId:"route",id:"route",title:"vue-router\u914d\u7f6e",description:"\u4e0b\u8f7d\u8def\u7531\u63d2\u4ef6",source:"@site/docs/route.md",sourceDirName:".",slug:"/route",permalink:"/docs/route",draft:!1,editUrl:"https://github.com/xujiayue1111/xujiayue1111.github.io/docs/route.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"},next:{title:"CSS\u9694\u79bb",permalink:"/docs/\u524d\u7aef\u6df1\u5165/CSS\u9694\u79bb"}},i={},s=[{value:"index.ts",id:"indexts",level:3},{value:"routes.ts",id:"routests",level:3},{value:"\u5728\u5165\u53e3\u6587\u4ef6\u6ce8\u518c\u8def\u7531",id:"\u5728\u5165\u53e3\u6587\u4ef6\u6ce8\u518c\u8def\u7531",level:3},{value:"\u7ec4\u4ef6\u5185\u6d4b\u8bd5\u8def\u7531",id:"\u7ec4\u4ef6\u5185\u6d4b\u8bd5\u8def\u7531",level:3}],l={toc:s},p="wrapper";function c(e){let{components:t,...A}=e;return(0,o.kt)(p,(0,n.Z)({},l,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vue-router\u914d\u7f6e"},"vue-router\u914d\u7f6e"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u8def\u7531\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install vue-router\n")),(0,o.kt)("p",null,"\u5728src\u76ee\u5f55\u4e0b\u521b\u5efaviews\u6587\u4ef6\u5939\u5b58\u653e\u4e0d\u540c\u7684\u8def\u7531\u5e94\u8be5\u663e\u793a\u7684\u9875\u9762"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vue-router",src:r(9267).Z,title:"vue-router",width:"129",height:"137"})),(0,o.kt)("p",null,"\u5728src\u76ee\u5f55\u4e0b\u521b\u5efarouter\u6587\u4ef6\u5939\u5b58\u653e\u5bf9\u8def\u7531\u7684\u914d\u7f6e\uff0c\u5176\u4e2d\u7684index.ts\u914d\u7f6e\u8def\u7531\u6a21\u677f\uff0croutes.ts\u5b58\u653e\u5e38\u91cf\u8def\u7531\u3002"),(0,o.kt)("h3",{id:"indexts"},"index.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// \u901a\u8fc7vue-router\u63d2\u4ef6\u5b9e\u73b0\u6a21\u677f\u914d\u7f6e\nimport { createRouter, createWebHashHistory } from 'vue-router'\nimport { constantRoute } from './routes'\n// \u521b\u5efa\u8def\u7531\u5668 \u5728createRouter\u8def\u7531\u91cc\u9762\u5199\u4e00\u4e0b\u914d\u7f6e\u9879\nlet router = createRouter({\n    // \u8def\u7531\u6a21\u5f0fhash \u9700\u8981\u989d\u5916\u5f15\u5165\n    history:createWebHashHistory(),\n    routes:constantRoute,\n    // \u6dfb\u52a0\u6eda\u52a8\u884c\u4e3a\n    scrollBehavior(){\n        return {\n            left:0,\n            top:0\n        }\n    }\n})\nexport default router\n")),(0,o.kt)("h3",{id:"routests"},"routes.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// \u5bf9\u5916\u66b4\u9732\u5e38\u91cf\u8def\u7531\nexport const constantRoute = [\n    // \u767b\u5f55\u8def\u7531\n    {\n        path:'/login',\n        component:()=>import('@/views/login/index.vue'),\n        name:'login' //\u7ed9\u6bcf\u4e00\u4e2a\u8def\u7531\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4 \u547d\u540d\u8def\u7531\n    },\n    // \u6839\u76ee\u5f55\u8def\u7531\n    {\n        path:'/', //\u5c31\u662f\u6839\u76ee\u5f55\n        component:()=>import('@/views/home/index.vue'),\n        name:'layout'\n    },\n    {\n        // 404\n        path:'/404',\n        component:()=>import('@/views/404/index.vue'),\n        name:'404'\n    },\n    {\n        // \u4efb\u610f\u8def\u7531 \u4e0a\u9762\u7684\u4e09\u4e2a\u90fd\u6ca1\u6709\u5339\u914d\u4e0a\u5c31\u4f1a\u8bbf\u95ee\u8fd9\u4e2a\u4efb\u610f\u7684\u8def\u7531\n        path:'/:pathMatch(.*)',\n        redirect:'/404',\n        name:'Any'\n    }\n]\n")),(0,o.kt)("h3",{id:"\u5728\u5165\u53e3\u6587\u4ef6\u6ce8\u518c\u8def\u7531"},"\u5728\u5165\u53e3\u6587\u4ef6\u6ce8\u518c\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// \u5f15\u5165\u8def\u7531\u8fdb\u884c\u6ce8\u518c \nimport router from './router'\n// \u6ce8\u518c\u8def\u7531\napp.use(router)\n")),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\u5185\u6d4b\u8bd5\u8def\u7531"},"\u7ec4\u4ef6\u5185\u6d4b\u8bd5\u8def\u7531"),(0,o.kt)("p",null,"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"<router-view>"),"\u8fdb\u884c\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<template>\n  <div>\n    <router-view></router-view>\n  </div>\n</template>\n<script setup lang="ts">\n<\/script>\n<style scoped></style>\n')))}c.isMDXComponent=!0},9267:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);