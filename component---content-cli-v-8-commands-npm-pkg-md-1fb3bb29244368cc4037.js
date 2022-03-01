(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{"8vP/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set <key>=<value> [<key>=<value> ...]\nnpm pkg get [<key> [<key> ...]]\nnpm pkg delete <key> [<key> ...]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"A command that automates the management of ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," files.\n",Object(l.b)("inlineCode",{parentName:"p"},"npm pkg")," provide 3 different sub commands that allow you to modify or retrieve\nvalues for given object keys in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"The syntax to retrieve and set fields is a dot separated representation of\nthe nested object properties to be found within your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", it's the\nsame notation used in ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-view"},Object(l.b)("inlineCode",{parentName:"a"},"npm view"))," to retrieve information\nfrom the registry manifest, below you can find more examples on how to use it."),Object(l.b)("p",null,"Returned values are always in ",Object(l.b)("strong",{parentName:"p"},"json")," format."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"npm pkg get <field>")),Object(l.b)("p",{parentName:"li"},"  Retrieves a value ",Object(l.b)("inlineCode",{parentName:"p"},"key"),", defined in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("p",{parentName:"li"},"  For example, in order to retrieve the name of the current package, you\ncan run:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg get name\n")),Object(l.b)("p",{parentName:"li"},"  It's also possible to retrieve multiple values at once:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg get name version\n")),Object(l.b)("p",{parentName:"li"},"  You can view child fields by separating them with a period. To retrieve\nthe value of a test ",Object(l.b)("inlineCode",{parentName:"p"},"script")," value, you would run the following command:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg get scripts.test\n")),Object(l.b)("p",{parentName:"li"},"  For fields that are arrays, requesting a non-numeric field will return\nall of the values from the objects in the list. For example, to get all\nthe contributor emails for a package, you would run:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg get contributors.email\n")),Object(l.b)("p",{parentName:"li"},"  You may also use numeric indices in square braces to specifically select\nan item in an array field. To just get the email address of the first\ncontributor in the list, you can run:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg get contributors[0].email\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"npm pkg set <field>=<value>")),Object(l.b)("p",{parentName:"li"},"  Sets a ",Object(l.b)("inlineCode",{parentName:"p"},"value")," in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," based on the ",Object(l.b)("inlineCode",{parentName:"p"},"field")," value. When\nsaving to your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file the same set of rules used during\n",Object(l.b)("inlineCode",{parentName:"p"},"npm install")," and other cli commands that touches the ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file\nare used, making sure to respect the existing indentation and possibly\napplying some validation prior to saving values to the file."),Object(l.b)("p",{parentName:"li"},"  The same syntax used to retrieve values from your package can also be used\nto define new properties or overriding existing ones, below are some\nexamples of how the dot separated syntax can be used to edit your\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file."),Object(l.b)("p",{parentName:"li"},"  Defining a new bin named ",Object(l.b)("inlineCode",{parentName:"p"},"mynewcommand")," in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," that points\nto a file ",Object(l.b)("inlineCode",{parentName:"p"},"cli.js"),":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set bin.mynewcommand=cli.js\n")),Object(l.b)("p",{parentName:"li"},"  Setting multiple fields at once is also possible:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set description='Awesome package' engines.node='>=10'\n")),Object(l.b)("p",{parentName:"li"},"  It's also possible to add to array values, for example to add a new\ncontributor entry:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set contributors[0].name='Foo' contributors[0].email='foo@bar.ca'\n")),Object(l.b)("p",{parentName:"li"},"  You may also append items to the end of an array using the special\nempty bracket notation:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set contributors[].name='Foo' contributors[].name='Bar'\n")),Object(l.b)("p",{parentName:"li"},"  It's also possible to parse values as json prior to saving them to your\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file, for example in order to set a ",Object(l.b)("inlineCode",{parentName:"p"},'"private": true'),"\nproperty:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set private=true --json\n")),Object(l.b)("p",{parentName:"li"},"  It also enables saving values as numbers:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set tap.timeout=60 --json\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"npm pkg delete <key>")),Object(l.b)("p",{parentName:"li"},"  Deletes a ",Object(l.b)("inlineCode",{parentName:"p"},"key")," from your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")),Object(l.b)("p",{parentName:"li"},"  The same syntax used to set values from your package can also be used\nto remove existing ones. For example, in order to remove a script named\nbuild:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg delete scripts.build\n")))),Object(l.b)("h3",null,"Workspaces support"),Object(l.b)("p",null,"You can set/get/delete items across your configured workspaces by using the\n",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," or ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," config options."),Object(l.b)("p",null,"For example, setting a ",Object(l.b)("inlineCode",{parentName:"p"},"funding")," value across all configured workspaces\nof a project:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm pkg set funding=https://example.com --ws\n")),Object(l.b)("p",null,"When using ",Object(l.b)("inlineCode",{parentName:"p"},"npm pkg get")," to retrieve info from your configured workspaces, the\nreturned result will be in a json format in which top level keys are the\nnames of each workspace, the values of these keys will be the result values\nreturned from each of the configured workspaces, e.g:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'npm pkg get name version --ws\n{\n  "a": {\n    "name": "a",\n    "version": "1.0.0"\n  },\n  "b": {\n    "name": "b",\n    "version": "1.0.0"\n  }\n}\n')),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"force")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Removes various protections against unfortunate side effects, common\nmistakes, unnecessary performance degradation, and malicious input."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Allow clobbering non-npm files in global installs."),Object(l.b)("li",{parentName:"ul"},"Allow the ",Object(l.b)("inlineCode",{parentName:"li"},"npm version")," command to work on an unclean git repository."),Object(l.b)("li",{parentName:"ul"},"Allow deleting the cache folder with ",Object(l.b)("inlineCode",{parentName:"li"},"npm cache clean"),"."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of npm."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of ",Object(l.b)("inlineCode",{parentName:"li"},"node"),", even if ",Object(l.b)("inlineCode",{parentName:"li"},"--engine-strict")," is enabled."),Object(l.b)("li",{parentName:"ul"},"Allow ",Object(l.b)("inlineCode",{parentName:"li"},"npm audit fix")," to install modules outside your stated dependency\nrange (including SemVer-major changes)."),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing all versions of a published package."),Object(l.b)("li",{parentName:"ul"},"Allow conflicting peerDependencies to be installed in the root project."),Object(l.b)("li",{parentName:"ul"},"Implicitly set ",Object(l.b)("inlineCode",{parentName:"li"},"--yes")," during ",Object(l.b)("inlineCode",{parentName:"li"},"npm init"),"."),Object(l.b)("li",{parentName:"ul"},"Allow clobbering existing values in ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg"))),Object(l.b)("p",null,"If you don't have a clear idea of what you want to do, it is strongly\nrecommended that you do not use this option!"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"json")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Whether or not to output JSON data, rather than the normal output."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg set")," it enables parsing set values with JSON.parse() before\nsaving them to your ",Object(l.b)("inlineCode",{parentName:"li"},"package.json"),".")),Object(l.b)("p",null,"Not supported by all npm commands."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h2",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-init"},"npm init")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-set-script"},"npm set-script")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/workspaces"},"workspaces"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var j=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),O=n("/Rw0"),f=n("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var k=y,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,w=o.status,T=o.source,W=o.additionalContributors,D=void 0===W?[]:W,F=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:j,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(h.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),y))),null!=F?r.a.createElement(S,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:F,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(A,null,w||T?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(f.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),T?r.a.createElement(O.a,{href:T}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(D.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-pkg-md-1fb3bb29244368cc4037.js.map