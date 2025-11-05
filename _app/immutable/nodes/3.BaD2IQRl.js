import"../chunks/DsnmJJEf.js";import{d as $e,b as _e,s as we}from"../chunks/kmNpuAZe.js";import{p as be,M as Ce,f as B,z as Ie,d as N,s as C,t as ne,B as f,b as y,c as Ee,E as D,D as J,$ as Se,r as x,A as se,an as Q,ao as ye,a as oe,ap as ae}from"../chunks/D1gJg5gW.js";import{s as Ne,i as I,a as De}from"../chunks/ntNUJhCQ.js";import{l as xe,r as Te}from"../chunks/DnhBb1Nf.js";import{k as X,l as F,m as M,g as G,E as v,G as ie,n as T,o as O,p as z,T as L,u as ke,R as Re,b as Oe,U as Z,P as Le,h as Xe,j as Fe}from"../chunks/TWPTmQMR.js";import{C as Ae,E as Pe,R as re,a as Ge}from"../chunks/bPwk6O5q.js";import{a as He}from"../chunks/CN7djGBc.js";import{R as de}from"../chunks/BVb8Xddv.js";const je=!0,at=Object.freeze(Object.defineProperty({__proto__:null,prerender:je},Symbol.toStringTag,{value:"Module"}));class Ye{decode(l,e){const{path:s}=e,$=new Map;for(let i=0;i<s.length;i++){const r=s[i].id;if(r.startsWith(X)){const t=r.substring(X.length,r.lastIndexOf("_"));$.has(t)||$.set(t,!0)}else if(r.startsWith(F)){const t=r.substring(F.length,r.lastIndexOf("_"));$.has(t)||$.set(t,!1)}}return new Ae($)}}class We{inInstance;rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(l){this.inInstance=l;const{variables:e,clauses:s}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=e.length,this.clauseCount=s.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*s.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}reduce(){let l=[];const e=this.createVarGadgets();l.push(...e.interSteps);const s=this.createClauseGadgets(e.graph.copy());return l.push(...s.interSteps),{outInstance:s.graph,steps:l}}createClauseGadgets(l){const{clauses:e}=this.inInstance;let s=[],$=l.copy();return s.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:$,mapping:{}}),e.forEach((i,r)=>{const t=r+1,a=`${t}`,_={id:M+`${a}`,position:{x:2*this.rowXOffset,y:r*this.yStep+this.yOffset},classes:"clause"};$.addNode(_),l.addNode(_),i.literals.forEach((o,k)=>{const b=`${o.varName}_${3*t}`,E=`${o.varName}_${3*t+1}`;o.negated?(l.addEdge({id:v+`${E}-${a}`,from:G+`${E}`,to:M+`${a}`,classes:"false_out"}),l.addEdge({id:v+`${a}-${b}`,from:M+`${a}`,to:G+`${b}`,classes:"false_in"})):(l.addEdge({id:v+`${b}-${a}`,from:G+`${b}`,to:M+`${a}`,classes:"true_out"}),l.addEdge({id:v+`${a}-${E}`,from:M+`${a}`,to:G+`${E}`,classes:"true_in"}))}),s.push({id:`connect-clause-node-${r}`,title:`Connect clause node "${a}" to variable row nodes`,description:`
                    <p>
                        Clause node "${a}" represents the clause ${i.asHtmlString()}.
                    </p>
                    <ul>
                        ${i.literals.map(o=>`
                                <li>
                                    ${o.asHtmlString()}
                                    &hyphen;
                                    ${o.negated?`
                                        because ${o.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${o.varName}_${3*t+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${o.varName}_${3*t}).
                                    `:`
                                        because ${o.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${o.varName}_${3*t})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${o.varName}_${3*t+1}).
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
                `,inSnapshot:this.inInstance,outSnapshot:l.copy(),mapping:{}})}),{graph:l,interSteps:s}}createVarGadgets(){const{variables:l}=this.inInstance;let e=new ie,s=new ie,$=[];return l.forEach((i,r)=>{if(r==0)s.addNode({id:T+O,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"source"}),s.addEdge({id:v+`${O}-${i}_1`,from:T+`${O}`,to:X+`${i}_1`,classes:"muted"}),s.addEdge({id:v+`${O}-${i}_${this.rowNodeCount}`,from:T+`${O}`,to:F+`${i}_${this.rowNodeCount}`,classes:"muted"});else{const t=`${l[r-1]}_${i}`;s.addNode({id:z+`${t}`,position:{x:0,y:r*this.yDist-this.yDist/2},classes:"inbetween"});const a=l[r-1];s.addEdge({id:v+`${a}_1-${t}`,from:X+`${a}_1`,to:z+t,classes:"muted"}),s.addEdge({id:v+`${a}_${this.rowNodeCount}-${t}`,from:F+`${a}_${this.rowNodeCount}`,to:z+t,classes:"muted"}),s.addEdge({id:v+`${t}-${i}_1`,from:z+`${t}`,to:X+`${i}_1`,classes:"muted"}),s.addEdge({id:v+`${t}-${i}_${this.rowNodeCount}`,from:z+`${t}`,to:F+`${i}_${this.rowNodeCount}`,classes:"muted"})}for(let t=1;t<=this.rowNodeCount-1;t++){const a=`${i}_${t}`,_=`${i}_${t+1}`;let o="",k=G,b=G;t==1?(o+=" true",k=X):t==this.rowNodeCount-1?b=F:(t+1)%3==0&&(o+=" guarantee");const E={id:k+`${a}`,position:{x:(t-1)*this.xDist-this.rowXOffset,y:r*this.yDist},classes:o};if(e.addNode(E),s.addNode(E),t==this.rowNodeCount-1){const P={id:b+`${_}`,position:{x:t*this.xDist-this.rowXOffset,y:r*this.yDist},classes:"false"};e.addNode(P),s.addNode(P)}const A={id:v+`${a}-${_}`,from:k+`${a}`,to:b+`${_}`,classes:"muted"},H={id:v+`${_}-${a}`,from:b+`${_}`,to:k+`${a}`,classes:"muted"};e.addEdge(A),e.addEdge(H),s.addEdge(A),s.addEdge(H)}r==l.length-1&&(s.addNode({id:T+L,position:{x:0,y:r*this.yDist+this.yDist/2},classes:"target"}),s.addEdge({id:v+`${i}_1-${L}`,from:X+`${i}_1`,to:T+`${L}`,classes:"muted"}),s.addEdge({id:v+`${i}_${this.rowNodeCount}-${L}`,from:F+`${i}_${this.rowNodeCount}`,to:T+`${L}`,classes:"muted"}),s.addEdge({id:v+`${L}-${O}`,from:T+`${L}`,to:T+`${O}`,classes:"muted"}))}),$.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:e,mapping:{}}),$.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:s,mapping:{}}),{graph:s,interSteps:$}}}var Ue=B('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),Me=(V,l)=>l(),ze=B("<div><!></div> <!> <div><!></div>",1),Be=B("<span>There are no steps to step through.</span>"),Ve=B('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),qe=B('<main><h1>3SAT to HCYCLE reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function it(V,l){be(l,!0);const e=()=>Ne(r,"$redStore",s),[s,$]=De();let i=ke(xe.LS_3SAT_HCYCLE,new Re),r=i.value,t=J(!1),a=J(!1),_=J(""),o=null;function k(n){o&&(o.terminate(),o=null,D(a,!1),D(_,"Solving cancelled — formula changed.")),r.update(d=>(d.reset(),d.setInInstance(n),i.save(),d))}function b(){if(e().inInstance){const n=new We(e().inInstance),{outInstance:d,steps:p}=n.reduce();r.update(c=>(c.steps=p,c.outInstance=d,c)),i.save()}}async function E(){let{inCert:n,outInstance:d,outCert:p}=e();if(!(!d||p)){D(a,!0),D(_,"Solving Hamiltonian cycle..."),o&&(o.terminate(),o=null);try{const c=new Worker(new URL(""+new URL("../workers/WorkerHCYCLESolver-CK_Jy_qF.js",import.meta.url).href,import.meta.url),{type:"module"});o=c;const Y=new Promise((g,S)=>{c.onmessage=m=>{c===o&&(c.terminate(),o=null,g(m.data))},c.onerror=m=>{c===o&&(c.terminate(),o=null,S(m))}});if(c.postMessage(d.toSerializedString()),p=await Y,!o&&!f(a))return;if(p==Z)r.update(g=>(g.inCert=Z,g.outCert=Z,g));else{const g=d,S=p.path;g.edges.forEach(h=>h.classes+=" solved");const m=h=>h.slice(h.search(Le)+1);for(let h=0;h<S.length-1;h++){const R=m(S[h].id),W=m(S[h+1].id),U=v+`${R}-${W}`,u=g.edges.find(q=>q.id==U);u&&(g.removeEdge(u),u.classes+=" used",g.addEdge(u))}n=new Ye().decode(g,p),r.update(h=>(h.inCert=n,h.outCert=p,h.outInstance=g,h))}i.save()}catch(c){console.error("Error during solving:",c),D(_,"An error occurred while solving.")}finally{D(a,!1),D(_,""),o=null}}}Ce(()=>{r.update(n=>(n.resetStepIndex(),n))}),_e(()=>{console.debug("onDestroy"),o&&(o.terminate(),o=null)});var A=qe();Ie(n=>{var d=Ue();Se.title="3SAT to HCYCLE",y(n,d)});var H=C(N(A),2);Pe(H,{get cnf(){return e().inInstance},onChange:n=>k(n),onWrongFormat:n=>alert("From editor: "+n)});var P=C(H,2),K=N(P);K.__click=b;var j=C(K,2);j.__click=[Me,E];var le=N(j);{var ce=n=>{var d=Q("Solving...");y(n,d)},ue=n=>{var d=Q("Solve");y(n,d)};I(le,n=>{f(a)?n(ce):n(ue,!1)})}x(j);var ee=C(j,2);Te(ee),se(2),x(P);var te=C(P,2);{var he=n=>{Xe(n,{children:(d,p)=>{se();var c=Q();ne(()=>we(c,f(_))),y(d,c)}})};I(te,n=>{f(a)&&n(he)})}var pe=C(te,2);{var fe=n=>{const d=ae(()=>e().steps),p=ae(()=>e().stepIndex);var c=ye(),Y=oe(c);{var g=m=>{var h=ze(),R=oe(h),W=N(R);{var U=w=>{re(w,{get cnf(){return f(d)[f(p)].inSnapshot}})};I(W,w=>{f(p)<f(d).length&&f(d)[f(p)].inSnapshot&&!f(d)[f(p)].inSnapshot.empty()&&w(U)})}x(R);var u=C(R,2);Fe(u,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{r.update(w=>(w.prevStep(),w)),i.save()},onNextClick:()=>{r.update(w=>(w.nextStep(),w)),i.save()}});var q=C(u,2),me=N(q);{var ve=w=>{de(w,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};I(me,w=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&w(ve)})}x(q),y(m,h)},S=m=>{var h=Be();y(m,h)};I(Y,m=>{f(d).length?m(g):m(S,!1)})}y(n,c)},ge=n=>{var d=Ve(),p=N(d),c=N(p);{var Y=u=>{re(u,{get cnf(){return e().inInstance}})};I(c,u=>{e().inInstance&&!e().inInstance.empty()&&u(Y)})}var g=C(c,2);{var S=u=>{Ge(u,{get cert(){return e().inCert}})};I(g,u=>{e().inCert&&u(S)})}x(p);var m=C(p,2),h=N(m);{var R=u=>{de(u,{get graph(){return e().outInstance},style:"3SAT-HCYCLE"})};I(h,u=>{e().outInstance&&!e().outInstance.empty()&&u(R)})}var W=C(h,2);{var U=u=>{He(u,{get cert(){return e().outCert}})};I(W,u=>{e().outCert&&u(U)})}x(m),x(d),y(n,d)};I(pe,n=>{f(t)?n(fe):n(ge,!1)})}x(A),ne((n,d)=>{K.disabled=n,j.disabled=d},[()=>!e().hasInInstance()||e().hasOutInstance()||f(a),()=>!e().hasInstances()||e().hasOutCertificate()||f(a)]),Oe(ee,()=>f(t),n=>D(t,n)),y(V,A),Ee(),$()}$e(["click"]);export{it as component,at as universal};
