(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),s=n("8Aig"),b=n("ReZb"),d=n("GCVy"),m=n("+6vE");var h=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var u=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),j=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var k=y,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),l.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,w=o.status,L=o.source,A=o.additionalContributors,R=void 0===A?[]:A,z=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:b.a,Note:d.a,Prompt:h,PromptReply:u,Screenshot:f.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(j.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},N),y))),null!=z?r.a.createElement(I,null,r.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,w||L?r.a.createElement(i.k,{mb:3,alignItems:"center"},w?r.a.createElement(O.a,{status:w}):null,r.a.createElement(i.e,{mx:"auto"}),L?r.a.createElement(g.a,{href:L}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:l.b,mr:2}):r.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(m.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(R.map((function(e){return{login:e}})))}))))))}},n32F:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),o={},r={_frontmatter:o},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," is automatically generated for any operations where npm\nmodifies either the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," tree, or ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),". It describes the\nexact tree that was generated, such that subsequent installs are able to\ngenerate identical trees, regardless of intermediate dependency updates."),Object(i.b)("p",null,"This file is intended to be committed into source repositories, and serves\nvarious purposes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Describe a single representation of a dependency tree such that\nteammates, deployments, and continuous integration are guaranteed to\ninstall exactly the same dependencies.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Provide a facility for users to "time-travel" to previous states of\n',Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," without having to commit the directory itself.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Facilitate greater visibility of tree changes through readable source\ncontrol diffs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Optimize the installation process by allowing npm to skip repeated\nmetadata resolutions for previously-installed packages.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As of npm v7, lockfiles include enough information to gain a complete\npicture of the package tree, reducing the need to read ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"\nfiles, and allowing for significant performance improvements."))),Object(i.b)("h3",null,Object(i.b)("inlineCode",{parentName:"h3"},"package-lock.json")," vs ",Object(i.b)("inlineCode",{parentName:"h3"},"npm-shrinkwrap.json")),Object(i.b)("p",null,"Both of these files have the same format, and perform similar functions in\nthe root of a project."),Object(i.b)("p",null,"The difference is that ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," cannot be published, and it will\nbe ignored if found in any place other than the root project."),Object(i.b)("p",null,"In contrast, ",Object(i.b)("a",{parentName:"p",href:"/cli/v7/configuring-npm/npm-shrinkwrap-json"},"npm-shrinkwrap.json")," allows\npublication, and defines the dependency tree from the point encountered.\nThis is not recommended unless deploying a CLI tool or otherwise using the\npublication process for producing production packages."),Object(i.b)("p",null,"If both ",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," are present in the\nroot of a project, ",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," will take precedence and\n",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json")," will be ignored."),Object(i.b)("h3",null,"Hidden Lockfiles"),Object(i.b)("p",null,"In order to avoid processing the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),' folder repeatedly, npm as\nof v7 uses a "hidden" lockfile present in\n',Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.package-lock.json"),".  This contains information about the\ntree, and is used in lieu of reading the entire ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," hierarchy\nprovided that the following conditions are met:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All package folders it references exist in the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," hierarchy."),Object(i.b)("li",{parentName:"ul"},"No package folders exist in the ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," hierarchy that are not\nlisted in the lockfile."),Object(i.b)("li",{parentName:"ul"},"The modified time of the file is at least as recent as all of the package\nfolders it references.")),Object(i.b)("p",null,"That is, the hidden lockfile will only be relevant if it was created as\npart of the most recent update to the package tree.  If another CLI mutates\nthe tree in any way, this will be detected, and the hidden lockfile will be\nignored."),Object(i.b)("p",null,"Note that it ",Object(i.b)("em",{parentName:"p"},"is")," possible to manually change the ",Object(i.b)("em",{parentName:"p"},"contents")," of a package\nin such a way that the modified time of the package folder is unaffected.\nFor example, if you add a file to ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/foo/lib/bar.js"),", then the\nmodified time on ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/foo")," will not reflect this change.  If you\nare manually editing files in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules"),", it is generally best to\ndelete the file at ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.package-lock.json"),"."),Object(i.b)("p",null,'As the hidden lockfile is ignored by older npm versions, it does not\ncontain the backwards compatibility affordances present in "normal"\nlockfiles.  That is, it is ',Object(i.b)("inlineCode",{parentName:"p"},"lockfileVersion: 3"),", rather than\n",Object(i.b)("inlineCode",{parentName:"p"},"lockfileVersion: 2"),"."),Object(i.b)("h3",null,"Handling Old Lockfiles"),Object(i.b)("p",null,"When npm detects a lockfile from npm v6 or before during the package\ninstallation process, it is automatically updated to fetch missing\ninformation from either the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," tree or (in the case of empty\n",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," trees or very old lockfile formats) the npm registry."),Object(i.b)("h3",null,"File Format"),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"name")),Object(i.b)("p",null,"The name of the package this is a package-lock for. This will match what's\nin ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"version")),Object(i.b)("p",null,"The version of the package this is a package-lock for. This will match\nwhat's in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"lockfileVersion")),Object(i.b)("p",null,"An integer version, starting at ",Object(i.b)("inlineCode",{parentName:"p"},"1")," with the version number of this\ndocument whose semantics were used when generating this\n",Object(i.b)("inlineCode",{parentName:"p"},"package-lock.json"),"."),Object(i.b)("p",null,"Note that the file format changed significantly in npm v7 to track\ninformation that would have otherwise required looking in ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules")," or\nthe npm registry.  Lockfiles generated by npm v7 will contain\n",Object(i.b)("inlineCode",{parentName:"p"},"lockfileVersion: 2"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'No version provided: an "ancient" shrinkwrap file from a version of npm\nprior to npm v5.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1"),": The lockfile version used by npm v5 and v6."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"2"),": The lockfile version used by npm v7, which is backwards compatible\nto v1 lockfiles."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"3"),": The lockfile version used by npm v7, ",Object(i.b)("em",{parentName:"li"},"without")," backwards\ncompatibility affordances.  This is used for the hidden lockfile at\n",Object(i.b)("inlineCode",{parentName:"li"},"node_modules/.package-lock.json"),", and will likely be used in a future\nversion of npm, once support for npm v6 is no longer relevant.")),Object(i.b)("p",null,"npm will always attempt to get whatever data it can out of a lockfile, even\nif it is not a version that it was designed to support."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"packages")),Object(i.b)("p",null,"This is an object that maps package locations to an object containing the\ninformation about that package."),Object(i.b)("p",null,"The root project is typically listed with a key of ",Object(i.b)("inlineCode",{parentName:"p"},'""'),", and all other\npackages are listed with their relative paths from the root project folder."),Object(i.b)("p",null,"Package descriptors have the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"version: The version found in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"resolved: The place where the package was actually resolved from.  In\nthe case of packages fetched from the registry, this will be a url to a\ntarball.  In the case of git dependencies, this will be the full git url\nwith commit sha.  In the case of link dependencies, this will be the\nlocation of the link target. ",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),' is a magic value meaning\n"the currently configured registry".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"integrity: A ",Object(i.b)("inlineCode",{parentName:"p"},"sha512")," or ",Object(i.b)("inlineCode",{parentName:"p"},"sha1")," ",Object(i.b)("a",{parentName:"p",href:"https://w3c.github.io/webappsec/specs/subresourceintegrity/"},"Standard Subresource\nIntegrity"),"\nstring for the artifact that was unpacked in this location.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"link: A flag to indicate that this is a symbolic link.  If this is\npresent, no other fields are specified, since the link target will also\nbe included in the lockfile.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"dev, optional, devOptional: If the package is strictly part of the\n",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies")," tree, then ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," will be true.  If it is strictly part\nof the ",Object(i.b)("inlineCode",{parentName:"p"},"optionalDependencies")," tree, then ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," will be set.  If it\nis both a ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," dependency ",Object(i.b)("em",{parentName:"p"},"and")," an ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," dependency of a non-dev\ndependency, then ",Object(i.b)("inlineCode",{parentName:"p"},"devOptional")," will be set.  (An ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," dependency of\na ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," dependency will have both ",Object(i.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(i.b)("inlineCode",{parentName:"p"},"optional")," set.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"inBundle: A flag to indicate that the package is a bundled dependency.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"hasInstallScript: A flag to indicate that the package has a ",Object(i.b)("inlineCode",{parentName:"p"},"preinstall"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"install"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," script.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"hasShrinkwrap: A flag to indicate that the package has an\n",Object(i.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"bin, license, engines, dependencies, optionalDependencies: fields from\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")))),Object(i.b)("h4",null,"dependencies"),Object(i.b)("p",null,"Legacy data for supporting versions of npm that use ",Object(i.b)("inlineCode",{parentName:"p"},"lockfileVersion: 1"),".\nThis is a mapping of package names to dependency objects.  Because the\nobject structure is strictly hierarchical, symbolic link dependencies are\nsomewhat challenging to represent in some cases."),Object(i.b)("p",null,"npm v7 ignores this section entirely if a ",Object(i.b)("inlineCode",{parentName:"p"},"packages")," section is present,\nbut does keep it up to date in order to support switching between npm v6\nand npm v7."),Object(i.b)("p",null,"Dependency objects have the following fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"version: a specifier that varies depending on the nature of the package,\nand is usable in fetching a new copy of it."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"bundled dependencies: Regardless of source, this is a version number\nthat is purely for informational purposes."),Object(i.b)("li",{parentName:"ul"},"registry sources: This is a version number. (eg, ",Object(i.b)("inlineCode",{parentName:"li"},"1.2.3"),")"),Object(i.b)("li",{parentName:"ul"},"git sources: This is a git specifier with resolved committish. (eg,\n",Object(i.b)("inlineCode",{parentName:"li"},"git+https://example.com/foo/bar#115311855adb0789a0466714ed48a1499ffea97e"),")"),Object(i.b)("li",{parentName:"ul"},"http tarball sources: This is the URL of the tarball. (eg,\n",Object(i.b)("inlineCode",{parentName:"li"},"https://example.com/example-1.3.0.tgz"),")"),Object(i.b)("li",{parentName:"ul"},"local tarball sources: This is the file URL of the tarball. (eg\n",Object(i.b)("inlineCode",{parentName:"li"},"file:///opt/storage/example-1.3.0.tgz"),")"),Object(i.b)("li",{parentName:"ul"},"local link sources: This is the file URL of the link. (eg\n",Object(i.b)("inlineCode",{parentName:"li"},"file:libs/our-module"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"integrity: A ",Object(i.b)("inlineCode",{parentName:"p"},"sha512")," or ",Object(i.b)("inlineCode",{parentName:"p"},"sha1")," ",Object(i.b)("a",{parentName:"p",href:"https://w3c.github.io/webappsec/specs/subresourceintegrity/"},"Standard Subresource\nIntegrity"),"\nstring for the artifact that was unpacked in this location.  For git\ndependencies, this is the commit sha.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"resolved: For registry sources this is path of the tarball relative to\nthe registry URL.  If the tarball URL isn't on the same server as the\nregistry URL then this is a complete URL. ",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),' is a magic\nvalue meaning "the currently configured registry".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"bundled:  If true, this is the bundled dependency and will be installed\nby the parent module.  When installing, this module will be extracted\nfrom the parent module during the extract phase, not installed as a\nseparate dependency.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"dev: If true then this dependency is either a development dependency ONLY\nof the top level module or a transitive dependency of one.  This is false\nfor dependencies that are both a development dependency of the top level\nand a transitive dependency of a non-development dependency of the top\nlevel.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"optional: If true then this dependency is either an optional dependency\nONLY of the top level module or a transitive dependency of one.  This is\nfalse for dependencies that are both an optional dependency of the top\nlevel and a transitive dependency of a non-optional dependency of the top\nlevel.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"requires: This is a mapping of module name to version.  This is a list of\neverything this module requires, regardless of where it will be\ninstalled.  The version should match via normal matching rules a\ndependency either in our ",Object(i.b)("inlineCode",{parentName:"p"},"dependencies")," or in a level higher than us.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"dependencies: The dependencies of this dependency, exactly as at the top\nlevel."))),Object(i.b)("h3",null,"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-shrinkwrap"},"npm shrinkwrap")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/npm-shrinkwrap-json"},"npm-shrinkwrap.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v7/commands/npm-install"},"npm install"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-7-configuring-npm-package-lock-json-md-29140d20599b41b91b40.js.map