(this["webpackJsonpip-tracker"]=this["webpackJsonpip-tracker"]||[]).push([[0],{21:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var s=t(0),c=(t(21),t(2)),n=t.n(c),d=t(16),i=t.n(d),r=t(3),o=(t(25),t(26),function(e){var a=e.onFormSubmit,t=Object(c.useState)(""),n=Object(r.a)(t,2),d=n[0],i=n[1];return Object(s.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),a(d),i("")},children:[Object(s.jsx)("input",{className:"search__input",type:"text",placeholder:"Search for IP or domain",value:d,onChange:function(e){i(e.target.value)}}),Object(s.jsx)("button",{className:"search__btn"})]})}),l=(t(27),t(28),function(){return Object(s.jsxs)("span",{className:"spinner",children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]})}),p=function(e){var a=e.ipInfo;return Object(s.jsxs)("section",{className:"details",children:[Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("p",{className:"detail__name",children:"IP ADDRESS"}),Object(s.jsx)("p",{className:"detail__data",children:a.ip?a.ip:Object(s.jsx)(l,{})})]}),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("p",{className:"detail__name",children:"LOCATION"}),Object(s.jsx)("p",{className:"detail__data",children:a.address?a.address:Object(s.jsx)(l,{})})]}),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("p",{className:"detail__name",children:"TIMEZONE"}),Object(s.jsxs)("p",{className:"detail__data",children:["UTC ",a.timeZone?a.timeZone:Object(s.jsx)(l,{})]})]}),Object(s.jsxs)("div",{className:"detail",children:[Object(s.jsx)("p",{className:"detail__name",children:"ISP"}),Object(s.jsx)("p",{className:"detail__data",children:a.isp?a.isp:Object(s.jsx)(l,{})})]})]})},j=(t(29),t.p+"static/media/icon-location.7e6459d2.svg"),b=function(e){var a=e.lat,t=e.lng;return Object(c.useEffect)((function(){var e=window.L.map("map").setView([a,t],13);window.L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoibW9tY2hpbG1pdGV2IiwiYSI6ImNqdGQzaGlscDEzNHY0M3A0N3Q2NTZ1b3MifQ.H3ataxUnf9yXk6BH4TWEPA"}).addTo(e);var s=window.L.icon({iconUrl:j,iconSize:[46,56]});return window.L.marker([a,t],{icon:s}).addTo(e),function(){e.off(),e.remove()}}),[a,t]),Object(s.jsx)("section",{id:"map",className:"map"})},f=t(6),m=t.n(f),u=t(7),x=t(4),O=t(17),h=t(18),v=t.n(h).a.create({baseURL:"https://geo.ipify.org/api/v1"}),A=/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g,N=/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g,_=function(e){var a=Object(c.useState)({ip:"",address:"",timeZone:"",isp:"",lat:0,lng:0}),t=Object(r.a)(a,2),s=t[0],n=t[1];Object(c.useEffect)((function(){d(e)}),[e]);var d=function(){var e=Object(O.a)(m.a.mark((function e(a){var t,c,d,i,r,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="",""!==a){e.next=5;break}t="",e.next=15;break;case 5:if(!A.test(a)){e.next=9;break}t="ipAddress",e.next=15;break;case 9:if(!N.test(a)){e.next=13;break}t="domain",e.next=15;break;case 13:return alert("Enter valid ip address or domain"),e.abrupt("return");case 15:return e.next=17,v({params:Object(x.a)({apiKey:"at_xU0SzpCVFXrKCzb80Eqog1bhXJGkI"},t,a)});case 17:c=e.sent,d=c.data,i=d.ip,r=d.isp,o=d.location,l={ip:i,address:"".concat(o.city,", ").concat(o.country," ").concat(o.postalCode),timeZone:o.timezone,isp:r,lat:o.lat,lng:o.lng},n(Object(u.a)(Object(u.a)({},s),l));case 21:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return[s,d]};var F=function(){var e=_(""),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)("h1",{className:"app__title",children:"IP Address Tracker"}),Object(s.jsx)(o,{onFormSubmit:c}),Object(s.jsx)(p,{ipInfo:t}),Object(s.jsx)(b,{lat:t.lat,lng:t.lng})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ff11a224.chunk.js.map