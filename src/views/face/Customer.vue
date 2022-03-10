<template>
  <div class="customer" ref="zzz">
    <!-- 头部 -->
    <div class="nav-zhu">
      <img src="/imgs/left-zhu.png" alt="" @click="onClickLeft" />
      <p>智能客服</p>
    </div>
    <!-- 下面全部 -->
    <div class="content-zhu">
      <!-- 主体区域 -->
      <div class="content-main " :class="{ 'sepick-main': mianshow }">
        <div class="content-start">
          <img src="/imgs/kefu01.svg" alt="" />
          <p>您好，请问有什么可以帮助您</p>
        </div>
        <div class="content-start special" v-for="(item, i) in text" :key="i">
          <img src="/imgs/kefu01.svg" alt="" v-if="((i+1)%2)==0" />
          <img src="/imgs/kefu02.svg" alt="" v-else />
          <p v-html="item"></p>
        </div>
      </div>
      <!-- 底部输入区域 -->
      <div class="tabbar-zhu" v-if="barshow">
        <div class="tabbar-top">
          <div class="pp">
            <p @click="toselect">酒店预订</p>
            <p @click="tomember">会员权益</p>
            <p @click="topurchase">我的预订</p>
          </div>
        </div>
        <div class="tabar-shu">
          <img src="/imgs/maikephone.png" alt="" @click="talk1" />
          <input type="text" placeholder="  输入任何你想问的问题" v-model="a" />
          <p @click="dj">发送</p>
        </div>
      </div>
      <!-- 点击麦克风后的底部区域 -->
      <div class="tabbar-zhu barphone-zhu" v-else>
        <div class="tabbar-top">
          <div class="pp">
            <p @click="toselect">酒店预订</p>
            <p @click="tomember">会员权益</p>
            <p @click="topurchase">我的预订</p>
          </div>
        </div>
        <div class="tabar-shu">
          <img src="./img/jian-zhu.png" alt="" />
          <input type="text" placeholder="  输入任何你想问的问题" v-model="a" />
          <p @click="dj">发送</p>
        </div>
        <div class="shubtn-zhu">
          <p>按住说话</p>
          <div class="fit">
            <div class="left-zhu">
              <img src="./img/buttom-zhu.png" alt="" @click="talk2" />
            </div>
            <van-circle
              v-model="currentRate"
              :rate="target"
              layer-color="#E8EFFC"
              :speed="spped"
              color="#66e553"
            />
            <div class="roand" @click="sepak"></div>
            <img
              src="./img/newphone-zhu.png"
              alt=""
              v-show="mkeishsow"
              @click="sepak"
            />
            <p v-show="!mkeishsow" @click="sepak">正在说话...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import socket from "./js/socket.io";
import Recorder from "js-audio-recorder";

export default {
  data() {
    return {
      // 录音相关
      recorder: null,
      // 波浪图-录音
      drawRecordId: null,
      // 波浪图-播放
      drawPlayId: null,
      // 直接获取录音文件
      record: null,
      PCMBlob: {},
      pcm: "",
      // 动画速度
      spped: 6,
      // 目标进度
      target: 0,
      // 底部栏的切换
      barshow: true,
      // 麦克风是否显示
      mkeishsow: true,
      // 底部栏变高后的样式
      mianshow: false,
      currentRate: 0,
      sockets: {},
      a: "",
      text: [],
      ishow: false,
      count: 0,
      // 右边的显示
      isisshow: false,
      reg1: /[酒店]|[1]/,
      reg2: /[预订]|[2]/,
      reg3: /[客房喜]|[3]/,
      reg4: /[积分]|[4]/,
      reg5: /[账号设置]|[5]/,
    };
  },
  methods: {
    // 初始化
    init() {
      this.recorder = new Recorder({
        // 采样位数，支持 8 或 16，默认是16
        sampleBits: 16,
        // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值
        sampleRate: 16000,
        // 声道，支持 1 或 2， 默认是1
        numChannels: 1,
        // 是否边录边转换，默认是false
        compiling: false,
      });
    },
    // 获取录音权限
    getPermission() {
      Recorder.getPermission().then(
        () => {
          console.log("给权限了");
        },
        (error) => {
          console.log(`${error.name} : ${error.message}`);
        }
      );
    },
    // 开始录音
    startRecorder() {
      this.getPermission()
      // console.log(this.recorder);
      this.recorder.start().then(
        () => {
          console.log(this);
          // this.drawRecord();
        },
        (error) => {
          // 出错了
          console.log(`${error.name} : ${error.message}`);
        }
      );
    },
    // 结束录音
    stopRecorder() {
      this.recorder.stop();
      // this.drawRecordId && cancelAnimationFrame(this.drawRecordId);
      // this.drawRecordId = null;
      this.getRecorder();
    },
    /**
     *  获取录音文件
     * */
    async getRecorder() {
      //录音结束，获取取录音数据
      this.PCMBlob = await this.recorder.getPCMBlob(); //获取 PCM 数据
      var r = new FileReader();
      r.onload = (evt) => {
        // console.log(evt.target.result.substring(37));
        this.$axios
          .post(
            "/record",
            this.$qs.stringify({
              pcm: evt.target.result.substring(37),
              size: this.PCMBlob.size,
            })
          )
          .then((result) => {
            if (result.data.err_no == 0) {
              this.a = result.data.result[0];
            }
            console.log(result);
          });
      };
      r.readAsDataURL(this.PCMBlob);
    },
    // 第一次单击麦克风事件
    sepak() {
      // console.log(1);
      this.count++;
      if (this.count % 2 != 0) {
        this.mkeishsow = false;
        this.spped = 6;
        // 开始录音
        this.startRecorder();
        var timer = setInterval(() => {
          this.target = 100;
          if (this.target == 100) {
            clearInterval(timer);
          }
        }, 1000);
      } else {
        this.mkeishsow = true;
        this.spped = 100;
        // 结束录音
        this.stopRecorder();
        clearInterval(timer);
        this.target = 0;
      }
    },
    // 弹出语音转文字
    talk1() {
      this.barshow = false;
      this.mianshow = true;
    },
    talk2() {
      this.barshow = true;
      this.mianshow = false;
    },
    scoll() {
      scrollTo(0, this.$refs.zzz.scrollHeight);
    },
    // 点击左上角的返回
    onClickLeft() {
      this.$router.push("/add");
    },
    // 酒店预订
    toselect() {
      this.$router.push("/destination");
    },
    // 会员权益
    tomember() {
      this.$router.push("/member");
    },
    // 我的预订
    topurchase() {
      this.$router.push("/purchase");
    },
    // 点击发送按钮
    dj() {
      if (this.a.trim() != "") {
        this.text.push(this.a);
        this.ishow = true;
        if (this.reg1.test(this.a)) {
          this.sockets.emit("text", 1);
        } else if (this.reg2.test(this.a)) {
          this.sockets.emit("text", 2);
        } else if (this.reg3.test(this.a)) {
          this.sockets.emit("text", 3);
        } else if (this.reg4.test(this.a)) {
          this.sockets.emit("text", 4);
        } else if (this.reg5.test(this.a)) {
          this.sockets.emit("text", 5);
        } else {
          this.sockets.emit("text", 10);
        }
      }
      this.a = "";
    },
  },
  updated() {
    console.dir(this.$refs.zzz);
    this.scoll();
  },
  mounted() {
    this.init();
    this.sockets = socket("ws://localhost:3000");
    this.sockets.on("text", (data) => {
      console.log(data);
      switch (data) {
        case "11":
          this.text.push(
            `<router-link to="/select"><a href="/select" style="color:#D4A16B;">[点我去定个酒店]</a></router-link>`
          );
          break;
        case "22":
          this.text.push(
            `<router-link to="/hotelserve"><a href="/hotel" style="color:#D4A16B;">[去了解酒店政策]</a></router-link>`
          );
          break;
        case "33":
          this.text.push(
            `<router-link to="/hobby"><a href="/hobby" style="color:#D4A16B;"">[去修改客房喜好]</a></router-link>`
          );
          break;
        case "44":
          this.text.push(
            `积分规则：
            十元换一积分具体兑换详情点击一下连接去了解<br>
            <router-link to="/setup"><a href="/setup" style="color:#D4A16B;">[去兑换商品]</a></router-link>`
          );
          break;
        case "55":
          this.text.push(
            `<router-link to="/setup"><a href="/setup" style="color:#D4A16B;">[去修改账号设置]</a></router-link>`
          );
          break;
        case "101":
          this.text.push(
            ` <p>不知道您在说什么，您可以</p>
              <p>回复 1 预订酒店</p>
              <p>回复 2 了解酒店政策</p>
              <p>回复 3 修改客房喜好</p>
              <p>回复 4 了解积分规则</p>
              <p>回复 5 修改账号设置</p>`
          );
          break;
        default:
          break;
      }
    });
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.van-circle{
    width: 202px;
    height: 108px;
}
.customer {
  .nav-zhu {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #bf9c4a;
    width: 100vw;
    height: 46px;
    display: flex;
    align-items: center;
    img {
      height: 25px;
      width: 25px;
      margin-left: 10px;
    }
    p {
      letter-spacing: 1px;
      font-size: 18px;
      color: #fff;
      margin-left: 114px;
    }
  }
  .content-zhu {
    // overflow: hidden;
    padding-top: 66px;
    box-sizing: border-box;
    min-height: 100vh;
    background-color: #f9f9fb;
    .content-main {
      // height: 80vh;
      // overflow: hidden;
      padding: 0 10px;
      padding-bottom: 180px;
      .content-start {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
        }
        p {
          letter-spacing: 1px;
          max-width: 65%;
          background-color: #fff;
          margin-left: 10px;
          border-radius: 20px;
          padding: 10px 20px 10px 20px;
          line-height: 30px;
          font-size: 16px;
        }
      }
      .special {
        margin-top: 15px;
        &:nth-child(2n) {
          flex-direction: row-reverse;
          p {
            color: white;
            background-color: #bf9c4a;
            margin-right: 10px;
            line-height: 40px;
            padding: 0 20px 0 20px;
          }
        }
      }
    }
    .sepick-main {
      padding-bottom: 350px;
    }
    .tabbar-zhu {
      border-radius: 25px 25px 0 0;
      padding: 20px;
      height: 150px;
      width: 100vw;
      // width: 100%;
      box-sizing: border-box;
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #fff;
      .tabbar-top {
        display: flex;
        .pp {
          display: flex;
          p {
            padding: 5px 10px;
            font-size: 14px;
            color: #bf9c4a;
            border-radius: 20px;
            margin-right: 20px;
            border: 1px solid #bf9c4a;
          }
        }
      }
      .tabar-shu {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: end;
        img {
          width: 30px;
          height: 30px;
          margin-right: 20px;
        }
        input {
          font-size: 14px;
          border: 0;
          background-color: rgba($color: #eee, $alpha: 0.5);
          border-radius: 25px;
          height: 35px;
          width: 71%;
        }
        input::placeholder {
          color: #888;
          letter-spacing: 2px;
          margin-left: 10px;
          font-size: 14px;
          line-height: 20px;
        }
        p {
          margin-left: 15px;
          font-size: 15px;
          color: #bf9c4a;
        }
      }
    }
    .barphone-zhu {
      height: 300px;
      background-color: #fff;
      // background-color: red;
      .shubtn-zhu {
        text-align: center;
        p {
          color: #888;
          letter-spacing: 1px;
          margin-top: 20px;
          font-size: 10px;
        }
        .fit {
          position: relative;
          margin-top: 25px;
          .left-zhu {
            position: absolute;
            left: 35px;
            top: 25px;
            img {
              width: 15px;
              height: 15px;
            }
          }
          .van-circle {
            margin-top: -5px;
          }
          .roand {
            top: 0;
            left: 50%;
            transform: translate(-50%, -1%);
            position: absolute;
            margin: auto;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: #0064ff;
          }
          & > p {
            position: absolute;
            left: 135px;
            top: 20px;
            font-size: 14px;
            color: #fff;
          }
          & > img {
            left: 50%;
            transform: translate(-50%, 70%);
            top: 0;
            position: absolute;
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
