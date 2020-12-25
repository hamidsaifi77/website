(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{119:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return d}));var o=t(3),a=t(7),n=(t(0),t(139)),s=(t(265),{id:"about",title:"About"}),p={unversionedId:"demos/about",id:"demos/about",isDocsHomePage:!1,title:"About",description:"In the name of brevity we use *global vars* in all (most) of our demos",source:"@site/docs/demos/about.mdx",slug:"/demos/about",permalink:"/docs/demos/about",editUrl:"https://github.com/material-table-core/website/docs/demos/about.mdx",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/"},next:{title:"Basic Actions",permalink:"/docs/demos/actions/basic"}},i=[{value:"<code>DEMO_DATA</code>",id:"demo_data",children:[]},{value:"<code>DEMO_COLS</code>",id:"demo_cols",children:[]},{value:"<code>TABLE_ICONS</code>",id:"table_icons",children:[]}],c={toc:i};function d(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},Object(n.b)("em",{parentName:"p"},"In the name of brevity we use ",Object(n.b)("strong",{parentName:"em"},"global vars")," in all (most) of our")," ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"demos"))))),Object(n.b)("h2",{id:"demo_data"},Object(n.b)("inlineCode",{parentName:"h2"},"DEMO_DATA")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const DEMO_DATA = [\n  { id: 2, name: "Joe" },\n  { id: 1, name: "Mary" }\n];\n')),Object(n.b)("h2",{id:"demo_cols"},Object(n.b)("inlineCode",{parentName:"h2"},"DEMO_COLS")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'const DEMO_COLS = [\n  { field: "id", title: "Id" },\n  { field: "name", title: "Name" }\n];\n')),Object(n.b)("h2",{id:"table_icons"},Object(n.b)("inlineCode",{parentName:"h2"},"TABLE_ICONS")),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="/src/theme/ReactLiveScope/tableIcons.js"',title:'"/src/theme/ReactLiveScope/tableIcons.js"'}),'import React, { forwardRef } from "react";\nimport { \n  AddBox, ArrowUpward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, \n  Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn \n} from "@material-ui/icons";\n\nexport default {\n  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),\n  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),\n  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),\n  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),\n  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),\n  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),\n  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),\n  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),\n  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),\n  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),\n  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),\n  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),\n  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),\n  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),\n  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),\n  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),\n  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),\n};\n')))}d.isMDXComponent=!0}}]);