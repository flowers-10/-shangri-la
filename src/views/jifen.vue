<template>
  <div>
    <div class="alldiv">

<div>
  <van-nav-bar
  class="nav-barbar"
  title="兑换会员积分"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  fixed="true"
/>
</div>
      <!-- <div class="jifen_head">
        <div class="jifen_head_imgs">
          <img src="/imgs/alifanhui.png" alt="" />
        </div>
        <div class="jifen_head">
          <span>兑换会员积分</span>
        </div>
      </div> -->
      <div class="divone">
        <div class="jifen_body_one good">
          <router-link to="/add">
            <img :src="arr[0].card_url" alt="" />
          </router-link>
        </div>
        <div class="jifen_body_two">
          <p class="p1">{{ arr[0].card_name }}</p>
          <p class="p2">
            立刻在指定餐厅或酒吧使用贵宾金环会奖励积分或享受香格里拉Chi水疗的护理项目。
          </p>
        </div>
        <div class="jifen_body_three">
          <button @click="dinner(arr[0].card_price)">
            {{ arr[0].card_price }}积分
          </button>
        </div>
      </div>
      <br />
      <div class="divones">
        <div class="jifen_body_ones">
          <router-link to="/add">
            <img src="/imgs/spaones.jpg" alt="" />
          </router-link>
        </div>
        <div class="jifen_body_two">
          <p class="p1">{{ arr[1].card_name }}</p>
          <p class="p2">
            您可凭贵宾金环会奖励积分兑换一系列由Klook客路提供的旅游体验、Bowers＆Wilkins优质音响产品以及其它电器用品等。
          </p>
        </div>
        <div class="jifen_body_three">
          <button @click="jifentwo">{{ arr[1].card_price }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      score: 0,
      arr: [
        {
          card_name: "餐饮及水疗",
          card_information: "100人名币",
          card_price: "500",
          card_url: "/imgs/spaone.jpg",
        },
        {
          card_name: "索尼耳机",
          card_information: "800人名币",
          card_price: "进入积分商城",
          card_url: "/imgs/spaones.jpg",
        },
      ],
    };
  },
  methods: {
    dinner(i) {
      this.axios.post(
        `/post`,
        `id=${sessionStorage.id}&name=${this.arr[0].card_name}&information=${this.arr[0].card_information}&price=${this.arr[0].card_price}&url=${this.arr[0].card_url}`
      );
      this.axios.post(`/right`, `wid=${sessionStorage.id}`).then((result) => {
        console.log(result.data.result[0].wpoint);
        this.score = result.data.result[0].wpoint;
        if (parseInt(this.score) > parseInt(i)) {
          this.axios
            .post(
              "/score",
              `score=${parseInt(this.score) - parseInt(i)}&wid=${
                sessionStorage.id
              }`
            )
            .then((result) => {
              this.$toast("兑换成功");
              console.log(result);
            });
        } else {
          this.$toast("积分不足");
        }
      });
    },
    jifentwo() {
      this.$router.push("/jifentwo");
    },
     onClickLeft() {
      this.$router.push("/add");
    },
    // onClickLeft() {
    //   this.$router.push("/jifentwo");
    // },
  },
};
</script>

<style scoped>
.good{
  margin-top: 46px;
}
.nav-barbar>>>span{
  color:rgb(191, 155, 69) ;
}
.nav-barbar{
  background-color: white;
}
.nav-barbar>>>i{
  color:rgb(191, 155, 69) ;
}
/* .nav-barbar{
  position: fixed;
} */
/* 总包的最大DIV */
.alldiv {
  margin-left: 2%;
  margin-right: 2%;
}
/* 第一个兑换项目 */
.divone,
.divones {
  padding-bottom: 8px;
  border: 1px solid rgb(188, 188, 188);
}
/* 顶部 积分兑换 文字 */
.jifen_head {
  /* position: fixed; */
  margin-top: 8px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 18px;
  /* 字体 */
  font-family: "Times New Roman", Times, serif;
}
.jifen_head_imgs {
  display: flex;
  position: absolute;
  top: 1px;
  left: 10px;
}
.jifen_head_imgs img {
  width: 30px;
}
/* 第一个图片的div */
.jifen_body_one,
.jifen_body_ones {
  /* padding-left: 2%; */
  width: 100%;
  height: 30vh;
  text-align: center;
}
.jifen_body_one img {
  width: 100%;
  height: 100%;
}
.jifen_body_ones img {
  width: 100%;
  height: 100%;
}

/* 图片下的两段文字 */
.jifen_body_two {
  text-align: center;
  width: 100%;
  margin-bottom: 16px;
  /* height: 18vh; */
}
.jifen_body_two .p1 {
  font-size: 20px;
}
.jifen_body_two .p2 {
  width: 80%;
  font-size: 13px;
  margin: 0 auto;
  /* 字体 */
  font-family: "Times New Roman", Times, serif;
}

/* 按钮的div */
.jifen_body_three {
  text-align: center;
  font-size: 16px;
}
.jifen_body_three button {
  border: 1px solid rgb(172, 134, 66);
  background-color: white;
  width: 45%;
  height: 38px;
}
</style>