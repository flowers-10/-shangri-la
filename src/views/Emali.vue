<template>
  <div>
    <van-nav-bar title="验证登录邮箱">
      <template #left>
        <router-link to="/set">
          <van-icon name="arrow-left" size="18" />
        </router-link>
      </template>
    </van-nav-bar>
    <hr style="margin-bottom: 20px" />
    <div style="text-align: left; padding:0 15px 0 15px;">
      <span style="font-size: 14px"
        >请点击 “发送” 获取验证码，验证码将发送至 +86 手机号。</span
      >
    </div>
    <hr style="width: 350px; margin-top: 20px" />
    <van-field v-for="(j,i) of arr" :key="i" center clearable label="请输入验证码" :placeholder="`${'+86 '}${j.wemail}`" >
      <template #button>
        <van-button size="small"  style="background-color: #ce8b35; border-radius: 5px; width: 80px" >发送</van-button >
      </template>
    </van-field>
    <hr />
    <button class="btn">下一步</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr:[],
    }
  },
  mounted() {
    this.axios.get('/content').then((result)=>{
      console.log(result);
      this.arr.push(result.data.results[1]);
    })
  },
}
</script>

<style scoped>
  .btn{
  width: 90%;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #3335;
  margin: 25px 0 100px 17px;
  }
</style>


