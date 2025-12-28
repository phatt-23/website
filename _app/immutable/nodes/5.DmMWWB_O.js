import"../chunks/DsnmJJEf.js";import{p as ie,f as b,s as k,d as h,r as c,b as p,c as oe,a as U,t as Z,k as I,S as re,T as Y,M as ge,O as $e,Q as be,a9 as K,g as _e,K as Se,$ as we,h as le}from"../chunks/DWngNMqy.js";import{i as W,p as ue,a as ce,s as ye,c as Te}from"../chunks/Cy94KniK.js";import{C as Ie,E as ke,a as Ce,R as Ne}from"../chunks/WbgQ2lHM.js";import{s as Q}from"../chunks/CHE0eMEN.js";import{U as se,e as q,v as fe,i as M,K as G,w as ae,x as je,c as Fe,V as B,y as X,P as Ae,S as me,R as Pe,z as de,A as he,u as Ee,m as xe,n as Re,o as Ve,p as Le,W as Oe,q as ze,O as We,I as Ue}from"../chunks/C4ZxoCtr.js";import{r as Ke,l as qe}from"../chunks/uXYcvkjH.js";const Me=!0,Pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));var De=b("<p>SSP doesn't have a solution.</p>"),Ze=b('<tr><td class="svelte-1kd9p1w"> </td></tr>'),Be=b('<p> </p> <div class="center svelte-1kd9p1w"><table class="svelte-1kd9p1w"><tbody></tbody></table></div>',1),Xe=b('<main><h2 class="dev">CertRenderer SSP</h2> <!></main>');function Je(l,e){ie(e,!0);var r=Xe(),a=k(h(r),2);{var t=s=>{var v=De();p(s,v)},i=s=>{var v=Be(),f=U(v),x=h(f);c(f);var n=k(f,2),g=h(n),C=h(g);q(C,21,()=>e.cert.numbers,M,(m,S)=>{var N=Ze(),P=h(N),R=h(P,!0);c(P),c(N),Z(V=>Q(R,V),[()=>fe(I(S).value.join(""))]),p(m,N)}),c(C),c(g),c(n),Z(()=>Q(x,`Subset of numbers summing to the target of ${e.target??""}:`)),p(s,v)};W(a,s=>{e.cert==se?s(t):s(i,!1)})}c(r),p(l,r),oe()}var He=b('<div class="center svelte-1c4cita"><p> </p></div>'),Qe=b('<tr><td class="svelte-1c4cita"><!></td><td><span> </span></td></tr>'),Ge=b('<div class="table-wrapper svelte-1c4cita"><table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita">Name</th><th class="svelte-1c4cita">Value</th></tr></thead><tbody></tbody></table></div>'),Ye=b("<!> <!>",1),et=b("<th><!></th>"),tt=b('<th class="clause-col svelte-1c4cita"><!></th>'),at=b('<td class="svelte-1c4cita"> </td>'),rt=b('<tr><td class="svelte-1c4cita"><!></td><!></tr>'),st=b('<td class="svelte-1c4cita"> </td>'),nt=b('<div></div> <div class="sat-table-wrapper svelte-1c4cita"><table class="sat-ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><tr><td class="svelte-1c4cita">Target:</td><!></tr></tbody></table></div>',1),it=b(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),ot=b('<label class="checkbox-wrapper"><input type="checkbox"/> <span>Use 3-SAT format</span></label> <!>',1),lt=b('<main><h2 class="dev">SSP Renderer</h2> <!></main>');function pe(l,e){ie(e,!0);const r=m=>{var S=Ye(),N=U(S);{var P=A=>{var E=He(),L=h(E),u=h(L);c(L),c(E),Z(d=>Q(u,`Target: ${d??""}`),[()=>e.ssp.target.join("")]),p(A,E)};W(N,A=>{e.ssp.target&&A(P)})}var R=k(N,2);{var V=A=>{var E=Ge(),L=h(E),u=k(h(L));q(u,21,()=>e.ssp.numbers,M,(d,w,T)=>{var j=Qe(),y=h(j),$=h(y);{let D=Y(()=>I(w).label??"NULL");G($,{get text(){return I(D)}})}c(y);var o=k(y);let _;var F=h(o),H=h(F,!0);c(F),c(o),c(j),Z((D,z)=>{_=ae(o,1,je(I(w).classes??""),"svelte-1c4cita",_,D),Q(H,z)},[()=>({"ssp-used":e.ssp.numbers[T].used}),()=>s(I(w).value)]),p(d,j)}),c(u),c(L),c(E),p(A,E)};W(R,A=>{e.ssp.numbers.length&&A(V)})}p(m,S)},a=(m,S=K)=>{var N=nt(),P=U(N);q(P,21,()=>S().clauses,M,(y,$,o)=>{{let _=Y(()=>`\\kappa_{${o}} = `+I($).toTexString());G(y,{get text(){return I(_)}})}}),c(P);var R=k(P,2),V=h(R),A=h(V),E=h(A),L=k(h(E));q(L,17,()=>S().variables,M,(y,$)=>{var o=et();ae(o,1,"var-col svelte-1c4cita");var _=h(o);G(_,{displayMode:!0,get text(){return I($)}}),c(o),p(y,o)});var u=k(L);q(u,17,()=>S().clauses,M,(y,$,o)=>{var _=tt(),F=h(_);G(F,{text:`\\kappa_{${o}}`}),c(_),p(y,_)}),c(E),c(A);var d=k(A),w=h(d);q(w,17,()=>e.ssp.numbers,M,(y,$)=>{var o=rt();let _;var F=h(o),H=h(F);{let z=Y(()=>I($).label??"NULL");G(H,{get text(){return I(z)}})}c(F);var D=k(F);q(D,17,()=>v(I($).value),M,(z,ee)=>{var O=at(),te=h(O,!0);c(O),Z(()=>Q(te,I(ee))),p(z,O)}),c(o),Z(z=>_=ae(o,1,"var-row svelte-1c4cita",null,_,z),[()=>({"ssp-used":I($).used})]),p(y,o)});var T=k(w),j=k(h(T));q(j,17,()=>e.ssp.target,M,(y,$)=>{var o=st(),_=h(o,!0);c(o),Z(()=>Q(_,I($))),p(y,o)}),c(T),c(d),c(V),c(R),p(m,N)};let t=ue(e,"style",3,"none"),i=ue(e,"trimLeadingZeros",3,!1);function s(m){let S=m.join("");return i()&&(S=fe(S)),S}function v(m){if(i()){const S=m.findIndex(N=>N!==0);return S==0?m:[...m.slice(0,S).map(N=>""),...m.slice(S)]}return m}let f=$e(!1);var x=lt(),n=k(h(x),2);{var g=m=>{r(m)},C=m=>{var S=re(),N=U(S);{var P=R=>{var V=re(),A=U(V);{var E=u=>{var d=it();p(u,d)},L=u=>{var d=ot(),w=U(d),T=h(w);Ke(T),ge(2),c(w);var j=k(w,2);{var y=o=>{r(o)},$=o=>{a(o,()=>e.cnfInstance)};W(j,o=>{I(f)?o($,!1):o(y)})}Fe(T,()=>I(f),o=>be(f,o)),p(u,d)};W(A,u=>{e.cnfInstance?u(L,!1):u(E)})}p(R,V)};W(N,R=>{t()=="3sat"&&R(P)},!0)}p(m,S)};W(n,m=>{t()=="none"?m(g):m(C,!1)})}c(x),p(l,x),oe()}class ve{decode(e,r){const a=new Map;for(const t of r.numbers){const i=t.id;if(i.startsWith(B)){const s=i.substring(B.length);a.has(s)||a.set(s,!0)}else if(i.startsWith(X)){const s=i.substring(X.length);a.has(s)||a.set(s,!1)}}return new Ie(a)}}var ut=Object.getOwnPropertyDescriptor,ct=(l,e,r,a)=>{for(var t=a>1?void 0:a?ut(e,r):e,i=l.length-1,s;i>=0;i--)(s=l[i])&&(t=s(t)||t);return t};let J=class extends Ae{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(l){this.numbers.push(l)}setNumberValue(l,e){const r=this.numbers.find(a=>a.id===l);r&&(r.value=e)}getNumber(l){return this.numbers.find(e=>e.id==l)}setTarget(l){this.target=l}isEmpty(){return this.numbers.length==0}static fromString(l,e){const r=new J;if(!l)return"SSP cannot be constructed from an empty string";const a=l.split(`
`).map(t=>t.trim()).filter(t=>t.length);try{const t=Array(e).map(i=>Number.parseInt(i));r.setTarget(t)}catch{return`Couldn't parse the target number: ${e}`}return a.forEach((t,i)=>{try{const s=Array.from(t).map(f=>Number.parseInt(f)),v={id:`${i}`,value:s,used:!1};r.addNumber(v)}catch{return`Couldn't parse the number on the line ${i}: ${t}.`}}),r}toSerializedString(){const l={numbers:this.numbers.map(e=>({id:e.id,label:e.label??null,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(l)}static fromSerializedString(l){const e=new J,r=JSON.parse(l);if(e.setTarget(r.target),Array.isArray(r.numbers))for(const a of r.numbers){const t={id:a.id,label:a.label??void 0,value:a.value,used:a.used,classes:a.classes??void 0};e.addNumber(t)}return e}copy(){const l=new J;return l.setTarget([...this.target]),this.numbers.forEach(e=>{l.addNumber({id:e.id,label:e.label,value:[...e.value],used:e.used,classes:e.classes})}),l}};J=ct([me.SerializableClass("SSP")],J);class dt extends Pe{lookup=new Map;V;C;K;targetArray;targetSum;constructor(e){super(e),this.V=this.inInstance.variables.length,this.C=this.inInstance.clauses.length,this.K=this.V+this.C,this.targetArray=[...new Array(this.V).fill(1),...new Array(this.C).fill(3)],this.targetSum=Number.parseInt(this.targetArray.join(""))}doReduce(){const e=[],r=new J;let a=this.createTargetSum(r),t=this.createVarNumbers(a.ssp),i=this.updateVarNumbers(t.ssp),s=this.createBufferNumbers(i.ssp);return e.push(a.step,t.step,i.step,s.step),{outInstance:r,steps:e}}createTargetSum(e){e.setTarget(this.targetArray);const r={id:"create-target-sum",title:"Create target sum",description:`
                <p>
                    We start out by defining the target sum $\\tau$. Then we define the numbers.
                </p>
                <p>
                    All these numbers including the target sum $\\tau$ are $k = v + c$ digits long, 
                    where $v$ is the number of variables 
                    and $c$ is the number of clauses in the 3-CNF formula.
                    
                    In this case, $k = ${this.V} + ${this.C} = ${this.K}$, 
                    because $v = ${this.V}$ and $c = ${this.C}$.
                </p>
                <p>
                    The target sum $\\tau$ is defined as:
                    $$
                        \\tau = \\sum_{i = 0}^{${this.V}} (1 \\cdot 10^{i + ${this.C}}) 
                              + \\sum_{i = 0}^{${this.C}} (3 \\cdot 10^{i})
                    $$ 

                    In this case, $\\tau = ${this.targetSum}$.
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:r}}createVarNumbers(e){const r=new Array(this.K).fill(0);this.inInstance.variables.forEach((t,i)=>{const s=[...r];s[i]=1;const v=B+t,f=X+t;this.lookup.set(v,[...s]),this.lookup.set(f,[...s]),e.addNumber({id:v,label:`${t}_T`,value:[...s],used:!1}),e.addNumber({id:f,label:`${t}_F`,value:[...s],used:!1})});const a={id:"create-var-numbers",title:"Create variable numbers",description:`
                <p>
                    Create two, at most $k$ digit long, numbers $\\nu_T$ and $\\nu_F$ for every variable $\\nu$ in the boolean formula.
                    These numbers enforce boolean assignment for every variable. 
                    The final subset of numbers $S$ that sum up to $\\tau$ must include either $\\nu_T$, or $\\nu_F$.
                    Choosing $\\nu_T$ means assigning $\\nu \\coloneqq T$, while choosing $\\nu_F$ means $\\nu \\coloneqq F$.
                </p>
                <p>
                    In this case we have $v = ${this.V}$ variables:

                    <ul>
                        ${this.inInstance.variables.map(t=>`<li>$ ${t} $</li>`).join("")}
                    </ul>

                    There is $v = ${this.V}$ of them, therefore we will create $2v = ${2*this.V}$ numbers 
                    and for now fill them with $k=${this.K}$ zeros.

                    $$
                    \\begin{aligned}
                        ${this.inInstance.variables.map(t=>`
                            ${t}_T &= ${r.join("")} \\\\
                            ${t}_F &= ${r.join("")} \\\\
                        `).join("")}
                    \\end{aligned}
                    $$
                </p>
                <p>
                    To enforce that we can choose either $\\nu_{i,T}$, or $\\nu_{i,F}$ of variable $\\nu_i$ for $i \\in [0, v]$, 
                    we replace the $i$-th digit in the numbers $\\nu_{i,T}$ and $\\nu_{i,F}$ with one.

                    $$
                    \\begin{aligned}
                        ${this.inInstance.variables.map(t=>`
                            ${t}_T &= ${this.lookup.get(B+t)?.join("")} \\\\
                            ${t}_F &= ${this.lookup.get(X+t)?.join("")} \\\\
                        `).join("")}
                    \\end{aligned}
                    $$

                    The first $v$ digits in the target sum $ \\tau = ${this.targetSum} $ can be achieved, 
                    iff either $\\nu_T$, or $\\nu_F$ is present in the final subset $S$. 
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:a}}updateVarNumbers(e){this.inInstance.clauses.forEach((a,t)=>{a.literals.forEach(i=>{const s=i.negated?X+i.varName:B+i.varName,v=this.lookup.get(s);v[t+this.V]=1,this.lookup.set(s,v),e.setNumberValue(s,v)})});const r={id:"update-var-numbers",title:"Update variable numbers",description:`
                <p>
                   In the 3-CNF formula, there is $C = ${this.C}$ clauses:
                   <ul>
                       ${this.inInstance.clauses.map(a=>`<li>$ ${a.toTexString()} $</li>`).join("")}
                   </ul> 
                </p>
                <p>
                    To model these clauses being satisfied 
                    by choosing either variable numbers $\\nu_T$, or $\\nu_F$, 
                    we must first update these variable numbers we just created.
                </p>
                <p>
                    For every clause $\\kappa_i$ for $i \\in [0, c]$ we will proceed like this:
                        
                    If $\\nu$ appears in the clause $\\kappa_i$ as a literal, 
                    we replace the $(i + v)$-th digit with one
                        for the number $\\nu_F$ if the literal is negated (appears as $\\lnot \\nu$), 
                        otherwise we relace the digit for the number $\\nu_T$.
                </p>
                <p>
                    $$
                    \\begin{aligned}
                        ${this.inInstance.variables.map(a=>`
                            ${a}_T &= ${this.lookup.get(B+a)?.join("")} \\\\
                            ${a}_F &= ${this.lookup.get(X+a)?.join("")} \\\\
                        `).join("")}
                    \\end{aligned}
                    $$
                </p>
                <p>
                    Now, choosing $\\nu_T$ and $\\nu_F$ will also affect the $j$-th digits of the target sum $\\tau$ for $j \\in [v, k)$.
                    Namely, it will cause these digits to be greater than zero. 
                    This corredsponds to a clause being satisfied. 
                    If the $j$-th digit of $\\tau$, is greater than zero, $digit(\\tau, j) > 0$, 
                    then the clause $\\kappa_{j - v}$ is satisfied. 
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:r}}createBufferNumbers(e){const r=new Array;this.inInstance.clauses.forEach((t,i)=>{const s=new Array(this.K).fill(0);s[i+this.V]=1;const v=de+t.id,f=he+t.id,x={id:v,label:`\\kappa_{${i}, 0}`,value:[...s],used:!1},n={id:f,label:`\\kappa_{${i}, 1}`,value:[...s],used:!1};e.addNumber(x),e.addNumber(n),this.lookup.set(v,[...s]),this.lookup.set(f,[...s]),r.push(x,n)});const a={id:"create-buffer-numbers",title:"Create buffer numbers",description:`
                <p>
                    The $j$-th digits, where $j \\in [v,k)$, of the target sum $\\tau = ${this.targetSum}$, are all $3$.
                    With our current set of numbers, a $j$-th digit can be $3$ 
                    iff we choose $\\nu_T$ and $\\nu_F$ 
                    in such a way that a clause $\\kappa_{j - v}$ has all 3 of it's literals be evaluated to $True$.  
                </p>
                <p>
                    We know, however, that a clause $\\kappa_{j - v}$ is satisfied, 
                    if the $j$-th digit is greater than zero. 
                    They don't need to achieve being $3$.  
                </p>
                <p>
                    Therefore, we add buffer numbers to so that all $j$-th digits greater than zero can achieve being $3$. 
                    On the otherhand, we must prohibit $j$-th digit that's currently zero from being able to become $3$.  
                </p>
                <p>
                    To achieve this, we add two buffer numbers, $\\kappa_{i,0}$ and $\\kappa_{i,1}$, for each clause $\\kappa_i$.
                    
                    $$
                        \\kappa_{i,0} = \\kappa_{i,1} = 10^{i}
                    $$
                </p>
                <p>
                    In this case:
                    
                    $$
                    \\begin{aligned}
                        ${r.map(t=>`${t.label} &= ${t.value.join("")} \\\\`).join("")}
                    \\end{aligned}
                    $$

                </p>

            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:a}}doEverything(){const{variables:e,clauses:r}=this.inInstance,a=new J,t=e.length,i=r.length,s=t+i,v=Array.from({length:2*s},()=>new Array(s).fill(0));for(let n=0;n<s;n++)v[2*n][n]=1,v[2*n+1][n]=1;r.forEach((n,g)=>n.literals.forEach(C=>{const m=e.findIndex(S=>S==C.varName);v[2*m+(C.negated?1:0)][t+g]=1}));const f=[];for(let n=0;n<e.length;n++){const g=e[n];a.addNumber({id:B+g,value:v[2*n],used:!1}),a.addNumber({id:X+g,value:v[2*n+1],used:!1})}for(let n=0;n<r.length;n++)a.addNumber({id:de+n,value:v[2*n+2*e.length],used:!1}),a.addNumber({id:he+n,value:v[2*n+1+2*e.length],used:!1});const x=[...new Array(t).fill(1),...new Array(i).fill(3)];return a.setTarget(x),f.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                    In this case, <i>k = ${e.length} + ${r.length} = ${s}</i>
                </p>
                <p>
                    At the beginning, set all of the digits to 0.
                    <ul>
                        ${e.map(n=>`
                            <li>
                                <i>${n}<sup>T</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                            <li>
                                <i>${n}<sup>F</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For numbers <i>n<sub>v<sub>i</sub></sub></i> the <i>i</i>-th digits are set to 1.
                    <ul>
                        ${e.map((n,g)=>`
                            <li>
                                <i>${n}<sup>T</sup></i> - ${(()=>{let C="".padEnd(s,"0");return C.substring(0,g)+"1"+C.substring(g+1)})()}
                            </li>
                            <li>
                                <i>${n}<sup>F</sup></i> - ${(()=>{let C="".padEnd(s,"0");return C.substring(0,g)+"1"+C.substring(g+1)})()}
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
                    We have ${r.length} clauses: 
                    <ul>
                        ${r.map((n,g)=>`
                                <li>
                                    c${g} &coloneq; ${n.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((n,g)=>{const C=a.numbers[2*g],m=a.numbers[2*g+1];return`
                                <li> 
                                    <i>${n}<sup>T</sup></i> - ${C.value.join("")}
                                </li>
                                <li> 
                                    <i>${n}<sup>F</sup></i> - ${m.value.join("")}
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
                        ${(()=>{let n="";for(let g=2*e.length;g<2*e.length+2*r.length;g++)n+=`<li>${a.numbers[g].value.join("")}</li>`;return n})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${a.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:a.copy(),mapping:{}}),{outInstance:a,steps:f}}}var ht=Object.getOwnPropertyDescriptor,pt=(l,e,r,a)=>{for(var t=a>1?void 0:a?ht(e,r):e,i=l.length-1,s;i>=0;i--)(s=l[i])&&(t=s(t)||t);return t};let ne=class{numbers;constructor(l){this.numbers=l}};ne=pt([me.SerializableClass()],ne);function vt(l){return new Worker(""+new URL("../workers/WorkerSSPSolver-DAAFjjd6.js",import.meta.url).href,{name:l?.name})}var $t=b('<meta name="description" content="Redcution from 3SAT to SSP"/>'),bt=b("<h2>Input 3-SAT Instance</h2>"),ft=b("<span>Certificate for 3-SAT will appear here.</span>"),mt=b("<h2>3-CNF Editor</h2>"),gt=b("<!> <!>",1),_t=b("<h2>Output SSP Instance</h2>"),St=b("<span>Cannot render this SSP isntance without providing CNF instance.</span>"),wt=b('<span class="placeholder">Certificate for SSP will appear here.</span>'),yt=b("<!> <!>",1),Tt=b('<main class="svelte-1hqb7wt"><h1>3-SAT to SSP reduction</h1> <div class="card-list svelte-1hqb7wt"><!> <!></div></main>');function Et(l,e){ie(e,!0);const r=()=>ce(f,"$redStore",t),a=()=>ce(x,"$showStepper",t),[t,i]=ye(),s=(u,d=K)=>{Ue(u,{get redStore(){return f},get hideCertificate(){return d()},title:$=>{var o=bt();p($,o)},instance:($,o=K)=>{Ne($,{get cnf(){return o()}})},certificate:($,o=K)=>{Ce($,{get cert(){return o()}})},certificatePlaceholder:$=>{var o=ft();p($,o)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let v=Ee(qe.LS_3SAT_SSP,new xe),{redStore:f,showStepper:x,isSolving:n,solveMessage:g,editorChanged:C,reduce:m,solve:S}=Re({storage:v,workerFactory:()=>new vt,reducerFactory:u=>new dt(u),decoderFactory:()=>new ve,createWorkerRequest:u=>({ssp:u.toSerializedString()}),resolveWorkerResponse:u=>{const d=u;return Le(d.type==Oe.RESULT),new ne(d.numbers)},onSolveFinished:(u,d)=>{if(d==se){Te(f,le(r).inCert=se,le(r));return}d.numbers.forEach(j=>{const y=u.numbers.find($=>j.id==$.id);y&&(y.used=!0)});const T=new ve().decode(u,d);f.update(j=>(j.inCert=T,j.outCert=d,j.outInstance=u,j))}}),N=$e(0);_e(()=>{r().outInstance&&be(N,Number.parseInt(r().outInstance.target.join("")),!0)});var P=Tt();Se(u=>{var d=$t();we.title="3SAT to SSP",p(u,d)});var R=k(h(P),2),V=h(R);Ve(V,{get redStore(){return f},get isSolving(){return n},get solveMessage(){return g},get showStepper(){return x},get reduce(){return m},get solve(){return S},title:w=>{var T=mt();p(w,T)},editor:w=>{ke(w,{get cnf(){return r().inInstance},onChange:T=>C(T),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var A=k(V,2);{var E=u=>{var d=gt(),w=U(d);s(w,()=>!0);var T=k(w,2);ze(T,{get redStore(){return f},get storage(){return v},instance:(y,$=K,o=K)=>{{let _=Y(()=>r().inInstance??void 0);pe(y,{get ssp(){return $()},style:"3sat",get cnfInstance(){return I(_)}})}},$$slots:{instance:!0}}),p(u,d)},L=u=>{var d=yt(),w=U(d);s(w,()=>!1);var T=k(w,2);We(T,{get redStore(){return f},title:_=>{var F=_t();p(_,F)},instance:(_,F=K)=>{var H=re(),D=U(H);{var z=O=>{pe(O,{get ssp(){return F()},style:"3sat",get cnfInstance(){return r().inInstance},trimLeadingZeros:!0})},ee=O=>{var te=St();p(O,te)};W(D,O=>{r().inInstance?O(z):O(ee,!1)})}p(_,H)},certificate:(_,F=K)=>{Je(_,{get cert(){return F()},get target(){return I(N)}})},certificatePlaceholder:_=>{var F=wt();p(_,F)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),p(u,d)};W(A,u=>{a()?u(E):u(L,!1)})}c(R),c(P),p(l,P),oe(),i()}export{Et as component,Pt as universal};
