<template>
    <div class="login">
        <input type="text" v-model="email" placeholder="Email"> <br>
        <input type="password" v-model="password" placeholder="Password">
        <button v-on:click="signIn"> Prijava </button>
        <p> Nimaš še računa? 
            <router-link to="/sign-up">  Registriraj se </router-link>
        </p>
    </div>
</template>


<script> 
   import firebase from 'firebase'

    export default{
        name: 'login',
        data: function(){
            return {
                email: '',
                password: ''
            }
        },
    methods:{
        signIn: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) =>{
                    this.$router.replace('dashboard')
                },
                (err)=> {
                    alert("Prišlo je do napake pri prijavi v aplikacijo")
                }
            )
        }
    }
    }
</script>


<style scoped>
</style>