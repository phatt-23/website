import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{p as ie,f as N,s as f,d as y,r as _,b as m,c as ce,a as z,t as K,m as I,ap as Ie,aq as be,J as Se,$ as _e,u as q,K as Q,am as V,an as Ae,ac as ee}from"../chunks/0h0eovDe.js";import{s as de,d as Ee}from"../chunks/BeBJMhcX.js";import{i as S,s as k,a as xe,c as Te,b as ye}from"../chunks/E6MyXn9j.js";import{l as Re,r as Ne}from"../chunks/CSnGU0Cu.js";import{U as H,e as Fe,i as Ge,k as te,q as p,l as se,r as we,R as Ze,G as Be,E as B,s as Oe,S as $e,u as Xe,a as ke,c as Le,b as Pe,d as Ye,f as We}from"../chunks/DCk9rHG9.js";import{i as De}from"../chunks/DaAev7kg.js";import{C as Ue,E as Ve,R as ae,a as ze}from"../chunks/BCpjnFsP.js";import{R as re}from"../chunks/YqW4Rh_A.js";const Ke=!0,ft=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ke},Symbol.toStringTag,{value:"Module"}));var He=N("<p>The graph can't be colored by 3 colors.</p>"),Me=N("<li> </li>"),je=N("The color mapping for 3-coloring: <ul></ul>",1),Je=N("<main><h2>CertRenderer 3CG</h2> <!></main>");function qe(A,t){ie(t,!0);function e(s){switch(s){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${s} not supported.`)}}var n=Je(),c=f(y(n),2);{var l=s=>{var o=He();m(s,o)},i=s=>{var o=je(),a=f(z(o));Fe(a,21,()=>t.cert.coloring,Ge,(h,b)=>{var g=Ie(()=>be(I(b),2));let E=()=>I(g)[0],F=()=>I(g)[1];var Z=Me(),G=y(Z);_(Z),K(X=>de(G,`${E()??""} → ${F()??""} (${X??""})`),[()=>e(F())]),m(h,Z)}),_(a),m(s,o)};S(c,s=>{t.cert==H?s(l):s(i,!1)})}_(n),m(A,n),ce()}class ne{decode(t,e){const n=new Map;return e.coloring.forEach((c,l)=>{const i=c,s=l;if(s.startsWith(te)){const o=this.cutTruePrefix(s);i==p.COLOR_TRUE?this.setAssignment(n,o,!0):i==p.COLOR_FALSE&&this.setAssignment(n,o,!1)}else if(s.startsWith(se)){const o=this.cutFalsePrefix(s);i==p.COLOR_TRUE?this.setAssignment(n,o,!1):i==p.COLOR_FALSE&&this.setAssignment(n,o,!0)}}),new Ue(n)}setAssignment(t,e,n){if(t.has(e)){const c=t.get(e);we(c==n,`Id: ${e}The current state (${n}) and the previous state (${c})are not the same.`)}t.set(e,n)}cutTruePrefix(t){return t.slice(te.length)}cutFalsePrefix(t){return t.slice(se.length)}}class Qe extends Ze{constructor(t){super(t)}doReduce(){const t=[],e=this.createCoreGadget(new Be),n=this.createVariableGadgets(e.graph),c=this.createClauseGadgets(n.graph),l=c.graph;return t.push(e.step,n.step,c.step),{outInstance:l,steps:t}}createClauseGadgets(t){const e=-this.r,n=this.d/this.dc;let c=0;const l=i=>i.slice(Oe.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(i=>{const s=[],o=[];for(let a=0;a<6;a++){const h=l(i.id)+"-"+a;s.push({id:p.CLAUSE_NODE_PREFIX+h,label:h,position:{x:(c+a%3*n+e)*this.unit,y:(a<3?0:1)*this.unit}})}c+=(this.sc+this.wc)*n,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const h=typeof a[0]=="number"?s[a[0]]:a[0],b=typeof a[1]=="number"?s[a[1]]:a[1];o.push({id:B+`${h.label}-${b.label}`,from:h.id,to:b.id,classes:"muted"})}),i.literals.forEach((a,h)=>{const b=(a.negated?p.FALSE_VAR_NODE_PREFIX:p.TRUE_VAR_NODE_PREFIX)+a.varName,g=s[h];o.push({id:B+`${b}-${g.label}`,from:b,to:g.id})}),s.forEach(a=>t.addNode(a)),o.forEach(a=>t.addEdge(a))}),{graph:t,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
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
                `,inSnapshot:this.inInstance,outSnapshot:t.copy()}}}createVariableGadgets(t){t.edges.forEach(g=>{const E=this.r*this.unit;g.controlPointDistances=[-E,-E]});const e=-45*Math.PI/180,n=Math.cos(e),c=Math.sin(e),l=this.r*c,i=this.d*n,s=i/2;let o=0;const a=i/this.dv,h=-s;this.inInstance.variables.forEach(g=>{const E={id:p.TRUE_VAR_NODE_PREFIX+g,position:{x:(o+h)*this.unit,y:l*this.unit}},F={id:p.FALSE_VAR_NODE_PREFIX+g,position:{x:(o+a+h)*this.unit,y:l*this.unit}};o+=(this.sv+this.wv)*a,t.addNode(E),t.addNode(F),[{id:B+g+"true-false",from:E.id,to:F.id,classes:"muted"},{id:B+g+"true-B",from:E.id,to:p.CORE.B,classes:"muted"},{id:B+g+"false-B",from:F.id,to:p.CORE.B,classes:"muted"}].forEach(G=>t.addEdge(G))});const b={id:"add-vars",title:"Add variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return{graph:t,step:b}}createCoreGadget(t){const e=Object.values(this.coreNodes),c=360/e.length*Math.PI/180;let l=Math.PI/6;e.forEach(s=>{s.position={x:Math.cos(l)*this.unit,y:Math.sin(l)*this.unit},t.addNode(s),l+=c}),[["F","T"],["B","F"],["T","B"]].forEach(([s,o])=>{const a=this.coreNodes[s],h=this.coreNodes[o];t.addEdge({id:B+`${a.label}-${h.label}`,from:a.id,to:h.id,classes:"muted core"})}),t.edges.forEach(s=>{s.classes+=" outer-circle";const o=this.unit;s.controlPointDistances=[-o,-o]});const i={id:"add-core",title:"Create the core",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return t.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),t.edges.forEach(s=>{const o=this.r*this.unit;s.controlPointDistances=[-o,-o]}),{graph:t,step:i}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:p.CORE.F,label:"F",classes:"F",color:p.COLOR_FALSE},T:{id:p.CORE.T,label:"T",classes:"T",color:p.COLOR_TRUE},B:{id:p.CORE.B,label:"B",classes:"B",color:p.COLOR_BUFFER}}}var et=Object.getOwnPropertyDescriptor,tt=(A,t,e,n)=>{for(var c=n>1?void 0:n?et(t,e):t,l=A.length-1,i;l>=0;l--)(i=A[l])&&(c=i(c)||c);return c};let oe=class{constructor(A){this.coloring=A}};oe=tt([$e.SerializableClass("Certificate3CG")],oe);var st=N('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),at=N("<div><!></div> <!> <div><!></div>",1),rt=N("<span>There are no steps to step through.</span>"),nt=N('<div class="panes svelte-42sez6"><div><!> <!></div> <div><!> <!></div></div>'),ot=N('<main><h1>3SAT to 3CG reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function mt(A,t){ie(t,!1);const e=()=>k(a,"$redStore",i),n=()=>k(b,"$isSolving",i),c=()=>k(h,"$showStepper",i),l=()=>k(g,"$solveMessage",i),[i,s]=xe();let o=Xe(Re.LS_3SAT_3CG,new ke),{redStore:a,showStepper:h,isSolving:b,solveMessage:g,editorChanged:E,reduce:F,solve:Z}=Le({storage:o,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMC8xMi8yMDI1CgppbXBvcnQgeyBTb2x2ZXIzQ0cgfSBmcm9tICIkbGliL3NvbHZlL1NvbHZlcjNDRyI7CmltcG9ydCB7IEdyYXBoIH0gZnJvbSAiJGxpYi9pbnN0YW5jZS9HcmFwaCI7CmltcG9ydCB7IFVuc29sdmFibGUgfSBmcm9tICIkbGliL2NvcmUvVW5zb2x2YWJsZSI7CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7CiAgICBjb25zb2xlLmRlYnVnKCdXb3JrZXIzQ0dTb2x2ZXI6Om9ubWVzc2FnZScpOwogICAgY29uc29sZS5kZWJ1ZygnZS5kYXRhJywgZS5kYXRhKTsKCiAgICB0cnkgewogICAgICAgIGNvbnN0IGluc3RhbmNlOiBHcmFwaCA9IEdyYXBoLmZyb21TZXJpYWxpemVkU3RyaW5nKGUuZGF0YSk7CiAgICAgICAgCiAgICAgICAgY29uc29sZS5kZWJ1ZygnaW5zdGFuY2UnLCBpbnN0YW5jZS5hc1N0cmluZygpKTsKCiAgICAgICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlcjNDRyhpbnN0YW5jZSk7CgogICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGxpbmcgc29sdmUnKTsKICAgICAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIuc29sdmUoKTsKCiAgICAgICAgY29uc29sZS5kZWJ1ZygncG9zdGluZyB0aGUgcHJvbWlzZScpOwogICAgICAgIHBvc3RNZXNzYWdlKHJlc3VsdCB8fCBVbnNvbHZhYmxlKTsKICAgIH0KICAgIGNhdGNoIChlKSB7CiAgICAgICAgcG9zdE1lc3NhZ2UoewogICAgICAgICAgICBlcnJvcjogdHJ1ZSwKICAgICAgICAgICAgbWVzc2FnZTogZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogU3RyaW5nKGUpCiAgICAgICAgfSk7CiAgICB9Cn07Cgo=",import.meta.url),reducerFactory:r=>new Qe(r),decoderFactory:()=>new ne,onSolveFinished:(r,d)=>{if(d==H){Te(a,q(e).inCert=H,q(e));return}r.nodes.forEach(v=>{switch(v.color=d.coloring.get(v.id),v.color){case 0:v.classes+=" red";break;case 1:v.classes+=" green";break;case 2:v.classes+=" blue";break;default:throw new Error(`Value ${v.color} not supported.`)}});const T=new ne().decode(r,d);a.update(v=>(v.inCert=T,v.outCert=d,v.outInstance=r,v))}});De();var G=ot();Se(r=>{var d=st();_e.title="3SAT to 3CG",m(r,d)});var X=f(y(G),2);Ve(X,{get cnf(){return e().inInstance},onChange:r=>E(r),onWrongFormat:r=>alert("From editor: "+r)});var L=f(X,2),P=y(L);P.__click=F;var O=f(P,2);O.__click=Z;var le=y(O);{var he=r=>{var d=V("Solving...");m(r,d)},ue=r=>{var d=V("Solve");m(r,d)};S(le,r=>{n()?r(he):r(ue,!1)})}_(O);var M=f(O,2);Ne(M),Q(2),_(L);var j=f(L,2);{var ge=r=>{Ye(r,{children:(d,x)=>{Q();var T=V();K(()=>de(T,l())),m(d,T)}})};S(j,r=>{n()&&r(ge)})}var pe=f(j,2);{var ve=r=>{const d=ee(()=>e().steps),x=ee(()=>e().stepIndex);var T=Ae(),v=z(T);{var Y=R=>{var w=at(),$=z(w),D=y($);{var U=C=>{ae(C,{get cnf(){return I(d)[I(x)].inSnapshot}})};S(D,C=>{I(x)<I(d).length&&I(d)[I(x)].inSnapshot&&!I(d)[I(x)].inSnapshot.isEmpty()&&C(U)})}_($);var u=f($,2);We(u,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{a.update(C=>(C.prevStep(),C)),o.save()},onNextClick:()=>{a.update(C=>(C.nextStep(),C)),o.save()}});var J=f(u,2),fe=y(J);{var me=C=>{re(C,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-3CG"})};S(fe,C=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&C(me)})}_(J),m(R,w)},W=R=>{var w=rt();m(R,w)};S(v,R=>{I(d).length?R(Y):R(W,!1)})}m(r,T)},Ce=r=>{var d=nt(),x=y(d),T=y(x);{var v=u=>{ae(u,{get cnf(){return e().inInstance}})};S(T,u=>{e().inInstance&&!e().inInstance.isEmpty()&&u(v)})}var Y=f(T,2);{var W=u=>{ze(u,{get cert(){return e().inCert}})};S(Y,u=>{e().inCert&&u(W)})}_(x);var R=f(x,2),w=y(R);{var $=u=>{re(u,{get graph(){return e().outInstance},style:"3SAT-3CG"})};S(w,u=>{e().outInstance&&!e().outInstance.isEmpty()&&u($)})}var D=f(w,2);{var U=u=>{qe(u,{get cert(){return e().outCert}})};S(D,u=>{e().outCert&&u(U)})}_(R),_(d),m(r,d)};S(pe,r=>{c()?r(ve):r(Ce,!1)})}_(G),K((r,d)=>{P.disabled=r,O.disabled=d},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||n(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||n()]),Pe(M,c,r=>ye(h,r)),m(A,G),ce(),s()}Ee(["click"]);export{mt as component,ft as universal};
