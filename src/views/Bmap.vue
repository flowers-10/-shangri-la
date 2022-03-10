<template>
  <div>
     <van-sticky>
      <van-nav-bar title="酒店周边信息">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" class="hppic" @click="back" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <div class="amap-wrap">
      <el-amap
        vid="amapContainer"
        class="amap-demo"
        :events="events"
        :zoom="zoom"
        :center="center"
        :amap-manager="amapManager"
      >
      </el-amap>
    </div>
    <div class="bmapaa">
      <van-tabs color="rgb(163, 146, 49)">
        <van-tab :title="`${data[i].title}`" v-for="(item, i) of data" :key="i">

          <div class="bmapoverflow">
          <div v-for="(item1, i) of item.address" :key="i">
            <van-cell :title="item.address[i].go" icon="location">
              <!-- 使用 right-icon 插槽来自定义右侧图标 -->
              <template #right-icon>
                <van-button
                  color="rgb(135,100,50)"
                  size="small"
                  @click="
                    addOverlayGroup(
                      item.address[i].coordinate,
                      item.address[i].coordinate1,
                      item.address[i].go,
                      item.title
                    )
                  "
                  >导航
                </van-button>
              </template>
            </van-cell>
          </div>
        </div>

        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { AMapManager, AMapDiver, lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new AMapManager();
export default {
  name: "Index",
  data() {
    const _this = this;
    return {
      data: [
        {
          title: "交通",
          address: [
            { go: '地铁二号线凤起路地铁E口', coordinate: "120.163028", coordinate1: "30.263866" },
            { go: '地铁1号线龙翔桥地铁站C3口', coordinate: "120.163758", coordinate1: "30.254599" },
            { go: '地铁2号线武林门地铁站A1口', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '杭州城站火车站', coordinate: "120.158962", coordinate1: "30.274593" },
            { go: '杭州火车东站', coordinate: "120.21311", coordinate1: "30.290995" },
            { go: '杭州萧山国际机场', coordinate: "120.431979", coordinate1: "30.235988" },
          ],
        },
       {
          title: "景点",
          address: [
            { go: '杭州西湖风景名胜区-岳王庙', coordinate: "120.133277", coordinate1: "30.251465" },
            { go: '中国印学博物馆', coordinate: "120.136962", coordinate1: "30.255593" },
            { go: '浙江省博物馆钱币馆', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '浙江省博物馆书画馆', coordinate: "120.139962", coordinate1: "30.255593" },
            { go: '浙江省博物馆青瓷馆', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '浙江省博物馆(孤山馆区)', coordinate: "120.139962", coordinate1: "30.255593" },
          ],
        },
        {
          title: "购物",
          address: [
            { go: '锦绣天地购物中心', coordinate: "120.137962", coordinate1: "30.252593" },
            { go: '中国广厦西湖时代广场', coordinate: "120.136962", coordinate1: "30.255593" },
            { go: '杭州湖滨银泰in77A区', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '利星广场', coordinate: "120.139962", coordinate1: "30.255593" },
            { go: '利星名品', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '杭州湖滨银泰in77B区', coordinate: "120.139962", coordinate1: "30.255593" },
          ],
        },
        {
          title: "娱乐",
          address: [
            { go: '杭州中奥网球俱乐部', coordinate: "120.137962", coordinate1: "30.252593" },
            { go: '星美国际影城黄龙店', coordinate: "120.136962", coordinate1: "30.255593" },
            { go: '三维网球俱乐部', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '浙江歌舞剧院', coordinate: "120.139962", coordinate1: "30.255593" },
            { go: '浙江音乐厅', coordinate: "120.138962", coordinate1: "30.254593" },
            { go: '浙江大学永谦剧场', coordinate: "120.139962", coordinate1: "30.255593" },
          ],
        },
      ],
      // map实例化
      map: null,
      amapManager,
      center: [],
      zoom: 15,
      events: {
        init(o) {
          // let marker=new AMap.Marker({
          //   position:[120.136962, 30.252593],
          //   // position:[120.162435,30.26002],
          // });
          // marker.setMap(o);
          // 兼容高德地图实例化
          lazyAMapApiLoaderInstance.load().then(() => {
            _this.initMap();
          });
        },
      },

      // de
      // lnglats: [
      //   [120.137962, 30.252593],
      //   [120.136962, 30.255593],
      //   [120.138962, 30.254593],
      //   [120.139962, 30.255593],
      //   [120.133962, 30.255593],
      //   [120.139962, 30.255593],
      //   [120.131962, 30.250593],
      //   [120.129962, 30.245593],
      //   [120.139962, 30.255593],
      // ],
      markers: [],
      overlayGroups: [],
      sum: 0,
    };
  },
  methods: {
    back() {
      this.$router.push("/hotelroom");
    },
    initMap() {
      // 方便遮罩物放入map里面
      this.map = amapManager.getMap();
      // 创建一个 icon
      var endIcon = new AMap.Icon({
        size: new AMap.Size(100, 100),
        image: "imgs/logowhite1.png",
        imageSize: new AMap.Size(30, 30),
      });

      // 将 icon 传入 marker
      var endMarker = new AMap.Marker({
        position: new AMap.LngLat(this.center[0],this.center[1]),
        icon: endIcon,
        offset: new AMap.Pixel(-13, -30),
      });

      // 将 markers 添加到地图
      this.map.add(endMarker);

      // for (var i = 0; i < this.lnglats.length; i++) {
      //   var lnglat = this.lnglats[i];
      //   // 创建点实例
      //   var marker = new AMap.Marker({
      //     position: new AMap.LngLat(lnglat[0], lnglat[1]),
      //     icon:
      //       "https://webapi.amap.com/theme/v1.3/markers/n/mark_b" +
      //       (i + 1) +
      //       ".png",
      //     extData: {
      //       id: i + 1,
      //     },
      //   });
      //   // this.map.add(marker);
      //   this.markers.push(marker);
      // }
      // 添加覆盖物群组

      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      this.map.addControl(new AMap.ToolBar());
      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      this.map.addControl(
        new AMap.Scale({
          offset: new AMap.Pixel(50, 30),
        })
      );
    },
    addOverlayGroup(m, b,s,q) {
      //  this.map.add(new AMap.OverlayGroup(this.markers));
      // 循环接收点坐标创造点位
      if(q=="娱乐"){
        this.zoom=14;
      }
      if(q=="景点"){
        this.zoom=13;
      }
      if(q=="购物"){
        this.zoom=12;
      }
      if(q=="交通"){
        this.zoom=10;
      }
      this.sum++;
      this.map = amapManager.getMap();
      var Marker1 = new AMap.Marker({
        position: new AMap.LngLat(m, b),
      });
        Marker1.setMap(this.map);

    // 设置鼠标划过点标记显示的文字提示
    Marker1.setTitle(s);

    // 设置label标签
    // label默认蓝框白底左上角显示，样式className为：amap-marker-label
    Marker1.setLabel({
        direction:'right',
        offset: new AMap.Pixel(10, 0),  //设置文本标注偏移量
        // 这个值与数据库中的信息关联
        content:`<div class='info'> ${s}</div>`, //设置文本标注内容
            });
      
      // 将 markers 添加到地图
      this.map.add(Marker1);
    },
  },

  mounted() {
    
   if(sessionStorage.hotel_id==1){
     this.center=[120.136962, 30.252593];
   }else if(sessionStorage.hotel_id==2){
     this.center=[120.161773,30.259949]
   }else if(sessionStorage.hotel_id==3){
     this.center=[121.450424,31.223162]
   }else if(sessionStorage.hotel_id==4){
     this.center=[121.499415,31.235769]
   }else if(sessionStorage.hotel_id==5){
     this.center=[121.481509,31.151298]
   }else{
     this.center=[121.564318,31.213549]
   }
    
  },
};
</script>
<style>
.hppic {
  height: 30px;
}
.amap-wrap {
  height: 66vh;
}
.bmapspan {
  margin-left: 25vw;
  font-size: 18px;
}
.bmapoverflow{
  width: 100vw;
  height: 18vh;
  overflow: auto;
}
</style>