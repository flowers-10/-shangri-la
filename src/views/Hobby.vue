<template>
  <div>
    <van-nav-bar title="客房安排喜好">
      <template #left>
        <router-link to="/date">
          <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
    </van-nav-bar>
    <hr />

    <p>睡床类别</p>
    <van-radio-group
      v-model="radio"
      direction="horizontal"
      style="margin-left: 20px;font-size:16px;"
      icon-size="15px"
    >
      <van-radio name="特大床">特大床</van-radio>
      <van-radio name="双床">双床</van-radio>
      <van-radio name="无特别喜好">无特别喜好</van-radio>
    </van-radio-group>

    <p>吸烟喜好</p>
    <van-radio-group
      v-model="radio1"
      direction="horizontal"
      style="margin-left: 20px;font-size:16px;"
      icon-size="15px"
    >
      <van-radio name="无烟客房">无烟客房</van-radio>
      <van-radio name="吸烟客房">吸烟客房</van-radio>
      <van-radio name="无特别喜好">无特别喜好</van-radio>
    </van-radio-group>

    <p>睡枕类型</p>
    <van-radio-group
      v-model="radio2"
      direction="horizontal"
      style="margin-left: 20px;font-size:16px;"
      icon-size="15px"
    >
      <van-radio name="羽毛枕">羽毛枕</van-radio>
      <van-radio name="泡沫枕">泡沫枕</van-radio>
    </van-radio-group>

    <button class="btn" @click="set">保存</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      radio: "",
      radio1: "",
      radio2: "",
    };
  },
  computed: {
    ...mapState(["sex", "username", "birthday"]),
  },

  mounted() {
    let uid = sessionStorage.getItem('id');
    this.axios.get(`/hobby?id=${uid}`).then((result) => {
      console.log(result.data.results);
      this.radio = result.data.results[0].sleep_bed;
      this.radio1 = result.data.results[0].sleep_smoke;
      this.radio2 = result.data.results[0].sleep_style;
    });
  },

  methods: {
    set() {
      let sid = sessionStorage.getItem('id');
      let radio=this.radio
      let radio1=this.radio1
      let radio2=this.radio2
      this.axios.get(`/sethobby?radios=${radio}&radios1=${radio1}&radios2=${radio2}&id=${sid}`).then((result) => {
        console.log(result.data);
        // this.radio = result.data.results[0].sleep_bed;
        // this.radio1 = result.data.results[0].sleep_smoke;
        // this.radio2 = result.data.results[0].sleep_style;
      });
      this.$toast.success('保存成功')
      this.$router.push('/date');
    },
  },

};
</script>

<style scoped>
.btn {
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 30px;
  /* background-image: linear-gradient(90deg,#f09b2c,#FFD194); */
  background-color: rgb(202, 151, 96);
  margin: 70px 0  0 60px;
  color: #fff;
  font-size: 20px;
}
p{
  font-size: 18px; 
  margin: 20px 0 20px 20px
}
.zc-set-img{
  width: 20px;
  height: 20px;
}
</style>