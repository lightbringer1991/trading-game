(this["webpackJsonptrading-game"]=this["webpackJsonptrading-game"]||[]).push([[0],{113:function(e,a,t){e.exports=t(253)},118:function(e,a,t){},247:function(e,a,t){},253:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(106),c=t.n(l),o=(t(118),t(111)),u=t(22),i=t.n(u),m=t(17),s=t(61),E=t(107),f=t.n(E),p=t(108),d=t.n(p),h=t(109),v=t.n(h),g=t(112),b=t(110),w=t(16),y=t(12),j=t(13),k=t(62),x=t(14),O=(t(246),t(247),function(e){return Math.floor(Math.random()*e)}),S=function(){var e=Object(s.a)(i.a.mark((function e(a,t,n){var r,l,c,o,u,s,E,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],v()(a,(function(){return r.push(t)})),l=0;f()(r).length>1;){for(l+=1,c=O(a);0===r[c];)c=O(a);for(o=c;c===o||0===r[o];)o=O(a);i=r[c],d=r[o],u=Math.random()>=.5?[i+1,d-1]:[i-1,d+1],s=Object(m.a)(u,2),E=s[0],p=s[1],r[c]=E,r[o]=p,n(r.join(", "))}n("Game ends after ".concat(l," turns."));case 5:case"end":return e.stop()}var i,d}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),N=function(){var e=r.a.useState(10),a=Object(m.a)(e,2),t=a[0],n=a[1],l=r.a.useState(10),c=Object(m.a)(l,2),u=c[0],E=c[1],f=r.a.useState([]),p=Object(m.a)(f,2),h=p[0],v=p[1],O=r.a.useState(!1),N=Object(m.a)(O,2),B=N[0],G=N[1],M=function(e){return v((function(a){return d()([].concat(Object(o.a)(a),[e]),10)}))},P=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),v([]),e.next=4,S(t,u,M);case 4:G(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{className:"app"},r.a.createElement(w.a,null,r.a.createElement(y.a,{md:6,xs:12},r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(j.a,{className:"mb-3"},r.a.createElement(j.a.Prepend,null,r.a.createElement(j.a.Text,null,"Number of Players")),r.a.createElement(k.a,{value:t,onChange:function(e){var a=e.target.value;n(+a)}})))),r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(j.a,{className:"mb-3"},r.a.createElement(j.a.Prepend,null,r.a.createElement(j.a.Text,null,"Starting Balance")),r.a.createElement(k.a,{value:u,onChange:function(e){var a=e.target.value;E(+a)}})))),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"pull-right"},r.a.createElement(g.a,{disabled:B,onClick:P},"Start")))),r.a.createElement(y.a,{md:6,xs:12},r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,"Game Description"),r.a.createElement("ul",null,r.a.createElement("li",null,"Given ",t," players, each player has $",u," initially."),r.a.createElement("li",null,"Each turn, select 2 random players with balance more than 0."),r.a.createElement("li",null,"Flip a coin, tail will give head $1."),r.a.createElement("li",null,"Game ends when all money are converged into a player.")))))),r.a.createElement(w.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,null,r.a.createElement(x.a.Body,null,r.a.createElement(x.a.Title,null,"Game Progress"),r.a.createElement("div",{className:"progress-log"},h.map((function(e,a){return r.a.createElement("div",{key:a},e)}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[113,1,2]]]);
//# sourceMappingURL=main.3a94a814.chunk.js.map