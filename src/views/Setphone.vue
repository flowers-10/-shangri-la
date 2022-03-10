<template>
  <div>
    <van-nav-bar title="电话号码">
      <template #left>
        <router-link to="/setup">
          <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
      <template #right> <span @click="bc">保存</span> </template>
    </van-nav-bar>
    <div class="bg-all">
      <input type="text" class="shuru" v-model="phone" value="" />
      <p>
        * 该手机号用于接收预定和促销手机短信，如需修改登录手机号，请前往“账户设置” -> “登录手机号”进行修改。
      </p>
        <!-- <button @click="del">删除</button> -->
        <!-- <button @click="set">编辑</button> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      phone: "",
    };
  },
  computed: {
    ...mapState["id"],
  },
  mounted() {
    let uid = sessionStorage.getItem("id");
    this.axios.get(`/content?id=${uid}`).then((result) => {
      console.log(result.data.results);
      this.phone = result.data.results[0].wphone;
    });
  },
  methods: {
    bc() {
        let uid = sessionStorage.getItem("id");
        let phone = this.phone;
        this.axios.get(`/setphone?phone=${phone}&id=${uid}`).then((result)=>{
          console.log(result);
        })
        
      this.$toast.success('修改成功')
      this.$router.push('/setup');
    },
    // del(){
    //     let phone = this.phone;
    //     this.phone="";
    // },
  },
};
</script>


<style scoped>
.shuru {
  border: none;
  width: 340px;
  height: 30px;
  z-index: 100;
  /* position: absolute;
  top: 80px; */
  margin: 70px 0 10px 0;
  padding: 15px;
  font-size: 18px;
}
.bg-all {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* height:600px; */
  background-color: rgb(245, 243, 243);
}

.bg-all div{
  position: absolute;
  background-color: white;
  width: 100%;
  top: 150px;
}
.bg-all button{
  float: right;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(156, 132, 95);
  font-size: 16px;
  color: white;
}
span{
  font-size: 16px;
}
.zc-set-img {
  width: 20px;
  height: 20px;
}
.bg-all p {
  position: absolute;
  top: 150px;
  padding: 10px;
  font-size: 14px;
}
</style>