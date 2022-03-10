

<template>
  <div>
    <div style="background-color: rgb(153 153 153 / 10%); position:fixed;top:0;bottom:0;right:0;left:0; height:670px;">
      <van-nav-bar title="联系方式">
        <template #left>
          <router-link to="/date">
            <img class="zc-set-img" src="/imgs/返回.png" />
          </router-link>
        </template>
      </van-nav-bar>

      <!-- v-for -->
      <!-- <div style="height:700px; position:absolute; top:0; bottom:0; left:0; right:0;">
    <img src="../../../public/image/bg1.jpg"  style="width:100%; height:100%; opacity: 0.7;">
    </div> -->

      <div class="d1">
        <!-- <van-cell
          title="登录邮箱"
          to="/em"
          value="j.wemail"
          style="padding: 15px; margin: 10px auto;; border-radius: 10px; background-color: rgb(208 192 62 / 50%); box-shadow: 0,0,10px,0 rgba(111, 111, 111, 0.5);"
        ></van-cell> -->
        <router-link to="/address">
          <van-nav-bar class="zc-two-ph">
            <template #left>
              <span>邮寄地址</span>
            </template>
            <template #right>
              <img class="zc-01" src="/imgs/010101.png" alt="" >
            </template>
          </van-nav-bar>
        </router-link>
        <router-link to="/phonetwo">
          <van-nav-bar class="zc-two-ph2">
            <template #left>
              <span>电子邮箱</span>
            </template>
            <template #right>
              <img class="zc-01" src="/imgs/010101.png" alt=""> 
            </template>
          </van-nav-bar>
        </router-link>
        <router-link to="/phonetwo">
          <van-nav-bar class="zc-two-ph3">
            <template #left>
              <span>电话号码</span>
            </template>
            <template #right>
              <img class="zc-01" src="/imgs/010101.png" alt="">
            </template>
          </van-nav-bar>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zc-two-ph,
.zc-two-ph2,
.zc-two-ph3 {
  margin: 5px auto;
  color: black;
  font-size: 18px;
  width: 100%;
  background-color: rgb(253, 253, 253);
  padding: 0 15px 0 15px;
}
.d1 {
  /* padding: 0 0 0 20px; */
  padding: 5px 0;
  background-color: rgb(245 245 245);
}

.zc-set-img {
  width: 20px;
  height: 20px;
}

.zc-01{
   width: 15px;
  height: 15px;
  margin-right: 15px;
}
</style>