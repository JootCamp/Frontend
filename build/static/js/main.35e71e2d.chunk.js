(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=(a(15),a(3)),s=a(2);a(16);var m=e=>{let{user:t,setUser:a}=e;const n=Object(s.o)();return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-left"},r.a.createElement("h1",{onClick:()=>n("/")},"Jootcamp"),r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:()=>n("/freeboard")},"\uc790\uc720\uac8c\uc2dc\ud310")),r.a.createElement("li",null,r.a.createElement("button",{onClick:()=>n("/playground")},"\ub180\uc774\ud130"))," "))),r.a.createElement("div",{className:"header-right"},r.a.createElement("button",{className:"info-button",onClick:()=>{n(t?"/profile":"/login")}},t?"\ub0b4 \uc815\ubcf4":"Login"),!t&&r.a.createElement("button",{className:"signup-button",onClick:()=>{n("/signup")}},"\ud68c\uc6d0\uac00\uc785"),t&&r.a.createElement("button",{className:"login-button",onClick:()=>{a(null),n("/")}},"Logout")))};a(17);const i="http://13.125.19.45:8080";var u=e=>{let{setUser:t}=e;const[a,l]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),[m,u]=Object(n.useState)(""),d=Object(s.o)();return r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{onSubmit:e=>{e.preventDefault();const n={email:a,password:o};fetch(`${i}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),credentials:"include"}).then(e=>{if(e.ok)return e.json();throw u("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694."),new Error("Login failed")}).then(e=>{e&&(t(e),d("/"))}).catch(e=>{console.error("Error logging in:",e),u("\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")})},className:"login-form"},r.a.createElement("h2",null,"\ub85c\uadf8\uc778"),m&&r.a.createElement("p",{className:"error-message"},m)," ",r.a.createElement("input",{type:"email",placeholder:"\uc774\uba54\uc77c",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:o,onChange:e=>c(e.target.value),required:!0}),r.a.createElement("button",{type:"submit"},"\ub85c\uadf8\uc778")," "))};a(18);var d=()=>{const[e,t]=Object(n.useState)([]),[a,l]=Object(n.useState)({}),{boardId:o}=Object(s.q)(),c=Object(s.o)();Object(n.useEffect)(()=>{fetch(`${i}/boards/${o}/posts?size=20&page=1`).then(e=>e.json()).then(e=>{t(e.data||[]),l(e.metadata)}).catch(e=>console.error("Error fetching posts:",e))},[o]);return r.a.createElement("div",{className:"freeboard-container"},r.a.createElement("h2",null,"\uc790\uc720\uac8c\uc2dc\ud310"),e.length>0?r.a.createElement("div",{className:"post-list"},e.map(a=>r.a.createElement("div",{key:a.id,className:"post-item",onClick:()=>(e=>{c(`/boards/${o}/posts/${e}`)})(a.id)},r.a.createElement("div",{className:"post-info"},r.a.createElement("h3",{className:"post-title"},a.title),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",{className:"post-author"},"\uc791\uc131\uc790: ",a.userId),r.a.createElement("span",{className:"post-date"},"\uc791\uc131\uc77c: ",a.time))),r.a.createElement("div",{className:"post-actions"},r.a.createElement("button",{className:"view-button"},"\ubcf4\uae30"),r.a.createElement("button",{className:"delete-button",onClick:n=>{n.stopPropagation(),(a=>{fetch(`${i}/boards/${o}/posts/${a}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:1,userEmail:"user@example.com",nickname:"User"})}).then(()=>{t(e.filter(e=>e.id!==a))}).catch(e=>console.error("Error deleting post:",e))})(a.id)}},"\uc0ad\uc81c"))))):r.a.createElement("p",null,"\uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uae00\uc4f0\uae30\ub97c \ud1b5\ud574 \uc0c8 \uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694."),r.a.createElement("button",{className:"create-post-button",onClick:()=>{c(`/boards/${o}/new-post`)}},"\uae00\uc4f0\uae30"))};a(19);var p=e=>{let{user:t}=e;const[a,l]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),{boardId:m}=Object(s.q)(),u=Object(s.o)();return r.a.createElement("div",{className:"new-post-container"},r.a.createElement("h2",null,"\uc0c8 \uae00 \uc791\uc131"),r.a.createElement("form",{onSubmit:e=>{e.preventDefault();const n={title:a,content:o,userId:t.id,userEmail:t.email,nickname:t.nickname};fetch(`${i}/boards/${m}/posts`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw new Error("\uac8c\uc2dc\uae00 \uc0dd\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");return e.json()}).then(()=>{u(`/boards/${m}`)}).catch(e=>console.error("Error creating post:",e))},className:"new-post-form"},r.a.createElement("input",{type:"text",placeholder:"\uc81c\ubaa9",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("textarea",{placeholder:"\ub0b4\uc6a9",value:o,onChange:e=>c(e.target.value),required:!0}),r.a.createElement("button",{type:"submit",className:"submit-button"},"\uc791\uc131")))};a(20);var E=e=>{let{user:t}=e;const{boardId:a,postId:l}=Object(s.q)(),[o,c]=Object(n.useState)(null),m=Object(s.o)();Object(n.useEffect)(()=>{fetch(`${i}/boards/${a}/posts/${l}`).then(e=>e.json()).then(e=>c(e)).catch(e=>console.error("Error fetching post:",e))},[a,l]);return o?r.a.createElement("div",{className:"post-detail-container"},r.a.createElement("h2",null,o.title),r.a.createElement("p",{className:"post-content"},o.content),r.a.createElement("div",{className:"post-meta"},r.a.createElement("span",null,"\uc791\uc131\uc790: ",o.userId)," ",r.a.createElement("span",null,"\uc791\uc131\uc77c: ",o.time),"  "),r.a.createElement("button",{onClick:()=>{m(`/boards/${a}/posts/${l}/edit`)}},"\uc218\uc815"),r.a.createElement("button",{onClick:()=>{fetch(`${i}/boards/${a}/posts/${l}`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t.id,userEmail:t.email,nickname:t.nickname})}).then(()=>{m(`/boards/${a}`)}).catch(e=>console.error("Error deleting post:",e))}},"\uc0ad\uc81c")):r.a.createElement("div",null,"Loading...")};const b=Object(n.createContext)(),h=e=>{let{children:t}=e;const[a,l]=Object(n.useState)(null);return r.a.createElement(b.Provider,{value:{user:a,login:e=>{l(e)},logout:()=>{l(null)}}},t)};a(21);var g=()=>{const{user:e}=Object(n.useContext)(b);return r.a.createElement("div",{className:"profile-container"},r.a.createElement("h2",null,"\ub0b4 \uc815\ubcf4"),e?r.a.createElement("div",{className:"profile-details"},r.a.createElement("p",null,r.a.createElement("strong",null,"Username:")," ",e.username)):r.a.createElement("p",null,"\ub85c\uadf8\uc778\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."))};a(22);var f=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),[m,u]=Object(n.useState)(""),[d,p]=Object(n.useState)(""),[E,b]=Object(n.useState)(""),h=Object(s.o)();return r.a.createElement("div",{className:"signup-container"},r.a.createElement("h2",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement("form",{onSubmit:t=>{if(t.preventDefault(),o!==m)return void b("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");const n={name:e,email:a,password:o,nickname:d};fetch(`${i}/signup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>{!0===e?h("/login"):b("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")}).catch(e=>{console.error("Error signing up:",e),b("\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")})},className:"signup-form"},E&&r.a.createElement("p",{className:"error-message"},E),r.a.createElement("input",{type:"text",placeholder:"\uc774\ub984",value:e,onChange:e=>t(e.target.value),required:!0}),r.a.createElement("input",{type:"text",placeholder:"\ub2c9\ub124\uc784",value:d,onChange:e=>p(e.target.value),required:!0}),r.a.createElement("input",{type:"email",placeholder:"\uc774\uba54\uc77c",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",value:o,onChange:e=>c(e.target.value),required:!0}),r.a.createElement("input",{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778",value:m,onChange:e=>u(e.target.value),required:!0}),r.a.createElement("button",{type:"submit",className:"signup-button"},"\ud68c\uc6d0\uac00\uc785")))};a(23);var v=()=>{const[e,t]=Object(n.useState)([]),a=Object(s.o)();Object(n.useEffect)(()=>{fetch(`${i}/boards`).then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Error fetching boards:",e))},[]);return r.a.createElement("div",{className:"playground-container"},r.a.createElement("h2",null,"\ub180\uc774\ud130"),r.a.createElement("div",{className:"boards-list"},e.length>0?e.map(e=>r.a.createElement("div",{key:e.id,className:"board-item",onClick:()=>(e=>{a(`/boards/${e}`)})(e.id)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description))):r.a.createElement("p",null,"\uac8c\uc2dc\ud310\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \uac8c\uc2dc\ud310\uc744 \uc0dd\uc131\ud574\ubcf4\uc138\uc694!")),r.a.createElement("button",{className:"create-board-button",onClick:()=>{a("/create-board")}},"\uac8c\uc2dc\ud310 \uc0dd\uc131"))};a(24);var j=e=>{let{user:t}=e;const[a,l]=Object(n.useState)(""),[o,c]=Object(n.useState)(""),[m,u]=Object(n.useState)(""),d=Object(s.o)();return r.a.createElement("div",{className:"create-board-container"},r.a.createElement("h2",null,"\uac8c\uc2dc\ud310 \uc0dd\uc131"),r.a.createElement("form",{onSubmit:e=>{if(e.preventDefault(),!t||!t.id)return void u("\uc0ac\uc6a9\uc790 \uc815\ubcf4\uac00 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud6c4 \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.");const n={title:a,description:o,userId:t.id,userEmail:t.email,nickname:t.nickname};fetch(`${i}/boards`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>{if(!e.ok)throw new Error("\uac8c\uc2dc\ud310 \uc0dd\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.");return e.json()}).then(()=>{d("/playground")}).catch(e=>{console.error("Error creating board:",e),u("\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.")})},className:"create-board-form"},m&&r.a.createElement("p",{className:"error-message"},m),r.a.createElement("input",{type:"text",placeholder:"\uac8c\uc2dc\ud310 \uc81c\ubaa9",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("textarea",{placeholder:"\uac8c\uc2dc\ud310 \uc124\uba85",value:o,onChange:e=>c(e.target.value),required:!0}),r.a.createElement("button",{type:"submit",className:"create-button"},"\uc0dd\uc131")))};var N=()=>{const[e,t]=Object(n.useState)(null);return r.a.createElement(c.a,null,r.a.createElement(m,{user:e,setUser:t}),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/login",element:r.a.createElement(u,{setUser:t})})," ",r.a.createElement(s.a,{path:"/signup",element:r.a.createElement(f,null)}),r.a.createElement(s.a,{path:"/freeboard",element:r.a.createElement(d,null)}),r.a.createElement(s.a,{path:"/profile",element:r.a.createElement(g,null)}),r.a.createElement(s.a,{path:"/boards/:boardId",element:r.a.createElement(d,null)}),r.a.createElement(s.a,{path:"/boards/:boardId/new-post",element:r.a.createElement(p,null)}),r.a.createElement(s.a,{path:"/boards/:boardId/posts/:postId",element:r.a.createElement(E,null)}),r.a.createElement(s.a,{path:"/boards/:boardId/posts/:postId/edit",element:r.a.createElement(p,null)})," ",r.a.createElement(s.a,{path:"/playground",element:r.a.createElement(v,null)}),r.a.createElement(s.a,{path:"/create-board",element:r.a.createElement(j,null)})))};var O=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:o}=t;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(h,null,r.a.createElement(N,null))),O()}],[[7,1,2]]]);
//# sourceMappingURL=main.35e71e2d.chunk.js.map