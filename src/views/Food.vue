<template>
  <div>
    <van-sticky>
      <!-- <div class="food-top">
        <router-link to="/hotelserve">
          <img src="/imgs/esc.png" alt="" />
        </router-link>
        <span>美食</span>
      </div> -->
      <van-nav-bar title="美食" class="food-top">
        <template #left>
        <router-link to="/hotelserve">
          <img src="/imgs/fanhuiblack.png" alt="" />
        </router-link>
        </template>
      </van-nav-bar>
    </van-sticky>
    <div class="food-restaurant">
      <img src="/imgs/foodcenter.jpg" alt="" />
      <div class="food-restauranttext">
        <div>城中啤酒餐吧</div>
        <div>美食酒吧提供生啤及现场音乐表演</div>
      </div>
    </div>
    <div class="food-phone">
      <img src="/imgs/telephone.png" alt="" />
      <span>(86 571) 8159 0265</span>
    </div>
    <div class="food-information">
      <img src="/imgs/information.png" alt="" />
      <span>midtownbrewery.shhz@shangri-la.com</span>
    </div>
    <div class="food-time">
      <img src="/imgs/time.png" alt="" />
      <span>
        <div>午餐</div>
        <div>11:30 - 14:00</div>
        <div>晚餐</div>
        <div>17:30 - 22:00</div>
        <div>宵夜菜单</div>
        <div>22:00 - 01:00</div>
        <div>户外用餐</div>
        <div>11:30 - 11:00</div>
      </span>
    </div>
    <div class="food-deliciousfood">
      <img src="/imgs/meishi.png" alt="" />
      <span>国际美食</span>
    </div>
    <div class="link"></div>
    <div class="food-text">
      城中啤酒餐吧是一间提供特色生啤、创意小拼盘及现场音乐表演的美食酒吧。驻店酿酒大师推出一系列麦芽酒、低度啤酒、波特啤酒、陈贮啤酒及烈性黑啤酒。
      <br />
      厨房供应现代亚洲小吃，优质烤肉及个性化品鉴菜单。同时，您还可欣赏到乐队和DJ为您带来的精彩现场表演。
    </div>
    <div class="food-hr"></div>

    <div class="food-restaurant" style="margin-top: 10px">
      <img src="/imgs/restaurant.jpg" alt="" />
      <div class="food-restauranttext">
        <div>城中</div>
        <div>味享江浙</div>
      </div>
    </div>
    <div class="food-phone">
      <img src="/imgs/telephone.png" alt="" />
      <span>(86 571) 8159 0265</span>
    </div>
    <div class="food-information">
      <img src="/imgs/information.png" alt="" />
      <span>Chineserest.shhz@shangri-la.com</span>
    </div>
    <div class="food-time">
      <img src="/imgs/time.png" alt="" />
      <span>
        <div>午餐</div>
        <div>11:30 - 14:00</div>
        <div>晚餐</div>
        <div>17:30 - 22:00</div>
      </span>
    </div>
    <div class="food-deliciousfood">
      <img src="/imgs/meishi.png" alt="" />
      <span>中国菜</span>
    </div>
    <div class="link"></div>
    <div class="food-text">
      城中中餐厅位于嘉里中心的二层，提供地道江浙美食。餐厅就餐环境舒适，装饰时尚现代，大厅可容纳170人同时就餐，还含有6个私密包厢，是杭城朋友聚会，小型私宴的理想场所之一。
    </div>
    <div class="food-hr"></div>

    <div class="food-restaurant">
      <img src="/imgs/lounge.jpg" alt="" />
      <div class="food-restauranttext">
        <div>非凡酒廊</div>
        <div>时尚社交中心</div>
      </div>
    </div>
    <div class="food-phone">
      <img src="/imgs/telephone.png" alt="" />
      <span>(86 571) 8159 0265</span>
    </div>
    <div class="food-information">
      <img src="/imgs/information.png" alt="" />
      <span>lobbylounge.shhz@shangri-la.com</span>
    </div>
    <div class="food-time">
      <img src="/imgs/time.png" alt="" />
      <span>
        <div>09:00 - 23:30</div>
      </span>
    </div>
    <div class="food-deliciousfood">
      <img src="/imgs/meishi.png" alt="" />
      <span>酒廊及酒吧</span>
    </div>
    <div class="link"></div>
    <div class="food-text">
      非凡酒廊环境优雅舒适，提供本地茶、各种饮料、甜点与时令下午茶。壁灯是三潭印月的写意，顶部的波浪造将西湖山水的柔情写入酒店。流线型的花艺造型与玻璃顶的雕塑相得益彰。刺绣牡丹墙如大家闺秀绽放。家具、餐具、配饰均采用国际品牌，尽显酒店品质。
    </div>
    <div class="food-hr"></div>

    <div class="food-restaurant">
      <img src="/imgs/foodcenter.jpg" alt="" />
      <div class="food-restauranttext">
        <div>美食汇</div>
        <div>灵感源自世界各地市场的活力国际咖啡厅</div>
      </div>
    </div>
    <div class="food-phone">
      <img src="/imgs/telephone.png" alt="" />
      <span>(86 571) 8159 0265</span>
    </div>
    <div class="food-information">
      <img src="/imgs/information.png" alt="" />
      <span>CentralMarket.SHHZ@shangri-la.com</span>
    </div>
    <div class="food-time">
      <img src="/imgs/time.png" alt="" />
      <span>
        <div>早餐</div>
        <div>06:30 - 10:00(周一至周五)</div>
        <div>06:30 - 10:30(周六和周日)</div>
        <div>午餐</div>
        <div>11:30 - 14:00(周一和周日)</div>
        <div>晚餐</div>
        <div>17:30 - 21:30(周一和周四)</div>
        <div>17:00 - 21:30(周五和周日)</div>
        <div>单点美食</div>
        <div>06:30 - 23:00</div>
        <div>户外用餐</div>
        <div>06:30 - 21:00</div>
      </span>
    </div>
    <div class="food-deliciousfood">
      <img src="/imgs/meishi.png" alt="" />
      <span>国际美食</span>
    </div>
    <div class="link"></div>
    <div class="food-text">
      美食汇充满欧洲和亚洲新鲜农产品市场的风格、味道及活力。
      <br />
      宾客在开放式的创意厨房内可饱尝各种单点特色美食，餐厅同时提供招牌菜单。
    </div>
    <div class="food-hr"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.food-top img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.food-top{
  background-color: #fff;
}
.food-restaurant {
  /* margin-top: 15px; */
  position: relative;
}
.food-restaurant>img {
  width: 100%;
  height: 180px;
}
.food-restauranttext {
  position: absolute;
  top: 130px;
  left: 10px;
}
.food-restauranttext > div:first-child {
  color: #fff;
  font-size: 16px;
  font-weight: 200;
}
.food-restauranttext > div:last-child {
  margin-top: 5px;
  color: #fff;
  font-size: 10px;
}
.food-phone {
  margin-left: 10px;
  margin-top: 10px;
}
.food-phone img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.food-phone span {
  color: #ac8642;
  font-size: 16px;
}
.food-information {
  margin-left: 10px;
  margin-top: 10px;
}
.food-information img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.food-information span {
  font-size: 14px;
  color: #333;
}
.food-time {
  margin-left: 10px;
  margin-top: 10px;
  /* height: 200px; */
  display: flex;
}
.food-time img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.food-time span div {
  font-size: 14px;
  color: #333;
}
.food-deliciousfood span div {
  font-size: 14px;
}
.food-deliciousfood {
  margin-left: 10px;
  margin-top: 10px;
}
.food-deliciousfood img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  vertical-align: middle;
}
.food-deliciousfood span {
  font-size: 14px;
  color: #333;
}
/* .link{
  margin-top: 15px;
  border: 1px solid #c9c9c9;
} */
.food-text {
  width: 94%;
  margin-left: 3%;
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
.food-hr {
  margin-top: 10px;
  border-top: 1px solid #c9c9c9;
}
</style>