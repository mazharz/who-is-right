(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();var I,d,d_,C,e_,h_,q,J,R,j,x={},v_=[],w_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function E(e,_){for(var t in _)e[t]=_[t];return e}function y_(e){var _=e.parentNode;_&&_.removeChild(e)}function E_(e,_,t){var o,n,r,c={};for(r in _)r=="key"?o=_[r]:r=="ref"?n=_[r]:c[r]=_[r];if(arguments.length>2&&(c.children=arguments.length>3?I.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return U(e,c,o,n,null)}function U(e,_,t,o,n){var r={type:e,props:_,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++d_,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function H(e){return e.children}function D(e,_){this.props=e,this.context=_}function S(e,_){if(_==null)return e.__?S(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?S(e):null}function m_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return m_(e)}}function t_(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!O.__r++||e_!==d.debounceRendering)&&((e_=d.debounceRendering)||h_)(O)}function O(){var e,_,t,o,n,r,c,l;for(C.sort(q);e=C.shift();)e.__d&&(_=C.length,o=void 0,r=(n=(t=e).__v).__e,c=[],l=[],t.__P&&((o=E({},n)).__v=n.__v+1,d.vnode&&d.vnode(o),X(t.__P,o,n,t.__n,t.__P.ownerSVGElement!==void 0,32&n.__u?[r]:null,c,r??S(n),!!(32&n.__u),l),o.__v=n.__v,o.__.__k[o.__i]=o,k_(c,o,l),o.__e!=r&&m_(o)),C.length>_&&C.sort(q));O.__r=0}function g_(e,_,t,o,n,r,c,l,f,u,a){var i,p,s,m,P,g=o&&o.__k||v_,h=_.length;for(t.__d=f,C_(t,_,g),f=t.__d,i=0;i<h;i++)(s=t.__k[i])!=null&&typeof s!="boolean"&&typeof s!="function"&&(p=s.__i===-1?x:g[s.__i]||x,s.__i=i,X(e,s,p,n,r,c,l,f,u,a),m=s.__e,s.ref&&p.ref!=s.ref&&(p.ref&&Z(p.ref,null,s),a.push(s.ref,s.__c||m,s)),P==null&&m!=null&&(P=m),65536&s.__u||p.__k===s.__k?(f&&!f.isConnected&&(f=S(p)),f=b_(s,f,e)):typeof s.type=="function"&&s.__d!==void 0?f=s.__d:m&&(f=m.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=f,t.__e=P}function C_(e,_,t){var o,n,r,c,l,f=_.length,u=t.length,a=u,i=0;for(e.__k=[],o=0;o<f;o++)c=o+i,(n=e.__k[o]=(n=_[o])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?U(null,n,null,null,null):Q(n)?U(H,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?U(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,l=H_(n,t,c,a),n.__i=l,r=null,l!==-1&&(a--,(r=t[l])&&(r.__u|=131072)),r==null||r.__v===null?(l==-1&&i--,typeof n.type!="function"&&(n.__u|=65536)):l!==c&&(l===c+1?i++:l>c?a>f-c?i+=l-c:i--:l<c?l==c-1&&(i=l-c):i=0,l!==o+i&&(n.__u|=65536))):(r=t[c])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=S(r)),z(r,r,!1),t[c]=null,a--);if(a)for(o=0;o<u;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=S(r)),z(r,r))}function b_(e,_,t){var o,n;if(typeof e.type=="function"){for(o=e.__k,n=0;o&&n<o.length;n++)o[n]&&(o[n].__=e,_=b_(o[n],_,t));return _}e.__e!=_&&(t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function H_(e,_,t,o){var n=e.key,r=e.type,c=t-1,l=t+1,f=_[t];if(f===null||f&&n==f.key&&r===f.type&&!(131072&f.__u))return t;if(o>(f!=null&&!(131072&f.__u)?1:0))for(;c>=0||l<_.length;){if(c>=0){if((f=_[c])&&!(131072&f.__u)&&n==f.key&&r===f.type)return c;c--}if(l<_.length){if((f=_[l])&&!(131072&f.__u)&&n==f.key&&r===f.type)return l;l++}}return-1}function n_(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||w_.test(_)?t:t+"px"}function F(e,_,t,o,n){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(_ in o)t&&_ in t||n_(e.style,_,"");if(t)for(_ in t)o&&t[_]===o[_]||n_(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?o?t.u=o.u:(t.u=J,e.addEventListener(_,r?j:R,r)):e.removeEventListener(_,r?j:R,r);else{if(n)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,t))}}function o_(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=J++;else if(_.t<t.u)return;return t(d.event?d.event(_):_)}}}function X(e,_,t,o,n,r,c,l,f,u){var a,i,p,s,m,P,g,h,b,w,L,N,__,A,B,k=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),r=[l=_.__e=t.__e]),(a=d.__b)&&a(_);_:if(typeof k=="function")try{if(h=_.props,b=(a=k.contextType)&&o[a.__c],w=a?b?b.props.value:a.__:o,t.__c?g=(i=_.__c=t.__c).__=i.__E:("prototype"in k&&k.prototype.render?_.__c=i=new k(h,w):(_.__c=i=new D(h,w),i.constructor=k,i.render=N_),b&&b.sub(i),i.props=h,i.state||(i.state={}),i.context=w,i.__n=o,p=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),k.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=E({},i.__s)),E(i.__s,k.getDerivedStateFromProps(h,i.__s))),s=i.props,m=i.state,i.__v=_,p)k.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(k.getDerivedStateFromProps==null&&h!==s&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(h,w),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(h,i.__s,w)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(i.props=h,i.state=i.__s,i.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(T){T&&(T.__=_)}),L=0;L<i._sb.length;L++)i.__h.push(i._sb[L]);i._sb=[],i.__h.length&&c.push(i);break _}i.componentWillUpdate!=null&&i.componentWillUpdate(h,i.__s,w),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(s,m,P)})}if(i.context=w,i.props=h,i.__P=e,i.__e=!1,N=d.__r,__=0,"prototype"in k&&k.prototype.render){for(i.state=i.__s,i.__d=!1,N&&N(_),a=i.render(i.props,i.state,i.context),A=0;A<i._sb.length;A++)i.__h.push(i._sb[A]);i._sb=[]}else do i.__d=!1,N&&N(_),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++__<25);i.state=i.__s,i.getChildContext!=null&&(o=E(E({},o),i.getChildContext())),p||i.getSnapshotBeforeUpdate==null||(P=i.getSnapshotBeforeUpdate(s,m)),g_(e,Q(B=a!=null&&a.type===H&&a.key==null?a.props.children:a)?B:[B],_,t,o,n,r,c,l,f,u),i.base=_.__e,_.__u&=-161,i.__h.length&&c.push(i),g&&(i.__E=i.__=null)}catch(T){_.__v=null,f||r!=null?(_.__e=l,_.__u|=f?160:32,r[r.indexOf(l)]=null):(_.__e=t.__e,_.__k=t.__k),d.__e(T,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=S_(t.__e,_,t,o,n,r,c,f,u);(a=d.diffed)&&a(_)}function k_(e,_,t){_.__d=void 0;for(var o=0;o<t.length;o++)Z(t[o],t[++o],t[++o]);d.__c&&d.__c(_,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function S_(e,_,t,o,n,r,c,l,f){var u,a,i,p,s,m,P,g=t.props,h=_.props,b=_.type;if(b==="svg"&&(n=!0),r!=null){for(u=0;u<r.length;u++)if((s=r[u])&&"setAttribute"in s==!!b&&(b?s.localName===b:s.nodeType===3)){e=s,r[u]=null;break}}if(e==null){if(b===null)return document.createTextNode(h);e=n?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,h.is&&h),r=null,l=!1}if(b===null)g===h||l&&e.data===h||(e.data=h);else{if(r=r&&I.call(e.childNodes),g=t.props||x,!l&&r!=null)for(g={},u=0;u<e.attributes.length;u++)g[(s=e.attributes[u]).name]=s.value;for(u in g)s=g[u],u=="children"||(u=="dangerouslySetInnerHTML"?i=s:u==="key"||u in h||F(e,u,null,s,n));for(u in h)s=h[u],u=="children"?p=s:u=="dangerouslySetInnerHTML"?a=s:u=="value"?m=s:u=="checked"?P=s:u==="key"||l&&typeof s!="function"||g[u]===s||F(e,u,s,g[u],n);if(a)l||i&&(a.__html===i.__html||a.__html===e.innerHTML)||(e.innerHTML=a.__html),_.__k=[];else if(i&&(e.innerHTML=""),g_(e,Q(p)?p:[p],_,t,o,n&&b!=="foreignObject",r,c,r?r[0]:t.__k&&S(t,0),l,f),r!=null)for(u=r.length;u--;)r[u]!=null&&y_(r[u]);l||(u="value",m!==void 0&&(m!==e[u]||b==="progress"&&!m||b==="option"&&m!==g[u])&&F(e,u,m,g[u],!1),u="checked",P!==void 0&&P!==e[u]&&F(e,u,P,g[u],!1))}return e}function Z(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(o){d.__e(o,t)}}function z(e,_,t){var o,n;if(d.unmount&&d.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Z(o,null,_)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){d.__e(r,_)}o.base=o.__P=null}if(o=e.__k)for(n=0;n<o.length;n++)o[n]&&z(o[n],_,t||typeof e.type!="function");t||e.__e==null||y_(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function N_(e,_,t){return this.constructor(e,t)}function x_(e,_,t){var o,n,r,c;d.__&&d.__(e,_),n=(o=typeof t=="function")?null:t&&t.__k||_.__k,r=[],c=[],X(_,e=(!o&&t||_).__k=E_(H,null,[e]),n||x,x,_.ownerSVGElement!==void 0,!o&&t?[t]:n?null:_.firstChild?I.call(_.childNodes):null,r,!o&&t?t:n?n.__e:_.firstChild,o,c),k_(r,e,c)}I=v_.slice,d={__e:function(e,_,t,o){for(var n,r,c;_=_.__;)if((n=_.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),c=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,o||{}),c=n.__d),c)return n.__E=n}catch(l){e=l}throw e}},d_=0,D.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},t),this.props)),e&&E(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),t_(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),t_(this))},D.prototype.render=H,C=[],h_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,_){return e.__v.__b-_.__v.__b},O.__r=0,J=0,R=o_(!1),j=o_(!0);var G,v,V,r_,K=0,$_=[],W=[],y=d,i_=y.__b,l_=y.__r,c_=y.diffed,u_=y.__c,f_=y.unmount,s_=y.__;function L_(e,_){y.__h&&y.__h(v,e,K||_),K=0;var t=v.__H||(v.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:W}),t.__[e]}function a_(e){return K=1,A_(P_,e)}function A_(e,_,t){var o=L_(G++,2);if(o.t=e,!o.__c&&(o.__=[t?t(_):P_(void 0,_),function(l){var f=o.__N?o.__N[0]:o.__[0],u=o.t(f,l);f!==u&&(o.__N=[u,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.u)){var n=function(l,f,u){if(!o.__c.__H)return!0;var a=o.__c.__H.__.filter(function(p){return!!p.__c});if(a.every(function(p){return!p.__N}))return!r||r.call(this,l,f,u);var i=!1;return a.forEach(function(p){if(p.__N){var s=p.__[0];p.__=p.__N,p.__N=void 0,s!==p.__[0]&&(i=!0)}}),!(!i&&o.__c.props===l)&&(!r||r.call(this,l,f,u))};v.u=!0;var r=v.shouldComponentUpdate,c=v.componentWillUpdate;v.componentWillUpdate=function(l,f,u){if(this.__e){var a=r;r=void 0,n(l,f,u),r=a}c&&c.call(this,l,f,u)},v.shouldComponentUpdate=n}return o.__N||o.__}function T_(){for(var e;e=$_.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(Y),e.__H.__h=[]}catch(_){e.__H.__h=[],y.__e(_,e.__v)}}y.__b=function(e){v=null,i_&&i_(e)},y.__=function(e,_){e&&_.__k&&_.__k.__m&&(e.__m=_.__k.__m),s_&&s_(e,_)},y.__r=function(e){l_&&l_(e),G=0;var _=(v=e.__c).__H;_&&(V===v?(_.__h=[],v.__h=[],_.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=W,t.__N=t.i=void 0})):(_.__h.forEach(M),_.__h.forEach(Y),_.__h=[],G=0)),V=v},y.diffed=function(e){c_&&c_(e);var _=e.__c;_&&_.__H&&(_.__H.__h.length&&($_.push(_)!==1&&r_===y.requestAnimationFrame||((r_=y.requestAnimationFrame)||F_)(T_)),_.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==W&&(t.__=t.__V),t.i=void 0,t.__V=W})),V=v=null},y.__c=function(e,_){_.some(function(t){try{t.__h.forEach(M),t.__h=t.__h.filter(function(o){return!o.__||Y(o)})}catch(o){_.some(function(n){n.__h&&(n.__h=[])}),_=[],y.__e(o,t.__v)}}),u_&&u_(e,_)},y.unmount=function(e){f_&&f_(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{M(o)}catch(n){_=n}}),t.__H=void 0,_&&y.__e(_,t.__v))};var p_=typeof requestAnimationFrame=="function";function F_(e){var _,t=function(){clearTimeout(o),p_&&cancelAnimationFrame(_),setTimeout(e)},o=setTimeout(t,100);p_&&(_=requestAnimationFrame(t))}function M(e){var _=v,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),v=_}function Y(e){var _=v;e.__c=e.__(),v=_}function P_(e,_){return typeof _=="function"?_(e):_}var U_=0;function $(e,_,t,o,n,r){var c,l,f={};for(l in _)l=="ref"?c=_[l]:f[l]=_[l];var u={type:e,props:f,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--U_,__i:-1,__u:0,__source:n,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(l in c)f[l]===void 0&&(f[l]=c[l]);return d.vnode&&d.vnode(u),u}function D_(){const[e,_]=a_(""),[t,o]=a_(!1),n=e.toLowerCase().includes("afra")||e.toLowerCase().includes("afoo"),r=()=>{o(!0)},c=()=>{_(""),o(!1)};return $(H,{children:[$("h1",{children:"Who is right?"}),t?$(H,{children:[n?$("p",{children:"Of course, Afra is always right, ALWAYS! 😁"}):$("p",{children:"Nope, I'm sorry, you are not right. 😒"}),$("button",{type:"button",onClick:c,children:"Try again"})]}):$(H,{children:[$("p",{children:"Enter your name below to find out if you are right or not."}),$("div",{style:{marginBottom:"1rem"},children:$("input",{value:e,onChange:l=>{console.log(l),_(l.target.value)}})}),$("button",{type:"button",onClick:r,children:"Let's find out"})]})]})}x_($(D_,{}),document.getElementById("app"));