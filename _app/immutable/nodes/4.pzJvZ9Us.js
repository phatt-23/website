import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{p as Ie,f as Y,J as we,d as y,s as v,t as se,b as w,c as _e,$ as Se,u as oe,r as N,K as ne,am as J,an as ye,a as ae,m as _,ac as ie}from"../chunks/0h0eovDe.js";import{d as Ne,s as Ee}from"../chunks/BeBJMhcX.js";import{s as Z,i as $,a as Ae,b as xe,c as De}from"../chunks/E6MyXn9j.js";import{l as Te,r as Ge}from"../chunks/CSnGU0Cu.js";import{k as T,l as G,R as ke,m as X,N as F,E as u,G as re,n as E,o as x,p as L,T as D,u as Fe,a as Re,c as Oe,b as Xe,U as de,d as Le,f as Ye}from"../chunks/DCk9rHG9.js";import{i as He}from"../chunks/DaAev7kg.js";import{C as Be,E as We,R as ce,a as Ze}from"../chunks/BCpjnFsP.js";import{a as Ue}from"../chunks/8Ke2ApCb.js";import{R as le}from"../chunks/YqW4Rh_A.js";const Ve=!0,ct=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ve},Symbol.toStringTag,{value:"Module"}));class he{decode(d,e){const{path:t}=e,h=new Map;for(let a=0;a<t.length;a++){const i=t[a].id;if(i.startsWith(T)){const s=i.substring(T.length,i.lastIndexOf("_"));h.has(s)||h.set(s,!0)}else if(i.startsWith(G)){const s=i.substring(G.length,i.lastIndexOf("_"));h.has(s)||h.set(s,!1)}}return new Be(h)}}class Pe extends ke{rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(d){super(d);const{variables:e,clauses:t}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=t.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*t.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let d=[];const e=this.createVarGadgets();d.push(...e.interSteps);const t=this.createClauseGadgets(e.graph.copy());return d.push(...t.interSteps),{outInstance:t.graph,steps:d}}createClauseGadgets(d){const{clauses:e}=this.inInstance;let t=[],h=d.copy();return t.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:h,mapping:{}}),e.forEach((a,i)=>{const s=i+1,n=`${s}`,g={id:X+`${n}`,position:{x:2*this.rowXOffset,y:i*this.yStep+this.yOffset},classes:"clause"};h.addNode(g),d.addNode(g),a.literals.forEach(c=>{const f=`${c.varName}_${3*s}`,m=`${c.varName}_${3*s+1}`;c.negated?(d.addEdge({id:u+`${m}-${n}`,from:F+`${m}`,to:X+`${n}`,classes:"false_out"}),d.addEdge({id:u+`${n}-${f}`,from:X+`${n}`,to:F+`${f}`,classes:"false_in"})):(d.addEdge({id:u+`${f}-${n}`,from:F+`${f}`,to:X+`${n}`,classes:"true_out"}),d.addEdge({id:u+`${n}-${m}`,from:X+`${n}`,to:F+`${m}`,classes:"true_in"}))}),t.push({id:`connect-clause-node-${i}`,title:`Connect clause node "${n}" to variable row nodes`,description:`
                    <p>
                        Clause node "${n}" represents the clause ${a.asHtmlString()}.
                    </p>
                    <ul>
                        ${a.literals.map(c=>`
                                <li>
                                    ${c.asHtmlString()}
                                    &hyphen;
                                    ${c.negated?`
                                        because ${c.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${c.varName}_${3*s+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${c.varName}_${3*s}).
                                    `:`
                                        because ${c.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${c.varName}_${3*s})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${c.varName}_${3*s+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:d.copy(),mapping:{}})}),{graph:d,interSteps:t}}createVarGadgets(){const{variables:d}=this.inInstance;let e=new re,t=new re,h=[];return d.forEach((a,i)=>{if(i==0)t.addNode({id:E+x,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"source"}),t.addEdge({id:u+`${x}-${a}_1`,from:E+`${x}`,to:T+`${a}_1`,classes:"muted"}),t.addEdge({id:u+`${x}-${a}_${this.rowNodeCount}`,from:E+`${x}`,to:G+`${a}_${this.rowNodeCount}`,classes:"muted"});else{const s=`${d[i-1]}_${a}`;t.addNode({id:L+`${s}`,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"inbetween"});const n=d[i-1];t.addEdge({id:u+`${n}_1-${s}`,from:T+`${n}_1`,to:L+s,classes:"muted"}),t.addEdge({id:u+`${n}_${this.rowNodeCount}-${s}`,from:G+`${n}_${this.rowNodeCount}`,to:L+s,classes:"muted"}),t.addEdge({id:u+`${s}-${a}_1`,from:L+`${s}`,to:T+`${a}_1`,classes:"muted"}),t.addEdge({id:u+`${s}-${a}_${this.rowNodeCount}`,from:L+`${s}`,to:G+`${a}_${this.rowNodeCount}`,classes:"muted"})}for(let s=1;s<=this.rowNodeCount-1;s++){const n=`${a}_${s}`,g=`${a}_${s+1}`;let c="",f=F,m=F;s==1?(c+=" true",f=T):s==this.rowNodeCount-1?m=G:(s+1)%3==0&&(c+=" guarantee");const H={id:f+`${n}`,position:{x:(s-1)*this.xDist-this.rowXOffset,y:i*this.yDist},classes:c};if(e.addNode(H),t.addNode(H),s==this.rowNodeCount-1){const k={id:m+`${g}`,position:{x:s*this.xDist-this.rowXOffset,y:i*this.yDist},classes:"false"};e.addNode(k),t.addNode(k)}const B={id:u+`${n}-${g}`,from:f+`${n}`,to:m+`${g}`,classes:"muted"},W={id:u+`${g}-${n}`,from:m+`${g}`,to:f+`${n}`,classes:"muted"};e.addEdge(B),e.addEdge(W),t.addEdge(B),t.addEdge(W)}i==d.length-1&&(t.addNode({id:E+D,position:{x:0,y:i*this.yDist+this.yDist/2},classes:"target"}),t.addEdge({id:u+`${a}_1-${D}`,from:T+`${a}_1`,to:E+`${D}`,classes:"muted"}),t.addEdge({id:u+`${a}_${this.rowNodeCount}-${D}`,from:G+`${a}_${this.rowNodeCount}`,to:E+`${D}`,classes:"muted"}),t.addEdge({id:u+`${D}-${x}`,from:E+`${D}`,to:E+`${x}`,classes:"muted"}))}),h.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t,mapping:{}}),{graph:t,interSteps:h}}}var ze=Y('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Ke=Y("<div><!></div> <!> <div><!></div>",1),Me=Y("<span>There are no steps to step through.</span>"),je=Y('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),Je=Y('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function lt(U,d){Ie(d,!1);const e=()=>Z(g,"$redStore",i),t=()=>Z(f,"$isSolving",i),h=()=>Z(c,"$showStepper",i),a=()=>Z(m,"$solveMessage",i),[i,s]=Ae();let n=Fe(Te.LS_3SAT_HCYCLE,new Re),{redStore:g,showStepper:c,isSolving:f,solveMessage:m,editorChanged:H,reduce:B,solve:W}=Oe({storage:n,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMC8xMC8yMDI1CgppbXBvcnQgeyBTb2x2ZXJIQ1lDTEUgfSBmcm9tICIkbGliL3NvbHZlL1NvbHZlckhDWUNMRSI7CmltcG9ydCB7IFVuc29sdmFibGUgfSBmcm9tICIkbGliL2NvcmUvVW5zb2x2YWJsZSI7CmltcG9ydCB7IEdyYXBoIH0gZnJvbSAiJGxpYi9pbnN0YW5jZS9HcmFwaCI7CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7CiAgICB0cnkgewogICAgICAgIGNvbnNvbGUuZGVidWcoJ1dvcmtlckhDWUNMRVNvbHZlcjo6b25tZXNzYWdlJyk7CgogICAgICAgIGNvbnN0IGluc3RhbmNlOiBHcmFwaCA9IEdyYXBoLmZyb21TZXJpYWxpemVkU3RyaW5nKGUuZGF0YSk7CiAgICAgICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlckhDWUNMRShpbnN0YW5jZSk7CiAgICAgICAgY29uc3QgcmVzdWx0ID0gc29sdmVyLnNvbHZlKCk7CiAgICAgICAgcG9zdE1lc3NhZ2UocmVzdWx0IHx8IFVuc29sdmFibGUpOwogICAgfQogICAgY2F0Y2ggKGUpIHsKICAgICAgICBwb3N0TWVzc2FnZSh7CiAgICAgICAgICAgIGVycm9yOiB0cnVlLAogICAgICAgICAgICBtZXNzYWdlOiBlIGluc3RhbmNlb2YgRXJyb3IgPyBlLm1lc3NhZ2UgOiBTdHJpbmcoZSkKICAgICAgICB9KTsKICAgIH0KfTsK",import.meta.url),reducerFactory:o=>new Pe(o),decoderFactory:()=>new he,onSolveFinished:(o,r)=>{if(r==de){De(g,oe(e).inCert=de,oe(e));return}o.labelSolved({path:r.path,directed:!0,edgeIdUsesNodeIds:!1});const C=new he().decode(o,r);g.update(S=>(S.inCert=C,S.outCert=r,S.outInstance=o,S))}});He();var k=Je();we(o=>{var r=ze();Se.title="3SAT to HCYCLE",w(o,r)});var Q=v(y(k),2);We(Q,{get cnf(){return e().inInstance},onChange:o=>H(o),onWrongFormat:o=>alert("From editor: "+o)});var V=v(Q,2),P=y(V);P.__click=B;var R=v(P,2);R.__click=W;var ue=y(R);{var ge=o=>{var r=J("Solving...");w(o,r)},pe=o=>{var r=J("Solve");w(o,r)};$(ue,o=>{t()?o(ge):o(pe,!1)})}N(R);var q=v(R,2);Ge(q),ne(2),N(V);var ee=v(V,2);{var fe=o=>{Le(o,{children:(r,b)=>{ne();var C=J();se(()=>Ee(C,a())),w(r,C)}})};$(ee,o=>{t()&&o(fe)})}var me=v(ee,2);{var ve=o=>{const r=ie(()=>e().steps),b=ie(()=>e().stepIndex);var C=ye(),S=ae(C);{var z=I=>{var A=Ke(),O=ae(A),M=y(O);{var j=p=>{ce(p,{get cnf(){return _(r)[_(b)].inSnapshot}})};$(M,p=>{_(b)<_(r).length&&_(r)[_(b)].inSnapshot&&!_(r)[_(b)].inSnapshot.isEmpty()&&p(j)})}N(O);var l=v(O,2);Ye(l,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{g.update(p=>(p.prevStep(),p)),n.save()},onNextClick:()=>{g.update(p=>(p.nextStep(),p)),n.save()}});var te=v(l,2),Ce=y(te);{var $e=p=>{le(p,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};$(Ce,p=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&p($e)})}N(te),w(I,A)},K=I=>{var A=Me();w(I,A)};$(S,I=>{_(r).length?I(z):I(K,!1)})}w(o,C)},be=o=>{var r=je(),b=y(r),C=y(b);{var S=l=>{ce(l,{get cnf(){return e().inInstance}})};$(C,l=>{e().inInstance&&!e().inInstance.isEmpty()&&l(S)})}var z=v(C,2);{var K=l=>{Ze(l,{get cert(){return e().inCert}})};$(z,l=>{e().inCert&&l(K)})}N(b);var I=v(b,2),A=y(I);{var O=l=>{le(l,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};$(A,l=>{e().outInstance&&!e().outInstance.isEmpty()&&l(O)})}var M=v(A,2);{var j=l=>{Ue(l,{get cert(){return e().outCert}})};$(M,l=>{e().outCert&&l(j)})}N(I),N(r),w(o,r)};$(me,o=>{h()?o(ve):o(be,!1)})}N(k),se((o,r)=>{P.disabled=o,R.disabled=r},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||t(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||t()]),Xe(q,h,o=>xe(c,o)),w(U,k),_e(),s()}Ne(["click"]);export{lt as component,ct as universal};
