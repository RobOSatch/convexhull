(this["webpackJsonpconvex-hull-visualizer"]=this["webpackJsonpconvex-hull-visualizer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),l=n.n(r),o=(n(17),n(18),n(19),n(2)),u=n(3),c=n(5),s=n(4);function h(e,t,n){return Math.sign((t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x))}function f(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x<t.x&&(t=e[n]);return t}function d(e){return e*e}function v(e,t){return d(e.x-t.x)+d(e.y-t.y)}function m(e,t,n){return Math.sqrt(function(e,t,n){var a=v(t,n);if(0==a)return v(e,t);var i=((e.x-t.x)*(n.x-t.x)+(e.y-t.y)*(n.y-t.y))/a;return i=Math.max(0,Math.min(1,i)),v(e,{x:t.x+i*(n.x-t.x),y:t.y+i*(n.y-t.y)})}(e,t,n))}function b(e,t,n,a,i){if(0!==e.length){for(var r=e[0],l=m(r,t,n),o=0;o<e.length;++o){m(e[o],t,n)>l&&(l=m(r=e[o],t,n))}for(var u=0;u<a.length;++u)if(a[u]===t){a.splice(u,0,r);break}i.push({a:t,b:n,currBest:r,hull:a.slice(0)}),i.push({a:null,b:null,currBest:null,hull:a.slice(0)});for(var c=[],s=[],f=0;f<e.length;++f){var d=h(t,r,e[f])>0,v=h(n,r,e[f])<0;d&&v||(d||e[f]===t||e[f]===r?v||e[f]===n||e[f]===r||s.push(e[f]):c.push(e[f]))}b(c,t,r,a,i),b(s,r,n,a,i)}}var g,y,p,x=[],w=[],B=15,P=10,k=!1,E=function(e){p.fillStyle="cornflowerblue";for(var t=function(t){w.push(setTimeout((function(){for(var n=x[t],a=function(t){w.push(setTimeout((function(){e.beginPath(),e.arc(n.x,n.y,t*B/5,0,2*Math.PI),e.fill()}),50*t))},i=0;i<5;++i)a(i)}),60*t/10))},n=0;n<x.length;++n)t(n)},S=function(){p.fillStyle="cornflowerblue";for(var e=0;e<x.length;++e)for(var t=x[e],n=0;n<5;++n)p.beginPath(),p.arc(t.x,t.y,n*B/5,0,2*Math.PI),p.fill()},T=function(){w.forEach((function(e){clearTimeout(e)})),w=[]},M=function(e){k?F():function(){k=!0,T();for(var t=function(e){for(var t=[],n=f(e),a=e[0],i=[],r=0;a!==i[0];){i.push(n),a=e[0],t.push({a:i[r],b:a,currBest:a,hull:i.slice(0)});for(var l=0;l<e.length;++l)t.push({a:i[r],b:e[l],currBest:a,hull:i.slice(0)}),a!==n&&-1!==h(i[r],a,e[l])||(a=e[l],t.push({a:i[r],b:e[l],currBest:a,hull:i.slice(0)}));r+=1,n=a}return i.push(i[0]),t.push({a:null,b:null,currBest:null,hull:i}),t}(x),n=function(n){w.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);var a=t[n];p.lineWidth=P,null!==a.a&&(p.beginPath(),p.strokeStyle="mediumpurple",p.moveTo(a.a.x,a.a.y),p.lineTo(a.b.x,a.b.y),p.stroke(),p.beginPath(),p.strokeStyle="cornflowerblue",p.moveTo(a.a.x,a.a.y),p.lineTo(a.currBest.x,a.currBest.y),p.stroke()),p.beginPath(),p.strokeStyle="royalblue",function(e){p.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length;++t)p.lineTo(e[t].x,e[t].y);p.fillStyle="rgb(100,149,237, 0.08)",p.fill()}(a.hull),p.stroke(),S(),p.fillStyle="royalblue",p.moveTo(a.hull[0].x,a.hull[0].y);for(var i=0;i<a.hull.length;++i)p.beginPath(),p.arc(a.hull[i].x,a.hull[i].y,B,0,2*Math.PI),p.fill();n===t.length-1&&(k=!1,e.animationFinished())}),60*n/1.5))},a=0;a<t.length;++a)n(a)}()},C=function(e){k?F():function(){k=!0,T();for(var t=function(e){var t=[],n=[],a=f(e),i=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x>t.x&&(t=e[n]);return t}(e);n.push(a),n.push(i),t.push({a:a,b:i,currBest:i,hull:n.slice(0)});for(var r=[],l=[],o=0;o<e.length;++o){var u=h(a,i,e[o]);u<0&&r.push(e[o]),u>0&&l.push(e[o])}return b(r,a,i,n,t),b(l,i,a,n,t),t}(x),n=function(n){w.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);var a=t[n];p.lineWidth=P,null!==a.a&&(p.beginPath(),p.strokeStyle="mediumpurple",p.moveTo(a.a.x,a.a.y),p.lineTo(a.b.x,a.b.y),p.stroke()),null!=a.currBest&&(p.beginPath(),p.strokeStyle="cornflowerblue",p.moveTo(a.a.x,a.a.y),p.lineTo(a.currBest.x,a.currBest.y),p.stroke()),p.beginPath(),p.strokeStyle="royalblue",function(e){p.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length+1;++t){var n=t%e.length;p.lineTo(e[n].x,e[n].y)}p.fillStyle="rgb(100,149,237, 0.08)",p.fill()}(a.hull),p.stroke(),S(),p.fillStyle="royalblue",p.moveTo(a.hull[0].x,a.hull[0].y);for(var i=0;i<a.hull.length;++i)p.beginPath(),p.arc(a.hull[i].x,a.hull[i].y,B,0,2*Math.PI),p.fill();n===t.length-1&&(k=!1,e.animationFinished())}),60*n/.2))},a=0;a<t.length;++a)n(a)}()},F=function(){k=!1,T(),p.clearRect(0,0,p.canvas.width,p.canvas.height),S()};function R(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var j=Object(a.forwardRef)((function(e,t){var n=Object(a.useRef)();return B=7.5*window.devicePixelRatio,P=5*window.devicePixelRatio,Object(a.useImperativeHandle)(t,(function(){return{generateRandomPoints:function(){w.forEach((function(e){clearTimeout(e)})),w=[],p.clearRect(0,0,p.canvas.width,p.canvas.height),x=[];for(var e=0;e<100;++e){var t={x:R(200,g-200),y:R(200,y-200)};x.push(t)}E(p)},runJarvisMarch:function(){M(e)},runQuickhull:function(){C(e)},runDeletePoints:function(){!function(){T();for(var e=function(e){w.push(setTimeout((function(){p.clearRect(0,0,p.canvas.width,p.canvas.height);for(var t=0;t<x.length;++t){var n=x[t];p.beginPath(),p.arc(n.x,n.y,3*(3-e),0,2*Math.PI),p.fill()}3===e&&(x=[],p.clearRect(0,0,p.canvas.width,p.canvas.height))}),60*e/1.5))},t=0;t<4;++t)e(t)}()}}})),Object(a.useEffect)((function(){var e=n.current,t=e.getContext("2d");p=t;var a=window.devicePixelRatio,i=getComputedStyle(e).getPropertyValue("width").slice(0,-2),r=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=window.innerWidth*a,e.height=window.innerHeight*a*.8,e.style.width="".concat(i,"px"),e.style.height="".concat(.8*r,"px"),g=e.width,y=e.height,function(){for(var e=0;e<100;++e){var t={x:R(g/10,g-g/10),y:R(y/10,y-y/10)};x.push(t)}}(),t.beginPath(),t.fillStyle="cornflowerblue",E(t),t.fill(),e.addEventListener("click",(function(e){!function(e,t){p.fillStyle="cornflowerblue";var n={x:e.clientX*window.devicePixelRatio,y:e.clientY*window.devicePixelRatio-window.devicePixelRatio*window.innerHeight*.146};x.push(n);for(var a=function(e){w.push(setTimeout((function(){p.beginPath(),p.arc(n.x,n.y,e*B/5,0,2*Math.PI),p.fill()}),50*e))},i=0;i<5;++i)a(i)}(e)}),!1);return function(){cancelAnimationFrame(void 0)}})),i.a.createElement("div",{className:"convexhull"},i.a.createElement("canvas",{ref:n,style:{width:"100%",height:"100%"}}))})),O=n(10),N=n(11),I=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).childFunction=function(e){a.props.functionCallFromParent(e);var t=document.getElementsByClassName("algoBtn"),n=[],i=a.state.numPoints,r=!1;if(0!==e&&4!==e){if(a.state.enabled[0]){for(var l=0;l<a.state.enabled.length;++l)n[l]=!1;n[e]=!0,t[e-1].id="playing"}else{for(var o=0;o<a.state.enabled.length;++o)n[o]=!0,t[e-1].id="none";r=!0}a.setState({numBars:i,enabled:n,sliderEnabled:r})}},a.updateBars=function(){a.props.updateBars()},a.state={numPoints:100,enabled:[!0,!0,!0,!0,!0,!0,!0,!0,!0],sliderEnabled:!0},a}return Object(u.a)(n,[{key:"enableUI",value:function(){for(var e=document.getElementsByClassName("algoBtn"),t=[!0],n=0;n<e.length;++n)t.push(!0),e[n].id="none";t.push(!0);var a=this.state.numPoints;this.setState({numBars:a,enabled:t,sliderEnabled:!0})}},{key:"setNumBars",value:function(){var e=document.getElementById("numberOfBars").value;this.setState({numBars:e}),this.updateBars()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:function(){return e.childFunction(0)},className:"randomizeBtn",disabled:!this.state.enabled[0]},"Generate Points"),i.a.createElement("button",{onClick:function(){return e.childFunction(1)},className:"algoBtn",id:"jarvisBtn",disabled:!this.state.enabled[1]},"Jarvis March"),i.a.createElement("button",{onClick:function(){return e.childFunction(2)},className:"algoBtn",id:"grahamBtn",disabled:!this.state.enabled[2]},"Graham Scan"),i.a.createElement("button",{onClick:function(){return e.childFunction(3)},className:"algoBtn",id:"quickhullBtn",disabled:!this.state.enabled[3]},"QuickHull"),i.a.createElement("button",{onClick:function(){return e.childFunction(4)},className:"deleteBtn",disabled:!this.state.enabled[4]},i.a.createElement(O.a,{className:"trash",transform:"shrink-4 up-3",size:"2x",icon:N.a})))}}]),n}(a.Component),J=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).parentFunction=function(t){t;var n=e.refs.child;switch(t){case 0:n.generateRandomPoints();break;case 1:n.runJarvisMarch();break;case 2:n.runGrahamScan();break;case 3:n.runQuickhull();break;case 4:n.runDeletePoints()}},e.updateBars=function(){},e.animationFinished=function(){e.refs.controlChild.enableUI()},e}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(I,{ref:"controlChild",functionCallFromParent:this.parentFunction.bind(this),updateBars:this.updateBars.bind(this)}),i.a.createElement(j,{ref:"child",animationFinished:this.animationFinished.bind(this)}))}}]),n}(a.Component);var W=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a92bbca0.chunk.js.map