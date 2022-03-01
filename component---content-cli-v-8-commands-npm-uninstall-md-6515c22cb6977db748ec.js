(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{"0Pdq":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),o=t("O6H6"),i={},r={_frontmatter:i},c=o.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm uninstall [<@scope>/]<pkg>...\n\naliases: un, unlink, remove, rm, r\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This uninstalls a package, completely removing everything npm installed\non its behalf."),Object(l.b)("p",null,"It also removes the package from the ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),", ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," objects in your\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"Futher, if you have an ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json"),", npm\nwill update those files as well."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--no-save")," will tell npm not to remove the package from your\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--save")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-S")," will tell npm to remove the package from your\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files.\nThis is the default, but you may need to use this if you have for\ninstance ",Object(l.b)("inlineCode",{parentName:"p"},"save=false")," in your ",Object(l.b)("inlineCode",{parentName:"p"},"npmrc")," file"),Object(l.b)("p",null,"In global mode (ie, with ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," or ",Object(l.b)("inlineCode",{parentName:"p"},"--global")," appended to the command),\nit uninstalls the current package context as a global package.\n",Object(l.b)("inlineCode",{parentName:"p"},"--no-save")," is ignored in this case."),Object(l.b)("p",null,"Scope is optional and follows the usual rules for ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),"."),Object(l.b)("h3",null,"Examples"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm uninstall sax\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"sax")," will no longer be in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),", or\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm uninstall lodash --no-save\n")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"lodash")," will not be removed from your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true")," unless when using ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," or ",Object(l.b)("inlineCode",{parentName:"li"},"npm dedupe")," where it\ndefaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Save installed packages to a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file as dependencies."),Object(l.b)("p",null,"When used with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm rm")," command, removes the dependency from\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"Will also prevent writing to ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-prune"},"npm prune")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),o=t("aOgs"),i=t("q1tI"),r=t.n(i),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),m=t("GCVy"),u=t("+6vE");var d=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},j=t("gnlW"),O=t("mwnC"),f=t("/Rw0"),g=t("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var n=e.items,t=e.depth;return r.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:t+1}):null)})))}k.defaultProps={depth:0};var y=k,w=t("MfeC");function C(e){var n=w.a.getPath(e.location.pathname),t=w.a.getVariantAndPage(e.root,n);if(!t)return null;var a=w.a.getVariantsForPage(e.root,t.page),o=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(i=e),o.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,i.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},o)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,i=t.frontmatter,N=i.title,k=i.description,C=i.status,W=i.source,T=i.additionalContributors,P=void 0===T?[]:T,z=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:k}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),k))),null!=z?r.a.createElement(S,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(y,{items:t.tableOfContents.items})):null,r.a.createElement(D,null,C||W?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(g.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),W?r.a.createElement(f.a,{href:W}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:o.b,mr:2}):r.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(P.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-uninstall-md-6515c22cb6977db748ec.js.map