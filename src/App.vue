<template>
  <div id="app">
    <!--<Loading v-show="iS"/>-->
    <nav class="toolbar">
        <span class="bar" @click="change">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
        <div class="right">
          <span class="rbar">
          {{bar}}
          </span>
          <div>
              <span class="cy">
                  {{city}}<i class="fa fa-angle-down" aria-hidden="true"></i>
              </span>
              <span class="people" @click="go">
                <i class="fa fa-user-o" aria-hidden="true"></i>
              </span>

          </div>
        </div>
    </nav>
    <!--<transition name="slide-fade">-->
    <div id="fil" v-if="isShow" >
      <div class="sidebar-container" >
        <div class="sidebar-overlay">

        </div>
        <div class="aside">
          <ul >
            <li @click="gohome">
              <span >首页</span>
            </li>
            <li @click="gomz">
              <span >影片</span>
            </li>
            <li @click="golist">
              <span >影院</span>
            </li>
            <li >
              <span @click="gomy">我的</span>
            </li>
            <li >
              <span @click="goka">卖座卡</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <!--</transition>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  // import Loading from "./components/Loading"
  import {mapState} from "vuex"
export default {
  name: 'App',

  computed:{
    ...mapState(['bar'])
  },
  // components:{Loading:Loading},
  methods:{
    go(){
      this.$router.push({name:"My"})
    },
    change(){
      this.isShow=!this.isShow
    },
    gomy(){
      this.$router.push({name:"My"})
      this.isShow=!this.isShow
    },
    gomz(){
      this.$router.push({path:"mz"})
      this.isShow=!this.isShow
    },
    goka(){
      this.$router.push({name:"Ka"})
      this.isShow=!this.isShow
    },
    golist(){
      this.$router.push({name:"List"})
      this.isShow=!this.isShow
    },
    gohome(){
      this.$router.push({name:"Home"})
      this.isShow=!this.isShow
    },
  },
  data:function () {
    return {
      city:"北京",
      isShow:false,
      iS:true
    }
  },
  mounted(){

  }


}
</script>

<style>

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(-100px);
    opacity: 0;
  }
*{
  margin: 0;
  padding: 0;
}
#app{
  position: absolute;
  width: 100%;
}
.toolbar {
  background: #282828;
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  display: flex;
  font-size: 14px;
}
.toolbar .bar{
  display: block;
  width: 48px;
  text-align: center;
  border-right: 1px solid #222;
  box-shadow: 1px 0 1px #363636;
  color: #999;
  font-size: 14px;
}
.rbar{
  font-size: 14px;
  color: #efefef;
}
.right{
  flex: 1;
  padding: 0 0 0 1em;
  display: flex;
  justify-content:space-between;
}
.cy{
  display: block;
  float: left;
  padding: 0 6px;
  font-size: 14px;
  color: #999;
  width: 48px;
}
.people{
  display: block;
  float: left;

  font-size: 16px;
  width: 48px;
  text-align: center;
  color: #999;
}
#fil{
  margin-top: 50px;
}
.sidebar-container{
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  color: #9a9a9a;
  z-index: 501;

}
.sidebar-overlay{
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all ease 0.4s;
  -webkit-transition: all ease 0.4s;
}
.aside{
  border-top: 1px solid #222;
  box-shadow: 0 1px 1px #363636 inset;
  background: #282828;
  position: absolute;
  display: block;
  top: 0;
  right: 110px;
  bottom: 0;
  left: 0;
}
.aside ul{
  box-sizing: border-box;
  margin: 0;
}
.aside li{
  width: 100%;
  margin: 0;
  padding:0 16px;
  border-bottom: 1px dotted #333;
  color: #9a9a9a;
  font-size: 14px;
  height: 51px;
  line-height: 51px;
  width: 178px;
}
</style>
