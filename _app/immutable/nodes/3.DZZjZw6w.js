import"../chunks/DsnmJJEf.js";import"../chunks/7c8ahxPy.js";import{p as ie,f as y,s as b,d as w,r as T,b as S,c as ce,a as q,t as z,m as C,ap as Se,aq as Ee,J as Ce,$ as xe,u as Q,K as ee,an as j,ao as Ie,ac as te}from"../chunks/BHy43uIv.js";import{s as de,d as Te}from"../chunks/Bo-e_C1i.js";import{i as I,s as D,a as Re,c as we,b as Fe}from"../chunks/lPMcd3W4.js";import{l as ye,r as Oe}from"../chunks/hAUU4et8.js";import{U as Y,e as $e,i as Ne,N as se,q as g,d as re,n as le,R as Ae,G as Ge,E as G,r as Pe,S as ke,u as Be,l as Le,m as De,b as Me,W as Xe,o as Ue,p as Ve}from"../chunks/CdN2dGYn.js";import{i as We}from"../chunks/Bic1S2_H.js";import{C as je,E as qe,R as ae,a as ze}from"../chunks/Bnn5UGat.js";import{R as oe}from"../chunks/C8rFwzaR.js";const Ye=!0,bt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ye},Symbol.toStringTag,{value:"Module"}));var Ze=y("<p>The graph can't be colored by 3 colors.</p>"),He=y("<li> </li>"),Ke=y("The color mapping for 3-coloring: <ul></ul>",1),Je=y("<main><h2>CertRenderer 3CG</h2> <!></main>");function Qe(E,t){ie(t,!0);function e(s){switch(s){case 0:return"Red";case 1:return"Green";case 2:return"Blue";default:throw new Error(`The colorNum ${s} not supported.`)}}var o=Je(),d=b(w(o),2);{var l=s=>{var n=Ze();S(s,n)},c=s=>{var n=Ke(),a=b(q(n));$e(a,21,()=>t.cert.coloring,Ne,(h,x)=>{var v=Se(()=>Ee(C(x),2));let R=()=>C(v)[0],O=()=>C(v)[1];var A=He(),$=w(A);T(A),z(L=>de($,`${R()??""} → ${O()??""} (${L??""})`),[()=>e(O())]),S(h,A)}),T(a),S(s,n)};I(d,s=>{t.cert==Y?s(l):s(c,!1)})}T(o),S(E,o),ce()}class ne{decode(t,e){const o=new Map;return console.debug("outCert.coloring",e.coloring),e.coloring.forEach((d,l)=>{const c=d,s=l;if(s.startsWith(se)){const n=this.cutTruePrefix(s);c==g.COLOR_TRUE?this.setAssignment(o,n,!0):c==g.COLOR_FALSE&&this.setAssignment(o,n,!1)}else if(s.startsWith(re)){const n=this.cutFalsePrefix(s);c==g.COLOR_TRUE?this.setAssignment(o,n,!1):c==g.COLOR_FALSE&&this.setAssignment(o,n,!0)}}),new je(o)}setAssignment(t,e,o){if(t.has(e)){const d=t.get(e);le(d==o,`Id: ${e}The current state (${o}) and the previous state (${d})are not the same.`)}t.set(e,o)}cutTruePrefix(t){return t.slice(se.length)}cutFalsePrefix(t){return t.slice(re.length)}}class et extends Ae{constructor(t){super(t)}doReduce(){const t=[],e=this.createCoreGadget(new Ge),o=this.createVariableGadgets(e.graph),d=this.createClauseGadgets(o.graph),l=d.graph;return t.push(e.step,o.step,d.step),{outInstance:l,steps:t}}createClauseGadgets(t){const e=-this.r,o=this.d/this.dc;let d=0;const l=c=>c.slice(Pe.CLAUSE_PREFIX.length);return this.inInstance.clauses.forEach(c=>{const s=[],n=[];for(let a=0;a<6;a++){const h=l(c.id)+"-"+a;s.push({id:g.CLAUSE_NODE_PREFIX+h,label:h,position:{x:(d+a%3*o+e)*this.unit,y:(a<3?0:1)*this.unit}})}d+=(this.sc+this.wc)*o,[[0,3],[1,4],[2,5],[this.coreNodes.T,0],[this.coreNodes.T,1],[this.coreNodes.T,2],[this.coreNodes.T,3],[3,4],[4,5],[5,this.coreNodes.F]].forEach(a=>{const h=typeof a[0]=="number"?s[a[0]]:a[0],x=typeof a[1]=="number"?s[a[1]]:a[1];n.push({id:G+`${h.label}-${x.label}`,from:h.id,to:x.id,classes:"muted"})}),c.literals.forEach((a,h)=>{const x=(a.negated?g.FALSE_VAR_NODE_PREFIX:g.TRUE_VAR_NODE_PREFIX)+a.varName,v=s[h];n.push({id:G+`${x}-${v.label}`,from:x,to:v.id})}),s.forEach(a=>t.addNode(a)),n.forEach(a=>t.addEdge(a))}),{graph:t,step:{id:"add-clause-gadgets",title:"Add clause gadgets",description:`
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
                `,inSnapshot:this.inInstance,outSnapshot:t.copy()}}}createVariableGadgets(t){t.edges.forEach(v=>{const R=this.r*this.unit;v.controlPointDistances=[-R,-R]});const e=-45*Math.PI/180,o=Math.cos(e),d=Math.sin(e),l=this.r*d,c=this.d*o,s=c/2;let n=0;const a=c/this.dv,h=-s;this.inInstance.variables.forEach(v=>{const R={id:g.TRUE_VAR_NODE_PREFIX+v,position:{x:(n+h)*this.unit,y:l*this.unit}},O={id:g.FALSE_VAR_NODE_PREFIX+v,position:{x:(n+a+h)*this.unit,y:l*this.unit}};n+=(this.sv+this.wv)*a,t.addNode(R),t.addNode(O),[{id:G+v+"true-false",from:R.id,to:O.id,classes:"muted"},{id:G+v+"true-B",from:R.id,to:g.CORE.B,classes:"muted"},{id:G+v+"false-B",from:O.id,to:g.CORE.B,classes:"muted"}].forEach($=>t.addEdge($))});const x={id:"add-vars",title:"Add variable gadgets",description:`
                <p>
                    Create a variable gadget for each variable in the formula 
                    <span>${this.inInstance.asHtmlString()}</span>, namely:

                    <ul>
                        ${this.inInstance.variables.map(v=>`
                                <li>
                                    ${v}
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return{graph:t,step:x}}createCoreGadget(t){const e=Object.values(this.coreNodes),d=360/e.length*Math.PI/180;let l=Math.PI/6;e.forEach(s=>{s.position={x:Math.cos(l)*this.unit,y:Math.sin(l)*this.unit},t.addNode(s),l+=d}),[["F","T"],["B","F"],["T","B"]].forEach(([s,n])=>{const a=this.coreNodes[s],h=this.coreNodes[n];t.addEdge({id:G+`${a.label}-${h.label}`,from:a.id,to:h.id,classes:"muted core"})}),t.edges.forEach(s=>{s.classes+=" outer-circle";const n=this.unit;s.controlPointDistances=[-n,-n]});const c={id:"add-core",title:"Create the core",description:`
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
            `,inSnapshot:this.inInstance,outSnapshot:t.copy()};return t.nodes.forEach(s=>{s.position.x*=this.d*.8,s.position.y*=this.d*.8}),t.edges.forEach(s=>{const n=this.r*this.unit;s.controlPointDistances=[-n,-n]}),{graph:t,step:c}}get wv(){return 1}get sv(){return 1}get wc(){return 2}get sc(){return 2}get dv(){return(this.sv+this.wv)*this.inInstance.variables.length-this.wv}get dc(){return(this.sc+this.wc)*this.inInstance.clauses.length-this.wc}get d(){return Math.max(this.dv,this.dc)}get r(){return this.d/2}unit=80;coreNodes={F:{id:g.CORE.F,label:"F",classes:"F",color:g.COLOR_FALSE},T:{id:g.CORE.T,label:"T",classes:"T",color:g.COLOR_TRUE},B:{id:g.CORE.B,label:"B",classes:"B",color:g.COLOR_BUFFER}}}var tt=Object.getOwnPropertyDescriptor,st=(E,t,e,o)=>{for(var d=o>1?void 0:o?tt(t,e):t,l=E.length-1,c;l>=0;l--)(c=E[l])&&(d=c(d)||d);return d};let Z=class{constructor(E){this.coloring=E}};Z=st([ke.SerializableClass("Certificate3CG")],Z);function rt(E){return new Worker(""+new URL("../workers/Worker3CGSolver-BlIfPeu5.js",import.meta.url).href,{name:E?.name})}var at=y('<meta name="description" content="Redcution from 3SAT to 3CG"/>'),ot=y("<div><!></div> <!> <div><!></div>",1),nt=y("<span>There are no steps to step through.</span>"),it=y('<div class="panes svelte-42sez6"><div><!> <!></div> <div><!> <!></div></div>'),ct=y('<main><h1>3SAT to 3CG reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function St(E,t){ie(t,!1);const e=()=>D(a,"$redStore",c),o=()=>D(x,"$isSolving",c),d=()=>D(h,"$showStepper",c),l=()=>D(v,"$solveMessage",c),[c,s]=Re();let n=Be(ye.LS_3SAT_3CG,new Le),{redStore:a,showStepper:h,isSolving:x,solveMessage:v,editorChanged:R,reduce:O,solve:A}=De({storage:n,workerFactory:()=>new rt,reducerFactory:r=>new et(r),decoderFactory:()=>new ne,createWorkerRequest:r=>({graph:r.toSerializedString()}),resolveWorkerResponse:r=>{const i=r;le(i.type==Xe.RESULT);const f=new Map;return i.coloring.forEach(m=>{const u=m[0],k=m[1];f.set(u,k)}),new Z(f)},onSolveFinished:(r,i)=>{if(i==Y){we(a,Q(e).inCert=Y,Q(e));return}r.nodes.forEach(u=>{switch(u.color=i.coloring.get(u.id),u.color){case 0:u.classes+=" red";break;case 1:u.classes+=" green";break;case 2:u.classes+=" blue";break;default:throw new Error(`Value ${u.color} not supported.`)}});const m=new ne().decode(r,i);a.update(u=>(u.inCert=m,u.outCert=i,u.outInstance=r,u))}});We();var $=ct();Ce(r=>{var i=at();xe.title="3SAT to 3CG",S(r,i)});var L=b(w($),2);qe(L,{get cnf(){return e().inInstance},onChange:r=>R(r),onWrongFormat:r=>alert("From editor: "+r)});var M=b(L,2),X=w(M);X.__click=O;var P=b(X,2);P.__click=A;var he=w(P);{var ue=r=>{var i=j("Solving...");S(r,i)},pe=r=>{var i=j("Solve");S(r,i)};I(he,r=>{o()?r(ue):r(pe,!1)})}T(P);var H=b(P,2);Oe(H),ee(2),T(M);var K=b(M,2);{var ve=r=>{Ue(r,{children:(i,f)=>{ee();var m=j();z(()=>de(m,l())),S(i,m)}})};I(K,r=>{o()&&r(ve)})}var ge=b(K,2);{var fe=r=>{const i=te(()=>e().steps),f=te(()=>e().stepIndex);var m=Ie(),u=q(m);{var k=F=>{var N=ot(),B=q(N),V=w(B);{var W=_=>{ae(_,{get cnf(){return C(i)[C(f)].inSnapshot}})};I(V,_=>{C(f)<C(i).length&&C(i)[C(f)].inSnapshot&&!C(i)[C(f)].inSnapshot.isEmpty()&&_(W)})}T(B);var p=b(B,2);Ve(p,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{a.update(_=>(_.prevStep(),_)),n.save()},onNextClick:()=>{a.update(_=>(_.nextStep(),_)),n.save()}});var J=b(p,2),_e=w(J);{var be=_=>{oe(_,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"3SAT-3CG"})};I(_e,_=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&_(be)})}T(J),S(F,N)},U=F=>{var N=nt();S(F,N)};I(u,F=>{C(i).length?F(k):F(U,!1)})}S(r,m)},me=r=>{var i=it(),f=w(i),m=w(f);{var u=p=>{ae(p,{get cnf(){return e().inInstance}})};I(m,p=>{e().inInstance&&!e().inInstance.isEmpty()&&p(u)})}var k=b(m,2);{var U=p=>{ze(p,{get cert(){return e().inCert}})};I(k,p=>{e().inCert&&p(U)})}T(f);var F=b(f,2),N=w(F);{var B=p=>{oe(p,{get graph(){return e().outInstance},style:"3SAT-3CG"})};I(N,p=>{e().outInstance&&!e().outInstance.isEmpty()&&p(B)})}var V=b(N,2);{var W=p=>{Qe(p,{get cert(){return e().outCert}})};I(V,p=>{e().outCert&&p(W)})}T(F),T(i),S(r,i)};I(ge,r=>{d()?r(fe):r(me,!1)})}T($),z((r,i)=>{X.disabled=r,P.disabled=i},[()=>!e().hasInInstance()||e().hasOutInstance()||e().inInstance?.isEmpty()||o(),()=>!e().hasInstances()||e().hasOutCertificate()||e().inInstance?.isEmpty()||o()]),Me(H,d,r=>Fe(h,r)),S(E,$),ce(),s()}Te(["click"]);export{St as component,bt as universal};
