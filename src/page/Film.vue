<template>
  <div id="film">

    <div class="film">
      <img :src="filmData.cover.origin" alt="">
      <h1>影片简介</h1>
      <div class="box">
        <div>
          <span>导演：</span>
          <span>{{filmData.director}}</span>
        </div>
        <div>
          <span>主演:  </span>
          <span v-for="ac in filmData.actors">&nbsp;{{ac.name}}&nbsp;&nbsp;&nbsp;</span>
        </div>
        <div>
          <span>地区语言</span>
          <span>{{filmData.nation}}({{filmData.language}})</span>
        </div>
        <div>
          <span>上映时间</span>
          <span>{{premiereAt}}上映</span>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>

  import axios from "axios"
export default {
  name: 'Film',
  data:function(){
    return {
      filmData:'',
      premiereAt:""
    }
  },
  mounted() {

  },
  computed:{

  },
  beforeCreate(){
      var timestamp = (new Date()).getTime();
      var id=this.$route.params.id
      let url='cc/v4/api/film/'+id+'?__t='+timestamp
      let that=this
      axios.get(url).then(function (data) {
        that.filmData=data.data.data.film

          function timestampToTime(timestamp) {
            var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '年';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
            let D = date.getDate() + '日 ';
            let h = date.getHours() + ':';
            let m = date.getMinutes() + ':';
            let s = date.getSeconds();
            return Y+M+D;
          }
          that.premiereAt=timestampToTime(that.filmData.premiereAt);

      })
  },




}
</script>

<style scoped>
#film{
  margin-top: 50px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.film img{
  display: block;
  width: 100%;
  height: 180px;
}
.film .box{
  padding: 20px;
}
.box div{
  line-height: 30px;
  font-size: 16px;
}
</style>
