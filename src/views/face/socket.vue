<template>
  <div class="socket">
    <!-- 头部导航卡 -->
    <div class="nav1">
      <img src="./img/esc.png" alt="" />
      <p>智能客服</p>
    </div>
    <!-- 卡片主体 -->
    <div class="cord">
      <div class="top1">
        <img src="./img/bg1.png" alt="" />
        <p>您好，请问有什么可以帮您?</p>
      </div>
      <div class="top2">
        <img src="./img/bg1.png" alt="" />
        <p></p>
      </div>
    </div>
    <!-- <button @click="btn">点我发送文字</button>
    <div class="show">
      <p v-for="(item,i) in res" :key="i">{{item}}</p>
    </div> -->
  </div>
</template>

<script>
import socketio from "./js/socket.io";
// let socket = socketio("ws://localhost:3000");
export default {
  data() {
    return {
      text: "",
      res: [],
      socket: {},
    };
  },
  methods: {
    btn() {
      this.socket.emit("msg", `${this.text}`);
      this.socket.on("msg1", (data) => {
        this.res.push(data);
        // console.log(1);
        // console.log(data);
      });
      // console.log(socket);
    },
  },
  mounted() {
    this.socket = socketio("ws://localhost:3000");
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.socket .nav1 {
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  align-items: center;
  height: 40px;
  width: 100vw;
  background-color: #ac8642;
}
.socket .nav1 img {
  margin-left: 5px;
  height: 20px;
  width: 20px;
}
.socket .nav1 p {
  margin-left: 118px;
}
.socket .cord {
  padding: 15px 10px;
  height: 70vh;
  margin-top: 40px;
  background-color: red;
}
.socket .top1 {
  display: flex;
  height: 40px;
  align-items: center;
  /* width: 100%; */
  background-color: blue;
}
.socket .top1 img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.socket .top1 p {
  line-height: 40px;
  text-align: center;
  margin-left: 10px;
  height: 100%;
  width: 70%;
  background-color: #fff;
  border-radius: 20px;
}
.socket .top2 {
  margin-top: 20px;
}
.socket .top2 img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.socket .show {
  margin-top: 10px;
  height: 100px;
  width: 200px;
  background-color: blue;
}
</style>
