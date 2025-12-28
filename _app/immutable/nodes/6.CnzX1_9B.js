import"../chunks/DsnmJJEf.js";import{f as $,d as U,r as j,t as J,b as p,p as Z,g as ee,Q as te,K as re,c as ne,O as se,$ as ae,h as W,s as P,a as G,a9 as y,S as oe,k as ie}from"../chunks/DWngNMqy.js";import{a as x,i as L,s as ce,c as le}from"../chunks/Cy94KniK.js";import{S as de,R as he,G as pe,E as ue,u as ge,m as $e,n as fe,o as ve,U as q,p as me,W as _e,q as Se,O as Ce,I as Ie}from"../chunks/C4ZxoCtr.js";import{a as we,C as ye}from"../chunks/Ba_mITra.js";import{s as be}from"../chunks/CHE0eMEN.js";import{E as Ee,R as Pe}from"../chunks/hPxwD4k4.js";import{R as V}from"../chunks/D5S11tbA.js";import{l as Te}from"../chunks/uXYcvkjH.js";const Re=!0,et=Object.freeze(Object.defineProperty({__proto__:null,prerender:Re},Symbol.toStringTag,{value:"Module"}));var ke=$("<p> </p>");function Ge(l,e){we(l,{get cert(){return e.cert},unsolvablePlaceholder:t=>{var a=ke(),o=U(a);j(a),J(()=>be(o,`The graph doesn't contain a Hamiltonian cycle with the given cost of ${e.cost??""}.`)),p(t,a)},$$slots:{unsolvablePlaceholder:!0}})}var Ve=Object.getOwnPropertyDescriptor,Ue=(l,e,n,t)=>{for(var a=t>1?void 0:t?Ve(e,n):e,o=l.length-1,S;o>=0;o--)(S=l[o])&&(a=S(a)||a);return a};let T=class{constructor(l){this.path=l}};T=Ue([de.SerializableClass()],T);class F{decode(e,n){return new T(n.path)}}class je extends he{nodeCount;constructor(e){super(e),this.nodeCount=this.inInstance.nodes.length}doReduce(){const e=[],n=new pe,t=this.copyVertices(n),a=this.createEdges(t.graph),o=this.assignWeights(a.graph);return e.push(t.step,a.step,o.step),{outInstance:o.graph,steps:e}}copyVertices(e){this.inInstance.nodes.forEach(t=>e.addNode(t));const n={id:"copy-vertices",title:"Copy vertices",description:`
                <p> 
                    To create a reduced graph instance $G = (V,E)$ for TSP 
                    from a graph instance $G_0 = (V_0, E_0)$ from HCIRCUIT,
                    take all of the nodes from $V_0$ and add them to $G$.

                    $$
                        V = V_0 = \\{ ${e.nodes.map(t=>`${t.label}`).join(",")} \\}
                    $$
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{graph:e,step:n}}createEdges(e){const n=[];for(let i=0;i<e.nodes.length;i++)for(let c=i+1;c<e.nodes.length;c++){const I=e.nodes[i],b=e.nodes[c];n.push(`\\{ ${I.label}, ${b.label} \\}`),e.addEdge({id:ue+`${I.id}-${b.id}`,from:I.id,to:b.id})}const t=6,a=[];for(let i=0;i<n.length;i+=t)a.push(n.slice(i,i+t).join(", "));const o=`
            \\begin{aligned}
                E = \\{&
                    ${a.join(` \\\\
& `)}
                \\}
            \\end{aligned}
        `,S={id:"create-edges",title:"Create edges",description:`
                <p>
                    Then, add an edge between each pair a vertices to create a complete graph.
                    
                    $$
                        E = \\{ \\{ v_1, v_2 \\} | v_1, v_2 \\in V_0 \\}
                    $$

                    The number of nodes in $G$ is $|V| = ${this.nodeCount}$, 
                    which means there will be $ |E| = (${this.nodeCount} \\cdot ${this.nodeCount-1}) / 2 = ${this.nodeCount*(this.nodeCount-1)/2} $ edges, 
                    for the graph to be complete.

                    $$
                        ${o}
                    $$
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{graph:e,step:S}}assignWeights(e){e.edges.forEach(t=>{this.inInstance.edges.find(o=>o.from===t.from&&o.to===t.to||o.to===t.from&&o.from===t.to)?t.weight=1:(t.weight=2,t.classes+="muted")});const n={id:"assing-weights",title:"Assign weights",description:`
                <p>
                    For every edge, that exists in the original instance $G_0$, assign the weight to 1.
                    Otherwise, assign some weight greater than 1.
                    The function $w(e)$, assigning weights to edges in $E$, may be defined as:

                    $$
                    \\begin{aligned}
                        w(e) =
                        \\begin{cases}
                            1 & \\text{if} \\mathbin{} e \\in E_0 \\\\
                            2 & \\text{otherwise}  
                        \\end{cases}
                    \\end{aligned}
                    $$
                </p>
                <p>
                    Let $k$ be the maximal cost of the hamiltonian path in the graph $G$. Set $k$ to the number of nodes $|V|$.
                    $$
                        k = |V| = ${this.nodeCount}
                    $$  
                </p>
                <p>
                    Now, the TSP problem can expressed by a question:
                        
                    Does the graph $G=(V,E)$ contain a hamiltonian path $P$ of length $|V|$,  
                    such that the cost of the traversed path $k_P$ is less than or equal to $k$?

                    In other words, does this statement hold?

                    $$
                        k_P = \\sum_{i = 0}^{|V| - 2} w(\\{ P_i, P_{i + 1} \\}) \\leq k
                    $$

                    If so, the original graph $G_0$ contains a hamiltonian circuit, otherwise it doesn't.
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy()};return{graph:e,step:n}}}function De(l){return new Worker(""+new URL("../workers/WorkerTSPSolver-CjkgrjDV.js",import.meta.url).href,{name:l?.name})}var He=$('<meta name="description" content="Reduction from HCIRCUIT to TSP"/>'),Oe=$("<h2>Input HCIRCUIT Instance</h2>"),We=$("<span>Certificate for HCYCLE will appear here.</span>"),xe=$("<h2>Graph Editor</h2>"),Le=$("<!> <!>",1),qe=$("<h2>Output TSP Instance</h2>"),Fe=$('<span class="placeholder">Certificate for TSP will appear here.</span>'),ze=$("<!> <!>",1),Me=$('<main class="svelte-47q0oi"><h1>HCIRCUIT to TSP reduction</h1> <div class="card-list svelte-47q0oi"><!> <!></div></main>');function tt(l,e){Z(e,!0);const n=()=>x(c,"$redStore",a),t=()=>x(I,"$showStepper",a),[a,o]=ce(),S=(r,s=y)=>{Ie(r,{get redStore(){return c},get hideCertificate(){return s()},title:u=>{var v=Oe();p(u,v)},instance:(u,v=y)=>{var g=oe(),m=G(g);{var Q=w=>{V(w,{get graph(){return v()},style:"UNDIRECTED",layout:"circle"})},X=w=>{Pe(w,{get graph(){return v()},style:"UNDIRECTED",layout:"circle",onAddEdge:k=>{c.update(_=>{let C=_.inInstance;return C.addEdge(k),C.unlabelSolved(),_.reset(),_.setInInstance(C),_}),i.save()},onRemoveEdge:k=>{c.update(_=>{let C=_.inInstance;return C.removeEdgeById(k.id()),C.unlabelSolved(),_.reset(),_.setInInstance(C),_}),i.save()}})};L(m,w=>{s()?w(Q):w(X,!1)})}p(u,g)},certificate:(u,v=y)=>{ye(u,{get cert(){return v()}})},certificatePlaceholder:u=>{var v=We();p(u,v)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}})};let i=ge(Te.LS_HCIRCUIT_TSP,new $e),{redStore:c,showStepper:I,isSolving:b,solveMessage:z,editorChanged:M,reduce:N,solve:A}=fe({storage:i,workerFactory:()=>new De,reducerFactory:r=>new je(r),decoderFactory:()=>new F,createWorkerRequest:r=>({graph:r.toSerializedString(),maxCost:r.nodes.length}),resolveWorkerResponse:r=>{const s=r;return me(s.type==_e.RESULT),new T(s.path)},onSolveFinished:(r,s)=>{if(s==q){le(c,W(n).inCert=q,W(n));return}const h=new F().decode(r,s),E=n().inInstance;E.labelSolved({path:h.path,directed:!1}),r.labelSolved({path:s.path,directed:!1}),c.update(f=>(f.inInstance=E,f.inCert=h,f.outCert=s,f.outInstance=r,f))}}),D=se(0);ee(()=>{n().inInstance&&te(D,n().inInstance.nodes.length,!0)});var R=Me();re(r=>{var s=He();ae.title="HCIRCUIT to TSP",p(r,s)});var H=P(U(R),2),O=U(H);ve(O,{get redStore(){return c},get isSolving(){return b},get solveMessage(){return z},get showStepper(){return I},get reduce(){return N},get solve(){return A},title:d=>{var h=xe();p(d,h)},editor:d=>{Ee(d,{get graph(){return n().inInstance},onChange:h=>M(h),displayErrorMessages:!0})},$$slots:{title:!0,editor:!0}});var K=P(O,2);{var Y=r=>{var s=Le(),d=G(s);S(d,()=>!0);var h=P(d,2);Se(h,{get redStore(){return c},get storage(){return i},instance:(f,u=y)=>{V(f,{get graph(){return u()},style:"TSP",layout:"circle"})},$$slots:{instance:!0}}),p(r,s)},B=r=>{var s=ze(),d=G(s);S(d,()=>!1);var h=P(d,2);Ce(h,{get redStore(){return c},title:g=>{var m=qe();p(g,m)},instance:(g,m=y)=>{V(g,{get graph(){return m()},style:"TSP",layout:"circle"})},certificate:(g,m=y)=>{Ge(g,{get cert(){return m()},get cost(){return ie(D)}})},certificatePlaceholder:g=>{var m=Fe();p(g,m)},$$slots:{title:!0,instance:!0,certificate:!0,certificatePlaceholder:!0}}),p(r,s)};L(K,r=>{t()?r(Y):r(B,!1)})}j(H),j(R),p(l,R),ne(),o()}export{tt as component,et as universal};
