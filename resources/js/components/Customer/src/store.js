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
            state.cost = parseFloat(response.data.cost)
            state.loading = false


        })
            .catch((error) =>{
                state.loading= false

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
                state.loading= false

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
                state.loading= false

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
                state.loading= false

                console.log(error)
            })
    },

    update(state, payload){
        state.loading = true

        axios.patch('/api/products/update/' ,payload.product).then((response) => {
            state.loading = false
            if(response.data === 'success'){
                state.success = true
                this.commit('initialise', payload)
            }
            else {
                state.error = true
            }
        })
            .catch((error) =>{
                state.loading= false

                console.log(error)
            })
    },

    delete(state, payload){
        state.loading = true

        axios.delete('/api/products/delete/' + payload.product).then((response) => {
            state.loading= false

            if (response.data === 'success'){
                state.success = true
                this.commit('initialise', payload)

            }
            else {
                state.error = true
            }
        })
            .catch((error) => {
                state.loading= false

                console.log(error)
            })
    },
    create(state, payload){



        state.loading = true

        axios.patch('/api/products/create', {name:payload.product.name,
            description:payload.product.description,
            file_path:payload.product.file_path,
            gender:payload.product.gender,
            quantity:payload.product.quantity,
            cost:payload.product.cost
        }).then((response) => {
            state.loading= false

            if (response.data === 'success'){
                state.success = true

            }
            else {
                state.error = true
            }

            this.commit('initialise', payload)


        })
            .catch((error) => {
                state.loading= false

                console.log(error)
            })

    },

}

const actions = {
    increment: ({ commit }, payload) => commit('increment', payload),
    initialise: ({ commit }, payload) => commit('initialise', payload),
    emptyBasket: ({ commit }, payload) => commit('emptyCart', payload),
    confirmOrder: ({ commit }, payload) => commit('confirmOrder', payload),
    contains: ({ commit }, payload) => commit('contains', payload),
    remove: ({ commit }, payload) => commit('remove', payload),
    update: ({ commit }, payload) => commit('update', payload),
    delete: ({ commit }, payload) => commit('delete', payload),
    create: ({ commit }, payload) => commit('create', payload),

}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
