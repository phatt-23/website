import"../chunks/DsnmJJEf.js";import{d as ue,o as he,s as ge}from"../chunks/BjnrFQNC.js";import{p as ve,D as me,f as O,z as fe,d as y,s as f,t as Q,g as l,b as E,c as Ie,i as $,h as z,$ as Ce,r as b,n as V,K as A,L as _e,a as Z,M as ee}from"../chunks/CoIEHD9u.js";import{s as Se,i as _,a as Ee}from"../chunks/CFopsLng.js";import{l as Re,r as ye}from"../chunks/DEkd9q3U.js";import{N as m,a as D,c as w,E as T,G as $e,d as P,u as be,R as xe,b as De,U as K,P as we,S as Pe,f as Te,g as F}from"../chunks/pXZND8Dt.js";import{E as Ne,D as ke,C as He}from"../chunks/DJxBrkU9.js";import{C as Ue}from"../chunks/D2z3yCMX.js";class Me{inInstance;nodeDist=80;tripletDist=6*this.nodeDist;nodeCount;circum;radius;radStep;startRot;constructor(o){if(o.empty())throw new Error("Reducer doesn't accept empty graphs (Graph with node nodes).");this.inInstance=o,this.nodeCount=o.nodes.length,this.circum=this.tripletDist*this.nodeCount,this.radius=this.circum/(2*Math.PI),this.radStep=2*Math.PI/this.nodeCount,this.startRot=.5*Math.PI}reduce(){const o=[],e=this.createNodeTriplets();o.push(...e.steps);const p=this.connectEdges(e.graph.copy());return o.push(...p.steps),{outInstance:p.graph,steps:o}}stripPrefix(o,e){return o.slice(e.length)}connectEdges(o){const e=[];return this.inInstance.edges.forEach(p=>{const d=p.from.slice(m.length)+D,n=p.to.slice(m.length)+w;o.addEdge({id:T+`${d}-${n}`,from:m+d,to:m+n})}),e.push({id:"connect-edges",title:"Connect edges",description:`
                <p> 
                    For every original edge from node <i>a</i> to node <i>b</i>,
                    connect the node <i>a_out</i> with the node <i>b_in</i>.
                </p>
                <p>
                    In this particular case, add these edges:
                    <ul>
                        ${this.inInstance.edges.map(p=>{const d=this.stripPrefix(p.from,T)+D,n=this.stripPrefix(p.to,T)+w;return`
                                <li> 
                                    (${d}, ${n})
                                </li>
                            `}).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:o.copy(),mapping:{}}),{graph:o,steps:e}}createNodeTriplets(){const o=[],e=new $e;return this.inInstance.nodes.forEach((p,d)=>{const n=p.id.slice(m.length),I={x:this.radius*Math.cos(d*this.radStep-this.startRot-.2*this.radStep),y:this.radius*Math.sin(d*this.radStep-this.startRot-.2*this.radStep)},N={x:this.radius*Math.cos(d*this.radStep-this.startRot),y:this.radius*Math.sin(d*this.radStep-this.startRot)},C={x:this.radius*Math.cos(d*this.radStep-this.startRot+.2*this.radStep),y:this.radius*Math.sin(d*this.radStep-this.startRot+.2*this.radStep)};e.addNode({id:m+n+w,position:I,classes:p.classes}),e.addNode({id:m+n+P,position:N,classes:p.classes}),e.addNode({id:m+n+D,position:C,classes:p.classes}),e.addEdge({id:T+`${n}${w}-${n}${P}`,from:m+n+w,to:m+n+P}),e.addEdge({id:T+`${n}${D}-${n}${P}`,from:m+n+D,to:m+n+P})}),o.push({id:"create-node-triplets",title:"Create node triplets",description:`
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
                        ${this.inInstance.nodes.map(p=>{const d=p.id.slice(m.length);return`
                                <li>
                                    ${d} - (${d+w}, ${d+P}, ${d+D})
                                </li>
                            `}).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy(),mapping:{}}),{graph:e,steps:o}}}const Le=!0,Ve=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"}));var Oe=O('<meta name="description" content="Reduction from HCYCLE to HCIRCUIT"/>'),Fe=(G,o)=>o(),Ge=O("<div><!></div> <!> <div><!></div>",1),Ye=O("<span>There are no steps to step through.</span>"),Xe=O('<div class="panes"><div><!> <!></div> <div><!> <!></div></div>'),je=O('<main><h1>HCYCLE to HCIRCUIT reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function Ze(G,o){ve(o,!0);const e=()=>Se(I,"$redStore",p),[p,d]=Ee();let n=be(Re.LS_HCYCLE_HCIRCUIT,new xe),I=n.value;console.debug("input instance:",e().inInstance);let N=z(!1),C=z(!1),k=z(""),u=null;function te(t){console.debug("onEditorChange"),u&&(u.terminate(),u=null,$(C,!1),$(k,"Solving cancelled — formula changed.")),I.update(s=>(s.reset(),s.setInInstance(t),n.save(),s))}function se(){if(e().inInstance){const t=new Me(e().inInstance),{outInstance:s,steps:c}=t.reduce();I.update(r=>(r.setSteps(c),r.setOutInstance(s),n.save(),r))}}async function ne(){let{inCert:t,outInstance:s,outCert:c}=e();if(!(!s||c)){$(C,!0),$(k,"Solving Hamiltonian circuit..."),u&&(u.terminate(),u=null);try{const r=new Worker(new URL(""+new URL("../workers/WorkerHCIRCUITSolver-y7r4IyFq.js",import.meta.url).href,import.meta.url),{type:"module"});u=r;const U=new Promise((h,S)=>{r.onmessage=g=>{r===u&&(r.terminate(),u=null,h(g.data))},r.onerror=g=>{r===u&&(r.terminate(),u=null,S(g))}});if(r.postMessage(s.toSerializedString()),c=await U,!u&&!l(C))return;if(c==K)I.update(h=>(h.inCert=K,h.outCert=K,h));else{const h=s,S=c.path;h.edges.forEach(a=>a.classes+=" solved");const g=a=>a.slice(a.search(we)+1);for(let a=0;a<S.length-1;a++){const M=g(S[a].id),L=g(S[a+1].id),i=T+`${M}-${L}`,x=h.edges.find(W=>W.id==i);x&&(h.removeEdge(x),x.classes+=" used",h.addEdge(x))}t=new ke().decode(h,c),I.update(a=>(a.inCert=t,a.outCert=c,a.outInstance=h,a))}n.save()}catch(r){console.error("Error during solving:",r),$(k,"An error occurred while solving.")}finally{$(C,!1),$(k,""),u=null}}}me(()=>{I.update(t=>(t.resetStepIndex(),t))}),he(()=>{u&&(u.terminate(),u=null)});var Y=je();fe(t=>{var s=Oe();Ce.title="HCYCLE to HCIRCUIT",E(t,s)});var q=f(y(Y),2);Ne(q,{get graph(){return e().inInstance},onChange:t=>te(t),onWrongFormat:t=>alert("From graph editor: "+t)});var X=f(q,2),j=y(X);j.__click=se;var H=f(j,2);H.__click=[Fe,ne];var re=y(H);{var oe=t=>{var s=A("Solving...");E(t,s)},ae=t=>{var s=A("Solve");E(t,s)};_(re,t=>{l(C)?t(oe):t(ae,!1)})}b(H);var B=f(H,2);ye(B),V(2),b(X);var J=f(X,2);{var ie=t=>{Pe(t,{children:(s,c)=>{V();var r=A();Q(()=>ge(r,l(k))),E(s,r)}})};_(J,t=>{l(C)&&t(ie)})}var de=f(J,2);{var ce=t=>{const s=ee(()=>e().steps),c=ee(()=>e().stepIndex);var r=_e(),U=Z(r);{var h=g=>{var R=Ge(),a=Z(R),M=y(a);{var L=v=>{F(v,{get graph(){return l(s)[l(c)].inSnapshot},style:"DIRECTED",layout:"circle"})};_(M,v=>{l(c)<l(s).length&&l(s)[l(c)].inSnapshot&&!l(s)[l(c)].inSnapshot.empty()&&v(L)})}b(a);var i=f(a,2);Te(i,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{I.update(v=>(v.prevStep(),v)),n.save()},onNextClick:()=>{I.update(v=>(v.nextStep(),v)),n.save()}});var x=f(i,2),W=y(x);{var le=v=>{F(v,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"UNDIRECTED",layout:"preset"})};_(W,v=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&v(le)})}b(x),E(g,R)},S=g=>{var R=Ye();E(g,R)};_(U,g=>{l(s).length?g(h):g(S,!1)})}E(t,r)},pe=t=>{var s=Xe(),c=y(s),r=y(c);{var U=i=>{F(i,{get graph(){return e().inInstance},style:"DIRECTED",layout:"circle"})};_(r,i=>{e().inInstance&&!e().inInstance.empty()&&i(U)})}var h=f(r,2);{var S=i=>{Ue(i,{get cert(){return e().inCert}})};_(h,i=>{e().inCert&&i(S)})}b(c);var g=f(c,2),R=y(g);{var a=i=>{F(i,{get graph(){return e().outInstance},style:"UNDIRECTED",layout:"preset"})};_(R,i=>{e().outInstance&&!e().outInstance.empty()&&i(a)})}var M=f(R,2);{var L=i=>{He(i,{get cert(){return e().outCert}})};_(M,i=>{e().outCert&&i(L)})}b(g),b(s),E(t,s)};_(de,t=>{l(N)?t(ce):t(pe,!1)})}b(Y),Q((t,s)=>{j.disabled=t,H.disabled=s},[()=>!e().hasInInstance()||e().hasOutInstance()||l(C),()=>!e().hasInstances()||e().hasOutCertificate()||l(C)]),De(B,()=>l(N),t=>$(N,t)),E(G,Y),Ie(),d()}ue(["click"]);export{Ze as component,Ve as universal};
