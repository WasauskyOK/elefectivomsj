(this.webpackJsonpchatexample01=this.webpackJsonpchatexample01||[]).push([[0],{52:function(e,t,a){e.exports=a.p+"static/media/WhatsApp Mensaje Recibido.0f93fa9c.mp3"},53:function(e,t,a){e.exports=a(96)},58:function(e,t,a){},92:function(e,t){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(48),c=a.n(s),i=(a(58),a(11)),o=a(15),l=a(3),m=a(4),u=a(6),h=a(5),p=a(7),d=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={nombre:"daniel"},e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"StyleFrameMaps",value:function(){return{width:"600px",height:"450px",border:"0",frameBorder:"0",allowFullScreen:"",position:"relative",margin:"auto"}}},{key:"render",value:function(){return null!==localStorage.getItem("setAuthenticated")?(console.log("gaaaa principal"),r.a.createElement(o.a,{to:"/profile"})):r.a.createElement("div",null,r.a.createElement("h1",null,"Bienvenido al ejemplo chat de prueba"),r.a.createElement("p",null,"Contacto : daniechoque159@gmail.com "),r.a.createElement("p",null,"Github : WasauskyOK"),r.a.createElement("p",null,"Localizacion de Investigaci\xf3n"),r.a.createElement("div",{style:{width:"100vw",display:"flex"}},r.a.createElement("iframe",{title:"Localizaci\xf3n de estudios",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.9125454851396!2d-77.00761298536557!3d-11.980553091511394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5639b5e5631%3A0x92e4873e7f233e35!2sCIBERTEC!5e0!3m2!1ses-419!2spe!4v1574087520652!5m2!1ses-419!2spe",style:this.StyleFrameMaps()})))}}]),t}(n.Component),g=a(1),f=a.n(g),b=a(18),v=a(9),E=a(12),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={email:"",password:"",msjSignUp:"",isAuthenticate:window.localStorage.getItem("setAuthenticated")},e.AgregarUsuario.bind(Object(E.a)(e)),e.CambiarState.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"CambiarState",value:function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(b.a)({},t.target.name,t.target.value));case 2:console.log(this.state);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"AgregarUsuario",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.password;fetch("https://serverchatexample01.herokuapp.com/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:r})}).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("email")&&(t.setState({msjSignUp:e.email}),t.props.history.push("/signin")),e.hasOwnProperty("message")&&t.setState({email:"",password:"",msjSignUp:e.message}),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){console.log(window.localStorage.getItem("setAuthenticated"))}},{key:"render",value:function(){return null!==localStorage.getItem("setAuthenticated")?(console.log("gaaaa signup"),r.a.createElement(o.a,{to:"/profile"})):r.a.createElement("div",{className:"container border "},this.state.msjSignUp.length>0?r.a.createElement("div",{className:"alert alert-danger text-center  mt-2"},this.state.msjSignUp):r.a.createElement("div",null),r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center",style:{height:"80vh"}},r.a.createElement("div",{className:"card shadow col-md-4 text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,"Crear Cuenta")),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("form",{onSubmit:this.AgregarUsuario.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Ingresa tu correo",value:this.state.email,name:"email",onChange:this.CambiarState.bind(this),required:!0,className:"mt-3 form-control",autoComplete:"off"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Ingresa tu contrase\xf1a",value:this.state.password,name:"password",onChange:this.CambiarState.bind(this),required:!0,className:"mt-3 form-control"})),r.a.createElement("button",{className:"btn btn-success btn-block",type:"submit"},"Crear Cuenta"))))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={email:"",password:"",msjSignIn:""},e.ChangeState.bind(Object(E.a)(e)),e.IniciarSesion.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"ChangeState",value:function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(b.a)({},t.target.name,t.target.value));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"IniciarSesion",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.password;fetch("https://serverchatexample01.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:r})}).then((function(e){return e.json()})).then((function(e){!0===e.isAuthenticate&&(window.localStorage.setItem("setAuthenticated",!0),window.localStorage.setItem("correoactivo",e.email),window.location.href="/profile"),e.error&&(document.querySelector("#TextosAleatorios").innerHTML=e.error,t.setState({msjSignIn:e.error}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return null!==localStorage.getItem("setAuthenticated")?(console.log("gaaaa signin"),r.a.createElement(o.a,{to:"/profile"})):r.a.createElement("div",{className:"container border "},this.state.msjSignIn.length>0?r.a.createElement("div",{className:"alert alert-danger text-center  mt-2"},this.state.msjSignIn):r.a.createElement("div",null),r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center",style:{height:"80vh"}},r.a.createElement("div",{className:"card shadow col-md-4 text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",null,"Iniciar Sesion")),r.a.createElement("p",{id:"TextosAleatorios"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("form",{onSubmit:this.IniciarSesion.bind(this)},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Ingresa tu correo",name:"email",onChange:this.ChangeState.bind(this),required:!0,className:"mt-3 form-control",autoComplete:"off"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Ingresa tu contrase\xf1a",name:"password",onChange:this.ChangeState.bind(this),required:!0,className:"mt-3 form-control"})),r.a.createElement("button",{className:"btn btn-success btn-block"},"Iniciar Sesion"))))))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex bd-highlight bg-danger  mb-3 "},r.a.createElement("div",{className:"mr-auto p-2 "},r.a.createElement(i.b,{className:"nav-link text-white",to:"/principal"},"Inicio")),r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement(i.b,{className:"nav-link text-white",to:"/signin"},"SignIn")),r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement(i.b,{className:"nav-link text-white",to:"/signup"},"SignUp")))}}]),t}(n.Component),S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),e.children)},x=a(51),O=a.n(x),N=(a(95),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"StylesGroup",value:function(){return{height:"400px",marginBottom:"10px"}}},{key:"render",value:function(){return r.a.createElement("div",{className:"list-group content-mensajes col-md-6 listamensajestotales",style:this.StylesGroup(),id:"scrollMensajes"},this.props.ArrayMessages.map((function(e,t){return r.a.createElement("div",{className:"list-group-item list-group-item-action active mb-2 bg-white text-dark border-white radius-5 rounded",key:t},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},e.email===window.localStorage.getItem("correoactivo")?r.a.createElement("h5",{className:"mb-1"},"Yo"):r.a.createElement("h5",{className:"mb-1"},e.email),r.a.createElement("small",null,e.hora)),r.a.createElement("p",{className:"mb-1"},e.msj),r.a.createElement("small",null,"Mensaje seguro"))})))}}]),t}(n.Component)),k=a(23),I=a.n(k),C=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list-group mb-3 col-md-6"},this.props.arregloListaUsuarios.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item d-flex justify-content-between align-items-center"},e.email,"online"===e.status?r.a.createElement("span",{className:"badge",style:{color:"green"}},e.status,r.a.createElement("i",{style:{color:"green",fontSize:"1.2rem"},className:"fas fa-user-alt"})):r.a.createElement("span",{className:"badge",style:{color:"red"}},e.status,r.a.createElement("i",{style:{color:"red",fontSize:"1.2rem"},className:"fas fa-user-alt-slash"})))})))}}]),t}(n.Component),A=a(52),U=a.n(A),M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).audiomessage=r.a.createRef(),e.mensaje=r.a.createRef(),e.scrolling=function(){var e=document.querySelector(".listamensajestotales"),t=e.scrollHeight;e.scrollTop=t},e.state={Messages:[],email:"",msj:"",StatusUsers:[]},e.Changevars.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.clientIO=O()("https://serverchatexample01.herokuapp.com/"),this.UpdateStateOffLineOnLine(),this.clientIO.emit("updatestatusoffline",{opcion:"refreshstatuslist"}),this.clientIO.on("updateliststatus",function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"udpateGlobal"===a.status&&e.UpdateStateOffLineOnLine();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.clientIO.on("messageBroadcast",function(){var t=Object(v.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Running"!==a.status){t.next=8;break}return t.next=3,I.a.toast({html:"Existe  un nuevo mensaje , Revisalo !!!"});case 3:return t.next=5,e.audiomessage.current.play();case 5:return t.next=7,e.UpdateMessages();case 7:e.scrolling();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.UpdateMessages(),this.scrolling()}},{key:"UpdateStateOffLineOnLine",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("correoactivo"),e.next=3,fetch("https://serverchatexample01.herokuapp.com/liststatususer/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,this.setState({StatusUsers:n});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UpdateMessages",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://serverchatexample01.herokuapp.com/viewmessages");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({Messages:a}),console.log(this.state),this.scrolling();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"GoMessage",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.msj,n=window.localStorage.getItem("correoactivo"),r="".concat((new Date).getHours().toPrecision().toString(),":").concat((new Date).getMinutes().toPrecision().toString(),":").concat((new Date).getSeconds().toPrecision().toString(),"  ").concat((new Date).toDateString().toString()),e.next=6,this.clientIO.emit("messageGlobal",{email:n,msj:a,hora:r});case 6:this.mensaje.current.value="",I.a.toast({html:"".concat(n," acabas de agregar un nuevo mensaje")}),this.UpdateMessages();case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"Changevars",value:function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(Object(b.a)({},t.target.name,t.target.value));case 2:console.log(this.state);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"detailsbutton",value:function(){return{height:"70px",fontSize:"2rem",textAlign:"center"}}},{key:"CerrarSesion",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("correoactivo"),e.next=3,this.clientIO.emit("updatestatusoffline",{email:t,opcion:"offline"});case 3:return e.next=5,localStorage.setItem("setAuthenticated",!1);case 5:return e.next=7,localStorage.clear();case 7:sessionStorage.clear(),this.props.history.push("/signin");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null===localStorage.getItem("setAuthenticated")?(console.log("gaaaa"),r.a.createElement(o.a,{to:"/signin"})):r.a.createElement("div",{className:"fondoPantalla"},r.a.createElement("audio",{src:U.a,controls:!0,ref:this.audiomessage,hidden:!0}),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex bd-highlight bg-danger  mb-3"},r.a.createElement("div",{className:"mr-auto p-2 "},r.a.createElement(i.b,{className:"nav-link text-white",to:"/profile"},"Usuario  Activo : ",window.localStorage.getItem("correoactivo"))),r.a.createElement("div",{className:"p-2 bd-highlight"},r.a.createElement("button",{className:"btn  btn-danger text-white text-center",style:{height:"70px"},onClick:this.CerrarSesion.bind(this)},"Cerrar Sesion")))),I.a.AutoInit(),r.a.createElement("div",{className:"alert alert-primary mt-3 text-center bg-dark text-white",role:"alert"},r.a.createElement("p",null,"Example simple chat global (WasauskyOK)"),r.a.createElement("p",null,"contact : daniechoque159@gmail.com ")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"})),r.a.createElement("div",{className:" fondoPantalla mx-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row px-lg-2 px-2"},r.a.createElement(C,{arregloListaUsuarios:this.state.StatusUsers}),r.a.createElement(N,{ArrayMessages:this.state.Messages})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{style:{height:"15vh"},className:"form-group"},r.a.createElement("form",{className:"d-flex align-items-center",onSubmit:this.GoMessage.bind(this)},r.a.createElement("textarea",{style:{height:"100%"},cols:"20",name:"msj",ref:this.mensaje,onChange:this.Changevars.bind(this),className:"form-control  mr-5",placeholder:"Escribe algo :D"}),r.a.createElement("button",{type:"submit",style:this.detailsbutton(),className:"btn btn-success col-3 font-weight-bold"},"Go"))))))}}]),t}(n.Component);var D=function(){return r.a.createElement(i.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/profile",component:M}),r.a.createElement(S,null,r.a.createElement(o.b,{exact:!0,path:"/",component:j}),r.a.createElement(o.b,{exact:!0,path:"/principal",component:d}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:w}),r.a.createElement(o.b,{exact:!0,path:"/signin",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.952a735a.chunk.js.map