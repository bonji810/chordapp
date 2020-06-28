<template>
<div id="#app">
    <div class="main-wrapper">
        <div class="flex">
            <div class="button bg-1" @click="logout">ログアウト</div>
        </div>

        <h1 class="border"><font-awesome-icon icon="angle-double-right" class="icon" />作曲を体験してみよう</h1>
            <p class="text">学習した知識を使って作曲を体験してみましょう。</p>
                <label for="key"><font-awesome-icon icon="caret-down" class="icon" />STEP1:キーを選んでください　</label>
                <select name="key" id="changeKey" class="button bg-1" v-model="changeKey">key
                    <option value="" disabled seleced>key select</option>
                    <option value="+0">C</option>
                    <option value="+1">D</option>
                    <option value="+2">E</option>
                    <option value="+3">F</option>
                    <option value="+4">G</option>
                    <option value="+5">A</option>
                    <option value="+6">B</option>
                </select>
            <p class="text"><font-awesome-icon icon="caret-down" class="icon" />STEP2:お好みのコードを<span class="bold">8つ</span>選んでください</p>

            <div class="margin-b">ダイアトニックコード(三和音)</div>
            <div class="flex between margin-b">
                <button class="button notes color-1" id="first" @click="addNotes1"  v-bind:disabled="isActive1">Ⅰ</button>
                <button class="button notes color-2" id="forth" @click="addNotes7" v-bind:disabled="isActive1">Ⅱm</button>
                <button class="button notes color-3" id="forth" @click="addNotes5" v-bind:disabled="isActive1">Ⅲm</button>
                <button class="button notes color-4" id="third" @click="addNotes10" v-bind:disabled="isActive1">Ⅳ</button>
                <button class="button notes color-5" id="forth" @click="addNotes12" v-bind:disabled="isActive1">Ⅴ</button>
                <button class="button notes color-6" id="forth" @click="addNotes18" v-bind:disabled="isActive1">Ⅵm</button>
                <button class="button notes color-7" id="forth" @click="addNotes17" v-bind:disabled="isActive1">Ⅶm(♭5)</button>
            </div>

            <div class="margin-b">ダイアトニックコード(四和音)</div>
            <div class="flex between margin-b">
                <button class="button notes color-1" id="second" @click="addNotes9" v-bind:disabled="isActive1">ⅠM7</button>
                <button class="button notes color-2" id="first" @click="addNotes8"  v-bind:disabled="isActive1">Ⅱm7</button>
                <button class="button notes color-3" id="forth" @click="addNotes6" v-bind:disabled="isActive1">Ⅲm7</button>
                <button class="button notes color-4" id="forth" @click="addNotes11" v-bind:disabled="isActive1">ⅣM7</button>
                <button class="button notes color-5" id="forth" @click="addNotes13" v-bind:disabled="isActive1">Ⅴ7</button>
                <button class="button notes color-6" id="forth" @click="addNotes19" v-bind:disabled="isActive1">Ⅵm7</button>
                <button class="button notes color-7" id="third" @click="addNotes16" v-bind:disabled="isActive1">Ⅶm7(♭5)</button>
            </div>

            <div class="margin-b">セカンダリードミナント</div>
            <div class="flex between margin-b">
                <button class="button notes color-1" id="second" @click="addNotes2" v-bind:disabled="isActive1">Ⅰ7</button>
                <button class="button notes color-2" id="third" @click="addNotes3" v-bind:disabled="isActive1">Ⅱ7</button>
                <button class="button notes color-3" id="forth" @click="addNotes4" v-bind:disabled="isActive1">Ⅲ7</button>
                <button class="button notes color-4" id="first" @click="addNotes14"  v-bind:disabled="isActive1">Ⅵ7</button>
                <button class="button notes color-5" id="second" @click="addNotes15" v-bind:disabled="isActive1">Ⅶ7</button>
            </div>
            <p class="text"><font-awesome-icon icon="caret-down" class="icon" />STEP3:お好みのリズムパターンを選んでください</p>
            <div class="flex">
                <button class="button bg-3" @click="drumSetBeat1" v-bind:disabled="isActive2">beat1(bpm=70)</button>
                <button class="button bg-3" @click="drumSetBeat2" v-bind:disabled="isActive2">beat2(bpm=85)</button>
                <button class="button bg-3" @click="drumSetBeat3" v-bind:disabled="isActive2">beat3(bpm=90)</button>
            </div>

            <h3><font-awesome-icon icon="star" class="icon" />Let's Play!</h3>
            <div class="flex between result-wrapper">
                <div v-for="item in chords" v-bind:key="item.imdex"  class="button notes result-color">
                    {{ item }}
                </div>
            </div>

            <div class="flex">
                <button class="button bg-2" @click="playSounds" v-bind:disabled="isActive3"><font-awesome-icon icon="play" class="icon" />Play</button>
                <button class="button bg-2" @click="stopSounds" v-bind:disabled="isActive3"><font-awesome-icon icon="stop" class="icon" />Stop</button>
                <button class="button bg-2" @click="reset" v-bind:disabled="isActive3"><font-awesome-icon icon="spinner" class="icon" />Reset</button>
            </div>

                <p class="text">コード進行のメモです。良いアイデアはタイトルをつけて、共有してみてください！<br>
                コピーボタンでクリップボードにコピーができます。</p>
            <div class="flex center">
                <textarea type="text" class="input-text textarea" v-model="chords" readonly></textarea>
                <button type="button" class="button copy bg-3"
                            v-clipboard:copy="chords"
                            v-clipboard:success="onCopy"
                            v-clipboard:error="onError">Copy!</button>
            </div>

            <label for="name">名前</label><input name="name" type="text" class="input-text" v-model="name">
            <label for="title">タイトル</label><input name="title" type="text" class="input-text" v-model="message">
            <label for="comment">コメント</label><textarea name="comment" class="input-text textarea" v-model="comment"></textarea>
            <button type="button" class="button bg-1" @click="pushData"><font-awesome-icon icon="angle-right" class="icon" />送信</button>

            <div>
                <h3><font-awesome-icon icon="star" class="icon" />みんなが投稿したコード進行アイデア</h3>
                <ul>
                    <li v-for="(item, index) in list" v-bind:key="index" class="share-wrapper">
                        <div class="flex center">
                            <font-awesome-icon icon="caret-right" class="icon" />
                            <div class="item-name">名前：{{item.name}}</div>
                            <div class="item-message">タイトル：{{item.message}}</div>
                        </div>
                        <div class="item-contents">内容：{{ item.contents }}</div>
                        <div class="item-comment">コメント：{{ item.comment }}</div>
                    </li>
                </ul>
            </div>
            
    </div>
</div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import * as Tone from 'tone'
import { Sampler } from "tone";
import { sequience } from "tone"
import C1 from '../assets/mp3/chords/01.mp3'
import C2 from '../assets/mp3/chords/02.mp3'
import C3 from '../assets/mp3/chords/03.mp3'
import C4 from '../assets/mp3/chords/04.mp3'
import C5 from '../assets/mp3/chords/05.mp3'
import C6 from '../assets/mp3/chords/06.mp3'
import C7 from '../assets/mp3/chords/07.mp3'
import C8 from '../assets/mp3/chords/08.mp3'
import C9 from '../assets/mp3/chords/09.mp3'
import C10 from '../assets/mp3/chords/10.mp3'
import C11 from '../assets/mp3/chords/11.mp3'
import C12 from '../assets/mp3/chords/12.mp3'
import C13 from '../assets/mp3/chords/13.mp3'
import C14 from '../assets/mp3/chords/14.mp3'
import C15 from '../assets/mp3/chords/15.mp3'
import C16 from '../assets/mp3/chords/16.mp3'
import C17 from '../assets/mp3/chords/17.mp3'
import C18 from '../assets/mp3/chords/18.mp3'
import C19 from '../assets/mp3/chords/19.mp3'
import C20 from '../assets/mp3/drums/Drums_1.mp3'
import C21 from '../assets/mp3/drums/Drums_2.mp3'
import C22 from '../assets/mp3/drums/Drums_3.mp3'
import C23 from '../assets/mp3/drums/Drums_4.mp3'


export default {
    props: ["user"],
    data() {
        return{
            // Tone.js関連

            isLoaded: false,
            playCount: 0,
            tone: {
                Chords1: { key: "C1", chord: "C" },
                Chords2: { key: "C2", chord: "C7" },
                Chords3: { key: "C3", chord: "D7" },
                Chords4: { key: "C4", chord: "E7" },
                Chords5: { key: "C5",  chord: "Em" },
                Chords6: { key: "C6", chord: "Em7" },
                Chords7: { key: "C7", chord: "Dm" },
                Chords8: { key: "C8", chord: "Dm7" },
                Chords9: { key: "C9", chord: "CM7" },
                Chords10: { key: "C10", chord: "F" },
                Chords11: { key: "C11", chord: "FM7" },
                Chords12: { key: "C12",  chord: "G" },
                Chords13: { key: "C13", chord: "G7" },
                Chords14: { key: "C14", chord: "A7" },
                Chords15: { key: "C15", chord: "B7" },
                Chords16: { key: "C16",  chord: "Bm(♭5)" },
                Chords17: { key: "C17", chord: "Bm7(♭5)" },
                Chords18: { key: "C18", chord: "Am" },
                Chords19: { key: "C19", chord: "Am7" },
            },
            playNotes: [],
            chords: [],
            rhythemPattern: {
                beat1: ["C20","C20","C20","C20","C20","C20","C20","C20"],
                beat2: ["C21","C21","C21","C21","C21","C21","C21","C21"],
                beat3: ["C22","C23","C22","C23","C22","C23","C22","C23"],
            },
            rhythem: '',
            bpm: 70,
            changeKey: '',
            selectChord: '',
            activecount: 0,
            isActive1: true,
            isActive2: true,
            isActive3: true,

            // Firebase関連
            name: '',
            message: '',
            contents: '',
            comment: '',
            list: [],
            isLogin: '',
            show: false
        }
    },
    created: function() {
        this.sampler = new Sampler(
        { C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23 },
        {　onload: () => {　this.isLoaded = true;　}}).toMaster();

        // firebaseからデータ取得
        firebase.database().ref('myBoard/').on('value', snapshot =>{
            if (snapshot) {
                const rootList = snapshot.val()
                let list = []
                Object.keys(rootList).forEach((val, key) => {
                    rootList[val].id = val
                    list.push(rootList[val])
                })
                this.list = list
            }
        })
    },
    watch: {
        changeKey: function(newVal) {
            this.isActive1 = false
            this.isActive2 = false
           switch(newVal){
               case "+0":
                   this.tone.Chords1.key = "C1"
                   this.tone.Chords2.key = "C2"
                   this.tone.Chords3.key = "C3"
                   this.tone.Chords4.key = "C4"
                   this.tone.Chords5.key = "C5"
                   this.tone.Chords6.key = "C6"
                   this.tone.Chords7.key = "C7"
                   this.tone.Chords8.key = "C8"
                   this.tone.Chords9.key = "C9"
                   this.tone.Chords10.key = "C10"
                   this.tone.Chords11.key = "C11"
                   this.tone.Chords12.key = "C12"
                   this.tone.Chords13.key = "C13"
                   this.tone.Chords14.key = "C14"
                   this.tone.Chords15.key = "C15"
                   this.tone.Chords16.key = "C16"
                   this.tone.Chords17.key = "C17"
                   this.tone.Chords18.key = "C18"
                   this.tone.Chords19.key = "C19"
                   break;
               case "+1":
                   this.tone.Chords1.key = "D1"
                   this.tone.Chords2.key = "D2"
                   this.tone.Chords3.key = "D3"
                   this.tone.Chords4.key = "D4"
                   this.tone.Chords5.key = "D5"
                   this.tone.Chords6.key = "D6"
                   this.tone.Chords7.key = "D7"
                   this.tone.Chords8.key = "D8"
                   this.tone.Chords9.key = "D9"
                   this.tone.Chords10.key = "D10"
                   this.tone.Chords11.key = "D11"
                   this.tone.Chords12.key = "D12"
                   this.tone.Chords13.key = "D13"
                   this.tone.Chords14.key = "D14"
                   this.tone.Chords15.key = "D15"
                   this.tone.Chords16.key = "D16"
                   this.tone.Chords17.key = "D17"
                   this.tone.Chords18.key = "D18"
                   this.tone.Chords19.key = "D19"

                   this.tone.Chords1.chord = "D"
                   this.tone.Chords2.chord = "D7"
                   this.tone.Chords3.chord = "E7"
                   this.tone.Chords4.chord = "F#7"
                   this.tone.Chords5.chord = "F#m"
                   this.tone.Chords6.chord = "F#m7"
                   this.tone.Chords7.chord = "Em"
                   this.tone.Chords8.chord = "Em7"
                   this.tone.Chords9.chord = "DM7"
                   this.tone.Chords10.chord = "G"
                   this.tone.Chords11.chord = "GM7"
                   this.tone.Chords12.chord = "A"
                   this.tone.Chords13.chord = "A7"
                   this.tone.Chords14.chord = "B7"
                   this.tone.Chords15.chord = "C#7"
                   this.tone.Chords16.chord = "C#m(♭5)"
                   this.tone.Chords17.chord = "C#m7(♭5)"
                   this.tone.Chords18.chord = "Bm"
                   this.tone.Chords19.chord = "Bm7"
                   break;
               case "+2":
                   this.tone.Chords1.key = "E1"
                   this.tone.Chords2.key = "E2"
                   this.tone.Chords3.key = "E3"
                   this.tone.Chords4.key = "E4"
                   this.tone.Chords5.key = "E5"
                   this.tone.Chords6.key = "E6"
                   this.tone.Chords7.key = "E7"
                   this.tone.Chords8.key = "E8"
                   this.tone.Chords9.key = "E9"
                   this.tone.Chords10.key = "E10"
                   this.tone.Chords11.key = "E11"
                   this.tone.Chords12.key = "E12"
                   this.tone.Chords13.key = "E13"
                   this.tone.Chords14.key = "E14"
                   this.tone.Chords15.key = "E15"
                   this.tone.Chords16.key = "E16"
                   this.tone.Chords17.key = "E17"
                   this.tone.Chords18.key = "E18"
                   this.tone.Chords19.key = "E19"

                   this.tone.Chords1.chord = "E"
                   this.tone.Chords2.chord = "E7"
                   this.tone.Chords3.chord = "F#7"
                   this.tone.Chords4.chord = "G#7"
                   this.tone.Chords5.chord = "G#m"
                   this.tone.Chords6.chord = "G#m7"
                   this.tone.Chords7.chord = "F#m"
                   this.tone.Chords8.chord = "F#m7"
                   this.tone.Chords9.chord = "EM7"
                   this.tone.Chords10.chord = "A"
                   this.tone.Chords11.chord = "AM7"
                   this.tone.Chords12.chord = "B"
                   this.tone.Chords13.chord = "B7"
                   this.tone.Chords14.chord = "C#7"
                   this.tone.Chords15.chord = "D#7"
                   this.tone.Chords16.chord = "D#m(♭5)"
                   this.tone.Chords17.chord = "D#m7(♭5)"
                   this.tone.Chords18.chord = "C#m"
                   this.tone.Chords19.chord = "C#m7"
                   break;
               case "+3":
                   this.tone.Chords1.key = "F1"
                   this.tone.Chords2.key = "F2"
                   this.tone.Chords3.key = "F3"
                   this.tone.Chords4.key = "F4"
                   this.tone.Chords5.key = "F5"
                   this.tone.Chords6.key = "F6"
                   this.tone.Chords7.key = "F7"
                   this.tone.Chords8.key = "F8"
                   this.tone.Chords9.key = "F9"
                   this.tone.Chords10.key = "F10"
                   this.tone.Chords11.key = "F11"
                   this.tone.Chords12.key = "F12"
                   this.tone.Chords13.key = "F13"
                   this.tone.Chords14.key = "F14"
                   this.tone.Chords15.key = "F15"
                   this.tone.Chords16.key = "F16"
                   this.tone.Chords17.key = "F17"
                   this.tone.Chords18.key = "F18"
                   this.tone.Chords19.key = "F19"

                   this.tone.Chords1.chord = "F"
                   this.tone.Chords2.chord = "F7"
                   this.tone.Chords3.chord = "G7"
                   this.tone.Chords4.chord = "A7"
                   this.tone.Chords5.chord = "Am"
                   this.tone.Chords6.chord = "Am7"
                   this.tone.Chords7.chord = "Gm"
                   this.tone.Chords8.chord = "Gm7"
                   this.tone.Chords9.chord = "FM7"
                   this.tone.Chords10.chord = "B♭"
                   this.tone.Chords11.chord = "B♭M7"
                   this.tone.Chords12.chord = "C"
                   this.tone.Chords13.chord = "C7"
                   this.tone.Chords14.chord = "D7"
                   this.tone.Chords15.chord = "E7"
                   this.tone.Chords16.chord = "Em(♭5)"
                   this.tone.Chords17.chord = "Em7(♭5)"
                   this.tone.Chords18.chord = "Dm"
                   this.tone.Chords19.chord = "Dm7"
                   break;
               case "+4":
                   this.tone.Chords1.key = "G1"
                   this.tone.Chords2.key = "G2"
                   this.tone.Chords3.key = "G3"
                   this.tone.Chords4.key = "G4"
                   this.tone.Chords5.key = "G5"
                   this.tone.Chords6.key = "G6"
                   this.tone.Chords7.key = "G7"
                   this.tone.Chords8.key = "G8"
                   this.tone.Chords9.key = "G9"
                   this.tone.Chords10.key = "G10"
                   this.tone.Chords11.key = "G11"
                   this.tone.Chords12.key = "G12"
                   this.tone.Chords13.key = "G13"
                   this.tone.Chords14.key = "G14"
                   this.tone.Chords15.key = "G15"
                   this.tone.Chords16.key = "G16"
                   this.tone.Chords17.key = "G17"
                   this.tone.Chords18.key = "G18"
                   this.tone.Chords19.key = "G19"

                   this.tone.Chords1.chord = "G"
                   this.tone.Chords2.chord = "G7"
                   this.tone.Chords3.chord = "A7"
                   this.tone.Chords4.chord = "B7"
                   this.tone.Chords5.chord = "Bm"
                   this.tone.Chords6.chord = "Bm7"
                   this.tone.Chords7.chord = "Am"
                   this.tone.Chords8.chord = "Am7"
                   this.tone.Chords9.chord = "GM7"
                   this.tone.Chords10.chord = "C"
                   this.tone.Chords11.chord = "CM7"
                   this.tone.Chords12.chord = "D"
                   this.tone.Chords13.chord = "D7"
                   this.tone.Chords14.chord = "E7"
                   this.tone.Chords15.chord = "F#7"
                   this.tone.Chords16.chord = "F#m(♭5)"
                   this.tone.Chords17.chord = "F#m7(♭5)"
                   this.tone.Chords18.chord = "Em"
                   this.tone.Chords19.chord = "Em7"
                   break;
               case "+5":
                   this.tone.Chords1.key = "A1"
                   this.tone.Chords2.key = "A2"
                   this.tone.Chords3.key = "A3"
                   this.tone.Chords4.key = "A4"
                   this.tone.Chords5.key = "A5"
                   this.tone.Chords6.key = "A6"
                   this.tone.Chords7.key = "A7"
                   this.tone.Chords8.key = "A8"
                   this.tone.Chords9.key = "A9"
                   this.tone.Chords10.key = "A10"
                   this.tone.Chords11.key = "A11"
                   this.tone.Chords12.key = "A12"
                   this.tone.Chords13.key = "A13"
                   this.tone.Chords14.key = "A14"
                   this.tone.Chords15.key = "A15"
                   this.tone.Chords16.key = "A16"
                   this.tone.Chords17.key = "A17"
                   this.tone.Chords18.key = "A18"
                   this.tone.Chords19.key = "A19"

                   this.tone.Chords1.chord = "A"
                   this.tone.Chords2.chord = "A7"
                   this.tone.Chords3.chord = "B7"
                   this.tone.Chords4.chord = "C#7"
                   this.tone.Chords5.chord = "C#m"
                   this.tone.Chords6.chord = "C#m7"
                   this.tone.Chords7.chord = "Bm"
                   this.tone.Chords8.chord = "Bm7"
                   this.tone.Chords9.chord = "AM7"
                   this.tone.Chords10.chord = "D"
                   this.tone.Chords11.chord = "DM7"
                   this.tone.Chords12.chord = "E"
                   this.tone.Chords13.chord = "E7"
                   this.tone.Chords14.chord = "F#7"
                   this.tone.Chords15.chord = "G#7"
                   this.tone.Chords16.chord = "G#m(♭5)"
                   this.tone.Chords17.chord = "G#m7(♭5)"
                   this.tone.Chords18.chord = "F#m"
                   this.tone.Chords19.chord = "F#m7"
                   break;
               case "+6":
                   this.tone.Chords1.key = "B1"
                   this.tone.Chords2.key = "B2"
                   this.tone.Chords3.key = "B3"
                   this.tone.Chords4.key = "B4"
                   this.tone.Chords5.key = "B5"
                   this.tone.Chords6.key = "B6"
                   this.tone.Chords7.key = "B7"
                   this.tone.Chords8.key = "B8"
                   this.tone.Chords9.key = "B9"
                   this.tone.Chords10.key = "B10"
                   this.tone.Chords11.key = "B11"
                   this.tone.Chords12.key = "B12"
                   this.tone.Chords13.key = "B13"
                   this.tone.Chords14.key = "B14"
                   this.tone.Chords15.key = "B15"
                   this.tone.Chords16.key = "B16"
                   this.tone.Chords17.key = "B17"
                   this.tone.Chords18.key = "B18"
                   this.tone.Chords19.key = "B19"

                   this.tone.Chords1.chord = "B"
                   this.tone.Chords2.chord = "B7"
                   this.tone.Chords3.chord = "C#7"
                   this.tone.Chords4.chord = "D#7"
                   this.tone.Chords5.chord = "D#m"
                   this.tone.Chords6.chord = "D#m7"
                   this.tone.Chords7.chord = "C#m"
                   this.tone.Chords8.chord = "C#m7"
                   this.tone.Chords9.chord = "BM7"
                   this.tone.Chords10.chord = "E"
                   this.tone.Chords11.chord = "EM7"
                   this.tone.Chords12.chord = "F#"
                   this.tone.Chords13.chord = "F#7"
                   this.tone.Chords14.chord = "G#7"
                   this.tone.Chords15.chord = "A#7"
                   this.tone.Chords16.chord = "A#m(♭5)"
                   this.tone.Chords17.chord = "A#m7(♭5)"
                   this.tone.Chords18.chord = "G#m"
                   this.tone.Chords19.chord = "G#m7"
                   break;
               default:
               };
        },
        isLogin : function() {
            firebase.auth().onAuthStateChanged(user => {
            this.user = user ? user : {}
            })
        },
    },
    methods: {
        onCopy: function (e) {
            alert('クリップボードにコピーしました')
        },
        onError: function (e) {
            alert('クリップボードへのコピーが失敗しました')
        },
        drumSetBeat1: function () {
            this.rhythem = this.rhythemPattern.beat1
            this.activecount++
            if(this.activecount > 0){
                this.isActive2 = true
                this.isActive3 = false
            }
            console.log(this.activecount)
        },
        drumSetBeat2: function () {
            this.rhythem = this.rhythemPattern.beat2
            this.bpm = 85
            this.activecount++
            if(this.activecount > 0){
                this.isActive2 = true
                this.isActive3 = false
            }
            console.log(this.activecount)
        },
        drumSetBeat3: function () {
            this.rhythem = this.rhythemPattern.beat3
            this.bpm = 90
            this.activecount++
            if(this.activecount > 0){
                this.isActive2 = true
                this.isActive3 = false
            }
            console.log(this.activecount)
        },
        addNotes1: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords1.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords1.key)
                this.chords.push(this.tone.Chords1.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes2: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords2.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords2.key)
                this.chords.push(this.tone.Chords2.chord)
            } else {
                this.isActive1 = true
            }
        },
        addNotes3: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords3.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords3.key)
                this.chords.push(this.tone.Chords3.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes4: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords4.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords4.key)
                this.chords.push(this.tone.Chords4.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes5: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords5.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords5.key)
                this.chords.push(this.tone.Chords5.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes6: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords6.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords6.key)
                this.chords.push(this.tone.Chords6.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes7: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords7.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords7.key)
                this.chords.push(this.tone.Chords7.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes8: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords8.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords8.key)
                this.chords.push(this.tone.Chords8.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes9: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords9.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords9.key)
                this.chords.push(this.tone.Chords9.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes10: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords10.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords10.key)
                this.chords.push(this.tone.Chords10.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes11: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords11.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords11.key)
                this.chords.push(this.tone.Chords11.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes12: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords12.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords12.key)
                this.chords.push(this.tone.Chords12.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes13: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords13.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords13.key)
                this.chords.push(this.tone.Chords13.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes14: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords14.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords14.key)
                this.chords.push(this.tone.Chords14.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes15: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords15.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords15.key)
                this.chords.push(this.tone.Chords15.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes16: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords16.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords16.key)
                this.chords.push(this.tone.Chords16.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes17: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords17.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords17.key)
                this.chords.push(this.tone.Chords17.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes18: function() {
            if(this.playCount < 8){
                this.sampler.triggerAttackRelease(this.tone.Chords18.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords18.key)
                this.chords.push(this.tone.Chords18.chord)
            }else {
                this.isActive1 = true
            }
        },
        addNotes19: function() {
            if(this.playCount < 8){ 
                this.sampler.triggerAttackRelease(this.tone.Chords19.key);
                this.playCount++
                console.log(this.playCount)
                this.playNotes.push(this.tone.Chords19.key)
                this.chords.push(this.tone.Chords19.chord)
            }else {
                this.isActive1 = true
            }
        },
        playSounds: function() {
            const sound = note => {
		        this.sampler.triggerAttackRelease(note, 2);
            }
            const sequence1 = new Tone.Sequence((time, col) => {
                sound(this.playNotes[col]);
            }, [0, 1, 2, 3, 4, 5, 6, 7], "2n");
            const sequence2 = new Tone.Sequence((time, col) => {
                sound(this.rhythem[col]);
            }, [0, 1, 2, 3, 4, 5, 6, 7], "2n");
            Tone.Transport.bpm.value = this.bpm;
            Tone.Transport.start();
            sequence1.start(0);
            sequence2.start(0);
        },
        stopSounds: function() {
            Tone.Transport.stop();
            sequence.stop();
            Tone.Transport.cancel();
        },
        reset: function() {
            Tone.Transport.cancel();
            this.playNotes = []
            this.chords = []
            this.playCount = 0
            location.reload();
        },
        //firebase
        pushData: function () {
            if (!this.chords || !this.name){
                alert('内容をと名前を入力してください')
                return
            } 
            console.log('push')
            firebase.database().ref('myBoard/').push({
                name: this.name,
                message: this.message,
                contents: this.chords,
                comment: this.comment
            })
            location.reload();
        },
        logout: function() {
            firebase.auth().signOut();
        },
    }
    }
</script>
