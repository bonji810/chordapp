<template>
<div id="#app">
    <div class="main-wrapper">
        <h2 class="title title-sub border"><font-awesome-icon icon="angle-double-right" class="icon" />Chapter2-1. トニック、ドミナント、サブドミナント</h2>
        <p class="text">ダイアトニックコードはそれぞれ機能をもっており、3つに分類分けできます。</p>
        <img class="image" v-bind:src="imgPath1" alt="トニック、ドミナント、サブドミナント">

        <div class="bold"><font-awesome-icon icon="caret-down" class="icon" />トニック(T)コード(Ⅰ、ⅠM7)</div>
        <p class="text">安定した響きを持つコードです。</p>
        <div class="bold"><font-awesome-icon icon="caret-down" class="icon" />サブドミナント(SD)コード(Ⅳ)</div>
        <p class="text">やや不安定な響き。</p>
        <div class="bold"><font-awesome-icon icon="caret-down" class="icon" />ドミナント(D)コード(Ⅴ,Ⅴ7)</div>
        <p class="text">不安定な響きを持っており、安定しているトニックに落ち着こうとする働きをします。<br>
        このことを<span class="bold">ドミナントモーション</span>と言います。</p>

        <img class="image half" v-bind:src="imgPath2" alt="ドミナントモーション">
        <audio id="audioElement1" src='../assets/mp3/2-1/Dominant_Motion.mp3'></audio>
        <div class="flex">
            <div class="button bg-2" @click="playSounds"><font-awesome-icon icon="play" class="icon" />Play</div>
            <div class="button bg-2" @click="stopSounds"><font-awesome-icon icon="stop" class="icon" />Stop</div>
        </div>

        <p class="text">また、残りのⅡm7、Ⅲm7、Ⅵm7、Ⅶm7 (♭5)もトニック、ドミナント、サブドミナントのいずれかに分類されます。</p>
        <img class="image" v-bind:src="imgPath3" alt="トニック、ドミナント、サブドミナント">

        <p class="text">Ⅲm7、Ⅵm7はⅠM7と、Ⅱm7はⅣM7と、Ⅶm7 (♭5)はⅤ7とそれぞれ共通の構成音を多く持つので、このように分類分けされます。</p>
        <div class="flex wrap">
            <img class="image half" v-bind:src="imgPath4" alt="1-3進行">
            <img class="image half" v-bind:src="imgPath5" alt="1-6進行">
            <img class="image half" v-bind:src="imgPath6" alt="4-2進行">
            <img class="image half" v-bind:src="imgPath7" alt="5-7進行">
        </div>
        
        <p class="text">次のページでは、トニック、ドミナント、サブドミナントを意識してコード進行を作ってみましょう。</p>
        <div class="button next bg-1">
            <RouterLink to="/page4">
                <font-awesome-icon icon="angle-right" class="icon" />NEXT 2-2
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
      imgPath1: require('../assets/img/c2/2-1/01.jpg'),
      imgPath2: require('../assets/img/c2/2-1/02.jpg'),
      imgPath3: require('../assets/img/c2/2-1/03.jpg'),
      imgPath4: require('../assets/img/c2/2-1/Common_Tone_1_3.jpg'),
      imgPath5: require('../assets/img/c2/2-1/Common_Tone_1_6.jpg'),
      imgPath6: require('../assets/img/c2/2-1/Common_Tone_4_2.jpg'),
      imgPath7: require('../assets/img/c2/2-1/Common_Tone_5_7.jpg'),
      isActive: true,
    }
  },
  methods: {
    playSounds() {
        document.getElementById('audioElement1').play()
    },
    stopSounds: function() {
        document.getElementById('audioElement1').pause();
        document.getElementById('audioElement1').currentTime = 0;
    },
  }
}
</script>
