import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{p as Z,f as S,K as ee,b as E,c as te,$ as ae,h as W,d as X,s as j,r as U,a as q,a9 as T}from"../chunks/DWngNMqy.js";import{i as se,s as oe,a as M,c as ne}from"../chunks/Cy94KniK.js";import{i as ie}from"../chunks/BwlNufZT.js";import{C as re,E as de,a as ce,R as $e}from"../chunks/ho1A0Vvn.js";import{C as le}from"../chunks/CipesoPF.js";import{R as V}from"../chunks/DAJafS3b.js";import{R as he,G as B,N,d as D,f as R,E as p,g as O,h as G,T as L,j as ue,l as pe,m as H,n as C,u as ge,o as fe,p as _e,q as me,U as z,r as be,W as we,t as Ce,O as ve,I as Ee}from"../chunks/BfLtls2m.js";import{C as Se}from"../chunks/J--iQTcu.js";import{l as Ne}from"../chunks/uXYcvkjH.js";const ye=!0,Be=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"}));class Ie extends he{rowNodeCount;rowXOffset;varCount;clauseCount;clauseHeight;varHeight;yStep;yOffset;xDist=50;yDist=300;constructor(o){super(o);const{variables:$,clauses:a}=this.inInstance;this.varCount=$.length,this.clauseCount=a.length,this.clauseHeight=(this.clauseCount-.5)*this.yDist,this.varHeight=(this.varCount-1)*this.yDist,this.yStep=this.clauseHeight/Math.max(1,this.clauseCount-1),this.yOffset=(this.varHeight-this.clauseHeight)/2,this.rowNodeCount=3*a.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}doReduce(){let o=[];const $=this.createVarGadgets(),a=this.createClauseGadgets($.graph.copy());return o.push(...$.interSteps),o.push(...a.interSteps),{outInstance:a.graph,steps:o}}createVarGadgets(){const{variables:o}=this.inInstance;let $=new B,a=new B,u=[];const f=[];return o.forEach((t,s)=>{if(s==0)a.addNode({id:N+D,label:"\\alpha",position:{x:0,y:s*this.yDist-this.yDist/2},classes:"source"}),a.addEdge({id:p+`${D}-${t}_1`,from:N+`${D}`,to:R+`${t}_1`,classes:"muted"}),a.addEdge({id:p+`${D}-${t}_${this.rowNodeCount}`,from:N+`${D}`,to:O+`${t}_${this.rowNodeCount}`,classes:"muted"});else{const e=`${o[s-1]}_${t}`,h=`(${o[s-1]}, ${t})`;f.push(h),a.addNode({id:G+`${e}`,label:h,position:{x:0,y:s*this.yDist-this.yDist/2},classes:"inbetween"});const _=o[s-1];a.addEdge({id:p+`${_}_1-${e}`,from:R+`${_}_1`,to:G+e,classes:"muted"}),a.addEdge({id:p+`${_}_${this.rowNodeCount}-${e}`,from:O+`${_}_${this.rowNodeCount}`,to:G+e,classes:"muted"}),a.addEdge({id:p+`${e}-${t}_1`,from:G+`${e}`,to:R+`${t}_1`,classes:"muted"}),a.addEdge({id:p+`${e}-${t}_${this.rowNodeCount}`,from:G+`${e}`,to:O+`${t}_${this.rowNodeCount}`,classes:"muted"})}for(let e=1;e<=this.rowNodeCount-1;e++){const h=`${t}_${e}`,_=`${t}_{${e}}`,g=`${t}_${e+1}`,F=`${t}_{${e+1}}`;let n="",l=C,r=C;e==1?(n+=" true",l=R):e==this.rowNodeCount-1?(n+=" guarantee",r=O):(e+1)%3==0&&(n+=" guarantee");const d={id:l+h,label:_,position:{x:(e-1)*this.xDist-this.rowXOffset,y:s*this.yDist},classes:n};if($.addNode(d),a.addNode(d),e==this.rowNodeCount-1){const K={id:r+g,label:F,position:{x:e*this.xDist-this.rowXOffset,y:s*this.yDist},classes:"false"};$.addNode(K),a.addNode(K)}const A={id:p+`${h}-${g}`,from:l+`${h}`,to:r+`${g}`,classes:"muted"},P={id:p+`${g}-${h}`,from:r+`${g}`,to:l+`${h}`,classes:"muted"};$.addEdge(A),$.addEdge(P),a.addEdge(A),a.addEdge(P)}if(s==o.length-1){a.addNode({id:N+L,label:"\\beta",position:{x:0,y:s*this.yDist+this.yDist/2},classes:"target"}),a.addEdge({id:p+`${t}_1-${L}`,from:R+`${t}_1`,to:N+`${L}`,classes:"muted"}),a.addEdge({id:p+`${t}_${this.rowNodeCount}-${L}`,from:O+`${t}_${this.rowNodeCount}`,to:N+`${L}`,classes:"muted"});const e=-((this.rowNodeCount/2+1)*this.xDist);a.addEdge({id:p+`${L}-${D}`,from:N+`${L}`,to:N+`${D}`,classes:"muted target-to-source",controlPointDistances:[e,e]})}}),u.push({id:"create-variable-gadgets",title:"Create variable gadgets",description:`
                <p>
                    Let $\\Phi = (\\Nu, \\Kappa)$ be the input boolean formula, where $\\Nu$ is the set of variables and $\\Kappa$ is the set of clauses.

                    $$
                        \\Nu = \\{ ${this.inInstance.variables.join(",")} \\}
                    $$

                    $$
                    \\begin{aligned}
                        \\Kappa = \\{ 
                            ${ue(this.inInstance.clauses.map(t=>pe(t)),3).map(t=>`& ${t.join(",")}`).join("\\\\")} 
                        \\}
                    \\end{aligned}
                    $$
                </p>
                <p>
                    For every variable $\\nu \\in \\Nu$, we create a row variable gadget $G_{\\nu} = (V_{\\nu}, E_{\\nu})$.
                    This gadget consists of $ k = ${this.rowNodeCount} $ row nodes.            

                    $$
                        V_{\\nu} = \\{ \\nu_1, \\nu_2, \\ldots, \\nu_{k = ${this.rowNodeCount}} \\} 
                    $$
                    
                    They are connected birectionally creating a path graph.

                    $$
                        E_{\\nu} = \\{ \\{ \\nu_i, \\nu_{i+1} \\}, \\{ \\nu_{i + 1}, \\nu_{i} \\} \\mid 0 \\leq i \\leq k - 1 \\}
                    $$

                    There will be $|\\Nu| = ${this.varCount}$ of these variable gadgets.

                </p>
                <p>
                    The number $k$ is derived as follows: 

                    <p>
                        For every clause $\\kappa \\in \\Kappa$ we need $2$ nodes - an incoming and outgoing node.
                        Each of these $2$ nodes must be padded by at least one pad nodes, we choose to have $1$ pad node.
                        The rows themselves also need two nodes for the $True$ and $False$ ends.
                    </p>

                    <ul>
                        <li>$ 2 |\\Kappa| $ incoming and outgoing nodes</li>
                        <li>$ |\\Kappa| + 1 $ pad nodes</li>
                        <li>$2$ nodes for $True$ and $False$ ends</li>
                    </ul>

                    $$
                        k = (2 |\\Kappa|) + (|\\Kappa| + 1) + 2 = 3|\\Kappa| + 3
                    $$

                    $$
                    \\begin{aligned}
                        |\\Kappa| &= ${this.clauseCount} \\\\
                        k &= 3 \\cdot ${this.clauseCount} + 3 \\\\
                        k &= ${3*this.clauseCount+3}
                    \\end{aligned}
                    $$
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:$.copy()}),u.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
                <p>
                    Create the source node $\\alpha$, target node $\\beta$ 
                    and the inbetween nodes:

                    $$
                        ${f.join(",")}
                    $$

                    that lie between the variable rows.

                </p>
                <p>
                    Connect the source node $\\alpha$ 
                    to the row ends 
                    - 
                        $ ${this.inInstance.variables[0]}_1 $ 
                        and $ ${this.inInstance.variables[0]}_{${this.rowNodeCount+1}} $
                    - 
                    of the first variable $ ${this.inInstance.variables[0]} $.
                    
                    Then, connect these row ends to the inbetween or target node below. 
                    Repeat for the rest of the graph. 
                </p>
                <p>
                    Finally connect the target node $\\beta$ to source node $\\alpha$ to close the loop.
                </p>
                <p>
                    Why did we do this?
                </p>
                <p>
                    Going from the source node $\\alpha$ or an inbetween node $(\\nu_{i-1}, \\nu)$ 
                    to one of the row end nodes of a variable $\\nu$ 
                    is equivalent to assigning 
                    a boolean value that corresponding variable $\\nu$.
                </p>
                <p>
                    Here,
                    <ul>
                        <li> 
                            going through the <b>left</b> edge means $\\nu = True$
                        </li>
                        <li>
                            and going though the <b>right</b> edge means $\\nu = False$.
                        </li>
                    </ul>
                </p>
                <p>
                    Notice that we can only choose going through either the left ($True$), or the right ($False$) edge.
                    Backtracking is impossible.
                </p>
                <p>
                    After going through either the right or left edge, 
                    we must visit the row nodes, for the final cycle to be Hamiltonian.
                </p>

                <!--
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
                -->
            `,inSnapshot:this.inInstance,outSnapshot:a.copy()}),{graph:a,interSteps:u}}createClauseGadgets(o){const{clauses:$}=this.inInstance;let a=[],u=o.copy();return $.forEach((f,t)=>{const s=t+1,e=`${s}`,h=`\\kappa_{${s}}`,_={id:H+`${e}`,label:h,position:{x:2*this.rowXOffset,y:t*this.yStep+this.yOffset},classes:"clause"};u.addNode(_),o.addNode(_);const g=[];let F=new Array;f.literals.forEach(n=>{const l=`${n.varName}_${3*s}`,r=`${n.varName}_${3*s+1}`;g.find(d=>d.in==l&&d.out==r)||g.find(d=>d.out==l&&d.in==r)||(F.push(n),n.negated?(o.addEdge({id:p+`${r}-${e}`,from:C+`${r}`,to:H+`${e}`,classes:"false_out"}),o.addEdge({id:p+`${e}-${l}`,from:H+`${e}`,to:C+`${l}`,classes:"false_in"}),g.push({in:l,out:r,inLabel:o.nodes.find(d=>d.id==C+l).label,outLabel:o.nodes.find(d=>d.id==C+r).label})):(o.addEdge({id:p+`${l}-${e}`,from:C+`${l}`,to:H+`${e}`,classes:"true_out"}),o.addEdge({id:p+`${e}-${r}`,from:H+`${e}`,to:C+`${r}`,classes:"true_in"}),g.push({in:r,out:l,inLabel:o.nodes.find(d=>d.id==C+r).label,outLabel:o.nodes.find(d=>d.id==C+l).label})))}),a.push({id:`connect-clause-node-${t}`,title:`Connect clause node $${e}$ to variable row nodes`,description:`
                    <p>
                        Clause node $${h}$ represents the clause $${f.toTexString()}$.
                
                        <ul>
                            ${F.map(n=>`
                                    <li>
                                        $${n.toTexString()}$
                                        
                                        ${n.negated?`
                                            is <i>negated</i> &mdash;
                                            
                                            the <u>outgoing</u> node $${n.varName}_{${3*s+1}}$
                                            is on the <b>right</b> of
                                            the <u>incoming</u> node $${n.varName}_{${3*s}}$.
                                        `:`
                                            isn't negated &mdash;
                                            
                                            the <u>outgoing</u> node $${n.varName}_{${3*s}}$
                                            is on the <b>left</b> of
                                            the <u>incoming</u> node $${n.varName}_{${3*s+1}}$.
                                        `}
                                    </li>
                                `).join("")}
                        </ul>

                        Add these edges:
                        $$
                        ${g.map(n=>` (${n.outLabel}, ${h}), (${h}, ${n.inLabel}) `).join("\\\\")}
                        $$
                    </p>
                `,inSnapshot:this.inInstance,outSnapshot:o.copy()})}),a.unshift({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
                <p>
                    For every clause $\\kappa \\in \\Kappa$, 
                    create one clause node $\\kappa'$. 
                    This node must be visited exactly once. 
                    Visiting this node corresponds to the clause $\\kappa$ being satisfied.
                    There are $|\\Kappa| = ${this.clauseCount}$ clause nodes.
                </p>
                <p>
                    For each clause node $\\kappa'$, 
                        
                        representing some clause $\\kappa = (\\Alpha, \\Beta, \\Gamma) \\in \\Kappa$,
                            where $\\Alpha$, $\\Beta$ and $\\Gamma$ are its literals (they can be negated) 
                            and $\\alpha$, $\\beta$ and $\\gamma$ are the variables,
 
                    create edges to and from the variable row gadgets - $G_{\\alpha}$, $G_{\\beta}$ and $G_{\\gamma}$ -
                    as follows:
                </p>
                <p>
                    For each literal $\\Chi$ of the clause $\\kappa$
                        pick a free row node $\\chi_i$
                            (one that hasn't been used yet in this step) 
                        and connect it to $\\kappa'$.

                        This selected node is the <u>outgoing</u> node.

                    Then, if the literal is negated, 
                        connect $\\kappa'$ back to row node $\\chi_{i - 1}$ (adjacent, on the left of $\\chi_i$),
                        
                        otherwise
                        
                        connect $\\kappa'$ back to row node $\\chi_{i + 1}$ (adjacent, on the right of $\\chi_i$).

                    This node, be it $\\chi_{i-1}$ or $\\chi_{i+1}$, is the <u>incoming</u> node.
                </p>
                <p>
                    This way, we gaurantee for each clause node $\\kappa'$ that:
                    
                    <ul>
                        <li>
                            If some literal $\\Chi$ of variable $\\chi$ in the clause $\\kappa$ 
                            <b>isn't negated</b>,
                            
                                then we can reach it 
                                    from some node $\\chi_i$ of the variable gadget $G_{\\chi}$
                                    and come back to $\\chi_{i+1}$ (on the right),
                            
                                if we approach it from the left (we assinged $\\chi$ to be $True$).
                        </li>
                        <li>
                            Otherwise, the literal $\\Chi$ <b>is negated</b>
                                and we can reach it  
                                    from some node $\\chi_i$ of the variable gadget $G_{\\chi}$
                                    and come back to $\\chi_{i-1}$ (on the left),

                                if we approach it from the right (we assigned $\\chi$ to be $False$).
                        </li>
                    </ul>
                </p>
                <p>
                    Note: In the graph, the clause nodes are named $\\kappa_i$, not $\\kappa_i'$.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:u.copy()}),{graph:o,interSteps:a}}}class J{decode(o,$){const{path:a}=$,u=new Map;for(let f=0;f<a.length;f++){const t=a[f].id;if(t.startsWith(R)){const s=t.substring(R.length,t.lastIndexOf("_"));u.has(s)||u.set(s,!0)}else if(t.startsWith(O)){const s=t.substring(O.length,t.lastIndexOf("_"));u.has(s)||u.set(s,!1)}}return new re(u)}}function ke(x){return new Worker(""+new URL("../workers/WorkerHCYCLESolver-Ck3ApiOG.js",import.meta.url).href,{name:x?.name})}var Te=S('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),De=S("<h2>Input 3-SAT Instance</h2>"),Le=S("<span>Certificate for 3-SAT will appear here.</span>"),Re=S("<h2>3-CNF Editor</h2>"),Oe=S("<!> <!>",1),Fe=S("<h2>Output HCYCLE Instance</h2>"),xe=S('<span class="placeholder">Certificate for HCYCLE will appear here.</span>'),Ae=S("<!> <!>",1),Ge=S('<main class="svelte-1cz0gvf"><h1>3-SAT to HCYCLE reduction</h1> <div class="card-list svelte-1cz0gvf"><!> <!></div></main>');function ze(x,o){Z(o,!1);const $=()=>M(e,"$redStore",u),a=()=>M(h,"$showStepper",u),[u,f]=oe(),t=(i,c=T)=>{Ee(i,{get redStore(){return e},get hideCertificate(){return c()},title:w=>{var v=De();E(w,v)},instance:(w,v=T)=>{$e(w,{get cnf(){return v()}})},certificate:(w,v=T)=>{ce(w,{get cert(){return v()}})},certificatePlaceholder:w=>{var v=Le();E(w,v)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let s=ge(Ne.LS_3SAT_HCYCLE,new fe),{redStore:e,showStepper:h,isSolving:_,solveMessage:g,editorChanged:F,reduce:n,solve:l}=_e({storage:s,workerFactory:()=>new ke,reducerFactory:i=>new Ie(i),decoderFactory:()=>new J,createWorkerRequest:i=>({graph:i.toSerializedString()}),resolveWorkerResponse:i=>{const c=i;return be(c.type==we.RESULT),new Se(c.path)},onSolveFinished:(i,c)=>{if(c==z){ne(e,W($).inCert=z,W($));return}i.labelSolved({path:c.path,directed:!0,edgeIdUsesNodeIds:!1});const b=new J().decode(i,c);e.update(y=>(y.inCert=b,y.outCert=c,y.outInstance=i,y))}});ie();var r=Ge();ee(i=>{var c=Te();ae.title="3SAT to HCYCLE",E(i,c)});var d=j(X(r),2),A=X(d);me(A,{get redStore(){return e},get isSolving(){return _},get solveMessage(){return g},get showStepper(){return h},get reduce(){return n},get solve(){return l},title:m=>{var b=Re();E(m,b)},editor:m=>{de(m,{get cnf(){return $().inInstance},onChange:b=>F(b),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var P=j(A,2);{var K=i=>{var c=Oe(),m=q(c);t(m,()=>!0);var b=j(m,2);Ce(b,{get redStore(){return e},get storage(){return s},instance:(Y,w=T,v=T)=>{V(Y,{get graph(){return w()},style:"3SAT-HCYCLE"})},$$slots:{instance:!0}}),E(i,c)},Q=i=>{var c=Ae(),m=q(c);t(m,()=>!1);var b=j(m,2);ve(b,{get redStore(){return e},title:I=>{var k=Fe();E(I,k)},instance:(I,k=T)=>{V(I,{get graph(){return k()},style:"3SAT-HCYCLE"})},certificate:(I,k=T)=>{le(I,{get cert(){return k()}})},certificatePlaceholder:I=>{var k=xe();E(I,k)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),E(i,c)};se(P,i=>{a()?i(K):i(Q,!1)})}U(d),U(r),E(x,r),te(),f()}export{ze as component,Be as universal};
