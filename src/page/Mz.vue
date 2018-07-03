<template>
  <div id="mz">
    <div class="bm" @click="change">
      <router-link :to="{name:'Nplaying'}" tag="span" :class="{tive:isactive,movie:'show'}" >正在热映</router-link>
      <router-link :to="{name:'Coming'}" tag="span" class="movie" >即将上映</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Mz',
  data(){
    return {
      isactive:true,
      show:true
    }
  },
  methods:{
    change(){
      this.isactive=false

    }
  },
  mounted(){
    // var span=document.getElementsByClassName(".movie")
    // console.log(span)
      // if () {
    //
    // }
  }
}
</script>

<style scoped>
#mz {
margin-top: 50px;
  padding-left: 15px;
  padding-right: 15px;

}
.tive{
  color: #fe6e00;
  border-bottom: solid
}
  .router-link-active{
    color: #fe6e00;
    border-bottom: solid
  }
  .bm{
    width: 100%;
    border-bottom: solid #fe6e00 1px;
  }
  .movie{
    width: 49%;
    display: inline-block;
    text-align: center;
    height: 45px;
    line-height: 45px;
  }

</style>
