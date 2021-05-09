import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    cost: 0,
    products:undefined,
    loading: false,
    completed: false,

}


const mutations = {


    increment (state, payload) {

        state.loading = true

        axios.post('/api/products/add/' + payload.product.id).then((response) => {

            state.count = state.count + 1
            state.cost += parseFloat(response.data.cost)
            state.loading = false


        })
            .catch((error) =>{
                console.log(error)
            })

    },

    initialise(state, payload){

        state.loading = true

        axios.get('/api/products/get').then((response) => {

            state.products = response.data

            state.loading = false


        })
            .catch((error) =>{
                console.log(error)
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
                console.log(error)
            })
    },

    confirmOrder(state, payload){
        axios.post('api/orders/create/' + state.cost + '/' + state.count + ' /' + payload.email + '').then((response) => {
            console.log(response.data)
        })
            .catch((error) => {
                console.log(error)
            })
    },


}

const actions = {
    increment: ({ commit }, payload) => commit('increment', payload),
    initialise: ({ commit }, payload) => commit('initialise', payload),
    emptyBasket: ({ commit }, payload) => commit('emptyCart', payload),
    confirmOrder: ({ commit }, payload) => commit('confirmOrder', payload),

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
