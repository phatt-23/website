import"../chunks/DsnmJJEf.js";import"../chunks/7c8ahxPy.js";import{p as be,f as P,J as Ce,d as I,s as v,t as se,b as C,c as Ee,$ as Se,u as oe,r as y,K as ne,an as K,ao as Ie,a as ae,m as E,ac as ie}from"../chunks/BHy43uIv.js";import{d as ye,s as Ne}from"../chunks/Bo-e_C1i.js";import{s as U,i as w,a as xe,b as Te,c as De}from"../chunks/lPMcd3W4.js";import{l as Re,r as ke}from"../chunks/hAUU4et8.js";import{N as R,d as k,R as Oe,f as G,g as F,E as u,G as re,h as N,j as T,k as H,T as D,u as Fe,l as Le,m as Xe,b as Ae,U as de,n as Ge,W as He,o as Pe,p as We}from"../chunks/CdN2dGYn.js";import{i as Ye}from"../chunks/Bic1S2_H.js";import{C as je,E as Ue,R as le,a as Me}from"../chunks/Bnn5UGat.js";import{C as qe,a as ze}from"../chunks/Cu6-Zy_l.js";import{R as ce}from"../chunks/C8rFwzaR.js";const Ve=!0,pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ve},Symbol.toStringTag,{value:"Module"}));class he{decode(d,e){const{path:s}=e,h=new Map;for(let i=0;i<s.length;i++){const r=s[i].id;if(r.startsWith(R)){const o=r.substring(R.length,r.lastIndexOf("_"));h.has(o)||h.set(o,!0)}else if(r.startsWith(k)){const o=r.substring(k.length,r.lastIndexOf("_"));h.has(o)||h.set(o,!1)}}return new je(h)}}class Be extends Oe{rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(d){super(d);const{variables:e,clauses:s}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=s.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*s.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let d=[];const e=this.createVarGadgets();d.push(...e.interSteps);const s=this.createClauseGadgets(e.graph.copy());return d.push(...s.interSteps),{outInstance:s.graph,steps:d}}createClauseGadgets(d){const{clauses:e}=this.inInstance;let s=[],h=d.copy();return s.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:h,mapping:{}}),e.forEach((i,r)=>{const o=r+1,a=`${o}`,p={id:G+`${a}`,position:{x:2*this.rowXOffset,y:r*this.yStep+this.yOffset},classes:"clause"};h.addNode(p),d.addNode(p),i.literals.forEach(l=>{const f=`${l.varName}_${3*o}`,m=`${l.varName}_${3*o+1}`;l.negated?(d.addEdge({id:u+`${m}-${a}`,from:F+`${m}`,to:G+`${a}`,classes:"false_out"}),d.addEdge({id:u+`${a}-${f}`,from:G+`${a}`,to:F+`${f}`,classes:"false_in"})):(d.addEdge({id:u+`${f}-${a}`,from:F+`${f}`,to:G+`${a}`,classes:"true_out"}),d.addEdge({id:u+`${a}-${m}`,from:G+`${a}`,to:F+`${m}`,classes:"true_in"}))}),s.push({id:`connect-clause-node-${r}`,title:`Connect clause node "${a}" to variable row nodes`,description:`
                    <p>
                        Clause node "${a}" represents the clause ${i.asHtmlString()}.
                    </p>
                    <ul>
                        ${i.literals.map(l=>`
                                <li>
                                    ${l.asHtmlString()}
                                    &hyphen;
                                    ${l.negated?`
                                        because ${l.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${l.varName}_${3*o+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${l.varName}_${3*o}).
                                    `:`
                                        because ${l.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${l.varName}_${3*o})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${l.varName}_${3*o+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:d.copy(),mapping:{}})}),{graph:d,interSteps:s}}createVarGadgets(){const{variables:d}=this.inInstance;let e=new re,s=new re,h=[];return d.forEach((i,r)=>{if(r==0)s.addNode({id:N+T,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"source"}),s.addEdge({id:u+`${T}-${i}_1`,from:N+`${T}`,to:R+`${i}_1`,classes:"muted"}),s.addEdge({id:u+`${T}-${i}_${this.rowNodeCount}`,from:N+`${T}`,to:k+`${i}_${this.rowNodeCount}`,classes:"muted"});else{const o=`${d[r-1]}_${i}`;s.addNode({id:H+`${o}`,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"inbetween"});const a=d[r-1];s.addEdge({id:u+`${a}_1-${o}`,from:R+`${a}_1`,to:H+o,classes:"muted"}),s.addEdge({id:u+`${a}_${this.rowNodeCount}-${o}`,from:k+`${a}_${this.rowNodeCount}`,to:H+o,classes:"muted"}),s.addEdge({id:u+`${o}-${i}_1`,from:H+`${o}`,to:R+`${i}_1`,classes:"muted"}),s.addEdge({id:u+`${o}-${i}_${this.rowNodeCount}`,from:H+`${o}`,to:k+`${i}_${this.rowNodeCount}`,classes:"muted"})}for(let o=1;o<=this.rowNodeCount-1;o++){const a=`${i}_${o}`,p=`${i}_${o+1}`;let l="",f=F,m=F;o==1?(l+=" true",f=R):o==this.rowNodeCount-1?m=k:(o+1)%3==0&&(l+=" guarantee");const W={id:f+`${a}`,position:{x:(o-1)*this.xDist-this.rowXOffset,y:r*this.yDist},classes:l};if(e.addNode(W),s.addNode(W),o==this.rowNodeCount-1){const O={id:m+`${p}`,position:{x:o*this.xDist-this.rowXOffset,y:r*this.yDist},classes:"false"};e.addNode(O),s.addNode(O)}const Y={id:u+`${a}-${p}`,from:f+`${a}`,to:m+`${p}`,classes:"muted"},j={id:u+`${p}-${a}`,from:m+`${p}`,to:f+`${a}`,classes:"muted"};e.addEdge(Y),e.addEdge(j),s.addEdge(Y),s.addEdge(j)}r==d.length-1&&(s.addNode({id:N+D,position:{x:0,y:r*this.yDist+this.yDist/2},classes:"target"}),s.addEdge({id:u+`${i}_1-${D}`,from:R+`${i}_1`,to:N+`${D}`,classes:"muted"}),s.addEdge({id:u+`${i}_${this.rowNodeCount}-${D}`,from:k+`${i}_${this.rowNodeCount}`,to:N+`${D}`,classes:"muted"}),s.addEdge({id:u+`${D}-${T}`,from:N+`${D}`,to:N+`${T}`,classes:"muted"}))}),h.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:e,mapping:{}}),h.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:s,mapping:{}}),{graph:s,interSteps:h}}}function Je(L){return new Worker(""+new URL("../workers/WorkerHCYCLESolver-pJF03Nbo.js",import.meta.url).href,{name:L?.name})}var Ke=P('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Qe=P("<div><!></div> <!> <div><!></div>",1),Ze=P("<span>There are no steps to step through.</span>"),et=P('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),tt=P('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function gt(L,d){be(d,!1);const e=()=>U(p,"$redStore",r),s=()=>U(f,"$isSolving",r),h=()=>U(l,"$showStepper",r),i=()=>U(m,"$solveMessage",r),[r,o]=xe();let a=Fe(Re.LS_3SAT_HCYCLE,new Le),{redStore:p,showStepper:l,isSolving:f,solveMessage:m,editorChanged:W,reduce:Y,solve:j}=Xe({storage:a,workerFactory:()=>new Je,reducerFactory:t=>new Be(t),decoderFactory:()=>new he,createWorkerRequest:t=>({graph:t.toSerializedString()}),resolveWorkerResponse:t=>{const n=t;return Ge(n.type==He.RESULT),new qe(n.path)},onSolveFinished:(t,n)=>{if(n==de){De(p,oe(e).inCert=de,oe(e));return}t.labelSolved({path:n.path,directed:!0,edgeIdUsesNodeIds:!1});const _=new he().decode(t,n);p.update(S=>(S.inCert=_,S.outCert=n,S.outInstance=t,S))}});Ye();var O=tt();Ce(t=>{var n=Ke();Se.title="3SAT to HCYCLE",C(t,n)});var Q=v(I(O),2);Ue(Q,{get cnf(){return e().inInstance},onChange:t=>W(t),onWrongFormat:t=>alert("From editor: "+t)});var M=v(Q,2),q=I(M);q.__click=Y;var X=v(q,2);X.__click=j;var ue=I(X);{var pe=t=>{var n=K("Solving...");C(t,n)},ge=t=>{var n=K("Solve");C(t,n)};w(ue,t=>{s()?t(pe):t(ge,!1)})}y(X);var Z=v(X,2);ke(Z),ne(2),y(M);var ee=v(M,2);{var fe=t=>{Pe(t,{children:(n,$)=>{ne();var _=K();se(()=>Ne(_,i())),C(n,_)}})};w(ee,t=>{s()&&t(fe)})}var me=v(ee,2);{var ve=t=>{const n=ie(()=>e().steps),$=ie(()=>e().stepIndex);var _=Ie(),S=ae(_);{var z=b=>{var x=Qe(),A=ae(x),B=I(A);{var J=g=>{le(g,{get cnf(){return E(n)[E($)].inSnapshot}})};w(B,g=>{E($)<E(n).length&&E(n)[E($)].inSnapshot&&!E(n)[E($)].inSnapshot.isEmpty()&&g(J)})}y(A);var c=v(A,2);We(c,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{p.update(g=>(g.prevStep(),g)),a.save()},onNextClick:()=>{p.update(g=>(g.nextStep(),g)),a.save()}});var te=v(c,2),_e=I(te);{var we=g=>{ce(g,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};w(_e,g=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&g(we)})}y(te),C(b,x)},V=b=>{var x=Ze();C(b,x)};w(S,b=>{E(n).length?b(z):b(V,!1)})}C(t,_)},$e=t=>{var n=et(),$=I(n),_=I($);{var S=c=>{le(c,{get cnf(){return e().inInstance}})};w(_,c=>{e().inInstance&&!e().inInstance.isEmpty()&&c(S)})}var z=v(_,2);{var V=c=>{Me(c,{get cert(){return e().inCert}})};w(z,c=>{e().inCert&&c(V)})}y($);var b=v($,2),x=I(b);{var A=c=>{ce(c,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};w(x,c=>{e().outInstance&&!e().outInstance.isEmpty()&&c(A)})}var B=v(x,2);{var J=c=>{ze(c,{get cert(){return e().outCert}})};w(B,c=>{e().outCert&&c(J)})}y(b),y(n),C(t,n)};w(me,t=>{h()?t(ve):t($e,!1)})}y(O),se((t,n)=>{q.disabled=t,X.disabled=n},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||s(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||s()]),Ae(Z,h,t=>Te(l,t)),C(L,O),Ee(),o()}ye(["click"]);export{gt as component,pt as universal};
