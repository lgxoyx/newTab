/**
 * Created by li on 2016/12/5.
 */
let data={

}

//创建一个超级链接的组件
let srcList=Vue.component('src-box', {
  // 选项
  props:['message'],
  template:`<a href="">{{message}}</a>`,
  data:function (){
    return data;
  }
});

let vm=new Vue({
  el:'#tabMain',
  data:{}
});
