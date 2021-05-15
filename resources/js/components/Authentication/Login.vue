<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
                Login
            </div>

            <!-- Login Form -->
            <form>
                <input type="email" placeholder="Email" v-model="form.email" class="fadeIn second">
                <input type="password" placeholder="Password" v-model="form.password" name='password' class="fadeIn third">
                <input @click.prevent="login" type='submit' class="fadeIn fourth" value="Log In">
            </form>



        </div>
    </div>
</template>

<script>
import authStore from './src/store';
import { mapActions, mapState } from 'vuex'
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)
export default {
    data(){
        return {
            form:{
                email: '',
                password: '',
            },
            errors:[],

        }
    },
    methods:{
        login(){
            axios.post('/api/login', this.form).then((response) => {
                this.$router.push('/admin/dashboard')
            })
            .catch((error) =>{
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style scoped>

</style>
