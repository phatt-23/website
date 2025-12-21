import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{v as xe,p as ye,f as h,s as d,d as c,r as o,b,c as Ne,a as J,t as F,m as p,an as Se,L as We,M as je,K as be,J as ze,$ as Ge,u as Te,am as fe,ac as _e}from"../chunks/0h0eovDe.js";import{s as Z,d as He}from"../chunks/BeBJMhcX.js";import{i as R,p as Je,s as de,a as Le,b as Ve,c as Ke}from"../chunks/E6MyXn9j.js";import{r as Be,l as Oe}from"../chunks/CSnGU0Cu.js";import{t as Xe,U as Ie,e as W,i as j,b as ke,v as Ye,V as Ce,w as Ae,P as De,S as we,R as Me,x as Qe,y as $e,u as qe,a as et,c as tt,d as st,f as at}from"../chunks/C6qEDlbA.js";import{i as rt}from"../chunks/DaAev7kg.js";import{C as nt,E as it,R as Fe,a as lt}from"../chunks/CcRITlvi.js";import{h as Re}from"../chunks/Bp5AzgID.js";function ie(n,e,t,a,i,u){var r=n.__className;if(xe||r!==t||r===void 0){var _=Xe(t,a,u);(!xe||_!==n.getAttribute("class"))&&(_==null?n.removeAttribute("class"):n.className=_),n.__className=t}else if(u&&i!==u)for(var C in u){var y=!!u[C];(i==null||y!==!!i[C])&&n.classList.toggle(C,y)}return u}const ot=!0,Mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ot},Symbol.toStringTag,{value:"Module"}));var ct=h("<p>SSP doesn't have a solution.</p>"),ut=h("<li> </li>"),vt=h("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),dt=h("<main><h2>CertRenderer SSP</h2> <!></main>");function bt(n,e){ye(e,!0);var t=dt(),a=d(c(t),2);{var i=r=>{var _=ct();b(r,_)},u=r=>{var _=vt(),C=d(J(_),2);W(C,21,()=>e.cert.numbers,j,(y,s)=>{var g=ut(),S=c(g,!0);o(g),F(P=>Z(S,P),[()=>p(s).value.join("")]),b(y,g)}),o(C),b(r,_)};R(a,r=>{e.cert==Ie?r(i):r(u,!1)})}o(t),b(n,t),Ne()}var gt=h("<li> </li>"),mt=h("<p> </p> <p>Numbers:</p> <ul></ul>",1),pt=h(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),ht=h("<li> </li>"),ft=h("<p>Numbers:</p> <ul></ul> <p> </p>",1),_t=h("<th> </th>"),St=h('<th class="clause-col svelte-1c4cita"><!></th>'),It=h('<td class="svelte-1c4cita"> </td>'),Ct=h('<td class="svelte-1c4cita"> </td>'),At=h('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),yt=h('<td class="svelte-1c4cita"> </td>'),Nt=h('<td class="svelte-1c4cita"> </td>'),wt=h('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),xt=h('<td class="svelte-1c4cita"> </td>'),Tt=h('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),Ft=h('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),Rt=h("<main><h2>SSP Renderer</h2> <!></main>");function Pe(n,e){ye(e,!0);let t=Je(e,"style",3,"none"),a=We(!1);var i=Rt(),u=d(c(i),2);{var r=C=>{var y=mt(),s=J(y),g=c(s);o(s);var S=d(s,4);W(S,21,()=>e.ssp.numbers,j,(P,Q)=>{var $=gt(),q=c($,!0);o($),F(z=>Z(q,z),[()=>p(Q).value.join("")]),b(P,$)}),o(S),F(P=>Z(g,`Target: ${P??""}`),[()=>e.ssp.target.join("")]),b(C,y)},_=C=>{var y=Se(),s=J(y);{var g=S=>{var P=Se(),Q=J(P);{var $=z=>{var K=pt();b(z,K)},q=z=>{var K=Ft(),ee=J(K),O=d(c(ee),2);Be(O),o(ee);var ge=d(ee,2);{var me=G=>{var X=ft(),Y=d(J(X),2);W(Y,21,()=>e.ssp.numbers,j,(M,l)=>{var v=ht();let w;var E=c(v,!0);o(v),F((x,H)=>{w=ie(v,1,Ye(p(l).classes??""),"svelte-1c4cita",w,x),Z(E,H)},[()=>({"ssp-used":p(l).used}),()=>p(l).value.join("")]),b(M,v)}),o(Y);var D=d(Y,2),ne=c(D);o(D),F(M=>Z(ne,`Target: ${M??""}`),[()=>e.ssp.target.join("")]),b(G,X)},pe=G=>{var X=Tt(),Y=d(J(X),2),D=c(Y),ne=c(D),M=d(c(ne));W(M,17,()=>e.cnfInstance.variables,j,(A,N)=>{var m=_t();ie(m,1,"var-col svelte-1c4cita");var T=c(m,!0);o(m),F(()=>Z(T,p(N))),b(A,m)});var l=d(M);W(l,17,()=>e.cnfInstance.clauses,j,(A,N)=>{var m=St(),T=c(m);Re(T,()=>p(N).asHtmlString()),o(m),b(A,m)}),o(ne),o(D);var v=d(D),w=c(v);W(w,17,()=>e.cnfInstance.variables,j,(A,N,m)=>{var T=At(),B=J(T);let f;var U=c(B),oe=c(U);o(U);var ce=d(U);W(ce,17,()=>e.ssp.numbers[2*m].value,j,(k,L)=>{var re=It(),he=c(re,!0);o(re),F(()=>Z(he,p(L))),b(k,re)}),o(B);var I=d(B,2);let ue;var ve=c(I),se=c(ve);o(ve);var ae=d(ve);W(ae,17,()=>e.ssp.numbers[2*m+1].value,j,(k,L)=>{var re=Ct(),he=c(re,!0);o(re),F(()=>Z(he,p(L))),b(k,re)}),o(I),be(2),F((k,L)=>{f=ie(B,1,"var-row svelte-1c4cita",null,f,k),Z(oe,`${p(N)??""} ≔ T`),ue=ie(I,1,"var-row var-row-false svelte-1c4cita",null,ue,L),Z(se,`${p(N)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*m].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1].used})]),b(A,T)});var E=d(w);W(E,17,()=>e.cnfInstance.clauses,j,(A,N,m)=>{var T=wt(),B=J(T);let f;var U=c(B),oe=c(U);Re(oe,()=>p(N).asHtmlString()),o(U);var ce=d(U);W(ce,17,()=>e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].value,j,(se,ae)=>{var k=yt(),L=c(k,!0);o(k),F(()=>Z(L,p(ae))),b(se,k)}),o(B);var I=d(B,2);let ue;var ve=d(c(I));W(ve,17,()=>e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].value,j,(se,ae)=>{var k=Nt(),L=c(k,!0);o(k),F(()=>Z(L,p(ae))),b(se,k)}),o(I),be(2),F((se,ae)=>{f=ie(B,1,"clause-row svelte-1c4cita",null,f,se),ue=ie(I,1,"clause-row clause-row-fill svelte-1c4cita",null,ue,ae)},[()=>({"ssp-used":e.ssp.numbers[2*m+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*m+1+2*e.cnfInstance.variables.length].used})]),b(A,T)}),o(v);var x=d(v),H=c(x),te=d(c(H));W(te,17,()=>e.ssp.target,j,(A,N)=>{var m=xt(),T=c(m,!0);o(m),F(()=>Z(T,p(N))),b(A,m)}),o(H),o(x),o(Y),b(G,X)};R(ge,G=>{p(a)?G(me):G(pe,!1)})}ke(O,()=>p(a),G=>je(a,G)),b(z,K)};R(Q,z=>{e.cnfInstance?z(q,!1):z($)})}b(S,P)};R(s,S=>{t()=="3sat"&&S(g)},!0)}b(C,y)};R(u,C=>{t()=="none"?C(r):C(_,!1)})}o(i),b(n,i),Ne()}class Ee{decode(e,t){console.debug("DecoderSSPto3SAT::decode");const a=new Map;console.debug("decode from this SSP certificate",t);for(const i of t.numbers){const u=i.id;if(u.startsWith(Ce)){const r=u.substring(Ce.length);a.has(r)||(console.debug(`setting variable ${u} to TRUE`),a.set(r,!0))}else if(u.startsWith(Ae)){const r=u.substring(Ae.length);a.has(r)||(console.debug(`setting variable ${u} to FALSE`),a.set(r,!1))}}return new nt(a)}}var Pt=Object.getOwnPropertyDescriptor,Ue=(n,e,t,a)=>{for(var i=a>1?void 0:a?Pt(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let V=class{id;value;used;classes;constructor(n,e,t=!1,a){this.id=n,this.value=e,this.used=t,this.classes=a}asString(){return this.value.join("")}};V=Ue([we.SerializableClass("SSPNumber")],V);let le=class extends De{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(n){this.numbers.push(n)}setTarget(n){this.target=n}isEmpty(){return this.numbers.length==0}static fromString(n,e){const t=new le;if(!n)return"SSP cannot be constructed from an empty string";const a=n.split(`
`).map(i=>i.trim()).filter(i=>i.length);try{const i=Array(e).map(u=>Number.parseInt(u));t.setTarget(i)}catch(i){return console.error(i),`Couldn't parse the target number: ${e}`}return a.forEach((i,u)=>{try{const r=Array.from(i).map(_=>Number.parseInt(_));t.addNumber(new V(`${u}`,r))}catch(r){return console.error(r),`Couldn't parse the number on the line ${u}: ${i}.`}}),t}toSerializedString(){const n={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(n)}static fromSerializedString(n){const e=new le,t=JSON.parse(n);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const a of t.numbers)e.addNumber(new V(a.id,a.value,a.used,a.classes));return e}copy(){const n=new le;return n.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new V(e.id,[...e.value],e.used,e.classes);n.addNumber(t)}),n}};le=Ue([we.SerializableClass("SSP")],le);class Et extends Me{constructor(e){super(e)}doReduce(){const{variables:e,clauses:t}=this.inInstance,a=new le,i=e.length,u=t.length,r=i+u,_=Array.from({length:2*r},()=>new Array(r).fill(0));for(let s=0;s<r;s++)_[2*s][s]=1,_[2*s+1][s]=1;t.forEach((s,g)=>s.literals.forEach(S=>{const P=e.findIndex(Q=>Q==S.varName);_[2*P+(S.negated?1:0)][i+g]=1}));const C=[];for(let s=0;s<e.length;s++){const g=e[s];a.addNumber(new V(Ce+g,_[2*s])),a.addNumber(new V(Ae+g,_[2*s+1]))}for(let s=0;s<t.length;s++)a.addNumber(new V(Qe+s,_[2*s+2*e.length])),a.addNumber(new V($e+s,_[2*s+1+2*e.length]));const y=[...new Array(i).fill(1),...new Array(u).fill(3)];return a.setTarget(y),C.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                        ${e.map((s,g)=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${(()=>{let S="".padEnd(r,"0");return S.substring(0,g)+"1"+S.substring(g+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let S="".padEnd(r,"0");return S.substring(0,g)+"1"+S.substring(g+1)})()}
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
                        ${t.map((s,g)=>`
                                <li>
                                    c${g} &coloneq; ${s.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((s,g)=>{const S=a.numbers[2*g],P=a.numbers[2*g+1];return`
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
                        ${(()=>{let s="";for(let g=2*e.length;g<2*e.length+2*t.length;g++)s+=`<li>${a.numbers[g].value.join("")}</li>`;return console.debug("accumString",s),s})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${a.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:a,steps:C}}}var Zt=Object.getOwnPropertyDescriptor,Bt=(n,e,t,a)=>{for(var i=a>1?void 0:a?Zt(e,t):e,u=n.length-1,r;u>=0;u--)(r=n[u])&&(i=r(i)||i);return i};let Ze=class{numbers;constructor(n){this.numbers=n}};Ze=Bt([we.SerializableClass()],Ze);var kt=h('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Ut=h("<div><!></div> <!> <div><!></div>",1),Wt=h("<span>There are no steps to step through.</span>"),jt=h('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),zt=h('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Qt(n,e){ye(e,!1);const t=()=>de(y,"$redStore",r),a=()=>de(g,"$isSolving",r),i=()=>de(s,"$showStepper",r),u=()=>de(S,"$solveMessage",r),[r,_]=Le();let C=qe(Oe.LS_3SAT_SSP,new et),{redStore:y,showStepper:s,isSolving:g,solveMessage:S,editorChanged:P,reduce:Q,solve:$}=tt({storage:C,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMi8xMC8yMDI1CgppbXBvcnQgeyBVbnNvbHZhYmxlIH0gZnJvbSAiJGxpYi9jb3JlL1Vuc29sdmFibGUiOwppbXBvcnQgeyBTU1AgfSBmcm9tICIkbGliL2luc3RhbmNlL1NTUCI7CmltcG9ydCB7IFNvbHZlclNTUCB9IGZyb20gIiRsaWIvc29sdmUvU29sdmVyU1NQIjsKCnNlbGYub25tZXNzYWdlID0gYXN5bmMgKGUpID0+IHsKICAgIGNvbnNvbGUuZGVidWcoJ1dvcmtlclNTUFNvbHZlcjo6b25tZXNzYWdlJyk7CgogICAgY29uc29sZS5kZWJ1ZygnQ2FsbGluZyBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcgbWV0aG9kJyk7CiAgICBjb25zdCBzc3AgPSBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcoZS5kYXRhKTsKCiAgICBpZiAodHlwZW9mIHNzcCA9PSAnc3RyaW5nJykgewogICAgICAgIHBvc3RNZXNzYWdlKG5ldyBFcnJvcigiU1NQIGNvdWxkbid0IGJlIHBhcnNlZCBmcm9tIHN0cmluZy4iKSk7CiAgICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnNvbGUuZGVidWcoJ0NyZWF0aW5nIG5ldyBzb2x2ZXInKTsKCiAgICBjb25zdCBzb2x2ZXIgPSBuZXcgU29sdmVyU1NQKHNzcCk7CgogICAgdHJ5IHsKICAgICAgICBjb25zb2xlLmRlYnVnKCdzb2x2aW5nLi4uJyk7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7CiAgICAgICAgcG9zdE1lc3NhZ2UocmVzdWx0IHx8IFVuc29sdmFibGUpOwogICAgfSBmaW5hbGx5IHsKICAgICAgICBwb3N0TWVzc2FnZShVbnNvbHZhYmxlKTsKICAgIH0KfTs=",import.meta.url),reducerFactory:l=>new Et(l),decoderFactory:()=>new Ee,onSolveFinished:(l,v)=>{if(v==Ie){Ke(y,Te(t).inCert=Ie,Te(t));return}v.numbers.forEach(x=>{const H=l.numbers.find(te=>x.id==te.id);H&&(H.used=!0)});const E=new Ee().decode(l,v);console.debug("Done decoding..."),y.update(x=>(x.inCert=E,x.outCert=v,x.outInstance=l,x))}});rt();var q=zt();ze(l=>{var v=kt();Ge.title="3SAT to SSP",b(l,v)});var z=d(c(q),2);it(z,{get cnf(){return t().inInstance},onChange:l=>P(l),onWrongFormat:l=>alert("From editor: "+l)});var K=d(z,2),ee=c(K);ee.__click=Q;var O=d(ee,2);O.__click=$;var ge=c(O);{var me=l=>{var v=fe("Solving...");b(l,v)},pe=l=>{var v=fe("Solve");b(l,v)};R(ge,l=>{a()?l(me):l(pe,!1)})}o(O);var G=d(O,2);Be(G),be(2),o(K);var X=d(K,2);{var Y=l=>{st(l,{children:(v,w)=>{be();var E=fe();F(()=>Z(E,u())),b(v,E)}})};R(X,l=>{a()&&l(Y)})}var D=d(X,2);{var ne=l=>{const v=_e(()=>t().steps),w=_e(()=>t().stepIndex);var E=Se(),x=J(E);{var H=A=>{var N=Ut(),m=J(N),T=c(m);{var B=I=>{Fe(I,{get cnf(){return p(v)[p(w)].inSnapshot}})};R(T,I=>{p(w)<p(v).length&&p(v)[p(w)].inSnapshot&&!p(v)[p(w)].inSnapshot.isEmpty()&&I(B)})}o(m);var f=d(m,2);at(f,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{y.update(I=>(I.prevStep(),I)),C.save()},onNextClick:()=>{y.update(I=>(I.nextStep(),I)),C.save()}});var U=d(f,2),oe=c(U);{var ce=I=>{Pe(I,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};R(oe,I=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&I(ce)})}o(U),b(A,N)},te=A=>{var N=Wt();b(A,N)};R(x,A=>{p(v).length?A(H):A(te,!1)})}b(l,E)},M=l=>{var v=jt(),w=c(v),E=c(w);{var x=f=>{Fe(f,{get cnf(){return t().inInstance}})};R(E,f=>{t().inInstance&&!t().inInstance.isEmpty()&&f(x)})}var H=d(E,2);{var te=f=>{lt(f,{get cert(){return t().inCert}})};R(H,f=>{t().inCert&&f(te)})}o(w);var A=d(w,2),N=c(A);{var m=f=>{{let U=_e(()=>t().inInstance??void 0);Pe(f,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return p(U)}})}};R(N,f=>{t().outInstance&&!t().outInstance.isEmpty()&&f(m)})}var T=d(N,2);{var B=f=>{bt(f,{get cert(){return t().outCert}})};R(T,f=>{t().outCert&&f(B)})}o(A),o(v),b(l,v)};R(D,l=>{i()?l(ne):l(M,!1)})}o(q),F((l,v)=>{ee.disabled=l,O.disabled=v},[()=>!t().hasInInstance()||t().hasOutInstance()||a(),()=>!t().hasInstances()||t().hasOutCertificate()||a()]),ke(G,i,l=>Ve(s,l)),b(n,q),Ne(),_()}He(["click"]);export{Qt as component,Mt as universal};
