<template>
  <div>
    <!-- 顶部搜索框（尝试监听） -->
    <div class="mudione_head">
      <form action="/">
        <van-search show-action placeholder="下一个目的地" @cancel="onCancel" />
      </form>
    </div>
    <!-- 热门搜索 顶栏搜索跳转，点击地址跳转回去 -->
    <div>
      <ul>
        <!-- <li class="ant-list-item group-title">
          <div class="zimu"></div>
        </li> -->
        <!-- <div class="headgood"></div> -->
        <li class="ant-list-item" v-for="(a, b) of arr" :key="b">
          <div class="citylist-item">
            热门目的地
            <span class="citylist-item-text" @click="show(b, arr[b])">
              <van-cell-group>
                <van-field v-model="arr[b]" readonly />
              </van-cell-group>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/*顶部搜索框（无法搜索的！！） */
.mudione_head {
  margin-top: 5px;
  margin-bottom: 7px;
}
/* .headgood{
  padding-top: 0px;
} */

.citylist-item {
  height: 30px;
  width: 100%;
  font-size: 15px;
  border: 1px solid rgba(235, 220, 220, 0.5);
  padding: 6px;
}
.citylist-item-text {
  font-size: 13px;
  /* margin-left: 5px; */
}
/* 字母框 */
.zimu {
  font-size: 12px;
  margin-top: 5px;
  margin-left: 22px;
  font-weight: 800px;
}

/* 字母索引下面的城市字体span框 */
.citylist-item span {
  margin-left: 15px;
}
/* 字母部分总div */
.good {
  margin-top: 40px;
  height: 2px;
}
</style>

<script>
import { mapMutations } from "vuex";
import { Toast } from "vant";
import { Field } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      arr: [
        "伦敦, 英国",
        "北京, 中国大陆",
        "上海, 中国大陆",
        "香港, 香港特别行政区",
        "杭州, 中国大陆",
        "广州, 中国大陆",
        "北海, 中国大陆",
        "包头, 中国大陆",
        "巴黎, 法国",
        "班加罗尔, 印度",
        "槟城, 马来西亚",
        "长春, 中国大陆",
        "常州, 中国大陆",
        "成都, 中国大陆",
        "长滩岛, 菲律宾",
        "迪拜, 阿联酋", 
        "多伦多, 加拿大",
        "大连, 中国大陆",
        "东京, 日本",
        "福州, 中国大陆",
        "广州,中国大陆",
        "哈尔滨, 中国大陆",
        "济南,中国大陆", 
        "吉隆坡,马来西亚",
        "凯恩斯",
        "澳大利亚",
        "拉萨, 中国大陆",
        "伦敦, 英国",
        "满洲里, 中国大陆",
        "曼谷, 泰国",
        "南昌, 中国大陆",
        "宁波, 中国大陆",
        "南京, 中国大陆",
        "莆田, 中国大陆",
        "秦皇岛, 中国大陆",
        "青岛, 中国大陆",
        "清迈, 泰国",
        "柔佛, 马来西亚",
        "深圳, 中国大陆",
        "苏州, 中国大陆",
        "三亚, 中国大陆",
        "天津, 中国大陆",
        "唐山, 中国大陆",
        "台南, 台湾",
        "扬州, 中国大陆",
        "义乌, 中国大陆",
        "舟山, 中国大陆",
      ]
    }
  },
  methods: {
    ...mapMutations(["login8"]),
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
      this.$router.push("/destination");
    },
    show(i, j) {
      sessionStorage.city = i;
      sessionStorage.name = j;
      this.$router.push("/destination");
    },
    goodgood() {
      this.$router.push("/destination");
    },
  },
};
</script>