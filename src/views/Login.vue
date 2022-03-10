<template>
  <div class="logoall">
    <div class="top">
        <van-nav-bar fixed title="" @click-left="goback" :border="false">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" />
        </template>
      </van-nav-bar>
    </div>
    <div class="logo-all" :style="d1" style="background-color: #fffbe8">
      <van-notice-bar
        class="logo-w"
        left-icon="warning-o"
        text="提高账户安全性"
        @click="logoShow"
      />
      <div class="logo-close">
        <img src="/imgs/codecuozhu.png" alt="">
        <!-- <span class="logo-confirm" @click="xhide">X</span> -->
      </div>
    </div>
    <van-popup v-model="logoVisible" class="logo-text"
      >已实施双重认证 (2FA)
      已提高您的贵宾金环会账号安全性。使用2FA时，系统将会要求您输入一次性密码
      (OTP)
      以进行关键交易或更改账户信息。您可以选择注册您的电邮、手机号码或两者皆可。
      <div class="logo-closes" @click="logoHide">
        <span class="logo-confirms">确定</span>
      </div>
    </van-popup>
    <div class="bg">
      <img src="/imgs/bg1.jpg" alt="" />
    </div>
    <div class="logo-centerimg">
      <img src="/imgs/logo1.png" alt="" />
    </div>
    <div class="in-all">
      <div class="uname">
        <img src="/imgs/uname.png" alt="" />
        <input
          type="text"
          placeholder="会籍号码/已验证的邮箱"
          v-model="weamil"
        />
      </div>
      <div class="upwd">
        <img src="/imgs/upwd.png" alt="" />
        <input type="password" placeholder="密码" v-model="wpwd" />
      </div>
    </div>

    <div class="db1">
      <button @click="login()">登录</button>
    </div>
    <div class="db2">
      <button @click="gores">立即加入</button>
    </div>
    <div class="changeLogin">
      <p @click="tophoneLogin">手机登录</p>
      <p @click="tofaceLogin">人脸识别</p>
    </div>

  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      weamil: "",
      wpwd: "",
      logoVisible: false,
      d1: { visibility: "visible" },
    };
  },
  methods: {
    goback() {
      this.$router.push('/cover')
    },
    ...mapMutations(["login1"]),
    ...mapActions(["vlogin"]),
    // 去手机验证码登录
    tophoneLogin() {
      this.$router.push("/loginphone");
    },
    // 去人脸识别登录
    tofaceLogin() {
      this.$router.push("/logface");
    },
    logoShow() {
      this.logoVisible = true;
    },
    logoHide() {
      this.logoVisible = false;
    },
    xhide() {
      this.d1.visibility = "hidden";
    },
    login() {
      this.axios
        .post("/login", `wemail=${this.weamil}&wpwd=${this.wpwd}`)
        .then((result) => {
          console.log(result);
          if (result.data.code == 200) {
            this.$toast(result.data.message);
            sessionStorage.id = result.data.result[0].wid;
            this.login1(result.data.result[0].wname)
            sessionStorage.status = true;
            sessionStorage.token = result.data.token;
            sessionStorage.fangjian = 0;

            //  location.href = "http://localhost:8080/hotel"
            this.$router.push("/hotel");
          } else {
            this.$toast('登录失败')
          }
        });
    },
    // 跳转到注册页面
    gores() {
      this.$router.push("/reg");
    },
  },
  computed: {
    ...mapState([
      "username",
      "grade",
      "userphone",
      "days",
      "number",
      "price",
      "sex",
      "score",
    ]),
  },
};
</script>

<style>
.van-nav-bar {
  background-color:transparent;
}
.van-nav-bar img {
  width: 30px;
  height: 30px;
}
.toastzhu {
  font-size: 12px;
  color: #ac8642;
}
.changeLogin {
  justify-content: center;
  margin-top: 10px;
  display: flex;
  font-size: 14px;
  color: #ac8642;
}
.changeLogin > p:nth-child(1) {
  margin-right: 10px;
}
.logoall {
  position: relative;
  overflow: hidden;
}
.logo-centerimg {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  margin: auto;
  width: 89px;
  height: 120px;
}
.logo-centerimg img {
  width: 100%;
  height: 100%;
}
.logo-confirm {
  color: #ac8642;
}
.logo-close img {
  margin-right: 20px;
   vertical-align: middle;
  width: 20px;height: 20px;
}
.logo-text {
  border-radius: 25px;
  width: 60%;
  line-height: 25px;
  letter-spacing: 3px;
  padding: 20px;
  font-size: 14px;
}
.logo-closes {
  margin-top: 20px;
  border-top: 1px solid #dee1e6;
  text-align: center;
}
.logo-confirms {
  display: block;
  margin-top: 10px;
  color: #ac8642;
}
.logo-all {
  justify-content: space-between;
  width: 100%;
  top: 50px;
  /* margin-top: 30px; */
  display: flex;
  position: absolute;
  align-items:center;
}
.logo-w {
  width: 60%;
}
.top {
  width: 100%;
  height: 20px;
  position: absolute;
  float: left;
}
.top img {
  margin-top: 3%;
  margin-left: 5%;
  height: 100%;
  line-height: 40px;
}
.logo-top {
  display: flex;
  justify-content: space-around;
}
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}
* {
  margin: 0;
  padding: 0;
}
.in-all > div {
  margin-left: 20px;
}
.in-all {
  margin-top: 270px;
}
.in-all .uname {
  width: 90%;
  margin-bottom: 10px;
  border-bottom: 1px solid #ac8642;
}
.in-all .uname img {
  margin-right: 10px;
}
.in-all .upwd {
  width: 90%;
  border-bottom: 1px solid #ac8642;
  margin-bottom: 40px;
}
.in-all .upwd img {
  margin-right: 10px;
  width: 30px;
  height: 30px;
}
.in-all img {
  line-height: 100%;
  vertical-align: middle;
}
.in-all input {
  height: 40px;
  width: 80%;
  line-height: 100%;
  vertical-align: middle;
  border: none;
  background-color: transparent;
  font-size: 14px;
}
.in-all input::-webkit-input-placeholder {
  color: #BF9C4A;
}
.bg img {
  width: 100%;
  height: 100%;
}
.db1 button {
  font-size: 18px;
  letter-spacing: 5px;
  margin-left: 5%;
  width: 90%;
  border-radius: 25px;
  height: 40px;
  border: none;
  background-color: #BF9C4A;
  color: #fff;
  /* border:2px solid #fff; */
  margin-bottom: 20px;
}
.db2 button {
  box-sizing: border-box;
  font-size: 18px;
  letter-spacing: 5px;
  border-radius: 25px;
  margin-left: 5%;
  width: 90%;
  height: 40px;
  border: none;
  background-color: #fff;
  border:1px solid #BF9C4A;
  color: #BF9C4A;
}
</style>
