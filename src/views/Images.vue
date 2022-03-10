<template>
  <div>
    <van-nav-bar title="更换头像" style="position:fixed;top:0;width:100%;background-color:#FFF;">
      <template #left>
        <router-link to="/add">
         <img class="zc-set-img" src="/imgs/返回.png" />
        </router-link>
      </template>
      <template #right>
        <!-- <router-link to="/add"> -->
        <span @click="bc">保存</span>
        <!-- </router-link> -->
      </template>
    </van-nav-bar>
    <div class="tx" style="background-color:yellow;">
      <img :src="arr" alt="" />
    </div>
    <div class="txb">
      <van-image
        v-for="(item, i) of imglist"
        :key="i"
        round
        width="30vw"
        height="30vw"
        :src="item.img"
        style="margin: 2.5vw 0 0 2.5vw"
        @click="set(item.img)"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      imglist: [
        { img: ("/imgs/tbg1.jpg") },
        { img: ("/imgs/tbg2.jpg") },
        { img: ("/imgs/tbg3.jpg") },
        { img: ("/imgs/tbg4.jpg") },
        { img: ("/imgs/tbg5.jpg") },
        { img: ("/imgs/tbg6.jpg") },
        { img: ("/imgs/tbg7.jpg") },
        { img: ("/imgs/tbg8.jpg") },
        { img: ("/imgs/tbg9.jpg") },
        { img: ("/imgs/tbg10.jpg") },
        { img: ("/imgs/tbg11.jpg") },
        { img: ("/imgs/tbg12.jpg") },

      ],
      arr: ("/imgs/tbg2.jpg"),
    };
  },
  computed:{
    ...mapState["id"]
  },
  methods: {
    set(i) {
      this.arr=i;
      console.log(i);
      console.log(this.imglist)
    },
    bc(){
      let uid = sessionStorage.getItem("id") || "";
      let lj = this.arr;
      console.log(this.arr)
      this.axios.get(`/setimg?lj=${lj}&id=${uid}`).then((result)=>{
        console.log(result);
        
      })
      
      this.$toast.success('保存成功')
      // this.$router.push('/add');
      // this.$router.push("/add")
    },
  },
};
</script>

<style scoped>
.tx,
.tx1 {
  /* background-color: red; */
  width: 100px;
  height: 100px;
  margin: 100px auto 50px auto;
  border-radius: 100px;
  border: 2px solid black;
  padding: 2px;
}
.tx img,
.tx1 img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
.txb {
  width: 100%;
  height: 500px;
  background-color: gainsboro;
}
.zc-set-img {
  width: 20px;
  height: 20px;
}
</style>