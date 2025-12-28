import"../chunks/DsnmJJEf.js";import"../chunks/BOSpDPoA.js";import{p as W,f as _,s as y,d as P,r as N,b as m,c as j,a as D,t as K,k as L,T as J,as as Q,K as ee,$ as te,h as X,a9 as x}from"../chunks/CTrBG-su.js";import{i as z,s as se,c as re,a as M}from"../chunks/0-nxEys-.js";import{i as ae}from"../chunks/CVn46gxg.js";import{s as oe}from"../chunks/xh0yEfGp.js";import{U as B,e as ne,i as ie,s as l,p as Y,R as ce,G as le,E as $,t as de,S as he,u as ue,m as pe,n as ge,o as fe,W as ve,q as me,O as _e,I as Ee}from"../chunks/QFfqNP4o.js";import{C as Ce,E as Se,a as be,R as Te}from"../chunks/C-OFwKSu.js";import{R as k}from"../chunks/BLjARmoN.js";import{l as Re}from"../chunks/Dw-FwYao.js";const Ie=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ie},Symbol.toStringTag,{value:"Module"}));var we=_("<p>The graph can't be colored by 3 colors.</p>"),Fe=_("<li> </li>"),xe=_("The color mapping for 3-coloring: <ul></ul>",1),Ae=_('<main><h2 class="dev">CertRenderer 3CG</h2> <!></main>');function $e(E,e){W(e,!0);function o(t){switch(t){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${t} not supported.`)}}var a=Ae(),n=y(P(a),2);{var d=t=>{var s=we();m(t,s)},i=t=>{var s=xe(),r=y(D(s));ne(r,21,()=>e.cert.coloring,ie,(u,C)=>{var p=J(()=>Q(L(C),2));let S=()=>L(p)[0],R=()=>L(p)[1];var I=Fe(),A=P(I);N(I),K(G=>oe(A,`${S()??""} → ${R()??""} (${G??""})`),[()=>o(R())]),m(u,I)}),N(r),m(t,s)};z(n,t=>{e.cert==B?t(d):t(i,!1)})}N(a),m(E,a),j()}class U{decode(e,o){const a=new Map;return o.coloring.forEach((n,d)=>{const i=n,t=d;if(t.startsWith(l.TRUE_VAR_NODE_PREFIX)){const s=this.cutTruePrefix(t);i==l.COLOR_TRUE?this.setAssignment(a,s,!0):i==l.COLOR_FALSE&&this.setAssignment(a,s,!1)}else if(t.startsWith(l.FALSE_VAR_NODE_PREFIX)){const s=this.cutFalsePrefix(t);i==l.COLOR_TRUE?this.setAssignment(a,s,!1):i==l.COLOR_FALSE&&this.setAssignment(a,s,!0)}}),new Ce(a)}setAssignment(e,o,a){if(e.has(o)){const n=e.get(o);Y(n==a,`Id: ${o}The current state (${a}) and the previous state (${n})are not the same.`)}e.set(o,a)}cutTruePrefix(e){return e.slice(l.TRUE_VAR_NODE_PREFIX.length)}cutFalsePrefix(e){return e.slice(l.FALSE_VAR_NODE_PREFIX.length)}}class ye extends ce{constructor(e){super(e)}doReduce(){const e=[],o=this.createCoreGadget(new le),a=this.createVariableGadgets(o.graph),n=this.createClauseGadgets(a.graph),d=n.graph;return e.push(o.step,a.step,n.step),{outInstance:d,steps:e}}createClauseGadgets(e){const o=-this.r,a=this.d/this.dc;let n=0;const d=i=>i.slice(de.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(i=>{const t=[],s=[];for(let r=0;r<6;r++){const u=d(i.id)+"-"+r;t.push({id:l.CLAUSE_NODE_PREFIX+u,label:u,position:{x:(n+r%3*a+o)*this.unit,y:(r<3?0:1)*this.unit}})}n+=(this.sc+this.wc)*a,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(r=>{const u=typeof r[0]=="number"?t[r[0]]:r[0],C=typeof r[1]=="number"?t[r[1]]:r[1];s.push({id:$+`${u.label}-${C.label}`,from:u.id,to:C.id,classes:"muted"})}),i.literals.forEach((r,u)=>{const C=(r.negated?l.FALSE_VAR_NODE_PREFIX:l.TRUE_VAR_NODE_PREFIX)+r.varName,p=t[u];s.push({id:$+`${C}-${p.label}`,from:C,to:p.id})}),t.forEach(r=>e.addNode(r)),s.forEach(r=>e.addEdge(r))}),{graph:e,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
                    <p>
                        Create a clause gadget for each clause in the formula 
                        <span>${this.inInstance.asHtmlString()}</span>, namely:

                        <ul>
                            ${this.inInstance.clauses.map(i=>`
                                    <li>
                                        <span>${i.asHtmlString()}</span>
                                    </li>
                                `).join("")}
                        </ul>
                    </p>
                    <p>
                        For some clause <i>C = (X &or; Y &or; Z)</i>, 
                        where <i>X,Y,Z</i> are it's literals (they can be negated) 
                        and <i>x,y,z</i> are the variables,
                        a clause gadget G = (V,E) consists of nodes: <br>
                        <p>
                            <i>V = {X,Y,Z,c0,c1,c2,c3,c4,c5,T,F}</i> <br>
                        </p>
                        and edges: <br>
                        <p>
                            <i>
                                E = { {X,c0}, {Y,c1}, {Z,c2} } &cup; <br>
                                    { {c0,c3}, {c1,c4}, {c2,c5} } &cup; <br>
                                    { {T,c0}, {T,c1}, {T,c2} } &cup; <br>
                                    { {T,c3}, {c3,c4}, {c4,c5}, {c5,F} }
                            </i>
                        </p>
                    </p>
                    <p>
                        The nodes <i>c0,c1,...,c5</i> are unique for each clause gadget.
                    </p>
                    <p>
                        This newly created clause gadget ensures that there exists a valid 3-coloring 
                        iff at least one of the literal nodes <i>X,Y,Z</i> is green, 
                        which would mean that the clause C evaluates to True. 

                        If all of the literal nodes are red, then a valid 3-coloring of the gadget <i>G</i> doesn't exist.
                    </p>
                `,inSnapshot:this.inInstance,outSnapshot:e.copy()}}}createVariableGadgets(e){e.edges.forEach(p=>{const S=this.r*this.unit;p.controlPointDistances=[-S,-S]});const o=-45*Math.PI/180,a=Math.cos(o),n=Math.sin(o),d=this.r*n,i=this.d*a,t=i/2;let s=0;const r=i/this.dv,u=-t;this.inInstance.variables.forEach(p=>{const S={id:l.TRUE_VAR_NODE_PREFIX+p,position:{x:(s+u)*this.unit,y:d*this.unit}},R={id:l.FALSE_VAR_NODE_PREFIX+p,position:{x:(s+r+u)*this.unit,y:d*this.unit}};s+=(this.sv+this.wv)*r,e.addNode(S),e.addNode(R),[{id:$+p+"true-false",from:S.id,to:R.id,classes:"muted"},{id:$+p+"true-B",from:S.id,to:l.CORE.B,classes:"muted"},{id:$+p+"false-B",from:R.id,to:l.CORE.B,classes:"muted"}].forEach(A=>e.addEdge(A))});const C={id:"add-vars",title:"Add variable gadgets",description:`
                <p>
                    Create a variable gadget for each variable in the formula 
                    <span>${this.inInstance.asHtmlString()}</span>, namely:

                    <ul>
                        ${this.inInstance.variables.map(p=>`
                                <li>
                                    ${p}
                                </li>
                            `).join("")}
                    </ul>
                    There will be ${this.inInstance.variables.length} variable gadgets, 
                    because there are ${this.inInstance.variables.length} variables.
                </p>
                <p>
                    A variable gadget <i>G = (V,E)</i> for a variable <i>x</i> consists 
                    of three nodes, 
                    <i>V = {x, &not;x, B}</i>, 
                    where the node <i>B</i> is the blue "buffer" node.
                    These nodes nodes are connected in such a way 
                    that makes this gadget <i>G</i> a complete graph, 
                    <i>E = { {x, &not;x}, {x, B}, {&not;x, B} }</i>.
                </p>
                <p>
                    Since the nodes <i>x</i> and <i>&not;x</i> are connected to the B node that is colored blue, 
                    they themselves can only be colored either green, or red. 
                    This encodes the truth assignment for the variable <i>x</i>.
                </p>
                <p>
                    If the node <i>x</i> is green 
                    then the node <i>&not;x</i> must be red, 
                    meaning <i>x &coloneq; True</i>.

                    However, if the node <i>x</i> is red 
                    then the node <i>&not;x</i> must be green, 
                    meaning <i>x &coloneq; False</i>.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return{graph:e,step:C}}createCoreGadget(e){const o=Object.values(this.coreNodes),n=360/o.length*Math.PI/180;let d=Math.PI/6;o.forEach(t=>{t.position={x:Math.cos(d)*this.unit,y:Math.sin(d)*this.unit},e.addNode(t),d+=n}),[["F","T"],["B","F"],["T","B"]].forEach(([t,s])=>{const r=this.coreNodes[t],u=this.coreNodes[s];e.addEdge({id:$+`${r.label}-${u.label}`,from:r.id,to:u.id,classes:"muted core"})}),e.edges.forEach(t=>{t.classes+=" outer-circle";const s=this.unit;t.controlPointDistances=[-s,-s]});const i={id:"add-core",title:"Create the core",description:`
                <p>
                    Let's assume that the 3 colors are: red, green and blue.
                    The meaning for these colors is that green represents "True" values, 
                    red represents "False" values and blue is a buffer color.
                </p>
                <p>
                    Start by creating the "core" gadget. 
                    The core gadget has three nodes - T, F, B - and they are connected to one another.
                </p>
                <p>
                    The coloring for these nodes is as follows:
                    <ul>
                        <li>
                            T node - green,
                        </li>
                        <li>
                            F node - red,
                        </li>
                        <li>
                            B node - blue.
                        </li>
                    </ul>
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:e.copy()};return e.nodes.forEach(t=>{t.position.x*=this.d*.8,t.position.y*=this.d*.8}),e.edges.forEach(t=>{const s=this.r*this.unit;t.controlPointDistances=[-s,-s]}),{graph:e,step:i}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:l.CORE.F,label:"F",classes:"F",color:l.COLOR_FALSE},T:{id:l.CORE.T,label:"T",classes:"T",color:l.COLOR_TRUE},B:{id:l.CORE.B,label:"B",classes:"B",color:l.COLOR_BUFFER}}}var Oe=Object.getOwnPropertyDescriptor,Ne=(E,e,o,a)=>{for(var n=a>1?void 0:a?Oe(e,o):e,d=E.length-1,i;d>=0;d--)(i=E[d])&&(n=i(n)||n);return n};let V=class{constructor(E){this.coloring=E}};V=Ne([he.SerializableClass("Certificate3CG")],V);function Ge(E){return new Worker(""+new URL("../workers/Worker3CGSolver-DYM8pA5y.js",import.meta.url).href,{name:E?.name})}var Pe=_('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),Le=_("<h2>Input 3-SAT Instance</h2>"),De=_("<span>Certificate for 3-SAT will appear here.</span>"),Be=_("<h2>3-CNF Editor</h2>"),Ve=_("<!> <!>",1),Xe=_("<h2>Output 3-CG Instance</h2>"),Me=_('<span class="placeholder">Certificate for 3-CG will appear here.</span>'),ke=_("<!> <!>",1),Ue=_('<main class="svelte-42sez6"><h1>3-SAT to 3-CG reduction</h1> <div class="card-list svelte-42sez6"><!> <!></div></main>');function tt(E,e){W(e,!1);const o=()=>M(s,"$redStore",n),a=()=>M(r,"$showStepper",n),[n,d]=se(),i=(c,h=x)=>{Ee(c,{get redStore(){return s},get hideCertificate(){return h()},title:b=>{var T=Le();m(b,T)},instance:(b,T=x)=>{Te(b,{get cnf(){return T()}})},certificate:(b,T=x)=>{be(b,{get cert(){return T()}})},certificatePlaceholder:b=>{var T=De();m(b,T)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let t=ue(Re.LS_3SAT_3CG,new pe),{redStore:s,showStepper:r,isSolving:u,solveMessage:C,editorChanged:p,reduce:S,solve:R}=ge({storage:t,workerFactory:()=>new Ge,reducerFactory:c=>new ye(c),decoderFactory:()=>new U,createWorkerRequest:c=>({graph:c.toSerializedString()}),resolveWorkerResponse:c=>{const h=c;Y(h.type==ve.RESULT);const f=new Map;return h.coloring.forEach(v=>{const g=v[0],O=v[1];f.set(g,O)}),new V(f)},onSolveFinished:(c,h)=>{if(h==B){re(s,X(o).inCert=B,X(o));return}c.nodes.forEach(g=>{switch(g.color=h.coloring.get(g.id),g.color){case 0:g.classes+=" red";break;case 1:g.classes+=" green";break;case 2:g.classes+=" blue";break;default:throw new Error(`Value ${g.color} not supported.`)}});const v=new U().decode(c,h);s.update(g=>(g.inCert=v,g.outCert=h,g.outInstance=c,g))}});ae();var I=Ue();ee(c=>{var h=Pe();te.title="3SAT to 3CG",m(c,h)});var A=y(P(I),2),G=P(A);fe(G,{get redStore(){return s},get isSolving(){return u},get solveMessage(){return C},get showStepper(){return r},get reduce(){return S},get solve(){return R},title:f=>{var v=Be();m(f,v)},editor:f=>{Se(f,{get cnf(){return o().inInstance},onChange:v=>p(v),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var q=y(G,2);{var Z=c=>{var h=Ve(),f=D(h);i(f,()=>!0);var v=y(f,2);me(v,{get redStore(){return s},get storage(){return t},instance:(O,b=x,T=x)=>{k(O,{get graph(){return b()},style:"3SAT-3CG"})},$$slots:{instance:!0}}),m(c,h)},H=c=>{var h=ke(),f=D(h);i(f,()=>!1);var v=y(f,2);_e(v,{get redStore(){return s},title:w=>{var F=Xe();m(w,F)},instance:(w,F=x)=>{k(w,{get graph(){return F()},style:"3SAT-3CG"})},certificate:(w,F=x)=>{$e(w,{get cert(){return F()}})},certificatePlaceholder:w=>{var F=Me();m(w,F)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),m(c,h)};z(q,c=>{a()?c(Z):c(H,!1)})}N(A),N(I),m(E,I),j(),d()}export{tt as component,et as universal};
