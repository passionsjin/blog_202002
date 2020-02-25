(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{194:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},318:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(194),n=r(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},l=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",c={excerpt:null,title:"Fast by default"};var u=function(e){e.options[d]&&(e.options[d]=c),n.a.util.defineReactive(e.options,d,c),e.options.computed=p.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"fast-by-default"}},[r("a",{attrs:{href:"#fast-by-default","aria-hidden":"true"}},[e._v("#")]),e._v("Fast by default")]),r("blockquote",[r("p",[e._v("Gridsome builds ultra performance into every page automatically. You get code splitting, asset optimization, progressive images, and link prefetching out of the box. With Gridsome you get almost perfect page speed scores by default.")])]),r("h2",{attrs:{id:"what-makes-gridsome-sites-fast"}},[r("a",{attrs:{href:"#what-makes-gridsome-sites-fast","aria-hidden":"true"}},[e._v("#")]),e._v("What makes Gridsome sites fast?")]),r("ol",[r("li",[r("a",{attrs:{href:"#pre-rendered-html"}},[e._v("Pre-rendered HTML")]),e._v(". Nothing beats static content in speed.")]),r("li",[r("a",{attrs:{href:"#the-prpl-pattern"}},[e._v("Automatic Code Splitting")]),e._v(" so only what you need is loaded per page.")]),r("li",[r("a",{attrs:{href:"#the-prpl-pattern"}},[e._v("Follows the PRPL-pattern")]),e._v(" for instant page loads.")]),r("li",[r("a",{attrs:{href:"#smart-link-prefetching"}},[e._v("Smart link prefetching")]),e._v(" that uses Intersection Observer to load next pages.")]),r("li",[r("a",{attrs:{href:"#progressive-images"}},[e._v("Progressive Images")]),e._v(" with automatic image compression and lazy loading.")]),r("li",[r("a",{attrs:{href:"#progressive-images"}},[e._v("Vue.js SPA")]),e._v(" for fast browsing with no page refresh.")])]),r("h2",{attrs:{id:"pre-rendered-html"}},[r("a",{attrs:{href:"#pre-rendered-html","aria-hidden":"true"}},[e._v("#")]),e._v("Pre-rendered HTML")]),r("p",[e._v("Gridsome pre-renders HTML at build time (Generates static files). Gridsome sites can be hosted anywhere, even on a CDN. There is no need for a Node.js server.")]),r("p",[e._v("A static site gives you many benefits:")]),r("ul",[r("li",[r("p",[e._v("⚡️ "),r("strong",[e._v("Better Performance.")]),e._v(" Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.")])]),r("li",[r("p",[e._v("⚡️ "),r("strong",[e._v("Higher Security.")]),e._v(" With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.")])]),r("li",[r("p",[e._v("⚡️ "),r("strong",[e._v("Cheaper, Easier Scaling.")]),e._v(" When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.")])])]),r("h2",{attrs:{id:"automatic-code-splitting"}},[r("a",{attrs:{href:"#automatic-code-splitting","aria-hidden":"true"}},[e._v("#")]),e._v("Automatic Code splitting")]),r("p",[e._v("Every "),r("code",{pre:!0,attrs:{class:"language-text"}},[e._v("import")]),e._v(" you declare gets bundled and served with each page. That means pages never load unnecessary code while browsing around.")]),r("h2",{attrs:{id:"the-prpl-pattern"}},[r("a",{attrs:{href:"#the-prpl-pattern","aria-hidden":"true"}},[e._v("#")]),e._v("The PRPL pattern")]),r("p",[e._v("PRPL is a pattern for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch. It stands for:")]),r("ul",[r("li",[r("strong",[e._v("Push")]),e._v(" critical resources for the initial URL route.")]),r("li",[r("strong",[e._v("Render")]),e._v(" initial route.")]),r("li",[r("strong",[e._v("Pre-cache")]),e._v(" remaining routes.")]),r("li",[r("strong",[e._v("Lazy-load")]),e._v(" and create remaining routes on demand.")])]),r("p",[e._v("Learn more about "),r("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("PRPL pattern")])]),r("h2",{attrs:{id:"smart-link-prefetching"}},[r("a",{attrs:{href:"#smart-link-prefetching","aria-hidden":"true"}},[e._v("#")]),e._v("Smart link prefetching")]),r("p",[e._v("Gridsome prefetches internal links in the background so browsing around goes insanely fast. It uses the built-in "),r("code",{pre:!0,attrs:{class:"language-text"}},[e._v("<g-link>")]),e._v(" component and "),r("strong",[e._v("Intersection Observer")]),e._v(" to prefetch when the link is in view.")]),r("p",[e._v("Gridsome builds two files of every page. A static HTML and a small JavaScript file. When the website hydrates into a Vue.js-SPA, the link prefetching only loads the JavaScript to render the next page. This results in a faster and smoother browsing experience.")]),r("p",[r("a",{attrs:{href:"/docs/linking/"}},[e._v("Learn more about "),r("strong",[e._v("g-link")]),e._v(" here")]),e._v(".")]),r("h2",{attrs:{id:"progressive-images"}},[r("a",{attrs:{href:"#progressive-images","aria-hidden":"true"}},[e._v("#")]),e._v("Progressive Images")]),r("p",[e._v("Gridsome has a built-in "),r("code",{pre:!0,attrs:{class:"language-text"}},[e._v("<g-image>")]),e._v(" component with automatic progressive image support. In "),r("strong",[e._v("development")]),e._v(" it lets you do real-time image processing, like resizing and cropping.")]),r("p",[e._v("In production, the "),r("code",{pre:!0,attrs:{class:"language-text"}},[e._v("<g-image>")]),e._v(" is served as an ultra-compressed image before the image is lazy-loaded when in view by using "),r("strong",[e._v("Intersection Observer")]),e._v(".")]),r("p",[r("a",{attrs:{href:"/docs/images/"}},[e._v("Learn more about "),r("strong",[e._v("g-image")]),e._v(" here")])]),r("h2",{attrs:{id:"vuejs-spa"}},[r("a",{attrs:{href:"#vuejs-spa","aria-hidden":"true"}},[e._v("#")]),e._v("Vue.js SPA")]),r("p",[e._v("The "),r("code",{pre:!0,attrs:{class:"language-text"}},[e._v("gridsome build")]),e._v(" command generates "),r("strong",[e._v("SEO-friendly HTML files")]),e._v(" that can be hosted anywhere. These HTML files are optimized to load as fast as possible. After the HTML is loaded Vue.js takes over the HTML and "),r("strong",[e._v("hydrates into a fully Vue-powered SPA.")])]),r("p",[r("strong",[e._v("When SPA kicks in it only loads small code-splitted JS chunks for next pages.")])]),r("p",[r("a",{attrs:{href:"https://ssr.vuejs.org/guide/hydration.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Learn more about Vue.js and Client Side hydration")])])])}),[],!1,null,null,null);"function"==typeof l&&l(v),"function"==typeof u&&u(v);t.default=v.exports}}]);