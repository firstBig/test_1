webpackJsonp([34],{Ejzv:function(e,t){},oEij:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("4YfN"),n=a.n(l),i=a("P8yQ"),r=a.n(i),o=a("vLgD"),s={props:["route"],data:function(){return{tab:1,list:[]}},components:{},computed:{},mounted:function(){var e=this.route;Object(o.a)({url:"/singlewell/complexcondition?well_no=test&well_hole=hole1",method:"get",data:e}).then(function(e){console.log(e)}),this.draw()},methods:{draw:function(){this.pie(),this.bar()},pie:function(){var e=r.a.init(document.getElementById("pie"));e.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"访问来源",type:"pie",radius:["38%","50%"],center:["46%","26%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},{name:"事故复杂率",type:"pie",radius:"30%",center:["46%","26%"],label:{normal:{position:"inner"}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},{name:"访问来源",type:"pie",radius:["38%","50%"],center:["46%","78%"],data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},{name:"事故复杂率",type:"pie",radius:"30%",center:["46%","78%"],label:{normal:{position:"inner"}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]})},bar:function(){var e=r.a.init(document.getElementById("bar1")),t=r.a.init(document.getElementById("bar2")),a={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"3%",bottom:"12%",containLabel:!0},xAxis:[{type:"category",data:["移井架/搬迁","油套管问题","拆/装BOP及试压","接钻具","井控复杂","井控复杂","钻套管附件和水泥塞","移井架/搬迁","油套管问题","拆/装BOP及试压","接钻具","井控复杂","井控复杂","钻套管附件和水泥塞"]}],yAxis:[{type:"value"}],dataZoom:[{type:"inside"},{type:"slider"}],series:[{name:"直接访问",type:"bar",barWidth:"60%",center:["75%","60%"],data:[10,52,200,334,390,330,220,10,52,200,334,390,330,220]}]};e.setOption(n()({},a,{title:{text:"事故复杂占生产时效比率"}})),t.setOption(n()({},a,{title:{text:"事故复杂占非生产时效比率"}}))}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"tabs"},[a("div",{class:{active:1==e.tab},on:{click:function(t){e.tab=1}}},[e._v("事故复杂率")]),e._v(" "),a("div",{class:{active:2==e.tab},on:{click:function(t){e.tab=2}}},[e._v("事故复杂表")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.tab,expression:"tab == 1"}],staticClass:"map flex"},[a("div",{attrs:{id:"pie"}}),e._v(" "),e._m(0)]),e._v(" "),a("el-table",{directives:[{name:"show",rawName:"v-show",value:2==e.tab,expression:"tab == 2"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:""}},[a("el-table-column",{attrs:{prop:"",label:"侧钻"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"油套管问题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"修理"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"定向仪器故障"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"井口装置问题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"非计划起钻"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"组织停工"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"等人员"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"等设备"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"其它"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"卡钻/起下钻遇阻"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"卡测井仪器"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"落鱼处理"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"井漏"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"井眼问题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"固井问题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"井控复杂"}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"bar"},[t("div",{staticStyle:{height:"50%"},attrs:{id:"bar1"}}),this._v(" "),t("div",{staticStyle:{height:"50%"},attrs:{id:"bar2"}})])}]};var u=a("C7Lr")(s,c,!1,function(e){a("Ejzv")},"data-v-5b1b6f6d",null);t.default=u.exports}});
//# sourceMappingURL=34.bab65d77d43c7b3e4aa0.js.map