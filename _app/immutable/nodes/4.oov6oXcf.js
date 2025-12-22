import"../chunks/DsnmJJEf.js";import"../chunks/7c8ahxPy.js";import{p as be,f as P,J as Ce,d as y,s as m,t as se,b as C,c as Ee,$ as Se,u as oe,r as I,K as ne,an as J,ao as ye,a as ae,m as E,ac as ie}from"../chunks/BHy43uIv.js";import{d as Ie,s as Ne}from"../chunks/Bo-e_C1i.js";import{s as U,i as w,a as xe,b as De,c as Te}from"../chunks/lPMcd3W4.js";import{l as ke,r as Re}from"../chunks/hAUU4et8.js";import{N as k,d as R,R as Oe,f as G,g as F,E as u,G as re,h as N,j as D,k as H,T,u as Fe,l as Le,m as Xe,b as Ae,U as de,n as Ge,W as He,o as Pe,p as We}from"../chunks/4Tn6J3At.js";import{i as Ye}from"../chunks/Bic1S2_H.js";import{C as je,E as Ue,R as ce,a as Me}from"../chunks/mHvT6OSO.js";import{C as qe,a as ze}from"../chunks/BjtV0G3U.js";import{R as le}from"../chunks/eBivCHW5.js";const Ve=!0,pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ve},Symbol.toStringTag,{value:"Module"}));class he{decode(d,e){const{path:o}=e,h=new Map;for(let i=0;i<o.length;i++){const r=o[i].id;if(r.startsWith(k)){const t=r.substring(k.length,r.lastIndexOf("_"));h.has(t)||h.set(t,!0)}else if(r.startsWith(R)){const t=r.substring(R.length,r.lastIndexOf("_"));h.has(t)||h.set(t,!1)}}return new je(h)}}class Be extends Oe{rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(d){super(d);const{variables:e,clauses:o}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=o.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*o.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let d=[];const e=this.createVarGadgets(),o=this.createClauseGadgets(e.graph.copy());return d.push(...e.interSteps),d.push(...o.interSteps),{outInstance:o.graph,steps:d}}createClauseGadgets(d){const{clauses:e}=this.inInstance;let o=[],h=d.copy();return e.forEach((i,r)=>{const t=r+1,a=`${t}`,p={id:G+`${a}`,position:{x:2*this.rowXOffset,y:r*this.yStep+this.yOffset},classes:"clause"};h.addNode(p),d.addNode(p),i.literals.forEach(c=>{const f=`${c.varName}_${3*t}`,v=`${c.varName}_${3*t+1}`;c.negated?(d.addEdge({id:u+`${v}-${a}`,from:F+`${v}`,to:G+`${a}`,classes:"false_out"}),d.addEdge({id:u+`${a}-${f}`,from:G+`${a}`,to:F+`${f}`,classes:"false_in"})):(d.addEdge({id:u+`${f}-${a}`,from:F+`${f}`,to:G+`${a}`,classes:"true_out"}),d.addEdge({id:u+`${a}-${v}`,from:G+`${a}`,to:F+`${v}`,classes:"true_in"}))}),o.push({id:`connect-clause-node-${r}`,title:`Connect clause node "${a}" to variable row nodes`,description:`
                    <p>
                        Clause node "${a}" represents the clause ${i.asHtmlString()}.
                    </p>
                    <ul>
                        ${i.literals.map(c=>`
                                <li>
                                    ${c.asHtmlString()}
                                    &hyphen;
                                    ${c.negated?`
                                        because ${c.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${c.varName}_${3*t+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${c.varName}_${3*t}).
                                    `:`
                                        because ${c.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${c.varName}_${3*t})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${c.varName}_${3*t+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:d.copy()})}),o.unshift({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:h.copy()}),{graph:d,interSteps:o}}createVarGadgets(){const{variables:d}=this.inInstance;let e=new re,o=new re,h=[];return d.forEach((i,r)=>{if(r==0)o.addNode({id:N+D,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"source"}),o.addEdge({id:u+`${D}-${i}_1`,from:N+`${D}`,to:k+`${i}_1`,classes:"muted"}),o.addEdge({id:u+`${D}-${i}_${this.rowNodeCount}`,from:N+`${D}`,to:R+`${i}_${this.rowNodeCount}`,classes:"muted"});else{const t=`${d[r-1]}_${i}`;o.addNode({id:H+`${t}`,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"inbetween"});const a=d[r-1];o.addEdge({id:u+`${a}_1-${t}`,from:k+`${a}_1`,to:H+t,classes:"muted"}),o.addEdge({id:u+`${a}_${this.rowNodeCount}-${t}`,from:R+`${a}_${this.rowNodeCount}`,to:H+t,classes:"muted"}),o.addEdge({id:u+`${t}-${i}_1`,from:H+`${t}`,to:k+`${i}_1`,classes:"muted"}),o.addEdge({id:u+`${t}-${i}_${this.rowNodeCount}`,from:H+`${t}`,to:R+`${i}_${this.rowNodeCount}`,classes:"muted"})}for(let t=1;t<=this.rowNodeCount-1;t++){const a=`${i}_${t}`,p=`${i}_${t+1}`;let c="",f=F,v=F;t==1?(c+=" true",f=k):t==this.rowNodeCount-1?v=R:(t+1)%3==0&&(c+=" guarantee");const W={id:f+`${a}`,position:{x:(t-1)*this.xDist-this.rowXOffset,y:r*this.yDist},classes:c};if(e.addNode(W),o.addNode(W),t==this.rowNodeCount-1){const O={id:v+`${p}`,position:{x:t*this.xDist-this.rowXOffset,y:r*this.yDist},classes:"false"};e.addNode(O),o.addNode(O)}const Y={id:u+`${a}-${p}`,from:f+`${a}`,to:v+`${p}`,classes:"muted"},j={id:u+`${p}-${a}`,from:v+`${p}`,to:f+`${a}`,classes:"muted"};e.addEdge(Y),e.addEdge(j),o.addEdge(Y),o.addEdge(j)}if(r==d.length-1){o.addNode({id:N+T,position:{x:0,y:r*this.yDist+this.yDist/2},classes:"target"}),o.addEdge({id:u+`${i}_1-${T}`,from:k+`${i}_1`,to:N+`${T}`,classes:"muted"}),o.addEdge({id:u+`${i}_${this.rowNodeCount}-${T}`,from:R+`${i}_${this.rowNodeCount}`,to:N+`${T}`,classes:"muted"});const t=-((this.rowNodeCount/2+1)*this.xDist);o.addEdge({id:u+`${T}-${D}`,from:N+`${T}`,to:N+`${D}`,classes:"muted target-to-source",controlPointDistances:[t,t]})}}),h.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()}),h.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:o.copy()}),{graph:o,interSteps:h}}}function Ke(L){return new Worker(""+new URL("../workers/WorkerHCYCLESolver-ChkFCcH_.js",import.meta.url).href,{name:L?.name})}var Je=P('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Qe=P("<div><!></div> <!> <div><!></div>",1),Ze=P("<span>There are no steps to step through.</span>"),et=P('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),tt=P('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function gt(L,d){be(d,!1);const e=()=>U(p,"$redStore",r),o=()=>U(f,"$isSolving",r),h=()=>U(c,"$showStepper",r),i=()=>U(v,"$solveMessage",r),[r,t]=xe();let a=Fe(ke.LS_3SAT_HCYCLE,new Le),{redStore:p,showStepper:c,isSolving:f,solveMessage:v,editorChanged:W,reduce:Y,solve:j}=Xe({storage:a,workerFactory:()=>new Ke,reducerFactory:s=>new Be(s),decoderFactory:()=>new he,createWorkerRequest:s=>({graph:s.toSerializedString()}),resolveWorkerResponse:s=>{const n=s;return Ge(n.type==He.RESULT),new qe(n.path)},onSolveFinished:(s,n)=>{if(n==de){Te(p,oe(e).inCert=de,oe(e));return}s.labelSolved({path:n.path,directed:!0,edgeIdUsesNodeIds:!1});const _=new he().decode(s,n);p.update(S=>(S.inCert=_,S.outCert=n,S.outInstance=s,S))}});Ye();var O=tt();Ce(s=>{var n=Je();Se.title="3SAT to HCYCLE",C(s,n)});var Q=m(y(O),2);Ue(Q,{get cnf(){return e().inInstance},onChange:s=>W(s),onWrongFormat:s=>alert("From editor: "+s)});var M=m(Q,2),q=y(M);q.__click=Y;var X=m(q,2);X.__click=j;var ue=y(X);{var pe=s=>{var n=J("Solving...");C(s,n)},ge=s=>{var n=J("Solve");C(s,n)};w(ue,s=>{o()?s(pe):s(ge,!1)})}I(X);var Z=m(X,2);Re(Z),ne(2),I(M);var ee=m(M,2);{var fe=s=>{Pe(s,{children:(n,$)=>{ne();var _=J();se(()=>Ne(_,i())),C(n,_)}})};w(ee,s=>{o()&&s(fe)})}var ve=m(ee,2);{var me=s=>{const n=ie(()=>e().steps),$=ie(()=>e().stepIndex);var _=ye(),S=ae(_);{var z=b=>{var x=Qe(),A=ae(x),B=y(A);{var K=g=>{ce(g,{get cnf(){return E(n)[E($)].inSnapshot}})};w(B,g=>{E($)<E(n).length&&E(n)[E($)].inSnapshot&&!E(n)[E($)].inSnapshot.isEmpty()&&g(K)})}I(A);var l=m(A,2);We(l,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{p.update(g=>(g.prevStep(),g)),a.save()},onNextClick:()=>{p.update(g=>(g.nextStep(),g)),a.save()}});var te=m(l,2),_e=y(te);{var we=g=>{le(g,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};w(_e,g=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&g(we)})}I(te),C(b,x)},V=b=>{var x=Ze();C(b,x)};w(S,b=>{E(n).length?b(z):b(V,!1)})}C(s,_)},$e=s=>{var n=et(),$=y(n),_=y($);{var S=l=>{ce(l,{get cnf(){return e().inInstance}})};w(_,l=>{e().inInstance&&!e().inInstance.isEmpty()&&l(S)})}var z=m(_,2);{var V=l=>{Me(l,{get cert(){return e().inCert}})};w(z,l=>{e().inCert&&l(V)})}I($);var b=m($,2),x=y(b);{var A=l=>{le(l,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};w(x,l=>{e().outInstance&&!e().outInstance.isEmpty()&&l(A)})}var B=m(x,2);{var K=l=>{ze(l,{get cert(){return e().outCert}})};w(B,l=>{e().outCert&&l(K)})}I(b),I(n),C(s,n)};w(ve,s=>{h()?s(me):s($e,!1)})}I(O),se((s,n)=>{q.disabled=s,X.disabled=n},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||o(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||o()]),Ae(Z,h,s=>De(c,s)),C(L,O),Ee(),t()}Ie(["click"]);export{gt as component,pt as universal};
