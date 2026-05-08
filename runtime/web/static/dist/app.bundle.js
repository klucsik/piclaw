var IF=Object.defineProperty;var CF=(_)=>_;function PF(_,$){this[_]=CF.bind(null,$)}var j1=(_,$)=>{for(var j in $)IF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:PF.bind($,j)})};var O_=(_,$)=>()=>(_&&($=_(_=0)),$);var AG={};j1(AG,{useState:()=>P,useRef:()=>g,useReducer:()=>OG,useMemo:()=>Y0,useLayoutEffect:()=>G5,useImperativeHandle:()=>cF,useErrorBoundary:()=>pF,useEffect:()=>u,useDebugValue:()=>lF,useContext:()=>hF,useCallback:()=>R,render:()=>B$,html:()=>F,h:()=>N3,createContext:()=>mF,Component:()=>n5});function K$(_,$){for(var j in $)_[j]=$[j];return _}function B3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function N3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?$2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return s6(_,Y,G,Z,null)}function s6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++VG:Z,__i:-1,__u:0};return Z==null&&T_.vnode!=null&&T_.vnode(X),X}function G2(_){return _.children}function n5(_,$){this.props=_,this.context=$}function _5(_,$){if($==null)return _.__?_5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?_5(_):null}function SF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=K$({},$);X.__v=$.__v+1,T_.vnode&&T_.vnode(X),F3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?_5($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,DG(G,X,Z),$.__e=$.__=null,X.__e!=j&&NG(X)}}function NG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),NG(_)}function V3(_){(!_.__d&&(_.__d=!0)&&v$.push(_)&&!_2.__r++||sj!=T_.debounceRendering)&&((sj=T_.debounceRendering)||QG)(_2)}function _2(){try{for(var _,$=1;v$.length;)v$.length>$&&v$.sort(LG),_=v$.shift(),$=v$.length,SF(_)}finally{v$.length=_2.__r=0}}function FG(_,$,j,G,Z,X,Y,q,V,Q,K){var L,N,B,U,E,H,D,k=G&&G.__k||e6,z=$.length;for(V=uF(j,$,k,V,z),L=0;L<z;L++)(B=j.__k[L])!=null&&(N=B.__i!=-1&&k[B.__i]||t6,B.__i=L,H=F3(_,B,N,Z,X,Y,q,V,Q,K),U=B.__e,B.ref&&N.ref!=B.ref&&(N.ref&&U3(N.ref,null,B),K.push(B.ref,B.__c||U,B)),E==null&&U!=null&&(E=U),(D=!!(4&B.__u))||N.__k===B.__k?(V=UG(B,V,_,D),D&&N.__e&&(N.__e=null)):typeof B.type=="function"&&H!==void 0?V=H:U&&(V=U.nextSibling),B.__u&=-7);return j.__e=E,V}function uF(_,$,j,G,Z){var X,Y,q,V,Q,K=j.length,L=K,N=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=s6(null,Y,null,null,null):j2(Y)?Y=_.__k[X]=s6(G2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=s6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,V=X+N,Y.__=_,Y.__b=_.__b+1,q=null,(Q=Y.__i=gF(Y,j,V,L))!=-1&&(L--,(q=j[Q])&&(q.__u|=2)),q==null||q.__v==null?(Q==-1&&(Z>K?N--:Z<K&&N++),typeof Y.type!="function"&&(Y.__u|=4)):Q!=V&&(Q==V-1?N--:Q==V+1?N++:(Q>V?N--:N++,Y.__u|=4))):_.__k[X]=null;if(L)for(X=0;X<K;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=_5(q)),EG(q,q));return G}function UG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=UG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=_5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function gF(_,$,j,G){var Z,X,Y,q=_.key,V=_.type,Q=$[j],K=Q!=null&&(2&Q.__u)==0;if(Q===null&&q==null||K&&q==Q.key&&V==Q.type)return j;if(G>(K?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((Q=$[Y=Z>=0?Z--:X++])!=null&&(2&Q.__u)==0&&q==Q.key&&V==Q.type)return Y}return-1}function aj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||RF.test($)?j:j+"px"}function i6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||aj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||aj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(KG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[r5]=G[r5]:(j[r5]=K3,_.addEventListener($,X?q3:Y3,X)):_.removeEventListener($,X?q3:Y3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function tj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[o6]==null)$[o6]=K3++;else if($[o6]<j[r5])return;return j(T_.event?T_.event($):$)}}}function F3(_,$,j,G,Z,X,Y,q,V,Q){var K,L,N,B,U,E,H,D,k,z,O,I,x,A,M,W=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),X=[q=$.__e=j.__e]),(K=T_.__b)&&K($);_:if(typeof W=="function")try{if(D=$.props,k=W.prototype&&W.prototype.render,z=(K=W.contextType)&&G[K.__c],O=K?z?z.props.value:K.__:G,j.__c?H=(L=$.__c=j.__c).__=L.__E:(k?$.__c=L=new W(D,O):($.__c=L=new n5(D,O),L.constructor=W,L.render=vF),z&&z.sub(L),L.state||(L.state={}),L.__n=G,N=L.__d=!0,L.__h=[],L._sb=[]),k&&L.__s==null&&(L.__s=L.state),k&&W.getDerivedStateFromProps!=null&&(L.__s==L.state&&(L.__s=K$({},L.__s)),K$(L.__s,W.getDerivedStateFromProps(D,L.__s))),B=L.props,U=L.state,L.__v=$,N)k&&W.getDerivedStateFromProps==null&&L.componentWillMount!=null&&L.componentWillMount(),k&&L.componentDidMount!=null&&L.__h.push(L.componentDidMount);else{if(k&&W.getDerivedStateFromProps==null&&D!==B&&L.componentWillReceiveProps!=null&&L.componentWillReceiveProps(D,O),$.__v==j.__v||!L.__e&&L.shouldComponentUpdate!=null&&L.shouldComponentUpdate(D,L.__s,O)===!1){$.__v!=j.__v&&(L.props=D,L.state=L.__s,L.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(y){y&&(y.__=$)}),e6.push.apply(L.__h,L._sb),L._sb=[],L.__h.length&&Y.push(L);break _}L.componentWillUpdate!=null&&L.componentWillUpdate(D,L.__s,O),k&&L.componentDidUpdate!=null&&L.__h.push(function(){L.componentDidUpdate(B,U,E)})}if(L.context=O,L.props=D,L.__P=_,L.__e=!1,I=T_.__r,x=0,k)L.state=L.__s,L.__d=!1,I&&I($),K=L.render(L.props,L.state,L.context),e6.push.apply(L.__h,L._sb),L._sb=[];else do L.__d=!1,I&&I($),K=L.render(L.props,L.state,L.context),L.state=L.__s;while(L.__d&&++x<25);L.state=L.__s,L.getChildContext!=null&&(G=K$(K$({},G),L.getChildContext())),k&&!N&&L.getSnapshotBeforeUpdate!=null&&(E=L.getSnapshotBeforeUpdate(B,U)),A=K!=null&&K.type===G2&&K.key==null?HG(K.props.children):K,q=FG(_,j2(A)?A:[A],$,j,G,Z,X,Y,q,V,Q),L.base=$.__e,$.__u&=-161,L.__h.length&&Y.push(L),H&&(L.__E=L.__=null)}catch(y){if($.__v=null,V||X!=null)if(y.then){for($.__u|=V?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(M=X.length;M--;)B3(X[M]);Q3($)}else $.__e=j.__e,$.__k=j.__k,y.then||Q3($);T_.__e(y,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=bF(j.__e,$,j,G,Z,X,Y,V,Q);return(K=T_.diffed)&&K($),128&$.__u?void 0:q}function Q3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(Q3))}function DG(_,$,j){for(var G=0;G<j.length;G++)U3(j[G],j[++G],j[++G]);T_.__c&&T_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){T_.__e(X,Z.__v)}})}function HG(_){return typeof _!="object"||_==null||_.__b>0?_:j2(_)?_.map(HG):K$({},_)}function bF(_,$,j,G,Z,X,Y,q,V){var Q,K,L,N,B,U,E,H=j.props||t6,D=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(Q=0;Q<X.length;Q++)if((B=X[Q])&&"setAttribute"in B==!!k&&(k?B.localName==k:B.nodeType==3)){_=B,X[Q]=null;break}}if(_==null){if(k==null)return document.createTextNode(D);_=document.createElementNS(Z,k,D.is&&D),q&&(T_.__m&&T_.__m($,X),q=!1),X=null}if(k==null)H===D||q&&_.data==D||(_.data=D);else{if(X=X&&$2.call(_.childNodes),!q&&X!=null)for(H={},Q=0;Q<_.attributes.length;Q++)H[(B=_.attributes[Q]).name]=B.value;for(Q in H)B=H[Q],Q=="dangerouslySetInnerHTML"?L=B:Q=="children"||(Q in D)||Q=="value"&&("defaultValue"in D)||Q=="checked"&&("defaultChecked"in D)||i6(_,Q,null,B,Z);for(Q in D)B=D[Q],Q=="children"?N=B:Q=="dangerouslySetInnerHTML"?K=B:Q=="value"?U=B:Q=="checked"?E=B:q&&typeof B!="function"||H[Q]===B||i6(_,Q,B,H[Q],Z);if(K)q||L&&(K.__html==L.__html||K.__html==_.innerHTML)||(_.innerHTML=K.__html),$.__k=[];else if(L&&(_.innerHTML=""),FG($.type=="template"?_.content:_,j2(N)?N:[N],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&_5(j,0),q,V),X!=null)for(Q=X.length;Q--;)B3(X[Q]);q||(Q="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[Q]||k=="progress"&&!U||k=="option"&&U!=H[Q])&&i6(_,Q,U,H[Q],Z),Q="checked",E!=null&&E!=_[Q]&&i6(_,Q,E,H[Q],Z))}return _}function U3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){T_.__e(Z,j)}}function EG(_,$,j){var G,Z;if(T_.unmount&&T_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||U3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){T_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&EG(G[Z],$,j||typeof _.type!="function");j||B3(_.__e),_.__c=_.__=_.__e=void 0}function vF(_,$,j){return this.constructor(_,j)}function B$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),T_.__&&T_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],F3($,_=(!G&&j||$).__k=N3(G2,null,[_]),Z||t6,t6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?$2.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),DG(X,_,Y)}function mF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,V3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+BG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function j5(_,$){u_.__h&&u_.__h(y_,_,$5||$),$5=0;var j=y_.__H||(y_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function P(_){return $5=1,OG(zG,_)}function OG(_,$,j){var G=j5(m$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):zG(void 0,$),function(q){var V=G.__N?G.__N[0]:G.__[0],Q=G.t(V,q);V!==Q&&(G.__N=[Q,G.__[1]],G.__c.setState({}))}],G.__c=y_,!y_.__f)){var Z=function(q,V,Q){if(!G.__c.__H)return!0;var K=G.__c.__H.__.filter(function(N){return N.__c});if(K.every(function(N){return!N.__N}))return!X||X.call(this,q,V,Q);var L=G.__c.props!==q;return K.some(function(N){if(N.__N){var B=N.__[0];N.__=N.__N,N.__N=void 0,B!==N.__[0]&&(L=!0)}}),X&&X.call(this,q,V,Q)||L};y_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=y_;y_.componentWillUpdate=function(q,V,Q){if(this.__e){var K=X;X=void 0,Z(q,V,Q),X=K}Y&&Y.call(this,q,V,Q)},y_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=j5(m$++,3);!u_.__s&&D3(j.__H,$)&&(j.__=_,j.u=$,y_.__H.__h.push(j))}function G5(_,$){var j=j5(m$++,4);!u_.__s&&D3(j.__H,$)&&(j.__=_,j.u=$,y_.__h.push(j))}function g(_){return $5=5,Y0(function(){return{current:_}},[])}function cF(_,$,j){$5=6,G5(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=j5(m$++,7);return D3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function R(_,$){return $5=8,Y0(function(){return _},$)}function hF(_){var $=y_.context[_.__c],j=j5(m$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(y_)),$.props.value):_.__}function lF(_,$){u_.useDebugValue&&u_.useDebugValue($?$(_):_)}function pF(_){var $=j5(m$++,10),j=P();return $.__=_,y_.componentDidCatch||(y_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function rF(){for(var _;_=WG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(a6),$.__h.some(L3),$.__h=[]}catch(j){$.__h=[],u_.__e(j,_.__v)}}}function nF(_){var $,j=function(){clearTimeout(G),YG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);YG&&($=requestAnimationFrame(j))}function a6(_){var $=y_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),y_=$}function L3(_){var $=y_;_.__c=_.__(),y_=$}function D3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function zG(_,$){return typeof $=="function"?$(_):$}function dF(_){var $=qG.get(this);return $||($=new Map,qG.set(this,$)),($=JG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",V=[0],Q=function(N){X===1&&(N||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,N,Y):X===3&&(N||Y)?(V.push(3,N,Y),X=2):X===2&&Y==="..."&&N?V.push(4,N,0):X===2&&Y&&!N?V.push(5,0,!0,Y):X>=5&&((Y||!N&&X===5)&&(V.push(X,0,Y,Z),X=6),N&&(V.push(X,N,0,Z),X=6)),Y=""},K=0;K<j.length;K++){K&&(X===1&&Q(),Q(K));for(var L=0;L<j[K].length;L++)G=j[K][L],X===1?G==="<"?(Q(),V=[V],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(Q(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[K][L+1]===">")?(Q(),X===3&&(V=V[0]),X=V,(V=V[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(Q(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,V=V[0])}return Q(),V}(_)),$),arguments,[])).length>1?$:$[0]}var $2,T_,VG,fF,v$,sj,QG,LG,Z3,o6,r5,KG,K3,Y3,q3,BG,t6,e6,RF,j2,m$,y_,X3,ej,$5=0,WG,u_,_G,$G,jG,GG,ZG,XG,YG,JG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,JG(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},qG,F;var k0=O_(()=>{t6={},e6=[],RF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j2=Array.isArray;$2=e6.slice,T_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},VG=0,fF=function(_){return _!=null&&_.constructor===void 0},n5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=K$({},this.state),typeof _=="function"&&(_=_(K$({},j),this.props)),_&&K$(j,_),_!=null&&this.__v&&($&&this._sb.push($),V3(this))},n5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),V3(this))},n5.prototype.render=G2,v$=[],QG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,LG=function(_,$){return _.__v.__b-$.__v.__b},_2.__r=0,Z3=Math.random().toString(8),o6="__d"+Z3,r5="__a"+Z3,KG=/(PointerCapture)$|Capture$/i,K3=0,Y3=tj(!1),q3=tj(!0),BG=0;WG=[],u_=T_,_G=u_.__b,$G=u_.__r,jG=u_.diffed,GG=u_.__c,ZG=u_.unmount,XG=u_.__;u_.__b=function(_){y_=null,_G&&_G(_)},u_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),XG&&XG(_,$)},u_.__r=function(_){$G&&$G(_),m$=0;var $=(y_=_.__c).__H;$&&(X3===y_?($.__h=[],y_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(a6),$.__h.some(L3),$.__h=[],m$=0)),X3=y_},u_.diffed=function(_){jG&&jG(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(WG.push($)!==1&&ej===u_.requestAnimationFrame||((ej=u_.requestAnimationFrame)||nF)(rF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),X3=y_=null},u_.__c=function(_,$){$.some(function(j){try{j.__h.some(a6),j.__h=j.__h.filter(function(G){return!G.__||L3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],u_.__e(G,j.__v)}}),GG&&GG(_,$)},u_.unmount=function(_){ZG&&ZG(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{a6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&u_.__e($,j.__v))};YG=typeof requestAnimationFrame=="function";qG=new Map;F=dF.bind(N3)});function O1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function V_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function U$(_,$=!1){let j=O1(_);if(j===null)return $;return j==="true"}function O4(_,$=null){let j=O1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function H2(_){let $=O1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function _7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function pZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function XH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function YH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=XH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((Q)=>Number.isFinite(Q)))return null;let V=`#${[X,Y,q].map((Q)=>Q.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:V}}function z4(_){return pZ(_)||YH(_)}function $7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function E2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function qH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function VH(_){return qH(_)>0.4?"#000000":"#ffffff"}function rZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function j7(_){return cZ[_]||cZ.default}function QH(_){return _.mode==="auto"?rZ():_.mode}function nZ(_,$){let j=j7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function D$(_,$,j){let G=z4(_);if(!G)return _;return $7(G,$,j)}function dZ(_,$,j){let G=z4($);if(!G)return _;let X=pZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:D$(_.bgPrimary,G,0.08),bgSecondary:D$(_.bgSecondary,G,0.12),bgHover:D$(_.bgHover,G,0.16),textPrimary:D$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:D$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:D$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?$7(G,X,0.18):G.hex,warning:D$(_.warning||H$.warning,G,0.14),danger:D$(_.danger,G,0.16),success:D$(_.success,G,0.16)}}function LH(_,$){let j=z4(_?.warning);if(j)return j.hex;let G=z4($==="dark"?z2.warning:H$.warning)||z4(H$.warning),Z=z4(_?.accent);if(G&&Z)return $7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?z2.warning:H$.warning}function KH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=z4(G),X=Z?E2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?E2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?E2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Z?VH(Z):$==="dark"?"#000000":"#ffffff",Q=Z?E2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",K=LH(_,$),L={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":Q,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":V,"--warning-color":K,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(L).forEach(([N,B])=>{if(B)j.style.setProperty(N,B)})}function BH(){if(typeof document>"u")return;let _=document.documentElement;ZH.forEach(($)=>_.style.removeProperty($))}function F5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function hZ(_){let $=_7(J4?.theme||"default"),j=J4?.tint?String(J4.tint).trim():null,G=nZ($,_);if($==="default"&&j)G=dZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?z2.bgPrimary:H$.bgPrimary}function NH(_,$){if(typeof document>"u")return;let j=F5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=F5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",hZ("light"));let Z=F5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",hZ("dark"));let X=F5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=F5("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=F5("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function FH(){if(typeof window>"u")return;let _={...J4,mode:lZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function UH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function DH(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function G7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=_7(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=j7(j),X=QH(Z),Y=nZ(j,X);J4={theme:j,tint:G},lZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let V=Y;if(j==="default"&&G)V=dZ(Y,G,X);if(j==="default"&&!G)BH();else KH(V,X);if(DH(V.bgPrimary),NH(V.bgPrimary,X),FH(),$.persist!==!1)if(V_(e3,j),G)V_(O2,G);else V_(O2,"")}function W2(){if(j7(J4.theme).mode!=="auto")return;G7(J4,{persist:!1})}function Z7(){if(typeof window>"u")return;let _=_7(O1(e3)||"default"),$=(()=>{let j=O1(O2);return j?j.trim():null})();G7({theme:_,tint:$},{persist:!1})}function iZ(){if(typeof window>"u")return()=>{};if(Z7(),window.matchMedia&&!t3){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",W2);else if(_.addListener)_.addListener(W2);return t3=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",W2);else if(_.removeListener)_.removeListener(W2);t3=!1}}return()=>{}}function U5(_){if(!_||typeof _!=="object")return;let $=UH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)G7({theme:G||"default",tint:Z},{persist:!1});V_(e3,G||"default"),V_(O2,Z||"")}function oZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return rZ()}var e3="piclaw_theme",O2="piclaw_tint",H$,z2,cZ,ZH,J4,lZ="light",t3=!1;var $6=O_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},z2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},cZ={default:{label:"Default",mode:"auto",light:H$,dark:z2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},ZH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],J4={theme:"default",tint:null}});function ZX(_=typeof window<"u"?window:null){return _||null}function A2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Y6(_,$){return`${_}:${$}`}function XX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function YX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function k4(_){if(!_||typeof _!=="object")return null;return{..._}}function T4(_){if(!_)return null;return M4.find(($)=>$.id===_)||null}function Y7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function qX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=T4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function GX(_,$,j){let G=y4.get(Y6(_,$));if(G&&T4(G)?.status==="active")X6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=XX(_),X={id:Z,type:_,chatJid:$,startedAt:A2(),detail:k4(j),phases:[],status:"active"};return M4.push(X),YX(M4,100),y4.set(Y6(_,$),Z),Y7(Z,"start"),Z}function X6(_,$,j,G,Z){let X=T4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:A2(),detail:k4(G)}),Y7(X.id,j);if(X.status=$,X.completedAt=A2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=Y6(X.type,X.chatJid);if(y4.get(Y)===X.id)y4.delete(Y);qX(X.id)}function gH(_=ZX()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=k2;return k2}function D5(_=ZX()){return gH(_)}function VX(_,$,j){return D5().ensureTrace(_,$,j)}function M2(_,$){return D5().getActiveTraceId(_,$)}function X1(_,$,j){D5().markTrace(_,$,j)}function y2(_,$,j="settled",G){let Z=T4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return X6(_,"completed",j,G),!0}function QX(_,$,j="failed",G){D5().failTrace(_,$,j,G)}function LX(_,$="cancelled",j){D5().cancelTrace(_,$,j)}function q7(_){return D5().recordRequest(_)}var M4,Z6,y4,k2;var q6=O_(()=>{M4=[],Z6=[],y4=new Map;k2={startTrace(_,$,j){return GX(_,$,j)},ensureTrace(_,$,j){let G=y4.get(Y6(_,$));if(G&&T4(G)?.status==="active")return G;return GX(_,$,j)},getActiveTraceId(_,$){let j=y4.get(Y6(_,$));return j&&T4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=T4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:A2(),detail:k4(j)}),Y7(G.id,$)},completeTrace(_,$="settled",j){X6(_,"completed",$,j)},failTrace(_,$,j="failed",G){X6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){X6(_,"cancelled",$,j)},recordRequest(_){let $=XX("req");return Z6.push({..._,id:$,detail:k4(_.detail)}),YX(Z6,300),$},getTraces(){return M4.map((_)=>({..._,detail:k4(_.detail),phases:_.phases.map(($)=>({...$,detail:k4($.detail)}))}))},getRequests(){return Z6.map((_)=>({..._,detail:k4(_.detail)}))},clear(){M4.forEach((_)=>qX(_.id)),M4.splice(0,M4.length),Z6.splice(0,Z6.length),y4.clear()},printSummary(){let _={traces:k2.getTraces(),requests:k2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function bH(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function vH(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function KX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function BX(_=typeof window<"u"?window:null){let $=H5(_?.innerWidth)??H5(_?.screen?.availWidth)??H5(_?.screen?.width)??0,j=H5(_?.innerHeight)??H5(_?.screen?.availHeight)??H5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=bH(_),Y=Number(_?.navigator?.maxTouchPoints||0),q=X||Y>1;if(G>0&&G<=640)return"mobile";if(vH(_)&&!KX(_))return"mobile";if(KX(_))return"tablet";if(q&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var N6={};j1(N6,{uploadWorkspaceFile:()=>x2,uploadMedia:()=>z7,updateWorkspaceFile:()=>HE,updateScheduledTask:()=>B7,submitAdaptiveCardAction:()=>J7,streamSidePrompt:()=>NE,stopAutoresearch:()=>YE,steerAgentQueueItem:()=>LE,setWorkspaceVisibility:()=>K6,setAgentThoughtVisibility:()=>UE,sendPeerAgentMessage:()=>$E,sendAgentMessage:()=>z1,searchPosts:()=>cH,saveWorkspaceSettings:()=>U7,saveWebPushSubscription:()=>W7,saveUiState:()=>N7,saveQuickActionsSettings:()=>F7,saveEnvironmentOverride:()=>T2,restoreChatBranch:()=>_E,respondToAgentRequest:()=>E5,reorderAgentQueueItem:()=>KE,renameWorkspaceFile:()=>P7,renameChatJid:()=>eH,renameChatBranch:()=>oH,removeAgentQueueItem:()=>QE,reindexWorkspace:()=>w7,purgeChatBranch:()=>tH,pruneChatBranch:()=>aH,moveWorkspaceEntry:()=>f7,mergeChatBranchIntoParent:()=>sH,getWorkspaceTree:()=>L6,getWorkspaceRawUrl:()=>B6,getWorkspaceIndexStatus:()=>T7,getWorkspaceFileStat:()=>I7,getWorkspaceFileDownloadUrl:()=>I2,getWorkspaceFile:()=>x7,getWorkspaceDownloadUrl:()=>C2,getWorkspaceBranch:()=>y7,getWebPushPublicKey:()=>E7,getTimeline:()=>p$,getThumbnailUrl:()=>k7,getThread:()=>hH,getSystemMetrics:()=>L7,getScheduledTasks:()=>K7,getQuickActionsSettings:()=>Q6,getPostsByHashtag:()=>Q7,getMediaUrl:()=>g1,getMediaText:()=>DE,getMediaInfo:()=>w2,getMediaBlob:()=>M7,getEnvironmentSettings:()=>D7,getChatBranches:()=>dH,getAutoresearchStatus:()=>XE,getAgents:()=>jE,getAgentThought:()=>FE,getAgentStatus:()=>GE,getAgentQueueState:()=>VE,getAgentModels:()=>w4,getAgentContext:()=>ZE,getAgentCommands:()=>V6,getActiveChatAgents:()=>nH,forkChatBranch:()=>iH,dismissAutoresearch:()=>qE,deleteWorkspaceFile:()=>R7,deleteWebPushSubscription:()=>O7,deletePost:()=>rH,createWorkspaceFile:()=>C7,createRootChatSession:()=>H7,createReply:()=>pH,createPost:()=>lH,completeInstanceOobe:()=>BE,attachWorkspaceFile:()=>EE,addToWhitelist:()=>A7,SSEClient:()=>P2});async function p0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(l_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw q7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(q7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function NX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function mH(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let V=Z.split(`

`);Z=V.pop()||"";for(let Q of V){let K=NX(Q);if(K)$(K.event,K.data)}}Z+=G.decode();let X=NX(Z);if(X)$(X.event,X.data)}async function p$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return p0(G)}async function Q7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return p0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function cH(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",V=Z?`&scope=${encodeURIComponent(Z)}`:"",Q=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",K=Y?.images?"&images=1":"",L=Y?.attachments?"&attachments=1":"";return p0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${V}${Q}${K}${L}`)}async function hH(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return p0(`/thread/${_}${j}`)}async function L7(){return p0("/agent/system-metrics")}async function K7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return p0(`/agent/scheduled-tasks${j}`)}async function B7(_,$,j={}){return p0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function N7(_){return p0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function lH(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return p0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function pH(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return p0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function rH(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return p0(Z,{method:"DELETE"})}async function z1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:BX()}};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return p0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function V6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return p0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function Q6(){return p0("/agent/settings/quick-actions")}async function F7(_){return p0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function U7(_){return p0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function D7(){return p0("/agent/settings/environment")}async function T2(_){return p0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function nH(){return p0("/agent/active-chats")}async function dH(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return p0(`/agent/branches${G}`)}async function iH(_,$={}){return p0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function H7(_){return p0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function oH(_,$={}){return p0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function sH(_){return p0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function aH(_){return p0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function tH(_){return p0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function eH(_,$){return p0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function _E(_,$={}){return p0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function $E(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return p0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function E7(){return p0("/agent/push/vapid-public-key")}async function W7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function O7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function jE(){return p0("/agent/roster")}async function GE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/status${$}`)}async function ZE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/context${$}`)}async function XE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/autoresearch/status${$}`)}async function YE(_=null,$={}){return p0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function qE(_=null){return p0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function VE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/queue-state${$}`)}async function QE(_,$=null){let j=await fetch(l_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function LE(_,$=null){let j=await fetch(l_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function KE(_,$,j=null){let G=await fetch(l_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/models${$}`)}async function BE(_="provider-ready"){return p0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function z7(_){let $=new FormData;$.append("file",_);let j=await fetch(l_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function E5(_,$,j=null){let G=await fetch(l_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function J7(_){let $=await fetch(l_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function NE(_,$={}){let j=await fetch(l_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await mH(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function A7(_,$){let j=await fetch(l_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function FE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return p0(j)}async function UE(_,$,j){return p0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function g1(_){return`${l_}/media/${_}`}function k7(_){return`${l_}/media/${_}/thumbnail`}async function w2(_){let $=await fetch(`${l_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function DE(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M7(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function L6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return p0(G)}async function y7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return p0($)}async function T7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return p0($)}async function w7(_="all"){return p0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function x7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return p0(Z)}async function I7(_){return p0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function HE(_,$){return p0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function EE(_){return p0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function OE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function zE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function JE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",l_+$);for(let[q,V]of Object.entries(j||{}))if(V!==void 0&&V!==null)Y.setRequestHeader(q,String(V));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let V=Error(q.error||`HTTP ${Y.status}`);V.status=Y.status,V.code=q.code,X(V)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function AE(_,$="",j={}){let G=zE(),Z=OE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(V7,Number(j.chunkSize)||WE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),V=0,Q=null;for(let K=0;K<q;K+=1){let L=K*X,N=Math.min(Y,L+X),B=_.slice(L,N),U=B.size;if(Q=await JE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":K,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let H=Math.min(Y,V+(E?.loaded||0)),D=Y||1;j.onProgress({loaded:H,total:D,percent:Math.round(H/D*100),chunkIndex:K,chunkTotal:q})}),V+=U,typeof j.onProgress==="function"){let E=Y||1,H=Y?V:E;j.onProgress({loaded:H,total:E,percent:Math.round(H/E*100),chunkIndex:K+1,chunkTotal:q})}}return Q}async function x2(_,$="",j={}){if(_?.size>V7){let G=(_.size/1048576).toFixed(0),Z=(V7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await AE(_,$,j)}async function C7(_,$,j=""){let G=await fetch(l_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function P7(_,$){let j=await fetch(l_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function f7(_,$){let j=await fetch(l_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function R7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return p0($,{method:"DELETE"})}async function K6(_,$=!1){return p0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function B6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${l_}/workspace/raw?${j.toString()}`}function I2(_){return B6(_,{download:!0})}function C2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${l_}/workspace/download?${j}`}class P2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(l_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var l_="",V7=1073741824,WE=8388608;var w_=O_(()=>{q6()});function O5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=O5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function i7(){if(typeof window>"u")return null;return O5(window.__piclawSettingsRequestedSection)}function u2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=i7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function d$({children:_,className:$=""}){let[j,G]=P(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{B$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),G5(()=>{if(!j)return;B$(_,j);return},[_,j]),null}var g2=O_(()=>{k0()});function o7(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function i$(_){let $=I4.findIndex((j)=>j.id===_.id);if($>=0)I4[$]=_;else I4.push(_);I4.sort(o7)}function _Y(_){let $=I4.findIndex((j)=>j.id===_);if($>=0)I4.splice($,1)}function $Y(){return[...I4]}function s7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var I4;var z5=O_(()=>{I4=[]});function nE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(C4,{detail:{enabled:Boolean(_)}}))}function ZY(_){if(typeof fetch!=="function")return;N7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function dE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(v2,{detail:{collapsed:Boolean(_)}}))}function O6(_=!1){return U$(jY,_)}function XY(_=!1){return U$(GY,_)}function b2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(jY,Z?"true":"false");if(G)ZY({enabled:Z});return nE(Z),Z}function a7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)V_(GY,Z?"true":"false");if(G)ZY({collapsed:Z});return dE(Z),Z}function t7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")b2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!O6(!1);b2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")a7(Boolean(_.collapsed),{persistServer:!1})}var jY="piclaw_system_meters_enabled",GY="piclaw_system_meters_collapsed",C4="piclaw-meters-change",v2="piclaw-meters-collapsed-change";var m2=O_(()=>{w_()});function YY(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function qY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function z$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=YY(_,$);return qY(Z,{min:j,max:G})}function iE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=z$(_,{fallback:G,min:Z,max:X}),q=Math.abs(YY(j,1))||1,V=Number($)<0?-1:1;return qY(Y+V*q,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:V}){let Q=Number.isFinite(Number(Z))?Number(Z):z$(_,{fallback:0,min:$,max:j}),[K,L]=P(String(_??Q)),N=g(!1);u(()=>{if(!N.current)L(String(_??Q))},[_,Q]);let B=R((E)=>{N.current=!1;let H=z$(E,{fallback:Q,min:$,max:j});L(String(H)),V?.(H)},[Q,$,j,V]),U=R((E)=>{N.current=!1;let H=iE(_,{direction:E,step:G,fallback:Q,min:$,max:j});L(String(H)),V?.(H)},[Q,j,$,V,G,_]);return F`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${q||"value"}`}
                title=${`Decrease ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${K}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(E)=>{N.current=!0,L(E.target.value)}}
                onBlur=${(E)=>B(E.target.value)}
                onKeyDown=${(E)=>{if(E.key==="Enter")E.preventDefault(),B(E.target.value),E.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${q||"value"}`}
                title=${`Increase ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var P4=O_(()=>{k0()});function VY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function QY({value:_,onChange:$}){let j=g(null),[G,Z]=P(VY(_));u(()=>{Z(VY(_))},[_]);let X=R((Y)=>{let q=Y.target.files?.[0];if(!q)return;let V=new FileReader;V.onload=()=>{let Q=V.result;Z(Q),$?.(Q)},V.readAsDataURL(q)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function LY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function oE(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let G=$.navigator??(typeof navigator<"u"?navigator:null),Z=$.document??(typeof document<"u"?document:null);if(G?.clipboard?.writeText)try{return await G.clipboard.writeText(j),!0}catch(X){}try{if(!Z?.body||typeof Z.createElement!=="function"||typeof Z.execCommand!=="function")return!1;let X=Z.createElement("textarea");X.value=j,X.setAttribute?.("readonly",""),X.style.position="fixed",X.style.left="-9999px",X.style.top="0",X.style.opacity="0",Z.body.appendChild(X),X.focus?.(),X.select?.();let Y=Boolean(Z.execCommand("copy"));return Z.body.removeChild(X),Y}catch(X){return!1}}function e7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(""),[X,Y]=P(""),[q,V]=P(""),[Q,K]=P(""),[L,N]=P(32),[B,U]=P(256),[E,H]=P(""),[D,k]=P(!1),[z,O]=P(!1),[I,x]=P(!1),[A,M]=P(()=>O6(!1)),[W,y]=P(!1),w=g(""),J=g(null),C=g(!0);u(()=>{return C.current=!0,()=>{C.current=!1}},[]);let f=R((G0)=>{let $0=LY(G0);Z($0.userName),Y($0.userAvatar),V($0.assistantName),K($0.assistantAvatar),N($0.composeUploadLimitMb),U($0.workspaceUploadLimitMb),H(G0?.widgetToken||""),w.current=JSON.stringify($0)},[]);u(()=>{f(_||{})},[_,f]),u(()=>{let G0=($0)=>{M(Boolean($0?.detail?.enabled))};return window.addEventListener(C4,G0),()=>window.removeEventListener(C4,G0)},[]);let b=Y0(()=>JSON.stringify(LY({userName:G,userAvatar:X,assistantName:q,assistantAvatar:Q,composeUploadLimitMb:L,workspaceUploadLimitMb:B})),[G,X,q,Q,L,B]);u(()=>{if(b===w.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!C.current)return;let G0=document.activeElement;if(G0&&G0.closest?.(".settings-number-stepper"))return;try{let $0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),X0=await $0.json().catch(()=>({}));if(!C.current)return;if(!$0.ok||!X0?.ok||!X0?.settings)return;w.current=b,j?.(X0.settings),y(!0),setTimeout(()=>{if(C.current)y(!1)},4000)}catch($0){console.warn("[settings/general] Failed to persist general settings snapshot.",$0)}},800),()=>{if(J.current)clearTimeout(J.current)}},[b,j]);let c=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},p=R(async()=>{if(!E)return;if(await oE(E))O(!0),setTimeout(()=>{if(C.current)O(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[E,$]),e=R(async()=>{if(I)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;x(!0);try{let G0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),$0=await G0.json().catch(()=>({}));if(!G0.ok||!$0?.ok||!$0?.settings)throw Error($0?.error||"Failed to regenerate widget token.");H($0.settings.widgetToken||""),j?.($0.settings),y(!0),setTimeout(()=>{if(C.current)y(!1)},4000)}catch(G0){console.warn("[settings/general] Failed to regenerate widget token.",G0)}finally{if(C.current)x(!1)}},[I,j]),m=typeof window<"u"&&window.isSecureContext,_0=E?"•".repeat(Math.min(Math.max(E.length,16),48)):"—",E0=D?E||"—":_0;return F`
        <div class="settings-section">
            ${W&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${QY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(G0)=>Z(G0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${QY} value=${Q} onChange=${K} />
                <input type="text" value=${q} onInput=${(G0)=>V(G0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${m?F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:F`
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
                    <input type="checkbox" checked=${A}
                        onChange=${()=>{let G0=b2(!A);M(G0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${L}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${v_}
                    label="workspace upload limit"
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical settings-widget-token-row">
                <label>Widget bearer token</label>
                <div class="settings-keychain-reveal-panel settings-widget-token-panel">
                    <div class="settings-keychain-reveal-field settings-widget-token-field">
                        <span class="settings-keychain-reveal-label">Token</span>
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${E0}</code>
                        <button class=${`settings-keychain-reveal-btn${D?" active":""}`}
                            type="button"
                            onClick=${()=>k((G0)=>!G0)}
                            disabled=${!E}
                            title=${D?"Hide token":"Reveal token"}>
                            ${D?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${p} disabled=${!E} title="Copy token">
                            ${z?F`<span class="settings-widget-token-copied">Copied</span>`:F`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${e} disabled=${I}>${I?"Regenerating…":"Regenerate"}</button>
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
                            ${c.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${c.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:c.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${c.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${c.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${c.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var KY=O_(()=>{k0();m2();P4()});var NY={};j1(NY,{SessionsSection:()=>sE});function BY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function sE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(!0),[X,Y]=P(16),[q,V]=P(4000),[Q,K]=P(3),[L,N]=P(64),[B,U]=P("none"),[E,H]=P(!1),D=g(""),k=g(null),z=g(!0);u(()=>{return z.current=!0,()=>{z.current=!1}},[]);let O=R((x)=>{let A=BY(x);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),V(A.sessionMaxLines),K(A.sessionMaxCompactions),N(A.toolUseBudget),U(A.sessionIsolation),D.current=JSON.stringify(A)},[]);u(()=>{O(_||{})},[_,O]);let I=Y0(()=>JSON.stringify(BY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:Q,toolUseBudget:L,sessionIsolation:B})),[G,X,q,Q,L,B]);return u(()=>{if(I===D.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!z.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:I}),M=await A.json().catch(()=>({}));if(!z.current)return;if(!A.ok||!M?.ok||!M?.settings)return;D.current=I,j?.(M.settings),H(!0),setTimeout(()=>{if(z.current)H(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(k.current)clearTimeout(k.current)}},[I,j]),F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(x)=>Z(x.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${v_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${v_}
                    label="tool use budget"
                    value=${L}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var FY=O_(()=>{k0();P4()});var UY={};j1(UY,{CompactionSection:()=>tE});function aE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function _9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function tE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(180),[X,Y]=P(15),[q,V]=P(360),[Q,K]=P(75),[L,N]=P(0.5),[B,U]=P(!1),[E,H]=P(120),[D,k]=P([]),[z,O]=P([]),[I,x]=P(!1),A=g(""),M=g(null),W=g(!0);u(()=>{return W.current=!0,()=>{W.current=!1}},[]);let y=R((C)=>{let f=aE(C);Z(f.compactionTimeoutSec),Y(f.compactionBackoffBaseMin),V(f.compactionBackoffMaxMin),K(f.compactionThresholdPercent),N(f.compactionBackoffDecayFactor),U(f.progressWatchdogEnabled),H(f.progressWatchdogTimeoutSec),k(f.compactionBackoffs),O(f.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);u(()=>{y(_||{})},[_,y]);let w=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:Q,compactionBackoffDecayFactor:L,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:E}),[G,X,q,Q,L,B,E]);u(()=>{if(w===A.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!W.current)return;let C=document.activeElement;if(C&&C.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:w}),b=await f.json().catch(()=>({}));if(!W.current)return;if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}A.current=w,j?.(b.settings),y({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(W.current)x(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),W.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(M.current)clearTimeout(M.current)}},[w,j,$,y,_]);let J=R(async(C)=>{try{$?.(`Clearing compaction suppression for ${C}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:C})}),b=await f.json().catch(()=>({}));if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),y({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${C}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[y,j,$,_]);return F`
        <div class="settings-section">
            ${I&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${v_}
                    label="compaction threshold"
                    value=${Q}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${v_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${v_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${v_}
                    label="compaction backoff max"
                    value=${q}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${v_}
                    label="backoff decay factor"
                    value=${Math.round(L*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(C)=>N(C/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(C)=>U(Boolean(C.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${v_}
                    label="watchdog timeout"
                    value=${E}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${H}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${D.length===0?F`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:F`
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
                            ${D.map((C)=>F`
                                <tr>
                                    <td><code>${C.chatJid}</code></td>
                                    <td>${C.failureCount}</td>
                                    <td>${_9(C.backoffUntil)}</td>
                                    <td title=${C.lastErrorMessage||""}>${C.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>J(C.chatJid)}>
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
            ${z.length===0?F`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:F`
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
                            ${z.map((C)=>F`
                                <tr>
                                    <td><code>${C.chatJid}</code></td>
                                    <td>${C.phase}</td>
                                    <td>${_9(C.startedAt)}</td>
                                    <td>${_9(C.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var DY=O_(()=>{k0();P4()});function EY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=$W[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(jW.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function J5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=_W[Y];if(q){G[q]=!0;continue}if(G.key)return null;let V=EY(X);if(!V||V==="escape")return null;G.key=V}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function WY(_){return String(_||"").split(/[\n,]/).map(($)=>J5($)).filter(($)=>Boolean($))}function s$(_){return _.join(", ")}function j9(){let _=H2(HY);if(!_||typeof _!=="object")return{};let $={};for(let j of o$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>J5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function $9(_){if(V_(HY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function OY(_){return eE.get(_)}function z6(_){let $=j9()[_];if(Array.isArray($))return $;return[...OY(_).defaultBindings]}function zY(_,$){let j=j9(),G=OY(_).defaultBindings,Z=[...new Set($.map((X)=>J5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;$9(j)}function G9(_){if(!_){$9({});return}let $=j9();delete $[_],$9($)}function c2(){let _={};for(let $ of o$)_[$.id]=z6($.id);return _}function GW(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return EY($)||$.toLowerCase()}function ZW(_){let $=J5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function XW(_,$){let j=ZW($);if(!j)return!1;if(GW(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function J$(_,$){return z6($).some((j)=>XW(_,j))}var HY="piclaw_keyboard_shortcuts_v1",o$,eE,_W,$W,jW;var h2=O_(()=>{o$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],eE=new Map(o$.map((_)=>[_.id,_])),_W={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},$W={esc:"escape",return:"enter",spacebar:"space"},jW=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var JY={};j1(JY,{KeyboardSection:()=>qW});function YW(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function qW({filter:_="",setStatus:$}){let[j,G]=P(()=>{let V=c2();return Object.fromEntries(Object.entries(V).map(([Q,K])=>[Q,s$(K)]))});u(()=>{let V=()=>{let Q=c2();G(Object.fromEntries(Object.entries(Q).map(([K,L])=>[K,s$(L)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",V),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",V)},[]);let Z=Y0(()=>o$.filter((V)=>{let Q=String(j[V.id]||"");return YW(_,V,Q)}),[j,_]),X=(V)=>{let Q=String(j[V]||"").trim(),L=(Q?Q.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!J5(B));if(L.length>0){$?.(`Invalid shortcut: ${L[0]}. Escape is reserved and cannot be rebound.`,"error");return}let N=WY(Q);zY(V,N),G((B)=>({...B,[V]:s$(z6(V))})),$?.("Keyboard shortcuts saved.","success")},Y=(V)=>{G9(V),G((Q)=>({...Q,[V]:s$(z6(V))})),$?.("Keyboard shortcut reset to default.","success")};return F`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{G9();let V=c2();G(Object.fromEntries(Object.entries(V).map(([Q,K])=>[Q,s$(K)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((V)=>F`
                    <div class="settings-shortcut-card" key=${V.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${V.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${V.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${s$(V.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[V.id]||""}
                                placeholder=${s$(V.defaultBindings)}
                                onInput=${(Q)=>G((K)=>({...K,[V.id]:Q.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(V.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(V.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var AY=O_(()=>{k0();h2()});function kY(_,$=Z9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function MY(_,$=X9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function A5(){return{refreshIntervalSec:kY(O4(p2,Z9),Z9),folderPreviewDepth:MY(O4(r2,X9),X9)}}function yY(_={}){let $=A5(),j={refreshIntervalSec:kY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:MY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(V_(p2,String(j.refreshIntervalSec)),V_(r2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(l2,{detail:{settings:j}}));return j}var l2="piclaw:workspace-client-settings-updated",p2="workspaceRefreshIntervalSec",r2="workspaceFolderPreviewDepth",Z9=60,X9=3;var Y9=()=>{};var wY={};j1(wY,{WorkspaceSection:()=>VW});function TY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function VW({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(!0),[X,Y]=P(!0),[q,V]=P(4),[Q,K]=P(5000),[L,N]=P(60),[B,U]=P(3),[E,H]=P(!1),[D,k]=P(!1),z=g(""),O=g(null),I=g(null),x=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{if(A.current=!1,O.current)clearTimeout(O.current);if(I.current)clearTimeout(I.current);if(x.current)clearTimeout(x.current)}},[]);let M=R((w)=>{let J=TY(w),C=A5();Z(J.webTerminalEnabled),Y(J.vncAllowDirect),V(J.treeMaxDepth),K(J.treeMaxEntries),N(C.refreshIntervalSec),U(C.folderPreviewDepth),z.current=JSON.stringify(J)},[]);u(()=>{M(_||{})},[_,M]);let W=Y0(()=>JSON.stringify(TY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:Q}})),[G,X,q,Q]);u(()=>{if(W===z.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!A.current)return;let w=document.activeElement;if(w&&w.closest?.(".settings-number-stepper"))return;try{let J=await U7(JSON.parse(W));if(!A.current||!J?.ok||!J?.settings)return;if(z.current=W,j?.({workspaceSettings:J.settings}),$?.(null),H(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)H(!1)},4000)}catch(J){$?.(String(J?.message||J),"error")}},800),()=>{if(O.current)clearTimeout(O.current)}},[W,j,$]);let y=R((w)=>{let J=yY(w);if(N(J.refreshIntervalSec),U(J.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(A.current)k(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(w)=>Z(w.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(w)=>Y(w.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${v_}
                    label="workspace tree max depth"
                    value=${q}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${v_}
                    label="workspace tree max entries"
                    value=${Q}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${v_}
                    label="workspace refresh interval"
                    value=${L}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(w)=>y({refreshIntervalSec:w})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${v_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(w)=>y({folderPreviewDepth:w})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var xY=O_(()=>{k0();w_();Y9();P4()});var IY={};j1(IY,{EnvironmentSection:()=>QW});function q9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function QW({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=P(()=>q9(_||{})),[Y,q]=P({}),[V,Q]=P(""),[K,L]=P(""),[N,B]=P(null);u(()=>{X(q9(_||{})),q({})},[_]);let U=R((O)=>{let I=q9({environmentSettings:O?.settings||O});return X(I),G?.({environmentSettings:I}),q({}),I},[G]),E=R(async()=>{try{let O=await D7();if(O?.ok)U(O.settings);j?.("Environment refreshed.","info")}catch(O){j?.(String(O?.message||O),"error")}},[U,j]),H=R(async(O,I)=>{let x=String(O||"").trim();if(!x)return;B(x);try{let A=await T2({action:"set",name:x,value:String(I??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===V.trim())Q(""),L("")}catch(A){j?.(String(A?.message||A),"error")}finally{B(null)}},[U,V,j]),D=R(async(O)=>{let I=String(O||"").trim();if(!I)return;B(I);try{let x=await T2({action:"clear",name:I});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${I}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{B(null)}},[U,j]),k=Y0(()=>{let O=String($||"").trim().toLowerCase(),I=Array.isArray(Z.variables)?Z.variables:[];if(!O)return I;return I.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(O)})},[Z.variables,$]),z=R((O,I)=>{q((x)=>({...x||{},[O]:I}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${E}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${V}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(O)=>Q(O.target.value)}
                    />
                    <input
                        type="text"
                        value=${K}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(O)=>L(O.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!V.trim()||N===V.trim()}
                        onClick=${()=>H(V,K)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((O)=>{let I=String(O?.name||""),x=Object.prototype.hasOwnProperty.call(Y,I)?Y[I]:O.value,A=x!==O.value,M=N===I;return F`
                        <div class="settings-tool-row" key=${I} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${I}>${I}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(W)=>z(I,W.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${O.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${O.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${M||!A} onClick=${()=>H(I,x)}>Save</button>
                                <button type="button" disabled=${M||!O.overridden} onClick=${()=>D(I)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var CY=O_(()=>{k0();w_()});var PY={};j1(PY,{ProvidersSection:()=>KW});function LW(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function KW({providers:_,setStatus:$}){let[j,G]=P(null),[Z,X]=P(null),[Y,q]=P({}),V=R((H,D)=>{q((k)=>({...k,[H]:D}))},[]),Q=R(async(H)=>{let D=(Y.apiKey||"").trim();if(!D){$?.("API key cannot be empty.","error");return}G(H),$?.(`Configuring ${H}…`,"info");try{let k=JSON.stringify({provider:H,method:"api_key",api_key:D}),z=await z1("default",`/login __step2 ${k}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${H} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),K=R(async(H,D)=>{G(H),$?.(`Configuring ${H}…`,"info");try{let k={provider:H,method:"custom"};for(let I of D.customFields||[])k[I.key]=(Y[I.key]||"").trim();let z=JSON.stringify(k),O=await z1("default",`/login __step2 ${z}`,null,[]);if(O?.command?.status==="error"){$?.(O.command.message,"error");return}$?.(O?.command?.message||`${H} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),L=R(async(H)=>{G(H),$?.(`Starting OAuth for ${H}…`,"info");try{let D=JSON.stringify({provider:H}),z=(await z1("default",`/login __step1 ${D}`,null,[]))?.command?.message||"";if(z.includes("http")){let O=z.match(/(https?:\/\/[^\s)]+)/);if(O)window.open(O[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${H}. Check the chat.`,"success")}catch(D){$?.(String(D.message||D),"error")}finally{G(null)}},[$]),N=R(async(H)=>{if(j)return;G(H),$?.(`Logging out ${H}…`,"info");try{await z1("default",`/logout ${H}`,null,[]),$?.(`Logged out ${H}. Restart may be needed.`,"success")}catch(D){$?.(String(D.message||D),"error")}finally{G(null)}},[j,$]),B=_||[],U=(H)=>Z===H,E=(H)=>{X((D)=>D===H?null:H),q({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((H)=>F`
                    <div class=${`settings-provider-card${H.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!H.configured&&E(H.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${H.name}</strong>
                                <span class="settings-provider-id">${H.id}</span>
                                ${H.configured&&F`<span class="settings-tag settings-tag-skill">${LW(H.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${H.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${H.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${H.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${H.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),N(H.id)}}
                                    >${j===H.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),E(H.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===H.id} onClick=${(D)=>{D.stopPropagation(),E(H.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(H.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${H.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===H.id}
                                            onClick=${()=>L(H.id)}>
                                            ${j===H.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${H.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(D)=>V("apiKey",D.target.value)}
                                                placeholder=${H.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>Q(H.id)}>
                                                ${j===H.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${H.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(H.customFields||[]).map((D)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${D.label}${D.required?" *":""}</label>
                                                <input type="text" value=${Y[D.key]||""}
                                                    onInput=${(k)=>V(D.key,k.target.value)}
                                                    placeholder=${D.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===H.id}
                                                onClick=${()=>K(H.id,H)}>
                                                ${j===H.id?"Configuring…":"Save configuration"}
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
    `}var fY=O_(()=>{k0();w_()});var RY={};j1(RY,{ModelsSection:()=>DW});function FW(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function UW({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=FW(j)?BW:NW,q=G&&G.length>1?G:["off","minimal","low","medium","high"],V=Math.max(0,q.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[V]]||q[V]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${V} disabled=${X}
                    onInput=${(Q)=>Z(q[parseInt(Q.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((Q,K)=>F`<span class=${K===V?"active":""} onClick=${()=>!X&&Z(Q)}>${Y[Q]||Q}</span>`)}
                </div>
            </div>
        </div>
    `}function DW({filter:_=""}){let[$,j]=P(null),[G,Z]=P(!1),[X,Y]=P("off"),[q,V]=P(!1),[Q,K]=P(["off"]),[L,N]=P(!1),B=R(async()=>{let x=await w4();if(j(x),x.thinking_level)Y(x.thinking_level);if(V(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)K(x.available_thinking_levels);return x},[]);u(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=R(async(x)=>{if(G)return;Z(!0);try{await z1("default",`/model ${x}`,null,[]),await B()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,B]),E=R(async(x)=>{if(L)return;N(!0),Y(x);try{let A=await z1("default",`/thinking ${x}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);V(A?.command?.supports_thinking!==!1),await B()}catch(A){console.error("Failed to set thinking:",A),await B().catch((M)=>{})}finally{N(!1)}},[L,B]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let H=$.model_options||[],D=$.current,z=H.find((x)=>x.label===D)?.provider||"",O=_.toLowerCase(),I=O?H.filter((x)=>x.label.toLowerCase().includes(O)||(x.provider||"").toLowerCase().includes(O)):H;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${I.map((x)=>F`
                            <tr class=${x.label===D?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===D} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${I.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${UW}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${z}
                    availableLevels=${Q}
                    onSetLevel=${E}
                    disabled=${L||G} />
            </div>
        </div>
    `}var BW,NW;var SY=O_(()=>{k0();w_();BW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},NW={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var gY={};j1(gY,{ThemeSection:()=>HW});function uY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function HW({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=P("default"),[q,V]=P(""),[Q,K]=P(!1),L=g(""),N=g(null),B=g(!0);u(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=R((z)=>{let O=uY(z);Y(O.uiTheme),V(O.uiTint),L.current=JSON.stringify(O)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=R((z,O)=>{U5({theme:z,tint:O||null}),Y(z||"default"),V(O||"")},[]),H=Y0(()=>JSON.stringify(uY({uiTheme:X,uiTint:q})),[X,q]);u(()=>{if(H===L.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!B.current)return;K(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:H}),O=await z.json().catch(()=>({}));if(!B.current)return;if(!z.ok||!O?.ok||!O?.settings){G?.(O?.error||"Failed to save appearance settings.","error");return}L.current=H,Z?.(O.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(B.current)K(!1)}},250),()=>{if(N.current)clearTimeout(N.current)}},[H,Z,G]);let D=$||[],k=_||[];return F`
        <div class="settings-section">
            ${Q&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>E("default",q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${q||"#1d9bf0"}
                        onInput=${(z)=>{let O=z.target.value;if(V(O),X==="default")U5({theme:"default",tint:O})}} />
                    ${q&&F`
                        <button class="settings-tint-clear" onClick=${()=>E("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${D.map((z)=>F`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((z)=>z.name!=="default").map((z)=>F`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>E(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${D.map((O)=>{let I=z.colors?.[O];return F`<td class="settings-swatch-cell">
                                    ${I?F`<span class="settings-color-swatch" style=${"background:"+I} title=${I}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var bY=O_(()=>{k0();$6()});var mY={};j1(mY,{__scheduledTasksSettingsTest:()=>AW,ScheduledTasksSection:()=>JW});function f4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function vY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function V9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${f4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function Q9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function L9(_){return(_?.task_kind||"agent")==="internal"}function WW(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function k5({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function OW({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${k5} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${f4(j.run_at)}</span>
                        <span>${vY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||WW(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function zW({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=L9(_);return F`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&F`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&F`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${Q9(_)}</strong>
                <span>Schedule</span><strong>${V9(_)}</strong>
                <span>Next run</span><strong>${f4(_.next_run)}</strong>
                <span>Last run</span><strong>${f4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&F`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&F`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&F`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${OW} task=${_} />
        </div>
    `}function JW({filter:_="",setStatus:$}){let[j,G]=P([]),[Z,X]=P({active:0,paused:0,completed:0}),[Y,q]=P("all"),[V,Q]=P(""),[K,L]=P(!0),[N,B]=P(null),[U,E]=P(null),[H,D]=P(null),[k,z]=P(!1),O=R(async(W={})=>{L(!0),B(null);try{let y=await K7({status:Y,chatJid:V.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(y.tasks||[]),X(y.counts||{active:0,paused:0,completed:0});let w=W.selectedId||U,J=(y.tasks||[]).find((C)=>C.id===w)||(y.tasks||[])[0]||null;E(J?.id||null),D(J)}catch(y){B(y?.message||"Failed to load scheduled tasks.")}finally{L(!1)}},[Y,V,U]);u(()=>{O()},[O]);let I=String(_||"").trim().toLowerCase(),x=Y0(()=>{if(!I)return j;return j.filter((W)=>[W.id,W.chat_jid,W.status,W.task_kind,W.schedule_type,W.schedule_value,W.summary,W.prompt_summary,W.command_summary,W.latest_run_log?.error_summary].some((y)=>String(y||"").toLowerCase().includes(I)))},[j,I]),A=R((W)=>{E(W?.id||null),D(W||null)},[]),M=R(async(W,y)=>{if(!y||k)return;let w=L9(y),J=y.summary||y.command_summary||y.prompt_summary||y.id,C=W==="delete"?`Delete scheduled task ${y.id}?

${J}`:`${W==="pause"?"Pause":"Resume"} scheduled task ${y.id}?

${J}`;if(!window.confirm(C))return;if(w&&!window.confirm(`Task ${y.id} is internal/protected. Continue with ${W}?`))return;z(!0),$?.(`${W==="delete"?"Deleting":W==="pause"?"Pausing":"Resuming"} ${y.id}…`,"info");try{await B7(W,y.id,{allowInternal:w}),$?.(`Scheduled task ${y.id} ${W==="delete"?"deleted":W==="pause"?"paused":"resumed"}.`,"success"),await O({selectedId:W==="delete"?null:y.id})}catch(f){$?.(f?.message||`Failed to ${W} task.`,"error")}finally{z(!1)}},[k,O,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${k5} type="active">Active ${Z.active||0}<//>
                    <${k5} type="paused">Paused ${Z.paused||0}<//>
                    <${k5} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(W)=>q(W.target.value)}>
                        ${EW.map((W)=>F`<option value=${W}>${W==="all"?"All statuses":W}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${V} onInput=${(W)=>Q(W.target.value)} />
                    <button onClick=${()=>O()} disabled=${K}>Refresh</button>
                </div>
            </div>

            ${K&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${N&&F`<div class="settings-error-state">${N}</div>`}
            ${!K&&!N&&j.length===0&&F`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!K&&!N&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${x.map((W)=>F`
                            <button class=${`settings-task-row ${W.id===U?"active":""}`} onClick=${()=>A(W)}>
                                <span class="settings-task-row-main">
                                    <strong>${W.summary||W.id}</strong>
                                    <span>${V9(W)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${k5} type=${W.status||"neutral"}>${W.status}<//>
                                    <${k5}>${Q9(W)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${f4(W.next_run)} · Last ${f4(W.last_run)}${W.latest_run_log?.status?` · ${W.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${x.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${zW} task=${H&&x.some((W)=>W.id===H.id)?H:x[0]} onAction=${M} />
                </div>
            `}
        </div>
    `}var EW,AW;var cY=O_(()=>{k0();w_();EW=["all","active","paused","completed"];AW={formatDateTime:f4,formatDuration:vY,labelForSchedule:V9,kindLabel:Q9,isProtectedTask:L9}});function hY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function M5(_){return typeof _==="string"&&_.trim().length>0}function K9(_,...$){let j=hY(_);if(!j)return!0;let G=$.map((Z)=>hY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function lY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function t$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:lY($.workspaceCommands),slashCommands:lY($.slashCommands)}}function pY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function kW(_){let $=Array.isArray(_?.commands)?_.commands:[],j=t$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>pY(j.workspaceCommands,Z.id)).filter((Z)=>K9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function MW(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=M5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>K9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=M5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=M5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function yW(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=t$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=M5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),pY(j.slashCommands,Y)}).filter((X)=>K9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=M5(X?.description)?X.description.trim():"slash command",V=M5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:V||"Slash",actionHint:"Insert",commandName:Y}})}function rY(_){return[...MW({agents:_?.agents,query:_?.query}),...kW({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...yW({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var a$;var B9=O_(()=>{a$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var iY={};j1(iY,{QuickActionsSection:()=>TW});function nY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function dY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function TW({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=P(()=>a$.map((x)=>x.id)),[X,Y]=P([]),[q,V]=P([]),[Q,K]=P(!0),[L,N]=P(!1),B=R(async()=>{K(!0);try{let[x,A]=await Promise.all([Q6(),V6("web:default").catch(()=>({commands:[]}))]),M=t$(x?.settings),W=Array.isArray(A?.commands)?A.commands:[];V(W),Z(Array.isArray(M.workspaceCommands)?M.workspaceCommands:a$.map((y)=>y.id)),Y(Array.isArray(M.slashCommands)?M.slashCommands:W.map((y)=>String(y?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{K(!1)}},[$]);u(()=>{B()},[B]);let U=Y0(()=>dY(G),[G]),E=Y0(()=>dY(X),[X]),H=Y0(()=>a$.filter((x)=>nY(_,x.label,x.description,...x.keywords||[])),[_]),D=Y0(()=>q.filter((x)=>nY(_,x?.name,x?.description,x?.source)),[q,_]),k=R((x)=>{Z((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return a$.map((W)=>W.id).filter((W)=>M.has(W))})},[]),z=R((x)=>{Y((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((W)=>String(W||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return q.map((W)=>String(W?.name||"").trim()).filter((W)=>W&&M.has(W))})},[q]),O=R(()=>{Z(a$.map((x)=>x.id)),Y(q.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[q]),I=R(async()=>{if(L)return;N(!0),$?.("Saving quick actions…","info");try{let x=await F7({workspaceCommands:G,slashCommands:X}),A=t$(x?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{N(!1)}},[j,L,$,X,G]);if(Q)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${O} disabled=${L}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${I} disabled=${L}>
                    ${L?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let A=U?U.has(x.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${D.map((x)=>{let A=String(x?.name||"").trim(),M=E?E.has(A.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${M} onChange=${()=>z(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var oY=O_(()=>{k0();w_();B9()});var sY={};j1(sY,{KeychainSection:()=>IW});function wW(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function IW({filter:_=""}){let[$,j]=P([]),[G,Z]=P(!0),[X,Y]=P(null),[q,V]=P(!1),[Q,K]=P(""),[L,N]=P(""),[B,U]=P(""),[E,H]=P(""),[D,k]=P(""),[z,O]=P("secret"),[I,x]=P(!1),[A,M]=P({}),[W,y]=P(null),[w,J]=P(null),[C,f]=P(null),b=g(null),c=g(null),p=g(null),e=R(async()=>{Z(!0),Y(null);try{let Z0=await(await fetch("/agent/keychain")).json();if(Z0?.ok)j(Z0.entries||[]);else Y(Z0?.error||"Failed to load keychain.")}catch(s){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{e()},[e]);let m=R(async()=>{let s=Q.trim(),Z0=L;if(!s||!Z0)return;x(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,secret:Z0,type:z,username:B.trim()||void 0,userNote:E,agentNote:D})})).json();if(P0?.ok)K(""),N(""),U(""),H(""),k(""),O("secret"),V(!1),await e();else Y(P0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[Q,L,B,E,D,z,e]),_0=R(async(s)=>{try{let W0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})})).json();if(W0?.ok)J(null),f((P0)=>P0?.name===s?null:P0),await e();else Y(W0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[e]),E0=R(async(s)=>{let Z0=s?.name;if(!Z0)return;let W0=A[Z0]||{},P0=Object.prototype.hasOwnProperty.call(W0,"userNote")?W0.userNote:s.userNote||"",h0=Object.prototype.hasOwnProperty.call(W0,"agentNote")?W0.agentNote:s.agentNote||"";y(Z0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Z0,userNote:P0,agentNote:h0})})).json();if(G_?.ok)M((c0)=>{let s0={...c0||{}};return delete s0[Z0],s0}),await e();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{y(null)}},[A,e]),G0=R((s,Z0,W0)=>{M((P0)=>({...P0||{},[s]:{...(P0||{})[s]||{},[Z0]:W0}}))},[]),$0=R(async(s,Z0,W0)=>{try{let h0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,master_password:Z0||void 0,totp_code:W0||void 0})})).json();if(h0?.ok)f({name:s,phase:"revealed",secret:h0.secret,username:h0.username,masterPassword:Z0});else if(h0?.needs_master_password)f((g0)=>({name:s,phase:"password",masterPassword:"",error:g0?.name===s&&g0?.masterPassword?h0.error:null})),requestAnimationFrame(()=>c.current?.focus());else if(h0?.needs_totp)f((g0)=>({name:s,phase:"totp",masterPassword:Z0,totpCode:"",error:g0?.name===s&&g0?.phase==="totp"&&g0?.totpCode?h0.error:null})),requestAnimationFrame(()=>p.current?.focus());else f({name:s,phase:"error",error:h0?.error||"Failed to reveal."})}catch{f({name:s,phase:"error",error:"Failed to reveal."})}},[]),X0=R((s)=>{if(C?.name===s&&C?.phase==="revealed"){f(null);return}$0(s,null,null)},[C,$0]),U0=R((s)=>{let Z0=C?.masterPassword||"";if(!Z0)return;$0(s,Z0,null)},[C,$0]),t=R((s)=>{let Z0=C?.totpCode||"";if(Z0.length<6)return;$0(s,C?.masterPassword,Z0)},[C,$0]),V0=R(async(s)=>{try{await navigator.clipboard.writeText(s)}catch{let Z0=document.createElement("textarea");Z0.value=s,Z0.style.position="fixed",Z0.style.opacity="0",document.body.appendChild(Z0),Z0.select(),document.execCommand("copy"),document.body.removeChild(Z0)}},[]);u(()=>{if(q)requestAnimationFrame(()=>b.current?.focus())},[q]);let Q0=_.toLowerCase(),z0=Y0(()=>{if(!Q0)return $;return $.filter((s)=>s.name.toLowerCase().includes(Q0)||(s.type||"").toLowerCase().includes(Q0)||(s.envVar||"").toLowerCase().includes(Q0)||(s.userNote||"").toLowerCase().includes(Q0)||(s.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${z0.length} entr${z0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>V(!q)}>
                    ${q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${q&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${b} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${Q} onInput=${(s)=>K(s.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(s)=>O(s.target.value)}
                            class="settings-keychain-select">
                            ${xW.map((s)=>F`<option value=${s}>${s}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${L} onInput=${(s)=>N(s.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(s)=>U(s.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${m}
                            disabled=${I||!Q.trim()||!L}>
                            ${I?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(s)=>H(s.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${D} onInput=${(s)=>k(s.target.value)}
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
                        ${z0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${z0.map((s)=>{let Z0=C?.name===s.name?C:null,W0=Z0?.phase==="revealed",P0=Z0?.phase==="password",h0=Z0?.phase==="totp",g0=Z0?.phase==="error",G_=A[s.name]||{},c0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:s.userNote||"",s0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:s.agentNote||"",f0=c0!==(s.userNote||"")||s0!==(s.agentNote||""),i0=W===s.name;return F`
                            <tr class="settings-keychain-row" key=${s.name}>
                                <td class="settings-keychain-name">${s.name}</td>
                                <td><span class="settings-keychain-type-badge">${s.type}</span></td>
                                <td class="settings-keychain-env">${s.envVar?F`<code>$${s.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${wW(s.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${W0?" active":""}`}
                                        onClick=${()=>X0(s.name)}
                                        title=${W0?"Hide secret":"Reveal secret"}>
                                        ${W0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${w===s.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>_0(s.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>J(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>J(s.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${s.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${c0}
                                                onInput=${(b0)=>G0(s.name,"userNote",b0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${s0}
                                                onInput=${(b0)=>G0(s.name,"agentNote",b0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!f0||i0} onClick=${()=>E0(s)}>
                                            ${i0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${c} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${Z0?.masterPassword||""}
                                                onInput=${(b0)=>f((t0)=>({...t0,masterPassword:b0.target.value}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")U0(s.name);if(b0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>U0(s.name)}
                                                disabled=${!Z0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${Z0?.error&&F`<span class="settings-keychain-prompt-error">${Z0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${h0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${p} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${Z0?.totpCode||""}
                                                onInput=${(b0)=>f((t0)=>({...t0,totpCode:b0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(b0)=>{if(b0.key==="Enter")t(s.name);if(b0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>t(s.name)}
                                                disabled=${(Z0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${Z0?.error&&F`<span class="settings-keychain-prompt-error">${Z0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${W0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${Z0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${Z0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>V0(Z0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${Z0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>V0(Z0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${g0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${Z0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var xW;var aY=O_(()=>{k0();xW=["secret","token","password","basic"]});var tY={};j1(tY,{ToolsSection:()=>SW});function SW({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=P(()=>{let N={};for(let B of Z)N[B.name]=!0;return N}),q=R((N)=>{Y((B)=>({...B,[N]:!B[N]}))},[]),V=j?.searchMatchMode||"or",Q=R(async()=>{let N=V==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:N})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[V,G]),K=$.toLowerCase(),L=Y0(()=>{if(!K)return Z;return Z.map((N)=>{let B=N.tools.filter((U)=>U.name.toLowerCase().includes(K)||N.name.toLowerCase().includes(K)||(U.summary||"").toLowerCase().includes(K));return B.length>0?{...N,tools:B}:null}).filter(Boolean)},[Z,K]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${V==="and"} onChange=${Q} />
                        <span class="settings-hint" style="margin:0">
                            ${V==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${L.map((N)=>{let B=X[N.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>q(N.name)} />
                            <span class="settings-toolset-icon">${CW[N.name]||RW}</span>
                            <strong>${N.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${N.description}</span>
                    </div>
                    ${B&&F`<div class="settings-tool-list">${N.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${fW[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${PW[U.name]||N.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${L.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var CW,PW,fW,RW;var eY=O_(()=>{k0();CW={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},PW={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},fW={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},RW=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var _q={};j1(_q,{AddonsSection:()=>uW});function uW({setStatus:_,filter:$=""}){let[j,G]=P(null),[Z,X]=P(!0),[Y,q]=P(null),[V,Q]=P(!1),[K,L]=P({runtime:"",windowsNative:!1}),[N,B]=P([]),[U,E]=P([]);function H(){let W=new URLSearchParams;try{let w=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),J=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),C=localStorage.getItem("piclaw_addons_repo_url");if(w)W.append("catalog_url",w);for(let f of J)W.append("catalog_url",f);if(C)W.set("repo_url",C)}catch(w){}let y=W.toString();return y?`?${y}`:""}let D=R(async()=>{try{let[W,y]=await Promise.all([fetch(`/agent/addons${H()}`),fetch("/agent/settings-data")]),w=await W.json();if(w.error)throw Error(w.error);G(w.addons||[]),B(w.sources||[]),E(w.failed_sources||[]);let J=await y.json().catch(()=>({})),C=typeof J?.runtimePlatform==="string"?J.runtimePlatform:"";L({runtime:C,windowsNative:C==="win32"})}catch(W){G(null),_?.(String(W.message||W),"error")}finally{X(!1)}},[_]);u(()=>{D()},[]);let k=R(async(W)=>{if(Y)return;q({slug:W,action:"install"}),_?.(`Installing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/install${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}Q(!0);let J=[w.message,w.warning].filter(Boolean).join(" ");_?.(J||"Add-on installed.","success"),await D()}catch(y){_?.(String(y.message||y),"error")}finally{q(null)}},[Y,D,_]),z=R(async(W)=>{if(Y)return;q({slug:W,action:"remove"}),_?.(`Removing ${W}…`,"info");try{let w=await(await fetch(`/agent/addons/uninstall${H()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:W})})).json();if(w.error){_?.(w.error,"error");return}Q(!0);let J=[w.message,w.warning].filter(Boolean).join(" ");_?.(J||"Add-on removed.","success"),await D()}catch(y){_?.(String(y.message||y),"error")}finally{q(null)}},[Y,D,_]),O=R(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let y=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(y.error){_?.(y.error,"error"),q(null);return}_?.(y.message||"Restarting piclaw…","success"),Q(!1),(async(J=30,C=2000)=>{for(let f=0;f<J;f++){await new Promise((b)=>setTimeout(b,C));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await D(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(W){_?.(String(W.message||W),"error"),q(null)}},[Y,_,D]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let I=$.toLowerCase(),x=I?j.filter((W)=>W.slug.toLowerCase().includes(I)||(W.description||"").toLowerCase().includes(I)||(W.tags||[]).some((y)=>y.toLowerCase().includes(I))):j,A=Y?.slug||null,M=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${N.length<=1?F`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:F`${N.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&F`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((W)=>F` <code style="font-size:0.82em;word-break:break-all">${W}</code>`)}
                        </div>
                    `}
                    ${N.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${N.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${N.map((W)=>F`<li style="word-break:break-all"><code>${W}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${K.windowsNative&&F`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&F`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${M}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${M}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${x.map((W)=>{let y=(W.skills||[]).length>0,w=W.type==="extension",J=y&&w?"extension + skill":y?"skill":"extension",C=y&&!w?"settings-tag-skill":"",f=typeof W.homepage==="string"&&W.homepage.trim()?W.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${W.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?F`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${W.slug}</a>`:F`<strong>${W.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${C}`}>${J}</span>
                            <span class="settings-addon-version">${W.installed?W.installedVersion||"?":W.version||""}</span>
                            ${W.installKind&&F`<span class="settings-tag">${W.installKind}</span>`}
                            ${W.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${W.version}</span>`}
                            <div class="settings-addon-actions">
                                ${W.installed?F`
                                    ${W.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(W.slug)}>${A===W.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(W.slug)}>${A===W.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(W.slug)}>${A===W.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${W.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(W.tags||[]).map((b)=>F`<span class="settings-tag">${b}</span>`)}${(W.skills||[]).map((b)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${V&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${O}>Restart Now</button>
                </div>
            `}
        </div>
    `}var $q=O_(()=>{k0()});var lW={};function N9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function n2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function gW(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function bW(_,$){try{localStorage.setItem(_,$)}catch(j){}}function vW(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function mW(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function cW(){let[_,$]=P(()=>N9("piclaw_vim_mode",!1)),[j,G]=P(()=>N9("piclaw_show_whitespace",!0)),[Z,X]=P(()=>N9("piclaw_md_live_preview",!0)),[Y,q]=P(()=>vW("piclaw_editor_font_size",13,10,24)),[V,Q]=P(()=>gW("piclaw_editor_font_family","")),K=R((L,N,B)=>{let U=!N;B(U),n2(L,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let L=!_;$(L),n2("piclaw_vim_mode",L)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let L=!j;G(L),n2("piclaw_show_whitespace",L)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let L=!Z;X(L),n2("piclaw_md_live_preview",L)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${v_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(L)=>{q(L),mW("piclaw_editor_font_size",L)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${V}
                    onInput=${(L)=>{let N=L.target.value;Q(N),bW("piclaw_editor_font_family",N)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var hW;var jq=O_(()=>{k0();z5();P4();hW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;i$({id:"editor",label:"Editor",icon:hW,component:cW,order:150})});var iW={};function Gq(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function Zq(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function pW(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function rW(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function nW(){let[_,$]=P(()=>Gq("piclaw_mindmap_auto_expand",!0)),[j,G]=P(()=>pW("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=P(()=>Gq("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),Zq("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${v_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),rW("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),Zq("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var dW;var Xq=O_(()=>{k0();z5();P4();dW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;i$({id:"mindmap",label:"Mind Map",icon:dW,component:nW,order:170})});var aW={};function F9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function U9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function D9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function H9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function oW(){let[_,$]=P(()=>F9("piclaw_dev_mode",!1)),[j,G]=P(()=>D9("piclaw_addons_catalog_url","")),[Z,X]=P(()=>D9("piclaw_addons_catalog_urls","")),[Y,q]=P(()=>D9("piclaw_addons_repo_url","")),[V,Q]=P(()=>F9("piclaw_debug_sse",!1)),[K,L]=P(()=>F9("piclaw_debug_tool_calls",!1)),N=R(()=>{let B=!_;$(B),U9("piclaw_dev_mode",B)},[_]);return F`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${N} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&F`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),H9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),H9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;q(U),H9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${V}
                        onChange=${()=>{let B=!V;Q(B),U9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let B=!K;L(B),U9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var sW;var Yq=O_(()=>{k0();z5();sW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;i$({id:"developer",label:"Developer",icon:sW,component:oW,order:900})});var Kq={};j1(Kq,{openSettingsDialog:()=>HO,SettingsDialogContent:()=>Lq,SettingsDialog:()=>DO});function A6(_){J6.push({ts:performance.now(),label:_})}function tW(){if(!J6.length)return;let _=J6[0].ts,$=J6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}J6.length=0}function $O(_){let $=o2.get(_);if($)return Promise.resolve($);let j=d2.get(_);if(j)return j;let G=eW[_]().then((Z)=>{return o2.set(_,Z),d2.delete(_),Z}).catch((Z)=>{throw d2.delete(_),Z});return d2.set(_,G),G}function i2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function Lq({onClose:_}){A6("SettingsDialogContent-render-start");let[$,j]=P(()=>i7()||"general"),[G,Z]=P(qq),[X,Y]=P(null),[q,V]=P(""),[,Q]=P(0),[K,L]=P(()=>Object.fromEntries(o2.entries())),[N,B]=P(null),[U,E]=P({compact:!1,narrow:!1}),H=g(null),D=g(null);u(()=>{A6("SettingsDialogContent-mounted"),tW()},[]),u(()=>{let J=(C)=>{if(C.key==="Escape")_()};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[_]),u(()=>{let J=(C)=>{let f=typeof C?.detail?.section==="string"?C.detail.section.trim():"";if(f)j(f),V("")};return window.addEventListener("piclaw:open-settings",J),()=>window.removeEventListener("piclaw:open-settings",J)},[]),u(()=>{let J=()=>Q((C)=>C+1);return window.addEventListener("piclaw:settings-panes-changed",J),()=>window.removeEventListener("piclaw:settings-panes-changed",J)},[]),u(()=>{fetch("/agent/settings-data").then((J)=>J.json()).then((J)=>{qq=J,Z(J)}).catch(()=>Z({}))},[]),u(()=>{let J=D.current;if(!J)return;let C=()=>{let f=J.clientWidth||0;E((b)=>{let c={compact:f>0&&f<=860,narrow:f>0&&f<=720};return b.compact===c.compact&&b.narrow===c.narrow?b:c})};if(C(),typeof ResizeObserver==="function"){let f=new ResizeObserver(()=>C());return f.observe(J),()=>f.disconnect()}return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);let k=[...Qq].sort((J,C)=>(J.order??500)-(C.order??500)),O=$Y().map((J)=>({id:J.id,label:J.label,icon:J.icon,searchable:J.searchable||!1,placeholder:J.searchPlaceholder,order:J.order??500,isExtension:!0,component:J.component})).sort(o7),I=[...k,...O],x=I.find((J)=>J.id===$)||Qq.find((J)=>J.id===$);u(()=>{if(x?.searchable)requestAnimationFrame(()=>H.current?.focus())},[$]),u(()=>{if(x?.isExtension){B(null);return}let J=!1;if(K[$]){B(null);return}return B($),$O($).then((C)=>{if(J)return;L((f)=>f?.[$]?f:{...f||{},[$]:C})}).catch((C)=>{if(J)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,C)}).finally(()=>{if(!J)B((C)=>C===$?null:C)}),()=>{J=!0}},[$,x?.isExtension,K]);let A=R((J,C="info")=>{Y(J?{text:J,type:C}:null)},[]),M=R((J)=>{j(J),V("");let C=_O[J];if(C&&!Vq.has(J))Vq.add(J),C().then(()=>Q((f)=>f+1)).catch((f)=>{})},[]),W=R((J)=>{Z((C)=>({...C||{},...J||{}}))},[]),y=()=>{if(x?.isExtension){if(!x.component)return i2("Loading pane…");let C=x.component;return F`<${C} filter=${q} />`}let J=K[$];if(!J||N===$)return i2(`Loading ${x?.label||"settings"}…`);switch($){case"general":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"sessions":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"compaction":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"keyboard":return F`<${J} filter=${q} setStatus=${A} />`;case"workspace":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"environment":return F`<${J} settingsData=${G} filter=${q} setStatus=${A} mergeSettingsData=${W} />`;case"providers":return F`<${J} providers=${G?.providers} setStatus=${A} />`;case"models":return F`<${J} filter=${q} />`;case"theme":return F`<${J} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${A} mergeSettingsData=${W} />`;case"scheduled-tasks":return F`<${J} filter=${q} setStatus=${A} />`;case"quick-actions":return F`<${J} filter=${q} setStatus=${A} mergeSettingsData=${W} />`;case"keychain":return F`<${J} filter=${q} />`;case"tools":return F`<${J} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${W} />`;case"addons":return F`<${J} setStatus=${A} filter=${q} />`;default:return i2("Loading settings…")}},w=!x;return A6("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(J)=>{if(J.target===J.currentTarget)_()}}>
            <div ref=${D} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${x?.searchable&&F`
                        <input ref=${H} type="text" class="settings-header-filter"
                            placeholder=${x.placeholder||"Filter…"}
                            value=${q} onInput=${(J)=>V(J.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${I.map((J,C)=>{let f=C>0&&!I[C-1].isExtension,b=J.isExtension&&f;return F`
                                ${b&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${J.id===$?"active":""}`} onClick=${()=>M(J.id)}>
                                    <span class="settings-nav-icon">${J.icon}</span>
                                    <span class="settings-nav-label">${J.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${w?i2("Loading settings…"):y()}
                    </main>
                </div>
                ${X&&F`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&F`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&F`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function DO(){let[_,$]=P(!1);if(u(()=>{let j=(Z)=>{let X=O5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=u2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${d$} className="settings-portal"><${Lq} onClose=${()=>$(!1)} /><//>`}function HO(_={}){o1(_)}var J6,qq=null,o2,d2,eW,_O,Vq,jO,GO,ZO,XO,YO,qO,VO,QO,LO,KO,BO,NO,FO,UO,Qq;var Bq=O_(()=>{k0();g2();z5();KY();J6=[];A6("module-eval-start");A6("imports-done");o2=new Map,d2=new Map;o2.set("general",e7);eW={general:()=>Promise.resolve(e7),sessions:()=>Promise.resolve().then(() => (FY(),NY)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (DY(),UY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (AY(),JY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (xY(),wY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (CY(),IY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (fY(),PY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (SY(),RY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (bY(),gY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (cY(),mY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (oY(),iY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (aY(),sY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (eY(),tY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => ($q(),_q)).then((_)=>_.AddonsSection)},_O={"editor-settings":()=>Promise.resolve().then(() => (jq(),lW)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (Xq(),iW)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Yq(),aW)).then(()=>{})},Vq=new Set;jO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,GO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,ZO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,XO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,YO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,qO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,VO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,QO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,LO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,KO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,BO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,NO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,FO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,UO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,Qq=[{id:"general",label:"General",icon:jO,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:GO,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:ZO,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:qO,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:XO,searchable:!1,order:15},{id:"environment",label:"Environment",icon:YO,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:VO,searchable:!1,order:20},{id:"models",label:"Models",icon:QO,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:LO,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:KO,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:NO,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:FO,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:BO,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:UO,searchable:!0,placeholder:"Filter add-ons…",order:90}]});k0();class kG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new kG;var Z2=null,H3=null;function iF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function MG(){if(H3)return Promise.resolve(H3);if(!Z2)Z2=import(iF()).then((_)=>{return H3=_,_}).catch((_)=>{throw Z2=null,_});return Z2}class yG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await MG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var E3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new yG(_,$)}};function W3(){MG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function TG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function X2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var wG="piclaw:editor-popout:",oF=300000;function xG(_){try{return _?.localStorage??null}catch{return null}}function sF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function IG(_){return typeof _==="string"?_.trim():""}function CG(_){return(typeof _==="string"?_.trim():"")||null}function PG(_){return typeof _==="string"?_:void 0}function fG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function RG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function Z5(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function aF(_,$=globalThis,j=Date.now()){let G=xG($),Z=IG(_?.path);if(!G||!Z)return null;let X={path:Z,content:PG(_?.content),mtime:fG(_?.mtime),paneOverrideId:CG(_?.paneOverrideId),viewState:RG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=sF(j);try{return G.setItem(`${wG}${q}`,JSON.stringify(X)),q}catch{return null}}function O3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=xG($);if(!G||!Z)return null;let X=`${wG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;X2(Z,X);try{let q=JSON.parse(Y),V=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(V+oF<j)return null;let Q=IG(q?.path);if(!Q)return null;return{path:Q,content:PG(q?.content),mtime:fG(q?.mtime),paneOverrideId:CG(q?.paneOverrideId),viewState:RG(q?.viewState),capturedAt:V}}catch{return null}}function Y2(_,$=globalThis,j=Date.now()){let G=aF(_,$,j);return G?{editor_popout:G}:null}function T1(_){try{return _(),!0}catch($){return!1}}function SG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:V}=_;T1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),T1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),T1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),T1(()=>{q?.disconnect?.()}),T1(()=>{V?.disconnect?.()})}function uG(_){_.syncHostLayout(),T1(()=>{_.terminal?.renderer?.remeasureFont?.()}),T1(()=>{_.fitAddon?.fit?.()}),T1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function gG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)T1(()=>{j($)});return T1(()=>{G?.close?.()}),T1(()=>{Z?.dispose?.()}),T1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function l1(_){try{return _(),!0}catch($){return!1}}function bG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(l1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let V=j?.querySelector?.(".terminal-live-host");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=Z.background,V.style.color=Z.foreground;let Q=j?.querySelector?.("canvas");if(Q&&typeof Q==="object"&&"style"in Q)Q.style.backgroundColor=Z.background,Q.style.color=Z.foreground}),l1(()=>{if(G?.options)G.options.theme=Z}),X)l1(()=>{G?.reset?.()});l1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),l1(()=>{G?.loadFonts?.()}),l1(()=>{G?.renderer?.remeasureFont?.()}),l1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),l1(()=>{q?.()}),l1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),l1(()=>{G?.refresh?.()})}var tF="/static/js/vendor/ghostty-web.js",eF="/static/js/vendor/ghostty-vt.wasm",Y5="piclaw://terminal",_U='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',$U='400 13px "FiraCode Nerd Font Mono"',jU='700 13px "FiraCode Nerd Font Mono"',pG="x-piclaw-terminal-client",vG="piclaw_terminal_client",GU={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},ZU={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},q2=null,z3=null;function XU(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function YU(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(eF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!XU(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function qU(){let $=await import(new URL(tF,window.location.origin).href);if(!q2)q2=YU(()=>Promise.resolve($.init?.())).catch((j)=>{throw q2=null,j});return await q2,$}async function VU(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!z3)z3=Promise.allSettled([document.fonts.load($U),document.fonts.load(jU),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await z3}function mG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function A3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(vG)||"").trim():"";if(j)return j;let G=mG(_);return $?.setItem?.(vG,G),G}catch($){return mG(_)}}async function QU(_=A3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[pG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function LU(_=A3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[pG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function KU(_,$=null,j=A3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function BU(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function X5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function cG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function d5(_,$){let j=cG(_),G=cG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function rG(_){let $=X5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return d5($,j)>=d5($,G)?"#ffffff":"#000000"}function V2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function hG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=X5(_),Z=X5($);if(!G||!Z)return $;if(d5(G,Z)>=j)return V2(Z);let X=X5(rG(_));if(!X)return V2(Z);let Y=X,q=1,V=0,Q=1;for(let N=0;N<14;N+=1){let B=(V+Q)/2,U=hG(Z,X,B);if(d5(G,U)>=j)Y=U,q=B,Q=B;else V=B}let K=V2(Y),L=X5(K);while(L&&d5(G,L)<j&&q<1)q=Math.min(1,q+0.01),K=V2(hG(Z,X,q)),L=X5(K);return K}function NU(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function lG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=BU(_,$),G=j?ZU:GU,Z=U4("--bg-primary",j?"#000000":"#ffffff",$),X=U4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||rG(Z),7),q=U4("--accent-color","#1d9bf0",$),V=U4("--danger-color",j?"#ff7b72":"#cf222e",$),Q=U4("--success-color",j?"#7ee787":"#1a7f37",$),K=U4("--bg-hover",j?"#1d1f23":"#e8ebed",$),L=U4("--accent-soft-strong",NU(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,q,3),cursorAccent:Z,selectionBackground:L,selectionForeground:Y,black:G1(Z,K,3),red:G1(Z,V,4.5),green:G1(Z,Q,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,q,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function nG(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function J3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function FU(_){if(nG(_.ownerDocument),J3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();J3(_.terminal,_.terminalHost||null)}class k3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=Z5("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await qU();if(await VU(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:_U,fontSize:13,theme:lG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);nG(this.ownerDocument),await j.open($),$.__terminal=j,J3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=lG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;bG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=LU().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await QU();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(KU($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){SG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");FU({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){uG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=gG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var M3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k3(_,$)}},y3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===Y5?1e4:!1},mount(_,$){return new k3(_,$)}};function R1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function Q2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function dG(_,$={}){if(R1($))return null;if(Q2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:UU(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function T3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function w3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function x3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function I3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function w1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function C3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function iG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let V=String(Y||"").trim();if(!V)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(V);else G.searchParams.set(V,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function UU(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function DU(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function oG(_,$={}){if(R1($))return null;if(Q2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:DU(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function HU(_){try{return JSON.parse(_)}catch{return null}}function EU(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function WU(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function sG(_){try{return _?.close?.(),!0}catch($){return!1}}class P3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;sG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=WU($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||HU;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,sG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=EU($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var i5=()=>{throw Error("Operation requires compiling with --exportRuntime")},OU=typeof BigUint64Array<"u",o5=Symbol();var zU=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function aG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return zU.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function tG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return aG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,V){let Q=$.memory||G.memory;throw Error(`abort: ${j(Q,X)} at ${j(Q,Y)}:${q}:${V}`)},G.trace=G.trace||function(X,Y,...q){let V=$.memory||G.memory;console.log(`trace: ${j(V,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function eG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||i5,Y=j.__pin||i5,q=j.__unpin||i5,V=j.__collect||i5,Q=j.__rtti_base,K=Q?(y)=>y[Q>>>2]:i5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=V;function L(y){let w=new Uint32Array(G.buffer);if((y>>>=0)>=K(w))throw Error(`invalid id: ${y}`);return w[(Q+4>>>2)+y]}function N(y){let w=L(y);if(!(w&7))throw Error(`not an array: ${y}, flags=${w}`);return w}function B(y){return 31-Math.clz32(y>>>6&31)}function U(y){if(y==null)return 0;let w=y.length,J=X(w<<1,2),C=new Uint16Array(G.buffer);for(let f=0,b=J>>>1;f<w;++f)C[b+f]=y.charCodeAt(f);return J}_.__newString=U;function E(y){if(y==null)return 0;let w=new Uint8Array(y),J=X(w.length,1);return new Uint8Array(G.buffer).set(w,J),J}_.__newArrayBuffer=E;function H(y){if(!y)return null;let w=G.buffer;if(new Uint32Array(w)[y+-8>>>2]!==2)throw Error(`not a string: ${y}`);return aG(w,y)}_.__getString=H;function D(y,w,J){let C=G.buffer;if(J)switch(y){case 2:return new Float32Array(C);case 3:return new Float64Array(C)}else switch(y){case 0:return new(w?Int8Array:Uint8Array)(C);case 1:return new(w?Int16Array:Uint16Array)(C);case 2:return new(w?Int32Array:Uint32Array)(C);case 3:return new(w?BigInt64Array:BigUint64Array)(C)}throw Error(`unsupported align: ${y}`)}function k(y,w=0){let J=w,C=N(y),f=B(C),b=typeof J!=="number",c=b?J.length:J,p=X(c<<f,C&4?y:1),e;if(C&4)e=p;else{Y(p);let m=X(C&2?16:12,y);q(p);let _0=new Uint32Array(G.buffer);if(_0[m+0>>>2]=p,_0[m+4>>>2]=p,_0[m+8>>>2]=c<<f,C&2)_0[m+12>>>2]=c;e=m}if(b){let m=D(f,C&2048,C&4096),_0=p>>>f;if(C&16384)for(let E0=0;E0<c;++E0)m[_0+E0]=J[E0];else m.set(J,_0)}return e}_.__newArray=k;function z(y){let w=new Uint32Array(G.buffer),J=w[y+-8>>>2],C=N(J),f=B(C),b=C&4?y:w[y+4>>>2],c=C&2?w[y+12>>>2]:w[b+-4>>>2]>>>f;return D(f,C&2048,C&4096).subarray(b>>>=f,b+c)}_.__getArrayView=z;function O(y){let w=z(y),J=w.length,C=Array(J);for(let f=0;f<J;f++)C[f]=w[f];return C}_.__getArray=O;function I(y){let w=G.buffer,J=new Uint32Array(w)[y+-4>>>2];return w.slice(y,y+J)}_.__getArrayBuffer=I;function x(y){if(!Z)throw Error("Operation requires compiling with --exportTable");let w=new Uint32Array(G.buffer)[y>>>2];return Z.get(w)}_.__getFunction=x;function A(y,w,J){return new y(M(y,w,J))}function M(y,w,J){let C=G.buffer,f=new Uint32Array(C);return new y(C,f[J+4>>>2],f[J+8>>>2]>>>w)}function W(y,w,J){_[`__get${w}`]=A.bind(null,y,J),_[`__get${w}View`]=M.bind(null,y,J)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((y)=>{W(y,y.name,31-Math.clz32(y.BYTES_PER_ELEMENT))}),OU)[BigUint64Array,BigInt64Array].forEach((y)=>{W(y,y.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,AU(j,_)}function _Z(_){return typeof Response<"u"&&_ instanceof Response}function JU(_){return _ instanceof WebAssembly.Module}async function f3(_,$={}){if(_Z(_=await _))return L2(_,$);let j=JU(_)?_:await WebAssembly.compile(_),G=tG($),Z=await WebAssembly.instantiate(j,$),X=eG(G,Z);return{module:j,instance:Z,exports:X}}async function L2(_,$={}){if(!WebAssembly.instantiateStreaming)return f3(_Z(_=await _)?_.arrayBuffer():_,$);let j=tG($),G=await WebAssembly.instantiateStreaming(_,$),Z=eG(j,G.instance);return{...G,exports:Z}}function AU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let Q=X.shift();if(!Object.hasOwn(Y,Q))Y[Q]={};Y=Y[Q]}let q=X[0],V=q.indexOf("#");if(V>=0){let Q=q.substring(0,V),K=Y[Q];if(typeof K>"u"||!K.prototype){let L=function(...N){return L.wrap(L.prototype.constructor(0,...N))};if(L.prototype={valueOf(){return this[o5]}},L.wrap=function(N){return Object.create(L.prototype,{[o5]:{value:N,writable:!1}})},K)Object.getOwnPropertyNames(K).forEach((N)=>Object.defineProperty(L,N,Object.getOwnPropertyDescriptor(K,N)));Y[Q]=L}if(q=q.substring(V+1),Y=Y[Q].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let L=_[G.replace("set:","get:")],N=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return L(this[o5])},set(B){N(this[o5],B)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...L){return j(L.length),Z(...L)}).original=Z;else(Y[q]=function(...L){return j(L.length),Z(this[o5],...L)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...Q)=>{return j(Q.length),Z(...Q)}).original=Z;else Y[q]=Z}return $}function R3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var MU="/static/js/vendor/remote-display-decoder.wasm",K2=null;function $Z(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function jZ(){if(K2)return K2;return K2=(async()=>{try{let G=function(Z,X,Y,q,V,Q,K){let L=$Z(X),N=j.__pin(j.__newArrayBuffer(L));try{return j[Z](N,Y,q,V,Q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift)}finally{j.__unpin(N),R3(j)}},_=await fetch(MU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof L2==="function"?await L2(_,{}):await f3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,V,Q){return G("processRawRect",Z,X,Y,q,V,Q)},processCopyRect(Z,X,Y,q,V,Q){return j.processCopyRect(Z,X,Y,q,V,Q)},processRreRect(Z,X,Y,q,V,Q){return G("processRreRect",Z,X,Y,q,V,Q)},processHextileRect(Z,X,Y,q,V,Q){return G("processHextileRect",Z,X,Y,q,V,Q)},processZrleTileData(Z,X,Y,q,V,Q){return G("processZrleTileData",Z,X,Y,q,V,Q)},decodeRawRectToRgba(Z,X,Y,q){let V=$Z(Z),Q=j.__pin(j.__newArrayBuffer(V));try{let K=j.__pin(j.decodeRawRectToRgba(Q,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(K))}finally{j.__unpin(K)}}finally{j.__unpin(Q),R3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),K2}function q5(_,$,j){return Math.max($,Math.min(j,_))}function B2(_,$,j){let G=new Uint8Array(6),Z=q5(Math.floor(Number($||0)),0,65535),X=q5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=q5(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function c$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function u3(_){let $=c$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return c$(0);let G=Number(_?.buttons||0);if(G&1)return c$(0);if(G&4)return c$(1);if(G&2)return c$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function GZ(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function yU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function g3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return yU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function ZZ(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!g3(_)}function XZ(_){return String(_||"").toLowerCase()!=="mouse"}function b3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),Q=(Number(_||0)-Number(j?.left||0))/q,K=(Number($||0)-Number(j?.top||0))/V;return{x:q5(Math.floor(Q*X),0,Math.max(0,X-1)),y:q5(Math.floor(K*Y),0,Math.max(0,Y-1))}}function YZ(_,$,j,G=0){let Z=Number(_)<0?8:16,X=q5(Number(G||0)|Z,0,255);return[B2(X,$,j),B2(Number(G||0),$,j)]}function qZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function VZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function E4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function QZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),V=Math.min(Z/Y,X/q);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var S3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)S3[`F${_}`]=65470+(_-1);function v3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(S3,X))return S3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var i_=Uint8Array,W1=Uint16Array,i3=Int32Array,N2=new i_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),F2=new i_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),p3=new i_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),NZ=function(_,$){var j=new W1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new i3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},FZ=NZ(N2,2),UZ=FZ.b,r3=FZ.r;UZ[28]=258,r3[258]=28;var DZ=NZ(F2,0),TU=DZ.b,LZ=DZ.r,n3=new W1(32768);for(L_=0;L_<32768;++L_)r1=(L_&43690)>>1|(L_&21845)<<1,r1=(r1&52428)>>2|(r1&13107)<<2,r1=(r1&61680)>>4|(r1&3855)<<4,n3[L_]=((r1&65280)>>8|(r1&255)<<8)>>1;var r1,L_,n1=function(_,$,j){var G=_.length,Z=0,X=new W1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new W1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new W1(1<<$);var V=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var Q=Z<<4|_[Z],K=$-_[Z],L=Y[_[Z]-1]++<<K;for(var N=L|(1<<K)-1;L<=N;++L)q[n3[L]>>V]=Q}}else{q=new W1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=n3[Y[_[Z]-1]++]>>15-_[Z]}return q},h$=new i_(288);for(L_=0;L_<144;++L_)h$[L_]=8;var L_;for(L_=144;L_<256;++L_)h$[L_]=9;var L_;for(L_=256;L_<280;++L_)h$[L_]=7;var L_;for(L_=280;L_<288;++L_)h$[L_]=8;var L_,e5=new i_(32);for(L_=0;L_<32;++L_)e5[L_]=5;var L_,wU=n1(h$,9,0),xU=n1(h$,9,1),IU=n1(e5,5,0),CU=n1(e5,5,1),m3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},S1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},c3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},o3=function(_){return(_+7)/8|0},t5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new i_(_.subarray($,j))};var PU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B1=function(_,$,j){var G=Error($||PU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,B1);if(!j)throw G;return G},fU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new i_(0);var Y=!j,q=Y||$.i!=2,V=$.i;if(Y)j=new i_(Z*3);var Q=function(Z0){var W0=j.length;if(Z0>W0){var P0=new i_(Math.max(W0*2,Z0));P0.set(j),j=P0}},K=$.f||0,L=$.p||0,N=$.b||0,B=$.l,U=$.d,E=$.m,H=$.n,D=Z*8;do{if(!B){K=S1(_,L,1);var k=S1(_,L+1,3);if(L+=3,!k){var z=o3(L)+4,O=_[z-4]|_[z-3]<<8,I=z+O;if(I>Z){if(V)B1(0);break}if(q)Q(N+O);j.set(_.subarray(z,I),N),$.b=N+=O,$.p=L=I*8,$.f=K;continue}else if(k==1)B=xU,U=CU,E=9,H=5;else if(k==2){var x=S1(_,L,31)+257,A=S1(_,L+10,15)+4,M=x+S1(_,L+5,31)+1;L+=14;var W=new i_(M),y=new i_(19);for(var w=0;w<A;++w)y[p3[w]]=S1(_,L+w*3,7);L+=A*3;var J=m3(y),C=(1<<J)-1,f=n1(y,J,1);for(var w=0;w<M;){var b=f[S1(_,L,C)];L+=b&15;var z=b>>4;if(z<16)W[w++]=z;else{var c=0,p=0;if(z==16)p=3+S1(_,L,3),L+=2,c=W[w-1];else if(z==17)p=3+S1(_,L,7),L+=3;else if(z==18)p=11+S1(_,L,127),L+=7;while(p--)W[w++]=c}}var e=W.subarray(0,x),m=W.subarray(x);E=m3(e),H=m3(m),B=n1(e,E,1),U=n1(m,H,1)}else B1(1);if(L>D){if(V)B1(0);break}}if(q)Q(N+131072);var _0=(1<<E)-1,E0=(1<<H)-1,G0=L;for(;;G0=L){var c=B[c3(_,L)&_0],$0=c>>4;if(L+=c&15,L>D){if(V)B1(0);break}if(!c)B1(2);if($0<256)j[N++]=$0;else if($0==256){G0=L,B=null;break}else{var X0=$0-254;if($0>264){var w=$0-257,U0=N2[w];X0=S1(_,L,(1<<U0)-1)+UZ[w],L+=U0}var t=U[c3(_,L)&E0],V0=t>>4;if(!t)B1(3);L+=t&15;var m=TU[V0];if(V0>3){var U0=F2[V0];m+=c3(_,L)&(1<<U0)-1,L+=U0}if(L>D){if(V)B1(0);break}if(q)Q(N+131072);var Q0=N+X0;if(N<m){var z0=X-m,s=Math.min(m,Q0);if(z0+N<0)B1(3);for(;N<s;++N)j[N]=G[z0+N]}for(;N<Q0;++N)j[N]=j[N-m]}}if($.l=B,$.p=G0,$.b=N,$.f=K,B)K=1,$.m=E,$.d=U,$.n=H}while(!K);return N!=j.length&&Y?t5(j,0,N):j.subarray(0,N)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},s5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},h3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:EZ,l:0};if(Z==1){var Y=new i_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(I,x){return I.f-x.f}),j.push({s:-1,f:25001});var q=j[0],V=j[1],Q=0,K=1,L=2;j[0]={s:-1,f:q.f+V.f,l:q,r:V};while(K!=Z-1)q=j[j[Q].f<j[L].f?Q++:L++],V=j[Q!=K&&j[Q].f<j[L].f?Q++:L++],j[K++]={s:-1,f:q.f+V.f,l:q,r:V};var N=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>N)N=X[G].s;var B=new W1(N+1),U=d3(j[K-1],B,0);if(U>$){var G=0,E=0,H=U-$,D=1<<H;X.sort(function(x,A){return B[A.s]-B[x.s]||x.f-A.f});for(;G<Z;++G){var k=X[G].s;if(B[k]>$)E+=D-(1<<U-B[k]),B[k]=$;else break}E>>=H;while(E>0){var z=X[G].s;if(B[z]<$)E-=1<<$-B[z]++-1;else++G}for(;G>=0&&E;--G){var O=X[G].s;if(B[O]==$)--B[O],++E}U=$}return{t:new i_(B),l:U}},d3=function(_,$,j){return _.s==-1?Math.max(d3(_.l,$,j+1),d3(_.r,$,j+1)):$[_.s]=j},KZ=function(_){var $=_.length;while($&&!_[--$]);var j=new W1(++$),G=0,Z=_[0],X=1,Y=function(V){j[G++]=V};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},a5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},HZ=function(_,$,j){var G=j.length,Z=o3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},BZ=function(_,$,j,G,Z,X,Y,q,V,Q,K){N$($,K++,j),++Z[256];var L=h3(Z,15),N=L.t,B=L.l,U=h3(X,15),E=U.t,H=U.l,D=KZ(N),k=D.c,z=D.n,O=KZ(E),I=O.c,x=O.n,A=new W1(19);for(var M=0;M<k.length;++M)++A[k[M]&31];for(var M=0;M<I.length;++M)++A[I[M]&31];var W=h3(A,7),y=W.t,w=W.l,J=19;for(;J>4&&!y[p3[J-1]];--J);var C=Q+5<<3,f=a5(Z,h$)+a5(X,e5)+Y,b=a5(Z,N)+a5(X,E)+Y+14+3*J+a5(A,y)+2*A[16]+3*A[17]+7*A[18];if(V>=0&&C<=f&&C<=b)return HZ($,K,_.subarray(V,V+Q));var c,p,e,m;if(N$($,K,1+(b<f)),K+=2,b<f){c=n1(N,B,0),p=N,e=n1(E,H,0),m=E;var _0=n1(y,w,0);N$($,K,z-257),N$($,K+5,x-1),N$($,K+10,J-4),K+=14;for(var M=0;M<J;++M)N$($,K+3*M,y[p3[M]]);K+=3*J;var E0=[k,I];for(var G0=0;G0<2;++G0){var $0=E0[G0];for(var M=0;M<$0.length;++M){var X0=$0[M]&31;if(N$($,K,_0[X0]),K+=y[X0],X0>15)N$($,K,$0[M]>>5&127),K+=$0[M]>>12}}}else c=wU,p=h$,e=IU,m=e5;for(var M=0;M<q;++M){var U0=G[M];if(U0>255){var X0=U0>>18&31;if(s5($,K,c[X0+257]),K+=p[X0+257],X0>7)N$($,K,U0>>23&31),K+=N2[X0];var t=U0&31;if(s5($,K,e[t]),K+=m[t],t>3)s5($,K,U0>>5&8191),K+=F2[t]}else s5($,K,c[U0]),K+=p[U0]}return s5($,K,c[256]),K+p[256]},RU=new i3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),EZ=new i_(0),SU=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new i_(G+Y+5*(1+Math.ceil(Y/7000))+Z),V=q.subarray(G,q.length-Z),Q=X.l,K=(X.r||0)&7;if($){if(K)V[0]=X.r>>3;var L=RU[$-1],N=L>>13,B=L&8191,U=(1<<j)-1,E=X.p||new W1(32768),H=X.h||new W1(U+1),D=Math.ceil(j/3),k=2*D,z=function(h0){return(_[h0]^_[h0+1]<<D^_[h0+2]<<k)&U},O=new i3(25000),I=new W1(288),x=new W1(32),A=0,M=0,W=X.i||0,y=0,w=X.w||0,J=0;for(;W+2<Y;++W){var C=z(W),f=W&32767,b=H[C];if(E[f]=b,H[C]=f,w<=W){var c=Y-W;if((A>7000||y>24576)&&(c>423||!Q)){K=BZ(_,V,0,O,I,x,M,y,J,W-J,K),y=A=M=0,J=W;for(var p=0;p<286;++p)I[p]=0;for(var p=0;p<30;++p)x[p]=0}var e=2,m=0,_0=B,E0=f-b&32767;if(c>2&&C==z(W-E0)){var G0=Math.min(N,c)-1,$0=Math.min(32767,W),X0=Math.min(258,c);while(E0<=$0&&--_0&&f!=b){if(_[W+e]==_[W+e-E0]){var U0=0;for(;U0<X0&&_[W+U0]==_[W+U0-E0];++U0);if(U0>e){if(e=U0,m=E0,U0>G0)break;var t=Math.min(E0,U0-2),V0=0;for(var p=0;p<t;++p){var Q0=W-E0+p&32767,z0=E[Q0],s=Q0-z0&32767;if(s>V0)V0=s,b=Q0}}}f=b,b=E[f],E0+=f-b&32767}}if(m){O[y++]=268435456|r3[e]<<18|LZ[m];var Z0=r3[e]&31,W0=LZ[m]&31;M+=N2[Z0]+F2[W0],++I[257+Z0],++x[W0],w=W+e,++A}else O[y++]=_[W],++I[_[W]]}}for(W=Math.max(W,w);W<Y;++W)O[y++]=_[W],++I[_[W]];if(K=BZ(_,V,Q,O,I,x,M,y,J,W-J,K),!Q)X.r=K&7|V[K/8|0]<<3,K-=7,X.h=H,X.p=E,X.i=W,X.w=w}else{for(var W=X.w||0;W<Y+Q;W+=65535){var P0=W+65535;if(P0>=Y)V[K/8|0]=Q,P0=Y;K=HZ(V,K+1,_.subarray(W,P0))}X.i=Y}return t5(q,0,G+o3(K)+Z)};var WZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},uU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new i_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return SU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var OZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var gU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=WZ();Z.p($.dictionary),OZ(_,2,Z.d())}},bU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var l3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new i_(32768),this.p=new i_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)B1(5);if(this.d)B1(4);if(!this.p.length)this.p=$;else if($.length){var j=new i_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=fU(this.p,this.s,this.o);this.ondata(t5(G,j,this.s.b),this.d),this.o=t5(G,this.s.b-32768),this.s.b=this.o.length,this.p=t5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function zZ(_,$){if(!$)$={};var j=WZ();j.p(_);var G=uU(_,$,$.dictionary?6:2,4);return gU(G,$),OZ(G,G.length-4,j.d()),G}var JZ=function(){function _($,j){l3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(l3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(bU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}l3.prototype.c.call(this,j)},_}();var vU=typeof TextDecoder<"u"&&new TextDecoder,mU=0;try{vU.decode(EZ,{stream:!0}),mU=1}catch(_){}var cU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],hU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],lU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],pU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],rU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],nU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],dU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],iU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],MZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;MZ[_]=$}function yZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function TZ(_){let $=0n,j=yZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function oU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function V5(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function AZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function sU(_){let $=V5(TZ(_),rU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of dU){j=AZ(j,X),G=AZ(G,X);let Y=j<<28n|G;Z.push(V5(Y,nU,56))}return Z}function aU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(iU[j][X][Y])}return $}function tU(_,$){let j=V5(_,lU,32)^BigInt($),G=aU(j);return V5(G,pU,32)}function kZ(_,$){let j=sU($),G=V5(TZ(_),cU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let V=X,Q=(Z^tU(X,q))&0xffffffffn;Z=V,X=Q}let Y=X<<32n|Z;return oU(V5(Y,hU,64),8)}function eU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=MZ[Z]}return j}function wZ(_,$){let j=yZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=eU(_),Z=new Uint8Array(16);return Z.set(kZ(j.slice(0,8),G),0),Z.set(kZ(j.slice(8,16),G),8),Z}var u1="vnc";function _D(_){return Number(_)}function $D(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=_D(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function K5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function jD(_,$){let j=K5(_),G=K5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function GD(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=K5(Z);j.set(X,G),G+=X.byteLength}return j}function ZD(){return(_)=>{let $=K5(_);try{let j=[],G=new JZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return GD(j)}catch(j){try{let G=zZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function XD(_){return new TextEncoder().encode(String(_||""))}function Q5(_){return new TextDecoder().decode(K5(_))}function YD(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function qD(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function xZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function VD(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function QD(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function IZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function L5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function PZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function LD(_,$,j,G){let Z=G||B5,X=K5(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),Q=0,K=0;for(let L=0;L<Math.max(0,$||0)*Math.max(0,j||0);L+=1){let N=PZ(X,Q,Y,Z.bigEndian),B=L5(N>>>Z.redShift&Z.redMax,Z.redMax),U=L5(N>>>Z.greenShift&Z.greenMax,Z.greenMax),E=L5(N>>>Z.blueShift&Z.blueMax,Z.blueMax);V[K]=B,V[K+1]=U,V[K+2]=E,V[K+3]=255,Q+=Y,K+=4}return V}function F$(_,$,j){let G=j||B5,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=PZ(_,$,Z,G.bigEndian);return{rgba:[L5(X>>>G.redShift&G.redMax,G.redMax),L5(X>>>G.greenShift&G.greenMax,G.greenMax),L5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let V=0;V<Z;V+=1){let Q=((G+q)*$+(j+V))*4;_[Q]=Y[0],_[Q+1]=Y[1],_[Q+2]=Y[2],_[Q+3]=Y[3]}}function fZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let V=q*Z*4,Q=((G+q)*$+j)*4;_.set(Y.subarray(V,V+Z*4),Q)}}function CZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function KD(_,$,j,G,Z,X,Y){let q=Z||B5,V=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let Q=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+Q)return null;let K=_.slice($+4,$+4+Q),L;try{L=Y(K)}catch{return{consumed:4+Q,skipped:!0}}let N=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let H=0;H<j;H+=64){let D=Math.min(64,j-H);if(L.byteLength<N+1)return null;let k=L[N++],z=k&127,O=(k&128)!==0;if(!O&&z===0){let I=D*E*V;if(L.byteLength<N+I)return null;let x=X(L.slice(N,N+I),D,E,q);N+=I,fZ(B,j,H,U,D,E,x);continue}if(!O&&z===1){let I=F$(L,N,q);if(!I)return null;N+=I.bytesPerPixel,l$(B,j,H,U,D,E,I.rgba);continue}if(!O&&z>1&&z<=16){let I=[];for(let W=0;W<z;W+=1){let y=F$(L,N,q);if(!y)return null;N+=y.bytesPerPixel,I.push(y.rgba)}let x=z<=2?1:z<=4?2:4,A=Math.ceil(D*x/8),M=A*E;if(L.byteLength<N+M)return null;for(let W=0;W<E;W+=1){let y=N+W*A;for(let w=0;w<D;w+=1){let J=w*x,C=y+(J>>3),f=8-x-(J&7),b=L[C]>>f&(1<<x)-1;l$(B,j,H+w,U+W,1,1,I[b])}}N+=M;continue}if(O&&z===0){let I=0,x=0;while(x<E){let A=F$(L,N,q);if(!A)return null;N+=A.bytesPerPixel;let M=CZ(L,N);if(!M)return null;N+=M.consumed;for(let W=0;W<M.runLength;W+=1)if(l$(B,j,H+I,U+x,1,1,A.rgba),I+=1,I>=D){if(I=0,x+=1,x>=E)break}}continue}if(O&&z>0){let I=[];for(let M=0;M<z;M+=1){let W=F$(L,N,q);if(!W)return null;N+=W.bytesPerPixel,I.push(W.rgba)}let x=0,A=0;while(A<E){if(L.byteLength<N+1)return null;let M=L[N++],W=M,y=1;if(M&128){W=M&127;let J=CZ(L,N);if(!J)return null;N+=J.consumed,y=J.runLength}let w=I[W];if(!w)return null;for(let J=0;J<y;J+=1)if(l$(B,j,H+x,U+A,1,1,w),x+=1,x>=D){if(x=0,A+=1,A>=E)break}}continue}return{consumed:4+Q,skipped:!0}}}return{consumed:4+Q,rgba:B,decompressed:L}}function BD(_,$,j,G,Z){let X=Z||B5,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),Q=4+Y+V*(Y+8);if(_.byteLength<$+Q)return null;let K=$+4,L=F$(_,K,X);if(!L)return null;K+=L.bytesPerPixel;let N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(N,j,0,0,j,G,L.rgba);for(let B=0;B<V;B+=1){let U=F$(_,K,X);if(!U)return null;if(K+=U.bytesPerPixel,_.byteLength<K+8)return null;let E=new DataView(_.buffer,_.byteOffset+K,8),H=E.getUint16(0,!1),D=E.getUint16(2,!1),k=E.getUint16(4,!1),z=E.getUint16(6,!1);K+=8,l$(N,j,H,D,k,z,U.rgba)}return{consumed:K-$,rgba:N}}function ND(_,$,j,G,Z,X){let Y=Z||B5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),Q=$,K=[0,0,0,255],L=[255,255,255,255];for(let N=0;N<G;N+=16){let B=Math.min(16,G-N);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<Q+1)return null;let H=_[Q++];if(H&1){let D=E*B*q;if(_.byteLength<Q+D)return null;let k=X(_.slice(Q,Q+D),E,B,Y);Q+=D,fZ(V,j,U,N,E,B,k);continue}if(H&2){let D=F$(_,Q,Y);if(!D)return null;K=D.rgba,Q+=D.bytesPerPixel}if(l$(V,j,U,N,E,B,K),H&4){let D=F$(_,Q,Y);if(!D)return null;L=D.rgba,Q+=D.bytesPerPixel}if(H&8){if(_.byteLength<Q+1)return null;let D=_[Q++];for(let k=0;k<D;k+=1){let z=L;if(H&16){let y=F$(_,Q,Y);if(!y)return null;z=y.rgba,Q+=y.bytesPerPixel}if(_.byteLength<Q+2)return null;let O=_[Q++],I=_[Q++],x=O>>4,A=O&15,M=(I>>4)+1,W=(I&15)+1;l$(V,j,U+x,N+A,M,W,z)}}}}return{consumed:Q-$,rgba:V}}var B5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class U2{protocol=u1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:LD,this.pipeline=_.pipeline||null,this.encodings=$D(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...B5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:ZD()}receive(_){if(_)this.buffer=jD(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=Q5(Z),Y=YD(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=qD(Y),j.push(XD(this.clientVersionText)),$.push({type:"protocol-version",protocol:u1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let Q=Q5(this.consume(4+V).slice(4));throw Error(Q||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:u1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:u1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let V=Q5(this.consume(4+q).slice(4));throw Error(V||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:u1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:u1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(wZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=Q5(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:u1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=xZ(Z,4),V=Z.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let Q=this.consume(24),K=new DataView(Q.buffer,Q.byteOffset,Q.byteLength);if(this.framebufferWidth=K.getUint16(0,!1),this.framebufferHeight=K.getUint16(2,!1),this.serverPixelFormat=xZ(K,4),this.serverName=Q5(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(VD(this.clientPixelFormat)),j.push(QD(this.encodings)),j.push(IZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:u1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,V=[],Q=!1,K=!!this.pipeline;for(let N=0;N<Y;N+=1){if(this.buffer.byteLength<q+12){Q=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=B.getUint16(0,!1),E=B.getUint16(2,!1),H=B.getUint16(4,!1),D=B.getUint16(6,!1),k=B.getInt32(8,!1);if(q+=12,k===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),O=H*D*z;if(this.buffer.byteLength<q+O){Q=!0;break}let I=this.buffer.slice(q,q+O);if(q+=O,K)this.pipeline.processRawRect(I,U,E,H,D,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:H,height:D});else V.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:this.decodeRawRect(I,H,D,this.clientPixelFormat)});continue}if(k===2){let z=BD(this.buffer,q,H,D,this.clientPixelFormat);if(!z){Q=!0;break}if(K){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processRreRect(O,U,E,H,D,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:H,height:D})}else V.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});q+=z.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){Q=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),O=z.getUint16(0,!1),I=z.getUint16(2,!1);if(q+=4,K)this.pipeline.processCopyRect(U,E,H,D,O,I),V.push({kind:"pipeline",x:U,y:E,width:H,height:D});else V.push({kind:"copy",x:U,y:E,width:H,height:D,srcX:O,srcY:I});continue}if(k===16){let z=KD(this.buffer,q,H,D,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){Q=!0;break}if(q+=z.consumed,z.skipped)continue;if(K&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,E,H,D,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:H,height:D});else V.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});continue}if(k===5){let z=ND(this.buffer,q,H,D,this.clientPixelFormat,this.decodeRawRect);if(!z){Q=!0;break}if(K){let O=this.buffer.slice(q,q+z.consumed);this.pipeline.processHextileRect(O,U,E,H,D,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:H,height:D})}else V.push({kind:"rgba",x:U,y:E,width:H,height:D,rgba:z.rgba});q+=z.consumed;continue}if(k===-223){if(this.framebufferWidth=H,this.framebufferHeight=D,K)this.pipeline.initFramebuffer(H,D);V.push({kind:"resize",x:U,y:E,width:H,height:D});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(Q)break;this.consume(q);let L={type:"framebuffer-update",protocol:u1,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(K)L.framebuffer=this.pipeline.getFramebuffer();$.push(L),j.push(IZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:u1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=Q5(this.consume(Y));$.push({type:"clipboard",protocol:u1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function uZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var s3="piclaw:vnc-popout:",FD=60000;function gZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function UD(_=globalThis){let $=TG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function bZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(s3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{X2(_,G)}}function DD(_,$=globalThis,j=Date.now()){let G=E4(_);if(G===null)return null;let Z=gZ($);if(!Z)return null;bZ(Z,j);let X=UD($);try{return Z.setItem(`${s3}${X}`,JSON.stringify({password:G,expiresAt:j+FD})),X}catch{return null}}function HD(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=gZ($);if(!Z)return null;bZ(Z,j);let X=`${s3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),V=Number(q?.expiresAt||0);if(!Number.isFinite(V)||V<=j)return null;return E4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function ED(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:uZ(G)},X=DD($,j);if(X)Z.vnc_secret=X;return Z}function WD(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function OD(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function zD(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function JD(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function AD(_){return String(_||"").trim()||"localhost"}function kD(_,$){let j=AD(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function MD(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function RZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function SZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function yD(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class vZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=WD($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=RZ("vnc_handoff");let j=RZ("vnc_secret"),G=HD(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=MD({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d1(X.id)}" data-target-label="${d1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${d1(G.title)}</div>
                            <div>${d1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=kD(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=E4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=zD();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${d1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=E4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=E4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=QZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return b3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(B2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,V=new Set,Q=!1,K=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},L=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let M=this.canvas.getBoundingClientRect?.();if(!M||!M.width||!M.height)return null;return b3(A.clientX,A.clientY,M,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},N=(A)=>{let M=Y.get(A);if(M)G.clearTimeout(M),Y.delete(A)},B=(A)=>{let M=q.get(A);if(M?.holdTimer)G.clearTimeout(M.holdTimer);q.delete(A)},U=()=>{for(let A of q.keys())B(A)},E=()=>{if(!V.size)Q=!1},H=(A,M=80)=>{let W=String(A?.pointerType||"").toLowerCase();if(!XZ(W))return;let y=Number(A?.pointerId);if(!Number.isFinite(y))return;N(y);let w=G.setTimeout(()=>{if(Y.delete(y),!Z.has(y)&&!this.pointerButtonMask)return;k({pointerId:y,pointerType:W,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},M);Y.set(y,w)},D=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let W of Y.keys())N(W);U(),V.clear(),Q=!1;let M=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,M.x,M.y)},k=(A,M={})=>{if(M.resetAll){let C=Number(A?.pointerId);N(C),D(K(A));try{this.canvas?.releasePointerCapture?.(C)}catch{}return}let W=K(A),y=Number(A?.pointerId);N(y),B(y),V.delete(y),E();let w=Z.has(y),J=Z.get(y)??u3(A);if(!w&&!J&&!this.pointerButtonMask)return;if(Z.delete(y),X.delete(y),J)this.pointerButtonMask&=~J;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,W.x,W.y);try{this.canvas?.releasePointerCapture?.(y)}catch{}},z=(A)=>{if(Q)return;let M=q.get(A);if(!M||M.dragActivated)return;M.dragActivated=!0,M.holdTimer=null;let W=c$(0);if(!W)return;Z.set(A,(Z.get(A)??0)|W),this.pointerButtonMask|=W,H({pointerId:A,pointerType:"touch",clientX:M.lastClientX,clientY:M.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,M.lastPoint.x,M.lastPoint.y)},O=(A,M,W={})=>{let y=q.get(A);if(!y)return!1;let w=M||y.lastPoint||{x:0,y:0},J=Number.isFinite(W.clientX)?Number(W.clientX):y.lastClientX,C=Number.isFinite(W.clientY)?Number(W.clientY):y.lastClientY;if(V.delete(A),W.cancelled||Q){if(B(A),E(),Z.has(A)||this.pointerButtonMask)D(w);return!0}if(y.dragActivated||Z.has(A))return k({pointerId:A,pointerType:"touch",type:"pointerup",clientX:J,clientY:C}),E(),!0;let f=Date.now()-y.startedAt,b=ZZ({startX:y.startClientX,startY:y.startClientY,clientX:J,clientY:C,elapsedMs:f});if(N(A),B(A),X.delete(A),E(),b){let c=c$(0);this.sendPointerEvent(c,w.x,w.y),this.sendPointerEvent(0,w.x,w.y)}else this.sendPointerEvent(this.pointerButtonMask,w.x,w.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let W=String(A?.pointerType||"").toLowerCase(),y=p1(W);if(X.set(A.pointerId,M),y){let w=q.get(A.pointerId);if(w){if(w.lastClientX=Number(A?.clientX||0),w.lastClientY=Number(A?.clientY||0),w.lastPoint=M,!w.dragActivated&&g3({startX:w.startClientX,startY:w.startClientY,clientX:w.lastClientX,clientY:w.lastClientY}))B(A.pointerId),q.set(A.pointerId,{...w,holdTimer:null,dragActivated:!1});if(!w.dragActivated){this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}}if(Q)return}if(Z.has(A.pointerId)&&H4(A)){k(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&H4(A)){D(M);return}if(Z.has(A.pointerId))H(A);this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let W=String(A?.pointerType||"").toLowerCase(),y=p1(W);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,M),y){if(V.add(A.pointerId),V.size>1){let C=[...V];Q=!0,D(M);for(let f of C)V.add(f);Q=!0;return}B(A.pointerId);let J={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:M,holdTimer:null,dragActivated:!1};J.holdTimer=G.setTimeout(()=>{z(A.pointerId)},260),q.set(A.pointerId,J),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}if(W==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let w=u3(A);if(!w)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|w),this.pointerButtonMask|=w,H(A),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=K(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=K(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(q.has(A.pointerId)&&p1(A?.pointerType)){O(A.pointerId,K(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(q.has(A.pointerId)&&p1(A?.pointerType)){O(A.pointerId,K(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!H4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=K(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=K(A);if(O(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1});let I=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!GZ(A))return;let M=A?.changedTouches?.[0]||A?.touches?.[0]||null,W=L(M)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[y]=q.entries().next().value||[];if(Number.isFinite(y)){O(y,W,{clientX:M?.clientX,clientY:M?.clientY,cancelled:A?.type==="touchcancel"});return}}D(W)},x=(A,M={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(A?.pointerId))return;if(!H4(A))return;if(A?.preventDefault?.(),p1(A?.pointerType)){let W=K(A);if(O(A.pointerId,W,{clientX:A?.clientX,clientY:A?.clientY,cancelled:M.resetAll===!0}))return}k(A,{resetAll:M.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{x(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{x(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;D()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;D()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")D()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;A.preventDefault();for(let W of YZ(A.deltaY,M.x,M.y,this.pointerButtonMask))this.socketBoundary?.send?.(W)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(qZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=v3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(VZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??v3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new U2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await jZ(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,V,Q,K)=>G.decodeRawRectToRgba(q,V,Q,K);let X=E4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new U2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new P3({url:JD(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(SZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),SZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await OD(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!yD(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return ED(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var a3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new vZ(_,$)}};import{classHighlighter as TD,highlightTree as wD,StreamLanguage as N5,cssLanguage as xD,cppLanguage as ID,goLanguage as CD,htmlLanguage as PD,javascriptLanguage as fD,jsxLanguage as RD,tsxLanguage as SD,typescriptLanguage as uD,jsonLanguage as gD,markdownLanguage as bD,pythonLanguage as vD,rustLanguage as mD,StandardSQL as cD,xmlLanguage as hD,yamlLanguage as lD,dockerFile as pD,powerShell as rD,ruby as nD,shell as dD,swift as iD,toml as oD}from"#editor-vendor/codemirror";function W4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var sD={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},aD=N5.define(dD).parser,tD=N5.define(rD).parser,eD=N5.define(pD).parser,_H=N5.define(nD).parser,$H=N5.define(iD).parser,jH=N5.define(oD).parser;function mZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return sD[$]||String(_||"").trim()}function GH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return fD.parser;case"ts":case"typescript":return uD.parser;case"jsx":return RD.parser;case"tsx":return SD.parser;case"py":case"python":return vD.parser;case"json":return gD.parser;case"css":return xD.parser;case"html":return PD.parser;case"xml":return hD.parser;case"yaml":case"yml":return lD.parser;case"md":case"markdown":return bD.parser;case"sql":return cD.language.parser;case"go":return CD.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return ID.parser;case"sh":case"bash":case"shell":case"zsh":return aD;case"ps1":case"powershell":return tD;case"dockerfile":return eD;case"rb":case"ruby":return _H;case"rs":case"rust":return mD.parser;case"swift":return $H;case"toml":return jH;default:return null}}function D2(_,$){let j=GH($);if(!j)return W4(_);let G=[];try{let Y=j.parse(_);wD(Y,TD,(q,V,Q)=>{if(!Q||q>=V)return;G.push({from:q,to:V,cls:Q})})}catch{return W4(_)}if(!G.length)return W4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=W4(_.slice(Z,Y.from));X+=`<span class="${W4(Y.cls)}">${W4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=W4(_.slice(Z));return X}$6();var J2=/#(\w+)/g,HH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),EH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),WH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),sZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},OH=new Set(["http:","https:","mailto:",""]);function zH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(sZ[j]||new Set).has(G)||WH.has(G)}function X7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function A4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!OH.has(G.protocol))return null;return G.href}catch{return null}}function aZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!EH.has(q)){let Q=Y.parentNode;if(!Q)continue;while(Y.firstChild)Q.insertBefore(Y.firstChild,Y);Q.removeChild(Y);continue}let V=sZ[q]||new Set;for(let Q of Array.from(Y.attributes)){let K=Q.name.toLowerCase(),L=Q.value;if(K.startsWith("on")){Y.removeAttribute(Q.name);continue}if(zH(q,K)){if(K==="href"){let N=A4(L);if(!N)Y.removeAttribute(Q.name);else if(Y.setAttribute(Q.name,N),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(N))Y.setAttribute("target","_blank")}}else if(K==="src"){let N=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(L):L,B=A4(N,{allowDataImage:q==="img"});if(!B)Y.removeAttribute(Q.name);else Y.setAttribute(Q.name,B)}continue}Y.removeAttribute(Q.name)}}return j.body.innerHTML}function tZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function j6(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=tZ(j);if(Z===j)break;j=Z}return j}function JH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function AH(_){let{text:$,frontmatter:j}=JH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function kH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let V=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${V}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function MH(_){if(!_)return _;return j6(_,5)}function yH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function TH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function wH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=MH(X);return`<div class="mermaid-container" data-mermaid="${yH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function eZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function xH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=j6(Z,2),q=X||"plaintext",V=D2(Y,X);return`<pre><code class="hljs language-${X7(q)}">${V}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var IH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function CH(_,$){let j=IH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${X7(q)}"`)}return G.join("")}function _X(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[V=""]=q.split(/\s+/,1),Q=V.toLowerCase();if(!Q||!HH.has(Q))return $;if(Q==="br")return Z?"":"<br>";if(Z)return`</${Q}>`;let K=q.slice(V.length).trim(),L=CH(Q,K);return`<${Q}${L}>`})}function $X(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function jX(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function PH(_){if(!window.katex)return _;let $=(Y)=>tZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],V=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(Q)=>{let K=q.length;return q.push(Q),`@@CODE_BLOCK_${K}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(Q)=>{let K=q.length;return q.push(Q),`@@CODE_INLINE_${K}@@`}),{html:V,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,Q)=>{let K=Number(Q);return q[K]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,V)=>{try{let Q=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${q}${Q}`}catch(Q){let K=Q instanceof Error?Q.message:String(Q);return`<span class="math-error" title="${X7(K)}">${Y}</span>`}}),G(X,Z.blocks)}function fH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(J2.lastIndex=0,!J2.test(Y))continue;J2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let V=Y.split(J2);if(V.length<=1)continue;let Q=$.createDocumentFragment();V.forEach((K,L)=>{if(L%2===1){let N=$.createElement("a");N.setAttribute("href","#"),N.className="hashtag",N.setAttribute("data-hashtag",K),N.textContent=`#${K}`,Q.appendChild(N)}else Q.appendChild($.createTextNode(K))}),X.parentNode?.replaceChild(Q,X)}return $.body.innerHTML}function RH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function SH(_){let $=AH(_||""),j=RH($),{text:G,blocks:Z}=kH(j),X=j6(G,2),q=eZ(X).replace(/</g,"&lt;");return{safeHtml:_X(q),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=SH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=$X(X),X=jX(X),X=xH(X),X=PH(X),X=fH(X),X=wH(X,Z),X=aZ(X,j),X}function G6(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=j6($,2),Z=eZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=_X(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=$X(Y),Y=jX(Y),Y=aZ(Y),Y}function uH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((V)=>{let[Q,K]=V.split(",").map(Number);return{x:Q,y:K}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let V=1;V<Y.length-1;V++){let Q=Y[V-1],K=Y[V],L=Y[V+1],N=K.x-Q.x,B=K.y-Q.y,U=L.x-K.x,E=L.y-K.y,H=Math.sqrt(N*N+B*B),D=Math.sqrt(U*U+E*E),k=Math.min($,H/2,D/2);if(k<0.5){q.push(`L ${K.x},${K.y}`);continue}let z=K.x-N/H*k,O=K.y-B/H*k,I=K.x+U/D*k,x=K.y+E/D*k,M=N*E-B*U>0?1:0;q.push(`L ${z},${O}`),q.push(`A ${k},${k} 0 0 ${M} ${I},${x}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=oZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,V=TH(q||""),Q=j6(V,2),K=await $(Q,{...Z,transparent:!0});K=uH(K),Y.innerHTML=K,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(V),Y.removeAttribute("data-mermaid")}}w_();function FX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let V=$.toLocaleDateString(void 0,{weekday:"short"}),Q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${Q}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function F6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function x4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function r$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function kE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),Q=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,K=[];for(let N of Q.split("/")){if(!N||N===".")continue;if(N===".."){if(K.length>0)K.pop();continue}K.push(N)}let L=K.join("/");return`${B6(L)}${X}${Y}`}function U6(_){return _?.preview||null}function ME(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function yE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function TE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${r$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${r$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${r$(x4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${r$(yE($))}</span>`),G.push(`<span><strong>extension:</strong> ${r$(ME(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${r$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function wE(_){let $=U6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=TE(_,$);if($.kind==="image"){let G=$.url||($.path?B6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${r$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>kE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${r$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class S7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=wE(this.context)}getContent(){let _=U6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=U6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var u7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=U6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new S7(_,$)}},g7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return U6(_)||_?.path?1:!1},mount(_,$){return new S7(_,$)}};var xE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),IE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},CE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function DX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function UX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class HX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=DX(j),X=CE[Z]||"\uD83D\uDCC4",Y=IE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${UX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${UX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let V=q.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let Q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class EX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=DX(_?.path);if(!$||!xE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new HX(_,$);return new EX(_,$)}};var PE=/\.(csv|tsv)$/i;function WX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class OX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${WX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${WX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class zX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!PE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new OX(_,$);return new zX(_,$)}};var fE=/\.pdf$/i;function RE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class JX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${RE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class AX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new JX(_,$);return new AX(_,$)}};var SE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function c7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class kX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${c7(Z)}" alt="${c7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${c7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class MX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!SE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new kX(_,$);return new MX(_,$)}};var uE=/\.(html|htm)$/i;function yX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class TX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${yX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${yX(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class wX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new TX(_,$);return new wX(_,$)}};var gE=/\.(mp4|m4v|mov|webm|ogv)$/i;function bE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class xX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${bE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class IX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!gE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new xX(_,$);return new IX(_,$)}};w_();function vE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function CX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:V=3000,ownerDocument:Q=document}=_,K=null,L=null,N=!1,B=!1,U=!1;async function E(){if(B||U||N)return;let O=j();if(!O)return;try{let I=await I7($);if(B||U||!I?.mtime)return;if(I.mtime!==O)N=!0,D(),k()}catch(I){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",I)}}function H(){if(D(),B)return;K=setInterval(E,V)}function D(){if(K)clearInterval(K),K=null}function k(){if(L||B)return;let O=Q.createElement("div");O.className="editor-conflict-bar",O.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,O.addEventListener("click",(I)=>{let x=I.target.closest("[data-action]");if(!x)return;let A=x.getAttribute("data-action");if(A==="reload")z(),X();else if(A==="save-copy"){let M=vE($);Y(M)}else if(A==="overwrite")z(),q();else if(A==="dismiss")z()}),L=O,G.insertBefore(O,Z)}function z(){if(L)L.remove(),L=null;N=!1,H()}return{start(){H()},stop(){D()},onSaved(O){N=!1,U=!1,H()},dispose(){if(B=!0,D(),L)L.remove(),L=null}}}var mE=/\.mindmap\.ya?ml$/i,f2=String(Date.now());function cE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function PX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function r7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function hE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function lE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class fX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${cE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class RX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(PX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,hE("/static/css/mindmap.css?v="+f2),await Promise.all([r7("/static/js/vendor/d3-mindmap.min.js?v="+f2),r7("/static/js/vendor/js-yaml.min.js?v="+f2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),lE(this.mindmapEl);let j=PX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await r7("/static/js/vendor/mindmap-editor.js?v="+f2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=CX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var n7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!mE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new fX(_,$);return new RX(_,$)}};class SX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new SX;var W5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};k0();function uX(){let[_,$]=P(null),[j,G]=P({text:"",totalLines:0}),[Z,X]=P(""),[Y,q]=P({text:"",totalLines:0}),[V,Q]=P(null),[K,L]=P(null),[N,B]=P(null),U=g(null),E=g(0),H=g(!1),D=g(""),k=g(""),z=g(!1),O=g(0),I=g(null),x=g(null),A=g(null),M=g(null),W=g(!1),y=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:V,setPendingRequest:Q,currentTurnId:K,setCurrentTurnId:L,steerQueuedTurnId:N,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:H,draftBufferRef:D,thoughtBufferRef:k,previewResyncPendingRef:z,previewResyncGenerationRef:O,pendingRequestRef:I,stalledPostIdRef:x,currentTurnIdRef:A,steerQueuedTurnIdRef:M,thoughtExpandedRef:W,draftExpandedRef:y}}k0();var pE=0.1,cX=4,hX=4,gX=160,bX=1600,vX=200,mX=1600;function W$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function lX(_=W$()){return _>0?Math.floor(_*pE):0}function D6(_,$=W$(),j=0){let G=lX($)+cX+(j>0?hX+Math.max(0,j):0),Z=$>0?Math.floor($-G):bX;return Math.min(Math.max(Number(_)||0,gX),Math.max(gX,Math.min(bX,Z)))}function H6(_,$=W$(),j=0){let G=lX($)+hX+(j>0?cX+Math.max(0,j):0),Z=$>0?Math.floor($-G):mX;return Math.min(Math.max(Number(_)||0,vX),Math.max(vX,Math.min(mX,Z)))}function pX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.clientX,B=$.current||280,U=K.currentTarget;U.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,H=(k)=>{E=k.clientX;let z=D6(B+(k.clientX-N),W$(),j?.current||0);L.style.setProperty("--sidebar-width",`${z}px`),$.current=z},D=()=>{let k=D6(B+(E-N),W$(),j?.current||0);$.current=k,U.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",V_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,X=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.touches[0];if(!N)return;let B=N.clientX,U=$.current||280,E=K.currentTarget;E.classList.add("dragging"),L.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let H=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=D6(U+(z.clientX-B),W$(),j?.current||0);L.style.setProperty("--sidebar-width",`${O}px`),$.current=O},D=()=>{E.classList.remove("dragging"),L.classList.remove("sidebar-resizing"),document.body.style.userSelect="",V_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,Y=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.clientX,B=j.current||$.current||280,U=K.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,H=(k)=>{E=k.clientX;let z=H6(B+(k.clientX-N),W$(),$?.current||0);L.style.setProperty("--editor-width",`${z}px`),j.current=z},D=()=>{let k=H6(B+(E-N),W$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,q=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.touches[0];if(!N)return;let B=N.clientX,U=j.current||$.current||280,E=K.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let H=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=H6(U+(z.clientX-B),W$(),$?.current||0);L.style.setProperty("--editor-width",`${O}px`),j.current=O},D=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",V_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current,V=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.clientY,B=G?.current||200,U=K.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=N,H=(k)=>{E=k.clientY;let z=Math.min(Math.max(B-(k.clientY-N),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{let k=Math.min(Math.max(B-(E-N),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",D)};document.addEventListener("mousemove",H),document.addEventListener("mouseup",D)}).current,Q=g((K)=>{K.preventDefault();let L=_.current;if(!L)return;let N=K.touches[0];if(!N)return;let B=N.clientY,U=G?.current||200,E=K.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let H=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let O=Math.min(Math.max(U-(z.clientY-B),100),window.innerHeight*0.5);if(L.style.setProperty("--dock-height",`${O}px`),G)G.current=O;window.dispatchEvent(new CustomEvent("dock-resize"))},D=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",V_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",D),document.removeEventListener("touchcancel",D)};document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",D),document.addEventListener("touchcancel",D)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:Q}}k0();function d7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var rX=d7("warning",30000),nX=d7("finalize",120000),dX=d7("refresh",30000),iX=30000;function oX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function E6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function sX(_=30000){let[,$]=P(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function aX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function R2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function rE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function n$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function O$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function S2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.tool_name??_.toolName;if(typeof j==="string"&&j.trim())return j.trim();let G=_.status;if(typeof G==="string"&&G.trim())return G.trim();return O$(_)?"Compacting context":"Working..."}function tX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function W6(_,$=Date.now()){let j=R2(_);if(j===null)return null;return tX(Math.max(0,$-j))}function eX(_,$=Date.now()){let j=rE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${tX(G)}`}k0();function Nq(_={}){o1(_)}function Fq(){let[_,$]=P(!1);if(u(()=>{let Z=(Y)=>{let q=O5(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(V){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=u2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=P(null);if(u(()=>{Promise.resolve().then(() => (Bq(),Kq)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return F`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}k0();function EO(_,$){return new URL(String(_||""),$).toString()}function Uq(){let[_,$]=P(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=R((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=EO(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}k0();k0();function Dq(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function E9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var WO=400,W9=60,OO=220,O9="mdPreviewHeight";function zO(){return Dq(localStorage,O9,W9,OO)}function s2({getContent:_,path:$,onClose:j}){let[G,Z]=P(""),[X,Y]=P(zO),q=g(null),V=g(null),Q=g(""),K=g(_);return K.current=_,u(()=>{let B=()=>{let E=K.current?.()||"";if(E===Q.current)return;Q.current=E;try{let H=Z1(E,null);Z(H)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,WO);return()=>clearInterval(U)},[]),u(()=>{if(q.current&&G)E$(q.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,E=V.current?.offsetHeight||X,H=V.current?.parentElement,D=H?H.offsetHeight*0.7:500,k=B.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=(I)=>{let x=Math.min(Math.max(E-(I.clientY-U),W9),D);Y(x)},O=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",E9(localStorage,O9,V.current?.offsetHeight||X),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",O)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",O)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let E=U.clientY,H=V.current?.offsetHeight||X,D=V.current?.parentElement,k=D?D.offsetHeight*0.7:500,z=B.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let O=(x)=>{let A=x.touches[0];if(!A)return;x.preventDefault();let M=Math.min(Math.max(H-(A.clientY-E),W9),k);Y(M)},I=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",E9(localStorage,O9,V.current?.offsetHeight||X),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:X+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${q}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function Hq(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function JO(_){return _==="error"?"Could not open branch window":"Opening branch…"}function Eq(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${JO(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function Wq(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:V,previewTabs:Q,diffTabs:K,handleTabTogglePreview:L,handleTabToggleDiff:N,editorContainerRef:B,getPaneContent:U,panePopoutPath:E}=_,H=j&&!G&&Z,D=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${H&&F`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${D}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${D}
                title=${D}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&F`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((k)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${k.id===q?" active":""}`}
                          onClick=${(z)=>{V(k.id),z.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${k.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&K.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{N(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&Q.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{L(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?F`<div class="editor-pane-host" ref=${B}></div>`:F`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${E||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&Q.has(q)&&F`
          <${s2}
            getContent=${U}
            path=${q}
            onClose=${()=>L(q)}
          />
        `}
      </div>
    </div>
  `}k0();k0();function a2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function AO(_,$){let j=a2(_),G=a2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function k6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function z9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function kO(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function MO(_,$,j=0,G=(Z)=>Z){let Z=a2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=kO(X.length,j),q=X.map((V)=>a2(G(V)));for(let V of Y)if(q[V].startsWith(Z))return V;for(let V of Y)if(q[V].includes(Z))return V;return-1}function J9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(AO(X,$))return j}return MO(Z,$,0,G)}w_();function t2(_){return String(_||"").trim().toLowerCase()}function A9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return t2($[1]||"")}function yO(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=t2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function Oq(_,$,j={}){let G=A9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return yO(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return t2(X?.agent_name).startsWith(G)})}function k9(_){let $=t2(_);return $?`@${$} `:""}function zq(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function Jq(_,$,j={}){if(!_||_.isComposing)return!1;if(!zq(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function M9(_,$={}){if(!zq($))return!1;return String(_||"")==="@"}function y9(_){let $=T9(_);return $?`@${$}`:""}function T9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function e2(_,$=""){let j=String(_||""),G=T9(j),Z=T9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function TO(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function _8(_,$={}){let j=y9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=TO(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function Aq(_,$,j){let G=y9(_),Z=y9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function $8({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function w9({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function M6(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(_?.type==="intent")return"dot";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function kq(_,$={}){return M6(_,$)==="dot"}k0();var Mq=350;function wO(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function xO(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=wO(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Mq,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function x9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Mq,[G,Z]=P(null),[X,Y]=P(()=>Date.now());return u(()=>{if(_==="disconnected"){let q=Date.now();Z((V)=>V??q),Y(q);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let V=0,Q=0,K=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}V=requestAnimationFrame(()=>{Q=requestAnimationFrame(()=>{Y(Date.now())})})},q);return()=>{if(clearTimeout(K),V)cancelAnimationFrame(V);if(Q)cancelAnimationFrame(Q)}},[_,G,j]),Y0(()=>xO(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}k0();function q1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,V=`${_}-file-name`,Q=`${_}-file-remove`,K=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${K}
      <span class=${V}>${$}</span>
      ${G&&F`
        <button
          class=${Q}
          onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function I9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function IO(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function CO(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function C9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=R1(_),Z=IO(_),X=CO(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function yq(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function Tq(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function P9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var PO=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],wq="piclaw_compose_history";function fO(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function RO(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return wq;return`${wq}:${encodeURIComponent($)}`}function SO(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let V=String(Z?.agent_name||"").trim(),Q=String(X?.agent_name||"").trim(),K=V.localeCompare(Q,void 0,{sensitivity:"base"});if(K!==0)return K;let L=String(Z?.chat_jid||"").trim(),N=String(X?.chat_jid||"").trim();return L.localeCompare(N,void 0,{sensitivity:"base"})}),G}function uO(_){return Boolean(_?.is_active&&!_?.archived_at)}function gO(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function xq(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function bO(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Iq(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function vO(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function mO(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function cO(_){return _==="abort"||_==="compacting"}function hO(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1,animateSpinner:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!1,animateSpinner:!0}}function lO({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",V=X!=null?`Context: ${y6(X)} / ${y6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,Q=typeof j==="string"?j.trim():"",K=typeof G==="string"?G.trim():"",L=Q?`${V} — ${K||"Smart compaction"} · ${Q}`:`${V} — ${"Compact context"}`,N=9,B=2*Math.PI*9,U=Z/100*B,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${Q?" is-compacting":""}`}
            type="button"
            title=${L}
            aria-label=${Q?`Smart compaction ${Q}`:"Compact context"}
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${E}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${Q&&F`<span class="compose-context-pie-timer">${Q}</span>`}
        </button>
    `}function y6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function pO(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function Cq(_,$){let j=Number(_?.contextWindow??_?.context_window),G=pO($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${y6(G)} tokens, but this model only fits ${y6(j)}. Compact first.`,tokens:G,contextWindow:j}}function f9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${y6($)} ctx`}function rO(_,$){let j=typeof _==="string"?_.trim():"",G=f9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function nO(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function Rq(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let L=X.trim();if(!L)continue;let N=L.indexOf("/"),B=N>0?L.slice(0,N).trim():"",U=N>0?L.slice(N+1).trim():L;Z.push({label:L,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",V=nO(X.label,Y,q);if(!V)continue;let Q=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,K=Number(X.context_window??X.contextWindow);Z.push({label:V,provider:Y,id:q,name:Q,contextWindow:Number.isFinite(K)&&K>0?K:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function dO(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,f9(_.contextWindow)].filter(Boolean).join(" ")}function iO(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=Rq($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function j8(_){return(typeof _==="string"?_.trim():"")||null}function Pq(_){return j8(_)?.toLowerCase()??null}function fq(_,$){let j=Pq(_),G=Pq($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function oO(_,$){let j=$&&typeof $==="object"?$:{},G=j8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=j8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&fq(G,Z))return null;let X=j8(_??j.current??j.model);if(X&&Z&&!fq(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function sO(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")||q.startsWith("Chat:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let V=[];while(Z<j.length){let Q=j[Z],K=Q.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(K))break;if(K.startsWith("Channel:")||K.startsWith("Chat:")||K==="Messages:")break;V.push(Q.startsWith("  ")?Q.slice(2):Q),Z+=1}if(V.length>0)G.push(V.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function Sq(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function aO(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Sq(Q.replace(/^\s*-\s+/,"").trim());if(K)Z.push(K)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function tO(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Folders:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Sq(Q.replace(/^\s*-\s+/,"").trim());if(K)Z.push(K)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function eO(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(K)Z.push(K[1])}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function _z(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Attachments:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Q.replace(/^\s*-\s+/,"").trim(),L=K.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(L)Z.push({id:L[1],label:(L[2]||"").trim()||`attachment:${L[1]}`,raw:K})}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function uq(_){let $=sO(_||""),j=aO($||""),G=tO(j.content||""),Z=eO(G.content||""),X=_z(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function $z(_){let $=uq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function jz(_){let{queuedItem:$,buildDraft:j=$z,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetFolderRefs:V,onSetMessageRefs:Q,setContent:K,textareaRef:L,resizeTextarea:N=()=>{},scheduleTimeout:B=(k,z=0)=>setTimeout(k,z),scheduleRaf:U=(k)=>requestAnimationFrame(k),logger:E=console}=_||{};if(!$)return!1;let H=j($?.content||""),D=H.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:D?.slice(0,80),fileRefs:H.fileRefs?.length,folderRefs:H.folderRefs?.length,messageRefs:H.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(H.fileRefs),V?.(H.folderRefs),Q?.(H.messageRefs),K?.(D),U(()=>{let k=L?.current;if(!k)return;if(k.value=D,typeof k.dispatchEvent==="function")k.dispatchEvent(new Event("input",{bubbles:!0}));N();let z=D.length;k.selectionStart=z,k.selectionEnd=z,k.focus()}),B(()=>{try{G?.($)}catch(k){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",k)}},0),!0}function R9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let V=typeof Y?.content==="string"?Y.content:"",Q=uq(V);if(!Q.text.trim()&&Q.fileRefs.length===0&&Q.folderRefs.length===0&&Q.messageRefs.length===0&&Q.attachmentRefs.length===0)return null;let K=q>0,L=q<_.length-1,N=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${V}>
                            ${Q.text.trim()&&F`<div class="compose-queue-stack-text">${Q.text}</div>`}
                            ${(Q.messageRefs.length>0||Q.fileRefs.length>0||Q.folderRefs.length>0||Q.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${Q.messageRefs.map((B)=>F`
                                        <${q1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${Q.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${Q.folderRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${Q.attachmentRefs.map((B)=>F`
                                        <${q1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&F`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-down"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!L}
                                    onClick=${()=>L&&G?.(q,q+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!K}
                                    onClick=${()=>K&&G?.(q,q-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${N&&F`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function gq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:V=[],onRemoveFileRef:Q,onClearFileRefs:K,folderRefs:L=[],onRemoveFolderRef:N,onClearFolderRefs:B,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:H,activeModel:D=null,agentModelsPayload:k=null,modelUsage:z=null,thinkingLevel:O=null,supportsThinking:I=!1,contextUsage:x=null,onContextCompact:A,notificationsEnabled:M=!1,notificationPermission:W="default",onToggleNotifications:y,onModelChange:w,onModelStateChange:J,activeEditorPath:C=null,onAttachEditorFile:f,onOpenFilePill:b,followupQueueItems:c=[],onInjectQueuedFollowup:p,onRemoveQueuedFollowup:e,onMoveQueuedFollowup:m,onSubmitIntercept:_0,onMessageResponse:E0,isAgentActive:G0=!1,activeChatAgents:$0=[],currentChatJid:X0="web:default",connectionStatus:U0="connected",stateAccessFailed:t=!1,onSetFileRefs:V0,onSetFolderRefs:Q0,onSetMessageRefs:z0,onSubmitError:s,onSwitchChat:Z0,onRenameSession:W0,isRenameSessionInProgress:P0=!1,onCreateSession:h0,onCreateRootSession:g0,onDeleteSession:G_,onPurgeArchivedSession:c0,onRestoreSession:s0,showQueueStack:f0=!0,statusNotice:i0=null,extensionWorkingState:b0=null,prefillRequest:t0=null}){let[o0,F_]=P(""),[Z_,v0]=P(""),[O0,q_]=P(!1),[d0,H_]=P(!1),[D0,u0]=P("or"),[I0,r0]=P([]),[z_,Q_]=P(!1),[U_,N_]=P([]),[J_,x_]=P(0),[P_,E_]=P(!1),o_=g(null),[f_,q0]=P([]),[v,r]=P(0),[o,j0]=P(!1),[N0,y0]=P(!1),[A0,M0]=P(!1),[T0,m0]=P(!1),[S0,n0]=P([]),[e0,x0]=P(0),[w0,D_]=P(0),[__,n]=P(!1),[B0,l0]=P(!1),[j_,R_]=P(0),[F1,g_]=P(null),[J1,I_]=P(null),[k_,A1]=P(()=>C9()),[W_,A_]=P({kind:"idle",title:"",detail:""}),[U1,m_]=P(()=>Date.now()),[r_,s_]=P(0),B_=g(null),x1=g(null),D1=g(null),b1=g(null),k1=g(null),_$=g(null),h4=g(null),k$=g(null),t_=g({value:"",updatedAt:0}),c_=g(null),M1=g(""),H1=g(""),_1=g(""),M$=g(""),y$=g(!1),$$=g(!1),M_=g(!1),V1=g(0),T$=g(!1),l4=200,j$=RO(X0),p4=(T)=>{let h=new Set,i=[];for(let K0 of T||[]){if(typeof K0!=="string")continue;let R0=K0.trim();if(!R0||h.has(R0))continue;h.add(R0),i.push(R0)}return i},r4=(T=j$)=>{let h=O1(T);if(!h)return[];try{let i=JSON.parse(h);if(!Array.isArray(i))return[];return p4(i)}catch{return[]}},w$=(T,h=j$)=>{V_(h,JSON.stringify(T))},x$=g(r4(j$)),v1=g(-1),m1=g(""),n4=g("");u(()=>{x$.current=r4(j$),v1.current=-1,m1.current=""},[j$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((T)=>T.json()).then((T)=>{if(T?.searchMatchMode)u0(T.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let T=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(X0||"web:default")}`).then((i)=>i.ok?i.json():null).then((i)=>{if(T||!i?.commands)return;o_.current=i.commands.map((K0)=>({name:K0.name,description:K0.description||""}))}).catch((i)=>{console.debug("[compose] failed to fetch dynamic commands",i)}),()=>{T=!0}},[X0]),u(()=>{let T=fO(t0,n4.current,j);if(!T.shouldApply)return;n4.current=T.nextToken,g_(null),F_(T.text),H0(T.text),p_(T.text),requestAnimationFrame(()=>{C0();let h=B_.current;if(!h)return;try{h.focus({preventScroll:!0})}catch{h.focus()}let i=T.text.length;h.setSelectionRange?.(i,i)})},[t0,j]),u(()=>{A1(C9())},[]);let Q1=o0.trim()||I0.length>0||V.length>0||L.length>0||U.length>0,S_=W_.kind!=="idle",d4=W_.kind==="requesting_permission"||W_.kind==="listening",I1=!j&&Boolean(k_?.showButton),I$=W_.kind==="requesting_permission"||W_.kind==="listening",i4=I$?"Stop voice input":k_?.title||"Voice input",b5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),v5=typeof window<"u"&&typeof Notification<"u",Y4=typeof window<"u"?Boolean(window.isSecureContext):!1,o4=v5&&Y4&&W!=="denied",s4=W==="granted"&&M,L1=O$(i0),P$=S2(i0),q4=typeof i0?.detail==="string"&&i0.detail.trim()?i0.detail.trim():"",V4=L1?W6(i0,U1):null,C1=hO(b0,r_),E1=b0?.indicator&&typeof b0.indicator==="object"?b0.indicator:null,m5=s4?"Disable notifications":"Enable notifications",Q4=I0.length>0||V.length>0||L.length>0||U.length>0,G$=x9(t?U0:"connected"),e_=G$.label,f$=G$.title,a4=bO(G0,Q1,L1),Z$=mO(G0,L1),m6=(Array.isArray($0)?$0:[]).filter((T)=>!T?.archived_at),b_=(()=>{for(let T of Array.isArray($0)?$0:[]){let h=typeof T?.chat_jid==="string"?T.chat_jid.trim():"";if(h&&h===X0)return T}return null})(),i8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),o8=Boolean(i8&&(b_?.chat_jid||X0)==="web:default"),P1=(()=>{let T=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",h=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!T||!h||b_.archived_at)return null;if((Array.isArray($0)?$0:[]).filter((R0)=>{let K_=typeof R0?.parent_branch_id==="string"?R0.parent_branch_id.trim():"";return K_&&K_===h}).length>0)return null;return(Array.isArray($0)?$0:[]).find((R0)=>{let K_=typeof R0?.branch_id==="string"?R0.branch_id.trim():"";return K_&&K_===T&&!R0?.archived_at})||null})(),L4=Y0(()=>SO($0,X0),[$0,X0]),R$=L4.length>0,S$=R$&&typeof Z0==="function",u$=R$&&typeof s0==="function",t4=Boolean(P0||T$.current),X$=!j&&typeof W0==="function"&&!t4,Y$=!j&&typeof h0==="function",K4=!j&&typeof g0==="function",B4=!j&&!G0&&!B0&&Boolean(P1?.chat_jid),q$=!j&&typeof G_==="function"&&!o8,c6=!j&&typeof c0==="function",V$=!j&&(S$||u$||X$||Y$||K4||B4||q$||c6),h6=iO(D,k),c5=h6.showPicker,h5=h6.label,l5=I&&O?` (${O})`:"",s8=l5.trim()?`${O}`:"",S=oO(D,k),l=typeof z?.hint_short==="string"?z.hint_short.trim():"",d=[s8||null,S?.label||null,l||null].filter(Boolean).join(" • "),a=[D?`Current model: ${h5}${l5}`:null,S?.title||null,z?.plan?`Plan: ${z.plan}`:null,l||null,z?.primary?.reset_description||null,z?.secondary?.reset_description||null].filter(Boolean),F0=N0?"Switching model…":a.join(" • ")||(c5?"Select a model (tap to open model picker)":`Current model: ${h5}${l5} (tap to open model picker)`),L0=!j&&(c5||x&&x.percent!=null),J0=(T)=>{if(!T||typeof T!=="object")return;let h=T.model??T.current;if(typeof J==="function")J({...T,model:h??null,thinking_level:T.thinking_level??null,thinking_level_label:T.thinking_level_label??null,supports_thinking:T.supports_thinking,provider_usage:T.provider_usage??null});if(h&&typeof w==="function")w(h)},C0=(T)=>{let h=T||B_.current;if(!h)return;h.style.height="auto",h.style.height=`${h.scrollHeight}px`,h.style.overflowY="hidden"},H0=(T)=>{if(!T.startsWith("/")||T.includes(`
`)){E_(!1),N_([]);return}let h=T.toLowerCase().split(" ")[0];if(h.length<1){E_(!1),N_([]);return}let K0=(o_.current||PO).filter((R0)=>R0.name.startsWith(h)||R0.name.replace(/-/g,"").startsWith(h.replace(/-/g,"")));if(K0.length>0&&!(K0.length===1&&K0[0].name===h))j0(!1),q0([]),N_(K0),x_(0),E_(!0);else E_(!1),N_([])},a0=(T)=>{let h=o0,i=h.indexOf(" "),K0=i>=0?h.slice(i):"",R0=T.name+K0;F_(R0),E_(!1),N_([]),requestAnimationFrame(()=>{let K_=B_.current;if(!K_)return;let d_=R0.length;K_.selectionStart=d_,K_.selectionEnd=d_,K_.focus()})},p_=(T)=>{if(M9(T,{searchMode:j,showSessionSwitcherButton:V$})){j0(!1),q0([]);return}if(A9(T)==null){j0(!1),q0([]);return}let h=Oq(m6,T,{currentChatJid:X0});if(h.length>0&&!(h.length===1&&k9(h[0].agent_name).trim().toLowerCase()===String(T||"").trim().toLowerCase()))E_(!1),N_([]),q0(h),r(0),j0(!0);else j0(!1),q0([])},$1=(T)=>{let h=k9(T?.agent_name);if(!h)return;F_(h),j0(!1),q0([]),requestAnimationFrame(()=>{let i=B_.current;if(!i)return;let K0=h.length;i.selectionStart=K0,i.selectionEnd=K0,i.focus()})},Q$=()=>{if(j||!S$&&!u$&&!X$&&!Y$&&!q$)return!1;return t_.current={value:"",updatedAt:0},M0(!1),E_(!1),N_([]),j0(!1),q0([]),m0(!0),!0},vj=(T)=>{if(T?.preventDefault?.(),T?.stopPropagation?.(),j||!S$&&!u$&&!X$&&!Y$&&!q$)return;if(T0){t_.current={value:"",updatedAt:0},m0(!1);return}Q$()},mj=(T)=>{let h=typeof T==="string"?T.trim():"";if(m0(!1),!h||h===X0){requestAnimationFrame(()=>B_.current?.focus());return}Z0?.(h)},cj=async(T)=>{let h=typeof T==="string"?T.trim():"";if(m0(!1),!h||typeof s0!=="function"){requestAnimationFrame(()=>B_.current?.focus());return}try{await s0(h)}catch(i){console.warn("Failed to restore session:",i),requestAnimationFrame(()=>B_.current?.focus())}},n_=Y0(()=>{let T=[];for(let h of L4){let i=Boolean(h?.archived_at),K0=typeof h?.agent_name==="string"?h.agent_name.trim():"",R0=typeof h?.chat_jid==="string"?h.chat_jid.trim():"";if(!K0||!R0)continue;T.push({type:"session",key:`session:${R0}`,label:`@${K0} — ${R0}${h?.is_active?" active":""}${i?" archived":""}`,chat:h,disabled:i?!u$:!S$})}if(Y$)T.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(K4)T.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(P1?.chat_jid)T.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!B4});if(X$)T.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:t4});if(q$)T.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return T},[L4,u$,S$,Y$,K4,P1,B4,X$,q$,t4]),hj=async(T)=>{if(T?.preventDefault)T.preventDefault();if(T?.stopPropagation)T.stopPropagation();if(typeof W0!=="function"||P0||T$.current)return;T$.current=!0,m0(!1);try{await W0()}catch(h){console.warn("Failed to rename session:",h)}finally{T$.current=!1}requestAnimationFrame(()=>B_.current?.focus())},lj=async()=>{if(typeof h0!=="function")return;m0(!1);try{await h0()}catch(T){console.warn("Failed to create session:",T)}requestAnimationFrame(()=>B_.current?.focus())},pj=async()=>{if(typeof g0!=="function")return;m0(!1);let T=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",h=String(T||"").trim();if(!h){requestAnimationFrame(()=>B_.current?.focus());return}try{await g0(h)}catch(i){console.warn("Failed to create root session:",i)}requestAnimationFrame(()=>B_.current?.focus())},rj=async()=>{let T=typeof P1?.chat_jid==="string"?P1.chat_jid.trim():"";if(!T||B0||G0)return;m0(!1),g_(null),I_(null),l0(!0);try{let h=await z1("default","/rollup",null,[],null,X0);E0?.(h),_?.(h);let i=h?.command;if(i?.status==="error"){let R0=i?.message||"Failed to merge current session with parent.";g_(R0),s?.(R0);return}let K0=typeof i?.rolled_up_to==="string"&&i.rolled_up_to.trim()?i.rolled_up_to.trim():T;Z0?.(K0)}catch(h){let i=h?.message||"Failed to merge current session with parent.";g_(i),s?.(i),console.warn("Failed to merge session with parent:",h)}finally{l0(!1)}requestAnimationFrame(()=>B_.current?.focus())},nj=async()=>{if(typeof G_!=="function")return;m0(!1);try{await G_(X0)}catch(T){console.warn("Failed to delete session:",T)}requestAnimationFrame(()=>B_.current?.focus())},g$=(T)=>{if(j)v0(T);else F_(T),H0(T),p_(T);requestAnimationFrame(()=>C0())},$F=(T)=>{let h=j?Z_:o0,i=h&&!h.endsWith(`
`)?`
`:"",K0=`${h}${i}${T}`.trimStart();g$(K0)},a8=R(()=>{requestAnimationFrame(()=>{let T=B_.current;if(!T)return;try{T.focus({preventScroll:!0})}catch{T.focus()}})},[]),c1=R(()=>{A_({kind:"idle",title:"",detail:""})},[]),t8=R((T=H1.current,h=_1.current)=>{if(j)return;g$(yq(M1.current,T,h))},[j]),h1=R(()=>{y$.current=!0;let T=c_.current;if(!T){c1();return}try{T.stop()}catch{c_.current=null,c1()}},[c1]),e8=R(()=>{if(g_(null),I_(null),c_.current){h1();return}if(!k_?.showButton)return;if(k_.mode==="fallback"){a8(),A_({kind:"guidance",title:k_.title||"Use keyboard dictation",detail:k_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!k_?.canStart||!k_?.recognitionCtor){A_({kind:"error",title:k_?.title||"Voice input unavailable",detail:k_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let T=new k_.recognitionCtor;if(c_.current=T,M1.current=String(o0||""),H1.current="",_1.current="",M$.current="",y$.current=!1,T.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",T.interimResults=!0,T.continuous=!1,"maxAlternatives"in T)T.maxAlternatives=1;T.onstart=()=>{A_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},T.onresult=(h)=>{let{finalText:i,interimText:K0}=Tq(h?.results,h?.resultIndex||0);if(i)H1.current=`${H1.current} ${i}`.trim();_1.current=K0,t8(),A_({kind:"listening",title:"Listening…",detail:K0?`Heard: ${K0}`:"Speak now. Tap the mic again to stop."})},T.onerror=(h)=>{let i=String(h?.error||"").trim();if(M$.current=i,c_.current=null,_1.current="",i==="aborted"){c1();return}A_({kind:"error",title:"Voice input failed",detail:P9(i,k_)})},T.onend=()=>{let h=M$.current,i=y$.current,K0=Boolean(H1.current.trim()||_1.current.trim());if(c_.current=null,y$.current=!1,M$.current="",_1.current.trim())H1.current=`${H1.current} ${_1.current}`.trim(),_1.current="";if(K0)t8(H1.current,"");if(h&&h!=="aborted")return;if(!K0&&!i){A_({kind:"error",title:"No speech detected",detail:P9("no-speech",k_)});return}c1()},A_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),a8(),T.start()}catch(T){c_.current=null,A_({kind:"error",title:"Voice input failed",detail:T?.message||"Could not start native browser speech recognition."})}},[t8,c1,o0,a8,k_,h1]),jF=(T)=>{let h=T?.command?.model_label;if(h)return h;let i=T?.command?.message;if(typeof i==="string"){let K0=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(K0?.[1])return K0[1].trim()}return null},dj=async(T)=>{if(j||N0)return;g_(null),I_(null),y0(!0);try{let h=await z1("default",T,null,[],null,X0),i=jF(h);return J0({model:i??D??null,thinking_level:h?.command?.thinking_level,thinking_level_label:h?.command?.thinking_level_label,supports_thinking:h?.command?.supports_thinking}),await I9(w4,X0,J0),I_(xq(T,h)),_?.(h),!0}catch(h){return console.error("Failed to switch model:",h),alert("Failed to switch model: "+h.message),!1}finally{y0(!1)}},GF=(T)=>{if(T.pointerType==="mouse")return;let h=B_.current?.value??(j?Z_:o0);if(!Iq(T,h,{searchMode:j,speechButtonVisible:I1,speechButtonActive:I$,canStartSpeech:Boolean(k_?.canStart&&k_?.recognitionCtor)}))return;T.preventDefault(),$$.current=!0,M_.current=!0,e8()},_3=(T)=>{if(!$$.current)return;if(T?.preventDefault?.(),$$.current=!1,c_.current)h1()},ZF=(T)=>{if(M_.current){M_.current=!1,T.preventDefault();return}e8()},XF=async()=>{await dj("/cycle-model")},$3=async(T)=>{let h=typeof T==="string"?T:typeof T?.label==="string"?T.label:"";if(!h||N0)return;let i=Cq(T,x);if(i.blocked){g_(null),I_(i.note);return}if(await dj(`/model ${h}`))M0(!1)},YF=(T)=>{if(!T||T.disabled)return;if(T.type==="session"){let h=T.chat;if(h?.archived_at)cj(h.chat_jid);else mj(h.chat_jid);return}if(T.type==="action"){if(T.action==="new"){lj();return}if(T.action==="new-root"){pj();return}if(T.action==="rollup"){rj();return}if(T.action==="rename"){hj();return}if(T.action==="delete")nj()}},qF=(T)=>{T.preventDefault(),T.stopPropagation(),t_.current={value:"",updatedAt:0},m0(!1),M0((h)=>!h)},VF=async()=>{if(j)return;A?.(),await e4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},QF=(T)=>{if(T==="queue"||T==="steer"||T==="auto")return T;return G0?"queue":void 0},e4=async(T,h,i={})=>{let K0=typeof T==="string"?T:o0;if(/^\/settings\s*$/i.test(K0.trim())){F_(""),requestAnimationFrame(()=>C0()),o1();return}if(/^\/help\s*$/i.test(K0.trim())){F_(""),requestAnimationFrame(()=>C0()),o1({section:"keyboard"});return}let{includeMedia:R0=!0,includeFileRefs:K_=!0,includeFolderRefs:d_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:f1=!0,recordHistory:y1=!0}=i||{},ij=typeof T==="string"?T:T&&typeof T?.target?.value==="string"?T.target.value:o0,oj=typeof ij==="string"?ij:"";if(!oj.trim()&&(R0?I0.length===0:!0)&&(K_?V.length===0:!0)&&(d_?L.length===0:!0)&&(h_?U.length===0:!0))return;if(c_.current)h1();c1(),E_(!1),N_([]),j0(!1),q0([]),m0(!1),g_(null),I_(null);let l6=R0?[...I0]:[],p6=K_?[...V]:[],r6=d_?[...L]:[],n6=h_?[...U]:[],N4=oj.trim();if(y1&&N4){let F4=x$.current,K1=p4(F4.filter((G3)=>G3!==N4));if(K1.push(N4),K1.length>200)K1.splice(0,K1.length-200);x$.current=K1,w$(K1),v1.current=-1,m1.current=""}let kF=()=>{if(R0)r0([...l6]);if(K_)V0?.(p6);if(d_)Q0?.(r6);if(h_)z0?.(n6);F_(N4),requestAnimationFrame(()=>C0())};if(f1)F_(""),r0([]),K?.(),B?.(),H?.();(async()=>{try{let F4=await _0?.({content:N4,submitMode:h,fileRefs:p6,folderRefs:r6,messageRefs:n6,mediaFiles:l6});if(F4){_?.(F4);return}let K1=[];for(let L$ of l6){let d6=await z7(L$);K1.push(d6.id)}let G3=p6.length?`Files:
${p6.map((L$)=>`- ${L$}`).join(`
`)}`:"",MF=r6.length?`Folders:
${r6.map((L$)=>`- ${L$}`).join(`
`)}`:"",yF=n6.length?`Referenced messages:
${n6.map((L$)=>`- message:${L$}`).join(`
`)}`:"",TF=K1.length?`Attachments:
${K1.map((L$,d6)=>{let xF=l6[d6]?.name||`attachment-${d6+1}`;return`- attachment:${L$} (${xF})`}).join(`
`)}`:"",wF=[N4,G3,MF,yF,TF].filter(Boolean).join(`

`),b$=await z1("default",wF,null,K1,QF(h),X0);if(E0?.(b$),b$?.command)J0({model:b$.command.model_label??D??null,thinking_level:b$.command.thinking_level,thinking_level_label:b$.command.thinking_level_label,supports_thinking:b$.command.supports_thinking}),await I9(w4,X0,J0);I_(xq(N4,b$)),_?.(b$)}catch(F4){if(f1)kF();let K1=F4?.message||"Failed to send message.";g_(K1),s?.(K1),console.error("Failed to post:",F4)}})()},LF=(T)=>{p?.(T)},KF=R((T)=>{jz({queuedItem:T,onRemoveQueuedFollowup:e,setSubmitError:g_,setSubmitNotice:I_,setMediaFiles:r0,onSetFileRefs:V0,onSetFolderRefs:Q0,onSetMessageRefs:z0,setContent:F_,textareaRef:B_,resizeTextarea:C0})},[e,V0,Q0,z0,C0]),p5=R((T)=>{if(j||!A0&&!T0||T?.isComposing)return!1;let h=()=>{T.preventDefault?.(),T.stopPropagation?.()},i=()=>{t_.current={value:"",updatedAt:0}};if(T.key==="Escape"){if(h(),i(),A0)M0(!1);if(T0)m0(!1);return!0}if(A0){if(T.key==="ArrowDown"){if(h(),i(),S0.length>0)x0((K0)=>(K0+1)%S0.length);return!0}if(T.key==="ArrowUp"){if(h(),i(),S0.length>0)x0((K0)=>(K0-1+S0.length)%S0.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&S0.length>0)return h(),i(),$3(S0[Math.max(0,Math.min(e0,S0.length-1))]),!0;if(k6(T)&&S0.length>0){h();let K0=z9(t_.current,T.key);t_.current=K0;let R0=J9(S0,K0.value,e0,(K_)=>dO(K_));if(R0>=0)x0(R0);return!0}}if(T0){if(T.key==="ArrowDown"){if(h(),i(),n_.length>0)D_((K0)=>(K0+1)%n_.length);return!0}if(T.key==="ArrowUp"){if(h(),i(),n_.length>0)D_((K0)=>(K0-1+n_.length)%n_.length);return!0}if((T.key==="Enter"||T.key==="Tab")&&n_.length>0)return h(),i(),YF(n_[Math.max(0,Math.min(w0,n_.length-1))]),!0;if(k6(T)&&n_.length>0){h();let K0=z9(t_.current,T.key);t_.current=K0;let R0=J9(n_,K0.value,w0,(K_)=>K_.label);if(R0>=0)D_(R0);return!0}}return!1},[j,A0,T0,S0,e0,n_,w0,$3]),BF=(T)=>{if(T.isComposing)return;if(j&&T.key==="Escape"){T.preventDefault(),v0(""),q?.();return}if(p5(T))return;let h=B_.current?.value??(j?Z_:o0);if(Iq(T,h,{searchMode:j,speechButtonVisible:I1,speechButtonActive:I$,canStartSpeech:Boolean(k_?.canStart&&k_?.recognitionCtor)})){T.preventDefault(),$$.current=!0,e8();return}if(Jq(T,h,{searchMode:j,showSessionSwitcherButton:V$})){T.preventDefault(),Q$();return}if(o&&f_.length>0){let i=B_.current?.value??(j?Z_:o0);if(!String(i||"").match(/^@([a-zA-Z0-9_-]*)$/))j0(!1),q0([]);else{if(T.key==="ArrowDown"){T.preventDefault(),r((K0)=>(K0+1)%f_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),r((K0)=>(K0-1+f_.length)%f_.length);return}if(T.key==="Tab"||T.key==="Enter"){T.preventDefault(),$1(f_[v]);return}if(T.key==="Escape"){T.preventDefault(),j0(!1),q0([]);return}}}if(P_&&U_.length>0){let i=B_.current?.value??(j?Z_:o0);if(!String(i||"").startsWith("/"))E_(!1),N_([]);else{if(T.key==="ArrowDown"){T.preventDefault(),x_((K0)=>(K0+1)%U_.length);return}if(T.key==="ArrowUp"){T.preventDefault(),x_((K0)=>(K0-1+U_.length)%U_.length);return}if(T.key==="Tab"){T.preventDefault(),a0(U_[J_]);return}if(T.key==="Enter"&&!T.shiftKey){if(!h.includes(" ")){T.preventDefault();let R0=U_[J_];E_(!1),N_([]),e4(R0.name);return}}if(T.key==="Escape"){T.preventDefault(),E_(!1),N_([]);return}}}if(!j&&(T.key==="ArrowUp"||T.key==="ArrowDown")&&!T.metaKey&&!T.ctrlKey&&!T.altKey&&!T.shiftKey){let i=B_.current;if(!i)return;let K0=i.value||"",R0=i.selectionStart===0&&i.selectionEnd===0,K_=i.selectionStart===K0.length&&i.selectionEnd===K0.length;if(T.key==="ArrowUp"&&R0||T.key==="ArrowDown"&&K_){let d_=x$.current;if(!d_.length)return;T.preventDefault();let h_=v1.current;if(T.key==="ArrowUp"){if(h_===-1)m1.current=K0,h_=d_.length-1;else if(h_>0)h_-=1;v1.current=h_,g$(d_[h_]||"")}else{if(h_===-1)return;if(h_<d_.length-1)h_+=1,v1.current=h_,g$(d_[h_]||"");else v1.current=-1,g$(m1.current||""),m1.current=""}requestAnimationFrame(()=>{let f1=B_.current;if(!f1)return;let y1=f1.value.length;f1.selectionStart=y1,f1.selectionEnd=y1});return}}if(T.key==="Enter"&&!T.shiftKey&&(T.ctrlKey||T.metaKey)){if(T.preventDefault(),j){if(h.trim())Z?.(h.trim(),G,{images:O0,attachments:d0})}else e4(h,"steer");return}if(T.key==="Enter"&&!T.shiftKey){if(T.preventDefault(),j){if(h.trim())Z?.(h.trim(),G,{images:O0,attachments:d0})}else e4(h);return}if(T.key==="Escape"){if(A0||T0||P_||o)return;T.preventDefault(),B_.current?.blur()}},NF=(T)=>{if(vO(T,$$.current)){if(T.preventDefault(),$$.current=!1,c_.current)h1()}},j3=(T)=>{let h=Array.from(T||[]).filter((i)=>i instanceof File&&!String(i.name||"").startsWith(".DS_Store"));if(!h.length)return;r0((i)=>[...i,...h]),g_(null)},FF=(T)=>{j3(T.target.files),T.target.value=""},UF=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),V1.current+=1,Q_(!0)},DF=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)Q_(!1)},HF=(T)=>{if(j)return;if(T.preventDefault(),T.stopPropagation(),T.dataTransfer)T.dataTransfer.dropEffect="copy";Q_(!0)},EF=(T)=>{if(j)return;T.preventDefault(),T.stopPropagation(),V1.current=0,Q_(!1),j3(T.dataTransfer?.files||[])},WF=(T)=>{if(j)return;let h=T.clipboardData?.items;if(!h||!h.length)return;let i=[];for(let K0 of h){if(K0.kind!=="file")continue;let R0=K0.getAsFile?.();if(R0)i.push(R0)}if(i.length>0)T.preventDefault(),j3(i)},OF=(T)=>{r0((h)=>h.filter((i,K0)=>K0!==T))},zF=()=>{g_(null),r0([]),K?.(),B?.(),H?.()},JF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((T)=>{let{latitude:h,longitude:i,accuracy:K0}=T.coords,R0=`${h.toFixed(5)}, ${i.toFixed(5)}`,K_=Number.isFinite(K0)?` ±${Math.round(K0)}m`:"",d_=`https://maps.google.com/?q=${h},${i}`,h_=`Location: ${R0}${K_} ${d_}`;$F(h_)},(T)=>{let h=T?.message||"Unable to retrieve location.";alert(`Location error: ${h}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!A0)return;t_.current={value:"",updatedAt:0},n(!0),w4(X0).then((T)=>{n0(Rq(T)),J0(T)}).catch((T)=>{console.warn("Failed to load model list:",T),n0([])}).finally(()=>{n(!1)})},[A0,D]),u(()=>{if(j)M0(!1),m0(!1),E_(!1),N_([]),j0(!1),q0([])},[j]),u(()=>{if(T0&&!V$)m0(!1)},[T0,V$]),u(()=>{if(!A0)return;let T=S0.findIndex((h)=>h?.label===D);x0(T>=0?T:0)},[A0,S0,D]),u(()=>{if(!T0)return;D_(gO(n_,X0)),t_.current={value:"",updatedAt:0}},[T0,X0,n_]),u(()=>{if(!A0)return;let T=(h)=>{let i=b1.current,K0=k1.current,R0=h.target;if(i&&i.contains(R0))return;if(K0&&K0.contains(R0))return;M0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[A0]),u(()=>{if(!T0)return;let T=(h)=>{let i=_$.current,K0=h4.current,R0=h.target;if(i&&i.contains(R0))return;if(K0&&K0.contains(R0))return;m0(!1)};return document.addEventListener("pointerdown",T),()=>document.removeEventListener("pointerdown",T)},[T0]),u(()=>{if(j||!A0&&!T0)return;let T=(h)=>{p5(h)};return document.addEventListener("keydown",T,!0),()=>document.removeEventListener("keydown",T,!0)},[j,A0,T0,p5]),u(()=>{if(!A0)return;let T=b1.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,e0,S0]),u(()=>{if(!T0)return;let T=_$.current;T?.focus?.(),T?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[T0,w0,n_.length]),u(()=>{if(!o||!D1.current)return;D1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[o,v,f_.length]),u(()=>{if(!P_||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[P_,J_,U_.length]),u(()=>{let T=(i)=>{if(!i||typeof i!=="object")return!1;if(i.isContentEditable)return!0;if(typeof i.closest!=="function")return!1;return Boolean(i.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},h=(i)=>{if(i.ctrlKey||i.metaKey||i.altKey)return;let K0=B_.current;if(!K0)return;let R0=document.activeElement===K0;if(i.key==="Escape"&&!R0&&!T(i.target)){i.preventDefault(),K0.focus();return}if(i.key==="/"&&!R0&&!T(i.target))i.preventDefault(),g$("/"),requestAnimationFrame(()=>{K0.focus(),K0.selectionStart=1,K0.selectionEnd=1,H0("/")})};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]),u(()=>{let T=()=>{let K_=k$.current?.clientWidth||0;R_((d_)=>d_===K_?d_:K_)};T();let h=k$.current,i=0,K0=()=>{if(i)cancelAnimationFrame(i);i=requestAnimationFrame(()=>{i=0,T()})},R0=null;if(h&&typeof ResizeObserver<"u")R0=new ResizeObserver(()=>K0()),R0.observe(h);if(typeof window<"u")window.addEventListener("resize",K0);return()=>{if(i)cancelAnimationFrame(i);if(R0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",K0)}},[j,D,b_?.agent_name,V$,x?.percent]);let AF=(T)=>{let h=T.target.value;if(c_.current&&T?.isTrusted)h1();if(g_(null),I_(null),W_.kind==="guidance"||W_.kind==="error")c1();if(T0)m0(!1);if(C0(T.target),M9(h,{searchMode:j,showSessionSwitcherButton:V$})){g$(""),requestAnimationFrame(()=>{let i=B_.current;if(!i)return;i.value="",i.selectionStart=0,i.selectionEnd=0,i.focus()}),Q$();return}g$(h)};return u(()=>{requestAnimationFrame(()=>C0())},[o0,Z_,j]),u(()=>{if(!j)return;if(c_.current)h1();return},[j,h1]),u(()=>{if(c_.current)h1();c1()},[X0,c1,h1]),u(()=>{return()=>{if(!c_.current)return;try{c_.current.stop()}catch(T){console.debug("[compose] failed to stop speech recognition during cleanup",T)}c_.current=null}},[]),u(()=>{if(!L1)return;m_(Date.now());let T=setInterval(()=>m_(Date.now()),1000);return()=>clearInterval(T)},[L1,i0?.started_at,i0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let T=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,h=setInterval(()=>{s_((i)=>(i+1)%E1.frames.length)},T);return()=>clearInterval(h)},[E1]),u(()=>{if(j)return;p_(o0)},[m6,X0,o0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${S_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${w9({pulsing:d4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&F`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${f0&&!j&&F`
                <${R9}
                    items=${c}
                    onInjectQueuedFollowup=${LF}
                    onRemoveQueuedFollowup=${e}
                    onMoveQueuedFollowup=${m}
                    onReturnQueuedFollowup=${KF}
                    onOpenFilePill=${b}
                />
            `}
            ${C1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${C1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${C1.indicatorText}</span>`:C1.animateSpinner?F`<div class="compose-inline-status-spinner" aria-hidden="true"></div>`:C1.animateDot?F`<span class=${w9({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${C1.title}</span>
                    </div>
                </div>
            `}
            ${i0&&!L1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${q4||""}
                >
                    <div class="compose-inline-status-row">
                        <div class="compose-inline-status-spinner" aria-hidden="true"></div>
                        <span class="compose-inline-status-title">${P$}</span>
                        ${V4&&F`<span class="compose-inline-status-elapsed">${V4}</span>`}
                    </div>
                    ${q4&&F`<div class="compose-inline-status-detail">${q4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${z_?" drag-active":""}`}
                onDragEnter=${UF}
                onDragOver=${HF}
                onDragLeave=${DF}
                onDrop=${EF}
            >
                ${V$&&F`
                    <div
                        ref=${h4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${T0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${vj}
                            title=${b_?.chat_jid||X0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${T0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${Q4&&F`
                        <div class="compose-file-refs">
                            ${U.map((T)=>{return F`
                                    <${q1}
                                        key=${"msg-"+T}
                                        prefix="compose"
                                        label=${"msg:"+T}
                                        title=${"Message reference: "+T}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(T)}
                                    />
                                `})}
                            ${V.map((T)=>{let h=T.split("/").pop()||T;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${h}
                                        title=${T}
                                        onClick=${()=>b?.(T)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>Q?.(T)}
                                    />
                                `})}
                            ${L.map((T)=>{let h=T.split("/").pop()||T;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${h}
                                        title=${T}
                                        icon="folder"
                                        onClick=${()=>b?.(T)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>N?.(T)}
                                    />
                                `})}
                            ${I0.map((T,h)=>{let i=T?.name||`attachment-${h+1}`;return F`
                                    <${q1}
                                        key=${i+h}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>OF(h)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${zF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${B_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Z_:o0}
                        onInput=${AF}
                        onKeyDown=${BF}
                        onKeyUp=${NF}
                        onPaste=${WF}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${o&&f_.length>0&&F`
                        <div class="slash-autocomplete" ref=${D1}>
                            ${f_.map((T,h)=>F`
                                <div
                                    key=${T.chat_jid||T.agent_name}
                                    class=${`slash-item${h===v?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),$1(T)}}
                                    onMouseEnter=${()=>r(h)}
                                >
                                    <span class="slash-name">@${T.agent_name}</span>
                                    <span class="slash-desc">${T.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P_&&U_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${U_.map((T,h)=>F`
                                <div
                                    key=${T.name}
                                    class=${`slash-item${h===J_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),a0(T)}}
                                    onMouseEnter=${()=>x_(h)}
                                >
                                    <span class="slash-name">${T.name}</span>
                                    <span class="slash-desc">${T.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${A0&&!j&&F`
                        <div class="compose-model-popup" ref=${b1} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${__&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!__&&S0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!__&&S0.map((T,h)=>{let i=typeof T?.label==="string"?T.label:"",K0=f9(T?.contextWindow),R0=T?.name||null,K_=Cq(T,x);return F`
                                        <button
                                            key=${i}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${e0===h?" active":""}${D===i?" current-model":""}${K_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{$3(T)}}
                                            disabled=${N0||K_.blocked}
                                            title=${[i,R0,K0,K_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${rO(i,T?.contextWindow)}${R0?F` <span class="compose-model-popup-model-subtitle">${R0}</span>`:""}</span>
                                                ${K_.blocked&&F`<span class="compose-model-popup-model-note">${K_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{XF()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${T0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${_$} tabIndex="-1" onKeyDown=${p5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!R$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${R$&&L4.map((T,h)=>{let i=Boolean(T.archived_at),K0=T.chat_jid===(T.root_chat_jid||T.chat_jid),R0=!K0&&!T.is_active&&!i&&typeof G_==="function",K_=i&&c6,d_=_8(T,{currentChatJid:X0});return F`
                                        <div key=${T.chat_jid} class=${`compose-model-popup-item-row${i?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${i?" archived":""}${w0===h?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(i){cj(T.chat_jid);return}mj(T.chat_jid)}}
                                                disabled=${i?!u$:!S$}
                                                title=${i?`Restore archived ${`@${T.agent_name}`}`:`Switch to ${`@${T.agent_name}`}`}
                                            >
                                                <span style=${uO(T)?"font-weight:700":""}>${d_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${T.agent_name} in new window`}
                                                aria-label=${`Open @${T.agent_name} in new window`}
                                                onClick=${(h_)=>{h_.stopPropagation(),m0(!1);let f1=new URL(window.location.href);f1.searchParams.set("chat_jid",T.chat_jid),f1.searchParams.set("chat_only","1");let y1=document.createElement("a");y1.href=f1.toString(),y1.target="_blank",y1.rel="noopener",y1.style.display="none",document.body.appendChild(y1),y1.click(),y1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(R0||K_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${K_?K0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${K_?K0?`Permanently delete archived session @${T.agent_name}`:`Permanently delete archived branch @${T.agent_name}`:`Delete @${T.agent_name}`}
                                                    onClick=${(h_)=>{if(h_.stopPropagation(),m0(!1),K_){c0?.(T.chat_jid);return}G_(T.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(Y$||K4||X$||q$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${n_.findIndex((T)=>T.key==="action:new")===w0?" active":""}`}
                                            onClick=${()=>{lj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${K4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((T)=>T.key==="action:new-root")===w0?" active":""}`}
                                            onClick=${()=>{pj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${P1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((T)=>T.key==="action:rollup")===w0?" active":""}`}
                                            onClick=${()=>{rj()}}
                                            title=${B4?`Merge this branch into ${P1.agent_name?`@${P1.agent_name}`:P1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!B4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${n_.findIndex((T)=>T.key==="action:rename")===w0?" active":""}`}
                                            onClick=${(T)=>{hj(T)}}
                                            title="Rename the current session"
                                            disabled=${t4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${q$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${n_.findIndex((T)=>T.key==="action:delete")===w0?" active":""}`}
                                            onClick=${()=>{nj()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${k$}>
                    ${G$.show&&F`
                        <span class="compose-connection-status connection-status ${G$.statusClass}" title=${f$}>
                            ${e_}
                        </span>
                    `}
                    ${L0&&F`
                    <div class="compose-meta-row">
                        ${c5&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${F0}
                                    aria-label="Open model picker"
                                    onClick=${qF}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":h5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&d&&F`
                                        <span class="compose-model-usage-hint" title=${F0}>
                                            ${d}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&F`
                            <${lO}
                                usage=${x}
                                onCompact=${VF}
                                compactionLabel=${L1?V4||"0:00":""}
                                compactionTitle=${L1?P$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&F`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(T)=>X?.(T.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${O0} onChange=${()=>q_((T)=>!T)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${d0} onChange=${()=>H_((T)=>!T)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${D0==="and"?"active":""}`}
                            onClick=${()=>{let T=D0==="or"?"and":"or";u0(T),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:T})}).catch((h)=>{})}}
                            title=${D0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${D0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${b5&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${JF}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${I1&&F`
                        <button
                            class=${`icon-btn voice-input-btn${I$?" active":""}${k_.mode==="fallback"?" fallback":""}`}
                            onClick=${ZF}
                            onPointerDown=${GF}
                            onPointerUp=${_3}
                            onPointerCancel=${_3}
                            onPointerLeave=${_3}
                            title=${i4}
                            aria-label=${i4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${o4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${s4?" active":""}`}
                            onClick=${y}
                            title=${m5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${C&&f&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${f}
                                title=${`Attach open file: ${C}`}
                                type="button"
                                disabled=${V.includes(C)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${FF} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${a4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{e4()}}
                                    disabled=${a4.disabled}
                                    title=${a4.title}
                                    aria-label=${a4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${Z$&&F`
                                    <button 
                                        class=${Z$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(cO(Z$.mode))e4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${Z$.disabled}
                                        title=${Z$.title}
                                        aria-label=${Z$.ariaLabel}
                                    >
                                        ${Z$.mode==="compacting"?F`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:F`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}k0();function bq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}k0();function vq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function mq(_){return String(_||"").trim()||"web:default"}function cq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function hq(_){if(!_)return!1;return _.status!=="running"}function lq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function pq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?G6(_.thinking):"",q=_?.answer?Z1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)E$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),u(()=>{if(X.current&&q)E$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[q]),!_)return null;let V=_.status==="running",Q=Boolean(String(_.answer||"").trim()),K=Boolean(String(_.thinking||"").trim()),L=cq(_),N=hq(_),B=!V&&Q,U=V?"Thinking…":_.status==="error"?"Error":"Done";return F`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&F`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&F`<div class="btw-block btw-error">${_.error}</div>`}
            ${K&&F`
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${L&&F`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${N&&F`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&F`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}k0();function S9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function u9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function Gz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function Zz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function e$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function X_(_){return typeof _==="string"&&_.trim()?_.trim():null}function nq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var dq="__PICLAW_WIDGET_HOST__:";function rq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function g9(_,$){if(!_||_.type!=="generated_widget")return null;let j=Gz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:nq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function iq(_){if(!_||typeof _!=="object")return null;let $=Zz(_),j=X_(_?.widget_id)||X_(_?.widgetId)||X_(_?.tool_call_id)||X_(_?.toolCallId),G=X_(_?.tool_call_id)||X_(_?.toolCallId),Z=X_(_?.turn_id)||X_(_?.turnId),X=X_(_?.title)||X_(_?.name)||"Generated widget",Y=X_(_?.subtitle)||"",q=X_(_?.description)||Y,V=X_(_?.status),Q=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:X,subtitle:Y,description:q,originPostId:e$(_?.origin_post_id)??e$(_?.originPostId),originChatJid:X_(_?.origin_chat_jid)||X_(_?.originChatJid)||X_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:nq(_?.capabilities,!0),source:"live",status:Q,turnId:Z,toolCallId:G,width:e$(_?.width),height:e$(_?.height),error:X_(_?.error)}}function oq(_){return g9(_,null)!==null}function N1(_){let $=X_(_?.toolCallId)||X_(_?.tool_call_id);if($)return $;let j=X_(_?.widgetId)||X_(_?.widget_id);if(j)return j;let G=e$(_?.originPostId)??e$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function sq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function aq(_){return sq(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function G8(_){return{title:X_(_?.title)||"Generated widget",widgetId:X_(_?.widgetId)||X_(_?.widget_id),toolCallId:X_(_?.toolCallId)||X_(_?.tool_call_id),turnId:X_(_?.turnId)||X_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:X_(_?.status)||"final"}}function Z8(_){return{...G8(_),subtitle:X_(_?.subtitle)||"",description:X_(_?.description)||"",error:X_(_?.error)||null,width:e$(_?.width),height:e$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function X8(_){return`${dq}${JSON.stringify(Z8(_))}`}function tq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=X_(_.text)||X_(_.content)||X_(_.message)||X_(_.prompt)||X_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=X_(j.text)||X_(j.content)||X_(j.message)||X_(j.prompt)||X_(j.value);if(G)return G}return null}function eq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function _V(_){let $=X_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return X_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function Xz(_){let $=G8(_);return`<script>
(function () {
  const meta = ${rq($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${rq(dq)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function $V(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=sq(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),Q=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,K=q?Xz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${V}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${K}
</head>
<body>${Q}</body>
</html>`}k0();function Yz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let V=Y.parentId?$.get(Y.parentId):null;if(V)V.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let V of Y.children)V.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let V=Y.children.length-1;V>=0;V--)Y.children[V].depth=q?Y.depth+1:Y.depth,X.push(Y.children[V])}return Z}function qz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function jV(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function y5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function Vz(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function Qz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function GV(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function Lz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((V)=>V?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function Kz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=GV(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function ZV({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=P(()=>({loading:!j,error:null,data:j})),[V,Q]=P(()=>j?.leafId||null),[K,L]=P(""),N=g(null),B=g(null),U=g(j?.leafId||null),E=g(null),H=g(""),D=async()=>{q((M)=>({...M,loading:!0,error:null}));try{let M=G?`?chat_jid=${encodeURIComponent(G)}`:"",W=await fetch(`/agent/session-tree${M}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),y=await W.json().catch(()=>({}));if(!W.ok)throw Error(y?.error||`HTTP ${W.status}`);q({loading:!1,error:null,data:y})}catch(M){q((W)=>({loading:!1,error:M?.message||"Failed to load tree.",data:W?.data||j||null}))}};E.current=D,u(()=>{D()},[G]);let k=Y0(()=>{let M=Y.data;if(!M||!Array.isArray(M.nodes)||M.nodes.length===0)return[];return qz(M.flat?Yz(M.nodes):M.nodes)},[Y.data]);u(()=>{let M=Lz(k,V,U.current,Y.data?.leafId||null);if(M!==V)Q(M);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,V,Y.data?.leafId]);let z=Y0(()=>{let M=(K||"").trim().toLowerCase();if(!M)return k;return k.filter((W)=>{return[W.preview,W.toolInput,W.toolInputFull,W.detail,W.toolName,W.role,W.id,W.resultDetail,W.type,W.label].some((w)=>typeof w==="string"&&w.toLowerCase().includes(M))})},[k,K]),O=Y0(()=>z.find((M)=>M.id===V)||null,[z,V]),I=Y0(()=>Kz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[V,Y.data?.leafId,z.length]),u(()=>{let M=GV(X?.preview);if(M?.targetId)U.current=M.targetId;let W=I?.refreshDelays||[];if(!W.length)return;let y=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(H.current===y)return;H.current=y;let w=W.map((J)=>setTimeout(()=>E.current?.(),J));return()=>w.forEach((J)=>clearTimeout(J))},[G,X?.type,X?.submittedAt,X?.preview,I?.refreshDelays]);let x=(M=!1)=>{let W=O?.id,y=Qz(W,M);if(!y)return;U.current=y.navigateTargetId,$?.({kind:"widget.submit",payload:y},_)},A=I?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>D()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${N}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${K}
                        onInput=${(M)=>L(M.currentTarget.value)}
                        onKeyDown=${(M)=>{if(M.key==="Escape")L(""),M.currentTarget.blur()}}
                    />
                    ${K&&F`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${I?.text&&F`<span class=${`session-tree-host-update ${A}`}>${I.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&z.length===0&&!K&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!K&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&K&&F`<div class="session-tree-empty">No entries match \u201c${K}\u201d</div>`}
                    ${z.map((M)=>{let W=V===M.id,y=`st-row${M.active?" active":""}${W?" selected":""}`,w=(M.children||[]).length>1,J=Vz(M);return F`
                            <button key=${M.id} ref=${M.active||W?B:null}
                                class=${y} type="button" role="treeitem" aria-selected=${W}
                                onClick=${()=>Q(M.id)}>
                                <span class="st-indent" style=${`width:${(M.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${M.active?" active":w?" branch":""}`}></span>
                                <span class=${`st-tag ${J.tagClass}`}>${J.tag}</span>
                                <span class="st-text">${J.text}</span>
                                ${M.merged&&M.resultLength>0&&F`<span class="st-size">${jV(M.resultLength)}</span>`}
                                ${!M.merged&&M.contentLength>3000&&F`<span class="st-size">${jV(M.contentLength)}</span>`}
                                ${M.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${M.label&&F`<span class="st-label">${M.label}</span>`}
                                ${M.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${O?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${O.id}${O.resultId?` → ${O.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${O.role||O.type||"entry"}${O.toolName?` → ${O.toolName}`:""}${O.merged?" (merged)":""}</div>
                        </div>
                        ${O.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${O.toolInputFull}</pre>
                            </div>
                        `}
                        ${O.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${O.resultLength?` (${y5(O.resultLength)})`:""}</div>
                                <pre class="st-side-code">${O.resultDetail}</pre>
                            </div>
                        `}
                        ${O.detail&&!O.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${O.role==="toolResult"?"Output":"Content"}${O.contentLength?` (${y5(O.contentLength)})`:""}</div>
                                <pre class="st-side-code">${O.detail}</pre>
                            </div>
                        `}
                        ${O.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${O.rawContentLength?` (${y5(O.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${O.rawDetail}</pre>
                            </div>
                        `}
                        ${O.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(O.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(O.contentLength>0||O.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${O.contentLength>0&&F`<span class="st-pill">${y5(O.contentLength)} content</span>`}
                                    ${O.hasThinking&&F`<span class="st-pill thinking">${y5(O.thinkingLength)} thinking</span>`}
                                    ${O.merged&&O.resultLength>0&&F`<span class="st-pill">${y5(O.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function Bz(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function Nz(_=!1){return`floating-widget-pane${_?" maximized":""}`}function XV({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),[X,Y]=P(!1),q=N1(_),V=Y0(()=>$V(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{Y(!1)},[q]),u(()=>{if(!_)return;let O=(I)=>{if(I.key!=="Escape")return;if(X){Y(!1);return}$?.()};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[X,_,$]),u(()=>{Z.current=!1},[V]),u(()=>{if(!_)return;let O=G.current;if(!O)return;let I=(y)=>{let w=X8(_),J=y==="widget.init"?G8(_):Z8(_);S9(O,w),u9(O,{__piclawGeneratedWidgetHost:!0,type:y,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J})},x=()=>{I("widget.init"),I("widget.update")},A=()=>{Z.current=!0,x()};O.addEventListener("load",A);let W=[0,40,120,300,800].map((y)=>setTimeout(x,y));return()=>{O.removeEventListener("load",A),W.forEach((y)=>clearTimeout(y))}},[V,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let O=G.current;if(!O?.contentWindow)return;let I=X8(_),x=Z8(_);S9(O,I),u9(O,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let O=(I)=>{let x=I?.data;if(!x||x.__piclawGeneratedWidget!==!0)return;let A=G.current,M=N1(_),W=N1({widgetId:x.widgetId,toolCallId:x.toolCallId});if(W&&M&&W!==M)return;if(!W&&A?.contentWindow&&I.source!==A.contentWindow)return;j?.(x,_)};return window.addEventListener("message",O),()=>window.removeEventListener("message",O)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",L=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",U=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",E=B==="live"?`Live widget • ${U.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",H=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",D=!V,k=_V(_),z=aq(_);return F`
        <div class=${Bz(X)} onClick=${()=>$?.()}>
            <section
                class=${Nz(X)}
                aria-label=${L}
                onClick=${(O)=>O.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${E} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${L}</div>
                        ${(N||H)&&F`
                            <div class="floating-widget-subtitle">${N||H}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>Y((O)=>!O)}
                            title=${X?"Exit zen mode":"Enter zen mode"}
                            aria-label=${X?"Exit zen mode":"Enter zen mode"}
                            aria-pressed=${X?"true":"false"}
                        >
                            ${X?"Restore":"Maximize"}
                        </button>
                        <button
                            class="floating-widget-close"
                            type="button"
                            onClick=${()=>$?.()}
                            title="Close widget"
                            aria-label="Close widget"
                        >
                            Close
                        </button>
                    </div>
                </div>
                <div class="floating-widget-body">
                    ${K==="session_tree"?F`<${ZV} widget=${_} onWidgetEvent=${j} />`:D?F`<div class="floating-widget-empty">${k}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${L}
                                    name=${X8(_)}
                                    sandbox=${z}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${V}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}k0();g2();w_();z5();var Fz=new Set,YV=new Set,b9=new Set,R4=new Map,qV=!1,Y8=null;function Uz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function Dz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function VV(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),Fz.add(_.id),!0}function Hz(_){return VV(_)}function Ez(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return i$(_),YV.add(_.id),s7(),()=>{_Y(_.id),YV.delete(_.id),s7()}}function Wz(_){if(typeof _!=="function")return()=>{};return b9.add(_),()=>{b9.delete(_)}}function QV(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...b9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function Oz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return R4.set(_.id,_),()=>{if(R4.get(_.id)===_)R4.delete(_.id)}}function q8(_,$){for(let j of Array.from(R4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function LV(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return R4.get($)?.label||null}function KV(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return R4.get($)?.note||null}function BV(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=R4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function zz(_=typeof window<"u"?window:null){return{registerPane:Hz,registerWorkspacePane:VV,registerSettingsPane:Ez,registerStandaloneTabUrlResolver:Wz,registerAttachmentPreview:Oz,getCurrentChatJid:()=>Uz(_)}}function v9(_=typeof window<"u"?window:null){let $=zz(_);if(!_||qV)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},qV=!0,$}async function NV(_=typeof window<"u"?window:null){if(!_)return;if(Y8)return Y8;return Y8=(async()=>{v9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=Dz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Y8}var Jz=["\t",",",";","|"];function FV(_){return typeof _==="string"?_.trim().toLowerCase():""}function UV(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function DV(_,$){let j=UV(_),G=FV($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".csv")||G.endsWith(".tsv")||G.endsWith(".tab")}function HV(_,$){let j=UV(_),G=FV($);if(j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".tsv")||G.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||G.endsWith(".csv"))return",";return null}function Az(_,$){let j=0,G=!1;for(let Z=0;Z<_.length;Z+=1){let X=_[Z];if(X==='"')if(G&&_[Z+1]==='"')Z+=1;else G=!G;else if(!G&&X===$)j+=1}return j}function kz(_){let $=_.split(/\r?\n/).map((G)=>G.trimEnd()).filter((G)=>G.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let G of Jz){let Z=$.map((V)=>Az(V,G)).filter((V)=>V>0);if(!Z.length)continue;let X=Z.reduce((V,Q)=>V+Q,0)/Z.length,Y=Z.filter((V)=>Math.abs(V-X)<1).length/Z.length,q=X*Y*Z.length;if(q>j.score)j={delimiter:G,score:q}}return j.delimiter}function Mz(_,$,j){let G=[],Z=[],X="",Y=!1,q=!1,V=()=>{Z.push(X),X=""},Q=()=>{if(V(),!(Z.length===1&&Z[0]===""&&G.length>0))G.push(Z);if(Z=[],G.length>=j)q=!0};for(let K=0;K<_.length;K+=1){if(q)break;let L=_[K];if(L==='"')if(Y&&_[K+1]==='"')X+='"',K+=1;else Y=!Y;else if(!Y&&L===$)V();else if(!Y&&(L===`
`||L==="\r")){if(L==="\r"&&_[K+1]===`
`)K+=1;Q()}else X+=L}if(!q&&(X.length>0||Z.length>0))Q();return{rows:G,truncatedRows:q}}function yz(_,$){return _.map((j)=>{let G=j.slice(0,$);while(G.length<$)G.push("");return G})}function EV(_,$={}){let j=Math.max(1,$.maxRows??500),G=Math.max(1,$.maxColumns??80),Z=$.delimiter||kz(_),X=Mz(_,Z,j+1),Y=X.rows.slice(0,j),q=Y.reduce((H,D)=>Math.max(H,D.length),0),V=Math.min(Math.max(1,q),G),Q=q>G,K=yz(Y,V),L=K[0]||[],N=K.slice(1),B=L.some((H)=>H.trim().length>0)&&N.length>0,U=B?L.map((H,D)=>H.trim()||`Column ${D+1}`):Array.from({length:V},(H,D)=>`Column ${D+1}`),E=B?N:K;return{delimiter:Z,headers:U,rows:E,columnCount:V,rowCount:E.length,truncatedRows:X.truncatedRows||X.rows.length>j,truncatedColumns:Q}}var Tz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),wz=new Set(["text/markdown"]),xz=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Iz=new Set(["application/eml","message/rfc822"]);function _4(_){return typeof _==="string"?_.trim().toLowerCase():""}function Cz(_){let $=_4(_);return!!$&&$.endsWith(".eml")}function Pz(_){let $=_4(_);return!!$&&$.endsWith(".pdf")}function fz(_){let $=_4(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var Rz=new Set(["application/zip","application/x-zip-compressed"]);function Sz(_){let $=_4(_);return!!$&&$.endsWith(".zip")}function uz(_){let $=_4(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function gz(_){let $=_4(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function T6(_,$){let j=q8(_,$);if(j?.id)return j.id;let G=_4(_);if(Pz($)||G==="application/pdf")return"pdf";if(fz($)||xz.has(G))return"office";if(Cz($)||Iz.has(G))return"eml";if(Sz($)||Rz.has(G))return"archive";if(uz($)||G==="text/html")return"html";if(DV(G,$))return"delimited";if(gz($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(Tz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function WV(_){let $=_4(_);return wz.has($)}function V8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return LV(_)||"Preview unavailable"}}var bz=new TextDecoder("utf-8",{fatal:!1});function T5(_,$){return _[$]|_[$+1]<<8}function S4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function OV(_,$,j){return bz.decode(_.subarray($,$+j))}function vz(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(S4(_,j)===101010256)return j;return-1}function mz(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(S4(_,G)===117853008)return!0;return!1}function cz(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function hz(_){return String(_||"").replace(/\\/g,"/").trim()}function zV(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function JV(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=vz($);if(j<0)throw Error("ZIP archive directory could not be found.");if(mz($,j))throw Error("ZIP64 archives are not previewable yet.");let G=T5($,j+10),Z=S4($,j+12),X=S4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,V=X+Z;while(q<V){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(S4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let L=T5($,q+8),N=T5($,q+10),B=S4($,q+20),U=S4($,q+24),E=T5($,q+28),H=T5($,q+30),D=T5($,q+32),k=q+46,z=k+E+H,O=z+D;if(O>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let I=(L&2048)===2048,x=hz(OV($,k,E)),A=OV($,z,D),M=x.endsWith("/");if(x)Y.push({path:x,isDirectory:M,compressedSize:B,uncompressedSize:U,compressionMethod:N,comment:I?A:A});q=O}Y.sort((L,N)=>{if(L.isDirectory!==N.isDirectory)return L.isDirectory?-1:1;return L.path.localeCompare(N.path)});let Q=Y.filter((L)=>!L.isDirectory),K=cz(Y);return{entries:Y,summary:{fileCount:Q.length,directoryCount:K.size,totalEntries:Y.length,compressedBytes:Q.reduce((L,N)=>L+N.compressedSize,0),uncompressedBytes:Q.reduce((L,N)=>L+N.uncompressedSize,0)}}}function AV(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var lz="allow-scripts";function pz(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function rz(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function nz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function dz(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function iz(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function oz(_,$=null,j=null,G=null){let Z=_?.metadata?.size,X=_?.content_type||"application/octet-stream",Y=j?.summary||null;return[{label:"Type",value:X},{label:"Syntax",value:$},{label:"Delimiter",value:G?iz(G.delimiter):null},{label:"Rows",value:G?`${G.rowCount}${G.truncatedRows?"+":""}`:null},{label:"Columns",value:G?`${G.columnCount}${G.truncatedColumns?"+":""}`:null},{label:"Entries",value:Y?String(Y.totalEntries):null},{label:"Files",value:Y?String(Y.fileCount):null},{label:"Folders",value:Y?String(Y.directoryCount):null},{label:"Compressed",value:Y?a_(Y.compressedBytes):null},{label:"Uncompressed",value:Y?a_(Y.uncompressedBytes):null},{label:"Savings",value:AV(Y)},{label:"Size",value:typeof Z==="number"?a_(Z):null},{label:"Added",value:_?.created_at?x4(_.created_at):null}].filter((q)=>q.value)}function sz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function az(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=g1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function kV({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>q8($?.content_type,G),[$?.content_type,G]),X=Y0(()=>T6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||V8(X),q=Y0(()=>WV($?.content_type),[$?.content_type]),[V,Q]=P(X==="text"||X==="html"||X==="archive"||X==="delimited"),[K,L]=P(""),[N,B]=P(null),[U,E]=P(null),[H,D]=P(null),[k,z]=P(!1),O=g(null),I=Y0(()=>sz($,G),[$,G]),x=Y0(()=>I?mZ(I):null,[I]),A=Y0(()=>oz($,!q?x:null,N,U),[$,q,x,N,U]),M=Y0(()=>Z?BV(Z.id,_,G):az(_,G,X),[Z,_,G,X]),W=Y0(()=>KV(Z?.id||X),[Z?.id,X]),y=Y0(()=>{if(!q||!K)return"";return Z1(K)},[q,K]),w=Y0(()=>{if(q||!K||!I)return"";return D2(K,I)},[q,K,I]);return u(()=>{let J=(C)=>{if(C.key!=="Escape")return;if(k){z(!1);return}j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[k,j]),u(()=>{if(!O.current||!y)return;E$(O.current);return},[y]),u(()=>{let J=!1;async function C(){if(X!=="text"&&X!=="html"&&X!=="archive"&&X!=="delimited"){Q(!1),D(null),L(""),B(null),E(null);return}Q(!0),D(null),L(""),B(null),E(null);try{let f=await M7(_),b=new Uint8Array(await f.arrayBuffer());if(X==="text"||X==="html"||X==="delimited"){if(X==="text"&&nz($,G)&&!rz(b))throw Error("Attachment does not appear to contain text content.");let p=dz(b);if(!J){if(L(p),X==="delimited")E(EV(p,{delimiter:HV($?.content_type,G)}))}return}let c=JV(b);if(!J)B(c)}catch(f){if(!J){let b=f instanceof Error?f.message:String(f||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${b}`:X==="delimited"?`Failed to load table preview. ${b}`:`Failed to load text preview. ${b}`)}}finally{if(!J)Q(!1)}}return C(),()=>{J=!0}},[_,X,$?.content_type,G]),F`
        <${d$} className="attachment-preview-portal-root">
            <div class=${pz(k)} onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(J)=>{J.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            <button
                                class="attachment-preview-zen"
                                type="button"
                                onClick=${()=>z((J)=>!J)}
                                title=${k?"Exit zen mode":"Enter zen mode"}
                                aria-label=${k?"Exit zen mode":"Enter zen mode"}
                                aria-pressed=${k?"true":"false"}
                            >
                                ${k?"Restore":"Maximize"}
                            </button>
                            ${M&&F`
                                <a
                                    href=${M}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(J)=>J.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${g1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(J)=>J.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${V&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!V&&H&&F`<div class="attachment-preview-state">${H}</div>`}
                        ${!V&&!H&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${g1(_)} alt=${G} />
                        `}
                        ${!V&&!H&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${g1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!V&&!H&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${K||""} sandbox=${lz} title=${G}></iframe>
                        `}
                        ${!V&&!H&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&M&&F`
                            <iframe class="attachment-preview-frame" src=${M} title=${G}></iframe>
                        `}
                        ${!V&&!H&&W&&F`
                            <div class="attachment-preview-readonly-note">${W}</div>
                        `}
                        ${!V&&!H&&X==="delimited"&&U&&F`
                            <div class="attachment-preview-delimited">
                                ${(U.truncatedRows||U.truncatedColumns)&&F`
                                    <div class="attachment-preview-delimited-note">
                                        Showing first ${U.rowCount} rows and ${U.columnCount} columns.
                                        Download the file for the complete dataset.
                                    </div>
                                `}
                                <div class="attachment-preview-delimited-table-wrap">
                                    <table class="attachment-preview-delimited-table">
                                        <thead>
                                            <tr>
                                                ${U.headers.map((J,C)=>F`
                                                    <th key=${`h-${C}`}>${J}</th>
                                                `)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${U.rows.map((J,C)=>F`
                                                <tr key=${`r-${C}`}>
                                                    ${J.map((f,b)=>F`
                                                        <td key=${`c-${C}-${b}`}>${f}</td>
                                                    `)}
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!H&&X==="archive"&&N&&F`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(N.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(N.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${N.entries.map((J)=>F`
                                                <tr key=${J.path}>
                                                    <td class="attachment-preview-archive-name">${J.path}</td>
                                                    <td>${J.isDirectory?"Folder":"File"}</td>
                                                    <td>${J.isDirectory?"—":zV(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!H&&X==="text"&&q&&F`
                            <div
                                ref=${O}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:y}}
                            />
                        `}
                        ${!V&&!H&&X==="text"&&!q&&w&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:w}} /></pre>
                        `}
                        ${!V&&!H&&X==="text"&&!q&&!w&&F`
                            <pre class="attachment-preview-text">${K}</pre>
                        `}
                        ${!V&&!H&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${A.map((J)=>F`
                            <div class="attachment-preview-meta-item" key=${J.label}>
                                <span class="attachment-preview-meta-label">${J.label}</span>
                                <span class="attachment-preview-meta-value">${J.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${d$}>
    `}k0();w_();h2();B9();function tz(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function ez(_){if(!_||typeof _!=="object")return!0;if(tz(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function _J(_){if(!k6(_))return!1;if(!ez(_?.target))return!1;return!o$.some((j)=>J$(_,j.id))}function MV(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function $J(_){let $=[],j=new Map(a$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function yV(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function jJ(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function Q8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function GJ(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function TV({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:V,onToggleTerminalDock:Q,onPrefillCompose:K}){let[L,N]=P(!1),[B,U]=P(""),[E,H]=P(0),[D,k]=P([]),[z,O]=P({workspaceCommands:null,slashCommands:null}),I=g(null),x=g(null),A=R(async()=>{try{let w=await Q6();O(t$(w?.settings))}catch{O({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{A()},[A]),u(()=>{let w=!1;return V6($).then((J)=>{if(w)return;k(Array.isArray(J?.commands)?J.commands:[])}).catch(()=>{if(w)return;k([])}),()=>{w=!0}},[$]);let M=Y0(()=>$J({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:V,onToggleTerminalDock:Q}),[G,q,V,Q,Z,j]),W=Y0(()=>rY({agents:_,workspaceCommands:M,slashCommands:D,settings:z,query:B}),[_,B,z,D,M]);if(u(()=>{if(W.length===0){H(-1);return}if(!B.trim()){H(0);return}let w=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!w){H(0);return}let J=0,C=0;for(let f=0;f<W.length;f++){let b=W[f],c=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(c===w){J=f;break}let p=0;if(c.startsWith(w))p=3;else if(c.includes(w))p=2;else if((b.subtitle||"").toLowerCase().includes(w))p=1;if(p>C)C=p,J=f}H(J)},[W,B]),u(()=>{if(!L)return;requestAnimationFrame(()=>x.current?.focus?.())},[L]),u(()=>{let w=(C)=>{if(!L){if(!_J(C))return;C.preventDefault(),U(String(C.key||"")),H(0),N(!0);return}if(C.key==="Escape"){C.preventDefault(),N(!1),U("");return}if(C.key==="ArrowDown"){C.preventDefault(),H((f)=>W.length>0?(f+1+W.length)%W.length:0);return}if(C.key==="ArrowUp"){C.preventDefault(),H((f)=>W.length>0?(f-1+W.length)%W.length:0);return}if(C.key==="Enter"&&W[E]){C.preventDefault();let f=W[E],b=C.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(b)GJ(f.chatJid);else X?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")Y?.();if(f.commandId==="toggle-chat-only")MV(G);if(f.commandId==="open-terminal-tab")q?.();if(f.commandId==="open-vnc-tab")V?.();if(f.commandId==="toggle-terminal-dock")Q?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)K?.(f.commandName)}N(!1),U("")}},J=(C)=>{if(!L)return;if(I.current?.contains(C.target))return;N(!1),U("")};return window.addEventListener("keydown",w,!0),document.addEventListener("pointerdown",J,!0),()=>{window.removeEventListener("keydown",w,!0),document.removeEventListener("pointerdown",J,!0)}},[G,E,W,q,V,K,X,Q,Y,L]),u(()=>{let w=(J)=>{let C=t$(J?.detail?.settings);if(J?.detail?.settings){O(C);return}A()};return window.addEventListener("focus",w),window.addEventListener("piclaw:quick-actions-settings-updated",w),()=>{window.removeEventListener("focus",w),window.removeEventListener("piclaw:quick-actions-settings-updated",w)}},[A]),!L)return null;let y=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${I}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(w)=>{U(w.currentTarget?.value||""),H(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${Q8("Move","↑↓")}
                                ${Q8("Select","↵")}
                                ${Q8("Pop out","Alt+↵")}
                                ${Q8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${W.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${W.map((w,J)=>{let C=w.kind!==y;return y=w.kind,F`
                                ${C&&F`<div class="timeline-quick-actions-section">${yV(w.kind)}</div>`}
                                <button
                                    key=${w.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${w.kind}${J===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(w.kind==="agent"&&w.chatJid)X?.(w.chatJid);if(w.kind==="workspace"&&w.commandId==="toggle-workspace")Y?.();if(w.kind==="workspace"&&w.commandId==="open-explorer")Y?.();if(w.kind==="workspace"&&w.commandId==="toggle-chat-only")MV(G);if(w.kind==="workspace"&&w.commandId==="open-terminal-tab")q?.();if(w.kind==="workspace"&&w.commandId==="open-vnc-tab")V?.();if(w.kind==="workspace"&&w.commandId==="toggle-terminal-dock")Q?.();if(w.kind==="workspace"&&w.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(w.kind==="slash"&&w.commandName)K?.(w.commandName);N(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${jJ(w)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${w.title}</span>
                                            ${w.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${w.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${w.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${w.categoryLabel||yV(w.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}k0();function wV({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,V]=P(!1),[Q,K]=P({top:8,left:8}),L=g(null),N=g(null),B=g(null);u(()=>{if(typeof document>"u")return;let D=document.createElement("div");return D.className="timeline-menu-portal in-chat",document.body.appendChild(D),B.current=D,()=>{D.remove(),B.current=null}},[]),u(()=>{let D=()=>{if(_){let O=document.querySelector(".workspace-sidebar");if(O){let I=O.getBoundingClientRect();K({top:I.top+8,left:I.left+8})}}else K({top:8,left:8})};D();let k=new ResizeObserver(D),z=document.querySelector(".workspace-sidebar");if(z)k.observe(z);return window.addEventListener("resize",D),()=>{k.disconnect(),window.removeEventListener("resize",D)}},[_]),u(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!B.current)return;let D=B.current.style;D.top=`${Q.top}px`,D.left=`${Q.left}px`,D.right="auto"},[Q]),u(()=>{if(!q)return;let D=(k)=>{if(L.current?.contains(k.target))return;if(N.current?.contains(k.target))return;V(!1)};return document.addEventListener("mousedown",D,!0),()=>document.removeEventListener("mousedown",D,!0)},[q]),u(()=>{if(!q)return;let D=(k)=>{if(k.key==="Escape")V(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[q]),u(()=>{V(!1)},[_]);let U=R((D)=>{V(!1),D?.()},[]),E=R(()=>{let D=new URL(window.location.href);if(j)D.searchParams.delete("chat_only");else D.searchParams.set("chat_only","1");window.location.href=D.toString()},[j]),H=F`
        <button ref=${N} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>V((D)=>!D)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${L} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(E)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&F`<div class="workspace-menu-separator"></div>`}
                ${G&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return G5(()=>{if(B.current)B$(H,B.current)}),null}k0();w_();var xV="PiClaw";function m9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],V=G.trim().toLowerCase(),Q=typeof $==="string"?$.trim():"",K=Q?Q:null,L=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Z,color:q,image:K||(L?"/static/icon-192.png":null)}}function IV(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function CV(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function PV(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",V=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(V&&(q||Y&&Y!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function c9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function ZJ(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function fV(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return ZJ($[1].trim())||null}function RV(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=c9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=c9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=c9(j.command),Y=fV(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let V=fV(q);if(V)return V}return null}k0();var SV={right:"3 2 8 5 3 8",down:"2 3 8 3 5 8",up:"2 7 8 7 5 2",left:"7 2 2 5 7 8"};function uV(_){return _==="down"||_==="up"||_==="left"?_:"right"}function gV(_,$=""){return["ui-disclosure-triangle",`ui-disclosure-triangle-${_}`,$.trim()].filter(Boolean).join(" ")}function s1(_="right",$=""){let j=uV(_);return F`
    <svg class=${gV(j,$)} viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <polygon points=${SV[j]}></polygon>
    </svg>
  `}function h9(_="right",$=""){let j=uV(_);return`<svg class="${gV(j,$)}" viewBox="0 0 10 10" aria-hidden="true" focusable="false"><polygon points="${SV[j]}"></polygon></svg>`}var XJ=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,YJ=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,qJ=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,VJ=1e4,bV=132;function QJ(_,$=bV){let j=Number.isFinite($)&&$>0?Math.floor($):bV;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((G)=>G.length>j?`${G.slice(0,j)}…`:G).join(`
`)}function LJ(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function KJ(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function BJ(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function NJ(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function vV(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return n$(_)!==null}function mV(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&R2(_)!==null}function FJ(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=VJ}function UJ(_,$=Date.now()){if(!vV(_))return null;let j=n$(_);if(j===null||!FJ(j,$))return null;let G=iV(new Date(j).toISOString(),$);return G?`${G} ago`:null}function DJ(_,$=Date.now()){if(!mV(_))return null;if(R2(_)===null)return null;return W6(_,$)}function cV(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function HJ(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function EJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function hV(_){if(!EJ(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if(cV($))return"";return HJ($)}function lV(_,$){let j=typeof _==="string"?_:"",G=typeof $==="string"?$.trim():"";if(!j||!G)return j;let Z=G.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${Z}\\s*$`,"i"),"")}function L8(_){return _?F`<span class="agent-tool-status-pill">${_}</span>`:null}function pV(_){let $=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"";if($)return $;let j=typeof(_?.tool_name||_?.toolName)==="string"?String(_.tool_name||_.toolName).trim():"";if(!j)return"";let[G]=nV(_);return G?`${j}: ${G}`:j}function WJ(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=pV(_),Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G&&cV(Z)?G:G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function OJ(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function zJ(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function rV(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return rV($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function nV(_){let $=rV(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],G=(Z)=>{let X=zJ(Z);if(X&&!j.includes(X))j.push(X)};if(G($.command),Array.isArray($.commands))G($.commands.filter((Z)=>typeof Z==="string").join(" && "));if(G($.path||$.filePath||$.target),Array.isArray($.paths))G($.paths.filter((Z)=>typeof Z==="string").join(", "));return G($.fileName||$.filename||$.file),G($.url),G($.query),j.sort((Z,X)=>X.length-Z.length)}function dV(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let G=nV($);for(let Y of G){let q=j.indexOf(Y);if(q>=0)return{prefix:j.slice(0,q),argument:Y,suffix:j.slice(q+Y.length)}}let Z=OJ($);if(!Z)return null;let X=j.match(/^([^:]+:\s*)(.+)$/is);if(!X||X[1].trim().replace(/:$/,"").toLowerCase()!==Z)return null;return{prefix:X[1],argument:X[2],suffix:""}}function JJ(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,G=hV($),Z=G?lV(_,j):typeof _==="string"?_:"",X=pV($),Y=dV(X,$);if(!Y?.argument)return G?F`${Z} ${L8(G)}`:Z;let q=Z.lastIndexOf(Y.argument);if(q<0)return G?F`${Z} ${L8(G)}`:Z;let V=q+Y.argument.length;return F`
        ${Z.slice(0,q)}<span class="agent-tool-argument">${Y.argument}</span>${Z.slice(V)}${G?F` ${L8(G)}`:""}
    `}function AJ(_,$){let j=dV(_,$);if(!j?.argument)return _;let G=$?.status||$?.tool_status||$?.toolStatus,Z=hV($),X=Z?lV(j.suffix||"",G):j.suffix||"";return F`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${X}${Z?F` ${L8(Z)}`:""}
    `}function iV(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function l9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:V,turnId:Q,steerQueued:K,onPanelToggle:L,showCorePanels:N=!0,showExtensionPanels:B=!0}){let D=(v)=>{if(!v)return{text:"",totalLines:0,fullText:""};if(typeof v==="string"){let N0=v,y0=N0?N0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:N0,totalLines:y0,fullText:N0}}let r=v.text||"",o=v.fullText||v.full_text||r,j0=Number.isFinite(v.totalLines)?v.totalLines:o?o.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:r,totalLines:j0,fullText:o}},k=160,z=(v)=>String(v||"").replace(/<\/?internal>/gi,""),O=(v)=>{if(!v)return 1;return Math.max(1,Math.ceil(v.length/160))},I=(v,r,o,j0={})=>{let N0=(v||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!N0)return{text:"",omitted:0,totalLines:Number.isFinite(o)?o:0,visibleLines:0};let y0=N0.split(`
`),A0=j0.direction==="tail",M0=y0.length>r?(A0?y0.slice(-r):y0.slice(0,r)).join(`
`):N0,T0=Number.isFinite(o)?o:y0.reduce((n0,e0)=>n0+O(e0),0),m0=M0?M0.split(`
`).reduce((n0,e0)=>n0+O(e0),0):0,S0=Math.max(T0-m0,0);return{text:M0,omitted:S0,totalLines:T0,visibleLines:m0}},x=D(j),A=D(G),M=D($),W=D({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),y=Boolean(x.text)||x.totalLines>0,w=Boolean(A.text)||A.totalLines>0,J=Boolean(M.fullText?.trim()||M.text?.trim()),C=Boolean(W.fullText?.trim()||W.text?.trim()),f=Boolean(_||J||y||w||C||Z||X),b=Array.isArray(Y)&&Y.length>0,[c,p]=P(new Set),[e,m]=P(null),[_0,E0]=P({}),G0=g(new Map),[$0,X0]=P(()=>Date.now()),U0=(v)=>p((r)=>{let o=new Set(r),j0=!o.has(v);if(j0)o.add(v);else o.delete(v);if(typeof L==="function")L(v,j0);return o});u(()=>{p(new Set),m(null)},[Q]),u(()=>{let v={},r=new Set(["thought","draft"]);for(let[o,j0]of G0.current.entries()){if(!j0||typeof j0!=="object")continue;let N0=Number(j0.scrollHeight),y0=Number(j0.clientHeight);if(!Number.isFinite(N0)||!Number.isFinite(y0)||y0<=0)continue;if(N0>y0+1)v[o]=!0;if(r.has(o))j0.scrollTop=Math.max(0,N0-y0)}E0((o)=>{let j0=Object.keys(o||{}).filter((y0)=>o[y0]).sort(),N0=Object.keys(v).sort();if(j0.length===N0.length&&j0.every((y0,A0)=>y0===N0[A0]))return o;return v})},[M.fullText,M.text,A.fullText,A.text,W.fullText,W.text,c]),u(()=>{if(!(Array.isArray(Y)&&Y.some((o)=>o?.started_at||o?.last_activity_at)))return;let r=setInterval(()=>X0(Date.now()),1000);return()=>clearInterval(r)},[Y]);let t=Y0(()=>KJ(c),[c]);u(()=>{if(!t||typeof document>"u")return;let v=(r)=>{if(r?.defaultPrevented)return;if(r?.key!=="Escape")return;if(r?.altKey||r?.ctrlKey||r?.metaKey||r?.shiftKey)return;let o=r?.target;if(o instanceof Element){if(o.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(o.isContentEditable)return}if(p((j0)=>{if(!(j0 instanceof Set)||!j0.has(t))return j0;let N0=new Set(j0);return N0.delete(t),N0}),typeof L==="function")L(t,!1);r.preventDefault?.(),r.stopPropagation?.()};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[t,L]);let V0=O$(_),Q0=Boolean(_?.last_activity||_?.lastActivity),z0=Y0(()=>vV(_),[_]),s=Y0(()=>mV(_),[_]),Z0=Y0(()=>RV(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[W0,P0]=P(null);u(()=>{if(!Boolean(s||_?.retry_at||_?.retryAt||z0))return;X0(Date.now());let r=setInterval(()=>X0(Date.now()),1000);return()=>clearInterval(r)},[z0,s,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Z0){P0(null);return}let r=!0;return y7(Z0).then((o)=>{if(!r)return;if(o?.branch)P0({branch:o.branch,repoPath:o.repo_path||null,path:Z0});else P0(null)}).catch(()=>{if(r)P0(null)}),()=>{r=!1}},[_?.type,Z0]);let h0=_?.turn_id||Q,g0=PV(h0),G_=(v)=>v,c0=kq(_,{isLastActivity:Q0}),s0=M6(_,{isLastActivity:Q0}),f0=$8({steerQueued:K,pulsing:c0&&s0==="dot"&&!Q0}),i0=M6(null,{pendingRequest:!0}),b0=(v)=>v==="warning"?"#f59e0b":v==="error"?"var(--danger-color)":v==="success"?"var(--success-color)":g0,t0=X?.kind||"info",o0=b0(t0),F_=b0(_?.kind||(V0?"warning":"info")),Z_=WJ(_,{isLastActivity:Q0}),v0=UJ(_,$0),O0=W0?.repoPath||"",q_=W0?.branch||"",d0=W0?NJ(O0,q_):"",H_=LJ(_?.status_hints||_?.statusHints),D0=Y0(()=>BJ(H_),[H_]),u0=Y0(()=>D0.filter((v)=>v?.key==="ssh"),[D0]),I0=Y0(()=>D0.filter((v)=>v?.key!=="ssh"),[D0]);if((!N||!f)&&(!B||!b))return null;let r0=({panelTitle:v,text:r,fullText:o,totalLines:j0,maxLines:N0,titleClass:y0,panelKey:A0})=>{let M0=c.has(A0),T0=o||r||"",m0=A0==="thought"||A0==="draft"?z(T0):T0,S0=typeof N0==="number",n0=A0==="tool-output",e0=S0?I(m0,N0,j0,{direction:n0?"tail":"head"}):{text:m0||"",omitted:0,totalLines:Number.isFinite(j0)?j0:0},x0=n0&&!M0?QJ(e0.text):m0;if(!m0&&!(Number.isFinite(e0.totalLines)&&e0.totalLines>0))return null;let w0=`agent-thinking-body${S0?" agent-thinking-body-collapsible":""}`,D_=S0?`--agent-thinking-collapsed-lines: ${N0};`:"",__=S0&&e0.omitted>0,n=Boolean(A0&&_0[A0]),B0=__||n,j_=(!M0&&B0||M0&&B0)&&F`
            <button
                class="agent-thinking-truncation"
                onClick=${()=>U0(A0)}
                title=${M0?`Show fewer ${v} lines`:`Show more ${v}`}
            >
                <span class="agent-thinking-truncation-arrow" aria-hidden="true">${s1(M0?"up":"down")}</span>
                <span>${M0?"less":"more…"}</span>
            </button>
        `;return F`
            <div
                class="agent-thinking"
                data-expanded=${M0?"true":"false"}
                data-collapsible=${S0?"true":"false"}
                data-panel-key=${A0||""}
                style=${g0?`--turn-color: ${g0};`:""}
            >
                <div class="agent-thinking-title ${y0||""}">
                    ${g0&&F`<span class=${f0} aria-hidden="true"></span>`}
                    ${v}
                    ${j_}
                </div>
                <div
                    class=${w0}
                    style=${D_}
                    ref=${(R_)=>{if(!A0)return;if(R_)G0.current.set(A0,R_);else G0.current.delete(A0)}}
                    dangerouslySetInnerHTML=${{__html:G6(x0)}}
                />
            </div>
        `},z_=Z?.tool_call?.title,Q_=z_?`Awaiting approval: ${z_}`:"Awaiting approval",U_=DJ(_,$0),N_=(v,r,o=null)=>{let j0=S2(v),N0=eX(v,$0),y0=[o,N0].filter(Boolean).join(" · "),A0=$8({steerQueued:K,pulsing:O$(v)||Boolean(N0)}),M0=M6(v);return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${r?`--turn-color: ${r};`:""}
                title=${v?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${r&&M0==="dot"&&F`<span class=${A0} aria-hidden="true"></span>`}
                    ${M0==="spinner"&&F`<div class="agent-status-spinner" aria-hidden="true"></div>`}
                    <span class="agent-thinking-title-text">${AJ(j0,v)}</span>
                    ${y0&&F`<span class="agent-status-elapsed">${y0}</span>`}
                </div>
                ${v.detail&&F`<div class="agent-thinking-body">${v.detail}</div>`}
            </div>
        `},J_=(v,r,o,j0,N0,y0,A0,M0=8,T0=8)=>{let m0=Math.max(N0-j0,0.000000001),S0=Math.max(r-M0*2,1),n0=Math.max(o-T0*2,1),e0=Math.max(A0-y0,1),x0=A0===y0?r/2:M0+(v.run-y0)/e0*S0,w0=T0+(n0-(v.value-j0)/m0*n0);return{x:x0,y:w0}},x_=(v,r,o,j0,N0,y0,A0,M0=8,T0=8)=>{if(!Array.isArray(v)||v.length===0)return"";return v.map((m0,S0)=>{let{x:n0,y:e0}=J_(m0,r,o,j0,N0,y0,A0,M0,T0);return`${S0===0?"M":"L"} ${n0.toFixed(2)} ${e0.toFixed(2)}`}).join(" ")},P_=(v,r="")=>{if(!Number.isFinite(v))return"—";return`${Math.abs(v)>=100?v.toFixed(0):v.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${r}`},E_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],o_=(v,r)=>{let o=E_;if(!Array.isArray(o)||o.length===0)return"var(--accent-color)";if(o.length===1||!Number.isFinite(r)||r<=1)return o[0];let N0=Math.max(0,Math.min(Number.isFinite(v)?v:0,r-1))/Math.max(1,r-1)*(o.length-1),y0=Math.floor(N0),A0=Math.min(o.length-1,y0+1),M0=N0-y0,T0=o[y0],m0=o[A0];if(!m0||y0===A0||M0<=0.001)return T0;if(M0>=0.999)return m0;let S0=Math.round((1-M0)*1000)/10,n0=Math.round(M0*1000)/10;return`color-mix(in oklab, ${T0} ${S0}%, ${m0} ${n0}%)`},f_=(v,r="autoresearch")=>{let o=Array.isArray(v)?v.map((x0)=>({...x0,points:Array.isArray(x0?.points)?x0.points.filter((w0)=>Number.isFinite(w0?.value)&&Number.isFinite(w0?.run)):[]})).filter((x0)=>x0.points.length>0):[],j0=o.map((x0,w0)=>({...x0,color:o_(w0,o.length)}));if(j0.length===0)return null;let N0=320,y0=120,A0=j0.flatMap((x0)=>x0.points),M0=A0.map((x0)=>x0.value),T0=A0.map((x0)=>x0.run),m0=Math.min(...M0),S0=Math.max(...M0),n0=Math.min(...T0),e0=Math.max(...T0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${j0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${N0} ${y0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${j0.map((x0)=>{let w0=x0?.key||x0?.label||"series",D_=e?.panelKey===r&&e?.seriesKey===w0;return F`
                                <g key=${w0}>
                                    <path
                                        class=${`agent-series-chart-line${D_?" is-hovered":""}`}
                                        d=${x_(x0.points,N0,y0,m0,S0,n0,e0)}
                                        style=${`--agent-series-color: ${x0.color};`}
                                        onMouseEnter=${()=>m({panelKey:r,seriesKey:w0})}
                                        onMouseLeave=${()=>m((__)=>__?.panelKey===r&&__?.seriesKey===w0?null:__)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${j0.flatMap((x0)=>{let w0=typeof x0?.unit==="string"?x0.unit:"",D_=x0?.key||x0?.label||"series";return x0.points.map((__,n)=>{let B0=J_(__,N0,y0,m0,S0,n0,e0);return F`
                                    <button
                                        key=${`${D_}-point-${n}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${x0.color}; left:${B0.x/N0*100}%; top:${B0.y/y0*100}%;`}
                                        onMouseEnter=${()=>m({panelKey:r,seriesKey:D_,run:__.run,value:__.value,unit:w0})}
                                        onMouseLeave=${()=>m((l0)=>l0?.panelKey===r?null:l0)}
                                        onFocus=${()=>m({panelKey:r,seriesKey:D_,run:__.run,value:__.value,unit:w0})}
                                        onBlur=${()=>m((l0)=>l0?.panelKey===r?null:l0)}
                                        aria-label=${`${x0?.label||"Series"} ${P_(__.value,w0)} at run ${__.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${j0.map((x0)=>{let w0=x0.points[x0.points.length-1]?.value,D_=typeof x0?.unit==="string"?x0.unit:"",__=x0?.key||x0?.label||"series",n=e?.panelKey===r&&e?.seriesKey===__?e:null,B0=n&&Number.isFinite(n.value)?n.value:w0,l0=n&&typeof n.unit==="string"?n.unit:D_,j_=n&&Number.isFinite(n.run)?n.run:null;return F`
                            <div key=${`${__}-legend`} class=${`agent-series-legend-item${n?" is-hovered":""}`} style=${`--agent-series-color: ${x0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${x0.color};`}></span>
                                <span class="agent-series-legend-label">${x0?.label||"Series"}</span>
                                ${j_!==null&&F`<span class="agent-series-legend-run">run ${j_}</span>`}
                                <span class="agent-series-legend-value">${P_(B0,l0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},q0=(v)=>{if(!v)return null;let r=typeof v?.key==="string"?v.key:`panel-${Math.random()}`,o=c.has(r),j0=v?.title||"Extension status",N0=v?.collapsed_text||"",y0=String(v?.state||"").replace(/[-_]+/g," ").replace(/^./,(B0)=>B0.toUpperCase()),A0=b0(v?.state==="completed"?"success":v?.state==="failed"?"error":v?.state==="stopped"?"warning":"info"),M0=$8({steerQueued:K,pulsing:v?.state==="running"}),T0=typeof v?.detail_markdown==="string"?v.detail_markdown.trim():"",m0=typeof v?.last_run_text==="string"?v.last_run_text.trim():"",S0=typeof v?.tmux_command==="string"?v.tmux_command.trim():"",n0=Array.isArray(v?.series)?v.series:[],e0=Array.isArray(v?.actions)?v.actions:[],x0=v?.started_at?W6(v,$0):null,w0=N0,D_=Boolean(T0||S0||x0),__=Boolean(T0||n0.length>0||S0),n=[j0,w0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${o?"true":"false"}
                style=${A0?`--turn-color: ${A0};`:""}
                title=${!o?n||j0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>__?U0(r):null}
                    >
                        ${A0&&F`<span class=${M0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${j0}</span>
                        ${w0&&F`<span class="agent-thinking-title-meta">${w0}</span>`}
                        ${x0&&F`<span class="agent-status-elapsed">${x0}</span>`}
                    </button>
                    ${(e0.length>0||__)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${e0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${e0.map((B0)=>{let l0=`${r}:${B0?.key||""}`,j_=q?.has?.(l0);return F`
                                            <button
                                                key=${l0}
                                                class=${`agent-thinking-action-btn${B0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(v,B0)}
                                                disabled=${Boolean(j_)}
                                            >
                                                ${j_?"Working…":B0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${__&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${o?"Collapse":"Expand"} ${j0}`}
                                    title=${o?"Collapse details":"Expand details"}
                                    onClick=${()=>U0(r)}
                                >
                                    ${s1(o?"down":"up")}
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${o&&F`
                    <div class=${`agent-thinking-autoresearch-layout${D_?"":" chart-only"}`}>
                        ${D_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${x0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${x0}</span>
                                        ${v?.last_activity_at&&v?.state==="running"&&F`<span title="Since last activity">⟳ ${iV(v.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${T0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:G6(T0)}}
                                    />
                                `}
                                ${S0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${S0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>V?.(v,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${XJ}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${n0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${f_(n0,r)}
                                    ${m0&&F`<div class="agent-series-chart-note">${m0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${N&&X&&N_(X,o0)}
            ${B&&Array.isArray(Y)&&Y.map((v)=>q0(v))}
            ${N&&_?.type==="intent"&&N_(_,F_,U_)}
            ${N&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${g0?`--turn-color: ${g0};`:""}>
                    ${i0==="dot"&&F`<span class=${f0} aria-hidden="true"></span>`}
                    ${i0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Q_}</span>
                </div>
            `}
            ${N&&y&&r0({panelTitle:G_("Planning"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,panelKey:"plan"})}
            ${N&&J&&r0({panelTitle:G_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:9,titleClass:"thought",panelKey:"draft"})}
            ${N&&w&&r0({panelTitle:G_("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:9,titleClass:"thought",panelKey:"thought"})}
            ${N&&C&&r0({panelTitle:G_("Output"),text:W.text,fullText:W.fullText,totalLines:W.totalLines,maxLines:6,titleClass:"tool-output",panelKey:"tool-output"})}
            ${N&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${Q0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${d0||H_.length>0||v0?" agent-status-multiline":""}`} aria-live="polite" style=${g0?`--turn-color: ${g0};`:""}>
                    ${g0&&c0&&F`<span class=${f0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:s0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${JJ(Z_,_)}</span>
                        ${(d0||D0.length>0||v0)&&F`
                            <span class="agent-status-meta-row">
                                ${u0.map((v)=>F`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${d0&&F`
                                    <span class="agent-status-git-row" title=${Z0||d0}>
                                        <span class="agent-status-git-icon">${YJ}</span>
                                        <span class="agent-status-git-label">
                                            ${O0&&F`<span class="agent-status-git-part">${O0}</span>`}
                                            ${O0&&q_&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${q_&&F`<span class="agent-status-git-part">${q_}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${I0.map((v)=>F`
                                    <span key=${v.key} class="agent-status-hint-row" title=${v.title||v.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:v.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${v.label}</span>
                                    </span>
                                `)}
                                ${v0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${Q0?"Recent activity":"Last event"} ${v0}`}>
                                        <span class="agent-status-hint-icon">${qJ}</span>
                                        <span class="agent-status-hint-label">${v0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function oV({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",V=G?.rawInput||{},Q=V.command||V.commands&&V.commands[0]||null,K=V.diff||null,L=V.fileName||V.path||null,N=G?.description||V.description||V.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),E=Array.from(new Set([L,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let H=async(z)=>{try{await E5(j,z,X||null),$()}catch(O){console.error("Failed to respond to agent request:",O)}},D=async()=>{try{await A7(Y,`Auto-approved: ${Y}`),await E5(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},k=Z&&Z.length>0;return F`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(N||Q||K||E.length>0)&&F`
                    <div class="agent-request-body">
                        ${N&&F`
                            <div class="agent-request-description">${N}</div>
                        `}
                        ${E.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((z,O)=>F`<li key=${O}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${Q&&F`
                            <pre class="agent-request-command">${Q}</pre>
                        `}
                        ${K&&F`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${K}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((z)=>F`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>H(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>H("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>H("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${D}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}k0();k0();w_();function w6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>w6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${w6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function sV(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:w6(j)})).filter(($)=>$.value)}function kJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function p9(_){if(!Array.isArray(_))return[];return _.filter(kJ)}function K8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=w6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=sV(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function aV(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=sV(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):w6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function C_(_){return typeof _==="string"?_.trim():""}function tV(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function MJ(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=C_(X.type);if(q==="text"){let V=C_(X.text)||C_(X.content);if(V)j.push(V);return}if(q==="resource_link"){let V=C_(X.uri),Q=C_(X.title)||C_(X.name)||V;if(V&&Q)j.push(Q===V?V:`[${Q}](${V})`);return}if(q==="resource"){let V=C_(X.title)||C_(X.name)||C_(X.uri)||"Embedded resource",Q=C_(X.text);if(Q)j.push(`### ${V}

\`\`\`
${Q}
\`\`\``);else j.push(`### ${V}`);return}if(q==="generated_widget"){let V=C_(X.title)||C_(X.name)||"Generated widget",Q=C_(X.description)||C_(X.subtitle);j.push(tV([`### ${V}`,Q]));return}if(q==="adaptive_card"&&C_(X.fallback_text)){j.push(C_(X.fallback_text));return}if(q==="adaptive_card_submission"){let V=K8(X);if(C_(V))j.push(C_(V));return}if(q==="file"){let V=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${V}`);return}if(q==="image"||!q){let V=C_(X.name)||C_(X.filename)||C_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${V}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return tV(j)}function B8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return MJ(G,Z)}function eV(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function _Q(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function $Q(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(eV(j,"aria-disabled","true"),eV(j,"tabindex","-1"),"disabled"in j)_Q(j,"disabled");if("readOnly"in j)_Q(j,"readOnly")}}function yJ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function TJ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function jQ(_){return yJ(_)||TJ(_)}function N8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function wJ(_,$){let j=Math.max(N8(_),N8($)),G=Math.min(N8(_),N8($));return(j+0.05)/(G+0.05)}function xJ(_,$,j="#ffffff"){let G=jQ(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=jQ(Y);if(!q)continue;let V=wJ(G,q);if(V>X)Z=Y,X=V}return Z}function r9(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let H of U){let D=_.getPropertyValue(H).trim();if(D)return D}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),Q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),K=$(["--danger-color","--color-error"],"#f4212e"),L=$(["--border-color","--color-border"],"#eff3f4"),N=$(["--font-family"],"system-ui, sans-serif"),B=xJ(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:V,warning:Q,attention:K,border:L,fontFamily:N,buttonTextColor:B}}function GQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:V,fontFamily:Q}=r9();return{fontFamily:Q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var IJ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),ZQ=!1,F8=null,XQ=!1;function n9(_){_.querySelector(".adaptive-card-notice")?.remove()}function CJ(_,$,j="error"){n9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function PJ(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function fJ(_=($)=>Z1($,null)){return($,j)=>{try{let G=PJ($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function RJ(_){if(XQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=fJ(),XQ=!0}async function SJ(){if(ZQ)return;if(F8)return F8;return F8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{ZQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),F8}function uJ(){return globalThis.AdaptiveCards}function gJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function bJ(_){return IJ.has(_)}function i9(_){if(!Array.isArray(_))return[];return _.filter(gJ)}function vJ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function d9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>d9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${d9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function mJ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return d9($);return typeof $==="string"?$:String($)}function cJ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=mJ(Y.type,j[Y.id],Y);for(let[q,V]of Object.entries(Y))if(Array.isArray(V)||V&&typeof V==="object")Y[q]=G(V);return Y};return G(_)}function hJ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function lJ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=hJ(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function YQ(_,$,j){if(!bJ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await SJ()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=uJ();RJ(G);let Z=new G.AdaptiveCard,X=r9();Z.hostConfig=new G.HostConfig(GQ());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:cJ($.payload,Y);Z.parse(q),Z.onExecuteAction=(K)=>{let L=vJ(K);if(j?.onAction)n9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(L)).catch((N)=>{console.error("[adaptive-card] Action failed:",N);let B=N instanceof Error?N.message:String(N||"Action failed.");CJ(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",L)};let V=Z.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let Q=lJ($);if(Q){_.classList.add("adaptive-card-finished");let K=document.createElement("div");K.className=`adaptive-card-status adaptive-card-status-${$.state}`;let L=document.createElement("span");if(L.className="adaptive-card-status-label",L.textContent=Q.label,K.appendChild(L),Q.detail){let N=document.createElement("span");N.className="adaptive-card-status-detail",N.textContent=Q.detail,K.appendChild(N)}_.appendChild(K)}if(n9(_),_.appendChild(V),Q)$Q(V);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}k0();g2();function qQ({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${d$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${d$}>
    `}var U8=0,o9=null,x6={activePostId:null,speaking:!1},s9=new Set;function t9(_={}){return _.window??(typeof window<"u"?window:null)}function VQ(_={}){return t9(_)?.speechSynthesis||null}function a9(){let _={...x6};for(let $ of s9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function e9(){return{...x6}}function QQ(_){if(typeof _!=="function")return()=>{};return s9.add(_),_(e9()),()=>s9.delete(_)}function LQ(_={}){let $=t9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function KQ(_){let $=B8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function BQ(_={}){let $=VQ(_);if(U8+=1,o9=null,x6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}a9()}function NQ(_,$,j={}){let G=t9(j),Z=VQ(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=U8+1;U8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);o9=q,x6={activePostId:_,speaking:!0},a9();let V=()=>{if(Y!==U8)return;o9=null,x6={activePostId:null,speaking:!1},a9()};q.onend=V,q.onerror=V;try{return Z.speak(q),!0}catch(Q){return console.warn("[post-speech] speak failed:",Q),V(),!1}}async function UQ(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function _j(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let V=q?.clipboardData;if(!V||typeof V.setData!=="function")return;if(V.setData("text/plain",j),G)V.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function FQ(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function DQ(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let V=Z.getRangeAt(0);if(V&&typeof V.intersectsNode==="function")X=Boolean(V.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let V=FQ(Z.anchorNode),Q=FQ(Z.focusNode);X=Boolean(V&&G.contains(V)||Q&&G.contains(Q))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function HQ(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function EQ(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function WQ(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function pJ({mediaId:_,onPreview:$}){let[j,G]=P(null);if(u(()=>{w2(_).then(G).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,Q)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",V=T6(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(Q)=>Q.stopPropagation()}>
            <a href=${g1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&F`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&F`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${V&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function rJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function nJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function dJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function iJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function oJ(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function OQ(_){let $=iJ(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():oJ(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function sJ(_,$){let j=OQ($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var aJ={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function tJ(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=aJ[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function eJ(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function _A({marker:_}){let[$,j]=P(!1),G=R((L)=>{L.stopPropagation(),j((N)=>!N)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,V=String(_?.severity||"warning"),Q=Y||Z||String(_?.label||_?.kind||"issue"),K=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${V}`}>
            <div class="post-outcome-pill-header" onClick=${K?G:void 0}>
                ${K&&F`
                    <span class="post-outcome-pill-toggle" aria-hidden="true">${s1($?"down":"right")}</span>
                `}
                <span class="post-outcome-pill-label">${Q}</span>
                ${q&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&K&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function $A({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=P(null);u(()=>{if(!Number.isFinite(j))return;w2(j).then(Z).catch((K)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,K)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?g1(j):null,q=T6(G?.content_type,G?.filename||_?.label),V=V8(q),Q=q!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(K)=>K.stopPropagation()}>
                        <${q1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:F`
                    <${q1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&Q&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function D8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?x4(G):null;return F`
        <div class="content-annotations">
            ${$&&$.length>0&&F`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&F`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&F`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function jA({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=XA(Z),Y=A4(_.uri);return F`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&F`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&F`<span>${Z}</span>`}
                    ${G&&F`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function GA({block:_}){let[$,j]=P(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${s1($?"down":"right")} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(L)=>L.charCodeAt(0))],{type:Y||"application/octet-stream"}),Q=URL.createObjectURL(V),K=document.createElement("a");K.href=Q,K.download=G.split("/").pop()||"resource",K.click(),URL.revokeObjectURL(Q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function ZA({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=g9(_,$),Z=oq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",Q=g(!1),K=(L)=>{if(L)L.preventDefault(),L.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||Q.current)return;let L=$?.timestamp?new Date($.timestamp).getTime():0;if(L&&Date.now()-L>1e4)return;let N=`widget_opened_${_.widget_id||$?.id||""}`;if(HQ(sessionStorage,N))return;Q.current=!0,EQ(sessionStorage,N,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(L)=>L.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&F`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${K}
                    title=${Z?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function XA(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function YA(_){let $=A4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function qA({preview:_}){let $=A4(_.url),j=YA(_.image),G=WQ(_.site_name,$);return F`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&F`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function VA(_,$){return typeof _==="string"?_:""}var zQ=1800,QA=40,LA=24576,KA=16,BA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,NA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,FA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,UA=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;function DA(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:QA,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:LA,q=G.length>X||Z>Y,V=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:KA);return{shouldCollapse:q,lineCount:G.length,byteLength:Z,visibleLines:V,omittedLines:Math.max(0,G.length-V)}}async function JQ(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(_j(document,{text:$}))return!0;if(await UQ(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function HA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${UA}</head><body>${j}</body></html>`;if(_j(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return JQ($)}function EA(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let V of $)if(DQ(Y,{root:V,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let V=q||"idle";if(Y.dataset.copyState=V,V==="success")Y.innerHTML=NA,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(V==="error")Y.innerHTML=FA,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=BA,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block";let V=Y.querySelector("code"),Q=DA(V?.textContent||"");if(Q.shouldCollapse){q.classList.add("post-code-block-collapsed"),q.style.setProperty("--post-code-preview-lines",String(Q.visibleLines));let N=document.createElement("button");N.type="button",N.className="post-code-expand-btn";let B=()=>{let E=q.classList.contains("post-code-block-expanded");N.innerHTML=E?`${h9("up")} <span>Collapse output</span>`:`${h9("right")} <span>Expand output · ${Q.lineCount.toLocaleString()} lines · ${a_(Q.byteLength)}${Q.omittedLines?` · ${Q.omittedLines.toLocaleString()} hidden`:""}</span>`,N.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),q.classList.toggle("post-code-block-expanded"),B()};N.addEventListener("click",U),B(),q.appendChild(N),G.push(()=>N.removeEventListener("click",U))}Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),q.appendChild(K);let L=async(N)=>{N.preventDefault(),N.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await JQ(U);X(K,E?"success":"error");let H=j.get(K);if(H)clearTimeout(H);let D=setTimeout(()=>{X(K,"idle"),j.delete(K)},zQ);j.set(K,D)};K.addEventListener("click",L),G.push(()=>{K.removeEventListener("click",L);let N=j.get(K);if(N)clearTimeout(N);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function AQ(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function WA(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Files:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=AQ(Q.replace(/^\s*-\s+/,"").trim());if(K)Z.push(K)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Z}}function OA(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Folders:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=AQ(Q.replace(/^\s*-\s+/,"").trim());if(K)Z.push(K)}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,folderRefs:Z}}function zA(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1)if(j[Q].trim()==="Referenced messages:"&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let L=Q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(L)Z.push(L[1])}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Z}}function JA(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let Q=0;Q<j.length;Q+=1){let K=j[Q].trim();if((K==="Images:"||K==="Attachments:")&&j[Q+1]&&/^\s*-\s+/.test(j[Q+1])){G=Q;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let Q=j[X];if(/^\s*-\s+/.test(Q)){let K=Q.replace(/^\s*-\s+/,"").trim(),L=K.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||K.match(/^attachment:([^\s]+)\s+(.+)$/i);if(L){let N=L[1],B=(L[2]||"").trim()||N;Z.push({id:N,label:B,raw:K})}else Z.push({id:null,label:K,raw:K})}else if(!Q.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Z}}function AA(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function kA(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(AA).sort((K,L)=>L.length-K.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),V=[],Q;while(Q=q.nextNode())V.push(Q);for(let K of V){let L=K.nodeValue;if(!L||!Z.test(L)){Z.lastIndex=0;continue}Z.lastIndex=0;let N=K.parentElement;if(N&&N.closest("code, pre, script, style"))continue;let B=L.split(Z).filter((E)=>E!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let E of B)if(X.test(E)){let H=Y.createElement("mark");H.className="search-highlight-term",H.textContent=E,U.appendChild(H)}else U.appendChild(Y.createTextNode(E));K.parentNode.replaceChild(U,K)}return Y.body.innerHTML}function kQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:V,userAvatarBackground:Q,onDelete:K,isThreadReply:L,isThreadPrev:N,isThreadNext:B,isRemoving:U,highlightQuery:E,onFileRef:H,onOpenWidget:D,onOpenAttachmentPreview:k}){let[z,O]=P(null),[I,x]=P("idle"),[A,M]=P(()=>e9()),W=g(null),y=g(null),w=_.data,J=w.type==="agent_response",C=q||"You",f=J?X||xV:C,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",c=Boolean(J&&E&&b&&b!==f),p=J?m9(X,Y,!0):m9(C,V),e=typeof Q==="string"?Q.trim().toLowerCase():"",m=!J&&p.image&&(e==="clear"||e==="transparent"),_0=J&&Boolean(p.image),E0=`background-color: ${m||_0?"transparent":p.color}`,G0=w.content_meta,$0=Boolean(G0?.truncated),X0=Boolean(G0?.preview),U0=$0&&!X0,t=$0?{originalLength:Number.isFinite(G0?.original_length)?G0.original_length:w.content?w.content.length:0,maxLength:Number.isFinite(G0?.max_length)?G0.max_length:0}:null,V0=w.content_blocks||[],Q0=w.media_ids||[],z0=OQ(V0),s=Boolean(z0?.sourceAgentName),Z0=VA(w.content,w.link_previews);Z0=sJ(Z0,V0);let{content:W0,fileRefs:P0}=WA(Z0),{content:h0,folderRefs:g0}=OA(W0),{content:G_,messageRefs:c0}=zA(h0),s0=(n)=>{n?.preventDefault?.(),n?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},f0=(n)=>{if(n.key==="Enter"||n.key===" ")s0(n)},{content:i0,attachments:b0}=JA(G_);Z0=i0;let t0=i9(V0),o0=p9(V0),Z_=rJ(V0)[0]||null,O0=nJ(V0)[0]||null,d0=dJ(V0)[0]||null,H_=t0.length===1&&typeof t0[0]?.fallback_text==="string"?t0[0].fallback_text.trim():"",D0=o0.length===1?K8(o0[0]).trim():"",u0=Boolean(H_)&&Z0?.trim()===H_||Boolean(D0)&&Z0?.trim()===D0,I0=Boolean(Z0)&&!U0&&!u0,r0=typeof E==="string"?E.trim():"",z_=Y0(()=>{if(!Z0||u0)return"";let n=Z1(Z0,j);return r0?kA(n,r0):n},[Z0,u0,r0]),Q_=Y0(()=>B8(_),[_]),U_=Y0(()=>LQ(),[]),N_=Y0(()=>KQ(_),[_]),J_=Boolean(A.speaking&&A.activePostId===_.id),x_=(n,B0)=>{n.stopPropagation(),O(g1(B0))},P_=(n)=>{k?.(n)},E_=(n)=>{n.stopPropagation(),K?.(_)},o_=async(n)=>{n.stopPropagation();let B0=await HA(Q_);if(x(B0?"success":"error"),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{y.current=null,x("idle")},zQ)},f_=(n)=>{if(n.stopPropagation(),J_){BQ();return}NQ(_.id,N_)},q0=(n,B0)=>{let l0=new Set;if(!n||B0.length===0)return{content:n,usedIds:l0};return{content:n.replace(/attachment:([^\s)"']+)/g,(R_,F1,g_,J1)=>{let I_=F1.replace(/^\/+/,""),A1=B0.find((A_)=>A_.name&&A_.name.toLowerCase()===I_.toLowerCase()&&!l0.has(A_.id))||B0.find((A_)=>!l0.has(A_.id));if(!A1)return R_;if(l0.add(A1.id),J1.slice(Math.max(0,g_-2),g_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:l0}},v=[],r=[],o=[],j0=[],N0=[],y0=[],A0=[],M0=0;if(V0.length>0)V0.forEach((n)=>{if(n?.type==="text"&&n.annotations)A0.push(n.annotations);if(n?.type==="generated_widget")y0.push(n);else if(n?.type==="resource_link")j0.push(n);else if(n?.type==="resource")N0.push(n);else if(n?.type==="file"){let B0=Q0[M0++];if(B0)r.push(B0),o.push({id:B0,name:n?.name||n?.filename||n?.title})}else if(n?.type==="image"||!n?.type){let B0=Q0[M0++];if(B0){let l0=typeof n?.mime_type==="string"?n.mime_type:void 0;v.push({id:B0,annotations:n?.annotations,mimeType:l0}),o.push({id:B0,name:n?.name||n?.filename||n?.title})}}});else if(Q0.length>0){let n=b0.length>0;Q0.forEach((B0,l0)=>{let j_=b0[l0]||null;if(o.push({id:B0,name:j_?.label||null}),n)r.push(B0);else v.push({id:B0,annotations:null})})}if(b0.length>0)b0.forEach((n)=>{if(!n?.id)return;let B0=o.find((l0)=>String(l0.id)===String(n.id));if(B0&&!B0.name)B0.name=n.label});let{content:T0,usedIds:m0}=q0(Z0,o);Z0=T0;let S0=v.filter(({id:n})=>!m0.has(n)),n0=r.filter((n)=>!m0.has(n)),e0=b0.length>0?b0.map((n,B0)=>({id:n.id||`attachment-${B0+1}`,label:n.label||`attachment-${B0+1}`})):o.map((n,B0)=>({id:n.id,label:n.name||`attachment-${B0+1}`})),x0=Y0(()=>i9(V0),[V0]),w0=Y0(()=>p9(V0),[V0]),D_=Y0(()=>{return x0.map((n)=>`${n.card_id}:${n.state}`).join("|")},[x0]);u(()=>{if(!W.current)return;return E$(W.current),EA(W.current)},[z_]),u(()=>{return QQ((n)=>{M(n)})},[]),u(()=>()=>{if(y.current)clearTimeout(y.current)},[]);let __=g(null);return u(()=>{if(!__.current||x0.length===0)return;let n=__.current;n.innerHTML="";for(let B0 of x0){let l0=document.createElement("div");n.appendChild(l0),YQ(l0,B0,{onAction:async(j_)=>{if(j_.type==="Action.OpenUrl"){let R_=A4(j_.url||"");if(!R_)throw Error("Invalid URL");window.open(R_,"_blank","noopener,noreferrer");return}if(j_.type==="Action.Submit"){await J7({post_id:_.id,thread_id:w.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:B0.card_id,action:{type:j_.type,title:j_.title||"",data:j_.data}});return}console.warn("[post] unsupported adaptive card action:",j_.type,j_)}}).catch((j_)=>{console.error("[post] adaptive card render error:",j_),l0.textContent=B0.fallback_text||"Card failed to render."})}},[D_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${J?"agent-post":""} ${L?"thread-reply":""} ${N?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${J?"agent-avatar":""} ${p.image?"has-image":""}" style=${E0}>
                ${p.image?F`<img src=${p.image} alt=${f} />`:p.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${J&&U_&&N_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${J_?" is-active":""}`}
                            type="button"
                            title=${J_?"Stop reading aloud":"Read aloud"}
                            aria-label=${J_?"Stop reading aloud":"Read aloud"}
                            onClick=${f_}
                        >
                            ${J_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${I==="success"?" is-success":I==="error"?" is-error":""}`}
                        type="button"
                        title=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        aria-label=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        onClick=${o_}
                        disabled=${!Q_}
                    >
                        ${I==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:I==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${E_}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    ${s&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${z0?.sourceChatJid||""}`.trim()}
                        >
                            @${z0?.sourceAgentName}
                        </span>
                    `}
                    ${c&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${s0}
                            onKeyDown=${f0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${s0}>${FX(_.timestamp)}</a>
                    ${Z_&&F`
                        <span
                            class="post-recovery-chip"
                            title=${tJ(Z_)}
                        >
                            recovered
                        </span>
                    `}
                    ${O0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${eJ(O0)}
                        >
                            timeout
                        </span>
                    `}
                    ${d0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(d0.severity||"warning")}${d0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(d0.label||d0.kind||"issue")}
                        >
                            ${String(d0.label||d0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${d0&&F`
                    <${_A} marker=${d0} />
                `}
                ${U0&&t&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${F6(t.originalLength)} chars
                            ${t.maxLength?F` • Display limit: ${F6(t.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${X0&&t&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${F6(t.maxLength)} of ${F6(t.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||g0.length>0||c0.length>0||e0.length>0)&&F`
                    <div class="post-file-refs">
                        ${c0.map((n)=>{let B0=(l0)=>{if(l0.preventDefault(),l0.stopPropagation(),Z)Z(n,_.chat_jid||null);else{let j_=document.getElementById("post-"+n);if(j_)j_.scrollIntoView({behavior:"smooth",block:"center"}),j_.classList.add("post-highlight"),setTimeout(()=>j_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${n}`} class="post-msg-pill-link" onClick=${B0}>
                                    <${q1}
                                        prefix="post"
                                        label=${"msg:"+n}
                                        title=${"Message "+n}
                                        icon="message"
                                        onClick=${B0}
                                    />
                                </a>
                            `})}
                        ${P0.map((n)=>{let B0=n.split("/").pop()||n;return F`
                                <${q1}
                                    prefix="post"
                                    label=${B0}
                                    title=${n}
                                    onClick=${()=>H?.(n)}
                                />
                            `})}
                        ${g0.map((n)=>{let B0=n.split("/").pop()||n;return F`
                                <${q1}
                                    prefix="post"
                                    label=${B0}
                                    title=${n}
                                    icon="folder"
                                />
                            `})}
                        ${e0.map((n)=>F`
                            <${$A}
                                key=${n.id}
                                attachment=${n}
                                onPreview=${P_}
                            />
                        `)}
                    </div>
                `}
                ${I0&&F`
                    <div 
                        ref=${W}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:z_}}
                        onClick=${(n)=>{if(n.target.classList.contains("hashtag")){n.preventDefault(),n.stopPropagation();let B0=n.target.dataset.hashtag;if(B0)j?.(B0)}else if(n.target.tagName==="IMG")n.preventDefault(),n.stopPropagation(),O(n.target.src)}}
                    />
                `}
                ${x0.length>0&&F`
                    <div ref=${__} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((n,B0)=>{let l0=aV(n),j_=`${n.card_id}-${B0}`;return F`
                                <div key=${j_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${l0.title}</span>
                                        </div>
                                    </div>
                                    ${l0.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${l0.fields.map((R_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${R_.key}: ${R_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${R_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${R_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${x4(l0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${y0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${y0.map((n,B0)=>F`
                            <${ZA}
                                key=${n.widget_id||n.id||`${_.id}-widget-${B0}`}
                                block=${n}
                                post=${_}
                                onOpenWidget=${D}
                            />
                        `)}
                    </div>
                `}
                ${A0.length>0&&F`
                    ${A0.map((n,B0)=>F`
                        <${D8} key=${B0} annotations=${n} />
                    `)}
                `}
                ${S0.length>0&&F`
                    <div class="media-preview">
                        ${S0.map(({id:n,mimeType:B0})=>{let j_=typeof B0==="string"&&B0.toLowerCase().startsWith("image/svg")?g1(n):k7(n);return F`
                                <img
                                    key=${n}
                                    src=${j_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(R_)=>x_(R_,n)}
                                />
                            `})}
                    </div>
                `}
                ${S0.length>0&&F`
                    ${S0.map(({annotations:n},B0)=>F`
                        ${n&&F`<${D8} key=${B0} annotations=${n} />`}
                    `)}
                `}
                ${n0.length>0&&F`
                    <div class="file-attachments">
                        ${n0.map((n)=>F`
                            <${pJ} key=${n} mediaId=${n} onPreview=${P_} />
                        `)}
                    </div>
                `}
                ${j0.length>0&&F`
                    <div class="resource-links">
                        ${j0.map((n,B0)=>F`
                            <div key=${B0}>
                                <${jA} block=${n} />
                                <${D8} annotations=${n.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&F`
                    <div class="resource-embeds">
                        ${N0.map((n,B0)=>F`
                            <div key=${B0}>
                                <${GA} block=${n} />
                                <${D8} annotations=${n.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${w.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${w.link_previews.map((n,B0)=>F`
                            <${qA} key=${B0} preview=${n} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&F`<${qQ} src=${z} onClose=${()=>O(null)} />`}

    `}function MQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:V,onOpenAttachmentPreview:Q,emptyMessage:K,timelineRef:L,agents:N,user:B,onDeletePost:U,reverse:E=!0,removingPostIds:H,searchQuery:D}){let[k,z]=P(!1),O=g(null),I=typeof IntersectionObserver<"u",x=R(async()=>{if(!j||!$||k)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,k,j]),A=R((b)=>{let{scrollTop:c,scrollHeight:p,clientHeight:e}=b.target,m=E?p-e-c:c,_0=Math.max(300,e);if(m<_0)x()},[E,x]);u(()=>{if(!I)return;let b=O.current,c=L?.current;if(!b||!c)return;let p=300,e=new IntersectionObserver((m)=>{for(let _0 of m){if(!_0.isIntersecting)continue;x()}},{root:c,rootMargin:`${p}px 0px ${p}px 0px`,threshold:0});return e.observe(b),()=>e.disconnect()},[I,$,j,L,x]);let M=g(x);if(M.current=x,u(()=>{if(I)return;if(!L?.current)return;let{scrollTop:b,scrollHeight:c,clientHeight:p}=L.current,e=E?c-p-b:b,m=Math.max(300,p);if(e<m)M.current?.()},[I,_,$,E,L]),u(()=>{if(!L?.current)return;if(!$||k)return;let{scrollTop:b,scrollHeight:c,clientHeight:p}=L.current,e=E?c-p-b:b,m=Math.max(300,p);if(c<=p+1||e<m)M.current?.()},[_,$,k,E,L]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${L}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${K||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let W=_.slice().sort((b,c)=>b.id-c.id),y=(b)=>{let c=b?.data?.thread_id;if(c===null||c===void 0||c==="")return null;let p=Number(c);return Number.isFinite(p)?p:null},w=new Map;for(let b=0;b<W.length;b+=1){let c=W[b],p=Number(c?.id),e=y(c);if(e!==null){let m=w.get(e)||{anchorIndex:-1,replyIndexes:[]};m.replyIndexes.push(b),w.set(e,m)}else if(Number.isFinite(p)){let m=w.get(p)||{anchorIndex:-1,replyIndexes:[]};m.anchorIndex=b,w.set(p,m)}}let J=new Map;for(let[b,c]of w.entries()){let p=new Set;if(c.anchorIndex>=0)p.add(c.anchorIndex);for(let e of c.replyIndexes)p.add(e);J.set(b,Array.from(p).sort((e,m)=>e-m))}let C=W.map((b,c)=>{let p=y(b);if(p===null)return{hasThreadPrev:!1,hasThreadNext:!1};let e=J.get(p);if(!e||e.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let m=e.indexOf(c);if(m<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:m>0,hasThreadNext:m<e.length-1}}),f=F`<div class="timeline-sentinel" ref=${O}></div>`;return F`
        <div class="timeline ${E?"reverse":"normal"}" ref=${L} onScroll=${A}>
            <div class="timeline-content">
                ${E?f:null}
                ${W.map((b,c)=>{let p=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),e=H?.has?.(b.id),m=C[c]||{};return F`
                    <${kQ}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${p}
                        isThreadPrev=${m.hasThreadPrev}
                        isThreadNext=${m.hasThreadNext}
                        isRemoving=${e}
                        highlightQuery=${D}
                        agentName=${IV(b.data?.agent_id,N||{})}
                        agentAvatarUrl=${CV(b.data?.agent_id,N||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(b)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${V}
                        onDelete=${U}
                        onOpenAttachmentPreview=${Q}
                    />
                `})}
                ${E?null:f}
            </div>
        </div>
    `}k0();w_();function yQ(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var H8="workspaceExplorerScale",MA=["compact","default","comfortable"],yA=new Set(MA),TA={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function TQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return yA.has(j)?j:$}function $j(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function wA(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function xA(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function jj(_={}){let $=wA(_),j=_.stored?TQ(_.stored,$):$;return xA(j,_)}function wQ(_){return TA[TQ(_)]}Y9();function IA(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function Gj(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function xQ(_,$,j={}){let G=j.resolvePane;if(Gj(_,G))return!0;return IA($)}var RQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function CA(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return Gj($,(j)=>Y_.resolve(j))}function SQ(_,$,j,G=0,Z=[]){if(!j&&RQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)SQ(X,$,j,G+1,Z);return Z}function IQ(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&RQ(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function qj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let V=qj(Z.get(q.path),q);if(V!==Z.get(q.path))X=!0;return V});return X?{...$,children:Y}:_}function Xj(_,$,j){if(!_)return _;if(_.path===$)return qj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=Xj(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var uQ=4,Zj=14,PA=16;function gQ(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=gQ(G);return _.__bytes=j,j}function bQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=uQ)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let V=Math.max(0,Number(q?.__bytes??q?.size??0));if(V<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:V});else X.push({kind:"file",name:q.name,path:q.path,size:V})}X.sort((q,V)=>V.size-q.size);let Y=X;if(X.length>Zj){let q=X.slice(0,Zj-1),V=X.slice(Zj-1),Q=V.reduce((K,L)=>K+L.size,0);q.push({kind:"other",name:`+${V.length} more`,path:`${G.path}/[other]`,size:Q}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return bQ(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function CQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function vQ(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function E8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Vj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,V=E8(_,$,G,Z),Q=E8(_,$,G,q),K=E8(_,$,j,q),L=E8(_,$,j,Z),N=q-Z>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${G} ${G} 0 ${N} 1 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`L ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${j} ${j} 0 ${N} 0 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,"Z"].join(" ")}var mQ={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function cQ(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,V,Q,K)=>{let L=Array.isArray(q?.children)?q.children:[];if(!L.length)return;let N=Math.max(0,Number(q.size)||0);if(N<=0)return;let B=Q-V,U=V;L.forEach((E,H)=>{let D=Math.max(0,Number(E.size)||0);if(D<=0)return;let k=D/N,z=U,O=H===L.length-1?Q:U+B*k;if(U=O,O-z<0.003)return;let I=mQ[K];if(I){let x=vQ(z,K,j);if(G.push({key:E.path,path:E.path,label:E.name,size:D,color:x,depth:K,startAngle:z,endAngle:O,innerRadius:I[0],outerRadius:I[1],d:Vj(120,120,I[0],I[1],z,O)}),K===1)Z.push({key:E.path,name:E.name,size:D,pct:X>0?D/X*100:0,color:x})}if(K<uQ)Y(E,z,O,K+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function Yj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=Yj(G,$);if(Z)return Z}return null}function hQ(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=mQ[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=vQ(X,1,G),Q=`${$||"."}/[files]`;return{segments:[{key:Q,path:Q,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Vj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:Q,name:_,size:j,pct:100,color:q}]}}function PQ(_,$=!1,j=!1){if(!_)return null;let G=gQ(_),Z=bQ(_,0),X=Z.size||G,{segments:Y,legend:q}=cQ(Z,X,j);if(!Y.length&&X>0){let V=hQ("[files]",Z.path,X,j);Y=V.segments,q=V.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function fA({payload:_}){if(!_)return null;let[$,j]=P(null),[G,Z]=P(_?.root?.path||"."),[X,Y]=P(()=>[_?.root?.path||"."]),[q,V]=P(!1);u(()=>{let y=_?.root?.path||".";Z(y),Y([y]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;V(!0);let y=setTimeout(()=>V(!1),180);return()=>clearTimeout(y)},[G]);let Q=Y0(()=>{return Yj(_.root,G)||_.root},[_?.root,G]),K=Q?.size||_.totalSize||0,{segments:L,legend:N}=Y0(()=>{let y=cQ(Q,K,_.isDarkTheme);if(y.segments.length>0)return y;if(K<=0)return y;let w=Q?.children?.length?"Total":"[files]";return hQ(w,Q?.path||_?.root?.path||".",K,_.isDarkTheme)},[Q,K,_.isDarkTheme,_?.root?.path]),[B,U]=P(L),E=g(new Map),H=g(0);u(()=>{let y=E.current,w=new Map(L.map((b)=>[b.key,b])),J=performance.now(),C=220,f=(b)=>{let c=Math.min(1,(b-J)/220),p=c*(2-c),e=L.map((m)=>{let E0=y.get(m.key)||{startAngle:m.startAngle,endAngle:m.startAngle,innerRadius:m.innerRadius,outerRadius:m.innerRadius},G0=(V0,Q0)=>V0+(Q0-V0)*p,$0=G0(E0.startAngle,m.startAngle),X0=G0(E0.endAngle,m.endAngle),U0=G0(E0.innerRadius,m.innerRadius),t=G0(E0.outerRadius,m.outerRadius);return{...m,d:Vj(120,120,U0,t,$0,X0)}});if(U(e),c<1)H.current=requestAnimationFrame(f)};if(H.current)cancelAnimationFrame(H.current);return H.current=requestAnimationFrame(f),E.current=w,()=>{if(H.current)cancelAnimationFrame(H.current)}},[L]);let D=B.length?B:L,k=K>0?a_(K):"0 B",z=Q?.name||"",I=(z&&z!=="."?z:"Total")||"Total",x=k,A=X.length>1,M=(y)=>{if(!y?.path)return;let w=Yj(_.root,y.path);if(!w||!Array.isArray(w.children)||w.children.length===0)return;Y((J)=>[...J,w.path]),Z(w.path),j(null)},W=()=>{if(!A)return;Y((y)=>{let w=y.slice(0,-1);return Z(w[w.length-1]||_?.root?.path||"."),w}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${Q?.path||_?.root?.path||"."}`}
                data-segments=${D.length}
                data-base-size=${K}>
                ${D.map((y)=>F`
                    <path
                        key=${y.key}
                        d=${y.d}
                        fill=${y.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===y.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(y)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(y)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>M(y)}
                    >
                        <title>${y.label} — ${a_(y.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
                    onClick=${W}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${I}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${N.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${N.slice(0,8).map((y)=>F`
                        <div key=${y.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${y.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${y.name}>${y.name}</span>
                            <span class="workspace-folder-starburst-size">${a_(y.size)}</span>
                            <span class="workspace-folder-starburst-pct">${y.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function fQ(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function lQ(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function RA(_){if(!_)return"Workspace index status";let $=[lQ(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function SA(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function uA(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function gA(_,$=null){let j=SA(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:uA(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function pQ({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:V=!1}){let[Q,K]=P(null),[L,N]=P(new Set(["."])),[B,U]=P(null),[E,H]=P(null),[D,k]=P(""),[z,O]=P(null),[,I]=P(null),[x,A]=P(!0),[M,W]=P(!1),[y,w]=P(null),[J,C]=P(()=>U$("workspaceShowHidden",!1)),[f,b]=P(!1),[c,p]=P(null),[e,m]=P(null),[_0,E0]=P(null),[G0,$0]=P(!1),[X0,U0]=P(null),[t,V0]=P(null),[Q0,z0]=P(null),[s,Z0]=P(!1),[W0,P0]=P(()=>A5()),[h0,g0]=P(()=>CQ()),[G_,c0]=P(()=>jj({stored:O1(H8),...$j()})),[s0,f0]=P(!1),i0=Math.max(15000,(Number(W0?.refreshIntervalSec)||60)*1000),b0=Math.max(0,Number(W0?.folderPreviewDepth)||0),t0=g(L),o0=g(""),F_=g(null),Z_=g(0),v0=g(new Set),O0=g(null),q_=g(null),d0=g(new Map),H_=g(_),D0=g($),u0=g(Z),I0=g(null),r0=g(null),z_=g(null),Q_=g(null),U_=g(null),N_=g(null),J_=g("."),x_=g(0),P_=g({path:null,dragging:!1,startX:0,startY:0}),E_=g({path:null,dragging:!1,startX:0,startY:0}),o_=g({path:null,timer:0}),f_=g(!1),q0=g(0),v=g(new Map),r=g(null),o=g(null),j0=g(null),N0=g(null),y0=g(null),A0=g(null),M0=g(J),T0=g(j),m0=g(G??j),S0=g(0),n0=g(_0),e0=g(f),x0=g(c),w0=g(null),D_=g({x:0,y:0}),__=g(0),n=g(null),B0=g(B),l0=g(E),j_=g(null),R_=g(z);H_.current=_,D0.current=$,u0.current=Z,u(()=>{t0.current=L},[L]),u(()=>{M0.current=J},[J]),u(()=>{T0.current=j},[j]),u(()=>{m0.current=G??j},[G,j]),u(()=>{n0.current=_0},[_0]);let F1=R(()=>{if(!x_.current)return;clearTimeout(x_.current),x_.current=0},[]);u(()=>()=>F1(),[F1]),u(()=>{if(typeof window>"u")return;let S=()=>{c0(jj({stored:O1(H8),...$j()}))};S();let l=()=>S(),d=()=>S(),a=(H0)=>{if(!H0||H0.key===null||H0.key===H8)S()};window.addEventListener("resize",l),window.addEventListener("focus",d),window.addEventListener("storage",a);let F0=window.matchMedia?.("(pointer: coarse)"),L0=window.matchMedia?.("(hover: none)"),J0=(H0,a0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",a0);else if(H0.addListener)H0.addListener(a0)},C0=(H0,a0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",a0);else if(H0.removeListener)H0.removeListener(a0)};return J0(F0,l),J0(L0,l),()=>{window.removeEventListener("resize",l),window.removeEventListener("focus",d),window.removeEventListener("storage",a),C0(F0,l),C0(L0,l)}},[]),u(()=>{if(typeof window>"u")return;let S=()=>{P0(A5())},l=(F0)=>{if(!F0||F0.key===null||F0.key===p2||F0.key===r2)S()},d=()=>S(),a=(F0)=>{let L0=F0?.detail?.settings;if(L0&&typeof L0==="object"){P0({refreshIntervalSec:Number(L0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(L0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",d),window.addEventListener("storage",l),window.addEventListener(l2,a),()=>{window.removeEventListener("focus",d),window.removeEventListener("storage",l),window.removeEventListener(l2,a)}},[]),u(()=>{let S=(l)=>{let d=l?.detail?.path;if(!d)return;let a=d.split("/"),F0=[];for(let L0=1;L0<a.length;L0++)F0.push(a.slice(0,L0).join("/"));if(F0.length)N((L0)=>{let J0=new Set(L0);J0.add(".");for(let C0 of F0)J0.add(C0);return J0});U(d),requestAnimationFrame(()=>{let L0=document.querySelector(`[data-path="${CSS.escape(d)}"]`);if(L0)L0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),u(()=>{e0.current=f},[f]),u(()=>{x0.current=c},[c]),u(()=>{B0.current=B},[B]),u(()=>{l0.current=E},[E]),u(()=>{R_.current=z},[z]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>g0(CQ());S();let l=window.matchMedia?.("(prefers-color-scheme: dark)"),d=()=>S();if(l?.addEventListener)l.addEventListener("change",d);else if(l?.addListener)l.addListener(d);let a=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(a?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)a?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(l?.removeEventListener)l.removeEventListener("change",d);else if(l?.removeListener)l.removeListener(d);a?.disconnect()}},[]),u(()=>{if(!E)return;let S=U_.current;if(!S)return;let l=requestAnimationFrame(()=>{yQ(S)});return()=>cancelAnimationFrame(l)},[E]),u(()=>{if(!s0)return;let S=(d)=>{let a=d?.target;if(!(a instanceof Element))return;if(y0.current?.contains(a))return;if(A0.current?.contains(a))return;f0(!1)},l=(d)=>{if(d?.key==="Escape")f0(!1),A0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",l)}},[s0]);let g_=async(S,l={})=>{let d=Boolean(l?.autoOpen),a=String(S||"").trim();W(!0),O(null),I(null);try{let F0=await x7(a,20000);if(d&&a&&xQ(a,F0,{resolvePane:(L0)=>Y_.resolve(L0)}))return u0.current?.(a,F0),F0;return O(F0),F0}catch(F0){let L0={error:F0.message||"Failed to load preview"};return O(L0),L0}finally{W(!1)}};I0.current=g_;let J1=R(async()=>{try{let S=await T7("all");return z0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);q_.current=J1;let I_=R(()=>{q_.current?.()},[]),k_=async()=>{if(!T0.current)return;try{let S=await L6("",1,M0.current),l=IQ(S.root,t0.current,M0.current);if(l===o0.current){A(!1);return}if(o0.current=l,F_.current=S.root,!Z_.current)Z_.current=requestAnimationFrame(()=>{Z_.current=0,K((d)=>qj(d,F_.current)),A(!1)})}catch(S){w(S.message||"Failed to load workspace"),A(!1)}},A1=async(S)=>{if(!S)return;if(v0.current.has(S))return;v0.current.add(S);try{let l=await L6(S,1,M0.current);K((d)=>Xj(d,S,l.root))}catch(l){w(l.message||"Failed to load workspace")}finally{v0.current.delete(S)}};r0.current=A1;let W_=R(()=>{let S=B;if(!S)return".";let l=d0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let d=S.split("/");return d.pop(),d.join("/")||"."},[B]),A_=R((S)=>{let l=S?.closest?.(".workspace-row");if(!l)return null;let d=l.dataset.path,a=l.dataset.type;if(!d)return null;if(a==="dir")return d;if(d.includes("/")){let F0=d.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),U1=R((S)=>{return A_(S?.target||null)},[A_]),m_=R((S)=>{n0.current=S,E0(S)},[]),r_=R(()=>{let S=o_.current;if(S?.timer)clearTimeout(S.timer);o_.current={path:null,timer:0}},[]),s_=R((S)=>{if(!S||S==="."){r_();return}let l=d0.current?.get(S);if(!l||l.type!=="dir"){r_();return}if(t0.current?.has(S)){r_();return}if(o_.current?.path===S)return;r_();let d=setTimeout(()=>{o_.current={path:null,timer:0},r0.current?.(S),N((a)=>{let F0=new Set(a);return F0.add(S),F0})},600);o_.current={path:S,timer:d}},[r_]),B_=R((S,l)=>{if(D_.current={x:S,y:l},__.current)return;__.current=requestAnimationFrame(()=>{__.current=0;let d=w0.current;if(!d)return;let a=D_.current;d.style.transform=`translate(${a.x+12}px, ${a.y+12}px)`})},[]),x1=R((S)=>{if(!S)return;let d=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!d)return;m({path:S,label:d})},[]),D1=R(()=>{if(m(null),__.current)cancelAnimationFrame(__.current),__.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),b1=R((S)=>{if(!S)return".";let l=d0.current?.get(S);if(l&&l.type==="dir")return l.path;if(S==="."||!S.includes("/"))return".";let d=S.split("/");return d.pop(),d.join("/")||"."},[]),k1=R(()=>{H(null),k("")},[]),_$=R((S)=>{if(!S)return;let d=(d0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!d||S===".")return;H(S),k(d)},[]),h4=R(async()=>{let S=l0.current;if(!S)return;let l=(D||"").trim();if(!l){k1();return}let d=d0.current?.get(S),a=(d?.name||S.split("/").pop()||S).trim();if(l===a){k1();return}try{let L0=(await P7(S,l))?.path||S,J0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),w(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:L0,type:d?.type||"file"}})),d?.type==="dir")N((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(L0);else if(a0.startsWith(`${S}/`))H0.add(`${L0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(L0),d?.type==="dir")O(null),W(!1),I(null);else I0.current?.(L0);r0.current?.(J0),I_()}catch(F0){w(F0?.message||"Failed to rename file")}},[k1,D,I_]),k$=R(async(S)=>{let a=S||".";for(let F0=0;F0<50;F0+=1){let J0=`untitled${F0===0?"":`-${F0}`}.md`;try{let H0=(await C7(a,J0,""))?.path||(a==="."?J0:`${a}/${J0}`);if(a&&a!==".")N((a0)=>new Set([...a0,a]));U(H0),w(null),r0.current?.(a),I0.current?.(H0),I_();return}catch(C0){if(C0?.status===409||C0?.code==="file_exists")continue;w(C0?.message||"Failed to create file");return}}w("Failed to create file (untitled name already in use).")},[]),t_=R((S)=>{if(S?.stopPropagation?.(),G0)return;let l=b1(B0.current);k$(l)},[G0,b1,k$]);u(()=>{if(typeof window>"u")return;let S=(l)=>{let d=l?.detail?.updates||[];if(!Array.isArray(d)||d.length===0)return;K((C0)=>{let H0=C0;for(let a0 of d){if(!a0?.root)continue;if(!H0||a0.path==="."||!a0.path)H0=a0.root;else H0=Xj(H0,a0.path,a0.root)}if(H0)o0.current=IQ(H0,t0.current,M0.current);return A(!1),H0});let a=B0.current;if(Boolean(a)&&d.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)||H0.startsWith(`${a}/`)}))v.current.clear();if(I_(),!a||!R_.current)return;let L0=d0.current?.get(a);if(L0&&L0.type==="dir")return;if(d.some((C0)=>{let H0=C0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)}))I0.current?.(a)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),O0.current=k_;let c_=g(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),l=m0.current??T0.current,d=document.visibilityState!=="hidden"&&(l||S.matches&&T0.current);K6(d,M0.current).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",a,{visible:d,showHidden:M0.current})})}).current,M1=g(0),H1=g(()=>{if(M1.current)clearTimeout(M1.current);M1.current=setTimeout(()=>{M1.current=0,c_()},250)}).current;u(()=>{if(T0.current)O0.current?.(),q_.current?.();H1()},[j,G]),u(()=>{O0.current(),q_.current?.();let S=setInterval(()=>{O0.current(),q_.current?.()},i0);return()=>clearInterval(S)},[i0]),u(()=>{c_();let S=O4("previewHeight",null),l=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(q0.current=l,z_.current)z_.current.style.setProperty("--preview-height",`${l}px`);let d=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>H1();if(d.addEventListener)d.addEventListener("change",a);else if(d.addListener)d.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(Z_.current)cancelAnimationFrame(Z_.current),Z_.current=0;if(d.removeEventListener)d.removeEventListener("change",a);else if(d.removeListener)d.removeListener(a);if(document.removeEventListener("visibilitychange",a),M1.current)clearTimeout(M1.current),M1.current=0;K6(!1,M0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:M0.current})})}},[]);let _1=Y0(()=>SQ(Q,L,J),[Q,L,J]),M$=Y0(()=>new Map(_1.map((S)=>[S.node.path,S.node])),[_1]),y$=Y0(()=>wQ(G_),[G_]);d0.current=M$;let M_=(B?d0.current.get(B):null)?.type==="dir";u(()=>{if(!B||!M_){V0(null),r.current=null,o.current=null;return}if(b0<=0){V0({loading:!1,error:null,payload:null,disabled:!0}),r.current=null,o.current=null;return}let S=B,l=`${J?"hidden":"visible"}:${b0}:${B}`,d=v.current,a=d.get(l);if(a?.root){d.delete(l),d.set(l,a);let J0=PQ(a.root,Boolean(a.truncated),h0);if(J0)r.current=J0,o.current=B,V0({loading:!1,error:null,payload:J0,disabled:!1});return}let F0=r.current,L0=o.current;V0({loading:!0,error:null,payload:L0===B?F0:null,disabled:!1}),L6(B,b0,J).then((J0)=>{if(B0.current!==S)return;let C0={root:J0?.root,truncated:Boolean(J0?.truncated)};d.delete(l),d.set(l,C0);while(d.size>PA){let a0=d.keys().next().value;if(!a0)break;d.delete(a0)}let H0=PQ(C0.root,C0.truncated,h0);r.current=H0,o.current=B,V0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((J0)=>{if(B0.current!==S)return;V0({loading:!1,error:J0?.message||"Failed to load folder size chart",payload:L0===B?F0:null,disabled:!1})})},[B,M_,J,h0,b0]);let V1=Boolean(z&&z.kind==="text"&&!M_&&(!z.size||z.size<=262144)),T$=V1?"Open in editor":z?.size>262144?"File too large to edit":"File is not editable",l4=Boolean(B&&!M_&&CA(B)),j$=Boolean(B&&B!=="."),p4=Boolean(B&&!M_),r4=Boolean(B&&!M_),w$=B&&M_?C2(B,J):null,x$=lQ(Q0),v1=RA(Q0),m1=Q0?.state||"never_indexed",n4=m1!=="ready",Q1=R(()=>f0(!1),[]),S_=R(async(S)=>{Q1();try{await S?.()}catch(l){console.warn("[workspace-explorer] Header menu action failed:",l)}},[Q1]),d4=R(async(S)=>{S?.stopPropagation?.(),Z0(!0),z0((l)=>({scope:"all",last_indexed_at:l?.last_indexed_at||null,last_error:null,indexed_file_count:l?.indexed_file_count||0,roots:l?.roots||[],updated_at:l?.updated_at||null,state:"indexing"}));try{let l=await w7("all");z0(l),w(null),o0.current="",O0.current?.()}catch(l){let d=l?.message||"Failed to reindex workspace";z0((a)=>({scope:"all",last_indexed_at:a?.last_indexed_at||null,last_error:d,indexed_file_count:a?.indexed_file_count||0,roots:a?.roots||[],updated_at:a?.updated_at||null,state:"failed"})),w(d)}finally{Z0(!1)}},[]);u(()=>{let S=j0.current;if(N0.current)N0.current.dispose(),N0.current=null;if(!S)return;if(S.innerHTML="",!B||M_||!z||z.error)return;let l={path:B,content:typeof z.text==="string"?z.text:void 0,mtime:z.mtime,size:z.size,preview:z,mode:"view"},d=Y_.resolve(l)||Y_.get("workspace-preview-default");if(!d)return;let a=d.mount(S,l);return N0.current=a,()=>{if(N0.current===a)a.dispose(),N0.current=null;S.innerHTML=""}},[B,M_,z]);let I1=(S)=>{let l=S?.target;if(l instanceof Element)return l;return l?.parentElement||null},I$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},i4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},b5=g((S)=>{let l=I1(S),d=l?.closest?.("[data-path]");if(!d)return;let a=d.dataset.path;if(!a||a===".")return;let F0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),L0=Boolean(l?.closest?.(".workspace-caret"));if(F0||L0)return;if(l0.current===a)return;_$(a)}).current,v5=g((S)=>{if(f_.current){f_.current=!1;return}let l=I1(S),d=l?.closest?.("[data-path]");if(Q_.current?.focus?.(),!d)return;let a=d.dataset.path,F0=d.dataset.type,L0=Boolean(l?.closest?.(".workspace-caret")),J0=Boolean(l?.closest?.("button"))||Boolean(l?.closest?.("a"))||Boolean(l?.closest?.("input")),C0=B0.current===a,H0=l0.current;if(H0){if(H0===a)return;k1()}if(F0==="dir"){if(j_.current=null,U(a),O(null),I(null),W(!1),!t0.current.has(a))r0.current?.(a);if(C0&&!L0)return;N((p_)=>{let $1=new Set(p_);if($1.has(a))$1.delete(a);else $1.add(a);return $1})}else{j_.current=null,U(a);let a0=d0.current.get(a);if(a0)H_.current?.(a0.path,a0);if(!J0&&!L0)I0.current?.(a)}}).current,Y4=g(()=>{o0.current="",O0.current(),q_.current?.(),Array.from(t0.current||[]).filter((l)=>l&&l!==".").forEach((l)=>r0.current?.(l))}).current,C$=g(()=>{j_.current=null,U(null),O(null),I(null),W(!1)}).current,o4=g(()=>{C((S)=>{let l=!S;if(typeof window<"u")V_("workspaceShowHidden",String(l));return M0.current=l,K6(!0,l).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",a,{showHidden:l})}),o0.current="",O0.current?.(),Array.from(t0.current||[]).filter((a)=>a&&a!==".").forEach((a)=>r0.current?.(a)),l})}).current,s4=g((S)=>{if(I1(S)?.closest?.("[data-path]"))return;C$()}).current,L1=R(async(S)=>{if(!S)return;let l=S.split("/").pop()||S;if(!window.confirm(`Delete "${l}"? This cannot be undone.`))return;try{await R7(S);let a=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(B0.current===S)C$();r0.current?.(a),w(null),I_()}catch(a){O((F0)=>({...F0||{},error:a.message||"Failed to delete file"}))}},[C$]),P$=R((S)=>{let l=Q_.current;if(!l||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;l.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),q4=R((S)=>{let l=I1(S);if(l0.current||i4(l))return;let d=_1;if(!d||d.length===0)return;let a=B?d.findIndex((F0)=>F0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let F0=Math.min(a+1,d.length-1),L0=d[F0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")H_.current?.(L0.node.path,L0.node),I0.current?.(L0.node.path);else O(null),W(!1),I(null);P$(L0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let F0=a<=0?0:a-1,L0=d[F0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")H_.current?.(L0.node.path,L0.node),I0.current?.(L0.node.path);else O(null),W(!1),I(null);P$(L0.node.path);return}if(S.key==="ArrowRight"&&a>=0){let F0=d[a];if(F0?.node?.type==="dir"&&!L.has(F0.node.path))S.preventDefault(),r0.current?.(F0.node.path),N((L0)=>new Set([...L0,F0.node.path]));return}if(S.key==="ArrowLeft"&&a>=0){let F0=d[a];if(F0?.node?.type==="dir"&&L.has(F0.node.path))S.preventDefault(),N((L0)=>{let J0=new Set(L0);return J0.delete(F0.node.path),J0});return}if(S.key==="Enter"&&a>=0){S.preventDefault();let F0=d[a];if(!F0)return;let L0=F0.node.path;if(F0.node.type==="dir"){if(!t0.current.has(L0))r0.current?.(L0);N((C0)=>{let H0=new Set(C0);if(H0.has(L0))H0.delete(L0);else H0.add(L0);return H0}),O(null),I(null),W(!1)}else H_.current?.(L0,F0.node),I0.current?.(L0);return}if((S.key==="Delete"||S.key==="Backspace")&&a>=0){let F0=d[a];if(!F0||F0.node.type==="dir")return;S.preventDefault(),L1(F0.node.path);return}if(S.key==="Escape")S.preventDefault(),C$()},[C$,L1,L,_1,P$,B]),V4=R((S)=>{let l=gA(S,l0.current);if(!l)return;P_.current={path:l.dragPath,dragging:!1,startX:l.startX,startY:l.startY}},[]),C1=R(()=>{let S=P_.current;if(S?.dragging&&S.path){let l=n0.current||W_(),d=n.current;if(typeof d==="function")d(S.path,l)}P_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),p(null),m_(null),r_(),D1()},[W_,D1,m_,r_]),E1=R((S)=>{let l=P_.current,d=S?.touches?.[0];if(!d||!l?.path)return;let a=Math.abs(d.clientX-l.startX),F0=Math.abs(d.clientY-l.startY),L0=a>8||F0>8;if(!l.dragging&&L0)l.dragging=!0,b(!0),p("move"),x1(l.path);if(l.dragging){S.preventDefault(),B_(d.clientX,d.clientY);let J0=document.elementFromPoint(d.clientX,d.clientY),C0=A_(J0)||W_();if(n0.current!==C0)m_(C0);s_(C0)}},[A_,W_,x1,B_,m_,s_]),m5=g((S)=>{S.preventDefault();let l=z_.current;if(!l)return;let d=S.clientY,a=q0.current||280,F0=S.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let L0=d,J0=(H0)=>{L0=H0.clientY;let a0=l.clientHeight-80,p_=Math.min(Math.max(a-(H0.clientY-d),80),a0);l.style.setProperty("--preview-height",`${p_}px`),q0.current=p_},C0=()=>{let H0=l.clientHeight-80,a0=Math.min(Math.max(a-(L0-d),80),H0);q0.current=a0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",V_("previewHeight",String(Math.round(a0))),document.removeEventListener("mousemove",J0),document.removeEventListener("mouseup",C0)};document.addEventListener("mousemove",J0),document.addEventListener("mouseup",C0)}).current,Q4=g((S)=>{S.preventDefault();let l=z_.current;if(!l)return;let d=S.touches[0];if(!d)return;let a=d.clientY,F0=q0.current||280,L0=S.currentTarget;L0.classList.add("dragging"),document.body.style.userSelect="none";let J0=(H0)=>{let a0=H0.touches[0];if(!a0)return;H0.preventDefault();let p_=l.clientHeight-80,$1=Math.min(Math.max(F0-(a0.clientY-a),80),p_);l.style.setProperty("--preview-height",`${$1}px`),q0.current=$1},C0=()=>{L0.classList.remove("dragging"),document.body.style.userSelect="",V_("previewHeight",String(Math.round(q0.current||F0))),document.removeEventListener("touchmove",J0),document.removeEventListener("touchend",C0),document.removeEventListener("touchcancel",C0)};document.addEventListener("touchmove",J0,{passive:!1}),document.addEventListener("touchend",C0),document.addEventListener("touchcancel",C0)}).current,G$=R((S=B)=>{if(!S)return;fQ(I2(S))},[B]),e_=async()=>{if(!B||M_)return;await L1(B)},f$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},a4=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current+=1,!e0.current)b(!0);p("upload");let l=U1(S)||W_();m_(l),s_(l)},[W_,U1,m_,s_]),Z$=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!e0.current)b(!0);if(x0.current!=="upload")p("upload");let l=U1(S)||W_();if(n0.current!==l)m_(l);s_(l)},[W_,U1,m_,s_]),m6=R((S)=>{if(!f$(S))return;if(S.preventDefault(),S0.current=Math.max(0,S0.current-1),S0.current===0)b(!1),p(null),m_(null),r_()},[m_,r_]),b_=R(async(S,l=".")=>{let d=Array.from(S||[]);if(d.length===0)return;let a=l&&l!==""?l:".",F0=a!=="."?a:"workspace root";F1(),$0(!0),U0({current:0,total:d.length,name:"",percent:0,done:!1,error:null});try{let L0=null;for(let J0=0;J0<d.length;J0++){let C0=d[J0],H0=C0?.name||`file ${J0+1}`;U0((p_)=>({...p_,current:J0+1,name:H0,percent:0}));let a0=(p_)=>U0(($1)=>({...$1,percent:p_.percent}));try{L0=await x2(C0,a,{onProgress:a0})}catch(p_){let $1=p_?.status,Q$=p_?.code;if($1===409||Q$==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${F0}. Overwrite?`))continue;L0=await x2(C0,a,{overwrite:!0,onProgress:a0})}else throw p_}}if(L0?.path)j_.current=L0.path,U(L0.path),I0.current?.(L0.path);r0.current?.(a),I_(),U0((J0)=>({...J0,done:!0})),F1(),x_.current=window.setTimeout(()=>{x_.current=0,U0(null)},1500)}catch(L0){w(L0.message||"Failed to upload file"),U0((J0)=>J0?{...J0,error:L0.message||"Upload failed"}:null),F1(),x_.current=window.setTimeout(()=>{x_.current=0,U0(null)},4000)}finally{$0(!1)}},[F1]),i8=R(async(S,l)=>{if(!S)return;let d=d0.current?.get(S);if(!d)return;let a=l&&l!==""?l:".",F0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(a===F0)return;try{let J0=(await f7(S,a))?.path||S;if(d.type==="dir")N((C0)=>{let H0=new Set;for(let a0 of C0)if(a0===S)H0.add(J0);else if(a0.startsWith(`${S}/`))H0.add(`${J0}${a0.slice(S.length)}`);else H0.add(a0);return H0});if(U(J0),d.type==="dir")O(null),W(!1),I(null);else I0.current?.(J0);r0.current?.(F0),r0.current?.(a),I_()}catch(L0){w(L0?.message||"Failed to move entry")}},[]);n.current=i8;let o8=R(async(S)=>{if(!f$(S))return;S.preventDefault(),S0.current=0,b(!1),p(null),E0(null),r_();let l=Array.from(S?.dataTransfer?.files||[]);if(l.length===0)return;let d=n0.current||U1(S)||W_();await b_(l,d)},[W_,U1,b_]),P1=R((S)=>{if(S?.stopPropagation?.(),G0)return;let l=S?.currentTarget?.dataset?.uploadTarget||".";J_.current=l,N_.current?.click()},[G0]),L4=R((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let l=S?.currentTarget?.dataset?.folderHintTarget||B0.current||".";if(!l)return;D0.current?.(l,d0.current.get(l))},[]),R$=R(()=>{if(G0)return;let S=B0.current,l=S?d0.current?.get(S):null;J_.current=l?.type==="dir"?l.path:".",N_.current?.click()},[G0]),S$=R(()=>{S_(()=>t_(null))},[S_,t_]),u$=R(()=>{S_(()=>R$())},[S_,R$]),t4=R(()=>{S_(()=>Y4())},[S_,Y4]),X$=R(()=>{S_(()=>o4())},[S_,o4]),Y$=R(()=>{if(!B||!l4)return;S_(()=>u0.current?.(B,z))},[S_,B,l4,z]),K4=R(()=>{if(!B||!V1)return;S_(()=>u0.current?.(B,z))},[S_,B,V1,z]),B4=R(()=>{if(!B||B===".")return;S_(()=>_$(B))},[S_,B,_$]),q$=R(()=>{if(!B||M_)return;S_(()=>e_())},[S_,B,M_,e_]),c6=R(()=>{if(!B||M_)return;S_(()=>G$())},[S_,B,M_,G$]),V$=R(()=>{if(!w$)return;Q1(),fQ(w$)},[Q1,w$]),h6=R(()=>{Q1(),X?.()},[Q1,X]),c5=R(()=>{Q1(),Y?.()},[Q1,Y]),h5=R(()=>{Q1(),q?.()},[Q1,q]),l5=R((S)=>{if(!S||S.button!==0)return;let l=S.currentTarget;if(!l||!l.dataset)return;let d=l.dataset.path;if(!d||d===".")return;if(l0.current===d)return;let a=I1(S);if(a?.closest?.("button, a, input, .workspace-caret"))return;if(!I$(a))return;S.preventDefault(),E_.current={path:d,dragging:!1,startX:S.clientX,startY:S.clientY};let F0=(J0)=>{let C0=E_.current;if(!C0?.path)return;let H0=Math.abs(J0.clientX-C0.startX),a0=Math.abs(J0.clientY-C0.startY),p_=H0>4||a0>4;if(!C0.dragging&&p_)C0.dragging=!0,f_.current=!0,b(!0),p("move"),x1(C0.path),B_(J0.clientX,J0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(C0.dragging){J0.preventDefault(),B_(J0.clientX,J0.clientY);let $1=document.elementFromPoint(J0.clientX,J0.clientY),Q$=A_($1)||W_();if(n0.current!==Q$)m_(Q$);s_(Q$)}},L0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",L0);let J0=E_.current;if(J0?.dragging&&J0.path){let C0=n0.current||W_(),H0=n.current;if(typeof H0==="function")H0(J0.path,C0)}E_.current={path:null,dragging:!1,startX:0,startY:0},S0.current=0,b(!1),p(null),m_(null),r_(),D1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{f_.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",L0)},[A_,W_,x1,B_,D1,m_,s_,r_]),s8=R(async(S)=>{let l=Array.from(S?.target?.files||[]);if(l.length===0)return;let d=J_.current||".";if(await b_(l,d),J_.current=".",S?.target)S.target.value=""},[b_]);return F`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${G_}
            ref=${z_}
            onDragEnter=${a4}
            onDragOver=${Z$}
            onDragLeave=${m6}
            onDrop=${o8}
        >
            <input type="file" multiple style="display:none" ref=${N_} onChange=${s8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${A0}
                            class=${`workspace-menu-button${s0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),f0((l)=>!l)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${s0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${s0&&F`
                            <div class="workspace-menu-dropdown" ref=${y0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${G0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${u$} disabled=${G0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${t4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>S_(()=>d4())} disabled=${s}>
                                    ${s?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${J?" active":""}`} role="menuitem" onClick=${X$}>
                                    ${J?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||q)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h5}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&F`<div class="workspace-menu-separator"></div>`}
                                ${l4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y$}>Open in tab</button>
                                `}
                                ${B&&!M_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K4} disabled=${!V1}>Open in editor</button>
                                `}
                                ${j$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${B4}>Rename selected</button>
                                `}
                                ${r4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c6}>Download selected file</button>
                                `}
                                ${w$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V$}>Download selected folder (zip)</button>
                                `}
                                ${p4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${q$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{f0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t_} title="New file" disabled=${G0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Y4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${n4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${m1}`} title=${v1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${x$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${s4}>
                ${X0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${X0.error?F`<span class="workspace-upload-strip-error">${X0.error}</span>`:X0.done?F`<span>Done</span>`:F`<span>${X0.total>1?`Uploading ${X0.current}/${X0.total}: ${X0.name}`:`Uploading ${X0.name}`}${X0.percent>0?` (${X0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!X0.done&&!X0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${X0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${x&&F`<div class="workspace-loading">Loading…</div>`}
                ${y&&F`<div class="workspace-error">${y}</div>`}
                ${Q&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${v5}
                        onDblClick=${b5}
                        onKeyDown=${q4}
                        onTouchStart=${V4}
                        onTouchEnd=${C1}
                        onTouchMove=${E1}
                        onTouchCancel=${C1}
                    >
                        ${_1.map(({node:S,depth:l})=>{let d=S.type==="dir",a=S.path===B,F0=S.path===E,L0=d&&L.has(S.path),J0=_0&&S.path===_0,C0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return F`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${a?" selected":""}${J0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+l*y$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${l5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${d?s1(L0?"down":"right"):null}
                                    </span>
                                    <svg class=${`workspace-node-icon${d?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${d?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${U_}
                                                value=${D}
                                                onInput=${(H0)=>k(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),h4();else if(H0.key==="Escape")H0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${d&&!L0&&C0>0&&F`
                                        <span class="workspace-count">${C0}</span>
                                    `}
                                    ${d&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${L4}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                <path d="M12 11v6"/>
                                                <path d="M9 14h6"/>
                                            </svg>
                                        </button>
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${P1}
                                            disabled=${G0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${B&&F`
                <div class="workspace-preview-splitter-h" onMouseDown=${m5} onTouchStart=${Q4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t_} title="New file" disabled=${G0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!M_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>V1&&u0.current?.(B,z)}
                                    title=${T$}
                                    disabled=${!V1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${e_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${M_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${L4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${B}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${R$}
                                        title="Upload files to this folder" disabled=${G0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${C2(B,J)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${I2(B)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${M&&F`<div class="workspace-loading">Loading preview…</div>`}
                    ${z?.error&&F`<div class="workspace-error">${z.error}</div>`}
                    ${M_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${t?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${t?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${t?.error&&F`<div class="workspace-error">${t.error}</div>`}
                        ${t?.payload&&t.payload.segments?.length>0&&F`
                            <${fA} payload=${t.payload} />
                        `}
                        ${t?.payload&&(!t.payload.segments||t.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${z&&!z.error&&!M_&&F`
                        <div class="workspace-preview-body" ref=${j0}></div>
                    `}
                </div>
            `}
            ${e&&F`
                <div class="workspace-drag-ghost" ref=${w0}>${e.label}</div>
            `}
        </aside>
    `}k0();var bA=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function W8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function rQ(_,$,j){let G=W8(_,$,j);return G!=null&&bA.has(G)}function nQ(_,$,j){return W8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function dQ(_,$,j){return W8(_,$,j)==="editor"}var vA=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,mA=/\.(csv|tsv)$/i,cA=/\.pdf$/i,hA=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function lA(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=QV(j,{hasPopOutTab:$});if(G)return G;if(vA.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(mA.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(cA.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(hA.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function iQ({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:V,onEditSource:Q,previewTabs:K,diffTabs:L,paneOverrides:N,detachedTabs:B,onReattachTab:U,onToggleDock:E,dockVisible:H,onToggleZen:D,zenMode:k,onPopOutTab:z}){let[O,I]=P(null),x=g(null);u(()=>{if(!O)return;let m=(_0)=>{if(_0.type==="keydown"&&_0.key!=="Escape")return;I(null)};return document.addEventListener("click",m),document.addEventListener("keydown",m),()=>{document.removeEventListener("click",m),document.removeEventListener("keydown",m)}},[O]),u(()=>{let m=(_0)=>{if(_0.ctrlKey&&_0.key==="Tab"){if(_0.preventDefault(),!_.length)return;let E0=_.findIndex((G0)=>G0.id===$);if(_0.shiftKey){let G0=_[(E0-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(E0+1)%_.length];j?.(G0.id)}return}if((_0.ctrlKey||_0.metaKey)&&_0.key==="w"){let E0=document.querySelector(".editor-pane");if(E0&&E0.contains(document.activeElement)){if(_0.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[_,$,j,G]);let A=R((m,_0)=>{if(m.button===0){j?.(_0);return}if(m.button===1)m.preventDefault(),G?.(_0)},[j,G]),M=R((m,_0)=>{if(m.defaultPrevented)return;if(m.button===0)j?.(_0)},[j]),W=R((m,_0)=>{m.preventDefault(),I({id:_0,x:m.clientX,y:m.clientY})},[]),y=R((m)=>{m.stopPropagation()},[]),w=R((m,_0)=>{m.preventDefault(),m.stopPropagation(),G?.(_0)},[G]);u(()=>{if(!$||!x.current)return;let m=x.current.querySelector(".tab-item.active");if(m)m.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let J=R((m)=>{if(!(N instanceof Map))return null;return N.get(m)||null},[N]),C=Y0(()=>_.find((m)=>m.id===O?.id)||null,[O?.id,_]),f=Y0(()=>{let m=O?.id;if(!m)return!1;return rQ(m,J(m),(_0)=>Y_.resolve(_0))},[O?.id,J]),b=Y0(()=>{let m=O?.id;if(!m)return"Edit Source";return nQ(m,J(m),(_0)=>Y_.resolve(_0))},[O?.id,J]),c=Y0(()=>{let m=O?.id;if(!m||!(B instanceof Map))return!1;return B.has(m)},[O?.id,B]),p=Y0(()=>{let m=O?.id;if(!m||!(L instanceof Set))return!1;return L.has(m)},[O?.id,L]),e=Y0(()=>{let m=O?.id;if(!m)return!1;let _0=_.find((G0)=>G0.id===m)||null;if(!_0)return!1;return dQ(m,J(m),(G0)=>Y_.resolve(G0))&&Boolean(_0.dirty||p)},[O?.id,p,J,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((m)=>F`
                <div
                    key=${m.id}
                    class=${`tab-item${m.id===$?" active":""}${m.dirty?" dirty":""}${m.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${m.id===$}
                    title=${m.path}
                    onMouseDown=${(_0)=>A(_0,m.id)}
                    onClick=${(_0)=>M(_0,m.id)}
                    onContextMenu=${(_0)=>W(_0,m.id)}
                >
                    ${m.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${m.label}</span>
                    ${B instanceof Map&&B.has(m.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${y}
                        onMouseDown=${y}
                        onClick=${(_0)=>w(_0,m.id)}
                        title=${m.dirty?"Unsaved changes":"Close"}
                        aria-label=${m.dirty?"Unsaved changes":`Close ${m.label}`}
                    >
                        ${m.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${E&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${H?" active":""}`}
                    onClick=${E}
                    title=${`${H?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${H?"Hide":"Show"} terminal`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${D&&F`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${D}
                    title=${`${k?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${k?"Exit":"Enter"} zen mode`}
                    aria-pressed=${k?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${k?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&F`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{G?.(O.id),I(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),I(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),I(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(O.id),I(null)}}>
                    ${C?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&Q&&F`
                    <button onClick=${()=>{Q(O.id),I(null)}}>${b}</button>
                `}
                ${c&&U&&F`
                    <button onClick=${()=>{U(O.id),I(null)}}>Reattach</button>
                `}
                ${z&&!c&&F`
                    <button onClick=${()=>{let m=_.find((_0)=>_0.id===O.id);z(O.id,m?.label),I(null)}}>Open in Window</button>
                `}
                ${e&&V&&F`
                    <hr />
                    <button onClick=${()=>{j?.(O.id),V(O.id),I(null)}}>${p?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(O.id)&&F`
                    <hr />
                    <button onClick=${()=>{q(O.id),I(null)}}>
                        ${K?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let m=lA(O.id,{hasPopOutTab:typeof z==="function"});if(!m)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(m,"_blank","noopener"),I(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}k0();w_();m2();function u4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function O8(_,$=30){return u4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w5(_,$=56,j=16,G={}){let Z=u4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),V=(j-q*j).toFixed(2);return`M 0 ${V} L ${$} ${V}`}return Z.map((q,V)=>{let Q=V/(Z.length-1||1)*$,K=(q-X)/(Y-X),L=j-K*j;return`${V===0?"M":"L"} ${Q.toFixed(2)} ${L.toFixed(2)}`}).join(" ")}function $4(_){return`${Math.round(Number(_)||0)}%`}function Qj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function pA(_){let $=[`CPU ${$4(_?.cpu_percent)}`,`RAM ${$4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Qj(_?.buffer_cache_bytes)}`);if(sQ(_))$.push(`VRAM ${$4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${$4(_?.swap_percent)}`);return $.join(" • ")}function oQ(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function rA(_){return oQ(_)>0&&u4(_?.process_rss_series_bytes).length>0}function sQ(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&u4(_?.vram_series).length>0}function nA(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function aQ({mode:_="overlay"}){let[$,j]=P(()=>O6(!1)),[G,Z]=P(()=>XY(!1)),[X,Y]=P(()=>nA()),[q,V]=P({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[Q,K]=P(!1);u(()=>{let w=(C)=>{j(Boolean(C?.detail?.enabled))},J=(C)=>{Z(Boolean(C?.detail?.collapsed))};return window.addEventListener(C4,w),window.addEventListener(v2,J),()=>{window.removeEventListener(C4,w),window.removeEventListener(v2,J)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let w=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(w.matches));if(J(),typeof w.addEventListener==="function")return w.addEventListener("change",J),()=>w.removeEventListener("change",J);return w.addListener(J),()=>w.removeListener(J)},[]);let N=_==="overlay";u(()=>{if(!$||!N)return;let w=!1,J=0,C=async()=>{K((f)=>f||q.cpu_series.length>0?f:!0);try{let f=await L7();if(w)return;V({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:O8(f?.cpu_series),ram_series:O8(f?.ram_series),swap_series:O8(f?.swap_series),vram_series:O8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:u4(f?.buffer_cache_series_bytes),process_rss_series_bytes:u4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(w)return}finally{if(!w)K(!1)}};return C(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;C()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(w=!0,J)window.clearInterval(J)}},[$,N]);let B=Y0(()=>w5(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=Y0(()=>w5(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),E=Y0(()=>w5(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),H=Y0(()=>w5(q.vram_series,56,16,{min:0,max:100}),[q.vram_series]),D=Y0(()=>w5(q.buffer_cache_series_bytes),[q.buffer_cache_series_bytes]),k=Y0(()=>w5(q.process_rss_series_bytes),[q.process_rss_series_bytes]),z=Number(q.buffer_cache_bytes)>0&&u4(q.buffer_cache_series_bytes).length>0,O=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,I=sQ(q),x=oQ(q),A=rA(q),M=Y0(()=>pA(q),[q]);if(!$||!N)return null;let W=G?"Show system meters":Q?"Updating system meters… Click to collapse.":"System meters — click to collapse.",y=(w)=>{w?.stopPropagation?.();let J=!G;Z(J),a7(J)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${W}
                aria-label=${W}
                aria-expanded=${G?"false":"true"}
                onClick=${y}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">${s1("left")}</span>`:X?F`<span class="system-meters-compact-summary">${M}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${$4(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${$4(q.ram_percent)}</span>
                            </div>
                            ${A&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${k}></path>
                                    </svg>
                                    <span class="system-meters-value">${Qj(x)}</span>
                                </div>
                            `}
                            ${I&&F`
                                <div class="system-meters-row vram" title=${q.gpu_provider?`GPU telemetry: ${q.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(q.vram_percent)}</span>
                                </div>
                            `}
                            ${z&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${Qj(q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${O&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${$4(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function dA(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function iA(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function oA(_){let{id:$,scrollToBottom:j,getElementById:G=(Q)=>document.getElementById(Q),scheduleRaf:Z=(Q)=>requestAnimationFrame(Q),scheduleTimeout:X=(Q,K)=>{setTimeout(Q,K)},maxAttempts:Y=12}=_,q=(Q)=>{Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.classList.add("post-highlight"),X(()=>Q.classList.remove("post-highlight"),2000)},V=(Q)=>{let K=G(`post-${$}`);if(K){q(K);return}if(Q<=0){j?.();return}Z(()=>{X(()=>V(Q-1),40)})};V(Y)}function sA(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(V)=>oA({id:V,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=iA($);if(q){Z(q);return}G()}function tQ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:V,renameBranchNameDraft:Q,renameBranchNameInputRef:K,setRenameBranchNameDraft:L,renameBranchDraftState:N,isRenamingBranch:B,addFileRef:U,addFolderRef:E,openEditor:H,openTerminalTab:D,openVncTab:k,hasDockPanes:z,toggleDock:O,dockVisible:I,handleSplitterMouseDown:x,handleSplitterTouchStart:A,showEditorPaneContainer:M,tabStripTabs:W,tabStripActiveId:y,handleTabActivate:w,handleTabClose:J,handleTabCloseOthers:C,handleTabCloseAll:f,handleTabTogglePin:b,handleTabTogglePreview:c,handleTabToggleDiff:p,handleTabEditSource:e,handleReattachPane:m,previewTabs:_0,diffTabs:E0,tabPaneOverrides:G0,toggleZenMode:$0,handlePopOutPane:X0,isWebAppMode:U0,editorContainerRef:t,editorInstanceRef:V0,detachedTabs:Q0,activeDetachedTab:z0,detachedDockPane:s,handleDockSplitterMouseDown:Z0,handleDockSplitterTouchStart:W0,TERMINAL_TAB_PATH:P0,dockContainerRef:h0,handleEditorSplitterMouseDown:g0,handleEditorSplitterTouchStart:G_,searchQuery:c0,isIOSDevice:s0,currentBranchRecord:f0,currentChatJid:i0,currentChatBranches:b0,handleBranchPickerChange:t0,formatBranchPickerLabel:o0,openRenameCurrentBranchForm:F_,handlePruneCurrentBranch:Z_,handlePurgeArchivedBranch:v0,currentHashtag:O0,handleBackToTimeline:q_,activeSearchScopeLabel:d0,oobePanelState:H_,composePrefillRequest:D0,requestComposePrefill:u0,handleOobeSetupProvider:I0,handleOobeShowModelPicker:r0,handleOobeOpenWorkspace:z_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:U_,posts:N_,isMainTimelineView:J_,hasMore:x_,loadMore:P_,timelineRef:E_,handleHashtagClick:o_,addMessageRef:f_,scrollToMessage:q0,openFileFromPill:v,openTimelineFileFromPill:r,handleDeletePost:o,handleOpenFloatingWidget:j0,agents:N0,userProfile:y0,removingPostIds:A0,agentStatus:M0,isCompactionStatus:T0,agentDraft:m0,agentPlan:S0,agentThought:n0,pendingRequest:e0,intentToast:x0,currentTurnId:w0,steerQueued:D_,handlePanelToggle:__,btwSession:n,closeBtwPanel:B0,handleBtwRetry:l0,handleBtwInject:j_,floatingWidget:R_,handleCloseFloatingWidget:F1,handleFloatingWidgetEvent:g_,attachmentPreview:J1,setAttachmentPreview:I_,extensionStatusPanels:k_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:W_,searchOpen:A_,followupQueueItems:U1,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:r_,handleMoveQueuedFollowup:s_,viewStateRef:B_,loadPosts:x1,scrollToBottom:D1,searchScope:b1,handleSearch:k1,handleSearchScopeChange:_$,setSearchScope:h4,enterSearchMode:k$,exitSearchMode:t_,fileRefs:c_,removeFileRef:M1,clearFileRefs:H1,setFileRefsFromCompose:_1,folderRefs:M$,removeFolderRef:y$,clearFolderRefs:$$,setFolderRefsFromCompose:M_,messageRefs:V1,removeMessageRef:T$,clearMessageRefs:l4,setMessageRefsFromCompose:j$,handleCreateSessionFromCompose:p4,handleCreateRootSessionFromCompose:r4,handleRestoreBranch:w$,attachActiveEditorFile:x$,followupQueueCount:v1,handleBtwIntercept:m1,handleMessageResponse:n4,handleComposeSubmitError:Q1,isComposeBoxAgentActive:S_,activeChatAgents:d4,connectionStatus:I1,stateAccessFailed:I$,activeModel:i4,agentModelsPayload:b5,activeModelUsage:v5,activeThinkingLevel:Y4,supportsThinking:C$,contextUsage:o4,extensionWorkingState:s4,notificationsEnabled:L1,notificationPermission:P$,handleToggleNotifications:q4,setActiveModel:V4,applyModelState:C1,setPendingRequest:E1,pendingRequestRef:m5,toggleWorkspace:Q4}=_,G$=()=>{if(s0())return;D1()};return F`
    <div class=${dA({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${aQ} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(e_)=>{if(e_.target===e_.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(e_)=>{e_.preventDefault(),V(Q)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${K}
              value=${Q}
              onInput=${(e_)=>{let f$=e_.currentTarget?.value??"";L(String(f$))}}
              onKeyDown=${(e_)=>{if(e_.key==="Escape")e_.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${N.kind||"info"}`}>
              ${N.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!N.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&F`
        <${pQ}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${H}
          onOpenTerminalTab=${D}
          onOpenVncTab=${k}
          onToggleTerminal=${z?O:void 0}
          terminalVisible=${Boolean(z&&I)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${Q4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${x} onTouchStart=${A}></div>
      `}
      ${M&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${iQ}
              tabs=${W}
              activeId=${y}
              onActivate=${w}
              onClose=${J}
              onCloseOthers=${C}
              onCloseAll=${f}
              onTogglePin=${b}
              onTogglePreview=${c}
              onToggleDiff=${p}
              onEditSource=${e}
              previewTabs=${_0}
              diffTabs=${E0}
              paneOverrides=${G0}
              detachedTabs=${Q0}
              onReattachTab=${m}
              onToggleDock=${z?O:void 0}
              dockVisible=${z&&I}
              onToggleZen=${$0}
              zenMode=${X}
              onPopOutTab=${U0?void 0:X0}
            />
          `}
          ${G&&z0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${z0.label||z0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>m(z0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!z0&&F`<div class="editor-pane-host" ref=${t}></div>`}
          ${G&&!z0&&y&&_0.has(y)&&F`
            <${s2}
              getContent=${()=>V0.current?.getContent?.()}
              path=${y}
              onClose=${()=>c(y)}
            />
          `}
          ${z&&I&&F`<div class="dock-splitter" onMouseDown=${Z0} onTouchStart=${W0}></div>`}
          ${z&&F`<div class=${`dock-panel${I?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!U0&&!s&&F`
                  <button class="dock-panel-action" onClick=${()=>X0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${s&&F`
                  <button class="dock-panel-action" onClick=${()=>m(P0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${O} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${s?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>m(P0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${h0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${g0} onTouchStart=${G_}></div>
      `}
      <${wV}
        workspaceOpen=${j}
        toggleWorkspace=${Q4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${D}
        onOpenVncTab=${k}
        onToggleTerminal=${z?O:void 0}
        terminalVisible=${Boolean(z&&I)}
      />
      <${TV}
        activeChatAgents=${d4}
        currentChatJid=${i0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(z&&I)}
        onSwitchChat=${t0}
        onToggleWorkspace=${Q4}
        onOpenTerminalTab=${D}
        onOpenVncTab=${k}
        onToggleTerminalDock=${z?O:void 0}
        onPrefillCompose=${u0}
      />
      <div class="container">
        ${c0&&s0()&&F`<div class="search-results-spacer"></div>`}
        ${(O0||c0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${q_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${O0?`#${O0}`:`Search: ${c0} · ${d0}`}</span>
          </div>
        `}
        ${H_?.kind&&H_.kind!=="hidden"&&F`
          <${bq}
            kind=${H_.kind}
            onSetupProvider=${I0}
            onShowModelPicker=${r0}
            onOpenWorkspace=${z_}
            onDismiss=${H_.kind==="provider-missing"?Q_:U_}
          />
        `}
        <${MQ}
          posts=${N_}
          hasMore=${J_?x_:!1}
          onLoadMore=${J_?P_:void 0}
          timelineRef=${E_}
          onHashtagClick=${o_}
          onMessageRef=${f_}
          onScrollToMessage=${q0}
          onFileRef=${r||v}
          onPostClick=${void 0}
          onDeletePost=${o}
          onOpenWidget=${j0}
          onOpenAttachmentPreview=${I_}
          emptyMessage=${O0?`No posts with #${O0}`:c0?`No results for "${c0}"`:void 0}
          agents=${N0}
          user=${y0}
          reverse=${J_}
          removingPostIds=${A0}
          searchQuery=${c0}
        />
        <${l9}
          status=${T0(M0)?null:M0}
          draft=${m0}
          plan=${S0}
          thought=${n0}
          pendingRequest=${e0}
          intent=${x0}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showExtensionPanels=${!1}
        />
        <${pq}
          session=${n}
          onClose=${B0}
          onRetry=${l0}
          onInject=${j_}
        />
        <${XV}
          widget=${R_}
          onClose=${F1}
          onWidgetEvent=${g_}
        />
        ${J1&&F`
          <${kV}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>I_(null)}
          />
        `}
        <${Fq} />
        <${l9}
          extensionPanels=${Array.from(k_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${W_}
          turnId=${w0}
          steerQueued=${D_}
          onPanelToggle=${__}
          showCorePanels=${!1}
        />
        <${R9}
          items=${A_?[]:U1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${v}
        />
        <${gq}
          onPost=${(e_)=>{sA({response:e_,viewStateRef:B_,scrollToBottom:D1})}}
          onFocus=${G$}
          searchMode=${A_}
          searchScope=${b1}
          onSearch=${k1}
          onSearchScopeChange=${_$||h4}
          onEnterSearch=${k$}
          onExitSearch=${t_}
          fileRefs=${c_}
          onRemoveFileRef=${M1}
          onClearFileRefs=${H1}
          onSetFileRefs=${_1}
          folderRefs=${M$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${$$}
          onSetFolderRefs=${M_}
          messageRefs=${V1}
          onRemoveMessageRef=${T$}
          onClearMessageRefs=${l4}
          onSetMessageRefs=${j$}
          onSwitchChat=${t0}
          onRenameSession=${V}
          isRenameSessionInProgress=${B}
          onCreateSession=${p4}
          onCreateRootSession=${r4}
          onDeleteSession=${Z_}
          onPurgeArchivedSession=${v0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:y}
          onAttachEditorFile=${Z?void 0:x$}
          onOpenFilePill=${v}
          followupQueueCount=${v1}
          followupQueueItems=${U1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${m1}
          onMessageResponse=${n4}
          onSubmitError=${Q1}
          isAgentActive=${S_}
          activeChatAgents=${d4}
          currentChatJid=${i0}
          connectionStatus=${I1}
          stateAccessFailed=${I$}
          activeModel=${i4}
          agentModelsPayload=${b5}
          modelUsage=${v5}
          thinkingLevel=${Y4}
          supportsThinking=${C$}
          contextUsage=${o4}
          notificationsEnabled=${L1}
          notificationPermission=${P$}
          onToggleNotifications=${q4}
          onModelChange=${V4}
          onModelStateChange=${C1}
          statusNotice=${T0(M0)?M0:null}
          extensionWorkingState=${s4}
          prefillRequest=${D0}
        />
        <${oV}
          request=${e0}
          onRespond=${()=>{E1(null),m5.current=null}}
        />
      </div>
    </div>
  `}function eQ(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=Hq({branchLoaderMode:$,panePopoutMode:j}),V=Y?.renderBranchLoaderMode||Eq,Q=Y?.renderPanePopoutMode||Wq,K=Y?.renderMainShell||tQ;if(q==="branch-loader")return V(G);if(q==="pane-popout")return Q(Z);return K(X)}var J8="piclaw_btw_session",$L=900,_L="__piclawRenameBranchFormLock__";function aA(){try{return import.meta.url}catch{return null}}function Lj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function tA(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function z8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function jL(_={}){let $=_.importMetaUrl===void 0?aA():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=tA($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((Q)=>String(Q?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let V=new URL(Y,G).searchParams.get("v");return V&&V.trim()?V.trim():null}catch{return null}}function GL(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[_L];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[_L]=G,G}function ZL(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function XL(_={}){let $=typeof _.readItem==="function"?_.readItem:O1,j=_.storageKey||J8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",V=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,Q=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:Q==="error"?V||"BTW stream interrupted. You can retry.":V,model:null,status:Q}}catch{return null}}function YL(_,$={}){let j=$.defaultChatJid||"web:default",G=z8(_,"chat_jid",j),Z=Lj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Lj(_?.get?.("pane_popout")),Y=z8(_,"pane_path"),q=z8(_,"pane_label"),V=Lj(_?.get?.("branch_loader")),Q=z8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:V,branchLoaderSourceChatJid:Q}}function qL(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function VL(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Kj(_,$,j){return _||$?.label||j||"Pane"}function QL(_,$,j){return`${Kj(_,$,j)} · PiClaw`}function LL(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function KL(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function BL(_,$,j,G){return _===$&&!j||G}function NL(_,$,j,G,Z){return _||!$&&(j||G&&Z)}w_();function eA(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:eA($,j)}var FL=!1,UL=!1,DL=!1;function _k(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function $k(_=typeof window<"u"?window:null){if(!_||UL)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),UL=!0}function jk(){Y_.register(E3),Y_.register(g7),Y_.register(u7),Y_.register(b7),Y_.register(v7),Y_.register(m7),Y_.register(h7),Y_.register(l7),Y_.register(p7),Y_.register(n7),Y_.register(a3),W3(),Y_.register(M3),Y_.register(y3)}function Gk(_=typeof window<"u"?window:null){if(!_||DL)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;DL=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function HL(){if(FL)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(_k($),$k(_),v9(_),_)try{let j=await Promise.resolve().then(() => (k0(),AG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}jk(),await NV(_),Gk(_),FL=!0}function Zk(_=N6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var EL=Zk(N6);function WL(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:V,agentState:Q,composeState:K,modelState:L}=_,N={appShellRef:V.appShellRef,editorOpen:V.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:V.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:V.appShellRef,workspaceOpen:V.workspaceOpen,editorOpen:V.editorOpen,chatOnlyMode:V.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:V.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:V.renameBranchNameDraft,renameBranchNameInputRef:V.renameBranchNameInputRef,setRenameBranchNameDraft:V.setRenameBranchNameDraft,renameBranchDraftState:V.renameBranchDraftState,isRenamingBranch:V.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:V.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:V.TERMINAL_TAB_PATH,isIOSDevice:V.isIOSDevice,currentBranchRecord:V.currentBranchRecord,currentChatJid:V.currentChatJid,currentChatBranches:V.currentChatBranches,formatBranchPickerLabel:V.formatBranchPickerLabel,activeSearchScopeLabel:V.activeSearchScopeLabel,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,oobePanelState:V.oobePanelState,composePrefillRequest:V.composePrefillRequest,requestComposePrefill:V.requestComposePrefill,handleOobeSetupProvider:V.handleOobeSetupProvider,handleOobeShowModelPicker:V.handleOobeShowModelPicker,handleOobeOpenWorkspace:V.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:V.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:V.handleCompleteProviderReadyOobe,posts:V.posts,hasMore:V.hasMore,loadMore:V.loadMore,timelineRef:V.timelineRef,agents:V.agents,userProfile:V.userProfile,removingPostIds:V.removingPostIds,extensionStatusPanels:V.extensionStatusPanels,pendingExtensionPanelActions:V.pendingExtensionPanelActions,searchOpen:V.searchOpen,followupQueueItems:V.followupQueueItems,viewStateRef:V.viewStateRef,loadPosts:V.loadPosts,scrollToBottom:V.scrollToBottom,searchScope:V.searchScope,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,panePopoutPath:V.panePopoutPath,tabPaneOverrides:V.tabPaneOverrides,handleTabClose:V.handleTabClose,handleTabCloseOthers:V.handleTabCloseOthers,handleTabCloseAll:V.handleTabCloseAll,handleTabTogglePin:V.handleTabTogglePin,handleTabEditSource:V.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:V.openEditor,openTerminalTab:V.openTerminalTab,openVncTab:V.openVncTab,fileRefs:K.fileRefs,folderRefs:K.folderRefs,messageRefs:K.messageRefs,followupQueueCount:K.followupQueueCount,attachmentPreview:K.attachmentPreview,setAttachmentPreview:K.setAttachmentPreview,extensionWorkingState:K.extensionWorkingState,activeChatAgents:L.activeChatAgents,connectionStatus:L.connectionStatus,stateAccessFailed:L.stateAccessFailed,activeModel:L.activeModel,activeModelUsage:L.activeModelUsage,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,contextUsage:L.contextUsage,notificationsEnabled:L.notificationsEnabled,notificationPermission:L.notificationPermission,handleToggleNotifications:L.handleToggleNotifications,setActiveModel:L.setActiveModel,applyModelState:L.applyModelState,setPendingRequest:Q.setPendingRequest,pendingRequestRef:Q.pendingRequestRef,...G,...Z,...X,...Y,...q,...Q,...K,...L};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:N,mainShellOptions:B}}function Xk(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function OL(_){let $=Xk({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return WL({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}k0();var JL="(min-width: 1024px) and (orientation: landscape)";function Bj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function zL(_,$){let j=Bj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function Yk(_,$,j){let G=Bj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function I6(_=typeof window<"u"?window:null){let $=Bj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function AL(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function kL(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||I6($),Y=AL(X),q=zL($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let V=zL($,"workspaceOpen");if(typeof V==="boolean")return V}return Z}function ML(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||I6(j);Yk(j,AL(Z),Boolean(_))}$6();var qk=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function yL(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(R1({window:j,navigator:G}))};Z();let Y=qk.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function A8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function TL(_={}){return R1(_)&&Q2(_)}function Vk(_){let $=_?.activeElement;if(!$)return!1;let j=String($.tagName||$.nodeName||"").toLowerCase();if(j==="textarea"||j==="select")return!0;if(j==="input"){let G=String($.type||"text").toLowerCase();return!["button","checkbox","color","file","hidden","image","radio","range","reset","submit"].includes(G)}if($.isContentEditable===!0)return!0;if(typeof $.closest==="function")try{return Boolean($.closest('[contenteditable="true"], [contenteditable="plaintext-only"]'))}catch(G){console.debug("[mobile-viewport] Ignoring activeElement.closest failure during keyboard detection.",G)}return!1}function Qk(_={},$={}){let j=_.window??(typeof window<"u"?window:null),G=Number(j?.visualViewport?.height||0),Z=Number(j?.innerHeight||0),X=Number.isFinite(G)&&G>0,Y=Number.isFinite(Z)&&Z>0;if(X){if($.keyboardActive===!0){let q=Number(j?.visualViewport?.offsetTop||0),V=G+Math.max(0,Number.isFinite(q)?q:0);return Math.round(V)}if($.ignoreStandaloneChromeGap===!0&&Y&&Z>G)return Math.round(Z);return Math.round(G)}if(Y)return Math.round(Z);return null}function Lk(_={},$={}){if(!TL(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=Vk(G),X=Qk({window:j},{ignoreStandaloneChromeGap:!0,keyboardActive:Z});if(X&&X>0)G.documentElement.style.setProperty("--app-height",`${X}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(Y){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",Y)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(Y){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",Y)}}return X}function wL(_={}){if(!TL(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let L of Z)$.clearTimeout?.(L);Z.clear()},Y=()=>{G=0,Lk({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},V=()=>{q();for(let L of[80,220,420]){let N=$.setTimeout?.(()=>{Z.delete(N),q()},L);if(N!=null)Z.add(N)}},Q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},K=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",Q),j.addEventListener("focusin",V,!0),K?.addEventListener?.("resize",V),K?.addEventListener?.("scroll",V),()=>{X(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",Q),j.removeEventListener("focusin",V,!0),K?.removeEventListener?.("resize",V),K?.removeEventListener?.("scroll",V)}}var Nj="resume-layout-settling",Kk=220,x5=new WeakMap;function Bk(_){if(!_){V_(J8,"");return}V_(J8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function Nk(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function Fk(_,$={}){if(!_)return()=>{};let{durationMs:j=Kk,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=x5.get(_);if(X)Z(X);_.classList.add(Nj);let Y=G(()=>{if(x5.get(_)===Y)_.classList.remove(Nj),x5.delete(_)},j);return x5.set(_,Y),()=>{let q=x5.get(_);if(q)Z(q),x5.delete(_);_.classList.remove(Nj)}}function Uk(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function xL(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:V,agentsRef:Q,currentChatJid:K,activeChatJidRef:L,userProfile:N,userProfileRef:B,brandingRef:U,panePopoutMode:E=!1}=_;sX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>iZ(),[]),u(()=>yL(Z),[Z]),u(()=>{let k=()=>{},z=A8(()=>{Z7(),k(),k=Fk(G.current)});return()=>{z(),k()}},[G]);let H=g(I6());return u(()=>{ML(X,{bucket:H.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(JL),z=()=>{let O=I6(window);if(H.current===O)return;let I=H.current;if(H.current=O,I==="desktop"&&O==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",z);else if(k.addListener)k.addListener(z);return()=>{if(k.removeEventListener)k.removeEventListener("change",z);else if(k.removeListener)k.removeListener(z)}},[Y]),u(()=>wL(),[]),u(()=>{Bk(q)},[q]),u(()=>{Q.current=V||{}},[V,Q]),u(()=>{L.current=K},[L,K]),u(()=>{B.current=N||{name:"You",avatar_url:null,avatar_background:null}},[N,B]),{applyBranding:R((k,z,O=null)=>{if(typeof document>"u")return;let I=(k||"").trim()||"PiClaw";if(U.current.title!==I){if(Nk({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=I;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==I)A.setAttribute("content",I)}U.current.title=I}let x=z?`${z}|${O||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let A=O||Date.now();Uk(document,A)}},[U])}}k0();function IL(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Fj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function k8(_,$){let j=Array.isArray(_)?_:[],G=Fj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function M8(_,$){let j=Array.isArray(_)?_:[],G=Fj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function y8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Fj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function CL(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function PL(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function Uj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:V,setPosts:Q,setHasMore:K}=_,L=typeof $==="string"?$.trim():"";if(!L)return;let N=j==="root"||j==="all"?j:"current";Y(N),q(L),V(null),Q(null);try{let B=await X(L,50,0,G,N,Z,_.filters);Q(Array.isArray(B?.results)?B.results:[]),K(!1)}catch(B){console.error("Failed to search:",B),Q([])}}async function fL(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:V,loadMoreRef:Q,confirm:K=(D)=>window.confirm(D),showAlert:L=(D)=>alert(D),scheduleTimeout:N=(D,k)=>{setTimeout(D,k)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((D)=>D?.data?.thread_id===B&&D?.id!==B).length||0;if(E>0){if(!K(`Delete this message and its ${E} replies?`))return}let H=(D)=>{if(!D.length)return;q((k)=>{let z=new Set(k);return D.forEach((O)=>z.add(O)),z}),N(()=>{if(X(()=>{Y((k)=>k?k.filter((z)=>!D.includes(z.id)):k)}),q((k)=>{let z=new Set(k);return D.forEach((O)=>z.delete(O)),z}),V.current)Q.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let D=await Z(B,E>0,U);if(D?.ids?.length)H(D.ids)}catch(D){let k=D instanceof Error?D.message:String(D||"");if(E===0&&k.includes("Replies exist")){if(!K("Delete this message and its replies?"))return;let O=await Z(B,!0,U);if(O?.ids?.length)H(O.ids);return}console.error("Failed to delete post:",D),L(`Failed to delete message: ${k}`)}}async function RL(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(L)=>document.getElementById(L),scheduleRaf:q=(L)=>requestAnimationFrame(L),scheduleTimeout:V=(L,N)=>{setTimeout(L,N)}}=_,Q=(L)=>{L.scrollIntoView({behavior:"smooth",block:"center"}),L.classList.add("post-highlight"),V(()=>L.classList.remove("post-highlight"),2000)},K=Y(`post-${$}`);if(K){Q(K);return}try{let L=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,L))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((E)=>E.id===B.id))return U;return[...U,B]}),q(()=>{V(()=>{let U=Y(`post-${$}`);if(U)Q(U)},50)})}catch(L){console.error("[scrollToMessage] Failed to fetch message",$,L)}}function Dk(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Hk(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:V,setSearchOpen:Q,setMessageRefs:K,navigate:L,chatOnlyMode:N,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,H=E!==G,D=Boolean(Y||X||Z);if(!H&&!D)return K((k)=>k8(k,U)),!0;if(K([U]),q?.(null),V?.(null),Q?.(!1),H&&typeof L==="function"){let k=w1(B,E,{chatOnly:N});L(k)}return!0}function SL(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setFolderRefs:V,setMessageRefs:Q,currentChatJid:K,currentHashtag:L,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:H,navigate:D,chatOnlyMode:k,baseHref:z,getThread:O,setPosts:I}=_,x=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{x()}},[x]);let A=R((t)=>{q((V0)=>k8(V0,t))},[q]),M=R((t)=>{q((V0)=>M8(V0,t))},[q]),W=R(()=>{q([])},[q]),y=R((t)=>{q(y8(t))},[q]),w=R((t)=>{V((V0)=>k8(V0,t))},[V]),J=R((t)=>{V((V0)=>M8(V0,t))},[V]),C=R(()=>{V([])},[V]),f=R((t)=>{V(y8(t))},[V]),b=R((t,V0=null,Q0="info",z0=3000)=>{x(),$({title:t,detail:V0||null,kind:Q0||"info"}),j.current=setTimeout(()=>{$((s)=>s?.title===t?null:s)},z0)},[x,j,$]),c=R((t,{autoOpenEditor:V0=!1}={})=>{let Q0=IL(t,{editorOpen:G,autoOpenEditor:V0,resolvePane:X});if(Q0.kind==="open"){Z(Q0.path);return}if(Q0.kind==="toast")b(Q0.title,Q0.detail,Q0.level)},[G,Z,X,b]),p=R((t)=>{c(t,{autoOpenEditor:!1})},[c]),e=R((t)=>{c(t,{autoOpenEditor:!0})},[c]),m=R(()=>{let t=Y;if(t)A(t)},[A,Y]),_0=R((t,V0=null)=>{Hk({id:t,targetChatJid:V0,currentChatJid:K,currentHashtag:L,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:H,setMessageRefs:Q,navigate:D,chatOnlyMode:k,baseHref:z})},[z,k,K,L,D,B,N,U,Q,H,E]),E0=R(async(t,V0=null)=>{await RL({id:t,targetChatJid:V0,currentChatJid:K,getThread:O,setPosts:I})},[K,O,I]),G0=R((t)=>{Q((V0)=>M8(V0,t))},[Q]),$0=R(()=>{Q([])},[Q]),X0=R((t)=>{Q(y8(t))},[Q]),U0=R((t)=>{b("Compose failed",Dk(t),"error",5000)},[b]);return{clearIntentToast:x,addFileRef:A,removeFileRef:M,clearFileRefs:W,setFileRefsFromCompose:y,addFolderRef:w,removeFolderRef:J,clearFolderRefs:C,setFolderRefsFromCompose:f,showIntentToast:b,openFileFromPill:p,openTimelineFileFromPill:e,attachActiveEditorFile:m,addMessageRef:_0,scrollToMessage:E0,removeMessageRef:G0,clearMessageRefs:$0,setMessageRefsFromCompose:X0,handleComposeSubmitError:U0}}k0();async function uL(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:V,draftBufferRef:Q,setAgentThought:K,setAgentDraft:L}=_;if($!=="thought"&&$!=="draft")return;let N=G.current;if($==="thought"){if(Z.current=j,N)try{await Y(N,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=N?await q(N,"thought"):null;if(B?.text)V.current=B.text;K((U)=>({...U||{text:"",totalLines:0},fullText:V.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,N)try{await Y(N,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=N?await q(N,"draft"):null;if(B?.text)Q.current=B.text;L((U)=>({...U||{text:"",totalLines:0},fullText:Q.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function Ek(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function Wk(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function gL(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:V,draftBufferRef:Q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:N,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:H,thoughtExpandedRef:D,draftExpandedRef:k,setCurrentTurnId:z,setSteerQueuedTurnId:O,currentTurnIdRefForPanel:I,setAgentThoughtVisibility:x,getAgentThought:A,setAgentThought:M,setAgentDraft:W}=_,y=R((c={})=>{let p=Number(c.atMs),e=Number.isFinite(p)&&p>0?p:Date.now();if(Z.current=e,c.running)Y.current=!0,q((m)=>m?m:!0);if(c.clearSilence)X.current=0},[Y,Z,X,q]),w=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{w()},[w]);let J=R(()=>{w(),V((c)=>Ek(c))},[w,V]),C=R((c)=>{if(!c)return;w();let p=Date.now();G.current=p,V(Wk(c)),j.current=setTimeout(()=>{if(G.current!==p)return;V((e)=>{if(!e||!(e.last_activity||e.lastActivity))return e;return null})},$)},[w,j,G,$,V]),f=R(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,Q.current="",K.current="",L.current=null,N.current=null,B.current=null,U.current=null,E.current=null,H.current={inFlight:!1,lastAttemptAt:0,turnId:null},w(),z(null),O(null),D.current=!1,k.current=!1},[E,w,B,Q,k,Y,Z,N,X,L,z,q,O,H,U,K,D]),b=R(async(c,p)=>{await uL({panelKey:c,expanded:p,currentTurnIdRef:I,thoughtExpandedRef:D,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:A,thoughtBufferRef:K,draftBufferRef:Q,setAgentThought:M,setAgentDraft:W})},[I,Q,k,A,W,M,x,K,D]);return{noteAgentActivity:y,clearLastActivityTimer:w,clearLastActivityFlag:J,showLastActivity:C,clearAgentRunState:f,handlePanelToggle:b}}k0();function T8(_){return _?{..._}:{text:"",totalLines:0}}function bL(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function Ok(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function zk(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function vL(_){return{agentStatus:_.agentStatus,agentDraft:T8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:T8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:bL(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:Ok(_.silentRecovery)}}function mL(_){let $=_.snapshot||zk(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(T8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(T8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(bL($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Dj(_){return String(_||"").trim()||"web:default"}function cL({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Jk(_){return cL(_)}function Ak(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function hL(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:V,agentThought:Q,pendingRequest:K,pendingRequestRef:L,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:H,contextUsage:D,isAgentRunningRef:k,wasAgentActiveRef:z,draftBufferRef:O,thoughtBufferRef:I,lastAgentEventRef:x,lastSilenceNoticeRef:A,lastAgentResponseRef:M,currentTurnIdRef:W,thoughtExpandedRef:y,draftExpandedRef:w,agentStatusRef:J,silentRecoveryRef:C,clearLastActivityTimer:f,setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:p,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setFollowupQueueItems:G0,setActiveModel:$0,setActiveThinkingLevel:X0,setSupportsThinking:U0,setActiveModelUsage:t,setContextUsage:V0,lastNotifiedIdRef:Q0,agentsRef:z0,notify:s,shouldNotifyLocallyForChat:Z0}=_,W0=R((c0)=>{if(!Jk({remainingQueueCount:c0,steerQueuedTurnId:Z.current,currentTurnId:W.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,W,X,Z]),P0=R(()=>vL({agentStatus:Y,agentDraft:q,agentPlan:V,agentThought:Q,pendingRequest:K,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:H,contextUsage:D,isAgentRunning:k.current,wasAgentActive:z.current,draftBuffer:O.current,thoughtBuffer:I.current,lastAgentEvent:x.current,lastSilenceNotice:A.current,lastAgentResponse:M.current,currentTurnIdRef:W.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:y.current,draftExpanded:w.current,agentStatusRef:J.current,silentRecovery:C.current}),[B,H,U,q,V,Y,Q,D,G,N,$,K,j,E,k,z,O,I,x,A,M,W,Z,y,w,J,C]),h0=R((c0)=>{mL({snapshot:c0,clearLastActivityTimer:f,refs:{isAgentRunningRef:k,wasAgentActiveRef:z,lastAgentEventRef:x,lastSilenceNoticeRef:A,draftBufferRef:O,thoughtBufferRef:I,pendingRequestRef:L,lastAgentResponseRef:M,currentTurnIdRef:W,steerQueuedTurnIdRef:Z,agentStatusRef:J,silentRecoveryRef:C,thoughtExpandedRef:y,draftExpandedRef:w},setters:{setIsAgentTurnActive:b,setAgentStatus:c,setAgentDraft:p,setAgentPlan:e,setAgentThought:m,setPendingRequest:_0,setCurrentTurnId:E0,setSteerQueuedTurnId:X,setFollowupQueueItems:G0,setActiveModel:$0,setActiveThinkingLevel:X0,setSupportsThinking:U0,setActiveModelUsage:t,setContextUsage:V0}})},[J,f,W,O,w,k,x,M,A,L,$0,t,X0,p,e,c,m,V0,E0,G0,b,_0,X,U0,C,Z,I,y,z]),g0=R((c0)=>{if(!c0)return;if(W.current===c0)return;W.current=c0,C.current={inFlight:!1,lastAttemptAt:0,turnId:c0},E0(c0),Z.current=null,X(null),O.current="",I.current="",p({text:"",totalLines:0}),e(""),m({text:"",totalLines:0}),_0(null),L.current=null,M.current=null,y.current=!1,w.current=!1},[W,O,w,M,L,p,e,m,E0,_0,X,C,Z,I,y]),G_=R((c0)=>{let s0=M.current;if(!s0||!s0.post)return;if(c0&&s0.turnId&&s0.turnId!==c0)return;let f0=s0.post,i0=typeof f0?.chat_jid==="string"&&f0.chat_jid.trim()?f0.chat_jid.trim():"";if(!i0||!Z0(i0))return;if(f0.id&&Q0.current===f0.id)return;let b0=Ak(f0);if(!b0)return;Q0.current=f0.id||Q0.current,M.current=null;let t0=z0.current||{},F_=(f0?.data?.agent_id?t0[f0.data.agent_id]:null)?.name||"Pi";s(F_,b0,{sourceLabel:"Local"})},[z0,M,Q0,s,Z0]);return{clearQueuedSteerStateIfStale:W0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:h0,setActiveTurn:g0,notifyForFinalResponse:G_}}k0();function w8(_){return _?.turn_id||_?.turnId||null}function I5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Hj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Ej(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function x8(_,$){return{text:_,totalLines:Ej(_,$)}}function Wj(_,$){return{text:$?.text||"",totalLines:aX(_),fullText:_}}function lL(_,$,j){return j==="replace"?$:`${_||""}${$}`}function pL(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function rL(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function a1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function nL(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Oj(_,$){return _&&$}function dL(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function iL(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function oL(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function sL(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:V,pendingRequestRef:Q,thoughtBufferRef:K,draftBufferRef:L,setAgentStatus:N,setAgentDraft:B,setAgentPlan:U,setAgentThought:E,setPendingRequest:H,setActiveTurn:D,noteAgentActivity:k,clearLastActivityFlag:z,onStateAccessResult:O}=_,I=$;try{let x=await j(I);if(O?.(!1),G.current!==I)return null;if(!x||x.status!=="active"||!x.data){if(Z.current&&a1(X.current))Y();return Z.current=!1,q(),V.current=null,N(null),B({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),H(null),Q.current=null,x??null}Z.current=!0;let A=x.data;V.current=A;let M=w8(A);if(M)D(M);k({running:!0,clearSilence:!0,atMs:n$(A)??Date.now()}),z(),N(A);let W=I5(x.thought);if(W)E((w)=>{if(Hj(w,W.text))return w;return K.current=W.text,W});let y=I5(x.draft);if(y)B((w)=>{if(Hj(w,y.text))return w;return L.current=y.text,y});return x}catch(x){return O?.(!0),console.warn("Failed to fetch agent status:",x),null}}async function aL(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:V,refreshAgentStatus:Q,now:K=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let L=G.current||null,N=Z.current,B=K();if(N.inFlight)return null;if(N.turnId===L&&B-N.lastAttemptAt<X)return null;N.inFlight=!0,N.lastAttemptAt=B,N.turnId=L;try{if(a1(Y.current))await q();return await V(),await Q()}finally{N.inFlight=!1}}function kk(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function tL(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:V,isCompactionStatus:Q,setAgentStatus:K,reconcileSilentTurn:L,now:N=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=N(),E=U-B,H=X.current,D=Q(H),k=kk(H);if(E>=q){if(!D&&!k)K({type:"waiting",title:"Re-syncing after a quiet period…"});L();return}if(E>=Y&&U-Z.current>=V){if(!D&&!k){let z=Math.floor(E/1000);K({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=U,L()}}function Mk(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function eL(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:V,pendingRequestRef:Q,lastAgentResponseRef:K,agentStatusRef:L,stalledPostIdRef:N,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:H,setAgentThought:D,setPendingRequest:k,setAgentStatus:z,setPosts:O,dedupePosts:I,now:x=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let M=Mk(L.current);$.current=!1,j.current=0,G.current=null,L.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let W=(q.current||"").trim();if(q.current="",V.current="",H(""),D({text:"",totalLines:0}),k(null),Q.current=null,K.current=null,!W){E({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}E({text:W,totalLines:Ej(W,null),fullText:W});let y=W,w=x(),J=A(),C={id:w,timestamp:J,data:{type:"agent_response",content:y,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:M?.summary||"",tool_title:M?.title||"",tool_name:M?.toolName||"",tool_status:M?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};N.current=w,O((f)=>f?I([...f,C]):[C]),B.current?.(),z(null)}function yk(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function Tk(_){eL(_)}function _K(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function $K(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:V,draftBufferRef:Q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:N,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:H,setAgentPlan:D,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,dedupePosts:I}=_,x=R(()=>{yk({stalledPostIdRef:$,setPosts:j})},[j,$]),A=R(()=>{Tk({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:V,draftBufferRef:Q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:N,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:H,setAgentPlan:D,setAgentThought:k,setPendingRequest:z,setAgentStatus:O,setPosts:j,dedupePosts:I})},[Y,I,Q,V,G,X,N,B,Z,L,U,H,D,O,k,E,z,j,$,K,q]);return{removeStalledPost:x,finalizeStalledResponse:A}}function wk(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function xk(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function jK(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:V}=xL($),Q=SL(j);wk({removeFileRefRef:q,composeReferenceActions:Q});let K=gL(G),L=hL({...Z,clearLastActivityTimer:K.clearLastActivityTimer}),N=$K(X);return _K(Y),xk({applyBranding:V,composeReferenceActions:Q,agentActivity:K,chatPaneRuntime:L,recoveryCallbacks:N})}k0();k0();w_();var I8=new Map,zj=new Map;function GK(){return Date.now()}function C6(_){return String(_||"").trim()}function ZK(_,$=600000){return Boolean(_&&GK()-_.cachedAt<=$)}function Ik(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function XK(_,$){return I8.delete(_),I8.set(_,$),Ik(I8),$}function C8(_,$){let j=C6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:GK()};return XK(j,G)}function Jj(_,$={}){let j=C6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=I8.get(j)||null;if(!ZK(Z,G))return null;return XK(j,Z)}function YK(_,$,j=5){if(!Array.isArray(_))return[];let G=C6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let V=C6(q?.chat_jid);if(!V||V===G||X.has(V))continue;if(X.add(V),Y.push(V),Y.length>=Z)break}return Y}async function qK(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>C6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!ZK(Jj(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],V=zj.get(q);if(V){await V;continue}let Q=(async()=>{try{let K=await _.fetchTimeline(q);C8(q,K)}catch(K){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",K,{chatJid:q})}finally{zj.delete(q)}})();zj.set(q,Q),await Q}});await Promise.all(Y)}function VK(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return W5([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return W5([...G,...X])}function QK({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=P(null),[q,V]=P(!1),Q=g(!1),K=g(null),L=g(!1),N=g(null),B=g(null),U=g(0),E=g(0);u(()=>{Q.current=q},[q]),u(()=>{B.current=X},[X]);let H=!G&&!Z,D=g(H);u(()=>{D.current=H},[H]),u(()=>{U.current+=1,Y(null),B.current=null,N.current=null,L.current=!1,Q.current=!1,V(!1),E.current=0},[j]);let k=R((M,W)=>{if(!H)return;C8(j,{posts:Array.isArray(M)?M:[],has_more:Boolean(W)})},[j,H]),z=R((M,W)=>{B.current=Array.isArray(M)?M:[],Q.current=Boolean(W),Y(B.current),V(Q.current),k(B.current,Q.current)},[k]),O=R(async(M=null)=>{let W=U.current;try{if(M){let C=await Q7(M,50,0,j);if(W!==U.current)return;Y(C.posts),V(!1);return}let y=(C)=>{if(W!==U.current)return;let f=Array.isArray(C?.posts)?C.posts:[],b=Boolean(C?.has_more);z(f,b)},w=Jj(j);if(w){z(w.posts,w.has_more);let C=E.current;p$(10,null,j).then((f)=>{if(W!==U.current||E.current!==C)return;if(!D.current)return;let b=Array.isArray(f?.posts)?f.posts:[],c=Boolean(f?.has_more);z(VK(B.current,b),c)}).catch((f)=>{if(W!==U.current)return;console.error("Failed to refresh cached timeline:",f)});return}let J=await p$(10,null,j);y(J)}catch(y){if(W!==U.current)return;throw console.error("Failed to load posts:",y),y}},[j,z]),I=R(async()=>{let M=U.current;try{let W=await p$(10,null,j);if(M!==U.current)return;z(VK(B.current,W?.posts),Boolean(W?.has_more))}catch(W){if(M!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j,z]),x=R(async(M={})=>{let W=U.current,y=B.current;if(!y||y.length===0)return;if(L.current)return;let{preserveScroll:w=!0,preserveMode:J="top",allowRepeat:C=!1}=M,f=(p)=>{if(!w){p();return}if(J==="top")$(p);else _(p)},c=y.slice().sort((p,e)=>p.id-e.id)[0]?.id;if(!Number.isFinite(c))return;if(!C&&N.current===c)return;L.current=!0,N.current=c;try{let p=await p$(10,c,j);if(W!==U.current)return;if(E.current+=1,p.posts.length>0)f(()=>{let e=W5([...p.posts,...B.current||[]]);z(e,p.has_more)});else z(B.current||[],!1)}catch(p){if(W!==U.current)return;console.error("Failed to load more posts:",p)}finally{if(W===U.current)L.current=!1}},[j,_,$,z]);u(()=>{K.current=x},[x]);let A=R((M)=>{Y((W)=>{let y=typeof M==="function"?M(W):M;if(B.current=y,Array.isArray(y)){if(E.current+=1,H)C8(j,{posts:y,has_more:Q.current})}return y})},[j,H]);return{posts:X,setPosts:A,hasMore:q,setHasMore:V,hasMoreRef:Q,loadPosts:O,refreshTimeline:I,loadMore:x,loadMoreRef:K,loadingMoreRef:L,lastBeforeIdRef:N}}k0();function Ck(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function LK(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!Ck(Z));return G.length===_.length?_:G}function KK(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function BK(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function j4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function NK(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function FK(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function Pk(_,$=150){return Math.abs(_)<=$}function UK(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=R(()=>{let V=$.current;if(!V)return;if(Pk(V.scrollTop))V.scrollTop=0},[$]),X=R((V)=>{let Q=$.current;if(!Q||typeof V!=="function"){V?.();return}let{currentHashtag:K,searchQuery:L,searchOpen:N}=j.current||{},B=!((L||N)&&!K),U=B?Q.scrollHeight-Q.scrollTop:Q.scrollTop;V(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(B){let H=Math.max(E.scrollHeight-U,0);E.scrollTop=H}else{let H=Math.max(E.scrollHeight-E.clientHeight,0),D=Math.min(U,H);E.scrollTop=D}})},[$,j]),Y=R((V)=>{let Q=$.current;if(!Q||typeof V!=="function"){V?.();return}let K=Q.scrollTop;V(),requestAnimationFrame(()=>{let L=$.current;if(!L)return;let N=Math.max(L.scrollHeight-L.clientHeight,0);L.scrollTop=Math.min(K,N)})},[$]),q=R((V)=>{return LK(V,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function fk(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function Rk(_){_.scrollToBottomRef.current=_.scrollToBottom}function DK(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,V=g(null),{scrollToBottom:Q,preserveTimelineScroll:K,preserveTimelineScrollTop:L,filterQueuedPosts:N}=UK({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});Rk({scrollToBottomRef:V,scrollToBottom:Q});let{posts:B,setPosts:U,hasMore:E,setHasMore:H,hasMoreRef:D,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:I}=QK({preserveTimelineScroll:K,preserveTimelineScrollTop:L,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Y0(()=>fk({rawPosts:B,followupQueueItems:q,filterQueuedPosts:N}),[N,q,B]);return{scrollToBottomRef:V,scrollToBottom:Q,preserveTimelineScroll:K,preserveTimelineScrollTop:L,rawPosts:B,setPosts:U,hasMore:E,setHasMore:H,hasMoreRef:D,loadPosts:k,refreshTimeline:z,loadMore:O,loadMoreRef:I,posts:x}}k0();function Sk(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function HK(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:V,searchPosts:Q,setCurrentHashtag:K,setSearchQuery:L,setSearchOpen:N,setSearchScope:B,setPosts:U,setHasMore:E,preserveTimelineScrollTop:H,setRemovingPostIds:D,deletePost:k,hasMoreRef:z,loadMoreRef:O}=_,I=R(async(C)=>{await CL({hashtag:C,setCurrentHashtag:K,setPosts:U,loadPosts:V})},[V,K,U]),x=R(async()=>{await PL({setCurrentHashtag:K,setSearchQuery:L,setPosts:U,loadPosts:V})},[V,K,U,L]),A=R(async(C,f=Z,b)=>{await Uj({query:C,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:Q,setSearchScope:B,setSearchQuery:L,setCurrentHashtag:K,setPosts:U,setHasMore:E,filters:b})},[X,Y,Q,Z,K,E,U,L,B]),M=R((C)=>{if(B(C),j&&j.trim())Uj({query:j,scope:C,currentChatJid:X,currentRootChatJid:Y,searchPosts:Q,setSearchScope:B,setSearchQuery:L,setCurrentHashtag:K,setPosts:U,setHasMore:E})},[X,Y,Q,j,K,E,U,L,B]),W=R(()=>{N(!0),L(null),K(null),B("current"),U([])},[K,U,N,L,B]),y=R(()=>{N(!1),L(null),V()},[V,N,L]),w=Y0(()=>Sk({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),J=R(async(C)=>{await fL({post:C,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:H,setPosts:U,setRemovingPostIds:D,hasMoreRef:z,loadMoreRef:O})},[X,k,z,O,q,H,U,D]);return{handleHashtagClick:I,handleBackToTimeline:x,handleSearch:A,handleSearchScopeChange:M,enterSearchMode:W,exitSearchMode:y,isMainTimelineView:w,handleDeletePost:J}}k0();function Aj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function EK(_,$){let j=new Map(_),G=Aj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function WK(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Aj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function OK(_){if(_?.options?.remove)return!0;return Aj(_)?.state!=="running"}function kj(_,$){return`${_}:${$}`}function zK(_,$,j){let G=kj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function JK(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function P8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function AK(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var kK="piclaw:ctx:";function G4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function g4(_,$){let j=G4(_),G=G4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function C5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{V_(kK+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function MK(_){if(!_)return null;return H2(kK+_)}async function yK(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,V=++j.current,Q=$;try{let K=await X(Q);if(V!==j.current)return;if(G.current!==Q)return;let L=Z.current,N=Array.isArray(K?.items)?K.items:[],B=KK(N,L);if(B.length){Y((U)=>BK(U,B)?U:B);return}if(N.length>0)return;L.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(V!==j.current)return;if(G.current!==Q)return;Y((K)=>K.length===0?K:[])}}async function TK(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=G4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>g4(q,Y)?q:Y),C5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function wK(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((V)=>EK(V,q)),X((V)=>P8(V,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function xK(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function IK(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(a1($.current))j();G()}q6();var f8=new Map,R8=new Map,uk=250,CK=1500,PK=300000;function P5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function gk(_,$){return`${_}:${$}`}function bk(_){for(let[$,j]of R8.entries())if(_-j>PK)R8.delete($)}function vk(_){for(let[$,j]of f8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>PK)f8.delete($)}}function fK(_=P5()){bk(_),vk(_)}function RK(_){let{chatJid:$,nowMs:j=P5()}=_;if(!$)return;R8.set($,j),fK(j)}function P6(_,$=CK,j=P5()){if(!_)return!1;let G=R8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function A$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=uk,activationWindowMs:X=CK,nowMs:Y=P5()}=_;fK(Y);let q=gk($,j),V=f8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(f8.set(q,V),V.inFlight)return await V.inFlight;if(Boolean(M2("thread-switch",j)||P6(j,X,Y))&&Number.isFinite(V.lastCompletedAt)&&Y-V.lastCompletedAt<=Z)return V.lastValue;let K=Promise.resolve().then(G).then((L)=>{return V.lastCompletedAt=P5(),V.lastValue=L??null,V.inFlight=null,L}).catch((L)=>{throw V.lastCompletedAt=P5(),V.inFlight=null,L});return V.inFlight=K,await K}function SK(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:V}=_,Q=typeof $==="string"&&$.trim()?$.trim():null;if(!Q||!j||Q===j)return!1;if(G.current===Q)return!0;G.current=Q;let K=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!K&&!Y.current&&!q.current&&!Z.current);return V("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Mj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function uK(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:V,pendingRequestRef:Q,clearAgentRunState:K,hasConnectedOnceRef:L,viewStateRef:N,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:H}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),V(null),Q.current=null,K();return}if(!L.current){if(L.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),V(null),Q.current=null,K(),P6($))return;if(Mj(N.current))B();U(),E(),H();return}if(Mj(N.current))B();U(),E(),H()}function gK(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,V=Mj($.current);if(j){if(V)G();Z(),X(),Y(),q();return}if(V)G();X(),Y(),q()}function mk(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function bK(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:V,setContextUsage:Q,getAutoresearchStatus:K,setExtensionStatusPanels:L,setPendingExtensionPanelActions:N,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:H,clearAgentRunState:D,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:y,setActiveTurn:w,noteAgentActivity:J,clearLastActivityFlag:C,isAgentRunningRef:f,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:p,lastAgentEventRef:e,lastSilenceNoticeRef:m,silenceWarningMs:_0,silenceFinalizeMs:E0,isCompactionStatus:G0,serverVersionContext:$0,setConnectionStatus:X0,setStateAccessFailed:U0,setPendingRequestForConnection:t,hasConnectedOnceRef:V0}=_,Q0=R(()=>{return A$({kind:"queue-state",chatJid:$,run:async()=>{return await yK({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),z0=R(async()=>{await A$({kind:"context-usage",chatJid:$,run:async()=>{return await TK({currentChatJid:$,activeChatJidRef:j,getAgentContext:V,setContextUsage:Q}),null}})},[j,$,V,Q]),s=R(async()=>{await A$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await wK({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:K,setExtensionStatusPanels:L,setPendingExtensionPanelActions:N}),null}})},[j,$,K,L,N]),Z0=R(async()=>{return await A$({kind:"agent-status",chatJid:$,run:async()=>{return await sL({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:H,clearAgentRunState:D,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:O,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:y,setActiveTurn:w,noteAgentActivity:J,clearLastActivityFlag:C,onStateAccessResult:U0})}})},[j,k,D,C,$,I,B,J,z,H,w,A,M,x,W,y,U0,O,E,U]),W0=R(async()=>{return await aL({isAgentRunningRef:f,pendingRequestRef:z,currentTurnIdRef:b,silentRecoveryRef:c,silenceRefreshMs:p,viewStateRef:E,refreshTimeline:H,refreshQueueState:Q0,refreshAgentStatus:Z0})},[b,f,z,Z0,Q0,H,p,c,E]);u(()=>{let g0=mk(_0),G_=setInterval(()=>{tL({isAgentRunningRef:f,pendingRequestRef:z,lastAgentEventRef:e,lastSilenceNoticeRef:m,agentStatusRef:k,silenceWarningMs:_0,silenceFinalizeMs:E0,silenceRefreshMs:p,isCompactionStatus:G0,setAgentStatus:x,reconcileSilentTurn:W0})},g0);return()=>clearInterval(G_)},[k,f,G0,e,m,z,W0,x,E0,p,_0]);let P0=R((g0)=>{return SK({serverVersion:g0,...$0})},[$0]),h0=R((g0)=>{if(g0==="connected")U0(!1);uK({currentChatJid:$,status:g0,setConnectionStatus:X0,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:W,setPendingRequest:t,pendingRequestRef:z,clearAgentRunState:D,hasConnectedOnceRef:V0,viewStateRef:E,refreshTimeline:H,refreshAgentStatus:Z0,refreshQueueState:Q0,refreshContextUsage:z0})},[D,$,V0,z,Z0,z0,Q0,H,A,M,x,W,X0,t,U0,E]);return{refreshQueueState:Q0,refreshContextUsage:z0,refreshAutoresearchStatus:s,refreshAgentStatus:Z0,handleUiVersionDrift:P0,handleConnectionStatusChange:h0}}k0();function f6(_){return typeof _==="string"}function R6(_){return typeof _==="string"&&_.trim().length>0}function S8(_){if(!R6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function yj(_){if(!Array.isArray(_))return[];return _.filter(($)=>R6($?.chat_jid)&&R6($?.agent_name))}function vK(_){if(!Array.isArray(_))return[];return _.filter(($)=>f6($?.chat_jid)&&f6($?.agent_name))}function mK(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(f6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!f6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=f6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let V=Boolean(Y.archived_at),Q=Boolean(q.archived_at);if(V!==Q)return V?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let K=S8(Y.updated_at)||S8(Y.created_at),L=S8(q.updated_at)||S8(q.created_at);if(K!==L)return L-K;let N=R6(Y.agent_name)?Y.agent_name.trim():"",B=R6(q.agent_name)?q.agent_name.trim():"",U=N.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var ck={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function cK(_){if(!_||typeof _!=="object")return ck;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function hK(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function lK(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,V=Y.avatar_url??Y.avatarUrl??Y.avatar??null,Q=!1,K=!1;if(Z&&Z!==Y.name)q=Z,Q=!0;if(X!==void 0){let L=typeof X==="string"?X.trim():null,N=typeof V==="string"?V.trim():null,B=L||null;if(B!==(N||null))V=B,K=!0}if(!Q&&!K)return null;return{agentId:G,nameChanged:Q,avatarChanged:K,resolvedName:q,resolvedAvatar:V}}function pK(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function rK(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function dK(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(oX(X));let Y=X?.user||{};G((V)=>pK(V,Y));let q=hK(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function iK(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=lK($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let V={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)V.name=X.resolvedName;if(X.avatarChanged)V.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:V}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function oK(_){let{payload:$,setUserProfile:j}=_;j((G)=>rK(G,$))}function nK(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function sK(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((Q)=>nK(Q,$)?Q:$),q?.(!0);let V=cK($);if(V.hasModel)j((Q)=>Object.is(Q,V.model)?Q:V.model);if(V.hasThinkingLevel){let Q=V.thinkingLevelLabel??V.thinkingLevel;G((K)=>Object.is(K,Q)?K:Q)}if(V.hasSupportsThinking)Z((Q)=>Q===V.supportsThinking?Q:V.supportsThinking);if(V.hasProviderUsage)X((Q)=>nK(Q,V.providerUsage)?Q:V.providerUsage)}async function aK(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,V]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let Q=yj(q?.chats),K=yj(V?.chats),L=mK(Q,K,Y);return X(L),L}catch{if(Z.current!==Y)return[];return X([]),[]}}async function tK(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(vK(Z?.chats))}catch{G([])}}function eK(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),FK($))Y()}function _B(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),V=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=V,G)G.style.setProperty("--sidebar-width",`${V}px`);return V}async function $B(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:Q,scrollToBottom:K,isCancelled:L,scheduleRaf:N=(O)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(O);return}setTimeout(O,0)},scheduleTimeout:B=(O,I)=>{setTimeout(O,I)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:H,onTimelineError:D}=_,k=(O)=>{if(L())return;N(()=>{if(L())return;N(()=>{if(L())return;H?.(O)})})},z=()=>{if(L())return;N(()=>{if(L())return;B(()=>{if(L())return;K()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),L())return;E?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(O){if(L())return;throw D?.(O,{mode:"hashtag",hashtag:$}),O}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let O=await q(j,50,0,Z,G,X);if(L())return;V(Array.isArray(O?.results)?O.results:[]),Q(!1),E?.({mode:"search",resultCount:Array.isArray(O?.results)?O.results.length:0}),k({mode:"search"})}catch(O){if(L())return;D?.(O,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",O),V([]),Q(!1)}return}U?.({mode:"timeline"});try{if(await Y(),L())return;E?.({mode:"timeline"}),k({mode:"timeline"}),z()}catch(O){if(L())return;D?.(O,{mode:"timeline"}),console.error("Failed to load timeline:",O)}}q6();w_();function hk(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:V=(L,N)=>setInterval(L,N),clearScheduledInterval:Q=(L)=>clearInterval(L)}=_;if(Y)$();let K=V(()=>{j(),G(),Z(),X()},q);return()=>{Q(K)}}function lk(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function pk(_){let $=YK(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;qK({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>p$(10,null,j))})}function jB(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:V,currentRootChatJid:Q,getAgentModels:K,getAgentContext:L,getActiveChatAgents:N,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:H,setActiveModel:D,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:I,setHasLoadedAgentModels:x,agentsRef:A,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y,setContextUsage:w,setExtensionWorkingState:J}=_,C=R(async()=>{await dK({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{C(),_B({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:D6(Number.POSITIVE_INFINITY)})},[q,C,X,Y]);let f=R(($0)=>{sK({payload:$0,setActiveModel:D,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:O,setAgentModelsPayload:I,setHasLoadedAgentModels:x})},[D,O,k,I,x,z]),b=R(()=>M2("thread-switch",V),[V]),c=R(()=>{return A$({kind:"model-state",chatJid:V,run:async()=>{let $0=b();if($0)X1($0,"runtime-hydration-start",{phase:"model-state"});let X0=V;try{let[t,V0]=await Promise.all([(async()=>{let z0=$0||b();if(z0)X1(z0,"model-request-start",{chatJid:X0});let s=await K(X0);if(z0)X1(z0,"model-request-ready",{chatJid:X0,hasCurrent:Boolean(s?.current),modelCount:Array.isArray(s?.models)?s.models.length:0});return s})(),L(X0).catch(()=>null)]);if(U.current&&U.current!==X0)return null;f(t);let Q0=G4(V0);if(Q0&&Q0.percent!=null)w((z0)=>g4(z0,Q0)?z0:Q0),C5(X0,Q0)}catch{if(U.current&&U.current!==X0)return null;f(null)}let U0=$0||b();if(U0)X1(U0,"runtime-hydration-ready",{chatJid:V}),y2(U0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:V});return null}})},[U,f,V,L,K,b,w]);u(()=>{RK({chatJid:V}),D(null),k(null),z(!1),O(null),x(!1),I(null),J({message:null,indicator:null,visible:!0});let $0=MK(V);if($0)w($0);else w(null);c()},[V,c,D,O,k,I,w,J,x,z]);let p=R(($0)=>{iK({payload:$0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),e=R(($0)=>{oK({payload:$0,setUserProfile:G})},[G]),m=R(($0)=>{let X0=Boolean($0?.prewarmRecent),U0=Number.isFinite($0?.prewarmLimit)?Number($0?.prewarmLimit):5;return A$({kind:"active-chat-agents",chatJid:V,run:async()=>{let t=b(),V0=await aK({currentChatJid:V,getActiveChatAgents:async()=>{if(t)X1(t,"active-chat-list-request-start",{chatJid:V});let Q0=await N(V);if(t)X1(t,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,z0)=>{if(t)X1(t,"branch-list-request-start",{rootChatJid:Q0});let s=await B(Q0,z0);if(t)X1(t,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(s?.chats)?s.chats.length:0});return s},activeChatJidRef:U,setActiveChatAgents:E});if(X0)pk({chats:V0,currentChatJid:V,prewarmLimit:U0});return null}})},[U,V,N,B,b,E]),_0=R(()=>{return A$({kind:"current-chat-branches",chatJid:V,run:async()=>{let $0=b();return await tK({currentRootChatJid:Q,getChatBranches:async(X0,U0)=>{if($0)X1($0,"root-branch-request-start",{rootChatJid:X0});let t=await B(X0,U0);if($0)X1($0,"root-branch-request-ready",{rootChatJid:X0,rowCount:Array.isArray(t?.chats)?t.chats.length:0});return t},setCurrentChatBranches:H}),null}})},[V,Q,B,b,H]),E0=R(()=>{xK({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y})},[m,y,W,_0,c,M]),G0=R(()=>{lk({refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,refreshContextUsage:W,refreshAutoresearchStatus:y,prewarmLimit:5})},[m,y,W,_0,c,M]);return u(()=>hk({refreshModelAndQueueState:E0,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshQueueState:M,runImmediately:!1}),[m,_0,E0,c,M]),u(()=>{let $0=setInterval(()=>{c()},5000);return()=>clearInterval($0)},[c]),{updateAgentProfile:p,updateUserProfile:e,applyModelState:f,refreshModelState:c,refreshActiveChatAgents:m,refreshCurrentChatBranches:_0,refreshModelAndQueueState:E0,refreshPostPaintThreadState:G0}}k0();function rk(_,$){let j=N1(_);return Boolean(_&&j===$)}function f5(_,$,j){if(!rk(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function GB(_,$){return{..._,openedAt:$}}function ZB(_){let $=N1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function XB(_,$,j){let G=iq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=N1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=N1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function YB(_,$){if(!_||_?.source!=="live")return _||null;let j=N1($),G=N1(_);if(j&&G&&j!==G)return _;return null}function qB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Tj(_,$,j){if(j.errorMessage)return f5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return f5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function VB(_,$,j){return f5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function QB(_,$,j){return f5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function LB(_,$,j){return f5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}q6();function nk(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function KB(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function BB(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:Q,scrollToBottom:K,setExtensionStatusPanels:L,setPendingExtensionPanelActions:N,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:H,restoreChatPaneState:D,dismissedQueueRowIdsRef:k,refreshAgentStatus:z,viewStateRef:O,refreshTimeline:I,refreshModelAndQueueState:x,refreshPostPaintThreadState:A,setFloatingWidget:M,dismissedLiveWidgetKeysRef:W}=_;u(()=>{nk({setExtensionStatusPanels:L,setPendingExtensionPanelActions:N,setExtensionWorkingState:B})},[$,L,N,B]),u(()=>{let J=!1,C=VX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(C,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),$B({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:Q,scrollToBottom:K,isCancelled:()=>J,onTimelineLoadStart:(f)=>{X1(C,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{X1(C,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{X1(C,"timeline-first-paint",f||null),y2(C,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),KB({refreshAgentStatus:z,refreshPostPaintThreadState:A})},onTimelineError:(f,b)=>{QX(C,f,"timeline-load-failed",b||null),KB({refreshAgentStatus:z,refreshPostPaintThreadState:A})}}),()=>{J=!0,LX(C,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,K,q,Q,V,z,A]),u(()=>{let J=U.current||$;E.current.set(J,H())},[E,$,U,H]),u(()=>{let J=U.current||$;if(J===$)return;E.current.set(J,H()),U.current=$,k.current.clear(),D(E.current.get($)||null)},[E,$,k,U,D,H]);let y=R(()=>{IK({viewStateRef:O,refreshTimeline:I,refreshModelAndQueueState:x})},[x,I,O]),w=R((J,C="streaming")=>{let f=new Date().toISOString();M((b)=>XB(b,J,{fallbackStatus:C,currentChatJid:$,dismissedSessionKeys:W.current,updatedAt:f}))},[$,W,M]);return{refreshCurrentView:y,applyLiveGeneratedWidgetUpdate:w}}k0();k0();w_();function dk({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!E6(),q=Z.visibilityState&&Z.visibilityState!=="visible",V=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},Q=()=>{if(V())return;if(q)q=!1,X(),$?.()},K=()=>{if(V())return;if(q){Q();return}if(Y)_.reconnectIfNeeded()},L=()=>{Q()},N=()=>{Q()};return G.addEventListener("focus",K),G.addEventListener("pageshow",L),Z.addEventListener("visibilitychange",N),()=>{G.removeEventListener("focus",K),G.removeEventListener("pageshow",L),Z.removeEventListener("visibilitychange",N)}}function NB({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let q=g(j);q.current=j;let V=g(G);V.current=G,u(()=>{let Q=new P2((L,N)=>X.current(L,N),(L)=>Y.current(L),{chatJid:Z});Q.connect();let K=dk({sse:Q,onWake:()=>V.current?.()});return()=>{K(),Q.disconnect()}},[Z])}$6();m2();function b4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function R5(_,$){return Boolean(_)&&!Boolean($)}function FB(_,$){return _||$||null}function UB(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function S5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=j4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function wj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function ik(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function DB(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:ik($,j),panelKey:typeof $?.key==="string"?$.key:""}}function ok(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function HB(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=ok($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function EB(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),q=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(q)?q:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function WB(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var sk=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function OB(_){return sk.has(String(_||"").trim())}function ak(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function u8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(ak(_),{detail:G})),!0}function zB(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function JB(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function AB(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:V,draftBufferRef:Q,thoughtBufferRef:K,previewResyncPendingRef:L,previewResyncGenerationRef:N,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:H,thoughtThrottleRef:D,viewStateRef:k,followupQueueItemsRef:z,dismissedQueueRowIdsRef:O,scrollToBottomRef:I,hasMoreRef:x,loadMoreRef:A,lastAgentResponseRef:M,wasAgentActiveRef:W,setActiveTurn:y,applyLiveGeneratedWidgetUpdate:w,setFloatingWidget:J,clearLastActivityFlag:C,handleUiVersionDrift:f,setAgentStatus:b,setAgentDraft:c,setAgentPlan:p,setAgentThought:e,setPendingRequest:m,clearAgentRunState:_0,getAgentStatus:E0,noteAgentActivity:G0,showLastActivity:$0,refreshTimeline:X0,refreshModelAndQueueState:U0,refreshActiveChatAgents:t,refreshCurrentChatBranches:V0,notifyForFinalResponse:Q0,setContextUsage:z0,refreshContextUsage:s,refreshQueueState:Z0,setFollowupQueueItems:W0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:h0,applyModelState:g0,getAgentContext:G_,setExtensionStatusPanels:c0,setPendingExtensionPanelActions:s0,setExtensionWorkingState:f0,refreshActiveEditorFromWorkspace:i0,showIntentToast:b0,removeStalledPost:t0,setPosts:o0,preserveTimelineScrollTop:F_,openEditor:Z_}=j,{turnId:v0,isCurrentChatEvent:O0}=zB(_,$,G);if(O0)Z($),X($);if(_==="ui_theme"){U5($);return}if(_==="ui_meters"){t7($);return}if(_==="ui_open_tab"){let D0=typeof $?.path==="string"?$.path.trim():"",u0=typeof $?.label==="string"?$.label.trim():void 0;if(D0==="piclaw://settings"){let I0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:I0?{section:I0}:void 0}));return}if(D0&&typeof Z_==="function")Z_(D0,u0?{label:u0}:void 0);return}let q_=UB(_);if(q_.kind==="update"){if(!O0)return;if(q_.shouldAdoptTurn&&R5(v0,Y.current))y(v0);w($,q_.fallbackStatus||"streaming");return}if(q_.kind==="close"){if(!O0)return;J((D0)=>YB(D0,$));return}if(_?.startsWith("agent_")&&!JB(_))C();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let I0=$.ui_theme.theme||"default",r0=$.ui_theme.tint||null;U5({theme:I0,tint:r0})}if($?.ui_meters)t7($.ui_meters);let D0=N.current+1;if(N.current=D0,L.current=!0,Q.current="",K.current="",b(null),c({text:"",totalLines:0}),p(""),e({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),m(null),V.current=null,_0(),P6(G)){if(N.current===D0)L.current=!1;return}let u0=G;if(E0(u0).then((I0)=>{if(q.current!==u0)return;if(!I0||I0.status!=="active"||!I0.data)return;let r0=I0.data,z_=w8(r0);if(z_)y(z_);b(r0),G0({clearSilence:!0,atMs:n$(r0)??Date.now()}),$0(r0);let Q_=I5(I0.thought);if(Q_)K.current=Q_.text,e(Q_);let U_=I5(I0.draft);if(U_)Q.current=U_.text,c(U_)}).catch((I0)=>{console.warn("Failed to fetch agent status:",I0)}).finally(()=>{if(N.current===D0)L.current=!1}),a1(k.current))X0();U0();return}if(_==="agent_status"){if(!O0){if($?.type==="done"||$?.type==="error")t(),V0();return}let D0=G4($.context_usage);if(D0&&D0.percent!=null)z0((u0)=>g4(u0,D0)?u0:D0),C5(G,D0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(b4(v0,Y.current))return;if($.type==="done"){if(Q0(v0||Y.current),a1(k.current))X0()}if(s(),W.current=!1,_0(),O.current.clear(),t(),U0(),c({text:"",totalLines:0}),p(""),e({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),m(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(v0)y(v0);if(G0({running:!0,clearSilence:!0,atMs:n$($)??Date.now()}),$.type==="thinking")Q.current="",K.current="",c({text:"",totalLines:0}),p(""),e({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!O0)return;if(b4(v0,Y.current))return;let D0=FB(v0,Y.current);if(!D0)return;B.current=D0,h0(D0);return}if(_==="agent_followup_queued"){if(!O0)return;W0((D0)=>NK(D0,$)),Z0();return}if(_==="agent_followup_consumed"){if(!O0)return;let D0=S5(z.current,$);if(D0)P0(D0.remainingQueueCount),W0((u0)=>j4(u0,D0.rowId).items);if(Z0(),a1(k.current))X0();return}if(_==="agent_followup_removed"){if(!O0)return;let D0=S5(z.current,$);if(D0)O.current.add(D0.rowId),P0(D0.remainingQueueCount),W0((u0)=>j4(u0,D0.rowId).items);Z0();return}if(_==="agent_draft_delta"){if(!O0)return;if(L.current)return;if(b4(v0,Y.current))return;if(R5(v0,Y.current))y(v0);G0({running:!0,clearSilence:!0}),Q.current=pL(Q.current,$);let D0=Date.now();if(!H.current||D0-H.current>=100){H.current=D0;let u0=Q.current;if(E.current)c((I0)=>Wj(u0,I0));else c(x8(u0,null))}return}if(_==="agent_draft"){if(!O0)return;if(L.current)return;if(b4(v0,Y.current))return;if(R5(v0,Y.current))y(v0);G0({running:!0,clearSilence:!0});let D0=$.text||"",u0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")p((I0)=>lL(I0,D0,u0));else if(!E.current)Q.current=D0,c(x8(D0,$.total_lines));return}if(_==="agent_thought_delta"){if(!O0)return;if(L.current)return;if(b4(v0,Y.current))return;if(R5(v0,Y.current))y(v0);G0({running:!0,clearSilence:!0}),K.current=rL(K.current,$);let D0=Date.now();if(U.current&&(!D.current||D0-D.current>=100)){D.current=D0;let u0=K.current;e((I0)=>Wj(u0,I0))}return}if(_==="agent_thought"){if(!O0)return;if(L.current)return;if(b4(v0,Y.current))return;if(R5(v0,Y.current))y(v0);G0({running:!0,clearSilence:!0});let D0=$.text||"";if(!U.current)K.current=D0,e(x8(D0,$.total_lines));return}if(_==="model_changed"){if(!O0)return;g0($);let D0=G;G_(D0).then((u0)=>{if(q.current!==D0)return;let I0=G4(u0);if(I0&&I0.percent!=null)z0((r0)=>g4(r0,I0)?r0:I0),C5(D0,I0)}).catch(()=>{if(q.current!==D0)return});return}let d0=DB(_,$,G);if(d0.isStatusPanelWidgetEvent){if(d0.eventChatJid!==G)return;if(!d0.panelKey)return;if(c0((D0)=>WK(D0,$)),OK($))s0((D0)=>P8(D0,d0.panelKey));u8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));i0($?.updates);return}if(OB(_)){if(_==="extension_ui_title"){t(),V0(),u8(_,$);return}if(!O0)return;let D0=EB(_,$);if(D0&&D0.percent!=null)z0((I0)=>g4(I0,D0)?I0:D0);f0((I0)=>{return HB(I0,_,$)??I0}),u8(_,$);let u0=WB(_,$);if(u0)b0(u0.title,u0.detail,u0.kind,u0.durationMs);return}let H_=a1(k.current);if(_==="agent_response"){if(!O0)return;f0({message:null,indicator:null,visible:!0}),t0(),M.current={post:$,turnId:Y.current}}if(nL(_,O0,H_))o0((D0)=>dL(D0,$)),I.current?.();if(_==="interaction_updated"){if(!Oj(O0,H_))return;o0((D0)=>iL(D0,$))}if(_==="interaction_deleted"){if(!Oj(O0,H_))return;let D0=$?.ids||[];if(D0.length){if(F_(()=>{o0((u0)=>oL(u0,D0))}),x.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function tk(_){return _?15000:60000}function kB(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:V,currentTurnIdRef:Q,activeChatJidRef:K,pendingRequestRef:L,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:H,thoughtExpandedRef:D,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:W,loadMoreRef:y,lastAgentResponseRef:w,wasAgentActiveRef:J,setActiveTurn:C,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:p,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:G0,clearAgentRunState:$0,getAgentStatus:X0,noteAgentActivity:U0,showLastActivity:t,refreshTimeline:V0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:z0,refreshCurrentChatBranches:s,notifyForFinalResponse:Z0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:h0,setFollowupQueueItems:g0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:c0,applyModelState:s0,getAgentContext:f0,setExtensionStatusPanels:i0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:o0,showIntentToast:F_,removeStalledPost:Z_,setPosts:v0,preserveTimelineScrollTop:O0,openEditor:q_,finalizeStalledResponse:d0,connectionStatus:H_,agentStatus:D0,refreshAgentStatus:u0,refreshAutoresearchStatus:I0}=_,r0=R((Q_,U_)=>{AB(Q_,U_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:V,currentTurnIdRef:Q,activeChatJidRef:K,pendingRequestRef:L,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:H,thoughtExpandedRef:D,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:O,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:W,loadMoreRef:y,lastAgentResponseRef:w,wasAgentActiveRef:J,setActiveTurn:C,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:c,handleUiVersionDrift:p,setAgentStatus:e,setAgentDraft:m,setAgentPlan:_0,setAgentThought:E0,setPendingRequest:G0,clearAgentRunState:$0,getAgentStatus:X0,noteAgentActivity:U0,showLastActivity:t,refreshTimeline:V0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:z0,refreshCurrentChatBranches:s,notifyForFinalResponse:Z0,setContextUsage:W0,refreshContextUsage:P0,refreshQueueState:h0,setFollowupQueueItems:g0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:c0,applyModelState:s0,getAgentContext:f0,setExtensionStatusPanels:i0,setPendingExtensionPanelActions:b0,setExtensionWorkingState:t0,refreshActiveEditorFromWorkspace:o0,showIntentToast:F_,removeStalledPost:Z_,setPosts:v0,preserveTimelineScrollTop:O0,openEditor:q_})},[K,f,s0,$0,c,G_,$,Q,A,N,k,z,x,f0,X0,p,W,w,y,U0,Z0,L,O0,E,U,z0,o0,P0,s,Q0,h0,V0,Z_,M,C,m,_0,e,E0,W0,i0,t0,b,g0,b0,G0,v0,c0,F_,t,H,B,D,O,q,V,I,J,q_]);u(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=r0,Q_.reset=()=>{Z_(),$0(),e(null),m({text:"",totalLines:0}),_0(""),E0({text:"",totalLines:0}),t0({message:null,indicator:null,visible:!0}),G0(null)},Q_.finalize=()=>d0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[$0,d0,r0,Z_,m,_0,e,E0,t0,G0]),NB({handleSseEvent:r0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let U_=Q_.slice(5);G(U_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let z_=D0!==null;u(()=>{if(H_!=="connected")return;let Q_=tk(z_),U_=setInterval(()=>{gK({viewStateRef:I,isAgentActive:z_,refreshTimeline:V0,refreshQueueState:h0,refreshAgentStatus:u0,refreshContextUsage:P0,refreshAutoresearchStatus:I0})},Q_);return()=>clearInterval(U_)},[H_,z_,u0,I0,P0,h0,V0,I]),u(()=>{return A8(()=>{u0(),P0(),h0(),I0()})},[u0,I0,P0,h0])}function ek(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function _M(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function $M(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function jM(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function MB(_){let $=bK(ek(_)),j=jB(_M({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=BB($M({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return kB(jM({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}k0();var yB="piclaw:pane-host-transfer:",GM=300000;function TB(_){try{return _?.localStorage??null}catch{return null}}function wB(_){return typeof _==="string"?_.trim():""}function xB(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function ZM(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function XM(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function YM(_,$=globalThis,j=Date.now()){let G=TB($),Z=wB(_?.path),X=xB(_?.payload);if(!G||!Z||!X)return null;let Y=ZM(j);try{return G.setItem(`${yB}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function xj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=TB($);if(!G||!Z)return null;let X=`${yB}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;XM(Z,X);try{let q=JSON.parse(Y),V=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(V+GM<j)return null;let Q=wB(q?.path),K=xB(q?.payload);if(!Q||!K)return null;return{path:Q,payload:K,capturedAt:V}}catch{return null}}function g8(_,$=globalThis,j=Date.now()){let G=YM(_,$,j);return G?{pane_transfer:G}:null}function IB(_=globalThis,$=Date.now()){let j=Z5("pane_transfer",_);return xj(j,_,$)}function v4(_){return typeof _==="string"?_.trim():""}function qM(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Ij(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(qM($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function VM(_){try{return _?.(),!0}catch($){return!1}}function u5(_,$=typeof window<"u"?window:null){let j=Ij($),G=v4(_?.panePath),Z=v4(_?.paneInstanceId),X=v4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function CB(_,$=typeof window<"u"?window:null){let j=Ij($),G=v4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function PB(_,$,j,G){let Z=Ij(_),X=v4($?.panePath),Y=v4($?.paneInstanceId),q=v4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let V=Z.get(q)||null;if(!V)return null;if(V.panePath!==X||V.paneInstanceId!==Y)return null;if(typeof V.instance?.moveHost!=="function")return null;if(!await V.instance.moveHost(j,G))return null;return Z.delete(q),VM(V.releaseSourceHost),V.instance}h2();function S6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function fB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(K)=>{let L=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(L)G?.(L,N)},q=(K)=>{let L=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(L)Z?.(L,N)},V=(K)=>{let L=K?.detail?.path,N=typeof K?.detail?.label==="string"&&K.detail.label.trim()?K.detail.label.trim():void 0;if(L)X?.(L,N)},Q=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return Q.forEach((K)=>j.addEventListener(K,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",V),()=>{Q.forEach((K)=>j.removeEventListener(K,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",V)}}function RB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(S6(Z?.target))return;if(!J$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function SB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(J$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(S6(q?.target))return;if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function uB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(S6(Z?.target))return;if(J$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(J$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function gB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(S6(G?.target))return;if(!J$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function bB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(S6(G?.target))return;if(!J$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function vB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:V=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let Q=X?.()||null;if(!Q)return!1;if(G||V<Number(Z||0)||Q.inFlight||V<Number(Q.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function mB(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function cB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:V,renameChatBranch:Q,refreshActiveChatAgents:K,refreshCurrentChatBranches:L,navigate:N,baseHref:B,chatOnlyMode:U,showIntentToast:E,closeRenameForm:H,now:D=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=D(),z=q?.()||null;if(!z)return!1;if(X.current||k<Number(Y.current||0)||z.inFlight||k<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,V?.(!0);try{let O=j.agent_name||"",I=e2(G,O);if(!I.canSubmit)return E?.("Could not rename session",I.message||"Enter a valid session handle.","warning",4000),!1;let x=I.normalized||O,A=await Q(j.chat_jid,{agentName:x});await Promise.allSettled([K?.(),L?.()]);let M=A?.branch?.agent_name||x||O;return E?.("Session renamed",`@${M}`,"info",3500),H?.(),!0}catch(O){let I=O instanceof Error?O.message:String(O||"Could not rename session."),x=/already in use/i.test(I||"")?`${I} Switch to or restore that existing session from the session manager.`:I;return E?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,V?.(!1);let O=D()+$L;Y.current=O;let I=q?.()||null;if(I)I.inFlight=!1,I.cooldownUntil=O}}async function hB(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:V,refreshCurrentChatBranches:Q,showIntentToast:K,baseHref:L,chatOnlyMode:N,navigate:B,confirm:U=(M)=>window.confirm(M)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",H=typeof G==="string"&&G.trim()?G.trim():"",D=E||Z?.chat_jid||H;if(!D)return K?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===D?Z:null)||X.find((M)=>M?.chat_jid===D)||Y.find((M)=>M?.chat_jid===D)||null,z=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),O=Boolean(z&&D==="web:default"),I=Boolean(z&&X.some((M)=>{let W=typeof M?.chat_jid==="string"?M.chat_jid.trim():"",y=typeof M?.root_chat_jid==="string"?M.root_chat_jid.trim():W;return W&&W!==D&&y===D&&!M?.archived_at}));if(O)return K?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(I)return K?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||D}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(z?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(D),await Promise.allSettled([V?.(),Q?.()]);let M=z?"web:default":k?.root_chat_jid||"web:default";K?.(z?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let W=w1(L,M,{chatOnly:N});return B?.(W),!0}catch(M){let W=M instanceof Error?M.message:String(M||"Could not prune branch.");return K?.("Could not prune branch",W||"Could not prune branch.","warning",5000),!1}}async function lB(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(E)=>window.confirm(E)}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;let Q=G.find((E)=>E?.chat_jid===V)||null;if(!Boolean(Q?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let L=Boolean(Q?.chat_jid&&Q.chat_jid===(Q.root_chat_jid||Q.chat_jid)),N=`@${Q?.agent_name||V}`;if(!q(`Permanently delete ${N}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${L?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(V),await Promise.allSettled([Z?.(),X?.()]),Y?.(L?"Archived session deleted":"Archived branch deleted",`${N} was permanently deleted.`,"info",4000),!0}catch(E){let H=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${L?"session":"branch"}.`);return Y?.("Could not delete branch",H||`Could not permanently delete archived ${L?"session":"branch"}.`,"warning",5000),!1}}async function pB(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:V,navigate:Q}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;try{let L=G.find((D)=>D?.chat_jid===K)||null,N=await j(K);await Promise.allSettled([Z?.(),X?.()]);let B=N?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():K,E=Aq(L?.agent_name,B?.agent_name,U);Y?.("Branch restored",E,"info",4200);let H=w1(q,U,{chatOnly:V});return Q?.(H),!0}catch(L){let N=L instanceof Error?L.message:String(L||"Could not restore branch.");return Y?.("Could not restore branch",N||"Could not restore branch.","warning",5000),!1}}async function rB(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let V=q?.branch,Q=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!Q)throw Error("Branch fork did not return a chat id.");let K=w1(X,Q,{chatOnly:!0});return Z?.(K,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:D4(q)}),!1}}function dB(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let V=w1(X,q,{chatOnly:Z});return Y?.(V),!0}function QM(_){return typeof _==="string"?_.trim():""}function LM(_){return new Promise(($)=>setTimeout($,_))}async function nB(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function iB(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:V,buildEditorPopoutTransfer:Q}=_,K=$===X&&Boolean(V?.($));if($===X&&!K){let E=Z.current;if(await nB(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let L=()=>QM(q?.()??j),N=L(),B=G.current;if(N!==$)Y?.($);let U=N===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await LM(16);else await Promise.resolve();let H=L(),D=G.current,k=H===$,z=D!==B;if(!k||typeof D?.preparePopoutTransfer!=="function")continue;if(N===$||z||E>0){U=D;break}}if(await nB(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return Q?.($)??null}function oB(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function sB(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let V=q("editorWidth",null),Q=Y.current||280,K=Number.isFinite(V)?Number(V):Q;Z.current=H6(K,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let V=q("dockHeight",null);X.current=Number.isFinite(V)?Number(V):200}G.style.setProperty("--dock-height",`${X.current}px`)}w_();async function aB(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function tB(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:V}=_;if(typeof q==="function")try{let Q=C3(V,$,{chatOnly:j});return q(Q),!0}catch(Q){return Y?.("Could not create branch",D4(Q),"warning",5000),!1}try{let K=(await G($))?.branch,L=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!L)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=K?.agent_name?`@${K.agent_name}`:L;Y?.("New branch created",`Switched to ${N}.`,"info",2500);let B=w1(V,L,{chatOnly:j});return q?.(B),!0}catch(Q){return Y?.("Could not create branch",D4(Q),"warning",5000),!1}}async function eB(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:V}=_,Q=String($||"").trim();if(!Q)return!1;try{let N=(await(typeof G==="function"?G:H7)(Q))?.branch,B=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let U=N?.agent_name?`@${N.agent_name}`:B;Y?.("Root session created",`Switched to ${U}.`,"info",2500);let E=w1(V,B,{chatOnly:j});return q?.(E),!0}catch(K){return Y?.("Could not create root session",D4(K),"warning",5000),!1}}async function _N(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:V,currentChatJid:Q,baseHref:K}=_;if(!$||j)return!1;let L=typeof G==="string"&&G.trim()?G.trim():"";if(!L)return!1;let N=oG(L);if(!N)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=T3(N);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(L),E=Boolean(U&&Object.keys(U).length>0),H=iG(K,L,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:Q,params:U});if(x3(B,H),V?.(L,B,U||null),E&&!V)q?.(L);return!0}catch(U){I3(B);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function $N(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:V,setCurrentChatBranches:Q,showIntentToast:K,baseHref:L}=_;if(!$||j)return!1;let N=dG(G);if(!N)return K?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(N.mode==="tab"){let U=C3(L,G,{chatOnly:!0});if(!window.open(U,N.target))return K?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=T3(N);if(!B)return K?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,H=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");let D=await aB(()=>Y?.());if(D)V?.(Array.isArray(D?.chats)?D.chats:[]);let k=await aB(()=>q?.(Z));if(k)Q?.(Array.isArray(k?.chats)?k.chats:[]);let z=w1(L,H,{chatOnly:!0});return x3(B,z),!0}catch(U){return I3(B),K?.("Could not open branch window",D4(U),"error",5000),!1}}function KM(_){_(($)=>!$)}function BM(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return dB({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function NM(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return vB({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function FM(_){mB(_)}async function UM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await cB({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function DM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await hB({hasWindow:$,baseHref:j,...G})}async function HM(_){await lB(_)}async function EM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await pB({baseHref:j,...G})}function WM(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:V=rB}=_;if(!$||!Y)return;let Q=!1;return V({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>Q}),()=>{Q=!0}}async function OM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await tB({baseHref:j,...G})}async function zM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await eB({baseHref:j,...G})}async function JM(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:V,dockInstanceRef:Q,terminalTabPath:K,tabPaneOverrides:L,buildPaneDetachTransfer:N,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:E,closeTab:H,setDockVisible:D,hasWindow:k=typeof window<"u",baseHref:z=k?window.location.href:"http://localhost/"}=_,O=N?.(j)||null;return await _N({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(I)=>{let x=await iB({panePath:I,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:q,editorInstanceRef:V,dockInstanceRef:Q,terminalTabPath:K,resolveTab:E,buildEditorPopoutTransfer:(y)=>{if(!y||y===K)return null;let w=V.current,J=typeof w?.getContent==="function"?w.getContent():void 0,C=typeof w?.isDirty==="function"?w.isDirty():!1,f=L instanceof Map?L.get(y)||null:null,b=$_.getViewState(y)||null;return Y2({path:y,content:C?J:void 0,paneOverrideId:f,viewState:b})}}),A=I===K&&!E(I)?Q.current:V.current,M=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,W=M?g8({path:I,payload:M}):null;if(O?.paneInstanceId&&O?.paneWindowId&&A&&I!==K&&M?.kind!=="terminal")u5({panePath:I,paneInstanceId:O.paneInstanceId,paneWindowId:O.paneWindowId,instance:A,releaseSourceHost:()=>{if(I===K){if(Q.current===A)Q.current=null;if(V.current===A)V.current=null;return}if(V.current===A)V.current=null}});return{...x||{},...W||{},...O?.params||{}}},onPaneWindowOpened:B?(I,x,A)=>{B(I,G,x,A)}:void 0,closeSourcePaneIfTransferred:B?void 0:(I)=>{oB({panePath:I,terminalTabPath:K,dockVisible:U,resolveTab:E,closeTab:H,setDockVisible:D})}})}function AM(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=fB}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function kM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await $N({hasWindow:$,baseHref:j,...G})}function MM(_){let{hasWindow:$=typeof window<"u",...j}=_;sB({hasWindow:$,...j})}function jN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:V,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:K,setIsRenamingBranch:L,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:H,activeChatAgents:D,pruneChatBranch:k,purgeChatBranch:z,restoreChatBranch:O,branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,createRootChatSession:M,setBranchLoaderState:W,currentRootChatJid:y,isWebAppMode:w,getActiveChatAgents:J,getChatBranches:C,setActiveChatAgents:f,setCurrentChatBranches:b,openEditor:c,activateTab:p,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:G0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:X0,dockVisible:U0,resolveTab:t,closeTab:V0,setDockVisible:Q0,editorOpen:z0,shellElement:s,editorWidthRef:Z0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:h0}=_,g0=R(()=>{KM($)},[$]),G_=R((O0)=>{BM({nextChatJid:O0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),c0=R(()=>{NM({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:V,setRenameBranchNameDraft:Q,setIsRenameBranchFormOpen:K})},[X,V,Y,q,K,Q]),s0=R(()=>{FM({setIsRenameBranchFormOpen:K,setRenameBranchNameDraft:Q})},[K,Q]),f0=R(async(O0)=>{await UM({currentBranchRecord:X,nextName:O0,openRenameForm:c0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:V,setIsRenamingBranch:L,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:s0})},[s0,X,G,V,Z,c0,B,U,Y,q,N,L,E]),i0=R(async(O0=null)=>{await DM({targetChatJid:O0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:H,activeChatAgents:D,pruneChatBranch:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[D,G,X,H,j,Z,k,B,U,E]),b0=R(async(O0)=>{await HM({targetChatJid:O0,purgeChatBranch:z,currentChatBranches:H,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E})},[H,z,B,U,E]),t0=R(async(O0)=>{await EM({targetChatJid:O0,restoreChatBranch:O,currentChatBranches:H,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,H,Z,B,U,O,E]);u(()=>WM({branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,setBranchLoaderState:W,navigate:Z}),[I,x,A,Z,W]);let o0=R(async()=>{await OM({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,A,Z,B,U,E]),F_=R(async(O0)=>{await zM({rootName:O0,chatOnlyMode:G,createRootChatSession:M,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,M,Z,B,U,E]),Z_=R(async(O0,q_)=>{return await JM({isWebAppMode:w,path:O0,label:q_,showIntentToast:E,currentChatJid:j,activateTab:p,tabStripActiveId:e,editorInstanceRef:m,dockInstanceRef:_0,terminalTabPath:E0,tabPaneOverrides:G0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:X0,dockVisible:U0,resolveTab:t,closeTab:V0,setDockVisible:Q0})},[p,$0,V0,j,_0,U0,m,w,X0,t,Q0,E,G0,e,E0]);u(()=>AM({openEditor:c,popOutPane:(O0,q_)=>{Z_(O0,q_)}}),[Z_,c]);let v0=R(async()=>{await kM({isWebAppMode:w,currentChatJid:j,currentRootChatJid:y,forkChatBranch:A,getActiveChatAgents:J,getChatBranches:C,setActiveChatAgents:f,setCurrentChatBranches:b,showIntentToast:E})},[j,y,A,J,C,w,f,b,E]);return u(()=>{MM({editorOpen:z0,shellElement:s,editorWidthRef:Z0,dockHeightRef:W0,sidebarWidthRef:P0,readStoredNumber:h0})},[W0,z0,Z0,h0,s,P0]),{toggleWorkspace:g0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:c0,closeRenameCurrentBranchForm:s0,handleRenameCurrentBranch:f0,handlePruneCurrentBranch:i0,handlePurgeArchivedBranch:b0,handleRestoreBranch:t0,handleCreateSessionFromCompose:o0,handleCreateRootSessionFromCompose:F_,handlePopOutPane:Z_,handlePopOutChat:v0}}k0();function Z4(_){return _.status==="fulfilled"?_.value:null}function b8(_){return Math.max(0,Math.min(100,_))}function GN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((H)=>H?.data?.is_bot_message).length,Z=$.filter((H)=>!H?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,V=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,Q=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,K=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,L=_.modelsPayload?.current??_.activeModel??null,N=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:L,thinkingLevel:N,supportsThinking:Boolean(B)},context:{tokens:Q,contextWindow:K,percent:V},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:b8(Math.round(V))},{key:"queue",label:"Queue",value:b8(X*18)},{key:"activeChats",label:"Active chats",value:b8(Y*12)},{key:"posts",label:"Timeline load",value:b8($.length*5)}]}}function ZN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function XN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function YN(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function qN(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function VN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function QN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function LN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:V,getChatBranches:Q,getTimeline:K,rawPosts:L,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:H,activeThinkingLevel:D,supportsThinking:k,isAgentTurnActive:z}=_,[O,I,x,A,M,W,y]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),V(),Q(G),K(20,null,j)]);return GN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:Z4(O),contextPayload:Z4(I),queuePayload:Z4(x),modelsPayload:Z4(A),activeChatsPayload:Z4(M),branchesPayload:Z4(W),timelinePayload:Z4(y),rawPosts:L,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:H,activeThinkingLevel:D,supportsThinking:k,isAgentTurnActive:z})}function KN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:V}=_,Q=S5(j.current,$);if(!Q)return;let{rowId:K}=Q;G.current.add(K),Y((L)=>j4(L,K).items),V(K,Dj(Z)).then(()=>{X()}).catch((L)=>{console.warn("[queue] Failed to steer queued item:",L);let N=wj("steer");q(N.title,N.detail,"warning"),G.current.delete(K),X()})}function BN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:V,removeAgentQueueItem:Q}=_,K=S5(j.current,$);if(!K)return;let{rowId:L}=K;G.current.add(L),V?.(K.remainingQueueCount),Y((N)=>j4(N,L).items),Q(L,Dj(Z)).then(()=>{X()}).catch((N)=>{console.warn("[queue] Failed to remove queued item:",N);let B=wj("remove");q(B.title,B.detail,"warning"),G.current.delete(L),X()})}function NN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=N1($);if(Z)j.current.delete(Z);G(GB($,new Date().toISOString()))}function FN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=ZB(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function UN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:V,sendAgentMessage:Q,buildFloatingWidgetDashboardSnapshot:K}=_,L=typeof $?.kind==="string"?$.kind:"",N=N1(j);if(!L||!N)return;if(L==="widget.close"){Y();return}if(L==="widget.submit"){let B=tq($?.payload),U=eq($?.payload),E=new Date().toISOString();if(X((H)=>qB(H,N,{kind:L,payload:$?.payload||null,submittedAt:E,submissionText:B})),!B){if(V("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let H=await Q("default",B,null,[],Z?"queue":null,G);q(H),X((k)=>Tj(k,N,{submittedAt:E,submissionText:B,queued:H?.queued||null}));let D=ZN(H?.queued);if(V(D.title,D.detail,D.kind,D.durationMs),U)Y()}catch(H){X((k)=>Tj(k,N,{submittedAt:E,submissionText:B,errorMessage:H?.message||"Could not send the widget message."}));let D=XN(H?.message);V(D.title,D.detail,D.kind,D.durationMs)}})();return}if(L==="widget.ready"||L==="widget.request_refresh"){let B=new Date().toISOString(),U=YN($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>VB(E,N,{kind:L,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),L==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await K($?.payload||null);X((D)=>QB(D,N,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let H=qN();V(H.title,H.detail,H.kind,H.durationMs)}catch(E){X((D)=>LB(D,N,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let H=VN(E?.message);V(H.title,H.detail,H.kind,H.durationMs)}})();else{let E=QN();V(E.title,E.detail,E.kind,E.durationMs)}}}function yM(_,$=KN){$(_)}function TM(_,$=BN){$(_)}function wM(_,$,j=eK){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function DN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:V,removeAgentQueueItem:Q,refreshActiveChatAgents:K,refreshCurrentChatBranches:L,refreshContextUsage:N,refreshAutoresearchStatus:B}=_,U=R((k)=>{yM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:V,removeAgentQueueItem:Q})},[$,G,j,Z,Q,X,Y,V]),E=R((k)=>{TM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:V,removeAgentQueueItem:Q})},[q,$,G,j,Z,Q,X,Y,V]),H=R(async(k,z)=>{X((O)=>{if(!Array.isArray(O)||k<0||z<0||k>=O.length||z>=O.length||k===z)return O;let I=[...O],[x]=I.splice(k,1);return I.splice(z,0,x),I});try{let{reorderAgentQueueItem:O}=await Promise.resolve().then(() => (w_(),N6));await O(k,z,$)}catch(O){console.warn("Failed to persist queue reorder:",O),Z()}},[$,Z,X]),D=R((k)=>{wM(k,{refreshActiveChatAgents:K,refreshCurrentChatBranches:L,refreshContextUsage:N,refreshAutoresearchStatus:B,refreshQueueState:Z})},[K,B,N,L,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:H,handleMessageResponse:D}}k0();function HN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function EN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,V=String($||"").trim();if(!V)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let Q=new AbortController;Y.current=Q,q({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let K=await G(V,{signal:Q.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(L)=>{if(L==="side_prompt_start")q((N)=>N?{...N,status:"running"}:N)},onThinkingDelta:(L)=>{q((N)=>N?{...N,thinking:`${N.thinking||""}${L||""}`}:N)},onTextDelta:(L)=>{q((N)=>N?{...N,answer:`${N.answer||""}${L||""}`}:N)}});if(Y.current!==Q)return!0;q((L)=>L?{...L,answer:K?.result||L.answer||"",thinking:K?.thinking||L.thinking||"",model:K?.model||null,status:"success",error:null}:L)}catch(K){if(Q.signal.aborted)return!0;q((L)=>L?{...L,status:"error",error:K?.payload?.error||K?.message||"BTW request failed."}:L)}finally{if(Y.current===Q)Y.current=null}return!0}async function WN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function ON(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,V=j($);if(!V)return!1;try{let Q=await X("default",V,null,[],G?"queue":null,Z);return Y(Q),q(Q?.queued==="followup"?"BTW queued":"BTW injected",Q?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(Q){return q("BTW inject failed",Q?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function xM(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function IM(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function zN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:V,streamSidePrompt:Q,btwAbortRef:K,btwSession:L,setBtwSession:N,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:H,getAgentStatus:D,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:W,currentChatBranches:y,contextUsage:w,followupQueueItemsRef:J,activeModel:C,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c}=_,p=R(async(V0,Q0)=>{let z0=typeof V0?.key==="string"?V0.key:"",s=typeof Q0?.key==="string"?Q0.key:"",Z0=kj(z0,s);if(!z0||!s)return;X((W0)=>zK(W0,z0,s));try{let W0=await AK({panel:V0,action:Q0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:V,writeClipboard:async(P0)=>{if(!await xM(P0))throw Error("Clipboard access is unavailable.")}});if(W0.refreshAutoresearchStatus)Y();if(W0.toast)Z(W0.toast.title,W0.toast.detail,W0.toast.kind,W0.toast.durationMs)}catch(W0){Z("Panel action failed",W0?.message||"Could not complete that action.","warning")}finally{X((W0)=>JK(W0,Z0))}},[$,V,Y,X,Z,q]),e=R(()=>{HN({btwAbortRef:K,setBtwSession:N})},[K,N]),m=R(async(V0)=>{return await EN({question:V0,currentChatJid:$,streamSidePrompt:Q,resolveBtwChatJid:mq,showIntentToast:Z,btwAbortRef:K,setBtwSession:N})},[K,$,N,Z,Q]),_0=R(async({content:V0})=>{return await WN({content:V0,parseBtwCommand:vq,closeBtwPanel:e,runBtwPrompt:m,showIntentToast:Z})},[e,m,Z]),E0=R(()=>{if(L?.question)m(L.question)},[L,m]),G0=R(async()=>{await ON({btwSession:L,buildBtwInjectionText:lq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[L,$,U,G,B,Z]),$0=R(async(V0=null)=>{return LN({requestPayload:V0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:D,getAgentContext:k,getAgentQueueState:z,getAgentModels:O,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:W,currentChatBranches:y,contextUsage:w,followupQueueItems:J.current,activeModel:C,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:c})},[W,C,f,w,y,$,j,J,I,k,O,z,D,x,A,c,M,b]),X0=R((V0)=>{NN({widget:V0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[E,H]),U0=R(()=>{FN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[E,H]),t=R((V0,Q0)=>{UN({event:V0,widget:Q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:H,handleCloseFloatingWidget:U0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:$0})},[$0,$,U0,U,G,B,H,Z]);return u(()=>{IM({dismissedLiveWidgetKeysRef:E,setFloatingWidget:H})},[$,E,H]),{handleExtensionPanelAction:p,closeBtwPanel:e,handleBtwIntercept:_0,handleBtwRetry:E0,handleBtwInject:G0,handleOpenFloatingWidget:X0,handleCloseFloatingWidget:U0,handleFloatingWidgetEvent:t}}k0();function CM(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function PM(_){return!_}function JN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:V}=_;u(()=>{if(!CM({hasDockPanes:$,chatOnlyMode:j}))return;return RB(G)},[j,$,G]),u(()=>{if(!PM(j))return;return SB({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof q!=="function"&&typeof V!=="function")return;return uB({previousChat:q,nextChat:V})},[V,q]),u(()=>bB(),[]),u(()=>gB(),[])}function fM(_){return Boolean(_&&typeof _.closest==="function")}function AN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function RM(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function SM(){return{lastTriggeredAt:0,accumX:0}}function Cj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var uM=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),gM=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function kN(_){if(!_||!fM(_))return!1;let $=_.closest(uM);if(!$)return!0;return Boolean($.closest(gM))}function yN(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Pj(_){let $=yN(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function MN(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function bM(_){let $=yN(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:MN(_.candidates,G)},next:{chatJid:Z,name:MN(_.candidates,Z)}}}function vM(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function mM(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function cM(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,V=q?G.next:G.prev,Q=_.querySelector(".chat-swipe-chevron");if(Q)Q.textContent=q?"›":"‹",Q.style.order=q?"2":"0";let K=_.querySelector(".chat-swipe-name");if(K)K.textContent=V?.name??""}function u6(_){_.style.display="none",_.style.opacity="0"}function TN(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let V=X(),Q=typeof Y==="function"?Y():!1;if(!V&&!Q)return()=>{};let K=RM(),L=SM(),N=null,B={prev:null,next:null},U=!1;function E(){B=bM({candidates:j,currentChatJid:G})}E();function H(){if(!N)N=mM(q);return N}function D(M){let W=M==="next"?B.next:B.prev;if(W)Z(W.chatJid)}function k(M){U=String(M.pointerType||"").toLowerCase()==="pen"}function z(M){if(Cj(K),E(),!V)return;if(M.touches.length!==1)return;if(U)return;if(AN())return;if(!kN(M.target))return;let W=M.touches[0];K.active=!0,K.startX=W.clientX,K.startY=W.clientY,K.lastX=W.clientX,K.lastY=W.clientY,K.startedAt=Date.now()}function O(M){if(!K.active||K.cancelled)return;if(AN()){K.cancelled=!0,u6(H());return}let W=M.touches[0];if(!W)return;K.lastX=W.clientX,K.lastY=W.clientY;let y=K.lastX-K.startX,w=K.lastY-K.startY;if(!K.horizontalLocked){if(Math.abs(w)>16&&Math.abs(w)>=Math.abs(y)){K.cancelled=!0,u6(H());return}if(Math.abs(y)>12&&Math.abs(y)>Math.abs(w)*1.15)K.horizontalLocked=!0}if(K.horizontalLocked){if(M.cancelable)M.preventDefault();cM(H(),y,q.clientWidth,B)}}function I(){if(!K.active)return;let M=K.lastX-K.startX,W=K.lastY-K.startY,y=!K.cancelled&&vM({dx:M,dy:W});if(u6(H()),Cj(K),y)D(M<0?"next":"prev")}function x(){u6(H()),Cj(K)}function A(M){if(V)return;if(!Q)return;if(!kN(M.target))return;let{deltaX:W,deltaY:y}=M;if(!Number.isFinite(W)||Math.abs(W)<72)return;if(Math.abs(W)<=Math.abs(y)*1.35)return;if(M.cancelable)M.preventDefault();let w=Date.now();if(w-L.lastTriggeredAt<450)return;L.lastTriggeredAt=w,D(W>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",z,{passive:!0}),q.addEventListener("touchmove",O,{passive:!1}),q.addEventListener("touchend",I,{passive:!0}),q.addEventListener("touchcancel",x,{passive:!0}),q.addEventListener("wheel",A,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",z),q.removeEventListener("touchmove",O),q.removeEventListener("touchend",I),q.removeEventListener("touchcancel",x),q.removeEventListener("wheel",A),N)u6(N),N.remove(),N=null}}function hM(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function lM(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function pM(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function rM(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Pj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Pj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function wN(_){let $=DN(hM(_)),j=zN(lM({..._,handleMessageResponse:$.handleMessageResponse})),G=jN(pM(_));return JN(rM({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function nM(_,$){return Boolean(_||$!==null)}function dM(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function iM(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:V,setters:Q,services:K,helpers:L}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,getAgentQueueState:K.getAgentQueueState,setFollowupQueueItems:Q.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:K.getAgentContext,setContextUsage:Q.setContextUsage,getAutoresearchStatus:K.getAutoresearchStatus,setExtensionStatusPanels:Q.setExtensionStatusPanels,setPendingExtensionPanelActions:Q.setPendingExtensionPanelActions,setExtensionWorkingState:Q.setExtensionWorkingState,getAgentStatus:K.getAgentStatus,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:V.agentStatusRef,pendingRequestRef:V.pendingRequestRef,thoughtBufferRef:V.thoughtBufferRef,draftBufferRef:V.draftBufferRef,previewResyncPendingRef:V.previewResyncPendingRef,previewResyncGenerationRef:V.previewResyncGenerationRef,setAgentStatus:Q.setAgentStatus,setAgentDraft:Q.setAgentDraft,setAgentPlan:Q.setAgentPlan,setAgentThought:Q.setAgentThought,setPendingRequest:Q.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:V.isAgentRunningRef,currentTurnIdRef:V.currentTurnIdRef,silentRecoveryRef:V.silentRecoveryRef,silenceRefreshMs:K.silenceRefreshMs,lastAgentEventRef:V.lastAgentEventRef,lastSilenceNoticeRef:V.lastSilenceNoticeRef,silenceWarningMs:K.silenceWarningMs,silenceFinalizeMs:K.silenceFinalizeMs,isCompactionStatus:K.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:K.currentAppAssetVersion,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,tabStoreHasUnsaved:K.tabStoreHasUnsaved,isAgentRunningRef:V.isAgentRunningRef,pendingRequestRef:V.pendingRequestRef,showIntentToast:$},setConnectionStatus:Q.setConnectionStatus,setStateAccessFailed:Q.setStateAccessFailed,hasConnectedOnceRef:V.hasConnectedOnceRef,getAgents:K.getAgents,setAgents:Q.setAgents,setUserProfile:Q.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:L.readStoredNumber,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,setActiveChatAgents:Q.setActiveChatAgents,setCurrentChatBranches:Q.setCurrentChatBranches,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setAgentModelsPayload:Q.setAgentModelsPayload,setHasLoadedAgentModels:Q.setHasLoadedAgentModels,agentsRef:V.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:K.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:Q.setFloatingWidget,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:V.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:Q.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{Q.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:K.agentStatus,thoughtExpandedRef:V.thoughtExpandedRef,draftExpandedRef:V.draftExpandedRef,steerQueuedTurnIdRef:V.steerQueuedTurnIdRef}}function xN(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:V,services:Q,helpers:K}=_,L=X.composeReferenceActions.showIntentToast,N=HK({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:Q.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:V.setRemovingPostIds,deletePost:Q.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=MB(iM(_,L)),U=nM(Q.isAgentTurnActive,Q.agentStatus),E=wN({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:V.setFollowupQueueItems,showIntentToast:L,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:Q.steerAgentQueueItem,removeAgentQueueItem:Q.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,stopAutoresearch:Q.stopAutoresearch,dismissAutoresearch:Q.dismissAutoresearch,streamSidePrompt:Q.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:V.setBtwSession,sendAgentMessage:Q.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:V.setFloatingWidget,getAgentStatus:Q.getAgentStatus,getAgentContext:Q.getAgentContext,getAgentQueueState:Q.getAgentQueueState,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,getTimeline:Q.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:Q.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:K.getFormLock,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch,renameChatBranch:Q.renameChatBranch,pruneChatBranch:Q.pruneChatBranch,purgeChatBranch:Q.purgeChatBranch,restoreChatBranch:Q.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:Q.forkChatBranch,createRootChatSession:Q.createRootChatSession,setBranchLoaderState:V.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,openEditor:Q.openEditor,tabStripActiveId:Q.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:Q.terminalTabPath,tabPaneOverrides:Q.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:Q.resolveTab,closeTab:Q.closeTab,setDockVisible:Y.setDockVisible,editorOpen:Q.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:K.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return dM({agentStatusLifecycleBundle:B,actionBundle:E,timelineViewActions:N,isComposeBoxAgentActive:U})}k0();w_();k0();function IN(_){try{return _?.focus?.(),!0}catch($){return!1}}function g6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function fj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function CN(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function PN(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function X4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=g6($,"piclaw.notifications.deviceId");if(j)return j;let G=PN("device");return fj($,"piclaw.notifications.deviceId",G),g6($,"piclaw.notifications.deviceId")||G}function b6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=g6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=PN("client");if(fj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=g6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function fN(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Rj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():b6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),Q=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:Q,hasFocus:q,updatedAtMs:Y}}function RN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return fj(j,fN(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function SN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return CN(j,fN(G,Z)),!0}function oM(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():X4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],V=[];for(let Q=0;Q<j.length;Q+=1){let K=j.key(Q);if(!K||!K.startsWith(Y))continue;let L=g6(j,K);if(!L){V.push(K);continue}try{let N=JSON.parse(L),B=Number(N?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){V.push(K);continue}let U=typeof N?.chatJid==="string"?N.chatJid.trim():"",E=typeof N?.clientId==="string"?N.clientId.trim():"";if(!U||!E){V.push(K);continue}q.push({deviceId:G,clientId:E,chatJid:U,visibilityState:N?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(N?.hasFocus),updatedAtMs:B})}catch{V.push(K)}}return V.forEach((Q)=>CN(j,Q)),q.sort((Q,K)=>Q.clientId.localeCompare(K.clientId))}function uN(_={}){let $=Rj(_),j=$.chatJid;if(!j)return!1;let G=oM({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function sM(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function aM(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=sM(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function tM(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function v8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function bN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function eM(_){let $=await bN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await E7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:tM(Z)})}async function gN(_,$){if(!v8(_))return!1;let j=await eM(_);return await W7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function _y(_,$){if(!v8(_))return!1;let G=await(await bN(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await O7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function $y(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function jy(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function vN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=P(!1),[Z,X]=P("default"),Y=g(!1),q=g(null),V=g(null);u(()=>{let B=U$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")q.current=X4(window),V.current=b6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&v8(window))gN(window,q.current||X4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let B=q.current||X4(window),U=V.current||b6(window);q.current=B,V.current=U;let E=(z=!0,O="fetch")=>{let I=Rj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(z)RN(I,window);else SN({deviceId:B,clientId:U},window);let x={device_id:B,client_id:U,chat_jid:$,visibility_state:I.visibilityState,has_focus:I.hasFocus,active:z};if(!z&&O==="beacon"&&jy(x,window))return;$y(x,{runtimeWindow:window,keepalive:!z||O==="keepalive"})},H=()=>E(!0),D=()=>E(!1,"beacon");E(!0);let k=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",H),window.addEventListener("focus",H),window.addEventListener("blur",H),window.addEventListener("pageshow",H),window.addEventListener("pagehide",D),window.addEventListener("beforeunload",D),()=>{clearInterval(k),document.removeEventListener("visibilitychange",H),window.removeEventListener("focus",H),window.removeEventListener("blur",H),window.removeEventListener("pageshow",H),window.removeEventListener("pagehide",D),window.removeEventListener("beforeunload",D),E(!1,"beacon")}},[$]);let Q=R(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),K=R(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await Q();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),V_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),V_("notificationsEnabled",String(B));let U=q.current||X4(window);if(q.current=U,v8(window))try{if(B)await gN(window,U);else await _y(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[Q]),L=R((B,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let H=new Notification(aM(B,E?.sourceLabel||"",window),{body:U});return H.onclick=()=>{IN(window)},!0}catch(H){return console.debug("[use-notifications] Local notification creation failed.",H,{title:typeof B==="string"?B:null}),!1}},[]),N=R((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return uN({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||X4(window),clientId:V.current||b6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:K,notify:L,shouldNotifyLocallyForChat:N}}function Gy(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function Zy(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function Xy(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function mN(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=P("disconnected"),[X,Y]=P(!1),[q,V]=P(()=>R1()),[Q,K]=P(null),[L,N]=P(null),[B,U]=P(!1),[E,H]=P("current"),[D,k]=P([]),[z,O]=P([]),[I,x]=P([]),[A,M]=P(null),[W,y]=P({}),[w,J]=P(null),[C,f]=P(null),[b,c]=P(!1),[p,e]=P(null),[m,_0]=P(null),[E0,G0]=P(!1),[$0,X0]=P([]),[U0,t]=P([]),[V0,Q0]=P(null),[z0,s]=P(()=>new Map),[Z0,W0]=P(()=>new Set),[P0,h0]=P(()=>({message:null,indicator:null,visible:!0})),[g0,G_]=P([]),[c0,s0]=P(!1),[f0,i0]=P(()=>XL()),[b0,t0]=P(null),[o0,F_]=P(null),Z_=g(new Set),v0=Y0(()=>Gy({activeChatAgents:$0,currentChatBranches:U0,currentChatJid:$}),[$0,U0,$]),O0=Y0(()=>Xy($,v0),[v0,$]),q_=ZL(E),[d0,H_]=P(()=>Zy(j)),D0=g0.length,u0=g(new Set),I0=g([]),r0=g(new Set),z_=g(0),Q_=g({inFlight:!1,lastAttemptAt:0,turnId:null});u0.current=new Set(g0.map((b1)=>b1.row_id)),I0.current=g0;let{notificationsEnabled:U_,notificationPermission:N_,toggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:P_}=vN({chatJid:$}),[E_,o_]=P(()=>new Set),[f_,q0]=P(()=>kL({allowLegacyFallback:!0,defaultValue:!1})),[v,r]=P({name:"You",avatar_url:null,avatar_background:null}),o=g(null),j0=g(!1),N0=g(!1),y0=g(!1),A0=g(null),M0=g($),T0=g(new Map),m0=g($),S0=g(0),n0=g(0),e0=g({}),x0=g({name:null,avatar_url:null}),w0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),D_=g(null),__=g(null),n=g(0),B0=g(0),l0=g(0),j_=g(null),R_=g(null),F1=g(null),g_=g(null),J1=g(0),I_=g({title:null,avatarBase:null}),k_=g(null),A1=g(!1),[W_,A_]=P(!1),U1=g(0),[m_,r_]=P(!1),[s_,B_]=P(""),x1=Y0(()=>e2(s_,v0?.agent_name||""),[v0?.agent_name,s_]),D1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:q,setIsWebAppMode:V,currentHashtag:Q,setCurrentHashtag:K,searchQuery:L,setSearchQuery:N,searchOpen:B,setSearchOpen:U,searchScope:E,setSearchScope:H,fileRefs:D,setFileRefs:k,folderRefs:z,setFolderRefs:O,messageRefs:I,setMessageRefs:x,intentToast:A,setIntentToast:M,agents:W,setAgents:y,activeModel:w,setActiveModel:J,activeThinkingLevel:C,setActiveThinkingLevel:f,supportsThinking:b,setSupportsThinking:c,activeModelUsage:p,setActiveModelUsage:e,agentModelsPayload:m,setAgentModelsPayload:_0,hasLoadedAgentModels:E0,setHasLoadedAgentModels:G0,activeChatAgents:$0,setActiveChatAgents:X0,currentChatBranches:U0,setCurrentChatBranches:t,contextUsage:V0,setContextUsage:Q0,extensionStatusPanels:z0,setExtensionStatusPanels:s,pendingExtensionPanelActions:Z0,setPendingExtensionPanelActions:W0,extensionWorkingState:P0,setExtensionWorkingState:h0,followupQueueItems:g0,setFollowupQueueItems:G_,isAgentTurnActive:c0,setIsAgentTurnActive:s0,btwSession:f0,setBtwSession:i0,floatingWidget:b0,setFloatingWidget:t0,attachmentPreview:o0,setAttachmentPreview:F_,dismissedLiveWidgetKeysRef:Z_,currentBranchRecord:v0,currentRootChatJid:O0,activeSearchScopeLabel:q_,branchLoaderState:d0,setBranchLoaderState:H_,followupQueueCount:D0,followupQueueRowIdsRef:u0,followupQueueItemsRef:I0,dismissedQueueRowIdsRef:r0,queueRefreshGenRef:z_,silentRecoveryRef:Q_,notificationsEnabled:U_,notificationPermission:N_,handleToggleNotifications:J_,notify:x_,shouldNotifyLocallyForChat:P_,removingPostIds:E_,setRemovingPostIds:o_,workspaceOpen:f_,setWorkspaceOpen:q0,userProfile:v,setUserProfile:r,staleUiVersionRef:o,staleUiReloadScheduledRef:j0,hasConnectedOnceRef:N0,wasAgentActiveRef:y0,agentStatusRef:A0,activeChatJidRef:M0,chatPaneStateByChatRef:T0,paneStateOwnerChatJidRef:m0,draftThrottleRef:S0,thoughtThrottleRef:n0,agentsRef:e0,userProfileRef:x0,viewStateRef:w0,timelineRef:D_,appShellRef:__,sidebarWidthRef:n,editorWidthRef:B0,dockHeightRef:l0,lastNotifiedIdRef:j_,lastAgentResponseRef:R_,btwAbortRef:F1,lastActivityTimerRef:g_,lastActivityTokenRef:J1,brandingRef:I_,intentToastTimerRef:k_,renameBranchInFlightRef:A1,isRenamingBranch:W_,setIsRenamingBranch:A_,renameBranchLockUntilRef:U1,isRenameBranchFormOpen:m_,setIsRenameBranchFormOpen:r_,renameBranchNameDraft:s_,setRenameBranchNameDraft:B_,renameBranchDraftState:x1,renameBranchNameInputRef:D1}}k0();k0();function Yy(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.set(V,q)}return Z?X:_}function cN(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function hN({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=P(()=>$_.getTabs()),[Z,X]=P(()=>$_.getActiveId()),[Y,q]=P(()=>$_.getTabs().length>0);u(()=>{return $_.onChange((J,C)=>{G(J),X(C),q(J.length>0)})},[]);let[V,Q]=P(()=>new Set),[K,L]=P(()=>new Set),[N,B]=P(()=>new Map),U=R((J)=>{Q((C)=>{let f=new Set(C);if(f.has(J))f.delete(J);else f.add(J);return f})},[]),E=R((J)=>{Q((C)=>{if(!C.has(J))return C;let f=new Set(C);return f.delete(J),f})},[]),H=R((J)=>{L((C)=>{if(!C.has(J))return C;let f=new Set(C);return f.delete(J),f})},[]),D=R((J)=>{B((C)=>{if(!C.has(J))return C;let f=new Map(C);return f.delete(J),f})},[]),k=R((J,C={})=>{if(!J)return;let f=typeof C?.paneOverrideId==="string"&&C.paneOverrideId.trim()?C.paneOverrideId.trim():null,b={path:J,mode:"edit"};try{if(!(f?Y_.get(f):Y_.resolve(b))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(m){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,m)}let c=typeof C?.label==="string"&&C.label.trim()?C.label.trim():void 0,p=C?.viewState&&typeof C.viewState==="object"?C.viewState:null,e=C?.diffMode==="saved"?"saved":null;if($_.open(J,c),p)$_.saveViewState(J,p);if(f)B((m)=>{if(m.get(J)===f)return m;let _0=new Map(m);return _0.set(J,f),_0});if(e==="saved")L((m)=>{if(m.has(J))return m;let _0=new Set(m);return _0.add(J),_0})},[]),z=R(()=>{let J=$_.getActiveId();if(J){let C=$_.get(J);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}$_.close(J),E(J),H(J),D(J),$.current?.(J)}},[H,D,E]),O=R((J)=>{let C=$_.get(J);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}$_.close(J),E(J),H(J),D(J),$.current?.(J)},[H,D,E]),I=R((J)=>{$_.activate(J)},[]),x=R((J)=>{let C=$_.getTabs().filter((c)=>c.id!==J&&!c.pinned),f=C.filter((c)=>c.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let b=C.map((c)=>c.id);$_.closeOthers(J),b.forEach((c)=>{E(c),H(c),D(c),$.current?.(c)})},[H,D,E]),A=R(()=>{let J=$_.getTabs().filter((b)=>!b.pinned),C=J.filter((b)=>b.dirty).length;if(C>0){if(!window.confirm(`${C} unsaved tab${C>1?"s":""} will be closed. Continue?`))return}let f=J.map((b)=>b.id);$_.closeAll(),f.forEach((b)=>{E(b),H(b),D(b),$.current?.(b)})},[H,D,E]),M=R((J)=>{$_.togglePin(J)},[]),W=R((J)=>{if(!J)return;L((C)=>{let f=new Set(C);if(f.has(J))f.delete(J);else f.add(J);return f}),$_.activate(J)},[]),y=R((J)=>{if(!J)return;B((C)=>{if(C.get(J)==="editor")return C;let f=new Map(C);return f.set(J,"editor"),f}),$_.activate(J)},[]),w=R(()=>{let J=$_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return u(()=>{let J=(C)=>{let{oldPath:f,newPath:b,type:c}=C.detail||{};if(!f||!b)return;if(c==="dir"){for(let p of $_.getTabs())if(p.path===f||p.path.startsWith(`${f}/`)){let e=`${b}${p.path.slice(f.length)}`;$_.rename(p.id,e)}}else $_.rename(f,b);Q((p)=>cN(p,f,b,c)),L((p)=>cN(p,f,b,c)),B((p)=>Yy(p,f,b,c))};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),u(()=>{let J=(C)=>{if($_.hasUnsaved())C.preventDefault(),C.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:V,diffTabs:K,tabPaneOverrides:N,openEditor:k,closeEditor:z,handleTabClose:O,handleTabActivate:I,handleTabCloseOthers:x,handleTabCloseAll:A,handleTabTogglePin:M,handleTabTogglePreview:U,handleTabToggleDiff:W,handleTabEditSource:y,revealInExplorer:w}}k0();function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function qy(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function m4(_="pane"){let $=qy();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function lN(_){let $=t1(_?.paneInstanceId),j=t1(_?.paneWindowId);if(!$||!j)return{};let G=t1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function pN(_={}){let $=new URLSearchParams(_.search||"");return{panePath:t1($.get("pane_path"))||t1(_.panePath),paneLabel:t1($.get("pane_label"))||t1(_.paneLabel),paneInstanceId:t1($.get("pane_instance_id")),paneWindowId:t1($.get("pane_window_id")),paneSourceWindowId:t1($.get("pane_source_window_id"))}}function c4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function e1(_){return typeof _==="string"&&_.trim()?_.trim():null}function rN(_){let $=e1(_?.panePath),j=e1(_?.paneInstanceId),G=e1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=e1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:e1(_?.label),sourceWindowId:e1(_?.sourceWindowId)}}function Sj(_,$){if(!_||!$)return!1;return e1($.panePath)===_.panePath&&e1($.paneInstanceId)===_.paneInstanceId&&e1($.paneWindowId)===_.ownerWindowId}function uj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:e1($)||new Date().toISOString(),label:_.label||null}}function m8(_){try{return _?.close?.(),!0}catch($){return!1}}function gj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Vy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function nN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var Qy=400;function Ly(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Ky(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Ly(j).some((Z)=>Z==="."||Z===_)})}async function dN(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function By(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function l8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function iN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function c8(_){if(!iN(_))return!1;return l8(_?.runtimeNavigator)}function h8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return l8(_?.runtimeNavigator)}function g5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Ny(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,V=_?.instance||null,Q=typeof V?.exportHostTransferState==="function"?V.exportHostTransferState():null,K=$===Y,L=Q&&!K?g8({path:$,payload:Q},j,G):null,N=null;if($!==Y){let B=Q&&typeof Q==="object"?typeof Q.mtime==="string"?Q.mtime:Q.mtime===null?null:void 0:void 0,U=typeof V?.isDirty==="function"?V.isDirty():!1,E=typeof V?.getContent==="function"?V.getContent():void 0;N=Y2({path:$,content:U?E:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...N?.editor_popout?{editorPopoutToken:N.editor_popout}:{},...L?.pane_transfer?{paneTransferToken:L.pane_transfer}:{},...K&&Q?{paneTransferPayload:Q}:{},...q?{}:{allowLiveTransfer:!1}}}function Fy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,V=X?O3(X,j,G):null,Q=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?xj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:V?.path===$?V:null,hostTransfer:Q?.path===$?Q:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function oN(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:V,diffTabs:Q,tabPaneOverrides:K,terminalTabPath:L,vncTabPrefix:N,openEditor:B,closeEditor:U,getWorkspaceFile:E}=_,H=g(null),D=g(null),k=g(null),z=g(null),O=g((()=>{if(!$)return null;let q0=Z5("editor_popout");return O3(q0)})()),I=g((()=>{if(!$)return null;return IB()})()),x=g(pN({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=g(x.current.paneWindowId||m4("pane-window")),M=g(new Map),W=g(new Map),y=g(new Map),w=g(new Map),J=g(!1),C=g(new Map),f=g(m4("pane-instance")),b=g(new Map),c=g(new Map),p=g(new Set),[e,m]=P(()=>new Map),_0=g(e);_0.current=e;let[E0,G0]=P(()=>new Map),$0=g(E0);$0.current=E0;let[X0,U0]=P(null),t=g(X0);t.current=X0;let[V0,Q0]=P(null),z0=g(V0);z0.current=V0;let s=Y_.getDockPanes().length>0,[Z0,W0]=P(!1),P0=R(()=>W0((q0)=>!q0),[]),h0=R(()=>{B(L,{label:"Terminal"})},[B,L]),g0=R(()=>{B(N,{label:"VNC"})},[B,N]),G_=R((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return m4("pane-instance");if(v===L&&!$_.get(v)){if(!f.current)f.current=m4("pane-instance");return f.current}let o=C.current.get(v);if(o)return o;let j0=m4("pane-instance");return C.current.set(v,j0),j0},[L]),c0=Y0(()=>!$&&q?E0.get(q)||null:null,[E0,$,q]),s0=!$?V0:null,f0=R((q0)=>{if(!q0)return;CB(q0),c.current.delete(q0),p.current.delete(q0),U0((v)=>v?.panePath===q0?null:v),m((v)=>{if(!v.has(q0))return v;let r=new Map(v);return r.delete(q0),r})},[]),i0=R((q0)=>{if(!q0)return;b.current.delete(q0),c.current.delete(q0),p.current.delete(q0),f0(q0),Q0((v)=>v?.panePath===q0?null:v),G0((v)=>{if(!v.has(q0))return v;let r=new Map(v);return r.delete(q0),r})},[f0]),b0=R((q0,v={})=>{let r=typeof q0==="string"?q0.trim():"";if(!r)return!1;if(h8({panePath:r,terminalTabPath:L}))return!1;let o=b.current.get(r),j0=Boolean($0.current.get(r)),N0=Boolean(z0.current?.panePath===r);if(i0(r),r===L&&N0&&!j0)W0(!0);else if(r===L&&j0)B(r,{label:"Terminal"});else if($_.get(r))$_.activate(r);else B(r);if(v.closeDetachedWindow!==!1&&o&&typeof o.close==="function")m8(o);return!0},[i0,B,W0,L]),t0=R(()=>{if($)return;if(!By())return;let q0=Date.now();for(let[v,r]of c.current.entries()){if(r>q0)continue;c.current.delete(v),b0(v,{closeDetachedWindow:!1})}},[$,b0]),o0=R((q0,v={})=>{let r=typeof q0==="string"?q0.trim():"";if(!r)return!1;let o={panePath:r,terminalTabPath:L,allowLiveTransfer:v.allowLiveTransfer,reason:v.reason};if(c8(o))return b.current.delete(r),c.current.delete(r),p.current.add(r),!0;if(!iN(o))return b0(r,{closeDetachedWindow:!1});return c.current.set(r,Date.now()+Qy),t0(),!0},[t0,b0,L]),F_=R((q0)=>{let v=typeof q0==="string"?q0.trim():"";if(!v)return null;let r=G_(v),o=m4("pane-window");return{paneInstanceId:r,paneWindowId:o,params:lN({paneInstanceId:r,paneWindowId:o,paneSourceWindowId:A.current})}},[G_]),Z_=R((q0,v,r,o)=>{let j0=typeof q0==="string"?q0.trim():"";if(!j0||!o)return;let N0=rN({panePath:j0,paneInstanceId:o.pane_instance_id,ownerWindowId:o.pane_window_id,sourceWindowId:o.pane_source_window_id,label:v});if(!N0)return;if(b.current.set(j0,r||null),j0===L&&!$_.get(j0)){U0(N0);return}m((A0)=>{let M0=new Map(A0);return M0.set(j0,N0),M0})},[L]),v0=R((q0,v)=>{let r=typeof q0?.panePath==="string"?q0.panePath.trim():"";if(!r)return!1;let o=b.current.get(r);if(o&&v&&o!==v)return!1;let j0=_0.current.get(r)||null;if(Sj(j0,q0)){let T0=D.current,m0=g5({panePath:r,terminalTabPath:L});if(m0&&T0&&typeof T0.moveHost==="function")u5({panePath:r,paneInstanceId:j0.paneInstanceId,paneWindowId:j0.ownerWindowId,instance:T0,releaseSourceHost:()=>{if(D.current===T0)D.current=null}});if(m0&&D.current)D.current=null;let S0=uj(j0);if(!S0)return!1;return m((n0)=>{if(!n0.has(r))return n0;let e0=new Map(n0);return e0.delete(r),e0}),G0((n0)=>{let e0=new Map(n0);return e0.set(r,S0),e0}),nN({panePath:r,terminalTabPath:L,closeTab:(n0)=>$_.close(n0),sourceHost:"tab"}),!0}if(r!==L)return!1;let N0=t.current,y0=z.current,A0=g5({panePath:r,terminalTabPath:L});if(A0&&N0&&y0&&typeof y0.moveHost==="function")u5({panePath:r,paneInstanceId:N0.paneInstanceId,paneWindowId:N0.ownerWindowId,instance:y0,releaseSourceHost:()=>{if(z.current===y0)z.current=null}});if(A0&&z.current)z.current=null;if(!Sj(N0,q0))return!1;let M0=uj(N0);if(!M0)return!1;return U0(null),Q0(M0),nN({panePath:r,terminalTabPath:L,setDockVisible:W0,sourceHost:"dock"}),!0},[W0,L]),O0=R((q0=!1,v=!0)=>{if(!$)return!1;let r=x.current;if(!c4(r))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(J.current){if(q0)m8(window);return!0}let o=r.panePath||j,j0=o===L?z.current||D.current:D.current,N0=v&&g5({panePath:o,terminalTabPath:L}),y0=Ny({panePath:o,paneInstanceId:r.paneInstanceId,paneOverrideId:o===L?null:typeof K?.get==="function"?K.get(o)||null:null,terminalTabPath:L,viewState:o===L?null:$_.getViewState(o)||null,allowLiveTransfer:N0,instance:j0});if(!y0)return!1;if(N0&&y0.paneTransferToken&&typeof j0?.moveHost==="function"){if(z.current===j0)z.current=null;if(D.current===j0)D.current=null}if(!gj(window.opener,y0,window.location.origin))return!1;if(J.current=!0,q0)m8(window);return!0},[$,j,K,L]),q_=R(()=>O0(!0,!0),[O0]);u(()=>{if(!$||typeof window>"u")return;let q0=()=>{let v=x.current,r=c4(v)?v.panePath||j||"":"";if(c8({panePath:r,terminalTabPath:L,allowLiveTransfer:!1,reason:"closed-window"}))return;O0(!1,!1)};return window.addEventListener("pagehide",q0),window.addEventListener("beforeunload",q0),()=>{window.removeEventListener("pagehide",q0),window.removeEventListener("beforeunload",q0)}},[$,O0]);let d0=Y0(()=>qL(Y,q),[q,Y]),H_=Y0(()=>VL(K,q),[K,q]),D0=Y0(()=>Kj(G,d0,j),[d0,G,j]),u0=Y0(()=>q&&Q.has(q)?"saved":null,[Q,q]),I0=g(u0);u(()=>{I0.current=u0},[u0]);let r0=Y0(()=>LL(Y,V,Q,q),[Q,V,q,Y]),z_=Y0(()=>KL(j,N),[j,N]),Q_=Y0(()=>BL(j,L,r0,z_),[z_,r0,j,L]),U_=NL($,Z,X,s,Z0),[N_,J_]=P(!1),x_=g(!1),P_=R(()=>{if(!X||Z)return;if(x_.current=Z0,Z0)W0(!1);J_(!0)},[Z,Z0,X]),E_=R(()=>{if(!N_)return;if(J_(!1),x_.current)W0(!0),x_.current=!1},[N_]),o_=R(()=>{if(N_){E_();return}P_()},[P_,E_,N_]);u(()=>{if(N_&&!X)E_()},[X,E_,N_]),u(()=>{let q0=new Set(Y.map((o)=>o.id)),v=new Set(_0.current.keys()),r=new Set($0.current.keys());for(let o of Array.from(C.current.keys()))if(!Vy({panePath:o,openTabIds:q0,pendingDetachedTabPaths:v,detachedTabPaths:r,terminalTabPath:L,hasPendingDetachedDockPane:Boolean(t.current),hasDetachedDockPane:Boolean(z0.current)}))C.current.delete(o)},[Y,L]),u(()=>{if($||typeof window>"u")return;let q0=(v)=>{if(v.origin!==window.location.origin)return;let r=v.data;if(!r||typeof r!=="object")return;if(r.type==="piclaw-pane-detach-claim"){v0({panePath:r.panePath,paneInstanceId:r.paneInstanceId,paneWindowId:r.paneWindowId},v.source);return}if(r.type!=="piclaw-pane-reattach-request")return;let o=Fy({payload:r}),j0=o?.panePath||"";if(!j0)return;if(o?.editorTransfer)M.current.set(j0,o.editorTransfer);if(o?.hostTransfer)if(W.current.set(j0,o.hostTransfer),o.allowLiveTransfer&&v.source)y.current.set(j0,v.source);else y.current.delete(j0);let N0=$0.current.get(j0)||null,y0=j0===L?z0.current:null,A0=g5({panePath:j0,terminalTabPath:L}),M0=N0||y0;if(!M0)return;if(o?.paneInstanceId&&o.paneInstanceId!==M0.paneInstanceId)return;if(h8({panePath:j0,terminalTabPath:L})){y.current.delete(j0),w.current.delete(j0),W.current.delete(j0),M.current.delete(j0);return}if(o?.hostTransfer&&o.allowLiveTransfer&&A0)w.current.set(j0,{panePath:j0,paneInstanceId:M0.paneInstanceId,paneWindowId:M0.ownerWindowId});else w.current.delete(j0);if(c8({panePath:j0,terminalTabPath:L,allowLiveTransfer:o?.allowLiveTransfer,reason:"message"})){y.current.delete(j0),b.current.delete(j0),c.current.delete(j0),p.current.add(j0);return}o0(j0,{allowLiveTransfer:o?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",q0),()=>window.removeEventListener("message",q0)},[v0,$,o0,L]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let q0=()=>t0();window.addEventListener("focus",q0),window.addEventListener("pageshow",q0),document.addEventListener("visibilitychange",q0);let v=setInterval(()=>{t0();for(let[r,o]of b.current.entries()){if(!o||!o.closed)continue;if(r===L?Boolean(t.current):_0.current.has(r)){b.current.delete(r),f0(r);continue}if(h8({panePath:r,terminalTabPath:L})){i0(r);continue}if(c8({panePath:r,terminalTabPath:L,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(r),c.current.delete(r),p.current.add(r);continue}if(p.current.has(r)){b.current.delete(r);continue}o0(r,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",q0),window.removeEventListener("pageshow",q0),document.removeEventListener("visibilitychange",q0),clearInterval(v)}},[i0,f0,t0,$,o0,L]),u(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let v=O.current?.path===j?O.current:null,r=I.current?.path===j?I.current:null;B(j,{...G?{label:G}:{},...v?.paneOverrideId?{paneOverrideId:v.paneOverrideId}:{},...v?.viewState?{viewState:v.viewState}:{},...r?.payload?.diffMode?{diffMode:r.payload.diffMode}:{}})},[B,G,$,j]),u(()=>{if(!$)return;let q0=x.current;if(!c4(q0))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;gj(window.opener,{type:"piclaw-pane-detach-claim",panePath:q0.panePath,paneInstanceId:q0.paneInstanceId,paneWindowId:q0.paneWindowId},window.location.origin)},[$]),u(()=>{let q0=H.current;if(!q0)return;if(D.current)D.current.dispose(),D.current=null;let v=q;if(!v)return;if(!$&&c0?.panePath===v){q0.innerHTML="";return}let r=O.current?.path===v?O.current:null,o=M.current.get(v)||null,j0=r||o,N0=I.current?.path===v?I.current:null,y0=W.current.get(v)||null,A0=N0||y0,M0=H_||j0?.paneOverrideId||null,T0=A0?.payload?{...A0.payload}:null;if(I0.current)T0={...T0||{},diffMode:I0.current};else if(T0&&"diffMode"in T0)delete T0.diffMode;let m0={path:v,mode:"edit",...j0?.content!==void 0?{content:j0.content}:{},...j0?.mtime!==void 0?{mtime:j0.mtime}:{},...T0?{transferState:T0}:{}},S0=(M0?Y_.get(M0):null)||Y_.resolve(m0)||Y_.get("editor");if(!S0){q0.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let n0=null,e0=!1,x0=(w0)=>{n0=w0,D.current=w0,w0.onDirtyChange?.((n)=>{$_.setDirty(v,n)}),w0.onSaveRequest?.(()=>{}),w0.onClose?.(()=>{U()});let D_=$_.getViewState(v);if(D_&&typeof w0.restoreViewState==="function")requestAnimationFrame(()=>w0.restoreViewState(D_));if(typeof w0.onViewStateChange==="function")w0.onViewStateChange((n)=>{$_.saveViewState(v,n)});let __=x.current;if($&&c4(__)&&typeof w0?.moveHost==="function"&&g5({panePath:v,terminalTabPath:L}))u5({panePath:v,paneInstanceId:__.paneInstanceId||"",paneWindowId:__.paneWindowId||"",instance:w0,releaseSourceHost:()=>{if(z.current===w0)z.current=null;if(D.current===w0)D.current=null}});dN(w0,{path:v,hostMode:$?"popout":"main",transferState:T0}).catch((n)=>{console.warn("[pane-attach] afterAttachToHost failed:",n)}),requestAnimationFrame(()=>w0.focus?.())};return(async()=>{let w0=x.current,D_=$&&c4(w0)&&w0.panePath===v?{panePath:v,paneInstanceId:w0.paneInstanceId||"",paneWindowId:w0.paneWindowId||""}:null,__=w.current.get(v)||null,n=g5({panePath:v,terminalTabPath:L})?D_||__:null,B0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:y.current.get(v)||null,l0=$?"popout":"main";if(A0&&n&&B0)try{let j_=await PB(B0,n,q0,{path:v,hostMode:l0,transferState:T0});if(!e0&&j_){if(x0(j_),r)O.current=null;if(o)M.current.delete(v);if(N0)I.current=null;if(y0)W.current.delete(v);y.current.delete(v),w.current.delete(v);return}}catch(j_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",j_)}if(e0)return;if(x0(S0.mount(q0,m0)),r)O.current=null;if(o)M.current.delete(v);if(N0)I.current=null;if(y0)W.current.delete(v);y.current.delete(v),w.current.delete(v)})(),()=>{if(e0=!0,D.current===n0)n0.dispose(),D.current=null}},[c0,H_,U,$,q]),u(()=>{let q0=q,v=D.current;if(!q0||typeof v?.setDiffMode!=="function")return;v.setDiffMode(u0)},[u0,q]);let f_=R(async(q0)=>{let v=typeof q==="string"?q.trim():"",r=D.current;if(!v||!r?.setContent)return;if(typeof r.isDirty==="function"&&r.isDirty())return;if(!Ky(v,q0))return;try{let o=await E(v,1e6,"edit"),j0=typeof o?.text==="string"?o.text:"",N0=typeof o?.mtime==="string"&&o.mtime.trim()?o.mtime.trim():new Date().toISOString();r.setContent(j0,N0)}catch(o){console.warn("[workspace_update] Failed to refresh active pane:",o)}},[E,q]);return u(()=>{let q0=k.current;if(z.current)z.current.dispose(),z.current=null;if(!q0||!s||!Z0)return;if(!$&&s0?.panePath===L){q0.innerHTML="";return}let v=Y_.getDockPanes()[0];if(!v){q0.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let r=I.current?.path===L?I.current:null,o=W.current.get(L)||null,j0=r||o,N0=v.mount(q0,{mode:"view",...j0?.payload?{transferState:j0.payload}:{}});if(z.current=N0,dN(N0,{path:L,hostMode:$?"popout":"main",transferState:j0?.payload||null}).catch((y0)=>{console.warn("[pane-attach] afterAttachToHost failed:",y0)}),r)I.current=null;if(o)W.current.delete(L);return requestAnimationFrame(()=>N0.focus?.()),()=>{if(z.current===N0)N0.dispose(),z.current=null}},[s0,Z0,s,$,L]),{editorContainerRef:H,editorInstanceRef:D,dockContainerRef:k,dockInstanceRef:z,hasDockPanes:s,dockVisible:Z0,setDockVisible:W0,toggleDock:P0,openTerminalTab:h0,openVncTab:g0,panePopoutTitle:D0,panePopoutHasMenuActions:r0,hidePanePopoutControls:Q_,showEditorPaneContainer:U_,zenMode:N_,exitZenMode:E_,toggleZenMode:o_,refreshActiveEditorFromWorkspace:f_,detachedTabs:E0,activeDetachedTab:c0,detachedDockPane:s0,buildPaneDetachTransfer:F_,registerDetachedPaneWindow:Z_,reattachPane:b0,requestPanePopoutReattach:q_,canReattachPanePopout:$&&c4(x.current)&&!h8({panePath:j||"",terminalTabPath:L})}}function Uy(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function sN(_){let $=g(null),j=hN({onTabClosed:(Z)=>$.current?.(Z)}),G=oN({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Uy({removeFileRefRef:$,editorState:j,paneRuntime:G})}w_();var r8=1280,n8=820;function p8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function v6(_){return typeof _==="string"&&_.trim()?_.trim():null}function Dy(_){let $=v6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function Hy(_){if(_.isMobile)return!1;let $=p8(_.windowWidth),j=p8(_.windowHeight);if($===null||j===null)return!1;if($<r8||j<n8)return!1;let G=p8(_.screenWidth),Z=p8(_.screenHeight);if(G!==null&&G<r8)return!1;if(Z!==null&&Z<n8)return!1;return!0}function Ey(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Wy(_){if(!_||_.kind!=="custom")return null;let $=v6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=v6(j.path);if(!Dy(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:v6(_.chat_jid),path:G,label:v6(j.label),target:Z}}async function Oy(_,$,j){await E5(_,$,j||void 0)}async function aN(_,$){let j=Wy(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||Oy,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:r8,height:n8};if(j.target==="popout"){if(!Hy({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:Ey(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${r8}×${n8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let V=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:V,opened:V,reason:V?void 0:"popout_failed",detail:V?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var bj="piclaw:oobe:provider-missing:dismissed";function zy(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function Jy(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function tN(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=zy(G),Y=X>0,q=Jy(G),V=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(V)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var Ay=jL();await HL();var{searchPosts:ky,deletePost:My,getAgents:yy,getAgentThought:eN,setAgentThoughtVisibility:_F,getAgentStatus:Ty,getAgentContext:wy,getAutoresearchStatus:xy,stopAutoresearch:Iy,dismissAutoresearch:Cy,getAgentModels:Py,getActiveChatAgents:fy,getChatBranches:Ry,renameChatBranch:Sy,pruneChatBranch:uy,purgeChatBranch:gy,restoreChatBranch:by,getAgentQueueState:vy,steerAgentQueueItem:my,removeAgentQueueItem:cy,streamSidePrompt:hy,getWorkspaceFile:ly,getThread:py,getTimeline:ry,sendAgentMessage:ny,forkChatBranch:dy,createRootChatSession:iy}=EL;function oy({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:V}=Y0(()=>YL(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let Q=mN({currentChatJid:j,branchLoaderMode:q}),[K,L]=P(()=>U$(bj,!1)),[N,B]=P(null),U=R((f0)=>{let i0=typeof f0==="string"?f0:"";if(!i0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:i0})},[]),{agentStatus:E,setAgentStatus:H,agentDraft:D,setAgentDraft:k,agentPlan:z,setAgentPlan:O,agentThought:I,setAgentThought:x,pendingRequest:A,setPendingRequest:M,currentTurnId:W,setCurrentTurnId:y,steerQueuedTurnId:w,setSteerQueuedTurnId:J,lastAgentEventRef:C,lastSilenceNoticeRef:f,isAgentRunningRef:b,draftBufferRef:c,thoughtBufferRef:p,previewResyncPendingRef:e,previewResyncGenerationRef:m,pendingRequestRef:_0,stalledPostIdRef:E0,currentTurnIdRef:G0,steerQueuedTurnIdRef:$0,thoughtExpandedRef:X0,draftExpandedRef:U0}=uX(),t=sN({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:Y5,vncTabPrefix:i1,getWorkspaceFile:ly}),V0=DK({timelineRef:Q.timelineRef,viewStateRef:Q.viewStateRef,followupQueueRowIdsRef:Q.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,followupQueueItems:Q.followupQueueItems,onIdentity:R((f0)=>{if(!f0)return;let{assistant_name:i0,assistant_avatar_url:b0}=f0;if(i0||b0)Q.setAgents((v0)=>{let O0=v0.default||{id:"default"},q_=i0&&!O0.name,d0=b0&&!O0.avatar_url;if(!q_&&!d0)return v0;return{...v0,["default"]:{...O0,...q_?{name:i0}:{},...d0?{avatar_url:b0}:{}}}});let{user_name:t0,user_avatar_url:o0,user_avatar_background:F_}=f0;if(t0||o0||F_)Q.setUserProfile((Z_)=>{let v0=t0&&!Z_.name,O0=o0&&!Z_.avatar_url,q_=F_&&!Z_.avatar_background;if(!v0&&!O0&&!q_)return Z_;return{...Z_,...v0?{name:t0}:{},...O0?{avatar_url:o0}:{},...q_?{avatar_background:F_}:{}}})},[Q.setAgents,Q.setUserProfile])}),Q0=jK({environment:{isRenameBranchFormOpen:Q.isRenameBranchFormOpen,renameBranchNameInputRef:Q.renameBranchNameInputRef,appShellRef:Q.appShellRef,setIsWebAppMode:Q.setIsWebAppMode,workspaceOpen:Q.workspaceOpen,setWorkspaceOpen:Q.setWorkspaceOpen,btwSession:Q.btwSession,agents:Q.agents,agentsRef:Q.agentsRef,currentChatJid:j,activeChatJidRef:Q.activeChatJidRef,userProfile:Q.userProfile,userProfileRef:Q.userProfileRef,brandingRef:Q.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:Q.setIntentToast,intentToastTimerRef:Q.intentToastTimerRef,editorOpen:t.editorState.editorOpen,openEditor:t.editorState.openEditor,resolvePane:(f0)=>Y_.resolve(f0),tabStripActiveId:t.editorState.tabStripActiveId,setFileRefs:Q.setFileRefs,setFolderRefs:Q.setFolderRefs,setMessageRefs:Q.setMessageRefs,currentChatJid:j,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,searchOpen:Q.searchOpen,setCurrentHashtag:Q.setCurrentHashtag,setSearchQuery:Q.setSearchQuery,setSearchOpen:Q.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:py,setPosts:V0.setPosts},agentActivity:{lastActivityTtlMs:iX,lastActivityTimerRef:Q.lastActivityTimerRef,lastActivityTokenRef:Q.lastActivityTokenRef,lastAgentEventRef:C,lastSilenceNoticeRef:f,isAgentRunningRef:b,setIsAgentTurnActive:Q.setIsAgentTurnActive,setAgentStatus:H,draftBufferRef:c,thoughtBufferRef:p,pendingRequestRef:_0,lastAgentResponseRef:Q.lastAgentResponseRef,currentTurnIdRef:G0,steerQueuedTurnIdRef:$0,agentStatusRef:Q.agentStatusRef,silentRecoveryRef:Q.silentRecoveryRef,thoughtExpandedRef:X0,draftExpandedRef:U0,setCurrentTurnId:y,setSteerQueuedTurnId:J,currentTurnIdRefForPanel:G0,setAgentThoughtVisibility:_F,getAgentThought:eN,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:Q.isAgentTurnActive,steerQueuedTurnId:w,currentTurnId:W,steerQueuedTurnIdRef:$0,setSteerQueuedTurnId:J,agentStatus:E,agentDraft:D,agentPlan:z,agentThought:I,pendingRequest:A,pendingRequestRef:_0,followupQueueItems:Q.followupQueueItems,activeModel:Q.activeModel,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,activeModelUsage:Q.activeModelUsage,contextUsage:Q.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:Q.wasAgentActiveRef,draftBufferRef:c,thoughtBufferRef:p,lastAgentEventRef:C,lastSilenceNoticeRef:f,lastAgentResponseRef:Q.lastAgentResponseRef,currentTurnIdRef:G0,thoughtExpandedRef:X0,draftExpandedRef:U0,agentStatusRef:Q.agentStatusRef,silentRecoveryRef:Q.silentRecoveryRef,setIsAgentTurnActive:Q.setIsAgentTurnActive,setAgentStatus:H,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setCurrentTurnId:y,setFollowupQueueItems:Q.setFollowupQueueItems,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setContextUsage:Q.setContextUsage,lastNotifiedIdRef:Q.lastNotifiedIdRef,agentsRef:Q.agentsRef,notify:Q.notify,shouldNotifyLocallyForChat:Q.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:f,lastAgentEventRef:C,currentTurnIdRef:G0,thoughtExpandedRef:X0,draftExpandedRef:U0,draftBufferRef:c,thoughtBufferRef:p,pendingRequestRef:_0,lastAgentResponseRef:Q.lastAgentResponseRef,agentStatusRef:Q.agentStatusRef,stalledPostIdRef:E0,scrollToBottomRef:V0.scrollToBottomRef,setCurrentTurnId:y,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setAgentStatus:H,setPosts:V0.setPosts,dedupePosts:W5},viewState:{viewStateRef:Q.viewStateRef,currentHashtag:Q.currentHashtag,searchQuery:Q.searchQuery,searchOpen:Q.searchOpen},removeFileRefRef:t.removeFileRefRef}),z0=pX({appShellRef:Q.appShellRef,sidebarWidthRef:Q.sidebarWidthRef,editorWidthRef:Q.editorWidthRef,dockHeightRef:Q.dockHeightRef}),{chatRefreshLifecycle:s,timelineViewActions:Z0,isComposeBoxAgentActive:W0,followupActions:P0,sidepanelActions:h0,branchPaneActions:g0}=xN({routeState:{currentChatJid:j,currentRootChatJid:Q.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:V,isWebAppMode:Q.isWebAppMode},searchState:{currentHashtag:Q.currentHashtag,setCurrentHashtag:Q.setCurrentHashtag,searchQuery:Q.searchQuery,setSearchQuery:Q.setSearchQuery,searchOpen:Q.searchOpen,setSearchOpen:Q.setSearchOpen,searchScope:Q.searchScope,setSearchScope:Q.setSearchScope},shellState:{activeChatAgents:Q.activeChatAgents,currentChatBranches:Q.currentChatBranches,currentBranchRecord:Q.currentBranchRecord,contextUsage:Q.contextUsage,activeModel:Q.activeModel,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,activeModelUsage:Q.activeModelUsage,connectionStatus:Q.connectionStatus,notificationsEnabled:Q.notificationsEnabled,notificationPermission:Q.notificationPermission,workspaceOpen:Q.workspaceOpen,setWorkspaceOpen:Q.setWorkspaceOpen,userProfile:Q.userProfile,agents:Q.agents,removingPostIds:Q.removingPostIds,btwSession:Q.btwSession},timeline:V0,interaction:Q0,paneRuntime:t.paneRuntime,refs:{activeChatJidRef:Q.activeChatJidRef,queueRefreshGenRef:Q.queueRefreshGenRef,dismissedQueueRowIdsRef:Q.dismissedQueueRowIdsRef,wasAgentActiveRef:Q.wasAgentActiveRef,viewStateRef:Q.viewStateRef,agentStatusRef:Q.agentStatusRef,pendingRequestRef:_0,thoughtBufferRef:p,draftBufferRef:c,previewResyncPendingRef:e,previewResyncGenerationRef:m,isAgentRunningRef:b,currentTurnIdRef:G0,silentRecoveryRef:Q.silentRecoveryRef,lastAgentEventRef:C,lastSilenceNoticeRef:f,staleUiVersionRef:Q.staleUiVersionRef,staleUiReloadScheduledRef:Q.staleUiReloadScheduledRef,hasConnectedOnceRef:Q.hasConnectedOnceRef,sidebarWidthRef:Q.sidebarWidthRef,appShellRef:Q.appShellRef,agentsRef:Q.agentsRef,paneStateOwnerChatJidRef:Q.paneStateOwnerChatJidRef,chatPaneStateByChatRef:Q.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:Q.dismissedLiveWidgetKeysRef,draftThrottleRef:Q.draftThrottleRef,thoughtThrottleRef:Q.thoughtThrottleRef,followupQueueItemsRef:Q.followupQueueItemsRef,lastAgentResponseRef:Q.lastAgentResponseRef,thoughtExpandedRef:X0,draftExpandedRef:U0,steerQueuedTurnIdRef:$0,btwAbortRef:Q.btwAbortRef,renameBranchInFlightRef:Q.renameBranchInFlightRef,renameBranchLockUntilRef:Q.renameBranchLockUntilRef,editorWidthRef:Q.editorWidthRef,dockHeightRef:Q.dockHeightRef},setters:{setFollowupQueueItems:Q.setFollowupQueueItems,setContextUsage:Q.setContextUsage,setExtensionStatusPanels:Q.setExtensionStatusPanels,setPendingExtensionPanelActions:Q.setPendingExtensionPanelActions,setExtensionWorkingState:Q.setExtensionWorkingState,setAgentStatus:H,setAgentDraft:k,setAgentPlan:O,setAgentThought:x,setPendingRequest:M,setConnectionStatus:Q.setConnectionStatus,setStateAccessFailed:Q.setStateAccessFailed,setAgents:Q.setAgents,setUserProfile:Q.setUserProfile,setActiveChatAgents:Q.setActiveChatAgents,setCurrentChatBranches:Q.setCurrentChatBranches,setActiveModel:Q.setActiveModel,setActiveThinkingLevel:Q.setActiveThinkingLevel,setSupportsThinking:Q.setSupportsThinking,setActiveModelUsage:Q.setActiveModelUsage,setAgentModelsPayload:Q.setAgentModelsPayload,setHasLoadedAgentModels:Q.setHasLoadedAgentModels,setHasMore:V0.setHasMore,setFloatingWidget:Q.setFloatingWidget,setSteerQueuedTurnId:J,setRemovingPostIds:Q.setRemovingPostIds,setBtwSession:Q.setBtwSession,setWorkspaceOpen:Q.setWorkspaceOpen,setRenameBranchNameDraft:Q.setRenameBranchNameDraft,setIsRenameBranchFormOpen:Q.setIsRenameBranchFormOpen,setIsRenamingBranch:Q.setIsRenamingBranch},services:{searchPosts:ky,deletePost:My,getAgentQueueState:vy,getAgentContext:wy,getAutoresearchStatus:xy,getAgentStatus:Ty,getAgents:yy,getAgentModels:Py,getActiveChatAgents:fy,getChatBranches:Ry,getTimeline:ry,stopAutoresearch:Iy,dismissAutoresearch:Cy,streamSidePrompt:hy,sendAgentMessage:ny,renameChatBranch:Sy,pruneChatBranch:uy,purgeChatBranch:gy,restoreChatBranch:by,forkChatBranch:dy,createRootChatSession:iy,steerAgentQueueItem:my,removeAgentQueueItem:cy,getAgentThought:eN,setAgentThoughtVisibility:_F,silenceRefreshMs:dX,silenceWarningMs:rX,silenceFinalizeMs:nX,isCompactionStatus:O$,currentAppAssetVersion:Ay,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:E,isAgentTurnActive:Q.isAgentTurnActive,openEditor:t.editorState.openEditor,activateTab:t.editorState.handleTabActivate,tabStripActiveId:t.editorState.tabStripActiveId,terminalTabPath:Y5,resolveTab:(f0)=>$_.get(f0),closeTab:t.editorState.handleTabClose,editorOpen:t.editorState.editorOpen},helpers:{getFormLock:GL,readStoredNumber:O4}});u(()=>{return TN({timelineRef:Q.timelineRef,activeChatAgents:Q.activeChatAgents,currentChatJid:j,onSwitch:(f0)=>g0.handleBranchPickerChange(f0),isIOSDevice:E6,isLikelySafari:l8})},[Q.timelineRef,Q.activeChatAgents,j,g0.handleBranchPickerChange]);let G_=Y0(()=>tN({panePopoutMode:Z,modelsLoaded:Q.hasLoadedAgentModels,modelPayload:Q.agentModelsPayload,providerMissingDismissed:K}),[Z,Q.hasLoadedAgentModels,Q.agentModelsPayload,K]),c0=R(()=>{Nq()},[]),s0=R(()=>{L(!0),V_(bj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=QL(Y,t.paneRuntime.activePaneTab,X)},[t.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let f0=(i0)=>{aN(i0,{currentChatJid:j,openEditor:t.editorState.openEditor,popOutPane:g0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",f0),()=>{window.removeEventListener("piclaw-extension-ui:request",f0)}},[g0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,t.editorState.openEditor]),eQ(OL({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:t.paneRuntime,splitters:z0,orchestration:{branchPaneActions:g0,timelineViewActions:Z0,sidepanelActions:h0,followupActions:P0,chatRefreshLifecycle:s,isComposeBoxAgentActive:W0},interaction:Q0,timeline:V0,surface:{...Q,oobePanelState:G_,composePrefillRequest:N,requestComposePrefill:U,handleOobeSetupProvider:c0,handleOobeShowModelPicker:c0,handleOobeOpenWorkspace:c0,handleDismissProviderMissingOobe:s0},editorState:t.editorState,agentState:{agentStatus:E,agentDraft:D,agentPlan:z,agentThought:I,pendingRequest:A,currentTurnId:W,steerQueuedTurnId:w,setPendingRequest:M,pendingRequestRef:_0,isCompactionStatus:O$},helpers:{formatBranchPickerLabel:_8,isIOSDevice:E6,terminalTabPath:Y5}}))}function sy(){let{locationParams:_,navigate:$}=Uq();return F`<${oy} locationParams=${_} navigate=${$} />`}var d8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(d8){if(B$(null,d8),d8.replaceChildren(),B$(F`<${sy} />`,d8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=3184FF246E6CFE0F64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
