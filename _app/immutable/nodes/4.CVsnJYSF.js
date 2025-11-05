import"../chunks/DsnmJJEf.js";import{s as j,d as Le,b as je}from"../chunks/kmNpuAZe.js";import{i as xe,p as Ae,f,s as m,d as c,r as n,b as g,c as Ne,a as H,t as R,B as v,ao as Ce,D as ge,E as Y,A as pe,M as Be,z as Ve,$ as ze,an as Ie,ap as Se}from"../chunks/D1gJg5gW.js";import{i as P,p as Ge,s as He,a as We}from"../chunks/ntNUJhCQ.js";import{r as Re,l as Ze}from"../chunks/DnhBb1Nf.js";import{t as Ke,U as be,e as z,i as G,b as Pe,q as Oe,V as ye,r as we,s as De,S as ke,v as Xe,w as Ye,u as Me,R as Je,h as Qe,j as qe}from"../chunks/TWPTmQMR.js";import{C as $e,E as et,R as Te,a as tt}from"../chunks/bPwk6O5q.js";import{h as Fe}from"../chunks/TRjCXhQC.js";function ie(u,e,t,i,d,o){var r=u.__className;if(xe||r!==t||r===void 0){var S=Ke(t,i,o);(!xe||S!==u.getAttribute("class"))&&(S==null?u.removeAttribute("class"):u.className=S),u.__className=t}else if(o&&d!==o)for(var _ in o){var A=!!o[_];(d==null||A!==!!d[_])&&u.classList.toggle(_,A)}return o}const st=!0,Wt=Object.freeze(Object.defineProperty({__proto__:null,prerender:st},Symbol.toStringTag,{value:"Module"}));var rt=f("<p>SSP doesn't have a solution.</p>"),at=f("<li> </li>"),nt=f("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),it=f("<main><h2>CertRenderer SSP</h2> <!></main>");function lt(u,e){Ae(e,!0);var t=it(),i=m(c(t),2);{var d=r=>{var S=rt();g(r,S)},o=r=>{var S=nt(),_=m(H(S),2);z(_,21,()=>e.cert.numbers,G,(A,s)=>{var p=at(),w=c(p,!0);n(p),R(k=>j(w,k),[()=>v(s).value.join("")]),g(A,p)}),n(_),g(r,S)};P(i,r=>{e.cert==be?r(d):r(o,!1)})}n(t),g(u,t),Ne()}var ot=f("<li> </li>"),ct=f("<p> </p> <p>Numbers:</p> <ul></ul>",1),ut=f(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),vt=f("<li> </li>"),dt=f("<p>Numbers:</p> <ul></ul> <p> </p>",1),mt=f("<th> </th>"),gt=f('<th class="clause-col svelte-1c4cita"><!></th>'),bt=f('<td class="svelte-1c4cita"> </td>'),pt=f('<td class="svelte-1c4cita"> </td>'),ht=f('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),ft=f('<td class="svelte-1c4cita"> </td>'),_t=f('<td class="svelte-1c4cita"> </td>'),It=f('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),St=f('<td class="svelte-1c4cita"> </td>'),Ct=f('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),yt=f('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),wt=f("<main><h2>SSP Renderer</h2> <!></main>");function Ee(u,e){Ae(e,!0);let t=Ge(e,"style",3,"none"),i=ge(!1);var d=wt(),o=m(c(d),2);{var r=_=>{var A=ct(),s=H(A),p=c(s);n(s);var w=m(s,4);z(w,21,()=>e.ssp.numbers,G,(k,K)=>{var J=ot(),$=c(J,!0);n(J),R(V=>j($,V),[()=>v(K).value.join("")]),g(k,J)}),n(w),R(k=>j(p,`Target: ${k??""}`),[()=>e.ssp.target.join("")]),g(_,A)},S=_=>{var A=Ce(),s=H(A);{var p=w=>{var k=Ce(),K=H(k);{var J=V=>{var W=ut();g(V,W)},$=V=>{var W=yt(),oe=H(W),ve=m(c(oe),2);Re(ve),n(oe);var he=m(oe,2);{var de=Z=>{var ee=dt(),Q=m(H(ee),2);z(Q,21,()=>e.ssp.numbers,G,(l,C)=>{var I=vt();let N;var O=c(I,!0);n(I),R((E,y)=>{N=ie(I,1,Oe(v(C).classes??""),"svelte-1c4cita",N,E),j(O,y)},[()=>({"ssp-used":v(C).used}),()=>v(C).value.join("")]),g(l,I)}),n(Q);var q=m(Q,2),a=c(q);n(q),R(l=>j(a,`Target: ${l??""}`),[()=>e.ssp.target.join("")]),g(Z,ee)},me=Z=>{var ee=Ct(),Q=m(H(ee),2),q=c(Q),a=c(q),l=m(c(a));z(l,17,()=>e.cnfInstance.variables,G,(x,U)=>{var h=mt();ie(h,1,"var-col svelte-1c4cita");var b=c(h,!0);n(h),R(()=>j(b,v(U))),g(x,h)});var C=m(l);z(C,17,()=>e.cnfInstance.clauses,G,(x,U)=>{var h=gt(),b=c(h);Fe(b,()=>v(U).asHtmlString()),n(h),g(x,h)}),n(a),n(q);var I=m(q),N=c(I);z(N,17,()=>e.cnfInstance.variables,G,(x,U,h)=>{var b=ht(),L=H(b);let te;var D=c(L),T=c(D);n(D);var fe=m(D);z(fe,17,()=>e.ssp.numbers[2*h].value,G,(B,X)=>{var ne=bt(),_e=c(ne,!0);n(ne),R(()=>j(_e,v(X))),g(B,ne)}),n(L);var se=m(L,2);let ce;var ue=c(se),re=c(ue);n(ue);var ae=m(ue);z(ae,17,()=>e.ssp.numbers[2*h+1].value,G,(B,X)=>{var ne=pt(),_e=c(ne,!0);n(ne),R(()=>j(_e,v(X))),g(B,ne)}),n(se),pe(2),R((B,X)=>{te=ie(L,1,"var-row svelte-1c4cita",null,te,B),j(T,`${v(U)??""} ≔ T`),ce=ie(se,1,"var-row var-row-false svelte-1c4cita",null,ce,X),j(re,`${v(U)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*h].used}),()=>({"ssp-used":e.ssp.numbers[2*h+1].used})]),g(x,b)});var O=m(N);z(O,17,()=>e.cnfInstance.clauses,G,(x,U,h)=>{var b=It(),L=H(b);let te;var D=c(L),T=c(D);Fe(T,()=>v(U).asHtmlString()),n(D);var fe=m(D);z(fe,17,()=>e.ssp.numbers[2*h+2*e.cnfInstance.variables.length].value,G,(re,ae)=>{var B=ft(),X=c(B,!0);n(B),R(()=>j(X,v(ae))),g(re,B)}),n(L);var se=m(L,2);let ce;var ue=m(c(se));z(ue,17,()=>e.ssp.numbers[2*h+1+2*e.cnfInstance.variables.length].value,G,(re,ae)=>{var B=_t(),X=c(B,!0);n(B),R(()=>j(X,v(ae))),g(re,B)}),n(se),pe(2),R((re,ae)=>{te=ie(L,1,"clause-row svelte-1c4cita",null,te,re),ce=ie(se,1,"clause-row clause-row-fill svelte-1c4cita",null,ce,ae)},[()=>({"ssp-used":e.ssp.numbers[2*h+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*h+1+2*e.cnfInstance.variables.length].used})]),g(x,b)}),n(I);var E=m(I),y=c(E),F=m(c(y));z(F,17,()=>e.ssp.target,G,(x,U)=>{var h=St(),b=c(h,!0);n(h),R(()=>j(b,v(U))),g(x,h)}),n(y),n(E),n(Q),g(Z,ee)};P(he,Z=>{v(i)?Z(de):Z(me,!1)})}Pe(ve,()=>v(i),Z=>Y(i,Z)),g(V,W)};P(K,V=>{e.cnfInstance?V($,!1):V(J)})}g(w,k)};P(s,w=>{t()=="3sat"&&w(p)},!0)}g(_,A)};P(o,_=>{t()=="none"?_(r):_(S,!1)})}n(d),g(u,d),Ne()}class At{decode(e,t){const i=new Map;console.debug("decode from this SSP certificate",t);for(const d of t.numbers){const o=d.id;if(o.startsWith(ye)){const r=o.substring(ye.length);i.has(r)||(console.debug(`setting variable ${o} to TRUE`),i.set(r,!0))}else if(o.startsWith(we)){const r=o.substring(we.length);i.has(r)||(console.debug(`setting variable ${o} to FALSE`),i.set(r,!1))}}return new $e(i)}}var Nt=Object.getOwnPropertyDescriptor,Ue=(u,e,t,i)=>{for(var d=i>1?void 0:i?Nt(e,t):e,o=u.length-1,r;o>=0;o--)(r=u[o])&&(d=r(d)||d);return d};let M=class{id;value;used;classes;constructor(u,e,t=!1,i){this.id=u,this.value=e,this.used=t,this.classes=i}asString(){return this.value.join("")}};M=Ue([ke.SerializableClass()],M);let le=class extends De{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(u){this.numbers.push(u)}setTarget(u){this.target=u}empty(){return this.numbers.length==0}static fromString(u,e){const t=new le;if(!u)return"SSP cannot be constructed from an empty string";const i=u.split(`
`).map(d=>d.trim()).filter(d=>d.length);try{const d=Array(e).map(o=>Number.parseInt(o));t.setTarget(d)}catch(d){return console.error(d),`Couldn't parse the target number: ${e}`}return i.forEach((d,o)=>{try{const r=Array.from(d).map(S=>Number.parseInt(S));t.addNumber(new M(`${o}`,r))}catch(r){return console.error(r),`Couldn't parse the number on the line ${o}: ${d}.`}}),t}toSerializedString(){const u={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(u)}static fromSerializedString(u){const e=new le,t=JSON.parse(u);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const i of t.numbers)e.addNumber(new M(i.id,i.value,i.used,i.classes));return e}copy(){const u=new le;return u.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new M(e.id,[...e.value],e.used,e.classes);u.addNumber(t)}),u}};le=Ue([ke.SerializableClass()],le);class xt{inInstance;constructor(e){this.inInstance=e}reduce(){const{variables:e,clauses:t}=this.inInstance,i=new le,d=e.length,o=t.length,r=d+o,S=Array.from({length:2*r},()=>new Array(r).fill(0));for(let s=0;s<r;s++)S[2*s][s]=1,S[2*s+1][s]=1;t.forEach((s,p)=>s.literals.forEach(w=>{const k=e.findIndex(K=>K==w.varName);S[2*k+(w.negated?1:0)][d+p]=1}));const _=[];for(let s=0;s<e.length;s++){const p=e[s];i.addNumber(new M(ye+p,S[2*s])),i.addNumber(new M(we+p,S[2*s+1]))}for(let s=0;s<t.length;s++)i.addNumber(new M(Xe+s,S[2*s+2*e.length])),i.addNumber(new M(Ye+s,S[2*s+1+2*e.length]));const A=[...new Array(d).fill(1),...new Array(o).fill(3)];return i.setTarget(A),_.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                                <i>${s}<sup>T</sup></i> - ${(()=>{let w="".padEnd(r,"0");return w.substring(0,p)+"1"+w.substring(p+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let w="".padEnd(r,"0");return w.substring(0,p)+"1"+w.substring(p+1)})()}
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
                        ${e.map((s,p)=>{const w=i.numbers[2*p],k=i.numbers[2*p+1];return`
                                <li> 
                                    <i>${s}<sup>T</sup></i> - ${w.value.join("")}
                                </li>
                                <li> 
                                    <i>${s}<sup>F</sup></i> - ${k.value.join("")}
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
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:i,steps:_}}}var Tt=f('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Ft=(u,e)=>e(),Et=f("<div><!></div> <!> <div><!></div>",1),Rt=f("<span>There are no steps to step through.</span>"),Pt=f('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),kt=f('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Zt(u,e){Ae(e,!0);const t=()=>He(r,"$redStore",i),[i,d]=We();let o=Me(Ze.LS_3SAT_SSP,new Je),r=o.value,S=ge(!1),_=ge(!1),A=ge(""),s=null;function p(a){s&&(s.terminate(),s=null,Y(_,!1),Y(A,"Solving cancelled — formula changed.")),r.update(l=>(l.reset(),l.setInInstance(a),o.save(),l))}function w(){if(t().inInstance){const a=new xt(t().inInstance),{outInstance:l,steps:C}=a.reduce();r.update(I=>(I.steps=C,I.outInstance=l,I)),o.save()}}async function k(){let{inCert:a,outInstance:l,outCert:C}=t();if(!(!l||C)){Y(_,!0),Y(A,"Solving SSP..."),s&&(s.terminate(),s=null);try{const I=new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMi8xMC8yMDI1CgppbXBvcnQgeyBVbnNvbHZhYmxlIH0gZnJvbSAiJGxpYi9jb3JlL1Vuc29sdmFibGUiOwppbXBvcnQgeyBTU1AgfSBmcm9tICIkbGliL2luc3RhbmNlL1NTUCI7CmltcG9ydCB7IFNvbHZlclNTUCB9IGZyb20gIiRsaWIvc29sdmUvU29sdmVyU1NQIjsKCnNlbGYub25tZXNzYWdlID0gYXN5bmMgKGUpID0+IHsKICAgIGNvbnN0IHNzcCA9IFNTUC5mcm9tU2VyaWFsaXplZFN0cmluZyhlLmRhdGEpOwoKICAgIGlmICh0eXBlb2Ygc3NwID09ICdzdHJpbmcnKSB7CiAgICAgICAgcG9zdE1lc3NhZ2UobmV3IEVycm9yKCJTU1AgY291bGRuJ3QgYmUgcGFyc2VkIGZyb20gc3RyaW5nLiIpKTsKICAgICAgICByZXR1cm47CiAgICB9CgogICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlclNTUChzc3ApOwoKICAgIHRyeSB7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7CiAgICAgICAgcG9zdE1lc3NhZ2UocmVzdWx0IHx8IFVuc29sdmFibGUpOwogICAgfSBmaW5hbGx5IHsKICAgICAgICBwb3N0TWVzc2FnZShVbnNvbHZhYmxlKTsKICAgIH0KfTs=",import.meta.url),N=new Worker(I,{type:"module"});s=N;const O=new Promise((E,y)=>{N.onmessage=F=>{N===s&&(N.terminate(),s=null,E(F.data))},N.onerror=F=>{N===s&&(N.terminate(),s=null,y(F))}});if(N.postMessage(l.toSerializedString()),C=await O,!s&&!v(_))return;C==be?r.update(E=>(E.inCert=be,E.outCert=be,E)):(C.numbers.forEach(y=>{const F=l.numbers.find(x=>y.id==x.id);F&&(F.used=!0)}),a=new At().decode(l,C),r.update(y=>(y.inCert=a,y.outCert=C,y.outInstance=l,y))),o.save()}catch(I){console.error("Error during solving:",I),Y(A,"An error occurred while solving.")}finally{Y(_,!1),Y(A,""),s=null}}}Be(()=>{r.update(a=>(a.resetStepIndex(),a))}),je(()=>{console.debug("onDestroy"),s&&(s.terminate(),s=null)});var K=kt();Ve(a=>{var l=Tt();ze.title="3SAT to SSP",g(a,l)});var J=m(c(K),2);et(J,{get cnf(){return t().inInstance},onChange:a=>p(a),onWrongFormat:a=>alert("From editor: "+a)});var $=m(J,2),V=c($);V.__click=w;var W=m(V,2);W.__click=[Ft,k];var oe=c(W);{var ve=a=>{var l=Ie("Solving...");g(a,l)},he=a=>{var l=Ie("Solve");g(a,l)};P(oe,a=>{v(_)?a(ve):a(he,!1)})}n(W);var de=m(W,2);Re(de),pe(2),n($);var me=m($,2);{var Z=a=>{Qe(a,{children:(l,C)=>{pe();var I=Ie();R(()=>j(I,v(A))),g(l,I)}})};P(me,a=>{v(_)&&a(Z)})}var ee=m(me,2);{var Q=a=>{const l=Se(()=>t().steps),C=Se(()=>t().stepIndex);var I=Ce(),N=H(I);{var O=y=>{var F=Et(),x=H(F),U=c(x);{var h=T=>{Te(T,{get cnf(){return v(l)[v(C)].inSnapshot}})};P(U,T=>{v(C)<v(l).length&&v(l)[v(C)].inSnapshot&&!v(l)[v(C)].inSnapshot.empty()&&T(h)})}n(x);var b=m(x,2);qe(b,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{r.update(T=>(T.prevStep(),T)),o.save()},onNextClick:()=>{r.update(T=>(T.nextStep(),T)),o.save()}});var L=m(b,2),te=c(L);{var D=T=>{Ee(T,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};P(te,T=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&T(D)})}n(L),g(y,F)},E=y=>{var F=Rt();g(y,F)};P(N,y=>{v(l).length?y(O):y(E,!1)})}g(a,I)},q=a=>{var l=Pt(),C=c(l),I=c(C);{var N=b=>{Te(b,{get cnf(){return t().inInstance}})};P(I,b=>{t().inInstance&&!t().inInstance.empty()&&b(N)})}var O=m(I,2);{var E=b=>{tt(b,{get cert(){return t().inCert}})};P(O,b=>{t().inCert&&b(E)})}n(C);var y=m(C,2),F=c(y);{var x=b=>{{let L=Se(()=>t().inInstance??void 0);Ee(b,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return v(L)}})}};P(F,b=>{t().outInstance&&!t().outInstance.empty()&&b(x)})}var U=m(F,2);{var h=b=>{lt(b,{get cert(){return t().outCert}})};P(U,b=>{t().outCert&&b(h)})}n(y),n(l),g(a,l)};P(ee,a=>{v(S)?a(Q):a(q,!1)})}n(K),R((a,l)=>{V.disabled=a,W.disabled=l},[()=>!t().hasInInstance()||t().hasOutInstance()||v(_),()=>!t().hasInstances()||t().hasOutCertificate()||v(_)]),Pe(de,()=>v(S),a=>Y(S,a)),g(u,K),Ne(),d()}Le(["click"]);export{Zt as component,Wt as universal};
