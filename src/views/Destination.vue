<template>
  <div>
    <div class="alldiv">
      <div class="lookup_head">
        <div>
          <router-link to="/hotel">
            <img class="leftlogo" src="/imgs/leftlogo.png" alt="" />
          </router-link>
        </div>
        <div>
          <img class="cenlogo" src="/imgs/logologo.png" alt="" />
        </div>
      </div>

      <div class="lookup_body">
        <div class="tomudione">
          <router-link to="/checked">
            <van-button type="default">
              <div class="tomudioneall">
                <div class="tomudioneall_one">
                  <img src="/imgs/sousuobtn.png" alt="" />
                </div>
                <div class="tomudioneall_two">
                  <span v-if="city == null ">下个目的地的</span>
                  <span v-else>{{name}}</span>
                  <!-- <span> {{aa}}</span> -->
                </div>
              </div>
            </van-button>
          </router-link>
        </div>
        <!-- 时间开始结束Date -->
        <div class="tomuditwo">
          <router-link to="/muditwo">
            <van-button type="default">

              <div v-if="$store.state.istime">
                时间：{{ $store.state.date }}
              </div>
              <div v-else>选择入住和离店时间</div>
            </van-button>
          </router-link>
        </div>

        <!-- 成人儿童房间 -->
        <div class="tomudithree">
          <router-link to="/mudithree">
            <van-button type="default">
              <div>
                <span>
                  <!-- {{this.$route.params.chengren1}} -->
                  <div v-if="$store.state.isfangjian">
                    房间:{{ $store.state.fangjian }} 成人:{{
                      $store.state.chengren
                    }}
                    儿童:{{ $store.state.ertong }}
                  </div>
                  <div v-else>选房间数和人数</div>
                </span>
              </div>
            </van-button>
          </router-link>
        </div>

        <div class="tomudifour">
          <router-link to="/destination">
            <van-button type="default">
              <div class="tomudifourall">
                <div class="tomudifourall_one">
                  <img src="/imgs/biaoqian.png" alt="" />
                </div>
                <div class="tomudifourall_two">
                  <span>公司合同价/特价（可选）</span>
                </div>
              </div>
            </van-button>
          </router-link>
        </div>

        <!-- 查找酒店跳转button -->
        <div class="tomudifive">
          
            <van-button type="default" @click="click">查找酒店</van-button>
  
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 总包div */
.alldiv {
  background-image: url("/imgs/beijing8.jpg");
  height: 667px;
  /* color: white !important; */
}
/* 总包头部div */
.lookup_head {
  text-align: center;
}

/* 向左的图标 */
.leftlogo {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  margin-top: 18px;
  margin-left: 18px;
  vertical-align: middle;
}
/* 居中图标 */
.cenlogo {
  width: 45px;
  margin-top: 8px;
}

/* 总包中间五个框 */
.lookup_body {
  height: 50%;
  margin-top: 100px;
  padding: 3px;
  /* margin-bottom:15%; */
}
.lookup_body > div {
  margin: 20px;
}
.lookup_body button {
  width: 98%;
  height: 42px;
}

/* 中间四个框的第一个 */
.tomudione button {
  border: 0px;
  box-shadow: -1px -1px 2px #888888;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
  color: rgb(17, 17, 17);
  /* 加粗 */
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
.tomudione img {
  width: 24px;
  position: absolute;
  left: 15px;
  bottom: 8px;

}
.tomudioneall {
  display: flex;
  /* margin-right: auto; */
}

.tomudioneall_two {
  margin-top: 1px;
}
/* 第二框总div */
.tomuditwo button {
   border: 0px;
  box-shadow: -1px -1px 2px rgb(80, 80, 80);
  border-radius: 6px;
  color: white;
  background-color: rgba(107, 99, 99, 0.4);
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}

/* 第三框总div */
.tomudithree button {
    border: 0px;
  box-shadow: -1px -1px 2px rgb(80, 80, 80);
  border-radius: 6px;
  color: white;
  background-color: rgba(107, 99, 99, 0.4);
  font-size: 18px;
  font-family: "Times New Roman", Times, serif;
}

/* 第四框总div */
.tomudifour button {
      border: 0px;
  /* box-shadow: -1px -1px 1px rgb(80, 80, 80); */
  border-radius: 6px;
  color: white;
  background-color: rgba(138, 129, 129, 0.2);
  border: 1px solid rgb(17, 7, 7);
  font-size: 17px;
  font-family:"Times New Roman", Times, serif;
}
.tomudifour img {
  position: absolute;
  left: 13px;
  bottom: 8px;
  width: 24px;
}
.tomudifourall {
  display: flex;
}
.tomudifourall_two {
  margin-left: 20px;
  padding-left: 10px;
  margin-top: 5px;
}

/* 第五框总div */
.tomudifive button {
   border: 0px;
  /* box-shadow: -1px -1px 1px rgb(80, 80, 80); */
  border-radius: 6px;
  background-color: rgb(191, 155, 69);
  font-size: 18px;
  color: white;
  font-family: "Times New Roman", Times, serif;
  /* height: 58px; */
  /* width: 98%; */
}
</style>


<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      // mudi: "",
      // aa:"",
      city:sessionStorage.getItem('city'),
      name:sessionStorage.getItem('name')
    };
  },
  computed:{
    // ...mapState(['city','name'])
  },
  methods:{
    ...mapMutations(['login8']),
    click(){
      if(sessionStorage.city == '4' || sessionStorage.name == '杭州'){
        this.$router.push('/select');
         sessionStorage.city_id = 1;
      }else if(sessionStorage.city == '2'|| sessionStorage.name == '上海'){
        this.$router.push('/select');
        sessionStorage.city_id = 2;
      }else{
        this.$router.push('/hotel');
      }
    }
  },
  mounted(){
    this.login8(sessionStorage.getItem('city'));
  }
};
</script>