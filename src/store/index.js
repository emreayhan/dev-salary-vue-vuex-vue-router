import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BaseUrl = "https://uh5c123wk0.execute-api.us-east-1.amazonaws.com/dev"

export default new Vuex.Store({
  state: {
    salaryList: [{}]
  },

  actions: {
    sendForm(store, mySalary) {
      axios.post(`${BaseUrl}/create-item/${mySalary.ID}`, mySalary)
    },
    async getItems({ commit }) {
      const res = await axios.get(`${BaseUrl}/get-items`);
      commit('setSalaryList', res)
    }
  },

  mutations: {
    setSalaryList(state, res) {
      state.salaryList = res
    }
  },


  modules: {
  }
})
