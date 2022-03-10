<template>
  <div>
    <van-nav-bar title="电子邮箱" style="position:fixed;top:0;width:100%;">
      <template #left>
        <router-link to="/setup">
          <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
      <template #right> <span @click="bc" >保存</span>  </template>
    </van-nav-bar>
    <div class="bg-all">
      <input type="text" class="shuru" v-model="email" value="" />
      <p>
        * 该邮箱用于接收预定和促销邮件，如需修改登录邮箱，请前往“账户设置” -> “邮箱登录”进行修改。
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapState["id"],
  },
  mounted() {
    let uid = sessionStorage.getItem("id");
       this.axios.get(`/content?id=${uid}`).then((result) => {
        console.log(result.data.results);
        this.email=result.data.results[0].wemail
    })
  },
  methods: {
    bc() {
      let email = this.email;
      // this.axios.get(`/setemail?email=${email}&id=${uid}`).then((result)=>{
      //   console.log(result);
      // })
      this.axios.post(`/setemail`,`email=${email}&uid=${sessionStorage.id}`)
      this.$toast.success('修改成功')
      this.$router.push('/setup');
    }
  },
};
</script>


<style scoped>
.shuru {
  border: none;
  width: 100%;
  height: 30px;
  z-index: 100;
  position: absolute;
  top: 80px;
  padding: 10px;
  font-size: 16px;
}
.bg-all {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(245, 243, 243);
}

.bg-all p {
  position: absolute;
  top: 150px;
  padding: 10px;
  font-size: 14px;
}
span{
  font-size: 16px;
}
.zc-set-img {
  width: 20px;
  height: 20px;
}
</style>