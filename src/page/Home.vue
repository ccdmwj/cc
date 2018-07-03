<template>
  <div id="home">
    <Croll></Croll>
    <div class="cont">
      <Homelist  ></Homelist>
      <div class="more-button" >更多热映电影</div>
      <div class="dividing-line" >
        <div class="upcoming">即将上映</div>
      </div>

    </div>

    <router-view/>
  </div>
</template>

<script>
  import Croll from "../components/Croll"
  import Homelist from "../components/Homelist"
  import {mapState} from "vuex"
export default {
  name: 'Home',
  components: {Croll,Homelist},
  computed:{
    ...mapState(["hitems"])
  },
  beforeCreate(){
    this.$store.dispatch("getcroll")
    this.$store.dispatch("gethlist")
  }


}
</script>

<style>
  #home{
    width: 100%;
  }
  .cont{
    background: #ebebeb
  }
  .more-button {
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
  dividing-line {
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
  }
  .upcoming {
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
  }
</style>
