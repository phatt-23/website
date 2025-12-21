import"../chunks/DsnmJJEf.js";import"../chunks/DVXSbgSC.js";import{p as ie,f as w,s as m,d as y,r as I,b,c as ce,a as U,t as j,m as C,ap as Ce,aq as _e,J as Se,$ as Ie,u as q,K as Q,am as D,an as xe,ac as ee}from"../chunks/0h0eovDe.js";import{s as de,d as Ee}from"../chunks/BeBJMhcX.js";import{i as S,s as L,a as Te,c as Re,b as ye}from"../chunks/E6MyXn9j.js";import{l as Fe,r as we}from"../chunks/CSnGU0Cu.js";import{U as M,e as Ne,i as Ae,k as te,q as g,l as se,r as Be,R as Ge,G as Ze,E as Z,s as Oe,S as $e,u as Xe,a as Le,c as Pe,b as ke,d as ze,f as Ve}from"../chunks/C6qEDlbA.js";import{i as We}from"../chunks/DaAev7kg.js";import{C as Ye,E as De,R as ae,a as Ue}from"../chunks/CcRITlvi.js";import{R as re}from"../chunks/Bnlbtspj.js";const je=!0,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:je},Symbol.toStringTag,{value:"Module"}));var Me=w("<p>The graph can't be colored by 3 colors.</p>"),He=w("<li> </li>"),Ke=w("The color mapping for 3-coloring: <ul></ul>",1),Je=w("<main><h2>CertRenderer 3CG</h2> <!></main>");function qe(x,t){ie(t,!0);function e(s){switch(s){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${s} not supported.`)}}var n=Je(),c=m(y(n),2);{var l=s=>{var o=Me();b(s,o)},i=s=>{var o=Ke(),a=m(U(o));Ne(a,21,()=>t.cert.coloring,Ae,(h,_)=>{var p=Ce(()=>_e(C(_),2));let E=()=>C(p)[0],N=()=>C(p)[1];var G=He(),A=y(G);I(G),j(X=>de(A,`${E()??""} → ${N()??""} (${X??""})`),[()=>e(N())]),b(h,G)}),I(a),b(s,o)};S(c,s=>{t.cert==M?s(l):s(i,!1)})}I(n),b(x,n),ce()}class ne{decode(t,e){const n=new Map;return e.coloring.forEach((c,l)=>{const i=c,s=l;if(s.startsWith(te)){const o=this.cutTruePrefix(s);i==g.COLOR_TRUE?this.setAssignment(n,o,!0):i==g.COLOR_FALSE&&this.setAssignment(n,o,!1)}else if(s.startsWith(se)){const o=this.cutFalsePrefix(s);i==g.COLOR_TRUE?this.setAssignment(n,o,!1):i==g.COLOR_FALSE&&this.setAssignment(n,o,!0)}}),new Ye(n)}setAssignment(t,e,n){if(t.has(e)){const c=t.get(e);Be(c==n,`Id: ${e}The current state (${n}) and the previous state (${c})are not the same.`)}t.set(e,n)}cutTruePrefix(t){return t.slice(te.length)}cutFalsePrefix(t){return t.slice(se.length)}}class Qe extends Ge{constructor(t){super(t)}doReduce(){const t=[],e=this.createCoreGadget(new Ze),n=this.createVariableGadgets(e.graph),c=this.createClauseGadgets(n.graph),l=c.graph;return t.push(e.step,n.step,c.step),{outInstance:l,steps:t}}createClauseGadgets(t){const e=-this.r,n=this.d/this.dc;let c=0;const l=i=>i.slice(Oe.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(i=>{const s=[],o=[];for(let a=0;a<6;a++){const h=l(i.id)+"-"+a;s.push({id:g.CLAUSE_NODE_PREFIX+h,label:h,position:{x:(c+a%3*n+e)*this.unit,y:(a<3?0:1)*this.unit}})}c+=(this.sc+this.wc)*n,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const h=typeof a[0]=="number"?s[a[0]]:a[0],_=typeof a[1]=="number"?s[a[1]]:a[1];o.push({id:Z+`${h.label}-${_.label}`,from:h.id,to:_.id,classes:"muted"})}),i.literals.forEach((a,h)=>{const _=(a.negated?g.FALSE_VAR_NODE_PREFIX:g.TRUE_VAR_NODE_PREFIX)+a.varName,p=s[h];o.push({id:Z+`${_}-${p.label}`,from:_,to:p.id})}),s.forEach(a=>t.addNode(a)),o.forEach(a=>t.addEdge(a))}),{graph:t,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
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
                `,inSnapshot:this.inInstance,outSnapshot:t.copy()}}}createVariableGadgets(t){t.edges.forEach(p=>{const E=this.r*this.unit;p.controlPointDistances=[-E,-E]});const e=-45*Math.PI/180,n=Math.cos(e),c=Math.sin(e),l=this.r*c,i=this.d*n,s=i/2;let o=0;const a=i/this.dv,h=-s;this.inInstance.variables.forEach(p=>{const E={id:g.TRUE_VAR_NODE_PREFIX+p,position:{x:(o+h)*this.unit,y:l*this.unit}},N={id:g.FALSE_VAR_NODE_PREFIX+p,position:{x:(o+a+h)*this.unit,y:l*this.unit}};o+=(this.sv+this.wv)*a,t.addNode(E),t.addNode(N),[{id:Z+p+"true-false",from:E.id,to:N.id,classes:"muted"},{id:Z+p+"true-B",from:E.id,to:g.CORE.B,classes:"muted"},{id:Z+p+"false-B",from:N.id,to:g.CORE.B,classes:"muted"}].forEach(A=>t.addEdge(A))});const _={id:"add-vars",title:"Add variable gadgets",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return{graph:t,step:_}}createCoreGadget(t){const e=Object.values(this.coreNodes),c=360/e.length*Math.PI/180;let l=Math.PI/6;e.forEach(s=>{s.position={x:Math.cos(l)*this.unit,y:Math.sin(l)*this.unit},t.addNode(s),l+=c}),[["F","T"],["B","F"],["T","B"]].forEach(([s,o])=>{const a=this.coreNodes[s],h=this.coreNodes[o];t.addEdge({id:Z+`${a.label}-${h.label}`,from:a.id,to:h.id,classes:"muted core"})}),t.edges.forEach(s=>{s.classes+=" outer-circle";const o=this.unit;s.controlPointDistances=[-o,-o]});const i={id:"add-core",title:"Create the core",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return t.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),t.edges.forEach(s=>{const o=this.r*this.unit;s.controlPointDistances=[-o,-o]}),{graph:t,step:i}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:g.CORE.F,label:"F",classes:"F",color:g.COLOR_FALSE},T:{id:g.CORE.T,label:"T",classes:"T",color:g.COLOR_TRUE},B:{id:g.CORE.B,label:"B",classes:"B",color:g.COLOR_BUFFER}}}var et=Object.getOwnPropertyDescriptor,tt=(x,t,e,n)=>{for(var c=n>1?void 0:n?et(t,e):t,l=x.length-1,i;l>=0;l--)(i=x[l])&&(c=i(c)||c);return c};let oe=class{constructor(x){this.coloring=x}};oe=tt([$e.SerializableClass("Certificate3CG")],oe);var st=w('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),at=w("<div><!></div> <!> <div><!></div>",1),rt=w("<span>There are no steps to step through.</span>"),nt=w('<div class="panes svelte-42sez6"><div><!> <!></div> <div><!> <!></div></div>'),ot=w('<main><h1>3SAT to 3CG reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function bt(x,t){ie(t,!1);const e=()=>L(a,"$redStore",i),n=()=>L(_,"$isSolving",i),c=()=>L(h,"$showStepper",i),l=()=>L(p,"$solveMessage",i),[i,s]=Te();let o=Xe(Fe.LS_3SAT_3CG,new Le),{redStore:a,showStepper:h,isSolving:_,solveMessage:p,editorChanged:E,reduce:N,solve:G}=Pe({storage:o,workerUrl:new URL("data:video/mp2t;base64,Ly8gQ3JlYXRlZCBieSBwaGF0dC0yMyBvbiAyMC8xMi8yMDI1CgppbXBvcnQgeyBTb2x2ZXIzQ0cgfSBmcm9tICIkbGliL3NvbHZlL1NvbHZlcjNDRyI7CmltcG9ydCB7IEdyYXBoIH0gZnJvbSAiJGxpYi9pbnN0YW5jZS9HcmFwaCI7CmltcG9ydCB7IFVuc29sdmFibGUgfSBmcm9tICIkbGliL2NvcmUvVW5zb2x2YWJsZSI7CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChlKSA9PiB7CiAgICBjb25zb2xlLmRlYnVnKCdXb3JrZXIzQ0dTb2x2ZXI6Om9ubWVzc2FnZScpOwogICAgY29uc29sZS5kZWJ1ZygnZS5kYXRhJywgZS5kYXRhKTsKCiAgICBjb25zdCBpbnN0YW5jZTogR3JhcGggPSBHcmFwaC5mcm9tU2VyaWFsaXplZFN0cmluZyhlLmRhdGEpOwogICAgICAgIAogICAgY29uc29sZS5kZWJ1ZygnaW5zdGFuY2UnLCBpbnN0YW5jZS5hc1N0cmluZygpKTsKCiAgICBjb25zdCBzb2x2ZXIgPSBuZXcgU29sdmVyM0NHKGluc3RhbmNlKTsKCiAgICBjb25zb2xlLmRlYnVnKCdjYWxsaW5nIHNvbHZlJyk7CiAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIuc29sdmUoKTsKCiAgICBjb25zb2xlLmRlYnVnKCdwb3N0aW5nIHRoZSBwcm9taXNlJyk7CiAgICBwb3N0TWVzc2FnZShyZXN1bHQgfHwgVW5zb2x2YWJsZSk7Cn07Cgo=",import.meta.url),reducerFactory:r=>new Qe(r),decoderFactory:()=>new ne,onSolveFinished:(r,d)=>{if(d==M){Re(a,q(e).inCert=M,q(e));return}r.nodes.forEach(v=>{switch(v.color=d.coloring.get(v.id),v.color){case 0:v.classes+=" red";break;case 1:v.classes+=" green";break;case 2:v.classes+=" blue";break;default:throw new Error(`Value ${v.color} not supported.`)}});const R=new ne().decode(r,d);a.update(v=>(v.inCert=R,v.outCert=d,v.outInstance=r,v))}});We();var A=ot();Se(r=>{var d=st();Ie.title="3SAT to 3CG",b(r,d)});var X=m(y(A),2);De(X,{get cnf(){return e().inInstance},onChange:r=>E(r),onWrongFormat:r=>alert("From editor: "+r)});var P=m(X,2),k=y(P);k.__click=N;var O=m(k,2);O.__click=G;var le=y(O);{var he=r=>{var d=D("Solving...");b(r,d)},ue=r=>{var d=D("Solve");b(r,d)};S(le,r=>{n()?r(he):r(ue,!1)})}I(O);var H=m(O,2);we(H),Q(2),I(P);var K=m(P,2);{var pe=r=>{ze(r,{children:(d,T)=>{Q();var R=D();j(()=>de(R,l())),b(d,R)}})};S(K,r=>{n()&&r(pe)})}var ge=m(K,2);{var ve=r=>{const d=ee(()=>e().steps),T=ee(()=>e().stepIndex);var R=xe(),v=U(R);{var z=F=>{var B=at(),$=U(B),W=y($);{var Y=f=>{ae(f,{get cnf(){return C(d)[C(T)].inSnapshot}})};S(W,f=>{C(T)<C(d).length&&C(d)[C(T)].inSnapshot&&!C(d)[C(T)].inSnapshot.isEmpty()&&f(Y)})}I($);var u=m($,2);Ve(u,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{a.update(f=>(f.prevStep(),f)),o.save()},onNextClick:()=>{a.update(f=>(f.nextStep(),f)),o.save()}});var J=m(u,2),me=y(J);{var be=f=>{re(f,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-3CG"})};S(me,f=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&f(be)})}I(J),b(F,B)},V=F=>{var B=rt();b(F,B)};S(v,F=>{C(d).length?F(z):F(V,!1)})}b(r,R)},fe=r=>{var d=nt(),T=y(d),R=y(T);{var v=u=>{ae(u,{get cnf(){return e().inInstance}})};S(R,u=>{e().inInstance&&!e().inInstance.isEmpty()&&u(v)})}var z=m(R,2);{var V=u=>{Ue(u,{get cert(){return e().inCert}})};S(z,u=>{e().inCert&&u(V)})}I(T);var F=m(T,2),B=y(F);{var $=u=>{re(u,{get graph(){return e().outInstance},style:"3SAT-3CG"})};S(B,u=>{e().outInstance&&!e().outInstance.isEmpty()&&u($)})}var W=m(B,2);{var Y=u=>{qe(u,{get cert(){return e().outCert}})};S(W,u=>{e().outCert&&u(Y)})}I(F),I(d),b(r,d)};S(ge,r=>{c()?r(ve):r(fe,!1)})}I(A),j((r,d)=>{k.disabled=r,O.disabled=d},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||n(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||n()]),ke(H,c,r=>ye(h,r)),b(x,A),ce(),s()}Ee(["click"]);export{bt as component,mt as universal};
