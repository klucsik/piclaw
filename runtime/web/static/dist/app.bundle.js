var AF=Object.defineProperty;var kF=(_)=>_;function MF(_,$){this[_]=kF.bind(null,$)}var j1=(_,$)=>{for(var j in $)AF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:MF.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var zG={};j1(zG,{useState:()=>P,useRef:()=>g,useReducer:()=>EG,useMemo:()=>Y0,useLayoutEffect:()=>j6,useImperativeHandle:()=>RF,useErrorBoundary:()=>gF,useEffect:()=>u,useDebugValue:()=>uF,useContext:()=>SF,useCallback:()=>R,render:()=>L$,html:()=>F,h:()=>N3,createContext:()=>fF,Component:()=>r6});function Q$(_,$){for(var j in $)_[j]=$[j];return _}function B3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function N3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?e5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return i5(_,Y,G,Z,null)}function i5(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++YG:Z,__i:-1,__u:0};return Z==null&&x_.vnode!=null&&x_.vnode(X),X}function $2(_){return _.children}function r6(_,$){this.props=_,this.context=$}function e4(_,$){if($==null)return _.__?e4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?e4(_):null}function TF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=Q$({},$);X.__v=$.__v+1,x_.vnode&&x_.vnode(X),F3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?e4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,FG(G,X,Z),$.__e=$.__=null,X.__e!=j&&LG(X)}}function LG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),LG(_)}function V3(_){(!_.__d&&(_.__d=!0)&&b$.push(_)&&!t5.__r++||ij!=x_.debounceRendering)&&((ij=x_.debounceRendering)||qG)(t5)}function t5(){try{for(var _,$=1;b$.length;)b$.length>$&&b$.sort(VG),_=b$.shift(),$=b$.length,TF(_)}finally{b$.length=t5.__r=0}}function BG(_,$,j,G,Z,X,Y,q,V,K,L){var Q,N,B,U,E,D,H,k=G&&G.__k||a5,z=$.length;for(V=xF(j,$,k,V,z),Q=0;Q<z;Q++)(B=j.__k[Q])!=null&&(N=B.__i!=-1&&k[B.__i]||s5,B.__i=Q,D=F3(_,B,N,Z,X,Y,q,V,K,L),U=B.__e,B.ref&&N.ref!=B.ref&&(N.ref&&U3(N.ref,null,B),L.push(B.ref,B.__c||U,B)),E==null&&U!=null&&(E=U),(H=!!(4&B.__u))||N.__k===B.__k?(V=NG(B,V,_,H),H&&N.__e&&(N.__e=null)):typeof B.type=="function"&&D!==void 0?V=D:U&&(V=U.nextSibling),B.__u&=-7);return j.__e=E,V}function xF(_,$,j,G,Z){var X,Y,q,V,K,L=j.length,Q=L,N=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=i5(null,Y,null,null,null):_2(Y)?Y=_.__k[X]=i5($2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=i5(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,V=X+N,Y.__=_,Y.__b=_.__b+1,q=null,(K=Y.__i=IF(Y,j,V,Q))!=-1&&(Q--,(q=j[K])&&(q.__u|=2)),q==null||q.__v==null?(K==-1&&(Z>L?N--:Z<L&&N++),typeof Y.type!="function"&&(Y.__u|=4)):K!=V&&(K==V-1?N--:K==V+1?N++:(K>V?N--:N++,Y.__u|=4))):_.__k[X]=null;if(Q)for(X=0;X<L;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=e4(q)),HG(q,q));return G}function NG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=NG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=e4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function IF(_,$,j,G){var Z,X,Y,q=_.key,V=_.type,K=$[j],L=K!=null&&(2&K.__u)==0;if(K===null&&q==null||L&&q==K.key&&V==K.type)return j;if(G>(L?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&q==K.key&&V==K.type)return Y}return-1}function oj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||wF.test($)?j:j+"px"}function n5(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||oj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||oj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(KG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[p6]=G[p6]:(j[p6]=L3,_.addEventListener($,X?q3:Y3,X)):_.removeEventListener($,X?q3:Y3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function sj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[d5]==null)$[d5]=L3++;else if($[d5]<j[p6])return;return j(x_.event?x_.event($):$)}}}function F3(_,$,j,G,Z,X,Y,q,V,K){var L,Q,N,B,U,E,D,H,k,z,W,I,x,A,M,O=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),X=[q=$.__e=j.__e]),(L=x_.__b)&&L($);_:if(typeof O=="function")try{if(H=$.props,k=O.prototype&&O.prototype.render,z=(L=O.contextType)&&G[L.__c],W=L?z?z.props.value:L.__:G,j.__c?D=(Q=$.__c=j.__c).__=Q.__E:(k?$.__c=Q=new O(H,W):($.__c=Q=new r6(H,W),Q.constructor=O,Q.render=PF),z&&z.sub(Q),Q.state||(Q.state={}),Q.__n=G,N=Q.__d=!0,Q.__h=[],Q._sb=[]),k&&Q.__s==null&&(Q.__s=Q.state),k&&O.getDerivedStateFromProps!=null&&(Q.__s==Q.state&&(Q.__s=Q$({},Q.__s)),Q$(Q.__s,O.getDerivedStateFromProps(H,Q.__s))),B=Q.props,U=Q.state,Q.__v=$,N)k&&O.getDerivedStateFromProps==null&&Q.componentWillMount!=null&&Q.componentWillMount(),k&&Q.componentDidMount!=null&&Q.__h.push(Q.componentDidMount);else{if(k&&O.getDerivedStateFromProps==null&&H!==B&&Q.componentWillReceiveProps!=null&&Q.componentWillReceiveProps(H,W),$.__v==j.__v||!Q.__e&&Q.shouldComponentUpdate!=null&&Q.shouldComponentUpdate(H,Q.__s,W)===!1){$.__v!=j.__v&&(Q.props=H,Q.state=Q.__s,Q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(y){y&&(y.__=$)}),a5.push.apply(Q.__h,Q._sb),Q._sb=[],Q.__h.length&&Y.push(Q);break _}Q.componentWillUpdate!=null&&Q.componentWillUpdate(H,Q.__s,W),k&&Q.componentDidUpdate!=null&&Q.__h.push(function(){Q.componentDidUpdate(B,U,E)})}if(Q.context=W,Q.props=H,Q.__P=_,Q.__e=!1,I=x_.__r,x=0,k)Q.state=Q.__s,Q.__d=!1,I&&I($),L=Q.render(Q.props,Q.state,Q.context),a5.push.apply(Q.__h,Q._sb),Q._sb=[];else do Q.__d=!1,I&&I($),L=Q.render(Q.props,Q.state,Q.context),Q.state=Q.__s;while(Q.__d&&++x<25);Q.state=Q.__s,Q.getChildContext!=null&&(G=Q$(Q$({},G),Q.getChildContext())),k&&!N&&Q.getSnapshotBeforeUpdate!=null&&(E=Q.getSnapshotBeforeUpdate(B,U)),A=L!=null&&L.type===$2&&L.key==null?UG(L.props.children):L,q=BG(_,_2(A)?A:[A],$,j,G,Z,X,Y,q,V,K),Q.base=$.__e,$.__u&=-161,Q.__h.length&&Y.push(Q),D&&(Q.__E=Q.__=null)}catch(y){if($.__v=null,V||X!=null)if(y.then){for($.__u|=V?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(M=X.length;M--;)B3(X[M]);K3($)}else $.__e=j.__e,$.__k=j.__k,y.then||K3($);x_.__e(y,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=CF(j.__e,$,j,G,Z,X,Y,V,K);return(L=x_.diffed)&&L($),128&$.__u?void 0:q}function K3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(K3))}function FG(_,$,j){for(var G=0;G<j.length;G++)U3(j[G],j[++G],j[++G]);x_.__c&&x_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){x_.__e(X,Z.__v)}})}function UG(_){return typeof _!="object"||_==null||_.__b>0?_:_2(_)?_.map(UG):Q$({},_)}function CF(_,$,j,G,Z,X,Y,q,V){var K,L,Q,N,B,U,E,D=j.props||s5,H=$.props,k=$.type;if(k=="svg"?Z="http://www.w3.org/2000/svg":k=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((B=X[K])&&"setAttribute"in B==!!k&&(k?B.localName==k:B.nodeType==3)){_=B,X[K]=null;break}}if(_==null){if(k==null)return document.createTextNode(H);_=document.createElementNS(Z,k,H.is&&H),q&&(x_.__m&&x_.__m($,X),q=!1),X=null}if(k==null)D===H||q&&_.data==H||(_.data=H);else{if(X=X&&e5.call(_.childNodes),!q&&X!=null)for(D={},K=0;K<_.attributes.length;K++)D[(B=_.attributes[K]).name]=B.value;for(K in D)B=D[K],K=="dangerouslySetInnerHTML"?Q=B:K=="children"||(K in H)||K=="value"&&("defaultValue"in H)||K=="checked"&&("defaultChecked"in H)||n5(_,K,null,B,Z);for(K in H)B=H[K],K=="children"?N=B:K=="dangerouslySetInnerHTML"?L=B:K=="value"?U=B:K=="checked"?E=B:q&&typeof B!="function"||D[K]===B||n5(_,K,B,D[K],Z);if(L)q||Q&&(L.__html==Q.__html||L.__html==_.innerHTML)||(_.innerHTML=L.__html),$.__k=[];else if(Q&&(_.innerHTML=""),BG($.type=="template"?_.content:_,_2(N)?N:[N],$,j,G,k=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&e4(j,0),q,V),X!=null)for(K=X.length;K--;)B3(X[K]);q||(K="value",k=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[K]||k=="progress"&&!U||k=="option"&&U!=D[K])&&n5(_,K,U,D[K],Z),K="checked",E!=null&&E!=_[K]&&n5(_,K,E,D[K],Z))}return _}function U3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){x_.__e(Z,j)}}function HG(_,$,j){var G,Z;if(x_.unmount&&x_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||U3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){x_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&HG(G[Z],$,j||typeof _.type!="function");j||B3(_.__e),_.__c=_.__=_.__e=void 0}function PF(_,$,j){return this.constructor(_,j)}function L$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),x_.__&&x_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],F3($,_=(!G&&j||$).__k=N3($2,null,[_]),Z||s5,s5,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?e5.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),FG(X,_,Y)}function fF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,V3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+QG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function $6(_,$){S_.__h&&S_.__h(T_,_,_6||$),_6=0;var j=T_.__H||(T_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function P(_){return _6=1,EG(OG,_)}function EG(_,$,j){var G=$6(v$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):OG(void 0,$),function(q){var V=G.__N?G.__N[0]:G.__[0],K=G.t(V,q);V!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=T_,!T_.__f)){var Z=function(q,V,K){if(!G.__c.__H)return!0;var L=G.__c.__H.__.filter(function(N){return N.__c});if(L.every(function(N){return!N.__N}))return!X||X.call(this,q,V,K);var Q=G.__c.props!==q;return L.some(function(N){if(N.__N){var B=N.__[0];N.__=N.__N,N.__N=void 0,B!==N.__[0]&&(Q=!0)}}),X&&X.call(this,q,V,K)||Q};T_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=T_;T_.componentWillUpdate=function(q,V,K){if(this.__e){var L=X;X=void 0,Z(q,V,K),X=L}Y&&Y.call(this,q,V,K)},T_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=$6(v$++,3);!S_.__s&&H3(j.__H,$)&&(j.__=_,j.u=$,T_.__H.__h.push(j))}function j6(_,$){var j=$6(v$++,4);!S_.__s&&H3(j.__H,$)&&(j.__=_,j.u=$,T_.__h.push(j))}function g(_){return _6=5,Y0(function(){return{current:_}},[])}function RF(_,$,j){_6=6,j6(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Y0(_,$){var j=$6(v$++,7);return H3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function R(_,$){return _6=8,Y0(function(){return _},$)}function SF(_){var $=T_.context[_.__c],j=$6(v$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(T_)),$.props.value):_.__}function uF(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function gF(_){var $=$6(v$++,10),j=P();return $.__=_,T_.componentDidCatch||(T_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function bF(){for(var _;_=DG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(o5),$.__h.some(Q3),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function vF(_){var $,j=function(){clearTimeout(G),ZG&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);ZG&&($=requestAnimationFrame(j))}function o5(_){var $=T_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T_=$}function Q3(_){var $=T_;_.__c=_.__(),T_=$}function H3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function OG(_,$){return typeof $=="function"?$(_):$}function mF(_){var $=XG.get(this);return $||($=new Map,XG.set(this,$)),($=WG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",V=[0],K=function(N){X===1&&(N||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,N,Y):X===3&&(N||Y)?(V.push(3,N,Y),X=2):X===2&&Y==="..."&&N?V.push(4,N,0):X===2&&Y&&!N?V.push(5,0,!0,Y):X>=5&&((Y||!N&&X===5)&&(V.push(X,0,Y,Z),X=6),N&&(V.push(X,N,0,Z),X=6)),Y=""},L=0;L<j.length;L++){L&&(X===1&&K(),K(L));for(var Q=0;Q<j[L].length;Q++)G=j[L][Q],X===1?G==="<"?(K(),V=[V],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[L][Q+1]===">")?(K(),X===3&&(V=V[0]),X=V,(V=V[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,V=V[0])}return K(),V}(_)),$),arguments,[])).length>1?$:$[0]}var e5,x_,YG,yF,b$,ij,qG,VG,Z3,d5,p6,KG,L3,Y3,q3,QG,s5,a5,wF,_2,v$,T_,X3,aj,_6=0,DG,S_,tj,ej,_G,$G,jG,GG,ZG,WG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,WG(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},XG,F;var y0=J_(()=>{s5={},a5=[],wF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_2=Array.isArray;e5=a5.slice,x_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},YG=0,yF=function(_){return _!=null&&_.constructor===void 0},r6.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q$({},this.state),typeof _=="function"&&(_=_(Q$({},j),this.props)),_&&Q$(j,_),_!=null&&this.__v&&($&&this._sb.push($),V3(this))},r6.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),V3(this))},r6.prototype.render=$2,b$=[],qG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,VG=function(_,$){return _.__v.__b-$.__v.__b},t5.__r=0,Z3=Math.random().toString(8),d5="__d"+Z3,p6="__a"+Z3,KG=/(PointerCapture)$|Capture$/i,L3=0,Y3=sj(!1),q3=sj(!0),QG=0;DG=[],S_=x_,tj=S_.__b,ej=S_.__r,_G=S_.diffed,$G=S_.__c,jG=S_.unmount,GG=S_.__;S_.__b=function(_){T_=null,tj&&tj(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),GG&&GG(_,$)},S_.__r=function(_){ej&&ej(_),v$=0;var $=(T_=_.__c).__H;$&&(X3===T_?($.__h=[],T_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(o5),$.__h.some(Q3),$.__h=[],v$=0)),X3=T_},S_.diffed=function(_){_G&&_G(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(DG.push($)!==1&&aj===S_.requestAnimationFrame||((aj=S_.requestAnimationFrame)||vF)(bF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),X3=T_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(o5),j.__h=j.__h.filter(function(G){return!G.__||Q3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),$G&&$G(_,$)},S_.unmount=function(_){jG&&jG(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{o5(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};ZG=typeof requestAnimationFrame=="function";XG=new Map;F=mF.bind(N3)});function W1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function L_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function F$(_,$=!1){let j=W1(_);if(j===null)return $;return j==="true"}function O4(_,$=null){let j=W1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function U2(_){let $=W1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function _7(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function hZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function tH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function eH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=tH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((K)=>Number.isFinite(K)))return null;let V=`#${[X,Y,q].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:V}}function W4(_){return hZ(_)||eH(_)}function $7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function H2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function _D(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function $D(_){return _D(_)>0.4?"#000000":"#ffffff"}function lZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function j7(_){return vZ[_]||vZ.default}function jD(_){return _.mode==="auto"?lZ():_.mode}function pZ(_,$){let j=j7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function U$(_,$,j){let G=W4(_);if(!G)return _;return $7(G,$,j)}function rZ(_,$,j){let G=W4($);if(!G)return _;let X=hZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U$(_.bgPrimary,G,0.08),bgSecondary:U$(_.bgSecondary,G,0.12),bgHover:U$(_.bgHover,G,0.16),textPrimary:U$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:U$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:U$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?$7(G,X,0.18):G.hex,warning:U$(_.warning||H$.warning,G,0.14),danger:U$(_.danger,G,0.16),success:U$(_.success,G,0.16)}}function GD(_,$){let j=W4(_?.warning);if(j)return j.hex;let G=W4($==="dark"?O2.warning:H$.warning)||W4(H$.warning),Z=W4(_?.accent);if(G&&Z)return $7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?O2.warning:H$.warning}function ZD(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=W4(G),X=Z?H2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?H2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?H2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Z?$D(Z):$==="dark"?"#000000":"#ffffff",K=Z?H2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",L=GD(_,$),Q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":V,"--warning-color":L,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(Q).forEach(([N,B])=>{if(B)j.style.setProperty(N,B)})}function XD(){if(typeof document>"u")return;let _=document.documentElement;aH.forEach(($)=>_.style.removeProperty($))}function N6(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function mZ(_){let $=_7(z4?.theme||"default"),j=z4?.tint?String(z4.tint).trim():null,G=pZ($,_);if($==="default"&&j)G=rZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?O2.bgPrimary:H$.bgPrimary}function YD(_,$){if(typeof document>"u")return;let j=N6("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=N6("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",mZ("light"));let Z=N6("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",mZ("dark"));let X=N6("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=N6("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=N6("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function qD(){if(typeof window>"u")return;let _={...z4,mode:cZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function VD(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function KD(_){if(typeof document>"u"||!_)return;let $=document.documentElement;if($?.style)$.style.background=_;if(document.body?.style)document.body.style.background=_}function G7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=_7(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=j7(j),X=jD(Z),Y=pZ(j,X);z4={theme:j,tint:G},cZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let V=Y;if(j==="default"&&G)V=rZ(Y,G,X);if(j==="default"&&!G)XD();else ZD(V,X);if(KD(V.bgPrimary),YD(V.bgPrimary,X),qD(),$.persist!==!1)if(L_(e3,j),G)L_(E2,G);else L_(E2,"")}function D2(){if(j7(z4.theme).mode!=="auto")return;G7(z4,{persist:!1})}function Z7(){if(typeof window>"u")return;let _=_7(W1(e3)||"default"),$=(()=>{let j=W1(E2);return j?j.trim():null})();G7({theme:_,tint:$},{persist:!1})}function nZ(){if(typeof window>"u")return()=>{};if(Z7(),window.matchMedia&&!t3){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",D2);else if(_.addListener)_.addListener(D2);return t3=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",D2);else if(_.removeListener)_.removeListener(D2);t3=!1}}return()=>{}}function F6(_){if(!_||typeof _!=="object")return;let $=VD(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)G7({theme:G||"default",tint:Z},{persist:!1});L_(e3,G||"default"),L_(E2,Z||"")}function dZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return lZ()}var e3="piclaw_theme",E2="piclaw_tint",H$,O2,vZ,aH,z4,cZ="light",t3=!1;var _5=J_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},O2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},vZ={default:{label:"Default",mode:"auto",light:H$,dark:O2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},aH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],z4={theme:"default",tint:null}});function jX(_=typeof window<"u"?window:null){return _||null}function z2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function X5(_,$){return`${_}:${$}`}function GX(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function ZX(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function A4(_){if(!_||typeof _!=="object")return null;return{..._}}function y4(_){if(!_)return null;return k4.find(($)=>$.id===_)||null}function Y7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function XX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=y4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function $X(_,$,j){let G=M4.get(X5(_,$));if(G&&y4(G)?.status==="active")Z5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=GX(_),X={id:Z,type:_,chatJid:$,startedAt:z2(),detail:A4(j),phases:[],status:"active"};return k4.push(X),ZX(k4,100),M4.set(X5(_,$),Z),Y7(Z,"start"),Z}function Z5(_,$,j,G,Z){let X=y4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:z2(),detail:A4(G)}),Y7(X.id,j);if(X.status=$,X.completedAt=z2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=X5(X.type,X.chatJid);if(M4.get(Y)===X.id)M4.delete(Y);XX(X.id)}function ID(_=jX()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=J2;return J2}function U6(_=jX()){return ID(_)}function YX(_,$,j){return U6().ensureTrace(_,$,j)}function A2(_,$){return U6().getActiveTraceId(_,$)}function X1(_,$,j){U6().markTrace(_,$,j)}function k2(_,$,j="settled",G){let Z=y4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return Z5(_,"completed",j,G),!0}function qX(_,$,j="failed",G){U6().failTrace(_,$,j,G)}function VX(_,$="cancelled",j){U6().cancelTrace(_,$,j)}function q7(_){return U6().recordRequest(_)}var k4,G5,M4,J2;var Y5=J_(()=>{k4=[],G5=[],M4=new Map;J2={startTrace(_,$,j){return $X(_,$,j)},ensureTrace(_,$,j){let G=M4.get(X5(_,$));if(G&&y4(G)?.status==="active")return G;return $X(_,$,j)},getActiveTraceId(_,$){let j=M4.get(X5(_,$));return j&&y4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=y4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:z2(),detail:A4(j)}),Y7(G.id,$)},completeTrace(_,$="settled",j){Z5(_,"completed",$,j)},failTrace(_,$,j="failed",G){Z5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){Z5(_,"cancelled",$,j)},recordRequest(_){let $=GX("req");return G5.push({..._,id:$,detail:A4(_.detail)}),ZX(G5,300),$},getTraces(){return k4.map((_)=>({..._,detail:A4(_.detail),phases:_.phases.map(($)=>({...$,detail:A4($.detail)}))}))},getRequests(){return G5.map((_)=>({..._,detail:A4(_.detail)}))},clear(){k4.forEach((_)=>XX(_.id)),k4.splice(0,k4.length),G5.splice(0,G5.length),M4.clear()},printSummary(){let _={traces:J2.getTraces(),requests:J2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H6(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function CD(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function PD(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function KX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function QX(_=typeof window<"u"?window:null){let $=H6(_?.innerWidth)??H6(_?.screen?.availWidth)??H6(_?.screen?.width)??0,j=H6(_?.innerHeight)??H6(_?.screen?.availHeight)??H6(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=CD(_),Y=Number(_?.navigator?.maxTouchPoints||0),q=X||Y>1;if(G>0&&G<=640)return"mobile";if(PD(_)&&!KX(_))return"mobile";if(KX(_))return"tablet";if(q&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var B5={};j1(B5,{uploadWorkspaceFile:()=>w2,uploadMedia:()=>z7,updateWorkspaceFile:()=>QE,updateScheduledTask:()=>B7,submitAdaptiveCardAction:()=>J7,streamSidePrompt:()=>YE,stopAutoresearch:()=>eD,steerAgentQueueItem:()=>GE,setWorkspaceVisibility:()=>Q5,setAgentThoughtVisibility:()=>VE,sendPeerAgentMessage:()=>iD,sendAgentMessage:()=>z1,searchPosts:()=>RD,saveWorkspaceSettings:()=>U7,saveWebPushSubscription:()=>O7,saveUiState:()=>N7,saveQuickActionsSettings:()=>F7,saveEnvironmentOverride:()=>M2,restoreChatBranch:()=>dD,respondToAgentRequest:()=>D6,reorderAgentQueueItem:()=>ZE,renameWorkspaceFile:()=>P7,renameChatJid:()=>nD,renameChatBranch:()=>hD,removeAgentQueueItem:()=>jE,reindexWorkspace:()=>T7,purgeChatBranch:()=>rD,pruneChatBranch:()=>pD,moveWorkspaceEntry:()=>f7,mergeChatBranchIntoParent:()=>lD,getWorkspaceTree:()=>K5,getWorkspaceRawUrl:()=>L5,getWorkspaceIndexStatus:()=>w7,getWorkspaceFileStat:()=>I7,getWorkspaceFileDownloadUrl:()=>T2,getWorkspaceFile:()=>x7,getWorkspaceDownloadUrl:()=>x2,getWorkspaceBranch:()=>y7,getWebPushPublicKey:()=>E7,getTimeline:()=>l$,getThumbnailUrl:()=>k7,getThread:()=>SD,getSystemMetrics:()=>Q7,getScheduledTasks:()=>L7,getQuickActionsSettings:()=>V5,getPostsByHashtag:()=>K7,getMediaUrl:()=>u1,getMediaText:()=>KE,getMediaInfo:()=>y2,getMediaBlob:()=>M7,getEnvironmentSettings:()=>H7,getChatBranches:()=>mD,getAutoresearchStatus:()=>tD,getAgents:()=>oD,getAgentThought:()=>qE,getAgentStatus:()=>sD,getAgentQueueState:()=>$E,getAgentModels:()=>w4,getAgentContext:()=>aD,getAgentCommands:()=>q5,getActiveChatAgents:()=>vD,forkChatBranch:()=>cD,dismissAutoresearch:()=>_E,deleteWorkspaceFile:()=>R7,deleteWebPushSubscription:()=>W7,deletePost:()=>bD,createWorkspaceFile:()=>C7,createRootChatSession:()=>D7,createReply:()=>gD,createPost:()=>uD,completeInstanceOobe:()=>XE,attachWorkspaceFile:()=>LE,addToWhitelist:()=>A7,SSEClient:()=>I2});async function r0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(l_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw q7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(q7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function LX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function fD(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let V=Z.split(`

`);Z=V.pop()||"";for(let K of V){let L=LX(K);if(L)$(L.event,L.data)}}Z+=G.decode();let X=LX(Z);if(X)$(X.event,X.data)}async function l$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return r0(G)}async function K7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function RD(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",V=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",L=Y?.images?"&images=1":"",Q=Y?.attachments?"&attachments=1":"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${V}${K}${L}${Q}`)}async function SD(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function Q7(){return r0("/agent/system-metrics")}async function L7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return r0(`/agent/scheduled-tasks${j}`)}async function B7(_,$,j={}){return r0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function N7(_){return r0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function uD(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function gD(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function bD(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return r0(Z,{method:"DELETE"})}async function z1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:QX()}};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return r0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function q5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return r0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function V5(){return r0("/agent/settings/quick-actions")}async function F7(_){return r0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function U7(_){return r0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function H7(){return r0("/agent/settings/environment")}async function M2(_){return r0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function vD(){return r0("/agent/active-chats")}async function mD(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${G}`)}async function cD(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function D7(_){return r0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function hD(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function lD(_){return r0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function pD(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function rD(_){return r0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function nD(_,$){return r0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function dD(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function iD(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function E7(){return r0("/agent/push/vapid-public-key")}async function O7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function W7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function oD(){return r0("/agent/roster")}async function sD(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function aD(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function tD(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function eD(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function _E(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function $E(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function jE(_,$=null){let j=await fetch(l_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function GE(_,$=null){let j=await fetch(l_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function ZE(_,$,j=null){let G=await fetch(l_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function XE(_="provider-ready"){return r0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function z7(_){let $=new FormData;$.append("file",_);let j=await fetch(l_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function D6(_,$,j=null){let G=await fetch(l_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function J7(_){let $=await fetch(l_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function YE(_,$={}){let j=await fetch(l_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await fD(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function A7(_,$){let j=await fetch(l_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function qE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function VE(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${l_}/media/${_}`}function k7(_){return`${l_}/media/${_}/thumbnail`}async function y2(_){let $=await fetch(`${l_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function KE(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M7(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function K5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(G)}async function y7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function w7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return r0($)}async function T7(_="all"){return r0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function x7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return r0(Z)}async function I7(_){return r0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function QE(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function LE(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function NE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function FE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function UE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",l_+$);for(let[q,V]of Object.entries(j||{}))if(V!==void 0&&V!==null)Y.setRequestHeader(q,String(V));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let V=Error(q.error||`HTTP ${Y.status}`);V.status=Y.status,V.code=q.code,X(V)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function HE(_,$="",j={}){let G=FE(),Z=NE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(V7,Number(j.chunkSize)||BE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),V=0,K=null;for(let L=0;L<q;L+=1){let Q=L*X,N=Math.min(Y,Q+X),B=_.slice(Q,N),U=B.size;if(K=await UE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":L,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let D=Math.min(Y,V+(E?.loaded||0)),H=Y||1;j.onProgress({loaded:D,total:H,percent:Math.round(D/H*100),chunkIndex:L,chunkTotal:q})}),V+=U,typeof j.onProgress==="function"){let E=Y||1,D=Y?V:E;j.onProgress({loaded:D,total:E,percent:Math.round(D/E*100),chunkIndex:L+1,chunkTotal:q})}}return K}async function w2(_,$="",j={}){if(_?.size>V7){let G=(_.size/1048576).toFixed(0),Z=(V7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await HE(_,$,j)}async function C7(_,$,j=""){let G=await fetch(l_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function P7(_,$){let j=await fetch(l_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function f7(_,$){let j=await fetch(l_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function R7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function Q5(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${l_}/workspace/raw?${j.toString()}`}function T2(_){return L5(_,{download:!0})}function x2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${l_}/workspace/download?${j}`}class I2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(l_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var l_="",V7=1073741824,BE=8388608;var I_=J_(()=>{Y5()});function O6(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=O6(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function i7(){if(typeof window>"u")return null;return O6(window.__piclawSettingsRequestedSection)}function R2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=i7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function n$({children:_,className:$=""}){let[j,G]=P(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{L$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),j6(()=>{if(!j)return;L$(_,j);return},[_,j]),null}var S2=J_(()=>{y0()});function o7(_,$){let j=String(_.label||"").localeCompare(String($.label||""),void 0,{sensitivity:"base"});if(j!==0)return j;return String(_.id||"").localeCompare(String($.id||""),void 0,{sensitivity:"base"})}function d$(_){let $=x4.findIndex((j)=>j.id===_.id);if($>=0)x4[$]=_;else x4.push(_);x4.sort(o7)}function tX(_){let $=x4.findIndex((j)=>j.id===_);if($>=0)x4.splice($,1)}function eX(){return[...x4]}function s7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var x4;var W6=J_(()=>{x4=[]});function vE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(I4,{detail:{enabled:Boolean(_)}}))}function jY(_){if(typeof fetch!=="function")return;N7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function mE(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(g2,{detail:{collapsed:Boolean(_)}}))}function O5(_=!1){return F$(_Y,_)}function GY(_=!1){return F$($Y,_)}function u2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)L_(_Y,Z?"true":"false");if(G)jY({enabled:Z});return vE(Z),Z}function a7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)L_($Y,Z?"true":"false");if(G)jY({collapsed:Z});return mE(Z),Z}function t7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")u2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!O5(!1);u2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")a7(Boolean(_.collapsed),{persistServer:!1})}var _Y="piclaw_system_meters_enabled",$Y="piclaw_system_meters_collapsed",I4="piclaw-meters-change",g2="piclaw-meters-collapsed-change";var b2=J_(()=>{I_()});function ZY(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function XY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function W$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=ZY(_,$);return XY(Z,{min:j,max:G})}function cE(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=W$(_,{fallback:G,min:Z,max:X}),q=Math.abs(ZY(j,1))||1,V=Number($)<0?-1:1;return XY(Y+V*q,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:V}){let K=Number.isFinite(Number(Z))?Number(Z):W$(_,{fallback:0,min:$,max:j}),[L,Q]=P(String(_??K)),N=g(!1);u(()=>{if(!N.current)Q(String(_??K))},[_,K]);let B=R((E)=>{N.current=!1;let D=W$(E,{fallback:K,min:$,max:j});Q(String(D)),V?.(D)},[K,$,j,V]),U=R((E)=>{N.current=!1;let D=cE(_,{direction:E,step:G,fallback:K,min:$,max:j});Q(String(D)),V?.(D)},[K,j,$,V,G,_]);return F`
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
                value=${L}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(E)=>{N.current=!0,Q(E.target.value)}}
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
    `}var C4=J_(()=>{y0()});function YY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function qY({value:_,onChange:$}){let j=g(null),[G,Z]=P(YY(_));u(()=>{Z(YY(_))},[_]);let X=R((Y)=>{let q=Y.target.files?.[0];if(!q)return;let V=new FileReader;V.onload=()=>{let K=V.result;Z(K),$?.(K)},V.readAsDataURL(q)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function VY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}async function hE(_,$={}){let j=typeof _==="string"?_:"";if(!j)return!1;let G=$.navigator??(typeof navigator<"u"?navigator:null),Z=$.document??(typeof document<"u"?document:null);if(G?.clipboard?.writeText)try{return await G.clipboard.writeText(j),!0}catch(X){}try{if(!Z?.body||typeof Z.createElement!=="function"||typeof Z.execCommand!=="function")return!1;let X=Z.createElement("textarea");X.value=j,X.setAttribute?.("readonly",""),X.style.position="fixed",X.style.left="-9999px",X.style.top="0",X.style.opacity="0",Z.body.appendChild(X),X.focus?.(),X.select?.();let Y=Boolean(Z.execCommand("copy"));return Z.body.removeChild(X),Y}catch(X){return!1}}function e7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(""),[X,Y]=P(""),[q,V]=P(""),[K,L]=P(""),[Q,N]=P(32),[B,U]=P(256),[E,D]=P(""),[H,k]=P(!1),[z,W]=P(!1),[I,x]=P(!1),[A,M]=P(()=>O5(!1)),[O,y]=P(!1),T=g(""),J=g(null),C=g(!0);u(()=>{return C.current=!0,()=>{C.current=!1}},[]);let f=R((G0)=>{let $0=VY(G0);Z($0.userName),Y($0.userAvatar),V($0.assistantName),L($0.assistantAvatar),N($0.composeUploadLimitMb),U($0.workspaceUploadLimitMb),D(G0?.widgetToken||""),T.current=JSON.stringify($0)},[]);u(()=>{f(_||{})},[_,f]),u(()=>{let G0=($0)=>{M(Boolean($0?.detail?.enabled))};return window.addEventListener(I4,G0),()=>window.removeEventListener(I4,G0)},[]);let b=Y0(()=>JSON.stringify(VY({userName:G,userAvatar:X,assistantName:q,assistantAvatar:K,composeUploadLimitMb:Q,workspaceUploadLimitMb:B})),[G,X,q,K,Q,B]);u(()=>{if(b===T.current)return;if(J.current)clearTimeout(J.current);return J.current=setTimeout(async()=>{if(!C.current)return;let G0=document.activeElement;if(G0&&G0.closest?.(".settings-number-stepper"))return;try{let $0=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:b}),q0=await $0.json().catch(()=>({}));if(!C.current)return;if(!$0.ok||!q0?.ok||!q0?.settings)return;T.current=b,j?.(q0.settings),y(!0),setTimeout(()=>{if(C.current)y(!1)},4000)}catch($0){console.warn("[settings/general] Failed to persist general settings snapshot.",$0)}},800),()=>{if(J.current)clearTimeout(J.current)}},[b,j]);let m=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},l=R(async()=>{if(!E)return;if(await hE(E))W(!0),setTimeout(()=>{if(C.current)W(!1)},3000);else $?.("Could not copy widget token. Select the token field and copy manually."),console.warn("[settings/general] Failed to copy widget token. Clipboard APIs unavailable or blocked.")},[E,$]),_0=R(async()=>{if(I)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;x(!0);try{let G0=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),$0=await G0.json().catch(()=>({}));if(!G0.ok||!$0?.ok||!$0?.settings)throw Error($0?.error||"Failed to regenerate widget token.");D($0.settings.widgetToken||""),j?.($0.settings),y(!0),setTimeout(()=>{if(C.current)y(!1)},4000)}catch(G0){console.warn("[settings/general] Failed to regenerate widget token.",G0)}finally{if(C.current)x(!1)}},[I,j]),v=typeof window<"u"&&window.isSecureContext,e=E?"•".repeat(Math.min(Math.max(E.length,16),48)):"—",O0=H?E||"—":e;return F`
        <div class="settings-section">
            ${O&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${qY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(G0)=>Z(G0.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${qY} value=${K} onChange=${L} />
                <input type="text" value=${q} onInput=${(G0)=>V(G0.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${v?F`
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
                        onChange=${()=>{let G0=u2(!A);M(G0)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${Q}
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
                        <code class="settings-keychain-reveal-value settings-widget-token-value">${O0}</code>
                        <button class=${`settings-keychain-reveal-btn${H?" active":""}`}
                            type="button"
                            onClick=${()=>k((G0)=>!G0)}
                            disabled=${!E}
                            title=${H?"Hide token":"Reveal token"}>
                            ${H?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                        </button>
                        <button class="settings-keychain-copy-btn" type="button" onClick=${l} disabled=${!E} title="Copy token">
                            ${z?F`<span class="settings-widget-token-copied">Copied</span>`:F`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`}
                        </button>
                        <button class="settings-keychain-prompt-submit settings-widget-token-regenerate" type="button" onClick=${_0} disabled=${I}>${I?"Regenerating…":"Regenerate"}</button>
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
                ${m.configured?F`
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
    `}var KY=J_(()=>{y0();b2();C4()});var LY={};j1(LY,{SessionsSection:()=>lE});function QY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function lE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(!0),[X,Y]=P(16),[q,V]=P(4000),[K,L]=P(3),[Q,N]=P(64),[B,U]=P("none"),[E,D]=P(!1),H=g(""),k=g(null),z=g(!0);u(()=>{return z.current=!0,()=>{z.current=!1}},[]);let W=R((x)=>{let A=QY(x);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),V(A.sessionMaxLines),L(A.sessionMaxCompactions),N(A.toolUseBudget),U(A.sessionIsolation),H.current=JSON.stringify(A)},[]);u(()=>{W(_||{})},[_,W]);let I=Y0(()=>JSON.stringify(QY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:K,toolUseBudget:Q,sessionIsolation:B})),[G,X,q,K,Q,B]);return u(()=>{if(I===H.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!z.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:I}),M=await A.json().catch(()=>({}));if(!z.current)return;if(!A.ok||!M?.ok||!M?.settings)return;H.current=I,j?.(M.settings),D(!0),setTimeout(()=>{if(z.current)D(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(k.current)clearTimeout(k.current)}},[I,j]),F`
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
                    value=${Q}
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
    `}var BY=J_(()=>{y0();C4()});var NY={};j1(NY,{CompactionSection:()=>rE});function pE(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function _9(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function rE({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(180),[X,Y]=P(15),[q,V]=P(360),[K,L]=P(75),[Q,N]=P(0.5),[B,U]=P(!1),[E,D]=P(120),[H,k]=P([]),[z,W]=P([]),[I,x]=P(!1),A=g(""),M=g(null),O=g(!0);u(()=>{return O.current=!0,()=>{O.current=!1}},[]);let y=R((C)=>{let f=pE(C);Z(f.compactionTimeoutSec),Y(f.compactionBackoffBaseMin),V(f.compactionBackoffMaxMin),L(f.compactionThresholdPercent),N(f.compactionBackoffDecayFactor),U(f.progressWatchdogEnabled),D(f.progressWatchdogTimeoutSec),k(f.compactionBackoffs),W(f.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);u(()=>{y(_||{})},[_,y]);let T=Y0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:K,compactionBackoffDecayFactor:Q,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:E}),[G,X,q,K,Q,B,E]);u(()=>{if(T===A.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!O.current)return;let C=document.activeElement;if(C&&C.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),b=await f.json().catch(()=>({}));if(!O.current)return;if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to save compaction settings.","error");return}A.current=T,j?.(b.settings),y({..._||{},...b.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(O.current)x(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),O.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(M.current)clearTimeout(M.current)}},[T,j,$,y,_]);let J=R(async(C)=>{try{$?.(`Clearing compaction suppression for ${C}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:C})}),b=await f.json().catch(()=>({}));if(!f.ok||!b?.ok||!b?.settings){$?.(b?.error||"Failed to clear compaction suppression.","error");return}j?.(b.settings),y({..._||{},...b.settings||{}}),$?.(`Cleared compaction suppression for ${C}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[y,j,$,_]);return F`
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
                    value=${K}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${L}
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
                    value=${Math.round(Q*100)}
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
                    onChange=${D}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?F`
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
                            ${H.map((C)=>F`
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
    `}var FY=J_(()=>{y0();C4()});function HY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=iE[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(oE.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function z6(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=dE[Y];if(q){G[q]=!0;continue}if(G.key)return null;let V=HY(X);if(!V||V==="escape")return null;G.key=V}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function DY(_){return String(_||"").split(/[\n,]/).map(($)=>z6($)).filter(($)=>Boolean($))}function o$(_){return _.join(", ")}function j9(){let _=U2(UY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>z6(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function $9(_){if(L_(UY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function EY(_){return nE.get(_)}function W5(_){let $=j9()[_];if(Array.isArray($))return $;return[...EY(_).defaultBindings]}function OY(_,$){let j=j9(),G=EY(_).defaultBindings,Z=[...new Set($.map((X)=>z6(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;$9(j)}function G9(_){if(!_){$9({});return}let $=j9();delete $[_],$9($)}function v2(){let _={};for(let $ of i$)_[$.id]=W5($.id);return _}function sE(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return HY($)||$.toLowerCase()}function aE(_){let $=z6(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function tE(_,$){let j=aE($);if(!j)return!1;if(sE(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function z$(_,$){return W5($).some((j)=>tE(_,j))}var UY="piclaw_keyboard_shortcuts_v1",i$,nE,dE,iE,oE;var m2=J_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],nE=new Map(i$.map((_)=>[_.id,_])),dE={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},iE={esc:"escape",return:"enter",spacebar:"space"},oE=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var WY={};j1(WY,{KeyboardSection:()=>_O});function eE(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function _O({filter:_="",setStatus:$}){let[j,G]=P(()=>{let V=v2();return Object.fromEntries(Object.entries(V).map(([K,L])=>[K,o$(L)]))});u(()=>{let V=()=>{let K=v2();G(Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,o$(Q)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",V),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",V)},[]);let Z=Y0(()=>i$.filter((V)=>{let K=String(j[V.id]||"");return eE(_,V,K)}),[j,_]),X=(V)=>{let K=String(j[V]||"").trim(),Q=(K?K.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!z6(B));if(Q.length>0){$?.(`Invalid shortcut: ${Q[0]}. Escape is reserved and cannot be rebound.`,"error");return}let N=DY(K);OY(V,N),G((B)=>({...B,[V]:o$(W5(V))})),$?.("Keyboard shortcuts saved.","success")},Y=(V)=>{G9(V),G((K)=>({...K,[V]:o$(W5(V))})),$?.("Keyboard shortcut reset to default.","success")};return F`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{G9();let V=v2();G(Object.fromEntries(Object.entries(V).map(([K,L])=>[K,o$(L)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((V)=>F`
                    <div class="settings-shortcut-card" key=${V.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${V.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${V.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${o$(V.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[V.id]||""}
                                placeholder=${o$(V.defaultBindings)}
                                onInput=${(K)=>G((L)=>({...L,[V.id]:K.target.value}))}
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
    `}var zY=J_(()=>{y0();m2()});function JY(_,$=Z9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function AY(_,$=X9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function J6(){return{refreshIntervalSec:JY(O4(h2,Z9),Z9),folderPreviewDepth:AY(O4(l2,X9),X9)}}function kY(_={}){let $=J6(),j={refreshIntervalSec:JY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:AY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(L_(h2,String(j.refreshIntervalSec)),L_(l2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(c2,{detail:{settings:j}}));return j}var c2="piclaw:workspace-client-settings-updated",h2="workspaceRefreshIntervalSec",l2="workspaceFolderPreviewDepth",Z9=60,X9=3;var Y9=()=>{};var yY={};j1(yY,{WorkspaceSection:()=>$O});function MY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function $O({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=P(!0),[X,Y]=P(!0),[q,V]=P(4),[K,L]=P(5000),[Q,N]=P(60),[B,U]=P(3),[E,D]=P(!1),[H,k]=P(!1),z=g(""),W=g(null),I=g(null),x=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{if(A.current=!1,W.current)clearTimeout(W.current);if(I.current)clearTimeout(I.current);if(x.current)clearTimeout(x.current)}},[]);let M=R((T)=>{let J=MY(T),C=J6();Z(J.webTerminalEnabled),Y(J.vncAllowDirect),V(J.treeMaxDepth),L(J.treeMaxEntries),N(C.refreshIntervalSec),U(C.folderPreviewDepth),z.current=JSON.stringify(J)},[]);u(()=>{M(_||{})},[_,M]);let O=Y0(()=>JSON.stringify(MY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:K}})),[G,X,q,K]);u(()=>{if(O===z.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!A.current)return;let T=document.activeElement;if(T&&T.closest?.(".settings-number-stepper"))return;try{let J=await U7(JSON.parse(O));if(!A.current||!J?.ok||!J?.settings)return;if(z.current=O,j?.({workspaceSettings:J.settings}),$?.(null),D(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(A.current)D(!1)},4000)}catch(J){$?.(String(J?.message||J),"error")}},800),()=>{if(W.current)clearTimeout(W.current)}},[O,j,$]);let y=R((T)=>{let J=kY(T);if(N(J.refreshIntervalSec),U(J.folderPreviewDepth),k(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(A.current)k(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(T)=>Z(T.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(T)=>Y(T.target.checked)} />
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
                    value=${K}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${L}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${v_}
                    label="workspace refresh interval"
                    value=${Q}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(T)=>y({refreshIntervalSec:T})}
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
                    onChange=${(T)=>y({folderPreviewDepth:T})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var wY=J_(()=>{y0();I_();Y9();C4()});var TY={};j1(TY,{EnvironmentSection:()=>jO});function q9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function jO({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=P(()=>q9(_||{})),[Y,q]=P({}),[V,K]=P(""),[L,Q]=P(""),[N,B]=P(null);u(()=>{X(q9(_||{})),q({})},[_]);let U=R((W)=>{let I=q9({environmentSettings:W?.settings||W});return X(I),G?.({environmentSettings:I}),q({}),I},[G]),E=R(async()=>{try{let W=await H7();if(W?.ok)U(W.settings);j?.("Environment refreshed.","info")}catch(W){j?.(String(W?.message||W),"error")}},[U,j]),D=R(async(W,I)=>{let x=String(W||"").trim();if(!x)return;B(x);try{let A=await M2({action:"set",name:x,value:String(I??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===V.trim())K(""),Q("")}catch(A){j?.(String(A?.message||A),"error")}finally{B(null)}},[U,V,j]),H=R(async(W)=>{let I=String(W||"").trim();if(!I)return;B(I);try{let x=await M2({action:"clear",name:I});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${I}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{B(null)}},[U,j]),k=Y0(()=>{let W=String($||"").trim().toLowerCase(),I=Array.isArray(Z.variables)?Z.variables:[];if(!W)return I;return I.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(W)})},[Z.variables,$]),z=R((W,I)=>{q((x)=>({...x||{},[W]:I}))},[]);return F`
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
                        onInput=${(W)=>K(W.target.value)}
                    />
                    <input
                        type="text"
                        value=${L}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(W)=>Q(W.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!V.trim()||N===V.trim()}
                        onClick=${()=>D(V,L)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${k.map((W)=>{let I=String(W?.name||""),x=Object.prototype.hasOwnProperty.call(Y,I)?Y[I]:W.value,A=x!==W.value,M=N===I;return F`
                        <div class="settings-tool-row" key=${I} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${I}>${I}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(O)=>z(I,O.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${W.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${W.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${M||!A} onClick=${()=>D(I,x)}>Save</button>
                                <button type="button" disabled=${M||!W.overridden} onClick=${()=>H(I)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${k.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var xY=J_(()=>{y0();I_()});var IY={};j1(IY,{ProvidersSection:()=>ZO});function GO(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function ZO({providers:_,setStatus:$}){let[j,G]=P(null),[Z,X]=P(null),[Y,q]=P({}),V=R((D,H)=>{q((k)=>({...k,[D]:H}))},[]),K=R(async(D)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(D),$?.(`Configuring ${D}…`,"info");try{let k=JSON.stringify({provider:D,method:"api_key",api_key:H}),z=await z1("default",`/login __step2 ${k}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${D} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),L=R(async(D,H)=>{G(D),$?.(`Configuring ${D}…`,"info");try{let k={provider:D,method:"custom"};for(let I of H.customFields||[])k[I.key]=(Y[I.key]||"").trim();let z=JSON.stringify(k),W=await z1("default",`/login __step2 ${z}`,null,[]);if(W?.command?.status==="error"){$?.(W.command.message,"error");return}$?.(W?.command?.message||`${D} configured.`,"success"),X(null),q({})}catch(k){$?.(String(k.message||k),"error")}finally{G(null)}},[Y,$]),Q=R(async(D)=>{G(D),$?.(`Starting OAuth for ${D}…`,"info");try{let H=JSON.stringify({provider:D}),z=(await z1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(z.includes("http")){let W=z.match(/(https?:\/\/[^\s)]+)/);if(W)window.open(W[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(z,"success")}else $?.(z||`OAuth flow started for ${D}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),N=R(async(D)=>{if(j)return;G(D),$?.(`Logging out ${D}…`,"info");try{await z1("default",`/logout ${D}`,null,[]),$?.(`Logged out ${D}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),B=_||[],U=(D)=>Z===D,E=(D)=>{X((H)=>H===D?null:D),q({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((D)=>F`
                    <div class=${`settings-provider-card${D.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!D.configured&&E(D.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${D.name}</strong>
                                <span class="settings-provider-id">${D.id}</span>
                                ${D.configured&&F`<span class="settings-tag settings-tag-skill">${GO(D.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${D.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${D.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${D.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${D.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),N(D.id)}}
                                    >${j===D.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(D.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${D.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===D.id}
                                            onClick=${()=>Q(D.id)}>
                                            ${j===D.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${D.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>V("apiKey",H.target.value)}
                                                placeholder=${D.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>K(D.id)}>
                                                ${j===D.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${D.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(D.customFields||[]).map((H)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(k)=>V(H.key,k.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id}
                                                onClick=${()=>L(D.id,D)}>
                                                ${j===D.id?"Configuring…":"Save configuration"}
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
    `}var CY=J_(()=>{y0();I_()});var PY={};j1(PY,{ModelsSection:()=>KO});function qO(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function VO({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=qO(j)?XO:YO,q=G&&G.length>1?G:["off","minimal","low","medium","high"],V=Math.max(0,q.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[V]]||q[V]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${V} disabled=${X}
                    onInput=${(K)=>Z(q[parseInt(K.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((K,L)=>F`<span class=${L===V?"active":""} onClick=${()=>!X&&Z(K)}>${Y[K]||K}</span>`)}
                </div>
            </div>
        </div>
    `}function KO({filter:_=""}){let[$,j]=P(null),[G,Z]=P(!1),[X,Y]=P("off"),[q,V]=P(!1),[K,L]=P(["off"]),[Q,N]=P(!1),B=R(async()=>{let x=await w4();if(j(x),x.thinking_level)Y(x.thinking_level);if(V(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)L(x.available_thinking_levels);return x},[]);u(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=R(async(x)=>{if(G)return;Z(!0);try{await z1("default",`/model ${x}`,null,[]),await B()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,B]),E=R(async(x)=>{if(Q)return;N(!0),Y(x);try{let A=await z1("default",`/thinking ${x}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);V(A?.command?.supports_thinking!==!1),await B()}catch(A){console.error("Failed to set thinking:",A),await B().catch((M)=>{})}finally{N(!1)}},[Q,B]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let D=$.model_options||[],H=$.current,z=D.find((x)=>x.label===H)?.provider||"",W=_.toLowerCase(),I=W?D.filter((x)=>x.label.toLowerCase().includes(W)||(x.provider||"").toLowerCase().includes(W)):D;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${I.map((x)=>F`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
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
                <${VO}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${z}
                    availableLevels=${K}
                    onSetLevel=${E}
                    disabled=${Q||G} />
            </div>
        </div>
    `}var XO,YO;var fY=J_(()=>{y0();I_();XO={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},YO={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var SY={};j1(SY,{ThemeSection:()=>QO});function RY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function QO({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=P("default"),[q,V]=P(""),[K,L]=P(!1),Q=g(""),N=g(null),B=g(!0);u(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=R((z)=>{let W=RY(z);Y(W.uiTheme),V(W.uiTint),Q.current=JSON.stringify(W)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=R((z,W)=>{F6({theme:z,tint:W||null}),Y(z||"default"),V(W||"")},[]),D=Y0(()=>JSON.stringify(RY({uiTheme:X,uiTint:q})),[X,q]);u(()=>{if(D===Q.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!B.current)return;L(!0);try{let z=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:D}),W=await z.json().catch(()=>({}));if(!B.current)return;if(!z.ok||!W?.ok||!W?.settings){G?.(W?.error||"Failed to save appearance settings.","error");return}Q.current=D,Z?.(W.settings),G?.("Appearance synced across clients.","success")}catch(z){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",z),G?.("Failed to save appearance settings.","error")}finally{if(B.current)L(!1)}},250),()=>{if(N.current)clearTimeout(N.current)}},[D,Z,G]);let H=$||[],k=_||[];return F`
        <div class="settings-section">
            ${K&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
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
                        onInput=${(z)=>{let W=z.target.value;if(V(W),X==="default")F6({theme:"default",tint:W})}} />
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
                        ${H.map((z)=>F`<th class="settings-swatch-header">${z.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${k.filter((z)=>z.name!=="default").map((z)=>F`
                        <tr class=${z.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(z.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${z.name===X} onChange=${()=>E(z.name,"")} /></td>
                            <td><strong>${z.label}</strong></td>
                            <td>${z.mode}</td>
                            ${H.map((W)=>{let I=z.colors?.[W];return F`<td class="settings-swatch-cell">
                                    ${I?F`<span class="settings-color-swatch" style=${"background:"+I} title=${I}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var uY=J_(()=>{y0();_5()});var bY={};j1(bY,{__scheduledTasksSettingsTest:()=>HO,ScheduledTasksSection:()=>UO});function P4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function gY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function V9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${P4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function K9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function Q9(_){return(_?.task_kind||"agent")==="internal"}function BO(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function A6({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function NO({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${A6} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${P4(j.run_at)}</span>
                        <span>${gY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||BO(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function FO({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=Q9(_);return F`
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
                <span>Kind</span><strong>${K9(_)}</strong>
                <span>Schedule</span><strong>${V9(_)}</strong>
                <span>Next run</span><strong>${P4(_.next_run)}</strong>
                <span>Last run</span><strong>${P4(_.last_run)}</strong>
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
            <${NO} task=${_} />
        </div>
    `}function UO({filter:_="",setStatus:$}){let[j,G]=P([]),[Z,X]=P({active:0,paused:0,completed:0}),[Y,q]=P("all"),[V,K]=P(""),[L,Q]=P(!0),[N,B]=P(null),[U,E]=P(null),[D,H]=P(null),[k,z]=P(!1),W=R(async(O={})=>{Q(!0),B(null);try{let y=await L7({status:Y,chatJid:V.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(y.tasks||[]),X(y.counts||{active:0,paused:0,completed:0});let T=O.selectedId||U,J=(y.tasks||[]).find((C)=>C.id===T)||(y.tasks||[])[0]||null;E(J?.id||null),H(J)}catch(y){B(y?.message||"Failed to load scheduled tasks.")}finally{Q(!1)}},[Y,V,U]);u(()=>{W()},[W]);let I=String(_||"").trim().toLowerCase(),x=Y0(()=>{if(!I)return j;return j.filter((O)=>[O.id,O.chat_jid,O.status,O.task_kind,O.schedule_type,O.schedule_value,O.summary,O.prompt_summary,O.command_summary,O.latest_run_log?.error_summary].some((y)=>String(y||"").toLowerCase().includes(I)))},[j,I]),A=R((O)=>{E(O?.id||null),H(O||null)},[]),M=R(async(O,y)=>{if(!y||k)return;let T=Q9(y),J=y.summary||y.command_summary||y.prompt_summary||y.id,C=O==="delete"?`Delete scheduled task ${y.id}?

${J}`:`${O==="pause"?"Pause":"Resume"} scheduled task ${y.id}?

${J}`;if(!window.confirm(C))return;if(T&&!window.confirm(`Task ${y.id} is internal/protected. Continue with ${O}?`))return;z(!0),$?.(`${O==="delete"?"Deleting":O==="pause"?"Pausing":"Resuming"} ${y.id}…`,"info");try{await B7(O,y.id,{allowInternal:T}),$?.(`Scheduled task ${y.id} ${O==="delete"?"deleted":O==="pause"?"paused":"resumed"}.`,"success"),await W({selectedId:O==="delete"?null:y.id})}catch(f){$?.(f?.message||`Failed to ${O} task.`,"error")}finally{z(!1)}},[k,W,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${A6} type="active">Active ${Z.active||0}<//>
                    <${A6} type="paused">Paused ${Z.paused||0}<//>
                    <${A6} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(O)=>q(O.target.value)}>
                        ${LO.map((O)=>F`<option value=${O}>${O==="all"?"All statuses":O}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${V} onInput=${(O)=>K(O.target.value)} />
                    <button onClick=${()=>W()} disabled=${L}>Refresh</button>
                </div>
            </div>

            ${L&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${N&&F`<div class="settings-error-state">${N}</div>`}
            ${!L&&!N&&j.length===0&&F`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!L&&!N&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${x.map((O)=>F`
                            <button class=${`settings-task-row ${O.id===U?"active":""}`} onClick=${()=>A(O)}>
                                <span class="settings-task-row-main">
                                    <strong>${O.summary||O.id}</strong>
                                    <span>${V9(O)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${A6} type=${O.status||"neutral"}>${O.status}<//>
                                    <${A6}>${K9(O)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${P4(O.next_run)} · Last ${P4(O.last_run)}${O.latest_run_log?.status?` · ${O.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${x.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${FO} task=${D&&x.some((O)=>O.id===D.id)?D:x[0]} onAction=${M} />
                </div>
            `}
        </div>
    `}var LO,HO;var vY=J_(()=>{y0();I_();LO=["all","active","paused","completed"];HO={formatDateTime:P4,formatDuration:gY,labelForSchedule:V9,kindLabel:K9,isProtectedTask:Q9}});function mY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function k6(_){return typeof _==="string"&&_.trim().length>0}function L9(_,...$){let j=mY(_);if(!j)return!0;let G=$.map((Z)=>mY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function cY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function a$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:cY($.workspaceCommands),slashCommands:cY($.slashCommands)}}function hY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function DO(_){let $=Array.isArray(_?.commands)?_.commands:[],j=a$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>hY(j.workspaceCommands,Z.id)).filter((Z)=>L9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function EO(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=k6(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>L9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=k6(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=k6(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function OO(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=a$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=k6(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),hY(j.slashCommands,Y)}).filter((X)=>L9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=k6(X?.description)?X.description.trim():"slash command",V=k6(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:V||"Slash",actionHint:"Insert",commandName:Y}})}function lY(_){return[...EO({agents:_?.agents,query:_?.query}),...DO({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...OO({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var s$;var B9=J_(()=>{s$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var nY={};j1(nY,{QuickActionsSection:()=>WO});function pY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function rY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function WO({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=P(()=>s$.map((x)=>x.id)),[X,Y]=P([]),[q,V]=P([]),[K,L]=P(!0),[Q,N]=P(!1),B=R(async()=>{L(!0);try{let[x,A]=await Promise.all([V5(),q5("web:default").catch(()=>({commands:[]}))]),M=a$(x?.settings),O=Array.isArray(A?.commands)?A.commands:[];V(O),Z(Array.isArray(M.workspaceCommands)?M.workspaceCommands:s$.map((y)=>y.id)),Y(Array.isArray(M.slashCommands)?M.slashCommands:O.map((y)=>String(y?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{L(!1)}},[$]);u(()=>{B()},[B]);let U=Y0(()=>rY(G),[G]),E=Y0(()=>rY(X),[X]),D=Y0(()=>s$.filter((x)=>pY(_,x.label,x.description,...x.keywords||[])),[_]),H=Y0(()=>q.filter((x)=>pY(_,x?.name,x?.description,x?.source)),[q,_]),k=R((x)=>{Z((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return s$.map((O)=>O.id).filter((O)=>M.has(O))})},[]),z=R((x)=>{Y((A)=>{let M=new Set((Array.isArray(A)?A:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(M.has(x))M.delete(x);else M.add(x);return q.map((O)=>String(O?.name||"").trim()).filter((O)=>O&&M.has(O))})},[q]),W=R(()=>{Z(s$.map((x)=>x.id)),Y(q.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[q]),I=R(async()=>{if(Q)return;N(!0),$?.("Saving quick actions…","info");try{let x=await F7({workspaceCommands:G,slashCommands:X}),A=a$(x?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{N(!1)}},[j,Q,$,X,G]);if(K)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${W} disabled=${Q}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${I} disabled=${Q}>
                    ${Q?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${D.map((x)=>{let A=U?U.has(x.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>k(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let A=String(x?.name||"").trim(),M=E?E.has(A.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${M} onChange=${()=>z(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var dY=J_(()=>{y0();I_();B9()});var iY={};j1(iY,{KeychainSection:()=>AO});function zO(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function AO({filter:_=""}){let[$,j]=P([]),[G,Z]=P(!0),[X,Y]=P(null),[q,V]=P(!1),[K,L]=P(""),[Q,N]=P(""),[B,U]=P(""),[E,D]=P(""),[H,k]=P(""),[z,W]=P("secret"),[I,x]=P(!1),[A,M]=P({}),[O,y]=P(null),[T,J]=P(null),[C,f]=P(null),b=g(null),m=g(null),l=g(null),_0=R(async()=>{Z(!0),Y(null);try{let X0=await(await fetch("/agent/keychain")).json();if(X0?.ok)j(X0.entries||[]);else Y(X0?.error||"Failed to load keychain.")}catch(s){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{_0()},[_0]);let v=R(async()=>{let s=K.trim(),X0=Q;if(!s||!X0)return;x(!0);try{let C0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,secret:X0,type:z,username:B.trim()||void 0,userNote:E,agentNote:H})})).json();if(C0?.ok)L(""),N(""),U(""),D(""),k(""),W("secret"),V(!1),await _0();else Y(C0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[K,Q,B,E,H,z,_0]),e=R(async(s)=>{try{let E0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})})).json();if(E0?.ok)J(null),f((C0)=>C0?.name===s?null:C0),await _0();else Y(E0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[_0]),O0=R(async(s)=>{let X0=s?.name;if(!X0)return;let E0=A[X0]||{},C0=Object.prototype.hasOwnProperty.call(E0,"userNote")?E0.userNote:s.userNote||"",g0=Object.prototype.hasOwnProperty.call(E0,"agentNote")?E0.agentNote:s.agentNote||"";y(X0);try{let j_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X0,userNote:C0,agentNote:g0})})).json();if(j_?.ok)M((c0)=>{let d0={...c0||{}};return delete d0[X0],d0}),await _0();else Y(j_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{y(null)}},[A,_0]),G0=R((s,X0,E0)=>{M((C0)=>({...C0||{},[s]:{...(C0||{})[s]||{},[X0]:E0}}))},[]),$0=R(async(s,X0,E0)=>{try{let g0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,master_password:X0||void 0,totp_code:E0||void 0})})).json();if(g0?.ok)f({name:s,phase:"revealed",secret:g0.secret,username:g0.username,masterPassword:X0});else if(g0?.needs_master_password)f((n0)=>({name:s,phase:"password",masterPassword:"",error:n0?.name===s&&n0?.masterPassword?g0.error:null})),requestAnimationFrame(()=>m.current?.focus());else if(g0?.needs_totp)f((n0)=>({name:s,phase:"totp",masterPassword:X0,totpCode:"",error:n0?.name===s&&n0?.phase==="totp"&&n0?.totpCode?g0.error:null})),requestAnimationFrame(()=>l.current?.focus());else f({name:s,phase:"error",error:g0?.error||"Failed to reveal."})}catch{f({name:s,phase:"error",error:"Failed to reveal."})}},[]),q0=R((s)=>{if(C?.name===s&&C?.phase==="revealed"){f(null);return}$0(s,null,null)},[C,$0]),N0=R((s)=>{let X0=C?.masterPassword||"";if(!X0)return;$0(s,X0,null)},[C,$0]),t=R((s)=>{let X0=C?.totpCode||"";if(X0.length<6)return;$0(s,C?.masterPassword,X0)},[C,$0]),K0=R(async(s)=>{try{await navigator.clipboard.writeText(s)}catch{let X0=document.createElement("textarea");X0.value=s,X0.style.position="fixed",X0.style.opacity="0",document.body.appendChild(X0),X0.select(),document.execCommand("copy"),document.body.removeChild(X0)}},[]);u(()=>{if(q)requestAnimationFrame(()=>b.current?.focus())},[q]);let Q0=_.toLowerCase(),k0=Y0(()=>{if(!Q0)return $;return $.filter((s)=>s.name.toLowerCase().includes(Q0)||(s.type||"").toLowerCase().includes(Q0)||(s.envVar||"").toLowerCase().includes(Q0)||(s.userNote||"").toLowerCase().includes(Q0)||(s.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${k0.length} entr${k0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
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
                            value=${K} onInput=${(s)=>L(s.target.value)}
                            class="settings-keychain-input" />
                        <select value=${z} onChange=${(s)=>W(s.target.value)}
                            class="settings-keychain-select">
                            ${JO.map((s)=>F`<option value=${s}>${s}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${Q} onInput=${(s)=>N(s.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(s)=>U(s.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${v}
                            disabled=${I||!K.trim()||!Q}>
                            ${I?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(s)=>D(s.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(s)=>k(s.target.value)}
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
                        ${k0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${k0.map((s)=>{let X0=C?.name===s.name?C:null,E0=X0?.phase==="revealed",C0=X0?.phase==="password",g0=X0?.phase==="totp",n0=X0?.phase==="error",j_=A[s.name]||{},c0=Object.prototype.hasOwnProperty.call(j_,"userNote")?j_.userNote:s.userNote||"",d0=Object.prototype.hasOwnProperty.call(j_,"agentNote")?j_.agentNote:s.agentNote||"",u0=c0!==(s.userNote||"")||d0!==(s.agentNote||""),o0=O===s.name;return F`
                            <tr class="settings-keychain-row" key=${s.name}>
                                <td class="settings-keychain-name">${s.name}</td>
                                <td><span class="settings-keychain-type-badge">${s.type}</span></td>
                                <td class="settings-keychain-env">${s.envVar?F`<code>$${s.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${zO(s.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${E0?" active":""}`}
                                        onClick=${()=>q0(s.name)}
                                        title=${E0?"Hide secret":"Reveal secret"}>
                                        ${E0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${T===s.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>e(s.name)}>Yes</button>
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
                                                onInput=${(v0)=>G0(s.name,"userNote",v0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${d0}
                                                onInput=${(v0)=>G0(s.name,"agentNote",v0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!u0||o0} onClick=${()=>O0(s)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${C0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${m} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${X0?.masterPassword||""}
                                                onInput=${(v0)=>f((a0)=>({...a0,masterPassword:v0.target.value}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")N0(s.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>N0(s.name)}
                                                disabled=${!X0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${g0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${l} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${X0?.totpCode||""}
                                                onInput=${(v0)=>f((a0)=>({...a0,totpCode:v0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(v0)=>{if(v0.key==="Enter")t(s.name);if(v0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>t(s.name)}
                                                disabled=${(X0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${X0?.error&&F`<span class="settings-keychain-prompt-error">${X0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${E0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${X0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${X0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>K0(X0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${X0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>K0(X0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${n0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${X0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var JO;var oY=J_(()=>{y0();JO=["secret","token","password","basic"]});var sY={};j1(sY,{ToolsSection:()=>TO});function TO({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=P(()=>{let N={};for(let B of Z)N[B.name]=!0;return N}),q=R((N)=>{Y((B)=>({...B,[N]:!B[N]}))},[]),V=j?.searchMatchMode||"or",K=R(async()=>{let N=V==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:N})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[V,G]),L=$.toLowerCase(),Q=Y0(()=>{if(!L)return Z;return Z.map((N)=>{let B=N.tools.filter((U)=>U.name.toLowerCase().includes(L)||N.name.toLowerCase().includes(L)||(U.summary||"").toLowerCase().includes(L));return B.length>0?{...N,tools:B}:null}).filter(Boolean)},[Z,L]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${V==="and"} onChange=${K} />
                        <span class="settings-hint" style="margin:0">
                            ${V==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${Q.map((N)=>{let B=X[N.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>q(N.name)} />
                            <span class="settings-toolset-icon">${kO[N.name]||wO}</span>
                            <strong>${N.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${N.description}</span>
                    </div>
                    ${B&&F`<div class="settings-tool-list">${N.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${yO[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${MO[U.name]||N.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${Q.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var kO,MO,yO,wO;var aY=J_(()=>{y0();kO={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},MO={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},yO={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},wO=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var tY={};j1(tY,{AddonsSection:()=>xO});function xO({setStatus:_,filter:$=""}){let[j,G]=P(null),[Z,X]=P(!0),[Y,q]=P(null),[V,K]=P(!1),[L,Q]=P({runtime:"",windowsNative:!1}),[N,B]=P([]),[U,E]=P([]);function D(){let O=new URLSearchParams;try{let T=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),J=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),C=localStorage.getItem("piclaw_addons_repo_url");if(T)O.append("catalog_url",T);for(let f of J)O.append("catalog_url",f);if(C)O.set("repo_url",C)}catch(T){}let y=O.toString();return y?`?${y}`:""}let H=R(async()=>{try{let[O,y]=await Promise.all([fetch(`/agent/addons${D()}`),fetch("/agent/settings-data")]),T=await O.json();if(T.error)throw Error(T.error);G(T.addons||[]),B(T.sources||[]),E(T.failed_sources||[]);let J=await y.json().catch(()=>({})),C=typeof J?.runtimePlatform==="string"?J.runtimePlatform:"";Q({runtime:C,windowsNative:C==="win32"})}catch(O){G(null),_?.(String(O.message||O),"error")}finally{X(!1)}},[_]);u(()=>{H()},[]);let k=R(async(O)=>{if(Y)return;q({slug:O,action:"install"}),_?.(`Installing ${O}…`,"info");try{let T=await(await fetch(`/agent/addons/install${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let J=[T.message,T.warning].filter(Boolean).join(" ");_?.(J||"Add-on installed.","success"),await H()}catch(y){_?.(String(y.message||y),"error")}finally{q(null)}},[Y,H,_]),z=R(async(O)=>{if(Y)return;q({slug:O,action:"remove"}),_?.(`Removing ${O}…`,"info");try{let T=await(await fetch(`/agent/addons/uninstall${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(T.error){_?.(T.error,"error");return}K(!0);let J=[T.message,T.warning].filter(Boolean).join(" ");_?.(J||"Add-on removed.","success"),await H()}catch(y){_?.(String(y.message||y),"error")}finally{q(null)}},[Y,H,_]),W=R(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let y=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(y.error){_?.(y.error,"error"),q(null);return}_?.(y.message||"Restarting piclaw…","success"),K(!1),(async(J=30,C=2000)=>{for(let f=0;f<J;f++){await new Promise((b)=>setTimeout(b,C));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(b){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(O){_?.(String(O.message||O),"error"),q(null)}},[Y,_,H]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let I=$.toLowerCase(),x=I?j.filter((O)=>O.slug.toLowerCase().includes(I)||(O.description||"").toLowerCase().includes(I)||(O.tags||[]).some((y)=>y.toLowerCase().includes(I))):j,A=Y?.slug||null,M=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
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
                            ${U.map((O)=>F` <code style="font-size:0.82em;word-break:break-all">${O}</code>`)}
                        </div>
                    `}
                    ${N.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${N.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${N.map((O)=>F`<li style="word-break:break-all"><code>${O}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${L.windowsNative&&F`
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
                ${x.map((O)=>{let y=(O.skills||[]).length>0,T=O.type==="extension",J=y&&T?"extension + skill":y?"skill":"extension",C=y&&!T?"settings-tag-skill":"",f=typeof O.homepage==="string"&&O.homepage.trim()?O.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${O.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?F`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${O.slug}</a>`:F`<strong>${O.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${C}`}>${J}</span>
                            <span class="settings-addon-version">${O.installed?O.installedVersion||"?":O.version||""}</span>
                            ${O.installKind&&F`<span class="settings-tag">${O.installKind}</span>`}
                            ${O.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${O.version}</span>`}
                            <div class="settings-addon-actions">
                                ${O.installed?F`
                                    ${O.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>k(O.slug)}>${A===O.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>z(O.slug)}>${A===O.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>k(O.slug)}>${A===O.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${O.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(O.tags||[]).map((b)=>F`<span class="settings-tag">${b}</span>`)}${(O.skills||[]).map((b)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${b}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${V&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${W}>Restart Now</button>
                </div>
            `}
        </div>
    `}var eY=J_(()=>{y0()});var uO={};function N9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function p2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function IO(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function CO(_,$){try{localStorage.setItem(_,$)}catch(j){}}function PO(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function fO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function RO(){let[_,$]=P(()=>N9("piclaw_vim_mode",!1)),[j,G]=P(()=>N9("piclaw_show_whitespace",!0)),[Z,X]=P(()=>N9("piclaw_md_live_preview",!0)),[Y,q]=P(()=>PO("piclaw_editor_font_size",13,10,24)),[V,K]=P(()=>IO("piclaw_editor_font_family","")),L=R((Q,N,B)=>{let U=!N;B(U),p2(Q,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Q=!_;$(Q),p2("piclaw_vim_mode",Q)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let Q=!j;G(Q),p2("piclaw_show_whitespace",Q)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Q=!Z;X(Q),p2("piclaw_md_live_preview",Q)}} />
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
                    onChange=${(Q)=>{q(Q),fO("piclaw_editor_font_size",Q)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${V}
                    onInput=${(Q)=>{let N=Q.target.value;K(N),CO("piclaw_editor_font_family",N)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var SO;var _q=J_(()=>{y0();W6();C4();SO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;d$({id:"editor",label:"Editor",icon:SO,component:RO,order:150})});var cO={};function $q(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function jq(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function gO(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function bO(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function vO(){let[_,$]=P(()=>$q("piclaw_mindmap_auto_expand",!0)),[j,G]=P(()=>gO("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=P(()=>$q("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),jq("piclaw_mindmap_auto_expand",Y)}} />
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
                    onChange=${(Y)=>{G(Y),bO("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),jq("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var mO;var Gq=J_(()=>{y0();W6();C4();mO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;d$({id:"mindmap",label:"Mind Map",icon:mO,component:vO,order:170})});var pO={};function F9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function U9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function H9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function D9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function hO(){let[_,$]=P(()=>F9("piclaw_dev_mode",!1)),[j,G]=P(()=>H9("piclaw_addons_catalog_url","")),[Z,X]=P(()=>H9("piclaw_addons_catalog_urls","")),[Y,q]=P(()=>H9("piclaw_addons_repo_url","")),[V,K]=P(()=>F9("piclaw_debug_sse",!1)),[L,Q]=P(()=>F9("piclaw_debug_tool_calls",!1)),N=R(()=>{let B=!_;$(B),U9("piclaw_dev_mode",B)},[_]);return F`
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
                        onInput=${(B)=>{let U=B.target.value;G(U),D9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),D9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;q(U),D9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${V}
                        onChange=${()=>{let B=!V;K(B),U9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${L}
                        onChange=${()=>{let B=!L;Q(B),U9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var lO;var Zq=J_(()=>{y0();W6();lO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;d$({id:"developer",label:"Developer",icon:lO,component:hO,order:900})});var Kq={};j1(Kq,{openSettingsDialog:()=>QW,SettingsDialogContent:()=>Vq,SettingsDialog:()=>KW});function J5(_){z5.push({ts:performance.now(),label:_})}function rO(){if(!z5.length)return;let _=z5[0].ts,$=z5.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}z5.length=0}function iO(_){let $=d2.get(_);if($)return Promise.resolve($);let j=r2.get(_);if(j)return j;let G=nO[_]().then((Z)=>{return d2.set(_,Z),r2.delete(_),Z}).catch((Z)=>{throw r2.delete(_),Z});return r2.set(_,G),G}function n2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function Vq({onClose:_}){J5("SettingsDialogContent-render-start");let[$,j]=P(()=>i7()||"general"),[G,Z]=P(Xq),[X,Y]=P(null),[q,V]=P(""),[,K]=P(0),[L,Q]=P(()=>Object.fromEntries(d2.entries())),[N,B]=P(null),[U,E]=P({compact:!1,narrow:!1}),D=g(null),H=g(null);u(()=>{J5("SettingsDialogContent-mounted"),rO()},[]),u(()=>{let J=(C)=>{if(C.key==="Escape")_()};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[_]),u(()=>{let J=(C)=>{let f=typeof C?.detail?.section==="string"?C.detail.section.trim():"";if(f)j(f),V("")};return window.addEventListener("piclaw:open-settings",J),()=>window.removeEventListener("piclaw:open-settings",J)},[]),u(()=>{let J=()=>K((C)=>C+1);return window.addEventListener("piclaw:settings-panes-changed",J),()=>window.removeEventListener("piclaw:settings-panes-changed",J)},[]),u(()=>{fetch("/agent/settings-data").then((J)=>J.json()).then((J)=>{Xq=J,Z(J)}).catch(()=>Z({}))},[]),u(()=>{let J=H.current;if(!J)return;let C=()=>{let f=J.clientWidth||0;E((b)=>{let m={compact:f>0&&f<=860,narrow:f>0&&f<=720};return b.compact===m.compact&&b.narrow===m.narrow?b:m})};if(C(),typeof ResizeObserver==="function"){let f=new ResizeObserver(()=>C());return f.observe(J),()=>f.disconnect()}return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);let k=[...qq].sort((J,C)=>(J.order??500)-(C.order??500)),W=eX().map((J)=>({id:J.id,label:J.label,icon:J.icon,searchable:J.searchable||!1,placeholder:J.searchPlaceholder,order:J.order??500,isExtension:!0,component:J.component})).sort(o7),I=[...k,...W],x=I.find((J)=>J.id===$)||qq.find((J)=>J.id===$);u(()=>{if(x?.searchable)requestAnimationFrame(()=>D.current?.focus())},[$]),u(()=>{if(x?.isExtension){B(null);return}let J=!1;if(L[$]){B(null);return}return B($),iO($).then((C)=>{if(J)return;Q((f)=>f?.[$]?f:{...f||{},[$]:C})}).catch((C)=>{if(J)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,C)}).finally(()=>{if(!J)B((C)=>C===$?null:C)}),()=>{J=!0}},[$,x?.isExtension,L]);let A=R((J,C="info")=>{Y(J?{text:J,type:C}:null)},[]),M=R((J)=>{j(J),V("");let C=dO[J];if(C&&!Yq.has(J))Yq.add(J),C().then(()=>K((f)=>f+1)).catch((f)=>{})},[]),O=R((J)=>{Z((C)=>({...C||{},...J||{}}))},[]),y=()=>{if(x?.isExtension){if(!x.component)return n2("Loading pane…");let C=x.component;return F`<${C} filter=${q} />`}let J=L[$];if(!J||N===$)return n2(`Loading ${x?.label||"settings"}…`);switch($){case"general":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${O} />`;case"sessions":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${O} />`;case"compaction":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${O} />`;case"keyboard":return F`<${J} filter=${q} setStatus=${A} />`;case"workspace":return F`<${J} settingsData=${G} setStatus=${A} mergeSettingsData=${O} />`;case"environment":return F`<${J} settingsData=${G} filter=${q} setStatus=${A} mergeSettingsData=${O} />`;case"providers":return F`<${J} providers=${G?.providers} setStatus=${A} />`;case"models":return F`<${J} filter=${q} />`;case"theme":return F`<${J} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${A} mergeSettingsData=${O} />`;case"scheduled-tasks":return F`<${J} filter=${q} setStatus=${A} />`;case"quick-actions":return F`<${J} filter=${q} setStatus=${A} mergeSettingsData=${O} />`;case"keychain":return F`<${J} filter=${q} />`;case"tools":return F`<${J} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${O} />`;case"addons":return F`<${J} setStatus=${A} filter=${q} />`;default:return n2("Loading settings…")}},T=!x;return J5("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(J)=>{if(J.target===J.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${x?.searchable&&F`
                        <input ref=${D} type="text" class="settings-header-filter"
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
                        ${T?n2("Loading settings…"):y()}
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
    `}function KW(){let[_,$]=P(!1);if(u(()=>{let j=(Z)=>{let X=O6(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=R2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${n$} className="settings-portal"><${Vq} onClose=${()=>$(!1)} /><//>`}function QW(_={}){o1(_)}var z5,Xq=null,d2,r2,nO,dO,Yq,oO,sO,aO,tO,eO,_W,$W,jW,GW,ZW,XW,YW,qW,VW,qq;var Qq=J_(()=>{y0();S2();W6();KY();z5=[];J5("module-eval-start");J5("imports-done");d2=new Map,r2=new Map;d2.set("general",e7);nO={general:()=>Promise.resolve(e7),sessions:()=>Promise.resolve().then(() => (BY(),LY)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (FY(),NY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (zY(),WY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (wY(),yY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (xY(),TY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (CY(),IY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (fY(),PY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (uY(),SY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (vY(),bY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (dY(),nY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (oY(),iY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (aY(),sY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (eY(),tY)).then((_)=>_.AddonsSection)},dO={"editor-settings":()=>Promise.resolve().then(() => (_q(),uO)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (Gq(),cO)).then(()=>{}),developer:()=>Promise.resolve().then(() => (Zq(),pO)).then(()=>{})},Yq=new Set;oO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,sO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,aO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,tO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,eO=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,_W=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,$W=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,jW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,GW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,ZW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,XW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,YW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,qW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,VW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,qq=[{id:"general",label:"General",icon:oO,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:sO,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:aO,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:_W,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:tO,searchable:!1,order:15},{id:"environment",label:"Environment",icon:eO,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:$W,searchable:!1,order:20},{id:"models",label:"Models",icon:jW,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:GW,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:ZW,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:YW,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:qW,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:XW,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:VW,searchable:!0,placeholder:"Filter add-ons…",order:90}]});y0();class JG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X_=new JG;var j2=null,D3=null;function cF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function AG(){if(D3)return Promise.resolve(D3);if(!j2)j2=import(cF()).then((_)=>{return D3=_,_}).catch((_)=>{throw j2=null,_});return j2}class kG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await AG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var E3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new kG(_,$)}};function O3(){AG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function MG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function G2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var yG="piclaw:editor-popout:",hF=300000;function wG(_){try{return _?.localStorage??null}catch{return null}}function lF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function TG(_){return typeof _==="string"?_.trim():""}function xG(_){return(typeof _==="string"?_.trim():"")||null}function IG(_){return typeof _==="string"?_:void 0}function CG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function PG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function G6(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function pF(_,$=globalThis,j=Date.now()){let G=wG($),Z=TG(_?.path);if(!G||!Z)return null;let X={path:Z,content:IG(_?.content),mtime:CG(_?.mtime),paneOverrideId:xG(_?.paneOverrideId),viewState:PG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=lF(j);try{return G.setItem(`${yG}${q}`,JSON.stringify(X)),q}catch{return null}}function W3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=wG($);if(!G||!Z)return null;let X=`${yG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;G2(Z,X);try{let q=JSON.parse(Y),V=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(V+hF<j)return null;let K=TG(q?.path);if(!K)return null;return{path:K,content:IG(q?.content),mtime:CG(q?.mtime),paneOverrideId:xG(q?.paneOverrideId),viewState:PG(q?.viewState),capturedAt:V}}catch{return null}}function Z2(_,$=globalThis,j=Date.now()){let G=pF(_,$,j);return G?{editor_popout:G}:null}function w1(_){try{return _(),!0}catch($){return!1}}function fG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:V}=_;w1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),w1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),w1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),w1(()=>{q?.disconnect?.()}),w1(()=>{V?.disconnect?.()})}function RG(_){_.syncHostLayout(),w1(()=>{_.terminal?.renderer?.remeasureFont?.()}),w1(()=>{_.fitAddon?.fit?.()}),w1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function SG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)w1(()=>{j($)});return w1(()=>{G?.close?.()}),w1(()=>{Z?.dispose?.()}),w1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function l1(_){try{return _(),!0}catch($){return!1}}function uG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(l1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let V=j?.querySelector?.(".terminal-live-host");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=Z.background,V.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),l1(()=>{if(G?.options)G.options.theme=Z}),X)l1(()=>{G?.reset?.()});l1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),l1(()=>{G?.loadFonts?.()}),l1(()=>{G?.renderer?.remeasureFont?.()}),l1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),l1(()=>{q?.()}),l1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),l1(()=>{G?.refresh?.()})}var rF="/static/js/vendor/ghostty-web.js",nF="/static/js/vendor/ghostty-vt.wasm",X6="piclaw://terminal",dF='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',iF='400 13px "FiraCode Nerd Font Mono"',oF='700 13px "FiraCode Nerd Font Mono"',hG="x-piclaw-terminal-client",gG="piclaw_terminal_client",sF={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},aF={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},X2=null,z3=null;function tF(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function eF(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(nF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!tF(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function _U(){let $=await import(new URL(rF,window.location.origin).href);if(!X2)X2=eF(()=>Promise.resolve($.init?.())).catch((j)=>{throw X2=null,j});return await X2,$}async function $U(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!z3)z3=Promise.allSettled([document.fonts.load(iF),document.fonts.load(oF),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await z3}function bG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function A3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(gG)||"").trim():"";if(j)return j;let G=bG(_);return $?.setItem?.(gG,G),G}catch($){return bG(_)}}async function jU(_=A3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[hG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function GU(_=A3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[hG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function ZU(_,$=null,j=A3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function XU(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function F4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function Z6(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function vG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function n6(_,$){let j=vG(_),G=vG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function lG(_){let $=Z6(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return n6($,j)>=n6($,G)?"#ffffff":"#000000"}function Y2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function mG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=Z6(_),Z=Z6($);if(!G||!Z)return $;if(n6(G,Z)>=j)return Y2(Z);let X=Z6(lG(_));if(!X)return Y2(Z);let Y=X,q=1,V=0,K=1;for(let N=0;N<14;N+=1){let B=(V+K)/2,U=mG(Z,X,B);if(n6(G,U)>=j)Y=U,q=B,K=B;else V=B}let L=Y2(Y),Q=Z6(L);while(Q&&n6(G,Q)<j&&q<1)q=Math.min(1,q+0.01),L=Y2(mG(Z,X,q)),Q=Z6(L);return L}function YU(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function cG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=XU(_,$),G=j?aF:sF,Z=F4("--bg-primary",j?"#000000":"#ffffff",$),X=F4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||lG(Z),7),q=F4("--accent-color","#1d9bf0",$),V=F4("--danger-color",j?"#ff7b72":"#cf222e",$),K=F4("--success-color",j?"#7ee787":"#1a7f37",$),L=F4("--bg-hover",j?"#1d1f23":"#e8ebed",$),Q=F4("--accent-soft-strong",YU(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,q,3),cursorAccent:Z,selectionBackground:Q,selectionForeground:Y,black:G1(Z,L,3),red:G1(Z,V,4.5),green:G1(Z,K,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,q,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function pG(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function J3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function qU(_){if(pG(_.ownerDocument),J3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();J3(_.terminal,_.terminalHost||null)}class k3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=G6("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await _U();if(await $U(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:dF,fontSize:13,theme:cG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);pG(this.ownerDocument),await j.open($),$.__terminal=j,J3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=cG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;uG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=GU().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await jU();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(ZU($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){fG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");qU({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){RG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=SG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var M3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new k3(_,$)}},y3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===X6?1e4:!1},mount(_,$){return new k3(_,$)}};function f1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function q2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function rG(_,$={}){if(f1($))return null;if(q2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:VU(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function w3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function T3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function x3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function I3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function T1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function C3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function nG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let V=String(Y||"").trim();if(!V)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(V);else G.searchParams.set(V,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function VU(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function KU(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function dG(_,$={}){if(f1($))return null;if(q2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:KU(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function U4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function QU(_){try{return JSON.parse(_)}catch{return null}}function LU(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function BU(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function iG(_){try{return _?.close?.(),!0}catch($){return!1}}class P3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;iG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=BU($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||QU;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,iG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=LU($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var d6=()=>{throw Error("Operation requires compiling with --exportRuntime")},NU=typeof BigUint64Array<"u",i6=Symbol();var FU=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function oG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return FU.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function sG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return oG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,V){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${q}:${V}`)},G.trace=G.trace||function(X,Y,...q){let V=$.memory||G.memory;console.log(`trace: ${j(V,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function aG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||d6,Y=j.__pin||d6,q=j.__unpin||d6,V=j.__collect||d6,K=j.__rtti_base,L=K?(y)=>y[K>>>2]:d6;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=V;function Q(y){let T=new Uint32Array(G.buffer);if((y>>>=0)>=L(T))throw Error(`invalid id: ${y}`);return T[(K+4>>>2)+y]}function N(y){let T=Q(y);if(!(T&7))throw Error(`not an array: ${y}, flags=${T}`);return T}function B(y){return 31-Math.clz32(y>>>6&31)}function U(y){if(y==null)return 0;let T=y.length,J=X(T<<1,2),C=new Uint16Array(G.buffer);for(let f=0,b=J>>>1;f<T;++f)C[b+f]=y.charCodeAt(f);return J}_.__newString=U;function E(y){if(y==null)return 0;let T=new Uint8Array(y),J=X(T.length,1);return new Uint8Array(G.buffer).set(T,J),J}_.__newArrayBuffer=E;function D(y){if(!y)return null;let T=G.buffer;if(new Uint32Array(T)[y+-8>>>2]!==2)throw Error(`not a string: ${y}`);return oG(T,y)}_.__getString=D;function H(y,T,J){let C=G.buffer;if(J)switch(y){case 2:return new Float32Array(C);case 3:return new Float64Array(C)}else switch(y){case 0:return new(T?Int8Array:Uint8Array)(C);case 1:return new(T?Int16Array:Uint16Array)(C);case 2:return new(T?Int32Array:Uint32Array)(C);case 3:return new(T?BigInt64Array:BigUint64Array)(C)}throw Error(`unsupported align: ${y}`)}function k(y,T=0){let J=T,C=N(y),f=B(C),b=typeof J!=="number",m=b?J.length:J,l=X(m<<f,C&4?y:1),_0;if(C&4)_0=l;else{Y(l);let v=X(C&2?16:12,y);q(l);let e=new Uint32Array(G.buffer);if(e[v+0>>>2]=l,e[v+4>>>2]=l,e[v+8>>>2]=m<<f,C&2)e[v+12>>>2]=m;_0=v}if(b){let v=H(f,C&2048,C&4096),e=l>>>f;if(C&16384)for(let O0=0;O0<m;++O0)v[e+O0]=J[O0];else v.set(J,e)}return _0}_.__newArray=k;function z(y){let T=new Uint32Array(G.buffer),J=T[y+-8>>>2],C=N(J),f=B(C),b=C&4?y:T[y+4>>>2],m=C&2?T[y+12>>>2]:T[b+-4>>>2]>>>f;return H(f,C&2048,C&4096).subarray(b>>>=f,b+m)}_.__getArrayView=z;function W(y){let T=z(y),J=T.length,C=Array(J);for(let f=0;f<J;f++)C[f]=T[f];return C}_.__getArray=W;function I(y){let T=G.buffer,J=new Uint32Array(T)[y+-4>>>2];return T.slice(y,y+J)}_.__getArrayBuffer=I;function x(y){if(!Z)throw Error("Operation requires compiling with --exportTable");let T=new Uint32Array(G.buffer)[y>>>2];return Z.get(T)}_.__getFunction=x;function A(y,T,J){return new y(M(y,T,J))}function M(y,T,J){let C=G.buffer,f=new Uint32Array(C);return new y(C,f[J+4>>>2],f[J+8>>>2]>>>T)}function O(y,T,J){_[`__get${T}`]=A.bind(null,y,J),_[`__get${T}View`]=M.bind(null,y,J)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((y)=>{O(y,y.name,31-Math.clz32(y.BYTES_PER_ELEMENT))}),NU)[BigUint64Array,BigInt64Array].forEach((y)=>{O(y,y.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,HU(j,_)}function tG(_){return typeof Response<"u"&&_ instanceof Response}function UU(_){return _ instanceof WebAssembly.Module}async function f3(_,$={}){if(tG(_=await _))return V2(_,$);let j=UU(_)?_:await WebAssembly.compile(_),G=sG($),Z=await WebAssembly.instantiate(j,$),X=aG(G,Z);return{module:j,instance:Z,exports:X}}async function V2(_,$={}){if(!WebAssembly.instantiateStreaming)return f3(tG(_=await _)?_.arrayBuffer():_,$);let j=sG($),G=await WebAssembly.instantiateStreaming(_,$),Z=aG(j,G.instance);return{...G,exports:Z}}function HU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let q=X[0],V=q.indexOf("#");if(V>=0){let K=q.substring(0,V),L=Y[K];if(typeof L>"u"||!L.prototype){let Q=function(...N){return Q.wrap(Q.prototype.constructor(0,...N))};if(Q.prototype={valueOf(){return this[i6]}},Q.wrap=function(N){return Object.create(Q.prototype,{[i6]:{value:N,writable:!1}})},L)Object.getOwnPropertyNames(L).forEach((N)=>Object.defineProperty(Q,N,Object.getOwnPropertyDescriptor(L,N)));Y[K]=Q}if(q=q.substring(V+1),Y=Y[K].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let Q=_[G.replace("set:","get:")],N=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return Q(this[i6])},set(B){N(this[i6],B)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...Q){return j(Q.length),Z(...Q)}).original=Z;else(Y[q]=function(...Q){return j(Q.length),Z(this[i6],...Q)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[q]=Z}return $}function R3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var EU="/static/js/vendor/remote-display-decoder.wasm",K2=null;function eG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function _Z(){if(K2)return K2;return K2=(async()=>{try{let G=function(Z,X,Y,q,V,K,L){let Q=eG(X),N=j.__pin(j.__newArrayBuffer(Q));try{return j[Z](N,Y,q,V,K,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift)}finally{j.__unpin(N),R3(j)}},_=await fetch(EU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof V2==="function"?await V2(_,{}):await f3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,V,K){return G("processRawRect",Z,X,Y,q,V,K)},processCopyRect(Z,X,Y,q,V,K){return j.processCopyRect(Z,X,Y,q,V,K)},processRreRect(Z,X,Y,q,V,K){return G("processRreRect",Z,X,Y,q,V,K)},processHextileRect(Z,X,Y,q,V,K){return G("processHextileRect",Z,X,Y,q,V,K)},processZrleTileData(Z,X,Y,q,V,K){return G("processZrleTileData",Z,X,Y,q,V,K)},decodeRawRectToRgba(Z,X,Y,q){let V=eG(Z),K=j.__pin(j.__newArrayBuffer(V));try{let L=j.__pin(j.decodeRawRectToRgba(K,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(L))}finally{j.__unpin(L)}}finally{j.__unpin(K),R3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),K2}function Y6(_,$,j){return Math.max($,Math.min(j,_))}function Q2(_,$,j){let G=new Uint8Array(6),Z=Y6(Math.floor(Number($||0)),0,65535),X=Y6(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=Y6(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function m$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function u3(_){let $=m$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return m$(0);let G=Number(_?.buttons||0);if(G&1)return m$(0);if(G&4)return m$(1);if(G&2)return m$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function $Z(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function OU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function g3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return OU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function jZ(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!g3(_)}function GZ(_){return String(_||"").toLowerCase()!=="mouse"}function b3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/q,L=(Number($||0)-Number(j?.top||0))/V;return{x:Y6(Math.floor(K*X),0,Math.max(0,X-1)),y:Y6(Math.floor(L*Y),0,Math.max(0,Y-1))}}function ZZ(_,$,j,G=0){let Z=Number(_)<0?8:16,X=Y6(Number(G||0)|Z,0,255);return[Q2(X,$,j),Q2(Number(G||0),$,j)]}function XZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function YZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function D4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function qZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),V=Math.min(Z/Y,X/q);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var S3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)S3[`F${_}`]=65470+(_-1);function v3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(S3,X))return S3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,O1=Uint16Array,i3=Int32Array,L2=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),B2=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),p3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),LZ=function(_,$){var j=new O1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new i3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},BZ=LZ(L2,2),NZ=BZ.b,r3=BZ.r;NZ[28]=258,r3[258]=28;var FZ=LZ(B2,0),WU=FZ.b,VZ=FZ.r,n3=new O1(32768);for(N_=0;N_<32768;++N_)r1=(N_&43690)>>1|(N_&21845)<<1,r1=(r1&52428)>>2|(r1&13107)<<2,r1=(r1&61680)>>4|(r1&3855)<<4,n3[N_]=((r1&65280)>>8|(r1&255)<<8)>>1;var r1,N_,n1=function(_,$,j){var G=_.length,Z=0,X=new O1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new O1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new O1(1<<$);var V=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],L=$-_[Z],Q=Y[_[Z]-1]++<<L;for(var N=Q|(1<<L)-1;Q<=N;++Q)q[n3[Q]>>V]=K}}else{q=new O1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=n3[Y[_[Z]-1]++]>>15-_[Z]}return q},c$=new o_(288);for(N_=0;N_<144;++N_)c$[N_]=8;var N_;for(N_=144;N_<256;++N_)c$[N_]=9;var N_;for(N_=256;N_<280;++N_)c$[N_]=7;var N_;for(N_=280;N_<288;++N_)c$[N_]=8;var N_,t6=new o_(32);for(N_=0;N_<32;++N_)t6[N_]=5;var N_,zU=n1(c$,9,0),JU=n1(c$,9,1),AU=n1(t6,5,0),kU=n1(t6,5,1),m3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},R1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},c3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},o3=function(_){return(_+7)/8|0},a6=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var MU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B1=function(_,$,j){var G=Error($||MU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,B1);if(!j)throw G;return G},yU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,q=Y||$.i!=2,V=$.i;if(Y)j=new o_(Z*3);var K=function(X0){var E0=j.length;if(X0>E0){var C0=new o_(Math.max(E0*2,X0));C0.set(j),j=C0}},L=$.f||0,Q=$.p||0,N=$.b||0,B=$.l,U=$.d,E=$.m,D=$.n,H=Z*8;do{if(!B){L=R1(_,Q,1);var k=R1(_,Q+1,3);if(Q+=3,!k){var z=o3(Q)+4,W=_[z-4]|_[z-3]<<8,I=z+W;if(I>Z){if(V)B1(0);break}if(q)K(N+W);j.set(_.subarray(z,I),N),$.b=N+=W,$.p=Q=I*8,$.f=L;continue}else if(k==1)B=JU,U=kU,E=9,D=5;else if(k==2){var x=R1(_,Q,31)+257,A=R1(_,Q+10,15)+4,M=x+R1(_,Q+5,31)+1;Q+=14;var O=new o_(M),y=new o_(19);for(var T=0;T<A;++T)y[p3[T]]=R1(_,Q+T*3,7);Q+=A*3;var J=m3(y),C=(1<<J)-1,f=n1(y,J,1);for(var T=0;T<M;){var b=f[R1(_,Q,C)];Q+=b&15;var z=b>>4;if(z<16)O[T++]=z;else{var m=0,l=0;if(z==16)l=3+R1(_,Q,3),Q+=2,m=O[T-1];else if(z==17)l=3+R1(_,Q,7),Q+=3;else if(z==18)l=11+R1(_,Q,127),Q+=7;while(l--)O[T++]=m}}var _0=O.subarray(0,x),v=O.subarray(x);E=m3(_0),D=m3(v),B=n1(_0,E,1),U=n1(v,D,1)}else B1(1);if(Q>H){if(V)B1(0);break}}if(q)K(N+131072);var e=(1<<E)-1,O0=(1<<D)-1,G0=Q;for(;;G0=Q){var m=B[c3(_,Q)&e],$0=m>>4;if(Q+=m&15,Q>H){if(V)B1(0);break}if(!m)B1(2);if($0<256)j[N++]=$0;else if($0==256){G0=Q,B=null;break}else{var q0=$0-254;if($0>264){var T=$0-257,N0=L2[T];q0=R1(_,Q,(1<<N0)-1)+NZ[T],Q+=N0}var t=U[c3(_,Q)&O0],K0=t>>4;if(!t)B1(3);Q+=t&15;var v=WU[K0];if(K0>3){var N0=B2[K0];v+=c3(_,Q)&(1<<N0)-1,Q+=N0}if(Q>H){if(V)B1(0);break}if(q)K(N+131072);var Q0=N+q0;if(N<v){var k0=X-v,s=Math.min(v,Q0);if(k0+N<0)B1(3);for(;N<s;++N)j[N]=G[k0+N]}for(;N<Q0;++N)j[N]=j[N-v]}}if($.l=B,$.p=G0,$.b=N,$.f=L,B)L=1,$.m=E,$.d=U,$.n=D}while(!L);return N!=j.length&&Y?a6(j,0,N):j.subarray(0,N)},B$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},o6=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},h3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:HZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(I,x){return I.f-x.f}),j.push({s:-1,f:25001});var q=j[0],V=j[1],K=0,L=1,Q=2;j[0]={s:-1,f:q.f+V.f,l:q,r:V};while(L!=Z-1)q=j[j[K].f<j[Q].f?K++:Q++],V=j[K!=L&&j[K].f<j[Q].f?K++:Q++],j[L++]={s:-1,f:q.f+V.f,l:q,r:V};var N=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>N)N=X[G].s;var B=new O1(N+1),U=d3(j[L-1],B,0);if(U>$){var G=0,E=0,D=U-$,H=1<<D;X.sort(function(x,A){return B[A.s]-B[x.s]||x.f-A.f});for(;G<Z;++G){var k=X[G].s;if(B[k]>$)E+=H-(1<<U-B[k]),B[k]=$;else break}E>>=D;while(E>0){var z=X[G].s;if(B[z]<$)E-=1<<$-B[z]++-1;else++G}for(;G>=0&&E;--G){var W=X[G].s;if(B[W]==$)--B[W],++E}U=$}return{t:new o_(B),l:U}},d3=function(_,$,j){return _.s==-1?Math.max(d3(_.l,$,j+1),d3(_.r,$,j+1)):$[_.s]=j},KZ=function(_){var $=_.length;while($&&!_[--$]);var j=new O1(++$),G=0,Z=_[0],X=1,Y=function(V){j[G++]=V};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},s6=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},UZ=function(_,$,j){var G=j.length,Z=o3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},QZ=function(_,$,j,G,Z,X,Y,q,V,K,L){B$($,L++,j),++Z[256];var Q=h3(Z,15),N=Q.t,B=Q.l,U=h3(X,15),E=U.t,D=U.l,H=KZ(N),k=H.c,z=H.n,W=KZ(E),I=W.c,x=W.n,A=new O1(19);for(var M=0;M<k.length;++M)++A[k[M]&31];for(var M=0;M<I.length;++M)++A[I[M]&31];var O=h3(A,7),y=O.t,T=O.l,J=19;for(;J>4&&!y[p3[J-1]];--J);var C=K+5<<3,f=s6(Z,c$)+s6(X,t6)+Y,b=s6(Z,N)+s6(X,E)+Y+14+3*J+s6(A,y)+2*A[16]+3*A[17]+7*A[18];if(V>=0&&C<=f&&C<=b)return UZ($,L,_.subarray(V,V+K));var m,l,_0,v;if(B$($,L,1+(b<f)),L+=2,b<f){m=n1(N,B,0),l=N,_0=n1(E,D,0),v=E;var e=n1(y,T,0);B$($,L,z-257),B$($,L+5,x-1),B$($,L+10,J-4),L+=14;for(var M=0;M<J;++M)B$($,L+3*M,y[p3[M]]);L+=3*J;var O0=[k,I];for(var G0=0;G0<2;++G0){var $0=O0[G0];for(var M=0;M<$0.length;++M){var q0=$0[M]&31;if(B$($,L,e[q0]),L+=y[q0],q0>15)B$($,L,$0[M]>>5&127),L+=$0[M]>>12}}}else m=zU,l=c$,_0=AU,v=t6;for(var M=0;M<q;++M){var N0=G[M];if(N0>255){var q0=N0>>18&31;if(o6($,L,m[q0+257]),L+=l[q0+257],q0>7)B$($,L,N0>>23&31),L+=L2[q0];var t=N0&31;if(o6($,L,_0[t]),L+=v[t],t>3)o6($,L,N0>>5&8191),L+=B2[t]}else o6($,L,m[N0]),L+=l[N0]}return o6($,L,m[256]),L+l[256]},wU=new i3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),HZ=new o_(0),TU=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),V=q.subarray(G,q.length-Z),K=X.l,L=(X.r||0)&7;if($){if(L)V[0]=X.r>>3;var Q=wU[$-1],N=Q>>13,B=Q&8191,U=(1<<j)-1,E=X.p||new O1(32768),D=X.h||new O1(U+1),H=Math.ceil(j/3),k=2*H,z=function(g0){return(_[g0]^_[g0+1]<<H^_[g0+2]<<k)&U},W=new i3(25000),I=new O1(288),x=new O1(32),A=0,M=0,O=X.i||0,y=0,T=X.w||0,J=0;for(;O+2<Y;++O){var C=z(O),f=O&32767,b=D[C];if(E[f]=b,D[C]=f,T<=O){var m=Y-O;if((A>7000||y>24576)&&(m>423||!K)){L=QZ(_,V,0,W,I,x,M,y,J,O-J,L),y=A=M=0,J=O;for(var l=0;l<286;++l)I[l]=0;for(var l=0;l<30;++l)x[l]=0}var _0=2,v=0,e=B,O0=f-b&32767;if(m>2&&C==z(O-O0)){var G0=Math.min(N,m)-1,$0=Math.min(32767,O),q0=Math.min(258,m);while(O0<=$0&&--e&&f!=b){if(_[O+_0]==_[O+_0-O0]){var N0=0;for(;N0<q0&&_[O+N0]==_[O+N0-O0];++N0);if(N0>_0){if(_0=N0,v=O0,N0>G0)break;var t=Math.min(O0,N0-2),K0=0;for(var l=0;l<t;++l){var Q0=O-O0+l&32767,k0=E[Q0],s=Q0-k0&32767;if(s>K0)K0=s,b=Q0}}}f=b,b=E[f],O0+=f-b&32767}}if(v){W[y++]=268435456|r3[_0]<<18|VZ[v];var X0=r3[_0]&31,E0=VZ[v]&31;M+=L2[X0]+B2[E0],++I[257+X0],++x[E0],T=O+_0,++A}else W[y++]=_[O],++I[_[O]]}}for(O=Math.max(O,T);O<Y;++O)W[y++]=_[O],++I[_[O]];if(L=QZ(_,V,K,W,I,x,M,y,J,O-J,L),!K)X.r=L&7|V[L/8|0]<<3,L-=7,X.h=D,X.p=E,X.i=O,X.w=T}else{for(var O=X.w||0;O<Y+K;O+=65535){var C0=O+65535;if(C0>=Y)V[L/8|0]=K,C0=Y;L=UZ(V,L+1,_.subarray(O,C0))}X.i=Y}return a6(q,0,G+o3(L)+Z)};var DZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},xU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return TU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var EZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var IU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=DZ();Z.p($.dictionary),EZ(_,2,Z.d())}},CU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var l3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)B1(5);if(this.d)B1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=yU(this.p,this.s,this.o);this.ondata(a6(G,j,this.s.b),this.d),this.o=a6(G,this.s.b-32768),this.s.b=this.o.length,this.p=a6(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function OZ(_,$){if(!$)$={};var j=DZ();j.p(_);var G=xU(_,$,$.dictionary?6:2,4);return IU(G,$),EZ(G,G.length-4,j.d()),G}var WZ=function(){function _($,j){l3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(l3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(CU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}l3.prototype.c.call(this,j)},_}();var PU=typeof TextDecoder<"u"&&new TextDecoder,fU=0;try{PU.decode(HZ,{stream:!0}),fU=1}catch(_){}var RU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],SU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],uU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],gU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],bU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],vU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],mU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],cU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],AZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;AZ[_]=$}function kZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function MZ(_){let $=0n,j=kZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function hU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function q6(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function zZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function lU(_){let $=q6(MZ(_),bU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of mU){j=zZ(j,X),G=zZ(G,X);let Y=j<<28n|G;Z.push(q6(Y,vU,56))}return Z}function pU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(cU[j][X][Y])}return $}function rU(_,$){let j=q6(_,uU,32)^BigInt($),G=pU(j);return q6(G,gU,32)}function JZ(_,$){let j=lU($),G=q6(MZ(_),RU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let V=X,K=(Z^rU(X,q))&0xffffffffn;Z=V,X=K}let Y=X<<32n|Z;return hU(q6(Y,SU,64),8)}function nU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=AZ[Z]}return j}function yZ(_,$){let j=kZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=nU(_),Z=new Uint8Array(16);return Z.set(JZ(j.slice(0,8),G),0),Z.set(JZ(j.slice(8,16),G),8),Z}var S1="vnc";function dU(_){return Number(_)}function iU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=dU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function Q6(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function oU(_,$){let j=Q6(_),G=Q6($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function sU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=Q6(Z);j.set(X,G),G+=X.byteLength}return j}function aU(){return(_)=>{let $=Q6(_);try{let j=[],G=new WZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return sU(j)}catch(j){try{let G=OZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function tU(_){return new TextEncoder().encode(String(_||""))}function V6(_){return new TextDecoder().decode(Q6(_))}function eU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function _H(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function wZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function $H(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function jH(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function TZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function K6(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function IZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function GH(_,$,j,G){let Z=G||L6,X=Q6(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,L=0;for(let Q=0;Q<Math.max(0,$||0)*Math.max(0,j||0);Q+=1){let N=IZ(X,K,Y,Z.bigEndian),B=K6(N>>>Z.redShift&Z.redMax,Z.redMax),U=K6(N>>>Z.greenShift&Z.greenMax,Z.greenMax),E=K6(N>>>Z.blueShift&Z.blueMax,Z.blueMax);V[L]=B,V[L+1]=U,V[L+2]=E,V[L+3]=255,K+=Y,L+=4}return V}function N$(_,$,j){let G=j||L6,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=IZ(_,$,Z,G.bigEndian);return{rgba:[K6(X>>>G.redShift&G.redMax,G.redMax),K6(X>>>G.greenShift&G.greenMax,G.greenMax),K6(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function h$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let V=0;V<Z;V+=1){let K=((G+q)*$+(j+V))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function CZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let V=q*Z*4,K=((G+q)*$+j)*4;_.set(Y.subarray(V,V+Z*4),K)}}function xZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function ZH(_,$,j,G,Z,X,Y){let q=Z||L6,V=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let L=_.slice($+4,$+4+K),Q;try{Q=Y(L)}catch{return{consumed:4+K,skipped:!0}}let N=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let D=0;D<j;D+=64){let H=Math.min(64,j-D);if(Q.byteLength<N+1)return null;let k=Q[N++],z=k&127,W=(k&128)!==0;if(!W&&z===0){let I=H*E*V;if(Q.byteLength<N+I)return null;let x=X(Q.slice(N,N+I),H,E,q);N+=I,CZ(B,j,D,U,H,E,x);continue}if(!W&&z===1){let I=N$(Q,N,q);if(!I)return null;N+=I.bytesPerPixel,h$(B,j,D,U,H,E,I.rgba);continue}if(!W&&z>1&&z<=16){let I=[];for(let O=0;O<z;O+=1){let y=N$(Q,N,q);if(!y)return null;N+=y.bytesPerPixel,I.push(y.rgba)}let x=z<=2?1:z<=4?2:4,A=Math.ceil(H*x/8),M=A*E;if(Q.byteLength<N+M)return null;for(let O=0;O<E;O+=1){let y=N+O*A;for(let T=0;T<H;T+=1){let J=T*x,C=y+(J>>3),f=8-x-(J&7),b=Q[C]>>f&(1<<x)-1;h$(B,j,D+T,U+O,1,1,I[b])}}N+=M;continue}if(W&&z===0){let I=0,x=0;while(x<E){let A=N$(Q,N,q);if(!A)return null;N+=A.bytesPerPixel;let M=xZ(Q,N);if(!M)return null;N+=M.consumed;for(let O=0;O<M.runLength;O+=1)if(h$(B,j,D+I,U+x,1,1,A.rgba),I+=1,I>=H){if(I=0,x+=1,x>=E)break}}continue}if(W&&z>0){let I=[];for(let M=0;M<z;M+=1){let O=N$(Q,N,q);if(!O)return null;N+=O.bytesPerPixel,I.push(O.rgba)}let x=0,A=0;while(A<E){if(Q.byteLength<N+1)return null;let M=Q[N++],O=M,y=1;if(M&128){O=M&127;let J=xZ(Q,N);if(!J)return null;N+=J.consumed,y=J.runLength}let T=I[O];if(!T)return null;for(let J=0;J<y;J+=1)if(h$(B,j,D+x,U+A,1,1,T),x+=1,x>=H){if(x=0,A+=1,A>=E)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:B,decompressed:Q}}function XH(_,$,j,G,Z){let X=Z||L6,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+V*(Y+8);if(_.byteLength<$+K)return null;let L=$+4,Q=N$(_,L,X);if(!Q)return null;L+=Q.bytesPerPixel;let N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);h$(N,j,0,0,j,G,Q.rgba);for(let B=0;B<V;B+=1){let U=N$(_,L,X);if(!U)return null;if(L+=U.bytesPerPixel,_.byteLength<L+8)return null;let E=new DataView(_.buffer,_.byteOffset+L,8),D=E.getUint16(0,!1),H=E.getUint16(2,!1),k=E.getUint16(4,!1),z=E.getUint16(6,!1);L+=8,h$(N,j,D,H,k,z,U.rgba)}return{consumed:L-$,rgba:N}}function YH(_,$,j,G,Z,X){let Y=Z||L6,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,L=[0,0,0,255],Q=[255,255,255,255];for(let N=0;N<G;N+=16){let B=Math.min(16,G-N);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<K+1)return null;let D=_[K++];if(D&1){let H=E*B*q;if(_.byteLength<K+H)return null;let k=X(_.slice(K,K+H),E,B,Y);K+=H,CZ(V,j,U,N,E,B,k);continue}if(D&2){let H=N$(_,K,Y);if(!H)return null;L=H.rgba,K+=H.bytesPerPixel}if(h$(V,j,U,N,E,B,L),D&4){let H=N$(_,K,Y);if(!H)return null;Q=H.rgba,K+=H.bytesPerPixel}if(D&8){if(_.byteLength<K+1)return null;let H=_[K++];for(let k=0;k<H;k+=1){let z=Q;if(D&16){let y=N$(_,K,Y);if(!y)return null;z=y.rgba,K+=y.bytesPerPixel}if(_.byteLength<K+2)return null;let W=_[K++],I=_[K++],x=W>>4,A=W&15,M=(I>>4)+1,O=(I&15)+1;h$(V,j,U+x,N+A,M,O,z)}}}}return{consumed:K-$,rgba:V}}var L6={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class N2{protocol=S1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:GH,this.pipeline=_.pipeline||null,this.encodings=iU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...L6},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:aU()}receive(_){if(_)this.buffer=oU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=V6(Z),Y=eU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=_H(Y),j.push(tU(this.clientVersionText)),$.push({type:"protocol-version",protocol:S1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let K=V6(this.consume(4+V).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:S1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:S1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let V=V6(this.consume(4+q).slice(4));throw Error(V||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(yZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=V6(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=wZ(Z,4),V=Z.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let K=this.consume(24),L=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=L.getUint16(0,!1),this.framebufferHeight=L.getUint16(2,!1),this.serverPixelFormat=wZ(L,4),this.serverName=V6(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push($H(this.clientPixelFormat)),j.push(jH(this.encodings)),j.push(TZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,V=[],K=!1,L=!!this.pipeline;for(let N=0;N<Y;N+=1){if(this.buffer.byteLength<q+12){K=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=B.getUint16(0,!1),E=B.getUint16(2,!1),D=B.getUint16(4,!1),H=B.getUint16(6,!1),k=B.getInt32(8,!1);if(q+=12,k===0){let z=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),W=D*H*z;if(this.buffer.byteLength<q+W){K=!0;break}let I=this.buffer.slice(q,q+W);if(q+=W,L)this.pipeline.processRawRect(I,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:this.decodeRawRect(I,D,H,this.clientPixelFormat)});continue}if(k===2){let z=XH(this.buffer,q,D,H,this.clientPixelFormat);if(!z){K=!0;break}if(L){let W=this.buffer.slice(q,q+z.consumed);this.pipeline.processRreRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});q+=z.consumed;continue}if(k===1){if(this.buffer.byteLength<q+4){K=!0;break}let z=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),W=z.getUint16(0,!1),I=z.getUint16(2,!1);if(q+=4,L)this.pipeline.processCopyRect(U,E,D,H,W,I),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"copy",x:U,y:E,width:D,height:H,srcX:W,srcY:I});continue}if(k===16){let z=ZH(this.buffer,q,D,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!z){K=!0;break}if(q+=z.consumed,z.skipped)continue;if(L&&z.decompressed)this.pipeline.processZrleTileData(z.decompressed,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});continue}if(k===5){let z=YH(this.buffer,q,D,H,this.clientPixelFormat,this.decodeRawRect);if(!z){K=!0;break}if(L){let W=this.buffer.slice(q,q+z.consumed);this.pipeline.processHextileRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:z.rgba});q+=z.consumed;continue}if(k===-223){if(this.framebufferWidth=D,this.framebufferHeight=H,L)this.pipeline.initFramebuffer(D,H);V.push({kind:"resize",x:U,y:E,width:D,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${k}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(q);let Q={type:"framebuffer-update",protocol:S1,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(L)Q.framebuffer=this.pipeline.getFramebuffer();$.push(Q),j.push(TZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:S1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=V6(this.consume(Y));$.push({type:"clipboard",protocol:S1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function RZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var s3="piclaw:vnc-popout:",qH=60000;function SZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function VH(_=globalThis){let $=MG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function uZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(s3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{G2(_,G)}}function KH(_,$=globalThis,j=Date.now()){let G=D4(_);if(G===null)return null;let Z=SZ($);if(!Z)return null;uZ(Z,j);let X=VH($);try{return Z.setItem(`${s3}${X}`,JSON.stringify({password:G,expiresAt:j+qH})),X}catch{return null}}function QH(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=SZ($);if(!Z)return null;uZ(Z,j);let X=`${s3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),V=Number(q?.expiresAt||0);if(!Number.isFinite(V)||V<=j)return null;return D4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function LH(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:RZ(G)},X=KH($,j);if(X)Z.vnc_secret=X;return Z}function BH(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function NH(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function FH(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function UH(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function HH(_){return String(_||"").trim()||"localhost"}function DH(_,$){let j=HH(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function EH(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function PZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function fZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function OH(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class gZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=BH($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=PZ("vnc_handoff");let j=PZ("vnc_secret"),G=QH(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=EH({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=DH(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=D4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=FH();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
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
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=D4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=D4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=qZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return b3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(Q2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,V=new Set,K=!1,L=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},Q=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let M=this.canvas.getBoundingClientRect?.();if(!M||!M.width||!M.height)return null;return b3(A.clientX,A.clientY,M,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},N=(A)=>{let M=Y.get(A);if(M)G.clearTimeout(M),Y.delete(A)},B=(A)=>{let M=q.get(A);if(M?.holdTimer)G.clearTimeout(M.holdTimer);q.delete(A)},U=()=>{for(let A of q.keys())B(A)},E=()=>{if(!V.size)K=!1},D=(A,M=80)=>{let O=String(A?.pointerType||"").toLowerCase();if(!GZ(O))return;let y=Number(A?.pointerId);if(!Number.isFinite(y))return;N(y);let T=G.setTimeout(()=>{if(Y.delete(y),!Z.has(y)&&!this.pointerButtonMask)return;k({pointerId:y,pointerType:O,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},M);Y.set(y,T)},H=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let O of Y.keys())N(O);U(),V.clear(),K=!1;let M=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,M.x,M.y)},k=(A,M={})=>{if(M.resetAll){let C=Number(A?.pointerId);N(C),H(L(A));try{this.canvas?.releasePointerCapture?.(C)}catch{}return}let O=L(A),y=Number(A?.pointerId);N(y),B(y),V.delete(y),E();let T=Z.has(y),J=Z.get(y)??u3(A);if(!T&&!J&&!this.pointerButtonMask)return;if(Z.delete(y),X.delete(y),J)this.pointerButtonMask&=~J;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,O.x,O.y);try{this.canvas?.releasePointerCapture?.(y)}catch{}},z=(A)=>{if(K)return;let M=q.get(A);if(!M||M.dragActivated)return;M.dragActivated=!0,M.holdTimer=null;let O=m$(0);if(!O)return;Z.set(A,(Z.get(A)??0)|O),this.pointerButtonMask|=O,D({pointerId:A,pointerType:"touch",clientX:M.lastClientX,clientY:M.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,M.lastPoint.x,M.lastPoint.y)},W=(A,M,O={})=>{let y=q.get(A);if(!y)return!1;let T=M||y.lastPoint||{x:0,y:0},J=Number.isFinite(O.clientX)?Number(O.clientX):y.lastClientX,C=Number.isFinite(O.clientY)?Number(O.clientY):y.lastClientY;if(V.delete(A),O.cancelled||K){if(B(A),E(),Z.has(A)||this.pointerButtonMask)H(T);return!0}if(y.dragActivated||Z.has(A))return k({pointerId:A,pointerType:"touch",type:"pointerup",clientX:J,clientY:C}),E(),!0;let f=Date.now()-y.startedAt,b=jZ({startX:y.startClientX,startY:y.startClientY,clientX:J,clientY:C,elapsedMs:f});if(N(A),B(A),X.delete(A),E(),b){let m=m$(0);this.sendPointerEvent(m,T.x,T.y),this.sendPointerEvent(0,T.x,T.y)}else this.sendPointerEvent(this.pointerButtonMask,T.x,T.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let O=String(A?.pointerType||"").toLowerCase(),y=p1(O);if(X.set(A.pointerId,M),y){let T=q.get(A.pointerId);if(T){if(T.lastClientX=Number(A?.clientX||0),T.lastClientY=Number(A?.clientY||0),T.lastPoint=M,!T.dragActivated&&g3({startX:T.startClientX,startY:T.startClientY,clientX:T.lastClientX,clientY:T.lastClientY}))B(A.pointerId),q.set(A.pointerId,{...T,holdTimer:null,dragActivated:!1});if(!T.dragActivated){this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}}if(K)return}if(Z.has(A.pointerId)&&H4(A)){k(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&H4(A)){H(M);return}if(Z.has(A.pointerId))D(A);this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;let O=String(A?.pointerType||"").toLowerCase(),y=p1(O);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,M),y){if(V.add(A.pointerId),V.size>1){let C=[...V];K=!0,H(M);for(let f of C)V.add(f);K=!0;return}B(A.pointerId);let J={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:M,holdTimer:null,dragActivated:!1};J.holdTimer=G.setTimeout(()=>{z(A.pointerId)},260),q.set(A.pointerId,J),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return}if(O==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let T=u3(A);if(!T)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|T),this.pointerButtonMask|=T,D(A),this.sendPointerEvent(this.pointerButtonMask,M.x,M.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=L(A);if(W(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let M=L(A);if(W(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(q.has(A.pointerId)&&p1(A?.pointerType)){W(A.pointerId,L(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(q.has(A.pointerId)&&p1(A?.pointerType)){W(A.pointerId,L(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;k(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!H4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;k(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=L(A);if(W(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY}))return}k(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!q.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let M=L(A);if(W(A.pointerId,M,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}k(A,{resetAll:!0})},{signal:$,passive:!1});let I=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!$Z(A))return;let M=A?.changedTouches?.[0]||A?.touches?.[0]||null,O=Q(M)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[y]=q.entries().next().value||[];if(Number.isFinite(y)){W(y,O,{clientX:M?.clientX,clientY:M?.clientY,cancelled:A?.type==="touchcancel"});return}}H(O)},x=(A,M={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(A?.pointerId))return;if(!H4(A))return;if(A?.preventDefault?.(),p1(A?.pointerType)){let O=L(A);if(W(A.pointerId,O,{clientX:A?.clientX,clientY:A?.clientY,cancelled:M.resetAll===!0}))return}k(A,{resetAll:M.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",I,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",I,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{x(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{x(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let M=this.getFramebufferPointFromEvent(A);if(!M)return;A.preventDefault();for(let O of ZZ(A.deltaY,M.x,M.y,this.pointerButtonMask))this.socketBoundary?.send?.(O)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(XZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=v3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(YZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??v3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new N2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await _Z(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,V,K,L)=>G.decodeRawRectToRgba(q,V,K,L);let X=D4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new N2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new P3({url:UH(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(fZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),fZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await NH(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!OH(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return LH(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var a3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new gZ(_,$)}};import{classHighlighter as WH,highlightTree as zH,StreamLanguage as B6,cssLanguage as JH,cppLanguage as AH,goLanguage as kH,htmlLanguage as MH,javascriptLanguage as yH,jsxLanguage as wH,tsxLanguage as TH,typescriptLanguage as xH,jsonLanguage as IH,markdownLanguage as CH,pythonLanguage as PH,rustLanguage as fH,StandardSQL as RH,xmlLanguage as SH,yamlLanguage as uH,dockerFile as gH,powerShell as bH,ruby as vH,shell as mH,swift as cH,toml as hH}from"#editor-vendor/codemirror";function E4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var lH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},pH=B6.define(mH).parser,rH=B6.define(bH).parser,nH=B6.define(gH).parser,dH=B6.define(vH).parser,iH=B6.define(cH).parser,oH=B6.define(hH).parser;function bZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return lH[$]||String(_||"").trim()}function sH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return yH.parser;case"ts":case"typescript":return xH.parser;case"jsx":return wH.parser;case"tsx":return TH.parser;case"py":case"python":return PH.parser;case"json":return IH.parser;case"css":return JH.parser;case"html":return MH.parser;case"xml":return SH.parser;case"yaml":case"yml":return uH.parser;case"md":case"markdown":return CH.parser;case"sql":return RH.language.parser;case"go":return kH.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return AH.parser;case"sh":case"bash":case"shell":case"zsh":return pH;case"ps1":case"powershell":return rH;case"dockerfile":return nH;case"rb":case"ruby":return dH;case"rs":case"rust":return fH.parser;case"swift":return iH;case"toml":return oH;default:return null}}function F2(_,$){let j=sH($);if(!j)return E4(_);let G=[];try{let Y=j.parse(_);zH(Y,WH,(q,V,K)=>{if(!K||q>=V)return;G.push({from:q,to:V,cls:K})})}catch{return E4(_)}if(!G.length)return E4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=E4(_.slice(Z,Y.from));X+=`<span class="${E4(Y.cls)}">${E4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=E4(_.slice(Z));return X}_5();var W2=/#(\w+)/g,QD=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),LD=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),BD=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),iZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},ND=new Set(["http:","https:","mailto:",""]);function FD(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(iZ[j]||new Set).has(G)||BD.has(G)}function X7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function J4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!ND.has(G.protocol))return null;return G.href}catch{return null}}function oZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!LD.has(q)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let V=iZ[q]||new Set;for(let K of Array.from(Y.attributes)){let L=K.name.toLowerCase(),Q=K.value;if(L.startsWith("on")){Y.removeAttribute(K.name);continue}if(FD(q,L)){if(L==="href"){let N=J4(Q);if(!N)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,N),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(N))Y.setAttribute("target","_blank")}}else if(L==="src"){let N=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Q):Q,B=J4(N,{allowDataImage:q==="img"});if(!B)Y.removeAttribute(K.name);else Y.setAttribute(K.name,B)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function sZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function $5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=sZ(j);if(Z===j)break;j=Z}return j}function UD(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function HD(_){let{text:$,frontmatter:j}=UD(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function DD(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let V=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${V}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function ED(_){if(!_)return _;return $5(_,5)}function OD(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function WD(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function zD(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=ED(X);return`<div class="mermaid-container" data-mermaid="${OD(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function aZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function JD(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=$5(Z,2),q=X||"plaintext",V=F2(Y,X);return`<pre><code class="hljs language-${X7(q)}">${V}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var AD={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function kD(_,$){let j=AD[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${X7(q)}"`)}return G.join("")}function tZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[V=""]=q.split(/\s+/,1),K=V.toLowerCase();if(!K||!QD.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let L=q.slice(V.length).trim(),Q=kD(K,L);return`<${K}${Q}>`})}function eZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function _X(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function MD(_){if(!window.katex)return _;let $=(Y)=>sZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],V=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let L=q.length;return q.push(K),`@@CODE_BLOCK_${L}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let L=q.length;return q.push(K),`@@CODE_INLINE_${L}@@`}),{html:V,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,K)=>{let L=Number(K);return q[L]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,V)=>{try{let K=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${q}${K}`}catch(K){let L=K instanceof Error?K.message:String(K);return`<span class="math-error" title="${X7(L)}">${Y}</span>`}}),G(X,Z.blocks)}function yD(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(W2.lastIndex=0,!W2.test(Y))continue;W2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let V=Y.split(W2);if(V.length<=1)continue;let K=$.createDocumentFragment();V.forEach((L,Q)=>{if(Q%2===1){let N=$.createElement("a");N.setAttribute("href","#"),N.className="hashtag",N.setAttribute("data-hashtag",L),N.textContent=`#${L}`,K.appendChild(N)}else K.appendChild($.createTextNode(L))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function wD(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function TD(_){let $=HD(_||""),j=wD($),{text:G,blocks:Z}=DD(j),X=$5(G,2),q=aZ(X).replace(/</g,"&lt;");return{safeHtml:tZ(q),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=TD(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=eZ(X),X=_X(X),X=JD(X),X=MD(X),X=yD(X),X=zD(X,Z),X=oZ(X,j),X}function j5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=$5($,2),Z=aZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=tZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=eZ(Y),Y=_X(Y),Y=oZ(Y),Y}function xD(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((V)=>{let[K,L]=V.split(",").map(Number);return{x:K,y:L}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let V=1;V<Y.length-1;V++){let K=Y[V-1],L=Y[V],Q=Y[V+1],N=L.x-K.x,B=L.y-K.y,U=Q.x-L.x,E=Q.y-L.y,D=Math.sqrt(N*N+B*B),H=Math.sqrt(U*U+E*E),k=Math.min($,D/2,H/2);if(k<0.5){q.push(`L ${L.x},${L.y}`);continue}let z=L.x-N/D*k,W=L.y-B/D*k,I=L.x+U/H*k,x=L.y+E/H*k,M=N*E-B*U>0?1:0;q.push(`L ${z},${W}`),q.push(`A ${k},${k} 0 0 ${M} ${I},${x}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function D$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=dZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,V=WD(q||""),K=$5(V,2),L=await $(K,{...Z,transparent:!0});L=xD(L),Y.innerHTML=L,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(V),Y.removeAttribute("data-mermaid")}}I_();function BX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let V=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function N5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function p$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function DE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,L=[];for(let N of K.split("/")){if(!N||N===".")continue;if(N===".."){if(L.length>0)L.pop();continue}L.push(N)}let Q=L.join("/");return`${L5(Q)}${X}${Y}`}function F5(_){return _?.preview||null}function EE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function OE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function WE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${p$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${p$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${p$(T4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${p$(OE($))}</span>`),G.push(`<span><strong>extension:</strong> ${p$(EE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${p$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function zE(_){let $=F5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=WE(_,$);if($.kind==="image"){let G=$.url||($.path?L5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${p$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>DE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${p$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class S7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=zE(this.context)}getContent(){let _=F5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=F5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var u7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=F5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new S7(_,$)}},g7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return F5(_)||_?.path?1:!1},mount(_,$){return new S7(_,$)}};var JE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),AE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},kE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function FX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function NX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class UX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=FX(j),X=kE[Z]||"\uD83D\uDCC4",Y=AE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${NX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${NX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let V=q.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class HX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=FX(_?.path);if(!$||!JE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new UX(_,$);return new HX(_,$)}};var ME=/\.(csv|tsv)$/i;function DX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class EX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${DX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${DX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class OX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ME.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new EX(_,$);return new OX(_,$)}};var yE=/\.pdf$/i;function wE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class WX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${wE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class zX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!yE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new WX(_,$);return new zX(_,$)}};var TE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function c7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class JX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
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
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class AX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!TE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new JX(_,$);return new AX(_,$)}};var xE=/\.(html|htm)$/i;function kX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class MX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${kX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${kX(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class yX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!xE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new MX(_,$);return new yX(_,$)}};var IE=/\.(mp4|m4v|mov|webm|ogv)$/i;function CE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class wX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${CE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class TX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IE.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new wX(_,$);return new TX(_,$)}};I_();function PE(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function xX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:V=3000,ownerDocument:K=document}=_,L=null,Q=null,N=!1,B=!1,U=!1;async function E(){if(B||U||N)return;let W=j();if(!W)return;try{let I=await I7($);if(B||U||!I?.mtime)return;if(I.mtime!==W)N=!0,H(),k()}catch(I){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",I)}}function D(){if(H(),B)return;L=setInterval(E,V)}function H(){if(L)clearInterval(L),L=null}function k(){if(Q||B)return;let W=K.createElement("div");W.className="editor-conflict-bar",W.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,W.addEventListener("click",(I)=>{let x=I.target.closest("[data-action]");if(!x)return;let A=x.getAttribute("data-action");if(A==="reload")z(),X();else if(A==="save-copy"){let M=PE($);Y(M)}else if(A==="overwrite")z(),q();else if(A==="dismiss")z()}),Q=W,G.insertBefore(W,Z)}function z(){if(Q)Q.remove(),Q=null;N=!1,D()}return{start(){D()},stop(){H()},onSaved(W){N=!1,U=!1,D()},dispose(){if(B=!0,H(),Q)Q.remove(),Q=null}}}var fE=/\.mindmap\.ya?ml$/i,C2=String(Date.now());function RE(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function IX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function r7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function SE(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function uE(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class CX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${RE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class PX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(IX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,SE("/static/css/mindmap.css?v="+C2),await Promise.all([r7("/static/js/vendor/d3-mindmap.min.js?v="+C2),r7("/static/js/vendor/js-yaml.min.js?v="+C2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),uE(this.mindmapEl);let j=IX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await r7("/static/js/vendor/mindmap-editor.js?v="+C2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=xX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var n7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fE.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new CX(_,$);return new PX(_,$)}};class fX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var __=new fX;var E6=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};y0();function RX(){let[_,$]=P(null),[j,G]=P({text:"",totalLines:0}),[Z,X]=P(""),[Y,q]=P({text:"",totalLines:0}),[V,K]=P(null),[L,Q]=P(null),[N,B]=P(null),U=g(null),E=g(0),D=g(!1),H=g(""),k=g(""),z=g(!1),W=g(0),I=g(null),x=g(null),A=g(null),M=g(null),O=g(!1),y=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:V,setPendingRequest:K,currentTurnId:L,setCurrentTurnId:Q,steerQueuedTurnId:N,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:D,draftBufferRef:H,thoughtBufferRef:k,previewResyncPendingRef:z,previewResyncGenerationRef:W,pendingRequestRef:I,stalledPostIdRef:x,currentTurnIdRef:A,steerQueuedTurnIdRef:M,thoughtExpandedRef:O,draftExpandedRef:y}}y0();var gE=0.1,vX=4,mX=4,SX=160,uX=1600,gX=200,bX=1600;function E$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function cX(_=E$()){return _>0?Math.floor(_*gE):0}function U5(_,$=E$(),j=0){let G=cX($)+vX+(j>0?mX+Math.max(0,j):0),Z=$>0?Math.floor($-G):uX;return Math.min(Math.max(Number(_)||0,SX),Math.max(SX,Math.min(uX,Z)))}function H5(_,$=E$(),j=0){let G=cX($)+mX+(j>0?vX+Math.max(0,j):0),Z=$>0?Math.floor($-G):bX;return Math.min(Math.max(Number(_)||0,gX),Math.max(gX,Math.min(bX,Z)))}function hX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.clientX,B=$.current||280,U=L.currentTarget;U.classList.add("dragging"),Q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,D=(k)=>{E=k.clientX;let z=U5(B+(k.clientX-N),E$(),j?.current||0);Q.style.setProperty("--sidebar-width",`${z}px`),$.current=z},H=()=>{let k=U5(B+(E-N),E$(),j?.current||0);$.current=k,U.classList.remove("dragging"),Q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",L_("sidebarWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,X=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.touches[0];if(!N)return;let B=N.clientX,U=$.current||280,E=L.currentTarget;E.classList.add("dragging"),Q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let W=U5(U+(z.clientX-B),E$(),j?.current||0);Q.style.setProperty("--sidebar-width",`${W}px`),$.current=W},H=()=>{E.classList.remove("dragging"),Q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",L_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.clientX,B=j.current||$.current||280,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=N,D=(k)=>{E=k.clientX;let z=H5(B+(k.clientX-N),E$(),$?.current||0);Q.style.setProperty("--editor-width",`${z}px`),j.current=z},H=()=>{let k=H5(B+(E-N),E$(),$?.current||0);j.current=k,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("editorWidth",String(Math.round(k))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,q=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.touches[0];if(!N)return;let B=N.clientX,U=j.current||$.current||280,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let W=H5(U+(z.clientX-B),E$(),$?.current||0);Q.style.setProperty("--editor-width",`${W}px`),j.current=W},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",L_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,V=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.clientY,B=G?.current||200,U=L.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=N,D=(k)=>{E=k.clientY;let z=Math.min(Math.max(B-(k.clientY-N),100),window.innerHeight*0.5);if(Q.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let k=Math.min(Math.max(B-(E-N),100),window.innerHeight*0.5);if(G)G.current=k;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("dockHeight",String(Math.round(k))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,K=g((L)=>{L.preventDefault();let Q=_.current;if(!Q)return;let N=L.touches[0];if(!N)return;let B=N.clientY,U=G?.current||200,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(k)=>{let z=k.touches[0];if(!z)return;k.preventDefault();let W=Math.min(Math.max(U-(z.clientY-B),100),window.innerHeight*0.5);if(Q.style.setProperty("--dock-height",`${W}px`),G)G.current=W;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",L_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:K}}y0();function d7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var lX=d7("warning",30000),pX=d7("finalize",120000),rX=d7("refresh",30000),nX=30000;function dX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function D5(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function iX(_=30000){let[,$]=P(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function oX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function P2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function bE(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function r$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function O$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return O$(_)?"Compacting context":"Working..."}function sX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function E5(_,$=Date.now()){let j=P2(_);if(j===null)return null;return sX(Math.max(0,$-j))}function aX(_,$=Date.now()){let j=bE(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${sX(G)}`}y0();function Lq(_={}){o1(_)}function Bq(){let[_,$]=P(!1);if(u(()=>{let Z=(Y)=>{let q=O6(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(V){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=R2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=P(null);if(u(()=>{Promise.resolve().then(() => (Qq(),Kq)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
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
    `}y0();function LW(_,$){return new URL(String(_||""),$).toString()}function Nq(){let[_,$]=P(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=R((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=LW(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:Y0(()=>new URL(_).searchParams,[_]),navigate:j}}y0();y0();function Fq(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function E9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var BW=400,O9=60,NW=220,W9="mdPreviewHeight";function FW(){return Fq(localStorage,W9,O9,NW)}function i2({getContent:_,path:$,onClose:j}){let[G,Z]=P(""),[X,Y]=P(FW),q=g(null),V=g(null),K=g(""),L=g(_);return L.current=_,u(()=>{let B=()=>{let E=L.current?.()||"";if(E===K.current)return;K.current=E;try{let D=Z1(E,null);Z(D)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,BW);return()=>clearInterval(U)},[]),u(()=>{if(q.current&&G)D$(q.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,E=V.current?.offsetHeight||X,D=V.current?.parentElement,H=D?D.offsetHeight*0.7:500,k=B.currentTarget;k.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let z=(I)=>{let x=Math.min(Math.max(E-(I.clientY-U),O9),H);Y(x)},W=()=>{k.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",E9(localStorage,W9,V.current?.offsetHeight||X),document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",W)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let E=U.clientY,D=V.current?.offsetHeight||X,H=V.current?.parentElement,k=H?H.offsetHeight*0.7:500,z=B.currentTarget;z.classList.add("dragging"),document.body.style.userSelect="none";let W=(x)=>{let A=x.touches[0];if(!A)return;x.preventDefault();let M=Math.min(Math.max(D-(A.clientY-E),O9),k);Y(M)},I=()=>{z.classList.remove("dragging"),document.body.style.userSelect="",E9(localStorage,W9,V.current?.offsetHeight||X),document.removeEventListener("touchmove",W),document.removeEventListener("touchend",I),document.removeEventListener("touchcancel",I)};document.addEventListener("touchmove",W,{passive:!1}),document.addEventListener("touchend",I),document.addEventListener("touchcancel",I)}}
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
    `}function Uq(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function UW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function Hq(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${UW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function Dq(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:V,previewTabs:K,diffTabs:L,handleTabTogglePreview:Q,handleTabToggleDiff:N,editorContainerRef:B,getPaneContent:U,panePopoutPath:E}=_,D=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${D&&F`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${H}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${H}
                title=${H}
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
                ${q&&L.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{N(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&K.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(k)=>{Q(q),k.currentTarget.closest("details")?.removeAttribute("open")}}
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
        ${j&&q&&K.has(q)&&F`
          <${i2}
            getContent=${U}
            path=${q}
            onClose=${()=>Q(q)}
          />
        `}
      </div>
    </div>
  `}y0();y0();function o2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function HW(_,$){let j=o2(_),G=o2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function A5(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function z9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function DW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function EW(_,$,j=0,G=(Z)=>Z){let Z=o2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=DW(X.length,j),q=X.map((V)=>o2(G(V)));for(let V of Y)if(q[V].startsWith(Z))return V;for(let V of Y)if(q[V].includes(Z))return V;return-1}function J9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(HW(X,$))return j}return EW(Z,$,0,G)}I_();function s2(_){return String(_||"").trim().toLowerCase()}function A9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return s2($[1]||"")}function OW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=s2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function Eq(_,$,j={}){let G=A9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return OW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return s2(X?.agent_name).startsWith(G)})}function k9(_){let $=s2(_);return $?`@${$} `:""}function Oq(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function Wq(_,$,j={}){if(!_||_.isComposing)return!1;if(!Oq(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function M9(_,$={}){if(!Oq($))return!1;return String(_||"")==="@"}function y9(_){let $=w9(_);return $?`@${$}`:""}function w9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function a2(_,$=""){let j=String(_||""),G=w9(j),Z=w9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function WW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function t2(_,$={}){let j=y9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=WW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function zq(_,$,j){let G=y9(_),Z=y9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function e2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function _8({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function $8(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function Jq(_,$={}){return $8(_,$)==="dot"}y0();var Aq=350;function zW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function JW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=zW(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Aq,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function T9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):Aq,[G,Z]=P(null),[X,Y]=P(()=>Date.now());return u(()=>{if(_==="disconnected"){let q=Date.now();Z((V)=>V??q),Y(q);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let V=0,K=0,L=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}V=requestAnimationFrame(()=>{K=requestAnimationFrame(()=>{Y(Date.now())})})},q);return()=>{if(clearTimeout(L),V)cancelAnimationFrame(V);if(K)cancelAnimationFrame(K)}},[_,G,j]),Y0(()=>JW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}y0();function q1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,V=`${_}-file-name`,K=`${_}-file-remove`,L=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${L}
      <span class=${V}>${$}</span>
      ${G&&F`
        <button
          class=${K}
          onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function x9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function AW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function kW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function I9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=f1(_),Z=AW(_),X=kW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function kq(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function Mq(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function C9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var MW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],yq="piclaw_compose_history";function yW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function wW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return yq;return`${yq}:${encodeURIComponent($)}`}function TW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let V=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),L=V.localeCompare(K,void 0,{sensitivity:"base"});if(L!==0)return L;let Q=String(Z?.chat_jid||"").trim(),N=String(X?.chat_jid||"").trim();return Q.localeCompare(N,void 0,{sensitivity:"base"})}),G}function xW(_){return Boolean(_?.is_active&&!_?.archived_at)}function IW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function wq(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function CW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Tq(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function PW(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function fW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function RW(_){return _==="abort"||_==="compacting"}function SW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function uW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",V=X!=null?`Context: ${k5(X)} / ${k5(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,K=typeof j==="string"?j.trim():"",L=typeof G==="string"?G.trim():"",Q=K?`${V} — ${L||"Smart compaction"} · ${K}`:`${V} — ${"Compact context"}`,N=9,B=2*Math.PI*9,U=Z/100*B,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${K?" is-compacting":""}`}
            type="button"
            title=${Q}
            aria-label=${K?`Smart compaction ${K}`:"Compact context"}
            onClick=${(D)=>{D.preventDefault(),D.stopPropagation(),$?.()}}
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
            ${K&&F`<span class="compose-context-pie-timer">${K}</span>`}
        </button>
    `}function k5(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function gW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function xq(_,$){let j=Number(_?.contextWindow??_?.context_window),G=gW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${k5(G)} tokens, but this model only fits ${k5(j)}. Compact first.`,tokens:G,contextWindow:j}}function P9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${k5($)} ctx`}function bW(_,$){let j=typeof _==="string"?_.trim():"",G=P9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function vW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function Pq(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let Q=X.trim();if(!Q)continue;let N=Q.indexOf("/"),B=N>0?Q.slice(0,N).trim():"",U=N>0?Q.slice(N+1).trim():Q;Z.push({label:Q,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",V=vW(X.label,Y,q);if(!V)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,L=Number(X.context_window??X.contextWindow);Z.push({label:V,provider:Y,id:q,name:K,contextWindow:Number.isFinite(L)&&L>0?L:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function mW(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,P9(_.contextWindow)].filter(Boolean).join(" ")}function cW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=Pq($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function j8(_){return(typeof _==="string"?_.trim():"")||null}function Iq(_){return j8(_)?.toLowerCase()??null}function Cq(_,$){let j=Iq(_),G=Iq($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function hW(_,$){let j=$&&typeof $==="object"?$:{},G=j8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=j8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&Cq(G,Z))return null;let X=j8(_??j.current??j.model);if(X&&Z&&!Cq(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function lW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")||q.startsWith("Chat:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let V=[];while(Z<j.length){let K=j[Z],L=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(L))break;if(L.startsWith("Channel:")||L.startsWith("Chat:")||L==="Messages:")break;V.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(V.length>0)G.push(V.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function fq(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function pW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=fq(K.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function rW(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=fq(K.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function nW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(L)Z.push(L[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function dW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=K.replace(/^\s*-\s+/,"").trim(),Q=L.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(Q)Z.push({id:Q[1],label:(Q[2]||"").trim()||`attachment:${Q[1]}`,raw:L})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function Rq(_){let $=lW(_||""),j=pW($||""),G=rW(j.content||""),Z=nW(G.content||""),X=dW(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function iW(_){let $=Rq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function oW(_){let{queuedItem:$,buildDraft:j=iW,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetFolderRefs:V,onSetMessageRefs:K,setContent:L,textareaRef:Q,resizeTextarea:N=()=>{},scheduleTimeout:B=(k,z=0)=>setTimeout(k,z),scheduleRaf:U=(k)=>requestAnimationFrame(k),logger:E=console}=_||{};if(!$)return!1;let D=j($?.content||""),H=D.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:D.fileRefs?.length,folderRefs:D.folderRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(D.fileRefs),V?.(D.folderRefs),K?.(D.messageRefs),L?.(H),U(()=>{let k=Q?.current;if(!k)return;if(k.value=H,typeof k.dispatchEvent==="function")k.dispatchEvent(new Event("input",{bubbles:!0}));N();let z=H.length;k.selectionStart=z,k.selectionEnd=z,k.focus()}),B(()=>{try{G?.($)}catch(k){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",k)}},0),!0}function f9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let V=typeof Y?.content==="string"?Y.content:"",K=Rq(V);if(!K.text.trim()&&K.fileRefs.length===0&&K.folderRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let L=q>0,Q=q<_.length-1,N=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${V}>
                            ${K.text.trim()&&F`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.folderRefs.length>0||K.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((B)=>F`
                                        <${q1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${K.folderRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((B)=>F`
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
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(q,q+1)}
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
                                    disabled=${!L}
                                    onClick=${()=>L&&G?.(q,q-1)}
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
    `}function Sq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:V=[],onRemoveFileRef:K,onClearFileRefs:L,folderRefs:Q=[],onRemoveFolderRef:N,onClearFolderRefs:B,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:D,activeModel:H=null,agentModelsPayload:k=null,modelUsage:z=null,thinkingLevel:W=null,supportsThinking:I=!1,contextUsage:x=null,onContextCompact:A,notificationsEnabled:M=!1,notificationPermission:O="default",onToggleNotifications:y,onModelChange:T,onModelStateChange:J,activeEditorPath:C=null,onAttachEditorFile:f,onOpenFilePill:b,followupQueueItems:m=[],onInjectQueuedFollowup:l,onRemoveQueuedFollowup:_0,onMoveQueuedFollowup:v,onSubmitIntercept:e,onMessageResponse:O0,isAgentActive:G0=!1,activeChatAgents:$0=[],currentChatJid:q0="web:default",connectionStatus:N0="connected",stateAccessFailed:t=!1,onSetFileRefs:K0,onSetFolderRefs:Q0,onSetMessageRefs:k0,onSubmitError:s,onSwitchChat:X0,onRenameSession:E0,isRenameSessionInProgress:C0=!1,onCreateSession:g0,onCreateRootSession:n0,onDeleteSession:j_,onPurgeArchivedSession:c0,onRestoreSession:d0,showQueueStack:u0=!0,statusNotice:o0=null,extensionWorkingState:v0=null,prefillRequest:a0=null}){let[p0,F_]=P(""),[t0,b0]=P(""),[A0,q_]=P(!1),[e0,z_]=P(!1),[H0,f0]=P("or"),[T0,i0]=P([]),[A_,K_]=P(!1),[E_,D_]=P([]),[M_,C_]=P(0),[u_,O_]=P(!1),j0=g(null),[W0,p]=P([]),[i,o]=P(0),[Z0,V0]=P(!1),[J0,h0]=P(!1),[R0,I0]=P(!1),[w0,m0]=P(!1),[U0,l0]=P([]),[Y_,G_]=P(0),[S0,Q_]=P(0),[V_,d]=P(!1),[z0,Z_]=P(!1),[B_,p_]=P(0),[F1,g_]=P(null),[J1,P_]=P(null),[y_,A1]=P(()=>I9()),[W_,k_]=P({kind:"idle",title:"",detail:""}),[U1,m_]=P(()=>Date.now()),[n_,s_]=P(0),H_=g(null),x1=g(null),H1=g(null),g1=g(null),k1=g(null),e1=g(null),c4=g(null),A$=g(null),t_=g({value:"",updatedAt:0}),c_=g(null),M1=g(""),D1=g(""),_1=g(""),k$=g(""),M$=g(!1),_$=g(!1),w_=g(!1),V1=g(0),y$=g(!1),h4=200,$$=wW(q0),l4=(w)=>{let c=new Set,n=[];for(let B0 of w||[]){if(typeof B0!=="string")continue;let P0=B0.trim();if(!P0||c.has(P0))continue;c.add(P0),n.push(P0)}return n},p4=(w=$$)=>{let c=W1(w);if(!c)return[];try{let n=JSON.parse(c);if(!Array.isArray(n))return[];return l4(n)}catch{return[]}},w$=(w,c=$$)=>{L_(c,JSON.stringify(w))},T$=g(p4($$)),b1=g(-1),v1=g(""),r4=g("");u(()=>{T$.current=p4($$),b1.current=-1,v1.current=""},[$$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)f0(w.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(q0||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(w||!n?.commands)return;j0.current=n.commands.map((B0)=>({name:B0.name,description:B0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{w=!0}},[q0]),u(()=>{let w=yW(a0,r4.current,j);if(!w.shouldApply)return;r4.current=w.nextToken,g_(null),F_(w.text),D0(w.text),r_(w.text),requestAnimationFrame(()=>{x0();let c=H_.current;if(!c)return;try{c.focus({preventScroll:!0})}catch{c.focus()}let n=w.text.length;c.setSelectionRange?.(n,n)})},[a0,j]),u(()=>{A1(I9())},[]);let K1=p0.trim()||T0.length>0||V.length>0||Q.length>0||U.length>0,R_=W_.kind!=="idle",n4=W_.kind==="requesting_permission"||W_.kind==="listening",I1=!j&&Boolean(y_?.showButton),x$=W_.kind==="requesting_permission"||W_.kind==="listening",d4=x$?"Stop voice input":y_?.title||"Voice input",g6=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b6=typeof window<"u"&&typeof Notification<"u",X4=typeof window<"u"?Boolean(window.isSecureContext):!1,i4=b6&&X4&&O!=="denied",o4=O==="granted"&&M,Q1=O$(o0),C$=f2(o0),Y4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",q4=Q1?E5(o0,U1):null,m1=SW(v0,n_),E1=v0?.indicator&&typeof v0.indicator==="object"?v0.indicator:null,v6=o4?"Disable notifications":"Enable notifications",V4=T0.length>0||V.length>0||Q.length>0||U.length>0,j$=T9(t?N0:"connected"),e_=j$.label,P$=j$.title,s4=CW(G0,K1,Q1),G$=fW(G0,Q1),b5=(Array.isArray($0)?$0:[]).filter((w)=>!w?.archived_at),b_=(()=>{for(let w of Array.isArray($0)?$0:[]){let c=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(c&&c===q0)return w}return null})(),i8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),o8=Boolean(i8&&(b_?.chat_jid||q0)==="web:default"),C1=(()=>{let w=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",c=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!w||!c||b_.archived_at)return null;if((Array.isArray($0)?$0:[]).filter((P0)=>{let U_=typeof P0?.parent_branch_id==="string"?P0.parent_branch_id.trim():"";return U_&&U_===c}).length>0)return null;return(Array.isArray($0)?$0:[]).find((P0)=>{let U_=typeof P0?.branch_id==="string"?P0.branch_id.trim():"";return U_&&U_===w&&!P0?.archived_at})||null})(),K4=Y0(()=>TW($0,q0),[$0,q0]),f$=K4.length>0,R$=f$&&typeof X0==="function",S$=f$&&typeof d0==="function",a4=Boolean(C0||y$.current),Z$=!j&&typeof E0==="function"&&!a4,X$=!j&&typeof g0==="function",Q4=!j&&typeof n0==="function",L4=!j&&!G0&&!z0&&Boolean(C1?.chat_jid),Y$=!j&&typeof j_==="function"&&!o8,v5=!j&&typeof c0==="function",q$=!j&&(R$||S$||Z$||X$||Q4||L4||Y$||v5),m5=cW(H,k),m6=m5.showPicker,c6=m5.label,h6=I&&W?` (${W})`:"",s8=h6.trim()?`${W}`:"",S=hW(H,k),h=typeof z?.hint_short==="string"?z.hint_short.trim():"",r=[s8||null,S?.label||null,h||null].filter(Boolean).join(" • "),a=[H?`Current model: ${c6}${h6}`:null,S?.title||null,z?.plan?`Plan: ${z.plan}`:null,h||null,z?.primary?.reset_description||null,z?.secondary?.reset_description||null].filter(Boolean),F0=J0?"Switching model…":a.join(" • ")||(m6?"Select a model (tap to open model picker)":`Current model: ${c6}${h6} (tap to open model picker)`),L0=!j&&(m6||x&&x.percent!=null),M0=(w)=>{if(!w||typeof w!=="object")return;let c=w.model??w.current;if(typeof J==="function")J({...w,model:c??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(c&&typeof T==="function")T(c)},x0=(w)=>{let c=w||H_.current;if(!c)return;c.style.height="auto",c.style.height=`${c.scrollHeight}px`,c.style.overflowY="hidden"},D0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){O_(!1),D_([]);return}let c=w.toLowerCase().split(" ")[0];if(c.length<1){O_(!1),D_([]);return}let B0=(j0.current||MW).filter((P0)=>P0.name.startsWith(c)||P0.name.replace(/-/g,"").startsWith(c.replace(/-/g,"")));if(B0.length>0&&!(B0.length===1&&B0[0].name===c))V0(!1),p([]),D_(B0),C_(0),O_(!0);else O_(!1),D_([])},s0=(w)=>{let c=p0,n=c.indexOf(" "),B0=n>=0?c.slice(n):"",P0=w.name+B0;F_(P0),O_(!1),D_([]),requestAnimationFrame(()=>{let U_=H_.current;if(!U_)return;let i_=P0.length;U_.selectionStart=i_,U_.selectionEnd=i_,U_.focus()})},r_=(w)=>{if(M9(w,{searchMode:j,showSessionSwitcherButton:q$})){V0(!1),p([]);return}if(A9(w)==null){V0(!1),p([]);return}let c=Eq(b5,w,{currentChatJid:q0});if(c.length>0&&!(c.length===1&&k9(c[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))O_(!1),D_([]),p(c),o(0),V0(!0);else V0(!1),p([])},$1=(w)=>{let c=k9(w?.agent_name);if(!c)return;F_(c),V0(!1),p([]),requestAnimationFrame(()=>{let n=H_.current;if(!n)return;let B0=c.length;n.selectionStart=B0,n.selectionEnd=B0,n.focus()})},V$=()=>{if(j||!R$&&!S$&&!Z$&&!X$&&!Y$)return!1;return t_.current={value:"",updatedAt:0},I0(!1),O_(!1),D_([]),V0(!1),p([]),m0(!0),!0},gj=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!R$&&!S$&&!Z$&&!X$&&!Y$)return;if(w0){t_.current={value:"",updatedAt:0},m0(!1);return}V$()},bj=(w)=>{let c=typeof w==="string"?w.trim():"";if(m0(!1),!c||c===q0){requestAnimationFrame(()=>H_.current?.focus());return}X0?.(c)},vj=async(w)=>{let c=typeof w==="string"?w.trim():"";if(m0(!1),!c||typeof d0!=="function"){requestAnimationFrame(()=>H_.current?.focus());return}try{await d0(c)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>H_.current?.focus())}},d_=Y0(()=>{let w=[];for(let c of K4){let n=Boolean(c?.archived_at),B0=typeof c?.agent_name==="string"?c.agent_name.trim():"",P0=typeof c?.chat_jid==="string"?c.chat_jid.trim():"";if(!B0||!P0)continue;w.push({type:"session",key:`session:${P0}`,label:`@${B0} — ${P0}${c?.is_active?" active":""}${n?" archived":""}`,chat:c,disabled:n?!S$:!R$})}if(X$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(Q4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!L4});if(Z$)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:a4});if(Y$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[K4,S$,R$,X$,Q4,C1,L4,Z$,Y$,a4]),mj=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof E0!=="function"||C0||y$.current)return;y$.current=!0,m0(!1);try{await E0()}catch(c){console.warn("Failed to rename session:",c)}finally{y$.current=!1}requestAnimationFrame(()=>H_.current?.focus())},cj=async()=>{if(typeof g0!=="function")return;m0(!1);try{await g0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>H_.current?.focus())},hj=async()=>{if(typeof n0!=="function")return;m0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",c=String(w||"").trim();if(!c){requestAnimationFrame(()=>H_.current?.focus());return}try{await n0(c)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>H_.current?.focus())},lj=async()=>{let w=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!w||z0||G0)return;m0(!1),g_(null),P_(null),Z_(!0);try{let c=await z1("default","/rollup",null,[],null,q0);O0?.(c),_?.(c);let n=c?.command;if(n?.status==="error"){let P0=n?.message||"Failed to merge current session with parent.";g_(P0),s?.(P0);return}let B0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():w;X0?.(B0)}catch(c){let n=c?.message||"Failed to merge current session with parent.";g_(n),s?.(n),console.warn("Failed to merge session with parent:",c)}finally{Z_(!1)}requestAnimationFrame(()=>H_.current?.focus())},pj=async()=>{if(typeof j_!=="function")return;m0(!1);try{await j_(q0)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>H_.current?.focus())},u$=(w)=>{if(j)b0(w);else F_(w),D0(w),r_(w);requestAnimationFrame(()=>x0())},iN=(w)=>{let c=j?t0:p0,n=c&&!c.endsWith(`
`)?`
`:"",B0=`${c}${n}${w}`.trimStart();u$(B0)},a8=R(()=>{requestAnimationFrame(()=>{let w=H_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),c1=R(()=>{k_({kind:"idle",title:"",detail:""})},[]),t8=R((w=D1.current,c=_1.current)=>{if(j)return;u$(kq(M1.current,w,c))},[j]),h1=R(()=>{M$.current=!0;let w=c_.current;if(!w){c1();return}try{w.stop()}catch{c_.current=null,c1()}},[c1]),e8=R(()=>{if(g_(null),P_(null),c_.current){h1();return}if(!y_?.showButton)return;if(y_.mode==="fallback"){a8(),k_({kind:"guidance",title:y_.title||"Use keyboard dictation",detail:y_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!y_?.canStart||!y_?.recognitionCtor){k_({kind:"error",title:y_?.title||"Voice input unavailable",detail:y_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new y_.recognitionCtor;if(c_.current=w,M1.current=String(p0||""),D1.current="",_1.current="",k$.current="",M$.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(c)=>{let{finalText:n,interimText:B0}=Mq(c?.results,c?.resultIndex||0);if(n)D1.current=`${D1.current} ${n}`.trim();_1.current=B0,t8(),k_({kind:"listening",title:"Listening…",detail:B0?`Heard: ${B0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(c)=>{let n=String(c?.error||"").trim();if(k$.current=n,c_.current=null,_1.current="",n==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:C9(n,y_)})},w.onend=()=>{let c=k$.current,n=M$.current,B0=Boolean(D1.current.trim()||_1.current.trim());if(c_.current=null,M$.current=!1,k$.current="",_1.current.trim())D1.current=`${D1.current} ${_1.current}`.trim(),_1.current="";if(B0)t8(D1.current,"");if(c&&c!=="aborted")return;if(!B0&&!n){k_({kind:"error",title:"No speech detected",detail:C9("no-speech",y_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),a8(),w.start()}catch(w){c_.current=null,k_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[t8,c1,p0,a8,y_,h1]),oN=(w)=>{let c=w?.command?.model_label;if(c)return c;let n=w?.command?.message;if(typeof n==="string"){let B0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(B0?.[1])return B0[1].trim()}return null},rj=async(w)=>{if(j||J0)return;g_(null),P_(null),h0(!0);try{let c=await z1("default",w,null,[],null,q0),n=oN(c);return M0({model:n??H??null,thinking_level:c?.command?.thinking_level,thinking_level_label:c?.command?.thinking_level_label,supports_thinking:c?.command?.supports_thinking}),await x9(w4,q0,M0),P_(wq(w,c)),_?.(c),!0}catch(c){return console.error("Failed to switch model:",c),alert("Failed to switch model: "+c.message),!1}finally{h0(!1)}},sN=(w)=>{if(w.pointerType==="mouse")return;let c=H_.current?.value??(j?t0:p0);if(!Tq(w,c,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(y_?.canStart&&y_?.recognitionCtor)}))return;w.preventDefault(),_$.current=!0,w_.current=!0,e8()},_3=(w)=>{if(!_$.current)return;if(w?.preventDefault?.(),_$.current=!1,c_.current)h1()},aN=(w)=>{if(w_.current){w_.current=!1,w.preventDefault();return}e8()},tN=async()=>{await rj("/cycle-model")},$3=async(w)=>{let c=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!c||J0)return;let n=xq(w,x);if(n.blocked){g_(null),P_(n.note);return}if(await rj(`/model ${c}`))I0(!1)},eN=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let c=w.chat;if(c?.archived_at)vj(c.chat_jid);else bj(c.chat_jid);return}if(w.type==="action"){if(w.action==="new"){cj();return}if(w.action==="new-root"){hj();return}if(w.action==="rollup"){lj();return}if(w.action==="rename"){mj();return}if(w.action==="delete")pj()}},_F=(w)=>{w.preventDefault(),w.stopPropagation(),t_.current={value:"",updatedAt:0},m0(!1),I0((c)=>!c)},$F=async()=>{if(j)return;A?.(),await t4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},jF=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return G0?"queue":void 0},t4=async(w,c,n={})=>{let B0=typeof w==="string"?w:p0;if(/^\/settings\s*$/i.test(B0.trim())){F_(""),requestAnimationFrame(()=>x0()),o1();return}if(/^\/help\s*$/i.test(B0.trim())){F_(""),requestAnimationFrame(()=>x0()),o1({section:"keyboard"});return}let{includeMedia:P0=!0,includeFileRefs:U_=!0,includeFolderRefs:i_=!0,includeMessageRefs:h_=!0,clearAfterSubmit:P1=!0,recordHistory:y1=!0}=n||{},nj=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:p0,dj=typeof nj==="string"?nj:"";if(!dj.trim()&&(P0?T0.length===0:!0)&&(U_?V.length===0:!0)&&(i_?Q.length===0:!0)&&(h_?U.length===0:!0))return;if(c_.current)h1();c1(),O_(!1),D_([]),V0(!1),p([]),m0(!1),g_(null),P_(null);let c5=P0?[...T0]:[],h5=U_?[...V]:[],l5=i_?[...Q]:[],p5=h_?[...U]:[],B4=dj.trim();if(y1&&B4){let N4=T$.current,L1=l4(N4.filter((G3)=>G3!==B4));if(L1.push(B4),L1.length>200)L1.splice(0,L1.length-200);T$.current=L1,w$(L1),b1.current=-1,v1.current=""}let DF=()=>{if(P0)i0([...c5]);if(U_)K0?.(h5);if(i_)Q0?.(l5);if(h_)k0?.(p5);F_(B4),requestAnimationFrame(()=>x0())};if(P1)F_(""),i0([]),L?.(),B?.(),D?.();(async()=>{try{let N4=await e?.({content:B4,submitMode:c,fileRefs:h5,folderRefs:l5,messageRefs:p5,mediaFiles:c5});if(N4){_?.(N4);return}let L1=[];for(let K$ of c5){let r5=await z7(K$);L1.push(r5.id)}let G3=h5.length?`Files:
${h5.map((K$)=>`- ${K$}`).join(`
`)}`:"",EF=l5.length?`Folders:
${l5.map((K$)=>`- ${K$}`).join(`
`)}`:"",OF=p5.length?`Referenced messages:
${p5.map((K$)=>`- message:${K$}`).join(`
`)}`:"",WF=L1.length?`Attachments:
${L1.map((K$,r5)=>{let JF=c5[r5]?.name||`attachment-${r5+1}`;return`- attachment:${K$} (${JF})`}).join(`
`)}`:"",zF=[B4,G3,EF,OF,WF].filter(Boolean).join(`

`),g$=await z1("default",zF,null,L1,jF(c),q0);if(O0?.(g$),g$?.command)M0({model:g$.command.model_label??H??null,thinking_level:g$.command.thinking_level,thinking_level_label:g$.command.thinking_level_label,supports_thinking:g$.command.supports_thinking}),await x9(w4,q0,M0);P_(wq(B4,g$)),_?.(g$)}catch(N4){if(P1)DF();let L1=N4?.message||"Failed to send message.";g_(L1),s?.(L1),console.error("Failed to post:",N4)}})()},GF=(w)=>{l?.(w)},ZF=R((w)=>{oW({queuedItem:w,onRemoveQueuedFollowup:_0,setSubmitError:g_,setSubmitNotice:P_,setMediaFiles:i0,onSetFileRefs:K0,onSetFolderRefs:Q0,onSetMessageRefs:k0,setContent:F_,textareaRef:H_,resizeTextarea:x0})},[_0,K0,Q0,k0,x0]),l6=R((w)=>{if(j||!R0&&!w0||w?.isComposing)return!1;let c=()=>{w.preventDefault?.(),w.stopPropagation?.()},n=()=>{t_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(c(),n(),R0)I0(!1);if(w0)m0(!1);return!0}if(R0){if(w.key==="ArrowDown"){if(c(),n(),U0.length>0)G_((B0)=>(B0+1)%U0.length);return!0}if(w.key==="ArrowUp"){if(c(),n(),U0.length>0)G_((B0)=>(B0-1+U0.length)%U0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&U0.length>0)return c(),n(),$3(U0[Math.max(0,Math.min(Y_,U0.length-1))]),!0;if(A5(w)&&U0.length>0){c();let B0=z9(t_.current,w.key);t_.current=B0;let P0=J9(U0,B0.value,Y_,(U_)=>mW(U_));if(P0>=0)G_(P0);return!0}}if(w0){if(w.key==="ArrowDown"){if(c(),n(),d_.length>0)Q_((B0)=>(B0+1)%d_.length);return!0}if(w.key==="ArrowUp"){if(c(),n(),d_.length>0)Q_((B0)=>(B0-1+d_.length)%d_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&d_.length>0)return c(),n(),eN(d_[Math.max(0,Math.min(S0,d_.length-1))]),!0;if(A5(w)&&d_.length>0){c();let B0=z9(t_.current,w.key);t_.current=B0;let P0=J9(d_,B0.value,S0,(U_)=>U_.label);if(P0>=0)Q_(P0);return!0}}return!1},[j,R0,w0,U0,Y_,d_,S0,$3]),XF=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),b0(""),q?.();return}if(l6(w))return;let c=H_.current?.value??(j?t0:p0);if(Tq(w,c,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(y_?.canStart&&y_?.recognitionCtor)})){w.preventDefault(),_$.current=!0,e8();return}if(Wq(w,c,{searchMode:j,showSessionSwitcherButton:q$})){w.preventDefault(),V$();return}if(Z0&&W0.length>0){let n=H_.current?.value??(j?t0:p0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))V0(!1),p([]);else{if(w.key==="ArrowDown"){w.preventDefault(),o((B0)=>(B0+1)%W0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),o((B0)=>(B0-1+W0.length)%W0.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),$1(W0[i]);return}if(w.key==="Escape"){w.preventDefault(),V0(!1),p([]);return}}}if(u_&&E_.length>0){let n=H_.current?.value??(j?t0:p0);if(!String(n||"").startsWith("/"))O_(!1),D_([]);else{if(w.key==="ArrowDown"){w.preventDefault(),C_((B0)=>(B0+1)%E_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),C_((B0)=>(B0-1+E_.length)%E_.length);return}if(w.key==="Tab"){w.preventDefault(),s0(E_[M_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!c.includes(" ")){w.preventDefault();let P0=E_[M_];O_(!1),D_([]),t4(P0.name);return}}if(w.key==="Escape"){w.preventDefault(),O_(!1),D_([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let n=H_.current;if(!n)return;let B0=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,U_=n.selectionStart===B0.length&&n.selectionEnd===B0.length;if(w.key==="ArrowUp"&&P0||w.key==="ArrowDown"&&U_){let i_=T$.current;if(!i_.length)return;w.preventDefault();let h_=b1.current;if(w.key==="ArrowUp"){if(h_===-1)v1.current=B0,h_=i_.length-1;else if(h_>0)h_-=1;b1.current=h_,u$(i_[h_]||"")}else{if(h_===-1)return;if(h_<i_.length-1)h_+=1,b1.current=h_,u$(i_[h_]||"");else b1.current=-1,u$(v1.current||""),v1.current=""}requestAnimationFrame(()=>{let P1=H_.current;if(!P1)return;let y1=P1.value.length;P1.selectionStart=y1,P1.selectionEnd=y1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(c.trim())Z?.(c.trim(),G,{images:A0,attachments:e0})}else t4(c,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(c.trim())Z?.(c.trim(),G,{images:A0,attachments:e0})}else t4(c);return}if(w.key==="Escape"){if(R0||w0||u_||Z0)return;w.preventDefault(),H_.current?.blur()}},YF=(w)=>{if(PW(w,_$.current)){if(w.preventDefault(),_$.current=!1,c_.current)h1()}},j3=(w)=>{let c=Array.from(w||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!c.length)return;i0((n)=>[...n,...c]),g_(null)},qF=(w)=>{j3(w.target.files),w.target.value=""},VF=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),V1.current+=1,K_(!0)},KF=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),V1.current=Math.max(0,V1.current-1),V1.current===0)K_(!1)},QF=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";K_(!0)},LF=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),V1.current=0,K_(!1),j3(w.dataTransfer?.files||[])},BF=(w)=>{if(j)return;let c=w.clipboardData?.items;if(!c||!c.length)return;let n=[];for(let B0 of c){if(B0.kind!=="file")continue;let P0=B0.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)w.preventDefault(),j3(n)},NF=(w)=>{i0((c)=>c.filter((n,B0)=>B0!==w))},FF=()=>{g_(null),i0([]),L?.(),B?.(),D?.()},UF=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:c,longitude:n,accuracy:B0}=w.coords,P0=`${c.toFixed(5)}, ${n.toFixed(5)}`,U_=Number.isFinite(B0)?` ±${Math.round(B0)}m`:"",i_=`https://maps.google.com/?q=${c},${n}`,h_=`Location: ${P0}${U_} ${i_}`;iN(h_)},(w)=>{let c=w?.message||"Unable to retrieve location.";alert(`Location error: ${c}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!R0)return;t_.current={value:"",updatedAt:0},d(!0),w4(q0).then((w)=>{l0(Pq(w)),M0(w)}).catch((w)=>{console.warn("Failed to load model list:",w),l0([])}).finally(()=>{d(!1)})},[R0,H]),u(()=>{if(j)I0(!1),m0(!1),O_(!1),D_([]),V0(!1),p([])},[j]),u(()=>{if(w0&&!q$)m0(!1)},[w0,q$]),u(()=>{if(!R0)return;let w=U0.findIndex((c)=>c?.label===H);G_(w>=0?w:0)},[R0,U0,H]),u(()=>{if(!w0)return;Q_(IW(d_,q0)),t_.current={value:"",updatedAt:0}},[w0,q0,d_]),u(()=>{if(!R0)return;let w=(c)=>{let n=g1.current,B0=k1.current,P0=c.target;if(n&&n.contains(P0))return;if(B0&&B0.contains(P0))return;I0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[R0]),u(()=>{if(!w0)return;let w=(c)=>{let n=e1.current,B0=c4.current,P0=c.target;if(n&&n.contains(P0))return;if(B0&&B0.contains(P0))return;m0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[w0]),u(()=>{if(j||!R0&&!w0)return;let w=(c)=>{l6(c)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,R0,w0,l6]),u(()=>{if(!R0)return;let w=g1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[R0,Y_,U0]),u(()=>{if(!w0)return;let w=e1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[w0,S0,d_.length]),u(()=>{if(!Z0||!H1.current)return;H1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[Z0,i,W0.length]),u(()=>{if(!u_||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[u_,M_,E_.length]),u(()=>{let w=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},c=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let B0=H_.current;if(!B0)return;let P0=document.activeElement===B0;if(n.key==="Escape"&&!P0&&!w(n.target)){n.preventDefault(),B0.focus();return}if(n.key==="/"&&!P0&&!w(n.target))n.preventDefault(),u$("/"),requestAnimationFrame(()=>{B0.focus(),B0.selectionStart=1,B0.selectionEnd=1,D0("/")})};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[]),u(()=>{let w=()=>{let U_=A$.current?.clientWidth||0;p_((i_)=>i_===U_?i_:U_)};w();let c=A$.current,n=0,B0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,w()})},P0=null;if(c&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>B0()),P0.observe(c);if(typeof window<"u")window.addEventListener("resize",B0);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B0)}},[j,H,b_?.agent_name,q$,x?.percent]);let HF=(w)=>{let c=w.target.value;if(c_.current&&w?.isTrusted)h1();if(g_(null),P_(null),W_.kind==="guidance"||W_.kind==="error")c1();if(w0)m0(!1);if(x0(w.target),M9(c,{searchMode:j,showSessionSwitcherButton:q$})){u$(""),requestAnimationFrame(()=>{let n=H_.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),V$();return}u$(c)};return u(()=>{requestAnimationFrame(()=>x0())},[p0,t0,j]),u(()=>{if(!j)return;if(c_.current)h1();return},[j,h1]),u(()=>{if(c_.current)h1();c1()},[q0,c1,h1]),u(()=>{return()=>{if(!c_.current)return;try{c_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}c_.current=null}},[]),u(()=>{if(!Q1)return;m_(Date.now());let w=setInterval(()=>m_(Date.now()),1000);return()=>clearInterval(w)},[Q1,o0?.started_at,o0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let w=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,c=setInterval(()=>{s_((n)=>(n+1)%E1.frames.length)},w);return()=>clearInterval(c)},[E1]),u(()=>{if(j)return;r_(p0)},[b5,q0,p0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${R_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${W_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:n4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${W_.title}</span>
                    </div>
                    ${W_.detail&&F`<div class="compose-inline-status-detail">${W_.detail}</div>`}
                </div>
            `}
            ${u0&&!j&&F`
                <${f9}
                    items=${m}
                    onInjectQueuedFollowup=${GF}
                    onRemoveQueuedFollowup=${_0}
                    onMoveQueuedFollowup=${v}
                    onReturnQueuedFollowup=${ZF}
                    onOpenFilePill=${b}
                />
            `}
            ${m1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${m1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${m1.indicatorText}</span>`:m1.animateDot?F`<span class=${_8({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${m1.title}</span>
                    </div>
                </div>
            `}
            ${o0&&!Q1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${Y4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C$}</span>
                        ${q4&&F`<span class="compose-inline-status-elapsed">${q4}</span>`}
                    </div>
                    ${Y4&&F`<div class="compose-inline-status-detail">${Y4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${VF}
                onDragOver=${QF}
                onDragLeave=${KF}
                onDrop=${LF}
            >
                ${q$&&F`
                    <div
                        ref=${c4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${w0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${gj}
                            title=${b_?.chat_jid||q0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${w0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${V4&&F`
                        <div class="compose-file-refs">
                            ${U.map((w)=>{return F`
                                    <${q1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(w)}
                                    />
                                `})}
                            ${V.map((w)=>{let c=w.split("/").pop()||w;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${c}
                                        title=${w}
                                        onClick=${()=>b?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(w)}
                                    />
                                `})}
                            ${Q.map((w)=>{let c=w.split("/").pop()||w;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${c}
                                        title=${w}
                                        icon="folder"
                                        onClick=${()=>b?.(w)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>N?.(w)}
                                    />
                                `})}
                            ${T0.map((w,c)=>{let n=w?.name||`attachment-${c+1}`;return F`
                                    <${q1}
                                        key=${n+c}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>NF(c)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${FF}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${H_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?t0:p0}
                        onInput=${HF}
                        onKeyDown=${XF}
                        onKeyUp=${YF}
                        onPaste=${BF}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Z0&&W0.length>0&&F`
                        <div class="slash-autocomplete" ref=${H1}>
                            ${W0.map((w,c)=>F`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${c===i?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),$1(w)}}
                                    onMouseEnter=${()=>o(c)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${u_&&E_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${E_.map((w,c)=>F`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${c===M_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),s0(w)}}
                                    onMouseEnter=${()=>C_(c)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${R0&&!j&&F`
                        <div class="compose-model-popup" ref=${g1} tabIndex="-1" onKeyDown=${l6}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${V_&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!V_&&U0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!V_&&U0.map((w,c)=>{let n=typeof w?.label==="string"?w.label:"",B0=P9(w?.contextWindow),P0=w?.name||null,U_=xq(w,x);return F`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${Y_===c?" active":""}${H===n?" current-model":""}${U_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{$3(w)}}
                                            disabled=${J0||U_.blocked}
                                            title=${[n,P0,B0,U_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${bW(n,w?.contextWindow)}${P0?F` <span class="compose-model-popup-model-subtitle">${P0}</span>`:""}</span>
                                                ${U_.blocked&&F`<span class="compose-model-popup-model-note">${U_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{tN()}}
                                    disabled=${J0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${w0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${e1} tabIndex="-1" onKeyDown=${l6}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!f$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${f$&&K4.map((w,c)=>{let n=Boolean(w.archived_at),B0=w.chat_jid===(w.root_chat_jid||w.chat_jid),P0=!B0&&!w.is_active&&!n&&typeof j_==="function",U_=n&&v5,i_=t2(w,{currentChatJid:q0});return F`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${n?" archived":""}${S0===c?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(n){vj(w.chat_jid);return}bj(w.chat_jid)}}
                                                disabled=${n?!S$:!R$}
                                                title=${n?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${xW(w)?"font-weight:700":""}>${i_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(h_)=>{h_.stopPropagation(),m0(!1);let P1=new URL(window.location.href);P1.searchParams.set("chat_jid",w.chat_jid),P1.searchParams.set("chat_only","1");let y1=document.createElement("a");y1.href=P1.toString(),y1.target="_blank",y1.rel="noopener",y1.style.display="none",document.body.appendChild(y1),y1.click(),y1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(P0||U_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${U_?B0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${U_?B0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(h_)=>{if(h_.stopPropagation(),m0(!1),U_){c0?.(w.chat_jid);return}j_(w.chat_jid)}}
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
                            ${(X$||Q4||Z$||Y$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((w)=>w.key==="action:new")===S0?" active":""}`}
                                            onClick=${()=>{cj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${Q4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:new-root")===S0?" active":""}`}
                                            onClick=${()=>{hj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rollup")===S0?" active":""}`}
                                            onClick=${()=>{lj()}}
                                            title=${L4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!L4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rename")===S0?" active":""}`}
                                            onClick=${(w)=>{mj(w)}}
                                            title="Rename the current session"
                                            disabled=${a4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((w)=>w.key==="action:delete")===S0?" active":""}`}
                                            onClick=${()=>{pj()}}
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
                <div class="compose-footer" ref=${A$}>
                    ${j$.show&&F`
                        <span class="compose-connection-status connection-status ${j$.statusClass}" title=${P$}>
                            ${e_}
                        </span>
                    `}
                    ${L0&&F`
                    <div class="compose-meta-row">
                        ${m6&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${F0}
                                    aria-label="Open model picker"
                                    onClick=${_F}
                                    disabled=${J0}
                                >
                                    ${J0?"Switching…":c6}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!J0&&r&&F`
                                        <span class="compose-model-usage-hint" title=${F0}>
                                            ${r}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&F`
                            <${uW}
                                usage=${x}
                                onCompact=${$F}
                                compactionLabel=${Q1?q4||"0:00":""}
                                compactionTitle=${Q1?C$||"Smart compaction":""}
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
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${A0} onChange=${()=>q_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${e0} onChange=${()=>z_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${H0==="and"?"active":""}`}
                            onClick=${()=>{let w=H0==="or"?"and":"or";f0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((c)=>{})}}
                            title=${H0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${H0==="or"?"OR":"AND"}
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
                    ${g6&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${UF}
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
                            class=${`icon-btn voice-input-btn${x$?" active":""}${y_.mode==="fallback"?" fallback":""}`}
                            onClick=${aN}
                            onPointerDown=${sN}
                            onPointerUp=${_3}
                            onPointerCancel=${_3}
                            onPointerLeave=${_3}
                            title=${d4}
                            aria-label=${d4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${i4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${o4?" active":""}`}
                            onClick=${y}
                            title=${v6}
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
                            <input type="file" multiple hidden onChange=${qF} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${s4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{t4()}}
                                    disabled=${s4.disabled}
                                    title=${s4.title}
                                    aria-label=${s4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${G$&&F`
                                    <button 
                                        class=${G$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(RW(G$.mode))t4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${G$.disabled}
                                        title=${G$.title}
                                        aria-label=${G$.ariaLabel}
                                    >
                                        ${G$.mode==="compacting"?F`
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
    `}y0();function uq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
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
  `}y0();function gq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function bq(_){return String(_||"").trim()||"web:default"}function vq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function mq(_){if(!_)return!1;return _.status!=="running"}function cq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function hq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?j5(_.thinking):"",q=_?.answer?Z1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)D$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),u(()=>{if(X.current&&q)D$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[q]),!_)return null;let V=_.status==="running",K=Boolean(String(_.answer||"").trim()),L=Boolean(String(_.thinking||"").trim()),Q=vq(_),N=mq(_),B=!V&&K,U=V?"Thinking…":_.status==="error"?"Error":"Done";return F`
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
            ${L&&F`
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${Q&&F`
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
    `}y0();function R9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function S9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function sW(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function aW(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function t$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function $_(_){return typeof _==="string"&&_.trim()?_.trim():null}function pq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var rq="__PICLAW_WIDGET_HOST__:";function lq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function u9(_,$){if(!_||_.type!=="generated_widget")return null;let j=sW(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:pq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function nq(_){if(!_||typeof _!=="object")return null;let $=aW(_),j=$_(_?.widget_id)||$_(_?.widgetId)||$_(_?.tool_call_id)||$_(_?.toolCallId),G=$_(_?.tool_call_id)||$_(_?.toolCallId),Z=$_(_?.turn_id)||$_(_?.turnId),X=$_(_?.title)||$_(_?.name)||"Generated widget",Y=$_(_?.subtitle)||"",q=$_(_?.description)||Y,V=$_(_?.status),K=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:X,subtitle:Y,description:q,originPostId:t$(_?.origin_post_id)??t$(_?.originPostId),originChatJid:$_(_?.origin_chat_jid)||$_(_?.originChatJid)||$_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:pq(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:t$(_?.width),height:t$(_?.height),error:$_(_?.error)}}function dq(_){return u9(_,null)!==null}function N1(_){let $=$_(_?.toolCallId)||$_(_?.tool_call_id);if($)return $;let j=$_(_?.widgetId)||$_(_?.widget_id);if(j)return j;let G=t$(_?.originPostId)??t$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function iq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function oq(_){return iq(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function G8(_){return{title:$_(_?.title)||"Generated widget",widgetId:$_(_?.widgetId)||$_(_?.widget_id),toolCallId:$_(_?.toolCallId)||$_(_?.tool_call_id),turnId:$_(_?.turnId)||$_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:$_(_?.status)||"final"}}function Z8(_){return{...G8(_),subtitle:$_(_?.subtitle)||"",description:$_(_?.description)||"",error:$_(_?.error)||null,width:t$(_?.width),height:t$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function X8(_){return`${rq}${JSON.stringify(Z8(_))}`}function sq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=$_(_.text)||$_(_.content)||$_(_.message)||$_(_.prompt)||$_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=$_(j.text)||$_(j.content)||$_(j.message)||$_(j.prompt)||$_(j.value);if(G)return G}return null}function aq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function tq(_){let $=$_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return $_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function tW(_){let $=G8(_);return`<script>
(function () {
  const meta = ${lq($)};
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

  const windowNamePrefix = ${lq(rq)};
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
</script>`}function eq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=iq(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,L=q?tW(_):"";return`<!doctype html>
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
${L}
</head>
<body>${K}</body>
</html>`}y0();function eW(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let V=Y.parentId?$.get(Y.parentId):null;if(V)V.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let V of Y.children)V.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let V=Y.children.length-1;V>=0;V--)Y.children[V].depth=q?Y.depth+1:Y.depth,X.push(Y.children[V])}return Z}function _z(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function _V(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function M6(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function $z(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function jz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function $V(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function Gz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((V)=>V?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function Zz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=$V(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function jV({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=P(()=>({loading:!j,error:null,data:j})),[V,K]=P(()=>j?.leafId||null),[L,Q]=P(""),N=g(null),B=g(null),U=g(j?.leafId||null),E=g(null),D=g(""),H=async()=>{q((M)=>({...M,loading:!0,error:null}));try{let M=G?`?chat_jid=${encodeURIComponent(G)}`:"",O=await fetch(`/agent/session-tree${M}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),y=await O.json().catch(()=>({}));if(!O.ok)throw Error(y?.error||`HTTP ${O.status}`);q({loading:!1,error:null,data:y})}catch(M){q((O)=>({loading:!1,error:M?.message||"Failed to load tree.",data:O?.data||j||null}))}};E.current=H,u(()=>{H()},[G]);let k=Y0(()=>{let M=Y.data;if(!M||!Array.isArray(M.nodes)||M.nodes.length===0)return[];return _z(M.flat?eW(M.nodes):M.nodes)},[Y.data]);u(()=>{let M=Gz(k,V,U.current,Y.data?.leafId||null);if(M!==V)K(M);if(U.current&&Y.data?.leafId===U.current)U.current=null},[k,V,Y.data?.leafId]);let z=Y0(()=>{let M=(L||"").trim().toLowerCase();if(!M)return k;return k.filter((O)=>{return[O.preview,O.toolInput,O.toolInputFull,O.detail,O.toolName,O.role,O.id,O.resultDetail,O.type,O.label].some((T)=>typeof T==="string"&&T.toLowerCase().includes(M))})},[k,L]),W=Y0(()=>z.find((M)=>M.id===V)||null,[z,V]),I=Y0(()=>Zz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[V,Y.data?.leafId,z.length]),u(()=>{let M=$V(X?.preview);if(M?.targetId)U.current=M.targetId;let O=I?.refreshDelays||[];if(!O.length)return;let y=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(D.current===y)return;D.current=y;let T=O.map((J)=>setTimeout(()=>E.current?.(),J));return()=>T.forEach((J)=>clearTimeout(J))},[G,X?.type,X?.submittedAt,X?.preview,I?.refreshDelays]);let x=(M=!1)=>{let O=W?.id,y=jz(O,M);if(!y)return;U.current=y.navigateTargetId,$?.({kind:"widget.submit",payload:y},_)},A=I?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${N}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${L}
                        onInput=${(M)=>Q(M.currentTarget.value)}
                        onKeyDown=${(M)=>{if(M.key==="Escape")Q(""),M.currentTarget.blur()}}
                    />
                    ${L&&F`<span class="session-tree-meta">${z.length} match${z.length!==1?"es":""}</span>`}
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
                    ${Y.loading&&z.length===0&&!L&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&z.length===0&&!L&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&z.length===0&&L&&F`<div class="session-tree-empty">No entries match \u201c${L}\u201d</div>`}
                    ${z.map((M)=>{let O=V===M.id,y=`st-row${M.active?" active":""}${O?" selected":""}`,T=(M.children||[]).length>1,J=$z(M);return F`
                            <button key=${M.id} ref=${M.active||O?B:null}
                                class=${y} type="button" role="treeitem" aria-selected=${O}
                                onClick=${()=>K(M.id)}>
                                <span class="st-indent" style=${`width:${(M.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${M.active?" active":T?" branch":""}`}></span>
                                <span class=${`st-tag ${J.tagClass}`}>${J.tag}</span>
                                <span class="st-text">${J.text}</span>
                                ${M.merged&&M.resultLength>0&&F`<span class="st-size">${_V(M.resultLength)}</span>`}
                                ${!M.merged&&M.contentLength>3000&&F`<span class="st-size">${_V(M.contentLength)}</span>`}
                                ${M.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${M.label&&F`<span class="st-label">${M.label}</span>`}
                                ${M.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${W?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${W.id}${W.resultId?` → ${W.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${W.role||W.type||"entry"}${W.toolName?` → ${W.toolName}`:""}${W.merged?" (merged)":""}</div>
                        </div>
                        ${W.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${W.toolInputFull}</pre>
                            </div>
                        `}
                        ${W.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${W.resultLength?` (${M6(W.resultLength)})`:""}</div>
                                <pre class="st-side-code">${W.resultDetail}</pre>
                            </div>
                        `}
                        ${W.detail&&!W.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.role==="toolResult"?"Output":"Content"}${W.contentLength?` (${M6(W.contentLength)})`:""}</div>
                                <pre class="st-side-code">${W.detail}</pre>
                            </div>
                        `}
                        ${W.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${W.rawContentLength?` (${M6(W.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${W.rawDetail}</pre>
                            </div>
                        `}
                        ${W.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(W.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(W.contentLength>0||W.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${W.contentLength>0&&F`<span class="st-pill">${M6(W.contentLength)} content</span>`}
                                    ${W.hasThinking&&F`<span class="st-pill thinking">${M6(W.thinkingLength)} thinking</span>`}
                                    ${W.merged&&W.resultLength>0&&F`<span class="st-pill">${M6(W.resultLength)} result</span>`}
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
    `}function Xz(_=!1){return`floating-widget-backdrop${_?" maximized":""}`}function Yz(_=!1){return`floating-widget-pane${_?" maximized":""}`}function GV({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),[X,Y]=P(!1),q=N1(_),V=Y0(()=>eq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{Y(!1)},[q]),u(()=>{if(!_)return;let W=(I)=>{if(I.key!=="Escape")return;if(X){Y(!1);return}$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[X,_,$]),u(()=>{Z.current=!1},[V]),u(()=>{if(!_)return;let W=G.current;if(!W)return;let I=(y)=>{let T=X8(_),J=y==="widget.init"?G8(_):Z8(_);R9(W,T),S9(W,{__piclawGeneratedWidgetHost:!0,type:y,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J})},x=()=>{I("widget.init"),I("widget.update")},A=()=>{Z.current=!0,x()};W.addEventListener("load",A);let O=[0,40,120,300,800].map((y)=>setTimeout(x,y));return()=>{W.removeEventListener("load",A),O.forEach((y)=>clearTimeout(y))}},[V,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let W=G.current;if(!W?.contentWindow)return;let I=X8(_),x=Z8(_);R9(W,I),S9(W,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:x});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let W=(I)=>{let x=I?.data;if(!x||x.__piclawGeneratedWidget!==!0)return;let A=G.current,M=N1(_),O=N1({widgetId:x.widgetId,toolCallId:x.toolCallId});if(O&&M&&O!==M)return;if(!O&&A?.contentWindow&&I.source!==A.contentWindow)return;j?.(x,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let L=(_?.artifact||{}).kind||_?.kind||"html",Q=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",N=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",B=_?.source==="live"?"live":"timeline",U=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",E=B==="live"?`Live widget • ${U.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",D=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!V,k=tq(_),z=oq(_);return F`
        <div class=${Xz(X)} onClick=${()=>$?.()}>
            <section
                class=${Yz(X)}
                aria-label=${Q}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${E} • ${L.toUpperCase()}</div>
                        <div class="floating-widget-title">${Q}</div>
                        ${(N||D)&&F`
                            <div class="floating-widget-subtitle">${N||D}</div>
                        `}
                    </div>
                    <div class="floating-widget-header-actions">
                        <button
                            class="floating-widget-action floating-widget-maximize"
                            type="button"
                            onClick=${()=>Y((W)=>!W)}
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
                    ${L==="session_tree"?F`<${jV} widget=${_} onWidgetEvent=${j} />`:H?F`<div class="floating-widget-empty">${k}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${Q}
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
    `}y0();S2();I_();W6();var qz=new Set,ZV=new Set,g9=new Set,f4=new Map,XV=!1,Y8=null;function Vz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function Kz(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function YV(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return X_.register(_),qz.add(_.id),!0}function Qz(_){return YV(_)}function Lz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return d$(_),ZV.add(_.id),s7(),()=>{tX(_.id),ZV.delete(_.id),s7()}}function Bz(_){if(typeof _!=="function")return()=>{};return g9.add(_),()=>{g9.delete(_)}}function qV(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...g9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function Nz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return f4.set(_.id,_),()=>{if(f4.get(_.id)===_)f4.delete(_.id)}}function q8(_,$){for(let j of Array.from(f4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function VV(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.label||null}function KV(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.note||null}function QV(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=f4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function Fz(_=typeof window<"u"?window:null){return{registerPane:Qz,registerWorkspacePane:YV,registerSettingsPane:Lz,registerStandaloneTabUrlResolver:Bz,registerAttachmentPreview:Nz,getCurrentChatJid:()=>Vz(_)}}function b9(_=typeof window<"u"?window:null){let $=Fz(_);if(!_||XV)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},XV=!0,$}async function LV(_=typeof window<"u"?window:null){if(!_)return;if(Y8)return Y8;return Y8=(async()=>{b9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=Kz(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Y8}var Uz=["\t",",",";","|"];function BV(_){return typeof _==="string"?_.trim().toLowerCase():""}function NV(_){return typeof _==="string"?_.split(";")[0]?.trim().toLowerCase()||"":""}function FV(_,$){let j=NV(_),G=BV($);return j==="text/csv"||j==="application/csv"||j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".csv")||G.endsWith(".tsv")||G.endsWith(".tab")}function UV(_,$){let j=NV(_),G=BV($);if(j==="text/tab-separated-values"||j==="text/tsv"||G.endsWith(".tsv")||G.endsWith(".tab"))return"\t";if(j==="text/csv"||j==="application/csv"||G.endsWith(".csv"))return",";return null}function Hz(_,$){let j=0,G=!1;for(let Z=0;Z<_.length;Z+=1){let X=_[Z];if(X==='"')if(G&&_[Z+1]==='"')Z+=1;else G=!G;else if(!G&&X===$)j+=1}return j}function Dz(_){let $=_.split(/\r?\n/).map((G)=>G.trimEnd()).filter((G)=>G.trim().length>0).slice(0,10),j={delimiter:"\t",score:-1};for(let G of Uz){let Z=$.map((V)=>Hz(V,G)).filter((V)=>V>0);if(!Z.length)continue;let X=Z.reduce((V,K)=>V+K,0)/Z.length,Y=Z.filter((V)=>Math.abs(V-X)<1).length/Z.length,q=X*Y*Z.length;if(q>j.score)j={delimiter:G,score:q}}return j.delimiter}function Ez(_,$,j){let G=[],Z=[],X="",Y=!1,q=!1,V=()=>{Z.push(X),X=""},K=()=>{if(V(),!(Z.length===1&&Z[0]===""&&G.length>0))G.push(Z);if(Z=[],G.length>=j)q=!0};for(let L=0;L<_.length;L+=1){if(q)break;let Q=_[L];if(Q==='"')if(Y&&_[L+1]==='"')X+='"',L+=1;else Y=!Y;else if(!Y&&Q===$)V();else if(!Y&&(Q===`
`||Q==="\r")){if(Q==="\r"&&_[L+1]===`
`)L+=1;K()}else X+=Q}if(!q&&(X.length>0||Z.length>0))K();return{rows:G,truncatedRows:q}}function Oz(_,$){return _.map((j)=>{let G=j.slice(0,$);while(G.length<$)G.push("");return G})}function HV(_,$={}){let j=Math.max(1,$.maxRows??500),G=Math.max(1,$.maxColumns??80),Z=$.delimiter||Dz(_),X=Ez(_,Z,j+1),Y=X.rows.slice(0,j),q=Y.reduce((D,H)=>Math.max(D,H.length),0),V=Math.min(Math.max(1,q),G),K=q>G,L=Oz(Y,V),Q=L[0]||[],N=L.slice(1),B=Q.some((D)=>D.trim().length>0)&&N.length>0,U=B?Q.map((D,H)=>D.trim()||`Column ${H+1}`):Array.from({length:V},(D,H)=>`Column ${H+1}`),E=B?N:L;return{delimiter:Z,headers:U,rows:E,columnCount:V,rowCount:E.length,truncatedRows:X.truncatedRows||X.rows.length>j,truncatedColumns:K}}var Wz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),zz=new Set(["text/markdown"]),Jz=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Az=new Set(["application/eml","message/rfc822"]);function e$(_){return typeof _==="string"?_.trim().toLowerCase():""}function kz(_){let $=e$(_);return!!$&&$.endsWith(".eml")}function Mz(_){let $=e$(_);return!!$&&$.endsWith(".pdf")}function yz(_){let $=e$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var wz=new Set(["application/zip","application/x-zip-compressed"]);function Tz(_){let $=e$(_);return!!$&&$.endsWith(".zip")}function xz(_){let $=e$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function Iz(_){let $=e$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function M5(_,$){let j=q8(_,$);if(j?.id)return j.id;let G=e$(_);if(Mz($)||G==="application/pdf")return"pdf";if(yz($)||Jz.has(G))return"office";if(kz($)||Az.has(G))return"eml";if(Tz($)||wz.has(G))return"archive";if(xz($)||G==="text/html")return"html";if(FV(G,$))return"delimited";if(Iz($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(Wz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function DV(_){let $=e$(_);return zz.has($)}function V8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"delimited":return"Table preview";case"archive":return"ZIP archive preview";default:return VV(_)||"Preview unavailable"}}var Cz=new TextDecoder("utf-8",{fatal:!1});function y6(_,$){return _[$]|_[$+1]<<8}function R4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function EV(_,$,j){return Cz.decode(_.subarray($,$+j))}function Pz(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(R4(_,j)===101010256)return j;return-1}function fz(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(R4(_,G)===117853008)return!0;return!1}function Rz(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function Sz(_){return String(_||"").replace(/\\/g,"/").trim()}function OV(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function WV(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=Pz($);if(j<0)throw Error("ZIP archive directory could not be found.");if(fz($,j))throw Error("ZIP64 archives are not previewable yet.");let G=y6($,j+10),Z=R4($,j+12),X=R4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,V=X+Z;while(q<V){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(R4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let Q=y6($,q+8),N=y6($,q+10),B=R4($,q+20),U=R4($,q+24),E=y6($,q+28),D=y6($,q+30),H=y6($,q+32),k=q+46,z=k+E+D,W=z+H;if(W>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let I=(Q&2048)===2048,x=Sz(EV($,k,E)),A=EV($,z,H),M=x.endsWith("/");if(x)Y.push({path:x,isDirectory:M,compressedSize:B,uncompressedSize:U,compressionMethod:N,comment:I?A:A});q=W}Y.sort((Q,N)=>{if(Q.isDirectory!==N.isDirectory)return Q.isDirectory?-1:1;return Q.path.localeCompare(N.path)});let K=Y.filter((Q)=>!Q.isDirectory),L=Rz(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:L.size,totalEntries:Y.length,compressedBytes:K.reduce((Q,N)=>Q+N.compressedSize,0),uncompressedBytes:K.reduce((Q,N)=>Q+N.uncompressedSize,0)}}}function zV(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var uz="allow-scripts";function gz(_=!1){return`image-modal attachment-preview-modal${_?" maximized":""}`}function bz(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function vz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function mz(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function cz(_){if(_==="\t")return"Tab";if(_===",")return"Comma";if(_===";")return"Semicolon";if(_==="|")return"Pipe";return null}function hz(_,$=null,j=null,G=null){let Z=_?.metadata?.size,X=_?.content_type||"application/octet-stream",Y=j?.summary||null;return[{label:"Type",value:X},{label:"Syntax",value:$},{label:"Delimiter",value:G?cz(G.delimiter):null},{label:"Rows",value:G?`${G.rowCount}${G.truncatedRows?"+":""}`:null},{label:"Columns",value:G?`${G.columnCount}${G.truncatedColumns?"+":""}`:null},{label:"Entries",value:Y?String(Y.totalEntries):null},{label:"Files",value:Y?String(Y.fileCount):null},{label:"Folders",value:Y?String(Y.directoryCount):null},{label:"Compressed",value:Y?a_(Y.compressedBytes):null},{label:"Uncompressed",value:Y?a_(Y.uncompressedBytes):null},{label:"Savings",value:zV(Y)},{label:"Size",value:typeof Z==="number"?a_(Z):null},{label:"Added",value:_?.created_at?T4(_.created_at):null}].filter((q)=>q.value)}function lz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function pz(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function JV({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Y0(()=>q8($?.content_type,G),[$?.content_type,G]),X=Y0(()=>M5($?.content_type,G),[$?.content_type,G]),Y=Z?.label||V8(X),q=Y0(()=>DV($?.content_type),[$?.content_type]),[V,K]=P(X==="text"||X==="html"||X==="archive"||X==="delimited"),[L,Q]=P(""),[N,B]=P(null),[U,E]=P(null),[D,H]=P(null),[k,z]=P(!1),W=g(null),I=Y0(()=>lz($,G),[$,G]),x=Y0(()=>I?bZ(I):null,[I]),A=Y0(()=>hz($,!q?x:null,N,U),[$,q,x,N,U]),M=Y0(()=>Z?QV(Z.id,_,G):pz(_,G,X),[Z,_,G,X]),O=Y0(()=>KV(Z?.id||X),[Z?.id,X]),y=Y0(()=>{if(!q||!L)return"";return Z1(L)},[q,L]),T=Y0(()=>{if(q||!L||!I)return"";return F2(L,I)},[q,L,I]);return u(()=>{let J=(C)=>{if(C.key!=="Escape")return;if(k){z(!1);return}j()};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[k,j]),u(()=>{if(!W.current||!y)return;D$(W.current);return},[y]),u(()=>{let J=!1;async function C(){if(X!=="text"&&X!=="html"&&X!=="archive"&&X!=="delimited"){K(!1),H(null),Q(""),B(null),E(null);return}K(!0),H(null),Q(""),B(null),E(null);try{let f=await M7(_),b=new Uint8Array(await f.arrayBuffer());if(X==="text"||X==="html"||X==="delimited"){if(X==="text"&&vz($,G)&&!bz(b))throw Error("Attachment does not appear to contain text content.");let l=mz(b);if(!J){if(Q(l),X==="delimited")E(HV(l,{delimiter:UV($?.content_type,G)}))}return}let m=WV(b);if(!J)B(m)}catch(f){if(!J){let b=f instanceof Error?f.message:String(f||"Unknown error");H(X==="archive"?`Failed to load ZIP preview. ${b}`:X==="delimited"?`Failed to load table preview. ${b}`:`Failed to load text preview. ${b}`)}}finally{if(!J)K(!1)}}return C(),()=>{J=!0}},[_,X,$?.content_type,G]),F`
        <${n$} className="attachment-preview-portal-root">
            <div class=${gz(k)} onClick=${j}>
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
                                href=${u1(_)}
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
                        ${!V&&D&&F`<div class="attachment-preview-state">${D}</div>`}
                        ${!V&&!D&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!V&&!D&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!V&&!D&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${L||""} sandbox=${uz} title=${G}></iframe>
                        `}
                        ${!V&&!D&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&M&&F`
                            <iframe class="attachment-preview-frame" src=${M} title=${G}></iframe>
                        `}
                        ${!V&&!D&&O&&F`
                            <div class="attachment-preview-readonly-note">${O}</div>
                        `}
                        ${!V&&!D&&X==="delimited"&&U&&F`
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
                        ${!V&&!D&&X==="archive"&&N&&F`
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
                                                    <td>${J.isDirectory?"—":OV(J.compressionMethod)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.compressedSize)}</td>
                                                    <td>${J.isDirectory?"—":a_(J.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!D&&X==="text"&&q&&F`
                            <div
                                ref=${W}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:y}}
                            />
                        `}
                        ${!V&&!D&&X==="text"&&!q&&T&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:T}} /></pre>
                        `}
                        ${!V&&!D&&X==="text"&&!q&&!T&&F`
                            <pre class="attachment-preview-text">${L}</pre>
                        `}
                        ${!V&&!D&&X==="unsupported"&&F`
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
        </${n$}>
    `}y0();I_();m2();B9();function rz(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function nz(_){if(!_||typeof _!=="object")return!0;if(rz(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function dz(_){if(!A5(_))return!1;if(!nz(_?.target))return!1;return!i$.some((j)=>z$(_,j.id))}function AV(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function iz(_){let $=[],j=new Map(s$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function kV(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function oz(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function K8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function sz(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function MV({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:V,onToggleTerminalDock:K,onPrefillCompose:L}){let[Q,N]=P(!1),[B,U]=P(""),[E,D]=P(0),[H,k]=P([]),[z,W]=P({workspaceCommands:null,slashCommands:null}),I=g(null),x=g(null),A=R(async()=>{try{let T=await V5();W(a$(T?.settings))}catch{W({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{A()},[A]),u(()=>{let T=!1;return q5($).then((J)=>{if(T)return;k(Array.isArray(J?.commands)?J.commands:[])}).catch(()=>{if(T)return;k([])}),()=>{T=!0}},[$]);let M=Y0(()=>iz({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:V,onToggleTerminalDock:K}),[G,q,V,K,Z,j]),O=Y0(()=>lY({agents:_,workspaceCommands:M,slashCommands:H,settings:z,query:B}),[_,B,z,H,M]);if(u(()=>{if(O.length===0){D(-1);return}if(!B.trim()){D(0);return}let T=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!T){D(0);return}let J=0,C=0;for(let f=0;f<O.length;f++){let b=O[f],m=(b.title||"").toLowerCase().replace(/^[@/]+/,"");if(m===T){J=f;break}let l=0;if(m.startsWith(T))l=3;else if(m.includes(T))l=2;else if((b.subtitle||"").toLowerCase().includes(T))l=1;if(l>C)C=l,J=f}D(J)},[O,B]),u(()=>{if(!Q)return;requestAnimationFrame(()=>x.current?.focus?.())},[Q]),u(()=>{let T=(C)=>{if(!Q){if(!dz(C))return;C.preventDefault(),U(String(C.key||"")),D(0),N(!0);return}if(C.key==="Escape"){C.preventDefault(),N(!1),U("");return}if(C.key==="ArrowDown"){C.preventDefault(),D((f)=>O.length>0?(f+1+O.length)%O.length:0);return}if(C.key==="ArrowUp"){C.preventDefault(),D((f)=>O.length>0?(f-1+O.length)%O.length:0);return}if(C.key==="Enter"&&O[E]){C.preventDefault();let f=O[E],b=C.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(b)sz(f.chatJid);else X?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")Y?.();if(f.commandId==="toggle-chat-only")AV(G);if(f.commandId==="open-terminal-tab")q?.();if(f.commandId==="open-vnc-tab")V?.();if(f.commandId==="toggle-terminal-dock")K?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)L?.(f.commandName)}N(!1),U("")}},J=(C)=>{if(!Q)return;if(I.current?.contains(C.target))return;N(!1),U("")};return window.addEventListener("keydown",T,!0),document.addEventListener("pointerdown",J,!0),()=>{window.removeEventListener("keydown",T,!0),document.removeEventListener("pointerdown",J,!0)}},[G,E,O,q,V,L,X,K,Y,Q]),u(()=>{let T=(J)=>{let C=a$(J?.detail?.settings);if(J?.detail?.settings){W(C);return}A()};return window.addEventListener("focus",T),window.addEventListener("piclaw:quick-actions-settings-updated",T),()=>{window.removeEventListener("focus",T),window.removeEventListener("piclaw:quick-actions-settings-updated",T)}},[A]),!Q)return null;let y=null;return F`
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
                                onInput=${(T)=>{U(T.currentTarget?.value||""),D(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${K8("Move","↑↓")}
                                ${K8("Select","↵")}
                                ${K8("Pop out","Alt+↵")}
                                ${K8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${O.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${O.map((T,J)=>{let C=T.kind!==y;return y=T.kind,F`
                                ${C&&F`<div class="timeline-quick-actions-section">${kV(T.kind)}</div>`}
                                <button
                                    key=${T.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${T.kind}${J===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(T.kind==="agent"&&T.chatJid)X?.(T.chatJid);if(T.kind==="workspace"&&T.commandId==="toggle-workspace")Y?.();if(T.kind==="workspace"&&T.commandId==="open-explorer")Y?.();if(T.kind==="workspace"&&T.commandId==="toggle-chat-only")AV(G);if(T.kind==="workspace"&&T.commandId==="open-terminal-tab")q?.();if(T.kind==="workspace"&&T.commandId==="open-vnc-tab")V?.();if(T.kind==="workspace"&&T.commandId==="toggle-terminal-dock")K?.();if(T.kind==="workspace"&&T.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(T.kind==="slash"&&T.commandName)L?.(T.commandName);N(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${oz(T)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${T.title}</span>
                                            ${T.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${T.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${T.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${T.categoryLabel||kV(T.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}y0();function yV({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,V]=P(!1),[K,L]=P({top:8,left:8}),Q=g(null),N=g(null),B=g(null);u(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),B.current=H,()=>{H.remove(),B.current=null}},[]),u(()=>{let H=()=>{if(_){let W=document.querySelector(".workspace-sidebar");if(W){let I=W.getBoundingClientRect();L({top:I.top+8,left:I.left+8})}}else L({top:8,left:8})};H();let k=new ResizeObserver(H),z=document.querySelector(".workspace-sidebar");if(z)k.observe(z);return window.addEventListener("resize",H),()=>{k.disconnect(),window.removeEventListener("resize",H)}},[_]),u(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!B.current)return;let H=B.current.style;H.top=`${K.top}px`,H.left=`${K.left}px`,H.right="auto"},[K]),u(()=>{if(!q)return;let H=(k)=>{if(Q.current?.contains(k.target))return;if(N.current?.contains(k.target))return;V(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[q]),u(()=>{if(!q)return;let H=(k)=>{if(k.key==="Escape")V(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[q]),u(()=>{V(!1)},[_]);let U=R((H)=>{V(!1),H?.()},[]),E=R(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),D=F`
        <button ref=${N} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>V((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${Q} role="menu">
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
    `;return j6(()=>{if(B.current)L$(D,B.current)}),null}y0();I_();var wV="PiClaw";function v9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],V=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",L=K?K:null,Q=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Z,color:q,image:L||(Q?"/static/icon-192.png":null)}}function TV(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function xV(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function IV(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",V=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(V&&(q||Y&&Y!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function m9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function az(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function CV(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return az($[1].trim())||null}function PV(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=m9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=m9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=m9(j.command),Y=CV(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let V=CV(q);if(V)return V}return null}var tz=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,ez=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,_J=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,$J=1e4,fV=132;function jJ(_,$=fV){let j=Number.isFinite($)&&$>0?Math.floor($):fV;return String(_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`).map((G)=>G.length>j?`${G.slice(0,j)}…`:G).join(`
`)}function GJ(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function ZJ(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function XJ(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function YJ(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function RV(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return r$(_)!==null}function SV(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&P2(_)!==null}function qJ(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=$J}function VJ(_,$=Date.now()){if(!RV(_))return null;let j=r$(_);if(j===null||!qJ(j,$))return null;let G=cV(new Date(j).toISOString(),$);return G?`${G} ago`:null}function KJ(_,$=Date.now()){if(!SV(_))return null;if(P2(_)===null)return null;return E5(_,$)}function uV(_){return typeof _==="string"&&/^streaming output\.{3}$/i.test(_.trim())}function QJ(_){if(typeof _!=="string")return"";return _.replace(/[…]+/g,".").replace(/\s+/g," ").trim().replace(/[\s:;,.!?-]+$/g,"").toLowerCase()}function LJ(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";return $==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.toolName||_.tool_args||_.toolArgs)}function gV(_){if(!LJ(_))return"";let $=_?.status||_?.tool_status||_?.toolStatus;if(uV($))return"";return QJ($)}function bV(_,$){let j=typeof _==="string"?_:"",G=typeof $==="string"?$.trim():"";if(!j||!G)return j;let Z=G.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return j.replace(new RegExp(`\\s*[:—-]\\s*${Z}\\s*$`,"i"),"")}function Q8(_){return _?F`<span class="agent-tool-status-pill">${_}</span>`:null}function BJ(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G&&uV(Z)?G:G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function NJ(_){let $=_?.tool_name||_?.toolName||"";return typeof $==="string"?$.trim().toLowerCase():""}function FJ(_){let $=typeof _==="string"?_.replace(/\s+/g," ").trim():"";if(!$)return"";let j=120;return $.length>j?`${$.slice(0,j)}…`:$}function vV(_){if(!_)return null;if(typeof _==="string")try{let $=JSON.parse(_);return vV($)}catch{return null}if(typeof _==="object"){let $=_,j=$.arguments||$.input||$.params||$.parameters||$.args||$.payload;return j&&typeof j==="object"?j:$}return null}function UJ(_){let $=vV(_?.tool_args||_?.toolArgs);if(!$)return[];let j=[],G=(Z)=>{let X=FJ(Z);if(X&&!j.includes(X))j.push(X)};if(G($.command),Array.isArray($.commands))G($.commands.filter((Z)=>typeof Z==="string").join(" && "));if(G($.path||$.filePath||$.target),Array.isArray($.paths))G($.paths.filter((Z)=>typeof Z==="string").join(", "));return G($.fileName||$.filename||$.file),G($.url),G($.query),j.sort((Z,X)=>X.length-Z.length)}function mV(_,$){let j=typeof _==="string"?_:"";if(!j)return null;let G=UJ($);for(let Y of G){let q=j.indexOf(Y);if(q>=0)return{prefix:j.slice(0,q),argument:Y,suffix:j.slice(q+Y.length)}}let Z=NJ($);if(!Z)return null;let X=j.match(/^([^:]+:\s*)(.+)$/is);if(!X||X[1].trim().replace(/:$/,"").toLowerCase()!==Z)return null;return{prefix:X[1],argument:X[2],suffix:""}}function HJ(_,$){let j=$?.status||$?.tool_status||$?.toolStatus,G=gV($),Z=G?bV(_,j):typeof _==="string"?_:"",X=typeof $?.title==="string"?$.title.trim():"",Y=mV(X,$);if(!Y?.argument)return G?F`${Z} ${Q8(G)}`:Z;let q=Z.lastIndexOf(Y.argument);if(q<0)return G?F`${Z} ${Q8(G)}`:Z;let V=q+Y.argument.length;return F`
        ${Z.slice(0,q)}<span class="agent-tool-argument">${Y.argument}</span>${Z.slice(V)}${G?F` ${Q8(G)}`:""}
    `}function DJ(_,$){let j=mV(_,$);if(!j?.argument)return _;let G=$?.status||$?.tool_status||$?.toolStatus,Z=gV($),X=Z?bV(j.suffix||"",G):j.suffix||"";return F`
        ${j.prefix}<span class="agent-tool-argument">${j.argument}</span>${X}${Z?F` ${Q8(Z)}`:""}
    `}function cV(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function c9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:V,turnId:K,steerQueued:L,onPanelToggle:Q,showCorePanels:N=!0,showExtensionPanels:B=!0}){let H=(j0)=>{if(!j0)return{text:"",totalLines:0,fullText:""};if(typeof j0==="string"){let o=j0,Z0=o?o.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:o,totalLines:Z0,fullText:o}}let W0=j0.text||"",p=j0.fullText||j0.full_text||W0,i=Number.isFinite(j0.totalLines)?j0.totalLines:p?p.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:W0,totalLines:i,fullText:p}},k=160,z=(j0)=>String(j0||"").replace(/<\/?internal>/gi,""),W=(j0)=>{if(!j0)return 1;return Math.max(1,Math.ceil(j0.length/160))},I=(j0,W0,p,i={})=>{let o=(j0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!o)return{text:"",omitted:0,totalLines:Number.isFinite(p)?p:0,visibleLines:0};let Z0=o.split(`
`),V0=i.direction==="tail",J0=Z0.length>W0?(V0?Z0.slice(-W0):Z0.slice(0,W0)).join(`
`):o,h0=Number.isFinite(p)?p:Z0.reduce((w0,m0)=>w0+W(m0),0),R0=J0?J0.split(`
`).reduce((w0,m0)=>w0+W(m0),0):0,I0=Math.max(h0-R0,0);return{text:J0,omitted:I0,totalLines:h0,visibleLines:R0}},x=H(j),A=H(G),M=H($),O=H({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),y=Boolean(x.text)||x.totalLines>0,T=Boolean(A.text)||A.totalLines>0,J=Boolean(M.fullText?.trim()||M.text?.trim()),C=Boolean(O.fullText?.trim()||O.text?.trim()),f=Boolean(_||J||y||T||C||Z||X),b=Array.isArray(Y)&&Y.length>0,[m,l]=P(new Set),[_0,v]=P(null),[e,O0]=P(()=>Date.now()),G0=(j0)=>l((W0)=>{let p=new Set(W0),i=!p.has(j0);if(i)p.add(j0);else p.delete(j0);if(typeof Q==="function")Q(j0,i);return p});u(()=>{l(new Set),v(null)},[K]),u(()=>{if(!(Array.isArray(Y)&&Y.some((p)=>p?.started_at||p?.last_activity_at)))return;let W0=setInterval(()=>O0(Date.now()),1000);return()=>clearInterval(W0)},[Y]);let $0=Y0(()=>ZJ(m),[m]);u(()=>{if(!$0||typeof document>"u")return;let j0=(W0)=>{if(W0?.defaultPrevented)return;if(W0?.key!=="Escape")return;if(W0?.altKey||W0?.ctrlKey||W0?.metaKey||W0?.shiftKey)return;let p=W0?.target;if(p instanceof Element){if(p.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(p.isContentEditable)return}if(l((i)=>{if(!(i instanceof Set)||!i.has($0))return i;let o=new Set(i);return o.delete($0),o}),typeof Q==="function")Q($0,!1);W0.preventDefault?.(),W0.stopPropagation?.()};return document.addEventListener("keydown",j0),()=>document.removeEventListener("keydown",j0)},[$0,Q]);let q0=O$(_),N0=Boolean(_?.last_activity||_?.lastActivity),t=Y0(()=>RV(_),[_]),K0=Y0(()=>SV(_),[_]),Q0=Y0(()=>PV(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[k0,s]=P(null);u(()=>{if(!Boolean(K0||_?.retry_at||_?.retryAt||t))return;O0(Date.now());let W0=setInterval(()=>O0(Date.now()),1000);return()=>clearInterval(W0)},[t,K0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Q0){s(null);return}let W0=!0;return y7(Q0).then((p)=>{if(!W0)return;if(p?.branch)s({branch:p.branch,repoPath:p.repo_path||null,path:Q0});else s(null)}).catch(()=>{if(W0)s(null)}),()=>{W0=!1}},[_?.type,Q0]);let X0=_?.turn_id||K,E0=IV(X0),C0=e2({steerQueued:L}),g0=(j0)=>j0,n0=Jq(_,{isLastActivity:N0}),j_=$8(_,{isLastActivity:N0}),c0=$8(null,{pendingRequest:!0}),d0=(j0)=>j0==="warning"?"#f59e0b":j0==="error"?"var(--danger-color)":j0==="success"?"var(--success-color)":E0,u0=X?.kind||"info",o0=d0(u0),v0=d0(_?.kind||(q0?"warning":"info")),a0=BJ(_,{isLastActivity:N0}),p0=VJ(_,e),F_=k0?.repoPath||"",t0=k0?.branch||"",b0=k0?YJ(F_,t0):"",A0=GJ(_?.status_hints||_?.statusHints),q_=Y0(()=>XJ(A0),[A0]),e0=Y0(()=>q_.filter((j0)=>j0?.key==="ssh"),[q_]),z_=Y0(()=>q_.filter((j0)=>j0?.key!=="ssh"),[q_]);if((!N||!f)&&(!B||!b))return null;let H0=({panelTitle:j0,text:W0,fullText:p,totalLines:i,maxLines:o,titleClass:Z0,panelKey:V0})=>{let J0=m.has(V0),h0=p||W0||"",R0=V0==="thought"||V0==="draft"?z(h0):h0,I0=typeof o==="number",w0=J0&&I0,m0=V0==="tool-output",U0=I0?I(R0,o,i,{direction:m0?"tail":"head"}):{text:R0||"",omitted:0,totalLines:Number.isFinite(i)?i:0},l0=m0&&!J0?jJ(U0.text):R0;if(!R0&&!(Number.isFinite(U0.totalLines)&&U0.totalLines>0))return null;let Y_=`agent-thinking-body${I0?" agent-thinking-body-collapsible":""}`,G_=I0?`--agent-thinking-collapsed-lines: ${o};`:"",S0=m0&&!J0&&I0,Q_=!J0&&U0.omitted>0,V_=(Q_||S0)&&F`
            <button
                class=${`agent-thinking-truncation${Q_?"":" agent-thinking-truncation-placeholder"}`}
                onClick=${Q_?()=>G0(V0):void 0}
                aria-hidden=${Q_?void 0:"true"}
                tabindex=${Q_?void 0:"-1"}
            >
                ${Q_?`▸ ${U0.omitted} more lines`:"▸ 0 more lines"}
            </button>
        `;return F`
            <div
                class="agent-thinking"
                data-expanded=${J0?"true":"false"}
                data-collapsible=${I0?"true":"false"}
                data-panel-key=${V0||""}
                style=${E0?`--turn-color: ${E0};`:""}
            >
                <div class="agent-thinking-title ${Z0||""}">
                    ${E0&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${j0}
                    ${w0&&F`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${j0} panel`}
                            onClick=${()=>G0(V0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                ${m0?V_:null}
                <div
                    class=${Y_}
                    style=${G_}
                    dangerouslySetInnerHTML=${{__html:j5(l0)}}
                />
                ${m0?null:V_}
                ${J0&&U0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>G0(V0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},f0=Z?.tool_call?.title,T0=f0?`Awaiting approval: ${f0}`:"Awaiting approval",i0=KJ(_,e),A_=(j0,W0,p=null)=>{let i=f2(j0),o=aX(j0,e),Z0=[p,o].filter(Boolean).join(" · "),V0=e2({steerQueued:L,pulsing:O$(j0)||Boolean(o)});return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${W0?`--turn-color: ${W0};`:""}
                title=${j0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${W0&&F`<span class=${V0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${DJ(i,j0)}</span>
                    ${Z0&&F`<span class="agent-status-elapsed">${Z0}</span>`}
                </div>
                ${j0.detail&&F`<div class="agent-thinking-body">${j0.detail}</div>`}
            </div>
        `},K_=(j0,W0,p,i,o,Z0,V0,J0=8,h0=8)=>{let R0=Math.max(o-i,0.000000001),I0=Math.max(W0-J0*2,1),w0=Math.max(p-h0*2,1),m0=Math.max(V0-Z0,1),U0=V0===Z0?W0/2:J0+(j0.run-Z0)/m0*I0,l0=h0+(w0-(j0.value-i)/R0*w0);return{x:U0,y:l0}},E_=(j0,W0,p,i,o,Z0,V0,J0=8,h0=8)=>{if(!Array.isArray(j0)||j0.length===0)return"";return j0.map((R0,I0)=>{let{x:w0,y:m0}=K_(R0,W0,p,i,o,Z0,V0,J0,h0);return`${I0===0?"M":"L"} ${w0.toFixed(2)} ${m0.toFixed(2)}`}).join(" ")},D_=(j0,W0="")=>{if(!Number.isFinite(j0))return"—";return`${Math.abs(j0)>=100?j0.toFixed(0):j0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${W0}`},M_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],C_=(j0,W0)=>{let p=M_;if(!Array.isArray(p)||p.length===0)return"var(--accent-color)";if(p.length===1||!Number.isFinite(W0)||W0<=1)return p[0];let o=Math.max(0,Math.min(Number.isFinite(j0)?j0:0,W0-1))/Math.max(1,W0-1)*(p.length-1),Z0=Math.floor(o),V0=Math.min(p.length-1,Z0+1),J0=o-Z0,h0=p[Z0],R0=p[V0];if(!R0||Z0===V0||J0<=0.001)return h0;if(J0>=0.999)return R0;let I0=Math.round((1-J0)*1000)/10,w0=Math.round(J0*1000)/10;return`color-mix(in oklab, ${h0} ${I0}%, ${R0} ${w0}%)`},u_=(j0,W0="autoresearch")=>{let p=Array.isArray(j0)?j0.map((U0)=>({...U0,points:Array.isArray(U0?.points)?U0.points.filter((l0)=>Number.isFinite(l0?.value)&&Number.isFinite(l0?.run)):[]})).filter((U0)=>U0.points.length>0):[],i=p.map((U0,l0)=>({...U0,color:C_(l0,p.length)}));if(i.length===0)return null;let o=320,Z0=120,V0=i.flatMap((U0)=>U0.points),J0=V0.map((U0)=>U0.value),h0=V0.map((U0)=>U0.run),R0=Math.min(...J0),I0=Math.max(...J0),w0=Math.min(...h0),m0=Math.max(...h0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${o} ${Z0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((U0)=>{let l0=U0?.key||U0?.label||"series",Y_=_0?.panelKey===W0&&_0?.seriesKey===l0;return F`
                                <g key=${l0}>
                                    <path
                                        class=${`agent-series-chart-line${Y_?" is-hovered":""}`}
                                        d=${E_(U0.points,o,Z0,R0,I0,w0,m0)}
                                        style=${`--agent-series-color: ${U0.color};`}
                                        onMouseEnter=${()=>v({panelKey:W0,seriesKey:l0})}
                                        onMouseLeave=${()=>v((G_)=>G_?.panelKey===W0&&G_?.seriesKey===l0?null:G_)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((U0)=>{let l0=typeof U0?.unit==="string"?U0.unit:"",Y_=U0?.key||U0?.label||"series";return U0.points.map((G_,S0)=>{let Q_=K_(G_,o,Z0,R0,I0,w0,m0);return F`
                                    <button
                                        key=${`${Y_}-point-${S0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${U0.color}; left:${Q_.x/o*100}%; top:${Q_.y/Z0*100}%;`}
                                        onMouseEnter=${()=>v({panelKey:W0,seriesKey:Y_,run:G_.run,value:G_.value,unit:l0})}
                                        onMouseLeave=${()=>v((V_)=>V_?.panelKey===W0?null:V_)}
                                        onFocus=${()=>v({panelKey:W0,seriesKey:Y_,run:G_.run,value:G_.value,unit:l0})}
                                        onBlur=${()=>v((V_)=>V_?.panelKey===W0?null:V_)}
                                        aria-label=${`${U0?.label||"Series"} ${D_(G_.value,l0)} at run ${G_.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((U0)=>{let l0=U0.points[U0.points.length-1]?.value,Y_=typeof U0?.unit==="string"?U0.unit:"",G_=U0?.key||U0?.label||"series",S0=_0?.panelKey===W0&&_0?.seriesKey===G_?_0:null,Q_=S0&&Number.isFinite(S0.value)?S0.value:l0,V_=S0&&typeof S0.unit==="string"?S0.unit:Y_,d=S0&&Number.isFinite(S0.run)?S0.run:null;return F`
                            <div key=${`${G_}-legend`} class=${`agent-series-legend-item${S0?" is-hovered":""}`} style=${`--agent-series-color: ${U0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${U0.color};`}></span>
                                <span class="agent-series-legend-label">${U0?.label||"Series"}</span>
                                ${d!==null&&F`<span class="agent-series-legend-run">run ${d}</span>`}
                                <span class="agent-series-legend-value">${D_(Q_,V_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},O_=(j0)=>{if(!j0)return null;let W0=typeof j0?.key==="string"?j0.key:`panel-${Math.random()}`,p=m.has(W0),i=j0?.title||"Extension status",o=j0?.collapsed_text||"",Z0=String(j0?.state||"").replace(/[-_]+/g," ").replace(/^./,(Q_)=>Q_.toUpperCase()),V0=d0(j0?.state==="completed"?"success":j0?.state==="failed"?"error":j0?.state==="stopped"?"warning":"info"),J0=e2({steerQueued:L,pulsing:j0?.state==="running"}),h0=typeof j0?.detail_markdown==="string"?j0.detail_markdown.trim():"",R0=typeof j0?.last_run_text==="string"?j0.last_run_text.trim():"",I0=typeof j0?.tmux_command==="string"?j0.tmux_command.trim():"",w0=Array.isArray(j0?.series)?j0.series:[],m0=Array.isArray(j0?.actions)?j0.actions:[],U0=j0?.started_at?E5(j0,e):null,l0=o,Y_=Boolean(h0||I0||U0),G_=Boolean(h0||w0.length>0||I0),S0=[i,l0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${p?"true":"false"}
                style=${V0?`--turn-color: ${V0};`:""}
                title=${!p?S0||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>G_?G0(W0):null}
                    >
                        ${V0&&F`<span class=${J0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${l0&&F`<span class="agent-thinking-title-meta">${l0}</span>`}
                        ${U0&&F`<span class="agent-status-elapsed">${U0}</span>`}
                    </button>
                    ${(m0.length>0||G_)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${m0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${m0.map((Q_)=>{let V_=`${W0}:${Q_?.key||""}`,d=q?.has?.(V_);return F`
                                            <button
                                                key=${V_}
                                                class=${`agent-thinking-action-btn${Q_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(j0,Q_)}
                                                disabled=${Boolean(d)}
                                            >
                                                ${d?"Working…":Q_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${G_&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${p?"Collapse":"Expand"} ${i}`}
                                    title=${p?"Collapse details":"Expand details"}
                                    onClick=${()=>G0(W0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${p?F`<polyline points="4 6 8 10 12 6"></polyline>`:F`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${p&&F`
                    <div class=${`agent-thinking-autoresearch-layout${Y_?"":" chart-only"}`}>
                        ${Y_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${U0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${U0}</span>
                                        ${j0?.last_activity_at&&j0?.state==="running"&&F`<span title="Since last activity">⟳ ${cV(j0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${h0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:j5(h0)}}
                                    />
                                `}
                                ${I0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${I0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>V?.(j0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${tz}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${w0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${u_(w0,W0)}
                                    ${R0&&F`<div class="agent-series-chart-note">${R0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${N&&X&&A_(X,o0)}
            ${B&&Array.isArray(Y)&&Y.map((j0)=>O_(j0))}
            ${N&&_?.type==="intent"&&A_(_,v0,i0)}
            ${N&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    ${c0==="dot"&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${c0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${T0}</span>
                </div>
            `}
            ${N&&y&&H0({panelTitle:g0("Planning"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,panelKey:"plan"})}
            ${N&&J&&H0({panelTitle:g0("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${N&&T&&H0({panelTitle:g0("Thoughts"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${N&&C&&H0({panelTitle:g0("Output"),text:O.text,fullText:O.fullText,totalLines:O.totalLines,maxLines:5,titleClass:"tool-output",panelKey:"tool-output"})}
            ${N&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${N0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${b0||A0.length>0||p0?" agent-status-multiline":""}`} aria-live="polite" style=${E0?`--turn-color: ${E0};`:""}>
                    ${E0&&n0&&F`<span class=${C0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:j_==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${HJ(a0,_)}</span>
                        ${(b0||q_.length>0||p0)&&F`
                            <span class="agent-status-meta-row">
                                ${e0.map((j0)=>F`
                                    <span key=${j0.key} class="agent-status-hint-row" title=${j0.title||j0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:j0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${j0.label}</span>
                                    </span>
                                `)}
                                ${b0&&F`
                                    <span class="agent-status-git-row" title=${Q0||b0}>
                                        <span class="agent-status-git-icon">${ez}</span>
                                        <span class="agent-status-git-label">
                                            ${F_&&F`<span class="agent-status-git-part">${F_}</span>`}
                                            ${F_&&t0&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${t0&&F`<span class="agent-status-git-part">${t0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${z_.map((j0)=>F`
                                    <span key=${j0.key} class="agent-status-hint-row" title=${j0.title||j0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:j0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${j0.label}</span>
                                    </span>
                                `)}
                                ${p0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${N0?"Recent activity":"Last event"} ${p0}`}>
                                        <span class="agent-status-hint-icon">${_J}</span>
                                        <span class="agent-status-hint-label">${p0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function hV({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",V=G?.rawInput||{},K=V.command||V.commands&&V.commands[0]||null,L=V.diff||null,Q=V.fileName||V.path||null,N=G?.description||V.description||V.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((z)=>z?.path).filter((z)=>Boolean(z)),E=Array.from(new Set([Q,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let D=async(z)=>{try{await D6(j,z,X||null),$()}catch(W){console.error("Failed to respond to agent request:",W)}},H=async()=>{try{await A7(Y,`Auto-approved: ${Y}`),await D6(j,"approved",X||null),$()}catch(z){console.error("Failed to add to whitelist:",z)}},k=Z&&Z.length>0;return F`
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
                ${(N||K||L||E.length>0)&&F`
                    <div class="agent-request-body">
                        ${N&&F`
                            <div class="agent-request-description">${N}</div>
                        `}
                        ${E.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((z,W)=>F`<li key=${W}>${z}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&F`
                            <pre class="agent-request-command">${K}</pre>
                        `}
                        ${L&&F`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${L}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${k?Z.map((z)=>F`
                            <button 
                                key=${z.optionId||z.id||String(z)}
                                class="agent-request-btn ${z.kind==="allow_once"||z.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(z.optionId||z.id||z)}
                            >
                                ${z.name||z.label||z.optionId||z.id||String(z)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}y0();y0();I_();function y5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>y5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${y5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function lV(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:y5(j)})).filter(($)=>$.value)}function EJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function h9(_){if(!Array.isArray(_))return[];return _.filter(EJ)}function L8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=y5(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=lV(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function pV(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=lV(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):y5(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function f_(_){return typeof _==="string"?_.trim():""}function rV(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function OJ(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=f_(X.type);if(q==="text"){let V=f_(X.text)||f_(X.content);if(V)j.push(V);return}if(q==="resource_link"){let V=f_(X.uri),K=f_(X.title)||f_(X.name)||V;if(V&&K)j.push(K===V?V:`[${K}](${V})`);return}if(q==="resource"){let V=f_(X.title)||f_(X.name)||f_(X.uri)||"Embedded resource",K=f_(X.text);if(K)j.push(`### ${V}

\`\`\`
${K}
\`\`\``);else j.push(`### ${V}`);return}if(q==="generated_widget"){let V=f_(X.title)||f_(X.name)||"Generated widget",K=f_(X.description)||f_(X.subtitle);j.push(rV([`### ${V}`,K]));return}if(q==="adaptive_card"&&f_(X.fallback_text)){j.push(f_(X.fallback_text));return}if(q==="adaptive_card_submission"){let V=L8(X);if(f_(V))j.push(f_(V));return}if(q==="file"){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${V}`);return}if(q==="image"||!q){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${V}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return rV(j)}function B8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return OJ(G,Z)}function nV(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function dV(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function iV(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(nV(j,"aria-disabled","true"),nV(j,"tabindex","-1"),"disabled"in j)dV(j,"disabled");if("readOnly"in j)dV(j,"readOnly")}}function WJ(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function zJ(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function oV(_){return WJ(_)||zJ(_)}function N8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function JJ(_,$){let j=Math.max(N8(_),N8($)),G=Math.min(N8(_),N8($));return(j+0.05)/(G+0.05)}function AJ(_,$,j="#ffffff"){let G=oV(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=oV(Y);if(!q)continue;let V=JJ(G,q);if(V>X)Z=Y,X=V}return Z}function l9(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let D of U){let H=_.getPropertyValue(D).trim();if(H)return H}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),L=$(["--danger-color","--color-error"],"#f4212e"),Q=$(["--border-color","--color-border"],"#eff3f4"),N=$(["--font-family"],"system-ui, sans-serif"),B=AJ(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:V,warning:K,attention:L,border:Q,fontFamily:N,buttonTextColor:B}}function sV(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:V,fontFamily:K}=l9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var kJ=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),aV=!1,F8=null,tV=!1;function p9(_){_.querySelector(".adaptive-card-notice")?.remove()}function MJ(_,$,j="error"){p9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function yJ(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function wJ(_=($)=>Z1($,null)){return($,j)=>{try{let G=yJ($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function TJ(_){if(tV||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=wJ(),tV=!0}async function xJ(){if(aV)return;if(F8)return F8;return F8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{aV=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),F8}function IJ(){return globalThis.AdaptiveCards}function CJ(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function PJ(_){return kJ.has(_)}function n9(_){if(!Array.isArray(_))return[];return _.filter(CJ)}function fJ(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function r9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>r9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${r9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function RJ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return r9($);return typeof $==="string"?$:String($)}function SJ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=RJ(Y.type,j[Y.id],Y);for(let[q,V]of Object.entries(Y))if(Array.isArray(V)||V&&typeof V==="object")Y[q]=G(V);return Y};return G(_)}function uJ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function gJ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=uJ(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function eV(_,$,j){if(!PJ($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await xJ()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=IJ();TJ(G);let Z=new G.AdaptiveCard,X=l9();Z.hostConfig=new G.HostConfig(sV());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:SJ($.payload,Y);Z.parse(q),Z.onExecuteAction=(L)=>{let Q=fJ(L);if(j?.onAction)p9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Q)).catch((N)=>{console.error("[adaptive-card] Action failed:",N);let B=N instanceof Error?N.message:String(N||"Action failed.");MJ(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Q)};let V=Z.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=gJ($);if(K){_.classList.add("adaptive-card-finished");let L=document.createElement("div");L.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Q=document.createElement("span");if(Q.className="adaptive-card-status-label",Q.textContent=K.label,L.appendChild(Q),K.detail){let N=document.createElement("span");N.className="adaptive-card-status-detail",N.textContent=K.detail,L.appendChild(N)}_.appendChild(L)}if(p9(_),_.appendChild(V),K)iV(V);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}y0();S2();function _K({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${n$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${n$}>
    `}var U8=0,d9=null,w5={activePostId:null,speaking:!1},i9=new Set;function s9(_={}){return _.window??(typeof window<"u"?window:null)}function $K(_={}){return s9(_)?.speechSynthesis||null}function o9(){let _={...w5};for(let $ of i9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function a9(){return{...w5}}function jK(_){if(typeof _!=="function")return()=>{};return i9.add(_),_(a9()),()=>i9.delete(_)}function GK(_={}){let $=s9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function ZK(_){let $=B8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function XK(_={}){let $=$K(_);if(U8+=1,d9=null,w5={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}o9()}function YK(_,$,j={}){let G=s9(j),Z=$K(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=U8+1;U8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);d9=q,w5={activePostId:_,speaking:!0},o9();let V=()=>{if(Y!==U8)return;d9=null,w5={activePostId:null,speaking:!1},o9()};q.onend=V,q.onerror=V;try{return Z.speak(q),!0}catch(K){return console.warn("[post-speech] speak failed:",K),V(),!1}}async function VK(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function t9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let V=q?.clipboardData;if(!V||typeof V.setData!=="function")return;if(V.setData("text/plain",j),G)V.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function qK(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function KK(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let V=Z.getRangeAt(0);if(V&&typeof V.intersectsNode==="function")X=Boolean(V.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let V=qK(Z.anchorNode),K=qK(Z.focusNode);X=Boolean(V&&G.contains(V)||K&&G.contains(K))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function QK(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function LK(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function BK(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function bJ({mediaId:_,onPreview:$}){let[j,G]=P(null);if(u(()=>{y2(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",V=M5(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${u1(_)} download=${Z} class="file-attachment-main">
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
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function vJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function mJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function cJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function hJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function lJ(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function NK(_){let $=hJ(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():lJ(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function pJ(_,$){let j=NK($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var rJ={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function nJ(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=rJ[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function dJ(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function iJ({marker:_}){let[$,j]=P(!1),G=R((Q)=>{Q.stopPropagation(),j((N)=>!N)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,V=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),L=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${V}`}>
            <div class="post-outcome-pill-header" onClick=${L?G:void 0}>
                ${L&&F`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${K}</span>
                ${q&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&L&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function oJ({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=P(null);u(()=>{if(!Number.isFinite(j))return;y2(j).then(Z).catch((L)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,L)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,q=M5(G?.content_type,G?.filename||_?.label),V=V8(q),K=q!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(L)=>L.stopPropagation()}>
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
            ${Number.isFinite(j)&&G&&K&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function H8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?T4(G):null;return F`
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
    `}function sJ({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=eJ(Z),Y=J4(_.uri);return F`
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
    `}function aJ({block:_}){let[$,j]=P(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(Q)=>Q.charCodeAt(0))],{type:Y||"application/octet-stream"}),K=URL.createObjectURL(V),L=document.createElement("a");L.href=K,L.download=G.split("/").pop()||"resource",L.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function tJ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=u9(_,$),Z=dq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",K=g(!1),L=(Q)=>{if(Q)Q.preventDefault(),Q.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let Q=$?.timestamp?new Date($.timestamp).getTime():0;if(Q&&Date.now()-Q>1e4)return;let N=`widget_opened_${_.widget_id||$?.id||""}`;if(QK(sessionStorage,N))return;K.current=!0,LK(sessionStorage,N,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(Q)=>Q.stopPropagation()}>
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
                    onClick=${L}
                    title=${Z?"Open widget in a floating pane with a zen-mode toggle":"Unsupported widget artifact"}
                >
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane with a zen-mode toggle.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function eJ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function _A(_){let $=J4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function $A({preview:_}){let $=J4(_.url),j=_A(_.image),G=BK(_.site_name,$);return F`
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
    `}function jA(_,$){return typeof _==="string"?_:""}var FK=1800,GA=40,ZA=24576,XA=16,YA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,qA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,VA=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,KA=`
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
</style>`;function QA(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:GA,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:ZA,q=G.length>X||Z>Y,V=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:XA);return{shouldCollapse:q,lineCount:G.length,byteLength:Z,visibleLines:V,omittedLines:Math.max(0,G.length-V)}}async function UK(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(t9(document,{text:$}))return!0;if(await VK(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function LA(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${KA}</head><body>${j}</body></html>`;if(t9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return UK($)}function BA(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let V of $)if(KK(Y,{root:V,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let V=q||"idle";if(Y.dataset.copyState=V,V==="success")Y.innerHTML=qA,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(V==="error")Y.innerHTML=VA,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=YA,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block";let V=Y.querySelector("code"),K=QA(V?.textContent||"");if(K.shouldCollapse){q.classList.add("post-code-block-collapsed"),q.style.setProperty("--post-code-preview-lines",String(K.visibleLines));let N=document.createElement("button");N.type="button",N.className="post-code-expand-btn";let B=()=>{let E=q.classList.contains("post-code-block-expanded");N.textContent=E?"▴ Collapse output":`▸ Expand output · ${K.lineCount.toLocaleString()} lines · ${a_(K.byteLength)}${K.omittedLines?` · ${K.omittedLines.toLocaleString()} hidden`:""}`,N.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),q.classList.toggle("post-code-block-expanded"),B()};N.addEventListener("click",U),B(),q.appendChild(N),G.push(()=>N.removeEventListener("click",U))}Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",X(L,"idle"),q.appendChild(L);let Q=async(N)=>{N.preventDefault(),N.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await UK(U);X(L,E?"success":"error");let D=j.get(L);if(D)clearTimeout(D);let H=setTimeout(()=>{X(L,"idle"),j.delete(L)},FK);j.set(L,H)};L.addEventListener("click",Q),G.push(()=>{L.removeEventListener("click",Q);let N=j.get(L);if(N)clearTimeout(N);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function HK(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function NA(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=HK(K.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Z}}function FA(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=HK(K.replace(/^\s*-\s+/,"").trim());if(L)Z.push(L)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,folderRefs:Z}}function UA(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Z}}function HA(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let L=j[K].trim();if((L==="Images:"||L==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let L=K.replace(/^\s*-\s+/,"").trim(),Q=L.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||L.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Q){let N=Q[1],B=(Q[2]||"").trim()||N;Z.push({id:N,label:B,raw:L})}else Z.push({id:null,label:L,raw:L})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),V=[...Y,...q].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Z}}function DA(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function EA(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(DA).sort((L,Q)=>Q.length-L.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),V=[],K;while(K=q.nextNode())V.push(K);for(let L of V){let Q=L.nodeValue;if(!Q||!Z.test(Q)){Z.lastIndex=0;continue}Z.lastIndex=0;let N=L.parentElement;if(N&&N.closest("code, pre, script, style"))continue;let B=Q.split(Z).filter((E)=>E!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let E of B)if(X.test(E)){let D=Y.createElement("mark");D.className="search-highlight-term",D.textContent=E,U.appendChild(D)}else U.appendChild(Y.createTextNode(E));L.parentNode.replaceChild(U,L)}return Y.body.innerHTML}function DK({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:V,userAvatarBackground:K,onDelete:L,isThreadReply:Q,isThreadPrev:N,isThreadNext:B,isRemoving:U,highlightQuery:E,onFileRef:D,onOpenWidget:H,onOpenAttachmentPreview:k}){let[z,W]=P(null),[I,x]=P("idle"),[A,M]=P(()=>a9()),O=g(null),y=g(null),T=_.data,J=T.type==="agent_response",C=q||"You",f=J?X||wV:C,b=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",m=Boolean(J&&E&&b&&b!==f),l=J?v9(X,Y,!0):v9(C,V),_0=typeof K==="string"?K.trim().toLowerCase():"",v=!J&&l.image&&(_0==="clear"||_0==="transparent"),e=J&&Boolean(l.image),O0=`background-color: ${v||e?"transparent":l.color}`,G0=T.content_meta,$0=Boolean(G0?.truncated),q0=Boolean(G0?.preview),N0=$0&&!q0,t=$0?{originalLength:Number.isFinite(G0?.original_length)?G0.original_length:T.content?T.content.length:0,maxLength:Number.isFinite(G0?.max_length)?G0.max_length:0}:null,K0=T.content_blocks||[],Q0=T.media_ids||[],k0=NK(K0),s=Boolean(k0?.sourceAgentName),X0=jA(T.content,T.link_previews);X0=pJ(X0,K0);let{content:E0,fileRefs:C0}=NA(X0),{content:g0,folderRefs:n0}=FA(E0),{content:j_,messageRefs:c0}=UA(g0),d0=(d)=>{d?.preventDefault?.(),d?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},u0=(d)=>{if(d.key==="Enter"||d.key===" ")d0(d)},{content:o0,attachments:v0}=HA(j_);X0=o0;let a0=n9(K0),p0=h9(K0),t0=vJ(K0)[0]||null,A0=mJ(K0)[0]||null,e0=cJ(K0)[0]||null,z_=a0.length===1&&typeof a0[0]?.fallback_text==="string"?a0[0].fallback_text.trim():"",H0=p0.length===1?L8(p0[0]).trim():"",f0=Boolean(z_)&&X0?.trim()===z_||Boolean(H0)&&X0?.trim()===H0,T0=Boolean(X0)&&!N0&&!f0,i0=typeof E==="string"?E.trim():"",A_=Y0(()=>{if(!X0||f0)return"";let d=Z1(X0,j);return i0?EA(d,i0):d},[X0,f0,i0]),K_=Y0(()=>B8(_),[_]),E_=Y0(()=>GK(),[]),D_=Y0(()=>ZK(_),[_]),M_=Boolean(A.speaking&&A.activePostId===_.id),C_=(d,z0)=>{d.stopPropagation(),W(u1(z0))},u_=(d)=>{k?.(d)},O_=(d)=>{d.stopPropagation(),L?.(_)},j0=async(d)=>{d.stopPropagation();let z0=await LA(K_);if(x(z0?"success":"error"),y.current)clearTimeout(y.current);y.current=setTimeout(()=>{y.current=null,x("idle")},FK)},W0=(d)=>{if(d.stopPropagation(),M_){XK();return}YK(_.id,D_)},p=(d,z0)=>{let Z_=new Set;if(!d||z0.length===0)return{content:d,usedIds:Z_};return{content:d.replace(/attachment:([^\s)"']+)/g,(p_,F1,g_,J1)=>{let P_=F1.replace(/^\/+/,""),A1=z0.find((k_)=>k_.name&&k_.name.toLowerCase()===P_.toLowerCase()&&!Z_.has(k_.id))||z0.find((k_)=>!Z_.has(k_.id));if(!A1)return p_;if(Z_.add(A1.id),J1.slice(Math.max(0,g_-2),g_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:Z_}},i=[],o=[],Z0=[],V0=[],J0=[],h0=[],R0=[],I0=0;if(K0.length>0)K0.forEach((d)=>{if(d?.type==="text"&&d.annotations)R0.push(d.annotations);if(d?.type==="generated_widget")h0.push(d);else if(d?.type==="resource_link")V0.push(d);else if(d?.type==="resource")J0.push(d);else if(d?.type==="file"){let z0=Q0[I0++];if(z0)o.push(z0),Z0.push({id:z0,name:d?.name||d?.filename||d?.title})}else if(d?.type==="image"||!d?.type){let z0=Q0[I0++];if(z0){let Z_=typeof d?.mime_type==="string"?d.mime_type:void 0;i.push({id:z0,annotations:d?.annotations,mimeType:Z_}),Z0.push({id:z0,name:d?.name||d?.filename||d?.title})}}});else if(Q0.length>0){let d=v0.length>0;Q0.forEach((z0,Z_)=>{let B_=v0[Z_]||null;if(Z0.push({id:z0,name:B_?.label||null}),d)o.push(z0);else i.push({id:z0,annotations:null})})}if(v0.length>0)v0.forEach((d)=>{if(!d?.id)return;let z0=Z0.find((Z_)=>String(Z_.id)===String(d.id));if(z0&&!z0.name)z0.name=d.label});let{content:w0,usedIds:m0}=p(X0,Z0);X0=w0;let U0=i.filter(({id:d})=>!m0.has(d)),l0=o.filter((d)=>!m0.has(d)),Y_=v0.length>0?v0.map((d,z0)=>({id:d.id||`attachment-${z0+1}`,label:d.label||`attachment-${z0+1}`})):Z0.map((d,z0)=>({id:d.id,label:d.name||`attachment-${z0+1}`})),G_=Y0(()=>n9(K0),[K0]),S0=Y0(()=>h9(K0),[K0]),Q_=Y0(()=>{return G_.map((d)=>`${d.card_id}:${d.state}`).join("|")},[G_]);u(()=>{if(!O.current)return;return D$(O.current),BA(O.current)},[A_]),u(()=>{return jK((d)=>{M(d)})},[]),u(()=>()=>{if(y.current)clearTimeout(y.current)},[]);let V_=g(null);return u(()=>{if(!V_.current||G_.length===0)return;let d=V_.current;d.innerHTML="";for(let z0 of G_){let Z_=document.createElement("div");d.appendChild(Z_),eV(Z_,z0,{onAction:async(B_)=>{if(B_.type==="Action.OpenUrl"){let p_=J4(B_.url||"");if(!p_)throw Error("Invalid URL");window.open(p_,"_blank","noopener,noreferrer");return}if(B_.type==="Action.Submit"){await J7({post_id:_.id,thread_id:T.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:z0.card_id,action:{type:B_.type,title:B_.title||"",data:B_.data}});return}console.warn("[post] unsupported adaptive card action:",B_.type,B_)}}).catch((B_)=>{console.error("[post] adaptive card render error:",B_),Z_.textContent=z0.fallback_text||"Card failed to render."})}},[Q_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${J?"agent-post":""} ${Q?"thread-reply":""} ${N?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${J?"agent-avatar":""} ${l.image?"has-image":""}" style=${O0}>
                ${l.image?F`<img src=${l.image} alt=${f} />`:l.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${J&&E_&&D_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${M_?" is-active":""}`}
                            type="button"
                            title=${M_?"Stop reading aloud":"Read aloud"}
                            aria-label=${M_?"Stop reading aloud":"Read aloud"}
                            onClick=${W0}
                        >
                            ${M_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${I==="success"?" is-success":I==="error"?" is-error":""}`}
                        type="button"
                        title=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        aria-label=${I==="success"?"Copied":I==="error"?"Copy failed":"Copy message"}
                        onClick=${j0}
                        disabled=${!K_}
                    >
                        ${I==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:I==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${O_}
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
                            title=${`From ${k0?.sourceChatJid||""}`.trim()}
                        >
                            @${k0?.sourceAgentName}
                        </span>
                    `}
                    ${m&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${b} and reference this message`}
                            onClick=${d0}
                            onKeyDown=${u0}
                        >
                            @${b}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${d0}>${BX(_.timestamp)}</a>
                    ${t0&&F`
                        <span
                            class="post-recovery-chip"
                            title=${nJ(t0)}
                        >
                            recovered
                        </span>
                    `}
                    ${A0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${dJ(A0)}
                        >
                            timeout
                        </span>
                    `}
                    ${e0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(e0.severity||"warning")}${e0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(e0.label||e0.kind||"issue")}
                        >
                            ${String(e0.label||e0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${e0&&F`
                    <${iJ} marker=${e0} />
                `}
                ${N0&&t&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${N5(t.originalLength)} chars
                            ${t.maxLength?F` • Display limit: ${N5(t.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${q0&&t&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${N5(t.maxLength)} of ${N5(t.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(C0.length>0||n0.length>0||c0.length>0||Y_.length>0)&&F`
                    <div class="post-file-refs">
                        ${c0.map((d)=>{let z0=(Z_)=>{if(Z_.preventDefault(),Z_.stopPropagation(),Z)Z(d,_.chat_jid||null);else{let B_=document.getElementById("post-"+d);if(B_)B_.scrollIntoView({behavior:"smooth",block:"center"}),B_.classList.add("post-highlight"),setTimeout(()=>B_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${d}`} class="post-msg-pill-link" onClick=${z0}>
                                    <${q1}
                                        prefix="post"
                                        label=${"msg:"+d}
                                        title=${"Message "+d}
                                        icon="message"
                                        onClick=${z0}
                                    />
                                </a>
                            `})}
                        ${C0.map((d)=>{let z0=d.split("/").pop()||d;return F`
                                <${q1}
                                    prefix="post"
                                    label=${z0}
                                    title=${d}
                                    onClick=${()=>D?.(d)}
                                />
                            `})}
                        ${n0.map((d)=>{let z0=d.split("/").pop()||d;return F`
                                <${q1}
                                    prefix="post"
                                    label=${z0}
                                    title=${d}
                                    icon="folder"
                                />
                            `})}
                        ${Y_.map((d)=>F`
                            <${oJ}
                                key=${d.id}
                                attachment=${d}
                                onPreview=${u_}
                            />
                        `)}
                    </div>
                `}
                ${T0&&F`
                    <div 
                        ref=${O}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(d)=>{if(d.target.classList.contains("hashtag")){d.preventDefault(),d.stopPropagation();let z0=d.target.dataset.hashtag;if(z0)j?.(z0)}else if(d.target.tagName==="IMG")d.preventDefault(),d.stopPropagation(),W(d.target.src)}}
                    />
                `}
                ${G_.length>0&&F`
                    <div ref=${V_} class="post-adaptive-cards" />
                `}
                ${S0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${S0.map((d,z0)=>{let Z_=pV(d),B_=`${d.card_id}-${z0}`;return F`
                                <div key=${B_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Z_.title}</span>
                                        </div>
                                    </div>
                                    ${Z_.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${Z_.fields.map((p_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${p_.key}: ${p_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${p_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${p_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T4(Z_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${h0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${h0.map((d,z0)=>F`
                            <${tJ}
                                key=${d.widget_id||d.id||`${_.id}-widget-${z0}`}
                                block=${d}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${R0.length>0&&F`
                    ${R0.map((d,z0)=>F`
                        <${H8} key=${z0} annotations=${d} />
                    `)}
                `}
                ${U0.length>0&&F`
                    <div class="media-preview">
                        ${U0.map(({id:d,mimeType:z0})=>{let B_=typeof z0==="string"&&z0.toLowerCase().startsWith("image/svg")?u1(d):k7(d);return F`
                                <img
                                    key=${d}
                                    src=${B_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(p_)=>C_(p_,d)}
                                />
                            `})}
                    </div>
                `}
                ${U0.length>0&&F`
                    ${U0.map(({annotations:d},z0)=>F`
                        ${d&&F`<${H8} key=${z0} annotations=${d} />`}
                    `)}
                `}
                ${l0.length>0&&F`
                    <div class="file-attachments">
                        ${l0.map((d)=>F`
                            <${bJ} key=${d} mediaId=${d} onPreview=${u_} />
                        `)}
                    </div>
                `}
                ${V0.length>0&&F`
                    <div class="resource-links">
                        ${V0.map((d,z0)=>F`
                            <div key=${z0}>
                                <${sJ} block=${d} />
                                <${H8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J0.length>0&&F`
                    <div class="resource-embeds">
                        ${J0.map((d,z0)=>F`
                            <div key=${z0}>
                                <${aJ} block=${d} />
                                <${H8} annotations=${d.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${T.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${T.link_previews.map((d,z0)=>F`
                            <${$A} key=${z0} preview=${d} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${z&&F`<${_K} src=${z} onClose=${()=>W(null)} />`}

    `}function EK({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:V,onOpenAttachmentPreview:K,emptyMessage:L,timelineRef:Q,agents:N,user:B,onDeletePost:U,reverse:E=!0,removingPostIds:D,searchQuery:H}){let[k,z]=P(!1),W=g(null),I=typeof IntersectionObserver<"u",x=R(async()=>{if(!j||!$||k)return;z(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{z(!1)}},[$,k,j]),A=R((b)=>{let{scrollTop:m,scrollHeight:l,clientHeight:_0}=b.target,v=E?l-_0-m:m,e=Math.max(300,_0);if(v<e)x()},[E,x]);u(()=>{if(!I)return;let b=W.current,m=Q?.current;if(!b||!m)return;let l=300,_0=new IntersectionObserver((v)=>{for(let e of v){if(!e.isIntersecting)continue;x()}},{root:m,rootMargin:`${l}px 0px ${l}px 0px`,threshold:0});return _0.observe(b),()=>_0.disconnect()},[I,$,j,Q,x]);let M=g(x);if(M.current=x,u(()=>{if(I)return;if(!Q?.current)return;let{scrollTop:b,scrollHeight:m,clientHeight:l}=Q.current,_0=E?m-l-b:b,v=Math.max(300,l);if(_0<v)M.current?.()},[I,_,$,E,Q]),u(()=>{if(!Q?.current)return;if(!$||k)return;let{scrollTop:b,scrollHeight:m,clientHeight:l}=Q.current,_0=E?m-l-b:b,v=Math.max(300,l);if(m<=l+1||_0<v)M.current?.()},[_,$,k,E,Q]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${Q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let O=_.slice().sort((b,m)=>b.id-m.id),y=(b)=>{let m=b?.data?.thread_id;if(m===null||m===void 0||m==="")return null;let l=Number(m);return Number.isFinite(l)?l:null},T=new Map;for(let b=0;b<O.length;b+=1){let m=O[b],l=Number(m?.id),_0=y(m);if(_0!==null){let v=T.get(_0)||{anchorIndex:-1,replyIndexes:[]};v.replyIndexes.push(b),T.set(_0,v)}else if(Number.isFinite(l)){let v=T.get(l)||{anchorIndex:-1,replyIndexes:[]};v.anchorIndex=b,T.set(l,v)}}let J=new Map;for(let[b,m]of T.entries()){let l=new Set;if(m.anchorIndex>=0)l.add(m.anchorIndex);for(let _0 of m.replyIndexes)l.add(_0);J.set(b,Array.from(l).sort((_0,v)=>_0-v))}let C=O.map((b,m)=>{let l=y(b);if(l===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=J.get(l);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let v=_0.indexOf(m);if(v<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:v>0,hasThreadNext:v<_0.length-1}}),f=F`<div class="timeline-sentinel" ref=${W}></div>`;return F`
        <div class="timeline ${E?"reverse":"normal"}" ref=${Q} onScroll=${A}>
            <div class="timeline-content">
                ${E?f:null}
                ${O.map((b,m)=>{let l=Boolean(b.data?.thread_id&&b.data.thread_id!==b.id),_0=D?.has?.(b.id),v=C[m]||{};return F`
                    <${DK}
                        key=${b.id}
                        post=${b}
                        isThreadReply=${l}
                        isThreadPrev=${v.hasThreadPrev}
                        isThreadNext=${v.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${H}
                        agentName=${TV(b.data?.agent_id,N||{})}
                        agentAvatarUrl=${xV(b.data?.agent_id,N||{})}
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
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${E?null:f}
            </div>
        </div>
    `}y0();I_();function OK(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var D8="workspaceExplorerScale",OA=["compact","default","comfortable"],WA=new Set(OA),zA={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function WK(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return WA.has(j)?j:$}function e9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function JA(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function AA(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function _j(_={}){let $=JA(_),j=_.stored?WK(_.stored,$):$;return AA(j,_)}function zK(_){return zA[WK(_)]}Y9();function kA(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function $j(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function JK(_,$,j={}){let G=j.resolvePane;if($j(_,G))return!0;return kA($)}var wK=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function MA(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return $j($,(j)=>X_.resolve(j))}function TK(_,$,j,G=0,Z=[]){if(!j&&wK(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)TK(X,$,j,G+1,Z);return Z}function AK(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&wK(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function Xj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let V=Xj(Z.get(q.path),q);if(V!==Z.get(q.path))X=!0;return V});return X?{...$,children:Y}:_}function Gj(_,$,j){if(!_)return _;if(_.path===$)return Xj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=Gj(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var xK=4,jj=14,yA=16;function IK(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=IK(G);return _.__bytes=j,j}function CK(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=xK)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let V=Math.max(0,Number(q?.__bytes??q?.size??0));if(V<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:V});else X.push({kind:"file",name:q.name,path:q.path,size:V})}X.sort((q,V)=>V.size-q.size);let Y=X;if(X.length>jj){let q=X.slice(0,jj-1),V=X.slice(jj-1),K=V.reduce((L,Q)=>L+Q.size,0);q.push({kind:"other",name:`+${V.length} more`,path:`${G.path}/[other]`,size:K}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return CK(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function kK(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function PK(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function E8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Yj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,V=E8(_,$,G,Z),K=E8(_,$,G,q),L=E8(_,$,j,q),Q=E8(_,$,j,Z),N=q-Z>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${G} ${G} 0 ${N} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${j} ${j} 0 ${N} 0 ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,"Z"].join(" ")}var fK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function RK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,V,K,L)=>{let Q=Array.isArray(q?.children)?q.children:[];if(!Q.length)return;let N=Math.max(0,Number(q.size)||0);if(N<=0)return;let B=K-V,U=V;Q.forEach((E,D)=>{let H=Math.max(0,Number(E.size)||0);if(H<=0)return;let k=H/N,z=U,W=D===Q.length-1?K:U+B*k;if(U=W,W-z<0.003)return;let I=fK[L];if(I){let x=PK(z,L,j);if(G.push({key:E.path,path:E.path,label:E.name,size:H,color:x,depth:L,startAngle:z,endAngle:W,innerRadius:I[0],outerRadius:I[1],d:Yj(120,120,I[0],I[1],z,W)}),L===1)Z.push({key:E.path,name:E.name,size:H,pct:X>0?H/X*100:0,color:x})}if(L<xK)Y(E,z,W,L+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function Zj(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=Zj(G,$);if(Z)return Z}return null}function SK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=fK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=PK(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Yj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:q}]}}function MK(_,$=!1,j=!1){if(!_)return null;let G=IK(_),Z=CK(_,0),X=Z.size||G,{segments:Y,legend:q}=RK(Z,X,j);if(!Y.length&&X>0){let V=SK("[files]",Z.path,X,j);Y=V.segments,q=V.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function wA({payload:_}){if(!_)return null;let[$,j]=P(null),[G,Z]=P(_?.root?.path||"."),[X,Y]=P(()=>[_?.root?.path||"."]),[q,V]=P(!1);u(()=>{let y=_?.root?.path||".";Z(y),Y([y]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;V(!0);let y=setTimeout(()=>V(!1),180);return()=>clearTimeout(y)},[G]);let K=Y0(()=>{return Zj(_.root,G)||_.root},[_?.root,G]),L=K?.size||_.totalSize||0,{segments:Q,legend:N}=Y0(()=>{let y=RK(K,L,_.isDarkTheme);if(y.segments.length>0)return y;if(L<=0)return y;let T=K?.children?.length?"Total":"[files]";return SK(T,K?.path||_?.root?.path||".",L,_.isDarkTheme)},[K,L,_.isDarkTheme,_?.root?.path]),[B,U]=P(Q),E=g(new Map),D=g(0);u(()=>{let y=E.current,T=new Map(Q.map((b)=>[b.key,b])),J=performance.now(),C=220,f=(b)=>{let m=Math.min(1,(b-J)/220),l=m*(2-m),_0=Q.map((v)=>{let O0=y.get(v.key)||{startAngle:v.startAngle,endAngle:v.startAngle,innerRadius:v.innerRadius,outerRadius:v.innerRadius},G0=(K0,Q0)=>K0+(Q0-K0)*l,$0=G0(O0.startAngle,v.startAngle),q0=G0(O0.endAngle,v.endAngle),N0=G0(O0.innerRadius,v.innerRadius),t=G0(O0.outerRadius,v.outerRadius);return{...v,d:Yj(120,120,N0,t,$0,q0)}});if(U(_0),m<1)D.current=requestAnimationFrame(f)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(f),E.current=T,()=>{if(D.current)cancelAnimationFrame(D.current)}},[Q]);let H=B.length?B:Q,k=L>0?a_(L):"0 B",z=K?.name||"",I=(z&&z!=="."?z:"Total")||"Total",x=k,A=X.length>1,M=(y)=>{if(!y?.path)return;let T=Zj(_.root,y.path);if(!T||!Array.isArray(T.children)||T.children.length===0)return;Y((J)=>[...J,T.path]),Z(T.path),j(null)},O=()=>{if(!A)return;Y((y)=>{let T=y.slice(0,-1);return Z(T[T.length-1]||_?.root?.path||"."),T}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${L}>
                ${H.map((y)=>F`
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
                    onClick=${O}
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
    `}function yK(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function uK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function TA(_){if(!_)return"Workspace index status";let $=[uK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function xA(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function IA(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function CA(_,$=null){let j=xA(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:IA(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function gK({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:V=!1}){let[K,L]=P(null),[Q,N]=P(new Set(["."])),[B,U]=P(null),[E,D]=P(null),[H,k]=P(""),[z,W]=P(null),[,I]=P(null),[x,A]=P(!0),[M,O]=P(!1),[y,T]=P(null),[J,C]=P(()=>F$("workspaceShowHidden",!1)),[f,b]=P(!1),[m,l]=P(null),[_0,v]=P(null),[e,O0]=P(null),[G0,$0]=P(!1),[q0,N0]=P(null),[t,K0]=P(null),[Q0,k0]=P(null),[s,X0]=P(!1),[E0,C0]=P(()=>J6()),[g0,n0]=P(()=>kK()),[j_,c0]=P(()=>_j({stored:W1(D8),...e9()})),[d0,u0]=P(!1),o0=Math.max(15000,(Number(E0?.refreshIntervalSec)||60)*1000),v0=Math.max(0,Number(E0?.folderPreviewDepth)||0),a0=g(Q),p0=g(""),F_=g(null),t0=g(0),b0=g(new Set),A0=g(null),q_=g(null),e0=g(new Map),z_=g(_),H0=g($),f0=g(Z),T0=g(null),i0=g(null),A_=g(null),K_=g(null),E_=g(null),D_=g(null),M_=g("."),C_=g(0),u_=g({path:null,dragging:!1,startX:0,startY:0}),O_=g({path:null,dragging:!1,startX:0,startY:0}),j0=g({path:null,timer:0}),W0=g(!1),p=g(0),i=g(new Map),o=g(null),Z0=g(null),V0=g(null),J0=g(null),h0=g(null),R0=g(null),I0=g(J),w0=g(j),m0=g(G??j),U0=g(0),l0=g(e),Y_=g(f),G_=g(m),S0=g(null),Q_=g({x:0,y:0}),V_=g(0),d=g(null),z0=g(B),Z_=g(E),B_=g(null),p_=g(z);z_.current=_,H0.current=$,f0.current=Z,u(()=>{a0.current=Q},[Q]),u(()=>{I0.current=J},[J]),u(()=>{w0.current=j},[j]),u(()=>{m0.current=G??j},[G,j]),u(()=>{l0.current=e},[e]);let F1=R(()=>{if(!C_.current)return;clearTimeout(C_.current),C_.current=0},[]);u(()=>()=>F1(),[F1]),u(()=>{if(typeof window>"u")return;let S=()=>{c0(_j({stored:W1(D8),...e9()}))};S();let h=()=>S(),r=()=>S(),a=(D0)=>{if(!D0||D0.key===null||D0.key===D8)S()};window.addEventListener("resize",h),window.addEventListener("focus",r),window.addEventListener("storage",a);let F0=window.matchMedia?.("(pointer: coarse)"),L0=window.matchMedia?.("(hover: none)"),M0=(D0,s0)=>{if(!D0)return;if(D0.addEventListener)D0.addEventListener("change",s0);else if(D0.addListener)D0.addListener(s0)},x0=(D0,s0)=>{if(!D0)return;if(D0.removeEventListener)D0.removeEventListener("change",s0);else if(D0.removeListener)D0.removeListener(s0)};return M0(F0,h),M0(L0,h),()=>{window.removeEventListener("resize",h),window.removeEventListener("focus",r),window.removeEventListener("storage",a),x0(F0,h),x0(L0,h)}},[]),u(()=>{if(typeof window>"u")return;let S=()=>{C0(J6())},h=(F0)=>{if(!F0||F0.key===null||F0.key===h2||F0.key===l2)S()},r=()=>S(),a=(F0)=>{let L0=F0?.detail?.settings;if(L0&&typeof L0==="object"){C0({refreshIntervalSec:Number(L0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(L0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",r),window.addEventListener("storage",h),window.addEventListener(c2,a),()=>{window.removeEventListener("focus",r),window.removeEventListener("storage",h),window.removeEventListener(c2,a)}},[]),u(()=>{let S=(h)=>{let r=h?.detail?.path;if(!r)return;let a=r.split("/"),F0=[];for(let L0=1;L0<a.length;L0++)F0.push(a.slice(0,L0).join("/"));if(F0.length)N((L0)=>{let M0=new Set(L0);M0.add(".");for(let x0 of F0)M0.add(x0);return M0});U(r),requestAnimationFrame(()=>{let L0=document.querySelector(`[data-path="${CSS.escape(r)}"]`);if(L0)L0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),u(()=>{Y_.current=f},[f]),u(()=>{G_.current=m},[m]),u(()=>{z0.current=B},[B]),u(()=>{Z_.current=E},[E]),u(()=>{p_.current=z},[z]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>n0(kK());S();let h=window.matchMedia?.("(prefers-color-scheme: dark)"),r=()=>S();if(h?.addEventListener)h.addEventListener("change",r);else if(h?.addListener)h.addListener(r);let a=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(a?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)a?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(h?.removeEventListener)h.removeEventListener("change",r);else if(h?.removeListener)h.removeListener(r);a?.disconnect()}},[]),u(()=>{if(!E)return;let S=E_.current;if(!S)return;let h=requestAnimationFrame(()=>{OK(S)});return()=>cancelAnimationFrame(h)},[E]),u(()=>{if(!d0)return;let S=(r)=>{let a=r?.target;if(!(a instanceof Element))return;if(h0.current?.contains(a))return;if(R0.current?.contains(a))return;u0(!1)},h=(r)=>{if(r?.key==="Escape")u0(!1),R0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",h),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",h)}},[d0]);let g_=async(S,h={})=>{let r=Boolean(h?.autoOpen),a=String(S||"").trim();O(!0),W(null),I(null);try{let F0=await x7(a,20000);if(r&&a&&JK(a,F0,{resolvePane:(L0)=>X_.resolve(L0)}))return f0.current?.(a,F0),F0;return W(F0),F0}catch(F0){let L0={error:F0.message||"Failed to load preview"};return W(L0),L0}finally{O(!1)}};T0.current=g_;let J1=R(async()=>{try{let S=await w7("all");return k0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);q_.current=J1;let P_=R(()=>{q_.current?.()},[]),y_=async()=>{if(!w0.current)return;try{let S=await K5("",1,I0.current),h=AK(S.root,a0.current,I0.current);if(h===p0.current){A(!1);return}if(p0.current=h,F_.current=S.root,!t0.current)t0.current=requestAnimationFrame(()=>{t0.current=0,L((r)=>Xj(r,F_.current)),A(!1)})}catch(S){T(S.message||"Failed to load workspace"),A(!1)}},A1=async(S)=>{if(!S)return;if(b0.current.has(S))return;b0.current.add(S);try{let h=await K5(S,1,I0.current);L((r)=>Gj(r,S,h.root))}catch(h){T(h.message||"Failed to load workspace")}finally{b0.current.delete(S)}};i0.current=A1;let W_=R(()=>{let S=B;if(!S)return".";let h=e0.current?.get(S);if(h&&h.type==="dir")return h.path;if(S==="."||!S.includes("/"))return".";let r=S.split("/");return r.pop(),r.join("/")||"."},[B]),k_=R((S)=>{let h=S?.closest?.(".workspace-row");if(!h)return null;let r=h.dataset.path,a=h.dataset.type;if(!r)return null;if(a==="dir")return r;if(r.includes("/")){let F0=r.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),U1=R((S)=>{return k_(S?.target||null)},[k_]),m_=R((S)=>{l0.current=S,O0(S)},[]),n_=R(()=>{let S=j0.current;if(S?.timer)clearTimeout(S.timer);j0.current={path:null,timer:0}},[]),s_=R((S)=>{if(!S||S==="."){n_();return}let h=e0.current?.get(S);if(!h||h.type!=="dir"){n_();return}if(a0.current?.has(S)){n_();return}if(j0.current?.path===S)return;n_();let r=setTimeout(()=>{j0.current={path:null,timer:0},i0.current?.(S),N((a)=>{let F0=new Set(a);return F0.add(S),F0})},600);j0.current={path:S,timer:r}},[n_]),H_=R((S,h)=>{if(Q_.current={x:S,y:h},V_.current)return;V_.current=requestAnimationFrame(()=>{V_.current=0;let r=S0.current;if(!r)return;let a=Q_.current;r.style.transform=`translate(${a.x+12}px, ${a.y+12}px)`})},[]),x1=R((S)=>{if(!S)return;let r=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!r)return;v({path:S,label:r})},[]),H1=R(()=>{if(v(null),V_.current)cancelAnimationFrame(V_.current),V_.current=0;if(S0.current)S0.current.style.transform="translate(-9999px, -9999px)"},[]),g1=R((S)=>{if(!S)return".";let h=e0.current?.get(S);if(h&&h.type==="dir")return h.path;if(S==="."||!S.includes("/"))return".";let r=S.split("/");return r.pop(),r.join("/")||"."},[]),k1=R(()=>{D(null),k("")},[]),e1=R((S)=>{if(!S)return;let r=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!r||S===".")return;D(S),k(r)},[]),c4=R(async()=>{let S=Z_.current;if(!S)return;let h=(H||"").trim();if(!h){k1();return}let r=e0.current?.get(S),a=(r?.name||S.split("/").pop()||S).trim();if(h===a){k1();return}try{let L0=(await P7(S,h))?.path||S,M0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),T(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:L0,type:r?.type||"file"}})),r?.type==="dir")N((x0)=>{let D0=new Set;for(let s0 of x0)if(s0===S)D0.add(L0);else if(s0.startsWith(`${S}/`))D0.add(`${L0}${s0.slice(S.length)}`);else D0.add(s0);return D0});if(U(L0),r?.type==="dir")W(null),O(!1),I(null);else T0.current?.(L0);i0.current?.(M0),P_()}catch(F0){T(F0?.message||"Failed to rename file")}},[k1,H,P_]),A$=R(async(S)=>{let a=S||".";for(let F0=0;F0<50;F0+=1){let M0=`untitled${F0===0?"":`-${F0}`}.md`;try{let D0=(await C7(a,M0,""))?.path||(a==="."?M0:`${a}/${M0}`);if(a&&a!==".")N((s0)=>new Set([...s0,a]));U(D0),T(null),i0.current?.(a),T0.current?.(D0),P_();return}catch(x0){if(x0?.status===409||x0?.code==="file_exists")continue;T(x0?.message||"Failed to create file");return}}T("Failed to create file (untitled name already in use).")},[]),t_=R((S)=>{if(S?.stopPropagation?.(),G0)return;let h=g1(z0.current);A$(h)},[G0,g1,A$]);u(()=>{if(typeof window>"u")return;let S=(h)=>{let r=h?.detail?.updates||[];if(!Array.isArray(r)||r.length===0)return;L((x0)=>{let D0=x0;for(let s0 of r){if(!s0?.root)continue;if(!D0||s0.path==="."||!s0.path)D0=s0.root;else D0=Gj(D0,s0.path,s0.root)}if(D0)p0.current=AK(D0,a0.current,I0.current);return A(!1),D0});let a=z0.current;if(Boolean(a)&&r.some((x0)=>{let D0=x0?.path||"";if(!D0||D0===".")return!0;return a===D0||a.startsWith(`${D0}/`)||D0.startsWith(`${a}/`)}))i.current.clear();if(P_(),!a||!p_.current)return;let L0=e0.current?.get(a);if(L0&&L0.type==="dir")return;if(r.some((x0)=>{let D0=x0?.path||"";if(!D0||D0===".")return!0;return a===D0||a.startsWith(`${D0}/`)}))T0.current?.(a)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),A0.current=y_;let c_=g(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),h=m0.current??w0.current,r=document.visibilityState!=="hidden"&&(h||S.matches&&w0.current);Q5(r,I0.current).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",a,{visible:r,showHidden:I0.current})})}).current,M1=g(0),D1=g(()=>{if(M1.current)clearTimeout(M1.current);M1.current=setTimeout(()=>{M1.current=0,c_()},250)}).current;u(()=>{if(w0.current)A0.current?.(),q_.current?.();D1()},[j,G]),u(()=>{A0.current(),q_.current?.();let S=setInterval(()=>{A0.current(),q_.current?.()},o0);return()=>clearInterval(S)},[o0]),u(()=>{c_();let S=O4("previewHeight",null),h=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(p.current=h,A_.current)A_.current.style.setProperty("--preview-height",`${h}px`);let r=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>D1();if(r.addEventListener)r.addEventListener("change",a);else if(r.addListener)r.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(t0.current)cancelAnimationFrame(t0.current),t0.current=0;if(r.removeEventListener)r.removeEventListener("change",a);else if(r.removeListener)r.removeListener(a);if(document.removeEventListener("visibilitychange",a),M1.current)clearTimeout(M1.current),M1.current=0;Q5(!1,I0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:I0.current})})}},[]);let _1=Y0(()=>TK(K,Q,J),[K,Q,J]),k$=Y0(()=>new Map(_1.map((S)=>[S.node.path,S.node])),[_1]),M$=Y0(()=>zK(j_),[j_]);e0.current=k$;let w_=(B?e0.current.get(B):null)?.type==="dir";u(()=>{if(!B||!w_){K0(null),o.current=null,Z0.current=null;return}if(v0<=0){K0({loading:!1,error:null,payload:null,disabled:!0}),o.current=null,Z0.current=null;return}let S=B,h=`${J?"hidden":"visible"}:${v0}:${B}`,r=i.current,a=r.get(h);if(a?.root){r.delete(h),r.set(h,a);let M0=MK(a.root,Boolean(a.truncated),g0);if(M0)o.current=M0,Z0.current=B,K0({loading:!1,error:null,payload:M0,disabled:!1});return}let F0=o.current,L0=Z0.current;K0({loading:!0,error:null,payload:L0===B?F0:null,disabled:!1}),K5(B,v0,J).then((M0)=>{if(z0.current!==S)return;let x0={root:M0?.root,truncated:Boolean(M0?.truncated)};r.delete(h),r.set(h,x0);while(r.size>yA){let s0=r.keys().next().value;if(!s0)break;r.delete(s0)}let D0=MK(x0.root,x0.truncated,g0);o.current=D0,Z0.current=B,K0({loading:!1,error:null,payload:D0,disabled:!1})}).catch((M0)=>{if(z0.current!==S)return;K0({loading:!1,error:M0?.message||"Failed to load folder size chart",payload:L0===B?F0:null,disabled:!1})})},[B,w_,J,g0,v0]);let V1=Boolean(z&&z.kind==="text"&&!w_&&(!z.size||z.size<=262144)),y$=V1?"Open in editor":z?.size>262144?"File too large to edit":"File is not editable",h4=Boolean(B&&!w_&&MA(B)),$$=Boolean(B&&B!=="."),l4=Boolean(B&&!w_),p4=Boolean(B&&!w_),w$=B&&w_?x2(B,J):null,T$=uK(Q0),b1=TA(Q0),v1=Q0?.state||"never_indexed",r4=v1!=="ready",K1=R(()=>u0(!1),[]),R_=R(async(S)=>{K1();try{await S?.()}catch(h){console.warn("[workspace-explorer] Header menu action failed:",h)}},[K1]),n4=R(async(S)=>{S?.stopPropagation?.(),X0(!0),k0((h)=>({scope:"all",last_indexed_at:h?.last_indexed_at||null,last_error:null,indexed_file_count:h?.indexed_file_count||0,roots:h?.roots||[],updated_at:h?.updated_at||null,state:"indexing"}));try{let h=await T7("all");k0(h),T(null),p0.current="",A0.current?.()}catch(h){let r=h?.message||"Failed to reindex workspace";k0((a)=>({scope:"all",last_indexed_at:a?.last_indexed_at||null,last_error:r,indexed_file_count:a?.indexed_file_count||0,roots:a?.roots||[],updated_at:a?.updated_at||null,state:"failed"})),T(r)}finally{X0(!1)}},[]);u(()=>{let S=V0.current;if(J0.current)J0.current.dispose(),J0.current=null;if(!S)return;if(S.innerHTML="",!B||w_||!z||z.error)return;let h={path:B,content:typeof z.text==="string"?z.text:void 0,mtime:z.mtime,size:z.size,preview:z,mode:"view"},r=X_.resolve(h)||X_.get("workspace-preview-default");if(!r)return;let a=r.mount(S,h);return J0.current=a,()=>{if(J0.current===a)a.dispose(),J0.current=null;S.innerHTML=""}},[B,w_,z]);let I1=(S)=>{let h=S?.target;if(h instanceof Element)return h;return h?.parentElement||null},x$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},d4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},g6=g((S)=>{let h=I1(S),r=h?.closest?.("[data-path]");if(!r)return;let a=r.dataset.path;if(!a||a===".")return;let F0=Boolean(h?.closest?.("button"))||Boolean(h?.closest?.("a"))||Boolean(h?.closest?.("input")),L0=Boolean(h?.closest?.(".workspace-caret"));if(F0||L0)return;if(Z_.current===a)return;e1(a)}).current,b6=g((S)=>{if(W0.current){W0.current=!1;return}let h=I1(S),r=h?.closest?.("[data-path]");if(K_.current?.focus?.(),!r)return;let a=r.dataset.path,F0=r.dataset.type,L0=Boolean(h?.closest?.(".workspace-caret")),M0=Boolean(h?.closest?.("button"))||Boolean(h?.closest?.("a"))||Boolean(h?.closest?.("input")),x0=z0.current===a,D0=Z_.current;if(D0){if(D0===a)return;k1()}if(F0==="dir"){if(B_.current=null,U(a),W(null),I(null),O(!1),!a0.current.has(a))i0.current?.(a);if(x0&&!L0)return;N((r_)=>{let $1=new Set(r_);if($1.has(a))$1.delete(a);else $1.add(a);return $1})}else{B_.current=null,U(a);let s0=e0.current.get(a);if(s0)z_.current?.(s0.path,s0);if(!M0&&!L0)T0.current?.(a)}}).current,X4=g(()=>{p0.current="",A0.current(),q_.current?.(),Array.from(a0.current||[]).filter((h)=>h&&h!==".").forEach((h)=>i0.current?.(h))}).current,I$=g(()=>{B_.current=null,U(null),W(null),I(null),O(!1)}).current,i4=g(()=>{C((S)=>{let h=!S;if(typeof window<"u")L_("workspaceShowHidden",String(h));return I0.current=h,Q5(!0,h).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",a,{showHidden:h})}),p0.current="",A0.current?.(),Array.from(a0.current||[]).filter((a)=>a&&a!==".").forEach((a)=>i0.current?.(a)),h})}).current,o4=g((S)=>{if(I1(S)?.closest?.("[data-path]"))return;I$()}).current,Q1=R(async(S)=>{if(!S)return;let h=S.split("/").pop()||S;if(!window.confirm(`Delete "${h}"? This cannot be undone.`))return;try{await R7(S);let a=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(z0.current===S)I$();i0.current?.(a),T(null),P_()}catch(a){W((F0)=>({...F0||{},error:a.message||"Failed to delete file"}))}},[I$]),C$=R((S)=>{let h=K_.current;if(!h||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;h.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),Y4=R((S)=>{let h=I1(S);if(Z_.current||d4(h))return;let r=_1;if(!r||r.length===0)return;let a=B?r.findIndex((F0)=>F0.node.path===B):-1;if(S.key==="ArrowDown"){S.preventDefault();let F0=Math.min(a+1,r.length-1),L0=r[F0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")z_.current?.(L0.node.path,L0.node),T0.current?.(L0.node.path);else W(null),O(!1),I(null);C$(L0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let F0=a<=0?0:a-1,L0=r[F0];if(!L0)return;if(U(L0.node.path),L0.node.type!=="dir")z_.current?.(L0.node.path,L0.node),T0.current?.(L0.node.path);else W(null),O(!1),I(null);C$(L0.node.path);return}if(S.key==="ArrowRight"&&a>=0){let F0=r[a];if(F0?.node?.type==="dir"&&!Q.has(F0.node.path))S.preventDefault(),i0.current?.(F0.node.path),N((L0)=>new Set([...L0,F0.node.path]));return}if(S.key==="ArrowLeft"&&a>=0){let F0=r[a];if(F0?.node?.type==="dir"&&Q.has(F0.node.path))S.preventDefault(),N((L0)=>{let M0=new Set(L0);return M0.delete(F0.node.path),M0});return}if(S.key==="Enter"&&a>=0){S.preventDefault();let F0=r[a];if(!F0)return;let L0=F0.node.path;if(F0.node.type==="dir"){if(!a0.current.has(L0))i0.current?.(L0);N((x0)=>{let D0=new Set(x0);if(D0.has(L0))D0.delete(L0);else D0.add(L0);return D0}),W(null),I(null),O(!1)}else z_.current?.(L0,F0.node),T0.current?.(L0);return}if((S.key==="Delete"||S.key==="Backspace")&&a>=0){let F0=r[a];if(!F0||F0.node.type==="dir")return;S.preventDefault(),Q1(F0.node.path);return}if(S.key==="Escape")S.preventDefault(),I$()},[I$,Q1,Q,_1,C$,B]),q4=R((S)=>{let h=CA(S,Z_.current);if(!h)return;u_.current={path:h.dragPath,dragging:!1,startX:h.startX,startY:h.startY}},[]),m1=R(()=>{let S=u_.current;if(S?.dragging&&S.path){let h=l0.current||W_(),r=d.current;if(typeof r==="function")r(S.path,h)}u_.current={path:null,dragging:!1,startX:0,startY:0},U0.current=0,b(!1),l(null),m_(null),n_(),H1()},[W_,H1,m_,n_]),E1=R((S)=>{let h=u_.current,r=S?.touches?.[0];if(!r||!h?.path)return;let a=Math.abs(r.clientX-h.startX),F0=Math.abs(r.clientY-h.startY),L0=a>8||F0>8;if(!h.dragging&&L0)h.dragging=!0,b(!0),l("move"),x1(h.path);if(h.dragging){S.preventDefault(),H_(r.clientX,r.clientY);let M0=document.elementFromPoint(r.clientX,r.clientY),x0=k_(M0)||W_();if(l0.current!==x0)m_(x0);s_(x0)}},[k_,W_,x1,H_,m_,s_]),v6=g((S)=>{S.preventDefault();let h=A_.current;if(!h)return;let r=S.clientY,a=p.current||280,F0=S.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let L0=r,M0=(D0)=>{L0=D0.clientY;let s0=h.clientHeight-80,r_=Math.min(Math.max(a-(D0.clientY-r),80),s0);h.style.setProperty("--preview-height",`${r_}px`),p.current=r_},x0=()=>{let D0=h.clientHeight-80,s0=Math.min(Math.max(a-(L0-r),80),D0);p.current=s0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("previewHeight",String(Math.round(s0))),document.removeEventListener("mousemove",M0),document.removeEventListener("mouseup",x0)};document.addEventListener("mousemove",M0),document.addEventListener("mouseup",x0)}).current,V4=g((S)=>{S.preventDefault();let h=A_.current;if(!h)return;let r=S.touches[0];if(!r)return;let a=r.clientY,F0=p.current||280,L0=S.currentTarget;L0.classList.add("dragging"),document.body.style.userSelect="none";let M0=(D0)=>{let s0=D0.touches[0];if(!s0)return;D0.preventDefault();let r_=h.clientHeight-80,$1=Math.min(Math.max(F0-(s0.clientY-a),80),r_);h.style.setProperty("--preview-height",`${$1}px`),p.current=$1},x0=()=>{L0.classList.remove("dragging"),document.body.style.userSelect="",L_("previewHeight",String(Math.round(p.current||F0))),document.removeEventListener("touchmove",M0),document.removeEventListener("touchend",x0),document.removeEventListener("touchcancel",x0)};document.addEventListener("touchmove",M0,{passive:!1}),document.addEventListener("touchend",x0),document.addEventListener("touchcancel",x0)}).current,j$=R((S=B)=>{if(!S)return;yK(T2(S))},[B]),e_=async()=>{if(!B||w_)return;await Q1(B)},P$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},s4=R((S)=>{if(!P$(S))return;if(S.preventDefault(),U0.current+=1,!Y_.current)b(!0);l("upload");let h=U1(S)||W_();m_(h),s_(h)},[W_,U1,m_,s_]),G$=R((S)=>{if(!P$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!Y_.current)b(!0);if(G_.current!=="upload")l("upload");let h=U1(S)||W_();if(l0.current!==h)m_(h);s_(h)},[W_,U1,m_,s_]),b5=R((S)=>{if(!P$(S))return;if(S.preventDefault(),U0.current=Math.max(0,U0.current-1),U0.current===0)b(!1),l(null),m_(null),n_()},[m_,n_]),b_=R(async(S,h=".")=>{let r=Array.from(S||[]);if(r.length===0)return;let a=h&&h!==""?h:".",F0=a!=="."?a:"workspace root";F1(),$0(!0),N0({current:0,total:r.length,name:"",percent:0,done:!1,error:null});try{let L0=null;for(let M0=0;M0<r.length;M0++){let x0=r[M0],D0=x0?.name||`file ${M0+1}`;N0((r_)=>({...r_,current:M0+1,name:D0,percent:0}));let s0=(r_)=>N0(($1)=>({...$1,percent:r_.percent}));try{L0=await w2(x0,a,{onProgress:s0})}catch(r_){let $1=r_?.status,V$=r_?.code;if($1===409||V$==="file_exists"){if(!window.confirm(`"${D0}" already exists in ${F0}. Overwrite?`))continue;L0=await w2(x0,a,{overwrite:!0,onProgress:s0})}else throw r_}}if(L0?.path)B_.current=L0.path,U(L0.path),T0.current?.(L0.path);i0.current?.(a),P_(),N0((M0)=>({...M0,done:!0})),F1(),C_.current=window.setTimeout(()=>{C_.current=0,N0(null)},1500)}catch(L0){T(L0.message||"Failed to upload file"),N0((M0)=>M0?{...M0,error:L0.message||"Upload failed"}:null),F1(),C_.current=window.setTimeout(()=>{C_.current=0,N0(null)},4000)}finally{$0(!1)}},[F1]),i8=R(async(S,h)=>{if(!S)return;let r=e0.current?.get(S);if(!r)return;let a=h&&h!==""?h:".",F0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(a===F0)return;try{let M0=(await f7(S,a))?.path||S;if(r.type==="dir")N((x0)=>{let D0=new Set;for(let s0 of x0)if(s0===S)D0.add(M0);else if(s0.startsWith(`${S}/`))D0.add(`${M0}${s0.slice(S.length)}`);else D0.add(s0);return D0});if(U(M0),r.type==="dir")W(null),O(!1),I(null);else T0.current?.(M0);i0.current?.(F0),i0.current?.(a),P_()}catch(L0){T(L0?.message||"Failed to move entry")}},[]);d.current=i8;let o8=R(async(S)=>{if(!P$(S))return;S.preventDefault(),U0.current=0,b(!1),l(null),O0(null),n_();let h=Array.from(S?.dataTransfer?.files||[]);if(h.length===0)return;let r=l0.current||U1(S)||W_();await b_(h,r)},[W_,U1,b_]),C1=R((S)=>{if(S?.stopPropagation?.(),G0)return;let h=S?.currentTarget?.dataset?.uploadTarget||".";M_.current=h,D_.current?.click()},[G0]),K4=R((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let h=S?.currentTarget?.dataset?.folderHintTarget||z0.current||".";if(!h)return;H0.current?.(h,e0.current.get(h))},[]),f$=R(()=>{if(G0)return;let S=z0.current,h=S?e0.current?.get(S):null;M_.current=h?.type==="dir"?h.path:".",D_.current?.click()},[G0]),R$=R(()=>{R_(()=>t_(null))},[R_,t_]),S$=R(()=>{R_(()=>f$())},[R_,f$]),a4=R(()=>{R_(()=>X4())},[R_,X4]),Z$=R(()=>{R_(()=>i4())},[R_,i4]),X$=R(()=>{if(!B||!h4)return;R_(()=>f0.current?.(B,z))},[R_,B,h4,z]),Q4=R(()=>{if(!B||!V1)return;R_(()=>f0.current?.(B,z))},[R_,B,V1,z]),L4=R(()=>{if(!B||B===".")return;R_(()=>e1(B))},[R_,B,e1]),Y$=R(()=>{if(!B||w_)return;R_(()=>e_())},[R_,B,w_,e_]),v5=R(()=>{if(!B||w_)return;R_(()=>j$())},[R_,B,w_,j$]),q$=R(()=>{if(!w$)return;K1(),yK(w$)},[K1,w$]),m5=R(()=>{K1(),X?.()},[K1,X]),m6=R(()=>{K1(),Y?.()},[K1,Y]),c6=R(()=>{K1(),q?.()},[K1,q]),h6=R((S)=>{if(!S||S.button!==0)return;let h=S.currentTarget;if(!h||!h.dataset)return;let r=h.dataset.path;if(!r||r===".")return;if(Z_.current===r)return;let a=I1(S);if(a?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(a))return;S.preventDefault(),O_.current={path:r,dragging:!1,startX:S.clientX,startY:S.clientY};let F0=(M0)=>{let x0=O_.current;if(!x0?.path)return;let D0=Math.abs(M0.clientX-x0.startX),s0=Math.abs(M0.clientY-x0.startY),r_=D0>4||s0>4;if(!x0.dragging&&r_)x0.dragging=!0,W0.current=!0,b(!0),l("move"),x1(x0.path),H_(M0.clientX,M0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(x0.dragging){M0.preventDefault(),H_(M0.clientX,M0.clientY);let $1=document.elementFromPoint(M0.clientX,M0.clientY),V$=k_($1)||W_();if(l0.current!==V$)m_(V$);s_(V$)}},L0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",L0);let M0=O_.current;if(M0?.dragging&&M0.path){let x0=l0.current||W_(),D0=d.current;if(typeof D0==="function")D0(M0.path,x0)}O_.current={path:null,dragging:!1,startX:0,startY:0},U0.current=0,b(!1),l(null),m_(null),n_(),H1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{W0.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",L0)},[k_,W_,x1,H_,H1,m_,s_,n_]),s8=R(async(S)=>{let h=Array.from(S?.target?.files||[]);if(h.length===0)return;let r=M_.current||".";if(await b_(h,r),M_.current=".",S?.target)S.target.value=""},[b_]);return F`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${j_}
            ref=${A_}
            onDragEnter=${s4}
            onDragOver=${G$}
            onDragLeave=${b5}
            onDrop=${o8}
        >
            <input type="file" multiple style="display:none" ref=${D_} onChange=${s8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${R0}
                            class=${`workspace-menu-button${d0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),u0((h)=>!h)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${d0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${d0&&F`
                            <div class="workspace-menu-dropdown" ref=${h0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${R$} disabled=${G0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${G0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${a4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>R_(()=>n4())} disabled=${s}>
                                    ${s?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${J?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${J?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||q)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m5}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m6}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c6}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&F`<div class="workspace-menu-separator"></div>`}
                                ${h4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Open in tab</button>
                                `}
                                ${B&&!w_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4} disabled=${!V1}>Open in editor</button>
                                `}
                                ${$$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L4}>Rename selected</button>
                                `}
                                ${p4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v5}>Download selected file</button>
                                `}
                                ${w$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q$}>Download selected folder (zip)</button>
                                `}
                                ${l4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Y$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{u0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
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
                    <button class="workspace-refresh" onClick=${X4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${r4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${v1}`} title=${b1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${T$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${o4}>
                ${q0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${q0.error?F`<span class="workspace-upload-strip-error">${q0.error}</span>`:q0.done?F`<span>Done</span>`:F`<span>${q0.total>1?`Uploading ${q0.current}/${q0.total}: ${q0.name}`:`Uploading ${q0.name}`}${q0.percent>0?` (${q0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!q0.done&&!q0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${q0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${x&&F`<div class="workspace-loading">Loading…</div>`}
                ${y&&F`<div class="workspace-error">${y}</div>`}
                ${K&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${K_}
                        tabIndex="0"
                        onClick=${b6}
                        onDblClick=${g6}
                        onKeyDown=${Y4}
                        onTouchStart=${q4}
                        onTouchEnd=${m1}
                        onTouchMove=${E1}
                        onTouchCancel=${m1}
                    >
                        ${_1.map(({node:S,depth:h})=>{let r=S.type==="dir",a=S.path===B,F0=S.path===E,L0=r&&Q.has(S.path),M0=e&&S.path===e,x0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return F`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${a?" selected":""}${M0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+h*M$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${h6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${r?L0?F`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:F`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${r?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${r?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${E_}
                                                value=${H}
                                                onInput=${(D0)=>k(D0?.target?.value||"")}
                                                onKeyDown=${(D0)=>{if(D0.stopPropagation(),D0.key==="Enter")D0.preventDefault(),c4();else if(D0.key==="Escape")D0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(D0)=>D0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${r&&!L0&&x0>0&&F`
                                        <span class="workspace-count">${x0}</span>
                                    `}
                                    ${r&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${K4}
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
                                            onClick=${C1}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${v6} onTouchStart=${V4}></div>
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
                            ${!w_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>V1&&f0.current?.(B,z)}
                                    title=${y$}
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
                            ${w_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${K4}
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
                                    <button class="workspace-download" onClick=${f$}
                                        title="Upload files to this folder" disabled=${G0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${x2(B,J)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${T2(B)} download
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
                    ${w_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${t?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${t?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${t?.error&&F`<div class="workspace-error">${t.error}</div>`}
                        ${t?.payload&&t.payload.segments?.length>0&&F`
                            <${wA} payload=${t.payload} />
                        `}
                        ${t?.payload&&(!t.payload.segments||t.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${z&&!z.error&&!w_&&F`
                        <div class="workspace-preview-body" ref=${V0}></div>
                    `}
                </div>
            `}
            ${_0&&F`
                <div class="workspace-drag-ghost" ref=${S0}>${_0.label}</div>
            `}
        </aside>
    `}y0();var PA=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function O8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function bK(_,$,j){let G=O8(_,$,j);return G!=null&&PA.has(G)}function vK(_,$,j){return O8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function mK(_,$,j){return O8(_,$,j)==="editor"}var fA=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,RA=/\.(csv|tsv)$/i,SA=/\.pdf$/i,uA=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function gA(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=qV(j,{hasPopOutTab:$});if(G)return G;if(fA.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(RA.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(SA.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(uA.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function cK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:V,onEditSource:K,previewTabs:L,diffTabs:Q,paneOverrides:N,detachedTabs:B,onReattachTab:U,onToggleDock:E,dockVisible:D,onToggleZen:H,zenMode:k,onPopOutTab:z}){let[W,I]=P(null),x=g(null);u(()=>{if(!W)return;let v=(e)=>{if(e.type==="keydown"&&e.key!=="Escape")return;I(null)};return document.addEventListener("click",v),document.addEventListener("keydown",v),()=>{document.removeEventListener("click",v),document.removeEventListener("keydown",v)}},[W]),u(()=>{let v=(e)=>{if(e.ctrlKey&&e.key==="Tab"){if(e.preventDefault(),!_.length)return;let O0=_.findIndex((G0)=>G0.id===$);if(e.shiftKey){let G0=_[(O0-1+_.length)%_.length];j?.(G0.id)}else{let G0=_[(O0+1)%_.length];j?.(G0.id)}return}if((e.ctrlKey||e.metaKey)&&e.key==="w"){let O0=document.querySelector(".editor-pane");if(O0&&O0.contains(document.activeElement)){if(e.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[_,$,j,G]);let A=R((v,e)=>{if(v.button===0){j?.(e);return}if(v.button===1)v.preventDefault(),G?.(e)},[j,G]),M=R((v,e)=>{if(v.defaultPrevented)return;if(v.button===0)j?.(e)},[j]),O=R((v,e)=>{v.preventDefault(),I({id:e,x:v.clientX,y:v.clientY})},[]),y=R((v)=>{v.stopPropagation()},[]),T=R((v,e)=>{v.preventDefault(),v.stopPropagation(),G?.(e)},[G]);u(()=>{if(!$||!x.current)return;let v=x.current.querySelector(".tab-item.active");if(v)v.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let J=R((v)=>{if(!(N instanceof Map))return null;return N.get(v)||null},[N]),C=Y0(()=>_.find((v)=>v.id===W?.id)||null,[W?.id,_]),f=Y0(()=>{let v=W?.id;if(!v)return!1;return bK(v,J(v),(e)=>X_.resolve(e))},[W?.id,J]),b=Y0(()=>{let v=W?.id;if(!v)return"Edit Source";return vK(v,J(v),(e)=>X_.resolve(e))},[W?.id,J]),m=Y0(()=>{let v=W?.id;if(!v||!(B instanceof Map))return!1;return B.has(v)},[W?.id,B]),l=Y0(()=>{let v=W?.id;if(!v||!(Q instanceof Set))return!1;return Q.has(v)},[W?.id,Q]),_0=Y0(()=>{let v=W?.id;if(!v)return!1;let e=_.find((G0)=>G0.id===v)||null;if(!e)return!1;return mK(v,J(v),(G0)=>X_.resolve(G0))&&Boolean(e.dirty||l)},[W?.id,l,J,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((v)=>F`
                <div
                    key=${v.id}
                    class=${`tab-item${v.id===$?" active":""}${v.dirty?" dirty":""}${v.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${v.id===$}
                    title=${v.path}
                    onMouseDown=${(e)=>A(e,v.id)}
                    onClick=${(e)=>M(e,v.id)}
                    onContextMenu=${(e)=>O(e,v.id)}
                >
                    ${v.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${v.label}</span>
                    ${B instanceof Map&&B.has(v.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${y}
                        onMouseDown=${y}
                        onClick=${(e)=>T(e,v.id)}
                        title=${v.dirty?"Unsaved changes":"Close"}
                        aria-label=${v.dirty?"Unsaved changes":`Close ${v.label}`}
                    >
                        ${v.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${E&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${D?" active":""}`}
                    onClick=${E}
                    title=${`${D?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${D?"Hide":"Show"} terminal`}
                    aria-pressed=${D?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${H&&F`
                <button
                    class=${`tab-strip-zen-toggle${k?" active":""}`}
                    onClick=${H}
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
        ${W&&F`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{G?.(W.id),I(null)}}>Close</button>
                <button onClick=${()=>{Z?.(W.id),I(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),I(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(W.id),I(null)}}>
                    ${C?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&K&&F`
                    <button onClick=${()=>{K(W.id),I(null)}}>${b}</button>
                `}
                ${m&&U&&F`
                    <button onClick=${()=>{U(W.id),I(null)}}>Reattach</button>
                `}
                ${z&&!m&&F`
                    <button onClick=${()=>{let v=_.find((e)=>e.id===W.id);z(W.id,v?.label),I(null)}}>Open in Window</button>
                `}
                ${_0&&V&&F`
                    <hr />
                    <button onClick=${()=>{j?.(W.id),V(W.id),I(null)}}>${l?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(W.id)&&F`
                    <hr />
                    <button onClick=${()=>{q(W.id),I(null)}}>
                        ${L?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let v=gA(W.id,{hasPopOutTab:typeof z==="function"});if(!v)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(v,"_blank","noopener"),I(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}y0();I_();b2();function S4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function W8(_,$=30){return S4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w6(_,$=56,j=16,G={}){let Z=S4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),V=(j-q*j).toFixed(2);return`M 0 ${V} L ${$} ${V}`}return Z.map((q,V)=>{let K=V/(Z.length-1||1)*$,L=(q-X)/(Y-X),Q=j-L*j;return`${V===0?"M":"L"} ${K.toFixed(2)} ${Q.toFixed(2)}`}).join(" ")}function _4(_){return`${Math.round(Number(_)||0)}%`}function qj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function bA(_){let $=[`CPU ${_4(_?.cpu_percent)}`,`RAM ${_4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${qj(_?.buffer_cache_bytes)}`);if(lK(_))$.push(`VRAM ${_4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${_4(_?.swap_percent)}`);return $.join(" • ")}function hK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function vA(_){return hK(_)>0&&S4(_?.process_rss_series_bytes).length>0}function lK(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&S4(_?.vram_series).length>0}function mA(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function pK({mode:_="overlay"}){let[$,j]=P(()=>O5(!1)),[G,Z]=P(()=>GY(!1)),[X,Y]=P(()=>mA()),[q,V]=P({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,L]=P(!1);u(()=>{let T=(C)=>{j(Boolean(C?.detail?.enabled))},J=(C)=>{Z(Boolean(C?.detail?.collapsed))};return window.addEventListener(I4,T),window.addEventListener(g2,J),()=>{window.removeEventListener(I4,T),window.removeEventListener(g2,J)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let T=window.matchMedia("(max-width: 900px)"),J=()=>Y(Boolean(T.matches));if(J(),typeof T.addEventListener==="function")return T.addEventListener("change",J),()=>T.removeEventListener("change",J);return T.addListener(J),()=>T.removeListener(J)},[]);let N=_==="overlay";u(()=>{if(!$||!N)return;let T=!1,J=0,C=async()=>{L((f)=>f||q.cpu_series.length>0?f:!0);try{let f=await Q7();if(T)return;V({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:W8(f?.cpu_series),ram_series:W8(f?.ram_series),swap_series:W8(f?.swap_series),vram_series:W8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:S4(f?.buffer_cache_series_bytes),process_rss_series_bytes:S4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(T)return}finally{if(!T)L(!1)}};return C(),J=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;C()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(T=!0,J)window.clearInterval(J)}},[$,N]);let B=Y0(()=>w6(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=Y0(()=>w6(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),E=Y0(()=>w6(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),D=Y0(()=>w6(q.vram_series,56,16,{min:0,max:100}),[q.vram_series]),H=Y0(()=>w6(q.buffer_cache_series_bytes),[q.buffer_cache_series_bytes]),k=Y0(()=>w6(q.process_rss_series_bytes),[q.process_rss_series_bytes]),z=Number(q.buffer_cache_bytes)>0&&S4(q.buffer_cache_series_bytes).length>0,W=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,I=lK(q),x=hK(q),A=vA(q),M=Y0(()=>bA(q),[q]);if(!$||!N)return null;let O=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",y=(T)=>{T?.stopPropagation?.();let J=!G;Z(J),a7(J)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${O}
                aria-label=${O}
                aria-expanded=${G?"false":"true"}
                onClick=${y}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?F`<span class="system-meters-compact-summary">${M}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${_4(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${_4(q.ram_percent)}</span>
                            </div>
                            ${A&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${k}></path>
                                    </svg>
                                    <span class="system-meters-value">${qj(x)}</span>
                                </div>
                            `}
                            ${I&&F`
                                <div class="system-meters-row vram" title=${q.gpu_provider?`GPU telemetry: ${q.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(q.vram_percent)}</span>
                                </div>
                            `}
                            ${z&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${qj(q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${W&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function cA(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function hA(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function lA(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,L)=>{setTimeout(K,L)},maxAttempts:Y=12}=_,q=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},V=(K)=>{let L=G(`post-${$}`);if(L){q(L);return}if(K<=0){j?.();return}Z(()=>{X(()=>V(K-1),40)})};V(Y)}function pA(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(V)=>lA({id:V,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=hA($);if(q){Z(q);return}G()}function rK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:V,renameBranchNameDraft:K,renameBranchNameInputRef:L,setRenameBranchNameDraft:Q,renameBranchDraftState:N,isRenamingBranch:B,addFileRef:U,addFolderRef:E,openEditor:D,openTerminalTab:H,openVncTab:k,hasDockPanes:z,toggleDock:W,dockVisible:I,handleSplitterMouseDown:x,handleSplitterTouchStart:A,showEditorPaneContainer:M,tabStripTabs:O,tabStripActiveId:y,handleTabActivate:T,handleTabClose:J,handleTabCloseOthers:C,handleTabCloseAll:f,handleTabTogglePin:b,handleTabTogglePreview:m,handleTabToggleDiff:l,handleTabEditSource:_0,handleReattachPane:v,previewTabs:e,diffTabs:O0,tabPaneOverrides:G0,toggleZenMode:$0,handlePopOutPane:q0,isWebAppMode:N0,editorContainerRef:t,editorInstanceRef:K0,detachedTabs:Q0,activeDetachedTab:k0,detachedDockPane:s,handleDockSplitterMouseDown:X0,handleDockSplitterTouchStart:E0,TERMINAL_TAB_PATH:C0,dockContainerRef:g0,handleEditorSplitterMouseDown:n0,handleEditorSplitterTouchStart:j_,searchQuery:c0,isIOSDevice:d0,currentBranchRecord:u0,currentChatJid:o0,currentChatBranches:v0,handleBranchPickerChange:a0,formatBranchPickerLabel:p0,openRenameCurrentBranchForm:F_,handlePruneCurrentBranch:t0,handlePurgeArchivedBranch:b0,currentHashtag:A0,handleBackToTimeline:q_,activeSearchScopeLabel:e0,oobePanelState:z_,composePrefillRequest:H0,requestComposePrefill:f0,handleOobeSetupProvider:T0,handleOobeShowModelPicker:i0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:K_,handleCompleteProviderReadyOobe:E_,posts:D_,isMainTimelineView:M_,hasMore:C_,loadMore:u_,timelineRef:O_,handleHashtagClick:j0,addMessageRef:W0,scrollToMessage:p,openFileFromPill:i,openTimelineFileFromPill:o,handleDeletePost:Z0,handleOpenFloatingWidget:V0,agents:J0,userProfile:h0,removingPostIds:R0,agentStatus:I0,isCompactionStatus:w0,agentDraft:m0,agentPlan:U0,agentThought:l0,pendingRequest:Y_,intentToast:G_,currentTurnId:S0,steerQueued:Q_,handlePanelToggle:V_,btwSession:d,closeBtwPanel:z0,handleBtwRetry:Z_,handleBtwInject:B_,floatingWidget:p_,handleCloseFloatingWidget:F1,handleFloatingWidgetEvent:g_,attachmentPreview:J1,setAttachmentPreview:P_,extensionStatusPanels:y_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:W_,searchOpen:k_,followupQueueItems:U1,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:n_,handleMoveQueuedFollowup:s_,viewStateRef:H_,loadPosts:x1,scrollToBottom:H1,searchScope:g1,handleSearch:k1,handleSearchScopeChange:e1,setSearchScope:c4,enterSearchMode:A$,exitSearchMode:t_,fileRefs:c_,removeFileRef:M1,clearFileRefs:D1,setFileRefsFromCompose:_1,folderRefs:k$,removeFolderRef:M$,clearFolderRefs:_$,setFolderRefsFromCompose:w_,messageRefs:V1,removeMessageRef:y$,clearMessageRefs:h4,setMessageRefsFromCompose:$$,handleCreateSessionFromCompose:l4,handleCreateRootSessionFromCompose:p4,handleRestoreBranch:w$,attachActiveEditorFile:T$,followupQueueCount:b1,handleBtwIntercept:v1,handleMessageResponse:r4,handleComposeSubmitError:K1,isComposeBoxAgentActive:R_,activeChatAgents:n4,connectionStatus:I1,stateAccessFailed:x$,activeModel:d4,agentModelsPayload:g6,activeModelUsage:b6,activeThinkingLevel:X4,supportsThinking:I$,contextUsage:i4,extensionWorkingState:o4,notificationsEnabled:Q1,notificationPermission:C$,handleToggleNotifications:Y4,setActiveModel:q4,applyModelState:m1,setPendingRequest:E1,pendingRequestRef:v6,toggleWorkspace:V4}=_,j$=()=>{if(d0())return;H1()};return F`
    <div class=${cA({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${pK} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(e_)=>{if(e_.target===e_.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(e_)=>{e_.preventDefault(),V(K)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${L}
              value=${K}
              onInput=${(e_)=>{let P$=e_.currentTarget?.value??"";Q(String(P$))}}
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
        <${gK}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${H}
          onOpenVncTab=${k}
          onToggleTerminal=${z?W:void 0}
          terminalVisible=${Boolean(z&&I)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${V4}
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
            <${cK}
              tabs=${O}
              activeId=${y}
              onActivate=${T}
              onClose=${J}
              onCloseOthers=${C}
              onCloseAll=${f}
              onTogglePin=${b}
              onTogglePreview=${m}
              onToggleDiff=${l}
              onEditSource=${_0}
              previewTabs=${e}
              diffTabs=${O0}
              paneOverrides=${G0}
              detachedTabs=${Q0}
              onReattachTab=${v}
              onToggleDock=${z?W:void 0}
              dockVisible=${z&&I}
              onToggleZen=${$0}
              zenMode=${X}
              onPopOutTab=${N0?void 0:q0}
            />
          `}
          ${G&&k0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${k0.label||k0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>v(k0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!k0&&F`<div class="editor-pane-host" ref=${t}></div>`}
          ${G&&!k0&&y&&e.has(y)&&F`
            <${i2}
              getContent=${()=>K0.current?.getContent?.()}
              path=${y}
              onClose=${()=>m(y)}
            />
          `}
          ${z&&I&&F`<div class="dock-splitter" onMouseDown=${X0} onTouchStart=${E0}></div>`}
          ${z&&F`<div class=${`dock-panel${I?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!N0&&!s&&F`
                  <button class="dock-panel-action" onClick=${()=>q0(C0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${s&&F`
                  <button class="dock-panel-action" onClick=${()=>v(C0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${W} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
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
                      <button class="editor-empty-state-button" onClick=${()=>v(C0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${g0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${n0} onTouchStart=${j_}></div>
      `}
      <${yV}
        workspaceOpen=${j}
        toggleWorkspace=${V4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminal=${z?W:void 0}
        terminalVisible=${Boolean(z&&I)}
      />
      <${MV}
        activeChatAgents=${n4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(z&&I)}
        onSwitchChat=${a0}
        onToggleWorkspace=${V4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${k}
        onToggleTerminalDock=${z?W:void 0}
        onPrefillCompose=${f0}
      />
      <div class="container">
        ${c0&&d0()&&F`<div class="search-results-spacer"></div>`}
        ${(A0||c0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${q_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${A0?`#${A0}`:`Search: ${c0} · ${e0}`}</span>
          </div>
        `}
        ${z_?.kind&&z_.kind!=="hidden"&&F`
          <${uq}
            kind=${z_.kind}
            onSetupProvider=${T0}
            onShowModelPicker=${i0}
            onOpenWorkspace=${A_}
            onDismiss=${z_.kind==="provider-missing"?K_:E_}
          />
        `}
        <${EK}
          posts=${D_}
          hasMore=${M_?C_:!1}
          onLoadMore=${M_?u_:void 0}
          timelineRef=${O_}
          onHashtagClick=${j0}
          onMessageRef=${W0}
          onScrollToMessage=${p}
          onFileRef=${o||i}
          onPostClick=${void 0}
          onDeletePost=${Z0}
          onOpenWidget=${V0}
          onOpenAttachmentPreview=${P_}
          emptyMessage=${A0?`No posts with #${A0}`:c0?`No results for "${c0}"`:void 0}
          agents=${J0}
          user=${h0}
          reverse=${M_}
          removingPostIds=${R0}
          searchQuery=${c0}
        />
        <${c9}
          status=${w0(I0)?null:I0}
          draft=${m0}
          plan=${U0}
          thought=${l0}
          pendingRequest=${Y_}
          intent=${G_}
          turnId=${S0}
          steerQueued=${Q_}
          onPanelToggle=${V_}
          showExtensionPanels=${!1}
        />
        <${hq}
          session=${d}
          onClose=${z0}
          onRetry=${Z_}
          onInject=${B_}
        />
        <${GV}
          widget=${p_}
          onClose=${F1}
          onWidgetEvent=${g_}
        />
        ${J1&&F`
          <${JV}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>P_(null)}
          />
        `}
        <${Bq} />
        <${c9}
          extensionPanels=${Array.from(y_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${W_}
          turnId=${S0}
          steerQueued=${Q_}
          onPanelToggle=${V_}
          showCorePanels=${!1}
        />
        <${f9}
          items=${k_?[]:U1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${i}
        />
        <${Sq}
          onPost=${(e_)=>{pA({response:e_,viewStateRef:H_,scrollToBottom:H1})}}
          onFocus=${j$}
          searchMode=${k_}
          searchScope=${g1}
          onSearch=${k1}
          onSearchScopeChange=${e1||c4}
          onEnterSearch=${A$}
          onExitSearch=${t_}
          fileRefs=${c_}
          onRemoveFileRef=${M1}
          onClearFileRefs=${D1}
          onSetFileRefs=${_1}
          folderRefs=${k$}
          onRemoveFolderRef=${M$}
          onClearFolderRefs=${_$}
          onSetFolderRefs=${w_}
          messageRefs=${V1}
          onRemoveMessageRef=${y$}
          onClearMessageRefs=${h4}
          onSetMessageRefs=${$$}
          onSwitchChat=${a0}
          onRenameSession=${V}
          isRenameSessionInProgress=${B}
          onCreateSession=${l4}
          onCreateRootSession=${p4}
          onDeleteSession=${t0}
          onPurgeArchivedSession=${b0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:y}
          onAttachEditorFile=${Z?void 0:T$}
          onOpenFilePill=${i}
          followupQueueCount=${b1}
          followupQueueItems=${U1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${v1}
          onMessageResponse=${r4}
          onSubmitError=${K1}
          isAgentActive=${R_}
          activeChatAgents=${n4}
          currentChatJid=${o0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${d4}
          agentModelsPayload=${g6}
          modelUsage=${b6}
          thinkingLevel=${X4}
          supportsThinking=${I$}
          contextUsage=${i4}
          notificationsEnabled=${Q1}
          notificationPermission=${C$}
          onToggleNotifications=${Y4}
          onModelChange=${q4}
          onModelStateChange=${m1}
          statusNotice=${w0(I0)?I0:null}
          extensionWorkingState=${o4}
          prefillRequest=${H0}
        />
        <${hV}
          request=${Y_}
          onRespond=${()=>{E1(null),v6.current=null}}
        />
      </div>
    </div>
  `}function nK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=Uq({branchLoaderMode:$,panePopoutMode:j}),V=Y?.renderBranchLoaderMode||Hq,K=Y?.renderPanePopoutMode||Dq,L=Y?.renderMainShell||rK;if(q==="branch-loader")return V(G);if(q==="pane-popout")return K(Z);return L(X)}var J8="piclaw_btw_session",iK=900,dK="__piclawRenameBranchFormLock__";function rA(){try{return import.meta.url}catch{return null}}function Vj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function nA(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function z8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function oK(_={}){let $=_.importMetaUrl===void 0?rA():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=nA($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let V=new URL(Y,G).searchParams.get("v");return V&&V.trim()?V.trim():null}catch{return null}}function sK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[dK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[dK]=G,G}function aK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function tK(_={}){let $=typeof _.readItem==="function"?_.readItem:W1,j=_.storageKey||J8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",V=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:K==="error"?V||"BTW stream interrupted. You can retry.":V,model:null,status:K}}catch{return null}}function eK(_,$={}){let j=$.defaultChatJid||"web:default",G=z8(_,"chat_jid",j),Z=Vj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Vj(_?.get?.("pane_popout")),Y=z8(_,"pane_path"),q=z8(_,"pane_label"),V=Vj(_?.get?.("branch_loader")),K=z8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:V,branchLoaderSourceChatJid:K}}function _Q(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function $Q(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Kj(_,$,j){return _||$?.label||j||"Pane"}function jQ(_,$,j){return`${Kj(_,$,j)} · PiClaw`}function GQ(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function ZQ(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function XQ(_,$,j,G){return _===$&&!j||G}function YQ(_,$,j,G,Z){return _||!$&&(j||G&&Z)}I_();function dA(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:dA($,j)}var qQ=!1,VQ=!1,KQ=!1;function iA(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function oA(_=typeof window<"u"?window:null){if(!_||VQ)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),VQ=!0}function sA(){X_.register(E3),X_.register(g7),X_.register(u7),X_.register(b7),X_.register(v7),X_.register(m7),X_.register(h7),X_.register(l7),X_.register(p7),X_.register(n7),X_.register(a3),O3(),X_.register(M3),X_.register(y3)}function aA(_=typeof window<"u"?window:null){if(!_||KQ)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;KQ=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function QQ(){if(qQ)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(iA($),oA(_),b9(_),_)try{let j=await Promise.resolve().then(() => (y0(),zG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}sA(),await LV(_),aA(_),qQ=!0}function tA(_=B5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var LQ=tA(B5);function BQ(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:V,agentState:K,composeState:L,modelState:Q}=_,N={appShellRef:V.appShellRef,editorOpen:V.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:V.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:V.appShellRef,workspaceOpen:V.workspaceOpen,editorOpen:V.editorOpen,chatOnlyMode:V.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:V.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:V.renameBranchNameDraft,renameBranchNameInputRef:V.renameBranchNameInputRef,setRenameBranchNameDraft:V.setRenameBranchNameDraft,renameBranchDraftState:V.renameBranchDraftState,isRenamingBranch:V.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:V.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:V.TERMINAL_TAB_PATH,isIOSDevice:V.isIOSDevice,currentBranchRecord:V.currentBranchRecord,currentChatJid:V.currentChatJid,currentChatBranches:V.currentChatBranches,formatBranchPickerLabel:V.formatBranchPickerLabel,activeSearchScopeLabel:V.activeSearchScopeLabel,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,oobePanelState:V.oobePanelState,composePrefillRequest:V.composePrefillRequest,requestComposePrefill:V.requestComposePrefill,handleOobeSetupProvider:V.handleOobeSetupProvider,handleOobeShowModelPicker:V.handleOobeShowModelPicker,handleOobeOpenWorkspace:V.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:V.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:V.handleCompleteProviderReadyOobe,posts:V.posts,hasMore:V.hasMore,loadMore:V.loadMore,timelineRef:V.timelineRef,agents:V.agents,userProfile:V.userProfile,removingPostIds:V.removingPostIds,extensionStatusPanels:V.extensionStatusPanels,pendingExtensionPanelActions:V.pendingExtensionPanelActions,searchOpen:V.searchOpen,followupQueueItems:V.followupQueueItems,viewStateRef:V.viewStateRef,loadPosts:V.loadPosts,scrollToBottom:V.scrollToBottom,searchScope:V.searchScope,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,panePopoutPath:V.panePopoutPath,tabPaneOverrides:V.tabPaneOverrides,handleTabClose:V.handleTabClose,handleTabCloseOthers:V.handleTabCloseOthers,handleTabCloseAll:V.handleTabCloseAll,handleTabTogglePin:V.handleTabTogglePin,handleTabEditSource:V.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:V.openEditor,openTerminalTab:V.openTerminalTab,openVncTab:V.openVncTab,fileRefs:L.fileRefs,folderRefs:L.folderRefs,messageRefs:L.messageRefs,followupQueueCount:L.followupQueueCount,attachmentPreview:L.attachmentPreview,setAttachmentPreview:L.setAttachmentPreview,extensionWorkingState:L.extensionWorkingState,activeChatAgents:Q.activeChatAgents,connectionStatus:Q.connectionStatus,stateAccessFailed:Q.stateAccessFailed,activeModel:Q.activeModel,activeModelUsage:Q.activeModelUsage,activeThinkingLevel:Q.activeThinkingLevel,supportsThinking:Q.supportsThinking,contextUsage:Q.contextUsage,notificationsEnabled:Q.notificationsEnabled,notificationPermission:Q.notificationPermission,handleToggleNotifications:Q.handleToggleNotifications,setActiveModel:Q.setActiveModel,applyModelState:Q.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...q,...K,...L,...Q};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:N,mainShellOptions:B}}function eA(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function NQ(_){let $=eA({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return BQ({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}y0();var UQ="(min-width: 1024px) and (orientation: landscape)";function Qj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function FQ(_,$){let j=Qj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function _k(_,$,j){let G=Qj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function T5(_=typeof window<"u"?window:null){let $=Qj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function HQ(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function DQ(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||T5($),Y=HQ(X),q=FQ($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let V=FQ($,"workspaceOpen");if(typeof V==="boolean")return V}return Z}function EQ(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||T5(j);_k(j,HQ(Z),Boolean(_))}_5();var $k=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function OQ(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(f1({window:j,navigator:G}))};Z();let Y=$k.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function A8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function WQ(_={}){return f1(_)&&q2(_)}var jk=96;function Gk(_={},$={}){let j=_.window??(typeof window<"u"?window:null),G=Number(j?.visualViewport?.height||0),Z=Number(j?.innerHeight||0),X=Number.isFinite(G)&&G>0,Y=Number.isFinite(Z)&&Z>0;if(X){if($.ignoreStandaloneChromeGap===!0&&Y&&Z>G){let q=Z-G;if(q>0&&q<=jk)return Math.round(Z)}return Math.round(G)}if(Y)return Math.round(Z);return null}function Zk(_={},$={}){if(!WQ(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=Gk({window:j},{ignoreStandaloneChromeGap:!0});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function zQ(_={}){if(!WQ(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let Q of Z)$.clearTimeout?.(Q);Z.clear()},Y=()=>{G=0,Zk({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},V=()=>{q();for(let Q of[80,220,420]){let N=$.setTimeout?.(()=>{Z.delete(N),q()},Q);if(N!=null)Z.add(N)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},L=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",V,!0),L?.addEventListener?.("resize",V),L?.addEventListener?.("scroll",V),()=>{X(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",V,!0),L?.removeEventListener?.("resize",V),L?.removeEventListener?.("scroll",V)}}var Lj="resume-layout-settling",Xk=220,T6=new WeakMap;function Yk(_){if(!_){L_(J8,"");return}L_(J8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function qk(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function Vk(_,$={}){if(!_)return()=>{};let{durationMs:j=Xk,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=T6.get(_);if(X)Z(X);_.classList.add(Lj);let Y=G(()=>{if(T6.get(_)===Y)_.classList.remove(Lj),T6.delete(_)},j);return T6.set(_,Y),()=>{let q=T6.get(_);if(q)Z(q),T6.delete(_);_.classList.remove(Lj)}}function Kk(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function JQ(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:V,agentsRef:K,currentChatJid:L,activeChatJidRef:Q,userProfile:N,userProfileRef:B,brandingRef:U,panePopoutMode:E=!1}=_;iX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>nZ(),[]),u(()=>OQ(Z),[Z]),u(()=>{let k=()=>{},z=A8(()=>{Z7(),k(),k=Vk(G.current)});return()=>{z(),k()}},[G]);let D=g(T5());return u(()=>{EQ(X,{bucket:D.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let k=window.matchMedia(UQ),z=()=>{let W=T5(window);if(D.current===W)return;let I=D.current;if(D.current=W,I==="desktop"&&W==="narrow")Y(!1)};if(k.addEventListener)k.addEventListener("change",z);else if(k.addListener)k.addListener(z);return()=>{if(k.removeEventListener)k.removeEventListener("change",z);else if(k.removeListener)k.removeListener(z)}},[Y]),u(()=>zQ(),[]),u(()=>{Yk(q)},[q]),u(()=>{K.current=V||{}},[V,K]),u(()=>{Q.current=L},[Q,L]),u(()=>{B.current=N||{name:"You",avatar_url:null,avatar_background:null}},[N,B]),{applyBranding:R((k,z,W=null)=>{if(typeof document>"u")return;let I=(k||"").trim()||"PiClaw";if(U.current.title!==I){if(qk({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=I;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==I)A.setAttribute("content",I)}U.current.title=I}let x=z?`${z}|${W||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let A=W||Date.now();Kk(document,A)}},[U])}}y0();function AQ(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Bj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function k8(_,$){let j=Array.isArray(_)?_:[],G=Bj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function M8(_,$){let j=Array.isArray(_)?_:[],G=Bj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function y8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Bj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function kQ(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function MQ(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function Nj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:V,setPosts:K,setHasMore:L}=_,Q=typeof $==="string"?$.trim():"";if(!Q)return;let N=j==="root"||j==="all"?j:"current";Y(N),q(Q),V(null),K(null);try{let B=await X(Q,50,0,G,N,Z,_.filters);K(Array.isArray(B?.results)?B.results:[]),L(!1)}catch(B){console.error("Failed to search:",B),K([])}}async function yQ(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:V,loadMoreRef:K,confirm:L=(H)=>window.confirm(H),showAlert:Q=(H)=>alert(H),scheduleTimeout:N=(H,k)=>{setTimeout(H,k)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((H)=>H?.data?.thread_id===B&&H?.id!==B).length||0;if(E>0){if(!L(`Delete this message and its ${E} replies?`))return}let D=(H)=>{if(!H.length)return;q((k)=>{let z=new Set(k);return H.forEach((W)=>z.add(W)),z}),N(()=>{if(X(()=>{Y((k)=>k?k.filter((z)=>!H.includes(z.id)):k)}),q((k)=>{let z=new Set(k);return H.forEach((W)=>z.delete(W)),z}),V.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(B,E>0,U);if(H?.ids?.length)D(H.ids)}catch(H){let k=H instanceof Error?H.message:String(H||"");if(E===0&&k.includes("Replies exist")){if(!L("Delete this message and its replies?"))return;let W=await Z(B,!0,U);if(W?.ids?.length)D(W.ids);return}console.error("Failed to delete post:",H),Q(`Failed to delete message: ${k}`)}}async function wQ(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(Q)=>document.getElementById(Q),scheduleRaf:q=(Q)=>requestAnimationFrame(Q),scheduleTimeout:V=(Q,N)=>{setTimeout(Q,N)}}=_,K=(Q)=>{Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.classList.add("post-highlight"),V(()=>Q.classList.remove("post-highlight"),2000)},L=Y(`post-${$}`);if(L){K(L);return}try{let Q=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,Q))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((E)=>E.id===B.id))return U;return[...U,B]}),q(()=>{V(()=>{let U=Y(`post-${$}`);if(U)K(U)},50)})}catch(Q){console.error("[scrollToMessage] Failed to fetch message",$,Q)}}function Qk(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function Lk(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:V,setSearchOpen:K,setMessageRefs:L,navigate:Q,chatOnlyMode:N,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,D=E!==G,H=Boolean(Y||X||Z);if(!D&&!H)return L((k)=>k8(k,U)),!0;if(L([U]),q?.(null),V?.(null),K?.(!1),D&&typeof Q==="function"){let k=T1(B,E,{chatOnly:N});Q(k)}return!0}function TQ(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setFolderRefs:V,setMessageRefs:K,currentChatJid:L,currentHashtag:Q,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,navigate:H,chatOnlyMode:k,baseHref:z,getThread:W,setPosts:I}=_,x=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{x()}},[x]);let A=R((t)=>{q((K0)=>k8(K0,t))},[q]),M=R((t)=>{q((K0)=>M8(K0,t))},[q]),O=R(()=>{q([])},[q]),y=R((t)=>{q(y8(t))},[q]),T=R((t)=>{V((K0)=>k8(K0,t))},[V]),J=R((t)=>{V((K0)=>M8(K0,t))},[V]),C=R(()=>{V([])},[V]),f=R((t)=>{V(y8(t))},[V]),b=R((t,K0=null,Q0="info",k0=3000)=>{x(),$({title:t,detail:K0||null,kind:Q0||"info"}),j.current=setTimeout(()=>{$((s)=>s?.title===t?null:s)},k0)},[x,j,$]),m=R((t,{autoOpenEditor:K0=!1}={})=>{let Q0=AQ(t,{editorOpen:G,autoOpenEditor:K0,resolvePane:X});if(Q0.kind==="open"){Z(Q0.path);return}if(Q0.kind==="toast")b(Q0.title,Q0.detail,Q0.level)},[G,Z,X,b]),l=R((t)=>{m(t,{autoOpenEditor:!1})},[m]),_0=R((t)=>{m(t,{autoOpenEditor:!0})},[m]),v=R(()=>{let t=Y;if(t)A(t)},[A,Y]),e=R((t,K0=null)=>{Lk({id:t,targetChatJid:K0,currentChatJid:L,currentHashtag:Q,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,setMessageRefs:K,navigate:H,chatOnlyMode:k,baseHref:z})},[z,k,L,Q,H,B,N,U,K,D,E]),O0=R(async(t,K0=null)=>{await wQ({id:t,targetChatJid:K0,currentChatJid:L,getThread:W,setPosts:I})},[L,W,I]),G0=R((t)=>{K((K0)=>M8(K0,t))},[K]),$0=R(()=>{K([])},[K]),q0=R((t)=>{K(y8(t))},[K]),N0=R((t)=>{b("Compose failed",Qk(t),"error",5000)},[b]);return{clearIntentToast:x,addFileRef:A,removeFileRef:M,clearFileRefs:O,setFileRefsFromCompose:y,addFolderRef:T,removeFolderRef:J,clearFolderRefs:C,setFolderRefsFromCompose:f,showIntentToast:b,openFileFromPill:l,openTimelineFileFromPill:_0,attachActiveEditorFile:v,addMessageRef:e,scrollToMessage:O0,removeMessageRef:G0,clearMessageRefs:$0,setMessageRefsFromCompose:q0,handleComposeSubmitError:N0}}y0();async function xQ(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:V,draftBufferRef:K,setAgentThought:L,setAgentDraft:Q}=_;if($!=="thought"&&$!=="draft")return;let N=G.current;if($==="thought"){if(Z.current=j,N)try{await Y(N,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=N?await q(N,"thought"):null;if(B?.text)V.current=B.text;L((U)=>({...U||{text:"",totalLines:0},fullText:V.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,N)try{await Y(N,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=N?await q(N,"draft"):null;if(B?.text)K.current=B.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function Bk(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function Nk(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function IQ(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:V,draftBufferRef:K,thoughtBufferRef:L,pendingRequestRef:Q,lastAgentResponseRef:N,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:D,thoughtExpandedRef:H,draftExpandedRef:k,setCurrentTurnId:z,setSteerQueuedTurnId:W,currentTurnIdRefForPanel:I,setAgentThoughtVisibility:x,getAgentThought:A,setAgentThought:M,setAgentDraft:O}=_,y=R((m={})=>{let l=Number(m.atMs),_0=Number.isFinite(l)&&l>0?l:Date.now();if(Z.current=_0,m.running)Y.current=!0,q((v)=>v?v:!0);if(m.clearSilence)X.current=0},[Y,Z,X,q]),T=R(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{T()},[T]);let J=R(()=>{T(),V((m)=>Bk(m))},[T,V]),C=R((m)=>{if(!m)return;T();let l=Date.now();G.current=l,V(Nk(m)),j.current=setTimeout(()=>{if(G.current!==l)return;V((_0)=>{if(!_0||!(_0.last_activity||_0.lastActivity))return _0;return null})},$)},[T,j,G,$,V]),f=R(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,K.current="",L.current="",Q.current=null,N.current=null,B.current=null,U.current=null,E.current=null,D.current={inFlight:!1,lastAttemptAt:0,turnId:null},T(),z(null),W(null),H.current=!1,k.current=!1},[E,T,B,K,k,Y,Z,N,X,Q,z,q,W,D,U,L,H]),b=R(async(m,l)=>{await xQ({panelKey:m,expanded:l,currentTurnIdRef:I,thoughtExpandedRef:H,draftExpandedRef:k,setAgentThoughtVisibility:x,getAgentThought:A,thoughtBufferRef:L,draftBufferRef:K,setAgentThought:M,setAgentDraft:O})},[I,K,k,A,O,M,x,L,H]);return{noteAgentActivity:y,clearLastActivityTimer:T,clearLastActivityFlag:J,showLastActivity:C,clearAgentRunState:f,handlePanelToggle:b}}y0();function w8(_){return _?{..._}:{text:"",totalLines:0}}function CQ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function Fk(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function Uk(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function PQ(_){return{agentStatus:_.agentStatus,agentDraft:w8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:w8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:CQ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:Fk(_.silentRecovery)}}function fQ(_){let $=_.snapshot||Uk(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(w8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(w8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(CQ($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Fj(_){return String(_||"").trim()||"web:default"}function RQ({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Hk(_){return RQ(_)}function Dk(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function SQ(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:V,agentThought:K,pendingRequest:L,pendingRequestRef:Q,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunningRef:k,wasAgentActiveRef:z,draftBufferRef:W,thoughtBufferRef:I,lastAgentEventRef:x,lastSilenceNoticeRef:A,lastAgentResponseRef:M,currentTurnIdRef:O,thoughtExpandedRef:y,draftExpandedRef:T,agentStatusRef:J,silentRecoveryRef:C,clearLastActivityTimer:f,setIsAgentTurnActive:b,setAgentStatus:m,setAgentDraft:l,setAgentPlan:_0,setAgentThought:v,setPendingRequest:e,setCurrentTurnId:O0,setFollowupQueueItems:G0,setActiveModel:$0,setActiveThinkingLevel:q0,setSupportsThinking:N0,setActiveModelUsage:t,setContextUsage:K0,lastNotifiedIdRef:Q0,agentsRef:k0,notify:s,shouldNotifyLocallyForChat:X0}=_,E0=R((c0)=>{if(!Hk({remainingQueueCount:c0,steerQueuedTurnId:Z.current,currentTurnId:O.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,O,X,Z]),C0=R(()=>PQ({agentStatus:Y,agentDraft:q,agentPlan:V,agentThought:K,pendingRequest:L,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunning:k.current,wasAgentActive:z.current,draftBuffer:W.current,thoughtBuffer:I.current,lastAgentEvent:x.current,lastSilenceNotice:A.current,lastAgentResponse:M.current,currentTurnIdRef:O.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:y.current,draftExpanded:T.current,agentStatusRef:J.current,silentRecovery:C.current}),[B,D,U,q,V,Y,K,H,G,N,$,L,j,E,k,z,W,I,x,A,M,O,Z,y,T,J,C]),g0=R((c0)=>{fQ({snapshot:c0,clearLastActivityTimer:f,refs:{isAgentRunningRef:k,wasAgentActiveRef:z,lastAgentEventRef:x,lastSilenceNoticeRef:A,draftBufferRef:W,thoughtBufferRef:I,pendingRequestRef:Q,lastAgentResponseRef:M,currentTurnIdRef:O,steerQueuedTurnIdRef:Z,agentStatusRef:J,silentRecoveryRef:C,thoughtExpandedRef:y,draftExpandedRef:T},setters:{setIsAgentTurnActive:b,setAgentStatus:m,setAgentDraft:l,setAgentPlan:_0,setAgentThought:v,setPendingRequest:e,setCurrentTurnId:O0,setSteerQueuedTurnId:X,setFollowupQueueItems:G0,setActiveModel:$0,setActiveThinkingLevel:q0,setSupportsThinking:N0,setActiveModelUsage:t,setContextUsage:K0}})},[J,f,O,W,T,k,x,M,A,Q,$0,t,q0,l,_0,m,v,K0,O0,G0,b,e,X,N0,C,Z,I,y,z]),n0=R((c0)=>{if(!c0)return;if(O.current===c0)return;O.current=c0,C.current={inFlight:!1,lastAttemptAt:0,turnId:c0},O0(c0),Z.current=null,X(null),W.current="",I.current="",l({text:"",totalLines:0}),_0(""),v({text:"",totalLines:0}),e(null),Q.current=null,M.current=null,y.current=!1,T.current=!1},[O,W,T,M,Q,l,_0,v,O0,e,X,C,Z,I,y]),j_=R((c0)=>{let d0=M.current;if(!d0||!d0.post)return;if(c0&&d0.turnId&&d0.turnId!==c0)return;let u0=d0.post,o0=typeof u0?.chat_jid==="string"&&u0.chat_jid.trim()?u0.chat_jid.trim():"";if(!o0||!X0(o0))return;if(u0.id&&Q0.current===u0.id)return;let v0=Dk(u0);if(!v0)return;Q0.current=u0.id||Q0.current,M.current=null;let a0=k0.current||{},F_=(u0?.data?.agent_id?a0[u0.data.agent_id]:null)?.name||"Pi";s(F_,v0,{sourceLabel:"Local"})},[k0,M,Q0,s,X0]);return{clearQueuedSteerStateIfStale:E0,snapshotCurrentChatPaneState:C0,restoreChatPaneState:g0,setActiveTurn:n0,notifyForFinalResponse:j_}}y0();function T8(_){return _?.turn_id||_?.turnId||null}function x6(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Uj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Hj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function x8(_,$){return{text:_,totalLines:Hj(_,$)}}function Dj(_,$){return{text:$?.text||"",totalLines:oX(_),fullText:_}}function uQ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function gQ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function bQ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function vQ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Ej(_,$){return _&&$}function mQ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function cQ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function hQ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function lQ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:V,pendingRequestRef:K,thoughtBufferRef:L,draftBufferRef:Q,setAgentStatus:N,setAgentDraft:B,setAgentPlan:U,setAgentThought:E,setPendingRequest:D,setActiveTurn:H,noteAgentActivity:k,clearLastActivityFlag:z,onStateAccessResult:W}=_,I=$;try{let x=await j(I);if(W?.(!1),G.current!==I)return null;if(!x||x.status!=="active"||!x.data){if(Z.current&&s1(X.current))Y();return Z.current=!1,q(),V.current=null,N(null),B({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),D(null),K.current=null,x??null}Z.current=!0;let A=x.data;V.current=A;let M=T8(A);if(M)H(M);k({running:!0,clearSilence:!0,atMs:r$(A)??Date.now()}),z(),N(A);let O=x6(x.thought);if(O)E((T)=>{if(Uj(T,O.text))return T;return L.current=O.text,O});let y=x6(x.draft);if(y)B((T)=>{if(Uj(T,y.text))return T;return Q.current=y.text,y});return x}catch(x){return W?.(!0),console.warn("Failed to fetch agent status:",x),null}}async function pQ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:V,refreshAgentStatus:K,now:L=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let Q=G.current||null,N=Z.current,B=L();if(N.inFlight)return null;if(N.turnId===Q&&B-N.lastAttemptAt<X)return null;N.inFlight=!0,N.lastAttemptAt=B,N.turnId=Q;try{if(s1(Y.current))await q();return await V(),await K()}finally{N.inFlight=!1}}function Ek(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function rQ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:V,isCompactionStatus:K,setAgentStatus:L,reconcileSilentTurn:Q,now:N=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=N(),E=U-B,D=X.current,H=K(D),k=Ek(D);if(E>=q){if(!H&&!k)L({type:"waiting",title:"Re-syncing after a quiet period…"});Q();return}if(E>=Y&&U-Z.current>=V){if(!H&&!k){let z=Math.floor(E/1000);L({type:"waiting",title:`Waiting for model… No events for ${z}s`})}Z.current=U,Q()}}function Ok(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function nQ(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:V,pendingRequestRef:K,lastAgentResponseRef:L,agentStatusRef:Q,stalledPostIdRef:N,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:D,setAgentThought:H,setPendingRequest:k,setAgentStatus:z,setPosts:W,dedupePosts:I,now:x=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let M=Ok(Q.current);$.current=!1,j.current=0,G.current=null,Q.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let O=(q.current||"").trim();if(q.current="",V.current="",D(""),H({text:"",totalLines:0}),k(null),K.current=null,L.current=null,!O){E({text:"",totalLines:0}),z({type:"error",title:"Response stalled - No content received"});return}E({text:O,totalLines:Hj(O,null),fullText:O});let y=O,T=x(),J=A(),C={id:T,timestamp:J,data:{type:"agent_response",content:y,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:M?.summary||"",tool_title:M?.title||"",tool_name:M?.toolName||"",tool_status:M?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};N.current=T,W((f)=>f?I([...f,C]):[C]),B.current?.(),z(null)}function Wk(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function zk(_){nQ(_)}function dQ(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function iQ(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:L,pendingRequestRef:Q,lastAgentResponseRef:N,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:W,dedupePosts:I}=_,x=R(()=>{Wk({stalledPostIdRef:$,setPosts:j})},[j,$]),A=R(()=>{zk({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:L,pendingRequestRef:Q,lastAgentResponseRef:N,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:k,setPendingRequest:z,setAgentStatus:W,setPosts:j,dedupePosts:I})},[Y,I,K,V,G,X,N,B,Z,Q,U,D,H,W,k,E,z,j,$,L,q]);return{removeStalledPost:x,finalizeStalledResponse:A}}function Jk(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function Ak(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function oQ(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:V}=JQ($),K=TQ(j);Jk({removeFileRefRef:q,composeReferenceActions:K});let L=IQ(G),Q=SQ({...Z,clearLastActivityTimer:L.clearLastActivityTimer}),N=iQ(X);return dQ(Y),Ak({applyBranding:V,composeReferenceActions:K,agentActivity:L,chatPaneRuntime:Q,recoveryCallbacks:N})}y0();y0();I_();var I8=new Map,Oj=new Map;function sQ(){return Date.now()}function x5(_){return String(_||"").trim()}function aQ(_,$=600000){return Boolean(_&&sQ()-_.cachedAt<=$)}function kk(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function tQ(_,$){return I8.delete(_),I8.set(_,$),kk(I8),$}function C8(_,$){let j=x5(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:sQ()};return tQ(j,G)}function Wj(_,$={}){let j=x5(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=I8.get(j)||null;if(!aQ(Z,G))return null;return tQ(j,Z)}function eQ(_,$,j=5){if(!Array.isArray(_))return[];let G=x5($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let V=x5(q?.chat_jid);if(!V||V===G||X.has(V))continue;if(X.add(V),Y.push(V),Y.length>=Z)break}return Y}async function _L(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>x5(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!aQ(Wj(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],V=Oj.get(q);if(V){await V;continue}let K=(async()=>{try{let L=await _.fetchTimeline(q);C8(q,L)}catch(L){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",L,{chatJid:q})}finally{Oj.delete(q)}})();Oj.set(q,K),await K}});await Promise.all(Y)}function $L(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return E6([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return E6([...G,...X])}function jL({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=P(null),[q,V]=P(!1),K=g(!1),L=g(null),Q=g(!1),N=g(null),B=g(null),U=g(0),E=g(0);u(()=>{K.current=q},[q]),u(()=>{B.current=X},[X]);let D=!G&&!Z,H=g(D);u(()=>{H.current=D},[D]),u(()=>{U.current+=1,Y(null),B.current=null,N.current=null,Q.current=!1,K.current=!1,V(!1),E.current=0},[j]);let k=R((M,O)=>{if(!D)return;C8(j,{posts:Array.isArray(M)?M:[],has_more:Boolean(O)})},[j,D]),z=R((M,O)=>{B.current=Array.isArray(M)?M:[],K.current=Boolean(O),Y(B.current),V(K.current),k(B.current,K.current)},[k]),W=R(async(M=null)=>{let O=U.current;try{if(M){let C=await K7(M,50,0,j);if(O!==U.current)return;Y(C.posts),V(!1);return}let y=(C)=>{if(O!==U.current)return;let f=Array.isArray(C?.posts)?C.posts:[],b=Boolean(C?.has_more);z(f,b)},T=Wj(j);if(T){z(T.posts,T.has_more);let C=E.current;l$(10,null,j).then((f)=>{if(O!==U.current||E.current!==C)return;if(!H.current)return;let b=Array.isArray(f?.posts)?f.posts:[],m=Boolean(f?.has_more);z($L(B.current,b),m)}).catch((f)=>{if(O!==U.current)return;console.error("Failed to refresh cached timeline:",f)});return}let J=await l$(10,null,j);y(J)}catch(y){if(O!==U.current)return;throw console.error("Failed to load posts:",y),y}},[j,z]),I=R(async()=>{let M=U.current;try{let O=await l$(10,null,j);if(M!==U.current)return;z($L(B.current,O?.posts),Boolean(O?.has_more))}catch(O){if(M!==U.current)return;console.error("Failed to refresh timeline:",O)}},[j,z]),x=R(async(M={})=>{let O=U.current,y=B.current;if(!y||y.length===0)return;if(Q.current)return;let{preserveScroll:T=!0,preserveMode:J="top",allowRepeat:C=!1}=M,f=(l)=>{if(!T){l();return}if(J==="top")$(l);else _(l)},m=y.slice().sort((l,_0)=>l.id-_0.id)[0]?.id;if(!Number.isFinite(m))return;if(!C&&N.current===m)return;Q.current=!0,N.current=m;try{let l=await l$(10,m,j);if(O!==U.current)return;if(E.current+=1,l.posts.length>0)f(()=>{let _0=E6([...l.posts,...B.current||[]]);z(_0,l.has_more)});else z(B.current||[],!1)}catch(l){if(O!==U.current)return;console.error("Failed to load more posts:",l)}finally{if(O===U.current)Q.current=!1}},[j,_,$,z]);u(()=>{L.current=x},[x]);let A=R((M)=>{Y((O)=>{let y=typeof M==="function"?M(O):M;if(B.current=y,Array.isArray(y)){if(E.current+=1,D)C8(j,{posts:y,has_more:K.current})}return y})},[j,D]);return{posts:X,setPosts:A,hasMore:q,setHasMore:V,hasMoreRef:K,loadPosts:W,refreshTimeline:I,loadMore:x,loadMoreRef:L,loadingMoreRef:Q,lastBeforeIdRef:N}}y0();function Mk(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function GL(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!Mk(Z));return G.length===_.length?_:G}function ZL(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function XL(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function $4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function YL(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function qL(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function yk(_,$=150){return Math.abs(_)<=$}function VL(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=R(()=>{let V=$.current;if(!V)return;if(yk(V.scrollTop))V.scrollTop=0},[$]),X=R((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let{currentHashtag:L,searchQuery:Q,searchOpen:N}=j.current||{},B=!((Q||N)&&!L),U=B?K.scrollHeight-K.scrollTop:K.scrollTop;V(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(B){let D=Math.max(E.scrollHeight-U,0);E.scrollTop=D}else{let D=Math.max(E.scrollHeight-E.clientHeight,0),H=Math.min(U,D);E.scrollTop=H}})},[$,j]),Y=R((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let L=K.scrollTop;V(),requestAnimationFrame(()=>{let Q=$.current;if(!Q)return;let N=Math.max(Q.scrollHeight-Q.clientHeight,0);Q.scrollTop=Math.min(L,N)})},[$]),q=R((V)=>{return GL(V,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function wk(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function Tk(_){_.scrollToBottomRef.current=_.scrollToBottom}function KL(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,V=g(null),{scrollToBottom:K,preserveTimelineScroll:L,preserveTimelineScrollTop:Q,filterQueuedPosts:N}=VL({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});Tk({scrollToBottomRef:V,scrollToBottom:K});let{posts:B,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:W,loadMoreRef:I}=jL({preserveTimelineScroll:L,preserveTimelineScrollTop:Q,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Y0(()=>wk({rawPosts:B,followupQueueItems:q,filterQueuedPosts:N}),[N,q,B]);return{scrollToBottomRef:V,scrollToBottom:K,preserveTimelineScroll:L,preserveTimelineScrollTop:Q,rawPosts:B,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:k,refreshTimeline:z,loadMore:W,loadMoreRef:I,posts:x}}y0();function xk(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function QL(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:V,searchPosts:K,setCurrentHashtag:L,setSearchQuery:Q,setSearchOpen:N,setSearchScope:B,setPosts:U,setHasMore:E,preserveTimelineScrollTop:D,setRemovingPostIds:H,deletePost:k,hasMoreRef:z,loadMoreRef:W}=_,I=R(async(C)=>{await kQ({hashtag:C,setCurrentHashtag:L,setPosts:U,loadPosts:V})},[V,L,U]),x=R(async()=>{await MQ({setCurrentHashtag:L,setSearchQuery:Q,setPosts:U,loadPosts:V})},[V,L,U,Q]),A=R(async(C,f=Z,b)=>{await Nj({query:C,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:Q,setCurrentHashtag:L,setPosts:U,setHasMore:E,filters:b})},[X,Y,K,Z,L,E,U,Q,B]),M=R((C)=>{if(B(C),j&&j.trim())Nj({query:j,scope:C,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:B,setSearchQuery:Q,setCurrentHashtag:L,setPosts:U,setHasMore:E})},[X,Y,K,j,L,E,U,Q,B]),O=R(()=>{N(!0),Q(null),L(null),B("current"),U([])},[L,U,N,Q,B]),y=R(()=>{N(!1),Q(null),V()},[V,N,Q]),T=Y0(()=>xk({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),J=R(async(C)=>{await yQ({post:C,posts:q,currentChatJid:X,deletePost:k,preserveTimelineScrollTop:D,setPosts:U,setRemovingPostIds:H,hasMoreRef:z,loadMoreRef:W})},[X,k,z,W,q,D,U,H]);return{handleHashtagClick:I,handleBackToTimeline:x,handleSearch:A,handleSearchScopeChange:M,enterSearchMode:O,exitSearchMode:y,isMainTimelineView:T,handleDeletePost:J}}y0();function zj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function LL(_,$){let j=new Map(_),G=zj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function BL(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=zj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function NL(_){if(_?.options?.remove)return!0;return zj(_)?.state!=="running"}function Jj(_,$){return`${_}:${$}`}function FL(_,$,j){let G=Jj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function UL(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function P8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function HL(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var DL="piclaw:ctx:";function j4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function u4(_,$){let j=j4(_),G=j4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function I6(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{L_(DL+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function EL(_){if(!_)return null;return U2(DL+_)}async function OL(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,V=++j.current,K=$;try{let L=await X(K);if(V!==j.current)return;if(G.current!==K)return;let Q=Z.current,N=Array.isArray(L?.items)?L.items:[],B=ZL(N,Q);if(B.length){Y((U)=>XL(U,B)?U:B);return}if(N.length>0)return;Q.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(V!==j.current)return;if(G.current!==K)return;Y((L)=>L.length===0?L:[])}}async function WL(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=j4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>u4(q,Y)?q:Y),I6(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function zL(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((V)=>LL(V,q)),X((V)=>P8(V,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function JL(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function AL(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(s1($.current))j();G()}Y5();var f8=new Map,R8=new Map,Ik=250,kL=1500,ML=300000;function C6(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function Ck(_,$){return`${_}:${$}`}function Pk(_){for(let[$,j]of R8.entries())if(_-j>ML)R8.delete($)}function fk(_){for(let[$,j]of f8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>ML)f8.delete($)}}function yL(_=C6()){Pk(_),fk(_)}function wL(_){let{chatJid:$,nowMs:j=C6()}=_;if(!$)return;R8.set($,j),yL(j)}function I5(_,$=kL,j=C6()){if(!_)return!1;let G=R8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function J$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=Ik,activationWindowMs:X=kL,nowMs:Y=C6()}=_;yL(Y);let q=Ck($,j),V=f8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(f8.set(q,V),V.inFlight)return await V.inFlight;if(Boolean(A2("thread-switch",j)||I5(j,X,Y))&&Number.isFinite(V.lastCompletedAt)&&Y-V.lastCompletedAt<=Z)return V.lastValue;let L=Promise.resolve().then(G).then((Q)=>{return V.lastCompletedAt=C6(),V.lastValue=Q??null,V.inFlight=null,Q}).catch((Q)=>{throw V.lastCompletedAt=C6(),V.inFlight=null,Q});return V.inFlight=L,await L}function TL(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:V}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let L=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!L&&!Y.current&&!q.current&&!Z.current);return V("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Aj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function xL(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:V,pendingRequestRef:K,clearAgentRunState:L,hasConnectedOnceRef:Q,viewStateRef:N,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:D}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),V(null),K.current=null,L();return}if(!Q.current){if(Q.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),V(null),K.current=null,L(),I5($))return;if(Aj(N.current))B();U(),E(),D();return}if(Aj(N.current))B();U(),E(),D()}function IL(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,V=Aj($.current);if(j){if(V)G();Z(),X(),Y(),q();return}if(V)G();X(),Y(),q()}function Rk(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function CL(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:V,setContextUsage:K,getAutoresearchStatus:L,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:N,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:W,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:O,setPendingRequest:y,setActiveTurn:T,noteAgentActivity:J,clearLastActivityFlag:C,isAgentRunningRef:f,currentTurnIdRef:b,silentRecoveryRef:m,silenceRefreshMs:l,lastAgentEventRef:_0,lastSilenceNoticeRef:v,silenceWarningMs:e,silenceFinalizeMs:O0,isCompactionStatus:G0,serverVersionContext:$0,setConnectionStatus:q0,setStateAccessFailed:N0,setPendingRequestForConnection:t,hasConnectedOnceRef:K0}=_,Q0=R(()=>{return J$({kind:"queue-state",chatJid:$,run:async()=>{return await OL({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),k0=R(async()=>{await J$({kind:"context-usage",chatJid:$,run:async()=>{return await WL({currentChatJid:$,activeChatJidRef:j,getAgentContext:V,setContextUsage:K}),null}})},[j,$,V,K]),s=R(async()=>{await J$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await zL({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:L,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:N}),null}})},[j,$,L,Q,N]),X0=R(async()=>{return await J$({kind:"agent-status",chatJid:$,run:async()=>{return await lQ({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:k,pendingRequestRef:z,thoughtBufferRef:W,draftBufferRef:I,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:O,setPendingRequest:y,setActiveTurn:T,noteAgentActivity:J,clearLastActivityFlag:C,onStateAccessResult:N0})}})},[j,k,H,C,$,I,B,J,z,D,T,A,M,x,O,y,N0,W,E,U]),E0=R(async()=>{return await pQ({isAgentRunningRef:f,pendingRequestRef:z,currentTurnIdRef:b,silentRecoveryRef:m,silenceRefreshMs:l,viewStateRef:E,refreshTimeline:D,refreshQueueState:Q0,refreshAgentStatus:X0})},[b,f,z,X0,Q0,D,l,m,E]);u(()=>{let n0=Rk(e),j_=setInterval(()=>{rQ({isAgentRunningRef:f,pendingRequestRef:z,lastAgentEventRef:_0,lastSilenceNoticeRef:v,agentStatusRef:k,silenceWarningMs:e,silenceFinalizeMs:O0,silenceRefreshMs:l,isCompactionStatus:G0,setAgentStatus:x,reconcileSilentTurn:E0})},n0);return()=>clearInterval(j_)},[k,f,G0,_0,v,z,E0,x,O0,l,e]);let C0=R((n0)=>{return TL({serverVersion:n0,...$0})},[$0]),g0=R((n0)=>{if(n0==="connected")N0(!1);xL({currentChatJid:$,status:n0,setConnectionStatus:q0,setAgentStatus:x,setAgentDraft:A,setAgentPlan:M,setAgentThought:O,setPendingRequest:t,pendingRequestRef:z,clearAgentRunState:H,hasConnectedOnceRef:K0,viewStateRef:E,refreshTimeline:D,refreshAgentStatus:X0,refreshQueueState:Q0,refreshContextUsage:k0})},[H,$,K0,z,X0,k0,Q0,D,A,M,x,O,q0,t,N0,E]);return{refreshQueueState:Q0,refreshContextUsage:k0,refreshAutoresearchStatus:s,refreshAgentStatus:X0,handleUiVersionDrift:C0,handleConnectionStatusChange:g0}}y0();function C5(_){return typeof _==="string"}function P5(_){return typeof _==="string"&&_.trim().length>0}function S8(_){if(!P5(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function kj(_){if(!Array.isArray(_))return[];return _.filter(($)=>P5($?.chat_jid)&&P5($?.agent_name))}function PL(_){if(!Array.isArray(_))return[];return _.filter(($)=>C5($?.chat_jid)&&C5($?.agent_name))}function fL(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(C5(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!C5(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=C5(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let V=Boolean(Y.archived_at),K=Boolean(q.archived_at);if(V!==K)return V?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let L=S8(Y.updated_at)||S8(Y.created_at),Q=S8(q.updated_at)||S8(q.created_at);if(L!==Q)return Q-L;let N=P5(Y.agent_name)?Y.agent_name.trim():"",B=P5(q.agent_name)?q.agent_name.trim():"",U=N.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var Sk={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function RL(_){if(!_||typeof _!=="object")return Sk;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function SL(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function uL(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,V=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,L=!1;if(Z&&Z!==Y.name)q=Z,K=!0;if(X!==void 0){let Q=typeof X==="string"?X.trim():null,N=typeof V==="string"?V.trim():null,B=Q||null;if(B!==(N||null))V=B,L=!0}if(!K&&!L)return null;return{agentId:G,nameChanged:K,avatarChanged:L,resolvedName:q,resolvedAvatar:V}}function gL(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function bL(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function mL(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(dX(X));let Y=X?.user||{};G((V)=>gL(V,Y));let q=SL(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function cL(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=uL($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let V={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)V.name=X.resolvedName;if(X.avatarChanged)V.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:V}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function hL(_){let{payload:$,setUserProfile:j}=_;j((G)=>bL(G,$))}function vL(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function lL(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((K)=>vL(K,$)?K:$),q?.(!0);let V=RL($);if(V.hasModel)j((K)=>Object.is(K,V.model)?K:V.model);if(V.hasThinkingLevel){let K=V.thinkingLevelLabel??V.thinkingLevel;G((L)=>Object.is(L,K)?L:K)}if(V.hasSupportsThinking)Z((K)=>K===V.supportsThinking?K:V.supportsThinking);if(V.hasProviderUsage)X((K)=>vL(K,V.providerUsage)?K:V.providerUsage)}async function pL(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,V]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=kj(q?.chats),L=kj(V?.chats),Q=fL(K,L,Y);return X(Q),Q}catch{if(Z.current!==Y)return[];return X([]),[]}}async function rL(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(PL(Z?.chats))}catch{G([])}}function nL(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),qL($))Y()}function dL(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),V=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=V,G)G.style.setProperty("--sidebar-width",`${V}px`);return V}async function iL(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:K,scrollToBottom:L,isCancelled:Q,scheduleRaf:N=(W)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(W);return}setTimeout(W,0)},scheduleTimeout:B=(W,I)=>{setTimeout(W,I)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:D,onTimelineError:H}=_,k=(W)=>{if(Q())return;N(()=>{if(Q())return;N(()=>{if(Q())return;D?.(W)})})},z=()=>{if(Q())return;N(()=>{if(Q())return;B(()=>{if(Q())return;L()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),Q())return;E?.({mode:"hashtag",hashtag:$}),k({mode:"hashtag"})}catch(W){if(Q())return;throw H?.(W,{mode:"hashtag",hashtag:$}),W}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let W=await q(j,50,0,Z,G,X);if(Q())return;V(Array.isArray(W?.results)?W.results:[]),K(!1),E?.({mode:"search",resultCount:Array.isArray(W?.results)?W.results.length:0}),k({mode:"search"})}catch(W){if(Q())return;H?.(W,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",W),V([]),K(!1)}return}U?.({mode:"timeline"});try{if(await Y(),Q())return;E?.({mode:"timeline"}),k({mode:"timeline"}),z()}catch(W){if(Q())return;H?.(W,{mode:"timeline"}),console.error("Failed to load timeline:",W)}}Y5();I_();function uk(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:V=(Q,N)=>setInterval(Q,N),clearScheduledInterval:K=(Q)=>clearInterval(Q)}=_;if(Y)$();let L=V(()=>{j(),G(),Z(),X()},q);return()=>{K(L)}}function gk(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function bk(_){let $=eQ(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;_L({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>l$(10,null,j))})}function oL(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:V,currentRootChatJid:K,getAgentModels:L,getAgentContext:Q,getActiveChatAgents:N,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:D,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:W,setAgentModelsPayload:I,setHasLoadedAgentModels:x,agentsRef:A,refreshQueueState:M,refreshContextUsage:O,refreshAutoresearchStatus:y,setContextUsage:T,setExtensionWorkingState:J}=_,C=R(async()=>{await mL({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{C(),dL({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:U5(Number.POSITIVE_INFINITY)})},[q,C,X,Y]);let f=R(($0)=>{lL({payload:$0,setActiveModel:H,setActiveThinkingLevel:k,setSupportsThinking:z,setActiveModelUsage:W,setAgentModelsPayload:I,setHasLoadedAgentModels:x})},[H,W,k,I,x,z]),b=R(()=>A2("thread-switch",V),[V]),m=R(()=>{return J$({kind:"model-state",chatJid:V,run:async()=>{let $0=b();if($0)X1($0,"runtime-hydration-start",{phase:"model-state"});let q0=V;try{let[t,K0]=await Promise.all([(async()=>{let k0=$0||b();if(k0)X1(k0,"model-request-start",{chatJid:q0});let s=await L(q0);if(k0)X1(k0,"model-request-ready",{chatJid:q0,hasCurrent:Boolean(s?.current),modelCount:Array.isArray(s?.models)?s.models.length:0});return s})(),Q(q0).catch(()=>null)]);if(U.current&&U.current!==q0)return null;f(t);let Q0=j4(K0);if(Q0&&Q0.percent!=null)T((k0)=>u4(k0,Q0)?k0:Q0),I6(q0,Q0)}catch{if(U.current&&U.current!==q0)return null;f(null)}let N0=$0||b();if(N0)X1(N0,"runtime-hydration-ready",{chatJid:V}),k2(N0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:V});return null}})},[U,f,V,Q,L,b,T]);u(()=>{wL({chatJid:V}),H(null),k(null),z(!1),W(null),x(!1),I(null),J({message:null,indicator:null,visible:!0});let $0=EL(V);if($0)T($0);else T(null);m()},[V,m,H,W,k,I,T,J,x,z]);let l=R(($0)=>{cL({payload:$0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),_0=R(($0)=>{hL({payload:$0,setUserProfile:G})},[G]),v=R(($0)=>{let q0=Boolean($0?.prewarmRecent),N0=Number.isFinite($0?.prewarmLimit)?Number($0?.prewarmLimit):5;return J$({kind:"active-chat-agents",chatJid:V,run:async()=>{let t=b(),K0=await pL({currentChatJid:V,getActiveChatAgents:async()=>{if(t)X1(t,"active-chat-list-request-start",{chatJid:V});let Q0=await N(V);if(t)X1(t,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,k0)=>{if(t)X1(t,"branch-list-request-start",{rootChatJid:Q0});let s=await B(Q0,k0);if(t)X1(t,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(s?.chats)?s.chats.length:0});return s},activeChatJidRef:U,setActiveChatAgents:E});if(q0)bk({chats:K0,currentChatJid:V,prewarmLimit:N0});return null}})},[U,V,N,B,b,E]),e=R(()=>{return J$({kind:"current-chat-branches",chatJid:V,run:async()=>{let $0=b();return await rL({currentRootChatJid:K,getChatBranches:async(q0,N0)=>{if($0)X1($0,"root-branch-request-start",{rootChatJid:q0});let t=await B(q0,N0);if($0)X1($0,"root-branch-request-ready",{rootChatJid:q0,rowCount:Array.isArray(t?.chats)?t.chats.length:0});return t},setCurrentChatBranches:D}),null}})},[V,K,B,b,D]),O0=R(()=>{JL({refreshModelState:m,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:M,refreshContextUsage:O,refreshAutoresearchStatus:y})},[v,y,O,e,m,M]),G0=R(()=>{gk({refreshModelState:m,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:M,refreshContextUsage:O,refreshAutoresearchStatus:y,prewarmLimit:5})},[v,y,O,e,m,M]);return u(()=>uk({refreshModelAndQueueState:O0,refreshModelState:m,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshQueueState:M,runImmediately:!1}),[v,e,O0,m,M]),u(()=>{let $0=setInterval(()=>{m()},5000);return()=>clearInterval($0)},[m]),{updateAgentProfile:l,updateUserProfile:_0,applyModelState:f,refreshModelState:m,refreshActiveChatAgents:v,refreshCurrentChatBranches:e,refreshModelAndQueueState:O0,refreshPostPaintThreadState:G0}}y0();function vk(_,$){let j=N1(_);return Boolean(_&&j===$)}function P6(_,$,j){if(!vk(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function sL(_,$){return{..._,openedAt:$}}function aL(_){let $=N1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function tL(_,$,j){let G=nq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=N1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=N1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function eL(_,$){if(!_||_?.source!=="live")return _||null;let j=N1($),G=N1(_);if(j&&G&&j!==G)return _;return null}function _B(_,$,j){return P6(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Mj(_,$,j){if(j.errorMessage)return P6(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P6(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function $B(_,$,j){return P6(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function jB(_,$,j){return P6(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function GB(_,$,j){return P6(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}Y5();function mk(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function ZB(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function XB(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:K,scrollToBottom:L,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:N,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:D,restoreChatPaneState:H,dismissedQueueRowIdsRef:k,refreshAgentStatus:z,viewStateRef:W,refreshTimeline:I,refreshModelAndQueueState:x,refreshPostPaintThreadState:A,setFloatingWidget:M,dismissedLiveWidgetKeysRef:O}=_;u(()=>{mk({setExtensionStatusPanels:Q,setPendingExtensionPanelActions:N,setExtensionWorkingState:B})},[$,Q,N,B]),u(()=>{let J=!1,C=YX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(C,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),iL({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:V,setHasMore:K,scrollToBottom:L,isCancelled:()=>J,onTimelineLoadStart:(f)=>{X1(C,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{X1(C,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{X1(C,"timeline-first-paint",f||null),k2(C,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),ZB({refreshAgentStatus:z,refreshPostPaintThreadState:A})},onTimelineError:(f,b)=>{qX(C,f,"timeline-load-failed",b||null),ZB({refreshAgentStatus:z,refreshPostPaintThreadState:A})}}),()=>{J=!0,VX(C,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,L,q,K,V,z,A]),u(()=>{let J=U.current||$;E.current.set(J,D())},[E,$,U,D]),u(()=>{let J=U.current||$;if(J===$)return;E.current.set(J,D()),U.current=$,k.current.clear(),H(E.current.get($)||null)},[E,$,k,U,H,D]);let y=R(()=>{AL({viewStateRef:W,refreshTimeline:I,refreshModelAndQueueState:x})},[x,I,W]),T=R((J,C="streaming")=>{let f=new Date().toISOString();M((b)=>tL(b,J,{fallbackStatus:C,currentChatJid:$,dismissedSessionKeys:O.current,updatedAt:f}))},[$,O,M]);return{refreshCurrentView:y,applyLiveGeneratedWidgetUpdate:T}}y0();y0();I_();function ck({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!D5(),q=Z.visibilityState&&Z.visibilityState!=="visible",V=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},K=()=>{if(V())return;if(q)q=!1,X(),$?.()},L=()=>{if(V())return;if(q){K();return}if(Y)_.reconnectIfNeeded()},Q=()=>{K()},N=()=>{K()};return G.addEventListener("focus",L),G.addEventListener("pageshow",Q),Z.addEventListener("visibilitychange",N),()=>{G.removeEventListener("focus",L),G.removeEventListener("pageshow",Q),Z.removeEventListener("visibilitychange",N)}}function YB({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let q=g(j);q.current=j;let V=g(G);V.current=G,u(()=>{let K=new I2((Q,N)=>X.current(Q,N),(Q)=>Y.current(Q),{chatJid:Z});K.connect();let L=ck({sse:K,onWake:()=>V.current?.()});return()=>{L(),K.disconnect()}},[Z])}_5();b2();function g4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f6(_,$){return Boolean(_)&&!Boolean($)}function qB(_,$){return _||$||null}function VB(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function R6(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=$4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function yj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function hk(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function KB(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:hk($,j),panelKey:typeof $?.key==="string"?$.key:""}}function lk(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function QB(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=lk($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function LB(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),q=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(q)?q:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function BB(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var pk=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function NB(_){return pk.has(String(_||"").trim())}function rk(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function u8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(rk(_),{detail:G})),!0}function FB(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function UB(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function HB(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:V,draftBufferRef:K,thoughtBufferRef:L,previewResyncPendingRef:Q,previewResyncGenerationRef:N,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:D,thoughtThrottleRef:H,viewStateRef:k,followupQueueItemsRef:z,dismissedQueueRowIdsRef:W,scrollToBottomRef:I,hasMoreRef:x,loadMoreRef:A,lastAgentResponseRef:M,wasAgentActiveRef:O,setActiveTurn:y,applyLiveGeneratedWidgetUpdate:T,setFloatingWidget:J,clearLastActivityFlag:C,handleUiVersionDrift:f,setAgentStatus:b,setAgentDraft:m,setAgentPlan:l,setAgentThought:_0,setPendingRequest:v,clearAgentRunState:e,getAgentStatus:O0,noteAgentActivity:G0,showLastActivity:$0,refreshTimeline:q0,refreshModelAndQueueState:N0,refreshActiveChatAgents:t,refreshCurrentChatBranches:K0,notifyForFinalResponse:Q0,setContextUsage:k0,refreshContextUsage:s,refreshQueueState:X0,setFollowupQueueItems:E0,clearQueuedSteerStateIfStale:C0,setSteerQueuedTurnId:g0,applyModelState:n0,getAgentContext:j_,setExtensionStatusPanels:c0,setPendingExtensionPanelActions:d0,setExtensionWorkingState:u0,refreshActiveEditorFromWorkspace:o0,showIntentToast:v0,removeStalledPost:a0,setPosts:p0,preserveTimelineScrollTop:F_,openEditor:t0}=j,{turnId:b0,isCurrentChatEvent:A0}=FB(_,$,G);if(A0)Z($),X($);if(_==="ui_theme"){F6($);return}if(_==="ui_meters"){t7($);return}if(_==="ui_open_tab"){let H0=typeof $?.path==="string"?$.path.trim():"",f0=typeof $?.label==="string"?$.label.trim():void 0;if(H0==="piclaw://settings"){let T0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:T0?{section:T0}:void 0}));return}if(H0&&typeof t0==="function")t0(H0,f0?{label:f0}:void 0);return}let q_=VB(_);if(q_.kind==="update"){if(!A0)return;if(q_.shouldAdoptTurn&&f6(b0,Y.current))y(b0);T($,q_.fallbackStatus||"streaming");return}if(q_.kind==="close"){if(!A0)return;J((H0)=>eL(H0,$));return}if(_?.startsWith("agent_")&&!UB(_))C();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let T0=$.ui_theme.theme||"default",i0=$.ui_theme.tint||null;F6({theme:T0,tint:i0})}if($?.ui_meters)t7($.ui_meters);let H0=N.current+1;if(N.current=H0,Q.current=!0,K.current="",L.current="",b(null),m({text:"",totalLines:0}),l(""),_0({text:"",totalLines:0}),u0({message:null,indicator:null,visible:!0}),v(null),V.current=null,e(),I5(G)){if(N.current===H0)Q.current=!1;return}let f0=G;if(O0(f0).then((T0)=>{if(q.current!==f0)return;if(!T0||T0.status!=="active"||!T0.data)return;let i0=T0.data,A_=T8(i0);if(A_)y(A_);b(i0),G0({clearSilence:!0,atMs:r$(i0)??Date.now()}),$0(i0);let K_=x6(T0.thought);if(K_)L.current=K_.text,_0(K_);let E_=x6(T0.draft);if(E_)K.current=E_.text,m(E_)}).catch((T0)=>{console.warn("Failed to fetch agent status:",T0)}).finally(()=>{if(N.current===H0)Q.current=!1}),s1(k.current))q0();N0();return}if(_==="agent_status"){if(!A0){if($?.type==="done"||$?.type==="error")t(),K0();return}let H0=j4($.context_usage);if(H0&&H0.percent!=null)k0((f0)=>u4(f0,H0)?f0:H0),I6(G,H0);if($.type==="context_usage")return;if($.type==="done"||$.type==="error"){if(g4(b0,Y.current))return;if($.type==="done"){if(Q0(b0||Y.current),s1(k.current))q0()}if(s(),O.current=!1,e(),W.current.clear(),t(),N0(),m({text:"",totalLines:0}),l(""),_0({text:"",totalLines:0}),u0({message:null,indicator:null,visible:!0}),v(null),$.type==="error")b({type:"error",title:$.title||"Agent error"}),setTimeout(()=>b(null),8000);else b(null)}else{if(b0)y(b0);if(G0({running:!0,clearSilence:!0,atMs:r$($)??Date.now()}),$.type==="thinking")K.current="",L.current="",m({text:"",totalLines:0}),l(""),_0({text:"",totalLines:0});b($)}return}if(_==="agent_steer_queued"){if(!A0)return;if(g4(b0,Y.current))return;let H0=qB(b0,Y.current);if(!H0)return;B.current=H0,g0(H0);return}if(_==="agent_followup_queued"){if(!A0)return;E0((H0)=>YL(H0,$)),X0();return}if(_==="agent_followup_consumed"){if(!A0)return;let H0=R6(z.current,$);if(H0)C0(H0.remainingQueueCount),E0((f0)=>$4(f0,H0.rowId).items);if(X0(),s1(k.current))q0();return}if(_==="agent_followup_removed"){if(!A0)return;let H0=R6(z.current,$);if(H0)W.current.add(H0.rowId),C0(H0.remainingQueueCount),E0((f0)=>$4(f0,H0.rowId).items);X0();return}if(_==="agent_draft_delta"){if(!A0)return;if(Q.current)return;if(g4(b0,Y.current))return;if(f6(b0,Y.current))y(b0);G0({running:!0,clearSilence:!0}),K.current=gQ(K.current,$);let H0=Date.now();if(!D.current||H0-D.current>=100){D.current=H0;let f0=K.current;if(E.current)m((T0)=>Dj(f0,T0));else m(x8(f0,null))}return}if(_==="agent_draft"){if(!A0)return;if(Q.current)return;if(g4(b0,Y.current))return;if(f6(b0,Y.current))y(b0);G0({running:!0,clearSilence:!0});let H0=$.text||"",f0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")l((T0)=>uQ(T0,H0,f0));else if(!E.current)K.current=H0,m(x8(H0,$.total_lines));return}if(_==="agent_thought_delta"){if(!A0)return;if(Q.current)return;if(g4(b0,Y.current))return;if(f6(b0,Y.current))y(b0);G0({running:!0,clearSilence:!0}),L.current=bQ(L.current,$);let H0=Date.now();if(U.current&&(!H.current||H0-H.current>=100)){H.current=H0;let f0=L.current;_0((T0)=>Dj(f0,T0))}return}if(_==="agent_thought"){if(!A0)return;if(Q.current)return;if(g4(b0,Y.current))return;if(f6(b0,Y.current))y(b0);G0({running:!0,clearSilence:!0});let H0=$.text||"";if(!U.current)L.current=H0,_0(x8(H0,$.total_lines));return}if(_==="model_changed"){if(!A0)return;n0($);let H0=G;j_(H0).then((f0)=>{if(q.current!==H0)return;let T0=j4(f0);if(T0&&T0.percent!=null)k0((i0)=>u4(i0,T0)?i0:T0),I6(H0,T0)}).catch(()=>{if(q.current!==H0)return});return}let e0=KB(_,$,G);if(e0.isStatusPanelWidgetEvent){if(e0.eventChatJid!==G)return;if(!e0.panelKey)return;if(c0((H0)=>BL(H0,$)),NL($))d0((H0)=>P8(H0,e0.panelKey));u8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if(NB(_)){if(_==="extension_ui_title"){t(),K0(),u8(_,$);return}if(!A0)return;let H0=LB(_,$);if(H0&&H0.percent!=null)k0((T0)=>u4(T0,H0)?T0:H0);u0((T0)=>{return QB(T0,_,$)??T0}),u8(_,$);let f0=BB(_,$);if(f0)v0(f0.title,f0.detail,f0.kind,f0.durationMs);return}let z_=s1(k.current);if(_==="agent_response"){if(!A0)return;u0({message:null,indicator:null,visible:!0}),a0(),M.current={post:$,turnId:Y.current}}if(vQ(_,A0,z_))p0((H0)=>mQ(H0,$)),I.current?.();if(_==="interaction_updated"){if(!Ej(A0,z_))return;p0((H0)=>cQ(H0,$))}if(_==="interaction_deleted"){if(!Ej(A0,z_))return;let H0=$?.ids||[];if(H0.length){if(F_(()=>{p0((f0)=>hQ(f0,H0))}),x.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function nk(_){return _?15000:60000}function DB(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:L,pendingRequestRef:Q,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:W,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:O,loadMoreRef:y,lastAgentResponseRef:T,wasAgentActiveRef:J,setActiveTurn:C,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:m,handleUiVersionDrift:l,setAgentStatus:_0,setAgentDraft:v,setAgentPlan:e,setAgentThought:O0,setPendingRequest:G0,clearAgentRunState:$0,getAgentStatus:q0,noteAgentActivity:N0,showLastActivity:t,refreshTimeline:K0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:s,notifyForFinalResponse:X0,setContextUsage:E0,refreshContextUsage:C0,refreshQueueState:g0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:c0,applyModelState:d0,getAgentContext:u0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:a0,refreshActiveEditorFromWorkspace:p0,showIntentToast:F_,removeStalledPost:t0,setPosts:b0,preserveTimelineScrollTop:A0,openEditor:q_,finalizeStalledResponse:e0,connectionStatus:z_,agentStatus:H0,refreshAgentStatus:f0,refreshAutoresearchStatus:T0}=_,i0=R((K_,E_)=>{HB(K_,E_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:L,pendingRequestRef:Q,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:k,draftThrottleRef:z,thoughtThrottleRef:W,viewStateRef:I,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:M,hasMoreRef:O,loadMoreRef:y,lastAgentResponseRef:T,wasAgentActiveRef:J,setActiveTurn:C,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:b,clearLastActivityFlag:m,handleUiVersionDrift:l,setAgentStatus:_0,setAgentDraft:v,setAgentPlan:e,setAgentThought:O0,setPendingRequest:G0,clearAgentRunState:$0,getAgentStatus:q0,noteAgentActivity:N0,showLastActivity:t,refreshTimeline:K0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:s,notifyForFinalResponse:X0,setContextUsage:E0,refreshContextUsage:C0,refreshQueueState:g0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:j_,setSteerQueuedTurnId:c0,applyModelState:d0,getAgentContext:u0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:v0,setExtensionWorkingState:a0,refreshActiveEditorFromWorkspace:p0,showIntentToast:F_,removeStalledPost:t0,setPosts:b0,preserveTimelineScrollTop:A0,openEditor:q_})},[L,f,d0,$0,m,j_,$,K,A,N,k,z,x,u0,q0,l,O,T,y,N0,X0,Q,A0,E,U,k0,p0,C0,s,Q0,g0,K0,t0,M,C,v,e,_0,O0,E0,o0,a0,b,n0,v0,G0,b0,c0,F_,t,D,B,H,W,q,V,I,J,q_]);u(()=>{if(typeof window>"u")return;let K_=window.__PICLAW_TEST_API||{};return K_.emit=i0,K_.reset=()=>{t0(),$0(),_0(null),v({text:"",totalLines:0}),e(""),O0({text:"",totalLines:0}),a0({message:null,indicator:null,visible:!0}),G0(null)},K_.finalize=()=>e0(),window.__PICLAW_TEST_API=K_,()=>{if(window.__PICLAW_TEST_API===K_)window.__PICLAW_TEST_API=void 0}},[$0,e0,i0,t0,v,e,_0,O0,a0,G0]),YB({handleSseEvent:i0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let K_=location.hash;if(!K_||!K_.startsWith("#msg-"))return;let E_=K_.slice(5);G(E_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=H0!==null;u(()=>{if(z_!=="connected")return;let K_=nk(A_),E_=setInterval(()=>{IL({viewStateRef:I,isAgentActive:A_,refreshTimeline:K0,refreshQueueState:g0,refreshAgentStatus:f0,refreshContextUsage:C0,refreshAutoresearchStatus:T0})},K_);return()=>clearInterval(E_)},[z_,A_,f0,T0,C0,g0,K0,I]),u(()=>{return A8(()=>{f0(),C0(),g0(),T0()})},[f0,T0,C0,g0])}function dk(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function ik(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function ok(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function sk(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function EB(_){let $=CL(dk(_)),j=oL(ik({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=XB(ok({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return DB(sk({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}y0();var OB="piclaw:pane-host-transfer:",ak=300000;function WB(_){try{return _?.localStorage??null}catch{return null}}function zB(_){return typeof _==="string"?_.trim():""}function JB(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function tk(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function ek(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function _M(_,$=globalThis,j=Date.now()){let G=WB($),Z=zB(_?.path),X=JB(_?.payload);if(!G||!Z||!X)return null;let Y=tk(j);try{return G.setItem(`${OB}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function wj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=WB($);if(!G||!Z)return null;let X=`${OB}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;ek(Z,X);try{let q=JSON.parse(Y),V=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(V+ak<j)return null;let K=zB(q?.path),L=JB(q?.payload);if(!K||!L)return null;return{path:K,payload:L,capturedAt:V}}catch{return null}}function g8(_,$=globalThis,j=Date.now()){let G=_M(_,$,j);return G?{pane_transfer:G}:null}function AB(_=globalThis,$=Date.now()){let j=G6("pane_transfer",_);return wj(j,_,$)}function b4(_){return typeof _==="string"?_.trim():""}function $M(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Tj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if($M($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function jM(_){try{return _?.(),!0}catch($){return!1}}function S6(_,$=typeof window<"u"?window:null){let j=Tj($),G=b4(_?.panePath),Z=b4(_?.paneInstanceId),X=b4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function kB(_,$=typeof window<"u"?window:null){let j=Tj($),G=b4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function MB(_,$,j,G){let Z=Tj(_),X=b4($?.panePath),Y=b4($?.paneInstanceId),q=b4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let V=Z.get(q)||null;if(!V)return null;if(V.panePath!==X||V.paneInstanceId!==Y)return null;if(typeof V.instance?.moveHost!=="function")return null;if(!await V.instance.moveHost(j,G))return null;return Z.delete(q),jM(V.releaseSourceHost),V.instance}m2();function f5(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function yB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(L)=>{let Q=L?.detail?.path,N=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(Q)G?.(Q,N)},q=(L)=>{let Q=L?.detail?.path,N=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(Q)Z?.(Q,N)},V=(L)=>{let Q=L?.detail?.path,N=typeof L?.detail?.label==="string"&&L.detail.label.trim()?L.detail.label.trim():void 0;if(Q)X?.(Q,N)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((L)=>j.addEventListener(L,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",V),()=>{K.forEach((L)=>j.removeEventListener(L,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",V)}}function wB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(!z$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function TB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(z$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(f5(q?.target))return;if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function xB(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(z$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(z$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function IB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!z$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function CB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!z$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function PB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:V=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||V<Number(Z||0)||K.inFlight||V<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function fB(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function RB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:V,renameChatBranch:K,refreshActiveChatAgents:L,refreshCurrentChatBranches:Q,navigate:N,baseHref:B,chatOnlyMode:U,showIntentToast:E,closeRenameForm:D,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let k=H(),z=q?.()||null;if(!z)return!1;if(X.current||k<Number(Y.current||0)||z.inFlight||k<Number(z.cooldownUntil||0))return!1;X.current=!0,z.inFlight=!0,V?.(!0);try{let W=j.agent_name||"",I=a2(G,W);if(!I.canSubmit)return E?.("Could not rename session",I.message||"Enter a valid session handle.","warning",4000),!1;let x=I.normalized||W,A=await K(j.chat_jid,{agentName:x});await Promise.allSettled([L?.(),Q?.()]);let M=A?.branch?.agent_name||x||W;return E?.("Session renamed",`@${M}`,"info",3500),D?.(),!0}catch(W){let I=W instanceof Error?W.message:String(W||"Could not rename session."),x=/already in use/i.test(I||"")?`${I} Switch to or restore that existing session from the session manager.`:I;return E?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,V?.(!1);let W=H()+iK;Y.current=W;let I=q?.()||null;if(I)I.inFlight=!1,I.cooldownUntil=W}}async function SB(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:V,refreshCurrentChatBranches:K,showIntentToast:L,baseHref:Q,chatOnlyMode:N,navigate:B,confirm:U=(M)=>window.confirm(M)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",D=typeof G==="string"&&G.trim()?G.trim():"",H=E||Z?.chat_jid||D;if(!H)return L?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let k=(Z?.chat_jid===H?Z:null)||X.find((M)=>M?.chat_jid===H)||Y.find((M)=>M?.chat_jid===H)||null,z=k?.chat_jid===(k?.root_chat_jid||k?.chat_jid),W=Boolean(z&&H==="web:default"),I=Boolean(z&&X.some((M)=>{let O=typeof M?.chat_jid==="string"?M.chat_jid.trim():"",y=typeof M?.root_chat_jid==="string"?M.root_chat_jid.trim():O;return O&&O!==H&&y===H&&!M?.archived_at}));if(W)return L?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(I)return L?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${k?.agent_name||H}${k?.chat_jid?` — ${k.chat_jid}`:""}`;if(!U(z?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(H),await Promise.allSettled([V?.(),K?.()]);let M=z?"web:default":k?.root_chat_jid||"web:default";L?.(z?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let O=T1(Q,M,{chatOnly:N});return B?.(O),!0}catch(M){let O=M instanceof Error?M.message:String(M||"Could not prune branch.");return L?.("Could not prune branch",O||"Could not prune branch.","warning",5000),!1}}async function uB(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(E)=>window.confirm(E)}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;let K=G.find((E)=>E?.chat_jid===V)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let Q=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),N=`@${K?.agent_name||V}`;if(!q(`Permanently delete ${N}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${Q?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(V),await Promise.allSettled([Z?.(),X?.()]),Y?.(Q?"Archived session deleted":"Archived branch deleted",`${N} was permanently deleted.`,"info",4000),!0}catch(E){let D=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${Q?"session":"branch"}.`);return Y?.("Could not delete branch",D||`Could not permanently delete archived ${Q?"session":"branch"}.`,"warning",5000),!1}}async function gB(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:V,navigate:K}=_,L=typeof $==="string"?$.trim():"";if(!L||typeof j!=="function")return!1;try{let Q=G.find((H)=>H?.chat_jid===L)||null,N=await j(L);await Promise.allSettled([Z?.(),X?.()]);let B=N?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():L,E=zq(Q?.agent_name,B?.agent_name,U);Y?.("Branch restored",E,"info",4200);let D=T1(q,U,{chatOnly:V});return K?.(D),!0}catch(Q){let N=Q instanceof Error?Q.message:String(Q||"Could not restore branch.");return Y?.("Could not restore branch",N||"Could not restore branch.","warning",5000),!1}}async function bB(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let V=q?.branch,K=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let L=T1(X,K,{chatOnly:!0});return Z?.(L,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:U4(q)}),!1}}function mB(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let V=T1(X,q,{chatOnly:Z});return Y?.(V),!0}function GM(_){return typeof _==="string"?_.trim():""}function ZM(_){return new Promise(($)=>setTimeout($,_))}async function vB(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function cB(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:V,buildEditorPopoutTransfer:K}=_,L=$===X&&Boolean(V?.($));if($===X&&!L){let E=Z.current;if(await vB(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let Q=()=>GM(q?.()??j),N=Q(),B=G.current;if(N!==$)Y?.($);let U=N===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await ZM(16);else await Promise.resolve();let D=Q(),H=G.current,k=D===$,z=H!==B;if(!k||typeof H?.preparePopoutTransfer!=="function")continue;if(N===$||z||E>0){U=H;break}}if(await vB(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return K?.($)??null}function hB(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function lB(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let V=q("editorWidth",null),K=Y.current||280,L=Number.isFinite(V)?Number(V):K;Z.current=H5(L,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let V=q("dockHeight",null);X.current=Number.isFinite(V)?Number(V):200}G.style.setProperty("--dock-height",`${X.current}px`)}I_();async function pB(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function rB(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:V}=_;if(typeof q==="function")try{let K=C3(V,$,{chatOnly:j});return q(K),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}try{let L=(await G($))?.branch,Q=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():null;if(!Q)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=L?.agent_name?`@${L.agent_name}`:Q;Y?.("New branch created",`Switched to ${N}.`,"info",2500);let B=T1(V,Q,{chatOnly:j});return q?.(B),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}}async function nB(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:V}=_,K=String($||"").trim();if(!K)return!1;try{let N=(await(typeof G==="function"?G:D7)(K))?.branch,B=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let U=N?.agent_name?`@${N.agent_name}`:B;Y?.("Root session created",`Switched to ${U}.`,"info",2500);let E=T1(V,B,{chatOnly:j});return q?.(E),!0}catch(L){return Y?.("Could not create root session",U4(L),"warning",5000),!1}}async function dB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:V,currentChatJid:K,baseHref:L}=_;if(!$||j)return!1;let Q=typeof G==="string"&&G.trim()?G.trim():"";if(!Q)return!1;let N=dG(Q);if(!N)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=w3(N);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;T3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(Q),E=Boolean(U&&Object.keys(U).length>0),D=nG(L,Q,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:U});if(x3(B,D),V?.(Q,B,U||null),E&&!V)q?.(Q);return!0}catch(U){I3(B);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function iB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:V,setCurrentChatBranches:K,showIntentToast:L,baseHref:Q}=_;if(!$||j)return!1;let N=rG(G);if(!N)return L?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(N.mode==="tab"){let U=C3(Q,G,{chatOnly:!0});if(!window.open(U,N.target))return L?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=w3(N);if(!B)return L?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;T3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,D=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let H=await pB(()=>Y?.());if(H)V?.(Array.isArray(H?.chats)?H.chats:[]);let k=await pB(()=>q?.(Z));if(k)K?.(Array.isArray(k?.chats)?k.chats:[]);let z=T1(Q,D,{chatOnly:!0});return x3(B,z),!0}catch(U){return I3(B),L?.("Could not open branch window",U4(U),"error",5000),!1}}function XM(_){_(($)=>!$)}function YM(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return mB({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function qM(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return PB({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function VM(_){fB(_)}async function KM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await RB({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function QM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await SB({hasWindow:$,baseHref:j,...G})}async function LM(_){await uB(_)}async function BM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await gB({baseHref:j,...G})}function NM(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:V=bB}=_;if(!$||!Y)return;let K=!1;return V({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>K}),()=>{K=!0}}async function FM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await rB({baseHref:j,...G})}async function UM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await nB({baseHref:j,...G})}async function HM(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:L,tabPaneOverrides:Q,buildPaneDetachTransfer:N,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H,hasWindow:k=typeof window<"u",baseHref:z=k?window.location.href:"http://localhost/"}=_,W=N?.(j)||null;return await dB({hasWindow:k,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:z,resolveSourceTransfer:async(I)=>{let x=await cB({panePath:I,activateTab:Y,getActiveTabId:()=>__.getActiveId(),tabStripActiveId:q,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:L,resolveTab:E,buildEditorPopoutTransfer:(y)=>{if(!y||y===L)return null;let T=V.current,J=typeof T?.getContent==="function"?T.getContent():void 0,C=typeof T?.isDirty==="function"?T.isDirty():!1,f=Q instanceof Map?Q.get(y)||null:null,b=__.getViewState(y)||null;return Z2({path:y,content:C?J:void 0,paneOverrideId:f,viewState:b})}}),A=I===L&&!E(I)?K.current:V.current,M=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,O=M?g8({path:I,payload:M}):null;if(W?.paneInstanceId&&W?.paneWindowId&&A&&I!==L&&M?.kind!=="terminal")S6({panePath:I,paneInstanceId:W.paneInstanceId,paneWindowId:W.paneWindowId,instance:A,releaseSourceHost:()=>{if(I===L){if(K.current===A)K.current=null;if(V.current===A)V.current=null;return}if(V.current===A)V.current=null}});return{...x||{},...O||{},...W?.params||{}}},onPaneWindowOpened:B?(I,x,A)=>{B(I,G,x,A)}:void 0,closeSourcePaneIfTransferred:B?void 0:(I)=>{hB({panePath:I,terminalTabPath:L,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H})}})}function DM(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=yB}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function EM(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await iB({hasWindow:$,baseHref:j,...G})}function OM(_){let{hasWindow:$=typeof window<"u",...j}=_;lB({hasWindow:$,...j})}function oB(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:L,setIsRenamingBranch:Q,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,purgeChatBranch:z,restoreChatBranch:W,branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,createRootChatSession:M,setBranchLoaderState:O,currentRootChatJid:y,isWebAppMode:T,getActiveChatAgents:J,getChatBranches:C,setActiveChatAgents:f,setCurrentChatBranches:b,openEditor:m,activateTab:l,tabStripActiveId:_0,editorInstanceRef:v,dockInstanceRef:e,terminalTabPath:O0,tabPaneOverrides:G0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:q0,dockVisible:N0,resolveTab:t,closeTab:K0,setDockVisible:Q0,editorOpen:k0,shellElement:s,editorWidthRef:X0,dockHeightRef:E0,sidebarWidthRef:C0,readStoredNumber:g0}=_,n0=R(()=>{XM($)},[$]),j_=R((A0)=>{YM({nextChatJid:A0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),c0=R(()=>{qM({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:L})},[X,V,Y,q,L,K]),d0=R(()=>{VM({setIsRenameBranchFormOpen:L,setRenameBranchNameDraft:K})},[L,K]),u0=R(async(A0)=>{await KM({currentBranchRecord:X,nextName:A0,openRenameForm:c0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:V,setIsRenamingBranch:Q,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:d0})},[d0,X,G,V,Z,c0,B,U,Y,q,N,Q,E]),o0=R(async(A0=null)=>{await QM({targetChatJid:A0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[H,G,X,D,j,Z,k,B,U,E]),v0=R(async(A0)=>{await LM({targetChatJid:A0,purgeChatBranch:z,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E})},[D,z,B,U,E]),a0=R(async(A0)=>{await BM({targetChatJid:A0,restoreChatBranch:W,currentChatBranches:D,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,D,Z,B,U,W,E]);u(()=>NM({branchLoaderMode:I,branchLoaderSourceChatJid:x,forkChatBranch:A,setBranchLoaderState:O,navigate:Z}),[I,x,A,Z,O]);let p0=R(async()=>{await FM({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,A,Z,B,U,E]),F_=R(async(A0)=>{await UM({rootName:A0,chatOnlyMode:G,createRootChatSession:M,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,M,Z,B,U,E]),t0=R(async(A0,q_)=>{return await HM({isWebAppMode:T,path:A0,label:q_,showIntentToast:E,currentChatJid:j,activateTab:l,tabStripActiveId:_0,editorInstanceRef:v,dockInstanceRef:e,terminalTabPath:O0,tabPaneOverrides:G0,buildPaneDetachTransfer:$0,registerDetachedPaneWindow:q0,dockVisible:N0,resolveTab:t,closeTab:K0,setDockVisible:Q0})},[l,$0,K0,j,e,N0,v,T,q0,t,Q0,E,G0,_0,O0]);u(()=>DM({openEditor:m,popOutPane:(A0,q_)=>{t0(A0,q_)}}),[t0,m]);let b0=R(async()=>{await EM({isWebAppMode:T,currentChatJid:j,currentRootChatJid:y,forkChatBranch:A,getActiveChatAgents:J,getChatBranches:C,setActiveChatAgents:f,setCurrentChatBranches:b,showIntentToast:E})},[j,y,A,J,C,T,f,b,E]);return u(()=>{OM({editorOpen:k0,shellElement:s,editorWidthRef:X0,dockHeightRef:E0,sidebarWidthRef:C0,readStoredNumber:g0})},[E0,k0,X0,g0,s,C0]),{toggleWorkspace:n0,handleBranchPickerChange:j_,openRenameCurrentBranchForm:c0,closeRenameCurrentBranchForm:d0,handleRenameCurrentBranch:u0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:v0,handleRestoreBranch:a0,handleCreateSessionFromCompose:p0,handleCreateRootSessionFromCompose:F_,handlePopOutPane:t0,handlePopOutChat:b0}}y0();function G4(_){return _.status==="fulfilled"?_.value:null}function b8(_){return Math.max(0,Math.min(100,_))}function sB(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((D)=>D?.data?.is_bot_message).length,Z=$.filter((D)=>!D?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,V=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,L=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,Q=_.modelsPayload?.current??_.activeModel??null,N=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:Q,thinkingLevel:N,supportsThinking:Boolean(B)},context:{tokens:K,contextWindow:L,percent:V},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:b8(Math.round(V))},{key:"queue",label:"Queue",value:b8(X*18)},{key:"activeChats",label:"Active chats",value:b8(Y*12)},{key:"posts",label:"Timeline load",value:b8($.length*5)}]}}function aB(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function tB(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function eB(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function _N(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function $N(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function jN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function GN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:V,getChatBranches:K,getTimeline:L,rawPosts:Q,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z}=_,[W,I,x,A,M,O,y]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),V(),K(G),L(20,null,j)]);return sB({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:G4(W),contextPayload:G4(I),queuePayload:G4(x),modelsPayload:G4(A),activeChatsPayload:G4(M),branchesPayload:G4(O),timelinePayload:G4(y),rawPosts:Q,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:k,isAgentTurnActive:z})}function ZN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:V}=_,K=R6(j.current,$);if(!K)return;let{rowId:L}=K;G.current.add(L),Y((Q)=>$4(Q,L).items),V(L,Fj(Z)).then(()=>{X()}).catch((Q)=>{console.warn("[queue] Failed to steer queued item:",Q);let N=yj("steer");q(N.title,N.detail,"warning"),G.current.delete(L),X()})}function XN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:V,removeAgentQueueItem:K}=_,L=R6(j.current,$);if(!L)return;let{rowId:Q}=L;G.current.add(Q),V?.(L.remainingQueueCount),Y((N)=>$4(N,Q).items),K(Q,Fj(Z)).then(()=>{X()}).catch((N)=>{console.warn("[queue] Failed to remove queued item:",N);let B=yj("remove");q(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function YN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=N1($);if(Z)j.current.delete(Z);G(sL($,new Date().toISOString()))}function qN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=aL(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function VN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:V,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:L}=_,Q=typeof $?.kind==="string"?$.kind:"",N=N1(j);if(!Q||!N)return;if(Q==="widget.close"){Y();return}if(Q==="widget.submit"){let B=sq($?.payload),U=aq($?.payload),E=new Date().toISOString();if(X((D)=>_B(D,N,{kind:Q,payload:$?.payload||null,submittedAt:E,submissionText:B})),!B){if(V("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let D=await K("default",B,null,[],Z?"queue":null,G);q(D),X((k)=>Mj(k,N,{submittedAt:E,submissionText:B,queued:D?.queued||null}));let H=aB(D?.queued);if(V(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(D){X((k)=>Mj(k,N,{submittedAt:E,submissionText:B,errorMessage:D?.message||"Could not send the widget message."}));let H=tB(D?.message);V(H.title,H.detail,H.kind,H.durationMs)}})();return}if(Q==="widget.ready"||Q==="widget.request_refresh"){let B=new Date().toISOString(),U=eB($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>$B(E,N,{kind:Q,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),Q==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await L($?.payload||null);X((H)=>jB(H,N,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let D=_N();V(D.title,D.detail,D.kind,D.durationMs)}catch(E){X((H)=>GB(H,N,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let D=$N(E?.message);V(D.title,D.detail,D.kind,D.durationMs)}})();else{let E=jN();V(E.title,E.detail,E.kind,E.durationMs)}}}function WM(_,$=ZN){$(_)}function zM(_,$=XN){$(_)}function JM(_,$,j=nL){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function KN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:V,removeAgentQueueItem:K,refreshActiveChatAgents:L,refreshCurrentChatBranches:Q,refreshContextUsage:N,refreshAutoresearchStatus:B}=_,U=R((k)=>{WM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:V,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,V]),E=R((k)=>{zM({queuedItem:k,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:V,removeAgentQueueItem:K})},[q,$,G,j,Z,K,X,Y,V]),D=R(async(k,z)=>{X((W)=>{if(!Array.isArray(W)||k<0||z<0||k>=W.length||z>=W.length||k===z)return W;let I=[...W],[x]=I.splice(k,1);return I.splice(z,0,x),I});try{let{reorderAgentQueueItem:W}=await Promise.resolve().then(() => (I_(),B5));await W(k,z,$)}catch(W){console.warn("Failed to persist queue reorder:",W),Z()}},[$,Z,X]),H=R((k)=>{JM(k,{refreshActiveChatAgents:L,refreshCurrentChatBranches:Q,refreshContextUsage:N,refreshAutoresearchStatus:B,refreshQueueState:Z})},[L,B,N,Q,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:D,handleMessageResponse:H}}y0();function QN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function LN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,V=String($||"").trim();if(!V)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,q({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let L=await G(V,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(Q)=>{if(Q==="side_prompt_start")q((N)=>N?{...N,status:"running"}:N)},onThinkingDelta:(Q)=>{q((N)=>N?{...N,thinking:`${N.thinking||""}${Q||""}`}:N)},onTextDelta:(Q)=>{q((N)=>N?{...N,answer:`${N.answer||""}${Q||""}`}:N)}});if(Y.current!==K)return!0;q((Q)=>Q?{...Q,answer:L?.result||Q.answer||"",thinking:L?.thinking||Q.thinking||"",model:L?.model||null,status:"success",error:null}:Q)}catch(L){if(K.signal.aborted)return!0;q((Q)=>Q?{...Q,status:"error",error:L?.payload?.error||L?.message||"BTW request failed."}:Q)}finally{if(Y.current===K)Y.current=null}return!0}async function BN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function NN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,V=j($);if(!V)return!1;try{let K=await X("default",V,null,[],G?"queue":null,Z);return Y(K),q(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return q("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function AM(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function kM(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function FN(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:V,streamSidePrompt:K,btwAbortRef:L,btwSession:Q,setBtwSession:N,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:W,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:O,currentChatBranches:y,contextUsage:T,followupQueueItemsRef:J,activeModel:C,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:m}=_,l=R(async(K0,Q0)=>{let k0=typeof K0?.key==="string"?K0.key:"",s=typeof Q0?.key==="string"?Q0.key:"",X0=Jj(k0,s);if(!k0||!s)return;X((E0)=>FL(E0,k0,s));try{let E0=await HL({panel:K0,action:Q0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:V,writeClipboard:async(C0)=>{if(!await AM(C0))throw Error("Clipboard access is unavailable.")}});if(E0.refreshAutoresearchStatus)Y();if(E0.toast)Z(E0.toast.title,E0.toast.detail,E0.toast.kind,E0.toast.durationMs)}catch(E0){Z("Panel action failed",E0?.message||"Could not complete that action.","warning")}finally{X((E0)=>UL(E0,X0))}},[$,V,Y,X,Z,q]),_0=R(()=>{QN({btwAbortRef:L,setBtwSession:N})},[L,N]),v=R(async(K0)=>{return await LN({question:K0,currentChatJid:$,streamSidePrompt:K,resolveBtwChatJid:bq,showIntentToast:Z,btwAbortRef:L,setBtwSession:N})},[L,$,N,Z,K]),e=R(async({content:K0})=>{return await BN({content:K0,parseBtwCommand:gq,closeBtwPanel:_0,runBtwPrompt:v,showIntentToast:Z})},[_0,v,Z]),O0=R(()=>{if(Q?.question)v(Q.question)},[Q,v]),G0=R(async()=>{await NN({btwSession:Q,buildBtwInjectionText:cq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[Q,$,U,G,B,Z]),$0=R(async(K0=null)=>{return GN({requestPayload:K0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:k,getAgentQueueState:z,getAgentModels:W,getActiveChatAgents:I,getChatBranches:x,getTimeline:A,rawPosts:M,activeChatAgents:O,currentChatBranches:y,contextUsage:T,followupQueueItems:J.current,activeModel:C,activeThinkingLevel:f,supportsThinking:b,isAgentTurnActive:m})},[O,C,f,T,y,$,j,J,I,k,W,z,H,x,A,m,M,b]),q0=R((K0)=>{YN({widget:K0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),N0=R(()=>{qN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),t=R((K0,Q0)=>{VN({event:K0,widget:Q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:D,handleCloseFloatingWidget:N0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:$0})},[$0,$,N0,U,G,B,D,Z]);return u(()=>{kM({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[$,E,D]),{handleExtensionPanelAction:l,closeBtwPanel:_0,handleBtwIntercept:e,handleBtwRetry:O0,handleBtwInject:G0,handleOpenFloatingWidget:q0,handleCloseFloatingWidget:N0,handleFloatingWidgetEvent:t}}y0();function MM(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function yM(_){return!_}function UN(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:V}=_;u(()=>{if(!MM({hasDockPanes:$,chatOnlyMode:j}))return;return wB(G)},[j,$,G]),u(()=>{if(!yM(j))return;return TB({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof q!=="function"&&typeof V!=="function")return;return xB({previousChat:q,nextChat:V})},[V,q]),u(()=>CB(),[]),u(()=>IB(),[])}function wM(_){return Boolean(_&&typeof _.closest==="function")}function HN(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function TM(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function xM(){return{lastTriggeredAt:0,accumX:0}}function xj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var IM=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),CM=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function DN(_){if(!_||!wM(_))return!1;let $=_.closest(IM);if(!$)return!0;return Boolean($.closest(CM))}function ON(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Ij(_){let $=ON(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function EN(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function PM(_){let $=ON(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:EN(_.candidates,G)},next:{chatJid:Z,name:EN(_.candidates,Z)}}}function fM(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function RM(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function SM(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,V=q?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=q?"›":"‹",K.style.order=q?"2":"0";let L=_.querySelector(".chat-swipe-name");if(L)L.textContent=V?.name??""}function R5(_){_.style.display="none",_.style.opacity="0"}function WN(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let V=X(),K=typeof Y==="function"?Y():!1;if(!V&&!K)return()=>{};let L=TM(),Q=xM(),N=null,B={prev:null,next:null},U=!1;function E(){B=PM({candidates:j,currentChatJid:G})}E();function D(){if(!N)N=RM(q);return N}function H(M){let O=M==="next"?B.next:B.prev;if(O)Z(O.chatJid)}function k(M){U=String(M.pointerType||"").toLowerCase()==="pen"}function z(M){if(xj(L),E(),!V)return;if(M.touches.length!==1)return;if(U)return;if(HN())return;if(!DN(M.target))return;let O=M.touches[0];L.active=!0,L.startX=O.clientX,L.startY=O.clientY,L.lastX=O.clientX,L.lastY=O.clientY,L.startedAt=Date.now()}function W(M){if(!L.active||L.cancelled)return;if(HN()){L.cancelled=!0,R5(D());return}let O=M.touches[0];if(!O)return;L.lastX=O.clientX,L.lastY=O.clientY;let y=L.lastX-L.startX,T=L.lastY-L.startY;if(!L.horizontalLocked){if(Math.abs(T)>16&&Math.abs(T)>=Math.abs(y)){L.cancelled=!0,R5(D());return}if(Math.abs(y)>12&&Math.abs(y)>Math.abs(T)*1.15)L.horizontalLocked=!0}if(L.horizontalLocked){if(M.cancelable)M.preventDefault();SM(D(),y,q.clientWidth,B)}}function I(){if(!L.active)return;let M=L.lastX-L.startX,O=L.lastY-L.startY,y=!L.cancelled&&fM({dx:M,dy:O});if(R5(D()),xj(L),y)H(M<0?"next":"prev")}function x(){R5(D()),xj(L)}function A(M){if(V)return;if(!K)return;if(!DN(M.target))return;let{deltaX:O,deltaY:y}=M;if(!Number.isFinite(O)||Math.abs(O)<72)return;if(Math.abs(O)<=Math.abs(y)*1.35)return;if(M.cancelable)M.preventDefault();let T=Date.now();if(T-Q.lastTriggeredAt<450)return;Q.lastTriggeredAt=T,H(O>0?"next":"prev")}return q.addEventListener("pointerdown",k,{passive:!0}),q.addEventListener("touchstart",z,{passive:!0}),q.addEventListener("touchmove",W,{passive:!1}),q.addEventListener("touchend",I,{passive:!0}),q.addEventListener("touchcancel",x,{passive:!0}),q.addEventListener("wheel",A,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",k),q.removeEventListener("touchstart",z),q.removeEventListener("touchmove",W),q.removeEventListener("touchend",I),q.removeEventListener("touchcancel",x),q.removeEventListener("wheel",A),N)R5(N),N.remove(),N=null}}function uM(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function gM(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function bM(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function vM(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Ij({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Ij({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function zN(_){let $=KN(uM(_)),j=FN(gM({..._,handleMessageResponse:$.handleMessageResponse})),G=oB(bM(_));return UN(vM({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function mM(_,$){return Boolean(_||$!==null)}function cM(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function hM(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:V,setters:K,services:L,helpers:Q}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,getAgentQueueState:L.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:L.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:L.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:L.getAgentStatus,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:V.agentStatusRef,pendingRequestRef:V.pendingRequestRef,thoughtBufferRef:V.thoughtBufferRef,draftBufferRef:V.draftBufferRef,previewResyncPendingRef:V.previewResyncPendingRef,previewResyncGenerationRef:V.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:V.isAgentRunningRef,currentTurnIdRef:V.currentTurnIdRef,silentRecoveryRef:V.silentRecoveryRef,silenceRefreshMs:L.silenceRefreshMs,lastAgentEventRef:V.lastAgentEventRef,lastSilenceNoticeRef:V.lastSilenceNoticeRef,silenceWarningMs:L.silenceWarningMs,silenceFinalizeMs:L.silenceFinalizeMs,isCompactionStatus:L.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:L.currentAppAssetVersion,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,tabStoreHasUnsaved:L.tabStoreHasUnsaved,isAgentRunningRef:V.isAgentRunningRef,pendingRequestRef:V.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,hasConnectedOnceRef:V.hasConnectedOnceRef,getAgents:L.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:Q.readStoredNumber,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:L.getAgentModels,getActiveChatAgents:L.getActiveChatAgents,getChatBranches:L.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:V.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:L.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:V.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:L.agentStatus,thoughtExpandedRef:V.thoughtExpandedRef,draftExpandedRef:V.draftExpandedRef,steerQueuedTurnIdRef:V.steerQueuedTurnIdRef}}function JN(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:V,services:K,helpers:L}=_,Q=X.composeReferenceActions.showIntentToast,N=QL({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:V.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=EB(hM(_,Q)),U=mM(K.isAgentTurnActive,K.agentStatus),E=zN({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:V.setFollowupQueueItems,showIntentToast:Q,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:V.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:V.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:L.getFormLock,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:V.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:L.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return cM({agentStatusLifecycleBundle:B,actionBundle:E,timelineViewActions:N,isComposeBoxAgentActive:U})}y0();I_();y0();function AN(_){try{return _?.focus?.(),!0}catch($){return!1}}function S5(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Cj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function kN(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function MN(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function Z4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=S5($,"piclaw.notifications.deviceId");if(j)return j;let G=MN("device");return Cj($,"piclaw.notifications.deviceId",G),S5($,"piclaw.notifications.deviceId")||G}function u5(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=S5($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=MN("client");if(Cj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=S5($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function yN(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function Pj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():u5($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:q,updatedAtMs:Y}}function wN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Cj(j,yN(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function TN(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return kN(j,yN(G,Z)),!0}function lM(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],V=[];for(let K=0;K<j.length;K+=1){let L=j.key(K);if(!L||!L.startsWith(Y))continue;let Q=S5(j,L);if(!Q){V.push(L);continue}try{let N=JSON.parse(Q),B=Number(N?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){V.push(L);continue}let U=typeof N?.chatJid==="string"?N.chatJid.trim():"",E=typeof N?.clientId==="string"?N.clientId.trim():"";if(!U||!E){V.push(L);continue}q.push({deviceId:G,clientId:E,chatJid:U,visibilityState:N?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(N?.hasFocus),updatedAtMs:B})}catch{V.push(L)}}return V.forEach((K)=>kN(j,K)),q.sort((K,L)=>K.clientId.localeCompare(L.clientId))}function xN(_={}){let $=Pj(_),j=$.chatJid;if(!j)return!1;let G=lM({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function pM(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function rM(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=pM(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function nM(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function v8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function CN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function dM(_){let $=await CN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await E7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:nM(Z)})}async function IN(_,$){if(!v8(_))return!1;let j=await dM(_);return await O7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function iM(_,$){if(!v8(_))return!1;let G=await(await CN(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await W7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function oM(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function sM(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function PN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=P(!1),[Z,X]=P("default"),Y=g(!1),q=g(null),V=g(null);u(()=>{let B=F$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")q.current=Z4(window),V.current=u5(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&v8(window))IN(window,q.current||Z4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let B=q.current||Z4(window),U=V.current||u5(window);q.current=B,V.current=U;let E=(z=!0,W="fetch")=>{let I=Pj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(z)wN(I,window);else TN({deviceId:B,clientId:U},window);let x={device_id:B,client_id:U,chat_jid:$,visibility_state:I.visibilityState,has_focus:I.hasFocus,active:z};if(!z&&W==="beacon"&&sM(x,window))return;oM(x,{runtimeWindow:window,keepalive:!z||W==="keepalive"})},D=()=>E(!0),H=()=>E(!1,"beacon");E(!0);let k=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",D),window.addEventListener("focus",D),window.addEventListener("blur",D),window.addEventListener("pageshow",D),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(k),document.removeEventListener("visibilitychange",D),window.removeEventListener("focus",D),window.removeEventListener("blur",D),window.removeEventListener("pageshow",D),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),E(!1,"beacon")}},[$]);let K=R(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),L=R(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await K();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),L_("notificationsEnabled",String(B));let U=q.current||Z4(window);if(q.current=U,v8(window))try{if(B)await IN(window,U);else await iM(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),Q=R((B,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let D=new Notification(rM(B,E?.sourceLabel||"",window),{body:U});return D.onclick=()=>{AN(window)},!0}catch(D){return console.debug("[use-notifications] Local notification creation failed.",D,{title:typeof B==="string"?B:null}),!1}},[]),N=R((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return xN({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||Z4(window),clientId:V.current||u5(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:L,notify:Q,shouldNotifyLocallyForChat:N}}function aM(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function tM(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function eM(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function fN(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=P("disconnected"),[X,Y]=P(!1),[q,V]=P(()=>f1()),[K,L]=P(null),[Q,N]=P(null),[B,U]=P(!1),[E,D]=P("current"),[H,k]=P([]),[z,W]=P([]),[I,x]=P([]),[A,M]=P(null),[O,y]=P({}),[T,J]=P(null),[C,f]=P(null),[b,m]=P(!1),[l,_0]=P(null),[v,e]=P(null),[O0,G0]=P(!1),[$0,q0]=P([]),[N0,t]=P([]),[K0,Q0]=P(null),[k0,s]=P(()=>new Map),[X0,E0]=P(()=>new Set),[C0,g0]=P(()=>({message:null,indicator:null,visible:!0})),[n0,j_]=P([]),[c0,d0]=P(!1),[u0,o0]=P(()=>tK()),[v0,a0]=P(null),[p0,F_]=P(null),t0=g(new Set),b0=Y0(()=>aM({activeChatAgents:$0,currentChatBranches:N0,currentChatJid:$}),[$0,N0,$]),A0=Y0(()=>eM($,b0),[b0,$]),q_=aK(E),[e0,z_]=P(()=>tM(j)),H0=n0.length,f0=g(new Set),T0=g([]),i0=g(new Set),A_=g(0),K_=g({inFlight:!1,lastAttemptAt:0,turnId:null});f0.current=new Set(n0.map((g1)=>g1.row_id)),T0.current=n0;let{notificationsEnabled:E_,notificationPermission:D_,toggleNotifications:M_,notify:C_,shouldNotifyLocallyForChat:u_}=PN({chatJid:$}),[O_,j0]=P(()=>new Set),[W0,p]=P(()=>DQ({allowLegacyFallback:!0,defaultValue:!1})),[i,o]=P({name:"You",avatar_url:null,avatar_background:null}),Z0=g(null),V0=g(!1),J0=g(!1),h0=g(!1),R0=g(null),I0=g($),w0=g(new Map),m0=g($),U0=g(0),l0=g(0),Y_=g({}),G_=g({name:null,avatar_url:null}),S0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),Q_=g(null),V_=g(null),d=g(0),z0=g(0),Z_=g(0),B_=g(null),p_=g(null),F1=g(null),g_=g(null),J1=g(0),P_=g({title:null,avatarBase:null}),y_=g(null),A1=g(!1),[W_,k_]=P(!1),U1=g(0),[m_,n_]=P(!1),[s_,H_]=P(""),x1=Y0(()=>a2(s_,b0?.agent_name||""),[b0?.agent_name,s_]),H1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:q,setIsWebAppMode:V,currentHashtag:K,setCurrentHashtag:L,searchQuery:Q,setSearchQuery:N,searchOpen:B,setSearchOpen:U,searchScope:E,setSearchScope:D,fileRefs:H,setFileRefs:k,folderRefs:z,setFolderRefs:W,messageRefs:I,setMessageRefs:x,intentToast:A,setIntentToast:M,agents:O,setAgents:y,activeModel:T,setActiveModel:J,activeThinkingLevel:C,setActiveThinkingLevel:f,supportsThinking:b,setSupportsThinking:m,activeModelUsage:l,setActiveModelUsage:_0,agentModelsPayload:v,setAgentModelsPayload:e,hasLoadedAgentModels:O0,setHasLoadedAgentModels:G0,activeChatAgents:$0,setActiveChatAgents:q0,currentChatBranches:N0,setCurrentChatBranches:t,contextUsage:K0,setContextUsage:Q0,extensionStatusPanels:k0,setExtensionStatusPanels:s,pendingExtensionPanelActions:X0,setPendingExtensionPanelActions:E0,extensionWorkingState:C0,setExtensionWorkingState:g0,followupQueueItems:n0,setFollowupQueueItems:j_,isAgentTurnActive:c0,setIsAgentTurnActive:d0,btwSession:u0,setBtwSession:o0,floatingWidget:v0,setFloatingWidget:a0,attachmentPreview:p0,setAttachmentPreview:F_,dismissedLiveWidgetKeysRef:t0,currentBranchRecord:b0,currentRootChatJid:A0,activeSearchScopeLabel:q_,branchLoaderState:e0,setBranchLoaderState:z_,followupQueueCount:H0,followupQueueRowIdsRef:f0,followupQueueItemsRef:T0,dismissedQueueRowIdsRef:i0,queueRefreshGenRef:A_,silentRecoveryRef:K_,notificationsEnabled:E_,notificationPermission:D_,handleToggleNotifications:M_,notify:C_,shouldNotifyLocallyForChat:u_,removingPostIds:O_,setRemovingPostIds:j0,workspaceOpen:W0,setWorkspaceOpen:p,userProfile:i,setUserProfile:o,staleUiVersionRef:Z0,staleUiReloadScheduledRef:V0,hasConnectedOnceRef:J0,wasAgentActiveRef:h0,agentStatusRef:R0,activeChatJidRef:I0,chatPaneStateByChatRef:w0,paneStateOwnerChatJidRef:m0,draftThrottleRef:U0,thoughtThrottleRef:l0,agentsRef:Y_,userProfileRef:G_,viewStateRef:S0,timelineRef:Q_,appShellRef:V_,sidebarWidthRef:d,editorWidthRef:z0,dockHeightRef:Z_,lastNotifiedIdRef:B_,lastAgentResponseRef:p_,btwAbortRef:F1,lastActivityTimerRef:g_,lastActivityTokenRef:J1,brandingRef:P_,intentToastTimerRef:y_,renameBranchInFlightRef:A1,isRenamingBranch:W_,setIsRenamingBranch:k_,renameBranchLockUntilRef:U1,isRenameBranchFormOpen:m_,setIsRenameBranchFormOpen:n_,renameBranchNameDraft:s_,setRenameBranchNameDraft:H_,renameBranchDraftState:x1,renameBranchNameInputRef:H1}}y0();y0();function _y(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.set(V,q)}return Z?X:_}function RN(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function SN({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=P(()=>__.getTabs()),[Z,X]=P(()=>__.getActiveId()),[Y,q]=P(()=>__.getTabs().length>0);u(()=>{return __.onChange((J,C)=>{G(J),X(C),q(J.length>0)})},[]);let[V,K]=P(()=>new Set),[L,Q]=P(()=>new Set),[N,B]=P(()=>new Map),U=R((J)=>{K((C)=>{let f=new Set(C);if(f.has(J))f.delete(J);else f.add(J);return f})},[]),E=R((J)=>{K((C)=>{if(!C.has(J))return C;let f=new Set(C);return f.delete(J),f})},[]),D=R((J)=>{Q((C)=>{if(!C.has(J))return C;let f=new Set(C);return f.delete(J),f})},[]),H=R((J)=>{B((C)=>{if(!C.has(J))return C;let f=new Map(C);return f.delete(J),f})},[]),k=R((J,C={})=>{if(!J)return;let f=typeof C?.paneOverrideId==="string"&&C.paneOverrideId.trim()?C.paneOverrideId.trim():null,b={path:J,mode:"edit"};try{if(!(f?X_.get(f):X_.resolve(b))){if(!X_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(v){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,v)}let m=typeof C?.label==="string"&&C.label.trim()?C.label.trim():void 0,l=C?.viewState&&typeof C.viewState==="object"?C.viewState:null,_0=C?.diffMode==="saved"?"saved":null;if(__.open(J,m),l)__.saveViewState(J,l);if(f)B((v)=>{if(v.get(J)===f)return v;let e=new Map(v);return e.set(J,f),e});if(_0==="saved")Q((v)=>{if(v.has(J))return v;let e=new Set(v);return e.add(J),e})},[]),z=R(()=>{let J=__.getActiveId();if(J){let C=__.get(J);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}__.close(J),E(J),D(J),H(J),$.current?.(J)}},[D,H,E]),W=R((J)=>{let C=__.get(J);if(C?.dirty){if(!window.confirm(`"${C.label}" has unsaved changes. Close anyway?`))return}__.close(J),E(J),D(J),H(J),$.current?.(J)},[D,H,E]),I=R((J)=>{__.activate(J)},[]),x=R((J)=>{let C=__.getTabs().filter((m)=>m.id!==J&&!m.pinned),f=C.filter((m)=>m.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let b=C.map((m)=>m.id);__.closeOthers(J),b.forEach((m)=>{E(m),D(m),H(m),$.current?.(m)})},[D,H,E]),A=R(()=>{let J=__.getTabs().filter((b)=>!b.pinned),C=J.filter((b)=>b.dirty).length;if(C>0){if(!window.confirm(`${C} unsaved tab${C>1?"s":""} will be closed. Continue?`))return}let f=J.map((b)=>b.id);__.closeAll(),f.forEach((b)=>{E(b),D(b),H(b),$.current?.(b)})},[D,H,E]),M=R((J)=>{__.togglePin(J)},[]),O=R((J)=>{if(!J)return;Q((C)=>{let f=new Set(C);if(f.has(J))f.delete(J);else f.add(J);return f}),__.activate(J)},[]),y=R((J)=>{if(!J)return;B((C)=>{if(C.get(J)==="editor")return C;let f=new Map(C);return f.set(J,"editor"),f}),__.activate(J)},[]),T=R(()=>{let J=__.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return u(()=>{let J=(C)=>{let{oldPath:f,newPath:b,type:m}=C.detail||{};if(!f||!b)return;if(m==="dir"){for(let l of __.getTabs())if(l.path===f||l.path.startsWith(`${f}/`)){let _0=`${b}${l.path.slice(f.length)}`;__.rename(l.id,_0)}}else __.rename(f,b);K((l)=>RN(l,f,b,m)),Q((l)=>RN(l,f,b,m)),B((l)=>_y(l,f,b,m))};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),u(()=>{let J=(C)=>{if(__.hasUnsaved())C.preventDefault(),C.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:V,diffTabs:L,tabPaneOverrides:N,openEditor:k,closeEditor:z,handleTabClose:W,handleTabActivate:I,handleTabCloseOthers:x,handleTabCloseAll:A,handleTabTogglePin:M,handleTabTogglePreview:U,handleTabToggleDiff:O,handleTabEditSource:y,revealInExplorer:T}}y0();function a1(_){return typeof _==="string"&&_.trim()?_.trim():null}function $y(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function v4(_="pane"){let $=$y();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function uN(_){let $=a1(_?.paneInstanceId),j=a1(_?.paneWindowId);if(!$||!j)return{};let G=a1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function gN(_={}){let $=new URLSearchParams(_.search||"");return{panePath:a1($.get("pane_path"))||a1(_.panePath),paneLabel:a1($.get("pane_label"))||a1(_.paneLabel),paneInstanceId:a1($.get("pane_instance_id")),paneWindowId:a1($.get("pane_window_id")),paneSourceWindowId:a1($.get("pane_source_window_id"))}}function m4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function bN(_){let $=t1(_?.panePath),j=t1(_?.paneInstanceId),G=t1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=t1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:t1(_?.label),sourceWindowId:t1(_?.sourceWindowId)}}function fj(_,$){if(!_||!$)return!1;return t1($.panePath)===_.panePath&&t1($.paneInstanceId)===_.paneInstanceId&&t1($.paneWindowId)===_.ownerWindowId}function Rj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:t1($)||new Date().toISOString(),label:_.label||null}}function m8(_){try{return _?.close?.(),!0}catch($){return!1}}function Sj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function jy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function vN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var Gy=400;function Zy(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function Xy(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return Zy(j).some((Z)=>Z==="."||Z===_)})}async function mN(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function Yy(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function l8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function cN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function c8(_){if(!cN(_))return!1;return l8(_?.runtimeNavigator)}function h8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return l8(_?.runtimeNavigator)}function u6(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function qy(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,V=_?.instance||null,K=typeof V?.exportHostTransferState==="function"?V.exportHostTransferState():null,L=$===Y,Q=K&&!L?g8({path:$,payload:K},j,G):null,N=null;if($!==Y){let B=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,U=typeof V?.isDirty==="function"?V.isDirty():!1,E=typeof V?.getContent==="function"?V.getContent():void 0;N=Z2({path:$,content:U?E:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...N?.editor_popout?{editorPopoutToken:N.editor_popout}:{},...Q?.pane_transfer?{paneTransferToken:Q.pane_transfer}:{},...L&&K?{paneTransferPayload:K}:{},...q?{}:{allowLiveTransfer:!1}}}function Vy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,V=X?W3(X,j,G):null,K=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?wj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:V?.path===$?V:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function hN(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:V,diffTabs:K,tabPaneOverrides:L,terminalTabPath:Q,vncTabPrefix:N,openEditor:B,closeEditor:U,getWorkspaceFile:E}=_,D=g(null),H=g(null),k=g(null),z=g(null),W=g((()=>{if(!$)return null;let p=G6("editor_popout");return W3(p)})()),I=g((()=>{if(!$)return null;return AB()})()),x=g(gN({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=g(x.current.paneWindowId||v4("pane-window")),M=g(new Map),O=g(new Map),y=g(new Map),T=g(new Map),J=g(!1),C=g(new Map),f=g(v4("pane-instance")),b=g(new Map),m=g(new Map),l=g(new Set),[_0,v]=P(()=>new Map),e=g(_0);e.current=_0;let[O0,G0]=P(()=>new Map),$0=g(O0);$0.current=O0;let[q0,N0]=P(null),t=g(q0);t.current=q0;let[K0,Q0]=P(null),k0=g(K0);k0.current=K0;let s=X_.getDockPanes().length>0,[X0,E0]=P(!1),C0=R(()=>E0((p)=>!p),[]),g0=R(()=>{B(Q,{label:"Terminal"})},[B,Q]),n0=R(()=>{B(N,{label:"VNC"})},[B,N]),j_=R((p)=>{let i=typeof p==="string"?p.trim():"";if(!i)return v4("pane-instance");if(i===Q&&!__.get(i)){if(!f.current)f.current=v4("pane-instance");return f.current}let Z0=C.current.get(i);if(Z0)return Z0;let V0=v4("pane-instance");return C.current.set(i,V0),V0},[Q]),c0=Y0(()=>!$&&q?O0.get(q)||null:null,[O0,$,q]),d0=!$?K0:null,u0=R((p)=>{if(!p)return;kB(p),m.current.delete(p),l.current.delete(p),N0((i)=>i?.panePath===p?null:i),v((i)=>{if(!i.has(p))return i;let o=new Map(i);return o.delete(p),o})},[]),o0=R((p)=>{if(!p)return;b.current.delete(p),m.current.delete(p),l.current.delete(p),u0(p),Q0((i)=>i?.panePath===p?null:i),G0((i)=>{if(!i.has(p))return i;let o=new Map(i);return o.delete(p),o})},[u0]),v0=R((p,i={})=>{let o=typeof p==="string"?p.trim():"";if(!o)return!1;if(h8({panePath:o,terminalTabPath:Q}))return!1;let Z0=b.current.get(o),V0=Boolean($0.current.get(o)),J0=Boolean(k0.current?.panePath===o);if(o0(o),o===Q&&J0&&!V0)E0(!0);else if(o===Q&&V0)B(o,{label:"Terminal"});else if(__.get(o))__.activate(o);else B(o);if(i.closeDetachedWindow!==!1&&Z0&&typeof Z0.close==="function")m8(Z0);return!0},[o0,B,E0,Q]),a0=R(()=>{if($)return;if(!Yy())return;let p=Date.now();for(let[i,o]of m.current.entries()){if(o>p)continue;m.current.delete(i),v0(i,{closeDetachedWindow:!1})}},[$,v0]),p0=R((p,i={})=>{let o=typeof p==="string"?p.trim():"";if(!o)return!1;let Z0={panePath:o,terminalTabPath:Q,allowLiveTransfer:i.allowLiveTransfer,reason:i.reason};if(c8(Z0))return b.current.delete(o),m.current.delete(o),l.current.add(o),!0;if(!cN(Z0))return v0(o,{closeDetachedWindow:!1});return m.current.set(o,Date.now()+Gy),a0(),!0},[a0,v0,Q]),F_=R((p)=>{let i=typeof p==="string"?p.trim():"";if(!i)return null;let o=j_(i),Z0=v4("pane-window");return{paneInstanceId:o,paneWindowId:Z0,params:uN({paneInstanceId:o,paneWindowId:Z0,paneSourceWindowId:A.current})}},[j_]),t0=R((p,i,o,Z0)=>{let V0=typeof p==="string"?p.trim():"";if(!V0||!Z0)return;let J0=bN({panePath:V0,paneInstanceId:Z0.pane_instance_id,ownerWindowId:Z0.pane_window_id,sourceWindowId:Z0.pane_source_window_id,label:i});if(!J0)return;if(b.current.set(V0,o||null),V0===Q&&!__.get(V0)){N0(J0);return}v((R0)=>{let I0=new Map(R0);return I0.set(V0,J0),I0})},[Q]),b0=R((p,i)=>{let o=typeof p?.panePath==="string"?p.panePath.trim():"";if(!o)return!1;let Z0=b.current.get(o);if(Z0&&i&&Z0!==i)return!1;let V0=e.current.get(o)||null;if(fj(V0,p)){let w0=H.current,m0=u6({panePath:o,terminalTabPath:Q});if(m0&&w0&&typeof w0.moveHost==="function")S6({panePath:o,paneInstanceId:V0.paneInstanceId,paneWindowId:V0.ownerWindowId,instance:w0,releaseSourceHost:()=>{if(H.current===w0)H.current=null}});if(m0&&H.current)H.current=null;let U0=Rj(V0);if(!U0)return!1;return v((l0)=>{if(!l0.has(o))return l0;let Y_=new Map(l0);return Y_.delete(o),Y_}),G0((l0)=>{let Y_=new Map(l0);return Y_.set(o,U0),Y_}),vN({panePath:o,terminalTabPath:Q,closeTab:(l0)=>__.close(l0),sourceHost:"tab"}),!0}if(o!==Q)return!1;let J0=t.current,h0=z.current,R0=u6({panePath:o,terminalTabPath:Q});if(R0&&J0&&h0&&typeof h0.moveHost==="function")S6({panePath:o,paneInstanceId:J0.paneInstanceId,paneWindowId:J0.ownerWindowId,instance:h0,releaseSourceHost:()=>{if(z.current===h0)z.current=null}});if(R0&&z.current)z.current=null;if(!fj(J0,p))return!1;let I0=Rj(J0);if(!I0)return!1;return N0(null),Q0(I0),vN({panePath:o,terminalTabPath:Q,setDockVisible:E0,sourceHost:"dock"}),!0},[E0,Q]),A0=R((p=!1,i=!0)=>{if(!$)return!1;let o=x.current;if(!m4(o))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(J.current){if(p)m8(window);return!0}let Z0=o.panePath||j,V0=Z0===Q?z.current||H.current:H.current,J0=i&&u6({panePath:Z0,terminalTabPath:Q}),h0=qy({panePath:Z0,paneInstanceId:o.paneInstanceId,paneOverrideId:Z0===Q?null:typeof L?.get==="function"?L.get(Z0)||null:null,terminalTabPath:Q,viewState:Z0===Q?null:__.getViewState(Z0)||null,allowLiveTransfer:J0,instance:V0});if(!h0)return!1;if(J0&&h0.paneTransferToken&&typeof V0?.moveHost==="function"){if(z.current===V0)z.current=null;if(H.current===V0)H.current=null}if(!Sj(window.opener,h0,window.location.origin))return!1;if(J.current=!0,p)m8(window);return!0},[$,j,L,Q]),q_=R(()=>A0(!0,!0),[A0]);u(()=>{if(!$||typeof window>"u")return;let p=()=>{let i=x.current,o=m4(i)?i.panePath||j||"":"";if(c8({panePath:o,terminalTabPath:Q,allowLiveTransfer:!1,reason:"closed-window"}))return;A0(!1,!1)};return window.addEventListener("pagehide",p),window.addEventListener("beforeunload",p),()=>{window.removeEventListener("pagehide",p),window.removeEventListener("beforeunload",p)}},[$,A0]);let e0=Y0(()=>_Q(Y,q),[q,Y]),z_=Y0(()=>$Q(L,q),[L,q]),H0=Y0(()=>Kj(G,e0,j),[e0,G,j]),f0=Y0(()=>q&&K.has(q)?"saved":null,[K,q]),T0=g(f0);u(()=>{T0.current=f0},[f0]);let i0=Y0(()=>GQ(Y,V,K,q),[K,V,q,Y]),A_=Y0(()=>ZQ(j,N),[j,N]),K_=Y0(()=>XQ(j,Q,i0,A_),[A_,i0,j,Q]),E_=YQ($,Z,X,s,X0),[D_,M_]=P(!1),C_=g(!1),u_=R(()=>{if(!X||Z)return;if(C_.current=X0,X0)E0(!1);M_(!0)},[Z,X0,X]),O_=R(()=>{if(!D_)return;if(M_(!1),C_.current)E0(!0),C_.current=!1},[D_]),j0=R(()=>{if(D_){O_();return}u_()},[u_,O_,D_]);u(()=>{if(D_&&!X)O_()},[X,O_,D_]),u(()=>{let p=new Set(Y.map((Z0)=>Z0.id)),i=new Set(e.current.keys()),o=new Set($0.current.keys());for(let Z0 of Array.from(C.current.keys()))if(!jy({panePath:Z0,openTabIds:p,pendingDetachedTabPaths:i,detachedTabPaths:o,terminalTabPath:Q,hasPendingDetachedDockPane:Boolean(t.current),hasDetachedDockPane:Boolean(k0.current)}))C.current.delete(Z0)},[Y,Q]),u(()=>{if($||typeof window>"u")return;let p=(i)=>{if(i.origin!==window.location.origin)return;let o=i.data;if(!o||typeof o!=="object")return;if(o.type==="piclaw-pane-detach-claim"){b0({panePath:o.panePath,paneInstanceId:o.paneInstanceId,paneWindowId:o.paneWindowId},i.source);return}if(o.type!=="piclaw-pane-reattach-request")return;let Z0=Vy({payload:o}),V0=Z0?.panePath||"";if(!V0)return;if(Z0?.editorTransfer)M.current.set(V0,Z0.editorTransfer);if(Z0?.hostTransfer)if(O.current.set(V0,Z0.hostTransfer),Z0.allowLiveTransfer&&i.source)y.current.set(V0,i.source);else y.current.delete(V0);let J0=$0.current.get(V0)||null,h0=V0===Q?k0.current:null,R0=u6({panePath:V0,terminalTabPath:Q}),I0=J0||h0;if(!I0)return;if(Z0?.paneInstanceId&&Z0.paneInstanceId!==I0.paneInstanceId)return;if(h8({panePath:V0,terminalTabPath:Q})){y.current.delete(V0),T.current.delete(V0),O.current.delete(V0),M.current.delete(V0);return}if(Z0?.hostTransfer&&Z0.allowLiveTransfer&&R0)T.current.set(V0,{panePath:V0,paneInstanceId:I0.paneInstanceId,paneWindowId:I0.ownerWindowId});else T.current.delete(V0);if(c8({panePath:V0,terminalTabPath:Q,allowLiveTransfer:Z0?.allowLiveTransfer,reason:"message"})){y.current.delete(V0),b.current.delete(V0),m.current.delete(V0),l.current.add(V0);return}p0(V0,{allowLiveTransfer:Z0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",p),()=>window.removeEventListener("message",p)},[b0,$,p0,Q]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let p=()=>a0();window.addEventListener("focus",p),window.addEventListener("pageshow",p),document.addEventListener("visibilitychange",p);let i=setInterval(()=>{a0();for(let[o,Z0]of b.current.entries()){if(!Z0||!Z0.closed)continue;if(o===Q?Boolean(t.current):e.current.has(o)){b.current.delete(o),u0(o);continue}if(h8({panePath:o,terminalTabPath:Q})){o0(o);continue}if(c8({panePath:o,terminalTabPath:Q,allowLiveTransfer:!1,reason:"closed-window"})){b.current.delete(o),m.current.delete(o),l.current.add(o);continue}if(l.current.has(o)){b.current.delete(o);continue}p0(o,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",p),window.removeEventListener("pageshow",p),document.removeEventListener("visibilitychange",p),clearInterval(i)}},[o0,u0,a0,$,p0,Q]),u(()=>{if(!$||!j)return;if(__.getActiveId()===j)return;let i=W.current?.path===j?W.current:null,o=I.current?.path===j?I.current:null;B(j,{...G?{label:G}:{},...i?.paneOverrideId?{paneOverrideId:i.paneOverrideId}:{},...i?.viewState?{viewState:i.viewState}:{},...o?.payload?.diffMode?{diffMode:o.payload.diffMode}:{}})},[B,G,$,j]),u(()=>{if(!$)return;let p=x.current;if(!m4(p))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Sj(window.opener,{type:"piclaw-pane-detach-claim",panePath:p.panePath,paneInstanceId:p.paneInstanceId,paneWindowId:p.paneWindowId},window.location.origin)},[$]),u(()=>{let p=D.current;if(!p)return;if(H.current)H.current.dispose(),H.current=null;let i=q;if(!i)return;if(!$&&c0?.panePath===i){p.innerHTML="";return}let o=W.current?.path===i?W.current:null,Z0=M.current.get(i)||null,V0=o||Z0,J0=I.current?.path===i?I.current:null,h0=O.current.get(i)||null,R0=J0||h0,I0=z_||V0?.paneOverrideId||null,w0=R0?.payload?{...R0.payload}:null;if(T0.current)w0={...w0||{},diffMode:T0.current};else if(w0&&"diffMode"in w0)delete w0.diffMode;let m0={path:i,mode:"edit",...V0?.content!==void 0?{content:V0.content}:{},...V0?.mtime!==void 0?{mtime:V0.mtime}:{},...w0?{transferState:w0}:{}},U0=(I0?X_.get(I0):null)||X_.resolve(m0)||X_.get("editor");if(!U0){p.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let l0=null,Y_=!1,G_=(S0)=>{l0=S0,H.current=S0,S0.onDirtyChange?.((d)=>{__.setDirty(i,d)}),S0.onSaveRequest?.(()=>{}),S0.onClose?.(()=>{U()});let Q_=__.getViewState(i);if(Q_&&typeof S0.restoreViewState==="function")requestAnimationFrame(()=>S0.restoreViewState(Q_));if(typeof S0.onViewStateChange==="function")S0.onViewStateChange((d)=>{__.saveViewState(i,d)});let V_=x.current;if($&&m4(V_)&&typeof S0?.moveHost==="function"&&u6({panePath:i,terminalTabPath:Q}))S6({panePath:i,paneInstanceId:V_.paneInstanceId||"",paneWindowId:V_.paneWindowId||"",instance:S0,releaseSourceHost:()=>{if(z.current===S0)z.current=null;if(H.current===S0)H.current=null}});mN(S0,{path:i,hostMode:$?"popout":"main",transferState:w0}).catch((d)=>{console.warn("[pane-attach] afterAttachToHost failed:",d)}),requestAnimationFrame(()=>S0.focus?.())};return(async()=>{let S0=x.current,Q_=$&&m4(S0)&&S0.panePath===i?{panePath:i,paneInstanceId:S0.paneInstanceId||"",paneWindowId:S0.paneWindowId||""}:null,V_=T.current.get(i)||null,d=u6({panePath:i,terminalTabPath:Q})?Q_||V_:null,z0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:y.current.get(i)||null,Z_=$?"popout":"main";if(R0&&d&&z0)try{let B_=await MB(z0,d,p,{path:i,hostMode:Z_,transferState:w0});if(!Y_&&B_){if(G_(B_),o)W.current=null;if(Z0)M.current.delete(i);if(J0)I.current=null;if(h0)O.current.delete(i);y.current.delete(i),T.current.delete(i);return}}catch(B_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",B_)}if(Y_)return;if(G_(U0.mount(p,m0)),o)W.current=null;if(Z0)M.current.delete(i);if(J0)I.current=null;if(h0)O.current.delete(i);y.current.delete(i),T.current.delete(i)})(),()=>{if(Y_=!0,H.current===l0)l0.dispose(),H.current=null}},[c0,z_,U,$,q]),u(()=>{let p=q,i=H.current;if(!p||typeof i?.setDiffMode!=="function")return;i.setDiffMode(f0)},[f0,q]);let W0=R(async(p)=>{let i=typeof q==="string"?q.trim():"",o=H.current;if(!i||!o?.setContent)return;if(typeof o.isDirty==="function"&&o.isDirty())return;if(!Xy(i,p))return;try{let Z0=await E(i,1e6,"edit"),V0=typeof Z0?.text==="string"?Z0.text:"",J0=typeof Z0?.mtime==="string"&&Z0.mtime.trim()?Z0.mtime.trim():new Date().toISOString();o.setContent(V0,J0)}catch(Z0){console.warn("[workspace_update] Failed to refresh active pane:",Z0)}},[E,q]);return u(()=>{let p=k.current;if(z.current)z.current.dispose(),z.current=null;if(!p||!s||!X0)return;if(!$&&d0?.panePath===Q){p.innerHTML="";return}let i=X_.getDockPanes()[0];if(!i){p.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let o=I.current?.path===Q?I.current:null,Z0=O.current.get(Q)||null,V0=o||Z0,J0=i.mount(p,{mode:"view",...V0?.payload?{transferState:V0.payload}:{}});if(z.current=J0,mN(J0,{path:Q,hostMode:$?"popout":"main",transferState:V0?.payload||null}).catch((h0)=>{console.warn("[pane-attach] afterAttachToHost failed:",h0)}),o)I.current=null;if(Z0)O.current.delete(Q);return requestAnimationFrame(()=>J0.focus?.()),()=>{if(z.current===J0)J0.dispose(),z.current=null}},[d0,X0,s,$,Q]),{editorContainerRef:D,editorInstanceRef:H,dockContainerRef:k,dockInstanceRef:z,hasDockPanes:s,dockVisible:X0,setDockVisible:E0,toggleDock:C0,openTerminalTab:g0,openVncTab:n0,panePopoutTitle:H0,panePopoutHasMenuActions:i0,hidePanePopoutControls:K_,showEditorPaneContainer:E_,zenMode:D_,exitZenMode:O_,toggleZenMode:j0,refreshActiveEditorFromWorkspace:W0,detachedTabs:O0,activeDetachedTab:c0,detachedDockPane:d0,buildPaneDetachTransfer:F_,registerDetachedPaneWindow:t0,reattachPane:v0,requestPanePopoutReattach:q_,canReattachPanePopout:$&&m4(x.current)&&!h8({panePath:j||"",terminalTabPath:Q})}}function Ky(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function lN(_){let $=g(null),j=SN({onTabClosed:(Z)=>$.current?.(Z)}),G=hN({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Ky({removeFileRefRef:$,editorState:j,paneRuntime:G})}I_();var r8=1280,n8=820;function p8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function g5(_){return typeof _==="string"&&_.trim()?_.trim():null}function Qy(_){let $=g5(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function Ly(_){if(_.isMobile)return!1;let $=p8(_.windowWidth),j=p8(_.windowHeight);if($===null||j===null)return!1;if($<r8||j<n8)return!1;let G=p8(_.screenWidth),Z=p8(_.screenHeight);if(G!==null&&G<r8)return!1;if(Z!==null&&Z<n8)return!1;return!0}function By(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Ny(_){if(!_||_.kind!=="custom")return null;let $=g5(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=g5(j.path);if(!Qy(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:g5(_.chat_jid),path:G,label:g5(j.label),target:Z}}async function Fy(_,$,j){await D6(_,$,j||void 0)}async function pN(_,$){let j=Ny(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||Fy,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:r8,height:n8};if(j.target==="popout"){if(!Ly({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:By(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${r8}×${n8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let V=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:V,opened:V,reason:V?void 0:"popout_failed",detail:V?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var uj="piclaw:oobe:provider-missing:dismissed";function Uy(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function Hy(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function rN(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=Uy(G),Y=X>0,q=Hy(G),V=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(V)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var Dy=oK();await QQ();var{searchPosts:Ey,deletePost:Oy,getAgents:Wy,getAgentThought:nN,setAgentThoughtVisibility:dN,getAgentStatus:zy,getAgentContext:Jy,getAutoresearchStatus:Ay,stopAutoresearch:ky,dismissAutoresearch:My,getAgentModels:yy,getActiveChatAgents:wy,getChatBranches:Ty,renameChatBranch:xy,pruneChatBranch:Iy,purgeChatBranch:Cy,restoreChatBranch:Py,getAgentQueueState:fy,steerAgentQueueItem:Ry,removeAgentQueueItem:Sy,streamSidePrompt:uy,getWorkspaceFile:gy,getThread:by,getTimeline:vy,sendAgentMessage:my,forkChatBranch:cy,createRootChatSession:hy}=LQ;function ly({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:V}=Y0(()=>eK(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=fN({currentChatJid:j,branchLoaderMode:q}),[L,Q]=P(()=>F$(uj,!1)),[N,B]=P(null),U=R((u0)=>{let o0=typeof u0==="string"?u0:"";if(!o0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:E,setAgentStatus:D,agentDraft:H,setAgentDraft:k,agentPlan:z,setAgentPlan:W,agentThought:I,setAgentThought:x,pendingRequest:A,setPendingRequest:M,currentTurnId:O,setCurrentTurnId:y,steerQueuedTurnId:T,setSteerQueuedTurnId:J,lastAgentEventRef:C,lastSilenceNoticeRef:f,isAgentRunningRef:b,draftBufferRef:m,thoughtBufferRef:l,previewResyncPendingRef:_0,previewResyncGenerationRef:v,pendingRequestRef:e,stalledPostIdRef:O0,currentTurnIdRef:G0,steerQueuedTurnIdRef:$0,thoughtExpandedRef:q0,draftExpandedRef:N0}=RX(),t=lN({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:X6,vncTabPrefix:i1,getWorkspaceFile:gy}),K0=KL({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:R((u0)=>{if(!u0)return;let{assistant_name:o0,assistant_avatar_url:v0}=u0;if(o0||v0)K.setAgents((b0)=>{let A0=b0.default||{id:"default"},q_=o0&&!A0.name,e0=v0&&!A0.avatar_url;if(!q_&&!e0)return b0;return{...b0,["default"]:{...A0,...q_?{name:o0}:{},...e0?{avatar_url:v0}:{}}}});let{user_name:a0,user_avatar_url:p0,user_avatar_background:F_}=u0;if(a0||p0||F_)K.setUserProfile((t0)=>{let b0=a0&&!t0.name,A0=p0&&!t0.avatar_url,q_=F_&&!t0.avatar_background;if(!b0&&!A0&&!q_)return t0;return{...t0,...b0?{name:a0}:{},...A0?{avatar_url:p0}:{},...q_?{avatar_background:F_}:{}}})},[K.setAgents,K.setUserProfile])}),Q0=oQ({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:t.editorState.editorOpen,openEditor:t.editorState.openEditor,resolvePane:(u0)=>X_.resolve(u0),tabStripActiveId:t.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setFolderRefs:K.setFolderRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:by,setPosts:K0.setPosts},agentActivity:{lastActivityTtlMs:nX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:C,lastSilenceNoticeRef:f,isAgentRunningRef:b,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,draftBufferRef:m,thoughtBufferRef:l,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:G0,steerQueuedTurnIdRef:$0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:q0,draftExpandedRef:N0,setCurrentTurnId:y,setSteerQueuedTurnId:J,currentTurnIdRefForPanel:G0,setAgentThoughtVisibility:dN,getAgentThought:nN,setAgentThought:x,setAgentDraft:k},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:T,currentTurnId:O,steerQueuedTurnIdRef:$0,setSteerQueuedTurnId:J,agentStatus:E,agentDraft:H,agentPlan:z,agentThought:I,pendingRequest:A,pendingRequestRef:e,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:b,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:m,thoughtBufferRef:l,lastAgentEventRef:C,lastSilenceNoticeRef:f,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:G0,thoughtExpandedRef:q0,draftExpandedRef:N0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:M,setCurrentTurnId:y,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:b,lastSilenceNoticeRef:f,lastAgentEventRef:C,currentTurnIdRef:G0,thoughtExpandedRef:q0,draftExpandedRef:N0,draftBufferRef:m,thoughtBufferRef:l,pendingRequestRef:e,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:O0,scrollToBottomRef:K0.scrollToBottomRef,setCurrentTurnId:y,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:M,setAgentStatus:D,setPosts:K0.setPosts,dedupePosts:E6},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:t.removeFileRefRef}),k0=hX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:s,timelineViewActions:X0,isComposeBoxAgentActive:E0,followupActions:C0,sidepanelActions:g0,branchPaneActions:n0}=JN({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:V,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:K0,interaction:Q0,paneRuntime:t.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:e,thoughtBufferRef:l,draftBufferRef:m,previewResyncPendingRef:_0,previewResyncGenerationRef:v,isAgentRunningRef:b,currentTurnIdRef:G0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:C,lastSilenceNoticeRef:f,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:q0,draftExpandedRef:N0,steerQueuedTurnIdRef:$0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:D,setAgentDraft:k,setAgentPlan:W,setAgentThought:x,setPendingRequest:M,setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:K0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:J,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:Ey,deletePost:Oy,getAgentQueueState:fy,getAgentContext:Jy,getAutoresearchStatus:Ay,getAgentStatus:zy,getAgents:Wy,getAgentModels:yy,getActiveChatAgents:wy,getChatBranches:Ty,getTimeline:vy,stopAutoresearch:ky,dismissAutoresearch:My,streamSidePrompt:uy,sendAgentMessage:my,renameChatBranch:xy,pruneChatBranch:Iy,purgeChatBranch:Cy,restoreChatBranch:Py,forkChatBranch:cy,createRootChatSession:hy,steerAgentQueueItem:Ry,removeAgentQueueItem:Sy,getAgentThought:nN,setAgentThoughtVisibility:dN,silenceRefreshMs:rX,silenceWarningMs:lX,silenceFinalizeMs:pX,isCompactionStatus:O$,currentAppAssetVersion:Dy,tabStoreHasUnsaved:()=>__.hasUnsaved(),agentStatus:E,isAgentTurnActive:K.isAgentTurnActive,openEditor:t.editorState.openEditor,activateTab:t.editorState.handleTabActivate,tabStripActiveId:t.editorState.tabStripActiveId,terminalTabPath:X6,resolveTab:(u0)=>__.get(u0),closeTab:t.editorState.handleTabClose,editorOpen:t.editorState.editorOpen},helpers:{getFormLock:sK,readStoredNumber:O4}});u(()=>{return WN({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(u0)=>n0.handleBranchPickerChange(u0),isIOSDevice:D5,isLikelySafari:l8})},[K.timelineRef,K.activeChatAgents,j,n0.handleBranchPickerChange]);let j_=Y0(()=>rN({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:L}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,L]),c0=R(()=>{Lq()},[]),d0=R(()=>{Q(!0),L_(uj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=jQ(Y,t.paneRuntime.activePaneTab,X)},[t.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let u0=(o0)=>{pN(o0,{currentChatJid:j,openEditor:t.editorState.openEditor,popOutPane:n0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",u0),()=>{window.removeEventListener("piclaw-extension-ui:request",u0)}},[n0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,t.editorState.openEditor]),nK(NQ({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:t.paneRuntime,splitters:k0,orchestration:{branchPaneActions:n0,timelineViewActions:X0,sidepanelActions:g0,followupActions:C0,chatRefreshLifecycle:s,isComposeBoxAgentActive:E0},interaction:Q0,timeline:K0,surface:{...K,oobePanelState:j_,composePrefillRequest:N,requestComposePrefill:U,handleOobeSetupProvider:c0,handleOobeShowModelPicker:c0,handleOobeOpenWorkspace:c0,handleDismissProviderMissingOobe:d0},editorState:t.editorState,agentState:{agentStatus:E,agentDraft:H,agentPlan:z,agentThought:I,pendingRequest:A,currentTurnId:O,steerQueuedTurnId:T,setPendingRequest:M,pendingRequestRef:e,isCompactionStatus:O$},helpers:{formatBranchPickerLabel:t2,isIOSDevice:D5,terminalTabPath:X6}}))}function py(){let{locationParams:_,navigate:$}=Nq();return F`<${ly} locationParams=${_} navigate=${$} />`}var d8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(d8){if(L$(null,d8),d8.replaceChildren(),L$(F`<${py} />`,d8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=B28814D5FC7A445664756E2164756E21
//# sourceMappingURL=app.bundle.js.map
