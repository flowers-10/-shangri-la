<template>
  <div>
    <div class="header">
      <img class="img1" src="/imgs/esc.png" alt="" />
      <span class="headerspan">香旅心选</span>
      <img class="img2" src="/imgs/zf.png" alt="" />
    </div>
    <a href="" id="tz1"></a>
    <div class="body">
      <img
        class="bodyimg"
        src="/imgs/902bf5cd98c5c801f236164563808f7.jpg"
        alt=""
      />
    </div>

    <van-sticky offset-top="65px">
      <div class="divbtn">
        <button
          class="btn1"
          @click="buttonClick(1)"
          :class="buttonIndex == 1 ? 'bgcolor' : ''"
        >
          <a href="#tz1" id="jxfq">精选房券</a>
        </button>
        <button
          class="btn2"
          @click="buttonClick(2)"
          :class="buttonIndex == 2 ? 'bgcolor' : ''"
        >
          <a href="#tz2" id="ttms">饕餮美食</a>
        </button>
      </div>
    </van-sticky>

    <div class="nextbody">
      <div class="nextbodyxq" v-for="(item, i) in num" :key="i">
        <img class="nextbodyimg1" :src="`${item.img}`" alt="" />
        <p class="nextbodyp1">{{ item.p1 }}</p>
        <p class="nextbodyp2">{{ item.cjfx }}</p>
        <p class="nextbodyp3">本优惠包括:</p>
        <p class="nextbodyp4">{{ item.p2 }}</p>
        <p class="nextbodyp5">{{ item.p3 }}</p>
        <p class="nextbodyp6">{{ item.p4 }}</p>
        <p class="nextbodyp7">{{ item.p6 }}</p>
        <span class="nextbodyspan1"
          >CNY<span class="nextbodyspan2">{{ item.span1 }}</span
          ><span class="nextbodyspan3">起</span></span
        >
        <span class="nextbodyspan4">{{ item.span2 }}</span>
        <button class="nextbodybtn">立即抢购</button>
        <a href="" :id="`${item.tz2}`"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonIndex: 1,
      num: [
        {
          img: "/imgs/0a01d2e752e804619dcea9ad481b7f7.jpg",
          p1: "广州香格里拉11.11大促|超级飞侠童趣主题江景房",
          cjfx:
            "超级飞侠童趣主题房，让家长与小朋友们在超级飞侠二段陪伴下,尽享亲自乐趣!",
          p2: "●入住超级飞侠童趣主题江景客房一晚",
          p3: "●享用国际自主早赞 (登记入住两位成人及以为12岁以下儿童)",
          p4:
            "●可享受其中一个礼遇:1.假日同乐营入场券 (适用于登记入住的以为12岁以下儿童) ,即入住日期在10月22日至23日,29至30日;11月5至6日,12至13日2.如选其他日期,则可获享CNY 200 餐饮消费额度(适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费)",
          p5: "●畅玩K20儿童交通安全训练营20分钟,寓教于乐,学习交通法规",
          p6: "适用范围:广州香格里拉",
          span1: "1370",
          span2: "CNY1726",
        },
        {
          img: "/imgs/b060fff40578797724233a78f430385.jpg",
          p1: "温州香格里拉11.11大促|全景亲自客房套餐",
          p2:
            "●携家出行,入住宽敞的全景亲子房一晚,凭窗一览瓯江壮丽山水风貌(两位成人携带一位6周岁以下儿童)",
          p3:
            "●亲自主题房内置特色木马、帐篷、摇椅等儿童玩乐设施,并且专门配置儿童牙刷、卡通毛巾等专属欢迎备品及礼包、慢慢童趣",
          p4:
            "●享用美味瓯咖啡早餐,开启亲自度假的妙趣时光(两位成人及以为6周岁以下儿童),可获享CNY 200 餐饮消费额度适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费",
          p5: "●畅玩K20儿童交通安全训练营20分钟,寓教于乐,学习交通法规",
          p6: "适用范围:温州香格里拉",
          span1: "798",
          span2: "CNY1160",
        },
        {
          img: "/imgs/5fb2bb8ac2e3483334d9049017a4082.jpg",
          p1: '苏州园区香格里拉11.11大促|"超级飞侠"卡通主题亲自客房特惠',
          p2: '●"超级飞侠"主题亲子客房',
          p3: "●与萌娃一起欢享童趣时光",
          p4:
            "●享用美味瓯咖啡早餐,开启亲自度假的妙趣时光(两位成人及以为6周岁以下儿童),可获享CNY 200 餐饮消费额度适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费",
          p5: "●乐享巧虎欢乐岛,开清亲密无间的家庭亲子之旅",
          p6: "适用范围:苏州园区香格里拉",
          span1: "1158",
          span2: "CNY1597",
        },
        {
          img: "/imgs/83313d9ad34c4252cf106a76bc72f49.jpg",
          p1: "南京香格里拉11.11大促|秋意正浓,云酌长空客房套餐",
          p2: "●豪华客房一晚含双人自助早餐",
          p3: "●与40楼豪华阁贵宾廊坐拥玄武湖全景,尊享双人酒食套餐",
          p4:
            "●享用美味瓯咖啡早餐,开启亲自度假的妙趣时光(两位成人及以为6周岁以下儿童),可获享CNY 200 餐饮消费额度适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费",
          p5: "●房内迷你吧饮品首轮畅饮",
          p6: "适用范围:南京香格里拉",
          span1: "899",
          span2: "CNY1602",
        },
        {
          img: "/imgs/55014dffc7ae499991397be533a38c4.jpg",
          p1: "杭州城中香格里拉11.11大促|一晚豪华阁游船套餐",
          p2: "●豪华客房一晚含双人自助早餐",
          p3:
            "●此优惠套餐包含:双人豪华阁礼遇:豪华阁宾客可在贵宾廊享受优先私人办理入住及退房,每日早餐、新鲜水果,全天供应零食及晚间鸡尾酒和小食;双人西湖公共游船门票1份,搭乘古色古香的游船,感受别样西子湖风情;水疗200元代金券2张;网红啤酒餐吧啤酒券2张",
          p4:
            "●享用美味瓯咖啡早餐,开启亲自度假的妙趣时光(两位成人及以为6周岁以下儿童),可获享CNY 200 餐饮消费额度适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费",
          p5: "●房内迷你吧饮品首轮畅饮",
          p6: "适用范围:杭州香格里拉",
          span1: "1388",
          span2: "CNY1648",
        },
        {
          tz2: "tz2",
          img: "/imgs/83313d9ad34c4252cf106a76bc72f49.jpg",
          p1: "杭州城中香格里拉11.11大促|一晚豪华阁游船套餐",
          p2: "●豪华客房一晚含双人自助早餐",
          p3:
            "●此优惠套餐包含:双人豪华阁礼遇:豪华阁宾客可在贵宾廊享受优先私人办理入住及退房,每日早餐、新鲜水果,全天供应零食及晚间鸡尾酒和小食;双人西湖公共游船门票1份,搭乘古色古香的游船,感受别样西子湖风情;水疗200元代金券2张;网红啤酒餐吧啤酒券2张",
          p4:
            "●享用美味瓯咖啡早餐,开启亲自度假的妙趣时光(两位成人及以为6周岁以下儿童),可获享CNY 200 餐饮消费额度适用于酒店餐厅及送餐服务,并可与同一次入住内累积一次性消费",
          p5: "●房内迷你吧饮品首轮畅饮",
          p6: "适用范围:杭州香格里拉",
          span1: "1388",
          span2: "CNY1648",
        },
        {
          img: "/imgs/666113684f12314959f5d883e259f8f.jpg",
          p1: "北京嘉里大酒店11.11大促|嘉品工作日双人自助晚餐(赠2小时乐园畅玩)",
          p2:
            "百余种自助美味涵盖鲜美海鲜、日式料理、西式精选、亚洲风味、老北京小吃、儿童美食区、甜点水果区.....不知道吃什么?那就各式美食都尝试一遍!",
          p3: "工作日两大一小自助午餐,包含软饮(含两位成人及一位12岁以下儿童)",
          p4: "额外儿童需按门市价支付",
          p5: "个多佳肴美馔",
          p6: "适用范围:北京嘉里大酒店",
          span1: "508",
          span2: "CNY676",
        },
        {
          img: "/imgs/6b9c79bf5bcf73eed2d908ba990e4fb.jpg",
          p1: "上海浦东香格里拉11.11大促|怡咖啡工作日两大一小午餐",
          p2: "上海浦东香格里拉|怡咖啡工作日两大一小午餐",
          p3:
            "百余种自助美味涵盖鲜美海鲜、日式料理、西式精选、亚洲风味、老北京小吃、儿童美食区、甜点水果区.....不知道吃什么?那就各式美食都尝试一遍!",
          p4: "工作日两大一小自助午餐,包含软饮(含两位成人及一位12岁以下儿童)",
          p5: "个多佳肴美馔",
          p6: "适用范围:上海浦东香格里拉",
          span1: "558",
          span2: "CNY780",
        },
        {
          img: "/imgs/3717c335d4c49b18cbcec36b20f18a6.jpg",
          p1: "青岛香格里拉11.11大促|两大一小通用自处餐券",
          p2: "●无限量供应的鲜肥螃蟹",
          p3: "●现场扫码溯源的三文鱼",
          p4: "●香飘四溢的韩国烤肉",
          p5: "●牛排、羊排、羊腿...",
          p6: "适用范围:青岛上海浦东香格里拉",
          span1: "488",
          span2: "CNY820",
        },
      ],
    };
  },
  methods: {
    buttonClick(buttonIndex) {
      this.buttonIndex = buttonIndex;
    },
  },
};
</script>
<style scoped>
.header {
  height: 40px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  z-index: 100;
}
.header .img1 {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-left: 5px;
}
.header .img2 {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  margin-left: 320px;
}
.header .headerspan {
  position: absolute;
  left: 50%;
  padding-top: 8px;
  transform: translate(-50%);
}
.body .bodyimg {
  width: 100%;
}
.nextbody {
  background-color: rgb(255, 255, 255);
  bottom: 80px;
  position: relative;
  /* z-index: 100; */
  border-radius: 15px 15px 0 0;
}
.btn1 {
  width: 170px;
  height: 30px;
  line-height: 30px;
  position: relative;
  left: 18px;
  top: 10px;
  border-radius: 30px;
  border: 1px solid rgb(216, 216, 216);
  background-color: rgb(255, 255, 255);
}
.btn2 {
  width: 170px;
  height: 30px;
  line-height: 30px;
  position: relative;
  left: 18px;
  top: 10px;
  border-radius: 30px;
  border: 1px solid rgb(216, 216, 216);
  background-color: rgb(255, 255, 255);
}
.nextbodyxq {
  margin: 10px;
  height: 550px;
  margin-top: 60px;
  border: 1px solid rgb(223, 222, 222);
  border-radius: 15px;
  box-shadow: 2px 3px 8px 2px rgb(204, 203, 203);
}
.nextbodyimg1 {
  display: block;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
}
.nextbodyp1 {
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 15px;
  margin-left: 8px;
}
.nextbodyp2 {
  font-size: 14px;
  position: relative;
  margin-left: 15px;
  margin-right: 10px;
  color: rgb(172, 172, 172);
}
.nextbodyp3 {
  font-size: 14px;
  position: relative;
  margin-left: 15px;
  color: rgb(172, 172, 172);
}
.nextbodyp4 {
  font-size: 14px;
  position: relative;
  top: 20px;
  margin-left: 35px;
  margin-right: 10px;
  color: rgb(172, 172, 172);
}
.nextbodyp5 {
  font-size: 14px;
  position: relative;
  top: 20px;
  margin-left: 35px;
  margin-right: 10px;
  color: rgb(172, 172, 172);
}
.nextbodyp6 {
  font-size: 14px;
  position: relative;
  top: 20px;
  margin-left: 35px;
  margin-right: 10px;
  color: rgb(172, 172, 172);
}
.nextbodyp7 {
  font-size: 14px;
  position: relative;
  top: 35px;
  margin-left: 15px;
  color: rgb(172, 172, 172);
}
.nextbodyspan1 {
  font-size: 12px;
  left: 15px;
  top: 50px;
  position: relative;
  color: rgb(233, 200, 12);
}
.nextbodyspan2 {
  font-size: 18px;
}
.nextbodyspan3 {
  font-size: 12px;
}
.nextbodyspan4 {
  font-size: 12px;
  position: relative;
  top: 50px;
  left: 20px;
  text-decoration: line-through;
  font-weight: 100;
}
.nextbodybtn {
  width: 85px;
  height: 30px;
  position: relative;
  display: flex;
  top: 30px;
  left: 250px;
  line-height: 30px;
  display: block;
  background-color: rgb(161, 117, 36);
  color: white;
  border: none;
  border-radius: 3px;
}
.divbtn .btn2 #ttms,
.divbtn .btn1 #jxfq {
  color: rgb(0, 0, 0) !important;
}
.divbtn {
  position: fixed;
  width: 100%;
  position: relative;
  bottom: 30px;
  height: 50px;
  z-index: 99;
  background-color: rgb(255, 255, 255);
}
.bgcolor {
  background-color: rgb(161, 117, 36) ;
}
</style>
