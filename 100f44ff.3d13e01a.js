(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),o=t.n(n),r=(t(22),function(e){var a=e.type,t=e.children,n=a;return"tip"===a&&(n="success"),"note"===a&&(n="secondary"),o.a.createElement("div",{className:"admonition admonition-"+a+" alert alert--"+n},o.a.createElement("div",{className:"admonition-heading"},o.a.createElement("h5",null,o.a.createElement("span",{className:"admonition-icon"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),a.toLowerCase())),o.a.createElement("div",{className:"admonition-content"},o.a.createElement("p",null,t)))}),i=function(){return o.a.createElement(r,{type:"note"},"See ",o.a.createElement("a",{href:"/demos/#demo-environment"},o.a.createElement("b",null,o.a.createElement("i",null,"here")))," for more on the ",o.a.createElement("code",null,"GLOBAL_VARS")," we use in our demos")}},64:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return m}));var n=t(3),o=t(7),r=(t(0),t(140)),i=(t(215),t(211)),s={id:"basic",title:"Basic Tree Data"},c={unversionedId:"tree-data/basic",id:"tree-data/basic",isDocsHomePage:!1,title:"Basic Tree Data",description:"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions.",source:"@site/demos/tree-data/basic.mdx",slug:"/tree-data/basic",permalink:"/demos/tree-data/basic",version:"current",sidebar:"sidebar",previous:{title:"Basic Styling",permalink:"/demos/style/basic"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Live Demo",id:"live-demo",children:[]}],d={toc:l};function m(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can add buttons to rows or toolbar by using actions prop. Actions prop takes array of actions."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import MaterialTable from '@material-table/core';\n\n<MaterialTable\n  // ...\n  parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}\n/>\n")),Object(r.b)("h2",{id:"live-demo"},"Live Demo"),Object(r.b)(i.a,{mdxType:"InfoBannerAboutGlobalVarsInDemos"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function BasicTreeData() {\n  return (\n    <MaterialTable\n      data={TREE_DATA} \n      columns={TREE_COLUMNS} \n      icons={TABLE_ICONS} \n      parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}\n      options={{\n        selection: true,\n      }}\n    />\n  );\n}\n")))}m.isMDXComponent=!0}}]);