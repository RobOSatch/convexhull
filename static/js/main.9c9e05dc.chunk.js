(this["webpackJsonpconvex-hull-visualizer"]=this["webpackJsonpconvex-hull-visualizer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),l=n.n(i),o=(n(17),n(18),n(19),n(2)),u=n(3),c=n(5),s=n(4);function h(e,t,n){return Math.sign((t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x))}function f(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x<t.x&&(t=e[n]);return t}function d(e){return e*e}function v(e,t){return d(e.x-t.x)+d(e.y-t.y)}function m(e,t,n){return Math.sqrt(function(e,t,n){var a=v(t,n);if(0==a)return v(e,t);var r=((e.x-t.x)*(n.x-t.x)+(e.y-t.y)*(n.y-t.y))/a;return r=Math.max(0,Math.min(1,r)),v(e,{x:t.x+r*(n.x-t.x),y:t.y+r*(n.y-t.y)})}(e,t,n))}function b(e,t,n,a,r){if(0!==e.length){for(var i=e[0],l=m(i,t,n),o=0;o<e.length;++o){m(e[o],t,n)>l&&(l=m(i=e[o],t,n))}for(var u=0;u<a.length;++u)if(a[u]===t){a.splice(u,0,i);break}r.push({a:t,b:n,currBest:i,hull:a.slice(0)}),r.push({a:null,b:null,currBest:null,hull:a.slice(0)});for(var c=[],s=[],f=0;f<e.length;++f){var d=h(t,i,e[f])>0,v=h(n,i,e[f])<0;d&&v||(d||e[f]===t||e[f]===i?v||e[f]===n||e[f]===i||s.push(e[f]):c.push(e[f]))}b(c,t,i,a,r),b(s,i,n,a,r)}}var g,y,p,x=[],k=[],B=!1,P=function(e){p.fillStyle="cornflowerblue";for(var t=function(t){k.push(setTimeout((function(){for(var n=x[t],a=function(t){k.push(setTimeout((function(){e.beginPath(),e.arc(n.x,n.y,3*t,0,2*Math.PI),e.fill()}),50*t))},r=0;r<5;++r)a(r)}),60*t/10))},n=0;n<x.length;++n)t(n)},w=function(){p.fillStyle="cornflowerblue";for(var e=0;e<x.length;++e)for(var t=x[e],n=0;n<5;++n)p.beginPath(),p.arc(t.x,t.y,3*n,0,2*Math.PI),p.fill()},S=function(){k.forEach((function(e){clearTimeout(e)})),k=[]},E=function(e){B?M():function(){B=!0,S();for(var t=function(e){for(var t=[],n=f(e),a=e[0],r=[],i=0;a!==r[0];){r.push(n),a=e[0],t.push({a:r[i],b:a,currBest:a,hull:r.slice(0)});for(var l=0;l<e.length;++l)t.push({a:r[i],b:e[l],currBest:a,hull:r.slice(0)}),a!==n&&-1!==h(r[i],a,e[l])||(a=e[l],t.push({a:r[i],b:e[l],currBest:a,hull:r.slice(0)}));i+=1,n=a}return r.push(r[0]),t.push({a:null,b:null,currBest:null,hull:r}),t}(x),n=function(n){k.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);var a=t[n];p.lineWidth=10,null!==a.a&&(p.beginPath(),p.strokeStyle="mediumpurple",p.moveTo(a.a.x,a.a.y),p.lineTo(a.b.x,a.b.y),p.stroke(),p.beginPath(),p.strokeStyle="cornflowerblue",p.moveTo(a.a.x,a.a.y),p.lineTo(a.currBest.x,a.currBest.y),p.stroke()),p.beginPath(),p.strokeStyle="royalblue",function(e){p.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length;++t)p.lineTo(e[t].x,e[t].y);p.fillStyle="rgb(100,149,237, 0.08)",p.fill()}(a.hull),p.stroke(),w(),p.fillStyle="royalblue",p.moveTo(a.hull[0].x,a.hull[0].y);for(var r=0;r<a.hull.length;++r)p.beginPath(),p.arc(a.hull[r].x,a.hull[r].y,15,0,2*Math.PI),p.fill();n===t.length-1&&(B=!1,e.animationFinished())}),60*n/1.5))},a=0;a<t.length;++a)n(a)}()},T=function(e){B?M():function(){B=!0,S();for(var t=function(e){var t=[],n=[],a=f(e),r=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x>t.x&&(t=e[n]);return t}(e);n.push(a),n.push(r),t.push({a:a,b:r,currBest:r,hull:n.slice(0)});for(var i=[],l=[],o=0;o<e.length;++o){var u=h(a,r,e[o]);u<0&&i.push(e[o]),u>0&&l.push(e[o])}return b(i,a,r,n,t),b(l,r,a,n,t),t}(x),n=function(n){k.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);var a=t[n];p.lineWidth=10,null!==a.a&&(p.beginPath(),p.strokeStyle="mediumpurple",p.moveTo(a.a.x,a.a.y),p.lineTo(a.b.x,a.b.y),p.stroke()),null!=a.currBest&&(p.beginPath(),p.strokeStyle="cornflowerblue",p.moveTo(a.a.x,a.a.y),p.lineTo(a.currBest.x,a.currBest.y),p.stroke()),p.beginPath(),p.strokeStyle="royalblue",function(e){p.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length+1;++t){var n=t%e.length;p.lineTo(e[n].x,e[n].y)}p.fillStyle="rgb(100,149,237, 0.08)",p.fill()}(a.hull),p.stroke(),w(),p.fillStyle="royalblue",p.moveTo(a.hull[0].x,a.hull[0].y);for(var r=0;r<a.hull.length;++r)p.beginPath(),p.arc(a.hull[r].x,a.hull[r].y,15,0,2*Math.PI),p.fill();n===t.length-1&&(B=!1,e.animationFinished())}),60*n/.2))},a=0;a<t.length;++a)n(a)}()},M=function(){B=!1,S(),p.clearRect(0,0,p.canvas.width,p.canvas.height),w()};function R(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var C=Object(a.forwardRef)((function(e,t){var n=Object(a.useRef)();return Object(a.useImperativeHandle)(t,(function(){return{generateRandomPoints:function(){k.forEach((function(e){clearTimeout(e)})),k=[],p.clearRect(0,0,p.canvas.width,p.canvas.height),x=[];for(var e=0;e<100;++e){var t={x:R(200,g-200),y:R(200,y-200)};x.push(t)}P(p)},runJarvisMarch:function(){E(e)},runQuickhull:function(){T(e)},runDeletePoints:function(){!function(){S();for(var e=function(e){k.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);for(var t=0;t<x.length;++t){var n=x[t];p.beginPath(),p.arc(n.x,n.y,3*(3-e),0,2*Math.PI),p.fill()}3===e&&(x=[],p.clearRect(0,0,p.canvas.width,p.canvas.height))}),60*e/1.5))},t=0;t<4;++t)e(t)}()}}})),Object(a.useEffect)((function(){var e=n.current,t=e.getContext("2d");p=t;var a=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),r=getComputedStyle(e).getPropertyValue("width").slice(0,-2),i=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=r*a,e.height=i*a,e.style.width="".concat(r,"px"),e.style.height="".concat(i,"px"),g=e.width,y=e.height,function(){for(var e=0;e<100;++e){var t={x:R(g/10,g-g/10),y:R(y/10,y-y/10)};x.push(t)}}(),t.beginPath(),t.fillStyle="cornflowerblue",P(t),t.fill(),e.addEventListener("click",(function(e){!function(e,t){p.fillStyle="cornflowerblue";var n={x:e.clientX*t,y:e.clientY*t-350};x.push(n);for(var a=function(e){k.push(setTimeout((function(){p.beginPath(),p.arc(n.x,n.y,3*e,0,2*Math.PI),p.fill()}),50*e))},r=0;r<5;++r)a(r)}(e,a)}),!1);return function(){cancelAnimationFrame(void 0)}})),r.a.createElement("canvas",{ref:n,style:{width:"100%",height:"1080px"}})})),F=n(10),j=n(11),O=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).childFunction=function(e){a.props.functionCallFromParent(e);var t=document.getElementsByClassName("algoBtn"),n=[],r=a.state.numPoints,i=!1;if(0!==e&&4!==e){if(a.state.enabled[0]){for(var l=0;l<a.state.enabled.length;++l)n[l]=!1;n[e]=!0,t[e-1].id="playing"}else{for(var o=0;o<a.state.enabled.length;++o)n[o]=!0,t[e-1].id="none";i=!0}a.setState({numBars:r,enabled:n,sliderEnabled:i})}},a.updateBars=function(){a.props.updateBars()},a.state={numPoints:100,enabled:[!0,!0,!0,!0,!0,!0,!0,!0,!0],sliderEnabled:!0},a}return Object(u.a)(n,[{key:"enableUI",value:function(){for(var e=document.getElementsByClassName("algoBtn"),t=[!0],n=0;n<e.length;++n)t.push(!0),e[n].id="none";t.push(!0);var a=this.state.numPoints;this.setState({numBars:a,enabled:t,sliderEnabled:!0})}},{key:"setNumBars",value:function(){var e=document.getElementById("numberOfBars").value;this.setState({numBars:e}),this.updateBars()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:function(){return e.childFunction(0)},className:"randomizeBtn",disabled:!this.state.enabled[0]},"Generate Points"),r.a.createElement("button",{onClick:function(){return e.childFunction(1)},className:"algoBtn",id:"jarvisBtn",disabled:!this.state.enabled[1]},"Jarvis March"),r.a.createElement("button",{onClick:function(){return e.childFunction(2)},className:"algoBtn",id:"grahamBtn",disabled:!this.state.enabled[2]},"Graham Scan"),r.a.createElement("button",{onClick:function(){return e.childFunction(3)},className:"algoBtn",id:"quickhullBtn",disabled:!this.state.enabled[3]},"QuickHull"),r.a.createElement("button",{onClick:function(){return e.childFunction(4)},className:"deleteBtn",disabled:!this.state.enabled[4]},r.a.createElement(F.a,{className:"trash",transform:"shrink-4 up-3",size:"2x",icon:j.a})))}}]),n}(a.Component),I=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).parentFunction=function(t){t;var n=e.refs.child;switch(t){case 0:n.generateRandomPoints();break;case 1:n.runJarvisMarch();break;case 2:n.runGrahamScan();break;case 3:n.runQuickhull();break;case 4:n.runDeletePoints()}},e.updateBars=function(){},e.animationFinished=function(){e.refs.controlChild.enableUI()},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{ref:"controlChild",functionCallFromParent:this.parentFunction.bind(this),updateBars:this.updateBars.bind(this)}),r.a.createElement(C,{ref:"child",animationFinished:this.animationFinished.bind(this)}))}}]),n}(a.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.9c9e05dc.chunk.js.map