<template>
  <div style="overflow: hidden">
    <van-image class="guding" width="100%" height="100%" src="/imgs/bg.jpg" />
    <div class="logo">
      <van-image class="logo-img" src="/imgs/logo.png" />
    </div>

    <van-button type="primary" to="/login" class="b-logo" size="large"
      >登录</van-button
    >
    <van-button type="primary" to="/reg" class="b-reg" size="large"
      >立即加入</van-button
    >
    <van-button type="primary" to="/hotel" class="b-reg2" size="large"
      >直接预订 ></van-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.guding {
  position: fixed;
}
.logo {
  margin-left: 50%;
  margin-top: 20%;
  transform: translate(-50%);
  position: fixed;
}

.b-logo {
  margin-left: 50%;
  width: 90%;
  transform: translate(-50%);
  margin-top: 130%;
  background-color: #ac8642;
  border: none;
}
.b-reg {
  background-color: rgba(255, 255, 255, 0.3);
  margin-left: 50%;
  width: 90%;
  margin-top: 5%;
  transform: translate(-50%);
  border: none;
  color: #ac8642;
}
.b-reg2 {
  background-color: transparent;
  margin-left: 50%;
  width: 30%;
  font-size: 14px;
  transform: translate(-50%);
  border: none;
  color: #ac8642;
}
</style>
