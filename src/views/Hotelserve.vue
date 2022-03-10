<template>
  <div class="a">
    <van-sticky>
       <van-sticky>
      <van-nav-bar title="服务与设施" style="background-color: #fff;">
  <template #left>
    <img src="/imgs/fanhuiblack.png" alt=""
    class="hppic" @click="back" >
  </template>
</van-nav-bar>
    </van-sticky>
    </van-sticky>

    <div>
      <div class="ee">
        <van-cell
          title="美食与健康"
          clickable
          style="font-size: 16px; font-weight: bold"
        >
        </van-cell>
          <div class="bb"></div>
      </div>
       <van-cell title="美食" label="国际美食，中国菜" clickable icon="bell" @click="tofood">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="aa" />
        </template>
      </van-cell>


      <van-cell title="健身中心" clickable icon="star" @click="tosports">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" class="dd" />
        </template>
      </van-cell>

      <div class="ee">
        <van-cell
          title="香礼券商城"
          clickable
          style="font-size: 16px; font-weight: bold"
        >
          <template #right-icon> <van-icon name="arrow" class="dd" /> </template
        ></van-cell>
          <div class="bb"></div>
      </div>

      <div class="gg">
        <van-collapse v-model="activeNames">
          <van-collapse-item >
            <template #title>
              <span style="font-size: 16px; font-weight: bold">通用服务与设施 </span>  
              <div>
                不论商务差旅或休闲旅游，我们都将为您提供各种服务和设施，满足宾客的所有需求。
              </div>
          <div class="ff"></div>         
            </template>
           
            <p>如您所需服务未列于此，请随时联系我们，我们将竭诚为您服务。</p>
            <p>杭州城中香格里拉活动预订中心为高品位的商务旅客提供各种便利设施。专业团队随时待命，协助您解决问题。商务设施包括：</p>
          </van-collapse-item>
        </van-collapse>
      </div>

      <div class="ee">
        <van-cell
          title="酒店政策"
          clickable
          style="font-size: 16px; font-weight: bold"
        >
        </van-cell>
          <div class="bb"></div>
           <van-cell title="入住/退房" label="入住：下午2点
          退房：中午12点"  icon="bell">
       
      </van-cell>
        
      <van-cell title="支付政策" label="本酒店支持以下信用卡付款：美国通运卡、大莱卡、JCB卡、万事达卡、Visa卡及中国银联"  icon="bell">
       
      </van-cell>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    tofood() {
      this.$router.push("/food");
    },
    tosports() {
      this.$router.push("/sports");
    },
    back() {
      this.$router.push("/hotelroom");
    },
  },
};
</script>
<style scoped>
.hppic{
  width: 20px;
  height: 20px;
}
.hppic img{
  width: 10px;
  height: 10px;
}
.hotelservefont {
  margin-left: 26vw;
  font-size: 18px;
}
.hotelserveicon {
  position: relative;
  top: 5px;
  right: 5px;
}

.aa {
  line-height: 30px;
  left: 0%;
}
.bb {
  width: 8px;
  height: 20px;
  background-color: burlywood;
  position: relative;
  z-index: 99;
  top: -33px;
}
.dd {
  line-height: 24px;
}
.ee {
  margin-top: 20px;
  width: 100%;
  height: 40px;
}
.ff{
   width: 8px;
  height: 20px;
  background-color: burlywood;
  position: relative;
  z-index: 99;
  right: 16px;
  top: -48px;
}
.gg{
  margin-top: 20px;
}
</style>