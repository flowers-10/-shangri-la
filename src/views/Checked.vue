<template>
  <div class="wrapper">
    <div class="divone">
      <div>
        <form action="/">
          <van-search
            v-model="searchMsg"
            placeholder="下一个目的地"
            @input="handleSearch(searchMsg)"
            class="css"
          />
        </form>
      </div>

    </div>

    <div v-if="show1">
      <ul>
        <li class="ant-list-item" v-for="(a, b) of arr" :key="b">
            <span class="citylist-item-text" @click="show(b, arr[b])">
              <van-cell-group>
                <van-field v-model="arr[b]" readonly />
              </van-cell-group>
            </span>
        </li>
      </ul>
    </div>


    <van-cell-group v-model="checkList" v-else  >
      <div v-for="(item, index) in filterMsg" :key="index">
        <div :label="filterMsg[index]" @click="confirm(filterMsg[index],index)" class="city">
          <img src="/imgs/city.png" alt="" class="d1" />
          <p class="d3">{{ filterMsg[index] }}</p>
          <!-- <hr /> -->
        </div>
      </div>
    </van-cell-group>



  </div>
</template> 
<script>
import py from "pinyin";
export default {
  data() {
    return {
      show1:'true',
      searchMsg: "",
      checkList: [],
      filterMsg: [],
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
      ],
    };
  },
  mounted() {
    this.allMsg = [
        "伦敦",
        "北京",
        "上海",
        "香港",
        "杭州",
        "广州",
        "北海",
        "包头",
        "巴黎",
        "班加罗尔",
        "槟城",
        "长春",
        "常州",
        "成都",
        "长滩岛",
        "迪拜", 
        "多伦多",
        "大连",
        "东京",
        "福州",
        "哈尔滨",
        "济南", 
        "吉隆坡",
        "凯恩斯",
        "澳大利亚",
        "拉萨",
        "伦敦",
        "满洲里",
        "曼谷",
        "南昌",
        "宁波",
        "南京",
        "莆田",
        "秦皇岛",
        "青岛",
        "清迈",
        "柔佛",
        "深圳",
        "苏州",
        "三亚",
        "天津",
        "唐山",
        "台南",
        "扬州",
        "义乌",
        "舟山",
      ];
  },
  methods: {
    confirm(i,j) {
      this.searchMsg = i;
      sessionStorage.name = i;
      if(sessionStorage.name == '杭州'|| sessionStorage.name == '上海'){
        this.$router.push('/destination');
      }else{
        this.$router.push('/destination');
      }
    },
    show(i,j){
      sessionStorage.city = i;
      sessionStorage.name = j;
      this.$router.push("/destination");
    },
    handleSearch(queryString) {
      let queryStringArr = queryString.split("");
      let str = "(.*?)";
      let regStr = str + queryStringArr.join(str) + str;
      let reg = RegExp(regStr, "i");
      this.filterMsg = [];
      this.allMsg.map((item) => {
        // 获取汉字的拼音，并进行扁平化
        let pyArr = py(item, {
          style: py.STYLE_NORMAL, // 设置拼音风格设置为普通风格（不带声调），
        }).flat();
        let pyStr = pyArr.join("");
        if (reg.test(pyStr)) {
          this.filterMsg.push(item);
          this.show1 = false;
        }
      });
    },
  },
};
</script>
<style  scoped>
.divone {
  display: flex;
  justify-content: space-between;
}

.d1 {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}

.divimg img {
  width: 10%;
  position: absolute;
  left: 280px;
  top: 0px;
}
el-input {
  border-radius: 50%;
}
.city{
  margin-top: 10px;
  margin-left: 15px;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.css{
  width: 300px
}
.city>p{
  margin-top: 5px;
  margin-left: 5px;
}

</style>