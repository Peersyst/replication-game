(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/filecoin-logo.346c3e5d.svg"},12:function(e,t,a){e.exports=a.p+"static/media/gold.86fe424e.png"},13:function(e,t,a){e.exports=a.p+"static/media/silver.e694d2b3.png"},14:function(e,t,a){e.exports=a.p+"static/media/bronze.191e8a6b.png"},18:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),m=(a(24),a(16)),s=a(1),i=a.n(s),o=a(5),p=a(6),u=a(7),d=a(15),f=a(8),b=a(17),v=a(9),E=a.n(v),h=a(10),y=a.n(h),g=a(11),w=a.n(g),N=a(12),k=a.n(N),x=a(13),T=a.n(x),_=a(14),j=a.n(_),B=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_URL:"/api/leaderboard"}).REACT_APP_REFRESH_INTERVAL||1e4,C=function(){return n.a.createElement("header",{className:"mw7 center"},n.a.createElement("h1",{className:"ma0 pv4 fw2 f1 montserrat tc"},n.a.createElement("img",{src:w.a,alt:"fil",width:"80",className:"db dib-l center mb3 mb0-l ml0-l mr4-l v-mid"}),n.a.createElement("span",{className:"v-mid"},"Replication Game")))},O=function(e){var t=e.name,a=e.className,r=void 0===a?"mr3 v-mid":a,c=e.size,l=void 0===c?60:c;return n.a.createElement("img",{src:"https://github.com/".concat(t,".png?size=").concat(l),className:r,style:{width:l/2,height:l/2},alt:"".concat(t," avatar"),onError:function(e){e.target.src="https://www.gravatar.com/avatar/".concat(y()(t),"?d=retro&s=").concat(l)}})},z=function(e){var t=e.time;return n.a.createElement("span",{className:"dib f5 fr bg-snow black pa2 br3 lh-solid tr courier ml4"},t)},R=function(e){var t=e.name,a=e.time;return n.a.createElement("div",{className:"flex"},n.a.createElement(O,{name:t}),n.a.createElement("span",{className:"fw5 montserrat white truncate flex-auto",title:t},t),n.a.createElement(z,{time:E()(a).format("0.000e+0")}))},A=function(e){var t=e.type,a={gold:k.a,silver:T.a,bronze:j.a};return n.a.createElement("img",{src:a[t],alt:t,className:"absolute dn db-m db-l",style:{width:45,top:-3,right:"8rem"}})};function L(e){var t=e.typ,a=e.challenge_count,r=e.vde,n=e.degree,c=e.expansion_degree,l=e.layers;return["Type: ".concat(t),"Challenges: ".concat(a),"VDE: ".concat(r),"Degree: ".concat(n),"Expansion degree: ".concat(c),"Layers: ".concat(l)].join(", ")}var D=function(e){function t(){var e,a;Object(p.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){var a=Object(o.a)(i.a.mark(function a(){var r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("/api/leaderboard");case 3:if((r=a.sent).ok){a.next=6;break}throw new Error("unexpected status ".concat(r.status));case 6:return a.t0=e,a.next=9,r.json();case 9:a.t1=a.sent,a.t2={leaderboardData:a.t1},a.t0.setState.call(a.t0,a.t2),a.next=17;break;case 14:a.prev=14,a.t3=a.catch(0),console.error("failed to fetch leaderboard data",a.t3);case 17:return a.prev=17,setTimeout(t,B),a.finish(17);case 20:case"end":return a.stop()}},a,this,[[0,14,17,20]])}));return function(){return a.apply(this,arguments)}}();t()}},{key:"render",value:function(){var e=this.state.leaderboardData;if(!e)return n.a.createElement("div",{className:"sans-serif white"},n.a.createElement(C,null),n.a.createElement("main",{className:"tc"},n.a.createElement("p",null,"Loading...")));var t=e.map(function(e){return Object(m.a)({},e,{perByteTime:1e3*e.repl_time/e.params.size})}).sort(function(e,t){return e.perByteTime-t.perByteTime}).reduce(function(e,t){return e.some(function(e){return e.prover===t.prover&&e.repl_time===t.repl_time&&e.params.size===t.params.size})?e:e.concat(t)},[]);return n.a.createElement("div",{className:"sans-serif white"},n.a.createElement(C,null),n.a.createElement("main",null,n.a.createElement("div",{className:"mw7 pl3 center pb2 cf"},n.a.createElement("h2",{className:"f4 f3-m f3-l mv3 pl4-m pl4-l tc tl-m tl-l montserrat fw2 ttu fl-m fl-l"},"Leaderboard"),n.a.createElement("div",{className:"f4 f3-m f3-l mv3 pr4 fr"},n.a.createElement("div",{className:"f6 f5-m f5-l mt1 montserrat fw2"},"Time / byte (ms)"))),n.a.createElement("ol",{className:"ma0 lh-copy mw7 mb5 pl3 center db gray",style:{listStyleType:"decimal"}},t.slice(0,1).map(function(e){var t=e.id,a=e.prover,r=e.perByteTime,c=e.params;return n.a.createElement("li",{key:t,className:"tl f4 mh3 pa3 b--gold b--solid bw1 br3 relative shadow-1",style:{backgroundColor:"rgba(255, 183, 0, 0.75)"},title:L(c)},n.a.createElement(A,{type:"gold"}),n.a.createElement(R,{name:a,time:r}))}),t.slice(1,2).map(function(e){var t=e.id,a=e.prover,r=e.perByteTime,c=e.params;return n.a.createElement("li",{key:t,className:"tl f4 mt4 mh3 pa3 b--silver b--solid bw1 br3 relative shadow-1",style:{backgroundColor:"rgba(153, 153, 153, 0.75)"},title:L(c)},n.a.createElement(A,{type:"silver"}),n.a.createElement(R,{name:a,time:r}))}),t.slice(2,3).map(function(e){var t=e.id,a=e.prover,r=e.perByteTime,c=e.params;return n.a.createElement("li",{key:t,className:"tl f4 mt4 mh3 mb4 pa3 b--solid bw1 br3 relative shadow-1",style:{borderColor:"#cd7f32",backgroundColor:"rgba(205, 127, 50, 0.75)"},title:L(c)},n.a.createElement(A,{type:"bronze"}),n.a.createElement(R,{name:a,time:r}))}),t.slice(3).map(function(e){var t=e.id,a=e.prover,r=e.perByteTime,c=e.params;return n.a.createElement("li",{key:t,className:"tl mt3 mh3 ph3 f4",title:L(c)},n.a.createElement(R,{name:a,time:r}))}))))}}]),t}(r.Component);l.a.render(n.a.createElement(D,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.bbac22e3.chunk.js.map