webpackJsonp([73],{DKpf:function(_,t,v){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=v("vLgD"),d={props:["route"],data:function(){return{info:{}}},components:{},computed:{},mounted:function(){var _=this,t=this.route;Object(o.a)({url:"/data/query/wellcompletiondata",method:"post",data:t}).then(function(t){_.info=t[0]})},methods:{}},i={render:function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("div",{staticClass:"section"},[v("table",[v("tr",[v("td",{attrs:{width:"30%"}},[_._v("开始搬迁日期")]),_._v(" "),v("td",{attrs:{width:"30%"}},[_._v(_._s(_.info.move_at))])]),_._v(" "),v("tr",[v("td",[_._v("开始安装日期")]),_._v(" "),v("td",[_._v(_._s(_.info.setup_at))])]),_._v(" "),v("tr",[v("td",[_._v("导眼开钻时间")]),_._v(" "),v("td",[_._v(_._s(_.info.pilot_start_at))])]),_._v(" "),v("tr",[v("td",[_._v("侧钻井开工日期")]),_._v(" "),v("td",[_._v(_._s(_.info.sidetracked_start_at))])]),_._v(" "),_._l(_.info.drilling_completion_at_list,function(t,o){return[v("tr",{key:o},[v("td",[_._v("第"+_._s(o+1)+"次开钻日期")]),_._v(" "),v("td",[_._v(_._s(t.drill_at))])]),_._v(" "),v("tr",{key:o+100},[v("td",[_._v("第"+_._s(o+1)+"次完钻日期")]),_._v(" "),v("td",[_._v(_._s(t.completion_at))])])]}),_._v(" "),v("tr",[v("td",[_._v("完钻日期")]),_._v(" "),v("td",[_._v(_._s(_.info.drilling_finish_at))])]),_._v(" "),v("tr",[v("td",[_._v("完井日期")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_finish_at))])]),_._v(" "),v("tr",[v("td",[_._v("搬安与准备时间")]),_._v(" "),v("td",[_._v(_._s(_.info.move_prepare_at))])]),_._v(" "),v("tr",[v("td",[_._v("钻井时间")]),_._v(" "),v("td",[_._v(_._s(_.info.drilling_period))])]),_._v(" "),v("tr",[v("td",[_._v("完井时间")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_period))])]),_._v(" "),v("tr",[v("td",[_._v("建井时间")]),_._v(" "),v("td",[_._v(_._s(_.info.setup_period))])]),_._v(" "),v("tr",[v("td",[_._v("中途测试时间")]),_._v(" "),v("td",[_._v(_._s(_.info.middle_test_at))])]),_._v(" "),v("tr",[v("td",[_._v("完钻井深(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_depth))])]),_._v(" "),v("tr",[v("td",[_._v("完钻垂深(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_vertical_depth))])]),_._v(" "),v("tr",[v("td",[_._v("油气层顶部井深(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.oil_top_depth))])]),_._v(" "),v("tr",[v("td",[_._v("油气层底部井深(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.oil_bottom_depth))])]),_._v(" "),v("tr",[v("td",[_._v("完井方法")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_method))])]),_._v(" "),v("tr",[v("td",[_._v("钻井台月(月)")]),_._v(" "),v("td",[_._v(_._s(_.info.drilling_num_month))])]),_._v(" "),v("tr",[v("td",[_._v("钻井月速(m/月)")]),_._v(" "),v("td",[_._v(_._s(_.info.drilling_speed_month))])]),_._v(" "),v("tr",[v("td",[_._v("平均机械钻速(m/h)")]),_._v(" "),v("td",[_._v(_._s(_.info.avg_penetration))])]),_._v(" "),v("tr",[v("td",[_._v("井身质量")]),_._v(" "),v("td",[_._v(_._s(_.info.well_quality))])]),_._v(" "),v("tr",[v("td",[_._v("固井质量")]),_._v(" "),v("td",[_._v(_._s(_.info.cementation_quality))])]),_._v(" "),v("tr",[v("td",[_._v("钻井取心进尺(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.core_footage))])]),_._v(" "),v("tr",[v("td",[_._v("平均收获率(%)")]),_._v(" "),v("td",[_._v(_._s(_.info.avg_collection))])]),_._v(" "),v("tr",[v("td",[_._v("工程报废进尺(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.fail_footage))])]),_._v(" "),v("tr",[v("td",[_._v("返工进尺(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.remend_footage))])]),_._v(" "),v("tr",[v("td",[_._v("进尺损失率(%)")]),_._v(" "),v("td",[_._v(_._s(_.info.footage_loss))])]),_._v(" "),v("tr",[v("td",[_._v("完井总进尺(m)")]),_._v(" "),v("td",[_._v(_._s(_.info.completion_total_footage))])]),_._v(" "),v("tr",[v("td",[_._v("钻井事故故障次数(次)")]),_._v(" "),v("td",[_._v(_._s(_.info.accident_num))])])],2)])},staticRenderFns:[]},n=v("C7Lr")(d,i,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=73.f502fb49366994c6aeed.js.map