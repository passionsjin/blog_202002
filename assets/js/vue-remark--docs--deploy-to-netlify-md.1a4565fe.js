(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{194:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},309:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o(194),r=o(1);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},u=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===a(s[t])&&"function"==typeof s[t].render?e[t]=s[t]:o[t]=function(){return s[t]}}))},l=r.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"Deploy to Netlify"};var d=function(t){t.options[c]&&(t.options[c]=p),r.a.util.defineReactive(t.options,c,p),t.options.computed=l.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},f=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h1",{attrs:{id:"deploy-to-netlify"}},[o("a",{attrs:{href:"#deploy-to-netlify","aria-hidden":"true"}},[t._v("#")]),t._v("Deploy to Netlify")]),o("p",[t._v("Netlify is an excellent solution for deploying and hosting Gridsome sites. Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps. They provide continuous deployment (Git-triggered builds), an intelligent, global CDN, full DNS (including custom domains), automated HTTPS, asset acceleration, and more.")]),o("p",[t._v("Their free tier includes unlimited personal and commercial projects, HTTPS, continuous deployment from public or private repos and more.")]),o("p",[t._v("To deploy your Gridsome site to Netlify, go to the create a new site page, select your project repo from GitHub, GitLab, or Bitbucket.")]),o("p",[t._v("Add these build settings:")]),o("ul",[o("li",[o("strong",[t._v("Build Command:")]),o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("gridsome build")])]),o("li",[o("strong",[t._v("Publish directory:")]),o("code",{pre:!0,attrs:{class:"language-text"}},[t._v("dist")])])])])}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof d&&d(f);e.default=f.exports}}]);