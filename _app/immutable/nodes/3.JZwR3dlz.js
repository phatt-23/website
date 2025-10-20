import"../chunks/DsnmJJEf.js";import{O as pt,h as J,e as _t,E as m,ab as mt,Q as bt,R as wt,S as Je,n as De,T as Re,j as _e,C as yt,aQ as Ct,V as Pe,Y as St,W as de,au as Be,U as at,a4 as It,as as Qe,aN as st,aI as nt,a_ as Ne,Z as rt,_ as xt,a$ as Ae,b0 as Et,b1 as Le,aC as it,k as $t,b2 as Nt,aM as At,b3 as Tt,g as kt,q as Ot,b4 as ot,J as Dt,b5 as Rt,b6 as Ye,a0 as Lt,a5 as Ft,b7 as Ht,b8 as zt,an as Pt,A as lt,a1 as dt,b9 as Mt,p as ie,f as D,s as $,d as S,r as w,b as E,c as oe,ao as ce,a as Q,t as Z,ap as xe,ba as Xt,w as Te,am as j,a6 as U,ac as Gt,z as Ue,bb as Yt,v as Ut,$ as Wt,aq as Ze}from"../chunks/BB7mMw4l.js";import{s as ee,d as We,o as qt,w as Vt,g as Ke}from"../chunks/C04nbfFK.js";import{i as P,p as Ie,b as Jt,s as Bt,a as Qt}from"../chunks/BaEzHINP.js";import{r as ke,c as Zt,l as Kt}from"../chunks/BSAeQews.js";import{h as Ce}from"../chunks/BYv3sgkP.js";function ue(t,e){return e}function jt(t,e,a){for(var s=t.items,r=[],n=e.length,i=0;i<n;i++)Nt(e[i].e,r,!0);var o=n>0&&r.length===0&&a!==null;if(o){var l=a.parentNode;At(l),l.append(a),s.clear(),B(t,e[0].prev,e[n-1].next)}Tt(r,()=>{for(var c=0;c<n;c++){var u=e[c];o||(s.delete(u.k),B(t,u.prev,u.next)),it(u.e,!o)}})}function ve(t,e,a,s,r,n=null){var i=t,o={flags:e,items:new Map,first:null},l=(e&ot)!==0;if(l){var c=t;i=J?De(Ot(c)):c.appendChild(at())}J&&_t();var u=null,g=!1,C=new Map,_=mt(()=>{var I=a();return nt(I)?I:I==null?[]:st(I)}),d,h;function b(){ea(h,d,o,C,i,r,e,s,a),n!==null&&(d.length===0?u?rt(u):u=Pe(()=>n(i)):u!==null&&xt(u,()=>{u=null}))}pt(()=>{h??=kt,d=m(_);var I=d.length;if(g&&I===0)return;g=I===0;let k=!1;if(J){var z=bt(i)===wt;z!==(I===0)&&(i=Je(),De(i),Re(!1),k=!0)}if(J){for(var R=null,N,f=0;f<I;f++){if(_e.nodeType===yt&&_e.data===Ct){i=_e,k=!0,Re(!1);break}var y=d[f],O=s(y,f);N=Me(_e,o,R,null,y,O,f,r,e,a),o.items.set(O,N),R=N}I>0&&De(Je())}if(J)I===0&&n&&(u=Pe(()=>n(i)));else if(St()){var W=new Set,q=de;for(f=0;f<I;f+=1){y=d[f],O=s(y,f);var v=o.items.get(O)??C.get(O);v?(e&(Ae|Ne))!==0&&ct(v,y,f,e):(N=Me(null,o,null,null,y,O,f,r,e,a,!0),C.set(O,N)),W.add(O)}for(const[p,x]of o.items)W.has(p)||q.skipped_effects.add(x.e);q.add_callback(b)}else b();k&&Re(!0),m(_)}),J&&(i=_e)}function ea(t,e,a,s,r,n,i,o,l){var c=(i&Rt)!==0,u=(i&(Ae|Ne))!==0,g=e.length,C=a.items,_=a.first,d=_,h,b=null,I,k=[],z=[],R,N,f,y;if(c)for(y=0;y<g;y+=1)R=e[y],N=o(R,y),f=C.get(N),f!==void 0&&(f.a?.measure(),(I??=new Set).add(f));for(y=0;y<g;y+=1){if(R=e[y],N=o(R,y),f=C.get(N),f===void 0){var O=s.get(N);if(O!==void 0){s.delete(N),C.set(N,O);var W=b?b.next:d;B(a,b,O),B(a,O,W),Fe(O,W,r),b=O}else{var q=d?d.e.nodes_start:r;b=Me(q,a,b,b===null?a.first:b.next,R,N,y,n,i,l)}C.set(N,b),k=[],z=[],d=b.next;continue}if(u&&ct(f,R,y,i),(f.e.f&Le)!==0&&(rt(f.e),c&&(f.a?.unfix(),(I??=new Set).delete(f))),f!==d){if(h!==void 0&&h.has(f)){if(k.length<z.length){var v=z[0],p;b=v.prev;var x=k[0],A=k[k.length-1];for(p=0;p<k.length;p+=1)Fe(k[p],v,r);for(p=0;p<z.length;p+=1)h.delete(z[p]);B(a,x.prev,A.next),B(a,b,x),B(a,A,v),d=v,b=A,y-=1,k=[],z=[]}else h.delete(f),Fe(f,d,r),B(a,f.prev,f.next),B(a,f,b===null?a.first:b.next),B(a,b,f),b=f;continue}for(k=[],z=[];d!==null&&d.k!==N;)(d.e.f&Le)===0&&(h??=new Set).add(d),z.push(d),d=d.next;if(d===null)continue;f=d}k.push(f),b=f,d=f.next}if(d!==null||h!==void 0){for(var G=h===void 0?[]:st(h);d!==null;)(d.e.f&Le)===0&&G.push(d),d=d.next;var H=G.length;if(H>0){var V=(i&ot)!==0&&g===0?r:null;if(c){for(y=0;y<H;y+=1)G[y].a?.measure();for(y=0;y<H;y+=1)G[y].a?.fix()}jt(a,G,V)}}c&&Dt(()=>{if(I!==void 0)for(f of I)f.a?.apply()}),t.first=a.first&&a.first.e,t.last=b&&b.e;for(var X of s.values())it(X.e);s.clear()}function ct(t,e,a,s){(s&Ae)!==0&&Be(t.v,e),(s&Ne)!==0?Be(t.i,a):t.i=a}function Me(t,e,a,s,r,n,i,o,l,c,u){var g=(l&Ae)!==0,C=(l&Et)===0,_=g?C?It(r,!1,!1):Qe(r):r,d=(l&Ne)===0?i:Qe(i),h={i:d,v:_,k:n,a:null,e:null,prev:a,next:s};try{if(t===null){var b=document.createDocumentFragment();b.append(t=at())}return h.e=Pe(()=>o(t,_,d,c),J),h.e.prev=a&&a.e,h.e.next=s&&s.e,a===null?u||(e.first=h):(a.next=h,a.e.next=h.e),s!==null&&(s.prev=h,s.e.prev=h.e),h}finally{}}function Fe(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==null&&n!==s;){var i=$t(n);r.before(n),n=i}}function B(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ta(t,e){return t==null?null:String(t)}function aa(t,e,a,s){var r=t.__style;if(J||r!==e){var n=ta(e);(!J||n!==t.getAttribute("style"))&&(n==null?t.removeAttribute("style"):t.style.cssText=n),t.__style=e}return s}function ut(t,e,a=!1){if(t.multiple){if(e==null)return;if(!nt(e))return Ht();for(var s of t.options)s.selected=e.includes(we(s));return}for(s of t.options){var r=we(s);if(zt(r,e)){s.selected=!0;return}}(!a||e!==void 0)&&(t.selectedIndex=-1)}function sa(t){var e=new MutationObserver(()=>{ut(t,t.__value)});e.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ft(()=>{e.disconnect()})}function na(t,e,a=e){var s=!0;Ye(t,"change",r=>{var n=r?"[selected]":":checked",i;if(t.multiple)i=[].map.call(t.querySelectorAll(n),we);else{var o=t.querySelector(n)??t.querySelector("option:not([disabled])");i=o&&we(o)}a(i)}),Lt(()=>{var r=e();if(ut(t,r,s),s&&r===void 0){var n=t.querySelector(":checked");n!==null&&(r=we(n),a(r))}t.__value=r,s=!1}),sa(t)}function we(t){return"__value"in t?t.__value:t.value}function ra(t,e,a=e){var s=new WeakSet;Ye(t,"input",async r=>{var n=r?t.defaultValue:t.value;if(n=He(t)?ze(n):n,a(n),de!==null&&s.add(de),await Pt(),n!==(n=e())){var i=t.selectionStart,o=t.selectionEnd;t.value=n??"",o!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(o,t.value.length))}}),(J&&t.defaultValue!==t.value||lt(e)==null&&t.value)&&(a(He(t)?ze(t.value):t.value),de!==null&&s.add(de)),dt(()=>{var r=e();if(t===document.activeElement){var n=Mt??de;if(s.has(n))return}He(t)&&r===ze(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Oe(t,e,a=e){Ye(t,"change",s=>{var r=s?t.defaultChecked:t.checked;a(r)}),(J&&t.defaultChecked!==t.checked||lt(e)==null)&&a(t.checked),dt(()=>{var s=e();t.checked=!!s})}function He(t){var e=t.type;return e==="number"||e==="range"}function ze(t){return t===""?null:+t}const ia=!0,ns=Object.freeze(Object.defineProperty({__proto__:null,prerender:ia},Symbol.toStringTag,{value:"Module"})),ye="unsolvable";var oa=D("<p>The 3CNF formula is unsatisfiable.</p>"),la=D("<div> </div>"),da=D("<main><h2>CertRenderer 3SAT</h2> <!></main>");function ca(t,e){ie(e,!0);var a=da(),s=$(S(a),2);{var r=i=>{var o=oa();E(i,o)},n=i=>{var o=ce(),l=Q(o);ve(l,17,()=>e.cert.assignments,ue,(c,u)=>{var g=xe(()=>Xt(m(u),2));let C=()=>m(g)[0],_=()=>m(g)[1];var d=la(),h=S(d);w(d),Z(()=>ee(h,`${C()??""} ≔ ${_()==!0?"T":_()==!1?"F":"Either"}`)),E(c,d)}),E(i,o)};P(s,i=>{e.cert==ye?i(r):i(n,!1)})}w(a),E(t,a),oe()}var ua=D("<p>The graph doesn't contain a hamiltonian cycle.</p>"),va=D("<li> </li>"),ha=D("<ol></ol>"),fa=D("<span><!> </span>"),ga=D("<div></div>"),pa=D('<div class="controls"><input type="checkbox" name="showAsListCheckbox"/> <label for="showAsListCheckbox">Show as list</label></div> <!>',1),_a=D("<main><h2>CertRenderer HCYCLE</h2> <!></main>");function ma(t,e){ie(e,!0);let a=j(!0);var s=_a(),r=$(S(s),2);{var n=o=>{var l=ua();E(o,l)},i=o=>{var l=pa(),c=Q(l),u=S(c);ke(u),Te(2),w(c);var g=$(c,2);{var C=d=>{var h=ha();ve(h,21,()=>e.cert.path,ue,(b,I)=>{var k=va(),z=S(k,!0);w(k),Z(()=>ee(z,m(I).id)),E(b,k)}),w(h),E(d,h)},_=d=>{var h=ga();ve(h,21,()=>e.cert.path,ue,(b,I,k)=>{var z=fa(),R=S(z);Ce(R,()=>k!=0?"&ThinSpace;&LongRightArrow;&ThinSpace;":"");var N=$(R);w(z),Z(()=>ee(N,` ${m(I).id??""}`)),E(b,z)}),w(h),E(d,h)};P(g,d=>{m(a)?d(C):d(_,!1)})}Oe(u,()=>m(a),d=>U(a,d)),E(o,l)};P(r,o=>{e.cert==ye?o(n):o(i,!1)})}w(s),E(t,s),oe()}class ba extends Error{}function vt(t,e){if(!t)throw new ba("[ASSERT] "+e)}function wa(t,e,a){return a.indexOf(t)===e}class T{static SerializableClass(){return function(e){const a=e.name;e.prototype.__type=a,T.registerClass(a,e)}}static serialize(e){if(e==null)return e;if(Array.isArray(e))return e.map(T.serialize);if(e instanceof Set)return{__type:"Set",values:Array.from(e).map(T.serialize)};if(e instanceof Map)return{__type:"Map",entries:Array.from(e.entries()).map(([a,s])=>[T.serialize(a),T.serialize(s)])};if(typeof e=="object"){if(Array.isArray(e))return e.map(T.serialize);const a=e.constructor,r={__type:e.__type??a.name};for(const[n,i]of Object.entries(e))r[n]=T.serialize(i);return r}return e}static revive(e){if(e==null)return e;if(Array.isArray(e))return e.map(T.revive);if(e.__type==="Set")return new Set(e.values.map(T.revive));if(e.__type==="Map")return new Map(e.entries.map(([a,s])=>[T.revive(a),T.revive(s)]));if(e.__type){const a=T.getClass(e.__type);if(!a)throw new Error(`Serializer - Unknown class: ${e.__type}`);const s=Object.create(a.prototype);for(const[r,n]of Object.entries(e))r!=="__type"&&(s[r]=T.revive(n));return s}return e}static registerClass(e,a){T.classRegistry.set(e,a)}static getClass(e){return T.classRegistry.get(e)}static classRegistry=new Map}T.registerClass(Object.name,Object);class ht{}var ya=Object.getOwnPropertyDescriptor,qe=(t,e,a,s)=>{for(var r=s>1?void 0:s?ya(e,a):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(r=i(r)||r);return r};let Ee=class{id;varName;negated;constructor(t,e,a=!1){this.id=t,this.varName=e,this.negated=a}toJson(){return{__type:Ee.name,id:this.id,varName:this.varName,negated:this.negated}}asString(){return`${this.negated?"!":""}${this.varName}`}asHtmlString(){return(this.negated?"&not;":"")+this.varName}};Ee=qe([T.SerializableClass()],Ee);let $e=class{id;literals;constructor(t,e){vt(e.length==3),this.id=t,this.literals=[e[0],e[1],e[2]]}asString(){return this.literals.map(t=>t.asString()).join(" ")}asHtmlString(){return"("+this.literals.map(e=>e.asHtmlString()).join("&or;")+")"}toJSON(){return{__type:$e.name,id:this.id,literals:this.literals}}};$e=qe([T.SerializableClass()],$e);let he=class extends ht{_variables=new Set;_clauses=new Set;addVariable(t){this._variables.add(t)}addClause(t){this._clauses.add(t),t.literals.forEach(e=>this.addVariable(e.varName))}asString(){return Array.from(this._clauses.values()).map(t=>t.asString()).join(`
`)}asHtmlString(){return this.clauses.map(t=>t.asHtmlString()).join("&and;")}get variables(){return Array.from(this._variables.values())}get clauses(){return Array.from(this._clauses.values())}empty(){const t=this.clauses.length==0||this.variables.length==0;return console.debug("empty",t),t}static fromString(t){const e=t.split(`
`).map(s=>s.trim()).filter(s=>s.length).filter(wa);let a=new he;for(let s=0;s<e.length;s++){const r=e[s],n=r.split(" ").map(l=>l.trim()).filter(l=>l.length);if(n.length!=3)return`Clause number ${s+1} (${r}) doesn't have exactly 3 literals. Instead it has ${n.length} literals.`;let i=[];for(let l=0;l<n.length;l++){let c=n[l];const u=c.startsWith("!");if(u&&(c=c.replace("!","")),c.includes("!")||c.includes("||")||c.includes("&&"))return`Literal ${u?"!":""}${c} is invalid.`;const g=new Ee(`v:${l}-c:${s}`,c,u);i.push(g)}vt(i.length==3);const o=new $e(`c:${s}`,i);a.addClause(o)}return a}};he=qe([T.SerializableClass()],he);class Ve{static cnf3TextInput={NO_SOLUTION:`x y z
!x y z
x !y z
!x !y z
x y !z
!x y !z
x !y !z
!x !y !z
`,BASIC:`x y z
a b c
`};static getTextInputs(e){if(e===he)return Ve.cnf3TextInput;throw new Error(`No demos provided for class ${e.name}.`)}}function Ca(t,e,a,s,r){U(e,a[m(s)],!0),r()}var Sa=D("<option> </option>"),Ia=D(`<div class="cnf-editor"><h2>CNF Editor</h2> <p><i>Removes duplicate clauses automatically.</i></p> <textarea class="svelte-whqlb8">
    </textarea> <select><option>--Choose a demo--</option><!></select></div>`);function xa(t,e){ie(e,!0);const a=Ve.getTextInputs(he);let s=j(Gt(e.cnf?.asString()??"")),r=j("");const n=_=>{e.onChange&&e.onChange(_)},i=_=>{e.onWrongFormat&&e.onWrongFormat(_)},o=()=>{const _=he.fromString(m(s));if(typeof _=="string"){i(_);return}n(_)};Ue(()=>{e.cnf&&U(s,e.cnf.asString(),!0)});var l=Ia(),c=$(S(l),4);Yt(c),c.__change=o;var u=$(c,2);u.__change=[Ca,s,a,r,o];var g=S(u);g.value=g.__value="";var C=$(g);ve(C,17,()=>Object.keys(a),ue,(_,d)=>{var h=Sa(),b=S(h,!0);w(h);var I={};Z(()=>{ee(b,m(d)),I!==(I=m(d))&&(h.value=(h.__value=m(d))??"")}),E(_,h)}),w(u),w(l),ra(c,()=>m(s),_=>U(s,_)),na(u,()=>m(r),_=>U(r,_)),E(t,l),oe()}We(["change"]);function Ea(t,e,a){e()&&a.stepIndex>0&&e()()}function $a(t,e,a,s){e()&&a.stepIndex<s-1&&e()()}var Na=D("<h3> </h3> <p><!></p> <!>",1),Aa=D("<h3> </h3> <p><!></p>",1),Ta=D('<section><div class="header svelte-bomf3d"><h2>Reduction Stepper</h2> <div class="controls"><div><input type="checkbox" name="showAllCheckbox"/> <label for="showAllCheckbox">Show all</label></div> <div><button>Previous</button> <button>Next</button> <span> </span></div></div></div> <!></section>');function ka(t,e){ie(e,!0);let a=Ie(e,"indent",3,0),s=Ie(e,"onNextClick",3,void 0),r=Ie(e,"onPrevClick",3,void 0);const n=e.steps.length;let i=j(!1);var o=Ta(),l=S(o),c=$(S(l),2),u=S(c),g=S(u);ke(g),Te(2),w(u);var C=$(u,2),_=S(C);_.__click=[Ea,r,e];var d=$(_,2);d.__click=[$a,s,e,n];var h=$(d,2),b=S(h);w(h),w(C),w(c),w(l);var I=$(l,2);{var k=R=>{var N=ce(),f=Q(N);ve(f,17,()=>e.steps,ue,(y,O,W)=>{var q=Na(),v=Q(q),p=S(v);w(v);var x=$(v,2),A=S(x);Ce(A,()=>m(O).description),w(x);var G=$(x,2);P(G,H=>{}),Z(()=>ee(p,`Step #${W+1}: ${m(O).title??""}`)),E(y,q)}),E(R,N)},z=R=>{var N=ce(),f=Q(N);{var y=O=>{const W=xe(()=>e.steps[e.stepIndex]);var q=Aa(),v=Q(q),p=S(v);w(v);var x=$(v,2),A=S(x);Ce(A,()=>m(W).description),w(x),Z(()=>ee(p,`Step #${e.stepIndex+1}: ${m(W).title??""}`)),E(O,q)};P(f,O=>{e.stepIndex<e.steps.length&&O(y)})}E(R,N)};P(I,R=>{m(i)?R(k):R(z,!1)})}w(o),Z(()=>{aa(o,`padding-left: ${a()*100}px; border: solid black 1px`),ee(b,`${e.stepIndex+1}/${n??""}`)}),Oe(g,()=>m(i),R=>U(i,R)),E(t,o),oe()}We(["click"]);var Oa=D('<div class="clause svelte-z6uwnm"><!></div>'),Da=D('<div class="cnf-renderer"><h2>CNF Renderer</h2> <div><input type="checkbox" name="viewAsColumnCheckbox"/> <label for="viewAsColumnCheckbox">View as column</label></div> <!></div>');function je(t,e){ie(e,!0);let a=j(!1);var s=Da(),r=$(S(s),2),n=S(r);ke(n),Te(2),w(r);var i=$(r,2);{var o=c=>{var u=ce(),g=Q(u);ve(g,17,()=>e.cnf.clauses,ue,(C,_)=>{var d=Oa(),h=S(d);Ce(h,()=>m(_).asHtmlString()),w(d),E(C,d)}),E(c,u)},l=c=>{var u=ce(),g=Q(u);Ce(g,()=>e.cnf.asHtmlString()),E(c,u)};P(i,c=>{m(a)?c(o):c(l,!1)})}w(s),Oe(n,()=>m(a),c=>U(a,c)),E(t,s),oe()}const et={DEFAULT_STYLE:[{selector:"node",style:{label:"data(id)","text-valign":"top",color:"#000","background-color":"#61bffc","text-outline-color":"#fff","text-outline-width":2,"border-color":"black","border-style":"solid","border-width":2}},{selector:"edge",style:{"curve-style":"bezier","line-color":"black",width:2}}],"3SAT-HCYCLE":[{selector:"node",style:{label:"data(id)","font-size":12,"text-valign":"top","background-color":"blue","border-color":"black","border-style":"solid","border-width":2}},{selector:"node.true",style:{"background-color":"green"}},{selector:"node.false",style:{"background-color":"red"}},{selector:"node.source, node.inbetween, node.target",style:{"background-color":"white","border-style":"solid","border-color":"black"}},{selector:"node.clause",style:{"background-color":"orange"}},{selector:"node.guarantee",style:{opacity:.5}},{selector:"edge",style:{"line-color":"black","target-arrow-color":"black","target-arrow-shape":"chevron","curve-style":"bezier","arrow-scale":1}},{selector:"edge.muted",style:{"line-opacity":.2,"line-color":"black"}},{selector:"edge.clause",style:{"curve-style":"bezier",width:3,"line-opacity":1,"arrow-scale":2}},{selector:"edge.true_in",style:{"target-arrow-color":"green","line-color":"green","line-style":"dashed"}},{selector:"edge.true_out",style:{"target-arrow-color":"green","line-color":"green"}},{selector:"edge.false_in",style:{"target-arrow-color":"red","line-color":"red","line-style":"dashed"}},{selector:"edge.false_out",style:{"target-arrow-color":"red","line-color":"red"}},{selector:"edge.solved",style:{"line-opacity":.2}},{selector:"edge.solved.used",style:{"line-opacity":1}}]};var Ra=D('<section><h2>Graph Renderer</h2> <div id="cy" class="svelte-ovjh18"></div></section>');function tt(t,e){ie(e,!0);let a=Ie(e,"style",3,"DEFAULT_STYLE"),s,r;Ue(()=>{const o=e.graph.nodes.map(g=>({data:{id:g.id,label:g.id},position:g.position,classes:g.classes})),l=e.graph.edges.map(g=>({data:{id:g.id,source:g.from,target:g.to},classes:g.classes})),c=r?r.pan():{x:0,y:0},u=r?r.zoom():1;r?r.elements().remove():r=Zt({container:s,wheelSensitivity:5,style:et[a()]}),r.add([...o,...l]),r.style(et[a()]),r.zoom(u),r.pan(c)});var n=Ra(),i=$(S(n),2);Jt(i,o=>s=o,()=>s),w(n),E(t,n),oe()}const La=":",le="n:",K="n%:",M="e:",ae="source",se="target",me="n%c:",be="n%i:",ne="n%t:",re="n%f:";function Fa(t,e,a={serialize:s=>T.serialize(s),revive:s=>T.revive(s)}){let s=Vt(e);qt(()=>{const n=localStorage.getItem(t);if(n){const i=a.revive(JSON.parse(n));s.set(i)}});const r=()=>{if(Ke(s)){const n=JSON.stringify(a.serialize(Ke(s)));localStorage.setItem(t,n)}else localStorage.removeItem(t)};return{value:s,save:()=>r()}}var Ha=Object.getOwnPropertyDescriptor,za=(t,e,a,s)=>{for(var r=s>1?void 0:s?Ha(e,a):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(r=i(r)||r);return r};let Xe=class{assignments;constructor(t){this.assignments=t}};Xe=za([T.SerializableClass()],Xe);class Pa{decode(e,a){const{path:s}=a,r=new Map;for(let n=0;n<s.length;n++){const i=s[n].id;if(i.startsWith(ne)){const o=i.substring(ne.length,i.lastIndexOf("_"));r.has(o)||r.set(o,!0)}else if(i.startsWith(re)){const o=i.substring(re.length,i.lastIndexOf("_"));r.has(o)||r.set(o,!1)}}return new Xe(r)}}var Ma=Object.getOwnPropertyDescriptor,Xa=(t,e,a,s)=>{for(var r=s>1?void 0:s?Ma(e,a):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(r=i(r)||r);return r};let fe=class extends ht{_nodes;_edges;constructor(){super(),this._nodes=new Set,this._edges=new Set}addNode(t){t.classes==null&&(t.classes=""),this._nodes.add(t)}addEdge(t){t.classes==null&&(t.classes=""),this._edges.add(t)}get nodes(){return Array.from(this._nodes.values())}get edges(){return Array.from(this._edges.values())}removeNode(t){if(!this._nodes.has(t))return;this._nodes.delete(t),Array.from(this.edges).filter(a=>a.to===t.id||a.from===t.id).forEach(a=>this._edges.delete(a))}removeEdge(t){this._edges.delete(t)}empty(){return this.nodes.length==0||this.edges.length==0}copy(){const t=new fe;for(const e of this._nodes)t.addNode({id:e.id,label:e.label,position:e.position?{...e.position}:void 0,classes:e.classes});for(const e of this._edges)t.addEdge({id:e.id,from:e.from,to:e.to,weight:e.weight,classes:e.classes});return t}toSerializedString(t=!1){const e={nodes:this.nodes.map(a=>({id:a.id,label:a.label??null,position:a.position??null,classes:a.classes??""})),edges:this.edges.map(a=>({id:a.id,from:a.from,to:a.to,weight:a.weight??null,classes:a.classes??""}))};return JSON.stringify(e,null,t?2:0)}static fromSerializedString(t){const e=JSON.parse(t),a=new fe;if(Array.isArray(e.nodes))for(const s of e.nodes)a.addNode({id:s.id,label:s.label??void 0,position:s.position??void 0,classes:s.classes??""});if(Array.isArray(e.edges))for(const s of e.edges)a.addEdge({id:s.id,from:s.from,to:s.to,weight:s.weight??void 0,classes:s.classes??""});return a}};fe=Xa([T.SerializableClass()],fe);class Ga{inInstance;rowNodeCount;rowXOffset;varCount;clauseCount;height;yStep;yOffset;xDist=50;yDist=300;constructor(e){this.inInstance=e;const{variables:a,clauses:s}=this.inInstance;this.yOffset=this.yDist/2,this.varCount=a.length,this.clauseCount=s.length,this.height=(this.varCount-1)*this.yDist,this.yStep=(this.height-this.yDist)/(this.clauseCount-1==0?1:this.clauseCount-1),this.rowNodeCount=3*s.length+3,this.rowXOffset=(this.rowNodeCount-1)/2*this.xDist}reduce(){let e=[];const a=this.createVarGadgets();e.push(...a.interSteps);const s=this.createClauseGadgets(a.graph.copy());return e.push(...s.interSteps),{outInstance:s.graph,steps:e}}createClauseGadgets(e){const{clauses:a}=this.inInstance;let s=[],r=e.copy();return s.push({id:"create-clause-gadget-nodes",title:"Create clause nodes",description:`
                <p>
                    For every clause, create one clause node 
                    (this node must be visited exactly once).
                    There are ${this.clauseCount} clause nodes.
                </p>
                <p>
                    For each of the clause, create edges to or from the variable row nodes
                    based on these rules:
                </p>
                <ul>
                    <li>
                        If the literal <b>isn't negated</b>, 
                        pick a free (one that hasn't been used yet in this step) 
                        row node <i>r</i> and connect it to the clause node.

                        The selected node is an <u>out-going</u> node.

                        Then connect the clause node back to a row node <i>r + 1</i> 
                        (adjacent on the right of it).

                        This node is an <u>in-coming</u> node.
                    </li>
                    <li>
                        If the literal <b>is negated</b>, 
                        pick a free row node <i>r</i> 
                        and connect it to the clause node.

                        The selected node is an <u>out-going</u> node.

                        Then connect the clause node back to a row node <i>r - 1</i> 
                        (adjacent on the left of it).

                        This node is an <u>in-coming</u> node.
                    </li>
                </ul>
                <p>
                    This way we gaurantee for each clause that:
                    <ul>
                        <li>
                            If the literal <i>L</i> of some variable <i>X</i> 
                            <b>wasn't negated</b> in the clause, 
                            then we can reach it from an <i>X</i> variable row node 
                            and come back to an <i>X</i> variable row node on the right of it,
                            when we approach it from the left (we assinged X to be True).
                        </li>
                        <li>
                            If the literal <i>L</i> of some variable <i>X</i> 
                            <b>was negated</b> in the clause, 
                            then we can reach it from an <i>X</i> variable row node 
                            and come back to an <i>X</i> variable row node on the left of it,
                            when we approach it from the right (we assigned X to be False).
                        </li>
                    </ul>
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:r,mapping:{}}),a.forEach((n,i)=>{const o=i+1,l=`${o}`,c={id:me+`${l}`,position:{x:2*this.rowXOffset,y:i*this.yStep+this.yOffset},classes:"clause"};r.addNode(c),e.addNode(c),n.literals.forEach((u,g)=>{const C=`${u.varName}_${3*o}`,_=`${u.varName}_${3*o+1}`;u.negated?(e.addEdge({id:M+`${_}-${l}`,from:le+`${_}`,to:me+`${l}`,classes:"false_out"}),e.addEdge({id:M+`${l}-${C}`,from:me+`${l}`,to:le+`${C}`,classes:"false_in"})):(e.addEdge({id:M+`${C}-${l}`,from:le+`${C}`,to:me+`${l}`,classes:"true_out"}),e.addEdge({id:M+`${l}-${_}`,from:me+`${l}`,to:le+`${_}`,classes:"true_in"}))}),s.push({id:`connect-clause-node-${i}`,title:`Connect clause node "${l}" to variable row nodes`,description:`
                    <p>
                        Clause node "${l}" represents the clause ${n.asHtmlString()}.
                    </p>
                    <ul>
                        ${n.literals.map(u=>`
                                <li>
                                    ${u.asHtmlString()}
                                    &hyphen;
                                    ${u.negated?`
                                        because ${u.varName} is <i>negated</i>, 
                                        the <u>out-going</u> node (${u.varName}_${3*o+1})
                                        will be on the <b>right</b> of
                                        the <u>in-coming</u> node (${u.varName}_${3*o}).
                                    `:`
                                        because ${u.varName} is <i>isn't negated</i>, 
                                        the <u>out-going</u> node (${u.varName}_${3*o})
                                        will be on the <b>left</b> of
                                        the <u>in-coming</u> node (${u.varName}_${3*o+1}).
                                    `}
                                </li>
                            `).join("")}
                    </ul>
                    <p>
                        To clarify:
                        <ul>
                            <li>out-going node is incident to an edge connecting a row node to a clause node.</li>
                            <li>in-coming node is incident to an edge connecting a clause node to a row node.</li>
                        </ul>
                    </p>
                `,inSnapshot:this.inInstance,outSnapshot:e.copy(),mapping:{}})}),{graph:e,interSteps:s}}createVarGadgets(){const{variables:e}=this.inInstance;let a=new fe,s=new fe,r=[];return e.forEach((n,i)=>{if(i==0)s.addNode({id:K+ae,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"source"}),s.addEdge({id:M+`${ae}-${n}_1`,from:K+`${ae}`,to:ne+`${n}_1`,classes:"muted"}),s.addEdge({id:M+`${ae}-${n}_${this.rowNodeCount}`,from:K+`${ae}`,to:re+`${n}_${this.rowNodeCount}`,classes:"muted"});else{const o=`${e[i-1]}_${n}`;s.addNode({id:be+`${o}`,position:{x:0,y:i*this.yDist-this.yDist/2},classes:"inbetween"});const l=e[i-1];s.addEdge({id:M+`${l}_1-${o}`,from:ne+`${l}_1`,to:be+o,classes:"muted"}),s.addEdge({id:M+`${l}_${this.rowNodeCount}-${o}`,from:re+`${l}_${this.rowNodeCount}`,to:be+o,classes:"muted"}),s.addEdge({id:M+`${o}-${n}_1`,from:be+`${o}`,to:ne+`${n}_1`,classes:"muted"}),s.addEdge({id:M+`${o}-${n}_${this.rowNodeCount}`,from:be+`${o}`,to:re+`${n}_${this.rowNodeCount}`,classes:"muted"})}for(let o=1;o<=this.rowNodeCount-1;o++){const l=`${n}_${o}`,c=`${n}_${o+1}`;let u="",g=le,C=le;o==1?(u+=" true",g=ne):o==this.rowNodeCount-1?C=re:(o+1)%3==0&&(u+=" guarantee");const _={id:g+`${l}`,position:{x:(o-1)*this.xDist-this.rowXOffset,y:i*this.yDist},classes:u};if(a.addNode(_),s.addNode(_),o==this.rowNodeCount-1){const b={id:C+`${c}`,position:{x:o*this.xDist-this.rowXOffset,y:i*this.yDist},classes:"false"};a.addNode(b),s.addNode(b)}const d={id:M+`${l}-${c}`,from:g+`${l}`,to:C+`${c}`,classes:"muted"},h={id:M+`${c}-${l}`,from:C+`${c}`,to:g+`${l}`,classes:"muted"};a.addEdge(d),a.addEdge(h),s.addEdge(d),s.addEdge(h)}i==e.length-1&&(s.addNode({id:K+se,position:{x:0,y:i*this.yDist+this.yDist/2},classes:"target"}),s.addEdge({id:M+`${n}_1-${se}`,from:ne+`${n}_1`,to:K+`${se}`,classes:"muted"}),s.addEdge({id:M+`${n}_${this.rowNodeCount}-${se}`,from:re+`${n}_${this.rowNodeCount}`,to:K+`${se}`,classes:"muted"}),s.addEdge({id:M+`${se}-${ae}`,from:K+`${se}`,to:K+`${ae}`,classes:"muted"}))}),r.push({id:"create-variable-gadgets",title:"Create individual variable gadgets",description:`
                <p>
                    For every variable, create a row variable gadget.
                </p>
                <p>
                    This gadget consists of ${this.rowNodeCount} row nodes.
                    They are all connected birectinally.
                </p>
                <p>
                    The number of row nodes it derived as follows: 
                </p>
                <p>
                    For every clause we need 2 nodes - an <i>out-going</i> and <i>in-coming</i> node.
                    Each of these 2 nodes must be padded a <i>pad</i> node (at least one).
                    The rows themselves also need <i>true</i> and and <i>false</i> ends.
                </p>
                <p>
                    ${this.clauseCount==1?`There is ${this.clauseCount} clause.`:`There are ${this.clauseCount} clauses.`}
                    Therefore we need: 
                    <ul>
                        <li>2 * ${this.clauseCount} out-going and in-coming nodes</li>
                        <li>${this.clauseCount} + 1 pad nodes</li>
                        <li>1 true and 1 false nodes at the row ends</li>
                    </ul>
                </p>
                <p>
                    (2 * ${this.clauseCount}) + (${this.clauseCount} + 1) + 1 + 1 = ${this.rowNodeCount} nodes per variable row.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:a,mapping:{}}),r.push({id:"create-inbetween-nodes",title:"Create inbetween nodes",description:`
                <p>
                    Create the <i>source</i> node, the <i>inbetween</i> nodes that lie
                    between the variable rows and <i>target</i> node. 
                </p>
                <p>
                    Connect the <i>source</i> node 
                    to the row ends of the first variable "${this.inInstance.variables[0]}".
                    After that connect its row ends to the inbetween/target node below.
                    Finally connect the <i>target</i> node to <i>source</i> node to close the loop.
                </p>
                <p>Why did we do this?</p>
                <p>
                    Going from the <i>source</i> or an <i>inbetween</i> node 
                    to the variable's row node is equivalent to assigning 
                    a boolean value that corresponding variable.
                </p>
                <ul>
                    <li> 
                        Going through the <b>left edge means assigning 'true'</b>.
                    </li>
                    <li>
                        Going though the <b>right edge means assigning 'false'</b>.
                    </li>
                </ul>
                <p>
                    Notice that we can only choose either 'true' or 'false' edge.
                    Backtracking is impossible.
                </p>
                <p>
                    After going through either the right or left edge, 
                    we must visit the row nodes, for the final cycle to be Hamiltonian.
                </p>
                <ul>
                    <li>
                        If we chose the <b>left edge</b>, then we end up on the <b>'true'</b> node 
                        and have to traverse the row nodes from <u>left to right</u> until 
                        we end up at the 'false' node.
                    </li>

                    <li>
                        If we chose the <b>right</b> edge, then we end up on the <b>'false'</b> node 
                        and have to traverse the row nodes from <u>right to left</u> until
                        we end up at the 'true' node.
                    </li>

                    <li>
                        Onwards, the only choice is to continue 
                        to the next <i>inbetween</i>/<i>target</i> node below.
                    </li>
                </ul>
                <p>
                    The last step is to go from the <i>target</i> node back to the <i>source</i> node.
                </p>
            `,inSnapshot:this.inInstance,outSnapshot:s,mapping:{}}),{graph:s,interSteps:r}}}var Ya=Object.getOwnPropertyDescriptor,Ua=(t,e,a,s)=>{for(var r=s>1?void 0:s?Ya(e,a):e,n=t.length-1,i;n>=0;n--)(i=t[n])&&(r=i(r)||r);return r};let Ge=class{inInstance=null;outInstance=null;steps=[];stepIndex=0;inCert=null;outCert=null;reset(){this.inInstance=null,this.outInstance=null,this.inCert=null,this.outCert=null,this.steps=[],this.stepIndex=0}resetStepIndex(){this.stepIndex=0}setInInstance(t){this.reset(),this.inInstance=t}set setSteps(t){this.steps=t,this.stepIndex=0}nextStep(){const t=this.steps.length;this.stepIndex=Math.min(this.stepIndex+1,t)}prevStep(){this.stepIndex=Math.max(this.stepIndex-1,0)}hasInstances(){return this.inInstance!=null&&this.outInstance!=null}};Ge=Ua([T.SerializableClass()],Ge);var Wa=D('<meta name="description" content="Redcution from 3SAT to HCYCLE"/>'),qa=(t,e)=>e(),Va=D('<div class="loading svelte-1cz0gvf"><span class="spinner svelte-1cz0gvf"></span> <span> </span></div>'),Ja=D("<div><!></div> <!> <div><!></div>",1),Ba=D("<span>There are no steps to step through.</span>"),Qa=D('<div class="panes svelte-1cz0gvf"><div><!> <!></div> <div><!> <!></div></div>'),Za=D('<section><h1>3SAT to HCYCLE reduction</h1> <!> <div><button>Reduce</button> <button><!></button> <input type="checkbox" name="showStepperCheckbox"/> <label for="showStepperCheckbox">Show steps</label></div> <!> <!></section>');function rs(t,e){ie(e,!0);const a=()=>Bt(i,"$redStore",s),[s,r]=Qt();let n=Fa(Kt.LS_3SAT_HCYCLE,new Ge),i=n.value,o=j(!1),l=j(!1),c=j("");function u(v){i.update(p=>(p.reset(),p.setInInstance(v),n.save(),p))}function g(){if(a().inInstance){const v=new Ga(a().inInstance),{outInstance:p,steps:x}=v.reduce();i.update(A=>(A.steps=x,A.outInstance=p,A)),n.save()}}async function C(){let{inCert:v,outInstance:p,outCert:x}=a();if(!(!p||x)){U(l,!0),U(c,"Solving Hamiltonian cycle...");try{const A=new Worker(new URL(""+new URL("../workers/WorkerHCYCLESolver-GH7h8cJ6.js",import.meta.url).href,import.meta.url),{type:"module"}),G=new Promise(H=>{A.onmessage=V=>{A.terminate(),H(V.data)}});if(A.postMessage(p.toSerializedString()),x=await G,x==ye)i.update(H=>(H.inCert=ye,H.outCert=ye,H));else{const H=p,V=x.path;H.edges.forEach(F=>F.classes+=" solved");const X=F=>F.slice(F.search(La)+1);for(let F=0;F<V.length-1;F++){const te=X(V[F].id),ge=X(V[F+1].id),pe=M+`${te}-${ge}`,L=H.edges.find(Se=>Se.id==pe);L&&(H.removeEdge(L),L.classes+=" used",H.addEdge(L))}v=new Pa().decode(H,x),i.update(F=>(F.inCert=v,F.outCert=x,F.outInstance=H,F))}n.save()}catch(A){console.error("Error during solving:",A),U(c,"An error occured while solving.")}finally{U(l,!1),U(c,"")}}}Ue(()=>{i.update(v=>(v.resetStepIndex(),v))});var _=Za();Ut(v=>{var p=Wa();Wt.title="3SAT to HCYCLE",E(v,p)});var d=$(S(_),2);xa(d,{get cnf(){return a().inInstance},onChange:v=>u(v),onWrongFormat:v=>alert("From editor: "+v)});var h=$(d,2),b=S(h);b.__click=g;var I=$(b,2);I.__click=[qa,C];var k=S(I);{var z=v=>{var p=Ze("Solving...");E(v,p)},R=v=>{var p=Ze("Solve");E(v,p)};P(k,v=>{m(l)?v(z):v(R,!1)})}w(I);var N=$(I,2);ke(N),Te(2),w(h);var f=$(h,2);{var y=v=>{var p=Va(),x=$(S(p),2),A=S(x,!0);w(x),w(p),Z(()=>ee(A,m(c))),E(v,p)};P(f,v=>{m(l)&&v(y)})}var O=$(f,2);{var W=v=>{const p=xe(()=>a().steps),x=xe(()=>a().stepIndex);var A=ce(),G=Q(A);{var H=X=>{var F=Ja(),te=Q(F),ge=S(te);{var pe=Y=>{je(Y,{get cnf(){return m(p)[m(x)].inSnapshot}})};P(ge,Y=>{m(x)<m(p).length&&m(p)[m(x)].inSnapshot&&!m(p)[m(x)].inSnapshot.empty()&&Y(pe)})}w(te);var L=$(te,2);ka(L,{get steps(){return a().steps},get stepIndex(){return a().stepIndex},onPrevClick:()=>{i.update(Y=>(Y.prevStep(),Y)),n.save()},onNextClick:()=>{i.update(Y=>(Y.nextStep(),Y)),n.save()}});var Se=$(L,2),ft=S(Se);{var gt=Y=>{tt(Y,{get graph(){return a().steps[a().stepIndex].outSnapshot},style:"3SAT-HCYCLE"})};P(ft,Y=>{a().stepIndex<a().steps.length&&a().steps[a().stepIndex].outSnapshot&&Y(gt)})}w(Se),E(X,F)},V=X=>{var F=Ba();E(X,F)};P(G,X=>{m(p).length?X(H):X(V,!1)})}E(v,A)},q=v=>{var p=Qa(),x=S(p),A=S(x);{var G=L=>{je(L,{get cnf(){return a().inInstance}})};P(A,L=>{a().inInstance&&!a().inInstance.empty()&&L(G)})}var H=$(A,2);{var V=L=>{ca(L,{get cert(){return a().inCert}})};P(H,L=>{a().inCert&&L(V)})}w(x);var X=$(x,2),F=S(X);{var te=L=>{tt(L,{get graph(){return a().outInstance},style:"3SAT-HCYCLE"})};P(F,L=>{a().outInstance&&!a().outInstance.empty()&&L(te)})}var ge=$(F,2);{var pe=L=>{ma(L,{get cert(){return a().outCert}})};P(ge,L=>{a().outCert&&L(pe)})}w(X),w(p),E(v,p)};P(O,v=>{m(o)?v(W):v(q,!1)})}w(_),Z(v=>I.disabled=v,[()=>!a().hasInstances()||m(l)]),Oe(N,()=>m(o),v=>U(o,v)),E(t,_),oe(),r()}We(["click"]);export{rs as component,ns as universal};
