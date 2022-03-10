<template>
  <div>
    <van-sticky>
      <van-nav-bar title="预定" class="book-top">
        <template #left>
          <router-link to="/hotelroom">
            <img src="/imgs/fanhuiblack.png" alt="" />
          </router-link>
        </template>
      </van-nav-bar>
      <!-- <van-cell>
        <div style=":center ">
          <van-icon name="arrow-left" size="1.8rem" @click="tohotelroom" />
          <span class="bookspan">预订</span>
        </div>
      </van-cell> -->
    </van-sticky>
    <div class="book-room">
      <div>香格里拉酒店</div>
      <div>{{ home_name }}{{ guige }}</div>
      <div>入住/退房日期:{{ date }}</div>
      <div>成人:{{ chengren }}</div>
      <div>12岁以下儿童:{{ ertong }}</div>
      <div>房间:{{ fangjian }}</div>
      <div class="book-div"></div>
    </div>
    <van-cell-group class="book-information">
      <div>联络信息&nbsp;&nbsp;&nbsp;&nbsp;<span>(全部必填)</span></div>
      <!-- <van-field value="L****" disabled />
      <van-field value="177***4859@qq.com" disabled />
      <van-field value="中国大陆" disabled />
      <van-field value="1327***7997" disabled /> -->
      <div style="width: 90%; margin: auto; line-height: 9px">
        <h1 class="book-information1">{{ username }}</h1>
        <van-divider />
        <h1 class="book-information1">{{ userphone }}</h1>
        <van-divider />
        <h1 class="book-information1">{{ district }}</h1>
        <van-divider />
        <h1 class="book-information1">{{ email }}</h1>
        <van-divider />
      </div>

      <van-field name="switch" label="接受确认短信">
        <template #input>
          <van-switch
            style="margin-left: 200px"
            v-model="switchChecked"
            size="20"
          />
        </template>
      </van-field>
      <div class="book-div"></div>
    </van-cell-group>
    <router-link to="/book">
      <div class="book-choice">
        <div class="book-span">
          <span>备选要求</span>
          <span>(可选择)</span>
        </div>
        <van-icon name="arrow" size="20" class="book-icon" />
      </div>
    </router-link>
    <van-field
      readonly
      clickable
      name="datetimePicker"
      :value="value"
      label="抵达酒店时间"
      placeholder="选择时间"
      @click="showPicker = true"
      style="padding-bottom: 5px; padding-top: 0px"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        type="time"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <div class="book-time"></div>
    <div class="book-demand">
      <div>若您还有其他需求，请写在此处，以便我们更好地为您准备。</div>
      <van-field
        class="book-message"
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="300"
        placeholder="请用中文或英文填写"
        show-word-limit
      />
    </div>
    <div class="book-white"></div>
    <div class="book-regulations">
      <div class="book-regulationstop">预定取消规定</div>
      <div class="book-regulationstbottom">
        所有预订均须使用指定信用卡类型或电子支付进行担保。如于确认抵达日期18:00前（酒店当地时间）的24小时内取消已担保预订，则须支付一晚费用。如于确认抵达日期18:00前（酒店当地时间）的24小时内修改已担保预订的入住天数或日期，须根据酒店要求承担房价变动产生的差价及更改天数罚金。
      </div>
      <div class="book-regulationstline"></div>
    </div>
    <div class="book-agree" @click="bookhide">
      <div book-agree-top>条款与细则</div>
      <van-checkbox
        class="book-agreeleft"
        @click="bookshow"
        v-model="checked"
        style="font-size: 12px; margin-bottom: 5px"
        >我已阅读并同意该等
        <span style="font-size: 12px">条款与细则、隐私保障政策及Cookies。</span>
      </van-checkbox>
      <div class="book-agreebottom" v-show="bookvisible"></div>
      <div class="book-div"></div>
    </div>
    <div class="bookplay">
      <div class="left">
        <div class="left-top">CNY {{ price * fangjian - card }}</div>
        <div class="left-bottom">已含10%服务费及6%税费</div>
      </div>
      <div class="right" @click="goPay">去下单</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      card: sessionStorage.getItem("card") || 0,
      guige: sessionStorage.getItem("guige") || '',
      price: sessionStorage.getItem("price") || 0,
      id: sessionStorage.getItem("id"),
      fangjian: sessionStorage.getItem("fangjian") || 0,
      ertong: sessionStorage.getItem("ertong") || "",
      chengren: sessionStorage.getItem("chengren") || "",
      date: sessionStorage.getItem("date") || "",
      home_name: sessionStorage.getItem("home_name"),
      switchChecked: false,
      value: "",
      showPicker: false,
      message: "",
      checked: true,
      bookvisible: false,
      wid: "",
      arr: "/imgs/hz1food1.jpg",
    };
  },
  computed: {
    ...mapState(["username", "email", "userphone", "district"]),
  },
  methods: {
    tohotelroom() {
      this.$router.push("/hotelroom");
    },
    ...mapActions(["vlogin"]),
    onConfirm(time) {
      this.value = time;
      this.showPicker = false;
    },
    bookshow() {
      this.bookvisible = true;
    },
    bookhide() {
      this.bookvisible = false;
    },
    goPay() {
      this.axios
        .post(
          "/insert",
          `id=${sessionStorage.id}&home_id=${
            sessionStorage.home_id
          }&name=${sessionStorage.home_name}&number=${sessionStorage.fangjian}&request=${
            sessionStorage.guige
          }&time=${sessionStorage.date}&zone=${sessionStorage.city_name}&url=${
            sessionStorage.home_url
          }&price=${parseInt(this.price * this.fangjian - this.card)}`
        )
        .then((result) => {
          this.$router.push("/purchase");
        });
    },
  },
  mounted() {
    this.vlogin(sessionStorage.id);
  },
};
</script>

<style  scoped>
.book-top img {
  width: 20px;
  height: 20px;
}
.book-top {
  background-color: white;
}
.book-room {
  margin-top: 10px;
}
.book-room > div:first-child {
  margin-top: 5px;
  color: #ac8642;
  font-weight: 600;
  font-size: 18px;
}
.book-room div {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 14px;
}

.book-room > div:last-child {
  margin-top: 15px;
  margin-left: 0px;
}

.book-room > div:first-child {
  margin-top: 5px;
  color: #ac8642;
  font-weight: 600;
  font-size: 18px;
}
.book-div {
  border-top: 1px solid #c9c9c9;
  width: 100%;
  height: 10px;
  background-color: #f1f3f4;
}
.book-information > div:first-child {
  margin-left: 15px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
}
.book-information > div > span {
  font-size: 12px;
  color: #c9c9c9;
}
.book-information > div > h1 {
  height: 5px;
}
.book-choice {
  width: 96%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  height: 35px;
  margin-top: 0px;
  margin-bottom: 5px;
  border-bottom: 1px solid #8b8b8b;
}
.book-choice .book-icon {
  color: #000;
}
.book-choice span {
  color: #000;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.book-span > span:nth-child(2) {
  /* margin-left: -3px; */
  font-size: 14px;
  color: #c9c9c9;
}
.book-span > span:nth-child(1) {
  font-size: 16px;
  /* color: #c9c9c9; */
}
.book-time {
  width: 95%;
  margin-left: 2%;
  border-bottom: 1px solid #c9c9c9;
}
.book-demand div {
  width: 95%;
  margin: auto;
  margin-top: 10px;
  font-size: 14px;
  margin-left: 15px;
}
.book-message {
  padding: 0;
  background-color: #f6f6f6;
  height: 80px;
}
.book-white {
  margin-top: 10px;
  width: 100%;
  height: 10px;
  border-top: 1px solid #c9c9c9;
  background-color: #f1f3f4;
}
.book-regulations {
  margin-left: 10px;
}
.book-regulationstbottom {
  font-size: 14px;
  width: 98%;
}
.book-regulations > div:first-child {
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 18px;
}
.book-regulations > div:last-child {
  font-size: 14px;
  color: #8b8b8b;
  margin-bottom: 10px;
}
.book-regulationstline {
  width: 98%;
  margin-top: 10px;
  border-bottom: 1px solid #8b8b8b;
}
.book-agree div {
  margin-left: 10px;
}
.book-agree > div:first-child {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
}
.book-agree > div:first-child {
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;
}
.book-agreeleft {
  font-size: 14px;
}
.book-agree span {
  font-size: 14px;
  color: #ac8642;
}
.book-agreebottom {
  color: red;
  font-size: 14px;
}
.book-agree .book-agreebottom {
  margin-left: 35px;
}
.book-agree .book-div {
  margin-left: 0px;
}
.bookplay {
  height: 50px;
  margin-left: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bookplay .left {
  width: 60%;
  color: #8b8b8b;
}
.bookplay .left .left-top {
  color: #ac8642;
}
.bookplay .left div {
  font-size: 14px;
}
.bookplay .right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 50px;
  background-color: #ac8642;
  color: #fff;
  font-size: 18px;
  /* font-weight: 600; */
}
.book-information1 {
  font-size: 14px;
  margin: 15px 0 15px 0;
  color: #8b8b8b;
  font-weight: 200;
}
.book-information2 {
  color: #f1f3f4;
}
</style>