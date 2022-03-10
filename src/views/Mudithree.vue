<template>
  <div>
    <div class="alldiv">
      <div class="allbtn">
        <!-- <div class="mudithree_head">
          <div class="mudithree_head_one">
            <span @click="span" style="color: rgb(191, 155, 69)">取消</span>
          </div>
          <div class="mudithree_head_two">
            <span>
              <span>房间</span>
            </span>
          </div>
        </div> -->
        <van-nav-bar
        class="nav-barbar"
          title="房间"
          left-text="取消"
          left-arrow
          @click-left="onClickLeft"
        />
        <div class="ggggggggg"></div>
        <div class="mudithree_body">
          <div class="mudithree_body_one">
            <div class="body_fontsize">房间数量</div>
            <!-- 交互value 输入框将限制只能输入整数 圆角 禁用输入 输入框大小  圆角大小 数字大小限制-->
            <van-stepper
              v-model="fangjian"
              integer
              theme="round"
              disable-input
              input-width="40px"
              button-size="32px"
              min="1"
              max="5"
            />
          </div>
          <div class="ggggggggg"></div>

          <div class="mudithree_body_two">
            <div class="body_fontsize">成人</div>
            <van-stepper
              v-model="chengren"
              integer
              theme="round"
              disable-input
              input-width="40px"
              button-size="32px"
              min="1"
              max="3"
            />
          </div>

          <div class="mudithree_body_two">
            <div class="body_fontsize">儿童</div>
            <van-stepper
              v-model="ertong"
              integer
              theme="round"
              disable-input
              input-width="40px"
              button-size="32px"
              min="0"
              max="2"
            />
          </div>
        </div>

        <div class="mudithree_footer">
          <button @click="btn">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.alldiv {
  height: 100rem;
  background-color: rgb(244, 244, 244);
}
.allbtn {
  background-color: white;
}
/* 顶部栏 */
/* .mudithree_head {
  text-align: center;
  height: 10%;
  margin: 5px;
  padding: 3px;
} */
.nav-barbar>>>span{
  color:rgb(191, 155, 69) ;
}
.nav-barbar>>>i{
  color:rgb(191, 155, 69) ;
}
/* 房间数量/成人/儿童 字体定位和大小 */
.body_fontsize {
  position: relative;
  top: 8px;
}
/* 顶部  取消 */
/* .mudithree_head_one {
  position: absolute;
  font-size: 15px;
  top: 11px;
} */
/* 顶部  房间 */
/* .mudithree_head_two {
  font-size: 18px;
} */

.mudithree_body_one {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin: 5px;
  padding-bottom: 5px;
}
.mudithree_body_one>>>button{
  background-color: rgb(191, 155, 69) ;
  /* color: rgb(191, 155, 69) ;; */
  border: 1px solid rgb(191, 155, 69) ;;
}
.mudithree_body_two {
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  margin: 6px;
  padding-bottom: 6px;
}
.mudithree_body_two>>>button{
  background-color: rgb(191, 155, 69) ;
  /* color: rgb(191, 155, 69) ;; */
  border: 1px solid rgb(191, 155, 69) ;;
}
.ggggggggg {
  height: 1rem;
  background-color: rgb(244, 244, 244);
}
.mudithree_footer {
  position: absolute;
  left: 1%;
  top: 90%;
  width: 98%;
  height: 50px;
}
/* 底部按钮   */
.mudithree_footer button {
  width: 100%;
  height: 90%;
  background-color: rgb(191, 155, 69);
  border: 0;
  color: white;
  font-size: 18px;
  border-radius: 6px;
}
</style>

<script>
export default {
  data() {
    return {
      // mudithree:{
      fangjian: "",
      chengren: "",
      ertong: "",
      // }
      // chengren1:""
    };
  },
  methods: {
    // span() {
    //   this.$router.push("/destination");
    // },
    onClickLeft() {
      this.$router.push("/destination");
    },
    btn() {
      // this.$router.push({name:'destination',paramas:{chengren1:this.chengren}});
      // console.log("成功传一个"+this.chengren1);
      // 传VUEX
      this.$store.commit("loginfangjian", this.fangjian);
      this.$store.commit("loginchengren", this.chengren);
      this.$store.commit("loginertong", this.ertong);

      // 传内存
      sessionStorage.setItem("isfangjian", true);
      sessionStorage.setItem("fangjian", this.fangjian);
      sessionStorage.setItem("chengren", this.chengren);
      sessionStorage.setItem("ertong", this.ertong);

      // $store.state.ertong
      this.$router.push("/destination");
    },
  },
};
</script>