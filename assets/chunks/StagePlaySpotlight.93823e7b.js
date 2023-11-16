import{h as R,a1 as Ye,g as _,l as le,E as At,x as j,a2 as te,a3 as _t,a4 as Ct,d as Je,M as be,a5 as Rt,a6 as S,T as Ue,a7 as Se,U as Pt,a8 as Tt}from"./framework.42e212fd.js";const Ze="vue-stage-play-global",Ge="vue-stage-play-spotlight",Ke={spotlightPadding:10,spotlightBorderRadius:10,spotlightDarkZoneColor:"rgba(66, 66, 66, 0.5)",allowInteract:!1,allowLeave:!0,cameraFollow:!0,cameraFollowOffset:24,cameraFollowOptions:{behavior:"smooth",block:"start",inline:"nearest"},cameraFixAfterFollow:!0,voiceOverPlacement:"bottom",voiceOverAutoPlacement:!0,voiceOverAlign:"center",voiceOverWidth:300,voiceOverTitle:"Hamlet Act 3 Scene 2",voiceOverContent:"To be, or not to be; that's the question.",voiceOverPrevButtonText:"Back",voiceOverNextButtonText:"Next",voiceOverDoneButtonText:"Done",onBeforeCut:()=>{},onAfterCut:()=>{},onActivated:()=>{},onDeactivated:()=>{}},ae=R(!1);function Qe(){const e=window.scrollY,t=window.scrollX;document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.left=`-${t}px`,document.body.style.width="100%"}function Ve(){const e=document.body.style.top,t=document.body.style.left;document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.width="auto",window.scrollTo(parseInt(t||"0")*-1,parseInt(e||"0")*-1)}function et(){Ve(),Qe()}function Et(){ae.value||(ae.value=!0,window.addEventListener("resize",et),Qe())}function Bt(){ae.value&&(ae.value=!1,window.removeEventListener("resize",et),Ve())}function Ae(){return{isFixed:ae,fixed:Et,reset:Bt}}const W="[Vue Stage Play]",I={alreadyPlayingAct:e=>`${W} "${e}" is already playing.`,noSceneInAct:e=>`${W} No scene in "${e}"`,noSpecifiedSceneInAct:(e,t)=>`${W} No scene "${t}" in "${e}"`,noPlayingAct:()=>`${W} No playing act.`,noPreviousScene:()=>`${W} No previous scene.`,noNextScene:()=>`${W} No next scene.`,noSpecifiedScene:()=>`${W} No such scene`,sceneNumberShouldBePositive:()=>`${W} Scene number should be positive`,canNotRemoveCurrentScene:()=>`${W} Can't remove current scene`};function Nt(e,t,n){const o=e.length;if(o===0)return-1;let i=o-1;for(;i>=0;){if(t.call(n,e[i],i,e))return i;i--}return-1}function kt(e,t){return new Promise(n=>{let o=0,i;e.scrollIntoView(t),requestAnimationFrame(a);function a(){const r=e.getBoundingClientRect().top;if(r===i){if(o++>2)return n()}else o=0,i=r;requestAnimationFrame(a)}})}const{reset:Lt}=Ae(),q=Ye({}),M=R(),k=_(()=>M.value?q[M.value]?q[M.value]:[]:[]),_e=_(()=>k.value?k.value.map((e,t)=>e!==void 0?t:void 0).filter(e=>e!==void 0):[]),he=_(()=>!k.value||!P.value?-1:_e.value.findIndex(e=>e===P.value)),P=R(),tt=_(()=>{if(!M.value||!k.value.length||P.value===void 0)return;const e=k.value[P.value];return e!==void 0?e.value:void 0}),Ce=_(()=>k.value?k.value.filter(e=>e!==void 0).length:0),Re=_(()=>he.value-1>=0),Pe=_(()=>he.value+1<Ce.value);function nt(e,t){if(M.value){console.warn(I.alreadyPlayingAct(M.value));return}const n=q[e],o=Array.isArray(n)?n:[];if(o.length===0){console.warn(I.noSceneInAct(e));return}if(t!==void 0&&!o[t]){console.warn(I.noSpecifiedSceneInAct(e,t));return}M.value=e,P.value=t!==void 0?t:o.findIndex(i=>i!==void 0)}function ot(){M.value=void 0,P.value=void 0,Lt()}function Ft(e,t,n){if(t<0)throw new Error(I.sceneNumberShouldBePositive());q[e]||(q[e]=[]);const o=q[e];Array.isArray(o)&&(o[t]=n)}function $t(e,t){if(!q[e])return;if(P.value===t){console.warn(I.canNotRemoveCurrentScene());return}const n=q[e];Array.isArray(n)&&(n[t]=void 0)}function it(){const e=P.value;if(!k.value||e===void 0){console.warn(I.noPlayingAct());return}if(!Re.value){console.warn(I.noPreviousScene());return}P.value=Nt(k.value,(t,n)=>n<e&&t!==void 0)}function rt(){const e=P.value;if(!k.value||e===void 0){console.warn(I.noPlayingAct());return}if(!Pe.value){console.warn(I.noNextScene());return}P.value=k.value.findIndex((t,n)=>n>e&&t!==void 0)}function lt(e){if(!k.value||P.value===void 0){console.warn(I.noPlayingAct());return}if(k.value[e]===void 0){console.warn(I.noSpecifiedScene());return}P.value=e}const Dt=R(!0);function hn(){return{acts:q,currentActName:M,currentActSceneList:_e,totalSceneCount:Ce,currentScene:P,currentSceneOrder:he,currentActor:tt,hasPrevScene:Re,hasNextScene:Pe,action:nt,cut:ot,prevScene:it,nextScene:rt,jumpToScene:lt}}function at(){return{isLocate:Dt,acts:q,currentActName:M,currentActSceneList:_e,totalSceneCount:Ce,currentScene:P,currentSceneOrder:he,currentActor:tt,hasPrevScene:Re,hasNextScene:Pe,action:nt,cut:ot,addScene:Ft,removeScene:$t,prevScene:it,nextScene:rt,jumpToScene:lt}}function De(){return[{opacity:0},{opacity:1}]}function Ie(e,t,n,o){const i=e.animate(n,o);i.onfinish=()=>{t()}}function ct(e){function t(o,i){const a=De();Ie(o,i,a,{duration:e,easing:"ease"})}function n(o,i){const a=De().reverse();Ie(o,i,a,{duration:e,easing:"ease"})}return{enterTransition:t,leaveTransition:n}}const ve=Math.min,Q=Math.max,pe=Math.round,de=Math.floor,Z=e=>({x:e,y:e}),It={left:"right",right:"left",bottom:"top",top:"bottom"},qt={start:"end",end:"start"};function qe(e,t,n){return Q(e,ve(t,n))}function Te(e,t){return typeof e=="function"?e(t):e}function oe(e){return e.split("-")[0]}function Ee(e){return e.split("-")[1]}function st(e){return e==="x"?"y":"x"}function ut(e){return e==="y"?"height":"width"}function Be(e){return["top","bottom"].includes(oe(e))?"y":"x"}function ft(e){return st(Be(e))}function Mt(e,t,n){n===void 0&&(n=!1);const o=Ee(e),i=ft(e),a=ut(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(r=ge(r)),[r,ge(r)]}function Ht(e){const t=ge(e);return[Oe(e),t,Oe(t)]}function Oe(e){return e.replace(/start|end/g,t=>qt[t])}function zt(e,t,n){const o=["left","right"],i=["right","left"],a=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?a:r;default:return[]}}function Wt(e,t,n,o){const i=Ee(e);let a=zt(oe(e),n==="start",o);return i&&(a=a.map(r=>r+"-"+i),t&&(a=a.concat(a.map(Oe)))),a}function ge(e){return e.replace(/left|right|bottom|top/g,t=>It[t])}function jt(e){return{top:0,right:0,bottom:0,left:0,...e}}function Xt(e){return typeof e!="number"?jt(e):{top:e,right:e,bottom:e,left:e}}function me(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function Me(e,t,n){let{reference:o,floating:i}=e;const a=Be(t),r=ft(t),c=ut(r),l=oe(t),s=a==="y",f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let u;switch(l){case"top":u={x:f,y:o.y-i.height};break;case"bottom":u={x:f,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-i.width,y:d};break;default:u={x:o.x,y:o.y}}switch(Ee(t)){case"start":u[r]-=g*(n&&s?-1:1);break;case"end":u[r]+=g*(n&&s?-1:1);break}return u}const Yt=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:r}=n,c=a.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let s=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:d}=Me(s,o,l),g=o,u={},v=0;for(let m=0;m<c.length;m++){const{name:h,fn:p}=c[m],{x:y,y:w,data:C,reset:O}=await p({x:f,y:d,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:s,platform:r,elements:{reference:e,floating:t}});if(f=y??f,d=w??d,u={...u,[h]:{...u[h],...C}},O&&v<=50){v++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(s=O.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):O.rects),{x:f,y:d}=Me(s,g,l)),m=-1;continue}}return{x:f,y:d,placement:g,strategy:i,middlewareData:u}};async function dt(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:a,rects:r,elements:c,strategy:l}=e,{boundary:s="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:g=!1,padding:u=0}=Te(t,e),v=Xt(u),h=c[g?d==="floating"?"reference":"floating":d],p=me(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(h)))==null||n?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:s,rootBoundary:f,strategy:l})),y=d==="floating"?{...r.floating,x:o,y:i}:r.reference,w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),C=await(a.isElement==null?void 0:a.isElement(w))?await(a.getScale==null?void 0:a.getScale(w))||{x:1,y:1}:{x:1,y:1},O=me(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:l}):y);return{top:(p.top-O.top+v.top)/C.y,bottom:(O.bottom-p.bottom+v.bottom)/C.y,left:(p.left-O.left+v.left)/C.x,right:(O.right-p.right+v.right)/C.x}}const Jt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:a,rects:r,initialPlacement:c,platform:l,elements:s}=t,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:m=!0,...h}=Te(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const p=oe(i),y=oe(c)===c,w=await(l.isRTL==null?void 0:l.isRTL(s.floating)),C=g||(y||!m?[ge(c)]:Ht(c));!g&&v!=="none"&&C.push(...Wt(c,m,v,w));const O=[c,...C],L=await dt(t,h),x=[];let $=((o=a.flip)==null?void 0:o.overflows)||[];if(f&&x.push(L[p]),d){const B=Mt(i,r,w);x.push(L[B[0]],L[B[1]])}if($=[...$,{placement:i,overflows:x}],!x.every(B=>B<=0)){var K,E;const B=(((K=a.flip)==null?void 0:K.index)||0)+1,T=O[B];if(T)return{data:{index:B,overflows:$},reset:{placement:T}};let D=(E=$.filter(z=>z.overflows[0]<=0).sort((z,J)=>z.overflows[1]-J.overflows[1])[0])==null?void 0:E.placement;if(!D)switch(u){case"bestFit":{var ue;const z=(ue=$.map(J=>[J.placement,J.overflows.filter(U=>U>0).reduce((U,re)=>U+re,0)]).sort((J,U)=>J[1]-U[1])[0])==null?void 0:ue[0];z&&(D=z);break}case"initialPlacement":D=c;break}if(i!==D)return{reset:{placement:D}}}return{}}}},Ut=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:a=!0,crossAxis:r=!1,limiter:c={fn:h=>{let{x:p,y}=h;return{x:p,y}}},...l}=Te(e,t),s={x:n,y:o},f=await dt(t,l),d=Be(oe(i)),g=st(d);let u=s[g],v=s[d];if(a){const h=g==="y"?"top":"left",p=g==="y"?"bottom":"right",y=u+f[h],w=u-f[p];u=qe(y,u,w)}if(r){const h=d==="y"?"top":"left",p=d==="y"?"bottom":"right",y=v+f[h],w=v-f[p];v=qe(y,v,w)}const m=c.fn({...t,[g]:u,[d]:v});return{...m,data:{x:m.x-n,y:m.y-o}}}}};function G(e){return vt(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(vt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vt(e){return e instanceof Node||e instanceof N(e).Node}function X(e){return e instanceof Element||e instanceof N(e).Element}function H(e){return e instanceof HTMLElement||e instanceof N(e).HTMLElement}function He(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}function se(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=F(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function Zt(e){return["table","td","th"].includes(G(e))}function Ne(e){const t=ke(),n=F(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Gt(e){let t=ie(e);for(;H(t)&&!ye(t);){if(Ne(t))return t;t=ie(t)}return null}function ke(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(e){return["html","body","#document"].includes(G(e))}function F(e){return N(e).getComputedStyle(e)}function xe(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function ie(e){if(G(e)==="html")return e;const t=e.assignedSlot||e.parentNode||He(e)&&e.host||Y(e);return He(t)?t.host:t}function pt(e){const t=ie(e);return ye(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&se(t)?t:pt(t)}function ce(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=pt(e),a=i===((o=e.ownerDocument)==null?void 0:o.body),r=N(i);return a?t.concat(r,r.visualViewport||[],se(i)?i:[],r.frameElement&&n?ce(r.frameElement):[]):t.concat(i,ce(i,[],n))}function gt(e){const t=F(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=H(e),a=i?e.offsetWidth:n,r=i?e.offsetHeight:o,c=pe(n)!==a||pe(o)!==r;return c&&(n=a,o=r),{width:n,height:o,$:c}}function Le(e){return X(e)?e:e.contextElement}function ne(e){const t=Le(e);if(!H(t))return Z(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:a}=gt(t);let r=(a?pe(n.width):n.width)/o,c=(a?pe(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const Kt=Z(0);function mt(e){const t=N(e);return!ke()||!t.visualViewport?Kt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Qt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==N(e)?!1:t}function V(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=Le(e);let r=Z(1);t&&(o?X(o)&&(r=ne(o)):r=ne(e));const c=Qt(a,n,o)?mt(a):Z(0);let l=(i.left+c.x)/r.x,s=(i.top+c.y)/r.y,f=i.width/r.x,d=i.height/r.y;if(a){const g=N(a),u=o&&X(o)?N(o):o;let v=g.frameElement;for(;v&&o&&u!==g;){const m=ne(v),h=v.getBoundingClientRect(),p=F(v),y=h.left+(v.clientLeft+parseFloat(p.paddingLeft))*m.x,w=h.top+(v.clientTop+parseFloat(p.paddingTop))*m.y;l*=m.x,s*=m.y,f*=m.x,d*=m.y,l+=y,s+=w,v=N(v).frameElement}}return me({width:f,height:d,x:l,y:s})}function Vt(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=H(n),a=Y(n);if(n===a)return t;let r={scrollLeft:0,scrollTop:0},c=Z(1);const l=Z(0);if((i||!i&&o!=="fixed")&&((G(n)!=="body"||se(a))&&(r=xe(n)),H(n))){const s=V(n);c=ne(n),l.x=s.x+n.clientLeft,l.y=s.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-r.scrollLeft*c.x+l.x,y:t.y*c.y-r.scrollTop*c.y+l.y}}function en(e){return Array.from(e.getClientRects())}function ht(e){return V(Y(e)).left+xe(e).scrollLeft}function tn(e){const t=Y(e),n=xe(e),o=e.ownerDocument.body,i=Q(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),a=Q(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+ht(e);const c=-n.scrollTop;return F(o).direction==="rtl"&&(r+=Q(t.clientWidth,o.clientWidth)-i),{width:i,height:a,x:r,y:c}}function nn(e,t){const n=N(e),o=Y(e),i=n.visualViewport;let a=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){a=i.width,r=i.height;const s=ke();(!s||s&&t==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:a,height:r,x:c,y:l}}function on(e,t){const n=V(e,!0,t==="fixed"),o=n.top+e.clientTop,i=n.left+e.clientLeft,a=H(e)?ne(e):Z(1),r=e.clientWidth*a.x,c=e.clientHeight*a.y,l=i*a.x,s=o*a.y;return{width:r,height:c,x:l,y:s}}function ze(e,t,n){let o;if(t==="viewport")o=nn(e,n);else if(t==="document")o=tn(Y(e));else if(X(t))o=on(t,n);else{const i=mt(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return me(o)}function yt(e,t){const n=ie(e);return n===t||!X(n)||ye(n)?!1:F(n).position==="fixed"||yt(n,t)}function rn(e,t){const n=t.get(e);if(n)return n;let o=ce(e,[],!1).filter(c=>X(c)&&G(c)!=="body"),i=null;const a=F(e).position==="fixed";let r=a?ie(e):e;for(;X(r)&&!ye(r);){const c=F(r),l=Ne(r);!l&&c.position==="fixed"&&(i=null),(a?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||se(r)&&!l&&yt(e,r))?o=o.filter(f=>f!==r):i=c,r=ie(r)}return t.set(e,o),o}function ln(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const r=[...n==="clippingAncestors"?rn(t,this._c):[].concat(n),o],c=r[0],l=r.reduce((s,f)=>{const d=ze(t,f,i);return s.top=Q(d.top,s.top),s.right=ve(d.right,s.right),s.bottom=ve(d.bottom,s.bottom),s.left=Q(d.left,s.left),s},ze(t,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function an(e){return gt(e)}function cn(e,t,n){const o=H(t),i=Y(t),a=n==="fixed",r=V(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const l=Z(0);if(o||!o&&!a)if((G(t)!=="body"||se(i))&&(c=xe(t)),o){const s=V(t,!0,a,t);l.x=s.x+t.clientLeft,l.y=s.y+t.clientTop}else i&&(l.x=ht(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}function We(e,t){return!H(e)||F(e).position==="fixed"?null:t?t(e):e.offsetParent}function xt(e,t){const n=N(e);if(!H(e))return n;let o=We(e,t);for(;o&&Zt(o)&&F(o).position==="static";)o=We(o,t);return o&&(G(o)==="html"||G(o)==="body"&&F(o).position==="static"&&!Ne(o))?n:o||Gt(e)||n}const sn=async function(e){let{reference:t,floating:n,strategy:o}=e;const i=this.getOffsetParent||xt,a=this.getDimensions;return{reference:cn(t,await i(n),o),floating:{x:0,y:0,...await a(n)}}};function un(e){return F(e).direction==="rtl"}const fn={convertOffsetParentRelativeRectToViewportRelativeRect:Vt,getDocumentElement:Y,getClippingRect:ln,getOffsetParent:xt,getElementRects:sn,getClientRects:en,getDimensions:an,getScale:ne,isElement:X,isRTL:un};function dn(e,t){let n=null,o;const i=Y(e);function a(){clearTimeout(o),n&&n.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),a();const{left:s,top:f,width:d,height:g}=e.getBoundingClientRect();if(c||t(),!d||!g)return;const u=de(f),v=de(i.clientWidth-(s+d)),m=de(i.clientHeight-(f+g)),h=de(s),y={rootMargin:-u+"px "+-v+"px "+-m+"px "+-h+"px",threshold:Q(0,ve(1,l))||1};let w=!0;function C(O){const L=O[0].intersectionRatio;if(L!==l){if(!w)return r();L?r(!1,L):o=setTimeout(()=>{r(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(C,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,y)}n.observe(e)}return r(!0),a}function vn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,s=Le(e),f=i||a?[...s?ce(s):[],...ce(t)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),a&&p.addEventListener("resize",n)});const d=s&&c?dn(s,n):null;let g=-1,u=null;r&&(u=new ResizeObserver(p=>{let[y]=p;y&&y.target===s&&u&&(u.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{u&&u.observe(t)})),n()}),s&&!l&&u.observe(s),u.observe(t));let v,m=l?V(e):null;l&&h();function h(){const p=V(e);m&&(p.x!==m.x||p.y!==m.y||p.width!==m.width||p.height!==m.height)&&n(),m=p,v=requestAnimationFrame(h)}return n(),()=>{f.forEach(p=>{i&&p.removeEventListener("scroll",n),a&&p.removeEventListener("resize",n)}),d&&d(),u&&u.disconnect(),u=null,l&&cancelAnimationFrame(v)}}const pn=(e,t,n)=>{const o=new Map,i={platform:fn,...n},a={...i.platform,_c:o};return Yt(e,t,{...i,platform:a})};function je(e){var t;return(t=e==null?void 0:e.$el)!=null?t:e}function wt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Xe(e,t){const n=wt(e);return Math.round(t*n)/n}function gn(e,t,n){n===void 0&&(n={});const o=n.whileElementsMounted,i=_(()=>{var x;return(x=le(n.open))!=null?x:!0}),a=_(()=>le(n.middleware)),r=_(()=>{var x;return(x=le(n.placement))!=null?x:"bottom"}),c=_(()=>{var x;return(x=le(n.strategy))!=null?x:"absolute"}),l=_(()=>{var x;return(x=le(n.transform))!=null?x:!0}),s=_(()=>je(e.value)),f=_(()=>je(t.value)),d=R(0),g=R(0),u=R(c.value),v=R(r.value),m=At({}),h=R(!1),p=_(()=>{const x={position:u.value,left:"0",top:"0"};if(!f.value)return x;const $=Xe(f.value,d.value),K=Xe(f.value,g.value);return l.value?{...x,transform:"translate("+$+"px, "+K+"px)",...wt(f.value)>=1.5&&{willChange:"transform"}}:{position:u.value,left:$+"px",top:K+"px"}});let y;function w(){s.value==null||f.value==null||pn(s.value,f.value,{middleware:a.value,placement:r.value,strategy:c.value}).then(x=>{d.value=x.x,g.value=x.y,u.value=x.strategy,v.value=x.placement,m.value=x.middlewareData,h.value=!0})}function C(){typeof y=="function"&&(y(),y=void 0)}function O(){if(C(),o===void 0){w();return}if(s.value!=null&&f.value!=null){y=o(s.value,f.value,w);return}}function L(){i.value||(h.value=!1)}return j([a,r,c],w,{flush:"sync"}),j([s,f],O,{flush:"sync"}),j(i,L,{flush:"sync"}),_t()&&Ct(C),{x:te(d),y:te(g),strategy:te(u),placement:te(v),middlewareData:te(m),isPositioned:te(h),floatingStyles:p,update:w}}const yn=Je({slots:Object,name:"StagePlayScene",props:{actName:{type:String,required:!0},scene:{type:Number,required:!0,validator:e=>e>=0},tag:{type:String,required:!1,default:"div"},skip:{type:Boolean,required:!1,default:!1},allowInteract:{type:Boolean,required:!1,default:void 0},allowLeave:{type:Boolean,required:!1,default:void 0},cameraFollow:{type:Boolean,required:!1,default:void 0},cameraFollowOffset:{type:Number,required:!1},cameraFollowOptions:{type:Object,required:!1},cameraFixAfterFollow:{type:Boolean,required:!1,default:void 0},voiceOverPlacement:{type:String,required:!1},voiceOverAutoPlacement:{type:Boolean,required:!1,default:void 0},voiceOverAlign:{type:String,required:!1},voiceOverWidth:{type:Number,required:!1},voiceOverTitle:{type:String,required:!1},voiceOverContent:{type:String,required:!1},voiceOverPrevButtonText:{type:String,required:!1},voiceOverNextButtonText:{type:String,required:!1},voiceOverDoneButtonText:{type:String,required:!1},onBeforeCut:{type:Function,required:!1},onAfterCut:{type:Function,required:!1},onActivated:{type:Function,required:!1},onDeactivated:{type:Function,required:!1}},setup(e,{slots:t}){const{fixed:n,reset:o}=Ae(),{enterTransition:i}=ct(250),a=be(Ze,{}),r=be(Ge),c=R({}),l=_(()=>({...Ke,...a,...r,...c.value,actName:e.actName,scene:e.scene,skip:e.skip,tag:e.tag}));function s(b={}){const A={...b};for(const ee in A)A[ee]===void 0&&delete A[ee];c.value=A}j(()=>e,async()=>{const{actName:b,scene:A,skip:ee,tag:we,...fe}=e;s(fe)},{deep:!0,immediate:!0});const{isLocate:f,currentActName:d,currentActSceneList:g,currentScene:u,currentSceneOrder:v,currentActor:m,hasPrevScene:h,hasNextScene:p,totalSceneCount:y,action:w,cut:C,addScene:O,removeScene:L,prevScene:x,nextScene:$,jumpToScene:K}=at(),E=_(()=>d.value===l.value.actName&&u.value===l.value.scene);function ue(b,A){w(b||l.value.actName,A)}async function B(){await l.value.onBeforeCut(T),C(),await l.value.onAfterCut(T)}const T=Ye({actName:l.value.actName,scene:l.value.scene,currentActName:d,currentActSceneList:g,currentScene:u,currentSceneOrder:v,currentActor:m,hasPrevScene:h,hasNextScene:p,totalSceneCount:y,isCurrentScene:E,action:ue,cut:B,prevScene:x,nextScene:$,jumpToScene:K}),D=R(null),z=R(null),J=_(()=>t.default===void 0?"top-center":`${l.value.voiceOverPlacement}-${l.value.voiceOverAlign}`),{floatingStyles:U}=gn(D,z,{placement:J.value,whileElementsMounted:vn,middleware:l.value.voiceOverAutoPlacement?[Ut(),Jt()]:[]});j(()=>({actName:l.value.actName,scene:l.value.scene,skip:l.value.skip}),(b,A)=>{JSON.stringify(b)!==JSON.stringify(A)&&(A!=null&&A.actName&&(A!=null&&A.scene)&&L(A.actName,A.scene),b!=null&&b.actName&&(b!=null&&b.scene)&&!(b!=null&&b.skip)&&O(b.actName,b.scene,D))},{deep:!0,immediate:!0}),j(E,async b=>{b?await l.value.onActivated(T):await l.value.onDeactivated(T)}),j(f,async b=>{o(),!b&&E.value&&l.value.cameraFollow&&D.value&&(await kt(D.value,l.value.cameraFollowOptions),l.value.cameraFixAfterFollow&&n())}),Rt(()=>{E.value&&B(),L(l.value.actName,l.value.scene)});const re=R(!1),bt=R(!1),St=R(!1),Ot=R(!1);return()=>{var b;return S(l.value.tag,{class:"vue-stage-play__scene",style:{position:t.default?E.value?"relative":void 0:"fixed",top:t.default?void 0:"50%",left:t.default?void 0:"50%",zIndex:t.default?E.value?"99998":void 0:"99998",transform:t.default?void 0:"translate(-50%, -50%)"}},[(b=t.default)==null?void 0:b.call(t,T),S("div",{id:`vue-stage-play__spotlight-${l.value.actName}-${l.value.scene}`,class:"vue-stage-play__spotlight",ref:D,style:{position:"absolute",scrollMargin:`${l.value.cameraFollowOffset}px`,top:t.default?`-${l.value.spotlightPadding||0}px`:"-1px",bottom:t.default?`-${l.value.spotlightPadding||0}px`:"-1px",left:t.default?`-${l.value.spotlightPadding||0}px`:"-1px",right:t.default?`-${l.value.spotlightPadding||0}px`:"-1px",pointerEvents:E.value&&!l.value.allowInteract?void 0:"none"}},[S(Ue,{css:!1,onEnter:i},()=>{var A,ee,we,fe,Fe,$e;return[E.value&&!f.value?S("div",{class:"vue-stage-play__voice-over",style:{zIndex:"99996",color:"#292929",pointerEvents:"auto",...U.value,transform:t.default===void 0?"translate(-50%, -50%)":U.value.transform},ref:z},[((A=t.voiceOver)==null?void 0:A.call(t,T))||S("div",{class:"default__voice-over",style:{width:`${l.value.voiceOverWidth}px`,margin:"8px",borderRadius:"8px",boxShadow:"0 0 8px rgba(0, 0, 0, 0.2)",backgroundColor:"#fff"}},[S("div",{class:"default__voice-over__header",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderBottom:"1px solid #ddd",fontSize:"16px",fontWeight:"bold",lineHeight:"1"}},[((ee=t.voHeader)==null?void 0:ee.call(t,T))||S("div",{class:"default__voice-over__header__content",style:{flexGrow:"1",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"1.5"}},l.value.voiceOverTitle),((we=t.voCloseIcon)==null?void 0:we.call(t,T))||S("svg",{class:"default__voice-over__header__close",style:{position:"relative",flexShrink:"0",right:"-4px",display:"block",width:"24px",height:"24px",color:re.value?"#292929":"#7e7e7e",cursor:"pointer",transition:"all 0.2s ease-in-out"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",onMouseenter:()=>{re.value=!0},onMouseleave:()=>{re.value=!1},onClick:()=>B()},[S("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})])]),S("div",{class:"default__voice-over__body",style:{position:"relative",boxSizing:"border-box",minHeight:"60px",padding:"12px",fontSize:"14px",lineHeight:"1.5",textAlign:"center",whiteSpace:"pre-wrap"}},[((fe=t.voBody)==null?void 0:fe.call(t,T))||l.value.voiceOverContent]),S("div",{class:"default__voice-over__footer",style:{position:"relative",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",borderTop:"1px solid #ddd"}},[((Fe=t.voFooter)==null?void 0:Fe.call(t,T))||S("div",{class:"default__voice-over__footer__scene",style:{fontSize:"14px",color:"#7e7e7e"}},`${v.value+1} / ${y.value}`),(($e=t.voFooterButton)==null?void 0:$e.call(t,T))||S("div",{class:"default__voice-over__footer__btns",style:{display:"flex",gap:"8px"}},[h.value&&S("button",{class:"default__voice-over__footer__btn",style:{padding:"6px 16px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",fontWeight:"normal",lineHeight:"16px",color:"#292929",backgroundColor:bt.value?"#ddd":"#f1f1f1",transition:"all 0.2s ease-in-out",cursor:"pointer"},onClick:()=>x()},l.value.voiceOverPrevButtonText),p.value&&S("button",{class:"default__voice-over__footer__btn",style:{padding:"6px 16px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",fontWeight:"normal",lineHeight:"16px",color:"#292929",backgroundColor:St.value?"#ddd":"#f1f1f1",transition:"all 0.2s ease-in-out",cursor:"pointer"},onClick:()=>$()},l.value.voiceOverNextButtonText),!p.value&&S("button",{class:"default__voice-over__footer__btn",style:{padding:"6px 16px",border:"1px solid #ddd",borderRadius:"4px",fontSize:"14px",fontWeight:"normal",lineHeight:"16px",color:"#292929",backgroundColor:Ot.value?"#ddd":"#f1f1f1",transition:"all 0.2s ease-in-out",cursor:"pointer"},onClick:()=>B()},l.value.voiceOverDoneButtonText)])])])]):void 0]})]),E.value&&f.value?S(Se,{to:"body"},[S("div",{class:"vue-stage-play__scroll-mask",style:{position:"fixed",top:"0",left:"0",width:"150vw",height:"100vh",zIndex:"99999",overflow:"auto",overscrollBehavior:"none"}},[S("div",{style:{width:"100%",height:"300%"}})])]):void 0,E.value?S(Se,{to:"body"},[S("div",{class:"vue-stage-play__click-mask",style:{position:"fixed",top:0,left:0,zIndex:99997,width:"100vw",height:"100vh"},onClick:()=>{l.value.allowLeave&&B()}})]):void 0])}}}),xn=Je({name:"StagePlaySpotlight",props:{spotlightPadding:{type:Number,required:!1},spotlightBorderRadius:{type:Number,required:!1},spotlightDarkZoneColor:{type:String,required:!1}},setup(e,{slots:t}){const{isLocate:n,currentActor:o}=at(),{enterTransition:i,leaveTransition:a}=ct(600),{isFixed:r}=Ae(),c=be(Ze,{}),l=R({}),s=_(()=>({...Ke,...c,...l.value}));function f(h={}){l.value=JSON.parse(JSON.stringify(h))}j(()=>e,()=>{f(e)},{deep:!0,immediate:!0}),Pt(Ge,{spotlightPadding:s.value.spotlightPadding});const{top:d,left:g,width:u,height:v}=Tt(o);j(o,()=>{n.value=!0});const m=_(()=>({position:"absolute",zIndex:99995,top:r.value?`calc(-1 * ${document.body.style.top} + ${d.value}px)`:`calc(${window.scrollY}px + ${d.value}px)`,left:r.value?`calc(-1 * ${document.body.style.left} + ${g.value}px)`:`calc(${window.scrollX}px + ${g.value}px)`,width:u.value?u.value+"px":"100%",height:v.value?v.value+"px":"100%",borderRadius:`${s.value.spotlightBorderRadius}px ${s.value.spotlightBorderRadius}px ${s.value.spotlightBorderRadius}px ${s.value.spotlightBorderRadius-.001}px`,boxShadow:`${s.value.spotlightDarkZoneColor} 0px 0px 0px 3000px`,transition:n.value?"all 0.35s ease":void 0,pointerEvents:"none"}));return()=>{var h;return[(h=t.default)==null?void 0:h.call(t),S(Se,{to:"body"},S(Ue,{css:!1,onEnter:i,onLeave:a},()=>[o!=null&&o.value?S("div",{class:"vue-stage-play__spotlight-bulb",style:m.value,onTransitionend:()=>{n.value=!1}}):null]))]}}});export{yn as S,xn as a,hn as u};
