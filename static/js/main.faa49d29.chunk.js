(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{18:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},35:function(n,e,t){n.exports=t.p+"static/media/github-background.0b819d63.svg"},44:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(34),l=t.n(o),i=t(9),c=t(4),u=t(5),s=t(35),p=t.n(s);function d(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: #F0F0F5;\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body,\n  input,\n  button {\n    font-size: 16px;\n    font-family: Roboto, sans-serif;\n  }\n\n  #root {\n    margin: 0 auto;\n    max-width: 960px;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}var m=Object(u.a)(d(),p.a),f=t(8),b=t(20),g=t.n(b),x=t(43),h=t(39),E=t(11),v=t(16),O=t(40),j=t.n(O).a.create({baseURL:"https://api.github.com",headers:{Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"/github-explorer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_AUTHORIZATION}}),y=t(18),k=t.n(y),w=t(42);function _(){var n=Object(c.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    align-items: center;\n    background-color: #fff;\n    border-radius: 5px;\n    display: block;\n    display: flex;\n    padding: 24px;\n    text-decoration: none;\n    transition: transform 250ms;\n    width: 100%;\n\n    &:focus,\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    &:not(:first-child) {\n      margin-top: 16px;\n    }\n\n    img {\n      border-radius: 50%;\n      height: 64px;\n      width: 64px;\n    }\n\n    div {\n      flex: 1;\n      margin: 0 16px;\n\n      strong {\n        color: #3d3d4d;\n        font-size: 20px;\n      }\n\n      p {\n        color: #a8a8b3;\n        font-size: 18px;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      color: #cbcbd6;\n      margin-left: auto;\n    }\n  }\n"]);return _=function(){return n},n}function S(){var n=Object(c.a)(["\n  color: #c53030;\n  display: block;\n  margin-top: 8px;\n"]);return S=function(){return n},n}function z(){var n=Object(c.a)(["\n        border-color: #c53030;\n      "]);return z=function(){return n},n}function T(){var n=Object(c.a)(["\n  display: flex;\n  margin-top: 40px;\n  max-width: 700px;\n\n  input {\n    border-bottom-width: 2px;\n    border-color: #fff;\n    border-left-width: 2px;\n    border-radius: 5px 0 0 5px;\n    border-right-width: 0;\n    border-style: solid;\n    border-top-width: 2px;\n    color: #3a3a3a;\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n\n    ","\n\n    &::placeholder {\n      color: #a8a8b3;\n    }\n  }\n\n  button {\n    background-color: #04d361;\n    border-radius: 0 5px 5px 0;\n    border: none;\n    color: #fff;\n    font-weight: bold;\n    height: 70px;\n    transition: background-color 250ms;\n    width: 210px;\n\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  }\n"]);return T=function(){return n},n}function I(){var n=Object(c.a)(["\n  color: #3a3a3a;\n  font-size: 48px;\n  line-height: 56px;\n  margin-top: 80px;\n  max-width: 450px;\n"]);return I=function(){return n},n}var C=u.c.h1(I()),D=u.c.form(T(),(function(n){return n.hasError&&Object(u.b)(z())}),Object(w.a)(.2,"#04d361")),F=u.c.span(S()),R=u.c.div(_()),A=function(){var n=Object(r.useState)(""),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),c=Object(E.a)(l,2),u=c[0],s=c[1],p=Object(r.useState)((function(){var n=localStorage.getItem("@github-explorer:repositories");return n?JSON.parse(n):[]})),d=Object(E.a)(p,2),m=d[0],f=d[1];function b(){return(b=Object(h.a)(g.a.mark((function n(e){var r,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return s("Digite o autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,j.get("repos/".concat(t));case 7:r=n.sent,a=r.data,f([].concat(Object(x.a)(m),[a])),o(""),s(""),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),s("Erro na busca por esse reposit\xf3rio");case 17:case"end":return n.stop()}}),n,null,[[4,14]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@github-explorer:repositories",JSON.stringify(m))}),[m]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(C,null,"Explore Reposit\xf3rios no Github"),a.a.createElement(D,{onSubmit:function(n){return b.apply(this,arguments)},hasError:Boolean(u)},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite o nome do reposit\xf3rio"}),a.a.createElement("button",{type:"submit"},"Pesquisar")),u&&a.a.createElement(F,null,u),a.a.createElement(R,null,m.map((function(n){return a.a.createElement(i.b,{to:"/repositories/".concat(n.full_name),key:n.full_name},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.b,{size:20}))}))))};function P(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  a {\n    align-items: center;\n    background-color: #fff;\n    border-radius: 5px;\n    display: block;\n    display: flex;\n    padding: 24px;\n    text-decoration: none;\n    transition: transform 250ms;\n    width: 100%;\n\n    &:focus,\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    &:not(:first-child) {\n      margin-top: 16px;\n    }\n\n    div {\n      flex: 1;\n      margin: 0 16px;\n\n      strong {\n        color: #3d3d4d;\n        font-size: 20px;\n      }\n\n      p {\n        color: #a8a8b3;\n        font-size: 18px;\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      color: #cbcbd6;\n      margin-left: auto;\n    }\n  }\n"]);return P=function(){return n},n}function N(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  header {\n    align-items: center;\n    display: flex;\n\n    img {\n      border-radius: 50%;\n      height: 120px;\n      width: 120px;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        color: #3d3d4d;\n        font-size: 24px;\n      }\n\n      p {\n        color: #737380;\n        font-size: 18px;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      &:not(:first-child) {\n        margin-left: 80px;\n      }\n\n      strong {\n        color: #3d3d4d;\n        display: block;\n        font-size: 36px;\n      }\n\n      span {\n        color: #6c6c80;\n        display: block;\n        margin-top: 4px;\n      }\n    }\n  }\n"]);return N=function(){return n},n}function U(){var n=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  a {\n    align-items: center;\n    color: #a8a8b3;\n    display: flex;\n    text-decoration: nonw;\n    transition: color 250ms;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return U=function(){return n},n}var B=u.c.header(U()),G=u.c.section(N()),H=u.c.div(P()),J=function(){var n=Object(r.useState)(null),e=Object(E.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),c=Object(E.a)(l,2),u=c[0],s=c[1],p=Object(f.f)().params;return Object(r.useEffect)((function(){j.get("repos/".concat(p.repository)).then((function(n){o(n.data)})),j.get("repos/".concat(p.repository,"/issues")).then((function(n){s(n.data)}))}),[p.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(i.b,{to:"/"},a.a.createElement(v.a,{size:16}),"Voltar")),t?a.a.createElement(G,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues abertas")))):a.a.createElement("p",null,"Carregando"),a.a.createElement(H,null,u.map((function(n){return a.a.createElement("a",{href:n.html_url,key:n.id,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.b,{size:20}))}))))},K=function(){return a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:A}),a.a.createElement(f.a,{path:"/repositories/:repository+",component:J}))},L=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(K,null)),a.a.createElement(m,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.faa49d29.chunk.js.map