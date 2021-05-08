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
                console.log(response)
                this.$router.push({name:"Dashboard"})
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
