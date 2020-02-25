(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{194:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},344:function(e,t,o){"use strict";o.r(t);var r=o(0),i=o(194),a=o(1);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===n(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:o[e]=function(){return s[e]}}))},d=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",u={excerpt:null,title:"Deployment"};var c=function(e){e.options[p]&&(e.options[p]=u),a.a.util.defineReactive(e.options,p,u),e.options.computed=d.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},f=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"deployment"}},[o("a",{attrs:{href:"#deployment","aria-hidden":"true"}},[e._v("#")]),e._v("Deployment")]),o("p",[e._v("To deploy a Gridsome site you need a "),o("strong",[e._v("static web host")]),e._v(".")]),o("h2",{attrs:{id:"git-based-deploying"}},[o("a",{attrs:{href:"#git-based-deploying","aria-hidden":"true"}},[e._v("#")]),e._v("Git-based deploying")]),o("p",[e._v("The best practice when working with Gridsome sites is to have your project hosted on a Git-service like GitHub and connect a deploy service that builds your site from a selected repository.")]),o("p",[e._v("These services are great for Git-based deploying:")]),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-netlify/"}},[e._v("Netlify")])])]),o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-amplify/"}},[e._v("AWS Amplify")])])]),o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-zeit-now/"}},[e._v("ZEIT Now")])])]),o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-gitlab/"}},[e._v("GitLab Pages")])])]),o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-github/"}},[e._v("GitHub Pages")])])])]),o("h2",{attrs:{id:"deploy-from-terminal"}},[o("a",{attrs:{href:"#deploy-from-terminal","aria-hidden":"true"}},[e._v("#")]),e._v("Deploy from terminal")]),o("p",[e._v("Many services let you deploy your static Gridsome site from the terminal. Here are some:")]),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-amazon-s3/"}},[e._v("Amazon S3")])])]),o("li",[o("p",[o("a",{attrs:{href:"/docs/deploy-to-zeit-now/"}},[e._v("ZEIT Now")])])])]),o("h2",{attrs:{id:"ftp-deploying"}},[o("a",{attrs:{href:"#ftp-deploying","aria-hidden":"true"}},[e._v("#")]),e._v("FTP deploying")]),o("p",[e._v("To host your site on traditional hosting via FTP you need to manually build your project from the terminal.")]),o("ul",[o("li",[e._v("Run "),o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("gridsome build")]),e._v(" in your project folder.")]),o("li",[e._v("This will generate a "),o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("dist")]),e._v(" folder where your generated site is located.")]),o("li",[e._v("Upload the content of this folder to any FTP to get started.")])]),o("h2",{attrs:{id:"drag--drop-deploying"}},[o("a",{attrs:{href:"#drag--drop-deploying","aria-hidden":"true"}},[e._v("#")]),e._v("Drag & drop deploying")]),o("p",[o("strong",[e._v("Netlify Drop")]),e._v(" lets you deploy a website with simply drag & drop.")]),o("ul",[o("li",[e._v("Run "),o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("gridsome build")]),e._v(" in your project folder.")]),o("li",[e._v("This will generate a "),o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("dist")]),e._v(" folder where your generated site is located.")]),o("li",[e._v("Visit "),o("a",{attrs:{href:"https://app.netlify.com/drop",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Netlify Drop")]),e._v(" and drop the "),o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("dist")]),e._v(" folder there.")])])])}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof c&&c(f);t.default=f.exports}}]);