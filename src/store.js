import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  users:[
    {username: "Lenka", email: "lenka@gmail.com", password: "Miljan123!", isAdmin:false }
  ],
  displayNav: false
};

const mutations = {
  addUser(state, payload){
    state.users.push(payload);
  },
  showNav(state){
    state.displayNav = true;
  },
  hideNav(state){
    state.displayNav = false;
  }
};



const store = new Vuex.Store({
  state,
  mutations,
});

export default store;