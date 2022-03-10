<template>
  <div>
    <div class="head">
      <img @click="fan" src="/imgs/jinka.png" alt="" />
      <img class="xuancar" src="/imgs/xuancar.png" alt="" />
    </div>
    <hr />
    <div class="body">
      <div>
        <img src="/imgs/iPadmini.png" alt="" />
      </div>
    </div>
    <div class="body_two">
      <div>
        <span class="body_twofont_dianzi">电子产品 · APPLE</span>
      </div>
      <div>
        <span class="body_twofont_canshu"
          >Apple iPad mini Wi-Fi 256GB (4色)</span
        >
      </div>
      <div>
        <span class="body_twofont_jifen"> 30,080 贵宾金环会奖励积分</span>
      </div>
    </div>
    <hr />

    <div class="body_three">
      <div class="body_three_one">
        <p>供应状况：</p>
        <p>有现货</p>
      </div>
      <div class="body_three_one">
        <p>送货信息：</p>
        <p>含全球运送</p>
      </div>
    </div>
    <hr />

    <div class="foot">
      <router-link to="/jifen">
        <button>立即兑换</button>
      </router-link>
    </div>
    <div class="butt">
      <div class="buttyellow">详情</div>
      <div class="buttblack">
        <p></p>
        <p>详情:</p>
        <p>- 8.3 英寸 (对角线) LED 背光多点触控显示屏，采用 IPS 技术</p>
        <p>- 2266 x 1488 像素分辨率，326 ppi</p>
        <p>- 4K 视频拍摄：24 fps、25 fps、30 fps 或 60 fps</p>
        <p>- 支持 Apple Pencil (第二代)</p>
        <p>- 64 位架构的 A15 仿生芯片</p>
        <p>- USB-C 充电线 (1 米)</p>
        <p>- 20W USB-C 电源适配器</p>
        <p>- 奖励备有由领取奖励日计起的1年在香港地区的保养服务。</p>
        <p></p>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.head img {
  height: 8vh;
}
.head .xuancar {
  height: 5vh;
  position: absolute;
  right: 3vw;
  top: 2vh;
}
.body_two {
  margin-bottom: 3vh;
}
.body_two div {
  margin-top: 1vh;
  margin-left: 3vw;
  text-align: center;
}

/* 下面介绍的第一行字 */
.body_twofont_dianzi {
  color: rgb(172, 134, 72);
  font-size: 18px;
}

/* 下面介绍的第二行字 */
.body_twofont_canshu {
  font-size: 28px;
  /* 字体 */
  font-family: "Times New Roman", Times, serif;
}

/* 下面介绍的第三行字 */
.body_twofont_jifen {
  color: rgb(172, 134, 72);
  font-size: 20px;
}

/* 供应状况，送货信息 */
.body_three {
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}
.body_three_one {
  display: flex;
  justify-content: space-between;
}

/* 按钮的div */
.foot {
  text-align: center;
  margin-top: 3vh;
  /* margin-bottom: 0vh; */
}
.foot button {
  border: 1px solid rgb(172, 134, 66);
  background-color: white;
  width: 45%;
  height: 38px;
  color: rgb(172, 134, 66);
}
.buttyellow {
  margin-top: 9vh;
  font-size: 28px;
  color: rgb(172, 134, 66);
  margin-left: 15px;
}
.buttblack {
  font: 20px;
  margin-left: 15px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fan() {
      //  改地址
      this.$router.push("/jifen");
    },
  },
};
</script>