(this.webpackJsonppart3=this.webpackJsonppart3||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(15),c=t.n(u),l=t(16),o=t(2),i=function(e){var n=e.handleQuery,t=e.newQuery;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{type:"text",name:"query",value:t,onChange:n}))},m=function(e){var n=e.addName,t=e.newName,a=e.newNumber,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("div",null," ",r.a.createElement("form",{onSubmit:n},r.a.createElement("h2",null,"Add new"),r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:u})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{type:"text",name:"number",value:a,onChange:c}))," ",r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var n=e.person,t=e.delPerson;return r.a.createElement("div",null,r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n.id,n.name)}},"Delete")))},d=t(4),s=t.n(d),h="/api/people",b=function(){return s.a.get(h).then((function(e){return e.data}))},p=function(e){return s.a.post(h,e).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(o.a)(c,2),s=d[0],h=d[1],w=Object(a.useState)(""),g=Object(o.a)(w,2),y=g[0],j=g[1],O=Object(a.useState)(""),N=Object(o.a)(O,2),C=N[0],S=N[1],k=Object(a.useState)(null),T=Object(o.a)(k,2),x=T[0],D=T[1],P=Object(a.useState)(null),Q=Object(o.a)(P,2),q=Q[0],A=Q[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var J=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},B=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"success"},n)},I=t.filter((function(e){return e.name.toLowerCase().includes(C.toString())})),L=function(e,n){window.confirm("Do you really want to delete ".concat(n," from the phonebook?"))&&v(e).then((function(a){A("the person ".concat(n," was deleted from server")),setTimeout((function(){A(null)}),5e3),u(t.filter((function(n){return n.id!==e})))})).catch((function(a){console.log(a),D("the person ".concat(n," was already deleted from server")),setTimeout((function(){D(null)}),5e3),u(t.filter((function(n){return n.id!==e})))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(J,{message:x}),r.a.createElement(B,{message:q}),r.a.createElement(i,{handleQuery:function(e){S(e.target.value)},newquery:C}),r.a.createElement(m,{addName:function(e){e.preventDefault();var n={name:s,number:y};if(0===t.filter((function(e){return e.name===s})).length)p(n).then((function(e){u([].concat(Object(l.a)(t),[e]))})).catch((function(e){return console.log(e)})),A("Added ".concat(s)),setTimeout((function(){A(null)}),5e3),h(""),j("");else{var a=t.find((function(e){return e.name===s}));window.confirm("".concat(s," is already in the phonebook. Do you want to replace the old number with a new one?"))&&E(a.id,n).then((function(e){u(t.map((function(n){return n.id!==a.id?n:e}))),A("Modified ".concat(s)),setTimeout((function(){A(null)}),5e3)})).catch((function(e){console.log(e),D("the person ".concat(a.name," was already deleted from server")),setTimeout((function(){D(null)}),5e3),u(t.filter((function(e){return e.id!==a.id})))}))}h(""),j("")},newName:s,newNumber:y,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,I.map((function(e,n){return r.a.createElement(f,{key:n,person:e,delPerson:L})}))))};t(39);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.17c180ce.chunk.js.map