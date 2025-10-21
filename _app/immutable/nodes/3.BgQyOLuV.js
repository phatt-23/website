import"../chunks/DsnmJJEf.js";import{s as de,d as _e,o as ke,a as Oe}from"../chunks/CQ7OeVSD.js";import{p as ne,f as F,s as $,d as N,r as x,b as m,c as ae,T as ee,a as Z,t as te,x as u,U as se,a$ as Fe,y as U,K as Re,D as be,z as k,L as Ae,w as ie,v as Le,$ as Pe,S as oe}from"../chunks/Du57CbYy.js";import{i as O,s as Xe,a as He}from"../chunks/BgTyvlfH.js";import{r as we,l as Ge}from"../chunks/C7pI9irj.js";import{U as Q,e as le,i as ce,D as je,C as fe,a as We,c as Ye,b as Ce,S as Ue,l as G,m as j,n as B,N as Y,E,G as ge,o as L,p as X,q as K,T as H,u as ze,R as Me,P as Ve,h as qe,j as Be,k as ve}from"../chunks/D0f_mMde.js";import{a as Ke}from"../chunks/CaJ6bvTC.js";import{h as pe}from"../chunks/B6c_pe_a.js";const Ze=!0,Et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ze},Symbol.toStringTag,{value:"Module"}));var Je=F("<p>The 3CNF formula is unsatisfiable.</p>"),Qe=F("<div> </div>"),et=F("<main><h2>CertRenderer 3SAT</h2> <!></main>");function tt(S,a){ne(a,!0);var e=et(),t=$(N(e),2);{var l=s=>{var n=Je();m(s,n)},i=s=>{var n=ee(),r=Z(n);le(r,17,()=>a.cert.assignments,ce,(c,o)=>{var _=se(()=>Fe(u(o),2));let C=()=>u(_)[0],f=()=>u(_)[1];var b=Qe(),D=N(b);x(b),te(()=>de(D,`${C()??""} ≔ ${f()==!0?"T":f()==!1?"F":"Either"}`)),m(c,b)}),m(s,n)};O(t,s=>{a.cert==Q?s(l):s(i,!1)})}x(e),m(S,e),ae()}function nt(S,a,e,t,l){k(a,e[u(t)],!0),l()}var at=F("<option> </option>"),ot=F(`<div class="cnf-editor"><h2>CNF Editor</h2> <p><i>Removes duplicate clauses automatically.</i></p> <textarea class="svelte-whqlb8">
    </textarea> <select><option>--Choose a demo--</option><!></select></div>`);function st(S,a){ne(a,!0);const e=je.getTextInputs(fe);let t=U(Re(a.cnf?.asString()??"")),l=U("");const i=f=>{a.onChange&&a.onChange(f)},s=f=>{a.onWrongFormat&&a.onWrongFormat(f)},n=()=>{const f=fe.fromString(u(t));if(typeof f=="string"){s(f);return}i(f)};be(()=>{a.cnf&&k(t,a.cnf.asString(),!0)});var r=ot(),c=$(N(r),4);Ae(c),c.__change=n;var o=$(c,2);o.__change=[nt,t,e,l,n];var _=N(o);_.value=_.__value="";var C=$(_);le(C,17,()=>Object.keys(e),ce,(f,b)=>{var D=at(),A=N(D,!0);x(D);var W={};te(()=>{de(A,u(b)),W!==(W=u(b))&&(D.value=(D.__value=u(b))??"")}),m(f,D)}),x(o),x(r),We(c,()=>u(t),f=>k(t,f)),Ye(o,()=>u(l),f=>k(l,f)),m(S,r),ae()}_e(["change"]);var it=F('<div class="clause svelte-z6uwnm"><!></div>'),rt=F('<div class="cnf-renderer"><h2>CNF Renderer</h2> <div><input type="checkbox" name="viewAsColumnCheckbox"/> <label for="viewAsColumnCheckbox">View as column</label></div> <!></div>');function me(S,a){ne(a,!0);let e=U(!1);var t=rt(),l=$(N(t),2),i=N(l);we(i),ie(2),x(l);var s=$(l,2);{var n=c=>{var o=ee(),_=Z(o);le(_,17,()=>a.cnf.clauses,ce,(C,f)=>{var b=it(),D=N(b);pe(D,()=>u(f).asHtmlString()),x(b),m(C,b)}),m(c,o)},r=c=>{var o=ee(),_=Z(o);pe(_,()=>a.cnf.asHtmlString()),m(c,o)};O(s,c=>{u(e)?c(n):c(r,!1)})}x(t),Ce(i,()=>u(e),c=>k(e,c)),m(S,t),ae()}var dt=Object.getOwnPropertyDescriptor,lt=(S,a,e,t)=>{for(var l=t>1?void 0:t?dt(a,e):a,i=S.length-1,s;i>=0;i--)(s=S[i])&&(l=s(l)||l);return l};let re=class{assignments;constructor(S){this.assignments=S}};re=lt([Ue.SerializableClass("Certificate3SAT")],re);class ct{decode(a,e){const{path:t}=e,l=new Map;for(let i=0;i<t.length;i++){const s=t[i].id;if(s.startsWith(G)){const n=s.substring(G.length,s.lastIndexOf("_"));l.has(n)||l.set(n,!0)}else if(s.startsWith(j)){const n=s.substring(j.length,s.lastIndexOf("_"));l.has(n)||l.set(n,!1)}}return new re(l)}}class ut{inInstance;rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(a){this.inInstance=a;const{variables:e,clauses:t}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=t.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*t.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}reduce(){let a=[];const e=this.createVarGadgets();a.push(...e.interSteps);const t=this.createClauseGadgets(e.graph.copy());return a.push(...t.interSteps),{outInstance:t.graph,steps:a}}createClauseGadgets(a){const{clauses:e}=this.inInstance;let t=[],l=a.copy();return t.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
                <p>
                    For every clause, create one clause node 
                    (this node must be visited exactly once).
                    There are ${this.clauseCount} clause nodes.
                </p>
                <p>
                    For each of the clause, create edges to or from the variable row nodes
                    based on these rules:
                </p>
                <ul>
                    <li>
                        If the literal <b>isn't negated</b>, 
                        pick a free (one that hasn't been used yet in this step) 
                        row node <i>r</i> and connect it to the clause node.

                        The selected node is an <u>out-going</u> node.

                        Then connect the clause node back to a row node <i>r + 1</i> 
                        (adjacent on the right of it).

                        This node is an <u>in-coming</u> node.
                    </li>
                    <li>
                        If the literal <b>is negated</b>, 
                        pick a free row node <i>r</i> 
                        and connect it to the clause node.

                        The selected node is an <u>out-going</u> node.

                        Then connect the clause node back to a row node <i>r - 1</i> 
                        (adjacent on the left of it).

                        This node is an <u>in-coming</u> node.
                    </li>
                </ul>
                <p>
                    This way we gaurantee for each clause that:
                    <ul>
                        <li>
                            If the literal <i>L</i> of some variable <i>X</i> 
                            <b>wasn't negated</b> in the clause, 
                            then we can reach it from an <i>X</i> variable row node 
                            and come back to an <i>X</i> variable row node on the right of it,
                            when we approach it from the left (we assinged X to be True).
                        </li>
                        <li>
                            If the literal <i>L</i> of some variable <i>X</i> 
                            <b>was negated</b> in the clause, 
                            then we can reach it from an <i>X</i> variable row node 
                            and come back to an <i>X</i> variable row node on the left of it,
                            when we approach it from the right (we assigned X to be False).
                        </li>
                    </ul>
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:l,mapping:{}}),e.forEach((i,s)=>{const n=s+1,r=`${n}`,c={id:B+`${r}`,position:{x:2*this.rowXOffset,y:s*this.yStep+this.yOffset},classes:"clause"};l.addNode(c),a.addNode(c),i.literals.forEach((o,_)=>{const C=`${o.varName}_${3*n}`,f=`${o.varName}_${3*n+1}`;o.negated?(a.addEdge({id:E+`${f}-${r}`,from:Y+`${f}`,to:B+`${r}`,classes:"false_out"}),a.addEdge({id:E+`${r}-${C}`,from:B+`${r}`,to:Y+`${C}`,classes:"false_in"})):(a.addEdge({id:E+`${C}-${r}`,from:Y+`${C}`,to:B+`${r}`,classes:"true_out"}),a.addEdge({id:E+`${r}-${f}`,from:B+`${r}`,to:Y+`${f}`,classes:"true_in"}))}),t.push({id:`connect-clause-node-${s}`,title:`Connect clause node "${r}" to variable row nodes`,description:`
                    <p>
                        Clause node "${r}" represents the clause ${i.asHtmlString()}.
                    </p>
                    <ul>
                        ${i.literals.map(o=>`
                                <li>
                                    ${o.asHtmlString()}
                                    &hyphen;
                                    ${o.negated?`
                                        because ${o.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${o.varName}_${3*n+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${o.varName}_${3*n}).
                                    `:`
                                        because ${o.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${o.varName}_${3*n})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${o.varName}_${3*n+1}).
                                    `}
                                </li>
                            `).join("")}
                    </ul>
                    <p>
                        To clarify:
                        <ul>
                            <li>out-going node is incident to an edge connecting a row node to a clause node.</li>
                            <li>in-coming node is incident to an edge connecting a clause node to a row node.</li>
                        </ul>
                    </p>
                `,inSnapshot:this.inInstance,outSnapshot:a.copy(),mapping:{}})}),{graph:a,interSteps:t}}createVarGadgets(){const{variables:a}=this.inInstance;let e=new ge,t=new ge,l=[];return a.forEach((i,s)=>{if(s==0)t.addNode({id:L+X,position:{x:0,y:s*this.yDist-this.yDist/2},classes:"source"}),t.addEdge({id:E+`${X}-${i}_1`,from:L+`${X}`,to:G+`${i}_1`,classes:"muted"}),t.addEdge({id:E+`${X}-${i}_${this.rowNodeCount}`,from:L+`${X}`,to:j+`${i}_${this.rowNodeCount}`,classes:"muted"});else{const n=`${a[s-1]}_${i}`;t.addNode({id:K+`${n}`,position:{x:0,y:s*this.yDist-this.yDist/2},classes:"inbetween"});const r=a[s-1];t.addEdge({id:E+`${r}_1-${n}`,from:G+`${r}_1`,to:K+n,classes:"muted"}),t.addEdge({id:E+`${r}_${this.rowNodeCount}-${n}`,from:j+`${r}_${this.rowNodeCount}`,to:K+n,classes:"muted"}),t.addEdge({id:E+`${n}-${i}_1`,from:K+`${n}`,to:G+`${i}_1`,classes:"muted"}),t.addEdge({id:E+`${n}-${i}_${this.rowNodeCount}`,from:K+`${n}`,to:j+`${i}_${this.rowNodeCount}`,classes:"muted"})}for(let n=1;n<=this.rowNodeCount-1;n++){const r=`${i}_${n}`,c=`${i}_${n+1}`;let o="",_=Y,C=Y;n==1?(o+=" true",_=G):n==this.rowNodeCount-1?C=j:(n+1)%3==0&&(o+=" guarantee");const f={id:_+`${r}`,position:{x:(n-1)*this.xDist-this.rowXOffset,y:s*this.yDist},classes:o};if(e.addNode(f),t.addNode(f),n==this.rowNodeCount-1){const A={id:C+`${c}`,position:{x:n*this.xDist-this.rowXOffset,y:s*this.yDist},classes:"false"};e.addNode(A),t.addNode(A)}const b={id:E+`${r}-${c}`,from:_+`${r}`,to:C+`${c}`,classes:"muted"},D={id:E+`${c}-${r}`,from:C+`${c}`,to:_+`${r}`,classes:"muted"};e.addEdge(b),e.addEdge(D),t.addEdge(b),t.addEdge(D)}s==a.length-1&&(t.addNode({id:L+H,position:{x:0,y:s*this.yDist+this.yDist/2},classes:"target"}),t.addEdge({id:E+`${i}_1-${H}`,from:G+`${i}_1`,to:L+`${H}`,classes:"muted"}),t.addEdge({id:E+`${i}_${this.rowNodeCount}-${H}`,from:j+`${i}_${this.rowNodeCount}`,to:L+`${H}`,classes:"muted"}),t.addEdge({id:E+`${H}-${X}`,from:L+`${H}`,to:L+`${X}`,classes:"muted"}))}),l.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
                <p>
                    For every variable, create a row variable gadget.
                </p>
                <p>
                    This gadget consists of ${this.rowNodeCount} row nodes.
                    They are all connected birectinally.
                </p>
                <p>
                    The number of row nodes it derived as follows: 
                </p>
                <p>
                    For every clause we need 2 nodes - an <i>out-going</i> and <i>in-coming</i> node.
                    Each of these 2 nodes must be padded a <i>pad</i> node (at least one).
                    The rows themselves also need <i>true</i> and and <i>false</i> ends.
                </p>
                <p>
                    ${this.clauseCount==1?`There is ${this.clauseCount} clause.`:`There are ${this.clauseCount} clauses.`}
                    Therefore we need: 
                    <ul>
                        <li>2 * ${this.clauseCount} out-going and in-coming nodes</li>
                        <li>${this.clauseCount} + 1 pad nodes</li>
                        <li>1 true and 1 false nodes at the row ends</li>
                    </ul>
                </p>
                <p>
                    (2 * ${this.clauseCount}) + (${this.clauseCount} + 1) + 1 + 1 = ${this.rowNodeCount} nodes per variable row.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:e,mapping:{}}),l.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
                <p>
                    Create the <i>source</i> node, the <i>inbetween</i> nodes that lie
                    between the variable rows and <i>target</i> node. 
                </p>
                <p>
                    Connect the <i>source</i> node 
                    to the row ends of the first variable "${this.inInstance.variables[0]}".
                    After that connect its row ends to the inbetween/target node below.
                    Finally connect the <i>target</i> node to <i>source</i> node to close the loop.
                </p>
                <p>Why did we do this?</p>
                <p>
                    Going from the <i>source</i> or an <i>inbetween</i> node 
                    to the variable's row node is equivalent to assigning 
                    a boolean value that corresponding variable.
                </p>
                <ul>
                    <li> 
                        Going through the <b>left edge means assigning 'true'</b>.
                    </li>
                    <li>
                        Going though the <b>right edge means assigning 'false'</b>.
                    </li>
                </ul>
                <p>
                    Notice that we can only choose either 'true' or 'false' edge.
                    Backtracking is impossible.
                </p>
                <p>
                    After going through either the right or left edge, 
                    we must visit the row nodes, for the final cycle to be Hamiltonian.
                </p>
                <ul>
                    <li>
                        If we chose the <b>left edge</b>, then we end up on the <b>'true'</b> node 
                        and have to traverse the row nodes from <u>left to right</u> until 
                        we end up at the 'false' node.
                    </li>

                    <li>
                        If we chose the <b>right</b> edge, then we end up on the <b>'false'</b> node 
                        and have to traverse the row nodes from <u>right to left</u> until
                        we end up at the 'true' node.
                    </li>

                    <li>
                        Onwards, the only choice is to continue 
                        to the next <i>inbetween</i>/<i>target</i> node below.
                    </li>
                </ul>
                <p>
                    The last step is to go from the <i>target</i> node back to the <i>source</i> node.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:t,mapping:{}}),{graph:t,interSteps:l}}}var ht=F('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),ft=(S,a)=>a(),gt=F("<div><!></div> <!> <div><!></div>",1),vt=F("<span>There are no steps to step through.</span>"),pt=F('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),mt=F('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Nt(S,a){ne(a,!0);const e=()=>Xe(s,"$redStore",t),[t,l]=He();let i=ze(Ge.LS_3SAT_HCYCLE,new Me),s=i.value;ke(()=>{console.log("3sat-hcycle on mount"),console.debug(e().inInstance)});let n=U(!1),r=U(!1),c=U(""),o=null;function _(d){o&&(o.terminate(),o=null,k(r,!1),k(c,"Solving cancelled — formula changed.")),s.update(h=>(h.reset(),h.setInInstance(d),i.save(),h))}function C(){if(e().inInstance){const d=new ut(e().inInstance),{outInstance:h,steps:w}=d.reduce();s.update(g=>(g.steps=w,g.outInstance=h,g)),i.save()}}async function f(){let{inCert:d,outInstance:h,outCert:w}=e();if(!(!h||w)){k(r,!0),k(c,"Solving Hamiltonian cycle..."),o&&(o.terminate(),o=null);try{const g=new Worker(new URL(""+new URL("../workers/WorkerHCYCLESolver-CoH_Z5lj.js",import.meta.url).href,import.meta.url),{type:"module"});o=g;const M=new Promise((I,R)=>{g.onmessage=y=>{g===o&&(g.terminate(),o=null,I(y.data))},g.onerror=y=>{g===o&&(g.terminate(),o=null,R(y))}});if(g.postMessage(h.toSerializedString()),w=await M,!o&&!u(r))return;if(w==Q)s.update(I=>(I.inCert=Q,I.outCert=Q,I));else{const I=h,R=w.path;I.edges.forEach(p=>p.classes+=" solved");const y=p=>p.slice(p.search(Ve)+1);for(let p=0;p<R.length-1;p++){const P=y(R[p].id),V=y(R[p+1].id),q=E+`${P}-${V}`,v=I.edges.find(J=>J.id==q);v&&(I.removeEdge(v),v.classes+=" used",I.addEdge(v))}d=new ct().decode(I,w),s.update(p=>(p.inCert=d,p.outCert=w,p.outInstance=I,p))}i.save()}catch(g){console.error("Error during solving:",g),k(c,"An error occurred while solving.")}finally{k(r,!1),k(c,""),o=null}}}be(()=>{s.update(d=>(d.resetStepIndex(),d))}),Oe(()=>{console.debug("onDestroy"),o&&(o.terminate(),o=null)});var b=mt();Le(d=>{var h=ht();Pe.title="3SAT to HCYCLE",m(d,h)});var D=$(N(b),2);st(D,{get cnf(){return e().inInstance},onChange:d=>_(d),onWrongFormat:d=>alert("From editor: "+d)});var A=$(D,2),W=N(A);W.__click=C;var z=$(W,2);z.__click=[ft,f];var $e=N(z);{var Se=d=>{var h=oe("Solving...");m(d,h)},Ie=d=>{var h=oe("Solve");m(d,h)};O($e,d=>{u(r)?d(Se):d(Ie,!1)})}x(z);var ue=$(z,2);we(ue),ie(2),x(A);var he=$(A,2);{var ye=d=>{qe(d,{children:(h,w)=>{ie();var g=oe();te(()=>de(g,u(c))),m(h,g)}})};O(he,d=>{u(r)&&d(ye)})}var Ee=$(he,2);{var Ne=d=>{const h=se(()=>e().steps),w=se(()=>e().stepIndex);var g=ee(),M=Z(g);{var I=y=>{var p=gt(),P=Z(p),V=N(P);{var q=T=>{me(T,{get cnf(){return u(h)[u(w)].inSnapshot}})};O(V,T=>{u(w)<u(h).length&&u(h)[u(w)].inSnapshot&&!u(h)[u(w)].inSnapshot.empty()&&T(q)})}x(P);var v=$(P,2);Be(v,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{s.update(T=>(T.prevStep(),T)),i.save()},onNextClick:()=>{s.update(T=>(T.nextStep(),T)),i.save()}});var J=$(v,2),De=N(J);{var Te=T=>{ve(T,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};O(De,T=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&T(Te)})}x(J),m(y,p)},R=y=>{var p=vt();m(y,p)};O(M,y=>{u(h).length?y(I):y(R,!1)})}m(d,g)},xe=d=>{var h=pt(),w=N(h),g=N(w);{var M=v=>{me(v,{get cnf(){return e().inInstance}})};O(g,v=>{e().inInstance&&!e().inInstance.empty()&&v(M)})}var I=$(g,2);{var R=v=>{tt(v,{get cert(){return e().inCert}})};O(I,v=>{e().inCert&&v(R)})}x(w);var y=$(w,2),p=N(y);{var P=v=>{ve(v,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};O(p,v=>{e().outInstance&&!e().outInstance.empty()&&v(P)})}var V=$(p,2);{var q=v=>{Ke(v,{get cert(){return e().outCert}})};O(V,v=>{e().outCert&&v(q)})}x(y),x(h),m(d,h)};O(Ee,d=>{u(n)?d(Ne):d(xe,!1)})}x(b),te((d,h)=>{W.disabled=d,z.disabled=h},[()=>!e().hasInInstance()||e().hasOutInstance()||u(r),()=>!e().hasInstances()||e().hasOutCertificate()||u(r)]),Ce(ue,()=>u(n),d=>k(n,d)),m(S,b),ae(),l()}_e(["click"]);export{Nt as component,Et as universal};
