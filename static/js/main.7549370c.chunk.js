(this["webpackJsonpsticky-notes-app"]=this["webpackJsonpsticky-notes-app"]||[]).push([[0],{29:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(11),r=n.n(c),o=n(8),u=n(9),i=n(26),m=n.n(i),s=n(55);var f=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),f=i[0],E=i[1],p=Object(a.useState)(""),b=Object(u.a)(p,2),d=b[0],v=b[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:function(e){var t=e.target.value;E(t)},value:f,placeholder:"Enter a title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:function(e){var t=e.target.value;v(t)},value:d,placeholder:"Take a note",rows:c?3:1}),l.a.createElement(s.a,{onClick:function(t){var n={newTitle:f.trim(),newText:d.trim()};0===n.newTitle.length&&0===n.newText.length||e.onAdd(n),E(""),v(""),t.preventDefault()},style:c?{display:"block"}:{display:"none"}},l.a.createElement(m.a,null))))},E=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Anil Acar ",e))},p=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Sticky Notes App"))},b=n(27),d=n.n(b),v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(d.a,null)))},g=function(){Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notes"));e&&c(e)}),[]);var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=function(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(a.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(n))}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(f,{onAdd:function(e){c((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(v,{key:t,id:t,title:e.newTitle,content:e.newText,onDelete:r})})),l.a.createElement(E,null))},O=document.getElementById("root");r.a.render(l.a.createElement(g,null),O)}},[[29,1,2]]]);
//# sourceMappingURL=main.7549370c.chunk.js.map