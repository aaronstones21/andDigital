import Vue from 'vue'
import Vuex from 'vuex'
//import apiClient from "../../../mixins/apiClient";

Vue.use(Vuex)




const authState = {

    email: '',

}

const authMutations = {
    increment (state, payload) {

    },

}

const authActions = {
    increment: ({ commit }, payload) => commit('increment', payload),


}

export default new Vuex.Store({
    authState,
    authMutations,
    authActions
})
