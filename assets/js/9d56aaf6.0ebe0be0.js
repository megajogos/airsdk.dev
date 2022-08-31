"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4553],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const o={title:"Community and Showcase Sections",authors:["marchbold"],tags:["airsdk","updates"]},s=void 0,i={permalink:"/news/2021/10/14/new-additions",source:"@site/news/2021-10-14-new-additions.md",title:"Community and Showcase Sections",description:"Due to a lot of requests over the previous months we have added several new sections to promote developers and better direct people to the current resources available for AIR.",date:"2021-10-14T00:00:00.000Z",formattedDate:"October 14, 2021",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.075,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Community and Showcase Sections",authors:["marchbold"],tags:["airsdk","updates"]},prevItem:{title:"Release 33.1.1.698",permalink:"/news/2021/12/02/new-air-release"},nextItem:{title:"Welcome",permalink:"/news/welcome"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Due to a lot of requests over the previous months we have added several new sections to promote developers and better direct people to the current resources available for AIR."),(0,a.kt)("p",null,"We also have started creating a detailed ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/getting-started"},'"Getting Started"')," guide to walk new users through the installation of the AIR SDK and setup of a development environment."),(0,a.kt)("p",null,"The first of these is the ",(0,a.kt)("a",{parentName:"p",href:"/community"},"Community")," section. This section is aimed to direct developers to the resources and community channels that are available and active on the net."),(0,a.kt)("p",null,"We have initially added three of what we believe are the most important resources currently:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues"},"Issue Tracker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/discussions"},"Discussion Forum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://forum.starling-framework.org/"},"Starling Forum"))),(0,a.kt)("p",null,"And we will be adding the ever present stackoverflow reference as well. If you believe anything else should be added, please let us know! "),(0,a.kt)("p",null,"The second is the ",(0,a.kt)("a",{parentName:"p",href:"/showcase"},"Showcase")," section. The showcase is designed to be a place for AIR developers to not only promote their work but promote the AIR platform and show what is possible using the AIR SDK. You can add your own application through a pull request to the repository (or you can just email me your details)."),(0,a.kt)("p",null,"If you have any feedback on the tutorials or guides we are writing (or if you would like to contribute) please reach out!"))}p.isMDXComponent=!0}}]);