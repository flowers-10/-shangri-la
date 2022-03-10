<template>
  <div style="background-color: rgb(153 153 153 / 10%)">
    <van-nav-bar title="修改密码">
      <template #left>
        <router-link to="/setup">
          <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
    </van-nav-bar>
    <van-notice-bar mode="closeable"
      class="bar"
      >为了提高账户的安全性，修改密码时请注意保周围环境！</van-notice-bar
    ><br />

    <!-- <van-cell-group>
      <van-field required label="新密码" placeholder="请输入新密码"  error-message="1" style="border-bottom: 1px solid black;" />
      <van-field required label="再次输入密码" placeholder="请输入新密码" error-message="两次密码不行同" style="border-bottom: 1px solid black;" />
    </van-cell-group> -->

    <van-form validate-first @failed="onFailed">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="请输入新密码"
        :rules="[{ pattern }]"
      />
    </van-form>
    <van-form validate-first @failed="onFailed" style="margin-top:10px;">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value2"
        name="pattern"
        placeholder="请确保两次输入密码一致"
        :rules="[{ pattern }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          @click="login" class="button">提交</van-button
        >
      </div>
    </van-form>

    <p class="sp" v-for="(j, i) of arr" :key="i">{{ arr[i] }}</p>
  </div>
</template>


import { Toast } from 'vant';
<script>
export default {
  data() {
    return {
      id:sessionStorage.getItem('id')||'',
      arr: [
        "至少由六个字符或数字组成",
      ],
      value1: "",
      value2: "",
      pattern: /\d{6,}/,
      pattern: /\d{6,}/
    };
  },
  methods:{
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    login(){
      if(this.value2 == "" || this.value1 == ""){
        alert('密码不能为空');
      }else if(!/^\d{6,}$/.test(this.value2)){
        alert('密码格式不正确');
      }else if(this.value1 !== this.value2){
        alert('两次密码不一致');
      }else{
        this.axios.post('/update',`wid=${this.id}&wpwd=${this.value2}`).then(
          function(result){
            alert(result.data.message);
          }
        )
      }
    }
  }
}
</script>

<style scoped>
van-button {
  background-color: rgba(111, 111, 111, 0.5);
}
.sp::before {
  content: "注意项:";
  padding: 15px;
}
.sp {
  font-size: 13px;
}
.btn-p {
  width: 100%;
}
.btn {
  width: 90%;
  height: 40px;
  border: none;
  border-radius: 3px;
  background-color: #ac8642;
  margin: 40px 0 100px 17px;
}
.zc-set-img {
  width: 20px;
  height: 20px;
  vertical-align: middle;;
}
.button{
  background-color: #ac8642;
}

</style>