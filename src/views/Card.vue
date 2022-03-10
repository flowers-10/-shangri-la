<template>
  <div>
    <van-sticky>
      <!-- <div class="card-top">
        <router-link to="/add">
          <img src="/imgs/esc.png" alt="" />
        </router-link>
        <span>我的卡劵</span>
      </div> -->

      <van-nav-bar title="我的卡劵" class="card-top">
        <template #left>
        <router-link to="/add">
          <img src="/imgs/fanhuiblack.png" alt="" />
        </router-link>
        </template>
      </van-nav-bar>
    </van-sticky>

    <van-tabs
      v-model="active"
      title-active-color="#AF9A53"
      color="#AF9A53"
      line-width="100px"
    >
      <van-tab title="待使用">
        <div class="card-center" @click="destination(arr[i].card_price,arr[i].card_number)" v-for="(a,i) of arr" :key="i">
          <div class="card-bg">
            <img :src=arr[i].card_url alt="" />
            <div class="card-text">
              <div class="div-money">{{arr[i].card_information}}</div>
              <div>{{arr[i].card_name}}</div>
              <div>{{arr[i].card_price}}积分</div>
            </div>
          </div>
        </div>
        <!-- <div class="card-center">
          <div>Spa礼劵</div>
          <div class="card-bg">
            <img src="/imgs/card2.png" alt="" />
            <div class="card-text">
              <div class="div-money">{{ price[1] }}人民币</div>
              <div>香格里拉chi水疗奖励礼劵</div>
              <div>1,000奖励积分</div>
            </div>
          </div>
        </div> -->
      </van-tab>
      <van-tab title="已失效"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:2,
      arr:[],
    };
  },
  methods: {
    destination(i,j) {
      sessionStorage.card = i;
      sessionStorage.card_id = j;
      this.$router.push("/destination");
    },
  },
  mounted(){
    this.axios.post(`/get`,`id=${sessionStorage.id}`).then(
      result=>{
        this.arr = result.data.result; 
        console.log(this.arr)
      }
    )
  }
};
</script>

<style lang="scss" scoped>

.card-top img {
  width: 20px;
  height: 20px;
}
.card-center img{
  border-radius: 10px;
}
.card-center > div:first-child {
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 3%;
 
}
.card-center > div:nth-child(2) {
  margin-left: 4%;
}
.card-center div img {
  width: 96%;
  height: 200px;
}
.card-bg {
  position: relative;
}
.card-text {
  width: 90%;
  height: 170px;
  position: absolute;
  background-color: rgba($color: #fff, $alpha: 0.7);
  margin-left: 48%;
  margin-top: -52%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 10px;
  // align-items: center;
}
.card-text div {
  height: 30px;
  width: 100%;
  // margin-left: 50%;
  margin-top: 5%;
  text-align: center;
}
.card-text > div:first-child {
  font-size: 20px;
}
.card-text > div:nth-child(2) {
  font-size: 14px;
}
.card-text > div:last-child {
  color: #ad9853;
  font-size: 18px;
}
</style>