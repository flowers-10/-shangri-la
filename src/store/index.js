import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:sessionStorage.getItem('id'),
    username:"",   //用于保存当前登录     用户名 //user_information
    grade:'黄金级',      //用于保存当前登录用户  等级  //user_rights
    userphone:'',  //用于保存当前登录用户  手机号//user_information
    email:"12",
    days:'天',       //用于保存当前登录用户  住房天数
    number:"",  //房间数量 
    price:"", //房间价格 
    sex:"",   //性别  //user_information
    score:0, //积分 //user_rights
    district:"",
    city:sessionStorage.getItem('city'),
    name:sessionStorage.getItem('name'),

    ismudi:sessionStorage.getItem('ismudi'),//用于保存目的选择状态
    istime:sessionStorage.getItem('istime'),//用于保存时间选择状态
    isfangjian:sessionStorage.getItem('isfangjian'),//用于保存房间成人儿童人数选择状态
    mudi:sessionStorage.getItem('mudi'),//用于保存目的地点
    fangjian:sessionStorage.getItem('fangjian'),//用于保存房间数
    chengren:sessionStorage.getItem('chengren'),//用于保存成人
    ertong:sessionStorage.getItem('ertong'),//保存儿童
    date:sessionStorage.getItem('date'),//保存时间
  },
  mutations: {
      // 登陆成功后可以调用，修改登录状态，将传入的当前登录用户名存入state
    // loginfangjian(state,mudithreeobj){
    // 当选人界面点btn跳转的时候，吧值传到VUEX之后
    // 再将值重新传到新的界面————房间/成人/儿童/时间
    loginfangjian(state,fangjianobj){
      state.isfangjian=true;
      state.fangjian=fangjianobj;
    // this.$store.commit('loginok',userObj);
    },
    loginchengren(state,chengrenobj){
      state.isfangjian=true;
      state.chengren=chengrenobj;
    },  
    loginertong(state,ertongobj){
      state.isfangjian=true;
      state.ertong=ertongobj;
    },
    logindate(state,dataobj){//时间
      state.istime=true;
      state.date=dataobj;
    },
    loginmudi(state,mudiobj){
      state.ismudi=true;
      state.mudi=mudiobj;
    },
    login1(state,username){
      // let username = JSON.parse(JSON.stringify(stata.username));
      state.username=username;
      // alert(state.username);
    },
    login2(state,phone){
      // let phone = JSON.parse(JSON.stringify(stata.phone));
      state.userphone = phone;
      // alert(state.userphone);
    },
    login3(state,sex){
      // let sex = JSON.parse(JSON.stringify(stata.sex));
      state.sex = sex;
      // alert(state.sex);
    },
    login4(state,email){
      // let sex = JSON.parse(JSON.stringify(stata.sex));
      state.email = email;
      // alert(state.sex);
    },
    login5(state,district){
      // let sex = JSON.parse(JSON.stringify(stata.sex));
      state.district = district;
      // alert(state.sex);
    },
    login6(state,score){
      state.score = score;
    },
    login7(state,grade){
      state.grade = grade;
    },
    login8(state,city){
      state.city = city;
    },
    login9(state,name){
      state.name = name;
    }
    
  },
  actions:{
    vlogin(context,form){
      // console.log(1);
      axios.post('/data',`wid=${form}`).then(result=>{
        // console.log(1111);
        if(result.data.code == 200){
          context.commit("login1",result.data.result[0].wname);
          context.commit("login2",result.data.result[0].wphone);
          context.commit("login3",result.data.result[0].wsex);
          context.commit("login4",result.data.result[0].wemail);
          context.commit("login5",result.data.result[0].wdistrict);
          }
        }
      )
    },
    vright(context,form){
      axios.post('/right',`wid=${form}`).then(result=>{
        // console.log(result);
        if(result.data.code == 200){
          context.commit("login6",result.data.result[0].wpoint);
          context.commit('login7',result.data.result[0].wrank);
        }
      })
    }
  },
  getters: {
    getNum(state) {
        return state.username
    }
  },
  modules: {
  }
})
