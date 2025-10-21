import"../chunks/DsnmJJEf.js";import{d as ue,a as he,s as ge}from"../chunks/CQ7OeVSD.js";import{p as ve,D as fe,f as L,v as me,d as R,s as C,t as V,x as h,b as E,c as Ie,z as x,y as z,$ as Ce,r as $,w as Z,S as q,T as _e,a as ee,U as te}from"../chunks/Du57CbYy.js";import{s as Se,i as _,a as Ee}from"../chunks/BgTyvlfH.js";import{l as ye,r as Re}from"../chunks/C7pI9irj.js";import{N as f,d as D,f as T,E as k,G as xe,g as N,u as $e,R as be,b as we,U as K,P as Pe,h as De,j as Te,k as Y}from"../chunks/D0f_mMde.js";import{E as Ne,C as ke}from"../chunks/kpbFuTU_.js";import{C as He,a as Oe}from"../chunks/CaJ6bvTC.js";class Ue{inInstance;nodeDist=80;tripletDist=6*this.nodeDist;nodeCount;circum;radius;radStep;startRot;constructor(i){if(i.empty())throw new Error("Reducer doesn't accept empty graphs (Graph with node nodes).");this.inInstance=i,this.nodeCount=i.nodes.length,this.circum=this.tripletDist*this.nodeCount,this.radius=this.circum/(2*Math.PI),this.radStep=2*Math.PI/this.nodeCount,this.startRot=.5*Math.PI}reduce(){const i=[],e=this.createNodeTriplets();i.push(...e.steps);const o=this.connectEdges(e.graph.copy());return i.push(...o.steps),{outInstance:o.graph,steps:i}}stripPrefix(i,e){return i.slice(e.length)}connectEdges(i){const e=[];return this.inInstance.edges.forEach(o=>{const a=o.from.slice(f.length)+D,n=o.to.slice(f.length)+T;i.addEdge({id:k+`${a}-${n}`,from:f+a,to:f+n})}),e.push({id:"connect-edges",title:"Connect edges",description:`
                <p> 
                    For every original edge from node <i>a</i> to node <i>b</i>,
                    connect the node <i>a_out</i> with the node <i>b_in</i>.
                </p>
                <p>
                    In this particular case, add these edges:
                    <ul>
                        ${this.inInstance.edges.map(o=>{const a=this.stripPrefix(o.from,k)+D,n=this.stripPrefix(o.to,k)+T;return`
                                <li> 
                                    (${a}, ${n})
                                </li>
                            `}).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:i.copy(),mapping:{}}),{graph:i,steps:e}}createNodeTriplets(){const i=[],e=new xe;return this.inInstance.nodes.forEach((o,a)=>{const n=o.id.slice(f.length),d={x:this.radius*Math.cos(a*this.radStep-this.startRot-.2*this.radStep),y:this.radius*Math.sin(a*this.radStep-this.startRot-.2*this.radStep)},b={x:this.radius*Math.cos(a*this.radStep-this.startRot),y:this.radius*Math.sin(a*this.radStep-this.startRot)},I={x:this.radius*Math.cos(a*this.radStep-this.startRot+.2*this.radStep),y:this.radius*Math.sin(a*this.radStep-this.startRot+.2*this.radStep)};e.addNode({id:f+n+T,position:d,classes:o.classes}),e.addNode({id:f+n+N,position:b,classes:o.classes}),e.addNode({id:f+n+D,position:I,classes:o.classes}),e.addEdge({id:k+`${n}${T}-${n}${N}`,from:f+n+T,to:f+n+N}),e.addEdge({id:k+`${n}${D}-${n}${N}`,from:f+n+D,to:f+n+N})}),i.push({id:"create-node-triplets",title:"Create node triplets",description:`
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
                        ${this.inInstance.nodes.map(o=>{const a=o.id.slice(f.length);return`
                                <li>
                                    ${a} - (${a+T}, ${a+N}, ${a+D})
                                </li>
                            `}).join("")}
                    </ul>
                </p>
            `,inSnapshot:this.inInstance.copy(),outSnapshot:e.copy(),mapping:{}}),{graph:e,steps:i}}}const Me=!0,Ze=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));class Le{decode(i,e){console.debug(e.path);const o=new Array;e.path.forEach(d=>{const b=d.id.lastIndexOf(T),I=d.id.lastIndexOf(N),w=d.id.lastIndexOf(D),l=Math.max(b,I,w),G=d.id.slice(f.length,l);o.push(G)});const a=new Array;let n;for(let d=0;d<o.length;d++)n!=o[d]&&(n=o[d],a.push({id:f+n}));return new He(a)}}var Fe=L('<meta name="description" content="Reduction from HCYCLE to HCIRCUIT"/>'),Ye=(F,i)=>i(),Ge=L("<div><!></div> <!> <div><!></div>",1),je=L("<span>There are no steps to step through.</span>"),Xe=L('<div class="panes"><div><!> <!></div> <div><!> <!></div></div>'),Ae=L('<main><h1>HCYCLE to HCIRCUIT reduction</h1> <!> <div class="controls"><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></main>');function et(F,i){ve(i,!0);const e=()=>Se(d,"$redStore",o),[o,a]=Ee();let n=$e(ye.LS_HCYCLE_HCIRCUIT,new be),d=n.value;console.debug("input instance:",e().inInstance);let b=z(!1),I=z(!1),w=z(""),l=null;function G(t){console.debug("onEditorChange"),l&&(l.terminate(),l=null,x(I,!1),x(w,"Solving cancelled — formula changed.")),d.update(s=>(s.reset(),s.setInInstance(t),n.save(),s))}function se(){if(e().inInstance){const t=new Ue(e().inInstance),{outInstance:s,steps:u}=t.reduce();d.update(r=>(r.setSteps(u),r.setOutInstance(s),n.save(),r))}}async function ne(){let{inCert:t,outInstance:s,outCert:u}=e();if(!(!s||u)){x(I,!0),x(w,"Solving Hamiltonian circuit..."),l&&(l.terminate(),l=null);try{const r=new Worker(new URL(""+new URL("../workers/WorkerHCIRCUITSolver-y7r4IyFq.js",import.meta.url).href,import.meta.url),{type:"module"});l=r;const O=new Promise((g,S)=>{r.onmessage=v=>{r===l&&(r.terminate(),l=null,g(v.data))},r.onerror=v=>{r===l&&(r.terminate(),l=null,S(v))}});if(r.postMessage(s.toSerializedString()),u=await O,!l&&!h(I))return;if(u==K)d.update(g=>(g.inCert=K,g.outCert=K,g));else{const g=s,S=u.path;g.edges.forEach(c=>c.classes+=" solved");const v=c=>c.slice(c.search(Pe)+1);for(let c=0;c<S.length-1;c++){const U=v(S[c].id),M=v(S[c+1].id),p=k+`${U}-${M}`,P=g.edges.find(W=>W.id==p);P&&(g.removeEdge(P),P.classes+=" used",g.addEdge(P))}t=new Le().decode(g,u),d.update(c=>(c.inCert=t,c.outCert=u,c.outInstance=g,c))}n.save()}catch(r){console.error("Error during solving:",r),x(w,"An error occurred while solving.")}finally{x(I,!1),x(w,""),l=null}}}fe(()=>{d.update(t=>(t.resetStepIndex(),t))}),he(()=>{l&&(l.terminate(),l=null)});var j=Ae();me(t=>{var s=Fe();Ce.title="HCYCLE to HCIRCUIT",E(t,s)});var B=C(R(j),2);Ne(B,{get graph(){return e().inInstance},onChange:t=>G(t),onWrongFormat:t=>alert("From graph editor: "+t)});var X=C(B,2),A=R(X);A.__click=se;var H=C(A,2);H.__click=[Ye,ne];var re=R(H);{var oe=t=>{var s=q("Solving...");E(t,s)},ae=t=>{var s=q("Solve");E(t,s)};_(re,t=>{h(I)?t(oe):t(ae,!1)})}$(H);var J=C(H,2);Re(J),Z(2),$(X);var Q=C(X,2);{var ie=t=>{De(t,{children:(s,u)=>{Z();var r=q();V(()=>ge(r,h(w))),E(s,r)}})};_(Q,t=>{h(I)&&t(ie)})}var de=C(Q,2);{var ce=t=>{const s=te(()=>e().steps),u=te(()=>e().stepIndex);var r=_e(),O=ee(r);{var g=v=>{var y=Ge(),c=ee(y),U=R(c);{var M=m=>{Y(m,{get graph(){return h(s)[h(u)].inSnapshot},style:"DIRECTED",layout:"circle"})};_(U,m=>{h(u)<h(s).length&&h(s)[h(u)].inSnapshot&&!h(s)[h(u)].inSnapshot.empty()&&m(M)})}$(c);var p=C(c,2);Te(p,{get steps(){return e().steps},get stepIndex(){return e().stepIndex},onPrevClick:()=>{d.update(m=>(m.prevStep(),m)),n.save()},onNextClick:()=>{d.update(m=>(m.nextStep(),m)),n.save()}});var P=C(p,2),W=R(P);{var le=m=>{Y(m,{get graph(){return e().steps[e().stepIndex].outSnapshot},style:"UNDIRECTED",layout:"preset"})};_(W,m=>{e().stepIndex<e().steps.length&&e().steps[e().stepIndex].outSnapshot&&m(le)})}$(P),E(v,y)},S=v=>{var y=je();E(v,y)};_(O,v=>{h(s).length?v(g):v(S,!1)})}E(t,r)},pe=t=>{var s=Xe(),u=R(s),r=R(u);{var O=p=>{Y(p,{get graph(){return e().inInstance},style:"DIRECTED",layout:"circle"})};_(r,p=>{e().inInstance&&!e().inInstance.empty()&&p(O)})}var g=C(r,2);{var S=p=>{Oe(p,{get cert(){return e().inCert}})};_(g,p=>{e().inCert&&p(S)})}$(u);var v=C(u,2),y=R(v);{var c=p=>{Y(p,{get graph(){return e().outInstance},style:"UNDIRECTED",layout:"preset"})};_(y,p=>{e().outInstance&&!e().outInstance.empty()&&p(c)})}var U=C(y,2);{var M=p=>{ke(p,{get cert(){return e().outCert}})};_(U,p=>{e().outCert&&p(M)})}$(v),$(s),E(t,s)};_(de,t=>{h(b)?t(ce):t(pe,!1)})}$(j),V((t,s)=>{A.disabled=t,H.disabled=s},[()=>!e().hasInInstance()||e().hasOutInstance()||h(I),()=>!e().hasInstances()||e().hasOutCertificate()||h(I)]),we(J,()=>h(b),t=>x(b,t)),E(F,j),Ie(),a()}ue(["click"]);export{et as component,Ze as universal};
