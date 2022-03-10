<template>
  <div>
    <van-tabbar v-model="active" @change="onChange" route fixed>
      <van-tabbar-item name="home" icon="home-o" to="/hotel">酒店</van-tabbar-item>
      <van-tabbar-item name="search" icon="search"  to="/purchase">预订</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o"
       to="/add">我的账户</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" to="/gengduo">更多</van-tabbar-item>
    </van-tabbar>
    <router-view/>

  </div>
</template>
<script>

export default {
  data() {
    return {
      active: "home",
    };
  },
  methods:{
    onChange(index){
      this.active = index;
      
    }
  }
};

</script>

 