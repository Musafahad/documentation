(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),l=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),m=t("GCVy"),u=t("+6vE");var d=function(e){var n=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},j=t("gnlW"),O=t("mwnC"),g=t("/Rw0"),f=t("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var n=e.items,t=e.depth;return r.a.createElement(y,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(N,{items:e.items,depth:t+1}):null)})))}N.defaultProps={depth:0};var w=N,k=t("MfeC");function C(e){var n=k.a.getPath(e.location.pathname),t=k.a.getVariantAndPage(e.root,n);if(!t)return null;var a=k.a.getVariantsForPage(e.root,t.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),A=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,y=o.title,N=o.description,C=o.status,z=o.source,T=o.additionalContributors,D=void 0===T?[]:T,W=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:y,description:N}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},y),N))),null!=W?r.a.createElement(I,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),t.tableOfContents.items?r.a.createElement(A,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:t.tableOfContents.items})):null,r.a.createElement(S,null,C||z?r.a.createElement(i.k,{mb:3,alignItems:"center"},C?r.a.createElement(f.a,{status:C}):null,r.a.createElement(i.e,{mx:"auto"}),z?r.a.createElement(g.a,{href:z}):null):null,t.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(w,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(D.map((function(e){return{login:e}})))}))))))}},yYOM:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("O6H6"),o={},r={_frontmatter:o},c=l.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm init [--yes|-y|--scope]\nnpm init <@scope> (same as `npm exec <@scope>/create`)\nnpm init [<@scope>/]<name> (same as `npm exec [<@scope>/]create-<name>`)\nnpm init [-w <dir>] [args...]\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm init <initializer>")," can be used to set up a new or existing npm\npackage."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"initializer")," in this case is an npm package named ",Object(i.b)("inlineCode",{parentName:"p"},"create-<initializer>"),",\nwhich will be installed by ",Object(i.b)("a",{parentName:"p",href:"/cli/v7/commands/npm-exec"},Object(i.b)("inlineCode",{parentName:"a"},"npm-exec")),", and then have its\nmain bin executed -- presumably creating or updating ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and\nrunning any other initialization-related operations."),Object(i.b)("p",null,"The init command is transformed to a corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec")," operation as\nfollows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init foo")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npm exec create-foo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init @usr/foo")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npm exec @usr/create-foo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init @usr")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"npm exec @usr/create"))),Object(i.b)("p",null,"If the initializer is omitted (by just calling ",Object(i.b)("inlineCode",{parentName:"p"},"npm init"),"), init will fall\nback to legacy init behavior. It will ask you a bunch of questions, and\nthen write a package.json for you. It will attempt to make reasonable\nguesses based on existing fields, dependencies, and options selected. It is\nstrictly additive, so it will keep any fields and values that were already\nset. You can also use ",Object(i.b)("inlineCode",{parentName:"p"},"-y"),"/",Object(i.b)("inlineCode",{parentName:"p"},"--yes")," to skip the questionnaire altogether. If\nyou pass ",Object(i.b)("inlineCode",{parentName:"p"},"--scope"),", it will create a scoped package."),Object(i.b)("h4",null,"Forwarding additional options"),Object(i.b)("p",null,"Any additional options will be passed directly to the command, so ",Object(i.b)("inlineCode",{parentName:"p"},"npm init\nfoo -- --hello")," will map to ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec -- create-foo --hello"),"."),Object(i.b)("p",null,"To better illustrate how options are forwarded, here's a more evolved\nexample showing options passed to both the ",Object(i.b)("strong",{parentName:"p"},"npm cli")," and a create package,\nboth following commands are equivalent:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm init foo -y --registry=<url> -- --hello -a")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"npm exec -y --registry=<url> -- create-foo --hello -a"))),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"Create a new React-based project using\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/create-react-app"},Object(i.b)("inlineCode",{parentName:"a"},"create-react-app")),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init react-app ./my-react-app\n")),Object(i.b)("p",null,"Create a new ",Object(i.b)("inlineCode",{parentName:"p"},"esm"),"-compatible package using\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/create-esm"},Object(i.b)("inlineCode",{parentName:"a"},"create-esm")),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-esm-lib && cd my-esm-lib\n$ npm init esm --yes\n")),Object(i.b)("p",null,"Generate a plain old package.json using legacy init:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-npm-pkg && cd my-npm-pkg\n$ git init\n$ npm init\n")),Object(i.b)("p",null,"Generate it without having it ask any questions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init -y\n")),Object(i.b)("h3",null,"Workspaces support"),Object(i.b)("p",null,"It's possible to create a new workspace within your project by using the\n",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config option. When using ",Object(i.b)("inlineCode",{parentName:"p"},"npm init -w <dir>")," the cli will\ncreate the folders and boilerplate expected while also adding a reference\nto your project ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(i.b)("inlineCode",{parentName:"p"},'"workspaces": []')," property in order to make\nsure that new generated ",Object(i.b)("strong",{parentName:"p"},"workspace")," is properly set up as such."),Object(i.b)("p",null,"Given a project with no workspaces, e.g:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".\n+-- package.json\n")),Object(i.b)("p",null,"You may generate a new workspace using the legacy init:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init -w packages/a\n")),Object(i.b)("p",null,"That will generate a new folder and ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file, while also updating\nyour top-level ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to add the reference to this new workspace:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   `-- a\n       `-- package.json\n")),Object(i.b)("p",null,"The workspaces init also supports the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init <initializer> -w <dir>"),"\nsyntax, following the same set of rules explained earlier in the initial\n",Object(i.b)("strong",{parentName:"p"},"Description")," section of this page. Similar to the previous example of\ncreating a new React-based project using\n",Object(i.b)("a",{parentName:"p",href:"https://npm.im/create-react-app"},Object(i.b)("inlineCode",{parentName:"a"},"create-react-app")),", the following syntax\nwill make sure to create the new react app as a nested ",Object(i.b)("strong",{parentName:"p"},"workspace")," within your\nproject and configure your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to recognize it as such:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm init -w packages/my-react-app react-app .\n")),Object(i.b)("p",null,"This will make sure to generate your react app as expected, one important\nconsideration to have in mind is that ",Object(i.b)("inlineCode",{parentName:"p"},"npm exec")," is going to be run in the\ncontext of the newly created folder for that workspace, and that's the reason\nwhy in this example the initializer uses the initializer name followed with a\ndot to represent the current directory in that context, e.g: ",Object(i.b)("inlineCode",{parentName:"p"},"react-app ."),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   `-- my-react-app\n       +-- README\n       +-- package.json\n       `-- ...\n")),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"yes")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: null"),Object(i.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(i.b)("p",null,'Automatically answer "yes" to any prompts that npm might print on the\ncommand line.'),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"force")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Removes various protections against unfortunate side effects, common\nmistakes, unnecessary performance degradation, and malicious input."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Allow clobbering non-npm files in global installs."),Object(i.b)("li",{parentName:"ul"},"Allow the ",Object(i.b)("inlineCode",{parentName:"li"},"npm version")," command to work on an unclean git repository."),Object(i.b)("li",{parentName:"ul"},"Allow deleting the cache folder with ",Object(i.b)("inlineCode",{parentName:"li"},"npm cache clean"),"."),Object(i.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(i.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of npm."),Object(i.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(i.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of ",Object(i.b)("inlineCode",{parentName:"li"},"node"),", even if ",Object(i.b)("inlineCode",{parentName:"li"},"--engine-strict")," is enabled."),Object(i.b)("li",{parentName:"ul"},"Allow ",Object(i.b)("inlineCode",{parentName:"li"},"npm audit fix")," to install modules outside your stated dependency\nrange (including SemVer-major changes)."),Object(i.b)("li",{parentName:"ul"},"Allow unpublishing all versions of a published package."),Object(i.b)("li",{parentName:"ul"},"Allow conflicting peerDependencies to be installed in the root project."),Object(i.b)("li",{parentName:"ul"},"Implicitly set ",Object(i.b)("inlineCode",{parentName:"li"},"--yes")," during ",Object(i.b)("inlineCode",{parentName:"li"},"npm init"),"."),Object(i.b)("li",{parentName:"ul"},"Allow clobbering existing values in ",Object(i.b)("inlineCode",{parentName:"li"},"npm pkg"))),Object(i.b)("p",null,"If you don't have a clear idea of what you want to do, it is strongly\nrecommended that you do not use this option!"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspace")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default:"),Object(i.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(i.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(i.b)("p",null,"Valid values for the ",Object(i.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Workspace names"),Object(i.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(i.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result to selecting all of the\nnested workspaces)")),Object(i.b)("p",null,"When set for the ",Object(i.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: false"),Object(i.b)("li",{parentName:"ul"},"Type: Boolean")),Object(i.b)("p",null,"Enable running a command in the context of ",Object(i.b)("strong",{parentName:"p"},"all")," the configured\nworkspaces."),Object(i.b)("p",null,"This value is not exported to the environment for child processes."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://npm.im/init-package-json"},"init-package-json module")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-version"},"npm version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/scope"},"npm scope")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-exec"},"npm exec")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/using-npm/workspaces"},"npm workspaces"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-commands-npm-init-md-584b334bcc3925d6c531.js.map