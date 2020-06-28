<template>
<div id="#app">
    <div class="main-wrapper">
        <h2 class="title title-sub border"><font-awesome-icon icon="angle-double-right" class="icon" />Chapter3-1. セカンダリードミナントコード</h2>
        <p class="text">セカンダリードミナントコードに触れる前にドミナントモーションについてもう少し詳しく見ていきましょう。</p>

        <p class="text">Ⅴ7(ドミナントコード)が不安定な響きがするのは、構成音にトライトーンを含むからです。<br>
        CメジャーキーのⅤ7はG7でトライトーンはシとファの音にあたります。</p>
        <img class="image half" v-bind:src="imgPath1" alt="トライトーン">
        <audio id="audioElement1" src='../assets/mp3/3-1/Tritone.mp3'></audio>
        <div class="flex">
            <div class="button bg-2" @click="playSounds1"><font-awesome-icon icon="play" class="icon" />Play</div>
            <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
        </div>

        
        <p class="text">シが半音上に、ファが半音下に進むとそれぞれドとミ、Cのコード構成音に着地します。<br>
        G7→C、不安定→安定になるので強い進行感が得られます。</p>
        <p class="text">またルート(コードの最低音)がソ→ドと完全4度上行しており、この動きも強い進行感を持ちます。(強進行)</p>

        <img class="image half" v-bind:src="imgPath2" alt="ドミナントモーション">
        <audio id="audioElement2" src='../assets/mp3/3-1/Dominant_Motion.mp3'></audio>
        <div class="flex">
            <div class="button bg-2" @click="playSounds2"><font-awesome-icon icon="play" class="icon" />Play</div>
            <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
        </div>
        
        <p class="text">メジャーキーのダイアトニックコードのなかでドミナントモーションはⅤ7→Ⅰしかありませんが、<br>
        ダイアトニックコードにはないドミナントコードを挿入することで他の箇所でもドミナントモーションを起こすことができます。<br>
        これらのコードを<span class="bold">セカンダリードミナントコード</span>と言い、以下の通りです。</p>

        <div class="flex wrap">

          <div class="half">
            <img class="image" v-bind:src="imgPath3" alt="ドミナントモーション">
              <div class="button bg-2" @click="playSounds3"><font-awesome-icon icon="play" class="icon" />Play</div>
              <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
              <audio id="audioElement3" src='../assets/mp3/3-1/Sdom_ex_1.mp3'></audio>
          </div>

          <div class="half">
            <img class="image" v-bind:src="imgPath4" alt="ドミナントモーション">
              <div class="button bg-2" @click="playSounds4"><font-awesome-icon icon="play" class="icon" />Play</div>
              <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
              <audio id="audioElement4" src='../assets/mp3/3-1/Sdom_ex_2.mp3'></audio>
          </div>

          <div class="half">
            <img class="image" v-bind:src="imgPath5" alt="ドミナントモーション">
              <div class="button bg-2" @click="playSounds5"><font-awesome-icon icon="play" class="icon" />Play</div>
              <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
              <audio id="audioElement5" src='../assets/mp3/3-1/Sdom_ex_3.mp3'></audio>
          </div>

          <div class="half">
            <img class="image" v-bind:src="imgPath6" alt="ドミナントモーション">
              <div class="button bg-2" @click="playSounds6"><font-awesome-icon icon="play" class="icon" />Play</div>
              <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
              <audio id="audioElement6" src='../assets/mp3/3-1/Sdom_ex_4.mp3'></audio>
          </div>

          <div class="half">
            <img class="image" v-bind:src="imgPath7" alt="ドミナントモーション">
              <div class="button bg-2" @click="playSounds7"><font-awesome-icon icon="play" class="icon" />Play</div>
              <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
              <audio id="audioElement7" src='../assets/mp3/3-1/Sdom_ex_5.mp3'></audio>
          </div>

          
          
        </div>

        <p class="text">次のページではセカンダリードミナントコードを使ったコード進行を作ってみましょう。</p>

        <div class="button next bg-1">
            <RouterLink to="/page9">
                <font-awesome-icon icon="angle-right" class="icon" />NEXT 3-2
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
      imgPath1: require('../assets/img/c3/3-1/tritone.jpg'),
      imgPath2: require('../assets/img/c3/3-1/Dominant_Motion.jpeg'),
      imgPath3: require('../assets/img/c3/3-1/Secondary_Dominant_1.jpeg'),
      imgPath4: require('../assets/img/c3/3-1/Secondary_Dominant_2.jpeg'),
      imgPath5: require('../assets/img/c3/3-1/Secondary_Dominant_3.jpeg'),
      imgPath6: require('../assets/img/c3/3-1/Secondary_Dominant_6.jpeg'),
      imgPath7: require('../assets/img/c3/3-1/Secondary_Dominant_7.jpeg'),
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
    playSounds3() {
        document.getElementById('audioElement3').play()
    },
    playSounds4() {
        document.getElementById('audioElement4').play()
    },
    playSounds5() {
        document.getElementById('audioElement5').play()
    },
    playSounds6() {
        document.getElementById('audioElement6').play()
    },
    playSounds7() {
        document.getElementById('audioElement7').play()
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
        document.getElementById('audioElement7').pause();
        document.getElementById('audioElement7').currentTime = 0;
    },
  }
}
</script>
