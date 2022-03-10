<template>
  <div class="resface">
    <div class="resnav">
      <!-- <div class="nav">
        <img src="./img/esc.png" alt="" @click="goback" />
        <p>人脸识别登录</p>
      </div> -->
      <van-nav-bar fixed title="人脸识别登录" @click-left="goback">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" />
        </template>
      </van-nav-bar>
    </div>
    <div class="resbg">
      <img src="./img/bg3.png" alt="" />
      <div class="mask">
        <b><p>人脸识别登录</p></b>
      </div>
      <img
        src="./img/bg2.png"
        alt=""
        class="img2"
        style="transform: rotateZ(0deg);"
      />
    </div>
    <div class="face">
      <video id="video" width="250" height="250" autoplay class="video"></video>
      <canvas id="canvas" width="250" height="250" class="canvas"></canvas>
      <button id="snap" class="btn" @click="begin">开始登录</button>
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
    };
  },
  methods: {
    //  框框旋转;
    rotate() {
      console.log(1);
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
        this.seachface();
      }, 5000);
    },
    // 发送请求
    // 接收请求
    async seachface() {
      var { data: res } = await this.$axios.post(
        "/seachface",
        this.$qs.stringify({ img: this.img })
      );
      if (res.error_code != 0) return this.$toast("未检测正确人脸信息");
      if (res.result.user_list[0].score < 80) {
        this.$toast("验证人脸失败");
        this.auto();
      } else {
        var id = res.result.user_list[0].user_id;
        var { data: result } = await this.$axios.post(
          "/logonface",
          this.$qs.stringify({ uphone: id })
        );
        console.log(result);
        if (result.code != 200) return this.$toast("登录失败");
        this.$toast("登录成功");
        // this.$router.go(-1);
        sessionStorage.id = result.result[0].wid;
        sessionStorage.status = true;
        sessionStorage.fangjian = 0;
        this.$router.push("/hotel");
        console.log(result);
        // 需要将结果保存到哪里就放到哪里(例如将token进行保存一下)
        sessionStorage.token = result.token;
      }
    },
    // 左上角返回上一页
    goback() {
      this.$router.go(-1);
      // this.$router.push('/hotel');
    },

    // 点击开始登陆
    begin() {
      this.auto();
      this.rotate();
    },
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
.resbg .mask {
  text-align: center;
  position: absolute;
  left: 24%;
  top: 65%;
  height: 50px;
  width: 200px;
  background-color: white;
  /* font-weight: bold; */
  font-size: 27px;
  color: #888;
  letter-spacing: 3px;
}
.resbg img {
  margin-top: -50px;
  width: 375px;
}
.resbg .img2 {
  transition: ease-out 1s;
  /* background-color: red; */
  transform-origin: 190px 287px;
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
  letter-spacing: 4px;
  font-size: 20px;
  border: 0;
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 250px;
  z-index: 85;
  border-radius: 25px;
  background-color: #0064ff;
}
.canvas {
  position: absolute;
  z-index: -1;
  bottom: 50px;
  left: 63px;
}
</style>
