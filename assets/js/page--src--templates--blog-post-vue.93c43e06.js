(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(t,e,a){},199:function(t,e,a){"use strict";var s=a(195);a.n(s).a},201:function(t,e,a){"use strict";var s={props:{post:{type:Object,required:!0}}},n=(a(199),a(0)),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t.post.author?[t._v("\n      Posted "+t._s(t.post.date)+" by\n      "),t._l(t.post.author,(function(e,s){return[s&&s===t.post.author.length-1?a("span",[t._v(" and ")]):s>0?a("span",[t._v(", ")]):t._e(),e.avatar?a("g-image",{staticClass:"author-image",attrs:{alt:e.title,src:e.avatar}}):t._e(),a("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])]})),t.post.timeToRead?a("span",[t._v(" - ")]):t._e()]:t._e(),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)])}),[],!1,null,null,null);e.a=o.exports},213:function(t,e){},280:function(t,e,a){"use strict";var s=a(213),n=a.n(s);e.default=n.a},373:function(t,e,a){"use strict";a.r(e);var s={components:{PostMeta:a(201).a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.excerpt}]}}},n=a(0),o=a(280),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Section",{attrs:{container:"md",dots:"true"}},[a("div",{staticClass:"post-header container-md text-center mb-x2"},[a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.title)}}),a("PostMeta",{attrs:{post:t.$page.post}})],1),a("div",{staticClass:"post-content post mb-x2"},[t.$page.post.poster?a("g-image",{attrs:{quality:"1",width:"600",src:t.$page.post.poster}}):t._e(),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"lead",domProps:{innerHTML:t._s(t.$page.post.excerpt)}}),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.content)}})],1)])],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(i);e.default=i.exports}}]);