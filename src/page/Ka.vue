<template>
<div id="ka">

  <div class="bm" >
    <router-link :to="{name:'Kc'}" tag="span" class="movie" >卖座卡</router-link>
    <router-link :to="{name:'Kd'}" tag="span" class="movie" >电子卖座卡</router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'Ka'
}
</script>

<style scoped>
#ka{
  margin-top: 50px;
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
