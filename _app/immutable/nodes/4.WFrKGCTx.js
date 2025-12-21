import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{p as _e,f as H,J as Ce,d as y,s as v,t as se,b as C,c as Ie,$ as Se,u as oe,r as E,K as ne,am as K,an as ye,a as ae,m as I,ac as ie}from"../chunks/0h0eovDe.js";import{d as Ee,s as Ne}from"../chunks/BeBJMhcX.js";import{s as B,i as w,a as xe,b as Te,c as De}from"../chunks/E6MyXn9j.js";import{l as Re,r as Fe}from"../chunks/CSnGU0Cu.js";import{k as R,l as F,R as ke,m as O,N as G,E as u,G as re,n as N,o as T,p as L,T as D,u as Ge,a as Xe,c as Ae,b as Oe,U as de,d as Le,f as He}from"../chunks/C6qEDlbA.js";import{i as Ye}from"../chunks/DaAev7kg.js";import{C as We,E as Ze,R as le,a as Be}from"../chunks/CcRITlvi.js";import{a as Pe}from"../chunks/DrV4eIYw.js";import{R as ce}from"../chunks/Bnlbtspj.js";const Ue=!0,lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ue},Symbol.toStringTag,{value:"Module"}));class he{decode(d,e){const{path:t}=e,h=new Map;for(let a=0;a<t.length;a++){const i=t[a].id;if(i.startsWith(R)){const s=i.substring(R.length,i.lastIndexOf("_"));h.has(s)||h.set(s,!0)}else if(i.startsWith(F)){const s=i.substring(F.length,i.lastIndexOf("_"));h.has(s)||h.set(s,!1)}}return new We(h)}}class je extends ke{rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(d){super(d);const{variables:e,clauses:t}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=t.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*t.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let d=[];const e=this.createVarGadgets();d.push(...e.interSteps);const t=this.createClauseGadgets(e.graph.copy());return d.push(...t.interSteps),{outInstance:t.graph,steps:d}}createClauseGadgets(d){const{clauses:e}=this.inInstance;let t=[],h=d.copy();return t.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:h,mapping:{}}),e.forEach((a,i)=>{const s=i+1,n=`${s}`,p={id:O+`${n}`,position:{x:2*this.rowXOffset,y:i*this.yStep+this.yOffset},classes:"clause"};h.addNode(p),d.addNode(p),a.literals.forEach(l=>{const f=`${l.varName}_${3*s}`,m=`${l.varName}_${3*s+1}`;l.negated?(d.addEdge({id:u+`${m}-${n}`,from:G+`${m}`,to:O+`${n}`,classes:"false_out"}),d.addEdge({id:u+`${n}-${f}`,from:O+`${n}`,to:G+`${f}`,classes:"false_in"})):(d.addEdge({id:u+`${f}-${n}`,from:G+`${f}`,to:O+`${n}`,classes:"true_out"}),d.addEdge({id:u+`${n}-${m}`,from:O+`${n}`,to:G+`${m}`,classes:"true_in"}))}),t.push({id:`connect-clause-node-${i}`,title:`Connect clause node "${n}" to variable row nodes`,description:`
                    <p>
                        Clause node "${n}" represents the clause ${a.asHtmlString()}.
                    </p>
                    <ul>
                        ${a.literals.map(l=>`
                                <li>
                                    ${l.asHtmlString()}
                                    &hyphen;
                                    ${l.negated?`
                                        because ${l.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${l.varName}_${3*s+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${l.varName}_${3*s}).
                                    `:`
                                        because ${l.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${l.varName}_${3*s})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${l.varName}_${3*s+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:d.copy(),mapping:{}})}),{graph:d,interSteps:t}}createVarGadgets(){const{variables:d}=this.inInstance;let e=new re,t=new re,h=[];return d.forEach((a,i)=>{if(i==0)t.addNode({id:N+T,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"source"}),t.addEdge({id:u+`${T}-${a}_1`,from:N+`${T}`,to:R+`${a}_1`,classes:"muted"}),t.addEdge({id:u+`${T}-${a}_${this.rowNodeCount}`,from:N+`${T}`,to:F+`${a}_${this.rowNodeCount}`,classes:"muted"});else{const s=`${d[i-1]}_${a}`;t.addNode({id:L+`${s}`,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"inbetween"});const n=d[i-1];t.addEdge({id:u+`${n}_1-${s}`,from:R+`${n}_1`,to:L+s,classes:"muted"}),t.addEdge({id:u+`${n}_${this.rowNodeCount}-${s}`,from:F+`${n}_${this.rowNodeCount}`,to:L+s,classes:"muted"}),t.addEdge({id:u+`${s}-${a}_1`,from:L+`${s}`,to:R+`${a}_1`,classes:"muted"}),t.addEdge({id:u+`${s}-${a}_${this.rowNodeCount}`,from:L+`${s}`,to:F+`${a}_${this.rowNodeCount}`,classes:"muted"})}for(let s=1;s<=this.rowNodeCount-1;s++){const n=`${a}_${s}`,p=`${a}_${s+1}`;let l="",f=G,m=G;s==1?(l+=" true",f=R):s==this.rowNodeCount-1?m=F:(s+1)%3==0&&(l+=" guarantee");const Y={id:f+`${n}`,position:{x:(s-1)*this.xDist-this.rowXOffset,y:i*this.yDist},classes:l};if(e.addNode(Y),t.addNode(Y),s==this.rowNodeCount-1){const k={id:m+`${p}`,position:{x:s*this.xDist-this.rowXOffset,y:i*this.yDist},classes:"false"};e.addNode(k),t.addNode(k)}const W={id:u+`${n}-${p}`,from:f+`${n}`,to:m+`${p}`,classes:"muted"},Z={id:u+`${p}-${n}`,from:m+`${p}`,to:f+`${n}`,classes:"muted"};e.addEdge(W),e.addEdge(Z),t.addEdge(W),t.addEdge(Z)}i==d.length-1&&(t.addNode({id:N+D,position:{x:0,y:i*this.yDist+this.yDist/2},classes:"target"}),t.addEdge({id:u+`${a}_1-${D}`,from:R+`${a}_1`,to:N+`${D}`,classes:"muted"}),t.addEdge({id:u+`${a}_${this.rowNodeCount}-${D}`,from:F+`${a}_${this.rowNodeCount}`,to:N+`${D}`,classes:"muted"}),t.addEdge({id:u+`${D}-${T}`,from:N+`${D}`,to:N+`${T}`,classes:"muted"}))}),h.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t,mapping:{}}),{graph:t,interSteps:h}}}var ze=H('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Je=H("<div><!></div> <!> <div><!></div>",1),Ve=H("<span>There are no steps to step through.</span>"),Me=H('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),Ke=H('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function ct(P,d){_e(d,!1);const e=()=>B(p,"$redStore",i),t=()=>B(f,"$isSolving",i),h=()=>B(l,"$showStepper",i),a=()=>B(m,"$solveMessage",i),[i,s]=xe();let n=Ge(Re.LS_3SAT_HCYCLE,new Xe),{redStore:p,showStepper:l,isSolving:f,solveMessage:m,editorChanged:Y,reduce:W,solve:Z}=Ae({storage:n,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMC8xMC8yMDI1CgppbXBvcnQgeyBTb2x2ZXJIQ1lDTEUgfSBmcm9tICIkbGliL3NvbHZlL1NvbHZlckhDWUNMRSI7CmltcG9ydCB7IFVuc29sdmFibGUgfSBmcm9tICIkbGliL2NvcmUvVW5zb2x2YWJsZSI7CmltcG9ydCB7IEdyYXBoIH0gZnJvbSAiJGxpYi9pbnN0YW5jZS9HcmFwaCI7CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7CiAgICBjb25zdCBpbnN0YW5jZSA6IEdyYXBoID0gR3JhcGguZnJvbVNlcmlhbGl6ZWRTdHJpbmcoZS5kYXRhKTsKICAgIGNvbnN0IHNvbHZlciA9IG5ldyBTb2x2ZXJIQ1lDTEUoaW5zdGFuY2UpOwogICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7CiAgICBwb3N0TWVzc2FnZShyZXN1bHQgfHwgVW5zb2x2YWJsZSk7Cn07",import.meta.url),reducerFactory:o=>new je(o),decoderFactory:()=>new he,onSolveFinished:(o,r)=>{if(r==de){De(p,oe(e).inCert=de,oe(e));return}o.labelSolved({path:r.path,directed:!0,edgeIdUsesNodeIds:!1});const $=new he().decode(o,r);p.update(S=>(S.inCert=$,S.outCert=r,S.outInstance=o,S))}});Ye();var k=Ke();Ce(o=>{var r=ze();Se.title="3SAT to HCYCLE",C(o,r)});var Q=v(y(k),2);Ze(Q,{get cnf(){return e().inInstance},onChange:o=>Y(o),onWrongFormat:o=>alert("From editor: "+o)});var U=v(Q,2),j=y(U);j.__click=W;var X=v(j,2);X.__click=Z;var ue=y(X);{var pe=o=>{var r=K("Solving...");C(o,r)},ge=o=>{var r=K("Solve");C(o,r)};w(ue,o=>{t()?o(pe):o(ge,!1)})}E(X);var q=v(X,2);Fe(q),ne(2),E(U);var ee=v(U,2);{var fe=o=>{Le(o,{children:(r,b)=>{ne();var $=K();se(()=>Ne($,a())),C(r,$)}})};w(ee,o=>{t()&&o(fe)})}var me=v(ee,2);{var ve=o=>{const r=ie(()=>e().steps),b=ie(()=>e().stepIndex);var $=ye(),S=ae($);{var z=_=>{var x=Je(),A=ae(x),V=y(A);{var M=g=>{le(g,{get cnf(){return I(r)[I(b)].inSnapshot}})};w(V,g=>{I(b)<I(r).length&&I(r)[I(b)].inSnapshot&&!I(r)[I(b)].inSnapshot.isEmpty()&&g(M)})}E(A);var c=v(A,2);He(c,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{p.update(g=>(g.prevStep(),g)),n.save()},onNextClick:()=>{p.update(g=>(g.nextStep(),g)),n.save()}});var te=v(c,2),$e=y(te);{var we=g=>{ce(g,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};w($e,g=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&g(we)})}E(te),C(_,x)},J=_=>{var x=Ve();C(_,x)};w(S,_=>{I(r).length?_(z):_(J,!1)})}C(o,$)},be=o=>{var r=Me(),b=y(r),$=y(b);{var S=c=>{le(c,{get cnf(){return e().inInstance}})};w($,c=>{e().inInstance&&!e().inInstance.isEmpty()&&c(S)})}var z=v($,2);{var J=c=>{Be(c,{get cert(){return e().inCert}})};w(z,c=>{e().inCert&&c(J)})}E(b);var _=v(b,2),x=y(_);{var A=c=>{ce(c,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};w(x,c=>{e().outInstance&&!e().outInstance.isEmpty()&&c(A)})}var V=v(x,2);{var M=c=>{Pe(c,{get cert(){return e().outCert}})};w(V,c=>{e().outCert&&c(M)})}E(_),E(r),C(o,r)};w(me,o=>{h()?o(ve):o(be,!1)})}E(k),se((o,r)=>{j.disabled=o,X.disabled=r},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||t(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||t()]),Oe(q,h,o=>Te(l,o)),C(P,k),Ie(),s()}Ee(["click"]);export{ct as component,lt as universal};
