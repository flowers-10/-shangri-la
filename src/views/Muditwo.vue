<template>
  <div>
    <!-- <van-cell :value="date" class="muditwo_one" @click="show = true"> -->
    <!-- <div class="muditwo_one_one" > -->
    <!-- <div > -->
    <!-- <span>选择日期</span> -->

    <!-- </div> -->
    <!-- </div> -->
    <!-- </van-cell> -->
    <div class="good" @click="gogo">
      
    </div>
    <van-calendar
      class="muditwo_riqi"
      v-model="show"
      type="range"
      @confirm="onConfirm"
      color="#BF9B45"
      confirm-text="确定选择"
      confirm-disabled-text="请选择结束时间"
      @close="close"
      :round="false"
    >
    </van-calendar>
  </div>
</template>
<style scoped>
.good{
  width: 100%;
  height: 100%;
  position: absolute;
}

.muditwo_one {
  /* text-align: center; */
  /* position: fixed; */
  /* z-index: 8; */
  background-color: rgb(236, 223, 189);
  height: 150px;
  width: 100%;
  font-size: 40px;
}
.muditwo_one_one {
  text-align: center;
  font-size: 25px;
}
.muditwo_riqi {
  height: 680px !important;
}
</style>
<script>
export default {
  data() {
    return {
      date: "",
      show: true,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    close(){
      this.$router.push('/destination')
    },
    onConfirm(date) {
      const [start, end] = date;
      // this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      // 传到内存——时间和状态
      sessionStorage.setItem("date", this.date);
      sessionStorage.setItem("istime", true);
      this.$router.push("/destination");
      // 传到VUEX
      this.$store.commit('logindate',this.date);

    },
    gogo(){
      this.$router.push("/destination");

    }
  },  
};
</script>