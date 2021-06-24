(this["webpackJsonpmy-note-app"]=this["webpackJsonpmy-note-app"]||[]).push([[0],{215:function(e,t,c){},216:function(e,t,c){},402:function(e,t,c){"use strict";c.r(t);var n=c(20),i=c(1),s=c.n(i),a=c(88),o=c.n(a),r=(c(215),c(29)),l=c(6),d=(c(216),c(2)),j=function(){return Object(d.jsx)("nav",{className:"green nav-container",children:Object(d.jsxs)("div",{className:"nav-wrapper custom-nav",children:[Object(d.jsx)(r.b,{to:"/",className:"brand-logo nav-button",children:"My-notebook"}),Object(d.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(d.jsx)("li",{children:Object(d.jsx)(r.c,{to:"/favorites",className:"fav-button",children:"favorites"})})})]})})},b=c(30),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(i.useState)(e),c=Object(b.a)(t,2),n=c[0],s=c[1],a=function(){s(e)},o={value:n,onChange:function(e){s(e.target.value)}};return[n,o,a]},h=c(10),O=function(){var e=u(),t=Object(b.a)(e,3),c=t[0],i=t[1],s=t[2],a=u(),o=Object(b.a)(a,3),r=o[0],l=o[1],j=o[2],O=Object(h.b)();return Object(d.jsx)("div",{className:"section flex",children:Object(d.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),c&&r?(O((t={title:c,content:r},function(e,c,i){(0,i.getFirestore)().collection("notes").add(Object(n.a)(Object(n.a)({},t),{},{favorite:!1,createdAt:new Date})).then((function(){console.log("note added")})).catch((function(e){console.log(e)}))})),j(),s()):c?alert("content is empty!"):alert("title is empty!")},className:"white custom-card",children:[Object(d.jsx)("h5",{className:"dark-text",children:Object(d.jsx)("u",{children:"New Note"})}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("input",Object(n.a)({id:"note-title",type:"text",className:"validate"},i)),Object(d.jsx)("label",{className:"active",htmlFor:"note-title",children:"Note Title"})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("textarea",Object(n.a)({id:"note-content",className:"materialize-textarea"},l)),Object(d.jsx)("label",{className:"active",htmlFor:"note-content",children:"Note Content"})]}),Object(d.jsx)("button",{className:"btn green custom-button",children:"Add"})]})})},m=c(16),x=c(90),f=c.n(x),v=function(e){var t=e.note,c=Object(h.b)(),n=t.favorite?"favorite":"favorite_border";return Object(d.jsxs)("div",{className:"note white custom-note",children:[Object(d.jsxs)("div",{className:"right-align",children:[Object(d.jsx)("i",{className:"material-icons red-text",style:{cursor:"pointer"},onClick:function(){c(function(e){return function(t,c,n){var i=n.getFirestore,s=!e.favorite;i().collection("notes").doc(e.id).update({favorite:s}).then((function(){console.log("note updated")})).catch((function(e){console.log(e)}))}}(t))},children:n}),Object(d.jsx)("i",{className:"material-icons",style:{cursor:"pointer"},onClick:function(){c(function(e){return function(t,c,n){(0,n.getFirestore)().collection("notes").doc(e.id).delete().then((function(){console.log("note deleted")})).catch((function(e){console.log(e)}))}}(t))},children:"delete"})]}),Object(d.jsx)(r.b,{to:"/note/"+t.id,children:Object(d.jsx)("h5",{className:"custom-title",children:t.title})}),Object(d.jsxs)("p",{className:"truncate",children:[t.content," "]}),Object(d.jsxs)("p",{className:"grey-text",children:[f()(t.createdAt.toDate()).fromNow()," "]}),Object(d.jsx)(r.b,{to:"/editnote/".concat(t.id),children:Object(d.jsx)("div",{className:"right-align",children:Object(d.jsx)("i",{className:"material-icons black-text",onClick:function(){c({type:"editNote",payload:t})},children:"edit"})})})]})},p=function(e){var t=e.notes,c=e.title;return Object(d.jsxs)("div",{className:"custom-list",children:[Object(d.jsx)("center",{className:"custom-heading-note-list",children:Object(d.jsx)("u",{children:c||"Note List"})}),t&&t.map((function(e){return Object(d.jsx)(v,{note:e},e.id)}))]})},N=function(){Object(m.useFirestoreConnect)([{collection:"notes",orderBy:["createdAt","desc"]}]);var e=Object(h.c)((function(e){return e.firestore.ordered.notes}));return Object(d.jsx)("div",{className:"container custom-home",children:Object(d.jsxs)("div",{className:"row center-align flex-box",children:[Object(d.jsxs)("div",{className:"col s7",children:[" ",Object(d.jsx)(O,{})," "]}),Object(d.jsxs)("div",{className:"col s5",children:[Object(d.jsx)(p,{notes:e})," "]})]})})},g=function(){Object(m.useFirestoreConnect)([{collection:"notes",where:["favorite","==",!0],orderBy:["createdAt","desc"],storeAs:"favoriteNotes"}]);var e=Object(h.c)((function(e){return e.firestore.ordered.favoriteNotes})),t=Object(h.c)((function(e){return e.firestore}));return console.log(t),Object(d.jsx)(p,{notes:e,title:"Favorites"})},y=function(e){var t=e.match.params.id;Object(m.useFirestoreConnect)([{collection:"notes",doc:t}]);var c=Object(h.c)((function(e){var c=e.firestore.data;return c.notes&&c.notes[t]}));return Object(m.isLoaded)(c)?Object(m.isEmpty)(c)?Object(d.jsx)("div",{className:"container section",children:Object(d.jsx)("div",{className:"card z-depth-0",children:Object(d.jsx)("div",{className:"card-content custom-note-detail",children:Object(d.jsx)("span",{className:"card-title",children:"The note content is empty!"})})})}):Object(d.jsx)("div",{className:"container section",children:Object(d.jsx)("div",{className:"card z-depth-0",children:Object(d.jsxs)("div",{className:"card-content custom-note-detail",children:[Object(d.jsx)("span",{className:"card-title",children:null===c||void 0===c?void 0:c.title}),Object(d.jsx)("p",{className:"card-content",children:null===c||void 0===c?void 0:c.content}),Object(d.jsx)("div",{className:"card-action grey grey-text lighten-4",children:Object(d.jsx)("div",{children:f()(null===c||void 0===c?void 0:c.createdAt.toDate()).calendar()})})]})})}):Object(d.jsx)("div",{className:"container section",children:Object(d.jsx)("div",{className:"card z-depth-0",children:Object(d.jsx)("div",{className:"card-content custom-note-detail",children:Object(d.jsx)("span",{className:"card-title",children:"Loading..."})})})})},F=function(){var e=Object(h.c)((function(e){return e.note})),t=u(e.title),c=Object(b.a)(t,3),i=c[0],s=c[1],a=c[2],o=u(e.content),r=Object(b.a)(o,3),j=r[0],O=r[1],m=r[2],x=Object(h.b)(),f=Object(l.f)();return Object(d.jsx)("div",{className:"section",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i&&j?(x(function(e){return function(t,c,n){(0,n.getFirestore)().collection("notes").doc(e.id).update({title:e.title,content:e.content}).then((function(){console.log("note updated")})).catch((function(e){console.log(e)}))}}({id:e.id,title:i,content:j})),m(),a(),f.push("/")):i?alert("content is empty!"):alert("title is empty!")},className:"white",children:[Object(d.jsx)("h5",{className:"dark-text",children:"Note Content"}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("input",Object(n.a)({id:"note-title",type:"text",className:"validate"},s)),Object(d.jsx)("label",{className:"active",htmlFor:"note-title",children:"Note Title"})]}),Object(d.jsxs)("div",{className:"input-field",children:[Object(d.jsx)("textarea",Object(n.a)({id:"note-content",className:"materialize-textarea"},O)),Object(d.jsx)("label",{className:"active",htmlFor:"note-content",children:"Note Content"})]}),Object(d.jsx)("button",{className:"btn green",children:"Update"})]})})};var w=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(d.jsx)(l.a,{path:"/favorites",component:g}),Object(d.jsx)(l.a,{path:"/note/:id",component:y}),Object(d.jsx)(l.a,{path:"/editnote/:id",component:F})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,404)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},A=c(50),k=c(49),D={noteToEdit:{}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case"editNote":return n;default:return e}},z=Object(A.b)({note:I,firebase:m.firebaseReducer,firestore:k.firestoreReducer}),S=c(210),T=c(91),B=(c(403),{apiKey:"AIzaSyDcV2BKOK_ANc0cJJYo6Emr2IDT9eYfu-E",authDomain:"my-note-app-1.firebaseapp.com",projectId:"my-note-app-1",storageBucket:"my-note-app-1.appspot.com",messagingSenderId:"382176870811",appId:"1:382176870811:web:34571948e5e88c2496613e"});T.a.initializeApp(B);var E=B,L=Object(A.d)(z,Object(A.c)(Object(A.a)(S.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:k.getFirestore})),Object(k.reduxFirestore)(E))),J={firebase:T.a,config:E,dispatch:L.dispatch,createFirestoreInstance:k.createFirestoreInstance};o.a.render(Object(d.jsx)(h.a,{store:L,children:Object(d.jsx)(m.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},J),{},{children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})})}))}),document.getElementById("root")),C()}},[[402,1,2]]]);
//# sourceMappingURL=main.f6aa40ab.chunk.js.map