<template>
  <div>
    <router-view />
    <van-nav-bar title="所有预订" :safe-area-inset-top="true" />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div>
        <van-tabs v-model="activeName" color="#ac8642">
          <van-tab title="待付款" name="a">
            <div v-for="(a, b) of arr" :key="b">
              <div class="pay">
                <div class="pay-img">
                  <img :src="`/imgs/${arr[b].purchase_url}.jpg`" alt="" />
                </div>
                <div class="check">
                  <div class="check-span">
                    <p>{{ arr[b].purchase_zone }}</p>
                    <p>{{ arr[b].home_name }}{{ arr[b].purchase_request }}</p>
                    <p>时间:{{ arr[b].purchase_time }}</p>
                    <p>房间数:{{ arr[b].purchase_number }}间</p>
                  </div>
                </div>
                <span>CNY{{ arr[b].purchase_price }}</span>
                <button
                  class="btn1"
                  @click="show(arr[b].purchase_id, arr[b].home_id)"
                >
                  取消订单
                </button>
                <button
                  class="btn2"
                  @click="
                    goPay(
                      arr[b].purchase_id,
                      arr[b].home_id,
                      arr[b].purchase_number,
                      arr[b].purchase_price,
                      arr[b].purchase_time,
                      arr[b].purchase_url,
                      arr[b].purchase_zone,
                      arr[b].home_name,
                      arr[b].purchase_request
                    )
                  "
                >
                  去付款
                </button>
              </div>
            </div>
          </van-tab>

          <van-tab title="待入住" name="b">
            <div v-for="(a, b) of arr1" :key="b">
              <div class="pay">
                <div class="pay-img">
                  <img :src="`/imgs/${arr1[b].purchase_url}.jpg`" alt="" />
                </div>
                <div class="check">
                  <div class="check-span">
                    <p>{{ arr1[b].purchase_zone }}</p>
                    <p>{{ arr1[b].home_name }}{{ arr1[b].purchase_request }}</p>
                    <p>时间:{{ arr1[b].purchase_time }}</p>
                    <p>房间数:{{ arr1[b].purchase_number }}间</p>
                  </div>
                </div>
                <span>CNY{{ arr1[b].purchase_price }}</span>
                <button
                  class="btn2"
                  @click="
                    rehome(
                      arr1[b].review_id,
                      arr1[b].home_id,
                      arr1[b].purchase_number,
                      arr1[b].purchase_price,
                      arr1[b].purchase_time,
                      arr1[b].purchase_url,
                      arr1[b].purchase_zone,
                      arr1[b].home_name,
                      arr1[b].purchase_request
                    )
                  "
                >
                  确认入住
                </button>
              </div>
            </div>
          </van-tab>
          <van-tab title="待评价" name="c">
            <div v-for="(a, b) of arr2" :key="b">
              <div class="pay">
                <div class="pay-img">
                  <img :src="`/imgs/${arr2[b].purchase_url}.jpg`" alt="" />
                </div>
                <div class="check">
                  <div class="check-span">
                    <p>{{ arr2[b].purchase_zone }}</p>
                    <p>{{ arr2[b].home_name }}{{ arr2[b].purchase_request }}</p>
                    <p>时间:{{ arr2[b].purchase_time }}</p>
                    <p>房间数:{{ arr2[b].purchase_number }}间</p>
                  </div>
                </div>
                <span>CNY{{ arr2[b].purchase_price }}</span>
                <button class="btn1" @click="toDestination">再次入住</button>
                <button class="btn2">去评价</button>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Toast } from "vant";
// import axios from 'axios'
export default {
  data() {
    return {
      // active: "1",
      // index: [1, 2],
      activeName: "a",
      password: "",
      isLoading: false,
      arr: [],
      arr1: [],
      arr2: [],
      card: sessionStorage.getItem("card") || 0,
      guige: sessionStorage.getItem("guige") || "",
      price: sessionStorage.getItem("price") || "",
      id: sessionStorage.getItem("id") || "",
      fangjian: sessionStorage.getItem("fangjian") || "",
      ertong: sessionStorage.getItem("ertong") || "",
      chengren: sessionStorage.getItem("chengren") || "",
      date: sessionStorage.getItem("date") || "",
    };
  },
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
    },
    toDestination() {
      this.$router.push("/destination");
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    show(i, j) {
      this.axios.post(`/delete1`, `id=${i}&home_id=${j}`).then((result) => {
        location.reload();
      });
    },
    goPay(i, j, k, l, o, m, n, p, z) {
      let score1 = sessionStorage.getItem("score");
      console.log(score1);
      console.log(111);
      sessionStorage.fangjian =
        sessionStorage.fangjian == "undefined" ? 0 : sessionStorage.fangjian;
      sessionStorage.price =
        sessionStorage.price == "undefined" ? 0 : sessionStorage.price;
      if (!score1) {
        score1 = 0;
      }
      let score =
        parseInt(score1) +
        parseInt(sessionStorage.fangjian * sessionStorage.price);
      console.log(sessionStorage.score);
      console.log(sessionStorage.fangjian);
      console.log(sessionStorage.price);
      console.log(score);
      if (score < 50000) {
        this.axios.post("/rank", `rank=黄金级&id=${sessionStorage.id}`);
      } else if (score >= 50000 && score < 100000) {
        this.axios.post("/rank", `rank=翡翠级&id=${sessionStorage.id}`);
      } else {
        this.axios.post("/rank", `rank=钻石级&id=${sessionStorage.id}`);
      }
      this.axios.post("/score", `wid=${sessionStorage.id}&score=${score}`);
      this.axios.post("/right", `wid=${sessionStorage.id}`).then((result) => {
        sessionStorage.score = result.data.result[0].wpoint;
        sessionStorage.rank = result.data.result[0].wrank;
      });
      this.axios
        .post(
          "/insert2",
          `id=${sessionStorage.id}&home_id=${j}&name=${p}&number=${k}&request=${z}&time=${o}&zone=${n}&url=${m}&price=${l}`
        )
        .then((result) => {
          this.axios.post(`/delete1`, `id=${i}&home_id=${j}`);
        });
      this.axios.post("/destroy", `number=${sessionStorage.card_id}`);
      let price = this.price;
      let fangjian = this.fangjian;
      let ertong = this.ertong;
      let chengren = this.chengren;
      let date = this.date;
      let guige = this.guige;
      let card = this.card;
      let data = {
        orderId: "t4544545123" + Math.ceil(Math.random() * 100), //随机生成唯一的就行了这个 自己找吧
        price: price * fangjian - card,
        detail: `房间:规格${guige},人数:成人:${chengren}儿童:${ertong},日期:${date}`,
        title: `香格里拉大酒店`,
      };

      // var instance = this.$axios.create({
      //   headers: { "content-type": "application/x-www-form-urlencoded" },
      // });
      // 代理到  http://localhost:3000/api/pcpay

      this.axios
        .post(`/api/pcpay`, this.$qs.stringify(data))
        .then((res) => {
          // this.data=res;
          //  console.log(res.data.result);
          // console.log(res);
          location.href = res.data.result;
          // window.open(res.data.result)
        });
    },
    rehome(i, j, k, l, o, m, n, p, z) {
      //  人脸识别
      sessionStorage.i = i;
      sessionStorage.j = j;
      sessionStorage.k = k;
      sessionStorage.l = l;
      sessionStorage.o = o;
      sessionStorage.m = m;
      sessionStorage.n = n;
      sessionStorage.p = p;
      sessionStorage.z = z;
      this.$router.push("/payface1");
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (from.path == "/payface1") {
        // console.log("aaaa");
        //  this.$toast('入住成功')
        // console.log(sessionStorage.yanzhengzhu);
        if (sessionStorage.yanzhengzhu == "true") {
          // console.log(sessionStorage.yanzhengzhu);
          vm.axios
            .post(
              "/insert3",
              `id=${sessionStorage.id}&home_id=${sessionStorage.j}&name=${sessionStorage.p}&number=${sessionStorage.k}&request=${sessionStorage.z}&time=${sessionStorage.o}&zone=${sessionStorage.n}&url=${sessionStorage.m}&price=${sessionStorage.l}`
            )
            .then((result) => {});
          vm.axios
            .post(
              `/delete2`,
              `id=${sessionStorage.id}&home_id=${sessionStorage.j}`
            )
            .then((result) => {
              location.reload();
            });
        } else {
          // console.log("zzzz");
          //  this.$toast('入住不成功')
        }
      }
    });
  },
  computed: {
    ...mapState([
      "username",
      "grade",
      "userphone",
      "days",
      "number",
      "sex",
      "score",
    ]),
  },
  mounted() {
    this.axios.post(`/select1`, `id=${sessionStorage.id}`).then((result) => {
      this.arr = result.data.result;
    });
    this.axios.post(`/select2`, `id=${sessionStorage.id}`).then((result) => {
      this.arr1 = result.data.result;
    });
    this.axios.post(`/select3`, `id=${sessionStorage.id}`).then((result) => {
      // console.log(result);
      this.arr2 = result.data.result;
    });
  },
};
</script>

<style scope>
.d1 {
  width: 100%;
  height: 200px;
  background-color: white;
}
.purchase-text a {
  color: #000;
}
.purchase-textcolor a {
  color: #ac8642;
}

.pay {
  position: relative;
  width: 90%;
  height: 32vw;
  /* background-color: antiquewhite; */
  margin: 10px auto;
  border-radius: 20px;
  padding: 2vw 0 2vw 3vw;
  /* border: 2px solid black; */
  box-shadow: 0 0 9px 0px #ac8642;
}
.pay-img {
  height: 100%;
}
.pay-img img {
  width: 30vw;
  height: 90%;
  border-radius: 2vw;
}

.check {
  /* background-color: rgb(244, 250, 250); */
  width: 55vw;
  height: 30vw;
  position: absolute;
  top: 2vw;
  right: 2vw;
  overflow: hidden;
  float: right;
  border-radius: 3vw;
  padding: 1vw;
  font-size: 12px;
}

.check p {
  margin-bottom: 10px;
}
.check > div > p:first-child {
  color: #ac8642;
  font-size: 18px;
  font-weight: 600;
}
.btn1,
.btn2 {
  padding: 1vw 2.5vw;

  border: 0;
  background-color: #ac8642;
  color: white;
  border-radius: 2px;
  font-size: 12px;
}
.btn2 {
  position: absolute;
  bottom: 2vw;
  right: 4vw;
}
.btn1 {
  position: absolute;
  bottom: 2vw;
  right: 20vw;
}

.pay span {
  position: absolute;
  bottom: 10vw;
  left: 67vw;
  font-size: 18px;
  font-weight: 700;
  color: #ac8642;
}
</style>
