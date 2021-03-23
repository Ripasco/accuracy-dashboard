import Vue from 'vue'
import Vuex from 'vuex'
import Storage from './modules/storage-stats.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Storage
  }
})
