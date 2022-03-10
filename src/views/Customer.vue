<template>
  <div>
    <van-nav-bar
      title="智能客服-香香"
      style="
        position: flexd;
        z-index: 100;
        position: flxed;
        top: 0;
        background-color: #cfcfcf30;
        border-bottom: 1px solid #e1dede;
      "
    >
      <template #left>
        <router-link to="/add">
          <van-icon name="arrow-left" size="18" color="black" />
        </router-link>
      </template>
    </van-nav-bar>

    <div class="zc-main">
      <div
        class="main-top"
        style="overflow: scroll; background-color: rgb(231 231 231 / 32%)"
      >
        <div
          class="main-right"
          id="s"
          style="height: 135vw; overflow: scroll"
          ref="zzz"
        >
          <!--  -->
          <div class="main-right-img" style="margin-bottom:-7vw">
            <img
              class="zhuimg"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
              alt=""
            />
            <div class="main-right-span  zhuaaa">
              您好有什么可以帮到您的呢？
            </div>
          </div>

          <div class="chuangall">
            <!-- 自己的 -->
            <div
              class="main-left "
              v-show="ishow"
              v-for="(item, i) in text"
              :key="i"
            >
              <div class="main-left-img" style="margin-bottom:6vw;">
                <img
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                  class="zhuavv"
                  alt=""
                />
                <div class="main-left-span" v-html="item"></div>
              </div>
            </div>

            <!-- youbain -->
            <!-- <div
              class="main-right-img"
              style="margin-bottom:-7vw"
              v-show="isisshow"
              v-for="(item, i) in text"
              :key="i"
            >
              <img
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                alt=""
                class="chuangbb"
              />
              <div class="main-right-span-1">
                <div id="d" v-html="item"></div>
              </div>
            </div> -->
          </div>

          <!-- <div class="main-right-img">
            <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
            <p>智能客服香香</p>
            <div class="main-right-span">
              <router-link to=":javascript;">
                <div>点我跳转</div>
              </router-link>
              <router-link to=":javascript;">
                <div>点我跳转</div>
              </router-link>
              <router-link to=":javascript;">
                <div>点我跳转</div>
              </router-link>
              <router-link to=":javascript;">
                <div>点我跳转</div>
              </router-link>
              <router-link to=":javascript;">
                <div>点我跳转</div>
              </router-link>
            </div>
          </div> -->

          <!-- <div class="main-left">
            <div class="main-left-img">
              <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
              <p>用户名</p>
              <div class="main-left-span"></div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="main-bottom">
        <span style="color: rgb(171 171 171); margin: 1vw -1vw">我想</span>

        <button class="btn1">
          <router-link to="select" style="color: #d4a16b">酒店预订</router-link>
        </button>
        <button class="btn2">
          <router-link to="member" style="color: #d4a16b">
            会员权益</router-link
          >
        </button>
        <button class="btn4">
          <router-link to="purchase" style="color: #d4a16b"
            >我的预定</router-link
          >
        </button>
        <input
          type="text"
          v-model="a"
          placeholder="请输入您的问题"
          style="padding: 0 4vw; background-color: #f1f1f1"
        />
        <button class="btn3" @click="dj">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
// import socket from "./js/socket.io";
export default {
  data() {
    return {
      sockets: {},
      a: "",
      text: [],
      textRight: [],
      ishow: false,
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
    dj() {
      console.log("aaa");
      if (this.a.trim() != "") {
        console.log("bbbb");
        this.text.push(this.a);
        console.log(this.text);
        this.ishow = true;
        if (this.reg1.test(this.a)) {
          console.log("我发送一次");
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
    this.$refs.zzz.scrollTop = this.$refs.zzz.scrollHeight;
    // list.scrollTop = list.scrollHeight;
  },
  mounted() {
    this.sockets = socket("ws://localhost:3000");
    this.sockets.on("text", (data) => {
      // console.log(data);
      switch (data) {
        case "11":
          this.text.push(
            `<router-link to="/select"><a href="/select" style="color:#D4A16B; padding:0 7vw;">[点我去定个酒店]</a></router-link>`
          );
          break;
        case "22":
          this.text.push(
            `<router-link to="/hotelserve"><a href="/hotelserve" style="color:#D4A16B; padding:0 7vw;"">[去了解酒店政策]</a></router-link>`
          );
          break;
        case "33":
          this.text.push(
            `<router-link to="/hobby"><a href="/hobby" style="color:#D4A16B; padding:0 7vw;"">[去修改客房喜好]</a></router-link>`
          );
          break;
        case "44":
          this.text.push(
            `积分规则：
            十元换一积分具体兑换详情点击一下连接去了解<br>
            <router-link to="/setup"><a href="/setup" style="color:#D4A16B; padding:0 7vw;"">[去兑换商品]</a></router-link>`
          );
          break;
        case "55":
          this.text.push(
            `<router-link to="/setup"><a href="/setup" style="color:#D4A16B; padding:0 7vw;"">[去修改账号设置]</a></router-link>`
          );
          break;
        case "101":
          this.text.push(
            ` <p>回复 1 预订酒店</p>
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

<style scoped>
.chuangall > div:nth-child(2n) {
  overflow: hidden;
}
.chuangall > div:nth-child(2n) > .main-left-img > img {
  position: relative;
  left: 3vw;
  /* top: 2vh; */
}
.chuangall > div:nth-child(2n) > .main-left-img > .main-left-span {
  /* position: absolute; */
  /* margin: 0;  */
  /* left: 21vw;
  top: 1.5vh; */
  /* margin-top: 10vw; */
  /* margin-left: 20vh; */
  /* float:none; */
  max-width: 50%;
  max-height: 300vw !important;
  background-color: #fff;
  display: inline-block;
  /* margin-left: 10vw; */
  /* bottom: -3vw;
  left: -3vw; */
  border-radius: 5vw;
  padding: 3vw;
}
/* .zc-main { */
/* width: 100%; */
/* height: 93%; */
/* position: absolute; */
/* background-color: antiquewhite; */
/* } */
/* .main-top{
     width: 100%;
     height: 94%;
     background-color: aqua;
   } */
.chuangbb {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  position: relative;
  left: 2vw;
}
.zhuavv {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  position: relative;
  left: 83vw;
}

.zhuimg {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  position: relative;
  left: 2vw;
  top: 3vw;
}
.zhuaaa {
  width: 50%;
  background-color: #fff;
  position: relative;
  bottom: 13vw;
  left: 20vw;
  border-radius: 5vw;
  padding: 3vw;
}
.main-bottom {
  width: 100%;
  height: 18%;
  background-color: #fbfbfbfa;
  position: fixed;
  bottom: 0;
  border-top: 0.5px solid rgb(216, 216, 216);
}
/* .main-right-img{
  margin: 20vw;
} */
.zc-main input {
  position: relative;
  top: 7vw;
  left: 1vw;
  width: 70%;
  height: 10vw;
  border: 1px solid black;
  border-radius: 50px;
  padding: 1vw 5vw;
  border: none;
}
.zc-main .btn3 {
  position: relative;
  top: 7vw;
  left: 2vw;
  border: none;
  background-color: #d4a16b;
  padding: 2vw 4vw;
  border-radius: 5vw;
  font-weight: 500;
  color: rgb(247, 247, 247);
}
.zc-main .btn1 {
  position: relative;
  top: 2.5vw;
  left: 15vw;
  border: none;
  background-color: #fbfbfbfa;
  border: 1px solid rgb(212, 160, 160);
  padding: 1vw 3vw;
  border-radius: 5.5vw;
  font-weight: 600;
  color: #d4a16b;
}
.zc-main .btn2 {
  position: relative;
  top: 2.5vw;
  left: 20vw;
  border: none;
  background-color: #fbfbfbfa;
  border: 1px solid rgb(212, 160, 160);
  padding: 1vw 3vw;
  border-radius: 5.5vw;
  font-weight: 600;
  color: #d4a16b;
}
.zc-main .btn4 {
  position: relative;
  top: 2.5vw;
  left: 25vw;
  border: none;
  background-color: #fbfbfbfa;
  border: 1px solid rgb(212, 160, 160);
  padding: 1vw 3vw;
  border-radius: 5.5vw;
  font-weight: 600;
  /* font-size: 12px; */
  color: #d4a16b;
}
.zc-main span {
  position: absolute;
  top: 3vw;
  left: 5vw;
  font-size: 18px;
  font-weight: 700;
}

/* 消息显示区域 */

.main-top {
  /* position: absolute; */
  /* width: 100%; */
  /* height: 80%; */
  overflow: hidden;
}

.main-right {
  padding-bottom: 6vh;
  box-sizing: border-box;
}

.main-right-img p {
  position: relative;
  bottom: 22vw;
  left: 25vw;
}

.main-right-span {
  position: relative;
  bottom: 13vw;
  left: 20vw;
  border-radius: 5vw;
}
.main-right-span-1 {
  width: 60%;
  position: relative;
  bottom: 11vw !important;
  left: 20vw !important;
  border-radius: 5vw;
  padding: 0 5vw;
}

.main-left-img p {
  position: relative;
  bottom: 21vw;
  left: 60vw;
}
.main-left-span {
  max-width: 50vw;
  max-height: 10vw;
  overflow: scroll;
  background-color: #d4a16b;
  float: right;
  margin-top: 3vw;
  margin-right: 20vw;
  border-radius: 5vw;
  padding: 3vw 4vw;
}
/* .main-left-span {
  width: 60%;
  background-color: rgb(206, 35, 35);
  position: relative;
  bottom: 20vw;
  left: 5vw;
  border-radius: 5vw;
  padding: 5vw;
} */

/* .main-right-span div {
  text-decoration: none;
  color: black;
  background-color: blue;
  margin: 2vw 0;
  padding: 1vw;
  text-align: center;
  border-radius: 1vw;
  height: 8vw;
} */
</style>
