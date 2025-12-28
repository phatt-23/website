import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{p as ee,f as R,s as P,d as V,r as M,b as C,c as te,a as j,M as se,k as N,O as re,Q as oe,T as D,K as ne,$ as ie,h as z,a9 as y}from"../chunks/DWngNMqy.js";import{i as X,s as ce,c as le,a as H}from"../chunks/Cy94KniK.js";import{i as de}from"../chunks/BwlNufZT.js";import{r as pe,l as ue}from"../chunks/uXYcvkjH.js";import{U as K,c as he,K as Q,s as l,p as ae,R as $e,G as ge,E as B,t as fe,S as _e,u as me,m as ve,n as be,o as Ee,W as Ce,q as Re,O as Se,I as Te}from"../chunks/C4ZxoCtr.js";import{C as ke,E as Fe,a as Ie,R as we}from"../chunks/WbgQ2lHM.js";import{R as J}from"../chunks/D5S11tbA.js";const Ae=!0,ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ae},Symbol.toStringTag,{value:"Module"}));var Oe=R("<p>The graph can't be colored by 3 colors.</p>"),Ne=R("<p>The 3-color mapping of the nodes:</p> <!>",1),ye=R('<label class="checkbox-wrapper"><input type="checkbox"/> <span>Display as sets</span></label> <!>',1),Ge=R('<main><h2 class="dev">CertRenderer 3CG</h2> <!></main>');function Pe(f,e){ee(e,!0);function a(t){switch(t){case 0:return"red";case 1:return"green";case 2:return"blue";default:throw console.debug(t),new Error(`The colorNum ${t} not supported.`)}}let r=re(!1);var o=Ge(),p=P(V(o),2);{var i=t=>{var h=Oe();C(t,h)},n=t=>{var h=ye(),s=j(h),v=V(s);pe(v),se(2),M(s);var d=P(s,2);{var b=E=>{const k=D(()=>[...e.cert.coloring.entries().filter(([_,$])=>$.colorNumber==l.COLOR_FALSE)].map(_=>_[1])),x=D(()=>[...e.cert.coloring.entries().filter(([_,$])=>$.colorNumber==l.COLOR_TRUE)].map(_=>_[1])),L=D(()=>[...e.cert.coloring.entries().filter(([_,$])=>$.colorNumber==l.COLOR_BUFFER)].map(_=>_[1]));{let _=D(()=>`
                \\begin{aligned}

                \\color{red}{R} &= \\{ ${N(k).map($=>$.label).join(",")} \\}  \\\\
                \\color{green}{G} &= \\{ ${N(x).map($=>$.label).join(",")} \\} \\\\
                \\color{blue}{B} &= \\{ ${N(L).map($=>$.label).join(",")} \\}  \\\\
                
                \\end{aligned}
            `);Q(E,{displayMode:!0,get text(){return N(_)}})}},w=E=>{var k=Ne(),x=P(j(k),2);{let L=D(()=>"\\begin{aligned}"+e.cert.coloring.entries().map(([_,{label:$,colorNumber:c}])=>`
                    ${$} & \\rightarrow{} \\color{${a(c)}}{ ${a(c)[0].toUpperCase()} } \\\\
                `).reduce((_,$)=>_+$)+"\\end{aligned}");Q(x,{displayMode:!0,get text(){return N(L)}})}C(E,k)};X(d,E=>{N(r)?E(b):E(w,!1)})}he(v,()=>N(r),E=>oe(r,E)),C(t,h)};X(p,t=>{e.cert==K?t(i):t(n,!1)})}M(o),C(f,o),te()}class Y{decode(e,a){const r=new Map;return a.coloring.forEach((o,p)=>{const i=o.colorNumber,n=p;if(n.startsWith(l.TRUE_VAR_NODE_PREFIX)){const t=this.cutTruePrefix(n);i==l.COLOR_TRUE?this.setAssignment(r,t,!0):i==l.COLOR_FALSE&&this.setAssignment(r,t,!1)}else if(n.startsWith(l.FALSE_VAR_NODE_PREFIX)){const t=this.cutFalsePrefix(n);i==l.COLOR_TRUE?this.setAssignment(r,t,!1):i==l.COLOR_FALSE&&this.setAssignment(r,t,!0)}}),new ke(r)}setAssignment(e,a,r){if(e.has(a)){const o=e.get(a);ae(o==r,`Id: ${a}The current state (${r}) and the previous state (${o})are not the same.`)}e.set(a,r)}cutTruePrefix(e){return e.slice(l.TRUE_VAR_NODE_PREFIX.length)}cutFalsePrefix(e){return e.slice(l.FALSE_VAR_NODE_PREFIX.length)}}const I="\\color{red}{red}",G="\\color{green}{green}",U="\\color{blue}{blue}",Z=f=>`( ${f.literals.map(e=>(e.negated?"\\lnot{}":"")+e.varName).join(",")} )`;function xe(f,e){let a=f.slice(0);const r=[];for(;a.length>e;){const o=a.slice(0,e);r.push(o),a=a.slice(e)}return r.push(a),r}class Be extends $e{constructor(e){super(e)}doReduce(){const e=[],a=this.createCoreGadget(new ge),r=this.createVariableGadgets(a.graph),o=this.createClauseGadgets(r.graph),p=o.graph;return e.push(a.step,r.step,o.step),{outInstance:p,steps:e}}createCoreGadget(e){const a=Object.values(this.coreNodes),o=360/a.length*Math.PI/180;let p=Math.PI/6;a.forEach(n=>{n.position={x:Math.cos(p)*this.unit,y:Math.sin(p)*this.unit},e.addNode(n),p+=o}),[["F","T"],["B","F"],["T","B"]].forEach(([n,t])=>{const h=this.coreNodes[n],s=this.coreNodes[t];e.addEdge({id:B+`${h.label}-${s.label}`,from:h.id,to:s.id,classes:"muted core"})}),e.edges.forEach(n=>{n.classes+=" outer-circle";const t=this.unit;n.controlPointDistances=[-t,-t]});const i={id:"add-core",title:"Create the core gadget",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return e.nodes.forEach(n=>{n.position.x*=this.d*.8,n.position.y*=this.d*.8}),e.edges.forEach(n=>{const t=this.r*this.unit;n.controlPointDistances=[-t,-t]}),{graph:e,step:i}}createVariableGadgets(e){e.edges.forEach(d=>{const b=this.r*this.unit;d.controlPointDistances=[-b,-b]});const a=-45*Math.PI/180,r=Math.cos(a),o=Math.sin(a),p=this.r*o,i=this.d*r,n=i/2;let t=0;const h=i/this.dv,s=-n;this.inInstance.variables.forEach(d=>{const b={id:l.TRUE_VAR_NODE_PREFIX+d,label:`${d}`,position:{x:(t+s)*this.unit,y:p*this.unit}},w={id:l.FALSE_VAR_NODE_PREFIX+d,label:`\\lnot{${d}}`,position:{x:(t+h+s)*this.unit,y:p*this.unit}};t+=(this.sv+this.wv)*h,e.addNode(b),e.addNode(w),[{id:B+d+"true-false",from:b.id,to:w.id,classes:"muted"},{id:B+d+"true-B",from:b.id,to:l.CORE.B,classes:"muted"},{id:B+d+"false-B",from:w.id,to:l.CORE.B,classes:"muted"}].forEach(k=>e.addEdge(k))});const v={id:"add-vars",title:"Create variable gadgets",description:`
                <p>
                    Create a variable gadget for each variable $\\nu \\in \\Nu$ of the boolean formula $\\Phi = (\\Nu, \\Kappa)$, 
                    where $\\Nu$ is the set of variables

                    $$
                        \\Nu = \\{ ${this.inInstance.variables.join(",")} \\}
                    $$

                    and $\\Kappa$ is the set of clauses

                    $$
                    \\begin{aligned}
                        \\Kappa = \\{ ${xe(this.inInstance.clauses.map(d=>Z(d)),3).map(d=>`& ${d.join(",")}`).join("\\\\")} \\} \\\\
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
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return{graph:e,step:v}}createClauseGadgets(e){const a=-this.r,r=this.d/this.dc;let o=0;const p=i=>i.slice(fe.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach((i,n)=>{const t=[],h=[];for(let s=0;s<6;s++){const v=p(i.id)+"-"+s;t.push({id:l.CLAUSE_NODE_PREFIX+v,label:`\\kappa_{${n},${s}}`,position:{x:(o+s%3*r+a)*this.unit,y:(s<3?0:1)*this.unit}})}o+=(this.sc+this.wc)*r,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(s=>{const v=typeof s[0]=="number"?t[s[0]]:s[0],d=typeof s[1]=="number"?t[s[1]]:s[1];h.push({id:B+`${v.label}-${d.label}`,from:v.id,to:d.id,classes:"muted"})}),i.literals.forEach((s,v)=>{const d=(s.negated?l.FALSE_VAR_NODE_PREFIX:l.TRUE_VAR_NODE_PREFIX)+s.varName,b=t[v];h.push({id:B+`${d}-${b.label}`,from:d,to:b.id})}),t.forEach(s=>e.addNode(s)),h.forEach(s=>e.addEdge(s))}),{graph:e,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
                    <p>
                        Create a clause gadget for each clause $\\kappa \\in \\Kappa$ in the formula $\\Phi$, namely:

                        $$
                        \\begin{aligned}
                            ${this.inInstance.clauses.map((i,n)=>`
                                \\kappa_{${n}} &= ${Z(i)} \\\\
                            `).join("")}
                        \\end{aligned}
                        $$

                        There will be $|\\Kappa| = ${this.inInstance.clauses.length}$ clause gadgets.
                    </p>
                    <p>
                        For some clause $\\kappa = (\\Alpha, \\Beta, \\Gamma)$, 
                        where $\\Alpha$, $\\Beta$ and $\\Gamma$ are it's literals (they can be negated) 
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
                `,inSnapshot:this.inInstance,outSnapshot:e.copy()}}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:l.CORE.F,label:"F",classes:"F",color:l.COLOR_FALSE},T:{id:l.CORE.T,label:"T",classes:"T",color:l.COLOR_TRUE},B:{id:l.CORE.B,label:"B",classes:"B",color:l.COLOR_BUFFER}}}var Le=Object.getOwnPropertyDescriptor,De=(f,e,a,r)=>{for(var o=r>1?void 0:r?Le(e,a):e,p=f.length-1,i;p>=0;p--)(i=f[p])&&(o=i(o)||o);return o};let q=class{constructor(f){this.coloring=f}};q=De([_e.SerializableClass("Certificate3CG")],q);function Ue(f){return new Worker(""+new URL("../workers/Worker3CGSolver-Dg0d5qWp.js",import.meta.url).href,{name:f?.name})}var Ve=R('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),Me=R("<h2>Input 3-SAT Instance</h2>"),je=R("<span>Certificate for 3-SAT will appear here.</span>"),We=R("<h2>3-CNF Editor</h2>"),Xe=R("<!> <!>",1),Ke=R("<h2>Output 3-CG Instance</h2>"),qe=R('<span class="placeholder">Certificate for 3-CG will appear here.</span>'),ze=R("<!> <!>",1),He=R('<main class="svelte-42sez6"><h1>3-SAT to 3-CG reduction</h1> <div class="card-list svelte-42sez6"><!> <!></div></main>');function nt(f,e){ee(e,!1);const a=()=>H(t,"$redStore",o),r=()=>H(h,"$showStepper",o),[o,p]=ce(),i=(c,u=y)=>{Te(c,{get redStore(){return t},get hideCertificate(){return u()},title:T=>{var F=Me();C(T,F)},instance:(T,F=y)=>{we(T,{get cnf(){return F()}})},certificate:(T,F=y)=>{Ie(T,{get cert(){return F()}})},certificatePlaceholder:T=>{var F=je();C(T,F)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let n=me(ue.LS_3SAT_3CG,new ve),{redStore:t,showStepper:h,isSolving:s,solveMessage:v,editorChanged:d,reduce:b,solve:w}=be({storage:n,workerFactory:()=>new Ue,reducerFactory:c=>new Be(c),decoderFactory:()=>new Y,createWorkerRequest:c=>({graph:c.toSerializedString()}),resolveWorkerResponse:c=>{const u=c;ae(u.type==Ce.RESULT);const m=new Map;return u.coloring.forEach(([S,g])=>{m.set(S,g)}),new q(m)},onSolveFinished:(c,u)=>{if(u==K){le(t,z(a).inCert=K,z(a));return}c.nodes.forEach(g=>{switch(g.color=u.coloring.get(g.id)?.colorNumber,g.color){case 0:g.classes+=" red";break;case 1:g.classes+=" green";break;case 2:g.classes+=" blue";break;default:throw new Error(`Value ${g.color} not supported.`)}});const S=new Y().decode(c,u);t.update(g=>(g.inCert=S,g.outCert=u,g.outInstance=c,g))}});de();var E=He();ne(c=>{var u=Ve();ie.title="3SAT to 3CG",C(c,u)});var k=P(V(E),2),x=V(k);Ee(x,{get redStore(){return t},get isSolving(){return s},get solveMessage(){return v},get showStepper(){return h},get reduce(){return b},get solve(){return w},title:m=>{var S=We();C(m,S)},editor:m=>{Fe(m,{get cnf(){return a().inInstance},onChange:S=>d(S),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var L=P(x,2);{var _=c=>{var u=Xe(),m=j(u);i(m,()=>!0);var S=P(m,2);Re(S,{get redStore(){return t},get storage(){return n},instance:(W,T=y,F=y)=>{J(W,{get graph(){return T()},style:"3SAT-3CG"})},$$slots:{instance:!0}}),C(c,u)},$=c=>{var u=ze(),m=j(u);i(m,()=>!1);var S=P(m,2);Se(S,{get redStore(){return t},title:A=>{var O=Ke();C(A,O)},instance:(A,O=y)=>{J(A,{get graph(){return O()},style:"3SAT-3CG"})},certificate:(A,O=y)=>{Pe(A,{get cert(){return O()}})},certificatePlaceholder:A=>{var O=qe();C(A,O)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),C(c,u)};X(L,c=>{r()?c(_):c($,!1)})}M(k),M(E),C(f,E),te(),p()}export{nt as component,ot as universal};
