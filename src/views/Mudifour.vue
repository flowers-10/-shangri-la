<template>
  <div>
    <div class="mudifour_head">
      <div class="mudifour_head_one">
        <span @click="span" style="color: rgb(191, 155, 69)">取消</span>
      </div>
      <div class="mudifour_head_two">
        <span>
          <span>公司合同价/特价</span>
        </span>
      </div>
    </div>
    <div class="mudifour_body">
      <van-picker show-toolbar title=" " :columns="columns" confirm-button-text=" " cancel-button-text=" "/>
    </div>
    <div class="mudifour_footer">
      <van-cell-group>
        <van-field
          label="房价代码"
          placeholder="  请输入房价代码"
        />
      </van-cell-group>
    </div>
    <div class="mudifour_pp">
      <van-button type="warning" >确定</van-button>
    </div>
  </div>
</template>

<style scoped>
.mudifour_head {
  text-align: center;
  height: 10%;
  margin: 5px;
  padding: 3px;
}
.mudifour_head_one {
  position: absolute;
  font-size: 15px;
}
.mudifour_head_two {
  font-size: 18px;
}
.mudifour_body {
  /* margin-top: 30px; */
  margin-bottom: 30px;
}
.mudifour_pp{
  position: absolute;
  bottom: 20px;
  width: 95%;
  left: 2%;
}
.mudifour_pp button{
  width: 100%;
  background-color: rgb(191, 155, 69);
  font-size: 18px;
  border-radius: 8px;
}

</style>

<script>
export default {
  data() {
    return {
      columns: [
        // 第一列
        {
          values: ["优惠类型"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["选择代码类型","公司客户", "团队", "推广代码", "旅行社"],
          defaultIndex: 1,
        },
      ],
    };
  },
  methods: {
    span() {
      this.$router.push("/destination");
    }
    // onConfirm(value, index) {
    //   Toast(`当前值：${value}, 当前索引：${index}`);
    // },
    // onChange(picker, value, index) {
    //   Toast(`当前值：${value}, 当前索引：${index}`);
    // },
    // onCancel() {
    //   Toast("取消");
    // },
  },
};
</script>