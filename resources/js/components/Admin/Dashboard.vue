<template>
    <div>
        <p @click="logout">logout</p>
        Dashboard <br>
        Name: {{user.name}} <br>
        Email: {{user.email}} <br>
    </div>
</template>

<script>

export default {
    data(){
        return {
            user: []
        }
    },
    methods: {
        logout(){
            axios.post('api/logout').then((response) =>{
                this.$router.push({name:"Home"})
            })
                .catch((error) =>{
                    console.log(error)
                })
        }
    },
    mounted() {
        axios.get('/api/user').then((response) => {
            this.user = response.data
        })
            .catch((error) =>{
                console.log(error)
            })
    }
}
</script>

<style scoped>

</style>
