<template>
  <div class="resface">
    <div class="resnav">
      <van-nav-bar fixed title="人脸识别认证" @click-left="goback">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" />
        </template>
      </van-nav-bar>
      <!-- <div class="nav">
        <img src="./img/esc.png" alt="" @click="goback" />
        <p>人脸识别认证</p>
      </div> -->
    </div>
    <div class="resbg">
      <img src="./img/bg3.png" alt="" />
      <img src="./img/bg2.png" alt="" class="img2" />
    </div>
    <div class="face">
      <video id="video" width="250" height="250" autoplay class="video"></video>
      <canvas id="canvas" width="250" height="250" class="canvas"></canvas>
      <button id="snap" class="btn" @click="begin">开始认证</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 保存截取的图片
      img: "",
      imgmessage: [],
      //data中存放的是el中要用到的数据

      ishow: true,
      num: 1,
      showface: false,
    };
  },
  methods: {
    //  框框旋转;
    rotate() {
      var img2 = document.getElementsByClassName("img2")[0];
      setInterval(() => {
        this.num++;
        var deg = this.num * 360;
        img2.style.transform = `rotateZ(${deg}deg)`;
      }, 500);
    },
    //  获取人脸数据
    auto() {
      var aVideo = document.getElementById("video");
      var aCanvas = document.getElementById("canvas");
      var ctx = aCanvas.getContext("2d");
      var track;

      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia; //获取媒体对象（这里指摄像头）
      navigator.getUserMedia(
        {
          video: true,
        },
        gotStream,
        noStream
      ); //参数1获取用户打开权限；参数二是一个回调函数，自动传入视屏流，成功后调用，并传一个视频流对象，参数三打开失败后调用，传错误信息

      function gotStream(stream) {
        // video.src = URL.createObjectURL(stream); // 老写法
        aVideo.srcObject = stream;
        track = stream.getTracks()[0];
        aVideo.onerror = function() {
          stream.stop();
        };
        stream.onended = noStream;
        aVideo.onloadedmetadata = function() {
          // alert('摄像头成功打开！');
        };
      }

      function noStream(err) {
        alert(err);
      }
      setTimeout(() => {
        console.log("我是执行");
        ctx.drawImage(aVideo, 0, 0, 320, 240);
        this.img = aCanvas.toDataURL("image/png").substring(22);
        console.log(this.img);
        if (null != track) {
          // track.stop(); //关闭摄像头
          this.ishow = false;
        }
        // 发送图片到后端
        this.sendface();
      }, 5000);
    },
    // 接收请求
    async sendface() {
      var id = this.$route.params.phone;
      var { data: res } = await this.$axios.post(
        "/addface",
        this.$qs.stringify({ img: this.img, uid: id })
      );
      if (res.error_code != 0) return this.$toast("获取图片信息失败");
      this.$toast("人像认证成功");
      this.showface = true;
      this.$router.go(-1);
      console.log(res);
    },
    //  点击认证开始执行
    begin() {
      this.rotate();
      this.auto();
    },
    // 点击左上角的返回
    goback() {
      this.$router.go(-1);
    },
  },
  mounted() {
    console.log(this.$route.params.phone);
  },
  beforeRouteLeave(to, from, next) {
    if (to.path == "/reg" && this.showface) {
      to.meta.isface = true;
    }
    next();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.van-nav-bar {
  z-index: 500;
}
.resnav .nav {
  height: 50px;
  width: 100vw;
  /* background-color: red; */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.resnav .van-nav-bar img {
  /* margin-left: 5px; */
  width: 30px;
  height: 30px;
}
/* .resnav .nav p {
  font-size: 20px;
  margin-right: 125px;
} */
.resbg {
  /* background-color: blue; */
  position: relative;
  z-index: 80;
  overflow: hidden;
}
.resbg img {
  margin-top: -50px;
  width: 375px;
}
.resbg .img2 {
  transition: ease-out 1s;
  /* background-color: red; */
  transform-origin: 190px 287px;
  /* transform: rotateZ(180deg); */
  position: absolute;
  top: 0;
  left: 0;
}
.face .video {
  position: absolute;
  left: 63px;
  top: 110px;
  /* border: 2px solid black; */
}
.btn {
  font-size: 20px;
  letter-spacing: 4px;
  border: 0;
  color: #fff;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 250px;
  font-weight: bold;
  z-index: 85;
  border-radius: 25px;
  background-color: #0064ff;
  /* box-shadow: 0 0 3px 3px black; */
}
.canvas {
  position: absolute;
  z-index: -1;
  bottom: 50px;
  left: 63px;
}
</style>
