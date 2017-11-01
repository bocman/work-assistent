// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

Vue.config.productionTip = false

let app;
  // Initialize Firebase
 let config = {
    apiKey: "AIzaSyANDaf0Ami4rgbM674qpCcocw-77P8bqw0",
    authDomain: "assistent-cb2a8.firebaseapp.com",
    databaseURL: "https://assistent-cb2a8.firebaseio.com",
    projectId: "assistent-cb2a8",
    storageBucket: "",
    messagingSenderId: "856773949426"
  };
  
let firebaseApp = firebase.initializeApp(config);
let db = firebaseApp.database()

firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      router
    })
  }
})

/* eslint-disable no-new */

