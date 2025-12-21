import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{p as ie,f as N,s as m,d as y,r as S,b as C,c as ce,a as z,t as K,m as b,ap as be,aq as Ie,J as _e,$ as Se,u as q,K as Q,am as W,an as Ee,ac as ee}from"../chunks/0h0eovDe.js";import{s as de,d as xe}from"../chunks/BeBJMhcX.js";import{i as _,s as X,a as Ae,c as Te,b as ye}from"../chunks/E6MyXn9j.js";import{l as Re,r as Ne}from"../chunks/CSnGU0Cu.js";import{U as M,e as Fe,i as Ge,k as te,q as g,l as se,r as we,R as Be,G as Ze,E as Z,s as Oe,S as $e,u as ke,a as Xe,c as Le,b as Pe,d as Ye,f as De}from"../chunks/DCk9rHG9.js";import{i as Ue}from"../chunks/DaAev7kg.js";import{C as Ve,E as We,R as ae,a as ze}from"../chunks/BCpjnFsP.js";import{R as re}from"../chunks/YqW4Rh_A.js";const Ke=!0,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ke},Symbol.toStringTag,{value:"Module"}));var Me=N("<p>The graph can't be colored by 3 colors.</p>"),He=N("<li> </li>"),je=N("The color mapping for 3-coloring: <ul></ul>",1),Je=N("<main><h2>CertRenderer 3CG</h2> <!></main>");function qe(E,t){ie(t,!0);function e(s){switch(s){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${s} not supported.`)}}var n=Je(),c=m(y(n),2);{var l=s=>{var o=Me();C(s,o)},i=s=>{var o=je(),a=m(z(o));Fe(a,21,()=>t.cert.coloring,Ge,(h,I)=>{var p=be(()=>Ie(b(I),2));let x=()=>b(p)[0],F=()=>b(p)[1];var B=He(),G=y(B);S(B),K(k=>de(G,`${x()??""} → ${F()??""} (${k??""})`),[()=>e(F())]),C(h,B)}),S(a),C(s,o)};_(c,s=>{t.cert==M?s(l):s(i,!1)})}S(n),C(E,n),ce()}class ne{decode(t,e){const n=new Map;return e.coloring.forEach((c,l)=>{const i=c,s=l;if(s.startsWith(te)){const o=this.cutTruePrefix(s);i==g.COLOR_TRUE?this.setAssignment(n,o,!0):i==g.COLOR_FALSE&&this.setAssignment(n,o,!1)}else if(s.startsWith(se)){const o=this.cutFalsePrefix(s);i==g.COLOR_TRUE?this.setAssignment(n,o,!1):i==g.COLOR_FALSE&&this.setAssignment(n,o,!0)}}),new Ve(n)}setAssignment(t,e,n){if(t.has(e)){const c=t.get(e);we(c==n,`Id: ${e}The current state (${n}) and the previous state (${c})are not the same.`)}t.set(e,n)}cutTruePrefix(t){return t.slice(te.length)}cutFalsePrefix(t){return t.slice(se.length)}}class Qe extends Be{constructor(t){super(t)}doReduce(){const t=[],e=this.createCoreGadget(new Ze),n=this.createVariableGadgets(e.graph),c=this.createClauseGadgets(n.graph),l=c.graph;return t.push(e.step,n.step,c.step),{outInstance:l,steps:t}}createClauseGadgets(t){const e=-this.r,n=this.d/this.dc;let c=0;const l=i=>i.slice(Oe.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(i=>{const s=[],o=[];for(let a=0;a<6;a++){const h=l(i.id)+"-"+a;s.push({id:g.CLAUSE_NODE_PREFIX+h,label:h,position:{x:(c+a%3*n+e)*this.unit,y:(a<3?0:1)*this.unit}})}c+=(this.sc+this.wc)*n,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const h=typeof a[0]=="number"?s[a[0]]:a[0],I=typeof a[1]=="number"?s[a[1]]:a[1];o.push({id:Z+`${h.label}-${I.label}`,from:h.id,to:I.id,classes:"muted"})}),i.literals.forEach((a,h)=>{const I=(a.negated?g.FALSE_VAR_NODE_PREFIX:g.TRUE_VAR_NODE_PREFIX)+a.varName,p=s[h];o.push({id:Z+`${I}-${p.label}`,from:I,to:p.id})}),s.forEach(a=>t.addNode(a)),o.forEach(a=>t.addEdge(a))}),{graph:t,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
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
                `,inSnapshot:this.inInstance,outSnapshot:t.copy()}}}createVariableGadgets(t){t.edges.forEach(p=>{const x=this.r*this.unit;p.controlPointDistances=[-x,-x]});const e=-45*Math.PI/180,n=Math.cos(e),c=Math.sin(e),l=this.r*c,i=this.d*n,s=i/2;let o=0;const a=i/this.dv,h=-s;this.inInstance.variables.forEach(p=>{const x={id:g.TRUE_VAR_NODE_PREFIX+p,position:{x:(o+h)*this.unit,y:l*this.unit}},F={id:g.FALSE_VAR_NODE_PREFIX+p,position:{x:(o+a+h)*this.unit,y:l*this.unit}};o+=(this.sv+this.wv)*a,t.addNode(x),t.addNode(F),[{id:Z+p+"true-false",from:x.id,to:F.id,classes:"muted"},{id:Z+p+"true-B",from:x.id,to:g.CORE.B,classes:"muted"},{id:Z+p+"false-B",from:F.id,to:g.CORE.B,classes:"muted"}].forEach(G=>t.addEdge(G))});const I={id:"add-vars",title:"Add variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return{graph:t,step:I}}createCoreGadget(t){const e=Object.values(this.coreNodes),c=360/e.length*Math.PI/180;let l=Math.PI/6;e.forEach(s=>{s.position={x:Math.cos(l)*this.unit,y:Math.sin(l)*this.unit},t.addNode(s),l+=c}),[["F","T"],["B","F"],["T","B"]].forEach(([s,o])=>{const a=this.coreNodes[s],h=this.coreNodes[o];t.addEdge({id:Z+`${a.label}-${h.label}`,from:a.id,to:h.id,classes:"muted core"})}),t.edges.forEach(s=>{s.classes+=" outer-circle";const o=this.unit;s.controlPointDistances=[-o,-o]});const i={id:"add-core",title:"Create the core",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return t.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),t.edges.forEach(s=>{const o=this.r*this.unit;s.controlPointDistances=[-o,-o]}),{graph:t,step:i}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:g.CORE.F,label:"F",classes:"F",color:g.COLOR_FALSE},T:{id:g.CORE.T,label:"T",classes:"T",color:g.COLOR_TRUE},B:{id:g.CORE.B,label:"B",classes:"B",color:g.COLOR_BUFFER}}}var et=Object.getOwnPropertyDescriptor,tt=(E,t,e,n)=>{for(var c=n>1?void 0:n?et(t,e):t,l=E.length-1,i;l>=0;l--)(i=E[l])&&(c=i(c)||c);return c};let oe=class{constructor(E){this.coloring=E}};oe=tt([$e.SerializableClass("Certificate3CG")],oe);var st=N('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),at=N("<div><!></div> <!> <div><!></div>",1),rt=N("<span>There are no steps to step through.</span>"),nt=N('<div class="panes svelte-42sez6"><div><!> <!></div> <div><!> <!></div></div>'),ot=N('<main><h1>3SAT to 3CG reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Ct(E,t){ie(t,!1);const e=()=>X(a,"$redStore",i),n=()=>X(I,"$isSolving",i),c=()=>X(h,"$showStepper",i),l=()=>X(p,"$solveMessage",i),[i,s]=Ae();let o=ke(Re.LS_3SAT_3CG,new Xe),{redStore:a,showStepper:h,isSolving:I,solveMessage:p,editorChanged:x,reduce:F,solve:B}=Le({storage:o,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMC8xMi8yMDI1CgppbXBvcnQgeyBTb2x2ZXIzQ0cgfSBmcm9tICIkbGliL3NvbHZlL1NvbHZlcjNDRyI7CmltcG9ydCB7IEdyYXBoIH0gZnJvbSAiJGxpYi9pbnN0YW5jZS9HcmFwaCI7CmltcG9ydCB7IFVuc29sdmFibGUgfSBmcm9tICIkbGliL2NvcmUvVW5zb2x2YWJsZSI7CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7CiAgICBjb25zb2xlLmRlYnVnKCdXb3JrZXIzQ0dTb2x2ZXI6Om9ubWVzc2FnZScpOwogICAgY29uc29sZS5kZWJ1ZygnZS5kYXRhJywgZS5kYXRhKTsKCiAgICB0cnkgewogICAgICAgIGNvbnN0IGluc3RhbmNlOiBHcmFwaCA9IEdyYXBoLmZyb21TZXJpYWxpemVkU3RyaW5nKGUuZGF0YSk7CiAgICAgICAgCiAgICAgICAgY29uc29sZS5kZWJ1ZygnaW5zdGFuY2UnLCBpbnN0YW5jZS5hc1N0cmluZygpKTsKCiAgICAgICAgY29uc3Qgc29sdmVyID0gbmV3IFNvbHZlcjNDRyhpbnN0YW5jZSk7CgogICAgICAgIGNvbnNvbGUuZGVidWcoJ2NhbGxpbmcgc29sdmUnKTsKICAgICAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIuc29sdmUoKTsKCiAgICAgICAgY29uc29sZS5kZWJ1ZygncG9zdGluZyB0aGUgcHJvbWlzZScpOwogICAgICAgIHBvc3RNZXNzYWdlKHJlc3VsdCB8fCBVbnNvbHZhYmxlKTsKICAgIH0KICAgIGNhdGNoIChlKSB7CiAgICAgICAgcG9zdE1lc3NhZ2UoZSk7CiAgICB9Cn07Cgo=",import.meta.url),reducerFactory:r=>new Qe(r),decoderFactory:()=>new ne,onSolveFinished:(r,d)=>{if(d==M){Te(a,q(e).inCert=M,q(e));return}r.nodes.forEach(v=>{switch(v.color=d.coloring.get(v.id),v.color){case 0:v.classes+=" red";break;case 1:v.classes+=" green";break;case 2:v.classes+=" blue";break;default:throw new Error(`Value ${v.color} not supported.`)}});const T=new ne().decode(r,d);a.update(v=>(v.inCert=T,v.outCert=d,v.outInstance=r,v))}});Ue();var G=ot();_e(r=>{var d=st();Se.title="3SAT to 3CG",C(r,d)});var k=m(y(G),2);We(k,{get cnf(){return e().inInstance},onChange:r=>x(r),onWrongFormat:r=>alert("From editor: "+r)});var L=m(k,2),P=y(L);P.__click=F;var O=m(P,2);O.__click=B;var le=y(O);{var he=r=>{var d=W("Solving...");C(r,d)},ue=r=>{var d=W("Solve");C(r,d)};_(le,r=>{n()?r(he):r(ue,!1)})}S(O);var H=m(O,2);Ne(H),Q(2),S(L);var j=m(L,2);{var pe=r=>{Ye(r,{children:(d,A)=>{Q();var T=W();K(()=>de(T,l())),C(d,T)}})};_(j,r=>{n()&&r(pe)})}var ge=m(j,2);{var ve=r=>{const d=ee(()=>e().steps),A=ee(()=>e().stepIndex);var T=Ee(),v=z(T);{var Y=R=>{var w=at(),$=z(w),U=y($);{var V=f=>{ae(f,{get cnf(){return b(d)[b(A)].inSnapshot}})};_(U,f=>{b(A)<b(d).length&&b(d)[b(A)].inSnapshot&&!b(d)[b(A)].inSnapshot.isEmpty()&&f(V)})}S($);var u=m($,2);De(u,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{a.update(f=>(f.prevStep(),f)),o.save()},onNextClick:()=>{a.update(f=>(f.nextStep(),f)),o.save()}});var J=m(u,2),me=y(J);{var Ce=f=>{re(f,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-3CG"})};_(me,f=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&f(Ce)})}S(J),C(R,w)},D=R=>{var w=rt();C(R,w)};_(v,R=>{b(d).length?R(Y):R(D,!1)})}C(r,T)},fe=r=>{var d=nt(),A=y(d),T=y(A);{var v=u=>{ae(u,{get cnf(){return e().inInstance}})};_(T,u=>{e().inInstance&&!e().inInstance.isEmpty()&&u(v)})}var Y=m(T,2);{var D=u=>{ze(u,{get cert(){return e().inCert}})};_(Y,u=>{e().inCert&&u(D)})}S(A);var R=m(A,2),w=y(R);{var $=u=>{re(u,{get graph(){return e().outInstance},style:"3SAT-3CG"})};_(w,u=>{e().outInstance&&!e().outInstance.isEmpty()&&u($)})}var U=m(w,2);{var V=u=>{qe(u,{get cert(){return e().outCert}})};_(U,u=>{e().outCert&&u(V)})}S(R),S(d),C(r,d)};_(ge,r=>{c()?r(ve):r(fe,!1)})}S(G),K((r,d)=>{P.disabled=r,O.disabled=d},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||n(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||n()]),Pe(H,c,r=>ye(h,r)),C(E,G),ce(),s()}xe(["click"]);export{Ct as component,mt as universal};
