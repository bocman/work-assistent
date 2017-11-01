<template>
    <div class="signup">
        <input type="text" v-model="email" placeholder="Email"> <br>
        <input type="password" v-model="password" placeholder="Password">
        <button v-on:click="signUp"> Sign up </button>
        <span> or go back to 
            <router-link to="/login"> login page.</router-link>
        </span>
    </div>
</template>


<script> 
    import firebase from 'firebase'

    export default{
        name: 'signUp',
        data: function(){
            return {
                email: '',
                password: ''
            }
        },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
               (user)=>{
                   this.$router.replace('dashboard')
               },
            (err)=>{
                alert('Nekaj se je zalomilo '+ err.message)
            }
            )
        }
    }
    }
</script>


<style scoped>
</style>