import{S as e,i as t,s as n,x as a,e as r,d as $,y as s,z as o,m as l,A as c,C as i,v as m,h as f,I as g,D as p,E as d,F as u,L as h,c as y,k as w,o as b,p as z,q as v,r as x,J as E,b as C,t as R,f as I,j as A,g as F,l as U,n as V,K as B}from"./client.17911f39.js";import{B as L,C as T,M as k}from"./index.06b1f589.js";function q(e){let t,n,p,d,u=[{src:n=e[0]},{alt:e[1]},{title:e[4]},{loading:"lazy"},e[5]],h={};for(let e=0;e<u.length;e+=1)h=a(h,u[e]);return{c(){t=r("img"),this.h()},l(e){t=$(e,"IMG",{src:!0,alt:!0,title:!0,loading:!0}),this.h()},h(){s(t,h),o(t,"circle",e[2]),o(t,"rounded",e[3]),o(t,"svelte-hrf3rz",!0)},m(n,a){l(n,t,a),p||(d=[c(t,"click",e[7]),c(t,"error",D)],p=!0)},p(e,[a]){s(t,h=i(u,[1&a&&t.src!==(n=e[0])&&{src:n},2&a&&{alt:e[1]},16&a&&{title:e[4]},{loading:"lazy"},32&a&&e[5]])),o(t,"circle",e[2]),o(t,"rounded",e[3]),o(t,"svelte-hrf3rz",!0)},i:m,o:m,d(e){e&&f(t),p=!1,g(d)}}}const j="default_image.png";function D(){this.src!==j&&(this.onerror=null,this.src=j,this.alt="Image not found",this.title="Image not found")}function S(e,t,n){const r=["alt","circle","rounded","title","src","external"];let $=p(t,r),{alt:s}=t,{circle:o}=t,{rounded:l}=t,{title:c=s}=t,{src:i=j}=t,{external:m=!1}=t;return e.$$set=e=>{t=a(a({},t),d(e)),n(5,$=p(t,r)),"alt"in e&&n(1,s=e.alt),"circle"in e&&n(2,o=e.circle),"rounded"in e&&n(3,l=e.rounded),"title"in e&&n(4,c=e.title),"src"in e&&n(0,i=e.src),"external"in e&&n(6,m=e.external)},e.$$.update=()=>{65&e.$$.dirty&&(m||n(0,i=`/images/${i}`))},[i,s,o,l,c,$,m,function(t){u(e,t)}]}class _ extends e{constructor(e){super(),t(this,e,S,q,n,{alt:1,circle:2,rounded:3,title:4,src:0,external:6})}}function H(e){let t,n,a,s,o,c,i,m,g,p;return a=new E({props:{name:e[0],size:"24"}}),{c(){t=r("div"),n=r("header"),y(a.$$.fragment),s=C(),o=r("h4"),c=R(e[2]),i=C(),m=r("p"),g=R(e[3]),this.h()},l(r){t=$(r,"DIV",{class:!0});var l=I(t);n=$(l,"HEADER",{class:!0});var p=I(n);w(a.$$.fragment,p),s=A(p),o=$(p,"H4",{});var d=I(o);c=F(d,e[2]),d.forEach(f),p.forEach(f),i=A(l),m=$(l,"P",{class:!0});var u=I(m);g=F(u,e[3]),u.forEach(f),l.forEach(f),this.h()},h(){U(n,"class","svelte-eayi0p"),U(m,"class","svelte-eayi0p"),U(t,"class","project-card svelte-eayi0p")},m(e,r){l(e,t,r),V(t,n),b(a,n,null),V(n,s),V(n,o),V(o,c),V(t,i),V(t,m),V(m,g),p=!0},p(e,t){const n={};1&t&&(n.name=e[0]),a.$set(n),(!p||4&t)&&B(c,e[2]),(!p||8&t)&&B(g,e[3])},i(e){p||(z(a.$$.fragment,e),p=!0)},o(e){v(a.$$.fragment,e),p=!1},d(e){e&&f(t),x(a)}}}function P(e){let t,n;return t=new h({props:{to:e[4],label:e[1],$$slots:{default:[H]},$$scope:{ctx:e}}}),{c(){y(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){b(t,e,a),n=!0},p(e,[n]){const a={};16&n&&(a.to=e[4]),2&n&&(a.label=e[1]),45&n&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function N(e,t,n){let{icon:a}=t,{label:r}=t,{title:$="Fazt Project"}=t,{desc:s="Sin descripción"}=t,{link:o}=t;return e.$$set=e=>{"icon"in e&&n(0,a=e.icon),"label"in e&&n(1,r=e.label),"title"in e&&n(2,$=e.title),"desc"in e&&n(3,s=e.desc),"link"in e&&n(4,o=e.link)},[a,r,$,s,o]}class M extends e{constructor(e){super(),t(this,e,N,P,n,{icon:0,label:1,title:2,desc:3,link:4})}}function G(e){let t;return{c(){t=R("Unirme a la comunidad")},l(e){t=F(e,"Unirme a la comunidad")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function J(e){let t;return{c(){t=R("Ver proyectos")},l(e){t=F(e,"Ver proyectos")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function K(e){let t;return{c(){t=R("Unirme a la comunidad")},l(e){t=F(e,"Unirme a la comunidad")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function O(e){let t;return{c(){t=R("Ver proyectos")},l(e){t=F(e,"Ver proyectos")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function W(e){let t;return{c(){t=R("Unirme a la comunidad")},l(e){t=F(e,"Unirme a la comunidad")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function Q(e){let t;return{c(){t=R("Ver proyectos")},l(e){t=F(e,"Ver proyectos")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function X(e){let t;return{c(){t=R("Unirme a la comunidad")},l(e){t=F(e,"Unirme a la comunidad")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function Y(e){let t;return{c(){t=R("Ver proyectos")},l(e){t=F(e,"Ver proyectos")},m(e,n){l(e,t,n)},d(e){e&&f(t)}}}function Z(e){let t,n,a,s,o,c,i,m,g,p,d,u,h,B,q,j,D,S,H,P,N,Z,ee,te,ne,ae,re,$e,se,oe,le,ce,ie,me,fe,ge,pe,de,ue,he,ye,we,be,ze,ve,xe,Ee,Ce,Re,Ie,Ae,Fe,Ue,Ve,Be,Le,Te,ke,qe,je,De,Se,_e,He,Pe,Ne,Me,Ge,Je,Ke,Oe,We,Qe,Xe,Ye,Ze,et,tt,nt,at,rt,$t,st,ot,lt,ct,it,mt,ft,gt,pt,dt,ut,ht,yt;return a=new L({props:{fill:!0,primary:!0,large:!0,$$slots:{default:[G]},$$scope:{ctx:e}}}),o=new L({props:{fill:!0,large:!0,$$slots:{default:[J]},$$scope:{ctx:e}}}),p=new L({props:{primary:!0,large:!0,$$slots:{default:[K]},$$scope:{ctx:e}}}),u=new L({props:{large:!0,$$slots:{default:[O]},$$scope:{ctx:e}}}),D=new L({props:{fill:!0,primary:!0,large:!0,disabled:!0,$$slots:{default:[W]},$$scope:{ctx:e}}}),H=new L({props:{fill:!0,large:!0,disabled:!0,$$slots:{default:[Q]},$$scope:{ctx:e}}}),te=new L({props:{primary:!0,large:!0,disabled:!0,$$slots:{default:[X]},$$scope:{ctx:e}}}),ae=new L({props:{large:!0,disabled:!0,$$slots:{default:[Y]},$$scope:{ctx:e}}}),se=new E({}),le=new E({props:{name:"api",size:"32"}}),ie=new E({props:{name:"bot",size:"32"}}),fe=new E({props:{name:"eye",size:"32"}}),pe=new E({props:{name:"web",size:"32"}}),ue=new E({props:{name:"logo",size:"32"}}),ye=new E({props:{name:"check",size:"32"}}),be=new E({props:{name:"cross",size:"32"}}),ve=new E({props:{name:"error",size:"32"}}),Ee=new E({props:{name:"github",size:"32"}}),Re=new E({props:{name:"discord",size:"32"}}),Ae=new E({props:{name:"success",size:"32"}}),Ue=new E({props:{name:"warning",size:"32"}}),Be=new E({props:{name:"database",size:"32"}}),Te=new E({props:{name:"eyeclose",size:"32"}}),je=new _({props:{src:"community_left.png",rounded:!0}}),Se=new _({props:{src:"community_right.png",rounded:!0}}),He=new _({}),at=new T({props:{src:"community_left.png",blue:!0,left:!0}}),$t=new T({props:{src:"community_right.png",orange:!0,right:!0}}),lt=new M({props:{icon:"web",title:"Fazt Web",desc:"Es la web oficial de Fazt Community donde se colocan los proyectos y aportes de los integrandes de la comunidad."}}),it=new M({props:{icon:"api",title:"Fazt Api",desc:"Es el núcleo de los proyectos principales, este proyecto se encargará de unificar la base de datos con los demás proyectos."}}),ft=new M({props:{icon:"bot",title:"Fazt Bot",desc:"Un bot para Discord multipropósito capaz de realizar distintas actividades como saludos, reproducir música y mucho más."}}),pt=new M({props:{icon:"database",title:"Fazt Database",desc:"Analizamos distintos ámbitos de los proyectos comunitarios, para poder guardar todos los registros y/o datos."}}),ht=new k({}),{c(){t=r("section"),n=r("article"),y(a.$$.fragment),s=C(),y(o.$$.fragment),c=C(),i=r("br"),m=r("br"),g=C(),y(p.$$.fragment),d=C(),y(u.$$.fragment),h=C(),B=r("br"),q=r("br"),j=C(),y(D.$$.fragment),S=C(),y(H.$$.fragment),P=C(),N=r("br"),Z=r("br"),ee=C(),y(te.$$.fragment),ne=C(),y(ae.$$.fragment),re=C(),$e=r("article"),y(se.$$.fragment),oe=C(),y(le.$$.fragment),ce=C(),y(ie.$$.fragment),me=C(),y(fe.$$.fragment),ge=C(),y(pe.$$.fragment),de=C(),y(ue.$$.fragment),he=C(),y(ye.$$.fragment),we=C(),y(be.$$.fragment),ze=C(),y(ve.$$.fragment),xe=C(),y(Ee.$$.fragment),Ce=C(),y(Re.$$.fragment),Ie=C(),y(Ae.$$.fragment),Fe=C(),y(Ue.$$.fragment),Ve=C(),y(Be.$$.fragment),Le=C(),y(Te.$$.fragment),ke=C(),qe=r("article"),y(je.$$.fragment),De=C(),y(Se.$$.fragment),_e=C(),y(He.$$.fragment),Pe=C(),Ne=r("article"),Me=r("h1"),Ge=R("Somos Fazt Community"),Je=C(),Ke=r("h3"),Oe=R("Conoce a nuestra comunidad"),We=C(),Qe=r("p"),Xe=R("Fazt Community es un espacio donde podrás crecer como profesional,\n            participando en equipos y con personas de todo el mundo hispano\n            hablante."),Ye=C(),Ze=r("p"),et=R("No importa tu nivel, podrás encontrar un área donde unirte, aportar\n            de tu conocimiento con otros, recibir ayuda y vas a conocer gente\n            que comparten la misma pasión que tú."),tt=C(),nt=r("article"),y(at.$$.fragment),rt=C(),y($t.$$.fragment),st=C(),ot=r("article"),y(lt.$$.fragment),ct=C(),y(it.$$.fragment),mt=C(),y(ft.$$.fragment),gt=C(),y(pt.$$.fragment),dt=C(),ut=r("article"),y(ht.$$.fragment),this.h()},l(e){t=$(e,"SECTION",{class:!0});var r=I(t);n=$(r,"ARTICLE",{});var l=I(n);w(a.$$.fragment,l),s=A(l),w(o.$$.fragment,l),c=A(l),i=$(l,"BR",{}),m=$(l,"BR",{}),g=A(l),w(p.$$.fragment,l),d=A(l),w(u.$$.fragment,l),h=A(l),B=$(l,"BR",{}),q=$(l,"BR",{}),j=A(l),w(D.$$.fragment,l),S=A(l),w(H.$$.fragment,l),P=A(l),N=$(l,"BR",{}),Z=$(l,"BR",{}),ee=A(l),w(te.$$.fragment,l),ne=A(l),w(ae.$$.fragment,l),l.forEach(f),re=A(r),$e=$(r,"ARTICLE",{});var y=I($e);w(se.$$.fragment,y),oe=A(y),w(le.$$.fragment,y),ce=A(y),w(ie.$$.fragment,y),me=A(y),w(fe.$$.fragment,y),ge=A(y),w(pe.$$.fragment,y),de=A(y),w(ue.$$.fragment,y),he=A(y),w(ye.$$.fragment,y),we=A(y),w(be.$$.fragment,y),ze=A(y),w(ve.$$.fragment,y),xe=A(y),w(Ee.$$.fragment,y),Ce=A(y),w(Re.$$.fragment,y),Ie=A(y),w(Ae.$$.fragment,y),Fe=A(y),w(Ue.$$.fragment,y),Ve=A(y),w(Be.$$.fragment,y),Le=A(y),w(Te.$$.fragment,y),y.forEach(f),ke=A(r),qe=$(r,"ARTICLE",{});var b=I(qe);w(je.$$.fragment,b),De=A(b),w(Se.$$.fragment,b),_e=A(b),w(He.$$.fragment,b),b.forEach(f),Pe=A(r),Ne=$(r,"ARTICLE",{class:!0});var z=I(Ne);Me=$(z,"H1",{class:!0});var v=I(Me);Ge=F(v,"Somos Fazt Community"),v.forEach(f),Je=A(z),Ke=$(z,"H3",{class:!0});var x=I(Ke);Oe=F(x,"Conoce a nuestra comunidad"),x.forEach(f),We=A(z),Qe=$(z,"P",{class:!0});var E=I(Qe);Xe=F(E,"Fazt Community es un espacio donde podrás crecer como profesional,\n            participando en equipos y con personas de todo el mundo hispano\n            hablante."),E.forEach(f),Ye=A(z),Ze=$(z,"P",{class:!0});var C=I(Ze);et=F(C,"No importa tu nivel, podrás encontrar un área donde unirte, aportar\n            de tu conocimiento con otros, recibir ayuda y vas a conocer gente\n            que comparten la misma pasión que tú."),C.forEach(f),z.forEach(f),tt=A(r),nt=$(r,"ARTICLE",{class:!0});var R=I(nt);w(at.$$.fragment,R),rt=A(R),w($t.$$.fragment,R),R.forEach(f),st=A(r),ot=$(r,"ARTICLE",{class:!0});var U=I(ot);w(lt.$$.fragment,U),ct=A(U),w(it.$$.fragment,U),mt=A(U),w(ft.$$.fragment,U),gt=A(U),w(pt.$$.fragment,U),U.forEach(f),dt=A(r),ut=$(r,"ARTICLE",{});var V=I(ut);w(ht.$$.fragment,V),V.forEach(f),r.forEach(f),this.h()},h(){U(Me,"class","title"),U(Ke,"class","subtitle"),U(Qe,"class","text"),U(Ze,"class","text"),U(Ne,"class","container svelte-incplt"),U(nt,"class","container svelte-incplt"),U(ot,"class","container projects svelte-incplt"),U(t,"class","svelte-incplt")},m(e,r){l(e,t,r),V(t,n),b(a,n,null),V(n,s),b(o,n,null),V(n,c),V(n,i),V(n,m),V(n,g),b(p,n,null),V(n,d),b(u,n,null),V(n,h),V(n,B),V(n,q),V(n,j),b(D,n,null),V(n,S),b(H,n,null),V(n,P),V(n,N),V(n,Z),V(n,ee),b(te,n,null),V(n,ne),b(ae,n,null),V(t,re),V(t,$e),b(se,$e,null),V($e,oe),b(le,$e,null),V($e,ce),b(ie,$e,null),V($e,me),b(fe,$e,null),V($e,ge),b(pe,$e,null),V($e,de),b(ue,$e,null),V($e,he),b(ye,$e,null),V($e,we),b(be,$e,null),V($e,ze),b(ve,$e,null),V($e,xe),b(Ee,$e,null),V($e,Ce),b(Re,$e,null),V($e,Ie),b(Ae,$e,null),V($e,Fe),b(Ue,$e,null),V($e,Ve),b(Be,$e,null),V($e,Le),b(Te,$e,null),V(t,ke),V(t,qe),b(je,qe,null),V(qe,De),b(Se,qe,null),V(qe,_e),b(He,qe,null),V(t,Pe),V(t,Ne),V(Ne,Me),V(Me,Ge),V(Ne,Je),V(Ne,Ke),V(Ke,Oe),V(Ne,We),V(Ne,Qe),V(Qe,Xe),V(Ne,Ye),V(Ne,Ze),V(Ze,et),V(t,tt),V(t,nt),b(at,nt,null),V(nt,rt),b($t,nt,null),V(t,st),V(t,ot),b(lt,ot,null),V(ot,ct),b(it,ot,null),V(ot,mt),b(ft,ot,null),V(ot,gt),b(pt,ot,null),V(t,dt),V(t,ut),b(ht,ut,null),yt=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),a.$set(n);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),o.$set(r);const $={};1&t&&($.$$scope={dirty:t,ctx:e}),p.$set($);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),u.$set(s);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),D.$set(l);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),H.$set(c);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),te.$set(i);const m={};1&t&&(m.$$scope={dirty:t,ctx:e}),ae.$set(m)},i(e){yt||(z(a.$$.fragment,e),z(o.$$.fragment,e),z(p.$$.fragment,e),z(u.$$.fragment,e),z(D.$$.fragment,e),z(H.$$.fragment,e),z(te.$$.fragment,e),z(ae.$$.fragment,e),z(se.$$.fragment,e),z(le.$$.fragment,e),z(ie.$$.fragment,e),z(fe.$$.fragment,e),z(pe.$$.fragment,e),z(ue.$$.fragment,e),z(ye.$$.fragment,e),z(be.$$.fragment,e),z(ve.$$.fragment,e),z(Ee.$$.fragment,e),z(Re.$$.fragment,e),z(Ae.$$.fragment,e),z(Ue.$$.fragment,e),z(Be.$$.fragment,e),z(Te.$$.fragment,e),z(je.$$.fragment,e),z(Se.$$.fragment,e),z(He.$$.fragment,e),z(at.$$.fragment,e),z($t.$$.fragment,e),z(lt.$$.fragment,e),z(it.$$.fragment,e),z(ft.$$.fragment,e),z(pt.$$.fragment,e),z(ht.$$.fragment,e),yt=!0)},o(e){v(a.$$.fragment,e),v(o.$$.fragment,e),v(p.$$.fragment,e),v(u.$$.fragment,e),v(D.$$.fragment,e),v(H.$$.fragment,e),v(te.$$.fragment,e),v(ae.$$.fragment,e),v(se.$$.fragment,e),v(le.$$.fragment,e),v(ie.$$.fragment,e),v(fe.$$.fragment,e),v(pe.$$.fragment,e),v(ue.$$.fragment,e),v(ye.$$.fragment,e),v(be.$$.fragment,e),v(ve.$$.fragment,e),v(Ee.$$.fragment,e),v(Re.$$.fragment,e),v(Ae.$$.fragment,e),v(Ue.$$.fragment,e),v(Be.$$.fragment,e),v(Te.$$.fragment,e),v(je.$$.fragment,e),v(Se.$$.fragment,e),v(He.$$.fragment,e),v(at.$$.fragment,e),v($t.$$.fragment,e),v(lt.$$.fragment,e),v(it.$$.fragment,e),v(ft.$$.fragment,e),v(pt.$$.fragment,e),v(ht.$$.fragment,e),yt=!1},d(e){e&&f(t),x(a),x(o),x(p),x(u),x(D),x(H),x(te),x(ae),x(se),x(le),x(ie),x(fe),x(pe),x(ue),x(ye),x(be),x(ve),x(Ee),x(Re),x(Ae),x(Ue),x(Be),x(Te),x(je),x(Se),x(He),x(at),x($t),x(lt),x(it),x(ft),x(pt),x(ht)}}}export default class extends e{constructor(e){super(),t(this,e,null,Z,n,{})}}
