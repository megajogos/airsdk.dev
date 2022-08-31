"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[3940],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(4137));const i={title:"Release 33.1.1.929",authors:["marchbold"],tags:["airsdk","updates"]},o=void 0,s={permalink:"/news/2022/08/05/air-release",source:"@site/news/2022-08-05-air-release.md",title:"Release 33.1.1.929",description:"AIR SDK 33.1.1.929 has been released by Harman.",date:"2022-08-05T00:00:00.000Z",formattedDate:"August 5, 2022",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:.755,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 33.1.1.929",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 33.1.1.889",permalink:"/news/2022/06/14/air-release"}},l={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AIR SDK 33.1.1.929")," has been released by Harman.  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/33.1.1.929/release-notes/Release_Notes_AIR_SDK_33.1.1.929.pdf"},"Release Notes"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/33.1.1.929"},"Download"),"  ")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AIR-5964: Reverting the merging of ABC blocks in SWCs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1963"},"github-1963"),": Allowing the app descriptor to limit the Direct3D version level (using a new descriptor option\n",(0,n.kt)("inlineCode",{parentName:"li"},"<maxD3D>")," under the ",(0,n.kt)("inlineCode",{parentName:"li"},"<windows>")," section)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2014"},"github-2014"),": Adding 'ignore' option for autoOrients to avoid using OrientationEventListener")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/402"},"github-402"),": Sending ByteArray from Worker cause Adobe Scout show incorrect memory consumption"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1950"},"github-1950"),": Cleaning up local JNI references to avoid Java OutOfMemory errors"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1965"},"github-1965"),": Fixing runtimeClases.jar file format to remove directory entries, and enabling jetifier"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1973"},"github-1973"),": Removing exe and dll files from the Linux and macOS SDK zips"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1974"},"github-1974"),": Reworking omit-trace-statements to ensure the compiler still works within Flash Builder"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2010"},"github-2010"),": Fixing error in Rectangle.unionToOutput if 'this' object is the same as 'output' parameter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2042"},"github-2042"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2047"},"github-2047"),": Fixing problem with autoOrients setting being skipped")))}m.isMDXComponent=!0}}]);