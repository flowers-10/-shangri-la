<template>
  <div>
    <van-nav-bar title="城市">
      <template #left>
        <router-link to="/destination" class="select-top">
          <img src="/imgs/fanhuiblack.png" alt=""  />
        </router-link>
      </template>
    </van-nav-bar>
    <!-- <div class="select-top">
           

            <span>预订</span>      
    </div> -->
    <van-tabs v-model="active" color="#ac8642" line-width="100px">
      <van-tab title="列表" name="label-o" style="margin-top: 10px">
        <div>
          <div style="width:95%;margin:auto">
          <div
            class="d1"
            v-for="(item, i) in data"
            :key="i"
            @click="tohotelroom(item.id,data[i].name)"
          >
            <img :src="`${item.pic}`" alt="" class="selectimg"  style="  border-radius: 15px;" />
            <div class="d1all">
            
              <div class="d1-1">
                <img src="/imgs/logowhite.png" alt="" />
                <div>{{ data[i].price }}起 每晚</div>
              </div>
              <p class="zib">{{ data[i].name }}</p>

              <span class="zi-b2"
                >{{ data[i].address }} 邮政编码 {{ data[i].zipcode }}</span
              >
            </div>
          </div></div>
        </div>
      </van-tab>

      <!-- 地图 -->
      <van-tab title="地图" class="selectmap">
        <div class="selectoverflow">
          <div>
            <div v-for="(item, i) in data" :key="i" class="selectoverflow1">
              <div class="selectoverflow2">
                <img :src="`${item.pic}`" alt="" class="selectoverflowimg"  @click="gohotelroom(item.id)" />
                <div class="selectfont1">{{ data[i].name }}
                  <br>
                  <div class="selectfont2">CNY{{ data[i].price }}起 每晚</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 地图组件插入 -->
        <Map style="height: 74vh" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Map from "./Amap";

export default {
  components: { Map },
  data() {
    return {
      data: [],
      active: 2,
      data1: [],
    };
  },
  methods: {
    tohotelroom(i,j) {
      sessionStorage.hotel_id = i;
      sessionStorage.city_name = j;
      this.$router.push("/hotelroom");
    },
    gohotelroom(i) {
      sessionStorage.hotel_id = i;
      this.$router.push("/hotelroom");
    },
  },
  mounted() {
    if (sessionStorage.city_id == 1) {
      this.axios.post(`h11`, `id=${sessionStorage.city_id}`).then((result) => {
        this.data = result.data.result;

        console.log(this.data);
      });
    } else {
      this.axios.post(`h11`, `id=${sessionStorage.city_id}`).then((result) => {
        this.data = result.data.result;

        console.log(this.data);
      });
    }
  },
};
</script>
<style scoped>
.select-top img {

  width: 20px;

  height: 20px;
  vertical-align: middle;
}
.d1 {
  position: relative;
  overflow: hidden;
  margin-top: 10px;
}
.d1all {
  position: absolute;
  /* float: left; */
  top: 5px;
  width: 100%;
}

.d1-1 {
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.d1-1 > div {
  margin-top: 15px;
  color: #fff;
  width: 105px;
  height: 20px;
  background-color: #ac8642;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  vertical-align: middle;
}
.d1all img {
  margin-left: 5px;
}
.center img {
  margin-left: 5px;
}
.d1-1 > div {
  font-size: 15px;
  vertical-align: middle;
}
.zib {
  position: absolute;
  top: 140px;
  left: 10px;
  color: rgba(255, 255, 255);
  font-size: 16px;
}
.zi-b2 {
  position: absolute;
  top: 164px;
  left: 10px;
  color: #fff;
  font-size: 11px;
}
.selectmapdiv {
  z-index: 999;
}
.selectswipe {
  font-size: 0;
  box-shadow: 0px 0px 10px rgb(185, 185, 185);
  margin-right: 10px;
  width: 200px;
}

.d1all > img {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 173px;
}

.selectimg {
  width: 100%;
  height: 200px;
  }
.selectimg:hover{
  filter:alpha(Opacity=100);-moz-opacity:0.4;opacity: 0.7;
}
.selectimg1 {
  width: 150px;
  height: 150px;
}
.selectoverflow {
  width: 100%;
  overflow: auto;
}
.selectoverflow1 {
  display: inline-block;
  width: 340px;
  background-color: transparent;
}
.selectoverflow2 {
  display: flex;
  margin-right:20px ;
  box-shadow:5px 0px 5px #9e9e9e ;
  border-radius:10px ;
}
.selectoverflow > div {
  min-width: 1400px;
}
.selectoverflowimg {
  width: 170px;
  height: 130px;
  font-size: 0;
  border-radius: 10px;
}
.selectfont1{
 font-size: 20px;
 font-weight: bold;
 color: rgb(78, 78, 78);
 position: relative;
 left: 10px;
 top: 10px;
}
.selectfont2{
  position: relative;
  font-size: 14px;
  top: 50px;
  color:#ac8642;
}
</style>
