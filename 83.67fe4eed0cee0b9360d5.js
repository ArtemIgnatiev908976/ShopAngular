"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[83],{3083:(ut,f,s)=>{s.r(f),s.d(f,{AdminModule:()=>et});var l=s(8583),a=s(1385),t=s(639),p=s(8338);const Z=function(){return["/admin","dashboard"]},_=function(){return["/admin","add"]},h=function(){return["/admin","orders"]};function A(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"ul"),t.TgZ(1,"li",5),t.TgZ(2,"a",6),t._uU(3,"Dashboard"),t.qZA(),t.qZA(),t.TgZ(4,"li",5),t.TgZ(5,"a",6),t._uU(6,"Add product"),t.qZA(),t.qZA(),t.TgZ(7,"li",5),t.TgZ(8,"a",6),t._uU(9,"Orders"),t.qZA(),t.qZA(),t.TgZ(10,"li",5),t.TgZ(11,"a",7),t.NdJ("click",function(r){return t.CHM(e),t.oxw().logout(r)}),t._uU(12,"Logout"),t.qZA(),t.qZA(),t.qZA()}2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(3,Z)),t.xp6(3),t.Q6J("routerLink",t.DdM(4,_)),t.xp6(3),t.Q6J("routerLink",t.DdM(5,h)))}const T=function(){return["/admin","login"]};function v(o,i){1&o&&(t.TgZ(0,"ul"),t.TgZ(1,"li",5),t.TgZ(2,"a",6),t._uU(3,"Login"),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,T)))}let q=(()=>{class o{constructor(e,n){this.auth=e,this.router=n}ngOnInit(){}logout(e){event.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.e),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-admin-layout"]],decls:9,vars:2,consts:[[1,"navbar","bg-dark"],["routerLink","/"],[4,"ngIf","ngIfElse"],["login",""],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"nav",0),t.TgZ(1,"h1"),t.TgZ(2,"a",1),t._uU(3,"Online Shop"),t.qZA(),t.qZA(),t.YNc(4,A,13,6,"ul",2),t.YNc(5,v,4,2,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(7,"div",4),t._UZ(8,"router-outlet"),t.qZA()),2&e){const r=t.MAs(6);t.xp6(4),t.Q6J("ngIf",n.auth.isAuthenticated())("ngIfElse",r)}},directives:[a.yS,l.O5,a.lC,a.Od],styles:[""]}),o})();var u=s(665);function b(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"),t.qZA())}function C(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"),t.qZA())}function x(o,i){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,b,2,0,"small",9),t.YNc(2,C,2,0,"small",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("email").errors.required),t.xp6(1),t.Q6J("ngIf",e.form.get("email").errors.email)}}function U(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 password"),t.qZA())}function I(o,i){if(1&o&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.AsE(" \u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 ",e.form.get("password").errors.minlength.requiredLength," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 \u043e\u043d ",e.form.get("password").errors.minlength.actualLength," \u0441\u0438\u043c\u0432\u043e\u043b\u0430.")}}function y(o,i){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,U,2,0,"small",9),t.YNc(2,I,2,2,"small",9),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("password").errors.required),t.xp6(1),t.Q6J("ngIf",e.form.get("password").errors.minLength)}}let N=(()=>{class o{constructor(e,n){this.auth=e,this.router=n,this.submitted=!1}submit(){this.form.invalid||(this.submitted=!0,this.auth.login({email:this.form.value.email,password:this.form.value.password,returnSecureToken:!0}).subscribe(n=>{this.router.navigate(["/admin","dashboard"]),this.submitted=!1},()=>{this.submitted=!1}))}ngOnInit(){this.form=new u.cw({email:new u.NI(null,[u.kI.required,u.kI.email]),password:new u.NI(null,[u.kI.required,u.kI.minLength(6)])})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.e),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login-page"]],decls:17,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"form-control"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","email","formControlName","password"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"login-page works!"),t.qZA(),t.TgZ(2,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(3,"h2"),t._uU(4,"\u0412\u043e\u0439\u0442\u0438 \u043a\u0430\u043a \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"),t.qZA(),t.TgZ(5,"div",1),t.TgZ(6,"label",2),t._uU(7,"Email"),t.qZA(),t._UZ(8,"input",3),t.YNc(9,x,3,2,"div",4),t.qZA(),t.TgZ(10,"div",1),t.TgZ(11,"label",5),t._uU(12,"\u041f\u0430\u0440\u043e\u043b\u044c"),t.qZA(),t._UZ(13,"input",6),t.YNc(14,y,3,2,"div",4),t.qZA(),t.TgZ(15,"button",7),t._uU(16," \u0412\u043e\u0439\u0442\u0438"),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(7),t.Q6J("ngIf",n.form.get("email").touched&&n.form.get("email").invalid),t.xp6(5),t.Q6J("ngIf",n.form.get("password").touched&&n.form.get("password").invalid),t.xp6(1),t.Q6J("disabled",n.form.invalid||n.submitted))},directives:[u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,l.O5],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),o})();var m=s(266),g=s(4668);function P(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0418\u043c\u044f \u0442\u043e\u0432\u0430\u0440\u0430"),t.qZA())}function w(o,i){if(1&o&&(t.TgZ(0,"div",16),t.YNc(1,P,2,0,"small",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("title").errors.required)}}function J(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0430"),t.qZA())}function E(o,i){if(1&o&&(t.TgZ(0,"div",16),t.YNc(1,J,2,0,"small",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.form.get("price").errors.required)}}let O=(()=>{class o{constructor(e,n){this.productServ=e,this.router=n,this.submitted=!1}ngOnInit(){this.form=new u.cw({type:new u.NI(null,u.kI.required),title:new u.NI(null,u.kI.required),photo:new u.NI(null,u.kI.required),info:new u.NI(null,u.kI.required),price:new u.NI(null,u.kI.required)})}submit(){if(this.form.invalid)return;this.submitted=!0;const e={type:this.form.value.type,title:this.form.value.title,photo:this.form.value.photo,info:this.form.value.info,price:this.form.value.price,date:new Date};console.log(this.form),this.productServ.create(e).subscribe(n=>console.log(n)),this.form.reset(),this.submitted=!1,this.router.navigate(["/"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.M),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-page"]],decls:33,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"text-center"],[1,"form-control"],["for","type"],["formControlName","type"],["value","Phone"],["value","Tablet"],["value","Laptop"],["for","title"],["id","title","type","title","formControlName","title"],["class","validation",4,"ngIf"],["formControlName","photo"],["formControlName","info"],["for","price"],["id","price","type","price","formControlName","price"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(1,"h2",1),t._uU(2,"\u0414\u043e\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"label",3),t._uU(5,"Type"),t.qZA(),t.TgZ(6,"select",4),t.TgZ(7,"option",5),t._uU(8,"Phone"),t.qZA(),t.TgZ(9,"option",6),t._uU(10,"Tablet"),t.qZA(),t.TgZ(11,"option",7),t._uU(12,"Laptop"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",2),t.TgZ(14,"label",8),t._uU(15,"Name"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,w,2,1,"div",10),t.qZA(),t.TgZ(18,"div",2),t.TgZ(19,"label",3),t._uU(20,"Photo:"),t.qZA(),t._UZ(21,"quill-editor",11),t.qZA(),t.TgZ(22,"div",2),t.TgZ(23,"label",3),t._uU(24,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA(),t._UZ(25,"quill-editor",12),t.qZA(),t.TgZ(26,"div",2),t.TgZ(27,"label",13),t._uU(28,"\u0426\u0435\u043d\u0430:"),t.qZA(),t._UZ(29,"input",14),t.YNc(30,E,2,1,"div",10),t.qZA(),t.TgZ(31,"button",15),t._uU(32,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",n.form),t.xp6(17),t.Q6J("ngIf",n.form.get("title").touched&&n.form.get("title").invalid),t.xp6(13),t.Q6J("ngIf",n.form.get("price").touched&&n.form.get("price").invalid),t.xp6(1),t.Q6J("disabled",n.form.invalid||n.submitted))},directives:[u._Y,u.JL,u.sg,u.EJ,u.JJ,u.u,u.YN,u.Kr,u.Fj,l.O5,g.g6],styles:[""]}),o})(),L=(()=>{class o{transform(e,n=""){return n.trim()?e.filter(r=>r.title.toLowerCase().includes(n.toLowerCase())):e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"search",type:o,pure:!0}),o})();const Y=function(o){return["/admin","product",o,"edit"]};function F(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td"),t.TgZ(11,"button",7),t._uU(12,"Open"),t.qZA(),t.qZA(),t.TgZ(13,"td"),t.TgZ(14,"button",8),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw(2).remove(d.id)}),t._uU(15,"delete"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit,n=i.index;t.xp6(2),t.Oqu(n+1),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Oqu(t.xi3(9,5,e.date,"short")),t.xp6(3),t.Q6J("routerLink",t.VKq(8,Y,e.id))}}function S(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"h2",3),t._uU(2,"Dashboard of products "),t.qZA(),t.TgZ(3,"div",4),t.TgZ(4,"input",5),t.NdJ("ngModelChange",function(r){return t.CHM(e),t.oxw().productName=r}),t.qZA(),t.qZA(),t.TgZ(5,"table"),t.TgZ(6,"thead"),t.TgZ(7,"tr"),t.TgZ(8,"th"),t._uU(9,"id"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"name"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"price"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Date of create"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"open"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"delete"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,F,16,10,"tr",6),t.ALo(22,"search"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.productName),t.xp6(17),t.Q6J("ngForOf",t.xi3(22,2,e.products,e.productName))}}function D(o,i){1&o&&(t.TgZ(0,"p",3),t._uU(1,"Loading...."),t.qZA())}let k=(()=>{class o{constructor(e){this.productServ=e,this.products=[]}ngOnInit(){this.pSub=this.productServ.getAll().subscribe(e=>{this.products=e})}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.rSub&&this.rSub.unsubscribe()}remove(e){this.rSub=this.productServ.remove(e).subscribe(()=>{this.products=this.products.filter(n=>n.id!==e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[1,"text-center"],[1,"form-control"],["type","text","placeholder","\u041d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"btn","btn-dark",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,S,23,5,"div",0),t.YNc(1,D,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",n.products.length)("ngIfElse",r)}},directives:[l.O5,u.Fj,u.JJ,u.On,l.sg,a.rH],pipes:[L,l.uU],styles:[""]}),o})();var Q=s(3190);function M(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0418\u043c\u044f \u0442\u043e\u0432\u0430\u0440\u0430"),t.qZA())}function B(o,i){if(1&o&&(t.TgZ(0,"div",18),t.YNc(1,M,2,0,"small",19),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.form.get("title").errors.required)}}function G(o,i){1&o&&(t.TgZ(0,"small"),t._uU(1,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443 \u0442\u043e\u0432\u0430\u0440\u0430"),t.qZA())}function j(o,i){if(1&o&&(t.TgZ(0,"div",18),t.YNc(1,G,2,0,"small",19),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.form.get("price").errors.required)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"form",2),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(2,"h2",3),t._uU(3,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"label",5),t._uU(6,"Type"),t.qZA(),t.TgZ(7,"select",6),t.TgZ(8,"option",7),t._uU(9,"Phone"),t.qZA(),t.TgZ(10,"option",8),t._uU(11,"Tablet"),t.qZA(),t.TgZ(12,"option",9),t._uU(13,"Laptop"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",4),t.TgZ(15,"label",10),t._uU(16,"Name"),t.qZA(),t._UZ(17,"input",11),t.YNc(18,B,2,1,"div",12),t.qZA(),t.TgZ(19,"div",4),t.TgZ(20,"label",5),t._uU(21,"Photo:"),t.qZA(),t._UZ(22,"quill-editor",13),t.qZA(),t.TgZ(23,"div",4),t.TgZ(24,"label",5),t._uU(25,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA(),t._UZ(26,"quill-editor",14),t.qZA(),t.TgZ(27,"div",4),t.TgZ(28,"label",15),t._uU(29,"\u0426\u0435\u043d\u0430:"),t.qZA(),t._UZ(30,"input",16),t.YNc(31,j,2,1,"div",12),t.qZA(),t.TgZ(32,"button",17),t._uU(33,"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(17),t.Q6J("ngIf",e.form.get("title").touched&&e.form.get("title").invalid),t.xp6(13),t.Q6J("ngIf",e.form.get("price").touched&&e.form.get("price").invalid),t.xp6(1),t.Q6J("disabled",e.form.invalid||e.submitted)}}function $(o,i){1&o&&(t.TgZ(0,"p",3),t._uU(1,"Loading...."),t.qZA())}let H=(()=>{class o{constructor(e,n,r){this.route=e,this.productServ=n,this.router=r,this.submitted=!1}ngOnInit(){this.route.params.pipe((0,Q.w)(e=>this.productServ.getById(e.id))).subscribe(e=>{this.product=e,this.form=new u.cw({type:new u.NI(this.product.type,u.kI.required),title:new u.NI(this.product.title,u.kI.required),photo:new u.NI(this.product.photo,u.kI.required),info:new u.NI(this.product.info,u.kI.required),price:new u.NI(this.product.price,u.kI.required)})})}submit(){this.form.invalid||(this.submitted=!0,this.productServ.update(Object.assign(Object.assign({},this.product),{type:this.form.value.type,title:this.form.value.title,photo:this.form.value.photo,info:this.form.value.info,price:this.form.value.price,date:new Date})).subscribe(e=>{this.submitted=!1,this.router.navigate(["/admin","dashboard"])}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.gz),t.Y36(m.M),t.Y36(a.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"text-center"],[1,"form-control"],["for","type"],["formControlName","type"],["value","Phone"],["value","Tablet"],["value","Laptop"],["for","title"],["id","title","type","title","formControlName","title"],["class","validation",4,"ngIf"],["formControlName","photo"],["formControlName","info"],["for","price"],["id","price","type","price","formControlName","price"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"validation"],[4,"ngIf"]],template:function(e,n){if(1&e&&(t.YNc(0,X,34,4,"div",0),t.YNc(1,$,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",n.form)("ngIfElse",r)}},directives:[l.O5,u._Y,u.JL,u.sg,u.EJ,u.JJ,u.u,u.YN,u.Kr,u.Fj,g.g6],styles:[""]}),o})();var z=s(1390);function W(o,i){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.title)}}function K(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t.YNc(11,W,2,1,"div",4),t.qZA(),t.TgZ(12,"td"),t.TgZ(13,"div",3),t._uU(14),t.qZA(),t.TgZ(15,"div",3),t._uU(16),t.qZA(),t.qZA(),t.TgZ(17,"td"),t.TgZ(18,"button",5),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw(2).remove(d.id)}),t._uU(19,"Complited"),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.xp6(2),t.Oqu(t.xi3(3,7,e.data,"medium")),t.xp6(3),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Q6J("ngForOf",e.orders),t.xp6(3),t.hij("",e.price," $"),t.xp6(2),t.hij("",e.payment," ")}}function R(o,i){if(1&o&&(t.TgZ(0,"div",2),t.TgZ(1,"h2",3),t._uU(2,"Table of orders"),t.qZA(),t.TgZ(3,"table"),t.TgZ(4,"thead"),t.TgZ(5,"tr"),t.TgZ(6,"th"),t._uU(7,"Data"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Phone"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Name"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Address"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Products"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Price"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Status"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,K,20,10,"tr",4),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(21),t.Q6J("ngForOf",e.orders)}}function V(o,i){1&o&&(t.TgZ(0,"p",3),t._uU(1,"\u041d\u0435\u0442 \u0437\u043a\u0430\u0437\u043e\u0432"),t.qZA())}let tt=(()=>{class o{constructor(e){this.orderServ=e,this.orders=[]}ngOnInit(){this.pSub=this.orderServ.getAll().subscribe(e=>{this.orders=e})}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.rSub&&this.rSub.unsubscribe()}remove(e){this.rSub=this.orderServ.remove(e).subscribe(()=>{this.orders=this.orders.filter(n=>n.id!==e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(z.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-orders-page"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["noOrders",""],[1,"container"],[1,"text-center"],[4,"ngFor","ngForOf"],[1,"btn","btn-danger",3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,R,22,1,"div",0),t.YNc(1,V,2,0,"ng-template",null,1,t.W1O)),2&e){const r=t.MAs(2);t.Q6J("ngIf",n.orders.length)("ngIfElse",r)}},directives:[l.O5,l.sg],pipes:[l.uU],styles:[""]}),o})(),c=(()=>{class o{constructor(e,n){this.auth=e,this.router=n}canActivate(e,n){return this.auth.isAuthenticated()||(this.auth.logout(),this.router.navigate(["/admin","login"])),!0}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(p.e),t.LFG(a.F0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.fi.forRoot(),l.ez,u.u5,u.UX,a.Bz.forChild([{path:"",component:q,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:N},{path:"dashboard",component:k,canActivate:[c]},{path:"add",component:O,canActivate:[c]},{path:"orders",component:tt,canActivate:[c]},{path:"product/:id/edit",component:H,canActivate:[c]}]}])],a.Bz]}),o})()}}]);