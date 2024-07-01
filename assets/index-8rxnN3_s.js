var we=Object.defineProperty;var be=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var U=(t,e,n)=>(be(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function g(){}function ge(t){return t()}function le(){return Object.create(null)}function G(t){t.forEach(ge)}function pe(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function $e(t,e){return t===e?!0:(F||(F=document.createElement("a")),F.href=e,t===F.href)}function _e(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function _(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function me(t){return document.createTextNode(t)}function h(){return me(" ")}function ke(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ye(t){return Array.from(t.childNodes)}function Me(t,e){e=""+e,t.data!==e&&(t.data=e)}let q;function C(t){q=t}function Te(){if(!q)throw new Error("Function called outside component initialization");return q}function Le(t){Te().$$.on_destroy.push(t)}const T=[],ce=[];let L=[];const oe=[],Ee=Promise.resolve();let Y=!1;function ze(){Y||(Y=!0,Ee.then(ve))}function Z(t){L.push(t)}const K=new Set;let y=0;function ve(){if(y!==0)return;const t=q;do{try{for(;y<T.length;){const e=T[y];y++,C(e),je(e.$$)}}catch(e){throw T.length=0,y=0,e}for(C(null),T.length=0,y=0;ce.length;)ce.pop()();for(let e=0;e<L.length;e+=1){const n=L[e];K.has(n)||(K.add(n),n())}L.length=0}while(T.length);for(;oe.length;)oe.pop()();Y=!1,K.clear(),C(t)}function je(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Se(t){const e=[],n=[];L.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),L=e}const R=new Set;let Ae;function j(t,e){t&&t.i&&(R.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(R.has(t))return;R.add(t),Ae.c.push(()=>{R.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function P(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function X(t){t&&t.c()}function S(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),Z(()=>{const l=t.$$.on_mount.map(ge).filter(pe);t.$$.on_destroy?t.$$.on_destroy.push(...l):G(l),t.$$.on_mount=[]}),r.forEach(Z)}function A(t,e){const n=t.$$;n.fragment!==null&&(Se(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ce(t,e){t.$$.dirty[0]===-1&&(T.push(t),ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,s,r,l,i=null,o=[-1]){const a=q;C(t);const c=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:le(),dirty:o,skip_bound:!1,root:e.target||a.$$.root};i&&i(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(m,w,...z)=>{const b=z.length?z[0]:w;return c.ctx&&r(c.ctx[m],c.ctx[m]=b)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](b),p&&Ce(t,m)),w}):[],c.update(),p=!0,G(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const m=ye(e.target);c.fragment&&c.fragment.l(m),m.forEach($)}else c.fragment&&c.fragment.c();e.intro&&j(t.$$.fragment),S(t,e.target,e.anchor),ve()}C(a)}class B{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){A(this,1),this.$destroy=g}$on(e,n){if(!pe(n))return g;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!_e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);function ae(t,e,n){const s=t.slice();return s[1]=e[n].icon,s[2]=e[n].name,s[3]=e[n].description,s}function de(t){let e,n,s,r,l,i,o,a,c;return{c(){e=u("div"),n=u("img"),r=h(),l=u("div"),i=u("h3"),i.textContent=`${t[2]}`,o=h(),a=u("p"),a.textContent=`${t[3]}`,c=h(),$e(n.src,s=t[1])||f(n,"src",s),f(n,"alt",""),f(n,"class","svelte-1k8swyp"),f(i,"class","svelte-1k8swyp"),f(a,"class","dark:text-gray-400 text-sm svelte-1k8swyp"),f(l,"class","flex flex-col svelte-1k8swyp"),f(e,"class","box p-2 pr-4 after:bg-gray-100 dark:after:bg-neutral-800 svelte-1k8swyp")},m(p,m){_(p,e,m),d(e,n),d(e,r),d(e,l),d(l,i),d(l,o),d(l,a),d(e,c)},p:g,d(p){p&&$(e)}}}function Pe(t){let e,n,s,r,l=P(t[0]),i=[];for(let o=0;o<l.length;o+=1)i[o]=de(ae(t,l,o));return{c(){e=u("section"),n=u("div"),n.innerHTML="",s=h(),r=u("div");for(let o=0;o<i.length;o+=1)i[o].c();f(n,"class","head"),f(r,"class","flex gap-3 flex-wrap")},m(o,a){_(o,e,a),d(e,n),d(e,s),d(e,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(r,null)},p(o,[a]){if(a&1){l=P(o[0]);let c;for(c=0;c<l.length;c+=1){const p=ae(o,l,c);i[c]?i[c].p(p,a):(i[c]=de(p),i[c].c(),i[c].m(r,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=l.length}},i:g,o:g,d(o){o&&$(e),J(i,o)}}}function Ne(t){return[[{icon:"https://framerusercontent.com/images/nQwkPe6iw9Q1WXAIuP6kSV6sXco.svg",name:"Figma",description:"Collaborative Design"},{icon:"https://framerusercontent.com/images/uv8pgnBL3RB8Ctw1E95TVWj5U.svg",name:"Notion",description:"Profesional Notes"},{icon:"https://framerusercontent.com/images/Xte9NzRRy74yXEiyjWykEmlyVRA.svg",name:"HTML",description:"Strcture and Content"},{icon:"https://framerusercontent.com/images/LKlrGEkvvSunNXQZWYv8aso0.svg",name:"React JS",description:"Dynamic Develoment"},{icon:"https://framerusercontent.com/images/LKlrGEkvvSunNXQZWYv8aso0.svg",name:"Python",description:"Framework Django"}]]}class Be extends B{constructor(e){super(),N(this,e,Ne,Pe,E,{})}}function ue(t,e,n){const s=t.slice();return s[1]=e[n].title,s[2]=e[n].time,s}function fe(t){let e,n,s,r,l,i,o,a;return{c(){e=u("div"),n=u("div"),n.innerHTML='<img class="rounded-full w-6" src="https://mighty.tools/mockmind-api/content/cartoon/25.jpg" alt=""/> <div class="line flex-grow w-0.5 bg-gray-300 dark:bg-gray-500 svelte-gz3ucb"></div>',s=h(),r=u("div"),l=u("h3"),l.textContent=`${t[1]}`,i=h(),o=u("p"),o.textContent=`${t[2]}`,a=h(),f(n,"class","flex flex-col gap-1 items-center"),f(l,"class","font-bold"),f(o,"class","text-sm text-neutral-500"),f(r,"class","flex flex-col pb-3"),f(e,"class","card-timeline font-mono flex gap-2 svelte-gz3ucb")},m(c,p){_(c,e,p),d(e,n),d(e,s),d(e,r),d(r,l),d(r,i),d(r,o),d(e,a)},p:g,d(c){c&&$(e)}}}function He(t){let e,n,s,r=P(t[0]),l=[];for(let i=0;i<r.length;i+=1)l[i]=fe(ue(t,r,i));return{c(){e=u("section"),n=u("h2"),n.textContent="Work Experience",s=h();for(let i=0;i<l.length;i+=1)l[i].c();f(n,"class","font-black font-mono text-lg"),f(e,"class","flex flex-col gap-3")},m(i,o){_(i,e,o),d(e,n),d(e,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null)},p(i,[o]){if(o&1){r=P(i[0]);let a;for(a=0;a<r.length;a+=1){const c=ue(i,r,a);l[a]?l[a].p(c,o):(l[a]=fe(c),l[a].c(),l[a].m(e,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}},i:g,o:g,d(i){i&&$(e),J(l,i)}}}function Oe(t){return[[{title:"Semillero de Investigación en MerakT",time:"Actualmente"},{title:"Universidad",time:"2021-2023"},{title:"Fronted Developer",time:"2021-2023"}]]}class Ve extends B{constructor(e){super(),N(this,e,Oe,He,E,{})}}const M=[];function Ie(t,e=g){let n;const s=new Set;function r(o){if(E(t,o)&&(t=o,n)){const a=!M.length;for(const c of s)c[1](),M.push(c,t);if(a){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function l(o){r(o(t))}function i(o,a=g){const c=[o,a];return s.add(c),s.size===1&&(n=e(r,l)||g),o(t),()=>{s.delete(c),s.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:i}}function De(){return localStorage.theme==="light"?!0:localStorage.theme==="dark"?!1:!window.matchMedia("(prefers-color-scheme: dark)").matches}const Fe=()=>{const{subscribe:t,set:e,update:n}=Ie(De());return{subscribe:t,setTheme:s=>{e(s)},changeTheme:()=>{n(s=>(s=!s,s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),s))}}},he={theme:Fe()};function We(t){let e,n=t[0]?"light":"dark",s,r,l;return{c(){e=u("button"),s=me(n),f(e,"class","text-red-400 dark:text-yellow-300 cursor-pointer")},m(i,o){_(i,e,o),d(e,s),r||(l=ke(e,"click",t[1]),r=!0)},p(i,[o]){o&1&&n!==(n=i[0]?"light":"dark")&&Me(s,n)},i:g,o:g,d(i){i&&$(e),r=!1,l()}}}function Xe(t,e,n){let s=!1;const r=he.theme.subscribe(i=>{n(0,s=i)});return Le(r),[s,()=>{he.theme.changeTheme()}]}class Re extends B{constructor(e){super(),N(this,e,Xe,We,E,{})}}function Ge(t,e,n){const s=t.slice();return s[1]=e[n],s}function Qe(t){let e;return{c(){e=u("div"),e.innerHTML='<div class="circle absolute w-5 h-5 -left-3 bg-neutral-700 border-2 rounded-full border-gray-400 svelte-1892pn"></div> <h3 class="font-bold">New Branch</h3> <p class="text-sm dark:text-white text-opacity-60">You&#39;ve created new branch fix-notifications from master</p> <time datetime="" class="text-sm">52 minutes ago</time> ',f(e,"class","cardm flex relative flex-col pb-2 pl-5 svelte-1892pn")},m(n,s){_(n,e,s)},p:g,d(n){n&&$(e)}}}function Ue(t){let e,n=P(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=Qe(Ge(t,n,r));return{c(){e=u("div");for(let r=0;r<s.length;r+=1)s[r].c()},m(r,l){_(r,e,l);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(e,null)},p:g,i:g,o:g,d(r){r&&$(e),J(s,r)}}}function Ke(t){return[[{},{},{},{}]]}class Ye extends B{constructor(e){super(),N(this,e,Ke,Ue,E,{})}}function Ze(t){let e,n,s,r,l,i,o,a,c,p,m,w,z,b,ee,H,te,Q,ne,x,k,se,O,re,V,ie,I,D;return a=new Re({}),w=new Be({}),b=new Ve({}),k=new Ye({}),{c(){e=u("main"),n=u("div"),s=h(),r=u("div"),l=h(),i=u("div"),o=h(),X(a.$$.fragment),c=h(),p=u("section"),p.innerHTML=`<div class="flex gap-4"><div class="w-40 h-40 bg-gray-600 rounded-2xl flex-shrink-0 overflow-hidden"><img class="" src="/images/avatar.jpg" alt=""/></div> <div class="flex flex-col justify-between flex-grow"><div class="flex justify-between items-center"><div class="flex items-center gap-2 font-bold bg-green-200 dark:bg-green-800 pr-4 pl-2 text-sm text-green-800 dark:text-green-400 rounded-3xl"><div class="w-2 h-2 bg-green-800 dark:bg-green-400 rounded-2xl"></div> <p>Avaible for work</p></div> <div class="flex cursor-pointer gap-2"><div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#aaa" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></div> <div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path></svg></div> <div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"></path></svg></div></div></div> <h1 class="text-3xl font-bold">Hi there! I&#39;m Wilmer!</h1> <p class="text-sm dark:text-gray-300">I&#39;m a versatile creator shaping captivating experiences across diverse design landscapes</p> <div class="flex justify-between"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></path><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"></path></g></svg>
            Huanuco, Perú</div> <div class="flex items-center gap-2">More bout Me
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" class="stroke-neutral-500 dark:stroke-neutral-400" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"></path></svg></div></div></div></div>`,m=h(),X(w.$$.fragment),z=h(),X(b.$$.fragment),ee=h(),H=u("section"),H.innerHTML="",te=h(),Q=u("div"),ne=h(),x=u("section"),X(k.$$.fragment),se=h(),O=u("div"),O.innerHTML="",re=h(),V=u("div"),V.innerHTML='<div class="branch relative py-8 flex-shrink-0"><div class="line w-0.5 top-0 h-full absolute svelte-iobd2z"></div> <img class="w-10" src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt=""/></div> <div class="flex flex-col flex-shrink gap-1"><div class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-500 dark:fill-green-300fill-green-300" d="M4 19V8zv-.375zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"></path></svg> <p class="text-green-500 dark:text-green-300">Experience</p></div> <h2 class="text-3xl font-bold">Experience en Frontent</h2> <p class="text-white text-opacity-70">Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p></div>',ie=h(),I=u("div"),I.innerHTML='<div class="branch relative py-8 flex-shrink-0"><div class="line w-0.5 top-0 h-full absolute  svelte-iobd2z"></div> <img class="w-10" src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt=""/></div> <div class="flex flex-col flex-shrink gap-1"><div class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-300" fill-rule="evenodd" d="M10.47 3.554a4 4 0 1 1 3.06 7.391a4 4 0 0 1-3.06-7.39M12 4.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-6.53 7.805a4 4 0 1 1 3.061 7.391a4 4 0 0 1-3.062-7.392M7 13.75a2.5 2.5 0 1 0 0 5.001a2.5 2.5 0 0 0 0-5.001m10-1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.957 1.69a2.5 2.5 0 1 1 1.914 4.62a2.5 2.5 0 0 1-1.914-4.62" clip-rule="evenodd"></path></svg> <p class="dark:text-green-300">Projects</p></div> <h2 class="text-3xl font-bold">Project for Fronted</h2> <p class="text-white text-opacity-70">Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p></div>',f(n,"class","shapes svelte-iobd2z"),f(r,"class","shapes svelte-iobd2z"),f(i,"class","shapes svelte-iobd2z"),f(p,"class","svelte-iobd2z"),f(H,"class","svelte-iobd2z"),f(Q,"class","linex self-stretch svelte-iobd2z"),f(O,"class","flex p-3 items-center justify-between"),f(V,"class","flex gap-4 items-center"),f(I,"class","flex gap-4 items-center"),f(x,"class","svelte-iobd2z"),f(e,"class","overflow-hidden svelte-iobd2z")},m(v,xe){_(v,e,xe),d(e,n),d(e,s),d(e,r),d(e,l),d(e,i),d(e,o),S(a,e,null),d(e,c),d(e,p),d(e,m),S(w,e,null),d(e,z),S(b,e,null),d(e,ee),d(e,H),d(e,te),d(e,Q),d(e,ne),d(e,x),S(k,x,null),d(x,se),d(x,O),d(x,re),d(x,V),d(x,ie),d(x,I),D=!0},p:g,i(v){D||(j(a.$$.fragment,v),j(w.$$.fragment,v),j(b.$$.fragment,v),j(k.$$.fragment,v),D=!0)},o(v){W(a.$$.fragment,v),W(w.$$.fragment,v),W(b.$$.fragment,v),W(k.$$.fragment,v),D=!1},d(v){v&&$(e),A(a),A(w),A(b),A(k)}}}class Je extends B{constructor(e){super(),N(this,e,null,Ze,E,{})}}new Je({target:document.getElementById("app")});
