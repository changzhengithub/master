{"source":"webpackJsonp([10],{\"5NDc\":function(t,s){},Orvp:function(t,s,n){\"use strict\";var o=n(\"VU/8\")({name:\"KeyboardComponent\",methods:{press:function(t){this.$emit(\"PRESS_EVENT\",t)},remove:function(){this.$emit(\"REMOVE_EVENT\")}}},{render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o(\"section\",{staticClass:\"keyboard\"},[n._l(9,function(s,t){return o(\"li\",{key:t,staticClass:\"keyboard-item\",on:{click:function(t){n.press(s)}}},[n._v(n._s(s))])}),n._v(\" \"),o(\"li\",{staticClass:\"keyboard-item\"}),n._v(\" \"),o(\"li\",{staticClass:\"keyboard-item\",on:{click:function(t){n.press(0)}}},[n._v(\"0\")]),n._v(\" \"),o(\"li\",{staticClass:\"keyboard-item\",on:{click:n.remove}},[o(\"i\",{staticClass:\"iconfont icon-huitui\"})])],2)},staticRenderFns:[]},!1,function(t){n(\"5NDc\")},\"data-v-40ab26ca\",null);s.a=o.exports},eP4q:function(t,s){},potL:function(t,s,n){\"use strict\";Object.defineProperty(s,\"__esModule\",{value:!0});var o=n(\"Dd8w\"),e=n.n(o),a=n(\"Gu7T\"),i=n.n(a),r=n(\"poUI\"),c=n(\"NeIm\"),d=n(\"JXx5\"),p=n(\"V7vM\"),u=n(\"vPt9U\"),l=n(\"OrvpH\"),h=n(\"gbGHk\"),m=n(\"YzZEr\"),f=n(\"D7rtX\"),w={name:\"ModefyPayPasswordComponent\",data:function(){return{mark:!0,oldPassword:[],newPassword:[],button:{default:[{type:\"primary\",text:\"完成\"}]},payPassword:[],tip:{type:\"center\",content:\"请输入原始支付密码\"},title:{contentText:\"修改支付密码\"}}},components:{ButtonComponent:u.a,KeyboardComponent:l.a,PayPasswordComponent:h.a,TipComponent:m.a,TitleComponent:f.a},created:function(){this.init()},methods:{init:function(){switch(console.log(p.a.paySet),p.a.paySet.type){case\"modify\":this.tip.content=\"请输入原始支付密码\",this.title.contentText=\"修改支付密码\",this.submit=this.modify;break;case\"forget\":this.tip.content=\"请输入新的支付密码\",this.title.contentText=\"设置新支付密码\",this.submit=this.forget;break;case\"set\":this.tip.content=\"请设置支付密码\",this.title.contentText=\"设置支付密码\",this.submit=this.setPassword}},input:function(t){this.payPassword.length<6&&this.payPassword.push(t)},submit:function(){},modify:function(){var s=this;6!==this.payPassword.length&&r.a.show(\"请输入支付密码\"),this.mark?this.oldPassword=[].concat(i()(this.payPassword)):this.newPassword=[].concat(i()(this.payPassword)),c.a.send({url:\"UpdatePaymentPwd\",data:{token:p.a.token,phone:p.a.phone,oldPaymentPwd:this.oldPassword.join(\"\"),newPaymentPwd:this.newPassword.join(\"\")}}).success(function(t){s.payPassword=[],s.tip.content=\"设置新的支付密码\"}).fail(function(t){})},forget:function(){var t=e()({},p.a.forget);t.paymentPwd=this.payPassword.join(\"\"),c.a.send({url:\"ForgetPaymentPwd\",data:t}).success(function(t){r.a.show(\"支付密码修改成功\"),d.a.push(\"settings\")}).fail(function(t){})},setPassword:function(){c.a.send({url:\"SetPaymentPwd\",data:{token:p.a.token,phone:p.a.phone,paymentPwd:this.payPassword.join(\"\")}}).success(function(t){r.a.show(\"支付密码设置成功\"),d.a.push(\"settings\")}).fail(function(t){})},remove:function(){0<this.payPassword.length&&this.payPassword.pop()}}},y=n(\"VU/8\")(w,{render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n(\"section\",{staticClass:\"modefy-pay-password padding-top-126\"},[n(\"TitleComponent\",{attrs:{title:t.title}}),t._v(\" \"),n(\"TipComponent\",{staticClass:\"password-tip\",attrs:{tip:t.tip}}),t._v(\" \"),n(\"PayPasswordComponent\",{staticClass:\"password-input\",attrs:{payPassword:t.payPassword}}),t._v(\" \"),n(\"ButtonComponent\",{staticClass:\"password-btn padding-horizontal-30\",attrs:{button:t.button},on:{SUBMIT_EVENT:t.submit}}),t._v(\" \"),n(\"KeyboardComponent\",{on:{PRESS_EVENT:t.input,REMOVE_EVENT:t.remove}})],1)},staticRenderFns:[]},!1,function(t){n(\"eP4q\")},\"data-v-06f02c09\",null);s.default=y.exports}});"}