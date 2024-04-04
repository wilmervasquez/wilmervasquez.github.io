var J=Object.defineProperty;var Q=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var q=(e,t,n)=>(Q(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function p(){}function S(e){return e()}function N(){return Object.create(null)}function L(e){e.forEach(S)}function F(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Z(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function ee(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function te(e){return document.createTextNode(e)}function m(){return te(" ")}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}let C;function $(e){C=e}const x=[],z=[];let _=[];const I=[],se=Promise.resolve();let B=!1;function ie(){B||(B=!0,se.then(G))}function P(e){_.push(e)}const E=new Set;let w=0;function G(){if(w!==0)return;const e=C;do{try{for(;w<x.length;){const t=x[w];w++,$(t),re(t.$$)}}catch(t){throw x.length=0,w=0,t}for($(null),x.length=0,w=0;z.length;)z.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(x.length);for(;I.length;)I.pop()();B=!1,E.clear(),$(e)}function re(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function le(e){const t=[],n=[];_.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),_=t}const A=new Set;let ce;function X(e,t){e&&e.i&&(A.delete(e),e.i(t))}function oe(e,t,n,i){if(e&&e.o){if(A.has(e))return;A.add(e),ce.c.push(()=>{A.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ae(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function de(e){e&&e.c()}function K(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),P(()=>{const r=e.$$.on_mount.map(S).filter(F);e.$$.on_destroy?e.$$.on_destroy.push(...r):L(r),e.$$.on_mount=[]}),s.forEach(P)}function R(e,t){const n=e.$$;n.fragment!==null&&(le(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(x.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,i,s,r,c=null,k=[-1]){const h=C;$(e);const l=e.$$={fragment:null,ctx:[],props:r,update:p,not_equal:s,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:N(),dirty:k,skip_bound:!1,root:t.target||h.$$.root};c&&c(l.root);let d=!1;if(l.ctx=n?n(e,t.props||{},(o,y,...g)=>{const b=g.length?g[0]:y;return l.ctx&&s(l.ctx[o],l.ctx[o]=b)&&(!l.skip_bound&&l.bound[o]&&l.bound[o](b),d&&fe(e,o)),y}):[],l.update(),d=!0,L(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const o=ne(t.target);l.fragment&&l.fragment.l(o),o.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&X(e.$$.fragment),K(e,t.target,t.anchor),G()}$(h)}class W{constructor(){q(this,"$$");q(this,"$$set")}$destroy(){R(this,1),this.$destroy=p}$on(t,n){if(!F(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!Z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ue="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ue);function he(e,t,n){const i=e.slice();return i[1]=t[n],i}function pe(e){let t;return{c(){t=f("div"),t.innerHTML='<div class="circle absolute w-5 h-5 -left-3 bg-neutral-700 border-2 rounded-full border-gray-400 svelte-1892pn"></div> <h3 class="font-bold">New Branch</h3> <p class="text-sm text-white text-opacity-60">You&#39;ve created new branch fix-notifications from master</p> <time datetime="" class="text-sm">52 minutes ago</time> ',u(t,"class","cardm flex relative flex-col pb-2 pl-5 svelte-1892pn")},m(n,i){V(n,t,i)},p,d(n){n&&O(t)}}}function ge(e){let t,n=ae(e[0]),i=[];for(let s=0;s<n.length;s+=1)i[s]=pe(he(e,n,s));return{c(){t=f("div");for(let s=0;s<i.length;s+=1)i[s].c()},m(s,r){V(s,t,r);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(t,null)},p,i:p,o:p,d(s){s&&O(t),ee(i,s)}}}function ve(e){return[[{},{},{},{}]]}class me extends W{constructor(t){super(),U(this,t,ve,ge,D,{})}}function we(e){let t,n,i,s,r,c,k,h,l,d,o,y,g,b,M,H,T,j;return o=new me({}),{c(){t=f("main"),n=f("div"),i=m(),s=f("div"),r=m(),c=f("div"),k=m(),h=f("section"),h.innerHTML=`<div class="flex gap-4"><div class="w-40 h-40 bg-gray-600 rounded-2xl flex-shrink-0 overflow-hidden"><img class="" src="https://mighty.tools/mockmind-api/content/cartoon/25.jpg" alt=""/></div> <div class="flex flex-col justify-between flex-grow"><div class="flex justify-between"><div class="flex items-center gap-3 bg-green-800 pr-4 pl-2 text-sm text-green-400 rounded-3xl"><div class="w-2 h-2 bg-green-400 rounded-2xl"></div> <p>Avaible for work</p></div> <div class="flex cursor-pointer gap-2"><div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#aaa" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg></div> <div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path></svg></div> <div class="rounded-lg hover:bg-neutral-600 p-1"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"></path></svg></div></div></div> <h1 class="text-3xl font-bold">Hi there! I&#39;m Wilmer!</h1> <p class="text-sm text-gray-300">I&#39;m a versatile creator shaping captivating experiences across diverse design landscapes</p> <div class="flex justify-between"><div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 3l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"></path></svg>
            Huanuco, Perú</div> <div class="flex items-center gap-2">More bout Me
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"></path></svg></div></div></div></div>`,l=m(),d=f("section"),de(o.$$.fragment),y=m(),g=f("div"),g.innerHTML="",b=m(),M=f("div"),M.innerHTML='<div class="branch relative py-8 flex-shrink-0"><div class="line w-0.5 top-0 h-full absolute svelte-1cuc267"></div> <img class="w-10" src="https://www.spreading.ai/_next/static/media/line_second_m.d1613abc.svg" alt=""/></div> <div class="flex flex-col flex-shrink gap-1"><div class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-300" d="M4 19V8zv-.375zm0 2q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v4.275q-.45-.325-.95-.562T20 11.3V8H4v11h7.075q.075.525.225 1.025t.375.975zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18q0-2.075 1.463-3.537T18 13q2.075 0 3.538 1.463T23 18q0 2.075-1.463 3.538T18 23m.5-5.2V15h-1v3.2l2.15 2.15l.7-.7z"></path></svg> <p class="text-green-300">Experience</p></div> <h2 class="text-3xl font-bold">Experience en Frontent</h2> <p class="text-white text-opacity-70">Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p></div>',H=m(),T=f("div"),T.innerHTML='<div class="branch relative py-8 flex-shrink-0"><div class="line w-0.5 top-0 h-full absolute  svelte-1cuc267"></div> <img class="w-10" src="https://www.spreading.ai/_next/static/media/line_second_m.d1613abc.svg" alt=""/></div> <div class="flex flex-col flex-shrink gap-1"><div class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="fill-green-300" fill-rule="evenodd" d="M10.47 3.554a4 4 0 1 1 3.06 7.391a4 4 0 0 1-3.06-7.39M12 4.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-6.53 7.805a4 4 0 1 1 3.061 7.391a4 4 0 0 1-3.062-7.392M7 13.75a2.5 2.5 0 1 0 0 5.001a2.5 2.5 0 0 0 0-5.001m10-1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-.957 1.69a2.5 2.5 0 1 1 1.914 4.62a2.5 2.5 0 0 1-1.914-4.62" clip-rule="evenodd"></path></svg> <p class="text-green-300">Projects</p></div> <h2 class="text-3xl font-bold">Project for Fronted</h2> <p class="text-white text-opacity-70">Link your Github repository, and leverage the MDX, OpenAPI documents for website generation, while keeping the contents live alongside your codebase.</p></div>',u(n,"class","shapes svelte-1cuc267"),u(s,"class","shapes svelte-1cuc267"),u(c,"class","shapes svelte-1cuc267"),u(h,"class","svelte-1cuc267"),u(g,"class","flex p-3 items-center justify-between"),u(M,"class","flex gap-4 items-center"),u(T,"class","flex gap-4 items-center"),u(d,"class","svelte-1cuc267"),u(t,"class","svelte-1cuc267")},m(v,Y){V(v,t,Y),a(t,n),a(t,i),a(t,s),a(t,r),a(t,c),a(t,k),a(t,h),a(t,l),a(t,d),K(o,d,null),a(d,y),a(d,g),a(d,b),a(d,M),a(d,H),a(d,T),j=!0},p,i(v){j||(X(o.$$.fragment,v),j=!0)},o(v){oe(o.$$.fragment,v),j=!1},d(v){v&&O(t),R(o)}}}class xe extends W{constructor(t){super(),U(this,t,null,we,D,{})}}new xe({target:document.getElementById("app")});
