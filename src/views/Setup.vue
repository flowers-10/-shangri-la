<template>
  <div>
    <div>
      <van-nav-bar title="账户设置" fixed>
       <template #left>
         <router-link to="/add">
           <img class="zc-set-img" src="/imgs/返回.png">
          </router-link>
       </template>
      </van-nav-bar>
     <div  style=" height:1000px; position: fixed; top:40px; left:0; bottom:0; right:0; width:100%; background-color:rgba(111, 111, 111, 0.1);">
    <div>
    <van-notice-bar mode="closeable" style="background-color: #FFFBE8; color:#ed6a0;" class="setup-item">为了提高账户的安全性，请立即验证您的登录信息！</van-notice-bar></div>

    <!-- <div style="height:660px; position:absolute; top:0; bottom:0; left:0; right:0;">
    <img src="../../../public/image/bg1.jpg"  style="width:100%; height:100%; opacity: 0.7;">
    </div> -->
    
    <!-- v-for="(j, i) of arr" :key="i" -->
    <div >
      <div class="conTent">
        <div>
        <van-cell
          title="登录邮箱"
          to="/setemail"
          :value="email"
          style="padding: 15px; margin: 10px 0 10px 0; border-radius: 10px;"
        ></van-cell></div>
        <van-cell
          title="登录手机号"
          to="/setphone"
          :value="`+86 ${userphone}`"
          style="padding: 15px; margin: 10px 0 10px 0; border-radius: 10px;  "
        ></van-cell>
        <!-- <van-cell
          title="微信"
          to="/tran"
          value="微信"
          style="padding: 15px; margin: 20px 0 10px 0; border-radius: 10px; background-color: rgb(208 192 62 / 50%)"
        ></van-cell> -->

        <!-- <router-link to="/em">
          <van-nav-bar
            left-text="登录邮箱"
            :right-text="j.wemail"
            style="padding: 5px"
          >
          </van-nav-bar>
        </router-link>
        <router-link to="/ph">
          <van-nav-bar
            left-text="登录手机号"
            :right-text="`+86 ${j.wphone}`"
            style="padding: 5px"
          >
          </van-nav-bar>
        </router-link>

        <router-link to="/card">
          <van-nav-bar left-text="微信" right-text="绑定" style="padding: 5px">
          </van-nav-bar>
        </router-link> -->
      </div>
    </div>
    <div class="conTent">
    <van-cell
          title="修改密码"
          to="/updata"
          is-link
          style="padding: 15px; margin: 10px 0 10px 0; border-radius: 10px; "
    ></van-cell>
    <!-- <van-cell
          title="通讯喜好"
          to="/up"
          is-link
          style="padding: 15px; margin: 10px 0 10px 0; border-radius: 10px; background-color: rgb(208 192 62 / 50%)"
    ></van-cell> -->
    <!-- <router-link to="/up">
      <van-nav-bar left-text="修改密码" style="padding: 5px; margin-top: 20px">
        <template #right>
          <van-icon name="arrow" size="18" />
        </template>
      </van-nav-bar>
    </router-link>
    <router-link to="/data">
      <van-nav-bar left-text="通讯喜好" style="padding: 5px">
        <template #right>
          <van-icon name="arrow" size="18" />
        </template>
      </van-nav-bar>
    </router-link> -->
    </div>
    </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
  data() {
    return {
      // arr: [],
    };
  },
  computed: {
    ...mapState(["username", "grade", "userphone","email"]),
  },
  mounted() {
        this.vlogin(sessionStorage.id);
        
    // this.axios.get("/content").then((result) => {
    //   console.log(result);
    //   console.log(result.data.results);
    //   this.arr.push(result.data.results[2]);
    // });
  },
  methods:{
    ...mapActions(["vlogin"]),
    ...mapMutations(["login1"]),
    ...mapMutations(["login1"]),
    ...mapMutations(["login2"]),
    ...mapMutations(["login3"]),
    ...mapMutations(["login4"]),
  }
};
</script>

<style scoped>
.conTent {
  margin: auto;
  width: 90%;
  height: 100%;
  border-radius: 20px;
  
}
.setup-item{
  height: 30px;
  margin-top: 6px;
  font-size: 12px;
  align-items: center;
}

.zc-set-img{
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>