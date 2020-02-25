(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{194:function(t,a,s){"use strict";a.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},370:function(t,a,s){"use strict";s.r(a);var n=s(0),e=s(194),r=s(1);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var a=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?a[t]=o[t]:s[t]=function(){return o[t]}}))},l=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",v={excerpt:null,title:"Querying data"};var _=function(t){t.options[u]&&(t.options[u]=v),r.a.util.defineReactive(t.options,u,v),t.options.computed=l.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},i=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("VueRemarkRoot",[s("h1",{attrs:{id:"querying-data"}},[s("a",{attrs:{href:"#querying-data","aria-hidden":"true"}},[t._v("#")]),t._v("Querying data")]),s("p",[t._v("You can query data from the GraphQL data layer into any "),s("strong",[t._v("Page, Template or Component")]),t._v(". Queries are added with a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<page-query>")]),t._v(" or "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<static-query>")]),t._v(" block in Vue Components.")]),s("ul",[s("li",[t._v("Use "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<page-query>")]),t._v(" in "),s("strong",[t._v("Pages & Templates")]),t._v(".")]),s("li",[t._v("Use "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<static-query>")]),t._v(" in "),s("strong",[t._v("Components")]),t._v(".")])]),s("h2",{attrs:{id:"how-to-query-with-graphql"}},[s("a",{attrs:{href:"#how-to-query-with-graphql","aria-hidden":"true"}},[t._v("#")]),t._v("How to query with GraphQL")]),s("p",[t._v("Working with GraphQL in Gridsome is easy and you don't need to know much about GraphQL. Here is an example of how to use GraphQL in "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("page-query")]),t._v(" for a page:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("edge in $page.posts.edges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("edge.node.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ edge.node.title }}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("posts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" allWordPressPost "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id\n        title\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("p",[s("strong",[t._v("With GraphQL you only query the data you need.")]),t._v(" This makes it easier and more tidy to work with data. A query always starts with "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("query")]),t._v(" and then something like "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("Posts")]),s("em",[t._v("(Can be anything)")]),t._v(". Then you write something like "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("posts: allWordPressPost")]),t._v(". The "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("allWordPressPost")]),t._v(" is the name of the GraphQL collection you want to query. The "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("posts:")]),t._v(" part is an optional alias. When using "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("posts")]),t._v(" as alias, your data will be available at "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("$page.posts")]),t._v(" (or "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("$static.posts")]),t._v(" if you use "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<static-query>")]),t._v("). Otherwise it will be available at "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("$page.allWordPressPost")]),t._v(".")]),s("p",[s("a",{attrs:{href:"https://graphql.org/learn/queries/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Learn more about GraphQL queries")])]),s("h2",{attrs:{id:"querying-collections"}},[s("a",{attrs:{href:"#querying-collections","aria-hidden":"true"}},[t._v("#")]),t._v("Querying collections")]),s("p",[t._v("You will notice that some of the root fields in your schema are prefixed with "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("all")]),t._v(". Use them to get lists of nodes in a collection.")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Argument")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[s("strong",[t._v("sortBy")])]),s("td",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v('"date"')])]),s("td",[t._v("Sort by a node field.")])]),s("tr",[s("td",[s("strong",[t._v("order")])]),s("td",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("DESC")])]),s("td",[t._v("Sort order ("),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("DESC")]),t._v(" or "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("ASC")]),t._v(").")])]),s("tr",[s("td",[s("strong",[t._v("sort")])]),s("td"),s("td",[t._v("Sort by multiple node fields.")])]),s("tr",[s("td",[s("strong",[t._v("skip")])]),s("td",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("0")])]),s("td",[t._v("How many nodes to skip.")])]),s("tr",[s("td",[s("strong",[t._v("limit")])]),s("td"),s("td",[t._v("How many nodes to get.")])]),s("tr",[s("td",[s("strong",[t._v("page")])]),s("td"),s("td",[t._v("Which page to get.")])]),s("tr",[s("td",[s("strong",[t._v("perPage")])]),s("td"),s("td",[t._v("How many nodes to show per page. Omitted if no "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("page")]),t._v(" argument is provided.")])]),s("tr",[s("td",[s("strong",[t._v("filter")])]),s("td",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("{}")])]),s("td",[s("a",{attrs:{href:"/docs/filtering-data/"}},[t._v("Read more")]),t._v(".")])])])]),s("h4",{attrs:{id:"find-nodes-sorted-by-title"}},[s("a",{attrs:{href:"#find-nodes-sorted-by-title","aria-hidden":"true"}},[t._v("#")]),t._v("Find nodes sorted by title")]),s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",{pre:!0,attrs:{class:"language-graphql"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sortBy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h4",{attrs:{id:"sort-a-collection-by-multiple-fields"}},[s("a",{attrs:{href:"#sort-a-collection-by-multiple-fields","aria-hidden":"true"}},[t._v("#")]),t._v("Sort a collection by multiple fields")]),s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",{pre:!0,attrs:{class:"language-graphql"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allPost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("by")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"featured"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("by")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h2",{attrs:{id:"querying-single-nodes"}},[s("a",{attrs:{href:"#querying-single-nodes","aria-hidden":"true"}},[t._v("#")]),t._v("Querying single nodes")]),s("p",[t._v("The other fields that do not start with "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("all")]),t._v(" are your single entries. They are typically used by templates to get data for the current page. You must provide either an "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("id")]),t._v(" or a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("path")]),t._v(" as an argument to find the node.")]),s("h4",{attrs:{id:"arguments"}},[s("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),t._v("Arguments")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Argument")]),s("th",[t._v("Default")]),s("th",[t._v("Description")])])]),s("tbody",[s("tr",[s("td",[s("strong",[t._v("id")])]),s("td",[s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("null")])]),s("td",[t._v("Get node by "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("id")]),t._v(".")])])])]),s("h4",{attrs:{id:"example-query"}},[s("a",{attrs:{href:"#example-query","aria-hidden":"true"}},[t._v("#")]),t._v("Example query")]),s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",{pre:!0,attrs:{class:"language-graphql"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h2",{attrs:{id:"query-data-in-page-components"}},[s("a",{attrs:{href:"#query-data-in-page-components","aria-hidden":"true"}},[t._v("#")]),t._v("Query data in Page components")]),s("p",[t._v("Every "),s("strong",[t._v("page")]),t._v(" can have a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<page-query>")]),t._v(" block with a GraphQL query\nto fetch data from data sources. The results will be stored in a\n"),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("$page")]),t._v(" property inside the page component.")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Latest blog posts"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("edge in $page.posts.edges"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("edge.node.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ edge.node.title }}\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("posts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" allWordPressPost "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    edges "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      node "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        id\n        title\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("page-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),s("h2",{attrs:{id:"query-data-in-any-component"}},[s("a",{attrs:{href:"#query-data-in-any-component","aria-hidden":"true"}},[t._v("#")]),t._v("Query data in any component")]),s("p",[t._v("Every "),s("strong",[t._v("Vue component")]),t._v(" can have a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<static-query>")]),t._v(" block with a GraphQL query to fetch data from data sources. The results will be stored in a "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("$static")]),t._v(" property inside the component. A "),s("code",{pre:!0,attrs:{class:"language-text"}},[t._v("<static-query>")]),t._v(" is named static as it cannot accept any variable.")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",{pre:!0,attrs:{class:"language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-html")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$static.post.content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token graphql"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    content\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("static-query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof _&&_(i);a.default=i.exports}}]);