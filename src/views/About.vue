<template>
  <div>
    这是支付结果页
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default{
  created(){
    let data ={
      out_trade_no:this.$route.query.out_trade_no,
      trade_no:this.$route.query.trade_no
    }
    axios({
      url:'/api/queryOrder',
      method:'post',
      headers:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:qs.stringify(data)
    }).then(res=>{
      console.log(res);
    })
  }
}

</script>

