<template>
    <div class="container">
        <div @click="this.success = false" class="p-3 mb-2 bg-success text-white" v-if="this.success === true">
            Your order has been placed and processed!
        </div>
        <div @click="this.error = false" class="p-3 mb-2 bg-danger text-white" v-if="this.error === true">
            Your order has unsuccesful as we do not have the stock required!
        </div>
        <div class="dgm_center_heading">
            <h4>Your Order</h4>
        </div>
        <div class="row">
            <div v-if="this.cost > 0">
                <table id="customers">
                    <tr>
                        <th>Price</th>
                        <th>Items</th>
                        <th>Count</th>
                    </tr>
                    <tr>
                        <td>£{{ this.cost }}</td>
                        <td>{{ this.cart }}</td>
                        <td>{{ this.count }}</td>
                    </tr>
                </table>
                <input @change="emailCheck" type="email" name="email" v-model="email">
                <router-link to="/"><button @click.prevent="confirmOrder({email:email, order:cart.toString()})"  v-if="this.check === true" type="button" class="btn btn-success">Confirm Order</button></router-link>
            </div>

            <div v-else>
                <div class="p-3 mb-2 bg-danger text-white">
                    You have no items in your basket.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import store from './src/store'
import { mapActions, mapState } from 'vuex'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

export default {
    name: "Product",
    computed:mapState({
        products: state => state.products,
        cart: state => state.cart,
        cost: state => state.cost,
        count: state => state.count,
        loading: state => state.loading,
        error: state => state.error,
        success: state => state.success,
    }),

    data(){
        return {
            email:'',
            check:false
        }
    },

    methods:{
        ...mapActions(['confirmOrder']),

        emailCheck(event){
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            console.log('here')
            if(event.target.value.match(mailformat))
            {

                this.check =  true;
            }
            else
            {
                this.check =  false;
            }
        }
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
