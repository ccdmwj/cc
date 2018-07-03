import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import state from "./state"
import getters from "./getters"
import actions from "./actions"


Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// export default new Vuex.Store({
//   state:{
//     bar:"卖座电影",
//     crolltiems:[]
//   },
//   actions:{
//     getcroll({state}){
//       var timestamp = (new Date()).getTime();
//       let url="cc/v4/api/billboard/home?__t="+timestamp
//       axios.get(url).then(function (data) {
//         console.log(data)
//       })
//     }
//   }
// })
