<template>
    <div class="#app"> 
            <page5 v-if="!isLogin"></page5>
            <page6 v-if="isLogin" :user="userData"></page6>
    </div>
</template>

<script>
import firebase from 'firebase'
import page5 from "../views/page5.vue"
import page6 from "../views/page6.vue"

export default {
  name: 'app',
  data () {
    return {
      isLogin: false,
      userData: null
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      }
    });
  },
  components: {
    page5: page5,
    page6: page6
  }
}
</script>
