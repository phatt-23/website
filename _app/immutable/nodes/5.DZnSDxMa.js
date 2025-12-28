import"../chunks/DsnmJJEf.js";import{p as ve,f as v,s as T,d as l,r as o,b as d,c as pe,a as B,t as D,k as y,S as ce,T as te,M as ue,O as we,Q as ye,a9 as Q,g as ke,K as Ce,$ as je,h as $e}from"../chunks/CTrBG-su.js";import{i as H,p as be,a as me,s as Fe,c as Ne}from"../chunks/0-nxEys-.js";import{C as Ae,E as Pe,a as xe,R as Ee}from"../chunks/C-OFwKSu.js";import{s as J}from"../chunks/xh0yEfGp.js";import{U as de,e as q,v as Te,i as M,K as ee,w as ne,x as Re,c as Ve,V as ae,y as re,P as ze,S as Ie,R as Le,z as ge,A as fe,u as Oe,m as We,n as Ke,o as Ue,p as qe,W as Me,q as De,O as Be,I as Xe}from"../chunks/QFfqNP4o.js";import{r as Ze,l as Je}from"../chunks/Dw-FwYao.js";const He=!0,qt=Object.freeze(Object.defineProperty({__proto__:null,prerender:He},Symbol.toStringTag,{value:"Module"}));var Qe=v("<p>SSP doesn't have a solution.</p>"),Ge=v('<tr><td class="svelte-1kd9p1w"> </td></tr>'),Ye=v('<p> </p> <div class="center svelte-1kd9p1w"><table class="svelte-1kd9p1w"><tbody></tbody></table></div>',1),et=v('<main><h2 class="dev">CertRenderer SSP</h2> <!></main>');function tt(c,e){ve(e,!0);var r=et(),a=T(l(r),2);{var t=s=>{var p=Qe();d(s,p)},u=s=>{var p=Ye(),g=B(p),K=l(g);o(g);var i=T(g,2),S=l(i),b=l(S);q(b,21,()=>e.cert.numbers,M,(f,E)=>{var V=Ge(),N=l(V),O=l(N,!0);o(N),o(V),D(F=>J(O,F),[()=>Te(y(E).value.join(""))]),d(f,V)}),o(b),o(S),o(i),D(()=>J(K,`Subset of numbers summing to the target of ${e.target??""}:`)),d(s,p)};H(a,s=>{e.cert==de?s(t):s(u,!1)})}o(r),d(c,r),pe()}var at=v('<div class="center svelte-1c4cita"><p> </p></div>'),rt=v('<tr><td class="svelte-1c4cita"><!></td><td><span> </span></td></tr>'),st=v('<div class="table-wrapper svelte-1c4cita"><table class="ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita">Name</th><th class="svelte-1c4cita">Value</th></tr></thead><tbody></tbody></table></div>'),nt=v("<!> <!>",1),it=v("<th><!></th>"),ot=v('<th class="clause-col svelte-1c4cita"><!></th>'),lt=v('<td class="svelte-1c4cita"> </td>'),ut=v('<td class="svelte-1c4cita"> </td>'),ct=v('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"><!></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),dt=v('<td class="svelte-1c4cita"> </td>'),ht=v('<td class="svelte-1c4cita"> </td>'),vt=v('<tr><td class="svelte-1c4cita"><!></td><!></tr> <tr><td class="svelte-1c4cita"><!></td><!></tr> <tr class="section-sep svelte-1c4cita"><td colspan="999" class="svelte-1c4cita"></td></tr>',1),pt=v('<td class="svelte-1c4cita"> </td>'),$t=v('<div class="table-wrapper svelte-1c4cita"><table class="sat-ssp-table svelte-1c4cita"><thead><tr><th class="svelte-1c4cita"></th><!><!></tr></thead><tbody><!><!></tbody><tfoot><tr><td class="svelte-1c4cita">Target:</td><!></tr></tfoot></table></div>'),bt=v(`<p style="color: red">When using the '3sat' style, you must pass in the CNF3 instance.</p>`),mt=v("<p>Each row represents one number.</p> <!>",1),gt=v('<label class="checkbox-wrapper"><input type="checkbox"/> <span>Use 3-SAT format</span></label> <!>',1),ft=v('<main><h2 class="dev">SSP Renderer</h2> <!></main>');function _e(c,e){ve(e,!0);const r=b=>{var f=nt(),E=B(f);{var V=F=>{var z=at(),L=l(z),A=l(L);o(L),o(z),D(h=>J(A,`Target: ${h??""}`),[()=>e.ssp.target.join("")]),d(F,z)};H(E,F=>{e.ssp.target&&F(V)})}var N=T(E,2);{var O=F=>{var z=st(),L=l(z),A=T(l(L));q(A,21,()=>e.ssp.numbers,M,(h,$,k)=>{var j=rt(),w=l(j),I=l(w);{let R=te(()=>y($).label??"NULL");ee(I,{get text(){return y(R)}})}o(w);var n=T(w);let m;var _=l(n),P=l(_,!0);o(_),o(n),o(j),D((R,G)=>{m=ne(n,1,Re(y($).classes??""),"svelte-1c4cita",m,R),J(P,G)},[()=>({"ssp-used":e.ssp.numbers[k].used}),()=>s(y($).value)]),d(h,j)}),o(A),o(L),o(z),d(F,z)};H(N,F=>{e.ssp.numbers.length&&F(O)})}d(b,f)},a=(b,f=Q)=>{var E=$t(),V=l(E),N=l(V),O=l(N),F=T(l(O));q(F,17,()=>f().variables,M,(w,I)=>{var n=it();ne(n,1,"var-col svelte-1c4cita");var m=l(n);ee(m,{displayMode:!0,get text(){return y(I)}}),o(n),d(w,n)});var z=T(F);q(z,17,()=>f().clauses,M,(w,I)=>{var n=ot(),m=l(n);{let _=te(()=>y(I).toTexString());ee(m,{displayMode:!0,style:"font-size:1em;",get text(){return y(_)}})}o(n),d(w,n)}),o(O),o(N);var L=T(N),A=l(L);q(A,17,()=>f().variables,M,(w,I,n)=>{var m=ct(),_=B(m);let P;var R=l(_),G=l(R);{let C=te(()=>`${y(I)} = T`);ee(G,{get text(){return y(C)}})}o(R);var ie=T(R);q(ie,17,()=>e.ssp.numbers[2*n].value,M,(C,U)=>{var x=lt(),Y=l(x,!0);o(x),D(()=>J(Y,y(U))),d(C,x)}),o(_);var X=T(_,2);let W;var Z=l(X),oe=l(Z);{let C=te(()=>`${y(I)} = F`);ee(oe,{get text(){return y(C)}})}o(Z);var le=T(Z);q(le,17,()=>e.ssp.numbers[2*n+1].value,M,(C,U)=>{var x=ut(),Y=l(x,!0);o(x),D(()=>J(Y,y(U))),d(C,x)}),o(X),ue(2),D((C,U)=>{P=ne(_,1,"var-row svelte-1c4cita",null,P,C),W=ne(X,1,"var-row var-row-false svelte-1c4cita",null,W,U)},[()=>({"ssp-used":e.ssp.numbers[2*n].used}),()=>({"ssp-used":e.ssp.numbers[2*n+1].used})]),d(w,m)});var h=T(A);q(h,17,()=>f().clauses,M,(w,I,n)=>{var m=vt(),_=B(m);let P;var R=l(_),G=l(R);{let C=te(()=>y(I).toTexString());ee(G,{get text(){return y(C)}})}o(R);var ie=T(R);q(ie,17,()=>e.ssp.numbers[2*n+2*f().variables.length].value,M,(C,U)=>{var x=dt(),Y=l(x,!0);o(x),D(()=>J(Y,y(U))),d(C,x)}),o(_);var X=T(_,2);let W;var Z=l(X),oe=l(Z);{let C=te(()=>y(I).toTexString());ee(oe,{get text(){return y(C)}})}o(Z);var le=T(Z);q(le,17,()=>e.ssp.numbers[2*n+1+2*f().variables.length].value,M,(C,U)=>{var x=ht(),Y=l(x,!0);o(x),D(()=>J(Y,y(U))),d(C,x)}),o(X),ue(2),D((C,U)=>{P=ne(_,1,"clause-row svelte-1c4cita",null,P,C),W=ne(X,1,"clause-row clause-row-fill svelte-1c4cita",null,W,U)},[()=>({"ssp-used":e.ssp.numbers[2*n+2*f().variables.length].used}),()=>({"ssp-used":e.ssp.numbers[2*n+1+2*f().variables.length].used})]),d(w,m)}),o(L);var $=T(L),k=l($),j=T(l(k));q(j,17,()=>e.ssp.target,M,(w,I)=>{var n=pt(),m=l(n,!0);o(n),D(()=>J(m,y(I))),d(w,n)}),o(k),o($),o(V),o(E),d(b,E)};let t=be(e,"style",3,"none"),u=be(e,"trimLeadingZeros",3,!1);function s(b){let f=b.join("");return u()&&(f=Te(f)),f}let p=we(!1);var g=ft(),K=T(l(g),2);{var i=b=>{r(b)},S=b=>{var f=ce(),E=B(f);{var V=N=>{var O=ce(),F=B(O);{var z=A=>{var h=bt();d(A,h)},L=A=>{var h=gt(),$=B(h),k=l($);Ze(k),ue(2),o($);var j=T($,2);{var w=n=>{r(n)},I=n=>{var m=mt(),_=T(B(m),2);a(_,()=>e.cnfInstance),d(n,m)};H(j,n=>{y(p)?n(I,!1):n(w)})}Ve(k,()=>y(p),n=>ye(p,n)),d(A,h)};H(F,A=>{e.cnfInstance?A(L,!1):A(z)})}d(N,O)};H(E,N=>{t()=="3sat"&&N(V)},!0)}d(b,f)};H(K,b=>{t()=="none"?b(i):b(S,!1)})}o(g),d(c,g),pe()}class Se{decode(e,r){const a=new Map;for(const t of r.numbers){const u=t.id;if(u.startsWith(ae)){const s=u.substring(ae.length);a.has(s)||a.set(s,!0)}else if(u.startsWith(re)){const s=u.substring(re.length);a.has(s)||a.set(s,!1)}}return new Ae(a)}}var _t=Object.getOwnPropertyDescriptor,St=(c,e,r,a)=>{for(var t=a>1?void 0:a?_t(e,r):e,u=c.length-1,s;u>=0;u--)(s=c[u])&&(t=s(t)||t);return t};let se=class extends ze{numbers;target;constructor(){super(),this.numbers=[],this.target=[0]}addNumber(c){this.numbers.push(c)}setNumberValue(c,e){const r=this.numbers.find(a=>a.id===c);r&&(r.value=e)}getNumber(c){return this.numbers.find(e=>e.id==c)}setTarget(c){this.target=c}isEmpty(){return this.numbers.length==0}static fromString(c,e){const r=new se;if(!c)return"SSP cannot be constructed from an empty string";const a=c.split(`
`).map(t=>t.trim()).filter(t=>t.length);try{const t=Array(e).map(u=>Number.parseInt(u));r.setTarget(t)}catch{return`Couldn't parse the target number: ${e}`}return a.forEach((t,u)=>{try{const s=Array.from(t).map(g=>Number.parseInt(g)),p={id:`${u}`,value:s,used:!1};r.addNumber(p)}catch{return`Couldn't parse the number on the line ${u}: ${t}.`}}),r}toSerializedString(){const c={numbers:this.numbers.map(e=>({id:e.id,label:e.label??null,value:e.value,used:e.used,classes:e.classes??null})),target:this.target};return JSON.stringify(c)}static fromSerializedString(c){const e=new se,r=JSON.parse(c);if(e.setTarget(r.target),Array.isArray(r.numbers))for(const a of r.numbers){const t={id:a.id,label:a.label??void 0,value:a.value,used:a.used,classes:a.classes??void 0};e.addNumber(t)}return e}copy(){const c=new se;return c.setTarget([...this.target]),this.numbers.forEach(e=>{c.addNumber({id:e.id,label:e.label,value:[...e.value],used:e.used,classes:e.classes})}),c}};se=St([Ie.SerializableClass("SSP")],se);class wt extends Le{lookup=new Map;V;C;K;targetArray;targetSum;constructor(e){super(e),this.V=this.inInstance.variables.length,this.C=this.inInstance.clauses.length,this.K=this.V+this.C,this.targetArray=[...new Array(this.V).fill(1),...new Array(this.C).fill(3)],this.targetSum=Number.parseInt(this.targetArray.join(""))}doReduce(){const e=[],r=new se;let a=this.createTargetSum(r),t=this.createVarNumbers(a.ssp),u=this.updateVarNumbers(t.ssp),s=this.createBufferNumbers(u.ssp);return e.push(a.step,t.step,u.step,s.step),{outInstance:r,steps:e}}createTargetSum(e){e.setTarget(this.targetArray);const r={id:"create-target-sum",title:"Create target sum",description:`
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
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:r}}createVarNumbers(e){const r=new Array(this.K).fill(0);this.inInstance.variables.forEach((t,u)=>{const s=[...r];s[u]=1;const p=ae+t,g=re+t;this.lookup.set(p,[...s]),this.lookup.set(g,[...s]),e.addNumber({id:p,label:`${t}_T`,value:[...s],used:!1}),e.addNumber({id:g,label:`${t}_F`,value:[...s],used:!1})});const a={id:"create-var-numbers",title:"Create variable numbers",description:`
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
                            ${t}_T &= ${this.lookup.get(ae+t)?.join("")} \\\\
                            ${t}_F &= ${this.lookup.get(re+t)?.join("")} \\\\
                        `).join("")}
                    \\end{aligned}
                    $$

                    The first $v$ digits in the target sum $ \\tau = ${this.targetSum} $ can be achieved, 
                    iff either $\\nu_T$, or $\\nu_F$ is present in the final subset $S$. 
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:a}}updateVarNumbers(e){this.inInstance.clauses.forEach((a,t)=>{a.literals.forEach(u=>{const s=u.negated?re+u.varName:ae+u.varName,p=this.lookup.get(s);p[t+this.V]=1,this.lookup.set(s,p),e.setNumberValue(s,p)})});const r={id:"update-var-numbers",title:"Update variable numbers",description:`
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
                            ${a}_T &= ${this.lookup.get(ae+a)?.join("")} \\\\
                            ${a}_F &= ${this.lookup.get(re+a)?.join("")} \\\\
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
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:r}}createBufferNumbers(e){const r=new Array;this.inInstance.clauses.forEach((t,u)=>{const s=new Array(this.K).fill(0);s[u+this.V]=1;const p=ge+t.id,g=fe+t.id,K={id:p,label:`\\kappa_{${u}, 0}`,value:[...s],used:!1},i={id:g,label:`\\kappa_{${u}, 1}`,value:[...s],used:!1};e.addNumber(K),e.addNumber(i),this.lookup.set(p,[...s]),this.lookup.set(g,[...s]),r.push(K,i)});const a={id:"create-buffer-numbers",title:"Create buffer numbers",description:`
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

            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{ssp:e,step:a}}doEverything(){const{variables:e,clauses:r}=this.inInstance,a=new se,t=e.length,u=r.length,s=t+u,p=Array.from({length:2*s},()=>new Array(s).fill(0));for(let i=0;i<s;i++)p[2*i][i]=1,p[2*i+1][i]=1;r.forEach((i,S)=>i.literals.forEach(b=>{const f=e.findIndex(E=>E==b.varName);p[2*f+(b.negated?1:0)][t+S]=1}));const g=[];for(let i=0;i<e.length;i++){const S=e[i];a.addNumber({id:ae+S,value:p[2*i],used:!1}),a.addNumber({id:re+S,value:p[2*i+1],used:!1})}for(let i=0;i<r.length;i++)a.addNumber({id:ge+i,value:p[2*i+2*e.length],used:!1}),a.addNumber({id:fe+i,value:p[2*i+1+2*e.length],used:!1});const K=[...new Array(t).fill(1),...new Array(u).fill(3)];return a.setTarget(K),g.push({id:"var-numbers",title:"Add variable numbers",description:`
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
                        ${e.map(i=>`
                            <li>
                                <i>${i}<sup>T</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                            <li>
                                <i>${i}<sup>F</sup></i> - ${"".padEnd(s,"0")}
                            </li>
                        `).join(`
`)}
                    </ul>
                </p>
                <p>
                    For numbers <i>n<sub>v<sub>i</sub></sub></i> the <i>i</i>-th digits are set to 1.
                    <ul>
                        ${e.map((i,S)=>`
                            <li>
                                <i>${i}<sup>T</sup></i> - ${(()=>{let b="".padEnd(s,"0");return b.substring(0,S)+"1"+b.substring(S+1)})()}
                            </li>
                            <li>
                                <i>${i}<sup>F</sup></i> - ${(()=>{let b="".padEnd(s,"0");return b.substring(0,S)+"1"+b.substring(S+1)})()}
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
                        ${r.map((i,S)=>`
                                <li>
                                    c${S} &coloneq; ${i.asHtmlString()}
                                </li>`).join(`
`)}
                    </ul>
                </p>
                <p>
                    <ul>
                        ${e.map((i,S)=>{const b=a.numbers[2*S],f=a.numbers[2*S+1];return`
                                <li> 
                                    <i>${i}<sup>T</sup></i> - ${b.value.join("")}
                                </li>
                                <li> 
                                    <i>${i}<sup>F</sup></i> - ${f.value.join("")}
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
                        ${(()=>{let i="";for(let S=2*e.length;S<2*e.length+2*r.length;S++)i+=`<li>${a.numbers[S].value.join("")}</li>`;return i})()}
                    </ul>
                </p>
                <p>
                    Set the target to ${a.target.join("")}.
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:a.copy(),mapping:{}}),{outInstance:a,steps:g}}}var yt=Object.getOwnPropertyDescriptor,Tt=(c,e,r,a)=>{for(var t=a>1?void 0:a?yt(e,r):e,u=c.length-1,s;u>=0;u--)(s=c[u])&&(t=s(t)||t);return t};let he=class{numbers;constructor(c){this.numbers=c}};he=Tt([Ie.SerializableClass()],he);function It(c){return new Worker(""+new URL("../workers/WorkerSSPSolver-DAAFjjd6.js",import.meta.url).href,{name:c?.name})}var kt=v('<meta name="description" content="Redcution from 3SAT to SSP"/>'),Ct=v("<h2>Input 3-SAT Instance</h2>"),jt=v("<span>Certificate for 3-SAT will appear here.</span>"),Ft=v("<h2>3-CNF Editor</h2>"),Nt=v("<!> <!>",1),At=v("<h2>Output SSP Instance</h2>"),Pt=v("<span>Cannot render this SSP isntance without providing CNF instance.</span>"),xt=v('<span class="placeholder">Certificate for SSP will appear here.</span>'),Et=v("<!> <!>",1),Rt=v('<main class="svelte-1hqb7wt"><h1>3-SAT to SSP reduction</h1> <div class="card-list svelte-1hqb7wt"><!> <!></div></main>');function Mt(c,e){ve(e,!0);const r=()=>me(g,"$redStore",t),a=()=>me(K,"$showStepper",t),[t,u]=Fe(),s=(h,$=Q)=>{Xe(h,{get redStore(){return g},get hideCertificate(){return $()},title:n=>{var m=Ct();d(n,m)},instance:(n,m=Q)=>{Ee(n,{get cnf(){return m()}})},certificate:(n,m=Q)=>{xe(n,{get cert(){return m()}})},certificatePlaceholder:n=>{var m=jt();d(n,m)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let p=Oe(Je.LS_3SAT_SSP,new We),{redStore:g,showStepper:K,isSolving:i,solveMessage:S,editorChanged:b,reduce:f,solve:E}=Ke({storage:p,workerFactory:()=>new It,reducerFactory:h=>new wt(h),decoderFactory:()=>new Se,createWorkerRequest:h=>({ssp:h.toSerializedString()}),resolveWorkerResponse:h=>{const $=h;return qe($.type==Me.RESULT),new he($.numbers)},onSolveFinished:(h,$)=>{if($==de){Ne(g,$e(r).inCert=de,$e(r));return}$.numbers.forEach(w=>{const I=h.numbers.find(n=>w.id==n.id);I&&(I.used=!0)});const j=new Se().decode(h,$);g.update(w=>(w.inCert=j,w.outCert=$,w.outInstance=h,w))}}),V=we(0);ke(()=>{r().outInstance&&ye(V,Number.parseInt(r().outInstance.target.join("")),!0)});var N=Rt();Ce(h=>{var $=kt();je.title="3SAT to SSP",d(h,$)});var O=T(l(N),2),F=l(O);Ue(F,{get redStore(){return g},get isSolving(){return i},get solveMessage(){return S},get showStepper(){return K},get reduce(){return f},get solve(){return E},title:k=>{var j=Ft();d(k,j)},editor:k=>{Pe(k,{get cnf(){return r().inInstance},onChange:j=>b(j),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var z=T(F,2);{var L=h=>{var $=Nt(),k=B($);s(k,()=>!0);var j=T(k,2);De(j,{get redStore(){return g},get storage(){return p},instance:(I,n=Q,m=Q)=>{{let _=te(()=>r().inInstance??void 0);_e(I,{get ssp(){return n()},style:"3sat",get cnfInstance(){return y(_)}})}},$$slots:{instance:!0}}),d(h,$)},A=h=>{var $=Et(),k=B($);s(k,()=>!1);var j=T(k,2);Be(j,{get redStore(){return g},title:_=>{var P=At();d(_,P)},instance:(_,P=Q)=>{var R=ce(),G=B(R);{var ie=W=>{_e(W,{get ssp(){return P()},style:"3sat",get cnfInstance(){return r().inInstance}})},X=W=>{var Z=Pt();d(W,Z)};H(G,W=>{r().inInstance?W(ie):W(X,!1)})}d(_,R)},certificate:(_,P=Q)=>{tt(_,{get cert(){return P()},get target(){return y(V)}})},certificatePlaceholder:_=>{var P=xt();d(_,P)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),d(h,$)};H(z,h=>{a()?h(L):h(A,!1)})}o(O),o(N),d(c,N),pe(),u()}export{Mt as component,qt as universal};
