import Vue from 'vue'
import Vuex from 'vuex'
//import apiClient from "../../../mixins/apiClient";

Vue.use(Vuex)




const state = {

}

const mutations = {
    increment (state, payload) {

        component.$apiClient('api')
            .post(endpoint)
            .then((response) =>{

                state.count = response.data.count
                state.rewards += Number(payload.counter * payload.product.rewards)
                state.cost = Number(response.data.cost)
                state.cart = response.data.cart

                this.commit('contains', {})

                state.loading = false

            })
            .catch((error) => {
                console.log(error.response);
                state.loading = false
            });

    },
    decrement (state, payload) {
        console.log('we are here')        
    },        
    
}

const actions = {
    increment: ({ commit }, payload) => commit('increment', payload),
    decrement: ({ commit }, payload) => commit('decrement', payload),


}

export default new Vuex.Store({
    state,
    mutations,
    actions
})