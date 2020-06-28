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