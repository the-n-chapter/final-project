const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Filter-CXpyAMIr.js","assets/index-C5hmzyE5.js","assets/index-UzvniAJy.css"])))=>i.map(i=>d[i]);
import{r as O,a as H,g as $,b as w,R as T,j as b,c as V,_ as z}from"./index-C5hmzyE5.js";var x={exports:{}},E={},D;function R(){if(D)return E;D=1;function r(s){return s&&s.__esModule?s:{default:s}}return E._=r,E}function G(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={},j={},A;function Y(){return A||(A=1,function(r){"use client";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LoadableContext",{enumerable:!0,get:function(){return e}});const e=R()._(O()).default.createContext(null)}(j)),j}var N;function U(){return N||(N=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});const t=R()._(O()),e=Y();function n(u){return u&&u.default?u.default:u}const l=[],o=[];let h=!1;function m(u){let f=u(),i={loading:!0,loaded:null,error:null};return i.promise=f.then(y=>(i.loading=!1,i.loaded=y,y)).catch(y=>{throw i.loading=!1,i.error=y,y}),i}function C(u,f){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},f),y=null;function v(){if(!y){const g=new p(u,i);y={getCurrentValue:g.getCurrentValue.bind(g),subscribe:g.subscribe.bind(g),retry:g.retry.bind(g),promise:g.promise.bind(g)}}return y.promise()}if(typeof window>"u"&&l.push(v),!h&&typeof window<"u"){const g=i.webpack&&typeof G.resolveWeak=="function"?i.webpack():i.modules;g&&o.push(k=>{for(const _ of g)if(k.includes(_))return v()})}function P(){v();const g=t.default.useContext(e.LoadableContext);g&&Array.isArray(i.modules)&&i.modules.forEach(k=>{g(k)})}function S(g,k){P();const _=t.default.useSyncExternalStore(y.subscribe,y.getCurrentValue,y.getCurrentValue);return t.default.useImperativeHandle(k,()=>({retry:y.retry}),[]),t.default.useMemo(()=>_.loading||_.error?t.default.createElement(i.loading,{isLoading:_.loading,pastDelay:_.pastDelay,timedOut:_.timedOut,error:_.error,retry:y.retry}):_.loaded?t.default.createElement(n(_.loaded),g):null,[g,_])}return S.preload=()=>v(),S.displayName="LoadableComponent",t.default.forwardRef(S)}class p{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:f,_opts:i}=this;f.loading&&(typeof i.delay=="number"&&(i.delay===0?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},i.delay)),typeof i.timeout=="number"&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},i.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(y=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(f){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...f},this._callbacks.forEach(i=>i())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(f){return this._callbacks.add(f),()=>{this._callbacks.delete(f)}}constructor(f,i){this._loadFn=f,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(u){return C(m,u)}function a(u,f){let i=[];for(;u.length;){let y=u.pop();i.push(y(f))}return Promise.all(i).then(()=>{if(u.length)return a(u,f)})}d.preloadAll=()=>new Promise((u,f)=>{a(l).then(u,f)}),d.preloadReady=u=>(u===void 0&&(u=[]),new Promise(f=>{const i=()=>(h=!0,f());a(o,u).then(i,i)})),typeof window<"u"&&(window.__NEXT_PRELOADREADY=d.preloadReady);const c=d}(L)),L}var B;function Z(){return B||(B=1,function(r,s){Object.defineProperty(s,"__esModule",{value:!0});function t(p,d){for(var a in d)Object.defineProperty(p,a,{enumerable:!0,get:d[a]})}t(s,{default:function(){return C},noSSR:function(){return m}});const e=R(),n=H();O();const l=e._(U()),o=typeof window>"u";function h(p){return{default:(p==null?void 0:p.default)||p}}function m(p,d){if(delete d.webpack,delete d.modules,!o)return p(d);const a=d.loading;return()=>(0,n.jsx)(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function C(p,d){let a=l.default,c={loading:i=>{let{error:y,isLoading:v,pastDelay:P}=i;return null}};p instanceof Promise?c.loader=()=>p:typeof p=="function"?c.loader=p:typeof p=="object"&&(c={...c,...p}),c={...c,...d};const u=c.loader,f=()=>u!=null?u().then(h):Promise.resolve(h(()=>null));return c.loadableGenerated&&(c={...c,...c.loadableGenerated},delete c.loadableGenerated),typeof c.ssr=="boolean"&&!c.ssr?(delete c.webpack,delete c.modules,m(a,c)):a({...c,loader:f})}(typeof s.default=="function"||typeof s.default=="object"&&s.default!==null)&&typeof s.default.__esModule>"u"&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),r.exports=s.default)}(x,x.exports)),x.exports}var q,M;function J(){return M||(M=1,q=Z()),q}var X=J();const K=$(X);function I(){return I=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r},I.apply(this,arguments)}var Q={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(r){},onComplete:function(r){},preStringTyped:function(r,s){},onStringTyped:function(r,s){},onLastStringBackspaced:function(r){},onTypingPaused:function(r,s){},onTypingResumed:function(r,s){},onReset:function(r){},onStop:function(r,s){},onStart:function(r,s){},onDestroy:function(r){}},W=new(function(){function r(){}var s=r.prototype;return s.load=function(t,e,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=I({},Q,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(C){return C.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var l=Array.prototype.slice.apply(t.stringsElement.children),o=l.length;if(o)for(var h=0;h<o;h+=1)t.strings.push(l[h].innerHTML.trim())}for(var m in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[m]=m;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},s.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},s.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},s.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},r}()),F=new(function(){function r(){}var s=r.prototype;return s.typeHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var l=t.substring(e).charAt(0);if(l==="<"||l==="&"){var o;for(o=l==="<"?">":";";t.substring(e+1).charAt(0)!==o&&!(1+ ++e>t.length););e++}return e},s.backSpaceHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var l=t.substring(e).charAt(0);if(l===">"||l===";"){var o;for(o=l===">"?"<":"&";t.substring(e-1).charAt(0)!==o&&!(--e<0););e--}return e},r}()),tt=function(){function r(t,e){W.load(this,e,t),this.begin()}var s=r.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var l=this.humanizer(this.typeSpeed),o=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=F.typeHtmlChars(t,e,n);var h=0,m=t.substring(e);if(m.charAt(0)==="^"&&/^\^\d+/.test(m)){var C=1;C+=(m=/\d+/.exec(m)[0]).length,h=parseInt(m),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+C),n.toggleBlinking(!0)}if(m.charAt(0)==="`"){for(;t.substring(e+o).charAt(0)!=="`"&&(o++,!(e+o>t.length)););var p=t.substring(0,e),d=t.substring(p.length+1,e+o),a=t.substring(e+o+1);t=p+d+a,o--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},h)},l):this.setPauseStatus(t,e,!0)},s.keepTyping=function(t,e,n){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var l=t.substring(0,e+=n);this.replaceText(l),this.typewrite(t,e)},s.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},s.backspace=function(t,e){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var l=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=F.backSpaceHtmlChars(t,e,n);var o=t.substring(0,e);if(n.replaceText(o),n.smartBackspace){var h=n.strings[n.arrayPos+1];n.stopNum=h&&o===h.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},l)}else this.setPauseStatus(t,e,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},r}();const et=w.memo(({style:r,className:s,typedRef:t,parseRef:e,stopped:n,children:l,startWhenVisible:o,...h})=>{const m=w.useRef(null),C=w.useMemo(()=>{var d;return[...Object.values(h).filter(a=>typeof a=="boolean"||typeof a=="number"||typeof a=="string"),(d=h.strings)==null?void 0:d.join(",")]},[h]);w.useEffect(()=>{const d=e&&e(m)||m.current,a=new tt(d,{...h});if((n||o)&&(a==null||a.stop()),o){const c=new IntersectionObserver(([u])=>{u.isIntersecting&&(a==null||a.start(),c.disconnect())});c.observe(d)}return t&&a&&t(a),()=>{a.destroy()}},C);const p=l?T.cloneElement(l,{ref:m}):T.createElement("span",{style:r,ref:m});return T.createElement("span",{style:r,className:s,"data-testid":"react-typed"},p)});function nt(){return b.jsxs("div",{children:[b.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline gap-3 md:gap-5 mb-4 md:mb-8",children:[b.jsx("h1",{className:"text-6xl md:text-8xl font-bold font-noto-serif mt-6",children:"Ig Nobelpedia."}),b.jsx("span",{className:"text-sm text-slate-300",children:"/ɪɡ noʊˌbɛlˈpiːdiə/"})]}),b.jsxs("h3",{className:"text-1xl md:text-2xl mb-4 py-4 font-manrope",children:[b.jsx("span",{children:"For achievements that #️⃣ "}),b.jsx(et,{strings:['<span class="text-slate-300">first make people laugh </span>','<span class="text-slate-300">then make them think</span>'],typeSpeed:60,startDelay:1500,backDelay:2e3,backSpeed:30,loop:!0,loopCount:1/0,showCursor:!0,cursorChar:" _",className:"[&_.typed-cursor]:text-sky-400"})]})]})}function st({className:r,...s}){return b.jsx("div",{className:V("animate-pulse rounded-md bg-primary/10",r),...s})}const rt=K(()=>z(()=>import("./Filter-CXpyAMIr.js"),__vite__mapDeps([0,1,2])),{loading:()=>b.jsx(st,{className:"h-screen w-full"}),ssr:!1});function it(){return b.jsxs("main",{className:"container mx-auto py-8 px-4",children:[b.jsx(nt,{}),b.jsx(rt,{})]})}const at=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));export{at as M,st as S,K as d};
