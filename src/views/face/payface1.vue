<template>
  <div class="resface">
    <div class="resnav">
      <van-nav-bar fixed title="入住验证" @click-left="goback">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" />
        </template>
      </van-nav-bar>
    </div>

    <!-- <div class="resnav">
      <div class="nav">
        <img src="./img/esc.png" alt="" @click="goback" />
        <p>入住验证</p>
      </div>
    </div> -->
    <div class="resbg">
      <img src="./img/bg3.png" alt="" />
      <div class="mask">
        <b><p>入住验证</p></b>
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
      <button id="snap" class="btn" @click="begin">开始验证</button>
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
      //  保存一个查询到的当前用户的手机号，用来和人脸最对比
      wphone: "",
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
        this.faceactive();
      }, 5000);
    },
    // 发送请求
    // 接收请求
    async faceactive() {
      var { data: res } = await this.axios.post(
        "/faceactive",
        this.$qs.stringify({ img: this.img })
      );
      if (res.error_code != 0) return this.$toast("未检测正确人脸信息");
      console.log(res);
      if (
        res.result.face_list[0].angle.pitch <= 20 &&
        res.result.face_list[0].angle.pitch >= -20 &&
        res.result.face_list[0].angle.roll <= 20 &&
        res.result.face_list[0].angle.roll >= -20 &&
        res.result.face_list[0].angle.yaw <= 20 &&
        res.result.face_list[0].angle.yaw >= -20
      ) {
        if (res.result.face_liveness > 0.3) {
          this.seachface();
        } else {
          this.$toast("请使用人脸进行验证");
          this.auto();
        }
      } else {
        this.$toast("请正视屏幕");
        this.auto();
      }
    },

    // 在验证为真实的人脸的情况下，再进行认证
    async seachface() {
      var { data: res } = await this.axios.post(
        "/seachface",
        this.$qs.stringify({ img: this.img })
      );
      if (res.error_code != 0) return this.$toast("未检测正确人脸信息");
      if (res.result.user_list[0].score < 80) {
        this.$toast("验证人脸失败");
        this.auto();
      } else {
        // 因为不能仅仅是查看到人脸库有就验证成功，应该是人脸库和本地的当前登录的账号对上才对，所以这边需要和本地的缓存的电话号进行对比
        var id = res.result.user_list[0].user_id;
        var wid = sessionStorage.getItem("id");
        var { data: result } = await this.axios.post(
          "/data",
          this.$qs.stringify({ wid: wid })
        );
        console.log(result);
        if (result.code != 200) {
          this.$toast("没有此人信息");
          this.$router.go(-1);
          window.sessionStorage.yanzhengzhu = false;
        } else {
          this.wphone = result.result[0].wphone;
          if (this.wphone == id) {
            this.$toast("人脸验证成功");
            this.$router.go(-1);
            window.sessionStorage.yanzhengzhu = true;
          } else {
            this.$toast("与当前账户信息不符");
            this.$router.go(-1);
            window.sessionStorage.yanzhengzhu = false;
          }
        }
      }
    },
    // 左上角返回上一页
    goback() {
      this.$router.go(-1);
      // this.$router.push('/hotel');
    },

    // 点击开始验证
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
  margin-right: 145px;
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
  overflow: hidden;
  top: 0;
  left: 0;
}
.face .video {
  position: absolute;
  left: 63px;
  top: 110px;
  /* border: 2p5x solid black; */
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
