import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{v as Te,p as ye,f as h,s as d,d as c,r as o,b as g,c as we,a as V,t as R,m as p,an as Se,L as ze,M as Ke,K as ge,J as ke,$ as He,u as xe,am as fe,ac as _e}from"../chunks/0h0eovDe.js";import{s as E,d as Le}from"../chunks/BeBJMhcX.js";import{i as F,p as Ve,s as de,a as We,b as Xe,c as Ge}from"../chunks/E6MyXn9j.js";import{r as Ue,l as Je}from"../chunks/CSnGU0Cu.js";import{t as Oe,U as Ie,e as z,i as K,b as je,v as Ye,V as Ce,w as Ae,P as De,S as Ne,R as Me,x as Qe,y as $e,u as qe,a as et,c as tt,d as st,f as at}from"../chunks/DCk9rHG9.js";import{i as rt}from"../chunks/DaAev7kg.js";import{C as nt,E as it,R as Re,a as lt}from"../chunks/BCpjnFsP.js";import{h as Fe}from"../chunks/Bp5AzgID.js";function ie(n,e,t,a,i,u){var r=n.__className;if(Te||r!==t||r===void 0){var _=Oe(t,a,u);(!Te||_!==n.getAttribute("class"))&&(_==null?n.removeAttribute("class"):n.className=_),n.__className=t}else if(u&&i!==u)for(var C in u){var y=!!u[C];(i==null||y!==!!i[C])&&n.classList.toggle(C,y)}return u}const ot=!0,Mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ot},Symbol.toStringTag,{value:"Module"}));var ct=h("<p>SSP doesn't have a solution.</p>"),ut=h("<li> </li>"),vt=h("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),dt=h("<main><h2>CertRenderer SSP</h2> <!></main>");function gt(n,e){ye(e,!0);var t=dt(),a=d(c(t),2);{var i=r=>{var _=ct();g(r,_)},u=r=>{var _=vt(),C=d(V(_),2);z(C,21,()=>e.cert.numbers,K,(y,s)=>{var b=ut(),S=c(b,!0);o(b),R(P=>E(S,P),[()=>p(s).value.join("")]),g(y,b)}),o(C),g(r,_)};F(a,r=>{e.cert==Ie?r(i):r(u,!1)})}o(t),g(n,t),we()}var bt=h("<li> </li>"),mt=h("<p> </p> <p>Numbers:</p> <ul></ul>",1),pt=h(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),ht=h("<li> </li>"),ft=h("<p>Numbers:</p> <ul></ul> <p> </p>",1),_t=h("<th> </th>"),St=h('<th class="clause-col svelte-1c4cita"><!></th>'),It=h('<td class="svelte-1c4cita"> </td>'),Ct=h('<td class="svelte-1c4cita"> </td>'),At=h('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),yt=h('<td class="svelte-1c4cita"> </td>'),wt=h('<td class="svelte-1c4cita"> </td>'),Nt=h('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),Tt=h('<td class="svelte-1c4cita"> </td>'),xt=h('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),Rt=h('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),Ft=h("<main><h2>SSP Renderer</h2> <!></main>");function Pe(n,e){ye(e,!0);let t=Ve(e,"style",3,"none"),a=ze(!1);var i=Ft(),u=d(c(i),2);{var r=C=>{var y=mt(),s=V(y),b=c(s);o(s);var S=d(s,4);z(S,21,()=>e.ssp.numbers,K,(P,Q)=>{var $=bt(),q=c($,!0);o($),R(k=>E(q,k),[()=>p(Q).value.join("")]),g(P,$)}),o(S),R(P=>E(b,`Target: ${P??""}`),[()=>e.ssp.target.join("")]),g(C,y)},_=C=>{var y=Se(),s=V(y);{var b=S=>{var P=Se(),Q=V(P);{var $=k=>{var G=pt();g(k,G)},q=k=>{var G=Rt(),ee=V(G),J=d(c(ee),2);Ue(J),o(ee);var be=d(ee,2);{var me=H=>{var O=ft(),Y=d(V(O),2);z(Y,21,()=>e.ssp.numbers,K,(M,l)=>{var v=ht();let N;var Z=c(v,!0);o(v),R((T,L)=>{N=ie(v,1,Ye(p(l).classes??""),"svelte-1c4cita",N,T),E(Z,L)},[()=>({"ssp-used":p(l).used}),()=>p(l).value.join("")]),g(M,v)}),o(Y);var D=d(Y,2),ne=c(D);o(D),R(M=>E(ne,`Target: ${M??""}`),[()=>e.ssp.target.join("")]),g(H,O)},pe=H=>{var O=xt(),Y=d(V(O),2),D=c(Y),ne=c(D),M=d(c(ne));z(M,17,()=>e.cnfInstance.variables,K,(A,w)=>{var m=_t();ie(m,1,"var-col svelte-1c4cita");var x=c(m,!0);o(m),R(()=>E(x,p(w))),g(A,m)});var l=d(M);z(l,17,()=>e.cnfInstance.clauses,K,(A,w)=>{var m=St(),x=c(m);Fe(x,()=>p(w).asHtmlString()),o(m),g(A,m)}),o(ne),o(D);var v=d(D),N=c(v);z(N,17,()=>e.cnfInstance.variables,K,(A,w,m)=>{var x=At(),U=V(x);let f;var B=c(U),oe=c(B);o(B);var ce=d(B);z(ce,17,()=>e.ssp.numbers[2*m].value,K,(j,W)=>{var re=It(),he=c(re,!0);o(re),R(()=>E(he,p(W))),g(j,re)}),o(U);var I=d(U,2);let ue;var ve=c(I),se=c(ve);o(ve);var ae=d(ve);z(ae,17,()=>e.ssp.numbers[2*m+1].value,K,(j,W)=>{var re=Ct(),he=c(re,!0);o(re),R(()=>E(he,p(W))),g(j,re)}),o(I),ge(2),R((j,W)=>{f=ie(U,1,"var-row svelte-1c4cita",null,f,j),E(oe,`${p(w)??""} ≔ T`),ue=ie(I,1,"var-row var-row-false svelte-1c4cita",null,ue,W),E(se,`${p(w)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*m].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1].used})]),g(A,x)});var Z=d(N);z(Z,17,()=>e.cnfInstance.clauses,K,(A,w,m)=>{var x=Nt(),U=V(x);let f;var B=c(U),oe=c(B);Fe(oe,()=>p(w).asHtmlString()),o(B);var ce=d(B);z(ce,17,()=>e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].value,K,(se,ae)=>{var j=yt(),W=c(j,!0);o(j),R(()=>E(W,p(ae))),g(se,j)}),o(U);var I=d(U,2);let ue;var ve=d(c(I));z(ve,17,()=>e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].value,K,(se,ae)=>{var j=wt(),W=c(j,!0);o(j),R(()=>E(W,p(ae))),g(se,j)}),o(I),ge(2),R((se,ae)=>{f=ie(U,1,"clause-row svelte-1c4cita",null,f,se),ue=ie(I,1,"clause-row clause-row-fill svelte-1c4cita",null,ue,ae)},[()=>({"ssp-used":e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].used})]),g(A,x)}),o(v);var T=d(v),L=c(T),te=d(c(L));z(te,17,()=>e.ssp.target,K,(A,w)=>{var m=Tt(),x=c(m,!0);o(m),R(()=>E(x,p(w))),g(A,m)}),o(L),o(T),o(Y),g(H,O)};F(be,H=>{p(a)?H(me):H(pe,!1)})}je(J,()=>p(a),H=>Ke(a,H)),g(k,G)};F(Q,k=>{e.cnfInstance?k(q,!1):k($)})}g(S,P)};F(s,S=>{t()=="3sat"&&S(b)},!0)}g(C,y)};F(u,C=>{t()=="none"?C(r):C(_,!1)})}o(i),g(n,i),we()}class Ze{decode(e,t){console.debug("DecoderSSPto3SAT::decode");const a=new Map;console.debug("decode from this SSP certificate",t);for(const i of t.numbers){const u=i.id;if(u.startsWith(Ce)){const r=u.substring(Ce.length);a.has(r)||(console.debug(`setting variable ${u} to TRUE`),a.set(r,!0))}else if(u.startsWith(Ae)){const r=u.substring(Ae.length);a.has(r)||(console.debug(`setting variable ${u} to FALSE`),a.set(r,!1))}}return new nt(a)}}var Pt=Object.getOwnPropertyDescriptor,Be=(n,e,t,a)=>{for(var i=a>1?void 0:a?Pt(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let X=class{id;value;used;classes;constructor(n,e,t=!1,a){this.id=n,this.value=e,this.used=t,this.classes=a}asString(){return this.value.join("")}};X=Be([Ne.SerializableClass("SSPNumber")],X);let le=class extends De{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(n){this.numbers.push(n)}setTarget(n){this.target=n}isEmpty(){return this.numbers.length==0}static fromString(n,e){const t=new le;if(!n)return"SSP cannot be constructed from an empty string";const a=n.split(`
`).map(i=>i.trim()).filter(i=>i.length);try{const i=Array(e).map(u=>Number.parseInt(u));t.setTarget(i)}catch(i){return console.error(i),`Couldn't parse the target number: ${e}`}return a.forEach((i,u)=>{try{const r=Array.from(i).map(_=>Number.parseInt(_));t.addNumber(new X(`${u}`,r))}catch(r){return console.error(r),`Couldn't parse the number on the line ${u}: ${i}.`}}),t}toSerializedString(){const n={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(n)}static fromSerializedString(n){const e=new le,t=JSON.parse(n);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const a of t.numbers)e.addNumber(new X(a.id,a.value,a.used,a.classes));return e}copy(){const n=new le;return n.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new X(e.id,[...e.value],e.used,e.classes);n.addNumber(t)}),n}};le=Be([Ne.SerializableClass("SSP")],le);class Zt extends Me{constructor(e){super(e)}doReduce(){const{variables:e,clauses:t}=this.inInstance,a=new le,i=e.length,u=t.length,r=i+u,_=Array.from({length:2*r},()=>new Array(r).fill(0));for(let s=0;s<r;s++)_[2*s][s]=1,_[2*s+1][s]=1;t.forEach((s,b)=>s.literals.forEach(S=>{const P=e.findIndex(Q=>Q==S.varName);_[2*P+(S.negated?1:0)][i+b]=1}));const C=[];for(let s=0;s<e.length;s++){const b=e[s];a.addNumber(new X(Ce+b,_[2*s])),a.addNumber(new X(Ae+b,_[2*s+1]))}for(let s=0;s<t.length;s++)a.addNumber(new X(Qe+s,_[2*s+2*e.length])),a.addNumber(new X($e+s,_[2*s+1+2*e.length]));const y=[...new Array(i).fill(1),...new Array(u).fill(3)];return a.setTarget(y),C.push({id:"var-numbers",title:"Add variable numbers",description:`
                <p>
                    For each variable <i>v<sub>i</sub></i> create two numbers:
                    <ul>
                        <li>
                            <i>v<sub>i</sub><sup>T</sup></i> - represents <i>v</i> being set to True
                        </li>
                        <li>
                            <i>v<sub>i</sub><sup>F</sup></i> - represents <i>v</i> being set to False
                        </li>
                    </ul>

                    In this case we have ${e.length} variables: ${e.join(", ")}.
                    This means there will be ${2*e.length} numbers.
                </p>
                <p>
                    These numbers are <i>k</i> digits long, where <i>k = number of variables + number of clauses</i>.
                    In this case, <i>k = ${e.length} + ${t.length} = ${r}</i>
                </p>
                <p>
                    At the beginning, set all of the digits to 0.
                    <ul>
                        ${e.map(s=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${"".padEnd(r,"0")}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${"".padEnd(r,"0")}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For numbers <i>n<sub>v<sub>i</sub></sub></i> the <i>i</i>-th digits are set to 1.
                    <ul>
                        ${e.map((s,b)=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${(()=>{let S="".padEnd(r,"0");return S.substring(0,b)+"1"+S.substring(b+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let S="".padEnd(r,"0");return S.substring(0,b)+"1"+S.substring(b+1)})()}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For each clause, <i>c<sub>i</sub></i> with literals <i>a</i>, <i>b</i> and <i>c</i>, 
                    for the numbers corresponding to <i>a</i>, <i>b</i> and <i>c</i>,
                    set the (i + number of variables)-th digit to 1.
                </p>
                <p>
                    We have ${t.length} clauses: 
                    <ul>
                        ${t.map((s,b)=>`
                                <li>
                                    c${b} &coloneq; ${s.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((s,b)=>{const S=a.numbers[2*b],P=a.numbers[2*b+1];return`
                                <li> 
                                    <i>${s}<sup>T</sup></i> - ${S.value.join("")}
                                </li>
                                <li> 
                                    <i>${s}<sup>F</sup></i> - ${P.value.join("")}
                                </li>
                            `}).join(`
`)}
                    </ul>
                </p>
                <p>
                    For each clause <i>c<sub>i</sub></i> add two numbers:
                    <ul>
                        <li>filler c<sub>i,1</sub></li>
                        <li>filler c<sub>i,2</sub></li>
                    </ul>
                    both of the same value: number of ${r} digits with i-th digit set to 1.

                    <ul>
                        ${(()=>{let s="";for(let b=2*e.length;b<2*e.length+2*t.length;b++)s+=`<li>${a.numbers[b].value.join("")}</li>`;return console.debug("accumString",s),s})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${a.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:a,steps:C}}}var Et=Object.getOwnPropertyDescriptor,Ut=(n,e,t,a)=>{for(var i=a>1?void 0:a?Et(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let Ee=class{numbers;constructor(n){this.numbers=n}};Ee=Ut([Ne.SerializableClass()],Ee);var jt=h('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Bt=h("<div><!></div> <!> <div><!></div>",1),zt=h("<span>There are no steps to step through.</span>"),Kt=h('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),kt=h('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Qt(n,e){ye(e,!1);const t=()=>de(y,"$redStore",r),a=()=>de(b,"$isSolving",r),i=()=>de(s,"$showStepper",r),u=()=>de(S,"$solveMessage",r),[r,_]=We();let C=qe(Je.LS_3SAT_SSP,new et),{redStore:y,showStepper:s,isSolving:b,solveMessage:S,editorChanged:P,reduce:Q,solve:$}=tt({storage:C,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMi8xMC8yMDI1CgppbXBvcnQgeyBVbnNvbHZhYmxlIH0gZnJvbSAiJGxpYi9jb3JlL1Vuc29sdmFibGUiOwppbXBvcnQgeyBTU1AgfSBmcm9tICIkbGliL2luc3RhbmNlL1NTUCI7CmltcG9ydCB7IFNvbHZlclNTUCB9IGZyb20gIiRsaWIvc29sdmUvU29sdmVyU1NQIjsKCnNlbGYub25tZXNzYWdlID0gYXN5bmMgKGUpID0+IHsKICAgIGNvbnNvbGUuZGVidWcoJ1dvcmtlclNTUFNvbHZlcjo6b25tZXNzYWdlJyk7CgogICAgdHJ5IHsKICAgICAgICBjb25zb2xlLmRlYnVnKCdDYWxsaW5nIFNTUC5mcm9tU2VyaWFsaXplZFN0cmluZyBtZXRob2QnKTsKICAgICAgICBjb25zdCBzc3AgPSBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcoZS5kYXRhKTsKCiAgICAgICAgaWYgKHR5cGVvZiBzc3AgPT0gJ3N0cmluZycpIHsKICAgICAgICAgICAgcG9zdE1lc3NhZ2UobmV3IEVycm9yKCJTU1AgY291bGRuJ3QgYmUgcGFyc2VkIGZyb20gc3RyaW5nLiIpKTsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgY29uc29sZS5kZWJ1ZygnQ3JlYXRpbmcgbmV3IHNvbHZlcicpOwoKICAgICAgICBjb25zdCBzb2x2ZXIgPSBuZXcgU29sdmVyU1NQKHNzcCk7CgogICAgICAgIGNvbnNvbGUuZGVidWcoJ3NvbHZpbmcuLi4nKTsKICAgICAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIuc29sdmUoKTsKICAgICAgICBwb3N0TWVzc2FnZShyZXN1bHQgfHwgVW5zb2x2YWJsZSk7CiAgICB9CiAgICBjYXRjaCAoZSkgewogICAgICAgIHBvc3RNZXNzYWdlKGUpOwogICAgfQp9Owo=",import.meta.url),reducerFactory:l=>new Zt(l),decoderFactory:()=>new Ze,onSolveFinished:(l,v)=>{if(v==Ie){Ge(y,xe(t).inCert=Ie,xe(t));return}v.numbers.forEach(T=>{const L=l.numbers.find(te=>T.id==te.id);L&&(L.used=!0)});const Z=new Ze().decode(l,v);console.debug("Done decoding..."),y.update(T=>(T.inCert=Z,T.outCert=v,T.outInstance=l,T))}});rt();var q=kt();ke(l=>{var v=jt();He.title="3SAT to SSP",g(l,v)});var k=d(c(q),2);it(k,{get cnf(){return t().inInstance},onChange:l=>P(l),onWrongFormat:l=>alert("From editor: "+l)});var G=d(k,2),ee=c(G);ee.__click=Q;var J=d(ee,2);J.__click=$;var be=c(J);{var me=l=>{var v=fe("Solving...");g(l,v)},pe=l=>{var v=fe("Solve");g(l,v)};F(be,l=>{a()?l(me):l(pe,!1)})}o(J);var H=d(J,2);Ue(H),ge(2),o(G);var O=d(G,2);{var Y=l=>{st(l,{children:(v,N)=>{ge();var Z=fe();R(()=>E(Z,u())),g(v,Z)}})};F(O,l=>{a()&&l(Y)})}var D=d(O,2);{var ne=l=>{const v=_e(()=>t().steps),N=_e(()=>t().stepIndex);var Z=Se(),T=V(Z);{var L=A=>{var w=Bt(),m=V(w),x=c(m);{var U=I=>{Re(I,{get cnf(){return p(v)[p(N)].inSnapshot}})};F(x,I=>{p(N)<p(v).length&&p(v)[p(N)].inSnapshot&&!p(v)[p(N)].inSnapshot.isEmpty()&&I(U)})}o(m);var f=d(m,2);at(f,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{y.update(I=>(I.prevStep(),I)),C.save()},onNextClick:()=>{y.update(I=>(I.nextStep(),I)),C.save()}});var B=d(f,2),oe=c(B);{var ce=I=>{Pe(I,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};F(oe,I=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&I(ce)})}o(B),g(A,w)},te=A=>{var w=zt();g(A,w)};F(T,A=>{p(v).length?A(L):A(te,!1)})}g(l,Z)},M=l=>{var v=Kt(),N=c(v),Z=c(N);{var T=f=>{Re(f,{get cnf(){return t().inInstance}})};F(Z,f=>{t().inInstance&&!t().inInstance.isEmpty()&&f(T)})}var L=d(Z,2);{var te=f=>{lt(f,{get cert(){return t().inCert}})};F(L,f=>{t().inCert&&f(te)})}o(N);var A=d(N,2),w=c(A);{var m=f=>{{let B=_e(()=>t().inInstance??void 0);Pe(f,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return p(B)}})}};F(w,f=>{t().outInstance&&!t().outInstance.isEmpty()&&f(m)})}var x=d(w,2);{var U=f=>{gt(f,{get cert(){return t().outCert}})};F(x,f=>{t().outCert&&f(U)})}o(A),o(v),g(l,v)};F(D,l=>{i()?l(ne):l(M,!1)})}o(q),R((l,v)=>{ee.disabled=l,J.disabled=v},[()=>!t().hasInInstance()||t().hasOutInstance()||a(),()=>!t().hasInstances()||t().hasOutCertificate()||a()]),je(H,i,l=>Xe(s,l)),g(n,q),we(),_()}Le(["click"]);export{Qt as component,Mt as universal};
