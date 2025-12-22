import"../chunks/DsnmJJEf.js";import"../chunks/7c8ahxPy.js";import{p as oe,f as y,s as b,d as w,r as T,b as E,c as ne,a as q,t as z,m as C,ap as _e,aq as be,J as Ee,$ as Se,u as Q,K as ee,an as j,ao as Ce,ac as te}from"../chunks/BHy43uIv.js";import{s as ie,d as Re}from"../chunks/Bo-e_C1i.js";import{i as x,s as D,a as xe,c as Te,b as Ie}from"../chunks/lPMcd3W4.js";import{l as we,r as Fe}from"../chunks/hAUU4et8.js";import{U as Y,e as ye,i as Oe,q as l,n as ce,R as Ae,G as Ne,E as G,r as $e,S as Ge,u as Pe,l as ke,m as Le,b as Be,W as De,o as Ve,p as Xe}from"../chunks/4Tn6J3At.js";import{i as Me}from"../chunks/Bic1S2_H.js";import{C as Ue,E as We,R as se,a as je}from"../chunks/mHvT6OSO.js";import{R as re}from"../chunks/eBivCHW5.js";const qe=!0,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:qe},Symbol.toStringTag,{value:"Module"}));var ze=y("<p>The graph can't be colored by 3 colors.</p>"),Ye=y("<li> </li>"),Ze=y("The color mapping for 3-coloring: <ul></ul>",1),He=y("<main><h2>CertRenderer 3CG</h2> <!></main>");function Ke(S,t){oe(t,!0);function e(s){switch(s){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${s} not supported.`)}}var o=He(),d=b(w(o),2);{var h=s=>{var n=ze();E(s,n)},c=s=>{var n=Ze(),a=b(q(n));ye(a,21,()=>t.cert.coloring,Oe,(u,R)=>{var g=_e(()=>be(C(R),2));let I=()=>C(g)[0],O=()=>C(g)[1];var $=Ye(),A=w($);T($),z(B=>ie(A,`${I()??""} → ${O()??""} (${B??""})`),[()=>e(O())]),E(u,$)}),T(a),E(s,n)};x(d,s=>{t.cert==Y?s(h):s(c,!1)})}T(o),E(S,o),ne()}class ae{decode(t,e){const o=new Map;return console.debug("outCert.coloring",e.coloring),e.coloring.forEach((d,h)=>{const c=d,s=h;if(s.startsWith(l.TRUE_VAR_NODE_PREFIX)){const n=this.cutTruePrefix(s);c==l.COLOR_TRUE?this.setAssignment(o,n,!0):c==l.COLOR_FALSE&&this.setAssignment(o,n,!1)}else if(s.startsWith(l.FALSE_VAR_NODE_PREFIX)){const n=this.cutFalsePrefix(s);c==l.COLOR_TRUE?this.setAssignment(o,n,!1):c==l.COLOR_FALSE&&this.setAssignment(o,n,!0)}}),new Ue(o)}setAssignment(t,e,o){if(t.has(e)){const d=t.get(e);ce(d==o,`Id: ${e}The current state (${o}) and the previous state (${d})are not the same.`)}t.set(e,o)}cutTruePrefix(t){return t.slice(l.TRUE_VAR_NODE_PREFIX.length)}cutFalsePrefix(t){return t.slice(l.FALSE_VAR_NODE_PREFIX.length)}}class Je extends Ae{constructor(t){super(t)}doReduce(){const t=[],e=this.createCoreGadget(new Ne),o=this.createVariableGadgets(e.graph),d=this.createClauseGadgets(o.graph),h=d.graph;return t.push(e.step,o.step,d.step),{outInstance:h,steps:t}}createClauseGadgets(t){const e=-this.r,o=this.d/this.dc;let d=0;const h=c=>c.slice($e.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(c=>{const s=[],n=[];for(let a=0;a<6;a++){const u=h(c.id)+"-"+a;s.push({id:l.CLAUSE_NODE_PREFIX+u,label:u,position:{x:(d+a%3*o+e)*this.unit,y:(a<3?0:1)*this.unit}})}d+=(this.sc+this.wc)*o,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const u=typeof a[0]=="number"?s[a[0]]:a[0],R=typeof a[1]=="number"?s[a[1]]:a[1];n.push({id:G+`${u.label}-${R.label}`,from:u.id,to:R.id,classes:"muted"})}),c.literals.forEach((a,u)=>{const R=(a.negated?l.FALSE_VAR_NODE_PREFIX:l.TRUE_VAR_NODE_PREFIX)+a.varName,g=s[u];n.push({id:G+`${R}-${g.label}`,from:R,to:g.id})}),s.forEach(a=>t.addNode(a)),n.forEach(a=>t.addEdge(a))}),{graph:t,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
                    <p>
                        Create a clause gadget for each clause in the formula 
                        <span>${this.inInstance.asHtmlString()}</span>, namely:

                        <ul>
                            ${this.inInstance.clauses.map(c=>`
                                    <li>
                                        <span>${c.asHtmlString()}</span>
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
                `,inSnapshot:this.inInstance,outSnapshot:t.copy()}}}createVariableGadgets(t){t.edges.forEach(g=>{const I=this.r*this.unit;g.controlPointDistances=[-I,-I]});const e=-45*Math.PI/180,o=Math.cos(e),d=Math.sin(e),h=this.r*d,c=this.d*o,s=c/2;let n=0;const a=c/this.dv,u=-s;this.inInstance.variables.forEach(g=>{const I={id:l.TRUE_VAR_NODE_PREFIX+g,position:{x:(n+u)*this.unit,y:h*this.unit}},O={id:l.FALSE_VAR_NODE_PREFIX+g,position:{x:(n+a+u)*this.unit,y:h*this.unit}};n+=(this.sv+this.wv)*a,t.addNode(I),t.addNode(O),[{id:G+g+"true-false",from:I.id,to:O.id,classes:"muted"},{id:G+g+"true-B",from:I.id,to:l.CORE.B,classes:"muted"},{id:G+g+"false-B",from:O.id,to:l.CORE.B,classes:"muted"}].forEach(A=>t.addEdge(A))});const R={id:"add-vars",title:"Add variable gadgets",description:`
                <p>
                    Create a variable gadget for each variable in the formula 
                    <span>${this.inInstance.asHtmlString()}</span>, namely:

                    <ul>
                        ${this.inInstance.variables.map(g=>`
                                <li>
                                    ${g}
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return{graph:t,step:R}}createCoreGadget(t){const e=Object.values(this.coreNodes),d=360/e.length*Math.PI/180;let h=Math.PI/6;e.forEach(s=>{s.position={x:Math.cos(h)*this.unit,y:Math.sin(h)*this.unit},t.addNode(s),h+=d}),[["F","T"],["B","F"],["T","B"]].forEach(([s,n])=>{const a=this.coreNodes[s],u=this.coreNodes[n];t.addEdge({id:G+`${a.label}-${u.label}`,from:a.id,to:u.id,classes:"muted core"})}),t.edges.forEach(s=>{s.classes+=" outer-circle";const n=this.unit;s.controlPointDistances=[-n,-n]});const c={id:"add-core",title:"Create the core",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return t.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),t.edges.forEach(s=>{const n=this.r*this.unit;s.controlPointDistances=[-n,-n]}),{graph:t,step:c}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:l.CORE.F,label:"F",classes:"F",color:l.COLOR_FALSE},T:{id:l.CORE.T,label:"T",classes:"T",color:l.COLOR_TRUE},B:{id:l.CORE.B,label:"B",classes:"B",color:l.COLOR_BUFFER}}}var Qe=Object.getOwnPropertyDescriptor,et=(S,t,e,o)=>{for(var d=o>1?void 0:o?Qe(t,e):t,h=S.length-1,c;h>=0;h--)(c=S[h])&&(d=c(d)||d);return d};let Z=class{constructor(S){this.coloring=S}};Z=et([Ge.SerializableClass("Certificate3CG")],Z);function tt(S){return new Worker(""+new URL("../workers/Worker3CGSolver-BeowWxf9.js",import.meta.url).href,{name:S?.name})}var st=y('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),rt=y("<div><!></div> <!> <div><!></div>",1),at=y("<span>There are no steps to step through.</span>"),ot=y('<div class="panes svelte-42sez6"><div><!> <!></div> <div><!> <!></div></div>'),nt=y('<main><h1>3SAT to 3CG reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function _t(S,t){oe(t,!1);const e=()=>D(a,"$redStore",c),o=()=>D(R,"$isSolving",c),d=()=>D(u,"$showStepper",c),h=()=>D(g,"$solveMessage",c),[c,s]=xe();let n=Pe(we.LS_3SAT_3CG,new ke),{redStore:a,showStepper:u,isSolving:R,solveMessage:g,editorChanged:I,reduce:O,solve:$}=Le({storage:n,workerFactory:()=>new tt,reducerFactory:r=>new Je(r),decoderFactory:()=>new ae,createWorkerRequest:r=>({graph:r.toSerializedString()}),resolveWorkerResponse:r=>{const i=r;ce(i.type==De.RESULT);const f=new Map;return i.coloring.forEach(m=>{const p=m[0],k=m[1];f.set(p,k)}),new Z(f)},onSolveFinished:(r,i)=>{if(i==Y){Te(a,Q(e).inCert=Y,Q(e));return}r.nodes.forEach(p=>{switch(p.color=i.coloring.get(p.id),p.color){case 0:p.classes+=" red";break;case 1:p.classes+=" green";break;case 2:p.classes+=" blue";break;default:throw new Error(`Value ${p.color} not supported.`)}});const m=new ae().decode(r,i);a.update(p=>(p.inCert=m,p.outCert=i,p.outInstance=r,p))}});Me();var A=nt();Ee(r=>{var i=st();Se.title="3SAT to 3CG",E(r,i)});var B=b(w(A),2);We(B,{get cnf(){return e().inInstance},onChange:r=>I(r),onWrongFormat:r=>alert("From editor: "+r)});var V=b(B,2),X=w(V);X.__click=O;var P=b(X,2);P.__click=$;var de=w(P);{var le=r=>{var i=j("Solving...");E(r,i)},he=r=>{var i=j("Solve");E(r,i)};x(de,r=>{o()?r(le):r(he,!1)})}T(P);var H=b(P,2);Fe(H),ee(2),T(V);var K=b(V,2);{var ue=r=>{Ve(r,{children:(i,f)=>{ee();var m=j();z(()=>ie(m,h())),E(i,m)}})};x(K,r=>{o()&&r(ue)})}var pe=b(K,2);{var ve=r=>{const i=te(()=>e().steps),f=te(()=>e().stepIndex);var m=Ce(),p=q(m);{var k=F=>{var N=rt(),L=q(N),U=w(L);{var W=_=>{se(_,{get cnf(){return C(i)[C(f)].inSnapshot}})};x(U,_=>{C(f)<C(i).length&&C(i)[C(f)].inSnapshot&&!C(i)[C(f)].inSnapshot.isEmpty()&&_(W)})}T(L);var v=b(L,2);Xe(v,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{a.update(_=>(_.prevStep(),_)),n.save()},onNextClick:()=>{a.update(_=>(_.nextStep(),_)),n.save()}});var J=b(v,2),fe=w(J);{var me=_=>{re(_,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-3CG"})};x(fe,_=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&_(me)})}T(J),E(F,N)},M=F=>{var N=at();E(F,N)};x(p,F=>{C(i).length?F(k):F(M,!1)})}E(r,m)},ge=r=>{var i=ot(),f=w(i),m=w(f);{var p=v=>{se(v,{get cnf(){return e().inInstance}})};x(m,v=>{e().inInstance&&!e().inInstance.isEmpty()&&v(p)})}var k=b(m,2);{var M=v=>{je(v,{get cert(){return e().inCert}})};x(k,v=>{e().inCert&&v(M)})}T(f);var F=b(f,2),N=w(F);{var L=v=>{re(v,{get graph(){return e().outInstance},style:"3SAT-3CG"})};x(N,v=>{e().outInstance&&!e().outInstance.isEmpty()&&v(L)})}var U=b(N,2);{var W=v=>{Ke(v,{get cert(){return e().outCert}})};x(U,v=>{e().outCert&&v(W)})}T(F),T(i),E(r,i)};x(pe,r=>{d()?r(ve):r(ge,!1)})}T(A),z((r,i)=>{X.disabled=r,P.disabled=i},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||o(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||o()]),Be(H,d,r=>Ie(u,r)),E(S,A),ne(),s()}Re(["click"]);export{_t as component,mt as universal};
