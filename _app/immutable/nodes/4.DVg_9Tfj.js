import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{p as Z,f as w,K as ee,b as m,c as te,$ as oe,h as W,d as j,s as G,r as U,a as M,a9 as y}from"../chunks/DWngNMqy.js";import{i as se,s as ae,a as z,c as ne}from"../chunks/Cy94KniK.js";import{i as ie}from"../chunks/BwlNufZT.js";import{C as re,E as de,a as ce,R as le}from"../chunks/WbgQ2lHM.js";import{C as he}from"../chunks/Ba_mITra.js";import{R as q}from"../chunks/D5S11tbA.js";import{R as ue,N as X,d as L,E as h,G as V,f as C,g as N,h as T,j as D,l as A,T as I,u as pe,m as $e,n as ge,o as fe,U as B,p as me,W as we,q as be,O as Ce,I as _e}from"../chunks/C4ZxoCtr.js";import{C as ve}from"../chunks/Do9HnFH2.js";import{l as Ee}from"../chunks/uXYcvkjH.js";const Se=!0,qe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Se},Symbol.toStringTag,{value:"Module"}));class ye extends ue{rowNodeCount;rowXOffset;varCount;clauseCount;clauseHeight;varHeight;yStep;yOffset;xDist=50;yDist=300;constructor(n){super(n);const{variables:c,clauses:t}=this.inInstance;this.varCount=c.length,this.clauseCount=t.length,this.clauseHeight=(this.clauseCount-.5)*this.yDist,this.varHeight=(this.varCount-1)*this.yDist,this.yStep=this.clauseHeight/Math.max(1,this.clauseCount-1),this.yOffset=(this.varHeight-this.clauseHeight)/2,this.rowNodeCount=3*t.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let n=[];const c=this.createVarGadgets(),t=this.createClauseGadgets(c.graph.copy());return n.push(...c.interSteps),n.push(...t.interSteps),{outInstance:t.graph,steps:n}}createClauseGadgets(n){const{clauses:c}=this.inInstance;let t=[],l=n.copy();return c.forEach((s,a)=>{const e=a+1,o=`${e}`,_={id:X+`${o}`,label:`\\kappa_{${e}}`,position:{x:2*this.rowXOffset,y:a*this.yStep+this.yOffset},classes:"clause"};l.addNode(_),n.addNode(_),s.literals.forEach(r=>{const b=`${r.varName}_${3*e}`,p=`${r.varName}_${3*e+1}`;r.negated?(n.addEdge({id:h+`${p}-${o}`,from:L+`${p}`,to:X+`${o}`,classes:"false_out"}),n.addEdge({id:h+`${o}-${b}`,from:X+`${o}`,to:L+`${b}`,classes:"false_in"})):(n.addEdge({id:h+`${b}-${o}`,from:L+`${b}`,to:X+`${o}`,classes:"true_out"}),n.addEdge({id:h+`${o}-${p}`,from:X+`${o}`,to:L+`${p}`,classes:"true_in"}))}),t.push({id:`connect-clause-node-${a}`,title:`Connect clause node "${o}" to variable row nodes`,description:`
                    <p>
                        Clause node "${o}" represents the clause ${s.asHtmlString()}.
                    </p>
                    <ul>
                        ${s.literals.map(r=>`
                                <li>
                                    ${r.asHtmlString()}
                                    &hyphen;
                                    ${r.negated?`
                                        because ${r.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${r.varName}_${3*e+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${r.varName}_${3*e}).
                                    `:`
                                        because ${r.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${r.varName}_${3*e})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${r.varName}_${3*e+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:n.copy()})}),t.unshift({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:l.copy()}),{graph:n,interSteps:t}}createVarGadgets(){const{variables:n}=this.inInstance;let c=new V,t=new V,l=[];return n.forEach((s,a)=>{if(a==0)t.addNode({id:C+N,label:"\\alpha",position:{x:0,y:a*this.yDist-this.yDist/2},classes:"source"}),t.addEdge({id:h+`${N}-${s}_1`,from:C+`${N}`,to:T+`${s}_1`,classes:"muted"}),t.addEdge({id:h+`${N}-${s}_${this.rowNodeCount}`,from:C+`${N}`,to:D+`${s}_${this.rowNodeCount}`,classes:"muted"});else{const e=`${n[a-1]}_${s}`;t.addNode({id:A+`${e}`,label:`(${n[a-1]}, ${s})`,position:{x:0,y:a*this.yDist-this.yDist/2},classes:"inbetween"});const o=n[a-1];t.addEdge({id:h+`${o}_1-${e}`,from:T+`${o}_1`,to:A+e,classes:"muted"}),t.addEdge({id:h+`${o}_${this.rowNodeCount}-${e}`,from:D+`${o}_${this.rowNodeCount}`,to:A+e,classes:"muted"}),t.addEdge({id:h+`${e}-${s}_1`,from:A+`${e}`,to:T+`${s}_1`,classes:"muted"}),t.addEdge({id:h+`${e}-${s}_${this.rowNodeCount}`,from:A+`${e}`,to:D+`${s}_${this.rowNodeCount}`,classes:"muted"})}for(let e=1;e<=this.rowNodeCount-1;e++){const o=`${s}_${e}`,_=`${s}_{${e}}`,r=`${s}_${e+1}`,b=`${s}_{${e+1}}`;let p="",R=L,O=L;e==1?(p+=" true",R=T):e==this.rowNodeCount-1?O=D:(e+1)%3==0&&(p+=" guarantee");const x={id:R+o,label:_,position:{x:(e-1)*this.xDist-this.rowXOffset,y:a*this.yDist},classes:p};if(c.addNode(x),t.addNode(x),e==this.rowNodeCount-1){const P={id:O+r,label:b,position:{x:e*this.xDist-this.rowXOffset,y:a*this.yDist},classes:"false"};c.addNode(P),t.addNode(P)}const k={id:h+`${o}-${r}`,from:R+`${o}`,to:O+`${r}`,classes:"muted"},F={id:h+`${r}-${o}`,from:O+`${r}`,to:R+`${o}`,classes:"muted"};c.addEdge(k),c.addEdge(F),t.addEdge(k),t.addEdge(F)}if(a==n.length-1){t.addNode({id:C+I,label:"\\beta",position:{x:0,y:a*this.yDist+this.yDist/2},classes:"target"}),t.addEdge({id:h+`${s}_1-${I}`,from:T+`${s}_1`,to:C+`${I}`,classes:"muted"}),t.addEdge({id:h+`${s}_${this.rowNodeCount}-${I}`,from:D+`${s}_${this.rowNodeCount}`,to:C+`${I}`,classes:"muted"});const e=-((this.rowNodeCount/2+1)*this.xDist);t.addEdge({id:h+`${I}-${N}`,from:C+`${I}`,to:C+`${N}`,classes:"muted target-to-source",controlPointDistances:[e,e]})}}),l.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
                <p>
                    For every variable, create a row variable gadget.
                </p>
                <p>
                    This gadget consists of $ ${this.rowNodeCount} $ row nodes.
                    They are all connected birectinally.
                </p>
                <p>
                    The number of row nodes it derived as follows: 
                </p>
                <p>
                    For every clause we need $2$ nodes - an <i>out-going</i> and <i>in-coming</i> node.
                    Each of these $2$ nodes must be padded a <i>pad</i> node (at least one).
                    The rows themselves also need <i>true</i> and and <i>false</i> ends.
                </p>
                <p>
                    ${this.clauseCount==1?`There is ${this.clauseCount} clause.`:`There are ${this.clauseCount} clauses.`}
                    Therefore we need: 
                    <ul>
                        <li>$ 2 \\cdot ${this.clauseCount} $ out-going and in-coming nodes</li>
                        <li>$ ${this.clauseCount} + 1 $ pad nodes</li>
                        <li>$1$ true and $1$  false nodes at the row ends</li>
                    </ul>
                </p>
                <p>
                    $ (2 \\cdot ${this.clauseCount}) + (${this.clauseCount} + 1) + 1 + 1 = ${this.rowNodeCount} $ nodes per variable row.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:c.copy()}),l.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
                <p>
                    Create the $source$ node, the $inbetween$ nodes that lie
                    between the variable rows and $target$ node. 
                </p>
                <p>
                    Connect the $source$ node 
                    to the row ends, $ ${this.inInstance.variables[0]}_1 $ and $ ${this.inInstance.variables[0]}_{${this.rowNodeCount+1}} $, of the first variable $ ${this.inInstance.variables[0]} $.
                    After that connect its row ends to the $inbetween$/$target$ node below.
                    Finally connect the $target$ node to $source$ node to close the loop.
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()}),{graph:t,interSteps:l}}}class K{decode(n,c){const{path:t}=c,l=new Map;for(let s=0;s<t.length;s++){const a=t[s].id;if(a.startsWith(T)){const e=a.substring(T.length,a.lastIndexOf("_"));l.has(e)||l.set(e,!0)}else if(a.startsWith(D)){const e=a.substring(D.length,a.lastIndexOf("_"));l.has(e)||l.set(e,!1)}}return new re(l)}}function Ne(H){return new Worker(""+new URL("../workers/WorkerHCYCLESolver-Ck3ApiOG.js",import.meta.url).href,{name:H?.name})}var Ie=w('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Te=w("<h2>Input 3-SAT Instance</h2>"),De=w("<span>Certificate for 3-SAT will appear here.</span>"),Re=w("<h2>3-CNF Editor</h2>"),Oe=w("<!> <!>",1),xe=w("<h2>Output HCYCLE Instance</h2>"),Le=w('<span class="placeholder">Certificate for HCYCLE will appear here.</span>'),He=w("<!> <!>",1),ke=w('<main class="svelte-1cz0gvf"><h1>3-SAT to HCYCLE reduction</h1> <div class="card-list svelte-1cz0gvf"><!> <!></div></main>');function Ve(H,n){Z(n,!1);const c=()=>z(o,"$redStore",l),t=()=>z(_,"$showStepper",l),[l,s]=ae(),a=(i,d=y)=>{_e(i,{get redStore(){return o},get hideCertificate(){return d()},title:g=>{var f=Te();m(g,f)},instance:(g,f=y)=>{le(g,{get cnf(){return f()}})},certificate:(g,f=y)=>{ce(g,{get cert(){return f()}})},certificatePlaceholder:g=>{var f=De();m(g,f)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let e=pe(Ee.LS_3SAT_HCYCLE,new $e),{redStore:o,showStepper:_,isSolving:r,solveMessage:b,editorChanged:p,reduce:R,solve:O}=ge({storage:e,workerFactory:()=>new Ne,reducerFactory:i=>new ye(i),decoderFactory:()=>new K,createWorkerRequest:i=>({graph:i.toSerializedString()}),resolveWorkerResponse:i=>{const d=i;return me(d.type==we.RESULT),new ve(d.path)},onSolveFinished:(i,d)=>{if(d==B){ne(o,W(c).inCert=B,W(c));return}i.labelSolved({path:d.path,directed:!0,edgeIdUsesNodeIds:!1});const $=new K().decode(i,d);o.update(v=>(v.inCert=$,v.outCert=d,v.outInstance=i,v))}});ie();var x=ke();ee(i=>{var d=Ie();oe.title="3SAT to HCYCLE",m(i,d)});var k=G(j(x),2),F=j(k);fe(F,{get redStore(){return o},get isSolving(){return r},get solveMessage(){return b},get showStepper(){return _},get reduce(){return R},get solve(){return O},title:u=>{var $=Re();m(u,$)},editor:u=>{de(u,{get cnf(){return c().inInstance},onChange:$=>p($),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var P=G(F,2);{var J=i=>{var d=Oe(),u=M(d);a(u,()=>!0);var $=G(u,2);be($,{get redStore(){return o},get storage(){return e},instance:(Y,g=y,f=y)=>{q(Y,{get graph(){return g()},style:"3SAT-HCYCLE"})},$$slots:{instance:!0}}),m(i,d)},Q=i=>{var d=He(),u=M(d);a(u,()=>!1);var $=G(u,2);Ce($,{get redStore(){return o},title:E=>{var S=xe();m(E,S)},instance:(E,S=y)=>{q(E,{get graph(){return S()},style:"3SAT-HCYCLE"})},certificate:(E,S=y)=>{he(E,{get cert(){return S()}})},certificatePlaceholder:E=>{var S=Le();m(E,S)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),m(i,d)};se(P,i=>{t()?i(J):i(Q,!1)})}U(k),U(x),m(H,x),te(),s()}export{Ve as component,qe as universal};
