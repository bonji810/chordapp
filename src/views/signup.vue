<template>
  <div id="#app">
    <div class="main-wrapper">
      <div class="signup">
        <h2 class="title border">新規登録</h2>
        <input class="input-text" type="text" placeholder="メールアドレス" v-model="username">
        <input class="input-text" type="password" placeholder="パスワード" v-model="password">
        <button class="button login bg-1" @click="signUp">登録</button>
        <p>アカウントを持っている方：
          <router-link to="/page5">サインイン</router-link>
        </p>
      </div>
      <div class="button next bg-1">
        <router-link to="/page5">戻る</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert('Create account: ', user.email)
          this.$router.push('/page5')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>
