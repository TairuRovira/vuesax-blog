(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(t,e,n){},114:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},117:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},123:function(t,e,n){},124:function(t,e,n){},125:function(t,e,n){},126:function(t,e,n){},127:function(t,e,n){},131:function(t,e,n){},133:function(t,e,n){},134:function(t,e,n){},202:function(t,e,n){"use strict";var i=n(113);n.n(i).a},206:function(t,e,n){"use strict";var i=n(114);n.n(i).a},207:function(t,e,n){"use strict";var i=n(115);n.n(i).a},208:function(t,e,n){"use strict";var i=n(116);n.n(i).a},212:function(t,e,n){"use strict";var i=n(117);n.n(i).a},214:function(t,e,n){"use strict";var i=n(118);n.n(i).a},216:function(t,e,n){"use strict";var i=n(119);n.n(i).a},217:function(t,e,n){"use strict";var i=n(120);n.n(i).a},218:function(t,e,n){"use strict";var i=n(121);n.n(i).a},219:function(t,e,n){"use strict";var i=n(122);n.n(i).a},220:function(t,e,n){"use strict";var i=n(123);n.n(i).a},221:function(t,e,n){"use strict";var i=n(124);n.n(i).a},222:function(t,e,n){"use strict";var i=n(125);n.n(i).a},223:function(t,e,n){"use strict";var i=n(126);n.n(i).a},224:function(t,e,n){"use strict";var i=n(127);n.n(i).a},238:function(t,e,n){"use strict";var i=n(131);n.n(i).a},240:function(t,e,n){"use strict";var i=n(133);n.n(i).a},241:function(t,e,n){"use strict";var i=n(134);n.n(i).a},258:function(t,e,n){"use strict";n.r(e);n(171);var i=n(0),s=n(3),a=n.n(s),r=n(95),o=(n(57),n(108),n(92),n(159),n(70),n(71),n(93),n(200),n(160),/#.*$/),l=/\.(md|html)$/,u=/\/$/,c=/^(https?:|mailto:|tel:)/;function h(t){return decodeURI(t).replace(o,"").replace(l,"")}function p(t){return c.test(t)}function d(t){if(p(t))return t;var e=t.match(o),n=e?e[0]:"",i=h(t);return u.test(i)?t:i+".html"+n}function f(t,e){var n=t.hash,i=function(t){var e=t.match(o);if(e)return e[0]}(e);return(!i||n===i)&&h(t.path)===h(e)}function v(t,e,n){n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=h(e),s=0;s<t.length;s++)if(h(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:d(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}})}]}(t);var o=r.sidebar||a.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map(function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return v(n,e,i);if(Array.isArray(e))return Object.assign(v(n,e[0],i),{title:e[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(v(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(function(e){return t(e,n,i,s+1)}),collapsable:!1!==e.collapsable}}(t,s,u)}):[]}return[]}function m(t){var e;return(t=t.map(function(t){return Object.assign({},t)})).forEach(function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(function(t){return 2===t.level})}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function _(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)});for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===t.path)return i[s+n]}}var x={name:"Blog",props:["sidebarItems"],data:function(){return{autor:null}},mounted:function(){var t=this;console.log(this.$page.frontmatter.autor),fetch("https://api.github.com/users/".concat(this.$page.frontmatter.autor)).then(function(t){return t.json()}).then(function(e){console.log(e),t.autor=e})},computed:{lastUpdated:function(){if(this.$page.lastUpdated){var t=new Date(this.$page.lastUpdated);return"".concat(t.toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"}),", ").concat(t.toLocaleTimeString(this.$lang))}},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?v(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?v(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,_(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,r=void 0===a?"master":a,o=t.docsRepo,l=void 0===o?e:o,c=h(this.$page.path);return u.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,s,r,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},publishDate:function(){return new Date(this.$frontmatter.date).toLocaleDateString(this.$lang,{year:"numeric",month:"long",day:"numeric"})}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+s}}},k=(n(202),n(1)),$=Object(k.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("div",{staticClass:"blog__header"},[n("div",{staticClass:"header-data"},[n("p",{staticClass:"publish-date"},[n("time",{attrs:{datetime:t.$frontmatter.date}},[t._v(t._s(t.publishDate))])]),t._v(" "),t.$page.readingTime?n("p",{staticClass:"timex"},[t._v("Time to read: "+t._s(t.$page.readingTime.text))]):t._e()]),t._v(" "),n("h1",{staticClass:"blog__title"},[t._v(t._s(t.$page.title))]),t._v(" "),n("div",{staticClass:"con-user-date"},[t.autor?n("div",{staticClass:"con-user"},[n("img",{attrs:{src:t.autor.avatar_url,alt:""}}),t._v("\n        by\n        "),n("a",{attrs:{target:"_blank",href:t.autor.html_url}},[t._v(t._s(t.autor.name))])]):t._e()])]),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("time",{staticClass:"time",attrs:{datetime:t.$page.lastUpdated}},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,"e7a67bc0",null).exports,C=(n(161),n(54),n(204),{props:{item:{required:!0}},computed:{link:function(){return d(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:p,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}}),w=Object(k.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  ")]):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,L={components:{NavLink:w},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},y=(n(206),Object(k.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}}),t._v(" "),n("NavLink",{staticClass:"action-button",attrs:{item:{link:"/tips/",text:"Tips"}}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{attrs:{custom:""}})],1)},[],!1,null,null,null).exports);function S(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(r.a)(t.children||[])):i.push(t)});for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===t.path)return i[s+n]}}var E={props:["sidebarItems"],computed:{lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?v(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,S(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?v(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,S(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,r=void 0===a?"master":a,o=t.docsRepo,l=void 0===o?e:o,c=h(this.$page.path);return u.test(c)?c+="README.md":c+=".md",l&&n?this.createEditLink(e,l,s,r,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(c.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(c.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+s}}},O=(n(207),Object(k.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{attrs:{custom:!1}}),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),T=(n(208),Object(k.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),j=n(255),I=(n(162),{props:["options"],mounted:function(){this.initialize(this.options,this.$lang)},methods:{initialize:function(t,e){Promise.all([Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,256,7)),Promise.all([n.e(0),n.e(3)]).then(n.t.bind(null,257,7))]).then(function(n){var i=Object(j.a)(n,1)[0];i=i.default;var s=t.algoliaOptions,a=void 0===s?{}:s;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(a.facetFilters||[])},a)}))})},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}}}),U=(n(212),Object(k.a)(I,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input"}})])}],!1,null,null,null).exports),D=(n(213),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site,n=e.pages,i=e.themeConfig.searchMaxSuggestions||5,s=this.$localePath,a=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],o=0;o<n.length&&!(r.length>=i);o++){var l=n[o];if(this.getPageLocalePath(l)===s)if(a(l))r.push(l);else if(l.headers)for(var u=0;u<l.headers.length&&!(r.length>=i);u++){var c=l.headers[u];a(c)&&r.push(Object.assign({},l,{path:l.path+"#"+c.slug,header:c}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),N=(n(214),Object(k.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),P=(n(215),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),M=(n(216),Object(k.a)(P,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null).exports),B={components:{NavLink:w,DropdownTransition:M},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},H=(n(217),{components:{NavLink:w,DropdownLink:Object(k.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some(function(t){return t.path===r})||(r=a)),{text:l,link:r}})};return[].concat(Object(r.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(b(t),{items:(t.items||[]).map(b)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),W=(n(218),Object(k.a)(H,function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length||this.repoLink?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)}),0):this._e()},[],!1,null,null,null).exports);function A(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var R={components:{SidebarButton:T,NavLinks:W,SearchBox:N,AlgoliaSearchBox:U},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(A(this.$el,"paddingLeft"))+parseInt(A(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},G=(n(219),Object(k.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[n("img",{staticClass:"logo",attrs:{src:t.$withBase("/vuesax-logo-vertical.png"),alt:t.$siteTitle}}),t._v(" "),n("span",{staticClass:"tag--blogx"},[t._v("Blog")])]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),!1!==t.$site.themeConfig.search?n("SearchBox"):t._e()],1)],1)},[],!1,null,null,null).exports);function q(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function z(t,e,n,i,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var r=f(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[q(t,n+"#"+e.slug,e.title,r),z(t,e.children,n,i,s,a+1)])}))}var F={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,s=n.$site,a=n.$route,r=e.props.item,l=f(a,r.path),u="auto"===r.type?l||r.children.some(function(t){return f(a,r.basePath+"#"+t.slug)}):l,c=q(t,r.path,r.title||r.path,u),h=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:s.themeConfig.sidebarDepth,p=null==h?1:h,d=!!s.themeConfig.displayAllHeaders;return"auto"===r.type?[c,z(t,r.children,r.basePath,a,p)]:(u||d)&&r.headers&&!o.test(r.path)?[c,z(t,m(r.headers),r.path,a,p)]:c}},K=(n(220),Object(k.a)(F,void 0,void 0,!1,null,null,null).exports),J={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:K,DropdownTransition:M}};n(221);var V={components:{SidebarGroup:Object(k.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null).exports,SidebarLink:K,NavLinks:W},props:["items","open"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return f(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return f(this.$route,t.path)}}},Y=(n(222),Object(k.a)(V,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar",class:{open:t.open}},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),X={data:function(){return{uls:[{title:"Social",items:[{text:"GitHub",link:"https://github.com/lusaxweb/vuesax"},{text:"Discord",link:"https://discord.gg/9dsKtvB"},{text:"Twitter",link:"https://twitter.com/vuesax"},{text:"Facebook",link:"https://www.facebook.com/vuesax/"},{text:"Behance",link:"https://www.behance.net/ManuelRovira"},{text:"Dribbble",link:"https://dribbble.com/ManuelRovira"},{text:"Codepen",link:"https://codepen.io/lusaxweb/"}]},{title:"Help",items:[{text:"Issues",link:"https://github.com/lusaxweb/vuesax/issues"},{text:"Edit Page",link:"https://github.com/lusaxweb/vuesax/tree/master/docs"},{text:"Latest Releases",link:"https://github.com/lusaxweb/vuesax/releases"},{text:"Stackoverflow",link:"https://stackoverflow.com/questions/tagged/vuesax"},{text:"FAQ",link:"https://github.com/lusaxweb/vuesax/wiki"}]},{title:"More",items:[{text:"Lusaxweb",link:"http://www.lusaxweb.com.ve/"},{text:"Email",link:"mailto:vuesax@gmail.com"},{text:"Chat",link:"https://gitter.im/vuesax/Lobby"},{text:"Pull request",link:"https://github.com/lusaxweb/vuesax/pulls"},{text:"Codepen Template",link:"https://codepen.io/lusaxweb/pen/mxMKYr"}]}]}}},Q=(n(223),Object(k.a)(X,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footerx"},[n("div",{staticClass:"con-uls"},t._l(t.uls,function(e,i){return n("ul",{key:i},[n("li",{staticClass:"title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),t._l(e.items,function(e,i){return n("li",{key:i},[n("a",{attrs:{target:"_blank",href:e.link}},[n("span",[t._v("\n            "+t._s(e.text)+"\n          ")])])])})],2)}),0),t._v(" "),n("p",{staticClass:"copy"},[t._v("\n    © 2019, Lusaxweb.\n  ")])])},[],!1,null,null,null).exports),Z={render:function(t){return t("div",{class:"carbon-ads"})},mounted:function(){this.load()},watch:{$route:function(t,e){this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},methods:{load:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CK7DC27J&placement=lusaxwebgithubio",this.$el.appendChild(t)}}},tt=(n(224),Object(k.a)(Z,void 0,void 0,!1,null,null,null).exports),et=n(225),nt={props:{updateEvent:{type:Object,default:null}},computed:{popupConfig:function(){for(var t=0,e=[this.$themeLocaleConfig,this.$site.themeConfig];t<e.length;t++){var n=e[t].serviceWorker;if(n&&n.updatePopup)return"object"===Object(et.a)(n.updatePopup)?n.updatePopup:{}}return null},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||"New content is available."},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||"Refresh"}},methods:{reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},it=(n(238),{components:{Blog:$,Home:y,Page:O,Sidebar:Y,Navbar:G,SWUpdatePopup:Object(k.a)(nt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n    "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()])},[],!1,null,null,null).exports,Footerx:Q,Carbon:tt},data:function(){return{isSidebarOpen:!1,swUpdateEvent:null,open:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return g(this.$page,this.$route,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1}),window.addEventListener("scroll",this.onScroll),a.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||a.a.start(),n()}),this.$router.afterEach(function(){a.a.done(),t.isSidebarOpen=!1}),this.$on("sw-updated",this.onSWUpdated)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onSWUpdated:function(t){this.swUpdateEvent=t}}}),st=(n(239),n(240),n(241),Object(k.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),t.sidebarItems.length?n("button",{staticClass:"open-side",class:{"btn-hidden":!t.open},on:{click:function(e){t.open=!t.open}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M296 136c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0 240c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40zm0-120c0-22.002-17.998-40-40-40s-40 17.998-40 40 17.998 40 40 40 40-17.998 40-40z"}})])]):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{open:t.open,items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),n("Carbon"),t._v(" "),t.$page.frontmatter.blog||t.$page.frontmatter.tips?n("Blog",{attrs:{"sidebar-items":t.sidebarItems}}):t.$page.frontmatter.layout?n("div",{staticClass:"custom-layout"},[n(t.$page.frontmatter.layout,{tag:"component"})],1):t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2),t._v(" "),n("SWUpdatePopup",{attrs:{updateEvent:t.swUpdateEvent}}),t._v(" "),n("Footerx")],1)},[],!1,null,null,null));e.default=st.exports}}]);