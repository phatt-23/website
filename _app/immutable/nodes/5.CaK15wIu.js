import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{v as Te,p as ye,f as h,s as d,d as c,r as o,b as g,c as we,a as V,t as R,m as p,an as Ie,L as ze,M as Ke,K as ge,J as He,$ as We,u as xe,am as fe,ac as _e}from"../chunks/0h0eovDe.js";import{s as E,d as Ge}from"../chunks/BeBJMhcX.js";import{i as F,p as Ve,s as de,a as ke,b as Xe,c as Je}from"../chunks/E6MyXn9j.js";import{r as Ue,l as Le}from"../chunks/CSnGU0Cu.js";import{t as Oe,U as Se,e as z,i as K,b as Be,v as Ye,V as Ce,w as Ae,P as Qe,S as Ne,R as De,x as Me,y as $e,u as qe,a as et,c as tt,d as st,f as at}from"../chunks/DCk9rHG9.js";import{i as rt}from"../chunks/DaAev7kg.js";import{C as nt,E as it,R as Re,a as lt}from"../chunks/BCpjnFsP.js";import{h as Fe}from"../chunks/Bp5AzgID.js";function ie(n,e,t,a,i,u){var r=n.__className;if(Te||r!==t||r===void 0){var _=Oe(t,a,u);(!Te||_!==n.getAttribute("class"))&&(_==null?n.removeAttribute("class"):n.className=_),n.__className=t}else if(u&&i!==u)for(var C in u){var y=!!u[C];(i==null||y!==!!i[C])&&n.classList.toggle(C,y)}return u}const ot=!0,Dt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ot},Symbol.toStringTag,{value:"Module"}));var ct=h("<p>SSP doesn't have a solution.</p>"),ut=h("<li> </li>"),vt=h("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),dt=h("<main><h2>CertRenderer SSP</h2> <!></main>");function gt(n,e){ye(e,!0);var t=dt(),a=d(c(t),2);{var i=r=>{var _=ct();g(r,_)},u=r=>{var _=vt(),C=d(V(_),2);z(C,21,()=>e.cert.numbers,K,(y,s)=>{var b=ut(),I=c(b,!0);o(b),R(Z=>E(I,Z),[()=>p(s).value.join("")]),g(y,b)}),o(C),g(r,_)};F(a,r=>{e.cert==Se?r(i):r(u,!1)})}o(t),g(n,t),we()}var bt=h("<li> </li>"),mt=h("<p> </p> <p>Numbers:</p> <ul></ul>",1),pt=h(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),ht=h("<li> </li>"),ft=h("<p>Numbers:</p> <ul></ul> <p> </p>",1),_t=h("<th> </th>"),It=h('<th class="clause-col svelte-1c4cita"><!></th>'),St=h('<td class="svelte-1c4cita"> </td>'),Ct=h('<td class="svelte-1c4cita"> </td>'),At=h('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),yt=h('<td class="svelte-1c4cita"> </td>'),wt=h('<td class="svelte-1c4cita"> </td>'),Nt=h('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),Tt=h('<td class="svelte-1c4cita"> </td>'),xt=h('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),Rt=h('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),Ft=h("<main><h2>SSP Renderer</h2> <!></main>");function Ze(n,e){ye(e,!0);let t=Ve(e,"style",3,"none"),a=ze(!1);var i=Ft(),u=d(c(i),2);{var r=C=>{var y=mt(),s=V(y),b=c(s);o(s);var I=d(s,4);z(I,21,()=>e.ssp.numbers,K,(Z,M)=>{var $=bt(),q=c($,!0);o($),R(H=>E(q,H),[()=>p(M).value.join("")]),g(Z,$)}),o(I),R(Z=>E(b,`Target: ${Z??""}`),[()=>e.ssp.target.join("")]),g(C,y)},_=C=>{var y=Ie(),s=V(y);{var b=I=>{var Z=Ie(),M=V(Z);{var $=H=>{var J=pt();g(H,J)},q=H=>{var J=Rt(),ee=V(J),L=d(c(ee),2);Ue(L),o(ee);var be=d(ee,2);{var me=W=>{var O=ft(),Y=d(V(O),2);z(Y,21,()=>e.ssp.numbers,K,(D,l)=>{var v=ht();let N;var P=c(v,!0);o(v),R((T,G)=>{N=ie(v,1,Ye(p(l).classes??""),"svelte-1c4cita",N,T),E(P,G)},[()=>({"ssp-used":p(l).used}),()=>p(l).value.join("")]),g(D,v)}),o(Y);var Q=d(Y,2),ne=c(Q);o(Q),R(D=>E(ne,`Target: ${D??""}`),[()=>e.ssp.target.join("")]),g(W,O)},pe=W=>{var O=xt(),Y=d(V(O),2),Q=c(Y),ne=c(Q),D=d(c(ne));z(D,17,()=>e.cnfInstance.variables,K,(A,w)=>{var m=_t();ie(m,1,"var-col svelte-1c4cita");var x=c(m,!0);o(m),R(()=>E(x,p(w))),g(A,m)});var l=d(D);z(l,17,()=>e.cnfInstance.clauses,K,(A,w)=>{var m=It(),x=c(m);Fe(x,()=>p(w).asHtmlString()),o(m),g(A,m)}),o(ne),o(Q);var v=d(Q),N=c(v);z(N,17,()=>e.cnfInstance.variables,K,(A,w,m)=>{var x=At(),U=V(x);let f;var j=c(U),oe=c(j);o(j);var ce=d(j);z(ce,17,()=>e.ssp.numbers[2*m].value,K,(B,k)=>{var re=St(),he=c(re,!0);o(re),R(()=>E(he,p(k))),g(B,re)}),o(U);var S=d(U,2);let ue;var ve=c(S),se=c(ve);o(ve);var ae=d(ve);z(ae,17,()=>e.ssp.numbers[2*m+1].value,K,(B,k)=>{var re=Ct(),he=c(re,!0);o(re),R(()=>E(he,p(k))),g(B,re)}),o(S),ge(2),R((B,k)=>{f=ie(U,1,"var-row svelte-1c4cita",null,f,B),E(oe,`${p(w)??""} ≔ T`),ue=ie(S,1,"var-row var-row-false svelte-1c4cita",null,ue,k),E(se,`${p(w)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*m].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1].used})]),g(A,x)});var P=d(N);z(P,17,()=>e.cnfInstance.clauses,K,(A,w,m)=>{var x=Nt(),U=V(x);let f;var j=c(U),oe=c(j);Fe(oe,()=>p(w).asHtmlString()),o(j);var ce=d(j);z(ce,17,()=>e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].value,K,(se,ae)=>{var B=yt(),k=c(B,!0);o(B),R(()=>E(k,p(ae))),g(se,B)}),o(U);var S=d(U,2);let ue;var ve=d(c(S));z(ve,17,()=>e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].value,K,(se,ae)=>{var B=wt(),k=c(B,!0);o(B),R(()=>E(k,p(ae))),g(se,B)}),o(S),ge(2),R((se,ae)=>{f=ie(U,1,"clause-row svelte-1c4cita",null,f,se),ue=ie(S,1,"clause-row clause-row-fill svelte-1c4cita",null,ue,ae)},[()=>({"ssp-used":e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].used})]),g(A,x)}),o(v);var T=d(v),G=c(T),te=d(c(G));z(te,17,()=>e.ssp.target,K,(A,w)=>{var m=Tt(),x=c(m,!0);o(m),R(()=>E(x,p(w))),g(A,m)}),o(G),o(T),o(Y),g(W,O)};F(be,W=>{p(a)?W(me):W(pe,!1)})}Be(L,()=>p(a),W=>Ke(a,W)),g(H,J)};F(M,H=>{e.cnfInstance?H(q,!1):H($)})}g(I,Z)};F(s,I=>{t()=="3sat"&&I(b)},!0)}g(C,y)};F(u,C=>{t()=="none"?C(r):C(_,!1)})}o(i),g(n,i),we()}class Pe{decode(e,t){console.debug("DecoderSSPto3SAT::decode");const a=new Map;console.debug("decode from this SSP certificate",t);for(const i of t.numbers){const u=i.id;if(u.startsWith(Ce)){const r=u.substring(Ce.length);a.has(r)||(console.debug(`setting variable ${u} to TRUE`),a.set(r,!0))}else if(u.startsWith(Ae)){const r=u.substring(Ae.length);a.has(r)||(console.debug(`setting variable ${u} to FALSE`),a.set(r,!1))}}return new nt(a)}}var Zt=Object.getOwnPropertyDescriptor,je=(n,e,t,a)=>{for(var i=a>1?void 0:a?Zt(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let X=class{id;value;used;classes;constructor(n,e,t=!1,a){this.id=n,this.value=e,this.used=t,this.classes=a}asString(){return this.value.join("")}};X=je([Ne.SerializableClass("SSPNumber")],X);let le=class extends Qe{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(n){this.numbers.push(n)}setTarget(n){this.target=n}isEmpty(){return this.numbers.length==0}static fromString(n,e){const t=new le;if(!n)return"SSP cannot be constructed from an empty string";const a=n.split(`
`).map(i=>i.trim()).filter(i=>i.length);try{const i=Array(e).map(u=>Number.parseInt(u));t.setTarget(i)}catch(i){return console.error(i),`Couldn't parse the target number: ${e}`}return a.forEach((i,u)=>{try{const r=Array.from(i).map(_=>Number.parseInt(_));t.addNumber(new X(`${u}`,r))}catch(r){return console.error(r),`Couldn't parse the number on the line ${u}: ${i}.`}}),t}toSerializedString(){const n={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(n)}static fromSerializedString(n){const e=new le,t=JSON.parse(n);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const a of t.numbers)e.addNumber(new X(a.id,a.value,a.used,a.classes));return e}copy(){const n=new le;return n.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new X(e.id,[...e.value],e.used,e.classes);n.addNumber(t)}),n}};le=je([Ne.SerializableClass("SSP")],le);class Pt extends De{constructor(e){super(e)}doReduce(){const{variables:e,clauses:t}=this.inInstance,a=new le,i=e.length,u=t.length,r=i+u,_=Array.from({length:2*r},()=>new Array(r).fill(0));for(let s=0;s<r;s++)_[2*s][s]=1,_[2*s+1][s]=1;t.forEach((s,b)=>s.literals.forEach(I=>{const Z=e.findIndex(M=>M==I.varName);_[2*Z+(I.negated?1:0)][i+b]=1}));const C=[];for(let s=0;s<e.length;s++){const b=e[s];a.addNumber(new X(Ce+b,_[2*s])),a.addNumber(new X(Ae+b,_[2*s+1]))}for(let s=0;s<t.length;s++)a.addNumber(new X(Me+s,_[2*s+2*e.length])),a.addNumber(new X($e+s,_[2*s+1+2*e.length]));const y=[...new Array(i).fill(1),...new Array(u).fill(3)];return a.setTarget(y),C.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                                <i>${s}<sup>T</sup></i> - ${(()=>{let I="".padEnd(r,"0");return I.substring(0,b)+"1"+I.substring(b+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let I="".padEnd(r,"0");return I.substring(0,b)+"1"+I.substring(b+1)})()}
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
                        ${e.map((s,b)=>{const I=a.numbers[2*b],Z=a.numbers[2*b+1];return`
                                <li> 
                                    <i>${s}<sup>T</sup></i> - ${I.value.join("")}
                                </li>
                                <li> 
                                    <i>${s}<sup>F</sup></i> - ${Z.value.join("")}
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
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:a,steps:C}}}var Et=Object.getOwnPropertyDescriptor,Ut=(n,e,t,a)=>{for(var i=a>1?void 0:a?Et(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let Ee=class{numbers;constructor(n){this.numbers=n}};Ee=Ut([Ne.SerializableClass()],Ee);var Bt=h('<meta name="description" content="Redcution from 3SAT to SSP"/>'),jt=h("<div><!></div> <!> <div><!></div>",1),zt=h("<span>There are no steps to step through.</span>"),Kt=h('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),Ht=h('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Mt(n,e){ye(e,!1);const t=()=>de(y,"$redStore",r),a=()=>de(b,"$isSolving",r),i=()=>de(s,"$showStepper",r),u=()=>de(I,"$solveMessage",r),[r,_]=ke();let C=qe(Le.LS_3SAT_SSP,new et),{redStore:y,showStepper:s,isSolving:b,solveMessage:I,editorChanged:Z,reduce:M,solve:$}=tt({storage:C,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMi8xMC8yMDI1CgppbXBvcnQgeyBVbnNvbHZhYmxlIH0gZnJvbSAiJGxpYi9jb3JlL1Vuc29sdmFibGUiOwppbXBvcnQgeyBTU1AgfSBmcm9tICIkbGliL2luc3RhbmNlL1NTUCI7CmltcG9ydCB7IFNvbHZlclNTUCB9IGZyb20gIiRsaWIvc29sdmUvU29sdmVyU1NQIjsKCnNlbGYub25tZXNzYWdlID0gYXN5bmMgKGUpID0+IHsKICAgIGNvbnNvbGUuZGVidWcoJ1dvcmtlclNTUFNvbHZlcjo6b25tZXNzYWdlJyk7CgogICAgdHJ5IHsKICAgICAgICBjb25zb2xlLmRlYnVnKCdDYWxsaW5nIFNTUC5mcm9tU2VyaWFsaXplZFN0cmluZyBtZXRob2QnKTsKICAgICAgICBjb25zdCBzc3AgPSBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcoZS5kYXRhKTsKCiAgICAgICAgaWYgKHR5cGVvZiBzc3AgPT0gJ3N0cmluZycpIHsKICAgICAgICAgICAgcG9zdE1lc3NhZ2UobmV3IEVycm9yKCJTU1AgY291bGRuJ3QgYmUgcGFyc2VkIGZyb20gc3RyaW5nLiIpKTsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgY29uc29sZS5kZWJ1ZygnQ3JlYXRpbmcgbmV3IHNvbHZlcicpOwoKICAgICAgICBjb25zdCBzb2x2ZXIgPSBuZXcgU29sdmVyU1NQKHNzcCk7CgogICAgICAgIGNvbnNvbGUuZGVidWcoJ3NvbHZpbmcuLi4nKTsKICAgICAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIuc29sdmUoKTsKICAgICAgICBwb3N0TWVzc2FnZShyZXN1bHQgfHwgVW5zb2x2YWJsZSk7CiAgICB9CiAgICBjYXRjaCAoZSkgewogICAgICAgIHBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgZXJyb3I6IHRydWUsCiAgICAgICAgICAgIG1lc3NhZ2U6IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKQogICAgICAgIH0pOwogICAgfQp9Owo=",import.meta.url),reducerFactory:l=>new Pt(l),decoderFactory:()=>new Pe,onSolveFinished:(l,v)=>{if(v==Se){Je(y,xe(t).inCert=Se,xe(t));return}v.numbers.forEach(T=>{const G=l.numbers.find(te=>T.id==te.id);G&&(G.used=!0)});const P=new Pe().decode(l,v);console.debug("Done decoding..."),y.update(T=>(T.inCert=P,T.outCert=v,T.outInstance=l,T))}});rt();var q=Ht();He(l=>{var v=Bt();We.title="3SAT to SSP",g(l,v)});var H=d(c(q),2);it(H,{get cnf(){return t().inInstance},onChange:l=>Z(l),onWrongFormat:l=>alert("From editor: "+l)});var J=d(H,2),ee=c(J);ee.__click=M;var L=d(ee,2);L.__click=$;var be=c(L);{var me=l=>{var v=fe("Solving...");g(l,v)},pe=l=>{var v=fe("Solve");g(l,v)};F(be,l=>{a()?l(me):l(pe,!1)})}o(L);var W=d(L,2);Ue(W),ge(2),o(J);var O=d(J,2);{var Y=l=>{st(l,{children:(v,N)=>{ge();var P=fe();R(()=>E(P,u())),g(v,P)}})};F(O,l=>{a()&&l(Y)})}var Q=d(O,2);{var ne=l=>{const v=_e(()=>t().steps),N=_e(()=>t().stepIndex);var P=Ie(),T=V(P);{var G=A=>{var w=jt(),m=V(w),x=c(m);{var U=S=>{Re(S,{get cnf(){return p(v)[p(N)].inSnapshot}})};F(x,S=>{p(N)<p(v).length&&p(v)[p(N)].inSnapshot&&!p(v)[p(N)].inSnapshot.isEmpty()&&S(U)})}o(m);var f=d(m,2);at(f,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{y.update(S=>(S.prevStep(),S)),C.save()},onNextClick:()=>{y.update(S=>(S.nextStep(),S)),C.save()}});var j=d(f,2),oe=c(j);{var ce=S=>{Ze(S,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};F(oe,S=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&S(ce)})}o(j),g(A,w)},te=A=>{var w=zt();g(A,w)};F(T,A=>{p(v).length?A(G):A(te,!1)})}g(l,P)},D=l=>{var v=Kt(),N=c(v),P=c(N);{var T=f=>{Re(f,{get cnf(){return t().inInstance}})};F(P,f=>{t().inInstance&&!t().inInstance.isEmpty()&&f(T)})}var G=d(P,2);{var te=f=>{lt(f,{get cert(){return t().inCert}})};F(G,f=>{t().inCert&&f(te)})}o(N);var A=d(N,2),w=c(A);{var m=f=>{{let j=_e(()=>t().inInstance??void 0);Ze(f,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return p(j)}})}};F(w,f=>{t().outInstance&&!t().outInstance.isEmpty()&&f(m)})}var x=d(w,2);{var U=f=>{gt(f,{get cert(){return t().outCert}})};F(x,f=>{t().outCert&&f(U)})}o(A),o(v),g(l,v)};F(Q,l=>{i()?l(ne):l(D,!1)})}o(q),R((l,v)=>{ee.disabled=l,L.disabled=v},[()=>!t().hasInInstance()||t().hasOutInstance()||a(),()=>!t().hasInstances()||t().hasOutCertificate()||a()]),Be(W,i,l=>Xe(s,l)),g(n,q),we(),_()}Ge(["click"]);export{Mt as component,Dt as universal};
