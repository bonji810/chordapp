<template>
<div id="#app">
    <div class="main-wrapper">
        <h1>共有してみよう</h1>
        <div class="flex">
            <div class="margin-r">
                <p class="text">作成したコード進行のアイデアを投稿して共有してみましょう</p>
                <label for="name">名前</label><input name="name" type="text" class="input-text" v-model="name">
                <label for="title">タイトル</label><input name="title" type="text" class="input-text" v-model="message">
                <label for="contents">内容</label><textarea name="contents" class="input-text textarea" v-model="contents"></textarea>
                <label for="comment">コメント</label><textarea name="comment" class="input-text textarea" v-model="comment"></textarea>
                <button type="button" class="button bg-1 btn-submit" @click="pushData">送信</button>
            </div>
            <div>
                <p class="text">みんなが投稿したコード進行アイデア</p>
                <ul class="share-wrapper">
                    <li v-for="item in list" v-bind:key="item.index">
                        <div class="">名前：{{item.name}}</div>
                        <div class="">タイトル：{{item.message}}</div>
                        <div class="" @click="getcopy">内容：{{ item.contents }}</div>
                        <div class="">コメント：{{ item.comment }}</div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default {
    name: "page6",
    props: ["user"],
    data() {
        return{
            name: '',
            message: '',
            contents: '',
            comment: '',
            list: [],
        }
    },
    methods: {
        pushData: function () {
            if (!this.name || !this.message) return
            firebase.database().ref('myBoard/').push({
                name: this.name,
                message: this.message,
                contents: this.contents,
                comment: this.comment
            })
            this.name = ''
            this.message = ''
            this.contents = ''
            this.comment = ''
        },
    },
    created: function(){
        firebase.database().ref('myBoard/').on('value', snapshot =>{
            if (snapshot) {
                const rootList = snapshot.val()
                    let list = []
                    // データオブジェクトを配列に変更する
                    Object.keys(rootList).forEach((val, key) => {
                        rootList[val].id = val
                        list.push(rootList[val])
                    })
                    this.list = list
            }
        })
    }
}
</script>
