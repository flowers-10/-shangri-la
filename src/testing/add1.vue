<template>
  <div>
    <!--  :v-model="islogin"  -->
    <div class="nav-top-top" v-if="!islogin">
      <div>
        <div class="nav-top-top-top">
          <!--  v-for="(j, i) of arr" :key="i" -->

          <div class="nav-top-img">
            <van-image
              round
              width="50px"
              height="50px"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <!-- </router-link> -->
            <span class="custom-title" style="position: relative; top: -20px"
              >先生/女士</span
            >&nbsp;
            <span style="margin: 0 0 20px 10px; text-align: right">{{
              userphone
            }}</span>
            <br />
            <!-- <div style="width:95%; margin:auto;">
     <van-progress :percentage="50" stroke-width="8" style=" margin-bottom:30px;"/></div> -->
            <p>立即加入我们了解更多更精彩的内容吧！</p>
            <router-link to="/add">
              <van-button class="nav-btn">登录\注册</van-button>
            </router-link>
          </div>
        </div>
      </div>

      <div
        style="
          height: 660px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
        "
      >
        <img
          src="../../public/image/bg1.jpg"
          style="
            width: 110%;
            height: 110%;
            opacity: 0.6;
            position: fixed;
            top: 0;
          "
        />
      </div>
    </div>


    <div class="nav-top" v-else>
      <!--  v-for="(j, i) of arr" :key="i" -->
      <div class="nav">
        <van-cell
          value="我的卡片"
          is-link
          style="background-color: rgba(111, 111, 111, 0)"
          border:false
        >
          <template #title>
            <router-link to="/img">
              <van-image
                round
                width="50px"
                height="50px"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
              />
            </router-link>
            <span class="custom-title" style="position: relative; top: -20px">
              {{ username }}</span
            >&nbsp;
            <button
              style="
                background-color: red;
                border-radius: 5px;
                padding: 2px 5px;
                border: none;
                display: block;
              "
            >
              {{ grade }}
            </button>
            <!-- <button>翡翠级</button> -->
            <!-- <van-tag
              v-for="(a, i) of arr1"
              :key="i"
              type="danger"
              style="
                background-color: red;
                border-radius: 5px;
                padding: 5px 10px;
              "
              >{{ a.wrank }}</van-tag
            > -->
          </template>
        </van-cell>
        <span style="margin: 0 0 20px 10px; text-align: right">{{
          userphone
        }}</span>
        <br />
        <!-- <div style="width:95%; margin:auto;">
     <van-progress :percentage="50" stroke-width="8" style=" margin-bottom:30px;"/></div> -->
        <span style="margin: 20px; display: inline-block"
          >还需20晚升级至翡翠</span
        >
      </div>
    </div>
    <div style="background-color: rgb(111 111 111 / 15%); padding-top: 40px">
      <div class="content">
        <router-link v-if="islogin" to="/tran">
          <!-- <router-link v-else to="/list"> -->
          <van-cell
            icon="after-sale"
            title="我的交易记录"
            is-link
            style="padding: 15px; margin-bottom: 3px; border-radius: 10px"
        /></router-link>
        <!-- </router-link> -->
        <router-link v-if="islogin" to="/card">
          <van-cell
            icon="paid"
            title="我的卡劵"
            is-link
            style="padding: 15px; margin-bottom: 3px; border-radius: 10px"
        /></router-link>
        <router-link v-if="islogin" to="/list">
          <van-cell
            icon="user-circle-o"
            title="兑换成员名单"
            is-link
            style="padding: 15px; border-radius: 10px"
        /></router-link>

        <router-link v-if="islogin" to="/data">
          <van-cell
            icon="contact"
            title="我的资料"
            is-link
            to="/data"
            style="padding: 15px; margin: 20px 0 3px 0; border-radius: 10px"
        /></router-link>
        <router-link v-if="islogin" to="/member">
          <van-cell
            icon="gem-o"
            title="会员权益"
            is-link
            style="padding: 15px; border-radius: 10px"
        /></router-link>
        <router-link v-if="islogin" to="/set">
          <van-cell
            icon="discount"
            title="账户设置"
            is-link
            style="padding: 15px; margin-top: 20px; border-radius: 10px"
        /></router-link>
        <router-link v-if="islogin" to="/tran"></router-link>
        <button
          v-if="islogin"
          style="
            width: 90%;
            height: 40px;
            font-size: 20px;
            border: none;
            background-color: white;
            margin: 10px;
            border-radius: 20px;
            background-color: rgb(201 201 127 / 82%);
          "
        >
          退出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  // props:["islogin"]
  data() {
    return {
      username:'',
      grade:'',
      userphone:'',
    };
  },
  computed: {
    ...mapState(["islogin","id"]),
  },
  // methods: {
  //   ...mapMutations(["loginok1"]),
  // },

  mounted() {
    let uid=this.$store.state.id;
    // name=${}&phone=${}&district=${}&avatar=${}&
    this.axios.get(`/content?id=${uid}`).then((result)=>{
      console.log(result);
      this.username=result.data.results[0].wname;
      this.grade=result.data.results[0].wbirthday;
      this.userphone=result.data.results[0].wphone;
    })
  },
};
</script>


<style scoped>
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

.nav-top {
  background-color: rgb(135, 105, 32);
}

.nav-top-top {
  height: 1000px;
  position: fixed;
  top: 40px;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(111, 111, 111, 0.1);
}

.nav-top-top-top {
  height: 400px;
  width: 80%;
  background-color: #ac864296;
  background-color: rgb（135，105，32）;
  padding-top: 10px;
  z-index: 1000;
  border-radius: 20px;
  position: fixed;
  top: 80px;
  left: 20px;
  padding: 20px;
}

.nav-top-top-top p {
  font-size: 19px;
  padding: 10px;
}

.nav-btn {
  /* position: absolute;
  bottom: 550px; */
  left: 30px;
  width: 80%;
  background-color: rgb(135, 105, 32);
  border-radius: 15px;
  border: none;
  font-size: 20px;
  font-weight: 900;
  margin-top: 100px;
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
  margin: auto;
  width: 90%;
  height: 100%;
  border-radius: 20px;
}
</style>