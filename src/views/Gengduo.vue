<template>
  <div>
    <van-cell id="a" title="更多" center icon="arrow-left"> </van-cell>
    <van-cell title="语音" is-link value="简体中文" icon="chat-o" />
    <van-cell title="货币" is-link value="CNY" icon="refund-o" />
    <van-cell title="清除缓存" icon="delete-o" />
    <van-cell
      title="允许通知"
      label="手机办理入住/退房、奖励兑换等"
      slot="right"
      icon="volume-o"
    >
      <van-switch
        v-model="checked"
        active-color="rgb(175, 136, 6)"
        inactive-color="#dcdee0"
      />
    </van-cell>

    <div class="van-hairline--top-bottom"></div>
    <van-cell title="投屏" is-link icon="tv-o" />
    <div class="van-hairline--top-bottom"></div>
    <br />

    <van-cell title="联系我们" is-link icon="phone-o" />
    <van-cell title="反馈建议" is-link icon="envelop-o" />
    <div class="van-hairline--top-bottom"></div>
    <br />
    <van-cell title="条款与细则" is-link icon="orders-o" />
    <van-cell title="隐私保障政策" is-link icon="description" />
    <van-cell title="Cookies" is-link icon="eye-o" />
    <div class="van-hairline--top-bottom"></div>

    <van-cell title="关于" is-link icon="info-o" />
    <div class="van-hairline--top-bottom"></div>
    <br />


  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      active:1
    };
  },
};
</script>



<style scoped>
.van-switch {
  font-size: 18px;
}
#a {
  text-align: center;
}
</style>>


