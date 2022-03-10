<template>
  <div style="background-color: rgb(153 153 153 / 10%); position:fixed;top:0;bottom:0;right:0;left:0; height:670px;">
    <van-nav-bar title="我的资料">
      <template #left>
        <router-link to="/add">
          <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
    </van-nav-bar>
    <!--  v-for="(j,i) of arr1" :key="i" -->
    <div style="overflow: scroll;">
      <van-nav-bar class="zc-d1"
        left-text="称 谓"
        :right-text="sex"
        style=" padding:5px;"
      ></van-nav-bar>
      <!-- <van-nav-bar v-else left-text="称谓" right-text="女士"  style=" padding:5px;">
    </van-nav-bar> -->
      <!--   -->
      <van-nav-bar class="zc-d1"
        left-text="姓 名"
        :right-text="username"
        style="padding: 5px"
      >
      </van-nav-bar>
      <van-nav-bar class="zc-d1"
        left-text="出生日期"
        :right-text="birthday"
        style="padding: 5px"
      >
      </van-nav-bar>
      <!-- v-for -->
      <router-link to="/phonetwo">
        <van-nav-bar class="zc-d1" left-text="联系方式" style="padding: 5px">
          <template #right>
            <img class="zc-01" src="/imgs/010101.png" alt="" >
          </template>
        </van-nav-bar>
      </router-link>
      <router-link to="/date">
        <van-nav-bar class="zc-d1" left-text="我的信用卡" style="padding: 5px">
          <template #right>
            <img class="zc-01" src="/imgs/010101.png" alt="" >
          </template>
        </van-nav-bar>
      </router-link>
      <router-link to="/date">
        <van-nav-bar class="zc-d1" left-text="常旅客飞行计划会籍" style="padding: 5px">
          <template #right>
            <img class="zc-01" src="/imgs/010101.png" alt="" >
          </template>
        </van-nav-bar>
      </router-link>

      <!-- v-for -->
      <router-link to="/hobby">
        <van-nav-bar class="zc-d1"
          left-text="客房安排喜好"
          style="padding: 5px;"
        >
          <template #right>
            <img class="zc-01" src="/imgs/010101.png" alt="" >
          </template>
        </van-nav-bar>
      </router-link>
      <router-link to="/date">
        <van-nav-bar class="zc-d1"
          left-text="迎宾项目"
          style="padding: 5px;"
        >
          <template #right>
            <img class="zc-01" src="/imgs/010101.png" alt="" >
          </template>
        </van-nav-bar>
      </router-link>
      <van-nav-bar class="zc-d1"
        left-text="我的发票"
        style="padding: 5px; margin-top: 15px 0 20px 0"
      >
        <template #right>
          <img class="zc-01" src="/imgs/010101.png" alt="" >
        </template>
      </van-nav-bar>

      <!-- <p style="padding:5px 10px 5px 10px;">*如果您预订客房后需要开具发票，请提供增值税专用发票信息。适用于中国。</p> -->
    </div>
  </div>
</template>
<style >
.van-nav-bar__text {
  color: #000;
}
.van-nav-bar .van-icon {
  color: #000;
}
.zc-d1{
   margin:5px auto;
   background-color: rgb(252, 252, 252);
   /* border-radius:20px;  */
   /* width:80%; */
}
</style>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      sex: "",
      username: "",
      birthday: "",
    };
  },

  computed: {
    ...mapState(["id"]),
  },

  // mounted() {
  //   let uid=this.$store.state.id
  //   this.axios.get(`/hobby?id=${uid}`).then((result) => {
  //     console.log(result);
  //     // console.log(result.data.results[2].wname);
  //     // this.arr1.push(result.data.results[2]);
  //   });
  // },

  mounted() {
    let uid = sessionStorage.getItem("id") || "";
    // name=${}&phone=${}&district=${}&avatar=${}&
    this.axios.get(`/content?id=${uid}`).then((result) => {
      console.log(result.data.results[0]);
      if (result.data.results[0]) {
        if (result.data.results[0].wsex) {
          this.sex = "先生";
        } else {
          this.sex = "女士";
        }
      } else {
        return;
      }

      this.username = result.data.results[0].wname;
      this.birthday = result.data.results[0].wbirthday;
    });
  },
};
</script>


<style scoped>
.zc-set-img {
  width: 20px;
  height: 20px;
}
.zc-01{
   width: 15px;
  height: 15px;
}
</style>

