import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{p as ee,f as C,s as P,d as V,r as M,b as E,c as te,a as j,M as se,k as N,O as re,Q as oe,T as D,K as ne,$ as ie,h as q,a9 as y}from"../chunks/DWngNMqy.js";import{i as X,s as ce,c as le,a as H}from"../chunks/Cy94KniK.js";import{i as de}from"../chunks/BwlNufZT.js";import{r as pe,l as ue}from"../chunks/uXYcvkjH.js";import{U as K,c as he,K as Q,w as l,r as ae,R as $e,G as ge,E as B,j as fe,l as J,x as _e,S as me,u as ve,o as be,p as Ee,q as Ce,W as Se,t as Re,O as Te,I as ke}from"../chunks/BfLtls2m.js";import{C as Fe,E as Ie,a as we,R as Ae}from"../chunks/ho1A0Vvn.js";import{R as Y}from"../chunks/DAJafS3b.js";const Oe=!0,ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe},Symbol.toStringTag,{value:"Module"}));var Ne=C("<p>The graph can't be colored by 3 colors.</p>"),ye=C("<p>The 3-color mapping of the nodes:</p> <!>",1),Ge=C('<label class="checkbox-wrapper"><input type="checkbox"/> <span>Display as sets</span></label> <!>',1),Pe=C('<main><h2 class="dev">CertRenderer 3CG</h2> <!></main>');function xe(S,e){ee(e,!0);function o(t){switch(t){case 0:return"red";case 1:return"green";case 2:return"blue";default:throw console.debug(t),new Error(`The colorNum ${t} not supported.`)}}let r=re(!1);var n=Pe(),p=P(V(n),2);{var i=t=>{var h=Ne();E(t,h)},s=t=>{var h=Ge(),a=j(h),m=V(a);pe(m),se(2),M(a);var d=P(a,2);{var v=b=>{const k=D(()=>[...e.cert.coloring.entries().filter(([f,$])=>$.colorNumber==l.COLOR_FALSE)].map(f=>f[1])),x=D(()=>[...e.cert.coloring.entries().filter(([f,$])=>$.colorNumber==l.COLOR_TRUE)].map(f=>f[1])),L=D(()=>[...e.cert.coloring.entries().filter(([f,$])=>$.colorNumber==l.COLOR_BUFFER)].map(f=>f[1]));{let f=D(()=>`
                \\begin{aligned}

                \\color{red}{R} &= \\{ ${N(k).map($=>$.label).join(",")} \\}  \\\\
                \\color{green}{G} &= \\{ ${N(x).map($=>$.label).join(",")} \\} \\\\
                \\color{blue}{B} &= \\{ ${N(L).map($=>$.label).join(",")} \\}  \\\\
                
                \\end{aligned}
            `);Q(b,{displayMode:!0,get text(){return N(f)}})}},w=b=>{var k=ye(),x=P(j(k),2);{let L=D(()=>"\\begin{aligned}"+e.cert.coloring.entries().map(([f,{label:$,colorNumber:c}])=>`
                    ${$} & \\rightarrow{} \\color{${o(c)}}{ ${o(c)[0].toUpperCase()} } \\\\
                `).reduce((f,$)=>f+$)+"\\end{aligned}");Q(x,{displayMode:!0,get text(){return N(L)}})}E(b,k)};X(d,b=>{N(r)?b(v):b(w,!1)})}he(m,()=>N(r),b=>oe(r,b)),E(t,h)};X(p,t=>{e.cert==K?t(i):t(s,!1)})}M(n),E(S,n),te()}class Z{decode(e,o){const r=new Map;return o.coloring.forEach((n,p)=>{const i=n.colorNumber,s=p;if(s.startsWith(l.TRUE_VAR_NODE_PREFIX)){const t=this.cutTruePrefix(s);i==l.COLOR_TRUE?this.setAssignment(r,t,!0):i==l.COLOR_FALSE&&this.setAssignment(r,t,!1)}else if(s.startsWith(l.FALSE_VAR_NODE_PREFIX)){const t=this.cutFalsePrefix(s);i==l.COLOR_TRUE?this.setAssignment(r,t,!1):i==l.COLOR_FALSE&&this.setAssignment(r,t,!0)}}),new Fe(r)}setAssignment(e,o,r){if(e.has(o)){const n=e.get(o);ae(n==r,`Id: ${o}The current state (${r}) and the previous state (${n})are not the same.`)}e.set(o,r)}cutTruePrefix(e){return e.slice(l.TRUE_VAR_NODE_PREFIX.length)}cutFalsePrefix(e){return e.slice(l.FALSE_VAR_NODE_PREFIX.length)}}const I="\\color{red}{red}",G="\\color{green}{green}",U="\\color{blue}{blue}";class Be extends $e{constructor(e){super(e)}doReduce(){const e=[],o=this.createCoreGadget(new ge),r=this.createVariableGadgets(o.graph),n=this.createClauseGadgets(r.graph),p=n.graph;return e.push(o.step,r.step,n.step),{outInstance:p,steps:e}}createCoreGadget(e){const o=Object.values(this.coreNodes),n=360/o.length*Math.PI/180;let p=Math.PI/6;o.forEach(s=>{s.position={x:Math.cos(p)*this.unit,y:Math.sin(p)*this.unit},e.addNode(s),p+=n}),[["F","T"],["B","F"],["T","B"]].forEach(([s,t])=>{const h=this.coreNodes[s],a=this.coreNodes[t];e.addEdge({id:B+`${h.label}-${a.label}`,from:h.id,to:a.id,classes:"muted core"})}),e.edges.forEach(s=>{s.classes+=" outer-circle";const t=this.unit;s.controlPointDistances=[-t,-t]});const i={id:"add-core",title:"Create the core gadget",description:`
                <p>
                    Let's assume that the 3 colors are 
                        $${I}$, 
                        $${G}$ 
                        and $${U}$.
                </p>
                <p>
                    The colors hold some semantic meaning:

                    <ul>
                        <li>
                            $${G}$ represents $True$ values
                        </li>
                        <li>
                            $${I}$ represents $False$ values 
                        </li>
                        <li>
                            and $${U}$ is a buffer color.
                        </li>
                    </ul>
                </p>
                <p>
                    We start by creating the core gadget $G_C = (V_C,E_C)$. 
                    The core gadget has three nodes and they are all connected to one another.
                    $$ 
                        \\begin{aligned}

                        V_C &= \\{ T, F, B \\} \\\\
                        E_C &= \\{ \\{T,F\\}, \\{F,B\\}, \\{B,T\\} \\} \\\\

                        \\end{aligned}

                    $$

                </p>
                <p>
                    The coloring for these nodes is the following:

                    $$
                        \\begin{aligned}

                        color(T) &= ${G} \\\\
                        color(F) &= ${I}    \\\\
                        color(B) &= ${U}   \\\\

                        \\end{aligned}
                    $$
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return e.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),e.edges.forEach(s=>{const t=this.r*this.unit;s.controlPointDistances=[-t,-t]}),{graph:e,step:i}}createVariableGadgets(e){e.edges.forEach(d=>{const v=this.r*this.unit;d.controlPointDistances=[-v,-v]});const o=-45*Math.PI/180,r=Math.cos(o),n=Math.sin(o),p=this.r*n,i=this.d*r,s=i/2;let t=0;const h=i/this.dv,a=-s;this.inInstance.variables.forEach(d=>{const v={id:l.TRUE_VAR_NODE_PREFIX+d,label:`${d}`,position:{x:(t+a)*this.unit,y:p*this.unit}},w={id:l.FALSE_VAR_NODE_PREFIX+d,label:`\\lnot{${d}}`,position:{x:(t+h+a)*this.unit,y:p*this.unit}};t+=(this.sv+this.wv)*h,e.addNode(v),e.addNode(w),[{id:B+d+"true-false",from:v.id,to:w.id,classes:"muted"},{id:B+d+"true-B",from:v.id,to:l.CORE.B,classes:"muted"},{id:B+d+"false-B",from:w.id,to:l.CORE.B,classes:"muted"}].forEach(k=>e.addEdge(k))});const m={id:"add-vars",title:"Create variable gadgets",description:`
                <p>
                    Create a variable gadget for each variable $\\nu \\in \\Nu$ of the boolean formula $\\Phi = (\\Nu, \\Kappa)$, 
                    where $\\Nu$ is the set of variables

                    $$
                        \\Nu = \\{ ${this.inInstance.variables.join(",")} \\}
                    $$

                    and $\\Kappa$ is the set of clauses

                    $$
                    \\begin{aligned}
                        \\Kappa = \\{ 
                            ${fe(this.inInstance.clauses.map(d=>J(d)),3).map(d=>`& ${d.join(",")}`).join("\\\\")} 
                        \\}
                    \\end{aligned}
                    $$

                    There will be $|\\Nu| = ${this.inInstance.variables.length}$ variable gadgets.
                </p>
                <p>
                    A variable gadget $ G_{\\nu} = (V_{\\nu},E_{\\nu}) $ for a variable $\\nu$ 
                    consists of three nodes,

                    $$
                        V_{\\nu} = \\{ \\nu, \\lnot{\\nu}, B \\}
                    $$

                    where the node $B$ is the blue "buffer" node.

                    These nodes are each connected to one another,  
                    $$ 
                        E = \\{ \\{ \\nu, \\lnot{\\nu} \\}, \\{ \\nu, B \\}, \\{ \\lnot{\\nu}, B \\} \\}
                    $$

                    making it a complete graph.
                </p>
                <p>
                    Since the nodes $\\nu$ and $\\lnot{\\nu}$ are connected to the $B$ node that is colored $${U}$, 
                    they themselves can only be colored either $${G}$, or $${I}$. 

                    This encodes the truth assignment for the variable $\\nu$, because only these 2 cases can occur.
                    <ul>
                        <li>
                            If the node $\\nu$ is $${G}$
                            then the node $\\lnot{\\nu}$ must be $${I}$, 
                            meaning $\\nu = True$.
                        </li>
                        <li>
                            If the node $\\nu$ is $${I}$
                            then the node $\\lnot{\\nu}$ must be $${G}$, 
                            meaning $\\nu = False$.
                        </li>
                    </ul>
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return{graph:e,step:m}}createClauseGadgets(e){const o=-this.r,r=this.d/this.dc;let n=0;const p=i=>i.slice(_e.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach((i,s)=>{const t=[],h=[];for(let a=0;a<6;a++){const m=p(i.id)+"-"+a;t.push({id:l.CLAUSE_NODE_PREFIX+m,label:`\\kappa_{${s},${a}}`,position:{x:(n+a%3*r+o)*this.unit,y:(a<3?0:1)*this.unit}})}n+=(this.sc+this.wc)*r,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const m=typeof a[0]=="number"?t[a[0]]:a[0],d=typeof a[1]=="number"?t[a[1]]:a[1];h.push({id:B+`${m.label}-${d.label}`,from:m.id,to:d.id,classes:"muted"})}),i.literals.forEach((a,m)=>{const d=(a.negated?l.FALSE_VAR_NODE_PREFIX:l.TRUE_VAR_NODE_PREFIX)+a.varName,v=t[m];h.push({id:B+`${d}-${v.label}`,from:d,to:v.id})}),t.forEach(a=>e.addNode(a)),h.forEach(a=>e.addEdge(a))}),{graph:e,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
                    <p>
                        Create a clause gadget for each clause $\\kappa \\in \\Kappa$ in the formula $\\Phi$, namely:

                        $$
                        \\begin{aligned}
                            ${this.inInstance.clauses.map((i,s)=>`
                                \\kappa_{${s}} &= ${J(i)} \\\\
                            `).join("")}
                        \\end{aligned}
                        $$

                        There will be $|\\Kappa| = ${this.inInstance.clauses.length}$ clause gadgets.
                    </p>
                    <p>
                        For some clause $\\kappa = (\\Alpha, \\Beta, \\Gamma)$, 
                        where $\\Alpha$, $\\Beta$ and $\\Gamma$ are its literals (they can be negated) 
                        and $\\alpha$, $\\beta$ and $\\gamma$ are the variables,
                        a clause gadget $G_{\\kappa} = (V_{\\kappa},E_{\\kappa})$ is defined as:

                        $$
                            V_{\\kappa} = \\{ \\Alpha, \\Beta, \\Gamma, \\kappa_0, \\kappa_1, \\kappa_2, \\kappa_3, \\kappa_4, \\kappa_5, T, F \\}
                        $$

                        $$
                        \\begin{aligned}
                            E_{\\kappa} = \\{
                                &{ 
                                    \\{\\Alpha,\\kappa_0\\}, 
                                    \\{\\Beta,\\kappa_1\\}, 
                                    \\{\\Gamma,\\kappa_2\\} 
                                } \\\\
                                &{ 
                                    \\{\\kappa_0,\\kappa_3\\}, 
                                    \\{\\kappa_1,\\kappa_4\\}, 
                                    \\{\\kappa_2,\\kappa_5\\} 
                                } \\\\
                                &{ 
                                    \\{T,\\kappa_0\\}, 
                                    \\{T,\\kappa_1\\}, 
                                    \\{T,\\kappa_2\\} 
                                } \\\\
                                &{ 
                                    \\{T,\\kappa_3\\}, 
                                    \\{\\kappa_3,\\kappa_4\\}, 
                                    \\{\\kappa_4,\\kappa_5\\}, 
                                    \\{\\kappa_5,F\\} 
                                }
                            \\}
                        \\end{aligned}
                        $$
                    </p>
                    <p>
                        Note that the nodes $\\kappa_0,\\kappa_1,\\ldots,\\kappa_5$ are unique for each clause gadget.
                    </p>
                    <p>
                        A valid 3-coloring for the gadget $G_{\\kappa}$ exist,
                        iff at least one of the literal nodes, $\\Alpha$, $\\Beta$ or $\\Gamma$, is $${G}$,
                        This would correspond to the clause $\\kappa$ being satisfied, because at least one of its literals is evaluated to $True$.
                    </p>
                    <p>
                        However, if all the 3 literal nodes are $${I}$, then a valid 3-coloring for the gadget $G_{\\kappa}$ doesn't exist.
                        Since all 3 literals nodes are $${I}$, this means that they all evaluate to $False$ and the clause $\\kappa$ is not satisfied.
                    </p>
                `,inSnapshot:this.inInstance,outSnapshot:e.copy()}}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:l.CORE.F,label:"F",classes:"F",color:l.COLOR_FALSE},T:{id:l.CORE.T,label:"T",classes:"T",color:l.COLOR_TRUE},B:{id:l.CORE.B,label:"B",classes:"B",color:l.COLOR_BUFFER}}}var Le=Object.getOwnPropertyDescriptor,De=(S,e,o,r)=>{for(var n=r>1?void 0:r?Le(e,o):e,p=S.length-1,i;p>=0;p--)(i=S[p])&&(n=i(n)||n);return n};let z=class{constructor(S){this.coloring=S}};z=De([me.SerializableClass("Certificate3CG")],z);function Ue(S){return new Worker(""+new URL("../workers/Worker3CGSolver-Dg0d5qWp.js",import.meta.url).href,{name:S?.name})}var Ve=C('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),Me=C("<h2>Input 3-SAT Instance</h2>"),je=C("<span>Certificate for 3-SAT will appear here.</span>"),We=C("<h2>3-CNF Editor</h2>"),Xe=C("<!> <!>",1),Ke=C("<h2>Output 3-CG Instance</h2>"),ze=C('<span class="placeholder">Certificate for 3-CG will appear here.</span>'),qe=C("<!> <!>",1),He=C('<main class="svelte-42sez6"><h1>3-SAT to 3-CG reduction</h1> <div class="card-list svelte-42sez6"><!> <!></div></main>');function nt(S,e){ee(e,!1);const o=()=>H(t,"$redStore",n),r=()=>H(h,"$showStepper",n),[n,p]=ce(),i=(c,u=y)=>{ke(c,{get redStore(){return t},get hideCertificate(){return u()},title:T=>{var F=Me();E(T,F)},instance:(T,F=y)=>{Ae(T,{get cnf(){return F()}})},certificate:(T,F=y)=>{we(T,{get cert(){return F()}})},certificatePlaceholder:T=>{var F=je();E(T,F)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let s=ve(ue.LS_3SAT_3CG,new be),{redStore:t,showStepper:h,isSolving:a,solveMessage:m,editorChanged:d,reduce:v,solve:w}=Ee({storage:s,workerFactory:()=>new Ue,reducerFactory:c=>new Be(c),decoderFactory:()=>new Z,createWorkerRequest:c=>({graph:c.toSerializedString()}),resolveWorkerResponse:c=>{const u=c;ae(u.type==Se.RESULT);const _=new Map;return u.coloring.forEach(([R,g])=>{_.set(R,g)}),new z(_)},onSolveFinished:(c,u)=>{if(u==K){le(t,q(o).inCert=K,q(o));return}c.nodes.forEach(g=>{switch(g.color=u.coloring.get(g.id)?.colorNumber,g.color){case 0:g.classes+=" red";break;case 1:g.classes+=" green";break;case 2:g.classes+=" blue";break;default:throw new Error(`Value ${g.color} not supported.`)}});const R=new Z().decode(c,u);t.update(g=>(g.inCert=R,g.outCert=u,g.outInstance=c,g))}});de();var b=He();ne(c=>{var u=Ve();ie.title="3SAT to 3CG",E(c,u)});var k=P(V(b),2),x=V(k);Ce(x,{get redStore(){return t},get isSolving(){return a},get solveMessage(){return m},get showStepper(){return h},get reduce(){return v},get solve(){return w},title:_=>{var R=We();E(_,R)},editor:_=>{Ie(_,{get cnf(){return o().inInstance},onChange:R=>d(R),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var L=P(x,2);{var f=c=>{var u=Xe(),_=j(u);i(_,()=>!0);var R=P(_,2);Re(R,{get redStore(){return t},get storage(){return s},instance:(W,T=y,F=y)=>{Y(W,{get graph(){return T()},style:"3SAT-3CG"})},$$slots:{instance:!0}}),E(c,u)},$=c=>{var u=qe(),_=j(u);i(_,()=>!1);var R=P(_,2);Te(R,{get redStore(){return t},title:A=>{var O=Ke();E(A,O)},instance:(A,O=y)=>{Y(A,{get graph(){return O()},style:"3SAT-3CG"})},certificate:(A,O=y)=>{xe(A,{get cert(){return O()}})},certificatePlaceholder:A=>{var O=ze();E(A,O)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),E(c,u)};X(L,c=>{r()?c(f):c($,!1)})}M(k),M(b),E(S,b),te(),p()}export{nt as component,ot as universal};
