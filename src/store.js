import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  users:[

  ]
};

const mutations = {
  addUser(state, payload){
    state.users.push(payload);
  }
};



const store = new Vuex.Store({
  state,
  mutations,
});

export default store;