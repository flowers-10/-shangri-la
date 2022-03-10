<template>
  <div>
    <div class="header">
      <img class="img1" src="/imgs/esc.png" alt="" />
      <span class="headerspan">杭州城中香格里拉</span>
      <img class="img2" src="/imgs/zf.png" alt="">
    </div>
    <div class="body">
      <img class="fimg" src="/imgs/city1.png" alt="" />
      <span class="imgspan">杭州城中香格里拉<br />香礼券商城</span>
    </div>
    <div class="nextbody">
      <div class="nextbodyhd">
        <div style=" margin:auto">
          <div href="#" class="a" @click="showall">默认排序</div>
        </div>

        <div >
          <div href="#" @click="count(a)" class="a1">类别</div>
          <div v-show="show" class="a3">
            <div @click="showkf">客房及套餐</div>
            <hr>
            <div @click="showcy">餐饮</div>
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
        <div class="tc" v-for="(item,i) in num" :key="i">
        <img :src="`${item.img}`" alt="">
        <span class="tcspan">{{item.title}}</span>
        <span>CNY</span>
        <span class="jg">{{item.price}}</span>
        <span class="oldjg">{{item.oldprice}}</span>
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
      show: false, 
      sum: 0,
      // num:10,
      num:[
        {
        title:'杭州城中香格里拉 | 单人自助晚餐 周五至周日',price:318,oldprice:'CNY425',img:"/imgs/f77af4e63511d6860f9db562b7606e5.jpg"
      },
        {
        title:'杭州城中香格里拉 | 单人自助晚餐 周一至周四',price:283,oldprice:'CNY377',img:"/imgs/f77af4e63511d6860f9db562b7606e5.jpg"
      },
      {
        title:'杭州城中香格里拉 11.11 大促|一晚豪华阁游船',price:1388,oldprice:'',img:"/imgs/city1.png"
      },
      {
        title:'杭州城中香格里拉 | 品味周日@城中啤酒餐吧',price:328,oldprice:'',img:"/imgs/37a17662b1d67d985902f82336e5899.jpg"
      },
      ],
      };
  },
  methods: {
    count(a) {
      this.sum++;
      if (this.sum % 2 != 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    showkf(){
      this.num=2;
    },
    showall(){
      this.num=10;
    },
    showcy(){
      this.num=3;
    }
  },
};
</script>
<style scoped>
.header {
  height: 40px;
  width: 100%;
}
.header .img1 {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-left: 5px;
}
.header .img2 {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-left: 320px;
}
.header .zf {
  left: 320px;
  font-weight: 100;
}
.header .headerspan {
  position: absolute;
  left: 50%;
  padding-top: 8px;
  transform: translate(-50%);
}
.body {
  height: 150px;
}
.body .fimg {
  width: 100%;
  height: 160px;
}
.body .imgspan {
  position: relative;
  bottom: 120px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-align: center;
  display: block;
}
.nextbody {
  background-color: white;
  border-radius: 30px 30px 0 0;
  bottom: 15px;
  height: 500px;
  position: relative;
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
  top: 10px;
}
.a1 {
  position: absolute;
  left: 46%;
  top: 10px;
}
.a3 {
  position: absolute;
  z-index: 100;
  left: 37%;
  top: 30px;
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
  top: 10px;
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
  font-size: 20px;
}
.tc .oldjg{
  position: absolute;
  top: 190px;
  right: 60px;
  color: rgb(195, 196, 196);
  text-decoration: line-through;
}
.tc .qg{
  position: absolute;
  left: 100px;
  top:170px;
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
