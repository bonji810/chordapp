<template>
<div id="#app">
    <div class="main-wrapper">
        <h2 class="title title-sub border"><font-awesome-icon icon="angle-double-right" class="icon" />Chapter3-2.セカンダリードミナントコードを使用したコード進行</h2>
        <p class="text">逆循環のⅥm7をⅥ7に変えるとはじめのⅡm7への進行感が強くなります。</p>
        <img class="image" v-bind:src="imgPath1" alt="1-5-6-4-進行">
        <div><font-awesome-icon icon="caret-down" class="icon" />Ⅱm7をⅡ7に</div>
        <img class="image" v-bind:src="imgPath3" alt="4-1-5-6進行">
        <div><font-awesome-icon icon="caret-down" class="icon" />Ⅲm7をⅢ7に、ⅠM7をⅠ7に</div>
        <img class="image" v-bind:src="imgPath2" alt="コード進行の開始点をずらした説明">
        
        <p class="text">次のクエスチョンで、実際のコードの響きを確かめてみましょう。</p>

        <h3 class="text"><font-awesome-icon icon="star" class="icon" />Try!：次のようににコードを並べてみましょう。<br>
        それに合ったコード進行と、リズムパターンをつけた実践的な例が聴けるようになります。<br>
        1:【Ⅱm7-Ⅴ7-Ⅲm7-Ⅵ7】　2:【Ⅵm7-Ⅱ7-Ⅴ7-ⅠM7】 3:【ⅣM7-Ⅲ7-Ⅵm7-Ⅰ7】</h3>

            <div class="chords-wrapper">
                <div class="flex between">
                        <div class="button notes result-color" @click="addNotes1">ⅠM7</div>
                        <div class="button notes result-color" @click="addNotes2">Ⅱm7</div>
                        <div class="button notes result-color" @click="addNotes3">Ⅲm7</div>
                        <div class="button notes result-color" @click="addNotes4">ⅣM7</div>
                        <div class="button notes result-color" @click="addNotes5">Ⅴ7</div>
                        <div class="button notes result-color" @click="addNotes6">Ⅵm7</div>
                </div>
                <div class="flex between">
                        <div class="button notes result-color" @click="addNotes7">Ⅰ7</div>
                        <div class="button notes result-color" @click="addNotes8">Ⅱ7</div>
                        <div class="button notes result-color" @click="addNotes9">Ⅲ7</div>
                        <div class="button notes color-6" @click="addNotes10">Ⅵ7</div>
                </div>
            </div>

        <h3 class="text"><font-awesome-icon icon="star" class="icon" />Result!</h3>
            <div class="flex between result-wrapper">
                <div v-for="item in chords" class="button notes result-color" v-bind:key="item.imdex">
                {{ item }}
                </div>
            </div>
            <div class="flex">
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive1" v-on:click="playSounds1"><font-awesome-icon icon="play" class="icon" />pattern1</button>
                <audio id="audioElement1" src='../assets/mp3/3-2/3_2_1.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive2" v-on:click="playSounds3"><font-awesome-icon icon="play" class="icon" />pattern2</button>
                <audio id="audioElement2" src='../assets/mp3/3-2/3_2_2.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive3" v-on:click="playSounds5"><font-awesome-icon icon="play" class="icon" />pattern3</button>
                <audio id="audioElement3" src='../assets/mp3/3-2/3_2_3.mp3'></audio>
            </div>
            <div class="flex">
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive1" v-on:click="playSounds2"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement4" src='../assets/mp3/3-2/3_2_1_rhythm.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive2" v-on:click="playSounds4"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement5" src='../assets/mp3/3-2/3_2_2_rhythm.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive3" v-on:click="playSounds6"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement6" src='../assets/mp3/3-2/3_2_3_rhythm.mp3'></audio>
            </div>
            <div class="flex">
                <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
                <div class="button bg-2" @click="reset"><font-awesome-icon icon="spinner" class="icon" />Reset</div>
            </div>
            
        <div class="button next bg-1">
            <RouterLink to="/signin">
                <font-awesome-icon icon="angle-right" class="icon" />Try to Compose!
            </RouterLink>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import * as Tone from 'tone'

export default {
  name: 'Home',
  data() {
    return {
      isLoaded: false,
      imgPath1: require('../assets/img/c3/3-2/2536_Secondary.jpeg'),
      imgPath2: require('../assets/img/c3/3-2/4361.jpeg'),
      imgPath3: require('../assets/img/c3/3-2/6251.jpeg'),
      key: [],
      chords: [],
      chordsvalue1: '',
      chordsvalue2: '',
      chordsvalue3: '',
      chordsvalue4: '',
      num: 0,
      isActive1: true,
      isActive2: true,
      isActive3: true,
      tone: []
    }
  },
  watch: {
    chords: function () {
      if (this.key[0] === '2-1' && this.key[1] === '5' && this.key[2] === '3-1' && this.key[3] === '6-2') {
        this.isActive1 = false
      } else if (this.key[0] === '6-1' && this.key[1] === '2-2' && this.key[2] === '5' && this.key[3] === '1-1'){
          this.isActive2 = false
      } else if (this.key[0] === '4' && this.key[1] === '3-2' && this.key[2] === '6-1' && this.key[3] === '1-2'){
          this.isActive3 = false
      }
    }
  },
  methods: {
    playSounds1() {
      document.getElementById('audioElement1').play()
    },
    playSounds2() {
      document.getElementById('audioElement4').play()
    },
    playSounds3() {
      document.getElementById('audioElement2').play()
    },
    playSounds4() {
      document.getElementById('audioElement5').play()
    },
    playSounds5() {
      document.getElementById('audioElement3').play()
    },
    playSounds6() {
      document.getElementById('audioElement6').play()
    },
    stopSounds: function() {
      document.getElementById('audioElement1').pause();
      document.getElementById('audioElement1').currentTime = 0;
      document.getElementById('audioElement2').pause();
      document.getElementById('audioElement2').currentTime = 0;
      document.getElementById('audioElement3').pause();
      document.getElementById('audioElement3').currentTime = 0;
      document.getElementById('audioElement4').pause();
      document.getElementById('audioElement4').currentTime = 0;
      document.getElementById('audioElement5').pause();
      document.getElementById('audioElement5').currentTime = 0;
      document.getElementById('audioElement6').pause();
      document.getElementById('audioElement6').currentTime = 0;

    },
    reset: function() {
      this.chords = []
      this.key = []
      this.num = 0
      this.isActive1 = true
      this.isActive2 = true
      this.isActive3 = true
      this.isActive4 = true
    },
    addNotes1: function () {
      if (this.num <= 3){
        this.num++
        this.key.push("1-1")
        this.chords.push("CM7")
      }else{
        console.log("over")
      }
    },
    addNotes2: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("2-1")
            this.chords.push("Dm7")
        }else{
            console.log("over")
        }
    },
    addNotes3: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("3-1")
            this.chords.push("Em7")
        }else{
            console.log("over")
        }
    },
    addNotes4: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("4")
            this.chords.push("FM7")
        }else{
            console.log("over")
        }
    },
    addNotes5: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("5")
            this.chords.push("G7")
        }else{
            console.log("over")
        }
    },
    addNotes6: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("6-1")
            this.chords.push("Am7")
        }else{
            console.log("over")
        }
    },
    addNotes7: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("1-2")
            this.chords.push("C7")
        }else{
            console.log("over")
        }
    },
    addNotes8: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("2-2")
            this.chords.push("D7")
        }else{
            console.log("over")
        }
    },
    addNotes9: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("3-2")
            this.chords.push("E7")
        }else{
            console.log("over")
        }
    },
    addNotes10: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("6-2")
            this.chords.push("A7")
        }else{
            console.log("over")
        }
    },
  },
}
</script>
