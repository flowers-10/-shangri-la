<template>
  <div class="logoall" style="background-color: transparent">
    <div class="top">
        <van-nav-bar fixed  @click-left="goback" :border="false">
        <template #left>
          <img src="/imgs/alifanhui.png" alt="" />
        </template>
      </van-nav-bar>
    </div>
    <div class="bg">
      <img src="/imgs/bg1.jpg" alt="" />
    </div>
    <div class="logo-centerimg">
      <img src="/imgs/logo1.png" alt="" />
    </div>
    <div class="in-all">
      <div class="uname">
        <img src="/imgs/uname.png" alt="" />
        <input type="text" placeholder="请输入手机号" v-model="wphone" />
      </div>
      <div class="upwd andupwd">
       <img src="/imgs/checkcodezhu.png" alt="" id="imgzhu" />
        <input type="password" placeholder="请输入验证码" v-model="wpwd" />
        <div class="checkphonecode" @click="getphoneCode">
          <p v-if="iscount">点击获取验证码</p>
          <p v-else>{{ count }}&nbsp;s</p>
        </div>
      </div>
    </div>
    <div class="db1">
      <button @click="login()">登录</button>
    </div>
    <div class="changeLogin">
      <p @click="topsdLogin">密码登录</p>
      <p @click="tofaceLogin">人脸识别</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取验证码后的计时
      count: 60,
      // 是否显示倒计时
      iscount: true,
      // 输入手机号的框
      wphone: "",
      // 输入验证码的框
      wpwd: "",
      code: 0,
    };
  },
  methods: {
    goback() {
       this.$router.go(-1)
    },
    async getphoneCode() {
      if (!/^\d{11}$/.test(this.wphone)) {
        this.$toast("请输入正确的手机号");
      } else {
        this.iscount = false;
        var timer = setInterval(() => {
          this.count--;
          if (this.count == 0) {
            clearInterval(timer);
            this.iscount = true;
            this.count = 60;
          }
        }, 1000);
        // 下面是做请求
        var { data: res } = await this.$axios.post(
          "/loginphone/code",
          this.$qs.stringify({ uphone: this.wphone })
        );
        if (res.status == 303) return this.$toast("短信发送失败");
        this.code = res.code;
        this.$toast("短信已发送，请注意查收");
      }
    },
    // 点击登录
    async login() {
      if (this.code != this.wpwd) return this.$toast("验证码有误");
      var { data: res } = await this.$axios.post(
        "/loginphone",
        this.$qs.stringify({
          uphone: this.wphone,
          upsd: this.wpwd,
        })
      );
      if (res.status != 200) return this.$toast("登录失败");
      sessionStorage.id = res.result.wid;
      sessionStorage.status = true;
      sessionStorage.fangjian = 0;

      this.$toast('登录成功')
      this.$router.push("/hotel");
      console.log(res);
      // 点
      sessionStorage.token = res.token;
    },
    // 切换到密码登录
    topsdLogin() {
      this.$router.push("/login");
    },
    // 切换到人脸识别登录
    tofaceLogin() {
      this.$router.push("/logface");
    },
  },
};
</script>

<style scoped>
.van-nav-bar  {
  background-color:transparent;
}
.van-nav-bar img {
  width: 30px;
  height: 30px;
}
.andupwd {
  position: relative;
}
#imgzhu {
  width: 25px;
  height: 25px;
  margin-left: 3px;
  margin-right: 12px;
}
.checkphonecode {
  color: #ac8642;
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 120px;
  /* background-color: red; */
}
.db1 button{
  font-size: 18px;
  letter-spacing: 5px;
  border-radius: 25px;
}
</style>
