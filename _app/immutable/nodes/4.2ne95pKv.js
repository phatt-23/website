import"../chunks/DsnmJJEf.js";import{s as L,d as Le,b as Oe}from"../chunks/kmNpuAZe.js";import{i as xe,p as Ae,f as _,s as m,d as u,r as n,b,c as Pe,a as V,t as E,B as v,ao as we,D as me,E as K,A as fe,M as ze,z as De,$ as We,an as Se,ap as Ie}from"../chunks/D1gJg5gW.js";import{i as T,p as Ue,s as Me,a as Ve}from"../chunks/ntNUJhCQ.js";import{r as Re,l as qe}from"../chunks/DnhBb1Nf.js";import{t as Be,U as be,e as D,i as W,b as Fe,q as He,V as ye,r as Ce,s as Xe,S as ke,v as Je,w as Ke,u as Ge,R as Qe,h as Ye,j as Ze}from"../chunks/TWPTmQMR.js";import{C as $e,E as et,R as Ne,a as tt}from"../chunks/bPwk6O5q.js";import{h as Ee}from"../chunks/TRjCXhQC.js";function ie(c,e,t,i,d,l){var s=c.__className;if(xe||s!==t||s===void 0){var I=Be(t,i,l);(!xe||I!==c.getAttribute("class"))&&(I==null?c.removeAttribute("class"):c.className=I),c.__className=t}else if(l&&d!==l)for(var S in l){var A=!!l[S];(d==null||A!==!!d[S])&&c.classList.toggle(S,A)}return l}const rt=!0,qt=Object.freeze(Object.defineProperty({__proto__:null,prerender:rt},Symbol.toStringTag,{value:"Module"}));var st=_("<p>SSP doesn't have a solution.</p>"),at=_("<li> </li>"),nt=_("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),it=_("<main><h2>CertRenderer SSP</h2> <!></main>");function ot(c,e){Ae(e,!0);var t=it(),i=m(u(t),2);{var d=s=>{var I=st();b(s,I)},l=s=>{var I=nt(),S=m(V(I),2);D(S,21,()=>e.cert.numbers,W,(A,r)=>{var h=at(),y=u(h,!0);n(h),E(R=>L(y,R),[()=>v(r).value.join("")]),b(A,h)}),n(S),b(s,I)};T(i,s=>{e.cert==be?s(d):s(l,!1)})}n(t),b(c,t),Pe()}var lt=_("<li> </li>"),ut=_("<p> </p> <p>Numbers:</p> <ul></ul>",1),ct=_(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),vt=_("<li> </li>"),dt=_("<p>Numbers:</p> <ul></ul> <p> </p>",1),pt=_("<th> </th>"),mt=_('<th class="clause-col svelte-1c4cita"><!></th>'),bt=_('<td class="svelte-1c4cita"> </td>'),ft=_('<td class="svelte-1c4cita"> </td>'),ht=_('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),gt=_('<td class="svelte-1c4cita"> </td>'),_t=_('<td class="svelte-1c4cita"> </td>'),St=_('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),It=_('<td class="svelte-1c4cita"> </td>'),wt=_('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),yt=_('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),Ct=_("<main><h2>SSP Renderer</h2> <!></main>");function Te(c,e){Ae(e,!0);let t=Ue(e,"style",3,"none"),i=me(!1);var d=Ct(),l=m(u(d),2);{var s=S=>{var A=ut(),r=V(A),h=u(r);n(r);var y=m(r,4);D(y,21,()=>e.ssp.numbers,W,(R,H)=>{var Q=lt(),$=u(Q,!0);n(Q),E(z=>L($,z),[()=>v(H).value.join("")]),b(R,Q)}),n(y),E(R=>L(h,`Target: ${R??""}`),[()=>e.ssp.target.join("")]),b(S,A)},I=S=>{var A=we(),r=V(A);{var h=y=>{var R=we(),H=V(R);{var Q=z=>{var q=ct();b(z,q)},$=z=>{var q=yt(),le=V(q),ve=m(u(le),2);Re(ve),n(le);var he=m(le,2);{var de=B=>{var ee=dt(),Y=m(V(ee),2);D(Y,21,()=>e.ssp.numbers,W,(o,w)=>{var p=vt();let U;var F=u(p,!0);n(p),E((P,C)=>{U=ie(p,1,He(v(w).classes??""),"svelte-1c4cita",U,P),L(F,C)},[()=>({"ssp-used":v(w).used}),()=>v(w).value.join("")]),b(o,p)}),n(Y);var Z=m(Y,2),a=u(Z);n(Z),E(o=>L(a,`Target: ${o??""}`),[()=>e.ssp.target.join("")]),b(B,ee)},pe=B=>{var ee=wt(),Y=m(V(ee),2),Z=u(Y),a=u(Z),o=m(u(a));D(o,17,()=>e.cnfInstance.variables,W,(N,k)=>{var g=pt();ie(g,1,"var-col svelte-1c4cita");var f=u(g,!0);n(g),E(()=>L(f,v(k))),b(N,g)});var w=m(o);D(w,17,()=>e.cnfInstance.clauses,W,(N,k)=>{var g=mt(),f=u(g);Ee(f,()=>v(k).asHtmlString()),n(g),b(N,g)}),n(a),n(Z);var p=m(Z),U=u(p);D(U,17,()=>e.cnfInstance.variables,W,(N,k,g)=>{var f=ht(),j=V(f);let te;var X=u(j),x=u(X);n(X);var ge=m(X);D(ge,17,()=>e.ssp.numbers[2*g].value,W,(O,J)=>{var ne=bt(),_e=u(ne,!0);n(ne),E(()=>L(_e,v(J))),b(O,ne)}),n(j);var re=m(j,2);let ue;var ce=u(re),se=u(ce);n(ce);var ae=m(ce);D(ae,17,()=>e.ssp.numbers[2*g+1].value,W,(O,J)=>{var ne=ft(),_e=u(ne,!0);n(ne),E(()=>L(_e,v(J))),b(O,ne)}),n(re),fe(2),E((O,J)=>{te=ie(j,1,"var-row svelte-1c4cita",null,te,O),L(x,`${v(k)??""} ≔ T`),ue=ie(re,1,"var-row var-row-false svelte-1c4cita",null,ue,J),L(se,`${v(k)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*g].used}),()=>({"ssp-used":e.ssp.numbers[2*g+1].used})]),b(N,f)});var F=m(U);D(F,17,()=>e.cnfInstance.clauses,W,(N,k,g)=>{var f=St(),j=V(f);let te;var X=u(j),x=u(X);Ee(x,()=>v(k).asHtmlString()),n(X);var ge=m(X);D(ge,17,()=>e.ssp.numbers[2*g+2*e.cnfInstance.variables.length].value,W,(se,ae)=>{var O=gt(),J=u(O,!0);n(O),E(()=>L(J,v(ae))),b(se,O)}),n(j);var re=m(j,2);let ue;var ce=m(u(re));D(ce,17,()=>e.ssp.numbers[2*g+1+2*e.cnfInstance.variables.length].value,W,(se,ae)=>{var O=_t(),J=u(O,!0);n(O),E(()=>L(J,v(ae))),b(se,O)}),n(re),fe(2),E((se,ae)=>{te=ie(j,1,"clause-row svelte-1c4cita",null,te,se),ue=ie(re,1,"clause-row clause-row-fill svelte-1c4cita",null,ue,ae)},[()=>({"ssp-used":e.ssp.numbers[2*g+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*g+1+2*e.cnfInstance.variables.length].used})]),b(N,f)}),n(p);var P=m(p),C=u(P),M=m(u(C));D(M,17,()=>e.ssp.target,W,(N,k)=>{var g=It(),f=u(g,!0);n(g),E(()=>L(f,v(k))),b(N,g)}),n(C),n(P),n(Y),b(B,ee)};T(he,B=>{v(i)?B(de):B(pe,!1)})}Fe(ve,()=>v(i),B=>K(i,B)),b(z,q)};T(H,z=>{e.cnfInstance?z($,!1):z(Q)})}b(y,R)};T(r,y=>{t()=="3sat"&&y(h)},!0)}b(S,A)};T(l,S=>{t()=="none"?S(s):S(I,!1)})}n(d),b(c,d),Pe()}class At{decode(e,t){console.debug("DecoderSSPto3SAT::decode");const i=new Map;console.debug("decode from this SSP certificate",t);for(const d of t.numbers){const l=d.id;if(l.startsWith(ye)){const s=l.substring(ye.length);i.has(s)||(console.debug(`setting variable ${l} to TRUE`),i.set(s,!0))}else if(l.startsWith(Ce)){const s=l.substring(Ce.length);i.has(s)||(console.debug(`setting variable ${l} to FALSE`),i.set(s,!1))}}return new $e(i)}}var Pt=Object.getOwnPropertyDescriptor,je=(c,e,t,i)=>{for(var d=i>1?void 0:i?Pt(e,t):e,l=c.length-1,s;l>=0;l--)(s=c[l])&&(d=s(d)||d);return d};let G=class{id;value;used;classes;constructor(c,e,t=!1,i){this.id=c,this.value=e,this.used=t,this.classes=i}asString(){return this.value.join("")}};G=je([ke.SerializableClass("SSPNumber")],G);let oe=class extends Xe{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(c){this.numbers.push(c)}setTarget(c){this.target=c}empty(){return this.numbers.length==0}static fromString(c,e){const t=new oe;if(!c)return"SSP cannot be constructed from an empty string";const i=c.split(`
`).map(d=>d.trim()).filter(d=>d.length);try{const d=Array(e).map(l=>Number.parseInt(l));t.setTarget(d)}catch(d){return console.error(d),`Couldn't parse the target number: ${e}`}return i.forEach((d,l)=>{try{const s=Array.from(d).map(I=>Number.parseInt(I));t.addNumber(new G(`${l}`,s))}catch(s){return console.error(s),`Couldn't parse the number on the line ${l}: ${d}.`}}),t}toSerializedString(){const c={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(c)}static fromSerializedString(c){const e=new oe,t=JSON.parse(c);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const i of t.numbers)e.addNumber(new G(i.id,i.value,i.used,i.classes));return e}copy(){const c=new oe;return c.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new G(e.id,[...e.value],e.used,e.classes);c.addNumber(t)}),c}};oe=je([ke.SerializableClass("SSP")],oe);class xt{inInstance;constructor(e){this.inInstance=e}reduce(){const{variables:e,clauses:t}=this.inInstance,i=new oe,d=e.length,l=t.length,s=d+l,I=Array.from({length:2*s},()=>new Array(s).fill(0));for(let r=0;r<s;r++)I[2*r][r]=1,I[2*r+1][r]=1;t.forEach((r,h)=>r.literals.forEach(y=>{const R=e.findIndex(H=>H==y.varName);I[2*R+(y.negated?1:0)][d+h]=1}));const S=[];for(let r=0;r<e.length;r++){const h=e[r];i.addNumber(new G(ye+h,I[2*r])),i.addNumber(new G(Ce+h,I[2*r+1]))}for(let r=0;r<t.length;r++)i.addNumber(new G(Je+r,I[2*r+2*e.length])),i.addNumber(new G(Ke+r,I[2*r+1+2*e.length]));const A=[...new Array(d).fill(1),...new Array(l).fill(3)];return i.setTarget(A),S.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                    In this case, <i>k = ${e.length} + ${t.length} = ${s}</i>
                </p>
                <p>
                    At the beginning, set all of the digits to 0.
                    <ul>
                        ${e.map(r=>`
                            <li>
                                <i>${r}<sup>T</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                            <li>
                                <i>${r}<sup>F</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For numbers <i>n<sub>v<sub>i</sub></sub></i> the <i>i</i>-th digits are set to 1.
                    <ul>
                        ${e.map((r,h)=>`
                            <li>
                                <i>${r}<sup>T</sup></i> - ${(()=>{let y="".padEnd(s,"0");return y.substring(0,h)+"1"+y.substring(h+1)})()}
                            </li>
                            <li>
                                <i>${r}<sup>F</sup></i> - ${(()=>{let y="".padEnd(s,"0");return y.substring(0,h)+"1"+y.substring(h+1)})()}
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
                        ${t.map((r,h)=>`
                                <li>
                                    c${h} &coloneq; ${r.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((r,h)=>{const y=i.numbers[2*h],R=i.numbers[2*h+1];return`
                                <li> 
                                    <i>${r}<sup>T</sup></i> - ${y.value.join("")}
                                </li>
                                <li> 
                                    <i>${r}<sup>F</sup></i> - ${R.value.join("")}
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
                    both of the same value: number of ${s} digits with i-th digit set to 1.

                    <ul>
                        ${(()=>{let r="";for(let h=2*e.length;h<2*e.length+2*t.length;h++)r+=`<li>${i.numbers[h].value.join("")}</li>`;return console.debug("accumString",r),r})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${i.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:i,steps:S}}}const Nt=""+new URL("../workers/WorkerSSPSolver-BNqDHUP0.js",import.meta.url).href;var Et=_('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Tt=(c,e)=>e(),Rt=_("<div><!></div> <!> <div><!></div>",1),Ft=_("<span>There are no steps to step through.</span>"),kt=_('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),jt=_('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Bt(c,e){Ae(e,!0);const t=()=>Me(s,"$redStore",i),[i,d]=Ve();let l=Ge(qe.LS_3SAT_SSP,new Qe),s=l.value,I=me(!1),S=me(!1),A=me(""),r=null;function h(a){r&&(r.terminate(),r=null,K(S,!1),K(A,"Solving cancelled — formula changed.")),s.update(o=>(o.reset(),o.setInInstance(a),l.save(),o))}function y(){if(t().inInstance){const a=new xt(t().inInstance),{outInstance:o,steps:w}=a.reduce();s.update(p=>(p.steps=w,p.outInstance=o,p)),l.save()}}async function R(){let{inCert:a,outInstance:o,outCert:w}=t();if(!(!o||w)){K(S,!0),K(A,"Solving SSP..."),r&&(r.terminate(),r=null);try{const p=new Worker(Nt,{type:"module"});r=p;const U=new Promise((F,P)=>{p.onmessage=C=>{p===r&&(p.terminate(),r=null,F(C.data))},p.onerror=C=>{p===r&&(p.terminate(),r=null,P(C))}});if(p.postMessage(o.toSerializedString()),w=await U,!r&&!v(S))return;w==be?s.update(F=>(F.inCert=be,F.outCert=be,F)):(w.numbers.forEach(P=>{const C=o.numbers.find(M=>P.id==M.id);C&&(C.used=!0)}),console.debug("Decoding..."),a=new At().decode(o,w),console.debug("Done decoding..."),s.update(P=>(P.inCert=a,P.outCert=w,P.outInstance=o,P))),l.save()}catch(p){console.error("Error during solving:",p),K(A,"An error occurred while solving.")}finally{K(S,!1),K(A,""),r=null}}}ze(()=>{s.update(a=>(a.resetStepIndex(),a))}),Oe(()=>{console.debug("onDestroy"),r&&(r.terminate(),r=null)});var H=jt();De(a=>{var o=Et();We.title="3SAT to SSP",b(a,o)});var Q=m(u(H),2);et(Q,{get cnf(){return t().inInstance},onChange:a=>h(a),onWrongFormat:a=>alert("From editor: "+a)});var $=m(Q,2),z=u($);z.__click=y;var q=m(z,2);q.__click=[Tt,R];var le=u(q);{var ve=a=>{var o=Se("Solving...");b(a,o)},he=a=>{var o=Se("Solve");b(a,o)};T(le,a=>{v(S)?a(ve):a(he,!1)})}n(q);var de=m(q,2);Re(de),fe(2),n($);var pe=m($,2);{var B=a=>{Ye(a,{children:(o,w)=>{fe();var p=Se();E(()=>L(p,v(A))),b(o,p)}})};T(pe,a=>{v(S)&&a(B)})}var ee=m(pe,2);{var Y=a=>{const o=Ie(()=>t().steps),w=Ie(()=>t().stepIndex);var p=we(),U=V(p);{var F=C=>{var M=Rt(),N=V(M),k=u(N);{var g=x=>{Ne(x,{get cnf(){return v(o)[v(w)].inSnapshot}})};T(k,x=>{v(w)<v(o).length&&v(o)[v(w)].inSnapshot&&!v(o)[v(w)].inSnapshot.empty()&&x(g)})}n(N);var f=m(N,2);Ze(f,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{s.update(x=>(x.prevStep(),x)),l.save()},onNextClick:()=>{s.update(x=>(x.nextStep(),x)),l.save()}});var j=m(f,2),te=u(j);{var X=x=>{Te(x,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};T(te,x=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&x(X)})}n(j),b(C,M)},P=C=>{var M=Ft();b(C,M)};T(U,C=>{v(o).length?C(F):C(P,!1)})}b(a,p)},Z=a=>{var o=kt(),w=u(o),p=u(w);{var U=f=>{Ne(f,{get cnf(){return t().inInstance}})};T(p,f=>{t().inInstance&&!t().inInstance.empty()&&f(U)})}var F=m(p,2);{var P=f=>{tt(f,{get cert(){return t().inCert}})};T(F,f=>{t().inCert&&f(P)})}n(w);var C=m(w,2),M=u(C);{var N=f=>{{let j=Ie(()=>t().inInstance??void 0);Te(f,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return v(j)}})}};T(M,f=>{t().outInstance&&!t().outInstance.empty()&&f(N)})}var k=m(M,2);{var g=f=>{ot(f,{get cert(){return t().outCert}})};T(k,f=>{t().outCert&&f(g)})}n(C),n(o),b(a,o)};T(ee,a=>{v(I)?a(Y):a(Z,!1)})}n(H),E((a,o)=>{z.disabled=a,q.disabled=o},[()=>!t().hasInInstance()||t().hasOutInstance()||v(S),()=>!t().hasInstances()||t().hasOutCertificate()||v(S)]),Fe(de,()=>v(I),a=>K(I,a)),b(c,H),Pe(),d()}Le(["click"]);export{Bt as component,qt as universal};
