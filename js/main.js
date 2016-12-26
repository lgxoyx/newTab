/**
 * Created by li on 2016/12/5.
 */
let data=[];

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
  data:{
    windowHeight:0,
  },
  methods:{
    windowResize:function(){
      let height=document.documentElement.clientHeight;//获得浏览器窗口的高度
      return this.windowHeight=height-50;
    }
  }
});
//当窗口变化时调用方法
window.onresize=function(){
  vm.windowResize();
}
//
window.onload=function () {
  vm.windowResize();
}