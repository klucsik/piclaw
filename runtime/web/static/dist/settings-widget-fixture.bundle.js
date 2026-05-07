var is=Object.defineProperty;var rs=(n)=>n;function ss(n,t){this[n]=rs.bind(null,t)}var O=(n,t)=>{for(var e in t)is(n,e,{get:t[e],enumerable:!0,configurable:!0,set:ss.bind(t,e)})};var G=(n,t)=>()=>(n&&(t=n(n=0)),t);var bs={};O(bs,{useState:()=>a,useRef:()=>m,useReducer:()=>_i,useMemo:()=>j,useLayoutEffect:()=>dt,useImperativeHandle:()=>ps,useErrorBoundary:()=>ws,useEffect:()=>K,useDebugValue:()=>hs,useContext:()=>ds,useCallback:()=>W,render:()=>An,html:()=>c,h:()=>It,createContext:()=>as,Component:()=>Dn});function un(n,t){for(var e in t)n[e]=t[e];return n}function Qt(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function It(n,t,e){var i,r,s,o={};for(s in t)s=="key"?i=t[s]:s=="ref"?r=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?gt.call(arguments,2):e),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)o[s]===void 0&&(o[s]=n.defaultProps[s]);return ct(n,o,i,r,null)}function ct(n,t,e,i,r){var s={type:n,props:t,key:e,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r==null?++Ee:r,__i:-1,__u:0};return r==null&&I.vnode!=null&&I.vnode(s),s}function pt(n){return n.children}function Dn(n,t){this.props=n,this.context=t}function Wn(n,t){if(t==null)return n.__?Wn(n.__,n.__i+1):null;for(var e;t<n.__k.length;t++)if((e=n.__k[t])!=null&&e.__e!=null)return e.__e;return typeof n.type=="function"?Wn(n):null}function ls(n){if(n.__P&&n.__d){var t=n.__v,e=t.__e,i=[],r=[],s=un({},t);s.__v=t.__v+1,I.vnode&&I.vnode(s),Dt(n.__P,s,t,n.__n,n.__P.namespaceURI,32&t.__u?[e]:null,i,e==null?Wn(t):e,!!(32&t.__u),r),s.__v=t.__v,s.__.__k[s.__i]=s,ci(i,s,r),t.__e=t.__=null,s.__e!=e&&ri(s)}}function ri(n){if((n=n.__)!=null&&n.__c!=null)return n.__e=n.__c.base=null,n.__k.some(function(t){if(t!=null&&t.__e!=null)return n.__e=n.__c.base=t.__e}),ri(n)}function jt(n){(!n.__d&&(n.__d=!0)&&pn.push(n)&&!_t.__r++||Ge!=I.debounceRendering)&&((Ge=I.debounceRendering)||ni)(_t)}function _t(){try{for(var n,t=1;pn.length;)pn.length>t&&pn.sort(ti),n=pn.shift(),t=pn.length,ls(n)}finally{pn.length=_t.__r=0}}function si(n,t,e,i,r,s,o,l,f,_,$){var u,h,p,v,F,w,b,A=i&&i.__k||ft,U=t.length;for(f=us(e,t,A,f,U),u=0;u<U;u++)(p=e.__k[u])!=null&&(h=p.__i!=-1&&A[p.__i]||ut,p.__i=u,w=Dt(n,p,h,r,s,o,l,f,_,$),v=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&qt(h.ref,null,p),$.push(p.ref,p.__c||v,p)),F==null&&v!=null&&(F=v),(b=!!(4&p.__u))||h.__k===p.__k?(f=oi(p,f,n,b),b&&h.__e&&(h.__e=null)):typeof p.type=="function"&&w!==void 0?f=w:v&&(f=v.nextSibling),p.__u&=-7);return e.__e=F,f}function us(n,t,e,i,r){var s,o,l,f,_,$=e.length,u=$,h=0;for(n.__k=Array(r),s=0;s<r;s++)(o=t[s])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=n.__k[s]=ct(null,o,null,null,null):at(o)?o=n.__k[s]=ct(pt,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=n.__k[s]=ct(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):n.__k[s]=o,f=s+h,o.__=n,o.__b=n.__b+1,l=null,(_=o.__i=fs(o,e,f,u))!=-1&&(u--,(l=e[_])&&(l.__u|=2)),l==null||l.__v==null?(_==-1&&(r>$?h--:r<$&&h++),typeof o.type!="function"&&(o.__u|=4)):_!=f&&(_==f-1?h--:_==f+1?h++:(_>f?h--:h++,o.__u|=4))):n.__k[s]=null;if(u)for(s=0;s<$;s++)(l=e[s])!=null&&(2&l.__u)==0&&(l.__e==i&&(i=Wn(l)),ui(l,l));return i}function oi(n,t,e,i){var r,s;if(typeof n.type=="function"){for(r=n.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=n,t=oi(r[s],t,e,i));return t}n.__e!=t&&(i&&(t&&n.type&&!t.parentNode&&(t=Wn(n)),e.insertBefore(n.__e,t||null)),t=n.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function fs(n,t,e,i){var r,s,o,l=n.key,f=n.type,_=t[e],$=_!=null&&(2&_.__u)==0;if(_===null&&l==null||$&&l==_.key&&f==_.type)return e;if(i>($?1:0)){for(r=e-1,s=e+1;r>=0||s<t.length;)if((_=t[o=r>=0?r--:s++])!=null&&(2&_.__u)==0&&l==_.key&&f==_.type)return o}return-1}function Ve(n,t,e){t[0]=="-"?n.setProperty(t,e==null?"":e):n[t]=e==null?"":typeof e!="number"||cs.test(t)?e:e+"px"}function st(n,t,e,i,r){var s,o;n:if(t=="style")if(typeof e=="string")n.style.cssText=e;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(t in i)e&&t in e||Ve(n.style,t,"");if(e)for(t in e)i&&e[t]==i[t]||Ve(n.style,t,e[t])}else if(t[0]=="o"&&t[1]=="n")s=t!=(t=t.replace(ei,"$1")),o=t.toLowerCase(),t=o in n||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),n.l||(n.l={}),n.l[t+s]=e,e?i?e[In]=i[In]:(e[In]=Xt,n.addEventListener(t,s?mt:Ht,s)):n.removeEventListener(t,s?mt:Ht,s);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in n)try{n[t]=e==null?"":e;break n}catch(l){}typeof e=="function"||(e==null||e===!1&&t[4]!="-"?n.removeAttribute(t):n.setAttribute(t,t=="popover"&&e==1?"":e))}}function Xe(n){return function(t){if(this.l){var e=this.l[t.type+n];if(t[ot]==null)t[ot]=Xt++;else if(t[ot]<e[In])return;return e(I.event?I.event(t):t)}}}function Dt(n,t,e,i,r,s,o,l,f,_){var $,u,h,p,v,F,w,b,A,U,x,R,d,T,C,g=t.type;if(t.constructor!==void 0)return null;128&e.__u&&(f=!!(32&e.__u),s=[l=t.__e=e.__e]),($=I.__b)&&$(t);n:if(typeof g=="function")try{if(b=t.props,A=g.prototype&&g.prototype.render,U=($=g.contextType)&&i[$.__c],x=$?U?U.props.value:$.__:i,e.__c?w=(u=t.__c=e.__c).__=u.__E:(A?t.__c=u=new g(b,x):(t.__c=u=new Dn(b,x),u.constructor=g,u.render=gs),U&&U.sub(u),u.state||(u.state={}),u.__n=i,h=u.__d=!0,u.__h=[],u._sb=[]),A&&u.__s==null&&(u.__s=u.state),A&&g.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=un({},u.__s)),un(u.__s,g.getDerivedStateFromProps(b,u.__s))),p=u.props,v=u.state,u.__v=t,h)A&&g.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),A&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(A&&g.getDerivedStateFromProps==null&&b!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(b,x),t.__v==e.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(b,u.__s,x)===!1){t.__v!=e.__v&&(u.props=b,u.state=u.__s,u.__d=!1),t.__e=e.__e,t.__k=e.__k,t.__k.some(function(M){M&&(M.__=t)}),ft.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&o.push(u);break n}u.componentWillUpdate!=null&&u.componentWillUpdate(b,u.__s,x),A&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,v,F)})}if(u.context=x,u.props=b,u.__P=n,u.__e=!1,R=I.__r,d=0,A)u.state=u.__s,u.__d=!1,R&&R(t),$=u.render(u.props,u.state,u.context),ft.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,R&&R(t),$=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++d<25);u.state=u.__s,u.getChildContext!=null&&(i=un(un({},i),u.getChildContext())),A&&!h&&u.getSnapshotBeforeUpdate!=null&&(F=u.getSnapshotBeforeUpdate(p,v)),T=$!=null&&$.type===pt&&$.key==null?li($.props.children):$,l=si(n,at(T)?T:[T],t,e,i,r,s,o,l,f,_),u.base=t.__e,t.__u&=-161,u.__h.length&&o.push(u),w&&(u.__E=u.__=null)}catch(M){if(t.__v=null,f||s!=null)if(M.then){for(t.__u|=f?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,t.__e=l}else{for(C=s.length;C--;)Qt(s[C]);Gt(t)}else t.__e=e.__e,t.__k=e.__k,M.then||Gt(t);I.__e(M,t,e)}else s==null&&t.__v==e.__v?(t.__k=e.__k,t.__e=e.__e):l=t.__e=_s(e.__e,t,e,i,r,s,o,f,_);return($=I.diffed)&&$(t),128&t.__u?void 0:l}function Gt(n){n&&(n.__c&&(n.__c.__e=!0),n.__k&&n.__k.some(Gt))}function ci(n,t,e){for(var i=0;i<e.length;i++)qt(e[i],e[++i],e[++i]);I.__c&&I.__c(t,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(s){s.call(r)})}catch(s){I.__e(s,r.__v)}})}function li(n){return typeof n!="object"||n==null||n.__b>0?n:at(n)?n.map(li):un({},n)}function _s(n,t,e,i,r,s,o,l,f){var _,$,u,h,p,v,F,w=e.props||ut,b=t.props,A=t.type;if(A=="svg"?r="http://www.w3.org/2000/svg":A=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),s!=null){for(_=0;_<s.length;_++)if((p=s[_])&&"setAttribute"in p==!!A&&(A?p.localName==A:p.nodeType==3)){n=p,s[_]=null;break}}if(n==null){if(A==null)return document.createTextNode(b);n=document.createElementNS(r,A,b.is&&b),l&&(I.__m&&I.__m(t,s),l=!1),s=null}if(A==null)w===b||l&&n.data==b||(n.data=b);else{if(s=s&&gt.call(n.childNodes),!l&&s!=null)for(w={},_=0;_<n.attributes.length;_++)w[(p=n.attributes[_]).name]=p.value;for(_ in w)p=w[_],_=="dangerouslySetInnerHTML"?u=p:_=="children"||(_ in b)||_=="value"&&("defaultValue"in b)||_=="checked"&&("defaultChecked"in b)||st(n,_,null,p,r);for(_ in b)p=b[_],_=="children"?h=p:_=="dangerouslySetInnerHTML"?$=p:_=="value"?v=p:_=="checked"?F=p:l&&typeof p!="function"||w[_]===p||st(n,_,p,w[_],r);if($)l||u&&($.__html==u.__html||$.__html==n.innerHTML)||(n.innerHTML=$.__html),t.__k=[];else if(u&&(n.innerHTML=""),si(t.type=="template"?n.content:n,at(h)?h:[h],t,e,i,A=="foreignObject"?"http://www.w3.org/1999/xhtml":r,s,o,s?s[0]:e.__k&&Wn(e,0),l,f),s!=null)for(_=s.length;_--;)Qt(s[_]);l||(_="value",A=="progress"&&v==null?n.removeAttribute("value"):v!=null&&(v!==n[_]||A=="progress"&&!v||A=="option"&&v!=w[_])&&st(n,_,v,w[_],r),_="checked",F!=null&&F!=n[_]&&st(n,_,F,w[_],r))}return n}function qt(n,t,e){try{if(typeof n=="function"){var i=typeof n.__u=="function";i&&n.__u(),i&&t==null||(n.__u=n(t))}else n.current=t}catch(r){I.__e(r,e)}}function ui(n,t,e){var i,r;if(I.unmount&&I.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||qt(i,null,t)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(s){I.__e(s,t)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&ui(i[r],t,e||typeof n.type!="function");e||Qt(n.__e),n.__c=n.__=n.__e=void 0}function gs(n,t,e){return this.constructor(n,e)}function An(n,t,e){var i,r,s,o;t==document&&(t=document.documentElement),I.__&&I.__(n,t),r=(i=typeof e=="function")?null:e&&e.__k||t.__k,s=[],o=[],Dt(t,n=(!i&&e||t).__k=It(pt,null,[n]),r||ut,ut,t.namespaceURI,!i&&e?[e]:r?null:t.firstChild?gt.call(t.childNodes):null,s,!i&&e?e:r?r.__e:t.firstChild,i,o),ci(s,n,o)}function as(n){function t(e){var i,r;return this.getChildContext||(i=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(s){this.props.value!=s.value&&i.forEach(function(o){o.__e=!0,jt(o)})},this.sub=function(s){i.add(s);var o=s.componentWillUnmount;s.componentWillUnmount=function(){i&&i.delete(s),o&&o.call(s)}}),e.children}return t.__c="__cC"+ii++,t.__=n,t.Provider=t.__l=(t.Consumer=function(e,i){return e.children(i)}).contextType=t,t}function Un(n,t){D.__h&&D.__h(Q,n,Fn||t),Fn=0;var e=Q.__H||(Q.__H={__:[],__h:[]});return n>=e.__.length&&e.__.push({}),e.__[n]}function a(n){return Fn=1,_i(gi,n)}function _i(n,t,e){var i=Un(dn++,2);if(i.t=n,!i.__c&&(i.__=[e?e(t):gi(void 0,t),function(l){var f=i.__N?i.__N[0]:i.__[0],_=i.t(f,l);f!==_&&(i.__N=[_,i.__[1]],i.__c.setState({}))}],i.__c=Q,!Q.__f)){var r=function(l,f,_){if(!i.__c.__H)return!0;var $=i.__c.__H.__.filter(function(h){return h.__c});if($.every(function(h){return!h.__N}))return!s||s.call(this,l,f,_);var u=i.__c.props!==l;return $.some(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(u=!0)}}),s&&s.call(this,l,f,_)||u};Q.__f=!0;var{shouldComponentUpdate:s,componentWillUpdate:o}=Q;Q.componentWillUpdate=function(l,f,_){if(this.__e){var $=s;s=void 0,r(l,f,_),s=$}o&&o.call(this,l,f,_)},Q.shouldComponentUpdate=r}return i.__N||i.__}function K(n,t){var e=Un(dn++,3);!D.__s&&St(e.__H,t)&&(e.__=n,e.u=t,Q.__H.__h.push(e))}function dt(n,t){var e=Un(dn++,4);!D.__s&&St(e.__H,t)&&(e.__=n,e.u=t,Q.__h.push(e))}function m(n){return Fn=5,j(function(){return{current:n}},[])}function ps(n,t,e){Fn=6,dt(function(){if(typeof n=="function"){var i=n(t());return function(){n(null),i&&typeof i=="function"&&i()}}if(n)return n.current=t(),function(){return n.current=null}},e==null?e:e.concat(n))}function j(n,t){var e=Un(dn++,7);return St(e.__H,t)&&(e.__=n(),e.__H=t,e.__h=n),e.__}function W(n,t){return Fn=8,j(function(){return n},t)}function ds(n){var t=Q.context[n.__c],e=Un(dn++,9);return e.c=n,t?(e.__==null&&(e.__=!0,t.sub(Q)),t.props.value):n.__}function hs(n,t){D.useDebugValue&&D.useDebugValue(t?t(n):n)}function ws(n){var t=Un(dn++,10),e=a();return t.__=n,Q.componentDidCatch||(Q.componentDidCatch=function(i,r){t.__&&t.__(i,r),e[1](i)}),[e[0],function(){e[1](void 0)}]}function $s(){for(var n;n=fi.shift();){var t=n.__H;if(n.__P&&t)try{t.__h.some(lt),t.__h.some(Vt),t.__h=[]}catch(e){t.__h=[],D.__e(e,n.__v)}}}function ys(n){var t,e=function(){clearTimeout(i),Oe&&cancelAnimationFrame(t),setTimeout(n)},i=setTimeout(e,35);Oe&&(t=requestAnimationFrame(e))}function lt(n){var t=Q,e=n.__c;typeof e=="function"&&(n.__c=void 0,e()),Q=t}function Vt(n){var t=Q;n.__c=n.__(),Q=t}function St(n,t){return!n||n.length!==t.length||t.some(function(e,i){return e!==n[i]})}function gi(n,t){return typeof t=="function"?t(n):t}function vs(n){var t=Je.get(this);return t||(t=new Map,Je.set(this,t)),(t=ai(this,t.get(n)||(t.set(n,t=function(e){for(var i,r,s=1,o="",l="",f=[0],_=function(h){s===1&&(h||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?f.push(0,h,o):s===3&&(h||o)?(f.push(3,h,o),s=2):s===2&&o==="..."&&h?f.push(4,h,0):s===2&&o&&!h?f.push(5,0,!0,o):s>=5&&((o||!h&&s===5)&&(f.push(s,0,o,r),s=6),h&&(f.push(s,h,0,r),s=6)),o=""},$=0;$<e.length;$++){$&&(s===1&&_(),_($));for(var u=0;u<e[$].length;u++)i=e[$][u],s===1?i==="<"?(_(),f=[f],s=3):o+=i:s===4?o==="--"&&i===">"?(s=1,o=""):o=i+o[0]:l?i===l?l="":o+=i:i==='"'||i==="'"?l=i:i===">"?(_(),s=1):s&&(i==="="?(s=5,r=o,o=""):i==="/"&&(s<5||e[$][u+1]===">")?(_(),s===3&&(f=f[0]),s=f,(f=f[0]).push(2,0,s),s=0):i===" "||i==="\t"||i===`
`||i==="\r"?(_(),s=2):o+=i),s===3&&o==="!--"&&(s=4,f=f[0])}return _(),f}(n)),t),arguments,[])).length>1?t:t[0]}var gt,I,Ee,os,pn,Ge,ni,ti,Ct,ot,In,ei,Xt,Ht,mt,ii,ut,ft,cs,at,dn,Q,Pt,Qe,Fn=0,fi,D,Ie,De,qe,Se,Ze,Ye,Oe,ai=function(n,t,e,i){var r;t[0]=0;for(var s=1;s<t.length;s++){var o=t[s++],l=t[s]?(t[0]|=o?1:2,e[t[s++]]):t[++s];o===3?i[0]=l:o===4?i[1]=Object.assign(i[1]||{},l):o===5?(i[1]=i[1]||{})[t[++s]]=l:o===6?i[1][t[++s]]+=l+"":o?(r=n.apply(l,ai(n,l,e,["",null])),i.push(r),l[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):i.push(l)}return i},Je,c;var q=G(()=>{ut={},ft=[],cs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,at=Array.isArray;gt=ft.slice,I={__e:function(n,t,e,i){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(n)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),o=r.__d),o)return r.__E=r}catch(l){n=l}throw n}},Ee=0,os=function(n){return n!=null&&n.constructor===void 0},Dn.prototype.setState=function(n,t){var e;e=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=un({},this.state),typeof n=="function"&&(n=n(un({},e),this.props)),n&&un(e,n),n!=null&&this.__v&&(t&&this._sb.push(t),jt(this))},Dn.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),jt(this))},Dn.prototype.render=pt,pn=[],ni=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ti=function(n,t){return n.__v.__b-t.__v.__b},_t.__r=0,Ct=Math.random().toString(8),ot="__d"+Ct,In="__a"+Ct,ei=/(PointerCapture)$|Capture$/i,Xt=0,Ht=Xe(!1),mt=Xe(!0),ii=0;fi=[],D=I,Ie=D.__b,De=D.__r,qe=D.diffed,Se=D.__c,Ze=D.unmount,Ye=D.__;D.__b=function(n){Q=null,Ie&&Ie(n)},D.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),Ye&&Ye(n,t)},D.__r=function(n){De&&De(n),dn=0;var t=(Q=n.__c).__H;t&&(Pt===Q?(t.__h=[],Q.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(lt),t.__h.some(Vt),t.__h=[],dn=0)),Pt=Q},D.diffed=function(n){qe&&qe(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(fi.push(t)!==1&&Qe===D.requestAnimationFrame||((Qe=D.requestAnimationFrame)||ys)($s)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Pt=Q=null},D.__c=function(n,t){t.some(function(e){try{e.__h.some(lt),e.__h=e.__h.filter(function(i){return!i.__||Vt(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],D.__e(i,e.__v)}}),Se&&Se(n,t)},D.unmount=function(n){Ze&&Ze(n);var t,e=n.__c;e&&e.__H&&(e.__H.__.some(function(i){try{lt(i)}catch(r){t=r}}),e.__H=void 0,t&&D.__e(t,e.__v))};Oe=typeof requestAnimationFrame=="function";Je=new Map;c=vs.bind(It)});function pi({children:n,className:t=""}){let[e,i]=a(null);return K(()=>{if(typeof document>"u")return;let r=document.createElement("div");return document.body.appendChild(r),i(r),()=>{try{An(null,r)}finally{r.remove()}}},[]),K(()=>{if(!e)return;e.className=t||"";return},[t,e]),dt(()=>{if(!e)return;An(n,e);return},[n,e]),null}var di=G(()=>{q()});function Zt(n,t){let e=String(n.label||"").localeCompare(String(t.label||""),void 0,{sensitivity:"base"});if(e!==0)return e;return String(n.id||"").localeCompare(String(t.id||""),void 0,{sensitivity:"base"})}function hn(n){let t=vn.findIndex((e)=>e.id===n.id);if(t>=0)vn[t]=n;else vn.push(n);vn.sort(Zt)}function ml(n){let t=vn.findIndex((e)=>e.id===n);if(t>=0)vn.splice(t,1)}function hi(){return[...vn]}function jl(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var vn;var zn=G(()=>{vn=[]});function ht(n){let t=typeof n==="string"?n.trim():"";return t?t:null}function wi(n={}){if(typeof window>"u")return;let t=ht(n.section);try{if(window.__piclawSettingsOpenRequested=!0,t)window.__piclawSettingsRequestedSection=t;else delete window.__piclawSettingsRequestedSection}catch(e){console.debug("[settings-dialog-events] failed to record open request flags",e)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:t?{section:t}:void 0}))}function Yt(){if(typeof window>"u")return null;return ht(window.__piclawSettingsRequestedSection)}function $i(){if(typeof window>"u")return{open:!1,section:null};let n=Boolean(window.__piclawSettingsOpenRequested),t=Yt();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(e){console.debug("[settings-dialog-events] failed to clear open request flags",e)}return{open:n,section:t}}function vi(n=typeof window<"u"?window:null){return n||null}function wt(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Yn(n,t){return`${n}:${t}`}function bi(n){return`${n}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function xi(n,t){if(n.length<=t)return;n.splice(0,n.length-t)}function bn(n){if(!n||typeof n!=="object")return null;return{...n}}function Tn(n){if(!n)return null;return xn.find((t)=>t.id===n)||null}function Ot(n,t){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${n}:${t}`)}catch(e){console.debug("[app-perf] Ignoring performance.mark failure.",e,{traceId:n,phase:t})}}function ki(n){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${n}:start`);let t=Tn(n);if(!t)return;for(let e of t.phases)performance.clearMarks(`piclaw:${n}:${e.phase}`)}catch(t){console.debug("[app-perf] Ignoring performance.clearMarks failure.",t,{traceId:n})}}function yi(n,t,e){let i=kn.get(Yn(n,t));if(i&&Tn(i)?.status==="active")Zn(i,"cancelled","superseded",{replacementType:n,replacementChatJid:t});let r=bi(n),s={id:r,type:n,chatJid:t,startedAt:wt(),detail:bn(e),phases:[],status:"active"};return xn.push(s),xi(xn,100),kn.set(Yn(n,t),r),Ot(r,"start"),r}function Zn(n,t,e,i,r){let s=Tn(n);if(!s||s.status!=="active")return;if(e)s.phases.push({phase:e,at:wt(),detail:bn(i)}),Ot(s.id,e);if(s.status=t,s.completedAt=wt(),s.durationMs=s.completedAt-s.startedAt,r!==void 0)s.error=r instanceof Error?r.message:String(r);let o=Yn(s.type,s.chatJid);if(kn.get(o)===s.id)kn.delete(o);ki(s.id)}function xs(n=vi()){let t=n?.__PICLAW_PERF__;if(t)return t;if(n)n.__PICLAW_PERF__=$t;return $t}function Kn(n=vi()){return xs(n)}function Xl(n,t,e){return Kn().ensureTrace(n,t,e)}function Ql(n,t){return Kn().getActiveTraceId(n,t)}function Il(n,t,e){Kn().markTrace(n,t,e)}function Dl(n,t,e="settled",i){let r=Tn(n);if(!r||r.status!=="active")return!1;let s=new Set(r.phases.map((o)=>o.phase));if(!t.every((o)=>s.has(o)))return!1;return Zn(n,"completed",e,i),!0}function ql(n,t,e="failed",i){Kn().failTrace(n,t,e,i)}function Sl(n,t="cancelled",e){Kn().cancelTrace(n,t,e)}function Jt(n){return Kn().recordRequest(n)}var xn,Sn,kn,$t;var Ti=G(()=>{xn=[],Sn=[],kn=new Map;$t={startTrace(n,t,e){return yi(n,t,e)},ensureTrace(n,t,e){let i=kn.get(Yn(n,t));if(i&&Tn(i)?.status==="active")return i;return yi(n,t,e)},getActiveTraceId(n,t){let e=kn.get(Yn(n,t));return e&&Tn(e)?.status==="active"?e:null},markTrace(n,t,e){let i=Tn(n);if(!i||i.status!=="active")return;i.phases.push({phase:t,at:wt(),detail:bn(e)}),Ot(i.id,t)},completeTrace(n,t="settled",e){Zn(n,"completed",t,e)},failTrace(n,t,e="failed",i){Zn(n,"failed",e,i,t)},cancelTrace(n,t="cancelled",e){Zn(n,"cancelled",t,e)},recordRequest(n){let t=bi("req");return Sn.push({...n,id:t,detail:bn(n.detail)}),xi(Sn,300),t},getTraces(){return xn.map((n)=>({...n,detail:bn(n.detail),phases:n.phases.map((t)=>({...t,detail:bn(t.detail)}))}))},getRequests(){return Sn.map((n)=>({...n,detail:bn(n.detail)}))},clear(){xn.forEach((n)=>ki(n.id)),xn.splice(0,xn.length),Sn.splice(0,Sn.length),kn.clear()},printSummary(){let n={traces:$t.getTraces(),requests:$t.getRequests()};return console.table(n.traces.map((t)=>({id:t.id,type:t.type,chatJid:t.chatJid,status:t.status,durationMs:Number(t.durationMs||0).toFixed(1),lastPhase:t.phases[t.phases.length-1]?.phase||"start"}))),n}}});function Ln(n){let t=Number(n||0);return Number.isFinite(t)&&t>0?t:null}function ks(n){try{return Boolean(n?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function Ts(n){let t=String(n?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test(t)}function Bi(n){let t=String(n?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test(t)}function Ri(n=typeof window<"u"?window:null){let t=Ln(n?.innerWidth)??Ln(n?.screen?.availWidth)??Ln(n?.screen?.width)??0,e=Ln(n?.innerHeight)??Ln(n?.screen?.availHeight)??Ln(n?.screen?.height)??0,i=t&&e?Math.min(t,e):t||e,r=t&&e?Math.max(t,e):t||e,s=ks(n),o=Number(n?.navigator?.maxTouchPoints||0),l=s||o>1;if(i>0&&i<=640)return"mobile";if(Ts(n)&&!Bi(n))return"mobile";if(Bi(n))return"tablet";if(l&&i>0&&i<=1100)return"tablet";if(r>0&&r<=1180&&i>0&&i<=900)return"tablet";return"desktop"}var mo={};O(mo,{uploadWorkspaceFile:()=>Ao,uploadMedia:()=>so,updateWorkspaceFile:()=>To,updateScheduledTask:()=>te,submitAdaptiveCardAction:()=>co,streamSidePrompt:()=>lo,stopAutoresearch:()=>Js,steerAgentQueueItem:()=>eo,setWorkspaceVisibility:()=>Co,setAgentThoughtVisibility:()=>_o,sendPeerAgentMessage:()=>Qs,sendAgentMessage:()=>fn,searchPosts:()=>Ns,saveWorkspaceSettings:()=>oe,saveWebPushSubscription:()=>Ds,saveUiState:()=>ee,saveQuickActionsSettings:()=>se,saveEnvironmentOverride:()=>yt,restoreChatBranch:()=>Xs,respondToAgentRequest:()=>oo,reorderAgentQueueItem:()=>io,renameWorkspaceFile:()=>zo,renameChatJid:()=>Vs,renameChatBranch:()=>Hs,removeAgentQueueItem:()=>to,reindexWorkspace:()=>bo,purgeChatBranch:()=>Gs,pruneChatBranch:()=>js,moveWorkspaceEntry:()=>Ko,mergeChatBranchIntoParent:()=>ms,getWorkspaceTree:()=>$o,getWorkspaceRawUrl:()=>Ni,getWorkspaceIndexStatus:()=>vo,getWorkspaceFileStat:()=>ko,getWorkspaceFileDownloadUrl:()=>Po,getWorkspaceFile:()=>xo,getWorkspaceDownloadUrl:()=>Ho,getWorkspaceBranch:()=>yo,getWebPushPublicKey:()=>Is,getTimeline:()=>Rs,getThumbnailUrl:()=>ao,getThread:()=>Ws,getSystemMetrics:()=>Fs,getScheduledTasks:()=>ne,getQuickActionsSettings:()=>re,getPostsByHashtag:()=>Ms,getMediaUrl:()=>go,getMediaText:()=>ho,getMediaInfo:()=>po,getMediaBlob:()=>wo,getEnvironmentSettings:()=>ce,getChatBranches:()=>Ls,getAutoresearchStatus:()=>Os,getAgents:()=>Ss,getAgentThought:()=>fo,getAgentStatus:()=>Zs,getAgentQueueState:()=>no,getAgentModels:()=>le,getAgentContext:()=>Ys,getAgentCommands:()=>ie,getActiveChatAgents:()=>Ks,forkChatBranch:()=>Cs,dismissAutoresearch:()=>Es,deleteWorkspaceFile:()=>Lo,deleteWebPushSubscription:()=>qs,deletePost:()=>zs,createWorkspaceFile:()=>Uo,createRootChatSession:()=>Ps,createReply:()=>Us,createPost:()=>As,completeInstanceOobe:()=>ro,attachWorkspaceFile:()=>Bo,addToWhitelist:()=>uo,SSEClient:()=>Wi});async function L(n,t={}){let e=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),i;try{i=await fetch(Z+n,{...t,headers:{"Content-Type":"application/json",...t.headers}})}catch(s){throw Jt({method:String(t.method||"GET").toUpperCase(),url:n,startedAt:e,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-e,ok:!1,detail:{failedBeforeResponse:!0}}),s}let r=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-e;if(Jt({method:String(t.method||"GET").toUpperCase(),url:n,startedAt:e,durationMs:r,status:i.status,ok:i.ok,requestId:i.headers?.get?.("x-request-id")||null,serverTiming:i.headers?.get?.("Server-Timing")||null}),!i.ok){let s=await i.json().catch(()=>({error:"Unknown error"}));throw Error(s.error||`HTTP ${i.status}`)}return i.json()}function Mi(n){let t=String(n||"").split(`
`),e="message",i=[];for(let s of t)if(s.startsWith("event:"))e=s.slice(6).trim()||"message";else if(s.startsWith("data:"))i.push(s.slice(5).trim());let r=i.join(`
`);if(!r)return null;try{return{event:e,data:JSON.parse(r)}}catch{return{event:e,data:r}}}async function Bs(n,t){if(!n.body)throw Error("Missing event stream body");let e=n.body.getReader(),i=new TextDecoder,r="";while(!0){let{value:o,done:l}=await e.read();if(l)break;r+=i.decode(o,{stream:!0});let f=r.split(`

`);r=f.pop()||"";for(let _ of f){let $=Mi(_);if($)t($.event,$.data)}}r+=i.decode();let s=Mi(r);if(s)t(s.event,s.data)}async function Rs(n=10,t=null,e=null){let i=`/timeline?limit=${n}`;if(t)i+=`&before=${t}`;if(e)i+=`&chat_jid=${encodeURIComponent(e)}`;return L(i)}async function Ms(n,t=50,e=0,i=null){let r=i?`&chat_jid=${encodeURIComponent(i)}`:"";return L(`/hashtag/${encodeURIComponent(n)}?limit=${t}&offset=${e}${r}`)}async function Ns(n,t=50,e=0,i=null,r="current",s=null,o=null){let l=i?`&chat_jid=${encodeURIComponent(i)}`:"",f=r?`&scope=${encodeURIComponent(r)}`:"",_=s?`&root_chat_jid=${encodeURIComponent(s)}`:"",$=o?.images?"&images=1":"",u=o?.attachments?"&attachments=1":"";return L(`/search?q=${encodeURIComponent(n)}&limit=${t}&offset=${e}${l}${f}${_}${$}${u}`)}async function Ws(n,t=null){let e=t?`?chat_jid=${encodeURIComponent(t)}`:"";return L(`/thread/${n}${e}`)}async function Fs(){return L("/agent/system-metrics")}async function ne(n={}){let t=new URLSearchParams;if(n?.id)t.set("id",String(n.id));if(n?.chatJid)t.set("chat_jid",String(n.chatJid));if(n?.status&&n.status!=="all")t.set("status",String(n.status));if(n?.limit)t.set("limit",String(n.limit));if(n?.includeRunLogs)t.set("include_run_logs","1");if(n?.runLogLimit)t.set("run_log_limit",String(n.runLogLimit));let e=t.toString()?`?${t.toString()}`:"";return L(`/agent/scheduled-tasks${e}`)}async function te(n,t,e={}){return L("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:n,id:t,allow_internal:e?.allowInternal===!0})})}async function ee(n){return L("/agent/ui-state",{method:"POST",body:JSON.stringify(n||{})})}async function As(n,t=[],e=null){let i=e?`?chat_jid=${encodeURIComponent(e)}`:"";return L(`/post${i}`,{method:"POST",body:JSON.stringify({content:n,media_ids:t})})}async function Us(n,t,e=[],i=null){let r=i?`?chat_jid=${encodeURIComponent(i)}`:"";return L(`/post/reply${r}`,{method:"POST",body:JSON.stringify({thread_id:n,content:t,media_ids:e})})}async function zs(n,t=!1,e=null){let i=e?`&chat_jid=${encodeURIComponent(e)}`:"",r=`/post/${n}?cascade=${t?"true":"false"}${i}`;return L(r,{method:"DELETE"})}async function fn(n,t,e=null,i=[],r=null,s=null){let o=s?`?chat_jid=${encodeURIComponent(s)}`:"",l={content:t,thread_id:e,media_ids:i,client_context:{screen_hint:Ri()}};if(r==="auto"||r==="queue"||r==="steer")l.mode=r;return L(`/agent/${n}/message${o}`,{method:"POST",body:JSON.stringify(l)})}async function ie(n="web:default"){let t=typeof n==="string"&&n.trim()?n.trim():"web:default";return L(`/agent/commands?chat_jid=${encodeURIComponent(t)}`)}async function re(){return L("/agent/settings/quick-actions")}async function se(n){return L("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(n||{})})}async function oe(n){return L("/agent/settings/workspace",{method:"POST",body:JSON.stringify(n||{})})}async function ce(){return L("/agent/settings/environment")}async function yt(n){return L("/agent/settings/environment",{method:"POST",body:JSON.stringify(n||{})})}async function Ks(){return L("/agent/active-chats")}async function Ls(n=null,t={}){let e=new URLSearchParams;if(n)e.set("root_chat_jid",String(n));if(t?.includeArchived)e.set("include_archived","1");let i=e.toString()?`?${e.toString()}`:"";return L(`/agent/branches${i}`)}async function Cs(n,t={}){return L("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:n,...t?.agentName?{agent_name:t.agentName}:{}})})}async function Ps(n){return L("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:n})})}async function Hs(n,t={}){return L("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:n,...t&&Object.prototype.hasOwnProperty.call(t,"agentName")?{agent_name:t.agentName}:{}})})}async function ms(n){return L("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function js(n){return L("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Gs(n){return L("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:n})})}async function Vs(n,t){return L("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:n,new_jid:t})})}async function Xs(n,t={}){return L("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:n,...t&&Object.prototype.hasOwnProperty.call(t,"agentName")?{agent_name:t.agentName}:{}})})}async function Qs(n,t,e,i="auto",r={}){let s={source_chat_jid:n,content:e,mode:i,...r?.sourceAgentName?{source_agent_name:r.sourceAgentName}:{},...r?.targetBy==="agent_name"?{target_agent_name:t}:{target_chat_jid:t}};return L("/agent/peer-message",{method:"POST",body:JSON.stringify(s)})}async function Is(){return L("/agent/push/vapid-public-key")}async function Ds(n,t={}){let e={subscription:n,...t?.deviceId?{device_id:t.deviceId}:{}};return L("/agent/push/subscription",{method:"POST",body:JSON.stringify(e)})}async function qs(n,t={}){let e={subscription:n,...t?.deviceId?{device_id:t.deviceId}:{}};return L("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(e)})}async function Ss(){return L("/agent/roster")}async function Zs(n=null){let t=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/status${t}`)}async function Ys(n=null){let t=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/context${t}`)}async function Os(n=null){let t=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/autoresearch/status${t}`)}async function Js(n=null,t={}){return L("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:n||void 0,generate_report:t?.generateReport!==!1})})}async function Es(n=null){return L("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:n||void 0})})}async function no(n=null){let t=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/queue-state${t}`)}async function to(n,t=null){let e=await fetch(Z+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:t||void 0})});if(!e.ok){let i=await e.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(i.error||`HTTP ${e.status}`)}return e.json()}async function eo(n,t=null){let e=await fetch(Z+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:n,chat_jid:t||void 0})});if(!e.ok){let i=await e.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(i.error||`HTTP ${e.status}`)}return e.json()}async function io(n,t,e=null){let i=await fetch(Z+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:n,to_index:t,chat_jid:e||void 0})});if(!i.ok){let r=await i.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(r.error||`HTTP ${i.status}`)}return i.json()}async function le(n=null){let t=n?`?chat_jid=${encodeURIComponent(n)}`:"";return L(`/agent/models${t}`)}async function ro(n="provider-ready"){return L("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:n})})}async function so(n){let t=new FormData;t.append("file",n);let e=await fetch(Z+"/media/upload",{method:"POST",body:t});if(!e.ok){let i=await e.json().catch(()=>({error:"Upload failed"}));throw Error(i.error||`HTTP ${e.status}`)}return e.json()}async function oo(n,t,e=null){let i=await fetch(Z+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:n,outcome:t,chat_jid:e||void 0})});if(!i.ok){let r=await i.json().catch(()=>({error:"Failed to respond"}));throw Error(r.error||`HTTP ${i.status}`)}return i.json()}async function co(n){let t=await fetch(Z+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!t.ok){let e=await t.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(e.error||`HTTP ${t.status}`)}return t.json()}async function lo(n,t={}){let e=await fetch(Z+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n,system_prompt:t.systemPrompt||void 0,chat_jid:t.chatJid||void 0}),signal:t.signal});if(!e.ok){let s=await e.json().catch(()=>({error:"Side prompt failed"}));throw Error(s.error||`HTTP ${e.status}`)}let i=null,r=null;if(await Bs(e,(s,o)=>{if(t.onEvent?.(s,o),s==="side_prompt_thinking_delta")t.onThinkingDelta?.(o?.delta||"");else if(s==="side_prompt_text_delta")t.onTextDelta?.(o?.delta||"");else if(s==="side_prompt_done")i=o;else if(s==="side_prompt_error")r=o}),r){let s=Error(r?.error||"Side prompt failed");throw s.payload=r,s}return i}async function uo(n,t){let e=await fetch(Z+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:n,description:t})});if(!e.ok){let i=await e.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(i.error||`HTTP ${e.status}`)}return e.json()}async function fo(n,t="thought"){let e=`/agent/thought?turn_id=${encodeURIComponent(n)}&panel=${encodeURIComponent(t)}`;return L(e)}async function _o(n,t,e){return L("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:n,panel:t,expanded:Boolean(e)})})}function go(n){return`${Z}/media/${n}`}function ao(n){return`${Z}/media/${n}/thumbnail`}async function po(n){let t=await fetch(`${Z}/media/${n}/info`);if(!t.ok)throw Error("Failed to get media info");return t.json()}async function ho(n){let t=await fetch(`${Z}/media/${n}`);if(!t.ok)throw Error("Failed to load media text");return t.text()}async function wo(n){let t=await fetch(`${Z}/media/${n}`);if(!t.ok)throw Error("Failed to load media blob");return t.blob()}async function $o(n="",t=2,e=!1){let i=`/workspace/tree?path=${encodeURIComponent(n)}&depth=${t}&show_hidden=${e?"1":"0"}`;return L(i)}async function yo(n=""){let t=`/workspace/branch?path=${encodeURIComponent(n||"")}`;return L(t)}async function vo(n="all"){let t=`/workspace/index-status?scope=${encodeURIComponent(n||"all")}`;return L(t)}async function bo(n="all"){return L("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:n})})}async function xo(n,t=20000,e=null){let i=e?`&mode=${encodeURIComponent(e)}`:"",r=`/workspace/file?path=${encodeURIComponent(n)}&max=${t}${i}`;return L(r)}async function ko(n){return L(`/workspace/stat?path=${encodeURIComponent(n)}`)}async function To(n,t){return L("/workspace/file",{method:"PUT",body:JSON.stringify({path:n,content:t})})}async function Bo(n){return L("/workspace/attach",{method:"POST",body:JSON.stringify({path:n})})}function Mo(n,t="",e={}){let i=new URLSearchParams;if(t)i.set("path",t);if(e.overwrite)i.set("overwrite","1");let r=i.toString();return r?`${n}?${r}`:n}function No(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Wo(n,t,e,i){return new Promise((r,s)=>{let o=new XMLHttpRequest;o.open("POST",Z+t);for(let[l,f]of Object.entries(e||{}))if(f!==void 0&&f!==null)o.setRequestHeader(l,String(f));o.upload.onprogress=(l)=>{if(typeof i==="function")i({loaded:l.lengthComputable?l.loaded:0,total:l.lengthComputable?l.total:n.size,lengthComputable:l.lengthComputable})},o.onload=()=>{try{let l=o.responseText?JSON.parse(o.responseText):{};if(o.status>=200&&o.status<300)r(l);else{let f=Error(l.error||`HTTP ${o.status}`);f.status=o.status,f.code=l.code,s(f)}}catch{let l=Error(`HTTP ${o.status}`);l.status=o.status,s(l)}},o.onerror=()=>s(Error("Upload failed (network error)")),o.ontimeout=()=>s(Error("Upload timed out")),o.send(n)})}async function Fo(n,t="",e={}){let i=No(),r=Mo("/workspace/upload-chunk",t,e),s=Math.max(1,Math.min(Et,Number(e.chunkSize)||Ro)),o=Math.max(0,Number(n?.size)||0),l=Math.max(1,Math.ceil(o/s)),f=0,_=null;for(let $=0;$<l;$+=1){let u=$*s,h=Math.min(o,u+s),p=n.slice(u,h),v=p.size;if(_=await Wo(p,r,{"X-Upload-Id":i,"X-Chunk-Index":$,"X-Chunk-Total":l,"X-File-Name":n?.name||"upload.bin","X-File-Size":o},(F)=>{if(typeof e.onProgress!=="function")return;let w=Math.min(o,f+(F?.loaded||0)),b=o||1;e.onProgress({loaded:w,total:b,percent:Math.round(w/b*100),chunkIndex:$,chunkTotal:l})}),f+=v,typeof e.onProgress==="function"){let F=o||1,w=o?f:F;e.onProgress({loaded:w,total:F,percent:Math.round(w/F*100),chunkIndex:$+1,chunkTotal:l})}}return _}async function Ao(n,t="",e={}){if(n?.size>Et){let i=(n.size/1048576).toFixed(0),r=(Et/1048576).toFixed(0),s=Error(`File too large (${i} MB). Maximum upload size is ${r} MB.`);throw s.code="file_too_large",s}return await Fo(n,t,e)}async function Uo(n,t,e=""){let i=await fetch(Z+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:t,content:e})});if(!i.ok){let r=await i.json().catch(()=>({error:"Create failed"})),s=Error(r.error||`HTTP ${i.status}`);throw s.status=i.status,s.code=r.code,s}return i.json()}async function zo(n,t){let e=await fetch(Z+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,name:t})});if(!e.ok){let i=await e.json().catch(()=>({error:"Rename failed"})),r=Error(i.error||`HTTP ${e.status}`);throw r.status=e.status,r.code=i.code,r}return e.json()}async function Ko(n,t){let e=await fetch(Z+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:n,target:t})});if(!e.ok){let i=await e.json().catch(()=>({error:"Move failed"})),r=Error(i.error||`HTTP ${e.status}`);throw r.status=e.status,r.code=i.code,r}return e.json()}async function Lo(n){let t=`/workspace/file?path=${encodeURIComponent(n||"")}`;return L(t,{method:"DELETE"})}async function Co(n,t=!1){return L("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(n),show_hidden:Boolean(t)})})}function Ni(n,t={}){let e=new URLSearchParams({path:String(n||"")});if(t.download)e.set("download","1");return`${Z}/workspace/raw?${e.toString()}`}function Po(n){return Ni(n,{download:!0})}function Ho(n,t=!1){let e=`path=${encodeURIComponent(n||"")}&show_hidden=${t?"1":"0"}`;return`${Z}/workspace/download?${e}`}class Wi{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(n,t,e={}){this.onEvent=n,this.onStatusChange=t,this.chatJid=typeof e?.chatJid==="string"&&e.chatJid.trim()?e.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let n=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(Z+"/sse/stream"+n);let t=(e)=>{this.eventSource.addEventListener(e,(i)=>{this.markActivity(),this.onEvent(e,JSON.parse(i.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),t("new_post"),t("new_reply"),t("agent_response"),t("interaction_updated"),t("interaction_deleted"),t("agent_status"),t("agent_steer_queued"),t("agent_followup_queued"),t("agent_followup_consumed"),t("agent_followup_removed"),t("workspace_update"),t("agent_draft"),t("agent_draft_delta"),t("agent_thought"),t("agent_thought_delta"),t("model_changed"),t("ui_theme"),t("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(t)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let n=10,t=60000,e=Date.now();if(this.reconnectAttempts>=n)this.cooldownUntil=Math.max(this.cooldownUntil,e+t),this.reconnectAttempts=0;let i=Math.max(this.cooldownUntil-e,0),r=Math.max(this.reconnectDelay,i);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},r),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let n=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&n-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&n<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var Z="",Et=1073741824,Ro=8388608;var wn=G(()=>{Ti()});function Cn(n){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(n)}catch{return null}}function J(n,t){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(n,t)}catch{return}}function ue(n,t=!1){let e=Cn(n);if(e===null)return t;return e==="true"}function fe(n,t=null){let e=Cn(n);if(e===null)return t;let i=parseInt(e,10);return Number.isFinite(i)?i:t}function Fi(n){let t=Cn(n);if(!t)return null;try{return JSON.parse(t)}catch{return null}}function Go(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(bt,{detail:{enabled:Boolean(n)}}))}function zi(n){if(typeof fetch!=="function")return;ee({ui_meters:n}).catch((t)=>{console.debug("[meters] Failed to persist meters UI state.",t)})}function Vo(n){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(jo,{detail:{collapsed:Boolean(n)}}))}function _e(n=!1){return ue(Ai,n)}function eu(n=!1){return ue(Ui,n)}function vt(n,t={}){let e=t.persist!==!1,i=t.persistServer!==!1,r=Boolean(n);if(e)J(Ai,r?"true":"false");if(i)zi({enabled:r});return Go(r),r}function Xo(n,t={}){let e=t.persist!==!1,i=t.persistServer!==!1,r=Boolean(n);if(e)J(Ui,r?"true":"false");if(i)zi({collapsed:r});return Vo(r),r}function iu(n){let t=typeof n?.mode==="string"?n.mode.trim().toLowerCase():"";if(typeof n?.enabled==="boolean")vt(Boolean(n.enabled),{persistServer:!1});else if(t==="toggle"){let e=!_e(!1);vt(e,{persistServer:!1})}if(typeof n?.collapsed==="boolean")Xo(Boolean(n.collapsed),{persistServer:!1})}var Ai="piclaw_system_meters_enabled",Ui="piclaw_system_meters_collapsed",bt="piclaw-meters-change",jo="piclaw-meters-collapsed-change";var Ki=G(()=>{wn()});function Li(n,t){if(n===""||n===null||n===void 0)return t;let e=Number(n);return Number.isFinite(e)?e:t}function Ci(n,{min:t=-1/0,max:e=1/0}={}){let i=Number.isFinite(Number(t))?Number(t):-1/0,r=Number.isFinite(Number(e))?Number(e):1/0;return Math.min(r,Math.max(i,Number(n)))}function _n(n,{fallback:t=0,min:e=-1/0,max:i=1/0}={}){let r=Li(n,t);return Ci(r,{min:e,max:i})}function Qo(n,{direction:t=1,step:e=1,fallback:i=0,min:r=-1/0,max:s=1/0}={}){let o=_n(n,{fallback:i,min:r,max:s}),l=Math.abs(Li(e,1))||1,f=Number(t)<0?-1:1;return Ci(o+f*l,{min:r,max:s})}function S({value:n,min:t,max:e,step:i=1,fallback:r,width:s="80px",disabled:o=!1,label:l,onChange:f}){let _=Number.isFinite(Number(r))?Number(r):_n(n,{fallback:0,min:t,max:e}),[$,u]=a(String(n??_)),h=m(!1);K(()=>{if(!h.current)u(String(n??_))},[n,_]);let p=W((F)=>{h.current=!1;let w=_n(F,{fallback:_,min:t,max:e});u(String(w)),f?.(w)},[_,t,e,f]),v=W((F)=>{h.current=!1;let w=Qo(n,{direction:F,step:i,fallback:_,min:t,max:e});u(String(w)),f?.(w)},[_,e,t,f,i,n]);return c`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${l||"value"}`}
                title=${`Decrease ${l||"value"}`}
                disabled=${o}
                onClick=${()=>v(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${$}
                disabled=${o}
                style=${`width:${s}`}
                onInput=${(F)=>{h.current=!0,u(F.target.value)}}
                onBlur=${(F)=>p(F.target.value)}
                onKeyDown=${(F)=>{if(F.key==="Enter")F.preventDefault(),p(F.target.value),F.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${l||"value"}`}
                title=${`Increase ${l||"value"}`}
                disabled=${o}
                onClick=${()=>v(1)}
            >+</button>
        </span>
    `}var Bn=G(()=>{q()});function Pi(n){let t=String(n||"").trim();if(!t)return"";if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")||t.startsWith("blob:"))return t;if(t.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent(t.slice(11))}`;if(t.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test(t))return"";if(t.startsWith("\\\\"))return"";if(t.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent(t.replace(/^\.\//,""))}`}function Hi({value:n,onChange:t}){let e=m(null),[i,r]=a(Pi(n));K(()=>{r(Pi(n))},[n]);let s=W((o)=>{let l=o.target.files?.[0];if(!l)return;let f=new FileReader;f.onload=()=>{let _=f.result;r(_),t?.(_)},f.readAsDataURL(l)},[t]);return c`
        <div class="settings-avatar-inline" onClick=${()=>e.current?.click()} title="Click to upload">
            ${i?c`<img src=${i} alt="avatar" />`:c`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${e} style="display:none" onChange=${s} />
        </div>
    `}function mi(n={}){return{userName:n.userName||"",userAvatar:n.userAvatar||"",assistantName:n.assistantName||"",assistantAvatar:n.assistantAvatar||"",composeUploadLimitMb:n.composeUploadLimitMb??32,workspaceUploadLimitMb:n.workspaceUploadLimitMb??256}}function ge({settingsData:n,setStatus:t,mergeSettingsData:e}){let[i,r]=a(""),[s,o]=a(""),[l,f]=a(""),[_,$]=a(""),[u,h]=a(32),[p,v]=a(256),[F,w]=a(""),[b,A]=a(!1),[U,x]=a(!1),[R,d]=a(!1),[T,C]=a(()=>_e(!1)),[g,M]=a(!1),z=m(""),y=m(null),k=m(!0);K(()=>{return k.current=!0,()=>{k.current=!1}},[]);let N=W((X)=>{let V=mi(X);r(V.userName),o(V.userAvatar),f(V.assistantName),$(V.assistantAvatar),h(V.composeUploadLimitMb),v(V.workspaceUploadLimitMb),w(X?.widgetToken||""),z.current=JSON.stringify(V)},[]);K(()=>{N(n||{})},[n,N]),K(()=>{let X=(V)=>{C(Boolean(V?.detail?.enabled))};return window.addEventListener(bt,X),()=>window.removeEventListener(bt,X)},[]);let H=j(()=>JSON.stringify(mi({userName:i,userAvatar:s,assistantName:l,assistantAvatar:_,composeUploadLimitMb:u,workspaceUploadLimitMb:p})),[i,s,l,_,u,p]);K(()=>{if(H===z.current)return;if(y.current)clearTimeout(y.current);return y.current=setTimeout(async()=>{if(!k.current)return;let X=document.activeElement;if(X&&X.closest?.(".settings-number-stepper"))return;try{let V=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:H}),Xn=await V.json().catch(()=>({}));if(!k.current)return;if(!V.ok||!Xn?.ok||!Xn?.settings)return;z.current=H,e?.(Xn.settings),M(!0),setTimeout(()=>{if(k.current)M(!1)},4000)}catch(V){console.warn("[settings/general] Failed to persist general settings snapshot.",V)}},800),()=>{if(y.current)clearTimeout(y.current)}},[H,e]);let E=n?.instanceTotp||{configured:!1,issuer:l||"Piclaw",label:i?`${l||"Piclaw"}:${i}`:l||"Piclaw",secret:"",otpauth:"",qrSvg:""},et=W(async()=>{if(!F)return;try{await navigator.clipboard?.writeText(F),x(!0),setTimeout(()=>{if(k.current)x(!1)},3000)}catch(X){console.warn("[settings/general] Failed to copy widget token.",X)}},[F]),sn=W(async()=>{if(R)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;d(!0);try{let X=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),V=await X.json().catch(()=>({}));if(!X.ok||!V?.ok||!V?.settings)throw Error(V?.error||"Failed to regenerate widget token.");w(V.settings.widgetToken||""),e?.(V.settings),M(!0),setTimeout(()=>{if(k.current)M(!1)},4000)}catch(X){console.warn("[settings/general] Failed to regenerate widget token.",X)}finally{if(k.current)d(!1)}},[R,e]),Ut=typeof window<"u"&&window.isSecureContext,zt=F?"•".repeat(Math.min(Math.max(F.length,16),48)):"—",Kt=b?F||"—":zt;return c`
        <div class="settings-section">
            ${g&&c`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${Hi} value=${s} onChange=${o} />
                <input type="text" value=${i} onInput=${(X)=>r(X.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${Hi} value=${_} onChange=${$} />
                <input type="text" value=${l} onInput=${(X)=>f(X.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${Ut?c`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:c`
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
                        onChange=${()=>{let X=vt(!T);C(X)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${S}
                    label="compose upload limit"
                    value=${u}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${S}
                    label="workspace upload limit"
                    value=${p}
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
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${Kt}</code>
                        <button class=${`settings-keychain-reveal-btn${b?" active":""}`}
                            type="button"
                            onClick=${()=>A((X)=>!X)}
                            disabled=${!F}
                            title=${b?"Hide token":"Reveal token"}>
                            ${b?c`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:c`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${et} disabled=${!F} title="Copy token">
                            ${U?c`<span class="settings-widget-token-copied">Copied</span>`:c`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${sn} disabled=${R}>${R?"Regenerating…":"Regenerate"}</button>
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
                            ${E.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${E.configured?c`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:E.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${E.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${E.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${E.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var ji=G(()=>{q();Ki();Bn()});var Vi={};O(Vi,{SessionsSection:()=>Io});function Gi(n={}){return{sessionAutoRotate:n.sessionAutoRotate!==!1,sessionMaxSizeMb:n.sessionMaxSizeMb??16,sessionMaxLines:n.sessionMaxLines??4000,sessionMaxCompactions:n.sessionMaxCompactions??3,sessionIsolation:n.sessionIsolation||"none",toolUseBudget:n.toolUseBudget??64}}function Io({settingsData:n,setStatus:t,mergeSettingsData:e}){let[i,r]=a(!0),[s,o]=a(16),[l,f]=a(4000),[_,$]=a(3),[u,h]=a(64),[p,v]=a("none"),[F,w]=a(!1),b=m(""),A=m(null),U=m(!0);K(()=>{return U.current=!0,()=>{U.current=!1}},[]);let x=W((d)=>{let T=Gi(d);r(T.sessionAutoRotate),o(T.sessionMaxSizeMb),f(T.sessionMaxLines),$(T.sessionMaxCompactions),h(T.toolUseBudget),v(T.sessionIsolation),b.current=JSON.stringify(T)},[]);K(()=>{x(n||{})},[n,x]);let R=j(()=>JSON.stringify(Gi({sessionAutoRotate:i,sessionMaxSizeMb:s,sessionMaxLines:l,sessionMaxCompactions:_,toolUseBudget:u,sessionIsolation:p})),[i,s,l,_,u,p]);return K(()=>{if(R===b.current)return;if(A.current)clearTimeout(A.current);return A.current=setTimeout(async()=>{if(!U.current)return;let d=document.activeElement;if(d&&d.closest?.(".settings-number-stepper"))return;try{let T=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:R}),C=await T.json().catch(()=>({}));if(!U.current)return;if(!T.ok||!C?.ok||!C?.settings)return;b.current=R,e?.(C.settings),w(!0),setTimeout(()=>{if(U.current)w(!1)},4000)}catch(T){console.warn("[settings/sessions] Failed to persist session settings.",T)}},800),()=>{if(A.current)clearTimeout(A.current)}},[R,e]),c`
        <div class="settings-section">
            ${F&&c`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${i} onChange=${(d)=>r(d.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${S}
                    label="max session size"
                    value=${s}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${o}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${S}
                    label="tool use budget"
                    value=${u}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${h}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${p} onChange=${(d)=>v(d.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var Xi=G(()=>{q();Bn()});var Qi={};O(Qi,{CompactionSection:()=>qo});function Do(n={}){return{compactionTimeoutSec:n.compactionTimeoutSec??180,compactionBackoffBaseMin:n.compactionBackoffBaseMin??15,compactionBackoffMaxMin:n.compactionBackoffMaxMin??360,compactionThresholdPercent:n.compactionThresholdPercent??75,compactionBackoffDecayFactor:n.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(n.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:n.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(n.compactionBackoffs)?n.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(n.progressWatchdogPhases)?n.progressWatchdogPhases:[]}}function ae(n){let t=String(n||"").trim();if(!t)return"—";let e=new Date(t);if(Number.isNaN(e.getTime()))return t;return e.toLocaleString()}function qo({settingsData:n,setStatus:t,mergeSettingsData:e}){let[i,r]=a(180),[s,o]=a(15),[l,f]=a(360),[_,$]=a(75),[u,h]=a(0.5),[p,v]=a(!1),[F,w]=a(120),[b,A]=a([]),[U,x]=a([]),[R,d]=a(!1),T=m(""),C=m(null),g=m(!0);K(()=>{return g.current=!0,()=>{g.current=!1}},[]);let M=W((k)=>{let N=Do(k);r(N.compactionTimeoutSec),o(N.compactionBackoffBaseMin),f(N.compactionBackoffMaxMin),$(N.compactionThresholdPercent),h(N.compactionBackoffDecayFactor),v(N.progressWatchdogEnabled),w(N.progressWatchdogTimeoutSec),A(N.compactionBackoffs),x(N.progressWatchdogPhases),T.current=JSON.stringify({compactionTimeoutSec:N.compactionTimeoutSec,compactionBackoffBaseMin:N.compactionBackoffBaseMin,compactionBackoffMaxMin:N.compactionBackoffMaxMin,compactionThresholdPercent:N.compactionThresholdPercent,compactionBackoffDecayFactor:N.compactionBackoffDecayFactor,progressWatchdogEnabled:N.progressWatchdogEnabled,progressWatchdogTimeoutSec:N.progressWatchdogTimeoutSec})},[]);K(()=>{M(n||{})},[n,M]);let z=j(()=>JSON.stringify({compactionTimeoutSec:i,compactionBackoffBaseMin:s,compactionBackoffMaxMin:l,compactionThresholdPercent:_,compactionBackoffDecayFactor:u,progressWatchdogEnabled:p,progressWatchdogTimeoutSec:F}),[i,s,l,_,u,p,F]);K(()=>{if(z===T.current)return;if(C.current)clearTimeout(C.current);return C.current=setTimeout(async()=>{if(!g.current)return;let k=document.activeElement;if(k&&k.closest?.(".settings-number-stepper"))return;try{t?.("Saving compaction settings…","info");let N=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:z}),H=await N.json().catch(()=>({}));if(!g.current)return;if(!N.ok||!H?.ok||!H?.settings){t?.(H?.error||"Failed to save compaction settings.","error");return}T.current=z,e?.(H.settings),M({...n||{},...H.settings||{}}),t?.("Compaction settings saved.","success"),d(!0),setTimeout(()=>{if(g.current)d(!1),t?.(null)},4000)}catch(N){if(console.warn("[settings/compaction] Failed to persist compaction settings.",N),g.current)t?.("Failed to save compaction settings.","error")}},800),()=>{if(C.current)clearTimeout(C.current)}},[z,e,t,M,n]);let y=W(async(k)=>{try{t?.(`Clearing compaction suppression for ${k}…`,"info");let N=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:k})}),H=await N.json().catch(()=>({}));if(!N.ok||!H?.ok||!H?.settings){t?.(H?.error||"Failed to clear compaction suppression.","error");return}e?.(H.settings),M({...n||{},...H.settings||{}}),t?.(`Cleared compaction suppression for ${k}.`,"success")}catch(N){console.warn("[settings/compaction] Failed to clear compaction suppression.",N),t?.("Failed to clear compaction suppression.","error")}},[M,e,t,n]);return c`
        <div class="settings-section">
            ${R&&c`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${S}
                    label="compaction threshold"
                    value=${_}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${$}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${S}
                    label="compaction timeout"
                    value=${i}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${r}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${S}
                    label="compaction backoff base"
                    value=${s}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${o}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${S}
                    label="compaction backoff max"
                    value=${l}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${f}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${S}
                    label="backoff decay factor"
                    value=${Math.round(u*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(k)=>h(k/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${p} onChange=${(k)=>v(Boolean(k.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${S}
                    label="watchdog timeout"
                    value=${F}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!p}
                    onChange=${w}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${b.length===0?c`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:c`
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
                            ${b.map((k)=>c`
                                <tr>
                                    <td><code>${k.chatJid}</code></td>
                                    <td>${k.failureCount}</td>
                                    <td>${ae(k.backoffUntil)}</td>
                                    <td title=${k.lastErrorMessage||""}>${k.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>y(k.chatJid)}>
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
            ${U.length===0?c`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:c`
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
                            ${U.map((k)=>c`
                                <tr>
                                    <td><code>${k.chatJid}</code></td>
                                    <td>${k.phase}</td>
                                    <td>${ae(k.startedAt)}</td>
                                    <td>${ae(k.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var Ii=G(()=>{q();Bn()});function qi(n){let t=String(n||"").trim().toLowerCase();if(!t)return null;let e=Yo[t]||t;if(/^f(?:[1-9]|1[0-2])$/.test(e))return e;if(Oo.has(e))return e;if(e.length===1)return e;if(/^[a-z0-9]+$/.test(e))return e;return null}function Pn(n){let t=String(n||"").trim();if(!t)return null;let e=t.split("+").map((s)=>s.trim()).filter(Boolean);if(!e.length)return null;let i={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let s of e){let o=s.toLowerCase(),l=Zo[o];if(l){i[l]=!0;continue}if(i.key)return null;let f=qi(s);if(!f||f==="escape")return null;i.key=f}if(!i.key)return null;let r=[];if(i.ctrl)r.push("ctrl");if(i.meta)r.push("meta");if(i.alt)r.push("alt");if(i.shift)r.push("shift");return r.push(i.key),r.join("+")}function Si(n){return String(n||"").split(/[\n,]/).map((t)=>Pn(t)).filter((t)=>Boolean(t))}function $n(n){return n.join(", ")}function de(){let n=Fi(Di);if(!n||typeof n!=="object")return{};let t={};for(let e of On){let i=n[e.id];if(!Array.isArray(i))continue;let r=i.map((s)=>Pn(String(s||""))).filter((s)=>Boolean(s));t[e.id]=[...new Set(r)]}return t}function pe(n){if(J(Di,JSON.stringify(n)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:n}}))}function Zi(n){return So.get(n)}function Jn(n){let t=de()[n];if(Array.isArray(t))return t;return[...Zi(n).defaultBindings]}function Yi(n,t){let e=de(),i=Zi(n).defaultBindings,r=[...new Set(t.map((s)=>Pn(s)).filter((s)=>Boolean(s)))];if(r.length===i.length&&r.every((s,o)=>s===i[o]))delete e[n];else e[n]=r;pe(e)}function he(n){if(!n){pe({});return}let t=de();delete t[n],pe(t)}function xt(){let n={};for(let t of On)n[t.id]=Jn(t.id);return n}function Jo(n){let t=typeof n==="string"?n:"";if(!t)return"";if(t.length===1)return t.toLowerCase();return qi(t)||t.toLowerCase()}function Eo(n){let t=Pn(n);if(!t)return null;let e={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let i of t.split("+")){if(i==="ctrl"||i==="meta"||i==="alt"||i==="shift"){e[i]=!0;continue}e.key=i}return e.key?e:null}function nc(n,t){let e=Eo(t);if(!e)return!1;if(Jo(n?.key)!==e.key)return!1;let r=!e.shift&&e.key.length===1&&/[^a-z0-9]/i.test(e.key);return Boolean(n?.ctrlKey)===e.ctrl&&Boolean(n?.metaKey)===e.meta&&Boolean(n?.altKey)===e.alt&&(r||Boolean(n?.shiftKey)===e.shift)}function hu(n,t){return Jn(t).some((e)=>nc(n,e))}var Di="piclaw_keyboard_shortcuts_v1",On,So,Zo,Yo,Oo;var Oi=G(()=>{On=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],So=new Map(On.map((n)=>[n.id,n])),Zo={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},Yo={esc:"escape",return:"enter",spacebar:"space"},Oo=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var Ji={};O(Ji,{KeyboardSection:()=>ec});function tc(n,t,e){let i=String(n||"").trim().toLowerCase();if(!i)return!0;return[t.label,t.description,e,...t.defaultBindings||[]].some((r)=>String(r||"").toLowerCase().includes(i))}function ec({filter:n="",setStatus:t}){let[e,i]=a(()=>{let f=xt();return Object.fromEntries(Object.entries(f).map(([_,$])=>[_,$n($)]))});K(()=>{let f=()=>{let _=xt();i(Object.fromEntries(Object.entries(_).map(([$,u])=>[$,$n(u)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",f),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",f)},[]);let r=j(()=>On.filter((f)=>{let _=String(e[f.id]||"");return tc(n,f,_)}),[e,n]),s=(f)=>{let _=String(e[f]||"").trim(),u=(_?_.split(/[\n,]/).map((p)=>p.trim()).filter(Boolean):[]).filter((p)=>!Pn(p));if(u.length>0){t?.(`Invalid shortcut: ${u[0]}. Escape is reserved and cannot be rebound.`,"error");return}let h=Si(_);Yi(f,h),i((p)=>({...p,[f]:$n(Jn(f))})),t?.("Keyboard shortcuts saved.","success")},o=(f)=>{he(f),i((_)=>({..._,[f]:$n(Jn(f))})),t?.("Keyboard shortcut reset to default.","success")};return c`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{he();let f=xt();i(Object.fromEntries(Object.entries(f).map(([_,$])=>[_,$n($)]))),t?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${r.map((f)=>c`
                    <div class="settings-shortcut-card" key=${f.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${f.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${f.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${$n(f.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${e[f.id]||""}
                                placeholder=${$n(f.defaultBindings)}
                                onInput=${(_)=>i(($)=>({...$,[f.id]:_.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>s(f.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>o(f.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${r.length===0&&c`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var Ei=G(()=>{q();Oi()});function er(n,t=we){let e=Number(n);if(!Number.isFinite(e))return t;return Math.min(300,Math.max(15,Math.round(e)))}function ir(n,t=$e){let e=Number(n);if(!Number.isFinite(e))return t;return Math.min(8,Math.max(0,Math.round(e)))}function ye(){return{refreshIntervalSec:er(fe(nr,we),we),folderPreviewDepth:ir(fe(tr,$e),$e)}}function rr(n={}){let t=ye(),e={refreshIntervalSec:er(Object.prototype.hasOwnProperty.call(n,"refreshIntervalSec")?n.refreshIntervalSec:t.refreshIntervalSec,t.refreshIntervalSec),folderPreviewDepth:ir(Object.prototype.hasOwnProperty.call(n,"folderPreviewDepth")?n.folderPreviewDepth:t.folderPreviewDepth,t.folderPreviewDepth)};if(J(nr,String(e.refreshIntervalSec)),J(tr,String(e.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(ic,{detail:{settings:e}}));return e}var ic="piclaw:workspace-client-settings-updated",nr="workspaceRefreshIntervalSec",tr="workspaceFolderPreviewDepth",we=60,$e=3;var sr=()=>{};var cr={};O(cr,{WorkspaceSection:()=>rc});function or(n={}){let t=n.workspaceSettings||{};return{webTerminalEnabled:t.webTerminalEnabled!==!1,vncAllowDirect:t.vncAllowDirect!==!1,treeMaxDepth:t.treeMaxDepth??4,treeMaxEntries:t.treeMaxEntries??5000}}function rc({settingsData:n,setStatus:t,mergeSettingsData:e}){let[i,r]=a(!0),[s,o]=a(!0),[l,f]=a(4),[_,$]=a(5000),[u,h]=a(60),[p,v]=a(3),[F,w]=a(!1),[b,A]=a(!1),U=m(""),x=m(null),R=m(null),d=m(null),T=m(!0);K(()=>{return T.current=!0,()=>{if(T.current=!1,x.current)clearTimeout(x.current);if(R.current)clearTimeout(R.current);if(d.current)clearTimeout(d.current)}},[]);let C=W((z)=>{let y=or(z),k=ye();r(y.webTerminalEnabled),o(y.vncAllowDirect),f(y.treeMaxDepth),$(y.treeMaxEntries),h(k.refreshIntervalSec),v(k.folderPreviewDepth),U.current=JSON.stringify(y)},[]);K(()=>{C(n||{})},[n,C]);let g=j(()=>JSON.stringify(or({workspaceSettings:{webTerminalEnabled:i,vncAllowDirect:s,treeMaxDepth:l,treeMaxEntries:_}})),[i,s,l,_]);K(()=>{if(g===U.current)return;if(x.current)clearTimeout(x.current);return x.current=setTimeout(async()=>{if(!T.current)return;let z=document.activeElement;if(z&&z.closest?.(".settings-number-stepper"))return;try{let y=await oe(JSON.parse(g));if(!T.current||!y?.ok||!y?.settings)return;if(U.current=g,e?.({workspaceSettings:y.settings}),t?.(null),w(!0),R.current)clearTimeout(R.current);R.current=setTimeout(()=>{if(T.current)w(!1)},4000)}catch(y){t?.(String(y?.message||y),"error")}},800),()=>{if(x.current)clearTimeout(x.current)}},[g,e,t]);let M=W((z)=>{let y=rr(z);if(h(y.refreshIntervalSec),v(y.folderPreviewDepth),A(!0),d.current)clearTimeout(d.current);d.current=setTimeout(()=>{if(T.current)A(!1)},3000)},[]);return c`
        <div class="settings-section">
            ${F&&c`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${b&&c`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${i} onChange=${(z)=>r(z.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${s} onChange=${(z)=>o(z.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${S}
                    label="workspace tree max depth"
                    value=${l}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${f}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${S}
                    label="workspace tree max entries"
                    value=${_}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${$}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${S}
                    label="workspace refresh interval"
                    value=${u}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(z)=>M({refreshIntervalSec:z})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${S}
                    label="folder preview scan depth"
                    value=${p}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(z)=>M({folderPreviewDepth:z})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var lr=G(()=>{q();wn();sr();Bn()});var ur={};O(ur,{EnvironmentSection:()=>sc});function ve(n={}){let t=n.environmentSettings||n.settings||n.environment||{};return{variables:Array.isArray(t.variables)?t.variables:[],overrides:t.overrides&&typeof t.overrides==="object"?t.overrides:{},count:Number(t.count||0),overrideCount:Number(t.overrideCount||0),keychainEnvNames:Array.isArray(t.keychainEnvNames)?t.keychainEnvNames:[]}}function sc({settingsData:n,filter:t="",setStatus:e,mergeSettingsData:i}){let[r,s]=a(()=>ve(n||{})),[o,l]=a({}),[f,_]=a(""),[$,u]=a(""),[h,p]=a(null);K(()=>{s(ve(n||{})),l({})},[n]);let v=W((x)=>{let R=ve({environmentSettings:x?.settings||x});return s(R),i?.({environmentSettings:R}),l({}),R},[i]),F=W(async()=>{try{let x=await ce();if(x?.ok)v(x.settings);e?.("Environment refreshed.","info")}catch(x){e?.(String(x?.message||x),"error")}},[v,e]),w=W(async(x,R)=>{let d=String(x||"").trim();if(!d)return;p(d);try{let T=await yt({action:"set",name:d,value:String(R??"")});if(T?.ok)v(T.settings);if(e?.(`Saved environment override for ${d}.`,"info"),d===f.trim())_(""),u("")}catch(T){e?.(String(T?.message||T),"error")}finally{p(null)}},[v,f,e]),b=W(async(x)=>{let R=String(x||"").trim();if(!R)return;p(R);try{let d=await yt({action:"clear",name:R});if(d?.ok)v(d.settings);e?.(`Cleared environment override for ${R}.`,"info")}catch(d){e?.(String(d?.message||d),"error")}finally{p(null)}},[v,e]),A=j(()=>{let x=String(t||"").trim().toLowerCase(),R=Array.isArray(r.variables)?r.variables:[];if(!x)return R;return R.filter((d)=>{return`${d?.name||""} ${d?.value||""} ${d?.source||""}`.toLowerCase().includes(x)})},[r.variables,t]),U=W((x,R)=>{l((d)=>({...d||{},[x]:R}))},[]);return c`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${F}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${f}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(x)=>_(x.target.value)}
                    />
                    <input
                        type="text"
                        value=${$}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(x)=>u(x.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!f.trim()||h===f.trim()}
                        onClick=${()=>w(f,$)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${r.count} variables visible • ${r.overrideCount} overrides active • ${r.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${A.map((x)=>{let R=String(x?.name||""),d=Object.prototype.hasOwnProperty.call(o,R)?o[R]:x.value,T=d!==x.value,C=h===R;return c`
                        <div class="settings-tool-row" key=${R} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${R}>${R}</span>
                            <input
                                type="text"
                                value=${d}
                                spellcheck="false"
                                onInput=${(g)=>U(R,g.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${x.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${x.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${C||!T} onClick=${()=>w(R,d)}>Save</button>
                                <button type="button" disabled=${C||!x.overridden} onClick=${()=>b(R)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${A.length===0&&c`<p class="settings-hint">No environment variables match "${t}".</p>`}
            </div>
        </div>
    `}var fr=G(()=>{q();wn()});var _r={};O(_r,{ProvidersSection:()=>cc});function oc(n){switch(n){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function cc({providers:n,setStatus:t}){let[e,i]=a(null),[r,s]=a(null),[o,l]=a({}),f=W((w,b)=>{l((A)=>({...A,[w]:b}))},[]),_=W(async(w)=>{let b=(o.apiKey||"").trim();if(!b){t?.("API key cannot be empty.","error");return}i(w),t?.(`Configuring ${w}…`,"info");try{let A=JSON.stringify({provider:w,method:"api_key",api_key:b}),U=await fn("default",`/login __step2 ${A}`,null,[]);if(U?.command?.status==="error"){t?.(U.command.message,"error");return}t?.(U?.command?.message||`${w} configured.`,"success"),s(null),l({})}catch(A){t?.(String(A.message||A),"error")}finally{i(null)}},[o,t]),$=W(async(w,b)=>{i(w),t?.(`Configuring ${w}…`,"info");try{let A={provider:w,method:"custom"};for(let R of b.customFields||[])A[R.key]=(o[R.key]||"").trim();let U=JSON.stringify(A),x=await fn("default",`/login __step2 ${U}`,null,[]);if(x?.command?.status==="error"){t?.(x.command.message,"error");return}t?.(x?.command?.message||`${w} configured.`,"success"),s(null),l({})}catch(A){t?.(String(A.message||A),"error")}finally{i(null)}},[o,t]),u=W(async(w)=>{i(w),t?.(`Starting OAuth for ${w}…`,"info");try{let b=JSON.stringify({provider:w}),U=(await fn("default",`/login __step1 ${b}`,null,[]))?.command?.message||"";if(U.includes("http")){let x=U.match(/(https?:\/\/[^\s)]+)/);if(x)window.open(x[1],"_blank","noopener"),t?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else t?.(U,"success")}else t?.(U||`OAuth flow started for ${w}. Check the chat.`,"success")}catch(b){t?.(String(b.message||b),"error")}finally{i(null)}},[t]),h=W(async(w)=>{if(e)return;i(w),t?.(`Logging out ${w}…`,"info");try{await fn("default",`/logout ${w}`,null,[]),t?.(`Logged out ${w}. Restart may be needed.`,"success")}catch(b){t?.(String(b.message||b),"error")}finally{i(null)}},[e,t]),p=n||[],v=(w)=>r===w,F=(w)=>{s((b)=>b===w?null:w),l({})};return c`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${p.map((w)=>c`
                    <div class=${`settings-provider-card${w.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!w.configured&&F(w.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${w.name}</strong>
                                <span class="settings-provider-id">${w.id}</span>
                                ${w.configured&&c`<span class="settings-tag settings-tag-skill">${oc(w.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${w.hasOAuth&&c`<span class="settings-tag">OAuth</span>`}
                                ${w.hasApiKey&&c`<span class="settings-tag">API Key</span>`}
                                ${w.isCustom&&c`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${w.configured?c`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${e===w.id} onClick=${(b)=>{b.stopPropagation(),h(w.id)}}
                                    >${e===w.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${e===w.id} onClick=${(b)=>{b.stopPropagation(),F(w.id)}}
                                    >Reconfigure</button>
                                `:c`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${e===w.id} onClick=${(b)=>{b.stopPropagation(),F(w.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${v(w.id)&&c`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${w.hasOAuth&&c`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${e===w.id}
                                            onClick=${()=>u(w.id)}>
                                            ${e===w.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${w.hasApiKey&&c`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${o.apiKey||""}
                                                onInput=${(b)=>f("apiKey",b.target.value)}
                                                placeholder=${w.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${e===w.id||!(o.apiKey||"").trim()}
                                                onClick=${()=>_(w.id)}>
                                                ${e===w.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${w.isCustom&&c`
                                    <div class="settings-provider-method">
                                        ${(w.customFields||[]).map((b)=>c`
                                            <div class="settings-provider-field-row">
                                                <label>${b.label}${b.required?" *":""}</label>
                                                <input type="text" value=${o[b.key]||""}
                                                    onInput=${(A)=>f(b.key,A.target.value)}
                                                    placeholder=${b.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${e===w.id}
                                                onClick=${()=>$(w.id,w)}>
                                                ${e===w.id?"Configuring…":"Save configuration"}
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
    `}var gr=G(()=>{q();wn()});var ar={};O(ar,{ModelsSection:()=>gc});function fc(n){return typeof n==="string"&&n.toLowerCase()==="anthropic"}function _c({thinkingLevel:n,supportsThinking:t,provider:e,availableLevels:i,onSetLevel:r,disabled:s}){let o=fc(e)?lc:uc,l=i&&i.length>1?i:["off","minimal","low","medium","high"],f=Math.max(0,l.indexOf(n??"off"));if(!t)return c`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return c`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${o[l[f]]||l[f]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${l.length-1} step="1" value=${f} disabled=${s}
                    onInput=${(_)=>r(l[parseInt(_.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${l.map((_,$)=>c`<span class=${$===f?"active":""} onClick=${()=>!s&&r(_)}>${o[_]||_}</span>`)}
                </div>
            </div>
        </div>
    `}function gc({filter:n=""}){let[t,e]=a(null),[i,r]=a(!1),[s,o]=a("off"),[l,f]=a(!1),[_,$]=a(["off"]),[u,h]=a(!1),p=W(async()=>{let d=await le();if(e(d),d.thinking_level)o(d.thinking_level);if(f(Boolean(d.supports_thinking)),Array.isArray(d.available_thinking_levels)&&d.available_thinking_levels.length>0)$(d.available_thinking_levels);return d},[]);K(()=>{p().catch(()=>e({models:[],model_options:[]}))},[]);let v=W(async(d)=>{if(i)return;r(!0);try{await fn("default",`/model ${d}`,null,[]),await p()}catch(T){console.error("Failed to switch model:",T)}finally{r(!1)}},[i,p]),F=W(async(d)=>{if(u)return;h(!0),o(d);try{let T=await fn("default",`/thinking ${d}`,null,[]);if(T?.command?.thinking_level)o(T.command.thinking_level);f(T?.command?.supports_thinking!==!1),await p()}catch(T){console.error("Failed to set thinking:",T),await p().catch((C)=>{})}finally{h(!1)}},[u,p]);if(!t)return c`<div class="settings-loading">Loading models\u2026</div>`;let w=t.model_options||[],b=t.current,U=w.find((d)=>d.label===b)?.provider||"",x=n.toLowerCase(),R=x?w.filter((d)=>d.label.toLowerCase().includes(x)||(d.provider||"").toLowerCase().includes(x)):w;return c`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${R.map((d)=>c`
                            <tr class=${d.label===b?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${d.label===b} disabled=${i} onChange=${()=>v(d.label)} /></td>
                                <td>${d.name||d.label}</td><td>${d.provider}</td>
                                <td>${d.context_window?(d.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${d.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${R.length===0&&c`<tr><td colspan="5" class="settings-empty">No models match "${n}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${_c}
                    thinkingLevel=${s}
                    supportsThinking=${l}
                    provider=${U}
                    availableLevels=${_}
                    onSetLevel=${F}
                    disabled=${u||i} />
            </div>
        </div>
    `}var lc,uc;var pr=G(()=>{q();wn();lc={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},uc={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});function ke(n){let t=String(n||"").trim().toLowerCase();if(!t)return"default";if(t==="solarized-dark"||t==="solarized-light")return"solarized";if(t==="github-dark"||t==="github-light")return"github";if(t==="tokyo-night")return"tokyo";return t}function $r(n){if(!n)return null;let t=String(n).trim();if(!t)return null;let e=t.startsWith("#")?t.slice(1):t;if(!/^[0-9a-fA-F]{3}$/.test(e)&&!/^[0-9a-fA-F]{6}$/.test(e))return null;let i=e.length===3?e.split("").map((s)=>s+s).join(""):e,r=parseInt(i,16);return{r:r>>16&255,g:r>>8&255,b:r&255,hex:`#${i.toLowerCase()}`}}function pc(n,t){try{if(document.body){n.style.display="none",document.body.appendChild(n);let e=getComputedStyle(n).color||n.style.color;return document.body.removeChild(n),e}}catch{return t}return t}function dc(n){if(!n||typeof document>"u")return null;let t=String(n).trim();if(!t)return null;let e=document.createElement("div");if(e.style.color="",e.style.color=t,!e.style.color)return null;let r=pc(e,e.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!r)return null;let s=parseInt(r[1],10),o=parseInt(r[2],10),l=parseInt(r[3],10);if(![s,o,l].every((_)=>Number.isFinite(_)))return null;let f=`#${[s,o,l].map((_)=>_.toString(16).padStart(2,"0")).join("")}`;return{r:s,g:o,b:l,hex:f}}function Rn(n){return $r(n)||dc(n)}function Te(n,t,e){let i=Math.round(n.r+(t.r-n.r)*e),r=Math.round(n.g+(t.g-n.g)*e),s=Math.round(n.b+(t.b-n.b)*e);return`rgb(${i} ${r} ${s})`}function kt(n,t){return`rgba(${n.r}, ${n.g}, ${n.b}, ${t})`}function hc(n){let t=n.r/255,e=n.g/255,i=n.b/255,r=t<=0.03928?t/12.92:Math.pow((t+0.055)/1.055,2.4),s=e<=0.03928?e/12.92:Math.pow((e+0.055)/1.055,2.4),o=i<=0.03928?i/12.92:Math.pow((i+0.055)/1.055,2.4);return 0.2126*r+0.7152*s+0.0722*o}function wc(n){return hc(n)>0.4?"#000000":"#ffffff"}function yr(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Be(n){return dr[n]||dr.default}function $c(n){return n.mode==="auto"?yr():n.mode}function vr(n,t){let e=Be(n);if(t==="dark"&&e.dark)return e.dark;if(t==="light"&&e.light)return e.light;return e.dark||e.light||an}function gn(n,t,e){let i=Rn(n);if(!i)return n;return Te(i,t,e)}function br(n,t,e){let i=Rn(t);if(!i)return n;let s=$r(e==="dark"?"#ffffff":"#000000");return{...n,bgPrimary:gn(n.bgPrimary,i,0.08),bgSecondary:gn(n.bgSecondary,i,0.12),bgHover:gn(n.bgHover,i,0.16),textPrimary:gn(n.textPrimary,i,e==="dark"?0.08:0.06),textSecondary:gn(n.textSecondary,i,e==="dark"?0.12:0.1),borderColor:gn(n.borderColor,i,0.1),accent:i.hex,accentHover:s?Te(i,s,0.18):i.hex,warning:gn(n.warning||an.warning,i,0.14),danger:gn(n.danger,i,0.16),success:gn(n.success,i,0.16)}}function yc(n,t){let e=Rn(n?.warning);if(e)return e.hex;let i=Rn(t==="dark"?Rt.warning:an.warning)||Rn(an.warning),r=Rn(n?.accent);if(i&&r)return Te(i,r,t==="dark"?0.18:0.14);return t==="dark"?Rt.warning:an.warning}function vc(n,t){if(typeof document>"u")return;let e=document.documentElement,i=n.accent,r=Rn(i),s=r?kt(r,t==="dark"?0.35:0.2):n.searchHighlight||n.searchHighlightColor,o=r?kt(r,t==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",l=r?kt(r,t==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",f=r?wc(r):t==="dark"?"#000000":"#ffffff",_=r?kt(r,t==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",$=yc(n,t),u={"--bg-primary":n.bgPrimary,"--bg-secondary":n.bgSecondary,"--bg-hover":n.bgHover,"--text-primary":n.textPrimary,"--text-secondary":n.textSecondary,"--border-color":n.borderColor,"--accent-color":i,"--accent-hover":n.accentHover||i,"--accent-color-alpha":_,"--accent-soft":o,"--accent-soft-strong":l,"--accent-contrast-text":f,"--warning-color":$,"--danger-color":n.danger||an.danger,"--success-color":n.success||an.success,"--search-highlight-color":s||"rgba(29, 155, 240, 0.2)"};Object.entries(u).forEach(([h,p])=>{if(p)e.style.setProperty(h,p)})}function bc(){if(typeof document>"u")return;let n=document.documentElement;ac.forEach((t)=>n.style.removeProperty(t))}function Hn(n,t={}){if(typeof document>"u")return null;let e=typeof t.id==="string"&&t.id.trim()?t.id.trim():null,i=e?document.getElementById(e):document.querySelector(`meta[name="${n}"]`);if(!i)i=document.createElement("meta"),document.head.appendChild(i);if(i.setAttribute("name",n),e)i.setAttribute("id",e);return i}function hr(n){let t=ke(Mn?.theme||"default"),e=Mn?.tint?String(Mn.tint).trim():null,i=vr(t,n);if(t==="default"&&e)i=br(i,e,n);if(i?.bgPrimary)return i.bgPrimary;return n==="dark"?Rt.bgPrimary:an.bgPrimary}function xc(n,t){if(typeof document>"u")return;let e=Hn("theme-color",{id:"dynamic-theme-color"});if(e&&n)e.removeAttribute("media"),e.setAttribute("content",n);let i=Hn("theme-color",{id:"theme-color-light"});if(i)i.setAttribute("media","(prefers-color-scheme: light)"),i.setAttribute("content",hr("light"));let r=Hn("theme-color",{id:"theme-color-dark"});if(r)r.setAttribute("media","(prefers-color-scheme: dark)"),r.setAttribute("content",hr("dark"));let s=Hn("msapplication-TileColor");if(s&&n)s.setAttribute("content",n);let o=Hn("msapplication-navbutton-color");if(o&&n)o.setAttribute("content",n);let l=Hn("apple-mobile-web-app-status-bar-style");if(l)l.setAttribute("content",t==="dark"?"black-translucent":"default")}function kc(){if(typeof window>"u")return;let n={...Mn,mode:wr};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:n}))}function Tc(){if(typeof window>"u")return"web:default";try{let t=new URL(window.location.href).searchParams.get("chat_jid");return t&&t.trim()?t.trim():"web:default"}catch{return"web:default"}}function Re(n,t={}){if(typeof window>"u"||typeof document>"u")return;let e=ke(n?.theme||"default"),i=n?.tint?String(n.tint).trim():null,r=Be(e),s=$c(r),o=vr(e,s);Mn={theme:e,tint:i},wr=s;let l=document.documentElement;l.dataset.theme=s,l.dataset.colorTheme=e,l.dataset.tint=i?String(i):"",l.style.colorScheme=s;let f=o;if(e==="default"&&i)f=br(o,i,s);if(e==="default"&&!i)bc();else vc(f,s);if(xc(f.bgPrimary,s),kc(),t.persist!==!1)if(J(xe,e),i)J(Bt,i);else J(Bt,"")}function Tt(){if(Be(Mn.theme).mode!=="auto")return;Re(Mn,{persist:!1})}function Bc(){if(typeof window>"u")return;let n=ke(Cn(xe)||"default"),t=(()=>{let e=Cn(Bt);return e?e.trim():null})();Re({theme:n,tint:t},{persist:!1})}function zu(){if(typeof window>"u")return()=>{};if(Bc(),window.matchMedia&&!be){let n=window.matchMedia("(prefers-color-scheme: dark)");if(n.addEventListener)n.addEventListener("change",Tt);else if(n.addListener)n.addListener(Tt);return be=!0,()=>{if(n.removeEventListener)n.removeEventListener("change",Tt);else if(n.removeListener)n.removeListener(Tt);be=!1}}return()=>{}}function Me(n){if(!n||typeof n!=="object")return;let t=Tc(),e=n.chat_jid||n.chatJid||null,i=n.theme??n.name??n.colorTheme,r=n.tint??null;if(!e||e===t)Re({theme:i||"default",tint:r},{persist:!1});J(xe,i||"default"),J(Bt,r||"")}function Ku(){if(typeof document>"u")return"light";let n=document.documentElement?.dataset?.theme;if(n==="dark"||n==="light")return n;return yr()}var xe="piclaw_theme",Bt="piclaw_tint",an,Rt,dr,ac,Mn,wr="light",be=!1;var xr=G(()=>{an={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},Rt={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},dr={default:{label:"Default",mode:"auto",light:an,dark:Rt},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},ac=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],Mn={theme:"default",tint:null}});var Tr={};O(Tr,{ThemeSection:()=>Rc});function kr(n={}){return{uiTheme:typeof n.uiTheme==="string"&&n.uiTheme.trim()?n.uiTheme.trim():"default",uiTint:typeof n.uiTint==="string"&&n.uiTint.trim()?n.uiTint.trim():""}}function Rc({themes:n,colorKeys:t,settingsData:e,setStatus:i,mergeSettingsData:r}){let[s,o]=a("default"),[l,f]=a(""),[_,$]=a(!1),u=m(""),h=m(null),p=m(!0);K(()=>{return p.current=!0,()=>{p.current=!1}},[]);let v=W((U)=>{let x=kr(U);o(x.uiTheme),f(x.uiTint),u.current=JSON.stringify(x)},[]);K(()=>{if(e){v(e);return}v({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[e,v]);let F=W((U,x)=>{Me({theme:U,tint:x||null}),o(U||"default"),f(x||"")},[]),w=j(()=>JSON.stringify(kr({uiTheme:s,uiTint:l})),[s,l]);K(()=>{if(w===u.current)return;if(h.current)clearTimeout(h.current);return h.current=setTimeout(async()=>{if(!p.current)return;$(!0);try{let U=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),x=await U.json().catch(()=>({}));if(!p.current)return;if(!U.ok||!x?.ok||!x?.settings){i?.(x?.error||"Failed to save appearance settings.","error");return}u.current=w,r?.(x.settings),i?.("Appearance synced across clients.","success")}catch(U){if(!p.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",U),i?.("Failed to save appearance settings.","error")}finally{if(p.current)$(!1)}},250),()=>{if(h.current)clearTimeout(h.current)}},[w,r,i]);let b=t||[],A=n||[];return c`
        <div class="settings-section">
            ${_&&c`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${s==="default"}
                        onChange=${()=>F("default",l)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${l||"#1d9bf0"}
                        onInput=${(U)=>{let x=U.target.value;if(f(x),s==="default")Me({theme:"default",tint:x})}} />
                    ${l&&c`
                        <button class="settings-tint-clear" onClick=${()=>F("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${l||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${b.map((U)=>c`<th class="settings-swatch-header">${U.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${A.filter((U)=>U.name!=="default").map((U)=>c`
                        <tr class=${U.name===s?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>F(U.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${U.name===s} onChange=${()=>F(U.name,"")} /></td>
                            <td><strong>${U.label}</strong></td>
                            <td>${U.mode}</td>
                            ${b.map((x)=>{let R=U.colors?.[x];return c`<td class="settings-swatch-cell">
                                    ${R?c`<span class="settings-color-swatch" style=${"background:"+R} title=${R}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var Br=G(()=>{q();xr()});var Mr={};O(Mr,{__scheduledTasksSettingsTest:()=>Uc,ScheduledTasksSection:()=>Ac});function Nn(n){if(!n)return"—";let t=new Date(n);if(Number.isNaN(t.getTime()))return n;return t.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function Rr(n){let t=Number(n);if(!Number.isFinite(t))return"—";if(t<1000)return`${Math.round(t)}ms`;return`${(t/1000).toFixed(t<1e4?1:0)}s`}function Ne(n){if(!n)return"—";if(n.schedule_type==="once")return`once · ${Nn(n.schedule_value)}`;if(n.schedule_type==="interval")return`interval · ${n.schedule_value}`;if(n.schedule_type==="cron")return`cron · ${n.schedule_value}`;return`${n.schedule_type||"schedule"} · ${n.schedule_value||"—"}`}function We(n){let t=n?.task_kind||"agent";return t==="internal"?"internal/protected":t}function Fe(n){return(n?.task_kind||"agent")==="internal"}function Nc(n){if(!n)return"";let t=String(n).replace(/\s+/g," ").trim();return t.length>180?`${t.slice(0,179)}…`:t}function mn({children:n,type:t="neutral"}){return c`<span class=${`settings-task-pill settings-task-pill-${t}`}>${n}</span>`}function Wc({task:n}){let t=Array.isArray(n?.recent_run_logs)?n.recent_run_logs:[];if(!t.length)return c`<p class="settings-hint">No run logs recorded yet.</p>`;return c`
        <div class="settings-task-run-list">
            ${t.map((e)=>c`
                <div class=${`settings-task-run-row settings-task-run-${e.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${mn} type=${e.status==="error"?"error":"success"}>${e.status||"unknown"}<//>
                        <span>${Nn(e.run_at)}</span>
                        <span>${Rr(e.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${e.error_summary||Nc(e.error)||e.result_summary||e.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function Fc({task:n,onAction:t}){if(!n)return c`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let e=Fe(n);return c`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${n.summary||n.id}</h4>
                    <code>${n.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${n.status==="active"&&c`<button onClick=${()=>t("pause",n)}>Pause</button>`}
                    ${n.status==="paused"&&c`<button onClick=${()=>t("resume",n)}>Resume</button>`}
                    <button class="danger" onClick=${()=>t("delete",n)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${n.status||"—"}</strong>
                <span>Kind</span><strong>${We(n)}</strong>
                <span>Schedule</span><strong>${Ne(n)}</strong>
                <span>Next run</span><strong>${Nn(n.next_run)}</strong>
                <span>Last run</span><strong>${Nn(n.last_run)}</strong>
                <span>Last result</span><strong>${n.latest_run_log?.status||n.last_result||"—"}</strong>
                <span>Chat</span><code>${n.chat_jid||"—"}</code>
                <span>Model</span><code>${n.model||"default"}</code>
                ${n.cwd&&c`<span>CWD</span><code>${n.cwd}</code>`}
                ${n.timeout_sec&&c`<span>Timeout</span><strong>${n.timeout_sec}s</strong>`}
                ${e&&c`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${n.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${n.command||n.prompt||n.command_summary||n.prompt_summary||n.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${Wc} task=${n} />
        </div>
    `}function Ac({filter:n="",setStatus:t}){let[e,i]=a([]),[r,s]=a({active:0,paused:0,completed:0}),[o,l]=a("all"),[f,_]=a(""),[$,u]=a(!0),[h,p]=a(null),[v,F]=a(null),[w,b]=a(null),[A,U]=a(!1),x=W(async(g={})=>{u(!0),p(null);try{let M=await ne({status:o,chatJid:f.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});i(M.tasks||[]),s(M.counts||{active:0,paused:0,completed:0});let z=g.selectedId||v,y=(M.tasks||[]).find((k)=>k.id===z)||(M.tasks||[])[0]||null;F(y?.id||null),b(y)}catch(M){p(M?.message||"Failed to load scheduled tasks.")}finally{u(!1)}},[o,f,v]);K(()=>{x()},[x]);let R=String(n||"").trim().toLowerCase(),d=j(()=>{if(!R)return e;return e.filter((g)=>[g.id,g.chat_jid,g.status,g.task_kind,g.schedule_type,g.schedule_value,g.summary,g.prompt_summary,g.command_summary,g.latest_run_log?.error_summary].some((M)=>String(M||"").toLowerCase().includes(R)))},[e,R]),T=W((g)=>{F(g?.id||null),b(g||null)},[]),C=W(async(g,M)=>{if(!M||A)return;let z=Fe(M),y=M.summary||M.command_summary||M.prompt_summary||M.id,k=g==="delete"?`Delete scheduled task ${M.id}?

${y}`:`${g==="pause"?"Pause":"Resume"} scheduled task ${M.id}?

${y}`;if(!window.confirm(k))return;if(z&&!window.confirm(`Task ${M.id} is internal/protected. Continue with ${g}?`))return;U(!0),t?.(`${g==="delete"?"Deleting":g==="pause"?"Pausing":"Resuming"} ${M.id}…`,"info");try{await te(g,M.id,{allowInternal:z}),t?.(`Scheduled task ${M.id} ${g==="delete"?"deleted":g==="pause"?"paused":"resumed"}.`,"success"),await x({selectedId:g==="delete"?null:M.id})}catch(N){t?.(N?.message||`Failed to ${g} task.`,"error")}finally{U(!1)}},[A,x,t]);return c`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${mn} type="active">Active ${r.active||0}<//>
                    <${mn} type="paused">Paused ${r.paused||0}<//>
                    <${mn} type="completed">Completed ${r.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${o} onChange=${(g)=>l(g.target.value)}>
                        ${Mc.map((g)=>c`<option value=${g}>${g==="all"?"All statuses":g}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${f} onInput=${(g)=>_(g.target.value)} />
                    <button onClick=${()=>x()} disabled=${$}>Refresh</button>
                </div>
            </div>

            ${$&&c`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${h&&c`<div class="settings-error-state">${h}</div>`}
            ${!$&&!h&&e.length===0&&c`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/e`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!$&&!h&&e.length>0&&c`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${d.map((g)=>c`
                            <button class=${`settings-task-row ${g.id===v?"active":""}`} onClick=${()=>T(g)}>
                                <span class="settings-task-row-main">
                                    <strong>${g.summary||g.id}</strong>
                                    <span>${Ne(g)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${mn} type=${g.status||"neutral"}>${g.status}<//>
                                    <${mn}>${We(g)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${Nn(g.next_run)} · Last ${Nn(g.last_run)}${g.latest_run_log?.status?` · ${g.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${d.length===0&&c`<p class="settings-hint">No tasks match “${n}”.</p>`}
                    </div>
                    <${Fc} task=${w&&d.some((g)=>g.id===w.id)?w:d[0]} onAction=${C} />
                </div>
            `}
        </div>
    `}var Mc,Uc;var Nr=G(()=>{q();wn();Mc=["all","active","paused","completed"];Uc={formatDateTime:Nn,formatDuration:Rr,labelForSchedule:Ne,kindLabel:We,isProtectedTask:Fe}});function Wr(n){return String(n||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function jn(n){return typeof n==="string"&&n.trim().length>0}function Ae(n,...t){let e=Wr(n);if(!e)return!0;let i=t.map((r)=>Wr(r)).filter(Boolean);for(let r of i)if(r.startsWith(e)||r.includes(e))return!0;return!1}function Fr(n){if(!Array.isArray(n))return null;let t=[],e=new Set;for(let i of n){let r=String(i||"").trim();if(!r)continue;let s=r.toLowerCase();if(e.has(s))continue;e.add(s),t.push(r)}return t}function En(n){let t=n&&typeof n==="object"?n:{};return{workspaceCommands:Fr(t.workspaceCommands),slashCommands:Fr(t.slashCommands)}}function Ar(n,t){if(!Array.isArray(n))return!0;return n.some((e)=>e.toLowerCase()===t.toLowerCase())}function zc(n){let t=Array.isArray(n?.commands)?n.commands:[],e=En(n?.settings),i=String(n?.query||"");return t.filter((r)=>Ar(e.workspaceCommands,r.id)).filter((r)=>Ae(i,r.label,r.description,...r.keywords||[])).map((r)=>({key:`workspace:${r.id}`,kind:"workspace",title:r.label,subtitle:r.description,searchText:`${r.label} ${r.description} ${(r.keywords||[]).join(" ")}`.trim(),visualHint:r.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:r.id}))}function Kc(n){let t=Array.isArray(n?.agents)?n.agents:[],e=String(n?.query||""),i=new Set;return t.filter((r)=>{let s=jn(r?.chat_jid)?r.chat_jid.trim():"";if(!s||i.has(s))return!1;if(r?.archived_at)return!1;return i.add(s),!0}).filter((r)=>Ae(e,`@${String(r?.agent_name||"").trim()}`,r?.session_name,r?.chat_jid)).map((r)=>{let s=jn(r?.agent_name)?r.agent_name.trim():String(r?.chat_jid||"").replace(/^[^:]+:/,""),o=jn(r?.session_name)?r.session_name.trim():"",l=String(r?.chat_jid||"").trim();return{key:`agent:${l}`,kind:"agent",title:`@${s}`,subtitle:o||l,searchText:`@${s} ${o} ${l}`.trim(),visualHint:s.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:l}})}function Lc(n){let t=Array.isArray(n?.slashCommands)?n.slashCommands:[],e=En(n?.settings),i=String(n?.query||""),r=new Set;return t.filter((s)=>{let o=jn(s?.name)?s.name.trim():"";if(!o||r.has(o.toLowerCase()))return!1;return r.add(o.toLowerCase()),Ar(e.slashCommands,o)}).filter((s)=>Ae(i,s?.name,s?.description,s?.source)).map((s)=>{let o=String(s?.name||"").trim(),l=jn(s?.description)?s.description.trim():"slash command",f=jn(s?.source)?s.source.trim():"";return{key:`slash:${o}`,kind:"slash",title:o,subtitle:l,searchText:`${o} ${l} ${String(s?.source||"")}`.trim(),visualHint:"/",categoryLabel:f||"Slash",actionHint:"Insert",commandName:o}})}function ju(n){return[...Kc({agents:n?.agents,query:n?.query}),...zc({commands:n?.workspaceCommands,settings:n?.settings,query:n?.query}),...Lc({slashCommands:n?.slashCommands,settings:n?.settings,query:n?.query})]}var Gn;var Ur=G(()=>{Gn=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var Lr={};O(Lr,{QuickActionsSection:()=>Cc});function zr(n,...t){let e=String(n||"").trim().toLowerCase();if(!e)return!0;return t.some((i)=>String(i||"").toLowerCase().includes(e))}function Kr(n){if(!Array.isArray(n))return null;return new Set(n.map((t)=>String(t||"").trim().toLowerCase()).filter(Boolean))}function Cc({filter:n="",setStatus:t,mergeSettingsData:e}){let[i,r]=a(()=>Gn.map((d)=>d.id)),[s,o]=a([]),[l,f]=a([]),[_,$]=a(!0),[u,h]=a(!1),p=W(async()=>{$(!0);try{let[d,T]=await Promise.all([re(),ie("web:default").catch(()=>({commands:[]}))]),C=En(d?.settings),g=Array.isArray(T?.commands)?T.commands:[];f(g),r(Array.isArray(C.workspaceCommands)?C.workspaceCommands:Gn.map((M)=>M.id)),o(Array.isArray(C.slashCommands)?C.slashCommands:g.map((M)=>String(M?.name||"").trim()).filter(Boolean))}catch(d){t?.(String(d?.message||d),"error")}finally{$(!1)}},[t]);K(()=>{p()},[p]);let v=j(()=>Kr(i),[i]),F=j(()=>Kr(s),[s]),w=j(()=>Gn.filter((d)=>zr(n,d.label,d.description,...d.keywords||[])),[n]),b=j(()=>l.filter((d)=>zr(n,d?.name,d?.description,d?.source)),[l,n]),A=W((d)=>{r((T)=>{let C=new Set((Array.isArray(T)?T:[]).map((g)=>String(g||"").trim()).filter(Boolean));if(C.has(d))C.delete(d);else C.add(d);return Gn.map((g)=>g.id).filter((g)=>C.has(g))})},[]),U=W((d)=>{o((T)=>{let C=new Set((Array.isArray(T)?T:[]).map((g)=>String(g||"").trim()).filter(Boolean));if(C.has(d))C.delete(d);else C.add(d);return l.map((g)=>String(g?.name||"").trim()).filter((g)=>g&&C.has(g))})},[l]),x=W(()=>{r(Gn.map((d)=>d.id)),o(l.map((d)=>String(d?.name||"").trim()).filter(Boolean))},[l]),R=W(async()=>{if(u)return;h(!0),t?.("Saving quick actions…","info");try{let d=await se({workspaceCommands:i,slashCommands:s}),T=En(d?.settings);e?.({quickActions:T}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:T}})),t?.("Quick Actions saved.","success")}catch(d){t?.(String(d?.message||d),"error")}finally{h(!1)}},[e,u,t,s,i]);if(_)return c`<div class="settings-loading">Loading…</div>`;return c`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${x} disabled=${u}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${R} disabled=${u}>
                    ${u?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${w.map((d)=>{let T=v?v.has(d.id.toLowerCase()):!0;return c`
                        <label class="settings-checkbox-row" key=${d.id}>
                            <input type="checkbox" checked=${T} onChange=${()=>A(d.id)} />
                            <div>
                                <div>${d.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${d.description}</div>
                            </div>
                        </label>
                    `})}
                ${w.length===0&&c`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${b.map((d)=>{let T=String(d?.name||"").trim(),C=F?F.has(T.toLowerCase()):!0;return c`
                        <label class="settings-checkbox-row" key=${T}>
                            <input type="checkbox" checked=${C} onChange=${()=>U(T)} />
                            <div>
                                <div><code>${T}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${d?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${b.length===0&&c`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var Cr=G(()=>{q();wn();Ur()});var Pr={};O(Pr,{KeychainSection:()=>mc});function Pc(n){if(!n)return"—";try{return new Date(n).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return n}}function mc({filter:n=""}){let[t,e]=a([]),[i,r]=a(!0),[s,o]=a(null),[l,f]=a(!1),[_,$]=a(""),[u,h]=a(""),[p,v]=a(""),[F,w]=a(""),[b,A]=a(""),[U,x]=a("secret"),[R,d]=a(!1),[T,C]=a({}),[g,M]=a(null),[z,y]=a(null),[k,N]=a(null),H=m(null),E=m(null),et=m(null),sn=W(async()=>{r(!0),o(null);try{let P=await(await fetch("/agent/keychain")).json();if(P?.ok)e(P.entries||[]);else o(P?.error||"Failed to load keychain.")}catch(B){o("Failed to load keychain.")}finally{r(!1)}},[]);K(()=>{sn()},[sn]);let Ut=W(async()=>{let B=_.trim(),P=u;if(!B||!P)return;d(!0);try{let nn=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B,secret:P,type:U,username:p.trim()||void 0,userNote:F,agentNote:b})})).json();if(nn?.ok)$(""),h(""),v(""),w(""),A(""),x("secret"),f(!1),await sn();else o(nn?.error||"Failed to add entry.")}catch{o("Failed to add entry.")}finally{d(!1)}},[_,u,p,F,b,U,sn]),zt=W(async(B)=>{try{let Y=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B})})).json();if(Y?.ok)y(null),N((nn)=>nn?.name===B?null:nn),await sn();else o(Y?.error||"Failed to delete entry.")}catch{o("Failed to delete entry.")}},[sn]),Kt=W(async(B)=>{let P=B?.name;if(!P)return;let Y=T[P]||{},nn=Object.prototype.hasOwnProperty.call(Y,"userNote")?Y.userNote:B.userNote||"",en=Object.prototype.hasOwnProperty.call(Y,"agentNote")?Y.agentNote:B.agentNote||"";M(P);try{let yn=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P,userNote:nn,agentNote:en})})).json();if(yn?.ok)C((rt)=>{let Qn={...rt||{}};return delete Qn[P],Qn}),await sn();else o(yn?.error||"Failed to save notes.")}catch{o("Failed to save notes.")}finally{M(null)}},[T,sn]),X=W((B,P,Y)=>{C((nn)=>({...nn||{},[B]:{...(nn||{})[B]||{},[P]:Y}}))},[]),V=W(async(B,P,Y)=>{try{let en=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:B,master_password:P||void 0,totp_code:Y||void 0})})).json();if(en?.ok)N({name:B,phase:"revealed",secret:en.secret,username:en.username,masterPassword:P});else if(en?.needs_master_password)N((ln)=>({name:B,phase:"password",masterPassword:"",error:ln?.name===B&&ln?.masterPassword?en.error:null})),requestAnimationFrame(()=>E.current?.focus());else if(en?.needs_totp)N((ln)=>({name:B,phase:"totp",masterPassword:P,totpCode:"",error:ln?.name===B&&ln?.phase==="totp"&&ln?.totpCode?en.error:null})),requestAnimationFrame(()=>et.current?.focus());else N({name:B,phase:"error",error:en?.error||"Failed to reveal."})}catch{N({name:B,phase:"error",error:"Failed to reveal."})}},[]),Xn=W((B)=>{if(k?.name===B&&k?.phase==="revealed"){N(null);return}V(B,null,null)},[k,V]),Pe=W((B)=>{let P=k?.masterPassword||"";if(!P)return;V(B,P,null)},[k,V]),He=W((B)=>{let P=k?.totpCode||"";if(P.length<6)return;V(B,k?.masterPassword,P)},[k,V]),me=W(async(B)=>{try{await navigator.clipboard.writeText(B)}catch{let P=document.createElement("textarea");P.value=B,P.style.position="fixed",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P)}},[]);K(()=>{if(l)requestAnimationFrame(()=>H.current?.focus())},[l]);let cn=n.toLowerCase(),it=j(()=>{if(!cn)return t;return t.filter((B)=>B.name.toLowerCase().includes(cn)||(B.type||"").toLowerCase().includes(cn)||(B.envVar||"").toLowerCase().includes(cn)||(B.userNote||"").toLowerCase().includes(cn)||(B.agentNote||"").toLowerCase().includes(cn))},[t,cn]);if(i)return c`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return c`
        <div class="settings-section">
            ${s&&c`
                <div class="settings-keychain-error" role="alert">
                    ${s}
                    <button class="settings-keychain-dismiss" onClick=${()=>o(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${it.length} entr${it.length===1?"y":"ies"}${cn?` matching "${n}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>f(!l)}>
                    ${l?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${l&&c`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${H} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${_} onInput=${(B)=>$(B.target.value)}
                            class="settings-keychain-input" />
                        <select value=${U} onChange=${(B)=>x(B.target.value)}
                            class="settings-keychain-select">
                            ${Hc.map((B)=>c`<option value=${B}>${B}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${u} onInput=${(B)=>h(B.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${p} onInput=${(B)=>v(B.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${Ut}
                            disabled=${R||!_.trim()||!u}>
                            ${R?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${F} onInput=${(B)=>w(B.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${b} onInput=${(B)=>A(B.target.value)}
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
                        ${it.length===0&&c`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${cn?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${it.map((B)=>{let P=k?.name===B.name?k:null,Y=P?.phase==="revealed",nn=P?.phase==="password",en=P?.phase==="totp",ln=P?.phase==="error",yn=T[B.name]||{},rt=Object.prototype.hasOwnProperty.call(yn,"userNote")?yn.userNote:B.userNote||"",Qn=Object.prototype.hasOwnProperty.call(yn,"agentNote")?yn.agentNote:B.agentNote||"",es=rt!==(B.userNote||"")||Qn!==(B.agentNote||""),je=g===B.name;return c`
                            <tr class="settings-keychain-row" key=${B.name}>
                                <td class="settings-keychain-name">${B.name}</td>
                                <td><span class="settings-keychain-type-badge">${B.type}</span></td>
                                <td class="settings-keychain-env">${B.envVar?c`<code>$${B.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Pc(B.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${Y?" active":""}`}
                                        onClick=${()=>Xn(B.name)}
                                        title=${Y?"Hide secret":"Reveal secret"}>
                                        ${Y?c`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:c`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${z===B.name?c`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>zt(B.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>y(null)}>No</button>
                                            </span>
                                        `:c`<button class="settings-keychain-delete-btn" onClick=${()=>y(B.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${B.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${rt}
                                                onInput=${(tn)=>X(B.name,"userNote",tn.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${Qn}
                                                onInput=${(tn)=>X(B.name,"agentNote",tn.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!es||je} onClick=${()=>Kt(B)}>
                                            ${je?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${nn&&c`
                                <tr class="settings-keychain-prompt-row" key=${B.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${E} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${P?.masterPassword||""}
                                                onInput=${(tn)=>N((Lt)=>({...Lt,masterPassword:tn.target.value}))}
                                                onKeyDown=${(tn)=>{if(tn.key==="Enter")Pe(B.name);if(tn.key==="Escape")N(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>Pe(B.name)}
                                                disabled=${!P?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>N(null)}>Cancel</button>
                                            ${P?.error&&c`<span class="settings-keychain-prompt-error">${P.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${en&&c`
                                <tr class="settings-keychain-prompt-row" key=${B.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${et} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${P?.totpCode||""}
                                                onInput=${(tn)=>N((Lt)=>({...Lt,totpCode:tn.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(tn)=>{if(tn.key==="Enter")He(B.name);if(tn.key==="Escape")N(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>He(B.name)}
                                                disabled=${(P?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>N(null)}>Cancel</button>
                                            ${P?.error&&c`<span class="settings-keychain-prompt-error">${P.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${Y&&c`
                                <tr class="settings-keychain-reveal-row" key=${B.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${P.username&&c`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${P.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>me(P.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${P.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>me(P.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${ln&&c`
                                <tr class="settings-keychain-reveal-row" key=${B.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${P.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var Hc;var Hr=G(()=>{q();Hc=["secret","token","password","basic"]});var mr={};O(mr,{ToolsSection:()=>Qc});function Qc({toolsets:n,filter:t="",settingsData:e,mergeSettingsData:i}){let r=n||[],[s,o]=a(()=>{let h={};for(let p of r)h[p.name]=!0;return h}),l=W((h)=>{o((p)=>({...p,[h]:!p[h]}))},[]),f=e?.searchMatchMode||"or",_=W(async()=>{let h=f==="or"?"and":"or";try{let v=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:h})})).json().catch(()=>({}));if(v?.ok&&v?.settings)i?.(v.settings)}catch(p){console.warn("[settings/tools] Failed to save search match mode.",p)}},[f,i]),$=t.toLowerCase(),u=j(()=>{if(!$)return r;return r.map((h)=>{let p=h.tools.filter((v)=>v.name.toLowerCase().includes($)||h.name.toLowerCase().includes($)||(v.summary||"").toLowerCase().includes($));return p.length>0?{...h,tools:p}:null}).filter(Boolean)},[r,$]);if(r.length===0)return c`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return c`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${f==="and"} onChange=${_} />
                        <span class="settings-hint" style="margin:0">
                            ${f==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${u.map((h)=>{let p=s[h.name]!==!1;return c`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${p} onChange=${()=>l(h.name)} />
                            <span class="settings-toolset-icon">${jc[h.name]||Xc}</span>
                            <strong>${h.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${h.description}</span>
                    </div>
                    ${p&&c`<div class="settings-tool-list">${h.tools.map((v)=>c`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${v.name}</span>
                            <span class="settings-tool-kind" title=${v.kind}>${Vc[v.kind]||"?"}</span>
                            ${v.summary&&c`<span class="settings-tool-summary">${v.summary}</span>`}
                            <span class="settings-tool-source">${Gc[v.name]||h.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${u.length===0&&c`<p class="settings-hint">No tools match "${t}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var jc,Gc,Vc,Xc;var jr=G(()=>{q();jc={core:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},Gc={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Vc={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Xc=c`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var Gr={};O(Gr,{AddonsSection:()=>Ic});function Ic({setStatus:n,filter:t=""}){let[e,i]=a(null),[r,s]=a(!0),[o,l]=a(null),[f,_]=a(!1),[$,u]=a({runtime:"",windowsNative:!1}),[h,p]=a([]),[v,F]=a([]);function w(){let g=new URLSearchParams;try{let z=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),y=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((N)=>N.trim()).filter(Boolean),k=localStorage.getItem("piclaw_addons_repo_url");if(z)g.append("catalog_url",z);for(let N of y)g.append("catalog_url",N);if(k)g.set("repo_url",k)}catch(z){}let M=g.toString();return M?`?${M}`:""}let b=W(async()=>{try{let[g,M]=await Promise.all([fetch(`/agent/addons${w()}`),fetch("/agent/settings-data")]),z=await g.json();if(z.error)throw Error(z.error);i(z.addons||[]),p(z.sources||[]),F(z.failed_sources||[]);let y=await M.json().catch(()=>({})),k=typeof y?.runtimePlatform==="string"?y.runtimePlatform:"";u({runtime:k,windowsNative:k==="win32"})}catch(g){i(null),n?.(String(g.message||g),"error")}finally{s(!1)}},[n]);K(()=>{b()},[]);let A=W(async(g)=>{if(o)return;l({slug:g,action:"install"}),n?.(`Installing ${g}…`,"info");try{let z=await(await fetch(`/agent/addons/install${w()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:g})})).json();if(z.error){n?.(z.error,"error");return}_(!0);let y=[z.message,z.warning].filter(Boolean).join(" ");n?.(y||"Add-on installed.","success"),await b()}catch(M){n?.(String(M.message||M),"error")}finally{l(null)}},[o,b,n]),U=W(async(g)=>{if(o)return;l({slug:g,action:"remove"}),n?.(`Removing ${g}…`,"info");try{let z=await(await fetch(`/agent/addons/uninstall${w()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:g})})).json();if(z.error){n?.(z.error,"error");return}_(!0);let y=[z.message,z.warning].filter(Boolean).join(" ");n?.(y||"Add-on removed.","success"),await b()}catch(M){n?.(String(M.message||M),"error")}finally{l(null)}},[o,b,n]),x=W(async()=>{if(o)return;l({slug:null,action:"restart"}),n?.("Restarting piclaw…","info");try{let M=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(M.error){n?.(M.error,"error"),l(null);return}n?.(M.message||"Restarting piclaw…","success"),_(!1),(async(y=30,k=2000)=>{for(let N=0;N<y;N++){await new Promise((H)=>setTimeout(H,k));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await b(),l(null),n?.("Restart complete — add-ons refreshed.","success");return}}catch(H){}}l(null),n?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(g){n?.(String(g.message||g),"error"),l(null)}},[o,n,b]);if(r)return c`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!e)return c`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let R=t.toLowerCase(),d=R?e.filter((g)=>g.slug.toLowerCase().includes(R)||(g.description||"").toLowerCase().includes(R)||(g.tags||[]).some((M)=>M.toLowerCase().includes(R))):e,T=o?.slug||null,C=o?o.action==="remove"?`Removing ${o.slug}…`:o.action==="restart"?"Restarting piclaw…":`Installing ${o.slug}…`:"";return c`
        <div class=${`settings-section settings-addon-panel${o?" busy":""}`} aria-busy=${o?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${h.length<=1?c`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:c`${h.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${v.length>0&&c`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${v.length} catalog source${v.length>1?"s":""}:
                            ${v.map((g)=>c` <code style="font-size:0.82em;word-break:break-all">${g}</code>`)}
                        </div>
                    `}
                    ${h.length>1&&c`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${h.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${h.map((g)=>c`<li style="word-break:break-all"><code>${g}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${$.windowsNative&&c`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${o&&c`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${C}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${C}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${d.map((g)=>{let M=(g.skills||[]).length>0,z=g.type==="extension",y=M&&z?"extension + skill":M?"skill":"extension",k=M&&!z?"settings-tag-skill":"",N=typeof g.homepage==="string"&&g.homepage.trim()?g.homepage.trim():"";return c`
                    <div class=${`settings-addon-card${g.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${N?c`<a class="settings-addon-name-link" href=${N} target="_blank" rel="noopener noreferrer">${g.slug}</a>`:c`<strong>${g.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${k}`}>${y}</span>
                            <span class="settings-addon-version">${g.installed?g.installedVersion||"?":g.version||""}</span>
                            ${g.installKind&&c`<span class="settings-tag">${g.installKind}</span>`}
                            ${g.hasUpdate&&c`<span class="settings-tag settings-tag-skill">\u2191 ${g.version}</span>`}
                            <div class="settings-addon-actions">
                                ${g.installed?c`
                                    ${g.hasUpdate&&c`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(o)} onClick=${()=>A(g.slug)}>${T===g.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(o)} onClick=${()=>U(g.slug)}>${T===g.slug?"…":"Remove"}</button>
                                `:c`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(o)} onClick=${()=>A(g.slug)}>${T===g.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${g.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(g.tags||[]).map((H)=>c`<span class="settings-tag">${H}</span>`)}${(g.skills||[]).map((H)=>c`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${H}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${d.length===0&&c`<p class="settings-hint">No add-ons match "${t}"</p>`}
            </div>
            ${f&&c`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(o)} onClick=${x}>Restart Now</button>
                </div>
            `}
        </div>
    `}var Vr=G(()=>{q()});var Jc={};function Ue(n,t){try{let e=localStorage.getItem(n);return e===null?t:e==="true"}catch{return t}}function Mt(n,t){try{localStorage.setItem(n,String(t))}catch(e){}}function Dc(n,t){try{return localStorage.getItem(n)||t}catch{return t}}function qc(n,t){try{localStorage.setItem(n,t)}catch(e){}}function Sc(n,t,e,i){try{return _n(localStorage.getItem(n),{fallback:t,min:e,max:i})}catch{return _n(t,{fallback:t,min:e,max:i})}}function Zc(n,t){try{localStorage.setItem(n,String(t))}catch(e){}}function Yc(){let[n,t]=a(()=>Ue("piclaw_vim_mode",!1)),[e,i]=a(()=>Ue("piclaw_show_whitespace",!0)),[r,s]=a(()=>Ue("piclaw_md_live_preview",!0)),[o,l]=a(()=>Sc("piclaw_editor_font_size",13,10,24)),[f,_]=a(()=>Dc("piclaw_editor_font_family","")),$=W((u,h,p)=>{let v=!h;p(v),Mt(u,v)},[]);return c`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let u=!n;t(u),Mt("piclaw_vim_mode",u)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${e}
                    onChange=${()=>{let u=!e;i(u),Mt("piclaw_show_whitespace",u)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let u=!r;s(u),Mt("piclaw_md_live_preview",u)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${S}
                    label="editor font size"
                    value=${o}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(u)=>{l(u),Zc("piclaw_editor_font_size",u)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${f}
                    onInput=${(u)=>{let h=u.target.value;_(h),qc("piclaw_editor_font_family",h)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var Oc;var Xr=G(()=>{q();zn();Bn();Oc=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;hn({id:"editor",label:"Editor",icon:Oc,component:Yc,order:150})});var il={};function Qr(n,t){try{let e=localStorage.getItem(n);return e===null?t:e==="true"}catch{return t}}function Ir(n,t){try{localStorage.setItem(n,String(t))}catch(e){}}function Ec(n,t,e,i){try{return _n(localStorage.getItem(n),{fallback:t,min:e,max:i})}catch{return _n(t,{fallback:t,min:e,max:i})}}function nl(n,t){try{localStorage.setItem(n,String(t))}catch(e){}}function tl(){let[n,t]=a(()=>Qr("piclaw_mindmap_auto_expand",!0)),[e,i]=a(()=>Ec("piclaw_mindmap_node_spacing",40,20,100)),[r,s]=a(()=>Qr("piclaw_mindmap_animate",!0));return c`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${n}
                    onChange=${()=>{let o=!n;t(o),Ir("piclaw_mindmap_auto_expand",o)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${S}
                    label="node spacing"
                    value=${e}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(o)=>{i(o),nl("piclaw_mindmap_node_spacing",o)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${r}
                    onChange=${()=>{let o=!r;s(o),Ir("piclaw_mindmap_animate",o)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var el;var Dr=G(()=>{q();zn();Bn();el=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;hn({id:"mindmap",label:"Mind Map",icon:el,component:tl,order:170})});var ol={};function ze(n,t){try{let e=localStorage.getItem(n);return e===null?t:e==="true"}catch{return t}}function Ke(n,t){try{localStorage.setItem(n,String(t))}catch(e){}}function Le(n,t){try{return localStorage.getItem(n)||t}catch{return t}}function Ce(n,t){try{localStorage.setItem(n,t)}catch(e){}}function rl(){let[n,t]=a(()=>ze("piclaw_dev_mode",!1)),[e,i]=a(()=>Le("piclaw_addons_catalog_url","")),[r,s]=a(()=>Le("piclaw_addons_catalog_urls","")),[o,l]=a(()=>Le("piclaw_addons_repo_url","")),[f,_]=a(()=>ze("piclaw_debug_sse",!1)),[$,u]=a(()=>ze("piclaw_debug_tool_calls",!1)),h=W(()=>{let p=!n;t(p),Ke("piclaw_dev_mode",p)},[n]);return c`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${n} onChange=${h} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${n&&c`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${e}
                        onInput=${(p)=>{let v=p.target.value;i(v),Ce("piclaw_addons_catalog_url",v)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${r}
                        onInput=${(p)=>{let v=p.target.value;s(v),Ce("piclaw_addons_catalog_urls",v)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${o}
                        onInput=${(p)=>{let v=p.target.value;l(v),Ce("piclaw_addons_repo_url",v)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${f}
                        onChange=${()=>{let p=!f;_(p),Ke("piclaw_debug_sse",p)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${$}
                        onChange=${()=>{let p=!$;u(p),Ke("piclaw_debug_tool_calls",p)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var sl;var qr=G(()=>{q();zn();sl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;hn({id:"developer",label:"Developer",icon:sl,component:rl,order:900})});var Ml={};O(Ml,{openSettingsDialog:()=>Rl,SettingsDialogContent:()=>At,SettingsDialog:()=>Bl});function tt(n){nt.push({ts:performance.now(),label:n})}function cl(){if(!nt.length)return;let n=nt[0].ts,t=nt.map((e)=>`+${(e.ts-n).toFixed(1)}ms ${e.label}`);console.info(`[settings-dialog perf]
`+t.join(`
`));try{window.__piclawSettingsPerfLog=t}catch(e){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:t})}).catch((e)=>{})}catch(e){}nt.length=0}function fl(n){let t=Ft.get(n);if(t)return Promise.resolve(t);let e=Nt.get(n);if(e)return e;let i=ll[n]().then((r)=>{return Ft.set(n,r),Nt.delete(n),r}).catch((r)=>{throw Nt.delete(n),r});return Nt.set(n,i),i}function Wt(n="Loading…"){return c`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${n}</span>
        </div>
    `}function At({onClose:n}){tt("SettingsDialogContent-render-start");let[t,e]=a(()=>Yt()||"general"),[i,r]=a(Sr),[s,o]=a(null),[l,f]=a(""),[,_]=a(0),[$,u]=a(()=>Object.fromEntries(Ft.entries())),[h,p]=a(null),[v,F]=a({compact:!1,narrow:!1}),w=m(null),b=m(null);K(()=>{tt("SettingsDialogContent-mounted"),cl()},[]),K(()=>{let y=(k)=>{if(k.key==="Escape")n()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[n]),K(()=>{let y=(k)=>{let N=typeof k?.detail?.section==="string"?k.detail.section.trim():"";if(N)e(N),f("")};return window.addEventListener("piclaw:open-settings",y),()=>window.removeEventListener("piclaw:open-settings",y)},[]),K(()=>{let y=()=>_((k)=>k+1);return window.addEventListener("piclaw:settings-panes-changed",y),()=>window.removeEventListener("piclaw:settings-panes-changed",y)},[]),K(()=>{fetch("/agent/settings-data").then((y)=>y.json()).then((y)=>{Sr=y,r(y)}).catch(()=>r({}))},[]),K(()=>{let y=b.current;if(!y)return;let k=()=>{let N=y.clientWidth||0;F((H)=>{let E={compact:N>0&&N<=860,narrow:N>0&&N<=720};return H.compact===E.compact&&H.narrow===E.narrow?H:E})};if(k(),typeof ResizeObserver==="function"){let N=new ResizeObserver(()=>k());return N.observe(y),()=>N.disconnect()}return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]);let A=[...Yr].sort((y,k)=>(y.order??500)-(k.order??500)),x=hi().map((y)=>({id:y.id,label:y.label,icon:y.icon,searchable:y.searchable||!1,placeholder:y.searchPlaceholder,order:y.order??500,isExtension:!0,component:y.component})).sort(Zt),R=[...A,...x],d=R.find((y)=>y.id===t)||Yr.find((y)=>y.id===t);K(()=>{if(d?.searchable)requestAnimationFrame(()=>w.current?.focus())},[t]),K(()=>{if(d?.isExtension){p(null);return}let y=!1;if($[t]){p(null);return}return p(t),fl(t).then((k)=>{if(y)return;u((N)=>N?.[t]?N:{...N||{},[t]:k})}).catch((k)=>{if(y)return;console.error(`[settings-dialog] Failed to lazy-load section "${t}".`,k)}).finally(()=>{if(!y)p((k)=>k===t?null:k)}),()=>{y=!0}},[t,d?.isExtension,$]);let T=W((y,k="info")=>{o(y?{text:y,type:k}:null)},[]),C=W((y)=>{e(y),f("");let k=ul[y];if(k&&!Zr.has(y))Zr.add(y),k().then(()=>_((N)=>N+1)).catch((N)=>{})},[]),g=W((y)=>{r((k)=>({...k||{},...y||{}}))},[]),M=()=>{if(d?.isExtension){if(!d.component)return Wt("Loading pane…");let k=d.component;return c`<${k} filter=${l} />`}let y=$[t];if(!y||h===t)return Wt(`Loading ${d?.label||"settings"}…`);switch(t){case"general":return c`<${y} settingsData=${i} setStatus=${T} mergeSettingsData=${g} />`;case"sessions":return c`<${y} settingsData=${i} setStatus=${T} mergeSettingsData=${g} />`;case"compaction":return c`<${y} settingsData=${i} setStatus=${T} mergeSettingsData=${g} />`;case"keyboard":return c`<${y} filter=${l} setStatus=${T} />`;case"workspace":return c`<${y} settingsData=${i} setStatus=${T} mergeSettingsData=${g} />`;case"environment":return c`<${y} settingsData=${i} filter=${l} setStatus=${T} mergeSettingsData=${g} />`;case"providers":return c`<${y} providers=${i?.providers} setStatus=${T} />`;case"models":return c`<${y} filter=${l} />`;case"theme":return c`<${y} themes=${i?.themes} colorKeys=${i?.colorKeys} settingsData=${i} setStatus=${T} mergeSettingsData=${g} />`;case"scheduled-tasks":return c`<${y} filter=${l} setStatus=${T} />`;case"quick-actions":return c`<${y} filter=${l} setStatus=${T} mergeSettingsData=${g} />`;case"keychain":return c`<${y} filter=${l} />`;case"tools":return c`<${y} toolsets=${i?.toolsets} filter=${l} settingsData=${i} mergeSettingsData=${g} />`;case"addons":return c`<${y} setStatus=${T} filter=${l} />`;default:return Wt("Loading settings…")}},z=!d;return tt("SettingsDialogContent-render-end"),c`
        <div class="settings-dialog-backdrop" onClick=${(y)=>{if(y.target===y.currentTarget)n()}}>
            <div ref=${b} data-testid="settings-dialog" class=${`settings-dialog${v.compact?" settings-dialog-compact":""}${v.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${d?.searchable&&c`
                        <input ref=${w} type="text" class="settings-header-filter"
                            placeholder=${d.placeholder||"Filter…"}
                            value=${l} onInput=${(y)=>f(y.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${n} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${R.map((y,k)=>{let N=k>0&&!R[k-1].isExtension,H=y.isExtension&&N;return c`
                                ${H&&c`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${y.id===t?"active":""}`} onClick=${()=>C(y.id)}>
                                    <span class="settings-nav-icon">${y.icon}</span>
                                    <span class="settings-nav-label">${y.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${z?Wt("Loading settings…"):M()}
                    </main>
                </div>
                ${s&&c`
                    <div class=${`settings-status-bar settings-status-bar-${s.type}`}>
                        ${s.type==="info"&&c`<span class="settings-spinner"></span>`}
                        <span>${s.text}</span>
                        ${s.type!=="info"&&c`<button class="settings-status-dismiss" onClick=${()=>o(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function Bl(){let[n,t]=a(!1);if(K(()=>{let e=(r)=>{let s=ht(r?.detail?.section);if(s)try{window.__piclawSettingsRequestedSection=s}catch(o){}t(!0)};window.addEventListener("piclaw:open-settings",e);let i=$i();if(i.open){if(i.section)try{window.__piclawSettingsRequestedSection=i.section}catch(r){}t(!0)}return()=>window.removeEventListener("piclaw:open-settings",e)},[]),!n)return null;return c`<${pi} className="settings-portal"><${At} onClose=${()=>t(!1)} /><//>`}function Rl(n={}){wi(n)}var nt,Sr=null,Ft,Nt,ll,ul,Zr,_l,gl,al,pl,dl,hl,wl,$l,yl,vl,bl,xl,kl,Tl,Yr;var Or=G(()=>{q();di();zn();ji();nt=[];tt("module-eval-start");tt("imports-done");Ft=new Map,Nt=new Map;Ft.set("general",ge);ll={general:()=>Promise.resolve(ge),sessions:()=>Promise.resolve().then(() => (Xi(),Vi)).then((n)=>n.SessionsSection),compaction:()=>Promise.resolve().then(() => (Ii(),Qi)).then((n)=>n.CompactionSection),keyboard:()=>Promise.resolve().then(() => (Ei(),Ji)).then((n)=>n.KeyboardSection),workspace:()=>Promise.resolve().then(() => (lr(),cr)).then((n)=>n.WorkspaceSection),environment:()=>Promise.resolve().then(() => (fr(),ur)).then((n)=>n.EnvironmentSection),providers:()=>Promise.resolve().then(() => (gr(),_r)).then((n)=>n.ProvidersSection),models:()=>Promise.resolve().then(() => (pr(),ar)).then((n)=>n.ModelsSection),theme:()=>Promise.resolve().then(() => (Br(),Tr)).then((n)=>n.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (Nr(),Mr)).then((n)=>n.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (Cr(),Lr)).then((n)=>n.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (Hr(),Pr)).then((n)=>n.KeychainSection),tools:()=>Promise.resolve().then(() => (jr(),mr)).then((n)=>n.ToolsSection),addons:()=>Promise.resolve().then(() => (Vr(),Gr)).then((n)=>n.AddonsSection)},ul={"editor-settings":()=>Promise.resolve().then(() => (Xr(),Jc)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (Dr(),il)).then(()=>{}),developer:()=>Promise.resolve().then(() => (qr(),ol)).then(()=>{})},Zr=new Set;_l=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,gl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,al=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,pl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,dl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,hl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,wl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,$l=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,yl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,vl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,bl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,xl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,kl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,Tl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Yr=[{id:"general",label:"General",icon:_l,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:gl,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:al,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:hl,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:pl,searchable:!1,order:15},{id:"environment",label:"Environment",icon:dl,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:wl,searchable:!1,order:20},{id:"models",label:"Models",icon:$l,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:yl,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:vl,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:xl,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:kl,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:bl,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:Tl,searchable:!0,placeholder:"Filter add-ons…",order:90}]});q();Or();zn();var Nl=c`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`;function Wl({label:n,body:t,filter:e=""}){return c`
    <div class="settings-section">
      <h3>${n}</h3>
      <p class="settings-hint">Mock add-on pane rendered by the settings widget fixture.</p>
      <div class="settings-addon-grid">
        ${["Credentials","Routes","Runtime options"].filter((i)=>!e||i.toLowerCase().includes(String(e).toLowerCase())).map((i)=>c`
          <div class="settings-addon-card">
            <div class="settings-addon-card-header">
              <div>
                <div class="settings-addon-name">${i}</div>
                <div class="settings-addon-subtitle">${t}</div>
              </div>
              <span class="settings-addon-enabled">fixture</span>
            </div>
            <div class="settings-row settings-row-vertical">
              <label>Mock field</label>
              <input type="text" value=${`${n.toLowerCase().replace(/\s+/g,"-")}:${i.toLowerCase().replace(/\s+/g,"-")}`} readonly />
            </div>
          </div>
        `)}
      </div>
    </div>
  `}function Fl(){let n=[{id:"fixture-z-observability",label:"Observability",body:"Latency, traces, and metrics."},{id:"fixture-a-portainer",label:"Portainer",body:"Container endpoint settings."},{id:"fixture-m-proxmox",label:"Proxmox",body:"Cluster profile and token settings."},{id:"fixture-b-cheapskate",label:"Cheapskate",body:"Model cost controls."}];for(let t of n)hn({id:t.id,label:t.label,icon:Nl,searchable:!0,searchPlaceholder:`Filter ${t.label} settings…`,order:t.id==="fixture-z-observability"?1:999,component:(e)=>c`<${Wl} label=${t.label} body=${t.body} filter=${e?.filter||""} />`})}var on={userName:"Rui Carmo",assistantName:"Smith",userAvatar:"",assistantAvatar:"",composeUploadLimitMb:32,workspaceUploadLimitMb:256,widgetToken:"piclaw_widget_fixture_token_0123456789abcdef",searchMatchMode:"or",instanceTotp:{configured:!0,issuer:"Piclaw Fixture",label:"Piclaw Fixture:Rui Carmo",secret:"JBSWY3DPEHPK3PXP",otpauth:"otpauth://totp/Piclaw%20Fixture:Rui%20Carmo?secret=JBSWY3DPEHPK3PXP&issuer=Piclaw%20Fixture",qrSvg:'<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="10" fill="#fff"/><g fill="#111"><rect x="10" y="10" width="22" height="22"/><rect x="64" y="10" width="22" height="22"/><rect x="10" y="64" width="22" height="22"/><rect x="40" y="14" width="8" height="8"/><rect x="52" y="26" width="8" height="8"/><rect x="42" y="42" width="10" height="10"/><rect x="62" y="46" width="8" height="8"/><rect x="76" y="60" width="8" height="8"/><rect x="48" y="72" width="8" height="8"/></g></svg>'},providers:[{id:"openai",label:"OpenAI",authType:"api_key",configured:!0},{id:"anthropic",label:"Anthropic",authType:"api_key",configured:!1},{id:"github-copilot",label:"GitHub Copilot",authType:"oauth",configured:!0}],models:["openai/gpt-5.1","anthropic/claude-sonnet-4-5","github-copilot/gpt-5.4-mini"],model_options:[{label:"openai/gpt-5.1",provider:"openai",name:"GPT-5.1",context_window:200000,reasoning:!0},{label:"anthropic/claude-sonnet-4-5",provider:"anthropic",name:"Claude Sonnet 4.5",context_window:200000,reasoning:!0},{label:"github-copilot/gpt-5.4-mini",provider:"github-copilot",name:"GPT-5.4 mini",context_window:128000,reasoning:!1}],current:"openai/gpt-5.1",thinking_level:"medium",supports_thinking:!0,available_thinking_levels:["off","minimal","low","medium","high"],themes:[{id:"system",label:"System",dark:!1},{id:"ipad-pro",label:"iPad Pro",dark:!0},{id:"terminal",label:"Terminal",dark:!0}],colorKeys:["accent","background","surface","text"],toolsets:[{name:"core",description:"Core shell and file tools",tools:[{name:"read",kind:"read-only"},{name:"bash",kind:"mutating"}]},{name:"ui",description:"Web UI posting tools",tools:[{name:"send_dashboard_widget",kind:"mutating"},{name:"send_adaptive_card",kind:"mutating"}]},{name:"remote",description:"Infrastructure tools",tools:[{name:"ssh",kind:"mixed"},{name:"proxmox",kind:"mixed"},{name:"portainer",kind:"mixed"}]}]},Al={current:on.current,models:on.models,model_options:on.model_options,thinking_level:on.thinking_level,supports_thinking:on.supports_thinking,available_thinking_levels:on.available_thinking_levels},Jr={sources:["fixture-catalog"],failed_sources:[],addons:[{slug:"cheapskate",name:"Cheapskate",description:"Model cost controls and routing hints.",installed:!0,enabled:!0,version:"0.1.0",bundled:!1},{slug:"observability",name:"Observability",description:"Local metrics and tracing panels.",installed:!0,enabled:!0,version:"0.2.0",bundled:!1},{slug:"portainer",name:"Portainer",description:"Container management add-on.",installed:!1,enabled:!1,version:"0.3.0",bundled:!1},{slug:"proxmox",name:"Proxmox",description:"Proxmox inventory and workflow add-on.",installed:!0,enabled:!1,version:"0.4.0",bundled:!1}]},Er={entries:[{name:"github/piclaw-bot-pat",type:"token",envVar:"GITHUB_PICLAW_BOT_PAT",updatedAt:new Date().toISOString(),userNote:"Fixture note",agentNote:"Use only through env injection."},{name:"ssh/relay.local",type:"secret",envVar:"SSH_RELAY_LOCAL",updatedAt:new Date().toISOString(),userNote:"",agentNote:""}]},Vn=new URLSearchParams(window.location.search).get("real")!=="1",ns=window.fetch.bind(window);function rn(n,t=200){return new Response(JSON.stringify(n),{status:t,headers:{"Content-Type":"application/json"}})}function Ul(){window.fetch=async(n,t)=>{let e=new URL(typeof n==="string"?n:n.url,window.location.href),i=String(t?.method||"GET").toUpperCase();if(!Vn)return ns(n,t);if(e.pathname==="/agent/settings-data")return rn(on);if(e.pathname==="/agent/models")return rn(Al);if(e.pathname==="/agent/addons")return rn(Jr);if(e.pathname.startsWith("/agent/addons/"))return rn({ok:!0,message:"Fixture add-on action accepted.",...Jr});if(e.pathname==="/agent/keychain"){if(i==="GET")return rn(Er);if(i==="POST")return rn({ok:!0,...Er})}if(e.pathname==="/agent/settings/general")return rn({ok:!0,settings:on});if(e.pathname==="/agent/settings/widget-token/regenerate")return rn({ok:!0,settings:{...on,widgetToken:`piclaw_widget_fixture_regenerated_${Date.now()}`}});if(e.pathname.startsWith("/agent/default/message"))return rn({command:{status:"success",message:"Fixture command accepted."}});if(e.pathname.startsWith("/agent/settings/"))return rn({ok:!0,settings:on,items:[],entries:[]});if(e.pathname==="/agent/client-perf")return rn({ok:!0});return ns(n,t)}}function zl(){let n=document.createElement("style");n.textContent=`
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
  `,document.head.appendChild(n)}function ts(n){try{window.__piclawSettingsRequestedSection=n}catch(t){}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:n}}))}function Kl(){let n=new URLSearchParams(window.location.search),[t,e]=a(n.get("section")||"general"),[i,r]=a(Number(n.get("width")||900)),[s,o]=a(Number(n.get("height")||640)),[l,f]=a(Vn),[_,$]=a(0),u=j(()=>["general","sessions","compaction","keyboard","workspace","environment","providers","models","theme","scheduled-tasks","quick-actions","keychain","tools","addons","fixture-b-cheapskate","fixture-z-observability","fixture-a-portainer","fixture-m-proxmox"],[]),h=W((v)=>{e(v),ts(v)},[]),p=W(()=>{Vn=!Vn,f(Vn),$((v)=>v+1)},[]);return c`
    <div class="settings-fixture-shell">
      <div class="settings-fixture-toolbar">
        <strong>Settings fixture</strong>
        <label>Section <select value=${t} onChange=${(v)=>h(v.target.value)}>${u.map((v)=>c`<option value=${v}>${v}</option>`)}</select></label>
        <label>Width <input type="range" min="480" max="1200" value=${i} onInput=${(v)=>r(Number(v.target.value))} /> ${i}px</label>
        <label>Height <input type="range" min="420" max="900" value=${s} onInput=${(v)=>o(Number(v.target.value))} /> ${s}px</label>
        <button type="button" onClick=${p}>${l?"Mock data":"Real endpoints"}</button>
        <button type="button" onClick=${()=>$((v)=>v+1)}>Remount</button>
        <span class="settings-fixture-note">Add-on panes are registered in scrambled order for nav ordering tests.</span>
      </div>
      <div class="settings-fixture-canvas" style=${`--fixture-width:${i}px;--fixture-height:${s}px;`}>
        <${At} key=${_} onClose=${()=>{}} />
      </div>
    </div>
  `}function Ll(){Fl(),Ul(),zl();let n=new URLSearchParams(window.location.search);ts(n.get("section")||"general");let t=document.getElementById("settings-widget-fixture-root")||document.body.appendChild(document.createElement("div"));t.id="settings-widget-fixture-root",An(c`<${Kl} />`,t),window.piclawWidget?.ready?.({title:"Settings fixture",mockMode:Vn})}Ll();

//# debugId=639C1E984A3883E064756E2164756E21
//# sourceMappingURL=settings-widget-fixture.bundle.js.map
