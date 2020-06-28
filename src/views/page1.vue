<template>
<div id="#app">
    <div class="main-wrapper">
        <h2 class="title title-sub border"><font-awesome-icon icon="angle-double-right" class="icon" />Chapter1-1. ダイアトニックコード (三和音)</h2>
        <p class="text">ダイアトニックコードとは、メジャースケールやマイナースケール上に成り立つ7つのコードです。</p>
        <div class="bold"><font-awesome-icon icon="caret-down" class="icon" />Cメジャーのダイアトニックコード(三和音)</div>
        <img class="image" v-bind:src="imgPath1" alt="Cメジャースケール">
        <audio id="audioElement1" src='../assets/mp3/1-1/Diatonic_Chords_Triad.mp3'></audio>
        <div class="flex">
            <div class="button bg-2" @click="playSounds1"><font-awesome-icon icon="play" class="icon" />Play</div>
            <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
        </div>

        <div class="bold"><font-awesome-icon icon="caret-down" class="icon" />Cメジャーのダイアトニックコード (四和音)</div>
        <img class="image" v-bind:src="imgPath2" alt="Cダイアトニックコード">
        <audio id="audioElement2" src='../assets/mp3/1-1/Diatonic_Chords_Seventh.mp3'></audio>
        <div class="flex">
            <div class="button bg-2" @click="playSounds2"><font-awesome-icon icon="play" class="icon" />Play</div>
            <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
        </div>
        <p class="text">他のメジャーキーに移調してもコードの並び方は変わらないのでダイアトニックコードをローマ字数字表記のディグリーネームで把握するとよいでしょう。</p>
        <p class="text">ただし、楽曲の中でこれら7つのコードが必ず全て使われるというわけではありません。<br>
        次のページでは4つのコードに絞ってコード進行を作ってみましょう。</p>

        <div class="button next bg-1">
            <RouterLink to="/page2">
                <font-awesome-icon icon="angle-right" class="icon" />NEXT 1-2
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
      imgPath1: require('../assets/img/c1/1-1/01.jpg'),
      imgPath2: require('../assets/img/c1/1-1/02.jpg'),
      isActive: true,
    }
  },
  methods: {
    playSounds1() {
        document.getElementById('audioElement1').play()
    },
    playSounds2() {
        document.getElementById('audioElement2').play()
    },
    stopSounds: function() {
        document.getElementById('audioElement1').pause();
        document.getElementById('audioElement1').currentTime = 0;
        document.getElementById('audioElement2').pause();
        document.getElementById('audioElement2').currentTime = 0;
    },
  }
}
</script>
