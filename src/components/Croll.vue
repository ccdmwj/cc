<template>
  <div class="croll">
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index) in crolltiems" :key="index"  @click="go(item)">
          <img :src="item.imageUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
  name: 'Croll',
  data () {
    return {

    }
  },
  methods:{
    go(item){
      console.log(item.id)
this.$router.push({name:Film,params:{id:item.id}})
    }
  }
  ,
  computed:{
    ...mapState(["crolltiems"])
  }
}
</script>

<style>
  .croll{
    height: 300px;
    width: 100%;
  }
  .swipe {
    margin-top: 50px;
    width: 100%;
    height: 100%;
  }
  .swipe img{
    width: 100%;
    height: 100%;
  }

</style>
