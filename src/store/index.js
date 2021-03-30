import Vue from 'vue'
import Vuex from 'vuex'
import Storage from './modules/storage.js'
import Products from './modules/products.js'
import InfoBar from './modules/infobar.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Storage,
    Products,
    InfoBar
  }
})
