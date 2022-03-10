<template>
  <div>
    <div class="zc-in">
      <van-nav-bar title="编辑邮寄地址">
        <template #left>
          <router-link to="/phonetwo">
             <img class="zc-set-img" src="/imgs/返回.png" />
          </router-link>
        </template>
      </van-nav-bar>
      <div class="zc-in-in">
        <label>国家</label>
        <input
          id="d1"
          type="text"
          placeholder="请输入国家"
          v-model="gj"
          value=""
        /><br />
        <label>省份</label>
        <input
          id="d2"
          type="text"
          placeholder="请输入省份"
          v-model="sf"
          value=""
        /><br />
        <label>县市</label>
        <input
          id="d3"
          type="text"
          placeholder="请输入县市"
          v-model="xs"
          value=""
        /><br />
        <label>地址</label>
        <input
          id="d4"
          type="text"
          placeholder="小区楼栋"
          v-model="xq"
          value=""
        /><br />
        <button class="btn1" style="color:#fff"> <span @click="up">保 存</span> / <span @click="de">删 除</span></button>
        <!-- <button class="btn2">删 除</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      gj: "",
      sf: "",
      xs: "",
      xq: "",
    };
  },
  computed: {
    ...mapState(["id"]),
  },
  mounted() {
    let uid = sessionStorage.getItem("id");
    this.axios.get(`/seladd?id=${uid}`).then((result) => {
      console.log(result.data.results);
      if (result.data.results.length == 0) {
        return;
      } else {

        this.gj = result.data.results[0].user_street;
        this.sf = result.data.results[0].user_home;
        this.xs = result.data.results[0].user_zone;
        this.xq = result.data.results[0].user_shequ;
      }
    });
  },
  methods: {
    up() {
      let uid = sessionStorage.getItem("id");
      let gj = this.gj;
      let sf = this.sf;
      let xs = this.xs;
      let xq = this.xq;

      this.axios.get(`/seladd?id=${uid}`).then((result) => {
        console.log(result.data.results);
        if (result.data.results.length == 0) {
          this.axios.get(`/inadd?id=${uid}&gjs=${gj}&sfs=${sf}&xss=${xs}&xq=${xq}`);
        } else {
          this.axios
            .get(`/setadd?gjs=${gj}&sfs=${sf}&xss=${xs}&id=${uid}&xq=${xq}`)
            .then((result) => {
              console.log(result);
            });
        }
      });
      this.$toast.success('保存成功')
      this.$router.push('/phonetwo');
    },
    de() {
      let uid = sessionStorage.getItem("id");
      this.axios.get(`deadd?id=${uid}`).then((result) => {
        console.log(result);
      });
      this.gj="";
      this.sf="";
      this.xs="";
      this.xq="";
      this.$toast.success('删除成功')
    },
  },
};
</script>

<style scoped>
.zc-in {
  width: 100%;
  /* height: 1000px; */
  /* background-color: rgb(111 111 111 / 15%); */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

label {
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
}

.zc-in-in {
  padding: 15px;
}

#d1,
#d2,
#d3,
#d4 {
  margin: 10px 0;
}

#d1,
#d2,
#d3,
#d4 {
  margin-left: 15px;
  width: 70%;
  border: none;
  border-radius: 5px;
  padding: 7px;
  background-color: rgb(243, 239, 239);
  font-size: 16px;
}


.btn1 {
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 40px;
  background-image: linear-gradient(90deg,rgb(158, 121, 81),rgb(202, 142, 77));
  display: block;
  margin-top: 20px;
  font-size: 18px;
  /* margin-left: 10px; */
  position: absolute;
  top: 290px;
    right: 62px;
}
.btn2 {
  width: 60%;
  height: 40px;
  border: none;
  border-radius: 40px;
  background-color: #ac8642;
  display: block;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
  color: #fff;
  position: absolute;
  top: 350px;
  right:72px;
}
.zc-set-img{
  width: 20px;
  height: 20px;
}
</style>