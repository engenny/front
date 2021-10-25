import Vue from "vue";
import Vuex from "vuex";
import routes from "./routes";


Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    routes,
  },
  
});
