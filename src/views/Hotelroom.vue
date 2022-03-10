<template>
  <div class="hotelroom">
    <div class="hrguding">
       <div class="headjpg">
          <van-sticky>
            <router-link to="/select">
              <img src="/imgs/lklback.png" alt="" class="headicon1" />
               
            </router-link>
          </van-sticky>

          <img src="/imgs/lklshare.png" alt="" class="headicon2" />

          <div class="headdiv1">{{ data1[0].name }}</div>
          <div class="headdiv2">{{ data1[0].detail }}</div>
          <img src="/imgs/lklpic.png" alt="" class="headicon3" />
        </div>
      <!-- 头图 -->
      <!-- 轮播图 -->
      <div class="hrswipe" @click="topicture">
        <van-swipe
          class="my-swipe"
          :autoplay="3000"
          indicator-color="white"
          
        >
          <van-swipe-item v-for="(item, i) in data2" :key="i"
            >
            <img class="hrswipepc" :src="`/imgs${item.pic}.jpg`"
          />
       
          </van-swipe-item>
        </van-swipe>

      </div>
    </div>
    <!-- 疫情通知 -->
    <div>
      <van-notice-bar
        class="hrfontsize"
        left-icon="volume-o"
        text="鉴于新冠肺炎疫情的最新发展,所有于2020年4月1日之前......"
        @click="show"
      />
      <van-popup v-model="visible" class="hrpopup"
        >鉴于新冠肺炎疫情的最新发展，所有于2020年4月1日之前完成的预定，原定入住日期在2021年3月31日前，且不晚于入住时期前24小时进行取消的订单，我们将提供免费取消服务*。此服务不限预定渠道，亦适用于提前预定优惠订单。其他预定则适用于我们常规的取消政策，请参考相关条款与细则。如需帮助，请联系我们。团队及活动预定的取消事宜将根据实际情况单独处理，请联系您在当地的销售负责人。*东京香格里拉大酒店的订单不适用以上取消政策，请您发邮件至tokyo@shangri-la.com，我们将协助您处理订单事宜。温馨提示：为配合新冠肺炎的疫情防控，请参考当地政府关于安全隔离要求及期限的最新公告。
        <hr />
        <div class="hrpopupdiv" @click="hide">
          <span class="hrpopupspan">好</span>
        </div>
      </van-popup>

      <!-- 单元格地图更多日期 -->
      <div>
        <van-cell
          :title="data1[0].address + `邮政编码:` + data1[0].zipcode"
          value="地图"
          class="hrfontsize"
          style="margin: 10px auto; width: 95%"
          @click="gomap"
        />
      </div>

      <div @click="toserve">
        <van-cell
          title="美食  休闲与健康"
          is-link
          value="更多"
          class="hrfontsize"
          style="margin: 10px auto; width: 95%"
        />
      </div>

      <div>
        <van-cell
          :title="`日期 ${date}`"
          is-link
          value=""
          class="hrfontsize"
          style="margin: auto; width: 95%"
          @click="muditwo"
        />
        <van-cell
          :title="`客房 ${fangjian} 成人 ${chengren} 儿童 ${ertong}`"
          is-link
          class="hrfontsize"
          style="margin: auto; width: 95%"
          @click="mudithree"
        />
      </div>

      <div>
        <!-- 第一块 -->
        <!-- 显示页面 -->
        <div
          class="mainbuy"
          @click="boxshow(i)"
          v-for="(item, i) in data"
          :key="i"
        >
        <div>
          <div style="width:95%;margin:auto">
            <img :src="`/imgs/${data[i].pic}.jpg`" class="mainbuyjpg" />
            <div class="mainbuydiv1">{{ data[i].name }}</div>
            <div class="mainslot1">
              <div class="mainfont">
                CNY {{ data[i].price }}<span> 每晚</span>
              </div>
            </div>
            </div>
            <div class="mainslot2">
              <!-- <span>{{ data[i].score }}积分每晚</span> -->
              <div class="mainfont">
                {{ data[i].score }}<span> 积分每晚</span>
              </div>
            </div>
          </div>
          <div v-show="item.check">
            <div class="hroom">
              <span class="hroomspan">特色</span>
              <ul class="hroomul">
                <li>{{ data[i].introduce1 }}</li>
                <li>{{ data[i].introduce2 }}</li>
                <li>{{ data[i].introduce3 }}</li>
              </ul>
              <div class="hrsplitline"></div>
            </div>

            <!-- 订购栏 -->
            <div class="hotelroomserve">
              <van-card
                :desc="`(` + item.bedtype[i].bedsize + `)`"
                :title="item.bedtype[i].name"
                v-for="(item1, i) of item.bedtype"
                :key="i"
                class="hotelroomcard"
              >
                <template #tags>
                  <van-tag plain type="primary" round class="hrtag"
                    >在线预付
                  </van-tag>
                  <br />
                  <van-tag plain type="danger" round class="hrtag">
                    不可退款</van-tag
                  >
                </template>
                <template #footer class="hrcard">
                  <span class="hrcardspan"> {{ item.bedtype[i].price }}</span>
                  <van-button
                    size="mini"
                    color="rgb(135,105,32)"
                    class="hreservebutton"
                    @click="
                      show4(
                        item.bedtype[i].price,
                        item.bedtype[i].bedsize,
                        item.bedtype[i].id,
                        data[i].pic,
                        data[i].name
                      )
                    "
                    >预订</van-button
                  >
                  <div class="hrsplitline"></div>
                </template>
              </van-card>
            </div>
          </div>
        </div>
      </div>
      <!-- 页脚猜你喜欢 -->
      <div class="hrfooter">
        <div class="hrfooterdiv">
          <van-cell title="猜你喜欢" is-link value="查看全部" />
          <div class="hrfooterfoodall">
            <div class="hrfooterfood1">
              <van-image src="/imgs/hz1food1.jpg" />
              <div>咖啡苑自助午餐/晚餐通用卷（周末节假日通用）</div>
              <div class="hrfooterfont">CNY 215</div>
            </div>

            <div class="hrfooterfood2">
              <van-image src="/imgs/hz1food1.jpg" />
              <div>136 元 咖啡苑工作日自助午餐(只限工作日使用)</div>
              <div class="hrfooterfont">CNY 136</div>
            </div>
          </div>

          <div class="hrfooterhotle">
            <div class="hrfooterhotlefont">关于酒店</div>
            <!-- 需要加入新的数据表 -->
            <span class="hrfooterhotleabout">{{ data1[0].about }}</span>
          </div>

          <div class="hrfooterconnect">
            <van-icon name="phone-o" class="phone" />电话 |
            <van-icon name="envelop-o" class="email"/>电子邮件
          </div>
          <div style="height: 40px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isboxshow: 0,
      data: [],
      data2: [],
      data1: [],
      fangjian: sessionStorage.getItem("fangjian") || "",
      ertong: sessionStorage.getItem("ertong") || "",
      chengren: sessionStorage.getItem("chengren") || "",
      date: sessionStorage.getItem("date") || "",
      // 点击出现详情
      // boxshow: false,

      visible: false,
      sum: 0,
      //  预定客房数据
    };
  },
  methods: {
    hotelh13() {
      this.axios
        .post(`/h13`, `id=${sessionStorage.hotel_id}`)
        .then((result) => {
          this.data2 = result.data.result;
          console.log(this.data2);
        });
    },
    hotelzhu() {
      this.axios
        .post(`/hotelzhu`, `id=${sessionStorage.hotel_id}`)
        .then((result) => {
          result.data.data.forEach((item) => {
            item.check = false;
          });

          this.data = result.data.data;
          console.log(this.data);
        });
    },
    hotelh12() {
      this.axios
        .post(`/h12`, `id=${sessionStorage.hotel_id}`)
        .then((result) => {
          this.data1 = result.data.result;
          console.log(this.data1);
        });
    },
    muditwo() {
      this.$router.push("/muditwo");
    },
    mudithree() {
      this.$router.push("/mudithree");
    },
    boxshow(num) {
      console.log(num);
      this.data[num].check = !this.data[num].check;
    },
    // 加了个点击事件跳转
    gomap() {
      this.$router.push("/bmap");
    },
    show4(i, j, k, m,z) {
      sessionStorage.price = i.substring(i.indexOf(" "));
      sessionStorage.guige = j;
      sessionStorage.home_id = k;
      sessionStorage.home_url = m;
      sessionStorage.home_name = z;
      this.$router.push("/book");
    },
    toserve() {
      this.$router.push("/hotelserve");
    },
    topicture() {
      this.$router.push("/hotelpicture");
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },
  mounted() {
    this.hotelh12();
    this.hotelzhu();
    this.hotelh13();
  },
};
</script>

<style>
.mainfont {
  line-height: 22px;
}
.mainbuyjpg {
  height: 150px;
  width: 100%;
  border-radius: 14px;
}
.mainbuyjpg:hover{
  filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.7;
}
.hrswipepc {
  object-fit: cover;
  height: 230px;
  width: 100%;
}
.hrguding {
  position: relative;
}
.hotelroom {
  background-color: rgba(240, 240, 240);
}
/* 单元格字体大小 */
.hrfontsize {
  font-size: 12px;
  border-radius: 8px;
}
/* 头图 */
.headjpg {
  display: flex;
  /* height:250px; */
  /* position: absolute; */
}
.headicon1 {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  height: 30px;
  width: 30px;
}
.headicon2 {
  position: absolute;
  top: 10px;
  left: 335px;
  z-index: 10;
  height: 25px;
  width: 25px;
}
.headicon3 {
  position: absolute;
  top: 200px;
  left: 335px;
  z-index: 10;
  height: 25px;
  width: 25px;
}
.headdiv1 {
  position: absolute;
  font-size: 21px;
  top: 73%;
  left: 10px;
  color: white;
  z-index: 10;
}
.headdiv2 {
  position: absolute;
  font-size: 14px;
  top: 85%;
  left: 10px;
  color: white;
  z-index: 10;
}
/* 疫情通知 */
.hrpopup {
  border-radius: 5px;
  width: 250px;
  height: 300px;
  padding: 20px;
  font-size: 16px;
}

.hrpopupdiv {
  width: 100%;
  height: 15px;
  text-align: center;
}
.hrpopupspan {
  color: #a3912a;
}
/* xiala */
.mainbuy span {
  font-size: 12px;
}
.mainbuy {
  position: relative;
  margin-top: 10px;
}
.mainbuydiv1 {
  position: absolute;
  left: 15px;
  top: 120px;
  color: white;
  font-size: 18px;
}
.mainslot1 {
  position: absolute;
  width: 120px;
  height: 22px;
  background-color: rgb(175, 131, 20);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  right: 10px;
  top: 10px;
  color: white;
  text-align: center;
  font-size: 16px;
}
.mainslot2 {
  position: absolute;
  width: 110px;
  height: 22px;
  background-color: rgba(59, 57, 56, 0.5);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  right: 10px;
  top: 38px;
  color: white;
  text-align: center;
  font-size: 16px;
}

/* 特色css */
.hroom {
  width: 95%;
  margin: auto;
  position: relative;
  background-color: rgb(250,250,250);
  font-size: 13px;
  border-radius: 10px 10px 0 0;
}
.hroomspan {
  font-size: 20px !important;
  font-weight: 600;
  margin-left: 10px;
  padding: 8px;
  display: block;
}
.hroomul {
  margin-left: 10px;
  margin-top: 0;
  padding: 8px;
}
.hroomicon {
  position: absolute;
  top: 70px;
  right: 10px;
}

/* 预定客房css */
.van-card:not(:first-child) {
  margin-top: 0px;
}
.hrtag {
  margin: 5px;
}
.hrtag {
  margin: 5px;
}
.hrcardspan {
  position: absolute;
  bottom: 55px;
  right: 20px;
  color: rgb(135, 106, 32);
  font-size: 18px !important;
}
.hreservebutton {
  width: 90px;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}
.hotelroomcard {
  width: 95%;
  margin: auto;
}
.hrsplitline {
  margin-top: 10px;
  border-bottom: 1px solid black;
}

/* 底部猜你喜欢 */

.hrfooterdiv {
  width: 95%;
  margin: auto;
}
.hrfooterfoodall {
  display: flex;
}
.hrfooterfood1 {
  font-size: 12px;
  margin-right: 5px;
  background-color: white;
}
.hrfooterfood2 {
  font-size: 12px;
  margin-left: 5px;
  background-color: white;
}
.hrfooterfont {
  color: rgb(163, 146, 49);
  margin: 10px;
}
.hrfooterhotle {
  margin-top: 10px;
  padding: 10px;
  background-color: white;
}
.hrfooterhotlefont {
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 18px;
}
.hrfooterhotleabout {
  font-size: 14px;
}
.hrfooterconnect {
  background-color: white;
  margin-top: 5px;
  padding: 10px;
  font-size: 10px;
}
.phone,.email{
  margin-right: 5px;
}
</style>
