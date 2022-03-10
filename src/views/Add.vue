<template>
  <div style="overflow:hidden;background-color:rgb(216 216 216);">
    <!--  :v-model="islogin"  -->
    <div class="nav-top-top" v-if="id == ''">
      <div class="div-img"><img src="/imgs/idmin.png" alt="" /></div>

      <div class="div-topall">
        <router-link to="/login">登录</router-link>
        <p>/</p>
        <router-link to="/reg">注册</router-link>
      </div>
    </div>
    <div v-else-if="id" style="color: white;">
      <div class="adddiv1">
        <div class="adddiv2">
          <!-- <van-icon name="card" size="1.5rem" class="addicon1" />
          <van-icon name="arrow" size="40px" class="addicon2" /> -->
          <!-- <van-icon
            name="chat-o"
            class="addicon3"
            
          /> -->
          <img @click="customer" class="zc-001" style="margin-right: 20px;" src="/imgs/kefu05.svg" alt="" />
          <!-- <img src="/imgs/消息.svg" alt=""> -->

          <div class="adddiv3">
            <!-- 头像 -->
            <div>
              <router-link to="/images">
                <van-image round :src="arr" class="addimage"
              /></router-link>
            </div>

            <div class="adddiv4">{{ username }}</div>
            <van-button
              round
              type="info"
              size="mini"
              class="adddiv5"
              color="rgb(135,100,100)"
              >{{ grade }}</van-button
            >
            <div class="adddiv6">{{ userphone }}</div>
          </div>
          <div style="width: 90%; margin: auto">
            <van-progress :percentage=score/1000 :pivot-text=grade
            color="rgb(135,100,100)" class="addprogress" />
            <div class="adddiv7">
              <div>黄金级</div>
              <div>翡翠级</div>
              <div>钻石级</div>
            </div>
          </div>
        </div>
        <div>
          <div class="adddiv8">
            可用积分 <span class="adddiv9"> {{ score }}</span>
          </div>
          <div class="adddiv9"></div>
          <van-button
            color="rgb(212, 161, 107)"
            class="addbtn"
            size="small"
            @click="jifen"
            >立即兑换</van-button
          >
        </div>
      </div>
    </div>
    <!-- position:fixed; inset: 200px 0px 0px; -->
    <div
      style="
        background-color: rgb(111 111 111 / 15%);
        overflow: scroll;
        padding-top: 10px;
      "
    >
      <div class="content content11" id="chuang">
        <van-cell
          icon="after-sale"
          title="我的交易记录"
          is-link
          to="/tran"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />
        <van-cell
          icon="paid"
          title="我的卡劵"
          is-link
          to="/card"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />
        <van-cell
          icon="user-circle-o"
          title="兑换成员名单"
          is-link
          to="/add"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />

        <van-cell
          icon="contact"
          title="我的资料"
          is-link
          to="/date"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />
        <van-cell
          icon="gem-o"
          title="会员权益"
          is-link
          to="/member"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />
        <van-cell
          icon="discount"
          title="账户设置"
          is-link
          to="/setup"
          style="padding: 13px; margin-bottom: 6px; border-radius: 10px"
        />
        <button class="my-zc-btn" @click="re" v-if="id">退出</button>

        <!-- <div style="height: 200px"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";
// import {mapAction} from 'vuex'
export default {
  // props:["islogin"]
  data() {
    return {
      qwe:'false',
      fangjian: sessionStorage.getItem("fangjian") || "",
      price: sessionStorage.getItem("price") || "",
      jindu: "0",
      days: "", //用于保存当前登录用户  住房天数
      number: "",
      sex: "",
      socre: "",
      id: sessionStorage.getItem("id") || "",
      arr: "/imgs/tbg2.jpg",
    };
  },
  computed: {
    ...mapState(["username", "grade", "userphone", "score"]),
  },
  methods: {
    ...mapActions(["vlogin"]),
    ...mapMutations(["login1"]),
    ...mapMutations(["login2"]),
    ...mapMutations(["login3"]),
    re() {
      sessionStorage.clear()
      this.$router.push("/login");
    },
    ...mapMutations(["login4"]),
    customer() {
      this.$router.push("/customer");
    },
    login() {
      this.loginok1(this.aname);
    },
    jifen() {
      this.$router.push("/jifen");
    },
    ...mapActions(["vlogin", "vright"]),
  },

  mounted() {
    let chuang = document.getElementById('chuang');
    if(sessionStorage.id!=""){
      chuang.className="content"
    }
    this.vlogin(sessionStorage.id);
    this.vright(sessionStorage.id);
    this.axios.get(`/content?id=${sessionStorage.id}`).then((result) => {
      // console.log(result.data.code == 200);
      if (result.data.code == 200) {
        this.arr = result.data.results[0].wavatar;
      }
    }),
      this.axios.post("/right", `wid=${sessionStorage.id}`).then((result) => {
        if(result.data.code == 200){
          sessionStorage.score = result.data.result[0].wpoint;
          // console.log(result);
        }
      });
  },
};
</script>


<style scoped>
/* 头部样式 */
.addicon1 {
  position: absolute;
  right: 8vw;
  top: 3.5rem;
}
.addicon2 {
  position: absolute;
  right: 3vw;
  top: 3.5rem;
}
.addicon3 {
  width: 25px;
  height: 25px;
  position: absolute;
  right: 20px;
  top: 13px;
}
.adddiv1 {
  height: 210px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.adddiv2 {
  height: 160px;
  width: 100%;
  background: rgb(175, 134, 90);
  border-radius: 0 0 30% 30%;
  z-index: 100;
}

.adddiv3 {
  display: flex;
}
.addimage {
  position: absolute;
  left: 30px;
  top: 15px;
  width: 60px;
  height: 60px;
}
.adddiv4 {
  position: absolute;
  left: 100px;
  top: 23px;
  font-size: 18px;
}
.adddiv5 {
  position: absolute;
  left: 160px;
  top: 25px;
}
.adddiv6 {
  position: absolute;
  left: 97px;
  top: 40px;
  font-size: 18px;
  margin-top: 15px;
}
.addprogress {
  
  position: relative;
  left: 100;
  top: 95px;
  z-index: 99;
}
.adddiv7 {
  display: flex;
  justify-content: space-between;
}
.adddiv7 {
  position: relative;
  top: 108px;
  left: 2px;
  font-size: 14px;
}
.adddiv8 {
  /* width:200px; */
  color: black;
  position: absolute;
  top: 175px;
  left: 20px;
  font-size: 16px;
  line-height: 20px;
}
.adddiv9 {
  /* display: inline; */
  color: black;
  position: absolute;
  /* top: 180px; */
  left: 80px;
  font-size: 28px;
  font-weight: bold;
}
.addbtn {
  position: absolute;
  top: 170px;
  right: 25px;
  border-radius: 5px;
}
/* 原先第一版 */
body {
  background-color: #444;
}

.nav-top {
  height: 200px;
  background-color: #ac8642;
  background-color: rgb（135，105，32）;
  padding-top: 10px;
  z-index: 1000;
}

.nav-top-top {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5%;
  width: 90%;
  height: 200px;
  border-radius: 20px;
  border: #dee1e6 1px solid;
  background-color: #fff;
}
.div-img {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.nav-top-top img {
  height: 50px;
  width: 50px;
}
.nav-top-top .div-topall {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15%;
  align-items: center;
}
.nav-top-top .div-topall a,
p {
  margin-right: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #ac8642;
}
.nav-top-top button {
  width: 60%;
  height: 40px;
  background-color: saddlebrown;
  border-radius: 10px;
  border: none;
  display: block;
  margin: auto;
  position: relative;
  top: 90px;
}

.nav-top .nav {
  margin: 20px auto;
  width: 90%;
  height: 200px;
  border-radius: 20px;
  background-color: rgb(226 226 101 / 63%);
  box-shadow: 0px -1px 10px 4px rgb(175 175 74 / 72%);
}

.content {
  margin: 0 auto 50px auto;
  width: 90%;
  height: 100%;
  border-radius: 20px;
}

/* .content11 {
  margin: 0px auto 50px auto;
  width: 90%;
  height: 100%;
  border-radius: 20px;
} */

.my-zc-btn {
  width: 85%;
  height: 35px;
  font-size: 20px;
  border: none;
  color: rgb(211, 157, 100);
  /* background-color: white; */
  margin: 10px 30px;
  border-radius: 10px;
  letter-spacing: 2px;
  background-color: rgb(255, 255, 255);
}

.zc-001 {
  /* float: right; */
  /* margin-right: 20px; */
  /* margin-top: 20px; */
  position: absolute;
  top: 20px;
  right: 5px;
  width: 25px;
  height: 25px;
}
</style>