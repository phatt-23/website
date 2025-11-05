import"../chunks/DsnmJJEf.js";import{s as W,d as Be,b as We}from"../chunks/kmNpuAZe.js";import{i as xe,p as Ne,f,s as b,d as c,r as n,b as g,c as we,a as H,t as k,B as v,ao as Ce,D as ge,E as Y,A as pe,M as ze,z as Ue,$ as je,an as Ie,ap as Se}from"../chunks/D1gJg5gW.js";import{i as Z,p as Ge,s as He,a as Le}from"../chunks/ntNUJhCQ.js";import{r as ke,l as Ve}from"../chunks/DnhBb1Nf.js";import{t as Je,U as me,e as j,i as G,b as Ze,q as Ke,V as Ae,r as ye,s as Xe,S as Ee,v as Oe,w as Ye,u as De,R as Me,h as Qe,j as qe}from"../chunks/TWPTmQMR.js";import{C as $e,E as et,R as Te,a as tt}from"../chunks/bPwk6O5q.js";import{h as Re}from"../chunks/TRjCXhQC.js";function ie(u,e,t,i,d,o){var r=u.__className;if(xe||r!==t||r===void 0){var S=Je(t,i,o);(!xe||S!==u.getAttribute("class"))&&(S==null?u.removeAttribute("class"):u.className=S),u.__className=t}else if(o&&d!==o)for(var _ in o){var N=!!o[_];(d==null||N!==!!d[_])&&u.classList.toggle(_,N)}return o}const st=!0,Lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:st},Symbol.toStringTag,{value:"Module"}));var rt=f("<p>SSP doesn't have a solution.</p>"),at=f("<li> </li>"),nt=f("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),it=f("<main><h2>CertRenderer SSP</h2> <!></main>");function lt(u,e){Ne(e,!0);var t=it(),i=b(c(t),2);{var d=r=>{var S=rt();g(r,S)},o=r=>{var S=nt(),_=b(H(S),2);j(_,21,()=>e.cert.numbers,G,(N,s)=>{var p=at(),y=c(p,!0);n(p),k(E=>W(y,E),[()=>v(s).value.join("")]),g(N,p)}),n(_),g(r,S)};Z(i,r=>{e.cert==me?r(d):r(o,!1)})}n(t),g(u,t),we()}var ot=f("<li> </li>"),ct=f("<p> </p> <p>Numbers:</p> <ul></ul>",1),ut=f(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),vt=f("<li> </li>"),dt=f("<p>Numbers:</p> <ul></ul> <p> </p>",1),bt=f("<th> </th>"),gt=f('<th class="clause-col svelte-1c4cita"><!></th>'),mt=f('<td class="svelte-1c4cita"> </td>'),pt=f('<td class="svelte-1c4cita"> </td>'),ht=f('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),ft=f('<td class="svelte-1c4cita"> </td>'),_t=f('<td class="svelte-1c4cita"> </td>'),It=f('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),St=f('<td class="svelte-1c4cita"> </td>'),Ct=f('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),At=f('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),yt=f("<main><h2>SSP Renderer</h2> <!></main>");function Fe(u,e){Ne(e,!0);let t=Ge(e,"style",3,"none"),i=ge(!1);var d=yt(),o=b(c(d),2);{var r=_=>{var N=ct(),s=H(N),p=c(s);n(s);var y=b(s,4);j(y,21,()=>e.ssp.numbers,G,(E,J)=>{var M=ot(),$=c(M,!0);n(M),k(U=>W($,U),[()=>v(J).value.join("")]),g(E,M)}),n(y),k(E=>W(p,`Target: ${E??""}`),[()=>e.ssp.target.join("")]),g(_,N)},S=_=>{var N=Ce(),s=H(N);{var p=y=>{var E=Ce(),J=H(E);{var M=U=>{var L=ut();g(U,L)},$=U=>{var L=At(),oe=H(L),ve=b(c(oe),2);ke(ve),n(oe);var he=b(oe,2);{var de=V=>{var ee=dt(),Q=b(H(ee),2);j(Q,21,()=>e.ssp.numbers,G,(l,C)=>{var I=vt();let w;var K=c(I,!0);n(I),k((F,A)=>{w=ie(I,1,Ke(v(C).classes??""),"svelte-1c4cita",w,F),W(K,A)},[()=>({"ssp-used":v(C).used}),()=>v(C).value.join("")]),g(l,I)}),n(Q);var q=b(Q,2),a=c(q);n(q),k(l=>W(a,`Target: ${l??""}`),[()=>e.ssp.target.join("")]),g(V,ee)},be=V=>{var ee=Ct(),Q=b(H(ee),2),q=c(Q),a=c(q),l=b(c(a));j(l,17,()=>e.cnfInstance.variables,G,(x,P)=>{var h=bt();ie(h,1,"var-col svelte-1c4cita");var m=c(h,!0);n(h),k(()=>W(m,v(P))),g(x,h)});var C=b(l);j(C,17,()=>e.cnfInstance.clauses,G,(x,P)=>{var h=gt(),m=c(h);Re(m,()=>v(P).asHtmlString()),n(h),g(x,h)}),n(a),n(q);var I=b(q),w=c(I);j(w,17,()=>e.cnfInstance.variables,G,(x,P,h)=>{var m=ht(),B=H(m);let te;var X=c(B),T=c(X);n(X);var fe=b(X);j(fe,17,()=>e.ssp.numbers[2*h].value,G,(z,O)=>{var ne=mt(),_e=c(ne,!0);n(ne),k(()=>W(_e,v(O))),g(z,ne)}),n(B);var se=b(B,2);let ce;var ue=c(se),re=c(ue);n(ue);var ae=b(ue);j(ae,17,()=>e.ssp.numbers[2*h+1].value,G,(z,O)=>{var ne=pt(),_e=c(ne,!0);n(ne),k(()=>W(_e,v(O))),g(z,ne)}),n(se),pe(2),k((z,O)=>{te=ie(B,1,"var-row svelte-1c4cita",null,te,z),W(T,`${v(P)??""} ≔ T`),ce=ie(se,1,"var-row var-row-false svelte-1c4cita",null,ce,O),W(re,`${v(P)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*h].used}),()=>({"ssp-used":e.ssp.numbers[2*h+1].used})]),g(x,m)});var K=b(w);j(K,17,()=>e.cnfInstance.clauses,G,(x,P,h)=>{var m=It(),B=H(m);let te;var X=c(B),T=c(X);Re(T,()=>v(P).asHtmlString()),n(X);var fe=b(X);j(fe,17,()=>e.ssp.numbers[2*h+2*e.cnfInstance.variables.length].value,G,(re,ae)=>{var z=ft(),O=c(z,!0);n(z),k(()=>W(O,v(ae))),g(re,z)}),n(B);var se=b(B,2);let ce;var ue=b(c(se));j(ue,17,()=>e.ssp.numbers[2*h+1+2*e.cnfInstance.variables.length].value,G,(re,ae)=>{var z=_t(),O=c(z,!0);n(z),k(()=>W(O,v(ae))),g(re,z)}),n(se),pe(2),k((re,ae)=>{te=ie(B,1,"clause-row svelte-1c4cita",null,te,re),ce=ie(se,1,"clause-row clause-row-fill svelte-1c4cita",null,ce,ae)},[()=>({"ssp-used":e.ssp.numbers[2*h+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*h+1+2*e.cnfInstance.variables.length].used})]),g(x,m)}),n(I);var F=b(I),A=c(F),R=b(c(A));j(R,17,()=>e.ssp.target,G,(x,P)=>{var h=St(),m=c(h,!0);n(h),k(()=>W(m,v(P))),g(x,h)}),n(A),n(F),n(Q),g(V,ee)};Z(he,V=>{v(i)?V(de):V(be,!1)})}Ze(ve,()=>v(i),V=>Y(i,V)),g(U,L)};Z(J,U=>{e.cnfInstance?U($,!1):U(M)})}g(y,E)};Z(s,y=>{t()=="3sat"&&y(p)},!0)}g(_,N)};Z(o,_=>{t()=="none"?_(r):_(S,!1)})}n(d),g(u,d),we()}class Nt{decode(e,t){const i=new Map;console.debug("decode from this SSP certificate",t);for(const d of t.numbers){const o=d.id;if(o.startsWith(Ae)){const r=o.substring(Ae.length);i.has(r)||(console.debug(`setting variable ${o} to TRUE`),i.set(r,!0))}else if(o.startsWith(ye)){const r=o.substring(ye.length);i.has(r)||(console.debug(`setting variable ${o} to FALSE`),i.set(r,!1))}}return new $e(i)}}var wt=Object.getOwnPropertyDescriptor,Pe=(u,e,t,i)=>{for(var d=i>1?void 0:i?wt(e,t):e,o=u.length-1,r;o>=0;o--)(r=u[o])&&(d=r(d)||d);return d};let D=class{id;value;used;classes;constructor(u,e,t=!1,i){this.id=u,this.value=e,this.used=t,this.classes=i}asString(){return this.value.join("")}};D=Pe([Ee.SerializableClass()],D);let le=class extends Xe{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(u){this.numbers.push(u)}setTarget(u){this.target=u}empty(){return this.numbers.length==0}static fromString(u,e){const t=new le;if(!u)return"SSP cannot be constructed from an empty string";const i=u.split(`
`).map(d=>d.trim()).filter(d=>d.length);try{const d=Array(e).map(o=>Number.parseInt(o));t.setTarget(d)}catch(d){return console.error(d),`Couldn't parse the target number: ${e}`}return i.forEach((d,o)=>{try{const r=Array.from(d).map(S=>Number.parseInt(S));t.addNumber(new D(`${o}`,r))}catch(r){return console.error(r),`Couldn't parse the number on the line ${o}: ${d}.`}}),t}toSerializedString(){const u={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(u)}static fromSerializedString(u){const e=new le,t=JSON.parse(u);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const i of t.numbers)e.addNumber(new D(i.id,i.value,i.used,i.classes));return e}copy(){const u=new le;return u.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new D(e.id,[...e.value],e.used,e.classes);u.addNumber(t)}),u}};le=Pe([Ee.SerializableClass()],le);class xt{inInstance;constructor(e){this.inInstance=e}reduce(){const{variables:e,clauses:t}=this.inInstance,i=new le,d=e.length,o=t.length,r=d+o,S=Array.from({length:2*r},()=>new Array(r).fill(0));for(let s=0;s<r;s++)S[2*s][s]=1,S[2*s+1][s]=1;t.forEach((s,p)=>s.literals.forEach(y=>{const E=e.findIndex(J=>J==y.varName);S[2*E+(y.negated?1:0)][d+p]=1}));const _=[];for(let s=0;s<e.length;s++){const p=e[s];i.addNumber(new D(Ae+p,S[2*s])),i.addNumber(new D(ye+p,S[2*s+1]))}for(let s=0;s<t.length;s++)i.addNumber(new D(Oe+s,S[2*s+2*e.length])),i.addNumber(new D(Ye+s,S[2*s+1+2*e.length]));const N=[...new Array(d).fill(1),...new Array(o).fill(3)];return i.setTarget(N),_.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                        ${e.map((s,p)=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${(()=>{let y="".padEnd(r,"0");return y.substring(0,p)+"1"+y.substring(p+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let y="".padEnd(r,"0");return y.substring(0,p)+"1"+y.substring(p+1)})()}
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
                        ${t.map((s,p)=>`
                                <li>
                                    c${p} &coloneq; ${s.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((s,p)=>{const y=i.numbers[2*p],E=i.numbers[2*p+1];return`
                                <li> 
                                    <i>${s}<sup>T</sup></i> - ${y.value.join("")}
                                </li>
                                <li> 
                                    <i>${s}<sup>F</sup></i> - ${E.value.join("")}
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
                        ${(()=>{let s="";for(let p=2*e.length;p<2*e.length+2*t.length;p++)s+=`<li>${i.numbers[p].value.join("")}</li>`;return console.debug("accumString",s),s})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${i.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:i,steps:_}}}var Tt=f('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Rt=(u,e)=>e(),Ft=f("<div><!></div> <!> <div><!></div>",1),kt=f("<span>There are no steps to step through.</span>"),Zt=f('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),Et=f('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Vt(u,e){Ne(e,!0);const t=()=>He(r,"$redStore",i),[i,d]=Le();let o=De(Ve.LS_3SAT_SSP,new Me),r=o.value,S=ge(!1),_=ge(!1),N=ge(""),s=null;function p(a){s&&(s.terminate(),s=null,Y(_,!1),Y(N,"Solving cancelled — formula changed.")),r.update(l=>(l.reset(),l.setInInstance(a),o.save(),l))}function y(){if(t().inInstance){const a=new xt(t().inInstance),{outInstance:l,steps:C}=a.reduce();r.update(I=>(I.steps=C,I.outInstance=l,I)),o.save()}}async function E(){let{inCert:a,outInstance:l,outCert:C}=t();if(!(!l||C)){Y(_,!0),Y(N,"Solving SSP..."),s&&(s.terminate(),s=null);try{const I=new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMi8xMC8yMDI1CgppbXBvcnQgeyBVbnNvbHZhYmxlIH0gZnJvbSAiJGxpYi9jb3JlL1Vuc29sdmFibGUiOwppbXBvcnQgeyBTU1AgfSBmcm9tICIkbGliL2luc3RhbmNlL1NTUCI7CmltcG9ydCB7IFNvbHZlclNTUCB9IGZyb20gIiRsaWIvc29sdmUvU29sdmVyU1NQIjsKCnNlbGYub25tZXNzYWdlID0gYXN5bmMgKGUpID0+IHsKICAgIGNvbnNvbGUuZGVidWcoJ1dvcmtlclNTUFNvbHZlcjo6b25tZXNzYWdlJyk7CgogICAgY29uc29sZS5kZWJ1ZygnQ2FsbGluZyBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcgbWV0aG9kJyk7CiAgICBjb25zdCBzc3AgPSBTU1AuZnJvbVNlcmlhbGl6ZWRTdHJpbmcoZS5kYXRhKTsKCiAgICBpZiAodHlwZW9mIHNzcCA9PSAnc3RyaW5nJykgewogICAgICAgIHBvc3RNZXNzYWdlKG5ldyBFcnJvcigiU1NQIGNvdWxkbid0IGJlIHBhcnNlZCBmcm9tIHN0cmluZy4iKSk7CiAgICAgICAgcmV0dXJuOwogICAgfQoKICAgIGNvbnNvbGUuZGVidWcoJ0NyZWF0aW5nIG5ldyBzb2x2ZXInKTsKCiAgICBjb25zdCBzb2x2ZXIgPSBuZXcgU29sdmVyU1NQKHNzcCk7CgogICAgdHJ5IHsKICAgICAgICBjb25zb2xlLmRlYnVnKCdzb2x2aW5nLi4uJyk7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7CiAgICAgICAgcG9zdE1lc3NhZ2UocmVzdWx0IHx8IFVuc29sdmFibGUpOwogICAgfSBmaW5hbGx5IHsKICAgICAgICBwb3N0TWVzc2FnZShVbnNvbHZhYmxlKTsKICAgIH0KfTs=",import.meta.url),w=new Worker(I,{type:"module"});s=w;const K=new Promise((F,A)=>{w.onmessage=R=>{w===s&&(w.terminate(),s=null,F(R.data))},w.onerror=R=>{w===s&&(w.terminate(),s=null,A(R))}});if(w.postMessage(l.toSerializedString()),C=await K,!s&&!v(_))return;C==me?r.update(F=>(F.inCert=me,F.outCert=me,F)):(C.numbers.forEach(A=>{const R=l.numbers.find(x=>A.id==x.id);R&&(R.used=!0)}),a=new Nt().decode(l,C),r.update(A=>(A.inCert=a,A.outCert=C,A.outInstance=l,A))),o.save()}catch(I){console.error("Error during solving:",I),Y(N,"An error occurred while solving.")}finally{Y(_,!1),Y(N,""),s=null}}}ze(()=>{r.update(a=>(a.resetStepIndex(),a))}),We(()=>{console.debug("onDestroy"),s&&(s.terminate(),s=null)});var J=Et();Ue(a=>{var l=Tt();je.title="3SAT to SSP",g(a,l)});var M=b(c(J),2);et(M,{get cnf(){return t().inInstance},onChange:a=>p(a),onWrongFormat:a=>alert("From editor: "+a)});var $=b(M,2),U=c($);U.__click=y;var L=b(U,2);L.__click=[Rt,E];var oe=c(L);{var ve=a=>{var l=Ie("Solving...");g(a,l)},he=a=>{var l=Ie("Solve");g(a,l)};Z(oe,a=>{v(_)?a(ve):a(he,!1)})}n(L);var de=b(L,2);ke(de),pe(2),n($);var be=b($,2);{var V=a=>{Qe(a,{children:(l,C)=>{pe();var I=Ie();k(()=>W(I,v(N))),g(l,I)}})};Z(be,a=>{v(_)&&a(V)})}var ee=b(be,2);{var Q=a=>{const l=Se(()=>t().steps),C=Se(()=>t().stepIndex);var I=Ce(),w=H(I);{var K=A=>{var R=Ft(),x=H(R),P=c(x);{var h=T=>{Te(T,{get cnf(){return v(l)[v(C)].inSnapshot}})};Z(P,T=>{v(C)<v(l).length&&v(l)[v(C)].inSnapshot&&!v(l)[v(C)].inSnapshot.empty()&&T(h)})}n(x);var m=b(x,2);qe(m,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{r.update(T=>(T.prevStep(),T)),o.save()},onNextClick:()=>{r.update(T=>(T.nextStep(),T)),o.save()}});var B=b(m,2),te=c(B);{var X=T=>{Fe(T,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};Z(te,T=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&T(X)})}n(B),g(A,R)},F=A=>{var R=kt();g(A,R)};Z(w,A=>{v(l).length?A(K):A(F,!1)})}g(a,I)},q=a=>{var l=Zt(),C=c(l),I=c(C);{var w=m=>{Te(m,{get cnf(){return t().inInstance}})};Z(I,m=>{t().inInstance&&!t().inInstance.empty()&&m(w)})}var K=b(I,2);{var F=m=>{tt(m,{get cert(){return t().inCert}})};Z(K,m=>{t().inCert&&m(F)})}n(C);var A=b(C,2),R=c(A);{var x=m=>{{let B=Se(()=>t().inInstance??void 0);Fe(m,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return v(B)}})}};Z(R,m=>{t().outInstance&&!t().outInstance.empty()&&m(x)})}var P=b(R,2);{var h=m=>{lt(m,{get cert(){return t().outCert}})};Z(P,m=>{t().outCert&&m(h)})}n(A),n(l),g(a,l)};Z(ee,a=>{v(S)?a(Q):a(q,!1)})}n(J),k((a,l)=>{U.disabled=a,L.disabled=l},[()=>!t().hasInInstance()||t().hasOutInstance()||v(_),()=>!t().hasInstances()||t().hasOutCertificate()||v(_)]),Ze(de,()=>v(S),a=>Y(S,a)),g(u,J),we(),d()}Be(["click"]);export{Vt as component,Lt as universal};
