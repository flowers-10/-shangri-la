<template>
  <div style="whith: 100%">
    <van-nav-bar title="交易记录">
      <template #left>
        <router-link to="/add">
          <van-icon name="arrow-left" size="18" />
        </router-link>
      </template>
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item
        style="box-shadow: none; margin-bottom: 50px"
        v-model="value1"
        :options="option1"
      />
    </van-dropdown-menu>
    <van-empty v-if="id == ''" description="在指定期间没有找到任何交易记录" />
    <div v-else-if="id" >
      <van-card
        :price="`${price*fangjian}`"
        :desc="`消费时间:${date},人数:${parseInt(chengren)+parseInt(ertong)}`"
        title="杭州香格里拉"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       fangjian:sessionStorage.getItem("fangjian") || "",
        chengren:sessionStorage.getItem("chengren") || "",
        ertong:sessionStorage.getItem("ertong") || "",
      date:sessionStorage.getItem("date") || "",
      price:sessionStorage.getItem("price") || "",
      arr:[],
      id: sessionStorage.getItem("id") || "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "最近一笔交易记录", value: 0 },
        { text: "最近十笔交易记录", value: 1 },
      ],
    };
  },
  mounted(){
    this.axios.post('/select4',`id=${sessionStorage.id}`).then(
      result=>{
        console.log(result);
      }
    )
  }
};
</script>

