import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible";
import { Button } from 'vant';
import { Image as VanImage } from 'vant';
import { Popup } from 'vant';
import { NoticeBar } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { DatetimePicker } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { NavBar } from 'vant';
import { Area } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import axios from 'axios'
import { Swipe, SwipeItem } from 'vant';
import { Divider } from 'vant';
import { Col, Row } from 'vant';
import { PullRefresh } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Card } from 'vant';
import { Tag } from 'vant';
import { Icon } from 'vant';
import { Calendar } from 'vant';
import { Search } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Step, Steps } from 'vant';
import { Stepper } from 'vant';
import { Tab, Tabs } from 'vant';
import { Switch } from 'vant';
import { Picker } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Empty } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Sticky } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import Qs from 'qs'
import { Progress } from 'vant';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 高德组件
import "./plugin/aMap"
import { Circle } from 'vant';

Vue.use(Circle);
NProgress.configure({
  easing:'ease',
  speed:500,
  trickleSpeed:200,
  minimum:0.3
})


Vue.use(Progress);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Sticky);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Empty);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Picker);
Vue.use(Switch);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Stepper);
Vue.use(Step);
Vue.use(Steps);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(Calendar);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Card);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(Col);
Vue.use(Row);
Vue.use(Divider);
Vue.prototype.$axios = axios 
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Area);
Vue.use(NavBar);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DatetimePicker);
Vue.use(Form);
Vue.use(Field);
Vue.use(NoticeBar);
Vue.use(Popup);
Vue.use(VanImage);
Vue.use(Button);
Vue.config.productionTip = false
axios.defaults.baseURL='http://124.223.168.27:8887'
Vue.prototype.axios=axios
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.prototype.$qs=Qs
Vue.config.productionTip = false

Vue.prototype.$store = store
axios.interceptors.request.use(function(config){
  //   console.log(config);
    config.headers.Authorization  = window.sessionStorage.getItem('token')
  //   console.log(config);
    return config
  })
// router.beforeEach((to,from,next)=>{

//   if( store.state.id || to.path ===  '/login' || to.path === '/cover' || to.path === "/hotel" || to.path === "/purchase" || to.path === "/add" || to.path === "/gengduo" || to.path === "/reg"){
//       NProgress.start();
//       next();
//   }else{
//     next({
//       path:"/login"
//     })
//   }
// })
// router.afterEach(()=>{
//   NProgress.done();
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
