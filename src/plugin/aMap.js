import Vue from 'vue';
// 高德地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  Key:'91e5cdf7df66cb40015bb7bbadcd66b9',//到官网申请
  plugin:['AMap.Autocomplete','AMap.PlaceSearch','AMap.Scale','AMap.OverView','AMap.ToolBar','AMap.MapType','AMap.PolyEditor','AMap.CircleEditor','AMap.Geolocation'],
  v:'1.4.4',
})