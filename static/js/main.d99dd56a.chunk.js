(this.webpackJsonpedea=this.webpackJsonpedea||[]).push([[0],{25:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/no-img.2b01285d.jpg"},48:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/next.2aa04594.svg"},49:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/list.008a5145.svg"},50:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/tile.8e5c77dc.svg"},51:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(16),r=c.n(s),a=c(3);c(25);function i(e,t){localStorage.setItem(e,JSON.stringify(t))}function l(e){var t=localStorage.getItem(e);return JSON.parse(t)}var o=c(0);function u(e){var t=e.searchDeb,c=e.setSearchDeb,s=e.setSearch,r=Object(n.useState)([]),i=Object(a.a)(r,2),u=i[0],d=i[1];Object(n.useEffect)((function(){d(l("recentSearches"))}),[t]);return Object(o.jsxs)("div",{className:"recent-searches",children:[Object(o.jsx)("h3",{children:"Recent Searches"}),null===u&&Object(o.jsx)("span",{children:"You Haven't searched yet"}),Object(o.jsx)("div",{className:"container flex column",children:u&&u.map((function(e){return Object(o.jsx)("a",{href:"#top",className:"recent-search",children:Object(o.jsx)("div",{onClick:function(){return function(e){s(""),c(e)}(e)},href:"#top",children:e})},Math.random())}))})]})}var d=c(7),f=c.n(d),j=c(17),b=c(18),h=c.n(b),O=c(19),m=c.n(O);function p(e){var t=e.title,s=e.picture,r=e.formationTile,a=e.setVideoUrl,i=e.embedUrl,l=Object(n.useRef)(null);return Object(o.jsxs)("div",{ref:l,className:"".concat(r?"no-pic":""," result flex"),onClick:function(){a(i),l.current.classList.add("fade-out"),setTimeout((function(){l.current.classList.add("hidden")}),1e3)},children:[!r&&Object(o.jsx)("span",{className:"fs16",children:t}),r&&Object(o.jsx)("img",{src:s||c(47).default,alt:t})]})}var x=c(20);function v(e){var t,s,r=e.setVideoUrl,u=e.searchDeb,d=e.setSearchDeb,b=e.SC,O=e.search,v=e.setSearch,g=Object(n.useState)([]),S=Object(a.a)(g,2),w=S[0],C=S[1],N=Object(n.useState)(!1),k=Object(a.a)(N,2),y=k[0],_=k[1],D=Object(n.useState)(""),F=Object(a.a)(D,2),U=F[0],E=F[1],I=(t=function(e){return d(e)},s=1e3,Object(n.useCallback)(m()((function(){return t.apply(void 0,arguments)}),s),[s])),L=function(e){i("formation",e),_(e)};Object(n.useEffect)((function(){var e=l("formation");e&&_(e)}),[]),Object(n.useEffect)((function(){if(u){var e=l("recentSearches");i("recentSearches",e?e=function(e,t,c){var n=Object(x.a)(t),s=n.findIndex((function(e){return e===c}));return-1!==s?n.splice(s,1):n.length===e&&n.pop(),n.unshift(c),n}(5,e,u):[u])}}),[u]),Object(n.useEffect)((function(){b.get("/tracks",{q:u,license:"cc-by-sa",limit:6,linked_partitioning:!0}).then((function(e){C(e.collection),E(e.next_href)}))}),[b,u]);var T=function(){var e=Object(j.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(U);case 2:t=e.sent,(c=t.data).collection&&C(c.collection),c.next_href&&E(c.next_href);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"results",id:"top",children:[Object(o.jsx)("input",{type:"text",value:O,placeholder:"Search Songs...",className:"search",onChange:function(e){var t=e.target.value;v(t),I(t)}}),Object(o.jsxs)("div",{className:y?"tile":"",children:[0===w.length&&Object(o.jsx)("div",{children:"Couldn't find songs"}),w.map((function(e){return Object(o.jsx)(p,{setVideoUrl:r,embedUrl:e.permalink_url,formationTile:y,picture:e.artwork_url,title:e.title},e.id)}))]}),Object(o.jsxs)("div",{className:"actions flex space-between",children:[Object(o.jsx)("button",{className:"next",disabled:!U,onClick:T,children:Object(o.jsx)("img",{src:c(48).default,style:{width:40},alt:"next results"})}),Object(o.jsx)("button",{className:"list",onClick:function(){return L(!1)},children:Object(o.jsx)("img",{src:c(49).default,style:{width:40},alt:"list results"})}),Object(o.jsx)("button",{className:"tile",onClick:function(){return L(!0)},children:Object(o.jsx)("img",{src:c(50).default,style:{width:40},alt:"tile results"})})]})]})}function g(e){var t=e.videoUrl,c=e.SC,s=Object(n.useState)(""),r=Object(a.a)(s,2),i=r[0],l=r[1];return Object(n.useEffect)((function(){c.oEmbed(t,{auto_play:!0}).then((function(e){l({__html:e.html})}))}),[c,t]),i?Object(o.jsx)("div",{className:"song fade-in",dangerouslySetInnerHTML:i||{__html:Object(o.jsx)("iframe",{title:"new",width:"100%",height:"400",scrolling:"no",frameborder:"no",src:"https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F225558827&show_artwork=true"})}}):Object(o.jsx)("div",{children:"Loading..."})}var S=function(){var e=Object(n.useState)("https://soundcloud.com/anxsound/tiesto-don-diablo-chemicals-anx-progressive-bootleg"),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("tiesto"),i=Object(a.a)(r,2),l=i[0],d=i[1],f=Object(n.useState)(""),j=Object(a.a)(f,2),b=j[0],h=j[1],O=window.SC;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(v,{search:b,setSearch:h,searchDeb:l,setSearchDeb:d,setVideoUrl:s,SC:O}),Object(o.jsx)(g,{videoUrl:c,SC:O}),Object(o.jsx)(u,{setSearch:h,searchDeb:l,setSearchDeb:d})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};r.a.render(Object(o.jsx)(S,{}),document.getElementById("root")),w()}},[[51,1,2]]]);
//# sourceMappingURL=main.d99dd56a.chunk.js.map