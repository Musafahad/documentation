(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{O6H6:function(e,t,n){"use strict";var l=n("vOnD"),a=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),b=n("pD55"),m=n("8Aig"),u=n("ReZb"),g=n("GCVy"),s=n("+6vE");var p=function(e){var t=e.children;return r.a.createElement(a.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(a.s,{fontFamily:"mono",fontSize:1},t))};var d=function(e){var t=e.children;return r.a.createElement("strong",null,t)},O=n("gnlW"),f=n("mwnC"),j=n("/Rw0"),h=n("dVM4"),y=Object(l.f)(a.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(a.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(a.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var x=E,w=n("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var l=w.a.getVariantsForPage(e.root,n.page),i=[],o=l[0];return 0===l.length?null:(l.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(a.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(a.i,{overlay:e.overlay},r.a.createElement(a.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(l.f)(a.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var F=v,k=Object(l.f)(a.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(l.f)(a.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),C=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(l.f)(a.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(l.f)(a.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,l=e.location,o=n.frontmatter,y=o.title,E=o.description,v=o.status,H=o.source,z=o.additionalContributors,M=void 0===z?[]:z,D=w.a.getVariantRoot(l.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:g.a,Prompt:p,PromptReply:d,Screenshot:O.a}},r.a.createElement(a.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(b.a,{title:y,description:E}),r.a.createElement(m.b,{location:l,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(a.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:l})),r.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(a.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(a.e,null,r.a.createElement(a.e,null,r.a.createElement(a.m,{as:"h1"},y),E))),null!=D?r.a.createElement(C,null,r.a.createElement(F,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:l})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(a.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(x,{items:n.tableOfContents.items})):null,r.a.createElement(S,null,v||H?r.a.createElement(a.k,{mb:3,alignItems:"center"},v?r.a.createElement(h.a,{status:v}):null,r.a.createElement(a.e,{mx:"auto"}),H?r.a.createElement(j.a,{href:H}):null):null,n.tableOfContents.items?r.a.createElement(a.e,{display:["block",null,"none"],mb:3},r.a.createElement(a.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(a.r,{icon:i.b,mr:2}):r.a.createElement(a.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(a.e,{pt:1},r.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},wNt3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return s}));var l,a=n("zLVn"),i=n("q1tI"),o=n("7ljp"),r=n("O6H6"),c=n("4LHR"),b={},m=(l="Note",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),u={_frontmatter:b},g=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(g,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(m,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(o.b)("p",null,"You can view, download, and email receipts for the complete billing history of your npm user account."),Object(o.b)("h2",null,"Viewing receipts"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["user-login"].text),Object(o.b)(i.Fragment,null,c.a["user-login"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-info"].text),Object(o.b)(i.Fragment,null,c.a["billing-info"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-history"].text),Object(o.b)(i.Fragment,null,c.a["billing-history"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-view"].text),Object(o.b)(i.Fragment,null,c.a["billing-view"].image))),Object(o.b)("h2",null,"Downloading receipts"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["user-login"].text),Object(o.b)(i.Fragment,null,c.a["user-login"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-info"].text),Object(o.b)(i.Fragment,null,c.a["billing-info"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-history"].text),Object(o.b)(i.Fragment,null,c.a["billing-history"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-download"].text),Object(o.b)(i.Fragment,null,c.a["billing-download"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-download-checked"].text),Object(o.b)(i.Fragment,null,c.a["billing-download-checked"].image))),Object(o.b)("h2",null,"Emailing receipts"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["user-login"].text),Object(o.b)(i.Fragment,null,c.a["user-login"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-info"].text),Object(o.b)(i.Fragment,null,c.a["billing-info"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-history"].text),Object(o.b)(i.Fragment,null,c.a["billing-history"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-email"].text),Object(o.b)(i.Fragment,null,c.a["billing-email"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-email-checked"].text),Object(o.b)(i.Fragment,null,c.a["billing-email-checked"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)(i.Fragment,null,c.a["billing-email-receipt"].text),Object(o.b)(i.Fragment,null,c.a["billing-email-receipt"].image)),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Send"),"."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-paying-for-your-npm-user-account-viewing-downloading-and-emailing-receipts-for-your-user-account-mdx-7a67fd295632cc40f32d.js.map