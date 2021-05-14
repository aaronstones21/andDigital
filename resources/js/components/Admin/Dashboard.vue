<template>
    <div>
        <div class="animation-container">
            <div v-if="this.loading === true">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Orders</h1>
                    <div class="row">
                        <div v-if="this.orders.length > 0">
                            <table id="customers">
                                <tr>
                                    <th>Price</th>
                                    <th>Items</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                </tr>
                                <tr v-for="item in this.orders">
                                    <td>£{{ item.cost }}</td>
                                    <td>{{ item.count }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.created_at.substring(0,10) }}</td>
                                </tr>
                            </table>
                        </div>

                        <div v-else>
                            <div class="p-3 mb-2 bg-danger text-white">
                                You have no orders.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h1>Products</h1>
                    <div class="row">
                        <div v-if="this.products.length > 0">
                            <table id="customers">
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Quantity</th>
                                    <th>Cost</th>
                                </tr>
                                <tr v-for="item in this.products" @click.prevent="showModal(item)">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.gender }}</td>
                                    <td>{{ item.quantity }}</td>
                                    <td>£{{ item.cost }}</td>
                                </tr>
                            </table>
                        </div>

                        <div v-else>
                            <div class="p-3 mb-2 bg-danger text-white">
                                You have no orders.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal
            v-show="isModalVisible"
            @close="closeModal"
            :product="product"

        />

    </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import Modal from "./Modal";

export default {

    methods:{
        showModal:function(product) {
            this.product = product
            this.isModalVisible = true;
        },
        closeModal:function() {
            this.isModalVisible = false;
        },
        ...mapActions(['increment', 'initialise', 'emptyBasket'])
    },
    components: {
        Modal,

    },
    computed:mapState({
        loading: state => state.loading,
        error: state => state.error,
        success: state => state.success,
    }),

    data(){
        return {
            user: [],
            products: [],
            orders: [],
            product: [],
            isModalVisible: false,
        }
    },
    mounted() {
        axios.get('/api/products/get').then((response) => {
            this.products = response.data
        })
            .catch((error) =>{
                console.log(error)
            })
        axios.get('/api/orders/get').then((response) => {
            this.orders = response.data

        })
            .catch((error) =>{
                console.log(error)
            })

    }
}
</script>

<style scoped>

</style>
