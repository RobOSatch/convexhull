(this["webpackJsonpconvex-hull-visualizer"]=this["webpackJsonpconvex-hull-visualizer"]||[]).push([[0],{12:function(e,t,n){e.exports=n(25)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),l=n.n(r),o=(n(17),n(18),n(19),n(2)),s=n(3),c=n(5),u=n(4);function h(e,t,n){return Math.sign((t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x))}function f(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x<t.x&&(t=e[n]);return t}function d(e){return e*e}function m(e,t){return d(e.x-t.x)+d(e.y-t.y)}function p(e,t,n){return Math.sqrt(function(e,t,n){var a=m(t,n);if(0==a)return m(e,t);var i=((e.x-t.x)*(n.x-t.x)+(e.y-t.y)*(n.y-t.y))/a;return i=Math.max(0,Math.min(1,i)),m(e,{x:t.x+i*(n.x-t.x),y:t.y+i*(n.y-t.y)})}(e,t,n))}function v(e,t,n,a,i){if(0!==e.length){for(var r=e[0],l=p(r,t,n),o=0;o<e.length;++o){i.push({top:e[o],a:t,b:n,currBest:r,hull:a.slice(0)}),p(e[o],t,n)>l&&(l=p(r=e[o],t,n))}for(var s=0;s<a.length;++s)if(a[s]===t){a.splice(s,0,r);break}i.push({top:null,a:t,b:n,currBest:r,hull:a.slice(0)}),i.push({top:null,a:null,b:null,currBest:null,hull:a.slice(0)});for(var c=[],u=[],f=0;f<e.length;++f){var d=h(t,r,e[f])>0,m=h(n,r,e[f])<0;d&&m||(d||e[f]===t||e[f]===r?m||e[f]===n||e[f]===r||u.push(e[f]):c.push(e[f]))}v(c,t,r,a,i),v(u,r,n,a,i)}}function b(e,t,n){var a=(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y);return 0==a?0:a<0?1:-1}function g(e,t){var n=t.x-e.x,a=t.y-e.y;return 0===n&&0===a?0:180*Math.atan2(a,n)/Math.PI}var y,x,k,w,B=[],P=[],T=15,S=10,E=!1,C=function(e){k.fillStyle="cornflowerblue";for(var t=function(t){P.push(setTimeout((function(){for(var n=B[t],a=function(t){P.push(setTimeout((function(){e.beginPath(),e.arc(n.x,n.y,t*T/5,0,2*Math.PI),e.fill()}),50*t))},i=0;i<5;++i)a(i)}),120*t/10))},n=0;n<B.length;++n)t(n)},R=function(){k.fillStyle="cornflowerblue";for(var e=0;e<B.length;++e)for(var t=B[e],n=0;n<5;++n)k.beginPath(),k.arc(t.x,t.y,n*T/5,0,2*Math.PI),k.fill()},M=function(e){k.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length;++t)k.lineTo(e[t].x,e[t].y);k.fillStyle="rgb(65,105,225, 0.1)",k.fill()},F=function(){P.forEach((function(e){clearTimeout(e)})),P=[]},O=function(e){E?j():function(){E=!0,F();for(var t=function(e){for(var t=[],n=f(e),a=e[0],i=[],r=0;a!==i[0];){i.push(n),a=e[0],t.push({a:i[r],b:a,currBest:a,hull:i.slice(0)});for(var l=0;l<e.length;++l)t.push({a:i[r],b:e[l],currBest:a,hull:i.slice(0)}),a!==n&&-1!==h(i[r],a,e[l])||(a=e[l],t.push({a:i[r],b:e[l],currBest:a,hull:i.slice(0)}));r+=1,n=a}return i.push(i[0]),t.push({a:null,b:null,currBest:null,hull:i}),t}(B),n=function(n){P.push(setTimeout((function(){k.clearRect(0,0,k.canvas.width,k.canvas.height);var a=t[n];k.lineWidth=S,null!==a.a&&(k.beginPath(),k.strokeStyle="mediumpurple",k.moveTo(a.a.x,a.a.y),k.lineTo(a.b.x,a.b.y),k.stroke(),k.beginPath(),k.strokeStyle="cornflowerblue",k.moveTo(a.a.x,a.a.y),k.lineTo(a.currBest.x,a.currBest.y),k.stroke()),k.beginPath(),k.strokeStyle="royalblue",M(a.hull),k.stroke(),R(),k.fillStyle="royalblue",k.moveTo(a.hull[0].x,a.hull[0].y);for(var i=0;i<a.hull.length;++i)k.beginPath(),k.arc(a.hull[i].x,a.hull[i].y,T,0,2*Math.PI),k.fill();n===t.length-1&&(E=!1,e.animationFinished())}),120*n/1.5))},a=0;a<t.length;++a)n(a)}()},I=function(e){E?j():function(){E=!0,F();for(var t=function(e){var t=[],n=[],a=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n].y===t.y?e[n].x<t.x&&(t=e[n]):e[n].y>t.y&&(t=e[n]);return t}(e);e.sort((function(e,t){return g(a,e)-g(a,t)}));for(var i=0;i<e.length;++i){for(;n.length>1&&b(n[n.length-2],n[n.length-1],e[i])<=0;)t.push({a:n[n.length-1],b:n[n.length-1],currBest:e[i],hull:n.slice(0)}),n.pop();n.length>1&&t.push({a:n[n.length-1],b:n[n.length-1],currBest:e[i],hull:n.slice(0)}),n.push(e[i])}return n.push(n[0]),t.push({a:null,b:null,currBest:null,hull:n.slice(0)}),t}(B),n=function(n){P.push(setTimeout((function(){k.clearRect(0,0,k.canvas.width,k.canvas.height);var a=t[n];k.lineWidth=S,null!==a.a&&(k.beginPath(),k.strokeStyle="royalblue",k.moveTo(a.a.x,a.a.y),k.lineTo(a.b.x,a.b.y),k.stroke(),k.beginPath(),k.strokeStyle="mediumpurple",k.moveTo(a.b.x,a.b.y),k.lineTo(a.currBest.x,a.currBest.y),k.stroke()),k.beginPath(),k.strokeStyle="royalblue",M(a.hull),k.stroke(),R(),k.fillStyle="royalblue",k.moveTo(a.hull[0].x,a.hull[0].y);for(var i=0;i<a.hull.length;++i)k.beginPath(),k.arc(a.hull[i].x,a.hull[i].y,T,0,2*Math.PI),k.fill();n===t.length-1&&(E=!1,e.animationFinished())}),120*n/.4))},a=0;a<t.length;++a)n(a)}()},N=function(e){E?j():function(){E=!0,F();for(var t=function(e){var t=[],n=[],a=f(e),i=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n].x>t.x&&(t=e[n]);return t}(e);n.push(a),n.push(i),t.push({top:null,a:a,b:i,currBest:i,hull:n.slice(0)});for(var r=[],l=[],o=0;o<e.length;++o){var s=h(a,i,e[o]);s<0&&r.push(e[o]),s>0&&l.push(e[o])}return v(r,a,i,n,t),v(l,i,a,n,t),t}(B),n=function(n){P.push(setTimeout((function(){k.clearRect(0,0,k.canvas.width,k.canvas.height);var a=t[n];k.lineWidth=S,null!==a.top?(k.beginPath(),k.strokeStyle="mediumpurple",k.moveTo(a.a.x,a.a.y),k.lineTo(a.top.x,a.top.y),k.stroke(),k.beginPath(),k.strokeStyle="mediumpurple",k.moveTo(a.b.x,a.b.y),k.lineTo(a.top.x,a.top.y),k.stroke(),k.beginPath(),k.strokeStyle="cornflowerblue",k.moveTo(a.a.x,a.a.y),k.lineTo(a.currBest.x,a.currBest.y),k.stroke(),k.beginPath(),k.strokeStyle="cornflowerblue",k.moveTo(a.b.x,a.b.y),k.lineTo(a.currBest.x,a.currBest.y),k.stroke(),k.beginPath(),k.strokeStyle="cornflowerblue",k.moveTo(a.a.x,a.a.y),k.lineTo(a.b.x,a.b.y),k.stroke()):(null!==a.a&&(k.beginPath(),k.strokeStyle="mediumpurple",k.moveTo(a.a.x,a.a.y),k.lineTo(a.b.x,a.b.y),k.stroke()),null!=a.currBest&&(k.beginPath(),k.strokeStyle="cornflowerblue",k.moveTo(a.a.x,a.a.y),k.lineTo(a.currBest.x,a.currBest.y),k.stroke())),k.beginPath(),k.strokeStyle="royalblue",function(e){k.moveTo(e[0].x,e[0].y);for(var t=1;t<e.length+1;++t){var n=t%e.length;k.lineTo(e[n].x,e[n].y)}k.fillStyle="rgb(65,105,225, 0.1)",k.fill()}(a.hull),k.stroke(),R(),k.fillStyle="royalblue",k.moveTo(a.hull[0].x,a.hull[0].y);for(var i=0;i<a.hull.length;++i)k.beginPath(),k.arc(a.hull[i].x,a.hull[i].y,T,0,2*Math.PI),k.fill();n===t.length-1&&(E=!1,e.animationFinished())}),120*n/.75))},a=0;a<t.length;++a)n(a)}()},j=function(){E=!1,F(),k.clearRect(0,0,k.canvas.width,k.canvas.height),R()};function D(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var G=Object(a.forwardRef)((function(e,t){var n=Object(a.useRef)();T=7.5*window.devicePixelRatio,S=5*window.devicePixelRatio,w=e,Object(a.useImperativeHandle)(t,(function(){return{generateRandomPoints:function(){P.forEach((function(e){clearTimeout(e)})),P=[],k.clearRect(0,0,k.canvas.width,k.canvas.height),B=[];for(var e=0;e<50;++e){var t={x:D(200,y-200),y:D(200,x-200)};B.push(t)}C(k)},runJarvisMarch:function(){O(e)},runGrahamScan:function(){I(e)},runQuickhull:function(){N(e)},runDeletePoints:function(){!function(){null!==w&&w.emptyCallback(!0),F();for(var e=function(e){P.push(setTimeout((function(){k.clearRect(0,0,k.canvas.width,k.canvas.height);for(var t=0;t<B.length;++t){var n=B[t];k.beginPath(),k.arc(n.x,n.y,3*(3-e),0,2*Math.PI),k.fill()}3===e&&(B=[],k.clearRect(0,0,k.canvas.width,k.canvas.height))}),35*e))},t=0;t<4;++t)e(t)}()}}})),Object(a.useEffect)((function(){var e=n.current,t=e.getContext("2d");k=t;var a=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),i=getComputedStyle(e).getPropertyValue("width").slice(0,-2),r=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=i*a,e.height=r*a,e.style.width="".concat(i,"px"),e.style.height="".concat(r,"px"),y=e.width,x=e.height,function(){null!==w&&w.emptyCallback(!1);for(var e=0;e<50;++e){var t={x:D(y/10,y-y/10),y:D(x/10,x-x/10)};B.push(t)}}(),t.beginPath(),t.fillStyle="cornflowerblue",C(t),t.fill(),e.addEventListener("click",(function(e){!function(e,t){null!==w&&w.emptyCallback(!1),k.fillStyle="cornflowerblue";var n={x:e.clientX*window.devicePixelRatio,y:e.clientY*window.devicePixelRatio-175-90*window.devicePixelRatio};B.push(n);for(var a=function(e){P.push(setTimeout((function(){k.beginPath(),k.arc(n.x,n.y,e*T/5,0,2*Math.PI),k.fill()}),50*e))},i=0;i<5;++i)a(i)}(e)}),!1);return function(){cancelAnimationFrame(void 0)}}));var r={width:"100%",height:window.innerHeight-400};return i.a.createElement("div",{className:"convexhull"},i.a.createElement("canvas",{ref:n,style:r}))})),J=n(8),Q=n(9),z=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).childFunction=function(e){var t=document.getElementsByClassName("algoBtn"),n=[],i=a.state.numPoints,r=!1;if(0!==e&&4!==e){if(a.state.enabled[0]){for(var l=0;l<a.state.enabled.length;++l)n[l]=!1;n[e]=!0,t[e-1].id="playing",a.props.functionCallFromParent(e,!0)}else{for(var o=0;o<a.state.enabled.length;++o)n[o]=!0,t[e-1].id="none";r=!0,a.props.functionCallFromParent(e,!1)}a.setState({numBars:i,enabled:n,sliderEnabled:r})}else 0===e&&a.setEmpty(!1),a.props.functionCallFromParent(e,!1)},a.updateBars=function(){a.props.updateBars()},a.state={numPoints:100,enabled:[!0,!0,!0,!0,!0,!0,!0,!0,!0],sliderEnabled:!0},a}return Object(s.a)(n,[{key:"disableUI",value:function(){for(var e=document.getElementsByClassName("algoBtn"),t=[!0],n=0;n<e.length;++n)t.push(!1),e[n].id="none";t.push(!1);var a=this.state.numPoints;this.setState({numBars:a,enabled:t,sliderEnabled:!0})}},{key:"enableUI",value:function(){for(var e=document.getElementsByClassName("algoBtn"),t=[!0],n=0;n<e.length;++n)t.push(!0),e[n].id="none";t.push(!0);var a=this.state.numPoints;this.setState({numBars:a,enabled:t,sliderEnabled:!0})}},{key:"setEmpty",value:function(e){e?this.disableUI():this.enableUI()}},{key:"setNumBars",value:function(){var e=document.getElementById("numberOfBars").value;this.setState({numBars:e}),this.updateBars()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:function(){return e.childFunction(0)},className:"randomizeBtn",disabled:!this.state.enabled[0]},"Generate Points"),i.a.createElement("button",{onClick:function(){return e.childFunction(1)},className:"algoBtn",id:"jarvisBtn",disabled:!this.state.enabled[1]},"Jarvis March"),i.a.createElement("button",{onClick:function(){return e.childFunction(2)},className:"algoBtn",id:"grahamBtn",disabled:!this.state.enabled[2]},"Graham Scan"),i.a.createElement("button",{onClick:function(){return e.childFunction(3)},className:"algoBtn",id:"quickhullBtn",disabled:!this.state.enabled[3]},"Quickhull"),i.a.createElement("button",{onClick:function(){return e.childFunction(4)},className:"deleteBtn",disabled:!this.state.enabled[4]},i.a.createElement(J.a,{className:"trash",transform:"shrink-4 up-3",size:"2x",icon:Q.a})))}}]),n}(a.Component),A=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).showDescription=function(e,t){if(a.state.algo=e,a.state.algRunning!==t)if(a.state.algRunning=t,t){switch(void 0!==(n=document.getElementsByClassName("description"))[0]&&(n[0].className="descriptionVisible"),a.state.algo){case 1:a.state.text='Jarvis March works by starting at\n                        the leftmost point (which is obviously part of the\n                        convex hull) and checking every point in the set to\n                        determine the point with the greatest angle. This point is guaranteed to be \n                        part of the convex hull and gets added to our result. The algorithm then repeats this process, starting\n                        from that point. Since we are traversing through the entire array once for each of the points, we get a time complexity of O(n^2). The process looks a\n                        lot like you\'re "wrapping" the set with a ribbon, hence\n                        the nickname "Gift wrapping algorithm".';break;case 2:a.state.text='Graham Scan works by first finding the point with the lowest y coordinate (or the lowest point), \n                        this is the pivot. After that, it sorts the set of points by their polar angle to the pivot. The algorithm then traverses the points, three at a time.\n                        These triplets are then checked for the kind of "curve" they form: clockwise or counterclockwise. If there is a counterclockwise turn, we delete\n                        the middle point and continue forming the convex hull in this way.';break;case 3:a.state.text="Quickhull works much like Quicksort does, as it is fundamentally based on recursion. It also\n                        shares Quicksorts time complexity at O(nlogn). First, the algorithm finds the line that\n                        stretches from the leftmost to the rightmost point. It separates all points into two groups: Left from that line and right from that line. The recursive step finds\n                        the point with the furthest distance from that line and froms a triangle with that point and the original line (that point is part of the convex hull for sure). \n                        All points inside that triangle are discarded. This step gets called recursively until we are done.";break;default:a.state.text="ERROR"}a.setState(a.state)}else{var n;void 0!==(n=document.getElementsByClassName("descriptionVisible"))[0]&&(n[0].className="description")}},a.state={algo:-1,algRunning:!1,text:"sick"},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.text;return i.a.createElement("div",{className:"descriptionBox"},i.a.createElement("div",{className:"description"},i.a.createElement("span",null,e)))}}]),n}(a.Component),U=0,W=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).parentFunction=function(t,n){U=t;var a=e.refs.child;switch(e.showDescription(n),t){case 0:a.generateRandomPoints();break;case 1:a.runJarvisMarch();break;case 2:a.runGrahamScan();break;case 3:a.runQuickhull();break;case 4:a.runDeletePoints()}},e.emptyCallback=function(t){e.setEmpty(t)},e.setEmpty=function(t){e.refs.controlChild.setEmpty(t)},e.updateBars=function(){},e.animationFinished=function(){e.refs.controlChild.enableUI(),e.refs.footerChild.showDescription(!1)},e.showDescription=function(t){e.refs.footerChild.showDescription(U,t)},e}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(z,{ref:"controlChild",functionCallFromParent:this.parentFunction.bind(this),updateBars:this.updateBars.bind(this)}),i.a.createElement(G,{ref:"child",emptyCallback:this.emptyCallback.bind(this),animationFinished:this.animationFinished.bind(this)}),i.a.createElement(A,{ref:"footerChild",showDescription:this.showDescription.bind(this)}))}}]),n}(a.Component);var V=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a3dfad70.chunk.js.map