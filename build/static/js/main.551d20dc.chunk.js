(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),o=a.n(r),c=(a(15),a(3)),s=a(2);a(16);var m=()=>{const[e,t]=Object(n.useState)(null),a=Object(s.o)();Object(n.useEffect)(()=>{fetch("http://jootcamp.kro.kr/isLogin",{credentials:"include"}).then(e=>e.json()).then(e=>{e.isLoggedIn?t(e.user):t(null)}).catch(e=>console.error("Error checking login status:",e))},[]);return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header-left"},l.a.createElement("h1",{onClick:()=>a("/")},"Jootcamp"),l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>a("/freeboard")},"\uc790\uc720\uac8c\uc2dc\ud310")),l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>a("/mypaths")},"My Paths")),l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>a("/mytracks")},"My Tracks")),l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>a("/myactivities")},"My Activities")),l.a.createElement("li",null,l.a.createElement("button",{onClick:()=>a("/teams")},"Teams"))))),l.a.createElement("div",{className:"header-right"},l.a.createElement("button",{className:"info-button",onClick:()=>{a(e?"/profile":"/login")}},e?"\ub0b4 \uc815\ubcf4":"Login"),!e&&l.a.createElement("button",{className:"signup-button",onClick:()=>{a("/signup")}},"\ud68c\uc6d0\uac00\uc785"),e&&l.a.createElement("button",{className:"login-button",onClick:()=>{fetch("http://jootcamp.kro.kr/logout",{method:"POST",credentials:"include"}).then(()=>{t(null),a("/")}).catch(e=>console.error("Error logging out:",e))}},"Logout")))};a(17);var i=()=>l.a.createElement("main",{className:"main-content"},l.a.createElement("h2",null,"Welcome to Jootcamp"),l.a.createElement("nav",{className:"content-nav"},l.a.createElement("button",{onClick:()=>alert("All Content clicked")},"All Content"),l.a.createElement("button",{onClick:()=>alert("Announcements clicked")},"Announcements"),l.a.createElement("button",{onClick:()=>alert("My Information clicked")},"My Information")),l.a.createElement("div",{className:"content-sections"}));a(18);var u=()=>l.a.createElement("div",{className:"home"},l.a.createElement(i,null));var p=()=>l.a.createElement("div",null,l.a.createElement("h2",null,"About Jootcamp"),l.a.createElement("p",null,"Jootcamp is a platform for coders to share knowledge and learn together."));a(19);var E=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),m=Object(s.o)();return l.a.createElement("div",{className:"login-container"},l.a.createElement("form",{onSubmit:t=>{t.preventDefault();const n={email:e,password:a};fetch("http://jootcamp.kro.kr/Login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),credentials:"include"}).then(e=>e.json()).then(e=>{e.success?m("/"):c("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")}).catch(e=>{console.error("Error logging in:",e),c("\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")})},className:"login-form"},l.a.createElement("h2",null,"\ub85c\uadf8\uc778"),o&&l.a.createElement("p",{className:"error-message"},o)," ",l.a.createElement("input",{type:"email",placeholder:"\uc774\uba54\uc77c",value:e,onChange:e=>t(e.target.value),required:!0}),l.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:a,onChange:e=>r(e.target.value),required:!0}),l.a.createElement("button",{type:"submit"},"\ub85c\uadf8\uc778")))};a(20);var d=()=>{const[e,t]=Object(n.useState)([]),{boardId:a}=Object(s.q)(),r=Object(s.o)();Object(n.useEffect)(()=>{fetch(`http://jootcamp.kro.kr/boards/${a}/posts`).then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Error fetching posts:",e))},[a]);return l.a.createElement("div",{className:"freeboard-container"},l.a.createElement("h2",null,"\uc790\uc720\uac8c\uc2dc\ud310"),e.length>0?l.a.createElement("div",{className:"post-list"},e.map(n=>l.a.createElement("div",{key:n.id,className:"post-item"},l.a.createElement("div",{className:"post-info"},l.a.createElement("h3",{className:"post-title",onClick:()=>(e=>{r(`/boards/${a}/posts/${e}`)})(n.id)},n.title),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"post-author"},"\uc791\uc131\uc790: ",n.author),l.a.createElement("span",{className:"post-views"},"\uc870\ud68c\uc218: ",n.views),l.a.createElement("button",{onClick:()=>(e=>{r(`/boards/${a}/posts/${e}/edit`)})(n.id)},"\uc218\uc815"),l.a.createElement("button",{onClick:()=>(n=>{fetch(`http://jootcamp.kro.kr/boards/${a}/posts/${n}`,{method:"DELETE"}).then(()=>{t(e.filter(e=>e.id!==n))}).catch(e=>console.error("Error deleting post:",e))})(n.id)},"\uc0ad\uc81c")))))):l.a.createElement("p",null,"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uae00\uc4f0\uae30\ub97c \ud1b5\ud574 \uc0c8 \uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694."),l.a.createElement("button",{className:"write-button",onClick:()=>{r(`/boards/${a}/new-post`)}},"\uae00\uc4f0\uae30"))};a(21);var h=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),{boardId:o}=Object(s.q)(),c=Object(s.o)();return l.a.createElement("div",{className:"new-post-container"},l.a.createElement("h2",null,"\uc0c8 \uae00 \uc791\uc131"),l.a.createElement("form",{onSubmit:t=>{t.preventDefault();const n={title:e,content:a,author:"\uc775\uba85"};fetch(`http://jootcamp.kro.kr/boards/${o}/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(()=>{c(`/boards/${o}`)}).catch(e=>console.error("Error creating post:",e))},className:"new-post-form"},l.a.createElement("input",{type:"text",placeholder:"\uc81c\ubaa9",value:e,onChange:e=>t(e.target.value),required:!0}),l.a.createElement("textarea",{placeholder:"\ub0b4\uc6a9",value:a,onChange:e=>r(e.target.value),required:!0}),l.a.createElement("button",{type:"submit",className:"submit-button"},"\uc791\uc131")))};a(22);var b=()=>{const{boardId:e,postId:t}=Object(s.q)(),a=Object(s.o)(),[r,o]=Object(n.useState)(null),[c,m]=Object(n.useState)([]),[i,u]=Object(n.useState)("");Object(n.useEffect)(()=>{fetch(`http://jootcamp.kro.kr/boards/${e}/posts/${t}`).then(e=>e.json()).then(a=>(o(a),fetch(`http://jootcamp.kro.kr/boards/${e}/posts/${t}/comments`))).then(e=>e.json()).then(e=>m(e)).catch(e=>console.error("Error fetching post or comments:",e))},[e,t]);return r?l.a.createElement("div",{className:"post-detail-container"},l.a.createElement("h2",null,r.title),l.a.createElement("p",{className:"post-content"},r.content),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",null,"\uc791\uc131\uc790: ",r.author),l.a.createElement("span",null,"\uc870\ud68c\uc218: ",r.views)),l.a.createElement("button",{className:"delete-post-button",onClick:()=>{fetch(`http://jootcamp.kro.kr/boards/${e}/posts/${t}`,{method:"DELETE"}).then(()=>{a(`/boards/${e}`)}).catch(e=>console.error("Error deleting post:",e))}},"\uae00 \uc0ad\uc81c"),l.a.createElement("div",{className:"comments-section"},l.a.createElement("h3",null,"\ub313\uae00"),c.length>0?l.a.createElement("ul",{className:"comments-list"},c.map(a=>l.a.createElement("li",{key:a.id,className:"comment-item"},l.a.createElement("span",{className:"comment-date"},a.createdAt),l.a.createElement("p",{className:"comment-content"},a.content),l.a.createElement("button",{className:"delete-comment-button",onClick:()=>(a=>{fetch(`http://jootcamp.kro.kr/boards/${e}/posts/${t}/comments/${a}`,{method:"DELETE"}).then(()=>{m(c.filter(e=>e.id!==a))}).catch(e=>console.error("Error deleting comment:",e))})(a.id)},"\ub313\uae00 \uc0ad\uc81c")))):l.a.createElement("p",null,"\uc544\uc9c1 \ub313\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uccab \ub313\uae00\uc744 \ub0a8\uaca8\ubcf4\uc138\uc694!")),l.a.createElement("div",{className:"comment-form"},l.a.createElement("textarea",{placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694...",value:i,onChange:e=>u(e.target.value),rows:"4"}),l.a.createElement("button",{onClick:a=>{if(a.preventDefault(),""===i.trim())return;const n={content:i};fetch(`http://jootcamp.kro.kr/boards/${e}/posts/${t}/comments`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{m([...c,e]),u("")}).catch(e=>console.error("Error adding comment:",e))}},"\ub313\uae00 \uc791\uc131"))):l.a.createElement("div",null,"\ud574\ub2f9 \uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")};const g=Object(n.createContext)(),v=e=>{let{children:t}=e;const[a,r]=Object(n.useState)(null);return l.a.createElement(g.Provider,{value:{user:a,login:e=>{r(e)},logout:()=>{r(null)}}},t)};a(23);var f=()=>{const{user:e}=Object(n.useContext)(g);return l.a.createElement("div",{className:"profile-container"},l.a.createElement("h2",null,"\ub0b4 \uc815\ubcf4"),e?l.a.createElement("div",{className:"profile-details"},l.a.createElement("p",null,l.a.createElement("strong",null,"Username:")," ",e.username),l.a.createElement("p",null,l.a.createElement("strong",null,"Name:")," ",e.name)):l.a.createElement("p",null,"\ub85c\uadf8\uc778\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))};a(24);var j=()=>{const[e,t]=Object(n.useState)(""),[a,r]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),[m,i]=Object(n.useState)(""),[u,p]=Object(n.useState)(""),E=Object(s.o)();return l.a.createElement("div",{className:"signup-container"},l.a.createElement("h2",null,"\ud68c\uc6d0\uac00\uc785"),l.a.createElement("form",{onSubmit:t=>{if(t.preventDefault(),o!==m)return void p("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");const n={username:e,email:a,password:o};fetch("http://jootcamp.kro.kr/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{e.success?E("/login"):p("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")}).catch(e=>{console.error("Error signing up:",e),p("\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")})},className:"signup-form"},u&&l.a.createElement("p",{className:"error-message"},u)," ",l.a.createElement("input",{type:"text",placeholder:"\uc0ac\uc6a9\uc790 \uc774\ub984",value:e,onChange:e=>t(e.target.value),required:!0}),l.a.createElement("input",{type:"email",placeholder:"\uc774\uba54\uc77c",value:a,onChange:e=>r(e.target.value),required:!0}),l.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:o,onChange:e=>c(e.target.value),required:!0}),l.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",value:m,onChange:e=>i(e.target.value),required:!0}),l.a.createElement("button",{type:"submit",className:"signup-button"},"\ud68c\uc6d0\uac00\uc785")))};var k=()=>l.a.createElement(c.a,null,l.a.createElement(m,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(u,null)}),l.a.createElement(s.a,{path:"/about",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"/login",element:l.a.createElement(E,null)}),l.a.createElement(s.a,{path:"/signup",element:l.a.createElement(j,null)}),l.a.createElement(s.a,{path:"/freeboard",element:l.a.createElement(d,null)}),l.a.createElement(s.a,{path:"/profile",element:l.a.createElement(f,null)}),l.a.createElement(s.a,{path:"/boards/:boardId",element:l.a.createElement(d,null)}),l.a.createElement(s.a,{path:"/boards/:boardId/new-post",element:l.a.createElement(h,null)}),l.a.createElement(s.a,{path:"/boards/:boardId/posts/:postId",element:l.a.createElement(b,null)}),l.a.createElement(s.a,{path:"/boards/:boardId/posts/:postId/edit",element:l.a.createElement(h,null)})," "));var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(v,null,l.a.createElement(k,null))),N()}],[[7,1,2]]]);
//# sourceMappingURL=main.551d20dc.chunk.js.map