<template>
<div id="#app">
    <div class="main-wrapper">
        <h1 class="title border"><font-awesome-icon icon="angle-double-right" class="icon" />作曲してみよう</h1>
        <p>Googleアカウントでログインすることができます</p>
        <button class="button login bg-1" @click="googleSignIn">googleログイン</button>

        <p>メールアドレスでもログインすることができます</p>
        <input class="input-text" type="text" placeholder="メールアドレス" v-model="username">
        <input class="input-text" type="password" placeholder="パスワード" v-model="password">
        <button class="button login bg-1" @click="signIn">ログイン</button>

        <p>アカウントを持っていない方：
            <router-link to="/signup">新規登録</router-link>
        </p>
    </div>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'page5',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/page6')
        },
        err => {
          alert(err.message)
        }
      )
    },
    googleSignIn: function () {
        const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          this.$router.push("/page6");
        }).catch(
          error => {
            alert(error.message)
          }
        );
    }
  }
}
</script>
