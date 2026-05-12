var xt=Object.defineProperty;var bt=(n)=>n;function vt(n,r){this[n]=bt.bind(null,r)}var rn=(n,r)=>{for(var i in r)xt(n,i,{get:r[i],enumerable:!0,configurable:!0,set:vt.bind(r,i)})};var q=(n,r)=>()=>(n&&(r=n(n=0)),r);var Gt={};rn(Gt,{useState:()=>g,useRef:()=>C,useReducer:()=>dc,useMemo:()=>Q,useLayoutEffect:()=>dr,useImperativeHandle:()=>Rt,useErrorBoundary:()=>Nt,useEffect:()=>L,useDebugValue:()=>Mt,useContext:()=>jt,useCallback:()=>z,render:()=>An,html:()=>u,h:()=>mr,createContext:()=>Wt,Component:()=>mn});function gn(n,r){for(var i in r)n[i]=r[i];return n}function ar(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function mr(n,r,i){var c,o,t,s={};for(t in r)t=="key"?c=r[t]:t=="ref"?o=r[t]:s[t]=r[t];if(arguments.length>2&&(s.children=arguments.length>3?vr.call(arguments,2):i),typeof n=="function"&&n.defaultProps!=null)for(t in n.defaultProps)s[t]===void 0&&(s[t]=n.defaultProps[t]);return wr(n,s,c,o,null)}function wr(n,r,i,c,o){var t={type:n,props:r,key:i,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o==null?++ec:o,__i:-1,__u:0};return o==null&&Y.vnode!=null&&Y.vnode(t),t}function Br(n){return n.children}function mn(n,r){this.props=n,this.context=r}function Pn(n,r){if(r==null)return n.__?Pn(n.__,n.__i+1):null;for(var i;r<n.__k.length;r++)if((i=n.__k[r])!=null&&i.__e!=null)return i.__e;return typeof n.type=="function"?Pn(n):null}function dt(n){if(n.__P&&n.__d){var r=n.__v,i=r.__e,c=[],o=[],t=gn({},r);t.__v=r.__v+1,Y.vnode&&Y.vnode(t),ni(n.__P,t,r,n.__n,n.__P.namespaceURI,32&r.__u?[i]:null,c,i==null?Pn(r):i,!!(32&r.__u),o),t.__v=r.__v,t.__.__k[t.__i]=t,bc(c,t,o),r.__e=r.__=null,t.__e!=i&&hc(t)}}function hc(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(r){if(r!=null&&r.__e!=null)return n.__e=n.__c.base=r.__e}),hc(n)}function Or(n){(!n.__d&&(n.__d=!0)&&bn.push(n)&&!br.__r++||mi!=Y.debounceRendering)&&((mi=Y.debounceRendering)||gc)(br)}function br(){try{for(var n,r=1;bn.length;)bn.length>r&&bn.sort(pc),n=bn.shift(),r=bn.length,dt(n)}finally{bn.length=br.__r=0}}function yc(n,r,i,c,o,t,s,_,l,e,x){var f,b,h,y,B,$,v,F=c&&c.__k||xr,N=r.length;for(l=Tt(i,r,F,l,N),f=0;f<N;f++)(h=i.__k[f])!=null&&(b=h.__i!=-1&&F[h.__i]||yr,h.__i=f,$=ni(n,h,b,o,t,s,_,l,e,x),y=h.__e,h.ref&&b.ref!=h.ref&&(b.ref&&ri(b.ref,null,h),x.push(h.ref,h.__c||y,h)),B==null&&y!=null&&(B=y),(v=!!(4&h.__u))||b.__k===h.__k?(l=xc(h,l,n,v),v&&b.__e&&(b.__e=null)):typeof h.type=="function"&&$!==void 0?l=$:y&&(l=y.nextSibling),h.__u&=-7);return i.__e=B,l}function Tt(n,r,i,c,o){var t,s,_,l,e,x=i.length,f=x,b=0;for(n.__k=Array(o),t=0;t<o;t++)(s=r[t])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=n.__k[t]=wr(null,s,null,null,null):kr(s)?s=n.__k[t]=wr(Br,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=n.__k[t]=wr(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):n.__k[t]=s,l=t+b,s.__=n,s.__b=n.__b+1,_=null,(e=s.__i=Ft(s,i,l,f))!=-1&&(f--,(_=i[e])&&(_.__u|=2)),_==null||_.__v==null?(e==-1&&(o>x?b--:o<x&&b++),typeof s.type!="function"&&(s.__u|=4)):e!=l&&(e==l-1?b--:e==l+1?b++:(e>l?b--:b++,s.__u|=4))):n.__k[t]=null;if(f)for(t=0;t<x;t++)(_=i[t])!=null&&(2&_.__u)==0&&(_.__e==c&&(c=Pn(_)),kc(_,_));return c}function xc(n,r,i,c){var o,t;if(typeof n.type=="function"){for(o=n.__k,t=0;o&&t<o.length;t++)o[t]&&(o[t].__=n,r=xc(o[t],r,i,c));return r}n.__e!=r&&(c&&(r&&n.type&&!r.parentNode&&(r=Pn(n)),i.insertBefore(n.__e,r||null)),r=n.__e);do r=r&&r.nextSibling;while(r!=null&&r.nodeType==8);return r}function Ft(n,r,i,c){var o,t,s,_=n.key,l=n.type,e=r[i],x=e!=null&&(2&e.__u)==0;if(e===null&&_==null||x&&_==e.key&&l==e.type)return i;if(c>(x?1:0)){for(o=i-1,t=i+1;o>=0||t<r.length;)if((e=r[s=o>=0?o--:t++])!=null&&(2&e.__u)==0&&_==e.key&&l==e.type)return s}return-1}function nc(n,r,i){r[0]=="-"?n.setProperty(r,i==null?"":i):n[r]=i==null?"":typeof i!="number"||Bt.test(r)?i:i+"px"}function pr(n,r,i,c,o){var t,s;n:if(r=="style")if(typeof i=="string")n.style.cssText=i;else{if(typeof c=="string"&&(n.style.cssText=c=""),c)for(r in c)i&&r in i||nc(n.style,r,"");if(i)for(r in i)c&&i[r]==c[r]||nc(n.style,r,i[r])}else if(r[0]=="o"&&r[1]=="n")t=r!=(r=r.replace($c,"$1")),s=r.toLowerCase(),r=s in n||r=="onFocusOut"||r=="onFocusIn"?s.slice(2):r.slice(2),n.l||(n.l={}),n.l[r+t]=i,i?c?i[an]=c[an]:(i[an]=Sr,n.addEventListener(r,t?Yr:Zr,t)):n.removeEventListener(r,t?Yr:Zr,t);else{if(o=="http://www.w3.org/2000/svg")r=r.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(r!="width"&&r!="height"&&r!="href"&&r!="list"&&r!="form"&&r!="tabIndex"&&r!="download"&&r!="rowSpan"&&r!="colSpan"&&r!="role"&&r!="popover"&&r in n)try{n[r]=i==null?"":i;break n}catch(_){}typeof i=="function"||(i==null||i===!1&&r[4]!="-"?n.removeAttribute(r):n.setAttribute(r,r=="popover"&&i==1?"":i))}}function rc(n){return function(r){if(this.l){var i=this.l[r.type+n];if(r[$r]==null)r[$r]=Sr++;else if(r[$r]<i[an])return;return i(Y.event?Y.event(r):r)}}}function ni(n,r,i,c,o,t,s,_,l,e){var x,f,b,h,y,B,$,v,F,N,d,j,k,R,G,p=r.type;if(r.constructor!==void 0)return null;128&i.__u&&(l=!!(32&i.__u),t=[_=r.__e=i.__e]),(x=Y.__b)&&x(r);n:if(typeof p=="function")try{if(v=r.props,F=p.prototype&&p.prototype.render,N=(x=p.contextType)&&c[x.__c],d=x?N?N.props.value:x.__:c,i.__c?$=(f=r.__c=i.__c).__=f.__E:(F?r.__c=f=new p(v,d):(r.__c=f=new mn(v,d),f.constructor=p,f.render=zt),N&&N.sub(f),f.state||(f.state={}),f.__n=c,b=f.__d=!0,f.__h=[],f._sb=[]),F&&f.__s==null&&(f.__s=f.state),F&&p.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=gn({},f.__s)),gn(f.__s,p.getDerivedStateFromProps(v,f.__s))),h=f.props,y=f.state,f.__v=r,b)F&&p.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),F&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(F&&p.getDerivedStateFromProps==null&&v!==h&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,d),r.__v==i.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(v,f.__s,d)===!1){r.__v!=i.__v&&(f.props=v,f.state=f.__s,f.__d=!1),r.__e=i.__e,r.__k=i.__k,r.__k.some(function(W){W&&(W.__=r)}),xr.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&s.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,d),F&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(h,y,B)})}if(f.context=d,f.props=v,f.__P=n,f.__e=!1,j=Y.__r,k=0,F)f.state=f.__s,f.__d=!1,j&&j(r),x=f.render(f.props,f.state,f.context),xr.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,j&&j(r),x=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++k<25);f.state=f.__s,f.getChildContext!=null&&(c=gn(gn({},c),f.getChildContext())),F&&!b&&f.getSnapshotBeforeUpdate!=null&&(B=f.getSnapshotBeforeUpdate(h,y)),R=x!=null&&x.type===Br&&x.key==null?vc(x.props.children):x,_=yc(n,kr(R)?R:[R],r,i,c,o,t,s,_,l,e),f.base=r.__e,r.__u&=-161,f.__h.length&&s.push(f),$&&(f.__E=f.__=null)}catch(W){if(r.__v=null,l||t!=null)if(W.then){for(r.__u|=l?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;t[t.indexOf(_)]=null,r.__e=_}else{for(G=t.length;G--;)ar(t[G]);Jr(r)}else r.__e=i.__e,r.__k=i.__k,W.then||Jr(r);Y.__e(W,r,i)}else t==null&&r.__v==i.__v?(r.__k=i.__k,r.__e=i.__e):_=r.__e=Kt(i.__e,r,i,c,o,t,s,l,e);return(x=Y.diffed)&&x(r),128&r.__u?void 0:_}function Jr(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Jr))}function bc(n,r,i){for(var c=0;c<i.length;c++)ri(i[c],i[++c],i[++c]);Y.__c&&Y.__c(r,n),n.some(function(o){try{n=o.__h,o.__h=[],n.some(function(t){t.call(o)})}catch(t){Y.__e(t,o.__v)}})}function vc(n){return typeof n!="object"||n==null||n.__b>0?n:kr(n)?n.map(vc):gn({},n)}function Kt(n,r,i,c,o,t,s,_,l){var e,x,f,b,h,y,B,$=i.props||yr,v=r.props,F=r.type;if(F=="svg"?o="http://www.w3.org/2000/svg":F=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),t!=null){for(e=0;e<t.length;e++)if((h=t[e])&&"setAttribute"in h==!!F&&(F?h.localName==F:h.nodeType==3)){n=h,t[e]=null;break}}if(n==null){if(F==null)return document.createTextNode(v);n=document.createElementNS(o,F,v.is&&v),_&&(Y.__m&&Y.__m(r,t),_=!1),t=null}if(F==null)$===v||_&&n.data==v||(n.data=v);else{if(t=t&&vr.call(n.childNodes),!_&&t!=null)for($={},e=0;e<n.attributes.length;e++)$[(h=n.attributes[e]).name]=h.value;for(e in $)h=$[e],e=="dangerouslySetInnerHTML"?f=h:e=="children"||(e in v)||e=="value"&&("defaultValue"in v)||e=="checked"&&("defaultChecked"in v)||pr(n,e,null,h,o);for(e in v)h=v[e],e=="children"?b=h:e=="dangerouslySetInnerHTML"?x=h:e=="value"?y=h:e=="checked"?B=h:_&&typeof h!="function"||$[e]===h||pr(n,e,h,$[e],o);if(x)_||f&&(x.__html==f.__html||x.__html==n.innerHTML)||(n.innerHTML=x.__html),r.__k=[];else if(f&&(n.innerHTML=""),yc(r.type=="template"?n.content:n,kr(b)?b:[b],r,i,c,F=="foreignObject"?"http://www.w3.org/1999/xhtml":o,t,s,t?t[0]:i.__k&&Pn(i,0),_,l),t!=null)for(e=t.length;e--;)ar(t[e]);_||(e="value",F=="progress"&&y==null?n.removeAttribute("value"):y!=null&&(y!==n[e]||F=="progress"&&!y||F=="option"&&y!=$[e])&&pr(n,e,y,$[e],o),e="checked",B!=null&&B!=n[e]&&pr(n,e,B,$[e],o))}return n}function ri(n,r,i){try{if(typeof n=="function"){var c=typeof n.__u=="function";c&&n.__u(),c&&r==null||(n.__u=n(r))}else n.current=r}catch(o){Y.__e(o,i)}}function kc(n,r,i){var c,o;if(Y.unmount&&Y.unmount(n),(c=n.ref)&&(c.current&&c.current!=n.__e||ri(c,null,r)),(c=n.__c)!=null){if(c.componentWillUnmount)try{c.componentWillUnmount()}catch(t){Y.__e(t,r)}c.base=c.__P=null}if(c=n.__k)for(o=0;o<c.length;o++)c[o]&&kc(c[o],r,i||typeof n.type!="function");i||ar(n.__e),n.__c=n.__=n.__e=void 0}function zt(n,r,i){return this.constructor(n,i)}function An(n,r,i){var c,o,t,s;r==document&&(r=document.documentElement),Y.__&&Y.__(n,r),o=(c=typeof i=="function")?null:i&&i.__k||r.__k,t=[],s=[],ni(r,n=(!c&&i||r).__k=mr(Br,null,[n]),o||yr,yr,r.namespaceURI,!c&&i?[i]:o?null:r.firstChild?vr.call(r.childNodes):null,t,!c&&i?i:o?o.__e:r.firstChild,c,s),bc(t,n,s)}function Wt(n){function r(i){var c,o;return this.getChildContext||(c=new Set,(o={})[r.__c]=this,this.getChildContext=function(){return o},this.componentWillUnmount=function(){c=null},this.shouldComponentUpdate=function(t){this.props.value!=t.value&&c.forEach(function(s){s.__e=!0,Or(s)})},this.sub=function(t){c.add(t);var s=t.componentWillUnmount;t.componentWillUnmount=function(){c&&c.delete(t),s&&s.call(t)}}),i.children}return r.__c="__cC"+wc++,r.__=n,r.Provider=r.__l=(r.Consumer=function(i,c){return i.children(c)}).contextType=r,r}function Xn(n,r){J.__h&&J.__h(Z,n,Vn||r),Vn=0;var i=Z.__H||(Z.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function g(n){return Vn=1,dc(Tc,n)}function dc(n,r,i){var c=Xn(vn++,2);if(c.t=n,!c.__c&&(c.__=[i?i(r):Tc(void 0,r),function(_){var l=c.__N?c.__N[0]:c.__[0],e=c.t(l,_);l!==e&&(c.__N=[e,c.__[1]],c.__c.setState({}))}],c.__c=Z,!Z.__f)){var o=function(_,l,e){if(!c.__c.__H)return!0;var x=c.__c.__H.__.filter(function(b){return b.__c});if(x.every(function(b){return!b.__N}))return!t||t.call(this,_,l,e);var f=c.__c.props!==_;return x.some(function(b){if(b.__N){var h=b.__[0];b.__=b.__N,b.__N=void 0,h!==b.__[0]&&(f=!0)}}),t&&t.call(this,_,l,e)||f};Z.__f=!0;var{shouldComponentUpdate:t,componentWillUpdate:s}=Z;Z.componentWillUpdate=function(_,l,e){if(this.__e){var x=t;t=void 0,o(_,l,e),t=x}s&&s.call(this,_,l,e)},Z.shouldComponentUpdate=o}return c.__N||c.__}function L(n,r){var i=Xn(vn++,3);!J.__s&&ii(i.__H,r)&&(i.__=n,i.u=r,Z.__H.__h.push(i))}function dr(n,r){var i=Xn(vn++,4);!J.__s&&ii(i.__H,r)&&(i.__=n,i.u=r,Z.__h.push(i))}function C(n){return Vn=5,Q(function(){return{current:n}},[])}function Rt(n,r,i){Vn=6,dr(function(){if(typeof n=="function"){var c=n(r());return function(){n(null),c&&typeof c=="function"&&c()}}if(n)return n.current=r(),function(){return n.current=null}},i==null?i:i.concat(n))}function Q(n,r){var i=Xn(vn++,7);return ii(i.__H,r)&&(i.__=n(),i.__H=r,i.__h=n),i.__}function z(n,r){return Vn=8,Q(function(){return n},r)}function jt(n){var r=Z.context[n.__c],i=Xn(vn++,9);return i.c=n,r?(i.__==null&&(i.__=!0,r.sub(Z)),r.props.value):n.__}function Mt(n,r){J.useDebugValue&&J.useDebugValue(r?r(n):n)}function Nt(n){var r=Xn(vn++,10),i=g();return r.__=n,Z.componentDidCatch||(Z.componentDidCatch=function(c,o){r.__&&r.__(c,o),i[1](c)}),[i[0],function(){i[1](void 0)}]}function Ut(){for(var n;n=Bc.shift();){var r=n.__H;if(n.__P&&r)try{r.__h.some(hr),r.__h.some(Er),r.__h=[]}catch(i){r.__h=[],J.__e(i,n.__v)}}}function Ht(n){var r,i=function(){clearTimeout(c),lc&&cancelAnimationFrame(r),setTimeout(n)},c=setTimeout(i,35);lc&&(r=requestAnimationFrame(i))}function hr(n){var r=Z,i=n.__c;typeof i=="function"&&(n.__c=void 0,i()),Z=r}function Er(n){var r=Z;n.__c=n.__(),Z=r}function ii(n,r){return!n||n.length!==r.length||r.some(function(i,c){return i!==n[c]})}function Tc(n,r){return typeof r=="function"?r(n):r}function Lt(n){var r=fc.get(this);return r||(r=new Map,fc.set(this,r)),(r=Fc(this,r.get(n)||(r.set(n,r=function(i){for(var c,o,t=1,s="",_="",l=[0],e=function(b){t===1&&(b||(s=s.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,b,s):t===3&&(b||s)?(l.push(3,b,s),t=2):t===2&&s==="..."&&b?l.push(4,b,0):t===2&&s&&!b?l.push(5,0,!0,s):t>=5&&((s||!b&&t===5)&&(l.push(t,0,s,o),t=6),b&&(l.push(t,b,0,o),t=6)),s=""},x=0;x<i.length;x++){x&&(t===1&&e(),e(x));for(var f=0;f<i[x].length;f++)c=i[x][f],t===1?c==="<"?(e(),l=[l],t=3):s+=c:t===4?s==="--"&&c===">"?(t=1,s=""):s=c+s[0]:_?c===_?_="":s+=c:c==='"'||c==="'"?_=c:c===">"?(e(),t=1):t&&(c==="="?(t=5,o=s,s=""):c==="/"&&(t<5||i[x][f+1]===">")?(e(),t===3&&(l=l[0]),t=l,(l=l[0]).push(2,0,t),t=0):c===" "||c==="\t"||c===`
`||c==="\r"?(e(),t=2):s+=c),t===3&&s==="!--"&&(t=4,l=l[0])}return e(),l}(n)),r),arguments,[])).length>1?r:r[0]}var vr,Y,ec,kt,bn,mi,gc,pc,Ir,$r,an,$c,Sr,Zr,Yr,wc,yr,xr,Bt,kr,vn,Z,Dr,ic,Vn=0,Bc,J,cc,oc,tc,sc,uc,_c,lc,Fc=function(n,r,i,c){var o;r[0]=0;for(var t=1;t<r.length;t++){var s=r[t++],_=r[t]?(r[0]|=s?1:2,i[r[t++]]):r[++t];s===3?c[0]=_:s===4?c[1]=Object.assign(c[1]||{},_):s===5?(c[1]=c[1]||{})[r[++t]]=_:s===6?c[1][r[++t]]+=_+"":s?(o=n.apply(_,Fc(n,_,i,["",null])),c.push(o),_[0]?r[0]|=2:(r[t-2]=0,r[t]=o)):c.push(_)}return c},fc,u;var E=q(()=>{yr={},xr=[],Bt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,kr=Array.isArray;vr=xr.slice,Y={__e:function(n,r,i,c){for(var o,t,s;r=r.__;)if((o=r.__c)&&!o.__)try{if((t=o.constructor)&&t.getDerivedStateFromError!=null&&(o.setState(t.getDerivedStateFromError(n)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(n,c||{}),s=o.__d),s)return o.__E=o}catch(_){n=_}throw n}},ec=0,kt=function(n){return n!=null&&n.constructor===void 0},mn.prototype.setState=function(n,r){var i;i=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=gn({},this.state),typeof n=="function"&&(n=n(gn({},i),this.props)),n&&gn(i,n),n!=null&&this.__v&&(r&&this._sb.push(r),Or(this))},mn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Or(this))},mn.prototype.render=Br,bn=[],gc=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pc=function(n,r){return n.__v.__b-r.__v.__b},br.__r=0,Ir=Math.random().toString(8),$r="__d"+Ir,an="__a"+Ir,$c=/(PointerCapture)$|Capture$/i,Sr=0,Zr=rc(!1),Yr=rc(!0),wc=0;Bc=[],J=Y,cc=J.__b,oc=J.__r,tc=J.diffed,sc=J.__c,uc=J.unmount,_c=J.__;J.__b=function(n){Z=null,cc&&cc(n)},J.__=function(n,r){n&&r.__k&&r.__k.__m&&(n.__m=r.__k.__m),_c&&_c(n,r)},J.__r=function(n){oc&&oc(n),vn=0;var r=(Z=n.__c).__H;r&&(Dr===Z?(r.__h=[],Z.__h=[],r.__.some(function(i){i.__N&&(i.__=i.__N),i.u=i.__N=void 0})):(r.__h.some(hr),r.__h.some(Er),r.__h=[],vn=0)),Dr=Z},J.diffed=function(n){tc&&tc(n);var r=n.__c;r&&r.__H&&(r.__H.__h.length&&(Bc.push(r)!==1&&ic===J.requestAnimationFrame||((ic=J.requestAnimationFrame)||Ht)(Ut)),r.__H.__.some(function(i){i.u&&(i.__H=i.u),i.u=void 0})),Dr=Z=null},J.__c=function(n,r){r.some(function(i){try{i.__h.some(hr),i.__h=i.__h.filter(function(c){return!c.__||Er(c)})}catch(c){r.some(function(o){o.__h&&(o.__h=[])}),r=[],J.__e(c,i.__v)}}),sc&&sc(n,r)},J.unmount=function(n){uc&&uc(n);var r,i=n.__c;i&&i.__H&&(i.__H.__.some(function(c){try{hr(c)}catch(o){r=o}}),i.__H=void 0,r&&J.__e(r,i.__v))};lc=typeof requestAnimationFrame=="function";fc=new Map;u=Lt.bind(mr)});function Kc({children:n,className:r=""}){let[i,c]=g(null);return L(()=>{if(typeof document>"u")return;let o=document.createElement("div");return o.className=r||"",document.body.appendChild(o),c(o),()=>{try{An(null,o)}finally{o.remove()}}},[]),L(()=>{if(!i)return;i.className=r||"";return},[r,i]),dr(()=>{if(!i)return;An(n,i);return},[n,i]),null}var zc=q(()=>{E()});function ci(n,r){let i=String(n.label||"").localeCompare(String(r.label||""),void 0,{sensitivity:"base"});if(i!==0)return i;return String(n.id||"").localeCompare(String(r.id||""),void 0,{sensitivity:"base"})}function kn(n){let r=Kn.findIndex((i)=>i.id===n.id);if(r>=0)Kn[r]=n;else Kn.push(n);Kn.sort(ci)}function ul(n){let r=Kn.findIndex((i)=>i.id===n);if(r>=0)Kn.splice(r,1)}function Wc(){return[...Kn]}function _l(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var Kn;var Qn=q(()=>{Kn=[]});function Tr(n){let r=typeof n==="string"?n.trim():"";return r?r:null}function Rc(n={}){if(typeof window>"u")return;let r=Tr(n.section);try{if(window.__piclawSettingsOpenRequested=!0,r)window.__piclawSettingsRequestedSection=r;else delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to record open request flags",i)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:r?{section:r}:void 0}))}function oi(){if(typeof window>"u")return null;return Tr(window.__piclawSettingsRequestedSection)}function jc(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),r=oi();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(i){console.debug("[settings-dialog-events] failed to clear open request flags",i)}return{open:n,section:r}}function Nc(n=typeof window<"u"?window:null){return n||null}function Fr(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function cr(n,r){return`${n}:${r}`}function Uc(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function Hc(n,r){if(n.length<=r)return;n.splice(0,n.length-r)}function zn(n){if(!n||typeof n!=="object")return null;return{...n}}function jn(n){if(!n)return null;return Wn.find((r)=>r.id===n)||null}function ti(n,r){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${r}`)}catch(i){console.debug("[app-perf] Ignoring performance.mark failure.",i,{traceId:n,phase:r})}}function Lc(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let r=jn(n);if(!r)return;for(let i of r.phases)performance.clearMarks(`piclaw:${n}:${i.phase}`)}catch(r){console.debug("[app-perf] Ignoring performance.clearMarks failure.",r,{traceId:n})}}function Mc(n,r,i){let c=Rn.get(cr(n,r));if(c&&jn(c)?.status==="active")ir(c,"cancelled","superseded",{replacementType:n,replacementChatJid:r});let o=Uc(n),t={id:o,type:n,chatJid:r,startedAt:Fr(),detail:zn(i),phases:[],status:"active"};return Wn.push(t),Hc(Wn,100),Rn.set(cr(n,r),o),ti(o,"start"),o}function ir(n,r,i,c,o){let t=jn(n);if(!t||t.status!=="active")return;if(i)t.phases.push({phase:i,at:Fr(),detail:zn(c)}),ti(t.id,i);if(t.status=r,t.completedAt=Fr(),t.durationMs=t.completedAt-t.startedAt,o!==void 0)t.error=o instanceof Error?o.message:String(o);let s=cr(t.type,t.chatJid);if(Rn.get(s)===t.id)Rn.delete(s);Lc(t.id)}function Pt(n=Nc()){let r=n?.__PICLAW_PERF__;if(r)return r;if(n)n.__PICLAW_PERF__=Kr;return Kr}function Cn(n=Nc()){return Pt(n)}function el(n,r,i){return Cn().ensureTrace(n,r,i)}function gl(n,r){return Cn().getActiveTraceId(n,r)}function pl(n,r,i){Cn().markTrace(n,r,i)}function $l(n,r,i="settled",c){let o=jn(n);if(!o||o.status!=="active")return!1;let t=new Set(o.phases.map((s)=>s.phase));if(!r.every((s)=>t.has(s)))return!1;return ir(n,"completed",i,c),!0}function wl(n,r,i="failed",c){Cn().failTrace(n,r,i,c)}function hl(n,r="cancelled",i){Cn().cancelTrace(n,r,i)}function si(n){return Cn().recordRequest(n)}var Wn,rr,Rn,Kr;var Gc=q(()=>{Wn=[],rr=[],Rn=new Map;Kr={startTrace(n,r,i){return Mc(n,r,i)},ensureTrace(n,r,i){let c=Rn.get(cr(n,r));if(c&&jn(c)?.status==="active")return c;return Mc(n,r,i)},getActiveTraceId(n,r){let i=Rn.get(cr(n,r));return i&&jn(i)?.status==="active"?i:null},markTrace(n,r,i){let c=jn(n);if(!c||c.status!=="active")return;c.phases.push({phase:r,at:Fr(),detail:zn(i)}),ti(c.id,r)},completeTrace(n,r="settled",i){ir(n,"completed",r,i)},failTrace(n,r,i="failed",c){ir(n,"failed",i,c,r)},cancelTrace(n,r="cancelled",i){ir(n,"cancelled",r,i)},recordRequest(n){let r=Uc("req");return rr.push({...n,id:r,detail:zn(n.detail)}),Hc(rr,300),r},getTraces(){return Wn.map((n)=>({...n,detail:zn(n.detail),phases:n.phases.map((r)=>({...r,detail:zn(r.detail)}))}))},getRequests(){return rr.map((n)=>({...n,detail:zn(n.detail)}))},clear(){Wn.forEach((n)=>Lc(n.id)),Wn.splice(0,Wn.length),rr.splice(0,rr.length),Rn.clear()},printSummary(){let n={traces:Kr.getTraces(),requests:Kr.getRequests()};return console.table(n.traces.map((r)=>({id:r.id,type:r.type,chatJid:r.chatJid,status:r.status,durationMs:Number(r.durationMs||0).toFixed(1),lastPhase:r.phases[r.phases.length-1]?.phase||"start"}))),n}}});function qn(n){let r=Number(n||0);return Number.isFinite(r)&&r>0?r:null}function Vt(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function At(n){let r=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(r)}function Pc(n){let r=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(r)}function Vc(n=typeof window<"u"?window:null){let r=qn(n?.innerWidth)??qn(n?.screen?.availWidth)??qn(n?.screen?.width)??0,i=qn(n?.innerHeight)??qn(n?.screen?.availHeight)??qn(n?.screen?.height)??0,c=r&&i?Math.min(r,i):r||i,o=r&&i?Math.max(r,i):r||i,t=Vt(n),s=Number(n?.navigator?.maxTouchPoints||0),_=t||s>1;if(c>0&&c<=640)return"mobile";if(At(n)&&!Pc(n))return"mobile";if(Pc(n))return"tablet";if(_&&c>0&&c<=1100)return"tablet";if(o>0&&o<=1180&&c>0&&c<=900)return"tablet";return"desktop"}var nu={};rn(nu,{uploadWorkspaceFile:()=>Ds,uploadMedia:()=>vs,updateWorkspaceFile:()=>Vs,updateScheduledTask:()=>li,submitAdaptiveCardAction:()=>Bs,streamSidePrompt:()=>ds,stopSessionRecording:()=>gi,stopAutoresearch:()=>ps,steerAgentQueueItem:()=>ys,startSessionRecording:()=>ei,setWorkspaceVisibility:()=>Es,setAgentThoughtVisibility:()=>Ks,sessionRecordingPlaybackUrl:()=>$i,sessionRecordingExportUrl:()=>or,sendPeerAgentMessage:()=>ts,sendAgentMessage:()=>pn,searchPosts:()=>qt,saveWorkspaceSettings:()=>vi,saveWebPushSubscription:()=>us,saveUiState:()=>hi,saveQuickActionsSettings:()=>bi,savePostAnnotations:()=>ms,saveEnvironmentOverride:()=>Wr,restoreChatBranch:()=>os,respondToAgentRequest:()=>ks,reorderAgentQueueItem:()=>xs,renameWorkspaceFile:()=>Ys,renameChatJid:()=>cs,renameChatBranch:()=>mt,removeAgentQueueItem:()=>hs,reindexWorkspace:()=>Ls,purgeChatBranch:()=>is,pruneChatBranch:()=>rs,previewSessionRecordingRedaction:()=>wi,moveWorkspaceEntry:()=>Os,mergeChatBranchIntoParent:()=>ns,getWorkspaceTree:()=>Ns,getWorkspaceRawUrl:()=>Xc,getWorkspaceIndexStatus:()=>Hs,getWorkspaceFileStat:()=>Ps,getWorkspaceFileDownloadUrl:()=>Ss,getWorkspaceFile:()=>Gs,getWorkspaceDownloadUrl:()=>as,getWorkspaceBranch:()=>Us,getWebPushPublicKey:()=>ss,getTimeline:()=>Qt,getThumbnailUrl:()=>Ws,getThread:()=>It,getSystemMetrics:()=>Dt,getSessionRecordings:()=>fi,getSessionRecording:()=>zr,getScheduledTasks:()=>_i,getQuickActionsSettings:()=>xi,getPostsByHashtag:()=>Ct,getMediaUrl:()=>zs,getMediaText:()=>js,getMediaInfo:()=>Rs,getMediaBlob:()=>Ms,getEnvironmentSettings:()=>ki,getChatBranches:()=>Et,getAutoresearchStatus:()=>gs,getAgents:()=>ls,getAgentThought:()=>Fs,getAgentStatus:()=>fs,getAgentQueueState:()=>ws,getAgentModels:()=>Bi,getAgentContext:()=>es,getAgentCommands:()=>yi,getActiveChatAgents:()=>Jt,forkChatBranch:()=>St,dismissAutoresearch:()=>$s,deleteWorkspaceFile:()=>Js,deleteWebPushSubscription:()=>_s,deleteSessionRecording:()=>pi,deletePost:()=>Ot,createWorkspaceFile:()=>Zs,createRootChatSession:()=>at,createReply:()=>Yt,createPost:()=>Zt,completeInstanceOobe:()=>bs,attachWorkspaceFile:()=>As,addToWhitelist:()=>Ts,SSEClient:()=>Qc});async function H(n,r={}){let i=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),c;try{c=await fetch(S+n,{...r,headers:{"Content-Type":"application/json",...r.headers}})}catch(t){throw si({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i,ok:!1,detail:{failedBeforeResponse:!0}}),t}let o=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-i;if(si({method:String(r.method||"GET").toUpperCase(),url:n,startedAt:i,durationMs:o,status:c.status,ok:c.ok,requestId:c.headers?.get?.("x-request-id")||null,serverTiming:c.headers?.get?.("Server-Timing")||null}),!c.ok){let t=await c.json().catch(()=>({error:"Unknown error"}));throw Error(t.error||`HTTP ${c.status}`)}return c.json()}function Ac(n){let r=String(n||"").split(`
`),i="message",c=[];for(let t of r)if(t.startsWith("event:"))i=t.slice(6).trim()||"message";else if(t.startsWith("data:"))c.push(t.slice(5).trim());let o=c.join(`
`);if(!o)return null;try{return{event:i,data:JSON.parse(o)}}catch{return{event:i,data:o}}}async function Xt(n,r){if(!n.body)throw Error("Missing event stream body");let i=n.body.getReader(),c=new TextDecoder,o="";while(!0){let{value:s,done:_}=await i.read();if(_)break;o+=c.decode(s,{stream:!0});let l=o.split(`

`);o=l.pop()||"";for(let e of l){let x=Ac(e);if(x)r(x.event,x.data)}}o+=c.decode();let t=Ac(o);if(t)r(t.event,t.data)}async function Qt(n=10,r=null,i=null){let c=`/timeline?limit=${n}`;if(r)c+=`&before=${r}`;if(i)c+=`&chat_jid=${encodeURIComponent(i)}`;return H(c)}async function Ct(n,r=50,i=0,c=null){let o=c?`&chat_jid=${encodeURIComponent(c)}`:"";return H(`/hashtag/${encodeURIComponent(n)}?limit=${r}&offset=${i}${o}`)}async function qt(n,r=50,i=0,c=null,o="current",t=null,s=null){let _=c?`&chat_jid=${encodeURIComponent(c)}`:"",l=o?`&scope=${encodeURIComponent(o)}`:"",e=t?`&root_chat_jid=${encodeURIComponent(t)}`:"",x=s?.images?"&images=1":"",f=s?.attachments?"&attachments=1":"";return H(`/search?q=${encodeURIComponent(n)}&limit=${r}&offset=${i}${_}${l}${e}${x}${f}`)}async function It(n,r=null){let i=r?`?chat_jid=${encodeURIComponent(r)}`:"";return H(`/thread/${n}${i}`)}async function Dt(){return H("/agent/system-metrics")}async function _i(n={}){let r=new URLSearchParams;if(n?.id)r.set("id",String(n.id));if(n?.chatJid)r.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")r.set("status",String(n.status));if(n?.limit)r.set("limit",String(n.limit));if(n?.includeRunLogs)r.set("include_run_logs","1");if(n?.runLogLimit)r.set("run_log_limit",String(n.runLogLimit));let i=r.toString()?`?${r.toString()}`:"";return H(`/agent/scheduled-tasks${i}`)}async function li(n,r,i={}){return H("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:r,allow_internal:i?.allowInternal===!0})})}async function fi(){return H("/agent/recordings")}async function zr(n){return H(`/agent/recordings/${encodeURIComponent(n)}`)}async function ei(n={}){return H("/agent/recordings/start",{method:"POST",body:JSON.stringify(n||{})})}async function gi(n={}){return H("/agent/recordings/stop",{method:"POST",body:JSON.stringify(n||{})})}async function pi(n){return H(`/agent/recordings/${encodeURIComponent(n)}`,{method:"DELETE"})}function or(n,r="json"){return`/agent/recordings/${encodeURIComponent(n)}/export?format=${encodeURIComponent(r)}`}function $i(n){return`/recordings/playback?id=${encodeURIComponent(n)}`}async function wi(n,r={}){return H("/agent/recordings/redact-preview",{method:"POST",body:JSON.stringify({payload:n,...r})})}async function hi(n){return H("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function Zt(n,r=[],i=null){let c=i?`?chat_jid=${encodeURIComponent(i)}`:"";return H(`/post${c}`,{method:"POST",body:JSON.stringify({content:n,media_ids:r})})}async function Yt(n,r,i=[],c=null){let o=c?`?chat_jid=${encodeURIComponent(c)}`:"";return H(`/post/reply${o}`,{method:"POST",body:JSON.stringify({thread_id:n,content:r,media_ids:i})})}async function Ot(n,r=!1,i=null){let c=i?`&chat_jid=${encodeURIComponent(i)}`:"",o=`/post/${n}?cascade=${r?"true":"false"}${c}`;return H(o,{method:"DELETE"})}async function pn(n,r,i=null,c=[],o=null,t=null){let s=t?`?chat_jid=${encodeURIComponent(t)}`:"",_={content:r,thread_id:i,media_ids:c,client_context:{screen_hint:Vc()}};if(o==="auto"||o==="queue"||o==="steer")_.mode=o;return H(`/agent/${n}/message${s}`,{method:"POST",body:JSON.stringify(_)})}async function yi(n="web:default"){let r=typeof n==="string"&&n.trim()?n.trim():"web:default";return H(`/agent/commands?chat_jid=${encodeURIComponent(r)}`)}async function xi(){return H("/agent/settings/quick-actions")}async function bi(n){return H("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function vi(n){return H("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function ki(){return H("/agent/settings/environment")}async function Wr(n){return H("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Jt(){return H("/agent/active-chats")}async function Et(n=null,r={}){let i=new URLSearchParams;if(n)i.set("root_chat_jid",String(n));if(r?.includeArchived)i.set("include_archived","1");let c=i.toString()?`?${i.toString()}`:"";return H(`/agent/branches${c}`)}async function St(n,r={}){return H("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...r?.agentName?{agent_name:r.agentName}:{}})})}async function at(n){return H("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function mt(n,r={}){return H("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function ns(n){return H("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function rs(n){return H("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function is(n){return H("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function cs(n,r){return H("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:r})})}async function os(n,r={}){return H("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...r&&Object.prototype.hasOwnProperty.call(r,"agentName")?{agent_name:r.agentName}:{}})})}async function ts(n,r,i,c="auto",o={}){let t={source_chat_jid:n,content:i,mode:c,...o?.sourceAgentName?{source_agent_name:o.sourceAgentName}:{},...o?.targetBy==="agent_name"?{target_agent_name:r}:{target_chat_jid:r}};return H("/agent/peer-message",{method:"POST",body:JSON.stringify(t)})}async function ss(){return H("/agent/push/vapid-public-key")}async function us(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return H("/agent/push/subscription",{method:"POST",body:JSON.stringify(i)})}async function _s(n,r={}){let i={subscription:n,...r?.deviceId?{device_id:r.deviceId}:{}};return H("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(i)})}async function ls(){return H("/agent/roster")}async function fs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/status${r}`)}async function es(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/context${r}`)}async function gs(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/autoresearch/status${r}`)}async function ps(n=null,r={}){return H("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:r?.generateReport!==!1})})}async function $s(n=null){return H("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function ws(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/queue-state${r}`)}async function hs(n,r=null){let i=await fetch(S+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function ys(n,r=null){let i=await fetch(S+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:r||void 0})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function xs(n,r,i=null){let c=await fetch(S+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:r,chat_jid:i||void 0})});if(!c.ok){let o=await c.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(o.error||`HTTP ${c.status}`)}return c.json()}async function Bi(n=null){let r=n?`?chat_jid=${encodeURIComponent(n)}`:"";return H(`/agent/models${r}`)}async function bs(n="provider-ready"){return H("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function vs(n){let r=new FormData;r.append("file",n);let i=await fetch(S+"/media/upload",{method:"POST",body:r});if(!i.ok){let c=await i.json().catch(()=>({error:"Upload failed"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function ks(n,r,i=null){let c=await fetch(S+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:r,chat_jid:i||void 0})});if(!c.ok){let o=await c.json().catch(()=>({error:"Failed to respond"}));throw Error(o.error||`HTTP ${c.status}`)}return c.json()}async function Bs(n){let r=await fetch(S+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok){let i=await r.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(i.error||`HTTP ${r.status}`)}return r.json()}async function ds(n,r={}){let i=await fetch(S+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:r.systemPrompt||void 0,chat_jid:r.chatJid||void 0}),signal:r.signal});if(!i.ok){let t=await i.json().catch(()=>({error:"Side prompt failed"}));throw Error(t.error||`HTTP ${i.status}`)}let c=null,o=null;if(await Xt(i,(t,s)=>{if(r.onEvent?.(t,s),t==="side_prompt_thinking_delta")r.onThinkingDelta?.(s?.delta||"");else if(t==="side_prompt_text_delta")r.onTextDelta?.(s?.delta||"");else if(t==="side_prompt_done")c=s;else if(t==="side_prompt_error")o=s}),o){let t=Error(o?.error||"Side prompt failed");throw t.payload=o,t}return c}async function Ts(n,r){let i=await fetch(S+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(c.error||`HTTP ${i.status}`)}return i.json()}async function Fs(n,r="thought"){let i=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(r)}`;return H(i)}async function Ks(n,r,i){return H("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:r,expanded:Boolean(i)})})}function zs(n){return`${S}/media/${n}`}function Ws(n){return`${S}/media/${n}/thumbnail`}async function Rs(n){let r=await fetch(`${S}/media/${n}/info`);if(!r.ok)throw Error("Failed to get media info");return r.json()}async function js(n){let r=await fetch(`${S}/media/${n}`);if(!r.ok)throw Error("Failed to load media text");return r.text()}async function Ms(n){let r=await fetch(`${S}/media/${n}`);if(!r.ok)throw Error("Failed to load media blob");return r.blob()}async function Ns(n="",r=2,i=!1){let c=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${r}&show_hidden=${i?"1":"0"}`;return H(c)}async function Us(n=""){let r=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return H(r)}async function Hs(n="all"){let r=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return H(r)}async function Ls(n="all"){return H("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function Gs(n,r=20000,i=null){let c=i?`&mode=${encodeURIComponent(i)}`:"",o=`/workspace/file?path=${encodeURIComponent(n)}&max=${r}${c}`;return H(o)}async function Ps(n){return H(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function Vs(n,r){return H("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:r})})}async function As(n){return H("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function Qs(n,r="",i={}){let c=new URLSearchParams;if(r)c.set("path",r);if(i.overwrite)c.set("overwrite","1");let o=c.toString();return o?`${n}?${o}`:n}function Cs(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function qs(n,r,i,c){return new Promise((o,t)=>{let s=new XMLHttpRequest;s.open("POST",S+r);for(let[_,l]of Object.entries(i||{}))if(l!==void 0&&l!==null)s.setRequestHeader(_,String(l));s.upload.onprogress=(_)=>{if(typeof c==="function")c({loaded:_.lengthComputable?_.loaded:0,total:_.lengthComputable?_.total:n.size,lengthComputable:_.lengthComputable})},s.onload=()=>{try{let _=s.responseText?JSON.parse(s.responseText):{};if(s.status>=200&&s.status<300)o(_);else{let l=Error(_.error||`HTTP ${s.status}`);l.status=s.status,l.code=_.code,t(l)}}catch{let _=Error(`HTTP ${s.status}`);_.status=s.status,t(_)}},s.onerror=()=>t(Error("Upload failed (network error)")),s.ontimeout=()=>t(Error("Upload timed out")),s.send(n)})}async function Is(n,r="",i={}){let c=Cs(),o=Qs("/workspace/upload-chunk",r,i),t=Math.max(1,Math.min(ui,Number(i.chunkSize)||Xs)),s=Math.max(0,Number(n?.size)||0),_=Math.max(1,Math.ceil(s/t)),l=0,e=null;for(let x=0;x<_;x+=1){let f=x*t,b=Math.min(s,f+t),h=n.slice(f,b),y=h.size;if(e=await qs(h,o,{"X-Upload-Id":c,"X-Chunk-Index":x,"X-Chunk-Total":_,"X-File-Name":n?.name||"upload.bin","X-File-Size":s},(B)=>{if(typeof i.onProgress!=="function")return;let $=Math.min(s,l+(B?.loaded||0)),v=s||1;i.onProgress({loaded:$,total:v,percent:Math.round($/v*100),chunkIndex:x,chunkTotal:_})}),l+=y,typeof i.onProgress==="function"){let B=s||1,$=s?l:B;i.onProgress({loaded:$,total:B,percent:Math.round($/B*100),chunkIndex:x+1,chunkTotal:_})}}return e}async function Ds(n,r="",i={}){if(n?.size>ui){let c=(n.size/1048576).toFixed(0),o=(ui/1048576).toFixed(0),t=Error(`File too large (${c} MB). Maximum upload size is ${o} MB.`);throw t.code="file_too_large",t}return await Is(n,r,i)}async function Zs(n,r,i=""){let c=await fetch(S+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r,content:i})});if(!c.ok){let o=await c.json().catch(()=>({error:"Create failed"})),t=Error(o.error||`HTTP ${c.status}`);throw t.status=c.status,t.code=o.code,t}return c.json()}async function Ys(n,r){let i=await fetch(S+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Rename failed"})),o=Error(c.error||`HTTP ${i.status}`);throw o.status=i.status,o.code=c.code,o}return i.json()}async function Os(n,r){let i=await fetch(S+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:r})});if(!i.ok){let c=await i.json().catch(()=>({error:"Move failed"})),o=Error(c.error||`HTTP ${i.status}`);throw o.status=i.status,o.code=c.code,o}return i.json()}async function Js(n){let r=`/workspace/file?path=${encodeURIComponent(n||"")}`;return H(r,{method:"DELETE"})}async function Es(n,r=!1){return H("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(r)})})}function Xc(n,r={}){let i=new URLSearchParams({path:String(n||"")});if(r.download)i.set("download","1");return`${S}/workspace/raw?${i.toString()}`}function Ss(n){return Xc(n,{download:!0})}function as(n,r=!1){let i=`path=${encodeURIComponent(n||"")}&show_hidden=${r?"1":"0"}`;return`${S}/workspace/download?${i}`}class Qc{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,r,i={}){this.onEvent=n,this.onStatusChange=r,this.chatJid=typeof i?.chatJid==="string"&&i.chatJid.trim()?i.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(S+"/sse/stream"+n);let r=(i)=>{this.eventSource.addEventListener(i,(c)=>{this.markActivity(),this.onEvent(i,JSON.parse(c.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),r("new_post"),r("new_reply"),r("agent_response"),r("interaction_updated"),r("interaction_deleted"),r("agent_status"),r("agent_steer_queued"),r("agent_followup_queued"),r("agent_followup_consumed"),r("agent_followup_removed"),r("workspace_update"),r("agent_draft"),r("agent_draft_delta"),r("agent_thought"),r("agent_thought_delta"),r("model_changed"),r("ui_theme"),r("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(r)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,r=60000,i=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,i+r),this.reconnectAttempts=0;let c=Math.max(this.cooldownUntil-i,0),o=Math.max(this.reconnectDelay,c);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},o),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}async function ms(n,r,i){let c=i?`?chat_jid=${encodeURIComponent(i)}`:"",o=await fetch(`${S}/post/${n}/annotations${c}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:r})});if(!o.ok){let t=await o.text().catch(()=>"");throw Error(`Failed to save annotations: ${o.status} ${t}`)}}var S="",ui=1073741824,Xs=8388608;var $n=q(()=>{Gc()});function In(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function tn(n,r){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,r)}catch{return}}function di(n,r=!1){let i=In(n);if(i===null)return r;return i==="true"}function Ti(n,r=null){let i=In(n);if(i===null)return r;let c=parseInt(i,10);return Number.isFinite(c)?c:r}function Cc(n){let r=In(n);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function iu(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(jr,{detail:{enabled:Boolean(n)}}))}function Dc(n){if(typeof fetch!=="function")return;hi({ui_meters:n}).catch((r)=>{console.debug("[meters] Failed to persist meters UI state.",r)})}function cu(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(ru,{detail:{collapsed:Boolean(n)}}))}function Fi(n=!1){return di(qc,n)}function Tl(n=!1){return di(Ic,n)}function Rr(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,o=Boolean(n);if(i)tn(qc,o?"true":"false");if(c)Dc({enabled:o});return iu(o),o}function ou(n,r={}){let i=r.persist!==!1,c=r.persistServer!==!1,o=Boolean(n);if(i)tn(Ic,o?"true":"false");if(c)Dc({collapsed:o});return cu(o),o}function Fl(n){let r=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")Rr(Boolean(n.enabled),{persistServer:!1});else if(r==="toggle"){let i=!Fi(!1);Rr(i,{persistServer:!1})}if(typeof n?.collapsed==="boolean")ou(Boolean(n.collapsed),{persistServer:!1})}var qc="piclaw_system_meters_enabled",Ic="piclaw_system_meters_collapsed",jr="piclaw-meters-change",ru="piclaw-meters-collapsed-change";var Zc=q(()=>{$n()});function Yc(n,r){if(n===""||n===null||n===void 0)return r;let i=Number(n);return Number.isFinite(i)?i:r}function Oc(n,{min:r=-1/0,max:i=1/0}={}){let c=Number.isFinite(Number(r))?Number(r):-1/0,o=Number.isFinite(Number(i))?Number(i):1/0;return Math.min(o,Math.max(c,Number(n)))}function wn(n,{fallback:r=0,min:i=-1/0,max:c=1/0}={}){let o=Yc(n,r);return Oc(o,{min:i,max:c})}function tu(n,{direction:r=1,step:i=1,fallback:c=0,min:o=-1/0,max:t=1/0}={}){let s=wn(n,{fallback:c,min:o,max:t}),_=Math.abs(Yc(i,1))||1,l=Number(r)<0?-1:1;return Oc(s+l*_,{min:o,max:t})}function a({value:n,min:r,max:i,step:c=1,fallback:o,width:t="80px",disabled:s=!1,label:_,onChange:l}){let e=Number.isFinite(Number(o))?Number(o):wn(n,{fallback:0,min:r,max:i}),[x,f]=g(String(n??e)),b=C(!1);L(()=>{if(!b.current)f(String(n??e))},[n,e]);let h=z((B)=>{b.current=!1;let $=wn(B,{fallback:e,min:r,max:i});f(String($)),l?.($)},[e,r,i,l]),y=z((B)=>{b.current=!1;let $=tu(n,{direction:B,step:c,fallback:e,min:r,max:i});f(String($)),l?.($)},[e,i,r,l,c,n]);return u`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${_||"value"}`}
                title=${`Decrease ${_||"value"}`}
                disabled=${s}
                onClick=${()=>y(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${x}
                disabled=${s}
                style=${`width:${t}`}
                onInput=${(B)=>{b.current=!0,f(B.target.value)}}
                onBlur=${(B)=>h(B.target.value)}
                onKeyDown=${(B)=>{if(B.key==="Enter")B.preventDefault(),h(B.target.value),B.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${_||"value"}`}
                title=${`Increase ${_||"value"}`}
                disabled=${s}
                onClick=${()=>y(1)}
            >+</button>
        </span>
    `}var Mn=q(()=>{E()});function Jc(n){let r=String(n||"").trim();if(!r)return"";if(r.startsWith("http://")||r.startsWith("https://")||r.startsWith("data:")||r.startsWith("blob:"))return r;if(r.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(r.slice(11))}`;if(r.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(r))return"";if(r.startsWith("\\\\"))return"";if(r.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(r.replace(/^\.\//,""))}`}function Ec({value:n,onChange:r}){let i=C(null),[c,o]=g(Jc(n));L(()=>{o(Jc(n))},[n]);let t=z((s)=>{let _=s.target.files?.[0];if(!_)return;let l=new FileReader;l.onload=()=>{let e=l.result;o(e),r?.(e)},l.readAsDataURL(_)},[r]);return u`
        <div class="settings-avatar-inline" onClick=${()=>i.current?.click()} title="Click to upload">
            ${c?u`<img src=${c} alt="avatar" />`:u`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${i} style="display:none" onChange=${t} />
        </div>
    `}function Sc(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}async function su(n,r={}){let i=typeof n==="string"?n:"";if(!i)return!1;let c=r.navigator??(typeof navigator<"u"?navigator:null),o=r.document??(typeof document<"u"?document:null);if(c?.clipboard?.writeText)try{return await c.clipboard.writeText(i),!0}catch(t){}try{if(!o?.body||typeof o.createElement!=="function"||typeof o.execCommand!=="function")return!1;let t=o.createElement("textarea");t.value=i,t.setAttribute?.("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",o.body.appendChild(t),t.focus?.(),t.select?.();let s=Boolean(o.execCommand("copy"));return o.body.removeChild(t),s}catch(t){return!1}}function Ki({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(""),[t,s]=g(""),[_,l]=g(""),[e,x]=g(""),[f,b]=g(32),[h,y]=g(256),[B,$]=g(""),[v,F]=g(!1),[N,d]=g(!1),[j,k]=g(!1),[R,G]=g(()=>Fi(!1)),[p,W]=g(!1),T=C(""),w=C(null),M=C(!0);L(()=>{return M.current=!0,()=>{M.current=!1}},[]);let P=z((D)=>{let I=Sc(D);o(I.userName),s(I.userAvatar),l(I.assistantName),x(I.assistantAvatar),b(I.composeUploadLimitMb),y(I.workspaceUploadLimitMb),$(D?.widgetToken||""),T.current=JSON.stringify(I)},[]);L(()=>{P(n||{})},[n,P]),L(()=>{let D=(I)=>{G(Boolean(I?.detail?.enabled))};return window.addEventListener(jr,D),()=>window.removeEventListener(jr,D)},[]);let V=Q(()=>JSON.stringify(Sc({userName:c,userAvatar:t,assistantName:_,assistantAvatar:e,composeUploadLimitMb:f,workspaceUploadLimitMb:h})),[c,t,_,e,f,h]);L(()=>{if(V===T.current)return;if(w.current)clearTimeout(w.current);return w.current=setTimeout(async()=>{if(!M.current)return;let D=document.activeElement;if(D&&D.closest?.(".settings-number-stepper"))return;try{let I=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:V}),Tn=await I.json().catch(()=>({}));if(!M.current)return;if(!I.ok||!Tn?.ok||!Tn?.settings)return;T.current=V,i?.(Tn.settings),W(!0),setTimeout(()=>{if(M.current)W(!1)},4000)}catch(I){console.warn("[settings/general] Failed to persist general settings snapshot.",I)}},800),()=>{if(w.current)clearTimeout(w.current)}},[V,i]);let A=n?.instanceTotp||{configured:!1,issuer:_||"Piclaw",label:c?`${_||"Piclaw"}:${c}`:_||"Piclaw",secret:"",otpauth:"",qrSvg:""},m=z(async()=>{if(!B)return;if(await su(B))d(!0),setTimeout(()=>{if(M.current)d(!1)},3000);else r?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[B,r]),on=z(async()=>{if(j)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;k(!0);try{let D=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),I=await D.json().catch(()=>({}));if(!D.ok||!I?.ok||!I?.settings)throw Error(I?.error||"Failed to regenerate widget token.");$(I.settings.widgetToken||""),i?.(I.settings),W(!0),setTimeout(()=>{if(M.current)W(!1)},4000)}catch(D){console.warn("[settings/general] Failed to regenerate widget token.",D)}finally{if(M.current)k(!1)}},[j,i]),dn=typeof window<"u"&&window.isSecureContext,Ln=B?"•".repeat(Math.min(Math.max(B.length,16),48)):"—",Gn=v?B||"—":Ln;return u`
        <div class="settings-section">
            ${p&&u`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${Ec} value=${t} onChange=${s} />
                <input type="text" value=${c} onInput=${(D)=>o(D.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${Ec} value=${e} onChange=${x} />
                <input type="text" value=${_} onInput=${(D)=>l(D.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${dn?u`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:u`
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
                    <input type="checkbox" checked=${R}
                        onChange=${()=>{let D=Rr(!R);G(D)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${a}
                    label="compose upload limit"
                    value=${f}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${b}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${a}
                    label="workspace upload limit"
                    value=${h}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${y}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Gn}</code>
                        <button class=${`settings-keychain-reveal-btn${v?" active":""}`}
                            type="button"
                            onClick=${()=>F((D)=>!D)}
                            disabled=${!B}
                            title=${v?"Hide token":"Reveal token"}>
                            ${v?u`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:u`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${m} disabled=${!B} title="Copy token">
                            ${N?u`<span class="settings-widget-token-copied">Copied</span>`:u`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${on} disabled=${j}>${j?"Regenerating…":"Regenerate"}</button>
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
                            ${A.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${A.configured?u`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:A.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${A.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${A.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${A.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var ac=q(()=>{E();Zc();Mn()});var no={};rn(no,{SessionsSection:()=>uu});function mc(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function uu({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(!0),[t,s]=g(16),[_,l]=g(4000),[e,x]=g(3),[f,b]=g(64),[h,y]=g("none"),[B,$]=g(!1),v=C(""),F=C(null),N=C(!0);L(()=>{return N.current=!0,()=>{N.current=!1}},[]);let d=z((k)=>{let R=mc(k);o(R.sessionAutoRotate),s(R.sessionMaxSizeMb),l(R.sessionMaxLines),x(R.sessionMaxCompactions),b(R.toolUseBudget),y(R.sessionIsolation),v.current=JSON.stringify(R)},[]);L(()=>{d(n||{})},[n,d]);let j=Q(()=>JSON.stringify(mc({sessionAutoRotate:c,sessionMaxSizeMb:t,sessionMaxLines:_,sessionMaxCompactions:e,toolUseBudget:f,sessionIsolation:h})),[c,t,_,e,f,h]);return L(()=>{if(j===v.current)return;if(F.current)clearTimeout(F.current);return F.current=setTimeout(async()=>{if(!N.current)return;let k=document.activeElement;if(k&&k.closest?.(".settings-number-stepper"))return;try{let R=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:j}),G=await R.json().catch(()=>({}));if(!N.current)return;if(!R.ok||!G?.ok||!G?.settings)return;v.current=j,i?.(G.settings),$(!0),setTimeout(()=>{if(N.current)$(!1)},4000)}catch(R){console.warn("[settings/sessions] Failed to persist session settings.",R)}},800),()=>{if(F.current)clearTimeout(F.current)}},[j,i]),u`
        <div class="settings-section">
            ${B&&u`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${c} onChange=${(k)=>o(k.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${a}
                    label="max session size"
                    value=${t}
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
                <${a}
                    label="tool use budget"
                    value=${f}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${b}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${h} onChange=${(k)=>y(k.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var ro=q(()=>{E();Mn()});var io={};rn(io,{__recordingsSettingsTest:()=>eu,RecordingsSection:()=>fu});function Nr(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function zi(n){if(n==="full")return"full / trusted";if(n==="metadata")return"metadata only";return"redacted"}function Mr({children:n,type:r="neutral"}){return u`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function _u(){if(typeof window>"u")return"web:default";return String(window.__piclawCurrentChatJid||"web:default")}function tr(n){return String(n||"").split(`
`).map((r)=>r.trim()).filter(Boolean)}function lu({recording:n,details:r,onDelete:i,onRefresh:c}){if(!n)return u`<div class="settings-task-detail-empty">Select a recording to inspect, replay, export, or delete it.</div>`;let o=r?.meta||n,t=Array.isArray(r?.events)?r.events:[],s=t.reduce((l,e)=>l+(Array.isArray(e.redactions)?e.redactions.length:0),0),_=t.reduce((l,e)=>{let x=e.kind||"event";return l[x]=(l[x]||0)+1,l},{});return u`
        <div class="settings-task-detail settings-recording-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${o.title||o.id}</h4>
                    <code>${o.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    <button onClick=${()=>window.open($i(o.id),"_blank","noopener,noreferrer")}>Playback</button>
                    <button onClick=${c}>Refresh</button>
                    <button class="danger" onClick=${()=>i(o)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${o.status||"—"}</strong>
                <span>Mode</span><strong>${zi(o.mode)}</strong>
                <span>Chat</span><code>${o.chatJid||"—"}</code>
                <span>Started</span><strong>${Nr(o.startedAt)}</strong>
                <span>Ended</span><strong>${Nr(o.endedAt)}</strong>
                <span>Events</span><strong>${o.eventCount??t.length}</strong>
                <span>Redactions</span><strong>${s}</strong>
            </div>
            <div class="settings-recording-export-row">
                <a href=${or(o.id,"json")}>Export JSON</a>
                <a href=${or(o.id,"jsonl")}>Export JSONL</a>
                <a href=${or(o.id,"html")}>Export standalone HTML</a>
            </div>
            <h4>Event summary</h4>
            ${t.length===0&&u`<p class="settings-hint">Open or refresh details to inspect trace events.</p>`}
            ${t.length>0&&u`
                <div class="settings-recording-event-summary">
                    ${Object.entries(_).map(([l,e])=>u`<${Mr}>${l}: ${e}<//>`)}
                </div>
                <div class="settings-task-command-block">
                    <strong>First events</strong>
                    <pre>${JSON.stringify(t.slice(0,5),null,2)}</pre>
                </div>
            `}
        </div>
    `}function fu({filter:n="",setStatus:r}){let[i,c]=g([]),[o,t]=g([]),[s,_]=g(!0),[l,e]=g(null),[x,f]=g(null),[b,h]=g(null),[y,B]=g(!1),[$,v]=g(_u),[F,N]=g(""),[d,j]=g("redacted"),[k,R]=g(!0),[G,p]=g(""),[W,T]=g(""),[w,M]=g('{"Authorization":"Bearer abc1234567890","content":"hello"}'),[P,V]=g(null);L(()=>{let U=(O)=>{let cn=String(O?.detail?.chatJid||"").trim();if(cn)v(cn)};return window.addEventListener("piclaw:current-chat-changed",U),()=>window.removeEventListener("piclaw:current-chat-changed",U)},[]);let A=z(async(U=x)=>{_(!0),e(null);try{let O=await fi(),cn=O.recordings||[];c(cn),t(O.active||[]);let xn=cn.find((K)=>K.id===U)||cn[0]||null;if(f(xn?.id||null),xn?.id)h(await zr(xn.id));else h(null)}catch(O){e(O?.message||"Failed to load recordings.")}finally{_(!1)}},[x]);L(()=>{A()},[A]);let m=Q(()=>i.find((U)=>U.id===x)||null,[i,x]),on=Q(()=>o.find((U)=>U.chatJid===$)||null,[o,$]),dn=String(n||"").trim().toLowerCase(),Ln=Q(()=>{if(!dn)return i;return i.filter((U)=>[U.id,U.title,U.chatJid,U.status,U.mode].some((O)=>String(O||"").toLowerCase().includes(dn)))},[i,dn]),Gn=z(async(U)=>{if(f(U?.id||null),h(null),!U?.id)return;try{h(await zr(U.id))}catch(O){r?.(O?.message||"Failed to load recording.","error")}},[r]),D=z(async()=>{if(y)return;B(!0);try{let U={keys:tr(G),patterns:tr(W)},O=await ei({chat_jid:$,title:F||void 0,mode:d,include_timeline_snapshot:k,timeline_snapshot_limit:80,redaction:U});r?.(`Recording started for ${$}.`,"success"),await A(O?.recording?.id)}catch(U){r?.(U?.message||"Failed to start recording.","error")}finally{B(!1)}},[y,$,G,W,k,A,d,r,F]),I=z(async(U=on)=>{if(!U||y)return;B(!0);try{let O=await gi({id:U.id});r?.(`Recording stopped for ${U.chatJid}.`,"success"),await A(O?.recording?.id)}catch(O){r?.(O?.message||"Failed to stop recording.","error")}finally{B(!1)}},[y,on,A,r]),Tn=z(async(U)=>{if(!U||y)return;if(!window.confirm(`Delete recording ${U.id}?

${U.title||""}`))return;B(!0);try{await pi(U.id),r?.("Recording deleted.","success"),await A(null)}catch(O){r?.(O?.message||"Failed to delete recording.","error")}finally{B(!1)}},[y,A,r]),er=z(async()=>{try{let U=JSON.parse(w||"null"),O=await wi(U,{mode:d,redaction:{keys:tr(G),patterns:tr(W)}});V(O.preview)}catch(U){V({error:U?.message||"Preview failed."})}},[G,W,d,w]);return u`
        <div class="settings-section settings-recordings-section">
            <div class="settings-recording-start-card">
                <h3>Session Recording</h3>
                <p class="settings-hint">Opt-in trace capture for deterministic playback and screen-recording exports. Playback never calls live agent or tool endpoints.</p>
                <div class="settings-recording-form-grid">
                    <label>Chat JID<input value=${$} onInput=${(U)=>v(U.target.value)} /></label>
                    <label>Title<input placeholder="Demo recording" value=${F} onInput=${(U)=>N(U.target.value)} /></label>
                    <label>Mode<select value=${d} onChange=${(U)=>j(U.target.value)}><option value="redacted">Redacted</option><option value="metadata">Metadata only</option><option value="full">Full / trusted local</option></select></label>
                    <label class="settings-recording-checkbox"><input type="checkbox" checked=${k} onChange=${(U)=>R(U.target.checked)} /> Include timeline snapshot</label>
                </div>
                <div class="settings-recording-form-grid settings-recording-redaction-grid">
                    <label>Extra redacted keys<textarea rows="2" placeholder="customer_id\ninternal_code" value=${G} onInput=${(U)=>p(U.target.value)} /></label>
                    <label>Extra regex patterns<textarea rows="2" placeholder="ACME-[0-9]+" value=${W} onInput=${(U)=>T(U.target.value)} /></label>
                </div>
                <div class="settings-task-detail-actions">
                    ${on?u`<button onClick=${()=>I(on)} disabled=${y}>Stop current chat recording</button>`:u`<button onClick=${D} disabled=${y}>Start recording</button>`}
                    <button onClick=${()=>A()} disabled=${s}>Refresh</button>
                </div>
                ${o.length>0&&u`<div class="settings-recording-active-row">${o.map((U)=>u`<${Mr} type="active">REC ${U.chatJid}<//>`)}</div>`}
            </div>

            <details class="settings-recording-preview">
                <summary>Redaction preview</summary>
                <textarea rows="4" value=${w} onInput=${(U)=>M(U.target.value)} />
                <div class="settings-task-detail-actions"><button onClick=${er}>Preview redaction</button></div>
                ${P&&u`<pre>${JSON.stringify(P,null,2)}</pre>`}
            </details>

            ${s&&u`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading recordings…</span></div>`}
            ${l&&u`<div class="settings-error-state">${l}</div>`}
            ${!s&&!l&&i.length===0&&u`<div class="settings-empty-state"><strong>No recordings yet.</strong><p>Start a recording above, then use playback/export for deterministic screen capture.</p></div>`}
            ${!s&&!l&&i.length>0&&u`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Session recordings">
                        ${Ln.map((U)=>u`
                            <button class=${`settings-task-row ${U.id===x?"active":""}`} onClick=${()=>Gn(U)}>
                                <span class="settings-task-row-main"><strong>${U.title||U.id}</strong><span>${U.chatJid} · ${Nr(U.startedAt)}</span></span>
                                <span class="settings-task-row-meta"><${Mr} type=${U.status==="recording"?"active":"completed"}>${U.status}<//><${Mr}>${zi(U.mode)}<//></span>
                                <span class="settings-task-row-times">${U.eventCount||0} events</span>
                            </button>
                        `)}
                        ${Ln.length===0&&u`<p class="settings-hint">No recordings match “${n}”.</p>`}
                    </div>
                    <${lu} recording=${m} details=${b} onDelete=${Tn} onRefresh=${()=>m&&Gn(m)} />
                </div>
            `}
        </div>
    `}var eu;var co=q(()=>{E();$n();eu={formatDateTime:Nr,modeLabel:zi,parseList:tr}});var oo={};rn(oo,{CompactionSection:()=>pu});function gu(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,toolResultCompactionEnabled:Boolean(n.toolResultCompactionEnabled??!0),progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function Wi(n){let r=String(n||"").trim();if(!r)return"—";let i=new Date(r);if(Number.isNaN(i.getTime()))return r;return i.toLocaleString()}function pu({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(180),[t,s]=g(15),[_,l]=g(360),[e,x]=g(75),[f,b]=g(0.5),[h,y]=g(!0),[B,$]=g(!1),[v,F]=g(120),[N,d]=g([]),[j,k]=g([]),[R,G]=g(!1),p=C(""),W=C(null),T=C(!0);L(()=>{return T.current=!0,()=>{T.current=!1}},[]);let w=z((V)=>{let A=gu(V);o(A.compactionTimeoutSec),s(A.compactionBackoffBaseMin),l(A.compactionBackoffMaxMin),x(A.compactionThresholdPercent),b(A.compactionBackoffDecayFactor),y(A.toolResultCompactionEnabled),$(A.progressWatchdogEnabled),F(A.progressWatchdogTimeoutSec),d(A.compactionBackoffs),k(A.progressWatchdogPhases),p.current=JSON.stringify({compactionTimeoutSec:A.compactionTimeoutSec,compactionBackoffBaseMin:A.compactionBackoffBaseMin,compactionBackoffMaxMin:A.compactionBackoffMaxMin,compactionThresholdPercent:A.compactionThresholdPercent,compactionBackoffDecayFactor:A.compactionBackoffDecayFactor,toolResultCompactionEnabled:A.toolResultCompactionEnabled,progressWatchdogEnabled:A.progressWatchdogEnabled,progressWatchdogTimeoutSec:A.progressWatchdogTimeoutSec})},[]);L(()=>{w(n||{})},[n,w]);let M=Q(()=>JSON.stringify({compactionTimeoutSec:c,compactionBackoffBaseMin:t,compactionBackoffMaxMin:_,compactionThresholdPercent:e,compactionBackoffDecayFactor:f,toolResultCompactionEnabled:h,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:v}),[c,t,_,e,f,h,B,v]);L(()=>{if(M===p.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!T.current)return;let V=document.activeElement;if(V&&V.closest?.(".settings-number-stepper"))return;try{r?.("Saving compaction settings…","info");let A=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:M}),m=await A.json().catch(()=>({}));if(!T.current)return;if(!A.ok||!m?.ok||!m?.settings){r?.(m?.error||"Failed to save compaction settings.","error");return}p.current=M,i?.(m.settings),w({...n||{},...m.settings||{}}),r?.("Compaction settings saved.","success"),G(!0),setTimeout(()=>{if(T.current)G(!1),r?.(null)},4000)}catch(A){if(console.warn("[settings/compaction] Failed to persist compaction settings.",A),T.current)r?.("Failed to save compaction settings.","error")}},800),()=>{if(W.current)clearTimeout(W.current)}},[M,i,r,w,n]);let P=z(async(V)=>{try{r?.(`Clearing compaction suppression for ${V}…`,"info");let A=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:V})}),m=await A.json().catch(()=>({}));if(!A.ok||!m?.ok||!m?.settings){r?.(m?.error||"Failed to clear compaction suppression.","error");return}i?.(m.settings),w({...n||{},...m.settings||{}}),r?.(`Cleared compaction suppression for ${V}.`,"success")}catch(A){console.warn("[settings/compaction] Failed to clear compaction suppression.",A),r?.("Failed to clear compaction suppression.","error")}},[w,i,r,n]);return u`
        <div class="settings-section">
            ${R&&u`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Enable tool-result compaction</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${h} onChange=${(V)=>y(Boolean(V.target.checked))} />
                    <span class="settings-hint" style="margin:0">When disabled, large tool results stay inline and are not externalized into searchable tool-output handles.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${a}
                    label="compaction threshold"
                    value=${e}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${a}
                    label="compaction timeout"
                    value=${c}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${a}
                    label="compaction backoff base"
                    value=${t}
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
                <${a}
                    label="compaction backoff max"
                    value=${_}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${l}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${a}
                    label="backoff decay factor"
                    value=${Math.round(f*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(V)=>b(V/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(V)=>$(Boolean(V.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${a}
                    label="watchdog timeout"
                    value=${v}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${F}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${N.length===0?u`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:u`
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
                            ${N.map((V)=>u`
                                <tr>
                                    <td><code>${V.chatJid}</code></td>
                                    <td>${V.failureCount}</td>
                                    <td>${Wi(V.backoffUntil)}</td>
                                    <td title=${V.lastErrorMessage||""}>${V.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>P(V.chatJid)}>
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
            ${j.length===0?u`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:u`
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
                            ${j.map((V)=>u`
                                <tr>
                                    <td><code>${V.chatJid}</code></td>
                                    <td>${V.phase}</td>
                                    <td>${Wi(V.startedAt)}</td>
                                    <td>${Wi(V.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var to=q(()=>{E();Mn()});function uo(n){let r=String(n||"").trim().toLowerCase();if(!r)return null;let i=hu[r]||r;if(/^f(?:[1-9]|1[0-2])$/.test(i))return i;if(yu.has(i))return i;if(i.length===1)return i;if(/^[a-z0-9]+$/.test(i))return i;return null}function Dn(n){let r=String(n||"").trim();if(!r)return null;let i=r.split("+").map((t)=>t.trim()).filter(Boolean);if(!i.length)return null;let c={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let t of i){let s=t.toLowerCase(),_=wu[s];if(_){c[_]=!0;continue}if(c.key)return null;let l=uo(t);if(!l||l==="escape")return null;c.key=l}if(!c.key)return null;let o=[];if(c.ctrl)o.push("ctrl");if(c.meta)o.push("meta");if(c.alt)o.push("alt");if(c.shift)o.push("shift");return o.push(c.key),o.join("+")}function _o(n){return String(n||"").split(/[\n,]/).map((r)=>Dn(r)).filter((r)=>Boolean(r))}function Bn(n){return n.join(", ")}function ji(){let n=Cc(so);if(!n||typeof n!=="object")return{};let r={};for(let i of sr){let c=n[i.id];if(!Array.isArray(c))continue;let o=c.map((t)=>Dn(String(t||""))).filter((t)=>Boolean(t));r[i.id]=[...new Set(o)]}return r}function Ri(n){if(tn(so,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function lo(n){return $u.get(n)}function ur(n){let r=ji()[n];if(Array.isArray(r))return r;return[...lo(n).defaultBindings]}function fo(n,r){let i=ji(),c=lo(n).defaultBindings,o=[...new Set(r.map((t)=>Dn(t)).filter((t)=>Boolean(t)))];if(o.length===c.length&&o.every((t,s)=>t===c[s]))delete i[n];else i[n]=o;Ri(i)}function Mi(n){if(!n){Ri({});return}let r=ji();delete r[n],Ri(r)}function Ur(){let n={};for(let r of sr)n[r.id]=ur(r.id);return n}function xu(n){let r=typeof n==="string"?n:"";if(!r)return"";if(r.length===1)return r.toLowerCase();return uo(r)||r.toLowerCase()}function bu(n){let r=Dn(n);if(!r)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let c of r.split("+")){if(c==="ctrl"||c==="meta"||c==="alt"||c==="shift"){i[c]=!0;continue}i.key=c}return i.key?i:null}function vu(n,r){let i=bu(r);if(!i)return!1;if(xu(n?.key)!==i.key)return!1;let o=!i.shift&&i.key.length===1&&/[^a-z0-9]/i.test(i.key);return Boolean(n?.ctrlKey)===i.ctrl&&Boolean(n?.metaKey)===i.meta&&Boolean(n?.altKey)===i.alt&&(o||Boolean(n?.shiftKey)===i.shift)}function Xl(n,r){return ur(r).some((i)=>vu(n,i))}var so="piclaw_keyboard_shortcuts_v1",sr,$u,wu,hu,yu;var eo=q(()=>{sr=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],$u=new Map(sr.map((n)=>[n.id,n])),wu={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},hu={esc:"escape",return:"enter",spacebar:"space"},yu=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var go={};rn(go,{KeyboardSection:()=>Bu});function ku(n,r,i){let c=String(n||"").trim().toLowerCase();if(!c)return!0;return[r.label,r.description,i,...r.defaultBindings||[]].some((o)=>String(o||"").toLowerCase().includes(c))}function Bu({filter:n="",setStatus:r}){let[i,c]=g(()=>{let l=Ur();return Object.fromEntries(Object.entries(l).map(([e,x])=>[e,Bn(x)]))});L(()=>{let l=()=>{let e=Ur();c(Object.fromEntries(Object.entries(e).map(([x,f])=>[x,Bn(f)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",l),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",l)},[]);let o=Q(()=>sr.filter((l)=>{let e=String(i[l.id]||"");return ku(n,l,e)}),[i,n]),t=(l)=>{let e=String(i[l]||"").trim(),f=(e?e.split(/[\n,]/).map((h)=>h.trim()).filter(Boolean):[]).filter((h)=>!Dn(h));if(f.length>0){r?.(`Invalid shortcut: ${f[0]}. Escape is reserved and cannot be rebound.`,"error");return}let b=_o(e);fo(l,b),c((h)=>({...h,[l]:Bn(ur(l))})),r?.("Keyboard shortcuts saved.","success")},s=(l)=>{Mi(l),c((e)=>({...e,[l]:Bn(ur(l))})),r?.("Keyboard shortcut reset to default.","success")};return u`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{Mi();let l=Ur();c(Object.fromEntries(Object.entries(l).map(([e,x])=>[e,Bn(x)]))),r?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${o.map((l)=>u`
                    <div class="settings-shortcut-card" key=${l.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${l.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${l.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${Bn(l.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${i[l.id]||""}
                                placeholder=${Bn(l.defaultBindings)}
                                onInput=${(e)=>c((x)=>({...x,[l.id]:e.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>t(l.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>s(l.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${o.length===0&&u`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var po=q(()=>{E();eo()});function ho(n,r=Ni){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(300,Math.max(15,Math.round(i)))}function yo(n,r=Ui){let i=Number(n);if(!Number.isFinite(i))return r;return Math.min(8,Math.max(0,Math.round(i)))}function Hi(){return{refreshIntervalSec:ho(Ti($o,Ni),Ni),folderPreviewDepth:yo(Ti(wo,Ui),Ui)}}function xo(n={}){let r=Hi(),i={refreshIntervalSec:ho(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:r.refreshIntervalSec,r.refreshIntervalSec),folderPreviewDepth:yo(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:r.folderPreviewDepth,r.folderPreviewDepth)};if(tn($o,String(i.refreshIntervalSec)),tn(wo,String(i.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(du,{detail:{settings:i}}));return i}var du="piclaw:workspace-client-settings-updated",$o="workspaceRefreshIntervalSec",wo="workspaceFolderPreviewDepth",Ni=60,Ui=3;var bo=()=>{};var ko={};rn(ko,{WorkspaceSection:()=>Tu});function vo(n={}){let r=n.workspaceSettings||{};return{webTerminalEnabled:r.webTerminalEnabled!==!1,vncAllowDirect:r.vncAllowDirect!==!1,treeMaxDepth:r.treeMaxDepth??4,treeMaxEntries:r.treeMaxEntries??5000}}function Tu({settingsData:n,setStatus:r,mergeSettingsData:i}){let[c,o]=g(!0),[t,s]=g(!0),[_,l]=g(4),[e,x]=g(5000),[f,b]=g(60),[h,y]=g(3),[B,$]=g(!1),[v,F]=g(!1),N=C(""),d=C(null),j=C(null),k=C(null),R=C(!0);L(()=>{return R.current=!0,()=>{if(R.current=!1,d.current)clearTimeout(d.current);if(j.current)clearTimeout(j.current);if(k.current)clearTimeout(k.current)}},[]);let G=z((T)=>{let w=vo(T),M=Hi();o(w.webTerminalEnabled),s(w.vncAllowDirect),l(w.treeMaxDepth),x(w.treeMaxEntries),b(M.refreshIntervalSec),y(M.folderPreviewDepth),N.current=JSON.stringify(w)},[]);L(()=>{G(n||{})},[n,G]);let p=Q(()=>JSON.stringify(vo({workspaceSettings:{webTerminalEnabled:c,vncAllowDirect:t,treeMaxDepth:_,treeMaxEntries:e}})),[c,t,_,e]);L(()=>{if(p===N.current)return;if(d.current)clearTimeout(d.current);return d.current=setTimeout(async()=>{if(!R.current)return;let T=document.activeElement;if(T&&T.closest?.(".settings-number-stepper"))return;try{let w=await vi(JSON.parse(p));if(!R.current||!w?.ok||!w?.settings)return;if(N.current=p,i?.({workspaceSettings:w.settings}),r?.(null),$(!0),j.current)clearTimeout(j.current);j.current=setTimeout(()=>{if(R.current)$(!1)},4000)}catch(w){r?.(String(w?.message||w),"error")}},800),()=>{if(d.current)clearTimeout(d.current)}},[p,i,r]);let W=z((T)=>{let w=xo(T);if(b(w.refreshIntervalSec),y(w.folderPreviewDepth),F(!0),k.current)clearTimeout(k.current);k.current=setTimeout(()=>{if(R.current)F(!1)},3000)},[]);return u`
        <div class="settings-section">
            ${B&&u`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${v&&u`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${c} onChange=${(T)=>o(T.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${t} onChange=${(T)=>s(T.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${a}
                    label="workspace tree max depth"
                    value=${_}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${l}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${a}
                    label="workspace tree max entries"
                    value=${e}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${x}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${a}
                    label="workspace refresh interval"
                    value=${f}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(T)=>W({refreshIntervalSec:T})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${a}
                    label="folder preview scan depth"
                    value=${h}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(T)=>W({folderPreviewDepth:T})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var Bo=q(()=>{E();$n();bo();Mn()});var To={};rn(To,{EnvironmentSection:()=>Fu});function Li(n={}){let r=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(r.variables)?r.variables:[],overrides:r.overrides&&typeof r.overrides==="object"?r.overrides:{},count:Number(r.count||0),overrideCount:Number(r.overrideCount||0),keychainEnvNames:Array.isArray(r.keychainEnvNames)?r.keychainEnvNames:[]}}function Fu({settingsData:n,filter:r="",setStatus:i,mergeSettingsData:c}){let[o,t]=g(()=>Li(n||{})),[s,_]=g({}),[l,e]=g(""),[x,f]=g(""),[b,h]=g(null);L(()=>{t(Li(n||{})),_({})},[n]);let y=z((d)=>{let j=Li({environmentSettings:d?.settings||d});return t(j),c?.({environmentSettings:j}),_({}),j},[c]),B=z(async()=>{try{let d=await ki();if(d?.ok)y(d.settings);i?.("Environment refreshed.","info")}catch(d){i?.(String(d?.message||d),"error")}},[y,i]),$=z(async(d,j)=>{let k=String(d||"").trim();if(!k)return;h(k);try{let R=await Wr({action:"set",name:k,value:String(j??"")});if(R?.ok)y(R.settings);if(i?.(`Saved environment override for ${k}.`,"info"),k===l.trim())e(""),f("")}catch(R){i?.(String(R?.message||R),"error")}finally{h(null)}},[y,l,i]),v=z(async(d)=>{let j=String(d||"").trim();if(!j)return;h(j);try{let k=await Wr({action:"clear",name:j});if(k?.ok)y(k.settings);i?.(`Cleared environment override for ${j}.`,"info")}catch(k){i?.(String(k?.message||k),"error")}finally{h(null)}},[y,i]),F=Q(()=>{let d=String(r||"").trim().toLowerCase(),j=Array.isArray(o.variables)?o.variables:[];if(!d)return j;return j.filter((k)=>{return`${k?.name||""} ${k?.value||""} ${k?.source||""}`.toLowerCase().includes(d)})},[o.variables,r]),N=z((d,j)=>{_((k)=>({...k||{},[d]:j}))},[]);return u`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${B}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${l}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(d)=>e(d.target.value)}
                    />
                    <input
                        type="text"
                        value=${x}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(d)=>f(d.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!l.trim()||b===l.trim()}
                        onClick=${()=>$(l,x)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${o.count} variables visible • ${o.overrideCount} overrides active • ${o.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${F.map((d)=>{let j=String(d?.name||""),k=Object.prototype.hasOwnProperty.call(s,j)?s[j]:d.value,R=k!==d.value,G=b===j;return u`
                        <div class="settings-tool-row" key=${j} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${j}>${j}</span>
                            <input
                                type="text"
                                value=${k}
                                spellcheck="false"
                                onInput=${(p)=>N(j,p.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${d.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${d.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${G||!R} onClick=${()=>$(j,k)}>Save</button>
                                <button type="button" disabled=${G||!d.overridden} onClick=${()=>v(j)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${F.length===0&&u`<p class="settings-hint">No environment variables match "${r}".</p>`}
            </div>
        </div>
    `}var Fo=q(()=>{E();$n()});var Ko={};rn(Ko,{ProvidersSection:()=>zu});function Ku(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function zu({providers:n,setStatus:r}){let[i,c]=g(null),[o,t]=g(null),[s,_]=g({}),l=z(($,v)=>{_((F)=>({...F,[$]:v}))},[]),e=z(async($)=>{let v=(s.apiKey||"").trim();if(!v){r?.("API key cannot be empty.","error");return}c($),r?.(`Configuring ${$}…`,"info");try{let F=JSON.stringify({provider:$,method:"api_key",api_key:v}),N=await pn("default",`/login __step2 ${F}`,null,[]);if(N?.command?.status==="error"){r?.(N.command.message,"error");return}r?.(N?.command?.message||`${$} configured.`,"success"),t(null),_({})}catch(F){r?.(String(F.message||F),"error")}finally{c(null)}},[s,r]),x=z(async($,v)=>{c($),r?.(`Configuring ${$}…`,"info");try{let F={provider:$,method:"custom"};for(let j of v.customFields||[])F[j.key]=(s[j.key]||"").trim();let N=JSON.stringify(F),d=await pn("default",`/login __step2 ${N}`,null,[]);if(d?.command?.status==="error"){r?.(d.command.message,"error");return}r?.(d?.command?.message||`${$} configured.`,"success"),t(null),_({})}catch(F){r?.(String(F.message||F),"error")}finally{c(null)}},[s,r]),f=z(async($)=>{c($),r?.(`Starting OAuth for ${$}…`,"info");try{let v=JSON.stringify({provider:$}),N=(await pn("default",`/login __step1 ${v}`,null,[]))?.command?.message||"";if(N.includes("http")){let d=N.match(/(https?:\/\/[^\s)]+)/);if(d)window.open(d[1],"_blank","noopener"),r?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else r?.(N,"success")}else r?.(N||`OAuth flow started for ${$}. Check the chat.`,"success")}catch(v){r?.(String(v.message||v),"error")}finally{c(null)}},[r]),b=z(async($)=>{if(i)return;c($),r?.(`Logging out ${$}…`,"info");try{await pn("default",`/logout ${$}`,null,[]),r?.(`Logged out ${$}. Restart may be needed.`,"success")}catch(v){r?.(String(v.message||v),"error")}finally{c(null)}},[i,r]),h=n||[],y=($)=>o===$,B=($)=>{t((v)=>v===$?null:$),_({})};return u`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${h.map(($)=>u`
                    <div class=${`settings-provider-card${$.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!$.configured&&B($.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${$.name}</strong>
                                <span class="settings-provider-id">${$.id}</span>
                                ${$.configured&&u`<span class="settings-tag settings-tag-skill">${Ku($.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${$.hasOAuth&&u`<span class="settings-tag">OAuth</span>`}
                                ${$.hasApiKey&&u`<span class="settings-tag">API Key</span>`}
                                ${$.isCustom&&u`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${$.configured?u`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${i===$.id} onClick=${(v)=>{v.stopPropagation(),b($.id)}}
                                    >${i===$.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${i===$.id} onClick=${(v)=>{v.stopPropagation(),B($.id)}}
                                    >Reconfigure</button>
                                `:u`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${i===$.id} onClick=${(v)=>{v.stopPropagation(),B($.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${y($.id)&&u`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${$.hasOAuth&&u`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${i===$.id}
                                            onClick=${()=>f($.id)}>
                                            ${i===$.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${$.hasApiKey&&u`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${s.apiKey||""}
                                                onInput=${(v)=>l("apiKey",v.target.value)}
                                                placeholder=${$.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===$.id||!(s.apiKey||"").trim()}
                                                onClick=${()=>e($.id)}>
                                                ${i===$.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${$.isCustom&&u`
                                    <div class="settings-provider-method">
                                        ${($.customFields||[]).map((v)=>u`
                                            <div class="settings-provider-field-row">
                                                <label>${v.label}${v.required?" *":""}</label>
                                                <input type="text" value=${s[v.key]||""}
                                                    onInput=${(F)=>l(v.key,F.target.value)}
                                                    placeholder=${v.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${i===$.id}
                                                onClick=${()=>x($.id,$)}>
                                                ${i===$.id?"Configuring…":"Save configuration"}
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
    `}var zo=q(()=>{E();$n()});var Wo={};rn(Wo,{ModelsSection:()=>Nu});function ju(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function Mu({thinkingLevel:n,supportsThinking:r,provider:i,availableLevels:c,onSetLevel:o,disabled:t}){let s=ju(i)?Wu:Ru,_=c&&c.length>1?c:["off","minimal","low","medium","high"],l=Math.max(0,_.indexOf(n??"off"));if(!r)return u`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return u`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${s[_[l]]||_[l]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${_.length-1} step="1" value=${l} disabled=${t}
                    onInput=${(e)=>o(_[parseInt(e.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${_.map((e,x)=>u`<span class=${x===l?"active":""} onClick=${()=>!t&&o(e)}>${s[e]||e}</span>`)}
                </div>
            </div>
        </div>
    `}function Nu({filter:n=""}){let[r,i]=g(null),[c,o]=g(!1),[t,s]=g("off"),[_,l]=g(!1),[e,x]=g(["off"]),[f,b]=g(!1),[h,y]=g(!1),[B,$]=g(!1),v=z(async()=>{let T=await Bi();if(i(T),T.thinking_level)s(T.thinking_level);if(l(Boolean(T.supports_thinking)),b(Boolean(T.scoped_models_only)),Array.isArray(T.available_thinking_levels)&&T.available_thinking_levels.length>0)x(T.available_thinking_levels);return T},[]);L(()=>{v().catch(()=>i({models:[],model_options:[]}))},[]);let F=z(async(T)=>{if(c)return;o(!0);try{await pn("default",`/model ${T}`,null,[]),await v()}catch(w){console.error("Failed to switch model:",w)}finally{o(!1)}},[c,v]),N=z(async(T)=>{if(h)return;y(!0),b(Boolean(T));try{let w=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scopedModelsOnly:Boolean(T)})}),M=await w.json().catch(()=>({}));if(!w.ok||!M?.ok)throw Error(M?.error||"Failed to save scoped model setting.");await v()}catch(w){console.error("Failed to set scoped model filtering:",w),await v().catch(()=>{})}finally{y(!1)}},[h,v]),d=z(async(T)=>{if(B)return;$(!0),s(T);try{let w=await pn("default",`/thinking ${T}`,null,[]);if(w?.command?.thinking_level)s(w.command.thinking_level);l(w?.command?.supports_thinking!==!1),await v()}catch(w){console.error("Failed to set thinking:",w),await v().catch((M)=>{})}finally{$(!1)}},[B,v]);if(!r)return u`<div class="settings-loading">Loading models\u2026</div>`;let j=r.model_options||[],k=r.current,G=j.find((T)=>T.label===k)?.provider||"",p=n.toLowerCase(),W=p?j.filter((T)=>T.label.toLowerCase().includes(p)||(T.provider||"").toLowerCase().includes(p)):j;return u`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-row" style="padding:0 0 10px 0; align-items:flex-start">
                <label>Scoped models only</label>
                <div style="display:flex; flex-direction:column; gap:4px; min-width:0">
                    <label style="display:flex; align-items:center; gap:8px; font-weight:500">
                        <input type="checkbox" checked=${f} disabled=${h} onChange=${(T)=>N(T.target.checked)} />
                        Use Pi <code>enabledModels</code> for Piclaw model lists
                    </label>
                    <span class="settings-hint" style="margin:0">
                        Filters this picker and the <code>list_models</code> tool. TUI model selection remains unchanged.
                    </span>
                </div>
            </div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${W.map((T)=>u`
                            <tr class=${T.label===k?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${T.label===k} disabled=${c} onChange=${()=>F(T.label)} /></td>
                                <td>${T.name||T.label}</td><td>${T.provider}</td>
                                <td>${T.context_window?(T.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${T.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${W.length===0&&u`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${Mu}
                    thinkingLevel=${t}
                    supportsThinking=${_}
                    provider=${G}
                    availableLevels=${e}
                    onSetLevel=${d}
                    disabled=${B||c} />
            </div>
        </div>
    `}var Wu,Ru;var Ro=q(()=>{E();$n();Wu={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},Ru={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function Vi(n){let r=String(n||"").trim().toLowerCase();if(!r)return"default";if(r==="solarized-dark"||r==="solarized-light")return"solarized";if(r==="github-dark"||r==="github-light")return"github";if(r==="tokyo-night")return"tokyo";return r}function Uo(n){if(!n)return null;let r=String(n).trim();if(!r)return null;let i=r.startsWith("#")?r.slice(1):r;if(!/^[0-9a-fA-F]{3}$/.test(i)&&!/^[0-9a-fA-F]{6}$/.test(i))return null;let c=i.length===3?i.split("").map((t)=>t+t).join(""):i,o=parseInt(c,16);return{r:o>>16&255,g:o>>8&255,b:o&255,hex:`#${c.toLowerCase()}`}}function Hu(n,r){try{if(document.body){n.style.display="none",document.body.appendChild(n);let i=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),i}}catch{return r}return r}function Lu(n){if(!n||typeof document>"u")return null;let r=String(n).trim();if(!r)return null;let i=document.createElement("div");if(i.style.color="",i.style.color=r,!i.style.color)return null;let o=Hu(i,i.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!o)return null;let t=parseInt(o[1],10),s=parseInt(o[2],10),_=parseInt(o[3],10);if(![t,s,_].every((e)=>Number.isFinite(e)))return null;let l=`#${[t,s,_].map((e)=>e.toString(16).padStart(2,"0")).join("")}`;return{r:t,g:s,b:_,hex:l}}function Nn(n){return Uo(n)||Lu(n)}function Ai(n,r,i){let c=Math.round(n.r+(r.r-n.r)*i),o=Math.round(n.g+(r.g-n.g)*i),t=Math.round(n.b+(r.b-n.b)*i);return`rgb(${c} ${o} ${t})`}function Hr(n,r){return`rgba(${n.r}, ${n.g}, ${n.b}, ${r})`}function Gu(n){let r=n.r/255,i=n.g/255,c=n.b/255,o=r<=0.03928?r/12.92:Math.pow((r+0.055)/1.055,2.4),t=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4),s=c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);return 0.2126*o+0.7152*t+0.0722*s}function Pu(n){return Gu(n)>0.4?"#000000":"#ffffff"}function Ho(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Xi(n){return jo[n]||jo.default}function Vu(n){return n.mode==="auto"?Ho():n.mode}function Lo(n,r){let i=Xi(n);if(r==="dark"&&i.dark)return i.dark;if(r==="light"&&i.light)return i.light;return i.dark||i.light||yn}function hn(n,r,i){let c=Nn(n);if(!c)return n;return Ai(c,r,i)}function Go(n,r,i){let c=Nn(r);if(!c)return n;let t=Uo(i==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:hn(n.bgPrimary,c,0.08),bgSecondary:hn(n.bgSecondary,c,0.12),bgHover:hn(n.bgHover,c,0.16),textPrimary:hn(n.textPrimary,c,i==="dark"?0.08:0.06),textSecondary:hn(n.textSecondary,c,i==="dark"?0.12:0.1),borderColor:hn(n.borderColor,c,0.1),accent:c.hex,accentHover:t?Ai(c,t,0.18):c.hex,warning:hn(n.warning||yn.warning,c,0.14),danger:hn(n.danger,c,0.16),success:hn(n.success,c,0.16)}}function Au(n,r){let i=Nn(n?.warning);if(i)return i.hex;let c=Nn(r==="dark"?Pr.warning:yn.warning)||Nn(yn.warning),o=Nn(n?.accent);if(c&&o)return Ai(c,o,r==="dark"?0.18:0.14);return r==="dark"?Pr.warning:yn.warning}function Xu(n,r){if(typeof document>"u")return;let i=document.documentElement,c=n.accent,o=Nn(c),t=o?Hr(o,r==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,s=o?Hr(o,r==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",_=o?Hr(o,r==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",l=o?Pu(o):r==="dark"?"#000000":"#ffffff",e=o?Hr(o,r==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",x=Au(n,r),f={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":c,"--accent-hover":n.accentHover||c,"--accent-color-alpha":e,"--accent-soft":s,"--accent-soft-strong":_,"--accent-contrast-text":l,"--warning-color":x,"--danger-color":n.danger||yn.danger,"--success-color":n.success||yn.success,"--search-highlight-color":t||"rgba(29, 155, 240, 0.2)"};Object.entries(f).forEach(([b,h])=>{if(h)i.style.setProperty(b,h)})}function Qu(){if(typeof document>"u")return;let n=document.documentElement;Uu.forEach((r)=>n.style.removeProperty(r))}function Zn(n,r={}){if(typeof document>"u")return null;let i=typeof r.id==="string"&&r.id.trim()?r.id.trim():null,c=i?document.getElementById(i):document.querySelector(`meta[name="${n}"]`);if(!c)c=document.createElement("meta"),document.head.appendChild(c);if(c.setAttribute("name",n),i)c.setAttribute("id",i);return c}function Mo(n){let r=Vi(Un?.theme||"default"),i=Un?.tint?String(Un.tint).trim():null,c=Lo(r,n);if(r==="default"&&i)c=Go(c,i,n);if(c?.bgPrimary)return c.bgPrimary;return n==="dark"?Pr.bgPrimary:yn.bgPrimary}function Cu(n,r){if(typeof document>"u")return;let i=Zn("theme-color",{id:"dynamic-theme-color"});if(i&&n)i.removeAttribute("media"),i.setAttribute("content",n);let c=Zn("theme-color",{id:"theme-color-light"});if(c)c.setAttribute("media","(prefers-color-scheme: light)"),c.setAttribute("content",Mo("light"));let o=Zn("theme-color",{id:"theme-color-dark"});if(o)o.setAttribute("media","(prefers-color-scheme: dark)"),o.setAttribute("content",Mo("dark"));let t=Zn("msapplication-TileColor");if(t&&n)t.setAttribute("content",n);let s=Zn("msapplication-navbutton-color");if(s&&n)s.setAttribute("content",n);let _=Zn("apple-mobile-web-app-status-bar-style");if(_)_.setAttribute("content",r==="dark"?"black-translucent":"default")}function qu(){if(typeof window>"u")return;let n={...Un,mode:No};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function Iu(){if(typeof window>"u")return"web:default";try{let r=new URL(window.location.href).searchParams.get("chat_jid");return r&&r.trim()?r.trim():"web:default"}catch{return"web:default"}}function Du(n){if(typeof document>"u"||!n)return;let r=document.documentElement;if(r?.style)r.style.background=n;if(document.body?.style)document.body.style.background=n}function Qi(n,r={}){if(typeof window>"u"||typeof document>"u")return;let i=Vi(n?.theme||"default"),c=n?.tint?String(n.tint).trim():null,o=Xi(i),t=Vu(o),s=Lo(i,t);Un={theme:i,tint:c},No=t;let _=document.documentElement;_.dataset.theme=t,_.dataset.colorTheme=i,_.dataset.tint=c?String(c):"",_.style.colorScheme=t;let l=s;if(i==="default"&&c)l=Go(s,c,t);if(i==="default"&&!c)Qu();else Xu(l,t);if(Du(l.bgPrimary),Cu(l.bgPrimary,t),qu(),r.persist!==!1)if(tn(Pi,i),c)tn(Gr,c);else tn(Gr,"")}function Lr(){if(Xi(Un.theme).mode!=="auto")return;Qi(Un,{persist:!1})}function Zu(){if(typeof window>"u")return;let n=Vi(In(Pi)||"default"),r=(()=>{let i=In(Gr);return i?i.trim():null})();Qi({theme:n,tint:r},{persist:!1})}function of(){if(typeof window>"u")return()=>{};if(Zu(),window.matchMedia&&!Gi){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Lr);else if(n.addListener)n.addListener(Lr);return Gi=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Lr);else if(n.removeListener)n.removeListener(Lr);Gi=!1}}return()=>{}}function Ci(n){if(!n||typeof n!=="object")return;let r=Iu(),i=n.chat_jid||n.chatJid||null,c=n.theme??n.name??n.colorTheme,o=n.tint??null;if(!i||i===r)Qi({theme:c||"default",tint:o},{persist:!1});tn(Pi,c||"default"),tn(Gr,o||"")}function tf(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return Ho()}var Pi="piclaw_theme",Gr="piclaw_tint",yn,Pr,jo,Uu,Un,No="light",Gi=!1;var Po=q(()=>{yn={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Pr={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},jo={default:{label:"Default",mode:"auto",light:yn,dark:Pr},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},Uu=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Un={theme:"default",tint:null}});var Ao={};rn(Ao,{ThemeSection:()=>Yu});function Vo(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function Yu({themes:n,colorKeys:r,settingsData:i,setStatus:c,mergeSettingsData:o}){let[t,s]=g("default"),[_,l]=g(""),[e,x]=g(!1),f=C(""),b=C(null),h=C(!0);L(()=>{return h.current=!0,()=>{h.current=!1}},[]);let y=z((N)=>{let d=Vo(N);s(d.uiTheme),l(d.uiTint),f.current=JSON.stringify(d)},[]);L(()=>{if(i){y(i);return}y({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[i,y]);let B=z((N,d)=>{Ci({theme:N,tint:d||null}),s(N||"default"),l(d||"")},[]),$=Q(()=>JSON.stringify(Vo({uiTheme:t,uiTint:_})),[t,_]);L(()=>{if($===f.current)return;if(b.current)clearTimeout(b.current);return b.current=setTimeout(async()=>{if(!h.current)return;x(!0);try{let N=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:$}),d=await N.json().catch(()=>({}));if(!h.current)return;if(!N.ok||!d?.ok||!d?.settings){c?.(d?.error||"Failed to save appearance settings.","error");return}f.current=$,o?.(d.settings),c?.("Appearance synced across clients.","success")}catch(N){if(!h.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",N),c?.("Failed to save appearance settings.","error")}finally{if(h.current)x(!1)}},250),()=>{if(b.current)clearTimeout(b.current)}},[$,o,c]);let v=r||[],F=n||[];return u`
        <div class="settings-section">
            ${e&&u`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${t==="default"}
                        onChange=${()=>B("default",_)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${_||"#1d9bf0"}
                        onInput=${(N)=>{let d=N.target.value;if(l(d),t==="default")Ci({theme:"default",tint:d})}} />
                    ${_&&u`
                        <button class="settings-tint-clear" onClick=${()=>B("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${_||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${v.map((N)=>u`<th class="settings-swatch-header">${N.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${F.filter((N)=>N.name!=="default").map((N)=>u`
                        <tr class=${N.name===t?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>B(N.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${N.name===t} onChange=${()=>B(N.name,"")} /></td>
                            <td><strong>${N.label}</strong></td>
                            <td>${N.mode}</td>
                            ${v.map((d)=>{let j=N.colors?.[d];return u`<td class="settings-swatch-cell">
                                    ${j?u`<span class="settings-color-swatch" style=${"background:"+j} title=${j}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var Xo=q(()=>{E();Po()});var Co={};rn(Co,{__scheduledTasksSettingsTest:()=>mu,ScheduledTasksSection:()=>au});function Hn(n){if(!n)return"—";let r=new Date(n);if(Number.isNaN(r.getTime()))return n;return r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Qo(n){let r=Number(n);if(!Number.isFinite(r))return"—";if(r<1000)return`${Math.round(r)}ms`;return`${(r/1000).toFixed(r<1e4?1:0)}s`}function qi(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Hn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function Ii(n){let r=n?.task_kind||"agent";return r==="internal"?"internal/protected":r}function Di(n){return(n?.task_kind||"agent")==="internal"}function Ju(n){if(!n)return"";let r=String(n).replace(/\s+/g," ").trim();return r.length>180?`${r.slice(0,179)}…`:r}function Yn({children:n,type:r="neutral"}){return u`<span class=${`settings-task-pill settings-task-pill-${r}`}>${n}</span>`}function Eu({task:n}){let r=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!r.length)return u`<p class="settings-hint">No run logs recorded yet.</p>`;return u`
        <div class="settings-task-run-list">
            ${r.map((i)=>u`
                <div class=${`settings-task-run-row settings-task-run-${i.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${Yn} type=${i.status==="error"?"error":"success"}>${i.status||"unknown"}<//>
                        <span>${Hn(i.run_at)}</span>
                        <span>${Qo(i.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${i.error_summary||Ju(i.error)||i.result_summary||i.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Su({task:n,onAction:r}){if(!n)return u`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let i=Di(n);return u`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&u`<button onClick=${()=>r("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&u`<button onClick=${()=>r("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>r("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${Ii(n)}</strong>
                <span>Schedule</span><strong>${qi(n)}</strong>
                <span>Next run</span><strong>${Hn(n.next_run)}</strong>
                <span>Last run</span><strong>${Hn(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&u`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&u`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${i&&u`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Eu} task=${n} />
        </div>
    `}function au({filter:n="",setStatus:r}){let[i,c]=g([]),[o,t]=g({active:0,paused:0,completed:0}),[s,_]=g("all"),[l,e]=g(""),[x,f]=g(!0),[b,h]=g(null),[y,B]=g(null),[$,v]=g(null),[F,N]=g(!1),d=z(async(p={})=>{f(!0),h(null);try{let W=await _i({status:s,chatJid:l.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});c(W.tasks||[]),t(W.counts||{active:0,paused:0,completed:0});let T=p.selectedId||y,w=(W.tasks||[]).find((M)=>M.id===T)||(W.tasks||[])[0]||null;B(w?.id||null),v(w)}catch(W){h(W?.message||"Failed to load scheduled tasks.")}finally{f(!1)}},[s,l,y]);L(()=>{d()},[d]);let j=String(n||"").trim().toLowerCase(),k=Q(()=>{if(!j)return i;return i.filter((p)=>[p.id,p.chat_jid,p.status,p.task_kind,p.schedule_type,p.schedule_value,p.summary,p.prompt_summary,p.command_summary,p.latest_run_log?.error_summary].some((W)=>String(W||"").toLowerCase().includes(j)))},[i,j]),R=z((p)=>{B(p?.id||null),v(p||null)},[]),G=z(async(p,W)=>{if(!W||F)return;let T=Di(W),w=W.summary||W.command_summary||W.prompt_summary||W.id,M=p==="delete"?`Delete scheduled task ${W.id}?

${w}`:`${p==="pause"?"Pause":"Resume"} scheduled task ${W.id}?

${w}`;if(!window.confirm(M))return;if(T&&!window.confirm(`Task ${W.id} is internal/protected. Continue with ${p}?`))return;N(!0),r?.(`${p==="delete"?"Deleting":p==="pause"?"Pausing":"Resuming"} ${W.id}…`,"info");try{await li(p,W.id,{allowInternal:T}),r?.(`Scheduled task ${W.id} ${p==="delete"?"deleted":p==="pause"?"paused":"resumed"}.`,"success"),await d({selectedId:p==="delete"?null:W.id})}catch(P){r?.(P?.message||`Failed to ${p} task.`,"error")}finally{N(!1)}},[F,d,r]);return u`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${Yn} type="active">Active ${o.active||0}<//>
                    <${Yn} type="paused">Paused ${o.paused||0}<//>
                    <${Yn} type="completed">Completed ${o.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${s} onChange=${(p)=>_(p.target.value)}>
                        ${Ou.map((p)=>u`<option value=${p}>${p==="all"?"All statuses":p}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${l} onInput=${(p)=>e(p.target.value)} />
                    <button onClick=${()=>d()} disabled=${x}>Refresh</button>
                </div>
            </div>

            ${x&&u`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${b&&u`<div class="settings-error-state">${b}</div>`}
            ${!x&&!b&&i.length===0&&u`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/i`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!x&&!b&&i.length>0&&u`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${k.map((p)=>u`
                            <button class=${`settings-task-row ${p.id===y?"active":""}`} onClick=${()=>R(p)}>
                                <span class="settings-task-row-main">
                                    <strong>${p.summary||p.id}</strong>
                                    <span>${qi(p)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${Yn} type=${p.status||"neutral"}>${p.status}<//>
                                    <${Yn}>${Ii(p)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Hn(p.next_run)} · Last ${Hn(p.last_run)}${p.latest_run_log?.status?` · ${p.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${k.length===0&&u`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Su} task=${$&&k.some((p)=>p.id===$.id)?$:k[0]} onAction=${G} />
                </div>
            `}
        </div>
    `}var Ou,mu;var qo=q(()=>{E();$n();Ou=["all","active","paused","completed"];mu={formatDateTime:Hn,formatDuration:Qo,labelForSchedule:qi,kindLabel:Ii,isProtectedTask:Di}});function Io(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function On(n){return typeof n==="string"&&n.trim().length>0}function Zi(n,...r){let i=Io(n);if(!i)return!0;let c=r.map((o)=>Io(o)).filter(Boolean);for(let o of c)if(o.startsWith(i)||o.includes(i))return!0;return!1}function Do(n){if(!Array.isArray(n))return null;let r=[],i=new Set;for(let c of n){let o=String(c||"").trim();if(!o)continue;let t=o.toLowerCase();if(i.has(t))continue;i.add(t),r.push(o)}return r}function _r(n){let r=n&&typeof n==="object"?n:{};return{workspaceCommands:Do(r.workspaceCommands),slashCommands:Do(r.slashCommands)}}function Zo(n,r){if(!Array.isArray(n))return!0;return n.some((i)=>i.toLowerCase()===r.toLowerCase())}function n_(n){let r=Array.isArray(n?.commands)?n.commands:[],i=_r(n?.settings),c=String(n?.query||"");return r.filter((o)=>Zo(i.workspaceCommands,o.id)).filter((o)=>Zi(c,o.label,o.description,...o.keywords||[])).map((o)=>({key:`workspace:${o.id}`,kind:"workspace",title:o.label,subtitle:o.description,searchText:`${o.label} ${o.description} ${(o.keywords||[]).join(" ")}`.trim(),visualHint:o.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:o.id}))}function r_(n){let r=Array.isArray(n?.agents)?n.agents:[],i=String(n?.query||""),c=new Set;return r.filter((o)=>{let t=On(o?.chat_jid)?o.chat_jid.trim():"";if(!t||c.has(t))return!1;if(o?.archived_at)return!1;return c.add(t),!0}).filter((o)=>Zi(i,`@${String(o?.agent_name||"").trim()}`,o?.session_name,o?.chat_jid)).map((o)=>{let t=On(o?.agent_name)?o.agent_name.trim():String(o?.chat_jid||"").replace(/^[^:]+:/,""),s=On(o?.session_name)?o.session_name.trim():"",_=String(o?.chat_jid||"").trim();return{key:`agent:${_}`,kind:"agent",title:`@${t}`,subtitle:s||_,searchText:`@${t} ${s} ${_}`.trim(),visualHint:t.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:_}})}function i_(n){let r=Array.isArray(n?.slashCommands)?n.slashCommands:[],i=_r(n?.settings),c=String(n?.query||""),o=new Set;return r.filter((t)=>{let s=On(t?.name)?t.name.trim():"";if(!s||o.has(s.toLowerCase()))return!1;return o.add(s.toLowerCase()),Zo(i.slashCommands,s)}).filter((t)=>Zi(c,t?.name,t?.description,t?.source)).map((t)=>{let s=String(t?.name||"").trim(),_=On(t?.description)?t.description.trim():"slash command",l=On(t?.source)?t.source.trim():"";return{key:`slash:${s}`,kind:"slash",title:s,subtitle:_,searchText:`${s} ${_} ${String(t?.source||"")}`.trim(),visualHint:"/",categoryLabel:l||"Slash",actionHint:"Insert",commandName:s}})}function ef(n){return[...r_({agents:n?.agents,query:n?.query}),...n_({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...i_({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var Jn;var Yo=q(()=>{Jn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var Eo={};rn(Eo,{QuickActionsSection:()=>c_});function Oo(n,...r){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return r.some((c)=>String(c||"").toLowerCase().includes(i))}function Jo(n){if(!Array.isArray(n))return null;return new Set(n.map((r)=>String(r||"").trim().toLowerCase()).filter(Boolean))}function c_({filter:n="",setStatus:r,mergeSettingsData:i}){let[c,o]=g(()=>Jn.map((k)=>k.id)),[t,s]=g([]),[_,l]=g([]),[e,x]=g(!0),[f,b]=g(!1),h=z(async()=>{x(!0);try{let[k,R]=await Promise.all([xi(),yi("web:default").catch(()=>({commands:[]}))]),G=_r(k?.settings),p=Array.isArray(R?.commands)?R.commands:[];l(p),o(Array.isArray(G.workspaceCommands)?G.workspaceCommands:Jn.map((W)=>W.id)),s(Array.isArray(G.slashCommands)?G.slashCommands:p.map((W)=>String(W?.name||"").trim()).filter(Boolean))}catch(k){r?.(String(k?.message||k),"error")}finally{x(!1)}},[r]);L(()=>{h()},[h]);let y=Q(()=>Jo(c),[c]),B=Q(()=>Jo(t),[t]),$=Q(()=>Jn.filter((k)=>Oo(n,k.label,k.description,...k.keywords||[])),[n]),v=Q(()=>_.filter((k)=>Oo(n,k?.name,k?.description,k?.source)),[_,n]),F=z((k)=>{o((R)=>{let G=new Set((Array.isArray(R)?R:[]).map((p)=>String(p||"").trim()).filter(Boolean));if(G.has(k))G.delete(k);else G.add(k);return Jn.map((p)=>p.id).filter((p)=>G.has(p))})},[]),N=z((k)=>{s((R)=>{let G=new Set((Array.isArray(R)?R:[]).map((p)=>String(p||"").trim()).filter(Boolean));if(G.has(k))G.delete(k);else G.add(k);return _.map((p)=>String(p?.name||"").trim()).filter((p)=>p&&G.has(p))})},[_]),d=z(()=>{o(Jn.map((k)=>k.id)),s(_.map((k)=>String(k?.name||"").trim()).filter(Boolean))},[_]),j=z(async()=>{if(f)return;b(!0),r?.("Saving quick actions…","info");try{let k=await bi({workspaceCommands:c,slashCommands:t}),R=_r(k?.settings);i?.({quickActions:R}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:R}})),r?.("Quick Actions saved.","success")}catch(k){r?.(String(k?.message||k),"error")}finally{b(!1)}},[i,f,r,t,c]);if(e)return u`<div class="settings-loading">Loading…</div>`;return u`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${d} disabled=${f}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${j} disabled=${f}>
                    ${f?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${$.map((k)=>{let R=y?y.has(k.id.toLowerCase()):!0;return u`
                        <label class="settings-checkbox-row" key=${k.id}>
                            <input type="checkbox" checked=${R} onChange=${()=>F(k.id)} />
                            <div>
                                <div>${k.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${k.description}</div>
                            </div>
                        </label>
                    `})}
                ${$.length===0&&u`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${v.map((k)=>{let R=String(k?.name||"").trim(),G=B?B.has(R.toLowerCase()):!0;return u`
                        <label class="settings-checkbox-row" key=${R}>
                            <input type="checkbox" checked=${G} onChange=${()=>N(R)} />
                            <div>
                                <div><code>${R}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${k?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${v.length===0&&u`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var So=q(()=>{E();$n();Yo()});var ao={};rn(ao,{KeychainSection:()=>s_});function o_(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function s_({filter:n=""}){let[r,i]=g([]),[c,o]=g(!0),[t,s]=g(null),[_,l]=g(!1),[e,x]=g(""),[f,b]=g(""),[h,y]=g(""),[B,$]=g(""),[v,F]=g(""),[N,d]=g("secret"),[j,k]=g(!1),[R,G]=g({}),[p,W]=g(null),[T,w]=g(null),[M,P]=g(null),V=C(null),A=C(null),m=C(null),on=z(async()=>{o(!0),s(null);try{let X=await(await fetch("/agent/keychain")).json();if(X?.ok)i(X.entries||[]);else s(X?.error||"Failed to load keychain.")}catch(K){s("Failed to load keychain.")}finally{o(!1)}},[]);L(()=>{on()},[on]);let dn=z(async()=>{let K=e.trim(),X=f;if(!K||!X)return;k(!0);try{let sn=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K,secret:X,type:N,username:h.trim()||void 0,userNote:B,agentNote:v})})).json();if(sn?.ok)x(""),b(""),y(""),$(""),F(""),d("secret"),l(!1),await on();else s(sn?.error||"Failed to add entry.")}catch{s("Failed to add entry.")}finally{k(!1)}},[e,f,h,B,v,N,on]),Ln=z(async(K)=>{try{let nn=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K})})).json();if(nn?.ok)w(null),P((sn)=>sn?.name===K?null:sn),await on();else s(nn?.error||"Failed to delete entry.")}catch{s("Failed to delete entry.")}},[on]),Gn=z(async(K)=>{let X=K?.name;if(!X)return;let nn=R[X]||{},sn=Object.prototype.hasOwnProperty.call(nn,"userNote")?nn.userNote:K.userNote||"",_n=Object.prototype.hasOwnProperty.call(nn,"agentNote")?nn.agentNote:K.agentNote||"";W(X);try{let Fn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X,userNote:sn,agentNote:_n})})).json();if(Fn?.ok)G((gr)=>{let Sn={...gr||{}};return delete Sn[X],Sn}),await on();else s(Fn?.error||"Failed to save notes.")}catch{s("Failed to save notes.")}finally{W(null)}},[R,on]),D=z((K,X,nn)=>{G((sn)=>({...sn||{},[K]:{...(sn||{})[K]||{},[X]:nn}}))},[]),I=z(async(K,X,nn)=>{try{let _n=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:K,master_password:X||void 0,totp_code:nn||void 0})})).json();if(_n?.ok)P({name:K,phase:"revealed",secret:_n.secret,username:_n.username,masterPassword:X});else if(_n?.needs_master_password)P((en)=>({name:K,phase:"password",masterPassword:"",error:en?.name===K&&en?.masterPassword?_n.error:null})),requestAnimationFrame(()=>A.current?.focus());else if(_n?.needs_totp)P((en)=>({name:K,phase:"totp",masterPassword:X,totpCode:"",error:en?.name===K&&en?.phase==="totp"&&en?.totpCode?_n.error:null})),requestAnimationFrame(()=>m.current?.focus());else P({name:K,phase:"error",error:_n?.error||"Failed to reveal."})}catch{P({name:K,phase:"error",error:"Failed to reveal."})}},[]),Tn=z((K)=>{if(M?.name===K&&M?.phase==="revealed"){P(null);return}I(K,null,null)},[M,I]),er=z((K)=>{let X=M?.masterPassword||"";if(!X)return;I(K,X,null)},[M,I]),U=z((K)=>{let X=M?.totpCode||"";if(X.length<6)return;I(K,M?.masterPassword,X)},[M,I]),O=z(async(K)=>{try{await navigator.clipboard.writeText(K)}catch{let X=document.createElement("textarea");X.value=K,X.style.position="fixed",X.style.opacity="0",document.body.appendChild(X),X.select(),document.execCommand("copy"),document.body.removeChild(X)}},[]);L(()=>{if(_)requestAnimationFrame(()=>V.current?.focus())},[_]);let cn=n.toLowerCase(),xn=Q(()=>{if(!cn)return r;return r.filter((K)=>K.name.toLowerCase().includes(cn)||(K.type||"").toLowerCase().includes(cn)||(K.envVar||"").toLowerCase().includes(cn)||(K.userNote||"").toLowerCase().includes(cn)||(K.agentNote||"").toLowerCase().includes(cn))},[r,cn]);if(c)return u`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return u`
        <div class="settings-section">
            ${t&&u`
                <div class="settings-keychain-error" role="alert">
                    ${t}
                    <button class="settings-keychain-dismiss" onClick=${()=>s(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${xn.length} entr${xn.length===1?"y":"ies"}${cn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>l(!_)}>
                    ${_?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${_&&u`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${V} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${e} onInput=${(K)=>x(K.target.value)}
                            class="settings-keychain-input" />
                        <select value=${N} onChange=${(K)=>d(K.target.value)}
                            class="settings-keychain-select">
                            ${t_.map((K)=>u`<option value=${K}>${K}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${f} onInput=${(K)=>b(K.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${h} onInput=${(K)=>y(K.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${dn}
                            disabled=${j||!e.trim()||!f}>
                            ${j?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${B} onInput=${(K)=>$(K.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${v} onInput=${(K)=>F(K.target.value)}
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
                        ${xn.length===0&&u`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${cn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${xn.map((K)=>{let X=M?.name===K.name?M:null,nn=X?.phase==="revealed",sn=X?.phase==="password",_n=X?.phase==="totp",en=X?.phase==="error",Fn=R[K.name]||{},gr=Object.prototype.hasOwnProperty.call(Fn,"userNote")?Fn.userNote:K.userNote||"",Sn=Object.prototype.hasOwnProperty.call(Fn,"agentNote")?Fn.agentNote:K.agentNote||"",yt=gr!==(K.userNote||"")||Sn!==(K.agentNote||""),ai=p===K.name;return u`
                            <tr class="settings-keychain-row" key=${K.name}>
                                <td class="settings-keychain-name">${K.name}</td>
                                <td><span class="settings-keychain-type-badge">${K.type}</span></td>
                                <td class="settings-keychain-env">${K.envVar?u`<code>$${K.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${o_(K.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${nn?" active":""}`}
                                        onClick=${()=>Tn(K.name)}
                                        title=${nn?"Hide secret":"Reveal secret"}>
                                        ${nn?u`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:u`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${T===K.name?u`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>Ln(K.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>w(null)}>No</button>
                                            </span>
                                        `:u`<button class="settings-keychain-delete-btn" onClick=${()=>w(K.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${K.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${gr}
                                                onInput=${(un)=>D(K.name,"userNote",un.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${Sn}
                                                onInput=${(un)=>D(K.name,"agentNote",un.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!yt||ai} onClick=${()=>Gn(K)}>
                                            ${ai?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${sn&&u`
                                <tr class="settings-keychain-prompt-row" key=${K.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${A} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X?.masterPassword||""}
                                                onInput=${(un)=>P((qr)=>({...qr,masterPassword:un.target.value}))}
                                                onKeyDown=${(un)=>{if(un.key==="Enter")er(K.name);if(un.key==="Escape")P(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>er(K.name)}
                                                disabled=${!X?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>P(null)}>Cancel</button>
                                            ${X?.error&&u`<span class="settings-keychain-prompt-error">${X.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${_n&&u`
                                <tr class="settings-keychain-prompt-row" key=${K.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${m} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X?.totpCode||""}
                                                onInput=${(un)=>P((qr)=>({...qr,totpCode:un.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(un)=>{if(un.key==="Enter")U(K.name);if(un.key==="Escape")P(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>U(K.name)}
                                                disabled=${(X?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>P(null)}>Cancel</button>
                                            ${X?.error&&u`<span class="settings-keychain-prompt-error">${X.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${nn&&u`
                                <tr class="settings-keychain-reveal-row" key=${K.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X.username&&u`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>O(X.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>O(X.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${en&&u`
                                <tr class="settings-keychain-reveal-row" key=${K.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var t_;var mo=q(()=>{E();t_=["secret","token","password","basic"]});var nt={};rn(nt,{ToolsSection:()=>e_});function e_({toolsets:n,filter:r="",settingsData:i,mergeSettingsData:c}){let o=n||[],[t,s]=g(()=>{let y={};for(let B of o)y[B.name]=!0;return y}),_=z((y)=>{s((B)=>({...B,[y]:!B[y]}))},[]),l=i?.searchMatchMode||"or",e=Q(()=>{let y=Array.isArray(i?.toolResultCompactionTools)?i.toolResultCompactionTools:[];return new Set(y.filter((B)=>typeof B==="string").map((B)=>B.trim().toLowerCase()).filter(Boolean))},[i?.toolResultCompactionTools]),x=z(async()=>{let y=l==="or"?"and":"or";try{let $=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:y})})).json().catch(()=>({}));if($?.ok&&$?.settings)c?.($.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[l,c]),f=z(async(y)=>{let B=String(y||"").trim().toLowerCase();if(!B)return;let $=new Set(e);if($.has(B))$.delete(B);else $.add(B);try{let F=await(await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({toolResultCompactionTools:Array.from($).sort()})})).json().catch(()=>({}));if(F?.ok&&F?.settings)c?.(F.settings)}catch(v){console.warn("[settings/tools] Failed to save tool compaction settings.",v)}},[e,c]),b=r.toLowerCase(),h=Q(()=>{if(!b)return o;return o.map((y)=>{let B=y.tools.filter(($)=>$.name.toLowerCase().includes(b)||y.name.toLowerCase().includes(b)||($.summary||"").toLowerCase().includes(b));return B.length>0?{...y,tools:B}:null}).filter(Boolean)},[o,b]);if(o.length===0)return u`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return u`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${l==="and"} onChange=${x} />
                        <span class="settings-hint" style="margin:0">
                            ${l==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${h.map((y)=>{let B=t[y.name]!==!1;return u`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>_(y.name)} />
                            <span class="settings-toolset-icon">${u_[y.name]||f_}</span>
                            <strong>${y.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${y.description}</span>
                    </div>
                    ${B&&u`<div class="settings-tool-list">
                        <div class="settings-tool-row settings-tool-row-header" aria-hidden="true">
                            <span class="settings-tool-status-header">Enabled</span>
                            <span class="settings-tool-name">Tool</span>
                            <span class="settings-tool-compact-header">Compact</span>
                            <span class="settings-tool-kind">Kind</span>
                            <span class="settings-tool-summary">Summary</span>
                            <span class="settings-tool-source">Source</span>
                        </div>
                        ${y.tools.map(($)=>{let v=String($.name||"").trim().toLowerCase(),F=e.has(v);return u`
                                <div class="settings-tool-row">
                                    <input type="checkbox" checked disabled />
                                    <span class="settings-tool-name">${$.name}</span>
                                    <span class="settings-tool-compact">
                                        <input
                                            type="checkbox"
                                            checked=${F}
                                            onChange=${()=>f($.name)}
                                            title=${F?"Disable tool-result compaction for this tool":"Enable tool-result compaction for this tool"}
                                        />
                                    </span>
                                    <span class="settings-tool-kind" title=${$.kind}>${l_[$.kind]||"?"}</span>
                                    ${$.summary&&u`<span class="settings-tool-summary">${$.summary}</span>`}
                                    ${!$.summary&&u`<span class="settings-tool-summary"></span>`}
                                    <span class="settings-tool-source">${__[$.name]||y.name}</span>
                                </div>
                            `})}
                    </div>`}
                </div>
            `})}
            ${h.length===0&&u`<p class="settings-hint">No tools match "${r}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; the “Compact” column controls tool-result compaction eligibility.</p>
        </div>
    `}var u_,__,l_,f_;var rt=q(()=>{E();u_={core:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},__={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},l_={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},f_=u`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var it={};rn(it,{AddonsSection:()=>g_});function g_({setStatus:n,filter:r=""}){let[i,c]=g(null),[o,t]=g(!0),[s,_]=g(null),[l,e]=g(!1),[x,f]=g({runtime:"",windowsNative:!1}),[b,h]=g([]),[y,B]=g([]);function $(){let p=new URLSearchParams;try{let T=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),w=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((P)=>P.trim()).filter(Boolean),M=localStorage.getItem("piclaw_addons_repo_url");if(T)p.append("catalog_url",T);for(let P of w)p.append("catalog_url",P);if(M)p.set("repo_url",M)}catch(T){}let W=p.toString();return W?`?${W}`:""}let v=z(async()=>{try{let[p,W]=await Promise.all([fetch(`/agent/addons${$()}`),fetch("/agent/settings-data")]),T=await p.json();if(T.error)throw Error(T.error);c(T.addons||[]),h(T.sources||[]),B(T.failed_sources||[]);let w=await W.json().catch(()=>({})),M=typeof w?.runtimePlatform==="string"?w.runtimePlatform:"";f({runtime:M,windowsNative:M==="win32"})}catch(p){c(null),n?.(String(p.message||p),"error")}finally{t(!1)}},[n]);L(()=>{v()},[]);let F=z(async(p)=>{if(s)return;_({slug:p,action:"install"}),n?.(`Installing ${p}…`,"info");try{let T=await(await fetch(`/agent/addons/install${$()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:p})})).json();if(T.error){n?.(T.error,"error");return}e(!0);let w=[T.message,T.warning].filter(Boolean).join(" ");n?.(w||"Add-on installed.","success"),await v()}catch(W){n?.(String(W.message||W),"error")}finally{_(null)}},[s,v,n]),N=z(async(p)=>{if(s)return;_({slug:p,action:"remove"}),n?.(`Removing ${p}…`,"info");try{let T=await(await fetch(`/agent/addons/uninstall${$()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:p})})).json();if(T.error){n?.(T.error,"error");return}e(!0);let w=[T.message,T.warning].filter(Boolean).join(" ");n?.(w||"Add-on removed.","success"),await v()}catch(W){n?.(String(W.message||W),"error")}finally{_(null)}},[s,v,n]),d=z(async()=>{if(s)return;_({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let W=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(W.error){n?.(W.error,"error"),_(null);return}n?.(W.message||"Restarting piclaw…","success"),e(!1),(async(w=30,M=2000)=>{for(let P=0;P<w;P++){await new Promise((V)=>setTimeout(V,M));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await v(),_(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(V){}}_(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(p){n?.(String(p.message||p),"error"),_(null)}},[s,n,v]);if(o)return u`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!i)return u`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let j=r.toLowerCase(),k=j?i.filter((p)=>p.slug.toLowerCase().includes(j)||(p.description||"").toLowerCase().includes(j)||(p.tags||[]).some((W)=>W.toLowerCase().includes(j))):i,R=s?.slug||null,G=s?s.action==="remove"?`Removing ${s.slug}…`:s.action==="restart"?"Restarting piclaw…":`Installing ${s.slug}…`:"";return u`
        <div class=${`settings-section settings-addon-panel${s?" busy":""}`} aria-busy=${s?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${b.length<=1?u`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:u`${b.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${y.length>0&&u`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${y.length} catalog source${y.length>1?"s":""}:
                            ${y.map((p)=>u` <code style="font-size:0.82em;word-break:break-all">${p}</code>`)}
                        </div>
                    `}
                    ${b.length>1&&u`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${b.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${b.map((p)=>u`<li style="word-break:break-all"><code>${p}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${x.windowsNative&&u`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            <div class="settings-addon-list">
                ${s&&u`
                    <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${G}>
                        <div class="settings-addon-panel-overlay-card">
                            <div class="settings-spinner"></div>
                            <span>${G}</span>
                        </div>
                    </div>
                `}
                ${k.map((p)=>{let W=(p.skills||[]).length>0,T=p.type==="extension",w=W&&T?"extension + skill":W?"skill":"extension",M=W&&!T?"settings-tag-skill":"",P=typeof p.homepage==="string"&&p.homepage.trim()?p.homepage.trim():"";return u`
                    <div class=${`settings-addon-card${p.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${P?u`<a class="settings-addon-name-link" href=${P} target="_blank" rel="noopener noreferrer">${p.slug}</a>`:u`<strong>${p.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${M}`}>${w}</span>
                            <span class="settings-addon-version">${p.installed?p.installedVersion||"?":p.version||""}</span>
                            ${p.installKind&&u`<span class="settings-tag">${p.installKind}</span>`}
                            ${p.hasUpdate&&u`<span class="settings-tag settings-tag-skill">\u2191 ${p.version}</span>`}
                            <div class="settings-addon-actions">
                                ${p.installed?u`
                                    ${p.hasUpdate&&u`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(s)} onClick=${()=>F(p.slug)}>${R===p.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(s)} onClick=${()=>N(p.slug)}>${R===p.slug?"…":"Remove"}</button>
                                `:u`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(s)} onClick=${()=>F(p.slug)}>${R===p.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${p.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(p.tags||[]).map((V)=>u`<span class="settings-tag">${V}</span>`)}${(p.skills||[]).map((V)=>u`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${V}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${k.length===0&&u`<p class="settings-hint">No add-ons match "${r}"</p>`}
            </div>
            ${l&&u`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(s)} onClick=${d}>Restart Now</button>
                </div>
            `}
        </div>
    `}var ct=q(()=>{E()});var b_={};function Yi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Vr(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function p_(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function $_(n,r){try{localStorage.setItem(n,r)}catch(i){}}function w_(n,r,i,c){try{return wn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return wn(r,{fallback:r,min:i,max:c})}}function h_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function y_(){let[n,r]=g(()=>Yi("piclaw_vim_mode",!1)),[i,c]=g(()=>Yi("piclaw_show_whitespace",!0)),[o,t]=g(()=>Yi("piclaw_md_live_preview",!0)),[s,_]=g(()=>w_("piclaw_editor_font_size",13,10,24)),[l,e]=g(()=>p_("piclaw_editor_font_family","")),x=z((f,b,h)=>{let y=!b;h(y),Vr(f,y)},[]);return u`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let f=!n;r(f),Vr("piclaw_vim_mode",f)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${i}
                    onChange=${()=>{let f=!i;c(f),Vr("piclaw_show_whitespace",f)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${o}
                    onChange=${()=>{let f=!o;t(f),Vr("piclaw_md_live_preview",f)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${a}
                    label="editor font size"
                    value=${s}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(f)=>{_(f),h_("piclaw_editor_font_size",f)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${l}
                    onInput=${(f)=>{let b=f.target.value;e(b),$_("piclaw_editor_font_family",b)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var x_;var ot=q(()=>{E();Qn();Mn();x_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;kn({id:"editor",label:"Editor",icon:x_,component:y_,order:150})});var T_={};function tt(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function st(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function v_(n,r,i,c){try{return wn(localStorage.getItem(n),{fallback:r,min:i,max:c})}catch{return wn(r,{fallback:r,min:i,max:c})}}function k_(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function B_(){let[n,r]=g(()=>tt("piclaw_mindmap_auto_expand",!0)),[i,c]=g(()=>v_("piclaw_mindmap_node_spacing",40,20,100)),[o,t]=g(()=>tt("piclaw_mindmap_animate",!0));return u`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let s=!n;r(s),st("piclaw_mindmap_auto_expand",s)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${a}
                    label="node spacing"
                    value=${i}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(s)=>{c(s),k_("piclaw_mindmap_node_spacing",s)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${o}
                    onChange=${()=>{let s=!o;t(s),st("piclaw_mindmap_animate",s)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var d_;var ut=q(()=>{E();Qn();Mn();d_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;kn({id:"mindmap",label:"Mind Map",icon:d_,component:B_,order:170})});var z_={};function Oi(n,r){try{let i=localStorage.getItem(n);return i===null?r:i==="true"}catch{return r}}function Ji(n,r){try{localStorage.setItem(n,String(r))}catch(i){}}function Ei(n,r){try{return localStorage.getItem(n)||r}catch{return r}}function Si(n,r){try{localStorage.setItem(n,r)}catch(i){}}function F_(){let[n,r]=g(()=>Oi("piclaw_dev_mode",!1)),[i,c]=g(()=>Ei("piclaw_addons_catalog_url","")),[o,t]=g(()=>Ei("piclaw_addons_catalog_urls","")),[s,_]=g(()=>Ei("piclaw_addons_repo_url","")),[l,e]=g(()=>Oi("piclaw_debug_sse",!1)),[x,f]=g(()=>Oi("piclaw_debug_tool_calls",!1)),b=z(()=>{let h=!n;r(h),Ji("piclaw_dev_mode",h)},[n]);return u`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${b} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&u`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${i}
                        onInput=${(h)=>{let y=h.target.value;c(y),Si("piclaw_addons_catalog_url",y)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${o}
                        onInput=${(h)=>{let y=h.target.value;t(y),Si("piclaw_addons_catalog_urls",y)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${s}
                        onInput=${(h)=>{let y=h.target.value;_(y),Si("piclaw_addons_repo_url",y)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${l}
                        onChange=${()=>{let h=!l;e(h),Ji("piclaw_debug_sse",h)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${x}
                        onChange=${()=>{let h=!x;f(h),Ji("piclaw_debug_tool_calls",h)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var K_;var _t=q(()=>{E();Qn();K_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;kn({id:"developer",label:"Developer",icon:K_,component:F_,order:900})});var J_={};rn(J_,{openSettingsDialog:()=>O_,SettingsDialogContent:()=>Cr,SettingsDialog:()=>Y_});function fr(n){lr.push({ts:performance.now(),label:n})}function W_(){if(!lr.length)return;let n=lr[0].ts,r=lr.map((i)=>`+${(i.ts-n).toFixed(1)}ms ${i.label}`);console.info(`[settings-dialog perf]
`+r.join(`
`));try{window.__piclawSettingsPerfLog=r}catch(i){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:r})}).catch((i)=>{})}catch(i){}lr.length=0}function M_(n){let r=Qr.get(n);if(r)return Promise.resolve(r);let i=Ar.get(n);if(i)return i;let c=R_[n]().then((o)=>{return Qr.set(n,o),Ar.delete(n),o}).catch((o)=>{throw Ar.delete(n),o});return Ar.set(n,c),c}function Xr(n="Loading…"){return u`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function Cr({onClose:n}){fr("SettingsDialogContent-render-start");let[r,i]=g(()=>oi()||"general"),[c,o]=g(lt),[t,s]=g(null),[_,l]=g(""),[,e]=g(0),[x,f]=g(()=>Object.fromEntries(Qr.entries())),[b,h]=g(null),[y,B]=g({compact:!1,narrow:!1}),$=C(null),v=C(null);L(()=>{fr("SettingsDialogContent-mounted"),W_()},[]),L(()=>{let w=(M)=>{if(M.key==="Escape")n()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[n]),L(()=>{let w=(M)=>{let P=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(P)i(P),l("")};return window.addEventListener("piclaw:open-settings",w),()=>window.removeEventListener("piclaw:open-settings",w)},[]),L(()=>{let w=()=>e((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",w),()=>window.removeEventListener("piclaw:settings-panes-changed",w)},[]),L(()=>{fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{lt=w,o(w)}).catch(()=>o({}))},[]),L(()=>{let w=v.current;if(!w)return;let M=()=>{let P=w.clientWidth||0;B((V)=>{let A={compact:P>0&&P<=860,narrow:P>0&&P<=720};return V.compact===A.compact&&V.narrow===A.narrow?V:A})};if(M(),typeof ResizeObserver==="function"){let P=new ResizeObserver(()=>M());return P.observe(w),()=>P.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let F=[...et].sort((w,M)=>(w.order??500)-(M.order??500)),d=Wc().map((w)=>({id:w.id,label:w.label,icon:w.icon,searchable:w.searchable||!1,placeholder:w.searchPlaceholder,order:w.order??500,isExtension:!0,component:w.component})).sort(ci),j=[...F,...d],k=j.find((w)=>w.id===r)||et.find((w)=>w.id===r);L(()=>{if(k?.searchable)requestAnimationFrame(()=>$.current?.focus())},[r]),L(()=>{if(k?.isExtension){h(null);return}let w=!1;if(x[r]){h(null);return}return h(r),M_(r).then((M)=>{if(w)return;f((P)=>P?.[r]?P:{...P||{},[r]:M})}).catch((M)=>{if(w)return;console.error(`[settings-dialog] Failed to lazy-load section "${r}".`,M)}).finally(()=>{if(!w)h((M)=>M===r?null:M)}),()=>{w=!0}},[r,k?.isExtension,x]);let R=z((w,M="info")=>{s(w?{text:w,type:M}:null)},[]),G=z((w)=>{i(w),l("");let M=j_[w];if(M&&!ft.has(w))ft.add(w),M().then(()=>e((P)=>P+1)).catch((P)=>{})},[]),p=z((w)=>{o((M)=>({...M||{},...w||{}}))},[]),W=()=>{if(k?.isExtension){if(!k.component)return Xr("Loading pane…");let M=k.component;return u`<${M} filter=${_} />`}let w=x[r];if(!w||b===r)return Xr(`Loading ${k?.label||"settings"}…`);switch(r){case"general":return u`<${w} settingsData=${c} setStatus=${R} mergeSettingsData=${p} />`;case"sessions":return u`<${w} settingsData=${c} setStatus=${R} mergeSettingsData=${p} />`;case"recordings":return u`<${w} filter=${_} setStatus=${R} />`;case"compaction":return u`<${w} settingsData=${c} setStatus=${R} mergeSettingsData=${p} />`;case"keyboard":return u`<${w} filter=${_} setStatus=${R} />`;case"workspace":return u`<${w} settingsData=${c} setStatus=${R} mergeSettingsData=${p} />`;case"environment":return u`<${w} settingsData=${c} filter=${_} setStatus=${R} mergeSettingsData=${p} />`;case"providers":return u`<${w} providers=${c?.providers} setStatus=${R} />`;case"models":return u`<${w} filter=${_} />`;case"theme":return u`<${w} themes=${c?.themes} colorKeys=${c?.colorKeys} settingsData=${c} setStatus=${R} mergeSettingsData=${p} />`;case"scheduled-tasks":return u`<${w} filter=${_} setStatus=${R} />`;case"quick-actions":return u`<${w} filter=${_} setStatus=${R} mergeSettingsData=${p} />`;case"keychain":return u`<${w} filter=${_} />`;case"tools":return u`<${w} toolsets=${c?.toolsets} filter=${_} settingsData=${c} mergeSettingsData=${p} />`;case"addons":return u`<${w} setStatus=${R} filter=${_} />`;default:return Xr("Loading settings…")}},T=!k;return fr("SettingsDialogContent-render-end"),u`
        <div class="settings-dialog-backdrop" onClick=${(w)=>{if(w.target===w.currentTarget)n()}}>
            <div ref=${v} data-testid="settings-dialog" class=${`settings-dialog${y.compact?" settings-dialog-compact":""}${y.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${k?.searchable&&u`
                        <input ref=${$} type="text" class="settings-header-filter"
                            placeholder=${k.placeholder||"Filter…"}
                            value=${_} onInput=${(w)=>l(w.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${j.map((w,M)=>{let P=M>0&&!j[M-1].isExtension,V=w.isExtension&&P;return u`
                                ${V&&u`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${w.id===r?"active":""}`} onClick=${()=>G(w.id)}>
                                    <span class="settings-nav-icon">${w.icon}</span>
                                    <span class="settings-nav-label">${w.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${T?Xr("Loading settings…"):W()}
                    </main>
                </div>
                ${t&&u`
                    <div class=${`settings-status-bar settings-status-bar-${t.type}`}>
                        ${t.type==="info"&&u`<span class="settings-spinner"></span>`}
                        <span>${t.text}</span>
                        ${t.type!=="info"&&u`<button class="settings-status-dismiss" onClick=${()=>s(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function Y_(){let[n,r]=g(!1);if(L(()=>{let i=(o)=>{let t=Tr(o?.detail?.section);if(t)try{window.__piclawSettingsRequestedSection=t}catch(s){}r(!0)};window.addEventListener("piclaw:open-settings",i);let c=jc();if(c.open){if(c.section)try{window.__piclawSettingsRequestedSection=c.section}catch(o){}r(!0)}return()=>window.removeEventListener("piclaw:open-settings",i)},[]),!n)return null;return u`<${Kc} className="settings-portal"><${Cr} onClose=${()=>r(!1)} /><//>`}function O_(n={}){Rc(n)}var lr,lt=null,Qr,Ar,R_,j_,ft,N_,U_,H_,L_,G_,P_,V_,A_,X_,Q_,C_,q_,I_,D_,Z_,et;var gt=q(()=>{E();zc();Qn();ac();lr=[];fr("module-eval-start");fr("imports-done");Qr=new Map,Ar=new Map;Qr.set("general",Ki);R_={general:()=>Promise.resolve(Ki),sessions:()=>Promise.resolve().then(() => (ro(),no)).then((n)=>n.SessionsSection),recordings:()=>Promise.resolve().then(() => (co(),io)).then((n)=>n.RecordingsSection),compaction:()=>Promise.resolve().then(() => (to(),oo)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (po(),go)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (Bo(),ko)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (Fo(),To)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (zo(),Ko)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (Ro(),Wo)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (Xo(),Ao)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (qo(),Co)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (So(),Eo)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (mo(),ao)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (rt(),nt)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (ct(),it)).then((n)=>n.AddonsSection)},j_={"editor-settings":()=>Promise.resolve().then(() => (ot(),b_)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (ut(),T_)).then(()=>{}),developer:()=>Promise.resolve().then(() => (_t(),z_)).then(()=>{})},ft=new Set;N_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,U_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,H_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.2"/><path d="m13 10 4-2.5v9L13 14z"/></svg>`,L_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,G_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,P_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,V_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,A_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,X_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,Q_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,C_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,q_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,I_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,D_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,Z_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,et=[{id:"general",label:"General",icon:N_,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:U_,searchable:!1,order:12},{id:"recordings",label:"Recordings",icon:H_,searchable:!0,placeholder:"Filter recordings…",order:12.5},{id:"compaction",label:"Compaction",icon:L_,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:V_,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:G_,searchable:!1,order:15},{id:"environment",label:"Environment",icon:P_,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:A_,searchable:!1,order:20},{id:"models",label:"Models",icon:X_,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:Q_,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:C_,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:I_,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:D_,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:q_,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:Z_,searchable:!0,placeholder:"Filter add-ons…",order:90}]});E();gt();Qn();var E_=u`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function S_({label:n,body:r,filter:i=""}){return u`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((c)=>!i||c.toLowerCase().includes(String(i).toLowerCase())).map((c)=>u`
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
  `}function a_(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let r of n)kn({id:r.id,label:r.label,icon:E_,searchable:!0,searchPlaceholder:`Filter ${r.label} settings…`,order:r.id==="fixture-z-observability"?1:999,component:(i)=>u`<${S_} label=${r.label} body=${r.body} filter=${i?.filter||""} />`})}var fn={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},m_={current:fn.current,models:fn.models,model_options:fn.model_options,thinking_level:fn.thinking_level,supports_thinking:fn.supports_thinking,available_thinking_levels:fn.available_thinking_levels},pt={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},$t={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},En=new URLSearchParams(window.location.search).get("real")!=="1",wt=window.fetch.bind(window);function ln(n,r=200){return new Response(JSON.stringify(n),{status:r,headers:{"Content-Type":"application/json"}})}function nl(){window.fetch=async(n,r)=>{let i=new URL(typeof n==="string"?n:n.url,window.location.href),c=String(r?.method||"GET").toUpperCase();if(!En)return wt(n,r);if(i.pathname==="/agent/settings-data")return ln(fn);if(i.pathname==="/agent/models")return ln(m_);if(i.pathname==="/agent/addons")return ln(pt);if(i.pathname.startsWith("/agent/addons/"))return ln({ok:!0,message:"Fixture add-on action accepted.",...pt});if(i.pathname==="/agent/keychain"){if(c==="GET")return ln($t);if(c==="POST")return ln({ok:!0,...$t})}if(i.pathname==="/agent/settings/general")return ln({ok:!0,settings:fn});if(i.pathname==="/agent/settings/widget-token/regenerate")return ln({ok:!0,settings:{...fn,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(i.pathname.startsWith("/agent/default/message"))return ln({command:{status:"success",message:"Fixture command accepted."}});if(i.pathname.startsWith("/agent/settings/"))return ln({ok:!0,settings:fn,items:[],entries:[]});if(i.pathname==="/agent/client-perf")return ln({ok:!0});return wt(n,r)}}function rl(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function ht(n){try{window.__piclawSettingsRequestedSection=n}catch(r){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function il(){let n=new URLSearchParams(window.location.search),[r,i]=g(n.get("section")||"general"),[c,o]=g(Number(n.get("width")||900)),[t,s]=g(Number(n.get("height")||640)),[_,l]=g(En),[e,x]=g(0),f=Q(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),b=z((y)=>{i(y),ht(y)},[]),h=z(()=>{En=!En,l(En),x((y)=>y+1)},[]);return u`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${r} onChange=${(y)=>b(y.target.value)}>${f.map((y)=>u`<option value=${y}>${y}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${c} onInput=${(y)=>o(Number(y.target.value))} /> ${c}px</label>
        <label>Height <input type="range" min="420" max="900" value=${t} onInput=${(y)=>s(Number(y.target.value))} /> ${t}px</label>
        <button type="button" onClick=${h}>${_?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>x((y)=>y+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${c}px;--fixture-height:${t}px;`}>
        <${Cr} key=${e} onClose=${()=>{}} />
      </div>
    </div>
  `}function cl(){a_(),nl(),rl();let n=new URLSearchParams(window.location.search);ht(n.get("section")||"general");let r=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));r.id="settings-widget-fixture-root",An(u`<${il} />`,r),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:En})}cl();

//# debugId=77AA033B58F3F0EC64756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
