import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{f as _,b as u,p as ee,K as te,c as re,$ as ae,h as F,d as M,s as w,r as L,a as O,a9 as S,S as se}from"../chunks/DWngNMqy.js";import{i as j,s as oe,a as k,c as ne}from"../chunks/Cy94KniK.js";import{i as ie}from"../chunks/BwlNufZT.js";import{a as de,C as ce}from"../chunks/CipesoPF.js";import{E as le,R as pe}from"../chunks/Br0WSqCJ.js";import{H as E,R as he,G as ue,E as T,j as Y,S as ge,u as $e,o as _e,p as Ie,q as Ce,U as x,r as fe,W as ve,t as me,O as Ee,I as be}from"../chunks/BfLtls2m.js";import{R as G}from"../chunks/DAJafS3b.js";import{l as Re}from"../chunks/uXYcvkjH.js";import{C as Se}from"../chunks/J--iQTcu.js";var ye=_("<p>The graph doesn't contain a Hamiltonian circuit.</p>");function we(c,r){de(c,{get cert(){return r.cert},unsolvablePlaceholder:e=>{var t=ye();u(e,t)},$$slots:{unsolvablePlaceholder:!0}})}const Pe=!0,Ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pe},Symbol.toStringTag,{value:"Module"}));class W{decode(r,a){const e=[];a.path.forEach(i=>{const{id:l,label:s}=this.getNodeId(i);e.push({id:l,label:s})});const t=new Array;let d;for(let i=0;i<e.length;i++)d&&d.id==e[i].id||(d=e[i],t.push({id:d.id,label:d.label}));return new Se(t)}nodePrefixes=[[E.INCOMING_NODE_PREFIX,"_{i}"],[E.OUTGOING_NODE_PREFIX,"_{o}"],[E.GAP_NODE_PREFIX,"_{b}"]];getNodeId(r){const a=r.id;for(let e=0;e<this.nodePrefixes.length;e++){const t=this.nodePrefixes[e];if(a.startsWith(t[0]))return{id:a.slice(t[0].length),label:r.label.slice(0,r.label.length-t[1].length)}}throw new Error(`Encountered node that doesn't start with any of the legal prefixes: ${a}`)}}class He extends he{nodeDist=80;tripletDist=6*this.nodeDist;nodeCount;circum;radius;radStep;startRot;constructor(r){if(super(r),r.isEmpty())throw new Error("Reducer doesn't accept empty graphs (Graph with node nodes).");this.nodeCount=r.nodes.length,this.circum=this.tripletDist*this.nodeCount,this.radius=this.circum/(2*Math.PI),this.radStep=2*Math.PI/this.nodeCount,this.startRot=.5*Math.PI}doReduce(){const r=[],a=this.createNodeTriplets();r.push(...a.steps);const e=this.connectEdges(a.graph.copy());return r.push(...e.steps),{outInstance:e.graph,steps:r}}createNodeTriplets(){const r=[],a=new ue;return this.inInstance.nodes.forEach((e,t)=>{const d={x:this.radius*Math.cos(t*this.radStep-this.startRot-.2*this.radStep),y:this.radius*Math.sin(t*this.radStep-this.startRot-.2*this.radStep)},i={x:this.radius*Math.cos(t*this.radStep-this.startRot),y:this.radius*Math.sin(t*this.radStep-this.startRot)},l={x:this.radius*Math.cos(t*this.radStep-this.startRot+.2*this.radStep),y:this.radius*Math.sin(t*this.radStep-this.startRot+.2*this.radStep)},s={in:{id:E.INCOMING_NODE_PREFIX+e.id,label:`${e.label}_{i}`,position:d,classes:e.classes},gap:{id:E.GAP_NODE_PREFIX+e.id,label:`${e.label}_{b}`,position:i,classes:e.classes},out:{id:E.OUTGOING_NODE_PREFIX+e.id,label:`${e.label}_{o}`,position:l,classes:e.classes}};Object.values(s).forEach(m=>a.addNode(m)),a.addEdge({id:T+`${s.in.id}-${s.gap.id}`,from:s.in.id,to:s.gap.id}),a.addEdge({id:T+`${s.gap.id}-${s.out.id}`,from:s.gap.id,to:s.out.id})}),r.push({id:"create-node-triplets",title:"Create node triplets",description:`
                <p> 
                    For every node $v \\in V_0$ of the original graph $G_0 = (V_0,E_0)$,
                    create three nodes - $v_{i}$, $v_{o}$ and $v_{b}$. 
                    Each represents a different attribute of the node $v$:
                    
                    <ul>
                        <li>
                            $v_{i}$ is the incoming end,
                        </li>
                        <li>
                            $v_{o}$ is the outgoing end,
                        </li>
                        <li>
                            and $v_{b}$ serves as a bridge between the incoming and outgoing ends. 
                        </li>
                    </ul>
                </p>
                <p>
                    Connect the incoming node $v_i$ and the outgoing node $v_o$ with the bridge node $v_b$.
                </p>
                <p>
                    For this particular graph there will be $|V_0| = ${this.nodeCount}$ node ${this.nodeCount==1?"triplet":"triplets"}.

                    $$
                    \\begin{aligned}
                        V_0 = \\{ 
                            ${Y(this.inInstance.nodes.map(e=>e.label),24).map(e=>`& ${e.join(",")}`).join("\\\\")} 
                        \\}
                    \\end{aligned}
                    $$
                    
                    $$
                    \\begin{aligned}
                        ${this.inInstance.nodes.map(e=>`
                            ${e.label} & \\rightarrow (${e.label}_i, ${e.label}_b, ${e.label}_o) \\\\
                        `).join("")}
                    \\end{aligned}
                    $$
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:a.copy(),mapping:{}}),{graph:a,steps:r}}connectEdges(r){const a=[],e=new Array;return this.inInstance.edges.forEach(t=>{const d=this.inInstance.nodes.find(m=>m.id==t.from),i=this.inInstance.nodes.find(m=>m.id==t.to);e.push({from:d,to:i});const l=E.OUTGOING_NODE_PREFIX+d.id,s=E.INCOMING_NODE_PREFIX+i.id;r.addEdge({id:T+`${l}-${s}`,from:l,to:s})}),a.push({id:"connect-edges",title:"Connect edges",description:`
                <p> 
                    For every edge $\\{a,b\\} \\in E_0$ from the original graph $G_0$,
                    connect the nodes $a_o$ and $b_i$ in the reduced graph $G$.
                </p>
                <p>
                    In this particular case, since:
                    
                    $$
                    \\begin{aligned}
                        E_0 = \\{ 
                            ${Y(e.map(t=>`( ${t.from.label}, ${t.to.label} )`),12).map(t=>`& ${t.join(",")}`).join("\\\\")} 
                        \\}
                    \\end{aligned}
                    $$
                    
                    we will add these edges:

                    $$
                    \\begin{aligned}
                        ${e.map(t=>`\\{ ${t.from.label}_o, ${t.to.label}_i \\}`).join(" \\\\ ")}
                    \\end{aligned}
                    $$
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:r.copy(),mapping:{}}),{graph:r,steps:a}}}var Oe=Object.getOwnPropertyDescriptor,Te=(c,r,a,e)=>{for(var t=e>1?void 0:e?Oe(r,a):r,d=c.length-1,i;d>=0;d--)(i=c[d])&&(t=i(t)||t);return t};let N=class{constructor(c){this.path=c}};N=Te([ge.SerializableClass()],N);function Ge(c){return new Worker(""+new URL("../workers/WorkerHCIRCUITSolver-C2Gnko7C.js",import.meta.url).href,{name:c?.name})}var Ne=_('<meta name="description" content="Reduction from HCYCLE to HCIRCUIT"/>'),De=_("<h2>Input HCYCLE Instance</h2>"),Ue=_("<span>Certificate for HCYCLE will appear here.</span>"),Fe=_("<h2>Graph Editor</h2>"),Me=_("<!> <!>",1),Le=_("<h2>Output HCIRCUIT Instance</h2>"),je=_('<span class="placeholder">Certificate for HCIRCUIT will appear here.</span>'),ke=_("<!> <!>",1),Ye=_('<main class="svelte-mqsrj5"><h1>HCYCLE to HCIRCUIT reduction</h1> <div class="card-list svelte-mqsrj5"><!> <!></div></main>');function et(c,r){ee(r,!1);const a=()=>k(s,"$redStore",t),e=()=>k(m,"$showStepper",t),[t,d]=oe(),i=(o,n=S)=>{be(o,{get redStore(){return s},get hideCertificate(){return n()},title:g=>{var C=De();u(g,C)},instance:(g,C=S)=>{var $=se(),f=O($);{var Q=R=>{G(R,{get graph(){return C()},style:"DIRECTED",layout:"circle"})},Z=R=>{pe(R,{get graph(){return C()},style:"DIRECTED",layout:"circle",directed:!0,onAddEdge:H=>{s.update(v=>{let b=v.inInstance;return b.addEdge(H),b.unlabelSolved(),v.reset(),v.setInInstance(b),v}),l.save()},onRemoveEdge:H=>{s.update(v=>{let b=v.inInstance;return b.removeEdgeById(H.id()),b.unlabelSolved(),v.reset(),v.setInInstance(b),v}),l.save()}})};j(f,R=>{n()?R(Q):R(Z,!1)})}u(g,$)},certificate:(g,C=S)=>{ce(g,{get cert(){return C()}})},certificatePlaceholder:g=>{var C=Ue();u(g,C)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let l=$e(Re.LS_HCYCLE_HCIRCUIT,new _e),{redStore:s,showStepper:m,isSolving:X,solveMessage:A,editorChanged:q,reduce:z,solve:V}=Ie({storage:l,workerFactory:()=>new Ge,reducerFactory:o=>new He(o),decoderFactory:()=>new W,createWorkerRequest:o=>({graph:o.toSerializedString()}),resolveWorkerResponse:o=>{const n=o;return fe(n.type==ve.RESULT),new N(n.path)},onSolveFinished:(o,n)=>{if(n==x){ne(s,F(a).inCert=x,F(a));return}const h=new W().decode(o,n),y=a().inInstance;y.labelSolved({path:h.path,directed:!0}),o.labelSolved({path:n.path,directed:!1}),s.update(I=>(I.inInstance=y,I.inCert=h,I.outCert=n,I.outInstance=o,I))}});ie();var P=Ye();te(o=>{var n=Ne();ae.title="HCYCLE to HCIRCUIT",u(o,n)});var D=w(M(P),2),U=M(D);Ce(U,{get redStore(){return s},get isSolving(){return X},get solveMessage(){return A},get showStepper(){return m},get reduce(){return z},get solve(){return V},title:p=>{var h=Fe();u(p,h)},editor:p=>{le(p,{get graph(){return a().inInstance},onChange:h=>q(h),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var B=w(U,2);{var K=o=>{var n=Me(),p=O(n);i(p,()=>!0);var h=w(p,2);me(h,{get redStore(){return s},get storage(){return l},instance:(I,g=S)=>{G(I,{get graph(){return g()},style:"HCIRCUIT",layout:"preset"})},$$slots:{instance:!0}}),u(o,n)},J=o=>{var n=ke(),p=O(n);i(p,()=>!1);var h=w(p,2);Ee(h,{get redStore(){return s},title:$=>{var f=Le();u($,f)},instance:($,f=S)=>{G($,{get graph(){return f()},style:"HCIRCUIT",layout:"preset"})},certificate:($,f=S)=>{we($,{get cert(){return f()}})},certificatePlaceholder:$=>{var f=je();u($,f)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),u(o,n)};j(B,o=>{e()?o(K):o(J,!1)})}L(D),L(P),u(c,P),re(),d()}export{et as component,Ze as universal};
