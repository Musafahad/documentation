(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),s=n("pD55"),p=n("8Aig"),m=n("ReZb"),b=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var w=v,E=n("MfeC");function N(e){var t=E.a.getPath(e.location.pathname),n=E.a.getVariantAndPage(e.root,t);if(!n)return null;var a=E.a.getVariantsForPage(e.root,n.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},o)))}N.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=N,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,y=i.title,v=i.description,N=i.status,z=i.source,F=i.additionalContributors,H=void 0===F?[]:F,M=E.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:v}),r.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),v))),null!=M?r.a.createElement(I,null,r.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(T,null,N||z?r.a.createElement(l.k,{mb:3,alignItems:"center"},N?r.a.createElement(j.a,{status:N}):null,r.a.createElement(l.e,{mx:"auto"}),z?r.a.createElement(O.a,{href:z}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},il75:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),o=n("O6H6"),i={},r={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]\n\naliases: info, show, v\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command shows data about a package and prints it to the stream\nreferenced by the ",Object(l.b)("inlineCode",{parentName:"p"},"outfd")," config, which defaults to stdout."),Object(l.b)("p",null,"To show the package registry entry for the ",Object(l.b)("inlineCode",{parentName:"p"},"connect")," package, you can do\nthis:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view connect\n")),Object(l.b)("p",null,'The default version is "latest" if unspecified.'),Object(l.b)("p",null,"Field names can be specified after the package descriptor.\nFor example, to show the dependencies of the ",Object(l.b)("inlineCode",{parentName:"p"},"ronn")," package at version\n0.3.5, you could do the following:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view ronn@0.3.5 dependencies\n")),Object(l.b)("p",null,"You can view child fields by separating them with a period.\nTo view the git repository URL for the latest version of npm, you could\ndo this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view npm repository.url\n")),Object(l.b)("p",null,"This makes it easy to view information about a dependency with a bit of\nshell scripting.  For example, to view all the data about the version of\nopts that ronn depends on, you can do this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view opts@$(npm view ronn dependencies.opts)\n")),Object(l.b)("p",null,'For fields that are arrays, requesting a non-numeric field will return\nall of the values from the objects in the list.  For example, to get all\nthe contributor names for the "express" project, you can do this:'),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view express contributors.email\n")),Object(l.b)("p",null,"You may also use numeric indices in square braces to specifically select\nan item in an array field.  To just get the email address of the first\ncontributor in the list, you can do this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view express contributors[0].email\n")),Object(l.b)("p",null,"Multiple fields may be specified, and will be printed one after another.\nFor example, to get all the contributor names and email addresses, you\ncan do this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view express contributors.name contributors.email\n")),Object(l.b)("p",null,'"Person" fields are shown as a string if they would be shown as an\nobject.  So, for example, this will show the list of npm contributors in\nthe shortened string format.  (See ',Object(l.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/package-json"},Object(l.b)("inlineCode",{parentName:"a"},"package.json"))," for more on this.)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view npm contributors\n")),Object(l.b)("p",null,"If a version range is provided, then data will be printed for every\nmatching version of the package.  This will show which version of jsdom\nwas required by each matching version of yui3:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view yui3@'>0.5.4' dependencies.jsdom\n")),Object(l.b)("p",null,"To show the ",Object(l.b)("inlineCode",{parentName:"p"},"connect")," package version history, you can do\nthis:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm view connect versions\n")),Object(l.b)("h3",null,"Output"),Object(l.b)("p",null,"If only a single string field for a single version is output, then it\nwill not be colorized or quoted, so as to enable piping the output to\nanother command. If the field is an object, it will be output as a JavaScript object literal."),Object(l.b)("p",null,"If the --json flag is given, the outputted fields will be JSON."),Object(l.b)("p",null,"If the version range matches multiple versions, than each printed value\nwill be prefixed with the version it applies to."),Object(l.b)("p",null,"If multiple fields are requested, than each of them are prefixed with\nthe field name."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-search"},"npm search")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/npmrc"},"npmrc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-docs"},"npm docs"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-view-md-3e864d0bb4d1e6ab9373.js.map