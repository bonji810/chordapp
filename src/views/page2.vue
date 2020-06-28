<template>
<div id="#app">
    <div class="main-wrapper">
        <h2 class="title title-sub border"><font-awesome-icon icon="angle-double-right" class="icon" />Chapter1-2.  1-5-6-4</h2>
        <p class="text">1-5-6-4進行は多くのポップスで使われおり、この繰り返しのみで出来ている楽曲も少なくありません。</p>
        <img class="image" v-bind:src="imgPath1" alt="1-5-6-4-進行">
        <p class="text">また、開始点をずらすだけで印象の異なるコード進行になります。</p>
        <img class="image" v-bind:src="imgPath2" alt="コード進行の開始点をずらした説明">
        <img class="image" v-bind:src="imgPath3" alt="4-1-5-6進行">
        <img class="image" v-bind:src="imgPath4" alt="6-4-1-5進行">
        
        <p class="text">次のクエスチョンで、実際のコードの響きを確かめてみましょう。</p>

        <h3 class="text"><font-awesome-icon icon="star" class="icon" />Try!：次のようににコードを並べてみましょう。<br>
        それに合ったコード進行と、リズムパターンをつけた実践的な例が聴けるようになります。<br>
        1:【Ⅰ-Ⅴ-Ⅵm-Ⅳ】  2:【Ⅳ-Ⅰ-Ⅴ-Ⅵm】　3:【Ⅵm-Ⅳ-Ⅰ-Ⅴ】</h3>

            <div class="flex">
                <div class="chords-wrapper flex between">
                        <div class="button notes result-color" id="first" @click="addNotes1">Ⅰ</div>
                        <div class="button notes result-color" id="second" @click="addNotes2">Ⅳ</div>
                        <div class="button notes result-color" id="third" @click="addNotes3">Ⅴ</div>
                        <div class="button notes result-color" id="forth" @click="addNotes4">Ⅵm</div>
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
                <audio id="audioElement1" src='../assets/mp3/1-2/1564_Piano.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive2" v-on:click="playSounds3"><font-awesome-icon icon="play" class="icon" />pattern2</button>
                <audio id="audioElement2" src='../assets/mp3/1-2/4156_Piano.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive3" v-on:click="playSounds5"><font-awesome-icon icon="play" class="icon" />pattern3</button>
                <audio id="audioElement3" src='../assets/mp3/1-2/6415_Piano.mp3'></audio>
            </div>
            <div class="flex">
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive1" v-on:click="playSounds2"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement4" src='../assets/mp3/1-2/1564_rhythm.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive2" v-on:click="playSounds4"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement5" src='../assets/mp3/1-2/4156_rhythm.mp3'></audio>
                <button id="playbutton" class="button playbutton bg-3" v-bind:disabled="isActive3" v-on:click="playSounds6"><font-awesome-icon icon="play" class="icon" />example</button>
                <audio id="audioElement6" src='../assets/mp3/1-2/6415_rhythm.mp3'></audio>
            </div>
            <div class="flex">
                <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
                <div class="button bg-2" @click="reset"><font-awesome-icon icon="spinner" class="icon" />Reset</div>
            </div>
            
        <div class="button next bg-1">
            <RouterLink to="/page3">
                <font-awesome-icon icon="angle-right" class="icon" />Chapter.2
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
      imgPath1: require('../assets/img/c1/1-2/1564.jpg'),
      imgPath2: require('../assets/img/c1/1-2/6-4-1-5.jpg'),
      imgPath3: require('../assets/img/c1/1-2/4156.jpg'),
      imgPath4: require('../assets/img/c1/1-2/6415.jpg'),
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
      if (this.key[0] === '1' && this.key[1] === '5' && this.key[2] === '6' && this.key[3] === '4') {
        this.isActive1 = false
      } else if (this.key[0] === '4' && this.key[1] === '1' && this.key[2] === '5' && this.key[3] === '6'){
          this.isActive2 = false
      } else if (this.key[0] === '6' && this.key[1] === '4' && this.key[2] === '1' && this.key[3] === '5'){
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
        this.key.push("1")
        this.chords.push("C")
      }else{
        console.log("over")
      }
    },
    addNotes2: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("4")
            this.chords.push("F")
        }else{
            console.log("over")
        }
    },
    addNotes3: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("5")
            this.chords.push("G")
        }else{
            console.log("over")
        }
    },
    addNotes4: function () {
        if (this.num <= 3){
            this.num++
            this.key.push("6")
            this.chords.push("Am")
        }else{
            console.log("over")
        }
    },
  },
}
</script>
