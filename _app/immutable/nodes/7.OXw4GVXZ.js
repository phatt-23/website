import"../chunks/DsnmJJEf.js";import"../chunks/DQVVHL_C.js";import{f as m,b as g,p as ee,K as te,c as re,$ as se,h as L,d as X,s as y,r as x,a as H,a9 as $,S as ae}from"../chunks/DWngNMqy.js";import{i as Y,s as oe,a as k,c as ne}from"../chunks/Cy94KniK.js";import{i as ie}from"../chunks/BwlNufZT.js";import{a as ce,C as de}from"../chunks/Ba_mITra.js";import{E as le,R as pe}from"../chunks/hPxwD4k4.js";import{d as O,H as I,R as he,E as b,G as ue,S as ge,u as Ie,m as Ce,n as fe,o as me,U as j,p as _e,W as ve,q as Ee,O as Re,I as Se}from"../chunks/C4ZxoCtr.js";import{R as G}from"../chunks/D5S11tbA.js";import{l as Pe}from"../chunks/uXYcvkjH.js";import{C as $e}from"../chunks/Do9HnFH2.js";var Ne=m("<p>The graph doesn't contain a Hamiltonian circuit.</p>");function ye(l,r){ce(l,{get cert(){return r.cert},unsolvablePlaceholder:t=>{var e=Ne();g(t,e)},$$slots:{unsolvablePlaceholder:!0}})}const Oe=!0,Ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:Oe},Symbol.toStringTag,{value:"Module"}));class W{decode(r,s){const t=new Array;s.path.forEach(i=>{const p=this.getNodeName(i.id);t.push(p)});const e=new Array;let a;for(let i=0;i<t.length;i++)a!=t[i]&&(a=t[i],e.push({id:O+a,label:a}));return new $e(e)}nodePrefixes=[I.INCOMING_NODE_PREFIX,I.OUTGOING_NODE_PREFIX,I.GAP_NODE_PREFIX];getNodeName(r){for(let s=0;s<this.nodePrefixes.length;s++){const t=this.nodePrefixes[s];if(r.startsWith(t))return r.slice(t.length)}throw new Error(`Encountered node that doesn't start with any of the legal prefixes: ${r}`)}}class we extends he{nodeDist=80;tripletDist=6*this.nodeDist;nodeCount;circum;radius;radStep;startRot;constructor(r){if(super(r),r.isEmpty())throw new Error("Reducer doesn't accept empty graphs (Graph with node nodes).");this.nodeCount=r.nodes.length,this.circum=this.tripletDist*this.nodeCount,this.radius=this.circum/(2*Math.PI),this.radStep=2*Math.PI/this.nodeCount,this.startRot=.5*Math.PI}doReduce(){const r=[],s=this.createNodeTriplets();r.push(...s.steps);const t=this.connectEdges(s.graph.copy());return r.push(...t.steps),{outInstance:t.graph,steps:r}}connectEdges(r){const s=[],t=a=>a.slice(O.length),e=new Array;return this.inInstance.edges.forEach(a=>{const i=t(a.from),p=t(a.to);e.push({from:i,to:p});const d=I.OUTGOING_NODE_PREFIX+i,c=I.INCOMING_NODE_PREFIX+p;r.addEdge({id:b+`${d}-${c}`,from:d,to:c})}),s.push({id:"connect-edges",title:"Connect edges",description:`
                <p> 
                    For every original edge from node <i>a</i> to node <i>b</i>,
                    connect the node <i>a_out</i> with the node <i>b_in</i>.
                </p>
                <p>
                    In this particular case, add these edges:
                    <ul>
                        ${e.map(a=>`<li>(${a.from}_out, ${a.to}_in)</li>`).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:r.copy(),mapping:{}}),{graph:r,steps:s}}createNodeTriplets(){const r=[],s=new ue;return this.inInstance.nodes.forEach((t,e)=>{const a=t.id.slice(O.length),i={x:this.radius*Math.cos(e*this.radStep-this.startRot-.2*this.radStep),y:this.radius*Math.sin(e*this.radStep-this.startRot-.2*this.radStep)},p={x:this.radius*Math.cos(e*this.radStep-this.startRot),y:this.radius*Math.sin(e*this.radStep-this.startRot)},d={x:this.radius*Math.cos(e*this.radStep-this.startRot+.2*this.radStep),y:this.radius*Math.sin(e*this.radStep-this.startRot+.2*this.radStep)},c={in:{id:I.INCOMING_NODE_PREFIX+a,label:`${a}_{in}`,position:i,classes:t.classes},gap:{id:I.GAP_NODE_PREFIX+a,label:`${a}_{gap}`,position:p,classes:t.classes},out:{id:I.OUTGOING_NODE_PREFIX+a,label:`${a}_{out}`,position:d,classes:t.classes}};Object.values(c).forEach(w=>s.addNode(w)),s.addEdge({id:b+`${c.in.id}-${c.gap.id}`,from:c.in.id,to:c.gap.id}),s.addEdge({id:b+`${c.gap.id}-${c.out.id}`,from:c.gap.id,to:c.out.id})}),r.push({id:"create-node-triplets",title:"Create node triplets",description:`
                <p> 
                    For each node in the original graph,
                    create three nodes that represent:
                    <ul>
                        <li>
                            an in-coming node
                        </li>
                        <li>
                            a gap node
                        </li>
                        <li>
                            and an out-going node
                        </li>
                    </ul>
                </p>
                <p>
                    Connect the in-coming node with the gap-node and the gap-node with the out-going node.
                </p>
                <p>
                    For this particular graph there will be ${this.nodeCount} node ${this.nodeCount==1?"triplet":"triplets"}.
                    ${this.nodeCount==1?"The triplet is:":"The triplets are:"}
                    <ul>  
                        ${this.inInstance.nodes.map(t=>{const e=t.id.slice(O.length);return`
                                <li>
                                    ${e} - (
                                        ${I.INCOMING_NODE_PREFIX+e}, 
                                        ${I.GAP_NODE_PREFIX+e}, 
                                        ${I.OUTGOING_NODE_PREFIX+e}
                                    )
                                </li>
                            `}).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:s.copy(),mapping:{}}),{graph:s,steps:r}}}var Te=Object.getOwnPropertyDescriptor,De=(l,r,s,t)=>{for(var e=t>1?void 0:t?Te(r,s):r,a=l.length-1,i;a>=0;a--)(i=l[a])&&(e=i(e)||e);return e};let U=class{constructor(l){this.path=l}};U=De([ge.SerializableClass()],U);function He(l){return new Worker(""+new URL("../workers/WorkerHCIRCUITSolver-C2Gnko7C.js",import.meta.url).href,{name:l?.name})}var be=m('<meta name="description" content="Reduction from HCYCLE to HCIRCUIT"/>'),Ge=m("<h2>Input HCYCLE Instance</h2>"),Ue=m("<span>Certificate for HCYCLE will appear here.</span>"),Fe=m("<h2>Graph Editor</h2>"),Me=m("<!> <!>",1),Le=m("<h2>Output HCIRCUIT Instance</h2>"),Xe=m('<span class="placeholder">Certificate for HCIRCUIT will appear here.</span>'),xe=m("<!> <!>",1),Ye=m('<main class="svelte-mqsrj5"><h1>HCYCLE to HCIRCUIT reduction</h1> <div class="card-list svelte-mqsrj5"><!> <!></div></main>');function et(l,r){ee(r,!1);const s=()=>k(d,"$redStore",e),t=()=>k(c,"$showStepper",e),[e,a]=oe(),i=(o,n=$)=>{Se(o,{get redStore(){return d},get hideCertificate(){return n()},title:C=>{var v=Ge();g(C,v)},instance:(C,v=$)=>{var f=ae(),E=H(f);{var V=P=>{G(P,{get graph(){return v()},style:"DIRECTED",layout:"circle"})},Z=P=>{pe(P,{get graph(){return v()},style:"DIRECTED",layout:"circle",directed:!0,onAddEdge:D=>{d.update(R=>{let S=R.inInstance;return S.addEdge(D),S.unlabelSolved(),R.reset(),R.setInInstance(S),R}),p.save()},onRemoveEdge:D=>{d.update(R=>{let S=R.inInstance;return S.removeEdgeById(D.id()),S.unlabelSolved(),R.reset(),R.setInInstance(S),R}),p.save()}})};Y(E,P=>{n()?P(V):P(Z,!1)})}g(C,f)},certificate:(C,v=$)=>{de(C,{get cert(){return v()}})},certificatePlaceholder:C=>{var v=Ue();g(C,v)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let p=Ie(Pe.LS_HCYCLE_HCIRCUIT,new Ce),{redStore:d,showStepper:c,isSolving:w,solveMessage:A,editorChanged:q,reduce:z,solve:K}=fe({storage:p,workerFactory:()=>new He,reducerFactory:o=>new we(o),decoderFactory:()=>new W,createWorkerRequest:o=>({graph:o.toSerializedString()}),resolveWorkerResponse:o=>{const n=o;return _e(n.type==ve.RESULT),new U(n.path)},onSolveFinished:(o,n)=>{if(n==j){ne(d,L(s).inCert=j,L(s));return}const u=new W().decode(o,n),N=s().inInstance;N.labelSolved({path:u.path,directed:!0}),o.labelSolved({path:n.path,directed:!1}),d.update(_=>(_.inInstance=N,_.inCert=u,_.outCert=n,_.outInstance=o,_))}});ie();var T=Ye();te(o=>{var n=be();se.title="HCYCLE to HCIRCUIT",g(o,n)});var F=y(X(T),2),M=X(F);me(M,{get redStore(){return d},get isSolving(){return w},get solveMessage(){return A},get showStepper(){return c},get reduce(){return z},get solve(){return K},title:h=>{var u=Fe();g(h,u)},editor:h=>{le(h,{get graph(){return s().inInstance},onChange:u=>q(u),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var B=y(M,2);{var J=o=>{var n=Me(),h=H(n);i(h,()=>!0);var u=y(h,2);Ee(u,{get redStore(){return d},get storage(){return p},instance:(_,C=$)=>{G(_,{get graph(){return C()},style:"HCIRCUIT",layout:"preset"})},$$slots:{instance:!0}}),g(o,n)},Q=o=>{var n=xe(),h=H(n);i(h,()=>!1);var u=y(h,2);Re(u,{get redStore(){return d},title:f=>{var E=Le();g(f,E)},instance:(f,E=$)=>{G(f,{get graph(){return E()},style:"HCIRCUIT",layout:"preset"})},certificate:(f,E=$)=>{ye(f,{get cert(){return E()}})},certificatePlaceholder:f=>{var E=Xe();g(f,E)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),g(o,n)};Y(B,o=>{t()?o(J):o(Q,!1)})}x(F),x(T),g(l,T),re(),a()}export{et as component,Ze as universal};
