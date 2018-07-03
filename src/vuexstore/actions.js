import axios from 'axios'
const actions={
  getcroll({state}){
    var timestamp = (new Date()).getTime();
    let url="cc/v4/api/billboard/home?__t="+timestamp
    axios.get(url).then(function (data) {

      state.crolltiems=[...data.data.data.billboards]
    })
  },
  gethlist({state}){
    var timestamp = (new Date()).getTime();
    let url='cc/v4/api/film/now-playing?__t='+timestamp+'&page=1&count=5'

    axios.get(url).then(function (data) {

      state.hitems=[...data.data.data.films]

    })

  },
  getnowplaying({state}){
    var page=state.page

    var  url ="cc/v4/api/film/now-playing?page=1&count=7"
      if(page==1){
        axios.get(url).then(function (data) {
          state.getnow=data.data.data.films
          state.page++
        }) .catch(function (error) {
          console.log(error);
        });
      }else if (page<7&&page>1) {

        window.onscroll= function(){
          //变量t是滚动条滚动时，距离顶部的距离
          var st = document.documentElement.scrollTop||document.body.scrollTop;
          var sh= document.documentElement.scrollHeight
          var ch= document.documentElement.clientHeight
          if(st+ch==sh){
            state.page++
            url ="cc/v4/api/film/now-playing?page="+state.page+"&count=7"
            axios.get(url).then(function (data) {
              state.getnow=state.getnow.concat(data.data.data.films)

            })
          }
        }
      }



  }
  ,
  getcoming({state}){
    var page1=state.page1

    var  url ="cc/v4/api/film/coming-soon?page=1&count=7"
    if(page1==1){
      axios.get(url).then(function (data) {
        state.getcom=data.data.data.films
        state.page1++
      }) .catch(function (error) {
        console.log(error);
      });
    }else if (page1<7&&page1>1) {

      window.onscroll= function(){
        //变量t是滚动条滚动时，距离顶部的距离
        var st = document.documentElement.scrollTop||document.body.scrollTop;
        var sh= document.documentElement.scrollHeight
        var ch= document.documentElement.clientHeight
        if(st+ch==sh){
          state.page1++
          url ="cc/v4/api/film/coming-soon?page="+state.page1+"&count=7"
          axios.get(url).then(function (data) {
            state.getcom=state.getcom.concat(data.data.data.films)

          })
        }
      }
    }



  }
}
export default actions
