<template>
  <div>
    <!-- 头部 -->
    <div class="tou">
      <img class="back" src="/imgs/返回.png" alt="">
      <span>香礼券商城</span>
      <img class="share" src="/imgs/分享.png" alt="">
    </div>
    <!-- 下拉菜单 -->
    <div>
      <div class="dropDown">
        <!-- 定位 -->
        <div class="location">
          <img src="/imgs/地标.png" alt="">
          <p>杭州</p>
          <img src="/imgs/下拉.png" alt="">
        </div>
        <!-- 酒店 -->
        <div class="hotel">
          <p>2家酒店</p>
          <img src="/imgs/金下拉三角.png" alt="">
        </div>
      </div>
      <!-- 搜索框 -->
      <div class="input">
        <img src="/imgs/搜索.png" alt="">
        <input type="text" placeholder="请输入关键词">
      </div>
      <!-- 大图 -->
      <div class="bimg">
        <div>
          <img src="/imgs/商城大图.jpg" alt="">
        </div>
      </div>
      
      
    </div>
    <!-- 分割条 -->
      <div class="cut"></div>
      <!-- 内容部分 -->
    <div class="nextbody">
      <div class="nextbodyhd">
        <div style=" margin:auto">
          <div href="#" class="a">默认排序</div>
        </div>

        <div >
          <div href="#" @click="show(a)" class="a1">类别
            <img src="/imgs/黑下拉三角.png" alt="">
          </div>
          <div v-show="a" class="a3">
            <div @click="showkf">客房及套餐</div>
            <hr>
            <div>餐饮</div>
            <hr>
            <div>康体</div>
            <hr>
            <div>水疗</div>
          </div>
        </div>
        <div>
          <div href="#"  class="a2">价格</div>
        </div>
      </div>
      <hr class="hr1">
      <div class="zzwc">
        <div class="tc" v-for="(i) in 10" :key="i">
        <img src="/imgs/详情.jpg" alt="">
        <span class="tcspan">杭州城中香格里拉 |单人&nbsp;自助晚餐 周五至周日</span>
        <span>CNY</span>
        <span class="jg">318</span>
        <span class="oldjg">CNY425</span>
        <button class="qg">抢购</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { 
      a: false, 
      sum: 0,
      showkf:true 
      };
  },
  methods: {
    show(a) {
      this.sum++;
      if (this.sum % 2 != 0) {
        this.a = true;
      } else {
        this.a = false;
      }
    },
    showkf(){
      
    }
  },
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.tou{
  position: fixed;
  height: 40px;
  line-height: 40px;
  position: relative;
  border-bottom: 1px solid rgb(206, 204, 204);
}
.tou span{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.tou img{
  margin: 0;
}
.back{
  width: 24px;
  height: 24px;
  position: relative;
  top: 8px;
  left: 8px;
}

.share{
  float: right;
  width: 24px;
  height: 24px;
  position: relative;
  top: 8px;
  right: 8px;
}
.dropDown{
  display: flex;
  margin-top: 8px;
  margin-bottom: 10px;
}
.location{
  float: left;
  width:80px;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
}
.location :first-child{
  position: relative;
  top: 4px;
  width: 15px;
  height: 15px;
}
.location img{
  height: 20px;
  width: 20px;
}
.hotel{
  width: 25%;
  position: absolute;
  display: flex;
  float: right;
  right: 0px;
}
.hotel img{
  height: 20px;
  width: 20px;
  position: relative;
  top: 2px;
  left: 5px;
}
.input{
  width: 95%;
  height: 40px;
  position: relative;
  background-color: #F7F7F7;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 20px;
}
.input img{
  width: 24px;
  position: absolute;
  top:8px;
  left:10px
}
.input input{
  width: 85%;
  height: 100%;
  outline: none;
  background-color: transparent;
  border: 0;
  padding-left: 40px;
}
.bimg{
  width: 100%;
  height: 120px;
  margin-bottom: 15px;
}
.bimg div{
  width: 95%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin: 0 auto;
}
.bimg div img{
  width: 100%;
  margin-top: -20px;
}
.cut{
  width: 100%;
  background-color: #F4F4F4;
  height: 15px;
}
.nextbodyhd {
  height: 40px;
  border-radius: 30px 30px 0 0;
}
hr {
  background-color: rgb(243, 239, 239);
  top: 30px;
  width: 80%;
  margin-left: 10px;
}
.a {
  position: absolute;
  left: 10%;
  top: 45%;
  color: #696969;
}
.a1 img{
  position: absolute;
  width: 15px;
  top: 4px;
}
.a1 {
  position: absolute;
  left: 46%;
  top: 45%;
  color: #696969;
}
.a3 {
  position: absolute;
  z-index: 100;
  left: 37%;
  top: 49%;
  line-height: 30px;
  text-align: center;
  border: 1px solid rgb(245, 243, 243);
  border-radius: 5px;
  width: 100px;
  background-color: rgb(255, 255, 255);
}
.a2 {
  position: absolute;
  left: 80%;
  top: 45%;
  color: #696969;
}
element.style {
width: 0;
}
.hr1{
  width: 373px;
  margin: 0; 
  height: 2px;
  border: 1px solid rgb(252, 250, 250);
}
.zzwc{
  display: flex;
  flex-wrap: wrap;
}
.zzwc img{
  width: 160px;
  border-radius:  5px 5px 0px 0px;
}
.tc{
  position: relative;
  height: 220px;
  width: 160px;
  margin-top: 10px;
  margin-left: 14px;
  margin-right: 12px;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px rgb(204, 203, 203);
}
.tc span{
  position: relative;
  top: 10px;
  left: 5px;
  font-size: 16px;
  color: rgb(231, 164, 40);
}
.tc .jg{
  font-size: 24px;
}
.tc .oldjg{
  position: absolute;
  top: 190px;
  right: 60px;
  color: rgb(195, 196, 196);
  text-decoration: line-through;
}
.tc .qg{
  position: relative;
  left: 25px;
  top:20px;
  width: 50px;
  height: 30px;
  color: white;
  font-size: 16px;
  background-color: rgb(161, 117, 36);
  border: none;
  border-radius: 5px;
}
.tc .tcspan{
  font-size: 14px;
  color: black;
  font-weight: bold;
  position: relative;
  top: 0;
}

</style>