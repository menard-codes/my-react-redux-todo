(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{19:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(7),o=n.n(i),d=(n(19),n(2)),u=n(8),r=n(6),s=n(5),l="ADD_TODO",j="EDIT_TODO",b="CHANGE_TODO_STATUS",O="DELETE_TODO",f=[];var v=Object(u.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:var n=t.length>0?t[t.length-1].id+1:0;return[].concat(Object(s.a)(t),[{id:n,task:e.payload,active:!0}]);case j:return Object(s.a)(t.map((function(t){return t.id===e.payload.id?Object(r.a)(Object(r.a)({},t),{},{task:e.payload.data}):t})));case b:return Object(s.a)(t.map((function(t){return t.id===e.payload?Object(r.a)(Object(r.a)({},t),{},{active:!t.active}):t})));case O:return Object(s.a)(t.filter((function(t){return t.id!==e.payload})));default:return t}})),p=n(4),h=(n(26),n(1));var x=Object(d.b)(null,(function(t){return{addTodo:function(e){return t(function(t){return{type:l,payload:t}}(e))}}}))((function(t){var e=Object(a.useState)(""),n=Object(p.a)(e,2),c=n[0],i=n[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",id:"todo-edit",autoFocus:!0,placeholder:"Enter a todo",value:c,onChange:function(t){return i(t.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.code&&document.getElementById("add-todo").click()}(t)}}),Object(h.jsx)("button",{id:"add-todo",onClick:function(){t.addTodo(c),i("")},children:"Add Todo"})]})}));n(28);var m=function(t){return Object(h.jsx)("input",{className:t.active?t.onView?"active-task-onView-input":"active-task-onEdit-input":"finished-task",type:"text",value:t.value,onChange:function(e){return t.handleChange(e.target.value)},disabled:t.onView})};n(29);var g=Object(d.b)(null,(function(t){return{editTodo:function(e,n){return t(function(t,e){return{type:j,payload:{id:t,data:e}}}(e,n))},deleteTodo:function(e){return t(function(t){return{type:O,payload:t}}(e))},changeTodoStatus:function(e){return t(function(t){return{type:b,payload:t}}(e))}}}))((function(t){var e=t.data.id,n=t.data.task,c=t.data.active,i=Object(a.useState)(!0),o=Object(p.a)(i,2),d=o[0],u=o[1],r=Object(a.useState)(n),s=Object(p.a)(r,2),l=s[0],j=s[1];return Object(h.jsxs)(h.Fragment,{children:[d?Object(h.jsx)("button",{className:c?"active-status-btn":"finished-status-btn",onClick:function(){return t.changeTodoStatus(e)}}):null,Object(h.jsx)(m,{active:c,onView:d,value:l,handleChange:j}),t.data.active?d?Object(h.jsx)("button",{className:"task-item-btn edit-btn",onClick:function(){return u(!1)},children:Object(h.jsx)("i",{className:"fas fa-pencil-alt edit-logo"})}):Object(h.jsx)("button",{onClick:function(){var n=e,a=l;t.editTodo(n,a),u(!0)},className:"task-item-btn save-btn",children:Object(h.jsx)("i",{className:"fas fa-save save-logo"})}):null,d?Object(h.jsx)("button",{onClick:function(){var n=e;t.deleteTodo(n)},className:"task-item-btn delete-btn",children:Object(h.jsx)("i",{className:"fas fa-trash-alt delete-logo"})}):Object(h.jsx)("button",{onClick:function(){j(n),u(!0)},className:"task-item-btn undo-btn",children:Object(h.jsx)("i",{className:"fas fa-undo undo-logo"})})]})}));n(30);var k=Object(d.b)((function(t){return{todoList:t}}))((function(t){return Object(h.jsx)("ul",{id:"list",children:t.todoList.map((function(t){return Object(h.jsx)("li",{className:t.active?"active-item":"finished-item",children:Object(h.jsx)(g,{data:t})},t.id)}))})}));n(31);var y=function(){return Object(h.jsx)(d.a,{store:v,children:Object(h.jsxs)("div",{id:"main-app",children:[Object(h.jsxs)("div",{id:"head",children:[Object(h.jsx)("h1",{id:"app-title",children:"TODO List App"}),Object(h.jsx)(x,{})]}),Object(h.jsx)("div",{id:"todo-list",children:Object(h.jsx)(k,{})})]})})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)("div",{id:"container",children:Object(h.jsx)(y,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ae665fd4.chunk.js.map