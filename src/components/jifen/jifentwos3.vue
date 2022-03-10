<template>
  <div>
    <div class="head">
      <img @click="fan" src="/imgs/jinka.png" alt="" />
      <img class="xuancar" src="/imgs/xuancar.png" alt="" />
    </div>
    <hr />
    <div class="body">
      <div>
        <img src="/imgs/AirPods-Pro.jpg" alt="" />
      </div>
    </div>
    <div class="body_two">
      <div>
        <span class="body_twofont_dianzi">电子产品 · APPLE</span>
      </div>
      <div>
        <span class="body_twofont_canshu">AirPods-Pro</span>
      </div>
      <div>
        <span class="body_twofont_jifen"> 9,400 贵宾金环会奖励积分</span>
      </div>
    </div>
    <hr />

    <div class="body_three">
      <div class="body_three_one">
        <p>供应状况：</p>
        <p>有现货</p>
      </div>
      <div class="body_three_one">
        <p>送货信息：</p>
        <p>含全球运送</p>
      </div>
    </div>
    <hr />

    <div class="foot">
      <router-link to="/jifen">
        <button>立即兑换</button>
      </router-link>
    </div>
    <div class="butt">
      <div class="buttyellow">详情</div>
      <div class="buttblack">
        <p></p>
        <p>详情:</p>
        <p>音讯技术:</p>
        <p>- 主动消噪</p>
        <p>- 通透模式</p>
        <p>- 适应性 EQ</p>
        <p>- 为等压而设的透气系统</p>
        <p>- 特制高位移范围 Apple 驱动器</p>
        <p>- 特制高动态范围扩音器</p>
        <p>&nbsp;</p>
        <p>感应器:</p>
        <p>- 双波束形成咪高风</p>
        <p>- 向内式咪高风</p>
        <p>- 双光学感应器</p>
        <p>- 动态识别加速感应器</p>
        <p>- 话音识别加速感应器</p>
        <p>- 力度感应器</p>
        <p>&nbsp;</p>
        <p>晶片:</p>
        <p>- 系统级封装 H1</p>
        <p>&nbsp;</p>
        <p>规格:</p>
        <p>抗汗及防濺耐水 (IPX4)</p>
        <p>&nbsp;</p>
        <p>AirPods Pro 尺寸及重量 (每边):</p>
        <p>- 高度：30.9 毫米 (1.22 吋)</p>
        <p>- 宽度：21.8 毫米 (0.86 吋)</p>
        <p>- 厚度：24.0 毫米 (0.94 吋)</p>
        <p>- 重量：5.4 克 (0.19 安士)</p>
        <p>&nbsp;</p>
        <p>无线充电盒尺寸及重量:</p>
        <p>- 高度：45.2 毫米 (1.78 吋)</p>
        <p>- 宽度：60.6 毫米 (2.39 吋)</p>
        <p>- 厚度：21.7 毫米 (0.85 吋)</p>
        <p>- 重量：45.6 克 (1.61 安士)</p>
        <p>&nbsp;</p>
        <p>充电盒: 可透过 Qi 认可充电器或 Lightning 接头充电</p>
        <p>&nbsp;</p>
        <p>连接功能: 蓝牙 5.0</p>
        <p>包装内附:</p>
        <p>1. AirPods Pro</p>
        <p>2. 无线充电盒</p>
        <p>3. 矽胶耳塞 (三种尺寸)</p>
        <p>4. Lightning 至 USB-C 连接线</p>
        <p>5. 说明文件</p>
        <p>&nbsp;</p>
        <p>辅助使用:</p>
        <p>
          - 众多辅助使用功能，可帮助身体有障碍人士，尽情发挥全新 AirPods Pro
          的精彩功能。功能包括：即时聆听音讯。
        </p>
        <p>&nbsp;</p>
        <p>系统要求:</p>
        <p>- 运行最新版本 iOS 的 iPhone 及 iPod touch 型号</p>
        <p>- 运行最新版本 iPadOS 的 iPad 型号</p>
        <p>- 运行最新版本 watchOS 的 Apple Watch 型号</p>
        <p>- 运行最新版本 macOS 的 Mac 型号</p>
        <p>- 运行最新版本 tvOS 的 Apple TV 型号</p>
        <p>&nbsp;</p>
        <p>- 奖励备有由领取奖励日计起的1年在香港地区的保养服务。</p>
        <p></p>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.head img {
  height: 8vh;
}
.head .xuancar {
  height: 5vh;
  position: absolute;
  right: 3vw;
  top: 2vh;
}
.body_two {
  margin-bottom: 3vh;
}
.body_two div {
  margin-top: 1vh;
  margin-left: 3vw;
  text-align: center;
}

/* 下面介绍的第一行字 */
.body_twofont_dianzi {
  color: rgb(172, 134, 72);
  font-size: 18px;
}

/* 下面介绍的第二行字 */
.body_twofont_canshu {
  font-size: 28px;
  /* 字体 */
  font-family: "Times New Roman", Times, serif;
}

/* 下面介绍的第三行字 */
.body_twofont_jifen {
  color: rgb(172, 134, 72);
  font-size: 20px;
}

/* 供应状况，送货信息 */
.body_three {
  margin-top: 3vh;
  margin-bottom: 3vh;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 15px;
}
.body_three_one {
  display: flex;
  justify-content: space-between;
}

/* 按钮的div */
.foot {
  text-align: center;
  margin-top: 3vh;
  /* margin-bottom: 0vh; */
}
.foot button {
  border: 1px solid rgb(172, 134, 66);
  background-color: white;
  width: 45%;
  height: 38px;
  color: rgb(172, 134, 66);
}
.buttyellow {
  margin-top: 9vh;
  font-size: 28px;
  color: rgb(172, 134, 66);
  margin-left: 15px;
}
.buttblack {
  font: 20px;
  margin-left: 15px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    fan() {
      //  改地址
      this.$router.push("/jifen");
    },
  },
};
</script>