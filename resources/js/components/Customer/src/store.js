import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0,
    cost: 0,
    cart:[],
    products:undefined,
    loading: false,
    error:false,
    success:false,
    completed: false,

}


const mutations = {


    increment (state, payload) {

        state.loading = true

        axios.post('/api/products/add/' + payload.product.id).then((response) => {
            state.cart.push(payload.product.id)
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

        payload.count = state.count
        payload.cost = state.cost

        axios.post('api/orders/create/' + JSON.stringify(payload)).then((response) => {
            if(response.data === 'Sorry we can not fulfil that order'){

                state.count = 0
                state.cost = 0
                state.cart = []

                state.error = true

            }
            if(response.data === 'new order created'){
                state.count = 0
                state.cost = 0
                state.cart = []

                state.success = true


            }

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
