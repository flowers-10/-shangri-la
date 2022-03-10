<template>
  <div>
    <!-- <div class="bighead">
      <div class="heada" @click="fan">
          <img @click="fan1" src="/imgs/alifanhui.png" alt="" />
          <span>积分商城</span>
      </div>
    </div> -->
    <!-- <div class="jifen_head"> -->
    <van-nav-bar
      class="nav-barbar"
      title="积分商城"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- </div> -->
    <div v-for="(item, i) in allin" :key="i" class="alldivs">
      <div class="head">
        <span>新品好货</span>
      </div>
      <div class="headimg">
        <img :src="`${item.img}`" />
      </div>
      <div class="body">
        <div>
          <span class="bodyfont_dianzi">{{ item.dianzi }}</span>
        </div>
        <div>
          <span class="bodyfont_canshu">{{ item.canshu }}</span>
        </div>
        <div>
          <span class="bodyfont_jifen"> {{ item.jifen }}积分 </span>
        </div>
      </div>
      <div class="foot">
        <button @click="get(allin[i].jifen)">立即兑换</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-barbar >>> span {
  color: rgb(191, 155, 69);
}
.nav-barbar{
  background-color: white;
  /* color:rgb(191, 155, 69) ; */
}
.nav-barbar>>>.van-nav-bar__title{
  color: rgb(191, 155, 69)!important;
}
.nav-barbar >>> i {
  color: rgb(191, 155, 69);
}

.jifen_head {
  height: 40px;
}
.headimg img {
  width: 375px;
}
/* 总包DIV */
.alldivs {
  width: 375px;
  margin-bottom: 80px;
}
/* 头部黄底的新产品div */
.head {
  box-sizing: border-box;
  padding: 9px;
  text-align: center;
  /* margin-left: 3px; */
  width: 375px;
  height: 38px;
  background-color: rgb(180, 146, 085);
  color: white;
  font-size: 18px;
}

.body div {
  margin-top: 8px;
  margin-left: 10px;
}

/* 下面介绍的第一行字 */
.bodyfont_dianzi {
  color: rgb(172, 134, 72);
  font-size: 8px;
}

/* 下面介绍的第二行字 */
.bodyfont_canshu {
  font-size: 20px;
  /* 字体 */
  font-family: "Times New Roman", Times, serif;
}

/* 下面介绍的第三行字 */
.bodyfont_jifen {
  color: rgb(172, 134, 72);
  font-size: 15px;
}

/* 按钮的div */
.foot {
  text-align: center;
  margin-top: 15px;
}
.foot button {
  border: 1px solid rgb(172, 134, 66);
  background-color: white;
  width: 180px;
  height: 38px;
  color: rgb(172, 134, 66);
  font-size: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      score: "",
      allin: [
        {
          img: "/imgs/102inchiPad.png",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple 10.2-inch iPad Wi-Fi 256GB (2色)",
          jifen: "22000",
          id: "",
        },
        {
          img: "/imgs/iPadmini.png",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPad mini Wi-Fi 256GB (4色)",
          jifen: "30080",
          id: "2",
        },
        {
          img: "/imgs/AirPods-Pro.jpg",
          dianzi: "电子产品 · APPLE",
          canshu: "AirPods-Pro",
          jifen: "9400",
          id: "3",
        },
        {
          img: "/imgs/iPhone-12-128GB-Blue.jpg",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPhone 12 128GB (2色)",
          jifen: "32500",
          id: "4",
        },
        {
          img: "/imgs/iPhone-13-Pro---Gold_385x250.png",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPhone 13 Pro 256GB (4色)",
          jifen: "53440",
          id: "5",
        },
        {
          img: "/imgs/iPhone-13-Pro---Silver_385x250.png",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPhone 13 Pro 512GB (4色)",
          jifen: "63280",
          id: "6",
        },

        {
          img: "/imgs/iPhone-13-Pro---Graphite_385x250.png",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPhone 13 Pro 256GB (4色)",
          jifen: "53440",
          id: "7",
        },
        {
          img: "/imgs/iPhone-12-256GB-Black.jpg",
          dianzi: "电子产品 · APPLE",
          canshu: "Apple iPhone 12 Pro 256GB (4色)",
          jifen: "36200",
          id: "8",
        },
      ],
    };
  },
  methods: {
    fan() {
      // this.$router.push("/jifen");
      this.axios.post(`/right`, `wid=${sessionStorage.id}`).then((result) => {
        console.log(result.data.result[0].wpoint);
        this.score = result.data.result[0].wpoint;
      });
    },
    get(i) {
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
              alert("兑换成功");
              console.log(result);
            });
        } else {
          alert("积分不足");
        }
      });
    },
    // fan1(){
    //   this.$router.push('/jifen');
    // }
    onClickLeft() {
      this.$router.push("/jifen");
    },
  },
};
</script>

