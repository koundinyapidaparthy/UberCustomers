"use strict";(self.webpackChunkuber_customers_clientside=self.webpackChunkuber_customers_clientside||[]).push([[426],{4426:function(e,t,n){n.r(t);var o=n(1413),i=n(885),r=n(2791),u=n(9752),a=n(4488),s=n(6151),c=n(5229),l=n(867),d=n(6871),f=n(184);t.default=function(){var e=(0,d.s0)(),t=r.useContext(l.B).userDetails.loggedIn,n=[{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],g=(0,c.Z)((function(){return{main:{},container:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-around"}}}))(),p=r.useState({latitude:null,longitude:null,loading:!0,permissionStatus:null}),h=(0,i.Z)(p,2),b=h[0],Z=h[1];function m(e){Z((function(t){return(0,o.Z)((0,o.Z)({},t),{},{loading:!1,geoLocationSupport:!0,latitude:e.coords.latitude,longitude:e.coords.longitude})}))}function x(e){switch(e.code){case e.PERMISSION_DENIED:I(2);break;case e.POSITION_UNAVAILABLE:I(3);break;case e.TIMEOUT:I(4);break;case e.UNKNOWN_ERROR:default:I(5)}}function I(e){Z((function(t){return(0,o.Z)((0,o.Z)({},t),{},{permissionStatus:e})}))}function y(e){var t=e.target;t.name,t.value}return console.log({currentLocation:b}),r.useEffect((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(m,x):I(0)}),[]),r.useEffect((function(){t&&e("/letsgo")}),[]),(0,f.jsx)("div",{children:(0,f.jsxs)("div",{className:g.container,children:[(0,f.jsx)(u.Z,{id:"combo-box-demo",options:n,getOptionLabel:function(e){return e.title},style:{width:300},renderInput:function(e){return(0,f.jsx)(a.Z,(0,o.Z)((0,o.Z)({},e),{},{label:"Pick Up",name:"pickup",onChange:y}))}}),(0,f.jsx)("div",{children:"--- to ---"}),(0,f.jsx)(u.Z,{id:"combo-box-demo",options:n,getOptionLabel:function(e){return e.title},style:{width:300},renderInput:function(e){return(0,f.jsx)(a.Z,(0,o.Z)((0,o.Z)({},e),{},{label:"Drop",name:"drop",onChange:y}))}}),(0,f.jsx)(s.Z,{children:" Ride"})]})})}}}]);
//# sourceMappingURL=426.1e6f97a0.chunk.js.map