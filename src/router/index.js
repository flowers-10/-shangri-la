import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cover from '../views/Cover.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Hotelroom from '../views/Hotelroom.vue'
import destination from '../views/Destination.vue'
import Mudione from '../views/Mudione.vue'
import Muditwo from '../views/Muditwo.vue'
import Mudithree from '../views/Mudithree.vue'
import Mudifour from '../views/Mudifour.vue'
import Mudifive from '../views/Mudifive.vue'
import Hotel from '../views/Hotel.vue'
import Purchase from '../views/Purchase.vue'
import Add from '../views/Add.vue'
import Gengduo from '../views/Gengduo.vue'
// 地图
import Amap from '../views/Amap.vue'
import Bmap from '../views/Bmap.vue'

import jifen from '../views/jifen.vue'
import jifenone from '../components/jifen/jifenone.vue'
import jifentwo from '../components/jifen/jifentwo.vue'
import jifentwos from '../components/jifen/jifentwos.vue'
import jifentwos2 from '../components/jifen/jifentwos2.vue'
import jifentwos3 from '../components/jifen/jifentwos3.vue'
import jifentwos4 from '../components/jifen/jifentwos4.vue'
import jifentwos5 from '../components/jifen/jifentwos5.vue'
import jifentwos6 from '../components/jifen/jifentwos6.vue'
import jifentwos7 from '../components/jifen/jifentwos7.vue'
import jifentwos8 from '../components/jifen/jifentwos8.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/checked",
    component: () => import(/* webpackChunkName: "checked" */ '../views/Checked.vue'),
    name:"checked"
  },
  {
    path:"/payface1",
    component: () => import(/* webpackChunkName: "payface1" */ '../views/face/payface1.vue'),
    name:"Payface1"
  },
  {
    path:"/xlqstore",
    component: () => import(/* webpackChunkName: "xlqstore" */ '../views/Xlqstore.vue'),
    name:"xlqstore"
  },
  {
    path:"/customer",
    component: () => import(/* webpackChunkName: "customer" */ '../views/face/Customer.vue'),
    name:"customer"
  },
  {
    path: "/loginphone",
    name: "Loginphone",
    component: () =>
    import(/* webpackChunkName: "loginphone" */ "../views/face/Loginphone.vue"),
    meta: { title: "Loginphone", requiresAuth: true },
  },
  {
    path: "/resface",
    name: "Resface",
    component: () =>
      import(/* webpackChunkName: "resface" */ "../views/face/resface.vue"),
    meta: { title: "Resface", requiresAuth: true },
  },
  {
    path: "/logface",
    name: "Logface",
    component: () =>
      import(/* webpackChunkName: "logface" */ "../views/face/logface.vue"),
    meta: { title: "Logface", requiresAuth: true },
  },
  {
    path:"/first",
    component: () => import(/* webpackChunkName: "first" */ '../views/First.vue'),
    name:"first"
  },
  {
    path:'/jifentwos8',
    component:jifentwos8,
  },   
  {
    path:'/jifentwos7',
    component:jifentwos7,
  }, 
  {
    path:'/jifentwos6',
    component:jifentwos6,
  }, 
  {
    path:'/jifentwos5',
    component:jifentwos5,
  },
  {
    path:'/jifentwos4',
    component:jifentwos4,
  },
  {
    path:'/jifentwos3',
    component:jifentwos3,
  },

  {
    path:'/jifentwos2',
    component:jifentwos2,
  },

  {
    path:'/jifentwos',
    component:jifentwos,
  },
  {
    path:'/jifentwo',
    component:jifentwo,
  },
  {
    path:'/jifenone',
    component:jifenone,
  },
  {
    path:'/jifen',
    component:jifen,
  },
  // {
  //   path:"/jifen",
  //   component: () => import(/* webpackChunkName: "card" */ '../views/Jifen.vue'),
  //   name:"jifen"
  // },
  {
    path:"/card",
    component: () => import(/* webpackChunkName: "card" */ '../views/Card.vue'),
    name:"card"
  },
  {
    path:"/setemail",
    component: () => import(/* webpackChunkName: "setemail" */ '../views/Setemail.vue'),
    name:"setemail"
  },
  {
    path:"/setphone",
    component: () => import(/* webpackChunkName: "setphone" */ '../views/Setphone.vue'),
    name:"setphone"
  },
  {
    path:"/images",
    component: () => import(/* webpackChunkName: "images" */ '../views/Images.vue'),
    name:"images"
  },
  {
    path:"/sports",
    component: () => import(/* webpackChunkName: "sports" */ '../views/Sports.vue'),
    name:"sports"
  },
  {
    path:"/food",
    component: () => import(/* webpackChunkName: "food" */ '../views/Food.vue'),
    name:"food"
  },
  {
    path:"/address",
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue'),
    name:"address"
  },
  {
    path:"/hotelserve",
    component: () => import(/* webpackChunkName: "hotelserve" */ '../views/Hotelserve.vue'),
    name:"hotelserve"
  },
  {
    path:"/hotelpicture",
    component: () => import(/* webpackChunkName: "hotelpicture" */ '../views/Hotelpicture.vue'),
    name:"hotelpicture"
  },
  {
    path:"/book",
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue'),
    name:"book"
  },
  {
    path:"/tran",
    component: () => import(/* webpackChunkName: "tran" */ '../views/Tran.vue'),
    name:"tran"
  },
  {
    path:"/member",
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    name:"member"
  },
  {
    path:"/select",
    component: () => import(/* webpackChunkName: "select" */ '../views/Select.vue'),
    name:"select"
  },
  {
    path: '/destination',
    component: destination,
    name:'Destination',
  },
  {
    path: '/mudione',
    component: Mudione,
    name:"mudione"
  },
  {
    path: '/muditwo',
    component: Muditwo,
    name:"muditwo"
  },
  {
    path: '/mudithree',
    component: Mudithree,
    name:"mudithree"
  },
  {
    path: '/mudifour',
    component: Mudifour,
    name:"mudifour"
  },
  {
    path: '/mudifive',
    component: Mudifive,
    name:"mudifive"
  },
  {
    path:"/phone",
    component:()=>import(/* webpackChunkName: "phone" */ '../views/Phone.vue'),
    name:"phone"
  },
  {
    path:"/email",
    component:()=>import(/* webpackChunkName: "email" */ '../views/Emali.vue'),
    name:"email"
  },
  {
    path:"/updata",
    component:()=>import(/* webpackChunkName: "updata" */ '../views/Updata.vue'),
    name:"update"
  },
  {
    path:"/setup",
    component:()=>import(/* webpackChunkName: "setup" */ '../views/Setup.vue'),
    name:"setup"
  },
  {
    path:"/hobby",
    component:()=>import(/* webpackChunkName: "hobby" */ '../views/Hobby.vue'),
    name:"hobby"
  },
  {
      path:"/date",
      component:()=>import(/* webpackChunkName: "date" */ '../views/Date.vue'),
      name:"date"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/cover',
    component:Cover,
    name:"cover",
    meta: {  requiresAuth: true, keepAlive: false, }
  },
  {
    path:"/phonetwo",
    component: () => import(/* webpackChunkName: "phonetwo" */ '../views/PhoneTwo.vue'),
    name:"phonetwo"
  },
  {
    path:'/login',
    component:Login,
    name:"login",
    meta: { title: "login", requiresAuth: true, keepAlive: false, }

  },  
  {
    path:'/hotelroom',
    component:Hotelroom,
    name:"hotelroom"
  },
  {
    path:'/reg',
    component:Reg,
    name:"reg",
    meta: { title: "Reg", requiresAuth: true, keepAlive: true, }
  },
  {
    path:'/amap',
    component:Amap,
    name:"Amap"
  },
  {
    path:'/bmap',
    component: Bmap,
    name:"Bmap"
  },
  {
    path: '/',
    component: Home,
    name:"home",
    children:[{
      path:'hotel',
      component:Hotel,
      name:"hotel",
      meta: {  requiresAuth: true, keepAlive: false, }
    },
    {
      path:"purchase",
      component:Purchase,
      name:"purchase",
      meta: {  requiresAuth: true, keepAlive: false, }
    },
    {
      path:'add',
      component:Add,
      name:"add",
      meta: {  requiresAuth: true, keepAlive: false, }
    },
    {
      path:"gengduo",
      component:Gengduo,
      name:"gengduo",
      meta: {  requiresAuth: true, keepAlive: true, }
    },
  ]}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 设置路由全局守卫
// 路由跳转之前使用token进行判断，是否需要登录的权限
router.beforeEach((to, from, next) => {
  // console.log(to.meta.requiresAuth);
  // console.log(from);
  // console.log(to.path);
  if (to.meta.requiresAuth == true) {
    next();
  } else {
    const tokenStr = window.sessionStorage.getItem("token");
    if (!tokenStr) return next("/login");
    next();
  }
});

export default router
