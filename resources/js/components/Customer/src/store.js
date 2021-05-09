import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    cost: 0,
    cart: undefined,
    products:undefined,
    loading: false,
    completed: false,

}


const mutations = {


    increment (state, payload) {

        state.loading = true

        axios.post('/api/products/add/' + payload.product.id).then((response) => {

            state.count = state.count + 1
            state.cost = response.data.cost

            state.loading = false


        })
            .catch((error) =>{
                this.errors = error.response.data.errors
            })

    },

    initialise(state, payload){

        state.loading = true

        axios.get('/api/products/get').then((response) => {

            state.products = response.data

            state.loading = false


        })
            .catch((error) =>{
                this.errors = error.response.data.errors
            })
    },

    emptyCart(state, payload){

        state.loading = true


        axios.delete('/api/products/empty').then((response) => {

            state.cart = []
            state.cost = 0
            state.count = 0

            state.loading = false


        })
            .catch((error) =>{
                this.errors = error.response.data.errors
            })
    },


}

const actions = {
    increment: ({ commit }, payload) => commit('increment', payload),
    initialise: ({ commit }, payload) => commit('initialise', payload),
    emptyBasket: ({ commit }, payload) => commit('emptyCart', payload),

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
