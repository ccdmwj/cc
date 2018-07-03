<template>
  <div id="nplaying">
    <div class="film-item" v-for="n in getnow" @click="go(n)">
      <div class="film-item-img" >
        <img :src="n.cover.origin" style="width: 100%; transition: all 1.2s ease; opacity: 1;" >
      </div>

      <div class="film-desc" >
        <div class="film-next-arrow" >

        </div>
        <div class="film-grade" >{{n.grade}}</div>
        <div class="film-name" >{{n.name}}</div>
        <div class="film-intro" > {{n.intro}}</div>
        <div class="film-counts" >
          <span class="film-count-color1" >{{n.cinemaCount}}</span>
          <span >家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="film-count-color1" >{{n.watchCount}}</span>
          <span >人购票  </span>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

import {mapState} from "vuex"
  export default {
  name: 'Nplaying',
  data(){
    return {

    }
  },
    methods:{
        go(n){
          this.$router.push({name:"Film",params:{id:n.id}})
        }
    },
    computed:{
      ...mapState(["getnow"])
    },
    mounted(){
    this.$store.dispatch("getnowplaying")
    }
}
</script>

<style scoped>
  .film-item {
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
  }
  .film-item-img {
    width: 60px;
    float: left;
    overflow: hidden;
  }
  .film-desc {
    padding-left: 15px;
    display: inline-block;
    width: 75%;
  }
  .film-next-arrow {
    float: right;
    line-height: 29px;
    color: #c6c6c6;
  }
  .film-grade {
    float: right;
    font-size: 16px;
    line-height: 32px;
    color: #fc7103;
  }
  .film-name {
    font-size: 16px;
    line-height: 32px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .film-intro {
    height: 24px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
  }
  .film-counts {
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
  }
  .film-count-color1 {
    color: #8aa2bf;
  }
  .film-item-img img {
    width: 60px;
    height: 83px;
  }

</style>
