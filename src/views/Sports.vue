<template>
  <div>
    <van-sticky>
      <van-nav-bar title="健身中心" class="body-top">
        <template #left>
          <router-link to="/hotelserve">
            <img src="/imgs/fanhuiblack.png" alt="" />
          </router-link>
        </template>
      </van-nav-bar>

      <!-- <div class="body-top">
        <router-link to="/hotelserve">
          <img src="/imgs/esc.png" alt="" />
        </router-link>
        <span>健身中心</span>
      </div> -->
    </van-sticky>
    <div class="body-restaurant">
      <img src="/imgs/ody.jpg" alt="" />
      <div class="body-restauranttext">
        <div>健身中心</div>
        <div>恢复您的身体活力</div>
      </div>
    </div>

    <div class="body-time">
      <img src="/imgs/time.png" alt="" />
      <span>
        <div>健身房</div>
        <div>06:30 - 23:00</div>
        <div>游泳池</div>
        <div>06:00 - 23:00</div>
        <div>蒸汽浴室</div>
        <div>06:00 - 23:00</div>
      </span>
    </div>

    <div class="link"></div>
    <div class="body-text">
      杭州城中香格里拉提供各种娱乐及休闲设施，包括室内恒温游泳池及设施先进的健身房。
      <br />
      宾客还可在入住期间享受瑜伽课程。其它设施包括蒸汽浴室和按摩浴缸。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>

.body-top img {
  width: 20px;
  height: 20px;
}

.body-restaurant {
  /* margin-top: 15px; */
  position: relative;
}
.body-restaurant img {
  width: 100%;
  height: 200px;
}
.body-restauranttext {
  position: absolute;
  top: 150px;
  left: 10px;
}
.body-restauranttext > div:first-child {
  color: #fff;
  font-size: 16px;
}
.body-restauranttext > div:last-child {
  margin-top: 5px;
  color: #fff;
  font-size: 10px;
}
.body-phone {
  margin-left: 10px;
  margin-top: 10px;
}
.ody-phone img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.body-phone span {
  color: #ac8642;
}
.body-information {
  margin-left: 10px;
  margin-top: 10px;
}
.body-information img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.body-information span {
  font-size: 14px;
  color: #333;
}
.body-time {
  margin-left: 10px;
  margin-top: 10px;
  /* height: 200px; */
  display: flex;
}
.body-time img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.body-time span div {
  font-size: 14px;
  color: #333;
}
.body-deliciousfood span div {
  font-size: 14px;
}
.body-deliciousfood {
  margin-left: 10px;
  margin-top: 10px;
}
.body-deliciousfood img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.body-deliciousfood span {
  font-size: 14px;
  color: #333;
}
/* .link{
  margin-top: 15px;
  border: 1px solid #c9c9c9;
} */
.body-text {
  width: 94%;
  margin-left: 3%;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
.body-hr {
  margin-top: 10px;
  border-top: 1px solid #c9c9c9;
}
</style>