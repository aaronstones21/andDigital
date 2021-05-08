<template>

    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
                Register
            </div>

            <!-- Login Form -->
            <form>
                <input type="text" placeholder="Name" v-model="form.name" class="fadeIn second">
                <input type="email" placeholder="Email" v-model="form.email" class="fadeIn Third">
                <input type="password" placeholder="Password" v-model="form.password" name='password' class="fadeIn fourth">
                <input type="password" placeholder="Confirm Password" v-model="form.confirm_password" name='password_confirmation' class="fadeIn fifth">
                <input @click.prevent="register" type='submit'  class="fadeIn sixth" value="Log In">
            </form>



        </div>
    </div>


</template>

<script>


export default {
    data(){
        return {
            form:{
                name:'',
                email: '',
                password: '',
                confirm_password: '',
            },
            errors:[],

        }
    },
    methods:{
        register(){
            console.log(this.form)

                axios.post('/api/register', this.form).then((response) =>{
                    this.$router.push({name: "Dashboard"});
                }).catch((error) =>{
                    this.errors = error.response.data;
                })
        },
    }
}
</script>

<style scoped>

</style>
