<template>
  <div>
    <van-sticky>
      <van-nav-bar title="图片" style="background-color:#fff">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" class="hppic" @click="back" />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!-- <div>
      <img src="../assets/roomARtwo.jpg" alt="">
    </div> -->
    <!-- 全景图 -->
    <div id="viewer"></div>

    
    <van-tabs color="rgb(163, 146, 49)">
      <van-tab :title="`${data[i].name}`" v-for="(item, i) of data" :key="i">
        <img
          :src="`/imgs${item.picture[i].pic}.jpg`"
          class="aa"
          @click="a(item.id-1)"
          v-for="(item1, i) of item.picture"
          :key="i"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>
<style>
.hppic {
  height: 30px;
}
.aa {
  margin: 1%;
  width: 178px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgb(145, 145, 145);
}
.hotelpicturetab {
  background-color: rgba(240, 240, 240);
}
</style>
<script>
import { ImagePreview } from "vant";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  data() {
    return {
      viewer: "",
      // imgurl1: require("../assets/roomARthree.jpg"),
      imgurl1: require("../assets/roomARone.jpg"),
      //  imgurl1: require("../assets/roomARfour.jpg"),

      data: [
      ],
      data1:[]
    };
  },
  methods: {
     hotelpic() {
      this.axios
        .post(`/hotelpic`, `id=${sessionStorage.hotel_id}`)
        .then((result) => {
          this.data = result.data.data;
          console.log(this.data);
          console.log(this.data[0].picture[0].pic);
        });
    },
    back() {
      this.$router.push("/hotelroom");
    },
    a(m) {
      ImagePreview({
        images: [
          "/imgs/hz1hotel(1).jpg",
          "/imgs/hz1hotel(2).jpg",
          "/imgs/hz1Room(1).jpg",
          "/imgs/hz1Room(2).jpg",
          "/imgs/hz1Room(3).jpg",
          "/imgs/hz1Room(4).jpg",
          "/imgs/hz1Room(5).jpg",
          "/imgs/hz1Room(6).jpg",
          "/imgs/hz1Room(7).jpg",
          "/imgs/hz1Room(8).jpg",
          "/imgs/hz1Room(9).jpg",
          "/imgs/hz1Room(10).jpg",
          "/imgs/hz1food1.jpg",
          "/imgs/hz1food2.jpg",
          "/imgs/hz1food3.jpg",
          "/imgs/hz1meeting.jpg",
        ],
        startPosition: m,
      });
    },
  },
  mounted() {
    this.viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: this.imgurl1,
      size: {
        width: "100vw",
        height: "38vh",
      },
    });
    this.hotelpic();
  },

};
</script>
<style>
.hotelpicturespan {
  margin-left: 31vw;
  font-size: 18px;
}
</style>
