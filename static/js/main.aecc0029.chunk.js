(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n.n(a),s=n(21),o=n.n(s),i=(n(27),n(28),n(4)),r=n(5),l=n(11),u=n(8),d=n(7),b=n(22),h=(Object(b.a)({apiKey:"AIzaSyC4_v4J_NkVhqoyg2Dowf8X6lsvsuBLdOw",authDomain:"login-2cccf.firebaseapp.com",projectId:"login-2cccf",storageBucket:"login-2cccf.appspot.com",messagingSenderId:"81918442804",appId:"1:81918442804:web:965f88c8b50635882eb961"}),n(13)),g=n(6),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleStateEmail=function(e){a.setState((function(){return{email:e.target.value}}))},a.handleStatePassword=function(e){a.setState((function(){return{password:e.target.value}}))},a.state={email:"",password:"",userLogged:"",error:""},a.handleUserSubmit=a.handleUserSubmit.bind(Object(l.a)(a)),a.handleStateEmail=a.handleStateEmail.bind(Object(l.a)(a)),a.handleStatePassword=a.handleStatePassword.bind(Object(l.a)(a)),a.loggOut=a.loggOut.bind(Object(l.a)(a)),a.loginWithGoogle=a.loginWithGoogle.bind(Object(l.a)(a)),a.loginFace=a.loginFace.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"handleUserSubmit",value:function(e){var t=this;e.preventDefault();var n=Object(h.d)(),a=this.state.email,c=this.state.password;Object(h.c)(n,a,c).then((function(e){var n=e.user;console.log("soy el nuevo usuario",n),t.setState((function(){return{userLogged:n}}))})).catch((function(e){var n=e.code,a=e.message;console.log(a),console.log(n),t.setState((function(){return{error:a}}))}))}},{key:"loggOut",value:function(){var e=this,t=Object(h.d)();Object(h.f)(t).then((function(){console.log("ya no estoy logeado"),console.log(t),e.setState((function(){return{userLogged:0}}))})).catch((function(e){}))}},{key:"loginWithGoogle",value:function(){var e=this,t=new h.b,n=Object(h.d)();Object(h.e)(n,t).then((function(t){var n=t.user;console.log(n),e.setState((function(){return{userLogged:n}}))})).catch((function(t){var n=t.message;e.setState((function(){return{error:n}}))}))}},{key:"loginFace",value:function(){var e=this,t=new h.a,n=Object(h.d)();Object(h.e)(n,t).then((function(t){var n=h.a.credentialFromResult(t).accessToken;console.log(n,"token");var a=t.user;console.log(a),e.setState((function(){return{userLogged:a}}))})).catch((function(t){var n=t.message;console.log(n),e.setState((function(){return{error:n}}))}))}},{key:"render",value:function(){var e=this.state.userLogged,t=this.state.error;return Object(g.jsxs)("div",{children:[""==e&&Object(g.jsxs)("div",{className:"card  w-50 m-auto mt-5",children:[Object(g.jsx)("div",{className:"card-header bg-secondary text-light text-center",children:"LOGIN"}),Object(g.jsxs)("div",{className:"card-body  ",children:[Object(g.jsx)("h5",{className:"card-title",children:"Inicie sesi\xf3n "}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{children:"Usuario "}),Object(g.jsx)("input",{className:"form-control",onChange:this.handleStateEmail}),Object(g.jsx)("label",{className:"mt-3",children:"Contrase\xf1a"}),Object(g.jsx)("input",{type:"password",className:"form-control  ",onChange:this.handleStatePassword}),Object(g.jsx)("button",{className:"btn btn-primary m-3",onClick:this.handleUserSubmit,children:"Ingresar"})]}),Object(g.jsx)("button",{className:"btn btn-outline-primary mr-2",onClick:this.loginWithGoogle,children:"Inicia sesi\xf3n con Google"}),Object(g.jsx)("button",{className:"btn btn-outline-secondary",onClick:this.loginFace,children:"Inicia sesi\xf3n con Facebook"})]})]})]}),""!==e&&0!==e&&Object(g.jsxs)("div",{className:"alert alert-danger",children:[Object(g.jsxs)("h1",{children:["Hola ",e.displayName,e.email,"Estamos felices de tenerte de vuelta"]}),Object(g.jsx)("button",{className:"btn btn-danger ml-5",onClick:this.loggOut,children:"Logout"})]}),""!==t&&Object(g.jsx)("div",{className:"alert alert-danger",children:Object(g.jsx)("p",{children:"El email ya esta registrado verifique su email"})})]})}}]),n}(a.Component);var m=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(j,{})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};n(32);o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.aecc0029.chunk.js.map