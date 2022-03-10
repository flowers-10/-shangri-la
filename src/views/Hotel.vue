<template>
  <div>
    <div class="alldiv">
      <!--置顶个人图标 logo图片和button框  -->
      <div class="logo">
        <!-- 置顶个人图标 -->
        <div class="myimg" v-if="id == ''">
          <!-- !!!!!!这个路由改登录注册界面跳转!!!!! -->
          <div class="name">
            <router-link to="/login"><span>登录 /</span></router-link>
            <router-link to="/reg"><span> 注册</span></router-link>
          </div>
          <img src="/imgs/myimg.png" alt="" />
        </div>
        <div class="myimg" v-else>
          <div>
            <div class="name">
              <router-link to="/login"
                ><span>{{ username }} /</span></router-link
              >
              <span @click="relogin">注销</span>
            </div>
          </div>
          <img src="/imgs/myimg.png" alt="" />
        </div>
        <!--:style="{ height: logoh }"-->
        <img class="logoimg" src="/imgs/logo.png" alt="" />
        <!-- 下一个目的地button -->
        <router-link to="/destination">
          <van-button
            style="background-color: rgba(220, 220, 220, 0.5)"
            class="destination_btn"
            type="default"
          >
            <!-- <img src="/imgs/sousuobtn.png" />
          <img src="/imgs/mudidi.png" alt="" /> -->
            <div class="gofont">
              <!-- <van-icon name="search" size="2rem" class="gofont1" /> -->
              <img class="sousuosousuo" src="/imgs/sousuobtn.png" alt="" />
              <div class="gofont_mudi">下一个目的地</div>
            </div>
          </van-button>
        </router-link>
        <!-- 疫情通知 -->
        <div style="width: 95%; margin: auto; margin-top: 10px">
          <van-notice-bar
            class="hotelfontsize"
            left-icon="volume-o"
            text="鉴于新冠肺炎疫情的最新发展,所有于2020年4月1日之前......"
            @click="show"
          />
          <van-popup v-model="visible" class="hotelpopup"
            >鉴于新冠肺炎疫情的最新发展，所有于2020年4月1日之前完成的预定，原定入住日期在2021年3月31日前，且不晚于入住时期前24小时进行取消的订单，我们将提供免费取消服务*。此服务不限预定渠道，亦适用于提前预定优惠订单。其他预定则适用于我们常规的取消政策，请参考相关条款与细则。如需帮助，请联系我们。团队及活动预定的取消事宜将根据实际情况单独处理，请联系您在当地的销售负责人。*东京香格里拉大酒店的订单不适用以上取消政策，请您发邮件至tokyo@shangri-la.com，我们将协助您处理订单事宜。温馨提示：为配合新冠肺炎的疫情防控，请参考当地政府关于安全隔离要求及期限的最新公告。
            <hr />
            <div class="hotelpopupdiv" @click="hide">
              <span class="hotelpopupspan">好</span>
            </div>
          </van-popup>
        </div>
      </div>

      <!-- 轮播图 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="/imgs/beijing7.png" alt="" />
          <!-- <a href="">连接一号</a> -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="/imgs/beijing6.png" alt="" />
          <!-- <a href="">连接二号</a> -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="/imgs/beijing10.png" alt="" />
          <!-- <a href="">连接三号</a> -->
        </van-swipe-item>
        <van-swipe-item>
          <img src="/imgs/beijing5.png" alt="" />
          <!-- <a href="">连接四号</a> -->
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<style scoped>
/* 最外层大alldiv */
.alldiv {
  position: relative;
  height: 50px;
}

/* logo总div */
.logo {
  width: 100%;
  text-align: center;
  position: fixed;
}
/* 个人信息栏图标 */
.myimg {
  /* height: 15px; */
  /* text-align: right; */
  margin-top: 5px;
  margin-right: 8px;
  display: flex;
  position: absolute;
  right: 0;
  top: 5px;
}
.myimg span {
  font-size: 15px;
  color: white;
}
.myimg img {
  height: 25px;
  margin-top: 10px;
  margin-right: 8px;
}
.name {
  width: 100px;
  position: absolute;
  right: 30px;
  top: 12px;
  font-size: 14px;
}

.gofont {
  display: flex;
}
.gofont1 {
  position: absolute;
  left: 0;
  margin-left: 10px;
  margin-top: -7px;
}
.sousuosousuo {
  position: absolute;
  left: 20px;
  bottom: 2px;
}
.gofont1 img {
  height: 10%;
}
.gofont_mudi {
  font-size: 17px;
}
/* logo图片 */
.logoimg {
  margin-top: 22%;
  margin-bottom: 17%;
  width: 50%;
}

/* button的框属性 */
.destination_btn {
  width: 95%;
  border: 0;
  border-radius: 5px;
}
.destination_btn img {
  /* margin-left: auto; */
  height: 40px;
}

/* 轮播图的属性 */
.my-swipe {
  z-index: -10;
}
/* 把轮播的图片宽度100% 填满 防止图片滑动不饱满 */
.my-swipe img {
  width: 100vw;
  /* height: 95vh; */
  height: 98vh;
}
/* 疫情通知 */
.hotelpopup {
  border-radius: 5px;
  width: 60%;
  height: 50%;
  padding: 20px;
  font-size: 16px;
}
.hotelfontsize {
  font-size: 12px;
  height: 25px;
}
.hotelpopupdiv {
  width: 100%;
  height: 5%;
  text-align: center;
}
.hotelpopupspan {
  color: rgb(163, 146, 49);
}
</style>

<script>
import { mapActions, mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: sessionStorage.getItem("id") || "",
      visible: false,
    };
  },
  computed: {
    ...mapState([
      "username",
      "grade",
      "userphone",
      "days",
      "number",
      "price",
      "sex",
      "score",
    ]),
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    ...mapMutations(["login1"]),
    ...mapActions(["vlogin"]),
    relogin() {
      this.id = "";
      // sessionStorage.id = "";
      sessionStorage.clear();
    },
  },
  mounted() {
    this.vlogin(sessionStorage.id);
    // console.log('执行')
  },
};
</script>


