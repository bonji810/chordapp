<template>
  <div id="app">
    <div>
    <navbar></navbar>
    </div>
    <div>
    <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from '../src/components/navbar.vue'
import firecomp from '../src/components/firebase.vue'
import '../src/scss/main.css'
import Home from "./views/Home.vue"
import page1 from "./views/page1.vue"
import page2 from "./views/page2.vue"
import page3 from "./views/page3.vue"
import page4 from "./views/page4.vue"
import page5 from "./views/page5.vue"
import page6 from "./views/page6.vue"
import page7 from "./views/page7.vue"
import page8 from "./views/page8.vue"
import page9 from "./views/page9.vue"
import signup from './views/signup.vue'
import signin from "./views/signin.vue"
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
  data() {
    return {
      isLogin: false,
      userData: null
    }
  },
  components: {
    navbar,
    firecomp,
    Home: Home,
    page1: page1,
    page2: page2,
    page3: page3,
    page4: page4,
    page5: page5,
    page6: page6,
    page7: page7,
    page8: page8,
    page9: page9,
    signup: signup,
    signin: signin,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}
</style>
