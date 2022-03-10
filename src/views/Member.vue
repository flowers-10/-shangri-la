<template>
  <div>
    <van-nav-bar title="会员权益" style="position: fixed; top: 0; width: 100%;z-index:100; background-color:#fff">
      <template #left>
        <router-link to="/add" class="zc-set-img">
         <img  src="/imgs/返回.png" />
        </router-link>
      </template>
    </van-nav-bar>

    <!-- background-color: rgb(111 111 111 / 15%); -->
    <div style="padding: 20px; overflow: scroll;">
      <div
        @click="test1"
        class="item,item1"
        style="position: relative; top: 50px; z-index: 10; z-index: 80"
      >
        <!-- <button >点击展开/关闭</button> -->
        <img
          src="/imgs/card1.jpg"
          alt=""
          style="
            width: 99%;
            height: 200px;
            margin: auto;
            border-radius: 20px;
            box-shadow: rgb(104 103 102 / 0.62) 0px 0px 20px 2px;
          "
        />
        <!--这里的name 和 css 类名第一个字段要一样-->
        <transition name="draw">
          <div
            class="box"
            v-show="boxshow"
            style="border-radius: 10px; padding: 0 10px 0 10px; width: 93%"
          >
            <div class="zc-words"></div>
            <button class="zc-btn">黄金</button>
            <h6>
              黄金级会籍资格<br />
              <span
                >您仅需以合资格房价入住香格里拉集团旗下酒店，或已累计超过50奖励积分，即可为我们的活跃会员，并接受到您的永久会员卡。拥有在香格里拉集团旗下酒店10次或20晚合资格住宿的记录，即可升级为我们的翡翠会员，专项更多特权及礼遇</span
              >
            </h6>
            <br />
            <hr />
            <h6>
              专项礼遇<br />
              <span>
                1.预先登记方便办理入住手续<br />
                2.客房预订优先候补<br />
                3.六岁及以下儿童享受免费餐饮^
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              迎宾项目<br />
              <span>
                1.新鲜水果<br />
                不是以用于JNE酒店。
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              经济及财务优惠<br />
              <span>
                1.每次入住，于酒店预支不多余250美元现金^*，需支付信用卡续费<br />
                2.面收当地电话费
              </span>
            </h6>
            <br />
            <hr />
            <br /><br /><br /><br /><br /><br />
          </div>
        </transition>
      </div>
      <!--   position: relative; position: absolute; -->

      <div
        @click="test2"
        class="item,item1"
        style="position: relative; bottom: 80px; z-index: 10; z-index: 90"
      >
        <!-- <button >点击展开/关闭</button> -->
        <img
          src="/imgs/card3.jpg"
          alt=""
          style="
            width: 99%;
            height: 200px;
            box-shadow: rgb(104 103 102 / 86%) 0px 0px 20px 2px;
            border-radius: 20px;
          "
        />
        <!--这里的name 和 css 类名第一个字段要一样-->
        <transition name="draw">
          <div
            class="box"
            v-show="boxshow1"
            style="width: 93%; border-radius: 10px; padding: 0 10px 0 10px"
          >
            <div class="zc-words1"></div>
            <button class="zc-btn1">翡翠</button>
            <h6>
              翡翠级会籍资格<br />
              <span
                >您仅需于一个日历年内，拥有香格里拉集团旗下的酒店10次或20晚合资格住宿的记录，即可用用翡翠级会籍。如果您于一个日历年内，拥有在香格里拉集团旗下酒店25次或50晚合资格住宿的记录，即可升级为我们的钻石会员，专享更多礼遇及奖励。</span
              >
            </h6>
            <br />
            <hr />
            <h6>
              专项礼遇<br />
              <span>
                1.预先登记方便办理入住手续<br />
                2.于专门区域优先办理入住及退房手续<br />
                3.同伴同住并可享用会员等级早餐#1 <br />
                4.每日在咖啡厅或这顶餐厅享用自己自助早餐<br />
                5.客房预订优先候补<br />
                6.客房预订保证 - 抵达钱前72小时#2 <br />
                7.提前入住/延迟退房 - 上午11时/下午4时#3 <br />
                8.获赠贵宾金环会额外奖励积分<br />
                9.六岁及以下儿童享受免费餐饮^
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              迎宾项目<br />
              <span>
                1.新鲜水果<br />
                2.巧克力 ... <br />
                3.曲奇和牛奶<br />
                4.杯装面<br />
                5.啤酒<br />
                6.可口可乐<br />
                7.健怡可乐<br />
                8.气泡矿泉水<br />
                9.无气泡矿泉水<br />
                10.当地/时令食品<br />
                不是以用于JNE酒店。
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              经济及财务优惠<br />
              <span>
                1.每次入住，于酒店预支不多余250美元现金^*，需支付信用卡续费<br />
                2.面收当地电话费
              </span>
            </h6>
            <hr />
            <br /><br /><br /><br /><br /><br />
          </div>
        </transition>
      </div>

      <div
        @click="test3"
        class="item,item1"
        style="position: relative; z-index: 100; bottom: 200px"
      >
        <!-- <button >点击展开/关闭</button> -->
        <img
          src="/imgs/card2.jpg"
          alt=""
          style="
            width: 99%;
            height: 200px;
            border-radius: 20px;
            box-shadow: rgb(104 103 102 / 86%) 0px 0px 20px 2px;
          "
        />
        <!--这里的name 和 css 类名第一个字段要一样-->
        <transition name="draw">
          <div
            class="box"
            v-show="boxshow2"
            style="border-radius: 10px; width: 93%; padding: 0 10px 0 10px"
          >
            <div class="zc-words2"></div>
            <button class="zc-btn2">钻石</button>
            <h6>
              钻石级会籍资格<br />
              <span
                >钻石级会员是我们的最高会员级别。您仅需于一个日历年内，拥有在香格里拉集团旗下酒店25次或50晚合资格住宿的记录，即可拥有钻石级会籍。</span
              >
            </h6>
            <br />
            <hr />
            <h6>
              专项礼遇<br />
              <span>
                1.预先登记方便办理入住手续<br />
                2.于专门区域优先办理入住及退房手续<br />
                3.同伴同住并可享用会员等级早餐#1 <br />
                4.每日在咖啡厅或这顶餐厅享用自己自助早餐<br />
                5.客房预订优先候补<br />
                6.客房预订保证 - 抵达钱前72小时#2 <br />
                7.提前入住/延迟退房 - 上午11时/下午4时#3 <br />
                8.获赠贵宾金环会额外奖励积分<br />
                9.抵达时熨烫一套西服**<br />
                10.使用度假酒店内指定康乐设施<br />
                9.六岁及以下儿童享受免费餐饮^
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              迎宾项目<br />
              <span>
                1.新鲜水果<br />
                2.巧克力 ... <br />
                3.曲奇和牛奶<br />
                4.杯装面<br />
                5.啤酒<br />
                6.可口可乐<br />
                7.健怡可乐<br />
                8.气泡矿泉水<br />
                9.无气泡矿泉水<br />
                10.当地/时令食品<br />
                11.一瓶红葡萄酒或白葡萄酒<br />
                不是以用于JNE酒店。
              </span>
            </h6>
            <br />
            <hr />
            <h6>
              经济及财务优惠<br />
              <span>
                1.每次入住，于酒店预支不多余250美元现金^*，需支付信用卡续费<br />
                2.面收当地电话费<br />
                3.长途电话和传真只收取成本费用
              </span>
            </h6>
            <hr />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      boxshow: false,
      boxshow1: false,
      boxshow2: false,
    };
  },
  methods: {
    test1() {
      if (this.boxshow != true) {
        this.boxshow = true;
        this.boxshow1 = false;
        this.boxshow2 = false;
      } else {
        this.boxshow = false;
      }
    },
    test2() {
      if (this.boxshow1 != true) {
        this.boxshow1 = true;
        this.boxshow2 = false;
        this.boxshow = false;
      } else {
        this.boxshow1 = false;
      }
    },
    test3() {
      if (this.boxshow2 != true) {
        this.boxshow2 = true;
        this.boxshow1 = false;
        this.boxshow = false;
      } else {
        this.boxshow2 = false;
      }
    },
  },
};
</script>

<style>
.box {
  height: 360px;
  width: 99%;
  background-color: #fff;
  /* display: block; */
  overflow: hidden;
  overflow-y: scroll;
}
.draw-enter-active,
.draw-leave-active {
  transition: all 1s ease;
}
.draw-enter,
.draw-leave-to {
  height: 0;
  /* position: absolute; */
}

/* .item img{
  box-shadow: 0px -1px 10px 4px rgb(175 175 74 / 72%);
} */

.box span {
  font-size: 12px;
}

.box h4 {
  margin: 0;
}

.zc-words,
.zc-words1,
.zc-words2 {
  position: relative;
  top: 21px;
  z-index: 1;
  margin-top: 20px;
  width: 60%;
  margin: auto;
}

.zc-words {
  border-top: 2px solid rgb(225 173 57);
}
.zc-words1 {
  border-top: 2px solid rgb(5 120 66);
}
.zc-words2 {
  border-top: 2px solid rgb(106 103 101);
}

.zc-btn,
.zc-btn1,
.zc-btn2 {
  display: block;
  border: none;
  width: 80px;
  height: 40px;
  margin: auto;
  z-index: 10;
  position: relative;
  background-color: white;
  top: 0;
}
.zc-btn {
  /* background-color:rgba(255, 255, 2555, 0); */
  color: rgb(225 173 57);
}

.zc-btn1 {
  /* background-color:rgba(0, 0, 0, 0); */
  color: rgb(5 120 66);
}

.zc-btn2 {
  /* background-color:rgba(255, 255, 2555, 0); */
  color: rgb(106 103 101);
}
.zc-set-img>img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>