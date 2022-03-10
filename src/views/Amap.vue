<template>
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
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new AMapManager();
export default {
  name: "Index",
  data() {
    const _this = this;
    return {
      // map实例化
      map: null,
      amapManager,
      center: [120.145962, 30.255593],
      zoom: 13,
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
    };
  },
  methods: {
    initMap() {
      // 方便遮罩物放入map里面
      this.map = amapManager.getMap();
      // 浏览器定位
      var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：5s
        position: "RB", //定位按钮的停靠位置
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
      });
      this.map.addControl(geolocation);
      geolocation.getCurrentPosition(function(status, result) {
        if (status == "complete") {
        } else {
        }
      });

      //解析定位错误信息

      // let marker = new AMap.Marker({
      //   position: [120.136962, 30.252593],
      // });
      // let marker2 = new AMap.Marker({
      //   position: [120.162435, 30.26002],
      // });
      // marker.setMap(this.map);
      // marker2.setMap(this.map);

      // 新功能
      // 以 icon URL 的形式创建一个途经点
      if (sessionStorage.city_id == 1) {
        // 创建一个 Icon
        var startIcon = new AMap.Icon({
          // 图标尺寸
          size: new AMap.Size(100, 100),
          // 图标的取图地址
          image: "imgs/logowhite1.png",
          // 图标所用图片大小
          imageSize: new AMap.Size(30, 30),
          // 图标取图偏移量
          // imageOffset: new AMap.Pixel(-9, -13)
        });

        // 将 icon 传入 marker
        var startMarker = new AMap.Marker({
          position: new AMap.LngLat(120.162435, 30.26002),
          icon: startIcon,
        });

        // 创建一个 icon
        var endIcon = new AMap.Icon({
          size: new AMap.Size(100, 100),
          image: "imgs/logowhite1.png",
          imageSize: new AMap.Size(30, 30),
        });

        // 将 icon 传入 marker
        var endMarker = new AMap.Marker({
          position: new AMap.LngLat(120.136962, 30.252593),
          icon: endIcon,
          offset: new AMap.Pixel(-13, -30),
        });

        // 将 markers 添加到地图
        this.map.add([startMarker, endMarker]);
      }else{
          var startIcon = new AMap.Icon({
          // 图标尺寸
          size: new AMap.Size(100, 100),
          // 图标的取图地址
          image: "imgs/logowhite1.png",
          // 图标所用图片大小
          imageSize: new AMap.Size(30, 30),
          // 图标取图偏移量
          // imageOffset: new AMap.Pixel(-9, -13)
        });

        // 将 icon 传入 marker
        var startMarker = new AMap.Marker({
          position: new AMap.LngLat(121.564318,31.213549),
          icon: startIcon,
        });


        // 将 icon 传入 marker
        var startMarker1= new AMap.Marker({
          position: new AMap.LngLat(121.481509,31.151298),
          icon: startIcon,
        });
        // 创建一个 icon
        var endIcon = new AMap.Icon({
          size: new AMap.Size(100, 100),
          image: "imgs/logowhite1.png",
          imageSize: new AMap.Size(30, 30),
        });

        // 将 icon 传入 marker
        var endMarker1 = new AMap.Marker({
          position: new AMap.LngLat(121.499415,31.235769),
          icon: endIcon,
          offset: new AMap.Pixel(-13, -30),
        });
         var endIcon = new AMap.Icon({
          size: new AMap.Size(100, 100),
          image: "imgs/logowhite1.png",
          imageSize: new AMap.Size(30, 30),
        });

        // 将 icon 传入 marker
        var endMarker = new AMap.Marker({
          position: new AMap.LngLat(121.450424,31.223162),
          icon: endIcon,
          offset: new AMap.Pixel(-13, -30),
        });
        // 将 markers 添加到地图
        this.map.add([startMarker,startMarker1, endMarker,endMarker1]);
      }

      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      this.map.addControl(new AMap.ToolBar());
      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      this.map.addControl(
        new AMap.Scale({
          offset: new AMap.Pixel(50, 30),
        })
      );
    },
  },

  mounted() {
    // 兼容高德地图实例化
    // lazyAMapApiLoaderInstance.load().then(()=>{
    //   this.map=new AMap.Map('amapContainer',{
    //     center:[120.136962, 30.252593],
    //     zoom:this.zoom,
    //   })
    // })
    if (sessionStorage.city_id == 1) {
      this.center = [120.145962, 30.255593];
    } else {
      this.center = [121.508399,31.199837];
      this.zoom = 12;
    }
  },
};
</script>
