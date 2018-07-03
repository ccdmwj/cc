<template>
  <div class="show">
    <div v-for="item in hitems" class="ili" @click="go(item)">
      <img :src="item.cover.origin" alt=""  class="show-img">
      <div class="show-word">
        <div class="show-word-left">
          <p>{{item.name}}</p>
          <div class="spanBox">
            <span>{{item.cinemaCount}}</span>
            <span>家影院上映</span>
            <span>{{item.watchCount}}</span>
            <span>人购票</span>
          </div>
        </div>
        <div class="show-word-right">
          {{item.grade}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
export default {
  name: 'Homelist',

  data () {
    return {

    }
  },
  methods:{
    go(item){
      this.$router.push({name:'Film',params:{id:item.id}})//传过去id以便知道跳过去哪个页面
    }
  },
  computed:{
    ...mapState(["hitems"])
  },

}
</script>

<style scoped>
  .show {
    /*height: 200px;*/
    background-color: #ebebeb;
    border-radius: 2px;
    padding-top: 17px;
  }
  .ili{

    margin:0px 17px  17px 17px;
    background-color: #f9f9f9;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
  }
  .show-img{
    width: 100%;
    height: 192px;
    display: block;
    margin: 0;
    padding: 0;
  }
  .show-word{
    display: flex;
  }
  .show-word-right{
    width: 50px;
    line-height: 50px;
    color: #f78360;
    font-size: 18px;
  }
  .show-word-left{
    flex: 1;
  }
  .show-word-left p{
    height: 25px;
    line-height: 25px;
    padding-left: 10px;
  }
  .spanBox{
    height: 25px;
    line-height: 25px;
    padding-left: 10px;
  }
</style>
