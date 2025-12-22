import"../chunks/DsnmJJEf.js";import"../chunks/7c8ahxPy.js";import{v as Ee,p as Ce,f as g,s as d,d as u,r as l,b as p,c as Pe,a as V,t as T,m as h,ao as Se,L as We,M as ze,K as pe,J as Ue,$ as De,u as Re,an as fe,ac as _e}from"../chunks/BHy43uIv.js";import{s as k,d as Me}from"../chunks/Bo-e_C1i.js";import{i as N,p as Ve,s as de,a as Xe,b as qe,c as $e}from"../chunks/lPMcd3W4.js";import{r as je,l as He}from"../chunks/hAUU4et8.js";import{t as Je,U as we,e as W,i as z,b as Le,s as Be,V as Ie,v as ye,P as Ke,S as Ae,R as Ge,w as Qe,x as Ye,u as Ze,l as et,m as tt,n as st,W as rt,o as at,p as nt}from"../chunks/4Tn6J3At.js";import{i as it}from"../chunks/Bic1S2_H.js";import{C as ot,E as lt,R as Te,a as ct}from"../chunks/mHvT6OSO.js";import{h as Ne}from"../chunks/_9mKL30m.js";function ie(i,e,t,r,o,v){var n=i.__className;if(Ee||n!==t||n===void 0){var _=Je(t,r,v);(!Ee||_!==i.getAttribute("class"))&&(_==null?i.removeAttribute("class"):i.className=_),i.__className=t}else if(v&&o!==v)for(var I in v){var C=!!v[I];(o==null||C!==!!o[I])&&i.classList.toggle(I,C)}return v}const ut=!0,Zt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ut},Symbol.toStringTag,{value:"Module"}));var vt=g("<p>SSP doesn't have a solution.</p>"),dt=g("<li> </li>"),pt=g("<p>Subset of numbers summing to to target.</p> <ul></ul>",1),mt=g("<main><h2>CertRenderer SSP</h2> <!></main>");function bt(i,e){Ce(e,!0);var t=mt(),r=d(u(t),2);{var o=n=>{var _=vt();p(n,_)},v=n=>{var _=pt(),I=d(V(_),2);W(I,21,()=>e.cert.numbers,z,(C,s)=>{var m=dt(),S=u(m,!0);l(m),T(F=>k(S,F),[()=>h(s).value.join("")]),p(C,m)}),l(I),p(n,_)};N(r,n=>{e.cert==we?n(o):n(v,!1)})}l(t),p(i,t),Pe()}var ht=g("<li> </li>"),gt=g("<p> </p> <p>Numbers:</p> <ul></ul>",1),ft=g(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),_t=g("<li> </li>"),St=g("<p>Numbers:</p> <ul></ul> <p> </p>",1),wt=g("<th> </th>"),It=g('<th class="clause-col svelte-1c4cita"><!></th>'),yt=g('<td class="svelte-1c4cita"> </td>'),xt=g('<td class="svelte-1c4cita"> </td>'),Ct=g('<tr><td class="svelte-1c4cita"> </td><!></tr> <tr><td class="svelte-1c4cita"> </td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),Pt=g('<td class="svelte-1c4cita"> </td>'),At=g('<td class="svelte-1c4cita"> </td>'),Et=g('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),Rt=g('<td class="svelte-1c4cita"> </td>'),Tt=g('<p>Each row represents one number.</p> <table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table>',1),Nt=g('<div><label for="viewAsNumbersCheckbox">View as numbers</label> <input type="checkbox" name="viewAsNumbersCheckbox"/></div> <!>',1),Ft=g("<main><h2>SSP Renderer</h2> <!></main>");function Fe(i,e){Ce(e,!0);let t=Ve(e,"style",3,"none"),r=We(!1);var o=Ft(),v=d(u(o),2);{var n=I=>{var C=gt(),s=V(C),m=u(s);l(s);var S=d(s,4);W(S,21,()=>e.ssp.numbers,z,(F,Q)=>{var Y=ht(),Z=u(Y,!0);l(Y),T(U=>k(Z,U),[()=>h(Q).value.join("")]),p(F,Y)}),l(S),T(F=>k(m,`Target: ${F??""}`),[()=>e.ssp.target.join("")]),p(I,C)},_=I=>{var C=Se(),s=V(C);{var m=S=>{var F=Se(),Q=V(F);{var Y=U=>{var $=ft();p(U,$)},Z=U=>{var $=Nt(),ee=V($),H=d(u(ee),2);je(H),l(ee);var me=d(ee,2);{var be=D=>{var J=St(),B=d(V(J),2);W(B,21,()=>e.ssp.numbers,z,(G,a)=>{var c=_t();let P;var y=u(c,!0);l(c),T((E,M)=>{P=ie(c,1,Be(h(a).classes??""),"svelte-1c4cita",P,E),k(y,M)},[()=>({"ssp-used":h(a).used}),()=>h(a).value.join("")]),p(G,c)}),l(B);var K=d(B,2),ne=u(K);l(K),T(G=>k(ne,`Target: ${G??""}`),[()=>e.ssp.target.join("")]),p(D,J)},he=D=>{var J=Tt(),B=d(V(J),2),K=u(B),ne=u(K),G=d(u(ne));W(G,17,()=>e.cnfInstance.variables,z,(x,A)=>{var b=wt();ie(b,1,"var-col svelte-1c4cita");var R=u(b,!0);l(b),T(()=>k(R,h(A))),p(x,b)});var a=d(G);W(a,17,()=>e.cnfInstance.clauses,z,(x,A)=>{var b=It(),R=u(b);Ne(R,()=>h(A).asHtmlString()),l(b),p(x,b)}),l(ne),l(K);var c=d(K),P=u(c);W(P,17,()=>e.cnfInstance.variables,z,(x,A,b)=>{var R=Ct(),j=V(R);let f;var O=u(j),le=u(O);l(O);var ce=d(O);W(ce,17,()=>e.ssp.numbers[2*b].value,z,(L,q)=>{var ae=yt(),ge=u(ae,!0);l(ae),T(()=>k(ge,h(q))),p(L,ae)}),l(j);var w=d(j,2);let ue;var ve=u(w),se=u(ve);l(ve);var re=d(ve);W(re,17,()=>e.ssp.numbers[2*b+1].value,z,(L,q)=>{var ae=xt(),ge=u(ae,!0);l(ae),T(()=>k(ge,h(q))),p(L,ae)}),l(w),pe(2),T((L,q)=>{f=ie(j,1,"var-row svelte-1c4cita",null,f,L),k(le,`${h(A)??""} ≔ T`),ue=ie(w,1,"var-row var-row-false svelte-1c4cita",null,ue,q),k(se,`${h(A)??""} ≔ F`)},[()=>({"ssp-used":e.ssp.numbers[2*b].used}),()=>({"ssp-used":e.ssp.numbers[2*b+1].used})]),p(x,R)});var y=d(P);W(y,17,()=>e.cnfInstance.clauses,z,(x,A,b)=>{var R=Et(),j=V(R);let f;var O=u(j),le=u(O);Ne(le,()=>h(A).asHtmlString()),l(O);var ce=d(O);W(ce,17,()=>e.ssp.numbers[2*b+2*e.cnfInstance.variables.length].value,z,(se,re)=>{var L=Pt(),q=u(L,!0);l(L),T(()=>k(q,h(re))),p(se,L)}),l(j);var w=d(j,2);let ue;var ve=d(u(w));W(ve,17,()=>e.ssp.numbers[2*b+1+2*e.cnfInstance.variables.length].value,z,(se,re)=>{var L=At(),q=u(L,!0);l(L),T(()=>k(q,h(re))),p(se,L)}),l(w),pe(2),T((se,re)=>{f=ie(j,1,"clause-row svelte-1c4cita",null,f,se),ue=ie(w,1,"clause-row clause-row-fill svelte-1c4cita",null,ue,re)},[()=>({"ssp-used":e.ssp.numbers[2*b+2*e.cnfInstance.variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*b+1+2*e.cnfInstance.variables.length].used})]),p(x,R)}),l(c);var E=d(c),M=u(E),te=d(u(M));W(te,17,()=>e.ssp.target,z,(x,A)=>{var b=Rt(),R=u(b,!0);l(b),T(()=>k(R,h(A))),p(x,b)}),l(M),l(E),l(B),p(D,J)};N(me,D=>{h(r)?D(be):D(he,!1)})}Le(H,()=>h(r),D=>ze(r,D)),p(U,$)};N(Q,U=>{e.cnfInstance?U(Z,!1):U(Y)})}p(S,F)};N(s,S=>{t()=="3sat"&&S(m)},!0)}p(I,C)};N(v,I=>{t()=="none"?I(n):I(_,!1)})}l(o),p(i,o),Pe()}class ke{decode(e,t){console.debug("DecoderSSPto3SAT::decode");const r=new Map;console.debug("decode from this SSP certificate",t);for(const o of t.numbers){const v=o.id;if(v.startsWith(Ie)){const n=v.substring(Ie.length);r.has(n)||(console.debug(`setting variable ${v} to TRUE`),r.set(n,!0))}else if(v.startsWith(ye)){const n=v.substring(ye.length);r.has(n)||(console.debug(`setting variable ${v} to FALSE`),r.set(n,!1))}}return new ot(r)}}var kt=Object.getOwnPropertyDescriptor,Oe=(i,e,t,r)=>{for(var o=r>1?void 0:r?kt(e,t):e,v=i.length-1,n;v>=0;v--)(n=i[v])&&(o=n(o)||o);return o};let X=class{id;value;used;classes;constructor(i,e,t=!1,r){this.id=i,this.value=e,this.used=t,this.classes=r}asString(){return this.value.join("")}};X=Oe([Ae.SerializableClass("SSPNumber")],X);let oe=class extends Ke{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(i){this.numbers.push(i)}setTarget(i){this.target=i}isEmpty(){return this.numbers.length==0}static fromString(i,e){const t=new oe;if(!i)return"SSP cannot be constructed from an empty string";const r=i.split(`
`).map(o=>o.trim()).filter(o=>o.length);try{const o=Array(e).map(v=>Number.parseInt(v));t.setTarget(o)}catch(o){return console.error(o),`Couldn't parse the target number: ${e}`}return r.forEach((o,v)=>{try{const n=Array.from(o).map(_=>Number.parseInt(_));t.addNumber(new X(`${v}`,n))}catch(n){return console.error(n),`Couldn't parse the number on the line ${v}: ${o}.`}}),t}toSerializedString(){const i={numbers:this.numbers.map(e=>({id:e.id,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(i)}static fromSerializedString(i){const e=new oe,t=JSON.parse(i);if(e.setTarget(t.target),Array.isArray(t.numbers))for(const r of t.numbers)e.addNumber(new X(r.id,r.value,r.used,r.classes));return e}copy(){const i=new oe;return i.setTarget([...this.target]),this.numbers.forEach(e=>{const t=new X(e.id,[...e.value],e.used,e.classes);i.addNumber(t)}),i}};oe=Oe([Ae.SerializableClass("SSP")],oe);class jt extends Ge{constructor(e){super(e)}doReduce(){const{variables:e,clauses:t}=this.inInstance,r=new oe,o=e.length,v=t.length,n=o+v,_=Array.from({length:2*n},()=>new Array(n).fill(0));for(let s=0;s<n;s++)_[2*s][s]=1,_[2*s+1][s]=1;t.forEach((s,m)=>s.literals.forEach(S=>{const F=e.findIndex(Q=>Q==S.varName);_[2*F+(S.negated?1:0)][o+m]=1}));const I=[];for(let s=0;s<e.length;s++){const m=e[s];r.addNumber(new X(Ie+m,_[2*s])),r.addNumber(new X(ye+m,_[2*s+1]))}for(let s=0;s<t.length;s++)r.addNumber(new X(Qe+s,_[2*s+2*e.length])),r.addNumber(new X(Ye+s,_[2*s+1+2*e.length]));const C=[...new Array(o).fill(1),...new Array(v).fill(3)];return r.setTarget(C),I.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                    In this case, <i>k = ${e.length} + ${t.length} = ${n}</i>
                </p>
                <p>
                    At the beginning, set all of the digits to 0.
                    <ul>
                        ${e.map(s=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${"".padEnd(n,"0")}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${"".padEnd(n,"0")}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For numbers <i>n<sub>v<sub>i</sub></sub></i> the <i>i</i>-th digits are set to 1.
                    <ul>
                        ${e.map((s,m)=>`
                            <li>
                                <i>${s}<sup>T</sup></i> - ${(()=>{let S="".padEnd(n,"0");return S.substring(0,m)+"1"+S.substring(m+1)})()}
                            </li>
                            <li>
                                <i>${s}<sup>F</sup></i> - ${(()=>{let S="".padEnd(n,"0");return S.substring(0,m)+"1"+S.substring(m+1)})()}
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
                        ${t.map((s,m)=>`
                                <li>
                                    c${m} &coloneq; ${s.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((s,m)=>{const S=r.numbers[2*m],F=r.numbers[2*m+1];return`
                                <li> 
                                    <i>${s}<sup>T</sup></i> - ${S.value.join("")}
                                </li>
                                <li> 
                                    <i>${s}<sup>F</sup></i> - ${F.value.join("")}
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
                    both of the same value: number of ${n} digits with i-th digit set to 1.

                    <ul>
                        ${(()=>{let s="";for(let m=2*e.length;m<2*e.length+2*t.length;m++)s+=`<li>${r.numbers[m].value.join("")}</li>`;return console.debug("accumString",s),s})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${r.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),mapping:{}}),{outInstance:r,steps:I}}}var Lt=Object.getOwnPropertyDescriptor,Ot=(i,e,t,r)=>{for(var o=r>1?void 0:r?Lt(e,t):e,v=i.length-1,n;v>=0;v--)(n=i[v])&&(o=n(o)||o);return o};let xe=class{numbers;constructor(i){this.numbers=i}};xe=Ot([Ae.SerializableClass()],xe);function Wt(i){return new Worker(""+new URL("../workers/WorkerSSPSolver-RL0tFp_X.js",import.meta.url).href,{name:i?.name})}var zt=g('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Ut=g("<div><!></div> <!> <div><!></div>",1),Dt=g("<span>There are no steps to step through.</span>"),Mt=g('<div class="panes svelte-1hqb7wt"><div><!> <!></div> <div><!> <!></div></div>'),Vt=g('<main><h1>3SAT to SSP reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function es(i,e){Ce(e,!1);const t=()=>de(C,"$redStore",n),r=()=>de(m,"$isSolving",n),o=()=>de(s,"$showStepper",n),v=()=>de(S,"$solveMessage",n),[n,_]=Xe();let I=Ze(He.LS_3SAT_SSP,new et),{redStore:C,showStepper:s,isSolving:m,solveMessage:S,editorChanged:F,reduce:Q,solve:Y}=tt({storage:I,workerFactory:()=>new Wt,reducerFactory:a=>new jt(a),decoderFactory:()=>new ke,createWorkerRequest:a=>({ssp:a.toSerializedString()}),resolveWorkerResponse:a=>{const c=a;st(c.type==rt.RESULT);const P=c.numbers.map(y=>new X(y.id,y.value,y.used,y.classes));return new xe(P)},onSolveFinished:(a,c)=>{if(c==we){$e(C,Re(t).inCert=we,Re(t));return}c.numbers.forEach(E=>{const M=a.numbers.find(te=>E.id==te.id);M&&(M.used=!0)});const y=new ke().decode(a,c);console.debug("Done decoding..."),C.update(E=>(E.inCert=y,E.outCert=c,E.outInstance=a,E))}});it();var Z=Vt();Ue(a=>{var c=zt();De.title="3SAT to SSP",p(a,c)});var U=d(u(Z),2);lt(U,{get cnf(){return t().inInstance},onChange:a=>F(a),onWrongFormat:a=>alert("From editor: "+a)});var $=d(U,2),ee=u($);ee.__click=Q;var H=d(ee,2);H.__click=Y;var me=u(H);{var be=a=>{var c=fe("Solving...");p(a,c)},he=a=>{var c=fe("Solve");p(a,c)};N(me,a=>{r()?a(be):a(he,!1)})}l(H);var D=d(H,2);je(D),pe(2),l($);var J=d($,2);{var B=a=>{at(a,{children:(c,P)=>{pe();var y=fe();T(()=>k(y,v())),p(c,y)}})};N(J,a=>{r()&&a(B)})}var K=d(J,2);{var ne=a=>{const c=_e(()=>t().steps),P=_e(()=>t().stepIndex);var y=Se(),E=V(y);{var M=x=>{var A=Ut(),b=V(A),R=u(b);{var j=w=>{Te(w,{get cnf(){return h(c)[h(P)].inSnapshot}})};N(R,w=>{h(P)<h(c).length&&h(c)[h(P)].inSnapshot&&!h(c)[h(P)].inSnapshot.isEmpty()&&w(j)})}l(b);var f=d(b,2);nt(f,{get steps(){return t().steps},get stepIndex(){return t().stepIndex},onPrevClick:()=>{C.update(w=>(w.prevStep(),w)),I.save()},onNextClick:()=>{C.update(w=>(w.nextStep(),w)),I.save()}});var O=d(f,2),le=u(O);{var ce=w=>{Fe(w,{get ssp(){return t().steps[t().stepIndex].outSnapshot},style:"none"})};N(le,w=>{t().stepIndex<t().steps.length&&t().steps[t().stepIndex].outSnapshot&&w(ce)})}l(O),p(x,A)},te=x=>{var A=Dt();p(x,A)};N(E,x=>{h(c).length?x(M):x(te,!1)})}p(a,y)},G=a=>{var c=Mt(),P=u(c),y=u(P);{var E=f=>{Te(f,{get cnf(){return t().inInstance}})};N(y,f=>{t().inInstance&&!t().inInstance.isEmpty()&&f(E)})}var M=d(y,2);{var te=f=>{ct(f,{get cert(){return t().inCert}})};N(M,f=>{t().inCert&&f(te)})}l(P);var x=d(P,2),A=u(x);{var b=f=>{{let O=_e(()=>t().inInstance??void 0);Fe(f,{get ssp(){return t().outInstance},style:"3sat",get cnfInstance(){return h(O)}})}};N(A,f=>{t().outInstance&&!t().outInstance.isEmpty()&&f(b)})}var R=d(A,2);{var j=f=>{bt(f,{get cert(){return t().outCert}})};N(R,f=>{t().outCert&&f(j)})}l(x),l(c),p(a,c)};N(K,a=>{o()?a(ne):a(G,!1)})}l(Z),T((a,c)=>{ee.disabled=a,H.disabled=c},[()=>!t().hasInInstance()||t().hasOutInstance()||r(),()=>!t().hasInstances()||t().hasOutCertificate()||r()]),Le(D,o,a=>qe(s,a)),p(i,Z),Pe(),_()}Me(["click"]);export{es as component,Zt as universal};
