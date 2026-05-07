var co=Object.defineProperty;var to=(n)=>n;function oo(n,r){this[n]=to.bind(null,r)}var E=(n,r)=>{for(var i in r)co(n,i,{get:r[i],enumerable:!0,configurable:!0,set:oo.bind(r,i)})};var X=(n,r)=>()=>(n&&(r=n(n=0)),r);var ko={};E(ko,{useState:()=>p,useRef:()=>V,useReducer:()=>fc,useMemo:()=>C,useLayoutEffect:()=>hr,useImperativeHandle:()=>$o,useErrorBoundary:()=>yo,useEffect:()=>j,useDebugValue:()=>wo,useContext:()=>ho,useCallback:()=>W,render:()=>Mn,html:()=>e,h:()=>Dr,createContext:()=>po,Component:()=>an});function ln(n,r){for(var i in r)n[i]=r[i];return n}function qr(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function Dr(n,r,i){var c,t,o,s={};for(o in r)o=="key"?c=r[o]:o=="ref"?t=r[o]:s[o]=r[o];if(arguments.length>2&&(s.children=arguments.length>3?gr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)s[o]===void 0&&(s[o]=n.defaultProps[o]);return er(n,s,c,t,null)}function er(n,r,i,c,t){var o={type:n,props:r,key:i,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:t==null?++mi:t,__i:-1,__u:0};return t==null&&D.vnode!=null&&D.vnode(o),o}function $r(n){return n.children}function an(n,r){this.props=n,this.context=r}function Wn(n,r){if(r==null)return n.__?Wn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Wn(n):null}function uo(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,c=[],t=[],o=ln({},r);o.__v=r.__v+1,D.vnode&&D.vnode(o),ar(n.__P,o,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,c,i==null?Wn(r):i,!!(32&r.__u),t),o.__v=r.__v,o.__.__k[o.__i]=o,ec(c,o,t),r.__e=r.__=null,o.__e!=i&&tc(o)}}function tc(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),tc(n)}function Cr(n){(!n.__d&&(n.__d=!0)&&$n.push(n)&&!fr.__r++||Xi!=D.debounceRendering)&&((Xi=D.debounceRendering)||nc)(fr)}function fr(){try{for(var n,r=1;$n.length;)$n.length>r&&$n.sort(rc),n=$n.shift(),r=$n.length,uo(n)}finally{$n.length=fr.__r=0}}function oc(n,r,i,c,t,o,s,u,_,f,d){var l,w,$,v,N,y,b,M=c&&c.__k||_r,H=r.length;for(_=lo(i,r,M,_,H),l=0;l<H;l++)($=i.__k[l])!=null&&(w=$.__i!=-1&&M[$.__i]||lr,$.__i=l,y=ar(n,$,w,t,o,s,u,_,f,d),v=$.__e,$.ref&&w.ref!=$.ref&&(w.ref&&Zr(w.ref,null,$),d.push($.ref,$.__c||v,$)),N==null&&v!=null&&(N=v),(b=!!(4&$.__u))||w.__k===$.__k?(_=sc($,_,n,b),b&&w.__e&&(w.__e=null)):typeof $.type=="function"&&y!==void 0?_=y:v&&(_=v.nextSibling),$.__u&=-7);return i.__e=N,_}function lo(n,r,i,c,t){var o,s,u,_,f,d=i.length,l=d,w=0;for(n.__k=Array(t),o=0;o<t;o++)(s=r[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=n.__k[o]=er(null,s,null,null,null):pr(s)?s=n.__k[o]=er($r,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=n.__k[o]=er(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):n.__k[o]=s,_=o+w,s.__=n,s.__b=n.__b+1,u=null,(f=s.__i=_o(s,i,_,l))!=-1&&(l--,(u=i[f])&&(u.__u|=2)),u==null||u.__v==null?(f==-1&&(t>d?w--:t<d&&w++),typeof s.type!="function"&&(s.__u|=4)):f!=_&&(f==_-1?w--:f==_+1?w++:(f>_?w--:w++,s.__u|=4))):n.__k[o]=null;if(l)for(o=0;o<d;o++)(u=i[o])!=null&&(2&u.__u)==0&&(u.__e==c&&(c=Wn(u)),lc(u,u));return c}function sc(n,r,i,c){var t,o;if(typeof n.type=="function"){for(t=n.__k,o=0;t&&o<t.length;o++)t[o]&&(t[o].__=n,r=sc(t[o],r,i,c));return r}n.__e!=r&&(c&&(r&&n.type&&!r.parentNode&&(r=Wn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function _o(n,r,i,c){var t,o,s,u=n.key,_=n.type,f=r[i],d=f!=null&&(2&f.__u)==0;if(f===null&&u==null||d&&u==f.key&&_==f.type)return i;if(c>(d?1:0)){for(t=i-1,o=i+1;t>=0||o<r.length;)if((f=r[s=t>=0?t--:o++])!=null&&(2&f.__u)==0&&u==f.key&&_==f.type)return s}return-1}function Qi(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||eo.test(r)?i:i+"px"}function or(n,r,i,c,t){var o,s;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof c=="string"&&(n.style.cssText=c=""),c)for(r in c)i&&r in i||Qi(n.style,r,"");if(i)for(r in i)c&&i[r]==c[r]||Qi(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")o=r!=(r=r.replace(ic,"$1")),s=r.toLowerCase(),r=s in n||r=="onFocusOut"||r=="onFocusIn"?s.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+o]=i,i?c?i[Dn]=c[Dn]:(i[Dn]=Ir,n.addEventListener(r,o?Vr:Ar,o)):n.removeEventListener(r,o?Vr:Ar,o);else{if(t=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(u){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function Ii(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[sr]==null)r[sr]=Ir++;else if(r[sr]<i[Dn])return;return i(D.event?D.event(r):r)}}}function ar(n,r,i,c,t,o,s,u,_,f){var d,l,w,$,v,N,y,b,M,H,k,K,h,T,U,g=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(_=!!(32&i.__u),o=[u=r.__e=i.__e]),(d=D.__b)&&d(r);n:if(typeof g=="function")try{if(b=r.props,M=g.prototype&&g.prototype.render,H=(d=g.contextType)&&c[d.__c],k=d?H?H.props.value:d.__:c,i.__c?y=(l=r.__c=i.__c).__=l.__E:(M?r.__c=l=new g(b,k):(r.__c=l=new an(b,k),l.constructor=g,l.render=go),H&&H.sub(l),l.state||(l.state={}),l.__n=c,w=l.__d=!0,l.__h=[],l._sb=[]),M&&l.__s==null&&(l.__s=l.state),M&&g.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=ln({},l.__s)),ln(l.__s,g.getDerivedStateFromProps(b,l.__s))),$=l.props,v=l.state,l.__v=r,w)M&&g.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),M&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(M&&g.getDerivedStateFromProps==null&&b!==$&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,k),r.__v==i.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,k)===!1){r.__v!=i.__v&&(l.props=b,l.state=l.__s,l.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(z){z&&(z.__=r)}),_r.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&s.push(l);break n}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,k),M&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate($,v,N)})}if(l.context=k,l.props=b,l.__P=n,l.__e=!1,K=D.__r,h=0,M)l.state=l.__s,l.__d=!1,K&&K(r),d=l.render(l.props,l.state,l.context),_r.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,K&&K(r),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++h<25);l.state=l.__s,l.getChildContext!=null&&(c=ln(ln({},c),l.getChildContext())),M&&!w&&l.getSnapshotBeforeUpdate!=null&&(N=l.getSnapshotBeforeUpdate($,v)),T=d!=null&&d.type===$r&&d.key==null?uc(d.props.children):d,u=oc(n,pr(T)?T:[T],r,i,c,t,o,s,u,_,f),l.base=r.__e,r.__u&=-161,l.__h.length&&s.push(l),y&&(l.__E=l.__=null)}catch(z){if(r.__v=null,_||o!=null)if(z.then){for(r.__u|=_?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;o[o.indexOf(u)]=null,r.__e=u}else{for(U=o.length;U--;)qr(o[U]);Xr(r)}else r.__e=i.__e,r.__k=i.__k,z.then||Xr(r);D.__e(z,r,i)}else o==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):u=r.__e=fo(i.__e,r,i,c,t,o,s,_,f);return(d=D.diffed)&&d(r),128&r.__u?void 0:u}function Xr(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Xr))}function ec(n,r,i){for(var c=0;c<i.length;c++)Zr(i[c],i[++c],i[++c]);D.__c&&D.__c(r,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(o){o.call(t)})}catch(o){D.__e(o,t.__v)}})}function uc(n){return typeof n!="object"||n==null||n.__b>0?n:pr(n)?n.map(uc):ln({},n)}function fo(n,r,i,c,t,o,s,u,_){var f,d,l,w,$,v,N,y=i.props||lr,b=r.props,M=r.type;if(M=="svg"?t="http://www.w3.org/2000/svg":M=="math"?t="http://www.w3.org/1998/Math/MathML":t||(t="http://www.w3.org/1999/xhtml"),o!=null){for(f=0;f<o.length;f++)if(($=o[f])&&"setAttribute"in $==!!M&&(M?$.localName==M:$.nodeType==3)){n=$,o[f]=null;break}}if(n==null){if(M==null)return document.createTextNode(b);n=document.createElementNS(t,M,b.is&&b),u&&(D.__m&&D.__m(r,o),u=!1),o=null}if(M==null)y===b||u&&n.data==b||(n.data=b);else{if(o=o&&gr.call(n.childNodes),!u&&o!=null)for(y={},f=0;f<n.attributes.length;f++)y[($=n.attributes[f]).name]=$.value;for(f in y)$=y[f],f=="dangerouslySetInnerHTML"?l=$:f=="children"||(f in b)||f=="value"&&("defaultValue"in b)||f=="checked"&&("defaultChecked"in b)||or(n,f,null,$,t);for(f in b)$=b[f],f=="children"?w=$:f=="dangerouslySetInnerHTML"?d=$:f=="value"?v=$:f=="checked"?N=$:u&&typeof $!="function"||y[f]===$||or(n,f,$,y[f],t);if(d)u||l&&(d.__html==l.__html||d.__html==n.innerHTML)||(n.innerHTML=d.__html),r.__k=[];else if(l&&(n.innerHTML=""),oc(r.type=="template"?n.content:n,pr(w)?w:[w],r,i,c,M=="foreignObject"?"http://www.w3.org/1999/xhtml":t,o,s,o?o[0]:i.__k&&Wn(i,0),u,_),o!=null)for(f=o.length;f--;)qr(o[f]);u||(f="value",M=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[f]||M=="progress"&&!v||M=="option"&&v!=y[f])&&or(n,f,v,y[f],t),f="checked",N!=null&&N!=n[f]&&or(n,f,N,y[f],t))}return n}function Zr(n,r,i){try{if(typeof n=="function"){var c=typeof n.__u=="function";c&&n.__u(),c&&r==null||(n.__u=n(r))}else n.current=r}catch(t){D.__e(t,i)}}function lc(n,r,i){var c,t;if(D.unmount&&D.unmount(n),(c=n.ref)&&(c.current&&c.current!=n.__e||Zr(c,null,r)),(c=n.__c)!=null){if(c.componentWillUnmount)try{c.componentWillUnmount()}catch(o){D.__e(o,r)}c.base=c.__P=null}if(c=n.__k)for(t=0;t<c.length;t++)c[t]&&lc(c[t],r,i||typeof n.type!="function");i||qr(n.__e),n.__c=n.__=n.__e=void 0}function go(n,r,i){return this.constructor(n,i)}function Mn(n,r,i){var c,t,o,s;r==document&&(r=document.documentElement),D.__&&D.__(n,r),t=(c=typeof i=="function")?null:i&&i.__k||r.__k,o=[],s=[],ar(r,n=(!c&&i||r).__k=Dr($r,null,[n]),t||lr,lr,r.namespaceURI,!c&&i?[i]:t?null:r.firstChild?gr.call(r.childNodes):null,o,!c&&i?i:t?t.__e:r.firstChild,c,s),ec(o,n,s)}function po(n){function r(i){var c,t;return this.getChildContext||(c=new Set,(t={})[r.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){c=null},this.shouldComponentUpdate=function(o){this.props.value!=o.value&&c.forEach(function(s){s.__e=!0,Cr(s)})},this.sub=function(o){c.add(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){c&&c.delete(o),s&&s.call(o)}}),i.children}return r.__c="__cC"+cc++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,c){return i.children(c)}).contextType=r,r}function Hn(n,r){a.__h&&a.__h(q,n,Nn||r),Nn=0;var i=q.__H||(q.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function p(n){return Nn=1,fc(gc,n)}function fc(n,r,i){var c=Hn(hn++,2);if(c.t=n,!c.__c&&(c.__=[i?i(r):gc(void 0,r),function(u){var _=c.__N?c.__N[0]:c.__[0],f=c.t(_,u);_!==f&&(c.__N=[f,c.__[1]],c.__c.setState({}))}],c.__c=q,!q.__f)){var t=function(u,_,f){if(!c.__c.__H)return!0;var d=c.__c.__H.__.filter(function(w){return w.__c});if(d.every(function(w){return!w.__N}))return!o||o.call(this,u,_,f);var l=c.__c.props!==u;return d.some(function(w){if(w.__N){var $=w.__[0];w.__=w.__N,w.__N=void 0,$!==w.__[0]&&(l=!0)}}),o&&o.call(this,u,_,f)||l};q.__f=!0;var{shouldComponentUpdate:o,componentWillUpdate:s}=q;q.componentWillUpdate=function(u,_,f){if(this.__e){var d=o;o=void 0,t(u,_,f),o=d}s&&s.call(this,u,_,f)},q.shouldComponentUpdate=t}return c.__N||c.__}function j(n,r){var i=Hn(hn++,3);!a.__s&&Yr(i.__H,r)&&(i.__=n,i.u=r,q.__H.__h.push(i))}function hr(n,r){var i=Hn(hn++,4);!a.__s&&Yr(i.__H,r)&&(i.__=n,i.u=r,q.__h.push(i))}function V(n){return Nn=5,C(function(){return{current:n}},[])}function $o(n,r,i){Nn=6,hr(function(){if(typeof n=="function"){var c=n(r());return function(){n(null),c&&typeof c=="function"&&c()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function C(n,r){var i=Hn(hn++,7);return Yr(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function W(n,r){return Nn=8,C(function(){return n},r)}function ho(n){var r=q.context[n.__c],i=Hn(hn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(q)),r.props.value):n.__}function wo(n,r){a.useDebugValue&&a.useDebugValue(r?r(n):n)}function yo(n){var r=Hn(hn++,10),i=p();return r.__=n,q.componentDidCatch||(q.componentDidCatch=function(c,t){r.__&&r.__(c,t),i[1](c)}),[i[0],function(){i[1](void 0)}]}function xo(){for(var n;n=_c.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(ur),r.__h.some(Qr),r.__h=[]}catch(i){r.__h=[],a.__e(i,n.__v)}}}function vo(n){var r,i=function(){clearTimeout(c),Ei&&cancelAnimationFrame(r),setTimeout(n)},c=setTimeout(i,35);Ei&&(r=requestAnimationFrame(i))}function ur(n){var r=q,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),q=r}function Qr(n){var r=q;n.__c=n.__(),q=r}function Yr(n,r){return!n||n.length!==r.length||r.some(function(i,c){return i!==n[c]})}function gc(n,r){return typeof r=="function"?r(n):r}function bo(n){var r=Si.get(this);return r||(r=new Map,Si.set(this,r)),(r=pc(this,r.get(n)||(r.set(n,r=function(i){for(var c,t,o=1,s="",u="",_=[0],f=function(w){o===1&&(w||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,w,s):o===3&&(w||s)?(_.push(3,w,s),o=2):o===2&&s==="..."&&w?_.push(4,w,0):o===2&&s&&!w?_.push(5,0,!0,s):o>=5&&((s||!w&&o===5)&&(_.push(o,0,s,t),o=6),w&&(_.push(o,w,0,t),o=6)),s=""},d=0;d<i.length;d++){d&&(o===1&&f(),f(d));for(var l=0;l<i[d].length;l++)c=i[d][l],o===1?c==="<"?(f(),_=[_],o=3):s+=c:o===4?s==="--"&&c===">"?(o=1,s=""):s=c+s[0]:u?c===u?u="":s+=c:c==='"'||c==="'"?u=c:c===">"?(f(),o=1):o&&(c==="="?(o=5,t=s,s=""):c==="/"&&(o<5||i[d][l+1]===">")?(f(),o===3&&(_=_[0]),o=_,(_=_[0]).push(2,0,o),o=0):c===" "||c==="\t"||c===`
`||c==="\r"?(f(),o=2):s+=c),o===3&&s==="!--"&&(o=4,_=_[0])}return f(),_}(n)),r),arguments,[])).length>1?r:r[0]}var gr,D,mi,so,$n,Xi,nc,rc,Ur,sr,Dn,ic,Ir,Ar,Vr,cc,lr,_r,eo,pr,hn,q,Gr,qi,Nn=0,_c,a,Di,ai,Zi,Yi,Oi,Ji,Ei,pc=function(n,r,i,c){var t;r[0]=0;for(var o=1;o<r.length;o++){var s=r[o++],u=r[o]?(r[0]|=s?1:2,i[r[o++]]):r[++o];s===3?c[0]=u:s===4?c[1]=Object.assign(c[1]||{},u):s===5?(c[1]=c[1]||{})[r[++o]]=u:s===6?c[1][r[++o]]+=u+"":s?(t=n.apply(u,pc(n,u,i,["",null])),c.push(t),u[0]?r[0]|=2:(r[o-2]=0,r[o]=t)):c.push(u)}return c},Si,e;var Z=X(()=>{lr={},_r=[],eo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pr=Array.isArray;gr=_r.slice,D={__e:function(n,r,i,c){for(var t,o,s;r=r.__;)if((t=r.__c)&&!t.__)try{if((o=t.constructor)&&o.getDerivedStateFromError!=null&&(t.setState(o.getDerivedStateFromError(n)),s=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(n,c||{}),s=t.__d),s)return t.__E=t}catch(u){n=u}throw n}},mi=0,so=function(n){return n!=null&&n.constructor===void 0},an.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=ln({},this.state),typeof n=="function"&&(n=n(ln({},i),this.props)),n&&ln(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),Cr(this))},an.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Cr(this))},an.prototype.render=$r,$n=[],nc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rc=function(n,r){return n.__v.__b-r.__v.__b},fr.__r=0,Ur=Math.random().toString(8),sr="__d"+Ur,Dn="__a"+Ur,ic=/(PointerCapture)$|Capture$/i,Ir=0,Ar=Ii(!1),Vr=Ii(!0),cc=0;_c=[],a=D,Di=a.__b,ai=a.__r,Zi=a.diffed,Yi=a.__c,Oi=a.unmount,Ji=a.__;a.__b=function(n){q=null,Di&&Di(n)},a.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),Ji&&Ji(n,r)},a.__r=function(n){ai&&ai(n),hn=0;var r=(q=n.__c).__H;r&&(Gr===q?(r.__h=[],q.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(ur),r.__h.some(Qr),r.__h=[],hn=0)),Gr=q},a.diffed=function(n){Zi&&Zi(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(_c.push(r)!==1&&qi===a.requestAnimationFrame||((qi=a.requestAnimationFrame)||vo)(xo)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),Gr=q=null},a.__c=function(n,r){r.some(function(i){try{i.__h.some(ur),i.__h=i.__h.filter(function(c){return!c.__||Qr(c)})}catch(c){r.some(function(t){t.__h&&(t.__h=[])}),r=[],a.__e(c,i.__v)}}),Yi&&Yi(n,r)},a.unmount=function(n){Oi&&Oi(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(c){try{ur(c)}catch(t){r=t}}),i.__H=void 0,r&&a.__e(r,i.__v))};Ei=typeof requestAnimationFrame=="function";Si=new Map;e=bo.bind(Dr)});function $c({children:n,className:r=""}){let[i,c]=p(null);return j(()=>{if(typeof document>"u")return;let t=document.createElement("div");return document.body.appendChild(t),c(t),()=>{try{Mn(null,t)}finally{t.remove()}}},[]),j(()=>{if(!i)return;i.className=r||"";return},[r,i]),hr(()=>{if(!i)return;Mn(n,i);return},[n,i]),null}var hc=X(()=>{Z()});function Or(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function wn(n){let r=vn.findIndex((i)=>i.id===n.id);if(r>=0)vn[r]=n;else vn.push(n);vn.sort(Or)}function Xu(n){let r=vn.findIndex((i)=>i.id===n);if(r>=0)vn.splice(r,1)}function wc(){return[...vn]}function Qu(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var vn;var Pn=X(()=>{vn=[]});function wr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function yc(n={}){if(typeof window>"u")return;let r=wr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function Jr(){if(typeof window>"u")return null;return wr(window.__piclawSettingsRequestedSection)}function dc(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=Jr();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function vc(n=typeof window<"u"?window:null){return n||null}function yr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Jn(n,r){return`${n}:${r}`}function bc(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function kc(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function bn(n){if(!n||typeof n!=="object")return null;return{...n}}function Tn(n){if(!n)return null;return kn.find((r)=>r.id===n)||null}function Er(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function Bc(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=Tn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function xc(n,r,i){let c=Bn.get(Jn(n,r));if(c&&Tn(c)?.status==="active")On(c,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let t=bc(n),o={id:t,type:n,chatJid:r,startedAt:yr(),detail:bn(i),phases:[],status:"active"};return kn.push(o),kc(kn,100),Bn.set(Jn(n,r),t),Er(t,"start"),t}function On(n,r,i,c,t){let o=Tn(n);if(!o||o.status!=="active")return;if(i)o.phases.push({phase:i,at:yr(),detail:bn(c)}),Er(o.id,i);if(o.status=r,o.completedAt=yr(),o.durationMs=o.completedAt-o.startedAt,t!==void 0)o.error=t instanceof Error?t.message:String(t);let s=Jn(o.type,o.chatJid);if(Bn.get(s)===o.id)Bn.delete(s);Bc(o.id)}function Bo(n=vc()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=dr;return dr}function jn(n=vc()){return Bo(n)}function Du(n,r,i){return jn().ensureTrace(n,r,i)}function au(n,r){return jn().getActiveTraceId(n,r)}function Zu(n,r,i){jn().markTrace(n,r,i)}function Yu(n,r,i="settled",c){let t=Tn(n);if(!t||t.status!=="active")return!1;let o=new Set(t.phases.map((s)=>s.phase));if(!r.every((s)=>o.has(s)))return!1;return On(n,"completed",i,c),!0}function Ou(n,r,i="failed",c){jn().failTrace(n,r,i,c)}function Ju(n,r="cancelled",i){jn().cancelTrace(n,r,i)}function Sr(n){return jn().recordRequest(n)}var kn,Yn,Bn,dr;var Tc=X(()=>{kn=[],Yn=[],Bn=new Map;dr={startTrace(n,r,i){return xc(n,r,i)},ensureTrace(n,r,i){let c=Bn.get(Jn(n,r));if(c&&Tn(c)?.status==="active")return c;return xc(n,r,i)},getActiveTraceId(n,r){let i=Bn.get(Jn(n,r));return i&&Tn(i)?.status==="active"?i:null},markTrace(n,r,i){let c=Tn(n);if(!c||c.status!=="active")return;c.phases.push({phase:r,at:yr(),detail:bn(i)}),Er(c.id,r)},completeTrace(n,r="settled",i){On(n,"completed",r,i)},failTrace(n,r,i="failed",c){On(n,"failed",i,c,r)},cancelTrace(n,r="cancelled",i){On(n,"cancelled",r,i)},recordRequest(n){let r=bc("req");return Yn.push({...n,id:r,detail:bn(n.detail)}),kc(Yn,300),r},getTraces(){return kn.map((n)=>({...n,detail:bn(n.detail),phases:n.phases.map((r)=>({...r,detail:bn(r.detail)}))}))},getRequests(){return Yn.map((n)=>({...n,detail:bn(n.detail)}))},clear(){kn.forEach((n)=>Bc(n.id)),kn.splice(0,kn.length),Yn.splice(0,Yn.length),Bn.clear()},printSummary(){let n={traces:dr.getTraces(),requests:dr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function Ln(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function To(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function Fo(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function Fc(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function Kc(n=typeof window<"u"?window:null){let r=Ln(n?.innerWidth)??Ln(n?.screen?.availWidth)??Ln(n?.screen?.width)??0,i=Ln(n?.innerHeight)??Ln(n?.screen?.availHeight)??Ln(n?.screen?.height)??0,c=r&&i?Math.min(r,i):r||i,t=r&&i?Math.max(r,i):r||i,o=To(n),s=Number(n?.navigator?.maxTouchPoints||0),u=o||s>1;if(c>0&&c<=640)return"mobile";if(Fo(n)&&!Fc(n))return"mobile";if(Fc(n))return"tablet";if(u&&c>0&&c<=1100)return"tablet";if(t>0&&t<=1180&&c>0&&c<=900)return"tablet";return"desktop"}var Vs={};E(Vs,{uploadWorkspaceFile:()=>Ms,uploadMedia:()=>ss,updateWorkspaceFile:()=>Ts,updateScheduledTask:()=>ri,submitAdaptiveCardAction:()=>us,streamSidePrompt:()=>ls,stopAutoresearch:()=>mo,steerAgentQueueItem:()=>cs,setWorkspaceVisibility:()=>Us,setAgentThoughtVisibility:()=>gs,sendPeerAgentMessage:()=>Do,sendAgentMessage:()=>_n,searchPosts:()=>Wo,saveWorkspaceSettings:()=>si,saveWebPushSubscription:()=>Zo,saveUiState:()=>ii,saveQuickActionsSettings:()=>oi,saveEnvironmentOverride:()=>xr,restoreChatBranch:()=>qo,respondToAgentRequest:()=>es,reorderAgentQueueItem:()=>ts,renameWorkspaceFile:()=>Ps,renameChatJid:()=>Io,renameChatBranch:()=>Vo,removeAgentQueueItem:()=>is,reindexWorkspace:()=>bs,purgeChatBranch:()=>Qo,pruneChatBranch:()=>Xo,moveWorkspaceEntry:()=>js,mergeChatBranchIntoParent:()=>Co,getWorkspaceTree:()=>ds,getWorkspaceRawUrl:()=>Rc,getWorkspaceIndexStatus:()=>vs,getWorkspaceFileStat:()=>Bs,getWorkspaceFileDownloadUrl:()=>Gs,getWorkspaceFile:()=>ks,getWorkspaceDownloadUrl:()=>As,getWorkspaceBranch:()=>xs,getWebPushPublicKey:()=>ao,getTimeline:()=>zo,getThumbnailUrl:()=>$s,getThread:()=>No,getSystemMetrics:()=>Mo,getScheduledTasks:()=>ni,getQuickActionsSettings:()=>ti,getPostsByHashtag:()=>Ro,getMediaUrl:()=>ps,getMediaText:()=>ws,getMediaInfo:()=>hs,getMediaBlob:()=>ys,getEnvironmentSettings:()=>ei,getChatBranches:()=>Uo,getAutoresearchStatus:()=>So,getAgents:()=>Oo,getAgentThought:()=>fs,getAgentStatus:()=>Jo,getAgentQueueState:()=>rs,getAgentModels:()=>ui,getAgentContext:()=>Eo,getAgentCommands:()=>ci,getActiveChatAgents:()=>Lo,forkChatBranch:()=>Go,dismissAutoresearch:()=>ns,deleteWorkspaceFile:()=>Ls,deleteWebPushSubscription:()=>Yo,deletePost:()=>jo,createWorkspaceFile:()=>Hs,createRootChatSession:()=>Ao,createReply:()=>Po,createPost:()=>Ho,completeInstanceOobe:()=>os,attachWorkspaceFile:()=>Fs,addToWhitelist:()=>_s,SSEClient:()=>Wc});async function L(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),c;try{c=await fetch(O+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(o){throw Sr({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),o}let t=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(Sr({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:t,status:c.status,ok:c.ok,requestId:c.headers?.get?.("x-request-id")||null,serverTiming:c.headers?.get?.("Server-Timing")||null}),!c.ok){let o=await c.json().catch(()=>({error:"Unknown error"}));throw Error(o.error||`HTTP ${c.status}`)}return c.json()}function zc(n){let r=String(n||"").split(`
`),i="message",c=[];for(let o of r)if(o.startsWith("event:"))i=o.slice(6).trim()||"message";else if(o.startsWith("data:"))c.push(o.slice(5).trim());let t=c.join(`
`);if(!t)return null;try{return{event:i,data:JSON.parse(t)}}catch{return{event:i,data:t}}}async function Ko(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),c=new TextDecoder,t="";while(!0){let{value:s,done:u}=await i.read();if(u)break;t+=c.decode(s,{stream:!0});let _=t.split(`

`);t=_.pop()||"";for(let f of _){let d=zc(f);if(d)r(d.event,d.data)}}t+=c.decode();let o=zc(t);if(o)r(o.event,o.data)}async function zo(n=10,r=null,i=null){let c=`/timeline?limit=${n}`;if(r)c+=`&before=${r}`;if(i)c+=`&chat_jid=${encodeURIComponent(i)}`;return L(c)}async function Ro(n,r=50,i=0,c=null){let t=c?`&chat_jid=${encodeURIComponent(c)}`:"";return L(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${t}`)}async function Wo(n,r=50,i=0,c=null,t="current",o=null,s=null){let u=c?`&chat_jid=${encodeURIComponent(c)}`:"",_=t?`&scope=${encodeURIComponent(t)}`:"",f=o?`&root_chat_jid=${encodeURIComponent(o)}`:"",d=s?.images?"&images=1":"",l=s?.attachments?"&attachments=1":"";return L(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${u}${_}${f}${d}${l}`)}async function No(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return L(`/thread/${n}${i}`)}async function Mo(){return L("/agent/system-metrics")}async function ni(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return L(`/agent/scheduled-tasks${i}`)}async function ri(n,r,i={}){return L("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function ii(n){return L("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function Ho(n,r=[],i=null){let c=i?`?chat_jid=${encodeURIComponent(i)}`:"";return L(`/post${c}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function Po(n,r,i=[],c=null){let t=c?`?chat_jid=${encodeURIComponent(c)}`:"";return L(`/post/reply${t}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function jo(n,r=!1,i=null){let c=i?`&chat_jid=${encodeURIComponent(i)}`:"",t=`/post/${n}?cascade=${r?"true":"false"}${c}`;return L(t,{method:"DELETE"})}async function _n(n,r,i=null,c=[],t=null,o=null){let s=o?`?chat_jid=${encodeURIComponent(o)}`:"",u={content:r,thread_id:i,media_ids:c,client_context:{screen_hint:Kc()}};if(t==="auto"||t==="queue"||t==="steer")u.mode=t;return L(`/agent/${n}/message${s}`,{method:"POST",body:JSON.stringify(u)})}async function ci(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return L(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function ti(){return L("/agent/settings/quick-actions")}async function oi(n){return L("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function si(n){return L("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function ei(){return L("/agent/settings/environment")}async function xr(n){return L("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Lo(){return L("/agent/active-chats")}async function Uo(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let c=i.toString()?`?${i.toString()}`:"";return L(`/agent/branches${c}`)}async function Go(n,r={}){return L("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function Ao(n){return L("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Vo(n,r={}){return L("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Co(n){return L("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Xo(n){return L("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Qo(n){return L("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Io(n,r){return L("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function qo(n,r={}){return L("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function Do(n,r,i,c="auto",t={}){let o={source_chat_jid:n,content:i,mode:c,...t?.sourceAgentName?{source_agent_name:t.sourceAgentName}:{},...t?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return L("/agent/peer-message",{method:"POST",body:JSON.stringify(o)})}async function ao(){return L("/agent/push/vapid-public-key")}async function Zo(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return L("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function Yo(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return L("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function Oo(){return L("/agent/roster")}async function Jo(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/status${r}`)}async function Eo(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/context${r}`)}async function So(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/autoresearch/status${r}`)}async function mo(n=null,r={}){return L("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function ns(n=null){return L("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function rs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/queue-state${r}`)}async function is(n,r=null){let i=await fetch(O+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function cs(n,r=null){let i=await fetch(O+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function ts(n,r,i=null){let c=await fetch(O+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!c.ok){let t=await c.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(t.error||`HTTP ${c.status}`)}return c.json()}async function ui(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/models${r}`)}async function os(n="provider-ready"){return L("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function ss(n){let r=new FormData;r.append("file",n);let i=await fetch(O+"/media/upload",{method:"POST",body:r});if(!i.ok){let c=await i.json().catch(()=>({error:"Upload failed"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function es(n,r,i=null){let c=await fetch(O+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!c.ok){let t=await c.json().catch(()=>({error:"Failed to respond"}));throw Error(t.error||`HTTP ${c.status}`)}return c.json()}async function us(n){let r=await fetch(O+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function ls(n,r={}){let i=await fetch(O+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let o=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(o.error||`HTTP ${i.status}`)}let c=null,t=null;if(await Ko(i,(o,s)=>{if(r.onEvent?.(o,s),o==="side_prompt_thinking_delta")r.onThinkingDelta?.(s?.delta||"");else if(o==="side_prompt_text_delta")r.onTextDelta?.(s?.delta||"");else if(o==="side_prompt_done")c=s;else if(o==="side_prompt_error")t=s}),t){let o=Error(t?.error||"Side prompt failed");throw o.payload=t,o}return c}async function _s(n,r){let i=await fetch(O+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function fs(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return L(i)}async function gs(n,r,i){return L("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function ps(n){return`${O}/media/${n}`}function $s(n){return`${O}/media/${n}/thumbnail`}async function hs(n){let r=await fetch(`${O}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function ws(n){let r=await fetch(`${O}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function ys(n){let r=await fetch(`${O}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function ds(n="",r=2,i=!1){let c=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return L(c)}async function xs(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return L(r)}async function vs(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return L(r)}async function bs(n="all"){return L("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function ks(n,r=20000,i=null){let c=i?`&mode=${encodeURIComponent(i)}`:"",t=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${c}`;return L(t)}async function Bs(n){return L(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function Ts(n,r){return L("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function Fs(n){return L("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function zs(n,r="",i={}){let c=new URLSearchParams;if(r)c.set("path",r);if(i.overwrite)c.set("overwrite","1");let t=c.toString();return t?`${n}?${t}`:n}function Rs(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Ws(n,r,i,c){return new Promise((t,o)=>{let s=new XMLHttpRequest;s.open("POST",O+r);for(let[u,_]of Object.entries(i||{}))if(_!==void 0&&_!==null)s.setRequestHeader(u,String(_));s.upload.onprogress=(u)=>{if(typeof c==="function")c({loaded:u.lengthComputable?u.loaded:0,total:u.lengthComputable?u.total:n.size,lengthComputable:u.lengthComputable})},s.onload=()=>{try{let u=s.responseText?JSON.parse(s.responseText):{};if(s.status>=200&&s.status<300)t(u);else{let _=Error(u.error||`HTTP ${s.status}`);_.status=s.status,_.code=u.code,o(_)}}catch{let u=Error(`HTTP ${s.status}`);u.status=s.status,o(u)}},s.onerror=()=>o(Error("Upload failed (network error)")),s.ontimeout=()=>o(Error("Upload timed out")),s.send(n)})}async function Ns(n,r="",i={}){let c=Rs(),t=zs("/workspace/upload-chunk",r,i),o=Math.max(1,Math.min(mr,Number(i.chunkSize)||Ks)),s=Math.max(0,Number(n?.size)||0),u=Math.max(1,Math.ceil(s/o)),_=0,f=null;for(let d=0;d<u;d+=1){let l=d*o,w=Math.min(s,l+o),$=n.slice(l,w),v=$.size;if(f=await Ws($,t,{"X-Upload-Id":c,"X-Chunk-Index":d,"X-Chunk-Total":u,"X-File-Name":n?.name||"upload.bin","X-File-Size":s},(N)=>{if(typeof i.onProgress!=="function")return;let y=Math.min(s,_+(N?.loaded||0)),b=s||1;i.onProgress({loaded:y,total:b,percent:Math.round(y/b*100),chunkIndex:d,chunkTotal:u})}),_+=v,typeof i.onProgress==="function"){let N=s||1,y=s?_:N;i.onProgress({loaded:y,total:N,percent:Math.round(y/N*100),chunkIndex:d+1,chunkTotal:u})}}return f}async function Ms(n,r="",i={}){if(n?.size>mr){let c=(n.size/1048576).toFixed(0),t=(mr/1048576).toFixed(0),o=Error(`File too large (${c} MB). Maximum upload size is ${t} MB.`);throw o.code="file_too_large",o}return await Ns(n,r,i)}async function Hs(n,r,i=""){let c=await fetch(O+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!c.ok){let t=await c.json().catch(()=>({error:"Create failed"})),o=Error(t.error||`HTTP ${c.status}`);throw o.status=c.status,o.code=t.code,o}return c.json()}async function Ps(n,r){let i=await fetch(O+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Rename failed"})),t=Error(c.error||`HTTP ${i.status}`);throw t.status=i.status,t.code=c.code,t}return i.json()}async function js(n,r){let i=await fetch(O+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Move failed"})),t=Error(c.error||`HTTP ${i.status}`);throw t.status=i.status,t.code=c.code,t}return i.json()}async function Ls(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return L(r,{method:"DELETE"})}async function Us(n,r=!1){return L("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function Rc(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${O}/workspace/raw?${i.toString()}`}function Gs(n){return Rc(n,{download:!0})}function As(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${O}/workspace/download?${i}`}class Wc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(O+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(c)=>{this.markActivity(),this.onEvent(i,JSON.parse(c.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let c=Math.max(this.cooldownUntil-i,0),t=Math.max(this.reconnectDelay,c);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},t),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var O="",mr=1073741824,Ks=8388608;var yn=X(()=>{Tc()});function Un(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function S(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function li(n,r=!1){let i=Un(n);if(i===null)return r;return i==="true"}function _i(n,r=null){let i=Un(n);if(i===null)return r;let c=parseInt(i,10);return Number.isFinite(c)?c:r}function Nc(n){let r=Un(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function Xs(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(br,{detail:{enabled:Boolean(n)}}))}function Pc(n){if(typeof fetch!=="function")return;ii({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function Qs(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(Cs,{detail:{collapsed:Boolean(n)}}))}function fi(n=!1){return li(Mc,n)}function tl(n=!1){return li(Hc,n)}function vr(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,t=Boolean(n);if(i)S(Mc,t?"true":"false");if(c)Pc({enabled:t});return Xs(t),t}function Is(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,t=Boolean(n);if(i)S(Hc,t?"true":"false");if(c)Pc({collapsed:t});return Qs(t),t}function ol(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")vr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!fi(!1);vr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")Is(Boolean(n.collapsed),{persistServer:!1})}var Mc="piclaw_system_meters_enabled",Hc="piclaw_system_meters_collapsed",br="piclaw-meters-change",Cs="piclaw-meters-collapsed-change";var jc=X(()=>{yn()});function Lc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function Uc(n,{min:r=-1/0,max:i=1/0}={}){let c=Number.isFinite(Number(r))?Number(r):-1/0,t=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(t,Math.max(c,Number(n)))}function fn(n,{fallback:r=0,min:i=-1/0,max:c=1/0}={}){let t=Lc(n,r);return Uc(t,{min:i,max:c})}function qs(n,{direction:r=1,step:i=1,fallback:c=0,min:t=-1/0,max:o=1/0}={}){let s=fn(n,{fallback:c,min:t,max:o}),u=Math.abs(Lc(i,1))||1,_=Number(r)<0?-1:1;return Uc(s+_*u,{min:t,max:o})}function Y({value:n,min:r,max:i,step:c=1,fallback:t,width:o="80px",disabled:s=!1,label:u,onChange:_}){let f=Number.isFinite(Number(t))?Number(t):fn(n,{fallback:0,min:r,max:i}),[d,l]=p(String(n??f)),w=V(!1);j(()=>{if(!w.current)l(String(n??f))},[n,f]);let $=W((N)=>{w.current=!1;let y=fn(N,{fallback:f,min:r,max:i});l(String(y)),_?.(y)},[f,r,i,_]),v=W((N)=>{w.current=!1;let y=qs(n,{direction:N,step:c,fallback:f,min:r,max:i});l(String(y)),_?.(y)},[f,i,r,_,c,n]);return e`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${u||"value"}`}
                title=${`Decrease ${u||"value"}`}
                disabled=${s}
                onClick=${()=>v(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${d}
                disabled=${s}
                style=${`width:${o}`}
                onInput=${(N)=>{w.current=!0,l(N.target.value)}}
                onBlur=${(N)=>$(N.target.value)}
                onKeyDown=${(N)=>{if(N.key==="Enter")N.preventDefault(),$(N.target.value),N.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${u||"value"}`}
                title=${`Increase ${u||"value"}`}
                disabled=${s}
                onClick=${()=>v(1)}
            >+</button>
        </span>
    `}var Fn=X(()=>{Z()});function Gc(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function Ac({value:n,onChange:r}){let i=V(null),[c,t]=p(Gc(n));j(()=>{t(Gc(n))},[n]);let o=W((s)=>{let u=s.target.files?.[0];if(!u)return;let _=new FileReader;_.onload=()=>{let f=_.result;t(f),r?.(f)},_.readAsDataURL(u)},[r]);return e`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${c?e`<img src=${c} alt="avatar" />`:e`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${o} />
        </div>
    `}function Vc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function Ds(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let c=r.navigator??(typeof navigator<"u"?navigator:null),t=r.document??(typeof document<"u"?document:null);if(c?.clipboard?.writeText)try{return await c.clipboard.writeText(i),!0}catch(o){}try{if(!t?.body||typeof t.createElement!=="function"||typeof t.execCommand!=="function")return!1;let o=t.createElement("textarea");o.value=i,o.setAttribute?.("readonly",""),o.style.position="fixed",o.style.left="-9999px",o.style.top="0",o.style.opacity="0",t.body.appendChild(o),o.focus?.(),o.select?.();let s=Boolean(t.execCommand("copy"));return t.body.removeChild(o),s}catch(o){return!1}}function gi({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,t]=p(""),[o,s]=p(""),[u,_]=p(""),[f,d]=p(""),[l,w]=p(32),[$,v]=p(256),[N,y]=p(""),[b,M]=p(!1),[H,k]=p(!1),[K,h]=p(!1),[T,U]=p(()=>fi(!1)),[g,z]=p(!1),P=V(""),x=V(null),B=V(!0);j(()=>{return B.current=!0,()=>{B.current=!1}},[]);let R=W((I)=>{let Q=Vc(I);t(Q.userName),s(Q.userAvatar),_(Q.assistantName),d(Q.assistantAvatar),w(Q.composeUploadLimitMb),v(Q.workspaceUploadLimitMb),y(I?.widgetToken||""),P.current=JSON.stringify(Q)},[]);j(()=>{R(n||{})},[n,R]),j(()=>{let I=(Q)=>{U(Boolean(Q?.detail?.enabled))};return window.addEventListener(br,I),()=>window.removeEventListener(br,I)},[]);let A=C(()=>JSON.stringify(Vc({userName:c,userAvatar:o,assistantName:u,assistantAvatar:f,composeUploadLimitMb:l,workspaceUploadLimitMb:$})),[c,o,u,f,l,$]);j(()=>{if(A===P.current)return;if(x.current)clearTimeout(x.current);return x.current=setTimeout(async()=>{if(!B.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let Q=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:A}),In=await Q.json().catch(()=>({}));if(!B.current)return;if(!Q.ok||!In?.ok||!In?.settings)return;P.current=A,i?.(In.settings),z(!0),setTimeout(()=>{if(B.current)z(!1)},4000)}catch(Q){console.warn("[settings/general] Failed to persist general settings snapshot.",Q)}},800),()=>{if(x.current)clearTimeout(x.current)}},[A,i]);let m=n?.instanceTotp||{configured:!1,issuer:u||"Piclaw",label:c?`${u||"Piclaw"}:${c}`:u||"Piclaw",secret:"",otpauth:"",qrSvg:""},ir=W(async()=>{if(!N)return;if(await Ds(N))k(!0),setTimeout(()=>{if(B.current)k(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[N,r]),on=W(async()=>{if(K)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;h(!0);try{let I=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),Q=await I.json().catch(()=>({}));if(!I.ok||!Q?.ok||!Q?.settings)throw Error(Q?.error||"Failed to regenerate widget token.");y(Q.settings.widgetToken||""),i?.(Q.settings),z(!0),setTimeout(()=>{if(B.current)z(!1)},4000)}catch(I){console.warn("[settings/general] Failed to regenerate widget token.",I)}finally{if(B.current)h(!1)}},[K,i]),Hr=typeof window<"u"&&window.isSecureContext,Pr=N?"•".repeat(Math.min(Math.max(N.length,16),48)):"—",jr=b?N||"—":Pr;return e`
        <div class="settings-section">
            ${g&&e`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${Ac} value=${o} onChange=${s} />
                <input type="text" value=${c} onInput=${(I)=>t(I.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${Ac} value=${f} onChange=${d} />
                <input type="text" value=${u} onInput=${(I)=>_(I.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${Hr?e`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:e`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T}
                        onChange=${()=>{let I=vr(!T);U(I)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${Y}
                    label="compose upload limit"
                    value=${l}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${w}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${Y}
                    label="workspace upload limit"
                    value=${$}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${v}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${jr}</code>
                        <button class=${`settings-keychain-reveal-btn${b?" active":""}`}
                            type="button"
                            onClick=${()=>M((I)=>!I)}
                            disabled=${!N}
                            title=${b?"Hide token":"Reveal token"}>
                            ${b?e`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:e`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${ir} disabled=${!N} title="Copy token">
                            ${H?e`<span class="settings-widget-token-copied">Copied</span>`:e`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${on} disabled=${K}>${K?"Regenerating…":"Regenerate"}</button>
                    </div>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${m.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${m.configured?e`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:m.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${m.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${m.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${m.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var Cc=X(()=>{Z();jc();Fn()});var Qc={};E(Qc,{SessionsSection:()=>as});function Xc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function as({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,t]=p(!0),[o,s]=p(16),[u,_]=p(4000),[f,d]=p(3),[l,w]=p(64),[$,v]=p("none"),[N,y]=p(!1),b=V(""),M=V(null),H=V(!0);j(()=>{return H.current=!0,()=>{H.current=!1}},[]);let k=W((h)=>{let T=Xc(h);t(T.sessionAutoRotate),s(T.sessionMaxSizeMb),_(T.sessionMaxLines),d(T.sessionMaxCompactions),w(T.toolUseBudget),v(T.sessionIsolation),b.current=JSON.stringify(T)},[]);j(()=>{k(n||{})},[n,k]);let K=C(()=>JSON.stringify(Xc({sessionAutoRotate:c,sessionMaxSizeMb:o,sessionMaxLines:u,sessionMaxCompactions:f,toolUseBudget:l,sessionIsolation:$})),[c,o,u,f,l,$]);return j(()=>{if(K===b.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!H.current)return;let h=document.activeElement;if(h&&h.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:K}),U=await T.json().catch(()=>({}));if(!H.current)return;if(!T.ok||!U?.ok||!U?.settings)return;b.current=K,i?.(U.settings),y(!0),setTimeout(()=>{if(H.current)y(!1)},4000)}catch(T){console.warn("[settings/sessions] Failed to persist session settings.",T)}},800),()=>{if(M.current)clearTimeout(M.current)}},[K,i]),e`
        <div class="settings-section">
            ${N&&e`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${c} onChange=${(h)=>t(h.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${Y}
                    label="max session size"
                    value=${o}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${s}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${Y}
                    label="tool use budget"
                    value=${l}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${w}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${$} onChange=${(h)=>v(h.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var Ic=X(()=>{Z();Fn()});var qc={};E(qc,{CompactionSection:()=>Ys});function Zs(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function pi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function Ys({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,t]=p(180),[o,s]=p(15),[u,_]=p(360),[f,d]=p(75),[l,w]=p(0.5),[$,v]=p(!1),[N,y]=p(120),[b,M]=p([]),[H,k]=p([]),[K,h]=p(!1),T=V(""),U=V(null),g=V(!0);j(()=>{return g.current=!0,()=>{g.current=!1}},[]);let z=W((B)=>{let R=Zs(B);t(R.compactionTimeoutSec),s(R.compactionBackoffBaseMin),_(R.compactionBackoffMaxMin),d(R.compactionThresholdPercent),w(R.compactionBackoffDecayFactor),v(R.progressWatchdogEnabled),y(R.progressWatchdogTimeoutSec),M(R.compactionBackoffs),k(R.progressWatchdogPhases),T.current=JSON.stringify({compactionTimeoutSec:R.compactionTimeoutSec,compactionBackoffBaseMin:R.compactionBackoffBaseMin,compactionBackoffMaxMin:R.compactionBackoffMaxMin,compactionThresholdPercent:R.compactionThresholdPercent,compactionBackoffDecayFactor:R.compactionBackoffDecayFactor,progressWatchdogEnabled:R.progressWatchdogEnabled,progressWatchdogTimeoutSec:R.progressWatchdogTimeoutSec})},[]);j(()=>{z(n||{})},[n,z]);let P=C(()=>JSON.stringify({compactionTimeoutSec:c,compactionBackoffBaseMin:o,compactionBackoffMaxMin:u,compactionThresholdPercent:f,compactionBackoffDecayFactor:l,progressWatchdogEnabled:$,progressWatchdogTimeoutSec:N}),[c,o,u,f,l,$,N]);j(()=>{if(P===T.current)return;if(U.current)clearTimeout(U.current);return U.current=setTimeout(async()=>{if(!g.current)return;let B=document.activeElement;if(B&&B.closest?.(".settings-number-stepper"))return;try{r?.("Saving compaction settings…","info");let R=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:P}),A=await R.json().catch(()=>({}));if(!g.current)return;if(!R.ok||!A?.ok||!A?.settings){r?.(A?.error||"Failed to save compaction settings.","error");return}T.current=P,i?.(A.settings),z({...n||{},...A.settings||{}}),r?.("Compaction settings saved.","success"),h(!0),setTimeout(()=>{if(g.current)h(!1),r?.(null)},4000)}catch(R){if(console.warn("[settings/compaction] Failed to persist compaction settings.",R),g.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(U.current)clearTimeout(U.current)}},[P,i,r,z,n]);let x=W(async(B)=>{try{r?.(`Clearing compaction suppression for ${B}…`,"info");let R=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:B})}),A=await R.json().catch(()=>({}));if(!R.ok||!A?.ok||!A?.settings){r?.(A?.error||"Failed to clear compaction suppression.","error");return}i?.(A.settings),z({...n||{},...A.settings||{}}),r?.(`Cleared compaction suppression for ${B}.`,"success")}catch(R){console.warn("[settings/compaction] Failed to clear compaction suppression.",R),r?.("Failed to clear compaction suppression.","error")}},[z,i,r,n]);return e`
        <div class="settings-section">
            ${K&&e`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${Y}
                    label="compaction threshold"
                    value=${f}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${d}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${Y}
                    label="compaction timeout"
                    value=${c}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${t}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${Y}
                    label="compaction backoff base"
                    value=${o}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${s}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${Y}
                    label="compaction backoff max"
                    value=${u}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${_}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${Y}
                    label="backoff decay factor"
                    value=${Math.round(l*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(B)=>w(B/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${$} onChange=${(B)=>v(Boolean(B.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${Y}
                    label="watchdog timeout"
                    value=${N}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!$}
                    onChange=${y}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${b.length===0?e`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:e`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${b.map((B)=>e`
                                <tr>
                                    <td><code>${B.chatJid}</code></td>
                                    <td>${B.failureCount}</td>
                                    <td>${pi(B.backoffUntil)}</td>
                                    <td title=${B.lastErrorMessage||""}>${B.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>x(B.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${H.length===0?e`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:e`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${H.map((B)=>e`
                                <tr>
                                    <td><code>${B.chatJid}</code></td>
                                    <td>${B.phase}</td>
                                    <td>${pi(B.startedAt)}</td>
                                    <td>${pi(B.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Dc=X(()=>{Z();Fn()});function Zc(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=Es[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(Ss.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function Gn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((o)=>o.trim()).filter(Boolean);if(!i.length)return null;let c={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let o of i){let s=o.toLowerCase(),u=Js[s];if(u){c[u]=!0;continue}if(c.key)return null;let _=Zc(o);if(!_||_==="escape")return null;c.key=_}if(!c.key)return null;let t=[];if(c.ctrl)t.push("ctrl");if(c.meta)t.push("meta");if(c.alt)t.push("alt");if(c.shift)t.push("shift");return t.push(c.key),t.join("+")}function Yc(n){return String(n||"").split(/[\n,]/).map((r)=>Gn(r)).filter((r)=>Boolean(r))}function dn(n){return n.join(", ")}function hi(){let n=Nc(ac);if(!n||typeof n!=="object")return{};let r={};for(let i of En){let c=n[i.id];if(!Array.isArray(c))continue;let t=c.map((o)=>Gn(String(o||""))).filter((o)=>Boolean(o));r[i.id]=[...new Set(t)]}return r}function $i(n){if(S(ac,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Oc(n){return Os.get(n)}function Sn(n){let r=hi()[n];if(Array.isArray(r))return r;return[...Oc(n).defaultBindings]}function Jc(n,r){let i=hi(),c=Oc(n).defaultBindings,t=[...new Set(r.map((o)=>Gn(o)).filter((o)=>Boolean(o)))];if(t.length===c.length&&t.every((o,s)=>o===c[s]))delete i[n];else i[n]=t;$i(i)}function wi(n){if(!n){$i({});return}let r=hi();delete r[n],$i(r)}function kr(){let n={};for(let r of En)n[r.id]=Sn(r.id);return n}function ms(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return Zc(r)||r.toLowerCase()}function ne(n){let r=Gn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let c of r.split("+")){if(c==="ctrl"||c==="meta"||c==="alt"||c==="shift"){i[c]=!0;continue}i.key=c}return i.key?i:null}function re(n,r){let i=ne(r);if(!i)return!1;if(ms(n?.key)!==i.key)return!1;let t=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(t||Boolean(n?.shiftKey)===i.shift)}function dl(n,r){return Sn(r).some((i)=>re(n,i))}var ac="piclaw_keyboard_shortcuts_v1",En,Os,Js,Es,Ss;var Ec=X(()=>{En=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],Os=new Map(En.map((n)=>[n.id,n])),Js={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Es={esc:"escape",return:"enter",spacebar:"space"},Ss=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Sc={};E(Sc,{KeyboardSection:()=>ce});function ie(n,r,i){let c=String(n||"").trim().toLowerCase();if(!c)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((t)=>String(t||"").toLowerCase().includes(c))}function ce({filter:n="",setStatus:r}){let[i,c]=p(()=>{let _=kr();return Object.fromEntries(Object.entries(_).map(([f,d])=>[f,dn(d)]))});j(()=>{let _=()=>{let f=kr();c(Object.fromEntries(Object.entries(f).map(([d,l])=>[d,dn(l)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",_),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",_)},[]);let t=C(()=>En.filter((_)=>{let f=String(i[_.id]||"");return ie(n,_,f)}),[i,n]),o=(_)=>{let f=String(i[_]||"").trim(),l=(f?f.split(/[\n,]/).map(($)=>$.trim()).filter(Boolean):[]).filter(($)=>!Gn($));if(l.length>0){r?.(`Invalid shortcut: ${l[0]}. Escape is reserved and cannot be rebound.`,"error");return}let w=Yc(f);Jc(_,w),c(($)=>({...$,[_]:dn(Sn(_))})),r?.("Keyboard shortcuts saved.","success")},s=(_)=>{wi(_),c((f)=>({...f,[_]:dn(Sn(_))})),r?.("Keyboard shortcut reset to default.","success")};return e`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{wi();let _=kr();c(Object.fromEntries(Object.entries(_).map(([f,d])=>[f,dn(d)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${t.map((_)=>e`
                    <div class="settings-shortcut-card" key=${_.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${_.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${_.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${dn(_.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${i[_.id]||""}
                                placeholder=${dn(_.defaultBindings)}
                                onInput=${(f)=>c((d)=>({...d,[_.id]:f.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>o(_.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>s(_.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${t.length===0&&e`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var mc=X(()=>{Z();Ec()});function it(n,r=yi){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function ct(n,r=di){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function xi(){return{refreshIntervalSec:it(_i(nt,yi),yi),folderPreviewDepth:ct(_i(rt,di),di)}}function tt(n={}){let r=xi(),i={refreshIntervalSec:it(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:ct(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(S(nt,String(i.refreshIntervalSec)),S(rt,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(te,{detail:{settings:i}}));return i}var te="piclaw:workspace-client-settings-updated",nt="workspaceRefreshIntervalSec",rt="workspaceFolderPreviewDepth",yi=60,di=3;var ot=()=>{};var et={};E(et,{WorkspaceSection:()=>oe});function st(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function oe({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,t]=p(!0),[o,s]=p(!0),[u,_]=p(4),[f,d]=p(5000),[l,w]=p(60),[$,v]=p(3),[N,y]=p(!1),[b,M]=p(!1),H=V(""),k=V(null),K=V(null),h=V(null),T=V(!0);j(()=>{return T.current=!0,()=>{if(T.current=!1,k.current)clearTimeout(k.current);if(K.current)clearTimeout(K.current);if(h.current)clearTimeout(h.current)}},[]);let U=W((P)=>{let x=st(P),B=xi();t(x.webTerminalEnabled),s(x.vncAllowDirect),_(x.treeMaxDepth),d(x.treeMaxEntries),w(B.refreshIntervalSec),v(B.folderPreviewDepth),H.current=JSON.stringify(x)},[]);j(()=>{U(n||{})},[n,U]);let g=C(()=>JSON.stringify(st({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:o,treeMaxDepth:u,treeMaxEntries:f}})),[c,o,u,f]);j(()=>{if(g===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!T.current)return;let P=document.activeElement;if(P&&P.closest?.(".settings-number-stepper"))return;try{let x=await si(JSON.parse(g));if(!T.current||!x?.ok||!x?.settings)return;if(H.current=g,i?.({workspaceSettings:x.settings}),r?.(null),y(!0),K.current)clearTimeout(K.current);K.current=setTimeout(()=>{if(T.current)y(!1)},4000)}catch(x){r?.(String(x?.message||x),"error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[g,i,r]);let z=W((P)=>{let x=tt(P);if(w(x.refreshIntervalSec),v(x.folderPreviewDepth),M(!0),h.current)clearTimeout(h.current);h.current=setTimeout(()=>{if(T.current)M(!1)},3000)},[]);return e`
        <div class="settings-section">
            ${N&&e`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${b&&e`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${c} onChange=${(P)=>t(P.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${o} onChange=${(P)=>s(P.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${Y}
                    label="workspace tree max depth"
                    value=${u}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${_}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${Y}
                    label="workspace tree max entries"
                    value=${f}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${d}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${Y}
                    label="workspace refresh interval"
                    value=${l}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(P)=>z({refreshIntervalSec:P})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${Y}
                    label="folder preview scan depth"
                    value=${$}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(P)=>z({folderPreviewDepth:P})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var ut=X(()=>{Z();yn();ot();Fn()});var lt={};E(lt,{EnvironmentSection:()=>se});function vi(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function se({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:c}){let[t,o]=p(()=>vi(n||{})),[s,u]=p({}),[_,f]=p(""),[d,l]=p(""),[w,$]=p(null);j(()=>{o(vi(n||{})),u({})},[n]);let v=W((k)=>{let K=vi({environmentSettings:k?.settings||k});return o(K),c?.({environmentSettings:K}),u({}),K},[c]),N=W(async()=>{try{let k=await ei();if(k?.ok)v(k.settings);i?.("Environment refreshed.","info")}catch(k){i?.(String(k?.message||k),"error")}},[v,i]),y=W(async(k,K)=>{let h=String(k||"").trim();if(!h)return;$(h);try{let T=await xr({action:"set",name:h,value:String(K??"")});if(T?.ok)v(T.settings);if(i?.(`Saved environment override for ${h}.`,"info"),h===_.trim())f(""),l("")}catch(T){i?.(String(T?.message||T),"error")}finally{$(null)}},[v,_,i]),b=W(async(k)=>{let K=String(k||"").trim();if(!K)return;$(K);try{let h=await xr({action:"clear",name:K});if(h?.ok)v(h.settings);i?.(`Cleared environment override for ${K}.`,"info")}catch(h){i?.(String(h?.message||h),"error")}finally{$(null)}},[v,i]),M=C(()=>{let k=String(r||"").trim().toLowerCase(),K=Array.isArray(t.variables)?t.variables:[];if(!k)return K;return K.filter((h)=>{return`${h?.name||""} ${h?.value||""} ${h?.source||""}`.toLowerCase().includes(k)})},[t.variables,r]),H=W((k,K)=>{u((h)=>({...h||{},[k]:K}))},[]);return e`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${N}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${_}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(k)=>f(k.target.value)}
                    />
                    <input
                        type="text"
                        value=${d}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(k)=>l(k.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!_.trim()||w===_.trim()}
                        onClick=${()=>y(_,d)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${t.count} variables visible • ${t.overrideCount} overrides active • ${t.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((k)=>{let K=String(k?.name||""),h=Object.prototype.hasOwnProperty.call(s,K)?s[K]:k.value,T=h!==k.value,U=w===K;return e`
                        <div class="settings-tool-row" key=${K} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${K}>${K}</span>
                            <input
                                type="text"
                                value=${h}
                                spellcheck="false"
                                onInput=${(g)=>H(K,g.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${k.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${k.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${U||!T} onClick=${()=>y(K,h)}>Save</button>
                                <button type="button" disabled=${U||!k.overridden} onClick=${()=>b(K)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&e`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var _t=X(()=>{Z();yn()});var ft={};E(ft,{ProvidersSection:()=>ue});function ee(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function ue({providers:n,setStatus:r}){let[i,c]=p(null),[t,o]=p(null),[s,u]=p({}),_=W((y,b)=>{u((M)=>({...M,[y]:b}))},[]),f=W(async(y)=>{let b=(s.apiKey||"").trim();if(!b){r?.("API key cannot be empty.","error");return}c(y),r?.(`Configuring ${y}…`,"info");try{let M=JSON.stringify({provider:y,method:"api_key",api_key:b}),H=await _n("default",`/login __step2 ${M}`,null,[]);if(H?.command?.status==="error"){r?.(H.command.message,"error");return}r?.(H?.command?.message||`${y} configured.`,"success"),o(null),u({})}catch(M){r?.(String(M.message||M),"error")}finally{c(null)}},[s,r]),d=W(async(y,b)=>{c(y),r?.(`Configuring ${y}…`,"info");try{let M={provider:y,method:"custom"};for(let K of b.customFields||[])M[K.key]=(s[K.key]||"").trim();let H=JSON.stringify(M),k=await _n("default",`/login __step2 ${H}`,null,[]);if(k?.command?.status==="error"){r?.(k.command.message,"error");return}r?.(k?.command?.message||`${y} configured.`,"success"),o(null),u({})}catch(M){r?.(String(M.message||M),"error")}finally{c(null)}},[s,r]),l=W(async(y)=>{c(y),r?.(`Starting OAuth for ${y}…`,"info");try{let b=JSON.stringify({provider:y}),H=(await _n("default",`/login __step1 ${b}`,null,[]))?.command?.message||"";if(H.includes("http")){let k=H.match(/(https?:\/\/[^\s)]+)/);if(k)window.open(k[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(H,"success")}else r?.(H||`OAuth flow started for ${y}. Check the chat.`,"success")}catch(b){r?.(String(b.message||b),"error")}finally{c(null)}},[r]),w=W(async(y)=>{if(i)return;c(y),r?.(`Logging out ${y}…`,"info");try{await _n("default",`/logout ${y}`,null,[]),r?.(`Logged out ${y}. Restart may be needed.`,"success")}catch(b){r?.(String(b.message||b),"error")}finally{c(null)}},[i,r]),$=n||[],v=(y)=>t===y,N=(y)=>{o((b)=>b===y?null:y),u({})};return e`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${$.map((y)=>e`
                    <div class=${`settings-provider-card${y.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!y.configured&&N(y.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${y.name}</strong>
                                <span class="settings-provider-id">${y.id}</span>
                                ${y.configured&&e`<span class="settings-tag settings-tag-skill">${ee(y.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${y.hasOAuth&&e`<span class="settings-tag">OAuth</span>`}
                                ${y.hasApiKey&&e`<span class="settings-tag">API Key</span>`}
                                ${y.isCustom&&e`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${y.configured?e`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===y.id} onClick=${(b)=>{b.stopPropagation(),w(y.id)}}
                                    >${i===y.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===y.id} onClick=${(b)=>{b.stopPropagation(),N(y.id)}}
                                    >Reconfigure</button>
                                `:e`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===y.id} onClick=${(b)=>{b.stopPropagation(),N(y.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${v(y.id)&&e`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${y.hasOAuth&&e`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===y.id}
                                            onClick=${()=>l(y.id)}>
                                            ${i===y.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${y.hasApiKey&&e`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${s.apiKey||""}
                                                onInput=${(b)=>_("apiKey",b.target.value)}
                                                placeholder=${y.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===y.id||!(s.apiKey||"").trim()}
                                                onClick=${()=>f(y.id)}>
                                                ${i===y.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${y.isCustom&&e`
                                    <div class="settings-provider-method">
                                        ${(y.customFields||[]).map((b)=>e`
                                            <div class="settings-provider-field-row">
                                                <label>${b.label}${b.required?" *":""}</label>
                                                <input type="text" value=${s[b.key]||""}
                                                    onInput=${(M)=>_(b.key,M.target.value)}
                                                    placeholder=${b.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===y.id}
                                                onClick=${()=>d(y.id,y)}>
                                                ${i===y.id?"Configuring…":"Save configuration"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var gt=X(()=>{Z();yn()});var pt={};E(pt,{ModelsSection:()=>pe});function fe(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function ge({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:c,onSetLevel:t,disabled:o}){let s=fe(i)?le:_e,u=c&&c.length>1?c:["off","minimal","low","medium","high"],_=Math.max(0,u.indexOf(n??"off"));if(!r)return e`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return e`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${s[u[_]]||u[_]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${u.length-1} step="1" value=${_} disabled=${o}
                    onInput=${(f)=>t(u[parseInt(f.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${u.map((f,d)=>e`<span class=${d===_?"active":""} onClick=${()=>!o&&t(f)}>${s[f]||f}</span>`)}
                </div>
            </div>
        </div>
    `}function pe({filter:n=""}){let[r,i]=p(null),[c,t]=p(!1),[o,s]=p("off"),[u,_]=p(!1),[f,d]=p(["off"]),[l,w]=p(!1),$=W(async()=>{let h=await ui();if(i(h),h.thinking_level)s(h.thinking_level);if(_(Boolean(h.supports_thinking)),Array.isArray(h.available_thinking_levels)&&h.available_thinking_levels.length>0)d(h.available_thinking_levels);return h},[]);j(()=>{$().catch(()=>i({models:[],model_options:[]}))},[]);let v=W(async(h)=>{if(c)return;t(!0);try{await _n("default",`/model ${h}`,null,[]),await $()}catch(T){console.error("Failed to switch model:",T)}finally{t(!1)}},[c,$]),N=W(async(h)=>{if(l)return;w(!0),s(h);try{let T=await _n("default",`/thinking ${h}`,null,[]);if(T?.command?.thinking_level)s(T.command.thinking_level);_(T?.command?.supports_thinking!==!1),await $()}catch(T){console.error("Failed to set thinking:",T),await $().catch((U)=>{})}finally{w(!1)}},[l,$]);if(!r)return e`<div class="settings-loading">Loading models\u2026</div>`;let y=r.model_options||[],b=r.current,H=y.find((h)=>h.label===b)?.provider||"",k=n.toLowerCase(),K=k?y.filter((h)=>h.label.toLowerCase().includes(k)||(h.provider||"").toLowerCase().includes(k)):y;return e`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${K.map((h)=>e`
                            <tr class=${h.label===b?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${h.label===b} disabled=${c} onChange=${()=>v(h.label)} /></td>
                                <td>${h.name||h.label}</td><td>${h.provider}</td>
                                <td>${h.context_window?(h.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${h.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${K.length===0&&e`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${ge}
                    thinkingLevel=${o}
                    supportsThinking=${u}
                    provider=${H}
                    availableLevels=${f}
                    onSetLevel=${N}
                    disabled=${l||c} />
            </div>
        </div>
    `}var le,_e;var $t=X(()=>{Z();yn();le={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},_e={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Bi(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function dt(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let c=i.length===3?i.split("").map((o)=>o+o).join(""):i,t=parseInt(c,16);return{r:t>>16&255,g:t>>8&255,b:t&255,hex:`#${c.toLowerCase()}`}}function he(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function we(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let t=he(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!t)return null;let o=parseInt(t[1],10),s=parseInt(t[2],10),u=parseInt(t[3],10);if(![o,s,u].every((f)=>Number.isFinite(f)))return null;let _=`#${[o,s,u].map((f)=>f.toString(16).padStart(2,"0")).join("")}`;return{r:o,g:s,b:u,hex:_}}function Kn(n){return dt(n)||we(n)}function Ti(n,r,i){let c=Math.round(n.r+(r.r-n.r)*i),t=Math.round(n.g+(r.g-n.g)*i),o=Math.round(n.b+(r.b-n.b)*i);return`rgb(${c} ${t} ${o})`}function Br(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function ye(n){let r=n.r/255,i=n.g/255,c=n.b/255,t=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),o=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),s=c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);return 0.2126*t+0.7152*o+0.0722*s}function de(n){return ye(n)>0.4?"#000000":"#ffffff"}function xt(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Fi(n){return ht[n]||ht.default}function xe(n){return n.mode==="auto"?xt():n.mode}function vt(n,r){let i=Fi(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||pn}function gn(n,r,i){let c=Kn(n);if(!c)return n;return Ti(c,r,i)}function bt(n,r,i){let c=Kn(r);if(!c)return n;let o=dt(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:gn(n.bgPrimary,c,0.08),bgSecondary:gn(n.bgSecondary,c,0.12),bgHover:gn(n.bgHover,c,0.16),textPrimary:gn(n.textPrimary,c,i==="dark"?0.08:0.06),textSecondary:gn(n.textSecondary,c,i==="dark"?0.12:0.1),borderColor:gn(n.borderColor,c,0.1),accent:c.hex,accentHover:o?Ti(c,o,0.18):c.hex,warning:gn(n.warning||pn.warning,c,0.14),danger:gn(n.danger,c,0.16),success:gn(n.success,c,0.16)}}function ve(n,r){let i=Kn(n?.warning);if(i)return i.hex;let c=Kn(r==="dark"?Kr.warning:pn.warning)||Kn(pn.warning),t=Kn(n?.accent);if(c&&t)return Ti(c,t,r==="dark"?0.18:0.14);return r==="dark"?Kr.warning:pn.warning}function be(n,r){if(typeof document>"u")return;let i=document.documentElement,c=n.accent,t=Kn(c),o=t?Br(t,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,s=t?Br(t,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",u=t?Br(t,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",_=t?de(t):r==="dark"?"#000000":"#ffffff",f=t?Br(t,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",d=ve(n,r),l={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":c,"--accent-hover":n.accentHover||c,"--accent-color-alpha":f,"--accent-soft":s,"--accent-soft-strong":u,"--accent-contrast-text":_,"--warning-color":d,"--danger-color":n.danger||pn.danger,"--success-color":n.success||pn.success,"--search-highlight-color":o||"rgba(29, 155, 240, 0.2)"};Object.entries(l).forEach(([w,$])=>{if($)i.style.setProperty(w,$)})}function ke(){if(typeof document>"u")return;let n=document.documentElement;$e.forEach((r)=>n.style.removeProperty(r))}function An(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,c=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!c)c=document.createElement("meta"),document.head.appendChild(c);if(c.setAttribute("name",n),i)c.setAttribute("id",i);return c}function wt(n){let r=Bi(zn?.theme||"default"),i=zn?.tint?String(zn.tint).trim():null,c=vt(r,n);if(r==="default"&&i)c=bt(c,i,n);if(c?.bgPrimary)return c.bgPrimary;return n==="dark"?Kr.bgPrimary:pn.bgPrimary}function Be(n,r){if(typeof document>"u")return;let i=An("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let c=An("theme-color",{id:"theme-color-light"});if(c)c.setAttribute("media","(prefers-color-scheme: light)"),c.setAttribute("content",wt("light"));let t=An("theme-color",{id:"theme-color-dark"});if(t)t.setAttribute("media","(prefers-color-scheme: dark)"),t.setAttribute("content",wt("dark"));let o=An("msapplication-TileColor");if(o&&n)o.setAttribute("content",n);let s=An("msapplication-navbutton-color");if(s&&n)s.setAttribute("content",n);let u=An("apple-mobile-web-app-status-bar-style");if(u)u.setAttribute("content",r==="dark"?"black-translucent":"default")}function Te(){if(typeof window>"u")return;let n={...zn,mode:yt};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function Fe(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function Ke(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function Ki(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Bi(n?.theme||"default"),c=n?.tint?String(n.tint).trim():null,t=Fi(i),o=xe(t),s=vt(i,o);zn={theme:i,tint:c},yt=o;let u=document.documentElement;u.dataset.theme=o,u.dataset.colorTheme=i,u.dataset.tint=c?String(c):"",u.style.colorScheme=o;let _=s;if(i==="default"&&c)_=bt(s,c,o);if(i==="default"&&!c)ke();else be(_,o);if(Ke(_.bgPrimary),Be(_.bgPrimary,o),Te(),r.persist!==!1)if(S(ki,i),c)S(Fr,c);else S(Fr,"")}function Tr(){if(Fi(zn.theme).mode!=="auto")return;Ki(zn,{persist:!1})}function ze(){if(typeof window>"u")return;let n=Bi(Un(ki)||"default"),r=(()=>{let i=Un(Fr);return i?i.trim():null})();Ki({theme:n,tint:r},{persist:!1})}function Ll(){if(typeof window>"u")return()=>{};if(ze(),window.matchMedia&&!bi){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Tr);else if(n.addListener)n.addListener(Tr);return bi=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Tr);else if(n.removeListener)n.removeListener(Tr);bi=!1}}return()=>{}}function zi(n){if(!n||typeof n!=="object")return;let r=Fe(),i=n.chat_jid||n.chatJid||null,c=n.theme??n.name??n.colorTheme,t=n.tint??null;if(!i||i===r)Ki({theme:c||"default",tint:t},{persist:!1});S(ki,c||"default"),S(Fr,t||"")}function Ul(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return xt()}var ki="piclaw_theme",Fr="piclaw_tint",pn,Kr,ht,$e,zn,yt="light",bi=!1;var kt=X(()=>{pn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Kr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},ht={default:{label:"Default",mode:"auto",light:pn,dark:Kr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},$e=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],zn={theme:"default",tint:null}});var Tt={};E(Tt,{ThemeSection:()=>Re});function Bt(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function Re({themes:n,colorKeys:r,settingsData:i,setStatus:c,mergeSettingsData:t}){let[o,s]=p("default"),[u,_]=p(""),[f,d]=p(!1),l=V(""),w=V(null),$=V(!0);j(()=>{return $.current=!0,()=>{$.current=!1}},[]);let v=W((H)=>{let k=Bt(H);s(k.uiTheme),_(k.uiTint),l.current=JSON.stringify(k)},[]);j(()=>{if(i){v(i);return}v({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,v]);let N=W((H,k)=>{zi({theme:H,tint:k||null}),s(H||"default"),_(k||"")},[]),y=C(()=>JSON.stringify(Bt({uiTheme:o,uiTint:u})),[o,u]);j(()=>{if(y===l.current)return;if(w.current)clearTimeout(w.current);return w.current=setTimeout(async()=>{if(!$.current)return;d(!0);try{let H=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),k=await H.json().catch(()=>({}));if(!$.current)return;if(!H.ok||!k?.ok||!k?.settings){c?.(k?.error||"Failed to save appearance settings.","error");return}l.current=y,t?.(k.settings),c?.("Appearance synced across clients.","success")}catch(H){if(!$.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",H),c?.("Failed to save appearance settings.","error")}finally{if($.current)d(!1)}},250),()=>{if(w.current)clearTimeout(w.current)}},[y,t,c]);let b=r||[],M=n||[];return e`
        <div class="settings-section">
            ${f&&e`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${o==="default"}
                        onChange=${()=>N("default",u)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${u||"#1d9bf0"}
                        onInput=${(H)=>{let k=H.target.value;if(_(k),o==="default")zi({theme:"default",tint:k})}} />
                    ${u&&e`
                        <button class="settings-tint-clear" onClick=${()=>N("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${u||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${b.map((H)=>e`<th class="settings-swatch-header">${H.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((H)=>H.name!=="default").map((H)=>e`
                        <tr class=${H.name===o?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>N(H.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${H.name===o} onChange=${()=>N(H.name,"")} /></td>
                            <td><strong>${H.label}</strong></td>
                            <td>${H.mode}</td>
                            ${b.map((k)=>{let K=H.colors?.[k];return e`<td class="settings-swatch-cell">
                                    ${K?e`<span class="settings-color-swatch" style=${"background:"+K} title=${K}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var Ft=X(()=>{Z();kt()});var zt={};E(zt,{__scheduledTasksSettingsTest:()=>je,ScheduledTasksSection:()=>Pe});function Rn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Kt(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function Ri(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Rn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function Wi(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function Ni(n){return(n?.task_kind||"agent")==="internal"}function Ne(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function Vn({children:n,type:r="neutral"}){return e`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Me({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return e`<p class="settings-hint">No run logs recorded yet.</p>`;return e`
        <div class="settings-task-run-list">
            ${r.map((i)=>e`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${Vn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${Rn(i.run_at)}</span>
                        <span>${Kt(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||Ne(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function He({task:n,onAction:r}){if(!n)return e`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=Ni(n);return e`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&e`<button onClick=${()=>r("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&e`<button onClick=${()=>r("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>r("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${Wi(n)}</strong>
                <span>Schedule</span><strong>${Ri(n)}</strong>
                <span>Next run</span><strong>${Rn(n.next_run)}</strong>
                <span>Last run</span><strong>${Rn(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&e`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&e`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${i&&e`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Me} task=${n} />
        </div>
    `}function Pe({filter:n="",setStatus:r}){let[i,c]=p([]),[t,o]=p({active:0,paused:0,completed:0}),[s,u]=p("all"),[_,f]=p(""),[d,l]=p(!0),[w,$]=p(null),[v,N]=p(null),[y,b]=p(null),[M,H]=p(!1),k=W(async(g={})=>{l(!0),$(null);try{let z=await ni({status:s,chatJid:_.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});c(z.tasks||[]),o(z.counts||{active:0,paused:0,completed:0});let P=g.selectedId||v,x=(z.tasks||[]).find((B)=>B.id===P)||(z.tasks||[])[0]||null;N(x?.id||null),b(x)}catch(z){$(z?.message||"Failed to load scheduled tasks.")}finally{l(!1)}},[s,_,v]);j(()=>{k()},[k]);let K=String(n||"").trim().toLowerCase(),h=C(()=>{if(!K)return i;return i.filter((g)=>[g.id,g.chat_jid,g.status,g.task_kind,g.schedule_type,g.schedule_value,g.summary,g.prompt_summary,g.command_summary,g.latest_run_log?.error_summary].some((z)=>String(z||"").toLowerCase().includes(K)))},[i,K]),T=W((g)=>{N(g?.id||null),b(g||null)},[]),U=W(async(g,z)=>{if(!z||M)return;let P=Ni(z),x=z.summary||z.command_summary||z.prompt_summary||z.id,B=g==="delete"?`Delete scheduled task ${z.id}?

${x}`:`${g==="pause"?"Pause":"Resume"} scheduled task ${z.id}?

${x}`;if(!window.confirm(B))return;if(P&&!window.confirm(`Task ${z.id} is internal/protected. Continue with ${g}?`))return;H(!0),r?.(`${g==="delete"?"Deleting":g==="pause"?"Pausing":"Resuming"} ${z.id}…`,"info");try{await ri(g,z.id,{allowInternal:P}),r?.(`Scheduled task ${z.id} ${g==="delete"?"deleted":g==="pause"?"paused":"resumed"}.`,"success"),await k({selectedId:g==="delete"?null:z.id})}catch(R){r?.(R?.message||`Failed to ${g} task.`,"error")}finally{H(!1)}},[M,k,r]);return e`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${Vn} type="active">Active ${t.active||0}<//>
                    <${Vn} type="paused">Paused ${t.paused||0}<//>
                    <${Vn} type="completed">Completed ${t.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${s} onChange=${(g)=>u(g.target.value)}>
                        ${We.map((g)=>e`<option value=${g}>${g==="all"?"All statuses":g}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${_} onInput=${(g)=>f(g.target.value)} />
                    <button onClick=${()=>k()} disabled=${d}>Refresh</button>
                </div>
            </div>

            ${d&&e`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${w&&e`<div class="settings-error-state">${w}</div>`}
            ${!d&&!w&&i.length===0&&e`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!d&&!w&&i.length>0&&e`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${h.map((g)=>e`
                            <button class=${`settings-task-row ${g.id===v?"active":""}`} onClick=${()=>T(g)}>
                                <span class="settings-task-row-main">
                                    <strong>${g.summary||g.id}</strong>
                                    <span>${Ri(g)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${Vn} type=${g.status||"neutral"}>${g.status}<//>
                                    <${Vn}>${Wi(g)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Rn(g.next_run)} · Last ${Rn(g.last_run)}${g.latest_run_log?.status?` · ${g.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${h.length===0&&e`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${He} task=${y&&h.some((g)=>g.id===y.id)?y:h[0]} onAction=${U} />
                </div>
            `}
        </div>
    `}var We,je;var Rt=X(()=>{Z();yn();We=["all","active","paused","completed"];je={formatDateTime:Rn,formatDuration:Kt,labelForSchedule:Ri,kindLabel:Wi,isProtectedTask:Ni}});function Wt(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function Cn(n){return typeof n==="string"&&n.trim().length>0}function Mi(n,...r){let i=Wt(n);if(!i)return!0;let c=r.map((t)=>Wt(t)).filter(Boolean);for(let t of c)if(t.startsWith(i)||t.includes(i))return!0;return!1}function Nt(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let c of n){let t=String(c||"").trim();if(!t)continue;let o=t.toLowerCase();if(i.has(o))continue;i.add(o),r.push(t)}return r}function mn(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:Nt(r.workspaceCommands),slashCommands:Nt(r.slashCommands)}}function Mt(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function Le(n){let r=Array.isArray(n?.commands)?n.commands:[],i=mn(n?.settings),c=String(n?.query||"");return r.filter((t)=>Mt(i.workspaceCommands,t.id)).filter((t)=>Mi(c,t.label,t.description,...t.keywords||[])).map((t)=>({key:`workspace:${t.id}`,kind:"workspace",title:t.label,subtitle:t.description,searchText:`${t.label} ${t.description} ${(t.keywords||[]).join(" ")}`.trim(),visualHint:t.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:t.id}))}function Ue(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),c=new Set;return r.filter((t)=>{let o=Cn(t?.chat_jid)?t.chat_jid.trim():"";if(!o||c.has(o))return!1;if(t?.archived_at)return!1;return c.add(o),!0}).filter((t)=>Mi(i,`@${String(t?.agent_name||"").trim()}`,t?.session_name,t?.chat_jid)).map((t)=>{let o=Cn(t?.agent_name)?t.agent_name.trim():String(t?.chat_jid||"").replace(/^[^:]+:/,""),s=Cn(t?.session_name)?t.session_name.trim():"",u=String(t?.chat_jid||"").trim();return{key:`agent:${u}`,kind:"agent",title:`@${o}`,subtitle:s||u,searchText:`@${o} ${s} ${u}`.trim(),visualHint:o.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:u}})}function Ge(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=mn(n?.settings),c=String(n?.query||""),t=new Set;return r.filter((o)=>{let s=Cn(o?.name)?o.name.trim():"";if(!s||t.has(s.toLowerCase()))return!1;return t.add(s.toLowerCase()),Mt(i.slashCommands,s)}).filter((o)=>Mi(c,o?.name,o?.description,o?.source)).map((o)=>{let s=String(o?.name||"").trim(),u=Cn(o?.description)?o.description.trim():"slash command",_=Cn(o?.source)?o.source.trim():"";return{key:`slash:${s}`,kind:"slash",title:s,subtitle:u,searchText:`${s} ${u} ${String(o?.source||"")}`.trim(),visualHint:"/",categoryLabel:_||"Slash",actionHint:"Insert",commandName:s}})}function Ql(n){return[...Ue({agents:n?.agents,query:n?.query}),...Le({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Ge({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var Xn;var Ht=X(()=>{Xn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var Lt={};E(Lt,{QuickActionsSection:()=>Ae});function Pt(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((c)=>String(c||"").toLowerCase().includes(i))}function jt(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function Ae({filter:n="",setStatus:r,mergeSettingsData:i}){let[c,t]=p(()=>Xn.map((h)=>h.id)),[o,s]=p([]),[u,_]=p([]),[f,d]=p(!0),[l,w]=p(!1),$=W(async()=>{d(!0);try{let[h,T]=await Promise.all([ti(),ci("web:default").catch(()=>({commands:[]}))]),U=mn(h?.settings),g=Array.isArray(T?.commands)?T.commands:[];_(g),t(Array.isArray(U.workspaceCommands)?U.workspaceCommands:Xn.map((z)=>z.id)),s(Array.isArray(U.slashCommands)?U.slashCommands:g.map((z)=>String(z?.name||"").trim()).filter(Boolean))}catch(h){r?.(String(h?.message||h),"error")}finally{d(!1)}},[r]);j(()=>{$()},[$]);let v=C(()=>jt(c),[c]),N=C(()=>jt(o),[o]),y=C(()=>Xn.filter((h)=>Pt(n,h.label,h.description,...h.keywords||[])),[n]),b=C(()=>u.filter((h)=>Pt(n,h?.name,h?.description,h?.source)),[u,n]),M=W((h)=>{t((T)=>{let U=new Set((Array.isArray(T)?T:[]).map((g)=>String(g||"").trim()).filter(Boolean));if(U.has(h))U.delete(h);else U.add(h);return Xn.map((g)=>g.id).filter((g)=>U.has(g))})},[]),H=W((h)=>{s((T)=>{let U=new Set((Array.isArray(T)?T:[]).map((g)=>String(g||"").trim()).filter(Boolean));if(U.has(h))U.delete(h);else U.add(h);return u.map((g)=>String(g?.name||"").trim()).filter((g)=>g&&U.has(g))})},[u]),k=W(()=>{t(Xn.map((h)=>h.id)),s(u.map((h)=>String(h?.name||"").trim()).filter(Boolean))},[u]),K=W(async()=>{if(l)return;w(!0),r?.("Saving quick actions…","info");try{let h=await oi({workspaceCommands:c,slashCommands:o}),T=mn(h?.settings);i?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),r?.("Quick Actions saved.","success")}catch(h){r?.(String(h?.message||h),"error")}finally{w(!1)}},[i,l,r,o,c]);if(f)return e`<div class="settings-loading">Loading…</div>`;return e`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${k} disabled=${l}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${K} disabled=${l}>
                    ${l?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${y.map((h)=>{let T=v?v.has(h.id.toLowerCase()):!0;return e`
                        <label class="settings-checkbox-row" key=${h.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>M(h.id)} />
                            <div>
                                <div>${h.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${h.description}</div>
                            </div>
                        </label>
                    `})}
                ${y.length===0&&e`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${b.map((h)=>{let T=String(h?.name||"").trim(),U=N?N.has(T.toLowerCase()):!0;return e`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${U} onChange=${()=>H(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${h?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${b.length===0&&e`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var Ut=X(()=>{Z();yn();Ht()});var Gt={};E(Gt,{KeychainSection:()=>Xe});function Ve(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function Xe({filter:n=""}){let[r,i]=p([]),[c,t]=p(!0),[o,s]=p(null),[u,_]=p(!1),[f,d]=p(""),[l,w]=p(""),[$,v]=p(""),[N,y]=p(""),[b,M]=p(""),[H,k]=p("secret"),[K,h]=p(!1),[T,U]=p({}),[g,z]=p(null),[P,x]=p(null),[B,R]=p(null),A=V(null),m=V(null),ir=V(null),on=W(async()=>{t(!0),s(null);try{let G=await(await fetch("/agent/keychain")).json();if(G?.ok)i(G.entries||[]);else s(G?.error||"Failed to load keychain.")}catch(F){s("Failed to load keychain.")}finally{t(!1)}},[]);j(()=>{on()},[on]);let Hr=W(async()=>{let F=f.trim(),G=l;if(!F||!G)return;h(!0);try{let nn=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F,secret:G,type:H,username:$.trim()||void 0,userNote:N,agentNote:b})})).json();if(nn?.ok)d(""),w(""),v(""),y(""),M(""),k("secret"),_(!1),await on();else s(nn?.error||"Failed to add entry.")}catch{s("Failed to add entry.")}finally{h(!1)}},[f,l,$,N,b,H,on]),Pr=W(async(F)=>{try{let J=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F})})).json();if(J?.ok)x(null),R((nn)=>nn?.name===F?null:nn),await on();else s(J?.error||"Failed to delete entry.")}catch{s("Failed to delete entry.")}},[on]),jr=W(async(F)=>{let G=F?.name;if(!G)return;let J=T[G]||{},nn=Object.prototype.hasOwnProperty.call(J,"userNote")?J.userNote:F.userNote||"",cn=Object.prototype.hasOwnProperty.call(J,"agentNote")?J.agentNote:F.agentNote||"";z(G);try{let xn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G,userNote:nn,agentNote:cn})})).json();if(xn?.ok)U((tr)=>{let qn={...tr||{}};return delete qn[G],qn}),await on();else s(xn?.error||"Failed to save notes.")}catch{s("Failed to save notes.")}finally{z(null)}},[T,on]),I=W((F,G,J)=>{U((nn)=>({...nn||{},[F]:{...(nn||{})[F]||{},[G]:J}}))},[]),Q=W(async(F,G,J)=>{try{let cn=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:F,master_password:G||void 0,totp_code:J||void 0})})).json();if(cn?.ok)R({name:F,phase:"revealed",secret:cn.secret,username:cn.username,masterPassword:G});else if(cn?.needs_master_password)R((un)=>({name:F,phase:"password",masterPassword:"",error:un?.name===F&&un?.masterPassword?cn.error:null})),requestAnimationFrame(()=>m.current?.focus());else if(cn?.needs_totp)R((un)=>({name:F,phase:"totp",masterPassword:G,totpCode:"",error:un?.name===F&&un?.phase==="totp"&&un?.totpCode?cn.error:null})),requestAnimationFrame(()=>ir.current?.focus());else R({name:F,phase:"error",error:cn?.error||"Failed to reveal."})}catch{R({name:F,phase:"error",error:"Failed to reveal."})}},[]),In=W((F)=>{if(B?.name===F&&B?.phase==="revealed"){R(null);return}Q(F,null,null)},[B,Q]),Gi=W((F)=>{let G=B?.masterPassword||"";if(!G)return;Q(F,G,null)},[B,Q]),Ai=W((F)=>{let G=B?.totpCode||"";if(G.length<6)return;Q(F,B?.masterPassword,G)},[B,Q]),Vi=W(async(F)=>{try{await navigator.clipboard.writeText(F)}catch{let G=document.createElement("textarea");G.value=F,G.style.position="fixed",G.style.opacity="0",document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G)}},[]);j(()=>{if(u)requestAnimationFrame(()=>A.current?.focus())},[u]);let en=n.toLowerCase(),cr=C(()=>{if(!en)return r;return r.filter((F)=>F.name.toLowerCase().includes(en)||(F.type||"").toLowerCase().includes(en)||(F.envVar||"").toLowerCase().includes(en)||(F.userNote||"").toLowerCase().includes(en)||(F.agentNote||"").toLowerCase().includes(en))},[r,en]);if(c)return e`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return e`
        <div class="settings-section">
            ${o&&e`
                <div class="settings-keychain-error" role="alert">
                    ${o}
                    <button class="settings-keychain-dismiss" onClick=${()=>s(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${cr.length} entr${cr.length===1?"y":"ies"}${en?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>_(!u)}>
                    ${u?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${u&&e`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${A} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${f} onInput=${(F)=>d(F.target.value)}
                            class="settings-keychain-input" />
                        <select value=${H} onChange=${(F)=>k(F.target.value)}
                            class="settings-keychain-select">
                            ${Ce.map((F)=>e`<option value=${F}>${F}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${l} onInput=${(F)=>w(F.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${$} onInput=${(F)=>v(F.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${Hr}
                            disabled=${K||!f.trim()||!l}>
                            ${K?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${N} onInput=${(F)=>y(F.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${b} onInput=${(F)=>M(F.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cr.length===0&&e`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${en?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${cr.map((F)=>{let G=B?.name===F.name?B:null,J=G?.phase==="revealed",nn=G?.phase==="password",cn=G?.phase==="totp",un=G?.phase==="error",xn=T[F.name]||{},tr=Object.prototype.hasOwnProperty.call(xn,"userNote")?xn.userNote:F.userNote||"",qn=Object.prototype.hasOwnProperty.call(xn,"agentNote")?xn.agentNote:F.agentNote||"",io=tr!==(F.userNote||"")||qn!==(F.agentNote||""),Ci=g===F.name;return e`
                            <tr class="settings-keychain-row" key=${F.name}>
                                <td class="settings-keychain-name">${F.name}</td>
                                <td><span class="settings-keychain-type-badge">${F.type}</span></td>
                                <td class="settings-keychain-env">${F.envVar?e`<code>$${F.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Ve(F.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${J?" active":""}`}
                                        onClick=${()=>In(F.name)}
                                        title=${J?"Hide secret":"Reveal secret"}>
                                        ${J?e`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:e`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${P===F.name?e`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>Pr(F.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:e`<button class="settings-keychain-delete-btn" onClick=${()=>x(F.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${F.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${tr}
                                                onInput=${(rn)=>I(F.name,"userNote",rn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${qn}
                                                onInput=${(rn)=>I(F.name,"agentNote",rn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!io||Ci} onClick=${()=>jr(F)}>
                                            ${Ci?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${nn&&e`
                                <tr class="settings-keychain-prompt-row" key=${F.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${m} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${G?.masterPassword||""}
                                                onInput=${(rn)=>R((Lr)=>({...Lr,masterPassword:rn.target.value}))}
                                                onKeyDown=${(rn)=>{if(rn.key==="Enter")Gi(F.name);if(rn.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Gi(F.name)}
                                                disabled=${!G?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${G?.error&&e`<span class="settings-keychain-prompt-error">${G.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${cn&&e`
                                <tr class="settings-keychain-prompt-row" key=${F.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${ir} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${G?.totpCode||""}
                                                onInput=${(rn)=>R((Lr)=>({...Lr,totpCode:rn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(rn)=>{if(rn.key==="Enter")Ai(F.name);if(rn.key==="Escape")R(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Ai(F.name)}
                                                disabled=${(G?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>R(null)}>Cancel</button>
                                            ${G?.error&&e`<span class="settings-keychain-prompt-error">${G.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${J&&e`
                                <tr class="settings-keychain-reveal-row" key=${F.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${G.username&&e`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${G.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>Vi(G.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${G.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>Vi(G.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${un&&e`
                                <tr class="settings-keychain-reveal-row" key=${F.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${G.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Ce;var At=X(()=>{Z();Ce=["secret","token","password","basic"]});var Vt={};E(Vt,{ToolsSection:()=>ae});function ae({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:c}){let t=n||[],[o,s]=p(()=>{let w={};for(let $ of t)w[$.name]=!0;return w}),u=W((w)=>{s(($)=>({...$,[w]:!$[w]}))},[]),_=i?.searchMatchMode||"or",f=W(async()=>{let w=_==="or"?"and":"or";try{let v=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})})).json().catch(()=>({}));if(v?.ok&&v?.settings)c?.(v.settings)}catch($){console.warn("[settings/tools] Failed to save search match mode.",$)}},[_,c]),d=r.toLowerCase(),l=C(()=>{if(!d)return t;return t.map((w)=>{let $=w.tools.filter((v)=>v.name.toLowerCase().includes(d)||w.name.toLowerCase().includes(d)||(v.summary||"").toLowerCase().includes(d));return $.length>0?{...w,tools:$}:null}).filter(Boolean)},[t,d]);if(t.length===0)return e`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return e`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${_==="and"} onChange=${f} />
                        <span class="settings-hint" style="margin:0">
                            ${_==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${l.map((w)=>{let $=o[w.name]!==!1;return e`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${$} onChange=${()=>u(w.name)} />
                            <span class="settings-toolset-icon">${Qe[w.name]||De}</span>
                            <strong>${w.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${w.description}</span>
                    </div>
                    ${$&&e`<div class="settings-tool-list">${w.tools.map((v)=>e`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${v.name}</span>
                            <span class="settings-tool-kind" title=${v.kind}>${qe[v.kind]||"?"}</span>
                            ${v.summary&&e`<span class="settings-tool-summary">${v.summary}</span>`}
                            <span class="settings-tool-source">${Ie[v.name]||w.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${l.length===0&&e`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var Qe,Ie,qe,De;var Ct=X(()=>{Z();Qe={core:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Ie={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},qe={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},De=e`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var Xt={};E(Xt,{AddonsSection:()=>Ze});function Ze({setStatus:n,filter:r=""}){let[i,c]=p(null),[t,o]=p(!0),[s,u]=p(null),[_,f]=p(!1),[d,l]=p({runtime:"",windowsNative:!1}),[w,$]=p([]),[v,N]=p([]);function y(){let g=new URLSearchParams;try{let P=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((R)=>R.trim()).filter(Boolean),B=localStorage.getItem("piclaw_addons_repo_url");if(P)g.append("catalog_url",P);for(let R of x)g.append("catalog_url",R);if(B)g.set("repo_url",B)}catch(P){}let z=g.toString();return z?`?${z}`:""}let b=W(async()=>{try{let[g,z]=await Promise.all([fetch(`/agent/addons${y()}`),fetch("/agent/settings-data")]),P=await g.json();if(P.error)throw Error(P.error);c(P.addons||[]),$(P.sources||[]),N(P.failed_sources||[]);let x=await z.json().catch(()=>({})),B=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";l({runtime:B,windowsNative:B==="win32"})}catch(g){c(null),n?.(String(g.message||g),"error")}finally{o(!1)}},[n]);j(()=>{b()},[]);let M=W(async(g)=>{if(s)return;u({slug:g,action:"install"}),n?.(`Installing ${g}…`,"info");try{let P=await(await fetch(`/agent/addons/install${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:g})})).json();if(P.error){n?.(P.error,"error");return}f(!0);let x=[P.message,P.warning].filter(Boolean).join(" ");n?.(x||"Add-on installed.","success"),await b()}catch(z){n?.(String(z.message||z),"error")}finally{u(null)}},[s,b,n]),H=W(async(g)=>{if(s)return;u({slug:g,action:"remove"}),n?.(`Removing ${g}…`,"info");try{let P=await(await fetch(`/agent/addons/uninstall${y()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:g})})).json();if(P.error){n?.(P.error,"error");return}f(!0);let x=[P.message,P.warning].filter(Boolean).join(" ");n?.(x||"Add-on removed.","success"),await b()}catch(z){n?.(String(z.message||z),"error")}finally{u(null)}},[s,b,n]),k=W(async()=>{if(s)return;u({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let z=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(z.error){n?.(z.error,"error"),u(null);return}n?.(z.message||"Restarting piclaw…","success"),f(!1),(async(x=30,B=2000)=>{for(let R=0;R<x;R++){await new Promise((A)=>setTimeout(A,B));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await b(),u(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(A){}}u(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(g){n?.(String(g.message||g),"error"),u(null)}},[s,n,b]);if(t)return e`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return e`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let K=r.toLowerCase(),h=K?i.filter((g)=>g.slug.toLowerCase().includes(K)||(g.description||"").toLowerCase().includes(K)||(g.tags||[]).some((z)=>z.toLowerCase().includes(K))):i,T=s?.slug||null,U=s?s.action==="remove"?`Removing ${s.slug}…`:s.action==="restart"?"Restarting piclaw…":`Installing ${s.slug}…`:"";return e`
        <div class=${`settings-section settings-addon-panel${s?" busy":""}`} aria-busy=${s?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${w.length<=1?e`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:e`${w.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${v.length>0&&e`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${v.length} catalog source${v.length>1?"s":""}:
                            ${v.map((g)=>e` <code style="font-size:0.82em;word-break:break-all">${g}</code>`)}
                        </div>
                    `}
                    ${w.length>1&&e`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${w.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${w.map((g)=>e`<li style="word-break:break-all"><code>${g}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${d.windowsNative&&e`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${s&&e`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${U}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${U}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${h.map((g)=>{let z=(g.skills||[]).length>0,P=g.type==="extension",x=z&&P?"extension + skill":z?"skill":"extension",B=z&&!P?"settings-tag-skill":"",R=typeof g.homepage==="string"&&g.homepage.trim()?g.homepage.trim():"";return e`
                    <div class=${`settings-addon-card${g.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${R?e`<a class="settings-addon-name-link" href=${R} target="_blank" rel="noopener noreferrer">${g.slug}</a>`:e`<strong>${g.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${B}`}>${x}</span>
                            <span class="settings-addon-version">${g.installed?g.installedVersion||"?":g.version||""}</span>
                            ${g.installKind&&e`<span class="settings-tag">${g.installKind}</span>`}
                            ${g.hasUpdate&&e`<span class="settings-tag settings-tag-skill">\u2191 ${g.version}</span>`}
                            <div class="settings-addon-actions">
                                ${g.installed?e`
                                    ${g.hasUpdate&&e`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(s)} onClick=${()=>M(g.slug)}>${T===g.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(s)} onClick=${()=>H(g.slug)}>${T===g.slug?"…":"Remove"}</button>
                                `:e`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(s)} onClick=${()=>M(g.slug)}>${T===g.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${g.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(g.tags||[]).map((A)=>e`<span class="settings-tag">${A}</span>`)}${(g.skills||[]).map((A)=>e`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${A}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${h.length===0&&e`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${_&&e`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(s)} onClick=${k}>Restart Now</button>
                </div>
            `}
        </div>
    `}var Qt=X(()=>{Z()});var nu={};function Hi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function zr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ye(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Oe(n,r){try{localStorage.setItem(n,r)}catch(i){}}function Je(n,r,i,c){try{return fn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return fn(r,{fallback:r,min:i,max:c})}}function Ee(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Se(){let[n,r]=p(()=>Hi("piclaw_vim_mode",!1)),[i,c]=p(()=>Hi("piclaw_show_whitespace",!0)),[t,o]=p(()=>Hi("piclaw_md_live_preview",!0)),[s,u]=p(()=>Je("piclaw_editor_font_size",13,10,24)),[_,f]=p(()=>Ye("piclaw_editor_font_family","")),d=W((l,w,$)=>{let v=!w;$(v),zr(l,v)},[]);return e`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let l=!n;r(l),zr("piclaw_vim_mode",l)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let l=!i;c(l),zr("piclaw_show_whitespace",l)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${t}
                    onChange=${()=>{let l=!t;o(l),zr("piclaw_md_live_preview",l)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${Y}
                    label="editor font size"
                    value=${s}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(l)=>{u(l),Ee("piclaw_editor_font_size",l)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${_}
                    onInput=${(l)=>{let w=l.target.value;f(w),Oe("piclaw_editor_font_family",w)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var me;var It=X(()=>{Z();Pn();Fn();me=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;wn({id:"editor",label:"Editor",icon:me,component:Se,order:150})});var ou={};function qt(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Dt(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function ru(n,r,i,c){try{return fn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return fn(r,{fallback:r,min:i,max:c})}}function iu(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function cu(){let[n,r]=p(()=>qt("piclaw_mindmap_auto_expand",!0)),[i,c]=p(()=>ru("piclaw_mindmap_node_spacing",40,20,100)),[t,o]=p(()=>qt("piclaw_mindmap_animate",!0));return e`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let s=!n;r(s),Dt("piclaw_mindmap_auto_expand",s)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${Y}
                    label="node spacing"
                    value=${i}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(s)=>{c(s),iu("piclaw_mindmap_node_spacing",s)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${t}
                    onChange=${()=>{let s=!t;o(s),Dt("piclaw_mindmap_animate",s)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var tu;var at=X(()=>{Z();Pn();Fn();tu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;wn({id:"mindmap",label:"Mind Map",icon:tu,component:cu,order:170})});var uu={};function Pi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function ji(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Li(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Ui(n,r){try{localStorage.setItem(n,r)}catch(i){}}function su(){let[n,r]=p(()=>Pi("piclaw_dev_mode",!1)),[i,c]=p(()=>Li("piclaw_addons_catalog_url","")),[t,o]=p(()=>Li("piclaw_addons_catalog_urls","")),[s,u]=p(()=>Li("piclaw_addons_repo_url","")),[_,f]=p(()=>Pi("piclaw_debug_sse",!1)),[d,l]=p(()=>Pi("piclaw_debug_tool_calls",!1)),w=W(()=>{let $=!n;r($),ji("piclaw_dev_mode",$)},[n]);return e`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${w} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&e`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${($)=>{let v=$.target.value;c(v),Ui("piclaw_addons_catalog_url",v)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${t}
                        onInput=${($)=>{let v=$.target.value;o(v),Ui("piclaw_addons_catalog_urls",v)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${s}
                        onInput=${($)=>{let v=$.target.value;u(v),Ui("piclaw_addons_repo_url",v)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${_}
                        onChange=${()=>{let $=!_;f($),ji("piclaw_debug_sse",$)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${d}
                        onChange=${()=>{let $=!d;l($),ji("piclaw_debug_tool_calls",$)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var eu;var Zt=X(()=>{Z();Pn();eu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;wn({id:"developer",label:"Developer",icon:eu,component:su,order:900})});var Wu={};E(Wu,{openSettingsDialog:()=>Ru,SettingsDialogContent:()=>Mr,SettingsDialog:()=>zu});function rr(n){nr.push({ts:performance.now(),label:n})}function lu(){if(!nr.length)return;let n=nr[0].ts,r=nr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}nr.length=0}function gu(n){let r=Nr.get(n);if(r)return Promise.resolve(r);let i=Rr.get(n);if(i)return i;let c=_u[n]().then((t)=>{return Nr.set(n,t),Rr.delete(n),t}).catch((t)=>{throw Rr.delete(n),t});return Rr.set(n,c),c}function Wr(n="Loading…"){return e`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Mr({onClose:n}){rr("SettingsDialogContent-render-start");let[r,i]=p(()=>Jr()||"general"),[c,t]=p(Yt),[o,s]=p(null),[u,_]=p(""),[,f]=p(0),[d,l]=p(()=>Object.fromEntries(Nr.entries())),[w,$]=p(null),[v,N]=p({compact:!1,narrow:!1}),y=V(null),b=V(null);j(()=>{rr("SettingsDialogContent-mounted"),lu()},[]),j(()=>{let x=(B)=>{if(B.key==="Escape")n()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[n]),j(()=>{let x=(B)=>{let R=typeof B?.detail?.section==="string"?B.detail.section.trim():"";if(R)i(R),_("")};return window.addEventListener("piclaw:open-settings",x),()=>window.removeEventListener("piclaw:open-settings",x)},[]),j(()=>{let x=()=>f((B)=>B+1);return window.addEventListener("piclaw:settings-panes-changed",x),()=>window.removeEventListener("piclaw:settings-panes-changed",x)},[]),j(()=>{fetch("/agent/settings-data").then((x)=>x.json()).then((x)=>{Yt=x,t(x)}).catch(()=>t({}))},[]),j(()=>{let x=b.current;if(!x)return;let B=()=>{let R=x.clientWidth||0;N((A)=>{let m={compact:R>0&&R<=860,narrow:R>0&&R<=720};return A.compact===m.compact&&A.narrow===m.narrow?A:m})};if(B(),typeof ResizeObserver==="function"){let R=new ResizeObserver(()=>B());return R.observe(x),()=>R.disconnect()}return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[]);let M=[...Jt].sort((x,B)=>(x.order??500)-(B.order??500)),k=wc().map((x)=>({id:x.id,label:x.label,icon:x.icon,searchable:x.searchable||!1,placeholder:x.searchPlaceholder,order:x.order??500,isExtension:!0,component:x.component})).sort(Or),K=[...M,...k],h=K.find((x)=>x.id===r)||Jt.find((x)=>x.id===r);j(()=>{if(h?.searchable)requestAnimationFrame(()=>y.current?.focus())},[r]),j(()=>{if(h?.isExtension){$(null);return}let x=!1;if(d[r]){$(null);return}return $(r),gu(r).then((B)=>{if(x)return;l((R)=>R?.[r]?R:{...R||{},[r]:B})}).catch((B)=>{if(x)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,B)}).finally(()=>{if(!x)$((B)=>B===r?null:B)}),()=>{x=!0}},[r,h?.isExtension,d]);let T=W((x,B="info")=>{s(x?{text:x,type:B}:null)},[]),U=W((x)=>{i(x),_("");let B=fu[x];if(B&&!Ot.has(x))Ot.add(x),B().then(()=>f((R)=>R+1)).catch((R)=>{})},[]),g=W((x)=>{t((B)=>({...B||{},...x||{}}))},[]),z=()=>{if(h?.isExtension){if(!h.component)return Wr("Loading pane…");let B=h.component;return e`<${B} filter=${u} />`}let x=d[r];if(!x||w===r)return Wr(`Loading ${h?.label||"settings"}…`);switch(r){case"general":return e`<${x} settingsData=${c} setStatus=${T} mergeSettingsData=${g} />`;case"sessions":return e`<${x} settingsData=${c} setStatus=${T} mergeSettingsData=${g} />`;case"compaction":return e`<${x} settingsData=${c} setStatus=${T} mergeSettingsData=${g} />`;case"keyboard":return e`<${x} filter=${u} setStatus=${T} />`;case"workspace":return e`<${x} settingsData=${c} setStatus=${T} mergeSettingsData=${g} />`;case"environment":return e`<${x} settingsData=${c} filter=${u} setStatus=${T} mergeSettingsData=${g} />`;case"providers":return e`<${x} providers=${c?.providers} setStatus=${T} />`;case"models":return e`<${x} filter=${u} />`;case"theme":return e`<${x} themes=${c?.themes} colorKeys=${c?.colorKeys} settingsData=${c} setStatus=${T} mergeSettingsData=${g} />`;case"scheduled-tasks":return e`<${x} filter=${u} setStatus=${T} />`;case"quick-actions":return e`<${x} filter=${u} setStatus=${T} mergeSettingsData=${g} />`;case"keychain":return e`<${x} filter=${u} />`;case"tools":return e`<${x} toolsets=${c?.toolsets} filter=${u} settingsData=${c} mergeSettingsData=${g} />`;case"addons":return e`<${x} setStatus=${T} filter=${u} />`;default:return Wr("Loading settings…")}},P=!h;return rr("SettingsDialogContent-render-end"),e`
        <div class="settings-dialog-backdrop" onClick=${(x)=>{if(x.target===x.currentTarget)n()}}>
            <div ref=${b} data-testid="settings-dialog" class=${`settings-dialog${v.compact?" settings-dialog-compact":""}${v.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${h?.searchable&&e`
                        <input ref=${y} type="text" class="settings-header-filter"
                            placeholder=${h.placeholder||"Filter…"}
                            value=${u} onInput=${(x)=>_(x.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${K.map((x,B)=>{let R=B>0&&!K[B-1].isExtension,A=x.isExtension&&R;return e`
                                ${A&&e`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${x.id===r?"active":""}`} onClick=${()=>U(x.id)}>
                                    <span class="settings-nav-icon">${x.icon}</span>
                                    <span class="settings-nav-label">${x.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${P?Wr("Loading settings…"):z()}
                    </main>
                </div>
                ${o&&e`
                    <div class=${`settings-status-bar settings-status-bar-${o.type}`}>
                        ${o.type==="info"&&e`<span class="settings-spinner"></span>`}
                        <span>${o.text}</span>
                        ${o.type!=="info"&&e`<button class="settings-status-dismiss" onClick=${()=>s(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function zu(){let[n,r]=p(!1);if(j(()=>{let i=(t)=>{let o=wr(t?.detail?.section);if(o)try{window.__piclawSettingsRequestedSection=o}catch(s){}r(!0)};window.addEventListener("piclaw:open-settings",i);let c=dc();if(c.open){if(c.section)try{window.__piclawSettingsRequestedSection=c.section}catch(t){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return e`<${$c} className="settings-portal"><${Mr} onClose=${()=>r(!1)} /><//>`}function Ru(n={}){yc(n)}var nr,Yt=null,Nr,Rr,_u,fu,Ot,pu,$u,hu,wu,yu,du,xu,vu,bu,ku,Bu,Tu,Fu,Ku,Jt;var Et=X(()=>{Z();hc();Pn();Cc();nr=[];rr("module-eval-start");rr("imports-done");Nr=new Map,Rr=new Map;Nr.set("general",gi);_u={general:()=>Promise.resolve(gi),sessions:()=>Promise.resolve().then(() => (Ic(),Qc)).then((n)=>n.SessionsSection),compaction:()=>Promise.resolve().then(() => (Dc(),qc)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (mc(),Sc)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (ut(),et)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (_t(),lt)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (gt(),ft)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => ($t(),pt)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (Ft(),Tt)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (Rt(),zt)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (Ut(),Lt)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (At(),Gt)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (Ct(),Vt)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (Qt(),Xt)).then((n)=>n.AddonsSection)},fu={"editor-settings":()=>Promise.resolve().then(() => (It(),nu)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (at(),ou)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Zt(),uu)).then(()=>{})},Ot=new Set;pu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,$u=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,hu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,wu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,yu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,du=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,xu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,vu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,bu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ku=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,Bu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,Tu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,Fu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,Ku=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Jt=[{id:"general",label:"General",icon:pu,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:$u,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:hu,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:du,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:wu,searchable:!1,order:15},{id:"environment",label:"Environment",icon:yu,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:xu,searchable:!1,order:20},{id:"models",label:"Models",icon:vu,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:bu,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ku,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:Tu,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:Fu,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:Bu,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:Ku,searchable:!0,placeholder:"Filter add-ons…",order:90}]});Z();Et();Pn();var Nu=e`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function Mu({label:n,body:r,filter:i=""}){return e`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((c)=>!i||c.toLowerCase().includes(String(i).toLowerCase())).map((c)=>e`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${c}</div>
                <div class="settings-addon-subtitle">${r}</div>
              </div>
              <span class="settings-addon-enabled">fixture</span>
            </div>
            <div class="settings-row settings-row-vertical">
              <label>Mock field</label>
              <input type="text" value=${`${n.toLowerCase().replace(/\s+/g,"-")}:${c.toLowerCase().replace(/\s+/g,"-")}`} readonly />
            </div>
          </div>
        `)}
      </div>
    </div>
  `}function Hu(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)wn({id:r.id,label:r.label,icon:Nu,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>e`<${Mu} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var sn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},Pu={current:sn.current,models:sn.models,model_options:sn.model_options,thinking_level:sn.thinking_level,supports_thinking:sn.supports_thinking,available_thinking_levels:sn.available_thinking_levels},St={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},mt={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},Qn=new URLSearchParams(window.location.search).get("real")!=="1",no=window.fetch.bind(window);function tn(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function ju(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),c=String(r?.method||"GET").toUpperCase();if(!Qn)return no(n,r);if(i.pathname==="/agent/settings-data")return tn(sn);if(i.pathname==="/agent/models")return tn(Pu);if(i.pathname==="/agent/addons")return tn(St);if(i.pathname.startsWith("/agent/addons/"))return tn({ok:!0,message:"Fixture add-on action accepted.",...St});if(i.pathname==="/agent/keychain"){if(c==="GET")return tn(mt);if(c==="POST")return tn({ok:!0,...mt})}if(i.pathname==="/agent/settings/general")return tn({ok:!0,settings:sn});if(i.pathname==="/agent/settings/widget-token/regenerate")return tn({ok:!0,settings:{...sn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return tn({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return tn({ok:!0,settings:sn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return tn({ok:!0});return no(n,r)}}function Lu(){let n=document.createElement("style");n.textContent=`
    html, body, #settings-widget-fixture-root { margin: 0; width: 100%; height: 100%; overflow: hidden; background: var(--bg-primary, #111827); color: var(--text-primary, #e5e7eb); }
    .settings-fixture-shell { height: 100vh; display: grid; grid-template-rows: auto minmax(0, 1fr); background: var(--bg-primary, #111827); }
    .settings-fixture-toolbar { position: relative; z-index: 2600; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; padding: 8px 10px; border-bottom: 1px solid var(--border-color, rgba(148,163,184,.22)); background: var(--bg-secondary, #0f172a); font: 12px var(--font-sans, system-ui, sans-serif); }
    .settings-fixture-toolbar strong { margin-right: 4px; }
    .settings-fixture-toolbar button, .settings-fixture-toolbar select, .settings-fixture-toolbar input { border: 1px solid var(--border-color, rgba(148,163,184,.28)); border-radius: 7px; background: var(--bg-primary, #111827); color: inherit; padding: 5px 8px; font: inherit; }
    .settings-fixture-toolbar input[type="range"] { padding: 0; width: 120px; }
    .settings-fixture-canvas { position: relative; min-height: 0; overflow: hidden; }
    .settings-fixture-canvas .settings-dialog-backdrop { position: absolute; inset: 0; background: color-mix(in srgb, var(--bg-primary, #111827) 82%, transparent); }
    .settings-fixture-canvas .settings-dialog { width: min(var(--fixture-width, 900px), 96vw); height: min(var(--fixture-height, 640px), 94%); max-width: none; max-height: none; }
    .settings-fixture-note { opacity: .72; }
  `,document.head.appendChild(n)}function ro(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Uu(){let n=new URLSearchParams(window.location.search),[r,i]=p(n.get("section")||"general"),[c,t]=p(Number(n.get("width")||900)),[o,s]=p(Number(n.get("height")||640)),[u,_]=p(Qn),[f,d]=p(0),l=C(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),w=W((v)=>{i(v),ro(v)},[]),$=W(()=>{Qn=!Qn,_(Qn),d((v)=>v+1)},[]);return e`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(v)=>w(v.target.value)}>${l.map((v)=>e`<option value=${v}>${v}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${c} onInput=${(v)=>t(Number(v.target.value))} /> ${c}px</label>
        <label>Height <input type="range" min="420" max="900" value=${o} onInput=${(v)=>s(Number(v.target.value))} /> ${o}px</label>
        <button type="button" onClick=${$}>${u?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>d((v)=>v+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${c}px;--fixture-height:${o}px;`}>
        <${Mr} key=${f} onClose=${()=>{}} />
      </div>
    </div>
  `}function Gu(){Hu(),ju(),Lu();let n=new URLSearchParams(window.location.search);ro(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",Mn(e`<${Uu} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:Qn})}Gu();

//# debugId=D26D44EDA3A2F0EE64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
