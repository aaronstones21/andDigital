<template>
    <div class="container">
        <div class="dgm_center_heading">
            <h4>Your Order</h4>
        </div>
        <div class="row">
            <div v-if="this.cost > 0">
                <table id="customers">
                    <tr>
                        <th>Price</th>
                        <th>Items</th>
                    </tr>
                    <tr>
                        <td>£{{ this.cost }}</td>
                        <td>{{ this.count }}</td>
                    </tr>
                </table>
                <input @keypress="emailCheck" type="email" name="email">
                <button @click.prevent="confirmOrder({email:email})" v-if="check === true" type="button" class="btn btn-success">Confirm Order</button>
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
    }),

    data(){
        return {
            email:'',
            check:false
        }
    },

    methods:{
        emailCheck(event){

            console.log(event.target.value)

            this.email = event.target.value;

            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if (this.email.match(validRegex)) {

                this.check = true

            } else {

                this.check = false

            }
        },
        ...mapActions(['confirmOrder'])
    }
}
</script>

<style scoped>
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
</style>
