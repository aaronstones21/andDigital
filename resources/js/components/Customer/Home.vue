<template>

    <div>
        <div class="animation-container">
            <div v-if="this.loading === true">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
        <div style="position: sticky;">
            <nav class="navbar navbar-light bg-light justify-content-between">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <router-link to="/order"> <a href="#" role="button" aria-expanded="false"> <span class="fa fa-gift bigicon"></span> {{this.count}} Items in Cart<span class="caret"></span></a></router-link>
                <button type='button' class="btn btn-info" @click.prevent="emptyBasket({})" role="button" aria-expanded="false">Empty Cart</button>
                <p aria-expanded="false">£{{this.cost}}</p>
            </nav>
        </div>
    <div class="row">
                <div class="container bootdey">
                    <div>

                        <div class="row product-list">
                            <div v-for='product in this.products' class="col-md-4" v-if="product.quantity > 0">
                                <section class="panel">
                                    <div class="pro-img-box">
                                        <img :src="product.file_path" alt="image" />
                                        <a role="button" @click.prevent="increment({product:product})" class="adtocart">
                                            <i class="fa fa-shopping-cart" style="font-size:36px"></i>
                                        </a>
                                    </div>

                                    <div class="panel-body text-center">
                                        <h4>
                                            <a href="#" class="pro-title">
                                                {{product.name}}
                                            </a>
                                        </h4>
                                        <p class="price">${{ product.cost }}</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


</template>

<script>
import store from './src/store';
import { mapActions, mapState } from 'vuex'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)



export default {

    methods:mapActions(['increment', 'initialise', 'emptyBasket']),

    computed:mapState({

        products: state => state.products,
        cart: state => state.cart,
        cost: state => state.cost,
        count: state => state.count,
        loading: state => state.loading,

    }),

    mounted(){

        this.initialise({})

    }
}
</script>

<style scoped>
body{margin-top:20px;
    background:#f1f2f7;
}

/*panel*/
.panel {
    border: none;
    box-shadow: none;
}

.panel-heading {
    border-color:#eff2f7 ;
    font-size: 16px;
    font-weight: 300;
}

.panel-title {
    color: #2A3542;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 0;
    font-family: 'Open Sans', sans-serif;
}


/*product list*/

.prod-cat li a{
    border-bottom: 1px dashed #d9d9d9;
}

.prod-cat li a {
    color: #3b3b3b;
}

.prod-cat li ul {
    margin-left: 30px;
}

.prod-cat li ul li a{
    border-bottom:none;
}
.prod-cat li ul li a:hover,.prod-cat li ul li a:focus, .prod-cat li ul li.active a , .prod-cat li a:hover,.prod-cat li a:focus, .prod-cat li a.active{
    background: none;
    color: #ff7261;
}

.pro-lab{
    margin-right: 20px;
    font-weight: normal;
}

.pro-sort {
    padding-right: 20px;
    float: left;
}

.pro-page-list {
    margin: 5px 0 0 0;
}

.product-list img{
    width: 100%;
    border-radius: 4px 4px 0 0;
    -webkit-border-radius: 4px 4px 0 0;
}

.product-list .pro-img-box {
    position: relative;
}
.adtocart {
    background: #fc5959;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    color: #fff;
    display: inline-block;
    text-align: center;
    border: 3px solid #fff;
    left: 45%;
    bottom: -25px;
    position: absolute;
}

.adtocart i{
    color: #fff;
    font-size: 25px;
    line-height: 42px;
}

.pro-title {
    color: #5A5A5A;
    display: inline-block;
    margin-top: 20px;
    font-size: 16px;
}

.product-list .price {
    color:#fc5959 ;
    font-size: 15px;
}

.pro-img-details {
    margin-left: -15px;
}

.pro-img-details img {
    width: 100%;
}

.pro-d-title {
    font-size: 16px;
    margin-top: 0;
}

.product_meta {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 15px 0;
}

.product_meta span {
    display: block;
    margin-bottom: 10px;
}
.product_meta a, .pro-price{
    color:#fc5959 ;
}

.pro-price, .amount-old {
    font-size: 18px;
    padding: 0 10px;
}

.amount-old {
    text-decoration: line-through;
}

.quantity {
    width: 120px;
}

.pro-img-list {
    margin: 10px 0 0 -15px;
    width: 100%;
    display: inline-block;
}

.pro-img-list a {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
}

.pro-d-head {
    font-size: 18px;
    font-weight: 300;
}

img{
    height: 15em;
    width: 4em;
}

.animation-container{
    text-align: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 5;
}

.lds-ellipsis {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
}
.lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #0075FEFF;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
}


@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
}
@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
}
.row {
    max-width:140em;
    margin:auto;
}

.position-modifier{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
}
</style>
